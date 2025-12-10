import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { X, ShoppingBag, Trash2, Heart, Loader2, CheckCircle } from 'lucide-react'
import { useStore } from '../../store/StoreContext'
import { useAuth } from '../../hooks/useAuth'
import { supabase } from '../../lib/supabase'

const CartSidebar: React.FC = () => {
  const { cart, cartTotal, isCartOpen, setIsCartOpen, removeFromCart, clearCart } = useStore()
  const { user } = useAuth()
  const navigate = useNavigate()
  const [saving, setSaving] = useState(false)
  const [saved, setSaved] = useState(false)

  // Save cart to customer center
  const handleSaveForLater = async () => {
    if (!user) {
      // Redirect to login if not logged in
      setIsCartOpen(false)
      navigate('/login', { state: { from: '/dashboard', message: 'Please login to save items for later' } })
      return
    }
    
    setSaving(true)
    try {
      // Check if this is demo user (ryan@pouch.eco)
      const isDemoUser = user.email === 'ryan@pouch.eco'
      
      if (isDemoUser) {
        // For demo user, save to localStorage instead of database
        const existingItems = JSON.parse(localStorage.getItem('demo_saved_items') || '[]')
        const newItems = cart.map(item => ({
          id: `saved-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
          user_id: user.id,
          product_id: item.productId,
          name: item.name,
          image: item.image,
          variant: item.variant,
          quantity: item.quantity,
          unit_price: item.unitPrice,
          total_price: item.totalPrice,
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString()
        }))
        localStorage.setItem('demo_saved_items', JSON.stringify([...existingItems, ...newItems]))
      } else {
        // Save each cart item to database
        const itemsToSave = cart.map(item => ({
          user_id: user.id,
          product_id: item.productId,
          name: item.name,
          image: item.image,
          variant: item.variant,
          quantity: item.quantity,
          unit_price: item.unitPrice,
          total_price: item.totalPrice,
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString()
        }))
        
        const { error } = await supabase.from('saved_cart_items').insert(itemsToSave)
        
        if (error) throw error
      }
      
      setSaved(true)
      setTimeout(() => {
        clearCart()
        setIsCartOpen(false)
        navigate('/dashboard')
      }, 1500)
    } catch (error) {
      console.error('Error saving cart:', error)
      alert('Failed to save. Please try again.')
    } finally {
      setSaving(false)
    }
  }

  if (!isCartOpen) return null

  return (
    <>
      {/* Overlay */}
      <div className="fixed inset-0 bg-black/50 z-[100]" onClick={() => setIsCartOpen(false)} />
      
      {/* Sidebar */}
      <div className="fixed right-0 top-0 h-full w-full max-w-md bg-white shadow-2xl z-[101] flex flex-col">
        <div className="p-4 border-b flex items-center justify-between">
          <h2 className="text-xl font-bold">Shopping Cart</h2>
          <button onClick={() => setIsCartOpen(false)} className="p-2 hover:bg-neutral-100 rounded-full transition">
            <X className="h-6 w-6" />
          </button>
        </div>

        {cart.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center text-neutral-400">
            <ShoppingBag className="h-16 w-16 mb-4" />
            <p>Your cart is empty</p>
            <Link to="/store" onClick={() => setIsCartOpen(false)} className="mt-4 text-primary-600 hover:underline">
              Continue Shopping
            </Link>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {cart.map(item => (
                <div key={item.id} className="flex gap-4 bg-neutral-50 rounded-lg p-3">
                  <img src={item.image} alt={item.name} className="w-20 h-20 object-contain rounded-lg bg-white" />
                  <div className="flex-1 min-w-0">
                    <h3 className="font-medium text-neutral-900 truncate">{item.name}</h3>
                    <p className="text-xs text-neutral-500 truncate">
                      {item.variant.shape} • {item.variant.size} • {item.variant.barrier}
                    </p>
                    <div className="flex items-center justify-between mt-2">
                      <span className="font-bold text-primary-600">${item.totalPrice.toLocaleString()}</span>
                      <button onClick={() => removeFromCart(item.id)} className="text-red-500 hover:text-red-700 p-1">
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="border-t p-4 space-y-3">
              <div className="flex items-center justify-between text-lg">
                <span>Total:</span>
                <span className="font-bold text-primary-600">${cartTotal.toLocaleString()}</span>
              </div>
              
              {/* Save for Later Button */}
              <button
                onClick={handleSaveForLater}
                disabled={saving || saved}
                className="w-full py-3 bg-amber-500 hover:bg-amber-600 disabled:bg-amber-300 text-white font-semibold rounded-xl transition flex items-center justify-center gap-2"
              >
                {saved ? (
                  <><CheckCircle className="h-5 w-5" /> Saved to My Account!</>
                ) : saving ? (
                  <><Loader2 className="h-5 w-5 animate-spin" /> Saving...</>
                ) : (
                  <><Heart className="h-5 w-5" /> Save for Later</>
                )}
              </button>
              
              {!user && (
                <p className="text-xs text-center text-neutral-500">
                  Login required to save items
                </p>
              )}
              
              <div className="relative flex items-center justify-center">
                <div className="border-t border-neutral-200 w-full"></div>
                <span className="absolute bg-white px-3 text-xs text-neutral-400">or</span>
              </div>
              
              <Link
                to="/store/checkout"
                onClick={() => setIsCartOpen(false)}
                className="block w-full py-3 bg-primary-600 hover:bg-primary-700 text-white text-center font-semibold rounded-xl transition"
              >
                Proceed to Checkout Now
              </Link>
              <Link
                to="/store"
                onClick={() => setIsCartOpen(false)}
                className="block w-full py-3 border border-neutral-300 hover:bg-neutral-50 text-neutral-700 text-center font-medium rounded-xl transition"
              >
                Continue Shopping
              </Link>
            </div>
          </>
        )}
      </div>
    </>
  )
}

export default CartSidebar
