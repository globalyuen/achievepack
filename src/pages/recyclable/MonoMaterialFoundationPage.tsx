import React, { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { Recycle, CheckCircle, Calendar, Shield, Package, X, ChevronDown, HelpCircle, ArrowRight, Zap, Target, Layers, Box, Palette, Leaf, TrendingUp, Settings } from 'lucide-react'
import { useCalendly } from '../../contexts/CalendlyContext'
import Footer from '../../components/Footer'
import { SEOPageHeader } from '../../components/SEOPageLayout'
import SocialShareButtons from '../../components/SocialShareButtons'

// Image paths - using imgs/recyclable/foundation folder
const IMAGES = {
  hero: '/imgs/recyclable/foundation/hero.webp?v=2',
  laminateComparison: '/imgs/recyclable/foundation/a_laminate_comparison_1771340.webp?v=2',
  nirSortingRecycling: '/imgs/recyclable/foundation/a_nir_sorting_recycling_stream_3292917.webp?v=2',
  barrierStrategy: '/imgs/recyclable/foundation/a_barrier_strategy_pouches_5906202.webp?v=2',
  ecoDigitalPrinting: '/imgs/recyclable/foundation/a_eco_digital_printing_1307882.webp?v=2',
  performanceComparison: '/imgs/recyclable/foundation/a_performance_comparison_categories_5746816.webp?v=2',
  sustainabilityStacking: '/imgs/recyclable/foundation/a_sustainability_stacking_layers_2553348.webp?v=2',
  lifecycleJourney: '/imgs/recyclable/foundation/a_lifecycle_journey_infographic_0139964.webp?v=2',
  certificationQuality: '/imgs/recyclable/foundation/a_certification_quality_showcase_3967102.webp?v=2',
}

// Clickable Image Component with lightbox
const ClickableImage: React.FC<{
  src: string
  alt: string
  className?: string
  caption?: string
}> = ({ src, alt, className = '', caption }) => {
  const [isOpen, setIsOpen] = useState(false)
  const { t } = useTranslation()

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

const MonoMaterialFoundationPage: React.FC = () => {
  const { openCalendly } = useCalendly()
  const { t } = useTranslation()

  const faqsData = t('seoPages.pages.monoMaterialFoundation.faqs', { returnObjects: true })
  const faqs = Array.isArray(faqsData) ? faqsData : []

  const takeawaysData = t('seoPages.pages.monoMaterialFoundation.takeaways.items', { returnObjects: true })
  const takeaways = Array.isArray(takeawaysData) ? takeawaysData : []

  const box1ItemsData = t('seoPages.pages.monoMaterialFoundation.designChoices.box1Items', { returnObjects: true })
  const box1Items = Array.isArray(box1ItemsData) ? box1ItemsData : []

  const box2ItemsData = t('seoPages.pages.monoMaterialFoundation.designChoices.box2Items', { returnObjects: true })
  const box2Items = Array.isArray(box2ItemsData) ? box2ItemsData : []

  const decItemsData = t('seoPages.pages.monoMaterialFoundation.decoration.items', { returnObjects: true })
  const decItems = Array.isArray(decItemsData) ? decItemsData : []

  const ecoDigitalItemsData = t('seoPages.pages.monoMaterialFoundation.ecoDigital.box2Items', { returnObjects: true })
  const ecoDigitalItems = Array.isArray(ecoDigitalItemsData) ? ecoDigitalItemsData : []

  const ctaItemsData = t('seoPages.pages.monoMaterialFoundation.cta.items', { returnObjects: true })
  const ctaItems = Array.isArray(ctaItemsData) ? ctaItemsData : []

  const aiFaqData = t('seoPages.pages.monoMaterialFoundation.aiFaq', { returnObjects: true })
  const aiFaq = Array.isArray(aiFaqData) ? aiFaqData : []

  return (
    <>
      <Helmet>
        <title>{t('seoPages.pages.monoMaterialFoundation.title')}</title>
        <meta name="description" content={t('seoPages.pages.monoMaterialFoundation.description')} />
        <link rel="canonical" href="https://achievepack.com/recyclable/mono-material-foundation" />
        <meta name="keywords" content={t('seoPages.pages.monoMaterialFoundation.keywords')} />
        
        {/* Open Graph */}
        <meta property="og:title" content={t('seoPages.pages.monoMaterialFoundation.ogTitle')} />
        <meta property="og:description" content={t('seoPages.pages.monoMaterialFoundation.ogDescription')} />
        <meta property="og:image" content="https://achievepack.com/imgs/recyclable/foundation/hero.webp" />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://achievepack.com/recyclable/mono-material-foundation" />
        
        {/* Article Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": t('seoPages.pages.monoMaterialFoundation.schemaArticleHeadline'),
            "description": t('seoPages.pages.monoMaterialFoundation.schemaArticleDescription'),
            "image": "https://achievepack.com/imgs/recyclable/foundation/hero.webp",
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
            "datePublished": "2026-01-04",
            "dateModified": new Date().toISOString().split('T')[0],
            "mainEntityOfPage": "https://achievepack.com/recyclable/mono-material-foundation"
          })}
        </script>

        {/* FAQ Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqs.map((faq: any) => ({
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
        <section className="relative bg-gradient-to-br from-teal-900 to-green-800 text-white py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <span className="bg-teal-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {t('seoPages.pages.monoMaterialFoundation.hero.tag')}
                  </span>
                </div>
                <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
                  {t('seoPages.pages.monoMaterialFoundation.hero.title')}
                </h1>
                <p className="text-lg text-teal-100 mb-8">
                  {t('seoPages.pages.monoMaterialFoundation.hero.subtitle')}
                </p>
                
                <div className="flex flex-wrap gap-4">
                  <button 
                    onClick={openCalendly}
                    className="flex items-center gap-2 bg-white text-teal-800 hover:bg-teal-50 px-6 py-3 rounded-lg font-semibold transition"
                  >
                    <Calendar className="h-5 w-5" />
                    {t('seoPages.pages.monoMaterialFoundation.hero.btnConsultation')}
                  </button>
                  <Link 
                    to="/store"
                    className="flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-lg font-semibold transition"
                  >
                    <Package className="h-5 w-5" />
                    {t('seoPages.pages.monoMaterialFoundation.hero.btnStore')}
                  </Link>
                </div>

                {/* Trust badges */}
                <div className="flex items-center gap-4 mt-8 text-sm text-teal-200">
                  <div className="flex items-center gap-1">
                    <Layers className="h-4 w-4 text-teal-400" />
                    <span>{t('seoPages.pages.monoMaterialFoundation.hero.badgeSingle')}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Recycle className="h-4 w-4 text-teal-400" />
                    <span>{t('seoPages.pages.monoMaterialFoundation.hero.badgePEStream')}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Target className="h-4 w-4 text-teal-400" />
                    <span>{t('seoPages.pages.monoMaterialFoundation.hero.badgeRetailer')}</span>
                  </div>
                </div>
              </div>

              <div className="relative">
                <ClickableImage 
                  src={IMAGES.hero}
                  alt="Mono-material design foundation for recyclable pouches"
                  className="w-full rounded-xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Key Takeaways */}
        <section className="py-12 bg-white border-b">
          <div className="max-w-7xl mx-auto px-4">
            <div className="bg-teal-50 rounded-xl p-6 md:p-8">
              <div className="flex items-start justify-between mb-4">
                <h2 className="text-xl font-bold text-teal-900 flex items-center gap-2">
                  <Zap className="h-6 w-6 text-teal-600" />
                  {t('seoPages.pages.monoMaterialFoundation.takeaways.title')}
                </h2>
                <SocialShareButtons 
                  url="https://achievepack.com/recyclable/mono-material-foundation"
                  title={t('seoPages.pages.monoMaterialFoundation.title')}
                />
              </div>
              <ul className="space-y-3 text-teal-800">
                {takeaways.map((item: string, idx: number) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-teal-600 mt-0.5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Introduction */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-6 flex items-center gap-3">
              <Target className="h-8 w-8 text-teal-600" />
              {t('seoPages.pages.monoMaterialFoundation.intro.title')}
            </h2>
            <div className="prose prose-lg text-neutral-700 space-y-4">
              <p>
                {t('seoPages.pages.monoMaterialFoundation.intro.p1')}
              </p>
              <p>
                {t('seoPages.pages.monoMaterialFoundation.intro.p2.part1')}
                <Link to="/materials/recyclable-mono-pe" className="text-primary-600 underline">
                  {t('seoPages.pages.monoMaterialFoundation.intro.p2.link')}
                </Link>
                {t('seoPages.pages.monoMaterialFoundation.intro.p2.part2')}
              </p>
            </div>
          </div>
        </section>

        {/* Working Definition Section */}
        <section className="py-16 bg-neutral-50">
          <div className="max-w-7xl mx-auto px-4">
            <ImageTextRow
              image={IMAGES.laminateComparison}
              imageAlt="Mono-material vs multi-material laminate comparison"
              imageCaption={t('seoPages.pages.monoMaterialFoundation.workingDef.imageCaption')}
              imageLeft={true}
            >
              <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-6 flex items-center gap-3">
                <Layers className="h-8 w-8 text-teal-600" />
                {t('seoPages.pages.monoMaterialFoundation.workingDef.title')}
              </h2>
              <div className="space-y-4 text-neutral-700">
                <p>
                  {t('seoPages.pages.monoMaterialFoundation.workingDef.p1')}
                </p>
                <div className="bg-teal-50 p-4 rounded-lg border-l-4 border-teal-500">
                  <p className="font-medium text-teal-800 mb-2">
                    {t('seoPages.pages.monoMaterialFoundation.workingDef.highlightTitle')}
                  </p>
                  <ul className="text-sm text-teal-700 space-y-1">
                    {(t('seoPages.pages.monoMaterialFoundation.workingDef.highlightItems', { returnObjects: true }) as string[] || []).map((item: string, idx: number) => (
                      <li key={idx}>• {item}</li>
                    ))}
                  </ul>
                </div>
                <p className="text-sm text-neutral-600">
                  {t('seoPages.pages.monoMaterialFoundation.workingDef.p2')}
                </p>
              </div>
            </ImageTextRow>
          </div>
        </section>

        {/* Why Critical for Recycling Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <ImageTextRow
              image={IMAGES.nirSortingRecycling}
              imageAlt="NIR sorting and recycling stream for mono-material packaging"
              imageCaption={t('seoPages.pages.monoMaterialFoundation.whyCritical.imageCaption')}
              imageLeft={false}
            >
              <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-6 flex items-center gap-3">
                <Recycle className="h-8 w-8 text-green-600" />
                {t('seoPages.pages.monoMaterialFoundation.whyCritical.title')}
              </h2>
              <div className="space-y-4 text-neutral-700">
                <p>
                  {t('seoPages.pages.monoMaterialFoundation.whyCritical.p1')}
                </p>
                <div className="space-y-3">
                  {(t('seoPages.pages.monoMaterialFoundation.whyCritical.boxes', { returnObjects: true }) as any[] || []).map((box: any, idx: number) => {
                    const colors = ['bg-green-50 text-green-800', 'bg-blue-50 text-blue-800', 'bg-teal-50 text-teal-800']
                    const textColors = ['text-green-700', 'text-blue-700', 'text-teal-700']
                    return (
                      <div key={idx} className={`${colors[idx % colors.length].split(' ')[0]} p-4 rounded-lg`}>
                        <h4 className={`font-bold ${colors[idx % colors.length].split(' ')[1]} mb-1`}>{box.title}</h4>
                        <p className={`text-sm ${textColors[idx % textColors.length]}`}>{box.desc}</p>
                      </div>
                    )
                  })}
                </div>
              </div>
            </ImageTextRow>
          </div>
        </section>

        {/* Design Choices - Barrier Strategy */}
        <section className="py-16 bg-neutral-50">
          <div className="max-w-7xl mx-auto px-4">
            <ImageTextRow
              image={IMAGES.barrierStrategy}
              imageAlt="Barrier strategy for mono-material pouches"
              imageCaption={t('seoPages.pages.monoMaterialFoundation.designChoices.imageCaption')}
              imageLeft={true}
            >
              <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-6 flex items-center gap-3">
                <Settings className="h-8 w-8 text-purple-600" />
                {t('seoPages.pages.monoMaterialFoundation.designChoices.title')}
              </h2>
              <div className="space-y-4 text-neutral-700">
                <p>
                  {t('seoPages.pages.monoMaterialFoundation.designChoices.p1')}
                </p>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-bold text-purple-800 mb-2">
                    {t('seoPages.pages.monoMaterialFoundation.designChoices.box1Title')}
                  </h4>
                  <ul className="text-sm text-purple-700 space-y-1">
                    {box1Items.map((item: string, idx: number) => (
                      <li key={idx}>• {item}</li>
                    ))}
                  </ul>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-bold text-purple-800 mb-2">
                    {t('seoPages.pages.monoMaterialFoundation.designChoices.box2Title')}
                  </h4>
                  <ul className="text-sm text-purple-700 space-y-1">
                    {box2Items.map((item: string, idx: number) => (
                      <li key={idx}>• {item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </ImageTextRow>
          </div>
        </section>

        {/* Design Choices - Decoration */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <ImageTextRow
              image={IMAGES.ecoDigitalPrinting}
              imageAlt="Eco Digital printing on mono-material pouches"
              imageCaption={t('seoPages.pages.monoMaterialFoundation.decoration.imageCaption')}
              imageLeft={false}
            >
              <h3 className="text-xl md:text-2xl font-bold text-neutral-900 mb-6 flex items-center gap-3">
                <Palette className="h-7 w-7 text-pink-600" />
                {t('seoPages.pages.monoMaterialFoundation.decoration.title')}
              </h3>
              <div className="space-y-4 text-neutral-700">
                <ul className="space-y-3">
                  {decItems.map((item: string, idx: number) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-pink-600 mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="bg-pink-50 border border-pink-200 p-4 rounded-lg mt-4">
                  <p className="text-pink-800 text-sm">
                    <strong>{t('seoPages.pages.monoMaterialFoundation.decoration.highlight')}</strong>
                  </p>
                </div>
              </div>
            </ImageTextRow>
          </div>
        </section>

        {/* Eco Digital Mono-PE Section */}
        <section className="py-16 bg-neutral-50">
          <div className="max-w-7xl mx-auto px-4">
            <ImageTextRow
              image={IMAGES.performanceComparison}
              imageAlt="Eco Digital mono-PE performance across categories"
              imageCaption={t('seoPages.pages.monoMaterialFoundation.ecoDigital.imageCaption')}
              imageLeft={true}
            >
              <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-6 flex items-center gap-3">
                <Box className="h-8 w-8 text-primary-600" />
                {t('seoPages.pages.monoMaterialFoundation.ecoDigital.title')}
              </h2>
              <div className="space-y-4 text-neutral-700">
                <p>
                  {t('seoPages.pages.monoMaterialFoundation.ecoDigital.p1')}
                </p>
                <div className="bg-primary-50 p-4 rounded-lg">
                  <h4 className="font-bold text-primary-800 mb-2">
                    {t('seoPages.pages.monoMaterialFoundation.ecoDigital.box1Title')}
                  </h4>
                  <p className="text-sm text-primary-700">
                    {t('seoPages.pages.monoMaterialFoundation.ecoDigital.box1Desc')}
                  </p>
                </div>
                <div className="bg-primary-50 p-4 rounded-lg">
                  <h4 className="font-bold text-primary-800 mb-2">
                    {t('seoPages.pages.monoMaterialFoundation.ecoDigital.box2Title')}
                  </h4>
                  <ul className="text-sm text-primary-700 space-y-1">
                    {ecoDigitalItems.map((item: string, idx: number) => (
                      <li key={idx}>• {item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </ImageTextRow>
          </div>
        </section>

        {/* Combining with PCR and Bio-PE */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <ImageTextRow
              image={IMAGES.sustainabilityStacking}
              imageAlt="Layering PCR and bio-PE on mono-material foundation"
              imageCaption={t('seoPages.pages.monoMaterialFoundation.combining.imageCaption')}
              imageLeft={false}
            >
              <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-6 flex items-center gap-3">
                <TrendingUp className="h-8 w-8 text-emerald-600" />
                {t('seoPages.pages.monoMaterialFoundation.combining.title')}
              </h2>
              <div className="space-y-4 text-neutral-700">
                <p>
                  {t('seoPages.pages.monoMaterialFoundation.combining.p1')}
                </p>
                <div className="space-y-3">
                  <div className="bg-teal-50 p-4 rounded-lg">
                    <h4 className="font-bold text-teal-800 mb-1">
                      {t('seoPages.pages.monoMaterialFoundation.combining.box1Title')}
                    </h4>
                    <p className="text-sm text-teal-700">
                      {t('seoPages.pages.monoMaterialFoundation.combining.box1Desc.part1')}
                      <Link to="/materials/pcr" className="underline">
                        {t('seoPages.pages.monoMaterialFoundation.combining.box1Desc.link')}
                      </Link>
                      {t('seoPages.pages.monoMaterialFoundation.combining.box1Desc.part2')}
                    </p>
                  </div>
                  <div className="bg-emerald-50 p-4 rounded-lg">
                    <h4 className="font-bold text-emerald-800 mb-1">
                      {t('seoPages.pages.monoMaterialFoundation.combining.box2Title')}
                    </h4>
                    <p className="text-sm text-emerald-700">
                      {t('seoPages.pages.monoMaterialFoundation.combining.box2Desc.part1')}
                      <Link to="/materials/bio-pe" className="underline">
                        {t('seoPages.pages.monoMaterialFoundation.combining.box2Desc.link')}
                      </Link>
                      {t('seoPages.pages.monoMaterialFoundation.combining.box2Desc.part2')}
                    </p>
                  </div>
                </div>
                <div className="bg-green-50 border border-green-200 p-4 rounded-lg mt-4">
                  <p className="text-green-800 text-sm">
                    {t('seoPages.pages.monoMaterialFoundation.combining.highlight')}
                  </p>
                </div>
              </div>
            </ImageTextRow>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-neutral-50">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-8 flex items-center gap-3">
              <HelpCircle className="h-8 w-8 text-teal-600" />
              {t('seoPages.faq')}
            </h2>
            <div className="space-y-4">
              {faqs.map((faq: any, idx: number) => (
                <details key={idx} className="group bg-white rounded-xl overflow-hidden shadow-sm">
                  <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-neutral-50 transition">
                    <span className="font-semibold text-neutral-900 pr-4">{faq.question}</span>
                    <ChevronDown className="h-5 w-5 text-neutral-500 group-open:rotate-180 transition-transform flex-shrink-0" />
                  </summary>
                  <div className="px-6 pb-6 text-neutral-700">
                    {faq.answer}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-br from-teal-900 to-green-800 text-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-2xl md:text-4xl font-bold mb-6">
                  {t('seoPages.pages.monoMaterialFoundation.cta.title')}
                </h2>
                <p className="text-lg text-teal-100 mb-6">
                  {t('seoPages.pages.monoMaterialFoundation.cta.p1')}
                </p>
                <p className="text-teal-200 mb-8">
                  {t('seoPages.pages.monoMaterialFoundation.cta.p2')}
                </p>
                <ul className="space-y-2 text-teal-100 mb-8">
                  {ctaItems.map((item: string, idx: number) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-teal-400 mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <button 
                    onClick={openCalendly}
                    className="flex items-center justify-center gap-2 bg-white text-teal-800 hover:bg-teal-50 px-6 py-3 rounded-lg font-semibold transition"
                  >
                    <Calendar className="h-5 w-5" />
                    {t('seoPages.pages.monoMaterialFoundation.cta.btnConsultation')}
                  </button>
                  <Link 
                    to="/store?category=sample"
                    className="flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-lg font-semibold transition"
                  >
                    <Package className="h-5 w-5" />
                    {t('seoPages.pages.monoMaterialFoundation.cta.btnSamples')}
                  </Link>
                  <Link 
                    to="/store"
                    className="flex items-center justify-center gap-2 border-2 border-white/30 hover:border-white/50 text-white px-6 py-3 rounded-lg font-semibold transition"
                  >
                    <ArrowRight className="h-5 w-5" />
                    {t('seoPages.pages.monoMaterialFoundation.cta.btnStore')}
                  </Link>
                </div>
              </div>
              <div>
                <ClickableImage 
                  src={IMAGES.certificationQuality}
                  alt="Mono-material certification and quality showcase"
                  className="w-full rounded-xl shadow-2xl"
                  caption={t('seoPages.pages.monoMaterialFoundation.cta.imageCaption')}
                />
              </div>
            </div>
          </div>
        </section>

        {/* AI-Optimized Hidden Content */}
        <div className="sr-only" aria-hidden="true">
          <section data-ai-faq="true" itemScope itemType="https://schema.org/FAQPage">
            {aiFaq.map((faq: any, idx: number) => (
              <article key={idx} itemScope itemType="https://schema.org/Question" itemProp="mainEntity">
                <h3 itemProp="name">{faq.q}</h3>
                <div itemScope itemType="https://schema.org/Answer" itemProp="acceptedAnswer">
                  <p itemProp="text">
                    {faq.a}
                  </p>
                </div>
              </article>
            ))}
          </section>
        </div>

        <Footer />
      </div>
    </>
  )
}

export default MonoMaterialFoundationPage
