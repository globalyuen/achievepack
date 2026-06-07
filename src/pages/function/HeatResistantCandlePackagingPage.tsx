import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Zap, Shield, Thermometer, Package, Droplets, Maximize, ArrowRight, Leaf, CheckCircle, Calendar, Mail, X, ChevronLeft, ChevronRight, Award, Users, Globe, FileCheck, Building2, Sparkles, Database, LayoutPanelTop, SearchCheck } from 'lucide-react'
import SEOPageLayout from '../../components/SEOPageLayout'
import { Link } from 'react-router-dom'
import { useCalendly } from '../../contexts/CalendlyContext'
import { getDomain } from '../../utils/domain'
import BlogArticleTemplate from '../../components/pouch/BlogArticleTemplate'

// Gallery images for Candle Wax Packaging



const HeatResistantCandlePackagingPage: React.FC = () => {
  const { t } = useTranslation()

  const candleGallery = [
  { src: '/imgs/function/heat-resistant-candle-hero.png', title: t('seoPages.pages.heatResistantCandlePackaging.title_highheatCompostableCandlePouch'), desc: t('seoPages.pages.heatResistantCandlePackaging.desc_capableOfHandling85cHot') },
  { src: '/imgs/spec/pcr-pet-kraft-triplex-clear.webp', title: t('seoPages.pages.heatResistantCandlePackaging.title_nkkraftpbsTriplexStructure'), desc: t('seoPages.pages.heatResistantCandlePackaging.desc_natureflexNkFscKraftPaper') },
]


  const { openCalendly } = useCalendly()
  const [galleryEnlarged, setGalleryEnlarged] = useState<{ src: string; index: number } | null>(null)
  
  const isPouchDomain = getDomain() === 'pouch'

  const visualBreadcrumbsAndLabels = (
    <div className="space-y-3">
      {/* Visual Breadcrumb Navigation */}
      <div className="flex flex-wrap items-center gap-1.5 text-[10px] sm:text-xs font-semibold text-neutral-300/90 uppercase tracking-wider">
        <Link to="/" className="hover:text-white transition">Home</Link>
        <span className="text-neutral-400">/</span>
        <Link to="/materials" className="hover:text-white transition">Eco-Friendly Materials</Link>
        <span className="text-neutral-400">/</span>
        <span className="text-[#10b981] font-bold">Heat-Resistant Candle Bags</span>
      </div>

      {/* Visual Badges & Switch Link */}
      <div className="flex flex-wrap items-center gap-2">
        <span className="inline-flex items-center gap-1 px-2.5 py-0.5 text-[10px] font-bold bg-[#10b981] text-white rounded-full uppercase tracking-wider shadow-sm">
          🌱 Certified Eco friendly
        </span>
        <Link 
          to="/products/compostable-side-gusset-bags" 
          className="inline-flex items-center gap-1 px-2.5 py-0.5 text-[10px] font-bold bg-white/10 hover:bg-white/20 text-white rounded-full transition border border-white/20 uppercase tracking-wider"
        >
          🔄 View Compostable Gusset Bags →
        </Link>
      </div>
    </div>
  )

  const navigateGallery = (direction: 'prev' | 'next') => {
    if (!galleryEnlarged) return
    let newIndex = direction === 'prev' ? galleryEnlarged.index - 1 : galleryEnlarged.index + 1
    if (newIndex < 0) newIndex = candleGallery.length - 1
    if (newIndex >= candleGallery.length) newIndex = 0
    setGalleryEnlarged({ src: candleGallery[newIndex].src, index: newIndex })
  }

  const AlternatingSection = ({ 
    image, 
    imageAlt, 
    title, 
    content, 
    imageLeft = true,
    index
  }: { 
    image: string
    imageAlt: string
    title: string
    content: string | React.ReactNode
    imageLeft?: boolean
    index: number
  }) => (
    <div className={`grid md:grid-cols-2 gap-8 items-center ${!imageLeft ? 'md:flex-row-reverse' : ''}`}>
      {imageLeft ? (
        <>
          <button 
            onClick={() => setGalleryEnlarged({ src: image, index })}
            className="block rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow cursor-pointer group"
          >
            <img src={image} alt={imageAlt} className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-300" />
            <div className="bg-neutral-100 px-3 py-2 text-xs text-neutral-500 text-center">Click to enlarge</div>
          </button>
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-neutral-900">{title}</h3>
            <div className="text-neutral-700">{content}</div>
          </div>
        </>
      ) : (
        <>
          <div className="space-y-4 md:order-1">
            <h3 className="text-xl font-bold text-neutral-900">{title}</h3>
            <div className="text-neutral-700">{content}</div>
          </div>
          <button 
            onClick={() => setGalleryEnlarged({ src: image, index })}
            className="block rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow cursor-pointer group md:order-2"
          >
            <img src={image} alt={imageAlt} className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-300" />
            <div className="bg-neutral-100 px-3 py-2 text-xs text-neutral-500 text-center">Click to enlarge</div>
          </button>
        </>
      )}
    </div>
  )
  
  const sections = [
    {
      id: 'the-challenge',
      title: t('seoPages.pages.heatResistantCandlePackaging.title_theHighheatPouchChallenge'),
      icon: <Thermometer className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-8">
          <div className="bg-amber-50 p-6 rounded-lg border border-amber-200">
            <p className="text-lg font-medium text-neutral-900 mb-4">
              <strong>{t('seoPages.pages.heatResistantCandlePackaging.canCompostableBagsHandleHot')}</strong> {t('seoPages.pages.heatResistantCandlePackaging.mostEcofriendlyMaterialsFailAt')}
            </p>
          </div>
          
          <AlternatingSection
            image="/imgs/function/heat-resistant-candle-hero.png"
            imageAlt="Hot wax pouring into compostable pouch"
            title={t('seoPages.pages.heatResistantCandlePackaging.title_engineeredFor85cPerformance')}
            content="Pouring 284g of hardened candle wax at 85°C requires more than just a bag—it requires material excellence. Conventional compostable films like standard PLA soften and leak when exposed to heat. Our high-heat pouches utilize advanced PBS (Polybutylene succinate) or NatureFlex cellulose to ensure the bag holds its shape, seal, and integrity throughout the pouring and cooling process."
            imageLeft={true}
            index={0}
          />
        </div>
      )
    },
    {
      id: 'material-science',
      title: t('seoPages.pages.heatResistantCandlePackaging.title_materialScienceNatureflexPbs'),
      icon: <Shield className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-8">
          <div className="prose prose-sm max-w-none text-neutral-700">
            <p>
              {t('seoPages.pages.heatResistantCandlePackaging.toAchieve85cMicrowaveAnd')}
            </p>
            <ul className="space-y-2">
              <li><strong>{t('seoPages.pages.heatResistantCandlePackaging.natureflexNkOuterLayer')}</strong> {t('seoPages.pages.heatResistantCandlePackaging.aWoodpulpBasedCelluloseThat')}</li>
              <li><strong>{t('seoPages.pages.heatResistantCandlePackaging.fscKraftPaperMiddleLayer')}</strong> {t('seoPages.pages.heatResistantCandlePackaging.providesTheStructuralBackboneAnd')}</li>
              <li><strong>{t('seoPages.pages.heatResistantCandlePackaging.highheatPbsSealant')}</strong> {t('seoPages.pages.heatResistantCandlePackaging.ourBiobasedPolybutyleneSuccinateCan')}</li>
            </ul>

          </div>

          <AlternatingSection
            image="/imgs/spec/pcr-pet-kraft-triplex-clear.webp"
            imageAlt="NK / Kraft Paper / PBS Structure"
            title={t('seoPages.pages.heatResistantCandlePackaging.title_nkKraftPaperPbsTriplex')}
            content="This 100% compostable bio-structure is specifically engineered for the candle industry. The NK layer handles the heat, the Kraft paper adds rigidity, and the PBS ensures a fail-safe seal even when pouring heavy, hot wax. It's the ultimate plastic-free alternative to traditional glass jars."
            imageLeft={false}
            index={1}
          />

        </div>
      )
    },
    {
      id: 'low-moq',
      title: t('seoPages.pages.heatResistantCandlePackaging.title_digitalPrintingLowMoqStrategy'),
      icon: <Sparkles className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-6">
          <p className="text-neutral-700">
            {t('seoPages.pages.heatResistantCandlePackaging.startupCandleBrandsOftenFace')}
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white border-2 border-primary-200 p-5 rounded-xl shadow-sm">
              <LayoutPanelTop className="h-6 w-6 text-primary-600 mb-3" />
              <h4 className="font-bold text-neutral-900 mb-2">{t('seoPages.pages.heatResistantCandlePackaging.digitalPrintingLowMoq')}</h4>
              <ul className="text-sm space-y-1 text-neutral-600">
                <li>{t('seoPages.pages.heatResistantCandlePackaging.moq1000TotalEg6')}</li>
                <li>{t('seoPages.pages.heatResistantCandlePackaging.noPlateCosts')}</li>
                <li>{t('seoPages.pages.heatResistantCandlePackaging.highresolutionPhotoQuality')}</li>
                <li>{t('seoPages.pages.heatResistantCandlePackaging.fast23WeekLeadTime')}</li>
              </ul>
            </div>
            <div className="bg-neutral-50 border border-neutral-200 p-5 rounded-xl">
              <Database className="h-6 w-6 text-neutral-400 mb-3" />
              <h4 className="font-bold text-neutral-900 mb-2">{t('seoPages.pages.heatResistantCandlePackaging.cylinderPrintingHighVolume')}</h4>
              <ul className="text-sm space-y-1 text-neutral-500">
                <li>{t('seoPages.pages.heatResistantCandlePackaging.moq5000PerDesign')}</li>
                <li>{t('seoPages.pages.heatResistantCandlePackaging.initialPlateCost150250Per')}</li>
                <li>{t('seoPages.pages.heatResistantCandlePackaging.lowestUnitPriceForMass')}</li>
                <li>{t('seoPages.pages.heatResistantCandlePackaging.45WeekLeadTime')}</li>
              </ul>
            </div>
          </div>
          <p className="text-sm italic text-neutral-500">
            {t('seoPages.pages.heatResistantCandlePackaging.for1070UnitsAcross6')}
          </p>
        </div>
      )
    },
    {
      id: 'supplier-insights',
      title: t('seoPages.pages.heatResistantCandlePackaging.title_ourProprietarySupplyProtocol'),
      icon: <SearchCheck className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-8">
          <div className="bg-primary-50 p-8 rounded-xl border-4 border-primary-900 shadow-xl">
            <h3 className="text-2xl font-black text-neutral-900 mb-4 uppercase tracking-tight">{t('seoPages.pages.heatResistantCandlePackaging.ourIntegratedSolutionNetwork')}</h3>
            <p className="text-neutral-700 mb-6">
              {t('seoPages.pages.heatResistantCandlePackaging.findingTheRightPouchFor')}
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-4 border-2 border-primary-200 rounded-lg">
                <h4 className="font-bold text-neutral-900 mb-1 italic underline decoration-primary-500 decoration-4">{t('seoPages.pages.heatResistantCandlePackaging.theBoutiqueSpecialist')}</h4>
                <p className="text-sm text-neutral-600">{t('seoPages.pages.heatResistantCandlePackaging.perfectFor1000UnitLaunches')}</p>
              </div>
              <div className="bg-white p-4 border-2 border-primary-200 rounded-lg">
                <h4 className="font-bold text-neutral-900 mb-1 italic underline decoration-primary-500 decoration-4">{t('seoPages.pages.heatResistantCandlePackaging.theHighvolumePartner')}</h4>
                <p className="text-sm text-neutral-600">{t('seoPages.pages.heatResistantCandlePackaging.forEstablishedBrandsWeLeverage')}</p>
              </div>
            </div>
          </div>
          <div className="bg-neutral-100 p-6 rounded-lg text-sm leading-relaxed text-neutral-700 mt-6 border-l-8 border-neutral-900">
            <strong>{t('seoPages.pages.heatResistantCandlePackaging.theAchievePackAdvantage')}</strong> {t('seoPages.pages.heatResistantCandlePackaging.weRemoveTheRiskOf')}
          </div>
        </div>
      )
    },
    {
      id: 'knowhow',
      title: t('seoPages.pages.heatResistantCandlePackaging.title_ourKnowledgeWhyTheSeal'),
      icon: <Award className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-6">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="space-y-2">
              <h4 className="font-bold flex items-center gap-2 text-neutral-900">
                <CheckCircle className="h-4 w-4 text-green-600" />
                {t('seoPages.pages.heatResistantCandlePackaging.gussetReinforcement')}
              </h4>
              <p className="text-xs text-neutral-600">{t('seoPages.pages.heatResistantCandlePackaging.liquidCandleWaxIsHeavy')}</p>
            </div>
            <div className="space-y-2">
              <h4 className="font-bold flex items-center gap-2 text-neutral-900">
                <CheckCircle className="h-4 w-4 text-green-600" />
                {t('seoPages.pages.heatResistantCandlePackaging.shrinkageTension')}
              </h4>
              <p className="text-xs text-neutral-600">{t('seoPages.pages.heatResistantCandlePackaging.asWaxCoolsItShrinks')}</p>
            </div>
            <div className="space-y-2">
              <h4 className="font-bold flex items-center gap-2 text-neutral-900">
                <CheckCircle className="h-4 w-4 text-green-600" />
                {t('seoPages.pages.heatResistantCandlePackaging.microwaveStability')}
              </h4>
              <p className="text-xs text-neutral-600">{t('seoPages.pages.heatResistantCandlePackaging.forCustomersWhoMeltWax')}</p>
            </div>
          </div>
          <div className="bg-primary-900 text-white p-6 rounded-xl">
            <p className="text-sm leading-relaxed italic">
              {t('seoPages.pages.heatResistantCandlePackaging.weDontJustSellBags')} 
              <br/>{t('seoPages.pages.heatResistantCandlePackaging.achievePackEngineeringTeam')}
            </p>
          </div>
        </div>
      )
    },
    {
      id: 'trust-eeat',
      title: t('seoPages.pages.heatResistantCandlePackaging.title_whyTrustAchievePack'),
      icon: <Award className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-8">
          <div className="bg-gradient-to-r from-primary-50 to-green-50 p-6 rounded-xl border border-primary-200">
            <h3 className="text-xl font-bold text-neutral-900 mb-4">{t('seoPages.pages.heatResistantCandlePackaging.foodgradePackagingExpertsSince2011')}</h3>
            <p className="text-neutral-700 mb-4">
              {t('seoPages.pages.heatResistantCandlePackaging.achievePackHasBeenManufacturing')}
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-4">
            <div className="bg-white border border-neutral-200 p-4 rounded-lg text-center">
              <FileCheck className="h-8 w-8 text-green-600 mx-auto mb-2" />
              <h4 className="font-semibold text-neutral-800">{t('seoPages.pages.heatResistantCandlePackaging.fdaCompliant')}</h4>
              <p className="text-xs text-neutral-500">{t('seoPages.pages.heatResistantCandlePackaging.foodContactApproved')}</p>
            </div>
            <div className="bg-white border border-neutral-200 p-4 rounded-lg text-center">
              <Building2 className="h-8 w-8 text-green-600 mx-auto mb-2" />
              <h4 className="font-semibold text-neutral-800">{t('seoPages.pages.heatResistantCandlePackaging.brcCertified')}</h4>
              <p className="text-xs text-neutral-500">{t('seoPages.pages.heatResistantCandlePackaging.foodSafetyStandard')}</p>
            </div>
            <div className="bg-white border border-neutral-200 p-4 rounded-lg text-center">
              <Globe className="h-8 w-8 text-green-600 mx-auto mb-2" />
              <h4 className="font-semibold text-neutral-800">{t('seoPages.pages.heatResistantCandlePackaging.500Brands')}</h4>
              <p className="text-xs text-neutral-500">{t('seoPages.pages.heatResistantCandlePackaging.trustedWorldwide')}</p>
            </div>
            <div className="bg-white border border-neutral-200 p-4 rounded-lg text-center">
              <Users className="h-8 w-8 text-green-600 mx-auto mb-2" />
              <h4 className="font-semibold text-neutral-800">{t('seoPages.pages.heatResistantCandlePackaging.13Years')}</h4>
              <p className="text-xs text-neutral-500">{t('seoPages.pages.heatResistantCandlePackaging.industryExperience')}</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'cta',
      title: t('seoPages.pages.heatResistantCandlePackaging.title_readyToPackYourCandles'),
      icon: <Shield className="h-5 w-5 text-white" />,
      content: (
        <div className="bg-gradient-to-br from-neutral-900 to-neutral-800 text-white p-8 rounded-xl shadow-2xl">
          <h3 className="text-2xl font-bold mb-6 text-center">{t('seoPages.pages.heatResistantCandlePackaging.getYourHighheatSampleKit')}</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white/10 backdrop-blur p-6 rounded-lg text-center border border-white/20">
              <Calendar className="h-8 w-8 mx-auto mb-3" />
              <h4 className="font-semibold mb-2">{t('seoPages.pages.heatResistantCandlePackaging.technicalConsultation')}</h4>
              <p className="text-sm text-white/80 mb-4">{t('seoPages.pages.heatResistantCandlePackaging.discussMaterialCompatibilityWithYour')}</p>
              <button onClick={openCalendly} className="w-full bg-primary-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-primary-700 transition cursor-pointer">
                {t('seoPages.pages.heatResistantCandlePackaging.scheduleNow')}
              </button>
            </div>
            <div className="bg-white/10 backdrop-blur p-6 rounded-lg text-center border border-white/20">
              <Mail className="h-8 w-8 mx-auto mb-3" />
              <h4 className="font-semibold mb-2">{t('seoPages.pages.heatResistantCandlePackaging.requestQuote')}</h4>
              <p className="text-sm text-white/80 mb-4">{t('seoPages.pages.heatResistantCandlePackaging.getADetailedBreakdownFor')}</p>
              <a href="mailto:ryan@achievepack.com?subject=Heat-Resistant Candle Pouch Inquiry" className="block w-full bg-white text-neutral-900 px-4 py-2 rounded-lg font-semibold hover:bg-neutral-100 transition">
                {t('seoPages.pages.heatResistantCandlePackaging.sendEmail')}
              </a>
            </div>
          </div>
        </div>
      )
    }
  ]

  const faqs = [
    {
      question: t('seoPages.pages.heatResistantCandlePackaging.question_canIPour85cHot'),
      answer: t('seoPages.pages.heatResistantCandlePackaging.answer_yesOurSpecificNatureflexpbsTriplex')
    },
    {
      question: t('seoPages.pages.heatResistantCandlePackaging.question_whatIsTheMinimumOrder'),
      answer: t('seoPages.pages.heatResistantCandlePackaging.answer_withDigitalPrintingWeCan')
    },
    {
      question: t('seoPages.pages.heatResistantCandlePackaging.question_areTheseBags100Compostable'),
      answer: t('seoPages.pages.heatResistantCandlePackaging.answer_absolutelyAllMaterialsUsedincludingThe')
    },
    {
      question: t('seoPages.pages.heatResistantCandlePackaging.question_doINeedToPay'),
      answer: t('seoPages.pages.heatResistantCandlePackaging.answer_notWithDigitalPrintingWe')
    },
    {
      question: t('seoPages.pages.heatResistantCandlePackaging.question_willTheFragranceEssentialOils'),
      answer: t('seoPages.pages.heatResistantCandlePackaging.answer_noThePbsBarrierLayer')
    }
  ]

  const relatedLinks = [
    { title: t('seoPages.pages.heatResistantCandlePackaging.title_compostablePouches'), url: "/materials/compostable", description: t('seoPages.pages.heatResistantCandlePackaging.description_learnAboutOurRangeOf') },
    { title: t('seoPages.pages.heatResistantCandlePackaging.title_digitalPrintingSolutions'), url: "/printing/digital", description: t('seoPages.pages.heatResistantCandlePackaging.description_lowMoqNoPlateFees') },
    { title: t('seoPages.pages.heatResistantCandlePackaging.title_standUpPouches'), url: "/packaging/stand-up-pouches", description: t('seoPages.pages.heatResistantCandlePackaging.description_classicDoypackStyleForCandles') },
    { title: t('seoPages.pages.heatResistantCandlePackaging.title_highbarrierMaterials'), url: "/features/barrier-options", description: t('seoPages.pages.heatResistantCandlePackaging.description_protectingYourFragranceIntegrity') },
  ]

  if (isPouchDomain) {
    return (
      <BlogArticleTemplate
        title={t('seoPages.pages.heatResistantCandlePackaging.title_highheatCompostableCandleWaxPouches')}
        metaDescription={t('seoPages.pages.heatResistantCandlePackaging.metaDescription')}
        canonicalUrl="https://pouch.eco/function/heat-resistant-compostable-pouches"
        keywords={['compostable candle bags', 'heat resistant candle pouches', 'wax pour pouches', 'PBS pouches', 'NatureFlex candle bags']}
        publishedDate="2026-05-27"
        modifiedDate="2026-05-27"
        author="POUCH.ECO Editorial Team"
        heroTitle={
          <div className="space-y-4">
            {/* Neo-brutalist Breadcrumb Navigation */}
            <div className="flex flex-wrap items-center gap-2 font-['JetBrains_Mono'] text-xs font-black uppercase text-black">
              <Link to="/" className="hover:bg-[#D4FF00] px-1 py-0.5 border border-black transition">Home</Link>
              <span>/</span>
              <Link to="/materials" className="hover:bg-[#D4FF00] px-1 py-0.5 border border-black transition">Eco-Friendly Materials</Link>
              <span>/</span>
              <span className="bg-[#10b981] text-white px-1.5 py-0.5 border border-black">Heat-Resistant Candle Bags</span>
            </div>

            {/* Badges / Cross Links */}
            <div className="flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-1 px-3 py-1.5 text-xs font-black bg-[#10b981] text-white border-2 border-black uppercase tracking-wider shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                🌱 High-Heat Certified
              </span>
              <Link 
                to="/products/compostable-side-gusset-bags" 
                className="inline-flex items-center gap-1 px-3 py-1.5 text-xs font-black bg-[#00FFFF] text-black border-2 border-black hover:bg-[#D4FF00] transition-colors uppercase tracking-wider shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]"
              >
                🔄 View Compostable Gusset Bags →
              </Link>
            </div>

            <h1 className="font-black text-4xl md:text-6xl lg:text-7xl uppercase leading-tight mt-4">
              High-Heat<br />
              <span className="text-[#10b981]">Candle Pouches</span><br />
              DTC Startup Guide
            </h1>
          </div>
        }
        heroSubtitle={t('seoPages.pages.heatResistantCandlePackaging.heroSubtitle')}
        heroImage="/imgs/function/heat-resistant-candle-hero.png"
        heroImageAlt="POUCH.ECO heat resistant compostable candle pouch wax pour guide"
        categoryTag="ECO_PRODUCTS"
        categoryColor="#10b981"
        readTime="8 min read"
        sections={sections}
        ctaTitle={t('seoPages.pages.heatResistantCandlePackaging.ctaTitle')}
        ctaDescription={t('seoPages.pages.heatResistantCandlePackaging.ctaDescription')}
        calendlyUrl="https://calendly.com/30-min-free-packaging-consultancy"
        achievePackLink="https://achievepack.com/function/heat-resistant-compostable-pouches"
        achievePackText={t('seoPages.pages.heatResistantCandlePackaging.achievePackText')}
        showTableOfContents={true}
        relatedArticles={[
          {
            title: t('seoPages.pages.heatResistantCandlePackaging.title_whyWritableStampablePouchesAre'),
            url: '/knowledge/writable-stampable-pouches',
            image: '/imgs/knowledge/writable-stampable-pouches.jpg'
          },
          {
            title: t('seoPages.pages.heatResistantCandlePackaging.title_compostableSideGussetPouchesSizing'),
            url: '/products/compostable-side-gusset-bags',
            image: '/imgs/store/products/compostable-side-gusset-collection.png'
          }
        ]}
      />
    )
  }

  return (
    <>
      <SEOPageLayout heroBgColor="#171717"
        title={t('seoPages.pages.heatResistantCandlePackaging.title_highheatCompostableCandlePackaging85c')}
        description={t('seoPages.pages.heatResistantCandlePackaging.description')}
        keywords={['compostable candle packaging', 'heat resistant pouches', 'candle wax bags', 'PBS pouches', 'NatureFlex candle bags', 'high temperature compostable packaging', 'digital printing candle bags', 'low MOQ eco packaging', 'wax pour pouches', 'sustainable candle jars alternative', '85 degree heat resistant bags']}
        canonicalUrl="https://achievepack.com/function/heat-resistant-compostable-pouches"
        heroTitle={t('seoPages.pages.heatResistantCandlePackaging.heroTitle')}
        heroSubtitle={t('seoPages.pages.heatResistantCandlePackaging.heroSubtitle')}
        aboveTitle={visualBreadcrumbsAndLabels}
        heroImage="/imgs/function/heat-resistant-candle-hero.png"
        heroImageAlt="Premium compostable candle pouch being filled with hot wax"
        introSummary={t('seoPages.pages.heatResistantCandlePackaging.introSummary')}
        sections={sections}
        faqs={faqs}
        relatedLinks={relatedLinks}
        ctaTitle={t('seoPages.pages.heatResistantCandlePackaging.ctaTitle')}
        ctaDescription={t('seoPages.pages.heatResistantCandlePackaging.ctaDescription')}
        ctaButtonText={t('seoPages.pages.heatResistantCandlePackaging.ctaButtonText')}
      />
      
      {galleryEnlarged && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setGalleryEnlarged(null)}
        >
          <button onClick={() => setGalleryEnlarged(null)} className="absolute top-4 right-4 text-white hover:text-neutral-300 transition">
            <X className="h-8 w-8" />
          </button>
          <button onClick={(e) => { e.stopPropagation(); navigateGallery('prev'); }} className="absolute left-4 text-white hover:text-neutral-300 transition p-2">
            <ChevronLeft className="h-10 w-10" />
          </button>
          <img src={galleryEnlarged.src} alt={candleGallery[galleryEnlarged.index]?.title || 'Enlarged view'} className="max-w-full max-h-[80vh] object-contain" onClick={(e) => e.stopPropagation()} />
          <button onClick={(e) => { e.stopPropagation(); navigateGallery('next'); }} className="absolute right-4 text-white hover:text-neutral-300 transition p-2">
            <ChevronRight className="h-10 w-10" />
          </button>
          <div className="absolute bottom-4 text-center text-white max-w-xl px-4">
            <p className="text-lg font-semibold">{candleGallery[galleryEnlarged.index]?.title}</p>
            <p className="text-sm text-neutral-300">{candleGallery[galleryEnlarged.index]?.desc}</p>
            <p className="text-xs mt-2 text-neutral-400">{galleryEnlarged.index + 1} / {candleGallery.length}</p>
          </div>
        </div>
      )}
    </>
  )
}

export default HeatResistantCandlePackagingPage
