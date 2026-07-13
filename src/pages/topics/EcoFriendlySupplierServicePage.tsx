import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { ShieldCheck, Factory, CheckCircle, Award, Calendar, MessageCircle, Target, Shield, Zap, Globe, BarChart3, ArrowLeftRight, TrendingUp, ShoppingBag, Sparkles, Microscope, Beaker, FileSearch, ClipboardCheck, Users } from 'lucide-react'
import SEOPageLayout from '../../components/SEOPageLayout'
import ClickableImage from '../../components/ClickableImage'
import { useCalendly } from '../../contexts/CalendlyContext'
import { useTranslation, Trans } from "react-i18next";

const EcoFriendlySupplierServicePage: React.FC = () => {
    const { t } = useTranslation();
    const p = 'seoPages.pages.ecoFriendlySupplierService';
  const { openCalendly } = useCalendly()

  const sections = [
    {
      id: 'hero-problem',
      title: 'The Supply Chain Accountability Gap',
      icon: <Target className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <div className="bg-gradient-to-r from-emerald-50 to-teal-50 p-6 rounded-lg border border-emerald-200">
            <p className="text-lg font-medium text-neutral-900 mb-4">
              {t(`${p}.sustainabilityIsOnlyAsStrongAs`)}<strong>{t(`${p}.ecoFriendlySupplierVerificatio`)}</strong> {t(`${p}.isThePrimaryDefenseAgainstGree`)}</p>
            <div className="grid md:grid-cols-2 gap-4 mt-4">
              <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-emerald-500">
                <h4 className="font-semibold text-emerald-800">{t(`${p}.theVerificationCrisis`)}</h4>
                <ul className="text-sm text-neutral-600 mt-2 space-y-1">
                  <li>{t(`${p}.unverifiedBioPlasticClaims`)}</li>
                  <li>{t(`${p}.lackOfBatchLevelTraceabilityGr`)}</li>
                  <li>{t(`${p}.ethicalManufacturingNonComplia`)}</li>
                  <li>{t(`${p}.fragileSingleSourceSupplyChain`)}</li>
                </ul>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-blue-500">
                <h4 className="font-semibold text-blue-800">{t(`${p}.theAchievePackStandard`)}</h4>
                <ul className="text-sm text-neutral-600 mt-2 space-y-1">
                  <li>{t(`${p}.4PillarSmetaSedexAuditedFacili`)}</li>
                  <li>{t(`${p}.iso14001EnvironmentalManagemen`)}</li>
                  <li>{t(`${p}.brcgsGradeAFoodSafetyVerificat`)}</li>
                  <li>{t(`${p}.realTimeBatchTraceabilityLogs`)}</li>
                </ul>
              </div>
            </div>
          </div>
          <p className="mt-4 leading-relaxed">
            {t(`${p}.atAchievePackWeServeAsTheTechn`)}<strong>{t(`${p}.onSiteAudits`)}</strong> {t(`${p}.and`)}<strong>{t(`${p}.laboratoryVerifications`)}</strong> {t(`${p}.requiredToEnsureYourPackagingI`)}</p>
        </div>
      )
    },
    {
      id: 'audit-protocols',
      title: 'Global Audit Protocols: Beyond Paperwork',
      icon: <ClipboardCheck className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-6 text-neutral-700">
          <p>
            {t(`${p}.trueVerificationRequiresDeepDi`)}</p>
          
          <div className="grid md:grid-cols-3 gap-6 mt-6">
            <div className="bg-neutral-50 p-6 rounded-xl border border-neutral-200">
              <div className="p-3 bg-emerald-100 rounded-lg w-fit mb-4">
                <Users className="h-6 w-6 text-emerald-600" />
              </div>
              <h4 className="font-bold text-neutral-900">{t(`${p}.sedexSmeta`)}</h4>
              <p className="text-sm text-neutral-600">{t(`${p}.theGoldStandardForSocialAndEth`)}</p>
            </div>
            <div className="bg-neutral-50 p-6 rounded-xl border border-neutral-200">
              <div className="p-3 bg-blue-100 rounded-lg w-fit mb-4">
                <Globe className="h-6 w-6 text-blue-600" />
              </div>
              <h4 className="font-bold text-neutral-900">{t(`${p}.iso14001`)}</h4>
              <p className="text-sm text-neutral-600">{t(`${p}.verificationOfADedicatedEnviro`)}</p>
            </div>
            <div className="bg-neutral-50 p-6 rounded-xl border border-neutral-200">
              <div className="p-3 bg-teal-100 rounded-lg w-fit mb-4">
                <BarChart3 className="h-6 w-6 text-teal-600" />
              </div>
              <h4 className="font-bold text-neutral-900">{t(`${p}.ecovadisRating`)}</h4>
              <p className="text-sm text-neutral-600">{t(`${p}.continuousMonitoringOfSupplier`)}</p>
            </div>
          </div>

          <div className="bg-neutral-100 p-2 rounded-xl border-2 border-neutral-200 mt-8">
            <ClickableImage 
              src="/imgs/illustrated/a_topic_04_digital_print_var_b_3318604.webp" 
              alt="Sustainable packaging manufacturing facility" 
              className="w-full h-auto rounded-lg shadow-sm"
              caption="Operational Transparency: Verified Grade-A BRCGS Manufacturing Facilities"
            />
          </div>
        </div>
      )
    },
    {
      id: 'material-verification',
      title: 'Material Traceability: GRS & ISCC PLUS',
      icon: <FileSearch className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-6 text-neutral-700">
          <p>
            {t(`${p}.claimingRecycledContentOrCompo`)}<strong>{t(`${p}.chainOfCustodyCoc`)}</strong>{t(`${p}.achievePackProvidesTheForensic`)}</p>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h4 className="font-bold text-neutral-900">{t(`${p}.verificationFrameworks`)}</h4>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-2 bg-white p-4 rounded-xl border border-neutral-200">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                  <div>
                    <strong>{t(`${p}.grsGlobalRecycledStandard`)}</strong> {t(`${p}.verifiesTheSpecificPercentageO`)}</div>
                </li>
                <li className="flex items-start gap-2 bg-white p-4 rounded-xl border border-neutral-200">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                  <div>
                    <strong>{t(`${p}.isccPlusMassBalance`)}</strong> {t(`${p}.tracksSustainableResinsThrough`)}</div>
                </li>
                <li className="flex items-start gap-2 bg-white p-4 rounded-xl border border-neutral-200">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                  <div>
                    <strong>{t(`${p}.tuvAustriaCertificates`)}</strong> {t(`${p}.thirdPartyLaboratoryProofOfHom`)}</div>
                </li>
              </ul>
            </div>
            <div className="bg-neutral-50 p-6 rounded-xl border border-neutral-200 flex flex-col justify-center">
              <h4 className="font-bold text-neutral-900 mb-2">{t(`${p}.lifeCycleAssessmentLca`)}</h4>
              <p className="text-sm text-neutral-600 leading-relaxed">
                {t(`${p}.weProvide`)}<strong>{t(`${p}.iso1404044`)}</strong> {t(`${p}.compliantLcaDataForOurVerified`)}</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'on-site-audit',
      title: 'The Value of On-Site Verification',
      icon: <Factory className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-6 text-neutral-700">
          <p>
            {t(`${p}.inAGlobalMarketplaceDigitalCer`)}<strong>{t(`${p}.onTheGroundPresence`)}</strong> {t(`${p}.inKeyManufacturingHubsToPerfor`)}</p>
          
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="bg-neutral-100 p-2 rounded-xl border-2 border-neutral-200">
              <ClickableImage 
                src="/imgs/illustrated/a_topic_04_digital_print_var_b_3318604.webp" 
                alt="Quality inspector auditing packaging production" 
                className="w-full h-auto rounded-lg shadow-sm"
                caption="Physical Verification: On-site QA and Social Compliance Audits"
              />
            </div>
            <div className="space-y-4">
              <h4 className="font-bold text-neutral-900">{t(`${p}.our5StepAuditProtocol`)}</h4>
              <ol className="space-y-2 text-sm">
                <li className="flex gap-2">
                  <span className="font-bold text-emerald-600">1.</span>
                  <span><strong>{t(`${p}.documentReview`)}</strong> {t(`${p}.verificationOfCurrentIsoBrcgsG`)}</span>
                </li>
                <li className="flex gap-2">
                  <span className="font-bold text-emerald-600">2.</span>
                  <span><strong>{t(`${p}.siteInspection`)}</strong> {t(`${p}.physicalAuditOfMachineHygieneA`)}</span>
                </li>
                <li className="flex gap-2">
                  <span className="font-bold text-emerald-600">3.</span>
                  <span><strong>{t(`${p}.processValidation`)}</strong> {t(`${p}.verificationOfMaterialTracking`)}</span>
                </li>
                <li className="flex gap-2">
                  <span className="font-bold text-emerald-600">4.</span>
                  <span><strong>{t(`${p}.workerInterviews`)}</strong> {t(`${p}.confirmingEthicalLaborPractice`)}</span>
                </li>
                <li className="flex gap-2">
                  <span className="font-bold text-emerald-600">5.</span>
                  <span><strong>{t(`${p}.batchSampling`)}</strong> {t(`${p}.independentLabTestingForMigrat`)}</span>
                </li>
              </ol>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'cta',
      title: 'Audit-Proof Your Supply Chain',
      icon: <MessageCircle className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="bg-gradient-to-br from-emerald-900 to-teal-900 p-10 rounded-2xl text-white text-center shadow-2xl">
          <h3 className="text-3xl font-bold mb-6">{t(`${p}.transparencyIsTheUltimateLuxur`)}</h3>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            {t(`${p}.readyToSecureAVerifiedHighPerf`)}</p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={openCalendly}
              className="flex items-center justify-center gap-2 bg-white text-emerald-900 px-8 py-4 rounded-xl font-bold hover:bg-neutral-100 transition shadow-lg"
            >
              <Calendar className="h-5 w-5" />
              {t(`${p}.bookSupplyChainAudit`)}</button>
            <Link
              to="/about"
              className="flex items-center justify-center gap-2 border-2 border-white text-white px-8 py-4 rounded-xl font-bold hover:bg-white/10 transition shadow-lg"
            >
              <ShieldCheck className="h-5 w-5" />
              {t(`${p}.ourComplianceProcess`)}</Link>
          </div>
          <p className="mt-8 text-xs opacity-60 uppercase tracking-widest">
            {t(`${p}.sedexMemberIso14001BrcgsGradeA`)}</p>
        </div>
      )
    }
  ]

  const faqs = [
    {
      question: "How do you verify a supplier is truly ethical?",
      answer: "We primarily utilize SEDEX/SMETA 4-Pillar audits which cover Labor Standards, Health & Safety, Environment, and Business Ethics. We also perform unannounced site visits and interview factory workers to ensure the documented standards match reality."
    },
    {
      question: "Can you provide the GRS certificates for my specific order?",
      answer: "Yes. For every order of PCR (Post-Consumer Recycled) packaging, we provide a Transaction Certificate (TC) that links your specific production run to the verified recycled resin source."
    },
    {
      question: "What is BRCGS Grade A and why does it matter?",
      answer: "BRCGS is the leading global standard for food safety in packaging. A 'Grade A' rating indicates the highest level of hygiene, contamination control, and traceability, making the facility suitable for the world's largest food brands."
    },
    {
      question: "How do you handle supply chain disruptions?",
      answer: "We maintain a distributed network of verified manufacturing partners across multiple geographical regions. This 'Dynamic Sourcing' model ensures that your brand is protected against local labor strikes, natural disasters, or logistics bottlenecks."
    }
  ]

  return (
    <>
      <Helmet>
        <title>{t(`${p}.ecoFriendlySupplierVerificatio1`)}</title>
        <meta name="description" content="Technical guide to sustainable supplier verification. 800+ words on SEDEX/SMETA, ISO 14001, BRCGS, and GRS material traceability protocols." />
        <link rel="canonical" href="https://achievepack.com/topics/eco-friendly-supplier-verification" />
        <meta name="keywords" content="eco-friendly supplier verification, sustainable supply chain audit, SEDEX SMETA packaging, BRCGS grade A, GRS traceability, ISO 14001 packaging" />
      </Helmet>

      <SEOPageLayout 
        heroBgColor="#064e3b"
        title="Eco-Friendly Supplier Verification"
        description="Establishing technical accountability and ethical transparency across your sustainable packaging supply chain."
        keywords={['supplier verification', 'packaging audit', 'sustainable supply chain']}
        heroTitle="Transparency. Not Greenwashing."
        heroSubtitle="Audit-Ready | Ethically Verified | GRS Certified"
        introSummary="In the complex world of sustainable packaging, trust must be earned through data. We provide the comprehensive verification services—from on-site SMETA audits to batch-level GRS traceability—required to protect your brand and ensure a resilient, ethical supply chain."
        sections={sections}
        faqs={faqs}
        schemaType="Service"
        heroImage="/imgs/seo-photos/a_about_sustainability_mission_5914909.webp"
      />
    </>
  )
}

export default EcoFriendlySupplierServicePage
