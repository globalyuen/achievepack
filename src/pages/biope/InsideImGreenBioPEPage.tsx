import React, { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { Leaf, CheckCircle, Award, Calendar, Recycle, Package, X, ChevronDown, Sprout, HelpCircle, ArrowRight, BarChart3, FileCheck, Zap, ClipboardCheck, Layers, Scale, Lightbulb, TreePine, AlertTriangle, FileText, Droplets, FlaskConical } from 'lucide-react'
import { useCalendly } from '../../contexts/CalendlyContext'
import Footer from '../../components/Footer'
import { SEOPageHeader } from '../../components/SEOPageLayout'
import SocialShareButtons from '../../components/SocialShareButtons'
import { useTranslation } from 'react-i18next'

// Image paths - using imgs/biope/inside folder
const IMAGES = {
  hero: '/imgs/biope/inside/hero.webp',
  supplyChain: '/imgs/biope/inside/a_supply_chain_process_flow_8452529.webp',
  performance: '/imgs/biope/inside/a_performance_comparison_bio_fossil_pe_8036283.webp',
  carbonFootprint: '/imgs/biope/inside/a_carbon_footprint_lca_impact_9565137.webp',
  endOfLife: '/imgs/biope/inside/a_eol_recyclability_guidance_6284298.webp',
  applications: '/imgs/biope/inside/a_flexible_packaging_applications_4095854.webp',
  certification: '/imgs/biope/inside/a_certification_astm_verification_4966910.webp',
  comparison: '/imgs/biope/inside/a_comparison_matrix_biope_fossil_compostable_0153297.webp',
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

const InsideImGreenBioPEPage: React.FC = () => {
  const { t } = useTranslation()
  const { openCalendly } = useCalendly()
  const p = 'seoPages.pages.insideImGreenBioPE'

  // Helper to render bold prefixes (split by colon or Chinese full-width colon)
  const renderBullet = (text: string) => {
    const match = text.match(/^([^:：]+)[:：](.*)$/)
    if (match) {
      return (
        <span>
          <strong>{match[1]}:</strong>{match[2]}
        </span>
      )
    }
    return <span>{text}</span>
  }

  const faqs = [
    {
      question: t(`${p}.faq.q1`),
      answer: t(`${p}.faq.a1`)
    },
    {
      question: t(`${p}.faq.q2`),
      answer: t(`${p}.faq.a2`)
    },
    {
      question: t(`${p}.faq.q3`),
      answer: t(`${p}.faq.a3`)
    },
    {
      question: t(`${p}.faq.q4`),
      answer: t(`${p}.faq.a4`)
    },
    {
      question: t(`${p}.faq.q5`),
      answer: t(`${p}.faq.a5`)
    }
  ]

  return (
    <>
      <Helmet>
        <title>{t(`${p}.title`)}</title>
        <meta name="description" content={t(`${p}.description`)} />
        <link rel="canonical" href="https://achievepack.com/biope/inside-im-green-bio-pe" />
        <meta name="keywords" content="I'm green Bio-PE, bio-based polyethylene, sugarcane PE, ASTM D6866, recyclable packaging, plant-based plastic, Braskem, bio-PE flexible packaging" />
        
        {/* Open Graph */}
        <meta property="og:title" content={t(`${p}.title`)} />
        <meta property="og:description" content={t(`${p}.description`)} />
        <meta property="og:image" content="https://achievepack.com/imgs/biope/inside/hero.webp" />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://achievepack.com/biope/inside-im-green-bio-pe" />
        
        {/* Article Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": t(`${p}.title`),
            "description": t(`${p}.description`),
            "image": "https://achievepack.com/imgs/biope/inside/hero.webp",
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
            "mainEntityOfPage": "https://achievepack.com/biope/inside-im-green-bio-pe"
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
                    {t(`${p}.heroTag`)}
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
                    <Sprout className="h-4 w-4 text-green-400" />
                    <span>{t(`${p}.badges.plantBased`)}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Recycle className="h-4 w-4 text-green-400" />
                    <span>{t(`${p}.badges.recyclable`)}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Award className="h-4 w-4 text-green-400" />
                    <span>{t(`${p}.badges.astm`)}</span>
                  </div>
                </div>
              </div>

              <div className="relative">
                <ClickableImage 
                  src={IMAGES.hero}
                  alt="I'm green Bio-PE sustainable packaging"
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
                  url="https://achievepack.com/biope/inside-im-green-bio-pe"
                  title={t(`${p}.title`)}
                />
              </div>
              <ul className="space-y-3 text-green-800">
                {t(`${p}.takeaways.points`, { returnObjects: true }) && 
                  (t(`${p}.takeaways.points`, { returnObjects: true }) as string[]).map((point, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>{renderBullet(point)}</span>
                    </li>
                  ))
                }
              </ul>
            </div>
          </div>
        </section>

        {/* Introduction Section */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-6 flex items-center gap-3">
              <FileText className="h-8 w-8 text-green-600" />
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

        {/* Feedstock Section */}
        <section className="py-16 bg-neutral-50">
          <div className="max-w-7xl mx-auto px-4">
            <ImageTextRow
              image={IMAGES.supplyChain}
              imageAlt="Bio-PE supply chain from sugarcane to packaging"
              imageCaption="Sugarcane feedstock to polyethylene: the bio-PE production process"
              imageLeft={true}
            >
              <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-6 flex items-center gap-3">
                <Droplets className="h-8 w-8 text-green-600" />
                {t(`${p}.feedstock.title`)}
              </h2>
              <div className="space-y-4 text-neutral-700">
                <p>
                  {renderBullet(t(`${p}.feedstock.p1`))}
                </p>
                <p>
                  {renderBullet(t(`${p}.feedstock.p2`))}
                </p>
                <div className="bg-green-50 border border-green-200 p-4 rounded-lg">
                  <p className="text-green-800 text-sm">
                    {renderBullet(t(`${p}.feedstock.note`))}
                  </p>
                </div>
              </div>
            </ImageTextRow>
          </div>
        </section>

        {/* Performance Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <ImageTextRow
              image={IMAGES.performance}
              imageAlt="Bio-PE performance comparison with fossil PE"
              imageCaption="Drop-in replacement: equivalent processing and mechanical properties"
              imageLeft={false}
            >
              <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-6 flex items-center gap-3">
                <FlaskConical className="h-8 w-8 text-blue-600" />
                {t(`${p}.performance.title`)}
              </h2>
              <div className="space-y-4 text-neutral-700">
                <p>
                  {renderBullet(t(`${p}.performance.intro`))}
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>{renderBullet(t(`${p}.performance.point1`))}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>{renderBullet(t(`${p}.performance.point2`))}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>{renderBullet(t(`${p}.performance.point3`))}</span>
                  </li>
                </ul>
                <p className="text-sm text-neutral-600 bg-neutral-50 p-3 rounded-lg">
                  {t(`${p}.performance.note`)}
                </p>
              </div>
            </ImageTextRow>
          </div>
        </section>

        {/* Carbon Footprint Section */}
        <section className="py-16 bg-neutral-50">
          <div className="max-w-7xl mx-auto px-4">
            <ImageTextRow
              image={IMAGES.carbonFootprint}
              imageAlt="Bio-PE carbon footprint and LCA analysis"
              imageCaption="Lifecycle carbon benefits from sugarcane CO₂ uptake"
              imageLeft={true}
            >
              <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-6 flex items-center gap-3">
                <TreePine className="h-8 w-8 text-green-600" />
                {t(`${p}.carbon.title`)}
              </h2>
              <div className="space-y-4 text-neutral-700">
                <p>
                  {renderBullet(t(`${p}.carbon.p1`))}
                </p>
                <p>
                  {renderBullet(t(`${p}.carbon.p2`))}
                </p>
                <div className="bg-blue-50 border border-blue-200 p-4 rounded-lg">
                  <p className="text-blue-800">
                    {renderBullet(t(`${p}.carbon.note`))}
                  </p>
                </div>
              </div>
            </ImageTextRow>
          </div>
        </section>

        {/* End-of-Life Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <ImageTextRow
              image={IMAGES.endOfLife}
              imageAlt="Bio-PE end-of-life recyclability guidance"
              imageCaption="Recyclable in PE streams—NOT compostable"
              imageLeft={false}
            >
              <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-6 flex items-center gap-3">
                <Recycle className="h-8 w-8 text-green-600" />
                {t(`${p}.eol.title`)}
              </h2>
              <div className="space-y-4 text-neutral-700">
                <p>
                  {renderBullet(t(`${p}.eol.p1`))}
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <Recycle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>{renderBullet(t(`${p}.eol.point1`))}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Layers className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>{renderBullet(t(`${p}.eol.point2`))}</span>
                  </li>
                </ul>
                <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-lg mt-4">
                  <p className="text-amber-800 font-medium flex items-start gap-2">
                    <AlertTriangle className="h-5 w-5 mt-0.5 flex-shrink-0" />
                    <span>{renderBullet(t(`${p}.eol.note`))}</span>
                  </p>
                </div>
              </div>
            </ImageTextRow>
          </div>
        </section>

        {/* Applications Section */}
        <section className="py-16 bg-neutral-50">
          <div className="max-w-7xl mx-auto px-4">
            <ImageTextRow
              image={IMAGES.applications}
              imageAlt="Bio-PE flexible packaging applications"
              imageCaption="Wide range of flexible packaging formats"
              imageLeft={true}
            >
              <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-6 flex items-center gap-3">
                <Package className="h-8 w-8 text-blue-600" />
                {t(`${p}.applications.title`)}
              </h2>
              <div className="space-y-4 text-neutral-700">
                <p>
                  {t(`${p}.applications.intro`)}
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>{renderBullet(t(`${p}.applications.point1`))}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>{renderBullet(t(`${p}.applications.point2`))}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>{renderBullet(t(`${p}.applications.point3`))}</span>
                  </li>
                </ul>
                <p className="text-sm bg-green-50 p-3 rounded-lg">
                  {t(`${p}.applications.note`)}
                </p>
              </div>
            </ImageTextRow>
          </div>
        </section>

        {/* What to Ask Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <ImageTextRow
              image={IMAGES.certification}
              imageAlt="Bio-PE certification and verification process"
              imageCaption="ASTM D6866 verification for bio-based content claims"
              imageLeft={false}
            >
              <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-6 flex items-center gap-3">
                <ClipboardCheck className="h-8 w-8 text-blue-600" />
                {t(`${p}.ask.title`)}
              </h2>
              <div className="space-y-4 text-neutral-700">
                <p>
                  {t(`${p}.ask.intro`)}
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <FileCheck className="h-5 w-5 text-blue-600 mt-1 flex-shrink-0" />
                    <span>{renderBullet(t(`${p}.ask.point1`))}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Layers className="h-5 w-5 text-blue-600 mt-1 flex-shrink-0" />
                    <span>{renderBullet(t(`${p}.ask.point2`))}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <BarChart3 className="h-5 w-5 text-blue-600 mt-1 flex-shrink-0" />
                    <span>{renderBullet(t(`${p}.ask.point3`))}</span>
                  </li>
                </ul>
                <p className="text-sm text-neutral-600 mt-4">
                  {t(`${p}.ask.note`)}
                </p>
              </div>
            </ImageTextRow>
          </div>
        </section>

        {/* Material Comparison Section */}
        <section className="py-16 bg-neutral-50">
          <div className="max-w-7xl mx-auto px-4">
            <ImageTextRow
              image={IMAGES.comparison}
              imageAlt="Material comparison Bio-PE vs Fossil PE vs Compostable"
              imageCaption="Bio-PE delivers environmental benefits while maintaining recyclability"
              imageLeft={true}
            >
              <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-6 flex items-center gap-3">
                <Scale className="h-8 w-8 text-purple-600" />
                {t(`${p}.comparison.title`)}
              </h2>
              <div className="space-y-4 text-neutral-700">
                <p>
                  {t(`${p}.comparison.intro`)}
                </p>
                <div className="grid grid-cols-3 gap-3 text-sm">
                  <div className="bg-neutral-100 p-3 rounded-lg text-center">
                    <h4 className="font-bold text-neutral-800 mb-1">{t(`${p}.comparison.labels.fossil`)}</h4>
                    <p className="text-xs text-neutral-600">{t(`${p}.comparison.labels.fossilDesc`)}</p>
                    <p className="text-xs text-red-600">{t(`${p}.comparison.labels.fossilSub`)}</p>
                  </div>
                  <div className="bg-green-100 p-3 rounded-lg text-center border-2 border-green-500">
                    <h4 className="font-bold text-green-800 mb-1">{t(`${p}.comparison.labels.bio`)}</h4>
                    <p className="text-xs text-green-700">{t(`${p}.comparison.labels.bioDesc`)}</p>
                    <p className="text-xs text-green-600">{t(`${p}.comparison.labels.bioSub`)}</p>
                  </div>
                  <div className="bg-amber-100 p-3 rounded-lg text-center">
                    <h4 className="font-bold text-amber-800 mb-1">{t(`${p}.comparison.labels.compost`)}</h4>
                    <p className="text-xs text-amber-700">{t(`${p}.comparison.labels.compostDesc`)}</p>
                    <p className="text-xs text-amber-600">{t(`${p}.comparison.labels.compostSub`)}</p>
                  </div>
                </div>
                <p className="text-green-700 font-medium bg-green-50 p-3 rounded-lg">
                  <Lightbulb className="h-4 w-4 inline mr-1" />
                  {t(`${p}.comparison.note`)}
                </p>
              </div>
            </ImageTextRow>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-8 flex items-center gap-3">
              <HelpCircle className="h-8 w-8 text-green-600" />
              {t(`${p}.faq.title`)}
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

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-br from-green-900 to-emerald-800 text-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl md:text-4xl font-bold mb-6">
                {t(`${p}.cta.title`)}
              </h2>
              <p className="text-lg text-green-100 mb-6">
                {t(`${p}.cta.p1`)}
              </p>
              <p className="text-green-200 mb-8">
                {t(`${p}.cta.p2`)}
              </p>

              <div className="bg-white/10 rounded-xl p-6 mb-8">
                <h3 className="font-semibold text-white mb-4">{t(`${p}.cta.stepsTitle`)}</h3>
                <ul className="text-left space-y-3 text-green-100">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                    <span>{renderBullet(t(`${p}.cta.step1`))}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                    <span>{renderBullet(t(`${p}.cta.step2`))}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                    <span>{renderBullet(t(`${p}.cta.step3`))}</span>
                  </li>
                </ul>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button 
                  onClick={openCalendly}
                  className="flex items-center justify-center gap-2 bg-white text-green-800 hover:bg-green-50 px-6 py-3 rounded-lg font-semibold transition"
                >
                  <Calendar className="h-5 w-5" />
                  {t(`${p}.cta.btnConsult`)}
                </button>
                <Link 
                  to="/store?category=sample"
                  className="flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-lg font-semibold transition"
                >
                  <Package className="h-5 w-5" />
                  {t(`${p}.cta.btnSample`)}
                </Link>
                <Link 
                  to="/store"
                  className="flex items-center justify-center gap-2 border-2 border-white/30 hover:border-white/50 text-white px-6 py-3 rounded-lg font-semibold transition"
                >
                  <ArrowRight className="h-5 w-5" />
                  {t(`${p}.cta.btnBrowse`)}
                </Link>
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

            <article itemScope itemType="https://schema.org/Question" itemProp="mainEntity">
              <h3 itemProp="name">{t(`${p}.aiFaq.q4`)}</h3>
              <div itemScope itemType="https://schema.org/Answer" itemProp="acceptedAnswer">
                <p itemProp="text">
                  {t(`${p}.aiFaq.a4`)}
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

export default InsideImGreenBioPEPage
