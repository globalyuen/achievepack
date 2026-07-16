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

const CoffeeTeaPage: React.FC = () => {
  const { t } = useTranslation();
  const p = 'seoPages.pages.coffeeTea';
  const sections = [
    {
      id: 'freshness-challenge',
      title: t(`${p}.title_theFreshnessChallengeDegassingOxidation`),
      icon: <Beaker className="h-5 w-5 text-amber-700" />,
      content: (
        <div className="space-y-4 text-neutral-700 leading-relaxed">
          <div className="mb-8 w-full rounded-2xl overflow-hidden border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
            <img src="/imgs/knowledge/explorer_industry_infographic.jpg" alt="Coffee and Tea Packaging Guide" className="w-full h-auto" />
          </div>
          <p className="text-lg">
            Specialty coffee beans and fine loose-leaf teas are highly sensitive agricultural products. Immediately after roasting, coffee beans release large volumes of carbon dioxide (CO2), which can swell or rupture a sealed pouch. At the same time, oxygen exposure destroys delicate roasted coffee oils and tea terpenes within days, turning vibrant aromatics flat and stale.
          </p>
          <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-xl border border-amber-200 grid md:grid-cols-2 gap-6 my-4">
            <div>
              <h4 className="font-semibold text-amber-900 flex items-center gap-2 mb-2">
                <AlertTriangle className="h-4 w-4 text-amber-600" /> Key Material Risks
              </h4>
              <ul className="text-sm text-neutral-700 space-y-2">
                <li>• <strong>{t(`${p}.oxidationDegradation`)}</strong> {t(`${p}.oxygenContactMakesVolatileCoffee`)}</li>
                <li>• <strong>{t(`${p}.pouchSwelling`)}</strong> {t(`${p}.freshRoastCo2ReleaseBuildup`)}</li>
                <li>• <strong>{t(`${p}.aromaPermeation`)}</strong> {t(`${p}.essentialTeacoffeeOilsLeakThrough`)}</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-green-900 flex items-center gap-2 mb-2">
                <Shield className="h-4 w-4 text-green-600" /> Engineering Requirements
              </h4>
              <ul className="text-sm text-neutral-700 space-y-2">
                <li>• <strong>{t(`${p}.onewayDegassingValves`)}</strong> {t(`${p}.relievesInternalGasPressureWithout`)}</li>
                <li>• <strong>{t(`${p}.ultrahighOxygenBarrier`)}</strong> {t(`${p}.aluminumCoresOrHighbarrierEvoh`)}</li>
                <li>• <strong>{t(`${p}.airtightResealableZippers`)}</strong> {t(`${p}.retainsFreshnessAfterInitialPackage`)}</li>
              </ul>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'packaging-options',
      title: t(`${p}.title_5PackagingOptionsComparedLowcost`),
      icon: <Package className="h-5 w-5 text-amber-700" />,
      content: (
        <div className="space-y-6">
          <p className="text-neutral-700">
            We provide a complete range of certified sustainable packaging options designed to preserve volatile aromas while minimizing your carbon footprint.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
            {/* Option 1: Stand-Up Pouch with Valve */}
            <div className="bg-white border border-neutral-200 rounded-xl p-5 shadow-sm hover:shadow-md transition flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-start mb-3">
                  <span className="bg-neutral-100 text-neutral-800 text-xs font-bold px-2.5 py-1 rounded">{t(`${p}.option1`)}</span>
                  <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2 py-0.5 rounded">{t(`${p}.lowCostMvp`)}</span>
                </div>
                <h4 className="font-bold text-neutral-900 text-lg mb-2">{t(`${p}.standupPouchWithValve`)}</h4>
                <p className="text-sm text-neutral-600 mb-4">
                  The retail standard for growing coffee brands. A robust stand-up pouch featuring a pre-installed one-way degassing valve, providing absolute aroma freshness at a low entry point.
                </p>
                <ul className="text-xs text-neutral-500 space-y-1 mb-4">
                  <li>{t(`${p}.builtinOnewayDegassingValve`)}</li>
                  <li>{t(`${p}.highbarrierMetallizedLining`)}</li>
                  <li>{t(`${p}.reusablePresstocloseZipper`)}</li>
                </ul>
              </div>
              <Link to="/products/coffee-bags-degassing-valve" className="text-sm font-semibold text-amber-700 hover:text-amber-800 flex items-center gap-1 mt-2">
                Order Valve Pouches (From US$0.12) <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            {/* Option 2: Compostable Kraft Coffee Bag */}
            <div className="bg-white border border-neutral-200 rounded-xl p-5 shadow-sm hover:shadow-md transition flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-start mb-3">
                  <span className="bg-neutral-100 text-neutral-800 text-xs font-bold px-2.5 py-1 rounded">{t(`${p}.option2`)}</span>
                  <span className="bg-green-100 text-green-800 text-xs font-semibold px-2 py-0.5 rounded">{t(`${p}.100Compostable`)}</span>
                </div>
                <h4 className="font-bold text-neutral-900 text-lg mb-2">{t(`${p}.compostableKraftCoffeeBag`)}</h4>
                <p className="text-sm text-neutral-600 mb-4">
                  Certified EN 13432 & ASTM D6400 plant-based kraft paper paired with a compostable inner barrier. Fully degrades in commercial composting conditions, complete with a compostable valve.
                </p>
                <ul className="text-xs text-neutral-500 space-y-1 mb-4">
                  <li>{t(`${p}.earthyOrganicKraftPaperLook`)}</li>
                  <li>{t(`${p}.commercialCompostableValveAndZipper`)}</li>
                  <li>{t(`${p}.plantbasedPlasticfreeBarrier`)}</li>
                </ul>
              </div>
              <Link to="/products/compostable-coffee-bags" className="text-sm font-semibold text-amber-700 hover:text-amber-800 flex items-center gap-1 mt-2">
                Buy Compostable Bags (From US$0.18) <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            {/* Option 3: Recyclable Mono-PE Pouch */}
            <div className="bg-white border border-neutral-200 rounded-xl p-5 shadow-sm hover:shadow-md transition flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-start mb-3">
                  <span className="bg-neutral-100 text-neutral-800 text-xs font-bold px-2.5 py-1 rounded">{t(`${p}.option3`)}</span>
                  <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2 py-0.5 rounded">{t(`${p}.curbsideRecyclable`)}</span>
                </div>
                <h4 className="font-bold text-neutral-900 text-lg mb-2">{t(`${p}.recyclableMonopePouch`)}</h4>
                <p className="text-sm text-neutral-600 mb-4">
                  Fully recyclable mono-polymer PE structure with EVOH coating. Provides a high barrier against moisture and oxygen while being fully accepted in store-collection recycling streams.
                </p>
                <ul className="text-xs text-neutral-500 space-y-1 mb-4">
                  <li>{t(`${p}.curbsideAndStoreDropoffRecyclable`)}</li>
                  <li>{t(`${p}.exceptionalClarityOrMatteTexture`)}</li>
                  <li>{t(`${p}.highPerformanceCoextrudedBarrier`)}</li>
                </ul>
              </div>
              <Link to="/store/product/eco-standup" className="text-sm font-semibold text-amber-700 hover:text-amber-800 flex items-center gap-1 mt-2">
                Buy Recyclable Pouches <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            {/* Option 4: Drip Coffee Sachet / Tea Pack */}
            <div className="bg-white border border-neutral-200 rounded-xl p-5 shadow-sm hover:shadow-md transition flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-start mb-3">
                  <span className="bg-neutral-100 text-neutral-800 text-xs font-bold px-2.5 py-1 rounded">{t(`${p}.option4`)}</span>
                  <span className="bg-purple-100 text-purple-800 text-xs font-semibold px-2 py-0.5 rounded">{t(`${p}.singleserveLaunch`)}</span>
                </div>
                <h4 className="font-bold text-neutral-900 text-lg mb-2">{t(`${p}.singleserveDripCoffeeSachet`)}</h4>
                <p className="text-sm text-neutral-600 mb-4">
                  Perfect for loose-leaf specialty tea, matcha, or single-use drip coffee sachets. Provides absolute light and air defense in single-dose packs. Highly visual and startup-friendly.
                </p>
                <ul className="text-xs text-neutral-500 space-y-1 mb-4">
                  <li>{t(`${p}.highbarrierMatteSachet`)}</li>
                  <li>{t(`${p}.tearnotchForInstantQuickOpening`)}</li>
                  <li>{t(`${p}.extremelyLightweightAndCheapTo`)}</li>
                </ul>
              </div>
              <Link to="/store/product/bottle-shape-sachet-bag" className="text-sm font-semibold text-amber-700 hover:text-amber-800 flex items-center gap-1 mt-2">
                Order Drip Sachets <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            {/* Option 5: Custom Retail Tea Gift Box */}
            <div className="bg-white border border-neutral-200 rounded-xl p-5 shadow-sm hover:shadow-md transition flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-start mb-3">
                  <span className="bg-neutral-100 text-neutral-800 text-xs font-bold px-2.5 py-1 rounded">{t(`${p}.option5`)}</span>
                  <span className="bg-indigo-100 text-indigo-800 text-xs font-semibold px-2 py-0.5 rounded">{t(`${p}.luxuryPresentation`)}</span>
                </div>
                <h4 className="font-bold text-neutral-900 text-lg mb-2">{t(`${p}.fscCustomTeaDisplayBox`)}</h4>
                <p className="text-sm text-neutral-600 mb-4">
                  Enhance your coffee pouches or tea sachets with a custom-printed FSC certified rigid display box. Elevate your retail presence with luxury unboxing appeals.
                </p>
                <ul className="text-xs text-neutral-500 space-y-1 mb-4">
                  <li>{t(`${p}.fscCertifiedRecycledGrayboard`)}</li>
                  <li>{t(`${p}.customDiecutWindowsAndInserts`)}</li>
                  <li>{t(`${p}.sleekPremiumGoldFoilEmbellishments`)}</li>
                </ul>
              </div>
              <a href="https://calendly.com/30-min-free-packaging-consultancy" target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-amber-700 hover:text-amber-800 flex items-center gap-1 mt-2">
                Schedule Design Consult <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'interactive-showcase',
      title: t(`${p}.title_premiumVisualMockupsProductShowcase`),
      icon: <Sparkles className="h-5 w-5 text-amber-700" />,
      content: (
        <div className="space-y-6">
          <p className="text-neutral-700">
            Click to inspect high-resolution product prototypes. Engineered to preserve volatile coffee aromas and sensitive tea terpenes under strict sustainable material standards.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-neutral-50 p-3 rounded-lg border border-neutral-200 flex flex-col justify-between">
              <ClickableImage 
                src="/imgs/illustrated/a_coffee_bags_warm_4136520.webp" 
                alt="Matte coffee bags with degassing valve and zip seal" 
                className="w-full h-40 object-cover rounded-md mb-2 shadow-sm"
              />
              <div>
                <h5 className="font-semibold text-xs text-neutral-900">{t(`${p}.matteCoffeeBagsWithValve`)}</h5>
                <p className="text-[10px] text-neutral-500 mt-1">{t(`${p}.sturdyFlatBottomConstructDegassing`)}</p>
              </div>
            </div>

            <div className="bg-neutral-50 p-3 rounded-lg border border-neutral-200 flex flex-col justify-between">
              <ClickableImage 
                src="/imgs/illustrated/a_coffee_roaster_variation_1_6758424.webp" 
                alt="Earthy organic compostable coffee pouch mockup" 
                className="w-full h-40 object-cover rounded-md mb-2 shadow-sm"
              />
              <div>
                <h5 className="font-semibold text-xs text-neutral-900">{t(`${p}.compostableCoffeeBags`)}</h5>
                <p className="text-[10px] text-neutral-500 mt-1">{t(`${p}.earthyKraftLookCompostableBarrier`)}</p>
              </div>
            </div>

            <div className="bg-neutral-50 p-3 rounded-lg border border-neutral-200 flex flex-col justify-between">
              <ClickableImage 
                src="/imgs/illustrated/a_coffee_tea_hero_v3_3443187.webp" 
                alt="Specialty stand-up pouches for coffee beans and loose leaf tea" 
                className="w-full h-40 object-cover rounded-md mb-2 shadow-sm"
              />
              <div>
                <h5 className="font-semibold text-xs text-neutral-900">{t(`${p}.specialtyCoffeeTeaPouches`)}</h5>
                <p className="text-[10px] text-neutral-500 mt-1">{t(`${p}.highclarityWindowDisplaysMatteColors`)}</p>
              </div>
            </div>

            <div className="bg-neutral-50 p-3 rounded-lg border border-neutral-200 flex flex-col justify-between">
              <ClickableImage 
                src="/imgs/illustrated/a_degassingvalve_warm_0118491.webp" 
                alt="One-way degassing valve closeup on premium coffee pouch" 
                className="w-full h-40 object-cover rounded-md mb-2 shadow-sm"
              />
              <div>
                <h5 className="font-semibold text-xs text-neutral-900">{t(`${p}.degassingValveCloseup`)}</h5>
                <p className="text-[10px] text-neutral-500 mt-1">{t(`${p}.precisionEngineeredVentingSystemTo`)}</p>
              </div>
            </div>
          </div>

          <div className="bg-amber-50 rounded-xl p-6 border border-amber-200 flex flex-col md:flex-row items-center gap-6 mt-6">
            <div className="w-full md:w-1/3">
              <ClickableImage 
                src="/imgs/illustrated/a_coffee_roaster_variation_2_0460293.webp" 
                alt="Kraft paper coffee bag with customized branding" 
                className="w-full h-48 object-cover rounded-lg shadow-md"
              />
            </div>
            <div className="w-full md:w-2/3 space-y-3">
              <span className="bg-[#D4FF00] text-black text-[10px] font-black px-2.5 py-1 uppercase rounded-full border border-black shadow-[1px_1px_0px_0px_rgba(0,0,0,1)]">
                Highlighted Roastery Solution
              </span>
              <h4 className="font-bold text-neutral-900 text-lg">{t(`${p}.featuredEcoSolutionCertifiedCompostable`)}</h4>
              <p className="text-sm text-neutral-700">
                Are you looking to capture the conscious consumer? Our <strong>{t(`${p}.compostableKraftCoffeeBags`)}</strong> use BPI-certified EN 13432 materials that breakdown naturally in standard industrial composting. Combined with an organic degassing valve, this is the ultimate solution for third-wave roasters looking to zero out plastic waste.
              </p>
              <div className="flex gap-4">
                <Link to="/products/compostable-coffee-bags" className="bg-amber-700 hover:bg-amber-800 text-white text-xs font-semibold px-4 py-2.5 rounded transition">
                  Shop Compostable Coffee Bags (MOQ 100)
                </Link>
                <Link to="/products/coffee-bags-degassing-valve" className="bg-white hover:bg-neutral-100 text-neutral-800 text-xs font-semibold px-4 py-2.5 rounded border border-neutral-300 transition">
                  Buy Stand-Up Valve Pouches
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
      icon: <Award className="h-5 w-5 text-amber-700" />,
      content: (
        <div className="space-y-4 text-neutral-700 text-sm">
          <p>
            To guarantee long-term shelf stability, aroma retention, and leak-proof shipping, we recommend adhering to our professional lab-testing protocol:
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="border border-neutral-200 rounded-lg p-4 bg-neutral-50">
              <h5 className="font-bold text-neutral-900 mb-2">{t(`${p}.phase1MaterialVerification`)}</h5>
              <ul className="space-y-2 text-neutral-600 text-xs">
                <li className="flex gap-2"><span className="text-green-600 font-bold">✔</span> {t(`${p}.confirmTargetShelfLifeRequirements`)}</li>
                <li className="flex gap-2"><span className="text-green-600 font-bold">✔</span> {t(`${p}.measureVolatileOilContentIn`)}</li>
                <li className="flex gap-2"><span className="text-green-600 font-bold">✔</span> {t(`${p}.assessLightsensitivityToDecideBetween`)}</li>
              </ul>
            </div>
            <div className="border border-neutral-200 rounded-lg p-4 bg-neutral-50">
              <h5 className="font-bold text-neutral-900 mb-2">{t(`${p}.phase2IntegrityTesting`)}</h5>
              <ul className="space-y-2 text-neutral-600 text-xs">
                <li className="flex gap-2"><span className="text-green-600 font-bold">✔</span> {t(`${p}.runA30daySimulatedRetail`)}</li>
                <li className="flex gap-2"><span className="text-green-600 font-bold">✔</span> {t(`${p}.verifyDegassingValvePerformanceUnder`)}</li>
                <li className="flex gap-2"><span className="text-green-600 font-bold">✔</span> {t(`${p}.performStandardDropTests12m`)}</li>
              </ul>
            </div>
          </div>
        </div>
      )
    }
  ]

  const faqs = [
    {
      question: t(`${p}.question_whyIsAOnewayDegassing`),
      answer: t(`${p}.answer_freshlyRoastedCoffeeBeansDischarge`)
    },
    {
      question: t(`${p}.question_areCompostableCoffeeBagsCompletely`),
      answer: t(`${p}.answer_yesOurCertifiedCompostableCoffee`)
    },
    {
      question: t(`${p}.question_howDoIChooseBetween`),
      answer: t(`${p}.answer_chooseCompostableKraftIfYour`)
    },
    {
      question: t(`${p}.question_whatIsTheMinimumOrder`),
      answer: t(`${p}.answer_whileTypicalPackagingFactoriesRequire`)
    }
  ]

  const tables = [
    {
      title: t(`${p}.title_technicalComparisonCoffeeTeaPackaging`),
      data: {
        headers: [t(`${p}.table_format`),t(`${p}.table_oxygenBarrierOtr`),t(`${p}.table_waterVaporWvtr`),t(`${p}.table_valveCompatibility`),t(`${p}.table_moq`),t(`${p}.table_relativeCost`)],
        rows: [
          [t(`${p}.table_standupPouchValve`),t(`${p}.table_015Mlmday`),t(`${p}.table_020Gmday`),t(`${p}.table_yesWipfgoglio`),t(`${p}.table_100Pcs`),t(`${p}.table_low`)],
          [t(`${p}.table_compostableKraftBag`),t(`${p}.table_045Mlmday`),t(`${p}.table_038Gmday`),t(`${p}.table_yesBiovalve`),t(`${p}.table_500Pcs`),t(`${p}.table_medium`)],
          [t(`${p}.table_recyclableMonopePouch`),t(`${p}.table_035Mlmday`),t(`${p}.table_028Gmday`),t(`${p}.table_yesRecyclablePe`),t(`${p}.table_500Pcs`),t(`${p}.table_medium`)],
          [t(`${p}.table_dripCoffeeSachet`),t(`${p}.table_002Mlmday`),t(`${p}.table_004Gmday`),t(`${p}.table_noPreportioned`),t(`${p}.table_100Pcs`),t(`${p}.table_low`)],
          [t(`${p}.table_fscTeaGiftBox`),t(`${p}.table_naOuterProtection`),t(`${p}.table_na`),t(`${p}.table_na`),t(`${p}.table_200Pcs`),t(`${p}.table_premium`)]
        ]
      }
    }
  ]

  const relatedLinks = [
    {
      title: t(`${p}.title_compostableCoffeeBags`),
      url: "/products/compostable-coffee-bags",
      description: t(`${p}.description_exploreOurCertifiedCompostableKraft`)
    },
    {
      title: t(`${p}.title_coffeeBagsWithDegassingValve`),
      url: "/products/coffee-bags-degassing-valve",
      description: t(`${p}.description_buyHighbarrierStandupPouchesWith`)
    },
    {
      title: t(`${p}.title_ecoStandUpPouches`),
      url: "/store/product/eco-standup",
      description: t(`${p}.description_purchasePremiumSustainableStandupPouches`)
    },
    {
      title: t(`${p}.title_customTuckDisplayPackagingBoxes`),
      url: "/store?category=boxes",
      description: t(`${p}.description_browsePremiumFscCertifiedSolid`)
    }
  ]

  return (
    <>
      <Helmet>
        <title>{t(`${p}.metaTitle`)}</title>
        <meta name="description" content={t(`${p}.metaDescription`)} />
        <link rel="canonical" href="https://achievepack.com/industry/coffee-tea" />
        <meta property="og:title" content="Sustainable Coffee & Tea Packaging Solutions" />
        <meta property="og:description" content={t(`${p}.metaDescription`)} />
        <meta property="og:url" content="https://achievepack.com/industry/coffee-tea" />
        <meta name="keywords" content={t(`${p}.metaKeywords`)} />
        
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            "name": "Coffee & Tea Packaging Solutions Ecosystem",
            "description": t(`${p}.schemaDescription`),
            "brand": {
              "@type": "Brand",
              "name": "Achieve Pack"
            },
            "offers": {
              "@type": "AggregateOffer",
              "priceCurrency": "USD",
              "lowPrice": "0.08",
              "highPrice": "1.85",
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
        heroBgColor="#1e1510"
        title={t(`${p}.title`)}
        description={t(`${p}.description`)}
        keywords={['coffee packaging', 'degassing valve', 'compostable coffee bag', 'recyclable coffee pouch']}
        heroTitle={t(`${p}.heroTitle`)}
        heroSubtitle={t(`${p}.heroSubtitle`)}
        introSummary={t(`${p}.introSummary`)}
        sections={sections}
        tables={tables}
        faqs={faqs}
        relatedLinks={relatedLinks}
        schemaType="Product"
        heroImage="/imgs/illustrated/a_coffee_tea_hero_v1_1905321.webp"
      />
    </>
  )
}

export default CoffeeTeaPage
