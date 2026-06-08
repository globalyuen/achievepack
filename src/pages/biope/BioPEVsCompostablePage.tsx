import React, { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { Leaf, CheckCircle, Award, Calendar, Shield, Recycle, Factory, Package, X, ChevronRight, ChevronDown, Sprout, Globe, Target, HelpCircle, ArrowRight, TrendingDown, BarChart3, FileCheck, Zap, ClipboardCheck, Layers, Scale, Lightbulb, Building2, TreePine, Users } from 'lucide-react'
import { useCalendly } from '../../contexts/CalendlyContext'
import Footer from '../../components/Footer'
import { SEOPageHeader } from '../../components/SEOPageLayout'
import SocialShareButtons from '../../components/SocialShareButtons'

// Image paths - using imgs/biope/vs folder
const IMAGES = {
  hero: '/imgs/biope/vs/a_biope_epr_hero_image_8632332.webp',
  decisionFramework: '/imgs/biope/vs/a_decision_framework_choose_path_8075169.webp',
  whenCompostable: '/imgs/biope/vs/a_when_choose_compostable_films_8027638.webp',
  whenBioPE: '/imgs/biope/vs/a_when_choose_bio_pe_1946260.webp',
  infrastructureFit: '/imgs/biope/vs/a_infrastructure_fit_comparison_9019274.webp',
  productResidue: '/imgs/biope/vs/a_product_residue_profile_analysis_2433405.webp',
  climateResource: '/imgs/biope/vs/a_climate_resource_impact_lifecycle_2440323.webp',
  portfolioStrategy: '/imgs/biope/vs/a_portfolio_strategy_market_matching_2355561.webp',
  achievePackSupport: '/imgs/biope/vs/a_achieve_pack_services_support_5094748.webp',
  nextSteps: '/imgs/biope/vs/a_next_steps_call_to_action_4319626.webp',
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
          className="fixed inset-0 z-[9999] bg-black/90 flex items-center justify-center p-4"
          onClick={() => setIsOpen(false)}
        >
          <button 
            className="absolute top-4 right-4 z-[10000] text-white hover:text-neutral-300 bg-black/50 rounded-full p-2"
            onClick={(e) => {
              e.stopPropagation()
              setIsOpen(false)
            }}
            aria-label="Close image"
          >
            <X className="h-8 w-8" />
          </button>
          <img 
            src={src} 
            alt={alt} 
            className="max-w-full max-h-[90vh] object-contain"
            onClick={(e) => e.stopPropagation()}
          />
          {caption && (
            <p className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-center bg-black/50 px-4 py-2 rounded-lg max-w-lg">
              {caption}
            </p>
          )}
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

const BioPEVsCompostablePage: React.FC = () => {
  const { openCalendly } = useCalendly()
  const { t } = useTranslation()
  const p = 'seoPages.pages.biopeVsCompostable'

  const takeaways = (t(`${p}.takeaways`, { returnObjects: true }) || []) as string[]
  const sec3WhyItems = (t(`${p}.sec3WhyItems`, { returnObjects: true }) || []) as string[]
  const sec4WhyItems = (t(`${p}.sec4WhyItems`, { returnObjects: true }) || []) as string[]
  const sec7WhyItems = (t(`${p}.sec7WhyItems`, { returnObjects: true }) || []) as string[]
  const sec8WhyItems = (t(`${p}.sec8WhyItems`, { returnObjects: true }) || []) as string[]
  
  const rawFaqs = t(`${p}.faqs`, { returnObjects: true })
  const faqs = (Array.isArray(rawFaqs) ? rawFaqs : []) as { question: string; answer: string }[]

  return (
    <>
      <Helmet>
        <title>{t(`${p}.title`)}</title>
        <meta name="description" content={t(`${p}.description`)} />
        <link rel="canonical" href="https://achievepack.com/biope/bio-pe-vs-compostable" />
        <meta name="keywords" content={t(`${p}.keywords`)} />
        
        {/* Open Graph */}
        <meta property="og:title" content={t(`${p}.ogTitle`)} />
        <meta property="og:description" content={t(`${p}.ogDescription`)} />
        <meta property="og:image" content="https://achievepack.com/imgs/biope/vs/a_biope_epr_hero_image_8632332.webp" />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://achievepack.com/biope/bio-pe-vs-compostable" />
        
        {/* Article Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": t(`${p}.ogTitle`),
            "description": t(`${p}.ogDescription`),
            "image": "https://achievepack.com/imgs/biope/vs/a_biope_epr_hero_image_8632332.webp",
            "author": {
              "@type": "Organization",
              "name": "Achieve Pack",
              "url": "https://achievepack.com"
            },
            "publisher": {
              "@type": "Organization",
              "name": "Achieve Pack",
              "logo": { "@type": "ImageObject", "url": "https://achievepack.com/imgs/logo/achievepack-logo.png" }
            },
            "datePublished": "2026-01-03",
            "dateModified": new Date().toISOString().split('T')[0],
            "mainEntityOfPage": "https://achievepack.com/biope/bio-pe-vs-compostable"
          })}
        </script>

        {/* FAQ Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqs.map(faq => ({
              "@type": "Question",
              "name": faq.question,
              "acceptedAnswer": { "@type": "Answer", "text": faq.answer }
            }))
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-neutral-50">
        <SEOPageHeader />

        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-emerald-800 to-teal-900 text-white py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <span className="bg-emerald-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {t(`${p}.badge`)}
                  </span>
                  <span className="text-emerald-300 text-sm">{t(`${p}.readTime`)}</span>
                </div>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
                  {t(`${p}.heroTitle`)}
                </h1>
                <p className="text-lg md:text-xl text-emerald-100 mb-6">
                  {t(`${p}.heroSubtitle`)}
                </p>
                <p className="text-emerald-200 mb-8">
                  {t(`${p}.heroDescription`)}
                </p>
                <div className="flex flex-wrap gap-4">
                  <button onClick={openCalendly} className="flex items-center gap-2 bg-white text-emerald-800 px-6 py-3 rounded-lg font-semibold hover:bg-emerald-50 transition shadow-lg">
                    <Calendar className="h-5 w-5" />
                    {t(`${p}.btnConsultation`)}
                  </button>
                  <Link to="/store?category=sample" className="flex items-center gap-2 bg-emerald-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-emerald-500 transition">
                    <Package className="h-5 w-5" />
                    {t(`${p}.btnOrderSamples`)}
                  </Link>
                  <Link to="/store" className="flex items-center gap-2 border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition">
                    {t(`${p}.btnBrowseStore`)}
                  </Link>
                </div>
              </div>
              <div className="hidden md:block">
                <ClickableImage
                  src={IMAGES.hero}
                  alt={t(`${p}.heroTitle`)}
                  className="rounded-2xl shadow-2xl w-full"
                  caption={t(`${p}.heroImageCaption`)}
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
              <li><Link to="/biope/what-is-bio-pe" className="hover:text-primary-600">{t(`${p}.breadcrumbBiope`)}</Link></li>
              <li><ChevronRight className="h-4 w-4" /></li>
              <li className="text-neutral-900 font-medium">{t(`${p}.breadcrumbCurrent`)}</li>
            </ol>
          </div>
        </nav>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Sidebar */}
            <aside className="hidden lg:block lg:col-span-1">
              <div className="sticky top-24 max-h-[calc(100vh-120px)] overflow-y-auto bg-white rounded-xl shadow-sm border border-neutral-100 p-4">
                <h3 className="text-sm font-semibold text-neutral-500 uppercase tracking-wide mb-4">
                  {t(`${p}.sidebarContents`)}
                </h3>
                <nav className="space-y-1">
                  <a href="#key-takeaways" className="block px-3 py-2 text-sm text-neutral-600 hover:bg-primary-50 hover:text-primary-700 rounded-lg transition">{t(`${p}.sidebarTakeaways`)}</a>
                  <a href="#introduction" className="block px-3 py-2 text-sm text-neutral-600 hover:bg-primary-50 hover:text-primary-700 rounded-lg transition">{t(`${p}.sidebarIntro`)}</a>
                  <a href="#problem-to-solve" className="block px-3 py-2 text-sm text-neutral-600 hover:bg-primary-50 hover:text-primary-700 rounded-lg transition">{t(`${p}.sidebarProblem`)}</a>
                  <a href="#compostable-films" className="block px-3 py-2 text-sm text-neutral-600 hover:bg-primary-50 hover:text-primary-700 rounded-lg transition">{t(`${p}.sidebarCompostable`)}</a>
                  <a href="#bio-pe" className="block px-3 py-2 text-sm text-neutral-600 hover:bg-primary-50 hover:text-primary-700 rounded-lg transition">{t(`${p}.sidebarBiope`)}</a>
                  <a href="#decision-factors" className="block px-3 py-2 text-sm text-neutral-600 hover:bg-primary-50 hover:text-primary-700 rounded-lg transition">{t(`${p}.sidebarDecision`)}</a>
                  <a href="#portfolio-strategy" className="block px-3 py-2 text-sm text-neutral-600 hover:bg-primary-50 hover:text-primary-700 rounded-lg transition">{t(`${p}.sidebarPortfolio`)}</a>
                  <a href="#achieve-pack-support" className="block px-3 py-2 text-sm text-neutral-600 hover:bg-primary-50 hover:text-primary-700 rounded-lg transition">{t(`${p}.sidebarSupport`)}</a>
                  <a href="#faq" className="block px-3 py-2 text-sm text-neutral-600 hover:bg-primary-50 hover:text-primary-700 rounded-lg transition">{t(`${p}.sidebarFaq`)}</a>
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
                      {t(`${p}.takeawaysTitle`)}
                    </h2>
                    <ul className="space-y-2 text-emerald-900">
                      {takeaways.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                          <span dangerouslySetInnerHTML={{ __html: item }} />
                        </li>
                      ))}
                    </ul>
                  </div>
                  <SocialShareButtons 
                    url="https://achievepack.com/biope/bio-pe-vs-compostable"
                    title={t(`${p}.title`)}
                  />
                </div>
              </section>

              {/* Introduction */}
              <section id="introduction" className="bg-white rounded-xl p-6 md:p-8 shadow-sm border border-neutral-100">
                <ImageTextRow
                  image={IMAGES.decisionFramework}
                  imageAlt={t(`${p}.sec1Title`)}
                  imageCaption={t(`${p}.sec1ImgCaption`)}
                  imageLeft={true}
                >
                  <div>
                    <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-4 flex items-center gap-3">
                      <Lightbulb className="h-7 w-7 text-amber-600" />
                      {t(`${p}.sec1Title`)}
                    </h2>
                    <div className="text-neutral-700 space-y-4">
                      <p dangerouslySetInnerHTML={{ __html: t(`${p}.sec1P1`) }} />
                      <p dangerouslySetInnerHTML={{ __html: t(`${p}.sec1P2`) }} />
                      <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-lg">
                        <p className="text-amber-800 font-medium" dangerouslySetInnerHTML={{ __html: t(`${p}.sec1Note`) }} />
                      </div>
                    </div>
                  </div>
                </ImageTextRow>
              </section>

              {/* What Problem Are You Trying to Solve? */}
              <section id="problem-to-solve" className="bg-white rounded-xl p-6 md:p-8 shadow-sm border border-neutral-100">
                <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-6 flex items-center gap-3">
                  <Scale className="h-7 w-7 text-purple-600" />
                  {t(`${p}.sec2Title`)}
                </h2>
                <div className="text-neutral-700 space-y-4">
                  <p>{t(`${p}.sec2Intro`)}</p>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                      <div className="text-2xl mb-2">🌱</div>
                      <h4 className="font-semibold text-green-800 mb-2">{t(`${p}.sec2Card1Title`)}</h4>
                      <p className="text-sm text-green-700">{t(`${p}.sec2Card1Desc`)}</p>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                      <div className="text-2xl mb-2">🌍</div>
                      <h4 className="font-semibold text-blue-800 mb-2">{t(`${p}.sec2Card2Title`)}</h4>
                      <p className="text-sm text-blue-700">{t(`${p}.sec2Card2Desc`)}</p>
                    </div>
                    <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
                      <div className="text-2xl mb-2">📋</div>
                      <h4 className="font-semibold text-purple-800 mb-2">{t(`${p}.sec2Card3Title`)}</h4>
                      <p className="text-sm text-purple-700">{t(`${p}.sec2Card3Desc`)}</p>
                    </div>
                  </div>
                  <p className="text-neutral-600 italic mt-4">
                    {t(`${p}.sec2P1`)}
                  </p>
                </div>
              </section>

              {/* Compostable Films Section */}
              <section id="compostable-films" className="bg-white rounded-xl p-6 md:p-8 shadow-sm border border-neutral-100">
                <ImageTextRow
                  image={IMAGES.whenCompostable}
                  imageAlt={t(`${p}.sec3Title`)}
                  imageCaption={t(`${p}.sec3ImgCaption`)}
                  imageLeft={false}
                >
                  <div>
                    <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-4 flex items-center gap-3">
                      <Leaf className="h-7 w-7 text-green-600" />
                      {t(`${p}.sec3Title`)}
                    </h2>
                    <div className="text-neutral-700 space-y-4">
                      <p dangerouslySetInnerHTML={{ __html: t(`${p}.sec3P1`) }} />
                      <p dangerouslySetInnerHTML={{ __html: t(`${p}.sec3P2`) }} />
                      <h4 className="font-semibold text-green-800 mt-4">{t(`${p}.sec3WhyTitle`)}</h4>
                      <ul className="space-y-2">
                        {sec3WhyItems.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                            <span dangerouslySetInnerHTML={{ __html: item }} />
                          </li>
                        ))}
                      </ul>
                      <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-lg mt-4">
                        <p className="text-amber-800" dangerouslySetInnerHTML={{ __html: t(`${p}.sec3Warning`) }} />
                      </div>
                    </div>
                  </div>
                </ImageTextRow>
              </section>

              {/* Bio-PE Section */}
              <section id="bio-pe" className="bg-white rounded-xl p-6 md:p-8 shadow-sm border border-neutral-100">
                <ImageTextRow
                  image={IMAGES.whenBioPE}
                  imageAlt={t(`${p}.sec4Title`)}
                  imageCaption={t(`${p}.sec4ImgCaption`)}
                  imageLeft={true}
                >
                  <div>
                    <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-4 flex items-center gap-3">
                      <Recycle className="h-7 w-7 text-blue-600" />
                      {t(`${p}.sec4Title`)}
                    </h2>
                    <div className="text-neutral-700 space-y-4">
                      <p dangerouslySetInnerHTML={{ __html: t(`${p}.sec4P1`) }} />
                      <h4 className="font-semibold text-blue-800 mt-4">{t(`${p}.sec4WhyTitle`)}</h4>
                      <ul className="space-y-2">
                        {sec4WhyItems.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                            <span dangerouslySetInnerHTML={{ __html: item }} />
                          </li>
                        ))}
                      </ul>
                      <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg mt-4">
                        <p className="text-blue-800" dangerouslySetInnerHTML={{ __html: t(`${p}.sec4Insight`) }} />
                      </div>
                    </div>
                  </div>
                </ImageTextRow>
              </section>

              {/* Key Decision Factors */}
              <section id="decision-factors" className="bg-white rounded-xl p-6 md:p-8 shadow-sm border border-neutral-100">
                <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-6 flex items-center gap-3">
                  <ClipboardCheck className="h-7 w-7 text-indigo-600" />
                  {t(`${p}.sec5Title`)}
                </h2>

                {/* Factor 1: Infrastructure Fit */}
                <div className="mb-8">
                  <ImageTextRow
                    image={IMAGES.infrastructureFit}
                    imageAlt={t(`${p}.sec5Sub1Title`)}
                    imageCaption={t(`${p}.sec5Sub1ImgCaption`)}
                    imageLeft={false}
                  >
                    <div>
                      <h3 className="text-xl font-bold text-neutral-800 mb-4 flex items-center gap-2">
                        <Building2 className="h-6 w-6 text-indigo-600" />
                        {t(`${p}.sec5Sub1Title`)}
                      </h3>
                      <div className="space-y-4">
                        <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                          <h4 className="font-semibold text-green-800 mb-2">{t(`${p}.sec5Sub1Card1Title`)}</h4>
                          <p className="text-sm text-green-700">{t(`${p}.sec5Sub1Card1Desc`)}</p>
                        </div>
                        <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                          <h4 className="font-semibold text-blue-800 mb-2">{t(`${p}.sec5Sub1Card2Title`)}</h4>
                          <p className="text-sm text-blue-700">{t(`${p}.sec5Sub1Card2Desc`)}</p>
                        </div>
                      </div>
                    </div>
                  </ImageTextRow>
                </div>

                {/* Factor 2: Product and Residue Profile */}
                <div className="mb-8">
                  <ImageTextRow
                    image={IMAGES.productResidue}
                    imageAlt={t(`${p}.sec5Sub2Title`)}
                    imageCaption={t(`${p}.sec5Sub2ImgCaption`)}
                    imageLeft={true}
                  >
                    <div>
                      <h3 className="text-xl font-bold text-neutral-800 mb-4 flex items-center gap-2">
                        <Package className="h-6 w-6 text-amber-600" />
                        {t(`${p}.sec5Sub2Title`)}
                      </h3>
                      <div className="space-y-4">
                        <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                          <h4 className="font-semibold text-green-800 mb-2">{t(`${p}.sec5Sub2Card1Title`)}</h4>
                          <p className="text-sm text-green-700">{t(`${p}.sec5Sub2Card1Desc`)}</p>
                        </div>
                        <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                          <h4 className="font-semibold text-blue-800 mb-2">{t(`${p}.sec5Sub2Card2Title`)}</h4>
                          <p className="text-sm text-blue-700">{t(`${p}.sec5Sub2Card2Desc`)}</p>
                        </div>
                      </div>
                    </div>
                  </ImageTextRow>
                </div>

                {/* Factor 3: Climate and Resource Use */}
                <div>
                  <ImageTextRow
                    image={IMAGES.climateResource}
                    imageAlt={t(`${p}.sec5Sub3Title`)}
                    imageCaption={t(`${p}.sec5Sub3ImgCaption`)}
                    imageLeft={false}
                  >
                    <div>
                      <h3 className="text-xl font-bold text-neutral-800 mb-4 flex items-center gap-2">
                        <TreePine className="h-6 w-6 text-green-600" />
                        {t(`${p}.sec5Sub3Title`)}
                      </h3>
                      <div className="space-y-4">
                        <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                          <h4 className="font-semibold text-green-800 mb-2">{t(`${p}.sec5Sub3Card1Title`)}</h4>
                          <p className="text-sm text-green-700">{t(`${p}.sec5Sub3Card1Desc`)}</p>
                        </div>
                        <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                          <h4 className="font-semibold text-blue-800 mb-2">{t(`${p}.sec5Sub3Card2Title`)}</h4>
                          <p className="text-sm text-blue-700">{t(`${p}.sec5Sub3Card2Desc`)}</p>
                        </div>
                        <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-lg">
                          <p className="text-amber-800" dangerouslySetInnerHTML={{ __html: t(`${p}.sec5Sub3Rec`) }} />
                        </div>
                      </div>
                    </div>
                  </ImageTextRow>
                </div>
              </section>

              {/* Portfolio Strategy */}
              <section id="portfolio-strategy" className="bg-white rounded-xl p-6 md:p-8 shadow-sm border border-neutral-100">
                <ImageTextRow
                  image={IMAGES.portfolioStrategy}
                  imageAlt={t(`${p}.sec6Title`)}
                  imageCaption={t(`${p}.sec6ImgCaption`)}
                  imageLeft={true}
                >
                  <div>
                    <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-4 flex items-center gap-3">
                      <Layers className="h-7 w-7 text-purple-600" />
                      {t(`${p}.sec6Title`)}
                    </h2>
                    <div className="text-neutral-700 space-y-4">
                      <p dangerouslySetInnerHTML={{ __html: t(`${p}.sec6P1`) }} />
                      <h4 className="font-semibold text-neutral-800 mt-4">{t(`${p}.sec6ExTitle`)}</h4>
                      <div className="space-y-3">
                        <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                          <h5 className="font-semibold text-green-800 mb-1">{t(`${p}.sec6Ex1Title`)}</h5>
                          <p className="text-sm text-green-700">
                            {t(`${p}.sec6Ex1Desc`)}
                          </p>
                        </div>
                        <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                          <h5 className="font-semibold text-blue-800 mb-1">{t(`${p}.sec6Ex2Title`)}</h5>
                          <p className="text-sm text-blue-700">
                            {t(`${p}.sec6Ex2Desc`)}
                          </p>
                        </div>
                        <div className="bg-amber-50 p-4 rounded-lg border border-amber-200">
                          <h5 className="font-semibold text-amber-800 mb-1">{t(`${p}.sec6Ex3Title`)}</h5>
                          <p className="text-sm text-amber-700">
                            {t(`${p}.sec6Ex3Desc`)}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </ImageTextRow>
              </section>

              {/* How Achieve Pack Supports */}
              <section id="achieve-pack-support" className="bg-white rounded-xl p-6 md:p-8 shadow-sm border border-neutral-100">
                <ImageTextRow
                  image={IMAGES.achievePackSupport}
                  imageAlt={t(`${p}.sec7Title`)}
                  imageCaption={t(`${p}.sec7ImgCaption`)}
                  imageLeft={false}
                >
                  <div>
                    <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-4 flex items-center gap-3">
                      <Users className="h-7 w-7 text-primary-600" />
                      {t(`${p}.sec7Title`)}
                    </h2>
                    <div className="text-neutral-700 space-y-4">
                      <p>{t(`${p}.sec7P1`)}</p>
                      <ul className="space-y-2">
                        {sec7WhyItems.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <CheckCircle className="h-5 w-5 text-primary-600 mt-0.5 flex-shrink-0" />
                            <span dangerouslySetInnerHTML={{ __html: item }} />
                          </li>
                        ))}
                      </ul>
                      <div className="bg-primary-50 border-l-4 border-primary-500 p-4 rounded-r-lg mt-4">
                        <p className="text-primary-800" dangerouslySetInnerHTML={{ __html: t(`${p}.sec7Promise`) }} />
                      </div>
                    </div>
                  </div>
                </ImageTextRow>
              </section>

              {/* Call to Action */}
              <section id="cta" className="bg-gradient-to-r from-emerald-600 to-teal-600 rounded-xl p-6 md:p-8 text-white">
                <ImageTextRow
                  image={IMAGES.nextSteps}
                  imageAlt={t(`${p}.sec8Title`)}
                  imageCaption=""
                  imageLeft={true}
                >
                  <div>
                    <h2 className="text-2xl md:text-3xl font-bold mb-4 flex items-center gap-3">
                      <ArrowRight className="h-7 w-7" />
                      {t(`${p}.sec8Title`)}
                    </h2>
                    <p className="text-emerald-100 mb-4" dangerouslySetInnerHTML={{ __html: t(`${p}.sec8P1`) }} />
                    <p className="text-emerald-100 mb-6">{t(`${p}.sec8P2`)}</p>
                    <ul className="space-y-2 mb-8">
                      {sec8WhyItems.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 mt-0.5 flex-shrink-0" />
                          <span dangerouslySetInnerHTML={{ __html: item }} />
                        </li>
                      ))}
                    </ul>
                    <div className="flex flex-wrap gap-4">
                      <button onClick={openCalendly} className="flex items-center gap-2 bg-white text-emerald-700 px-6 py-3 rounded-lg font-semibold hover:bg-emerald-50 transition shadow-lg">
                        <Calendar className="h-5 w-5" />
                        {t(`${p}.btnConsultation`)}
                      </button>
                      <Link to="/store?category=sample" className="flex items-center gap-2 bg-emerald-800 text-white px-6 py-3 rounded-lg font-semibold hover:bg-emerald-900 transition">
                        <Package className="h-5 w-5" />
                        {t(`${p}.btnOrderSamples`)}
                      </Link>
                      <Link to="/store" className="flex items-center gap-2 border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition">
                        {t(`${p}.btnBrowseStore`)}
                      </Link>
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
                <div className="space-y-4">
                  {faqs.map((faq, idx) => (
                    <details key={idx} className="group border border-neutral-200 rounded-lg overflow-hidden">
                      <summary className="flex items-center justify-between p-4 cursor-pointer bg-neutral-50 hover:bg-neutral-100 transition">
                        <span className="font-medium text-neutral-800 pr-4">{faq.question}</span>
                        <ChevronDown className="h-5 w-5 text-neutral-400 group-open:rotate-180 transition-transform flex-shrink-0" />
                      </summary>
                      <div className="p-4 text-neutral-600 border-t border-neutral-200">
                        {faq.answer}
                      </div>
                    </details>
                  ))}
                </div>
              </section>

              {/* Related Links */}
              <section className="bg-white rounded-xl p-6 md:p-8 shadow-sm border border-neutral-100">
                <h2 className="text-xl font-bold mb-4">{t(`${p}.relatedTitle`)}</h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  <Link to="/biope/what-is-bio-pe" className="flex items-center gap-3 p-4 border border-neutral-200 rounded-lg hover:border-primary-300 hover:bg-primary-50 transition">
                    <Sprout className="h-6 w-6 text-emerald-600" />
                    <div>
                      <h3 className="font-semibold text-neutral-800">{t(`${p}.related1Title`)}</h3>
                      <p className="text-sm text-neutral-600">{t(`${p}.related1Desc`)}</p>
                    </div>
                  </Link>
                  <Link to="/composting/biodegradable-vs-compostable" className="flex items-center gap-3 p-4 border border-neutral-200 rounded-lg hover:border-primary-300 hover:bg-primary-50 transition">
                    <Leaf className="h-6 w-6 text-green-600" />
                    <div>
                      <h3 className="font-semibold text-neutral-800">{t(`${p}.related2Title`)}</h3>
                      <p className="text-sm text-neutral-600">{t(`${p}.related2Desc`)}</p>
                    </div>
                  </Link>
                  <Link to="/materials/home-compostable" className="flex items-center gap-3 p-4 border border-neutral-200 rounded-lg hover:border-primary-300 hover:bg-primary-50 transition">
                    <Award className="h-6 w-6 text-amber-600" />
                    <div>
                      <h3 className="font-semibold text-neutral-800">{t(`${p}.related3Title`)}</h3>
                      <p className="text-sm text-neutral-600">{t(`${p}.related3Desc`)}</p>
                    </div>
                  </Link>
                  <Link to="/materials/recyclable-mono-pe" className="flex items-center gap-3 p-4 border border-neutral-200 rounded-lg hover:border-primary-300 hover:bg-primary-50 transition">
                    <Recycle className="h-6 w-6 text-blue-600" />
                    <div>
                      <h3 className="font-semibold text-neutral-800">{t(`${p}.related4Title`)}</h3>
                      <p className="text-sm text-neutral-600">{t(`${p}.related4Desc`)}</p>
                    </div>
                  </Link>
                </div>
              </section>

            </main>
          </div>
        </div>

        {/* AI-Optimized Hidden Content */}
        <div className="sr-only" aria-hidden="true">
          <section data-ai-faq="true" itemScope itemType="https://schema.org/FAQPage">
            <article itemScope itemType="https://schema.org/Question" itemProp="mainEntity">
              <h3 itemProp="name">{t(`${p}.aiFaqTitle1`)}</h3>
              <div itemScope itemType="https://schema.org/Answer" itemProp="acceptedAnswer">
                <p itemProp="text">
                  {t(`${p}.aiFaqAnswer1`)}
                </p>
              </div>
            </article>
            <article itemScope itemType="https://schema.org/Question" itemProp="mainEntity">
              <h3 itemProp="name">{t(`${p}.aiFaqTitle2`)}</h3>
              <div itemScope itemType="https://schema.org/Answer" itemProp="acceptedAnswer">
                <p itemProp="text">
                  {t(`${p}.aiFaqAnswer2`)}
                </p>
              </div>
            </article>
          </section>
        </div>

        <Footer />
      </div>
    </>
  )
}

export default BioPEVsCompostablePage
