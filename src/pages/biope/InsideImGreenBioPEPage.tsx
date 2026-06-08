import React, { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { Leaf, CheckCircle, Award, Calendar, Shield, Recycle, Factory, Package, X, ChevronRight, ChevronDown, Sprout, Globe, Target, HelpCircle, ArrowRight, TrendingDown, BarChart3, FileCheck, Zap, ClipboardCheck, Layers, Scale, Lightbulb, Building2, TreePine, Users, AlertTriangle, DollarSign, FileText, Truck, Beaker, FlaskConical, TestTube, Droplets } from 'lucide-react'
import { useCalendly } from '../../contexts/CalendlyContext'
import Footer from '../../components/Footer'
import { SEOPageHeader } from '../../components/SEOPageLayout'
import SocialShareButtons from '../../components/SocialShareButtons'

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

  const takeaways = t('seoPages.pages.insideImGreenBioPE.takeaways', { returnObjects: true }) as string[] || []
  const sec3Items = t('seoPages.pages.insideImGreenBioPE.sec3Items', { returnObjects: true }) as string[] || []
  const sec5Items = t('seoPages.pages.insideImGreenBioPE.sec5Items', { returnObjects: true }) as string[] || []
  const sec6Items = t('seoPages.pages.insideImGreenBioPE.sec6Items', { returnObjects: true }) as string[] || []
  const sec7Items = t('seoPages.pages.insideImGreenBioPE.sec7Items', { returnObjects: true }) as string[] || []
  const ctaSteps = t('seoPages.pages.insideImGreenBioPE.ctaSteps', { returnObjects: true }) as string[] || []
  const faqs = t('seoPages.pages.insideImGreenBioPE.faqs', { returnObjects: true }) as Array<{ question: string; answer: string }> || []

  return (
    <>
      <Helmet>
        <title>{t('seoPages.pages.insideImGreenBioPE.title')}</title>
        <meta name="description" content={t('seoPages.pages.insideImGreenBioPE.description')} />
        <link rel="canonical" href="https://achievepack.com/biope/inside-im-green-bio-pe" />
        <meta name="keywords" content={t('seoPages.pages.insideImGreenBioPE.keywords')} />
        
        {/* Open Graph */}
        <meta property="og:title" content={t('seoPages.pages.insideImGreenBioPE.ogTitle')} />
        <meta property="og:description" content={t('seoPages.pages.insideImGreenBioPE.ogDescription')} />
        <meta property="og:image" content="https://achievepack.com/imgs/biope/inside/hero.webp" />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://achievepack.com/biope/inside-im-green-bio-pe" />
        
        {/* Article Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": t('seoPages.pages.insideImGreenBioPE.ogTitle'),
            "description": t('seoPages.pages.insideImGreenBioPE.ogDescription'),
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
        <section className="relative bg-gradient-to-br from-green-900 to-emerald-800 text-white py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {t('seoPages.pages.insideImGreenBioPE.badge')}
                  </span>
                </div>
                <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
                  {t('seoPages.pages.insideImGreenBioPE.heroTitle')}
                </h1>
                <p className="text-lg text-green-100 mb-8">
                  {t('seoPages.pages.insideImGreenBioPE.heroDescription')}
                </p>
                
                <div className="flex flex-wrap gap-4">
                  <button 
                    onClick={openCalendly}
                    className="flex items-center gap-2 bg-white text-green-800 hover:bg-green-50 px-6 py-3 rounded-lg font-semibold transition"
                  >
                    <Calendar className="h-5 w-5" />
                    {t('seoPages.pages.insideImGreenBioPE.btnConsultation')}
                  </button>
                  <Link 
                    to="/store"
                    className="flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-lg font-semibold transition"
                  >
                    <Package className="h-5 w-5" />
                    {t('seoPages.pages.insideImGreenBioPE.btnViewProducts')}
                  </Link>
                </div>

                {/* Trust badges */}
                <div className="flex items-center gap-4 mt-8 text-sm text-green-200">
                  <div className="flex items-center gap-1">
                    <Sprout className="h-4 w-4 text-green-400" />
                    <span>{t('seoPages.pages.insideImGreenBioPE.trustPlantBased')}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Recycle className="h-4 w-4 text-green-400" />
                    <span>{t('seoPages.pages.insideImGreenBioPE.trustRecyclable')}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Award className="h-4 w-4 text-green-400" />
                    <span>{t('seoPages.pages.insideImGreenBioPE.trustAstm')}</span>
                  </div>
                </div>
              </div>

              <div className="relative">
                <ClickableImage 
                  src={IMAGES.hero}
                  alt={t('seoPages.pages.insideImGreenBioPE.heroImageAlt')}
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
                  {t('seoPages.pages.insideImGreenBioPE.takeawaysTitle')}
                </h2>
                <SocialShareButtons 
                  url="https://achievepack.com/biope/inside-im-green-bio-pe"
                  title="Inside I'm green™ Bio-PE – Plant-Based Polyethylene Guide"
                />
              </div>
              <ul className="space-y-3 text-green-800">
                {Array.isArray(takeaways) && takeaways.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span dangerouslySetInnerHTML={{ __html: item }} />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Introduction Section */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-6 flex items-center gap-3">
              <FileText className="h-8 w-8 text-green-600" />
              {t('seoPages.pages.insideImGreenBioPE.sec1Title')}
            </h2>
            <div className="prose prose-lg text-neutral-700 space-y-4">
              <p>
                {t('seoPages.pages.insideImGreenBioPE.sec1P1')}
              </p>
              <p>
                {t('seoPages.pages.insideImGreenBioPE.sec1P2')}
              </p>
            </div>
          </div>
        </section>

        {/* Feedstock Section */}
        <section className="py-16 bg-neutral-50">
          <div className="max-w-7xl mx-auto px-4">
            <ImageTextRow
              image={IMAGES.supplyChain}
              imageAlt={t('seoPages.pages.insideImGreenBioPE.sec2ImgAlt')}
              imageCaption={t('seoPages.pages.insideImGreenBioPE.sec2ImgCaption')}
              imageLeft={true}
            >
              <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-6 flex items-center gap-3">
                <Droplets className="h-8 w-8 text-green-600" />
                {t('seoPages.pages.insideImGreenBioPE.sec2Title')}
              </h2>
              <div className="space-y-4 text-neutral-700">
                <p dangerouslySetInnerHTML={{ __html: t('seoPages.pages.insideImGreenBioPE.sec2P1') }} />
                <p dangerouslySetInnerHTML={{ __html: t('seoPages.pages.insideImGreenBioPE.sec2P2') }} />
                <div className="bg-green-50 border border-green-200 p-4 rounded-lg">
                  <p className="text-green-800 text-sm" dangerouslySetInnerHTML={{ __html: t('seoPages.pages.insideImGreenBioPE.sec2Note') }} />
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
              imageAlt={t('seoPages.pages.insideImGreenBioPE.sec3ImgAlt')}
              imageCaption={t('seoPages.pages.insideImGreenBioPE.sec3ImgCaption')}
              imageLeft={false}
            >
              <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-6 flex items-center gap-3">
                <FlaskConical className="h-8 w-8 text-blue-600" />
                {t('seoPages.pages.insideImGreenBioPE.sec3Title')}
              </h2>
              <div className="space-y-4 text-neutral-700">
                <p dangerouslySetInnerHTML={{ __html: t('seoPages.pages.insideImGreenBioPE.sec3P1') }} />
                <ul className="space-y-2">
                  {Array.isArray(sec3Items) && sec3Items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span dangerouslySetInnerHTML={{ __html: item }} />
                    </li>
                  ))}
                </ul>
                <p className="text-sm text-neutral-600 bg-neutral-50 p-3 rounded-lg">
                  {t('seoPages.pages.insideImGreenBioPE.sec3Note')}
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
              imageAlt={t('seoPages.pages.insideImGreenBioPE.sec4ImgAlt')}
              imageCaption={t('seoPages.pages.insideImGreenBioPE.sec4ImgCaption')}
              imageLeft={true}
            >
              <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-6 flex items-center gap-3">
                <TreePine className="h-8 w-8 text-green-600" />
                {t('seoPages.pages.insideImGreenBioPE.sec4Title')}
              </h2>
              <div className="space-y-4 text-neutral-700">
                <p dangerouslySetInnerHTML={{ __html: t('seoPages.pages.insideImGreenBioPE.sec4P1') }} />
                <p dangerouslySetInnerHTML={{ __html: t('seoPages.pages.insideImGreenBioPE.sec4P2') }} />
                <div className="bg-blue-50 border border-blue-200 p-4 rounded-lg">
                  <p className="text-blue-800" dangerouslySetInnerHTML={{ __html: t('seoPages.pages.insideImGreenBioPE.sec4Note') }} />
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
              imageAlt={t('seoPages.pages.insideImGreenBioPE.sec5ImgAlt')}
              imageCaption={t('seoPages.pages.insideImGreenBioPE.sec5ImgCaption')}
              imageLeft={false}
            >
              <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-6 flex items-center gap-3">
                <Recycle className="h-8 w-8 text-green-600" />
                {t('seoPages.pages.insideImGreenBioPE.sec5Title')}
              </h2>
              <div className="space-y-4 text-neutral-700">
                <p dangerouslySetInnerHTML={{ __html: t('seoPages.pages.insideImGreenBioPE.sec5P1') }} />
                <ul className="space-y-2">
                  {Array.isArray(sec5Items) && sec5Items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <Recycle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span dangerouslySetInnerHTML={{ __html: item }} />
                    </li>
                  ))}
                </ul>
                <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-lg mt-4">
                  <p className="text-amber-800 font-medium flex items-start gap-2">
                    <AlertTriangle className="h-5 w-5 mt-0.5 flex-shrink-0" />
                    <span dangerouslySetInnerHTML={{ __html: t('seoPages.pages.insideImGreenBioPE.sec5Warning') }} />
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
              imageAlt={t('seoPages.pages.insideImGreenBioPE.sec6ImgAlt')}
              imageCaption={t('seoPages.pages.insideImGreenBioPE.sec6ImgCaption')}
              imageLeft={true}
            >
              <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-6 flex items-center gap-3">
                <Package className="h-8 w-8 text-blue-600" />
                {t('seoPages.pages.insideImGreenBioPE.sec6Title')}
              </h2>
              <div className="space-y-4 text-neutral-700">
                <p>
                  {t('seoPages.pages.insideImGreenBioPE.sec6P1')}
                </p>
                <ul className="space-y-2">
                  {Array.isArray(sec6Items) && sec6Items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span dangerouslySetInnerHTML={{ __html: item }} />
                    </li>
                  ))}
                </ul>
                <p className="text-sm bg-green-50 p-3 rounded-lg" dangerouslySetInnerHTML={{ __html: t('seoPages.pages.insideImGreenBioPE.sec6Note') }} />
              </div>
            </ImageTextRow>
          </div>
        </section>

        {/* What to Ask Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <ImageTextRow
              image={IMAGES.certification}
              imageAlt={t('seoPages.pages.insideImGreenBioPE.sec7ImgAlt')}
              imageCaption={t('seoPages.pages.insideImGreenBioPE.sec7ImgCaption')}
              imageLeft={false}
            >
              <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-6 flex items-center gap-3">
                <ClipboardCheck className="h-8 w-8 text-blue-600" />
                {t('seoPages.pages.insideImGreenBioPE.sec7Title')}
              </h2>
              <div className="space-y-4 text-neutral-700">
                <p>
                  {t('seoPages.pages.insideImGreenBioPE.sec7P1')}
                </p>
                <ul className="space-y-3">
                  {Array.isArray(sec7Items) && sec7Items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <FileCheck className="h-5 w-5 text-blue-600 mt-1 flex-shrink-0" />
                      <span dangerouslySetInnerHTML={{ __html: item }} />
                    </li>
                  ))}
                </ul>
                <p className="text-sm text-neutral-600 mt-4">
                  {t('seoPages.pages.insideImGreenBioPE.sec7Note')}
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
              imageAlt={t('seoPages.pages.insideImGreenBioPE.sec8ImgAlt')}
              imageCaption={t('seoPages.pages.insideImGreenBioPE.sec8ImgCaption')}
              imageLeft={true}
            >
              <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-6 flex items-center gap-3">
                <Scale className="h-8 w-8 text-purple-600" />
                {t('seoPages.pages.insideImGreenBioPE.sec8Title')}
              </h2>
              <div className="space-y-4 text-neutral-700">
                <p>
                  {t('seoPages.pages.insideImGreenBioPE.sec8P1')}
                </p>
                <div className="grid grid-cols-3 gap-3 text-sm">
                  <div className="bg-neutral-100 p-3 rounded-lg text-center">
                    <h4 className="font-bold text-neutral-800 mb-1">{t('seoPages.pages.insideImGreenBioPE.sec8Col1Title')}</h4>
                    <p className="text-xs text-neutral-600">{t('seoPages.pages.insideImGreenBioPE.sec8Col1Status')}</p>
                    <p className="text-xs text-red-600">{t('seoPages.pages.insideImGreenBioPE.sec8Col1Desc')}</p>
                  </div>
                  <div className="bg-green-100 p-3 rounded-lg text-center border-2 border-green-500">
                    <h4 className="font-bold text-green-800 mb-1">{t('seoPages.pages.insideImGreenBioPE.sec8Col2Title')}</h4>
                    <p className="text-xs text-green-700">{t('seoPages.pages.insideImGreenBioPE.sec8Col2Status')}</p>
                    <p className="text-xs text-green-600">{t('seoPages.pages.insideImGreenBioPE.sec8Col2Desc')}</p>
                  </div>
                  <div className="bg-amber-100 p-3 rounded-lg text-center">
                    <h4 className="font-bold text-amber-800 mb-1">{t('seoPages.pages.insideImGreenBioPE.sec8Col3Title')}</h4>
                    <p className="text-xs text-amber-700">{t('seoPages.pages.insideImGreenBioPE.sec8Col3Status')}</p>
                    <p className="text-xs text-amber-600">{t('seoPages.pages.insideImGreenBioPE.sec8Col3Desc')}</p>
                  </div>
                </div>
                <p className="text-green-700 font-medium bg-green-50 p-3 rounded-lg flex items-center gap-1">
                  <Lightbulb className="h-4 w-4 inline flex-shrink-0" />
                  <span>{t('seoPages.pages.insideImGreenBioPE.sec8Note')}</span>
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
              {t('seoPages.pages.insideImGreenBioPE.faqTitle')}
            </h2>
            <div className="space-y-4">
              {Array.isArray(faqs) && faqs.map((faq, idx) => (
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

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-br from-green-900 to-emerald-800 text-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl md:text-4xl font-bold mb-6">
                {t('seoPages.pages.insideImGreenBioPE.ctaTitle')}
              </h2>
              <p className="text-lg text-green-100 mb-6">
                {t('seoPages.pages.insideImGreenBioPE.ctaP1')}
              </p>
              <p className="text-green-200 mb-8">
                {t('seoPages.pages.insideImGreenBioPE.ctaP2')}
              </p>

              <div className="bg-white/10 rounded-xl p-6 mb-8">
                <h3 className="font-semibold text-white mb-4">{t('seoPages.pages.insideImGreenBioPE.ctaStepsTitle')}</h3>
                <ul className="text-left space-y-3 text-green-100">
                  {Array.isArray(ctaSteps) && ctaSteps.map((step, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                      <span>{step}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button 
                  onClick={openCalendly}
                  className="flex items-center justify-center gap-2 bg-white text-green-800 hover:bg-green-50 px-6 py-3 rounded-lg font-semibold transition"
                >
                  <Calendar className="h-5 w-5" />
                  {t('seoPages.pages.insideImGreenBioPE.btnBookConsultation')}
                </button>
                <Link 
                  to="/store?category=sample"
                  className="flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-lg font-semibold transition"
                >
                  <Package className="h-5 w-5" />
                  {t('seoPages.pages.insideImGreenBioPE.btnOrderSample')}
                </Link>
                <Link 
                  to="/store"
                  className="flex items-center justify-center gap-2 border-2 border-white/30 hover:border-white/50 text-white px-6 py-3 rounded-lg font-semibold transition"
                >
                  <ArrowRight className="h-5 w-5" />
                  {t('seoPages.pages.insideImGreenBioPE.btnBrowseStore')}
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* AI-Optimized Hidden Content */}
        <div className="sr-only" aria-hidden="true">
          <section data-ai-faq="true" itemScope itemType="https://schema.org/FAQPage">
            <article itemScope itemType="https://schema.org/Question" itemProp="mainEntity">
              <h3 itemProp="name">{t('seoPages.pages.insideImGreenBioPE.aiFaqTitle1')}</h3>
              <div itemScope itemType="https://schema.org/Answer" itemProp="acceptedAnswer">
                <p itemProp="text">
                  {t('seoPages.pages.insideImGreenBioPE.aiFaqAnswer1')}
                </p>
              </div>
            </article>

            <article itemScope itemType="https://schema.org/Question" itemProp="mainEntity">
              <h3 itemProp="name">{t('seoPages.pages.insideImGreenBioPE.aiFaqTitle2')}</h3>
              <div itemScope itemType="https://schema.org/Answer" itemProp="acceptedAnswer">
                <p itemProp="text">
                  {t('seoPages.pages.insideImGreenBioPE.aiFaqAnswer2')}
                </p>
              </div>
            </article>

            <article itemScope itemType="https://schema.org/Question" itemProp="mainEntity">
              <h3 itemProp="name">{t('seoPages.pages.insideImGreenBioPE.aiFaqTitle3')}</h3>
              <div itemScope itemType="https://schema.org/Answer" itemProp="acceptedAnswer">
                <p itemProp="text">
                  {t('seoPages.pages.insideImGreenBioPE.aiFaqAnswer3')}
                </p>
              </div>
            </article>

            <article itemScope itemType="https://schema.org/Question" itemProp="mainEntity">
              <h3 itemProp="name">{t('seoPages.pages.insideImGreenBioPE.aiFaqTitle4')}</h3>
              <div itemScope itemType="https://schema.org/Answer" itemProp="acceptedAnswer">
                <p itemProp="text">
                  {t('seoPages.pages.insideImGreenBioPE.aiFaqAnswer4')}
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
