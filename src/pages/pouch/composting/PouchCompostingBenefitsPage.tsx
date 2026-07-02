import { useTranslation } from 'react-i18next'
import { Helmet } from 'react-helmet-async'
import { useState } from 'react'
import { Leaf, Droplets, Shield, Recycle, HelpCircle, ChevronDown, CheckCircle, Award, Target, Zap, Clock } from 'lucide-react'
import PouchLayout from '../../../components/pouch/PouchLayout'
import { NeoButton, NeoCard, NeoBadge } from '../../../components/pouch/PouchUI'
import ClickableImage from '../../../components/ClickableImage'
import { Link } from 'react-router-dom'

export default function PouchCompostingBenefitsPage() {
  const { t, i18n } = useTranslation()

  const localTranslations: Record<string, { title: string, problems: { title: string, desc: string }[] }> = {
    en: {
      title: "5 Common Composting Problems (And Solutions)",
      problems: [
        { title: "1. Non-Compostable Contamination", desc: "Mixing traditional plastics with organic waste ruins compost quality. Solution: Standardize on certified compostable packaging." },
        { title: "2. Inadequate Moisture Levels", desc: "Too dry halts decomposition; too wet causes anaerobic rotting. Solution: Automated moisture monitoring and balancing carbon-to-nitrogen ratios." },
        { title: "3. Poor Aeration", desc: "Lack of oxygen slows the process and produces methane. Solution: Regular turning or forced-air systems to maintain aerobic conditions." },
        { title: "4. Slow Degradation Rates", desc: "Some materials take too long to break down. Solution: Optimal temperature management and using highly disintegrable bio-plastics." },
        { title: "5. Pathogen Survival", desc: "Low temperatures fail to kill harmful bacteria. Solution: Maintaining thermophilic temperatures (>55°C) for sustained periods." }
      ]
    },
    es: {
      title: "5 Problemas Comunes de Compostaje (Y Soluciones)",
      problems: [
        { title: "1. Contaminación con No Compostables", desc: "Mezclar plásticos tradicionales con residuos orgánicos arruina la calidad del compost. Solución: Estandarizar con envases compostables certificados." },
        { title: "2. Niveles de Humedad Inadecuados", desc: "Muy seco detiene la descomposición; muy húmedo causa putrefacción anaeróbica. Solución: Monitoreo automatizado de humedad y equilibrio de la relación carbono-nitrógeno." },
        { title: "3. Mala Aireación", desc: "La falta de oxígeno ralentiza el proceso y produce metano. Solución: Volteo regular o sistemas de aire forzado para mantener condiciones aeróbicas." },
        { title: "4. Tasas de Degradación Lentas", desc: "Algunos materiales tardan demasiado en descomponerse. Solución: Gestión óptima de la temperatura y uso de bioplásticos altamente desintegrables." },
        { title: "5. Supervivencia de Patógenos", desc: "Las bajas temperaturas no logran matar las bacterias dañinas. Solución: Mantener temperaturas termofílicas (>55°C) durante períodos prolongados." }
      ]
    },
    fr: {
      title: "5 Problèmes Courants de Compostage (Et Solutions)",
      problems: [
        { title: "1. Contamination par des Non-Compostables", desc: "Mélanger des plastiques traditionnels avec des déchets organiques ruine la qualité du compost. Solution: Standardiser avec des emballages certifiés compostables." },
        { title: "2. Niveaux d'Humidité Inadéquats", desc: "Trop sec arrête la décomposition; trop humide provoque une pourriture anaérobie. Solution: Surveillance automatisée de l'humidité et équilibre du rapport carbone/azote." },
        { title: "3. Mauvaise Aération", desc: "Le manque d'oxygène ralentit le processus et produit du méthane. Solution: Retournement régulier ou systèmes à air forcé pour maintenir des conditions aérobies." },
        { title: "4. Taux de Dégradation Lents", desc: "Certains matériaux mettent trop de temps à se décomposer. Solution: Gestion optimale de la température et utilisation de bioplastiques hautement désintégrables." },
        { title: "5. Survie des Pathogènes", desc: "Les basses températures ne parviennent pas à tuer les bactéries nocives. Solution: Maintenir des températures thermophiles (>55°C) pendant des périodes prolongées." }
      ]
    },
    'zh-TW': {
      title: "5 個常見的堆肥問題（及解決方案）",
      problems: [
        { title: "1. 非可堆肥物污染", desc: "將傳統塑料與有機廢物混合會破壞堆肥質量。解決方案：標準化使用經過認證的可堆肥包裝。" },
        { title: "2. 水分不足或過多", desc: "太乾會停止分解；太濕會導致厭氧腐爛。解決方案：自動化水分監測並平衡碳氮比。" },
        { title: "3. 通風不良", desc: "缺氧會減慢過程並產生甲烷。解決方案：定期翻動或使用強制送風系統以保持需氧條件。" },
        { title: "4. 降解速度慢", desc: "有些材料需要太長時間才能分解。解決方案：優化溫度管理並使用高分解性的生物塑料。" },
        { title: "5. 病原體存活", desc: "低溫無法殺死有害細菌。解決方案：長時間維持嗜熱溫度（>55°C）。" }
      ]
    }
  }

  const currentLang = i18n.language || 'en'
  const transData = localTranslations[currentLang] || localTranslations['en']

  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null)

  const title = t('seoPages.pages.pouchCompostingBenefits.metaTitle')
  const description = t('seoPages.pages.pouchCompostingBenefits.metaDescription')

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        name: t('seoPages.pages.pouchCompostingBenefits.whatIsTheMoq'),
        "acceptedAnswer": {
          "@type": "Answer",
          text: t('seoPages.pages.pouchCompostingBenefits.ourMinimumOrderQuantity')
        }
      },
      {
        "@type": "Question",
        name: t('seoPages.pages.pouchCompostingBenefits.doYouProvideFree'),
        "acceptedAnswer": {
          "@type": "Answer",
          text: t('seoPages.pages.pouchCompostingBenefits.yesWeShipPhysical')
        }
      },
      {
        "@type": "Question",
        name: t('seoPages.pages.pouchCompostingBenefits.doYouSupportFully'),
        "acceptedAnswer": {
          "@type": "Answer",
          text: t('seoPages.pages.pouchCompostingBenefits.yesWeCreateCustom')
        }
      },
      {
        "@type": "Question",
        name: t('seoPages.pages.pouchCompostingBenefits.whatIsTheStandard'),
        "acceptedAnswer": {
          "@type": "Answer",
          text: t('seoPages.pages.pouchCompostingBenefits.digitallyPrintedOrdersAre')
        }
      },
      {
        "@type": "Question",
        name: t('seoPages.pages.pouchCompostingBenefits.whatCertificationsDoYour'),
        "acceptedAnswer": {
          "@type": "Answer",
          text: t('seoPages.pages.pouchCompostingBenefits.ourCompostableMaterialsCarry')
        }
      },
      {
        "@type": "Question",
        name: t('seoPages.pages.pouchCompostingBenefits.whatIsRequiredTo'),
        "acceptedAnswer": {
          "@type": "Answer",
          text: t('seoPages.pages.pouchCompostingBenefits.simplyLetUsKnow')
        }
      }
    ]
  }

  const specTranslations = [
    {
      label: t('seoPages.pages.pouchCompostingBenefits.disintegrationCycle'),
      val: "90-180 Day Biodegradation",
      desc: t('seoPages.pages.pouchCompostingBenefits.designedToFullyDisintegrate')
    },
    {
      label: t('seoPages.pages.pouchCompostingBenefits.laminationQuality'),
      val: "Solvent-Free Adhesive",
      desc: t('seoPages.pages.pouchCompostingBenefits.processedUsingAdvancedSolventfree')
    },
    {
      label: t('seoPages.pages.pouchCompostingBenefits.materialOrigin'),
      val: "Non-GMO Plant Biomass",
      desc: t('seoPages.pages.pouchCompostingBenefits.derivedFromRenewableAgricultural')
    },
    {
      label: t('seoPages.pages.pouchCompostingBenefits.environmentalYield'),
      val: "Circular Carbon Pathway",
      desc: t('seoPages.pages.pouchCompostingBenefits.divertsSoiledPackagingFrom')
    }
  ]

  const faqs = [
    {
      q: t('seoPages.pages.pouchCompostingBenefits.whatIsTheMoq'),
      a: t('seoPages.pages.pouchCompostingBenefits.forCustomDigitallyPrinted')
    },
    {
      q: t('seoPages.pages.pouchCompostingBenefits.doYouSupplyFree'),
      a: t('seoPages.pages.pouchCompostingBenefits.yesWeOfferFree')
    },
    {
      q: t('seoPages.pages.pouchCompostingBenefits.doYouSupportCustom'),
      a: t('seoPages.pages.pouchCompostingBenefits.yesWeSupportBespoke')
    },
    {
      q: t('seoPages.pages.pouchCompostingBenefits.whatIsTheProduction'),
      a: t('seoPages.pages.pouchCompostingBenefits.customDigitalOrdersRequire')
    },
    {
      q: t('seoPages.pages.pouchCompostingBenefits.whatFoodsafeAndEco'),
      a: t('seoPages.pages.pouchCompostingBenefits.ourMaterialsAreManufactured')
    },
    {
      q: t('seoPages.pages.pouchCompostingBenefits.whatInfoIsRequired'),
      a: t('seoPages.pages.pouchCompostingBenefits.simplySpecifyYourDesired')
    }
  ]

  return (
    <PouchLayout>
      <Helmet>
        <title>{t('seoPages.pages.pouchCompostingBenefits.metaTitle')}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={t('seoPages.pages.pouchCompostingBenefits.metaKeywords')} />
        <link rel="canonical" href="https://pouch.eco/composting/composting-benefits" />
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      {/* Hero Section */}
      <section className="relative pt-12 pb-24 border-b-4 border-black bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:20px_20px] bg-neutral-50 text-left">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          
          {/* Breadcrumb Bar */}
          <div className="flex flex-wrap items-center gap-2 font-['JetBrains_Mono'] text-xs font-black uppercase text-black mb-8">
            <Link to="/" className="hover:bg-[#D4FF00] px-1 py-0.5 border border-black transition">{t('seoPages.pages.pouchCompostingBenefits.home')}</Link>
            <span>/</span>
            <Link to="/learn" className="hover:bg-[#D4FF00] px-1 py-0.5 border border-black transition">{t('seoPages.pages.pouchCompostingBenefits.ecoacademy')}</Link>
            <span>/</span>
            <span className="bg-[#10b981] text-white px-1.5 py-0.5 border border-black">{t('seoPages.pages.pouchCompostingBenefits.compostingBenefits')}</span>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 z-10">
              <div className="flex flex-wrap gap-2">
                <span className="inline-block bg-[#FF00FF] text-white border-4 border-black px-4 py-2 transform rotate-1 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] font-['JetBrains_Mono'] font-black text-sm">
                  {t('seoPages.pages.pouchCompostingBenefits.circularity01')}
                </span>
                <span className="inline-block bg-black text-white border-4 border-black px-4 py-2 transform -rotate-1 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] font-['JetBrains_Mono'] font-black text-sm">
                  {t('seoPages.pages.pouchCompostingBenefits.brcgsCompliant')}
                </span>
              </div>

              <h1 className="font-black text-5xl md:text-7xl leading-[0.9] tracking-tighter uppercase">
                {t('seoPages.pages.pouchCompostingBenefits.emissionsCut')}<br/>
                {t('seoPages.pages.pouchCompostingBenefits.soilEnriched')}<br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4FF00] to-[#FF00FF] drop-shadow-[4px_4px_0px_rgba(0,0,0,1)]">{t('seoPages.pages.pouchCompostingBenefits.composted')}</span>
              </h1>

              <p className="font-['JetBrains_Mono'] font-bold text-lg md:text-xl max-w-md bg-white border-4 border-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] text-black">
                {t('seoPages.pages.pouchCompostingBenefits.gtDivertingFogoWaste')}<br/>
                {t('seoPages.pages.pouchCompostingBenefits.gtMethaneEmissionMitigation')}<br/>
                {t('seoPages.pages.pouchCompostingBenefits.gt20SoilMoisture')}<br/>
                {t('seoPages.pages.pouchCompostingBenefits.gtCertifiedOrganicSoil')}
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <NeoButton href="https://calendly.com/30-min-free-packaging-consultancy" variant="primary">
                  {t('seoPages.pages.pouchCompostingBenefits.bookFreeConsultation')}
                </NeoButton>
                <NeoButton variant="secondary" href="#benefits">
                  {t('seoPages.pages.pouchCompostingBenefits.exploreBenefits')}
                </NeoButton>
              </div>
            </div>

            {/* Hero Image Card */}
            <div className="relative">
              <div className="absolute inset-0 bg-neutral-400 translate-x-4 translate-y-4 border-4 border-black" />
              <ClickableImage 
                src="/imgs/composting/benefits/hero.webp" 
                alt={t('seoPages.pages.pouchCompostingBenefits.alt_enrichedCompostingSoilFor')} 
                className="relative z-10 border-4 border-black w-full shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Cards Section */}
      <section id="benefits" className="py-24 px-4 md:px-6 max-w-7xl mx-auto text-left">
        <div className="mb-16">
          <NeoBadge color="magenta">{t('seoPages.pages.pouchCompostingBenefits.theimpact')}</NeoBadge>
          <h2 className="font-black text-4xl md:text-6xl uppercase mt-4">{t('seoPages.pages.pouchCompostingBenefits.keyEnvironmentalBenefits')}</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <NeoCard color="bg-white">
            <Recycle className="w-12 h-12 mb-4 text-[#10b981]" />
            <h3 className="font-black text-3xl mb-4 uppercase">{t('seoPages.pages.pouchCompostingBenefits.zeroLandfillWaste')}</h3>
            <p className="font-['JetBrains_Mono'] text-sm leading-relaxed mb-6">
              {t('seoPages.pages.pouchCompostingBenefits.organicWasteIsDiverted')}
            </p>
            <NeoBadge color="bg-[#10b981] text-white">{t('seoPages.pages.pouchCompostingBenefits.wastediversion')}</NeoBadge>
          </NeoCard>

          <NeoCard color="bg-[#FF00FF]" className="text-white">
            <Zap className="w-12 h-12 mb-4 text-white" />
            <h3 className="font-black text-3xl mb-4 uppercase text-white">{t('seoPages.pages.pouchCompostingBenefits.methaneMitigation')}</h3>
            <p className="font-['JetBrains_Mono'] text-sm leading-relaxed mb-6 text-white">
              {t('seoPages.pages.pouchCompostingBenefits.aerobicCompostingAvoidsLandfill')}
            </p>
            <NeoBadge color="bg-[#D4FF00]">{t('seoPages.pages.pouchCompostingBenefits.climatepositive')}</NeoBadge>
          </NeoCard>

          <NeoCard color="bg-[#D4FF00]">
            <Droplets className="w-12 h-12 mb-4 text-black" />
            <h3 className="font-black text-3xl mb-4 uppercase">{t('seoPages.pages.pouchCompostingBenefits.soilMoistureYield')}</h3>
            <p className="font-['JetBrains_Mono'] text-sm leading-relaxed mb-6">
              {t('seoPages.pages.pouchCompostingBenefits.addingOrganicCompostEnriches')}
            </p>
            <NeoBadge color="bg-white">{t('seoPages.pages.pouchCompostingBenefits.regenerative')}</NeoBadge>
          </NeoCard>
        </div>
      </section>

      {/* Industrial vs Backyard Composting */}
      <section className="py-24 bg-white border-y-4 border-black text-left">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <NeoBadge color="cyan">{t('seoPages.pages.pouchCompostingBenefits.infrastructuremetrics')}</NeoBadge>
              <h2 className="font-black text-4xl md:text-6xl uppercase">{t('seoPages.pages.pouchCompostingBenefits.backyardVsIndustrialFacility')}</h2>
              <p className="font-['JetBrains_Mono'] text-sm text-neutral-600 leading-relaxed">
                {t('seoPages.pages.pouchCompostingBenefits.knowingTheOperationalScale')}
              </p>

              <div className="space-y-4">
                <div className="border-4 border-black p-4 bg-neutral-50">
                  <h4 className="font-black text-lg uppercase flex items-center gap-2">
                    {t('seoPages.pages.pouchCompostingBenefits.backyardCompostingHome')}
                  </h4>
                  <p className="text-xs font-['JetBrains_Mono'] text-neutral-600 mt-1">
                    {t('seoPages.pages.pouchCompostingBenefits.ambientTemperatureBinsProcesses')}
                  </p>
                </div>

                <div className="border-4 border-black p-4 bg-[#D4FF00]/10">
                  <h4 className="font-black text-lg uppercase flex items-center gap-2">
                    {t('seoPages.pages.pouchCompostingBenefits.industrialFacilitiesCommercial')}
                  </h4>
                  <p className="text-xs font-['JetBrains_Mono'] text-neutral-600 mt-1">
                    {t('seoPages.pages.pouchCompostingBenefits.controlledWindrowsExceeding140f')}
                  </p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-neutral-400 translate-x-4 translate-y-4 border-4 border-black" />
              <ClickableImage 
                src="/imgs/composting/benefits/a_achievepack_composting_locator_hero_9733153.webp" 
                alt={t('seoPages.pages.pouchCompostingBenefits.alt_globalCompostingFacilityMap')} 
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
              <NeoBadge color="magenta">{t('seoPages.pages.pouchCompostingBenefits.valuetranslation')}</NeoBadge>
              <h2 className="font-black text-5xl md:text-7xl uppercase mt-4">
                {t('seoPages.pages.pouchCompostingBenefits.circularitySpecsMatrix')}
              </h2>
            </div>
            <div className="font-['JetBrains_Mono'] text-sm font-bold bg-[#D4FF00] border-4 border-black px-4 py-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              {t('seoPages.pages.pouchCompostingBenefits.standardscompliance2026')}
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

      {/* Deep-Dive Rich Content */}
      <section className="py-24 bg-white text-left">
        <div className="max-w-4xl mx-auto px-4 md:px-6">
          <h2 className="text-4xl md:text-5xl font-black uppercase mb-8">
            {t('seoPages.pages.pouchCompostingBenefits.howCompostablePackagingEnriches')} <span className="text-[#FF00FF]">{t('seoPages.pages.pouchCompostingBenefits.ecosystems')}</span>
          </h2>

          <div className="prose prose-lg max-w-none font-['JetBrains_Mono'] text-gray-700 space-y-6">
            <p>
              {t('seoPages.pages.pouchCompostingBenefits.compostingOrganicMaterialIs')}
            </p>
            <p>
              {t('seoPages.pages.pouchCompostingBenefits.byUtilizingCertifiedCompostable')}
            </p>

            <div className="grid md:grid-cols-2 gap-6 my-8">
              <ClickableImage
                src="/imgs/composting/benefits/Educational cross-section.webp"
                alt={t('seoPages.pages.pouchCompostingBenefits.alt_educationalCrosssectionExplainingLandfill')}
                className="w-full h-80 object-cover border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]"
              />
              <ClickableImage
                src="/imgs/composting/benefits/Commercial composting facility illustration.webp"
                alt={t('seoPages.pages.pouchCompostingBenefits.alt_detailedSchematicOfA')}
                className="w-full h-80 object-cover border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]"
              />
            </div>

            <h3 className="text-2xl font-black uppercase text-black mt-12 mb-4">{t('seoPages.pages.pouchCompostingBenefits.supportingRegionalInfrastructure')}</h3>
            <p>
              {t('seoPages.pages.pouchCompostingBenefits.asCitiesWorldwideDeploy')}
            </p>
          </div>
        </div>
      </section>

      {/* 5 Common Problems Section */}
      <section className="py-24 bg-neutral-50 border-t-4 border-black text-left">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <NeoBadge color="cyan">Troubleshooting</NeoBadge>
              <h2 className="font-black text-4xl md:text-5xl uppercase">{transData.title}</h2>
              <div className="space-y-4 mt-8">
                {transData.problems.map((prob, idx) => (
                  <div key={idx} className="flex gap-4 items-start border-b-2 border-black/10 pb-4">
                    <Shield className="w-6 h-6 text-[#FF00FF] flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-black text-lg uppercase">{prob.title}</h4>
                      <p className="font-['JetBrains_Mono'] text-sm text-neutral-600 mt-1 leading-relaxed">{prob.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-[#FF00FF] translate-x-4 translate-y-4 border-4 border-black" />
              <ClickableImage 
                src="/imgs/knowledge/composting-benefits-pain-points.jpg" 
                alt="Composting Problems and Solutions" 
                className="relative z-10 border-4 border-black w-full shadow-2xl object-cover h-[600px]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stateful 6-Pillar FAQ Accordion */}
      <section className="py-24 bg-white border-t-4 border-black text-left">
        <div className="max-w-4xl mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <NeoBadge color="magenta">{t('seoPages.pages.pouchCompostingBenefits.expertfaq')}</NeoBadge>
            <h2 className="text-4xl md:text-5xl font-black uppercase mt-6 text-center">
              {t('seoPages.pages.pouchCompostingBenefits.procurementCircularityFaq')}
            </h2>
            <p className="font-['JetBrains_Mono'] text-sm text-neutral-600 mt-2 text-center">
              {t('seoPages.pages.pouchCompostingBenefits.clearHonestAnswersTo')}
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
          <NeoBadge color="bg-black text-white">{t('seoPages.pages.pouchCompostingBenefits.regenerativefuture')}</NeoBadge>
          <h2 className="font-black text-5xl md:text-7xl uppercase drop-shadow-[4px_4px_0px_rgba(0,0,0,1)]">
            {t('seoPages.pages.pouchCompostingBenefits.startYourCustomRun')}
          </h2>
          <p className="font-['JetBrains_Mono'] font-bold text-xl text-black">
            {t('seoPages.pages.pouchCompostingBenefits.certifiedCompostablePackagingWith')}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <NeoButton href="/sample" variant="dark">
              {t('seoPages.pages.pouchCompostingBenefits.requestFreeEcoSample')}
            </NeoButton>
            <NeoButton href="https://calendly.com/30-min-free-packaging-consultancy" variant="secondary" className="!bg-white !text-black border-black border-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              {t('seoPages.pages.pouchCompostingBenefits.consultPackagingEngineer')}
            </NeoButton>
          </div>

          <div className="pt-8 border-t border-black/20 text-xs font-['JetBrains_Mono'] text-black/70 max-w-xl mx-auto leading-relaxed">
            <strong>{t('seoPages.pages.pouchCompostingBenefits.seekingHighvolumeCommercialWholesale')}</strong><br/>
            {t('seoPages.pages.pouchCompostingBenefits.forHighvolumeRetailSupply')}{" "}
            <a 
              href="https://achievepack.com/composting/composting-benefits" 
              className="underline font-bold hover:text-black transition"
              target="_blank" 
              rel="noopener noreferrer"
            >
              {t('seoPages.pages.pouchCompostingBenefits.achievepackcomcompostingcompostingbenefits')}
            </a>
          </div>
        </div>
      </section>
    </PouchLayout>
  )
}
