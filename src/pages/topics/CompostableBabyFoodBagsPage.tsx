import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { Shield, Utensils, CheckCircle, Award, Calendar, MessageCircle, Target, Zap, Globe, BarChart3, ArrowLeftRight, TrendingUp, ShoppingBag, Sparkles, Microscope, Beaker, Layers, Heart, Baby } from 'lucide-react'
import SEOPageLayout from '../../components/SEOPageLayout'
import ClickableImage from '../../components/ClickableImage'
import { useCalendly } from '../../contexts/CalendlyContext'
import { useTranslation, Trans } from "react-i18next";

const CompostableBabyFoodBagsPage: React.FC = () => {
    const { t } = useTranslation();
    const p = 'seoPages.pages.compostableBabyFoodBags';
  const { openCalendly } = useCalendly()

  const sections = [
    {
      id: 'hero-problem',
      title: 'Compostable Baby Food Bags: Engineering for the Next Generation',
      icon: <Target className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <div className="bg-gradient-to-r from-pink-50 to-blue-50 p-6 rounded-lg border border-pink-200 shadow-sm">
            <p className="text-lg font-medium text-neutral-900 mb-4">
              {t(`${p}.babyFoodPackagingRequiresThe`)}<strong>{t(`${p}.highestLevelOfMaterialHealthAn`)}</strong>{t(`${p}.in2026ParentsAreDemanding`)}<strong>{t(`${p}.plasticFreeNonToxic`)}</strong> {t(`${p}.containersThatProtectTheirInfa`)}</p>
            <div className="grid md:grid-cols-2 gap-4 mt-4">
              <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-pink-600">
                <h4 className="font-semibold text-pink-800">{t(`${p}.theSafetyRisks`)}</h4>
                <ul className="text-sm text-neutral-600 mt-2 space-y-1">
                  <li>{t(`${p}.microplasticMigrationIntoFood`)}</li>
                  <li>{t(`${p}.endocrineDisruptorsBpaBps`)}</li>
                  <li>{t(`${p}.pfasForeverChemicalsInGreaseBa`)}</li>
                  <li>{t(`${p}.massiveWasteFromSingleUsePouch`)}</li>
                </ul>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-blue-500">
                <h4 className="font-semibold text-blue-800">{t(`${p}.theAchievePackSolution`)}</h4>
                <ul className="text-sm text-neutral-600 mt-2 space-y-1">
                  <li>{t(`${p}.tuvOkCompostHomeCertified`)}</li>
                  <li>{t(`${p}.zeroMicroplasticsZeroPfas`)}</li>
                  <li>{t(`${p}.highBarrierBioEvohAluminumFree`)}</li>
                  <li>{t(`${p}.spoutPouchOptimizedForInfantSa`)}</li>
                </ul>
              </div>
            </div>
          </div>
          <p className="mt-4 leading-relaxed">
            {t(`${p}.atAchievePackWeTreatBabyFoodPa`)}<strong>{t(`${p}.medicalGradeTechnicalDeliverab`)}</strong>{t(`${p}.our100CompostableSpoutedPouche`)}<strong>{t(`${p}.verifiableMaterialPurity`)}</strong>.
          </p>
        </div>
      )
    },
    {
      id: 'safety-science',
      title: 'Purity First: Zero-Migration Engineering',
      icon: <Shield className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-6 text-neutral-700">
          <p>
            {t(`${p}.infantHealthIsSensitiveToEvenT`)}<strong>{t(`${p}.gasChromatographyMassSpectrome`)}</strong> {t(`${p}.toVerifyTheSafetyOfOurBioPolym`)}</p>
          
          <div className="grid md:grid-cols-3 gap-6 mt-6">
            <div className="bg-neutral-50 p-6 rounded-xl border border-neutral-200">
              <div className="p-3 bg-pink-100 rounded-lg w-fit mb-4">
                <Shield className="h-6 w-6 text-pink-600" />
              </div>
              <h4 className="font-bold text-neutral-900">{t(`${p}.pfasFree`)}</h4>
              <p className="text-sm text-neutral-600">{t(`${p}.ourGreaseBarriersAreMadeFromAq`)}</p>
            </div>
            <div className="bg-neutral-50 p-6 rounded-xl border border-neutral-200">
              <div className="p-3 bg-blue-100 rounded-lg w-fit mb-4">
                <Beaker className="h-6 w-6 text-blue-600" />
              </div>
              <h4 className="font-bold text-neutral-900">{t(`${p}.bpaBpsFree`)}</h4>
              <p className="text-sm text-neutral-600">{t(`${p}.100EndocrineDisruptorFreeResin`)}</p>
            </div>
            <div className="bg-neutral-50 p-6 rounded-xl border border-neutral-200">
              <div className="p-3 bg-emerald-100 rounded-lg w-fit mb-4">
                <CheckCircle className="h-6 w-6 text-emerald-600" />
              </div>
              <h4 className="font-bold text-neutral-900">{t(`${p}.foodSafeInks`)}</h4>
              <p className="text-sm text-neutral-600">{t(`${p}.lowMigrationDigitalInksThatAre`)}</p>
            </div>
          </div>

          <div className="bg-neutral-100 p-2 rounded-xl border-2 border-neutral-200 mt-8">
            <ClickableImage 
              src="/imgs/pouch-shape/ads/a_achieve_pack_3side_seal_closeup_7717814.webp" 
              alt="High safety baby food pouch" 
              className="w-full h-auto rounded-lg shadow-sm"
              caption="EEAT Insight: Bio-polymer structures that eliminate the risk of microplastic ingestion for infants"
            />
          </div>
        </div>
      )
    },
    {
      id: 'spout-technology',
      title: 'Spout Technology: Safe & Functional',
      icon: <Utensils className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-6 text-neutral-700">
          <p>
            {t(`${p}.theSpoutAndCapAreAsImportantAs`)}<strong>{t(`${p}.bioBasedPeAndPpFitments`)}</strong> {t(`${p}.thatAreDesignedForInfantErgono`)}</p>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h4 className="font-bold text-neutral-900">{t(`${p}.fitmentFeatures`)}</h4>
              <ul className="space-y-3 text-sm">
                <li className="p-4 bg-white border border-neutral-200 rounded-xl shadow-sm">
                  <h5 className="font-bold text-neutral-900">{t(`${p}.antiChokeCaps`)}</h5>
                  <p className="text-xs text-neutral-600 mt-1">{t(`${p}.oversizedVentilatedCapsDesigne`)}</p>
                </li>
                <li className="p-4 bg-white border border-neutral-200 rounded-xl shadow-sm">
                  <h5 className="font-bold text-neutral-900">{t(`${p}.tamperEvidentSeals`)}</h5>
                  <p className="text-xs text-neutral-600 mt-1">{t(`${p}.ensuringTheProductRemainsSteri`)}</p>
                </li>
                <li className="p-4 bg-white border border-neutral-200 rounded-xl shadow-sm">
                  <h5 className="font-bold text-neutral-900">{t(`${p}.bioPolymerSpouts`)}</h5>
                  <p className="text-xs text-neutral-600 mt-1">{t(`${p}.fitmentsMadeFromSugarcaneDeriv`)}</p>
                </li>
              </ul>
            </div>
            <div className="bg-neutral-50 p-6 rounded-xl border border-neutral-200 flex flex-col justify-center">
              <h4 className="font-bold text-neutral-900 mb-2">{t(`${p}.shelfLifeBarrier`)}</h4>
              <p className="text-sm text-neutral-600 leading-relaxed">
                {t(`${p}.babyFoodPureesAreHighlySensiti`)}<strong>{t(`${p}.bioEvohBarriers`)}</strong> {t(`${p}.achieveOtrLevelsEquivalentToAl`)}</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'cta',
      title: 'Protect the Future Today',
      icon: <MessageCircle className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="bg-gradient-to-br from-pink-800 to-blue-950 p-10 rounded-2xl text-white text-center shadow-2xl">
          <h3 className="text-3xl font-bold mb-6">{t(`${p}.safeForBabySafeForThePlanet`)}</h3>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            {t(`${p}.readyToSecureANonToxicComposta`)}</p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={openCalendly}
              className="flex items-center justify-center gap-2 bg-white text-pink-950 px-8 py-4 rounded-xl font-bold hover:bg-neutral-100 transition shadow-lg"
            >
              <Calendar className="h-5 w-5" />
              {t(`${p}.bookBabyFoodSafetySession`)}</button>
            <Link
              to="/store"
              className="flex items-center justify-center gap-2 border-2 border-white text-white px-8 py-4 rounded-xl font-bold hover:bg-white/10 transition shadow-lg"
            >
              <ShoppingBag className="h-5 w-5" />
              {t(`${p}.orderSafetySamples`)}</Link>
          </div>
          <p className="mt-8 text-xs opacity-60 uppercase tracking-widest">
            {t(`${p}.zeroMicroplasticsPfasFreeBpaFr`)}</p>
        </div>
      )
    }
  ]

  const faqs = [
    {
      question: "Are your baby food bags microwave-safe?",
      answer: "We recommend gentle warming in water, but because our structures are metal-free (no aluminum), they are technically microwave-safe. However, always follow food safety guidelines for infant heating."
    },
    {
      question: "How do I know the material won't leach into the food?",
      answer: "We provide full migration testing reports based on EU 10/2011 and FDA standards, verifying that our bio-polymers remain inert and safe for infant consumption."
    },
    {
      question: "Are the caps recyclable?",
      answer: "Yes. Our sugarcane-derived PE caps are fully compatible with standard HDPE/LDPE recycling streams, even while the pouch is designed for composting."
    },
    {
      question: "What is the oxygen barrier performance?",
      answer: "Our Bio-EVOH integrated films achieve an OTR of < 0.1 cc/m²/day, ensuring that sensitive vitamins and natural colors in purees are protected from oxidation."
    }
  ]

  return (
    <>
      <Helmet>
        <title>{t(`${p}.compostableBabyFoodBagsNonToxi`)}</title>
        <meta name="description" content="Master the technical safety of compostable baby food packaging. 800+ words on zero-microplastics, PFAS-free barriers, anti-choke caps, and infant food safety." />
        <link rel="canonical" href="https://achievepack.com/topics/compostable-baby-food-bags" />
        <meta name="keywords" content="compostable baby food bags, non-toxic baby food packaging, microplastic free pouches, PFAS free baby food, safe baby food spouts, bio-polymer baby food" />
      </Helmet>

      <SEOPageLayout 
        heroBgColor="#be185d"
        title="Compostable Baby Food Bags: Safety Engineering"
        description="Establishing technical authority in high-purity, non-toxic compostable packaging for the next generation."
        keywords={['baby food packaging', 'compostable safety', 'non-toxic pouches']}
        heroTitle="Pure for Baby. Pure for Earth."
        heroSubtitle="Zero Microplastics | PFAS Free | BPA Free | TUV OK Compost Home"
        introSummary="Baby food is the most sensitive category in the food industry. This guide provides the technical breakdown of how we use bio-polymer science to eliminate microplastics, endocrine disruptors, and forever chemicals from infant nutrition—delivering absolute safety and circularity."
        sections={sections}
        faqs={faqs}
        schemaType="Article"
        heroImage="/imgs/pouch-shape/ads/a_achieve_pack_3side_seal_closeup_7717814.webp"
      />
    </>
  )
}

export default CompostableBabyFoodBagsPage
