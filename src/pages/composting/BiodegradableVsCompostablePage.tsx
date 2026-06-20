import React, { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { Leaf, AlertTriangle, CheckCircle, Award, Calendar, MessageCircle, Target, Shield, Clock, ExternalLink, FileCheck, Search, X, Package, ChevronDown } from 'lucide-react'
import { useCalendly } from '../../contexts/CalendlyContext'
import Footer from '../../components/Footer'
import { SEOPageHeader } from '../../components/SEOPageLayout'
import { useTranslation } from 'react-i18next'

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
  const p = 'seoPages.pages.biodegradableVsCompostable'

  const renderHtml = (text: string) => {
    return <span dangerouslySetInnerHTML={{ __html: text }} />
  }

  return (
    <>
      <Helmet>
        <title>{t(`${p}.metaTitle`)}</title>
        <meta name="description" content={t(`${p}.metaDesc`)} />
        <link rel="canonical" href="https://achievepack.com/composting/biodegradable-vs-compostable" />
        <meta name="keywords" content={t(`${p}.metaKeywords`)} />
        
        {/* Open Graph */}
        <meta property="og:title" content={t(`${p}.ogTitle`)} />
        <meta property="og:description" content={t(`${p}.ogDesc`)} />
        <meta property="og:image" content="https://achievepack.com/imgs/composting/vs/a_hero_biodegradable_vs_compostable_8031695.webp" />
        <meta property="og:type" content="article" />
        
        {/* Article Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": t(`${p}.schemaHeadline`),
            "description": t(`${p}.schemaDesc`),
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
            "mainEntity": [
              {
                "@type": "Question",
                "name": t(`${p}.faqQ1`),
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": t(`${p}.faqA1`)
                }
              },
              {
                "@type": "Question",
                "name": t(`${p}.faqQ2`),
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": t(`${p}.faqA2`)
                }
              },
              {
                "@type": "Question",
                "name": t(`${p}.faqQ3`),
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": t(`${p}.faqA3`)
                }
              }
            ]
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
                    {t(`${p}.heroBadge`)}
                  </span>
                </div>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
                  {t(`${p}.heroTitle`)}
                </h1>
                <p className="text-lg md:text-xl text-green-100 mb-6">
                  {t(`${p}.heroSubtitle`)}
                </p>
                <div className="flex flex-wrap gap-4">
                  <button
                    onClick={openCalendly}
                    className="flex items-center gap-2 bg-white text-green-800 px-6 py-3 rounded-lg font-semibold hover:bg-neutral-100 transition"
                  >
                    <Calendar className="h-5 w-5" />
                    {t(`${p}.heroConsultationBtn`)}
                  </button>
                  <Link
                    to="/store"
                    className="flex items-center gap-2 border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition"
                  >
                    {t(`${p}.heroSampleBtn`)}
                  </Link>
                </div>
              </div>
              <div className="hidden md:block">
                <ClickableImage 
                  src={IMAGES.hero}
                  alt={t(`${p}.heroTitle`)}
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
                <h3 className="text-sm font-semibold text-neutral-500 uppercase tracking-wide mb-4">{t(`${p}.sidebarContents`)}</h3>
                <nav className="space-y-1">
                  <a href="#intro" className="block px-3 py-2 text-sm text-neutral-600 hover:bg-primary-50 hover:text-primary-700 rounded-lg transition">{t(`${p}.sidebarWhyTerms`)}</a>
                  <a href="#biodegradable" className="block px-3 py-2 text-sm text-neutral-600 hover:bg-primary-50 hover:text-primary-700 rounded-lg transition">{t(`${p}.sidebarWhatIsBiodegradable`)}</a>
                  <a href="#compostable" className="block px-3 py-2 text-sm text-neutral-600 hover:bg-primary-50 hover:text-primary-700 rounded-lg transition">{t(`${p}.sidebarWhatIsCompostable`)}</a>
                  <a href="#comparison" className="block px-3 py-2 text-sm text-neutral-600 hover:bg-primary-50 hover:text-primary-700 rounded-lg transition">{t(`${p}.sidebarKeyDifferences`)}</a>
                  <a href="#certifications" className="block px-3 py-2 text-sm text-neutral-600 hover:bg-primary-50 hover:text-primary-700 rounded-lg transition">{t(`${p}.sidebarCertifications`)}</a>
                  <a href="#greenwashing" className="block px-3 py-2 text-sm text-neutral-600 hover:bg-primary-50 hover:text-primary-700 rounded-lg transition">{t(`${p}.sidebarGreenwashing`)}</a>
                  <a href="#cta" className="block px-3 py-2 text-sm text-neutral-600 hover:bg-primary-50 hover:text-primary-700 rounded-lg transition">{t(`${p}.sidebarGetStarted`)}</a>
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
                {t(`${p}.introTitle`)}
              </h2>
              <p className="text-amber-900">
                {renderHtml(t(`${p}.introDesc1`))}
              </p>
            </div>

            <ImageTextRow 
              image={IMAGES.hero}
              imageAlt={t(`${p}.introRiskTitle`)}
              imageCaption={t(`${p}.introCaption`)}
              imageLeft={true}
            >
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-neutral-900">{t(`${p}.introRiskTitle`)}</h3>
                <p className="text-neutral-700">
                  {t(`${p}.introRiskDesc`)}
                </p>
                <div className="bg-red-50 p-4 rounded-lg border border-red-200">
                  <p className="text-sm text-red-800">
                    {renderHtml(t(`${p}.introRiskBox`))}
                  </p>
                </div>
              </div>
            </ImageTextRow>
          </section>

          {/* What is Biodegradable */}
          <section id="biodegradable" className="bg-white rounded-xl p-6 md:p-8 shadow-sm border border-neutral-100">
            <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-6 flex items-center gap-3">
              <Target className="h-7 w-7 text-amber-600" />
              {t(`${p}.bioTitle`)}
            </h2>
            
            <ImageTextRow 
              image={IMAGES.comparison}
              imageAlt={t(`${p}.bioTitle`)}
              imageCaption={t(`${p}.bioCaption`)}
              imageLeft={false}
            >
              <div className="space-y-4">
                <div className="bg-amber-50 p-5 rounded-lg border border-amber-200">
                  <h4 className="font-semibold text-amber-800 mb-2">{t(`${p}.bioDefTitle`)}</h4>
                  <p className="text-amber-900">
                    {renderHtml(t(`${p}.bioDefDesc`))}
                  </p>
                </div>
                
                <h4 className="font-semibold text-neutral-800">{t(`${p}.bioProblemTitle`)}</h4>
                <ul className="space-y-2 text-neutral-700">
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 mt-1">✗</span>
                    <span>{renderHtml(t(`${p}.bioProblemItem1`))}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 mt-1">✗</span>
                    <span>{renderHtml(t(`${p}.bioProblemItem2`))}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 mt-1">✗</span>
                    <span>{renderHtml(t(`${p}.bioProblemItem3`))}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 mt-1">✗</span>
                    <span>{renderHtml(t(`${p}.bioProblemItem4`))}</span>
                  </li>
                </ul>
              </div>
            </ImageTextRow>
          </section>

          {/* What is Compostable */}
          <section id="compostable" className="bg-white rounded-xl p-6 md:p-8 shadow-sm border border-neutral-100">
            <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-6 flex items-center gap-3">
              <Leaf className="h-7 w-7 text-green-600" />
              {t(`${p}.compTitle`)}
            </h2>
            
            <ImageTextRow 
              image={IMAGES.lifecycle}
              imageAlt={t(`${p}.compTitle`)}
              imageCaption={t(`${p}.compCaption`)}
              imageLeft={true}
            >
              <div className="space-y-4">
                <div className="bg-green-50 p-5 rounded-lg border border-green-200">
                  <h4 className="font-semibold text-green-800 mb-2">{t(`${p}.compStandardsTitle`)}</h4>
                  <p className="text-green-900">
                    {renderHtml(t(`${p}.compStandardsDesc`))}
                  </p>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="bg-white p-4 rounded-lg border shadow-sm">
                    <h5 className="font-semibold text-neutral-800 flex items-center gap-2">
                      <span className="text-lg">🇪🇺</span> {t(`${p}.compCardENTitle`)}
                    </h5>
                    <p className="text-sm text-neutral-600 mt-1">{t(`${p}.compCardENDesc`)}</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg border shadow-sm">
                    <h5 className="font-semibold text-neutral-800 flex items-center gap-2">
                      <span className="text-lg">🇺🇸</span> {t(`${p}.compCardASTMTitle`)}
                    </h5>
                    <p className="text-sm text-neutral-600 mt-1">{t(`${p}.compCardASTMDesc`)}</p>
                  </div>
                </div>

                <h4 className="font-semibold text-neutral-800 mt-4">{t(`${p}.compGuaranteesTitle`)}</h4>
                <ul className="space-y-2 text-neutral-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>{renderHtml(t(`${p}.compGuaranteeItem1`))}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>{renderHtml(t(`${p}.compGuaranteeItem2`))}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>{renderHtml(t(`${p}.compGuaranteeItem3`))}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>{renderHtml(t(`${p}.compGuaranteeItem4`))}</span>
                  </li>
                </ul>
              </div>
            </ImageTextRow>
          </section>

          {/* Key Differences Table */}
          <section id="comparison" className="bg-white rounded-xl p-6 md:p-8 shadow-sm border border-neutral-100">
            <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-6 flex items-center gap-3">
              <FileCheck className="h-7 w-7 text-blue-600" />
              {t(`${p}.diffTitle`)}
            </h2>
            
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse bg-white rounded-xl overflow-hidden shadow-lg" style={{ minWidth: '600px' }}>
                <thead>
                  <tr className="bg-neutral-800 text-white">
                    <th className="text-left p-4 font-semibold">{t(`${p}.diffTableHeaderCriteria`)}</th>
                    <th className="text-left p-4 font-semibold">{t(`${p}.diffTableHeaderBiodegradable`)}</th>
                    <th className="text-left p-4 font-semibold bg-green-700">{t(`${p}.diffTableHeaderCompostable`)}</th>
                    <th className="text-left p-4 font-semibold">{t(`${p}.diffTableHeaderDegradable`)}</th>
                  </tr>
                </thead>
                <tbody className="text-neutral-700">
                  <tr className="border-b">
                    <td className="p-4 font-medium">{t(`${p}.diffTableRow1Criteria`)}</td>
                    <td className="p-4">{t(`${p}.diffTableRow1Bio`)}</td>
                    <td className="p-4 bg-green-50">{t(`${p}.diffTableRow1Comp`)}</td>
                    <td className="p-4">{t(`${p}.diffTableRow1Deg`)}</td>
                  </tr>
                  <tr className="border-b bg-neutral-50">
                    <td className="p-4 font-medium">{t(`${p}.diffTableRow2Criteria`)}</td>
                    <td className="p-4">{t(`${p}.diffTableRow2Bio`)}</td>
                    <td className="p-4 bg-green-50">{t(`${p}.diffTableRow2Comp`)}</td>
                    <td className="p-4">{t(`${p}.diffTableRow2Deg`)}</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-4 font-medium">{t(`${p}.diffTableRow3Criteria`)}</td>
                    <td className="p-4">{t(`${p}.diffTableRow3Bio`)}</td>
                    <td className="p-4 bg-green-50">{t(`${p}.diffTableRow3Comp`)}</td>
                    <td className="p-4">{t(`${p}.diffTableRow3Deg`)}</td>
                  </tr>
                  <tr className="border-b bg-neutral-50">
                    <td className="p-4 font-medium">{t(`${p}.diffTableRow4Criteria`)}</td>
                    <td className="p-4">{t(`${p}.diffTableRow4Bio`)}</td>
                    <td className="p-4 bg-green-50">{t(`${p}.diffTableRow4Comp`)}</td>
                    <td className="p-4">{t(`${p}.diffTableRow4Deg`)}</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-medium">{t(`${p}.diffTableRow5Criteria`)}</td>
                    <td className="p-4 text-red-600">{t(`${p}.diffTableRow5Bio`)}</td>
                    <td className="p-4 bg-green-50 text-green-700">{t(`${p}.diffTableRow5Comp`)}</td>
                    <td className="p-4 text-red-600">{t(`${p}.diffTableRow5Deg`)}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Other Terms to Watch */}
          <section className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-6 flex items-center gap-3">
              <Search className="h-7 w-7 text-purple-600" />
              {t(`${p}.otherTermsTitle`)}
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-red-50 p-5 rounded-lg border border-red-200">
                <h4 className="font-semibold text-red-800 mb-2">{t(`${p}.otherTermsDegradableTitle`)}</h4>
                <p className="text-sm text-red-700">
                  {t(`${p}.otherTermsDegradableDesc`)}
                </p>
              </div>
              <div className="bg-red-50 p-5 rounded-lg border border-red-200">
                <h4 className="font-semibold text-red-800 mb-2">{t(`${p}.otherTermsOxoTitle`)}</h4>
                <p className="text-sm text-red-700">
                  {renderHtml(t(`${p}.otherTermsOxoDesc`))}
                </p>
              </div>
              <div className="bg-amber-50 p-5 rounded-lg border border-amber-200">
                <h4 className="font-semibold text-amber-800 mb-2">{t(`${p}.otherTermsPlantTitle`)}</h4>
                <p className="text-sm text-amber-700">
                  {t(`${p}.otherTermsPlantDesc`)}
                </p>
              </div>
              <div className="bg-amber-50 p-5 rounded-lg border border-amber-200">
                <h4 className="font-semibold text-amber-800 mb-2">{t(`${p}.otherTermsEcoTitle`)}</h4>
                <p className="text-sm text-amber-700">
                  {t(`${p}.otherTermsEcoDesc`)}
                </p>
              </div>
            </div>
          </section>

          {/* Identifying Greenwashing */}
          <section className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-6 flex items-center gap-3">
              <AlertTriangle className="h-7 w-7 text-red-600" />
              {t(`${p}.greenwashingTitle`)}
            </h2>
            
            <ImageTextRow 
              image={IMAGES.greenwashing}
              imageAlt={t(`${p}.greenwashingTitle`)}
              imageCaption={t(`${p}.greenwashingCaption`)}
              imageLeft={false}
            >
              <div className="space-y-3">
                {[
                  { flag: t(`${p}.greenwashingFlag1Title`), tip: t(`${p}.greenwashingFlag1Tip`) },
                  { flag: t(`${p}.greenwashingFlag2Title`), tip: t(`${p}.greenwashingFlag2Tip`) },
                  { flag: t(`${p}.greenwashingFlag3Title`), tip: t(`${p}.greenwashingFlag3Tip`) },
                  { flag: t(`${p}.greenwashingFlag4Title`), tip: t(`${p}.greenwashingFlag4Tip`) },
                  { flag: t(`${p}.greenwashingFlag5Title`), tip: t(`${p}.greenwashingFlag5Tip`) }
                ].map((item, idx) => (
                  <div key={idx} className="bg-white p-4 rounded-lg border border-neutral-200 shadow-sm">
                    <div className="flex items-start gap-3">
                      <span className="bg-red-100 text-red-600 font-bold rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0">{idx + 1}</span>
                      <div>
                        <p className="font-medium text-neutral-800">{item.flag}</p>
                        <p className="text-sm text-neutral-600">{item.tip}</p>
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
              {t(`${p}.checklistTitle`)}
            </h2>
            
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 md:p-8 rounded-xl border border-green-200">
              <p className="text-neutral-700 mb-6">
                {t(`${p}.checklistIntro`)}
              </p>
              
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  { q: t(`${p}.checklistItem1Q`), look: t(`${p}.checklistItem1Look`) },
                  { q: t(`${p}.checklistItem2Q`), look: t(`${p}.checklistItem2Look`) },
                  { q: t(`${p}.checklistItem3Q`), look: t(`${p}.checklistItem3Look`) },
                  { q: t(`${p}.checklistItem4Q`), look: t(`${p}.checklistItem4Look`) },
                  { q: t(`${p}.checklistItem5Q`), look: t(`${p}.checklistItem5Look`) },
                  { q: t(`${p}.checklistItem6Q`), look: t(`${p}.checklistItem6Look`) }
                ].map((item, idx) => (
                  <div key={idx} className="bg-white p-4 rounded-lg border border-green-200">
                    <p className="font-medium text-neutral-800 mb-1">{idx + 1}. {item.q}</p>
                    <p className="text-sm text-green-700">Look for: {item.look}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Achievepack Positioning */}
          <section className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-6 flex items-center gap-3">
              <Award className="h-7 w-7 text-primary-600" />
              {t(`${p}.trustTitle`)}
            </h2>
            
            <ImageTextRow 
              image={IMAGES.productTrust}
              imageAlt={t(`${p}.trustTitle`)}
              imageCaption={t(`${p}.trustCaption`)}
              imageLeft={true}
            >
              <div className="space-y-4">
                <p className="text-neutral-700">
                  {renderHtml(t(`${p}.trustDesc`))}
                </p>
                
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-neutral-800">{t(`${p}.trustItem1Title`)}</p>
                      <p className="text-sm text-neutral-600">{t(`${p}.trustItem1Desc`)}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-neutral-800">{t(`${p}.trustItem2Title`)}</p>
                      <p className="text-sm text-neutral-600">{t(`${p}.trustItem2Desc`)}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-neutral-800">{t(`${p}.trustItem3Title`)}</p>
                      <p className="text-sm text-neutral-600">{t(`${p}.trustItem3Desc`)}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-neutral-800">{t(`${p}.trustItem4Title`)}</p>
                      <p className="text-sm text-neutral-600">{t(`${p}.trustItem4Desc`)}</p>
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
                    {t(`${p}.trustVerifyBpi`)}
                  </a>
                  <a 
                    href="https://www.tuv-at.be/green-marks/certified-products/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-sm text-primary-600 hover:underline flex items-center gap-1"
                  >
                    <ExternalLink className="h-4 w-4" />
                    {t(`${p}.trustVerifyTuv`)}
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
                {t(`${p}.truthTitle`)}
              </h3>
              <p className="text-neutral-300 mb-4">
                {renderHtml(t(`${p}.truthDesc1`))}
              </p>
              <p className="text-neutral-300">
                {renderHtml(t(`${p}.truthDesc2`))}
              </p>
            </div>
          </section>

          {/* Related Links */}
          <section className="mb-16">
            <h2 className="text-xl font-bold text-neutral-900 mb-4">{t(`${p}.relatedTitle`)}</h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
              <Link to="/materials/home-compostable" className="bg-white p-4 rounded-lg border hover:shadow-md transition">
                <h4 className="font-semibold text-neutral-800">{t(`${p}.relatedLink1Title`)}</h4>
                <p className="text-sm text-neutral-600 mt-1">{t(`${p}.relatedLink1Desc`)}</p>
              </Link>
              <Link to="/materials/industrial-compostable" className="bg-white p-4 rounded-lg border hover:shadow-md transition">
                <h4 className="font-semibold text-neutral-800">{t(`${p}.relatedLink2Title`)}</h4>
                <p className="text-sm text-neutral-600 mt-1">{t(`${p}.relatedLink2Desc`)}</p>
              </Link>
              <Link to="/materials/recyclable-mono-pe" className="bg-white p-4 rounded-lg border hover:shadow-md transition">
                <h4 className="font-semibold text-neutral-800">{t(`${p}.relatedLink3Title`)}</h4>
                <p className="text-sm text-neutral-600 mt-1">{t(`${p}.relatedLink3Desc`)}</p>
              </Link>
              <Link to="/topics/eco-friendly-food-packaging" className="bg-white p-4 rounded-lg border hover:shadow-md transition">
                <h4 className="font-semibold text-neutral-800">{t(`${p}.relatedLink4Title`)}</h4>
                <p className="text-sm text-neutral-600 mt-1">{t(`${p}.relatedLink4Desc`)}</p>
              </Link>
              <Link to="/company/certificates" className="bg-white p-4 rounded-lg border hover:shadow-md transition">
                <h4 className="font-semibold text-neutral-800">{t(`${p}.relatedLink5Title`)}</h4>
                <p className="text-sm text-neutral-600 mt-1">{t(`${p}.relatedLink5Desc`)}</p>
              </Link>
              <Link to="/support/faqs" className="bg-white p-4 rounded-lg border hover:shadow-md transition">
                <h4 className="font-semibold text-neutral-800">{t(`${p}.relatedLink6Title`)}</h4>
                <p className="text-sm text-neutral-600 mt-1">{t(`${p}.relatedLink6Desc`)}</p>
              </Link>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="mb-12 bg-white rounded-xl p-6 md:p-8">
            <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-8 text-center">
              {t(`${p}.faqTitle`)}
            </h2>
            <div className="space-y-4 max-w-3xl mx-auto">
              <details className="group bg-neutral-50 rounded-xl overflow-hidden">
                <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-neutral-100 transition">
                  <span className="font-semibold text-neutral-900 pr-4">{t(`${p}.faqQ1`)}</span>
                  <ChevronDown className="h-5 w-5 text-neutral-500 group-open:rotate-180 transition-transform flex-shrink-0" />
                </summary>
                <div className="px-6 pb-6 text-neutral-700">
                  {t(`${p}.faqA1`)}
                </div>
              </details>
              <details className="group bg-neutral-50 rounded-xl overflow-hidden">
                <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-neutral-100 transition">
                  <span className="font-semibold text-neutral-900 pr-4">{t(`${p}.faqQ2`)}</span>
                  <ChevronDown className="h-5 w-5 text-neutral-500 group-open:rotate-180 transition-transform flex-shrink-0" />
                </summary>
                <div className="px-6 pb-6 text-neutral-700">
                  {t(`${p}.faqA2`)}
                </div>
              </details>
              <details className="group bg-neutral-50 rounded-xl overflow-hidden">
                <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-neutral-100 transition">
                  <span className="font-semibold text-neutral-900 pr-4">{t(`${p}.faqQ3`)}</span>
                  <ChevronDown className="h-5 w-5 text-neutral-500 group-open:rotate-180 transition-transform flex-shrink-0" />
                </summary>
                <div className="px-6 pb-6 text-neutral-700">
                  {t(`${p}.faqA3`)}
                </div>
              </details>
            </div>
          </section>

          {/* CTA Section */}
          <section className="mb-8">
            <div className="relative rounded-xl overflow-hidden">
              <img 
                src={IMAGES.ctaBanner}
                alt={t(`${p}.ctaTitle`)}
                className="w-full h-64 md:h-80 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-green-900/90 to-green-800/70 flex items-center">
                <div className="p-6 md:p-10 max-w-2xl">
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                    {t(`${p}.ctaTitle`)}
                  </h3>
                  <p className="text-green-100 mb-6">
                    {t(`${p}.ctaDesc`)}
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <button
                      onClick={openCalendly}
                      className="flex items-center justify-center gap-2 bg-white text-green-800 px-6 py-3 rounded-lg font-semibold hover:bg-neutral-100 transition shadow-lg"
                    >
                      <Calendar className="h-5 w-5" />
                      {t(`${p}.ctaConsultationBtn`)}
                    </button>
                    <Link
                      to="/store?category=sample"
                      className="flex items-center justify-center gap-2 bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-500 transition"
                    >
                      <Package className="h-5 w-5" />
                      {t(`${p}.ctaSampleBtn`)}
                    </Link>
                    <Link
                      to="/store"
                      className="flex items-center justify-center gap-2 border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition"
                    >
                      {t(`${p}.ctaBrowseBtn`)}
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
