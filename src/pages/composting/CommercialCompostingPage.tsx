import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { Leaf, CheckCircle, Award, Calendar, Shield, Recycle, Factory, Package, X, ChevronRight, Mail, Phone, Sprout, Globe, Building2, Truck, Settings, Wind, Flame, Clock, Target, Layers, RotateCcw, Users, ChevronDown } from 'lucide-react'
import { useCalendly } from '../../contexts/CalendlyContext'
import Footer from '../../components/Footer'
import { SEOPageHeader } from '../../components/SEOPageLayout'

// Image paths - using imgs/composting/commercial folder
const IMAGES = {
  hero: '/imgs/composting/commercial/a_commercial_composting_methods_hero_8074833.webp',
  heroLearn: '/imgs/composting/commercial/hero.webp',
  collection: '/imgs/composting/commercial/a_compostable_packaging_collection_3568459.webp',
  windrow: '/imgs/composting/commercial/a_windrow_composting_facility_0882621.webp',
  aeratedPile: '/imgs/composting/commercial/a_aerated_static_pile_8189931.webp',
  inVessel: '/imgs/composting/commercial/a_in_vessel_composting_drum_2386955.webp',
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
    <div className={`grid md:grid-cols-2 gap-8 items-center ${imageLeft ? '' : 'md:flex-row-reverse'}`}>
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

const CommercialCompostingPage: React.FC = () => {
  const { t } = useTranslation()

  const { openCalendly } = useCalendly()

  return (
    <>
      <Helmet>
        <title>{t('seoPages.pages.commercialComposting.metaTitle')}</title>
        <meta name="description" content={t('seoPages.pages.commercialComposting.metaDescription')} />
        <link rel="canonical" href="https://achievepack.com/composting/commercial-composting" />
        <meta name="keywords" content={t('seoPages.pages.commercialComposting.metaKeywords')} />
        
        {/* Open Graph */}
        <meta property="og:title" content="How Commercial Composting Works – And What It Means for Compostable Packaging" />
        <meta property="og:description" content="A practical guide to windrow, aerated static pile and in-vessel composting from Achievepack® compostable packaging experts." />
        <meta property="og:image" content="https://achievepack.com/imgs/composting/commercial/a_commercial_composting_methods_hero_8074833.webp" />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://achievepack.com/composting/commercial-composting" />
        
        {/* Article Schema with E-E-A-T signals */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "How Commercial Composting Works – And What It Means for Compostable Packaging",
            "description": "A practical guide to windrow, aerated static pile and in-vessel composting from Achievepack® compostable packaging experts.",
            "image": "https://achievepack.com/imgs/composting/commercial/a_commercial_composting_methods_hero_8074833.webp",
            "author": {
              "@type": "Organization",
              "name": "Achieve Pack",
              "url": "https://achievepack.com",
              "description": "BRC-certified sustainable packaging manufacturer specializing in EN 13432 and ASTM D6400 certified compostable solutions since 2015"
            },
            "publisher": {
              "@type": "Organization",
              "name": "Achieve Pack",
              "logo": {
                "@type": "ImageObject",
                "url": "https://achievepack.com/imgs/logo/achievepack-logo.png"
              }
            },
            "datePublished": "2026-01-03",
            "dateModified": new Date().toISOString().split('T')[0],
            "mainEntityOfPage": "https://achievepack.com/composting/commercial-composting",
            "about": [
              { "@type": "Thing", "name": "Commercial Composting" },
              { "@type": "Thing", "name": "Compostable Packaging" },
              { "@type": "Thing", "name": "Industrial Composting Methods" }
            ]
          })}
        </script>

        {/* FAQ Schema for AEO */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "What is commercial composting?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Commercial composting uses the same biology as backyard composting—microorganisms breaking down organic material—but scaled up and carefully controlled. Facilities manage huge volumes of food scraps, yard trimmings and other organics using equipment to regulate temperature, oxygen and moisture so decomposition happens quickly and safely."
                }
              },
              {
                "@type": "Question",
                "name": "What are the three main commercial composting methods?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "The three primary commercial composting methods are: 1) Windrow Composting - material arranged in long rows and turned regularly, taking about 4 months; 2) Aerated Static Pile - material mixed with wood chips with forced air, completing in 3 months; 3) In-Vessel Composting - enclosed containers with automated control, finishing in under a month."
                }
              },
              {
                "@type": "Question",
                "name": "Can compostable packaging be processed in commercial composting facilities?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, but only certified compostable packaging meeting standards like EN 13432 or ASTM D6400 should enter the system. These certifications ensure materials will fully biodegrade within 180 days at industrial facility temperatures (140°F / 60°C or higher). Home composting cannot process certified compostable packaging as temperatures aren't high enough."
                }
              },
              {
                "@type": "Question",
                "name": "How long does commercial composting take?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Processing time varies by method: Windrow composting takes about 4 months, aerated static pile systems complete in approximately 3 months, and in-vessel composting can produce finished compost in under a month. EN 13432 specifies that materials must fully biodegrade within 180 days at industrial facility temperatures."
                }
              },
              {
                "@type": "Question",
                "name": "Why can't home composting process compostable packaging?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Home compost piles rarely reach the sustained high temperatures (140°F / 60°C or higher) needed to break down certified compostable packaging. Industrial facilities are precisely engineered to maintain these conditions. EN 13432 specifies that materials must fully biodegrade within 180 days at industrial facility temperatures that home composting cannot achieve."
                }
              }
            ]
          })}
        </script>

        {/* HowTo Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "HowTo",
            "name": "How to Connect Your Brand with Commercial Composting",
            "description": "Steps for brands to successfully use certified compostable packaging with commercial composting infrastructure",
            "step": [
              {
                "@type": "HowToStep",
                "name": "Research your market's infrastructure",
                "text": "Determine if your region has commercial composting facilities that accept packaging and what method they use (windrow, aerated, in-vessel)"
              },
              {
                "@type": "HowToStep",
                "name": "Choose certified compostable packaging",
                "text": "Select packaging certified to EN 13432 or ASTM D6400 standards from certified suppliers like Achievepack"
              },
              {
                "@type": "HowToStep",
                "name": "Label clearly for consumers",
                "text": "Add clear instructions: 'Compost at your local commercial facility. Compostable in 90–180 days.' Make it actionable."
              },
              {
                "@type": "HowToStep",
                "name": "Communicate with customers",
                "text": "Explain where and how to compost your packaging so customers can take proper action"
              }
            ]
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-neutral-50">
        {/* SEO Page Header */}
        <SEOPageHeader />

        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-amber-800 to-amber-900 text-white py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <span className="bg-amber-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {t('seoPages.pages.commercialComposting.practicalGuide')}
                  </span>
                  <span className="text-amber-300 text-sm">{t('seoPages.pages.commercialComposting.8MinRead')}</span>
                </div>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
                  {t('seoPages.pages.commercialComposting.howCommercialCompostingWorks')}
                </h1>
                <p className="text-lg md:text-xl text-amber-100 mb-6">
                  {t('seoPages.pages.commercialComposting.andWhatItMeansFor')}
                </p>
                <p className="text-amber-200 mb-8">
                  {t('seoPages.pages.commercialComposting.aPracticalGuideToWindrow')}
                </p>
                <div className="flex flex-wrap gap-4">
                  <button
                    onClick={openCalendly}
                    className="flex items-center gap-2 bg-white text-amber-800 px-6 py-3 rounded-lg font-semibold hover:bg-amber-50 transition"
                  >
                    <Calendar className="h-5 w-5" />
                    {t('seoPages.pages.commercialComposting.freeConsultation')}
                  </button>
                  <Link
                    to="/composting/composting-services"
                    className="flex items-center gap-2 border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition"
                  >
                    <Globe className="h-5 w-5" />
                    {t('seoPages.pages.commercialComposting.findCompostingServices')}
                  </Link>
                </div>
              </div>
              <div className="hidden md:block">
                <ClickableImage
                  src={IMAGES.hero}
                  alt={t('seoPages.pages.commercialComposting.alt_commercialCompostingMethodsWindrowAerated')}
                  className="rounded-2xl shadow-2xl w-full"
                  caption={t('seoPages.pages.commercialComposting.caption_commercialCompostingProcessesOrganicWaste')}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Breadcrumb */}
        <nav className="bg-white border-b" aria-label="Breadcrumb">
          <div className="max-w-5xl mx-auto px-4 py-3">
            <ol className="flex items-center gap-2 text-sm text-neutral-600">
              <li><Link to="/" className="hover:text-primary-600">{t('seoPages.pages.commercialComposting.home')}</Link></li>
              <li><ChevronRight className="h-4 w-4" /></li>
              <li><Link to="/learn" className="hover:text-primary-600">{t('seoPages.pages.commercialComposting.learn')}</Link></li>
              <li><ChevronRight className="h-4 w-4" /></li>
              <li className="text-neutral-900 font-medium">{t('seoPages.pages.commercialComposting.commercialComposting')}</li>
            </ol>
          </div>
        </nav>

        {/* Main Content with Sidebar */}
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Sidebar Navigation */}
            <aside className="hidden lg:block lg:col-span-1">
              <div className="sticky top-24 max-h-[calc(100vh-120px)] overflow-y-auto bg-white rounded-xl shadow-sm border border-neutral-100 p-4">
                <h3 className="text-sm font-semibold text-neutral-500 uppercase tracking-wide mb-4">{t('seoPages.pages.commercialComposting.contents')}</h3>
                <nav className="space-y-1">
                  <a href="#from-theory" className="block px-3 py-2 text-sm text-neutral-600 hover:bg-primary-50 hover:text-primary-700 rounded-lg transition">{t('seoPages.pages.commercialComposting.fromTheoryToPractice')}</a>
                  <a href="#what-is-commercial" className="block px-3 py-2 text-sm text-neutral-600 hover:bg-primary-50 hover:text-primary-700 rounded-lg transition">{t('seoPages.pages.commercialComposting.whatIsCommercialComposting')}</a>
                  <a href="#collection" className="block px-3 py-2 text-sm text-neutral-600 hover:bg-primary-50 hover:text-primary-700 rounded-lg transition">{t('seoPages.pages.commercialComposting.collectionPreprocessing')}</a>
                  <a href="#windrow" className="block px-3 py-2 text-sm text-neutral-600 hover:bg-primary-50 hover:text-primary-700 rounded-lg transition">{t('seoPages.pages.commercialComposting.method1Windrow')}</a>
                  <a href="#aerated" className="block px-3 py-2 text-sm text-neutral-600 hover:bg-primary-50 hover:text-primary-700 rounded-lg transition">{t('seoPages.pages.commercialComposting.method2AeratedStaticPile')}</a>
                  <a href="#in-vessel" className="block px-3 py-2 text-sm text-neutral-600 hover:bg-primary-50 hover:text-primary-700 rounded-lg transition">{t('seoPages.pages.commercialComposting.method3Invessel')}</a>
                  <a href="#packaging" className="block px-3 py-2 text-sm text-neutral-600 hover:bg-primary-50 hover:text-primary-700 rounded-lg transition">{t('seoPages.pages.commercialComposting.compostablePackaging')}</a>
                  <a href="#achievepack" className="block px-3 py-2 text-sm text-neutral-600 hover:bg-primary-50 hover:text-primary-700 rounded-lg transition">{t('seoPages.pages.commercialComposting.howAchievepackDesigns')}</a>
                  <a href="#strategy" className="block px-3 py-2 text-sm text-neutral-600 hover:bg-primary-50 hover:text-primary-700 rounded-lg transition">{t('seoPages.pages.commercialComposting.yourPackagingStrategy')}</a>
                  <a href="#faq" className="block px-3 py-2 text-sm text-neutral-600 hover:bg-primary-50 hover:text-primary-700 rounded-lg transition">{t('seoPages.pages.commercialComposting.faq')}</a>
                </nav>
              </div>
            </aside>

            {/* Main Content Area */}
            <main className="lg:col-span-3 space-y-8">
          
          {/* From Theory to Practice */}
          <section id="from-theory" className="bg-white rounded-xl p-6 md:p-8 shadow-sm border border-neutral-100">
            <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-6 flex items-center gap-3">
              <Sprout className="h-8 w-8 text-amber-600" />
              {t('seoPages.pages.commercialComposting.fromTheoryToPractice')}
            </h2>
            <div className="prose prose-lg max-w-none text-neutral-700">
              <p>
                {t('seoPages.pages.commercialComposting.manyBrandsKnowThatComposting')}
              </p>
              <p>
                {t('seoPages.pages.commercialComposting.understandingCommercialCompostingIsntAcademic')} <Link to="/materials" className="text-primary-600 hover:underline">{t('seoPages.pages.commercialComposting.packagingStrategy')}</Link>{t('seoPages.pages.commercialComposting.heresTheKeyTruth')} <strong>{t('seoPages.pages.commercialComposting.manyCertifiedCompostableMaterialsWork')}</strong>{t('seoPages.pages.commercialComposting.ifYourMarketDoesntHave')}
              </p>
              <p>
                {t('seoPages.pages.commercialComposting.thisArticleWalksYouThrough')} <Link to="/materials/industrial-compostable" className="text-primary-600 hover:underline">{t('seoPages.pages.commercialComposting.compostablePackaging1')}</Link> {t('seoPages.pages.commercialComposting.fitsInByTheEnd')}
              </p>
            </div>
          </section>

          {/* What Is Commercial Composting */}
          <section id="what-is-commercial" className="bg-white rounded-xl p-6 md:p-8 shadow-sm border border-neutral-100">
            <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-6 flex items-center gap-3">
              <Factory className="h-8 w-8 text-amber-600" />
              {t('seoPages.pages.commercialComposting.whatIsCommercialIndustrialComposting')}
            </h2>
            <div className="prose prose-lg max-w-none text-neutral-700">
              <p>
                {t('seoPages.pages.commercialComposting.commercialCompostingUsesTheExact')} <strong>{t('seoPages.pages.commercialComposting.temperatureOxygenAndMoisture')}</strong> {t('seoPages.pages.commercialComposting.soDecompositionHappensQuicklyAnd')}
              </p>
              <p>
                {t('seoPages.pages.commercialComposting.comparedToLandfillingOrIncineration')} <Link to="/company/certificates" className="text-primary-600 hover:underline">{t('seoPages.pages.commercialComposting.certifiedCompostablePackaging')}</Link> {t('seoPages.pages.commercialComposting.isEngineeredFor')}
              </p>
              <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-lg my-6">
                <p className="text-amber-800 font-medium mb-0">
                  <strong>{t('seoPages.pages.commercialComposting.scaleMatters')}</strong> {t('seoPages.pages.commercialComposting.organicMaterialComesFromMultiple')} <strong>{t('seoPages.pages.commercialComposting.hundredsOfTonsPerDay')}</strong>.
                </p>
              </div>
            </div>
          </section>

          {/* Collection & Pre-Processing */}
          <section id="collection" className="bg-white rounded-xl p-6 md:p-8 shadow-sm border border-neutral-100">
            <ImageTextRow
              image={IMAGES.collection}
              imageAlt="Compostable packaging collection alongside food scraps for commercial composting"
              imageCaption="Certified compostable packaging collected with food scraps"
              imageLeft={true}
            >
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-4 flex items-center gap-3">
                  <Truck className="h-7 w-7 text-amber-600" />
                  {t('seoPages.pages.commercialComposting.collectionPreprocessing')}
                </h2>
                <div className="text-neutral-700 space-y-4">
                  <p>
                    {t('seoPages.pages.commercialComposting.beforeMaterialEverEntersA')}
                  </p>
                  <p>
                    {t('seoPages.pages.commercialComposting.mostCommercialFacilitiesPartnerWith')} <Link to="/composting/composting-services" className="text-primary-600 hover:underline">{t('seoPages.pages.commercialComposting.localCollectionPoints')}</Link>.
                  </p>
                  <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-r-lg">
                    <p className="text-red-800 font-medium">
                      <strong>{t('seoPages.pages.commercialComposting.certificationIsNonnegotiable')}</strong> {t('seoPages.pages.commercialComposting.onlyCertifiedCompostablePackagingmeetingStandards')} <Link to="/company/certificates" className="text-primary-600 hover:underline">{t('seoPages.pages.commercialComposting.en13432OrAstmD6400')}</Link>{t('seoPages.pages.commercialComposting.shouldEnterTheSystemAlongside')}
                    </p>
                  </div>
                </div>
              </div>
            </ImageTextRow>
          </section>

          {/* Method 1: Windrow */}
          <section id="windrow" className="bg-white rounded-xl p-6 md:p-8 shadow-sm border border-neutral-100">
            <ImageTextRow
              image={IMAGES.windrow}
              imageAlt="Windrow composting facility with machinery turning organic material"
              imageCaption="Windrow composting: Long rows of organic material regularly turned"
              imageLeft={false}
            >
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-4 flex items-center gap-3">
                  <RotateCcw className="h-7 w-7 text-green-600" />
                  {t('seoPages.pages.commercialComposting.method1WindrowComposting')}
                </h2>
                <div className="text-neutral-700 space-y-4">
                  <p>
                    {t('seoPages.pages.commercialComposting.windrowSystemsAreSimpleCosteffective')} <strong>{t('seoPages.pages.commercialComposting.operatorsRegularlyTurnThePiles')}</strong> {t('seoPages.pages.commercialComposting.toEnsureAllMaterialGets')}
                  </p>
                  <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                      <div className="flex items-center gap-2">
                        <Clock className="h-5 w-5 text-green-600" />
                        <span><strong>{t('seoPages.pages.commercialComposting.timeline')}</strong> {t('seoPages.pages.commercialComposting.4Months')}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Shield className="h-5 w-5 text-green-600" />
                        <span><strong>{t('seoPages.pages.commercialComposting.resilient')}</strong> {t('seoPages.pages.commercialComposting.wideMaterialRange')}</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-neutral-600 italic">
                    {t('seoPages.pages.commercialComposting.thatsWhyYoullFindWindrow')}
                  </p>
                </div>
              </div>
            </ImageTextRow>
          </section>

          {/* Method 2: Aerated Static Pile */}
          <section id="aerated" className="bg-white rounded-xl p-6 md:p-8 shadow-sm border border-neutral-100">
            <ImageTextRow
              image={IMAGES.aeratedPile}
              imageAlt="Aerated static pile composting system with perforated pipes"
              imageCaption="Aerated static pile: Forced air speeds decomposition"
              imageLeft={true}
            >
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-4 flex items-center gap-3">
                  <Wind className="h-7 w-7 text-blue-600" />
                  {t('seoPages.pages.commercialComposting.method2AeratedStaticPile1')}
                </h2>
                <div className="text-neutral-700 space-y-4">
                  <p>
                    {t('seoPages.pages.commercialComposting.aeratedStaticPileCompostingMixes')} <strong>{t('seoPages.pages.commercialComposting.perforatedPipesAndBlowers')}</strong> {t('seoPages.pages.commercialComposting.toActivelyPushAirInto')}
                  </p>
                  <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                      <div className="flex items-center gap-2">
                        <Clock className="h-5 w-5 text-blue-600" />
                        <span><strong>{t('seoPages.pages.commercialComposting.timeline')}</strong> {t('seoPages.pages.commercialComposting.3Months')}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Target className="h-5 w-5 text-blue-600" />
                        <span><strong>{t('seoPages.pages.commercialComposting.efficient')}</strong> {t('seoPages.pages.commercialComposting.controlledAeration')}</span>
                      </div>
                    </div>
                  </div>
                  <p>
                    {t('seoPages.pages.commercialComposting.theTradeoffIsSelectivityAerated')} <strong>{t('seoPages.pages.commercialComposting.presortingBecomesMoreCritical')}</strong>
                  </p>
                </div>
              </div>
            </ImageTextRow>
          </section>

          {/* Method 3: In-Vessel */}
          <section id="in-vessel" className="bg-white rounded-xl p-6 md:p-8 shadow-sm border border-neutral-100">
            <ImageTextRow
              image={IMAGES.inVessel}
              imageAlt="In-vessel composting drum with automated temperature and aeration control"
              imageCaption="In-vessel composting: Enclosed containers with precise control"
              imageLeft={false}
            >
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-4 flex items-center gap-3">
                  <Settings className="h-7 w-7 text-purple-600" />
                  {t('seoPages.pages.commercialComposting.method3InvesselCompostingIvc')}
                </h2>
                <div className="text-neutral-700 space-y-4">
                  <p>
                    {t('seoPages.pages.commercialComposting.invesselCompostingRepresentsTheHighest')} <strong>{t('seoPages.pages.commercialComposting.enclosedContainersOrIndustrialComposting')}</strong> {t('seoPages.pages.commercialComposting.whereTemperatureHydrationAndAeration')}
                  </p>
                  <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
                    <h4 className="font-semibold text-purple-800 mb-2">{t('seoPages.pages.commercialComposting.keyAdvantages')}</h4>
                    <ul className="text-sm text-purple-700 space-y-1">
                      <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4" /> {t('seoPages.pages.commercialComposting.minimalLandUse')}</li>
                      <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4" /> {t('seoPages.pages.commercialComposting.under1MonthProcessing')}</li>
                      <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4" /> {t('seoPages.pages.commercialComposting.guaranteedPathogenKilloff')}</li>
                      <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4" /> {t('seoPages.pages.commercialComposting.yearroundOperation')}</li>
                    </ul>
                  </div>
                  <p className="text-sm text-neutral-600 italic">
                    {t('seoPages.pages.commercialComposting.theDownsideIsHigherUpfront')}
                  </p>
                </div>
              </div>
            </ImageTextRow>
          </section>

          {/* Composting Methods Comparison */}
          <section className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-8 border border-amber-200">
            <h2 className="text-2xl font-bold text-neutral-900 mb-6 flex items-center gap-3">
              <Layers className="h-7 w-7 text-amber-600" />
              {t('seoPages.pages.commercialComposting.compostingMethodsComparison')}
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-amber-300">
                    <th className="text-left py-3 pr-4 font-semibold text-neutral-800">{t('seoPages.pages.commercialComposting.method')}</th>
                    <th className="text-left py-3 pr-4 font-semibold text-neutral-800">{t('seoPages.pages.commercialComposting.timeline1')}</th>
                    <th className="text-left py-3 pr-4 font-semibold text-neutral-800">{t('seoPages.pages.commercialComposting.bestFor')}</th>
                    <th className="text-left py-3 font-semibold text-neutral-800">{t('seoPages.pages.commercialComposting.tradeoff')}</th>
                  </tr>
                </thead>
                <tbody className="text-neutral-700">
                  <tr className="border-b border-amber-200">
                    <td className="py-3 pr-4 font-medium">{t('seoPages.pages.commercialComposting.windrow')}</td>
                    <td className="py-3 pr-4">{t('seoPages.pages.commercialComposting.4Months')}</td>
                    <td className="py-3 pr-4">{t('seoPages.pages.commercialComposting.largeVolumesVariedMaterials')}</td>
                    <td className="py-3">{t('seoPages.pages.commercialComposting.requiresLandWeatherTolerance')}</td>
                  </tr>
                  <tr className="border-b border-amber-200">
                    <td className="py-3 pr-4 font-medium">{t('seoPages.pages.commercialComposting.aeratedStaticPile')}</td>
                    <td className="py-3 pr-4">{t('seoPages.pages.commercialComposting.3Months')}</td>
                    <td className="py-3 pr-4">{t('seoPages.pages.commercialComposting.efficiencyLowerOverhead')}</td>
                    <td className="py-3">{t('seoPages.pages.commercialComposting.limitedMaterialAcceptance')}</td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4 font-medium">{t('seoPages.pages.commercialComposting.invesselIvc')}</td>
                    <td className="py-3 pr-4">{t('seoPages.pages.commercialComposting.lt1Month')}</td>
                    <td className="py-3 pr-4">{t('seoPages.pages.commercialComposting.speedPathogenControlUrban')}</td>
                    <td className="py-3">{t('seoPages.pages.commercialComposting.higherCapitalInvestment')}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* What This Means for Compostable Packaging */}
          <section id="packaging" className="bg-white rounded-xl p-6 md:p-8 shadow-sm border border-neutral-100">
            <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-6 flex items-center gap-3">
              <Package className="h-8 w-8 text-green-600" />
              {t('seoPages.pages.commercialComposting.whatThisMeansForCompostable')}
            </h2>
            <div className="prose prose-lg max-w-none text-neutral-700">
              <p>
                {t('seoPages.pages.commercialComposting.for')} <Link to="/materials/industrial-compostable" className="text-primary-600 hover:underline">{t('seoPages.pages.commercialComposting.certifiedCompostablePackaging')}</Link>{t('seoPages.pages.commercialComposting.commercialCompostingIsntOptional')}<strong>{t('seoPages.pages.commercialComposting.itsTheWholePoint')}</strong>{t('seoPages.pages.commercialComposting.compostablePackagingNeedsTheSustained')}
              </p>
              
              <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded-r-lg my-6">
                <p className="text-green-800 font-medium mb-0">
                  <Link to="/company/certificates" className="text-primary-600 hover:underline">{t('seoPages.pages.commercialComposting.en13432')}</Link> {t('seoPages.pages.commercialComposting.specifiesThatMaterialsMustFully')} <strong>{t('seoPages.pages.commercialComposting.180DaysAtIndustrialFacility')}</strong>{t('seoPages.pages.commercialComposting.homeCompostingPilesRarelyReach')}
                </p>
              </div>

              <p>
                {t('seoPages.pages.commercialComposting.whenYouChooseCertifiedCompostable')} <Link to="/solutions/coffee-roaster" className="text-primary-600 hover:underline">{t('seoPages.pages.commercialComposting.coffeeRoasterUsingCompostablePouches')}</Link>{t('seoPages.pages.commercialComposting.thePathwayIsClearPackaging')}
              </p>

              <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-lg my-6">
                <h4 className="font-semibold text-amber-800 mb-2">{t('seoPages.pages.commercialComposting.theCriticalQualifier')}</h4>
                <p className="text-amber-800 mb-0">
                  {t('seoPages.pages.commercialComposting.theFacilityInYourMarket')} <strong>{t('seoPages.pages.commercialComposting.mustAcceptPackaging')}</strong>{t('seoPages.pages.commercialComposting.notAllCommercialCompostingOperations')} <Link to="/composting/composting-services" className="text-primary-600 hover:underline">{t('seoPages.pages.commercialComposting.marketResearch')}</Link> {t('seoPages.pages.commercialComposting.matters')}
                </p>
              </div>
            </div>
          </section>

          {/* How Achievepack Designs */}
          <section id="achievepack" className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 border border-green-200">
            <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-6 flex items-center gap-3">
              <Award className="h-8 w-8 text-primary-600" />
              {t('seoPages.pages.commercialComposting.howAchievepackDesignsForReal')}
            </h2>
            <div className="prose prose-lg max-w-none text-neutral-700">
              <p>
                {t('seoPages.pages.commercialComposting.whenWeDesign')} <Link to="/materials/industrial-compostable" className="text-primary-600 hover:underline">{t('seoPages.pages.commercialComposting.compostablePackaging1')}</Link> {t('seoPages.pages.commercialComposting.atAchievepackWeDontStart')} <strong>{t('seoPages.pages.commercialComposting.weStartWithActualFacility')}</strong>
              </p>
              <p>
                {t('seoPages.pages.commercialComposting.ourEngineeringTeamConsidersThe')} <Link to="/company/certificates" className="text-primary-600 hover:underline">{t('seoPages.pages.commercialComposting.en13432OrAstmD6400')}</Link> {t('seoPages.pages.commercialComposting.compostability')}
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <div className="bg-white p-5 rounded-lg border">
                <h4 className="font-semibold text-neutral-800 mb-2">{t('seoPages.pages.commercialComposting.forCoffeeRoasters')}</h4>
                <p className="text-sm text-neutral-600">{t('seoPages.pages.commercialComposting.a')} <Link to="/products/compostable-coffee-bags" className="text-primary-600 hover:underline">{t('seoPages.pages.commercialComposting.degassingValve')}</Link> {t('seoPages.pages.commercialComposting.thatWorksInThePackage')}</p>
              </div>
              <div className="bg-white p-5 rounded-lg border">
                <h4 className="font-semibold text-neutral-800 mb-2">{t('seoPages.pages.commercialComposting.forSnackMakers')}</h4>
                <p className="text-sm text-neutral-600"><Link to="/packaging/stand-up-pouches" className="text-primary-600 hover:underline">{t('seoPages.pages.commercialComposting.highbarrierLayers')}</Link> {t('seoPages.pages.commercialComposting.thatKeepProductsCrispyWhile')}</p>
              </div>
              <div className="bg-white p-5 rounded-lg border">
                <h4 className="font-semibold text-neutral-800 mb-2">{t('seoPages.pages.commercialComposting.forPetTreats')}</h4>
                <p className="text-sm text-neutral-600"><Link to="/industry/pet-food" className="text-primary-600 hover:underline">{t('seoPages.pages.commercialComposting.resealableZippers')}</Link> {t('seoPages.pages.commercialComposting.thatSealThroughShelfLife')}</p>
              </div>
            </div>

            <div className="bg-green-100 p-4 rounded-lg border border-green-200 mt-6">
              <p className="text-green-800 font-medium mb-0">
                {t('seoPages.pages.commercialComposting.thisIsWhyCertificationMatters')} <strong>{t('seoPages.pages.commercialComposting.realCompostingConditions')}</strong>{t('seoPages.pages.commercialComposting.notHypotheticalConditions')}
              </p>
            </div>
          </section>

          {/* Your Packaging Strategy */}
          <section id="strategy" className="bg-white rounded-xl p-6 md:p-8 shadow-sm border border-neutral-100">
            <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-6 flex items-center gap-3">
              <Building2 className="h-8 w-8 text-primary-600" />
              {t('seoPages.pages.commercialComposting.connectingTheDotsFromYour')}
            </h2>
            <p className="text-neutral-700 mb-6">{t('seoPages.pages.commercialComposting.heresWhatYouNeedTo')}</p>
            
            <div className="space-y-4">
              <div className="bg-white p-5 rounded-lg border-l-4 border-primary-500">
                <h4 className="font-semibold text-neutral-800 mb-2">{t('seoPages.pages.commercialComposting.1ResearchYourMarketsInfrastructure')}</h4>
                <p className="text-neutral-600">{t('seoPages.pages.commercialComposting.doesYourRegionHave')} <Link to="/composting/composting-services" className="text-primary-600 hover:underline">{t('seoPages.pages.commercialComposting.commercialFacilitiesThatAcceptPackaging')}</Link>{t('seoPages.pages.commercialComposting.whatMethodDoTheyUse')}</p>
              </div>
              
              <div className="bg-white p-5 rounded-lg border-l-4 border-primary-500">
                <h4 className="font-semibold text-neutral-800 mb-2">{t('seoPages.pages.commercialComposting.2CommitToCertification')}</h4>
                <p className="text-neutral-600"><Link to="/company/certificates" className="text-primary-600 hover:underline">{t('seoPages.pages.commercialComposting.en13432AndAstmD6400')}</Link> {t('seoPages.pages.commercialComposting.arentMarketingLabelstheyreEngineeringStandards')}</p>
              </div>
              
              <div className="bg-white p-5 rounded-lg border-l-4 border-primary-500">
                <h4 className="font-semibold text-neutral-800 mb-2">{t('seoPages.pages.commercialComposting.3CommunicateClearly')}</h4>
                <p className="text-neutral-600">"<Link to="/composting/biodegradable-vs-compostable" className="text-primary-600 hover:underline">{t('seoPages.pages.commercialComposting.compostable')}</Link>{t('seoPages.pages.commercialComposting.isOnlyMeaningfulIfPeople')} <em>{t('seoPages.pages.commercialComposting.compostAtYourLocalCommercial')}</em> {t('seoPages.pages.commercialComposting.makeItActionable')}</p>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="bg-gradient-to-br from-amber-700 to-amber-800 rounded-2xl p-8 text-white">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-center">
              {t('seoPages.pages.commercialComposting.readyToExploreCompostablePackaging')}
            </h2>
            <p className="text-amber-100 text-center mb-8 max-w-2xl mx-auto">
              {t('seoPages.pages.commercialComposting.achievepackOffers')} <strong>{t('seoPages.pages.commercialComposting.free30minuteConsultations')}</strong> {t('seoPages.pages.commercialComposting.toHelpYouAssessYour')}
            </p>
            
            <div className="grid md:grid-cols-3 gap-4 mb-8">
              <button
                onClick={openCalendly}
                className="flex flex-col items-center gap-3 bg-white text-amber-800 p-6 rounded-xl hover:bg-amber-50 transition"
              >
                <Calendar className="h-8 w-8" />
                <span className="font-semibold">{t('seoPages.pages.commercialComposting.bookAConsultation')}</span>
                <span className="text-sm text-amber-600">{t('seoPages.pages.commercialComposting.free30minuteCall')}</span>
              </button>
              <Link
                to="/store"
                className="flex flex-col items-center gap-3 bg-amber-600 text-white p-6 rounded-xl hover:bg-amber-500 transition border border-amber-500"
              >
                <Package className="h-8 w-8" />
                <span className="font-semibold">{t('seoPages.pages.commercialComposting.requestSamples')}</span>
                <span className="text-sm text-amber-200">{t('seoPages.pages.commercialComposting.feelTheMaterials')}</span>
              </Link>
              <Link
                to="/materials/industrial-compostable"
                className="flex flex-col items-center gap-3 bg-amber-600 text-white p-6 rounded-xl hover:bg-amber-500 transition border border-amber-500"
              >
                <Leaf className="h-8 w-8" />
                <span className="font-semibold">{t('seoPages.pages.commercialComposting.exploreMaterials')}</span>
                <span className="text-sm text-amber-200">{t('seoPages.pages.commercialComposting.industrialCompostable')}</span>
              </Link>
            </div>
            
            <div className="flex flex-col sm:flex-row justify-center gap-6 text-center">
              <a href="mailto:hello@achievepack.com" className="flex items-center justify-center gap-2 text-amber-100 hover:text-white">
                <Mail className="h-5 w-5" />
                {t('seoPages.pages.commercialComposting.helloachievepackcom')}
              </a>
              <span className="hidden sm:inline text-amber-400">|</span>
              <Link to="/company/contact" className="flex items-center justify-center gap-2 text-amber-100 hover:text-white">
                <Phone className="h-5 w-5" />
                {t('seoPages.pages.commercialComposting.contactUs')}
              </Link>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="bg-white rounded-xl p-6 md:p-8 shadow-sm border border-neutral-100 mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-8 text-center">
              {t('seoPages.pages.commercialComposting.frequentlyAskedQuestions')}
            </h2>
            <div className="space-y-4 max-w-3xl mx-auto">
              <details className="group bg-neutral-50 rounded-xl overflow-hidden">
                <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-neutral-100 transition">
                  <span className="font-semibold text-neutral-900 pr-4">{t('seoPages.pages.commercialComposting.whatIsCommercialComposting1')}</span>
                  <ChevronDown className="h-5 w-5 text-neutral-500 group-open:rotate-180 transition-transform flex-shrink-0" />
                </summary>
                <div className="px-6 pb-6 text-neutral-700">
                  {t('seoPages.pages.commercialComposting.commercialCompostingUsesTheSame')}
                </div>
              </details>
              <details className="group bg-neutral-50 rounded-xl overflow-hidden">
                <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-neutral-100 transition">
                  <span className="font-semibold text-neutral-900 pr-4">{t('seoPages.pages.commercialComposting.whatAreTheThreeMain')}</span>
                  <ChevronDown className="h-5 w-5 text-neutral-500 group-open:rotate-180 transition-transform flex-shrink-0" />
                </summary>
                <div className="px-6 pb-6 text-neutral-700">
                  {t('seoPages.pages.commercialComposting.theThreePrimaryMethodsAre')}
                </div>
              </details>
              <details className="group bg-neutral-50 rounded-xl overflow-hidden">
                <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-neutral-100 transition">
                  <span className="font-semibold text-neutral-900 pr-4">{t('seoPages.pages.commercialComposting.canCompostablePackagingBeProcessed')}</span>
                  <ChevronDown className="h-5 w-5 text-neutral-500 group-open:rotate-180 transition-transform flex-shrink-0" />
                </summary>
                <div className="px-6 pb-6 text-neutral-700">
                  {t('seoPages.pages.commercialComposting.yesButOnlyCertifiedCompostable')}
                </div>
              </details>
              <details className="group bg-neutral-50 rounded-xl overflow-hidden">
                <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-neutral-100 transition">
                  <span className="font-semibold text-neutral-900 pr-4">{t('seoPages.pages.commercialComposting.howLongDoesCommercialComposting')}</span>
                  <ChevronDown className="h-5 w-5 text-neutral-500 group-open:rotate-180 transition-transform flex-shrink-0" />
                </summary>
                <div className="px-6 pb-6 text-neutral-700">
                  {t('seoPages.pages.commercialComposting.processingTimeVariesByMethod')}
                </div>
              </details>
            </div>
          </section>

          {/* Related Resources */}
          <section id="faq" className="bg-white rounded-xl p-6 md:p-8 shadow-sm border border-neutral-100">
            <h2 className="text-xl font-bold text-neutral-900 mb-4">{t('seoPages.pages.commercialComposting.relatedResources')}</h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
              <Link to="/composting/composting-benefits" className="bg-white p-4 rounded-lg border hover:shadow-md transition group">
                <h4 className="font-semibold text-neutral-800 group-hover:text-primary-600">{t('seoPages.pages.commercialComposting.compostingBenefits')}</h4>
                <p className="text-sm text-neutral-600 mt-1">{t('seoPages.pages.commercialComposting.environmentalImpactExplained')}</p>
              </Link>
              <Link to="/composting/composting-services" className="bg-white p-4 rounded-lg border hover:shadow-md transition group">
                <h4 className="font-semibold text-neutral-800 group-hover:text-primary-600">{t('seoPages.pages.commercialComposting.compostingServiceFinder')}</h4>
                <p className="text-sm text-neutral-600 mt-1">{t('seoPages.pages.commercialComposting.findFacilitiesNearYou')}</p>
              </Link>
              <Link to="/composting/biodegradable-vs-compostable" className="bg-white p-4 rounded-lg border hover:shadow-md transition group">
                <h4 className="font-semibold text-neutral-800 group-hover:text-primary-600">{t('seoPages.pages.commercialComposting.biodegradableVsCompostable')}</h4>
                <p className="text-sm text-neutral-600 mt-1">{t('seoPages.pages.commercialComposting.understandTheDifference')}</p>
              </Link>
              <Link to="/company/certificates" className="bg-white p-4 rounded-lg border hover:shadow-md transition group">
                <h4 className="font-semibold text-neutral-800 group-hover:text-primary-600">{t('seoPages.pages.commercialComposting.ourCertifications')}</h4>
                <p className="text-sm text-neutral-600 mt-1">{t('seoPages.pages.commercialComposting.en13432AstmD6400Bpi')}</p>
              </Link>
              <Link to="/materials/industrial-compostable" className="bg-white p-4 rounded-lg border hover:shadow-md transition group">
                <h4 className="font-semibold text-neutral-800 group-hover:text-primary-600">{t('seoPages.pages.commercialComposting.industrialCompostable1')}</h4>
                <p className="text-sm text-neutral-600 mt-1">{t('seoPages.pages.commercialComposting.en13432CertifiedPackaging')}</p>
              </Link>
              <Link to="/topics/eco-friendly-food-packaging" className="bg-white p-4 rounded-lg border hover:shadow-md transition group">
                <h4 className="font-semibold text-neutral-800 group-hover:text-primary-600">{t('seoPages.pages.commercialComposting.ecofriendlyPackaging')}</h4>
                <p className="text-sm text-neutral-600 mt-1">{t('seoPages.pages.commercialComposting.completeSustainabilityGuide')}</p>
              </Link>
            </div>
          </section>

          {/* E-E-A-T Author Box */}
          <section className="bg-neutral-100 rounded-xl p-6 mb-8">
            <div className="flex items-start gap-4">
              <div className="bg-primary-600 rounded-full p-3 flex-shrink-0">
                <Users className="h-8 w-8 text-white" />
              </div>
              <div>
                <h4 className="font-bold text-neutral-900">{t('seoPages.pages.commercialComposting.aboutAchievepack')}</h4>
                <p className="text-sm text-neutral-600 mt-1">
                  {t('seoPages.pages.commercialComposting.achievepackDesignsCertifiedCompostablePackaging')} <Link to="/company/certificates" className="text-primary-600 hover:underline">{t('seoPages.pages.commercialComposting.en13432OrAstmD6400')}</Link> {t('seoPages.pages.commercialComposting.andDesignedForCommercialComposting')}
                </p>
                <div className="flex flex-wrap gap-4 mt-3">
                  <Link to="/company/about" className="text-sm text-primary-600 hover:underline">{t('seoPages.pages.commercialComposting.learnMoreAboutUs')}</Link>
                  <Link to="/company/certificates" className="text-sm text-primary-600 hover:underline">{t('seoPages.pages.commercialComposting.viewOurCertifications')}</Link>
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

export default CommercialCompostingPage