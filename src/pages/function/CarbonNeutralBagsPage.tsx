import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Leaf, Recycle, Target, BarChart3, Package, Users, CheckCircle, Calendar, Mail, X, ChevronLeft, ChevronRight, Award, Globe, FileCheck, Building2, Shield, Sparkles } from 'lucide-react'
import SEOPageLayout from '../../components/SEOPageLayout'
import { Link } from 'react-router-dom'
import { useCalendly } from '../../contexts/CalendlyContext'
import { getDomain } from '../../utils/domain'
import BlogArticleTemplate from '../../components/pouch/BlogArticleTemplate'

// Gallery images from /imgs/function/carbon/


const CarbonNeutralBagsPage: React.FC = () => {
  const { t } = useTranslation()

  const carbonGallery = [
  { src: '/imgs/function/carbon/a_hero_card_1_carbon_neutral_materials_3157781.webp', title: t('seoPages.pages.carbonNeutralBags.title_carbonneutralCookingBags'), desc: t('seoPages.pages.carbonNeutralBags.desc_reduceCarbonEmissionsRetainDaily') },
  { src: '/imgs/function/carbon/a_image2_what_is_carbon_neutral_4619875.webp', title: t('seoPages.pages.carbonNeutralBags.title_whatIsACarbonneutralBag'), desc: t('seoPages.pages.carbonNeutralBags.desc_whatIscarbonNeutralandpackagingbag') },
  { src: '/imgs/function/carbon/a_image3_ap_carbon_neutral_badge_6727135.webp', title: t('seoPages.pages.carbonNeutralBags.title_achievePackCarbonneutralMaterials'), desc: t('seoPages.pages.carbonNeutralBags.desc_achievePackCarbonNeutralandmaterial') },
  { src: '/imgs/function/carbon/a_image4_lifecycle_reduction_9341345.webp', title: t('seoPages.pages.carbonNeutralBags.title_lifecycleCarbonReduction'), desc: t('seoPages.pages.carbonNeutralBags.desc_fromheadtoendmanagementcarbonFootprint') },
  { src: '/imgs/function/carbon/a_image5_co2_reduction_callout_7988460.webp', title: t('seoPages.pages.carbonNeutralBags.title_upTo20Co'), desc: t('seoPages.pages.carbonNeutralBags.desc_mosthighcanreduceabout20Ofpackagingrelat') },
  { src: '/imgs/function/carbon/a_image6_materials_mix_options_2058438.webp', title: t('seoPages.pages.carbonNeutralBags.title_materialsMixOptions'), desc: t('seoPages.pages.carbonNeutralBags.desc_materialgroupsuitableoptions') },
  { src: '/imgs/function/carbon/a_image7_recyclable_structures_3548261.webp', title: t('seoPages.pages.carbonNeutralBags.title_recyclableStructures'), desc: t('seoPages.pages.carbonNeutralBags.desc_recyclableandcarbonNeutralandofstructure') },
  { src: '/imgs/function/carbon/a_image8_kitchen_scene_co2_comparison_3143190.webp', title: t('seoPages.pages.carbonNeutralBags.title_sameRecipeLowerFootprint'), desc: t('seoPages.pages.carbonNeutralBags.desc_samestyleofvegetablepackaginglowerFootpr') },
  { src: '/imgs/function/carbon/a_image9_brands_retailers_benefits_6658677.webp', title: t('seoPages.pages.carbonNeutralBags.title_forBrandsRetailers'), desc: t('seoPages.pages.carbonNeutralBags.desc_letcarbonNeutralandpackagingformforincre') },
  { src: '/imgs/function/carbon/a_image10_design_your_system_closing_2038825.webp', title: t('seoPages.pages.carbonNeutralBags.title_designYourCarbonneutralSystem'), desc: t('seoPages.pages.carbonNeutralBags.desc_andAchievePackTogetherdesignyouofcarbonN') },
]


  const { openCalendly } = useCalendly()
  const [galleryEnlarged, setGalleryEnlarged] = useState<{ src: string; index: number } | null>(null)
  
  const isPouchDomain = getDomain() === 'pouch'

  const navigateGallery = (direction: 'prev' | 'next') => {
    if (!galleryEnlarged) return
    let newIndex = direction === 'prev' ? galleryEnlarged.index - 1 : galleryEnlarged.index + 1
    if (newIndex < 0) newIndex = carbonGallery.length - 1
    if (newIndex >= carbonGallery.length) newIndex = 0
    setGalleryEnlarged({ src: carbonGallery[newIndex].src, index: newIndex })
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
      title: t('seoPages.pages.carbonNeutralBags.title_whatIsCarbonneutralPackaging'),
      icon: <Leaf className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-8">
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-lg border border-green-200">
            <p className="text-lg font-medium text-neutral-900 mb-4">
              <strong>{t('seoPages.pages.carbonNeutralBags.lowerCoSameConvenience')}</strong> {t('seoPages.pages.carbonNeutralBags.achievePacksCarbonneutralBagsHelp')}
            </p>
            <p className="text-neutral-700">
              {t('seoPages.pages.carbonNeutralBags.reduceCarbonEmissionsRetainDaily')}
            </p>
          </div>
          
          <AlternatingSection
            image="/imgs/function/carbon/a_hero_card_1_carbon_neutral_materials_3157781.webp"
            imageAlt="Achieve Pack Carbon-Neutral Bags Hero"
            title={t('seoPages.pages.carbonNeutralBags.title_carbonneutralCookingBags')}
            titleCn="Carbon NeutralAndPackagingBag"
            content="You can choose from multiple low-carbon material combinations including traditional PE with offsets, PCR recycled PE, and bio-based Green PE. All engineered to reach carbon-neutral balance while keeping your products safe."
            contentCn="OptionalTraditional PE + Carbon Offset、PCR Recycled PE Blending、Bio-Based Green PE EtcMultipleLow CarbonMaterialGroupSuitable，FullPartCanThroughGroupSuitableReachToCarbon NeutralAndFlatBalance。"
            imageLeft={true}
            index={0}
          />
        </div>
      )
    },
    {
      id: 'what-is',
      title: t('seoPages.pages.carbonNeutralBags.title_whatIsACarbonneutralBag'),
      icon: <Target className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-8">
          <AlternatingSection
            image="/imgs/function/carbon/a_image2_what_is_carbon_neutral_4619875.webp"
            imageAlt="What is Carbon Neutral Bag"
            title={t('seoPages.pages.carbonNeutralBags.title_lowcarbonMaterialsCarbonOffsets')}
            titleCn="What IsCarbon NeutralAndPackagingBag？"
            content="A carbon-neutral bag is made with low-carbon materials like PCR PE and bio-based films. Any remaining emissions are balanced through certified carbon offset projects, resulting in net-zero packaging carbon footprint."
            contentCn="Use PCR Recycled PE AndBio-BasedFilmEtcLow CarbonMaterialMadeForm，RemainingRowPlaceThroughCertificationCarbon OffsetProjectIntoLineOffset，AchievePackagingNetZeroCarbonRowPlace。"
            imageLeft={false}
            index={1}
          />
          
          <div className="grid md:grid-cols-2 gap-4 mt-6">
            <div className="bg-green-50 p-4 rounded-lg border border-green-200">
              <CheckCircle className="h-5 w-5 text-green-600 mb-2" />
              <h4 className="font-semibold text-green-800">{t('seoPages.pages.carbonNeutralBags.madeWithLowcarbonMaterials')}</h4>
              <p className="text-sm text-green-700">{t('seoPages.pages.carbonNeutralBags.usePcrRecycledPeAndbiobasedfilmetclow')}</p>
            </div>
            <div className="bg-green-50 p-4 rounded-lg border border-green-200">
              <Leaf className="h-5 w-5 text-green-600 mb-2" />
              <h4 className="font-semibold text-green-800">{t('seoPages.pages.carbonNeutralBags.certifiedCarbonOffsetProjects')}</h4>
              <p className="text-sm text-green-700">{t('seoPages.pages.carbonNeutralBags.remainingrowplacethroughcertificationcar')}</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'ap-carbon',
      title: t('seoPages.pages.carbonNeutralBags.title_howDoesAchievePackDeliver'),
      icon: <CheckCircle className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-8">
          <AlternatingSection
            image="/imgs/function/carbon/a_image3_ap_carbon_neutral_badge_6727135.webp"
            imageAlt="Achieve Pack Carbon Neutral Badge"
            title={t('seoPages.pages.carbonNeutralBags.title_fromMaterialChoiceToOffsets')}
            titleCn="Achieve Pack × Carbon NeutralAndMaterial"
            content="Every Achieve Pack carbon-neutral pouch is designed with carbon balance in mind. From material selection to production efficiency to certified offsets, we ensure your packaging meets its sustainability goals."
            contentCn="FromMaterialChooseToCarbon Offset，EachOneOnlyBagChildAllWithFlatBalanceCarbonRowForTarget。WeEnsureYouOfPackagingReachToCanContinuousDevelopmentTarget。"
            imageLeft={true}
            index={2}
          />
        </div>
      )
    },
    {
      id: 'lifecycle',
      title: t('seoPages.pages.carbonNeutralBags.title_howDoesLifecycleCarbonReduction'),
      icon: <BarChart3 className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-8">
          <AlternatingSection
            image="/imgs/function/carbon/a_image4_lifecycle_reduction_9341345.webp"
            imageAlt="Life Cycle Carbon Reduction"
            title={t('seoPages.pages.carbonNeutralBags.title_carbonFootprintManagedEndTo')}
            titleCn="FromHeadToEndManagementCarbon Footprint"
            content="Our approach covers the entire life cycle: Materials (low-carbon or bio-based films), Production (efficient manufacturing & printing), and End-of-life (recyclable structures + carbon offsets). It's end-to-end carbon management."
            contentCn="OurSideMethod IncludeCoverWholeUnitRawLifeWeekPeriod：Material（Low CarbonOrBio-BasedFilm）→ Production（Efficient Production & Printing）→ EndEnd（RecyclableStructure + Carbon Offset）。"
            imageLeft={false}
            index={3}
          />
          
          <div className="grid md:grid-cols-3 gap-4 mt-6">
            <div className="bg-white border border-neutral-200 p-4 rounded-lg text-center">
              <div className="text-2xl mb-2">🌱</div>
              <h4 className="font-semibold text-neutral-800">{t('seoPages.pages.carbonNeutralBags.materials')}</h4>
              <p className="text-xs text-neutral-600">{t('seoPages.pages.carbonNeutralBags.lowcarbonOrBiobasedFilms')}<br/>{t('seoPages.pages.carbonNeutralBags.lowCarbonorbiobasedfilm')}</p>
            </div>
            <div className="bg-white border border-neutral-200 p-4 rounded-lg text-center">
              <div className="text-2xl mb-2">⚡</div>
              <h4 className="font-semibold text-neutral-800">{t('seoPages.pages.carbonNeutralBags.production')}</h4>
              <p className="text-xs text-neutral-600">{t('seoPages.pages.carbonNeutralBags.efficientManufacturing')}<br/>{t('seoPages.pages.carbonNeutralBags.efficientProductionPrinting')}</p>
            </div>
            <div className="bg-white border border-neutral-200 p-4 rounded-lg text-center">
              <div className="text-2xl mb-2">♻️</div>
              <h4 className="font-semibold text-neutral-800">{t('seoPages.pages.carbonNeutralBags.endoflife')}</h4>
              <p className="text-xs text-neutral-600">{t('seoPages.pages.carbonNeutralBags.recyclableCarbonOffsets')}<br/>{t('seoPages.pages.carbonNeutralBags.recyclablestructureCarbonOffset')}</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'co2-reduction',
      title: t('seoPages.pages.carbonNeutralBags.title_howMuchCoCanYou'),
      icon: <BarChart3 className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-8">
          <AlternatingSection
            image="/imgs/function/carbon/a_image5_co2_reduction_callout_7988460.webp"
            imageAlt="CO2 Reduction Callout"
            title={t('seoPages.pages.carbonNeutralBags.title_quantifiableCarbonReduction')}
            titleCn="MostHighCanReduceAbout 20% OfPackagingRelated Carbon Emission"
            content="Through material optimization, energy management, and carbon offset projects, our solutions can help brands reduce packaging-related CO₂ emissions by up to approximately 20%*. Perfect for ESG reporting and sustainability disclosures."
            contentCn="ThroughMaterialExcellentization + CanSourceManagement + Carbon OffsetProject，HelpBrandIn ESG ReportInDiscloseCanVolumeizationReduceRowData。*RealBoundaryReduceRowDependsAtMaterialStructureAndProjectWithSet。"
            imageLeft={true}
            index={4}
          />
          
          <div className="bg-amber-50 p-4 rounded-lg border border-amber-200 text-sm">
            <p className="text-amber-800">{t('seoPages.pages.carbonNeutralBags.exampleReductionPotentialDependingOn')}</p>
            <p className="text-amber-700">{t('seoPages.pages.carbonNeutralBags.realboundaryreducerowdependsatmaterialst')}</p>
          </div>
        </div>
      )
    },
    {
      id: 'materials-mix',
      title: t('seoPages.pages.carbonNeutralBags.title_whatMaterialOptionsAreAvailable'),
      icon: <Package className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-8">
          <AlternatingSection
            image="/imgs/function/carbon/a_image6_materials_mix_options_2058438.webp"
            imageAlt="Materials Mix Options"
            title={t('seoPages.pages.carbonNeutralBags.title_chooseYourMaterialRoute')}
            titleCn="MaterialGroupSuitableOptions"
            content="Select from Traditional PE with offsets, PCR PE blends (recycled content), or Bio-based Green PE. All options are engineered to reach carbon-neutral balance while maintaining compatibility with existing production lines."
            contentCn="OptionalTraditional PE + Carbon Offset、PCR Recycled PE Blending、Bio-Based Green PE，InMeetExistingProductionLineCompatibleCapacityPropertyOfBeforeRaiseUnderReachToCarbon NeutralAndFlatBalance。"
            imageLeft={false}
            index={5}
          />
          
          <div className="grid md:grid-cols-3 gap-4 mt-6">
            <div className="bg-neutral-50 p-4 rounded-lg">
              <div className="text-xl mb-2">💧</div>
              <h4 className="font-semibold text-neutral-800">{t('seoPages.pages.carbonNeutralBags.traditionalPeOffsets')}</h4>
              <p className="text-xs text-neutral-600">{t('seoPages.pages.carbonNeutralBags.traditionalPeCarbonOffset')}</p>
            </div>
            <div className="bg-neutral-50 p-4 rounded-lg">
              <div className="text-xl mb-2">♻️</div>
              <h4 className="font-semibold text-neutral-800">{t('seoPages.pages.carbonNeutralBags.pcrPeBlends')}</h4>
              <p className="text-xs text-neutral-600">{t('seoPages.pages.carbonNeutralBags.pcrRecycledPeBlending')}</p>
            </div>
            <div className="bg-neutral-50 p-4 rounded-lg">
              <div className="text-xl mb-2">🌿</div>
              <h4 className="font-semibold text-neutral-800">{t('seoPages.pages.carbonNeutralBags.biobasedGreenPe1')}</h4>
              <p className="text-xs text-neutral-600">{t('seoPages.pages.carbonNeutralBags.biobasedGreenPe2')}</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'recyclable',
      title: t('seoPages.pages.carbonNeutralBags.title_whatRecyclableStructuresAreAvailable'),
      icon: <Recycle className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-8">
          <AlternatingSection
            image="/imgs/function/carbon/a_image7_recyclable_structures_3548261.webp"
            imageAlt="Recyclable Structures"
            title={t('seoPages.pages.carbonNeutralBags.title_recyclableCarbonneutralStructuresAvailab')}
            titleCn="RecyclableAndCarbon NeutralAndOfStructureOptional"
            content="We offer fully recyclable (mono-material) flexible packaging options, as well as paper-based hybrid structures for specific markets. These solutions are easier to enter existing recycling systems compared to traditional multi-layer composites."
            contentCn="CanProvideCompleteRecyclable（SingleMaterialFilm）OfFlexiblePackaging，OrPaperBaseMixSuitableStructure，ComparedTraditionalMulti-LayerCompoundSuitableMoreEasyEnterExistingReturnCollectBodySystem。"
            imageLeft={true}
            index={6}
          />
          
          <div className="grid md:grid-cols-2 gap-4 mt-6">
            <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
              <h4 className="font-semibold text-blue-800">{t('seoPages.pages.carbonNeutralBags.monomaterialFilms')}</h4>
              <p className="text-sm text-blue-700">{t('seoPages.pages.carbonNeutralBags.whereLocalRecyclingExists')}<br/>{t('seoPages.pages.carbonNeutralBags.intoolpreparereturncollectstrippieceofgr')}</p>
            </div>
            <div className="bg-amber-50 p-4 rounded-lg border border-amber-200">
              <h4 className="font-semibold text-amber-800">{t('seoPages.pages.carbonNeutralBags.paperbasedHybridOptions')}</h4>
              <p className="text-sm text-amber-700">{t('seoPages.pages.carbonNeutralBags.forSpecificMarkets')}<br/>{t('seoPages.pages.carbonNeutralBags.canneedleforspecificmarketprovidepaperba')}</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'kitchen-use',
      title: t('seoPages.pages.carbonNeutralBags.title_sameRecipeLowerFootprint'),
      icon: <Leaf className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-8">
          <AlternatingSection
            image="/imgs/function/carbon/a_image8_kitchen_scene_co2_comparison_3143190.webp"
            imageAlt="Kitchen Scene CO2 Comparison"
            title={t('seoPages.pages.carbonNeutralBags.title_lowerPackagingFootprint')}
            titleCn="SameStyleOfVegetable，PackagingLower Footprint"
            content="When comparing conventional plastic containers to Achieve Pack carbon-neutral bags, our solution shows significantly lower CO₂ emissions. Enjoy the same cooking convenience with a smaller environmental impact."
            contentCn="ForRatioTraditionalPlasticCapacityDeviceAnd Achieve Pack Carbon NeutralAndBagOf CO₂ RowPlace，OurSolveSolutionObviousMoreLow。Retain Daily Convenience，ReduceEnvironmentImpact。"
            imageLeft={false}
            index={7}
          />
        </div>
      )
    },
    {
      id: 'brands-retailers',
      title: t('seoPages.pages.carbonNeutralBags.title_forBrandsRetailers'),
      icon: <Users className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-8">
          <AlternatingSection
            image="/imgs/function/carbon/a_image9_brands_retailers_benefits_6658677.webp"
            imageAlt="Benefits for Brands and Retailers"
            title={t('seoPages.pages.carbonNeutralBags.title_carbonneutralPackagingAsAGrowth')}
            titleCn="LetCarbon NeutralAndPackagingFormForIncreaseLong Story"
            content="'Carbon neutral packaging' search volume and consumer interest is rising. Our solutions help brands meet PPWR and other regulatory requirements while creating differentiated green selling points."
            contentCn="'carbon neutral packaging' SearchAndConsumerCloseNoteDegreeIncreaseHigh，HelpBrandMeet PPWR EtcSuperviseTubeNeedDemand，AndFormFormDifferenceizationOfGreenColorSellPoint。"
            imageLeft={true}
            index={8}
          />
          
          <div className="grid md:grid-cols-2 gap-6 mt-6">
            <div className="bg-white border border-neutral-200 p-5 rounded-lg">
              <h4 className="font-bold text-neutral-900 mb-3">{t('seoPages.pages.carbonNeutralBags.forBrands')}</h4>
              <ul className="space-y-2 text-sm text-neutral-700">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>{t('seoPages.pages.carbonNeutralBags.showCarbonneutralLogoOnPack')}<br/><span className="text-neutral-500">{t('seoPages.pages.carbonNeutralBags.inpackagingupdisplaycarbonNeutralandiden')}</span></span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>{t('seoPages.pages.carbonNeutralBags.supportEsgPpwrCompliance')}<br/><span className="text-neutral-500">{t('seoPages.pages.carbonNeutralBags.supportEsgAndnotcomepackagingregulations')}</span></span>
                </li>
              </ul>
            </div>
            <div className="bg-white border border-neutral-200 p-5 rounded-lg">
              <h4 className="font-bold text-neutral-900 mb-3">{t('seoPages.pages.carbonNeutralBags.forRetailers')}</h4>
              <ul className="space-y-2 text-sm text-neutral-700">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>{t('seoPages.pages.carbonNeutralBags.easyToCommunicateOnshelf')}<br/><span className="text-neutral-500">{t('seoPages.pages.carbonNeutralBags.shelfupeasyattransferreachecofriendlysel')}</span></span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>{t('seoPages.pages.carbonNeutralBags.appealsToEcoconsciousConsumers')}<br/><span className="text-neutral-500">{t('seoPages.pages.carbonNeutralBags.absorbleadclosenoteenvironmentofconsumer')}</span></span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'design-system',
      title: t('seoPages.pages.carbonNeutralBags.title_designYourCarbonneutralSystem'),
      icon: <Package className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-8">
          <AlternatingSection
            image="/imgs/function/carbon/a_image10_design_your_system_closing_2038825.webp"
            imageAlt="Design Your Carbon-Neutral System"
            title={t('seoPages.pages.carbonNeutralBags.title_designYourCarbonneutralPouchSystem')}
            titleCn="And Achieve Pack TogetherDesignYouOfCarbon NeutralAndPackagingSystem"
            content="Three simple steps: 1) Choose your material route (PE, PCR, bio-based, paper), 2) Define your CO₂ reduction target, 3) Combine structure + offsets to reach carbon neutrality."
            contentCn="Three Simple Steps：1) ChooseYouOfMaterialPath，2) DefineYouOfReduceCarbonTarget，3) Through Structural Design + Carbon OffsetAchieveCarbon NeutralAnd。"
            imageLeft={false}
            index={9}
          />
          
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-lg border border-green-200">
            <h4 className="font-bold text-neutral-900 mb-4">{t('seoPages.pages.carbonNeutralBags.3StepsToCarbonNeutrality')}</h4>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-primary-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">1</div>
                <div>
                  <p className="font-medium text-neutral-800">{t('seoPages.pages.carbonNeutralBags.chooseMaterialRoute')}</p>
                  <p className="text-xs text-neutral-600">{t('seoPages.pages.carbonNeutralBags.chooseyouofmaterialpathPePcrBiobasedPape')}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-primary-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">2</div>
                <div>
                  <p className="font-medium text-neutral-800">{t('seoPages.pages.carbonNeutralBags.defineCoTarget')}</p>
                  <p className="text-xs text-neutral-600">{t('seoPages.pages.carbonNeutralBags.defineyouofreducecarbontarget')}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-primary-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">3</div>
                <div>
                  <p className="font-medium text-neutral-800">{t('seoPages.pages.carbonNeutralBags.combineForNeutrality')}</p>
                  <p className="text-xs text-neutral-600">{t('seoPages.pages.carbonNeutralBags.throughStructuralDesignCarbonOffsetachie')}</p>
                </div>
              </div>
            </div>
            <p className="text-sm text-neutral-600 mt-4 text-center">{t('seoPages.pages.carbonNeutralBags.fromCompostableToRecyclableTo')}<br/>{t('seoPages.pages.carbonNeutralBags.fromcancompostabletorecyclabletocarbonNe')}</p>
          </div>
        </div>
      )
    },
    {
      id: 'trust-eeat',
      title: t('seoPages.pages.carbonNeutralBags.title_whyTrustAchievePack'),
      icon: <Award className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-8">
          <div className="bg-gradient-to-r from-primary-50 to-green-50 p-6 rounded-xl border border-primary-200">
            <h3 className="text-xl font-bold text-neutral-900 mb-4">{t('seoPages.pages.carbonNeutralBags.sustainabilityExpertsSince2011')}</h3>
            <p className="text-neutral-700 mb-4">
              {t('seoPages.pages.carbonNeutralBags.achievePackIsACertified')}
            </p>
            <p className="text-neutral-600 text-sm">
              {t('seoPages.pages.carbonNeutralBags.achievePackIsthroughcertificationofStrip')}
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-4">
            <div className="bg-white border border-neutral-200 p-4 rounded-lg text-center">
              <FileCheck className="h-8 w-8 text-green-600 mx-auto mb-2" />
              <h4 className="font-semibold text-neutral-800">{t('seoPages.pages.carbonNeutralBags.goldStandard')}</h4>
              <p className="text-xs text-neutral-500">{t('seoPages.pages.carbonNeutralBags.certifiedCarbonOffsets')}</p>
            </div>
            <div className="bg-white border border-neutral-200 p-4 rounded-lg text-center">
              <Building2 className="h-8 w-8 text-green-600 mx-auto mb-2" />
              <h4 className="font-semibold text-neutral-800">{t('seoPages.pages.carbonNeutralBags.lcaVerified')}</h4>
              <p className="text-xs text-neutral-500">{t('seoPages.pages.carbonNeutralBags.lifecycleAssessment')}</p>
            </div>
            <div className="bg-white border border-neutral-200 p-4 rounded-lg text-center">
              <Globe className="h-8 w-8 text-green-600 mx-auto mb-2" />
              <h4 className="font-semibold text-neutral-800">{t('seoPages.pages.carbonNeutralBags.500Brands')}</h4>
              <p className="text-xs text-neutral-500">{t('seoPages.pages.carbonNeutralBags.trustedWorldwide')}</p>
            </div>
            <div className="bg-white border border-neutral-200 p-4 rounded-lg text-center">
              <Users className="h-8 w-8 text-green-600 mx-auto mb-2" />
              <h4 className="font-semibold text-neutral-800">{t('seoPages.pages.carbonNeutralBags.1ForPlanet')}</h4>
              <p className="text-xs text-neutral-500">{t('seoPages.pages.carbonNeutralBags.stripeClimateMember')}</p>
            </div>
          </div>
          
          <div className="bg-neutral-50 p-6 rounded-lg">
            <h4 className="font-semibold text-neutral-800 mb-3">{t('seoPages.pages.carbonNeutralBags.exploreRelatedSolutions')}</h4>
            <div className="grid md:grid-cols-3 gap-3">
              <Link to="/materials/compostable" className="flex items-center gap-2 text-primary-600 hover:text-primary-700 text-sm">
                <Leaf className="h-4 w-4" /> {t('seoPages.pages.carbonNeutralBags.compostableMaterials')}
              </Link>
              <Link to="/materials/pcr" className="flex items-center gap-2 text-primary-600 hover:text-primary-700 text-sm">
                <Recycle className="h-4 w-4" /> {t('seoPages.pages.carbonNeutralBags.pcrRecycledMaterials')}
              </Link>
              <Link to="/materials/bio-pe" className="flex items-center gap-2 text-primary-600 hover:text-primary-700 text-sm">
                <Sparkles className="h-4 w-4" /> {t('seoPages.pages.carbonNeutralBags.biopePlantbased')}
              </Link>
              <Link to="/function/child-resistant-bags" className="flex items-center gap-2 text-primary-600 hover:text-primary-700 text-sm">
                <Shield className="h-4 w-4" /> {t('seoPages.pages.carbonNeutralBags.childresistantBags')}
              </Link>
              <Link to="/function/microwave-steam-bags" className="flex items-center gap-2 text-primary-600 hover:text-primary-700 text-sm">
                <Package className="h-4 w-4" /> {t('seoPages.pages.carbonNeutralBags.microwaveSteamBags')}
              </Link>
              <Link to="/company/certificates" className="flex items-center gap-2 text-primary-600 hover:text-primary-700 text-sm">
                <Award className="h-4 w-4" /> {t('seoPages.pages.carbonNeutralBags.ourCertifications')}
              </Link>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'cta',
      title: t('seoPages.pages.carbonNeutralBags.title_readyToGetStarted'),
      icon: <Leaf className="h-5 w-5 text-white" />,
      content: (
        <div className="bg-gradient-to-br from-green-500 to-emerald-600 text-white p-8 rounded-xl">
          <h3 className="text-2xl font-bold mb-6 text-center">{t('seoPages.pages.carbonNeutralBags.chooseHowYoudLikeTo')}</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white/10 backdrop-blur p-6 rounded-lg text-center">
              <Calendar className="h-8 w-8 mx-auto mb-3" />
              <h4 className="font-semibold mb-2">{t('seoPages.pages.carbonNeutralBags.bookACall')}</h4>
              <p className="text-sm text-white/80 mb-4">{t('seoPages.pages.carbonNeutralBags.30minFreeConsultation')}</p>
              <button onClick={openCalendly} className="w-full bg-white text-green-600 px-4 py-2 rounded-lg font-semibold hover:bg-green-50 transition cursor-pointer">
                {t('seoPages.pages.carbonNeutralBags.scheduleNow')}
              </button>
            </div>
            <div className="bg-white/10 backdrop-blur p-6 rounded-lg text-center">
              <Mail className="h-8 w-8 mx-auto mb-3" />
              <h4 className="font-semibold mb-2">{t('seoPages.pages.carbonNeutralBags.emailQuote')}</h4>
              <p className="text-sm text-white/80 mb-4">{t('seoPages.pages.carbonNeutralBags.getResponseWithin24hrs')}</p>
              <a href="mailto:ryan@achievepack.com?subject=Carbon-Neutral Bags Quote" className="block w-full bg-white text-green-600 px-4 py-2 rounded-lg font-semibold hover:bg-green-50 transition">
                {t('seoPages.pages.carbonNeutralBags.sendEmail')}
              </a>
            </div>
          </div>
        </div>
      )
    }
  ]

  const faqs = [
    {
      question: t('seoPages.pages.carbonNeutralBags.question_whatIsCarbonneutralPackaging'),
      answer: t('seoPages.pages.carbonNeutralBags.answer_carbonneutralPackagingMeansTheTotal')
    },
    {
      question: t('seoPages.pages.carbonNeutralBags.question_howDoYouCalculateThe'),
      answer: t('seoPages.pages.carbonNeutralBags.answer_weUseLifecycleAssessmentLca')
    },
    {
      question: t('seoPages.pages.carbonNeutralBags.question_whatCarbonOffsetProjectsDo'),
      answer: t('seoPages.pages.carbonNeutralBags.answer_weWorkWithCertifiedCarbon')
    },
    {
      question: t('seoPages.pages.carbonNeutralBags.question_canIDisplayACarbonneutral'),
      answer: t('seoPages.pages.carbonNeutralBags.answer_yesWhenYouChooseOur')
    },
    {
      question: t('seoPages.pages.carbonNeutralBags.question_isCarbonneutralPackagingMoreExpensive'),
      answer: t('seoPages.pages.carbonNeutralBags.answer_thereIsTypicallyAModest')
    },
    {
      question: t('seoPages.pages.carbonNeutralBags.question_whatIsTheMinimumOrder'),
      answer: t('seoPages.pages.carbonNeutralBags.answer_ourMinimumOrderQuantityStarts')
    },
    {
      question: t('seoPages.pages.carbonNeutralBags.question_howDoesCarbonneutralPackagingHelp'),
      answer: t('seoPages.pages.carbonNeutralBags.answer_carbonneutralPackagingProvidesQuantifiab')
    },
    {
      question: t('seoPages.pages.carbonNeutralBags.question_whatMaterialsAreUsedIn'),
      answer: t('seoPages.pages.carbonNeutralBags.answer_weOfferMultipleOptionsTraditional')
    }
  ]

  const relatedLinks = [
    { title: t('seoPages.pages.carbonNeutralBags.title_recyclableMonope'), url: "/materials/recyclable-mono-pe", description: t('seoPages.pages.carbonNeutralBags.description_fullyRecyclableSinglematerialStructure') },
    { title: t('seoPages.pages.carbonNeutralBags.title_biopeMaterials'), url: "/materials/bio-pe", description: t('seoPages.pages.carbonNeutralBags.description_plantbasedPolyethyleneOptions') },
    { title: t('seoPages.pages.carbonNeutralBags.title_pcrRecycled'), url: "/materials/pcr", description: t('seoPages.pages.carbonNeutralBags.description_postconsumerRecycledContent') },
    { title: t('seoPages.pages.carbonNeutralBags.title_compostablePouches'), url: "/materials/compostable", description: t('seoPages.pages.carbonNeutralBags.description_100PlasticfreeMaterials') },
    { title: t('seoPages.pages.carbonNeutralBags.title_standUpPouches'), url: "/packaging/stand-up-pouches", description: t('seoPages.pages.carbonNeutralBags.description_selfstandingPackaging') },
    { title: t('seoPages.pages.carbonNeutralBags.title_flatBottomBags'), url: "/packaging/flat-bottom-bags", description: t('seoPages.pages.carbonNeutralBags.description_premiumBoxbottomStyle') },
    { title: t('seoPages.pages.carbonNeutralBags.title_barrierOptions'), url: "/features/barrier-options", description: t('seoPages.pages.carbonNeutralBags.description_chooseProtectionLevel') },
    { title: t('seoPages.pages.carbonNeutralBags.title_surfaceFinishes'), url: "/features/surface-finish", description: t('seoPages.pages.carbonNeutralBags.description_matteGlossSofttouch') },
    { title: t('seoPages.pages.carbonNeutralBags.title_childresistantBags'), url: "/function/child-resistant-bags", description: t('seoPages.pages.carbonNeutralBags.description_safetycertifiedPouches') },
    { title: t('seoPages.pages.carbonNeutralBags.title_microwaveSteamBags'), url: "/function/microwave-steam-bags", description: t('seoPages.pages.carbonNeutralBags.description_foodsafeHeatingPouches') },
    { title: t('seoPages.pages.carbonNeutralBags.title_spoutPouches'), url: "/function/spout-pouches-juice", description: t('seoPages.pages.carbonNeutralBags.description_liquidPackagingSolutions') },
    { title: t('seoPages.pages.carbonNeutralBags.title_coffeePackaging'), url: "/industry/coffee-tea", description: t('seoPages.pages.carbonNeutralBags.description_premiumCoffeeBags') },
    { title: t('seoPages.pages.carbonNeutralBags.title_petFoodBags'), url: "/industry/pet-food", description: t('seoPages.pages.carbonNeutralBags.description_sustainablePetPackaging') },
    { title: t('seoPages.pages.carbonNeutralBags.title_certificates'), url: "/company/certificates", description: t('seoPages.pages.carbonNeutralBags.description_viewOurCertifications') },
    { title: t('seoPages.pages.carbonNeutralBags.title_aboutUs'), url: "/company/about", description: t('seoPages.pages.carbonNeutralBags.description_ourSustainabilityStory') }
  ]

  // B2C Specific Content & Layout
  const b2cSections = [
    {
      id: 'carbon-neutrality',
      title: t('seoPages.pages.carbonNeutralBags.title_whatIsACarbonneutralPouch'),
      icon: <Leaf className="h-5 w-5 text-black" />,
      content: (
        <div className="space-y-6">
          <p className="text-neutral-700">
            {t('seoPages.pages.carbonNeutralBags.forModernDirecttoconsumerDtcStartups')} <strong>{t('seoPages.pages.carbonNeutralBags.carbonneutralPouch')}</strong> {t('seoPages.pages.carbonNeutralBags.isOneOfTheMost')}
          </p>
          <div className="bg-[#D4FF00] p-6 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            <p className="text-lg font-black text-neutral-900 mb-2 uppercase font-['JetBrains_Mono']">
              <strong>{t('seoPages.pages.carbonNeutralBags.everyPouchCountsTowardsNetzero')}</strong>
            </p>
            <p className="text-sm text-neutral-800 leading-relaxed">
              {t('seoPages.pages.carbonNeutralBags.ourCarbonneutralBagsCalculateThe')}
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 items-center mt-6">
            <button 
              onClick={() => setGalleryEnlarged({ src: '/imgs/function/carbon/a_hero_card_1_carbon_neutral_materials_3157781.webp', index: 0 })}
              className="block rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow cursor-pointer group animate-fade-in"
            >
              <img src="/imgs/function/carbon/a_hero_card_1_carbon_neutral_materials_3157781.webp" alt={t('seoPages.pages.carbonNeutralBags.alt_carbonneutralMaterials')} className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-300" />
              <div className="bg-neutral-100 px-3 py-2 text-xs text-neutral-500 text-center border-t-2 border-neutral-200">{t('seoPages.pages.carbonNeutralBags.clickToEnlarge')}</div>
            </button>
            <div className="space-y-3">
              <h4 className="font-bold text-neutral-900 font-['JetBrains_Mono'] uppercase">{t('seoPages.pages.carbonNeutralBags.fullLcaTransparency')}</h4>
              <p className="text-sm text-neutral-600 leading-relaxed">
                {t('seoPages.pages.carbonNeutralBags.weConductStrictLifecycleAssessments')}
              </p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'sustainable-materials',
      title: t('seoPages.pages.carbonNeutralBags.title_pcrPeSugarcaneBiopePlantbased'),
      icon: <Sparkles className="h-5 w-5 text-black" />,
      content: (
        <div className="space-y-6">
          <p className="text-neutral-700">
            {t('seoPages.pages.carbonNeutralBags.carbonneutralityDoesntMeanStickingTo')} <strong>{t('seoPages.pages.carbonNeutralBags.reduceEmissionsAtTheSource')}</strong> {t('seoPages.pages.carbonNeutralBags.byUtilizingLowcarbonMaterialComposites')}
          </p>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <h4 className="font-bold text-neutral-900 font-['JetBrains_Mono'] uppercase">{t('seoPages.pages.carbonNeutralBags.customMaterialsForEcoconsciousBrands')}</h4>
              <ul className="text-sm space-y-2 text-neutral-600">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-[#10b981] mt-0.5 flex-shrink-0" />
                  <span><strong>{t('seoPages.pages.carbonNeutralBags.naturalCraftPaperBrownKraft')}</strong> {t('seoPages.pages.carbonNeutralBags.craftedFromSustainableFsccertifiedWood')}</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-[#10b981] mt-0.5 flex-shrink-0" />
                  <span><strong>{t('seoPages.pages.carbonNeutralBags.pcrPePostconsumerRecycled')}</strong> {t('seoPages.pages.carbonNeutralBags.madeFromRecycledHouseholdMilk')}</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-[#10b981] mt-0.5 flex-shrink-0" />
                  <span><strong>{t('seoPages.pages.carbonNeutralBags.biobasedGreenPe')}</strong> {t('seoPages.pages.carbonNeutralBags.synthesizedFromSugarcaneEthyleneCapturin')}</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-[#10b981] mt-0.5 flex-shrink-0" />
                  <span><strong>{t('seoPages.pages.carbonNeutralBags.monopeRecyclable')}</strong> {t('seoPages.pages.carbonNeutralBags.aSinglepolymerStructureThatIs')}</span>
                </li>
              </ul>
            </div>
            <button 
              onClick={() => setGalleryEnlarged({ src: '/imgs/function/carbon/a_image6_materials_mix_options_2058438.webp', index: 5 })}
              className="block rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow cursor-pointer group"
            >
              <img src="/imgs/function/carbon/a_image6_materials_mix_options_2058438.webp" alt={t('seoPages.pages.carbonNeutralBags.alt_materialsMixOptions')} className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-300" />
              <div className="bg-neutral-100 px-3 py-2 text-xs text-neutral-500 text-center border-t-2 border-neutral-200">{t('seoPages.pages.carbonNeutralBags.clickToEnlarge')}</div>
            </button>
          </div>
        </div>
      )
    },
    {
      id: 'dtc-moq',
      title: t('seoPages.pages.carbonNeutralBags.title_dtcAgility500unitMoqMultisku'),
      icon: <Recycle className="h-5 w-5 text-black" />,
      content: (
        <div className="space-y-6">
          <p className="text-neutral-700">
            {t('seoPages.pages.carbonNeutralBags.standardB2bPackagingPipelinesDemand')} 
          </p>
          <div className="bg-white border-4 border-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
            <h4 className="font-black text-neutral-900 mb-2 uppercase font-['JetBrains_Mono']">{t('seoPages.pages.carbonNeutralBags.zeroPlateFeesLowRisk')}</h4>
            <p className="text-sm text-neutral-700 leading-relaxed">
              {t('seoPages.pages.carbonNeutralBags.pouchecoUsesAdvancedDigitalPrinting')} <strong>{t('seoPages.pages.carbonNeutralBags.500Pouches')}</strong>{t('seoPages.pages.carbonNeutralBags.youCanPrintMultipleSkus')}
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-4 mt-6">
            <div className="bg-[#00FFFF] border-4 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h5 className="font-black uppercase text-xs tracking-wider mb-2 font-['JetBrains_Mono']">{t('seoPages.pages.carbonNeutralBags.fastTurnaround')}</h5>
              <p className="text-xs text-black">{t('seoPages.pages.carbonNeutralBags.shipCustomprintedEcoBagsIn')}</p>
            </div>
            <div className="bg-[#D4FF00] border-4 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h5 className="font-black uppercase text-xs tracking-wider mb-2 font-['JetBrains_Mono']">{t('seoPages.pages.carbonNeutralBags.diyCustomStamping')}</h5>
              <p className="text-xs text-black">{t('seoPages.pages.carbonNeutralBags.orderPlainStockKraftBags')}</p>
            </div>
            <div className="bg-white border-4 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h5 className="font-black uppercase text-xs tracking-wider mb-2 font-['JetBrains_Mono']">{t('seoPages.pages.carbonNeutralBags.scentVaporLock')}</h5>
              <p className="text-xs text-neutral-700">{t('seoPages.pages.carbonNeutralBags.highperformanceLaminationHoldsDelicateEs')}</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'climate-positive',
      title: t('seoPages.pages.carbonNeutralBags.title_stripeClimatePartnersClimatepositiveStor'),
      icon: <Users className="h-5 w-5 text-black" />,
      content: (
        <div className="space-y-6">
          <p className="text-neutral-700">
            {t('seoPages.pages.carbonNeutralBags.packagingIsMoreThanProtectionits')}
          </p>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <button 
              onClick={() => setGalleryEnlarged({ src: '/imgs/function/carbon/a_image3_ap_carbon_neutral_badge_6727135.webp', index: 2 })}
              className="block rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow cursor-pointer group"
            >
              <img src="/imgs/function/carbon/a_image3_ap_carbon_neutral_badge_6727135.webp" alt={t('seoPages.pages.carbonNeutralBags.alt_carbonNeutralBadge')} className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-300" />
              <div className="bg-neutral-100 px-3 py-2 text-xs text-neutral-500 text-center border-t-2 border-neutral-200">{t('seoPages.pages.carbonNeutralBags.clickToEnlarge')}</div>
            </button>
            <div className="space-y-4">
              <h4 className="font-bold text-neutral-900 font-['JetBrains_Mono'] uppercase">{t('seoPages.pages.carbonNeutralBags.howToShareYourStory')}</h4>
              <ul className="text-sm space-y-2 text-neutral-700">
                <li>🎨 <strong>{t('seoPages.pages.carbonNeutralBags.customGreenBadges')}</strong> {t('seoPages.pages.carbonNeutralBags.weSupplyOfficialCarbonneutralBadges')}</li>
                <li>📝 <strong>{t('seoPages.pages.carbonNeutralBags.shopifyIntegration')}</strong> {t('seoPages.pages.carbonNeutralBags.highlightTheCarbonoffsetDataAt')}</li>
                <li>📈 <strong>{t('seoPages.pages.carbonNeutralBags.esgProof')}</strong> {t('seoPages.pages.carbonNeutralBags.weProvideFormalCertificateOffsets')}</li>
              </ul>
            </div>
          </div>
        </div>
      )
    }
  ]

  if (isPouchDomain) {
    return (
      <BlogArticleTemplate
        title={t('seoPages.pages.carbonNeutralBags.title_carbonneutralPouchesPremiumEcobrandingPo')}
        metaDescription={t('seoPages.pages.carbonNeutralBags.metaDescription')}
        canonicalUrl="https://pouch.eco/function/carbon-neutral-bags"
        keywords={['carbon-neutral bags', 'climate-positive packaging', 'sustainable pouch', 'sugarcane PE', 'low MOQ eco packaging']}
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
              <span className="bg-[#D4FF00] text-black px-1.5 py-0.5 border border-black font-bold">Carbon-Neutral Bags</span>
            </div>

            {/* Badges / Cross Links */}
            <div className="flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-1 px-3 py-1.5 text-xs font-black bg-black text-[#D4FF00] border-2 border-black uppercase tracking-wider shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] font-['JetBrains_Mono']">
                🌱 Stripe Climate Partner
              </span>
              <Link 
                to="/materials/compostable" 
                className="inline-flex items-center gap-1 px-3 py-1.5 text-xs font-black bg-[#00FFFF] text-black border-2 border-black hover:bg-[#D4FF00] transition-colors uppercase tracking-wider shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]"
              >
                🔄 View Compostable Options →
              </Link>
            </div>

            <h1 className="font-black text-4xl md:text-6xl lg:text-7xl uppercase leading-tight mt-4">
              Carbon-Neutral<br />
              <span className="text-[#10b981]">Sustainable Bags</span><br />
              DTC Scaling Guide
            </h1>
          </div>
        }
        heroSubtitle={t('seoPages.pages.carbonNeutralBags.heroSubtitle')}
        heroImage="/imgs/function/carbon/a_hero_card_1_carbon_neutral_materials_3157781.webp"
        heroImageAlt="POUCH.ECO carbon-neutral custom pouch packaging guide"
        categoryTag="ECO_PRODUCTS"
        categoryColor="#10b981"
        readTime="5 min read"
        sections={b2cSections}
        ctaTitle={t('seoPages.pages.carbonNeutralBags.ctaTitle')}
        ctaDescription={t('seoPages.pages.carbonNeutralBags.ctaDescription')}
        calendlyUrl="https://calendly.com/30-min-free-packaging-consultancy"
        achievePackLink="https://achievepack.com/function/carbon-neutral-bags"
        achievePackText={t('seoPages.pages.carbonNeutralBags.achievePackText')}
        showTableOfContents={true}
        relatedArticles={[
          {
            title: t('seoPages.pages.carbonNeutralBags.title_monopeRecyclableBagsTheSinglematerial'),
            url: '/materials/recyclable',
            image: '/imgs/function/carbon/a_image7_recyclable_structures_3548261.webp'
          },
          {
            title: t('seoPages.pages.carbonNeutralBags.title_writablStampableEcoPouchesSku'),
            url: '/knowledge/writable-stampable-pouches',
            image: '/imgs/knowledge/writable-stampable-pouches.jpg'
          }
        ]}
      />
    )
  }

  return (
    <>
      <SEOPageLayout heroBgColor="#1f2937"
        title={t('seoPages.pages.carbonNeutralBags.title_carbonneutralBagsEcofriendlyPackaging')}
        description={t('seoPages.pages.carbonNeutralBags.description')}
        keywords={['carbon neutral packaging', 'carbon neutral bags', 'low carbon packaging', 'sustainable packaging', 'PCR PE bags', 'bio-based packaging', 'carbon offset packaging', 'eco-friendly bags', 'ESG packaging', 'net zero packaging', 'climate positive packaging', 'green PE bags', 'recyclable carbon neutral', 'sustainable pouch packaging']}
        canonicalUrl="https://achievepack.com/function/carbon-neutral-bags"
        heroTitle={t('seoPages.pages.carbonNeutralBags.heroTitle')}
        heroSubtitle={t('seoPages.pages.carbonNeutralBags.heroSubtitle')}
        heroImage="/imgs/function/carbon/a_hero_card_1_carbon_neutral_materials_3157781.webp"
        heroImageAlt="Achieve Pack Carbon-Neutral Bags"
        introSummary={t('seoPages.pages.carbonNeutralBags.introSummary')}
        sections={sections}
        faqs={faqs}
        relatedLinks={relatedLinks}
        ctaTitle={t('seoPages.pages.carbonNeutralBags.ctaTitle')}
        ctaDescription={t('seoPages.pages.carbonNeutralBags.ctaDescription')}
        ctaButtonText={t('seoPages.pages.carbonNeutralBags.ctaButtonText')}
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
          <img src={galleryEnlarged.src} alt={carbonGallery[galleryEnlarged.index]?.title || 'Enlarged view'} className="max-w-full max-h-[80vh] object-contain" onClick={(e) => e.stopPropagation()} />
          <button onClick={(e) => { e.stopPropagation(); navigateGallery('next'); }} className="absolute right-4 text-white hover:text-neutral-300 transition p-2">
            <ChevronRight className="h-10 w-10" />
          </button>
          <div className="absolute bottom-4 text-center text-white max-w-xl px-4">
            <p className="text-lg font-semibold">{carbonGallery[galleryEnlarged.index]?.title}</p>
            <p className="text-sm text-neutral-300">{carbonGallery[galleryEnlarged.index]?.desc}</p>
            <p className="text-xs mt-2 text-neutral-400">{galleryEnlarged.index + 1} / {carbonGallery.length}</p>
          </div>
        </div>
      )}
    </>
  )
}

export default CarbonNeutralBagsPage
