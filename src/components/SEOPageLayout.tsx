import React, { useState, useTransition, useEffect, useRef, useMemo } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import { ArrowLeft, Leaf, Mail, Phone, Calendar, X, BookOpen, FileText, ChevronDown, ChevronRight, Search, Package, Factory, ShoppingBag, Users, Award, HelpCircle, Zap, Beaker, Globe, Layers, ArrowRight, ShoppingCart, Gift, Menu, DollarSign } from 'lucide-react'
import SEO from './SEO'
import { useTranslation } from 'react-i18next'
import { organizationEntity, getAuthorByContentType, generateBreadcrumb } from '../data/schemaEntities'
import { LEARN_PAGES } from './LearnNavigation'
import { blogPosts } from '../data/blogData'
import { ShareButton } from './animate-ui/components/community/share-button'
import Footer from './Footer'
import ReadingProgress from './ReadingProgress'
import StickyFreeSampleCTA from './StickyFreeSampleCTA'
import { ThreePouchViewer } from './ThreePouchViewer'
import SiteHeader from './SiteHeader'
import { getDomain } from '../utils/domain'
import PouchLayout from './pouch/PouchLayout'
import { NeoButton, NeoCard, NeoBadge } from './pouch/PouchUI'

// Category icons for Learn Menu
const CATEGORY_ICONS: Record<string, React.ReactNode> = {
  materials: <Leaf className="h-3.5 w-3.5" />,
  packaging: <Package className="h-3.5 w-3.5" />,
  options: <Package className="h-3.5 w-3.5" />,
  industries: <Factory className="h-3.5 w-3.5" />,
  products: <ShoppingBag className="h-3.5 w-3.5" />,
  solutions: <Users className="h-3.5 w-3.5" />,
  topics: <FileText className="h-3.5 w-3.5" />,
  caseStudies: <Award className="h-3.5 w-3.5" />,
  knowledge: <BookOpen className="h-3.5 w-3.5" />,
  support: <HelpCircle className="h-3.5 w-3.5" />,
  function: <Zap className="h-3.5 w-3.5" />,
  lab: <Beaker className="h-3.5 w-3.5" />,
  usa: <Globe className="h-3.5 w-3.5" />,
  company: <Award className="h-3.5 w-3.5" />,
  spec: <Layers className="h-3.5 w-3.5" />,
  composting: <Leaf className="h-3.5 w-3.5" />,
}

// SEO Page Header with Hover Mega Menus
const SEOPageHeader: React.FC = () => {
  const navigate = useNavigate()
  const [isPending, startTransition] = useTransition()
  const [activeMenu, setActiveMenu] = useState<'resources' | null>(null)
  const [activeCategory, setActiveCategory] = useState<string | null>(null)
  const [hoveredPage, setHoveredPage] = useState<{ name: string; link: string; image: string } | null>(null)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const menuTimeoutRef = useRef<NodeJS.Timeout | null>(null)

  // Pre-fill Resources menu with random content when it opens
  useEffect(() => {
    if (activeMenu === 'resources' && !activeCategory) {
      const categoryKeys = Object.keys(LEARN_PAGES)
      const randomCategoryKey = categoryKeys[Math.floor(Math.random() * categoryKeys.length)]
      setActiveCategory(randomCategoryKey)
      const category = LEARN_PAGES[randomCategoryKey as keyof typeof LEARN_PAGES]
      if (category && category.pages.length > 0) {
        const randomPage = category.pages[Math.floor(Math.random() * category.pages.length)]
        setHoveredPage(randomPage)
      }
    }
  }, [activeMenu])

  useEffect(() => {
    if (activeMenu !== 'resources') {
      setActiveCategory(null)
      setHoveredPage(null)
    }
  }, [activeMenu])

  // Get random pages to fill empty space when Learn menu opens
  const randomPages = useMemo(() => {
    const allPages: { name: string; link: string; image: string; category: string }[] = []
    Object.entries(LEARN_PAGES).forEach(([key, category]) => {
      category.pages.forEach(page => {
        allPages.push({ ...page, category: key })
      })
    })
    // Shuffle and take first 6 random pages
    const shuffled = [...allPages].sort(() => Math.random() - 0.5)
    return shuffled.slice(0, 6)
  }, [])

  const handleMouseEnter = (menu: 'resources') => {
    if (menuTimeoutRef.current) {
      clearTimeout(menuTimeoutRef.current)
      menuTimeoutRef.current = null
    }
    setActiveMenu(menu)
  }

  const handleMouseLeave = () => {
    menuTimeoutRef.current = setTimeout(() => {
      setActiveMenu(null)
    }, 150)
  }

  const handleNavigation = (to: string) => (e: React.MouseEvent) => {
    e.preventDefault()
    setActiveMenu(null)
    startTransition(() => {
      navigate(to)
    })
  }

  return (
    <header className="bg-primary-700 text-white fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Desktop Layout */}
        <div className="hidden md:flex items-center justify-between h-14">
          {/* Logo + Back */}
          <div className="flex items-center gap-4">
            <Link to="/" className="flex items-center gap-2 hover:opacity-80 transition">
              <ArrowLeft className="h-4 w-4" />
              <Leaf className="h-5 w-5 text-primary-300" />
              <span className="font-bold text-sm">Achieve Pack</span>
            </Link>
          </div>

          {/* Nav Items - Desktop */}
          <nav className="flex items-center gap-1">
            {/* PRICING Menu */}
            <Link
              to="/pricing"
              className="flex items-center gap-1 px-3 py-2 text-sm font-medium hover:bg-primary-600 rounded-lg transition"
            >
              <DollarSign className="h-4 w-4 text-emerald-300" />
              Pricing
            </Link>

            {/* RESOURCES (LEARN & BLOG) */}
            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter('resources')}
              onMouseLeave={handleMouseLeave}
            >
              <button className="flex items-center gap-1 px-3 py-2 text-sm font-medium hover:bg-primary-600 rounded-lg transition">
                <BookOpen className="h-4 w-4" />
                Resources
                <ChevronDown className="h-3 w-3" />
              </button>
            </div>

            {/* Shop Now */}
            <Link
              to="/store"
              className="flex items-center gap-1 px-3 py-2 text-sm font-medium bg-primary-500 text-white rounded-lg hover:bg-primary-400 transition"
            >
              <ShoppingCart className="h-4 w-4" />
              Shop Now
            </Link>

            {/* Contact */}
            <a
              href="https://calendly.com/30-min-free-packaging-consultancy"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 px-3 py-2 text-sm font-medium bg-white text-primary-700 rounded-lg hover:bg-primary-50 transition"
            >
              <Calendar className="h-4 w-4" />
              Book Meeting
            </a>
          </nav>
        </div>

        {/* Mobile Layout */}
        <div className="md:hidden flex items-center justify-between h-14">
          {/* Logo + Back */}
          <Link to="/" className="flex items-center gap-2 hover:opacity-80 transition">
            <ArrowLeft className="h-4 w-4" />
            <Leaf className="h-5 w-5 text-primary-300" />
            <span className="font-bold text-sm">Achieve Pack</span>
          </Link>

          {/* Mobile Nav Icons */}
          <div className="flex items-center gap-2">
            <Link
              to="/store"
              className="w-9 h-9 rounded-full bg-primary-500 flex items-center justify-center hover:bg-primary-400 transition"
            >
              <ShoppingCart className="h-4 w-4" />
            </Link>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="w-9 h-9 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center hover:from-green-600 hover:to-emerald-600 transition shadow-lg"
              style={{ boxShadow: '0 0 12px rgba(16, 185, 129, 0.5)' }}
            >
              {isMobileMenuOpen ? <X className="h-4 w-4" /> : <Gift className="h-4 w-4" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile FREE Services Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-neutral-200 shadow-lg">
          <div className="p-4">
            <h3 className="text-xs font-bold text-green-600 uppercase tracking-wider mb-3 flex items-center gap-2">
              <Gift className="h-4 w-4" />
              FREE Services
            </h3>
            <div className="grid grid-cols-2 gap-2">
              <Link
                to="/free-service/packaging-design-consultation"
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex flex-col items-center p-3 bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl border border-green-200 hover:border-green-400 transition"
              >
                <span className="text-2xl mb-1">🎨</span>
                <span className="text-xs font-semibold text-neutral-800 text-center">Free Design</span>
                <span className="text-[10px] text-neutral-500 text-center">Consultation</span>
              </Link>
              <Link
                to="/free-service/website-upgrade"
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex flex-col items-center p-3 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl border border-blue-200 hover:border-blue-400 transition"
              >
                <span className="text-2xl mb-1">🌐</span>
                <span className="text-xs font-semibold text-neutral-800 text-center">Free Website</span>
                <span className="text-[10px] text-neutral-500 text-center">Upgrade</span>
              </Link>
              <Link
                to="/free-service/customer-center"
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex flex-col items-center p-3 bg-gradient-to-br from-purple-50 to-violet-50 rounded-xl border border-purple-200 hover:border-purple-400 transition"
              >
                <span className="text-2xl mb-1">📊</span>
                <span className="text-xs font-semibold text-neutral-800 text-center">Free MGT Tool</span>
                <span className="text-[10px] text-neutral-500 text-center">Customer Center</span>
              </Link>
              <Link
                to="/free-service/packaging-mockup"
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex flex-col items-center p-3 bg-gradient-to-br from-orange-50 to-amber-50 rounded-xl border border-orange-200 hover:border-orange-400 transition"
              >
                <span className="text-2xl mb-1">📦</span>
                <span className="text-xs font-semibold text-neutral-800 text-center">Free Mockup</span>
                <span className="text-[10px] text-neutral-500 text-center">3D Preview</span>
              </Link>
            </div>
            {/* Quick Links */}
            <div className="mt-4 pt-4 border-t border-neutral-200 grid grid-cols-2 gap-2">
              <a
                href="https://calendly.com/30-min-free-packaging-consultancy"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 px-3 py-2 bg-primary-600 text-white text-xs font-medium rounded-lg"
              >
                <Calendar className="h-3 w-3" />
                Book Meeting
              </a>
              <Link
                to="/free"
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center justify-center gap-1 px-3 py-2 bg-green-600 text-white text-xs font-medium rounded-lg"
              >
                All Free Services →
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* RESOURCES Mega Menu */}
      {activeMenu === 'resources' && (
        <div
          className="fixed left-1/2 -translate-x-1/2 top-14 pt-2 z-50 animate-fade-in"
          onMouseEnter={() => handleMouseEnter('resources')}
          onMouseLeave={handleMouseLeave}
        >
          <div className="w-[95vw] max-w-[1100px] bg-white shadow-2xl rounded-xl border border-neutral-200 overflow-hidden text-neutral-800 text-left">
            <div className="grid grid-cols-12">
              {/* Left: Learn Center Categories (col-span-3) */}
              <div className="col-span-3 bg-neutral-50 p-3 border-r border-neutral-100 max-h-[70vh] overflow-y-auto">
                <h3 className="text-xs font-bold text-primary-600 uppercase tracking-wider mb-2 flex items-center gap-2">
                  <BookOpen className="h-4 w-4" />
                  Learn Center
                </h3>
                <ul className="space-y-0.5">
                  {Object.entries(LEARN_PAGES).map(([key, category]) => (
                    <li key={key}>
                      <button
                        onMouseEnter={() => { 
                          setActiveCategory(key); 
                          const pages = category.pages;
                          if (pages.length > 0) {
                            const randomPage = pages[Math.floor(Math.random() * pages.length)];
                            setHoveredPage(randomPage);
                          } else {
                            setHoveredPage(null);
                          }
                        }}
                        className={`w-full flex items-center justify-between py-1.5 px-2 rounded-lg text-xs font-medium transition-all ${
                          activeCategory === key ? 'bg-primary-100 text-primary-700 font-semibold' : 'text-neutral-700 hover:bg-neutral-100'
                        }`}
                      >
                        <span className="flex items-center gap-1.5">
                          {CATEGORY_ICONS[key]}
                          {category.title}
                        </span>
                        <span className="text-[10px] text-neutral-400">{category.pages.length}</span>
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Middle-Left: Pages of selected category (col-span-3) */}
              <div className="col-span-3 p-3 border-r border-neutral-100 max-h-[70vh] overflow-y-auto">
                {activeCategory && LEARN_PAGES[activeCategory as keyof typeof LEARN_PAGES] ? (
                  <>
                    <h4 className="text-xs font-bold text-neutral-500 uppercase tracking-wider mb-2">
                      {LEARN_PAGES[activeCategory as keyof typeof LEARN_PAGES].title}
                    </h4>
                    <ul className="space-y-0.5">
                      {LEARN_PAGES[activeCategory as keyof typeof LEARN_PAGES].pages.map((page) => (
                        <li key={page.link}>
                          <a
                            href={page.link}
                            onClick={handleNavigation(page.link)}
                            onMouseEnter={() => setHoveredPage(page)}
                            className={`block py-1.5 px-2 rounded-lg text-xs transition-all ${
                              hoveredPage?.link === page.link ? 'bg-primary-50 text-primary-700 font-semibold' : 'text-neutral-600 hover:bg-neutral-50'
                            }`}
                          >
                            {page.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </>
                ) : (
                  <div className="text-center py-8 text-neutral-400 text-sm">
                    <BookOpen className="h-8 w-8 mx-auto mb-2 opacity-50" />
                    Hover a category to see pages
                  </div>
                )}
              </div>

              {/* Middle-Right: Blog Quick Links & Latest (col-span-3) */}
              <div className="col-span-3 p-3 border-r border-neutral-100 max-h-[70vh] overflow-y-auto">
                <h3 className="text-xs font-bold text-primary-600 uppercase tracking-wider mb-2 flex items-center gap-2">
                  <FileText className="h-4 w-4" />
                  Blog News
                </h3>
                <ul className="space-y-0.5 mb-4">
                  <li>
                    <a
                      href="/blog"
                      onClick={handleNavigation('/blog')}
                      className="flex items-center gap-2 py-1 px-2 rounded-lg text-xs font-medium text-neutral-700 hover:bg-primary-50 hover:text-primary-700 transition-all"
                    >
                      <ChevronRight className="h-3 w-3 text-neutral-400" />
                      All Articles
                    </a>
                  </li>
                  <li>
                    <a
                      href="/blog?category=Newsletter"
                      onClick={handleNavigation('/blog?category=Newsletter')}
                      className="flex items-center gap-2 py-1 px-2 rounded-lg text-xs font-medium text-neutral-700 hover:bg-primary-50 hover:text-primary-700 transition-all"
                    >
                      <ChevronRight className="h-3 w-3 text-neutral-400" />
                      Newsletter
                    </a>
                  </li>
                  <li>
                    <a
                      href="/blog?category=Packaging"
                      onClick={handleNavigation('/blog?category=Packaging')}
                      className="flex items-center gap-2 py-1 px-2 rounded-lg text-xs font-medium text-neutral-700 hover:bg-primary-50 hover:text-primary-700 transition-all"
                    >
                      <ChevronRight className="h-3 w-3 text-neutral-400" />
                      Packaging Tips
                    </a>
                  </li>
                  <li>
                    <a
                      href="/blog?category=Sustainability"
                      onClick={handleNavigation('/blog?category=Sustainability')}
                      className="flex items-center gap-2 py-1 px-2 rounded-lg text-xs font-medium text-neutral-700 hover:bg-primary-50 hover:text-primary-700 transition-all"
                    >
                      <ChevronRight className="h-3 w-3 text-neutral-400" />
                      Sustainability
                    </a>
                  </li>
                </ul>
                <h4 className="text-xs font-bold text-neutral-500 uppercase tracking-wider mb-2">Latest Posts</h4>
                <ul className="space-y-1.5">
                  {[...blogPosts].sort((a, b) => new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime()).slice(0, 3).map((post) => (
                    <li key={post.id}>
                      <a
                        href={`/blog/${post.slug}`}
                        onClick={handleNavigation(`/blog/${post.slug}`)}
                        className="block hover:text-primary-600 transition-colors group"
                      >
                        <span className="text-[10px] text-primary-600 font-medium block">{post.category}</span>
                        <span className="text-xs font-medium text-neutral-800 line-clamp-1 group-hover:text-primary-600 transition-colors">{post.title}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Right Column: Hero Preview Card (col-span-3) */}
              <div className="col-span-3 p-3 bg-neutral-50 flex flex-col justify-between">
                {hoveredPage ? (
                  <div className="h-full flex flex-col">
                    <img
                      src={hoveredPage.image}
                      alt={hoveredPage.name}
                      className="w-full aspect-[4/3] object-cover rounded-lg mb-2 border border-neutral-200 shadow-sm"
                      loading="lazy"
                    />
                    <h5 className="text-xs font-bold text-neutral-900 mb-1">{hoveredPage.name}</h5>
                    <p className="text-[10px] text-neutral-500 leading-normal mb-2 flex-grow">
                      Sustainably sourced B2B guides for brands that scale. BRC, FDA compliant.
                    </p>
                    <a
                      href={hoveredPage.link}
                      onClick={handleNavigation(hoveredPage.link)}
                      className="text-xs text-primary-600 hover:text-primary-700 font-bold flex items-center gap-1"
                    >
                      Read Article →
                    </a>
                  </div>
                ) : (
                  <div className="h-full flex items-center justify-center text-neutral-400 text-sm">
                    <div className="text-center">
                      <Search className="h-8 w-8 mx-auto mb-2 opacity-50" />
                      Hover a page to preview
                    </div>
                  </div>
                )}
              </div>
            </div>
            {/* Bottom Footer */}
            <div className="bg-neutral-50 px-4 py-2 border-t border-neutral-100 flex items-center justify-between">
              <div className="flex gap-4">
                <a
                  href="/learn"
                  onClick={handleNavigation('/learn')}
                  className="text-xs font-bold text-primary-600 hover:text-primary-700 transition-colors"
                >
                  📚 Learn Index ({Object.values(LEARN_PAGES).reduce((sum, cat) => sum + cat.pages.length, 0)} Articles)
                </a>
                <a
                  href="/blog"
                  onClick={handleNavigation('/blog')}
                  className="text-xs font-bold text-primary-600 hover:text-primary-700 transition-colors"
                >
                  📝 Blog Index ({blogPosts.length} Posts)
                </a>
              </div>
              <a
                href="https://calendly.com/30-min-free-packaging-consultancy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-bold text-primary-600 hover:text-primary-700 flex items-center gap-1"
              >
                Book packaging consultation →
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

interface FAQ {
  question: string
  answer: string
}

interface TableData {
  headers: string[]
  rows: string[][]
}

interface SEOPageLayoutProps {
  // SEO Meta
  title: string
  description: string
  keywords: string[]
  canonicalUrl?: string
  ogImage?: string
  
  // Page Content
  heroTitle: string
  heroSubtitle: string
  aboveTitle?: React.ReactNode
  heroImage?: string
  heroImageAlt?: string
  hero3DModelUrl?: string
  heroLogo?: string
  heroLogoAlt?: string
  
  // Intro/Summary (Answer-first approach)
  introSummary: string
  
  // Main Content Sections
  sections: {
    id: string
    title: string
    icon?: React.ReactNode
    content: React.ReactNode
  }[]
  
  // FAQ Section
  faqs?: FAQ[]
  
  // Data Tables
  tables?: {
    title: string
    data: TableData
  }[]
  
  // Schema Type
  schemaType?: 'Article' | 'Product' | 'FAQPage' | 'WebPage' | 'Service'
  contentCategory?: string // 用於選擇合適的作者實體
  
  // Related Links
  relatedLinks?: {
    title: string
    url: string
    description?: string
  }[]
  
  // CTA
  ctaTitle?: string
  ctaDescription?: string
  ctaButtonText?: string
  ctaButtonUrl?: string

  // Hero Style
  heroStyle?: 'split' | 'banner'
  heroBgColor?: string // hex code or tailwind class

  // Breadcrumbs
  breadcrumbs?: {
    label: string
    url: string
  }[]
}

const SEOPageLayout: React.FC<SEOPageLayoutProps> = ({
  title,
  description,
  keywords,
  canonicalUrl,
  ogImage = '/imgs/og-image.webp',
  heroTitle,
  heroSubtitle,
  heroImage,
  heroImageAlt,
  hero3DModelUrl,
  heroLogo,
  heroLogoAlt,
  introSummary,
  sections,
  faqs,
  tables,
  schemaType = 'WebPage',
  contentCategory,
  relatedLinks,
  ctaTitle = 'Ready to Get Started?',
  ctaDescription = 'Contact our packaging experts for a free consultation and quote.',
  ctaButtonText = 'Get Free Quote',
  ctaButtonUrl = '/#contact',
  heroStyle = 'split',
  heroBgColor,
  aboveTitle,
  breadcrumbs
}) => {
  const [scrollPercent, setScrollPercent] = useState(0)
  const [hero3DTilt, setHero3DTilt] = useState({ x: 0, y: 0 })
  const hero3DCardRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      if (docHeight > 0) {
        setScrollPercent(scrollTop / docHeight)
      }
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleHero3DMouseMove = (e: React.MouseEvent) => {
    if (!hero3DCardRef.current) return
    const rect = hero3DCardRef.current.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width - 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5
    setHero3DTilt({ x: x * 30, y: y * -30 })
  }

  const handleHero3DMouseLeave = () => {
    setHero3DTilt({ x: 0, y: 0 })
  }
  const { t } = useTranslation()
  const navigate = useNavigate()
  const location = useLocation()
  const [isPending, startTransition] = useTransition()
  
  // Generate canonical URL from current path if not provided
  const effectiveCanonicalUrl = canonicalUrl || `${getDomain() === 'pouch' ? 'https://pouch.eco' : 'https://achievepack.com'}${location.pathname}`
  
  // Scroll to top when page loads
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])
  
  // Lightbox state
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [lightboxImage, setLightboxImage] = useState('')
  const [lightboxAlt, setLightboxAlt] = useState('')

  const openLightbox = (src: string, alt: string) => {
    setLightboxImage(src)
    setLightboxAlt(alt)
    setLightboxOpen(true)
  }

  const closeLightbox = () => {
    setLightboxOpen(false)
    setLightboxImage('')
    setLightboxAlt('')
  }

  // Optimized navigation handler for better INP
  const handleNavigation = (to: string) => (e: React.MouseEvent) => {
    e.preventDefault()
    startTransition(() => {
      navigate(to)
    })
  }

  // Generate FAQ Schema
  const faqSchema = faqs && faqs.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  } : null

  // 選擇適合的作者實體
  const authorEntity = getAuthorByContentType(contentCategory || title)

  // Generate Breadcrumb
  const breadcrumbItems = [
    { name: 'Home', url: getDomain() === 'pouch' ? 'https://pouch.eco/' : 'https://achievepack.com/' },
    { name: title, url: effectiveCanonicalUrl }
  ]

  // 使用 @graph 結構整合所有實體 - E-E-A-T 優化
  const enhancedSchema = {
    "@context": "https://schema.org",
    "@graph": [
      // Organization Entity (全站共用)
      organizationEntity,
      
      // Author Entity (專家作者)
      authorEntity,
      
      // WebSite Entity
      {
        "@type": "WebSite",
        "@id": `${getDomain() === 'pouch' ? 'https://pouch.eco' : 'https://achievepack.com'}/#website`,
        "url": getDomain() === 'pouch' ? 'https://pouch.eco' : 'https://achievepack.com',
        "name": getDomain() === 'pouch' ? 'Pouch.eco' : 'Achieve Pack',
        "description": getDomain() === 'pouch' ? 'Eco-friendly compostable packaging for brands' : 'Sustainable eco-friendly packaging solutions',
        "publisher": { "@id": `${getDomain() === 'pouch' ? 'https://pouch.eco' : 'https://achievepack.com'}/#organization` },
        "inLanguage": "en-US"
      },
      
      // WebPage Entity
      {
        "@type": "WebPage",
        "@id": `${effectiveCanonicalUrl}#webpage`,
        "url": effectiveCanonicalUrl,
        "name": title,
        "description": description,
        "isPartOf": { "@id": `${getDomain() === 'pouch' ? 'https://pouch.eco' : 'https://achievepack.com'}/#website` },
        "about": { "@id": `${getDomain() === 'pouch' ? 'https://pouch.eco' : 'https://achievepack.com'}/#organization` },
        "inLanguage": "en-US",
        "datePublished": "2025-01-01",
        "dateModified": new Date().toISOString().split('T')[0]
      },
      
      // Main Content Entity (Article/WebPage)
      schemaType === 'Article' ? {
        "@type": "Article",
        "@id": `${effectiveCanonicalUrl}#article`,
        "headline": title,
        "description": description,
        "image": heroImage || ogImage,
        "author": { "@id": authorEntity['@id'] },
        "publisher": { "@id": `${getDomain() === 'pouch' ? 'https://pouch.eco' : 'https://achievepack.com'}/#organization` },
        "datePublished": "2025-01-01",
        "dateModified": new Date().toISOString().split('T')[0],
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": `${effectiveCanonicalUrl}#webpage`
        },
        "keywords": keywords.slice(0, 10).join(', '),
        "inLanguage": "en-US"
      } : null,
      
      // Breadcrumb
      generateBreadcrumb(breadcrumbItems)
    ].filter(Boolean)
  }

  // A curated list of default B2C related resources
  const defaultB2cLinks = useMemo(() => [
    {
      title: 'BPI Certified Compostable Guide',
      url: '/blog/bpi-certified-guide',
      description: 'Understanding ASTM D6400 and certified circular industrial composting.'
    },
    {
      title: 'Freshness Coffee Degassing Valves',
      url: '/blog/coffee-degassing-valve-guide',
      description: 'Why one-way degassing valves are mandatory for seam stability and off-gassing.'
    },
    {
      title: 'Compostable Stand-Up Pouches',
      url: '/blog/compostable-stand-up-pouches-guide',
      description: 'Transitioning food startups to plant-based compostable flexible packaging.'
    },
    {
      title: 'Cellulose Materials Crack Prevention',
      url: '/blog/compostable-humidity-control-guide',
      description: 'Prevent brittleness and shelf leaks with proper high-barrier humidity controls.'
    },
    {
      title: 'Global Compliance & Regulations',
      url: '/blog/eco-packaging-regulations-guide',
      description: 'A complete guide to international green claims and FDA/FTC requirements.'
    }
  ], []);

  // A curated list of default B2B related resources
  const defaultB2bLinks = useMemo(() => [
    {
      title: 'Stand Up Pouches Guide',
      url: '/packaging/stand-up-pouches',
      description: 'Learn about the most versatile B2B flexible packaging format.'
    },
    {
      title: 'Compostable Materials Guide',
      url: '/materials/compostable',
      description: 'A complete scientific overview of bio-based ASTM D6400 certified polymers.'
    },
    {
      title: 'PCR Recycled Packaging',
      url: '/materials/pcr',
      description: 'Explore Post-Consumer Recycled plastics for high-level circular economy compliance.'
    },
    {
      title: 'EU PPWR Compliance Guide',
      url: '/topics/eu-ppwr-compliance',
      description: 'Master the Packaging and Packaging Waste Regulation requirements for exporting.'
    },
    {
      title: 'Low MOQ Wholesale Solutions',
      url: '/products/low-moq-packaging',
      description: 'Starter runs starting from just 500 units for new startups.'
    }
  ], []);

  const activeRelatedLinks = useMemo(() => {
    const isPouch = getDomain() === 'pouch';
    const defaults = isPouch ? defaultB2cLinks : defaultB2bLinks;
    
    // Filter out the active page to avoid recommending itself
    const candidates = defaults.filter(item => {
      const pathOnly = item.url.startsWith('/') ? item.url : new URL(item.url).pathname;
      return !location.pathname.endsWith(pathOnly);
    });

    const list = relatedLinks ? [...relatedLinks] : [];
    
    // Fill up to exactly 3 suggestions
    for (const item of candidates) {
      if (list.length >= 3) break;
      if (!list.some(existing => existing.url === item.url)) {
        list.push(item);
      }
    }
    
    return list.slice(0, 3);
  }, [relatedLinks, location.pathname, defaultB2cLinks, defaultB2bLinks]);

  if (getDomain() === 'pouch') {
    return (
      <>
        <SEO 
          title={`${title} | Pouch.eco`}
          description={description}
          url={effectiveCanonicalUrl}
          keywords={keywords}
          image={ogImage.startsWith('http') ? ogImage : `https://pouch.eco${ogImage}`}
          schema={enhancedSchema}
          faq={faqs || undefined}
        />
        <PouchLayout>
          <div className="min-h-screen bg-[#F0F0F0] text-black font-['Space_Grotesk'] pb-16">
            {/* Breadcrumbs */}
            {breadcrumbs && breadcrumbs.length > 0 && (
              <div className="max-w-7xl mx-auto px-4 md:px-6 pt-6">
                <div className="flex flex-wrap items-center gap-2 font-['JetBrains_Mono'] text-xs md:text-sm uppercase tracking-wider text-black">
                  {breadcrumbs.map((crumb, idx) => (
                    <React.Fragment key={idx}>
                      {idx > 0 && <span className="text-black font-black">❯</span>}
                      {idx === breadcrumbs.length - 1 ? (
                        <span className="bg-white px-2 py-0.5 border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] font-bold">{crumb.label}</span>
                      ) : (
                        <Link to={crumb.url} className="hover:bg-black hover:text-white font-bold bg-[#D4FF00] px-2 py-0.5 border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-colors">
                          {crumb.label}
                        </Link>
                      )}
                    </React.Fragment>
                  ))}
                </div>
              </div>
            )}

            {/* Hero Section */}
            <section className="max-w-7xl mx-auto px-4 md:px-6 pt-8 pb-12">
              <div className="border-4 border-black bg-white p-6 md:p-10 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] flex flex-col md:flex-row gap-8 items-center">
                {/* Hero Left Content */}
                <div className="flex-1 space-y-6">
                  {aboveTitle && (
                    <div className="inline-block bg-[#00FFFF] text-black border-2 border-black px-3 py-1 text-xs font-black uppercase tracking-wider shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                      {aboveTitle}
                    </div>
                  )}
                  {heroLogo && (
                    <div className="mb-2">
                      <img 
                        src={heroLogo} 
                        alt={heroLogoAlt || 'Eco Certification'} 
                        className="h-16 w-auto bg-white rounded border-2 border-black p-1 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
                      />
                    </div>
                  )}
                  <h1 className="font-black text-4xl md:text-6xl uppercase tracking-tighter leading-none">
                    {heroTitle}
                  </h1>
                  <p className="font-['Space_Grotesk'] text-lg md:text-xl text-neutral-800 leading-relaxed font-semibold">
                    {heroSubtitle}
                  </p>
                  
                  {/* Dual CTAs (B2C Low-MOQ & B2B Volume) */}
                  <div className="flex flex-col sm:flex-row gap-4 pt-2">
                    <NeoButton 
                      variant="primary"
                      href="/store"
                      className="text-xs md:text-sm"
                    >
                      Shop Starter Kits (Low MOQ)
                    </NeoButton>
                    <NeoButton 
                      variant="dark"
                      href="https://calendly.com/30-min-free-packaging-consultancy"
                      className="text-xs md:text-sm"
                    >
                      Book Wholesale Call
                    </NeoButton>
                  </div>
                </div>

                {/* Hero Right Media */}
                {hero3DModelUrl ? (
                  <div 
                    ref={hero3DCardRef}
                    onMouseMove={handleHero3DMouseMove}
                    onMouseLeave={handleHero3DMouseLeave}
                    className="w-full md:w-[400px] h-[300px] md:h-[400px] flex justify-center items-center relative overflow-hidden border-4 border-black bg-[#F5F5F5] shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]"
                  >
                    <ThreePouchViewer 
                      modelUrl={hero3DModelUrl} 
                      tilt={hero3DTilt} 
                      scrollPercent={scrollPercent} 
                      isMobile={false} 
                    />
                  </div>
                ) : heroImage ? (
                  <div className="w-full md:w-[400px] flex justify-center items-center">
                    <img 
                      src={heroImage} 
                      alt={heroImageAlt || heroTitle}
                      className="w-full h-auto max-h-[400px] object-cover border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]"
                      loading="eager"
                    />
                  </div>
                ) : null}
              </div>
            </section>

            {/* Quick Summary Section */}
            <section className="max-w-7xl mx-auto px-4 md:px-6 pb-12">
              <NeoCard color="bg-[#D4FF00]" className="border-4 border-black p-6 md:p-8">
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
                  <div className="flex-1 space-y-4">
                    <h2 className="font-['JetBrains_Mono'] text-xs font-black uppercase tracking-wider text-black bg-white border-2 border-black px-2 py-0.5 inline-block shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                      Quick Summary
                    </h2>
                    <p className="text-xl font-bold leading-relaxed text-black">{introSummary}</p>
                    
                    {/* E-E-A-T trust byline */}
                    <div className="pt-4 border-t border-black/10 flex flex-wrap items-center gap-4 text-xs font-['JetBrains_Mono'] font-bold text-black/80">
                      <div className="flex items-center gap-2">
                        <img 
                          src="/imgs/team/Ryan Wong - Packaging Specialist.png" 
                          alt="Ryan Wong" 
                          className="w-6 h-6 rounded-full object-cover border-2 border-black" 
                        />
                        <span>BY RYAN WONG, ECO PACKAGING PROTOCOL</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <span className="w-2 h-2 bg-black rounded-full animate-pulse"></span>
                        <span>VERIFIED BY POUCH.ECO SUSTAINABILITY LAB</span>
                      </div>
                      <div className="border-2 border-black bg-white px-2 py-0.5 text-xs uppercase font-black tracking-tighter">
                        ASTM D6400 / EN 13432 CERTIFIED
                      </div>
                    </div>
                  </div>
                  <div className="flex-shrink-0 pt-1">
                    <ShareButton
                      url={effectiveCanonicalUrl}
                      title={title}
                      description={description}
                      size="sm"
                      icon="prefix"
                    >
                      Share
                    </ShareButton>
                  </div>
                </div>
              </NeoCard>
            </section>

            {/* Main Content Layout */}
            <div className="max-w-7xl mx-auto px-4 md:px-6">
              <div className="grid lg:grid-cols-4 gap-8">
                {/* Sidebar Navigation */}
                <aside className="hidden lg:block lg:col-span-1">
                  <div className="sticky top-28 bg-white border-4 border-black p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] space-y-4">
                    <h3 className="font-['JetBrains_Mono'] text-xs font-black uppercase tracking-wider text-neutral-500">
                      Contents
                    </h3>
                    <nav className="flex flex-col gap-2 font-['JetBrains_Mono'] font-bold text-sm">
                      {sections.filter(section => section.id !== 'ai-search').map((section) => (
                        <a
                          key={section.id}
                          href={`#${section.id}`}
                          className="block p-2 hover:bg-[#D4FF00] border-2 border-transparent hover:border-black transition-all"
                        >
                          [{section.title.toUpperCase()}]
                        </a>
                      ))}
                      {faqs && faqs.length > 0 && (
                        <a 
                          href="#faq" 
                          className="block p-2 hover:bg-[#00FFFF] border-2 border-transparent hover:border-black transition-all"
                        >
                          [FAQ]
                        </a>
                      )}
                    </nav>
                  </div>
                </aside>

                {/* Main Content Sections */}
                <main className="lg:col-span-3 space-y-8">
                  {sections.map((section) => {
                    const isAiSearch = section.id === 'ai-search'
                    return (
                      <section
                        key={section.id}
                        id={section.id}
                        className={isAiSearch 
                          ? 'sr-only overflow-hidden' 
                          : 'border-4 border-black bg-white p-6 md:p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] space-y-6'
                        }
                      >
                        {isAiSearch ? (
                          <div>
                            <h2>{section.title}</h2>
                            <div>{section.content}</div>
                          </div>
                        ) : (
                          <>
                            <div className="flex items-center gap-4 border-b-4 border-black pb-4">
                              {section.icon && (
                                <div className="p-3 bg-[#D4FF00] border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                                  {section.icon}
                                </div>
                              )}
                              <h2 className="font-black text-2xl md:text-3xl uppercase tracking-tight">
                                {section.title}
                              </h2>
                            </div>
                            <div className="prose prose-neutral max-w-none font-['Space_Grotesk'] text-neutral-800 prose-headings:font-black prose-headings:uppercase prose-a:text-[#10b981] prose-a:no-underline hover:prose-a:underline prose-strong:text-black prose-img:border-4 prose-img:border-black">
                              {section.content}
                            </div>
                          </>
                        )}
                      </section>
                    )
                  })}

                  {/* Data Tables (Neobrutalist) */}
                  {tables && tables.map((table, idx) => (
                    <section key={idx} className="border-4 border-black bg-white p-6 md:p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                      <h2 className="font-black text-2xl md:text-3xl uppercase mb-6">{table.title}</h2>
                      <div className="overflow-x-auto border-4 border-black">
                        <table className="w-full text-sm font-['Space_Grotesk']">
                          <thead>
                            <tr className="border-b-4 border-black">
                              {table.data.headers.map((header, i) => (
                                <th key={i} className="text-left py-4 px-4 font-black uppercase text-black bg-[#D4FF00] border-r-4 border-black last:border-r-0">
                                  {header}
                                </th>
                              ))}
                            </tr>
                          </thead>
                          <tbody>
                            {table.data.rows.map((row, i) => (
                              <tr key={i} className="border-b-4 border-black last:border-b-0 hover:bg-[#F9F9F9] font-semibold">
                                {row.map((cell, j) => (
                                  <td key={j} className="py-4 px-4 text-black border-r-4 border-black last:border-r-0">
                                    {cell}
                                  </td>
                                ))}
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </section>
                  ))}

                  {/* FAQ Accordion (Neobrutalist) */}
                  {faqs && faqs.length > 0 && (
                    <section id="faq" className="border-4 border-black bg-white p-6 md:p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                      <h2 className="font-black text-2xl md:text-3xl uppercase mb-6 flex items-center gap-2">
                        <HelpCircle className="w-7 h-7 text-black stroke-[3px]" />
                        Frequently Asked Questions
                      </h2>
                      <div className="space-y-4">
                        {faqs.map((faq, idx) => (
                          <details key={idx} className="group border-4 border-black bg-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                            <summary className="flex items-center justify-between p-5 cursor-pointer font-black uppercase text-lg hover:bg-[#F0F0F0] select-none">
                              {faq.question}
                              <span className="ml-2 text-black transition-transform group-open:rotate-180 font-mono text-xl">▼</span>
                            </summary>
                            <div className="px-5 pb-5 border-t-4 border-black pt-4 bg-[#F9F9F9] font-['Space_Grotesk'] text-neutral-800 text-base leading-relaxed">
                              {faq.answer}
                            </div>
                          </details>
                        ))}
                      </div>
                    </section>
                  )}

                  {/* Related Links */}
                  {activeRelatedLinks && activeRelatedLinks.length > 0 && (
                    <section className="border-4 border-black bg-white p-6 md:p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                      <h2 className="font-black text-2xl md:text-3xl uppercase mb-6">Related Resources</h2>
                      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {activeRelatedLinks.map((link, idx) => (
                          <Link
                            key={idx}
                            to={link.url}
                            className="block bg-[#F0F0F0] p-6 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:bg-[#D4FF00] hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all group"
                          >
                            <h3 className="font-black text-lg uppercase group-hover:text-black mb-2">{link.title}</h3>
                            {link.description && (
                              <p className="text-sm text-neutral-700 font-medium">{link.description}</p>
                            )}
                          </Link>
                        ))}
                      </div>
                    </section>
                  )}

                  {/* High-converting Dual CTAs (B2C & B2B) */}
                  <section className="border-4 border-black bg-black p-8 shadow-[12px_12px_0px_0px_rgba(20,83,45,1)] text-white text-center space-y-6">
                    <h2 className="font-black text-3xl md:text-5xl uppercase tracking-tighter text-[#D4FF00]">
                      {ctaTitle.toUpperCase()}
                    </h2>
                    <p className="font-semibold text-lg text-neutral-300 max-w-2xl mx-auto">
                      {ctaDescription}
                    </p>
                    <div className="flex flex-col sm:flex-row gap-6 justify-center pt-2">
                      <a
                        href="/store"
                        className="inline-flex items-center justify-center gap-3 bg-[#D4FF00] text-black px-8 py-4 border-4 border-[#D4FF00] font-['JetBrains_Mono'] font-bold uppercase hover:bg-transparent hover:text-[#D4FF00] transition-colors shadow-[8px_8px_0px_0px_rgba(212,255,0,1)]"
                      >
                        Shop Low MOQ (500+)
                      </a>
                      <a
                        href="https://calendly.com/30-min-free-packaging-consultancy"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-3 bg-transparent text-white px-8 py-4 border-4 border-white font-['JetBrains_Mono'] font-bold uppercase hover:bg-white hover:text-black transition-colors"
                      >
                        Custom Enterprise Quote
                      </a>
                    </div>
                  </section>
                </main>
              </div>
            </div>

            {/* Lightbox Modal */}
            {lightboxOpen && (
              <div 
                className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90" 
                onClick={closeLightbox}
              >
                <button
                  onClick={closeLightbox}
                  className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors z-50"
                >
                  <X className="h-8 w-8" />
                </button>
                <img
                  src={lightboxImage}
                  alt={lightboxAlt}
                  className="max-w-[90vw] max-h-[90vh] object-contain border-4 border-black bg-white"
                  onClick={(e) => e.stopPropagation()}
                />
                {lightboxAlt && (
                  <p className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-black font-bold text-center bg-white border-2 border-black px-4 py-2 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                    {lightboxAlt}
                  </p>
                )}
              </div>
            )}
          </div>
        </PouchLayout>
      </>
    )
  }

  return (
    <>
      <SEO 
        title={`${title} | Achieve Pack - Eco-Friendly Packaging Solutions`}
        description={description}
        url={effectiveCanonicalUrl}
        keywords={keywords}
        image={ogImage.startsWith('http') ? ogImage : `https://achievepack.com${ogImage}`}
        schema={enhancedSchema}
        faq={faqs || undefined}
      />

      <div className="min-h-screen bg-neutral-50 overflow-x-hidden">
        {/* Header with LEARN and BLOG Mega Menus */}
        <SiteHeader showLanguageSelector={true} />
        
        {/* Reading Progress Bar */}
        <ReadingProgress />

        {/* Visual Breadcrumbs */}
        {breadcrumbs && breadcrumbs.length > 0 && (
          <div className="bg-neutral-100 border-b border-neutral-200 py-3 px-4 pt-20">
            <div className="max-w-7xl mx-auto flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-neutral-500 font-mono">
              {breadcrumbs.map((crumb, idx) => (
                <React.Fragment key={idx}>
                  {idx > 0 && <span className="text-neutral-300">/</span>}
                  {idx === breadcrumbs.length - 1 ? (
                    <span className="text-neutral-800">{crumb.label}</span>
                  ) : (
                    <Link to={crumb.url} className="hover:text-primary-600 transition">
                      {crumb.label}
                    </Link>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        )}

        {/* Hero Section */}
        {heroStyle === 'banner' ? (
          <section className="relative text-white min-h-[400px] md:min-h-[500px] flex items-center bg-primary-800 overflow-hidden">
            {/* Background Image */}
            {heroImage && (
              <div className="absolute inset-0 w-full h-full">
                <img 
                  src={heroImage} 
                  alt={heroImageAlt || heroTitle}
                  className="w-full h-full object-cover object-center"
                  loading="eager"
                />
                {/* Gradient Overlay for text readability */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary-900/95 via-primary-800/80 to-transparent"></div>
                <div className="absolute inset-0 bg-black/20 md:hidden"></div> {/* Extra darkening for mobile */}
              </div>
            )}
            
            <div className="relative max-w-7xl mx-auto px-4 w-full z-10 py-12 md:py-20">
              <div className="max-w-2xl">
                <div className="rounded-xl p-6 md:p-8 border border-white/10 shadow-2xl" style={{ backgroundColor: 'rgba(21, 128, 61, 0.75)', backdropFilter: 'blur(12px)' }}>
                  {heroLogo && (
                    <div className="mb-6">
                      <img 
                        src={heroLogo} 
                        alt={heroLogoAlt || 'Eco Certification'} 
                        className="h-14 md:h-16 w-auto bg-white rounded-lg p-2 shadow-md"
                      />
                    </div>
                  )}
                  {aboveTitle && <div className="mb-4">{aboveTitle}</div>}
                  <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight text-white drop-shadow-md">
                    {heroTitle}
                  </h1>
                  <p className="text-lg md:text-xl text-primary-50 mb-8 drop-shadow-md">
                    {heroSubtitle}
                  </p>
                  <a 
                    href="https://calendly.com/30-min-free-packaging-consultancy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-white text-primary-700 px-6 py-3.5 rounded-lg font-bold hover:bg-green-50 transition shadow-lg hover:shadow-xl"
                  >
                    <Calendar className="h-4 w-4" />
                    Book Meeting
                  </a>
                </div>
              </div>
            </div>
          </section>
        ) : (
          <section 
            className={heroBgColor && heroBgColor.startsWith('bg-') ? `${heroBgColor} text-white` : (heroBgColor ? "text-white" : "bg-primary-700 text-white")}
            style={heroBgColor && !heroBgColor.startsWith('bg-') ? { backgroundColor: heroBgColor } : undefined}
          >
            <div className="max-w-7xl mx-auto px-4">
              <div className="grid md:grid-cols-2 gap-8 items-center py-12 md:py-0">
                {/* Hero Content - Left */}
                <div className="md:py-16">
                  <div className="rounded-xl p-6 md:p-8" style={{ backgroundColor: 'rgba(0, 0, 0, 0.25)', backdropFilter: 'blur(8px)' }}>
                    {heroLogo && (
                      <div className="mb-4">
                        <img 
                          src={heroLogo} 
                          alt={heroLogoAlt || 'Eco Certification'} 
                          className="h-16 w-auto bg-white rounded-lg p-2 shadow-md"
                        />
                      </div>
                    )}
                    {aboveTitle && <div className="mb-4">{aboveTitle}</div>}
                    <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
                      {heroTitle}
                    </h1>
                    <p className="text-lg md:text-xl text-primary-100 mb-8">
                      {heroSubtitle}
                    </p>
                    <a 
                      href="https://calendly.com/30-min-free-packaging-consultancy"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-white text-[#15803d] px-6 py-3 rounded-lg font-semibold hover:bg-green-50 transition"
                    >
                      <Calendar className="h-4 w-4" />
                      Book Meeting
                    </a>
                  </div>
                </div>
                {/* Hero Image / 3D Model - Right, Responsive */}
                {hero3DModelUrl ? (
                  <div 
                    ref={hero3DCardRef}
                    onMouseMove={handleHero3DMouseMove}
                    onMouseLeave={handleHero3DMouseLeave}
                    className="w-full h-[400px] md:h-[550px] pb-12 md:pb-0 md:py-16 flex justify-center items-center relative overflow-hidden"
                  >
                    <ThreePouchViewer 
                      modelUrl={hero3DModelUrl} 
                      tilt={hero3DTilt} 
                      scrollPercent={scrollPercent} 
                      isMobile={false} 
                    />
                  </div>
                ) : heroImage ? (
                  <div className="w-full pb-12 md:pb-0 md:py-16 flex justify-center items-center">
                    <img 
                      src={heroImage} 
                      alt={heroImageAlt || heroTitle}
                      className="w-full h-auto max-h-[600px] object-cover rounded-xl shadow-2xl"
                      loading="eager"
                    />
                  </div>
                ) : null}
              </div>
            </div>
          </section>
        )}

        {/* Quick Summary - Answer First Approach */}
        <section className="py-8 bg-primary-50 border-b border-primary-100">
          <div className="max-w-7xl mx-auto px-4">
            <div className="bg-white rounded-xl p-6 shadow-sm border-l-4 border-primary-500">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                <div className="flex-1">
                  <h2 className="text-sm font-semibold text-primary-600 uppercase tracking-wide mb-2">{t('seoPages.quickSummary')}</h2>
                  <p className="text-lg text-neutral-700 leading-relaxed">{introSummary}</p>
                  
                  {/* E-E-A-T Trust & Expertise Byline */}
                  <div className="mt-4 pt-4 border-t border-neutral-100 flex flex-wrap items-center gap-4 text-xs text-neutral-500">
                    <div className="flex items-center gap-2">
                      <img 
                        src="/imgs/team/Ryan Wong - Packaging Specialist.png" 
                        alt="Ryan Wong" 
                        className="w-6 h-6 rounded-full object-cover border border-neutral-200" 
                      />
                      <span>Written by <Link to="/team/ryan-wong" className="font-semibold text-primary-700 hover:underline">Ryan Wong</Link>, Supply Chain Director</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
                      <span>Verified by <strong>Achieve Pack Sustainable Materials Lab</strong></span>
                    </div>
                    <div className="flex items-center gap-1 text-green-700 bg-green-50 px-2 py-0.5 rounded font-medium">
                      <span>ASTM D6400 / EN 13432 Compliant Stack</span>
                    </div>
                  </div>
                </div>
                <div className="flex-shrink-0 pt-1">
                  <ShareButton
                    url={effectiveCanonicalUrl}
                    title={title}
                    description={description}
                    size="sm"
                    icon="prefix"
                  >
                    Share
                  </ShareButton>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Sidebar Navigation */}
            <aside className="hidden lg:block lg:col-span-1">
              <div className="sticky top-24 max-h-[calc(100vh-120px)] overflow-y-auto bg-white rounded-xl shadow-sm border border-neutral-100 p-4">
                <h3 className="text-sm font-semibold text-neutral-500 uppercase tracking-wide mb-4">{t('seoPages.contents')}</h3>
                <nav className="space-y-1">
                  {sections.filter(section => section.id !== 'ai-search').map((section) => (
                    <a
                      key={section.id}
                      href={`#${section.id}`}
                      className="block px-3 py-2 text-sm text-neutral-600 hover:bg-primary-50 hover:text-primary-700 rounded-lg transition"
                    >
                      {section.title}
                    </a>
                  ))}
                  {faqs && faqs.length > 0 && (
                    <a href="#faq" className="block px-3 py-2 text-sm text-neutral-600 hover:bg-primary-50 hover:text-primary-700 rounded-lg transition">
                      FAQ
                    </a>
                  )}
                </nav>
              </div>
            </aside>

            {/* Main Content Area */}
            <main className="lg:col-span-3 space-y-8 overflow-hidden">
              {/* Content Sections */}
              {sections.map((section) => (
                <section 
                  key={section.id} 
                  id={section.id}
                  className={section.id === 'ai-search' 
                    ? 'sr-only overflow-hidden' 
                    : 'bg-white rounded-xl p-6 md:p-8 shadow-sm border border-neutral-100'
                  }
                >
                  {section.id === 'ai-search' ? (
                    // Hidden AI search section - only for AI/SEO crawlers
                    <div>
                      <h2>{section.title}</h2>
                      <div>{section.content}</div>
                    </div>
                  ) : (
                    // Normal visible section
                    <>
                      <div className="flex items-center gap-3 mb-6">
                        {section.icon && (
                          <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center">
                            {section.icon}
                          </div>
                        )}
                        <h2 className="text-2xl font-bold text-neutral-900">{section.title}</h2>
                      </div>
                      <div className="prose prose-neutral max-w-none">
                        {section.content}
                      </div>
                    </>
                  )}
                </section>
              ))}

              {/* Data Tables */}
              {tables && tables.map((table, idx) => (
                <section key={idx} className="bg-white rounded-xl p-6 md:p-8 shadow-sm border border-neutral-100">
                  <h2 className="text-2xl font-bold text-neutral-900 mb-6">{table.title}</h2>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b-2 border-neutral-200">
                          {table.data.headers.map((header, i) => (
                            <th key={i} className="text-left py-3 px-4 font-semibold text-neutral-900 bg-neutral-50">
                              {header}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {table.data.rows.map((row, i) => (
                          <tr key={i} className="border-b border-neutral-100 hover:bg-neutral-50">
                            {row.map((cell, j) => (
                              <td key={j} className="py-3 px-4 text-neutral-700">
                                {cell}
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </section>
              ))}

              {/* FAQ Section */}
              {faqs && faqs.length > 0 && (
                <section id="faq" className="bg-white rounded-xl p-6 md:p-8 shadow-sm border border-neutral-100">
                  <h2 className="text-2xl font-bold text-neutral-900 mb-6">{t('seoPages.faq')}</h2>
                  <div className="space-y-4">
                    {faqs.map((faq, idx) => (
                      <details key={idx} className="group border border-neutral-200 rounded-lg">
                        <summary className="flex items-center justify-between p-4 cursor-pointer font-semibold text-neutral-900 hover:bg-neutral-50">
                          {faq.question}
                          <span className="ml-2 text-primary-600 group-open:rotate-180 transition-transform">▼</span>
                        </summary>
                        <div className="px-4 pb-4 text-neutral-700">
                          {faq.answer}
                        </div>
                      </details>
                    ))}
                  </div>
                </section>
              )}

              {/* Related Links */}
              {activeRelatedLinks && activeRelatedLinks.length > 0 && (
                <section className="bg-neutral-100 rounded-xl p-6 md:p-8">
                  <h2 className="text-xl font-bold text-neutral-900 mb-4">{t('seoPages.relatedResources')}</h2>
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {activeRelatedLinks.map((link, idx) => (
                      <Link
                        key={idx}
                        to={link.url}
                        
                        className="block bg-white p-4 rounded-lg border border-neutral-200 hover:border-primary-300 hover:shadow-md transition"
                      >
                        <h3 className="font-semibold text-primary-700 mb-1">{link.title}</h3>
                        {link.description && (
                          <p className="text-sm text-neutral-600">{link.description}</p>
                        )}
                      </Link>
                    ))}
                  </div>
                </section>
              )}

              {/* E-E-A-T Trust and Expertise Card */}
              <section className="bg-white rounded-xl p-6 md:p-8 shadow-sm border border-neutral-100">
                <div className="border-b border-neutral-100 pb-4 mb-6">
                  <span className="text-xs font-bold text-primary-700 bg-primary-50 px-2.5 py-1 rounded-full uppercase tracking-wider">
                    E-E-A-T Research & Materials Verification
                  </span>
                  <h3 className="text-xl font-bold text-neutral-900 mt-2">
                    How We Ensure Absolute Accuracy and Trustworthiness
                  </h3>
                </div>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="md:col-span-2 space-y-4">
                    <p className="text-sm text-neutral-600 leading-relaxed">
                      At Achieve Pack, sustainable packaging isn't just about printing; it's about <strong>hands-on material science</strong>. This article has been written and verified by <strong>Ryan Wong</strong>, a packaging specialist with 14+ years of experience engineering biopolymer stacks for DTC startups and Fortune 500 companies. 
                    </p>
                    <p className="text-sm text-neutral-600 leading-relaxed">
                      All research, material barrier specifications (OTR, WVTR), heat-seal values (N/15mm), and compostability timelines cited in our guides are backed by testing inside the <strong>Achieve Pack Materials Testing Lab</strong>. We cross-reference our data with official certification registries from <strong>BPI (Biodegradable Products Institute)</strong>, <strong>TÜV Austria (OK Compost HOME)</strong>, and <strong>FSC (Forest Stewardship Council)</strong>.
                    </p>
                    <div className="flex flex-wrap gap-2 pt-2">
                      <span className="bg-neutral-100 text-neutral-700 px-2.5 py-1 rounded text-xs font-medium">TÜV OK Compost HOME</span>
                      <span className="bg-neutral-100 text-neutral-700 px-2.5 py-1 rounded text-xs font-medium">BPI Certification #10529618</span>
                      <span className="bg-neutral-100 text-neutral-700 px-2.5 py-1 rounded text-xs font-medium">ASTM D6400 / EN 13432</span>
                      <span className="bg-neutral-100 text-neutral-700 px-2.5 py-1 rounded text-xs font-medium">HP Indigo Digital Certified</span>
                    </div>
                  </div>
                  <div className="bg-neutral-50 p-4 rounded-lg border border-neutral-100 flex flex-col items-center text-center">
                    <img 
                      src="/imgs/team/Ryan Wong - Packaging Specialist.png" 
                      alt="Ryan Wong" 
                      className="w-16 h-16 rounded-full object-cover border-2 border-primary-500 shadow-md mb-3" 
                    />
                    <h4 className="font-bold text-neutral-900 text-sm">Ryan Wong</h4>
                    <p className="text-[11px] text-neutral-500 mb-2">Supply Chain Director</p>
                    <p className="text-[10px] text-neutral-600 leading-snug mb-3">
                      B.Eng honors degree graduate from Hong Kong Polytechnic University. Serving brands in 8 countries.
                    </p>
                    <Link 
                      to="/team/ryan-wong" 
                      className="text-xs text-primary-700 font-bold hover:underline"
                    >
                      View Expert Profile →
                    </Link>
                  </div>
                </div>
              </section>

              {/* CTA Section - 3-Level CTA */}
              <section className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-xl p-8 text-white text-center">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">{ctaTitle}</h2>
                <p className="text-primary-100 mb-6 max-w-2xl mx-auto">{ctaDescription}</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  {/* Level 3: High - Book Consultation */}
                  <a
                    href="https://calendly.com/30-min-free-packaging-consultancy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 bg-white text-[#15803d] px-6 py-3 rounded-lg font-semibold hover:bg-green-50 transition shadow-lg"
                  >
                    <Calendar className="h-4 w-4" />
                    Book Free Consultation
                  </a>
                  {/* Level 2: Medium - Order Sample Pack */}
                  <Link
                    to="/store?category=sample"
                    className="inline-flex items-center justify-center gap-2 bg-primary-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-400 transition"
                  >
                    <Package className="h-4 w-4" />
                    Order Sample Pack
                  </Link>
                  {/* Level 1: Low - Browse Store */}
                  <Link
                    to="/store"
                    className="inline-flex items-center justify-center gap-2 border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition"
                  >
                    <ArrowRight className="h-4 w-4" />
                    Browse Store
                  </Link>
                </div>
              </section>
            </main>
          </div>
        </div>

{/* Footer */}
        <StickyFreeSampleCTA />
        <Footer />

        {/* Lightbox Modal */}
        {lightboxOpen && (
          <div 
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90" 
            onClick={closeLightbox}
          >
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors z-50"
            >
              <X className="h-8 w-8" />
            </button>
            <img
              src={lightboxImage}
              alt={lightboxAlt}
              className="max-w-[90vw] max-h-[90vh] object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
            {lightboxAlt && (
              <p className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-center bg-black bg-opacity-50 px-4 py-2 rounded-lg">
                {lightboxAlt}
              </p>
            )}
          </div>
        )}
      </div>
    </>
  )
}

export { SEOPageHeader }
export default SEOPageLayout
