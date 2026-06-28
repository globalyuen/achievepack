import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { Palette, Box, CheckCircle, Award, Calendar, MessageCircle, Target, Shield, Zap, Globe, Factory, BarChart3, ArrowLeftRight, TrendingUp, ShoppingBag, Sparkles, Microscope, Beaker, Layers, MousePointer2 } from 'lucide-react'
import SEOPageLayout from '../../components/SEOPageLayout'
import ClickableImage from '../../components/ClickableImage'
import { useCalendly } from '../../contexts/CalendlyContext'
import { useTranslation, Trans } from "react-i18next";

const CustomBrandPackagingPage: React.FC = () => {
    const { t } = useTranslation();
    const p = 'seoPages.pages.customBrandPackaging';
  const { openCalendly } = useCalendly()

  const sections = [
    {
      id: 'hero-problem',
      title: 'Structural Engineering Meets Brand Identity',
      icon: <Target className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg border border-blue-200">
            <p className="text-lg font-medium text-neutral-900 mb-4">
              {t(`${p}.customPackagingIsMoreThanJustA`)}<strong>{t(`${p}.engineeringDeliverable`)}</strong> {t(`${p}.thatMustBalanceStructuralInteg`)}</p>
            <div className="grid md:grid-cols-2 gap-4 mt-4">
              <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-indigo-500">
                <h4 className="font-semibold text-indigo-800">{t(`${p}.theDesignDilemma`)}</h4>
                <ul className="text-sm text-neutral-600 mt-2 space-y-1">
                  <li>{t(`${p}.maintainingColorAccuracyAcross`)}</li>
                  <li>{t(`${p}.optimizingDimensionsForShippin`)}</li>
                  <li>{t(`${p}.ensuringBarrierPropertiesMatch`)}</li>
                  <li>{t(`${p}.scalingFrom500To1000000Units`)}</li>
                </ul>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-green-500">
                <h4 className="font-semibold text-green-800">{t(`${p}.theAchievePackProcess`)}</h4>
                <ul className="text-sm text-neutral-600 mt-2 space-y-1">
                  <li>{t(`${p}.fullCadStructuralPrototyping`)}</li>
                  <li>{t(`${p}.g7MasterCertifiedColorMatching`)}</li>
                  <li>{t(`${p}.lowMoqDigitalHighSpeedGravure`)}</li>
                  <li>{t(`${p}.sustainableMaterialMatrixSelec`)}</li>
                </ul>
              </div>
            </div>
          </div>
          <p className="mt-4 leading-relaxed">
            {t(`${p}.atAchievePackWeTreatCustomBran`)}<strong>{t(`${p}.deltaEEColorDeviationControl`)}</strong> {t(`${p}.to`)}<strong>{t(`${p}.logisticsOptimizedSizing`)}</strong>{t(`${p}.ourGoalIsToEnsureYourBrandStan`)}</p>
        </div>
      )
    },
    {
      id: 'structural-engineering',
      title: 'Structural Engineering & Prototyping',
      icon: <Layers className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-6 text-neutral-700">
          <p>
            {t(`${p}.beforeASingleBagIsPrintedOurSt`)}</p>
          
          <div className="grid md:grid-cols-3 gap-6 mt-6">
            <div className="bg-neutral-50 p-6 rounded-xl border border-neutral-200">
              <div className="p-3 bg-blue-100 rounded-lg w-fit mb-4">
                <Box className="h-6 w-6 text-blue-600" />
              </div>
              <h4 className="font-bold text-neutral-900">{t(`${p}.pouchArchitecture`)}</h4>
              <p className="text-sm text-neutral-600">{t(`${p}.standUpFlatBottomSideGussetOr3`)}</p>
            </div>
            <div className="bg-neutral-50 p-6 rounded-xl border border-neutral-200">
              <div className="p-3 bg-purple-100 rounded-lg w-fit mb-4">
                <MousePointer2 className="h-6 w-6 text-purple-600" />
              </div>
              <h4 className="font-bold text-neutral-900">{t(`${p}.uxFeatures`)}</h4>
              <p className="text-sm text-neutral-600">{t(`${p}.integratedLaserScoringForEasyT`)}</p>
            </div>
            <div className="bg-neutral-50 p-6 rounded-xl border border-neutral-200">
              <div className="p-3 bg-indigo-100 rounded-lg w-fit mb-4">
                <Shield className="h-6 w-6 text-indigo-600" />
              </div>
              <h4 className="font-bold text-neutral-900">{t(`${p}.barrierMatrix`)}</h4>
              <p className="text-sm text-neutral-600">{t(`${p}.customizedLaminationStacksO2Mo`)}</p>
            </div>
          </div>

          <div className="bg-neutral-100 p-2 rounded-xl border-2 border-neutral-200 mt-8">
            <ClickableImage 
              src="/imgs/illustrated/a_topic_04_digital_print_var_b_3318604.jpg" 
              alt="Structural engineering of a custom pouch" 
              className="w-full h-auto rounded-lg shadow-sm"
              caption="CAD Prototyping: Optimizing internal volume and shelf stability"
            />
          </div>
        </div>
      )
    },
    {
      id: 'color-science',
      title: 'The Science of Color: G7 Master Certification',
      icon: <Palette className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-6 text-neutral-700">
          <p>
            {t(`${p}.consistencyAcrossSkusIsTheMark`)}<strong>{t(`${p}.spectrophotometry`)}</strong> {t(`${p}.toMaintainADeltaEEDeviationOfL`)}</p>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h4 className="font-bold text-neutral-900">{t(`${p}.printingTechnologyComparison`)}</h4>
              <ul className="space-y-3">
                <li className="p-4 bg-white border border-neutral-200 rounded-xl">
                  <h5 className="font-bold text-blue-800">{t(`${p}.digitalPrintingHpIndigoScreen`)}</h5>
                  <p className="text-xs text-neutral-600 mt-1">{t(`${p}.zeroPlateFeesInfiniteVariableD`)}</p>
                </li>
                <li className="p-4 bg-white border border-neutral-200 rounded-xl">
                  <h5 className="font-bold text-indigo-800">{t(`${p}.rotogravurePrinting`)}</h5>
                  <p className="text-xs text-neutral-600 mt-1">{t(`${p}.highestSpeedAndLowestPerUnitCo`)}</p>
                </li>
              </ul>
            </div>
            <div className="bg-neutral-50 p-6 rounded-xl border border-neutral-200 flex flex-col justify-center">
              <h4 className="font-bold text-neutral-900 mb-2">{t(`${p}.inkAdhesionDurability`)}</h4>
              <p className="text-sm text-neutral-600">
                {t(`${p}.wePerform`)}<strong>{t(`${p}.astmD3359TapeTests`)}</strong> {t(`${p}.andRubResistanceTestingToEnsur`)}</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'logistics-optimization',
      title: 'Logistics Optimization: Shipping Air is Expensive',
      icon: <BarChart3 className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-6 text-neutral-700">
          <p>
            {t(`${p}.packagingDesignDirectlyImpacts`)}<strong>{t(`${p}.lightweight`)}</strong> {t(`${p}.theirStructuresAndOptimizePouc`)}</p>
          
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="bg-neutral-100 p-2 rounded-xl border-2 border-neutral-200">
              <ClickableImage 
                src="/imgs/illustrated/a_all_options_card_v3_3800862.jpg" 
                alt="Optimized D2C packaging for shipping" 
                className="w-full h-auto rounded-lg shadow-sm"
                caption="Logistics Audit: Reducing shipping costs through dimensional optimization"
              />
            </div>
            <div className="space-y-4">
              <h4 className="font-bold text-neutral-900">{t(`${p}.d2cEfficiencyBenchmarks`)}</h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span><strong>{t(`${p}.freightReduction`)}</strong> {t(`${p}.flexiblePouchesShipFlatRequiri`)}</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span><strong>{t(`${p}.warehouseOptimization`)}</strong> {t(`${p}.store5xMoreEmptyInventoryInThe`)}</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span><strong>{t(`${p}.carbonOffset`)}</strong> {t(`${p}.lowerShippingVolumeLowerScope3`)}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'cta',
      title: 'Design Your High-Performance Brand',
      icon: <MessageCircle className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="bg-gradient-to-br from-indigo-900 to-blue-900 p-10 rounded-2xl text-white text-center shadow-2xl">
          <h3 className="text-3xl font-bold mb-6">{t(`${p}.expertDesignEngineeredExecutio`)}</h3>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            {t(`${p}.readyToStopGuessingAndStartEng`)}</p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={openCalendly}
              className="flex items-center justify-center gap-2 bg-white text-indigo-900 px-8 py-4 rounded-xl font-bold hover:bg-neutral-100 transition shadow-lg"
            >
              <Calendar className="h-5 w-5" />
              {t(`${p}.bookDesignAudit`)}</button>
            <Link
              to="/store"
              className="flex items-center justify-center gap-2 border-2 border-white text-white px-8 py-4 rounded-xl font-bold hover:bg-white/10 transition shadow-lg"
            >
              <ShoppingBag className="h-5 w-5" />
              {t(`${p}.orderFinishSamples`)}</Link>
          </div>
          <p className="mt-8 text-xs opacity-60 uppercase tracking-widest">
            {t(`${p}.g7MasterCertifiedIso9001BrcgsG`)}</p>
        </div>
      )
    }
  ]

  const faqs = [
    {
      question: "What file format do I need for my artwork?",
      answer: "We require high-resolution vector files (AI, EPS, or PDF) with all fonts outlined and images embedded. We recommend working in CMYK or specifying Pantone Solid Coated (PMS) codes for exact color matching."
    },
    {
      question: "Do you offer structural design services?",
      answer: "Yes. If you are unsure of the dimensions or style needed, our engineering team can create custom die-lines and even 3D renders of your product inside the bag to verify fit before production."
    },
    {
      question: "What is Delta-E (ΔE) in printing?",
      answer: "Delta-E is a metric used to calculate the difference between two colors. A ΔE of < 2.0 is generally considered imperceptible to the human eye. We target this benchmark to ensure brand consistency across all your packaging SKUs."
    },
    {
      question: "Can I print on the bottom or gussets of the bag?",
      answer: "Absolutely. With our custom rotogravure and digital processes, we offer 360-degree printing, including the bottom gussets, side gussets, and even inside the pouch for specific 'unboxing' experiences."
    }
  ]

  return (
    <>
      <Helmet>
        <title>{t(`${p}.customBrandPackagingStructural`)}</title>
        <meta name="description" content="The definitive guide to custom brand packaging. 800+ words on structural engineering, G7 color science, and logistics optimization for D2C brands." />
        <link rel="canonical" href="https://achievepack.com/topics/custom-brand-packaging" />
        <meta name="keywords" content="custom brand packaging, pouch design engineering, G7 color matching, structural packaging design, D2C packaging logistics, Delta-E color" />
      </Helmet>

      <SEOPageLayout 
        heroBgColor="#312e81"
        title="Custom Brand Packaging Engineering"
        description="Transforming brand identity into high-performance packaging through structural engineering and elite color science."
        keywords={['custom brand packaging', 'pouch design', 'brand identity packaging']}
        heroTitle="Your Brand. Our Engineering."
        heroSubtitle="Structural Integrity | Color Precision | Logistics Ready"
        introSummary="Generic packaging is a missed opportunity. We help brands transition from 'off-the-shelf' bags to engineered custom solutions that protect products, reduce shipping costs, and deliver a world-class consumer unboxing experience."
        sections={sections}
        faqs={faqs}
        schemaType="Service"
        heroImage="/imgs/seo-photos/a_digital_printing_customization_2717640.jpg"
      />
    </>
  )
}

export default CustomBrandPackagingPage
