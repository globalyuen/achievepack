import React, { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { Leaf, AlertTriangle, CheckCircle, Award, Calendar, MessageCircle, Target, Shield, Clock, ExternalLink, FileCheck, Search, X, Package, ChevronDown } from 'lucide-react'
import { useCalendly } from '../../contexts/CalendlyContext'
import Footer from '../../components/Footer'
import { SEOPageHeader } from '../../components/SEOPageLayout'

// Image paths
const IMAGES = {
  hero: '/imgs/composting/vs/a_hero_biodegradable_vs_compostable_8031695.webp',
  lifecycle: '/imgs/composting/vs/a_lifecycle_compostable_infographic_2163778.webp',
  comparison: '/imgs/composting/vs/a_comparison_three_terms_1644691.webp',
  greenwashing: '/imgs/composting/vs/a_greenwashing_spotlight_5460764.webp',
  productTrust: '/imgs/composting/vs/a_product_trust_achievepack_5584835.webp',
  ctaBanner: '/imgs/composting/vs/a_cta_footer_banner_9735136.webp'
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
    <div className={`grid md:grid-cols-2 gap-8 items-center overflow-hidden ${imageLeft ? '' : 'md:flex-row-reverse'}`}>
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

const BiodegradableVsCompostablePage: React.FC = () => {
  const { t } = useTranslation()
  const { openCalendly } = useCalendly()

  const sidebarNav = t('seoPages.pages.biodegradableVsCompostable.sidebarNav', { returnObjects: true }) as string[] || []
  const sec2Problems = t('seoPages.pages.biodegradableVsCompostable.sec2Problems', { returnObjects: true }) as string[] || []
  const sec3Guarantees = t('seoPages.pages.biodegradableVsCompostable.sec3Guarantees', { returnObjects: true }) as string[] || []
  const sec6Flags = t('seoPages.pages.biodegradableVsCompostable.sec6Flags', { returnObjects: true }) as Array<{ flag: string; tip: string }> || []
  const sec7Questions = t('seoPages.pages.biodegradableVsCompostable.sec7Questions', { returnObjects: true }) as Array<{ q: string; look: string }> || []
  const faqs = t('seoPages.pages.biodegradableVsCompostable.faqs', { returnObjects: true }) as Array<{ question: string; answer: string }> || []

  const sidebarNavHrefs = ['#intro', '#biodegradable', '#compostable', '#comparison', '#certifications', '#greenwashing', '#cta']

  return (
    <>
      <Helmet>
        <title>{t('seoPages.pages.biodegradableVsCompostable.title')}</title>
        <meta name="description" content={t('seoPages.pages.biodegradableVsCompostable.description')} />
        <link rel="canonical" href="https://achievepack.com/composting/biodegradable-vs-compostable" />
        <meta name="keywords" content={t('seoPages.pages.biodegradableVsCompostable.keywords')} />
        
        {/* Open Graph */}
        <meta property="og:title" content={t('seoPages.pages.biodegradableVsCompostable.ogTitle')} />
        <meta property="og:description" content={t('seoPages.pages.biodegradableVsCompostable.ogDescription')} />
        <meta property="og:image" content="https://achievepack.com/imgs/composting/vs/a_hero_biodegradable_vs_compostable_8031695.webp" />
        <meta property="og:type" content="article" />
        
        {/* Article Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": t('seoPages.pages.biodegradableVsCompostable.ogTitle'),
            "description": t('seoPages.pages.biodegradableVsCompostable.ogDescription'),
            "image": "https://achievepack.com/imgs/composting/vs/a_hero_biodegradable_vs_compostable_8031695.webp",
            "author": {
              "@type": "Organization",
              "name": "Achieve Pack",
              "url": "https://achievepack.com"
            },
            "publisher": {
              "@type": "Organization",
              "name": "Achieve Pack",
              "logo": {
                "@type": "ImageObject",
                "url": "https://achievepack.com/logo.png"
              }
            },
            "datePublished": "2025-01-02",
            "dateModified": "2025-01-02",
            "mainEntityOfPage": "https://achievepack.com/composting/biodegradable-vs-compostable"
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

      <div className="min-h-screen bg-neutral-50 overflow-x-hidden">
        {/* SEO Page Header */}
        <SEOPageHeader />

        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-green-800 to-green-900 text-white py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <span className="bg-amber-500 text-amber-900 px-3 py-1 rounded-full text-sm font-medium">
                    {t('seoPages.pages.biodegradableVsCompostable.badge')}
                  </span>
                </div>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
                  {t('seoPages.pages.biodegradableVsCompostable.heroTitle')}
                </h1>
                <p className="text-lg md:text-xl text-green-100 mb-6">
                  {t('seoPages.pages.biodegradableVsCompostable.heroDescription')}
                </p>
                <div className="flex flex-wrap gap-4">
                  <button
                    onClick={openCalendly}
                    className="flex items-center gap-2 bg-white text-green-800 px-6 py-3 rounded-lg font-semibold hover:bg-neutral-100 transition"
                  >
                    <Calendar className="h-5 w-5" />
                    {t('seoPages.pages.biodegradableVsCompostable.btnConsultation')}
                  </button>
                  <Link
                    to="/store"
                    className="flex items-center gap-2 border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition"
                  >
                    {t('seoPages.pages.biodegradableVsCompostable.btnRequestSamples')}
                  </Link>
                </div>
              </div>
              <div className="hidden md:block">
                <ClickableImage 
                  src={IMAGES.hero}
                  alt={t('seoPages.pages.biodegradableVsCompostable.heroImageAlt')}
                  className="w-full rounded-xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Main Content with Sidebar */}
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Sidebar Navigation */}
            <aside className="hidden lg:block lg:col-span-1">
              <div className="sticky top-24 max-h-[calc(100vh-120px)] overflow-y-auto bg-white rounded-xl shadow-sm border border-neutral-100 p-4">
                <h3 className="text-sm font-semibold text-neutral-500 uppercase tracking-wide mb-4">
                  {t('seoPages.pages.biodegradableVsCompostable.sidebarContents')}
                </h3>
                <nav className="space-y-1">
                  {Array.isArray(sidebarNav) && sidebarNav.map((text, idx) => (
                    <a 
                      key={idx} 
                      href={sidebarNavHrefs[idx]} 
                      className="block px-3 py-2 text-sm text-neutral-600 hover:bg-primary-50 hover:text-primary-700 rounded-lg transition"
                    >
                      {text}
                    </a>
                  ))}
                </nav>
              </div>
            </aside>

            {/* Main Content Area */}
            <main className="lg:col-span-3 space-y-8 overflow-hidden">
          
          {/* Introduction */}
          <section id="intro" className="bg-white rounded-xl p-6 md:p-8 shadow-sm border border-neutral-100">
            <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-lg mb-8">
              <h2 className="text-xl font-bold text-amber-800 mb-2 flex items-center gap-2">
                <AlertTriangle className="h-5 w-5" />
                {t('seoPages.pages.biodegradableVsCompostable.sec1WarningTitle')}
              </h2>
              <p className="text-amber-900" dangerouslySetInnerHTML={{ __html: t('seoPages.pages.biodegradableVsCompostable.sec1WarningP1') }} />
            </div>

            <ImageTextRow 
              image={IMAGES.hero}
              imageAlt={t('seoPages.pages.biodegradableVsCompostable.sec1ImgAlt')}
              imageCaption={t('seoPages.pages.biodegradableVsCompostable.sec1ImgCaption')}
              imageLeft={true}
            >
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-neutral-900">
                  {t('seoPages.pages.biodegradableVsCompostable.sec1Title')}
                </h3>
                <p className="text-neutral-700">
                  {t('seoPages.pages.biodegradableVsCompostable.sec1P1')}
                </p>
                <div className="bg-red-50 p-4 rounded-lg border border-red-200">
                  <p className="text-sm text-red-800" dangerouslySetInnerHTML={{ __html: t('seoPages.pages.biodegradableVsCompostable.sec1Note') }} />
                </div>
              </div>
            </ImageTextRow>
          </section>

          {/* What is Biodegradable */}
          <section id="biodegradable" className="bg-white rounded-xl p-6 md:p-8 shadow-sm border border-neutral-100">
            <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-6 flex items-center gap-3">
              <Target className="h-7 w-7 text-amber-600" />
              {t('seoPages.pages.biodegradableVsCompostable.sec2Title')}
            </h2>
            
            <ImageTextRow 
              image={IMAGES.comparison}
              imageAlt={t('seoPages.pages.biodegradableVsCompostable.sec2ImgAlt')}
              imageCaption={t('seoPages.pages.biodegradableVsCompostable.sec2ImgCaption')}
              imageLeft={false}
            >
              <div className="space-y-4">
                <div className="bg-amber-50 p-5 rounded-lg border border-amber-200">
                  <h4 className="font-semibold text-amber-800 mb-2">
                    {t('seoPages.pages.biodegradableVsCompostable.sec2DefTitle')}
                  </h4>
                  <p className="text-amber-900" dangerouslySetInnerHTML={{ __html: t('seoPages.pages.biodegradableVsCompostable.sec2DefP') }} />
                </div>
                
                <h4 className="font-semibold text-neutral-800">
                  {t('seoPages.pages.biodegradableVsCompostable.sec2ProblemTitle')}
                </h4>
                <ul className="space-y-2 text-neutral-700">
                  {Array.isArray(sec2Problems) && sec2Problems.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-red-500 mt-1">✗</span>
                      <span dangerouslySetInnerHTML={{ __html: item }} />
                    </li>
                  ))}
                </ul>
              </div>
            </ImageTextRow>
          </section>

          {/* What is Compostable */}
          <section id="compostable" className="bg-white rounded-xl p-6 md:p-8 shadow-sm border border-neutral-100">
            <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-6 flex items-center gap-3">
              <Leaf className="h-7 w-7 text-green-600" />
              {t('seoPages.pages.biodegradableVsCompostable.sec3Title')}
            </h2>
            
            <ImageTextRow 
              image={IMAGES.lifecycle}
              imageAlt={t('seoPages.pages.biodegradableVsCompostable.sec3ImgAlt')}
              imageCaption={t('seoPages.pages.biodegradableVsCompostable.sec3ImgCaption')}
              imageLeft={true}
            >
              <div className="space-y-4">
                <div className="bg-green-50 p-5 rounded-lg border border-green-200">
                  <h4 className="font-semibold text-green-800 mb-2">
                    {t('seoPages.pages.biodegradableVsCompostable.sec3CertTitle')}
                  </h4>
                  <p className="text-green-900" dangerouslySetInnerHTML={{ __html: t('seoPages.pages.biodegradableVsCompostable.sec3CertDesc') }} />
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="bg-white p-4 rounded-lg border shadow-sm">
                    <h5 className="font-semibold text-neutral-800 flex items-center gap-2">
                      <span className="text-lg">🇪🇺</span> {t('seoPages.pages.biodegradableVsCompostable.sec3Card1Title')}
                    </h5>
                    <p className="text-sm text-neutral-600 mt-1">
                      {t('seoPages.pages.biodegradableVsCompostable.sec3Card1Desc')}
                    </p>
                  </div>
                  <div className="bg-white p-4 rounded-lg border shadow-sm">
                    <h5 className="font-semibold text-neutral-800 flex items-center gap-2">
                      <span className="text-lg">🇺🇸</span> {t('seoPages.pages.biodegradableVsCompostable.sec3Card2Title')}
                    </h5>
                    <p className="text-sm text-neutral-600 mt-1">
                      {t('seoPages.pages.biodegradableVsCompostable.sec3Card2Desc')}
                    </p>
                  </div>
                </div>

                <h4 className="font-semibold text-neutral-800 mt-4">
                  {t('seoPages.pages.biodegradableVsCompostable.sec3GuaranteesTitle')}
                </h4>
                <ul className="space-y-2 text-neutral-700">
                  {Array.isArray(sec3Guarantees) && sec3Guarantees.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span dangerouslySetInnerHTML={{ __html: item }} />
                    </li>
                  ))}
                </ul>
              </div>
            </ImageTextRow>
          </section>

          {/* Key Differences Table */}
          <section id="comparison" className="bg-white rounded-xl p-6 md:p-8 shadow-sm border border-neutral-100">
            <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-6 flex items-center gap-3">
              <FileCheck className="h-7 w-7 text-blue-600" />
              {t('seoPages.pages.biodegradableVsCompostable.sec4Title')}
            </h2>
            
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse bg-white rounded-xl overflow-hidden shadow-lg" style={{ minWidth: '600px' }}>
                <thead>
                  <tr className="bg-neutral-800 text-white">
                    <th className="text-left p-4 font-semibold">{t('seoPages.pages.biodegradableVsCompostable.sec4TableCriteria')}</th>
                    <th className="text-left p-4 font-semibold">{t('seoPages.pages.biodegradableVsCompostable.sec4TableBio')}</th>
                    <th className="text-left p-4 font-semibold bg-green-700">{t('seoPages.pages.biodegradableVsCompostable.sec4TableComp')}</th>
                    <th className="text-left p-4 font-semibold">{t('seoPages.pages.biodegradableVsCompostable.sec4TableDeg')}</th>
                  </tr>
                </thead>
                <tbody className="text-neutral-700">
                  <tr className="border-b">
                    <td className="p-4 font-medium">{t('seoPages.pages.biodegradableVsCompostable.sec4Row1Criteria')}</td>
                    <td className="p-4">{t('seoPages.pages.biodegradableVsCompostable.sec4Row1Bio')}</td>
                    <td className="p-4 bg-green-50">{t('seoPages.pages.biodegradableVsCompostable.sec4Row1Comp')}</td>
                    <td className="p-4">{t('seoPages.pages.biodegradableVsCompostable.sec4Row1Deg')}</td>
                  </tr>
                  <tr className="border-b bg-neutral-50">
                    <td className="p-4 font-medium">{t('seoPages.pages.biodegradableVsCompostable.sec4Row2Criteria')}</td>
                    <td className="p-4">{t('seoPages.pages.biodegradableVsCompostable.sec4Row2Bio')}</td>
                    <td className="p-4 bg-green-50 whitespace-nowrap">{t('seoPages.pages.biodegradableVsCompostable.sec4Row2Comp')}</td>
                    <td className="p-4">{t('seoPages.pages.biodegradableVsCompostable.sec4Row2Deg')}</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-4 font-medium">{t('seoPages.pages.biodegradableVsCompostable.sec4Row3Criteria')}</td>
                    <td className="p-4">{t('seoPages.pages.biodegradableVsCompostable.sec4Row3Bio')}</td>
                    <td className="p-4 bg-green-50">{t('seoPages.pages.biodegradableVsCompostable.sec4Row3Comp')}</td>
                    <td className="p-4">{t('seoPages.pages.biodegradableVsCompostable.sec4Row3Deg')}</td>
                  </tr>
                  <tr className="border-b bg-neutral-50">
                    <td className="p-4 font-medium">{t('seoPages.pages.biodegradableVsCompostable.sec4Row4Criteria')}</td>
                    <td className="p-4">{t('seoPages.pages.biodegradableVsCompostable.sec4Row4Bio')}</td>
                    <td className="p-4 bg-green-50">{t('seoPages.pages.biodegradableVsCompostable.sec4Row4Comp')}</td>
                    <td className="p-4">{t('seoPages.pages.biodegradableVsCompostable.sec4Row4Deg')}</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-medium">{t('seoPages.pages.biodegradableVsCompostable.sec4Row5Criteria')}</td>
                    <td className="p-4 text-red-600">{t('seoPages.pages.biodegradableVsCompostable.sec4Row5Bio')}</td>
                    <td className="p-4 bg-green-50 text-green-700">{t('seoPages.pages.biodegradableVsCompostable.sec4Row5Comp')}</td>
                    <td className="p-4 text-red-600">{t('seoPages.pages.biodegradableVsCompostable.sec4Row5Deg')}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Other Terms to Watch */}
          <section id="certifications" className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-6 flex items-center gap-3">
              <Search className="h-7 w-7 text-purple-600" />
              {t('seoPages.pages.biodegradableVsCompostable.sec5Title')}
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-red-50 p-5 rounded-lg border border-red-200">
                <h4 className="font-semibold text-red-800 mb-2">{t('seoPages.pages.biodegradableVsCompostable.sec5Card1Title')}</h4>
                <p className="text-sm text-red-700">
                  {t('seoPages.pages.biodegradableVsCompostable.sec5Card1Desc')}
                </p>
              </div>
              <div className="bg-red-50 p-5 rounded-lg border border-red-200">
                <h4 className="font-semibold text-red-800 mb-2">{t('seoPages.pages.biodegradableVsCompostable.sec5Card2Title')}</h4>
                <p className="text-sm text-red-700" dangerouslySetInnerHTML={{ __html: t('seoPages.pages.biodegradableVsCompostable.sec5Card2Desc') }} />
              </div>
              <div className="bg-amber-50 p-5 rounded-lg border border-amber-200">
                <h4 className="font-semibold text-amber-800 mb-2">{t('seoPages.pages.biodegradableVsCompostable.sec5Card3Title')}</h4>
                <p className="text-sm text-amber-700">
                  {t('seoPages.pages.biodegradableVsCompostable.sec5Card3Desc')}
                </p>
              </div>
              <div className="bg-amber-50 p-5 rounded-lg border border-amber-200">
                <h4 className="font-semibold text-amber-800 mb-2">{t('seoPages.pages.biodegradableVsCompostable.sec5Card4Title')}</h4>
                <p className="text-sm text-amber-700">
                  {t('seoPages.pages.biodegradableVsCompostable.sec5Card4Desc')}
                </p>
              </div>
            </div>
          </section>

          {/* Identifying Greenwashing */}
          <section id="greenwashing" className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-6 flex items-center gap-3">
              <AlertTriangle className="h-7 w-7 text-red-600" />
              {t('seoPages.pages.biodegradableVsCompostable.sec6Title')}
            </h2>
            
            <ImageTextRow 
              image={IMAGES.greenwashing}
              imageAlt={t('seoPages.pages.biodegradableVsCompostable.sec6ImgAlt')}
              imageCaption={t('seoPages.pages.biodegradableVsCompostable.sec6ImgCaption')}
              imageLeft={false}
            >
              <div className="space-y-3">
                {Array.isArray(sec6Flags) && sec6Flags.map((item, idx) => (
                  <div key={idx} className="bg-white p-4 rounded-lg border border-neutral-200 shadow-sm">
                    <div className="flex items-start gap-3">
                      <span className="bg-red-100 text-red-600 font-bold rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0">{idx + 1}</span>
                      <div>
                        <p className="font-medium text-neutral-800">{item?.flag}</p>
                        <p className="text-sm text-neutral-600">{item?.tip}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </ImageTextRow>
          </section>

          {/* Procurement Checklist */}
          <section className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-6 flex items-center gap-3">
              <CheckCircle className="h-7 w-7 text-green-600" />
              {t('seoPages.pages.biodegradableVsCompostable.sec7Title')}
            </h2>
            
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 md:p-8 rounded-xl border border-green-200">
              <p className="text-neutral-700 mb-6">
                {t('seoPages.pages.biodegradableVsCompostable.sec7Desc')}
              </p>
              
              <div className="grid md:grid-cols-2 gap-4">
                {Array.isArray(sec7Questions) && sec7Questions.map((item, idx) => (
                  <div key={idx} className="bg-white p-4 rounded-lg border border-green-200">
                    <p className="font-medium text-neutral-800 mb-1">{idx + 1}. {item?.q}</p>
                    <p className="text-sm text-green-700">Look for: {item?.look}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Achievepack Positioning */}
          <section className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-6 flex items-center gap-3">
              <Award className="h-7 w-7 text-primary-600" />
              {t('seoPages.pages.biodegradableVsCompostable.sec8Title')}
            </h2>
            
            <ImageTextRow 
              image={IMAGES.productTrust}
              imageAlt={t('seoPages.pages.biodegradableVsCompostable.sec8ImgAlt')}
              imageCaption={t('seoPages.pages.biodegradableVsCompostable.sec8ImgCaption')}
              imageLeft={true}
            >
              <div className="space-y-4">
                <p className="text-neutral-700" dangerouslySetInnerHTML={{ __html: t('seoPages.pages.biodegradableVsCompostable.sec8P1') }} />
                
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-neutral-800">{t('seoPages.pages.biodegradableVsCompostable.sec8Card1Title')}</p>
                      <p className="text-sm text-neutral-600">{t('seoPages.pages.biodegradableVsCompostable.sec8Card1Desc')}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-neutral-800">{t('seoPages.pages.biodegradableVsCompostable.sec8Card2Title')}</p>
                      <p className="text-sm text-neutral-600">{t('seoPages.pages.biodegradableVsCompostable.sec8Card2Desc')}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-neutral-800">{t('seoPages.pages.biodegradableVsCompostable.sec8Card3Title')}</p>
                      <p className="text-sm text-neutral-600">{t('seoPages.pages.biodegradableVsCompostable.sec8Card3Desc')}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-neutral-800">{t('seoPages.pages.biodegradableVsCompostable.sec8Card4Title')}</p>
                      <p className="text-sm text-neutral-600">{t('seoPages.pages.biodegradableVsCompostable.sec8Card4Desc')}</p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-3 mt-4 pt-4 border-t">
                  <a 
                    href="https://products.bpiworld.org/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-sm text-primary-600 hover:underline flex items-center gap-1"
                  >
                    <ExternalLink className="h-4 w-4" />
                    {t('seoPages.pages.biodegradableVsCompostable.sec8VerifyBpi')}
                  </a>
                  <a 
                    href="https://www.tuv-at.be/green-marks/certified-products/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-sm text-primary-600 hover:underline flex items-center gap-1"
                  >
                    <ExternalLink className="h-4 w-4" />
                    {t('seoPages.pages.biodegradableVsCompostable.sec8VerifyTuv')}
                  </a>
                </div>
              </div>
            </ImageTextRow>
          </section>

          {/* The Honest Truth */}
          <section className="mb-16">
            <div className="bg-neutral-800 text-white p-6 md:p-8 rounded-xl">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <Shield className="h-6 w-6 text-amber-400" />
                {t('seoPages.pages.biodegradableVsCompostable.sec9Title')}
              </h3>
              <p className="text-neutral-300 mb-4" dangerouslySetInnerHTML={{ __html: t('seoPages.pages.biodegradableVsCompostable.sec9P1') }} />
              <p className="text-neutral-300" dangerouslySetInnerHTML={{ __html: t('seoPages.pages.biodegradableVsCompostable.sec9P2') }} />
            </div>
          </section>

          {/* Related Links */}
          <section className="mb-16">
            <h2 className="text-xl font-bold text-neutral-900 mb-4">{t('seoPages.pages.biodegradableVsCompostable.relatedTitle')}</h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
              <Link to="/materials/home-compostable" className="bg-white p-4 rounded-lg border hover:shadow-md transition">
                <h4 className="font-semibold text-neutral-800">{t('seoPages.pages.biodegradableVsCompostable.related1Title')}</h4>
                <p className="text-sm text-neutral-600 mt-1">{t('seoPages.pages.biodegradableVsCompostable.related1Desc')}</p>
              </Link>
              <Link to="/materials/industrial-compostable" className="bg-white p-4 rounded-lg border hover:shadow-md transition">
                <h4 className="font-semibold text-neutral-800">{t('seoPages.pages.biodegradableVsCompostable.related2Title')}</h4>
                <p className="text-sm text-neutral-600 mt-1">{t('seoPages.pages.biodegradableVsCompostable.related2Desc')}</p>
              </Link>
              <Link to="/materials/recyclable-mono-pe" className="bg-white p-4 rounded-lg border hover:shadow-md transition">
                <h4 className="font-semibold text-neutral-800">{t('seoPages.pages.biodegradableVsCompostable.related3Title')}</h4>
                <p className="text-sm text-neutral-600 mt-1">{t('seoPages.pages.biodegradableVsCompostable.related3Desc')}</p>
              </Link>
              <Link to="/topics/eco-friendly-food-packaging" className="bg-white p-4 rounded-lg border hover:shadow-md transition">
                <h4 className="font-semibold text-neutral-800">{t('seoPages.pages.biodegradableVsCompostable.related4Title')}</h4>
                <p className="text-sm text-neutral-600 mt-1">{t('seoPages.pages.biodegradableVsCompostable.related4Desc')}</p>
              </Link>
              <Link to="/company/certificates" className="bg-white p-4 rounded-lg border hover:shadow-md transition">
                <h4 className="font-semibold text-neutral-800">{t('seoPages.pages.biodegradableVsCompostable.related5Title')}</h4>
                <p className="text-sm text-neutral-600 mt-1">{t('seoPages.pages.biodegradableVsCompostable.related5Desc')}</p>
              </Link>
              <Link to="/support/faqs" className="bg-white p-4 rounded-lg border hover:shadow-md transition">
                <h4 className="font-semibold text-neutral-800">{t('seoPages.pages.biodegradableVsCompostable.related6Title')}</h4>
                <p className="text-sm text-neutral-600 mt-1">{t('seoPages.pages.biodegradableVsCompostable.related6Desc')}</p>
              </Link>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="mb-12 bg-white rounded-xl p-6 md:p-8">
            <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-8 text-center">
              {t('seoPages.pages.biodegradableVsCompostable.faqTitle')}
            </h2>
            <div className="space-y-4 max-w-3xl mx-auto">
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
          </section>

          {/* CTA Section */}
          <section id="cta" className="mb-8">
            <div className="relative rounded-xl overflow-hidden">
              <img 
                src={IMAGES.ctaBanner}
                alt={t('seoPages.pages.biodegradableVsCompostable.ctaImageAlt')}
                className="w-full h-64 md:h-80 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-green-900/90 to-green-800/70 flex items-center">
                <div className="p-6 md:p-10 max-w-2xl">
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                    {t('seoPages.pages.biodegradableVsCompostable.ctaTitle')}
                  </h3>
                  <p className="text-green-100 mb-6">
                    {t('seoPages.pages.biodegradableVsCompostable.ctaP1')}
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <button
                      onClick={openCalendly}
                      className="flex items-center justify-center gap-2 bg-white text-green-800 px-6 py-3 rounded-lg font-semibold hover:bg-neutral-100 transition shadow-lg"
                    >
                      <Calendar className="h-5 w-5" />
                      {t('seoPages.pages.biodegradableVsCompostable.btnBookConsultation')}
                    </button>
                    <Link
                      to="/store?category=sample"
                      className="flex items-center justify-center gap-2 bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-500 transition"
                    >
                      <Package className="h-5 w-5" />
                      {t('seoPages.pages.biodegradableVsCompostable.btnOrderSamples')}
                    </Link>
                    <Link
                      to="/store"
                      className="flex items-center justify-center gap-2 border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition"
                    >
                      {t('seoPages.pages.biodegradableVsCompostable.btnBrowseStore')}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>

            </main>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </>
  )
}

export default BiodegradableVsCompostablePage
