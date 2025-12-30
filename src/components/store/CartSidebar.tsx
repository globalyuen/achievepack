import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { X, ShoppingBag, Trash2, Heart, Loader2, CheckCircle, Edit3 } from 'lucide-react'
import { useStore } from '../../store/StoreContext'
import { useAuth } from '../../hooks/useAuth'
import { supabase } from '../../lib/supabase'

// Generate URL with configuration parameters
const generateEditUrl = (item: any): string => {
  const params = new URLSearchParams()
  if (item.variant.material) params.set('material', item.variant.material)
  if (item.variant.size) params.set('size', item.variant.size)
  if (item.variant.closure) params.set('closure', item.variant.closure)
  if (item.variant.surface) params.set('surface', item.variant.surface)
  if (item.variant.barrier) params.set('barrier', item.variant.barrier)
  if (item.variant.stiffness) params.set('stiffness', item.variant.stiffness)
  if (item.variant.shipping) params.set('shipping', item.variant.shipping)
  if (item.variant.designCount) params.set('designs', item.variant.designCount.toString())
  if (item.variant.quantityUnits) params.set('quantity', item.variant.quantityUnits.toString())
  if (item.variant.laserScoring) params.set('laser', item.variant.laserScoring)
  if (item.variant.valve) params.set('valve', item.variant.valve)
  if (item.variant.hangHole) params.set('hangHole', item.variant.hangHole)
  params.set('edit', '1') // Flag to indicate editing from cart
  
  return `/store/product/${item.productId}?${params.toString()}`
}

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
                  <Link 
                    to={generateEditUrl(item)}
                    onClick={() => setIsCartOpen(false)}
                    className="flex-shrink-0 hover:opacity-80 transition"
                  >
                    <img src={item.image} alt={item.name} className="w-20 h-20 object-contain rounded-lg bg-white" />
                  </Link>
                  <div className="flex-1 min-w-0">
                    <Link 
                      to={generateEditUrl(item)}
                      onClick={() => setIsCartOpen(false)}
                      className="block hover:text-primary-600 transition"
                    >
                      <h3 className="font-medium text-neutral-900 truncate">{item.name}</h3>
                    </Link>
                    {item.productId.startsWith('sample-') ? (
                      <p className="text-xs text-neutral-500">Sample Pack</p>
                    ) : (
                      <p className="text-xs text-neutral-500 truncate">
                        {item.variant.shape} • {item.variant.size} • {item.variant.barrier}
                      </p>
                    )}
                    <div className="flex items-center justify-between mt-2">
                      <span className="font-bold text-primary-600">${item.totalPrice.toLocaleString()}</span>
                      <div className="flex items-center gap-1">
                        <Link
                          to={generateEditUrl(item)}
                          onClick={() => setIsCartOpen(false)}
                          className="text-primary-500 hover:text-primary-700 p-1"
                          title="Edit configuration"
                        >
                          <Edit3 className="h-4 w-4" />
                        </Link>
                        <button onClick={() => removeFromCart(item.id)} className="text-red-500 hover:text-red-700 p-1">
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>
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
