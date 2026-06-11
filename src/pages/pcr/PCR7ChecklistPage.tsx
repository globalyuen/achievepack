import React, { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { CheckCircle, Calendar, Shield, Package, X, ChevronDown, HelpCircle, ArrowRight, Zap, Factory, Eye, Recycle, Palette, TrendingUp, MessageSquare, Users, ClipboardCheck, Layers } from 'lucide-react'
import { useCalendly } from '../../contexts/CalendlyContext'
import Footer from '../../components/Footer'
import { SEOPageHeader } from '../../components/SEOPageLayout'
import SocialShareButtons from '../../components/SocialShareButtons'

// Image paths - using imgs/PCR/7 folder
const IMAGES = {
  hero: '/imgs/PCR/7/hero.webp',
  colorVariation: '/imgs/PCR/7/a_landscape_comparison_pcr_virgin_9079701.webp',
  supplyChain: '/imgs/PCR/7/a_landscape_supply_chain_confidence_4178486.webp',
  pcrPercentage: '/imgs/PCR/7/a_landscape_pcr_percentage_progression_8891356.webp',
  lineTesting: '/imgs/PCR/7/a_landscape_line_testing_performance_2282253.webp',
  recyclability: '/imgs/PCR/7/a_landscape_recyclability_vs_content_3286518.webp',
  communication: '/imgs/PCR/7/a_landscape_pcr_messaging_communication_0425184.webp',
  partnership: '/imgs/PCR/7/a_landscape_partnership_provider_2906844.webp',
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

const PCR7ChecklistPage: React.FC = () => {
  const { t } = useTranslation()
  const { openCalendly } = useCalendly()

  const p = 'seoPages.pages.pcr7Checklist'
  const keywords = t(`${p}.keywords`, { returnObjects: true }) as string[] || []
  const takeawaysPoints = t(`${p}.takeaways.points`, { returnObjects: true }) as string[] || []
  const askItems = t(`${p}.checks.1.askItems`, { returnObjects: true }) as string[] || []
  const beforeItems = t(`${p}.checks.2.beforeItems`, { returnObjects: true }) as string[] || []
  const approachItems = t(`${p}.checks.3.approachItems`, { returnObjects: true }) as string[] || []
  const p1Items = t(`${p}.checks.4.p1Items`, { returnObjects: true }) as string[] || []
  const mitigateItems = t(`${p}.checks.4.mitigateItems`, { returnObjects: true }) as string[] || []
  const lookItems = t(`${p}.checks.7.lookItems`, { returnObjects: true }) as string[] || []
  const faqs = t(`${p}.faqs`, { returnObjects: true }) as Array<{ question: string; answer: string }> || []

  return (
    <>
      <Helmet>
        <title>{t(`${p}.title`)}</title>
        <meta name="description" content={t(`${p}.description`)} />
        <link rel="canonical" href="https://achievepack.com/pcr/7-checklist" />
        <meta name="keywords" content={Array.isArray(keywords) ? keywords.join(', ') : ''} />
        
        {/* Open Graph */}
        <meta property="og:title" content={t(`${p}.ogTitle`)} />
        <meta property="og:description" content={t(`${p}.ogDescription`)} />
        <meta property="og:image" content="https://achievepack.com/imgs/PCR/7/hero.webp" />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://achievepack.com/pcr/7-checklist" />
        
        {/* Article Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": t(`${p}.articleHeadline`),
            "description": t(`${p}.articleDescription`),
            "image": "https://achievepack.com/imgs/PCR/7/hero.webp",
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
            "mainEntityOfPage": "https://achievepack.com/pcr/7-checklist"
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
        <section className="relative bg-gradient-to-br from-emerald-900 to-teal-800 text-white py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <span className="bg-emerald-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {t(`${p}.hero.badge`)}
                  </span>
                </div>
                <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
                  {t(`${p}.hero.title`)}
                </h1>
                <p className="text-lg text-emerald-100 mb-8">
                  {t(`${p}.hero.description`)}
                </p>
                
                <div className="flex flex-wrap gap-4">
                  <button 
                    onClick={openCalendly}
                    className="flex items-center gap-2 bg-white text-emerald-800 hover:bg-emerald-50 px-6 py-3 rounded-lg font-semibold transition"
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
                <div className="flex items-center gap-4 mt-8 text-sm text-emerald-200">
                  <div className="flex items-center gap-1">
                    <ClipboardCheck className="h-4 w-4 text-emerald-400" />
                    <span>{t(`${p}.hero.trust1`)}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Shield className="h-4 w-4 text-emerald-400" />
                    <span>{t(`${p}.hero.trust2`)}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Recycle className="h-4 w-4 text-emerald-400" />
                    <span>{t(`${p}.hero.trust3`)}</span>
                  </div>
                </div>
              </div>

              <div className="relative">
                <ClickableImage 
                  src={IMAGES.hero}
                  alt={t(`${p}.hero.title`)}
                  className="w-full rounded-xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Key Takeaways */}
        <section className="py-12 bg-white border-b">
          <div className="max-w-7xl mx-auto px-4">
            <div className="bg-emerald-50 rounded-xl p-6 md:p-8">
              <div className="flex items-start justify-between mb-4">
                <h2 className="text-xl font-bold text-emerald-900 flex items-center gap-2">
                  <Zap className="h-6 w-6 text-emerald-600" />
                  {t(`${p}.takeaways.title`)}
                </h2>
                <SocialShareButtons 
                  url="https://achievepack.com/pcr/7-checklist"
                  title={t(`${p}.ogTitle`)}
                />
              </div>
              <ul className="space-y-3 text-emerald-800">
                {takeawaysPoints.map((point, idx) => {
                  const colonIndex = point.indexOf(':')
                  if (colonIndex !== -1) {
                    return (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                        <span>
                          <strong>{point.substring(0, colonIndex + 1)}</strong>
                          {point.substring(colonIndex + 1)}
                        </span>
                      </li>
                    )
                  }
                  return (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-emerald-600 mt-0.5 flex-shrink-0" />
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
              <HelpCircle className="h-8 w-8 text-emerald-600" />
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

        {/* Check 1: Color Variation - Image LEFT */}
        <section className="py-16 bg-neutral-50">
          <div className="max-w-7xl mx-auto px-4">
            <ImageTextRow
              image={IMAGES.colorVariation}
              imageAlt={t(`${p}.checks.1.title`)}
              imageCaption={t(`${p}.checks.1.imageCaption`)}
              imageLeft={true}
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-10 h-10 bg-emerald-600 text-white rounded-full flex items-center justify-center font-bold text-lg">1</span>
                <h2 className="text-2xl md:text-3xl font-bold text-neutral-900">
                  {t(`${p}.checks.1.title`)}
                </h2>
              </div>
              <div className="space-y-4 text-neutral-700">
                <p>
                  {t(`${p}.checks.1.p1`)}
                </p>
                <div className="bg-amber-50 p-4 rounded-lg">
                  <h4 className="font-bold text-amber-800 mb-2">{t(`${p}.checks.1.askTitle`)}</h4>
                  <ul className="space-y-1 text-sm text-amber-700">
                    {askItems.map((item, idx) => (
                      <li key={idx}>• {item}</li>
                    ))}
                  </ul>
                </div>
                <p className="text-sm text-emerald-700 bg-emerald-50 p-3 rounded-lg">
                  <strong>💡 </strong>{t(`${p}.checks.1.bulb`)}
                </p>
              </div>
            </ImageTextRow>
          </div>
        </section>

        {/* Check 2: Supply - Image RIGHT */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <ImageTextRow
              image={IMAGES.supplyChain}
              imageAlt={t(`${p}.checks.2.title`)}
              imageCaption={t(`${p}.checks.2.imageCaption`)}
              imageLeft={false}
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-10 h-10 bg-emerald-600 text-white rounded-full flex items-center justify-center font-bold text-lg">2</span>
                <h2 className="text-2xl md:text-3xl font-bold text-neutral-900">
                  {t(`${p}.checks.2.title`)}
                </h2>
              </div>
              <div className="space-y-4 text-neutral-700">
                <p>
                  {t(`${p}.checks.2.p1`)}
                </p>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-bold text-blue-800 mb-2">{t(`${p}.checks.2.beforeTitle`)}</h4>
                  <ul className="space-y-1 text-sm text-blue-700">
                    {beforeItems.map((item, idx) => (
                      <li key={idx}>• {item}</li>
                    ))}
                  </ul>
                </div>
                <p className="text-sm text-emerald-700 bg-emerald-50 p-3 rounded-lg">
                  <strong>💡 </strong>{t(`${p}.checks.2.bulb`)}
                </p>
              </div>
            </ImageTextRow>
          </div>
        </section>

        {/* Check 3: PCR Percentage - Image LEFT */}
        <section className="py-16 bg-neutral-50">
          <div className="max-w-7xl mx-auto px-4">
            <ImageTextRow
              image={IMAGES.pcrPercentage}
              imageAlt={t(`${p}.checks.3.title`)}
              imageCaption={t(`${p}.checks.3.imageCaption`)}
              imageLeft={true}
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-10 h-10 bg-emerald-600 text-white rounded-full flex items-center justify-center font-bold text-lg">3</span>
                <h2 className="text-2xl md:text-3xl font-bold text-neutral-900">
                  {t(`${p}.checks.3.title`)}
                </h2>
              </div>
              <div className="space-y-4 text-neutral-700">
                <p>
                  {t(`${p}.checks.3.p1`)}
                </p>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-bold text-green-800 mb-2">{t(`${p}.checks.3.approachTitle`)}</h4>
                  <ul className="space-y-1 text-sm text-green-700">
                    {approachItems.map((item, idx) => (
                      <li key={idx}>• {item}</li>
                    ))}
                  </ul>
                </div>
                <p className="text-sm text-emerald-700 bg-emerald-50 p-3 rounded-lg">
                  <strong>💡 </strong>{t(`${p}.checks.3.bulb`)}
                </p>
              </div>
            </ImageTextRow>
          </div>
        </section>

        {/* Check 4: Line Testing - Image RIGHT */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <ImageTextRow
              image={IMAGES.lineTesting}
              imageAlt={t(`${p}.checks.4.title`)}
              imageCaption={t(`${p}.checks.4.imageCaption`)}
              imageLeft={false}
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-10 h-10 bg-emerald-600 text-white rounded-full flex items-center justify-center font-bold text-lg">4</span>
                <h2 className="text-2xl md:text-3xl font-bold text-neutral-900">
                  {t(`${p}.checks.4.title`)}
                </h2>
              </div>
              <div className="space-y-4 text-neutral-700">
                <p>
                  {t(`${p}.checks.4.p1`)}
                </p>
                <ul className="space-y-2 text-neutral-600">
                  {p1Items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-amber-500 mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-bold text-blue-800 mb-2">{t(`${p}.checks.4.mitigateTitle`)}</h4>
                  <ul className="space-y-1 text-sm text-blue-700">
                    {mitigateItems.map((item, idx) => (
                      <li key={idx}>• {item}</li>
                    ))}
                  </ul>
                </div>
                <p className="text-sm text-emerald-700 bg-emerald-50 p-3 rounded-lg">
                  <strong>💡 </strong>{t(`${p}.checks.4.bulb`)}
                </p>
              </div>
            </ImageTextRow>
          </div>
        </section>

        {/* Check 5: Recyclability - Image LEFT */}
        <section className="py-16 bg-neutral-50">
          <div className="max-w-7xl mx-auto px-4">
            <ImageTextRow
              image={IMAGES.recyclability}
              imageAlt={t(`${p}.checks.5.title`)}
              imageCaption={t(`${p}.checks.5.imageCaption`)}
              imageLeft={true}
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-10 h-10 bg-emerald-600 text-white rounded-full flex items-center justify-center font-bold text-lg">5</span>
                <h2 className="text-2xl md:text-3xl font-bold text-neutral-900">
                  {t(`${p}.checks.5.title`)}
                </h2>
              </div>
              <div className="space-y-4 text-neutral-700">
                <p>
                  {t(`${p}.checks.5.p1`)}
                </p>
                <div className="space-y-3">
                  <div className="bg-amber-50 p-4 rounded-lg">
                    <p className="text-sm text-amber-700"><strong>❌ </strong>{t(`${p}.checks.5.note1`)}</p>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <p className="text-sm text-green-700"><strong>✓ </strong>{t(`${p}.checks.5.note2`)}</p>
                  </div>
                </div>
                <p className="text-sm text-emerald-700 bg-emerald-50 p-3 rounded-lg">
                  <strong>💡 </strong>{t(`${p}.checks.5.bulb`)}
                </p>
              </div>
            </ImageTextRow>
          </div>
        </section>

        {/* Check 6: Communication - Image RIGHT */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <ImageTextRow
              image={IMAGES.communication}
              imageAlt={t(`${p}.checks.6.title`)}
              imageCaption={t(`${p}.checks.6.imageCaption`)}
              imageLeft={false}
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-10 h-10 bg-emerald-600 text-white rounded-full flex items-center justify-center font-bold text-lg">6</span>
                <h2 className="text-2xl md:text-3xl font-bold text-neutral-900">
                  {t(`${p}.checks.6.title`)}
                </h2>
              </div>
              <div className="space-y-4 text-neutral-700">
                <p>
                  {t(`${p}.checks.6.p1`)}
                </p>
                <div className="space-y-3">
                  <div className="bg-red-50 p-4 rounded-lg">
                    <p className="text-sm text-red-700"><strong>❌ </strong>{t(`${p}.checks.6.avoid`)}</p>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <p className="text-sm text-green-700"><strong>✓ </strong>{t(`${p}.checks.6.use`)}</p>
                  </div>
                </div>
                <p className="text-sm text-emerald-700 bg-emerald-50 p-3 rounded-lg">
                  <strong>💡 </strong>{t(`${p}.checks.6.bulb`)}
                </p>
              </div>
            </ImageTextRow>
          </div>
        </section>

        {/* Check 7: Partner - Image LEFT */}
        <section className="py-16 bg-neutral-50">
          <div className="max-w-7xl mx-auto px-4">
            <ImageTextRow
              image={IMAGES.partnership}
              imageAlt={t(`${p}.checks.7.title`)}
              imageCaption={t(`${p}.checks.7.imageCaption`)}
              imageLeft={true}
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-10 h-10 bg-emerald-600 text-white rounded-full flex items-center justify-center font-bold text-lg">7</span>
                <h2 className="text-2xl md:text-3xl font-bold text-neutral-900">
                  {t(`${p}.checks.7.title`)}
                </h2>
              </div>
              <div className="space-y-4 text-neutral-700">
                <p>
                  {t(`${p}.checks.7.p1`)}
                </p>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-bold text-blue-800 mb-2">{t(`${p}.checks.7.lookTitle`)}</h4>
                  <ul className="space-y-1 text-sm text-blue-700">
                    {lookItems.map((item, idx) => (
                      <li key={idx}>• {item}</li>
                    ))}
                  </ul>
                </div>
                <p className="text-sm text-emerald-700 bg-emerald-50 p-3 rounded-lg">
                  <strong>💡 </strong>{t(`${p}.checks.7.bulb`)}
                </p>
              </div>
            </ImageTextRow>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-br from-emerald-700 to-teal-800 text-white">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              {t(`${p}.cta.title`)}
            </h2>
            <p className="text-lg text-emerald-100 mb-8 max-w-2xl mx-auto">
              {t(`${p}.cta.desc`)}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={openCalendly}
                className="flex items-center justify-center gap-2 bg-white text-emerald-700 px-8 py-4 rounded-lg font-semibold hover:bg-emerald-50 transition shadow-lg"
              >
                <Calendar className="h-5 w-5" />
                {t(`${p}.cta.cta1`)}
              </button>
              <Link 
                to="/store"
                className="flex items-center justify-center gap-2 bg-emerald-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-emerald-500 transition"
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
                    <span className="font-semibold text-neutral-900 pr-4">{faq?.question}</span>
                    <ChevronDown className="h-5 w-5 text-neutral-500 group-open:rotate-180 transition-transform flex-shrink-0" />
                  </summary>
                  <div className="px-6 pb-6 text-neutral-700">
                    {faq?.answer}
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
              <Link to="/materials/pcr" className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition group">
                <Layers className="h-8 w-8 text-emerald-600 mb-3" />
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

export default PCR7ChecklistPage
