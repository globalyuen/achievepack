import React, { useState, useTransition, useEffect, useRef, useMemo } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import { ArrowLeft, Leaf, Mail, Phone, Calendar, X, BookOpen, FileText, ChevronDown, ChevronRight, Search, Package, Factory, ShoppingBag, Users, Award, HelpCircle, Zap, Beaker, Globe, Layers, ArrowRight, ShoppingCart, Gift, Menu } from 'lucide-react'
import { Helmet } from 'react-helmet-async'
import { useTranslation } from 'react-i18next'
import { organizationEntity, getAuthorByContentType, generateBreadcrumb } from '../data/schemaEntities'
import { LEARN_PAGES } from './LearnNavigation'
import { ShareButton } from './animate-ui/components/community/share-button'
import Footer from './Footer'
import ReadingProgress from './ReadingProgress'

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
  const [activeMenu, setActiveMenu] = useState<'learn' | 'blog' | null>(null)
  const [activeCategory, setActiveCategory] = useState<string | null>(null)
  const [hoveredPage, setHoveredPage] = useState<{ name: string; link: string; image: string } | null>(null)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const menuTimeoutRef = useRef<NodeJS.Timeout | null>(null)

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

  const handleMouseEnter = (menu: 'learn' | 'blog') => {
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
            {/* LEARN Menu */}
            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter('learn')}
              onMouseLeave={handleMouseLeave}
            >
              <button className="flex items-center gap-1 px-3 py-2 text-sm font-medium hover:bg-primary-600 rounded-lg transition">
                <BookOpen className="h-4 w-4" />
                Learn
                <ChevronDown className="h-3 w-3" />
              </button>
            </div>

            {/* BLOG Menu */}
            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter('blog')}
              onMouseLeave={handleMouseLeave}
            >
              <button className="flex items-center gap-1 px-3 py-2 text-sm font-medium hover:bg-primary-600 rounded-lg transition">
                <FileText className="h-4 w-4" />
                Blog
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

      {/* LEARN Mega Menu */}
      {activeMenu === 'learn' && (
        <div
          className="fixed left-1/2 -translate-x-1/2 top-14 pt-2 z-50"
          onMouseEnter={() => handleMouseEnter('learn')}
          onMouseLeave={handleMouseLeave}
        >
          <div className="w-[95vw] max-w-[1000px] bg-white shadow-2xl rounded-xl border border-neutral-200 overflow-hidden">
            <div className="grid grid-cols-12">
              {/* Left: All Categories */}
              <div className="col-span-3 bg-neutral-50 p-3 border-r border-neutral-100 max-h-[60vh] overflow-y-auto">
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
                          // Auto-select a random page from this category
                          const pages = category.pages;
                          if (pages.length > 0) {
                            const randomPage = pages[Math.floor(Math.random() * pages.length)];
                            setHoveredPage(randomPage);
                          } else {
                            setHoveredPage(null);
                          }
                        }}
                        className={`w-full flex items-center justify-between py-1.5 px-2 rounded-lg text-xs font-medium transition-all ${
                          activeCategory === key ? 'bg-primary-100 text-primary-700' : 'text-neutral-700 hover:bg-neutral-100'
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

              {/* Middle: Pages of selected category */}
              <div className="col-span-5 p-3 border-r border-neutral-100 max-h-[60vh] overflow-y-auto">
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
                              hoveredPage?.link === page.link ? 'bg-primary-50 text-primary-700' : 'text-neutral-600 hover:bg-neutral-50'
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
                    Hover a category
                  </div>
                )}
              </div>

              {/* Right: Hero Image Preview - Show random pages when no selection */}
              <div className="col-span-4 p-3 bg-neutral-50">
                {hoveredPage ? (
                  <div className="h-full flex flex-col">
                    <img
                      src={hoveredPage.image}
                      alt={hoveredPage.name}
                      className="w-full aspect-[4/3] object-cover rounded-lg mb-2"
                      loading="lazy"
                    />
                    <h5 className="text-sm font-semibold text-neutral-800 mb-1">{hoveredPage.name}</h5>
                    <a
                      href={hoveredPage.link}
                      onClick={handleNavigation(hoveredPage.link)}
                      className="text-xs text-primary-600 hover:text-primary-700 font-medium"
                    >
                      Read more →
                    </a>
                  </div>
                ) : (
                  <div className="h-full">
                    <h5 className="text-xs font-bold text-neutral-500 uppercase tracking-wider mb-2">Featured Articles</h5>
                    <div className="grid grid-cols-2 gap-2">
                      {randomPages.slice(0, 4).map((page, idx) => (
                        <a
                          key={idx}
                          href={page.link}
                          onClick={handleNavigation(page.link)}
                          className="group"
                        >
                          <img
                            src={page.image}
                            alt={page.name}
                            className="w-full aspect-[4/3] object-cover rounded-lg mb-1 group-hover:ring-2 ring-primary-500 transition"
                            loading="lazy"
                          />
                          <p className="text-xs text-neutral-700 font-medium truncate group-hover:text-primary-600">{page.name}</p>
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* BLOG Mega Menu */}
      {activeMenu === 'blog' && (
        <div
          className="fixed right-[calc(50%-500px+200px)] top-14 pt-2 z-50 max-[1100px]:right-4"
          onMouseEnter={() => handleMouseEnter('blog')}
          onMouseLeave={handleMouseLeave}
        >
          <div className="w-[280px] bg-white shadow-2xl rounded-xl border border-neutral-200 overflow-hidden">
            <div className="p-4">
              <h3 className="text-xs font-bold text-primary-600 uppercase tracking-wider mb-3 flex items-center gap-2">
                <FileText className="h-4 w-4" />
                Blog Categories
              </h3>
              <ul className="space-y-1">
                <li>
                  <a
                    href="/blog"
                    onClick={handleNavigation('/blog')}
                    className="flex items-center gap-2 py-2 px-3 rounded-lg text-sm text-neutral-700 hover:bg-primary-50 hover:text-primary-700 transition"
                  >
                    <FileText className="h-4 w-4 text-primary-500" />
                    All Articles
                  </a>
                </li>
                <li>
                  <a
                    href="/blog?category=Newsletter"
                    onClick={handleNavigation('/blog?category=Newsletter')}
                    className="flex items-center gap-2 py-2 px-3 rounded-lg text-sm bg-primary-50 text-primary-700 hover:bg-primary-100 transition"
                  >
                    <Mail className="h-4 w-4 text-primary-500" />
                    Newsletter
                  </a>
                </li>
                <li>
                  <a
                    href="/blog?category=Packaging"
                    onClick={handleNavigation('/blog?category=Packaging')}
                    className="flex items-center gap-2 py-2 px-3 rounded-lg text-sm text-neutral-700 hover:bg-primary-50 hover:text-primary-700 transition"
                  >
                    <Package className="h-4 w-4 text-primary-500" />
                    Packaging Tips
                  </a>
                </li>
                <li>
                  <a
                    href="/blog?category=Sustainability"
                    onClick={handleNavigation('/blog?category=Sustainability')}
                    className="flex items-center gap-2 py-2 px-3 rounded-lg text-sm text-neutral-700 hover:bg-primary-50 hover:text-primary-700 transition"
                  >
                    <Leaf className="h-4 w-4 text-primary-500" />
                    Sustainability
                  </a>
                </li>
                <li>
                  <a
                    href="/blog?category=Industry"
                    onClick={handleNavigation('/blog?category=Industry')}
                    className="flex items-center gap-2 py-2 px-3 rounded-lg text-sm text-neutral-700 hover:bg-primary-50 hover:text-primary-700 transition"
                  >
                    <Factory className="h-4 w-4 text-primary-500" />
                    Industry News
                  </a>
                </li>
              </ul>
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
  heroImage?: string
  heroImageAlt?: string
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
  schemaType?: 'Article' | 'Product' | 'FAQPage' | 'WebPage'
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
  ctaButtonUrl = '/#contact'
}) => {
  const { t } = useTranslation()
  const navigate = useNavigate()
  const location = useLocation()
  const [isPending, startTransition] = useTransition()
  
  // Generate canonical URL from current path if not provided
  const effectiveCanonicalUrl = canonicalUrl || `https://achievepack.com${location.pathname}`
  
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
    { name: 'Home', url: 'https://achievepack.com/' },
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
        "@id": "https://achievepack.com/#website",
        "url": "https://achievepack.com",
        "name": "Achieve Pack",
        "description": "Sustainable eco-friendly packaging solutions",
        "publisher": { "@id": "https://achievepack.com/#organization" },
        "inLanguage": "en-US"
      },
      
      // WebPage Entity
      {
        "@type": "WebPage",
        "@id": `${effectiveCanonicalUrl}#webpage`,
        "url": effectiveCanonicalUrl,
        "name": title,
        "description": description,
        "isPartOf": { "@id": "https://achievepack.com/#website" },
        "about": { "@id": "https://achievepack.com/#organization" },
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
        "publisher": { "@id": "https://achievepack.com/#organization" },
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

  return (
    <>
      <Helmet>
        <title>{title} | Achieve Pack - Eco-Friendly Packaging Solutions</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords.join(', ')} />
        {/* Always set canonical URL */}
        <link rel="canonical" href={effectiveCanonicalUrl} />
        
        {/* Open Graph */}
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={ogImage.startsWith('http') ? ogImage : `https://achievepack.com${ogImage}`} />
        <meta property="og:url" content={effectiveCanonicalUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Achieve Pack" />
        <meta property="og:locale" content="en_US" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={ogImage.startsWith('http') ? ogImage : `https://achievepack.com${ogImage}`} />
        
        {/* Enhanced Schema.org JSON-LD with E-E-A-T Optimization */}
        <script type="application/ld+json">
          {JSON.stringify(enhancedSchema)}
        </script>
        {faqSchema && (
          <script type="application/ld+json">
            {JSON.stringify(faqSchema)}
          </script>
        )}
      </Helmet>

      <div className="min-h-screen bg-neutral-50 pt-14">
        {/* Header with LEARN and BLOG Mega Menus */}
        <SEOPageHeader />
        
        {/* Reading Progress Bar */}
        <ReadingProgress />

        {/* Hero Section */}
        <section className="bg-primary-700 text-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8 items-center py-12 md:py-0">
              {/* Hero Content - Left */}
              <div className="md:py-16">
                <div className="rounded-xl p-6 md:p-8" style={{ backgroundColor: 'rgba(21, 128, 61, 0.85)', backdropFilter: 'blur(8px)' }}>
                  {heroLogo && (
                    <div className="mb-4">
                      <img 
                        src={heroLogo} 
                        alt={heroLogoAlt || 'Eco Certification'} 
                        className="h-16 w-auto bg-white rounded-lg p-2 shadow-md"
                      />
                    </div>
                  )}
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
              {/* Hero Image - Right, 400px fixed height with rounded corners */}
              {heroImage && (
                <div className="hidden md:flex justify-end items-center h-[400px]">
                  <img 
                    src={heroImage} 
                    alt={heroImageAlt || heroTitle}
                    className="h-full w-auto object-cover rounded-xl shadow-2xl"
                    loading="lazy"
                  />
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Quick Summary - Answer First Approach */}
        <section className="py-8 bg-primary-50 border-b border-primary-100">
          <div className="max-w-7xl mx-auto px-4">
            <div className="bg-white rounded-xl p-6 shadow-sm border-l-4 border-primary-500">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                <div className="flex-1">
                  <h2 className="text-sm font-semibold text-primary-600 uppercase tracking-wide mb-2">{t('seoPages.quickSummary')}</h2>
                  <p className="text-lg text-neutral-700 leading-relaxed">{introSummary}</p>
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
            <main className="lg:col-span-3 space-y-8">
              {/* Content Sections */}
              {sections.map((section) => (
                <section 
                  key={section.id} 
                  id={section.id}
                  className={section.id === 'ai-search' 
                    ? 'sr-only' 
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
              {relatedLinks && relatedLinks.length > 0 && (
                <section className="bg-neutral-100 rounded-xl p-6 md:p-8">
                  <h2 className="text-xl font-bold text-neutral-900 mb-4">{t('seoPages.relatedResources')}</h2>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {relatedLinks.map((link, idx) => (
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
