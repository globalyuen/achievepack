import React, { useState, useMemo, useCallback, useTransition, useEffect } from 'react'
import { Link, useNavigate, useSearchParams } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
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
  { id: 'Rollstock', label: 'Rollstock' },
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

const getProductClassification = (product: StoreProduct): 'compostable' | 'recyclable' | 'conventional' => {
  const name = product.name.toLowerCase()
  const desc = (product.description || '').toLowerCase()
  const mat = ('material' in product ? (product.material || '') : '').toLowerCase()
  const cat = (product.category || '').toLowerCase()
  
  if (cat.includes('conventional') || name.includes('(conventional') || product.id.includes('conventional')) {
    if (product.id === 'side-gusset-bag-and-tray-conventional') {
      return 'recyclable'
    }
    return 'conventional'
  }
  
  if (cat.includes('boxes') || name.includes('tuck box') || name.includes('corrugated box')) {
    return 'conventional'
  }
  
  const text = `${name} ${desc} ${mat} ${cat}`
  
  if (
    text.includes('compostable') || 
    text.includes('biodegradable') || 
    text.includes('pla') || 
    text.includes('paper wrap') || 
    text.includes('honeycomb') || 
    text.includes('pbat')
  ) {
    return 'compostable'
  }
  
  if (
    text.includes('recyclable') || 
    text.includes('mono-pp') || 
    text.includes('mono pp') || 
    text.includes('mono-pe') || 
    text.includes('mono pe') || 
    text.includes('recycling') || 
    text.includes('kraft tin tie')
  ) {
    return 'recyclable'
  }
  
  return 'conventional'
}

const SHAPE_ITEMS = [
  {
    id: 'Rollstock',
    label: 'Rollstock',
    icon: (
      <svg viewBox="0 0 100 80" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="w-14 h-11">
        <ellipse cx="75" cy="40" rx="4" ry="10" />
        <ellipse cx="75" cy="40" rx="9" ry="20" />
        <ellipse cx="75" cy="40" rx="14" ry="30" />
        <path d="M75 10 C 50 10, 36 14, 26 34 C 20 48, 18 64, 8 64 C 5 64, 3 60, 5 56 C 7 52, 11 52, 14 56" />
        <path d="M75 70 L52 70 C 46 70, 43 66, 41 60" />
      </svg>
    )
  },
  {
    id: '3 Side Seal Pouch',
    label: '3 side seal',
    icon: (
      <svg viewBox="0 0 100 80" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="w-14 h-11">
        <path d="M32 15 H68 V26 L65 28 L68 30 V64 C68 68 65 71 61 71 H39 C35 71 32 68 32 64 V30 L35 28 L32 26 Z" />
        <line x1="32" y1="20" x2="68" y2="20" strokeWidth="1" />
        <path d="M37 15 V66 H63 V15" strokeWidth="1" strokeDasharray="2 2" />
      </svg>
    )
  },
  {
    id: 'Center Seal Pouch',
    label: 'Center seal',
    icon: (
      <svg viewBox="0 0 100 80" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="w-14 h-11">
        <path d="M30 15 H70" strokeWidth="3" />
        <path d="M30 67 H70" strokeWidth="3" />
        <path d="M30 15 C21 28 21 54 30 67" />
        <path d="M70 15 C79 28 79 54 70 67" />
        <path d="M47 15 V67 M53 15 V67" strokeWidth="1.2" />
        <path d="M47 25 L53 30 M47 40 L53 45 M47 55 L53 60" strokeWidth="1" />
      </svg>
    )
  },
  {
    id: 'Stand Up Pouch / Doypack',
    label: 'Stand Up Pouch',
    icon: (
      <svg viewBox="0 0 100 80" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="w-14 h-11">
        <path d="M32 15 H68 V26 L66 28 L68 30 V58 C68 65 61 69 50 69 C39 69 32 65 32 58 V30 L34 28 L32 26 Z" />
        <line x1="32" y1="21" x2="68" y2="21" strokeWidth="1" />
        <path d="M32 58 C38 62 62 62 68 58" strokeWidth="1.8" />
        <path d="M35 59 L38 65 M65 59 L62 65" strokeWidth="1" />
      </svg>
    )
  },
  {
    id: 'Flat Squared Bottom Pouch',
    label: 'Flat Bottom Pouch',
    icon: (
      <svg viewBox="0 0 100 80" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="w-14 h-11">
        <path d="M32 18 H54 V70 H32 Z" />
        <path d="M54 18 L68 23 V64 L54 70" />
        <path d="M32 18 L54 18 L68 23" strokeWidth="3" />
        <path d="M61 20.5 V67" strokeWidth="1" strokeDasharray="3 3" />
        <path d="M32 70 L54 70 L68 64" />
      </svg>
    )
  },
  {
    id: 'Side Gusset Pouch',
    label: 'Side Gusset Pouch',
    icon: (
      <svg viewBox="0 0 100 80" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="w-14 h-11">
        <path d="M35 15 H65 V20 L61 25 V70 H39 V25 L35 20 Z" />
        <path d="M44 25 V70" strokeWidth="1.5" />
        <path d="M56 25 V70" strokeWidth="1.5" strokeDasharray="2 2" />
        <line x1="35" y1="20" x2="65" y2="20" strokeWidth="1.5" />
      </svg>
    )
  },
  {
    id: 'Quad Seal Pouch',
    label: 'Quad Seal Pouch',
    icon: (
      <svg viewBox="0 0 100 80" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="w-14 h-11">
        <path d="M32 18 H52 V68 H32 Z" />
        <path d="M52 18 L66 22 V63 L52 68" />
        <path d="M35 18 V68 M49 18 V68 M55 19 V66 M63 21 V64" strokeWidth="1.2" />
        <path d="M32 18 H52 L66 22" strokeWidth="2.2" />
      </svg>
    )
  },
  {
    id: 'Box Bottom Pouch',
    label: 'Box Bottom Pouch',
    icon: (
      <svg viewBox="0 0 100 80" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="w-14 h-11">
        <path d="M32 18 H52 V68 H32 Z" />
        <path d="M52 18 L66 21 V63 L52 68" />
        <path d="M32 68 L42 72 L52 68 L66 63" />
        <path d="M42 72 V68" strokeWidth="1" strokeDasharray="2 2" />
        <path d="M32 18 L52 18 L66 21" strokeWidth="3" />
        <path d="M59 19.5 V65" strokeWidth="1" />
      </svg>
    )
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
      const nextShape = selectedShape === shapeId ? 'all' : shapeId
      setSelectedShape(nextShape)
      const newParams = new URLSearchParams(searchParams)
      if (nextShape === 'all') {
        newParams.delete('shape')
      } else {
        newParams.set('shape', nextShape)
      }
      setSearchParams(newParams, { replace: true })
    })
  }, [selectedShape, searchParams, setSearchParams])

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
    'rollstock': 'Rollstock',
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
        matchesCategory = productSubCategory === 'eco-stock-plain'
      } else if (selectedCategory === 'eco-stock-custom-print') {
        // Eco Stock Custom Print
        matchesCategory = productSubCategory === 'eco-stock-custom-print'
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

  // Insert Rollstock product into display list if appropriate
  const displayProducts = useMemo(() => {
    const rollstockItem: StoreProduct = {
      id: 'rollstock-custom',
      name: 'Pre-Zippered Rollstock (Continuous Film)',
      shortDesc: 'Automated FFS packaging film with pre-applied zippers. Recyclable or certified compostable materials.',
      description: 'Premium continuous film rollstock engineered for automated Form-Fill-Seal (FFS) high-speed lines. Available in single-stream recyclable Mono-PE, Bio-PE, or TUV certified compostable kraft structures. Optional pre-applied inline resealable zipper closures.',
      basePrice: 0.08,
      turnaround: '15 - 20 Days',
      rating: 4.9,
      reviews: 48,
      images: ['/imgs/pouch-shape/ads/a_achieve_pack_rollstock_closeup_5394787.webp'],
      category: 'eco-digital',
      shape: 'Rollstock',
      inquiryOnly: true,
      badge: 'Custom Roll'
    } as any;

    if (selectedShape === 'Rollstock') {
      return [rollstockItem];
    }
    
    if (selectedShape === 'all' && searchQuery === '') {
      return [...sortedProducts, rollstockItem];
    }

    return sortedProducts;
  }, [sortedProducts, selectedShape, searchQuery]);

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
    <div className="min-h-screen bg-neutral-50 flex flex-col lg:h-screen lg:overflow-hidden">
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

      {/* Premium Free Air Shipping Announcement Banner */}
      <div className="bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-750 text-white border-b border-emerald-800 shadow-sm relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 py-2 sm:py-2.5">
          <div className="flex items-center justify-center gap-2 text-center text-[10px] sm:text-xs font-semibold tracking-wide uppercase">
            <Plane className="h-3.5 w-3.5 animate-bounce text-emerald-100 flex-shrink-0" />
            <span>
              ✈️ Special Offer: For all <span className="underline decoration-wavy decoration-emerald-300 font-extrabold text-amber-300">stock packaging</span> orders above <span className="bg-emerald-900/50 px-2 py-0.5 rounded-full font-bold text-amber-200">USD $200</span> enjoy <span className="text-amber-300 font-extrabold">Free Air Shipping!</span>
            </span>
            <Sparkles className="h-3 w-3 text-amber-300 hidden sm:inline" />
          </div>
        </div>
      </div>

      {/* Interactive Shape Filter Grid - Replacing the Feature Carousel */}
      <section className="hidden md:block bg-white border-b border-neutral-200 py-6 mb-4 relative overflow-hidden select-none">
        <div className="max-w-7xl mx-auto px-4">
          <div className="border border-neutral-200 rounded-xl overflow-hidden bg-white shadow-sm grid grid-cols-8 divide-x divide-neutral-200">
            {SHAPE_ITEMS.map((item) => {
              const isActive = selectedShape === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleShapeChange(item.id)}
                  className={`flex flex-col items-center justify-between py-5 px-3 transition-all duration-200 group cursor-pointer relative overflow-hidden ${
                    isActive 
                      ? 'bg-gradient-to-b from-primary-50/80 to-primary-100/40 text-primary-700 font-black shadow-inner' 
                      : 'hover:bg-neutral-50/80 text-neutral-800 hover:text-primary-600 hover:-translate-y-0.5 transform duration-150'
                  }`}
                >
                  <span className={`text-[11px] font-black uppercase text-center tracking-tight mb-4 min-h-[32px] flex items-center justify-center transition-colors duration-150 ${isActive ? 'text-primary-700 animate-pulse' : 'text-neutral-800 group-hover:text-primary-600'}`}>
                    {item.label}
                  </span>
                  
                  <div className={`w-14 h-11 flex items-center justify-center transition-all duration-200 group-hover:scale-110 ${isActive ? 'text-primary-600' : 'text-neutral-500 group-hover:text-neutral-800'}`}>
                    {item.icon}
                  </div>
                  
                  {/* Premium bottom active highlight indicator */}
                  {isActive && (
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-primary-600 rounded-t-full" />
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Mobile Scrollable Shape Strip */}
      <section className="block md:hidden bg-white border-b border-neutral-200 py-4 mb-2 select-none overflow-x-auto no-scrollbar scroll-smooth snap-x">
        <div className="flex px-4 gap-3">
          {SHAPE_ITEMS.map((item) => {
            const isActive = selectedShape === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleShapeChange(item.id)}
                className={`flex-shrink-0 flex flex-col items-center justify-between py-3.5 px-3 w-[105px] border rounded-xl transition-all duration-200 snap-center relative overflow-hidden ${
                  isActive 
                    ? 'bg-gradient-to-b from-primary-50 to-primary-100/30 border-primary-500 text-primary-700 font-bold shadow-sm' 
                    : 'bg-white border-neutral-200 text-neutral-600 active:bg-neutral-50'
                }`}
              >
                <span className="text-[9px] font-black uppercase text-center tracking-tight mb-2.5 h-[24px] flex items-center justify-center line-clamp-2">
                  {item.label}
                </span>
                
                <div className={`w-10 h-10 flex items-center justify-center transition-transform duration-200 ${isActive ? 'text-primary-600' : 'text-neutral-400'}`}>
                  {item.icon}
                </div>
                
                {/* Mobile bottom active indicator */}
                {isActive && (
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-primary-500" />
                )}
              </button>
            );
          })}
        </div>
      </section>

      <main className="max-w-7xl w-full mx-auto px-4 py-6 flex-1 flex flex-col min-h-0 lg:overflow-hidden">
        {/* Search Result Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 flex-shrink-0">
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

        <div className="flex gap-8 flex-1 min-h-0 lg:overflow-hidden items-stretch">
          {/* Sidebar Filters - Sticky */}
          <aside className="hidden lg:block w-72 flex-shrink-0 lg:h-full lg:overflow-y-auto pr-2 custom-scrollbar pb-6">
            <div className="space-y-4">
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
          <div className="flex-1 lg:h-full lg:overflow-y-auto pr-2 custom-scrollbar pb-16 flex flex-col">
            <div className="flex-1">

            {viewMode === 'grid' ? (
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4 sm:gap-6">
                {displayProducts.map(product => (
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
                      to={product.id === 'rollstock-custom' ? '/quotes/rollstock' : `/store/product/${product.id}`}
                      className="block"
                    >
                    <div className="relative aspect-square bg-neutral-50 overflow-hidden p-2 sm:p-4">
                      {/* Triangle Ribbon Badge */}
                      <div className="absolute top-0 left-0 w-14 h-14 overflow-hidden z-10 pointer-events-none">
                        <div className={`absolute top-[6px] left-[-24px] w-[75px] h-[18px] text-white text-[8px] font-extrabold flex items-center justify-center -rotate-45 shadow-sm uppercase tracking-wider ${
                          getProductClassification(product) === 'conventional' ? 'bg-neutral-950' : 'bg-emerald-600'
                        }`}>
                          {getProductClassification(product) === 'compostable' ? 'ECO' : getProductClassification(product) === 'recyclable' ? 'RECY' : 'CONV'}
                        </div>
                      </div>

                      <img src={getProductDisplayImage(product)} alt={product.name} className="w-full h-full object-cover group-hover:scale-105 transition duration-300" />
                      {product.badge && (
                        <span className="absolute bottom-2 left-2 sm:bottom-3 sm:left-3 z-10 bg-primary-500 text-white text-[10px] sm:text-xs px-2 sm:px-3 py-0.5 sm:py-1 rounded-full shadow-sm">
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
                        {product.inquiryOnly ? (
                          <span className="text-sm sm:text-lg font-bold text-neutral-500">Inquiry Only</span>
                        ) : (
                          <span className="text-sm sm:text-lg font-bold text-primary-600">From ${product.basePrice}</span>
                        )}
                        <span className="text-[10px] sm:text-xs text-primary-500 font-medium">{product.turnaround}</span>
                      </div>
                    </div>
                    </Link>
                  </div>
                ))}
              </div>
            ) : (
              <div className="space-y-4">
                {displayProducts.map(product => (
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
                      to={product.id === 'rollstock-custom' ? '/quotes/rollstock' : `/store/product/${product.id}`}
                      className="flex flex-col sm:flex-row flex-1"
                    >
                    <div className="relative w-full sm:w-48 h-48 bg-neutral-50 overflow-hidden p-4 flex-shrink-0">
                      {/* Triangle Ribbon Badge */}
                      <div className="absolute top-0 left-0 w-14 h-14 overflow-hidden z-10 pointer-events-none">
                        <div className={`absolute top-[6px] left-[-24px] w-[75px] h-[18px] text-white text-[8px] font-extrabold flex items-center justify-center -rotate-45 shadow-sm uppercase tracking-wider ${
                          getProductClassification(product) === 'conventional' ? 'bg-neutral-950' : 'bg-emerald-600'
                        }`}>
                          {getProductClassification(product) === 'compostable' ? 'ECO' : getProductClassification(product) === 'recyclable' ? 'RECY' : 'CONV'}
                        </div>
                      </div>

                      <img src={getProductDisplayImage(product)} alt={product.name} className="w-full h-full object-cover group-hover:scale-105 transition duration-300" />
                      {product.badge && (
                        <span className="absolute bottom-2 left-2 sm:bottom-3 sm:left-3 z-10 bg-primary-500 text-white text-xs px-2 py-0.5 rounded-full shadow-sm">
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
                        {product.inquiryOnly ? (
                          <span className="text-lg sm:text-xl font-bold text-neutral-500">Inquiry Only</span>
                        ) : (
                          <span className="text-lg sm:text-xl font-bold text-primary-600">From ${product.basePrice}</span>
                        )}
                        <span className="text-xs sm:text-sm text-primary-500 font-medium">{product.turnaround}</span>
                      </div>
                    </div>
                    </Link>
                  </div>
                ))}
              </div>
            )}

            {displayProducts.length === 0 && (
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

            {/* Render Footer inside scrollable product pane for desktop only */}
            <div className="hidden lg:block mt-16 border-t border-neutral-200 pt-8 w-full flex-shrink-0">
              <Footer />
            </div>
          </div>
        </div>
      </main>

      {/* Footer for mobile only */}
      <div className="lg:hidden">
        <Footer />
      </div>
    </div>
    </>
  )
}

export default StorePage
