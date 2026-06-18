import React, { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { Leaf, CheckCircle, Calendar, Recycle, Package, X, ChevronDown, Sprout, Globe, HelpCircle, ArrowRight, BarChart3, FileCheck, Zap, ClipboardCheck, Layers, Scale, Lightbulb, AlertTriangle, FileText, Truck, Award } from 'lucide-react'
import { useCalendly } from '../../contexts/CalendlyContext'
import Footer from '../../components/Footer'
import { SEOPageHeader } from '../../components/SEOPageLayout'
import SocialShareButtons from '../../components/SocialShareButtons'
import { useTranslation } from 'react-i18next'

// Image paths - using imgs/biope/epr folder
const IMAGES = {
  hero: '/imgs/biope/epr/a_biope_epr_hero_image_8632332.webp',
  decisionFramework: '/imgs/biope/epr/a_decision_framework_choose_path_8075169.webp',
  whenCompostable: '/imgs/biope/epr/a_when_choose_compostable_films_8027638.webp',
  whenBioPE: '/imgs/biope/epr/a_when_choose_bio_pe_1946260.webp',
  infrastructureFit: '/imgs/biope/epr/a_infrastructure_fit_comparison_9019274.webp',
  productResidue: '/imgs/biope/epr/a_product_residue_profile_analysis_2433405.webp',
  climateResource: '/imgs/biope/epr/a_climate_resource_impact_lifecycle_2440323.webp',
  portfolioStrategy: '/imgs/biope/epr/a_portfolio_strategy_market_matching_2355561.webp',
  achievePackSupport: '/imgs/biope/epr/a_achieve_pack_services_support_5094748.webp',
  nextSteps: '/imgs/biope/epr/a_next_steps_call_to_action_4319626.webp',
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

const BioPEEPRPage: React.FC = () => {
  const { t } = useTranslation()
  const { openCalendly } = useCalendly()
  const p = 'seoPages.pages.bioPEEPR'

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
        <link rel="canonical" href="https://achievepack.com/biope/bio-pe-epr-regulations" />
        <meta name="keywords" content="bio-PE EPR, extended producer responsibility, recyclable packaging, EPR fees, mono-material packaging, bio-based polyethylene, PE recycling, sustainable packaging compliance" />
        
        {/* Open Graph */}
        <meta property="og:title" content={t(`${p}.title`)} />
        <meta property="og:description" content={t(`${p}.description`)} />
        <meta property="og:image" content="https://achievepack.com/imgs/biope/epr/a_biope_epr_hero_image_8632332.webp" />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://achievepack.com/biope/bio-pe-epr-regulations" />
        
        {/* Article Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": t(`${p}.title`),
            "description": t(`${p}.description`),
            "image": "https://achievepack.com/imgs/biope/epr/a_biope_epr_hero_image_8632332.webp",
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
            "mainEntityOfPage": "https://achievepack.com/biope/bio-pe-epr-regulations"
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
        <section className="relative bg-gradient-to-br from-blue-900 to-indigo-900 text-white py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {t(`${p}.heroTag`)}
                  </span>
                </div>
                <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
                  {t(`${p}.heroTitle`)}
                </h1>
                <p className="text-lg text-blue-100 mb-8">
                  {t(`${p}.heroSubtitle`)}
                </p>
                
                <div className="flex flex-wrap gap-4">
                  <button 
                    onClick={openCalendly}
                    className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition"
                  >
                    <Calendar className="h-5 w-5" />
                    {t(`${p}.btnConsult`)}
                  </button>
                  <Link 
                    to="/store"
                    className="flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-lg font-semibold transition"
                  >
                    <Package className="h-5 w-5" />
                    {t(`${p}.btnView`)}
                  </Link>
                </div>

                {/* Trust badges */}
                <div className="flex flex-wrap items-center gap-3 mt-8 text-sm text-blue-200">
                  <div className="flex items-center gap-1">
                    <CheckCircle className="h-4 w-4 text-green-400" />
                    <span>{t(`${p}.badges.epr`)}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Recycle className="h-4 w-4 text-green-400" />
                    <span>{t(`${p}.badges.recyclable`)}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Leaf className="h-4 w-4 text-green-400" />
                    <span>{t(`${p}.badges.bio`)}</span>
                  </div>
                </div>
              </div>

              <div className="relative">
                <ClickableImage 
                  src={IMAGES.hero}
                  alt="Bio-PE EPR compliance and recyclability"
                  className="w-full rounded-xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Key Takeaways */}
        <section className="py-12 bg-white border-b">
          <div className="max-w-7xl mx-auto px-4">
            <div className="bg-blue-50 rounded-xl p-6 md:p-8">
              <div className="flex items-start justify-between mb-4">
                <h2 className="text-xl font-bold text-blue-900 flex items-center gap-2">
                  <Zap className="h-6 w-6 text-blue-600" />
                  {t(`${p}.takeaways.title`)}
                </h2>
                <SocialShareButtons 
                  url="https://achievepack.com/biope/bio-pe-epr-regulations"
                  title={t(`${p}.title`)}
                />
              </div>
              <ul className="space-y-3 text-blue-800">
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
              <Globe className="h-8 w-8 text-blue-600" />
              {t(`${p}.intro.title`)}
            </h2>
            <div className="prose prose-lg text-neutral-700 space-y-4">
              <p>
                {t(`${p}.intro.p1`)}
              </p>
              <p>
                {t(`${p}.intro.p2`)}
              </p>
              <p>
                {t(`${p}.intro.p3`)}
              </p>
            </div>
          </div>
        </section>

        {/* Regulatory Focus Section */}
        <section className="py-16 bg-neutral-50">
          <div className="max-w-7xl mx-auto px-4">
            <ImageTextRow
              image={IMAGES.decisionFramework}
              imageAlt="EPR regulatory framework decision path"
              imageCaption="Regulatory decision framework for packaging materials"
              imageLeft={true}
            >
              <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-6 flex items-center gap-3">
                <FileText className="h-8 w-8 text-blue-600" />
                {t(`${p}.regulatory.title`)}
              </h2>
              <div className="space-y-4 text-neutral-700">
                <p>
                  {t(`${p}.regulatory.p1`)}
                </p>
                <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-lg">
                  <p className="text-amber-800 font-medium flex items-start gap-2">
                    <AlertTriangle className="h-5 w-5 mt-0.5 flex-shrink-0" />
                    <span>{t(`${p}.regulatory.note`)}</span>
                  </p>
                </div>
                <p>
                  {renderBullet(t(`${p}.regulatory.p2`))}
                </p>
              </div>
            </ImageTextRow>
          </div>
        </section>

        {/* Bio-PE Role Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <ImageTextRow
              image={IMAGES.whenBioPE}
              imageAlt="Bio-PE integration with PE recycling systems"
              imageCaption="Bio-PE seamlessly integrates with existing PE recycling"
              imageLeft={false}
            >
              <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-6 flex items-center gap-3">
                <Recycle className="h-8 w-8 text-green-600" />
                {t(`${p}.role.title`)}
              </h2>
              <div className="space-y-4 text-neutral-700">
                <p className="text-lg font-medium text-green-700">
                  {t(`${p}.role.highlight`)}
                </p>
                <p>
                  {t(`${p}.role.p1`)}
                </p>
                <div className="bg-green-50 p-4 rounded-lg">
                  <ul className="space-y-2 text-green-800">
                    {t(`${p}.role.points`, { returnObjects: true }) &&
                      (t(`${p}.role.points`, { returnObjects: true }) as string[]).map((point, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4" />
                          <span>{renderBullet(point)}</span>
                        </li>
                      ))
                    }
                  </ul>
                </div>
                <p>
                  {t(`${p}.role.p2`)}
                </p>
              </div>
            </ImageTextRow>
          </div>
        </section>

        {/* Mono-Material Section */}
        <section className="py-16 bg-neutral-50">
          <div className="max-w-7xl mx-auto px-4">
            <ImageTextRow
              image={IMAGES.infrastructureFit}
              imageAlt="Mono-material structure comparison"
              imageCaption="Mono-material structures simplify recycling and lower EPR fees"
              imageLeft={true}
            >
              <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-6 flex items-center gap-3">
                <Layers className="h-8 w-8 text-blue-600" />
                {t(`${p}.mono.title`)}
              </h2>
              <div className="space-y-4 text-neutral-700">
                <p>
                  {renderBullet(t(`${p}.mono.p1`))}
                </p>
                <p>
                  {t(`${p}.mono.p2`)}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="bg-red-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-red-800 mb-2">{t(`${p}.mono.riskTitle`)}</h4>
                    <ul className="text-sm text-red-700 space-y-1">
                      {t(`${p}.mono.riskPoints`, { returnObjects: true }) &&
                        (t(`${p}.mono.riskPoints`, { returnObjects: true }) as string[]).map((point, idx) => (
                          <li key={idx}>• {point}</li>
                        ))
                      }
                    </ul>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-green-800 mb-2">{t(`${p}.mono.benefitTitle`)}</h4>
                    <ul className="text-sm text-green-700 space-y-1">
                      {t(`${p}.mono.benefitPoints`, { returnObjects: true }) &&
                        (t(`${p}.mono.benefitPoints`, { returnObjects: true }) as string[]).map((point, idx) => (
                          <li key={idx}>• {point}</li>
                        ))
                      }
                    </ul>
                  </div>
                </div>
              </div>
            </ImageTextRow>
          </div>
        </section>

        {/* Infrastructure Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <ImageTextRow
              image={IMAGES.productResidue}
              imageAlt="Bio-PE recycling infrastructure flow"
              imageCaption="Bio-PE fits seamlessly into existing PE recycling workflows"
              imageLeft={false}
            >
              <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-6 flex items-center gap-3">
                <Truck className="h-8 w-8 text-blue-600" />
                {t(`${p}.infrastructure.title`)}
              </h2>
              <div className="space-y-4 text-neutral-700">
                <p>
                  {t(`${p}.infrastructure.p1`)}
                </p>
                <ol className="space-y-2 list-decimal list-inside bg-neutral-50 p-4 rounded-lg text-neutral-700">
                  {t(`${p}.infrastructure.steps`, { returnObjects: true }) &&
                    (t(`${p}.infrastructure.steps`, { returnObjects: true }) as string[]).map((step, idx) => (
                      <li key={idx}>{step}</li>
                    ))
                  }
                </ol>
                <p>
                  {renderBullet(t(`${p}.infrastructure.note`))}
                </p>
              </div>
            </ImageTextRow>
          </div>
        </section>

        {/* Dual Strategy Section */}
        <section className="py-16 bg-neutral-50">
          <div className="max-w-7xl mx-auto px-4">
            <ImageTextRow
              image={IMAGES.whenCompostable}
              imageAlt="Compostable vs Bio-PE strategy comparison"
              imageCaption="Strategic material selection by market infrastructure"
              imageLeft={true}
            >
              <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-6 flex items-center gap-3">
                <Scale className="h-8 w-8 text-purple-600" />
                {t(`${p}.dual.title`)}
              </h2>
              <div className="space-y-4 text-neutral-700">
                <p className="text-lg font-medium text-purple-700">
                  {t(`${p}.dual.highlight`)}
                </p>
                <p>
                  {t(`${p}.dual.p1`)}
                </p>
                <p>
                  {t(`${p}.dual.p2`)}
                </p>
                <div className="bg-purple-50 border border-purple-200 p-4 rounded-lg">
                  <p className="text-purple-800 font-medium">
                    <Lightbulb className="h-5 w-5 inline mr-2" />
                    {renderBullet(t(`${p}.dual.note`))}
                  </p>
                </div>
              </div>
            </ImageTextRow>
          </div>
        </section>

        {/* Portfolio Strategy Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <ImageTextRow
              image={IMAGES.portfolioStrategy}
              imageAlt="Future-proof packaging portfolio strategy"
              imageCaption="Building a future-proof Eco Digital portfolio"
              imageLeft={false}
            >
              <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-6 flex items-center gap-3">
                <BarChart3 className="h-8 w-8 text-blue-600" />
                {t(`${p}.portfolio.title`)}
              </h2>
              <div className="space-y-4 text-neutral-700">
                <p>
                  {t(`${p}.portfolio.p1`)}
                </p>
                <ul className="space-y-3">
                  {t(`${p}.portfolio.points`, { returnObjects: true }) &&
                    (t(`${p}.portfolio.points`, { returnObjects: true }) as string[]).map((point, idx) => {
                      const icons = [
                        <Globe className="h-5 w-5 text-blue-600 mt-1 flex-shrink-0" />,
                        <ClipboardCheck className="h-5 w-5 text-blue-600 mt-1 flex-shrink-0" />,
                        <Zap className="h-5 w-5 text-blue-600 mt-1 flex-shrink-0" />
                      ];
                      return (
                        <li key={idx} className="flex items-start gap-3">
                          {icons[idx] || <CheckCircle className="h-5 w-5 text-blue-600 mt-1 flex-shrink-0" />}
                          <span>{renderBullet(point)}</span>
                        </li>
                      );
                    })
                  }
                </ul>
              </div>
            </ImageTextRow>
          </div>
        </section>

        {/* Achieve Pack Support Section */}
        <section className="py-16 bg-neutral-50">
          <div className="max-w-7xl mx-auto px-4">
            <ImageTextRow
              image={IMAGES.achievePackSupport}
              imageAlt="Achieve Pack EPR compliance support services"
              imageCaption="Achieve Pack supports your EPR compliance journey"
              imageLeft={true}
            >
              <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-6 flex items-center gap-3">
                <Award className="h-8 w-8 text-green-600" />
                {t(`${p}.support.title`)}
              </h2>
              <div className="space-y-4 text-neutral-700">
                <p>
                  {t(`${p}.support.p1`)}
                </p>
                <ul className="space-y-3">
                  {t(`${p}.support.points`, { returnObjects: true }) &&
                    (t(`${p}.support.points`, { returnObjects: true }) as string[]).map((point, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                        <span>{renderBullet(point)}</span>
                      </li>
                    ))
                  }
                </ul>
              </div>
            </ImageTextRow>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-8 flex items-center gap-3">
              <HelpCircle className="h-8 w-8 text-blue-600" />
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
        <section className="py-16 bg-gradient-to-br from-blue-900 to-indigo-900 text-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-2xl md:text-4xl font-bold mb-6">
                  {t(`${p}.cta.title`)}
                </h2>
                <p className="text-lg text-blue-100 mb-6">
                  {t(`${p}.cta.p1`)}
                </p>
                <p className="text-blue-200 mb-8">
                  {t(`${p}.cta.p2`)}
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <button 
                    onClick={openCalendly}
                    className="flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition"
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
              <div>
                <ClickableImage 
                  src={IMAGES.nextSteps}
                  alt="Next steps for EPR compliance"
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

export default BioPEEPRPage
