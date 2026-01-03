import { useState, useCallback } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { ShoppingCart, User, Globe, Menu, X } from 'lucide-react'
import { useStore } from '../store/StoreContext'
import MegaMenu from './MegaMenu'

interface SiteHeaderProps {
  showLanguageSelector?: boolean
  hideLearnBlog?: boolean
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
          <div className="flex items-center justify-between h-16">
            {/* Full Width Navigation: Left Menus | Logo | Right Menus + Actions */}
            <MegaMenu hideLearnBlog={hideLearnBlog} />

            {/* Center Logo - Absolute positioned */}
            <div className="hidden lg:flex items-center justify-center absolute left-1/2 -translate-x-1/2">
              <Link to="/" className="flex items-center">
                <img src="/ap-logo.svg" alt="Achieve Pack Logo" className="h-14 w-auto" loading="eager" decoding="async" width="180" height="56" />
              </Link>
            </div>

            {/* Mobile Logo */}
            <div className="lg:hidden flex items-center">
              <Link to="/" className="flex items-center">
                <img src="/ap-logo.svg" alt="Achieve Pack Logo" className="h-10 w-auto" loading="eager" decoding="async" width="120" height="40" />
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
              {showLanguageSelector && (
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
              )}
            </div>

            {/* Mobile Menu Button with Store Icon */}
            <div className="lg:hidden flex items-center gap-2">
              <Link
                to="/store"
                className="w-10 h-10 rounded-full bg-primary-600 flex items-center justify-center hover:bg-primary-700 transition-colors"
              >
                <ShoppingCart className="h-5 w-5 text-white" />
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
              
              {/* Learn Section - Expandable Categories */}
              {!hideLearnBlog && (
                <div className="border-t border-neutral-100 pt-3">
                  <p className="text-xs font-bold text-primary-600 uppercase mb-2 flex items-center gap-1">
                    📚 Learn Center
                  </p>
                  <div className="space-y-2">
                    <div>
                      <p className="text-xs font-medium text-neutral-500 uppercase mb-1">Materials</p>
                      <div className="grid grid-cols-2 gap-1">
                        <Link to="/materials/compostable" onClick={() => setIsMenuOpen(false)} className="block py-1 text-sm text-neutral-700">Compostable</Link>
                        <Link to="/materials/home-compostable" onClick={() => setIsMenuOpen(false)} className="block py-1 text-sm text-neutral-700">Home Compostable</Link>
                        <Link to="/materials/recyclable-mono-pe" onClick={() => setIsMenuOpen(false)} className="block py-1 text-sm text-neutral-700">Recyclable Mono PE</Link>
                        <Link to="/materials/bio-pe" onClick={() => setIsMenuOpen(false)} className="block py-1 text-sm text-neutral-700">Bio-PE</Link>
                      </div>
                    </div>
                    <div>
                      <p className="text-xs font-medium text-neutral-500 uppercase mb-1">Industries</p>
                      <div className="grid grid-cols-2 gap-1">
                        <Link to="/industry/coffee-tea" onClick={() => setIsMenuOpen(false)} className="block py-1 text-sm text-neutral-700">Coffee & Tea</Link>
                        <Link to="/industry/snacks-food" onClick={() => setIsMenuOpen(false)} className="block py-1 text-sm text-neutral-700">Snacks & Food</Link>
                        <Link to="/industry/pet-food" onClick={() => setIsMenuOpen(false)} className="block py-1 text-sm text-neutral-700">Pet Food</Link>
                        <Link to="/industry/supplements-powders" onClick={() => setIsMenuOpen(false)} className="block py-1 text-sm text-neutral-700">Supplements</Link>
                      </div>
                    </div>
                    <Link to="/learn" onClick={() => setIsMenuOpen(false)} className="block py-2 text-sm text-primary-600 font-medium">View All Learn Pages →</Link>
                  </div>
                </div>
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

              {/* Other Links */}
              <div className="border-t border-neutral-100 pt-3">
                <Link to="/dashboard" onClick={() => setIsMenuOpen(false)} className="block py-2 text-neutral-700 font-medium">Customer Center</Link>
              </div>
              
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
    </>
  )
}
