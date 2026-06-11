import React, { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { Recycle, CheckCircle, Calendar, Shield, Package, X, ChevronDown, HelpCircle, ArrowRight, Zap, Leaf, Layers, Target, TrendingUp, Map, ClipboardList } from 'lucide-react'
import { useCalendly } from '../../contexts/CalendlyContext'
import Footer from '../../components/Footer'
import { SEOPageHeader } from '../../components/SEOPageLayout'
import SocialShareButtons from '../../components/SocialShareButtons'

// Image paths - using imgs/recyclable/vs folder
const IMAGES = {
  hero: '/imgs/recyclable/vs/hero.webp?v=2',
  leverMonoRecyclable: '/imgs/recyclable/vs/a_lever_mono_recyclable_9527687.webp?v=2',
  leverPCR: '/imgs/recyclable/vs/a_lever_pcr_content_6734619.webp?v=2',
  leverBioBased: '/imgs/recyclable/vs/a_lever_bio_based_6179643.webp?v=2',
  priorityRecyclableFirst: '/imgs/recyclable/vs/a_priority_recyclable_first_6251748.webp?v=2',
  priorityLayeredHierarchy: '/imgs/recyclable/vs/a_priority_layered_hierarchy_3434507.webp?v=2',
  marketStrategyRegional: '/imgs/recyclable/vs/a_market_strategy_regional_0314261.webp?v=2',
  ctaMaterialRoadmap: '/imgs/recyclable/vs/a_cta_material_roadmap_8490370.webp?v=2',
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

const RecyclableVsPCRPage: React.FC = () => {
  const { t } = useTranslation()
  const { openCalendly } = useCalendly()

  const p = 'seoPages.pages.recyclableVsPcr'
  const keywords = t(`${p}.keywords`, { returnObjects: true }) as string[] || []
  const takeawaysPoints = t(`${p}.takeaways.points`, { returnObjects: true }) as string[] || []
  
  const whenItems = t(`${p}.recyclableFirst.whenItems`, { returnObjects: true }) as string[] || []
  const benefitsItems = t(`${p}.pcrSecond.benefitsItems`, { returnObjects: true }) as string[] || []
  const pointsItems = t(`${p}.bioPeThird.pointsItems`, { returnObjects: true }) as string[] || []
  
  const s1Items = t(`${p}.roadmap.steps.s1Items`, { returnObjects: true }) as string[] || []
  const s2Items = t(`${p}.roadmap.steps.s2Items`, { returnObjects: true }) as string[] || []
  const s3Items = t(`${p}.roadmap.steps.s3Items`, { returnObjects: true }) as string[] || []
  
  const portfolioItems = t(`${p}.portfolio.items`, { returnObjects: true }) as string[] || []
  const ctaItems = t(`${p}.cta.items`, { returnObjects: true }) as string[] || []
  const faqs = t(`${p}.faqs`, { returnObjects: true }) as Array<{ question: string; answer: string }> || []

  // Helper to dynamically render key terms as Links
  const renderTextWithLinks = (text: string): React.ReactNode => {
    if (!text) return null

    const mappings = [
      {
        regex: /Eco\s*Digital\s*mono[-‑]PE\s*pouches|Eco\s*Digital\s*mono[-‑]PE\s*袋|bolsas\s*de\s*mono[-‑]PE\s*Eco\s*Digital|sachets\s*mono[-‑]PE\s*Eco\s*Digital/i,
        path: '/materials/recyclable-mono-pe'
      },
      {
        regex: /Eco\s*Digital\s*mono[-‑]PE\s*structures|Eco\s*Digital\s*mono[-‑]PE\s*結構|estructuras\s*de\s*mono[-‑]PE\s*Eco\s*Digital|structures\s*mono[-‑]PE\s*Eco\s*Digital/i,
        path: '/pcr/pcr-plastic-guide'
      },
      {
        regex: /partially\s*or\s*fully\s*bio[-‑]based|部分或完全基於生物的|parcial\s*o\s*totalmente\s*de\s*origen\s*biológico|partiellement\s*ou\s*entièrement\s*biosourcés/i,
        path: '/biope/what-is-bio-pe'
      },
      {
        regex: /food[-‑]grade\s*PCR\s*PE|食品級\s*PCR\s*PE|PE\s*PCR\s*de\s*grado\s*alimenticio|PE\s*PCR\s*de\s*qualité\s*alimentaire/i,
        path: '/materials/pcr'
      },
      {
        regex: /bio[-‑]based\s*PE\s*grades|生物基\s*PE\s*牌號|grados\s*de\s*PE\s*de\s*origen\s*biológico|grades\s*de\s*PE\s*biosourcés/i,
        path: '/materials/bio-pe'
      },
      {
        regex: /Eco\s*Digital\s*mono[-‑]PE/i,
        path: '/materials/recyclable-mono-pe'
      }
    ]

    for (const mapping of mappings) {
      const match = text.match(mapping.regex)
      if (match && match.index !== undefined) {
        const matchText = match[0]
        const startIndex = match.index
        const endIndex = startIndex + matchText.length
        const prefix = text.substring(0, startIndex)
        const suffix = text.substring(endIndex)
        return (
          <>
            {prefix}
            <Link to={mapping.path} className="underline font-medium hover:text-emerald-600 transition">
              {matchText}
            </Link>
            {renderTextWithLinks(suffix)}
          </>
        )
      }
    }

    return <>{text}</>
  }

  return (
    <>
      <Helmet>
        <title>{t(`${p}.title`)}</title>
        <meta name="description" content={t(`${p}.description`)} />
        <link rel="canonical" href="https://achievepack.com/pcr/recyclable-vs-pcr-biobased" />
        <meta name="keywords" content={Array.isArray(keywords) ? keywords.join(', ') : ''} />
        
        {/* Open Graph */}
        <meta property="og:title" content={t(`${p}.ogTitle`)} />
        <meta property="og:description" content={t(`${p}.ogDescription`)} />
        <meta property="og:image" content="https://achievepack.com/imgs/recyclable/vs/hero.webp" />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://achievepack.com/pcr/recyclable-vs-pcr-biobased" />
        
        {/* Article Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": t(`${p}.articleHeadline`),
            "description": t(`${p}.articleDescription`),
            "image": "https://achievepack.com/imgs/recyclable/vs/hero.webp",
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
            "mainEntityOfPage": "https://achievepack.com/pcr/recyclable-vs-pcr-biobased"
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
                    <Recycle className="h-4 w-4 text-emerald-400" />
                    <span>{t(`${p}.hero.trust1`)}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Layers className="h-4 w-4 text-emerald-400" />
                    <span>{t(`${p}.hero.trust2`)}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Leaf className="h-4 w-4 text-emerald-400" />
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
            <div className="bg-emerald-50 rounded-xl p-6 md:p-8">
              <div className="flex items-start justify-between mb-4">
                <h2 className="text-xl font-bold text-emerald-900 flex items-center gap-2">
                  <Zap className="h-6 w-6 text-emerald-600" />
                  {t(`${p}.takeaways.title`)}
                </h2>
                <SocialShareButtons 
                  url="https://achievepack.com/pcr/recyclable-vs-pcr-biobased"
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
              <Target className="h-8 w-8 text-emerald-600" />
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

        {/* Three Core Levers Section */}
        <section className="py-16 bg-neutral-50">
          <div className="max-w-7xl mx-auto px-4">
            <ImageTextRow
              image={IMAGES.leverMonoRecyclable}
              imageAlt={t(`${p}.leversSection.title`)}
              imageCaption={t(`${p}.leversSection.imageCaption`)}
              imageLeft={true}
            >
              <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-6 flex items-center gap-3">
                <Layers className="h-8 w-8 text-emerald-600" />
                {t(`${p}.leversSection.title`)}
              </h2>
              <div className="space-y-4 text-neutral-700">
                <p>{t(`${p}.leversSection.p1`)}</p>
                <div className="space-y-3">
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-bold text-green-800 mb-1">{t(`${p}.leversSection.levers.l1Title`)}</h4>
                    <p className="text-sm text-green-700">{t(`${p}.leversSection.levers.l1Desc`)}</p>
                  </div>
                  <div className="bg-teal-50 p-4 rounded-lg">
                    <h4 className="font-bold text-teal-800 mb-1">{t(`${p}.leversSection.levers.l2Title`)}</h4>
                    <p className="text-sm text-teal-700">{t(`${p}.leversSection.levers.l2Desc`)}</p>
                  </div>
                  <div className="bg-emerald-50 p-4 rounded-lg">
                    <h4 className="font-bold text-emerald-800 mb-1">{t(`${p}.leversSection.levers.l3Title`)}</h4>
                    <p className="text-sm text-emerald-700">{t(`${p}.leversSection.levers.l3Desc`)}</p>
                  </div>
                </div>
                <p className="text-sm text-neutral-600 mt-4">
                  {t(`${p}.leversSection.p2`)}
                </p>
              </div>
            </ImageTextRow>
          </div>
        </section>

        {/* When Recyclability First Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <ImageTextRow
              image={IMAGES.priorityRecyclableFirst}
              imageAlt={t(`${p}.recyclableFirst.title`)}
              imageCaption={t(`${p}.recyclableFirst.imageCaption`)}
              imageLeft={false}
            >
              <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-6 flex items-center gap-3">
                <Recycle className="h-8 w-8 text-green-600" />
                {t(`${p}.recyclableFirst.title`)}
              </h2>
              <div className="space-y-4 text-neutral-700">
                <p>
                  {t(`${p}.recyclableFirst.p1`)}
                </p>
                <p className="font-medium text-green-700">{t(`${p}.recyclableFirst.whenTitle`)}</p>
                <ul className="space-y-2">
                  {whenItems.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="bg-green-50 border border-green-200 p-4 rounded-lg mt-4">
                  <p className="text-green-800 text-sm">
                    {renderTextWithLinks(t(`${p}.recyclableFirst.bulb`))}
                  </p>
                </div>
              </div>
            </ImageTextRow>
          </div>
        </section>

        {/* PCR After Recyclability Section */}
        <section className="py-16 bg-neutral-50">
          <div className="max-w-7xl mx-auto px-4">
            <ImageTextRow
              image={IMAGES.leverPCR}
              imageAlt={t(`${p}.pcrSecond.title`)}
              imageCaption={t(`${p}.pcrSecond.imageCaption`)}
              imageLeft={true}
            >
              <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-6 flex items-center gap-3">
                <Shield className="h-8 w-8 text-teal-600" />
                {t(`${p}.pcrSecond.title`)}
              </h2>
              <div className="space-y-4 text-neutral-700">
                <p>
                  {t(`${p}.pcrSecond.p1`)}
                </p>
                <p className="font-medium text-teal-700">{t(`${p}.pcrSecond.benefitsTitle`)}</p>
                <ul className="space-y-2">
                  {benefitsItems.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-teal-600 mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="bg-teal-50 border border-teal-200 p-4 rounded-lg mt-4">
                  <p className="text-teal-800 text-sm">
                    {renderTextWithLinks(t(`${p}.pcrSecond.bulb`))}
                  </p>
                </div>
              </div>
            </ImageTextRow>
          </div>
        </section>

        {/* Bio-PE Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <ImageTextRow
              image={IMAGES.leverBioBased}
              imageAlt={t(`${p}.bioPeThird.title`)}
              imageCaption={t(`${p}.bioPeThird.imageCaption`)}
              imageLeft={false}
            >
              <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-6 flex items-center gap-3">
                <Leaf className="h-8 w-8 text-emerald-600" />
                {t(`${p}.bioPeThird.title`)}
              </h2>
              <div className="space-y-4 text-neutral-700">
                <p>
                  {t(`${p}.bioPeThird.p1`)}
                </p>
                <p className="font-medium text-emerald-700">{t(`${p}.bioPeThird.pointsTitle`)}</p>
                <ul className="space-y-2">
                  {pointsItems.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="bg-emerald-50 border border-emerald-200 p-4 rounded-lg mt-4">
                  <p className="text-emerald-800 text-sm">
                    {renderTextWithLinks(t(`${p}.bioPeThird.bulb`))}
                  </p>
                </div>
              </div>
            </ImageTextRow>
          </div>
        </section>

        {/* Prioritisation Roadmap Section */}
        <section className="py-16 bg-neutral-50">
          <div className="max-w-7xl mx-auto px-4">
            <ImageTextRow
              image={IMAGES.priorityLayeredHierarchy}
              imageAlt={t(`${p}.roadmap.title`)}
              imageCaption={t(`${p}.roadmap.imageCaption`)}
              imageLeft={true}
            >
              <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-6 flex items-center gap-3">
                <TrendingUp className="h-8 w-8 text-blue-600" />
                {t(`${p}.roadmap.title`)}
              </h2>
              <div className="space-y-4 text-neutral-700">
                <p>{t(`${p}.roadmap.p1`)}</p>
                <div className="space-y-4">
                  <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                    <h4 className="font-bold text-green-800 mb-2">{t(`${p}.roadmap.steps.s1Title`)}</h4>
                    <ul className="text-sm text-green-700 space-y-1">
                      {s1Items.map((item, idx) => (
                        <li key={idx}>• {renderTextWithLinks(item)}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-teal-50 p-4 rounded-lg border-l-4 border-teal-500">
                    <h4 className="font-bold text-teal-800 mb-2">{t(`${p}.roadmap.steps.s2Title`)}</h4>
                    <ul className="text-sm text-teal-700 space-y-1">
                      {s2Items.map((item, idx) => (
                        <li key={idx}>• {renderTextWithLinks(item)}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-emerald-50 p-4 rounded-lg border-l-4 border-emerald-500">
                    <h4 className="font-bold text-emerald-800 mb-2">{t(`${p}.roadmap.steps.s3Title`)}</h4>
                    <ul className="text-sm text-emerald-700 space-y-1">
                      {s3Items.map((item, idx) => (
                        <li key={idx}>• {renderTextWithLinks(item)}</li>
                      ))}
                    </ul>
                  </div>
                </div>
                <p className="text-sm text-neutral-600 mt-4">
                  {t(`${p}.roadmap.p2`)}
                </p>
              </div>
            </ImageTextRow>
          </div>
        </section>

        {/* Eco Digital Portfolio Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <ImageTextRow
              image={IMAGES.marketStrategyRegional}
              imageAlt={t(`${p}.portfolio.title`)}
              imageCaption={t(`${p}.portfolio.imageCaption`)}
              imageLeft={false}
            >
              <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-6 flex items-center gap-3">
                <Package className="h-8 w-8 text-primary-600" />
                {t(`${p}.portfolio.title`)}
              </h2>
              <div className="space-y-4 text-neutral-700">
                <p>
                  {t(`${p}.portfolio.p1`)}
                </p>
                <ul className="space-y-3">
                  {portfolioItems.map((item, idx) => {
                    const colonIndex = item.indexOf(':')
                    if (colonIndex !== -1) {
                      return (
                        <li key={idx} className="flex items-start gap-2">
                          {idx === 0 ? <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" /> :
                           idx === 1 ? <CheckCircle className="h-5 w-5 text-teal-600 mt-0.5 flex-shrink-0" /> :
                           <CheckCircle className="h-5 w-5 text-emerald-600 mt-0.5 flex-shrink-0" />}
                          <span>
                            <strong>{item.substring(0, colonIndex + 1)}</strong>
                            {renderTextWithLinks(item.substring(colonIndex + 1))}
                          </span>
                        </li>
                      )
                    }
                    return (
                      <li key={idx} className="flex items-start gap-2">
                        {idx === 0 ? <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" /> :
                         idx === 1 ? <CheckCircle className="h-5 w-5 text-teal-600 mt-0.5 flex-shrink-0" /> :
                         <CheckCircle className="h-5 w-5 text-emerald-600 mt-0.5 flex-shrink-0" />}
                        <span>{renderTextWithLinks(item)}</span>
                      </li>
                    )
                  })}
                </ul>
                <div className="bg-primary-50 border border-primary-200 p-4 rounded-lg mt-4">
                  <p className="text-primary-800 text-sm">
                    {t(`${p}.portfolio.bulb`)}
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
              <HelpCircle className="h-8 w-8 text-emerald-600" />
              {t(`${p}.faqTitle`)}
            </h2>
            <div className="space-y-4">
              {faqs.map((faq, idx) => (
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
        <section className="py-16 bg-gradient-to-br from-emerald-900 to-teal-800 text-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-2xl md:text-4xl font-bold mb-6">
                  {t(`${p}.cta.title`)}
                </h2>
                <p className="text-lg text-emerald-100 mb-6">
                  {t(`${p}.cta.p1`)}
                </p>
                <p className="text-emerald-200 mb-8">
                  {t(`${p}.cta.p2`)}
                </p>
                <ul className="space-y-2 text-emerald-100 mb-8">
                  {ctaItems.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      {idx === 0 ? <Map className="h-5 w-5 text-emerald-400 mt-0.5 flex-shrink-0" /> :
                       idx === 1 ? <ClipboardList className="h-5 w-5 text-emerald-400 mt-0.5 flex-shrink-0" /> :
                       <TrendingUp className="h-5 w-5 text-emerald-400 mt-0.5 flex-shrink-0" />}
                      <span>{renderTextWithLinks(item)}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <button 
                    onClick={openCalendly}
                    className="flex items-center justify-center gap-2 bg-white text-emerald-800 hover:bg-emerald-50 px-6 py-3 rounded-lg font-semibold transition"
                  >
                    <Calendar className="h-5 w-5" />
                    {t(`${p}.cta.cta1`)}
                  </button>
                  <Link 
                    to="/store?category=sample"
                    className="flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-lg font-semibold transition"
                  >
                    <Package className="h-5 w-5" />
                    {t(`${p}.cta.cta2`)}
                  </Link>
                  <Link 
                    to="/store"
                    className="flex items-center justify-center gap-2 border-2 border-white/30 hover:border-white/50 text-white px-6 py-3 rounded-lg font-semibold transition"
                  >
                    <ArrowRight className="h-5 w-5" />
                    {t(`${p}.cta.cta3`)}
                  </Link>
                </div>
              </div>
              <div>
                <ClickableImage 
                  src={IMAGES.ctaMaterialRoadmap}
                  alt={t(`${p}.cta.imageCaption`)}
                  className="w-full rounded-xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* AI-Optimized Hidden Content */}
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

            <article itemScope itemType="https://schema.org/Question" itemProp="mainEntity">
              <h3 itemProp="name">{t(`${p}.aiFaq.q3`)}</h3>
              <div itemScope itemType="https://schema.org/Answer" itemProp="acceptedAnswer">
                <p itemProp="text">
                  {t(`${p}.aiFaq.a3`)}
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

export default RecyclableVsPCRPage
