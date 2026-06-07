import React from 'react'
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { 
  Beaker, Leaf, Award, CheckCircle, Clock, Shield, Target, 
  Package, Zap, Factory, AlertTriangle, ArrowRight, ShoppingBag, Sparkles 
} from 'lucide-react'
import SEOPageLayout from '../../components/SEOPageLayout'
import ClickableImage from '../../components/ClickableImage'

const BabyFoodPage: React.FC = () => {
  const { t } = useTranslation();
  const p = 'seoPages.pages.babyFood';
  const sections = [
    {
      id: 'safety-challenge',
      title: t(`${p}.title_theBabyFoodChallengeToxicityfree`),
      icon: <Beaker className="h-5 w-5 text-sky-700" />,
      content: (
        <div className="space-y-4 text-neutral-700 leading-relaxed">
          <p className="text-lg">
            Organic baby purees, infant formulas, and baby snacks demands the absolute highest tier of packaging safety and structural integrity. Pureed fruit and vegetable blends undergo severe hot-fill sterilization or pasteurization (up to 85°C–95°C) to secure shelf stability. Packaging must be 100% BPA-free, toxicity-free, and endocrine-disruptor-free, while remaining completely leak-proof under thermal stress.
          </p>
          <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-xl border border-amber-200 grid md:grid-cols-2 gap-6 my-4">
            <div>
              <h4 className="font-semibold text-amber-900 flex items-center gap-2 mb-2">
                <AlertTriangle className="h-4 w-4 text-amber-600" /> Key Material Risks
              </h4>
              <ul className="text-sm text-neutral-700 space-y-2">
                <li>• <strong>{t(`${p}.chemicalLeaching`)}</strong> {t(`${p}.traceElementsFromStandardPlastics`)}</li>
                <li>• <strong>{t(`${p}.sealRupture`)}</strong> {t(`${p}.thermalPasteurizationWeakensStandardLowtemperature`)}</li>
                <li>• <strong>{t(`${p}.chokingHazards`)}</strong> {t(`${p}.traditionalSmallCapsCanBe`)}</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-green-900 flex items-center gap-2 mb-2">
                <Shield className="h-4 w-4 text-green-600" /> Engineering Requirements
              </h4>
              <ul className="text-sm text-neutral-700 space-y-2">
                <li>• <strong>{t(`${p}.100Toxicityfree`)}</strong> {t(`${p}.certifiedFdaEuFoodContact`)}</li>
                <li>• <strong>{t(`${p}.hotfillSealants`)}</strong> {t(`${p}.specialtyHightemperatureCopolymersStableUp`)}</li>
                <li>• <strong>{t(`${p}.chokeproofCaps`)}</strong> {t(`${p}.largediameterSafetyCapsDesignedWith`)}</li>
              </ul>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'packaging-options',
      title: t(`${p}.title_5PackagingOptionsComparedLowcost`),
      icon: <Package className="h-5 w-5 text-sky-700" />,
      content: (
        <div className="space-y-6">
          <p className="text-neutral-700">
            Compare our five top-tier sustainable baby food packaging options engineered for absolute safety and puncture resistance.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
            {/* Option 1: Choke-Proof Spout Pouch */}
            <div className="bg-white border border-neutral-200 rounded-xl p-5 shadow-sm hover:shadow-md transition flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-start mb-3">
                  <span className="bg-neutral-100 text-neutral-800 text-xs font-bold px-2.5 py-1 rounded">{t(`${p}.option1`)}</span>
                  <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2 py-0.5 rounded">{t(`${p}.retailPureeMvp`)}</span>
                </div>
                <h4 className="font-bold text-neutral-900 text-lg mb-2">{t(`${p}.chokeproofSpoutPouch`)}</h4>
                <p className="text-sm text-neutral-600 mb-4">
                  The standard for organic purees. A premium spouted stand-up pouch featuring a pre-installed choke-proof safety cap. Engineered for absolute leak resistance and easy squeezing.
                </p>
                <ul className="text-xs text-neutral-500 space-y-1 mb-4">
                  <li>{t(`${p}.highbarrierMetallizedAluminumCore`)}</li>
                  <li>{t(`${p}.largeAntichokeSafetyCap`)}</li>
                  <li>{t(`${p}.bpaPhthalatefreeFoodsafeLining`)}</li>
                </ul>
              </div>
              <Link to="/store/product/spouted-foil-pouch" className="text-sm font-semibold text-sky-700 hover:text-sky-800 flex items-center gap-1 mt-2">
                Order Spout Pouches (From US$0.14) <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            {/* Option 2: Recyclable Mono-PE Spout Bag */}
            <div className="bg-white border border-neutral-200 rounded-xl p-5 shadow-sm hover:shadow-md transition flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-start mb-3">
                  <span className="bg-neutral-100 text-neutral-800 text-xs font-bold px-2.5 py-1 rounded">{t(`${p}.option2`)}</span>
                  <span className="bg-green-100 text-green-800 text-xs font-semibold px-2 py-0.5 rounded">{t(`${p}.curbsideRecyclable`)}</span>
                </div>
                <h4 className="font-bold text-neutral-900 text-lg mb-2">{t(`${p}.recyclableMonopeSpoutPouch`)}</h4>
                <p className="text-sm text-neutral-600 mb-4">
                  Fully recyclable single-polymer PE structure with EVOH barrier coatings. Approved for store drop-off flexible packaging collection streams, combining sustainability and safety.
                </p>
                <ul className="text-xs text-neutral-500 space-y-1 mb-4">
                  <li>{t(`${p}.100RecyclableMonomaterialStructure`)}</li>
                  <li>{t(`${p}.highClarityTransparentWindowOptions`)}</li>
                  <li>{t(`${p}.toxicityfreeCoextrudedBarrier`)}</li>
                </ul>
              </div>
              <Link to="/store/product/eco-standup" className="text-sm font-semibold text-sky-700 hover:text-sky-800 flex items-center gap-1 mt-2">
                Buy Recyclable Pouches <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            {/* Option 3: Sugarcane Bio-PE Spout Pouch */}
            <div className="bg-white border border-neutral-200 rounded-xl p-5 shadow-sm hover:shadow-md transition flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-start mb-3">
                  <span className="bg-neutral-100 text-neutral-800 text-xs font-bold px-2.5 py-1 rounded">{t(`${p}.option3`)}</span>
                  <span className="bg-purple-100 text-purple-800 text-xs font-semibold px-2 py-0.5 rounded">{t(`${p}.sugarcaneBiope`)}</span>
                </div>
                <h4 className="font-bold text-neutral-900 text-lg mb-2">{t(`${p}.sugarcaneBiopeSpoutPouch`)}</h4>
                <p className="text-sm text-neutral-600 mb-4">
                  Crafted using plant-based organic polyethylene derived from sustainable sugarcane. The ultimate option for absolute long-term seal strength and hot-fill resilience.
                </p>
                <ul className="text-xs text-neutral-500 space-y-1 mb-4">
                  <li>{t(`${p}.biobasedPolymerStructure`)}</li>
                  <li>{t(`${p}.exceptionalResistanceAgainstAcidicPurees`)}</li>
                  <li>{t(`${p}.highTemperatureStableUpTo`)}</li>
                </ul>
              </div>
              <Link to="/store/product/spouted-foil-pouch" className="text-sm font-semibold text-sky-700 hover:text-sky-800 flex items-center gap-1 mt-2">
                Shop Bio-PE Pouches <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            {/* Option 4: Compostable Kraft Puffs Bag */}
            <div className="bg-white border border-neutral-200 rounded-xl p-5 shadow-sm hover:shadow-md transition flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-start mb-3">
                  <span className="bg-neutral-100 text-neutral-800 text-xs font-bold px-2.5 py-1 rounded">{t(`${p}.option4`)}</span>
                  <span className="bg-green-100 text-green-800 text-xs font-semibold px-2 py-0.5 rounded">{t(`${p}.zerowasteSnacks`)}</span>
                </div>
                <h4 className="font-bold text-neutral-900 text-lg mb-2">{t(`${p}.compostableBabySnacksPouch`)}</h4>
                <p className="text-sm text-neutral-600 mb-4">
                  Earthy organic unbleached kraft paper on the outside combined with certified biodegradable inner layers. Ideal for baby puffs, organic teething wafers, and dry snacks.
                </p>
                <ul className="text-xs text-neutral-500 space-y-1 mb-4">
                  <li>{t(`${p}.earthyOrganicKraftPaperLook`)}</li>
                  <li>{t(`${p}.en13432AstmD6400Certified`)}</li>
                  <li>{t(`${p}.airtightZipClosureToStop`)}</li>
                </ul>
              </div>
              <Link to="/products/compostable-coffee-bags" className="text-sm font-semibold text-sky-700 hover:text-sky-800 flex items-center gap-1 mt-2">
                Order Compostable Kraft <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            {/* Option 5: FSC Recycled Multi-Pack Box */}
            <div className="bg-white border border-neutral-200 rounded-xl p-5 shadow-sm hover:shadow-md transition flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-start mb-3">
                  <span className="bg-neutral-100 text-neutral-800 text-xs font-bold px-2.5 py-1 rounded">{t(`${p}.option5`)}</span>
                  <span className="bg-indigo-100 text-indigo-800 text-xs font-semibold px-2 py-0.5 rounded">{t(`${p}.subscriptionBox`)}</span>
                </div>
                <h4 className="font-bold text-neutral-900 text-lg mb-2">{t(`${p}.fscCustomMultipackBox`)}</h4>
                <p className="text-sm text-neutral-600 mb-4">
                  Package individual puree pouches or dry wafer packs in customized FSC certified multi-pack folding boxes. Perfect for retail sets or subscription box services.
                </p>
                <ul className="text-xs text-neutral-500 space-y-1 mb-4">
                  <li>{t(`${p}.fscRecycledSolidCardboard`)}</li>
                  <li>{t(`${p}.antiscratchMatteTextureCoating`)}</li>
                  <li>{t(`${p}.shipsFlatToMinimizeInventory`)}</li>
                </ul>
              </div>
              <a href="https://calendly.com/30-min-free-packaging-consultancy" target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-sky-700 hover:text-sky-800 flex items-center gap-1 mt-2">
                Design Multi-Pack Boxes <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'interactive-showcase',
      title: t(`${p}.title_premiumVisualMockupsProductShowcase`),
      icon: <Sparkles className="h-5 w-5 text-sky-700" />,
      content: (
        <div className="space-y-6">
          <p className="text-neutral-700">
            Click to inspect high-resolution product prototypes. Specially designed to withstand hot-fill pasteurization and comply with strict FDA non-toxicity guidelines.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-neutral-50 p-3 rounded-lg border border-neutral-200 flex flex-col justify-between">
              <ClickableImage 
                src="/imgs/demo-site/baby/achieve_baby_realistic_hero.png" 
                alt="Premium baby spout pouch packaging mockup with safety cap" 
                className="w-full h-40 object-cover rounded-md mb-2 shadow-sm"
              />
              <div>
                <h5 className="font-semibold text-xs text-neutral-900">{t(`${p}.premiumPureeSpoutPouches`)}</h5>
                <p className="text-[10px] text-neutral-500 mt-1">{t(`${p}.leakproofThermalSealsAntichokeSafety`)}</p>
              </div>
            </div>

            <div className="bg-neutral-50 p-3 rounded-lg border border-neutral-200 flex flex-col justify-between">
              <ClickableImage 
                src="/imgs/demo-site/baby/achieve_baby_pea_realistic.png" 
                alt="Organic green pea baby puree spout pouch mockup" 
                className="w-full h-40 object-cover rounded-md mb-2 shadow-sm"
              />
              <div>
                <h5 className="font-semibold text-xs text-neutral-900">{t(`${p}.organicPeaPureePouches`)}</h5>
                <p className="text-[10px] text-neutral-500 mt-1">{t(`${p}.sugarcanebasedBiopeToxicityfreeCopolymers`)}</p>
              </div>
            </div>

            <div className="bg-neutral-50 p-3 rounded-lg border border-neutral-200 flex flex-col justify-between">
              <ClickableImage 
                src="/imgs/demo-site/baby/achieve_baby_carrot_realistic.png" 
                alt="Sweet carrot baby puree spout pouch mockup with clear window" 
                className="w-full h-40 object-cover rounded-md mb-2 shadow-sm"
              />
              <div>
                <h5 className="font-semibold text-xs text-neutral-900">{t(`${p}.sweetCarrotPureePouches`)}</h5>
                <p className="text-[10px] text-neutral-500 mt-1">{t(`${p}.clearHighbarrierWindowStorecollectionRecyclable`)}</p>
              </div>
            </div>

            <div className="bg-neutral-50 p-3 rounded-lg border border-neutral-200 flex flex-col justify-between">
              <ClickableImage 
                src="/imgs/demo-site/baby/achieve_baby_compost_texture.png" 
                alt="Compostable baby food puffs wafer packaging sachet" 
                className="w-full h-40 object-cover rounded-md mb-2 shadow-sm"
              />
              <div>
                <h5 className="font-semibold text-xs text-neutral-900">{t(`${p}.babySnacksCompostableBags`)}</h5>
                <p className="text-[10px] text-neutral-500 mt-1">{t(`${p}.en13432CertifiedPaperAirtight`)}</p>
              </div>
            </div>
          </div>

          <div className="bg-sky-50 rounded-xl p-6 border border-sky-200 flex flex-col md:flex-row items-center gap-6 mt-6">
            <div className="w-full md:w-1/3">
              <ClickableImage 
                src="/imgs/illustrated/a_baby_food_hero_v1_7008467.webp" 
                alt="Organic baby food packaging pouches and boxes in clean kitchen environment" 
                className="w-full h-48 object-cover rounded-lg shadow-md"
              />
            </div>
            <div className="w-full md:w-2/3 space-y-3">
              <span className="bg-[#D4FF00] text-black text-[10px] font-black px-2.5 py-1 uppercase rounded-full border border-black shadow-[1px_1px_0px_0px_rgba(0,0,0,1)]">
                Highlighted Baby Solution
              </span>
              <h4 className="font-bold text-neutral-900 text-lg">{t(`${p}.featuredEcoSolutionSugarcaneBiope`)}</h4>
              <p className="text-sm text-neutral-700">
                Pioneer absolute safety and carbon neutrality in infant nutrition using our <strong>{t(`${p}.sugarcaneBiopeSpoutPouches`)}</strong>. Extruded entirely from sugarcane-derived organic polyethylene, these pouches are 100% free of BPA, phthalates, and trace chemicals. Fitted with a large anti-choke safety cap, they are drop-tested to withstand up to 1.5-meter drops without seams bursting during hot-fill pasteurization.
              </p>
              <div className="flex gap-4">
                <Link to="/store/product/spouted-foil-pouch" className="bg-sky-700 hover:bg-sky-800 text-white text-xs font-semibold px-4 py-2.5 rounded transition">
                  Buy Spout Pouches (MOQ 100)
                </Link>
                <Link to="/products/compostable-coffee-bags" className="bg-white hover:bg-neutral-100 text-neutral-800 text-xs font-semibold px-4 py-2.5 rounded border border-neutral-300 transition">
                  Order Compostable Puffs Bags
                </Link>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'expert-checklist',
      title: t(`${p}.title_activeComplianceTestingProtocolChecklist`),
      icon: <Award className="h-5 w-5 text-sky-700" />,
      content: (
        <div className="space-y-4 text-neutral-700 text-sm">
          <p>
            To secure 100% non-toxicity and absolute thermal seal integrity during hot-fill pasteurization lines, we advise adhering to this protocol checklist:
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="border border-neutral-200 rounded-lg p-4 bg-neutral-50">
              <h5 className="font-bold text-neutral-900 mb-2">{t(`${p}.phase1MaterialVerification`)}</h5>
              <ul className="space-y-2 text-neutral-600 text-xs">
                <li className="flex gap-2"><span className="text-green-600 font-bold">✔</span> {t(`${p}.performChemicalLeachingTestTo`)}</li>
                <li className="flex gap-2"><span className="text-green-600 font-bold">✔</span> {t(`${p}.confirmDirectFoodContactSafety`)}</li>
                <li className="flex gap-2"><span className="text-green-600 font-bold">✔</span> {t(`${p}.matchPouchThicknessToPuree`)}</li>
              </ul>
            </div>
            <div className="border border-neutral-200 rounded-lg p-4 bg-neutral-50">
              <h5 className="font-bold text-neutral-900 mb-2">{t(`${p}.phase2IntegrityTesting`)}</h5>
              <ul className="space-y-2 text-neutral-600 text-xs">
                <li className="flex gap-2"><span className="text-green-600 font-bold">✔</span> {t(`${p}.runA30dayThermalAging`)}</li>
                <li className="flex gap-2"><span className="text-green-600 font-bold">✔</span> {t(`${p}.subjectHotfilledSpoutPouchesTo`)}</li>
                <li className="flex gap-2"><span className="text-green-600 font-bold">✔</span> {t(`${p}.verifyAntichokingCapSizeTo`)}</li>
              </ul>
            </div>
          </div>
        </div>
      )
    }
  ]

  const faqs = [
    {
      question: t(`${p}.question_areTheseBabyFoodSpout`),
      answer: t(`${p}.answer_yesEveryBabyFoodPackaging`)
    },
    {
      question: t(`${p}.question_canTheseSpoutPouchesWithstand`),
      answer: t(`${p}.answer_yesAbsolutelyOurBabyFood`)
    },
    {
      question: t(`${p}.question_whatMakesThePreinstalledCaps`),
      answer: t(`${p}.answer_weUsePediatricapprovedLargediameterSafety`)
    },
    {
      question: t(`${p}.question_whatIsTheMoqFor`),
      answer: t(`${p}.answer_weAccommodateSmallBatchTesting`)
    }
  ]

  const tables = [
    {
      title: t(`${p}.title_technicalComparisonBabyFoodPackaging`),
      data: {
        headers: [t(`${p}.table_format`),t(`${p}.table_oxygenBarrierOtr`),t(`${p}.table_waterVaporWvtr`),t(`${p}.table_hotfillSterile95c`),t(`${p}.table_moq`),t(`${p}.table_relativeCost`)],
        rows: [
          [t(`${p}.table_chokeproofSpoutPouch`),t(`${p}.table_005Mlmday`),t(`${p}.table_008Gmday`),t(`${p}.table_specialtyFoilCore`),t(`${p}.table_100Pcs`),t(`${p}.table_low`)],
          [t(`${p}.table_recyclableMonopeSpout`),t(`${p}.table_032Mlmday`),t(`${p}.table_026Gmday`),t(`${p}.table_evohpeLayer`),t(`${p}.table_500Pcs`),t(`${p}.table_medium`)],
          [t(`${p}.table_sugarcaneBiopeSpout`),t(`${p}.table_008Mlmday`),t(`${p}.table_010Gmday`),t(`${p}.table_sugarcaneFoilCore`),t(`${p}.table_500Pcs`),t(`${p}.table_medium`)],
          [t(`${p}.table_compostableKraftBag`),t(`${p}.table_045Mlmday`),t(`${p}.table_039Gmday`),t(`${p}.table_drySnacksOnly`),t(`${p}.table_500Pcs`),t(`${p}.table_medium`)],
          [t(`${p}.table_fscCustomDisplayBox`),t(`${p}.table_naOuterProtection`),t(`${p}.table_na`),t(`${p}.table_na`),t(`${p}.table_200Pcs`),t(`${p}.table_premium`)]
        ]
      }
    }
  ]

  const relatedLinks = [
    {
      title: t(`${p}.title_spoutedFoilStandUpPouches`),
      url: "/store/product/spouted-foil-pouch",
      description: t(`${p}.description_exploreOurCertifiedFoodgradeSpouted`)
    },
    {
      title: t(`${p}.title_recyclableMonomaterialPouches`),
      url: "/store/product/eco-standup",
      description: t(`${p}.description_buyCurbsiderecyclableStandupPouchesWith`)
    },
    {
      title: t(`${p}.title_compostableStandUpPouches`),
      url: "/products/compostable-coffee-bags",
      description: t(`${p}.description_orderPremiumCertifiedCompostableFlexible`)
    },
    {
      title: t(`${p}.title_customPrintedBoxPackaging`),
      url: "/store?category=boxes",
      description: t(`${p}.description_browsePremiumFscCertifiedSolid`)
    }
  ]

  return (
    <>
      <Helmet>
        <title>{t(`${p}.metaTitle`)}</title>
        <meta name="description" content={t(`${p}.metaDescription`)} />
        <link rel="canonical" href="https://achievepack.com/industry/baby-food" />
        <meta property="og:title" content="Sustainable Baby Food & Purees Packaging Solutions" />
        <meta property="og:description" content={t(`${p}.metaDescription`)} />
        <meta property="og:url" content="https://achievepack.com/industry/baby-food" />
        <meta name="keywords" content={t(`${p}.metaKeywords`)} />
        
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            "name": "Baby Food & Purees Packaging Ecosystem",
            "description": t(`${p}.schemaDescription`),
            "brand": {
              "@type": "Brand",
              "name": "Achieve Pack"
            },
            "offers": {
              "@type": "AggregateOffer",
              "priceCurrency": "USD",
              "lowPrice": "0.10",
              "highPrice": "2.40",
              "offerCount": "5"
            }
          })}
        </script>
        
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqs.map(faq => ({
              "@type": "Question",
              "name": faq.question,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
              }
            }))
          })}
        </script>
      </Helmet>

      <SEOPageLayout 
        heroBgColor="#0369a1"
        title={t(`${p}.title`)}
        description={t(`${p}.description`)}
        keywords={['baby food packaging', 'spout pouch', 'compostable baby snack bag', 'choke proof cap']}
        heroTitle={t(`${p}.heroTitle`)}
        heroSubtitle={t(`${p}.heroSubtitle`)}
        introSummary={t(`${p}.introSummary`)}
        sections={sections}
        tables={tables}
        faqs={faqs}
        relatedLinks={relatedLinks}
        schemaType="Product"
        heroImage="/imgs/illustrated/a_baby_food_hero_v1_7008467.webp"
      />
    </>
  )
}

export default BabyFoodPage
