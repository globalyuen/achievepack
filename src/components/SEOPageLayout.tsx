import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft, Leaf, Mail, Phone, Calendar, Globe } from 'lucide-react'
import { Helmet } from 'react-helmet-async'
import { useTranslation } from 'react-i18next'

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
  introSummary,
  sections,
  faqs,
  tables,
  schemaType = 'WebPage',
  relatedLinks,
  ctaTitle = 'Ready to Get Started?',
  ctaDescription = 'Contact our packaging experts for a free consultation and quote.',
  ctaButtonText = 'Get Free Quote',
  ctaButtonUrl = '/#contact'
}) => {
  const { t, i18n } = useTranslation()

  // Scroll to top when navigating
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const languages = [
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'fr', name: 'Français', flag: '🇫🇷' },
    { code: 'es', name: 'Español', flag: '🇪🇸' },
    { code: 'zh-TW', name: '繁體中文', flag: '🇨🇳' }
  ]

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng)
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

  // Generate Article/WebPage Schema
  const pageSchema = {
    "@context": "https://schema.org",
    "@type": schemaType,
    "headline": title,
    "description": description,
    "image": heroImage || ogImage,
    "author": {
      "@type": "Organization",
      "name": "Achieve Pack",
      "url": "https://achievepack.com"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Achieve Pack",
      "logo": {
        "@type": "ImageObject",
        "url": "https://achievepack.com/imgs/logo.webp"
      }
    },
    "datePublished": "2025-01-01",
    "dateModified": new Date().toISOString().split('T')[0]
  }

  return (
    <>
      <Helmet>
        <title>{title} | Achieve Pack - Eco-Friendly Packaging Solutions</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords.join(', ')} />
        {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}
        
        {/* Open Graph */}
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={ogImage} />
        <meta property="og:type" content="website" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        
        {/* Schema.org JSON-LD */}
        <script type="application/ld+json">
          {JSON.stringify(pageSchema)}
        </script>
        {faqSchema && (
          <script type="application/ld+json">
            {JSON.stringify(faqSchema)}
          </script>
        )}
      </Helmet>

      <div className="min-h-screen bg-neutral-50">
        {/* Header */}
        <header className="bg-white border-b sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
            <Link to="/" className="flex items-center gap-2 text-neutral-600 hover:text-primary-600 transition">
              <ArrowLeft className="h-5 w-5" /> {t('seoPages.backToHome')}
            </Link>
            <div className="flex items-center gap-4">
              {/* Language Switcher */}
              <div className="relative group">
                <button className="flex items-center gap-2 px-3 py-2 text-sm text-neutral-600 hover:text-primary-600 transition rounded-lg hover:bg-neutral-50">
                  <Globe className="h-4 w-4" />
                  <span className="hidden sm:inline">{languages.find(l => l.code === i18n.language)?.name || 'English'}</span>
                  <span className="sm:hidden">{languages.find(l => l.code === i18n.language)?.flag || '🇺🇸'}</span>
                </button>
                <div className="absolute right-0 mt-1 w-40 bg-white rounded-lg shadow-lg border border-neutral-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => changeLanguage(lang.code)}
                      className={`w-full text-left px-4 py-2 text-sm hover:bg-primary-50 flex items-center gap-2 first:rounded-t-lg last:rounded-b-lg ${i18n.language === lang.code ? 'bg-primary-50 text-primary-700' : 'text-neutral-700'}`}
                    >
                      <span>{lang.flag}</span>
                      <span>{lang.name}</span>
                    </button>
                  ))}
                </div>
              </div>
              <Link to="/" className="flex items-center gap-2">
                <img src="/achieve-pack-logo.png" alt="Achieve Pack" className="h-10 w-auto" />
              </Link>
            </div>
          </div>
        </header>

        {/* Hero Section */}
        <section className="bg-primary-700 text-white relative overflow-hidden h-auto min-h-[400px] md:h-[600px]">
          {/* Full Banner Hero Image - 600px fixed height, centered */}
          {heroImage && (
            <div className="absolute inset-0 flex justify-center">
              {/* Left gradient overlay */}
              <div className="absolute left-0 top-0 bottom-0 w-1/3 z-10" style={{
                background: 'linear-gradient(to right, rgb(21 128 61) 0%, rgb(21 128 61 / 0.8) 40%, transparent 100%)'
              }} />
              {/* Right gradient overlay */}
              <div className="absolute right-0 top-0 bottom-0 w-1/3 z-10" style={{
                background: 'linear-gradient(to left, rgb(21 128 61) 0%, rgb(21 128 61 / 0.8) 40%, transparent 100%)'
              }} />
              <img 
                src={heroImage} 
                alt={heroImageAlt || heroTitle}
                className="h-full w-auto object-cover"
                loading="lazy"
              />
            </div>
          )}
          {/* Hero Content - overlay on top */}
          <div className="absolute inset-0 z-20 flex items-center">
            <div className="max-w-7xl mx-auto px-4 w-full">
              <div className="max-w-xl bg-primary-800/80 backdrop-blur-sm rounded-xl p-6 md:p-8">
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
          </div>
        </section>

        {/* Quick Summary - Answer First Approach */}
        <section className="py-8 bg-primary-50 border-b border-primary-100">
          <div className="max-w-7xl mx-auto px-4">
            <div className="bg-white rounded-xl p-6 shadow-sm border-l-4 border-primary-500">
              <h2 className="text-sm font-semibold text-primary-600 uppercase tracking-wide mb-2">{t('seoPages.quickSummary')}</h2>
              <p className="text-lg text-neutral-700 leading-relaxed">{introSummary}</p>
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
                        onClick={scrollToTop}
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

              {/* CTA Section */}
              <section className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-xl p-8 text-white text-center">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">{ctaTitle}</h2>
                <p className="text-primary-100 mb-6 max-w-2xl mx-auto">{ctaDescription}</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="https://calendly.com/30-min-free-packaging-consultancy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 bg-white text-[#15803d] px-6 py-3 rounded-lg font-semibold hover:bg-green-50 transition"
                  >
                    <Calendar className="h-4 w-4" />
                    Book Meeting
                  </a>
                  <a
                    href="mailto:ryan@achievepack.com"
                    className="inline-flex items-center justify-center gap-2 border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition"
                  >
                    <Mail className="h-4 w-4" />
                    {t('seoPages.emailUs')}
                  </a>
                </div>
              </section>
            </main>
          </div>
        </div>

        {/* Footer */}
        <footer className="bg-neutral-900 text-white py-12">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid md:grid-cols-4 gap-8 mb-8">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <Leaf className="h-6 w-6 text-primary-500" />
                  <span className="text-lg font-bold">Achieve Pack</span>
                </div>
                <p className="text-neutral-400 text-sm">
                  {t('seoPages.footer.tagline')}
                </p>
              </div>
              
              <div>
                <h4 className="font-semibold mb-4">{t('seoPages.footer.products')}</h4>
                <ul className="space-y-2 text-sm text-neutral-400">
                  <li><Link to="/packaging/stand-up-pouches" onClick={scrollToTop} className="hover:text-primary-400">{t('seoPages.footer.links.standUpPouches')}</Link></li>
                  <li><Link to="/packaging/flat-bottom-bags" onClick={scrollToTop} className="hover:text-primary-400">{t('seoPages.footer.links.flatBottomBags')}</Link></li>
                  <li><Link to="/packaging/spout-pouches" onClick={scrollToTop} className="hover:text-primary-400">{t('seoPages.footer.links.spoutPouches')}</Link></li>
                  <li><Link to="/packaging/vacuum-pouches" onClick={scrollToTop} className="hover:text-primary-400">{t('seoPages.footer.links.vacuumPouches')}</Link></li>
                  <li><Link to="/packaging/flat-pouches" onClick={scrollToTop} className="hover:text-primary-400">{t('seoPages.footer.links.flatPouches')}</Link></li>
                  <li><Link to="/packaging/side-gusset-bags" onClick={scrollToTop} className="hover:text-primary-400">{t('seoPages.footer.links.sideGussetBags')}</Link></li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold mb-4">{t('seoPages.footer.materials')}</h4>
                <ul className="space-y-2 text-sm text-neutral-400">
                  <li><Link to="/materials/compostable" onClick={scrollToTop} className="hover:text-primary-400">{t('seoPages.footer.links.compostable')}</Link></li>
                  <li><Link to="/materials/home-compostable" onClick={scrollToTop} className="hover:text-primary-400">{t('seoPages.footer.links.homeCompostable')}</Link></li>
                  <li><Link to="/materials/industrial-compostable" onClick={scrollToTop} className="hover:text-primary-400">{t('seoPages.footer.links.industrialCompostable')}</Link></li>
                  <li><Link to="/materials/recyclable-mono-pe" onClick={scrollToTop} className="hover:text-primary-400">{t('seoPages.footer.links.recyclableMonoPE')}</Link></li>
                  <li><Link to="/materials/bio-pe" onClick={scrollToTop} className="hover:text-primary-400">{t('seoPages.footer.links.bioPE')}</Link></li>
                  <li><Link to="/materials/pcr" onClick={scrollToTop} className="hover:text-primary-400">{t('seoPages.footer.links.pcrRecycled')}</Link></li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold mb-4">{t('seoPages.footer.options')}</h4>
                <ul className="space-y-2 text-sm text-neutral-400">
                  <li><Link to="/printing/digital-printing" onClick={scrollToTop} className="hover:text-primary-400">{t('seoPages.footer.links.digitalPrinting')}</Link></li>
                  <li><Link to="/printing/plate-printing" onClick={scrollToTop} className="hover:text-primary-400">{t('seoPages.footer.links.platePrinting')}</Link></li>
                  <li><Link to="/features/reclosure-options" onClick={scrollToTop} className="hover:text-primary-400">{t('seoPages.footer.links.reclosureOptions')}</Link></li>
                  <li><Link to="/features/surface-finish" onClick={scrollToTop} className="hover:text-primary-400">{t('seoPages.footer.links.surfaceFinishes')}</Link></li>
                  <li><Link to="/features/barrier-options" onClick={scrollToTop} className="hover:text-primary-400">{t('seoPages.footer.links.barrierOptions')}</Link></li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold mb-4">{t('seoPages.footer.industries')}</h4>
                <ul className="space-y-2 text-sm text-neutral-400">
                  <li><Link to="/industry/coffee-tea" onClick={scrollToTop} className="hover:text-primary-400">{t('seoPages.footer.links.coffeeTea')}</Link></li>
                  <li><Link to="/industry/snacks-food" onClick={scrollToTop} className="hover:text-primary-400">{t('seoPages.footer.links.snacksFood')}</Link></li>
                  <li><Link to="/industry/pet-food" onClick={scrollToTop} className="hover:text-primary-400">{t('seoPages.footer.links.petFood')}</Link></li>
                  <li><Link to="/industry/supplements-powders" onClick={scrollToTop} className="hover:text-primary-400">{t('seoPages.footer.links.supplements')}</Link></li>
                  <li><Link to="/industry/baby-food" onClick={scrollToTop} className="hover:text-primary-400">{t('seoPages.footer.links.babyFood')}</Link></li>
                  <li><Link to="/industry/frozen-food" onClick={scrollToTop} className="hover:text-primary-400">{t('seoPages.footer.links.frozenFood')}</Link></li>
                  <li><Link to="/industry/sauces-condiments" onClick={scrollToTop} className="hover:text-primary-400">{t('seoPages.footer.links.saucesCondiments')}</Link></li>
                </ul>
              </div>
            </div>
            
            <div className="border-t border-neutral-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-neutral-500 text-sm">
                © {new Date().getFullYear()} Achieve Pack. {t('seoPages.footer.copyright')}
              </p>
              <div className="flex gap-6 text-sm text-neutral-500">
                <Link to="/terms" onClick={scrollToTop} className="hover:text-primary-400">{t('seoPages.footer.termsConditions')}</Link>
                <Link to="/privacy" onClick={scrollToTop} className="hover:text-primary-400">{t('seoPages.footer.privacyPolicy')}</Link>
                <Link to="/shipping" onClick={scrollToTop} className="hover:text-primary-400">{t('seoPages.footer.shippingPolicy')}</Link>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}

export default SEOPageLayout
