import { useState, useCallback } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { ShoppingCart, User, Globe, Menu, X, Gift, Search, ChevronDown, ChevronRight } from 'lucide-react'
import { LEARN_PAGES } from './LearnNavigation'
import { useStore } from '../store/StoreContext'
import MegaMenu, { RightNavMenu } from './MegaMenu'

interface SiteHeaderProps {
  showLanguageSelector?: boolean
  hideLearnBlog?: boolean
}

// Mobile Learn Section - Optimized for 100+ SEO pages
function MobileLearnSection({ setIsMenuOpen }: { setIsMenuOpen: (open: boolean) => void }) {
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null)
  const [searchQuery, setSearchQuery] = useState('')
  const navigate = useNavigate()
  
  // Get total page count
  const totalPages = Object.values(LEARN_PAGES).reduce((sum, cat) => sum + cat.pages.length, 0)
  
  // Filter pages by search
  const filteredPages = searchQuery.trim()
    ? Object.entries(LEARN_PAGES).flatMap(([key, cat]) => 
        cat.pages.filter(p => 
          p.name.toLowerCase().includes(searchQuery.toLowerCase())
        ).map(p => ({ ...p, category: cat.title }))
      ).slice(0, 8)
    : []
  
  const handleSearch = () => {
    if (searchQuery.trim()) {
      setIsMenuOpen(false)
      navigate(`/learn?q=${encodeURIComponent(searchQuery)}`)
    }
  }
  
  // Popular quick links
  const popularLinks = [
    { name: 'Compostable', link: '/materials/compostable' },
    { name: 'Coffee Bags', link: '/products/compostable-coffee-bags' },
    { name: 'Stand Up', link: '/packaging/stand-up-pouches' },
    { name: 'Recyclable', link: '/materials/recyclable-mono-pe' },
    { name: 'Bio-PE', link: '/materials/bio-pe' },
  ]
  
  return (
    <div className="border-t border-neutral-100 pt-3">
      {/* Header with page count */}
      <div className="flex items-center justify-between mb-2">
        <p className="text-xs font-bold text-primary-600 uppercase flex items-center gap-1">
          📚 Learn Center
        </p>
        <span className="text-[10px] text-neutral-400 bg-neutral-100 px-1.5 py-0.5 rounded">
          {totalPages} articles
        </span>
      </div>
      
      {/* Search Box */}
      <div className="relative mb-2">
        <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 h-4 w-4 text-neutral-400" />
        <input
          type="text"
          placeholder="Search topics..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
          className="w-full pl-8 pr-3 py-2 text-sm border border-neutral-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
        />
      </div>
      
      {/* Search Results */}
      {searchQuery.trim() && filteredPages.length > 0 && (
        <div className="mb-2 bg-white border border-neutral-200 rounded-lg shadow-sm max-h-48 overflow-y-auto">
          {filteredPages.map((page) => (
            <Link
              key={page.link}
              to={page.link}
              onClick={() => setIsMenuOpen(false)}
              className="flex items-center justify-between px-3 py-2 text-sm hover:bg-primary-50 border-b border-neutral-100 last:border-0"
            >
              <span className="text-neutral-800 truncate">{page.name}</span>
              <span className="text-[10px] text-neutral-400 ml-2 flex-shrink-0">{page.category}</span>
            </Link>
          ))}
          {filteredPages.length === 8 && (
            <button
              onClick={handleSearch}
              className="w-full px-3 py-2 text-xs text-primary-600 font-medium hover:bg-primary-50 text-center"
            >
              View all results →
            </button>
          )}
        </div>
      )}
      
      {/* Popular Quick Links */}
      {!searchQuery.trim() && (
        <div className="flex gap-1.5 overflow-x-auto pb-2 -mx-4 px-4 scrollbar-hide mb-2">
          {popularLinks.map((item) => (
            <Link
              key={item.link}
              to={item.link}
              onClick={() => setIsMenuOpen(false)}
              className="flex-shrink-0 px-2.5 py-1 text-xs bg-primary-50 text-primary-700 rounded-full whitespace-nowrap"
            >
              {item.name}
            </Link>
          ))}
        </div>
      )}
      
      {/* Category Accordion */}
      {!searchQuery.trim() && (
        <div className="space-y-0.5 max-h-64 overflow-y-auto">
          {Object.entries(LEARN_PAGES).map(([key, category]) => (
            <div key={key} className="border border-neutral-100 rounded-lg overflow-hidden">
              <button
                onClick={() => setExpandedCategory(expandedCategory === key ? null : key)}
                className={`w-full flex items-center justify-between px-3 py-2 text-sm font-medium transition-colors ${
                  expandedCategory === key ? 'bg-primary-50 text-primary-700' : 'bg-white text-neutral-700'
                }`}
              >
                <span className="flex items-center gap-2">
                  {category.icon}
                  {category.title}
                </span>
                <span className="flex items-center gap-1">
                  <span className="text-[10px] text-neutral-400">{category.pages.length}</span>
                  <ChevronDown className={`h-4 w-4 transition-transform ${expandedCategory === key ? 'rotate-180' : ''}`} />
                </span>
              </button>
              
              {/* Expanded Pages */}
              {expandedCategory === key && (
                <div className="bg-neutral-50 border-t border-neutral-100">
                  {category.pages.map((page) => (
                    <Link
                      key={page.link}
                      to={page.link}
                      onClick={() => setIsMenuOpen(false)}
                      className="flex items-center gap-2 px-3 py-1.5 text-sm text-neutral-600 hover:text-primary-600 hover:bg-primary-50"
                    >
                      <ChevronRight className="h-3 w-3 text-neutral-400" />
                      <span className="truncate">{page.name}</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
      
      {/* View All Link */}
      <Link
        to="/learn"
        onClick={() => setIsMenuOpen(false)}
        className="block mt-2 py-2 text-sm text-primary-600 font-medium text-center bg-primary-50 rounded-lg"
      >
        Browse All {totalPages} Articles →
      </Link>
    </div>
  )
}

export default function SiteHeader({ showLanguageSelector = false, hideLearnBlog = false }: SiteHeaderProps) {
  const { t, i18n } = useTranslation()
  const { cartCount, setIsCartOpen } = useStore()
  const navigate = useNavigate()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  const changeLanguage = useCallback((lng: string) => {
    i18n.changeLanguage(lng)
    setIsLangMenuOpen(false)
  }, [i18n])

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-neutral-100' : 'bg-white border-b border-neutral-100'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Top Row: Icons only on right */}
          <div className="hidden lg:flex items-center justify-end h-10 pt-2">
            <div className="flex items-center space-x-2">
              <button
                onClick={() => {
                  if (cartCount === 0) {
                    navigate('/store')
                  } else {
                    setIsCartOpen(true)
                  }
                }}
                className="relative w-8 h-8 rounded-full bg-primary-600 flex items-center justify-center hover:bg-primary-700 transition-colors"
              >
                <ShoppingCart className="h-4 w-4 text-white" />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 text-white text-[10px] font-bold rounded-full flex items-center justify-center">
                    {cartCount > 99 ? '99+' : cartCount}
                  </span>
                )}
              </button>
              <Link
                to="/signin"
                className="w-8 h-8 rounded-full bg-primary-600 flex items-center justify-center hover:bg-primary-700 transition-colors"
              >
                <User className="h-4 w-4 text-white" />
              </Link>
              {showLanguageSelector && (
                <div className="relative">
                  <button
                    onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
                    className="w-8 h-8 rounded-full bg-primary-600 flex items-center justify-center hover:bg-primary-700 transition-colors"
                  >
                    <Globe className="h-4 w-4 text-white" />
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
              )}
            </div>
          </div>
          
          {/* Bottom Row: Left menus + LOGO center + Right menus */}
          <div className="hidden lg:flex items-center justify-between h-14">
            {/* Left Navigation: SHAPE | CUSTOM | STOCK */}
            <MegaMenu hideLearnBlog={hideLearnBlog} />
            
            {/* Center Logo - Bigger */}
            <div className="absolute left-1/2 -translate-x-1/2">
              <Link to="/" className="flex items-center">
                <img src="/ap-logo.svg" alt="Achieve Pack Logo" className="h-12 w-auto" loading="eager" decoding="async" width="160" height="48" />
              </Link>
            </div>
            
            {/* Right Navigation: LEARN | BLOG | FREE */}
            {!hideLearnBlog && <RightNavMenu />}
          </div>
          
          {/* Mobile Layout */}
          <div className="lg:hidden flex items-center justify-between h-16">
            <Link to="/" className="flex items-center">
              <img src="/ap-logo.svg" alt="Achieve Pack Logo" className="h-10 w-auto" loading="eager" decoding="async" width="120" height="40" />
            </Link>
            <div className="flex items-center gap-2">
              <Link
                to="/store"
                className="w-10 h-10 rounded-full bg-primary-600 flex items-center justify-center hover:bg-primary-700 transition-colors"
              >
                <ShoppingCart className="h-5 w-5 text-white" />
              </Link>
              {/* Glowing FREE Button - Links to /free page */}
              <Link
                to="/free"
                className="relative w-10 h-10 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center hover:from-green-600 hover:to-emerald-600 transition-all shadow-lg animate-pulse"
                style={{ boxShadow: '0 0 15px rgba(16, 185, 129, 0.6)' }}
              >
                <Gift className="h-5 w-5 text-white" />
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-yellow-400 text-[8px] font-bold text-yellow-900 rounded-full flex items-center justify-center animate-bounce">!</span>
              </Link>
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-neutral-700 hover:text-primary-500 transition-colors"
                aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu - Complete with Learn & Blog */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white border-t border-neutral-200 max-h-[80vh] overflow-y-auto">
            <div className="px-4 py-4 space-y-3">
              {/* Shop Section */}
              <Link to="/store" onClick={() => setIsMenuOpen(false)} className="block w-full text-left text-base font-semibold text-neutral-900 py-2">
                🛒 Shop All
              </Link>
              <div className="border-t border-neutral-100 pt-3">
                <p className="text-xs font-bold text-primary-600 uppercase mb-2">Pouch Shapes</p>
                <div className="grid grid-cols-2 gap-1">
                  <Link to="/store?shape=stand-up" onClick={() => setIsMenuOpen(false)} className="block py-2 text-sm text-neutral-700">Stand Up Pouch</Link>
                  <Link to="/store?shape=flat-bottom" onClick={() => setIsMenuOpen(false)} className="block py-2 text-sm text-neutral-700">Box Bottom Pouch</Link>
                  <Link to="/store?shape=side-gusset" onClick={() => setIsMenuOpen(false)} className="block py-2 text-sm text-neutral-700">Side Gusset Pouch</Link>
                  <Link to="/store?shape=3-side-seal" onClick={() => setIsMenuOpen(false)} className="block py-2 text-sm text-neutral-700">3 Side Seal Pouch</Link>
                </div>
              </div>
              
              {/* Learn Section - Mobile Optimized with Search & Accordion */}
              {!hideLearnBlog && (
                <MobileLearnSection setIsMenuOpen={setIsMenuOpen} />
              )}

              {/* Blog Section */}
              {!hideLearnBlog && (
                <div className="border-t border-neutral-100 pt-3">
                  <p className="text-xs font-bold text-primary-600 uppercase mb-2 flex items-center gap-1">
                    📝 Blog
                  </p>
                  <div className="grid grid-cols-2 gap-1">
                    <Link to="/blog" onClick={() => setIsMenuOpen(false)} className="block py-1 text-sm text-neutral-700">All Articles</Link>
                    <Link to="/blog?category=Packaging" onClick={() => setIsMenuOpen(false)} className="block py-1 text-sm text-neutral-700">Packaging Tips</Link>
                    <Link to="/blog?category=Sustainability" onClick={() => setIsMenuOpen(false)} className="block py-1 text-sm text-neutral-700">Sustainability</Link>
                    <Link to="/blog?category=Industry" onClick={() => setIsMenuOpen(false)} className="block py-1 text-sm text-neutral-700">Industry News</Link>
                  </div>
                </div>
              )}

              {/* FREE Services Section */}
              {!hideLearnBlog && (
                <div className="border-t border-neutral-100 pt-3">
                  <p className="text-xs font-bold text-green-600 uppercase mb-2 flex items-center gap-1">
                    <Gift className="h-3 w-3" /> FREE Services
                  </p>
                  <div className="grid grid-cols-2 gap-1">
                    <Link to="/free-service/packaging-design-consultation" onClick={() => setIsMenuOpen(false)} className="block py-1.5 text-sm text-neutral-700">
                      🎨 Free Design
                    </Link>
                    <Link to="/free-service/website-upgrade" onClick={() => setIsMenuOpen(false)} className="block py-1.5 text-sm text-neutral-700">
                      🌐 Free Website
                    </Link>
                    <Link to="/free-service/customer-center" onClick={() => setIsMenuOpen(false)} className="block py-1.5 text-sm text-neutral-700">
                      📊 Free MGT Tool
                    </Link>
                    <Link to="/free-service/packaging-mockup" onClick={() => setIsMenuOpen(false)} className="block py-1.5 text-sm text-neutral-700">
                      📦 Free Mockup
                    </Link>
                  </div>
                  <Link to="/free" onClick={() => setIsMenuOpen(false)} className="block py-2 mt-1 text-sm text-green-600 font-medium">
                    Other Free Services →
                  </Link>
                </div>
              )}

              {/* Other Links */}
              <div className="border-t border-neutral-100 pt-3">
                <Link to="/signin" onClick={() => setIsMenuOpen(false)} className="block py-2 text-neutral-700 font-medium">Customer Center</Link>
              </div>

              {/* Meet Button */}
              <a
                href="https://calendly.com/30-min-free-packaging-consultancy"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMenuOpen(false)}
                className="block w-full bg-gradient-to-r from-green-500 to-emerald-500 text-white px-4 py-3 rounded-lg font-semibold text-center shadow-md hover:from-green-600 hover:to-emerald-600 transition-all"
              >
                📅 Meet With Us
              </a>
              
              {/* Mobile Language Options - Only show if enabled */}
              {showLanguageSelector && (
                <div className="py-2 border-t border-neutral-100 my-2">
                  <div className="text-xs text-neutral-500 font-semibold mb-2 uppercase px-1">Language</div>
                  <div className="grid grid-cols-4 gap-2">
                    <button onClick={() => changeLanguage('en')} className={`text-xs py-1 px-2 rounded ${i18n.language === 'en' ? 'bg-primary-50 text-primary-600' : 'text-neutral-600'}`}>EN</button>
                    <button onClick={() => changeLanguage('fr')} className={`text-xs py-1 px-2 rounded ${i18n.language === 'fr' ? 'bg-primary-50 text-primary-600' : 'text-neutral-600'}`}>FR</button>
                    <button onClick={() => changeLanguage('es')} className={`text-xs py-1 px-2 rounded ${i18n.language === 'es' ? 'bg-primary-50 text-primary-600' : 'text-neutral-600'}`}>ES</button>
                    <button onClick={() => changeLanguage('zh-TW')} className={`text-xs py-1 px-2 rounded ${i18n.language === 'zh-TW' ? 'bg-primary-50 text-primary-600' : 'text-neutral-600'}`}>中文</button>
                  </div>
                </div>
              )}


            </div>
          </div>
        )}
      </nav>

      {/* Spacer for fixed header */}
      <div className="h-16 lg:h-[88px]"></div>
    </>
  )
}
