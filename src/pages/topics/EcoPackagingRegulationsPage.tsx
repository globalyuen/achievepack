import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { Scale, Shield, CheckCircle, Award, Calendar, MessageCircle, Target, Zap, Globe, BarChart3, ArrowLeftRight, TrendingUp, ShoppingBag, Sparkles, Microscope, Beaker, Layers, FileText, Gavel  , Recycle } from 'lucide-react'
import SEOPageLayout from '../../components/SEOPageLayout'
import ClickableImage from '../../components/ClickableImage'
import { useCalendly } from '../../contexts/CalendlyContext'
import { useTranslation, Trans } from "react-i18next";

const EcoPackagingRegulationsPage: React.FC = () => {
    const { t } = useTranslation();
    const p = 'seoPages.pages.ecoPackagingRegulations';
  const { openCalendly } = useCalendly()

  const sections = [
    {
      id: 'hero-problem',
      title: 'Navigating the 2026 Global Eco-Packaging Regulatory Landscape',
      icon: <Target className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <div className="bg-gradient-to-r from-slate-50 to-blue-50 p-6 rounded-lg border border-slate-200 shadow-sm">
            <p className="text-lg font-medium text-neutral-900 mb-4">
              {t(`${p}.complianceIsTheNewBaselineForB`)}<strong>{t(`${p}.legallyEnforceableMandates`)}</strong> {t(`${p}.withSignificantFinancialPenalt`)}</p>
            <div className="grid md:grid-cols-2 gap-4 mt-4">
              <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-slate-800">
                <h4 className="font-semibold text-slate-900">{t(`${p}.regulatoryHurdles`)}</h4>
                <ul className="text-sm text-neutral-600 mt-2 space-y-1">
                  <li>{t(`${p}.euPpwrPackagingPackagingWasteR`)}</li>
                  <li>{t(`${p}.californiaSb54PlasticPollution`)}</li>
                  <li>{t(`${p}.ukPlasticPackagingTaxMandates`)}</li>
                  <li>{t(`${p}.ftcGreenGuidesAntiGreenwashing`)}</li>
                </ul>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-blue-500">
                <h4 className="font-semibold text-blue-800">{t(`${p}.achievePackCompliance`)}</h4>
                <ul className="text-sm text-neutral-600 mt-2 space-y-1">
                  <li>{t(`${p}.certified100RecyclableMonoMate`)}</li>
                  <li>{t(`${p}.verifiable30PcrContentIntegrat`)}</li>
                  <li>{t(`${p}.pfasFreeAqueousBarrierCoatings`)}</li>
                  <li>{t(`${p}.iso14040LifeCycleAssessmentsLc`)}</li>
                </ul>
              </div>
            </div>
          </div>
          <p className="mt-4 leading-relaxed">
            {t(`${p}.atAchievePackWeServeAsYour`)}<strong>{t(`${p}.regulatoryTechnicalPartner`)}</strong>{t(`${p}.weMonitorTheShiftingRequiremen`)}</p>
        </div>
      )
    },
    {
      id: 'ppwr-regulation',
      title: 'EU PPWR: The Circular Mandate',
      icon: <Globe className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-6 text-neutral-700">
          <p>
            {t(`${p}.the`)}<strong>{t(`${p}.packagingAndPackagingWasteRegu`)}</strong> {t(`${p}.isTheMostAmbitiousEnvironmenta`)}<strong>{t(`${p}.recyclable`)}</strong> {t(`${p}.by2030AndMeetStrict`)}<strong>{t(`${p}.recycledContent`)}</strong> {t(`${p}.targets`)}</p>
          
          <div className="grid md:grid-cols-3 gap-6 mt-6">
            <div className="bg-neutral-50 p-6 rounded-xl border border-neutral-200">
              <div className="p-3 bg-slate-100 rounded-lg w-fit mb-4">
                <Recycle className="h-6 w-6 text-slate-600" />
              </div>
              <h4 className="font-bold text-neutral-900">{t(`${p}.designForRecycling`)}</h4>
              <p className="text-sm text-neutral-600">{t(`${p}.mandatoryAdherenceToRecyclabil`)}</p>
            </div>
            <div className="bg-neutral-50 p-6 rounded-xl border border-neutral-200">
              <div className="p-3 bg-blue-100 rounded-lg w-fit mb-4">
                <TrendingUp className="h-6 w-6 text-blue-600" />
              </div>
              <h4 className="font-bold text-neutral-900">{t(`${p}.recycledContent1`)}</h4>
              <p className="text-sm text-neutral-600">{t(`${p}.minimum35RecycledContentRequir`)}</p>
            </div>
            <div className="bg-neutral-50 p-6 rounded-xl border border-neutral-200">
              <div className="p-3 bg-indigo-100 rounded-lg w-fit mb-4">
                <Shield className="h-6 w-6 text-indigo-600" />
              </div>
              <h4 className="font-bold text-neutral-900">{t(`${p}.reductionTargets`)}</h4>
              <p className="text-sm text-neutral-600">{t(`${p}.a15ReductionInOverallPackaging`)}</p>
            </div>
          </div>

          <div className="bg-neutral-100 p-2 rounded-xl border-2 border-neutral-200 mt-8">
            <ClickableImage 
              src="/imgs/illustrated/a_topic_04_digital_print_var_b_3318604.jpg" 
              alt="Compliance testing in packaging manufacturing" 
              className="w-full h-auto rounded-lg shadow-sm"
              caption="EEAT Protocol: Verifying material compliance with global PPWR and SB 54 standards"
            />
          </div>
        </div>
      )
    },
    {
      id: 'california-sb54',
      title: 'California SB 54: The US Benchmark',
      icon: <Scale className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-6 text-neutral-700">
          <p>
            {t(`${p}.californiaS`)}<strong>{t(`${p}.plasticPollutionPreventionAndP`)}</strong> {t(`${p}.requiresAllSingleUsePackagingT`)}<strong>{t(`${p}.recyclableOrCompostable`)}</strong> {t(`${p}.by2032`)}</p>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h4 className="font-bold text-neutral-900">{t(`${p}.sb54CompliancePillars`)}</h4>
              <ul className="space-y-3 text-sm">
                <li className="p-4 bg-white border border-neutral-200 rounded-xl shadow-sm">
                  <h5 className="font-bold text-neutral-900">{t(`${p}.eprFeeModulation`)}</h5>
                  <p className="text-xs text-neutral-600 mt-1">{t(`${p}.nonCompliantBrandsPayHigherFee`)}</p>
                </li>
                <li className="p-4 bg-white border border-neutral-200 rounded-xl shadow-sm">
                  <h5 className="font-bold text-neutral-900">{t(`${p}.plasticSourceReduction`)}</h5>
                  <p className="text-xs text-neutral-600 mt-1">{t(`${p}.mandatesA25ReductionInPlasticP`)}</p>
                </li>
                <li className="p-4 bg-white border border-neutral-200 rounded-xl shadow-sm">
                  <h5 className="font-bold text-neutral-900">{t(`${p}.certifiedRecovery`)}</h5>
                  <p className="text-xs text-neutral-600 mt-1">{t(`${p}.claimsOfRecyclabilityMustBeBac`)}</p>
                </li>
              </ul>
            </div>
            <div className="bg-neutral-50 p-6 rounded-xl border border-neutral-200 flex flex-col justify-center">
              <h4 className="font-bold text-neutral-900 mb-2">{t(`${p}.antiGreenwashingTheFtc`)}</h4>
              <p className="text-sm text-neutral-600 leading-relaxed">
                {t(`${p}.the`)}<strong>{t(`${p}.ftcGreenGuides`)}</strong> {t(`${p}.andSimilarLawsLikeTheUkCmaGree`)}<strong>{t(`${p}.specificProminentAndVerifiable`)}</strong>{t(`${p}.achievePackProvidesThe`)}<strong>{t(`${p}.iso14040LcaData`)}</strong> {t(`${p}.and`)}<strong>{t(`${p}.cyclosHtpCertifications`)}</strong> {t(`${p}.youNeedToMakeBulletproofClaims`)}</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'compliance-audit',
      title: 'Our Regulatory Support Protocol',
      icon: <FileText className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-6 text-neutral-700">
          <p>
            {t(`${p}.weDonTJustSupplyBagsWeSupplyCo`)}<strong>{t(`${p}.eeatRegulatoryProtocol`)}</strong> {t(`${p}.ensuresYourBrandIsProtected`)}</p>
          
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="bg-neutral-100 p-2 rounded-xl border-2 border-neutral-200">
              <ClickableImage 
                src="/imgs/pouch-shape/ads/a_achieve_pack_structure_overview_7409393.jpg" 
                alt="Technical structure overview for regulatory compliance" 
                className="w-full h-auto rounded-lg shadow-sm"
                caption="Regulatory Insight: Multi-layer engineering optimized for global tax exemptions"
              />
            </div>
            <div className="space-y-4">
              <h4 className="font-bold text-neutral-900">{t(`${p}.complianceDeliverables`)}</h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-blue-600" />
                  <span><strong>{t(`${p}.declarationOfComplianceDoc`)}</strong> {t(`${p}.fullMaterialAndSafetyData`)}</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-blue-600" />
                  <span><strong>{t(`${p}.grsCertificates`)}</strong> {t(`${p}.verifyingRecycledContentForTax`)}</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-blue-600" />
                  <span><strong>{t(`${p}.lcaReports`)}</strong> {t(`${p}.isoCompliantCarbonImpactData`)}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'cta',
      title: 'Secure Your Regulatory Strategy',
      icon: <MessageCircle className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="bg-gradient-to-br from-slate-800 to-blue-950 p-10 rounded-2xl text-white text-center shadow-2xl">
          <h3 className="text-3xl font-bold mb-6">{t(`${p}.compliantCertifiedConfident`)}</h3>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            {t(`${p}.isYourPackagingReadyForThe2026`)}</p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={openCalendly}
              className="flex items-center justify-center gap-2 bg-white text-slate-900 px-8 py-4 rounded-xl font-bold hover:bg-neutral-100 transition shadow-lg"
            >
              <Calendar className="h-5 w-5" />
              {t(`${p}.bookRegulatoryConsultation`)}</button>
            <Link
              to="/company/certificates"
              className="flex items-center justify-center gap-2 border-2 border-white text-white px-8 py-4 rounded-xl font-bold hover:bg-white/10 transition shadow-lg"
            >
              <Award className="h-5 w-5" />
              {t(`${p}.ourCertificationHub`)}</Link>
          </div>
          <p className="mt-8 text-xs opacity-60 uppercase tracking-widest">
            {t(`${p}.ppwrCompliantSb54ReadyGrsCerti`)}</p>
        </div>
      )
    }
  ]

  const faqs = [
    {
      question: "How do the new EU laws affect UK-based brands?",
      answer: "While the UK is no longer in the EU, any brand exporting to the European market must comply with PPWR. Furthermore, the UK Plastic Packaging Tax already mandates 30% recycled content to avoid a £217/tonne levy."
    },
    {
      question: "What happens if my packaging is found to be non-compliant?",
      answer: "Under laws like SB 54 and PPWR, companies can face daily fines, product recalls, and high-profile greenwashing litigation. We help you proactively audit your structures to avoid these risks."
    },
    {
      question: "Are 'Store Drop-Off' claims still legal under SB 54?",
      answer: "The rules are tightening. Claims of recyclability in California now require 'Truth in Labeling' verification, meaning you must prove that the material is actually being collected and sorted by local MRFs. We provide the Cyclos-HTP data to support these claims."
    },
    {
      question: "Does Achieve Pack provide PFAS-free certification?",
      answer: "Yes. We offer independent laboratory testing reports confirming that our aqueous grease barriers and polymer additives are 100% PFAS-free, exceeding the requirements of California AB 1200."
    }
  ]

  return (
    <>
      <Helmet>
        <title>{t(`${p}.ecoPackagingRegulationsGuideGl`)}</title>
        <meta name="description" content="Master the technical landscape of eco-packaging regulations. 800+ words on EU PPWR, California SB 54, FTC Green Guides, and global plastic tax compliance." />
        <link rel="canonical" href="https://achievepack.com/topics/eco-packaging-regulations" />
        <meta name="keywords" content="eco-packaging regulations, EU PPWR guide, California SB 54 compliance, FTC Green Guides packaging, global plastic tax, sustainable packaging law" />
      </Helmet>

      <SEOPageLayout 
        heroBgColor="#1e293b"
        title="Eco-Packaging Regulations: The 2026 Compliance Roadmap"
        description="Establishing technical authority in global packaging law, EPR mandates, and anti-greenwashing compliance."
        keywords={['packaging regulations', 'PPWR compliance', 'SB 54 guide']}
        heroTitle="Compliant. Not Confused."
        heroSubtitle="EU PPWR | California SB 54 | FTC Green Guides | EPR Optimized"
        introSummary="The era of voluntary sustainability is over. This guide provides the technical and legal breakdown of the global regulatory landscape—from mandatory recyclability grades in Europe to the source reduction mandates of California—ensuring your brand is protected, tax-exempt, and ready for the 2026 circular economy."
        sections={sections}
        faqs={faqs}
        schemaType="Article"
        heroImage="/imgs/illustrated/a_topic_04_digital_print_var_b_3318604.jpg"
      />
    </>
  )
}

export default EcoPackagingRegulationsPage
