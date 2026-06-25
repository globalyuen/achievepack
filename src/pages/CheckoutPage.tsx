import React, { useState, useEffect } from 'react'
import { Link, useNavigate, useSearchParams } from 'react-router-dom'
import { ArrowLeft, Lock, Loader2, Send, FileText, CreditCard, User, LogIn } from 'lucide-react'
import { useStore } from '../store/StoreContext'
import { supabase } from '../lib/supabase'
import { useAuth } from '../hooks/useAuth'
import { useTranslation } from 'react-i18next'

// Generate order/RFQ number
const generateOrderNumber = (isRfq: boolean = false) => {
  const date = new Date()
  const dateStr = `${date.getFullYear()}${String(date.getMonth() + 1).padStart(2, '0')}${String(date.getDate()).padStart(2, '0')}`
  const random = Math.floor(Math.random() * 10000).toString().padStart(4, '0')
  return isRfq ? `RFQ-${dateStr}-${random}` : `AP-${dateStr}-${random}`
}

const CheckoutPage: React.FC = () => {
  const { t } = useTranslation()
  const p = 'seoPages.pages.checkout'
  const { cart, cartTotal, clearCart, rfqCart, clearRfq } = useStore()
  const { user, loading: authLoading } = useAuth()
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()
  const [isProcessing, setIsProcessing] = useState(false)
  const [error, setError] = useState('')
  const [formData, setFormData] = useState({
    email: '', firstName: '', lastName: '', company: '',
    address: '', city: '', country: '', postalCode: '', phone: '',
    notes: '' // Additional notes for RFQ
  })
  
  // Check if this is RFQ mode
  const isRfqMode = searchParams.get('mode') === 'rfq'
  const activeItems = isRfqMode ? rfqCart : cart
  const activeTotal = isRfqMode 
    ? rfqCart.reduce((sum, item) => sum + item.totalPrice, 0)
    : cartTotal

  // Pre-fill email when user logs in
  useEffect(() => {
    if (user?.email && !formData.email) {
      setFormData(prev => ({ ...prev, email: user.email || '' }))
    }
  }, [user])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsProcessing(true)
    setError('')
    
    const orderNumber = generateOrderNumber(isRfqMode)
    
    try {
      if (isRfqMode) {
        // RFQ Mode: Save quote request to Supabase and send email
        const { error: dbError } = await supabase.from('quote_requests').insert({
          user_id: user?.id || null,
          rfq_number: orderNumber,
          status: 'pending',
          estimated_total: activeTotal,
          items: activeItems.map(item => ({
            productId: item.productId,
            name: item.name,
            variant: item.variant,
            quantity: item.quantity,
            unitPrice: item.unitPrice,
            totalPrice: item.totalPrice,
            customSize: item.customSize,
            configurationLink: item.configurationLink
          })),
          contact_info: {
            email: formData.email,
            firstName: formData.firstName,
            lastName: formData.lastName,
            company: formData.company,
            phone: formData.phone
          },
          shipping_address: {
            address: formData.address,
            city: formData.city,
            country: formData.country,
            zipCode: formData.postalCode
          },
          notes: formData.notes,
          customer_email: formData.email,
          customer_name: `${formData.firstName} ${formData.lastName}`
        })

        if (dbError) {
          console.error('Database error:', dbError)
        }

        // Send RFQ email notification
        try {
          await fetch('/api/send-rfq-email', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              rfqNumber: orderNumber,
              customerEmail: formData.email,
              customerName: `${formData.firstName} ${formData.lastName}`,
              company: formData.company,
              items: activeItems,
              estimatedTotal: activeTotal,
              notes: formData.notes,
              contactInfo: {
                phone: formData.phone,
                address: formData.address,
                city: formData.city,
                country: formData.country
              }
            })
          })
        } catch (emailError) {
          console.error('Email error:', emailError)
        }

        // Clear RFQ cart and redirect
        clearRfq()
        navigate('/store/rfq-confirmation', { state: { rfqNumber: orderNumber } })
      } else {
        // Normal Checkout Mode: Create Stripe checkout session
        // First save order as pending via API (bypasses RLS)
        let orderSaved = false
        try {
          const saveOrderResponse = await fetch('/api/save-order', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              orderNumber,
              userId: user?.id || null,
              customerEmail: formData.email,
              customerName: `${formData.firstName} ${formData.lastName}`,
              items: cart.map(item => ({
                productId: item.productId,
                name: item.name,
                variant: item.variant,
                quantity: item.quantity,
                unitPrice: item.unitPrice,
                totalPrice: item.totalPrice
              })),
              totalAmount: cartTotal,
              shippingAddress: {
                firstName: formData.firstName,
                lastName: formData.lastName,
                company: formData.company,
                address: formData.address,
                city: formData.city,
                country: formData.country,
                zipCode: formData.postalCode,
                phone: formData.phone
              },
              status: 'pending'
            })
          })
          const saveOrderResult = await saveOrderResponse.json()
          if (!saveOrderResult.success) {
            console.error('Order save error:', saveOrderResult.error)
            throw new Error(saveOrderResult.error || 'Failed to save order')
          }
          console.log('Order saved successfully:', orderNumber)
          orderSaved = true
        } catch (dbError: any) {
          console.error('Database error:', dbError)
          setError(t(`${p}.errorSave`))
          setIsProcessing(false)
          return // STOP - don't proceed to Stripe if order wasn't saved
        }

        // Only proceed to Stripe if order was saved successfully
        if (!orderSaved) {
          setError(t(`${p}.errorSaveOrder`))
          setIsProcessing(false)
          return
        }

        // Create Stripe checkout session
        try {
          const response = await fetch('/api/create-checkout-session', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              items: cart,
              customerEmail: formData.email,
              orderNumber,
              shippingAddress: {
                firstName: formData.firstName,
                lastName: formData.lastName,
                address: formData.address,
                city: formData.city,
                country: formData.country,
                zipCode: formData.postalCode
              }
            })
          })

          const data = await response.json()
          
          if (data.error) {
            throw new Error(data.error)
          }

          if (data.url) {
            // Redirect to Stripe Checkout
            window.location.href = data.url
            return
          } else {
            throw new Error('No checkout URL returned')
          }
        } catch (stripeError: any) {
          console.error('Stripe error:', stripeError)
          // Fallback: Save order and send email notification
          try {
            await fetch('/api/send-order-email', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({
                orderNumber,
                customerEmail: formData.email,
                customerName: `${formData.firstName} ${formData.lastName}`,
                items: cart,
                totalAmount: cartTotal,
                shippingAddress: {
                  firstName: formData.firstName,
                  lastName: formData.lastName,
                  address: formData.address,
                  city: formData.city,
                  state: '',
                  zipCode: formData.postalCode,
                  country: formData.country
                }
              })
            })
          } catch (emailError) {
            console.error('Email error:', emailError)
          }

          // Clear cart and redirect with note about payment
          clearCart()
          navigate('/store/order-confirmation', { 
            state: { 
              orderNumber,
              paymentNote: 'Payment processing is temporarily unavailable. Our team will contact you to complete your order.'
            } 
          })
        }
      }
    } catch (err) {
      console.error('Checkout error:', err)
      setError(t(`${p}.errorMsg`))
      setIsProcessing(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  if (activeItems.length === 0) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-neutral-50">
        <div className="text-center">
          {isRfqMode ? (
            <>
              <FileText className="h-16 w-16 text-neutral-300 mx-auto mb-4" />
              <p className="text-xl mb-4">{t(`${p}.emptyRfqTitle`)}</p>
              <p className="text-neutral-500 mb-6">{t(`${p}.emptyRfqDesc`)}</p>
            </>
          ) : (
            <p className="text-xl mb-4">{t(`${p}.emptyCartTitle`)}</p>
          )}
          <Link to="/store" className="text-primary-600 hover:underline">{t(`${p}.continueShopping`)}</Link>
        </div>
      </div>
    )
  }

  // Show loading while checking auth
  if (authLoading) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-neutral-50">
        <Loader2 className="h-8 w-8 animate-spin text-primary-500 mb-4" />
        <p className="text-neutral-600">{t(`${p}.loading`)}</p>
      </div>
    )
  }

  // Require login before checkout
  if (!user) {
    return (
      <div className="min-h-screen bg-neutral-50">
        <header className="bg-white border-b">
          <div className="max-w-7xl mx-auto px-4 py-4">
            <Link to="/store" className="flex items-center gap-2 text-neutral-600 hover:text-primary-600 transition">
              <ArrowLeft className="h-5 w-5" /> {t(`${p}.backToStore`)}
            </Link>
          </div>
        </header>
        
        <main className="max-w-lg mx-auto px-4 py-16">
          <div className="bg-white rounded-2xl p-8 shadow-sm text-center">
            <div className="w-20 h-20 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <User className="h-10 w-10 text-primary-600" />
            </div>
            <h1 className="text-2xl font-bold mb-3">{t(`${p}.signInTitle`)}</h1>
            <p className="text-neutral-600 mb-8">
              {t(`${p}.signInDesc`)}
            </p>
            
            <div className="space-y-3">
              <Link
                to={`/signin?redirect=${encodeURIComponent('/store/checkout' + (isRfqMode ? '?mode=rfq' : ''))}`}
                className="w-full py-3 px-6 bg-primary-600 text-white font-semibold rounded-xl hover:bg-primary-700 transition flex items-center justify-center gap-2"
              >
                <LogIn className="h-5 w-5" />
                {t(`${p}.signInBtn`)}
              </Link>
              <Link
                to={`/signin?redirect=${encodeURIComponent('/store/checkout' + (isRfqMode ? '?mode=rfq' : ''))}`}
                className="w-full py-3 px-6 border-2 border-primary-600 text-primary-600 font-semibold rounded-xl hover:bg-primary-50 transition flex items-center justify-center gap-2"
              >
                <User className="h-5 w-5" />
                {t(`${p}.createAccountBtn`)}
              </Link>
            </div>
            
            <p className="text-sm text-neutral-500 mt-6">
              {t(`${p}.cartSaved`, { count: activeItems.length, plural: activeItems.length > 1 ? 's' : '' })}
            </p>
          </div>
        </main>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-neutral-50">
      <header className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <Link to="/store" className="flex items-center gap-2 text-neutral-600 hover:text-primary-600 transition">
            <ArrowLeft className="h-5 w-5" /> {t(`${p}.backToStore`)}
          </Link>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-2">
          {isRfqMode ? t(`${p}.pageTitleRfq`) : t(`${p}.pageTitleCheckout`)}
        </h1>
        {isRfqMode && (
          <p className="text-neutral-600 mb-8">
            {t(`${p}.rfqDesc`)}
          </p>
        )}
        
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Form */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="bg-white rounded-xl p-6 shadow-sm space-y-6">
              <div>
                <h2 className="text-lg font-semibold mb-4">{t(`${p}.contactInfo`)}</h2>
                <input 
                  name="email" 
                  type="email" 
                  required 
                  placeholder={t(`${p}.emailPlaceholder`)}
                  value={formData.email} 
                  readOnly
                  className="w-full p-3 border rounded-lg bg-neutral-100 text-neutral-600 cursor-not-allowed" 
                />
                <p className="text-xs text-neutral-500 mt-2 flex items-start gap-1.5">
                  <Lock className="h-3.5 w-3.5 mt-0.5 flex-shrink-0" />
                  <span>
                    {t(`${p}.emailNotePart1`)}<a href="/signin" className="text-primary-600 hover:underline">{t(`${p}.logOut`)}</a>{t(`${p}.emailNotePart2`)}
                  </span>
                </p>
              </div>

              <div>
                <h2 className="text-lg font-semibold mb-4">{isRfqMode ? t(`${p}.contactDetails`) : t(`${p}.shippingAddress`)}</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  <input name="firstName" placeholder={t(`${p}.firstName`)} required value={formData.firstName} onChange={handleChange} className="p-3 border rounded-lg focus:ring-2 focus:ring-primary-500" />
                  <input name="lastName" placeholder={t(`${p}.lastName`)} required value={formData.lastName} onChange={handleChange} className="p-3 border rounded-lg focus:ring-2 focus:ring-primary-500" />
                  <input name="company" placeholder={t(`${p}.company`)} value={formData.company} onChange={handleChange} className="md:col-span-2 p-3 border rounded-lg focus:ring-2 focus:ring-primary-500" />
                  <input name="address" placeholder={isRfqMode ? t(`${p}.addressRfq`) : t(`${p}.address`)} required={!isRfqMode} value={formData.address} onChange={handleChange} className="md:col-span-2 p-3 border rounded-lg focus:ring-2 focus:ring-primary-500" />
                  <input name="city" placeholder={isRfqMode ? t(`${p}.cityRfq`) : t(`${p}.city`)} required={!isRfqMode} value={formData.city} onChange={handleChange} className="p-3 border rounded-lg focus:ring-2 focus:ring-primary-500" />
                  <input name="postalCode" placeholder={isRfqMode ? t(`${p}.postalCodeRfq`) : t(`${p}.postalCode`)} required={!isRfqMode} value={formData.postalCode} onChange={handleChange} className="p-3 border rounded-lg focus:ring-2 focus:ring-primary-500" />
                  <input name="country" placeholder={isRfqMode ? t(`${p}.countryRfq`) : t(`${p}.country`)} required={!isRfqMode} value={formData.country} onChange={handleChange} className="p-3 border rounded-lg focus:ring-2 focus:ring-primary-500" />
                  <input name="phone" placeholder={t(`${p}.phone`)} required value={formData.phone} onChange={handleChange} className="p-3 border rounded-lg focus:ring-2 focus:ring-primary-500" />
                </div>
              </div>
              
              {/* Additional Notes for RFQ */}
              {isRfqMode && (
                <div>
                  <h2 className="text-lg font-semibold mb-4">{t(`${p}.notesTitle`)}</h2>
                  <textarea
                    name="notes"
                    placeholder={t(`${p}.notesPlaceholder`)}
                    value={formData.notes}
                    onChange={handleChange}
                    rows={4}
                    className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  />
                </div>
              )}

              {/* Error Message */}
              {error && (
                <div className="p-4 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm">
                  {error}
                </div>
              )}

              <button 
                type="submit" 
                disabled={isProcessing} 
                className={`w-full py-4 font-semibold rounded-xl transition flex items-center justify-center gap-2 ${
                  isRfqMode 
                    ? 'bg-amber-500 hover:bg-amber-600 disabled:bg-neutral-400 text-white'
                    : 'bg-primary-600 hover:bg-primary-700 disabled:bg-neutral-400 text-white'
                }`}
              >
                {isRfqMode ? (
                  <>
                    <Send className="h-5 w-5" />
                    {isProcessing ? t(`${p}.sendingRfq`) : t(`${p}.sendRfq`)}
                  </>
                ) : (
                  <>
                    <CreditCard className="h-5 w-5" />
                    {isProcessing ? t(`${p}.redirecting`) : t(`${p}.payWithStripe`, { total: activeTotal.toLocaleString() })}
                  </>
                )}
              </button>
              
              <p className="text-xs text-center text-neutral-500 flex items-center justify-center gap-1">
                {isRfqMode ? (
                  <>✉️ {t(`${p}.respond24h`)}</>
                ) : (
                  <><Lock className="h-3 w-3" /> {t(`${p}.securedStripe`)}</>
                )}
              </p>
            </form>
          </div>

          {/* Order/RFQ Summary */}
          <div className="bg-white rounded-xl p-6 shadow-sm h-fit">
            <h2 className="text-lg font-semibold mb-4">
              {isRfqMode ? t(`${p}.summaryTitleRfq`) : t(`${p}.summaryTitleCheckout`)}
            </h2>
            <div className="space-y-4">
              {activeItems.map(item => (
                <div key={item.id} className="flex gap-3">
                  <img src={item.image} alt={item.name} className="w-16 h-16 object-contain rounded-lg bg-neutral-50" />
                  <div className="flex-1 min-w-0">
                    <h3 className="font-medium text-sm truncate">{item.name}</h3>
                    <p className="text-xs text-neutral-500 truncate">{item.variant.shape} • {item.variant.size}</p>
                    {item.customSize && (
                      <p className="text-xs text-amber-600">{t(`${p}.customSize`, { w: item.customSize.width, h: item.customSize.height })}</p>
                    )}
                    <p className={`font-semibold ${isRfqMode ? 'text-amber-600' : 'text-primary-600'}`}>
                      {isRfqMode ? t(`${p}.estPrice`, { price: item.totalPrice.toLocaleString() }) : t(`${p}.price`, { price: item.totalPrice.toLocaleString() })}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div className="border-t mt-4 pt-4 space-y-2">
              <div className="flex justify-between text-sm">
                <span>{isRfqMode ? t(`${p}.subtotalRfq`) : t(`${p}.subtotalCheckout`)}</span>
                <span>${activeTotal.toLocaleString()}</span>
              </div>
              {!isRfqMode && (
                <div className="flex justify-between text-sm text-green-600"><span>{t(`${p}.shipping`)}</span><span>{t(`${p}.free`)}</span></div>
              )}
              <div className={`flex justify-between text-lg font-bold pt-2 border-t ${isRfqMode ? 'text-amber-700' : ''}`}>
                <span>{isRfqMode ? t(`${p}.totalRfq`) : t(`${p}.totalCheckout`)}</span>
                <span>${activeTotal.toLocaleString()}</span>
              </div>
              {isRfqMode && (
                <p className="text-xs text-neutral-500 italic">
                  {t(`${p}.finalPricingNote`)}
                </p>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default CheckoutPage
