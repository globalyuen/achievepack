import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { ShoppingCart, Search, Star, Truck, Shield, Clock, ArrowLeft, Grid3X3, List, ChevronDown } from 'lucide-react'
import { useStore } from '../store/StoreContext'
import { FEATURED_PRODUCTS, POUCH_SIZES } from '../store/productData'

type ViewMode = 'grid' | 'list'
type SortOption = 'popularity' | 'price-low' | 'price-high' | 'newest'

const CATEGORIES = [
  { id: 'all', label: 'All Products' },
  { id: 'sample', label: 'Sample' },
  { id: 'conventional-digital', label: 'Conventional Digital' },
  { id: 'eco-digital', label: 'Eco Digital' },
]

const PRICE_RANGES = [
  { id: 'all', label: 'All Prices', min: 0, max: Infinity },
  { id: 'under-100', label: 'Under $100', min: 0, max: 100 },
  { id: '100-200', label: '$100 - $200', min: 100, max: 200 },
  { id: '200-500', label: '$200 - $500', min: 200, max: 500 },
  { id: 'over-500', label: 'Over $500', min: 500, max: Infinity },
]

const SIZE_OPTIONS = [
  '90x130', '100x150', '110x160', '120x170', '140x200', '160x240'
]

const StorePage: React.FC = () => {
  const { cartCount, setIsCartOpen } = useStore()
  const [selectedCategory, setSelectedCategory] = useState<string>('all')
  const [selectedPrice, setSelectedPrice] = useState<string>('all')
  const [selectedSizes, setSelectedSizes] = useState<string[]>([])
  const [searchQuery, setSearchQuery] = useState('')
  const [viewMode, setViewMode] = useState<ViewMode>('grid')
  const [sortBy, setSortBy] = useState<SortOption>('popularity')
  const [isSortOpen, setIsSortOpen] = useState(false)

  const toggleSize = (size: string) => {
    setSelectedSizes(prev => 
      prev.includes(size) 
        ? prev.filter(s => s !== size)
        : [...prev, size]
    )
  }

  const priceRange = PRICE_RANGES.find(p => p.id === selectedPrice) || PRICE_RANGES[0]

  const filteredProducts = FEATURED_PRODUCTS.filter(product => {
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesPrice = product.basePrice >= priceRange.min && product.basePrice < priceRange.max
    return matchesCategory && matchesSearch && matchesPrice
  })

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case 'price-low': return a.basePrice - b.basePrice
      case 'price-high': return b.basePrice - a.basePrice
      case 'newest': return 0 // Would use date if available
      default: return b.reviews - a.reviews // popularity
    }
  })

  const getSortLabel = (sort: SortOption) => {
    const labels: Record<SortOption, string> = {
      'popularity': 'Popularity',
      'price-low': 'Price: Low to High',
      'price-high': 'Price: High to Low',
      'newest': 'Newest'
    }
    return labels[sort]
  }

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

      <main className="max-w-7xl mx-auto px-4 py-8">
        {/* Search Result Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          <div>
            <h2 className="text-xl text-neutral-600">
              {searchQuery ? (
                <>Search result for: <span className="font-bold text-neutral-900">{searchQuery}</span></>
              ) : (
                <span className="font-bold text-neutral-900">All Products</span>
              )}
            </h2>
            <p className="text-sm text-neutral-500 mt-1">{sortedProducts.length} products found</p>
          </div>

          <div className="flex items-center gap-3">
            {/* Sort Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsSortOpen(!isSortOpen)}
                className="flex items-center gap-2 px-4 py-2.5 bg-white border border-neutral-200 rounded-lg hover:border-neutral-300 transition min-w-[180px] justify-between"
              >
                <span className="text-sm text-neutral-600">Sort by: <span className="text-neutral-900 font-medium">{getSortLabel(sortBy)}</span></span>
                <ChevronDown className={`h-4 w-4 text-neutral-400 transition-transform ${isSortOpen ? 'rotate-180' : ''}`} />
              </button>
              {isSortOpen && (
                <div className="absolute top-full right-0 mt-1 w-full bg-white border border-neutral-200 rounded-lg shadow-lg z-10">
                  {(['popularity', 'price-low', 'price-high', 'newest'] as SortOption[]).map(option => (
                    <button
                      key={option}
                      onClick={() => { setSortBy(option); setIsSortOpen(false) }}
                      className={`w-full text-left px-4 py-2.5 text-sm hover:bg-neutral-50 transition ${
                        sortBy === option ? 'text-primary-600 font-medium bg-primary-50' : 'text-neutral-700'
                      }`}
                    >
                      {getSortLabel(option)}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* View Toggle */}
            <div className="flex border border-neutral-200 rounded-lg overflow-hidden">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2.5 transition ${viewMode === 'grid' ? 'bg-neutral-900 text-white' : 'bg-white text-neutral-600 hover:bg-neutral-50'}`}
              >
                <Grid3X3 className="h-5 w-5" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2.5 transition ${viewMode === 'list' ? 'bg-neutral-900 text-white' : 'bg-white text-neutral-600 hover:bg-neutral-50'}`}
              >
                <List className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>

        <div className="flex gap-8">
          {/* Sidebar Filters */}
          <aside className="hidden lg:block w-72 flex-shrink-0">
            {/* Category Filter */}
            <div className="bg-white border border-neutral-200 rounded-xl p-5 mb-4">
              <h3 className="font-bold text-neutral-900 mb-4">Category</h3>
              <ul className="space-y-2">
                {CATEGORIES.map(cat => (
                  <li key={cat.id}>
                    <button
                      onClick={() => setSelectedCategory(cat.id)}
                      className={`w-full text-left py-1.5 text-sm transition ${
                        selectedCategory === cat.id
                          ? 'text-primary-600 font-medium'
                          : 'text-neutral-600 hover:text-neutral-900'
                      }`}
                    >
                      {cat.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Price Filter */}
            <div className="bg-white border border-neutral-200 rounded-xl p-5 mb-4">
              <h3 className="font-bold text-neutral-900 mb-4">Price</h3>
              <ul className="space-y-2">
                {PRICE_RANGES.map(range => (
                  <li key={range.id}>
                    <button
                      onClick={() => setSelectedPrice(range.id)}
                      className={`w-full text-left py-1.5 text-sm transition ${
                        selectedPrice === range.id
                          ? 'text-primary-600 font-medium'
                          : 'text-neutral-600 hover:text-neutral-900'
                      }`}
                    >
                      {range.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Size Filter */}
            <div className="bg-white border border-neutral-200 rounded-xl p-5">
              <h3 className="font-bold text-neutral-900 mb-4">Size</h3>
              <div className="grid grid-cols-3 gap-2">
                {SIZE_OPTIONS.map(size => (
                  <button
                    key={size}
                    onClick={() => toggleSize(size)}
                    className={`py-2 px-3 text-sm border rounded-lg transition ${
                      selectedSizes.includes(size)
                        ? 'border-neutral-900 bg-neutral-900 text-white'
                        : 'border-neutral-200 text-neutral-700 hover:border-neutral-300'
                    }`}
                  >
                    {size.split('x')[0]}
                  </button>
                ))}
              </div>
            </div>
          </aside>

          {/* Product Grid/List */}
          <div className="flex-1">
            {viewMode === 'grid' ? (
              <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
                {sortedProducts.map(product => (
                  <Link
                    key={product.id}
                    to={`/store/product/${product.id}`}
                    className="bg-white rounded-2xl overflow-hidden border border-neutral-200 hover:shadow-lg hover:border-neutral-300 transition group"
                  >
                    <div className="relative aspect-square bg-neutral-50 overflow-hidden p-4">
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
            ) : (
              <div className="space-y-4">
                {sortedProducts.map(product => (
                  <Link
                    key={product.id}
                    to={`/store/product/${product.id}`}
                    className="flex bg-white rounded-2xl overflow-hidden border border-neutral-200 hover:shadow-lg hover:border-neutral-300 transition group"
                  >
                    <div className="relative w-48 h-48 bg-neutral-50 overflow-hidden p-4 flex-shrink-0">
                      <img src={product.images[0]} alt={product.name} className="w-full h-full object-contain group-hover:scale-105 transition duration-300" />
                      {product.badge && (
                        <span className="absolute top-3 left-3 bg-primary-500 text-white text-xs px-2 py-0.5 rounded-full">
                          {product.badge}
                        </span>
                      )}
                    </div>
                    <div className="p-5 flex-1">
                      <h3 className="font-semibold text-lg text-neutral-900 mb-2 group-hover:text-primary-600 transition">{product.name}</h3>
                      <div className="flex items-center gap-1 mb-2">
                        <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                        <span className="text-sm text-neutral-600">{product.rating} ({product.reviews} reviews)</span>
                      </div>
                      <p className="text-neutral-600 mb-4">{product.description}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-xl font-bold text-primary-600">From ${product.basePrice}</span>
                        <span className="text-sm text-primary-500 font-medium">{product.turnaround}</span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            )}

            {sortedProducts.length === 0 && (
              <div className="text-center py-16">
                <p className="text-neutral-500 text-lg">No products found matching your criteria.</p>
                <button
                  onClick={() => { setSelectedCategory('all'); setSelectedPrice('all'); setSelectedSizes([]); setSearchQuery('') }}
                  className="mt-4 text-primary-600 font-medium hover:underline"
                >
                  Clear all filters
                </button>
              </div>
            )}
          </div>
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
