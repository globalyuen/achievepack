import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { X, ShoppingBag, Trash2, Loader2, CheckCircle, Edit3, FileText, Send, CreditCard, BarChart3 } from 'lucide-react'
import { useStore, CartItem } from '../../store/StoreContext'
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
  const { 
    cart, 
    cartTotal, 
    isCartOpen, 
    setIsCartOpen, 
    removeFromCart, 
    clearCart,
    // RFQ functionality
    rfqCart,
    rfqCount,
    removeFromRfq,
    clearRfq,
    activeCartMode,
    setActiveCartMode
  } = useStore()
  const { user } = useAuth()
  const navigate = useNavigate()
  const [saving, setSaving] = useState(false)
  const [saved, setSaved] = useState(false)
  const [sendingRfq, setSendingRfq] = useState(false)
  const [rfqSent, setRfqSent] = useState(false)

  // Calculate RFQ total (for display purposes only)
  const rfqTotal = rfqCart.reduce((sum, item) => sum + item.totalPrice, 0)

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
        {/* Header */}
        <div className="p-4 border-b">
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-xl font-bold">
              {activeCartMode === 'cart' ? 'Shopping Cart' : 'Quote Request'}
            </h2>
            <button onClick={() => setIsCartOpen(false)} className="p-2 hover:bg-neutral-100 rounded-full transition">
              <X className="h-6 w-6" />
            </button>
          </div>
          
          {/* Tab Switcher */}
          <div className="flex bg-neutral-100 rounded-lg p-1">
            <button
              onClick={() => setActiveCartMode('cart')}
              className={`flex-1 py-2 px-3 rounded-md text-sm font-medium transition flex items-center justify-center gap-2 ${
                activeCartMode === 'cart' 
                  ? 'bg-white shadow text-primary-600' 
                  : 'text-neutral-600 hover:text-neutral-900'
              }`}
            >
              <ShoppingBag className="h-4 w-4" />
              Cart ({cart.length})
            </button>
            <button
              onClick={() => setActiveCartMode('rfq')}
              className={`flex-1 py-2 px-3 rounded-md text-sm font-medium transition flex items-center justify-center gap-2 ${
                activeCartMode === 'rfq' 
                  ? 'bg-white shadow text-amber-600' 
                  : 'text-neutral-600 hover:text-neutral-900'
              }`}
            >
              <FileText className="h-4 w-4" />
              RFQ ({rfqCount})
            </button>
          </div>
        </div>

        {/* Cart Mode Content */}
        {activeCartMode === 'cart' && (
          cart.length === 0 ? (
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
              
              {/* Primary: Checkout Now with Stripe */}
              <Link
                to="/store/checkout"
                onClick={() => setIsCartOpen(false)}
                className="w-full py-3 bg-primary-600 hover:bg-primary-700 text-white text-center font-semibold rounded-xl transition flex items-center justify-center gap-2"
              >
                <CreditCard className="h-5 w-5" />
                Checkout Now
              </Link>
              
              {/* Secondary: Save for Comparison */}
              <button
                onClick={handleSaveForLater}
                disabled={saving || saved}
                className="w-full py-3 border-2 border-amber-500 text-amber-600 hover:bg-amber-50 disabled:border-amber-300 disabled:text-amber-300 font-semibold rounded-xl transition flex items-center justify-center gap-2"
              >
                {saved ? (
                  <><CheckCircle className="h-5 w-5" /> Saved to Customer Center!</>
                ) : saving ? (
                  <><Loader2 className="h-5 w-5 animate-spin" /> Saving...</>
                ) : (
                  <><BarChart3 className="h-5 w-5" /> Save for Comparison</>
                )}
              </button>
              
              {!user && (
                <p className="text-xs text-center text-neutral-500">
                  Login required to save items for comparison
                </p>
              )}
              
              <Link
                to="/store"
                onClick={() => setIsCartOpen(false)}
                className="block w-full py-3 border border-neutral-300 hover:bg-neutral-50 text-neutral-700 text-center font-medium rounded-xl transition"
              >
                Continue Shopping
              </Link>
            </div>
          </>
          )
        )}

        {/* RFQ Mode Content */}
        {activeCartMode === 'rfq' && (
          rfqCart.length === 0 ? (
            <div className="flex-1 flex flex-col items-center justify-center text-neutral-400">
              <FileText className="h-16 w-16 mb-4" />
              <p>No items in quote request</p>
              <p className="text-sm text-center mt-2 px-8">
                Custom size products require a quote. Add custom products to get a personalized quote.
              </p>
              <Link to="/store" onClick={() => setIsCartOpen(false)} className="mt-4 text-amber-600 hover:underline">
                Browse Custom Products
              </Link>
            </div>
          ) : (
            <>
              <div className="flex-1 overflow-y-auto p-4 space-y-4">
                {rfqCart.map((item: CartItem) => (
                  <div key={item.id} className="flex gap-4 bg-amber-50 rounded-lg p-3 border border-amber-200">
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
                        className="block hover:text-amber-700 transition"
                      >
                        <h3 className="font-medium text-neutral-900 truncate">{item.name}</h3>
                      </Link>
                      <p className="text-xs text-neutral-500 truncate">
                        {item.variant.shape} • {item.variant.size} • {item.variant.barrier}
                      </p>
                      {item.customSize && (
                        <p className="text-xs text-amber-600 mt-1">
                          Custom: {item.customSize.width}×{item.customSize.height}
                          {item.customSize.gusset ? `×${item.customSize.gusset}` : ''} mm
                        </p>
                      )}
                      <div className="flex items-center justify-between mt-2">
                        <span className="text-sm text-amber-700">
                          Est. ${item.totalPrice.toLocaleString()}
                          <span className="text-xs text-neutral-500 ml-1">(Quote pending)</span>
                        </span>
                        <div className="flex items-center gap-1">
                          <Link
                            to={generateEditUrl(item)}
                            onClick={() => setIsCartOpen(false)}
                            className="text-amber-500 hover:text-amber-700 p-1"
                            title="Edit configuration"
                          >
                            <Edit3 className="h-4 w-4" />
                          </Link>
                          <button onClick={() => removeFromRfq(item.id)} className="text-red-500 hover:text-red-700 p-1">
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
                  <span>Estimated Total:</span>
                  <span className="font-bold text-amber-600">${rfqTotal.toLocaleString()}</span>
                </div>
                <p className="text-xs text-neutral-500 text-center">
                  Final pricing will be provided in your quote
                </p>
                
                <Link
                  to="/store/checkout?mode=rfq"
                  onClick={() => setIsCartOpen(false)}
                  className="block w-full py-3 bg-amber-500 hover:bg-amber-600 text-white text-center font-semibold rounded-xl transition flex items-center justify-center gap-2"
                >
                  <Send className="h-5 w-5" />
                  Send Quote Request
                </Link>
                
                <button
                  onClick={clearRfq}
                  className="block w-full py-2 text-sm text-neutral-500 hover:text-red-600 transition"
                >
                  Clear All RFQ Items
                </button>
                
                <Link
                  to="/store"
                  onClick={() => setIsCartOpen(false)}
                  className="block w-full py-3 border border-neutral-300 hover:bg-neutral-50 text-neutral-700 text-center font-medium rounded-xl transition"
                >
                  Continue Shopping
                </Link>
              </div>
            </>
          )
        )}
      </div>
    </>
  )
}

export default CartSidebar
