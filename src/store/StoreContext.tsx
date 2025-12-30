import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react'

export interface ProductVariant {
  shape: string
  size: string
  barrier?: string
  finish?: string
  material?: string
  closure?: string
  surface?: string
  stiffness?: string
  shipping?: string
  designCount?: number
  quantityUnits?: number
  laserScoring?: string
  valve?: string
  hangHole?: string
}

export interface CartItem {
  id: string
  productId: string
  name: string
  image: string
  variant: ProductVariant
  quantity: number
  unitPrice: number
  totalPrice: number
}

interface StoreContextType {
  cart: CartItem[]
  cartCount: number
  cartTotal: number
  addToCart: (item: Omit<CartItem, 'id'>) => void
  removeFromCart: (id: string) => void
  updateQuantity: (id: string, quantity: number) => void
  clearCart: () => void
  isCartOpen: boolean
  setIsCartOpen: (open: boolean) => void
}

const StoreContext = createContext<StoreContextType | undefined>(undefined)

export const useStore = () => {
  const context = useContext(StoreContext)
  if (!context) {
    throw new Error('useStore must be used within a StoreProvider')
  }
  return context
}

export const StoreProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [cart, setCart] = useState<CartItem[]>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('achievepack-cart')
      return saved ? JSON.parse(saved) : []
    }
    return []
  })
  const [isCartOpen, setIsCartOpen] = useState(false)

  useEffect(() => {
    localStorage.setItem('achievepack-cart', JSON.stringify(cart))
  }, [cart])

  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0)
  const cartTotal = cart.reduce((sum, item) => sum + item.totalPrice, 0)

  const addToCart = (item: Omit<CartItem, 'id'>) => {
    const id = `${item.productId}-${item.variant.shape}-${item.variant.size}-${item.variant.barrier}`
    
    setCart(prev => {
      const existing = prev.find(i => i.id === id)
      if (existing) {
        return prev.map(i => 
          i.id === id 
            ? { ...i, quantity: i.quantity + item.quantity, totalPrice: (i.quantity + item.quantity) * i.unitPrice }
            : i
        )
      }
      return [...prev, { ...item, id }]
    })
    setIsCartOpen(true)
  }

  const removeFromCart = (id: string) => {
    setCart(prev => prev.filter(item => item.id !== id))
  }

  const updateQuantity = (id: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(id)
      return
    }
    setCart(prev => prev.map(item => 
      item.id === id 
        ? { ...item, quantity, totalPrice: quantity * item.unitPrice }
        : item
    ))
  }

  const clearCart = () => {
    setCart([])
  }

  return (
    <StoreContext.Provider value={{
      cart,
      cartCount,
      cartTotal,
      addToCart,
      removeFromCart,
      updateQuantity,
      clearCart,
      isCartOpen,
      setIsCartOpen
    }}>
      {children}
    </StoreContext.Provider>
  )
}
