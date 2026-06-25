import React, { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { Leaf, CheckCircle, Award, Calendar, Shield, Recycle, Factory, Package, X, ChevronRight, ChevronDown, Mail, Phone, Sprout, Globe, Building2, Thermometer, Clock, Target, HelpCircle, Home, ArrowRight } from 'lucide-react'
import { useCalendly } from '../../contexts/CalendlyContext'
import Footer from '../../components/Footer'
import { SEOPageHeader } from '../../components/SEOPageLayout'
import SocialShareButtons from '../../components/SocialShareButtons'
import { useTranslation } from 'react-i18next'

// Image paths - using imgs/composting/homevs folder
const IMAGES = {
  hero: '/imgs/composting/homevs/a_blog_hero_banner_compostable_choice_5307332.webp',
  homeVsIndustrial: '/imgs/composting/homevs/a_home_vs_industrial_comparison_5702615.webp',
  homeComposting: '/imgs/composting/homevs/a_home_composting_backyard_7022189.webp',
  industrialFacility: '/imgs/composting/homevs/a_industrial_composting_facility_5871247.webp',
  temperatureChart: '/imgs/composting/homevs/a_temperature_process_control_chart_2705421.webp',
  disposalPathways: '/imgs/composting/homevs/a_packaging_disposal_pathways_8137751.webp',
  feedstockMaterials: '/imgs/composting/homevs/a_feedstock_materials_comparison_3827243.webp',
  certificationMarks: '/imgs/composting/homevs/a_certification_marks_guide_1676643.webp',
  ecoDigitalPortfolio: '/imgs/composting/homevs/a_eco_digital_portfolio_positioning_8968747.webp',
  infrastructureVariation: '/imgs/composting/homevs/a_infrastructure_regional_variation_1268668.webp',
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
          className={`${className} transition-transform group-hover:scale-[1.02] max-w-full`}
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
    <div className={`grid md:grid-cols-2 gap-8 items-center overflow-hidden`}>
      {imageLeft ? (
        <>
          <div className="order-2 md:order-1 max-w-full overflow-hidden">
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
          <div className="order-2 md:order-2 max-w-full overflow-hidden">
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

// FAQ Data
const HomeVsIndustrialCompostPage: React.FC = () => {
  const { t } = useTranslation()
  const { openCalendly } = useCalendly()
  const p = 'seoPages.pages.homeVsIndustrialCompost'

  const renderHtml = (text: string) => {
    return <span dangerouslySetInnerHTML={{ __html: text }} />
  }

  const renderCertificationsVerify = () => {
    const text = t(`${p}.certificationsVerify`)
    const linkTerm = text.includes('認證證書頁面') 
      ? '認證證書頁面' 
      : text.includes('página de certificados') 
      ? 'página de certificados' 
      : text.includes('page des certificats') 
      ? 'page des certificats' 
      : "Achieve Pack's Certificates Page"
    
    const parts = text.split(linkTerm)
    if (parts.length === 2) {
      return (
        <span>
          {parts[0]}
          <Link to="/company/certificates" className="text-primary-600 hover:underline">{linkTerm}</Link>
          {parts[1]}
        </span>
      )
    }
    return <span>{text}</span>
  }

  const faqs = [
    {
      question: t(`${p}.faqQ1`),
      answer: t(`${p}.faqA1`),
    },
    {
      question: t(`${p}.faqQ2`),
      answer: t(`${p}.faqA2`)
    },
    {
      question: t(`${p}.faqQ3`),
      answer: t(`${p}.faqA3`)
    },
    {
      question: t(`${p}.faqQ4`),
      answer: t(`${p}.faqA4`)
    },
    {
      question: t(`${p}.faqQ5`),
      answer: t(`${p}.faqA5`)
    }
  ]

  return (
    <>
      <Helmet>
        <title>{t(`${p}.metaTitle`)}</title>
        <meta name="description" content={t(`${p}.metaDesc`)} />
        <link rel="canonical" href="https://achievepack.com/composting/home-vs-industrial-compostable" />
        <meta name="keywords" content={t(`${p}.metaKeywords`)} />
        
        {/* Open Graph */}
        <meta property="og:title" content={t(`${p}.ogTitle`)} />
        <meta property="og:description" content={t(`${p}.ogDesc`)} />
        <meta property="og:image" content="https://achievepack.com/imgs/composting/homevs/a_blog_hero_banner_compostable_choice_5307332.webp" />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://achievepack.com/composting/home-vs-industrial-compostable" />
        
        {/* Article Schema with E-E-A-T signals */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": t(`${p}.ogTitle`),
            "description": t(`${p}.ogDesc`),
            "image": "https://achievepack.com/imgs/composting/homevs/a_blog_hero_banner_compostable_choice_5307332.webp",
            "author": {
              "@type": "Organization",
              "name": "Achieve Pack",
              "url": "https://achievepack.com",
              "description": t(`${p}.schemaAuthorDesc`)
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
            "mainEntityOfPage": "https://achievepack.com/composting/home-vs-industrial-compostable",
            "about": [
              { "@type": "Thing", "name": t(`${p}.schemaAboutCompostingHome`) },
              { "@type": "Thing", "name": t(`${p}.schemaAboutCompostingIndustrial`) },
              { "@type": "Thing", "name": t(`${p}.schemaAboutCompostingCert`) }
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

      <div className="min-h-screen bg-neutral-50 overflow-x-hidden">
        {/* SEO Page Header */}
        <SEOPageHeader />

        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-green-800 to-green-900 text-white py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {t(`${p}.heroBadge`)}
                  </span>
                  <span className="text-green-300 text-sm">{t(`${p}.heroReadTime`)}</span>
                </div>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
                  {t(`${p}.heroTitle`)}
                </h1>
                <p className="text-lg md:text-xl text-green-100 mb-6">
                  {t(`${p}.heroSubtitle`)}
                </p>
                <p className="text-green-200 mb-8">
                  {t(`${p}.heroDesc`)}
                </p>
                <div className="flex flex-wrap gap-4">
                  <button
                    onClick={openCalendly}
                    className="flex items-center gap-2 bg-white text-green-800 px-6 py-3 rounded-lg font-semibold hover:bg-green-50 transition shadow-lg"
                  >
                    <Calendar className="h-5 w-5" />
                    {t(`${p}.heroConsultationBtn`)}
                  </button>
                  <Link
                    to="/store?category=sample"
                    className="flex items-center gap-2 bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-500 transition"
                  >
                    <Package className="h-5 w-5" />
                    {t(`${p}.heroSampleBtn`)}
                  </Link>
                  <Link
                    to="/store"
                    className="flex items-center gap-2 border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition"
                  >
                    {t(`${p}.heroBrowseBtn`)}
                  </Link>
                </div>
              </div>
              <div className="hidden md:block">
                <ClickableImage
                  src={IMAGES.hero}
                  alt={t(`${p}.heroTitle`)}
                  className="rounded-2xl shadow-2xl w-full"
                  caption={t(`${p}.heroCaption`)}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Breadcrumb */}
        <nav className="bg-white border-b" aria-label="Breadcrumb">
          <div className="max-w-5xl mx-auto px-4 py-3">
            <ol className="flex items-center gap-2 text-sm text-neutral-600">
              <li><Link to="/" className="hover:text-primary-600">{t(`${p}.breadcrumbHome`)}</Link></li>
              <li><ChevronRight className="h-4 w-4" /></li>
              <li><Link to="/learn" className="hover:text-primary-600">{t(`${p}.breadcrumbLearn`)}</Link></li>
              <li><ChevronRight className="h-4 w-4" /></li>
              <li className="text-neutral-900 font-medium">{t(`${p}.breadcrumbCurrent`)}</li>
            </ol>
          </div>
        </nav>

        {/* Main Content with Sidebar */}
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Sidebar Navigation */}
            <aside className="hidden lg:block lg:col-span-1">
              <div className="sticky top-24 max-h-[calc(100vh-120px)] overflow-y-auto bg-white rounded-xl shadow-sm border border-neutral-100 p-4">
                <h3 className="text-sm font-semibold text-neutral-500 uppercase tracking-wide mb-4">{t(`${p}.sidebarContents`)}</h3>
                <nav className="space-y-1">
                  <a href="#key-takeaways" className="block px-3 py-2 text-sm text-neutral-600 hover:bg-primary-50 hover:text-primary-700 rounded-lg transition">{t(`${p}.sidebarKeyTakeaways`)}</a>
                  <a href="#the-fundamental-split" className="block px-3 py-2 text-sm text-neutral-600 hover:bg-primary-50 hover:text-primary-700 rounded-lg transition">{t(`${p}.sidebarFundamentalSplit`)}</a>
                  <a href="#home-compostable" className="block px-3 py-2 text-sm text-neutral-600 hover:bg-primary-50 hover:text-primary-700 rounded-lg transition">{t(`${p}.sidebarHomeCompostable`)}</a>
                  <a href="#industrial-compostable" className="block px-3 py-2 text-sm text-neutral-600 hover:bg-primary-50 hover:text-primary-700 rounded-lg transition">{t(`${p}.sidebarIndustrialCompostable`)}</a>
                  <a href="#temperature-control" className="block px-3 py-2 text-sm text-neutral-600 hover:bg-primary-50 hover:text-primary-700 rounded-lg transition">{t(`${p}.sidebarTemperature`)}</a>
                  <a href="#disposal-risk" className="block px-3 py-2 text-sm text-neutral-600 hover:bg-primary-50 hover:text-primary-700 rounded-lg transition">{t(`${p}.sidebarDisposal`)}</a>
                  <a href="#materials-comparison" className="block px-3 py-2 text-sm text-neutral-600 hover:bg-primary-50 hover:text-primary-700 rounded-lg transition">{t(`${p}.sidebarMaterials`)}</a>
                  <a href="#certifications" className="block px-3 py-2 text-sm text-neutral-600 hover:bg-primary-50 hover:text-primary-700 rounded-lg transition">{t(`${p}.sidebarCertifications`)}</a>
                  <a href="#achievepack-solutions" className="block px-3 py-2 text-sm text-neutral-600 hover:bg-primary-50 hover:text-primary-700 rounded-lg transition">{t(`${p}.sidebarAchievepack`)}</a>
                  <a href="#regional-strategy" className="block px-3 py-2 text-sm text-neutral-600 hover:bg-primary-50 hover:text-primary-700 rounded-lg transition">{t(`${p}.sidebarRegional`)}</a>
                  <a href="#faq" className="block px-3 py-2 text-sm text-neutral-600 hover:bg-primary-50 hover:text-primary-700 rounded-lg transition">{t(`${p}.sidebarFaq`)}</a>
                </nav>
              </div>
            </aside>

            {/* Main Content Area */}
            <main className="lg:col-span-3 space-y-8 overflow-hidden">
              
              {/* Key Takeaways */}
              <section id="key-takeaways" className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-6 md:p-8 border border-green-200">
                <div className="flex items-start justify-between">
                  <div>
                    <h2 className="text-xl font-bold text-green-800 mb-4 flex items-center gap-2">
                      <Target className="h-6 w-6" />
                      {t(`${p}.takeawaysTitle`)}
                    </h2>
                    <ul className="space-y-2 text-green-900">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>{t(`${p}.takeawaysItem1`)}</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>{t(`${p}.takeawaysItem2`)}</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>{t(`${p}.takeawaysItem3`)}</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>{t(`${p}.takeawaysItem4`)}</span>
                      </li>
                    </ul>
                  </div>
                  <SocialShareButtons 
                    url="https://achievepack.com/composting/home-vs-industrial-compostable"
                    title={t(`${p}.takeawaysShareTitle`)}
                  />
                </div>
              </section>

              {/* Section 1: The Fundamental Split */}
              <section id="the-fundamental-split" className="bg-white rounded-xl p-6 md:p-8 shadow-sm border border-neutral-100">
                <ImageTextRow
                  image={IMAGES.homeVsIndustrial}
                  imageAlt={t(`${p}.splitTitle`)}
                  imageCaption={t(`${p}.heroCaption`)}
                  imageLeft={true}
                >
                  <div>
                    <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-4 flex items-center gap-3">
                      <Recycle className="h-7 w-7 text-green-600" />
                      {t(`${p}.splitTitle`)}
                    </h2>
                    <div className="text-neutral-700 space-y-4">
                      <p>
                        {renderHtml(t(`${p}.splitDesc1`))}
                      </p>
                      <p>
                        {t(`${p}.splitDesc2`)}
                      </p>
                      <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-lg">
                        <p className="text-amber-800 font-medium">
                          {renderHtml(t(`${p}.splitCallout`))}
                        </p>
                      </div>
                    </div>
                  </div>
                </ImageTextRow>
              </section>

              {/* Section 2: Home Compostable */}
              <section id="home-compostable" className="bg-white rounded-xl p-6 md:p-8 shadow-sm border border-neutral-100">
                <ImageTextRow
                  image={IMAGES.homeComposting}
                  imageAlt={t(`${p}.homeTitle`)}
                  imageCaption="Home composting operates at ambient temperatures in backyard bins"
                  imageLeft={false}
                >
                  <div>
                    <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-4 flex items-center gap-3">
                      <Home className="h-7 w-7 text-green-600" />
                      {t(`${p}.homeTitle`)}
                    </h2>
                    <div className="text-neutral-700 space-y-4">
                      <p>
                        {t(`${p}.homeIntro`)}
                      </p>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <Thermometer className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                          <span>{renderHtml(t(`${p}.homeTemp`))}</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Clock className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                          <span>{renderHtml(t(`${p}.homeTimeframe`))}</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Award className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                          <span>{renderHtml(t(`${p}.homeCerts`))}</span>
                        </li>
                      </ul>
                      <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                        <p className="text-green-800 text-sm">
                          {renderHtml(t(`${p}.homeBestFor`))}
                        </p>
                      </div>
                    </div>
                  </div>
                </ImageTextRow>
              </section>

              {/* Section 3: Industrial Compostable */}
              <section id="industrial-compostable" className="bg-white rounded-xl p-6 md:p-8 shadow-sm border border-neutral-100">
                <ImageTextRow
                  image={IMAGES.industrialFacility}
                  imageAlt={t(`${p}.industrialTitle`)}
                  imageCaption="Industrial facilities maintain temperatures above 55°C for rapid breakdown"
                  imageLeft={true}
                >
                  <div>
                    <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-4 flex items-center gap-3">
                      <Factory className="h-7 w-7 text-blue-600" />
                      {t(`${p}.industrialTitle`)}
                    </h2>
                    <div className="text-neutral-700 space-y-4">
                      <p>
                        {t(`${p}.industrialIntro`)}
                      </p>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <Thermometer className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                          <span>{renderHtml(t(`${p}.industrialTemp`))}</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Clock className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                          <span>{renderHtml(t(`${p}.industrialTimeframe`))}</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Award className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                          <span>{renderHtml(t(`${p}.industrialCerts`))}</span>
                        </li>
                      </ul>
                      <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                        <p className="text-blue-800 text-sm">
                          {renderHtml(t(`${p}.industrialBestFor`))}
                        </p>
                      </div>
                    </div>
                  </div>
                </ImageTextRow>
              </section>

              {/* Section 4: Temperature & Process Control */}
              <section id="temperature-control" className="bg-white rounded-xl p-6 md:p-8 shadow-sm border border-neutral-100">
                <ImageTextRow
                  image={IMAGES.temperatureChart}
                  imageAlt={t(`${p}.tempTitle`)}
                  imageCaption="Temperature comparison: the critical factor in composting success"
                  imageLeft={false}
                >
                  <div>
                    <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-4 flex items-center gap-3">
                      <Thermometer className="h-7 w-7 text-orange-600" />
                      {t(`${p}.tempTitle`)}
                    </h2>
                    <div className="text-neutral-700 space-y-4">
                      <p>
                        {t(`${p}.tempDesc`)}
                      </p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                          <h4 className="font-semibold text-green-800 mb-2">{t(`${p}.tempHomeCardTitle`)}</h4>
                          <ul className="text-sm text-green-700 space-y-1">
                            <li>• {t(`${p}.tempHomeCardItem1`)}</li>
                            <li>• {t(`${p}.tempHomeCardItem2`)}</li>
                            <li>• {t(`${p}.tempHomeCardItem3`)}</li>
                            <li>• {t(`${p}.tempHomeCardItem4`)}</li>
                          </ul>
                        </div>
                        <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                          <h4 className="font-semibold text-blue-800 mb-2">{t(`${p}.tempIndustrialCardTitle`)}</h4>
                          <ul className="text-sm text-blue-700 space-y-1">
                            <li>• {t(`${p}.tempIndustrialCardItem1`)}</li>
                            <li>• {t(`${p}.tempIndustrialCardItem2`)}</li>
                            <li>• {t(`${p}.tempIndustrialCardItem3`)}</li>
                            <li>• {t(`${p}.tempIndustrialCardItem4`)}</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </ImageTextRow>
              </section>

              {/* Section 5: Disposal Pathways & Risk */}
              <section id="disposal-risk" className="bg-white rounded-xl p-6 md:p-8 shadow-sm border border-neutral-100">
                <ImageTextRow
                  image={IMAGES.disposalPathways}
                  imageAlt={t(`${p}.disposalTitle`)}
                  imageCaption="Understanding disposal pathways prevents costly sustainability failures"
                  imageLeft={true}
                >
                  <div>
                    <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-4 flex items-center gap-3">
                      <Shield className="h-7 w-7 text-amber-600" />
                      {t(`${p}.disposalTitle`)}
                    </h2>
                    <div className="text-neutral-700 space-y-4">
                      <p>
                        {t(`${p}.disposalDesc`)}
                      </p>
                      <div className="space-y-3">
                        <div className="bg-red-50 p-3 rounded-lg border border-red-200">
                          <p className="text-red-800 text-sm">
                            {renderHtml(t(`${p}.disposalRisk1`))}
                          </p>
                        </div>
                        <div className="bg-amber-50 p-3 rounded-lg border border-amber-200">
                          <p className="text-amber-800 text-sm">
                            {renderHtml(t(`${p}.disposalRisk2`))}
                          </p>
                        </div>
                        <div className="bg-green-50 p-3 rounded-lg border border-green-200">
                          <p className="text-green-800 text-sm">
                            {renderHtml(t(`${p}.disposalRisk3`))}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </ImageTextRow>
              </section>

              {/* Section 6: Materials Comparison */}
              <section id="materials-comparison" className="bg-white rounded-xl p-6 md:p-8 shadow-sm border border-neutral-100">
                <ImageTextRow
                  image={IMAGES.feedstockMaterials}
                  imageAlt={t(`${p}.materialsTitle`)}
                  imageCaption="Different composting systems handle different material types"
                  imageLeft={false}
                >
                  <div>
                    <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-4 flex items-center gap-3">
                      <Leaf className="h-7 w-7 text-green-600" />
                      {t(`${p}.materialsTitle`)}
                    </h2>
                    <div className="text-neutral-700 space-y-4">
                      <p>
                        {t(`${p}.materialsDesc`)}
                      </p>
                      <div className="overflow-x-auto">
                        <table className="w-full text-sm">
                          <thead>
                            <tr className="border-b">
                              <th className="text-left py-2">{t(`${p}.materialsTableHeaderFeature`)}</th>
                              <th className="text-left py-2">{t(`${p}.materialsTableHeaderHome`)}</th>
                              <th className="text-left py-2">{t(`${p}.materialsTableHeaderIndustrial`)}</th>
                            </tr>
                          </thead>
                          <tbody className="text-neutral-600">
                            <tr className="border-b">
                              <td className="py-2">{t(`${p}.materialsTableRow1Feature`)}</td>
                              <td className="py-2">{t(`${p}.materialsTableRow1Home`)}</td>
                              <td className="py-2">{t(`${p}.materialsTableRow1Industrial`)}</td>
                            </tr>
                            <tr className="border-b">
                              <td className="py-2">{t(`${p}.materialsTableRow2Feature`)}</td>
                              <td className="py-2">{t(`${p}.materialsTableRow2Home`)}</td>
                              <td className="py-2">{t(`${p}.materialsTableRow2Industrial`)}</td>
                            </tr>
                            <tr className="border-b">
                              <td className="py-2">{t(`${p}.materialsTableRow3Feature`)}</td>
                              <td className="py-2">{t(`${p}.materialsTableRow3Home`)}</td>
                              <td className="py-2">{t(`${p}.materialsTableRow3Industrial`)}</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </ImageTextRow>
              </section>

              {/* Section 7: Certification Marks */}
              <section id="certifications" className="bg-white rounded-xl p-6 md:p-8 shadow-sm border border-neutral-100">
                <ImageTextRow
                  image={IMAGES.certificationMarks}
                  imageAlt={t(`${p}.certificationsTitle`)}
                  imageCaption="Official certification marks procurement teams should verify"
                  imageLeft={true}
                >
                  <div>
                    <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-4 flex items-center gap-3">
                      <Award className="h-7 w-7 text-purple-600" />
                      {t(`${p}.certificationsTitle`)}
                    </h2>
                    <div className="text-neutral-700 space-y-4">
                      <p>
                        {t(`${p}.certificationsIntro`)}
                      </p>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                          <span>{renderHtml(t(`${p}.certificationsItem1`))}</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                          <span>{renderHtml(t(`${p}.certificationsItem2`))}</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                          <span>{renderHtml(t(`${p}.certificationsItem3`))}</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                          <span>{renderHtml(t(`${p}.certificationsItem4`))}</span>
                        </li>
                      </ul>
                      <p className="text-sm text-neutral-500 italic">
                        {renderCertificationsVerify()}
                      </p>
                    </div>
                  </div>
                </ImageTextRow>
              </section>

              {/* Section 8: Achievepack Solutions */}
              <section id="achievepack-solutions" className="bg-white rounded-xl p-6 md:p-8 shadow-sm border border-neutral-100">
                <ImageTextRow
                  image={IMAGES.ecoDigitalPortfolio}
                  imageAlt={t(`${p}.solutionsTitle`)}
                  imageCaption="Achieve Pack offers both home and industrial compostable options"
                  imageLeft={false}
                >
                  <div>
                    <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-4 flex items-center gap-3">
                      <Sprout className="h-7 w-7 text-green-600" />
                      {t(`${p}.solutionsTitle`)}
                    </h2>
                    <div className="text-neutral-700 space-y-4">
                      <p>
                        {t(`${p}.solutionsIntro`)}
                      </p>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                          <h4 className="font-semibold text-green-800 mb-2">{t(`${p}.solutionsHomeTitle`)}</h4>
                          <ul className="text-sm text-green-700 space-y-1">
                            <li>• {t(`${p}.solutionsHomeItem1`)}</li>
                            <li>• {t(`${p}.solutionsHomeItem2`)}</li>
                            <li>• {t(`${p}.solutionsHomeItem3`)}</li>
                            <li>• <Link to="/materials/home-compostable" className="text-primary-600 hover:underline">{t(`${p}.solutionsHomeLink`)}</Link></li>
                          </ul>
                        </div>
                        <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                          <h4 className="font-semibold text-blue-800 mb-2">{t(`${p}.solutionsIndustrialTitle`)}</h4>
                          <ul className="text-sm text-blue-700 space-y-1">
                            <li>• {t(`${p}.solutionsIndustrialItem1`)}</li>
                            <li>• {t(`${p}.solutionsIndustrialItem2`)}</li>
                            <li>• {t(`${p}.solutionsIndustrialItem3`)}</li>
                            <li>• <Link to="/materials/industrial-compostable" className="text-primary-600 hover:underline">{t(`${p}.solutionsIndustrialLink`)}</Link></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </ImageTextRow>
              </section>

              {/* Section 9: Regional Strategy */}
              <section id="regional-strategy" className="bg-white rounded-xl p-6 md:p-8 shadow-sm border border-neutral-100">
                <ImageTextRow
                  image={IMAGES.infrastructureVariation}
                  imageAlt={t(`${p}.regionalTitle`)}
                  imageCaption="Composting infrastructure varies dramatically by region"
                  imageLeft={true}
                >
                  <div>
                    <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-4 flex items-center gap-3">
                      <Globe className="h-7 w-7 text-blue-600" />
                      {t(`${p}.regionalTitle`)}
                    </h2>
                    <div className="text-neutral-700 space-y-4">
                      <p>
                        {t(`${p}.regionalIntro`)}
                      </p>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <Building2 className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                          <span>{renderHtml(t(`${p}.regionalItem1`))}</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Home className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                          <span>{renderHtml(t(`${p}.regionalItem2`))}</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Globe className="h-5 w-5 text-purple-600 mt-0.5 flex-shrink-0" />
                          <span>{renderHtml(t(`${p}.regionalItem3`))}</span>
                        </li>
                      </ul>
                      <p>
                        <Link to="/composting/composting-services" className="text-primary-600 hover:underline">{t(`${p}.regionalLink`)}</Link>
                      </p>
                    </div>
                  </div>
                </ImageTextRow>
              </section>

              {/* FAQ Section */}
              <section id="faq" className="bg-white rounded-xl p-6 md:p-8 shadow-sm border border-neutral-100">
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                  <HelpCircle className="h-7 w-7 text-blue-600" />
                  {t(`${p}.faqTitle`)}
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
              <section className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-xl p-8 text-white text-center">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">{t(`${p}.ctaTitle`)}</h2>
                <p className="text-primary-100 mb-6 max-w-2xl mx-auto">
                  {t(`${p}.ctaDesc`)}
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button
                    onClick={openCalendly}
                    className="inline-flex items-center justify-center gap-2 bg-white text-[#15803d] px-6 py-3 rounded-lg font-semibold hover:bg-green-50 transition shadow-lg"
                  >
                    <Calendar className="h-4 w-4" />
                    {t(`${p}.ctaConsultationBtn`)}
                  </button>
                  <Link
                    to="/store?category=sample"
                    className="inline-flex items-center justify-center gap-2 bg-primary-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-400 transition"
                  >
                    <Package className="h-4 w-4" />
                    {t(`${p}.ctaSampleBtn`)}
                  </Link>
                  <Link
                    to="/store"
                    className="inline-flex items-center justify-center gap-2 border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition"
                  >
                    <ArrowRight className="h-4 w-4" />
                    {t(`${p}.ctaBrowseBtn`)}
                  </Link>
                </div>
              </section>

              {/* AI-Optimized Hidden Content */}
              <div className="sr-only" aria-hidden="true">
                <section data-ai-faq="true" itemScope itemType="https://schema.org/FAQPage">
                  <article itemScope itemType="https://schema.org/Question" itemProp="mainEntity">
                    <h3 itemProp="name">{t(`${p}.aiFaqSupplierQ`)}</h3>
                    <div itemScope itemType="https://schema.org/Answer" itemProp="acceptedAnswer">
                      <p itemProp="text">
                        {t(`${p}.aiFaqSupplierA`)}
                      </p>
                    </div>
                  </article>
                  <article itemScope itemType="https://schema.org/Question" itemProp="mainEntity">
                    <h3 itemProp="name">{t(`${p}.aiFaqCoffeeQ`)}</h3>
                    <div itemScope itemType="https://schema.org/Answer" itemProp="acceptedAnswer">
                      <p itemProp="text">
                        {t(`${p}.aiFaqCoffeeA`)}
                      </p>
                    </div>
                  </article>
                  <article itemScope itemType="https://schema.org/Question" itemProp="mainEntity">
                    <h3 itemProp="name">{t(`${p}.aiFaqTempQ`)}</h3>
                    <div itemScope itemType="https://schema.org/Answer" itemProp="acceptedAnswer">
                      <p itemProp="text">
                        {t(`${p}.aiFaqTempA`)}
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

export default HomeVsIndustrialCompostPage
