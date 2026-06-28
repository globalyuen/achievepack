import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { Shield, Package, CheckCircle, Award, Calendar, MessageCircle, Target, Zap, Globe, Factory, BarChart3, ArrowLeftRight, TrendingUp, ShoppingBag, Sparkles, Microscope, Beaker, AlertTriangle, FileCheck, Thermometer  , Layers } from 'lucide-react'
import SEOPageLayout from '../../components/SEOPageLayout'
import ClickableImage from '../../components/ClickableImage'
import { useCalendly } from '../../contexts/CalendlyContext'
import { useTranslation, Trans } from "react-i18next";

const PFASFreePackagingPage: React.FC = () => {
    const { t } = useTranslation();
    const p = 'seoPages.pages.pFASFreePackaging';
  const { openCalendly } = useCalendly()

  const sections = [
    {
      id: 'hero-problem',
      title: 'The PFAS Crisis: Eliminating "Forever Chemicals"',
      icon: <Target className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <div className="bg-gradient-to-r from-red-50 to-rose-50 p-6 rounded-lg border border-red-200">
            <p className="text-lg font-medium text-neutral-900 mb-4">
              {t(`${p}.perAndPolyfluoroalkylSubstance`)}<strong>{t(`${p}.regulatoryCrackdown`)}</strong>{t(`${p}.in2026`)}<strong>{t(`${p}.pfasFreePackaging`)}</strong> {t(`${p}.isABaselineRequirementForAnyBr`)}</p>
            <div className="grid md:grid-cols-2 gap-4 mt-4">
              <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-red-500">
                <h4 className="font-semibold text-red-800">{t(`${p}.thePfasRisk`)}</h4>
                <ul className="text-sm text-neutral-600 mt-2 space-y-1">
                  <li>{t(`${p}.environmentalPersistenceForeve`)}</li>
                  <li>{t(`${p}.bioaccumulationInHumanTissue`)}</li>
                  <li>{t(`${p}.regulatoryBansIn12UsStates`)}</li>
                  <li>{t(`${p}.strictEuReachEchaRestrictions`)}</li>
                </ul>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-green-500">
                <h4 className="font-semibold text-green-800">{t(`${p}.achievePackAssurance`)}</h4>
                <ul className="text-sm text-neutral-600 mt-2 space-y-1">
                  <li>{t(`${p}.100CertifiedPfasFreeStructures`)}</li>
                  <li>{t(`${p}.batchLevelLaboratoryVerificati`)}</li>
                  <li>{t(`${p}.advancedBioWaxGreaseBarriers`)}</li>
                  <li>{t(`${p}.fullRegulatoryDocumentationDoc`)}</li>
                </ul>
              </div>
            </div>
          </div>
          <p className="mt-4 leading-relaxed">
            {t(`${p}.atAchievePackWeHaveProactively`)}<strong>{t(`${p}.highPurityMechanicalBarriers`)}</strong> {t(`${p}.and`)}<strong>{t(`${p}.sustainableAqueousCoatings`)}</strong>{t(`${p}.weProvideTheGreaseResistanceYo`)}</p>
        </div>
      )
    },
    {
      id: 'barrier-science',
      title: 'Advanced Grease-Barrier Engineering',
      icon: <Microscope className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-6 text-neutral-700">
          <p>
            {t(`${p}.theEngineeringChallengeOf`)}<strong>{t(`${p}.pfasFreePackaging`)}</strong> {t(`${p}.isMaintainingGreaseResistanceK`)}</p>
          
          <div className="grid md:grid-cols-3 gap-6 mt-6">
            <div className="bg-neutral-50 p-6 rounded-xl border border-neutral-200">
              <div className="p-3 bg-green-100 rounded-lg w-fit mb-4">
                <Shield className="h-6 w-6 text-green-600" />
              </div>
              <h4 className="font-bold text-neutral-900">{t(`${p}.aqueousCoatings`)}</h4>
              <p className="text-sm text-neutral-600">{t(`${p}.waterBasedDispersionsThatCreat`)}</p>
            </div>
            <div className="bg-neutral-50 p-6 rounded-xl border border-neutral-200">
              <div className="p-3 bg-blue-100 rounded-lg w-fit mb-4">
                <Layers className="h-6 w-6 text-blue-600" />
              </div>
              <h4 className="font-bold text-neutral-900">{t(`${p}.multiLayerExtrusion`)}</h4>
              <p className="text-sm text-neutral-600">{t(`${p}.utilizingHighPurityPolyethylen`)}</p>
            </div>
            <div className="bg-neutral-50 p-6 rounded-xl border border-neutral-200">
              <div className="p-3 bg-amber-100 rounded-lg w-fit mb-4">
                <Thermometer className="h-6 w-6 text-amber-600" />
              </div>
              <h4 className="font-bold text-neutral-900">{t(`${p}.heatStability`)}</h4>
              <p className="text-sm text-neutral-600">{t(`${p}.ourPfasFreeStructuresMaintainT`)}</p>
            </div>
          </div>

          <div className="bg-neutral-100 p-2 rounded-xl border-2 border-neutral-200 mt-8">
            <ClickableImage 
              src="/imgs/topics/pfas-free-lab-hero.png" 
              alt="Laboratory testing for PFAS absence" 
              className="w-full h-auto rounded-lg shadow-sm"
              caption="EEAT Insight: Verifying PFAS-Free status through Total Fluorine (TF) Analysis"
            />
          </div>
        </div>
      )
    },
    {
      id: 'compliance-eeat',
      title: 'Regulatory Compliance & Global Standards',
      icon: <FileCheck className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-6 text-neutral-700">
          <p>
            {t(`${p}.pfasRegulationIsAMovingTargetA`)}<strong>{t(`${p}.echaEuropeanChemicalsAgency`)}</strong> {t(`${p}.andThe`)}<strong>{t(`${p}.usEpa`)}</strong>.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-xl border border-neutral-200 shadow-sm">
              <h4 className="font-bold text-neutral-900 mb-2">{t(`${p}.usStateBansAb1200`)}</h4>
              <p className="text-sm text-neutral-600 leading-relaxed">
                {t(`${p}.californiaMaineAndWashingtonHa`)}<strong>{t(`${p}.certificatesOfCompliance`)}</strong> {t(`${p}.requiredForRetailDistributionI`)}</p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-neutral-200 shadow-sm">
              <h4 className="font-bold text-neutral-900 mb-2">{t(`${p}.euReachRestrictions`)}</h4>
              <p className="text-sm text-neutral-600 leading-relaxed">
                {t(`${p}.underTheReachRegulationSeveral`)}</p>
            </div>
          </div>

          <div className="bg-amber-50 p-6 rounded-xl border border-amber-200 flex gap-4">
            <AlertTriangle className="h-6 w-6 text-amber-600 flex-shrink-0" />
            <div>
              <h5 className="font-bold text-amber-900">{t(`${p}.totalFluorineTfTesting`)}</h5>
              <p className="text-sm text-amber-800 mt-1">
                {t(`${p}.becauseThereAreThousandsOfPfas`)}<strong>{t(`${p}.totalFluorineTfAnalysis`)}</strong> {t(`${p}.detectionLimitLt50PpmAsASurrog`)}</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'cta',
      title: 'Transition to PFAS-Free Safety',
      icon: <MessageCircle className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="bg-gradient-to-br from-green-900 to-emerald-950 p-10 rounded-2xl text-white text-center shadow-2xl">
          <h3 className="text-3xl font-bold mb-6">{t(`${p}.futureProofYourBrandToday`)}</h3>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            {t(`${p}.donTRiskYourBrandSReputationOn`)}</p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={openCalendly}
              className="flex items-center justify-center gap-2 bg-white text-green-950 px-8 py-4 rounded-xl font-bold hover:bg-neutral-100 transition shadow-lg"
            >
              <Calendar className="h-5 w-5" />
              {t(`${p}.bookComplianceAudit`)}</button>
            <Link
              to="/store"
              className="flex items-center justify-center gap-2 border-2 border-white text-white px-8 py-4 rounded-xl font-bold hover:bg-white/10 transition shadow-lg"
            >
              <Shield className="h-5 w-5" />
              {t(`${p}.orderPfasFreeSamples`)}</Link>
          </div>
          <p className="mt-8 text-xs opacity-60 uppercase tracking-widest">
            {t(`${p}.fdaCompliantEuReachReadyBrcgsC`)}</p>
        </div>
      )
    }
  ]

  const faqs = [
    {
      question: "Are your 'compostable' bags also PFAS-free?",
      answer: "Yes. This is a critical distinction. Many molded-fiber or early compostable products used PFAS for grease resistance. Achieve Pack's new-generation compostable structures (PLA/PBAT/PBS) are 100% PFAS-free, certified by third-party TF analysis."
    },
    {
      question: "What is California AB 1200?",
      answer: "AB 1200 is a California law that prohibits the sale of plant-based food packaging that contains 'intentionally added PFAS.' It also requires brands to disclose the presence of certain chemicals on their websites. We provide the data you need to comply with these disclosure rules."
    },
    {
      question: "Can I achieve high grease resistance without PFAS?",
      answer: "Absolutely. By utilizing mechanical barriers (high-purity PE/PLA) and sustainable aqueous coatings, we can achieve grease resistance levels comparable to traditional fluorinated treatments, ensuring your product stays clean and oil-free."
    },
    {
      question: "How do you verify your supply chain is PFAS-free?",
      answer: "We perform batch-level testing and require 'Non-PFAS Statements' from all our raw material suppliers. We also conduct random unannounced audits of our production facilities to perform Total Fluorine (TF) tests on the final pouches."
    }
  ]

  return (
    <>
      <Helmet>
        <title>{t(`${p}.pfasFreePackagingCertifiedSafe`)}</title>
        <meta name="description" content="Technical guide to PFAS-free food packaging. 800+ words on eliminating forever chemicals, California AB 1200 compliance, and advanced grease barrier engineering." />
        <link rel="canonical" href="https://achievepack.com/topics/pfas-free-packaging" />
        <meta name="keywords" content="PFAS free packaging, forever chemicals food safety, California AB 1200, aqueous coating grease barrier, non-PFAS food pouches, Total Fluorine testing" />
      </Helmet>

      <SEOPageLayout 
        heroBgColor="#0f172a"
        title="PFAS-Free Packaging Engineering"
        description="Eliminating 'Forever Chemicals' through advanced material science and rigorous regulatory verification."
        keywords={['PFAS free', 'toxic-free packaging', 'food safety chemicals']}
        heroTitle="Pure. Safe. PFAS-Free."
        heroSubtitle="Forever Chemicals Eliminated | Lab-Verified | 2026 Compliant"
        introSummary="The era of 'Forever Chemicals' in food packaging is over. We help brands navigate the complex global regulatory bans on PFAS by providing certified, high-performance grease barriers that protect both the consumer and the environment."
        sections={sections}
        faqs={faqs}
        schemaType="Service"
        heroImage="/imgs/topics/pfas-free-lab-hero.png"
      />
    </>
  )
}

export default PFASFreePackagingPage
