import React, { useState, useMemo, useCallback, useTransition, useEffect } from 'react'
import { Link, useNavigate, useSearchParams } from 'react-router-dom'
import SEO from '../components/SEO'
import { useTranslation } from 'react-i18next'
import { ShoppingCart, Search, Star, Truck, Shield, Clock, Grid3X3, List, ChevronDown, User, Menu, X, Sparkles, AlertTriangle, Mail, DollarSign, Package, Printer, Plane, ChevronLeft, ChevronRight, Leaf, Globe } from 'lucide-react'
import { useStore } from '../store/StoreContext'
import { FEATURED_PRODUCTS, type StoreProduct, type EcoDigitalProduct, type ConventionalProduct, getProductType, getProductSubCategory } from '../store/productData'
import { getProductImage } from '../utils/productImageMapper'
import type { ShapeType } from '../utils/productImageMapper'
import MegaMenu from '../components/MegaMenu'
import Footer from '../components/Footer'
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
      { id: 'conventional-stock-plain', label: 'Conventional Stock', count: 1 },
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
  { id: 'conventional-stock', label: 'Conventional Stock' },
  { id: 'conventional-stock-plain', label: 'Conventional Stock' },
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
  { id: 'Spouted Stand Up Pouch', label: 'Spouted Stand Up' },
  { id: 'Header Bag', label: 'Header Bag' },
  { id: 'Mailer Bag', label: 'Mailer Bag' },
  { id: 'Corrugated Box', label: 'Corrugated Box' },
  { id: 'Tuck Box', label: 'Tuck Box' },
  { id: 'Label & Sticker', label: 'Label & Sticker' },
]

const STORE_FEATURES = [
  {
    id: 'conventional',
    title: 'Conventional Stand Up Pouch',
    description: 'Metallised with Zipper. Get high barrier protection with an optional premium foiling effect.',
    link: '/store/product/conven-sup-met-zip',
    media: [
      { type: 'image', src: '/imgs/store/hero/conventional.png' }
    ],
    benefits: [
      { title: 'Low Cost', desc: 'From USD 140', icon: DollarSign, colors: 'from-green-500 to-emerald-500', bgBorder: 'border-green-100 hover:border-green-300', textGroup: 'group-hover:text-green-600' },
      { title: 'Low MOQ', desc: 'From 100 pcs', icon: Package, colors: 'from-blue-500 to-indigo-500', bgBorder: 'border-blue-100 hover:border-blue-300', textGroup: 'group-hover:text-blue-600' },
      { title: 'High Barrier', desc: 'Metallised material', icon: Shield, colors: 'from-purple-500 to-violet-500', bgBorder: 'border-purple-100 hover:border-purple-300', textGroup: 'group-hover:text-purple-600' },
      { title: 'Highly Attractive', desc: 'Foiling optional', icon: Sparkles, colors: 'from-orange-500 to-amber-500', bgBorder: 'border-orange-100 hover:border-orange-300', textGroup: 'group-hover:text-orange-600' },
      { title: 'High Resolution', desc: 'HP digital print', icon: Printer, colors: 'from-rose-500 to-red-500', bgBorder: 'border-rose-100 hover:border-rose-300', textGroup: 'group-hover:text-rose-600' },
      { title: 'Air Freight', desc: 'Included', icon: Plane, colors: 'from-cyan-500 to-sky-500', bgBorder: 'border-cyan-100 hover:border-cyan-300', textGroup: 'group-hover:text-cyan-600' },
    ]
  },
  {
    id: 'eco',
    title: 'Eco Digital Stand Up Pouch',
    description: 'Premium eco stand-up pouch. Excellent shelf presence with sustainable materials.',
    link: '/store/product/eco-standup',
    media: [
      { type: 'image', src: '/imgs/store/hero/eco-digital.png' }
    ],
    benefits: [
      { title: 'Eco Materials', desc: 'Mono PE or PCR', icon: Leaf, colors: 'from-green-500 to-emerald-500', bgBorder: 'border-green-100 hover:border-green-300', textGroup: 'group-hover:text-green-600' },
      { title: 'Minimum Order', desc: 'From 1000 pcs', icon: Package, colors: 'from-blue-500 to-indigo-500', bgBorder: 'border-blue-100 hover:border-blue-300', textGroup: 'group-hover:text-blue-600' },
      { title: 'Lower Carbon', desc: '30% lower footprint', icon: Globe, colors: 'from-teal-500 to-emerald-500', bgBorder: 'border-teal-100 hover:border-teal-300', textGroup: 'group-hover:text-teal-600' },
      { title: 'Premium Look', desc: 'Excellent shelf presence', icon: Star, colors: 'from-amber-500 to-orange-500', bgBorder: 'border-amber-100 hover:border-amber-300', textGroup: 'group-hover:text-amber-600' },
      { title: 'High Resolution', desc: 'HP digital print', icon: Printer, colors: 'from-rose-500 to-red-500', bgBorder: 'border-rose-100 hover:border-rose-300', textGroup: 'group-hover:text-rose-600' },
      { title: 'Air Freight', desc: 'Included', icon: Plane, colors: 'from-cyan-500 to-sky-500', bgBorder: 'border-cyan-100 hover:border-cyan-300', textGroup: 'group-hover:text-cyan-600' },
    ]
  }
]

const StorePage: React.FC = () => {
  const { t } = useTranslation()
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
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false)
  const [currentFeatureIndex, setCurrentFeatureIndex] = useState(0)

  // Dynamically compute category counts based on FEATURED_PRODUCTS
  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = {
      samples: 0,
      'conventional-digital': 0,
      'eco-stock-plain': 0,
      'conventional-stock-plain': 0,
      'eco-digital': 0,
      'eco-stock-custom-print': 0,
      boxes: 0,
    }
    FEATURED_PRODUCTS.forEach(product => {
      const subCategory = getProductSubCategory(product)
      if (subCategory in counts) {
        counts[subCategory]++
      }
    })
    return counts
  }, [])

  const nextFeature = () => {
    setCurrentFeatureIndex((prev) => (prev + 1) % STORE_FEATURES.length)
  }

  const prevFeature = () => {
    setCurrentFeatureIndex((prev) => (prev - 1 + STORE_FEATURES.length) % STORE_FEATURES.length)
  }

  // Sync state with URL params when they change
  useEffect(() => {
    const newCategory = searchParams.get('category') || 'all'
    const newShape = searchParams.get('shape') || 'all'
    if (newCategory !== selectedCategory) setSelectedCategory(newCategory)
    if (newShape !== selectedShape) setSelectedShape(newShape)
  }, [searchParams])

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
    'spout': 'Spouted Stand Up Pouch',
    'spouted-stand-up': 'Spouted Stand Up Pouch',
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
      <SEO
        title={t('seo.store.title', 'Buy Custom Eco Packaging Online | Low MOQ from 100pcs | Achieve Pack')}
        description={t('seo.store.description', 'Order custom printed compostable & recyclable pouches online. Stand-up pouches, flat bottom bags, side gusset bags from 100 pieces. Free design support. Ships to USA, UK, EU & Asia.')}
        url="https://achievepack.com/store"
        schema={{
          "@context": "https://schema.org",
          "@type": "Store",
          "name": "Achieve Pack Store",
          "description": "Custom printed eco-friendly packaging pouches with low minimum orders. Compostable, recyclable and bio-based options.",
          "url": "https://achievepack.com/store",
          "image": "https://achievepack.com/imgs/store/hero.webp",
          "priceRange": "$$",
          "address": { "@type": "PostalAddress", "addressCountry": "HK" },
          "brand": { "@type": "Brand", "name": "Achieve Pack" },
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Eco-Friendly Packaging",
            "itemListElement": [
              { "@type": "Offer", "itemOffered": { "@type": "Product", "name": "Compostable Stand Up Pouches", "category": "Flexible Packaging" }},
              { "@type": "Offer", "itemOffered": { "@type": "Product", "name": "Recyclable Mono PE Pouches", "category": "Flexible Packaging" }},
              { "@type": "Offer", "itemOffered": { "@type": "Product", "name": "Custom Flat Bottom Bags", "category": "Flexible Packaging" }}
            ]
          }
        }}
      />
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

      <div className="bg-amber-50 border-b border-amber-200">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 text-center">
            <div className="flex items-center gap-2 text-amber-800">
              <AlertTriangle className="h-5 w-5 flex-shrink-0" />
              <span className="font-medium">
                🚧 Payment system is under testing (Sandbox Mode) - No payments can be processed
              </span>
            </div>
            <a
              href="mailto:checkout@achievepack.com?subject=Order%20Inquiry&body=Hi%2C%20I%20would%20like%20to%20place%20an%20order.%20Please%20contact%20me."
              className="inline-flex items-center gap-2 px-4 py-1.5 bg-amber-600 hover:bg-amber-700 text-white text-sm font-semibold rounded-full transition-colors whitespace-nowrap"
            >
              <Mail className="h-4 w-4" />
              Contact Us to Order
            </a>
          </div>
        </div>
      </div>

      {/* Feature Carousel Section */}
      <section className="hidden md:block bg-white py-2.5 border-b border-neutral-200 mb-2 relative overflow-hidden">
        <div className="absolute inset-y-0 left-4 flex items-center z-20 pointer-events-none">
          <button 
            onClick={prevFeature}
            className="flex p-1 rounded-full bg-white/90 backdrop-blur shadow border border-neutral-200 text-neutral-600 hover:text-primary-600 hover:bg-white transition-all transform hover:-translate-x-0.5 pointer-events-auto mx-1"
          >
            <ChevronLeft className="w-3.5 h-3.5" />
          </button>
        </div>
        <div className="absolute inset-y-0 right-4 flex items-center z-20 pointer-events-none">
          <button 
            onClick={nextFeature}
            className="flex p-1 rounded-full bg-white/90 backdrop-blur shadow border border-neutral-200 text-neutral-600 hover:text-primary-600 hover:bg-white transition-all transform hover:translate-x-0.5 pointer-events-auto mx-1"
          >
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="max-w-5xl mx-auto px-10 relative">
          <div className="relative">
            {STORE_FEATURES.map((feature, idx) => (
              <div 
                key={feature.id}
                className={`transition-opacity duration-500 ease-in-out ${idx === currentFeatureIndex ? 'opacity-100 relative z-10' : 'opacity-0 absolute inset-0 z-0 pointer-events-none'}`}
              >
                <div className="flex items-center justify-between gap-6 max-w-4xl mx-auto">
                  {/* Left Group: Info & Buy Button */}
                  <div className="flex-1 flex flex-col justify-center text-left min-w-0">
                    <div className="inline-flex items-center gap-1 text-[9px] font-bold text-primary-600 uppercase tracking-wider mb-0.5">
                      <Sparkles className="w-2.5 h-2.5" />
                      Featured Product
                    </div>
                    <h2 className="text-sm font-bold text-neutral-900 mb-0.5 tracking-tight leading-snug truncate">
                      {feature.title}
                    </h2>
                    <p className="text-[10px] text-neutral-500 mb-1.5 leading-relaxed line-clamp-1">
                      {feature.description}
                    </p>
                    <div className="pointer-events-auto">
                      <Link 
                        to={feature.link}
                        className="inline-flex items-center justify-center bg-primary-600 text-white px-2.5 py-0.5 rounded-full text-[9px] font-semibold hover:bg-primary-700 transition-all shadow-sm hover:shadow-md hover:-translate-y-0.5 transform duration-200"
                      >
                        <ShoppingCart className="w-2.5 h-2.5 mr-1" />
                        Buy Now
                      </Link>
                    </div>
                  </div>
                  
                  {/* Right Group: Media */}
                  <div className="w-[140px] flex-shrink-0">
                    {feature.media.map((mediaItem, mediaIdx) => (
                      <div key={mediaIdx} className="relative aspect-[16/9] rounded-lg overflow-hidden shadow-sm bg-neutral-100 border border-neutral-100 w-full">
                        {mediaItem.type === 'video' ? (
                          <video 
                            src={mediaItem.src} 
                            className={`absolute inset-0 w-full h-full object-cover ${(mediaItem as any).rotate ? 'rotate-180' : ''}`}
                            ref={(el) => { if(el && (mediaItem as any).slow) el.playbackRate = 0.3; }}
                            autoPlay 
                            loop 
                            muted 
                            playsInline
                          />
                        ) : (
                          <img 
                            src={mediaItem.src} 
                            alt={`${feature.title} demo`} 
                            className="absolute inset-0 w-full h-full object-cover"
                          />
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="flex justify-center mt-1.5 gap-1 relative z-20 pointer-events-auto">
            {STORE_FEATURES.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentFeatureIndex(idx)}
                className={`w-1 h-1 rounded-full transition-all ${idx === currentFeatureIndex ? 'bg-primary-600 w-3' : 'bg-neutral-300 hover:bg-primary-400'}`}
                aria-label={`Go to feature ${idx + 1}`}
              />
            ))}
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
                                  <span className="text-xs text-neutral-400">({categoryCounts[child.id] ?? child.count})</span>
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
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4 sm:gap-6">
                {sortedProducts.map(product => (
                  <div
                    key={product.id}
                    className="product-card bg-white rounded-xl sm:rounded-2xl overflow-hidden border border-neutral-200 hover:shadow-lg hover:border-neutral-300 transition group relative"
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
                    className="product-card flex flex-col sm:flex-row bg-white rounded-xl sm:rounded-2xl overflow-hidden border border-neutral-200 hover:shadow-lg hover:border-neutral-300 transition group relative"
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
      <Footer />
    </div>
    </>
  )
}

export default StorePage
