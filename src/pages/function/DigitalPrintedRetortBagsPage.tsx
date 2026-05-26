import React, { useState } from 'react'
import { Flame, Shield, Package, Layers, Thermometer, CheckCircle, Calendar, Mail, X, ChevronLeft, ChevronRight, Zap, Award, Users, Globe, FileCheck, Building2, Sparkles, Printer, Tag, Recycle, Copy, Check, Info, FileText } from 'lucide-react'
import SEOPageLayout from '../../components/SEOPageLayout'
import { Link } from 'react-router-dom'
import { useCalendly } from '../../contexts/CalendlyContext'
import { isPouch, getBrandConfig } from '../../utils/domain'

// Gallery images from /imgs/function/retort/
const retortGallery = [
  { src: '/imgs/function/retort/retort-hero.webp', title: 'High-Barrier Retort Pouches', desc: 'HighBarrierSteamingBagMain KV' },
  { src: '/imgs/function/retort/what-is-retort.webp', title: 'What Is Retort Packaging?', desc: 'What IsSteamingPackaging？' },
  { src: '/imgs/function/retort/layers.webp', title: '4-Layer Retort Structure', desc: 'Multi-LayerSteamingStructure' },
  { src: '/imgs/function/retort/high-temp.webp', title: 'High-Temperature Resistance', desc: 'SuitableWithHighTemperatureSteamingKillBacteria' },
  { src: '/imgs/function/retort/barrier.webp', title: 'Extreme Barrier Protection', desc: 'ExtremeUltimateBarrierProtection' },
  { src: '/imgs/function/retort/stront-seals.webp', title: 'Strong Hermetic Seals', desc: 'SturdyAirtightSeal' },
  { src: '/imgs/function/retort/ready-to-heat.webp', title: 'Ready-to-Heat Convenience', desc: 'CanHeating，EasyOpen' },
  { src: '/imgs/function/retort/shelf-stable.webp', title: 'Shelf-Stable Ready Meals', desc: 'Room TemperatureReady-to-EatMeal' },
  { src: '/imgs/function/retort/more-meals.webp', title: 'More Meals Per Pallet', desc: 'More Meals Per Pallet' },
  { src: '/imgs/function/retort/custom-retort.webp', title: 'Design Your Retort System', desc: 'DesignYouOfSteamingPackagingSolution' },
  { src: '/imgs/function/retort/100pcs.webp', title: '100 pcs Low MOQ', desc: 'Minimum OrderVolumeOnly 100 Pack' },
  { src: '/imgs/function/retort/Full-color digital printing.webp', title: 'Full-Color Digital Printing', desc: 'FullColorDigitalPrinting' },
  { src: '/imgs/function/retort/Launch a full flavor line with low MOQ.webp', title: 'Low MOQ for Many SKUs', desc: 'LowMinimum OrderImmediatelyCanCoverMultipleFlavor' },
]

const DigitalPrintedRetortBagsPage: React.FC = () => {
  const { openCalendly } = useCalendly()
  const [galleryEnlarged, setGalleryEnlarged] = useState<{ src: string; index: number } | null>(null)

  const isPouchDomain = isPouch()
  const brand = getBrandConfig()

  // Theme colors
  const primaryThemeColor = isPouchDomain ? '#10b981' : '#8b5cf6' // Green for pouch.eco, Purple for achievepack
  const primaryBtnClass = isPouchDomain 
    ? 'bg-emerald-600 hover:bg-emerald-700 text-white focus:ring-emerald-500' 
    : 'bg-violet-600 hover:bg-violet-700 text-white focus:ring-violet-500'

  const navigateGallery = (direction: 'prev' | 'next') => {
    if (!galleryEnlarged) return
    let newIndex = direction === 'prev' ? galleryEnlarged.index - 1 : galleryEnlarged.index + 1
    if (newIndex < 0) newIndex = retortGallery.length - 1
    if (newIndex >= retortGallery.length) newIndex = 0
    setGalleryEnlarged({ src: retortGallery[newIndex].src, index: newIndex })
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
            <p className="text-sm font-medium" style={{ color: primaryThemeColor }}>{titleCn}</p>
            <p className="text-neutral-700">{content}</p>
            <p className="text-neutral-600 text-sm">{contentCn}</p>
          </div>
        </>
      ) : (
        <>
          <div className="space-y-4 md:order-1">
            <h3 className="text-xl font-bold text-neutral-900">{title}</h3>
            <p className="text-sm font-medium" style={{ color: primaryThemeColor }}>{titleCn}</p>
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
      title: 'High-Barrier Retort Pouches Overview',
      icon: <Flame className="h-5 w-5" style={{ color: primaryThemeColor }} />,
      content: (
        <div className="space-y-8">
          <div className="bg-gradient-to-r from-neutral-50 to-neutral-100 p-6 rounded-xl border border-neutral-200 shadow-sm">
            <p className="text-lg font-medium text-neutral-900 mb-4">
              <strong>{isPouchDomain ? 'Start Your Gourmet Brand with Just 100 Bags' : 'Shelf-Stable Ready Meals Without Heavy Cans or Jars'}</strong> — Digital printed retort pouches designed for high-temperature sterilization, offering long shelf life at ambient temperature.
            </p>
            <p className="text-neutral-600 text-sm leading-relaxed">
              No require heavy cans or glass, also can achieve room temperature preservation of ready-to-eat meals. Digital printing retort pouches withstand high-temperature sterilization with ultra-low trial runs.
            </p>
          </div>
          
          <AlternatingSection
            image="/imgs/function/retort/retort-hero.webp"
            imageAlt="High-Barrier Retort Pouches Hero"
            title="High-Barrier Retort Pouches"
            titleCn="HighBarrierSteamingBag"
            content="Using food-grade multi-layer film structures (PET/AL/NY/CPP), our retort pouches withstand 116–135°C sterilization. Ideal for curries, ready meals, baby food, pet food and fermented specialties like kimchi. Digital printing available starting from low MOQs."
            contentCn="UseFood GradeMulti-LayerFilmStructure（PET/Aluminum Foil/Nylon/CPP），OurSteamingBagCanWithstand 116–135℃ KillBacteria。SuitableSuitableCurry、Ready-to-EatMeal、BabyFood、PetFoodEtc，DigitalPrintingOnlyRequire 100 PackMinimum Order。"
            imageLeft={true}
            index={0}
          />
        </div>
      )
    },
    {
      id: 'showdown',
      title: 'The Fermented Food Showdown: VitoPouch vs. Glass vs. Valve',
      icon: <Layers className="h-5 w-5" style={{ color: primaryThemeColor }} />,
      content: (
        <div className="space-y-8">
          <div className="bg-neutral-50 p-6 rounded-xl border border-neutral-200">
            <h3 className="text-lg font-bold text-neutral-900 mb-3 flex items-center gap-2">
              <Info className="h-5 w-5" style={{ color: primaryThemeColor }} />
              The Science of Sterilization & Degassing
            </h3>
            <p className="text-neutral-700 text-sm leading-relaxed mb-4">
              Fermented foods (like artisan kimchi, sauerkraut, or hot sauces) are traditionally packed in glass jars or pouches equipped with one-way degassing valves to prevent "pouch bloating" caused by active yeast and lactic acid bacteria. However, this adds high costs and operational headaches.
            </p>
            <div className="bg-white p-4 rounded-lg border border-neutral-200/80 shadow-sm text-sm">
              <h4 className="font-bold text-neutral-800 mb-1">💡 The VitoPouch Retort Solution:</h4>
              <p className="text-neutral-600">
                When you pack in our VitoPouch retort pouches and run them through a commercial sterilization autoclave (121°C–130°C for 30 minutes), **all active gas-producing organisms are completely pasteurized**. Since no further fermentation occurs inside the sealed bag, **no outgassing happens, rendering degassing valves 100% redundant.**
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Glass Jar */}
            <div className="bg-white rounded-xl border border-neutral-200 p-6 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
              <div>
                <span className="text-xs font-bold bg-neutral-100 text-neutral-600 px-2.5 py-1 rounded-full">Traditional Option</span>
                <h4 className="font-bold text-lg text-neutral-900 mt-3 mb-2">Glass Jars</h4>
                <p className="text-xs text-neutral-500 mb-4">Reusable but logistically heavy and environmentally taxing.</p>
                <ul className="space-y-2.5 text-xs text-neutral-600 border-t border-neutral-100 pt-4">
                  <li className="flex items-center gap-2 text-red-600">❌ Heavy weight (approx. 2,500 kg per 5k units)</li>
                  <li className="flex items-center gap-2 text-red-600">❌ High breakage rate during shipping</li>
                  <li className="flex items-center gap-2 text-red-600">❌ Stick-on label branding only (limited visual impact)</li>
                  <li className="flex items-center gap-2 text-emerald-600">✓ Reusable by end consumers</li>
                </ul>
              </div>
              <div className="mt-6 border-t border-neutral-100 pt-4 flex justify-between items-center text-xs">
                <span className="text-neutral-500">Unit Cost Ballpark:</span>
                <span className="font-bold text-neutral-900">$0.45 – $0.90+</span>
              </div>
            </div>

            {/* Valve Pouches */}
            <div className="bg-white rounded-xl border border-neutral-200 p-6 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
              <div>
                <span className="text-xs font-bold bg-amber-50 text-amber-700 px-2.5 py-1 rounded-full">Complex Pouch</span>
                <h4 className="font-bold text-lg text-neutral-900 mt-3 mb-2">Degassing Valve Pouches</h4>
                <p className="text-xs text-neutral-500 mb-4">Uses a one-way plastic valve to vent fermentation gas.</p>
                <ul className="space-y-2.5 text-xs text-neutral-600 border-t border-neutral-100 pt-4">
                  <li className="flex items-center gap-2 text-red-600">❌ Bulky, expensive plastic backflow valves</li>
                  <li className="flex items-center gap-2 text-red-600">❌ Valve can warp/leak under retort sterilization</li>
                  <li className="flex items-center gap-2 text-red-600">❌ High mechanical assembly failure rates</li>
                  <li className="flex items-center gap-2 text-emerald-600">✓ Keeps raw/non-sterilized ferment active</li>
                </ul>
              </div>
              <div className="mt-6 border-t border-neutral-100 pt-4 flex justify-between items-center text-xs">
                <span className="text-neutral-500">Unit Cost Ballpark:</span>
                <span className="font-bold text-neutral-900">$0.55 – $0.80+</span>
              </div>
            </div>

            {/* VitoPouch */}
            <div className="rounded-xl p-6 shadow-md flex flex-col justify-between hover:shadow-lg transition-shadow border-2 relative overflow-hidden"
                 style={{ borderColor: primaryThemeColor, backgroundColor: isPouchDomain ? 'rgba(16, 185, 129, 0.03)' : 'rgba(139, 92, 246, 0.03)' }}>
              <div className="absolute top-0 right-0 bg-primary-600 text-white text-[10px] font-bold px-3 py-1 rounded-bl-lg uppercase tracking-wider"
                   style={{ backgroundColor: primaryThemeColor }}>
                Highly Recommended
              </div>
              <div>
                <span className="text-xs font-bold text-white px-2.5 py-1 rounded-full" style={{ backgroundColor: primaryThemeColor }}>VitoPouch "Soft Can"</span>
                <h4 className="font-bold text-lg text-neutral-900 mt-3 mb-2">Retort VitoPouch</h4>
                <p className="text-xs text-neutral-500 mb-4">Unbreakable heat-resistant laminated structure without valve.</p>
                <ul className="space-y-2.5 text-xs text-neutral-600 border-t border-neutral-100 pt-4">
                  <li className="flex items-center gap-2 text-emerald-600">✓ **Zero Valve Cost** (saves over $0.20 per piece)</li>
                  <li className="flex items-center gap-2 text-emerald-600">✓ 100% shelf-stable without refrigeration</li>
                  <li className="flex items-center gap-2 text-emerald-600">✓ Flat featherweight (50 kg per 5,000 bags)</li>
                  <li className="flex items-center gap-2 text-emerald-600">✓ Stunning full-bleed edge-to-edge digital print</li>
                </ul>
              </div>
              <div className="mt-6 border-t border-neutral-100 pt-4 flex justify-between items-center text-xs">
                <span className="text-neutral-500">Unit Cost Ballpark:</span>
                <span className="font-bold text-neutral-900" style={{ color: primaryThemeColor }}>~$0.34 (inc. Air Shipping!)</span>
              </div>
            </div>
          </div>
        </div>
      )
    },

    {
      id: 'what-is-retort',
      title: 'What Is Retort Packaging?',
      icon: <Shield className="h-5 w-5" style={{ color: primaryThemeColor }} />,
      content: (
        <div className="space-y-8">
          <AlternatingSection
            image="/imgs/function/retort/what-is-retort.webp"
            imageAlt="What Is Retort Packaging"
            title="Flexible Pouches That Replace Cans and Jars"
            titleCn="What IsSteamingPackaging？"
            content="Retort packaging uses multi-layer films that withstand 116–135°C sterilization, replacing traditional cans and jars for ready-to-eat food. Designed for long shelf life at ambient temperature without refrigeration."
            contentCn="SteamingPackagingUseCanWithstand 116–135℃ KillBacteriaOfMulti-LayerFilm，AlternativeTraditionalTin CanAndGlass，ServiceReady-to-EatFood。Suitable forLong Shelf LifeRoom TemperatureSave，NoRequireRefrigerated。"
            imageLeft={false}
            index={1}
          />
          
          <div className="grid md:grid-cols-3 gap-4 mt-6">
            <div className="bg-neutral-50 p-4 rounded-lg border border-neutral-200">
              <Thermometer className="h-5 w-5 mb-2" style={{ color: primaryThemeColor }} />
              <h4 className="font-semibold text-neutral-800">116–135°C sterilization</h4>
              <p className="text-xs text-neutral-500">CanWithstandHighTemperatureKillBacteria</p>
            </div>
            <div className="bg-neutral-50 p-4 rounded-lg border border-neutral-200">
              <Package className="h-5 w-5 mb-2" style={{ color: primaryThemeColor }} />
              <h4 className="font-semibold text-neutral-800">Replace cans & jars</h4>
              <p className="text-xs text-neutral-500">AlternativeTin CanAndGlass</p>
            </div>
            <div className="bg-neutral-50 p-4 rounded-lg border border-neutral-200">
              <CheckCircle className="h-5 w-5 mb-2" style={{ color: primaryThemeColor }} />
              <h4 className="font-semibold text-neutral-800">Ambient shelf life</h4>
              <p className="text-xs text-neutral-500">Room TemperatureLong Shelf Life</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'layers',
      title: '4-Layer Retort Structure',
      icon: <Layers className="h-5 w-5" style={{ color: primaryThemeColor }} />,
      content: (
        <div className="space-y-8">
          <AlternatingSection
            image="/imgs/function/retort/layers.webp"
            imageAlt="4-Layer Retort Structure"
            title="Multi-Layer Retort Structure"
            titleCn="Multi-LayerSteamingStructure"
            content="Our retort pouches feature a 4-layer structure: PET (outer layer for printing), Aluminum foil (barrier layer), Nylon/OPA (puncture resistance), and CPP (heat-seal inner layer). This structure resists high heat, pressure and prevents delamination."
            contentCn="OurSteamingBagUsingFourLayerStructure：PET（OutsideLayerPrinting）、Aluminum Foil（BarrierLayer）、Nylon/OPA（ResistantGrindLayer）、CPP（InsideLayerResistantHighTemperatureSealedLayer）。SuitableShouldHighTemperatureHighPressure，NotEasyDivideLayer。"
            imageLeft={true}
            index={2}
          />
          
          <div className="grid grid-cols-4 gap-3 mt-6">
            <div className="bg-gray-100 p-3 rounded-lg text-center">
              <div className="font-bold text-gray-800 text-sm">PET</div>
              <p className="text-[10px] text-gray-600">Outer print layer</p>
            </div>
            <div className="bg-gray-200 p-3 rounded-lg text-center">
              <div className="font-bold text-gray-800 text-sm">AL</div>
              <p className="text-[10px] text-gray-600">Aluminum foil barrier</p>
            </div>
            <div className="bg-gray-300 p-3 rounded-lg text-center">
              <div className="font-bold text-gray-800 text-sm">NY/OPA</div>
              <p className="text-[10px] text-gray-600">Nylon puncture support</p>
            </div>
            <div className="bg-neutral-100 p-3 rounded-lg text-center border" style={{ borderColor: primaryThemeColor }}>
              <div className="font-bold text-sm" style={{ color: primaryThemeColor }}>CPP</div>
              <p className="text-[10px] text-neutral-600">High-temp sealant</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'high-temp',
      title: 'High-Temperature Sterilization',
      icon: <Thermometer className="h-5 w-5" style={{ color: primaryThemeColor }} />,
      content: (
        <div className="space-y-8">
          <AlternatingSection
            image="/imgs/function/retort/high-temp.webp"
            imageAlt="High-Temperature Sterilization Ready"
            title="Withstands 121–135°C for 30–50 Minutes"
            titleCn="SuitableWithHighTemperatureSteamingKillBacteria"
            content="Our retort pouches are designed for commercial sterilization at 121–135°C (up to 250°F) for 30–50 minutes without seal failure. Perfect for retort processing lines producing shelf-stable ready meals."
            contentCn="OurSteamingBagCanIn 121–135℃（HighReach 250°F）Continuous 30–50 DivideClockMaintainSealStable，SuitableWithBusinessIndustrySteamingKillBacteriaProductionLine，ProductionRoom TemperatureProtectQualityReady-to-EatMeal。"
            imageLeft={false}
            index={3}
          />
        </div>
      )
    },
    {
      id: 'barrier',
      title: 'Extreme Barrier Protection',
      icon: <Shield className="h-5 w-5" style={{ color: primaryThemeColor }} />,
      content: (
        <div className="space-y-8">
          <AlternatingSection
            image="/imgs/function/retort/barrier.webp"
            imageAlt="Extreme Barrier Protection"
            title="Oxygen, Moisture & Light Barrier"
            titleCn="ExtremeUltimateBarrierProtection"
            content="The aluminum foil layer provides extreme barrier protection: keeps oxygen out and flavor in, controls moisture to protect texture, shields from light to reduce nutrient loss. Maintains food quality for extended shelf life."
            contentCn="Aluminum FoilLayerProvideExtremeUltimateBarrierProtection：BarrierOxygenLock InFlavor，ControlMadeWaterDivideProtectionOpeningFeel，Light BlockingReduceCampNurtureFlowLose。DimensionHoldFoodQuality，ExtendLong Shelf Life。"
            imageLeft={true}
            index={4}
          />
        </div>
      )
    },
    {
      id: 'seals',
      title: 'Strong Hermetic Seals',
      icon: <CheckCircle className="h-5 w-5" style={{ color: primaryThemeColor }} />,
      content: (
        <div className="space-y-8">
          <AlternatingSection
            image="/imgs/function/retort/stront-seals.webp"
            imageAlt="Strong Hermetic Seals"
            title="Designed to Prevent Leaks and Bursting"
            titleCn="SturdyAirtightSeal"
            content="Our retort pouches feature strong, hermetic seals with optimized seal width and corner radius. Designed to prevent leaks and survive retort pressure without bursting, ensuring product safety and integrity."
            contentCn="OurSteamingBagToolHaveSturdyOfAirtightSeal，ExcellentizationDoneSealWidthAndRoundAngleHalfPath。DesignUseAtAntiLeakage，AndInSteamingPressurePowerUnderNotBurstBag，EnsureProductSafeAndCompleteProperty。"
            imageLeft={false}
            index={5}
          />
        </div>
      )
    },
    {
      id: 'convenience',
      title: 'Ready-to-Heat Convenience',
      icon: <Zap className="h-5 w-5" style={{ color: primaryThemeColor }} />,
      content: (
        <div className="space-y-8">
          <AlternatingSection
            image="/imgs/function/retort/ready-to-heat.webp"
            imageAlt="Ready-to-Heat Convenience Features"
            title="Easy to Open, Ready to Eat"
            titleCn="CanHeating，EasyOpen"
            content="Optional convenience features include tear notches for easy opening, zippers for resealing, spout attachments for liquids, and microwave-friendly designs for heat-and-eat meals. No can opener or extra dishes needed."
            contentCn="OptionalConvenientBenefitFunctionCanPackIncluding：TearOpeningSideConvenientOpen、ZipperCanReseal、SpoutSuitableSuitableLiquid、OptionalMicrowaveHeatingDesignBagInImmediatelyHeatReady-to-Eat。NoRequireOpenCanDeviceAndExtraOutsideMealTool。"
            imageLeft={true}
            index={6}
          />
        </div>
      )
    },
    {
      id: 'shelf-stable',
      title: 'Shelf-Stable Ready Meals',
      icon: <Package className="h-5 w-5" style={{ color: primaryThemeColor }} />,
      content: (
        <div className="space-y-8">
          <AlternatingSection
            image="/imgs/function/retort/shelf-stable.webp"
            imageAlt="Shelf-Stable Ready Meals"
            title="Less Packaging Weight, Same Protection"
            titleCn="MoreLightPackagingAlsoCanAchieveRoom TemperatureReady-to-EatMeal"
            content="Replace heavy cans and glass jars with lightweight flexible retort pouches. Perfect for curries, chili, pasta sauces, soups, baby food, pet food and more. Stand-up or flat pouch formats available."
            contentCn="UseLightVolumeSoftPropertySteamingBagAlternativeTraditionalJars and Bottles。SuitableSuitableCurry、SpicySauce、IntentFaceSauce、SoupProduct、BabyFood、PetFoodEtc。OptionalStand-Up PouchesOrFlatBagStyle。"
            imageLeft={false}
            index={7}
          />
        </div>
      )
    },
    {
      id: 'logistics',
      title: 'Space & Cost Efficiency',
      icon: <Package className="h-5 w-5" style={{ color: primaryThemeColor }} />,
      content: (
        <div className="space-y-8">
          <AlternatingSection
            image="/imgs/function/retort/more-meals.webp"
            imageAlt="More Meals Per Pallet"
            title="More Meals Per Pallet"
            titleCn="More Meals Per Pallet"
            content="Lightweight, stackable retort pouches reduce shipping and storage costs significantly compared to cans and jars. More meals per pallet means lower logistics costs and smaller carbon footprint."
            contentCn="LightVolumeCanFlatShopStackStackOfSteamingBag，ComparedJars and BottlesLargeWidthReduceLowTransportationAndWarehouseStoreCost。More Meals Per Pallet，IntentTasteingMoreLowOfMaterialFlowCostAndMoreSmallOfCarbon Footprint。"
            imageLeft={true}
            index={8}
          />
        </div>
      )
    },
    {
      id: 'low-moq',
      title: '100 pcs Low MOQ',
      icon: <Tag className="h-5 w-5" style={{ color: primaryThemeColor }} />,
      content: (
        <div className="space-y-8">
          <AlternatingSection
            image="/imgs/function/retort/100pcs.webp"
            imageAlt="100 pcs Low MOQ"
            title="Start Small, Scale Fast"
            titleCn="Small BatchStartStep，FastPlaceLarge"
            content="Our digital printing technology enables minimum orders of just 100 pieces for printed trial runs. Perfect for product launches, sampling, and new flavor testing without large inventory risk."
            contentCn="OurDigitalPrintingTechnologySupportPrintingTrySingleOnlyRequire 100 PackMinimum Order。SuitableSuitableUpNew、StrikeStyleAndSmall BatchFlavorTest，NoRequireBearLargeVolumeInventoryRisk。"
            imageLeft={false}
            index={10}
          />
          
          <div className="p-6 rounded-xl border text-center shadow-sm" 
               style={{ borderColor: primaryThemeColor, backgroundColor: isPouchDomain ? 'rgba(16, 185, 129, 0.05)' : 'rgba(139, 92, 246, 0.05)' }}>
            <div className="text-4xl font-extrabold mb-2" style={{ color: primaryThemeColor }}>100 pcs</div>
            <p className="font-bold text-neutral-800">Minimum Trial Order for Custom Prints</p>
            <p className="text-sm text-neutral-600 mt-2">Test your new product range and multiple designs without large stock inventory risk.</p>
          </div>
        </div>
      )
    },
    {
      id: 'digital-print',
      title: 'Full-Color Digital Printing',
      icon: <Printer className="h-5 w-5" style={{ color: primaryThemeColor }} />,
      content: (
        <div className="space-y-8">
          <AlternatingSection
            image="/imgs/function/retort/Full-color digital printing.webp"
            imageAlt="Full-Color Digital Printing"
            title="No Plate Fees, Photo-Quality Graphics"
            titleCn="FullColorDigitalPrinting"
            content="Digital printing eliminates plate fees, making it ideal for short runs and multiple SKUs. Print multiple designs in one production run with photo-quality graphics perfect for premium branding."
            contentCn="DigitalPrintingNoRequireMadeEditionFee，SuitableSuitableSmall BatchAndMultiple SKU。MultipleUnit SKU CanMixSuitableSameBatchProduction，PhotoPieceGradePatternSuitableWithPremiumBrandFormElephant。"
            imageLeft={true}
            index={11}
          />
        </div>
      )
    },
    {
      id: 'multi-sku',
      title: 'Low MOQ for Many SKUs',
      icon: <Package className="h-5 w-5" style={{ color: primaryThemeColor }} />,
      content: (
        <div className="space-y-8">
          <AlternatingSection
            image="/imgs/function/retort/Launch a full flavor line with low MOQ.webp"
            imageAlt="Low MOQ for Many SKUs"
            title="Launch a Full Flavor Line with Low MOQ"
            titleCn="LowMinimum OrderImmediatelyCanCoverMultipleFlavor"
            content="Digital printing makes it easy to launch multiple flavors and designs without large inventory risk. Just 100 pieces per SKU means you can test Green Curry, Tomato Soup, Beef Stew, and Vegan Chili all at once."
            contentCn="DigitalPrintingLetYouLightLooseTestPackagingAndFlavor，AndNotPressureLargeVolumeInventory。EachUnitFlavorOnlyRequire 100 Pack，CanWithMeanwhileTestGreenCurry、TimeTomato Soup、Braised BeefMeat、ElementPepperEtcMultipleFlavor。"
            imageLeft={false}
            index={12}
          />
        </div>
      )
    },
    {
      id: 'custom-system',
      title: 'Design Your Retort System',
      icon: <Package className="h-5 w-5" style={{ color: primaryThemeColor }} />,
      content: (
        <div className="space-y-8">
          <AlternatingSection
            image="/imgs/function/retort/custom-retort.webp"
            imageAlt="Design Your Custom Retort System"
            title="Design Your Custom Retort Packaging"
            titleCn="And Achieve Pack TogetherDesignYouOfProfessionalBelongSteamingPackagingSolution"
            content="Three simple steps: 1) Choose pouch size, shape and format (flat or stand-up), 2) Select retort structure and barrier level, 3) Add your branding, artwork and features. From baby food to curries and pet meals, one retort system for your whole line."
            contentCn="Three Simple Steps：1) ChooseBagChildDimensions、OutsideFormAndStyle（FlatBagOrStand-Up Pouches），2) ChooseSteamingStructureAndBarrier Level，3) AddEnterYouOfBrand、PatternAndFunctionCanDetails。FromBabyFoodToCurryAndPetMeal，OneSetSteamingSystemCoverWholeStripProductLine。"
            imageLeft={true}
            index={9}
          />
          
          <div className="bg-neutral-50 p-6 rounded-xl border border-neutral-200">
            <h4 className="font-bold text-neutral-900 mb-4">3 Steps to Your Custom Retort Pouch</h4>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0" style={{ backgroundColor: primaryThemeColor }}>1</div>
                <div>
                  <p className="font-semibold text-neutral-800 text-sm">Choose size & format</p>
                  <p className="text-xs text-neutral-500">ChooseDimensionsAndStyle</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0" style={{ backgroundColor: primaryThemeColor }}>2</div>
                <div>
                  <p className="font-semibold text-neutral-800 text-sm">Select structure & barrier</p>
                  <p className="text-xs text-neutral-500">ChooseStructureAndBarrier Level</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0" style={{ backgroundColor: primaryThemeColor }}>3</div>
                <div>
                  <p className="font-semibold text-neutral-800 text-sm">Add branding & artwork</p>
                  <p className="text-xs text-neutral-500">AddEnterBrandAndPattern</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'trust-eeat',
      title: 'Why Trust Achieve Pack?',
      icon: <Award className="h-5 w-5" style={{ color: primaryThemeColor }} />,
      content: (
        <div className="space-y-8">
          <div className="bg-gradient-to-r from-neutral-50 to-neutral-100 p-6 rounded-xl border border-neutral-200">
            <h3 className="text-xl font-bold text-neutral-900 mb-4">Industry-Leading Expertise in Retort Packaging</h3>
            <p className="text-neutral-700 text-sm leading-relaxed mb-4">
              With over 13 years of specialized engineering in flexible food-grade packaging materials, {brand.name} has supplied retort pouches to baby food brands, wet pet food brands, and ready meal developers across North America, Europe, and Asia-Pacific.
            </p>
            <p className="text-neutral-700 text-sm leading-relaxed">
              Our BRCGS Global Standard and ISO-certified cleanroom manufacturing lines produce custom <Link to="/pricing" className="text-primary-600 underline hover:text-primary-800">retort pouches</Link> using 100% FDA-compliant, food-safe high-temperature polymers.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-white p-4 rounded-xl border border-neutral-200 text-center shadow-sm">
              <FileCheck className="h-8 w-8 mx-auto mb-2 text-blue-600" />
              <h4 className="font-bold text-neutral-900 text-sm">FDA Compliant</h4>
              <p className="text-[10px] text-neutral-500">Food Contact Safe Material</p>
            </div>
            <div className="bg-white p-4 rounded-xl border border-neutral-200 text-center shadow-sm">
              <Shield className="h-8 w-8 mx-auto mb-2 text-green-600" />
              <h4 className="font-bold text-neutral-900 text-sm">BRC Certified</h4>
              <p className="text-[10px] text-neutral-500">GFSI Food Safe Standard</p>
            </div>
            <div className="bg-white p-4 rounded-xl border border-neutral-200 text-center shadow-sm">
              <Building2 className="h-8 w-8 mx-auto mb-2 text-purple-600" />
              <h4 className="font-bold text-neutral-900 text-sm">500+ Food Brands</h4>
              <p className="text-[10px] text-neutral-500">Trusted Industry Supply</p>
            </div>
            <div className="bg-white p-4 rounded-xl border border-neutral-200 text-center shadow-sm">
              <Globe className="h-8 w-8 mx-auto mb-2 text-amber-600" />
              <h4 className="font-bold text-neutral-900 text-sm">13+ Years</h4>
              <p className="text-[10px] text-neutral-500">Autoclave Packaging Experts</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'cta',
      title: 'Ready to Get Started?',
      icon: <Flame className="h-5 w-5 text-white" />,
      content: (
        <div className="bg-gradient-to-br from-neutral-800 to-neutral-900 text-white p-8 rounded-xl border border-neutral-700 shadow-lg">
          <h3 className="text-2xl font-bold mb-6 text-center">Choose How You'd Like to Connect</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white/5 backdrop-blur p-6 rounded-lg text-center border border-white/10 hover:border-white/20 transition">
              <Calendar className="h-8 w-8 mx-auto mb-3 text-neutral-300" />
              <h4 className="font-semibold mb-2">Book a Consultation</h4>
              <p className="text-xs text-white/60 mb-4">30-min free session with our engineering team</p>
              <button 
                onClick={openCalendly} 
                className="w-full bg-white text-neutral-900 py-2.5 rounded-lg text-sm font-semibold hover:bg-neutral-100 transition cursor-pointer"
              >
                Schedule Free Call
              </button>
            </div>
            <div className="bg-white/5 backdrop-blur p-6 rounded-lg text-center border border-white/10 hover:border-white/20 transition">
              <Mail className="h-8 w-8 mx-auto mb-3 text-neutral-300" />
              <h4 className="font-semibold mb-2">Request an Instant Quote</h4>
              <p className="text-xs text-white/60 mb-4">Send dimensions and get detailed pricing breaks</p>
              <a 
                href={`mailto:${brand.email}?subject=Digital Printed Retort Pouch Quote - VitoPouch`} 
                className="block w-full py-2.5 rounded-lg text-sm font-semibold text-center border border-white/30 hover:border-white/50 text-white transition"
              >
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
      question: "Why does retorting eliminate the need for a degassing valve in fermented foods?",
      answer: "During commercial retort (121°C–130°C for 30 minutes), the high heat completely pasteurizes the food, destroying all active fermenting yeasts, enzymes, and gas-producing bacteria. Since no further fermentation occurs within the hermetically sealed pouch during its shelf life, no carbon dioxide is generated. This renders expensive one-way degassing valves entirely unnecessary, saving up to $0.20+ per bag."
    },
    {
      question: "What temperature and pressure profiles can these retort bags handle?",
      answer: "VitoPouch retort bags are engineered using specialty Cast Polypropylene (CPP) and nylon laminates that withstand autoclave processing up to 135°C (275°F) at up to 0.25 MPa counter-pressure. This ensures the hermetic seals remain intact and will not leak, rupture, or delaminate during heating or cooling cycles."
    },
    {
      question: "How do retort pouches compare to glass jars in logistics carbon emissions?",
      answer: "Glass jars represent a massive logistics carbon liability. A pallet of empty glass jars weighs roughly 95% more than the equivalent capacity of flat, unfilled VitoPouch bags (e.g. ~50 kg for 5,000 pouches vs. ~2,500 kg for 5,000 glass jars). Switching to pouches slashes shipping fuel consumption, reduces warehousing space by up to 85%, and eliminates transport damage due to glass fracturing."
    },
    {
      question: "Are these retort pouches safe for food contact?",
      answer: "Yes, 100%. All films used in VitoPouch are BRCGS certified and fully comply with US FDA Regulation 21 CFR 177.1390 (for high-temperature food laminates) and European Commission Regulation (EU) No 10/2011, ensuring zero toxic migration under extreme heat."
    },
    {
      question: "Can I print multiple product designs/flavors in one custom order?",
      answer: "Absolutely. Thanks to our advanced digital printing setup, we do not require traditional rotogravure copper printing plates. This allows us to group multiple SKUs (e.g. Mild Kimchi, Spicy Kimchi, Vegan Kimchi) into a single production run from an MOQ of just 100 pieces, eliminating hundreds of dollars in plate fees."
    },
    {
      question: "What is the typical shelf life of food inside a VitoPouch?",
      answer: "Thanks to our 4-layer aluminum foil barrier structure (PET/AL/NY/CPP), VitoPouch provides a near-perfect barrier to oxygen, moisture, and light. When combined with correct commercial sterilization, ready meals can safely achieve a shelf life of 12 to 24 months stored at ambient room temperatures without refrigeration."
    }
  ]

  const relatedLinks = [
    { title: "Recyclable Mono-PE", url: "/materials/recyclable-mono-pe", description: "Recyclable single-material options" },
    { title: "PCR Materials", url: "/materials/pcr", description: "Post-consumer recycled content" },
    { title: "High Barrier Films", url: "/features/barrier-options", description: "Aluminum and metallized options" },
    { title: "Compostable Pouches", url: "/materials/compostable", description: "Eco-friendly alternatives" },
    { title: "Stand Up Pouches", url: "/packaging/stand-up-pouches", description: "Self-standing retort pouches" },
    { title: "Flat Pouches", url: "/packaging/flat-pouches", description: "Traditional flat retort bags" },
    { title: "Spout Pouches", url: "/packaging/spout-pouches", description: "Liquid-dispensing options" },
    { title: "Barrier Options", url: "/features/barrier-options", description: "Choose your protection level" },
    { title: "Reclosure Options", url: "/features/reclosure-options", description: "Zippers and reseal features" },
    { title: "Printing Capabilities", url: "/printing/digital-printing", description: "Digital and rotogravure" }
  ]

  return (
    <>
      <SEOPageLayout 
        heroBgColor="#171717"
        title="Digital Printed Retort Bags | VitoPouch 'Soft Can' High-Barrier Solution"
        description="Custom digital printed retort pouches with 100 pcs low MOQ. VitoPouch multi-layer high-barrier structures withstand 121-135°C sterilization. The perfect eco-friendly, valve-free shelf-stable alternative to glass jars."
        keywords={['retort pouches', 'retort bags', 'digital printed pouches', 'sterilization pouches', 'ready meal packaging', 'baby food pouches', 'pet food bags', 'shelf stable packaging', 'high barrier pouches', 'low MOQ pouches', 'aluminum foil pouches', 'vitopouch', 'kimchi pouch', 'soft can packaging']}
        canonicalUrl="https://achievepack.com/function/digital-printed-retort-bags"
        heroTitle="VitoPouch™ Retort Pouches"
        heroSubtitle={isPouchDomain ? "100 pcs Low MOQ · High-Barrier · 'Soft Can' Solution for Startups" : "Enterprise High-Barrier Retort Solutions · 121–135°C Autoclave Ready"}
        heroImage="/imgs/function/retort/retort-hero.webp"
        heroImageAlt="Achieve Pack Digital Printed High-Barrier Retort Pouches"
        introSummary={isPouchDomain ? "Launch your shelf-stable gourmet food line with digital printed VitoPouch. Minimum runs start at just 100 bags. Save costs and test multiple designs easily!" : "Upgrade from heavy glass jars and complex valves. VitoPouch is an unbreakable 'soft can' laminate designed for high-speed autoclave lines, BRC and FDA compliant."}
        sections={sections}
        faqs={faqs}
        relatedLinks={relatedLinks}
        ctaTitle="Ready to Design Your Retort Pouches?"
        ctaDescription="Get custom retort pouches with full bleed digital printing. Food-safe, high-barrier, and sterilization-ready."
        ctaButtonText="Get a Quote"
      />


      {/* Gallery Lightbox Modal */}
      {galleryEnlarged && (
        <div 
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
          onClick={() => setGalleryEnlarged(null)}
        >
          <button onClick={() => setGalleryEnlarged(null)} className="absolute top-4 right-4 text-white hover:text-neutral-300 transition">
            <X className="h-8 w-8" />
          </button>
          <button onClick={(e) => { e.stopPropagation(); navigateGallery('prev'); }} className="absolute left-4 text-white hover:text-neutral-300 transition p-2 bg-white/5 rounded-full">
            <ChevronLeft className="h-8 w-8" />
          </button>
          <img src={galleryEnlarged.src} alt={retortGallery[galleryEnlarged.index]?.title || 'Enlarged view'} className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl" onClick={(e) => e.stopPropagation()} />
          <button onClick={(e) => { e.stopPropagation(); navigateGallery('next'); }} className="absolute right-4 text-white hover:text-neutral-300 transition p-2 bg-white/5 rounded-full">
            <ChevronRight className="h-8 w-8" />
          </button>
          <div className="absolute bottom-6 text-center text-white max-w-xl px-4 bg-black/50 backdrop-blur-md py-2.5 rounded-xl">
            <p className="text-base font-semibold">{retortGallery[galleryEnlarged.index]?.title}</p>
            <p className="text-xs text-neutral-300 mt-1">{retortGallery[galleryEnlarged.index]?.desc}</p>
            <p className="text-[10px] mt-2 text-neutral-400 font-semibold">{galleryEnlarged.index + 1} / {retortGallery.length}</p>
          </div>
        </div>
      )}
    </>
  )
}

export default DigitalPrintedRetortBagsPage
