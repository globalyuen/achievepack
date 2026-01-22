import React, { useState } from 'react'
import { Leaf, Recycle, Target, BarChart3, Package, Users, CheckCircle, Calendar, Mail, X, ChevronLeft, ChevronRight, Award, Globe, FileCheck, Building2, Shield, Sparkles } from 'lucide-react'
import SEOPageLayout from '../../components/SEOPageLayout'
import { Link } from 'react-router-dom'
import { useCalendly } from '../../contexts/CalendlyContext'

// Gallery images from /imgs/function/carbon/
const carbonGallery = [
  { src: '/imgs/function/carbon/a_hero_card_1_carbon_neutral_materials_3157781.webp', title: 'Carbon-Neutral Cooking Bags', desc: 'Reduce Carbon Emissions · Retain Daily Convenience' },
  { src: '/imgs/function/carbon/a_image2_what_is_carbon_neutral_4619875.webp', title: 'What is a Carbon-Neutral Bag?', desc: 'What IsCarbon NeutralAndPackagingBag？' },
  { src: '/imgs/function/carbon/a_image3_ap_carbon_neutral_badge_6727135.webp', title: 'Achieve Pack × Carbon-Neutral Materials', desc: 'Achieve Pack × Carbon NeutralAndMaterial' },
  { src: '/imgs/function/carbon/a_image4_lifecycle_reduction_9341345.webp', title: 'Life-Cycle Carbon Reduction', desc: 'FromHeadToEndManagementCarbon Footprint' },
  { src: '/imgs/function/carbon/a_image5_co2_reduction_callout_7988460.webp', title: 'Up to -20% CO₂', desc: 'MostHighCanReduceAbout 20% OfPackagingRelated Carbon Emission' },
  { src: '/imgs/function/carbon/a_image6_materials_mix_options_2058438.webp', title: 'Materials Mix Options', desc: 'MaterialGroupSuitableOptions' },
  { src: '/imgs/function/carbon/a_image7_recyclable_structures_3548261.webp', title: 'Recyclable Structures', desc: 'RecyclableAndCarbon NeutralAndOfStructureOptional' },
  { src: '/imgs/function/carbon/a_image8_kitchen_scene_co2_comparison_3143190.webp', title: 'Same Recipe, Lower Footprint', desc: 'SameStyleOfVegetable，PackagingLower Footprint' },
  { src: '/imgs/function/carbon/a_image9_brands_retailers_benefits_6658677.webp', title: 'For Brands & Retailers', desc: 'LetCarbon NeutralAndPackagingFormForIncreaseLong Story' },
  { src: '/imgs/function/carbon/a_image10_design_your_system_closing_2038825.webp', title: 'Design Your Carbon-Neutral System', desc: 'And Achieve Pack TogetherDesignYouOfCarbon NeutralAndPackagingSystem' },
]

const CarbonNeutralBagsPage: React.FC = () => {
  const { openCalendly } = useCalendly()
  const [galleryEnlarged, setGalleryEnlarged] = useState<{ src: string; index: number } | null>(null)
  
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
      title: 'What Is Carbon-Neutral Packaging?',
      icon: <Leaf className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-8">
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-lg border border-green-200">
            <p className="text-lg font-medium text-neutral-900 mb-4">
              <strong>Lower CO₂, same convenience</strong> — Achieve Pack's carbon-neutral bags help you cut your packaging carbon footprint through material optimization, efficient production, and certified carbon offset projects.
            </p>
            <p className="text-neutral-700">
              Reduce Carbon Emissions · Retain Daily Convenience — ThroughMaterialExcellentization、EfficientProductionAndCertificationCarbon OffsetProject，HelpBrandReduceLowPackagingCarbon Footprint
            </p>
          </div>
          
          <AlternatingSection
            image="/imgs/function/carbon/a_hero_card_1_carbon_neutral_materials_3157781.webp"
            imageAlt="Achieve Pack Carbon-Neutral Bags Hero"
            title="Carbon-Neutral Cooking Bags"
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
      title: 'What is a Carbon-Neutral Bag?',
      icon: <Target className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-8">
          <AlternatingSection
            image="/imgs/function/carbon/a_image2_what_is_carbon_neutral_4619875.webp"
            imageAlt="What is Carbon Neutral Bag"
            title="Low-Carbon Materials + Carbon Offsets"
            titleCn="What IsCarbon NeutralAndPackagingBag？"
            content="A carbon-neutral bag is made with low-carbon materials like PCR PE and bio-based films. Any remaining emissions are balanced through certified carbon offset projects, resulting in net-zero packaging carbon footprint."
            contentCn="Use PCR Recycled PE AndBio-BasedFilmEtcLow CarbonMaterialMadeForm，RemainingRowPlaceThroughCertificationCarbon OffsetProjectIntoLineOffset，AchievePackagingNetZeroCarbonRowPlace。"
            imageLeft={false}
            index={1}
          />
          
          <div className="grid md:grid-cols-2 gap-4 mt-6">
            <div className="bg-green-50 p-4 rounded-lg border border-green-200">
              <CheckCircle className="h-5 w-5 text-green-600 mb-2" />
              <h4 className="font-semibold text-green-800">Made with low-carbon materials</h4>
              <p className="text-sm text-green-700">Use PCR Recycled PE AndBio-BasedFilmEtcLow CarbonMaterial</p>
            </div>
            <div className="bg-green-50 p-4 rounded-lg border border-green-200">
              <Leaf className="h-5 w-5 text-green-600 mb-2" />
              <h4 className="font-semibold text-green-800">Certified carbon offset projects</h4>
              <p className="text-sm text-green-700">RemainingRowPlaceThroughCertificationCarbon OffsetProjectIntoLineOffset</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'ap-carbon',
      title: 'How Does Achieve Pack Deliver Carbon-Neutral Materials?',
      icon: <CheckCircle className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-8">
          <AlternatingSection
            image="/imgs/function/carbon/a_image3_ap_carbon_neutral_badge_6727135.webp"
            imageAlt="Achieve Pack Carbon Neutral Badge"
            title="From Material Choice to Offsets"
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
      title: 'How Does Life-Cycle Carbon Reduction Work?',
      icon: <BarChart3 className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-8">
          <AlternatingSection
            image="/imgs/function/carbon/a_image4_lifecycle_reduction_9341345.webp"
            imageAlt="Life Cycle Carbon Reduction"
            title="Carbon Footprint, Managed End to End"
            titleCn="FromHeadToEndManagementCarbon Footprint"
            content="Our approach covers the entire life cycle: Materials (low-carbon or bio-based films), Production (efficient manufacturing & printing), and End-of-life (recyclable structures + carbon offsets). It's end-to-end carbon management."
            contentCn="OurSideMethod IncludeCoverWholeUnitRawLifeWeekPeriod：Material（Low CarbonOrBio-BasedFilm）→ Production（Efficient Production & Printing）→ EndEnd（RecyclableStructure + Carbon Offset）。"
            imageLeft={false}
            index={3}
          />
          
          <div className="grid md:grid-cols-3 gap-4 mt-6">
            <div className="bg-white border border-neutral-200 p-4 rounded-lg text-center">
              <div className="text-2xl mb-2">🌱</div>
              <h4 className="font-semibold text-neutral-800">Materials</h4>
              <p className="text-xs text-neutral-600">Low-carbon or bio-based films<br/>Low CarbonOrBio-BasedFilm</p>
            </div>
            <div className="bg-white border border-neutral-200 p-4 rounded-lg text-center">
              <div className="text-2xl mb-2">⚡</div>
              <h4 className="font-semibold text-neutral-800">Production</h4>
              <p className="text-xs text-neutral-600">Efficient manufacturing<br/>Efficient Production & Printing</p>
            </div>
            <div className="bg-white border border-neutral-200 p-4 rounded-lg text-center">
              <div className="text-2xl mb-2">♻️</div>
              <h4 className="font-semibold text-neutral-800">End-of-life</h4>
              <p className="text-xs text-neutral-600">Recyclable + carbon offsets<br/>RecyclableStructure + Carbon Offset</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'co2-reduction',
      title: 'How Much CO₂ Can You Reduce?',
      icon: <BarChart3 className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-8">
          <AlternatingSection
            image="/imgs/function/carbon/a_image5_co2_reduction_callout_7988460.webp"
            imageAlt="CO2 Reduction Callout"
            title="Quantifiable Carbon Reduction"
            titleCn="MostHighCanReduceAbout 20% OfPackagingRelated Carbon Emission"
            content="Through material optimization, energy management, and carbon offset projects, our solutions can help brands reduce packaging-related CO₂ emissions by up to approximately 20%*. Perfect for ESG reporting and sustainability disclosures."
            contentCn="ThroughMaterialExcellentization + CanSourceManagement + Carbon OffsetProject，HelpBrandIn ESG ReportInDiscloseCanVolumeizationReduceRowData。*RealBoundaryReduceRowDependsAtMaterialStructureAndProjectWithSet。"
            imageLeft={true}
            index={4}
          />
          
          <div className="bg-amber-50 p-4 rounded-lg border border-amber-200 text-sm">
            <p className="text-amber-800">*Example reduction potential depending on material structure and project configuration</p>
            <p className="text-amber-700">*RealBoundaryReduceRowDependsAtMaterialStructureAndProjectWithSet</p>
          </div>
        </div>
      )
    },
    {
      id: 'materials-mix',
      title: 'What Material Options Are Available?',
      icon: <Package className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-8">
          <AlternatingSection
            image="/imgs/function/carbon/a_image6_materials_mix_options_2058438.webp"
            imageAlt="Materials Mix Options"
            title="Choose Your Material Route"
            titleCn="MaterialGroupSuitableOptions"
            content="Select from Traditional PE with offsets, PCR PE blends (recycled content), or Bio-based Green PE. All options are engineered to reach carbon-neutral balance while maintaining compatibility with existing production lines."
            contentCn="OptionalTraditional PE + Carbon Offset、PCR Recycled PE Blending、Bio-Based Green PE，InMeetExistingProductionLineCompatibleCapacityPropertyOfBeforeRaiseUnderReachToCarbon NeutralAndFlatBalance。"
            imageLeft={false}
            index={5}
          />
          
          <div className="grid md:grid-cols-3 gap-4 mt-6">
            <div className="bg-neutral-50 p-4 rounded-lg">
              <div className="text-xl mb-2">💧</div>
              <h4 className="font-semibold text-neutral-800">Traditional PE + Offsets</h4>
              <p className="text-xs text-neutral-600">Traditional PE + Carbon Offset</p>
            </div>
            <div className="bg-neutral-50 p-4 rounded-lg">
              <div className="text-xl mb-2">♻️</div>
              <h4 className="font-semibold text-neutral-800">PCR PE Blends</h4>
              <p className="text-xs text-neutral-600">PCR Recycled PE Blending</p>
            </div>
            <div className="bg-neutral-50 p-4 rounded-lg">
              <div className="text-xl mb-2">🌿</div>
              <h4 className="font-semibold text-neutral-800">Bio-based Green PE</h4>
              <p className="text-xs text-neutral-600">Bio-Based Green PE</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'recyclable',
      title: 'What Recyclable Structures Are Available?',
      icon: <Recycle className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-8">
          <AlternatingSection
            image="/imgs/function/carbon/a_image7_recyclable_structures_3548261.webp"
            imageAlt="Recyclable Structures"
            title="Recyclable Carbon-Neutral Structures Available"
            titleCn="RecyclableAndCarbon NeutralAndOfStructureOptional"
            content="We offer fully recyclable (mono-material) flexible packaging options, as well as paper-based hybrid structures for specific markets. These solutions are easier to enter existing recycling systems compared to traditional multi-layer composites."
            contentCn="CanProvideCompleteRecyclable（SingleMaterialFilm）OfFlexiblePackaging，OrPaperBaseMixSuitableStructure，ComparedTraditionalMulti-LayerCompoundSuitableMoreEasyEnterExistingReturnCollectBodySystem。"
            imageLeft={true}
            index={6}
          />
          
          <div className="grid md:grid-cols-2 gap-4 mt-6">
            <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
              <h4 className="font-semibold text-blue-800">Mono-material films</h4>
              <p className="text-sm text-blue-700">Where local recycling exists<br/>InToolPrepareReturnCollectStripPieceOfGroundAreaUseSingleMaterialFilm</p>
            </div>
            <div className="bg-amber-50 p-4 rounded-lg border border-amber-200">
              <h4 className="font-semibold text-amber-800">Paper-based hybrid options</h4>
              <p className="text-sm text-amber-700">For specific markets<br/>CanNeedleForSpecificMarketProvidePaperBaseMixSuitableStructure</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'kitchen-use',
      title: 'Same Recipe, Lower Footprint',
      icon: <Leaf className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-8">
          <AlternatingSection
            image="/imgs/function/carbon/a_image8_kitchen_scene_co2_comparison_3143190.webp"
            imageAlt="Kitchen Scene CO2 Comparison"
            title="Lower Packaging Footprint"
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
      title: 'For Brands & Retailers',
      icon: <Users className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-8">
          <AlternatingSection
            image="/imgs/function/carbon/a_image9_brands_retailers_benefits_6658677.webp"
            imageAlt="Benefits for Brands and Retailers"
            title="Carbon-Neutral Packaging as a Growth Story"
            titleCn="LetCarbon NeutralAndPackagingFormForIncreaseLong Story"
            content="'Carbon neutral packaging' search volume and consumer interest is rising. Our solutions help brands meet PPWR and other regulatory requirements while creating differentiated green selling points."
            contentCn="'carbon neutral packaging' SearchAndConsumerCloseNoteDegreeIncreaseHigh，HelpBrandMeet PPWR EtcSuperviseTubeNeedDemand，AndFormFormDifferenceizationOfGreenColorSellPoint。"
            imageLeft={true}
            index={8}
          />
          
          <div className="grid md:grid-cols-2 gap-6 mt-6">
            <div className="bg-white border border-neutral-200 p-5 rounded-lg">
              <h4 className="font-bold text-neutral-900 mb-3">For Brands</h4>
              <ul className="space-y-2 text-sm text-neutral-700">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Show carbon-neutral logo on pack<br/><span className="text-neutral-500">InPackagingUpDisplayCarbon NeutralAndIdentification</span></span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Support ESG & PPWR compliance<br/><span className="text-neutral-500">Support ESG AndNotComePackagingRegulationsSuitableSpecification</span></span>
                </li>
              </ul>
            </div>
            <div className="bg-white border border-neutral-200 p-5 rounded-lg">
              <h4 className="font-bold text-neutral-900 mb-3">For Retailers</h4>
              <ul className="space-y-2 text-sm text-neutral-700">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Easy to communicate on-shelf<br/><span className="text-neutral-500">ShelfUpEasyAtTransferReachEco-FriendlySellPoint</span></span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Appeals to eco-conscious consumers<br/><span className="text-neutral-500">AbsorbLeadCloseNoteEnvironmentOfConsumer</span></span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'design-system',
      title: 'Design Your Carbon-Neutral System',
      icon: <Package className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-8">
          <AlternatingSection
            image="/imgs/function/carbon/a_image10_design_your_system_closing_2038825.webp"
            imageAlt="Design Your Carbon-Neutral System"
            title="Design Your Carbon-Neutral Pouch System"
            titleCn="And Achieve Pack TogetherDesignYouOfCarbon NeutralAndPackagingSystem"
            content="Three simple steps: 1) Choose your material route (PE, PCR, bio-based, paper), 2) Define your CO₂ reduction target, 3) Combine structure + offsets to reach carbon neutrality."
            contentCn="Three Simple Steps：1) ChooseYouOfMaterialPath，2) DefineYouOfReduceCarbonTarget，3) Through Structural Design + Carbon OffsetAchieveCarbon NeutralAnd。"
            imageLeft={false}
            index={9}
          />
          
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-lg border border-green-200">
            <h4 className="font-bold text-neutral-900 mb-4">3 Steps to Carbon Neutrality</h4>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-primary-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">1</div>
                <div>
                  <p className="font-medium text-neutral-800">Choose material route</p>
                  <p className="text-xs text-neutral-600">ChooseYouOfMaterialPath (PE, PCR, bio-based, paper)</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-primary-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">2</div>
                <div>
                  <p className="font-medium text-neutral-800">Define CO₂ target</p>
                  <p className="text-xs text-neutral-600">DefineYouOfReduceCarbonTarget</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-primary-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">3</div>
                <div>
                  <p className="font-medium text-neutral-800">Combine for neutrality</p>
                  <p className="text-xs text-neutral-600">Through Structural Design + Carbon OffsetAchieveCarbon NeutralAnd</p>
                </div>
              </div>
            </div>
            <p className="text-sm text-neutral-600 mt-4 text-center">From compostable to recyclable to carbon-neutral – one partner for all<br/>FromCanCompostableToRecyclableToCarbon NeutralAnd，OneUnitPartnerDone</p>
          </div>
        </div>
      )
    },
    {
      id: 'trust-eeat',
      title: 'Why Trust Achieve Pack?',
      icon: <Award className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-8">
          {/* E-E-A-T Trust Signals */}
          <div className="bg-gradient-to-r from-primary-50 to-green-50 p-6 rounded-xl border border-primary-200">
            <h3 className="text-xl font-bold text-neutral-900 mb-4">Sustainability Experts Since 2011</h3>
            <p className="text-neutral-700 mb-4">
              Achieve Pack is a certified 1% for the Planet member through Stripe Climate, demonstrating our commitment to climate action. We've helped over 500 brands achieve their sustainability goals with certified low-carbon and carbon-neutral packaging solutions.
            </p>
            <p className="text-neutral-600 text-sm">
              Achieve Pack IsThroughCertificationOf Stripe Climate "1% for the Planet" FormStaff，AlreadyHelpUltraThrough 500 UnitBrandAchieveCanContinuousDevelopmentTarget。
            </p>
          </div>
          
          {/* Trust Badges Grid */}
          <div className="grid md:grid-cols-4 gap-4">
            <div className="bg-white border border-neutral-200 p-4 rounded-lg text-center">
              <FileCheck className="h-8 w-8 text-green-600 mx-auto mb-2" />
              <h4 className="font-semibold text-neutral-800">Gold Standard</h4>
              <p className="text-xs text-neutral-500">Certified carbon offsets</p>
            </div>
            <div className="bg-white border border-neutral-200 p-4 rounded-lg text-center">
              <Building2 className="h-8 w-8 text-green-600 mx-auto mb-2" />
              <h4 className="font-semibold text-neutral-800">LCA Verified</h4>
              <p className="text-xs text-neutral-500">Life-cycle assessment</p>
            </div>
            <div className="bg-white border border-neutral-200 p-4 rounded-lg text-center">
              <Globe className="h-8 w-8 text-green-600 mx-auto mb-2" />
              <h4 className="font-semibold text-neutral-800">500+ Brands</h4>
              <p className="text-xs text-neutral-500">Trusted worldwide</p>
            </div>
            <div className="bg-white border border-neutral-200 p-4 rounded-lg text-center">
              <Users className="h-8 w-8 text-green-600 mx-auto mb-2" />
              <h4 className="font-semibold text-neutral-800">1% for Planet</h4>
              <p className="text-xs text-neutral-500">Stripe Climate member</p>
            </div>
          </div>
          
          {/* Internal Links for SEO */}
          <div className="bg-neutral-50 p-6 rounded-lg">
            <h4 className="font-semibold text-neutral-800 mb-3">Explore Related Solutions</h4>
            <div className="grid md:grid-cols-3 gap-3">
              <Link to="/materials/compostable" className="flex items-center gap-2 text-primary-600 hover:text-primary-700 text-sm">
                <Leaf className="h-4 w-4" /> Compostable Materials
              </Link>
              <Link to="/materials/pcr" className="flex items-center gap-2 text-primary-600 hover:text-primary-700 text-sm">
                <Recycle className="h-4 w-4" /> PCR Recycled Materials
              </Link>
              <Link to="/materials/bio-pe" className="flex items-center gap-2 text-primary-600 hover:text-primary-700 text-sm">
                <Sparkles className="h-4 w-4" /> Bio-PE Plant-Based
              </Link>
              <Link to="/function/child-resistant-bags" className="flex items-center gap-2 text-primary-600 hover:text-primary-700 text-sm">
                <Shield className="h-4 w-4" /> Child-Resistant Bags
              </Link>
              <Link to="/function/microwave-steam-bags" className="flex items-center gap-2 text-primary-600 hover:text-primary-700 text-sm">
                <Package className="h-4 w-4" /> Microwave Steam Bags
              </Link>
              <Link to="/company/certificates" className="flex items-center gap-2 text-primary-600 hover:text-primary-700 text-sm">
                <Award className="h-4 w-4" /> Our Certifications
              </Link>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'cta',
      title: 'Ready to Get Started?',
      icon: <Leaf className="h-5 w-5 text-white" />,
      content: (
        <div className="bg-gradient-to-br from-green-500 to-emerald-600 text-white p-8 rounded-xl">
          <h3 className="text-2xl font-bold mb-6 text-center">Choose How You'd Like to Connect</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white/10 backdrop-blur p-6 rounded-lg text-center">
              <Calendar className="h-8 w-8 mx-auto mb-3" />
              <h4 className="font-semibold mb-2">Book a Call</h4>
              <p className="text-sm text-white/80 mb-4">30-min free consultation</p>
              <button onClick={openCalendly} className="w-full bg-white text-green-600 px-4 py-2 rounded-lg font-semibold hover:bg-green-50 transition cursor-pointer">
                Schedule Now
              </button>
            </div>
            <div className="bg-white/10 backdrop-blur p-6 rounded-lg text-center">
              <Mail className="h-8 w-8 mx-auto mb-3" />
              <h4 className="font-semibold mb-2">Email Quote</h4>
              <p className="text-sm text-white/80 mb-4">Get response within 24hrs</p>
              <a href="mailto:ryan@achievepack.com?subject=Carbon-Neutral Bags Quote" className="block w-full bg-white text-green-600 px-4 py-2 rounded-lg font-semibold hover:bg-green-50 transition">
                Send Email
              </a>
            </div>
          </div>
        </div>
      )
    }
  ]

  const faqs = [
    {
      question: "What is carbon-neutral packaging?",
      answer: "Carbon-neutral packaging means the total carbon emissions from producing the packaging are balanced to net zero. This is achieved through a combination of using low-carbon materials (like PCR PE, bio-based films), efficient production processes, and purchasing certified carbon offsets to compensate for any remaining emissions."
    },
    {
      question: "How do you calculate the carbon footprint of packaging?",
      answer: "We use life-cycle assessment (LCA) methodology to calculate carbon footprint, considering raw material extraction, manufacturing, transportation, and end-of-life. This data helps us identify reduction opportunities and determine the amount of carbon offsets needed to achieve neutrality."
    },
    {
      question: "What carbon offset projects do you support?",
      answer: "We work with certified carbon offset projects that meet international standards such as Gold Standard or Verified Carbon Standard (VCS). These typically include reforestation, renewable energy, and community-based sustainability projects. We're also members of Stripe Climate's 1% for the Planet initiative."
    },
    {
      question: "Can I display a carbon-neutral logo on my packaging?",
      answer: "Yes! When you choose our carbon-neutral packaging solutions, you can display carbon-neutral certification marks on your products, helping communicate your sustainability commitment to consumers and supporting your ESG reporting."
    },
    {
      question: "Is carbon-neutral packaging more expensive?",
      answer: "There is typically a modest premium compared to conventional packaging, primarily due to the cost of carbon offsets and potentially higher-cost sustainable materials. However, many brands find the marketing value and regulatory compliance benefits outweigh the additional cost."
    },
    {
      question: "What is the minimum order quantity for carbon-neutral bags?",
      answer: "Our minimum order quantity starts at 1,000 pieces for stock structures. For custom printed carbon-neutral bags, MOQ typically starts at 5,000 pieces. Contact us for exact quotes based on your requirements."
    },
    {
      question: "How does carbon-neutral packaging help with ESG reporting?",
      answer: "Carbon-neutral packaging provides quantifiable data for Scope 3 emissions reporting. We provide documentation of carbon footprint calculations and offset certificates that can be included in your sustainability reports."
    },
    {
      question: "What materials are used in carbon-neutral bags?",
      answer: "We offer multiple options: traditional PE with carbon offsets, PCR (post-consumer recycled) PE, bio-based Green PE from sugarcane, and recyclable mono-material structures. Each can be combined to achieve carbon neutrality. Visit our materials pages for detailed specifications."
    }
  ]

  // Enhanced related links for internal linking SEO
  const relatedLinks = [
    // Material options
    { title: "Recyclable Mono-PE", url: "/materials/recyclable-mono-pe", description: "Fully recyclable single-material structure" },
    { title: "Bio-PE Materials", url: "/materials/bio-pe", description: "Plant-based polyethylene options" },
    { title: "PCR Recycled", url: "/materials/pcr", description: "Post-consumer recycled content" },
    { title: "Compostable Pouches", url: "/materials/compostable", description: "100% plastic-free materials" },
    // Packaging shapes
    { title: "Stand Up Pouches", url: "/packaging/stand-up-pouches", description: "Self-standing packaging" },
    { title: "Flat Bottom Bags", url: "/packaging/flat-bottom-bags", description: "Premium box-bottom style" },
    // Features
    { title: "Barrier Options", url: "/features/barrier-options", description: "Choose protection level" },
    { title: "Surface Finishes", url: "/features/surface-finish", description: "Matte, gloss, soft-touch" },
    // Related function pages
    { title: "Child-Resistant Bags", url: "/function/child-resistant-bags", description: "Safety-certified pouches" },
    { title: "Microwave Steam Bags", url: "/function/microwave-steam-bags", description: "Food-safe heating pouches" },
    { title: "Spout Pouches", url: "/function/spout-pouches-juice", description: "Liquid packaging solutions" },
    // Industry applications
    { title: "Coffee Packaging", url: "/industry/coffee-tea", description: "Premium coffee bags" },
    { title: "Pet Food Bags", url: "/industry/pet-food", description: "Sustainable pet packaging" },
    // Knowledge & Support
    { title: "Certificates", url: "/company/certificates", description: "View our certifications" },
    { title: "About Us", url: "/company/about", description: "Our sustainability story" }
  ]

  return (
    <>
      <SEOPageLayout
        title="Carbon-Neutral Bags | Eco-Friendly Packaging"
        description="Carbon-neutral packaging bags with low-carbon materials, efficient production, and certified carbon offsets. Help your brand reduce CO₂ emissions up to 20% with quantifiable sustainability data for ESG reporting."
        keywords={['carbon neutral packaging', 'carbon neutral bags', 'low carbon packaging', 'sustainable packaging', 'PCR PE bags', 'bio-based packaging', 'carbon offset packaging', 'eco-friendly bags', 'ESG packaging', 'net zero packaging', 'climate positive packaging', 'green PE bags', 'recyclable carbon neutral', 'sustainable pouch packaging']}
        canonicalUrl="https://achievepack.com/function/carbon-neutral-bags"
        heroTitle="Carbon-Neutral Cooking Bags"
        heroSubtitle="Lower CO₂, same convenience — Reduce Carbon Emissions · Retain Daily Convenience"
        heroImage="/imgs/function/carbon/a_hero_card_1_carbon_neutral_materials_3157781.webp"
        heroImageAlt="Achieve Pack Carbon-Neutral Bags"
        introSummary="Carbon-neutral packaging solutions designed for brands seeking quantifiable sustainability. From material selection to carbon offsets, achieve net-zero packaging footprint."
        sections={sections}
        faqs={faqs}
        relatedLinks={relatedLinks}
        ctaTitle="Ready to Go Carbon-Neutral?"
        ctaDescription="Get custom carbon-neutral packaging for your brand. Quantifiable CO₂ reduction for ESG reporting."
        ctaButtonText="Get a Quote"
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
