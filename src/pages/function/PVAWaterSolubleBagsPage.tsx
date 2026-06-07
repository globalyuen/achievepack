import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Package, Droplets, Layers, Settings, Fish, Award, Users, Globe, FileCheck, Building2, Sparkles, Shield, CheckCircle, Calendar, Mail, X, ChevronLeft, ChevronRight, Ruler, Recycle, Target, Thermometer, Box } from 'lucide-react'
import SEOPageLayout from '../../components/SEOPageLayout'
import { Link } from 'react-router-dom'
import { useCalendly } from '../../contexts/CalendlyContext'
import { getDomain } from '../../utils/domain'
import BlogArticleTemplate from '../../components/pouch/BlogArticleTemplate'

// Gallery images from /imgs/function/water/


const PVAWaterSolubleBagsPage: React.FC = () => {
  const { t } = useTranslation()

  const pvaGallery = [
  { src: '/imgs/function/water/hero.webp', title: t('seoPages.pages.pvaWaterSolubleBags.title_achievePackPvaWatersolubleBait'), desc: t('seoPages.pages.pvaWaterSolubleBags.desc_achievePackPvaWaterSoluble') },
  { src: '/imgs/function/water/a_pva_material_closeup_8668927.webp', title: t('seoPages.pages.pvaWaterSolubleBags.title_pvaMaterialCloseup'), desc: t('seoPages.pages.pvaWaterSolubleBags.desc_pvaMaterialcloseup') },
  { src: '/imgs/function/water/a_dissolution_step1_drop_6327912.webp', title: t('seoPages.pages.pvaWaterSolubleBags.title_step1DropInWater'), desc: t('seoPages.pages.pvaWaterSolubleBags.desc_steps1enterwaterinstant') },
  { src: '/imgs/function/water/a_dissolution_step2_dissolving_9965853.webp', title: t('seoPages.pages.pvaWaterSolubleBags.title_step2FilmDissolving'), desc: t('seoPages.pages.pvaWaterSolubleBags.desc_steps2filmdissolve') },
  { src: '/imgs/function/water/a_dissolution_step3_complete_2409421.webp', title: t('seoPages.pages.pvaWaterSolubleBags.title_step3CompleteDissolution'), desc: t('seoPages.pages.pvaWaterSolubleBags.desc_steps3completedissolve') },
  { src: '/imgs/function/water/a_hook_bait_unity_8654964.webp', title: t('seoPages.pages.pvaWaterSolubleBags.title_hookHiddenInsideBait'), desc: t('seoPages.pages.pvaWaterSolubleBags.desc_hookbaitonebody') },
  { src: '/imgs/function/water/a_fishing_application_scene_9430782.webp', title: t('seoPages.pages.pvaWaterSolubleBags.title_fishingApplicationScene'), desc: t('seoPages.pages.pvaWaterSolubleBags.desc_fishingapplicationscenario') },
  { src: '/imgs/function/water/a_specification_custom_sizes_2365104.webp', title: t('seoPages.pages.pvaWaterSolubleBags.title_customSizesAvailable'), desc: t('seoPages.pages.pvaWaterSolubleBags.desc_multiplespecificationcustom') },
  { src: '/imgs/function/water/a_performance_storage_solubility_8701547.webp', title: t('seoPages.pages.pvaWaterSolubleBags.title_storageSolubilityPerformance'), desc: t('seoPages.pages.pvaWaterSolubleBags.desc_moistureProofstoreandwaterSolublepropert') },
]


  const { openCalendly } = useCalendly()
  const [galleryEnlarged, setGalleryEnlarged] = useState<{ src: string; index: number } | null>(null)
  
  const isPouchDomain = getDomain() === 'pouch'

  const b2cSections = [
    {
      id: 'zero-waste',
      title: t('seoPages.pages.pvaWaterSolubleBags.title_zerowastePackagingColdwaterSolublePolyme'),
      icon: <Droplets className="h-5 w-5 text-black" />,
      content: (
        <div className="space-y-6">
          <p className="text-neutral-700">
            {t('seoPages.pages.pvaWaterSolubleBags.forEcoconsciousDtcStartupsIn')}
          </p>
          <div className="bg-[#D4FF00] p-6 border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] text-black">
            <p className="text-lg font-black uppercase font-['JetBrains_Mono'] mb-2">
              {t('seoPages.pages.pvaWaterSolubleBags.dissolvesCompletelyInWaterWith')}
            </p>
            <p className="text-sm font-medium leading-relaxed">
              {t('seoPages.pages.pvaWaterSolubleBags.ourHighstrengthPvaFilmsDissolve')}
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 items-center mt-6">
            <button 
              onClick={() => setGalleryEnlarged({ src: '/imgs/function/water/a_dissolution_step2_dissolving_9965853.webp', index: 3 })}
              className="block border-4 border-black overflow-hidden shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all cursor-pointer group"
            >
              <img src="/imgs/function/water/a_dissolution_step2_dissolving_9965853.webp" alt={t('seoPages.pages.pvaWaterSolubleBags.alt_pvaFilmDissolvingInWater')} className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-300" />
              <div className="bg-neutral-100 px-3 py-2 text-xs text-neutral-800 text-center font-bold border-t-4 border-black">{t('seoPages.pages.pvaWaterSolubleBags.clickToEnlarge')}</div>
            </button>
            <div className="space-y-3">
              <h4 className="font-black text-neutral-900 font-['JetBrains_Mono'] uppercase">{t('seoPages.pages.pvaWaterSolubleBags.perfectForPodsTabletsConcentrates')}</h4>
              <p className="text-sm text-neutral-700 leading-relaxed">
                {t('seoPages.pages.pvaWaterSolubleBags.whetherYoureFormulatingLaundryDetergent')}
              </p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'film-engineering',
      title: t('seoPages.pages.pvaWaterSolubleBags.title_highstrengthFilmEngineeringScentProtecti'),
      icon: <Layers className="h-5 w-5 text-black" />,
      content: (
        <div className="space-y-6">
          <p className="text-neutral-700">
            {t('seoPages.pages.pvaWaterSolubleBags.oneOfTheBiggestChallenges')}
          </p>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <h4 className="font-black text-neutral-900 font-['JetBrains_Mono'] uppercase">{t('seoPages.pages.pvaWaterSolubleBags.advancedBarrierPhysicalProperties')}</h4>
              <p className="text-sm text-neutral-700 leading-relaxed">
                {t('seoPages.pages.pvaWaterSolubleBags.ourPolymerFilmsAreEngineered')}
              </p>
              <ul className="text-sm space-y-2 text-neutral-700 font-medium">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-[#10b981] mt-0.5 flex-shrink-0" />
                  <span><strong>{t('seoPages.pages.pvaWaterSolubleBags.scentsLockedIn')}</strong> {t('seoPages.pages.pvaWaterSolubleBags.superiorGasBarrierPreventsFragrance')}</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-[#10b981] mt-0.5 flex-shrink-0" />
                  <span><strong>{t('seoPages.pages.pvaWaterSolubleBags.highTensileStrength')}</strong> {t('seoPages.pages.pvaWaterSolubleBags.resistsTearingAndPuncturesDuring')}</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-[#10b981] mt-0.5 flex-shrink-0" />
                  <span><strong>{t('seoPages.pages.pvaWaterSolubleBags.moistureresistantOuterWrapOption')}</strong> {t('seoPages.pages.pvaWaterSolubleBags.canBeCombinedWithOur')}</span>
                </li>
              </ul>
            </div>
            <button 
              onClick={() => setGalleryEnlarged({ src: '/imgs/function/water/a_pva_material_closeup_8668927.webp', index: 1 })}
              className="block border-4 border-black overflow-hidden shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all cursor-pointer group"
            >
              <img src="/imgs/function/water/a_pva_material_closeup_8668927.webp" alt={t('seoPages.pages.pvaWaterSolubleBags.alt_pvaWaterSolubleFilmClose')} className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-300" />
              <div className="bg-neutral-100 px-3 py-2 text-xs text-neutral-800 text-center font-bold border-t-4 border-black">{t('seoPages.pages.pvaWaterSolubleBags.clickToEnlarge')}</div>
            </button>
          </div>
        </div>
      )
    },
    {
      id: 'agile-launchpad',
      title: t('seoPages.pages.pvaWaterSolubleBags.title_agileStartupLaunchpadLowMoqs'),
      icon: <Sparkles className="h-5 w-5 text-black" />,
      content: (
        <div className="space-y-6">
          <p className="text-neutral-700">
            {t('seoPages.pages.pvaWaterSolubleBags.artisanalWellnessAndHouseholdCleaning')}
          </p>
          <div className="bg-[#00FFFF] border-4 border-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] text-black">
            <h4 className="font-black text-lg mb-2 uppercase font-['JetBrains_Mono']">{t('seoPages.pages.pvaWaterSolubleBags.low500unitMoqForStock')}</h4>
            <p className="text-sm font-medium leading-relaxed">
              {t('seoPages.pages.pvaWaterSolubleBags.testYourFormulasInThe')} <strong>{t('seoPages.pages.pvaWaterSolubleBags.500Units')}</strong>{t('seoPages.pages.pvaWaterSolubleBags.forCustomPrintedRunsOr')}
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-4 mt-6">
            <div className="bg-white border-4 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h5 className="font-black uppercase text-xs tracking-wider mb-2 font-['JetBrains_Mono']">{t('seoPages.pages.pvaWaterSolubleBags.diyCustomStamps')}</h5>
              <p className="text-xs text-neutral-700">{t('seoPages.pages.pvaWaterSolubleBags.applyCustomOrganicInkStamps')}</p>
            </div>
            <div className="bg-[#D4FF00] border-4 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] text-black">
              <h5 className="font-black uppercase text-xs tracking-wider mb-2 font-['JetBrains_Mono']">{t('seoPages.pages.pvaWaterSolubleBags.multiscentFlex')}</h5>
              <p className="text-xs font-semibold">{t('seoPages.pages.pvaWaterSolubleBags.splitYourLowVolumeAcross')}</p>
            </div>
            <div className="bg-white border-4 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h5 className="font-black uppercase text-xs tracking-wider mb-2 font-['JetBrains_Mono']">{t('seoPages.pages.pvaWaterSolubleBags.rapidPrototypes')}</h5>
              <p className="text-xs text-neutral-700">{t('seoPages.pages.pvaWaterSolubleBags.plainTestSamplesShipOut')}</p>
            </div>
            <div className="bg-[#00FFFF] border-4 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] text-black">
              <h5 className="font-black uppercase text-xs tracking-wider mb-2 font-['JetBrains_Mono']">{t('seoPages.pages.pvaWaterSolubleBags.fast7dayTurnarounds')}</h5>
              <p className="text-xs font-semibold">{t('seoPages.pages.pvaWaterSolubleBags.skipMonthsOfFactoryDelays')}</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'eco-friendly-scaling',
      title: t('seoPages.pages.pvaWaterSolubleBags.title_startupScalingTipsNavigatingEco'),
      icon: <Recycle className="h-5 w-5 text-black" />,
      content: (
        <div className="space-y-6">
          <p className="text-neutral-700">
            {t('seoPages.pages.pvaWaterSolubleBags.whenMarketingASustainableBrand')}
          </p>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <button 
              onClick={() => setGalleryEnlarged({ src: '/imgs/function/water/a_specification_custom_sizes_2365104.webp', index: 7 })}
              className="block border-4 border-black overflow-hidden shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all cursor-pointer group"
            >
              <img src="/imgs/function/water/a_specification_custom_sizes_2365104.webp" alt={t('seoPages.pages.pvaWaterSolubleBags.alt_pvaBagSizesAndSpecifications')} className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-300" />
              <div className="bg-neutral-100 px-3 py-2 text-xs text-neutral-800 text-center font-bold border-t-4 border-black">{t('seoPages.pages.pvaWaterSolubleBags.clickToEnlarge')}</div>
            </button>
            <div className="space-y-4">
              <h4 className="font-black text-neutral-900 font-['JetBrains_Mono'] uppercase">{t('seoPages.pages.pvaWaterSolubleBags.eeatTechnicalAdviceForDtc')}</h4>
              <p className="text-sm text-neutral-700 leading-relaxed">
                {t('seoPages.pages.pvaWaterSolubleBags.asYouDesignYourProduct')}
              </p>
              <div className="space-y-3 text-sm text-neutral-700">
                <div className="p-3 bg-neutral-50 border-l-4 border-black rounded shadow-sm font-medium">
                  <strong>{t('seoPages.pages.pvaWaterSolubleBags.1ControlMoistureContent')}</strong> {t('seoPages.pages.pvaWaterSolubleBags.ensureYourSoapSheetsTabs')}
                </div>
                <div className="p-3 bg-neutral-50 border-l-4 border-black rounded shadow-sm font-medium">
                  <strong>{t('seoPages.pages.pvaWaterSolubleBags.2UseResealableOuterPouches')}</strong> {t('seoPages.pages.pvaWaterSolubleBags.protectYourWatersolubleProductsFrom')}
                </div>
                <div className="p-3 bg-neutral-50 border-l-4 border-black rounded shadow-sm font-medium">
                  <strong>{t('seoPages.pages.pvaWaterSolubleBags.3LeverageCertifications')}</strong> {t('seoPages.pages.pvaWaterSolubleBags.highlightThe100BiodegradableMicroplastic')}
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    }
  ]
  
  const navigateGallery = (direction: 'prev' | 'next') => {
    if (!galleryEnlarged) return
    let newIndex = direction === 'prev' ? galleryEnlarged.index - 1 : galleryEnlarged.index + 1
    if (newIndex < 0) newIndex = pvaGallery.length - 1
    if (newIndex >= pvaGallery.length) newIndex = 0
    setGalleryEnlarged({ src: pvaGallery[newIndex].src, index: newIndex })
  }

  // Alternating layout component
  const AlternatingSection = ({ 
    image, 
    imageAlt, 
    title, 
    titleCn, 
    content, 
    contentCn,
    imageLeft = true,
    index
  }: { 
    image: string
    imageAlt: string
    title: string
    titleCn: string
    content: string
    contentCn: string
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
            <div className="bg-neutral-100 px-3 py-2 text-xs text-neutral-500 text-center">Click to enlarge Click to enlarge</div>
          </button>
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-neutral-900">{title}</h3>
            <p className="text-sm text-primary-600 font-medium">{titleCn}</p>
            <p className="text-neutral-700">{content}</p>
            <p className="text-neutral-600 text-sm">{contentCn}</p>
          </div>
        </>
      ) : (
        <>
          <div className="space-y-4 md:order-1">
            <h3 className="text-xl font-bold text-neutral-900">{title}</h3>
            <p className="text-sm text-primary-600 font-medium">{titleCn}</p>
            <p className="text-neutral-700">{content}</p>
            <p className="text-neutral-600 text-sm">{contentCn}</p>
          </div>
          <button 
            onClick={() => setGalleryEnlarged({ src: image, index })}
            className="block rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow cursor-pointer group md:order-2"
          >
            <img src={image} alt={imageAlt} className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-300" />
            <div className="bg-neutral-100 px-3 py-2 text-xs text-neutral-500 text-center">Click to enlarge Click to enlarge</div>
          </button>
        </>
      )}
    </div>
  )
  
  const sections = [
    {
      id: 'intro',
      title: t('seoPages.pages.pvaWaterSolubleBags.title_achievePackPvaWatersolubleBait'),
      icon: <Package className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-8">
          <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-6 rounded-lg border border-blue-200">
            <p className="text-lg font-medium text-neutral-900 mb-4">
              <strong>{t('seoPages.pages.pvaWaterSolubleBags.completelyDissolvesInWaterFor')}</strong> {t('seoPages.pages.pvaWaterSolubleBags.achievePackPvaWatersolubleBait')}
            </p>
            <p className="text-neutral-700">
              {t('seoPages.pages.pvaWaterSolubleBags.completedissolveatwaterachievecleaneffic')}
            </p>
          </div>
          
          <AlternatingSection
            image="/imgs/function/water/hero.webp"
            imageAlt="Achieve Pack PVA Water-Soluble Bait Bags Hero"
            title={t('seoPages.pages.pvaWaterSolubleBags.title_achievePackPvaWatersolubleBait')}
            titleCn="Achieve Pack® PVA Water Soluble Bait Bags"
            content="Our PVA water-soluble bait bags are made from polyvinyl alcohol film that completely dissolves in water. Perfect for carp fishing, catfishing, and other angling applications. Fill with pellets, groundbait, or boilies - cast and watch the bag dissolve, creating a concentrated bait cloud around your hook."
            contentCn="Our PVA Water Soluble Bait BagsUsingPolyvinyl AlcoholFilmMadeForm，Completely Dissolves in Water。Ideal forSuitableCarp、CatfishEtcEachCategoryFishingApplication。InstallEnterParticleBait、Bait PowderOrBait Ball，ThrowAfterBagChildDissolve，InHookChildAroundFormFormConcentrateBait MaterialCloud。"
            imageLeft={true}
            index={0}
          />
        </div>
      )
    },
    {
      id: 'pva-material',
      title: t('seoPages.pages.pvaWaterSolubleBags.title_pvaMaterialWaterSolubility'),
      icon: <Droplets className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-8">
          <AlternatingSection
            image="/imgs/function/water/a_pva_material_closeup_8668927.webp"
            imageAlt="PVA Water-Soluble Film Material Closeup"
            title={t('seoPages.pages.pvaWaterSolubleBags.title_100WatersolublePvaFilm')}
            titleCn="100% Water SolubleProperty PVA Film"
            content="PVA (Polyvinyl Alcohol) film is a biodegradable, water-soluble material that dissolves completely in water without leaving any harmful residue. The film is soft, flexible, and transparent, allowing you to see the bait inside. Heat-sealable for secure closure before casting."
            contentCn="PVA（Polyvinyl Alcohol）FilmIsOneTypeCanRawMaterialDegradableOfWater SolublePropertyMaterial，Completely Dissolves in Water，NotStayAnyHaveHarmResidueMaterial。FilmSoftFlexible、Flexible、Transparent，CanWithViewToInsidePartOfBait Material。CanHeat SealSealed，ThrowBeforeEnsureSealSturdy。"
            imageLeft={false}
            index={1}
          />
          
          <div className="grid md:grid-cols-3 gap-4 mt-6">
            <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
              <Droplets className="h-5 w-5 text-blue-600 mb-2" />
              <h4 className="font-semibold text-blue-800">{t('seoPages.pages.pvaWaterSolubleBags.100WaterSoluble')}</h4>
              <p className="text-sm text-blue-700">{t('seoPages.pages.pvaWaterSolubleBags.dissolvesCompletelyInWater')}</p>
              <p className="text-xs text-blue-600 mt-1">{t('seoPages.pages.pvaWaterSolubleBags.completelyDissolvesInWater')}</p>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
              <Recycle className="h-5 w-5 text-blue-600 mb-2" />
              <h4 className="font-semibold text-blue-800">{t('seoPages.pages.pvaWaterSolubleBags.biodegradable')}</h4>
              <p className="text-sm text-blue-700">{t('seoPages.pages.pvaWaterSolubleBags.ecofriendlyNoResidue')}</p>
              <p className="text-xs text-blue-600 mt-1">{t('seoPages.pages.pvaWaterSolubleBags.ecofriendlynoresidue')}</p>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
              <Shield className="h-5 w-5 text-blue-600 mb-2" />
              <h4 className="font-semibold text-blue-800">{t('seoPages.pages.pvaWaterSolubleBags.heatSealable')}</h4>
              <p className="text-sm text-blue-700">{t('seoPages.pages.pvaWaterSolubleBags.secureClosureBeforeCasting')}</p>
              <p className="text-xs text-blue-600 mt-1">{t('seoPages.pages.pvaWaterSolubleBags.heatSealensuresealed')}</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'dissolution-step1',
      title: t('seoPages.pages.pvaWaterSolubleBags.title_dissolutionProcessStep1Drop'),
      icon: <Target className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-8">
          <AlternatingSection
            image="/imgs/function/water/a_dissolution_step1_drop_6327912.webp"
            imageAlt="PVA Bait Bag Drop in Water Step 1"
            title={t('seoPages.pages.pvaWaterSolubleBags.title_step1CastAndDrop')}
            titleCn="Steps1：ThrowEnterWater"
            content="Cast your PVA bait bag attached to your fishing rig into the water. The moment the bag hits the water surface, the dissolution process begins. The bag contour remains clear initially, with slight ripples on the water surface indicating the entry point."
            contentCn="WillHangHave PVA AttractBaitBagOfFishGroupThrowEnterWaterIn。BagChildEnterWaterOfInstant，DissolveProcessStart。BagChildContourMostStill InitiallyClearCanSee，WaterFaceLightMicroRippleMarkingEnterWaterPoint。"
            imageLeft={true}
            index={2}
          />
          
          <div className="bg-cyan-50 p-6 rounded-lg border border-cyan-200">
            <h4 className="font-semibold text-cyan-800 mb-3">{t('seoPages.pages.pvaWaterSolubleBags.castingTips')}</h4>
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <div>
                <p className="text-cyan-700"><strong>{t('seoPages.pages.pvaWaterSolubleBags.attachToRigSecurely')}</strong></p>
                <p className="text-cyan-600">{t('seoPages.pages.pvaWaterSolubleBags.ensureandfishgroupconnectconnectsturdy')}</p>
              </div>
              <div>
                <p className="text-cyan-700"><strong>{t('seoPages.pages.pvaWaterSolubleBags.castSmoothlyToAvoidTearing')}</strong></p>
                <p className="text-cyan-600">{t('seoPages.pages.pvaWaterSolubleBags.flatsteadythrowavoidtearsplit')}</p>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'dissolution-step2',
      title: t('seoPages.pages.pvaWaterSolubleBags.title_dissolutionProcessStep2Film'),
      icon: <Layers className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-8">
          <AlternatingSection
            image="/imgs/function/water/a_dissolution_step2_dissolving_9965853.webp"
            imageAlt="PVA Film Dissolving Step 2"
            title={t('seoPages.pages.pvaWaterSolubleBags.title_step2FilmStartsTo')}
            titleCn="Steps2：FilmStartDissolve"
            content="Within seconds of submersion, the PVA film begins to thin and become more transparent. Small tears and openings appear along the edges as the water breaks down the polymer structure. You can see fine dissolution trails and tiny bubbles in the water as the film disintegrates."
            contentCn="EnterWaterA Few SecondsAfter，PVA FilmStartChangeThinChangeTransparent。EdgeEdgeOutPresentSmallSplitOpeningAndOpenOpening，WaterDivideSolvePolySuitableMaterialStructure。CanWithViewToWaterInHaveFineSmallOfDissolveTextureAndMicrobubble，FilmGraduallyDivideSolve。"
            imageLeft={false}
            index={3}
          />
          
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-neutral-50 p-4 rounded-lg border border-neutral-200 text-center">
              <span className="text-2xl">💧</span>
              <h4 className="font-semibold text-neutral-800 text-sm mt-2">{t('seoPages.pages.pvaWaterSolubleBags.waterActivation')}</h4>
              <p className="text-xs text-neutral-500">{t('seoPages.pages.pvaWaterSolubleBags.waterdivideintenselivedissolve')}</p>
            </div>
            <div className="bg-neutral-50 p-4 rounded-lg border border-neutral-200 text-center">
              <span className="text-2xl">⏱️</span>
              <h4 className="font-semibold text-neutral-800 text-sm mt-2">{t('seoPages.pages.pvaWaterSolubleBags.fastDissolution')}</h4>
              <p className="text-xs text-neutral-500">{t('seoPages.pages.pvaWaterSolubleBags.fastdissolve')}</p>
            </div>
            <div className="bg-neutral-50 p-4 rounded-lg border border-neutral-200 text-center">
              <span className="text-2xl">🫧</span>
              <h4 className="font-semibold text-neutral-800 text-sm mt-2">{t('seoPages.pages.pvaWaterSolubleBags.noResidue')}</h4>
              <p className="text-xs text-neutral-500">{t('seoPages.pages.pvaWaterSolubleBags.noresidue')}</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'dissolution-step3',
      title: t('seoPages.pages.pvaWaterSolubleBags.title_dissolutionProcessStep3Complete'),
      icon: <CheckCircle className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-8">
          <AlternatingSection
            image="/imgs/function/water/a_dissolution_step3_complete_2409421.webp"
            imageAlt="PVA Film Complete Dissolution Step 3"
            title={t('seoPages.pages.pvaWaterSolubleBags.title_step3FilmCompletelyDissolves')}
            titleCn="Steps3：FilmCompleteDissolve - Bait MaterialCloudFormForm"
            content="The PVA film is now almost invisible underwater. The bait pellets or groundbait freely disperse in the water, forming a concentrated 'cloud' around your hook. The fishing hook and line are clearly visible, surrounded by an attractive bait presentation that draws fish to your target zone."
            contentCn="PVA FilmInWaterInAlmostViewNotSeeDone。Bait MaterialParticleOrBait PowderInWaterInSelfByExpandScatter，InHookChildAroundFormFormConcentrateOfBait MaterialCloud。Fish HookAndFishLineClearCanSee，AroundIsAbsorbLeadFishCategoryOfAttractPersonBait MaterialPresent。"
            imageLeft={true}
            index={4}
          />
          
          <div className="bg-green-50 p-6 rounded-lg border border-green-200">
            <h4 className="font-semibold text-green-800 mb-3">{t('seoPages.pages.pvaWaterSolubleBags.benefitsOfCompleteDissolution')}</h4>
            <ul className="text-sm text-green-700 space-y-2">
              <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4" /> {t('seoPages.pages.pvaWaterSolubleBags.noResidueLeftInThe')}</li>
              <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4" /> {t('seoPages.pages.pvaWaterSolubleBags.baitConcentratedAroundTheHook')}</li>
              <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4" /> {t('seoPages.pages.pvaWaterSolubleBags.hookIsFreeToCatch')}</li>
              <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4" /> {t('seoPages.pages.pvaWaterSolubleBags.cleanAndEfficientBaitDelivery')}</li>
            </ul>
          </div>
        </div>
      )
    },
    {
      id: 'hook-bait-unity',
      title: t('seoPages.pages.pvaWaterSolubleBags.title_hookBaitUnityPerfectPresentation'),
      icon: <Fish className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-8">
          <AlternatingSection
            image="/imgs/function/water/a_hook_bait_unity_8654964.webp"
            imageAlt="Hook Hidden Inside PVA Bait Bag"
            title={t('seoPages.pages.pvaWaterSolubleBags.title_hookHiddenInsideTheBait')}
            titleCn="HookChildHiddenInBait MaterialIn"
            content="Before casting, the fishing hook is completely buried inside the bait mound within the PVA bag. Only a tiny tip of the hook is slightly visible. The bag top is heat-sealed for a secure closure. Once underwater, the bag dissolves and the hook is revealed, surrounded by an attractive bait pile."
            contentCn="ThrowBefore，Fish HookCompleteBuryIn PVA BagInsideOfBait MaterialStackIn，OnlyHaveOnePointPointHookSharpStrategyMicroCanSee。BagOpeningHeat SealEnsureSealed。EnterWaterAfterBagChildDissolve，HookChildReveal，AroundIsAttractPersonOfBait MaterialStack。"
            imageLeft={false}
            index={5}
          />
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-amber-50 p-5 rounded-lg border border-amber-200">
              <Fish className="h-6 w-6 text-amber-700 mb-2" />
              <h4 className="font-semibold text-amber-800 mb-2">{t('seoPages.pages.pvaWaterSolubleBags.carpFishing')}</h4>
              <ul className="text-sm text-amber-700 space-y-1">
                <li>{t('seoPages.pages.pvaWaterSolubleBags.pelletsAndBoiliesParticlebaitandbaitBall')}</li>
                <li>{t('seoPages.pages.pvaWaterSolubleBags.hempAndParticlesHempseedandparticle')}</li>
                <li>{t('seoPages.pages.pvaWaterSolubleBags.groundbaitMixBaitPowdermixsuitable')}</li>
                <li>{t('seoPages.pages.pvaWaterSolubleBags.methodFeederSetupsSidelawfishgroup')}</li>
              </ul>
            </div>
            <div className="bg-blue-50 p-5 rounded-lg border border-blue-200">
              <Target className="h-6 w-6 text-blue-700 mb-2" />
              <h4 className="font-semibold text-blue-800 mb-2">{t('seoPages.pages.pvaWaterSolubleBags.catfishing')}</h4>
              <ul className="text-sm text-blue-700 space-y-1">
                <li>{t('seoPages.pages.pvaWaterSolubleBags.stinkBaitSmelltastebait')}</li>
                <li>{t('seoPages.pages.pvaWaterSolubleBags.cutBaitCutpiecebait')}</li>
                <li>{t('seoPages.pages.pvaWaterSolubleBags.doughBaitFacegroupbait')}</li>
                <li>{t('seoPages.pages.pvaWaterSolubleBags.punchBaitRushpressurebait')}</li>
              </ul>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'fishing-application',
      title: t('seoPages.pages.pvaWaterSolubleBags.title_fishingApplicationScenes'),
      icon: <Globe className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-8">
          <AlternatingSection
            image="/imgs/function/water/a_fishing_application_scene_9430782.webp"
            imageAlt="PVA Bait Bag Fishing Application Scene"
            title={t('seoPages.pages.pvaWaterSolubleBags.title_cleanCastingPreciseBaiting')}
            titleCn="CleanThrow - FineStandardStrikeNest"
            content="An angler stands by the lake or river, casting a fishing hook rigged with a PVA water-soluble bait bag. The bait bag hits the water surface with a small splash, then sinks to the bottom where the bag dissolves and releases the bait cloud. Perfect for targeting specific spots without creating disturbance."
            contentCn="FishingPersonStandInLakeEdgeOrRiverEdge，WillHangHave PVA Water Soluble Bait BagsOfFish HookThrowOut。BaitBagEnterWaterTimeSplashStartSmallWaterFlower，ThenSinkEnterWaterBottom，BagChildDissolveReleaseBait MaterialCloud。Ideal forSuitableFineStandardStrikeNestAndNotDisturbFishGroup。"
            imageLeft={true}
            index={6}
          />
          
          <div className="grid md:grid-cols-4 gap-4">
            <div className="bg-neutral-50 p-4 rounded-lg border border-neutral-200 text-center">
              <span className="text-2xl">🐟</span>
              <h4 className="font-semibold text-neutral-800 text-sm mt-2">{t('seoPages.pages.pvaWaterSolubleBags.carpFishing')}</h4>
              <p className="text-xs text-neutral-500">{t('seoPages.pages.pvaWaterSolubleBags.carpfish')}</p>
            </div>
            <div className="bg-neutral-50 p-4 rounded-lg border border-neutral-200 text-center">
              <span className="text-2xl">🎣</span>
              <h4 className="font-semibold text-neutral-800 text-sm mt-2">{t('seoPages.pages.pvaWaterSolubleBags.catfishing')}</h4>
              <p className="text-xs text-neutral-500">{t('seoPages.pages.pvaWaterSolubleBags.catfishfish')}</p>
            </div>
            <div className="bg-neutral-50 p-4 rounded-lg border border-neutral-200 text-center">
              <span className="text-2xl">🌊</span>
              <h4 className="font-semibold text-neutral-800 text-sm mt-2">{t('seoPages.pages.pvaWaterSolubleBags.lakeFishing')}</h4>
              <p className="text-xs text-neutral-500">{t('seoPages.pages.pvaWaterSolubleBags.lakefish')}</p>
            </div>
            <div className="bg-neutral-50 p-4 rounded-lg border border-neutral-200 text-center">
              <span className="text-2xl">🏞️</span>
              <h4 className="font-semibold text-neutral-800 text-sm mt-2">{t('seoPages.pages.pvaWaterSolubleBags.riverFishing')}</h4>
              <p className="text-xs text-neutral-500">{t('seoPages.pages.pvaWaterSolubleBags.riverfish')}</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'sizes-customization',
      title: t('seoPages.pages.pvaWaterSolubleBags.title_sizesCustomization'),
      icon: <Ruler className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-8">
          <AlternatingSection
            image="/imgs/function/water/a_specification_custom_sizes_2365104.webp"
            imageAlt="PVA Bait Bag Custom Sizes"
            title={t('seoPages.pages.pvaWaterSolubleBags.title_customSizesPrintingAvailable')}
            titleCn="MultipleSpecificationCustomAndPrinting"
            content="Achieve Pack® offers PVA water-soluble bait bags in multiple sizes from small to large, suitable for different bait quantities and fishing applications. Custom sizes available. Options include clear or tinted film, with up to 10 colors printing for branding. All bags are heat-sealable."
            contentCn="Achieve Pack® ProvideFromSmallToLargeMultipleSpecificationOf PVA Water Soluble Bait Bags，Suitable forNotSameBaitVolumeAndFishingApplication。SupportCustomDimensions。OptionalTransparentOrHaveColorFilm，MostMultiple 10 ColorPrintingUseAtBrandCustom。AllBagChildEvenCanHeat Seal。"
            imageLeft={false}
            index={7}
          />
          
          <div className="bg-neutral-50 p-6 rounded-lg">
            <h4 className="font-semibold text-neutral-800 mb-4">{t('seoPages.pages.pvaWaterSolubleBags.availableSpecifications')}</h4>
            <div className="grid md:grid-cols-4 gap-4">
              <div className="bg-white p-4 rounded-lg border border-neutral-200 text-center">
                <h5 className="font-bold text-primary-600 text-lg">{t('seoPages.pages.pvaWaterSolubleBags.small')}</h5>
                <p className="text-xs text-neutral-500">{t('seoPages.pages.pvaWaterSolubleBags.forLightBaiting')}</p>
              </div>
              <div className="bg-white p-4 rounded-lg border border-neutral-200 text-center">
                <h5 className="font-bold text-primary-600 text-lg">{t('seoPages.pages.pvaWaterSolubleBags.medium')}</h5>
                <p className="text-xs text-neutral-500">{t('seoPages.pages.pvaWaterSolubleBags.standardSize')}</p>
              </div>
              <div className="bg-white p-4 rounded-lg border border-neutral-200 text-center">
                <h5 className="font-bold text-primary-600 text-lg">{t('seoPages.pages.pvaWaterSolubleBags.large')}</h5>
                <p className="text-xs text-neutral-500">{t('seoPages.pages.pvaWaterSolubleBags.forHeavyBaiting')}</p>
              </div>
              <div className="bg-white p-4 rounded-lg border border-neutral-200 text-center">
                <h5 className="font-bold text-primary-600 text-lg">{t('seoPages.pages.pvaWaterSolubleBags.custom')}</h5>
                <p className="text-xs text-neutral-500">{t('seoPages.pages.pvaWaterSolubleBags.yourSpecifications')}</p>
              </div>
            </div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
              <h4 className="font-semibold text-blue-800">{t('seoPages.pages.pvaWaterSolubleBags.clearFilm')}</h4>
              <p className="text-sm text-blue-700">{t('seoPages.pages.pvaWaterSolubleBags.seethroughTransparency')}</p>
              <p className="text-xs text-blue-600 mt-1">{t('seoPages.pages.pvaWaterSolubleBags.transparentfilm')}</p>
            </div>
            <div className="bg-cyan-50 p-4 rounded-lg border border-cyan-200">
              <h4 className="font-semibold text-cyan-800">{t('seoPages.pages.pvaWaterSolubleBags.tintedFilm')}</h4>
              <p className="text-sm text-cyan-700">{t('seoPages.pages.pvaWaterSolubleBags.colorOptionsAvailable')}</p>
              <p className="text-xs text-cyan-600 mt-1">{t('seoPages.pages.pvaWaterSolubleBags.havecolorfilm')}</p>
            </div>
            <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
              <h4 className="font-semibold text-purple-800">{t('seoPages.pages.pvaWaterSolubleBags.customPrinting')}</h4>
              <p className="text-sm text-purple-700">{t('seoPages.pages.pvaWaterSolubleBags.upTo10Colors')}</p>
              <p className="text-xs text-purple-600 mt-1">{t('seoPages.pages.pvaWaterSolubleBags.mostmultiple10colorprinting')}</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'storage-performance',
      title: t('seoPages.pages.pvaWaterSolubleBags.title_storagePerformance'),
      icon: <Box className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-8">
          <AlternatingSection
            image="/imgs/function/water/a_performance_storage_solubility_8701547.webp"
            imageAlt="PVA Bag Storage and Solubility Performance"
            title={t('seoPages.pages.pvaWaterSolubleBags.title_moistureproofStorageFastWaterSolubility')}
            titleCn="Moisture ProofStoreAndFastWater Soluble"
            content="PVA water-soluble bags must be stored in a dry environment before use to prevent premature dissolution. Keep in sealed containers or resealable pouches away from moisture. Once in water, the bags dissolve rapidly, releasing bait efficiently. Our bags are designed for consistent performance in various water temperatures."
            contentCn="PVA Water SolubleBagUseBeforeMust StorePlaceInDryEnvironmentIn，PreventRaiseBeforeDissolve。SaveInSealedCapacityDeviceOrCanResealBagIn，FarLeaveHumid。EnterWaterAfterBagChildFastDissolve，EfficientReleaseBait Material。OurBagChildInVariousWaterTemperatureUnderAllCanMaintainStablePropertyCan。"
            imageLeft={true}
            index={8}
          />
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-amber-50 p-5 rounded-lg border border-amber-200">
              <Thermometer className="h-6 w-6 text-amber-700 mb-2" />
              <h4 className="font-semibold text-amber-800 mb-3">{t('seoPages.pages.pvaWaterSolubleBags.storageGuidelines')}</h4>
              <ul className="text-sm text-amber-700 space-y-2">
                <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4" /> {t('seoPages.pages.pvaWaterSolubleBags.keepDryBeforeUse')}</li>
                <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4" /> {t('seoPages.pages.pvaWaterSolubleBags.storeInSealedContainers')}</li>
                <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4" /> {t('seoPages.pages.pvaWaterSolubleBags.avoidHumidityAndMoisture')}</li>
                <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4" /> {t('seoPages.pages.pvaWaterSolubleBags.roomTemperatureStorage')}</li>
              </ul>
            </div>
            <div className="bg-blue-50 p-5 rounded-lg border border-blue-200">
              <Droplets className="h-6 w-6 text-blue-700 mb-2" />
              <h4 className="font-semibold text-blue-800 mb-3">{t('seoPages.pages.pvaWaterSolubleBags.dissolutionPerformance')}</h4>
              <ul className="text-sm text-blue-700 space-y-2">
                <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4" /> {t('seoPages.pages.pvaWaterSolubleBags.fastDissolutionInWater')}</li>
                <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4" /> {t('seoPages.pages.pvaWaterSolubleBags.worksInVariousWaterTemps')}</li>
                <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4" /> {t('seoPages.pages.pvaWaterSolubleBags.noResidueLeftBehind')}</li>
                <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4" /> {t('seoPages.pages.pvaWaterSolubleBags.consistentPerformance')}</li>
              </ul>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'trust-eeat',
      title: t('seoPages.pages.pvaWaterSolubleBags.title_whyTrustAchievePack'),
      icon: <Award className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-8">
          {/* E-E-A-T Trust Signals */}
          <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-6 rounded-xl border border-blue-200">
            <h3 className="text-xl font-bold text-neutral-900 mb-4">{t('seoPages.pages.pvaWaterSolubleBags.professionalPvaWatersolublePackagingFrom')}</h3>
            <p className="text-neutral-700 mb-4">
              {t('seoPages.pages.pvaWaterSolubleBags.withOver13YearsOf')}
            </p>
            <p className="text-neutral-600 text-sm">
              {t('seoPages.pages.pvaWaterSolubleBags.withOver13YearsOf1')}
            </p>
          </div>
          
          {/* Trust Badges Grid */}
          <div className="grid md:grid-cols-4 gap-4">
            <div className="bg-white border border-neutral-200 p-4 rounded-lg text-center">
              <FileCheck className="h-8 w-8 text-blue-600 mx-auto mb-2" />
              <h4 className="font-semibold text-neutral-800">{t('seoPages.pages.pvaWaterSolubleBags.isoCertified')}</h4>
              <p className="text-xs text-neutral-500">{t('seoPages.pages.pvaWaterSolubleBags.qualityManagement')}</p>
            </div>
            <div className="bg-white border border-neutral-200 p-4 rounded-lg text-center">
              <Building2 className="h-8 w-8 text-blue-600 mx-auto mb-2" />
              <h4 className="font-semibold text-neutral-800">{t('seoPages.pages.pvaWaterSolubleBags.brcCertified')}</h4>
              <p className="text-xs text-neutral-500">{t('seoPages.pages.pvaWaterSolubleBags.foodSafetyStandard')}</p>
            </div>
            <div className="bg-white border border-neutral-200 p-4 rounded-lg text-center">
              <Globe className="h-8 w-8 text-blue-600 mx-auto mb-2" />
              <h4 className="font-semibold text-neutral-800">{t('seoPages.pages.pvaWaterSolubleBags.1200Tonsyear')}</h4>
              <p className="text-xs text-neutral-500">{t('seoPages.pages.pvaWaterSolubleBags.productionCapacity')}</p>
            </div>
            <div className="bg-white border border-neutral-200 p-4 rounded-lg text-center">
              <Users className="h-8 w-8 text-blue-600 mx-auto mb-2" />
              <h4 className="font-semibold text-neutral-800">{t('seoPages.pages.pvaWaterSolubleBags.13Years')}</h4>
              <p className="text-xs text-neutral-500">{t('seoPages.pages.pvaWaterSolubleBags.industryExperience')}</p>
            </div>
          </div>
          
          {/* Internal Links for SEO */}
          <div className="bg-neutral-50 p-6 rounded-lg">
            <h4 className="font-semibold text-neutral-800 mb-3">{t('seoPages.pages.pvaWaterSolubleBags.exploreRelatedSolutions')}</h4>
            <div className="grid md:grid-cols-3 gap-3">
              <Link to="/materials/compostable" className="flex items-center gap-2 text-primary-600 hover:text-primary-700 text-sm">
                <Recycle className="h-4 w-4" /> {t('seoPages.pages.pvaWaterSolubleBags.compostableMaterials')}
              </Link>
              <Link to="/packaging/flat-pouches" className="flex items-center gap-2 text-primary-600 hover:text-primary-700 text-sm">
                <Package className="h-4 w-4" /> {t('seoPages.pages.pvaWaterSolubleBags.flatPouches')}
              </Link>
              <Link to="/features/barrier-options" className="flex items-center gap-2 text-primary-600 hover:text-primary-700 text-sm">
                <Shield className="h-4 w-4" /> {t('seoPages.pages.pvaWaterSolubleBags.barrierOptions')}
              </Link>
              <Link to="/printing/digital-printing" className="flex items-center gap-2 text-primary-600 hover:text-primary-700 text-sm">
                <Layers className="h-4 w-4" /> {t('seoPages.pages.pvaWaterSolubleBags.digitalPrinting')}
              </Link>
              <Link to="/company/certificates" className="flex items-center gap-2 text-primary-600 hover:text-primary-700 text-sm">
                <Award className="h-4 w-4" /> {t('seoPages.pages.pvaWaterSolubleBags.ourCertifications')}
              </Link>
              <Link to="/support/faqs" className="flex items-center gap-2 text-primary-600 hover:text-primary-700 text-sm">
                <CheckCircle className="h-4 w-4" /> {t('seoPages.pages.pvaWaterSolubleBags.faqs')}
              </Link>
              <Link to="/function/rice-paper-bags" className="flex items-center gap-2 text-primary-600 hover:text-primary-700 text-sm">
                <Package className="h-4 w-4" /> {t('seoPages.pages.pvaWaterSolubleBags.ricePaperBags')}
              </Link>
              <Link to="/function/carbon-neutral-bags" className="flex items-center gap-2 text-primary-600 hover:text-primary-700 text-sm">
                <Recycle className="h-4 w-4" /> {t('seoPages.pages.pvaWaterSolubleBags.carbonNeutralBags')}
              </Link>
              <Link to="/company/factory-tour" className="flex items-center gap-2 text-primary-600 hover:text-primary-700 text-sm">
                <Building2 className="h-4 w-4" /> {t('seoPages.pages.pvaWaterSolubleBags.factoryTour')}
              </Link>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'cta',
      title: t('seoPages.pages.pvaWaterSolubleBags.title_readyToGetStarted'),
      icon: <Sparkles className="h-5 w-5 text-white" />,
      content: (
        <div className="bg-gradient-to-br from-blue-500 to-cyan-600 text-white p-8 rounded-xl">
          <h3 className="text-2xl font-bold mb-6 text-center">{t('seoPages.pages.pvaWaterSolubleBags.chooseHowYoudLikeTo')}</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white/10 backdrop-blur p-6 rounded-lg text-center">
              <Calendar className="h-8 w-8 mx-auto mb-3" />
              <h4 className="font-semibold mb-2">{t('seoPages.pages.pvaWaterSolubleBags.bookACall')}</h4>
              <p className="text-sm text-white/80 mb-4">{t('seoPages.pages.pvaWaterSolubleBags.30minFreeConsultation')}</p>
              <button onClick={openCalendly} className="w-full bg-white text-blue-600 px-4 py-2 rounded-lg font-semibold hover:bg-blue-50 transition cursor-pointer">
                {t('seoPages.pages.pvaWaterSolubleBags.scheduleNow')}
              </button>
            </div>
            <div className="bg-white/10 backdrop-blur p-6 rounded-lg text-center">
              <Mail className="h-8 w-8 mx-auto mb-3" />
              <h4 className="font-semibold mb-2">{t('seoPages.pages.pvaWaterSolubleBags.emailQuote')}</h4>
              <p className="text-sm text-white/80 mb-4">{t('seoPages.pages.pvaWaterSolubleBags.getResponseWithin24hrs')}</p>
              <a href="mailto:ryan@achievepack.com?subject=PVA Water-Soluble Bait Bags Quote" className="block w-full bg-white text-blue-600 px-4 py-2 rounded-lg font-semibold hover:bg-blue-50 transition">
                {t('seoPages.pages.pvaWaterSolubleBags.sendEmail')}
              </a>
            </div>
          </div>
        </div>
      )
    }
  ]

  const faqs = [
    {
      question: t('seoPages.pages.pvaWaterSolubleBags.question_whatArePvaWatersolubleBait'),
      answer: t('seoPages.pages.pvaWaterSolubleBags.answer_pvaPolyvinylAlcoholWatersolubleBait')
    },
    {
      question: t('seoPages.pages.pvaWaterSolubleBags.question_howLongDoesItTake'),
      answer: t('seoPages.pages.pvaWaterSolubleBags.answer_pvaBagsTypicallyDissolveWithin')
    },
    {
      question: t('seoPages.pages.pvaWaterSolubleBags.question_arePvaBaitBagsSafe'),
      answer: t('seoPages.pages.pvaWaterSolubleBags.answer_yesPvaWatersolubleBagsAre')
    },
    {
      question: t('seoPages.pages.pvaWaterSolubleBags.question_howShouldIStorePva'),
      answer: t('seoPages.pages.pvaWaterSolubleBags.answer_pvaBagsMustBeKept')
    },
    {
      question: t('seoPages.pages.pvaWaterSolubleBags.question_whatTypesOfBaitCan'),
      answer: t('seoPages.pages.pvaWaterSolubleBags.answer_pvaBagsWorkWithVarious')
    },
    {
      question: t('seoPages.pages.pvaWaterSolubleBags.question_canIGetCustomsizedPva'),
      answer: t('seoPages.pages.pvaWaterSolubleBags.answer_yesAchievePackOffersCustom')
    },
    {
      question: t('seoPages.pages.pvaWaterSolubleBags.question_whatFishingApplicationsArePva'),
      answer: t('seoPages.pages.pvaWaterSolubleBags.answer_pvaBaitBagsAreIdeal')
    },
    {
      question: t('seoPages.pages.pvaWaterSolubleBags.question_whatIsTheMinimumOrder'),
      answer: t('seoPages.pages.pvaWaterSolubleBags.answer_minimumOrderQuantitiesVaryBased')
    }
  ]

  // Enhanced related links for internal linking SEO
  const relatedLinks = [
    // Material options
    { title: t('seoPages.pages.pvaWaterSolubleBags.title_compostableMaterials'), url: "/materials/compostable", description: t('seoPages.pages.pvaWaterSolubleBags.description_100PlasticfreeEcofriendlyMaterialOptions') },
    { title: t('seoPages.pages.pvaWaterSolubleBags.title_homeCompostable'), url: "/materials/home-compostable", description: t('seoPages.pages.pvaWaterSolubleBags.description_okCompostHomeCertifiedMaterials') },
    // Packaging shapes
    { title: t('seoPages.pages.pvaWaterSolubleBags.title_flatPouches'), url: "/packaging/flat-pouches", description: t('seoPages.pages.pvaWaterSolubleBags.description_3sideSealFlatPouches') },
    { title: t('seoPages.pages.pvaWaterSolubleBags.title_standUpPouches'), url: "/packaging/stand-up-pouches", description: t('seoPages.pages.pvaWaterSolubleBags.description_versatileSelfstandingPackaging') },
    // Features
    { title: t('seoPages.pages.pvaWaterSolubleBags.title_barrierOptions'), url: "/features/barrier-options", description: t('seoPages.pages.pvaWaterSolubleBags.description_chooseYourProtectionLevel') },
    { title: t('seoPages.pages.pvaWaterSolubleBags.title_digitalPrinting'), url: "/printing/digital-printing", description: t('seoPages.pages.pvaWaterSolubleBags.description_lowMoqCustomPrintedPouches') },
    // Related function pages
    { title: t('seoPages.pages.pvaWaterSolubleBags.title_ricePaperBags'), url: "/function/rice-paper-bags", description: t('seoPages.pages.pvaWaterSolubleBags.description_compostableRicePaperPouches') },
    { title: t('seoPages.pages.pvaWaterSolubleBags.title_carbonNeutralBags'), url: "/function/carbon-neutral-bags", description: t('seoPages.pages.pvaWaterSolubleBags.description_climatepositivePackaging') },
    { title: t('seoPages.pages.pvaWaterSolubleBags.title_microwaveSteamBags'), url: "/function/microwave-steam-bags", description: t('seoPages.pages.pvaWaterSolubleBags.description_microwavesafeSteamVenting') },
    { title: t('seoPages.pages.pvaWaterSolubleBags.title_childresistantBags'), url: "/function/child-resistant-bags", description: t('seoPages.pages.pvaWaterSolubleBags.description_certifiedChildsafetyPackaging') },
    // Company
    { title: t('seoPages.pages.pvaWaterSolubleBags.title_certificates'), url: "/company/certificates", description: t('seoPages.pages.pvaWaterSolubleBags.description_isoBrcCertifications') },
    { title: t('seoPages.pages.pvaWaterSolubleBags.title_factoryTour'), url: "/company/factory-tour", description: t('seoPages.pages.pvaWaterSolubleBags.description_seeOurProductionFacility') },
    { title: t('seoPages.pages.pvaWaterSolubleBags.title_faqs'), url: "/support/faqs", description: t('seoPages.pages.pvaWaterSolubleBags.description_commonQuestionsAnswered') }
  ]

  if (isPouchDomain) {
    return (
      <BlogArticleTemplate
        title={t('seoPages.pages.pvaWaterSolubleBags.title_pvaWatersolubleBagsZerowastePackaging')}
        metaDescription={t('seoPages.pages.pvaWaterSolubleBags.metaDescription')}
        canonicalUrl="https://pouch.eco/function/pva-water-soluble-bags"
        keywords={['PVA water soluble bags', 'water soluble film', 'zero waste packaging', 'laundry pod film', 'biodegradable bags']}
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
              <span className="bg-[#00FFFF] text-black px-1.5 py-0.5 border border-black">PVA Water-Soluble Bags</span>
            </div>

            {/* Badges / Cross Links */}
            <div className="flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-1 px-3 py-1.5 text-xs font-black bg-[#10b981] text-white border-2 border-black uppercase tracking-wider shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                🌱 100% Zero-Waste
              </span>
              <Link 
                to="/function/carbon-neutral-bags" 
                className="inline-flex items-center gap-1 px-3 py-1.5 text-xs font-black bg-[#D4FF00] text-black border-2 border-black hover:bg-[#00FFFF] transition-colors uppercase tracking-wider shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]"
              >
                🔄 View Carbon Neutral Bags →
              </Link>
            </div>

            <h1 className="font-black text-4xl md:text-6xl lg:text-7xl uppercase leading-tight mt-4">
              PVA Water-Soluble<br />
              <span className="text-[#00FFFF] bg-black text-white px-2 inline-block my-1">Bags & Films</span><br />
              DTC Startup Guide
            </h1>
          </div>
        }
        heroSubtitle={t('seoPages.pages.pvaWaterSolubleBags.heroSubtitle')}
        heroImage="/imgs/function/water/hero.webp"
        heroImageAlt="POUCH.ECO PVA Water-Soluble Packaging"
        categoryTag="ECO_PRODUCTS"
        categoryColor="#00FFFF"
        readTime="5 min read"
        sections={b2cSections}
        ctaTitle={t('seoPages.pages.pvaWaterSolubleBags.ctaTitle')}
        ctaDescription={t('seoPages.pages.pvaWaterSolubleBags.ctaDescription')}
        calendlyUrl="https://calendly.com/30-min-free-packaging-consultancy"
        achievePackLink="https://achievepack.com/function/pva-water-soluble-bags"
        achievePackText={t('seoPages.pages.pvaWaterSolubleBags.achievePackText')}
        showTableOfContents={true}
        relatedArticles={[
          {
            title: t('seoPages.pages.pvaWaterSolubleBags.title_carbonNeutralBags'),
            url: "/function/carbon-neutral-bags",
            image: "/imgs/function/carbon/hero.webp"
          },
          {
            title: t('seoPages.pages.pvaWaterSolubleBags.title_ricePaperBags'),
            url: "/function/rice-paper-bags",
            image: "/imgs/function/rice/hero.webp"
          }
        ]}
      />
    )
  }

  return (
    <>
      <SEOPageLayout heroBgColor="#1e3a8a"
        title={t('seoPages.pages.pvaWaterSolubleBags.title_pvaWatersolubleBaitBagsAchieve')}
        description={t('seoPages.pages.pvaWaterSolubleBags.description')}
        keywords={['PVA bait bags', 'water-soluble bags', 'fishing bait packaging', 'PVA bags fishing', 'dissolving bait bags', 'carp fishing bags', 'catfish bait bags', 'water soluble film', 'biodegradable bait bags', 'fishing tackle packaging', 'PVA mesh bags', 'Water Soluble Bait Bags', 'PVAFishingBag']}
        canonicalUrl="https://achievepack.com/function/pva-water-soluble-bags"
        heroTitle={t('seoPages.pages.pvaWaterSolubleBags.heroTitle')}
        heroSubtitle={t('seoPages.pages.pvaWaterSolubleBags.heroSubtitle')}
        heroImage="/imgs/function/water/hero.webp"
        heroImageAlt="Achieve Pack PVA Water-Soluble Bait Bags"
        introSummary={t('seoPages.pages.pvaWaterSolubleBags.introSummary')}
        sections={sections}
        faqs={faqs}
        relatedLinks={relatedLinks}
        ctaTitle={t('seoPages.pages.pvaWaterSolubleBags.ctaTitle')}
        ctaDescription={t('seoPages.pages.pvaWaterSolubleBags.ctaDescription')}
        ctaButtonText={t('seoPages.pages.pvaWaterSolubleBags.ctaButtonText')}
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
          <img src={galleryEnlarged.src} alt={pvaGallery[galleryEnlarged.index]?.title || 'Enlarged view'} className="max-w-full max-h-[80vh] object-contain" onClick={(e) => e.stopPropagation()} />
          <button onClick={(e) => { e.stopPropagation(); navigateGallery('next'); }} className="absolute right-4 text-white hover:text-neutral-300 transition p-2">
            <ChevronRight className="h-10 w-10" />
          </button>
          <div className="absolute bottom-4 left-0 right-0 text-center text-white">
            <p className="font-medium">{pvaGallery[galleryEnlarged.index]?.title}</p>
            <p className="text-sm text-neutral-300">{pvaGallery[galleryEnlarged.index]?.desc}</p>
          </div>
        </div>
      )}
    </>
  )
}

export default PVAWaterSolubleBagsPage
