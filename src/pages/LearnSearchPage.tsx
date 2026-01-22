import { useState, useMemo, useEffect, useCallback, useTransition } from 'react'
import { Link, useSearchParams, useNavigate } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { Search, ArrowRight, ShoppingCart, Leaf, Package, Factory, FileText, Users, Award, ShoppingBag, Boxes, Beaker, BookOpen } from 'lucide-react'
import { useStore } from '../store/StoreContext'
import { LEARN_PAGES } from '../components/LearnNavigation'

// Categories for filtering - dynamically include all categories from LEARN_PAGES
const CATEGORY_MAPPING: Record<string, string> = {
  company: 'Company',
  packaging: 'Packaging',
  materials: 'Materials',
  industries: 'Industries',
  products: 'Products',
  knowledge: 'Knowledge',
  support: 'Support',
  composting: 'Topics',
  biope: 'Materials',
  pcr: 'Materials',
  freeService: 'Free Service',
  options: 'Features',
  solutions: 'Solutions',
  topics: 'Topics',
  caseStudies: 'Case Studies',
  function: 'Function',
  lab: 'Lab',
  usa: 'USA Market',
  spec: 'Spec',
  recyclable: 'Materials',
}

// Generate categories from LEARN_PAGES keys
const CATEGORIES = [
  'All',
  'Company',
  'Materials',
  'Packaging',
  'Features',
  'Industries',
  'Products',
  'Solutions',
  'Topics',
  'Case Studies',
  'Knowledge',
  'Free Service',
  'Function',
  'Lab',
  'USA Market',
  'Spec',
  'Support',
]

// Default keywords and descriptions based on category
const getDefaultKeywords = (name: string, category: string): string[] => {
  const words = name.toLowerCase().split(/\s+/)
  return [...words, category.toLowerCase()]
}

const getDefaultDescription = (name: string, category: string): string => {
  return `Learn about ${name} - ${category} packaging solutions from Achieve Pack`
}

// Convert LEARN_PAGES to flat array for search
const ALL_PAGES = Object.entries(LEARN_PAGES).flatMap(([key, category]) =>
  category.pages.map(page => ({
    name: page.name,
    link: page.link,
    image: page.image,
    category: CATEGORY_MAPPING[key] || category.title,
    description: getDefaultDescription(page.name, category.title),
    keywords: getDefaultKeywords(page.name, category.title),
  }))
)

export default function LearnSearchPage() {
  const [searchParams, setSearchParams] = useSearchParams()
  const navigate = useNavigate()
  const { cartCount } = useStore()
  const [, startTransition] = useTransition()
  
  const initialQuery = searchParams.get('q') || ''
  const initialCategory = searchParams.get('category') || 'All'
  
  const [searchQuery, setSearchQuery] = useState(initialQuery)
  const [selectedCategory, setSelectedCategory] = useState(initialCategory)
  
  // Sync with URL params
  useEffect(() => {
    const q = searchParams.get('q') || ''
    const cat = searchParams.get('category') || 'All'
    setSearchQuery(q)
    setSelectedCategory(cat)
  }, [searchParams])
  
  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category)
    const params: Record<string, string> = {}
    if (searchQuery) params.q = searchQuery
    if (category !== 'All') params.category = category
    setSearchParams(params)
  }
  
  const handleSearch = (query: string) => {
    setSearchQuery(query)
    const params: Record<string, string> = {}
    if (query) params.q = query
    if (selectedCategory !== 'All') params.category = selectedCategory
    setSearchParams(params)
  }

  const handleNavigation = useCallback((to: string) => (e: React.MouseEvent) => {
    e.preventDefault()
    startTransition(() => {
      navigate(to)
    })
  }, [navigate])
  
  const filteredPages = useMemo(() => {
    return ALL_PAGES.filter(page => {
      const matchesCategory = selectedCategory === 'All' || page.category === selectedCategory
      const query = searchQuery.toLowerCase()
      const matchesSearch = !searchQuery || 
        page.name.toLowerCase().includes(query) ||
        page.description.toLowerCase().includes(query) ||
        page.category.toLowerCase().includes(query) ||
        page.keywords.some(kw => kw.toLowerCase().includes(query))
      return matchesCategory && matchesSearch
    })
  }, [searchQuery, selectedCategory])

  return (
    <>
      <Helmet>
        <title>{searchQuery ? `Search: ${searchQuery}` : 'Learn Center'} | Achieve Pack</title>
        <meta name="description" content="Explore our comprehensive knowledge base on sustainable packaging materials, shapes, features, and industry solutions." />
        <link rel="canonical" href="https://achievepack.com/learn" />
      </Helmet>

      <div className="min-h-screen bg-neutral-50">
        {/* Header */}
        <header className="bg-primary-600 text-white fixed top-0 left-0 right-0 z-50">
          <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <a href="/" onClick={handleNavigation('/')} className="flex items-center gap-3 hover:opacity-90 transition cursor-pointer">
                <img src="/ap-logo-white.png" alt="Achieve Pack" className="h-10 w-auto" loading="eager" width="133" height="40" />
                <span className="text-2xl font-bold hidden sm:inline">Learn Center</span>
              </a>
            </div>
            <div className="flex items-center gap-4">
              <Link to="/store" className="flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full hover:bg-white/20 transition">
                <ShoppingCart className="h-5 w-5" />
                <span className="hidden sm:inline">Store</span>
                {cartCount > 0 && (
                  <span className="bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-bold">
                    {cartCount}
                  </span>
                )}
              </Link>
            </div>
          </div>
        </header>

        <div className="h-[72px]"></div>

        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Packaging Knowledge Center
              </h1>
              <p className="text-xl text-primary-100 max-w-2xl mx-auto">
                Everything you need to know about sustainable packaging materials, shapes, and solutions
              </p>
            </div>
          </div>
        </section>

        {/* Filters Section */}
        <section className="bg-white border-b sticky top-16 z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
              {/* Search */}
              <div className="relative w-full md:w-80">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-400" />
                <input
                  type="text"
                  placeholder="Search materials, shapes, features..."
                  value={searchQuery}
                  onChange={(e) => handleSearch(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
              </div>

              {/* Categories */}
              <div className="flex flex-wrap gap-2 justify-center">
                {CATEGORIES.map(category => (
                  <button
                    key={category}
                    onClick={() => handleCategoryChange(category)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                      selectedCategory === category
                        ? 'bg-primary-600 text-white'
                        : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Results Grid */}
        <section className="py-12 md:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Results count */}
            <p className="text-neutral-600 mb-6">
              {searchQuery || selectedCategory !== 'All' ? (
                <>Found <strong>{filteredPages.length}</strong> results</>
              ) : (
                <>Browse all <strong>{filteredPages.length}</strong> pages</>
              )}
            </p>
            
            {filteredPages.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-neutral-500 text-lg">No pages found matching your criteria.</p>
                <button
                  onClick={() => { setSearchQuery(''); setSelectedCategory('All'); setSearchParams({}) }}
                  className="mt-4 px-6 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition"
                >
                  Clear Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredPages.map(page => (
                  <article
                    key={page.link}
                    className="bg-white rounded-xl shadow-sm border border-neutral-200 overflow-hidden hover:shadow-lg transition-shadow group"
                  >
                    {/* Image */}
                    <Link to={page.link} className="block aspect-video bg-neutral-100 overflow-hidden">
                      <img 
                        src={page.image} 
                        alt={page.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        loading="lazy"
                      />
                    </Link>

                    {/* Content */}
                    <div className="p-6">
                      {/* Category */}
                      <span className="inline-block px-3 py-1 bg-primary-100 text-primary-700 text-xs font-medium rounded-full mb-3">
                        {page.category}
                      </span>

                      {/* Title */}
                      <Link to={page.link}>
                        <h2 className="text-xl font-bold text-neutral-900 mb-2 group-hover:text-primary-600 transition-colors line-clamp-2">
                          {page.name}
                        </h2>
                      </Link>

                      {/* Description */}
                      <p className="text-neutral-600 text-sm mb-4 line-clamp-2">
                        {page.description}
                      </p>

                      {/* Read More */}
                      <Link
                        to={page.link}
                        className="inline-flex items-center gap-2 text-primary-600 font-medium hover:gap-3 transition-all"
                      >
                        Learn More
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </article>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-primary-600 text-white py-12">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-primary-100 mb-6">
              Explore our sustainable packaging options. Low MOQ from 100 pieces.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/store"
                className="inline-flex items-center justify-center px-6 py-3 bg-white text-primary-600 font-semibold rounded-lg hover:bg-primary-50 transition-colors"
              >
                Shop Now
              </Link>
              <Link
                to="/"
                className="inline-flex items-center justify-center px-6 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-colors"
              >
                Get Custom Quote
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
