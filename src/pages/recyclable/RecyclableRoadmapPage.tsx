import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { 
  Recycle, CheckCircle, Calendar, Shield, Package, X, ChevronDown, 
  HelpCircle, ArrowRight, Zap, Target, ClipboardList, Layers, 
  AlertTriangle, TrendingUp, Factory, Settings 
} from 'lucide-react'
import { useCalendly } from '../../contexts/CalendlyContext'
import Footer from '../../components/Footer'
import { SEOPageHeader } from '../../components/SEOPageLayout'
import SocialShareButtons from '../../components/SocialShareButtons'

// Image paths - using imgs/recyclable/roadmap folder
const IMAGES = {
  hero: '/imgs/recyclable/roadmap/hero.webp?v=2',
  step1AuditComplexity: '/imgs/recyclable/roadmap/a_achieve_pack_step1_audit_complexity_3721168.webp?v=2',
  step1SkuPrioritization: '/imgs/recyclable/roadmap/a_achieve_pack_step1_sku_prioritization_6929282.webp?v=2',
  step2DigitalFlexibility: '/imgs/recyclable/roadmap/a_achieve_pack_step2_digital_design_flexibility_8242721.webp?v=2',
  step2EcoDigitalShowcase: '/imgs/recyclable/roadmap/a_achieve_pack_step2_eco_digital_showcase_0773772.webp?v=2',
  step3DowngaugeOptimization: '/imgs/recyclable/roadmap/a_achieve_pack_step3_downgauge_optimization_9562718.webp?v=2',
  step3OptimizeEnhance: '/imgs/recyclable/roadmap/a_achieve_pack_step3_optimize_enhance_9962238.webp?v=2',
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

const RecyclableRoadmapPage: React.FC = () => {
  const { t } = useTranslation()
  const p = 'seoPages.pages.recyclableRoadmap'
  const { openCalendly } = useCalendly()

  const faqs = [
    {
      question: t(`${p}.faqs.q1`),
      answer: t(`${p}.faqs.a1`)
    },
    {
      question: t(`${p}.faqs.q2`),
      answer: t(`${p}.faqs.a2`)
    },
    {
      question: t(`${p}.faqs.q3`),
      answer: t(`${p}.faqs.a3`)
    },
    {
      question: t(`${p}.faqs.q4`),
      answer: t(`${p}.faqs.a4`)
    },
    {
      question: t(`${p}.faqs.q5`),
      answer: t(`${p}.faqs.a5`)
    },
    {
      question: t(`${p}.faqs.q6`),
      answer: t(`${p}.faqs.a6`)
    }
  ]

  return (
    <>
      <Helmet>
        <title>{t(`${p}.title`)}</title>
        <meta name="description" content={t(`${p}.description`)} />
        <link rel="canonical" href="https://achievepack.com/recyclable/roadmap-sme" />
        <meta name="keywords" content="recyclable packaging roadmap, 100% recyclable pouches, mono-PE conversion, SME sustainable packaging, recyclable flexible packaging, packaging audit, Eco Digital" />
        
        {/* Open Graph */}
        <meta property="og:title" content={t(`${p}.title`)} />
        <meta property="og:description" content={t(`${p}.heroSubtitle`)} />
        <meta property="og:image" content="https://achievepack.com/imgs/recyclable/roadmap/hero.webp" />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://achievepack.com/recyclable/roadmap-sme" />
        
        {/* Article Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": t(`${p}.heroTitle`),
            "description": t(`${p}.description`),
            "image": "https://achievepack.com/imgs/recyclable/roadmap/hero.webp",
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
            "mainEntityOfPage": "https://achievepack.com/recyclable/roadmap-sme"
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
        <section className="relative bg-gradient-to-br from-green-900 to-emerald-800 text-white py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {t(`${p}.heroBadge`)}
                  </span>
                </div>
                <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
                  {t(`${p}.heroTitle`)}
                </h1>
                <p className="text-lg text-green-100 mb-8">
                  {t(`${p}.heroSubtitle`)}
                </p>
                
                <div className="flex flex-wrap gap-4">
                  <button 
                    onClick={openCalendly}
                    className="flex items-center gap-2 bg-white text-green-800 hover:bg-green-50 px-6 py-3 rounded-lg font-semibold transition"
                  >
                    <Calendar className="h-5 w-5" />
                    {t(`${p}.heroBtn1`)}
                  </button>
                  <Link 
                    to="/store"
                    className="flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-lg font-semibold transition"
                  >
                    <Package className="h-5 w-5" />
                    {t(`${p}.heroBtn2`)}
                  </Link>
                </div>

                {/* Trust badges */}
                <div className="flex items-center gap-4 mt-8 text-sm text-green-200">
                  <div className="flex items-center gap-1">
                    <ClipboardList className="h-4 w-4 text-green-400" />
                    <span>{t(`${p}.trustBadge1`)}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Recycle className="h-4 w-4 text-green-400" />
                    <span>{t(`${p}.trustBadge2`)}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Target className="h-4 w-4 text-green-400" />
                    <span>{t(`${p}.trustBadge3`)}</span>
                  </div>
                </div>
              </div>

              <div className="relative">
                <ClickableImage 
                  src={IMAGES.hero}
                  alt={t(`${p}.heroTitle`)}
                  className="w-full rounded-xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Key Takeaways */}
        <section className="py-12 bg-white border-b">
          <div className="max-w-7xl mx-auto px-4">
            <div className="bg-green-50 rounded-xl p-6 md:p-8">
              <div className="flex items-start justify-between mb-4">
                <h2 className="text-xl font-bold text-green-900 flex items-center gap-2">
                  <Zap className="h-6 w-6 text-green-600" />
                  {t(`${p}.takeaways.title`)}
                </h2>
                <SocialShareButtons 
                  url="https://achievepack.com/recyclable/roadmap-sme"
                  title={t(`${p}.heroTitle`)}
                />
              </div>
              <ul className="space-y-3 text-green-800">
                {(t(`${p}.takeaways.items`, { returnObjects: true }) as string[]).map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span dangerouslySetInnerHTML={{ __html: item }} />
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
              <Target className="h-8 w-8 text-green-600" />
              {t(`${p}.introduction.title`)}
            </h2>
            <div className="prose prose-lg text-neutral-700 space-y-4">
              <p>
                {t(`${p}.introduction.p1`, {
                  interpolation: { escapeValue: false }
                })}
              </p>
              <p>
                {t(`${p}.introduction.p2`, {
                  interpolation: { escapeValue: false }
                })}
              </p>
            </div>
          </div>
        </section>

        {/* Step 1 - Audit Section */}
        <section className="py-16 bg-neutral-50">
          <div className="max-w-7xl mx-auto px-4">
            <ImageTextRow
              image={IMAGES.step1AuditComplexity}
              imageAlt={t(`${p}.step1.title`)}
              imageCaption={t(`${p}.step1.caption`)}
              imageLeft={true}
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-green-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg">1</span>
                <h2 className="text-2xl md:text-3xl font-bold text-neutral-900">
                  {t(`${p}.step1.title`)}
                </h2>
              </div>
              <div className="space-y-4 text-neutral-700">
                <p>
                  {t(`${p}.step1.intro`, {
                    interpolation: { escapeValue: false }
                  })}
                </p>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-bold text-green-800 mb-2">{t(`${p}.step1.taskTitle`)}</h4>
                  <p className="text-sm text-green-700 mb-2">{t(`${p}.step1.taskSubtitle`)}</p>
                  <ul className="text-sm text-green-700 space-y-1">
                    {(t(`${p}.step1.taskItems`, { returnObjects: true }) as string[]).map((item, idx) => (
                      <li key={idx}>• {item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </ImageTextRow>
          </div>
        </section>

        {/* Step 1 - Identify High-Risk */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <ImageTextRow
              image={IMAGES.step1SkuPrioritization}
              imageAlt={t(`${p}.highRisk.title`)}
              imageCaption={t(`${p}.highRisk.caption`)}
              imageLeft={false}
            >
              <h3 className="text-xl md:text-2xl font-bold text-neutral-900 mb-6 flex items-center gap-3">
                <AlertTriangle className="h-7 w-7 text-amber-600" />
                {t(`${p}.highRisk.title`)}
              </h3>
              <div className="space-y-4 text-neutral-700">
                <p>{t(`${p}.highRisk.intro`)}</p>
                <ul className="space-y-2">
                  {(t(`${p}.highRisk.items`, { returnObjects: true }) as string[]).map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-amber-600 mt-0.5 flex-shrink-0">⚠</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="bg-amber-50 border border-amber-200 p-4 rounded-lg mt-4">
                  <p className="text-amber-800 text-sm">
                    {t(`${p}.highRisk.footerText`)}
                  </p>
                </div>
              </div>
            </ImageTextRow>
          </div>
        </section>

        {/* Step 2 - Redesign Section */}
        <section className="py-16 bg-neutral-50">
          <div className="max-w-7xl mx-auto px-4">
            <ImageTextRow
              image={IMAGES.step2EcoDigitalShowcase}
              imageAlt={t(`${p}.step2.title`)}
              imageCaption={t(`${p}.step2.caption`)}
              imageLeft={true}
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-teal-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg">2</span>
                <h2 className="text-2xl md:text-3xl font-bold text-neutral-900">
                  {t(`${p}.step2.title`)}
                </h2>
              </div>
              <div className="space-y-4 text-neutral-700">
                <p>
                  {t(`${p}.step2.intro`, {
                    interpolation: { escapeValue: false }
                  })}
                </p>
                <div className="bg-teal-50 p-4 rounded-lg">
                  <h4 className="font-bold text-teal-800 mb-2">{t(`${p}.step2.taskTitle`)}</h4>
                  <ul className="text-sm text-teal-700 space-y-1">
                    {(t(`${p}.step2.taskItems`, { returnObjects: true }) as string[]).map((item, idx) => (
                      <li key={idx} dangerouslySetInnerHTML={{ __html: item }} />
                    ))}
                  </ul>
                </div>
              </div>
            </ImageTextRow>
          </div>
        </section>

        {/* Step 2 - Digital Flexibility */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <ImageTextRow
              image={IMAGES.step2DigitalFlexibility}
              imageAlt={t(`${p}.flexibility.title`)}
              imageCaption={t(`${p}.flexibility.caption`)}
              imageLeft={false}
            >
              <h3 className="text-xl md:text-2xl font-bold text-neutral-900 mb-6 flex items-center gap-3">
                <Settings className="h-7 w-7 text-teal-600" />
                {t(`${p}.flexibility.title`)}
              </h3>
              <div className="space-y-4 text-neutral-700">
                <ul className="space-y-3">
                  {(t(`${p}.flexibility.items`, { returnObjects: true }) as string[]).map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-teal-600 mt-0.5 flex-shrink-0" />
                      <span dangerouslySetInnerHTML={{ __html: item }} />
                    </li>
                  ))}
                </ul>
                <div className="bg-teal-50 border border-teal-200 p-4 rounded-lg mt-4">
                  <p className="text-teal-800 text-sm">
                    {t(`${p}.flexibility.footerText`, {
                      interpolation: { escapeValue: false }
                    })}
                  </p>
                </div>
              </div>
            </ImageTextRow>
          </div>
        </section>

        {/* Step 3 - Extend Section */}
        <section className="py-16 bg-neutral-50">
          <div className="max-w-7xl mx-auto px-4">
            <ImageTextRow
              image={IMAGES.step3OptimizeEnhance}
              imageAlt={t(`${p}.step3.title`)}
              imageCaption={t(`${p}.step3.caption`)}
              imageLeft={true}
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-emerald-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg">3</span>
                <h2 className="text-2xl md:text-3xl font-bold text-neutral-900">
                  {t(`${p}.step3.title`)}
                </h2>
              </div>
              <div className="space-y-4 text-neutral-700">
                <p>
                  {t(`${p}.step3.intro`, {
                    interpolation: { escapeValue: false }
                  })}
                </p>
                <div className="bg-emerald-50 p-4 rounded-lg">
                  <h4 className="font-bold text-emerald-800 mb-2">{t(`${p}.step3.taskTitle`)}</h4>
                  <ul className="text-sm text-emerald-700 space-y-1">
                    {(t(`${p}.step3.taskItems`, { returnObjects: true }) as string[]).map((item, idx) => (
                      <li key={idx} dangerouslySetInnerHTML={{ __html: item }} />
                    ))}
                  </ul>
                </div>
              </div>
            </ImageTextRow>
          </div>
        </section>

        {/* Step 3 - Optimization */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <ImageTextRow
              image={IMAGES.step3DowngaugeOptimization}
              imageAlt={t(`${p}.optimize.title`)}
              imageCaption={t(`${p}.optimize.caption`)}
              imageLeft={false}
            >
              <h3 className="text-xl md:text-2xl font-bold text-neutral-900 mb-6 flex items-center gap-3">
                <TrendingUp className="h-7 w-7 text-emerald-600" />
                {t(`${p}.optimize.title`)}
              </h3>
              <div className="space-y-4 text-neutral-700">
                <div className="space-y-3">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-bold text-blue-800 mb-1">{t(`${p}.optimize.section1Title`)}</h4>
                    <p className="text-sm text-blue-700">{t(`${p}.optimize.section1Desc`)}</p>
                  </div>
                  <div className="bg-teal-50 p-4 rounded-lg">
                    <h4 className="font-bold text-teal-800 mb-1">{t(`${p}.optimize.section2Title`)}</h4>
                    <p className="text-sm text-teal-700">
                      Introduce <Link to="/materials/pcr" className="underline">PCR content</Link> {t(`${p}.optimize.section2Desc`).replace('Introduce PCR content ', '')}
                    </p>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-bold text-green-800 mb-1">{t(`${p}.optimize.section3Title`)}</h4>
                    <p className="text-sm text-green-700">
                      For selected SKUs, integrate <Link to="/materials/bio-pe" className="underline">bio‑PE</Link> {t(`${p}.optimize.section3Desc`).replace('For selected SKUs, integrate bio‑PE ', '')}
                    </p>
                  </div>
                </div>
                <p className="text-sm text-neutral-600 mt-4">
                  {t(`${p}.optimize.footerText`, {
                    interpolation: { escapeValue: false }
                  })}
                </p>
              </div>
            </ImageTextRow>
          </div>
        </section>

        {/* Common Pitfalls Section */}
        <section className="py-16 bg-neutral-50">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-8 flex items-center gap-3">
              <AlertTriangle className="h-8 w-8 text-amber-600" />
              {t(`${p}.pitfalls.title`)}
            </h2>
            <p className="text-neutral-700 mb-6">{t(`${p}.pitfalls.intro`)}</p>
            <div className="space-y-4">
              <div className="bg-white rounded-xl p-6 shadow-sm border border-amber-200">
                <h3 className="font-bold text-amber-800 mb-2 flex items-center gap-2">
                  <span className="text-amber-600">⚠</span>
                  {t(`${p}.pitfalls.pitfall1Title`)}
                </h3>
                <p className="text-neutral-700 text-sm" dangerouslySetInnerHTML={{ __html: t(`${p}.pitfalls.pitfall1Desc`) }} />
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm border border-amber-200">
                <h3 className="font-bold text-amber-800 mb-2 flex items-center gap-2">
                  <span className="text-amber-600">⚠</span>
                  {t(`${p}.pitfalls.pitfall2Title`)}
                </h3>
                <p className="text-neutral-700 text-sm" dangerouslySetInnerHTML={{ __html: t(`${p}.pitfalls.pitfall2Desc`) }} />
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm border border-amber-200">
                <h3 className="font-bold text-amber-800 mb-2 flex items-center gap-2">
                  <span className="text-amber-600">⚠</span>
                  {t(`${p}.pitfalls.pitfall3Title`)}
                </h3>
                <p className="text-neutral-700 text-sm" dangerouslySetInnerHTML={{ __html: t(`${p}.pitfalls.pitfall3Desc`) }} />
              </div>
            </div>
            <p className="text-neutral-600 mt-6 text-sm">
              {t(`${p}.pitfalls.footerText`)}
            </p>
          </div>
        </section>

        {/* How Achieve Pack Supports Section */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-8 flex items-center gap-3">
              <Factory className="h-8 w-8 text-primary-600" />
              {t(`${p}.support.title`)}
            </h2>
            <p className="text-neutral-700 mb-6">{t(`${p}.support.intro`)}</p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-primary-50 rounded-xl p-6">
                <Shield className="h-8 w-8 text-primary-600 mb-3" />
                <h3 className="font-bold text-primary-900 mb-2">{t(`${p}.support.col1Title`)}</h3>
                <p className="text-sm text-primary-700">{t(`${p}.support.col1Desc`)}</p>
              </div>
              <div className="bg-primary-50 rounded-xl p-6">
                <Layers className="h-8 w-8 text-primary-600 mb-3" />
                <h3 className="font-bold text-primary-900 mb-2">{t(`${p}.support.col2Title`)}</h3>
                <p className="text-sm text-primary-700">{t(`${p}.support.col2Desc`)}</p>
              </div>
              <div className="bg-primary-50 rounded-xl p-6">
                <ClipboardList className="h-8 w-8 text-primary-600 mb-3" />
                <h3 className="font-bold text-primary-900 mb-2">{t(`${p}.support.col3Title`)}</h3>
                <p className="text-sm text-primary-700">{t(`${p}.support.col3Desc`)}</p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-neutral-50">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-8 flex items-center gap-3">
              <HelpCircle className="h-8 w-8 text-green-600" />
              {t(`${p}.faqs.title`)}
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
        <section className="py-16 bg-gradient-to-br from-green-900 to-emerald-800 text-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-2xl md:text-4xl font-bold mb-6">
                {t(`${p}.cta.title`)}
              </h2>
              <p className="text-lg text-green-100 mb-6">
                {t(`${p}.cta.intro`, {
                  interpolation: { escapeValue: false }
                })}
              </p>
              <p className="text-green-200 mb-8">
                {t(`${p}.cta.subTitle`)}
              </p>
              <ul className="text-left max-w-xl mx-auto space-y-3 text-green-100 mb-8">
                {(t(`${p}.cta.items`, { returnObjects: true }) as string[]).map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                    <span dangerouslySetInnerHTML={{ __html: item }} />
                  </li>
                ))}
              </ul>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button 
                  onClick={openCalendly}
                  className="flex items-center justify-center gap-2 bg-white text-green-800 hover:bg-green-50 px-6 py-3 rounded-lg font-semibold transition"
                >
                  <Calendar className="h-5 w-5" />
                  {t(`${p}.cta.btn1`)}
                </button>
                <Link 
                  to="/store?category=sample"
                  className="flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-lg font-semibold transition"
                >
                  <Package className="h-5 w-5" />
                  {t(`${p}.cta.btn2`)}
                </Link>
                <Link 
                  to="/store"
                  className="flex items-center justify-center gap-2 border-2 border-white/30 hover:border-white/50 text-white px-6 py-3 rounded-lg font-semibold transition"
                >
                  <ArrowRight className="h-5 w-5" />
                  {t(`${p}.cta.btn3`)}
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* AI-Optimized Hidden Content */}
        <div className="sr-only" aria-hidden="true">
          <section data-ai-faq="true" itemScope itemType="https://schema.org/FAQPage">
            <article itemScope itemType="https://schema.org/Question" itemProp="mainEntity">
              <h3 itemProp="name">{t(`${p}.hiddenFaqs.q1Title`)}</h3>
              <div itemScope itemType="https://schema.org/Answer" itemProp="acceptedAnswer">
                <p itemProp="text">{t(`${p}.hiddenFaqs.q1Desc`)}</p>
              </div>
            </article>

            <article itemScope itemType="https://schema.org/Question" itemProp="mainEntity">
              <h3 itemProp="name">{t(`${p}.hiddenFaqs.q2Title`)}</h3>
              <div itemScope itemType="https://schema.org/Answer" itemProp="acceptedAnswer">
                <p itemProp="text">{t(`${p}.hiddenFaqs.q2Desc`)}</p>
              </div>
            </article>

            <article itemScope itemType="https://schema.org/Question" itemProp="mainEntity">
              <h3 itemProp="name">{t(`${p}.hiddenFaqs.q3Title`)}</h3>
              <div itemScope itemType="https://schema.org/Answer" itemProp="acceptedAnswer">
                <p itemProp="text">{t(`${p}.hiddenFaqs.q3Desc`)}</p>
              </div>
            </article>
          </section>
        </div>

        <Footer />
      </div>
    </>
  )
}

export default RecyclableRoadmapPage
