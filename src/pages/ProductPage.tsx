import React, { useState, useMemo } from 'react'
import { useParams, Link } from 'react-router-dom'
import { ArrowLeft, ShoppingCart, Star, Check } from 'lucide-react'
import { useStore } from '../store/StoreContext'
import { FEATURED_PRODUCTS, POUCH_SHAPES, POUCH_SIZES, BARRIER_OPTIONS, QUANTITY_OPTIONS, getPrice, getProductImage } from '../store/productData'

const ProductPage: React.FC = () => {
  const { productId } = useParams<{ productId: string }>()
  const { addToCart, cartCount, setIsCartOpen } = useStore()
  
  const product = FEATURED_PRODUCTS.find(p => p.id === productId)
  
  const [selectedShape, setSelectedShape] = useState('stand-up')
  const [selectedSize, setSelectedSize] = useState('100x150')
  const [selectedBarrier, setSelectedBarrier] = useState('metalised')
  const [selectedQuantity, setSelectedQuantity] = useState(100)

  const totalPrice = useMemo(() => getPrice(selectedShape, selectedSize, selectedQuantity), [selectedShape, selectedSize, selectedQuantity])
  const unitPrice = totalPrice > 0 ? totalPrice / selectedQuantity : 0
  const productImage = useMemo(() => getProductImage(selectedShape), [selectedShape])

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <p className="text-xl mb-4">Product not found</p>
        <Link to="/store" className="text-primary-600 hover:underline">Back to Store</Link>
      </div>
    )
  }

  const handleAddToCart = () => {
    if (totalPrice <= 0) return
    addToCart({
      productId: product.id,
      name: product.name,
      image: productImage,
      variant: { shape: selectedShape, size: selectedSize, barrier: selectedBarrier, finish: 'matt' },
      quantity: 1,
      unitPrice: totalPrice,
      totalPrice: totalPrice
    })
  }

  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Header */}
      <header className="bg-white border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/store" className="flex items-center gap-2 text-neutral-600 hover:text-primary-600 transition">
            <ArrowLeft className="h-5 w-5" /> Back to Store
          </Link>
          <button onClick={() => setIsCartOpen(true)} className="relative p-2 hover:bg-neutral-100 rounded-full transition">
            <ShoppingCart className="h-6 w-6 text-neutral-700" />
            {cartCount > 0 && <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-bold">{cartCount}</span>}
          </button>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="bg-white rounded-2xl p-8 aspect-square flex items-center justify-center shadow-sm">
              <img src={productImage} alt={product.name} className="max-w-full max-h-full object-contain" />
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            {product.badge && <span className="inline-block bg-primary-100 text-primary-700 text-sm px-4 py-1 rounded-full font-medium">{product.badge}</span>}
            <h1 className="text-3xl font-bold text-neutral-900">{product.name}</h1>
            
            <div className="flex items-center gap-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className={`h-5 w-5 ${i < Math.floor(product.rating) ? 'text-yellow-400 fill-yellow-400' : 'text-neutral-300'}`} />
                ))}
              </div>
              <span className="text-neutral-600">({product.reviews} reviews)</span>
            </div>

            <p className="text-neutral-600">{product.description}</p>

            {/* Options */}
            <div className="space-y-4 pt-4 border-t">
              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-2">Package Shape</label>
                <select value={selectedShape} onChange={e => setSelectedShape(e.target.value)} className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500">
                  {POUCH_SHAPES.map(shape => <option key={shape.id} value={shape.id}>{shape.label}</option>)}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-2">Size</label>
                <select value={selectedSize} onChange={e => setSelectedSize(e.target.value)} className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500">
                  {POUCH_SIZES.map(size => <option key={size.id} value={size.id}>{size.label} ({size.imperial})</option>)}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-2">Barrier + Finish</label>
                <select value={selectedBarrier} onChange={e => setSelectedBarrier(e.target.value)} className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500">
                  {BARRIER_OPTIONS.map(opt => <option key={opt.id} value={opt.id}>{opt.label}</option>)}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-2">Quantity</label>
                <select value={selectedQuantity} onChange={e => setSelectedQuantity(Number(e.target.value))} className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500">
                  {QUANTITY_OPTIONS.map(qty => <option key={qty} value={qty}>{qty.toLocaleString()} pieces</option>)}
                </select>
              </div>
            </div>

            {/* Price */}
            <div className="bg-neutral-100 rounded-xl p-6">
              <div className="text-sm text-neutral-600 mb-2">Total Price (Shipping Included)</div>
              <div className="text-4xl font-bold text-primary-600 mb-2">US${totalPrice.toLocaleString()}</div>
              <div className="text-sm text-neutral-500">
                Unit Price: ${unitPrice.toFixed(2)}/pc • Quantity: {selectedQuantity.toLocaleString()} pcs
              </div>
            </div>

            {/* Add to Cart */}
            <button onClick={handleAddToCart} disabled={totalPrice <= 0} className="w-full py-4 bg-primary-600 hover:bg-primary-700 disabled:bg-neutral-400 text-white font-semibold rounded-xl transition flex items-center justify-center gap-2">
              <ShoppingCart className="h-5 w-5" /> Add to Cart
            </button>

            {/* Features */}
            <div className="grid grid-cols-2 gap-3 pt-4">
              {product.features.map((feature, i) => (
                <div key={i} className="flex items-center gap-2 text-sm text-neutral-600">
                  <Check className="h-4 w-4 text-primary-500" /> {feature}
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default ProductPage
