import React, { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { CheckCircle, Calendar, Shield, Package, X, ChevronDown, HelpCircle, ArrowRight, Zap, Recycle, Target, TrendingUp, Building2, Layers, BarChart3, Award } from 'lucide-react'
import { useCalendly } from '../../contexts/CalendlyContext'
import Footer from '../../components/Footer'
import { SEOPageHeader } from '../../components/SEOPageLayout'
import SocialShareButtons from '../../components/SocialShareButtons'

// Image paths - using imgs/pcr/real folder
const IMAGES = {
  hero: '/imgs/pcr/real/hero.webp',
  definition: '/imgs/pcr/real/a_pcr_definition_measurement_8980939.webp',
  industry: '/imgs/pcr/real/a_pcr_industry_benchmarking_4975831.webp',
  pcr2030: '/imgs/pcr/real/a_pcr_20_30_practical_start_5360293.webp',
  pcr50: '/imgs/pcr/real/a_pcr_50_plus_complexity_6186476.webp',
  pcr100: '/imgs/pcr/real/a_pcr_100_maximum_demands_2099121.webp',
  retailer: '/imgs/pcr/real/a_pcr_retailer_expectations_6494758.webp',
  certification: '/imgs/pcr/real/a_pcr_certification_docs_0406922.webp',
  achieveTiers: '/imgs/pcr/real/a_pcr_achieve_pack_tiers_8960169.webp',
  smeJourney: '/imgs/pcr/real/a_pcr_sme_journey_6463891.webp',
  balance: '/imgs/pcr/real/a_pcr_constraints_balance_6925842.webp',
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

const PCRRealisticPage: React.FC = () => {
  const { t } = useTranslation()
  const { openCalendly } = useCalendly()

  const p = 'seoPages.pages.pcrRealistic'
  const keywords = t(`${p}.keywords`, { returnObjects: true }) as string[] || []
  const takeawaysPoints = t(`${p}.takeaways.points`, { returnObjects: true }) as string[] || []
  const meaningAskItems = t(`${p}.meaning.askItems`, { returnObjects: true }) as string[] || []
  const industryForSmeItems = t(`${p}.industry.forSmeItems`, { returnObjects: true }) as string[] || []
  const pcr2030Items = t(`${p}.pcr2030.items`, { returnObjects: true }) as string[] || []
  const pcr50Items = t(`${p}.pcr50.items`, { returnObjects: true }) as string[] || []
  const pcr100Items = t(`${p}.pcr100.items`, { returnObjects: true }) as string[] || []
  const retailerItems = t(`${p}.retailer.items`, { returnObjects: true }) as string[] || []
  const retailerSmeItems = t(`${p}.retailer.smeItems`, { returnObjects: true }) as string[] || []
  const faqs = t(`${p}.faqs`, { returnObjects: true }) as Array<{ question: string; answer: string }> || []

  return (
    <>
      <Helmet>
        <title>{t(`${p}.title`)}</title>
        <meta name="description" content={t(`${p}.description`)} />
        <link rel="canonical" href="https://achievepack.com/pcr/realistic-pcr-content" />
        <meta name="keywords" content={Array.isArray(keywords) ? keywords.join(', ') : ''} />
        
        {/* Open Graph */}
        <meta property="og:title" content={t(`${p}.ogTitle`)} />
        <meta property="og:description" content={t(`${p}.ogDescription`)} />
        <meta property="og:image" content="https://achievepack.com/imgs/pcr/real/hero.webp" />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://achievepack.com/pcr/realistic-pcr-content" />
        
        {/* Article Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": t(`${p}.articleHeadline`),
            "description": t(`${p}.articleDescription`),
            "image": "https://achievepack.com/imgs/pcr/real/hero.webp",
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
            "mainEntityOfPage": "https://achievepack.com/pcr/realistic-pcr-content"
          })}
        </script>

        {/* FAQ Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": Array.isArray(faqs) ? faqs.map(faq => ({
              "@type": "Question",
              "name": faq?.question || '',
              "acceptedAnswer": { "@type": "Answer", "text": faq?.answer || '' }
            })) : []
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-neutral-50">
        <SEOPageHeader />

        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-teal-900 to-emerald-800 text-white py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <span className="bg-teal-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {t(`${p}.hero.badge`)}
                  </span>
                </div>
                <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
                  {t(`${p}.hero.title`)}
                </h1>
                <p className="text-lg text-teal-100 mb-8">
                  {t(`${p}.hero.description`)}
                </p>
                
                <div className="flex flex-wrap gap-4">
                  <button 
                    onClick={openCalendly}
                    className="flex items-center gap-2 bg-white text-teal-800 hover:bg-teal-50 px-6 py-3 rounded-lg font-semibold transition"
                  >
                    <Calendar className="h-5 w-5" />
                    {t(`${p}.hero.cta1`)}
                  </button>
                  <Link 
                    to="/store"
                    className="flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-lg font-semibold transition"
                  >
                    <Package className="h-5 w-5" />
                    {t(`${p}.hero.cta2`)}
                  </Link>
                </div>

                {/* Trust badges */}
                <div className="flex items-center gap-4 mt-8 text-sm text-teal-200">
                  <div className="flex items-center gap-1">
                    <Target className="h-4 w-4 text-teal-400" />
                    <span>{t(`${p}.hero.trust1`)}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Building2 className="h-4 w-4 text-teal-400" />
                    <span>{t(`${p}.hero.trust2`)}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Recycle className="h-4 w-4 text-teal-400" />
                    <span>{t(`${p}.hero.trust3`)}</span>
                  </div>
                </div>
              </div>

              <div className="relative">
                <ClickableImage 
                  src={IMAGES.hero}
                  alt={t(`${p}.title`)}
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
                  {t(`${p}.takeaways.title`)}
                </h2>
                <SocialShareButtons 
                  url="https://achievepack.com/pcr/realistic-pcr-content"
                  title={t(`${p}.ogTitle`)}
                />
              </div>
              <ul className="space-y-3 text-teal-800">
                {takeawaysPoints.map((point, idx) => {
                  const colonIndex = point.indexOf(':')
                  if (colonIndex !== -1) {
                    return (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-teal-600 mt-0.5 flex-shrink-0" />
                        <span>
                          <strong>{point.substring(0, colonIndex + 1)}</strong>
                          {point.substring(colonIndex + 1)}
                        </span>
                      </li>
                    )
                  }
                  return (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-teal-600 mt-0.5 flex-shrink-0" />
                      <span>{point}</span>
                    </li>
                  )
                })}
              </ul>
            </div>
          </div>
        </section>

        {/* Introduction */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-6 flex items-center gap-3">
              <HelpCircle className="h-8 w-8 text-teal-600" />
              {t(`${p}.intro.title`)}
            </h2>
            <div className="prose prose-lg text-neutral-700 space-y-4">
              <p>
                {t(`${p}.intro.p1`)}
              </p>
              <p>
                {t(`${p}.intro.p2`)}
              </p>
            </div>
          </div>
        </section>

        {/* What does X% PCR mean - Image LEFT */}
        <section className="py-16 bg-neutral-50">
          <div className="max-w-7xl mx-auto px-4">
            <ImageTextRow
              image={IMAGES.definition}
              imageAlt={t(`${p}.meaning.title`)}
              imageCaption={t(`${p}.meaning.imageCaption`)}
              imageLeft={true}
            >
              <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-6 flex items-center gap-3">
                <BarChart3 className="h-8 w-8 text-teal-600" />
                {t(`${p}.meaning.title`)}
              </h2>
              <div className="space-y-4 text-neutral-700">
                <p>
                  {t(`${p}.meaning.p1`)}
                </p>
                <p>
                  {t(`${p}.meaning.p2`)}
                </p>
                <div className="bg-amber-50 p-4 rounded-lg">
                  <h4 className="font-bold text-amber-800 mb-2">{t(`${p}.meaning.askTitle`)}</h4>
                  <ul className="space-y-1 text-sm text-amber-700">
                    {meaningAskItems.map((item, idx) => (
                      <li key={idx}>• {item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </ImageTextRow>
          </div>
        </section>

        {/* Industry Context - Image RIGHT */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <ImageTextRow
              image={IMAGES.industry}
              imageAlt={t(`${p}.industry.title`)}
              imageCaption={t(`${p}.industry.imageCaption`)}
              imageLeft={false}
            >
              <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-6 flex items-center gap-3">
                <TrendingUp className="h-8 w-8 text-blue-600" />
                {t(`${p}.industry.title`)}
              </h2>
              <div className="space-y-4 text-neutral-700">
                <p>
                  {t(`${p}.industry.p1`)}
                </p>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-bold text-blue-800 mb-2">{t(`${p}.industry.forSmeTitle`)}</h4>
                  <ul className="space-y-1 text-sm text-blue-700">
                    {industryForSmeItems.map((item, idx) => (
                      <li key={idx}>• {item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </ImageTextRow>
          </div>
        </section>

        {/* 20-30% PCR - Image LEFT */}
        <section className="py-16 bg-neutral-50">
          <div className="max-w-7xl mx-auto px-4">
            <ImageTextRow
              image={IMAGES.pcr2030}
              imageAlt={t(`${p}.pcr2030.title`)}
              imageCaption={t(`${p}.pcr2030.imageCaption`)}
              imageLeft={true}
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-lg">20-30%</span>
                <h2 className="text-2xl md:text-3xl font-bold text-neutral-900">
                  {t(`${p}.pcr2030.title`)}
                </h2>
              </div>
              <div className="space-y-4 text-neutral-700">
                <ul className="space-y-3">
                  {pcr2030Items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-sm text-teal-700 bg-teal-50 p-3 rounded-lg">
                  {t(`${p}.pcr2030.bulb`)}
                </p>
              </div>
            </ImageTextRow>
          </div>
        </section>

        {/* 50%+ PCR - Image RIGHT */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <ImageTextRow
              image={IMAGES.pcr50}
              imageAlt={t(`${p}.pcr50.title`)}
              imageCaption={t(`${p}.pcr50.imageCaption`)}
              imageLeft={false}
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg">50%+</span>
                <h2 className="text-2xl md:text-3xl font-bold text-neutral-900">
                  {t(`${p}.pcr50.title`)}
                </h2>
              </div>
              <div className="space-y-4 text-neutral-700">
                <ul className="space-y-3">
                  {pcr50Items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <p className="text-sm text-blue-700">
                    {t(`${p}.pcr50.note`)}
                  </p>
                </div>
              </div>
            </ImageTextRow>
          </div>
        </section>

        {/* 100% PCR - Image LEFT */}
        <section className="py-16 bg-neutral-50">
          <div className="max-w-7xl mx-auto px-4">
            <ImageTextRow
              image={IMAGES.pcr100}
              imageAlt={t(`${p}.pcr100.title`)}
              imageCaption={t(`${p}.pcr100.imageCaption`)}
              imageLeft={true}
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold text-lg">100%</span>
                <h2 className="text-2xl md:text-3xl font-bold text-neutral-900">
                  {t(`${p}.pcr100.title`)}
                </h2>
              </div>
              <div className="space-y-4 text-neutral-700">
                <ul className="space-y-3">
                  {pcr100Items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-purple-600 mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="bg-amber-50 p-4 rounded-lg border-l-4 border-amber-400">
                  <p className="text-sm text-amber-800">
                    {t(`${p}.pcr100.warn`)}
                  </p>
                </div>
              </div>
            </ImageTextRow>
          </div>
        </section>

        {/* Retailer Expectations - Image RIGHT */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <ImageTextRow
              image={IMAGES.retailer}
              imageAlt={t(`${p}.retailer.title`)}
              imageCaption={t(`${p}.retailer.imageCaption`)}
              imageLeft={false}
            >
              <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-6 flex items-center gap-3">
                <Building2 className="h-8 w-8 text-emerald-600" />
                {t(`${p}.retailer.title`)}
              </h2>
              <div className="space-y-4 text-neutral-700">
                <p>
                  {t(`${p}.retailer.p1`)}
                </p>
                <ul className="space-y-2 text-neutral-600">
                  {retailerItems.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="bg-emerald-50 p-4 rounded-lg">
                  <h4 className="font-bold text-emerald-800 mb-2">{t(`${p}.retailer.smeTitle`)}</h4>
                  <ul className="space-y-1 text-sm text-emerald-700">
                    {retailerSmeItems.map((item, idx) => (
                      <li key={idx}>• {item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </ImageTextRow>
          </div>
        </section>

        {/* Documentation - Image LEFT */}
        <section className="py-16 bg-neutral-50">
          <div className="max-w-7xl mx-auto px-4">
            <ImageTextRow
              image={IMAGES.certification}
              imageAlt={t(`${p}.docsSection.title`)}
              imageCaption={t(`${p}.docsSection.imageCaption`)}
              imageLeft={true}
            >
              <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-6 flex items-center gap-3">
                <Award className="h-8 w-8 text-blue-600" />
                {t(`${p}.docsSection.title`)}
              </h2>
              <div className="space-y-4 text-neutral-700">
                <p>
                  {t(`${p}.docsSection.p1`)}
                </p>
                <div className="space-y-3">
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <h4 className="font-bold text-neutral-800 mb-1">{t(`${p}.docsSection.docs.grsTitle`)}</h4>
                    <p className="text-sm text-neutral-600">{t(`${p}.docsSection.docs.grsDesc`)}</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <h4 className="font-bold text-neutral-800 mb-1">{t(`${p}.docsSection.docs.cocTitle`)}</h4>
                    <p className="text-sm text-neutral-600">{t(`${p}.docsSection.docs.cocDesc`)}</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <h4 className="font-bold text-neutral-800 mb-1">{t(`${p}.docsSection.docs.dataTitle`)}</h4>
                    <p className="text-sm text-neutral-600">{t(`${p}.docsSection.docs.dataDesc`)}</p>
                  </div>
                </div>
              </div>
            </ImageTextRow>
          </div>
        </section>

        {/* Achieve Pack Tiers - Image RIGHT */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <ImageTextRow
              image={IMAGES.achieveTiers}
              imageAlt={t(`${p}.achieveTiers.title`)}
              imageCaption={t(`${p}.achieveTiers.imageCaption`)}
              imageLeft={false}
            >
              <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-6 flex items-center gap-3">
                <Layers className="h-8 w-8 text-teal-600" />
                {t(`${p}.achieveTiers.title`)}
              </h2>
              <div className="space-y-4 text-neutral-700">
                <p>
                  {t(`${p}.achieveTiers.p1`)}
                </p>
                <div className="space-y-3">
                  <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                    <h4 className="font-bold text-green-800">{t(`${p}.achieveTiers.tiers.entryTitle`)}</h4>
                    <p className="text-sm text-green-700">{t(`${p}.achieveTiers.tiers.entryDesc`)}</p>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                    <h4 className="font-bold text-blue-800">{t(`${p}.achieveTiers.tiers.advancedTitle`)}</h4>
                    <p className="text-sm text-blue-700">{t(`${p}.achieveTiers.tiers.advancedDesc`)}</p>
                  </div>
                  <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-500">
                    <h4 className="font-bold text-purple-800">{t(`${p}.achieveTiers.tiers.futureTitle`)}</h4>
                    <p className="text-sm text-purple-700">{t(`${p}.achieveTiers.tiers.futureDesc`)}</p>
                  </div>
                </div>
                <p className="text-sm text-teal-700 bg-teal-50 p-3 rounded-lg">
                  {t(`${p}.achieveTiers.bulb`)}
                </p>
              </div>
            </ImageTextRow>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-br from-teal-700 to-emerald-800 text-white">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              {t(`${p}.cta.title`)}
            </h2>
            <p className="text-lg text-teal-100 mb-8 max-w-2xl mx-auto">
              {t(`${p}.cta.desc`)}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={openCalendly}
                className="flex items-center justify-center gap-2 bg-white text-teal-700 px-8 py-4 rounded-lg font-semibold hover:bg-teal-50 transition shadow-lg"
              >
                <Calendar className="h-5 w-5" />
                {t(`${p}.cta.cta1`)}
              </button>
              <Link 
                to="/store"
                className="flex items-center justify-center gap-2 bg-teal-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-teal-500 transition"
              >
                <Package className="h-5 w-5" />
                {t(`${p}.cta.cta2`)}
              </Link>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-8 text-center">
              {t(`${p}.faqTitle`)}
            </h2>
            <div className="space-y-4">
              {faqs.map((faq, idx) => (
                <details key={idx} className="group bg-neutral-50 rounded-xl overflow-hidden">
                  <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-neutral-100 transition">
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

        {/* Related Links */}
        <section className="py-12 bg-neutral-50 border-t">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-xl font-bold text-neutral-900 mb-6">{t(`${p}.related.title`)}</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Link to="/pcr/pcr-plastic-guide" className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition group">
                <Recycle className="h-8 w-8 text-teal-600 mb-3" />
                <h3 className="font-semibold text-neutral-900 group-hover:text-teal-600 transition">{t(`${p}.related.res1.title`)}</h3>
                <p className="text-sm text-neutral-600 mt-2">{t(`${p}.related.res1.desc`)}</p>
              </Link>
              <Link to="/pcr/7-checklist" className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition group">
                <Shield className="h-8 w-8 text-emerald-600 mb-3" />
                <h3 className="font-semibold text-neutral-900 group-hover:text-emerald-600 transition">{t(`${p}.related.res2.title`)}</h3>
                <p className="text-sm text-neutral-600 mt-2">{t(`${p}.related.res2.desc`)}</p>
              </Link>
              <Link to="/store" className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition group">
                <Package className="h-8 w-8 text-blue-600 mb-3" />
                <h3 className="font-semibold text-neutral-900 group-hover:text-blue-600 transition">{t(`${p}.related.res3.title`)}</h3>
                <p className="text-sm text-neutral-600 mt-2">{t(`${p}.related.res3.desc`)}</p>
              </Link>
            </div>
          </div>
        </section>

        {/* AI Hidden Content for SEO */}
        <div className="sr-only" aria-hidden="true">
          <section data-ai-faq="true" itemScope itemType="https://schema.org/FAQPage">
            <article itemScope itemType="https://schema.org/Question" itemProp="mainEntity">
              <h3 itemProp="name">{t(`${p}.aiFaq.q1`)}</h3>
              <div itemScope itemType="https://schema.org/Answer" itemProp="acceptedAnswer">
                <p itemProp="text">
                  {t(`${p}.aiFaq.a1`)}
                </p>
              </div>
            </article>
            <article itemScope itemType="https://schema.org/Question" itemProp="mainEntity">
              <h3 itemProp="name">{t(`${p}.aiFaq.q2`)}</h3>
              <div itemScope itemType="https://schema.org/Answer" itemProp="acceptedAnswer">
                <p itemProp="text">
                  {t(`${p}.aiFaq.a2`)}
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

export default PCRRealisticPage
