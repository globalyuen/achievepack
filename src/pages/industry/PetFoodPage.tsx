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

const PetFoodPage: React.FC = () => {
  const { t } = useTranslation();
  const p = 'seoPages.pages.petFood';
  const sections = [
    {
      id: 'grease-challenge',
      title: t(`${p}.title_thePetFoodChallengeStrong`),
      icon: <Beaker className="h-5 w-5 text-slate-700" />,
      content: (
        <div className="space-y-4 text-neutral-700 leading-relaxed">
          <p className="text-lg">
            Pet food, organic dog treats, and raw kibble are rich in animal fats, active proteins, and strong organic odors. Standard retail plastics fail quickly under direct grease exposure, leading to oily packaging exteriors and bad-smelling rancid spoilage. Furthermore, dehydrated treats and dense dry kibble have sharp edges that can easily puncture ordinary packaging during heavy logistics.
          </p>
          <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-xl border border-amber-200 grid md:grid-cols-2 gap-6 my-4">
            <div>
              <h4 className="font-semibold text-amber-900 flex items-center gap-2 mb-2">
                <AlertTriangle className="h-4 w-4 text-amber-600" /> Key Material Risks
              </h4>
              <ul className="text-sm text-neutral-700 space-y-2">
                <li>• <strong>{t(`${p}.greaseMigration`)}</strong> {t(`${p}.animalFatsPermeateThroughLowdensity`)}</li>
                <li>• <strong>{t(`${p}.odorLeakage`)}</strong> {t(`${p}.highlyAromaticFishOrBeef`)}</li>
                <li>• <strong>{t(`${p}.punctureTears`)}</strong> {t(`${p}.hardDehydratedTreatsTearThin`)}</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-green-900 flex items-center gap-2 mb-2">
                <Shield className="h-4 w-4 text-green-600" /> Engineering Requirements
              </h4>
              <ul className="text-sm text-neutral-700 space-y-2">
                <li>• <strong>{t(`${p}.greaseproofBarrierLiners`)}</strong> {t(`${p}.coextrudedInnerLayersDesignedTo`)}</li>
                <li>• <strong>{t(`${p}.aromaDefenseCores`)}</strong> {t(`${p}.solidEvohCoatingsOrThick`)}</li>
                <li>• <strong>{t(`${p}.heavydutyPunctureDefense`)}</strong> {t(`${p}.copolymerLaminatesTestedAgainstSharp`)}</li>
              </ul>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'packaging-options',
      title: t(`${p}.title_5PackagingOptionsComparedLowcost`),
      icon: <Package className="h-5 w-5 text-slate-700" />,
      content: (
        <div className="space-y-6">
          <p className="text-neutral-700">
            Choose from our range of five engineered sustainable packaging formats designed for raw strength, odor retention, and eco-friendly claims.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
            {/* Option 1: Stand-Up Zipper Pouch */}
            <div className="bg-white border border-neutral-200 rounded-xl p-5 shadow-sm hover:shadow-md transition flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-start mb-3">
                  <span className="bg-neutral-100 text-neutral-800 text-xs font-bold px-2.5 py-1 rounded">{t(`${p}.option1`)}</span>
                  <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2 py-0.5 rounded">{t(`${p}.lowCostMvp`)}</span>
                </div>
                <h4 className="font-bold text-neutral-900 text-lg mb-2">{t(`${p}.standupZipperPouch`)}</h4>
                <p className="text-sm text-neutral-600 mb-4">
                  The ideal retail choice for small-batch dog treats or organic pet supplements. High vertical display, strong pre-installed ziplock, and high-barrier grease resistance.
                </p>
                <ul className="text-xs text-neutral-500 space-y-1 mb-4">
                  <li>{t(`${p}.glossyOrPremiumMatteFinishes`)}</li>
                  <li>{t(`${p}.presstocloseAirtightZipper`)}</li>
                  <li>{t(`${p}.moderateCostHighlyStartupfriendly`)}</li>
                </ul>
              </div>
              <Link to="/store/product/eco-standup" className="text-sm font-semibold text-slate-700 hover:text-slate-800 flex items-center gap-1 mt-2">
                Order Stand-Up Pouches (From US$0.09) <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            {/* Option 2: Flat Bottom Box Pouch */}
            <div className="bg-white border border-neutral-200 rounded-xl p-5 shadow-sm hover:shadow-md transition flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-start mb-3">
                  <span className="bg-neutral-100 text-neutral-800 text-xs font-bold px-2.5 py-1 rounded">{t(`${p}.option2`)}</span>
                  <span className="bg-amber-100 text-amber-800 text-xs font-semibold px-2 py-0.5 rounded">{t(`${p}.premiumBulkStyle`)}</span>
                </div>
                <h4 className="font-bold text-neutral-900 text-lg mb-2">{t(`${p}.flatBottomBoxPouch`)}</h4>
                <p className="text-sm text-neutral-600 mb-4">
                  Perfect for large-format pet food, raw kibble, or bulk cat treats. Stands completely upright with five fully printable panels for extreme brand presentation.
                </p>
                <ul className="text-xs text-neutral-500 space-y-1 mb-4">
                  <li>{t(`${p}.exceptionalStructuralBoxProfile`)}</li>
                  <li>{t(`${p}.perfectForThickZippersAnd`)}</li>
                  <li>{t(`${p}.holds1kgTo10kgLoads`)}</li>
                </ul>
              </div>
              <Link to="/products/compostable-coffee-bags" className="text-sm font-semibold text-slate-700 hover:text-slate-800 flex items-center gap-1 mt-2">
                Buy Flat Bottom Bags <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            {/* Option 3: Recyclable Mono-PE Gusset Bag */}
            <div className="bg-white border border-neutral-200 rounded-xl p-5 shadow-sm hover:shadow-md transition flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-start mb-3">
                  <span className="bg-neutral-100 text-neutral-800 text-xs font-bold px-2.5 py-1 rounded">{t(`${p}.option3`)}</span>
                  <span className="bg-green-100 text-green-800 text-xs font-semibold px-2 py-0.5 rounded">{t(`${p}.curbsideRecyclable`)}</span>
                </div>
                <h4 className="font-bold text-neutral-900 text-lg mb-2">{t(`${p}.recyclableMonopeGussetPouch`)}</h4>
                <p className="text-sm text-neutral-600 mb-4">
                  Engineered using a single polymer PE laminate containing EVOH coatings. Highly accepted in standard store recycling bins, delivering a premium carbon-reduced footprint.
                </p>
                <ul className="text-xs text-neutral-500 space-y-1 mb-4">
                  <li>{t(`${p}.curbsideAndDropoffRecyclableClaim`)}</li>
                  <li>{t(`${p}.extremePunctureAndImpactDefense`)}</li>
                  <li>{t(`${p}.customClearWindowsToView`)}</li>
                </ul>
              </div>
              <Link to="/store/product/eco-standup" className="text-sm font-semibold text-slate-700 hover:text-slate-800 flex items-center gap-1 mt-2">
                Order Recyclable PE Pouches <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            {/* Option 4: Compostable Kraft Treats Bag */}
            <div className="bg-white border border-neutral-200 rounded-xl p-5 shadow-sm hover:shadow-md transition flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-start mb-3">
                  <span className="bg-neutral-100 text-neutral-800 text-xs font-bold px-2.5 py-1 rounded">{t(`${p}.option4`)}</span>
                  <span className="bg-green-100 text-green-800 text-xs font-semibold px-2 py-0.5 rounded">{t(`${p}.zerowasteLoop`)}</span>
                </div>
                <h4 className="font-bold text-neutral-900 text-lg mb-2">{t(`${p}.compostableKraftTreatsBag`)}</h4>
                <p className="text-sm text-neutral-600 mb-4">
                  Organic unbleached kraft paper paired with high-barrier plant-derived inner layers. 100% biodegradable in commercial composting, creating a perfect circular ecosystem.
                </p>
                <ul className="text-xs text-neutral-500 space-y-1 mb-4">
                  <li>{t(`${p}.earthyUnbleachedOrganicAppearance`)}</li>
                  <li>{t(`${p}.bpiEn13432CompostabilityCertified`)}</li>
                  <li>{t(`${p}.outstandingAnimalFatDefense`)}</li>
                </ul>
              </div>
              <Link to="/products/compostable-coffee-bags" className="text-sm font-semibold text-slate-700 hover:text-slate-800 flex items-center gap-1 mt-2">
                Order Compostable Bags <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            {/* Option 5: FSC Recycled Supplement Carton */}
            <div className="bg-white border border-neutral-200 rounded-xl p-5 shadow-sm hover:shadow-md transition flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-start mb-3">
                  <span className="bg-neutral-100 text-neutral-800 text-xs font-bold px-2.5 py-1 rounded">{t(`${p}.option5`)}</span>
                  <span className="bg-indigo-100 text-indigo-800 text-xs font-semibold px-2 py-0.5 rounded">{t(`${p}.petSupplementMvp`)}</span>
                </div>
                <h4 className="font-bold text-neutral-900 text-lg mb-2">{t(`${p}.fscCustomCartonBox`)}</h4>
                <p className="text-sm text-neutral-600 mb-4">
                  Elevate your pet supplements, single-use jerky packs, or chew bars with customized FSC certified retail display cartons. Matte textures and spot varnish highlights.
                </p>
                <ul className="text-xs text-neutral-500 space-y-1 mb-4">
                  <li>{t(`${p}.fscRecycledSolidCardboard`)}</li>
                  <li>{t(`${p}.preciseCustomDiecutInnerDividers`)}</li>
                  <li>{t(`${p}.shipsFlatToMinimizeInventory`)}</li>
                </ul>
              </div>
              <a href="https://calendly.com/30-min-free-packaging-consultancy" target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-slate-700 hover:text-slate-800 flex items-center gap-1 mt-2">
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
      icon: <Sparkles className="h-5 w-5 text-slate-700" />,
      content: (
        <div className="space-y-6">
          <p className="text-neutral-700">
            Click to inspect high-resolution product prototypes. Specially designed to stop grease migration and retain volatile dog food smells under strict BRC regulations.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-neutral-50 p-3 rounded-lg border border-neutral-200 flex flex-col justify-between">
              <ClickableImage 
                src="/imgs/illustrated/a_pet_food_hero_v3_7652587.webp" 
                alt="Premium pet treats stand-up pouch packaging mockup" 
                className="w-full h-40 object-cover rounded-md mb-2 shadow-sm"
              />
              <div>
                <h5 className="font-semibold text-xs text-neutral-900">{t(`${p}.premiumPetTreatsPouches`)}</h5>
                <p className="text-[10px] text-neutral-500 mt-1">{t(`${p}.highBarrierOilproofInternalFilms`)}</p>
              </div>
            </div>

            <div className="bg-neutral-50 p-3 rounded-lg border border-neutral-200 flex flex-col justify-between">
              <ClickableImage 
                src="/imgs/illustrated/a_pet_treats_v2_seal_7677464.webp" 
                alt="Earthy unbleached organic pet treats packaging pouch" 
                className="w-full h-40 object-cover rounded-md mb-2 shadow-sm"
              />
              <div>
                <h5 className="font-semibold text-xs text-neutral-900">{t(`${p}.organicKraftTreatPouches`)}</h5>
                <p className="text-[10px] text-neutral-500 mt-1">{t(`${p}.earthyTexturesPlantbasedCompostableBarrier`)}</p>
              </div>
            </div>

            <div className="bg-neutral-50 p-3 rounded-lg border border-neutral-200 flex flex-col justify-between">
              <ClickableImage 
                src="/imgs/blog/Sustainable-pet/a_pet_food_material_comparison_4636150.webp" 
                alt="Pet treats heavy duty packaging material comparison mockup" 
                className="w-full h-40 object-cover rounded-md mb-2 shadow-sm"
              />
              <div>
                <h5 className="font-semibold text-xs text-neutral-900">{t(`${p}.heavydutyTreatPouches`)}</h5>
                <p className="text-[10px] text-neutral-500 mt-1">{t(`${p}.extraThickCopolymerFilmsRobust`)}</p>
              </div>
            </div>

            <div className="bg-neutral-50 p-3 rounded-lg border border-neutral-200 flex flex-col justify-between">
              <ClickableImage 
                src="/imgs/blog/plant/a_pet_food_lifestyle_scene_9319878.webp" 
                alt="Pet food lifestyle scene with sustainable treat packaging" 
                className="w-full h-40 object-cover rounded-md mb-2 shadow-sm"
              />
              <div>
                <h5 className="font-semibold text-xs text-neutral-900">{t(`${p}.treatBagsInPantryScene`)}</h5>
                <p className="text-[10px] text-neutral-500 mt-1">{t(`${p}.zeroOdorLeakageHermeticallySealed`)}</p>
              </div>
            </div>
          </div>

          <div className="bg-slate-50 rounded-xl p-6 border border-slate-200 flex flex-col md:flex-row items-center gap-6 mt-6">
            <div className="w-full md:w-1/3">
              <ClickableImage 
                src="/imgs/blog/Sustainable-pet/a_sustainable_pet_food_packaging_hero_2601845.webp" 
                alt="Compostable organic pet food treat bag standing upright" 
                className="w-full h-48 object-cover rounded-lg shadow-md"
              />
            </div>
            <div className="w-full md:w-2/3 space-y-3">
              <span className="bg-[#D4FF00] text-black text-[10px] font-black px-2.5 py-1 uppercase rounded-full border border-black shadow-[1px_1px_0px_0px_rgba(0,0,0,1)]">
                Highlighted Pet Solution
              </span>
              <h4 className="font-bold text-neutral-900 text-lg">{t(`${p}.featuredEcoSolutionCertifiedCompostable`)}</h4>
              <p className="text-sm text-neutral-700">
                Align your pet brand with zero-waste initiatives using our <strong>{t(`${p}.certifiedCompostableKraftTreatsBags`)}</strong>. These pouches use organic, unbleached kraft papers and specialized plant-derived barrier liners. Certified compostable under EN 13432 standards, they deliver excellent fat and grease protection without leaking greasy oils.
              </p>
              <div className="flex gap-4">
                <Link to="/products/compostable-coffee-bags" className="bg-slate-700 hover:bg-slate-800 text-white text-xs font-semibold px-4 py-2.5 rounded transition">
                  Buy Compostable Treat Bags (MOQ 100)
                </Link>
                <Link to="/store/product/eco-standup" className="bg-white hover:bg-neutral-100 text-neutral-800 text-xs font-semibold px-4 py-2.5 rounded border border-neutral-300 transition">
                  Order Recyclable PE Pouches
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
      icon: <Award className="h-5 w-5 text-slate-700" />,
      content: (
        <div className="space-y-4 text-neutral-700 text-sm">
          <p>
            To assure zero animal oil seepage and secure total seal safety under packaging logistics load, we advise following this test pipeline:
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="border border-neutral-200 rounded-lg p-4 bg-neutral-50">
              <h5 className="font-bold text-neutral-900 mb-2">{t(`${p}.phase1MaterialVerification`)}</h5>
              <ul className="space-y-2 text-neutral-600 text-xs">
                <li className="flex gap-2"><span className="text-green-600 font-bold">✔</span> {t(`${p}.measureGreaseoilConcentrationInTreats`)}</li>
                <li className="flex gap-2"><span className="text-green-600 font-bold">✔</span> {t(`${p}.assessVolatileProteinAromasTo`)}</li>
                <li className="flex gap-2"><span className="text-green-600 font-bold">✔</span> {t(`${p}.verifyRawMaterialThicknessTo`)}</li>
              </ul>
            </div>
            <div className="border border-neutral-200 rounded-lg p-4 bg-neutral-50">
              <h5 className="font-bold text-neutral-900 mb-2">{t(`${p}.phase2IntegrityTesting`)}</h5>
              <ul className="space-y-2 text-neutral-600 text-xs">
                <li className="flex gap-2"><span className="text-green-600 font-bold">✔</span> {t(`${p}.runA30dayGreaseMigration`)}</li>
                <li className="flex gap-2"><span className="text-green-600 font-bold">✔</span> {t(`${p}.subjectPouchesToVibrationTesting`)}</li>
                <li className="flex gap-2"><span className="text-green-600 font-bold">✔</span> {t(`${p}.confirmZipperResealDurabilityOver`)}</li>
              </ul>
            </div>
          </div>
        </div>
      )
    }
  ]

  const faqs = [
    {
      question: t(`${p}.question_howDoYouPreventRaw`),
      answer: t(`${p}.answer_weUseAnAdvancedMultilayer`)
    },
    {
      question: t(`${p}.question_willStrongPetTreatOdors`),
      answer: t(`${p}.answer_noOurCurbsiderecyclableMonopePouches`)
    },
    {
      question: t(`${p}.question_canTheseBagsSupportHeavy`),
      answer: t(`${p}.answer_yesForLargeformatAndHeavy`)
    },
    {
      question: t(`${p}.question_whatIsTheMoqFor`),
      answer: t(`${p}.answer_weAccommodateSmallBusinessStartups`)
    }
  ]

  const tables = [
    {
      title: t(`${p}.title_technicalComparisonPetFoodTreats`),
      data: {
        headers: [t(`${p}.table_format`),t(`${p}.table_oxygenBarrierOtr`),t(`${p}.table_waterVaporWvtr`),t(`${p}.table_greasefatResistance`),t(`${p}.table_moq`),t(`${p}.table_relativeCost`)],
        rows: [
          [t(`${p}.table_standupZipperPouch`),t(`${p}.table_025Mlmday`),t(`${p}.table_022Gmday`),t(`${p}.table_protectedPe`),t(`${p}.table_100Pcs`),t(`${p}.table_low`)],
          [t(`${p}.table_flatBottomBoxPouch`),t(`${p}.table_012Mlmday`),t(`${p}.table_015Gmday`),t(`${p}.table_thickCopolymer`),t(`${p}.table_500Pcs`),t(`${p}.table_medium`)],
          [t(`${p}.table_recyclableMonopeBag`),t(`${p}.table_032Mlmday`),t(`${p}.table_026Gmday`),t(`${p}.table_evohpeFilm`),t(`${p}.table_500Pcs`),t(`${p}.table_medium`)],
          [t(`${p}.table_compostableKraftPouch`),t(`${p}.table_045Mlmday`),t(`${p}.table_039Gmday`),t(`${p}.table_greaseLiner`),t(`${p}.table_500Pcs`),t(`${p}.table_medium`)],
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
      description: t(`${p}.description_buyPremiumCertifiedCompostableFlexible`)
    },
    {
      title: t(`${p}.title_customPrintedBoxCartons`),
      url: "/store?category=boxes",
      description: t(`${p}.description_browsePremiumFscCertifiedSolid`)
    },
    {
      title: t(`${p}.title_lowMoqPackagingEcosystem`),
      url: "/products/low-moq-packaging",
      description: t(`${p}.description_checkOurFlexibleStartupfriendlySmall`)
    }
  ]

  return (
    <>
      <Helmet>
        <title>{t(`${p}.metaTitle`)}</title>
        <meta name="description" content={t(`${p}.metaDescription`)} />
        <link rel="canonical" href="https://achievepack.com/industry/pet-food" />
        <meta property="og:title" content="Sustainable Pet Food & Treats Packaging Solutions" />
        <meta property="og:description" content={t(`${p}.metaDescription`)} />
        <meta property="og:url" content="https://achievepack.com/industry/pet-food" />
        <meta name="keywords" content={t(`${p}.metaKeywords`)} />
        
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            "name": "Pet Food & Treats Packaging Ecosystem",
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
        heroBgColor="#0f172a"
        title={t(`${p}.title`)}
        description={t(`${p}.description`)}
        keywords={['pet food packaging', 'dog treat bag', 'compostable pet treat bag', 'recyclable kibble bag']}
        heroTitle={t(`${p}.heroTitle`)}
        heroSubtitle={t(`${p}.heroSubtitle`)}
        introSummary={t(`${p}.introSummary`)}
        sections={sections}
        tables={tables}
        faqs={faqs}
        relatedLinks={relatedLinks}
        schemaType="Product"
        heroImage="/imgs/illustrated/a_pet_food_hero_v3_7652587.webp"
      />
    </>
  )
}

export default PetFoodPage
