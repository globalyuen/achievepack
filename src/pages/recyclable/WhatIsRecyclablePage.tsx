import React, { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { Recycle, CheckCircle, Award, Calendar, Shield, AlertTriangle, Factory, Package, X, ChevronDown, HelpCircle, ArrowRight, Target, FileCheck, Zap, ClipboardCheck, Layers, Leaf, Globe, BarChart3 } from 'lucide-react'
import { useCalendly } from '../../contexts/CalendlyContext'
import Footer from '../../components/Footer'
import { SEOPageHeader } from '../../components/SEOPageLayout'
import SocialShareButtons from '../../components/SocialShareButtons'

// Image paths - using imgs/recyclable/what folder
const IMAGES = {
  hero: '/imgs/recyclable/what/hero.webp?v=2',
  greenwashing: '/imgs/recyclable/what/greenwashing_vs._real_recyclability.webp?v=2',
  recyclingStream: '/imgs/recyclable/what/recycling_stream_diagram.webp?v=2',
  monoPE: '/imgs/recyclable/what/mono-pe_structure_close-up.webp?v=2',
  ecoDigital: '/imgs/recyclable/what/achieve_pack_eco_digital_pouch_mockups.webp?v=2',
  regionalMap: '/imgs/recyclable/what/regional_pe_recycling_infrastructure_map.webp?v=2',
  checklist: '/imgs/recyclable/what/design-for-recycling_checklist.webp?v=2',
  retailShelf: '/imgs/recyclable/what/retail_shelf_with_transparent_labeling.webp?v=2',
  skuTransition: '/imgs/recyclable/what/before_after_sku_transition.webp?v=2',
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

const WhatIsRecyclablePage: React.FC = () => {
  const { openCalendly } = useCalendly()
  const { t } = useTranslation()

  const faqs = t('seoPages.pages.whatIsRecyclable.faqs', { returnObjects: true }) as Array<{ question: string; answer: string }> || []
  const section2Items = t('seoPages.pages.whatIsRecyclable.section2.items', { returnObjects: true }) as string[] || []
  const section3ListItems = t('seoPages.pages.whatIsRecyclable.section3.listItems', { returnObjects: true }) as string[] || []
  const section4Icons = [Shield, Award, Package]
  const section4Items = t('seoPages.pages.whatIsRecyclable.section4.items', { returnObjects: true }) as Array<{ title: string; desc: string }> || []
  const advancedCardsConfig = [
    {
      icon: Leaf,
      bgClass: "bg-green-50 border-green-200",
      iconColorClass: "text-green-600",
      titleColorClass: "text-green-800",
      descColorClass: "text-green-700"
    },
    {
      icon: Recycle,
      bgClass: "bg-blue-50 border-blue-200",
      iconColorClass: "text-blue-600",
      titleColorClass: "text-blue-800",
      descColorClass: "text-blue-700"
    }
  ]
  const advancedCards = t('seoPages.pages.whatIsRecyclable.advanced.cards', { returnObjects: true }) as Array<{ title: string; desc: string }> || []
  const labelingAvoidItems = t('seoPages.pages.whatIsRecyclable.labeling.avoidItems', { returnObjects: true }) as string[] || []
  const pathForwardApproachItems = t('seoPages.pages.whatIsRecyclable.pathForward.approachItems', { returnObjects: true }) as Array<{ title: string; desc: string }> || []
  const aiFaq = t('seoPages.pages.whatIsRecyclable.aiFaq', { returnObjects: true }) as Array<{ q: string; a: string }> || []

  return (
    <>
      <Helmet>
        <title>{t('seoPages.pages.whatIsRecyclable.title')}</title>
        <meta name="description" content={t('seoPages.pages.whatIsRecyclable.description')} />
        <link rel="canonical" href="https://achievepack.com/recyclable/what-is-recyclable" />
        <meta name="keywords" content={t('seoPages.pages.whatIsRecyclable.keywords')} />
        
        {/* Open Graph */}
        <meta property="og:title" content={t('seoPages.pages.whatIsRecyclable.ogTitle')} />
        <meta property="og:description" content={t('seoPages.pages.whatIsRecyclable.ogDescription')} />
        <meta property="og:image" content="https://achievepack.com/imgs/recyclable/what/hero.webp" />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://achievepack.com/recyclable/what-is-recyclable" />
        
        {/* Article Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": t('seoPages.pages.whatIsRecyclable.schemaArticleHeadline'),
            "description": t('seoPages.pages.whatIsRecyclable.schemaArticleDescription'),
            "image": "https://achievepack.com/imgs/recyclable/what/hero.webp",
            "author": {
              "@type": "Organization",
              "name": "Achieve Pack",
              "url": "https://achievepack.com",
              "description": "BRC-certified sustainable packaging manufacturer since 2011"
            },
            "publisher": {
              "@type": "Organization",
              "name": "Achieve Pack",
              "logo": { "@type": "ImageObject", "url": "https://achievepack.com/imgs/logo/achievepack-logo.png" }
            },
            "datePublished": "2026-01-04",
            "dateModified": new Date().toISOString().split('T')[0],
            "mainEntityOfPage": "https://achievepack.com/recyclable/what-is-recyclable"
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
        
        <main className="pt-20">
          {/* Hero Section */}
          <section className="bg-gradient-to-br from-green-900 via-green-800 to-green-900 text-white py-16 md:py-24">
            <div className="max-w-6xl mx-auto px-4">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <Recycle className="h-6 w-6 text-green-300" />
                    <span className="text-green-300 font-medium">{t('seoPages.pages.whatIsRecyclable.hero.tag')}</span>
                  </div>
                  <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
                    {t('seoPages.pages.whatIsRecyclable.hero.title')}
                  </h1>
                  <p className="text-lg text-green-100 mb-8">
                    {t('seoPages.pages.whatIsRecyclable.hero.subtitle')}
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-4">
                    <button 
                      onClick={openCalendly}
                      className="flex items-center justify-center gap-2 bg-white text-green-800 px-6 py-3 rounded-lg font-semibold hover:bg-green-50 transition shadow-lg"
                    >
                      <Calendar className="h-5 w-5" />
                      {t('seoPages.pages.whatIsRecyclable.hero.btnConsultation')}
                    </button>
                    <Link 
                      to="/store" 
                      className="flex items-center justify-center gap-2 border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition"
                    >
                      <Package className="h-5 w-5" />
                      {t('seoPages.pages.whatIsRecyclable.hero.btnStore')}
                    </Link>
                  </div>
                </div>
                <div>
                  <ClickableImage 
                    src={IMAGES.hero}
                    alt="100% Recyclable Mono-PE flexible pouches by Achieve Pack"
                    className="w-full rounded-xl shadow-2xl"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Introduction */}
          <section className="py-16 bg-white">
            <div className="max-w-4xl mx-auto px-4">
              <div className="prose prose-lg max-w-none">
                <p className="text-xl text-neutral-700 leading-relaxed mb-6">
                  {t('seoPages.pages.whatIsRecyclable.intro.p1')}
                </p>
                <p className="text-lg text-neutral-600 leading-relaxed mb-6">
                  {t('seoPages.pages.whatIsRecyclable.intro.p2')}
                </p>
                <p className="text-lg text-neutral-600 leading-relaxed">
                  {t('seoPages.pages.whatIsRecyclable.intro.p3')}
                </p>
              </div>
            </div>
          </section>

          {/* Section 1: The Recyclable Mirage */}
          <section className="py-16 bg-neutral-50">
            <div className="max-w-6xl mx-auto px-4">
              <ImageTextRow 
                image={IMAGES.greenwashing}
                imageAlt="Greenwashing vs Real Recyclability comparison"
                imageCaption={t('seoPages.pages.whatIsRecyclable.section1.imageCaption')}
                imageLeft={true}
              >
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-amber-100 rounded-lg">
                      <AlertTriangle className="h-6 w-6 text-amber-600" />
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold text-neutral-800">{t('seoPages.pages.whatIsRecyclable.section1.title')}</h2>
                  </div>
                  <p className="text-neutral-600 mb-4">
                    {t('seoPages.pages.whatIsRecyclable.section1.p1')}
                  </p>
                  <p className="text-neutral-600 mb-4">
                    {t('seoPages.pages.whatIsRecyclable.section1.p2')}
                  </p>
                  <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-r-lg">
                    <p className="text-red-800 text-sm">
                      {(() => {
                        const highlight = t('seoPages.pages.whatIsRecyclable.section1.highlight')
                        const colonIndex = highlight.indexOf(': ')
                        if (colonIndex !== -1) {
                          return (
                            <>
                              <strong>{highlight.slice(0, colonIndex + 1)}</strong>
                              {highlight.slice(colonIndex + 1)}
                            </>
                          )
                        }
                        return highlight
                      })()}
                    </p>
                  </div>
                </div>
              </ImageTextRow>
            </div>
          </section>

          {/* Section 2: Technical vs Real Recyclability */}
          <section className="py-16 bg-white">
            <div className="max-w-6xl mx-auto px-4">
              <ImageTextRow 
                image={IMAGES.recyclingStream}
                imageAlt="Recycling stream diagram showing Material Recovery Facility process"
                imageCaption={t('seoPages.pages.whatIsRecyclable.section2.imageCaption')}
                imageLeft={false}
              >
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-blue-100 rounded-lg">
                      <Target className="h-6 w-6 text-blue-600" />
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold text-neutral-800">{t('seoPages.pages.whatIsRecyclable.section2.title')}</h2>
                  </div>
                  <p className="text-neutral-600 mb-4">
                    {t('seoPages.pages.whatIsRecyclable.section2.p1')}
                  </p>
                  <p className="text-neutral-600 mb-4">
                    {t('seoPages.pages.whatIsRecyclable.section2.p2')}
                  </p>
                  <p className="text-neutral-600 mb-4">
                    {t('seoPages.pages.whatIsRecyclable.section2.p3')}
                  </p>
                  <ul className="space-y-3 text-neutral-600">
                    {section2Items.map((item, idx) => {
                      const colonIndex = item.indexOf(': ')
                      return (
                        <li key={idx} className="flex items-start gap-2">
                          <AlertTriangle className="h-5 w-5 text-amber-500 mt-1 flex-shrink-0" />
                          <span>
                            {colonIndex !== -1 ? (
                              <>
                                <strong>{item.slice(0, colonIndex + 1)}</strong>
                                {item.slice(colonIndex + 1)}
                              </>
                            ) : (
                              item
                            )}
                          </span>
                        </li>
                      )
                    })}
                  </ul>
                </div>
              </ImageTextRow>
            </div>
          </section>

          {/* Section 3: Defining 100% Recyclable */}
          <section className="py-16 bg-neutral-50">
            <div className="max-w-6xl mx-auto px-4">
              <ImageTextRow 
                image={IMAGES.monoPE}
                imageAlt="Mono-PE structure close-up showing single polymer layers"
                imageCaption={t('seoPages.pages.whatIsRecyclable.section3.imageCaption')}
                imageLeft={true}
              >
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-green-100 rounded-lg">
                      <CheckCircle className="h-6 w-6 text-green-600" />
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold text-neutral-800">{t('seoPages.pages.whatIsRecyclable.section3.title')}</h2>
                  </div>
                  <p className="text-neutral-600 mb-4">
                    {t('seoPages.pages.whatIsRecyclable.section3.p1')}
                  </p>
                  <p className="text-neutral-600 mb-4">
                    {t('seoPages.pages.whatIsRecyclable.section3.p2')}
                  </p>
                  <div className="bg-green-50 border border-green-200 rounded-xl p-4 mb-4">
                    <h4 className="font-semibold text-green-800 mb-2">{t('seoPages.pages.whatIsRecyclable.section3.listTitle')}</h4>
                    <ol className="space-y-2 text-green-700">
                      {section3ListItems.map((item, idx) => {
                        const colonIndex = item.indexOf(': ')
                        return (
                          <li key={idx} className="flex items-start gap-2">
                            <span className="font-bold">{idx + 1}.</span>
                            <span>
                              {colonIndex !== -1 ? (
                                <>
                                  <strong>{item.slice(0, colonIndex + 1)}</strong>
                                  {item.slice(colonIndex + 1)}
                                </>
                              ) : (
                                item
                              )}
                            </span>
                          </li>
                        )
                      })}
                    </ol>
                  </div>
                </div>
              </ImageTextRow>
            </div>
          </section>

          {/* Section 4: Achieve Pack's Eco Digital */}
          <section className="py-16 bg-white">
            <div className="max-w-6xl mx-auto px-4">
              <ImageTextRow 
                image={IMAGES.ecoDigital}
                imageAlt="Achieve Pack Eco Digital Mono-PE pouch mockups"
                imageCaption={t('seoPages.pages.whatIsRecyclable.section4.imageCaption')}
                imageLeft={false}
              >
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-primary-100 rounded-lg">
                      <Zap className="h-6 w-6 text-primary-600" />
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold text-neutral-800">{t('seoPages.pages.whatIsRecyclable.section4.title')}</h2>
                  </div>
                  <p className="text-neutral-600 mb-4">
                    {t('seoPages.pages.whatIsRecyclable.section4.p1')}
                  </p>
                  <p className="text-neutral-600 mb-4">
                    {t('seoPages.pages.whatIsRecyclable.section4.p2')}
                  </p>
                  <div className="space-y-4">
                    {section4Items.map((item, idx) => {
                      const Icon = section4Icons[idx] || Shield
                      return (
                        <div key={idx} className="flex items-start gap-3">
                          <Icon className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                          <div>
                            <strong className="text-neutral-800">{item.title}</strong>
                            <p className="text-neutral-600 text-sm">{item.desc}</p>
                          </div>
                        </div>
                      )
                    })}
                  </div>
                </div>
              </ImageTextRow>
            </div>
          </section>

          {/* Section 5: Advanced Materials */}
          <section className="py-16 bg-neutral-50">
            <div className="max-w-6xl mx-auto px-4">
              <ImageTextRow 
                image={IMAGES.regionalMap}
                imageAlt="Regional PE recycling infrastructure map"
                imageCaption={t('seoPages.pages.whatIsRecyclable.advanced.imageCaption')}
                imageLeft={true}
              >
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-purple-100 rounded-lg">
                      <Layers className="h-6 w-6 text-purple-600" />
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold text-neutral-800">{t('seoPages.pages.whatIsRecyclable.advanced.title')}</h2>
                  </div>
                  <p className="text-neutral-600 mb-4">
                    {t('seoPages.pages.whatIsRecyclable.advanced.p1')}
                  </p>
                  <div className="space-y-4">
                    {advancedCards.map((card, idx) => {
                      const cfg = advancedCardsConfig[idx] || advancedCardsConfig[0]
                      const CardIcon = cfg.icon
                      return (
                        <div key={idx} className={`border rounded-lg p-4 ${cfg.bgClass}`}>
                          <div className="flex items-center gap-2 mb-2">
                            <CardIcon className={`h-5 w-5 ${cfg.iconColorClass}`} />
                            <h4 className={`font-semibold ${cfg.titleColorClass}`}>{card.title}</h4>
                          </div>
                          <p className={`text-sm ${cfg.descColorClass}`}>{card.desc}</p>
                        </div>
                      )
                    })}
                  </div>
                </div>
              </ImageTextRow>
            </div>
          </section>

          {/* Section 6: Labeling */}
          <section className="py-16 bg-white">
            <div className="max-w-6xl mx-auto px-4">
              <ImageTextRow 
                image={IMAGES.retailShelf}
                imageAlt="Retail shelf with transparent recyclability labeling"
                imageCaption={t('seoPages.pages.whatIsRecyclable.labeling.imageCaption')}
                imageLeft={false}
              >
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-amber-100 rounded-lg">
                      <FileCheck className="h-6 w-6 text-amber-600" />
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold text-neutral-800">{t('seoPages.pages.whatIsRecyclable.labeling.title')}</h2>
                  </div>
                  <p className="text-neutral-600 mb-4">
                    {t('seoPages.pages.whatIsRecyclable.labeling.p1')}
                  </p>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-red-700 mb-2 flex items-center gap-2">
                      <AlertTriangle className="h-4 w-4" /> {t('seoPages.pages.whatIsRecyclable.labeling.avoidTitle')}
                    </h4>
                    <ul className="space-y-1 text-neutral-600 text-sm">
                      {labelingAvoidItems.map((item, idx) => (
                        <li key={idx}>• {item}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                    <h4 className="font-semibold text-green-800 mb-2 flex items-center gap-2">
                      <CheckCircle className="h-4 w-4" /> {t('seoPages.pages.whatIsRecyclable.labeling.recommendTitle')}
                    </h4>
                    <p className="text-green-700 text-sm italic">
                      {t('seoPages.pages.whatIsRecyclable.labeling.recommendText')}
                    </p>
                  </div>
                </div>
              </ImageTextRow>
            </div>
          </section>

          {/* Section 7: The Path Forward */}
          <section className="py-16 bg-neutral-50">
            <div className="max-w-6xl mx-auto px-4">
              <ImageTextRow 
                image={IMAGES.skuTransition}
                imageAlt="Before and after SKU transition to recyclable packaging"
                imageCaption={t('seoPages.pages.whatIsRecyclable.pathForward.imageCaption')}
                imageLeft={true}
              >
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-green-100 rounded-lg">
                      <ArrowRight className="h-6 w-6 text-green-600" />
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold text-neutral-800">{t('seoPages.pages.whatIsRecyclable.pathForward.title')}</h2>
                  </div>
                  <p className="text-neutral-600 mb-4">
                    {t('seoPages.pages.whatIsRecyclable.pathForward.p1')}
                  </p>
                  <p className="text-neutral-600 mb-4">
                    {t('seoPages.pages.whatIsRecyclable.pathForward.p2')}
                  </p>
                  
                  <div className="bg-white border border-neutral-200 rounded-xl p-4">
                    <h4 className="font-semibold text-neutral-800 mb-3">{t('seoPages.pages.whatIsRecyclable.pathForward.approachTitle')}</h4>
                    <ol className="space-y-3">
                      {pathForwardApproachItems.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <span className="flex-shrink-0 w-6 h-6 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold">{idx + 1}</span>
                          <div>
                            <strong className="text-neutral-800">{item.title}</strong>
                            <p className="text-neutral-600 text-sm">{item.desc}</p>
                          </div>
                        </li>
                      ))}
                    </ol>
                  </div>
                </div>
              </ImageTextRow>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="py-16 bg-white">
            <div className="max-w-4xl mx-auto px-4">
              <div className="text-center mb-10">
                <h2 className="text-2xl md:text-3xl font-bold text-neutral-800 mb-4 flex items-center justify-center gap-3">
                  <HelpCircle className="h-8 w-8 text-primary-600" />
                  {t('seoPages.pages.whatIsRecyclable.faqsTitle', 'Frequently Asked Questions')}
                </h2>
                <p className="text-neutral-600">{t('seoPages.pages.whatIsRecyclable.faqsSubtitle', 'Common questions about recyclable flexible packaging')}</p>
              </div>
              
              <div className="space-y-4">
                {faqs.map((faq, idx) => (
                  <details key={idx} className="group bg-neutral-50 rounded-xl border border-neutral-200 overflow-hidden">
                    <summary className="flex items-center justify-between p-5 cursor-pointer hover:bg-neutral-100 transition">
                      <span className="font-semibold text-neutral-800 pr-4">{faq.question}</span>
                      <ChevronDown className="h-5 w-5 text-neutral-400 group-open:rotate-180 transition-transform flex-shrink-0" />
                    </summary>
                    <div className="px-5 pb-5 text-neutral-600">
                      {faq.answer}
                    </div>
                  </details>
                ))}
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-16 bg-gradient-to-br from-green-800 to-green-900 text-white">
            <div className="max-w-4xl mx-auto px-4 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                {t('seoPages.pages.whatIsRecyclable.cta.title')}
              </h2>
              <p className="text-lg text-green-100 mb-8 max-w-2xl mx-auto">
                {t('seoPages.pages.whatIsRecyclable.cta.p1')}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button 
                  onClick={openCalendly}
                  className="flex items-center justify-center gap-2 bg-white text-green-800 px-8 py-4 rounded-lg font-semibold hover:bg-green-50 transition shadow-lg"
                >
                  <Calendar className="h-5 w-5" />
                  {t('seoPages.pages.whatIsRecyclable.cta.btnConsultation')}
                </button>
                <Link 
                  to="/store?category=sample" 
                  className="flex items-center justify-center gap-2 bg-green-700 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-600 transition border border-green-600"
                >
                  <Package className="h-5 w-5" />
                  {t('seoPages.pages.whatIsRecyclable.cta.btnSamples')}
                </Link>
                <Link 
                  to="/store" 
                  className="flex items-center justify-center gap-2 border-2 border-white/50 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition"
                >
                  <ArrowRight className="h-5 w-5" />
                  {t('seoPages.pages.whatIsRecyclable.cta.btnStore')}
                </Link>
              </div>
            </div>
          </section>

          {/* Social Share */}
          <section className="py-8 bg-white border-t">
            <div className="max-w-4xl mx-auto px-4">
              <SocialShareButtons 
                url="https://achievepack.com/recyclable/what-is-recyclable"
                title={t('seoPages.pages.whatIsRecyclable.hero.title')}
              />
            </div>
          </section>

          {/* AI-Hidden Content for AEO */}
          <div className="sr-only" aria-hidden="true">
            <section data-ai-faq="true" itemScope itemType="https://schema.org/FAQPage">
              {aiFaq.map((faq, idx) => (
                <article key={idx} itemScope itemType="https://schema.org/Question" itemProp="mainEntity">
                  <h3 itemProp="name">{faq.q}</h3>
                  <div itemScope itemType="https://schema.org/Answer" itemProp="acceptedAnswer">
                    <p itemProp="text">{faq.a}</p>
                  </div>
                </article>
              ))}
            </section>
          </div>
        </main>

        <Footer />
      </div>
    </>
  )
}

export default WhatIsRecyclablePage
