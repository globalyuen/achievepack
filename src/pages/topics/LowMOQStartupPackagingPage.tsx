import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { Zap, Rocket, CheckCircle, Award, Calendar, MessageCircle, Target, Shield, Globe, BarChart3, ArrowLeftRight, TrendingUp, ShoppingBag, Sparkles, Microscope, Beaker, Layers, MousePointer2 } from 'lucide-react'
import SEOPageLayout from '../../components/SEOPageLayout'
import ClickableImage from '../../components/ClickableImage'
import { useCalendly } from '../../contexts/CalendlyContext'
import { useTranslation, Trans } from "react-i18next";

const LowMOQStartupPackagingPage: React.FC = () => {
    const { t } = useTranslation();
    const p = 'seoPages.pages.lowMOQStartupPackaging';
  const { openCalendly } = useCalendly()

  const sections = [
    {
      id: 'hero-problem',
      title: 'Low MOQ Startup Packaging: Engineering for Agile Growth',
      icon: <Target className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <div className="bg-gradient-to-r from-emerald-50 to-teal-50 p-6 rounded-lg border border-emerald-200 shadow-sm">
            <p className="text-lg font-medium text-neutral-900 mb-4">
              {t(`${p}.forStartupsHigh`)}<strong>{t(`${p}.minimumOrderQuantitiesMoqs`)}</strong> {t(`${p}.areTheBiggestBarrierToSustaina`)}</p>
            <div className="grid md:grid-cols-2 gap-4 mt-4">
              <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-emerald-600">
                <h4 className="font-semibold text-emerald-800">{t(`${p}.theStartupBarrier`)}</h4>
                <ul className="text-sm text-neutral-600 mt-2 space-y-1">
                  <li>{t(`${p}.traditionalMoqsOf20000Units`)}</li>
                  <li>{t(`${p}.highUpfrontCostsForPrintingPla`)}</li>
                  <li>{t(`${p}.riskOfDeadInventoryAndWaste`)}</li>
                  <li>{t(`${p}.inabilityToTestSeasonalSkus`)}</li>
                </ul>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-teal-500">
                <h4 className="font-semibold text-teal-800">{t(`${p}.theAchievePackSolution`)}</h4>
                <ul className="text-sm text-neutral-600 mt-2 space-y-1">
                  <li>{t(`${p}.moqsAsLowAs500UnitsPerSku`)}</li>
                  <li>{t(`${p}.zeroPlateFeesWithDigitalPrinti`)}</li>
                  <li>{t(`${p}.fast34WeekTurnaroundTimes`)}</li>
                  <li>{t(`${p}.enterpriseGradeSustainableMate`)}</li>
                </ul>
              </div>
            </div>
          </div>
          <p className="mt-4 leading-relaxed">
            {t(`${p}.atAchievePackWeServeAsThe`)}<strong>{t(`${p}.technicalIncubator`)}</strong> {t(`${p}.forTheNextGenerationOfSustaina`)}<strong>{t(`${p}.hpIndigoDigitalTechnology`)}</strong> {t(`${p}.andOptimizedSupplyChainLogisti`)}</p>
        </div>
      )
    },
    {
      id: 'agile-manufacturing',
      title: 'Agile Manufacturing: Zero Plate Fees',
      icon: <Zap className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-6 text-neutral-700">
          <p>
            {t(`${p}.theSecretToLowMoqsIs`)}<strong>{t(`${p}.digitalManufacturing`)}</strong>{t(`${p}.byEliminatingTheNeedForPhysica`)}</p>
          
          <div className="grid md:grid-cols-3 gap-6 mt-6">
            <div className="bg-neutral-50 p-6 rounded-xl border border-neutral-200">
              <div className="p-3 bg-emerald-100 rounded-lg w-fit mb-4">
                <Zap className="h-6 w-6 text-emerald-600" />
              </div>
              <h4 className="font-bold text-neutral-900">{t(`${p}.digitalPrecision`)}</h4>
              <p className="text-sm text-neutral-600">{t(`${p}.hpIndigo25kTechnologyEnsuresYo`)}</p>
            </div>
            <div className="bg-neutral-50 p-6 rounded-xl border border-neutral-200">
              <div className="p-3 bg-teal-100 rounded-lg w-fit mb-4">
                <BarChart3 className="h-6 w-6 text-teal-600" />
              </div>
              <h4 className="font-bold text-neutral-900">{t(`${p}.inventoryLean`)}</h4>
              <p className="text-sm text-neutral-600">{t(`${p}.orderOnlyWhatYouCanSellReduceW`)}</p>
            </div>
            <div className="bg-neutral-50 p-6 rounded-xl border border-neutral-200">
              <div className="p-3 bg-slate-100 rounded-lg w-fit mb-4">
                <Shield className="h-6 w-6 text-slate-600" />
              </div>
              <h4 className="font-bold text-neutral-900">{t(`${p}.scalableQuality`)}</h4>
              <p className="text-sm text-neutral-600">{t(`${p}.theExactSameHighBarrierCertifi`)}</p>
            </div>
          </div>

          <div className="bg-neutral-100 p-2 rounded-xl border-2 border-neutral-200 mt-8">
            <ClickableImage 
              src="/imgs/pouch-shape/ads/a_achieve_pack_base_structure_closeup_4216368.jpg" 
              alt="Premium low MOQ startup pouches" 
              className="w-full h-auto rounded-lg shadow-sm"
              caption="EEAT Insight: Low MOQ digital production eliminates the financial risk of sustainable market entry"
            />
          </div>
        </div>
      )
    },
    {
      id: 'market-testing',
      title: 'Rapid Market Testing: Fail Fast, Grow Faster',
      icon: <Rocket className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-6 text-neutral-700">
          <p>
            {t(`${p}.startupsNeedToPivotOurLowMoqMo`)}<strong>{t(`${p}.testDesignsFlavorsAndMarkets`)}</strong> {t(`${p}.withoutBeingLockedIntoAYearSWo`)}</p>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h4 className="font-bold text-neutral-900">{t(`${p}.theAgileGrowthLoop`)}</h4>
              <ul className="space-y-3 text-sm">
                <li className="p-4 bg-white border border-neutral-200 rounded-xl shadow-sm">
                  <h5 className="font-bold text-neutral-900">{t(`${p}.multiSkuVarietyPacks`)}</h5>
                  <p className="text-xs text-neutral-600 mt-1">{t(`${p}.combineMultipleDesignsInASingl`)}</p>
                </li>
                <li className="p-4 bg-white border border-neutral-200 rounded-xl shadow-sm">
                  <h5 className="font-bold text-neutral-900">{t(`${p}.iterativeDesign`)}</h5>
                  <p className="text-xs text-neutral-600 mt-1">{t(`${p}.updateYourBrandingOrRegulatory`)}</p>
                </li>
                <li className="p-4 bg-white border border-neutral-200 rounded-xl shadow-sm">
                  <h5 className="font-bold text-neutral-900">{t(`${p}.seasonalCollections`)}</h5>
                  <p className="text-xs text-neutral-600 mt-1">{t(`${p}.launchLimitedEditionSustainabl`)}</p>
                </li>
              </ul>
            </div>
            <div className="bg-neutral-50 p-6 rounded-xl border border-neutral-200 flex flex-col justify-center">
              <h4 className="font-bold text-neutral-900 mb-2">{t(`${p}.sustainableCredibility`)}</h4>
              <p className="text-sm text-neutral-600 leading-relaxed">
                {t(`${p}.byChoosing`)}<strong>{t(`${p}.certifiedRecyclableOrCompostab`)}</strong> {t(`${p}.materialsForYourLaunchYouBuild`)}</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'cta',
      title: 'Launch Your Sustainable Brand Today',
      icon: <MessageCircle className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="bg-gradient-to-br from-emerald-800 to-teal-950 p-10 rounded-2xl text-white text-center shadow-2xl">
          <h3 className="text-3xl font-bold mb-6">{t(`${p}.startSmallScaleSustainable`)}</h3>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            {t(`${p}.readyToLaunchYourProductWithEn`)}</p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={openCalendly}
              className="flex items-center justify-center gap-2 bg-white text-emerald-950 px-8 py-4 rounded-xl font-bold hover:bg-neutral-100 transition shadow-lg"
            >
              <Calendar className="h-5 w-5" />
              {t(`${p}.bookStartupStrategySession`)}</button>
            <Link
              to="/store"
              className="flex items-center justify-center gap-2 border-2 border-white text-white px-8 py-4 rounded-xl font-bold hover:bg-white/10 transition shadow-lg"
            >
              <ShoppingBag className="h-5 w-5" />
              {t(`${p}.orderStarterSamples`)}</Link>
          </div>
          <p className="mt-8 text-xs opacity-60 uppercase tracking-widest">
            {t(`${p}.moq500NoPlateFeesDigitalPrecis`)}</p>
        </div>
      )
    }
  ]

  const faqs = [
    {
      question: "What is your absolute minimum order quantity?",
      answer: "Utilizing our digital HP Indigo 25K press, we can offer custom printed pouches with MOQs as low as 500 units per SKU. This is ideal for startups and product testing."
    },
    {
      question: "Do I have to pay for printing plates?",
      answer: "No. With our digital manufacturing process, there are zero plate fees. You only pay for the material and the printing, which significantly lowers your startup capital requirements."
    },
    {
      question: "Can I scaled from 500 units to 50,000 later?",
      answer: "Absolutely. We are a full-scale manufacturer. Once your brand grows, we can seamlessly transition you to our high-speed rotogravure lines for lower per-unit costs at scale."
    },
    {
      question: "What sustainable materials are available at low MOQ?",
      answer: "We offer our entire range of sustainable materials at low MOQ, including 100% Recyclable Mono-PE, High-Barrier Kraft, and TUV-Certified Home Compostable films."
    }
  ]

  return (
    <>
      <Helmet>
        <title>{t(`${p}.lowMoqStartupPackagingAgileSus`)}</title>
        <meta name="description" content="The startup guide to sustainable packaging. 800+ words on low MOQ strategy, zero-plate digital printing, rapid market testing, and scalable circularity." />
        <link rel="canonical" href="https://achievepack.com/topics/low-moq-startup-packaging" />
        <meta name="keywords" content="low MOQ packaging, startup sustainable packaging, digital pouch printing, zero plate packaging, small batch pouches, agile packaging manufacturing" />
      </Helmet>

      <SEOPageLayout 
        heroBgColor="#064e3b"
        title="Low MOQ Startup Packaging: Launching the Future"
        description="Establishing technical authority in agile, low-risk sustainable manufacturing for emerging brands."
        keywords={['low MOQ packaging', 'startup sustainability', 'agile manufacturing']}
        heroTitle="Launch. Test. Scale."
        heroSubtitle="MOQ 500 | Zero Plate Fees | Digital Precision | 3-4 Week Turnaround"
        introSummary="For startups, the biggest barrier to sustainability is the high cost of entry. This guide outlines how we use advanced digital technology to provide low-MOQ, high-quality sustainable packaging—allowing you to launch your brand with professional integrity and zero waste."
        sections={sections}
        faqs={faqs}
        schemaType="Service"
        heroImage="/imgs/pouch-shape/ads/a_achieve_pack_base_structure_closeup_4216368.jpg"
      />
    </>
  )
}

export default LowMOQStartupPackagingPage
