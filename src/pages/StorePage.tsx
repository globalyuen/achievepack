import React, { useState, useMemo } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ShoppingCart, Search, Star, Truck, Shield, Clock, ArrowLeft, Grid3X3, List, ChevronDown } from 'lucide-react'
import { useStore } from '../store/StoreContext'
import { FEATURED_PRODUCTS, type StoreProduct, type EcoDigitalProduct, type ConventionalProduct } from '../store/productData'
import { getProductImage } from '../utils/productImageMapper'
import type { ShapeType } from '../utils/productImageMapper'

type ViewMode = 'grid' | 'list'
type SortOption = 'popularity' | 'price-low' | 'price-high' | 'newest'

const CATEGORIES = [
  { id: 'all', label: 'All Products' },
  { id: 'sample', label: 'Sample' },
  { id: 'conventional-digital', label: 'Conventional Digital' },
  { id: 'eco-digital', label: 'Eco Digital' },
]

const SHAPES = [
  { id: 'all', label: 'All Shapes' },
  { id: '3 Side Seal Pouch', label: '3 Side Seal' },
  { id: 'Center Seal Pouch', label: 'Center Seal' },
  { id: 'Stand Up Pouch / Doypack', label: 'Stand Up' },
  { id: 'Box Bottom Pouch', label: 'Box Bottom' },
  { id: 'Flat Squared Bottom Pouch', label: 'Flat Bottom' },
  { id: 'Quad Seal Pouch', label: 'Quad Seal' },
  { id: 'Side Gusset Pouch', label: 'Side Gusset' },
]

const StorePage: React.FC = () => {
  const { cartCount, setIsCartOpen } = useStore()
  const navigate = useNavigate()
  const [selectedCategory, setSelectedCategory] = useState<string>('all')
  const [selectedShape, setSelectedShape] = useState<string>('all')
  const [searchQuery, setSearchQuery] = useState('')
  const [viewMode, setViewMode] = useState<ViewMode>('grid')
  const [sortBy, setSortBy] = useState<SortOption>('popularity')
  const [isSortOpen, setIsSortOpen] = useState(false)

  // Helper function to get product image - Always show pouch shape
  const getProductDisplayImage = (product: StoreProduct): string => {
    // For Eco Digital products, always show pouch shape (not material type)
    if (product.category === 'eco-digital') {
      const ecoProduct = product as EcoDigitalProduct
      try {
        return getProductImage({
          shape: ecoProduct.shape as ShapeType,
          closure: 'No',
          surface: 'Matt',
          material: undefined, // Don't use material for store thumbnails
        })
      } catch (error) {
        console.error('Image mapping error:', error)
        return product.images[0]
      }
    }
    
    // For other products, use existing images
    return product.images[0]
  }

  // Helper function to get product shape
  const getProductShape = (product: StoreProduct): string | null => {
    if ('shape' in product) {
      const shape = product.shape
      // Normalize conventional digital shapes to match SHAPES filter format
      const shapeMap: Record<string, string> = {
        '3-side-seal': '3 Side Seal Pouch',
        'zipper-3-side-seal': '3 Side Seal Pouch',
        'stand-up': 'Stand Up Pouch / Doypack',
        'zipper-stand-up': 'Stand Up Pouch / Doypack',
      }
      return shapeMap[shape] || shape
    }
    return null
  }

  const filteredProducts = useMemo(() => {
    return FEATURED_PRODUCTS.filter(product => {
      const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory
      const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                           product.description.toLowerCase().includes(searchQuery.toLowerCase())
      
      const productShape = getProductShape(product)
      const matchesShape = selectedShape === 'all' || productShape === selectedShape
      
      return matchesCategory && matchesSearch && matchesShape
    })
  }, [selectedCategory, searchQuery, selectedShape])

  const sortedProducts = useMemo(() => {
    return [...filteredProducts].sort((a, b) => {
      switch (sortBy) {
        case 'price-low': return a.basePrice - b.basePrice
        case 'price-high': return b.basePrice - a.basePrice
        case 'newest': return 0
        default: return b.reviews - a.reviews
      }
    })
  }, [filteredProducts, sortBy])

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
      {/* Store Header - Fixed */}
      <header className="bg-primary-600 text-white fixed top-0 left-0 right-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link to="/" className="flex items-center gap-3 hover:opacity-90 transition">
              <img 
                src="/ap-logo-white.png" 
                alt="Achieve Pack" 
                className="h-10 w-auto"
              />
              <span className="text-2xl font-bold hidden sm:inline">Store</span>
            </Link>
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
            <button onClick={() => {
              if (cartCount === 0) {
                navigate('/store')
              } else {
                setIsCartOpen(true)
              }
            }} className="relative p-2 hover:bg-white/10 rounded-full transition">
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

      {/* Spacer for fixed header */}
      <div className="h-[72px]"></div>

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

            {/* Shape Filter */}
            <div className="bg-white border border-neutral-200 rounded-xl p-5 mb-4">
              <h3 className="font-bold text-neutral-900 mb-4">Shape</h3>
              <ul className="space-y-2">
                {SHAPES.map(shape => (
                  <li key={shape.id}>
                    <button
                      onClick={() => setSelectedShape(shape.id)}
                      className={`w-full text-left py-1.5 text-sm transition ${
                        selectedShape === shape.id
                          ? 'text-primary-600 font-medium'
                          : 'text-neutral-600 hover:text-neutral-900'
                      }`}
                    >
                      {shape.label}
                    </button>
                  </li>
                ))}
              </ul>
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
                      <img src={getProductDisplayImage(product)} alt={product.name} className="w-full h-full object-contain group-hover:scale-105 transition duration-300" />
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
                      <img src={getProductDisplayImage(product)} alt={product.name} className="w-full h-full object-contain group-hover:scale-105 transition duration-300" />
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
                  onClick={() => { 
                    setSelectedCategory('all'); 
                    setSelectedShape('all');
                    setSearchQuery('') 
                  }}
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
