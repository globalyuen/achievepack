import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Package, Shield, Layers, Eye, Award, Users, Globe, FileCheck, Building2, Sparkles, CheckCircle, Calendar, Mail, X, ChevronLeft, ChevronRight, Info, Table, HelpCircle, ArrowRight } from 'lucide-react'
import SEOPageLayout from '../../components/SEOPageLayout'
import { Link } from 'react-router-dom'
import { useCalendly } from '../../contexts/CalendlyContext'
import { getDomain } from '../../utils/domain'
import BlogArticleTemplate from '../../components/pouch/BlogArticleTemplate'

// Gallery images for the heavy-duty Kraft bags


const LargeFormatKraftHeavyBagPage: React.FC = () => {
  const { t } = useTranslation()

  const heavyBagGallery = [
  { src: '/imgs/store/products/large-format-kraft-heavy-bag-conventional-thumbnail-1.png', title: t('seoPages.pages.largeFormatKraftHeavyBag.title_achievePackNaturalKraftHeavyduty'), desc: t('seoPages.pages.largeFormatKraftHeavyBag.desc_uprightProductViewShowingOrganic') },
  { src: '/imgs/store/products/large-format-kraft-heavy-bag-conventional-thumbnail-2.png', title: t('seoPages.pages.largeFormatKraftHeavyBag.title_comprehensiveSizeLineup'), desc: t('seoPages.pages.largeFormatKraftHeavyBag.desc_lineupShowingSmallMediumLarge') },
  { src: '/imgs/store/products/large-format-kraft-heavy-bag-conventional-thumbnail-3.png', title: t('seoPages.pages.largeFormatKraftHeavyBag.title_multiwallLaminationDetail'), desc: t('seoPages.pages.largeFormatKraftHeavyBag.desc_detailedMaterialLayersShowing120gsm') },
  { src: '/imgs/store/products/large-format-kraft-heavy-bag-conventional-thumbnail-4.png', title: t('seoPages.pages.largeFormatKraftHeavyBag.title_massiveSizeScaleReference'), desc: t('seoPages.pages.largeFormatKraftHeavyBag.desc_handheldScaleReferenceShowcasingThe') }
]


  const { openCalendly } = useCalendly()
  const [galleryEnlarged, setGalleryEnlarged] = useState<{ src: string; index: number } | null>(null)
  
  const isPouchDomain = getDomain() === 'pouch'

  const navigateGallery = (direction: 'prev' | 'next') => {
    if (!galleryEnlarged) return
    let newIndex = direction === 'prev' ? galleryEnlarged.index - 1 : galleryEnlarged.index + 1
    if (newIndex < 0) newIndex = heavyBagGallery.length - 1
    if (newIndex >= heavyBagGallery.length) newIndex = 0
    setGalleryEnlarged({ src: heavyBagGallery[newIndex].src, index: newIndex })
  }

  // --- B2C / DTC pouch.eco Custom Section Components ---
  const b2cSections = [
    {
      id: 'quick-answer',
      title: t('seoPages.pages.largeFormatKraftHeavyBag.title_quickAnswerThePremiumBridge'),
      icon: <Info className="h-5 w-5 text-black" />,
      content: (
        <div className="space-y-6">
          <p className="text-neutral-700 leading-relaxed">
            {t('seoPages.pages.largeFormatKraftHeavyBag.forPremiumOrganicFoodSpecialty')} 
          </p>
          <div className="bg-[#D4FF00] p-6 border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] text-black">
            <p className="text-lg font-black uppercase font-['JetBrains_Mono'] mb-2">
              {t('seoPages.pages.largeFormatKraftHeavyBag.punctureproofMultiwallStructuralHybrid')}
            </p>
            <p className="text-sm font-medium leading-relaxed">
              {t('seoPages.pages.largeFormatKraftHeavyBag.ourLargeFormatKraftHeavy')}
            </p>
          </div>
          
          {/* Comparison Matrix Grid */}
          <div className="mt-8 border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] overflow-hidden bg-white">
            <div className="bg-[#00FFFF] border-b-4 border-black p-3 flex items-center gap-2">
              <Table className="h-5 w-5 text-black" />
              <span className="font-black uppercase tracking-wider text-xs font-['JetBrains_Mono'] text-black">{t('seoPages.pages.largeFormatKraftHeavyBag.technicalParametersMatrix')}</span>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="bg-neutral-100 border-b-2 border-black font-['JetBrains_Mono'] font-bold uppercase text-neutral-800">
                    <th className="p-3 border-r border-black">{t('seoPages.pages.largeFormatKraftHeavyBag.bagStructure')}</th>
                    <th className="p-3 border-r border-black">{t('seoPages.pages.largeFormatKraftHeavyBag.maxPayload')}</th>
                    <th className="p-3 border-r border-black">{t('seoPages.pages.largeFormatKraftHeavyBag.tensileIndex')}</th>
                    <th className="p-3 border-r border-black">{t('seoPages.pages.largeFormatKraftHeavyBag.moistureBarrier')}</th>
                    <th className="p-3 border-r border-black">{t('seoPages.pages.largeFormatKraftHeavyBag.aestheticGrade')}</th>
                    <th className="p-3">{t('seoPages.pages.largeFormatKraftHeavyBag.startupMoq')}</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-black font-medium text-neutral-800">
                  <tr className="bg-[#D4FF00]/10">
                    <td className="p-3 border-r border-black font-bold">{t('seoPages.pages.largeFormatKraftHeavyBag.kraftMultiwallPpWoven')}</td>
                    <td className="p-3 border-r border-black">{t('seoPages.pages.largeFormatKraftHeavyBag.25Kg55Lbs')}</td>
                    <td className="p-3 border-r border-black">{t('seoPages.pages.largeFormatKraftHeavyBag.ultrahigh')}</td>
                    <td className="p-3 border-r border-black font-bold text-green-700">{t('seoPages.pages.largeFormatKraftHeavyBag.excellentMoistureSealed')}</td>
                    <td className="p-3 border-r border-black font-bold text-indigo-700">{t('seoPages.pages.largeFormatKraftHeavyBag.premiumOrganicFscKraft')}</td>
                    <td className="p-3 font-bold text-green-800">{t('seoPages.pages.largeFormatKraftHeavyBag.500PcsStockSizes')}</td>
                  </tr>
                  <tr>
                    <td className="p-3 border-r border-black text-neutral-500">{t('seoPages.pages.largeFormatKraftHeavyBag.pureKraftMultiwall')}</td>
                    <td className="p-3 border-r border-black text-neutral-500">{t('seoPages.pages.largeFormatKraftHeavyBag.10Kg22Lbs')}</td>
                    <td className="p-3 border-r border-black text-neutral-500">{t('seoPages.pages.largeFormatKraftHeavyBag.moderate')}</td>
                    <td className="p-3 border-r border-black text-neutral-500">{t('seoPages.pages.largeFormatKraftHeavyBag.poorHumidityAbsorbing')}</td>
                    <td className="p-3 border-r border-black text-neutral-500">{t('seoPages.pages.largeFormatKraftHeavyBag.organicRustic')}</td>
                    <td className="p-3 text-neutral-500">{t('seoPages.pages.largeFormatKraftHeavyBag.10000Pcs')}</td>
                  </tr>
                  <tr className="bg-neutral-50">
                    <td className="p-3 border-r border-black text-neutral-500">{t('seoPages.pages.largeFormatKraftHeavyBag.standardPolyWovenBag')}</td>
                    <td className="p-3 border-r border-black text-neutral-500">{t('seoPages.pages.largeFormatKraftHeavyBag.25Kg55Lbs')}</td>
                    <td className="p-3 border-r border-black text-neutral-500">{t('seoPages.pages.largeFormatKraftHeavyBag.high')}</td>
                    <td className="p-3 border-r border-black text-neutral-500">{t('seoPages.pages.largeFormatKraftHeavyBag.moderateWeaveGaps')}</td>
                    <td className="p-3 border-r border-black text-neutral-500">{t('seoPages.pages.largeFormatKraftHeavyBag.industrialLowend')}</td>
                    <td className="p-3 text-neutral-500">{t('seoPages.pages.largeFormatKraftHeavyBag.50000Pcs')}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'lamination-details',
      title: t('seoPages.pages.largeFormatKraftHeavyBag.title_engineeredForPunctureproofCoreIntegrity'),
      icon: <Shield className="h-5 w-5 text-black" />,
      content: (
        <div className="space-y-6">
          <p className="text-neutral-700">
            {t('seoPages.pages.largeFormatKraftHeavyBag.dtcBrandsShippingDryPet')} 
          </p>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <h4 className="font-black text-neutral-900 font-['JetBrains_Mono'] uppercase">{t('seoPages.pages.largeFormatKraftHeavyBag.fourlayerHybridMaterialsArchitecture')}</h4>
              <p className="text-sm text-neutral-700 leading-relaxed">
                {t('seoPages.pages.largeFormatKraftHeavyBag.ourHeavydutyStructureUtilizesAdvanced')}
              </p>
              <ul className="text-sm space-y-2 text-neutral-700 font-medium">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-[#10b981] mt-0.5 flex-shrink-0" />
                  <span><strong>{t('seoPages.pages.largeFormatKraftHeavyBag.layer1FscNaturalKraft')}</strong> {t('seoPages.pages.largeFormatKraftHeavyBag.deliversPremiumOrganicTactilityClean')}</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-[#10b981] mt-0.5 flex-shrink-0" />
                  <span><strong>{t('seoPages.pages.largeFormatKraftHeavyBag.layer2HighstrengthPpWoven')}</strong> {t('seoPages.pages.largeFormatKraftHeavyBag.intertwinedHightensilePolypropyleneGridT')}</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-[#10b981] mt-0.5 flex-shrink-0" />
                  <span><strong>{t('seoPages.pages.largeFormatKraftHeavyBag.layer3InnerWaterresistantPe')}</strong> {t('seoPages.pages.largeFormatKraftHeavyBag.sealsGreaseOilsAndDamp')}</span>
                </li>
              </ul>
            </div>
            <button 
              onClick={() => setGalleryEnlarged({ src: '/imgs/store/products/large-format-kraft-heavy-bag-conventional-thumbnail-3.png', index: 2 })}
              className="block border-4 border-black overflow-hidden shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all cursor-pointer group"
            >
              <img src="/imgs/store/products/large-format-kraft-heavy-bag-conventional-thumbnail-3.png" alt={t('seoPages.pages.largeFormatKraftHeavyBag.alt_kraftMultiwallHeavyBagMaterial')} className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-300" />
              <div className="bg-neutral-100 px-3 py-2 text-xs text-neutral-800 text-center font-bold border-t-4 border-black">{t('seoPages.pages.largeFormatKraftHeavyBag.clickToEnlarge')}</div>
            </button>
          </div>
        </div>
      )
    },
    {
      id: 'scale-reference',
      title: t('seoPages.pages.largeFormatKraftHeavyBag.title_breathtakingSizeScaleHandheldReference'),
      icon: <Layers className="h-5 w-5 text-black" />,
      content: (
        <div className="space-y-6">
          <p className="text-neutral-700">
            {t('seoPages.pages.largeFormatKraftHeavyBag.oneOfTheHardestElements')}
          </p>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <button 
              onClick={() => setGalleryEnlarged({ src: '/imgs/store/products/large-format-kraft-heavy-bag-conventional-thumbnail-4.png', index: 3 })}
              className="block border-4 border-black overflow-hidden shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all cursor-pointer group"
            >
              <img src="/imgs/store/products/large-format-kraft-heavy-bag-conventional-thumbnail-4.png" alt={t('seoPages.pages.largeFormatKraftHeavyBag.alt_handheldScaleReferenceShowingMassive')} className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-300" />
              <div className="bg-neutral-100 px-3 py-2 text-xs text-neutral-800 text-center font-bold border-t-4 border-black">{t('seoPages.pages.largeFormatKraftHeavyBag.clickToEnlarge')}</div>
            </button>
            <div className="space-y-4">
              <h4 className="font-black text-neutral-900 font-['JetBrains_Mono'] uppercase">{t('seoPages.pages.largeFormatKraftHeavyBag.expandableMfoldedSideGussets')}</h4>
              <p className="text-sm text-neutral-700 leading-relaxed">
                {t('seoPages.pages.largeFormatKraftHeavyBag.equippedWithDeepSidepanelMfolded')}
              </p>
              <div className="p-4 bg-[#00FFFF] border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] text-black">
                <h5 className="font-black uppercase text-xs tracking-wider mb-1 font-['JetBrains_Mono']">{t('seoPages.pages.largeFormatKraftHeavyBag.startupfriendly500unitMoq')}</h5>
                <p className="text-xs font-semibold leading-relaxed">
                  {t('seoPages.pages.largeFormatKraftHeavyBag.testYourFormulaWithZero')}
                </p>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'technical-authorship',
      title: t('seoPages.pages.largeFormatKraftHeavyBag.title_startupScalingTipsEngineeringAdvice'),
      icon: <Award className="h-5 w-5 text-black" />,
      content: (
        <div className="space-y-6">
          <div className="bg-neutral-50 border-4 border-black p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <img src="/imgs/ryan-avatar.webp" alt={t('seoPages.pages.largeFormatKraftHeavyBag.alt_ryanWongCofounder')} className="w-20 h-20 rounded-full border-4 border-black bg-[#D4FF00] object-cover flex-shrink-0" onError={(e: any) => {e.target.style.display='none'}} />
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <span className="font-black uppercase text-lg text-neutral-900">{t('seoPages.pages.largeFormatKraftHeavyBag.ryanWong')}</span>
                  <span className="bg-[#10b981] text-white text-[10px] px-2 py-0.5 rounded font-bold uppercase">{t('seoPages.pages.largeFormatKraftHeavyBag.packagingExpert')}</span>
                </div>
                <p className="text-xs text-neutral-500 font-['JetBrains_Mono']">{t('seoPages.pages.largeFormatKraftHeavyBag.cofounderChiefPackagingEngineer14')}</p>
                <p className="text-sm text-neutral-700 leading-relaxed mt-2">
                  {t('seoPages.pages.largeFormatKraftHeavyBag.whenSealingHeavyBagsOn')}
                </p>
              </div>
            </div>
          </div>
        </div>
      )
    }
  ]

  // --- B2B / Enterprise achievepack.com Custom Section Components ---
  const b2bSections = [
    {
      id: 'overview',
      title: t('seoPages.pages.largeFormatKraftHeavyBag.title_heavydutyMultiwallKraftSideGusset'),
      icon: <Package className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-8">
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-lg border border-green-200">
            <p className="text-lg font-medium text-neutral-900 mb-4">
              <strong>{t('seoPages.pages.largeFormatKraftHeavyBag.theUltimateB2bPackagingHybrid')}</strong> {t('seoPages.pages.largeFormatKraftHeavyBag.achievePackMultiwallSideGusset')}
            </p>
            <p className="text-neutral-700">
              {t('seoPages.pages.largeFormatKraftHeavyBag.raworganickraftlookindustrialgradehighte')}
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <button 
              onClick={() => setGalleryEnlarged({ src: '/imgs/store/products/large-format-kraft-heavy-bag-conventional-thumbnail-1.png', index: 0 })}
              className="block rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow cursor-pointer group"
            >
              <img src="/imgs/store/products/large-format-kraft-heavy-bag-conventional-thumbnail-1.png" alt={t('seoPages.pages.largeFormatKraftHeavyBag.alt_achievePackNaturalKraftHeavy')} className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-300" />
              <div className="bg-neutral-100 px-3 py-2 text-xs text-neutral-500 text-center">{t('seoPages.pages.largeFormatKraftHeavyBag.clickToEnlargeClickTo')}</div>
            </button>
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-neutral-900">{t('seoPages.pages.largeFormatKraftHeavyBag.industrialStrengthMultiwallStructure')}</h3>
              <p className="text-neutral-700">
                {t('seoPages.pages.largeFormatKraftHeavyBag.craftedUsingThickNaturalFsc')}
              </p>
              <p className="text-neutral-600 text-sm">
                {t('seoPages.pages.largeFormatKraftHeavyBag.naturalFscKraftPaper140micronppwoveninne')}
              </p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'specifications',
      title: t('seoPages.pages.largeFormatKraftHeavyBag.title_comprehensiveSizeLineupDimensionChart'),
      icon: <Layers className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-neutral-900">{t('seoPages.pages.largeFormatKraftHeavyBag.standardStockDimensions')}</h3>
              <p className="text-neutral-700 font-medium">
                {t('seoPages.pages.largeFormatKraftHeavyBag.ourHeavyBagsComeIn')}
              </p>
              <ul className="space-y-2 text-sm text-neutral-700">
                <li>• <strong>{t('seoPages.pages.largeFormatKraftHeavyBag.small255Kg')}</strong> {t('seoPages.pages.largeFormatKraftHeavyBag.idealForSpecialtyBirdSeed')}</li>
                <li>• <strong>{t('seoPages.pages.largeFormatKraftHeavyBag.medium510Kg')}</strong> {t('seoPages.pages.largeFormatKraftHeavyBag.standardChoiceForCommercialDog')}</li>
                <li>• <strong>{t('seoPages.pages.largeFormatKraftHeavyBag.large1015Kg')}</strong> {t('seoPages.pages.largeFormatKraftHeavyBag.engineeredForHighvolumePetFood')}</li>
                <li>• <strong>{t('seoPages.pages.largeFormatKraftHeavyBag.extraLarge1525Kg')}</strong> {t('seoPages.pages.largeFormatKraftHeavyBag.heavydutyIndustrialSackForOrganic')}</li>
              </ul>
            </div>
            <button 
              onClick={() => setGalleryEnlarged({ src: '/imgs/store/products/large-format-kraft-heavy-bag-conventional-thumbnail-2.png', index: 1 })}
              className="block rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow cursor-pointer group"
            >
              <img src="/imgs/store/products/large-format-kraft-heavy-bag-conventional-thumbnail-2.png" alt={t('seoPages.pages.largeFormatKraftHeavyBag.alt_kraftHeavydutyBagSizeLineup')} className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-300" />
              <div className="bg-neutral-100 px-3 py-2 text-xs text-neutral-500 text-center">{t('seoPages.pages.largeFormatKraftHeavyBag.clickToEnlargeClickTo')}</div>
            </button>
          </div>
        </div>
      )
    },
    {
      id: 'scale-showcase',
      title: t('seoPages.pages.largeFormatKraftHeavyBag.title_unrivaledPhysicalHandheldVolumetricRefer'),
      icon: <Eye className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <button 
              onClick={() => setGalleryEnlarged({ src: '/imgs/store/products/large-format-kraft-heavy-bag-conventional-thumbnail-4.png', index: 3 })}
              className="block rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow cursor-pointer group"
            >
              <img src="/imgs/store/products/large-format-kraft-heavy-bag-conventional-thumbnail-4.png" alt={t('seoPages.pages.largeFormatKraftHeavyBag.alt_handheldScaleReferenceShowingMassive')} className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-300" />
              <div className="bg-neutral-100 px-3 py-2 text-xs text-neutral-500 text-center">{t('seoPages.pages.largeFormatKraftHeavyBag.clickToEnlargeClickTo')}</div>
            </button>
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-neutral-900">{t('seoPages.pages.largeFormatKraftHeavyBag.heavycapacityVolumetricPresentation')}</h3>
              <p className="text-neutral-700">
                {t('seoPages.pages.largeFormatKraftHeavyBag.toHelpPackagingEngineersAnd')}
              </p>
              <p className="text-neutral-600 text-sm">
                {t('seoPages.pages.largeFormatKraftHeavyBag.helppackagingengineerandb2benterprisebuy')}
              </p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'trust-eeat',
      title: t('seoPages.pages.largeFormatKraftHeavyBag.title_whyTrustAchievePack'),
      icon: <Award className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-8">
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-xl border border-green-200">
            <h3 className="text-xl font-bold text-neutral-900 mb-4">{t('seoPages.pages.largeFormatKraftHeavyBag.isoBrcFscCertifiedPackaging')}</h3>
            <p className="text-neutral-700 mb-4">
              {t('seoPages.pages.largeFormatKraftHeavyBag.withOver13YearsOf')}
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-4">
            <div className="bg-white border border-neutral-200 p-4 rounded-lg text-center">
              <FileCheck className="h-8 w-8 text-green-600 mx-auto mb-2" />
              <h4 className="font-semibold text-neutral-800">{t('seoPages.pages.largeFormatKraftHeavyBag.fscCertified')}</h4>
              <p className="text-xs text-neutral-500">{t('seoPages.pages.largeFormatKraftHeavyBag.100TraceableForestry')}</p>
            </div>
            <div className="bg-white border border-neutral-200 p-4 rounded-lg text-center">
              <Building2 className="h-8 w-8 text-green-600 mx-auto mb-2" />
              <h4 className="font-semibold text-neutral-800">{t('seoPages.pages.largeFormatKraftHeavyBag.brcCertified')}</h4>
              <p className="text-xs text-neutral-500">{t('seoPages.pages.largeFormatKraftHeavyBag.foodSafetyCleanroom')}</p>
            </div>
            <div className="bg-white border border-neutral-200 p-4 rounded-lg text-center">
              <Globe className="h-8 w-8 text-green-600 mx-auto mb-2" />
              <h4 className="font-semibold text-neutral-800">{t('seoPages.pages.largeFormatKraftHeavyBag.globalSupply')}</h4>
              <p className="text-xs text-neutral-500"> {t('seoPages.pages.largeFormatKraftHeavyBag.palletizedSeaairFreight')}</p>
            </div>
            <div className="bg-white border border-neutral-200 p-4 rounded-lg text-center">
              <Users className="h-8 w-8 text-green-600 mx-auto mb-2" />
              <h4 className="font-semibold text-neutral-800">{t('seoPages.pages.largeFormatKraftHeavyBag.13Years')}</h4>
              <p className="text-xs text-neutral-500">{t('seoPages.pages.largeFormatKraftHeavyBag.industrialExperience')}</p>
            </div>
          </div>
        </div>
      )
    }
  ]

  const faqs = [
    {
      question: t('seoPages.pages.largeFormatKraftHeavyBag.question_whatIsAKraftMultiwall'),
      answer: t('seoPages.pages.largeFormatKraftHeavyBag.answer_itIsAnExceptionallyStrong')
    },
    {
      question: t('seoPages.pages.largeFormatKraftHeavyBag.question_areTheseHeavyBagsFood'),
      answer: t('seoPages.pages.largeFormatKraftHeavyBag.answer_yesOurLargeFormatKraft')
    },
    {
      question: t('seoPages.pages.largeFormatKraftHeavyBag.question_whatIsTheMinimumOrder'),
      answer: t('seoPages.pages.largeFormatKraftHeavyBag.answer_forStandardPlainStockSizes')
    },
    {
      question: t('seoPages.pages.largeFormatKraftHeavyBag.question_canTheyBeSealedWith'),
      answer: t('seoPages.pages.largeFormatKraftHeavyBag.answer_dueToTheThicknessOf')
    }
  ]

  const relatedLinks = [
    { title: t('seoPages.pages.largeFormatKraftHeavyBag.title_carbonNeutralBags'), url: "/function/carbon-neutral-bags", description: t('seoPages.pages.largeFormatKraftHeavyBag.description_climatePositiveB2bb2cPackagingOptions') },
    { title: t('seoPages.pages.largeFormatKraftHeavyBag.title_ricePaperBags'), url: "/function/rice-paper-bags", description: t('seoPages.pages.largeFormatKraftHeavyBag.description_premiumTexturedFiberPaperPouches') },
    { title: t('seoPages.pages.largeFormatKraftHeavyBag.title_spoutPouchesForJuices'), url: "/function/spout-pouches-juice", description: t('seoPages.pages.largeFormatKraftHeavyBag.description_liquidBarrierPouchDesigns') },
    { title: t('seoPages.pages.largeFormatKraftHeavyBag.title_compostableMaterials'), url: "/materials/compostable", description: t('seoPages.pages.largeFormatKraftHeavyBag.description_fullyBiodegradableFlexibleBarrierSubstra') }
  ]

  // --- Dynamic Routing Check ---
  if (isPouchDomain) {
    return (
      <BlogArticleTemplate
        title={t('seoPages.pages.largeFormatKraftHeavyBag.title_premiumNaturalKraftHeavySacks')}
        metaDescription={t('seoPages.pages.largeFormatKraftHeavyBag.metaDescription')}
        canonicalUrl="https://pouch.eco/function/large-format-kraft-heavy-bags"
        keywords={['heavy-duty Kraft bags', 'multi-wall Kraft sacks', 'side gusset bulk packaging', 'large format packaging', 'organic pet food bag', 'FSC Kraft paper sack', '100% puncture proof sack', 'low MOQ heavy bag']}
        publishedDate="2026-05-27"
        heroTitle={
          <>
            Natural Kraft <br className="hidden md:block" /> Heavy-Duty Sacks
          </>
        }
        heroSubtitle={t('seoPages.pages.largeFormatKraftHeavyBag.heroSubtitle')}
        heroImage="/imgs/store/products/large-format-kraft-heavy-bag-conventional-thumbnail-4.png"
        heroImageAlt="POUCH.ECO Natural Kraft Heavy-Duty Sack Volumetric Reference"
        categoryTag="ORGANIC_RETAIL"
        categoryColor="#D4FF00"
        readTime="5 min read"
        sections={b2cSections}
        ctaTitle={t('seoPages.pages.largeFormatKraftHeavyBag.ctaTitle')}
        ctaDescription={t('seoPages.pages.largeFormatKraftHeavyBag.ctaDescription')}
        calendlyUrl="https://calendly.com/30-min-free-packaging-consultancy"
        achievePackLink="https://achievepack.com/function/large-format-kraft-heavy-bags"
        achievePackText={t('seoPages.pages.largeFormatKraftHeavyBag.achievePackText')}
        showTableOfContents={true}
        relatedArticles={[
          {
            title: t('seoPages.pages.largeFormatKraftHeavyBag.title_ricePaperBags'),
            url: "/function/rice-paper-bags",
            image: "/imgs/store/products/large-format-kraft-heavy-bag-conventional-thumbnail-2.png"
          },
          {
            title: t('seoPages.pages.largeFormatKraftHeavyBag.title_carbonNeutralBags'),
            url: "/function/carbon-neutral-bags",
            image: "/imgs/store/products/large-format-kraft-heavy-bag-conventional-thumbnail-1.png"
          }
        ]}
      />
    )
  }

  return (
    <>
      <SEOPageLayout 
        heroBgColor="#132c1c"
        title={t('seoPages.pages.largeFormatKraftHeavyBag.title_kraftMultiwallHeavyGussetSacks')}
        description={t('seoPages.pages.largeFormatKraftHeavyBag.description')}
        keywords={['large format Kraft bags', 'multi-wall side gusset pouch', 'heavy-duty sacks B2B', 'PP woven laminated Kraft bag', 'pet food wholesale sacks', 'charcoal paper bags', 'industrial Kraft sacks', 'bulk grains packaging']}
        canonicalUrl="https://achievepack.com/function/large-format-kraft-heavy-bags"
        heroTitle={t('seoPages.pages.largeFormatKraftHeavyBag.heroTitle')}
        heroSubtitle={t('seoPages.pages.largeFormatKraftHeavyBag.heroSubtitle')}
        heroImage="/imgs/store/products/large-format-kraft-heavy-bag-conventional-thumbnail-4.png"
        heroImageAlt="Achieve Pack Kraft Multi-Wall Heavy Gusset Sack Scale Reference"
        introSummary={t('seoPages.pages.largeFormatKraftHeavyBag.introSummary')}
        sections={b2bSections}
        faqs={faqs}
        relatedLinks={relatedLinks}
        ctaTitle={t('seoPages.pages.largeFormatKraftHeavyBag.ctaTitle')}
        ctaDescription={t('seoPages.pages.largeFormatKraftHeavyBag.ctaDescription')}
        ctaButtonText={t('seoPages.pages.largeFormatKraftHeavyBag.ctaButtonText')}
      />
      
      {/* Gallery Lightbox Modal */}
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
          <img src={galleryEnlarged.src} alt={heavyBagGallery[galleryEnlarged.index]?.title || 'Enlarged view'} className="max-w-full max-h-[80vh] object-contain" onClick={(e) => e.stopPropagation()} />
          <button onClick={(e) => { e.stopPropagation(); navigateGallery('next'); }} className="absolute right-4 text-white hover:text-neutral-300 transition p-2">
            <ChevronRight className="h-10 w-10" />
          </button>
          <div className="absolute bottom-4 left-0 right-0 text-center text-white">
            <p className="font-medium">{heavyBagGallery[galleryEnlarged.index]?.title}</p>
            <p className="text-sm text-neutral-300">{heavyBagGallery[galleryEnlarged.index]?.desc}</p>
          </div>
        </div>
      )}
    </>
  )
}

export default LargeFormatKraftHeavyBagPage
