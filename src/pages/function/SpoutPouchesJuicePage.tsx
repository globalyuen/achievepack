import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Droplets, Recycle, Package, Shield, Users, CheckCircle, Calendar, Mail, X, ChevronLeft, ChevronRight, Zap, Award, Building2, FileCheck, Globe, Sparkles } from 'lucide-react'
import SEOPageLayout from '../../components/SEOPageLayout'
import { Link } from 'react-router-dom'
import { useCalendly } from '../../contexts/CalendlyContext'
import { getDomain } from '../../utils/domain'
import BlogArticleTemplate from '../../components/pouch/BlogArticleTemplate'

// Gallery images from /imgs/function/spout/


const SpoutPouchesJuicePage: React.FC = () => {
  const { t } = useTranslation()

  const spoutGallery = [
  { src: '/imgs/function/spout/a_hero_kv_juice_pouch_7892714.webp', title: t('seoPages.pages.spoutPouchesJuice.title_ecofriendlySpoutPouchesForJuice'), desc: t('seoPages.pages.spoutPouchesJuice.desc_customShapesFoodGradeRecyclable') },
  { src: '/imgs/function/spout/a_info_food_safe_recyclable_3061288.webp', title: t('seoPages.pages.spoutPouchesJuice.title_foodsafeRecyclable'), desc: t('seoPages.pages.spoutPouchesJuice.desc_foodGradeRecyclable') },
  { src: '/imgs/function/spout/a_detail_spout_cap_2155787.webp', title: t('seoPages.pages.spoutPouchesJuice.title_easypourSpoutTop'), desc: t('seoPages.pages.spoutPouchesJuice.desc_easypourspoutdesign') },
  { src: '/imgs/function/spout/a_custom_shape_ergonomic_8007266.webp', title: t('seoPages.pages.spoutPouchesJuice.title_customshapedPouches'), desc: t('seoPages.pages.spoutPouchesJuice.desc_customShapedBagsForAdult') },
  { src: '/imgs/function/spout/a_barrier_freshness_juice_9675285.webp', title: t('seoPages.pages.spoutPouchesJuice.title_keepJuiceFreshLonger'), desc: t('seoPages.pages.spoutPouchesJuice.desc_letjuicemaintainmorelongfresh') },
  { src: '/imgs/function/spout/a_refillable_on_the_go_0614853.webp', title: t('seoPages.pages.spoutPouchesJuice.title_refillReuseEnjoyAgain'), desc: t('seoPages.pages.spoutPouchesJuice.desc_canwithrepeatedfillingagainenjoyuse') },
  { src: '/imgs/function/spout/a_recyclable_structure_callout_4512115.webp', title: t('seoPages.pages.spoutPouchesJuice.title_recyclableSpoutPouchStructure'), desc: t('seoPages.pages.spoutPouchesJuice.desc_recyclablespoutbagstructure') },
  { src: '/imgs/function/spout/a_sport_commute_scene_7174103.webp', title: t('seoPages.pages.spoutPouchesJuice.title_perfectForSportCommute'), desc: t('seoPages.pages.spoutPouchesJuice.desc_suitablesuitablesportscommuteTravel') },
  { src: '/imgs/function/spout/a_fridge_chill_scene_2985986.webp', title: t('seoPages.pages.spoutPouchesJuice.title_readyToChill'), desc: t('seoPages.pages.spoutPouchesJuice.desc_placeintorefrigeratorreadyToDrink') },
  { src: '/imgs/function/spout/a_custom_system_closing_page_7251476.webp', title: t('seoPages.pages.spoutPouchesJuice.title_designYourEcoSpoutJuice'), desc: t('seoPages.pages.spoutPouchesJuice.desc_andAchievePackTogetherdesignyouofecofrie') },
]


  const { openCalendly } = useCalendly()
  const [galleryEnlarged, setGalleryEnlarged] = useState<{ src: string; index: number } | null>(null)
  
  const isPouchDomain = getDomain() === 'pouch'

  const navigateGallery = (direction: 'prev' | 'next') => {
    if (!galleryEnlarged) return
    let newIndex = direction === 'prev' ? galleryEnlarged.index - 1 : galleryEnlarged.index + 1
    if (newIndex < 0) newIndex = spoutGallery.length - 1
    if (newIndex >= spoutGallery.length) newIndex = 0
    setGalleryEnlarged({ src: spoutGallery[newIndex].src, index: newIndex })
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
      title: t('seoPages.pages.spoutPouchesJuice.title_recyclableSpoutJuicePouches'),
      icon: <Droplets className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-8">
          <div className="bg-gradient-to-r from-orange-50 to-amber-50 p-6 rounded-lg border border-orange-200">
            <p className="text-lg font-medium text-neutral-900 mb-4">
              <strong>{t('seoPages.pages.spoutPouchesJuice.customshapedFoodsafeAndRecyclable')}</strong> {t('seoPages.pages.spoutPouchesJuice.achievePackSpoutPouchesAre')}
            </p>
            <p className="text-neutral-700">
              {t('seoPages.pages.spoutPouchesJuice.customShapesFoodGradeRecyclable')}
            </p>
          </div>
          
          <AlternatingSection
            image="/imgs/function/spout/a_hero_kv_juice_pouch_7892714.webp"
            imageAlt="Achieve Pack Eco-Friendly Spout Pouches for Juice"
            title={t('seoPages.pages.spoutPouchesJuice.title_ecofriendlySpoutPouchesForJuice')}
            titleCn="Eco-FriendlySpoutJuiceBag"
            content="Using food-grade multi-layer film structures (such as PET/PE or recyclable mono-PE), suitable for juices, sports drinks, cold brew tea and other liquid products. Spout top with heat seal + screw cap prevents leaks and contamination."
            contentCn="UseMatchSuitableFoodContactStandardOfMulti-LayerFilmStructure（If PET/PE OrRecyclable mono-PE），SuitableSuitableJuice、SportsBeverage、Cold BrewTeaEtcLiquidProduct。SpoutTopPartHeat Seal + RotateCover，AntiLeak、AntiContamination。"
            imageLeft={true}
            index={0}
          />
        </div>
      )
    },
    {
      id: 'food-safe',
      title: t('seoPages.pages.spoutPouchesJuice.title_foodsafeRecyclable'),
      icon: <Shield className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-8">
          <AlternatingSection
            image="/imgs/function/spout/a_info_food_safe_recyclable_3061288.webp"
            imageAlt="Food-Safe and Recyclable Spout Pouches"
            title={t('seoPages.pages.spoutPouchesJuice.title_foodgradeMaterialsForBeverages')}
            titleCn="Food Grade · Recyclable"
            content="Choose from 100% recyclable mono-material (such as mono-PE), plant-based or PCR structures to meet brand goals for reducing plastic footprint and local recycling system requirements."
            contentCn="CanChoose 100% RecyclableSingleMaterial（If mono-PE）、PlantMaterialBaseOrInclude PCR Structure，MeetBrandReducePlasticFootprintAndBookGroundReturnCollectBodySystemNeedDemand。"
            imageLeft={false}
            index={1}
          />
          
          <div className="grid md:grid-cols-2 gap-4 mt-6">
            <div className="bg-orange-50 p-4 rounded-lg border border-orange-200">
              <Droplets className="h-5 w-5 text-orange-600 mb-2" />
              <h4 className="font-semibold text-orange-800">{t('seoPages.pages.spoutPouchesJuice.foodgradeMaterials')}</h4>
              <p className="text-sm text-orange-700">{t('seoPages.pages.spoutPouchesJuice.suitableForjuiceandbeverageoffoodGradema')}</p>
            </div>
            <div className="bg-green-50 p-4 rounded-lg border border-green-200">
              <Recycle className="h-5 w-5 text-green-600 mb-2" />
              <h4 className="font-semibold text-green-800">{t('seoPages.pages.spoutPouchesJuice.recyclableStructures')}</h4>
              <p className="text-sm text-green-700">{t('seoPages.pages.spoutPouchesJuice.providesinglematerialorrecyclablestructu')}</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'spout-cap',
      title: t('seoPages.pages.spoutPouchesJuice.title_easypourSpoutDesign'),
      icon: <Zap className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-8">
          <AlternatingSection
            image="/imgs/function/spout/a_detail_spout_cap_2155787.webp"
            imageAlt="Spout and Cap Close-up"
            title={t('seoPages.pages.spoutPouchesJuice.title_twistToOpenTwistTo')}
            titleCn="EasyPourSpoutDesign"
            content="The spout design makes it convenient for adults to drink one-handed while commuting, exercising or on daily outings. Compared to bottles and cans, it reduces weight and transportation volume."
            contentCn="SpoutDesignConvenientAtFormPersonInCommute、SportsOrDailyOutsideOutTimeSingleHandDrinkUse，ComparedBottles and JarsReduceHeavy、ReduceLowTransportationBodyArea。RotateOpenImmediatelyUse，RotateTightLeak-Proof。"
            imageLeft={true}
            index={2}
          />
        </div>
      )
    },
    {
      id: 'custom-shape',
      title: t('seoPages.pages.spoutPouchesJuice.title_customShapeErgonomics'),
      icon: <Package className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-8">
          <AlternatingSection
            image="/imgs/function/spout/a_custom_shape_ergonomic_8007266.webp"
            imageAlt="Custom-Shaped Pouches"
            title={t('seoPages.pages.spoutPouchesJuice.title_customshapedPouchesForAdults')}
            titleCn="Custom Shaped Bags for Adult Consumers"
            content="The stand-up design provides a large display surface on shelves and in freezers, making it easy to display. Customize bag contours, handles and curves to make adult juice and functional beverages look more premium and differentiated."
            contentCn="Stand-UpDesignInShelf、FreezerInDisplayFaceLarge，EasyAtDisplay。CanCustomBagFormContour、HandleHand、ArcLine，LetFormPersonJuice/FunctionCanBeverageViewStartComeMoreAddHighGradeAndDifferenceization。LetBagFormBothMatchSuitableBrandUnitProperty，AndGoodTakeGoodGrip。"
            imageLeft={false}
            index={3}
          />
        </div>
      )
    },
    {
      id: 'barrier',
      title: t('seoPages.pages.spoutPouchesJuice.title_barrierFreshness'),
      icon: <Shield className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-8">
          <AlternatingSection
            image="/imgs/function/spout/a_barrier_freshness_juice_9675285.webp"
            imageAlt="Barrier and Freshness for Juice"
            title={t('seoPages.pages.spoutPouchesJuice.title_keepJuiceFreshLonger')}
            titleCn="LetJuiceMaintainMoreLongFresh"
            content="The tight screw cap combined with high-barrier film reduces oxygen and moisture ingress, maintaining fresh taste. High-barrier laminated film helps protect flavor and vitamins."
            contentCn="TightRotateCover + HighBarrierFilmWithSuitable，ReduceOxygenAndWaterSteamEnter，MaintainFreshOpeningFeel。HighBarrierCompoundSuitableFilmHaveAssistAtProtectionFlavorAndVitamin。"
            imageLeft={true}
            index={4}
          />
          
          <div className="grid md:grid-cols-2 gap-4 mt-6">
            <div className="bg-blue-50 p-4 rounded-lg border border-blue-200 text-center">
              <div className="text-2xl mb-2">🛡️</div>
              <h4 className="font-semibold text-blue-800">{t('seoPages.pages.spoutPouchesJuice.oBarrier')}</h4>
              <p className="text-xs text-blue-600">{t('seoPages.pages.spoutPouchesJuice.oxygenbarrier')}</p>
            </div>
            <div className="bg-cyan-50 p-4 rounded-lg border border-cyan-200 text-center">
              <div className="text-2xl mb-2">💧</div>
              <h4 className="font-semibold text-cyan-800">{t('seoPages.pages.spoutPouchesJuice.moistureBarrier')}</h4>
              <p className="text-xs text-cyan-600">{t('seoPages.pages.spoutPouchesJuice.watersteambarrier')}</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'refillable',
      title: t('seoPages.pages.spoutPouchesJuice.title_refillableOnthego'),
      icon: <Recycle className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-8">
          <AlternatingSection
            image="/imgs/function/spout/a_refillable_on_the_go_0614853.webp"
            imageAlt="Refillable and On-the-Go"
            title={t('seoPages.pages.spoutPouchesJuice.title_refillReuseEnjoyAgain')}
            titleCn="CanWithRepeatedFilling，AgainEnjoyUse"
            content="Great for juices, cold brew, cocktails and more. The convenient spout design allows for easy refilling and on-the-go consumption."
            contentCn="SuitableSuitableJuice、Cold Brew、ChickenEndWineEtcMultipleBeverage。ConvenientQuickOfSpoutDesignSideConvenientRepeatedFillingAndCarry AlongWith。"
            imageLeft={false}
            index={5}
          />
        </div>
      )
    },
    {
      id: 'recyclable-structure',
      title: t('seoPages.pages.spoutPouchesJuice.title_recyclableStructureOptions'),
      icon: <Recycle className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-8">
          <AlternatingSection
            image="/imgs/function/spout/a_recyclable_structure_callout_4512115.webp"
            imageAlt="Recyclable Spout Pouch Structure"
            title={t('seoPages.pages.spoutPouchesJuice.title_recyclableSpoutPouchStructure')}
            titleCn="RecyclableSpoutBagStructure"
            content="Mono-material PE options are available for markets with recycling infrastructure. Always check local recycling guidelines for proper disposal."
            contentCn="OptionalSingleMaterial PE Structure，Suitable forToolPrepareReturnCollectBaseFoundationSetApplyOfMarket。PleaseReferenceWhenGroundReturnCollectPointLeadIntoLineCorrectProcessing。"
            imageLeft={true}
            index={6}
          />
        </div>
      )
    },
    {
      id: 'sport-commute',
      title: t('seoPages.pages.spoutPouchesJuice.title_perfectForSportTravel'),
      icon: <Zap className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-8">
          <AlternatingSection
            image="/imgs/function/spout/a_sport_commute_scene_7174103.webp"
            imageAlt="Sport and Commute Scene"
            title={t('seoPages.pages.spoutPouchesJuice.title_perfectForSportWorkAnd')}
            titleCn="SuitableSuitableSports、Commute & Travel"
            content="Lightweight and shatter-free alternative to bottles. Ideal for active lifestyles where convenience and portability matter."
            contentCn="RatioBottleInstallMoreLight，NotEasyShatter。Ideal forSuitableNoteHeavyConvenientBenefitPropertyAndPortablePropertyOfLiveJumpRawLiveMethod。"
            imageLeft={false}
            index={7}
          />
        </div>
      )
    },
    {
      id: 'fridge-ready',
      title: t('seoPages.pages.spoutPouchesJuice.title_readyToChill'),
      icon: <Droplets className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-8">
          <AlternatingSection
            image="/imgs/function/spout/a_fridge_chill_scene_2985986.webp"
            imageAlt="Fridge Chill Scene"
            title={t('seoPages.pages.spoutPouchesJuice.title_standupDesignForEasyStorage')}
            titleCn="PlaceIntoRefrigerator，Ready to Drink"
            content="The stand-up design keeps pouches neat in the fridge. Easy to grab and enjoy chilled beverages anytime."
            contentCn="Stand-UpStructureInRefrigeratorInWholeCompleteGoodPlace，SideConvenientFollowTimeTakeUseChilledBeverage。"
            imageLeft={true}
            index={8}
          />
        </div>
      )
    },
    {
      id: 'custom-system',
      title: t('seoPages.pages.spoutPouchesJuice.title_designYourCustomSpoutSystem'),
      icon: <Package className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-8">
          <AlternatingSection
            image="/imgs/function/spout/a_custom_system_closing_page_7251476.webp"
            imageAlt="Design Your Custom Spout System"
            title={t('seoPages.pages.spoutPouchesJuice.title_designYourEcoSpoutJuice')}
            titleCn="And Achieve Pack TogetherDesignYouOfEco-FriendlySpoutJuiceBagSeries"
            content="Three simple steps: 1) Choose your volume and shape, 2) Select spout, cap and material (recyclable, bio-based, PCR), 3) Add custom printing for your adult juice brand."
            contentCn="Three Simple Steps：1) ChooseCapacityAndBagForm，2) ChooseSpout、CoverChildAndMaterial（Recyclable、Bio-Based、PCR Etc），3) PlusYouOfJuiceOrFunctionCanBeverageBrandPrinting。"
            imageLeft={false}
            index={9}
          />
          
          <div className="bg-gradient-to-r from-orange-50 to-amber-50 p-6 rounded-lg border border-orange-200">
            <h4 className="font-bold text-neutral-900 mb-4">{t('seoPages.pages.spoutPouchesJuice.3StepsToYourCustom')}</h4>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">1</div>
                <div>
                  <p className="font-medium text-neutral-800">{t('seoPages.pages.spoutPouchesJuice.chooseVolumeShape')}</p>
                  <p className="text-xs text-neutral-600">{t('seoPages.pages.spoutPouchesJuice.choosecapacityandbagform')}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">2</div>
                <div>
                  <p className="font-medium text-neutral-800">{t('seoPages.pages.spoutPouchesJuice.selectSpoutMaterial')}</p>
                  <p className="text-xs text-neutral-600">{t('seoPages.pages.spoutPouchesJuice.choosespoutcoverchildandmaterial')}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">3</div>
                <div>
                  <p className="font-medium text-neutral-800">{t('seoPages.pages.spoutPouchesJuice.addCustomPrinting')}</p>
                  <p className="text-xs text-neutral-600">{t('seoPages.pages.spoutPouchesJuice.plusyouofbrandprinting')}</p>
                </div>
              </div>
            </div>
            <p className="text-sm text-neutral-600 mt-4 text-center">{t('seoPages.pages.spoutPouchesJuice.fromConceptToShelfreadyPouches')}<br/>{t('seoPages.pages.spoutPouchesJuice.fromroughlyconcepttoupshelfformproducton')}</p>
          </div>
        </div>
      )
    },
    {
      id: 'trust-eeat',
      title: t('seoPages.pages.spoutPouchesJuice.title_whyTrustAchievePack'),
      icon: <Award className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-8">
          {/* E-E-A-T Trust Signals */}
          <div className="bg-gradient-to-r from-primary-50 to-orange-50 p-6 rounded-xl border border-primary-200">
            <h3 className="text-xl font-bold text-neutral-900 mb-4">{t('seoPages.pages.spoutPouchesJuice.industryleadingExpertiseInBeveragePackag')}</h3>
            <p className="text-neutral-700 mb-4">
              {t('seoPages.pages.spoutPouchesJuice.withOver13YearsOf')}
            </p>
            <p className="text-neutral-600">
              {t('seoPages.pages.spoutPouchesJuice.ourBrcAndIsocertifiedFacilities')} <Link to="/packaging/spout-pouches" className="text-primary-600 underline hover:text-primary-800">{t('seoPages.pages.spoutPouchesJuice.spoutPouches')}</Link> {t('seoPages.pages.spoutPouchesJuice.usingFoodgradeMultilayerFilmsAnd')} <Link to="/materials/recyclable-mono-pe" className="text-primary-600 underline hover:text-primary-800">{t('seoPages.pages.spoutPouchesJuice.recyclableMonopeStructures')}</Link> {t('seoPages.pages.spoutPouchesJuice.forLeadingBeverageBrandsWorldwide')}
            </p>
          </div>
          
          {/* Trust Badges Grid */}
          <div className="grid md:grid-cols-4 gap-4">
            <div className="bg-white p-4 rounded-lg border border-neutral-200 text-center shadow-sm">
              <FileCheck className="h-8 w-8 mx-auto mb-2 text-blue-600" />
              <h4 className="font-bold text-neutral-900">{t('seoPages.pages.spoutPouchesJuice.fdaCompliant')}</h4>
              <p className="text-xs text-neutral-600">{t('seoPages.pages.spoutPouchesJuice.foodContactSafe')}</p>
            </div>
            <div className="bg-white p-4 rounded-lg border border-neutral-200 text-center shadow-sm">
              <Shield className="h-8 w-8 mx-auto mb-2 text-green-600" />
              <h4 className="font-bold text-neutral-900">{t('seoPages.pages.spoutPouchesJuice.brcCertified')}</h4>
              <p className="text-xs text-neutral-600">{t('seoPages.pages.spoutPouchesJuice.globalFoodStandard')}</p>
            </div>
            <div className="bg-white p-4 rounded-lg border border-neutral-200 text-center shadow-sm">
              <Building2 className="h-8 w-8 mx-auto mb-2 text-purple-600" />
              <h4 className="font-bold text-neutral-900">{t('seoPages.pages.spoutPouchesJuice.500Brands')}</h4>
              <p className="text-xs text-neutral-600">{t('seoPages.pages.spoutPouchesJuice.trustedByIndustry')}</p>
            </div>
            <div className="bg-white p-4 rounded-lg border border-neutral-200 text-center shadow-sm">
              <Globe className="h-8 w-8 mx-auto mb-2 text-orange-600" />
              <h4 className="font-bold text-neutral-900">{t('seoPages.pages.spoutPouchesJuice.globalShipping')}</h4>
              <p className="text-xs text-neutral-600">{t('seoPages.pages.spoutPouchesJuice.worldwideDelivery')}</p>
            </div>
          </div>
          
          {/* Internal Links for SEO */}
          <div className="bg-neutral-50 p-6 rounded-lg">
            <h4 className="font-semibold text-neutral-900 mb-4 flex items-center gap-2">
              <Sparkles className="h-5 w-5 text-primary-600" />
              {t('seoPages.pages.spoutPouchesJuice.exploreRelatedPackagingSolutions')}
            </h4>
            <div className="grid md:grid-cols-3 gap-3">
              <Link to="/materials/recyclable-mono-pe" className="flex items-center gap-2 text-sm text-primary-600 hover:text-primary-800 hover:underline">
                <Recycle className="h-4 w-4" /> {t('seoPages.pages.spoutPouchesJuice.recyclableMonope')}
              </Link>
              <Link to="/materials/pcr" className="flex items-center gap-2 text-sm text-primary-600 hover:text-primary-800 hover:underline">
                <Recycle className="h-4 w-4" /> {t('seoPages.pages.spoutPouchesJuice.pcrMaterials')}
              </Link>
              <Link to="/features/barrier-options" className="flex items-center gap-2 text-sm text-primary-600 hover:text-primary-800 hover:underline">
                <Shield className="h-4 w-4" /> {t('seoPages.pages.spoutPouchesJuice.barrierOptions')}
              </Link>
              <Link to="/packaging/stand-up-pouches" className="flex items-center gap-2 text-sm text-primary-600 hover:text-primary-800 hover:underline">
                <Package className="h-4 w-4" /> {t('seoPages.pages.spoutPouchesJuice.standUpPouches')}
              </Link>
              <Link to="/industry/sauces-condiments" className="flex items-center gap-2 text-sm text-primary-600 hover:text-primary-800 hover:underline">
                <Droplets className="h-4 w-4" /> {t('seoPages.pages.spoutPouchesJuice.liquidPackaging')}
              </Link>
              <Link to="/company/certificates" className="flex items-center gap-2 text-sm text-primary-600 hover:text-primary-800 hover:underline">
                <FileCheck className="h-4 w-4" /> {t('seoPages.pages.spoutPouchesJuice.ourCertificates')}
              </Link>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'cta',
      title: t('seoPages.pages.spoutPouchesJuice.title_readyToGetStarted'),
      icon: <Droplets className="h-5 w-5 text-white" />,
      content: (
        <div className="bg-gradient-to-br from-orange-500 to-amber-600 text-white p-8 rounded-xl">
          <h3 className="text-2xl font-bold mb-6 text-center">{t('seoPages.pages.spoutPouchesJuice.chooseHowYoudLikeTo')}</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white/10 backdrop-blur p-6 rounded-lg text-center">
              <Calendar className="h-8 w-8 mx-auto mb-3" />
              <h4 className="font-semibold mb-2">{t('seoPages.pages.spoutPouchesJuice.bookACall')}</h4>
              <p className="text-sm text-white/80 mb-4">{t('seoPages.pages.spoutPouchesJuice.30minFreeConsultation')}</p>
              <button onClick={openCalendly} className="w-full bg-white text-orange-600 px-4 py-2 rounded-lg font-semibold hover:bg-orange-50 transition cursor-pointer">
                {t('seoPages.pages.spoutPouchesJuice.scheduleNow')}
              </button>
            </div>
            <div className="bg-white/10 backdrop-blur p-6 rounded-lg text-center">
              <Mail className="h-8 w-8 mx-auto mb-3" />
              <h4 className="font-semibold mb-2">{t('seoPages.pages.spoutPouchesJuice.emailQuote')}</h4>
              <p className="text-sm text-white/80 mb-4">{t('seoPages.pages.spoutPouchesJuice.getResponseWithin24hrs')}</p>
              <a href="mailto:ryan@achievepack.com?subject=Spout Pouches Quote" className="block w-full bg-white text-orange-600 px-4 py-2 rounded-lg font-semibold hover:bg-orange-50 transition">
                {t('seoPages.pages.spoutPouchesJuice.sendEmail')}
              </a>
            </div>
          </div>
        </div>
      )
    }
  ]

  const faqs = [
    {
      question: t('seoPages.pages.spoutPouchesJuice.question_whatTypesOfBeveragesAre'),
      answer: t('seoPages.pages.spoutPouchesJuice.answer_spoutPouchesAreIdealFor')
    },
    {
      question: t('seoPages.pages.spoutPouchesJuice.question_areYourSpoutPouchesRecyclable'),
      answer: t('seoPages.pages.spoutPouchesJuice.answer_yesWeOfferMonomaterialPe')
    },
    {
      question: t('seoPages.pages.spoutPouchesJuice.question_canICustomizeTheShape'),
      answer: t('seoPages.pages.spoutPouchesJuice.answer_absolutelyWeOfferCustomshapedPouches')
    },
    {
      question: t('seoPages.pages.spoutPouchesJuice.question_whatIsTheMinimumOrder'),
      answer: t('seoPages.pages.spoutPouchesJuice.answer_ourMinimumOrderQuantityVaries')
    },
    {
      question: t('seoPages.pages.spoutPouchesJuice.question_howDoSpoutPouchesCompare'),
      answer: t('seoPages.pages.spoutPouchesJuice.answer_spoutPouchesAreLighterRequire')
    },
    {
      question: t('seoPages.pages.spoutPouchesJuice.question_whatBarrierOptionsAreAvailable'),
      answer: t('seoPages.pages.spoutPouchesJuice.answer_weOfferMultipleBarrierLevels')
    },
    {
      question: t('seoPages.pages.spoutPouchesJuice.question_canSpoutPouchesBeUsed'),
      answer: t('seoPages.pages.spoutPouchesJuice.answer_yesWeOfferHeatresistantSpout')
    },
    {
      question: t('seoPages.pages.spoutPouchesJuice.question_whatCertificationsDoYourSpout'),
      answer: t('seoPages.pages.spoutPouchesJuice.answer_ourSpoutPouchesAreManufactured')
    }
  ]

  const relatedLinks = [
    { title: t('seoPages.pages.spoutPouchesJuice.title_recyclableMonope'), url: "/materials/recyclable-mono-pe", description: t('seoPages.pages.spoutPouchesJuice.description_fullyRecyclableSinglematerialStructure') },
    { title: t('seoPages.pages.spoutPouchesJuice.title_pcrMaterials'), url: "/materials/pcr", description: t('seoPages.pages.spoutPouchesJuice.description_postconsumerRecycledContentOptions') },
    { title: t('seoPages.pages.spoutPouchesJuice.title_biobasedMaterials'), url: "/materials/bio-pe", description: t('seoPages.pages.spoutPouchesJuice.description_plantderivedSustainableMaterials') },
    { title: t('seoPages.pages.spoutPouchesJuice.title_compostablePouches'), url: "/materials/compostable", description: t('seoPages.pages.spoutPouchesJuice.description_100PlasticfreeEcofriendlyOptions') },
    { title: t('seoPages.pages.spoutPouchesJuice.title_spoutPouches'), url: "/packaging/spout-pouches", description: t('seoPages.pages.spoutPouchesJuice.description_allSpoutPouchOptionsAnd') },
    { title: t('seoPages.pages.spoutPouchesJuice.title_standUpPouches'), url: "/packaging/stand-up-pouches", description: t('seoPages.pages.spoutPouchesJuice.description_versatileSelfstandingPackaging') },
    { title: t('seoPages.pages.spoutPouchesJuice.title_flatBottomBags'), url: "/packaging/flat-bottom-bags", description: t('seoPages.pages.spoutPouchesJuice.description_premiumBoxpouchDesigns') },
    { title: t('seoPages.pages.spoutPouchesJuice.title_barrierOptions'), url: "/features/barrier-options", description: t('seoPages.pages.spoutPouchesJuice.description_chooseYourProtectionLevel') },
    { title: t('seoPages.pages.spoutPouchesJuice.title_printingCapabilities'), url: "/printing/digital-printing", description: t('seoPages.pages.spoutPouchesJuice.description_digitalAndRotogravureOptions') },
    { title: t('seoPages.pages.spoutPouchesJuice.title_carbonNeutralBags'), url: "/function/carbon-neutral-bags", description: t('seoPages.pages.spoutPouchesJuice.description_climatepositivePackagingSolutions') },
    { title: t('seoPages.pages.spoutPouchesJuice.title_microwaveSteamBags'), url: "/function/microwave-steam-bags", description: t('seoPages.pages.spoutPouchesJuice.description_foodsafeHeatingPouches') },
    { title: t('seoPages.pages.spoutPouchesJuice.title_childresistantBags'), url: "/function/child-resistant-bags", description: t('seoPages.pages.spoutPouchesJuice.description_safetycompliantCrPackaging') },
    { title: t('seoPages.pages.spoutPouchesJuice.title_liquidPackaging'), url: "/industry/sauces-condiments", description: t('seoPages.pages.spoutPouchesJuice.description_completeLiquidPouchSolutions') },
    { title: t('seoPages.pages.spoutPouchesJuice.title_certificates'), url: "/company/certificates", description: t('seoPages.pages.spoutPouchesJuice.description_viewOurSafetyCertifications') },
    { title: t('seoPages.pages.spoutPouchesJuice.title_faqs'), url: "/support/faqs", description: t('seoPages.pages.spoutPouchesJuice.description_commonQuestionsAnswered') }
  ]

  // B2C personalization styling and contents
  const b2cSections = [
    {
      id: 'ditch-bottles',
      title: t('seoPages.pages.spoutPouchesJuice.title_theLiquidStartupHackDitch'),
      icon: <Recycle className="h-5 w-5 text-black" />,
      content: (
        <div className="space-y-6">
          <p className="text-neutral-700">
            {t('seoPages.pages.spoutPouchesJuice.startingABoutiqueBeverageBrand')}
          </p>
          <div className="bg-[#D4FF00] p-6 border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
            <p className="text-lg font-black text-neutral-900 mb-2 uppercase font-['JetBrains_Mono']">
              <strong>{t('seoPages.pages.spoutPouchesJuice.lightweightCollapsibleAndCarbonpositive')}</strong>
            </p>
            <p className="text-sm text-neutral-700 leading-relaxed font-['JetBrains_Mono']">
              {t('seoPages.pages.spoutPouchesJuice.spoutPouchesAreUpTo')} <strong>{t('seoPages.pages.spoutPouchesJuice.90Lighter')}</strong> {t('seoPages.pages.spoutPouchesJuice.thanTraditionalGlassPackagingThey')}
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 items-center mt-6">
            <button 
              onClick={() => setGalleryEnlarged({ src: '/imgs/function/spout/a_hero_kv_juice_pouch_7892714.webp', index: 0 })}
              className="block rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow cursor-pointer group"
            >
              <img src="/imgs/function/spout/a_hero_kv_juice_pouch_7892714.webp" alt={t('seoPages.pages.spoutPouchesJuice.alt_dtcSpoutPouchesForJuice')} className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-300" />
              <div className="bg-neutral-100 px-3 py-2 text-xs text-neutral-500 text-center border-t-2 border-black">{t('seoPages.pages.spoutPouchesJuice.clickToEnlarge')}</div>
            </button>
            <div className="space-y-3">
              <h4 className="font-bold text-neutral-900 font-['JetBrains_Mono'] uppercase">{t('seoPages.pages.spoutPouchesJuice.shatterproofOnthegoFriendly')}</h4>
              <p className="text-sm text-neutral-600 leading-relaxed">
                {t('seoPages.pages.spoutPouchesJuice.unlikeGlassSpoutPouchesWont')}
              </p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'hot-fill',
      title: t('seoPages.pages.spoutPouchesJuice.title_hotFillPasteurizationReady'),
      icon: <Droplets className="h-5 w-5 text-black" />,
      content: (
        <div className="space-y-6">
          <p className="text-neutral-700">
            {t('seoPages.pages.spoutPouchesJuice.foodSafetyIsNonnegotiableWhen')}
          </p>
          <div className="bg-cyan-50 p-6 border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
            <p className="text-lg font-black text-neutral-900 mb-2 uppercase font-['JetBrains_Mono']">
              <strong>{t('seoPages.pages.spoutPouchesJuice.engineeredToStandTheHeat')}</strong>
            </p>
            <p className="text-sm text-neutral-700 leading-relaxed font-['JetBrains_Mono']">
              {t('seoPages.pages.spoutPouchesJuice.ourSpoutPouchesAreManufactured')} <strong>{t('seoPages.pages.spoutPouchesJuice.hotfillPasteurizationProcesses')}</strong> {t('seoPages.pages.spoutPouchesJuice.upTo85c185fWithout')}
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <h4 className="font-bold text-neutral-900 font-['JetBrains_Mono'] uppercase">{t('seoPages.pages.spoutPouchesJuice.highbarrierLaminatedFreshness')}</h4>
              <p className="text-sm text-neutral-600 leading-relaxed">
                {t('seoPages.pages.spoutPouchesJuice.weUtilizeFoodgradeMultilayerLaminates')}
              </p>
            </div>
            <button 
              onClick={() => setGalleryEnlarged({ src: '/imgs/function/spout/a_barrier_freshness_juice_9675285.webp', index: 4 })}
              className="block rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow cursor-pointer group"
            >
              <img src="/imgs/function/spout/a_barrier_freshness_juice_9675285.webp" alt={t('seoPages.pages.spoutPouchesJuice.alt_highBarrierSpoutPouchStructure')} className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-300" />
              <div className="bg-neutral-100 px-3 py-2 text-xs text-neutral-500 text-center border-t-2 border-black">{t('seoPages.pages.spoutPouchesJuice.clickToEnlarge')}</div>
            </button>
          </div>
        </div>
      )
    },
    {
      id: 'leak-proof',
      title: t('seoPages.pages.spoutPouchesJuice.title_airtightLeakproofCustomCaps'),
      icon: <Package className="h-5 w-5 text-black" />,
      content: (
        <div className="space-y-6">
          <p className="text-neutral-700">
            {t('seoPages.pages.spoutPouchesJuice.whetherYourCustomerIsJogging')}
          </p>
          <div className="bg-[#00FFFF] p-6 border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
            <p className="text-lg font-black text-neutral-900 mb-2 uppercase font-['JetBrains_Mono']">
              <strong>{t('seoPages.pages.spoutPouchesJuice.zeroleakScrewCapsCustomColors')}</strong>
            </p>
            <p className="text-sm text-neutral-700 leading-relaxed font-['JetBrains_Mono']">
              {t('seoPages.pages.spoutPouchesJuice.ourStandardScrewCapsUtilize')}
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <button 
              onClick={() => setGalleryEnlarged({ src: '/imgs/function/spout/a_detail_spout_cap_2155787.webp', index: 2 })}
              className="block rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow cursor-pointer group"
            >
              <img src="/imgs/function/spout/a_detail_spout_cap_2155787.webp" alt={t('seoPages.pages.spoutPouchesJuice.alt_airtightLeakProofSpoutAnd')} className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-300" />
              <div className="bg-neutral-100 px-3 py-2 text-xs text-neutral-500 text-center border-t-2 border-black">{t('seoPages.pages.spoutPouchesJuice.clickToEnlarge')}</div>
            </button>
            <div className="space-y-4">
              <h4 className="font-bold text-neutral-900 font-['JetBrains_Mono'] uppercase">{t('seoPages.pages.spoutPouchesJuice.flexibleSpoutOptions')}</h4>
              <p className="text-sm text-neutral-600 leading-relaxed">
                {t('seoPages.pages.spoutPouchesJuice.chooseFromVariousSpoutDiameters')}
              </p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'low-moq',
      title: t('seoPages.pages.spoutPouchesJuice.title_dtcAgilityLowMoqFast'),
      icon: <Sparkles className="h-5 w-5 text-black" />,
      content: (
        <div className="space-y-6">
          <p className="text-neutral-700">
            {t('seoPages.pages.spoutPouchesJuice.atPouchecoWeSpecializeIn')}
          </p>
          <div className="bg-white border-4 border-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
            <p className="text-lg font-black text-neutral-900 mb-2 uppercase font-['JetBrains_Mono']">
              <strong>{t('seoPages.pages.spoutPouchesJuice.dtcPackagingAgility500Unit')}</strong>
            </p>
            <p className="text-sm text-neutral-700 leading-relaxed font-['JetBrains_Mono']">
              {t('seoPages.pages.spoutPouchesJuice.pouchecoUsesCuttingedgeHighfidelityDigit')} <strong>{t('seoPages.pages.spoutPouchesJuice.500UnitsPerSku')}</strong>{t('seoPages.pages.spoutPouchesJuice.youCanTestYourBrand')}
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-4 mt-6">
            <div className="bg-[#D4FF00] border-4 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h5 className="font-black uppercase text-xs tracking-wider mb-2 font-['JetBrains_Mono']">{t('seoPages.pages.spoutPouchesJuice.500Moq')}</h5>
              <p className="text-xs text-black">{t('seoPages.pages.spoutPouchesJuice.launchANewFlavorLine')}</p>
            </div>
            <div className="bg-[#00FFFF] border-4 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h5 className="font-black uppercase text-xs tracking-wider mb-2 font-['JetBrains_Mono']">{t('seoPages.pages.spoutPouchesJuice.digitalPrinting')}</h5>
              <p className="text-xs text-black">{t('seoPages.pages.spoutPouchesJuice.highdefinitionPrintsWithZeroCylinder')}</p>
            </div>
            <div className="bg-white border-4 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h5 className="font-black uppercase text-xs tracking-wider mb-2 font-['JetBrains_Mono']">{t('seoPages.pages.spoutPouchesJuice.diyBranding')}</h5>
              <p className="text-xs text-neutral-700">{t('seoPages.pages.spoutPouchesJuice.addCustomLabelsOrStamp')}</p>
            </div>
          </div>
        </div>
      )
    }
  ]

  if (isPouchDomain) {
    return (
      <BlogArticleTemplate
        title={t('seoPages.pages.spoutPouchesJuice.title_ecofriendlySpoutJuicePouchesPoucheco')}
        metaDescription={t('seoPages.pages.spoutPouchesJuice.metaDescription')}
        canonicalUrl="https://pouch.eco/function/spout-pouches-juice"
        keywords={['spout pouches', 'juice pouches', 'recyclable spout bags', 'beverage packaging', 'liquid pouches', 'food-safe pouches', 'custom spout pouches', 'drink pouches', 'juice pouch packaging']}
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
              <span className="bg-[#10b981] text-white px-1.5 py-0.5 border border-black">Spout Juice Pouches</span>
            </div>

            {/* Badges / Cross Links */}
            <div className="flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-1 px-3 py-1.5 text-xs font-black bg-[#10b981] text-white border-2 border-black uppercase tracking-wider shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                🌱 FDA Food-Safe & Hot-Fill Ready
              </span>
              <Link 
                to="/packaging/spout-pouches" 
                className="inline-flex items-center gap-1 px-3 py-1.5 text-xs font-black bg-[#00FFFF] text-black border-2 border-black hover:bg-[#D4FF00] transition-colors uppercase tracking-wider shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]"
              >
                🔄 View Spout Options →
              </Link>
            </div>

            <h1 className="font-black text-4xl md:text-6xl lg:text-7xl uppercase leading-tight mt-4">
              Eco Spout<br />
              <span className="text-[#10b981]">Juice Pouches</span><br />
              DTC Startup Guide
            </h1>
          </div>
        }
        heroSubtitle={t('seoPages.pages.spoutPouchesJuice.heroSubtitle')}
        heroImage="/imgs/function/spout/a_hero_kv_juice_pouch_7892714.webp"
        heroImageAlt="POUCH.ECO custom spout pouches for juice and beverages"
        categoryTag="ECO_PRODUCTS"
        categoryColor="#10b981"
        readTime="6 min read"
        sections={b2cSections}
        ctaTitle={t('seoPages.pages.spoutPouchesJuice.ctaTitle')}
        ctaDescription={t('seoPages.pages.spoutPouchesJuice.ctaDescription')}
        calendlyUrl="https://calendly.com/30-min-free-packaging-consultancy"
        achievePackLink="https://achievepack.com/function/spout-pouches-juice"
        achievePackText={t('seoPages.pages.spoutPouchesJuice.achievePackText')}
        showTableOfContents={true}
        relatedArticles={[
          {
            title: t('seoPages.pages.spoutPouchesJuice.title_writableStampableEcoPouchesSku'),
            url: '/knowledge/writable-stampable-pouches',
            image: '/imgs/knowledge/writable-stampable-pouches.jpg'
          },
          {
            title: t('seoPages.pages.spoutPouchesJuice.title_compostableStandUpPouchesHighbarrier'),
            url: '/products/compostable-stand-up-pouches',
            image: '/imgs/store/products/compostable-stand-up-collection.png'
          }
        ]}
      />
    )
  }

  return (
    <>
      <SEOPageLayout heroBgColor="#1f2937"
        title={t('seoPages.pages.spoutPouchesJuice.title_recyclableSpoutJuicePouchesEcofriendly')}
        description={t('seoPages.pages.spoutPouchesJuice.description')}
        keywords={['spout pouches', 'juice pouches', 'recyclable spout bags', 'beverage packaging', 'liquid pouches', 'food-safe pouches', 'custom spout pouches', 'drink pouches', 'juice pouch packaging', 'cold brew pouches', 'sports drink pouches', 'mono-PE spout bags', 'eco friendly juice bags', 'refillable beverage pouches']}
        canonicalUrl="https://achievepack.com/function/spout-pouches-juice"
        heroTitle={t('seoPages.pages.spoutPouchesJuice.heroTitle')}
        heroSubtitle={t('seoPages.pages.spoutPouchesJuice.heroSubtitle')}
        heroImage="/imgs/function/spout/a_hero_kv_juice_pouch_7892714.webp"
        heroImageAlt="Achieve Pack Recyclable Spout Pouches for Juice"
        introSummary={t('seoPages.pages.spoutPouchesJuice.introSummary')}
        sections={sections}
        faqs={faqs}
        relatedLinks={relatedLinks}
        ctaTitle={t('seoPages.pages.spoutPouchesJuice.ctaTitle')}
        ctaDescription={t('seoPages.pages.spoutPouchesJuice.ctaDescription')}
        ctaButtonText={t('seoPages.pages.spoutPouchesJuice.ctaButtonText')}
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
          <img src={galleryEnlarged.src} alt={spoutGallery[galleryEnlarged.index]?.title || 'Enlarged view'} className="max-w-full max-h-[80vh] object-contain" onClick={(e) => e.stopPropagation()} />
          <button onClick={(e) => { e.stopPropagation(); navigateGallery('next'); }} className="absolute right-4 text-white hover:text-neutral-300 transition p-2">
            <ChevronRight className="h-10 w-10" />
          </button>
          <div className="absolute bottom-4 text-center text-white max-w-xl px-4">
            <p className="text-lg font-semibold">{spoutGallery[galleryEnlarged.index]?.title}</p>
            <p className="text-sm text-neutral-300">{spoutGallery[galleryEnlarged.index]?.desc}</p>
            <p className="text-xs mt-2 text-neutral-400">{galleryEnlarged.index + 1} / {spoutGallery.length}</p>
          </div>
        </div>
      )}
    </>
  )
}

export default SpoutPouchesJuicePage
