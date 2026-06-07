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

const SupplementsPowdersPage: React.FC = () => {
  const { t } = useTranslation();
  const p = 'seoPages.pages.supplementsPowders';
  const sections = [
    {
      id: 'powder-challenge',
      title: t(`${p}.title_theSupplementChallengeMoistureDegradation`),
      icon: <Beaker className="h-5 w-5 text-emerald-700" />,
      content: (
        <div className="space-y-4 text-neutral-700 leading-relaxed">
          <p className="text-lg">
            Nutritional powders, protein blends, collagen peptides, and capsule supplements are highly vulnerable to atmospheric degradation. Fine powders are highly hygroscopic—quickly absorbing ambient moisture to cause clumping, caking, and loss of nutritional potency. Additionally, fine powder dust frequently clogs traditional zipper tracks, preventing a hermetic seal and causing fine particles to leak during shipping.
          </p>
          <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-xl border border-amber-200 grid md:grid-cols-2 gap-6 my-4">
            <div>
              <h4 className="font-semibold text-amber-900 flex items-center gap-2 mb-2">
                <AlertTriangle className="h-4 w-4 text-amber-600" /> Key Material Risks
              </h4>
              <ul className="text-sm text-neutral-700 space-y-2">
                <li>• <strong>{t(`${p}.moistureCaking`)}</strong> {t(`${p}.waterVaporWvtrEnteringThe`)}</li>
                <li>• <strong>{t(`${p}.dustingLeaks`)}</strong> {t(`${p}.microparticlesClogZipLocksCausing`)}</li>
                <li>• <strong>{t(`${p}.activePhotooxidation`)}</strong> {t(`${p}.lightAndAirDegradeSensitive`)}</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-green-900 flex items-center gap-2 mb-2">
                <Shield className="h-4 w-4 text-green-600" /> Engineering Requirements
              </h4>
              <ul className="text-sm text-neutral-700 space-y-2">
                <li>• <strong>{t(`${p}.powderproofZippers`)}</strong> {t(`${p}.precisionTracksWithDustrejectionGrooves`)}</li>
                <li>• <strong>{t(`${p}.absoluteGasUvBarrier`)}</strong> {t(`${p}.metallizedFoilCoresOrAdvanced`)}</li>
                <li>• <strong>{t(`${p}.heavydutySealIntegrity`)}</strong> {t(`${p}.extrawideHeatSealsDesignedTo`)}</li>
              </ul>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'packaging-options',
      title: t(`${p}.title_5PackagingOptionsComparedLowcost`),
      icon: <Package className="h-5 w-5 text-emerald-700" />,
      content: (
        <div className="space-y-6">
          <p className="text-neutral-700">
            Explore our five engineered sustainable packaging formats designed to maintain active vitamin potency and prevent powder caking.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
            {/* Option 1: Stand-Up Pouch with Powder Zipper */}
            <div className="bg-white border border-neutral-200 rounded-xl p-5 shadow-sm hover:shadow-md transition flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-start mb-3">
                  <span className="bg-neutral-100 text-neutral-800 text-xs font-bold px-2.5 py-1 rounded">{t(`${p}.option1`)}</span>
                  <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2 py-0.5 rounded">{t(`${p}.lowCostMvp`)}</span>
                </div>
                <h4 className="font-bold text-neutral-900 text-lg mb-2">{t(`${p}.pouchWithPowderZipper`)}</h4>
                <p className="text-sm text-neutral-600 mb-4">
                  The ideal standard for retail supplements, whey proteins, and plant collagen. High-barrier stand-up structure fitted with a specialized dust-rejecting press zipper seal.
                </p>
                <ul className="text-xs text-neutral-500 space-y-1 mb-4">
                  <li>{t(`${p}.highbarrierMetallizedFilmCore`)}</li>
                  <li>{t(`${p}.powderproofAirtightZipClosure`)}</li>
                  <li>{t(`${p}.excellentMoistureAndUvProtection`)}</li>
                </ul>
              </div>
              <Link to="/store/product/eco-standup" className="text-sm font-semibold text-emerald-700 hover:text-emerald-800 flex items-center gap-1 mt-2">
                Order Powder Pouches (From US$0.09) <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            {/* Option 2: Flat Bottom Box Pouch */}
            <div className="bg-white border border-neutral-200 rounded-xl p-5 shadow-sm hover:shadow-md transition flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-start mb-3">
                  <span className="bg-neutral-100 text-neutral-800 text-xs font-bold px-2.5 py-1 rounded">{t(`${p}.option2`)}</span>
                  <span className="bg-amber-100 text-amber-800 text-xs font-semibold px-2 py-0.5 rounded">{t(`${p}.premiumRetail`)}</span>
                </div>
                <h4 className="font-bold text-neutral-900 text-lg mb-2">{t(`${p}.flatBottomBoxPouch`)}</h4>
                <p className="text-sm text-neutral-600 mb-4">
                  Designed for heavy, bulk-sized supplement powders (500g to 2.5kg). Box-like flat bottom stands perfectly upright with reinforced quad-seams for ultimate transport protection.
                </p>
                <ul className="text-xs text-neutral-500 space-y-1 mb-4">
                  <li>{t(`${p}.fiveFullyPrintableBrandPanels`)}</li>
                  <li>{t(`${p}.extremelyDurableHeavygaugeLaminate`)}</li>
                  <li>{t(`${p}.accommodatesWideScoopsAndClosures`)}</li>
                </ul>
              </div>
              <Link to="/products/compostable-coffee-bags" className="text-sm font-semibold text-emerald-700 hover:text-emerald-800 flex items-center gap-1 mt-2">
                Buy Flat Bottom Bags <ArrowRight className="h-4 w-4" />
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
                  Fully recyclable single-polymer PE structure incorporating gas-barrier EVOH. Approved for standard store drop-off and flexible plastic collection streams.
                </p>
                <ul className="text-xs text-neutral-500 space-y-1 mb-4">
                  <li>{t(`${p}.100RecyclableMonomaterialStructure`)}</li>
                  <li>{t(`${p}.highPerformanceCoextrudedMoistureShield`)}</li>
                  <li>{t(`${p}.optionForClearWindowsAnd`)}</li>
                </ul>
              </div>
              <Link to="/store/product/eco-standup" className="text-sm font-semibold text-emerald-700 hover:text-emerald-800 flex items-center gap-1 mt-2">
                Order Recyclable PE Pouches <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            {/* Option 4: Compostable Kraft Pouch */}
            <div className="bg-white border border-neutral-200 rounded-xl p-5 shadow-sm hover:shadow-md transition flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-start mb-3">
                  <span className="bg-neutral-100 text-neutral-800 text-xs font-bold px-2.5 py-1 rounded">{t(`${p}.option4`)}</span>
                  <span className="bg-green-100 text-green-800 text-xs font-semibold px-2 py-0.5 rounded">{t(`${p}.ecoCircularity`)}</span>
                </div>
                <h4 className="font-bold text-neutral-900 text-lg mb-2">{t(`${p}.compostableKraftPouch`)}</h4>
                <p className="text-sm text-neutral-600 mb-4">
                  Earthy organic unbleached kraft paper on the outside combined with certified biodegradable inner layers. Fully breaks down in commercial composting bins within 90-180 days.
                </p>
                <ul className="text-xs text-neutral-500 space-y-1 mb-4">
                  <li>{t(`${p}.organicUnbleachedKraftExteriorLook`)}</li>
                  <li>{t(`${p}.certifiedEn13432AstmD6400`)}</li>
                  <li>{t(`${p}.excellentMoistureBarrierPerformance`)}</li>
                </ul>
              </div>
              <Link to="/products/compostable-coffee-bags" className="text-sm font-semibold text-emerald-700 hover:text-emerald-800 flex items-center gap-1 mt-2">
                Buy Compostable Kraft Bags <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            {/* Option 5: FSC Custom Capsule Carton */}
            <div className="bg-white border border-neutral-200 rounded-xl p-5 shadow-sm hover:shadow-md transition flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-start mb-3">
                  <span className="bg-neutral-100 text-neutral-800 text-xs font-bold px-2.5 py-1 rounded">{t(`${p}.option5`)}</span>
                  <span className="bg-indigo-100 text-indigo-800 text-xs font-semibold px-2 py-0.5 rounded">{t(`${p}.luxuryRetailGift`)}</span>
                </div>
                <h4 className="font-bold text-neutral-900 text-lg mb-2">{t(`${p}.fscCustomCartonBox`)}</h4>
                <p className="text-sm text-neutral-600 mb-4">
                  Wrap single-use sachet packs or capsule bottles in customized FSC certified retail display boxes. Add gold/silver foil stamping and custom divider inserts for ultimate luxury.
                </p>
                <ul className="text-xs text-neutral-500 space-y-1 mb-4">
                  <li>{t(`${p}.fscRecycledSolidCardboard`)}</li>
                  <li>{t(`${p}.diecutWindowsAndMatteTexture`)}</li>
                  <li>{t(`${p}.drasticallySavesCarbonShippingVolume`)}</li>
                </ul>
              </div>
              <a href="https://calendly.com/30-min-free-packaging-consultancy" target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-emerald-700 hover:text-emerald-800 flex items-center gap-1 mt-2">
                Design Custom Cartons <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'interactive-showcase',
      title: t(`${p}.title_premiumVisualMockupsProductShowcase`),
      icon: <Sparkles className="h-5 w-5 text-emerald-700" />,
      content: (
        <div className="space-y-6">
          <p className="text-neutral-700">
            Click to inspect high-resolution product prototypes. Engineered to resist moisture absorption and fine powder leaks under strict GMP standards.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-neutral-50 p-3 rounded-lg border border-neutral-200 flex flex-col justify-between">
              <ClickableImage 
                src="/imgs/illustrated/a_supplements_hero_v1_0434970.webp" 
                alt="Premium wellness supplements stand-up pouch packaging mockup" 
                className="w-full h-40 object-cover rounded-md mb-2 shadow-sm"
              />
              <div>
                <h5 className="font-semibold text-xs text-neutral-900">{t(`${p}.premiumSupplementPouches`)}</h5>
                <p className="text-[10px] text-neutral-500 mt-1">{t(`${p}.highBarrierOilproofInternalFilms`)}</p>
              </div>
            </div>

            <div className="bg-neutral-50 p-3 rounded-lg border border-neutral-200 flex flex-col justify-between">
              <ClickableImage 
                src="/imgs/illustrated/a_supplements_hero_v2_6800758.webp" 
                alt="Organic wellness powders stand up packaging pouch" 
                className="w-full h-40 object-cover rounded-md mb-2 shadow-sm"
              />
              <div>
                <h5 className="font-semibold text-xs text-neutral-900">{t(`${p}.organicPowdersPouches`)}</h5>
                <p className="text-[10px] text-neutral-500 mt-1">{t(`${p}.matteUnbleachedKraftPlantbasedCompostable`)}</p>
              </div>
            </div>

            <div className="bg-neutral-50 p-3 rounded-lg border border-neutral-200 flex flex-col justify-between">
              <ClickableImage 
                src="/imgs/seo-photos/a_wellness_superfood_lifestyle_9527146.webp" 
                alt="Wellness superfood protein powder packaging design mockup" 
                className="w-full h-40 object-cover rounded-md mb-2 shadow-sm"
              />
              <div>
                <h5 className="font-semibold text-xs text-neutral-900">{t(`${p}.gourmetWellnessPowders`)}</h5>
                <p className="text-[10px] text-neutral-500 mt-1">{t(`${p}.extraThickCopolymerFilmsRobust`)}</p>
              </div>
            </div>

            <div className="bg-neutral-50 p-3 rounded-lg border border-neutral-200 flex flex-col justify-between">
              <ClickableImage 
                src="/imgs/seo-photos/a_adaptogens_singapore_zen_wellness_pouch_1951517.webp" 
                alt="Adaptogens supplement pouch in calm zen kitchen pantry" 
                className="w-full h-40 object-cover rounded-md mb-2 shadow-sm"
              />
              <div>
                <h5 className="font-semibold text-xs text-neutral-900">{t(`${p}.adaptogensWellnessPouches`)}</h5>
                <p className="text-[10px] text-neutral-500 mt-1">{t(`${p}.zeroOdorLeakageHermeticallySealed`)}</p>
              </div>
            </div>
          </div>

          <div className="bg-emerald-50 rounded-xl p-6 border border-emerald-200 flex flex-col md:flex-row items-center gap-6 mt-6">
            <div className="w-full md:w-1/3">
              <ClickableImage 
                src="/imgs/illustrated/a_supplements_hero_v3_0877891.webp" 
                alt="Supplements stand up pouch standing in premium display carton box" 
                className="w-full h-48 object-cover rounded-lg shadow-md"
              />
            </div>
            <div className="w-full md:w-2/3 space-y-3">
              <span className="bg-[#D4FF00] text-black text-[10px] font-black px-2.5 py-1 uppercase rounded-full border border-black shadow-[1px_1px_0px_0px_rgba(0,0,0,1)]">
                Highlighted Supplement Solution
              </span>
              <h4 className="font-bold text-neutral-900 text-lg">{t(`${p}.featuredEcoSolutionCurbsideRecyclable`)}</h4>
              <p className="text-sm text-neutral-700">
                Ensure absolute product freshness and circular recycling compliance with our <strong>{t(`${p}.curbsideRecyclableMonopePouches`)}</strong>. Engineered using co-extruded single-polymer PE containing EVOH gas barriers, this format provides identical moisture and oxygen protection of standard rigid plastics. Fitted with a specialty powder zipper, it guarantees 100% dust-rejection sealing.
              </p>
              <div className="flex gap-4">
                <Link to="/store/product/eco-standup" className="bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-semibold px-4 py-2.5 rounded transition">
                  Buy Recyclable PE Pouches (MOQ 100)
                </Link>
                <Link to="/products/compostable-coffee-bags" className="bg-white hover:bg-neutral-100 text-neutral-800 text-xs font-semibold px-4 py-2.5 rounded border border-neutral-300 transition">
                  Order Compostable Kraft Bags
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
      icon: <Award className="h-5 w-5 text-emerald-700" />,
      content: (
        <div className="space-y-4 text-neutral-700 text-sm">
          <p>
            To assure zero supplement powder clumping and secure absolute zipper airtightness during filling lines, we suggest adhering to this checklist:
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="border border-neutral-200 rounded-lg p-4 bg-neutral-50">
              <h5 className="font-bold text-neutral-900 mb-2">{t(`${p}.phase1MaterialVerification`)}</h5>
              <ul className="space-y-2 text-neutral-600 text-xs">
                <li className="flex gap-2"><span className="text-green-600 font-bold">✔</span> {t(`${p}.runHygroscopicAnalysisOnPowders`)}</li>
                <li className="flex gap-2"><span className="text-green-600 font-bold">✔</span> {t(`${p}.assessActiveVitaminsChemicalStability`)}</li>
                <li className="flex gap-2"><span className="text-green-600 font-bold">✔</span> {t(`${p}.determineOptimalBagSizingTo`)}</li>
              </ul>
            </div>
            <div className="border border-neutral-200 rounded-lg p-4 bg-neutral-50">
              <h5 className="font-bold text-neutral-900 mb-2">{t(`${p}.phase2IntegrityTesting`)}</h5>
              <ul className="space-y-2 text-neutral-600 text-xs">
                <li className="flex gap-2"><span className="text-green-600 font-bold">✔</span> {t(`${p}.stressTestZippersInExtreme`)}</li>
                <li className="flex gap-2"><span className="text-green-600 font-bold">✔</span> {t(`${p}.conductStandardDropTest12m`)}</li>
                <li className="flex gap-2"><span className="text-green-600 font-bold">✔</span> {t(`${p}.verifyAirtightSealConsistencyAcross`)}</li>
              </ul>
            </div>
          </div>
        </div>
      )
    }
  ]

  const faqs = [
    {
      question: t(`${p}.question_howDoYouPreventFine`),
      answer: t(`${p}.answer_wePreintegrateASpecializedPowderproof`)
    },
    {
      question: t(`${p}.question_areCompostablePouchesSuitableFor`),
      answer: t(`${p}.answer_yesWhenEngineeredCorrectlyOur`)
    },
    {
      question: t(`${p}.question_howDoIProtectSensitive`),
      answer: t(`${p}.answer_vitaminsAndNutritionalCompoundsAre`)
    },
    {
      question: t(`${p}.question_whatIsTheMinimumOrder`),
      answer: t(`${p}.answer_weSupportStartupHealthBrands`)
    }
  ]

  const tables = [
    {
      title: t(`${p}.title_technicalComparisonSupplementsPowdersPackaging`),
      data: {
        headers: [t(`${p}.table_format`),t(`${p}.table_oxygenBarrierOtr`),t(`${p}.table_waterVaporWvtr`),t(`${p}.table_powderZipperCompatible`),t(`${p}.table_moq`),t(`${p}.table_relativeCost`)],
        rows: [
          [t(`${p}.table_standupZipperPouch`),t(`${p}.table_020Mlmday`),t(`${p}.table_025Gmday`),t(`${p}.table_yesSelfcleaning`),t(`${p}.table_100Pcs`),t(`${p}.table_low`)],
          [t(`${p}.table_flatBottomBoxPouch`),t(`${p}.table_012Mlmday`),t(`${p}.table_015Gmday`),t(`${p}.table_yesHeavyduty`),t(`${p}.table_500Pcs`),t(`${p}.table_medium`)],
          [t(`${p}.table_recyclableMonopePouch`),t(`${p}.table_032Mlmday`),t(`${p}.table_026Gmday`),t(`${p}.table_yesRecyclablePe`),t(`${p}.table_500Pcs`),t(`${p}.table_medium`)],
          [t(`${p}.table_compostableKraftPouch`),t(`${p}.table_045Mlmday`),t(`${p}.table_039Gmday`),t(`${p}.table_yesBiopolymer`),t(`${p}.table_500Pcs`),t(`${p}.table_medium`)],
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
        <link rel="canonical" href="https://achievepack.com/industry/supplements-powders" />
        <meta property="og:title" content="Sustainable Supplements & Powders Packaging Solutions" />
        <meta property="og:description" content={t(`${p}.metaDescription`)} />
        <meta property="og:url" content="https://achievepack.com/industry/supplements-powders" />
        <meta name="keywords" content={t(`${p}.metaKeywords`)} />
        
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            "name": "Supplements & Powders Packaging Ecosystem",
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
        heroBgColor="#064e3b"
        title={t(`${p}.title`)}
        description={t(`${p}.description`)}
        keywords={['supplement packaging', 'protein powder bag', 'compostable supplement bag', 'powder zipper bag']}
        heroTitle={t(`${p}.heroTitle`)}
        heroSubtitle={t(`${p}.heroSubtitle`)}
        introSummary={t(`${p}.introSummary`)}
        sections={sections}
        tables={tables}
        faqs={faqs}
        relatedLinks={relatedLinks}
        schemaType="Product"
        heroImage="/imgs/illustrated/a_supplements_hero_v1_0434970.webp"
      />
    </>
  )
}

export default SupplementsPowdersPage
