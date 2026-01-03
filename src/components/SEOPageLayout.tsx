import React, { useState, useTransition, useEffect, useRef } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import { ArrowLeft, Leaf, Mail, Phone, Calendar, X, BookOpen, FileText, ChevronDown, ChevronRight, Search, Package, Factory, ShoppingBag, Users, Award, HelpCircle, Zap, Beaker, Globe, Layers, ArrowRight } from 'lucide-react'
import { Helmet } from 'react-helmet-async'
import { useTranslation } from 'react-i18next'
import { organizationEntity, getAuthorByContentType, generateBreadcrumb } from '../data/schemaEntities'
import { LEARN_PAGES } from './LearnNavigation'
import SocialShareButtons from './SocialShareButtons'

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
  const menuTimeoutRef = useRef<NodeJS.Timeout | null>(null)

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
    <header className="bg-primary-700 text-white sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-14">
          {/* Logo + Back */}
          <div className="flex items-center gap-4">
            <Link to="/" className="flex items-center gap-2 hover:opacity-80 transition">
              <ArrowLeft className="h-4 w-4" />
              <Leaf className="h-5 w-5 text-primary-300" />
              <span className="font-bold text-sm">Achieve Pack</span>
            </Link>
          </div>

          {/* Nav Items */}
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

            {/* Contact */}
            <a
              href="https://calendly.com/30-min-free-packaging-consultancy"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 px-3 py-2 text-sm font-medium bg-white text-primary-700 rounded-lg hover:bg-primary-50 transition ml-2"
            >
              <Calendar className="h-4 w-4" />
              Book Meeting
            </a>
          </nav>
        </div>
      </div>

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
                        onMouseEnter={() => { setActiveCategory(key); setHoveredPage(null); }}
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

              {/* Right: Hero Image Preview */}
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
                  <div className="h-full flex items-center justify-center text-neutral-400 text-sm">
                    <div className="text-center">
                      <Search className="h-8 w-8 mx-auto mb-2 opacity-50" />
                      Hover a page
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
          className="fixed right-4 top-14 pt-2 z-50"
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
                <li>
                  <a
                    href="/blog?category=Newsletter"
                    onClick={handleNavigation('/blog?category=Newsletter')}
                    className="flex items-center gap-2 py-2 px-3 rounded-lg text-sm text-neutral-700 hover:bg-primary-50 hover:text-primary-700 transition"
                  >
                    <Mail className="h-4 w-4 text-primary-500" />
                    Newsletter
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

      <div className="min-h-screen bg-neutral-50">
        {/* Header with LEARN and BLOG Mega Menus */}
        <SEOPageHeader />

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
                  <SocialShareButtons 
                    url={effectiveCanonicalUrl}
                    title={title}
                    description={description}
                  />
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
                  {sections.map((section) => (
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
                  className="bg-white rounded-xl p-6 md:p-8 shadow-sm border border-neutral-100"
                >
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
        <footer className="bg-primary-800 text-white pt-12 pb-8 rounded-t-[3rem] mt-8">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 mb-6">
              {/* Brand */}
              <div className="col-span-2 sm:col-span-1">
                <div className="flex items-center gap-2 mb-3">
                  <Leaf className="h-5 w-5 text-primary-500" />
                  <span className="text-base font-bold">Achieve Pack</span>
                </div>
                <p className="text-neutral-400 text-xs mb-3">
                  {t('seoPages.footer.tagline')}
                </p>
                {/* Social Media Icons */}
                <div className="flex space-x-2 mb-2">
                  <a href="https://www.instagram.com/pouch_eco/" target="_blank" rel="noopener noreferrer" className="text-neutral-400 hover:text-primary-500 transition-colors">
                    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                  </a>
                  <a href="https://api.whatsapp.com/send/?phone=85269704411" target="_blank" rel="noopener noreferrer" className="text-neutral-400 hover:text-green-500 transition-colors">
                    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                  </a>
                  <a href="https://www.linkedin.com/company/achieve-pack/" target="_blank" rel="noopener noreferrer" className="text-neutral-400 hover:text-blue-500 transition-colors">
                    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                  </a>
                  <a href="https://www.youtube.com/watch?v=3LZh1vHGAS0" target="_blank" rel="noopener noreferrer" className="text-neutral-400 hover:text-red-500 transition-colors">
                    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
                  </a>
                </div>
              </div>
              
              {/* Products */}
              <div>
                <h4 className="font-semibold text-sm mb-2">{t('seoPages.footer.products')}</h4>
                <ul className="space-y-1 text-xs text-neutral-400">
                  <li><Link to="/packaging/stand-up-pouches" className="hover:text-primary-400">{t('seoPages.footer.links.standUpPouches')}</Link></li>
                  <li><Link to="/packaging/flat-bottom-bags" className="hover:text-primary-400">{t('seoPages.footer.links.flatBottomBags')}</Link></li>
                  <li><Link to="/packaging/spout-pouches" className="hover:text-primary-400">{t('seoPages.footer.links.spoutPouches')}</Link></li>
                  <li><Link to="/packaging/vacuum-pouches" className="hover:text-primary-400">{t('seoPages.footer.links.vacuumPouches')}</Link></li>
                  <li><Link to="/packaging/flat-pouches" className="hover:text-primary-400">{t('seoPages.footer.links.flatPouches')}</Link></li>
                  <li><Link to="/packaging/side-gusset-bags" className="hover:text-primary-400">{t('seoPages.footer.links.sideGussetBags')}</Link></li>
                  <li><Link to="/packaging/custom-boxes" className="hover:text-primary-400">Custom Boxes</Link></li>
                  <li><Link to="/products/labels-and-stickers" className="hover:text-primary-400">Labels & Stickers</Link></li>
                  <li><Link to="/products/lab-bags" className="hover:text-primary-400">Lab Bags</Link></li>
                </ul>
              </div>
              
              {/* Materials */}
              <div>
                <h4 className="font-semibold text-sm mb-2">{t('seoPages.footer.materials')}</h4>
                <ul className="space-y-1 text-xs text-neutral-400">
                  <li><Link to="/materials/home-compostable" className="hover:text-primary-400">{t('seoPages.footer.links.homeCompostable')}</Link></li>
                  <li><Link to="/materials/industrial-compostable" className="hover:text-primary-400">{t('seoPages.footer.links.industrialCompostable')}</Link></li>
                  <li><Link to="/materials/recyclable-mono-pe" className="hover:text-primary-400">{t('seoPages.footer.links.recyclableMonoPE')}</Link></li>
                  <li><Link to="/materials/recyclable-mono-pp" className="hover:text-primary-400">{t('seoPages.footer.links.recyclableMonoPP')}</Link></li>
                  <li><Link to="/materials/bio-pe" className="hover:text-primary-400">{t('seoPages.footer.links.bioPE')}</Link></li>
                  <li><Link to="/materials/pcr" className="hover:text-primary-400">{t('seoPages.footer.links.pcrRecycled')}</Link></li>
                </ul>
              </div>
              
              {/* Options */}
              <div>
                <h4 className="font-semibold text-sm mb-2">{t('seoPages.footer.options')}</h4>
                <ul className="space-y-1 text-xs text-neutral-400">
                  <li><Link to="/printing/digital-printing" className="hover:text-primary-400">{t('seoPages.footer.links.digitalPrinting')}</Link></li>
                  <li><Link to="/printing/plate-printing" className="hover:text-primary-400">{t('seoPages.footer.links.platePrinting')}</Link></li>
                  <li><Link to="/features/reclosure-options" className="hover:text-primary-400">{t('seoPages.footer.links.reclosureOptions')}</Link></li>
                  <li><Link to="/features/surface-finish" className="hover:text-primary-400">{t('seoPages.footer.links.surfaceFinishes')}</Link></li>
                  <li><Link to="/features/barrier-options" className="hover:text-primary-400">{t('seoPages.footer.links.barrierOptions')}</Link></li>
                </ul>
              </div>
              
              {/* Industries */}
              <div>
                <h4 className="font-semibold text-sm mb-2">{t('seoPages.footer.industries')}</h4>
                <ul className="space-y-1 text-xs text-neutral-400">
                  <li><Link to="/industry/coffee-tea" className="hover:text-primary-400">{t('seoPages.footer.links.coffeeTea')}</Link></li>
                  <li><Link to="/industry/snacks-food" className="hover:text-primary-400">{t('seoPages.footer.links.snacksFood')}</Link></li>
                  <li><Link to="/industry/pet-food" className="hover:text-primary-400">{t('seoPages.footer.links.petFood')}</Link></li>
                  <li><Link to="/industry/supplements-powders" className="hover:text-primary-400">{t('seoPages.footer.links.supplements')}</Link></li>
                  <li><Link to="/industry/baby-food" className="hover:text-primary-400">{t('seoPages.footer.links.babyFood')}</Link></li>
                  <li><Link to="/industry/frozen-food" className="hover:text-primary-400">{t('seoPages.footer.links.frozenFood')}</Link></li>
                </ul>
              </div>
            </div>

            {/* Second Row */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 mb-6">
              {/* Case Studies */}
              <div>
                <h4 className="font-semibold text-sm mb-2">{t('footer.caseStudies')}</h4>
                <ul className="space-y-1 text-xs text-neutral-400">
                  <li><Link to="/case-studies/coffee-roastery" className="hover:text-primary-400">{t('footer.links.coffeeRoastery')}</Link></li>
                  <li><Link to="/case-studies/tea-brand" className="hover:text-primary-400">{t('footer.links.teaBrand')}</Link></li>
                  <li><Link to="/case-studies/superfood-brand" className="hover:text-primary-400">{t('footer.links.superfood')}</Link></li>
                  <li><Link to="/case-studies/pet-treats" className="hover:text-primary-400">{t('footer.links.petTreats')}</Link></li>
                  <li><Link to="/case-studies/chocolate-brand" className="hover:text-primary-400">{t('footer.links.chocolate')}</Link></li>
                  <li><Link to="/case-studies/bakery" className="hover:text-primary-400">{t('footer.links.bakery')}</Link></li>
                </ul>
              </div>

              {/* USA */}
              <div>
                <h4 className="font-semibold text-sm mb-2">🇺🇸 USA</h4>
                <ul className="space-y-1 text-xs text-neutral-400">
                  <li><Link to="/usa/compostable-packaging" className="hover:text-primary-400">Compostable Hub</Link></li>
                  <li><Link to="/usa/coffee-packaging" className="hover:text-primary-400">Coffee Packaging</Link></li>
                  <li><Link to="/usa/snacks-packaging" className="hover:text-primary-400">Snacks Packaging</Link></li>
                  <li><Link to="/usa/labeling-guide" className="hover:text-primary-400">Labeling Guide</Link></li>
                </ul>
              </div>

              {/* Product Guides */}
              <div>
                <h4 className="font-semibold text-sm mb-2">Product Guides</h4>
                <ul className="space-y-1 text-xs text-neutral-400">
                  <li><Link to="/products/compostable-coffee-bags" className="hover:text-primary-400">Compostable Coffee Bags</Link></li>
                  <li><Link to="/products/compostable-stand-up-pouches" className="hover:text-primary-400">Compostable Stand-Up</Link></li>
                  <li><Link to="/products/recyclable-mono-material-pouches" className="hover:text-primary-400">Recyclable Mono-Material</Link></li>
                  <li><Link to="/products/coffee-bags-degassing-valve" className="hover:text-primary-400">Coffee Degassing Valve</Link></li>
                  <li><Link to="/products/low-moq-packaging" className="hover:text-primary-400">Low MOQ Packaging</Link></li>
                </ul>
              </div>

              {/* Solutions */}
              <div>
                <h4 className="font-semibold text-sm mb-2">Solutions</h4>
                <ul className="space-y-1 text-xs text-neutral-400">
                  <li><Link to="/solutions/startup-founder" className="hover:text-primary-400">For Startups</Link></li>
                  <li><Link to="/solutions/ecommerce-brand" className="hover:text-primary-400">For E-commerce</Link></li>
                  <li><Link to="/solutions/coffee-roaster" className="hover:text-primary-400">For Coffee Roasters</Link></li>
                  <li><Link to="/solutions/artisan-producer" className="hover:text-primary-400">For Artisan Makers</Link></li>
                  <li><Link to="/solutions/snack-brand-manager" className="hover:text-primary-400">For Snack Brands</Link></li>
                  <li><Link to="/solutions/corporate-sustainability" className="hover:text-primary-400">For Corporate ESG</Link></li>
                  <li><Link to="/solutions/food-manufacturer" className="hover:text-primary-400">For Food Manufacturers</Link></li>
                  <li><Link to="/solutions/product-developer" className="hover:text-primary-400">For Product Developers</Link></li>
                </ul>
              </div>

              {/* Topics */}
              <div>
                <h4 className="font-semibold text-sm mb-2">Topics</h4>
                <ul className="space-y-1 text-xs text-neutral-400">
                  <li><Link to="/topics/eco-friendly-food-packaging" className="hover:text-primary-400">Eco Food Packaging</Link></li>
                  <li><Link to="/topics/dtc-sustainable-packaging" className="hover:text-primary-400">DTC Packaging</Link></li>
                  <li><Link to="/topics/green-coffee-materials" className="hover:text-primary-400">Coffee Materials</Link></li>
                  <li><Link to="/topics/digital-printing-eco-packaging" className="hover:text-primary-400">Digital Printing</Link></li>
                  <li><Link to="/topics/recyclable-snack-packaging" className="hover:text-primary-400">Recyclable Snacks</Link></li>
                  <li><Link to="/topics/eco-packaging-regulations" className="hover:text-primary-400">Regulations Guide</Link></li>
                  <li><Link to="/topics/compostable-pouch-suppliers" className="hover:text-primary-400">Compostable Suppliers</Link></li>
                  <li><Link to="/topics/low-moq-startup-packaging" className="hover:text-primary-400">Low MOQ Startup</Link></li>
                  <li><Link to="/topics/compostable-baby-food-bags" className="hover:text-primary-400">Baby Food Bags</Link></li>
                  <li><Link to="/topics/custom-printed-sustainable-pouches" className="hover:text-primary-400">Custom Printed Pouches</Link></li>
                </ul>
              </div>

              {/* Function */}
              <div>
                <h4 className="font-semibold text-sm mb-2">Function</h4>
                <ul className="space-y-1 text-xs text-neutral-400">
                  <li><Link to="/function/microwave-steam-bags" className="hover:text-primary-400">Microwave Steam Bags</Link></li>
                  <li><Link to="/function/carbon-neutral-bags" className="hover:text-primary-400">Carbon Neutral Bags</Link></li>
                  <li><Link to="/function/spout-pouches-juice" className="hover:text-primary-400">Spout Pouches Juice</Link></li>
                  <li><Link to="/function/child-resistant-bags" className="hover:text-primary-400">Child-Resistant Bags</Link></li>
                  <li><Link to="/function/pre-zippered-rollstock" className="hover:text-primary-400">Pre-Zippered Rollstock</Link></li>
                  <li><Link to="/function/digital-printed-retort-bags" className="hover:text-primary-400">Digital Printed Retort</Link></li>
                  <li><Link to="/function/rice-paper-bags" className="hover:text-primary-400">Rice Paper Bags</Link></li>
                  <li><Link to="/function/pva-water-soluble-bags" className="hover:text-primary-400">PVA Water-Soluble Bags</Link></li>
                </ul>
              </div>

              {/* Lab Bag */}
              <div>
                <h4 className="font-semibold text-sm mb-2">Lab Bag</h4>
                <ul className="space-y-1 text-xs text-neutral-400">
                  <li><Link to="/lab/lateral-filter-bags" className="hover:text-primary-400">Lateral Filter Bags</Link></li>
                  <li><Link to="/lab/wire-closure-bags" className="hover:text-primary-400">Wire Closure Bags</Link></li>
                  <li><Link to="/lab/lab-blender-bags" className="hover:text-primary-400">Lab Blender Bags</Link></li>
                </ul>
              </div>

              {/* Structure Specs */}
              <div>
                <h4 className="font-semibold text-sm mb-2">Structure Specs</h4>
                <ul className="space-y-1 text-xs text-neutral-400">
                  <li><Link to="/spec/pcr-pet-duplex-clear" className="hover:text-primary-400">PCR Structures</Link></li>
                  <li><Link to="/spec/mono-pe-duplex-clear" className="hover:text-primary-400">Mono PE/PP</Link></li>
                  <li><Link to="/spec/bio-cello-duplex-clear" className="hover:text-primary-400">Compostable Bio</Link></li>
                  <li><Link to="/spec/biope-pet-duplex-clear" className="hover:text-primary-400">Bio-PE Structures</Link></li>
                </ul>
              </div>
              
              {/* Support */}
              <div>
                <h4 className="font-semibold text-sm mb-2">{t('footer.support')}</h4>
                <ul className="space-y-1 text-xs text-neutral-400">
                  <li><Link to="/support/faqs" className="hover:text-primary-400">{t('footer.links.faqs')}</Link></li>
                  <li><Link to="/support/lead-time" className="hover:text-primary-400">{t('footer.links.leadTime')}</Link></li>
                  <li><Link to="/knowledge/workflow" className="hover:text-primary-400">{t('footer.links.workflow')}</Link></li>
                  <li><Link to="/company/about" className="hover:text-primary-400">{t('footer.links.aboutUs')}</Link></li>
                  <li><Link to="/company/certificates" className="hover:text-primary-400">{t('footer.links.certificates')}</Link></li>
                  <li><Link to="/company/factory-tour" className="hover:text-primary-400">{t('footer.links.factoryTour')}</Link></li>
                </ul>
              </div>

              {/* Contact */}
              <div>
                <h4 className="font-semibold text-sm mb-2">{t('footer.contactUs')}</h4>
                <ul className="space-y-1.5 text-xs text-neutral-400">
                  <li className="flex items-center gap-1">
                    <Mail className="h-3 w-3 text-primary-500" />
                    <a href="mailto:ryan@achievepack.com" className="hover:text-primary-400">ryan@achievepack.com</a>
                  </li>
                  <li className="flex items-center gap-1">
                    <Phone className="h-3 w-3 text-primary-500" />
                    <a href="tel:+85269704411" className="hover:text-primary-400">+852 6970 4411</a>
                  </li>
                  <li className="flex items-center gap-1 mt-2">
                    <Calendar className="h-3 w-3 text-primary-500" />
                    <a href="https://calendly.com/30-min-free-packaging-consultancy" target="_blank" rel="noopener noreferrer" className="hover:text-primary-400">Book Meeting</a>
                  </li>
                </ul>
                <a 
                  href="https://climate.stripe.com/WPsfbU" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="mt-3 flex items-center gap-1 bg-neutral-800 hover:bg-neutral-700 px-2 py-1.5 rounded transition-colors w-fit"
                >
                  <svg className="h-3 w-3 text-green-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9 9-4.03 9-9-4.03-9-9-9z"/>
                    <path d="M12 8v8M8 12h8"/>
                  </svg>
                  <span className="text-xs text-neutral-300">1% for Climate</span>
                </a>
              </div>

              {/* Blog & Store */}
              <div>
                <h4 className="font-semibold text-sm mb-2">Blog & Store</h4>
                <ul className="space-y-1 text-xs text-neutral-400">
                  <li><Link to="/blog" className="hover:text-primary-400">All Articles</Link></li>
                  <li><Link to="/store" className="hover:text-primary-400">Online Store</Link></li>
                </ul>
              </div>

              {/* Knowledge */}
              <div>
                <h4 className="font-semibold text-sm mb-2">Knowledge</h4>
                <ul className="space-y-1 text-xs text-neutral-400">
                  <li><Link to="/knowledge/pouch-sizing" className="hover:text-primary-400">Pouch Sizing Guide</Link></li>
                  <li><Link to="/knowledge/size-guide" className="hover:text-primary-400">Size Reference</Link></li>
                  <li><Link to="/knowledge/all-options" className="hover:text-primary-400">All Options</Link></li>
                  <li><Link to="/knowledge/printing-types" className="hover:text-primary-400">Printing Types</Link></li>
                </ul>
              </div>
            </div>

            {/* Certification Logos & SSL Badge */}
            <div className="border-t border-neutral-800 mt-6 pt-4">
              <div className="flex flex-col items-center gap-4 mb-4">
                {/* BPI & B Corp Logos */}
                <img src="/bpi-bcorp-logos.svg" alt="BPI & B Corp Certified" className="h-12 w-auto" loading="lazy" decoding="async" />
                
                {/* Payment Logos */}
                <img src="/pay-logos.svg" alt="Payment Methods" className="h-8 w-auto" loading="lazy" decoding="async" />
                
                {/* SSL Secure Badge */}
                <div className="flex items-center gap-1.5 bg-neutral-800 px-3 py-1.5 rounded">
                  <svg className="h-4 w-4 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                  <span className="text-xs text-neutral-300 font-medium">SSL 100% Secure Transactions</span>
                </div>
              </div>
            </div>
            
            <div className="border-t border-neutral-800 pt-4 flex flex-col md:flex-row justify-between items-center gap-2">
              <p className="text-neutral-500 text-xs">
                © {new Date().getFullYear()} Achieve Pack. {t('seoPages.footer.copyright')}
              </p>
              <div className="flex gap-4 text-xs text-neutral-500">
                <Link to="/terms" className="hover:text-primary-400">{t('seoPages.footer.termsConditions')}</Link>
                <Link to="/privacy" className="hover:text-primary-400">{t('seoPages.footer.privacyPolicy')}</Link>
                <Link to="/shipping" className="hover:text-primary-400">{t('seoPages.footer.shippingPolicy')}</Link>
              </div>
            </div>
          </div>
        </footer>

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
