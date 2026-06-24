import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { Coffee, Package, CheckCircle, Award, Calendar, MessageCircle, Target, Shield, Zap, Globe, BarChart3, ArrowLeftRight, TrendingUp, ShoppingBag, Sparkles, Microscope, Beaker, Layers, Wind, Droplets  , Recycle } from 'lucide-react'
import SEOPageLayout from '../../components/SEOPageLayout'
import ClickableImage from '../../components/ClickableImage'
import { useCalendly } from '../../contexts/CalendlyContext'
import { useTranslation, Trans } from "react-i18next";

const GreenCoffeeMaterialsPage: React.FC = () => {
    const { t } = useTranslation();
    const p = 'seoPages.pages.greenCoffeeMaterials';
  const { openCalendly } = useCalendly()

  const sections = [
    {
      id: 'hero-problem',
      title: 'Green Coffee Packaging: Engineering the Perfect Barrier',
      icon: <Target className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <div className="bg-gradient-to-r from-stone-50 to-amber-50 p-6 rounded-lg border border-stone-200 shadow-sm">
            <p className="text-lg font-medium text-neutral-900 mb-4">
              {t(`${p}.coffeeIsOneOfTheMostChemically`)}<strong>{t(`${p}.volatileAromaticCompounds`)}</strong> {t(`${p}.whileMeeting2026Sustainability`)}<strong>{t(`${p}.advancedBarrierEngineering`)}</strong>.
            </p>
            <div className="grid md:grid-cols-2 gap-4 mt-4">
              <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-amber-800">
                <h4 className="font-semibold text-amber-900">{t(`${p}.theCoffeeDegradationCrisis`)}</h4>
                <ul className="text-sm text-neutral-600 mt-2 space-y-1">
                  <li>{t(`${p}.oxidationOfSensitiveCoffeeOils`)}</li>
                  <li>{t(`${p}.moistureInducedStaleness`)}</li>
                  <li>{t(`${p}.co2DegassingPressureIssues`)}</li>
                  <li>{t(`${p}.traditionalNonRecyclableFoilLa`)}</li>
                </ul>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-stone-500">
                <h4 className="font-semibold text-stone-700">{t(`${p}.theAchievePackSolution`)}</h4>
                <ul className="text-sm text-neutral-600 mt-2 space-y-1">
                  <li>{t(`${p}.monoPeHighBarrierMetalFree`)}</li>
                  <li>{t(`${p}.certifiedHomeCompostableStruct`)}</li>
                  <li>{t(`${p}.integratedRecyclableDegassingV`)}</li>
                  <li>{t(`${p}.otrWvtrPerformanceMatchingFoil`)}</li>
                </ul>
              </div>
            </div>
          </div>
          <p className="mt-4 leading-relaxed">
            {t(`${p}.atAchievePackWeSpecializeIn`)}<strong>{t(`${p}.greenCoffeeMaterials`)}</strong> {t(`${p}.thatDonTCompromiseOnFreshnessB`)}<strong>{t(`${p}.highBarrierEvoh`)}</strong> {t(`${p}.and`)}<strong>{t(`${p}.mdoPe`)}</strong> {t(`${p}.technologyWeProvide100Recyclab`)}</p>
        </div>
      )
    },
    {
      id: 'barrier-science',
      title: 'Aroma Protection: The Science of Gas Barriers',
      icon: <Wind className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-6 text-neutral-700">
          <p>
            {t(`${p}.coffeeRequiresAnAbsoluteBarrie`)}<strong>{t(`${p}.spectrophotometry`)}</strong> {t(`${p}.and`)}<strong>{t(`${p}.moconTesting`)}</strong> {t(`${p}.toVerifyOurBarrierPerformance`)}</p>
          
          <div className="grid md:grid-cols-3 gap-6 mt-6">
            <div className="bg-neutral-50 p-6 rounded-xl border border-neutral-200">
              <div className="p-3 bg-amber-100 rounded-lg w-fit mb-4">
                <Wind className="h-6 w-6 text-amber-600" />
              </div>
              <h4 className="font-bold text-neutral-900">{t(`${p}.otrLt01`)}</h4>
              <p className="text-sm text-neutral-600">{t(`${p}.oxygenTransmissionRatesBelow01`)}</p>
            </div>
            <div className="bg-neutral-50 p-6 rounded-xl border border-neutral-200">
              <div className="p-3 bg-stone-100 rounded-lg w-fit mb-4">
                <Droplets className="h-6 w-6 text-stone-600" />
              </div>
              <h4 className="font-bold text-neutral-900">{t(`${p}.wvtrLt01`)}</h4>
              <p className="text-sm text-neutral-600">{t(`${p}.waterVaporTransmissionRatesTha`)}</p>
            </div>
            <div className="bg-neutral-50 p-6 rounded-xl border border-neutral-200">
              <div className="p-3 bg-neutral-100 rounded-lg w-fit mb-4">
                <Zap className="h-6 w-6 text-neutral-600" />
              </div>
              <h4 className="font-bold text-neutral-900">{t(`${p}.oneWayValves`)}</h4>
              <p className="text-sm text-neutral-600">{t(`${p}.recyclableDegassingValvesThatA`)}</p>
            </div>
          </div>

          <div className="bg-neutral-100 p-2 rounded-xl border-2 border-neutral-200 mt-8">
            <ClickableImage 
              src="/imgs/pouch-shape/ads/a_achieve_pack_base_structure_closeup_4216368.webp" 
              alt="High barrier coffee packaging structure" 
              className="w-full h-auto rounded-lg shadow-sm"
              caption="EEAT Insight: Advanced EVOH barrier integration for professional-grade coffee freshness"
            />
          </div>
        </div>
      )
    },
    {
      id: 'compostable-coffee',
      title: 'Home Compostable: The Ultimate Circular Solution',
      icon: <Leaf className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-6 text-neutral-700">
          <p>
            {t(`${p}.forSpecialtyRoasters`)}<strong>{t(`${p}.homeCompostable`)}</strong> {t(`${p}.materialsTuvAustriaOkCompostHo`)}</p>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h4 className="font-bold text-neutral-900">{t(`${p}.theCompostableStack`)}</h4>
              <ul className="space-y-3 text-sm">
                <li className="p-4 bg-white border border-neutral-200 rounded-xl shadow-sm">
                  <h5 className="font-bold text-neutral-900">{t(`${p}.nkPaperPbsBioBarrier`)}</h5>
                  <p className="text-xs text-neutral-600 mt-1">{t(`${p}.a100PlasticFreeByWeightStructu`)}</p>
                </li>
                <li className="p-4 bg-white border border-neutral-200 rounded-xl shadow-sm">
                  <h5 className="font-bold text-neutral-900">{t(`${p}.highGreaseResistance`)}</h5>
                  <p className="text-xs text-neutral-600 mt-1">{t(`${p}.engineeredToHandleTheNaturalOi`)}</p>
                </li>
                <li className="p-4 bg-white border border-neutral-200 rounded-xl shadow-sm">
                  <h5 className="font-bold text-neutral-900">{t(`${p}.certifiedDegassing`)}</h5>
                  <p className="text-xs text-neutral-600 mt-1">{t(`${p}.industrialAndHomeCompostableVa`)}</p>
                </li>
              </ul>
            </div>
            <div className="bg-neutral-50 p-6 rounded-xl border border-neutral-200 flex flex-col justify-center">
              <h4 className="font-bold text-neutral-900 mb-2">{t(`${p}.sustainableRoastingRoi`)}</h4>
              <p className="text-sm text-neutral-600 leading-relaxed">
                {t(`${p}.specialtyCoffeeConsumersAreWil`)}<strong>{t(`${p}.verifiableSustainablePackaging`)}</strong>{t(`${p}.achievePackProvidesTheCertific`)}</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'recyclable-mono-pe',
      title: 'Recyclable Mono-PE: The Industrial Standard',
      icon: <Recycle className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-6 text-neutral-700">
          <p>
            {t(`${p}.forLargeScaleRetailers`)}<strong>{t(`${p}.recyclableMonoPe`)}</strong> {t(`${p}.isThePreferredStructureItIsFul`)}</p>
          
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="bg-neutral-100 p-2 rounded-xl border-2 border-neutral-200">
              <ClickableImage 
                src="/imgs/pouch-shape/ads/a_achieve_pack_3side_seal_closeup_7717814.webp" 
                alt="Recyclable coffee pouch with mono-PE structure" 
                className="w-full h-auto rounded-lg shadow-sm"
                caption="Recycling Ready: High-barrier mono-PE coffee pouches optimized for curbside recovery"
              />
            </div>
            <div className="space-y-4">
              <h4 className="font-bold text-neutral-900">{t(`${p}.technicalFeatures`)}</h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-amber-600" />
                  <span><strong>{t(`${p}.mdoPeTechnology`)}</strong> {t(`${p}.enhancedStiffnessForBetterShel`)}</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-amber-600" />
                  <span><strong>{t(`${p}.metalFreeBarrier`)}</strong> {t(`${p}.microwaveSafeAndEasierToRecycl`)}</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-amber-600" />
                  <span><strong>{t(`${p}.highResolutionPrint`)}</strong> {t(`${p}.digitalOrRotogravureOptionsFor`)}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'cta',
      title: 'Fresh Coffee. Zero Waste.',
      icon: <MessageCircle className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="bg-gradient-to-br from-stone-800 to-amber-950 p-10 rounded-2xl text-white text-center shadow-2xl">
          <h3 className="text-3xl font-bold mb-6">{t(`${p}.expertiseAromaSustainability`)}</h3>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            {t(`${p}.readyToUpgradeYourCoffeePackag`)}</p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={openCalendly}
              className="flex items-center justify-center gap-2 bg-white text-stone-950 px-8 py-4 rounded-xl font-bold hover:bg-neutral-100 transition shadow-lg"
            >
              <Calendar className="h-5 w-5" />
              {t(`${p}.bookCoffeeStrategySession`)}</button>
            <Link
              to="/store"
              className="flex items-center justify-center gap-2 border-2 border-white text-white px-8 py-4 rounded-xl font-bold hover:bg-white/10 transition shadow-lg"
            >
              <ShoppingBag className="h-5 w-5" />
              {t(`${p}.orderCoffeeSamples`)}</Link>
          </div>
          <p className="mt-8 text-xs opacity-60 uppercase tracking-widest">
            {t(`${p}.aestheticFinishesHighBarrierRe`)}</p>
        </div>
      )
    }
  ]

  const faqs = [
    {
      question: "Do your sustainable pouches have degassing valves?",
      answer: "Yes. We offer both recyclable mono-PE valves and certified compostable valves to ensure your fresh-roasted coffee doesn't cause the pouch to burst while maintaining its environmental integrity."
    },
    {
      question: "Will mono-PE protect my coffee as well as aluminum foil?",
      answer: "Yes. Our advanced EVOH-integrated mono-PE structures achieve OTR (Oxygen Transmission Rate) levels equivalent to traditional foil-based bags, ensuring a 12-month shelf life."
    },
    {
      question: "Are your compostable bags certified?",
      answer: "Absolutely. All our compostable coffee materials are certified by TUV Austria (OK Compost Home and Industrial) and BPI, meeting EN 13432 and ASTM D6400 standards."
    },
    {
      question: "Can I print in small quantities for seasonal roasts?",
      answer: "Yes. Our digital HP Indigo technology allows for high-resolution custom printing with MOQs as low as 500 units per SKU, perfect for limited edition roasts and startups."
    }
  ]

  return (
    <>
      <Helmet>
        <title>{t(`${p}.greenCoffeePackagingMaterialsH`)}</title>
        <meta name="description" content="Master the technical landscape of green coffee packaging. 800+ words on high-barrier mono-PE, compostable coffee bags, OTR/WVTR science, and aroma protection." />
        <link rel="canonical" href="https://achievepack.com/topics/green-coffee-materials" />
        <meta name="keywords" content="green coffee packaging, sustainable coffee bags, mono-PE coffee pouches, compostable coffee packaging, aroma barrier coffee, coffee degassing valve" />
      </Helmet>

      <SEOPageLayout 
        heroBgColor="#44403c"
        title="Green Coffee Materials: Aroma Protection Engineering"
        description="Establishing technical authority in high-barrier sustainable coffee packaging and aroma preservation."
        keywords={['coffee packaging', 'sustainable barrier', 'aroma protection']}
        heroTitle="Fresh Coffee. Future-Proofed."
        heroSubtitle="High Barrier | Recyclable Mono-PE | Home Compostable | Degassing Valves"
        introSummary="Specialty coffee demands absolute barrier integrity. This guide provides the technical breakdown of how we replace non-recyclable multi-layer foil with high-performance mono-materials and certified compostables that preserve your roast's complex aromatic profile while meeting global sustainability mandates."
        sections={sections}
        faqs={faqs}
        schemaType="Article"
        heroImage="/imgs/topics/home-compostable-coffee-hero.png"
      />
    </>
  )
}

const Leaf = ({ className }: { className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="24" 
    height="24" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.5 21 2c-2 4-2.5 5.5-3.6 11.2A7 7 0 0 1 11 20z" />
    <path d="M11 20v-5" />
    <path d="M7 20h4" />
  </svg>
)

export default GreenCoffeeMaterialsPage
