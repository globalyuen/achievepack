import React, { useState, useMemo, useCallback, useTransition, useEffect } from 'react'
import { Link, useNavigate, useSearchParams } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { useTranslation } from 'react-i18next'
import { ShoppingCart, Search, Star, Truck, Shield, Clock, Grid3X3, List, ChevronDown, User, Globe, Menu, X, Sparkles } from 'lucide-react'
import { useStore } from '../store/StoreContext'
import { FEATURED_PRODUCTS, type StoreProduct, type EcoDigitalProduct, type ConventionalProduct, getProductType, getProductSubCategory } from '../store/productData'
import { getProductImage } from '../utils/productImageMapper'
import type { ShapeType } from '../utils/productImageMapper'
import MegaMenu from '../components/MegaMenu'
import StoreFooter from '../components/StoreFooter'
import { useCustomQuote } from '../contexts/CustomQuoteContext'

type ViewMode = 'grid' | 'list'
type SortOption = 'popularity' | 'price-low' | 'price-high' | 'newest'

// NEW: Hierarchical category menu structure
interface CategoryMenuItem {
  id: string
  label: string
  type: 'all' | 'group' | 'item'
  icon?: string
  badge?: string
  children?: { id: string; label: string; count: number }[]
}

const CATEGORY_MENU: CategoryMenuItem[] = [
  { 
    id: 'all', 
    label: 'All Products',
    type: 'all',
    icon: '🛒'
  },
  {
    id: 'sample-group',
    label: 'Sample',
    type: 'group',
    icon: '📦',
    children: [
      { id: 'samples', label: 'Sample Packs', count: 4 },
    ]
  },
  {
    id: 'stock-group',
    label: 'Stock Size',
    type: 'group',
    icon: '🏷️',
    badge: 'Buy Now',
    children: [
      { id: 'conventional-digital', label: 'Conventional Digital', count: 8 },
      { id: 'eco-stock-plain', label: 'Eco Stock (Plain)', count: 4 },
    ]
  },
  {
    id: 'custom-group',
    label: 'Custom Size',
    type: 'group',
    icon: '🎨',
    badge: 'RFQ',
    children: [
      { id: 'eco-digital', label: 'Eco Digital', count: 7 },
      { id: 'eco-stock-custom-print', label: 'Eco Stock Custom Print', count: 2 },
      { id: 'boxes', label: 'Custom Boxes', count: 2 },
    ]
  },
]

// Keep legacy categories for backward compatibility with URL params
const CATEGORIES = [
  { id: 'all', label: 'All Products' },
  { id: 'sample', label: 'Sample' },
  { id: 'samples', label: 'Sample Packs' },
  { id: 'conventional-digital', label: 'Conventional Digital' },
  { id: 'eco-digital', label: 'Eco Digital' },
  { id: 'eco-stock', label: 'Eco Stock' },
  { id: 'eco-stock-plain', label: 'Eco Stock (Plain)' },
  { id: 'eco-stock-custom-print', label: 'Eco Stock Custom Print' },
  { id: 'boxes', label: 'Boxes' },
  { id: 'mailer', label: 'Mailer Bags' },
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
  { id: 'Header Bag', label: 'Header Bag' },
  { id: 'Mailer Bag', label: 'Mailer Bag' },
  { id: 'Corrugated Box', label: 'Corrugated Box' },
  { id: 'Tuck Box', label: 'Tuck Box' },
]

const StorePage: React.FC = () => {
  const { t, i18n } = useTranslation()
  const { cartCount, setIsCartOpen } = useStore()
  const { openQuoteLightbox } = useCustomQuote()
  const navigate = useNavigate()
  const [searchParams, setSearchParams] = useSearchParams()
  const [isPending, startTransition] = useTransition()
  
  // Read initial values from URL params
  const urlCategory = searchParams.get('category') || 'all'
  const urlShape = searchParams.get('shape') || 'all'
  
  const [selectedCategory, setSelectedCategory] = useState<string>(urlCategory)
  const [selectedShape, setSelectedShape] = useState<string>(urlShape)
  const [searchQuery, setSearchQuery] = useState('')
  const [viewMode, setViewMode] = useState<ViewMode>('grid')
  const [sortBy, setSortBy] = useState<SortOption>('popularity')
  const [isSortOpen, setIsSortOpen] = useState(false)
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false)

  // Sync state with URL params when they change
  useEffect(() => {
    const newCategory = searchParams.get('category') || 'all'
    const newShape = searchParams.get('shape') || 'all'
    if (newCategory !== selectedCategory) setSelectedCategory(newCategory)
    if (newShape !== selectedShape) setSelectedShape(newShape)
  }, [searchParams])

  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang)
    setIsLangMenuOpen(false)
  }

  // Debounced search handler for INP optimization
  const handleSearchChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    startTransition(() => {
      setSearchQuery(value)
    })
  }, [])

  // Optimized category/shape handlers - also update URL
  const handleCategoryChange = useCallback((categoryId: string) => {
    startTransition(() => {
      setSelectedCategory(categoryId)
      const newParams = new URLSearchParams(searchParams)
      if (categoryId === 'all') {
        newParams.delete('category')
      } else {
        newParams.set('category', categoryId)
      }
      setSearchParams(newParams, { replace: true })
    })
  }, [searchParams, setSearchParams])

  const handleShapeChange = useCallback((shapeId: string) => {
    startTransition(() => {
      setSelectedShape(shapeId)
      const newParams = new URLSearchParams(searchParams)
      if (shapeId === 'all') {
        newParams.delete('shape')
      } else {
        newParams.set('shape', shapeId)
      }
      setSearchParams(newParams, { replace: true })
    })
  }, [searchParams, setSearchParams])

  const handleSortChange = useCallback((option: SortOption) => {
    setSortBy(option)
    setIsSortOpen(false)
  }, [])

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

  // Map URL shape params to internal shape names
  const urlShapeToInternal: Record<string, string> = {
    '3-side-seal': '3 Side Seal Pouch',
    'stand-up': 'Stand Up Pouch / Doypack',
    'flat-bottom': 'Flat Squared Bottom Pouch',
    'side-gusset': 'Side Gusset Pouch',
    'spout': 'Spout Pouch',
  }

  const filteredProducts = useMemo(() => {
    // Convert URL shape param to internal shape name
    const internalShape = urlShapeToInternal[selectedShape] || selectedShape
    
    return FEATURED_PRODUCTS.filter(product => {
      // Get product's subCategory for filtering
      const productSubCategory = getProductSubCategory(product)
      
      // Special handling for different category filters
      let matchesCategory = false
      if (selectedCategory === 'all') {
        matchesCategory = true
      } else if (selectedCategory === 'mailer') {
        // Mailer category filters by shape 'Mailer Bag'
        const productShape = getProductShape(product)
        matchesCategory = productShape === 'Mailer Bag'
      } else if (selectedCategory === 'samples' || selectedCategory === 'sample') {
        // Sample category
        matchesCategory = product.category === 'sample'
      } else if (selectedCategory === 'eco-stock-plain') {
        // Eco Stock Plain (no custom print)
        matchesCategory = product.category === 'eco-stock' && !product.id.includes('-custom')
      } else if (selectedCategory === 'eco-stock-custom-print') {
        // Eco Stock Custom Print
        matchesCategory = product.category === 'eco-stock' && product.id.includes('-custom')
      } else {
        // Standard category match
        matchesCategory = product.category === selectedCategory || productSubCategory === selectedCategory
      }
      
      const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                           product.description.toLowerCase().includes(searchQuery.toLowerCase())
      
      const productShape = getProductShape(product)
      const matchesShape = selectedShape === 'all' || productShape === internalShape || productShape === selectedShape
      
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
    <>
      <Helmet>
        <title>{t('seo.store.title', 'Shop Eco-Friendly Packaging | Achieve Pack Store')}</title>
        <meta name="description" content={t('seo.store.description', 'Browse our selection of sustainable packaging solutions. Compostable pouches, recyclable bags, and bio-based packaging with low minimum orders.')} />
        <link rel="canonical" href="https://achievepack.com/store" />
        <meta property="og:title" content={t('seo.store.title', 'Shop Eco-Friendly Packaging | Achieve Pack')} />
        <meta property="og:description" content={t('seo.store.description', 'Sustainable packaging solutions with low MOQ.')} />
        <meta property="og:url" content="https://achievepack.com/store" />
      </Helmet>
    <div className="min-h-screen bg-neutral-50">
      {/* Store Header - Same as Landing Page */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-sm border-b border-neutral-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Full Width Navigation: Left Menus | Logo | Right Menus + Actions */}
            <MegaMenu hideLearnBlog />

            {/* Center Logo - Absolute positioned */}
            <div className="hidden lg:flex items-center justify-center absolute left-1/2 -translate-x-1/2">
              <Link to="/" className="flex items-center">
                <img src="/ap-logo.svg" alt="Achieve Pack Logo" className="h-14 w-auto" loading="eager" decoding="async" width="180" height="56" fetchPriority="high" />
              </Link>
            </div>

            {/* Mobile Logo */}
            <div className="lg:hidden flex items-center">
              <Link to="/" className="flex items-center">
                <img src="/ap-logo.svg" alt="Achieve Pack Logo" className="h-10 w-auto" loading="eager" decoding="async" width="120" height="40" fetchPriority="high" />
              </Link>
            </div>

            {/* Right Actions */}
            <div className="hidden lg:flex items-center space-x-3">
              <button
                onClick={() => {
                  if (cartCount === 0) {
                    navigate('/store')
                  } else {
                    setIsCartOpen(true)
                  }
                }}
                className="relative w-10 h-10 rounded-full bg-primary-600 flex items-center justify-center hover:bg-primary-700 transition-colors"
              >
                <ShoppingCart className="h-5 w-5 text-white" />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs font-bold rounded-full flex items-center justify-center">
                    {cartCount > 99 ? '99+' : cartCount}
                  </span>
                )}
              </button>
              <Link
                to="/dashboard"
                className="w-10 h-10 rounded-full bg-primary-600 flex items-center justify-center hover:bg-primary-700 transition-colors"
              >
                <User className="h-5 w-5 text-white" />
              </Link>
              <div className="relative">
                <button
                  onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
                  className="w-10 h-10 rounded-full bg-primary-600 flex items-center justify-center hover:bg-primary-700 transition-colors"
                >
                  <Globe className="h-5 w-5 text-white" />
                </button>
                {isLangMenuOpen && (
                  <div className="absolute right-0 mt-2 w-32 bg-white rounded-lg shadow-lg border border-neutral-200 py-1 z-50">
                    <button onClick={() => changeLanguage('en')} className="block w-full text-left px-4 py-2 text-sm text-neutral-700 hover:bg-neutral-100">English</button>
                    <button onClick={() => changeLanguage('fr')} className="block w-full text-left px-4 py-2 text-sm text-neutral-700 hover:bg-neutral-100">Français</button>
                    <button onClick={() => changeLanguage('es')} className="block w-full text-left px-4 py-2 text-sm text-neutral-700 hover:bg-neutral-100">Español</button>
                    <button onClick={() => changeLanguage('zh-TW')} className="block w-full text-left px-4 py-2 text-sm text-neutral-700 hover:bg-neutral-100">繁體中文</button>
                  </div>
                )}
              </div>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden flex items-center gap-2">
              <button
                onClick={() => {
                  if (cartCount === 0) {
                    navigate('/store')
                  } else {
                    setIsCartOpen(true)
                  }
                }}
                className="relative w-10 h-10 rounded-full bg-primary-600 flex items-center justify-center hover:bg-primary-700 transition-colors"
              >
                <ShoppingCart className="h-5 w-5 text-white" />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs font-bold rounded-full flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </button>
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-neutral-700 hover:text-primary-500 transition-colors"
                aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
              >
                {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-neutral-200">
            <div className="px-4 py-4 space-y-3">
              {/* Mobile Search */}
              <div className="relative mb-4">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-neutral-400" />
                <input
                  type="text"
                  placeholder="Search products..."
                  defaultValue={searchQuery}
                  onChange={handleSearchChange}
                  className="w-full pl-9 pr-4 py-2 rounded-full bg-neutral-100 border border-neutral-200 text-neutral-700 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-primary-500"
                />
              </div>
              <Link to="/store" onClick={() => setIsMobileMenuOpen(false)} className="block w-full text-left text-base font-semibold text-neutral-900 py-2">
                🛒 Shop All
              </Link>
              <div className="border-t border-neutral-100 pt-3">
                <p className="text-xs font-bold text-primary-600 uppercase mb-2">Eco Digital</p>
                <Link to="/store/eco-standup" onClick={() => setIsMobileMenuOpen(false)} className="block py-2 text-neutral-700">Stand Up Pouch</Link>
                <Link to="/store/eco-boxbottom" onClick={() => setIsMobileMenuOpen(false)} className="block py-2 text-neutral-700">Box Bottom Pouch</Link>
                <Link to="/store/eco-quadseal" onClick={() => setIsMobileMenuOpen(false)} className="block py-2 text-neutral-700">Quad Seal Pouch</Link>
                <Link to="/store/eco-sidegusset" onClick={() => setIsMobileMenuOpen(false)} className="block py-2 text-neutral-700">Side Gusset Pouch</Link>
              </div>
              <div className="border-t border-neutral-100 pt-3">
                <p className="text-xs font-bold text-primary-600 uppercase mb-2">Boxes</p>
                <Link to="/store?category=boxes" onClick={() => setIsMobileMenuOpen(false)} className="block py-2 text-neutral-700">All Boxes</Link>
                <Link to="/custom-boxes" onClick={() => setIsMobileMenuOpen(false)} className="block py-2 text-neutral-700">Custom Boxes</Link>
              </div>
              <div className="border-t border-neutral-100 pt-3">
                <Link to="/blog" onClick={() => setIsMobileMenuOpen(false)} className="block py-2 text-neutral-700 font-medium">Blog</Link>
                <Link to="/dashboard" onClick={() => setIsMobileMenuOpen(false)} className="block py-2 text-neutral-700 font-medium">Customer Center</Link>
              </div>
              
              {/* Mobile Language Options */}
              <div className="py-2 border-t border-neutral-100 my-2">
                <div className="text-xs text-neutral-500 font-semibold mb-2 uppercase px-1">Language</div>
                <div className="grid grid-cols-2 gap-2">
                  <button onClick={() => changeLanguage('en')} className={`text-sm py-1 px-2 rounded ${i18n.language === 'en' ? 'bg-primary-50 text-primary-600' : 'text-neutral-600'}`}>English</button>
                  <button onClick={() => changeLanguage('fr')} className={`text-sm py-1 px-2 rounded ${i18n.language === 'fr' ? 'bg-primary-50 text-primary-600' : 'text-neutral-600'}`}>Français</button>
                  <button onClick={() => changeLanguage('es')} className={`text-sm py-1 px-2 rounded ${i18n.language === 'es' ? 'bg-primary-50 text-primary-600' : 'text-neutral-600'}`}>Español</button>
                  <button onClick={() => changeLanguage('zh-TW')} className={`text-sm py-1 px-2 rounded ${i18n.language === 'zh-TW' ? 'bg-primary-50 text-primary-600' : 'text-neutral-600'}`}>繁體中文</button>
                </div>
              </div>

              <a
                href="https://calendly.com/30-min-free-packaging-consultancy"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-primary-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-600 transition-colors mt-4 block text-center"
              >
                Book Free Consultation
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Spacer for fixed header */}
      <div className="h-16"></div>

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
            {/* Search Box - Desktop */}
            <div className="hidden md:block relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-neutral-400" />
              <input
                type="text"
                placeholder="Search products..."
                defaultValue={searchQuery}
                onChange={handleSearchChange}
                className="pl-9 pr-4 py-2.5 rounded-lg bg-white border border-neutral-200 text-neutral-700 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-primary-500 w-48"
              />
            </div>

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
                      onClick={() => handleSortChange(option)}
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

        {/* Mobile Filter Button */}
        <div className="lg:hidden mb-4">
          <button
            onClick={() => setIsMobileFilterOpen(true)}
            className="flex items-center gap-2 px-4 py-2.5 bg-white border border-neutral-200 rounded-lg w-full justify-center text-neutral-700 font-medium hover:border-neutral-300 transition"
          >
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
            </svg>
            Filters
            {(selectedCategory !== 'all' || selectedShape !== 'all') && (
              <span className="bg-primary-500 text-white text-xs px-2 py-0.5 rounded-full">
                {(selectedCategory !== 'all' ? 1 : 0) + (selectedShape !== 'all' ? 1 : 0)}
              </span>
            )}
          </button>
        </div>

        {/* Mobile Filter Drawer */}
        {isMobileFilterOpen && (
          <div className="lg:hidden fixed inset-0 z-50">
            {/* Backdrop */}
            <div 
              className="absolute inset-0 bg-black/50"
              onClick={() => setIsMobileFilterOpen(false)}
            />
            {/* Drawer */}
            <div className="absolute left-0 top-0 bottom-0 w-80 max-w-[85vw] bg-white shadow-xl overflow-y-auto">
              <div className="sticky top-0 bg-white border-b border-neutral-200 p-4 flex items-center justify-between">
                <h3 className="font-bold text-lg text-neutral-900">Filters</h3>
                <button 
                  onClick={() => setIsMobileFilterOpen(false)}
                  className="p-2 hover:bg-neutral-100 rounded-lg transition"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
              
              {/* Category Filter */}
              <div className="p-4 border-b border-neutral-100">
                <h4 className="font-bold text-neutral-900 mb-3">Category</h4>
                <ul className="space-y-2">
                  {CATEGORIES.map(cat => (
                    <li key={cat.id}>
                      <button
                        onClick={() => { handleCategoryChange(cat.id); }}
                        className={`w-full text-left py-2 px-3 text-sm rounded-lg transition ${selectedCategory === cat.id ? 'bg-primary-50 text-primary-600 font-medium' : 'text-neutral-600 hover:bg-neutral-50'}`}
                      >
                        {cat.label}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Shape Filter */}
              <div className="p-4">
                <h4 className="font-bold text-neutral-900 mb-3">Shape</h4>
                <ul className="space-y-2">
                  {SHAPES.map(shape => (
                    <li key={shape.id}>
                      <button
                        onClick={() => { handleShapeChange(shape.id); }}
                        className={`w-full text-left py-2 px-3 text-sm rounded-lg transition ${selectedShape === shape.id ? 'bg-primary-50 text-primary-600 font-medium' : 'text-neutral-600 hover:bg-neutral-50'}`}
                      >
                        {shape.label}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Apply Button */}
              <div className="sticky bottom-0 bg-white border-t border-neutral-200 p-4">
                <button
                  onClick={() => setIsMobileFilterOpen(false)}
                  className="w-full py-3 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition"
                >
                  Apply Filters
                </button>
                {(selectedCategory !== 'all' || selectedShape !== 'all') && (
                  <button
                    onClick={() => { setSelectedCategory('all'); setSelectedShape('all'); }}
                    className="w-full mt-2 py-2 text-primary-600 font-medium text-sm hover:underline"
                  >
                    Clear All Filters
                  </button>
                )}
              </div>
            </div>
          </div>
        )}

        <div className="flex gap-8">
          {/* Sidebar Filters - Sticky */}
          <aside className="hidden lg:block w-72 flex-shrink-0">
            <div className="sticky top-[88px]">
              {/* NEW: Hierarchical Category Menu */}
              <div className="bg-white border border-neutral-200 rounded-xl p-5 mb-4">
                <h3 className="font-bold text-neutral-900 mb-4">Categories</h3>
                <ul className="space-y-1">
                  {CATEGORY_MENU.map(item => (
                    <li key={item.id}>
                      {item.type === 'all' ? (
                        <button
                          onClick={() => handleCategoryChange('all')}
                          className={`w-full text-left py-2 px-3 text-sm rounded-lg transition flex items-center gap-2 ${
                            selectedCategory === 'all'
                              ? 'bg-primary-50 text-primary-600 font-medium'
                              : 'text-neutral-600 hover:bg-neutral-50'
                          }`}
                        >
                          <span>{item.icon}</span>
                          <span>{item.label}</span>
                        </button>
                      ) : (
                        <div className="mb-3">
                          <div className="flex items-center justify-between py-2 px-3">
                            <span className="text-xs font-bold text-neutral-400 uppercase flex items-center gap-2">
                              <span>{item.icon}</span>
                              {item.label}
                            </span>
                            {item.badge && (
                              <span className={`text-[10px] px-2 py-0.5 rounded-full font-medium ${
                                item.badge === 'Buy Now' 
                                  ? 'bg-green-100 text-green-700' 
                                  : 'bg-orange-100 text-orange-700'
                              }`}>
                                {item.badge}
                              </span>
                            )}
                          </div>
                          <ul className="ml-4 space-y-1">
                            {item.children?.map(child => (
                              <li key={child.id}>
                                <button
                                  onClick={() => handleCategoryChange(child.id)}
                                  className={`w-full text-left py-1.5 px-3 text-sm rounded-lg transition flex items-center justify-between ${
                                    selectedCategory === child.id
                                      ? 'bg-primary-50 text-primary-600 font-medium'
                                      : 'text-neutral-600 hover:bg-neutral-50'
                                  }`}
                                >
                                  <span>{child.label}</span>
                                  <span className="text-xs text-neutral-400">({child.count})</span>
                                </button>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
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
                        onClick={() => handleShapeChange(shape.id)}
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
            </div>
          </aside>

          {/* Product Grid/List */}
          <div className="flex-1">
            {viewMode === 'grid' ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6">
                {sortedProducts.map(product => (
                  <div
                    key={product.id}
                    className="bg-white rounded-xl sm:rounded-2xl overflow-hidden border border-neutral-200 hover:shadow-lg hover:border-neutral-300 transition group relative"
                  >
                    {/* Custom Quote Button */}
                    <button
                      onClick={(e) => {
                        e.preventDefault()
                        e.stopPropagation()
                        openQuoteLightbox()
                      }}
                      className="absolute top-2 right-2 sm:top-3 sm:right-3 z-10 flex items-center gap-1 bg-primary-600 text-white text-[10px] sm:text-xs px-2 py-1 rounded-full hover:bg-primary-700 transition-colors shadow-md"
                      title="Get Custom Quote"
                    >
                      <Sparkles className="h-3 w-3" />
                      <span className="hidden sm:inline">Quote</span>
                    </button>
                    <Link
                      to={`/store/product/${product.id}`}
                      className="block"
                    >
                    <div className="relative aspect-square bg-neutral-50 overflow-hidden p-2 sm:p-4">
                      <img src={getProductDisplayImage(product)} alt={product.name} className="w-full h-full object-cover group-hover:scale-105 transition duration-300" />
                      {product.badge && (
                        <span className="absolute top-2 left-2 sm:top-3 sm:left-3 bg-primary-500 text-white text-[10px] sm:text-xs px-2 sm:px-3 py-0.5 sm:py-1 rounded-full">
                          {product.badge}
                        </span>
                      )}
                    </div>
                    <div className="p-3 sm:p-5">
                      <h3 className="font-semibold text-sm sm:text-base text-neutral-900 mb-1 sm:mb-2 group-hover:text-primary-600 transition line-clamp-2">{product.name}</h3>
                      <div className="flex items-center gap-1 mb-1 sm:mb-2">
                        <Star className="h-3 w-3 sm:h-4 sm:w-4 text-yellow-400 fill-yellow-400" />
                        <span className="text-xs sm:text-sm text-neutral-600">{product.rating} ({product.reviews})</span>
                      </div>
                      <p className="text-xs sm:text-sm text-neutral-500 mb-2 sm:mb-3 line-clamp-2">{product.shortDesc}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-sm sm:text-lg font-bold text-primary-600">From ${product.basePrice}</span>
                        <span className="text-[10px] sm:text-xs text-primary-500 font-medium">{product.turnaround}</span>
                      </div>
                    </div>
                    </Link>
                  </div>
                ))}
              </div>
            ) : (
              <div className="space-y-4">
                {sortedProducts.map(product => (
                  <div
                    key={product.id}
                    className="flex flex-col sm:flex-row bg-white rounded-xl sm:rounded-2xl overflow-hidden border border-neutral-200 hover:shadow-lg hover:border-neutral-300 transition group relative"
                  >
                    {/* Custom Quote Button */}
                    <button
                      onClick={(e) => {
                        e.preventDefault()
                        e.stopPropagation()
                        openQuoteLightbox()
                      }}
                      className="absolute top-2 right-2 sm:top-3 sm:right-3 z-10 flex items-center gap-1 bg-primary-600 text-white text-[10px] sm:text-xs px-2 py-1 rounded-full hover:bg-primary-700 transition-colors shadow-md"
                      title="Get Custom Quote"
                    >
                      <Sparkles className="h-3 w-3" />
                      <span>Quote</span>
                    </button>
                    <Link
                      to={`/store/product/${product.id}`}
                      className="flex flex-col sm:flex-row flex-1"
                    >
                    <div className="relative w-full sm:w-48 h-48 bg-neutral-50 overflow-hidden p-4 flex-shrink-0">
                      <img src={getProductDisplayImage(product)} alt={product.name} className="w-full h-full object-cover group-hover:scale-105 transition duration-300" />
                      {product.badge && (
                        <span className="absolute top-3 left-3 bg-primary-500 text-white text-xs px-2 py-0.5 rounded-full">
                          {product.badge}
                        </span>
                      )}
                    </div>
                    <div className="p-4 sm:p-5 flex-1">
                      <h3 className="font-semibold text-base sm:text-lg text-neutral-900 mb-2 group-hover:text-primary-600 transition">{product.name}</h3>
                      <div className="flex items-center gap-1 mb-2">
                        <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                        <span className="text-sm text-neutral-600">{product.rating}</span>
                        <Link to="/reviews" className="text-sm text-neutral-600 hover:text-primary-600 hover:underline transition-colors">({product.reviews} reviews)</Link>
                      </div>
                      <p className="text-sm sm:text-base text-neutral-600 mb-3 sm:mb-4 line-clamp-2">{product.description}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-lg sm:text-xl font-bold text-primary-600">From ${product.basePrice}</span>
                        <span className="text-xs sm:text-sm text-primary-500 font-medium">{product.turnaround}</span>
                      </div>
                    </div>
                    </Link>
                  </div>
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
      <StoreFooter />
    </div>
    </>
  )
}

export default StorePage
