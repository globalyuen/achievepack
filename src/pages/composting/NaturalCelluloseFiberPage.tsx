import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { CheckCircle, Calendar, Shield, Package, X, ChevronDown, HelpCircle, ArrowRight, Zap, Recycle, Target, TrendingUp, Leaf, Layers, BarChart3, Award, Factory, Sprout } from 'lucide-react'
import { useCalendly } from '../../contexts/CalendlyContext'
import Footer from '../../components/Footer'
import { SEOPageHeader } from '../../components/SEOPageLayout'
import SocialShareButtons from '../../components/SocialShareButtons'

// Image paths - using imgs/composting/cellulose folder
const IMAGES = {
  hero: '/imgs/composting/cellulose/22be74fbcbe50dba49f2aaac988a540c.jpg',
  materialScience: '/imgs/composting/cellulose/7a1a72413365ab39c6531312efcfd510.jpg',
  qualityComparison: '/imgs/composting/cellulose/a2b51f7a3171311964705856d16e1245.jpg',
  environmentalImpact: '/imgs/composting/cellulose/dd8a02694ab58b4149f7a7f4ff508ad2.jpg',
  testingValidation: '/imgs/composting/cellulose/22be74fbcbe50dba49f2aaac988a540c.jpg',
  costBenefit: '/imgs/composting/cellulose/7a1a72413365ab39c6531312efcfd510.jpg',
  ecoDigitalAdvantage: '/imgs/composting/cellulose/a2b51f7a3171311964705856d16e1245.jpg',
  retailCompliance: '/imgs/composting/cellulose/dd8a02694ab58b4149f7a7f4ff508ad2.jpg',
  smeJourney: '/imgs/composting/cellulose/22be74fbcbe50dba49f2aaac988a540c.jpg',
  supplyChain: '/imgs/composting/cellulose/7a1a72413365ab39c6531312efcfd510.jpg',
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


const NaturalCelluloseFiberPage: React.FC = () => {
  const { t } = useTranslation()

  const { openCalendly } = useCalendly()

  // FAQ Data
  const faqs = [
    {
      question: t('seoPages.pages.naturalCelluloseFiber.question_whatIsNaturalCelluloseFiber'),
      answer: t('seoPages.pages.naturalCelluloseFiber.answer_naturalCelluloseFibersAreDerived')
    },
    {
      question: t('seoPages.pages.naturalCelluloseFiber.question_howDoesCelluloseCompareTo'),
      answer: t('seoPages.pages.naturalCelluloseFiber.answer_celluloseIgnitesFastBurnsWith')
    },
    {
      question: t('seoPages.pages.naturalCelluloseFiber.question_whatAreTheEnvironmentalBenefits'),
      answer: t('seoPages.pages.naturalCelluloseFiber.answer_lifeCycleAssessmentsConfirmCellulose')
    },
    {
      question: t('seoPages.pages.naturalCelluloseFiber.question_isCelluloseFiberPackagingFoodsafe'),
      answer: t('seoPages.pages.naturalCelluloseFiber.answer_yesNaturalCelluloseFiberPackaging')
    },
    {
      question: t('seoPages.pages.naturalCelluloseFiber.question_whatApplicationsIsCellulosePackaging'),
      answer: t('seoPages.pages.naturalCelluloseFiber.answer_cellulosePackagingIsIdealFor')
    }
  ]

  return (
    <>
      <Helmet>
        <title>{t('seoPages.pages.naturalCelluloseFiber.metaTitle')}</title>
        <meta name="description" content={t('seoPages.pages.naturalCelluloseFiber.metaDescription')} />
        <link rel="canonical" href="https://achievepack.com/composting/natural-cellulose-fiber" />
        <meta name="keywords" content={t('seoPages.pages.naturalCelluloseFiber.metaKeywords')} />
        
        {/* Open Graph */}
        <meta property="og:title" content="Natural Cellulose Fiber in AchievePack Solutions" />
        <meta property="og:description" content="Sustainable B2B packaging using natural cellulose fibers for full biodegradability and compostability." />
        <meta property="og:image" content="https://achievepack.com/imgs/composting/cellulose/22be74fbcbe50dba49f2aaac988a540c.jpg" />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://achievepack.com/composting/natural-cellulose-fiber" />
        
        {/* Article Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "Natural Cellulose Fiber in AchievePack Solutions",
            "description": "Guide to natural cellulose fibers for sustainable B2B packaging.",
            "image": "https://achievepack.com/imgs/composting/cellulose/22be74fbcbe50dba49f2aaac988a540c.jpg",
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
            "datePublished": "2026-01-30",
            "dateModified": new Date().toISOString().split('T')[0],
            "mainEntityOfPage": "https://achievepack.com/composting/natural-cellulose-fiber"
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
                    {t('seoPages.pages.naturalCelluloseFiber.sustainableMaterials')}
                  </span>
                </div>
                <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
                  {t('seoPages.pages.naturalCelluloseFiber.naturalCelluloseFiberInAchievepack')}
                </h1>
                <p className="text-lg text-green-100 mb-8">
                  {t('seoPages.pages.naturalCelluloseFiber.derivedDirectlyFromRenewablePlant')}
                </p>
                
                <div className="flex flex-wrap gap-4">
                  <button 
                    onClick={openCalendly}
                    className="flex items-center gap-2 bg-white text-green-800 hover:bg-green-50 px-6 py-3 rounded-lg font-semibold transition"
                  >
                    <Calendar className="h-5 w-5" />
                    {t('seoPages.pages.naturalCelluloseFiber.bookFreeConsultation')}
                  </button>
                  <Link 
                    to="/store"
                    className="flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-lg font-semibold transition"
                  >
                    <Package className="h-5 w-5" />
                    {t('seoPages.pages.naturalCelluloseFiber.viewProducts')}
                  </Link>
                </div>

                {/* Trust badges */}
                <div className="flex items-center gap-4 mt-8 text-sm text-green-200">
                  <div className="flex items-center gap-1">
                    <Leaf className="h-4 w-4 text-green-400" />
                    <span>{t('seoPages.pages.naturalCelluloseFiber.100Biodegradable')}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Sprout className="h-4 w-4 text-green-400" />
                    <span>{t('seoPages.pages.naturalCelluloseFiber.plantbased')}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Recycle className="h-4 w-4 text-green-400" />
                    <span>{t('seoPages.pages.naturalCelluloseFiber.compostable')}</span>
                  </div>
                </div>
              </div>

              <div className="relative">
                <ClickableImage 
                  src={IMAGES.hero}
                  alt={t('seoPages.pages.naturalCelluloseFiber.alt_naturalCelluloseFiberSustainablePackaging')}
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
                  {t('seoPages.pages.naturalCelluloseFiber.keyTakeaways')}
                </h2>
                <SocialShareButtons 
                  url="https://achievepack.com/composting/natural-cellulose-fiber"
                  title={t('seoPages.pages.naturalCelluloseFiber.title_naturalCelluloseFiberInAchievepack')}
                />
              </div>
              <ul className="space-y-3 text-green-800">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span><strong>{t('seoPages.pages.naturalCelluloseFiber.fullyBiodegradable')}</strong> {t('seoPages.pages.naturalCelluloseFiber.celluloseBreaksDown3090In')}</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span><strong>{t('seoPages.pages.naturalCelluloseFiber.highPerformance')}</strong> {t('seoPages.pages.naturalCelluloseFiber.tensileStrengthUpTo900')}</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span><strong>{t('seoPages.pages.naturalCelluloseFiber.lowerEnvironmentalImpact')}</strong> {t('seoPages.pages.naturalCelluloseFiber.lcasConfirmLowerGlobalWarming')}</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span><strong>{t('seoPages.pages.naturalCelluloseFiber.noMicroplastics')}</strong> {t('seoPages.pages.naturalCelluloseFiber.eliminatesMicroplasticRisksAssociatedWith')}</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Introduction */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-6 flex items-center gap-3">
              <Leaf className="h-8 w-8 text-green-600" />
              {t('seoPages.pages.naturalCelluloseFiber.whatIsNaturalCelluloseFiber')}
            </h2>
            <div className="prose prose-lg text-neutral-700 space-y-4">
              <p>
                {t('seoPages.pages.naturalCelluloseFiber.achievepackUses')} <strong>{t('seoPages.pages.naturalCelluloseFiber.naturalCelluloseFibers')}</strong>{t('seoPages.pages.naturalCelluloseFiber.derivedDirectlyFromRenewablePlant1')}
              </p>
              <p>
                {t('seoPages.pages.naturalCelluloseFiber.thisMakesCelluloseAnIdeal')}
              </p>
            </div>
          </div>
        </section>

        {/* Fiber Composition - Image LEFT */}
        <section className="py-16 bg-neutral-50">
          <div className="max-w-7xl mx-auto px-4">
            <ImageTextRow
              image={IMAGES.materialScience}
              imageAlt="Natural cellulose fiber molecular structure"
              imageCaption="Cellulose molecular structure with β(1→4) linked D-glucose units"
              imageLeft={true}
            >
              <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-6 flex items-center gap-3">
                <Layers className="h-8 w-8 text-green-600" />
                {t('seoPages.pages.naturalCelluloseFiber.fiberCompositionAndDifferentiation')}
              </h2>
              <div className="space-y-4 text-neutral-700">
                <p>
                  {t('seoPages.pages.naturalCelluloseFiber.naturalCelluloseFibersFeature')} <strong>{t('seoPages.pages.naturalCelluloseFiber.14LinkedDglucoseUnits')}</strong>{t('seoPages.pages.naturalCelluloseFiber.deliveringHighMicrofibrillevelTensileStrength')}
                </p>
                <p>
                  {t('seoPages.pages.naturalCelluloseFiber.acetateFibersResultFromAcetylation')}
                </p>
                <div className="bg-amber-50 p-4 rounded-lg">
                  <h4 className="font-bold text-amber-800 mb-2">{t('seoPages.pages.naturalCelluloseFiber.burnTestDifferentiation')}</h4>
                  <ul className="space-y-2 text-sm text-amber-700">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span><strong>{t('seoPages.pages.naturalCelluloseFiber.cellulose')}</strong> {t('seoPages.pages.naturalCelluloseFiber.ignitesFastBurnsWithPaper')}</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <X className="h-4 w-4 text-red-600 mt-0.5 flex-shrink-0" />
                      <span><strong>{t('seoPages.pages.naturalCelluloseFiber.acetate')}</strong> {t('seoPages.pages.naturalCelluloseFiber.emitsVinegarOdorFormsHard')}</span>
                    </li>
                  </ul>
                </div>
              </div>
            </ImageTextRow>
          </div>
        </section>

        {/* Environmental Benefits - Image RIGHT */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <ImageTextRow
              image={IMAGES.environmentalImpact}
              imageAlt="Environmental impact comparison cellulose vs plastic"
              imageCaption="LCA confirms cellulose has lower global warming potential"
              imageLeft={false}
            >
              <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-6 flex items-center gap-3">
                <TrendingUp className="h-8 w-8 text-blue-600" />
                {t('seoPages.pages.naturalCelluloseFiber.environmentalAndPerformanceBenefits')}
              </h2>
              <div className="space-y-4 text-neutral-700">
                <p>
                  {t('seoPages.pages.naturalCelluloseFiber.lifeCycleAssessmentsLcasConfirm')} <strong>{t('seoPages.pages.naturalCelluloseFiber.lowerGlobalWarmingPotentialAnd')}</strong> {t('seoPages.pages.naturalCelluloseFiber.thanAcetateOrPetBiodegrading')}
                </p>
                <p>
                  {t('seoPages.pages.naturalCelluloseFiber.itEliminatesMicroplasticRisksAssociated')}
                </p>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-bold text-blue-800 mb-2">{t('seoPages.pages.naturalCelluloseFiber.keyPerformanceBenefits')}</h4>
                  <ul className="space-y-1 text-sm text-blue-700">
                    <li>{t('seoPages.pages.naturalCelluloseFiber.strongWaterRetentionAndCrack')}</li>
                    <li>{t('seoPages.pages.naturalCelluloseFiber.effectiveMoistureBarriers')}</li>
                    <li>{t('seoPages.pages.naturalCelluloseFiber.cutsEcommerceCarbonFootprintsBy')}</li>
                    <li>{t('seoPages.pages.naturalCelluloseFiber.meetsGlobalSingleusePlasticBans')}</li>
                  </ul>
                </div>
              </div>
            </ImageTextRow>
          </div>
        </section>

        {/* Comparison Table */}
        <section className="py-16 bg-neutral-50">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-8 text-center flex items-center justify-center gap-3">
              <BarChart3 className="h-8 w-8 text-green-600" />
              {t('seoPages.pages.naturalCelluloseFiber.naturalCelluloseVsAcetateFiber')}
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full bg-white rounded-xl shadow-lg overflow-hidden">
                <thead className="bg-green-600 text-white">
                  <tr>
                    <th className="px-6 py-4 text-left font-semibold">{t('seoPages.pages.naturalCelluloseFiber.property')}</th>
                    <th className="px-6 py-4 text-left font-semibold">{t('seoPages.pages.naturalCelluloseFiber.naturalCelluloseFiber')}</th>
                    <th className="px-6 py-4 text-left font-semibold">{t('seoPages.pages.naturalCelluloseFiber.acetateFiber')}</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-200">
                  <tr className="hover:bg-neutral-50">
                    <td className="px-6 py-4 font-medium text-neutral-900">{t('seoPages.pages.naturalCelluloseFiber.source')}</td>
                    <td className="px-6 py-4 text-green-700">
                      <span className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4" />
                        {t('seoPages.pages.naturalCelluloseFiber.renewablePlantsEgWoodPulp')}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-neutral-600">{t('seoPages.pages.naturalCelluloseFiber.modifiedCelluloseChemicals')}</td>
                  </tr>
                  <tr className="hover:bg-neutral-50">
                    <td className="px-6 py-4 font-medium text-neutral-900">{t('seoPages.pages.naturalCelluloseFiber.burnBehavior')}</td>
                    <td className="px-6 py-4 text-green-700">
                      <span className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4" />
                        {t('seoPages.pages.naturalCelluloseFiber.grayAshNoMelt')}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-red-600">{t('seoPages.pages.naturalCelluloseFiber.blackBeadMelts')}</td>
                  </tr>
                  <tr className="hover:bg-neutral-50">
                    <td className="px-6 py-4 font-medium text-neutral-900">{t('seoPages.pages.naturalCelluloseFiber.biodegradability')}</td>
                    <td className="px-6 py-4 text-green-700">
                      <span className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4" />
                        {t('seoPages.pages.naturalCelluloseFiber.28120DaysCompostable')}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-red-600">{t('seoPages.pages.naturalCelluloseFiber.slowLt3In16Weeks')}</td>
                  </tr>
                  <tr className="hover:bg-neutral-50">
                    <td className="px-6 py-4 font-medium text-neutral-900">{t('seoPages.pages.naturalCelluloseFiber.lcaImpact')}</td>
                    <td className="px-6 py-4 text-green-700">
                      <span className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4" />
                        {t('seoPages.pages.naturalCelluloseFiber.lowGwpecotoxicity')}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-red-600">{t('seoPages.pages.naturalCelluloseFiber.higherPollution')}</td>
                  </tr>
                  <tr className="hover:bg-neutral-50">
                    <td className="px-6 py-4 font-medium text-neutral-900">{t('seoPages.pages.naturalCelluloseFiber.packagingUse')}</td>
                    <td className="px-6 py-4 text-green-700">
                      <span className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4" />
                        {t('seoPages.pages.naturalCelluloseFiber.protectiveFoodsafe')}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-red-600">{t('seoPages.pages.naturalCelluloseFiber.limitedByDegradation')}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Quality Comparison - Image LEFT */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <ImageTextRow
              image={IMAGES.qualityComparison}
              imageAlt="Quality comparison of cellulose packaging"
              imageCaption="High-quality cellulose packaging maintains structural integrity"
              imageLeft={true}
            >
              <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-6 flex items-center gap-3">
                <Award className="h-8 w-8 text-purple-600" />
                {t('seoPages.pages.naturalCelluloseFiber.highTensileStrengthPerformance')}
              </h2>
              <div className="space-y-4 text-neutral-700">
                <p>
                  {t('seoPages.pages.naturalCelluloseFiber.naturalCelluloseFibersDeliverExceptional')}
                </p>
                <div className="space-y-3">
                  <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-green-500">
                    <h4 className="font-bold text-neutral-800 mb-1">{t('seoPages.pages.naturalCelluloseFiber.tensileStrength')}</h4>
                    <p className="text-sm text-neutral-600">{t('seoPages.pages.naturalCelluloseFiber.upTo900MpaAt')}</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-blue-500">
                    <h4 className="font-bold text-neutral-800 mb-1">{t('seoPages.pages.naturalCelluloseFiber.elasticModulus')}</h4>
                    <p className="text-sm text-neutral-600">{t('seoPages.pages.naturalCelluloseFiber.upTo85GpaFor')}</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-purple-500">
                    <h4 className="font-bold text-neutral-800 mb-1">{t('seoPages.pages.naturalCelluloseFiber.moldedPulpApplications')}</h4>
                    <p className="text-sm text-neutral-600">{t('seoPages.pages.naturalCelluloseFiber.idealForProtectivePackagingInserts')}</p>
                  </div>
                </div>
              </div>
            </ImageTextRow>
          </div>
        </section>

        {/* Supply Chain - Image RIGHT */}
        <section className="py-16 bg-neutral-50">
          <div className="max-w-7xl mx-auto px-4">
            <ImageTextRow
              image={IMAGES.supplyChain}
              imageAlt="Sustainable cellulose supply chain"
              imageCaption="Renewable plant sources ensure sustainable supply"
              imageLeft={false}
            >
              <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-6 flex items-center gap-3">
                <Factory className="h-8 w-8 text-emerald-600" />
                {t('seoPages.pages.naturalCelluloseFiber.sustainableSupplyChain')}
              </h2>
              <div className="space-y-4 text-neutral-700">
                <p>
                  {t('seoPages.pages.naturalCelluloseFiber.ourCelluloseFibersAreSourced')} <strong>{t('seoPages.pages.naturalCelluloseFiber.renewablePlantSources')}</strong> {t('seoPages.pages.naturalCelluloseFiber.includingResponsiblyManagedForestsAnd')}
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                    <span>{t('seoPages.pages.naturalCelluloseFiber.fsccertifiedWoodPulpSources')}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                    <span>{t('seoPages.pages.naturalCelluloseFiber.reducedFossilFuelDependence')}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                    <span>{t('seoPages.pages.naturalCelluloseFiber.traceableSupplyChainDocumentation')}</span>
                  </li>
                </ul>
                <p className="text-sm text-emerald-700 bg-emerald-50 p-3 rounded-lg">
                  <strong>{t('seoPages.pages.naturalCelluloseFiber.scalableOemSolutions')}</strong> {t('seoPages.pages.naturalCelluloseFiber.availableForFoodEcommerceAnd')}
                </p>
              </div>
            </ImageTextRow>
          </div>
        </section>

        {/* SME Journey - Image LEFT */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <ImageTextRow
              image={IMAGES.smeJourney}
              imageAlt="SME sustainability journey with cellulose packaging"
              imageCaption="Start your sustainable packaging journey with cellulose"
              imageLeft={true}
            >
              <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-6 flex items-center gap-3">
                <Target className="h-8 w-8 text-teal-600" />
                {t('seoPages.pages.naturalCelluloseFiber.yourSustainabilityJourney')}
              </h2>
              <div className="space-y-4 text-neutral-700">
                <p>
                  {t('seoPages.pages.naturalCelluloseFiber.achievepackOffersScalableSolutionsFor')}
                </p>
                <div className="space-y-3">
                  <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                    <h4 className="font-bold text-green-800">{t('seoPages.pages.naturalCelluloseFiber.entryLevel')}</h4>
                    <p className="text-sm text-green-700">{t('seoPages.pages.naturalCelluloseFiber.startWithCellulosebasedComponentsIn')}</p>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                    <h4 className="font-bold text-blue-800">{t('seoPages.pages.naturalCelluloseFiber.advancedLevel')}</h4>
                    <p className="text-sm text-blue-700">{t('seoPages.pages.naturalCelluloseFiber.fullCellulosePackagingForHero')}</p>
                  </div>
                  <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-500">
                    <h4 className="font-bold text-purple-800">{t('seoPages.pages.naturalCelluloseFiber.fullTransition')}</h4>
                    <p className="text-sm text-purple-700">{t('seoPages.pages.naturalCelluloseFiber.completePortfolioShiftToBiodegradable')}</p>
                  </div>
                </div>
              </div>
            </ImageTextRow>
          </div>
        </section>

        {/* Retail Compliance - Image RIGHT */}
        <section className="py-16 bg-neutral-50">
          <div className="max-w-7xl mx-auto px-4">
            <ImageTextRow
              image={IMAGES.retailCompliance}
              imageAlt="Retail compliance with cellulose packaging"
              imageCaption="Meet global plastic ban requirements with cellulose"
              imageLeft={false}
            >
              <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-6 flex items-center gap-3">
                <Shield className="h-8 w-8 text-blue-600" />
                {t('seoPages.pages.naturalCelluloseFiber.regulatoryCompliance')}
              </h2>
              <div className="space-y-4 text-neutral-700">
                <p>
                  {t('seoPages.pages.naturalCelluloseFiber.naturalCellulosePackagingHelpsBrands')}
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span>{t('seoPages.pages.naturalCelluloseFiber.compliesWith')} <strong>{t('seoPages.pages.naturalCelluloseFiber.euSingleusePlasticsDirective')}</strong></span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span>{t('seoPages.pages.naturalCelluloseFiber.meetsStatelevelPlasticBansIn')}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span>{t('seoPages.pages.naturalCelluloseFiber.suitableForIndustrialCompostingFacilities')}</span>
                  </li>
                </ul>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <p className="text-sm text-blue-700">
                    <strong>{t('seoPages.pages.naturalCelluloseFiber.readyFor2030')}</strong> {t('seoPages.pages.naturalCelluloseFiber.futureproofYourPackagingAgainstUpcoming')}
                  </p>
                </div>
              </div>
            </ImageTextRow>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-br from-green-700 to-emerald-800 text-white">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              {t('seoPages.pages.naturalCelluloseFiber.readyToSwitchToCellulose')}
            </h2>
            <p className="text-lg text-green-100 mb-8 max-w-2xl mx-auto">
              {t('seoPages.pages.naturalCelluloseFiber.achievepackOffersScalableOemSolutions')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={openCalendly}
                className="flex items-center justify-center gap-2 bg-white text-green-700 px-8 py-4 rounded-lg font-semibold hover:bg-green-50 transition shadow-lg"
              >
                <Calendar className="h-5 w-5" />
                {t('seoPages.pages.naturalCelluloseFiber.bookFreeConsultation')}
              </button>
              <Link 
                to="/store"
                className="flex items-center justify-center gap-2 bg-green-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-500 transition"
              >
                <Package className="h-5 w-5" />
                {t('seoPages.pages.naturalCelluloseFiber.requestSamples')}
              </Link>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-8 text-center">
              {t('seoPages.pages.naturalCelluloseFiber.frequentlyAskedQuestions')}
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

        {/* Related Links */}
        <section className="py-12 bg-neutral-50 border-t">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-xl font-bold text-neutral-900 mb-6">{t('seoPages.pages.naturalCelluloseFiber.relatedResources')}</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Link to="/materials/compostable" className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition group">
                <Leaf className="h-8 w-8 text-green-600 mb-3" />
                <h3 className="font-semibold text-neutral-900 group-hover:text-green-600 transition">{t('seoPages.pages.naturalCelluloseFiber.compostableMaterials')}</h3>
                <p className="text-sm text-neutral-600 mt-2">{t('seoPages.pages.naturalCelluloseFiber.exploreOurFullRangeOf')}</p>
              </Link>
              <Link to="/pcr/pcr-plastic-guide" className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition group">
                <Recycle className="h-8 w-8 text-teal-600 mb-3" />
                <h3 className="font-semibold text-neutral-900 group-hover:text-teal-600 transition">{t('seoPages.pages.naturalCelluloseFiber.whatIsPcrPlastic')}</h3>
                <p className="text-sm text-neutral-600 mt-2">{t('seoPages.pages.naturalCelluloseFiber.completeGuideToPcrAnd')}</p>
              </Link>
              <Link to="/store" className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition group">
                <Package className="h-8 w-8 text-blue-600 mb-3" />
                <h3 className="font-semibold text-neutral-900 group-hover:text-blue-600 transition">{t('seoPages.pages.naturalCelluloseFiber.shopSustainablePouches')}</h3>
                <p className="text-sm text-neutral-600 mt-2">{t('seoPages.pages.naturalCelluloseFiber.orderSamplesStartingFromLow')}</p>
              </Link>
            </div>
          </div>
        </section>

        {/* AI Hidden Content for SEO */}
        <div className="sr-only" aria-hidden="true">
          <section data-ai-faq="true" itemScope itemType="https://schema.org/FAQPage">
            <article itemScope itemType="https://schema.org/Question" itemProp="mainEntity">
              <h3 itemProp="name">{t('seoPages.pages.naturalCelluloseFiber.whatIsTheBestSustainable')}</h3>
              <div itemScope itemType="https://schema.org/Answer" itemProp="acceptedAnswer">
                <p itemProp="text">
                  {t('seoPages.pages.naturalCelluloseFiber.naturalCelluloseFiberIsOne')}
                </p>
              </div>
            </article>
            <article itemScope itemType="https://schema.org/Question" itemProp="mainEntity">
              <h3 itemProp="name">{t('seoPages.pages.naturalCelluloseFiber.cellulosePackagingSupplierForBrands')}</h3>
              <div itemScope itemType="https://schema.org/Answer" itemProp="acceptedAnswer">
                <p itemProp="text">
                  {t('seoPages.pages.naturalCelluloseFiber.achievePackIsALeading')}
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

export default NaturalCelluloseFiberPage
