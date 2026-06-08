import React, { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { Leaf, CheckCircle, Award, Calendar, Shield, Recycle, Factory, Package, X, ChevronRight, ChevronDown, Sprout, Globe, Target, HelpCircle, ArrowRight, TrendingDown, BarChart3, FileCheck, Zap, ClipboardCheck, Layers } from 'lucide-react'
import { useCalendly } from '../../contexts/CalendlyContext'
import Footer from '../../components/Footer'
import { SEOPageHeader } from '../../components/SEOPageLayout'
import SocialShareButtons from '../../components/SocialShareButtons'

// Image paths - using imgs/biope/what folder
const IMAGES = {
  hero: '/imgs/biope/what/a_hero_bio_pe_article_2212774.webp',
  whatIsBioPE: '/imgs/biope/what/a_what_is_bio_pe_2246523.webp',
  performanceProfile: '/imgs/biope/what/a_performance_profile_2304225.webp',
  infrastructureComparison: '/imgs/biope/what/a_infrastructure_comparison_5912497.webp',
  carbonFootprint: '/imgs/biope/what/a_carbon_footprint_reduction_8608223.webp',
  recyclability: '/imgs/biope/what/a_recyclability_circular_9842658.webp',
  ecoDigital: '/imgs/biope/what/a_eco_digital_solutions_5958619.webp',
  procurementChecklist: '/imgs/biope/what/a_procurement_checklist_9621956.webp',
  skuImplementation: '/imgs/biope/what/a_sku_implementation_2737996.webp',
  nextSteps: '/imgs/biope/what/a_next_steps_cta_7469630.webp',
}

// Clickable Image Component with lightbox
const ClickableImage: React.FC<{
  src: string
  alt: string
  className?: string
  caption?: string
}> = ({ src, alt, className = '', caption }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <figure className="cursor-pointer group" onClick={() => setIsOpen(true)}>
        <img 
          src={src} 
          alt={alt} 
          className={`${className} transition-transform group-hover:scale-[1.02]`}
          loading="lazy"
        />
        {caption && (
          <figcaption className="text-xs text-neutral-500 mt-2 text-center">{caption}</figcaption>
        )}
        <div className="text-xs text-primary-600 text-center mt-1 opacity-0 group-hover:opacity-100 transition-opacity">Click to enlarge</div>
      </figure>

      {isOpen && (
        <div 
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setIsOpen(false)}
        >
          <button 
            className="absolute top-4 right-4 text-white hover:text-neutral-300"
            onClick={() => setIsOpen(false)}
          >
            <X className="h-8 w-8" />
          </button>
          <img 
            src={src} 
            alt={alt} 
            className="max-w-full max-h-[90vh] object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </>
  )
}

// Alternating Image-Text Row Component
const ImageTextRow: React.FC<{
  image: string
  imageAlt: string
  imageCaption?: string
  children: React.ReactNode
  imageLeft?: boolean
}> = ({ image, imageAlt, imageCaption, children, imageLeft = true }) => {
  return (
    <div className={`grid md:grid-cols-2 gap-8 items-center`}>
      {imageLeft ? (
        <>
          <div className="order-2 md:order-1">
            <ClickableImage 
              src={image} 
              alt={imageAlt}
              className="w-full rounded-xl shadow-lg"
              caption={imageCaption}
            />
          </div>
          <div className="order-1 md:order-2">{children}</div>
        </>
      ) : (
        <>
          <div className="order-1 md:order-1">{children}</div>
          <div className="order-2 md:order-2">
            <ClickableImage 
              src={image} 
              alt={imageAlt}
              className="w-full rounded-xl shadow-lg"
              caption={imageCaption}
            />
          </div>
        </>
      )}
    </div>
  )
}

const WhatIsBioPEPage: React.FC = () => {
  const { openCalendly } = useCalendly()
  const { t } = useTranslation()

  // FAQ Data mapped from translations
  const faqs = [
    {
      question: t('seoPages.pages.whatIsBioPE.faq1Question'),
      answer: t('seoPages.pages.whatIsBioPE.faq1Answer')
    },
    {
      question: t('seoPages.pages.whatIsBioPE.faq2Question'),
      answer: t('seoPages.pages.whatIsBioPE.faq2Answer')
    },
    {
      question: t('seoPages.pages.whatIsBioPE.faq3Question'),
      answer: t('seoPages.pages.whatIsBioPE.faq3Answer')
    },
    {
      question: t('seoPages.pages.whatIsBioPE.faq4Question'),
      answer: t('seoPages.pages.whatIsBioPE.faq4Answer')
    },
    {
      question: t('seoPages.pages.whatIsBioPE.faq5Question'),
      answer: t('seoPages.pages.whatIsBioPE.faq5Answer')
    }
  ]

  return (
    <>
      <Helmet>
        <title>{t('seoPages.pages.whatIsBioPE.title')}</title>
        <meta name="description" content={t('seoPages.pages.whatIsBioPE.description')} />
        <link rel="canonical" href="https://achievepack.com/biope/what-is-bio-pe" />
        <meta name="keywords" content={t('seoPages.pages.whatIsBioPE.keywords')} />
        
        {/* Open Graph */}
        <meta property="og:title" content={t('seoPages.pages.whatIsBioPE.heroTitle')} />
        <meta property="og:description" content={t('seoPages.pages.whatIsBioPE.description')} />
        <meta property="og:image" content="https://achievepack.com/imgs/biope/what/a_hero_bio_pe_article_2212774.webp" />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://achievepack.com/biope/what-is-bio-pe" />
        
        {/* Article Schema with E-E-A-T signals */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": t('seoPages.pages.whatIsBioPE.heroTitle'),
            "description": t('seoPages.pages.whatIsBioPE.description'),
            "image": "https://achievepack.com/imgs/biope/what/a_hero_bio_pe_article_2212774.webp",
            "author": {
              "@type": "Organization",
              "name": "Achieve Pack",
              "url": "https://achievepack.com",
              "description": "BRC-certified sustainable packaging manufacturer specializing in bio-based and recyclable solutions since 2011"
            },
            "publisher": {
              "@type": "Organization",
              "name": "Achieve Pack",
              "logo": {
                "@type": "ImageObject",
                "url": "https://achievepack.com/imgs/logo/achievepack-logo.png"
              }
            },
            "datePublished": "2026-01-03",
            "dateModified": new Date().toISOString().split('T')[0],
            "mainEntityOfPage": "https://achievepack.com/biope/what-is-bio-pe",
            "about": [
              { "@type": "Thing", "name": "Bio-based Polyethylene" },
              { "@type": "Thing", "name": "Sustainable Packaging" },
              { "@type": "Thing", "name": "Carbon Footprint Reduction" }
            ]
          })}
        </script>

        {/* FAQ Schema for AEO */}
        <script type="application/ld+json">
          {JSON.stringify({
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
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-neutral-50">
        {/* SEO Page Header */}
        <SEOPageHeader />

        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-emerald-800 to-teal-900 text-white py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <span className="bg-emerald-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {t('seoPages.pages.whatIsBioPE.badge')}
                  </span>
                  <span className="text-emerald-300 text-sm">{t('seoPages.pages.whatIsBioPE.readTime')}</span>
                </div>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
                  {t('seoPages.pages.whatIsBioPE.heroTitle')}
                </h1>
                <p className="text-lg md:text-xl text-emerald-100 mb-6">
                  {t('seoPages.pages.whatIsBioPE.heroSubtitle')}
                </p>
                <p className="text-emerald-200 mb-8">
                  {t('seoPages.pages.whatIsBioPE.heroDescription')}
                </p>
                <div className="flex flex-wrap gap-4">
                  <button
                    onClick={openCalendly}
                    className="flex items-center gap-2 bg-white text-emerald-800 px-6 py-3 rounded-lg font-semibold hover:bg-emerald-50 transition shadow-lg"
                  >
                    <Calendar className="h-5 w-5" />
                    {t('seoPages.pages.whatIsBioPE.btnConsultation')}
                  </button>
                  <Link
                    to="/store?category=sample"
                    className="flex items-center gap-2 bg-emerald-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-emerald-500 transition"
                  >
                    <Package className="h-5 w-5" />
                    {t('seoPages.pages.whatIsBioPE.btnSamplePack')}
                  </Link>
                  <Link
                    to="/store"
                    className="flex items-center gap-2 border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition"
                  >
                    {t('seoPages.pages.whatIsBioPE.btnBrowseStore')}
                  </Link>
                </div>
              </div>
              <div className="hidden md:block">
                <ClickableImage
                  src={IMAGES.hero}
                  alt={t('seoPages.pages.whatIsBioPE.title')}
                  className="rounded-2xl shadow-2xl w-full"
                  caption={t('seoPages.pages.whatIsBioPE.sec1ImageCaption')}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Breadcrumb */}
        <nav className="bg-white border-b" aria-label="Breadcrumb">
          <div className="max-w-5xl mx-auto px-4 py-3">
            <ol className="flex items-center gap-2 text-sm text-neutral-600">
              <li><Link to="/" className="hover:text-primary-600">{t('seoPages.pages.whatIsBioPE.breadcrumbHome')}</Link></li>
              <li><ChevronRight className="h-4 w-4" /></li>
              <li><Link to="/learn" className="hover:text-primary-600">{t('seoPages.pages.whatIsBioPE.breadcrumbLearn')}</Link></li>
              <li><ChevronRight className="h-4 w-4" /></li>
              <li className="text-neutral-900 font-medium">{t('seoPages.pages.whatIsBioPE.breadcrumbPage')}</li>
            </ol>
          </div>
        </nav>

        {/* Main Content with Sidebar */}
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Sidebar Navigation */}
            <aside className="hidden lg:block lg:col-span-1">
              <div className="sticky top-24 max-h-[calc(100vh-120px)] overflow-y-auto bg-white rounded-xl shadow-sm border border-neutral-100 p-4">
                <h3 className="text-sm font-semibold text-neutral-500 uppercase tracking-wide mb-4">
                  {t('seoPages.contents')}
                </h3>
                <nav className="space-y-1">
                  <a href="#key-takeaways" className="block px-3 py-2 text-sm text-neutral-600 hover:bg-primary-50 hover:text-primary-700 rounded-lg transition">{t('seoPages.pages.whatIsBioPE.takeawaysTitle')}</a>
                  <a href="#what-is-biope" className="block px-3 py-2 text-sm text-neutral-600 hover:bg-primary-50 hover:text-primary-700 rounded-lg transition">{t('seoPages.pages.whatIsBioPE.sec1Title')}</a>
                  <a href="#performance-profile" className="block px-3 py-2 text-sm text-neutral-600 hover:bg-primary-50 hover:text-primary-700 rounded-lg transition">{t('seoPages.pages.whatIsBioPE.sec2Title')}</a>
                  <a href="#infrastructure" className="block px-3 py-2 text-sm text-neutral-600 hover:bg-primary-50 hover:text-primary-700 rounded-lg transition">{t('seoPages.pages.whatIsBioPE.sec3Title')}</a>
                  <a href="#carbon-footprint" className="block px-3 py-2 text-sm text-neutral-600 hover:bg-primary-50 hover:text-primary-700 rounded-lg transition">{t('seoPages.pages.whatIsBioPE.sec4Title')}</a>
                  <a href="#recyclability" className="block px-3 py-2 text-sm text-neutral-600 hover:bg-primary-50 hover:text-primary-700 rounded-lg transition">{t('seoPages.pages.whatIsBioPE.sec5Title')}</a>
                  <a href="#eco-digital" className="block px-3 py-2 text-sm text-neutral-600 hover:bg-primary-50 hover:text-primary-700 rounded-lg transition">{t('seoPages.pages.whatIsBioPE.sec6Title')}</a>
                  <a href="#procurement" className="block px-3 py-2 text-sm text-neutral-600 hover:bg-primary-50 hover:text-primary-700 rounded-lg transition">{t('seoPages.pages.whatIsBioPE.sec7Title')}</a>
                  <a href="#sku-strategy" className="block px-3 py-2 text-sm text-neutral-600 hover:bg-primary-50 hover:text-primary-700 rounded-lg transition">{t('seoPages.pages.whatIsBioPE.sec8Title')}</a>
                  <a href="#faq" className="block px-3 py-2 text-sm text-neutral-600 hover:bg-primary-50 hover:text-primary-700 rounded-lg transition">{t('seoPages.pages.whatIsBioPE.faqTitle')}</a>
                </nav>
              </div>
            </aside>

            {/* Main Content Area */}
            <main className="lg:col-span-3 space-y-8">
              
              {/* Key Takeaways */}
              <section id="key-takeaways" className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-xl p-6 md:p-8 border border-emerald-200">
                <div className="flex items-start justify-between">
                  <div>
                    <h2 className="text-xl font-bold text-emerald-800 mb-4 flex items-center gap-2">
                      <Target className="h-6 w-6" />
                      {t('seoPages.pages.whatIsBioPE.takeawaysTitle')}
                    </h2>
                    <ul className="space-y-2 text-emerald-900">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                        <span dangerouslySetInnerHTML={{ __html: t('seoPages.pages.whatIsBioPE.takeaway1') }} />
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                        <span dangerouslySetInnerHTML={{ __html: t('seoPages.pages.whatIsBioPE.takeaway2') }} />
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                        <span dangerouslySetInnerHTML={{ __html: t('seoPages.pages.whatIsBioPE.takeaway3') }} />
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                        <span dangerouslySetInnerHTML={{ __html: t('seoPages.pages.whatIsBioPE.takeaway4') }} />
                      </li>
                    </ul>
                  </div>
                  <SocialShareButtons 
                    url="https://achievepack.com/biope/what-is-bio-pe"
                    title={t('seoPages.pages.whatIsBioPE.heroTitle')}
                  />
                </div>
              </section>

              {/* Section 1: What is Bio-PE? */}
              <section id="what-is-biope" className="bg-white rounded-xl p-6 md:p-8 shadow-sm border border-neutral-100">
                <ImageTextRow
                  image={IMAGES.whatIsBioPE}
                  imageAlt={t('seoPages.pages.whatIsBioPE.sec1ImageCaption')}
                  imageCaption={t('seoPages.pages.whatIsBioPE.sec1ImageCaption')}
                  imageLeft={true}
                >
                  <div>
                    <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-4 flex items-center gap-3">
                      <Leaf className="h-7 w-7 text-emerald-600" />
                      {t('seoPages.pages.whatIsBioPE.sec1Title')}
                    </h2>
                    <div className="text-neutral-700 space-y-4">
                      <p dangerouslySetInnerHTML={{ __html: t('seoPages.pages.whatIsBioPE.sec1P1') }} />
                      <p>{t('seoPages.pages.whatIsBioPE.sec1P2')}</p>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                          <span><strong>{t('seoPages.pages.whatIsBioPE.sec1F1Title')}</strong> {t('seoPages.pages.whatIsBioPE.sec1F1Desc')}</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                          <span><strong>{t('seoPages.pages.whatIsBioPE.sec1F2Title')}</strong> {t('seoPages.pages.whatIsBioPE.sec1F2Desc')}</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                          <span><strong>{t('seoPages.pages.whatIsBioPE.sec1F3Title')}</strong> {t('seoPages.pages.whatIsBioPE.sec1F3Desc')}</span>
                        </li>
                      </ul>
                      <div className="bg-emerald-50 border-l-4 border-emerald-500 p-4 rounded-r-lg">
                        <p className="text-emerald-800 font-medium">
                          <strong>{t('seoPages.pages.whatIsBioPE.sec1AdvantageTitle')}</strong> {t('seoPages.pages.whatIsBioPE.sec1AdvantageDesc')}
                        </p>
                      </div>
                    </div>
                  </div>
                </ImageTextRow>
              </section>

              {/* Section 2: Performance Profile */}
              <section id="performance-profile" className="bg-white rounded-xl p-6 md:p-8 shadow-sm border border-neutral-100">
                <ImageTextRow
                  image={IMAGES.performanceProfile}
                  imageAlt={t('seoPages.pages.whatIsBioPE.sec2ImageCaption')}
                  imageCaption={t('seoPages.pages.whatIsBioPE.sec2ImageCaption')}
                  imageLeft={false}
                >
                  <div>
                    <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-4 flex items-center gap-3">
                      <BarChart3 className="h-7 w-7 text-blue-600" />
                      {t('seoPages.pages.whatIsBioPE.sec2Title')}
                    </h2>
                    <div className="text-neutral-700 space-y-4">
                      <p dangerouslySetInnerHTML={{ __html: t('seoPages.pages.whatIsBioPE.sec2P1') }} />
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                          <h4 className="font-semibold text-blue-800 mb-2">✓ {t('seoPages.pages.whatIsBioPE.sec2F1')}</h4>
                          <p className="text-sm text-blue-700">{t('seoPages.pages.whatIsBioPE.sec2F1Desc')}</p>
                        </div>
                        <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                          <h4 className="font-semibold text-blue-800 mb-2">✓ {t('seoPages.pages.whatIsBioPE.sec2F2')}</h4>
                          <p className="text-sm text-blue-700">{t('seoPages.pages.whatIsBioPE.sec2F2Desc')}</p>
                        </div>
                        <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                          <h4 className="font-semibold text-blue-800 mb-2">✓ {t('seoPages.pages.whatIsBioPE.sec2F3')}</h4>
                          <p className="text-sm text-blue-700">{t('seoPages.pages.whatIsBioPE.sec2F3Desc')}</p>
                        </div>
                        <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                          <h4 className="font-semibold text-blue-800 mb-2">✓ {t('seoPages.pages.whatIsBioPE.sec2F4')}</h4>
                          <p className="text-sm text-blue-700">{t('seoPages.pages.whatIsBioPE.sec2F4Desc')}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </ImageTextRow>
              </section>

              {/* Section 3: End-of-Life Infrastructure */}
              <section id="infrastructure" className="bg-white rounded-xl p-6 md:p-8 shadow-sm border border-neutral-100">
                <ImageTextRow
                  image={IMAGES.infrastructureComparison}
                  imageAlt={t('seoPages.pages.whatIsBioPE.sec3ImageCaption')}
                  imageCaption={t('seoPages.pages.whatIsBioPE.sec3ImageCaption')}
                  imageLeft={true}
                >
                  <div>
                    <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-4 flex items-center gap-3">
                      <Factory className="h-7 w-7 text-amber-600" />
                      {t('seoPages.pages.whatIsBioPE.sec3Title')}
                    </h2>
                    <div className="text-neutral-700 space-y-4">
                      <p dangerouslySetInnerHTML={{ __html: t('seoPages.pages.whatIsBioPE.sec3P1') }} />
                      <div className="space-y-3">
                        <div className="bg-emerald-50 p-4 rounded-lg border border-emerald-200">
                          <h4 className="font-semibold text-emerald-800 mb-2">✓ {t('seoPages.pages.whatIsBioPE.sec3F1')}</h4>
                          <p className="text-sm text-emerald-700">
                            {t('seoPages.pages.whatIsBioPE.sec3F1Desc')}
                          </p>
                        </div>
                        <div className="bg-amber-50 p-4 rounded-lg border border-amber-200">
                          <h4 className="font-semibold text-amber-800 mb-2">⚠️ {t('seoPages.pages.whatIsBioPE.sec3F2')}</h4>
                          <p className="text-sm text-amber-700">
                            {t('seoPages.pages.whatIsBioPE.sec3F2Desc')}
                          </p>
                        </div>
                      </div>
                      <p className="text-sm text-neutral-600 italic">
                        {t('seoPages.pages.whatIsBioPE.sec3Note')}
                      </p>
                    </div>
                  </div>
                </ImageTextRow>
              </section>

              {/* Section 4: Carbon Footprint Reduction */}
              <section id="carbon-footprint" className="bg-white rounded-xl p-6 md:p-8 shadow-sm border border-neutral-100">
                <ImageTextRow
                  image={IMAGES.carbonFootprint}
                  imageAlt={t('seoPages.pages.whatIsBioPE.sec4ImageCaption')}
                  imageCaption={t('seoPages.pages.whatIsBioPE.sec4ImageCaption')}
                  imageLeft={false}
                >
                  <div>
                    <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-4 flex items-center gap-3">
                      <TrendingDown className="h-7 w-7 text-green-600" />
                      {t('seoPages.pages.whatIsBioPE.sec4Title')}
                    </h2>
                    <div className="text-neutral-700 space-y-4">
                      <p dangerouslySetInnerHTML={{ __html: t('seoPages.pages.whatIsBioPE.sec4P1') }} />
                      <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-4 rounded-lg border border-green-200">
                        <h4 className="font-semibold text-green-800 mb-2 flex items-center gap-2">
                          <Sprout className="h-5 w-5" />
                          {t('seoPages.pages.whatIsBioPE.sec4LcaTitle')}
                        </h4>
                        <p className="text-green-700" dangerouslySetInnerHTML={{ __html: t('seoPages.pages.whatIsBioPE.sec4LcaDesc') }} />
                      </div>
                      <p className="text-sm text-neutral-600">
                        {t('seoPages.pages.whatIsBioPE.sec4Note')}
                      </p>
                    </div>
                  </div>
                </ImageTextRow>
              </section>

              {/* Section 5: Recyclability & Circular Economy */}
              <section id="recyclability" className="bg-white rounded-xl p-6 md:p-8 shadow-sm border border-neutral-100">
                <ImageTextRow
                  image={IMAGES.recyclability}
                  imageAlt={t('seoPages.pages.whatIsBioPE.sec5ImageCaption')}
                  imageCaption={t('seoPages.pages.whatIsBioPE.sec5ImageCaption')}
                  imageLeft={true}
                >
                  <div>
                    <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-4 flex items-center gap-3">
                      <Recycle className="h-7 w-7 text-blue-600" />
                      {t('seoPages.pages.whatIsBioPE.sec5Title')}
                    </h2>
                    <div className="text-neutral-700 space-y-4">
                      <p dangerouslySetInnerHTML={{ __html: t('seoPages.pages.whatIsBioPE.sec5P1') }} />
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                          <span><strong>{t('seoPages.pages.whatIsBioPE.sec5F1')}</strong> {t('seoPages.pages.whatIsBioPE.sec5F1Desc')}</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                          <span><strong>{t('seoPages.pages.whatIsBioPE.sec5F2')}</strong> {t('seoPages.pages.whatIsBioPE.sec5F2Desc')}</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                          <span><strong>{t('seoPages.pages.whatIsBioPE.sec5F3')}</strong> {t('seoPages.pages.whatIsBioPE.sec5F3Desc')}</span>
                        </li>
                      </ul>
                      <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg">
                        <p className="text-blue-800 font-medium">
                          <strong>{t('seoPages.pages.whatIsBioPE.sec5NoteTitle')}</strong> {t('seoPages.pages.whatIsBioPE.sec5NoteDesc')}
                        </p>
                      </div>
                    </div>
                  </div>
                </ImageTextRow>
              </section>

              {/* Section 6: Eco Digital Solutions */}
              <section id="eco-digital" className="bg-white rounded-xl p-6 md:p-8 shadow-sm border border-neutral-100">
                <ImageTextRow
                  image={IMAGES.ecoDigital}
                  imageAlt={t('seoPages.pages.whatIsBioPE.sec6ImageCaption')}
                  imageCaption={t('seoPages.pages.whatIsBioPE.sec6ImageCaption')}
                  imageLeft={false}
                >
                  <div>
                    <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-4 flex items-center gap-3">
                      <Zap className="h-7 w-7 text-primary-600" />
                      {t('seoPages.pages.whatIsBioPE.sec6Title')}
                    </h2>
                    <div className="text-neutral-700 space-y-4">
                      <p>{t('seoPages.pages.whatIsBioPE.sec6P1')}</p>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-primary-600 mt-0.5 flex-shrink-0" />
                          <span><strong>{t('seoPages.pages.whatIsBioPE.sec6F1')}</strong> {t('seoPages.pages.whatIsBioPE.sec6F1Desc')}</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-primary-600 mt-0.5 flex-shrink-0" />
                          <span><strong>{t('seoPages.pages.whatIsBioPE.sec6F2')}</strong> {t('seoPages.pages.whatIsBioPE.sec6F2Desc')}</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-primary-600 mt-0.5 flex-shrink-0" />
                          <span><strong>{t('seoPages.pages.whatIsBioPE.sec6F3')}</strong> {t('seoPages.pages.whatIsBioPE.sec6F3Desc')}</span>
                        </li>
                      </ul>
                      <div className="bg-primary-50 p-4 rounded-lg border border-primary-200">
                        <p className="text-primary-800 text-sm">
                          <strong>{t('seoPages.pages.whatIsBioPE.sec6Note')}</strong>
                        </p>
                      </div>
                      <Link to="/materials/bio-pe" className="text-primary-600 hover:underline font-medium flex items-center gap-1">
                        {t('seoPages.pages.whatIsBioPE.sec6Link')} <ArrowRight className="h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                </ImageTextRow>
              </section>

              {/* Section 7: Procurement Checklist */}
              <section id="procurement" className="bg-white rounded-xl p-6 md:p-8 shadow-sm border border-neutral-100">
                <ImageTextRow
                  image={IMAGES.procurementChecklist}
                  imageAlt={t('seoPages.pages.whatIsBioPE.sec7ImageCaption')}
                  imageCaption={t('seoPages.pages.whatIsBioPE.sec7ImageCaption')}
                  imageLeft={true}
                >
                  <div>
                    <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-4 flex items-center gap-3">
                      <ClipboardCheck className="h-7 w-7 text-purple-600" />
                      {t('seoPages.pages.whatIsBioPE.sec7Title')}
                    </h2>
                    <div className="text-neutral-700 space-y-4">
                      <p>{t('seoPages.pages.whatIsBioPE.sec7P1')}</p>
                      <ol className="space-y-3">
                        <li className="flex items-start gap-3">
                          <span className="w-6 h-6 bg-purple-100 text-purple-700 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">1</span>
                          <div>
                            <strong>{t('seoPages.pages.whatIsBioPE.sec7Step1Title')}</strong>
                            <p className="text-sm text-neutral-600">{t('seoPages.pages.whatIsBioPE.sec7Step1Desc')}</p>
                          </div>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="w-6 h-6 bg-purple-100 text-purple-700 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">2</span>
                          <div>
                            <strong>{t('seoPages.pages.whatIsBioPE.sec7Step2Title')}</strong>
                            <p className="text-sm text-neutral-600">{t('seoPages.pages.whatIsBioPE.sec7Step2Desc')}</p>
                          </div>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="w-6 h-6 bg-purple-100 text-purple-700 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">3</span>
                          <div>
                            <strong>{t('seoPages.pages.whatIsBioPE.sec7Step3Title')}</strong>
                            <p className="text-sm text-neutral-600">{t('seoPages.pages.whatIsBioPE.sec7Step3Desc')}</p>
                          </div>
                        </li>
                      </ol>
                    </div>
                  </div>
                </ImageTextRow>
              </section>

              {/* Section 8: SKU Implementation Strategy */}
              <section id="sku-strategy" className="bg-white rounded-xl p-6 md:p-8 shadow-sm border border-neutral-100">
                <ImageTextRow
                  image={IMAGES.skuImplementation}
                  imageAlt={t('seoPages.pages.whatIsBioPE.sec8ImageCaption')}
                  imageCaption={t('seoPages.pages.whatIsBioPE.sec8ImageCaption')}
                  imageLeft={false}
                >
                  <div>
                    <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-4 flex items-center gap-3">
                      <Layers className="h-7 w-7 text-teal-600" />
                      {t('seoPages.pages.whatIsBioPE.sec8Title')}
                    </h2>
                    <div className="text-neutral-700 space-y-4">
                      <p dangerouslySetInnerHTML={{ __html: t('seoPages.pages.whatIsBioPE.sec8P1') }} />
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-teal-600 mt-0.5 flex-shrink-0" />
                          <span><strong>{t('seoPages.pages.whatIsBioPE.sec8F1')}</strong> {t('seoPages.pages.whatIsBioPE.sec8F1Desc')}</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-teal-600 mt-0.5 flex-shrink-0" />
                          <span><strong>{t('seoPages.pages.whatIsBioPE.sec8F2')}</strong> {t('seoPages.pages.whatIsBioPE.sec8F2Desc')}</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-teal-600 mt-0.5 flex-shrink-0" />
                          <span><strong>{t('seoPages.pages.whatIsBioPE.sec8F3')}</strong> {t('seoPages.pages.whatIsBioPE.sec8F3Desc')}</span>
                        </li>
                      </ul>
                      <div className="bg-teal-50 border-l-4 border-teal-500 p-4 rounded-r-lg">
                        <p className="text-teal-800 font-medium">
                          <strong>{t('seoPages.pages.whatIsBioPE.sec8NoteTitle')}</strong> {t('seoPages.pages.whatIsBioPE.sec8NoteDesc')}
                        </p>
                      </div>
                    </div>
                  </div>
                </ImageTextRow>
              </section>

              {/* FAQ Section */}
              <section id="faq" className="bg-white rounded-xl p-6 md:p-8 shadow-sm border border-neutral-100">
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                  <HelpCircle className="h-7 w-7 text-blue-600" />
                  {t('seoPages.pages.whatIsBioPE.faqTitle')}
                </h2>
                <div className="space-y-2">
                  {faqs.map((faq, idx) => (
                    <details key={idx} className="group border-b border-neutral-100 last:border-0">
                      <summary className="flex items-center justify-between py-4 cursor-pointer list-none">
                        <span className="font-medium text-neutral-800 pr-4">{faq.question}</span>
                        <ChevronDown className="h-5 w-5 text-neutral-400 group-open:rotate-180 transition-transform flex-shrink-0" />
                      </summary>
                      <div className="pb-4 text-neutral-600">{faq.answer}</div>
                    </details>
                  ))}
                </div>
              </section>

              {/* CTA Section */}
              <section className="bg-gradient-to-r from-emerald-600 to-teal-700 rounded-xl p-8 text-white text-center">
                <ClickableImage
                  src={IMAGES.nextSteps}
                  alt={t('seoPages.pages.whatIsBioPE.ctaSectionCaption')}
                  className="w-full max-w-2xl mx-auto rounded-xl shadow-lg mb-6"
                  caption={t('seoPages.pages.whatIsBioPE.ctaSectionCaption')}
                />
                <h2 className="text-2xl md:text-3xl font-bold mb-4">{t('seoPages.pages.whatIsBioPE.ctaSectionTitle')}</h2>
                <p className="text-emerald-100 mb-6 max-w-2xl mx-auto">
                  {t('seoPages.pages.whatIsBioPE.ctaSectionDesc')}
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button
                    onClick={openCalendly}
                    className="inline-flex items-center justify-center gap-2 bg-white text-emerald-700 px-6 py-3 rounded-lg font-semibold hover:bg-emerald-50 transition shadow-lg"
                  >
                    <Calendar className="h-4 w-4" />
                    {t('seoPages.pages.whatIsBioPE.btnConsultation')}
                  </button>
                  <Link
                    to="/store?category=sample"
                    className="inline-flex items-center justify-center gap-2 bg-emerald-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-emerald-400 transition"
                  >
                    <Package className="h-4 w-4" />
                    {t('seoPages.pages.whatIsBioPE.btnSamplePack')}
                  </Link>
                  <Link
                    to="/store"
                    className="inline-flex items-center justify-center gap-2 border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition"
                  >
                    <ArrowRight className="h-4 w-4" />
                    {t('seoPages.pages.whatIsBioPE.btnBrowseStore')}
                  </Link>
                </div>
              </section>

              {/* AI-Optimized Hidden Content */}
              <div className="sr-only" aria-hidden="true">
                <section data-ai-faq="true" itemScope itemType="https://schema.org/FAQPage">
                  <article itemScope itemType="https://schema.org/Question" itemProp="mainEntity">
                    <h3 itemProp="name">{t('seoPages.pages.whatIsBioPE.aiFaqTitle1')}</h3>
                    <div itemScope itemType="https://schema.org/Answer" itemProp="acceptedAnswer">
                      <p itemProp="text">
                        {t('seoPages.pages.whatIsBioPE.aiFaqAnswer1')}
                      </p>
                    </div>
                  </article>
                  <article itemScope itemType="https://schema.org/Question" itemProp="mainEntity">
                    <h3 itemProp="name">{t('seoPages.pages.whatIsBioPE.aiFaqTitle2')}</h3>
                    <div itemScope itemType="https://schema.org/Answer" itemProp="acceptedAnswer">
                      <p itemProp="text">
                        {t('seoPages.pages.whatIsBioPE.aiFaqAnswer2')}
                      </p>
                    </div>
                  </article>
                  <article itemScope itemType="https://schema.org/Question" itemProp="mainEntity">
                    <h3 itemProp="name">{t('seoPages.pages.whatIsBioPE.aiFaqTitle3')}</h3>
                    <div itemScope itemType="https://schema.org/Answer" itemProp="acceptedAnswer">
                      <p itemProp="text">
                        {t('seoPages.pages.whatIsBioPE.aiFaqAnswer3')}
                      </p>
                    </div>
                  </article>
                </section>
              </div>

            </main>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </>
  )
}

export default WhatIsBioPEPage
