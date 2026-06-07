import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Zap, Shield, Thermometer, Package, Droplets, Maximize, ArrowRight, Leaf, CheckCircle, Calendar, Mail, X, ChevronLeft, ChevronRight, Award, Users, Globe, FileCheck, Building2, Sparkles } from 'lucide-react'
import SEOPageLayout from '../../components/SEOPageLayout'
import { Link } from 'react-router-dom'
import { useCalendly } from '../../contexts/CalendlyContext'
import { getDomain } from '../../utils/domain'
import BlogArticleTemplate from '../../components/pouch/BlogArticleTemplate'

// Gallery images from /imgs/function/microwave/


const MicrowaveSteamBagsPage: React.FC = () => {
  const { t } = useTranslation()

  const microwaveGallery = [
  { src: '/imgs/function/microwave/a_kv_1_hero_main_4427371.webp', title: t('seoPages.pages.microwaveSteamBags.title_ecofriendlyMicrowaveCookingBags'), desc: t('seoPages.pages.microwaveSteamBags.desc_safeMicrowaveSteamingallinoneStorageHeat') },
  { src: '/imgs/function/microwave/a_kv_2_info_foodsafe_5240576.webp', title: t('seoPages.pages.microwaveSteamBags.title_foodsafeMicrowavesafe'), desc: t('seoPages.pages.microwaveSteamBags.desc_foodGradematerialMicrowaveovensafe') },
  { src: '/imgs/function/microwave/a_kv_3_detail_zipperbase_3012328.webp', title: t('seoPages.pages.microwaveSteamBags.title_strongZipperStandupBase'), desc: t('seoPages.pages.microwaveSteamBags.desc_sturdyzipperStandupBottomstructure') },
  { src: '/imgs/function/microwave/a_kv_4_detail_steamvent_4869525.webp', title: t('seoPages.pages.microwaveSteamBags.title_builtinSteamVent'), desc: t('seoPages.pages.microwaveSteamBags.desc_insidesetsteamsteamholedesign') },
  { src: '/imgs/function/microwave/a_kv_5_detail_freshness_8989322.webp', title: t('seoPages.pages.microwaveSteamBags.title_seeFreshnessAtAGlance'), desc: t('seoPages.pages.microwaveSteamBags.desc_oneeyeviewseefresh') },
  { src: '/imgs/function/microwave/a_kv_6_detail_waterdrops_2735995.webp', title: t('seoPages.pages.microwaveSteamBags.title_heatresistantFoodgradeFilm'), desc: t('seoPages.pages.microwaveSteamBags.desc_heatResistantfoodGradefilm') },
  { src: '/imgs/function/microwave/a_kv_7_detail_capacity_9860751.webp', title: t('seoPages.pages.microwaveSteamBags.title_generousCapacityForFamilyPortions'), desc: t('seoPages.pages.microwaveSteamBags.desc_wideOpeninglargecapacitysuitablesuitable') },
  { src: '/imgs/function/microwave/a_kv_8_lifestyle_journeyscene_9334974.webp', title: t('seoPages.pages.microwaveSteamBags.title_fromFridgeToMicrowaveIn'), desc: t('seoPages.pages.microwaveSteamBags.desc_onebagdonefromrefrigeratortomicrowaveove') },
  { src: '/imgs/function/microwave/a_kv_9_info_ecocomparison_5260427.webp', title: t('seoPages.pages.microwaveSteamBags.title_ecofriendlyConvenience'), desc: t('seoPages.pages.microwaveSteamBags.desc_ecofriendlyandConvenient') },
  { src: '/imgs/function/microwave/a_kv_10_specs_closingpage_2082225.webp', title: t('seoPages.pages.microwaveSteamBags.title_achievePackMicrowaveSteamPouch'), desc: t('seoPages.pages.microwaveSteamBags.desc_achievePackMicrowavesteamingbag') },
]


  const { openCalendly } = useCalendly()
  const [galleryEnlarged, setGalleryEnlarged] = useState<{ src: string; index: number } | null>(null)
  
  const isPouchDomain = getDomain() === 'pouch'

  const navigateGallery = (direction: 'prev' | 'next') => {
    if (!galleryEnlarged) return
    let newIndex = direction === 'prev' ? galleryEnlarged.index - 1 : galleryEnlarged.index + 1
    if (newIndex < 0) newIndex = microwaveGallery.length - 1
    if (newIndex >= microwaveGallery.length) newIndex = 0
    setGalleryEnlarged({ src: microwaveGallery[newIndex].src, index: newIndex })
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
      title: t('seoPages.pages.microwaveSteamBags.title_microwaveSteamBagsOverview'),
      icon: <Zap className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-8">
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-lg border border-green-200">
            <p className="text-lg font-medium text-neutral-900 mb-4">
              <strong>{t('seoPages.pages.microwaveSteamBags.steamStoreAndReheatFood')}</strong> {t('seoPages.pages.microwaveSteamBags.achievePackMicrowaveSteamBags')}
            </p>
            <p className="text-neutral-700">
              {t('seoPages.pages.microwaveSteamBags.safeMicrowaveSteamingallinoneStorageHeat')}
            </p>
          </div>
          
          <AlternatingSection
            image="/imgs/function/microwave/a_kv_1_hero_main_4427371.webp"
            imageAlt="Achieve Pack Microwave Steam Bag Hero"
            title={t('seoPages.pages.microwaveSteamBags.title_ecofriendlyMicrowaveCookingBags')}
            titleCn="Eco-FriendlyMicrowaveSteamingBag"
            content="Our food-grade microwave steam bags are perfect for steaming vegetables, reheating frozen meals, and meal prep. The innovative design reduces the need for extra cookware while maintaining food safety standards."
            contentCn="OurFood GradeMicrowaveSteamingBagIdeal forSuitableSteamVegetables、HeatingFrozenMealAndPrepareMeal。CreateNewDesignReduceDoneExtraOutsideCookToolOfUse，MeanwhileMaintainFoodSafeStandard。"
            imageLeft={true}
            index={0}
          />
        </div>
      )
    },
    {
      id: 'food-safe',
      title: t('seoPages.pages.microwaveSteamBags.title_foodsafeMicrowavesafe'),
      icon: <Shield className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-8">
          <AlternatingSection
            image="/imgs/function/microwave/a_kv_2_info_foodsafe_5240576.webp"
            imageAlt="Food Safe Microwave Bag"
            title={t('seoPages.pages.microwaveSteamBags.title_certifiedFoodcontactMaterial')}
            titleCn="Food GradeMaterial · MicrowaveOvenSafe"
            content="Made from food-grade film that can directly contact vegetables, fruits, and meat. Passed relevant food safety tests and designed to withstand typical home microwave temperatures."
            contentCn="UsingFood GradeFilm，CanDirectAndVegetables、Fruit、MeatCategoryContact，ThroughRelatedCloseFoodSafeTest，ResistantReceiveClassicTypeHomeUseMicrowaveHeatingTemperatureDegree。"
            imageLeft={false}
            index={1}
          />
          
          <div className="grid md:grid-cols-2 gap-4 mt-6">
            <div className="bg-green-50 p-4 rounded-lg border border-green-200">
              <CheckCircle className="h-5 w-5 text-green-600 mb-2" />
              <h4 className="font-semibold text-green-800">{t('seoPages.pages.microwaveSteamBags.certifiedFoodcontactMaterial')}</h4>
              <p className="text-sm text-green-700">{t('seoPages.pages.microwaveSteamBags.throughfoodcontactsafetest')}</p>
            </div>
            <div className="bg-green-50 p-4 rounded-lg border border-green-200">
              <Thermometer className="h-5 w-5 text-green-600 mb-2" />
              <h4 className="font-semibold text-green-800">{t('seoPages.pages.microwaveSteamBags.designedForHomeMicrowaveTemperatures')}</h4>
              <p className="text-sm text-green-700">{t('seoPages.pages.microwaveSteamBags.professionalforhomeusemicrowaveheatingte')}</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'zipper-base',
      title: t('seoPages.pages.microwaveSteamBags.title_strongZipperStandupBase'),
      icon: <Package className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-8">
          <AlternatingSection
            image="/imgs/function/microwave/a_kv_3_detail_zipperbase_3012328.webp"
            imageAlt="Zipper and Stand-Up Base Detail"
            title={t('seoPages.pages.microwaveSteamBags.title_easyToSealEasyTo')}
            titleCn="SturdyZipper + Stand-Up BottomStructure"
            content="The double-track zipper at the top makes it easy to seal and store ingredients, preventing odor mixing and freezer burn. The stand-up base allows the bag to sit upright in the microwave for even heating."
            contentCn="TopPartDual TrackZipperStructure，ConvenientAtSealedSaveFoodMaterial，PreventDifferentTasteStringTasteAndFrozenBurn，MeanwhileCanRepeatedOpenSuitable。Stand-Up BottomDesignLetBagChildInMicrowaveOvenInSteadySteadyStandStand，HeatingMoreEvenEven。"
            imageLeft={true}
            index={2}
          />
        </div>
      )
    },
    {
      id: 'steam-vent',
      title: t('seoPages.pages.microwaveSteamBags.title_builtinSteamVentDesign'),
      icon: <Droplets className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-8">
          <AlternatingSection
            image="/imgs/function/microwave/a_kv_4_detail_steamvent_4869525.webp"
            imageAlt="Steam Vent Detail"
            title={t('seoPages.pages.microwaveSteamBags.title_safePressureRelease')}
            titleCn="InsideSetSteamSteamHoleDesign"
            content="The small holes above the zipper serve as steam vents, preventing excessive internal pressure. This helps achieve even heating and reduces the risk of the bag bursting during microwave cooking."
            contentCn="BagOpeningUpSideOfSmallHoleWorkForSteamSteamRowAirOpening，AvoidBagInsidePressurePowerThroughHigh，HaveAssistAtEvenEvenHeating，ReduceBurstBagRisk。"
            imageLeft={false}
            index={3}
          />
        </div>
      )
    },
    {
      id: 'freshness',
      title: t('seoPages.pages.microwaveSteamBags.title_seeFreshnessAtAGlance'),
      icon: <Zap className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-8">
          <AlternatingSection
            image="/imgs/function/microwave/a_kv_5_detail_freshness_8989322.webp"
            imageAlt="Freshness Visibility"
            title={t('seoPages.pages.microwaveSteamBags.title_clearEnoughToCheckDoneness')}
            titleCn="OneEyeViewSeeFresh"
            content="The semi-transparent film allows you to see the vibrant colors of vegetables inside, making it easy to monitor cooking progress and check doneness without opening the bag."
            contentCn="EnoughClearViewCookedDegree，AlsoCanSuitableDegreeBlockMixMess — HalfTransparentFilmLetYouCanWithViewToBagInsideVegetablesOfBrightColorColor，LightLooseMonitorCookingIntoDegree。"
            imageLeft={true}
            index={4}
          />
        </div>
      )
    },
    {
      id: 'heat-resistant',
      title: t('seoPages.pages.microwaveSteamBags.title_heatresistantFoodgradeFilm'),
      icon: <Thermometer className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-8">
          <AlternatingSection
            image="/imgs/function/microwave/a_kv_6_detail_waterdrops_2735995.webp"
            imageAlt="Heat Resistant Film with Water Droplets"
            title={t('seoPages.pages.microwaveSteamBags.title_designedForEverydayMicrowaveUse')}
            titleCn="Heat ResistantFood GradeFilm"
            content="The heat-resistant film is specifically designed for everyday microwave reheating and steaming. Water droplets on the surface indicate the bag is working properly to retain moisture during cooking."
            contentCn="ProfessionalForDailyMicrowaveHeatingAndSteamingDesign — Heat ResistantFilmEnsureSafeCooking，SurfaceWaterBead ShowsBagChildRightInRightOftenMaintainCookingProcessInOfWaterDivide。"
            imageLeft={false}
            index={5}
          />
        </div>
      )
    },
    {
      id: 'capacity',
      title: t('seoPages.pages.microwaveSteamBags.title_generousCapacityForFamilyPortions'),
      icon: <Maximize className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-8">
          <AlternatingSection
            image="/imgs/function/microwave/a_kv_7_detail_capacity_9860751.webp"
            imageAlt="Bag Capacity"
            title={t('seoPages.pages.microwaveSteamBags.title_idealForVegetablesMixedMeals')}
            titleCn="Wide OpeningLargeCapacity，SuitableSuitableFamily PortionVolume"
            content="The wide opening and generous capacity make it easy to fill with vegetables, mixed meals, or pre-portioned ingredients. Perfect for both home cooking and commercial meal prep applications."
            contentCn="SuitableSuitableVegetablesPlatter、MixSuitableMealAndPre-Made Meal Portioning — Wide OpeningDesignConvenientAtFill，LargeCapacityMeetFamily PortionVolumeRequireDemand。"
            imageLeft={true}
            index={6}
          />
        </div>
      )
    },
    {
      id: 'journey',
      title: t('seoPages.pages.microwaveSteamBags.title_fromFridgeToMicrowaveIn'),
      icon: <ArrowRight className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-8">
          <AlternatingSection
            image="/imgs/function/microwave/a_kv_8_lifestyle_journeyscene_9334974.webp"
            imageAlt="From Fridge to Microwave Journey"
            title={t('seoPages.pages.microwaveSteamBags.title_storeSteamAndServe')}
            titleCn="OneBagDone，FromRefrigeratorToMicrowaveOven"
            content="One bag handles the entire journey from storage to cooking to serving. Store in the fridge or freezer, heat in the microwave, and serve directly — reducing the need for multiple containers."
            contentCn="StorePlace、Steaming、UpTableAllUseSameOneOnly Achieve Pack Bag — ReduceMultipleUnitCapacityDeviceOfUse，SimpleizationKitchenProcess。"
            imageLeft={false}
            index={7}
          />
        </div>
      )
    },
    {
      id: 'eco-friendly',
      title: t('seoPages.pages.microwaveSteamBags.title_ecofriendlyConvenience'),
      icon: <Leaf className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-8">
          <AlternatingSection
            image="/imgs/function/microwave/a_kv_9_info_ecocomparison_5260427.webp"
            imageAlt="Eco Comparison"
            title={t('seoPages.pages.microwaveSteamBags.title_lessWaterFewerDishesTo')}
            titleCn="Eco-FriendlyAnd Convenient"
            content="Compared to traditional cooking methods, our steam bags use less water and create fewer dishes to wash. They also use less material than rigid plastic containers, reducing carbon footprint during transportation and disposal."
            contentCn="UseWaterMoreFew、ReduceWash Dishes。RatioHardQualityPlasticBoxUseMoreFewMaterial，TransportationAndDiscardStageCarbonLower Footprint。"
            imageLeft={true}
            index={8}
          />
          
          <div className="grid md:grid-cols-2 gap-4 mt-6">
            <div className="bg-green-50 p-4 rounded-lg">
              <h4 className="font-semibold text-green-800 mb-2">{t('seoPages.pages.microwaveSteamBags.traditionalCooking')}</h4>
              <ul className="text-sm text-green-700 space-y-1">
                <li>{t('seoPages.pages.microwaveSteamBags.potColanderPlateNeeded')}</li>
                <li>{t('seoPages.pages.microwaveSteamBags.moreWaterUsage')}</li>
                <li>{t('seoPages.pages.microwaveSteamBags.moreDishesToWash')}</li>
              </ul>
            </div>
            <div className="bg-primary-50 p-4 rounded-lg">
              <h4 className="font-semibold text-primary-800 mb-2">{t('seoPages.pages.microwaveSteamBags.withAchievePackSteamBags')}</h4>
              <ul className="text-sm text-primary-700 space-y-1">
                <li>{t('seoPages.pages.microwaveSteamBags.onePouchMicrowave')}</li>
                <li>{t('seoPages.pages.microwaveSteamBags.lessWaterNeeded')}</li>
                <li>{t('seoPages.pages.microwaveSteamBags.minimalCleanup')}</li>
              </ul>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'specs',
      title: t('seoPages.pages.microwaveSteamBags.title_productSpecifications'),
      icon: <Package className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-8">
          <AlternatingSection
            image="/imgs/function/microwave/a_kv_10_specs_closingpage_2082225.webp"
            imageAlt="Product Specifications"
            title={t('seoPages.pages.microwaveSteamBags.title_achievePackMicrowaveSteamPouch')}
            titleCn="Achieve Pack MicrowaveSteamingBag"
            content="Available in multiple sizes to suit your needs. Perfect for vegetables, frozen meals, and meal prep applications. Supports eco-friendly material options including recyclable and bio-based formulations."
            contentCn="By Achieve Pack StrikeMake，ServiceModernEco-FriendlyKitchen — ProvideMultipleDimensionsChoose，SupportEco-Friendly MaterialsSolution。"
            imageLeft={false}
            index={9}
          />
          
          <div className="grid md:grid-cols-3 gap-4 mt-6">
            <div className="bg-white border border-neutral-200 p-4 rounded-lg">
              <h4 className="font-semibold text-neutral-800 mb-2">{t('seoPages.pages.microwaveSteamBags.sizesFormats')}</h4>
              <p className="text-sm text-neutral-600">{t('seoPages.pages.microwaveSteamBags.dimensionsandspecification')}</p>
              <ul className="text-xs text-neutral-500 mt-2 space-y-1">
                <li>{t('seoPages.pages.microwaveSteamBags.smallUnitpersonportion')}</li>
                <li>{t('seoPages.pages.microwaveSteamBags.medium23personportion')}</li>
                <li>{t('seoPages.pages.microwaveSteamBags.familySizeHomefamilyinstall')}</li>
              </ul>
            </div>
            <div className="bg-white border border-neutral-200 p-4 rounded-lg">
              <h4 className="font-semibold text-neutral-800 mb-2">{t('seoPages.pages.microwaveSteamBags.usage')}</h4>
              <p className="text-sm text-neutral-600">{t('seoPages.pages.microwaveSteamBags.useroute')}</p>
              <ul className="text-xs text-neutral-500 mt-2 space-y-1">
                <li>{t('seoPages.pages.microwaveSteamBags.vegetablesVegetables')}</li>
                <li>{t('seoPages.pages.microwaveSteamBags.frozenMealsFrozenmeal')}</li>
                <li>{t('seoPages.pages.microwaveSteamBags.mealPrepPremadeMealPortioning')}</li>
              </ul>
            </div>
            <div className="bg-white border border-neutral-200 p-4 rounded-lg">
              <h4 className="font-semibold text-neutral-800 mb-2">{t('seoPages.pages.microwaveSteamBags.safetyStandards')}</h4>
              <p className="text-sm text-neutral-600">{t('seoPages.pages.microwaveSteamBags.safeandstandard')}</p>
              <ul className="text-xs text-neutral-500 mt-2 space-y-1">
                <li>{t('seoPages.pages.microwaveSteamBags.foodgradeFoodGrade')}</li>
                <li>{t('seoPages.pages.microwaveSteamBags.microwavesafeMicrowavesafe')}</li>
                <li>{t('seoPages.pages.microwaveSteamBags.ecoMaterialOptionsEcofriendlyMaterials')}</li>
              </ul>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'trust-eeat',
      title: t('seoPages.pages.microwaveSteamBags.title_whyTrustAchievePack'),
      icon: <Award className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-8">
          {/* E-E-A-T Trust Signals */}
          <div className="bg-gradient-to-r from-primary-50 to-green-50 p-6 rounded-xl border border-primary-200">
            <h3 className="text-xl font-bold text-neutral-900 mb-4">{t('seoPages.pages.microwaveSteamBags.foodgradePackagingExpertsSince2011')}</h3>
            <p className="text-neutral-700 mb-4">
              {t('seoPages.pages.microwaveSteamBags.achievePackHasBeenManufacturing')}
            </p>
            <p className="text-neutral-600 text-sm">
              {t('seoPages.pages.microwaveSteamBags.achievePackSelf2011Yearstartprofessional')}
            </p>
          </div>
          
          {/* Trust Badges Grid */}
          <div className="grid md:grid-cols-4 gap-4">
            <div className="bg-white border border-neutral-200 p-4 rounded-lg text-center">
              <FileCheck className="h-8 w-8 text-green-600 mx-auto mb-2" />
              <h4 className="font-semibold text-neutral-800">{t('seoPages.pages.microwaveSteamBags.fdaCompliant')}</h4>
              <p className="text-xs text-neutral-500">{t('seoPages.pages.microwaveSteamBags.foodContactApproved')}</p>
            </div>
            <div className="bg-white border border-neutral-200 p-4 rounded-lg text-center">
              <Building2 className="h-8 w-8 text-green-600 mx-auto mb-2" />
              <h4 className="font-semibold text-neutral-800">{t('seoPages.pages.microwaveSteamBags.brcCertified')}</h4>
              <p className="text-xs text-neutral-500">{t('seoPages.pages.microwaveSteamBags.foodSafetyStandard')}</p>
            </div>
            <div className="bg-white border border-neutral-200 p-4 rounded-lg text-center">
              <Globe className="h-8 w-8 text-green-600 mx-auto mb-2" />
              <h4 className="font-semibold text-neutral-800">{t('seoPages.pages.microwaveSteamBags.500Brands')}</h4>
              <p className="text-xs text-neutral-500">{t('seoPages.pages.microwaveSteamBags.trustedWorldwide')}</p>
            </div>
            <div className="bg-white border border-neutral-200 p-4 rounded-lg text-center">
              <Users className="h-8 w-8 text-green-600 mx-auto mb-2" />
              <h4 className="font-semibold text-neutral-800">{t('seoPages.pages.microwaveSteamBags.13Years')}</h4>
              <p className="text-xs text-neutral-500">{t('seoPages.pages.microwaveSteamBags.industryExperience')}</p>
            </div>
          </div>
          
          {/* Internal Links for SEO */}
          <div className="bg-neutral-50 p-6 rounded-lg">
            <h4 className="font-semibold text-neutral-800 mb-3">{t('seoPages.pages.microwaveSteamBags.exploreRelatedSolutions')}</h4>
            <div className="grid md:grid-cols-3 gap-3">
              <Link to="/materials/compostable" className="flex items-center gap-2 text-primary-600 hover:text-primary-700 text-sm">
                <Leaf className="h-4 w-4" /> {t('seoPages.pages.microwaveSteamBags.compostableMaterials')}
              </Link>
              <Link to="/materials/recyclable-mono-pe" className="flex items-center gap-2 text-primary-600 hover:text-primary-700 text-sm">
                <Package className="h-4 w-4" /> {t('seoPages.pages.microwaveSteamBags.recyclableMonope')}
              </Link>
              <Link to="/packaging/stand-up-pouches" className="flex items-center gap-2 text-primary-600 hover:text-primary-700 text-sm">
                <Package className="h-4 w-4" /> {t('seoPages.pages.microwaveSteamBags.standUpPouches')}
              </Link>
              <Link to="/function/child-resistant-bags" className="flex items-center gap-2 text-primary-600 hover:text-primary-700 text-sm">
                <Shield className="h-4 w-4" /> {t('seoPages.pages.microwaveSteamBags.childresistantBags')}
              </Link>
              <Link to="/function/carbon-neutral-bags" className="flex items-center gap-2 text-primary-600 hover:text-primary-700 text-sm">
                <Sparkles className="h-4 w-4" /> {t('seoPages.pages.microwaveSteamBags.carbonNeutralBags')}
              </Link>
              <Link to="/company/certificates" className="flex items-center gap-2 text-primary-600 hover:text-primary-700 text-sm">
                <Award className="h-4 w-4" /> {t('seoPages.pages.microwaveSteamBags.ourCertifications')}
              </Link>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'cta',
      title: t('seoPages.pages.microwaveSteamBags.title_readyToGetStarted'),
      icon: <Shield className="h-5 w-5 text-white" />,
      content: (
        <div className="bg-gradient-to-br from-green-500 to-emerald-600 text-white p-8 rounded-xl">
          <h3 className="text-2xl font-bold mb-6 text-center">{t('seoPages.pages.microwaveSteamBags.chooseHowYoudLikeTo')}</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white/10 backdrop-blur p-6 rounded-lg text-center">
              <Calendar className="h-8 w-8 mx-auto mb-3" />
              <h4 className="font-semibold mb-2">{t('seoPages.pages.microwaveSteamBags.bookACall')}</h4>
              <p className="text-sm text-white/80 mb-4">{t('seoPages.pages.microwaveSteamBags.30minFreeConsultation')}</p>
              <button onClick={openCalendly} className="w-full bg-white text-green-600 px-4 py-2 rounded-lg font-semibold hover:bg-green-50 transition cursor-pointer">
                {t('seoPages.pages.microwaveSteamBags.scheduleNow')}
              </button>
            </div>
            <div className="bg-white/10 backdrop-blur p-6 rounded-lg text-center">
              <Mail className="h-8 w-8 mx-auto mb-3" />
              <h4 className="font-semibold mb-2">{t('seoPages.pages.microwaveSteamBags.emailQuote')}</h4>
              <p className="text-sm text-white/80 mb-4">{t('seoPages.pages.microwaveSteamBags.getResponseWithin24hrs')}</p>
              <a href="mailto:ryan@achievepack.com?subject=Microwave Steam Bags Quote" className="block w-full bg-white text-green-600 px-4 py-2 rounded-lg font-semibold hover:bg-green-50 transition">
                {t('seoPages.pages.microwaveSteamBags.sendEmail')}
              </a>
            </div>
          </div>
        </div>
      )
    }
  ]

  const faqs = [
    {
      question: t('seoPages.pages.microwaveSteamBags.question_areMicrowaveSteamBagsSafe'),
      answer: t('seoPages.pages.microwaveSteamBags.answer_yesOurMicrowaveSteamBags')
    },
    {
      question: t('seoPages.pages.microwaveSteamBags.question_howDoesTheSteamVent'),
      answer: t('seoPages.pages.microwaveSteamBags.answer_theSmallHolesAboveThe')
    },
    {
      question: t('seoPages.pages.microwaveSteamBags.question_canIReuseMicrowaveSteam'),
      answer: t('seoPages.pages.microwaveSteamBags.answer_theBagsFeatureAResealable')
    },
    {
      question: t('seoPages.pages.microwaveSteamBags.question_whatSizesAreAvailableFor'),
      answer: t('seoPages.pages.microwaveSteamBags.answer_weOfferSmallIndividualPortions')
    },
    {
      question: t('seoPages.pages.microwaveSteamBags.question_areTheseBagsEcofriendly'),
      answer: t('seoPages.pages.microwaveSteamBags.answer_yesComparedToRigidPlastic')
    },
    {
      question: t('seoPages.pages.microwaveSteamBags.question_whatIsTheMinimumOrder'),
      answer: t('seoPages.pages.microwaveSteamBags.answer_ourMinimumOrderQuantityStarts')
    },
    {
      question: t('seoPages.pages.microwaveSteamBags.question_canIGetCustomPrinted'),
      answer: t('seoPages.pages.microwaveSteamBags.answer_yesWeOfferFullcolorCustom')
    },
    {
      question: t('seoPages.pages.microwaveSteamBags.question_howLongIsTheProduction'),
      answer: t('seoPages.pages.microwaveSteamBags.answer_standardProductionTimeIs23')
    }
  ]

  // Enhanced related links for internal linking SEO
  const relatedLinks = [
    // Material options
    { title: t('seoPages.pages.microwaveSteamBags.title_compostablePouches'), url: "/materials/compostable", description: t('seoPages.pages.microwaveSteamBags.description_100PlasticfreeEcofriendlyMaterial') },
    { title: t('seoPages.pages.microwaveSteamBags.title_recyclableMonope'), url: "/materials/recyclable-mono-pe", description: t('seoPages.pages.microwaveSteamBags.description_fullyRecyclableSinglematerialStructure') },
    { title: t('seoPages.pages.microwaveSteamBags.title_biopeMaterials'), url: "/materials/bio-pe", description: t('seoPages.pages.microwaveSteamBags.description_plantbasedPolyethyleneOptions') },
    // Packaging shapes
    { title: t('seoPages.pages.microwaveSteamBags.title_standUpPouches'), url: "/packaging/stand-up-pouches", description: t('seoPages.pages.microwaveSteamBags.description_selfstandingPackaging') },
    { title: t('seoPages.pages.microwaveSteamBags.title_flatBottomBags'), url: "/packaging/flat-bottom-bags", description: t('seoPages.pages.microwaveSteamBags.description_premiumBoxbottomStyle') },
    // Features
    { title: t('seoPages.pages.microwaveSteamBags.title_reclosureOptions'), url: "/features/reclosure-options", description: t('seoPages.pages.microwaveSteamBags.description_allZipperTypesAvailable') },
    { title: t('seoPages.pages.microwaveSteamBags.title_barrierOptions'), url: "/features/barrier-options", description: t('seoPages.pages.microwaveSteamBags.description_chooseProtectionLevel') },
    // Related function pages
    { title: t('seoPages.pages.microwaveSteamBags.title_carbonNeutralBags'), url: "/function/carbon-neutral-bags", description: t('seoPages.pages.microwaveSteamBags.description_climatepositivePackaging') },
    { title: t('seoPages.pages.microwaveSteamBags.title_childresistantBags'), url: "/function/child-resistant-bags", description: t('seoPages.pages.microwaveSteamBags.description_safetycertifiedPouches') },
    { title: t('seoPages.pages.microwaveSteamBags.title_spoutPouches'), url: "/function/spout-pouches-juice", description: t('seoPages.pages.microwaveSteamBags.description_liquidPackagingSolutions') },
    // Industry applications
    { title: t('seoPages.pages.microwaveSteamBags.title_frozenFoodPackaging'), url: "/industry/frozen-food", description: t('seoPages.pages.microwaveSteamBags.description_freezesafePouchSolutions') },
    { title: t('seoPages.pages.microwaveSteamBags.title_snacksPackaging'), url: "/industry/snacks-food", description: t('seoPages.pages.microwaveSteamBags.description_foodgradeSnackBags') },
    // Knowledge & Support
    { title: t('seoPages.pages.microwaveSteamBags.title_certificates'), url: "/company/certificates", description: t('seoPages.pages.microwaveSteamBags.description_viewOurCertifications') },
    { title: t('seoPages.pages.microwaveSteamBags.title_leadTime'), url: "/support/lead-time", description: t('seoPages.pages.microwaveSteamBags.description_productionSchedules') }
  ]

  // B2C Specific Content & Layout
  const b2cSections = [
    {
      id: 'meal-prep',
      title: t('seoPages.pages.microwaveSteamBags.title_theUltimateMicrowaveMealPrep'),
      icon: <Zap className="h-5 w-5 text-black" />,
      content: (
        <div className="space-y-6">
          <p className="text-neutral-700">
            {t('seoPages.pages.microwaveSteamBags.forFastgrowingDtcFoodBrands')}
          </p>
          <div className="bg-[#D4FF00] border-4 border-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
            <p className="text-lg font-black text-neutral-900 mb-2 uppercase font-['JetBrains_Mono']">
              <strong>{t('seoPages.pages.microwaveSteamBags.fromFreezerToMicrowaveIn')}</strong>
            </p>
            <p className="text-sm text-neutral-800 leading-relaxed">
              {t('seoPages.pages.microwaveSteamBags.ourFoodgradeMicrowaveSteamBags')}
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 items-center mt-6">
            <button 
              onClick={() => setGalleryEnlarged({ src: '/imgs/function/microwave/a_kv_1_hero_main_4427371.webp', index: 0 })}
              className="block rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow cursor-pointer group"
            >
              <img src="/imgs/function/microwave/a_kv_1_hero_main_4427371.webp" alt={t('seoPages.pages.microwaveSteamBags.alt_ecofriendlyMicrowaveCookingBags')} className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-300" />
              <div className="bg-neutral-100 px-3 py-2 text-xs text-neutral-500 text-center border-t-2 border-neutral-200">{t('seoPages.pages.microwaveSteamBags.clickToEnlarge')}</div>
            </button>
            <div className="space-y-3">
              <h4 className="font-bold text-neutral-900 font-['JetBrains_Mono'] uppercase">{t('seoPages.pages.microwaveSteamBags.idealForVegetablesSeafoodAnd')}</h4>
              <p className="text-sm text-neutral-600 leading-relaxed">
                {t('seoPages.pages.microwaveSteamBags.whetherYourePackingReadytoheatOrganic')}
              </p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'steam-vent',
      title: t('seoPages.pages.microwaveSteamBags.title_smartSelfventingDesign'),
      icon: <Droplets className="h-5 w-5 text-black" />,
      content: (
        <div className="space-y-6">
          <p className="text-neutral-700">
            {t('seoPages.pages.microwaveSteamBags.everHadAPlasticContainer')}
          </p>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <h4 className="font-bold text-neutral-900 font-['JetBrains_Mono'] uppercase">{t('seoPages.pages.microwaveSteamBags.precisionVentsSturdyBase')}</h4>
              <p className="text-sm text-neutral-600 leading-relaxed">
                {t('seoPages.pages.microwaveSteamBags.aboveTheSturdyDoubletrackZipper')}
              </p>
              <ul className="text-sm space-y-2 text-neutral-600">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span><strong>{t('seoPages.pages.microwaveSteamBags.pressureSafety')}</strong> {t('seoPages.pages.microwaveSteamBags.steamVentsReleaseInternalHot')}</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span><strong>{t('seoPages.pages.microwaveSteamBags.moistureLock')}</strong> {t('seoPages.pages.microwaveSteamBags.retainsAPerfectPocketOf')}</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span><strong>{t('seoPages.pages.microwaveSteamBags.standupBase')}</strong> {t('seoPages.pages.microwaveSteamBags.theSturdyBottomGussetEnsures')}</span>
                </li>
              </ul>
            </div>
            <button 
              onClick={() => setGalleryEnlarged({ src: '/imgs/function/microwave/a_kv_4_detail_steamvent_4869525.webp', index: 3 })}
              className="block rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow cursor-pointer group"
            >
              <img src="/imgs/function/microwave/a_kv_4_detail_steamvent_4869525.webp" alt={t('seoPages.pages.microwaveSteamBags.alt_builtinSteamVentDetail')} className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-300" />
              <div className="bg-neutral-100 px-3 py-2 text-xs text-neutral-500 text-center border-t-2 border-neutral-200">{t('seoPages.pages.microwaveSteamBags.clickToEnlarge')}</div>
            </button>
          </div>
        </div>
      )
    },
    {
      id: 'food-safety',
      title: t('seoPages.pages.microwaveSteamBags.title_certifiedNontoxicHighheatSafe'),
      icon: <Shield className="h-5 w-5 text-black" />,
      content: (
        <div className="space-y-6">
          <p className="text-neutral-700">
            {t('seoPages.pages.microwaveSteamBags.cookingInsidePlasticCanBe')}
          </p>
          <div className="bg-white border-4 border-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
            <h4 className="font-black text-neutral-900 mb-2 uppercase font-['JetBrains_Mono']">{t('seoPages.pages.microwaveSteamBags.thirdpartyLabTestedApproved')}</h4>
            <p className="text-sm text-neutral-700 leading-relaxed">
              {t('seoPages.pages.microwaveSteamBags.ourMicrowaveSteamBagsAre')}
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 items-center mt-6">
            <button 
              onClick={() => setGalleryEnlarged({ src: '/imgs/function/microwave/a_kv_2_info_foodsafe_5240576.webp', index: 1 })}
              className="block rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow cursor-pointer group"
            >
              <img src="/imgs/function/microwave/a_kv_2_info_foodsafe_5240576.webp" alt={t('seoPages.pages.microwaveSteamBags.alt_certifiedFoodSafeMicrowaveMaterial')} className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-300" />
              <div className="bg-neutral-100 px-3 py-2 text-xs text-neutral-500 text-center border-t-2 border-neutral-200">{t('seoPages.pages.microwaveSteamBags.clickToEnlarge')}</div>
            </button>
            <div className="space-y-3">
              <h4 className="font-bold text-neutral-900 font-['JetBrains_Mono'] uppercase">{t('seoPages.pages.microwaveSteamBags.seeFreshnessAtAGlance')}</h4>
              <p className="text-sm text-neutral-600 leading-relaxed">
                {t('seoPages.pages.microwaveSteamBags.theHighclaritySemitransparentFrontWindow')}
              </p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'sustainability',
      title: t('seoPages.pages.microwaveSteamBags.title_upTo70LessPlastic'),
      icon: <Leaf className="h-5 w-5 text-black" />,
      content: (
        <div className="space-y-6">
          <p className="text-neutral-700">
            {t('seoPages.pages.microwaveSteamBags.forEcoconsciousFoodStartupsAnd')}
          </p>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <h4 className="font-bold text-neutral-900 font-['JetBrains_Mono'] uppercase">{t('seoPages.pages.microwaveSteamBags.ecoconsciousMaterialSolutions')}</h4>
              <p className="text-sm text-neutral-600 leading-relaxed">
                {t('seoPages.pages.microwaveSteamBags.atPouchecoWeEngineerMicrowavesafe')}
              </p>
              <div className="space-y-3 text-sm text-neutral-700">
                <div className="p-3 bg-neutral-50 border-l-4 border-black rounded shadow-sm">
                  <strong>{t('seoPages.pages.microwaveSteamBags.monopeRecyclableStructures')}</strong> {t('seoPages.pages.microwaveSteamBags.madeFromASinglePolymer')}
                </div>
                <div className="p-3 bg-neutral-50 border-l-4 border-black rounded shadow-sm">
                  <strong>{t('seoPages.pages.microwaveSteamBags.lightweightFootprint')}</strong> {t('seoPages.pages.microwaveSteamBags.becauseTheyShipFlatThese')}
                </div>
              </div>
            </div>
            <button 
              onClick={() => setGalleryEnlarged({ src: '/imgs/function/microwave/a_kv_9_info_ecocomparison_5260427.webp', index: 8 })}
              className="block rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow cursor-pointer group"
            >
              <img src="/imgs/function/microwave/a_kv_9_info_ecocomparison_5260427.webp" alt={t('seoPages.pages.microwaveSteamBags.alt_ecoFriendlyMaterialComparison')} className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-300" />
              <div className="bg-neutral-100 px-3 py-2 text-xs text-neutral-500 text-center border-t-2 border-neutral-200">{t('seoPages.pages.microwaveSteamBags.clickToEnlarge')}</div>
            </button>
          </div>
        </div>
      )
    }
  ]

  if (isPouchDomain) {
    return (
      <BlogArticleTemplate
        title={t('seoPages.pages.microwaveSteamBags.title_microwaveSteamBagsEcofriendlyCooking')}
        metaDescription={t('seoPages.pages.microwaveSteamBags.metaDescription')}
        canonicalUrl="https://pouch.eco/function/microwave-steam-bags"
        keywords={['microwave steam bags', 'microwave cooking pouches', 'vegetable steam bags', 'food-safe microwave bags', 'eco-friendly cooking bags', 'meal prep pouches', 'steam vent bags']}
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
              <span className="bg-[#10b981] text-white px-1.5 py-0.5 border border-black">Microwave Steam Bags</span>
            </div>

            {/* Badges / Cross Links */}
            <div className="flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-1 px-3 py-1.5 text-xs font-black bg-[#10b981] text-white border-2 border-black uppercase tracking-wider shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                🔥 100% Microwave-Safe & BPA-Free
              </span>
              <Link 
                to="/products/compostable-side-gusset-bags" 
                className="inline-flex items-center gap-1 px-3 py-1.5 text-xs font-black bg-[#00FFFF] text-black border-2 border-black hover:bg-[#D4FF00] transition-colors uppercase tracking-wider shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]"
              >
                🔄 View Gusset Bags →
              </Link>
            </div>

            <h1 className="font-black text-4xl md:text-6xl lg:text-7xl uppercase leading-tight mt-4">
              Microwave Steam<br />
              <span className="text-[#10b981]">Cooking Bags</span><br />
              DTC Food Brand Guide
            </h1>
          </div>
        }
        heroSubtitle={t('seoPages.pages.microwaveSteamBags.heroSubtitle')}
        heroImage="/imgs/function/microwave/a_kv_1_hero_main_4427371.webp"
        heroImageAlt="POUCH.ECO microwave steam cooking bags guide"
        categoryTag="ECO_PRODUCTS"
        categoryColor="#10b981"
        readTime="6 min read"
        sections={b2cSections}
        ctaTitle={t('seoPages.pages.microwaveSteamBags.ctaTitle')}
        ctaDescription={t('seoPages.pages.microwaveSteamBags.ctaDescription')}
        calendlyUrl="https://calendly.com/30-min-free-packaging-consultancy"
        achievePackLink="https://achievepack.com/function/microwave-steam-bags"
        achievePackText={t('seoPages.pages.microwaveSteamBags.achievePackText')}
        showTableOfContents={true}
        relatedArticles={[
          {
            title: t('seoPages.pages.microwaveSteamBags.title_compostablePouchesGuide'),
            url: "/materials/compostable"
          },
          {
            title: t('seoPages.pages.microwaveSteamBags.title_childresistantPouches'),
            url: "/function/child-resistant-bags"
          },
          {
            title: t('seoPages.pages.microwaveSteamBags.title_recyclableMonope'),
            url: "/materials/recyclable-mono-pe"
          }
        ]}
      />
    )
  }

  return (
    <>
      <SEOPageLayout heroBgColor="#451a03"
        title={t('seoPages.pages.microwaveSteamBags.title_microwaveSteamBagsEcofriendlyCooking')}
        description={t('seoPages.pages.microwaveSteamBags.description')}
        keywords={['microwave steam bags', 'microwave cooking pouches', 'vegetable steam bags', 'food-safe microwave bags', 'eco-friendly cooking bags', 'meal prep pouches', 'steam vent bags', 'microwaveable food pouches', 'heat resistant bags', 'frozen meal bags', 'reheatable pouches', 'BPA-free microwave bags', 'sustainable cooking bags', 'food grade steam bags']}
        canonicalUrl="https://achievepack.com/function/microwave-steam-bags"
        heroTitle={t('seoPages.pages.microwaveSteamBags.heroTitle')}
        heroSubtitle={t('seoPages.pages.microwaveSteamBags.heroSubtitle')}
        heroImage="/imgs/function/microwave/a_microwavebag_hero_main_kitchen_2543693.webp"
        heroImageAlt="Achieve Pack Microwave Steam Bag with vegetables"
        introSummary={t('seoPages.pages.microwaveSteamBags.introSummary')}
        sections={sections}
        faqs={faqs}
        relatedLinks={relatedLinks}
        ctaTitle={t('seoPages.pages.microwaveSteamBags.ctaTitle')}
        ctaDescription={t('seoPages.pages.microwaveSteamBags.ctaDescription')}
        ctaButtonText={t('seoPages.pages.microwaveSteamBags.ctaButtonText')}
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
          <img src={galleryEnlarged.src} alt={microwaveGallery[galleryEnlarged.index]?.title || 'Enlarged view'} className="max-w-full max-h-[80vh] object-contain" onClick={(e) => e.stopPropagation()} />
          <button onClick={(e) => { e.stopPropagation(); navigateGallery('next'); }} className="absolute right-4 text-white hover:text-neutral-300 transition p-2">
            <ChevronRight className="h-10 w-10" />
          </button>
          <div className="absolute bottom-4 text-center text-white max-w-xl px-4">
            <p className="text-lg font-semibold">{microwaveGallery[galleryEnlarged.index]?.title}</p>
            <p className="text-sm text-neutral-300">{microwaveGallery[galleryEnlarged.index]?.desc}</p>
            <p className="text-xs mt-2 text-neutral-400">{galleryEnlarged.index + 1} / {microwaveGallery.length}</p>
          </div>
        </div>
      )}
    </>
  )
}

export default MicrowaveSteamBagsPage
