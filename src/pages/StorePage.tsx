import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { ShoppingCart, Filter, Search, Star, Truck, Shield, Clock, ArrowLeft } from 'lucide-react'
import { useStore } from '../store/StoreContext'
import { FEATURED_PRODUCTS } from '../store/productData'

const StorePage: React.FC = () => {
  const { cartCount, setIsCartOpen } = useStore()
  const [selectedCategory, setSelectedCategory] = useState<string>('all')
  const [searchQuery, setSearchQuery] = useState('')

  const filteredProducts = FEATURED_PRODUCTS.filter(product => {
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Store Header */}
      <header className="bg-primary-600 text-white sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link to="/" className="flex items-center gap-2 text-white/80 hover:text-white transition">
              <ArrowLeft className="h-5 w-5" />
            </Link>
            <Link to="/store" className="text-2xl font-bold">AchievePack Store</Link>
          </div>
          <div className="flex items-center gap-4">
            <div className="relative hidden md:block">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-neutral-400" />
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 pr-4 py-2 rounded-full bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50 w-64"
              />
            </div>
            <button onClick={() => setIsCartOpen(true)} className="relative p-2 hover:bg-white/10 rounded-full transition">
              <ShoppingCart className="h-6 w-6" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-bold">
                  {cartCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Hero Banner */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Custom Printed Pouches</h1>
          <p className="text-xl text-white/90 mb-8">Starting from just $90 for 100 pieces • Free Shipping Included</p>
          <div className="flex flex-wrap justify-center gap-8 text-sm">
            <div className="flex items-center gap-2"><Truck className="h-5 w-5" /> Free Worldwide Shipping</div>
            <div className="flex items-center gap-2"><Clock className="h-5 w-5" /> 15-20 Days Turnaround</div>
            <div className="flex items-center gap-2"><Shield className="h-5 w-5" /> Food-Grade Quality</div>
          </div>
        </div>
      </section>

      <main className="max-w-7xl mx-auto px-4 py-12">
        {/* Filters */}
        <div className="flex flex-wrap items-center gap-4 mb-8">
          <div className="flex items-center gap-2 text-neutral-700">
            <Filter className="h-5 w-5" />
            <span className="font-medium">Filter:</span>
          </div>
          {['all', 'custom-printed', 'compostable', 'recyclable'].map(cat => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition ${
                selectedCategory === cat
                  ? 'bg-primary-600 text-white'
                  : 'bg-white text-neutral-700 hover:bg-neutral-100 border'
              }`}
            >
              {cat === 'all' ? 'All Products' : cat.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map(product => (
            <Link
              key={product.id}
              to={`/store/product/${product.id}`}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition group"
            >
              <div className="relative aspect-square bg-neutral-100 overflow-hidden p-4">
                <img src={product.images[0]} alt={product.name} className="w-full h-full object-contain group-hover:scale-105 transition duration-300" />
                {product.badge && (
                  <span className="absolute top-3 left-3 bg-primary-500 text-white text-xs px-3 py-1 rounded-full">
                    {product.badge}
                  </span>
                )}
              </div>
              <div className="p-5">
                <h3 className="font-semibold text-neutral-900 mb-2 group-hover:text-primary-600 transition">{product.name}</h3>
                <div className="flex items-center gap-1 mb-2">
                  <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                  <span className="text-sm text-neutral-600">{product.rating} ({product.reviews} reviews)</span>
                </div>
                <p className="text-sm text-neutral-500 mb-3">{product.shortDesc}</p>
                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold text-primary-600">From ${product.basePrice}</span>
                  <span className="text-xs text-primary-500 font-medium">{product.turnaround}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-neutral-900 text-white py-12 mt-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-neutral-400">© 2024 AchievePack. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default StorePage
