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

const SnacksFoodPage: React.FC = () => {
  const { t } = useTranslation();
  const p = 'seoPages.pages.snacksFood';
  const sections = [
    {
      id: 'barrier-challenge',
      title: t(`${p}.title_theSnackBarrierChallengeMoisture`),
      icon: <Beaker className="h-5 w-5 text-orange-700" />,
      content: (
        <div className="space-y-4 text-neutral-700 leading-relaxed">
          <p className="text-lg">
            Gourmet snacks, nuts, dried fruits, and organic chips are highly sensitive to environmental factors. Exposure to moisture instantly degrades texture—turning crunchy snacks soggy and stale—while oxygen contact triggers fat oxidation in nuts and oily foods, causing off-flavors and rapid spoilage. Achieving a stable 12-month shelf life demands precision-engineered barriers that keep air and water out.
          </p>
          <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-xl border border-amber-200 grid md:grid-cols-2 gap-6 my-4">
            <div>
              <h4 className="font-semibold text-amber-900 flex items-center gap-2 mb-2">
                <AlertTriangle className="h-4 w-4 text-amber-600" /> Key Material Risks
              </h4>
              <ul className="text-sm text-neutral-700 space-y-2">
                <li>• <strong>{t(`${p}.soggyTexture`)}</strong> {t(`${p}.highMoistureVaporTransmissionWvtr`)}</li>
                <li>• <strong>{t(`${p}.oilRancidity`)}</strong> {t(`${p}.oxygenEnteringThePouchOxidizes`)}</li>
                <li>• <strong>{t(`${p}.sealWeakness`)}</strong> {t(`${p}.volatileOilsOrPowderResidues`)}</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-green-900 flex items-center gap-2 mb-2">
                <Shield className="h-4 w-4 text-green-600" /> Engineering Requirements
              </h4>
              <ul className="text-sm text-neutral-700 space-y-2">
                <li>• <strong>{t(`${p}.hermeticMoistureDefense`)}</strong> {t(`${p}.highperformanceBarrierLaminatesCompostableOr`)}</li>
                <li>• <strong>{t(`${p}.oilresistantInnerLiners`)}</strong> {t(`${p}.copolymerSealantLayersDesignedTo`)}</li>
                <li>• <strong>{t(`${p}.resealableConvenience`)}</strong> {t(`${p}.premiumZippersOrSlidersTo`)}</li>
              </ul>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'packaging-options',
      title: t(`${p}.title_5PackagingOptionsComparedLowcost`),
      icon: <Package className="h-5 w-5 text-orange-700" />,
      content: (
        <div className="space-y-6">
          <p className="text-neutral-700">
            Compare our five top-tier sustainable snack packaging formats engineered for high barrier performance and low carbon footprints.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
            {/* Option 1: Stand-Up Pouch with Zipper */}
            <div className="bg-white border border-neutral-200 rounded-xl p-5 shadow-sm hover:shadow-md transition flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-start mb-3">
                  <span className="bg-neutral-100 text-neutral-800 text-xs font-bold px-2.5 py-1 rounded">{t(`${p}.option1`)}</span>
                  <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2 py-0.5 rounded">{t(`${p}.lowCostMvp`)}</span>
                </div>
                <h4 className="font-bold text-neutral-900 text-lg mb-2">{t(`${p}.standupPouchWithZipper`)}</h4>
                <p className="text-sm text-neutral-600 mb-4">
                  The ideal retail display package for retail snack products. Sleek vertical display, pre-installed zip closures, and multi-layer barriers for long-lasting snack preservation.
                </p>
                <ul className="text-xs text-neutral-500 space-y-1 mb-4">
                  <li>{t(`${p}.glossyOrMatteVisualOptions`)}</li>
                  <li>{t(`${p}.solidResealableZipper`)}</li>
                  <li>{t(`${p}.highbarrierMetallizedInnerFilm`)}</li>
                </ul>
              </div>
              <Link to="/store/product/eco-standup" className="text-sm font-semibold text-orange-700 hover:text-orange-800 flex items-center gap-1 mt-2">
                Buy Stand-Up Pouches (From US$0.09) <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            {/* Option 2: Flat Bottom Pouch */}
            <div className="bg-white border border-neutral-200 rounded-xl p-5 shadow-sm hover:shadow-md transition flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-start mb-3">
                  <span className="bg-neutral-100 text-neutral-800 text-xs font-bold px-2.5 py-1 rounded">{t(`${p}.option2`)}</span>
                  <span className="bg-amber-100 text-amber-800 text-xs font-semibold px-2 py-0.5 rounded">{t(`${p}.premiumShelfAppeal`)}</span>
                </div>
                <h4 className="font-bold text-neutral-900 text-lg mb-2">{t(`${p}.flatBottomGussetPouch`)}</h4>
                <p className="text-sm text-neutral-600 mb-4">
                  The absolute premium standard for specialty snacks, granola, and organic nuts. Five panels of printable space and a sturdy box-style bottom that stands flawlessly on retail shelves.
                </p>
                <ul className="text-xs text-neutral-500 space-y-1 mb-4">
                  <li>{t(`${p}.perfectFlatbottomBoxProfile`)}</li>
                  <li>{t(`${p}.5PanelsForAbsoluteBrand`)}</li>
                  <li>{t(`${p}.easilySupportsThickZippersOr`)}</li>
                </ul>
              </div>
              <Link to="/products/compostable-coffee-bags" className="text-sm font-semibold text-orange-700 hover:text-orange-800 flex items-center gap-1 mt-2">
                Order Flat Bottom Bags <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            {/* Option 3: Curbside Recyclable Mono-PP Pouch */}
            <div className="bg-white border border-neutral-200 rounded-xl p-5 shadow-sm hover:shadow-md transition flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-start mb-3">
                  <span className="bg-neutral-100 text-neutral-800 text-xs font-bold px-2.5 py-1 rounded">{t(`${p}.option3`)}</span>
                  <span className="bg-green-100 text-green-800 text-xs font-semibold px-2 py-0.5 rounded">{t(`${p}.curbsideRecyclable`)}</span>
                </div>
                <h4 className="font-bold text-neutral-900 text-lg mb-2">{t(`${p}.recyclableMonoppPouch`)}</h4>
                <p className="text-sm text-neutral-600 mb-4">
                  Crafted entirely from single-polymer polypropylene. Highly compatible with modern flexible recycling streams, providing a glossy finish and a sturdy vertical structure.
                </p>
                <ul className="text-xs text-neutral-500 space-y-1 mb-4">
                  <li>{t(`${p}.highClarityWindowDisplays`)}</li>
                  <li>{t(`${p}.100RecyclableMonomaterial`)}</li>
                  <li>{t(`${p}.outstandingMoistureDefense`)}</li>
                </ul>
              </div>
              <Link to="/store/product/eco-standup" className="text-sm font-semibold text-orange-700 hover:text-orange-800 flex items-center gap-1 mt-2">
                Buy Recyclable Mono-PP <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            {/* Option 4: Compostable Kraft Pouch */}
            <div className="bg-white border border-neutral-200 rounded-xl p-5 shadow-sm hover:shadow-md transition flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-start mb-3">
                  <span className="bg-neutral-100 text-neutral-800 text-xs font-bold px-2.5 py-1 rounded">{t(`${p}.option4`)}</span>
                  <span className="bg-green-100 text-green-800 text-xs font-semibold px-2 py-0.5 rounded">{t(`${p}.zerowastePackaging`)}</span>
                </div>
                <h4 className="font-bold text-neutral-900 text-lg mb-2">{t(`${p}.compostableKraftSnackBag`)}</h4>
                <p className="text-sm text-neutral-600 mb-4">
                  Organic unbleached kraft paper on the outside combined with certified biodegradable compostable barrier layers inside. Ideal for premium organic granolas and eco-conscious treats.
                </p>
                <ul className="text-xs text-neutral-500 space-y-1 mb-4">
                  <li>{t(`${p}.earthyUnbleachedOrganicKraftAppeal`)}</li>
                  <li>{t(`${p}.certifiedEn13432Compostable`)}</li>
                  <li>{t(`${p}.highOilAndGreaseResistance`)}</li>
                </ul>
              </div>
              <Link to="/products/compostable-coffee-bags" className="text-sm font-semibold text-orange-700 hover:text-orange-800 flex items-center gap-1 mt-2">
                Order Compostable Kraft <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            {/* Option 5: FSC Retail Display Carton */}
            <div className="bg-white border border-neutral-200 rounded-xl p-5 shadow-sm hover:shadow-md transition flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-start mb-3">
                  <span className="bg-neutral-100 text-neutral-800 text-xs font-bold px-2.5 py-1 rounded">{t(`${p}.option5`)}</span>
                  <span className="bg-indigo-100 text-indigo-800 text-xs font-semibold px-2 py-0.5 rounded">{t(`${p}.dtcBoxKits`)}</span>
                </div>
                <h4 className="font-bold text-neutral-900 text-lg mb-2">{t(`${p}.fscCustomRetailBox`)}</h4>
                <p className="text-sm text-neutral-600 mb-4">
                  Wrap your individual snack packs in custom printed, FSC certified folding display boxes. High brand real estate, perfect for subscription boxes or premium multi-pack gifting sets.
                </p>
                <ul className="text-xs text-neutral-500 space-y-1 mb-4">
                  <li>{t(`${p}.fscCertifiedEcocartonGrayboard`)}</li>
                  <li>{t(`${p}.embossedFinishesAndGoldsilverFoil`)}</li>
                  <li>{t(`${p}.shipsFlatToDrasticallyCut`)}</li>
                </ul>
              </div>
              <a href="https://calendly.com/30-min-free-packaging-consultancy" target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-orange-700 hover:text-orange-800 flex items-center gap-1 mt-2">
                Plan Display Boxes <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'interactive-showcase',
      title: t(`${p}.title_premiumVisualMockupsProductShowcase`),
      icon: <Sparkles className="h-5 w-5 text-orange-700" />,
      content: (
        <div className="space-y-6">
          <p className="text-neutral-700">
            Click to inspect high-resolution product prototypes. Crafted to withstand high oil contents and deliver exceptional retail unboxing appeals under strict BPI standards.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-neutral-50 p-3 rounded-lg border border-neutral-200 flex flex-col justify-between">
              <ClickableImage 
                src="/imgs/illustrated/a_snack_brand_variation_1_5605894.webp" 
                alt="Premium organic snack pouch design with matte finish" 
                className="w-full h-40 object-cover rounded-md mb-2 shadow-sm"
              />
              <div>
                <h5 className="font-semibold text-xs text-neutral-900">{t(`${p}.organicSnackPouches`)}</h5>
                <p className="text-[10px] text-neutral-500 mt-1">{t(`${p}.earthyColorsPremiumMatteLaminate`)}</p>
              </div>
            </div>

            <div className="bg-neutral-50 p-3 rounded-lg border border-neutral-200 flex flex-col justify-between">
              <ClickableImage 
                src="/imgs/illustrated/a_snacks_packaging_v2_9259880.webp" 
                alt="Premium sustainable snack food pouch mockup" 
                className="w-full h-40 object-cover rounded-md mb-2 shadow-sm"
              />
              <div>
                <h5 className="font-semibold text-xs text-neutral-900">{t(`${p}.gourmetSnacksPackaging`)}</h5>
                <p className="text-[10px] text-neutral-500 mt-1">{t(`${p}.metallicFoilsCrispVectorPrinting`)}</p>
              </div>
            </div>

            <div className="bg-neutral-50 p-3 rounded-lg border border-neutral-200 flex flex-col justify-between">
              <ClickableImage 
                src="/imgs/illustrated/a_snack_brand_variation_3_4760757.webp" 
                alt="Gourmet nuts stand up pouch packaging with window" 
                className="w-full h-40 object-cover rounded-md mb-2 shadow-sm"
              />
              <div>
                <h5 className="font-semibold text-xs text-neutral-900">{t(`${p}.premiumNutsGranolas`)}</h5>
                <p className="text-[10px] text-neutral-500 mt-1">{t(`${p}.highclarityClearWindowDisplaysOilresistant`)}</p>
              </div>
            </div>

            <div className="bg-neutral-50 p-3 rounded-lg border border-neutral-200 flex flex-col justify-between">
              <ClickableImage 
                src="/imgs/illustrated/a_recyclable_mono_pe_card_v2_5619420.webp" 
                alt="Curbside recyclable mono-material snack food bag" 
                className="w-full h-40 object-cover rounded-md mb-2 shadow-sm"
              />
              <div>
                <h5 className="font-semibold text-xs text-neutral-900">{t(`${p}.recyclableMonopeBags`)}</h5>
                <p className="text-[10px] text-neutral-500 mt-1">{t(`${p}.storecollectionRecyclableStructurePremiumSoft`)}</p>
              </div>
            </div>
          </div>

          <div className="bg-orange-50 rounded-xl p-6 border border-orange-200 flex flex-col md:flex-row items-center gap-6 mt-6">
            <div className="w-full md:w-1/3">
              <ClickableImage 
                src="/imgs/illustrated/a_snacks_packaging_v3_9709945.webp" 
                alt="Stand up recyclable snack pouch in natural pantry environment" 
                className="w-full h-48 object-cover rounded-lg shadow-md"
              />
            </div>
            <div className="w-full md:w-2/3 space-y-3">
              <span className="bg-[#D4FF00] text-black text-[10px] font-black px-2.5 py-1 uppercase rounded-full border border-black shadow-[1px_1px_0px_0px_rgba(0,0,0,1)]">
                Highlighted Snack Solution
              </span>
              <h4 className="font-bold text-neutral-900 text-lg">{t(`${p}.featuredEcoSolutionCurbsideRecyclable`)}</h4>
              <p className="text-sm text-neutral-700">
                Give your snack brand a sustainable edge with <strong>{t(`${p}.curbsideRecyclableMonoppStandupPouches`)}</strong>. Using a single polymer polypropylene profile, these pouches bypass traditional multi-material separation issues. Fully approved for flexible recycling streams, they maintain an outstanding moisture and oxygen barrier to ensure chips stay crispy.
              </p>
              <div className="flex gap-4">
                <Link to="/store/product/eco-standup" className="bg-orange-700 hover:bg-orange-800 text-white text-xs font-semibold px-4 py-2.5 rounded transition">
                  Buy Recyclable Snack Pouches (MOQ 100)
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
      icon: <Award className="h-5 w-5 text-orange-700" />,
      content: (
        <div className="space-y-4 text-neutral-700 text-sm">
          <p>
            To prevent premature oil leakage and secure absolute seal strength during automated packing, we recommend executing the following testing checklist:
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="border border-neutral-200 rounded-lg p-4 bg-neutral-50">
              <h5 className="font-bold text-neutral-900 mb-2">{t(`${p}.phase1MaterialVerification`)}</h5>
              <ul className="space-y-2 text-neutral-600 text-xs">
                <li className="flex gap-2"><span className="text-green-600 font-bold">✔</span> {t(`${p}.assessRelativeSaltAcidAnd`)}</li>
                <li className="flex gap-2"><span className="text-green-600 font-bold">✔</span> {t(`${p}.verifyDynamicMoistureVaporTransmission`)}</li>
                <li className="flex gap-2"><span className="text-green-600 font-bold">✔</span> {t(`${p}.confirmDirectFoodContactSafety`)}</li>
              </ul>
            </div>
            <div className="border border-neutral-200 rounded-lg p-4 bg-neutral-50">
              <h5 className="font-bold text-neutral-900 mb-2">{t(`${p}.phase2IntegrityTesting`)}</h5>
              <ul className="space-y-2 text-neutral-600 text-xs">
                <li className="flex gap-2"><span className="text-green-600 font-bold">✔</span> {t(`${p}.subjectPouchesToA14day`)}</li>
                <li className="flex gap-2"><span className="text-green-600 font-bold">✔</span> {t(`${p}.performStandardPressureBurstTests`)}</li>
                <li className="flex gap-2"><span className="text-green-600 font-bold">✔</span> {t(`${p}.evaluateUnboxingConvenienceToEnsure`)}</li>
              </ul>
            </div>
          </div>
        </div>
      )
    }
  ]

  const faqs = [
    {
      question: t(`${p}.question_howDoYouKeepPotato`),
      answer: t(`${p}.answer_weUseMultilayerCompostableFilms`)
    },
    {
      question: t(`${p}.question_willNaturalSnackOilsDegrade`),
      answer: t(`${p}.answer_notOurEngineeredLinersWe`)
    },
    {
      question: t(`${p}.question_canIUseWindowsOn`),
      answer: t(`${p}.answer_absolutelyUnlikeTraditionalFoilBags`)
    },
    {
      question: t(`${p}.question_whatIsTheTurnaroundTime`),
      answer: t(`${p}.answer_forStandardStockSizesWith`)
    }
  ]

  const tables = [
    {
      title: t(`${p}.title_technicalComparisonSnacksDryFood`),
      data: {
        headers: [t(`${p}.table_format`),t(`${p}.table_oxygenBarrierOtr`),t(`${p}.table_waterVaporWvtr`),t(`${p}.table_oilgreaseResistance`),t(`${p}.table_moq`),t(`${p}.table_relativeCost`)],
        rows: [
          [t(`${p}.table_standupZipperPouch`),t(`${p}.table_020Mlmday`),t(`${p}.table_025Gmday`),t(`${p}.table_protectedPe`),t(`${p}.table_100Pcs`),t(`${p}.table_low`)],
          [t(`${p}.table_flatBottomPouch`),t(`${p}.table_015Mlmday`),t(`${p}.table_018Gmday`),t(`${p}.table_thickCopolymer`),t(`${p}.table_500Pcs`),t(`${p}.table_medium`)],
          [t(`${p}.table_recyclableMonoppPouch`),t(`${p}.table_045Mlmday`),t(`${p}.table_032Gmday`),t(`${p}.table_coppFilm`),t(`${p}.table_500Pcs`),t(`${p}.table_medium`)],
          [t(`${p}.table_compostableKraftBag`),t(`${p}.table_048Mlmday`),t(`${p}.table_042Gmday`),t(`${p}.table_organicLiner`),t(`${p}.table_500Pcs`),t(`${p}.table_medium`)],
          [t(`${p}.table_fscCustomDisplayBox`),t(`${p}.table_naOuterProtection`),t(`${p}.table_na`),t(`${p}.table_na`),t(`${p}.table_200Pcs`),t(`${p}.table_premium`)]
        ]
      }
    }
  ]

  const relatedLinks = [
    {
      title: t(`${p}.title_recyclableMonomaterialPouches`),
      url: "/store/product/eco-standup",
      description: t(`${p}.description_buyCurbsiderecyclableStandupPouchesWith`)
    },
    {
      title: t(`${p}.title_compostableStandUpPouches`),
      url: "/products/compostable-coffee-bags",
      description: t(`${p}.description_orderCertifiedCompostableFlexibleKraft`)
    },
    {
      title: t(`${p}.title_customPrintedBoxPackaging`),
      url: "/store?category=boxes",
      description: t(`${p}.description_browsePremiumFscCertifiedFolding`)
    },
    {
      title: t(`${p}.title_lowMoqPackagingEcosystem`),
      url: "/products/low-moq-packaging",
      description: t(`${p}.description_exploreOurFlexibleStartupfriendlySmall`)
    }
  ]

  return (
    <>
      <Helmet>
        <title>{t(`${p}.metaTitle`)}</title>
        <meta name="description" content={t(`${p}.metaDescription`)} />
        <link rel="canonical" href="https://achievepack.com/industry/snacks-food" />
        <meta property="og:title" content="Sustainable Snacks & Dry Food Packaging Solutions" />
        <meta property="og:description" content={t(`${p}.metaDescription`)} />
        <meta property="og:url" content="https://achievepack.com/industry/snacks-food" />
        <meta name="keywords" content={t(`${p}.metaKeywords`)} />
        
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            "name": "Snacks & Dry Food Packaging Ecosystem",
            "description": t(`${p}.schemaDescription`),
            "brand": {
              "@type": "Brand",
              "name": "Achieve Pack"
            },
            "offers": {
              "@type": "AggregateOffer",
              "priceCurrency": "USD",
              "lowPrice": "0.09",
              "highPrice": "2.10",
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
        heroBgColor="#7c2d12"
        title={t(`${p}.title`)}
        description={t(`${p}.description`)}
        keywords={['snack packaging', 'moisture barrier', 'compostable snack bag', 'recyclable mono-PP']}
        heroTitle={t(`${p}.heroTitle`)}
        heroSubtitle={t(`${p}.heroSubtitle`)}
        introSummary={t(`${p}.introSummary`)}
        sections={sections}
        tables={tables}
        faqs={faqs}
        relatedLinks={relatedLinks}
        schemaType="Product"
        heroImage="/imgs/illustrated/a_snacks_food_hero_v1_9854447.webp"
      />
    </>
  )
}

export default SnacksFoodPage
