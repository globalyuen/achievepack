import React, { useState } from 'react'
import { Droplets, Recycle, Package, Shield, Users, CheckCircle, Calendar, Mail, X, ChevronLeft, ChevronRight, Zap, Award, Building2, FileCheck, Globe, Sparkles } from 'lucide-react'
import SEOPageLayout from '../../components/SEOPageLayout'
import { Link } from 'react-router-dom'
import { useCalendly } from '../../contexts/CalendlyContext'

// Gallery images from /imgs/function/spout/
const spoutGallery = [
  { src: '/imgs/function/spout/a_hero_kv_juice_pouch_7892714.webp', title: 'Eco-Friendly Spout Pouches for Juice', desc: 'Custom Shapes · Food Grade · Recyclable' },
  { src: '/imgs/function/spout/a_info_food_safe_recyclable_3061288.webp', title: 'Food-Safe & Recyclable', desc: 'Food Grade · Recyclable' },
  { src: '/imgs/function/spout/a_detail_spout_cap_2155787.webp', title: 'Easy-Pour Spout Top', desc: 'EasyPourSpoutDesign' },
  { src: '/imgs/function/spout/a_custom_shape_ergonomic_8007266.webp', title: 'Custom-Shaped Pouches', desc: 'Custom Shaped Bags for Adult Consumers' },
  { src: '/imgs/function/spout/a_barrier_freshness_juice_9675285.webp', title: 'Keep Juice Fresh Longer', desc: 'LetJuiceMaintainMoreLongFresh' },
  { src: '/imgs/function/spout/a_refillable_on_the_go_0614853.webp', title: 'Refill, Reuse, Enjoy Again', desc: 'CanWithRepeatedFilling，AgainEnjoyUse' },
  { src: '/imgs/function/spout/a_recyclable_structure_callout_4512115.webp', title: 'Recyclable Spout Pouch Structure', desc: 'RecyclableSpoutBagStructure' },
  { src: '/imgs/function/spout/a_sport_commute_scene_7174103.webp', title: 'Perfect for Sport & Commute', desc: 'SuitableSuitableSports、Commute & Travel' },
  { src: '/imgs/function/spout/a_fridge_chill_scene_2985986.webp', title: 'Ready to Chill', desc: 'PlaceIntoRefrigerator，Ready to Drink' },
  { src: '/imgs/function/spout/a_custom_system_closing_page_7251476.webp', title: 'Design Your Eco Spout Juice Pouch', desc: 'And Achieve Pack TogetherDesignYouOfEco-FriendlySpoutJuiceBagSeries' },
]

const SpoutPouchesJuicePage: React.FC = () => {
  const { openCalendly } = useCalendly()
  const [galleryEnlarged, setGalleryEnlarged] = useState<{ src: string; index: number } | null>(null)
  
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
      title: 'Recyclable Spout Juice Pouches',
      icon: <Droplets className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-8">
          <div className="bg-gradient-to-r from-orange-50 to-amber-50 p-6 rounded-lg border border-orange-200">
            <p className="text-lg font-medium text-neutral-900 mb-4">
              <strong>Custom-shaped, food-safe and recyclable</strong> — Achieve Pack spout pouches are designed for adult beverages including juices, cold brew, sports drinks and more.
            </p>
            <p className="text-neutral-700">
              Custom Shapes · Food Grade · Recyclable — ProfessionalForFormPersonBeverageDesign，PackIncludingJuice、Cold Brew、SportsBeverageEtc
            </p>
          </div>
          
          <AlternatingSection
            image="/imgs/function/spout/a_hero_kv_juice_pouch_7892714.webp"
            imageAlt="Achieve Pack Eco-Friendly Spout Pouches for Juice"
            title="Eco-Friendly Spout Pouches for Juice"
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
      title: 'Food-Safe & Recyclable',
      icon: <Shield className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-8">
          <AlternatingSection
            image="/imgs/function/spout/a_info_food_safe_recyclable_3061288.webp"
            imageAlt="Food-Safe and Recyclable Spout Pouches"
            title="Food-Grade Materials for Beverages"
            titleCn="Food Grade · Recyclable"
            content="Choose from 100% recyclable mono-material (such as mono-PE), plant-based or PCR structures to meet brand goals for reducing plastic footprint and local recycling system requirements."
            contentCn="CanChoose 100% RecyclableSingleMaterial（If mono-PE）、PlantMaterialBaseOrInclude PCR Structure，MeetBrandReducePlasticFootprintAndBookGroundReturnCollectBodySystemNeedDemand。"
            imageLeft={false}
            index={1}
          />
          
          <div className="grid md:grid-cols-2 gap-4 mt-6">
            <div className="bg-orange-50 p-4 rounded-lg border border-orange-200">
              <Droplets className="h-5 w-5 text-orange-600 mb-2" />
              <h4 className="font-semibold text-orange-800">Food-grade materials</h4>
              <p className="text-sm text-orange-700">Suitable forJuiceAndBeverageOfFood GradeMaterial</p>
            </div>
            <div className="bg-green-50 p-4 rounded-lg border border-green-200">
              <Recycle className="h-5 w-5 text-green-600 mb-2" />
              <h4 className="font-semibold text-green-800">Recyclable structures</h4>
              <p className="text-sm text-green-700">ProvideSingleMaterialOrRecyclableStructureSolution</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'spout-cap',
      title: 'Easy-Pour Spout Design',
      icon: <Zap className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-8">
          <AlternatingSection
            image="/imgs/function/spout/a_detail_spout_cap_2155787.webp"
            imageAlt="Spout and Cap Close-up"
            title="Twist to Open, Twist to Close – No Spills"
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
      title: 'Custom Shape & Ergonomics',
      icon: <Package className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-8">
          <AlternatingSection
            image="/imgs/function/spout/a_custom_shape_ergonomic_8007266.webp"
            imageAlt="Custom-Shaped Pouches"
            title="Custom-Shaped Pouches for Adults"
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
      title: 'Barrier & Freshness',
      icon: <Shield className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-8">
          <AlternatingSection
            image="/imgs/function/spout/a_barrier_freshness_juice_9675285.webp"
            imageAlt="Barrier and Freshness for Juice"
            title="Keep Juice Fresh Longer"
            titleCn="LetJuiceMaintainMoreLongFresh"
            content="The tight screw cap combined with high-barrier film reduces oxygen and moisture ingress, maintaining fresh taste. High-barrier laminated film helps protect flavor and vitamins."
            contentCn="TightRotateCover + HighBarrierFilmWithSuitable，ReduceOxygenAndWaterSteamEnter，MaintainFreshOpeningFeel。HighBarrierCompoundSuitableFilmHaveAssistAtProtectionFlavorAndVitamin。"
            imageLeft={true}
            index={4}
          />
          
          <div className="grid md:grid-cols-2 gap-4 mt-6">
            <div className="bg-blue-50 p-4 rounded-lg border border-blue-200 text-center">
              <div className="text-2xl mb-2">🛡️</div>
              <h4 className="font-semibold text-blue-800">O₂ Barrier</h4>
              <p className="text-xs text-blue-600">OxygenBarrier</p>
            </div>
            <div className="bg-cyan-50 p-4 rounded-lg border border-cyan-200 text-center">
              <div className="text-2xl mb-2">💧</div>
              <h4 className="font-semibold text-cyan-800">Moisture Barrier</h4>
              <p className="text-xs text-cyan-600">WaterSteamBarrier</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'refillable',
      title: 'Refillable & On-the-Go',
      icon: <Recycle className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-8">
          <AlternatingSection
            image="/imgs/function/spout/a_refillable_on_the_go_0614853.webp"
            imageAlt="Refillable and On-the-Go"
            title="Refill, Reuse, Enjoy Again"
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
      title: 'Recyclable Structure Options',
      icon: <Recycle className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-8">
          <AlternatingSection
            image="/imgs/function/spout/a_recyclable_structure_callout_4512115.webp"
            imageAlt="Recyclable Spout Pouch Structure"
            title="Recyclable Spout Pouch Structure"
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
      title: 'Perfect for Sport & Travel',
      icon: <Zap className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-8">
          <AlternatingSection
            image="/imgs/function/spout/a_sport_commute_scene_7174103.webp"
            imageAlt="Sport and Commute Scene"
            title="Perfect for Sport, Work and Travel"
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
      title: 'Ready to Chill',
      icon: <Droplets className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-8">
          <AlternatingSection
            image="/imgs/function/spout/a_fridge_chill_scene_2985986.webp"
            imageAlt="Fridge Chill Scene"
            title="Stand-Up Design for Easy Storage"
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
      title: 'Design Your Custom Spout System',
      icon: <Package className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-8">
          <AlternatingSection
            image="/imgs/function/spout/a_custom_system_closing_page_7251476.webp"
            imageAlt="Design Your Custom Spout System"
            title="Design Your Eco Spout Juice Pouch Line"
            titleCn="And Achieve Pack TogetherDesignYouOfEco-FriendlySpoutJuiceBagSeries"
            content="Three simple steps: 1) Choose your volume and shape, 2) Select spout, cap and material (recyclable, bio-based, PCR), 3) Add custom printing for your adult juice brand."
            contentCn="Three Simple Steps：1) ChooseCapacityAndBagForm，2) ChooseSpout、CoverChildAndMaterial（Recyclable、Bio-Based、PCR Etc），3) PlusYouOfJuiceOrFunctionCanBeverageBrandPrinting。"
            imageLeft={false}
            index={9}
          />
          
          <div className="bg-gradient-to-r from-orange-50 to-amber-50 p-6 rounded-lg border border-orange-200">
            <h4 className="font-bold text-neutral-900 mb-4">3 Steps to Your Custom Spout Pouch</h4>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">1</div>
                <div>
                  <p className="font-medium text-neutral-800">Choose volume & shape</p>
                  <p className="text-xs text-neutral-600">ChooseCapacityAndBagForm</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">2</div>
                <div>
                  <p className="font-medium text-neutral-800">Select spout & material</p>
                  <p className="text-xs text-neutral-600">ChooseSpout、CoverChildAndMaterial</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">3</div>
                <div>
                  <p className="font-medium text-neutral-800">Add custom printing</p>
                  <p className="text-xs text-neutral-600">PlusYouOfBrandPrinting</p>
                </div>
              </div>
            </div>
            <p className="text-sm text-neutral-600 mt-4 text-center">From concept to shelf-ready pouches, one partner for liquids<br/>FromRoughlyConceptToUpShelfFormProduct，OneUnitPartnerDoneAllLiquidPackaging</p>
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
          <div className="bg-gradient-to-r from-primary-50 to-orange-50 p-6 rounded-xl border border-primary-200">
            <h3 className="text-xl font-bold text-neutral-900 mb-4">Industry-Leading Expertise in Beverage Packaging</h3>
            <p className="text-neutral-700 mb-4">
              With over 13 years of experience manufacturing flexible packaging, Achieve Pack has supplied spout pouches to beverage brands, juice companies, and cold brew producers across North America, Europe, and Asia-Pacific.
            </p>
            <p className="text-neutral-600">
              Our BRC and ISO-certified facilities produce <Link to="/packaging/spout-pouches" className="text-primary-600 underline hover:text-primary-800">spout pouches</Link> using food-grade multi-layer films and <Link to="/materials/recyclable-mono-pe" className="text-primary-600 underline hover:text-primary-800">recyclable mono-PE structures</Link> for leading beverage brands worldwide.
            </p>
          </div>
          
          {/* Trust Badges Grid */}
          <div className="grid md:grid-cols-4 gap-4">
            <div className="bg-white p-4 rounded-lg border border-neutral-200 text-center shadow-sm">
              <FileCheck className="h-8 w-8 mx-auto mb-2 text-blue-600" />
              <h4 className="font-bold text-neutral-900">FDA Compliant</h4>
              <p className="text-xs text-neutral-600">Food Contact Safe</p>
            </div>
            <div className="bg-white p-4 rounded-lg border border-neutral-200 text-center shadow-sm">
              <Shield className="h-8 w-8 mx-auto mb-2 text-green-600" />
              <h4 className="font-bold text-neutral-900">BRC Certified</h4>
              <p className="text-xs text-neutral-600">Global Food Standard</p>
            </div>
            <div className="bg-white p-4 rounded-lg border border-neutral-200 text-center shadow-sm">
              <Building2 className="h-8 w-8 mx-auto mb-2 text-purple-600" />
              <h4 className="font-bold text-neutral-900">500+ Brands</h4>
              <p className="text-xs text-neutral-600">Trusted by Industry</p>
            </div>
            <div className="bg-white p-4 rounded-lg border border-neutral-200 text-center shadow-sm">
              <Globe className="h-8 w-8 mx-auto mb-2 text-orange-600" />
              <h4 className="font-bold text-neutral-900">Global Shipping</h4>
              <p className="text-xs text-neutral-600">Worldwide Delivery</p>
            </div>
          </div>
          
          {/* Internal Links for SEO */}
          <div className="bg-neutral-50 p-6 rounded-lg">
            <h4 className="font-semibold text-neutral-900 mb-4 flex items-center gap-2">
              <Sparkles className="h-5 w-5 text-primary-600" />
              Explore Related Packaging Solutions
            </h4>
            <div className="grid md:grid-cols-3 gap-3">
              <Link to="/materials/recyclable-mono-pe" className="flex items-center gap-2 text-sm text-primary-600 hover:text-primary-800 hover:underline">
                <Recycle className="h-4 w-4" /> Recyclable Mono-PE
              </Link>
              <Link to="/materials/pcr" className="flex items-center gap-2 text-sm text-primary-600 hover:text-primary-800 hover:underline">
                <Recycle className="h-4 w-4" /> PCR Materials
              </Link>
              <Link to="/features/barrier-options" className="flex items-center gap-2 text-sm text-primary-600 hover:text-primary-800 hover:underline">
                <Shield className="h-4 w-4" /> Barrier Options
              </Link>
              <Link to="/packaging/stand-up-pouches" className="flex items-center gap-2 text-sm text-primary-600 hover:text-primary-800 hover:underline">
                <Package className="h-4 w-4" /> Stand Up Pouches
              </Link>
              <Link to="/industry/sauces-condiments" className="flex items-center gap-2 text-sm text-primary-600 hover:text-primary-800 hover:underline">
                <Droplets className="h-4 w-4" /> Liquid Packaging
              </Link>
              <Link to="/company/certificates" className="flex items-center gap-2 text-sm text-primary-600 hover:text-primary-800 hover:underline">
                <FileCheck className="h-4 w-4" /> Our Certificates
              </Link>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'cta',
      title: 'Ready to Get Started?',
      icon: <Droplets className="h-5 w-5 text-white" />,
      content: (
        <div className="bg-gradient-to-br from-orange-500 to-amber-600 text-white p-8 rounded-xl">
          <h3 className="text-2xl font-bold mb-6 text-center">Choose How You'd Like to Connect</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white/10 backdrop-blur p-6 rounded-lg text-center">
              <Calendar className="h-8 w-8 mx-auto mb-3" />
              <h4 className="font-semibold mb-2">Book a Call</h4>
              <p className="text-sm text-white/80 mb-4">30-min free consultation</p>
              <button onClick={openCalendly} className="w-full bg-white text-orange-600 px-4 py-2 rounded-lg font-semibold hover:bg-orange-50 transition cursor-pointer">
                Schedule Now
              </button>
            </div>
            <div className="bg-white/10 backdrop-blur p-6 rounded-lg text-center">
              <Mail className="h-8 w-8 mx-auto mb-3" />
              <h4 className="font-semibold mb-2">Email Quote</h4>
              <p className="text-sm text-white/80 mb-4">Get response within 24hrs</p>
              <a href="mailto:ryan@achievepack.com?subject=Spout Pouches Quote" className="block w-full bg-white text-orange-600 px-4 py-2 rounded-lg font-semibold hover:bg-orange-50 transition">
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
      question: "What types of beverages are suitable for spout pouches?",
      answer: "Spout pouches are ideal for juices, cold brew coffee and tea, sports drinks, smoothies, cocktails, sauces, and other liquid products. The food-grade materials and barrier properties help maintain freshness and flavor."
    },
    {
      question: "Are your spout pouches recyclable?",
      answer: "Yes, we offer mono-material PE structures that are recyclable where appropriate recycling infrastructure exists. We also offer bio-based and PCR (post-consumer recycled) options. Always check local recycling guidelines."
    },
    {
      question: "Can I customize the shape and size of spout pouches?",
      answer: "Absolutely! We offer custom-shaped pouches with ergonomic designs, handles, and curved contours. You can choose from various volumes and shapes to match your brand identity and product requirements."
    },
    {
      question: "What is the minimum order quantity for spout pouches?",
      answer: "Our minimum order quantity varies depending on the customization level. For standard spout pouches, MOQ can be as low as 1,000 pieces. For fully custom shapes and printing, please contact us for specific requirements."
    },
    {
      question: "How do spout pouches compare to bottles?",
      answer: "Spout pouches are lighter, require less storage space, have lower transportation costs, and are shatter-proof. They're more convenient for on-the-go consumption while offering similar barrier properties to protect product freshness."
    },
    {
      question: "What barrier options are available for juice pouches?",
      answer: "We offer multiple barrier levels including standard MVTR barrier, high-oxygen barrier with AlOx coating, and metallized options. Our barrier films protect juice vitamins, flavor, and freshness for extended shelf life."
    },
    {
      question: "Can spout pouches be used for hot-fill beverages?",
      answer: "Yes, we offer heat-resistant spout pouches suitable for hot-fill applications up to 85°C. These are perfect for pasteurized juices, teas, and other hot-fill beverages. Contact us for specific temperature requirements."
    },
    {
      question: "What certifications do your spout pouches have?",
      answer: "Our spout pouches are manufactured in BRC and ISO-certified facilities. All materials are FDA compliant for food contact. We can provide COA, COC, and third-party test reports for your quality assurance needs."
    }
  ]

  const relatedLinks = [
    // Material options
    { title: "Recyclable Mono-PE", url: "/materials/recyclable-mono-pe", description: "Fully recyclable single-material structure" },
    { title: "PCR Materials", url: "/materials/pcr", description: "Post-consumer recycled content options" },
    { title: "Bio-Based Materials", url: "/materials/bio-pe", description: "Plant-derived sustainable materials" },
    { title: "Compostable Pouches", url: "/materials/compostable", description: "100% plastic-free eco-friendly options" },
    // Packaging shapes
    { title: "Spout Pouches", url: "/packaging/spout-pouches", description: "All spout pouch options and sizes" },
    { title: "Stand Up Pouches", url: "/packaging/stand-up-pouches", description: "Versatile self-standing packaging" },
    { title: "Flat Bottom Bags", url: "/packaging/flat-bottom-bags", description: "Premium box-pouch designs" },
    // Features
    { title: "Barrier Options", url: "/features/barrier-options", description: "Choose your protection level" },
    { title: "Printing Capabilities", url: "/printing/digital-printing", description: "Digital and rotogravure options" },
    // Related function pages
    { title: "Carbon Neutral Bags", url: "/function/carbon-neutral-bags", description: "Climate-positive packaging solutions" },
    { title: "Microwave Steam Bags", url: "/function/microwave-steam-bags", description: "Food-safe heating pouches" },
    { title: "Child-Resistant Bags", url: "/function/child-resistant-bags", description: "Safety-compliant CR packaging" },
    // Industry applications
    { title: "Liquid Packaging", url: "/industry/sauces-condiments", description: "Complete liquid pouch solutions" },
    // Knowledge & Support
    { title: "Certificates", url: "/company/certificates", description: "View our safety certifications" },
    { title: "FAQs", url: "/support/faqs", description: "Common questions answered" }
  ]

  return (
    <>
      <SEOPageLayout
        title="Recyclable Spout Juice Pouches | Eco-Friendly Beverage Packaging"
        description="Custom-shaped, food-safe, recyclable spout pouches for adult beverages. Ideal for juices, cold brew, sports drinks with easy-pour spout design and high barrier freshness protection."
        keywords={['spout pouches', 'juice pouches', 'recyclable spout bags', 'beverage packaging', 'liquid pouches', 'food-safe pouches', 'custom spout pouches', 'drink pouches', 'juice pouch packaging', 'cold brew pouches', 'sports drink pouches', 'mono-PE spout bags', 'eco friendly juice bags', 'refillable beverage pouches']}
        canonicalUrl="https://achievepack.com/function/spout-pouches-juice"
        heroTitle="Eco-Friendly Spout Pouches for Juice"
        heroSubtitle="Custom-shaped, food-safe and recyclable — Custom Shapes · Food Grade · Recyclable"
        heroImage="/imgs/function/spout/a_hero_kv_juice_pouch_7892714.webp"
        heroImageAlt="Achieve Pack Recyclable Spout Pouches for Juice"
        introSummary="Custom spout pouches designed for adult beverages. From juices to cold brew, enjoy food-safe, recyclable packaging with convenient spout design."
        sections={sections}
        faqs={faqs}
        relatedLinks={relatedLinks}
        ctaTitle="Ready to Design Your Spout Pouches?"
        ctaDescription="Get custom spout pouches for your beverage brand. Food-safe, recyclable, and beautifully designed."
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
