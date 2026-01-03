import React, { useState } from 'react'
import { Link, useNavigate, useSearchParams } from 'react-router-dom'
import { ArrowLeft, Lock, Loader2, Send, FileText } from 'lucide-react'
import { useStore } from '../store/StoreContext'
import { supabase } from '../lib/supabase'
import { useAuth } from '../hooks/useAuth'

// Generate order/RFQ number
const generateOrderNumber = (isRfq: boolean = false) => {
  const date = new Date()
  const dateStr = `${date.getFullYear()}${String(date.getMonth() + 1).padStart(2, '0')}${String(date.getDate()).padStart(2, '0')}`
  const random = Math.floor(Math.random() * 10000).toString().padStart(4, '0')
  return isRfq ? `RFQ-${dateStr}-${random}` : `AP-${dateStr}-${random}`
}

const CheckoutPage: React.FC = () => {
  const { cart, cartTotal, clearCart, rfqCart, clearRfq } = useStore()
  const { user } = useAuth()
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
            customSize: item.customSize
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
        // Normal Checkout Mode: Process payment
        const { error: dbError } = await supabase.from('orders').insert({
          user_id: user?.id || null,
          order_number: orderNumber,
          status: 'pending',
          total_amount: cartTotal,
          items: cart.map(item => ({
            productId: item.productId,
            name: item.name,
            variant: item.variant,
            quantity: item.quantity,
            unitPrice: item.unitPrice,
            totalPrice: item.totalPrice
          })),
          shipping_address: {
            firstName: formData.firstName,
            lastName: formData.lastName,
            company: formData.company,
            address: formData.address,
            city: formData.city,
            country: formData.country,
            zipCode: formData.postalCode,
            phone: formData.phone
          },
          customer_email: formData.email,
          customer_name: `${formData.firstName} ${formData.lastName}`
        })

        if (dbError) {
          console.error('Database error:', dbError)
        }

        // 2. Send email notifications via Brevo
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
          // Don't block checkout if email fails
        }

        // 3. Clear cart and redirect
        clearCart()
        navigate('/store/order-confirmation', { state: { orderNumber } })
      }
    } catch (err) {
      console.error('Checkout error:', err)
      setError('Something went wrong. Please try again.')
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
              <p className="text-xl mb-4">No items in your quote request</p>
              <p className="text-neutral-500 mb-6">Add custom products to get a personalized quote</p>
            </>
          ) : (
            <p className="text-xl mb-4">Your cart is empty</p>
          )}
          <Link to="/store" className="text-primary-600 hover:underline">Continue Shopping</Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-neutral-50">
      <header className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <Link to="/store" className="flex items-center gap-2 text-neutral-600 hover:text-primary-600 transition">
            <ArrowLeft className="h-5 w-5" /> Back to Store
          </Link>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-2">
          {isRfqMode ? 'Request for Quotation' : 'Checkout'}
        </h1>
        {isRfqMode && (
          <p className="text-neutral-600 mb-8">
            Submit your custom product details and we'll prepare a personalized quote within 24 hours.
          </p>
        )}
        
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Form */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="bg-white rounded-xl p-6 shadow-sm space-y-6">
              <div>
                <h2 className="text-lg font-semibold mb-4">Contact Information</h2>
                <input 
                  name="email" 
                  type="email" 
                  required 
                  placeholder="Email" 
                  value={formData.email} 
                  onChange={handleChange} 
                  className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500" 
                />
              </div>

              <div>
                <h2 className="text-lg font-semibold mb-4">{isRfqMode ? 'Contact Details' : 'Shipping Address'}</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  <input name="firstName" placeholder="First Name" required value={formData.firstName} onChange={handleChange} className="p-3 border rounded-lg focus:ring-2 focus:ring-primary-500" />
                  <input name="lastName" placeholder="Last Name" required value={formData.lastName} onChange={handleChange} className="p-3 border rounded-lg focus:ring-2 focus:ring-primary-500" />
                  <input name="company" placeholder="Company (Optional)" value={formData.company} onChange={handleChange} className="md:col-span-2 p-3 border rounded-lg focus:ring-2 focus:ring-primary-500" />
                  <input name="address" placeholder="Address" required={!isRfqMode} value={formData.address} onChange={handleChange} className="md:col-span-2 p-3 border rounded-lg focus:ring-2 focus:ring-primary-500" />
                  <input name="city" placeholder="City" required={!isRfqMode} value={formData.city} onChange={handleChange} className="p-3 border rounded-lg focus:ring-2 focus:ring-primary-500" />
                  <input name="postalCode" placeholder="Postal Code" required={!isRfqMode} value={formData.postalCode} onChange={handleChange} className="p-3 border rounded-lg focus:ring-2 focus:ring-primary-500" />
                  <input name="country" placeholder="Country" required value={formData.country} onChange={handleChange} className="p-3 border rounded-lg focus:ring-2 focus:ring-primary-500" />
                  <input name="phone" placeholder="Phone" required value={formData.phone} onChange={handleChange} className="p-3 border rounded-lg focus:ring-2 focus:ring-primary-500" />
                </div>
              </div>
              
              {/* Additional Notes for RFQ */}
              {isRfqMode && (
                <div>
                  <h2 className="text-lg font-semibold mb-4">Additional Notes (Optional)</h2>
                  <textarea
                    name="notes"
                    placeholder="Any special requirements, preferred delivery date, or additional information..."
                    value={formData.notes}
                    onChange={handleChange}
                    rows={4}
                    className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  />
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
                    {isProcessing ? 'Sending Request...' : 'Send Quote Request'}
                  </>
                ) : (
                  <>
                    <Lock className="h-5 w-5" />
                    {isProcessing ? 'Processing...' : `Pay $${activeTotal.toLocaleString()}`}
                  </>
                )}
              </button>
              
              <p className="text-xs text-center text-neutral-500 flex items-center justify-center gap-1">
                {isRfqMode ? (
                  <>✉️ We'll respond within 24 hours</>
                ) : (
                  <><Lock className="h-3 w-3" /> Secured by Stripe</>
                )}
              </p>
            </form>
          </div>

          {/* Order/RFQ Summary */}
          <div className="bg-white rounded-xl p-6 shadow-sm h-fit">
            <h2 className="text-lg font-semibold mb-4">
              {isRfqMode ? 'Quote Request Summary' : 'Order Summary'}
            </h2>
            <div className="space-y-4">
              {activeItems.map(item => (
                <div key={item.id} className="flex gap-3">
                  <img src={item.image} alt={item.name} className="w-16 h-16 object-contain rounded-lg bg-neutral-50" />
                  <div className="flex-1 min-w-0">
                    <h3 className="font-medium text-sm truncate">{item.name}</h3>
                    <p className="text-xs text-neutral-500 truncate">{item.variant.shape} • {item.variant.size}</p>
                    {item.customSize && (
                      <p className="text-xs text-amber-600">Custom: {item.customSize.width}×{item.customSize.height}mm</p>
                    )}
                    <p className={`font-semibold ${isRfqMode ? 'text-amber-600' : 'text-primary-600'}`}>
                      {isRfqMode ? 'Est. ' : ''}${item.totalPrice.toLocaleString()}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div className="border-t mt-4 pt-4 space-y-2">
              <div className="flex justify-between text-sm">
                <span>{isRfqMode ? 'Estimated Subtotal' : 'Subtotal'}</span>
                <span>${activeTotal.toLocaleString()}</span>
              </div>
              {!isRfqMode && (
                <div className="flex justify-between text-sm text-green-600"><span>Shipping</span><span>Free</span></div>
              )}
              <div className={`flex justify-between text-lg font-bold pt-2 border-t ${isRfqMode ? 'text-amber-700' : ''}`}>
                <span>{isRfqMode ? 'Estimated Total' : 'Total'}</span>
                <span>${activeTotal.toLocaleString()}</span>
              </div>
              {isRfqMode && (
                <p className="text-xs text-neutral-500 italic">
                  * Final pricing will be confirmed in your quote
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
