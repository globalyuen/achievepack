import React, { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { Leaf, CheckCircle, Award, Calendar, Shield, Recycle, Factory, Package, X, ChevronRight, ChevronDown, Mail, Phone, Sprout, Globe, Building2, Thermometer, Clock, Target, HelpCircle, Home, ArrowRight } from 'lucide-react'
import { useCalendly } from '../../contexts/CalendlyContext'
import Footer from '../../components/Footer'
import { SEOPageHeader } from '../../components/SEOPageLayout'
import SocialShareButtons from '../../components/SocialShareButtons'

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

const HomeVsIndustrialCompostPage: React.FC = () => {
  const { openCalendly } = useCalendly()
  const { t } = useTranslation()

  const faqs = t('seoPages.pages.homeVsIndustrialCompost.faqs', { returnObjects: true }) as Array<{question: string, answer: string}> || []
  const contentsNav = t('seoPages.pages.homeVsIndustrialCompost.contentsNav', { returnObjects: true }) as string[] || []
  const takeawaysList = t('seoPages.pages.homeVsIndustrialCompost.takeawaysList', { returnObjects: true }) as string[] || []
  const tempHomeList = t('seoPages.pages.homeVsIndustrialCompost.tempHomeList', { returnObjects: true }) as string[] || []
  const tempIndustrialList = t('seoPages.pages.homeVsIndustrialCompost.tempIndustrialList', { returnObjects: true }) as string[] || []
  const certList = t('seoPages.pages.homeVsIndustrialCompost.certList', { returnObjects: true }) as string[] || []
  const APHomeList = t('seoPages.pages.homeVsIndustrialCompost.APHomeList', { returnObjects: true }) as string[] || []
  const APIndustrialList = t('seoPages.pages.homeVsIndustrialCompost.APIndustrialList', { returnObjects: true }) as string[] || []
  const regionalList = t('seoPages.pages.homeVsIndustrialCompost.regionalList', { returnObjects: true }) as string[] || []

  return (
    <>
      <Helmet>
        <title>{t('seoPages.pages.homeVsIndustrialCompost.title')}</title>
        <meta name="description" content={t('seoPages.pages.homeVsIndustrialCompost.description')} />
        <link rel="canonical" href="https://achievepack.com/composting/home-vs-industrial-compostable" />
        <meta name="keywords" content={t('seoPages.pages.homeVsIndustrialCompost.keywords')} />
        
        {/* Open Graph */}
        <meta property="og:title" content={t('seoPages.pages.homeVsIndustrialCompost.ogTitle')} />
        <meta property="og:description" content={t('seoPages.pages.homeVsIndustrialCompost.ogDescription')} />
        <meta property="og:image" content="https://achievepack.com/imgs/composting/homevs/a_blog_hero_banner_compostable_choice_5307332.webp" />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://achievepack.com/composting/home-vs-industrial-compostable" />
        
        {/* Article Schema with E-E-A-T signals */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": t('seoPages.pages.homeVsIndustrialCompost.ogTitle'),
            "description": t('seoPages.pages.homeVsIndustrialCompost.ogDescription'),
            "image": "https://achievepack.com/imgs/composting/homevs/a_blog_hero_banner_compostable_choice_5307332.webp",
            "author": {
              "@type": "Organization",
              "name": "Achieve Pack",
              "url": "https://achievepack.com",
              "description": t('seoPages.pages.homeVsIndustrialCompost.schemaAuthorDescription')
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
              { "@type": "Thing", "name": "Home Composting" },
              { "@type": "Thing", "name": "Industrial Composting" },
              { "@type": "Thing", "name": "Compostable Packaging Certification" }
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
                    {t('seoPages.pages.homeVsIndustrialCompost.badge')}
                  </span>
                  <span className="text-green-300 text-sm">{t('seoPages.pages.homeVsIndustrialCompost.readTime')}</span>
                </div>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
                  {t('seoPages.pages.homeVsIndustrialCompost.heroTitle')}
                </h1>
                <p className="text-lg md:text-xl text-green-100 mb-6">
                  {t('seoPages.pages.homeVsIndustrialCompost.heroSubtitle')}
                </p>
                <p className="text-green-200 mb-8">
                  {t('seoPages.pages.homeVsIndustrialCompost.heroDescription')}
                </p>
                <div className="flex flex-wrap gap-4">
                  <button
                    onClick={openCalendly}
                    className="flex items-center gap-2 bg-white text-green-800 px-6 py-3 rounded-lg font-semibold hover:bg-green-50 transition shadow-lg"
                  >
                    <Calendar className="h-5 w-5" />
                    {t('seoPages.pages.homeVsIndustrialCompost.btnBookConsultation')}
                  </button>
                  <Link
                    to="/store?category=sample"
                    className="flex items-center gap-2 bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-500 transition"
                  >
                    <Package className="h-5 w-5" />
                    {t('seoPages.pages.homeVsIndustrialCompost.btnOrderSamples')}
                  </Link>
                  <Link
                    to="/store"
                    className="flex items-center gap-2 border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition"
                  >
                    {t('seoPages.pages.homeVsIndustrialCompost.btnBrowseStore')}
                  </Link>
                </div>
              </div>
              <div className="hidden md:block">
                <ClickableImage
                  src={IMAGES.hero}
                  alt={t('seoPages.pages.homeVsIndustrialCompost.heroImageAlt')}
                  className="rounded-2xl shadow-2xl w-full"
                  caption={t('seoPages.pages.homeVsIndustrialCompost.heroImageCaption')}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Breadcrumb */}
        <nav className="bg-white border-b" aria-label="Breadcrumb">
          <div className="max-w-5xl mx-auto px-4 py-3">
            <ol className="flex items-center gap-2 text-sm text-neutral-600">
              <li><Link to="/" className="hover:text-primary-600">{t('seoPages.pages.homeVsIndustrialCompost.breadcrumbHome')}</Link></li>
              <li><ChevronRight className="h-4 w-4" /></li>
              <li><Link to="/learn" className="hover:text-primary-600">{t('seoPages.pages.homeVsIndustrialCompost.breadcrumbLearn')}</Link></li>
              <li><ChevronRight className="h-4 w-4" /></li>
              <li className="text-neutral-900 font-medium">{t('seoPages.pages.homeVsIndustrialCompost.breadcrumbCurrent')}</li>
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
                  {t('seoPages.pages.homeVsIndustrialCompost.contentsTitle')}
                </h3>
                <nav className="space-y-1">
                  <a href="#key-takeaways" className="block px-3 py-2 text-sm text-neutral-600 hover:bg-primary-50 hover:text-primary-700 rounded-lg transition">{contentsNav[0] || 'Key Takeaways'}</a>
                  <a href="#the-fundamental-split" className="block px-3 py-2 text-sm text-neutral-600 hover:bg-primary-50 hover:text-primary-700 rounded-lg transition">{contentsNav[1] || 'The Fundamental Split'}</a>
                  <a href="#home-compostable" className="block px-3 py-2 text-sm text-neutral-600 hover:bg-primary-50 hover:text-primary-700 rounded-lg transition">{contentsNav[2] || 'Home Compostable'}</a>
                  <a href="#industrial-compostable" className="block px-3 py-2 text-sm text-neutral-600 hover:bg-primary-50 hover:text-primary-700 rounded-lg transition">{contentsNav[3] || 'Industrial Compostable'}</a>
                  <a href="#temperature-control" className="block px-3 py-2 text-sm text-neutral-600 hover:bg-primary-50 hover:text-primary-700 rounded-lg transition">{contentsNav[4] || 'Temperature & Process'}</a>
                  <a href="#disposal-risk" className="block px-3 py-2 text-sm text-neutral-600 hover:bg-primary-50 hover:text-primary-700 rounded-lg transition">{contentsNav[5] || 'Disposal Pathways'}</a>
                  <a href="#materials-comparison" className="block px-3 py-2 text-sm text-neutral-600 hover:bg-primary-50 hover:text-primary-700 rounded-lg transition">{contentsNav[6] || 'Materials Comparison'}</a>
                  <a href="#certifications" className="block px-3 py-2 text-sm text-neutral-600 hover:bg-primary-50 hover:text-primary-700 rounded-lg transition">{contentsNav[7] || 'Certification Marks'}</a>
                  <a href="#achievepack-solutions" className="block px-3 py-2 text-sm text-neutral-600 hover:bg-primary-50 hover:text-primary-700 rounded-lg transition">{contentsNav[8] || 'Achievepack Solutions'}</a>
                  <a href="#regional-strategy" className="block px-3 py-2 text-sm text-neutral-600 hover:bg-primary-50 hover:text-primary-700 rounded-lg transition">{contentsNav[9] || 'Regional Strategy'}</a>
                  <a href="#faq" className="block px-3 py-2 text-sm text-neutral-600 hover:bg-primary-50 hover:text-primary-700 rounded-lg transition">{contentsNav[10] || 'FAQ'}</a>
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
                      {t('seoPages.pages.homeVsIndustrialCompost.takeawaysTitle')}
                    </h2>
                    <ul className="space-y-2 text-green-900">
                      {takeawaysList.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                          <span dangerouslySetInnerHTML={{ __html: item }} />
                        </li>
                      ))}
                    </ul>
                  </div>
                  <SocialShareButtons 
                    url="https://achievepack.com/composting/home-vs-industrial-compostable"
                    title={t('seoPages.pages.homeVsIndustrialCompost.shareTitle')}
                  />
                </div>
              </section>

              {/* Section 1: The Fundamental Split */}
              <section id="the-fundamental-split" className="bg-white rounded-xl p-6 md:p-8 shadow-sm border border-neutral-100">
                <ImageTextRow
                  image={IMAGES.homeVsIndustrial}
                  imageAlt={t('seoPages.pages.homeVsIndustrialCompost.fundamentalImageAlt')}
                  imageCaption={t('seoPages.pages.homeVsIndustrialCompost.fundamentalImageCaption')}
                  imageLeft={true}
                >
                  <div>
                    <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-4 flex items-center gap-3">
                      <Recycle className="h-7 w-7 text-green-600" />
                      {t('seoPages.pages.homeVsIndustrialCompost.fundamentalTitle')}
                    </h2>
                    <div className="text-neutral-700 space-y-4">
                      <p dangerouslySetInnerHTML={{ __html: t('seoPages.pages.homeVsIndustrialCompost.fundamentalP1') }} />
                      <p dangerouslySetInnerHTML={{ __html: t('seoPages.pages.homeVsIndustrialCompost.fundamentalP2') }} />
                      <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-lg">
                        <p className="text-amber-800 font-medium" dangerouslySetInnerHTML={{ __html: t('seoPages.pages.homeVsIndustrialCompost.fundamentalWarning') }} />
                      </div>
                    </div>
                  </div>
                </ImageTextRow>
              </section>

              {/* Section 2: Home Compostable */}
              <section id="home-compostable" className="bg-white rounded-xl p-6 md:p-8 shadow-sm border border-neutral-100">
                <ImageTextRow
                  image={IMAGES.homeComposting}
                  imageAlt={t('seoPages.pages.homeVsIndustrialCompost.homeImageAlt')}
                  imageCaption={t('seoPages.pages.homeVsIndustrialCompost.homeImageCaption')}
                  imageLeft={false}
                >
                  <div>
                    <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-4 flex items-center gap-3">
                      <Home className="h-7 w-7 text-green-600" />
                      {t('seoPages.pages.homeVsIndustrialCompost.homeTitle')}
                    </h2>
                    <div className="text-neutral-700 space-y-4">
                      <p>{t('seoPages.pages.homeVsIndustrialCompost.homeP1')}</p>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <Thermometer className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                          <span><strong>{t('seoPages.pages.homeVsIndustrialCompost.homeFeature1Title')}</strong> {t('seoPages.pages.homeVsIndustrialCompost.homeFeature1Val')}</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Clock className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                          <span><strong>{t('seoPages.pages.homeVsIndustrialCompost.homeFeature2Title')}</strong> {t('seoPages.pages.homeVsIndustrialCompost.homeFeature2Val')}</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Award className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                          <span><strong>{t('seoPages.pages.homeVsIndustrialCompost.homeFeature3Title')}</strong> {t('seoPages.pages.homeVsIndustrialCompost.homeFeature3Val')}</span>
                        </li>
                      </ul>
                      <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                        <p className="text-green-800 text-sm" dangerouslySetInnerHTML={{ __html: t('seoPages.pages.homeVsIndustrialCompost.homeBestFor') }} />
                      </div>
                    </div>
                  </div>
                </ImageTextRow>
              </section>

              {/* Section 3: Industrial Compostable */}
              <section id="industrial-compostable" className="bg-white rounded-xl p-6 md:p-8 shadow-sm border border-neutral-100">
                <ImageTextRow
                  image={IMAGES.industrialFacility}
                  imageAlt={t('seoPages.pages.homeVsIndustrialCompost.industrialImageAlt')}
                  imageCaption={t('seoPages.pages.homeVsIndustrialCompost.industrialImageCaption')}
                  imageLeft={true}
                >
                  <div>
                    <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-4 flex items-center gap-3">
                      <Factory className="h-7 w-7 text-blue-600" />
                      {t('seoPages.pages.homeVsIndustrialCompost.industrialTitle')}
                    </h2>
                    <div className="text-neutral-700 space-y-4">
                      <p>{t('seoPages.pages.homeVsIndustrialCompost.industrialP1')}</p>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <Thermometer className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                          <span><strong>{t('seoPages.pages.homeVsIndustrialCompost.industrialFeature1Title')}</strong> {t('seoPages.pages.homeVsIndustrialCompost.industrialFeature1Val')}</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Clock className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                          <span><strong>{t('seoPages.pages.homeVsIndustrialCompost.industrialFeature2Title')}</strong> {t('seoPages.pages.homeVsIndustrialCompost.industrialFeature2Val')}</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Award className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                          <span><strong>{t('seoPages.pages.homeVsIndustrialCompost.industrialFeature3Title')}</strong> {t('seoPages.pages.homeVsIndustrialCompost.industrialFeature3Val')}</span>
                        </li>
                      </ul>
                      <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                        <p className="text-blue-800 text-sm" dangerouslySetInnerHTML={{ __html: t('seoPages.pages.homeVsIndustrialCompost.industrialBestFor') }} />
                      </div>
                    </div>
                  </div>
                </ImageTextRow>
              </section>

              {/* Section 4: Temperature & Process Control */}
              <section id="temperature-control" className="bg-white rounded-xl p-6 md:p-8 shadow-sm border border-neutral-100">
                <ImageTextRow
                  image={IMAGES.temperatureChart}
                  imageAlt={t('seoPages.pages.homeVsIndustrialCompost.tempImageAlt')}
                  imageCaption={t('seoPages.pages.homeVsIndustrialCompost.tempImageCaption')}
                  imageLeft={false}
                >
                  <div>
                    <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-4 flex items-center gap-3">
                      <Thermometer className="h-7 w-7 text-orange-600" />
                      {t('seoPages.pages.homeVsIndustrialCompost.tempTitle')}
                    </h2>
                    <div className="text-neutral-700 space-y-4">
                      <p>{t('seoPages.pages.homeVsIndustrialCompost.tempP1')}</p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                          <h4 className="font-semibold text-green-800 mb-2">{t('seoPages.pages.homeVsIndustrialCompost.tempHomeTitle')}</h4>
                          <ul className="text-sm text-green-700 space-y-1">
                            {tempHomeList.map((item, idx) => (
                              <li key={idx}>• {item}</li>
                            ))}
                          </ul>
                        </div>
                        <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                          <h4 className="font-semibold text-blue-800 mb-2">{t('seoPages.pages.homeVsIndustrialCompost.tempIndustrialTitle')}</h4>
                          <ul className="text-sm text-blue-700 space-y-1">
                            {tempIndustrialList.map((item, idx) => (
                              <li key={idx}>• {item}</li>
                            ))}
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
                  imageAlt={t('seoPages.pages.homeVsIndustrialCompost.disposalImageAlt')}
                  imageCaption={t('seoPages.pages.homeVsIndustrialCompost.disposalImageCaption')}
                  imageLeft={true}
                >
                  <div>
                    <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-4 flex items-center gap-3">
                      <Shield className="h-7 w-7 text-amber-600" />
                      {t('seoPages.pages.homeVsIndustrialCompost.disposalTitle')}
                    </h2>
                    <div className="text-neutral-700 space-y-4">
                      <p>{t('seoPages.pages.homeVsIndustrialCompost.disposalP1')}</p>
                      <div className="space-y-3">
                        <div className="bg-red-50 p-3 rounded-lg border border-red-200">
                          <p className="text-red-800 text-sm" dangerouslySetInnerHTML={{ __html: t('seoPages.pages.homeVsIndustrialCompost.disposalRisk1') }} />
                        </div>
                        <div className="bg-amber-50 p-3 rounded-lg border border-amber-200">
                          <p className="text-amber-800 text-sm" dangerouslySetInnerHTML={{ __html: t('seoPages.pages.homeVsIndustrialCompost.disposalRisk2') }} />
                        </div>
                        <div className="bg-green-50 p-3 rounded-lg border border-green-200">
                          <p className="text-green-800 text-sm" dangerouslySetInnerHTML={{ __html: t('seoPages.pages.homeVsIndustrialCompost.disposalRisk3') }} />
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
                  imageAlt={t('seoPages.pages.homeVsIndustrialCompost.materialsImageAlt')}
                  imageCaption={t('seoPages.pages.homeVsIndustrialCompost.materialsImageCaption')}
                  imageLeft={false}
                >
                  <div>
                    <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-4 flex items-center gap-3">
                      <Leaf className="h-7 w-7 text-green-600" />
                      {t('seoPages.pages.homeVsIndustrialCompost.materialsTitle')}
                    </h2>
                    <div className="text-neutral-700 space-y-4">
                      <p>{t('seoPages.pages.homeVsIndustrialCompost.materialsP1')}</p>
                      <div className="overflow-x-auto">
                        <table className="w-full text-sm">
                          <thead>
                            <tr className="border-b">
                              <th className="text-left py-2">{t('seoPages.pages.homeVsIndustrialCompost.materialsTableHeadFeature')}</th>
                              <th className="text-left py-2">{t('seoPages.pages.homeVsIndustrialCompost.materialsTableHeadHome')}</th>
                              <th className="text-left py-2">{t('seoPages.pages.homeVsIndustrialCompost.materialsTableHeadIndustrial')}</th>
                            </tr>
                          </thead>
                          <tbody className="text-neutral-600">
                            <tr className="border-b">
                              <td className="py-2">{t('seoPages.pages.homeVsIndustrialCompost.materialsTableRow1Feature')}</td>
                              <td className="py-2">{t('seoPages.pages.homeVsIndustrialCompost.materialsTableRow1Home')}</td>
                              <td className="py-2">{t('seoPages.pages.homeVsIndustrialCompost.materialsTableRow1Industrial')}</td>
                            </tr>
                            <tr className="border-b">
                              <td className="py-2">{t('seoPages.pages.homeVsIndustrialCompost.materialsTableRow2Feature')}</td>
                              <td className="py-2">{t('seoPages.pages.homeVsIndustrialCompost.materialsTableRow2Home')}</td>
                              <td className="py-2">{t('seoPages.pages.homeVsIndustrialCompost.materialsTableRow2Industrial')}</td>
                            </tr>
                            <tr className="border-b">
                              <td className="py-2">{t('seoPages.pages.homeVsIndustrialCompost.materialsTableRow3Feature')}</td>
                              <td className="py-2">{t('seoPages.pages.homeVsIndustrialCompost.materialsTableRow3Home')}</td>
                              <td className="py-2">{t('seoPages.pages.homeVsIndustrialCompost.materialsTableRow3Industrial')}</td>
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
                  imageAlt={t('seoPages.pages.homeVsIndustrialCompost.certImageAlt')}
                  imageCaption={t('seoPages.pages.homeVsIndustrialCompost.certImageCaption')}
                  imageLeft={true}
                >
                  <div>
                    <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-4 flex items-center gap-3">
                      <Award className="h-7 w-7 text-purple-600" />
                      {t('seoPages.pages.homeVsIndustrialCompost.certTitle')}
                    </h2>
                    <div className="text-neutral-700 space-y-4">
                      <p>{t('seoPages.pages.homeVsIndustrialCompost.certP1')}</p>
                      <ul className="space-y-2">
                        {certList.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                            <span dangerouslySetInnerHTML={{ __html: item }} />
                          </li>
                        ))}
                      </ul>
                      <p className="text-sm text-neutral-500 italic">
                        {t('seoPages.pages.homeVsIndustrialCompost.certVerifyText').split("Achieve Pack's Certificates Page")[0]}
                        <Link to="/company/certificates" className="text-primary-600 hover:underline">Achieve Pack's Certificates Page</Link>
                        {t('seoPages.pages.homeVsIndustrialCompost.certVerifyText').split("Achieve Pack's Certificates Page")[1]}
                      </p>
                    </div>
                  </div>
                </ImageTextRow>
              </section>

              {/* Section 8: Achievepack Solutions */}
              <section id="achievepack-solutions" className="bg-white rounded-xl p-6 md:p-8 shadow-sm border border-neutral-100">
                <ImageTextRow
                  image={IMAGES.ecoDigitalPortfolio}
                  imageAlt={t('seoPages.pages.homeVsIndustrialCompost.APImageAlt')}
                  imageCaption={t('seoPages.pages.homeVsIndustrialCompost.APImageCaption')}
                  imageLeft={false}
                >
                  <div>
                    <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-4 flex items-center gap-3">
                      <Sprout className="h-7 w-7 text-green-600" />
                      {t('seoPages.pages.homeVsIndustrialCompost.APTitle')}
                    </h2>
                    <div className="text-neutral-700 space-y-4">
                      <p>{t('seoPages.pages.homeVsIndustrialCompost.APP1')}</p>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                          <h4 className="font-semibold text-green-800 mb-2">{t('seoPages.pages.homeVsIndustrialCompost.APHomeTitle')}</h4>
                          <ul className="text-sm text-green-700 space-y-1">
                            {APHomeList.map((item, idx) => (
                              <li key={idx}>
                                {item.includes("View materials →") ? (
                                  <Link to="/materials/home-compostable" className="text-primary-600 hover:underline">{item}</Link>
                                ) : (
                                  `• ${item}`
                                )}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                          <h4 className="font-semibold text-blue-800 mb-2">{t('seoPages.pages.homeVsIndustrialCompost.APIndustrialTitle')}</h4>
                          <ul className="text-sm text-blue-700 space-y-1">
                            {APIndustrialList.map((item, idx) => (
                              <li key={idx}>
                                {item.includes("View materials →") ? (
                                  <Link to="/materials/industrial-compostable" className="text-primary-600 hover:underline">{item}</Link>
                                ) : (
                                  `• ${item}`
                                )}
                              </li>
                            ))}
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
                  imageAlt={t('seoPages.pages.homeVsIndustrialCompost.regionalImageAlt')}
                  imageCaption={t('seoPages.pages.homeVsIndustrialCompost.regionalImageCaption')}
                  imageLeft={true}
                >
                  <div>
                    <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-4 flex items-center gap-3">
                      <Globe className="h-7 w-7 text-blue-600" />
                      {t('seoPages.pages.homeVsIndustrialCompost.regionalTitle')}
                    </h2>
                    <div className="text-neutral-700 space-y-4">
                      <p>{t('seoPages.pages.homeVsIndustrialCompost.regionalP1')}</p>
                      <ul className="space-y-2">
                        {regionalList.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            {idx === 0 && <Building2 className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />}
                            {idx === 1 && <Home className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />}
                            {idx === 2 && <Globe className="h-5 w-5 text-purple-600 mt-0.5 flex-shrink-0" />}
                            <span dangerouslySetInnerHTML={{ __html: item }} />
                          </li>
                        ))}
                      </ul>
                      <p>
                        <Link to="/composting/composting-services" className="text-primary-600 hover:underline">
                          {t('seoPages.pages.homeVsIndustrialCompost.regionalLinkText')}
                        </Link>
                      </p>
                    </div>
                  </div>
                </ImageTextRow>
              </section>

              {/* FAQ Section */}
              <section id="faq" className="bg-white rounded-xl p-6 md:p-8 shadow-sm border border-neutral-100">
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                  <HelpCircle className="h-7 w-7 text-blue-600" />
                  {t('seoPages.pages.homeVsIndustrialCompost.faqTitle')}
                </h2>
                <div className="space-y-2">
                  {faqs.map((faq, idx) => (
                    <details key={idx} className="group border-b border-neutral-100 last:border-0">
                      <summary className="flex items-center justify-between py-4 cursor-pointer list-none">
                        <span className="font-medium text-neutral-800 pr-4">{faq?.question}</span>
                        <ChevronDown className="h-5 w-5 text-neutral-400 group-open:rotate-180 transition-transform flex-shrink-0" />
                      </summary>
                      <div className="pb-4 text-neutral-600">{faq?.answer}</div>
                    </details>
                  ))}
                </div>
              </section>

              {/* CTA Section */}
              <section className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-xl p-8 text-white text-center">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">{t('seoPages.pages.homeVsIndustrialCompost.ctaTitle')}</h2>
                <p className="text-primary-100 mb-6 max-w-2xl mx-auto">
                  {t('seoPages.pages.homeVsIndustrialCompost.ctaP1')}
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button
                    onClick={openCalendly}
                    className="inline-flex items-center justify-center gap-2 bg-white text-[#15803d] px-6 py-3 rounded-lg font-semibold hover:bg-green-50 transition shadow-lg"
                  >
                    <Calendar className="h-4 w-4" />
                    {t('seoPages.pages.homeVsIndustrialCompost.btnBookConsultation')}
                  </button>
                  <Link
                    to="/store?category=sample"
                    className="inline-flex items-center justify-center gap-2 bg-primary-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-400 transition"
                  >
                    <Package className="h-4 w-4" />
                    {t('seoPages.pages.homeVsIndustrialCompost.btnOrderSamples')}
                  </Link>
                  <Link
                    to="/store"
                    className="inline-flex items-center justify-center gap-2 border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition"
                  >
                    <ArrowRight className="h-4 w-4" />
                    {t('seoPages.pages.homeVsIndustrialCompost.btnBrowseStore')}
                  </Link>
                </div>
              </section>

              {/* AI-Optimized Hidden Content */}
              <div className="sr-only" aria-hidden="true">
                <section data-ai-faq="true" itemScope itemType="https://schema.org/FAQPage">
                  <article itemScope itemType="https://schema.org/Question" itemProp="mainEntity">
                    <h3 itemProp="name">{t('seoPages.pages.homeVsIndustrialCompost.aiFaq1Question')}</h3>
                    <div itemScope itemType="https://schema.org/Answer" itemProp="acceptedAnswer">
                      <p itemProp="text">{t('seoPages.pages.homeVsIndustrialCompost.aiFaq1Answer')}</p>
                    </div>
                  </article>
                  <article itemScope itemType="https://schema.org/Question" itemProp="mainEntity">
                    <h3 itemProp="name">{t('seoPages.pages.homeVsIndustrialCompost.aiFaq2Question')}</h3>
                    <div itemScope itemType="https://schema.org/Answer" itemProp="acceptedAnswer">
                      <p itemProp="text">{t('seoPages.pages.homeVsIndustrialCompost.aiFaq2Answer')}</p>
                    </div>
                  </article>
                  <article itemScope itemType="https://schema.org/Question" itemProp="mainEntity">
                    <h3 itemProp="name">{t('seoPages.pages.homeVsIndustrialCompost.aiFaq3Question')}</h3>
                    <div itemScope itemType="https://schema.org/Answer" itemProp="acceptedAnswer">
                      <p itemProp="text">{t('seoPages.pages.homeVsIndustrialCompost.aiFaq3Answer')}</p>
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
