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

const FrozenFoodPage: React.FC = () => {
  const { t } = useTranslation();
  const p = 'seoPages.pages.frozenFood';
  const sections = [
    {
      id: 'cold-challenge',
      title: t(`${p}.title_theDeepFreezeChallengeSubzero`),
      icon: <Beaker className="h-5 w-5 text-sky-700" />,
      content: (
        <div className="space-y-4 text-neutral-700 leading-relaxed">
          <p className="text-lg">
            Frozen food, organic frozen berries, seafood, and ready-meals face extreme environmental conditions during sub-zero logistics. At typical storage temperatures of -18°C to -30°C, standard flexible plastics lose their elasticity—becoming stiff, brittle, and highly prone to stress-cracking or splitting upon physical impact. Additionally, inadequate water vapor barriers allow moisture to escape, leading to unsightly ice crystallization and freezer burn.
          </p>
          <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-xl border border-amber-200 grid md:grid-cols-2 gap-6 my-4">
            <div>
              <h4 className="font-semibold text-amber-900 flex items-center gap-2 mb-2">
                <AlertTriangle className="h-4 w-4 text-amber-600" /> Key Material Risks
              </h4>
              <ul className="text-sm text-neutral-700 space-y-2">
                <li>• <strong>{t(`${p}.subzeroBrittleness`)}</strong> {t(`${p}.plasticsLoseFlexibilityAndCrack`)}</li>
                <li>• <strong>{t(`${p}.freezerBurn`)}</strong> {t(`${p}.highMoistureVaporTransmissionWvtr`)}</li>
                <li>• <strong>{t(`${p}.seamSplitting`)}</strong> {t(`${p}.lowtemperatureSealsEasilyPeelOr`)}</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-green-900 flex items-center gap-2 mb-2">
                <Shield className="h-4 w-4 text-green-600" /> Engineering Requirements
              </h4>
              <ul className="text-sm text-neutral-700 space-y-2">
                <li>• <strong>{t(`${p}.coldresistantPolymers`)}</strong> {t(`${p}.specialtyCopolymersDesignedToStay`)}</li>
                <li>• <strong>{t(`${p}.ultralowWvtrBarrier`)}</strong> {t(`${p}.solidMetallicCoresOrSpecialized`)}</li>
                <li>• <strong>{t(`${p}.highTensileSeamStrength`)}</strong> {t(`${p}.heavygaugeHeatsealLayersOptimizedFor`)}</li>
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
            Compare our five top-tier sustainable frozen food packaging options engineered for absolute puncture defense and cold flexibility.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
            {/* Option 1: Cold-Resistant Stand-Up Zipper Pouch */}
            <div className="bg-white border border-neutral-200 rounded-xl p-5 shadow-sm hover:shadow-md transition flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-start mb-3">
                  <span className="bg-neutral-100 text-neutral-800 text-xs font-bold px-2.5 py-1 rounded">{t(`${p}.option1`)}</span>
                  <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2 py-0.5 rounded">{t(`${p}.lowCostMvp`)}</span>
                </div>
                <h4 className="font-bold text-neutral-900 text-lg mb-2">{t(`${p}.coldresistantZipperPouch`)}</h4>
                <p className="text-sm text-neutral-600 mb-4">
                  The ideal retail shelf choice for organic berries, frozen vegetables, and ready-meals. Features a thick, flexible cold-resistant sealant layer and a secure zip closure.
                </p>
                <ul className="text-xs text-neutral-500 space-y-1 mb-4">
                  <li>{t(`${p}.highGlossOrPremiumMatte`)}</li>
                  <li>{t(`${p}.airtightPresstocloseZipper`)}</li>
                  <li>{t(`${p}.outstandingWaterVaporDefenseWvtr`)}</li>
                </ul>
              </div>
              <Link to="/store/product/eco-standup" className="text-sm font-semibold text-sky-700 hover:text-sky-800 flex items-center gap-1 mt-2">
                Order Zipper Pouches (From US$0.09) <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            {/* Option 2: Heavy-Duty Vacuum Pouch */}
            <div className="bg-white border border-neutral-200 rounded-xl p-5 shadow-sm hover:shadow-md transition flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-start mb-3">
                  <span className="bg-neutral-100 text-neutral-800 text-xs font-bold px-2.5 py-1 rounded">{t(`${p}.option2`)}</span>
                  <span className="bg-amber-100 text-amber-800 text-xs font-semibold px-2 py-0.5 rounded">{t(`${p}.premiumColdLock`)}</span>
                </div>
                <h4 className="font-bold text-neutral-900 text-lg mb-2">{t(`${p}.heavydutyVacuumPouch`)}</h4>
                <p className="text-sm text-neutral-600 mb-4">
                  The gold standard for frozen seafood, meats, or vacuum-packed ready dinners. Made using thick, puncture-resistant multi-layer co-polymers designed for absolute air extraction.
                </p>
                <ul className="text-xs text-neutral-500 space-y-1 mb-4">
                  <li>{t(`${p}.absoluteOxygenAndMoistureBarrier`)}</li>
                  <li>{t(`${p}.preventsAnyFrostCrystalFormulation`)}</li>
                  <li>{t(`${p}.highPunctureDefenseAgainstSharp`)}</li>
                </ul>
              </div>
              <Link to="/store/product/spouted-foil-pouch" className="text-sm font-semibold text-sky-700 hover:text-sky-800 flex items-center gap-1 mt-2">
                Order Vacuum Pouches <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            {/* Option 3: Recyclable Mono-PE Pouch */}
            <div className="bg-white border border-neutral-200 rounded-xl p-5 shadow-sm hover:shadow-md transition flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-start mb-3">
                  <span className="bg-neutral-100 text-neutral-800 text-xs font-bold px-2.5 py-1 rounded">{t(`${p}.option3`)}</span>
                  <span className="bg-green-100 text-green-800 text-xs font-semibold px-2 py-0.5 rounded">{t(`${p}.curbsideRecyclable`)}</span>
                </div>
                <h4 className="font-bold text-neutral-900 text-lg mb-2">{t(`${p}.recyclableMonopePouch`)}</h4>
                <p className="text-sm text-neutral-600 mb-4">
                  Engineered using a single polymer PE structure with EVOH coating. Approved for store drop-off flexible recycling streams, providing carbon-reduced, eco-friendly retail display.
                </p>
                <ul className="text-xs text-neutral-500 space-y-1 mb-4">
                  <li>{t(`${p}.100RecyclableMonomaterialStructure`)}</li>
                  <li>{t(`${p}.highlyFlexibleInTemperaturesDown`)}</li>
                  <li>{t(`${p}.cleanClearWindowOptionsTo`)}</li>
                </ul>
              </div>
              <Link to="/store/product/eco-standup" className="text-sm font-semibold text-sky-700 hover:text-sky-800 flex items-center gap-1 mt-2">
                Buy Recyclable PE Pouches <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            {/* Option 4: Compostable Cold-Resistant Pouch */}
            <div className="bg-white border border-neutral-200 rounded-xl p-5 shadow-sm hover:shadow-md transition flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-start mb-3">
                  <span className="bg-neutral-100 text-neutral-800 text-xs font-bold px-2.5 py-1 rounded">{t(`${p}.option4`)}</span>
                  <span className="bg-green-100 text-green-800 text-xs font-semibold px-2 py-0.5 rounded">{t(`${p}.zerowastePackaging`)}</span>
                </div>
                <h4 className="font-bold text-neutral-900 text-lg mb-2">{t(`${p}.compostableFreezerBag`)}</h4>
                <p className="text-sm text-neutral-600 mb-4">
                  Certified EN 13432 compostable paper and plant-based inner films specially engineered for sub-zero thermal stability. Breaks down in commercial composting in 90-180 days.
                </p>
                <ul className="text-xs text-neutral-500 space-y-1 mb-4">
                  <li>{t(`${p}.earthyUnbleachedOrganicPaperLook`)}</li>
                  <li>{t(`${p}.celluloseBarrierCoreStaysFlexible`)}</li>
                  <li>{t(`${p}.highlyResistantToFrozenCondensation`)}</li>
                </ul>
              </div>
              <Link to="/products/compostable-coffee-bags" className="text-sm font-semibold text-sky-700 hover:text-sky-800 flex items-center gap-1 mt-2">
                Order Compostable Bags <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            {/* Option 5: FSC Custom Moisture-Resistant Box */}
            <div className="bg-white border border-neutral-200 rounded-xl p-5 shadow-sm hover:shadow-md transition flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-start mb-3">
                  <span className="bg-neutral-100 text-neutral-800 text-xs font-bold px-2.5 py-1 rounded">{t(`${p}.option5`)}</span>
                  <span className="bg-indigo-100 text-indigo-800 text-xs font-semibold px-2 py-0.5 rounded">{t(`${p}.luxuryDisplay`)}</span>
                </div>
                <h4 className="font-bold text-neutral-900 text-lg mb-2">{t(`${p}.fscCustomFreezerBox`)}</h4>
                <p className="text-sm text-neutral-600 mb-4">
                  Add premium retail presence to your frozen line with customized FSC certified moisture-resistant folding cartons. Feature anti-condensation varnishes and die-cut windows.
                </p>
                <ul className="text-xs text-neutral-500 space-y-1 mb-4">
                  <li>{t(`${p}.fscRecycledSolidCardboard`)}</li>
                  <li>{t(`${p}.waterresistantBarrierCoatingOption`)}</li>
                  <li>{t(`${p}.shipsFlatToMinimizeInventory`)}</li>
                </ul>
              </div>
              <a href="https://calendly.com/30-min-free-packaging-consultancy" target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-sky-700 hover:text-sky-800 flex items-center gap-1 mt-2">
                Design Custom Freezer Boxes <ArrowRight className="h-4 w-4" />
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
            Click to inspect high-resolution product prototypes. Engineered to remain highly flexible in temperatures down to -30°C and eliminate freezer burn under strict BRC standards.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-neutral-50 p-3 rounded-lg border border-neutral-200 flex flex-col justify-between">
              <ClickableImage 
                src="/imgs/illustrated/a_frozen_food_hero_v2_0166133.webp" 
                alt="Premium frozen food stand-up pouch packaging mockup" 
                className="w-full h-40 object-cover rounded-md mb-2 shadow-sm"
              />
              <div>
                <h5 className="font-semibold text-xs text-neutral-900">{t(`${p}.premiumFrozenFoodPouches`)}</h5>
                <p className="text-[10px] text-neutral-500 mt-1">{t(`${p}.leakproofThermalSealsAnticondensationCoatings`)}</p>
              </div>
            </div>

            <div className="bg-neutral-50 p-3 rounded-lg border border-neutral-200 flex flex-col justify-between">
              <ClickableImage 
                src="/imgs/artifacts/vacuum_pouch_frozen.jpg" 
                alt="Heavy-duty vacuum sealed pouch for frozen meats" 
                className="w-full h-40 object-cover rounded-md mb-2 shadow-sm"
              />
              <div>
                <h5 className="font-semibold text-xs text-neutral-900">{t(`${p}.heavydutyVacuumPouches`)}</h5>
                <p className="text-[10px] text-neutral-500 mt-1">{t(`${p}.extraThickCopolymersHighPuncture`)}</p>
              </div>
            </div>

            <div className="bg-neutral-50 p-3 rounded-lg border border-neutral-200 flex flex-col justify-between">
              <ClickableImage 
                src="/imgs/artifacts/frozen_food_hero.jpg" 
                alt="Earthy unbleached organic frozen food packaging bag" 
                className="w-full h-40 object-cover rounded-md mb-2 shadow-sm"
              />
              <div>
                <h5 className="font-semibold text-xs text-neutral-900">{t(`${p}.organicFreezerBags`)}</h5>
                <p className="text-[10px] text-neutral-500 mt-1">{t(`${p}.earthyUnbleachedPaperCelluloseBarrier`)}</p>
              </div>
            </div>

            <div className="bg-neutral-50 p-3 rounded-lg border border-neutral-200 flex flex-col justify-between">
              <ClickableImage 
                src="/imgs/pouch-shape/a_stand_up_pouch_isolated_4331591.webp" 
                alt="Standard stand up packaging pouch in neutral white" 
                className="w-full h-40 object-cover rounded-md mb-2 shadow-sm"
              />
              <div>
                <h5 className="font-semibold text-xs text-neutral-900">{t(`${p}.standardOpaqueSupBags`)}</h5>
                <p className="text-[10px] text-neutral-500 mt-1">{t(`${p}.zeroLightTransmissionHermeticallySealed`)}</p>
              </div>
            </div>
          </div>

          <div className="bg-sky-50 rounded-xl p-6 border border-sky-200 flex flex-col md:flex-row items-center gap-6 mt-6">
            <div className="w-full md:w-1/3">
              <ClickableImage 
                src="/imgs/illustrated/a_frozen_food_hero_v2_0166133.webp" 
                alt="Stand up recyclable frozen food pouch standing upright" 
                className="w-full h-48 object-cover rounded-lg shadow-md"
              />
            </div>
            <div className="w-full md:w-2/3 space-y-3">
              <span className="bg-[#D4FF00] text-black text-[10px] font-black px-2.5 py-1 uppercase rounded-full border border-black shadow-[1px_1px_0px_0px_rgba(0,0,0,1)]">
                Highlighted Frozen Solution
              </span>
              <h4 className="font-bold text-neutral-900 text-lg">{t(`${p}.featuredEcoSolutionCurbsideRecyclable`)}</h4>
              <p className="text-sm text-neutral-700">
                Pioneer maximum circularity and cold chain reliability in frozen nutrition using our <strong>{t(`${p}.curbsideRecyclableMonopePouches`)}</strong>. Extruded entirely from a single-polymer polyethylene profile, these pouches are 100% compliant with standard store drop-off bins. Co-extruded with an ultra-low WVTR EVOH core, they eliminate freezer burn and remain highly flexible down to -30°C without cracking.
              </p>
              <div className="flex gap-4">
                <Link to="/store/product/eco-standup" className="bg-sky-700 hover:bg-sky-800 text-white text-xs font-semibold px-4 py-2.5 rounded transition">
                  Buy Recyclable PE Pouches (MOQ 100)
                </Link>
                <Link to="/products/compostable-coffee-bags" className="bg-white hover:bg-neutral-100 text-neutral-800 text-xs font-semibold px-4 py-2.5 rounded border border-neutral-300 transition">
                  Order Compostable Freezer Bags
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
            To secure 100% puncture resistance and confirm absolute sub-zero seal integrity during packaging logistics load, we advise adhering to this test pipeline checklist:
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="border border-neutral-200 rounded-lg p-4 bg-neutral-50">
              <h5 className="font-bold text-neutral-900 mb-2">{t(`${p}.phase1MaterialVerification`)}</h5>
              <ul className="space-y-2 text-neutral-600 text-xs">
                <li className="flex gap-2"><span className="text-green-600 font-bold">✔</span> {t(`${p}.confirmMinimumStorageTemperatureRequirements`)}</li>
                <li className="flex gap-2"><span className="text-green-600 font-bold">✔</span> {t(`${p}.verifyWaterVaporTransmissionRate`)}</li>
                <li className="flex gap-2"><span className="text-green-600 font-bold">✔</span> {t(`${p}.assessDirectFoodContactSafety`)}</li>
              </ul>
            </div>
            <div className="border border-neutral-200 rounded-lg p-4 bg-neutral-50">
              <h5 className="font-bold text-neutral-900 mb-2">{t(`${p}.phase2IntegrityTesting`)}</h5>
              <ul className="space-y-2 text-neutral-600 text-xs">
                <li className="flex gap-2"><span className="text-green-600 font-bold">✔</span> {t(`${p}.submergeTestBagsIn25c`)}</li>
                <li className="flex gap-2"><span className="text-green-600 font-bold">✔</span> {t(`${p}.performStandardDropTest12m`)}</li>
                <li className="flex gap-2"><span className="text-green-600 font-bold">✔</span> {t(`${p}.runAutomatedSealingTrackTests`)}</li>
              </ul>
            </div>
          </div>
        </div>
      )
    }
  ]

  const faqs = [
    {
      question: t(`${p}.question_whyDoStandardPlasticsCrack`),
      answer: t(`${p}.answer_standardPlasticsLikeStandardLowdensity`)
    },
    {
      question: t(`${p}.question_howDoYouPreventFreezer`),
      answer: t(`${p}.answer_freezerBurnIsCausedBy`)
    },
    {
      question: t(`${p}.question_canCompostablePackagingStandUp`),
      answer: t(`${p}.answer_yesWhenEngineeredCorrectlyOur`)
    },
    {
      question: t(`${p}.question_whatIsTheMinimumOrder`),
      answer: t(`${p}.answer_weSupportStartupColdChain`)
    }
  ]

  const tables = [
    {
      title: t(`${p}.title_technicalComparisonFrozenFoodPackaging`),
      data: {
        headers: [t(`${p}.table_format`),t(`${p}.table_oxygenBarrierOtr`),t(`${p}.table_waterVaporWvtr`),t(`${p}.table_coldCrackResistanceLimit`),t(`${p}.table_moq`),t(`${p}.table_relativeCost`)],
        rows: [
          [t(`${p}.table_coldresistantZipperPouch`),t(`${p}.table_020Mlmday`),t(`${p}.table_025Gmday`),t(`${p}.table_stableDownTo25c`),t(`${p}.table_100Pcs`),t(`${p}.table_low`)],
          [t(`${p}.table_heavydutyVacuumPouch`),t(`${p}.table_002Mlmday`),t(`${p}.table_004Gmday`),t(`${p}.table_stableDownTo30c`),t(`${p}.table_500Pcs`),t(`${p}.table_medium`)],
          [t(`${p}.table_recyclableMonopePouch`),t(`${p}.table_032Mlmday`),t(`${p}.table_026Gmday`),t(`${p}.table_stableDownTo25c`),t(`${p}.table_500Pcs`),t(`${p}.table_medium`)],
          [t(`${p}.table_compostableFreezerPouch`),t(`${p}.table_045Mlmday`),t(`${p}.table_039Gmday`),t(`${p}.table_stableDownTo18c`),t(`${p}.table_500Pcs`),t(`${p}.table_medium`)],
          [t(`${p}.table_fscCustomDisplayBox`),t(`${p}.table_naOuterProtection`),t(`${p}.table_na`),t(`${p}.table_na`),t(`${p}.table_200Pcs`),t(`${p}.table_premium`)]
        ]
      }
    }
  ]

  const relatedLinks = [
    {
      title: t(`${p}.title_recyclableMonomaterialPouches`),
      url: "/store/product/eco-standup",
      description: t(`${p}.description_exploreOurCurbsiderecyclableStandupPouches`)
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
    },
    {
      title: t(`${p}.title_lowMoqPackagingEcosystem`),
      url: "/products/low-moq-packaging",
      description: t(`${p}.description_discoverOurFlexibleStartupfriendlySmall`)
    }
  ]

  return (
    <>
      <Helmet>
        <title>{t(`${p}.metaTitle`)}</title>
        <meta name="description" content={t(`${p}.metaDescription`)} />
        <link rel="canonical" href="https://achievepack.com/industry/frozen-food" />
        <meta property="og:title" content="Sustainable Frozen Food & Cold Chain Packaging Solutions" />
        <meta property="og:description" content={t(`${p}.metaDescription`)} />
        <meta property="og:url" content="https://achievepack.com/industry/frozen-food" />
        <meta name="keywords" content={t(`${p}.metaKeywords`)} />
        
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            "name": "Frozen Food & Cold Chain Packaging Ecosystem",
            "description": t(`${p}.schemaDescription`),
            "brand": {
              "@type": "Brand",
              "name": "Achieve Pack"
            },
            "offers": {
              "@type": "AggregateOffer",
              "priceCurrency": "USD",
              "lowPrice": "0.09",
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
        heroBgColor="#0c4a6e"
        title={t(`${p}.title`)}
        description={t(`${p}.description`)}
        keywords={['frozen food packaging', 'vacuum bag', 'compostable freezer bag', 'cold resistant pouch']}
        heroTitle={t(`${p}.heroTitle`)}
        heroSubtitle={t(`${p}.heroSubtitle`)}
        introSummary={t(`${p}.introSummary`)}
        sections={sections}
        tables={tables}
        faqs={faqs}
        relatedLinks={relatedLinks}
        schemaType="Product"
        heroImage="/imgs/illustrated/a_frozen_food_hero_v2_0166133.webp"
      />
    </>
  )
}

export default FrozenFoodPage
