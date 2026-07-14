import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { Coffee, Package, CheckCircle, Award, Calendar, MessageCircle, Target, Shield, Zap, Globe, BarChart3, ArrowLeftRight, TrendingUp, ShoppingBag, Sparkles, Microscope, Beaker, Layers, Wind, Droplets, Recycle } from 'lucide-react'
import SEOPageLayout from '../../components/SEOPageLayout'
import ClickableImage from '../../components/ClickableImage'
import { useCalendly } from '../../contexts/CalendlyContext'
import { useTranslation, Trans } from "react-i18next";

const GreenCoffeeMaterialsPage: React.FC = () => {
    const { t } = useTranslation();
    const p = 'seoPages.pages.greenCoffeeMaterials';
  const { openCalendly } = useCalendly()

  const IMAGES = {
    hero: '/imgs/topics/green-coffee-materials-page/hero.jpg',
    process: '/imgs/topics/green-coffee-materials-page/process.jpg',
    comparison: '/imgs/topics/green-coffee-materials-page/comparison.jpg'
  }

  const sections = [
    {
      id: 'empathy-hook',
      title: 'The Silent Killer of Specialty Coffee',
      icon: <Target className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p className="text-lg font-medium text-neutral-900 leading-relaxed">
            You spend hours meticulously crafting the perfect roast profile, carefully monitoring temperatures to unlock those complex floral and chocolate notes. But what happens when you seal those prized beans into cheap, non-recyclable foil bags? The volatile aromatic compounds start breaking down. Oxygen creeps in. CO2 builds up dangerously. Your beautiful roast becomes stale before it ever reaches the consumer's grinder, destroying your brand's reputation and your hard-earned margins.
          </p>
          <p className="text-base">
            At Achieve Pack, we specialize in high-barrier engineering. We replace non-recyclable multi-layer foil with advanced mono-materials and certified compostables that preserve your roast's complex aromatic profile while meeting global sustainability mandates.
          </p>
        </div>
      )
    },
    {
      id: 'hero-problem',
      title: 'Green Coffee Packaging: Engineering the Perfect Barrier',
      icon: <Layers className="h-5 w-5 text-primary-600" />,
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
        </div>
      )
    },
    {
      id: 'compostable-coffee',
      title: 'Home Compostable: The Ultimate Circular Solution',
      icon: <Target className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-6 text-neutral-700">
          <p>
            {t(`${p}.forSpecialtyRoasters`)}<strong>{t(`${p}.homeCompostable`)}</strong> {t(`${p}.materialsTuvAustriaOkCompostHo`)}</p>
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
    }
  ]

  return (
    <>
      <Helmet>
        <title>{t(`${p}.greenCoffeePackagingMaterialsH`)}</title>
        <meta name="description" content="Master the technical landscape of green coffee packaging. 800+ words on high-barrier mono-PE, compostable coffee bags, OTR/WVTR science, and aroma protection." />
        <link rel="canonical" href="https://achievepack.com/topics/green-coffee-materials" />
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
        heroImage={IMAGES.hero}
      />
    </>
  )
}

export default GreenCoffeeMaterialsPage
