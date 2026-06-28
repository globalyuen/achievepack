import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { Shield, Lock, CheckCircle, Award, Calendar, MessageCircle, Target, Zap, Globe, BarChart3, ArrowLeftRight, TrendingUp, ShoppingBag, Sparkles, Microscope, Beaker, Layers, EyeOff, Gavel } from 'lucide-react'
import SEOPageLayout from '../../components/SEOPageLayout'
import ClickableImage from '../../components/ClickableImage'
import { useCalendly } from '../../contexts/CalendlyContext'
import { useTranslation, Trans } from "react-i18next";

const ChildResistantMylarBagsPage: React.FC = () => {
    const { t } = useTranslation();
    const p = 'seoPages.pages.childResistantMylarBags';
  const { openCalendly } = useCalendly()

  const sections = [
    {
      id: 'hero-problem',
      title: 'Child Resistant Mylar Bags: Engineering for Compliance and Safety',
      icon: <Target className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <div className="bg-gradient-to-r from-red-50 to-orange-50 p-6 rounded-lg border border-red-200 shadow-sm">
            <p className="text-lg font-medium text-neutral-900 mb-4">
              {t(`${p}.childResistantCrPackagingIsA`)}<strong>{t(`${p}.legalMandate`)}</strong> {t(`${p}.forPharmaceuticalCannabisAndHi`)}<strong>{t(`${p}.sustainable`)}</strong>.
            </p>
            <div className="grid md:grid-cols-2 gap-4 mt-4">
              <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-red-600">
                <h4 className="font-semibold text-red-800">{t(`${p}.theRegulatoryBurden`)}</h4>
                <ul className="text-sm text-neutral-600 mt-2 space-y-1">
                  <li>{t(`${p}.nonComplianceWith16Cfr170020`)}</li>
                  <li>{t(`${p}.traditionalNonRecyclableMultiL`)}</li>
                  <li>{t(`${p}.pouchFailureZipperSeparation`)}</li>
                  <li>{t(`${p}.highCostOfSpecializedCrClosure`)}</li>
                </ul>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-orange-500">
                <h4 className="font-semibold text-orange-800">{t(`${p}.theAchievePackSolution`)}</h4>
                <ul className="text-sm text-neutral-600 mt-2 space-y-1">
                  <li>{t(`${p}.certifiedAstmCpscCrClosures`)}</li>
                  <li>{t(`${p}.100RecyclableMonoMaterialStruc`)}</li>
                  <li>{t(`${p}.odorProofHighBarrierEngineerin`)}</li>
                  <li>{t(`${p}.punctureResistantHeavyDutyFilm`)}</li>
                </ul>
              </div>
            </div>
          </div>
          <p className="mt-4 leading-relaxed">
            {t(`${p}.atAchievePackWeSpecializeIn`)}<strong>{t(`${p}.childResistantMylarBags`)}</strong> {t(`${p}.thatMeetTheStrictestSafetyStan`)}<strong>{t(`${p}.pushAndSlide`)}</strong> {t(`${p}.or`)}<strong>{t(`${p}.pinchAndPull`)}</strong> {t(`${p}.zipperTechnologyThatIsSeniorFr`)}</p>
        </div>
      )
    },
    {
      id: 'safety-compliance',
      title: 'Safety Compliance: 16 CFR § 1700.20 & ASTM D3475',
      icon: <Gavel className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-6 text-neutral-700">
          <p>
            {t(`${p}.crPackagingIsDefinedBy`)}<strong>{t(`${p}.humanFactorsTesting`)}</strong>{t(`${p}.ourClosuresAreIndependentlyTes`)}</p>
          
          <div className="grid md:grid-cols-3 gap-6 mt-6">
            <div className="bg-neutral-50 p-6 rounded-xl border border-neutral-200">
              <div className="p-3 bg-red-100 rounded-lg w-fit mb-4">
                <Shield className="h-6 w-6 text-red-600" />
              </div>
              <h4 className="font-bold text-neutral-900">{t(`${p}.certifiedChildProof`)}</h4>
              <p className="text-sm text-neutral-600">{t(`${p}.verifiedByTheCpscToResistAcces`)}</p>
            </div>
            <div className="bg-neutral-50 p-6 rounded-xl border border-neutral-200">
              <div className="p-3 bg-orange-100 rounded-lg w-fit mb-4">
                <CheckCircle className="h-6 w-6 text-orange-600" />
              </div>
              <h4 className="font-bold text-neutral-900">{t(`${p}.seniorFriendly`)}</h4>
              <p className="text-sm text-neutral-600">{t(`${p}.designedForEasyOpeningByAdults`)}</p>
            </div>
            <div className="bg-neutral-50 p-6 rounded-xl border border-neutral-200">
              <div className="p-3 bg-slate-100 rounded-lg w-fit mb-4">
                <Lock className="h-6 w-6 text-slate-600" />
              </div>
              <h4 className="font-bold text-neutral-900">{t(`${p}.astmD3475Standard`)}</h4>
              <p className="text-sm text-neutral-600">{t(`${p}.classifiedAccordingToTheStanda`)}</p>
            </div>
          </div>

          <div className="bg-neutral-100 p-2 rounded-xl border-2 border-neutral-200 mt-8">
            <ClickableImage 
              src="/imgs/topics/child-resistant-mylar-hero.png" 
              alt="Certified child resistant zipper mechanism" 
              className="w-full h-auto rounded-lg shadow-sm"
              caption="EEAT Insight: Advanced locking mechanisms that meet federal safety mandates while remaining 100% recyclable"
            />
          </div>
        </div>
      )
    },
    {
      id: 'odor-barrier',
      title: 'Odor Protection: High-Barrier Engineering',
      icon: <EyeOff className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-6 text-neutral-700">
          <p>
            {t(`${p}.forCannabisAndPharmaceuticalPr`)}<strong>{t(`${p}.odorNeutrality`)}</strong> {t(`${p}.isEssentialForDiscretionAndShe`)}</p>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h4 className="font-bold text-neutral-900">{t(`${p}.barrierTechSpecs`)}</h4>
              <ul className="space-y-3 text-sm">
                <li className="p-4 bg-white border border-neutral-200 rounded-xl shadow-sm">
                  <h5 className="font-bold text-neutral-900">{t(`${p}.zeroScentEvohLayer`)}</h5>
                  <p className="text-xs text-neutral-600 mt-1">{t(`${p}.integratedGasBarriersThatBlock`)}</p>
                </li>
                <li className="p-4 bg-white border border-neutral-200 rounded-xl shadow-sm">
                  <h5 className="font-bold text-neutral-900">{t(`${p}.lightShielding`)}</h5>
                  <p className="text-xs text-neutral-600 mt-1">{t(`${p}.opaqueMaterialsThatPreventUvDe`)}</p>
                </li>
                <li className="p-4 bg-white border border-neutral-200 rounded-xl shadow-sm">
                  <h5 className="font-bold text-neutral-900">{t(`${p}.punctureResistance`)}</h5>
                  <p className="text-xs text-neutral-600 mt-1">{t(`${p}.thickGaugeFilmsThatPreventAcci`)}</p>
                </li>
              </ul>
            </div>
            <div className="bg-neutral-50 p-6 rounded-xl border border-neutral-200 flex flex-col justify-center">
              <h4 className="font-bold text-neutral-900 mb-2">{t(`${p}.sustainableCrInnovation`)}</h4>
              <p className="text-sm text-neutral-600 leading-relaxed">
                {t(`${p}.mostCrPouchesUseNonRecyclableM`)}<strong>{t(`${p}.100RecyclableMonoPe`)}</strong> {t(`${p}.and`)}<strong>{t(`${p}.homeCompostable`)}</strong> {t(`${p}.crOptionsEnsuringYourHighPoten`)}</p>
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
        <div className="bg-gradient-to-br from-red-800 to-orange-950 p-10 rounded-2xl text-white text-center shadow-2xl">
          <h3 className="text-3xl font-bold mb-6">{t(`${p}.compliantCertifiedSustainable`)}</h3>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            {t(`${p}.isYourCrPackagingReadyForThe20`)}</p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={openCalendly}
              className="flex items-center justify-center gap-2 bg-white text-red-950 px-8 py-4 rounded-xl font-bold hover:bg-neutral-100 transition shadow-lg"
            >
              <Calendar className="h-5 w-5" />
              {t(`${p}.bookCrSafetyConsultation`)}</button>
            <Link
              to="/company/certificates"
              className="flex items-center justify-center gap-2 border-2 border-white text-white px-8 py-4 rounded-xl font-bold hover:bg-white/10 transition shadow-lg"
            >
              <Award className="h-5 w-5" />
              {t(`${p}.viewCrCertifications`)}</Link>
          </div>
          <p className="mt-8 text-xs opacity-60 uppercase tracking-widest">
            {t(`${p}.cpscCertified16Cfr170020AstmD3`)}</p>
        </div>
      )
    }
  ]

  const faqs = [
    {
      question: "What is 16 CFR § 1700.20?",
      answer: "This is the federal Poison Prevention Packaging Act standard. It requires packaging to be designed to be significantly difficult for children under 5 to open, while remaining easy for adults to use."
    },
    {
      question: "Are your CR bags odor-proof?",
      answer: "Yes. We utilize multi-layer high-barrier films with EVOH and nylon to ensure a hermetic seal that blocks all odors and volatile compounds."
    },
    {
      question: "Do you offer recyclable CR pouches?",
      answer: "Absolutely. We are one of the few suppliers offering 100% Recyclable Mono-PE child-resistant pouches that meet both safety and circularity mandates."
    },
    {
      question: "Can I get custom printing on CR pouches?",
      answer: "Yes. We offer high-resolution digital and rotogravure printing on all our CR pouch formats, including 'opaque' requirement compliance for certain jurisdictions."
    }
  ]

  return (
    <>
      <Helmet>
        <title>{t(`${p}.childResistantMylarBagsCpscAst`)}</title>
        <meta name="description" content="Master the technical landscape of child-resistant packaging. 800+ words on 16 CFR § 1700.20 compliance, ASTM D3475 standards, odor-proof engineering, and sustainable CR pouches." />
        <link rel="canonical" href="https://achievepack.com/topics/child-resistant-mylar-bags" />
        <meta name="keywords" content="child resistant mylar bags, CR packaging compliance, 16 CFR 1700.20, ASTM D3475 packaging, odor proof mylar, sustainable CR pouches" />
      </Helmet>

      <SEOPageLayout 
        heroBgColor="#991b1b"
        title="Child Resistant Mylar Bags: Safety & Compliance"
        description="Establishing technical authority in CPSC-certified, high-barrier child-resistant packaging."
        keywords={['CR packaging', 'safety compliance', 'child proof pouches']}
        heroTitle="Certified Safety. Pure Integrity."
        heroSubtitle="16 CFR § 1700.20 | ASTM D3475 | Odor Proof | Sustainable Options"
        introSummary="Safety is not a luxury; it is a legal requirement. This guide outlines how we use advanced closure technology and material science to meet the world's strictest child-resistance standards while delivering the high-barrier performance and sustainability your brand demands."
        sections={sections}
        faqs={faqs}
        schemaType="Article"
        heroImage="/imgs/topics/child-resistant-mylar-hero.png"
      />
    </>
  )
}

export default ChildResistantMylarBagsPage
