import { useTranslation } from 'react-i18next'
import { Helmet } from 'react-helmet-async'
import { useState } from 'react'
import { Leaf, AlertTriangle, CheckCircle, Award, Shield, Recycle, HelpCircle, ChevronDown, Layers, Zap, Package } from 'lucide-react'
import PouchLayout from '../../../components/pouch/PouchLayout'
import { NeoButton, NeoCard, NeoBadge } from '../../../components/pouch/PouchUI'
import ClickableImage from '../../../components/ClickableImage'
import { Link } from 'react-router-dom'

export default function PouchPlasticFreePage() {
  const { t } = useTranslation()

  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null)

  const title = t('seoPages.pages.pouchPlasticFree.metaTitle')
  const description = t('seoPages.pages.pouchPlasticFree.metaDescription')

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        name: t('seoPages.pages.pouchPlasticFree.whatIsTheMoq'),
        "acceptedAnswer": {
          "@type": "Answer",
          text: t('seoPages.pages.pouchPlasticFree.ourMinimumOrderQuantity')
        }
      },
      {
        "@type": "Question",
        name: t('seoPages.pages.pouchPlasticFree.canYouProvideFree'),
        "acceptedAnswer": {
          "@type": "Answer",
          text: t('seoPages.pages.pouchPlasticFree.yesWeShipFree')
        }
      },
      {
        "@type": "Question",
        name: t('seoPages.pages.pouchPlasticFree.doYouSupportCustom'),
        "acceptedAnswer": {
          "@type": "Answer",
          text: t('seoPages.pages.pouchPlasticFree.absolutelyWeSupplyCustom')
        }
      },
      {
        "@type": "Question",
        name: t('seoPages.pages.pouchPlasticFree.whatIsTheProduction'),
        "acceptedAnswer": {
          "@type": "Answer",
          text: t('seoPages.pages.pouchPlasticFree.digitallyPrintedOrdersAre')
        }
      },
      {
        "@type": "Question",
        name: t('seoPages.pages.pouchPlasticFree.areYourCompostableMaterials'),
        "acceptedAnswer": {
          "@type": "Answer",
          text: t('seoPages.pages.pouchPlasticFree.yesOurPouchesAre')
        }
      },
      {
        "@type": "Question",
        name: t('seoPages.pages.pouchPlasticFree.whatDetailsDoYou'),
        "acceptedAnswer": {
          "@type": "Answer",
          text: t('seoPages.pages.pouchPlasticFree.toCalculatePricingPlease')
        }
      }
    ]
  }

  const specTranslations = [
    {
      label: t('seoPages.pages.pouchPlasticFree.barrierCoating'),
      val: "Aluminum-Free Metallization",
      desc: t('seoPages.pages.pouchPlasticFree.anUltrathinVapordepositedMineral')
    },
    {
      label: t('seoPages.pages.pouchPlasticFree.materialStack'),
      val: "Kraft Paper + NKME + PLA/PBAT",
      desc: t('seoPages.pages.pouchPlasticFree.aFullyCertifiedThreelayer')
    },
    {
      label: t('seoPages.pages.pouchPlasticFree.sealChemistry'),
      val: "Starch-Based Heat Seal Resin",
      desc: t('seoPages.pages.pouchPlasticFree.lowtemperatureActivationLayerEnsures')
    },
    {
      label: t('seoPages.pages.pouchPlasticFree.printCompliance'),
      val: "Water-Based Eco Inks",
      desc: t('seoPages.pages.pouchPlasticFree.premiumHighresolutionPrintingUsing')
    }
  ]

  const faqs = [
    {
      q: t('seoPages.pages.pouchPlasticFree.whatIsTheMoq'),
      a: t('seoPages.pages.pouchPlasticFree.ourDigitalPrintingTechnology')
    },
    {
      q: t('seoPages.pages.pouchPlasticFree.areFreePhysicalSamples'),
      a: t('seoPages.pages.pouchPlasticFree.yesWeOfferFree')
    },
    {
      q: t('seoPages.pages.pouchPlasticFree.doYouSupportCustom1'),
      a: t('seoPages.pages.pouchPlasticFree.yesWeDoNot')
    },
    {
      q: t('seoPages.pages.pouchPlasticFree.whatIsTheStandard'),
      a: t('seoPages.pages.pouchPlasticFree.digitalPrintRunsAre')
    },
    {
      q: t('seoPages.pages.pouchPlasticFree.whatCompostingAndFood'),
      a: t('seoPages.pages.pouchPlasticFree.allOurPackagingIs')
    },
    {
      q: t('seoPages.pages.pouchPlasticFree.whatInformationIsNeeded'),
      a: t('seoPages.pages.pouchPlasticFree.simplySpecifyYourBag')
    }
  ]

  return (
    <PouchLayout>
      <Helmet>
        <title>{t('seoPages.pages.pouchPlasticFree.metaTitle')}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={t('seoPages.pages.pouchPlasticFree.metaKeywords')} />
        <link rel="canonical" href="https://pouch.eco/composting/plastic-free" />
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      {/* Hero Section */}
      <section className="relative pt-12 pb-24 border-b-4 border-black bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:20px_20px] bg-neutral-50 text-left">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          
          {/* Breadcrumb Bar */}
          <div className="flex flex-wrap items-center gap-2 font-['JetBrains_Mono'] text-xs font-black uppercase text-black mb-8">
            <Link to="/" className="hover:bg-[#D4FF00] px-1 py-0.5 border border-black transition">{t('seoPages.pages.pouchPlasticFree.home')}</Link>
            <span>/</span>
            <Link to="/learn" className="hover:bg-[#D4FF00] px-1 py-0.5 border border-black transition">{t('seoPages.pages.pouchPlasticFree.ecoacademy')}</Link>
            <span>/</span>
            <span className="bg-[#10b981] text-white px-1.5 py-0.5 border border-black">{t('seoPages.pages.pouchPlasticFree.plasticFreeVsCompostable')}</span>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 z-10">
              <div className="flex flex-wrap gap-2">
                <span className="inline-block bg-[#00FFFF] border-4 border-black px-4 py-2 transform rotate-1 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] font-['JetBrains_Mono'] font-black text-sm">
                  {t('seoPages.pages.pouchPlasticFree.academydebunk01')}
                </span>
                <span className="inline-block bg-black text-white border-4 border-black px-4 py-2 transform -rotate-1 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] font-['JetBrains_Mono'] font-black text-sm">
                  {t('seoPages.pages.pouchPlasticFree.100Transparent')}
                </span>
              </div>

              <h1 className="font-black text-5xl md:text-7xl leading-[0.9] tracking-tighter uppercase">
                {t('seoPages.pages.pouchPlasticFree.plasticFree')}<br/>
                {t('seoPages.pages.pouchPlasticFree.compostable')}<br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4FF00] to-[#FF00FF] drop-shadow-[4px_4px_0px_rgba(0,0,0,1)]">{t('seoPages.pages.pouchPlasticFree.demystified')}</span>
              </h1>

              <p className="font-['JetBrains_Mono'] font-bold text-lg md:text-xl max-w-md bg-white border-4 border-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] text-black">
                {t('seoPages.pages.pouchPlasticFree.gtBioplasticsVsFossil')}<br/>
                {t('seoPages.pages.pouchPlasticFree.gtPlantbasedBarrierMechanics')}<br/>
                {t('seoPages.pages.pouchPlasticFree.gtCurbsideCompostingCompliance')}<br/>
                {t('seoPages.pages.pouchPlasticFree.gtVerifiedBpiTuv')}
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <NeoButton href="https://calendly.com/30-min-free-packaging-consultancy" variant="primary">
                  {t('seoPages.pages.pouchPlasticFree.bookFreeConsultation')}
                </NeoButton>
                <NeoButton variant="secondary" href="#definitions">
                  {t('seoPages.pages.pouchPlasticFree.exploreDefinitions')}
                </NeoButton>
              </div>
            </div>

            {/* Hero Image Card */}
            <div className="relative">
              <div className="absolute inset-0 bg-neutral-400 translate-x-4 translate-y-4 border-4 border-black" />
              <ClickableImage 
                src="/imgs/composting/plastic-free/hero.webp" 
                alt={t('seoPages.pages.pouchPlasticFree.alt_plasticfreeVsCompostableStandup')} 
                className="relative z-10 border-4 border-black w-full shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Quick Definitions Cards */}
      <section id="definitions" className="py-24 px-4 md:px-6 max-w-7xl mx-auto text-left">
        <div className="mb-16">
          <NeoBadge color="magenta">{t('seoPages.pages.pouchPlasticFree.thedifference')}</NeoBadge>
          <h2 className="font-black text-4xl md:text-6xl uppercase mt-4">{t('seoPages.pages.pouchPlasticFree.understandingTheTerms')}</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <NeoCard color="bg-white">
            <Leaf className="w-12 h-12 mb-4 text-[#10b981]" />
            <h3 className="font-black text-3xl mb-4 uppercase">{t('seoPages.pages.pouchPlasticFree.whatIsCompostable')}</h3>
            <p className="font-['JetBrains_Mono'] text-sm leading-relaxed mb-6">
              {t('seoPages.pages.pouchPlasticFree.aMaterialIsCertified')}
            </p>
            <div className="bg-neutral-50 border-2 border-black p-4 font-['JetBrains_Mono'] text-xs text-neutral-600">
              <strong>{t('seoPages.pages.pouchPlasticFree.note')}</strong> {t('seoPages.pages.pouchPlasticFree.manyCertifiedCompostableStructures')}
            </div>
          </NeoCard>

          <NeoCard color="bg-[#FF00FF]" className="text-white">
            <Recycle className="w-12 h-12 mb-4 text-white" />
            <h3 className="font-black text-3xl mb-4 uppercase text-white">{t('seoPages.pages.pouchPlasticFree.whatIsPlasticfree')}</h3>
            <p className="font-['JetBrains_Mono'] text-sm leading-relaxed mb-6 text-white">
              {t('seoPages.pages.pouchPlasticFree.inTheStrictestLegislative')}
            </p>
            <div className="bg-black/20 border-2 border-white/20 p-4 font-['JetBrains_Mono'] text-xs text-white/90">
              <strong>{t('seoPages.pages.pouchPlasticFree.definitionCheck')}</strong> {t('seoPages.pages.pouchPlasticFree.conventionalplasticfreeAllowsCompostableBioplastics')}
            </div>
          </NeoCard>
        </div>
      </section>

      {/* Three Layer Bag Cutaway Section */}
      <section className="py-24 bg-white border-y-4 border-black text-left">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <NeoBadge color="cyan">{t('seoPages.pages.pouchPlasticFree.materialanatomy')}</NeoBadge>
              <h2 className="font-black text-4xl md:text-6xl uppercase">{t('seoPages.pages.pouchPlasticFree.ourCertifiedMultilayerStructure')}</h2>
              <p className="font-['JetBrains_Mono'] text-sm text-neutral-600 leading-relaxed">
                {t('seoPages.pages.pouchPlasticFree.ratherThanUsingDeceptive')}
              </p>

              <div className="space-y-4">
                <div className="border-4 border-black p-4 bg-amber-50">
                  <h4 className="font-black text-lg uppercase flex items-center gap-2">
                    <span className="bg-black text-white px-2 py-0.5 text-xs font-['JetBrains_Mono']">01</span>
                    {t('seoPages.pages.pouchPlasticFree.outerLayerFscCertified')}
                  </h4>
                  <p className="text-xs font-['JetBrains_Mono'] text-neutral-600 mt-1">
                    {t('seoPages.pages.pouchPlasticFree.providesStructuralRigidityA')}
                  </p>
                </div>

                <div className="border-4 border-black p-4 bg-purple-50">
                  <h4 className="font-black text-lg uppercase flex items-center gap-2">
                    <span className="bg-black text-white px-2 py-0.5 text-xs font-['JetBrains_Mono']">02</span>
                    {t('seoPages.pages.pouchPlasticFree.middleLayerMetallizedCellulose')}
                  </h4>
                  <p className="text-xs font-['JetBrains_Mono'] text-neutral-600 mt-1">
                    {t('seoPages.pages.pouchPlasticFree.anUltrathinVapordepositedMineral1')}
                  </p>
                </div>

                <div className="border-4 border-black p-4 bg-green-50">
                  <h4 className="font-black text-lg uppercase flex items-center gap-2">
                    <span className="bg-black text-white px-2 py-0.5 text-xs font-['JetBrains_Mono']">03</span>
                    {t('seoPages.pages.pouchPlasticFree.innerLayerPlaPbat')}
                  </h4>
                  <p className="text-xs font-['JetBrains_Mono'] text-neutral-600 mt-1">
                    {t('seoPages.pages.pouchPlasticFree.cornstarchDerivedPolylacticAcid')}
                  </p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-neutral-400 translate-x-4 translate-y-4 border-4 border-black" />
              <ClickableImage 
                src="/imgs/composting/plastic-free/a_three_layer_bag_cutaway_0455201.webp" 
                alt={t('seoPages.pages.pouchPlasticFree.alt_threelayerCompostableBagCutaway')} 
                className="relative z-10 border-4 border-black w-full shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Technical Spec Value Translation */}
      <section className="py-24 bg-neutral-50 text-left">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <NeoBadge color="magenta">{t('seoPages.pages.pouchPlasticFree.procurementutility')}</NeoBadge>
              <h2 className="font-black text-5xl md:text-7xl uppercase mt-4">
                {t('seoPages.pages.pouchPlasticFree.valueSpecsMatrix')}
              </h2>
            </div>
            <div className="font-['JetBrains_Mono'] text-sm font-bold bg-[#D4FF00] border-4 border-black px-4 py-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              {t('seoPages.pages.pouchPlasticFree.standardscompliance2026')}
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {specTranslations.map((s, idx) => (
              <div key={idx} className="bg-white border-4 border-black p-6 hover:translate-x-1 hover:translate-y-1 hover:shadow-none shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all">
                <span className="text-[10px] font-black uppercase bg-black text-white px-2 py-0.5 border border-black font-['JetBrains_Mono']">
                  {s.label}
                </span>
                <h4 className="font-black text-xl uppercase mt-4 mb-2">{s.val}</h4>
                <p className="font-['JetBrains_Mono'] text-xs text-neutral-600 leading-relaxed">
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Informative Content */}
      <section className="py-24 bg-white text-left">
        <div className="max-w-4xl mx-auto px-4 md:px-6">
          <h2 className="text-4xl md:text-5xl font-black uppercase mb-8">
            {t('seoPages.pages.pouchPlasticFree.howBrandsNavigateThe')} <span className="text-[#FF00FF]">{t('seoPages.pages.pouchPlasticFree.ecopackagingSpectrum')}</span>
          </h2>

          <div className="prose prose-lg max-w-none font-['JetBrains_Mono'] text-gray-700 space-y-6">
            <p>
              {t('seoPages.pages.pouchPlasticFree.manyRetailFoodAnd')}
            </p>
            <p>
              {t('seoPages.pages.pouchPlasticFree.toSolveThisAdvanced')}
            </p>

            <div className="grid md:grid-cols-2 gap-6 my-8">
              <ClickableImage
                src="/imgs/composting/plastic-free/a_plastic_free_vs_compostable_split_2649647.webp"
                alt={t('seoPages.pages.pouchPlasticFree.alt_splitViewComparingStrictly')}
                className="w-full h-80 object-cover border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]"
              />
              <ClickableImage
                src="/imgs/composting/plastic-free/a_conventional_vs_compostable_2073987.webp"
                alt={t('seoPages.pages.pouchPlasticFree.alt_comparisonChartBetweenConventional')}
                className="w-full h-80 object-cover border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]"
              />
            </div>

            <h3 className="text-2xl font-black uppercase text-black mt-12 mb-4">{t('seoPages.pages.pouchPlasticFree.draftingComplianceClaims')}</h3>
            <p>
              {t('seoPages.pages.pouchPlasticFree.weHighlyRecommendBrands')}
            </p>
            <div className="bg-neutral-50 border-4 border-black p-6 font-bold text-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] my-6">
              {t('seoPages.pages.pouchPlasticFree.fullyCompostablePackagingMade')}
            </div>
            <p>
              {t('seoPages.pages.pouchPlasticFree.thisBuildsAbsoluteCredibility')}
            </p>
          </div>
        </div>
      </section>

      {/* Stateful 6-Pillar FAQ Accordion */}
      <section className="py-24 bg-white border-t-4 border-black text-left">
        <div className="max-w-4xl mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <NeoBadge color="magenta">{t('seoPages.pages.pouchPlasticFree.expertfaq')}</NeoBadge>
            <h2 className="text-4xl md:text-5xl font-black uppercase mt-6 text-center">
              {t('seoPages.pages.pouchPlasticFree.procurementComplianceFaq')}
            </h2>
            <p className="font-['JetBrains_Mono'] text-sm text-neutral-600 mt-2 text-center">
              {t('seoPages.pages.pouchPlasticFree.clearAnswersToYour')}
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div 
                key={idx} 
                className="bg-white border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all"
              >
                <button
                  className="w-full text-left p-6 font-black text-lg md:text-xl uppercase flex justify-between items-center"
                  onClick={() => setOpenFaqIndex(openFaqIndex === idx ? null : idx)}
                >
                  <span className="flex items-center gap-3">
                    <span className="w-8 h-8 bg-black text-white flex items-center justify-center text-xs font-['JetBrains_Mono']">
                      0{idx + 1}
                    </span>
                    {faq.q}
                  </span>
                  <span className="text-2xl font-black">{openFaqIndex === idx ? '−' : '+'}</span>
                </button>
                
                {openFaqIndex === idx && (
                  <div className="p-6 border-t-4 border-black bg-neutral-50 font-['JetBrains_Mono'] text-sm text-neutral-700 leading-relaxed text-left pl-14">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-[#D4FF00] border-t-4 border-black text-center">
        <div className="max-w-4xl mx-auto px-4 space-y-8">
          <NeoBadge color="bg-black text-white">{t('seoPages.pages.pouchPlasticFree.elevateyourbrand')}</NeoBadge>
          <h2 className="font-black text-5xl md:text-7xl uppercase drop-shadow-[4px_4px_0px_rgba(0,0,0,1)]">
            {t('seoPages.pages.pouchPlasticFree.beginYourCustomRun')}
          </h2>
          <p className="font-['JetBrains_Mono'] font-bold text-xl text-black">
            {t('seoPages.pages.pouchPlasticFree.highperformanceCertifiedCompostablePackaging')}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <NeoButton href="/sample" variant="dark">
              {t('seoPages.pages.pouchPlasticFree.requestFreeEcoSample')}
            </NeoButton>
            <NeoButton href="https://calendly.com/30-min-free-packaging-consultancy" variant="secondary" className="!bg-white !text-black border-black border-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              {t('seoPages.pages.pouchPlasticFree.consultPackagingEngineer')}
            </NeoButton>
          </div>

          <div className="pt-8 border-t border-black/20 text-xs font-['JetBrains_Mono'] text-black/70 max-w-xl mx-auto leading-relaxed">
            <strong>{t('seoPages.pages.pouchPlasticFree.seekingHighvolumeCommercialWholesale')}</strong><br/>
            {t('seoPages.pages.pouchPlasticFree.forHighvolumeRetailSupply')}{" "}
            <a 
              href="https://achievepack.com/composting/plastic-free" 
              className="underline font-bold hover:text-black transition"
              target="_blank" 
              rel="noopener noreferrer"
            >
              {t('seoPages.pages.pouchPlasticFree.achievepackcomcompostingplasticfree')}
            </a>
          </div>
        </div>
      </section>
    </PouchLayout>
  )
}
