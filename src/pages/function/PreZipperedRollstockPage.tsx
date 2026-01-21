import React, { useState } from 'react'
import { Package, Zap, DollarSign, Settings, Gauge, Layers, ShoppingBag, Award, Users, Globe, FileCheck, Building2, Sparkles, Leaf, Shield, CheckCircle, Calendar, Mail, X, ChevronLeft, ChevronRight } from 'lucide-react'
import SEOPageLayout from '../../components/SEOPageLayout'
import { Link } from 'react-router-dom'
import { useCalendly } from '../../contexts/CalendlyContext'

// Gallery images from /imgs/function/roll/
const rollstockGallery = [
  { src: '/imgs/function/roll/hero.webp', title: 'Achieve Pack® Pre-Zippered Rollstock', desc: 'Achieve Pack® Pre-Zipper Roll Film' },
  { src: '/imgs/function/roll/a_kv2_how_it_works_7440796.webp', title: 'How Pre-Zippered Rollstock Works', desc: 'Pre-Zipper Roll FilmIfWhatWork' },
  { src: '/imgs/function/roll/a_achievepack_zipper_technology_4352447.webp', title: 'Zipper Technology Detail', desc: 'ZipperTechnologyDetails' },
  { src: '/imgs/function/roll/a_kv4_no_equipment_5802224.webp', title: 'No New Equipment Required', desc: 'NoRequireNewIncreaseEquipment' },
  { src: '/imgs/function/roll/a_achievepack_cost_optimization_2620198.webp', title: 'Cost & Material Savings', desc: 'CostAndMaterialExcellentTrend' },
  { src: '/imgs/function/roll/a_kv6_efficiency_9836360.webp', title: 'Production Efficiency', desc: 'ProduceLineEfficiency' },
  { src: '/imgs/function/roll/a_achievepack_versatility_9776242.webp', title: 'Flexible Applications', desc: 'MultipleApplicationFormStyle' },
  { src: '/imgs/function/roll/a_achievepack_partnership_cta_8348442.webp', title: 'Design Your System with Achieve Pack', desc: 'And Achieve Pack TogetherDesign' },
]

const PreZipperedRollstockPage: React.FC = () => {
  const { openCalendly } = useCalendly()
  const [galleryEnlarged, setGalleryEnlarged] = useState<{ src: string; index: number } | null>(null)
  
  const navigateGallery = (direction: 'prev' | 'next') => {
    if (!galleryEnlarged) return
    let newIndex = direction === 'prev' ? galleryEnlarged.index - 1 : galleryEnlarged.index + 1
    if (newIndex < 0) newIndex = rollstockGallery.length - 1
    if (newIndex >= rollstockGallery.length) newIndex = 0
    setGalleryEnlarged({ src: rollstockGallery[newIndex].src, index: newIndex })
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
      title: 'Achieve Pack® Pre-Zippered Rollstock Overview',
      icon: <Package className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-8">
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-lg border border-green-200">
            <p className="text-lg font-medium text-neutral-900 mb-4">
              <strong>Convert your rollstock into resealable pouches without new equipment</strong> — Achieve Pack® pre-zippered rollstock allows brands to upgrade standard packaging to resealable pouches on existing VFFS/HFFS lines.
            </p>
            <p className="text-neutral-700">
              NoRequireMoreChangeEquipment，ThenCanHandleRollFilmRiseGradeForCanRepeatedSealedPackaging — Achieve Pack® Pre-Zipper Roll FilmLetBrandCanWithInExisting VFFS/HFFS EquipmentUpProductionCanRepeatedSealOfBagChild
            </p>
          </div>
          
          <AlternatingSection
            image="/imgs/function/roll/hero.webp"
            imageAlt="Achieve Pack Pre-Zippered Rollstock Hero"
            title="Achieve Pack® Pre-Zippered Rollstock"
            titleCn="Achieve Pack® Pre-Zipper Roll Film"
            content="Our pre-zippered rollstock features zippers applied transversely to the film roll before it reaches your production line. Run it on existing VFFS or HFFS equipment with minimal adjustments to produce cut-to-open, recloseable pouches from standard rollstock."
            contentCn="OurPre-Zipper Roll FilmInEnterProductionLineOfBefore，AlreadyThroughWillZipperHorizontalTowardPre-WeldConnectInOn Roll Film。OnlyNeeds Adjustment，ImmediatelyCanInExisting VFFS Or HFFS EquipmentUpShipLine，UseRegularRollFilmThenCanDoOutCutOpenCanRepeatedSealOfPackagingBag。"
            imageLeft={true}
            index={0}
          />
        </div>
      )
    },
    {
      id: 'how-it-works',
      title: 'How Pre-Zippered Rollstock Works',
      icon: <Settings className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-8">
          <AlternatingSection
            image="/imgs/function/roll/a_kv2_how_it_works_7440796.webp"
            imageAlt="How Pre-Zippered Rollstock Works"
            title="Pre-Applied Zipper Technology"
            titleCn="Achieve Pack® Pre-Zipper Roll FilmIfWhatWork"
            content="The zipper is applied transversely to the film roll before it reaches your line. Run it on existing VFFS or HFFS equipment with minimal adjustments. Produce cut-to-open, recloseable pouches from standard rollstock without investing in new inline zipper systems."
            contentCn="ZipperInIntoLineBeforeHorizontalTowardPre-WeldConnectInOn Roll Film。OnlyNeeds Adjustment，ImmediatelyCanInExisting VFFS Or HFFS EquipmentUpShipLine。UseRegularRollFilmThenCanDoOutCutOpenCanRepeatedSealOfPackagingBag，NoRequireInvestmentNewOfInLineZipperSystem。"
            imageLeft={false}
            index={1}
          />
          
          <div className="grid md:grid-cols-3 gap-4 mt-6">
            <div className="bg-green-50 p-4 rounded-lg border border-green-200">
              <Zap className="h-5 w-5 text-green-600 mb-2" />
              <h4 className="font-semibold text-green-800">Pre-applied zipper</h4>
              <p className="text-sm text-green-700">ZipperPre-WeldConnectInOn Roll Film</p>
            </div>
            <div className="bg-green-50 p-4 rounded-lg border border-green-200">
              <Settings className="h-5 w-5 text-green-600 mb-2" />
              <h4 className="font-semibold text-green-800">Minimal adjustments</h4>
              <p className="text-sm text-green-700">EquipmentOnlyNeeds Adjustment</p>
            </div>
            <div className="bg-green-50 p-4 rounded-lg border border-green-200">
              <Package className="h-5 w-5 text-green-600 mb-2" />
              <h4 className="font-semibold text-green-800">Recloseable pouches</h4>
              <p className="text-sm text-green-700">CanRepeatedSealPackaging</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'zipper-detail',
      title: 'Pre-Applied Zipper Zone Detail',
      icon: <Layers className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-8">
          <AlternatingSection
            image="/imgs/function/roll/a_achievepack_zipper_technology_4352447.webp"
            imageAlt="Pre-Applied Zipper Zone Detail"
            title="Pre-Applied Zipper on Rollstock"
            titleCn="On Roll FilmPreMadeZipper"
            content="Precise placement and sealing of zippers before forming the pouch. The zipper profile and seal are engineered for reliable reclosure performance. Custom zipper length and position available to match your product requirements."
            contentCn="InMadeBagBeforeThenCompleteFormZipperOfFineExactFixedPositionAndHeat Seal。ZipperCutFaceAndSealSuitableLineThroughThroughWorkerProcessDesign，EnsureCanReliableOfRepeatedSealPropertyCan。CanCustomZipperLengthAndPositionSet，MatchWithYouOfProductRequireDemand。"
            imageLeft={true}
            index={2}
          />
        </div>
      )
    },
    {
      id: 'no-equipment',
      title: 'No New Equipment Required',
      icon: <Settings className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-8">
          <AlternatingSection
            image="/imgs/function/roll/a_kv4_no_equipment_5802224.webp"
            imageAlt="No New Equipment Required"
            title="Run on Your Existing Lines"
            titleCn="CompatibleCapacityExistingProductionLine"
            content="Use with conventional VFFS and HFFS equipment. No major capital investment needed—only minor clearance adjustments to the forming tube. Your existing packaging lines become capable of producing premium resealable pouches instantly."
            contentCn="CanMatchWithOftenSpecification VFFS And HFFS EquipmentUse。NoRequireLargeExtraNewIncreaseEquipmentInvestment，OnlyRequireForFormTypeTubeIntoLineSmallWidthGap AdjustWhole。LetYouExistingOfPackagingLineInstantToolPrepareProductionPremiumCanRepeatedSealBagOfCanPower。"
            imageLeft={false}
            index={3}
          />
          
          <div className="bg-amber-50 p-6 rounded-lg border border-amber-200">
            <h4 className="font-semibold text-amber-800 mb-3">✓ Equipment Compatibility</h4>
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <div>
                <p className="text-amber-700"><strong>VFFS (Vertical Form Fill Seal)</strong></p>
                <p className="text-amber-600">HangStraightFormTypeFillSealMachine</p>
              </div>
              <div>
                <p className="text-amber-700"><strong>HFFS (Horizontal Form Fill Seal)</strong></p>
                <p className="text-amber-600">WaterFlatFormTypeFillSealMachine</p>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'cost-savings',
      title: 'Cost & Material Savings',
      icon: <DollarSign className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-8">
          <AlternatingSection
            image="/imgs/function/roll/a_achievepack_cost_optimization_2620198.webp"
            imageAlt="Cost and Material Savings"
            title="Reduce Cost, Save Material"
            titleCn="SaveCost，ReduceLowMaterialUseVolume"
            content="Custom zipper length and placement help cut waste and lower cost per pack. Compared to traditional in-line zipper systems, pre-zippered rollstock can save up to 25% on zipper material by only applying zippers where needed, not across the entire width."
            contentCn="CanCustomZipperLengthAndPositionSet，ReduceWaveFee，ReduceLowSinglePackCost。AndTraditionalInLineZipperSystemCompared，Pre-Zipper Roll FilmThroughOnlyInRequireNeedOfAreaWithSetZipper，CanSaveHighReach 25% OfZipperMaterialUseVolume。"
            imageLeft={true}
            index={4}
          />
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-green-50 p-5 rounded-lg border border-green-200">
              <h4 className="font-semibold text-green-800 mb-2">Up to 25% Material Savings</h4>
              <p className="text-sm text-green-700">Custom zipper length reduces waste</p>
              <p className="text-xs text-green-600 mt-1">CustomZipperLengthReduceWaveFee</p>
            </div>
            <div className="bg-green-50 p-5 rounded-lg border border-green-200">
              <h4 className="font-semibold text-green-800 mb-2">Lower Total Cost</h4>
              <p className="text-sm text-green-700">No inline zipper equipment investment</p>
              <p className="text-xs text-green-600 mt-1">NoRequireInvestmentInLineZipperEquipment</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'efficiency',
      title: 'Production Efficiency & Speed',
      icon: <Gauge className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-8">
          <AlternatingSection
            image="/imgs/function/roll/a_kv6_efficiency_9836360.webp"
            imageAlt="Production Efficiency and Speed"
            title="Maintain Speed, Boost Efficiency"
            titleCn="MaintainSpeedDegree，RaiseEfficientRate"
            content="Run at speeds comparable to non-zippered films. Reduce set-up time compared to in-line zipper systems. Improve overall line throughput with pre-zippered rollstock that requires minimal adjustments."
            contentCn="ShipLineSpeedDegreeCanAndRegularNoZipperRollFilmRelatedWhen。ComparedInLineZipperSystemReduceAdjustMachineTimeBetween。Pre-Zipper Roll FilmOnlyNeeds Adjustment，ImproveWholeBodyProduceLineThroughputVolume。"
            imageLeft={false}
            index={5}
          />
          
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-blue-50 p-4 rounded-lg border border-blue-200 text-center">
              <Gauge className="h-6 w-6 text-blue-600 mx-auto mb-2" />
              <h4 className="font-semibold text-blue-800 text-sm">High Speed</h4>
              <p className="text-xs text-blue-600">ShipLineSpeedDegreeRelatedWhen</p>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg border border-blue-200 text-center">
              <Zap className="h-6 w-6 text-blue-600 mx-auto mb-2" />
              <h4 className="font-semibold text-blue-800 text-sm">Fast Setup</h4>
              <p className="text-xs text-blue-600">FastChangeType</p>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg border border-blue-200 text-center">
              <Settings className="h-6 w-6 text-blue-600 mx-auto mb-2" />
              <h4 className="font-semibold text-blue-800 text-sm">15%+ Faster</h4>
              <p className="text-xs text-blue-600">ProductionTimeBetweenShorten</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'applications',
      title: 'Flexible Applications',
      icon: <ShoppingBag className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-8">
          <AlternatingSection
            image="/imgs/function/roll/a_achievepack_versatility_9776242.webp"
            imageAlt="Flexible Applications"
            title="From Pillow Packs to Stand-Up Pouches"
            titleCn="FromPillowFormBagToStand-Up Pouches"
            content="Ideal for snacks, frozen foods, pet food, powders and more. The same production line can run both regular non-zippered rollstock and Achieve Pack® pre-zippered rollstock, providing flexibility for multiple SKUs and price points."
            contentCn="Suitable forCasualSnack、FrozenFood、PetGrainAndPowderEtcMultipleProductCategory。SameOneStripProductionLineBothCanRunRegularNoZipperRollFilm，AlsoCanRun Achieve Pack® Pre-Zipper Roll Film，ForBrandProvideMultiple SKU、MultiplePricePositionSectionOfShipLineFlexibleProperty。"
            imageLeft={true}
            index={6}
          />
          
          <div className="grid md:grid-cols-4 gap-4">
            <div className="bg-neutral-50 p-4 rounded-lg border border-neutral-200 text-center">
              <span className="text-2xl">🍿</span>
              <h4 className="font-semibold text-neutral-800 text-sm mt-2">Snacks</h4>
              <p className="text-xs text-neutral-500">CasualSnack</p>
            </div>
            <div className="bg-neutral-50 p-4 rounded-lg border border-neutral-200 text-center">
              <span className="text-2xl">❄️</span>
              <h4 className="font-semibold text-neutral-800 text-sm mt-2">Frozen Foods</h4>
              <p className="text-xs text-neutral-500">FrozenFood</p>
            </div>
            <div className="bg-neutral-50 p-4 rounded-lg border border-neutral-200 text-center">
              <span className="text-2xl">🐕</span>
              <h4 className="font-semibold text-neutral-800 text-sm mt-2">Pet Food</h4>
              <p className="text-xs text-neutral-500">PetGrain</p>
            </div>
            <div className="bg-neutral-50 p-4 rounded-lg border border-neutral-200 text-center">
              <span className="text-2xl">🥤</span>
              <h4 className="font-semibold text-neutral-800 text-sm mt-2">Powders</h4>
              <p className="text-xs text-neutral-500">PowderCategory</p>
            </div>
          </div>
          
          <div className="bg-green-50 p-6 rounded-lg border border-green-200">
            <h4 className="font-semibold text-green-800 mb-3">Supported Pouch Styles</h4>
            <div className="grid md:grid-cols-3 gap-4 text-sm">
              <div className="flex items-center gap-2">
                <Package className="h-4 w-4 text-green-600" />
                <span className="text-green-700">Pillow Bags PillowFormBag</span>
              </div>
              <div className="flex items-center gap-2">
                <Package className="h-4 w-4 text-green-600" />
                <span className="text-green-700">Stand-Up Pouches Stand-Up Pouches</span>
              </div>
              <div className="flex items-center gap-2">
                <Package className="h-4 w-4 text-green-600" />
                <span className="text-green-700">Flat Bottom Bags Flat Bottom Bags</span>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'consumer-experience',
      title: 'Consumer Convenience',
      icon: <CheckCircle className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-primary-50 to-green-50 p-6 rounded-lg border border-primary-200">
            <h3 className="text-xl font-bold text-neutral-900 mb-4">Cut to Open, Zip to Reclose</h3>
            <p className="text-neutral-700 mb-4">
              Add easy reclose convenience to your existing packaging format. Consumers cut open the top, then use the zipper to reseal—keeping snacks crisp, frozen foods fresh, and powders dry.
            </p>
            <p className="text-neutral-600 text-sm">
              LetExistingPackagingLightLooseRiseGradeForCanRepeatedSealedStructure。ConsumerCutOpenBagOpeningAfter，CanUseZipperReverseCompoundSealSuitable，MaintainSnackCrispy、FrozenFoodFresh、PowderDry。
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-white p-4 rounded-lg border border-neutral-200 shadow-sm">
              <h4 className="font-semibold text-neutral-800">Extended Freshness</h4>
              <p className="text-sm text-neutral-600">Delay moisture and oxygen exposure</p>
              <p className="text-xs text-neutral-500 mt-1">ExtendSlowWaterDivideAndOxygenContact</p>
            </div>
            <div className="bg-white p-4 rounded-lg border border-neutral-200 shadow-sm">
              <h4 className="font-semibold text-neutral-800">Better Experience</h4>
              <p className="text-sm text-neutral-600">Easy reclose for on-the-go</p>
              <p className="text-xs text-neutral-500 mt-1">FollowTimeSeal，SidePortableWith</p>
            </div>
            <div className="bg-white p-4 rounded-lg border border-neutral-200 shadow-sm">
              <h4 className="font-semibold text-neutral-800">Higher Repurchase</h4>
              <p className="text-sm text-neutral-600">Enhanced user satisfaction</p>
              <p className="text-xs text-neutral-500 mt-1">IncreaseStrongReturnPurchase Rate</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'design-system',
      title: 'Design Your System with Achieve Pack',
      icon: <Sparkles className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-8">
          <AlternatingSection
            image="/imgs/function/roll/a_achievepack_partnership_cta_8348442.webp"
            imageAlt="Design Your System with Achieve Pack"
            title="Design Your Pre-Zippered Rollstock System"
            titleCn="And Achieve Pack TogetherDesignYouOfPre-Zipper Roll FilmSystem"
            content="From snacks to frozen food, one pre-zippered rollstock for all your resealable needs. Our team helps you choose the right film structure, barrier level, zipper style, and printing options for your specific application."
            contentCn="FromSnackToFrozenFood，OneTypePre-Zipper Roll FilmCoverFullPartCanRepeatedSealRequireDemand。OurTeamHelpYouChooseSuitableSuitableSpecificApplicationOfFilmMaterialStructure、Barrier Level、ZipperCategoryTypeAndPrintingSolution。"
            imageLeft={false}
            index={7}
          />
          
          <div className="bg-neutral-50 p-6 rounded-lg">
            <h4 className="font-semibold text-neutral-800 mb-4">3 Steps to Your Custom Solution</h4>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-white p-4 rounded-lg border border-neutral-200">
                <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center text-primary-600 font-bold mb-3">1</div>
                <h5 className="font-medium text-neutral-800">Choose Film Structure</h5>
                <p className="text-sm text-neutral-600">Select barrier level and width</p>
                <p className="text-xs text-neutral-500 mt-1">ChooseFilmMaterialStructure、Barrier LevelAndWidthWide</p>
              </div>
              <div className="bg-white p-4 rounded-lg border border-neutral-200">
                <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center text-primary-600 font-bold mb-3">2</div>
                <h5 className="font-medium text-neutral-800">Define Zipper Style</h5>
                <p className="text-sm text-neutral-600">Set length and position</p>
                <p className="text-xs text-neutral-500 mt-1">DefineZipperCategoryType、LengthAndPositionSet</p>
              </div>
              <div className="bg-white p-4 rounded-lg border border-neutral-200">
                <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center text-primary-600 font-bold mb-3">3</div>
                <h5 className="font-medium text-neutral-800">Add Printing</h5>
                <p className="text-sm text-neutral-600">Run on your existing lines</p>
                <p className="text-xs text-neutral-500 mt-1">AddEnter Achieve Pack Printing，InExistingProduceLineUpDirectShipLine</p>
              </div>
            </div>
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
            <h3 className="text-xl font-bold text-neutral-900 mb-4">Industry-Leading Expertise in Flexible Packaging</h3>
            <p className="text-neutral-700 mb-4">
              With over 13 years of experience manufacturing flexible packaging, Achieve Pack has supplied pre-zippered rollstock and resealable pouches to snack brands, frozen food manufacturers, and pet food companies across North America, Europe, and Asia-Pacific.
            </p>
            <p className="text-neutral-600 text-sm">
              With Over 13 Years of FlexiblePackagingMadeMakeThroughTest，Achieve Pack Already Served North America、EuropeAndAsia PacificOfZeroFoodBrand、FrozenFoodMadeMakeBusinessAndPetGrainCompanyProvidePre-Zipper Roll FilmAndCanRepeatedSealBag。
            </p>
          </div>
          
          {/* Trust Badges Grid */}
          <div className="grid md:grid-cols-4 gap-4">
            <div className="bg-white border border-neutral-200 p-4 rounded-lg text-center">
              <FileCheck className="h-8 w-8 text-green-600 mx-auto mb-2" />
              <h4 className="font-semibold text-neutral-800">FDA Compliant</h4>
              <p className="text-xs text-neutral-500">Food contact approved</p>
            </div>
            <div className="bg-white border border-neutral-200 p-4 rounded-lg text-center">
              <Building2 className="h-8 w-8 text-green-600 mx-auto mb-2" />
              <h4 className="font-semibold text-neutral-800">BRC Certified</h4>
              <p className="text-xs text-neutral-500">Food safety standard</p>
            </div>
            <div className="bg-white border border-neutral-200 p-4 rounded-lg text-center">
              <Globe className="h-8 w-8 text-green-600 mx-auto mb-2" />
              <h4 className="font-semibold text-neutral-800">500+ Brands</h4>
              <p className="text-xs text-neutral-500">Trusted worldwide</p>
            </div>
            <div className="bg-white border border-neutral-200 p-4 rounded-lg text-center">
              <Users className="h-8 w-8 text-green-600 mx-auto mb-2" />
              <h4 className="font-semibold text-neutral-800">13+ Years</h4>
              <p className="text-xs text-neutral-500">Industry experience</p>
            </div>
          </div>
          
          {/* Internal Links for SEO */}
          <div className="bg-neutral-50 p-6 rounded-lg">
            <h4 className="font-semibold text-neutral-800 mb-3">Explore Related Solutions</h4>
            <div className="grid md:grid-cols-3 gap-3">
              <Link to="/materials/compostable" className="flex items-center gap-2 text-primary-600 hover:text-primary-700 text-sm">
                <Leaf className="h-4 w-4" /> Compostable Materials
              </Link>
              <Link to="/features/barrier-options" className="flex items-center gap-2 text-primary-600 hover:text-primary-700 text-sm">
                <Shield className="h-4 w-4" /> Barrier Options
              </Link>
              <Link to="/packaging/stand-up-pouches" className="flex items-center gap-2 text-primary-600 hover:text-primary-700 text-sm">
                <Package className="h-4 w-4" /> Stand Up Pouches
              </Link>
              <Link to="/company/certificates" className="flex items-center gap-2 text-primary-600 hover:text-primary-700 text-sm">
                <Award className="h-4 w-4" /> Our Certifications
              </Link>
              <Link to="/features/reclosure-options" className="flex items-center gap-2 text-primary-600 hover:text-primary-700 text-sm">
                <Layers className="h-4 w-4" /> Reclosure Options
              </Link>
              <Link to="/support/faqs" className="flex items-center gap-2 text-primary-600 hover:text-primary-700 text-sm">
                <CheckCircle className="h-4 w-4" /> FAQs
              </Link>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'cta',
      title: 'Ready to Get Started?',
      icon: <Package className="h-5 w-5 text-white" />,
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
              <a href="mailto:ryan@achievepack.com?subject=Pre-Zippered Rollstock Quote" className="block w-full bg-white text-green-600 px-4 py-2 rounded-lg font-semibold hover:bg-green-50 transition">
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
      question: "What is pre-zippered rollstock?",
      answer: "Pre-zippered rollstock is flexible packaging film that comes with zippers already applied transversely before reaching your production line. This allows you to produce resealable pouches on existing VFFS/HFFS equipment without investing in inline zipper application systems."
    },
    {
      question: "What equipment is compatible with pre-zippered rollstock?",
      answer: "Achieve Pack® pre-zippered rollstock is compatible with conventional VFFS (Vertical Form Fill Seal) and HFFS (Horizontal Form Fill Seal) equipment. Only minor clearance adjustments to the forming tube are typically required—no major capital investment needed."
    },
    {
      question: "How much cost savings can I expect?",
      answer: "Pre-zippered rollstock can save up to 25% on zipper material by only applying zippers where needed rather than across the entire film width. You also save on equipment investment and reduce setup time compared to inline zipper systems, potentially cutting overall production time by 15% or more."
    },
    {
      question: "What pouch styles can I produce with pre-zippered rollstock?",
      answer: "You can produce pillow bags, stand-up pouches, and flat bottom bags with pre-zippered rollstock. Zipper position and length are customizable, and options include Bag-Top, E-Z Tab, and other opening styles."
    },
    {
      question: "What products are best suited for pre-zippered packaging?",
      answer: "Pre-zippered rollstock is ideal for snacks, frozen foods, pet food, powders, and any product that benefits from resealable packaging. The reclosure feature helps maintain freshness after opening—keeping snacks crisp, frozen foods defrost-free, and powders dry."
    },
    {
      question: "Can I run both zippered and non-zippered films on the same line?",
      answer: "Yes! The same production line can run both regular non-zippered rollstock and Achieve Pack® pre-zippered rollstock, giving you flexibility to offer multiple SKUs at different price points without equipment changes."
    },
    {
      question: "What barrier options are available?",
      answer: "We offer barrier and non-barrier options including high-barrier metalized films, clear films, powder-proof structures, and peel-seal configurations. Our team can recommend the best structure for your specific product requirements."
    },
    {
      question: "What is the minimum order quantity for pre-zippered rollstock?",
      answer: "Minimum order quantity typically starts at 5,000-10,000 meters depending on film specifications. Contact us for exact quotes based on your requirements including film width, barrier type, and printing needs."
    }
  ]

  // Enhanced related links for internal linking SEO
  const relatedLinks = [
    // Material options
    { title: "Compostable Pouches", url: "/materials/compostable", description: "100% plastic-free eco-friendly material options" },
    { title: "Recyclable Mono-PE", url: "/materials/recyclable-mono-pe", description: "Fully recyclable single-material structure" },
    { title: "PCR Materials", url: "/materials/pcr", description: "Post-consumer recycled content options" },
    // Packaging shapes
    { title: "Stand Up Pouches", url: "/packaging/stand-up-pouches", description: "Versatile self-standing packaging" },
    { title: "Flat Bottom Bags", url: "/packaging/flat-bottom-bags", description: "Premium box-bottom pouch style" },
    { title: "Pillow Bags", url: "/packaging/pillow-bags", description: "Classic flow-wrap format" },
    // Features
    { title: "Reclosure Options", url: "/features/reclosure-options", description: "All zipper and seal types available" },
    { title: "Barrier Options", url: "/features/barrier-options", description: "Choose your protection level" },
    { title: "Surface Finishes", url: "/features/surface-finish", description: "Matte, gloss, soft-touch options" },
    // Related function pages
    { title: "Child-Resistant Bags", url: "/function/child-resistant-bags", description: "Certified child-safety packaging" },
    { title: "Carbon Neutral Bags", url: "/function/carbon-neutral-bags", description: "Climate-positive packaging solutions" },
    // Industry applications
    { title: "Snack Packaging", url: "/industry/snacks", description: "Crispy snack pouch solutions" },
    { title: "Pet Food Bags", url: "/industry/pet-food", description: "Durable pet treat packaging" },
    { title: "Frozen Food Packaging", url: "/industry/frozen-food", description: "Freeze-resistant pouch options" },
    // Knowledge & Support
    { title: "Certificates", url: "/company/certificates", description: "View our safety certifications" },
    { title: "FAQs", url: "/support/faqs", description: "Common questions answered" }
  ]

  return (
    <>
      <SEOPageLayout
        title="Pre-Zippered Rollstock | Achieve Pack® Resealable Film"
        description="Achieve Pack® pre-zippered rollstock converts your existing VFFS/HFFS lines into resealable pouch production. No new equipment needed. Save up to 25% on zipper material. Ideal for snacks, frozen foods, pet food."
        keywords={['pre-zippered rollstock', 'resealable film', 'VFFS zipper film', 'HFFS resealable', 'pre-applied zipper', 'recloseable packaging', 'snack packaging', 'frozen food packaging', 'pet food bags', 'zipper rollstock', 'resealable pouches', 'flexible packaging film', 'Pre-Zipper Roll Film', 'CanRepeatedSealPackaging']}
        canonicalUrl="https://achievepack.com/function/pre-zippered-rollstock"
        heroTitle="Achieve Pack® Pre-Zippered Rollstock"
        heroSubtitle="Convert your rollstock into resealable pouches without new equipment / NoRequireMoreChangeEquipment，ThenCanHandleRollFilmRiseGradeForCanRepeatedSealedPackaging"
        heroImage="/imgs/function/roll/hero.webp"
        heroImageAlt="Achieve Pack Pre-Zippered Rollstock"
        introSummary="Achieve Pack® pre-zippered rollstock features zippers applied transversely before your production line. Run on existing VFFS/HFFS equipment with minimal adjustments. Save up to 25% on zipper material and reduce production time by 15%+."
        sections={sections}
        faqs={faqs}
        relatedLinks={relatedLinks}
        ctaTitle="Ready to Order Pre-Zippered Rollstock?"
        ctaDescription="Get Achieve Pack® pre-zippered rollstock for snacks, frozen foods, pet food, and more. Compatible with your existing lines."
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
          <img src={galleryEnlarged.src} alt={rollstockGallery[galleryEnlarged.index]?.title || 'Enlarged view'} className="max-w-full max-h-[80vh] object-contain" onClick={(e) => e.stopPropagation()} />
          <button onClick={(e) => { e.stopPropagation(); navigateGallery('next'); }} className="absolute right-4 text-white hover:text-neutral-300 transition p-2">
            <ChevronRight className="h-10 w-10" />
          </button>
          <div className="absolute bottom-4 left-0 right-0 text-center text-white">
            <p className="font-medium">{rollstockGallery[galleryEnlarged.index]?.title}</p>
            <p className="text-sm text-neutral-300">{rollstockGallery[galleryEnlarged.index]?.desc}</p>
          </div>
        </div>
      )}
    </>
  )
}

export default PreZipperedRollstockPage
