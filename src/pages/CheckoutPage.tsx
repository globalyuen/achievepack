import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ArrowLeft, Lock, Loader2 } from 'lucide-react'
import { useStore } from '../store/StoreContext'
import { supabase } from '../lib/supabase'
import { useAuth } from '../hooks/useAuth'

// Generate order number
const generateOrderNumber = () => {
  const date = new Date()
  const dateStr = `${date.getFullYear()}${String(date.getMonth() + 1).padStart(2, '0')}${String(date.getDate()).padStart(2, '0')}`
  const random = Math.floor(Math.random() * 10000).toString().padStart(4, '0')
  return `AP-${dateStr}-${random}`
}

const CheckoutPage: React.FC = () => {
  const { cart, cartTotal, clearCart } = useStore()
  const { user } = useAuth()
  const navigate = useNavigate()
  const [isProcessing, setIsProcessing] = useState(false)
  const [error, setError] = useState('')
  const [formData, setFormData] = useState({
    email: '', firstName: '', lastName: '', company: '',
    address: '', city: '', country: '', postalCode: '', phone: ''
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsProcessing(true)
    setError('')
    
    const orderNumber = generateOrderNumber()
    
    try {
      // 1. Save order to Supabase
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
    } catch (err) {
      console.error('Checkout error:', err)
      setError('Something went wrong. Please try again.')
      setIsProcessing(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  if (cart.length === 0) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-neutral-50">
        <p className="text-xl mb-4">Your cart is empty</p>
        <Link to="/store" className="text-primary-600 hover:underline">Continue Shopping</Link>
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
        <h1 className="text-3xl font-bold mb-8">Checkout</h1>
        
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
                <h2 className="text-lg font-semibold mb-4">Shipping Address</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  <input name="firstName" placeholder="First Name" required value={formData.firstName} onChange={handleChange} className="p-3 border rounded-lg focus:ring-2 focus:ring-primary-500" />
                  <input name="lastName" placeholder="Last Name" required value={formData.lastName} onChange={handleChange} className="p-3 border rounded-lg focus:ring-2 focus:ring-primary-500" />
                  <input name="company" placeholder="Company (Optional)" value={formData.company} onChange={handleChange} className="md:col-span-2 p-3 border rounded-lg focus:ring-2 focus:ring-primary-500" />
                  <input name="address" placeholder="Address" required value={formData.address} onChange={handleChange} className="md:col-span-2 p-3 border rounded-lg focus:ring-2 focus:ring-primary-500" />
                  <input name="city" placeholder="City" required value={formData.city} onChange={handleChange} className="p-3 border rounded-lg focus:ring-2 focus:ring-primary-500" />
                  <input name="postalCode" placeholder="Postal Code" required value={formData.postalCode} onChange={handleChange} className="p-3 border rounded-lg focus:ring-2 focus:ring-primary-500" />
                  <input name="country" placeholder="Country" required value={formData.country} onChange={handleChange} className="p-3 border rounded-lg focus:ring-2 focus:ring-primary-500" />
                  <input name="phone" placeholder="Phone" required value={formData.phone} onChange={handleChange} className="p-3 border rounded-lg focus:ring-2 focus:ring-primary-500" />
                </div>
              </div>

              <button 
                type="submit" 
                disabled={isProcessing} 
                className="w-full py-4 bg-primary-600 hover:bg-primary-700 disabled:bg-neutral-400 text-white font-semibold rounded-xl transition flex items-center justify-center gap-2"
              >
                <Lock className="h-5 w-5" />
                {isProcessing ? 'Processing...' : `Pay $${cartTotal.toLocaleString()}`}
              </button>
              
              <p className="text-xs text-center text-neutral-500 flex items-center justify-center gap-1">
                <Lock className="h-3 w-3" /> Secured by Stripe
              </p>
            </form>
          </div>

          {/* Order Summary */}
          <div className="bg-white rounded-xl p-6 shadow-sm h-fit">
            <h2 className="text-lg font-semibold mb-4">Order Summary</h2>
            <div className="space-y-4">
              {cart.map(item => (
                <div key={item.id} className="flex gap-3">
                  <img src={item.image} alt={item.name} className="w-16 h-16 object-contain rounded-lg bg-neutral-50" />
                  <div className="flex-1 min-w-0">
                    <h3 className="font-medium text-sm truncate">{item.name}</h3>
                    <p className="text-xs text-neutral-500 truncate">{item.variant.shape} • {item.variant.size}</p>
                    <p className="font-semibold text-primary-600">${item.totalPrice.toLocaleString()}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="border-t mt-4 pt-4 space-y-2">
              <div className="flex justify-between text-sm"><span>Subtotal</span><span>${cartTotal.toLocaleString()}</span></div>
              <div className="flex justify-between text-sm text-green-600"><span>Shipping</span><span>Free</span></div>
              <div className="flex justify-between text-lg font-bold pt-2 border-t"><span>Total</span><span>${cartTotal.toLocaleString()}</span></div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default CheckoutPage
