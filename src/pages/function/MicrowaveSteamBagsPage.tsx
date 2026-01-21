import React, { useState } from 'react'
import { Zap, Shield, Thermometer, Package, Droplets, Maximize, ArrowRight, Leaf, CheckCircle, Calendar, Mail, X, ChevronLeft, ChevronRight, Award, Users, Globe, FileCheck, Building2, Sparkles } from 'lucide-react'
import SEOPageLayout from '../../components/SEOPageLayout'
import { Link } from 'react-router-dom'
import { useCalendly } from '../../contexts/CalendlyContext'

// Gallery images from /imgs/function/microwave/
const microwaveGallery = [
  { src: '/imgs/function/microwave/a_kv_1_hero_main_4427371.webp', title: 'Eco-Friendly Microwave Cooking Bags', desc: 'Safe Microwave Steaming、All-in-One Storage & Heating Bag' },
  { src: '/imgs/function/microwave/a_kv_2_info_foodsafe_5240576.webp', title: 'Food-Safe & Microwave-Safe', desc: 'Food GradeMaterial · MicrowaveOvenSafe' },
  { src: '/imgs/function/microwave/a_kv_3_detail_zipperbase_3012328.webp', title: 'Strong Zipper & Stand-Up Base', desc: 'SturdyZipper + Stand-Up BottomStructure' },
  { src: '/imgs/function/microwave/a_kv_4_detail_steamvent_4869525.webp', title: 'Built-in Steam Vent', desc: 'InsideSetSteamSteamHoleDesign' },
  { src: '/imgs/function/microwave/a_kv_5_detail_freshness_8989322.webp', title: 'See Freshness at a Glance', desc: 'OneEyeViewSeeFresh' },
  { src: '/imgs/function/microwave/a_kv_6_detail_waterdrops_2735995.webp', title: 'Heat-Resistant Food-Grade Film', desc: 'Heat ResistantFood GradeFilm' },
  { src: '/imgs/function/microwave/a_kv_7_detail_capacity_9860751.webp', title: 'Generous Capacity for Family Portions', desc: 'Wide OpeningLargeCapacity，SuitableSuitableFamily PortionVolume' },
  { src: '/imgs/function/microwave/a_kv_8_lifestyle_journeyscene_9334974.webp', title: 'From Fridge to Microwave in One Bag', desc: 'OneBagDone，FromRefrigeratorToMicrowaveOven' },
  { src: '/imgs/function/microwave/a_kv_9_info_ecocomparison_5260427.webp', title: 'Eco-Friendly Convenience', desc: 'Eco-FriendlyAnd Convenient' },
  { src: '/imgs/function/microwave/a_kv_10_specs_closingpage_2082225.webp', title: 'Achieve Pack Microwave Steam Pouch', desc: 'Achieve Pack MicrowaveSteamingBag' },
]

const MicrowaveSteamBagsPage: React.FC = () => {
  const { openCalendly } = useCalendly()
  const [galleryEnlarged, setGalleryEnlarged] = useState<{ src: string; index: number } | null>(null)
  
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
      title: 'Microwave Steam Bags Overview',
      icon: <Zap className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-8">
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-lg border border-green-200">
            <p className="text-lg font-medium text-neutral-900 mb-4">
              <strong>Steam, store and reheat food safely</strong> — Achieve Pack microwave steam bags are designed for modern, eco-conscious kitchens.
            </p>
            <p className="text-neutral-700">
              Safe Microwave Steaming、All-in-One Storage & Heating Bag — ProfessionalForModernEco-FriendlyKitchenDesign
            </p>
          </div>
          
          <AlternatingSection
            image="/imgs/function/microwave/a_kv_1_hero_main_4427371.webp"
            imageAlt="Achieve Pack Microwave Steam Bag Hero"
            title="Eco-Friendly Microwave Cooking Bags"
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
      title: 'Food-Safe & Microwave-Safe',
      icon: <Shield className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-8">
          <AlternatingSection
            image="/imgs/function/microwave/a_kv_2_info_foodsafe_5240576.webp"
            imageAlt="Food Safe Microwave Bag"
            title="Certified Food-Contact Material"
            titleCn="Food GradeMaterial · MicrowaveOvenSafe"
            content="Made from food-grade film that can directly contact vegetables, fruits, and meat. Passed relevant food safety tests and designed to withstand typical home microwave temperatures."
            contentCn="UsingFood GradeFilm，CanDirectAndVegetables、Fruit、MeatCategoryContact，ThroughRelatedCloseFoodSafeTest，ResistantReceiveClassicTypeHomeUseMicrowaveHeatingTemperatureDegree。"
            imageLeft={false}
            index={1}
          />
          
          <div className="grid md:grid-cols-2 gap-4 mt-6">
            <div className="bg-green-50 p-4 rounded-lg border border-green-200">
              <CheckCircle className="h-5 w-5 text-green-600 mb-2" />
              <h4 className="font-semibold text-green-800">Certified food-contact material</h4>
              <p className="text-sm text-green-700">ThroughFoodContactSafeTest</p>
            </div>
            <div className="bg-green-50 p-4 rounded-lg border border-green-200">
              <Thermometer className="h-5 w-5 text-green-600 mb-2" />
              <h4 className="font-semibold text-green-800">Designed for home microwave temperatures</h4>
              <p className="text-sm text-green-700">ProfessionalForHomeUseMicrowaveHeatingTemperatureDegreeDesign</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'zipper-base',
      title: 'Strong Zipper & Stand-Up Base',
      icon: <Package className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-8">
          <AlternatingSection
            image="/imgs/function/microwave/a_kv_3_detail_zipperbase_3012328.webp"
            imageAlt="Zipper and Stand-Up Base Detail"
            title="Easy to Seal, Easy to Stand"
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
      title: 'Built-in Steam Vent Design',
      icon: <Droplets className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-8">
          <AlternatingSection
            image="/imgs/function/microwave/a_kv_4_detail_steamvent_4869525.webp"
            imageAlt="Steam Vent Detail"
            title="Safe Pressure Release"
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
      title: 'See Freshness at a Glance',
      icon: <Zap className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-8">
          <AlternatingSection
            image="/imgs/function/microwave/a_kv_5_detail_freshness_8989322.webp"
            imageAlt="Freshness Visibility"
            title="Clear Enough to Check Doneness"
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
      title: 'Heat-Resistant Food-Grade Film',
      icon: <Thermometer className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-8">
          <AlternatingSection
            image="/imgs/function/microwave/a_kv_6_detail_waterdrops_2735995.webp"
            imageAlt="Heat Resistant Film with Water Droplets"
            title="Designed for Everyday Microwave Use"
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
      title: 'Generous Capacity for Family Portions',
      icon: <Maximize className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-8">
          <AlternatingSection
            image="/imgs/function/microwave/a_kv_7_detail_capacity_9860751.webp"
            imageAlt="Bag Capacity"
            title="Ideal for Vegetables, Mixed Meals and Meal Prep"
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
      title: 'From Fridge to Microwave in One Bag',
      icon: <ArrowRight className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-8">
          <AlternatingSection
            image="/imgs/function/microwave/a_kv_8_lifestyle_journeyscene_9334974.webp"
            imageAlt="From Fridge to Microwave Journey"
            title="Store, Steam and Serve"
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
      title: 'Eco-Friendly Convenience',
      icon: <Leaf className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-8">
          <AlternatingSection
            image="/imgs/function/microwave/a_kv_9_info_ecocomparison_5260427.webp"
            imageAlt="Eco Comparison"
            title="Less Water, Fewer Dishes to Wash"
            titleCn="Eco-FriendlyAnd Convenient"
            content="Compared to traditional cooking methods, our steam bags use less water and create fewer dishes to wash. They also use less material than rigid plastic containers, reducing carbon footprint during transportation and disposal."
            contentCn="UseWaterMoreFew、ReduceWash Dishes。RatioHardQualityPlasticBoxUseMoreFewMaterial，TransportationAndDiscardStageCarbonLower Footprint。"
            imageLeft={true}
            index={8}
          />
          
          <div className="grid md:grid-cols-2 gap-4 mt-6">
            <div className="bg-green-50 p-4 rounded-lg">
              <h4 className="font-semibold text-green-800 mb-2">Traditional Cooking</h4>
              <ul className="text-sm text-green-700 space-y-1">
                <li>• Pot, colander, plate needed</li>
                <li>• More water usage</li>
                <li>• More dishes to wash</li>
              </ul>
            </div>
            <div className="bg-primary-50 p-4 rounded-lg">
              <h4 className="font-semibold text-primary-800 mb-2">With Achieve Pack Steam Bags</h4>
              <ul className="text-sm text-primary-700 space-y-1">
                <li>• One pouch + microwave</li>
                <li>• Less water needed</li>
                <li>• Minimal cleanup</li>
              </ul>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'specs',
      title: 'Product Specifications',
      icon: <Package className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-8">
          <AlternatingSection
            image="/imgs/function/microwave/a_kv_10_specs_closingpage_2082225.webp"
            imageAlt="Product Specifications"
            title="Achieve Pack Microwave Steam Pouch"
            titleCn="Achieve Pack MicrowaveSteamingBag"
            content="Available in multiple sizes to suit your needs. Perfect for vegetables, frozen meals, and meal prep applications. Supports eco-friendly material options including recyclable and bio-based formulations."
            contentCn="By Achieve Pack StrikeMake，ServiceModernEco-FriendlyKitchen — ProvideMultipleDimensionsChoose，SupportEco-Friendly MaterialsSolution。"
            imageLeft={false}
            index={9}
          />
          
          <div className="grid md:grid-cols-3 gap-4 mt-6">
            <div className="bg-white border border-neutral-200 p-4 rounded-lg">
              <h4 className="font-semibold text-neutral-800 mb-2">Sizes & Formats</h4>
              <p className="text-sm text-neutral-600">DimensionsAndSpecification</p>
              <ul className="text-xs text-neutral-500 mt-2 space-y-1">
                <li>• Small (UnitPersonPortion)</li>
                <li>• Medium (2-3PersonPortion)</li>
                <li>• Family Size (HomeFamilyInstall)</li>
              </ul>
            </div>
            <div className="bg-white border border-neutral-200 p-4 rounded-lg">
              <h4 className="font-semibold text-neutral-800 mb-2">Usage</h4>
              <p className="text-sm text-neutral-600">UseRoute</p>
              <ul className="text-xs text-neutral-500 mt-2 space-y-1">
                <li>• Vegetables Vegetables</li>
                <li>• Frozen meals FrozenMeal</li>
                <li>• Meal prep Pre-Made Meal Portioning</li>
              </ul>
            </div>
            <div className="bg-white border border-neutral-200 p-4 rounded-lg">
              <h4 className="font-semibold text-neutral-800 mb-2">Safety & Standards</h4>
              <p className="text-sm text-neutral-600">SafeAndStandard</p>
              <ul className="text-xs text-neutral-500 mt-2 space-y-1">
                <li>• Food-grade Food Grade</li>
                <li>• Microwave-safe MicrowaveSafe</li>
                <li>• Eco material options Eco-Friendly Materials</li>
              </ul>
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
            <h3 className="text-xl font-bold text-neutral-900 mb-4">Food-Grade Packaging Experts Since 2011</h3>
            <p className="text-neutral-700 mb-4">
              Achieve Pack has been manufacturing food-safe flexible packaging for over 13 years. Our microwave steam bags are produced in BRC-certified facilities and tested to meet FDA food contact standards.
            </p>
            <p className="text-neutral-600 text-sm">
              Achieve Pack Self 2011 YearStartProfessionalNoteFood GradeFlexiblePackagingMadeMake。OurMicrowaveSteamingBagIn BRC CertificationFactoryProduction，MatchSuitable FDA FoodContactStandard。
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
              <Link to="/materials/recyclable-mono-pe" className="flex items-center gap-2 text-primary-600 hover:text-primary-700 text-sm">
                <Package className="h-4 w-4" /> Recyclable Mono-PE
              </Link>
              <Link to="/packaging/stand-up-pouches" className="flex items-center gap-2 text-primary-600 hover:text-primary-700 text-sm">
                <Package className="h-4 w-4" /> Stand Up Pouches
              </Link>
              <Link to="/function/child-resistant-bags" className="flex items-center gap-2 text-primary-600 hover:text-primary-700 text-sm">
                <Shield className="h-4 w-4" /> Child-Resistant Bags
              </Link>
              <Link to="/function/carbon-neutral-bags" className="flex items-center gap-2 text-primary-600 hover:text-primary-700 text-sm">
                <Sparkles className="h-4 w-4" /> Carbon Neutral Bags
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
      icon: <Shield className="h-5 w-5 text-white" />,
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
              <a href="mailto:ryan@achievepack.com?subject=Microwave Steam Bags Quote" className="block w-full bg-white text-green-600 px-4 py-2 rounded-lg font-semibold hover:bg-green-50 transition">
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
      question: "Are microwave steam bags safe for food?",
      answer: "Yes, our microwave steam bags are made from food-grade materials that have passed FDA food contact tests and relevant food safety certifications. They are designed to safely contact vegetables, fruits, and meat, and can withstand typical home microwave temperatures up to 100°C."
    },
    {
      question: "How does the steam vent work?",
      answer: "The small holes above the zipper serve as steam vents. As food heats up and releases steam, these vents allow pressure to escape safely, preventing the bag from bursting while ensuring even heat distribution throughout the food."
    },
    {
      question: "Can I reuse microwave steam bags?",
      answer: "The bags feature a resealable zipper for storage purposes. However, for food safety reasons, we recommend using each bag for microwave cooking only once. The bag can be reused for cold storage before cooking."
    },
    {
      question: "What sizes are available for microwave steam bags?",
      answer: "We offer small (individual portions), medium (2-3 servings), and family size options. Custom sizes are also available for commercial and food service applications with minimum order quantities starting at 1,000 pieces."
    },
    {
      question: "Are these bags eco-friendly?",
      answer: "Yes! Compared to rigid plastic containers, our flexible steam bags use up to 70% less material. We also offer recyclable mono-PE and bio-based formulations to minimize environmental impact. Visit our compostable materials page for more sustainable options."
    },
    {
      question: "What is the minimum order quantity?",
      answer: "Our minimum order quantity starts at 1,000 pieces for stock sizes. For custom sizes or printed bags, MOQ typically starts at 5,000 pieces. Contact us for exact quotes based on your requirements."
    },
    {
      question: "Can I get custom printed microwave steam bags?",
      answer: "Yes, we offer full-color custom printing on microwave steam bags. Our digital printing starts from 1,000 pieces, while plate printing is available for larger quantities. See our printing types page for more details."
    },
    {
      question: "How long is the production lead time?",
      answer: "Standard production time is 2-3 weeks for stock items and 3-4 weeks for custom printed bags. Express production may be available for urgent orders. Check our lead time page for current schedules."
    }
  ]

  // Enhanced related links for internal linking SEO
  const relatedLinks = [
    // Material options
    { title: "Compostable Pouches", url: "/materials/compostable", description: "100% plastic-free eco-friendly material" },
    { title: "Recyclable Mono-PE", url: "/materials/recyclable-mono-pe", description: "Fully recyclable single-material structure" },
    { title: "Bio-PE Materials", url: "/materials/bio-pe", description: "Plant-based polyethylene options" },
    // Packaging shapes
    { title: "Stand Up Pouches", url: "/packaging/stand-up-pouches", description: "Self-standing packaging" },
    { title: "Flat Bottom Bags", url: "/packaging/flat-bottom-bags", description: "Premium box-bottom style" },
    // Features
    { title: "Reclosure Options", url: "/features/reclosure-options", description: "All zipper types available" },
    { title: "Barrier Options", url: "/features/barrier-options", description: "Choose protection level" },
    // Related function pages
    { title: "Carbon Neutral Bags", url: "/function/carbon-neutral-bags", description: "Climate-positive packaging" },
    { title: "Child-Resistant Bags", url: "/function/child-resistant-bags", description: "Safety-certified pouches" },
    { title: "Spout Pouches", url: "/function/spout-pouches-juice", description: "Liquid packaging solutions" },
    // Industry applications
    { title: "Frozen Food Packaging", url: "/industry/frozen-food", description: "Freeze-safe pouch solutions" },
    { title: "Snacks Packaging", url: "/industry/snacks-food", description: "Food-grade snack bags" },
    // Knowledge & Support
    { title: "Certificates", url: "/company/certificates", description: "View our certifications" },
    { title: "Lead Time", url: "/support/lead-time", description: "Production schedules" }
  ]

  return (
    <>
      <SEOPageLayout
        title="Microwave Steam Bags | Eco-Friendly Cooking Pouches"
        description="Food-safe microwave steam bags for vegetables, frozen meals, and meal prep. Eco-friendly, heat-resistant pouches with built-in steam vents. Store, steam and serve in one bag."
        keywords={['microwave steam bags', 'microwave cooking pouches', 'vegetable steam bags', 'food-safe microwave bags', 'eco-friendly cooking bags', 'meal prep pouches', 'steam vent bags', 'microwaveable food pouches', 'heat resistant bags', 'frozen meal bags', 'reheatable pouches', 'BPA-free microwave bags', 'sustainable cooking bags', 'food grade steam bags']}
        canonicalUrl="https://achievepack.com/function/microwave-steam-bags"
        heroTitle="Eco-Friendly Microwave Cooking Bags"
        heroSubtitle="Steam, store and reheat food safely — Safe Microwave Steaming、All-in-One Storage & Heating Bag"
        heroImage="/imgs/function/microwave/a_microwavebag_hero_main_kitchen_2543693.webp"
        heroImageAlt="Achieve Pack Microwave Steam Bag with vegetables"
        introSummary="Food-grade microwave steam bags designed for modern, eco-conscious kitchens. Perfect for steaming vegetables, reheating frozen meals, and meal prep."
        sections={sections}
        faqs={faqs}
        relatedLinks={relatedLinks}
        ctaTitle="Ready to Order Microwave Steam Bags?"
        ctaDescription="Get custom microwave steam bags for your brand or food service operation. Eco-friendly options available."
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
