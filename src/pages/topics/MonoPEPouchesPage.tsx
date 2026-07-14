import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { Recycle, Package, CheckCircle, Award, Calendar, MessageCircle, Target, Shield, Zap, Globe, Factory, BarChart3, ArrowLeftRight, TrendingUp, ShoppingBag, Sparkles, Microscope, Beaker, Layers, Thermometer  , FileSearch } from 'lucide-react'
import SEOPageLayout from '../../components/SEOPageLayout'
import ClickableImage from '../../components/ClickableImage'
import { useCalendly } from '../../contexts/CalendlyContext'
import { useTranslation, Trans } from "react-i18next";

const MonoPEPouchesPage: React.FC = () => {
    const { t } = useTranslation();
    const p = 'seoPages.pages.monoPEPouches';
  const { openCalendly } = useCalendly()

  const sections = [
    {
      id: 'hero-problem',
      title: 'The Mono-Material Revolution: Solving the Multi-Layer Problem',
      icon: <Target className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg border border-blue-200">
            <p className="text-lg font-medium text-neutral-900 mb-4">
              {t(`${p}.traditionallyFlexiblePouchesHa`)}<strong>{t(`${p}.monoPePolyethylenePouches`)}</strong> {t(`${p}.solveThisByUtilizingASinglePol`)}<strong>{t(`${p}.1SustainableTransition`)}</strong> {t(`${p}.forBrandsAimingFor100Recyclabi`)}</p>
            <div className="grid md:grid-cols-2 gap-4 mt-4">
              <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-indigo-500">
                <h4 className="font-semibold text-indigo-800">{t(`${p}.theRecyclabilityBarrier`)}</h4>
                <ul className="text-sm text-neutral-600 mt-2 space-y-1">
                  <li>{t(`${p}.eliminatingMixedMaterialContam`)}</li>
                  <li>{t(`${p}.compatibilityWithSpiCode4PeStr`)}</li>
                  <li>{t(`${p}.highPurityResinRecoveryForSeco`)}</li>
                  <li>{t(`${p}.complianceWithEuPpwrCircularit`)}</li>
                </ul>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-green-500">
                <h4 className="font-semibold text-green-800">{t(`${p}.achievePackMonoTech`)}</h4>
                <ul className="text-sm text-neutral-600 mt-2 space-y-1">
                  <li>{t(`${p}.mdoPeMachineDirectionOrientedS`)}</li>
                  <li>{t(`${p}.evohPeHighOxygenBarrierLt05Otr`)}</li>
                  <li>{t(`${p}.highPurityMetalFreeLamination`)}</li>
                  <li>{t(`${p}.recyclablePeZippersSpouts`)}</li>
                </ul>
              </div>
            </div>
          </div>
          <p className="mt-4 leading-relaxed">
            {t(`${p}.atAchievePackWeHaveMasteredThe`)}<strong>{t(`${p}.allPeStructure`)}</strong>{t(`${p}.byUtilizingMdoPeMachineDirecti`)}</p>
        </div>
      )
    },
    {
      id: 'mdo-pe-engineering',
      title: 'The Science of MDO-PE: Strength Through Stretching',
      icon: <Zap className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-6 text-neutral-700">
          <p>
            {t(`${p}.theBiggestHurdleForMonoPeHasAl`)}<strong>{t(`${p}.heatResistanceAndStiffness`)}</strong>{t(`${p}.traditionalPeIsTooSoftForHighS`)}</p>
          
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <h4 className="font-bold text-neutral-900">{t(`${p}.howMdoPeWorks`)}</h4>
              <p className="text-sm leading-relaxed">
                {t(`${p}.machineDirectionOrientationMdo`)}</p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span><strong>{t(`${p}.highModulus`)}</strong> {t(`${p}.stiffnessComparableToPetAllowi`)}</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span><strong>{t(`${p}.heatResistance`)}</strong> {t(`${p}.an812CHigherMeltingPointPreven`)}</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span><strong>{t(`${p}.improvedClarity`)}</strong> {t(`${p}.nearGlassClarityForWindowsAndP`)}</span>
                </li>
              </ul>
            </div>
            <div className="bg-neutral-100 p-2 rounded-xl border-2 border-neutral-200 mt-8">
            <ClickableImage 
              src="/imgs/topics/mono-pe-recyclable-hero.png" 
              alt="Mono-PE Material Structure" 
              className="w-full h-auto rounded-lg shadow-sm"
              caption="EEAT Insight: Single-polymer engineering that enables 100% recyclability"
            />
          </div>
          </div>
        </div>
      )
    },
    {
      id: 'barrier-technology',
      title: 'High-Barrier Mono-PE: EVOH & AlOx',
      icon: <Microscope className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-6 text-neutral-700">
          <p>
            {t(`${p}.recyclabilityIsUselessIfThePro`)}<strong>{t(`${p}.specializedBarrierAdditives`)}</strong> {t(`${p}.thatAreCompatibleWithThePeRecy`)}</p>
          
          <div className="grid md:grid-cols-3 gap-6 mt-6">
            <div className="bg-neutral-50 p-6 rounded-xl border border-neutral-200">
              <div className="p-3 bg-blue-100 rounded-lg w-fit mb-4">
                <Shield className="h-6 w-6 text-blue-600" />
              </div>
              <h4 className="font-bold text-neutral-900">{t(`${p}.evohPe`)}</h4>
              <p className="text-sm text-neutral-600">{t(`${p}.aCoExtrudedGasBarrierThatBlock`)}</p>
            </div>
            <div className="bg-neutral-50 p-6 rounded-xl border border-neutral-200">
              <div className="p-3 bg-indigo-100 rounded-lg w-fit mb-4">
                <Layers className="h-6 w-6 text-indigo-600" />
              </div>
              <h4 className="font-bold text-neutral-900">{t(`${p}.aloxSioxCoating`)}</h4>
              <p className="text-sm text-neutral-600">{t(`${p}.vacuumDepositedNanoCoatingsTha`)}</p>
            </div>
            <div className="bg-neutral-50 p-6 rounded-xl border border-neutral-200">
              <div className="p-3 bg-emerald-100 rounded-lg w-fit mb-4">
                <Thermometer className="h-6 w-6 text-emerald-600" />
              </div>
              <h4 className="font-bold text-neutral-900">{t(`${p}.hotTackStrength`)}</h4>
              <p className="text-sm text-neutral-600">{t(`${p}.ourSealantLayersAreEngineeredF`)}</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'compliance-eeat',
      title: 'Compliance & Recyclability Verification',
      icon: <Award className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-6 text-neutral-700">
          <p>
            {t(`${p}.claimingRecyclableRequiresProo`)}<strong>{t(`${p}.ceflex`)}</strong> {t(`${p}.and`)}<strong>{t(`${p}.prePlasticRecyclersEurope`)}</strong> {t(`${p}.designForRecyclingGuidelines`)}</p>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-xl border border-neutral-200">
              <div className="flex items-center gap-3 mb-4">
                <Globe className="h-6 w-6 text-primary-600" />
                <h4 className="font-bold text-neutral-900">{t(`${p}.globalCertification`)}</h4>
              </div>
              <p className="text-sm text-neutral-600 leading-relaxed">
                {t(`${p}.ourStructuresHaveBeenAuditedAn`)}<strong>{t(`${p}.recyclabilityRateOfGt90`)}</strong> {t(`${p}.inExistingMunicipalInfrastruct`)}</p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-neutral-200">
              <div className="flex items-center gap-3 mb-4">
                <FileSearch className="h-6 w-6 text-primary-600" />
                <h4 className="font-bold text-neutral-900">{t(`${p}.technicalTraceability`)}</h4>
              </div>
              <p className="text-sm text-neutral-600 leading-relaxed">
                {t(`${p}.weProvideThe`)}<strong>{t(`${p}.technicalDataSheetsTds`)}</strong> {t(`${p}.and`)}<strong>{t(`${p}.declarationOfComplianceDoc`)}</strong> {t(`${p}.requiredForYourBrandSEsgReport`)}</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'cta',
      title: 'Upgrade to 100% Recyclable Mono-PE',
      icon: <MessageCircle className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="bg-gradient-to-br from-blue-700 to-indigo-900 p-10 rounded-2xl text-white text-center shadow-2xl">
          <h3 className="text-3xl font-bold mb-6">{t(`${p}.circularDesignProvenPerformanc`)}</h3>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            {t(`${p}.readyToTransitionFromNonRecycl`)}</p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={openCalendly}
              className="flex items-center justify-center gap-2 bg-white text-blue-900 px-8 py-4 rounded-xl font-bold hover:bg-neutral-100 transition shadow-lg"
            >
              <Calendar className="h-5 w-5" />
              {t(`${p}.bookRecyclabilityAudit`)}</button>
            <Link
              to="/store"
              className="flex items-center justify-center gap-2 border-2 border-white text-white px-8 py-4 rounded-xl font-bold hover:bg-white/10 transition shadow-lg"
            >
              <ShoppingBag className="h-5 w-5" />
              {t(`${p}.orderMonoPeSamples`)}</Link>
          </div>
          <p className="mt-8 text-xs opacity-60 uppercase tracking-widest">
            {t(`${p}.ceflexCompliantSpiCode4MdoPeTe`)}</p>
        </div>
      )
    }
  ]

  const faqs = [
    {
      question: "What is the difference between PE and Mono-PE?",
      answer: "A standard PE bag might have a PET outer layer for stiffness, which makes it non-recyclable. 'Mono-PE' means the entire structure—including the outer print layer, the barrier layer, and the sealant—is made from the same Polyethylene family, allowing it to be recycled as a single unit."
    },
    {
      question: "Is Mono-PE as stiff as standard PET/PE bags?",
      answer: "Yes, when utilizing MDO (Machine Direction Orientation) technology. MDO-PE mimics the stiffness and thermal resistance of PET, ensuring the bag stands up on the shelf and runs efficiently on automated packaging lines."
    },
    {
      question: "Can I get a high oxygen barrier with Mono-PE?",
      answer: "Absolutely. We utilize co-extruded EVOH (Ethylene Vinyl Alcohol) layers within the PE structure. Because EVOH makes up less than 5% of the total weight, the bag remains 100% recyclable according to CEFLEX and PRE guidelines."
    },
    {
      question: "Are these bags recyclable at home?",
      answer: "Recyclability depends on your local municipality. In many countries, Mono-PE pouches are accepted in 'Soft Plastic' or 'Store Drop-off' recycling programs. We help brands integrate clear 'How2Recycle' instructions on their artwork."
    }
  ]

  return (
    <>
      <Helmet>
        <title>{t(`${p}.monoPeRecyclablePouchesHighBar`)}</title>
        <meta name="description" content="Technical guide to Mono-PE recyclable pouches. 800+ words on MDO-PE engineering, EVOH barrier science, and circular economy compliance." />
        <link rel="canonical" href="https://achievepack.com/topics/mono-pe-pouches" />
        <meta name="keywords" content="mono-PE pouches, recyclable flexible packaging, MDO-PE technology, EVOH barrier PE, circular packaging design, mono-material recyclability" />
      </Helmet>

      <SEOPageLayout 
        heroBgColor="#1e3a8a"
        title="Mono-PE Pouches: The Future of Recyclability"
        description="Engineering high-performance flexible packaging that is 100% recyclable through mono-material innovation."
        keywords={['mono-PE pouches', 'recyclable pouches', 'circular economy packaging']}
        heroTitle="Recyclable. Without Compromise."
        heroSubtitle="High-Barrier MDO-PE | 100% Circular | Lab-Verified"
        introSummary="Your competitors are making bold sustainability claims, while you are losing sleep over upcoming plastic taxes and Extended Producer Responsibility (EPR) fees because your current multi-layer pouches are technically unrecyclable. The days of landfill-bound multi-layer packaging are numbered. We provide the technical bridge to 100% recyclability through Mono-PE engineering, delivering the stiffness, barrier protection, and shelf-impact your brand demands in a circular-ready format."
        sections={sections}
        faqs={faqs}
        schemaType="Product"
        heroImage="/imgs/seo-photos/a_mono_recyclable_certification_compliance_7572715.webp"
      />
    </>
  )
}

export default MonoPEPouchesPage
