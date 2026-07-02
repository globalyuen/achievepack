import { useTranslation } from 'react-i18next'
import DualDomainSEOHead from '../../../components/DualDomainSEOHead'
import { motion } from 'framer-motion'
import { Package, Leaf, Zap, CheckCircle, ArrowRight, Shield, Award, Snowflake, Thermometer, Droplets, Target, Sparkles } from 'lucide-react'
import PouchLayout from '../../../components/pouch/PouchLayout'
import { NeoButton, NeoCard, NeoBadge } from '../../../components/pouch/PouchUI'
import ClickableImage from '../../../components/ClickableImage'

const LOCAL_TRANSLATIONS: Record<string, any> = {
  en: {
    sectionTitle: "5 Common Frozen Food Packaging Problems (And Solutions)",
    p1Title: "Cold Flex Cracking",
    p1Desc: "Pouch material shatters at sub-zero temperatures.",
    p1Sol: "Specially formulated LLDPE/Nylon blends with high cold-flex resistance.",
    p2Title: "Sharp Edge Puncture",
    p2Desc: "Frozen food items with sharp edges pierce the bag.",
    p2Sol: "Multi-layer co-extruded structures and heavy-duty puncture-resistant films.",
    p3Title: "Freezer Burn",
    p3Desc: "Air penetration dehydrating the food.",
    p3Sol: "High-barrier EVOH or Metallized layers that block oxygen and moisture transfer.",
    p4Title: "Seal Failure",
    p4Desc: "Seals popping open due to temperature shock.",
    p4Sol: "Specialized sealant layers and robust active heat-sealing technologies for extreme cold.",
    p5Title: "Condensation & Delamination",
    p5Desc: "Moisture causing graphics to peel.",
    p5Sol: "Reverse printing trapped between layers with moisture-resistant adhesives."
  },
  es: {
    sectionTitle: "5 Problemas Comunes del Envasado de Alimentos Congelados (Y Soluciones)",
    p1Title: "Agrietamiento por flexión en frío",
    p1Desc: "El material de la bolsa se rompe a temperaturas bajo cero.",
    p1Sol: "Mezclas de LLDPE/Nylon especialmente formuladas con alta resistencia a la flexión en frío.",
    p2Title: "Perforación por bordes afilados",
    p2Desc: "Los alimentos congelados con bordes afilados perforan la bolsa.",
    p2Sol: "Estructuras coextruidas multicapa y películas resistentes a perforaciones de alta resistencia.",
    p3Title: "Quemadura por congelación",
    p3Desc: "Penetración de aire que deshidrata los alimentos.",
    p3Sol: "Capas de EVOH o metalizadas de alta barrera que bloquean la transferencia de oxígeno y humedad.",
    p4Title: "Fallo del sello",
    p4Desc: "Los sellos se abren debido al choque de temperatura.",
    p4Sol: "Capas de sellado especializadas y tecnologías robustas de termosellado activo para frío extremo.",
    p5Title: "Condensación y delaminación",
    p5Desc: "La humedad hace que los gráficos se despeguen.",
    p5Sol: "Impresión inversa atrapada entre capas con adhesivos resistentes a la humedad."
  },
  fr: {
    sectionTitle: "5 Problèmes Courants d'Emballage des Surgelés (Et Solutions)",
    p1Title: "Fissuration par flexion à froid",
    p1Desc: "Le matériau de la poche se brise à des températures inférieures à zéro.",
    p1Sol: "Mélanges LLDPE/Nylon spécialement formulés avec une haute résistance à la flexion à froid.",
    p2Title: "Perforation par des bords tranchants",
    p2Desc: "Les aliments surgelés aux bords tranchants percent le sac.",
    p2Sol: "Structures coextrudées multicouches et films très résistants aux perforations.",
    p3Title: "Brûlure de congélation",
    p3Desc: "La pénétration de l'air déshydrate les aliments.",
    p3Sol: "Couches EVOH ou métallisées à haute barrière qui bloquent le transfert d'oxygène et d'humidité.",
    p4Title: "Défaillance de l'étanchéité",
    p4Desc: "Les scellés s'ouvrent en raison du choc thermique.",
    p4Sol: "Couches de scellage spécialisées et technologies de thermoscellage actif robustes pour le froid extrême.",
    p5Title: "Condensation et délamination",
    p5Desc: "L'humidité provoque le décollement des graphiques.",
    p5Sol: "Impression inversée emprisonnée entre les couches avec des adhésifs résistants à l'humidité."
  },
  'zh-TW': {
    sectionTitle: "冷凍食品包裝的 5 個常見問題（及解決方案）",
    p1Title: "冷彎曲開裂",
    p1Desc: "袋子材料在零度以下的溫度會碎裂。",
    p1Sol: "特製的 LLDPE/尼龍混合物，具有高冷彎曲阻力。",
    p2Title: "銳角刺穿",
    p2Desc: "帶有銳角的冷凍食品刺破袋子。",
    p2Sol: "多層共擠結構和重型抗穿刺薄膜。",
    p3Title: "冷凍燒",
    p3Desc: "空氣滲透導致食物脫水。",
    p3Sol: "高阻隔 EVOH 或金屬化層，可阻擋氧氣和水分轉移。",
    p4Title: "密封失效",
    p4Desc: "由於溫度衝擊導致密封爆開。",
    p4Sol: "專用的密封層和適用於極端寒冷的強大主動熱封技術。",
    p5Title: "冷凝與脫層",
    p5Desc: "濕氣導致圖案剝落。",
    p5Sol: "夾在各層之間的反向印刷，並使用防潮粘合劑。"
  }
};

export default function PouchFrozenFoodPage() {
  const { t, i18n } = useTranslation()
  const locT = LOCAL_TRANSLATIONS[i18n.language] || LOCAL_TRANSLATIONS.en

  const floatAnim = {
    y: [0, -10, 0],
    transition: { duration: 2, repeat: Infinity, ease: "easeInOut" as const }
  }

  const title = t('seoPages.pages.pouchFrozenFood.metaTitle')
  const description = t('seoPages.pages.pouchFrozenFood.metaDescription')

  const PERFORMANCE_MATRIX = [
    { label: t('seoPages.pages.pouchFrozenFood.coldResistance'), value: '-40°C', unit: 'Min Temp', desc: t('seoPages.pages.pouchFrozenFood.maintainsFlexibilityInExtreme') },
    { label: t('seoPages.pages.pouchFrozenFood.sealStrength'), value: '> 25', unit: 'N/15mm', desc: t('seoPages.pages.pouchFrozenFood.heavydutyStructuralIntegrity') },
    { label: t('seoPages.pages.pouchFrozenFood.punctureResistance'), value: 'High', unit: 'Grade', desc: t('seoPages.pages.pouchFrozenFood.protectsAgainstSharpFrozen') },
    { label: t('seoPages.pages.pouchFrozenFood.recyclability'), value: '100%', unit: 'Mono-PE', desc: t('seoPages.pages.pouchFrozenFood.fullyRecyclableInStandard') }
  ]

  return (
    <PouchLayout>
      <DualDomainSEOHead
        title={title}
        description={description}
      />

      {/* Hero Section */}
      <section className="relative pt-12 pb-24 border-b-4 border-black bg-[radial-gradient(#00ffff_1px,transparent_1px)] [background-size:24px_24px] bg-cyan-50">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 z-10">
              <div className="inline-block bg-[#00FFFF] border-4 border-black px-4 py-2 transform -rotate-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <span className="font-['JetBrains_Mono'] font-bold text-sm text-black">{t('seoPages.pages.pouchFrozenFood.industrycodeFrozen05')}</span>
              </div>
              
              <h1 className="font-black text-5xl md:text-8xl leading-[0.9] tracking-tighter uppercase">
                {t('seoPages.pages.pouchFrozenFood.freeze')}<br/>
                {t('seoPages.pages.pouchFrozenFood.store')}<br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00FFFF] to-[#D4FF00] drop-shadow-[4px_4px_0px_rgba(0,0,0,1)] text-cyan-600">{t('seoPages.pages.pouchFrozenFood.protect')}</span>
              </h1>

              <p className="font-['JetBrains_Mono'] font-bold text-lg md:text-xl max-w-md bg-white border-2 border-black p-4 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] text-black">
                {t('seoPages.pages.pouchFrozenFood.gtSubzeroDurability')}<br/>
                {t('seoPages.pages.pouchFrozenFood.gtPunctureproofProtocol')}<br/>
                {t('seoPages.pages.pouchFrozenFood.gtRecyclableMonopeActive')}
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <NeoButton href="https://calendly.com/30-min-free-packaging-consultancy">{t('seoPages.pages.pouchFrozenFood.getQuote')}</NeoButton>
                <NeoButton variant="secondary" to="/sample">{t('seoPages.pages.pouchFrozenFood.requestArcticKit')}</NeoButton>
              </div>
            </div>

            <div className="relative">
              <NeoCard className="bg-[#00FFFF] relative z-10 rotate-2 !p-0 overflow-hidden group border-4 border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
                <div className="aspect-square relative">
                  <img 
                    src="/imgs/artifacts/frozen_food_hero.jpg" 
                    alt={t('seoPages.pages.pouchFrozenFood.alt_frozenFoodPackaging')} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <motion.div animate={floatAnim} className="absolute top-4 right-4 bg-white border-2 border-black px-2 py-1 font-['JetBrains_Mono'] text-xs font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] z-20 text-black">
                    {t('seoPages.pages.pouchFrozenFood.arcticgradev2')}
                  </motion.div>
                </div>
              </NeoCard>
              <div className="absolute top-10 -right-10 w-full h-full border-4 border-black bg-[#FF00FF] -z-0 rotate-6" />
            </div>
          </div>
        </div>
      </section>

      {/* Performance Section */}
      <section className="py-24 bg-white border-b-4 border-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="absolute inset-0 bg-cyan-400 translate-x-4 translate-y-4 border-4 border-black" />
              <ClickableImage 
                src="/imgs/seo-photos/a_achievepack_barrier_range_comparison_2896222.webp" 
                alt={t('seoPages.pages.pouchFrozenFood.alt_frozenFoodPackagingPerformance')} 
                className="relative z-10 border-4 border-black w-full shadow-2xl"
              />
            </div>
            <div>
              <NeoBadge color="cyan">{t('seoPages.pages.pouchFrozenFood.scienceofcold')}</NeoBadge>
              <h2 className="font-black text-5xl md:text-7xl mt-6 uppercase leading-tight italic">{t('seoPages.pages.pouchFrozenFood.frost')}<br/>{t('seoPages.pages.pouchFrozenFood.resistant')}</h2>
              <p className="mt-8 text-xl text-gray-600 font-['JetBrains_Mono'] leading-relaxed">
                {t('seoPages.pages.pouchFrozenFood.frozenProductsDemandSpecialized')}
              </p>
              <div className="mt-8 grid grid-cols-2 gap-4">
                {PERFORMANCE_MATRIX.map((p, i) => (
                  <div key={i} className="bg-white border-4 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                    <h4 className="font-black uppercase text-xs mb-1 text-cyan-700">{p.label}</h4>
                    <p className="text-xl font-black">{p.value} <span className="text-[10px] opacity-60 font-normal">{p.unit}</span></p>
                    <p className="text-[10px] font-bold opacity-60">{p.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Visual Product Gallery Section */}
      <section className="py-24 bg-cyan-50 border-b-4 border-black">
        <div className="max-w-7xl mx-auto px-6">
          <NeoBadge color="blue">{t('seoPages.pages.pouchFrozenFood.visualshowcase')}</NeoBadge>
          <h2 className="font-black text-5xl md:text-7xl mt-6 uppercase leading-tight italic mb-12">{t('seoPages.pages.pouchFrozenFood.arctic')}<br/>{t('seoPages.pages.pouchFrozenFood.solutions')}</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <ClickableImage 
              src="/imgs/store/pouch shape/stand-up.webp" 
              alt={t('seoPages.pages.pouchFrozenFood.alt_frozenFoodStandUp')} 
              className="w-full h-48 object-cover rounded-none border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
              caption={t('seoPages.pages.pouchFrozenFood.caption_standUpPouches')}
            />
            <ClickableImage 
              src="/imgs/store/pouch shape/flat-bottom.webp" 
              alt={t('seoPages.pages.pouchFrozenFood.alt_flatBottomFrozenFood')} 
              className="w-full h-48 object-cover rounded-none border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
              caption={t('seoPages.pages.pouchFrozenFood.caption_bulkFrozenBags')}
            />
            <ClickableImage 
              src="/imgs/artifacts/vacuum_pouch_frozen.jpg" 
              alt={t('seoPages.pages.pouchFrozenFood.alt_flatPouchForFrozen')} 
              className="w-full h-48 object-cover rounded-none border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
              caption={t('seoPages.pages.pouchFrozenFood.caption_vacuumPouches')}
            />
            <ClickableImage 
              src="/imgs/topics/dtc_packaging_1778212333445.png" 
              alt={t('seoPages.pages.pouchFrozenFood.alt_dtcFrozenFoodDelivery')} 
              className="w-full h-48 object-cover rounded-none border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
              caption={t('seoPages.pages.pouchFrozenFood.caption_dtcPackaging')}
            />
          </div>
        </div>
      </section>

      {/* Tech Section */}
      <section className="py-24 px-4 md:px-6 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="font-black text-5xl md:text-7xl uppercase leading-none text-black">{t('seoPages.pages.pouchFrozenFood.beyondThe')}<br/>{t('seoPages.pages.pouchFrozenFood.frostPoint')}</h2>
            <p className="font-['JetBrains_Mono'] text-lg text-neutral-600">
              {t('seoPages.pages.pouchFrozenFood.ourFrozenFoodPouches')}
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="border-4 border-black p-4 bg-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <h4 className="font-black uppercase mb-2 text-black text-xs">{t('seoPages.pages.pouchFrozenFood.burstTest')}</h4>
                <p className="text-xl font-black font-['JetBrains_Mono'] text-black">{t('seoPages.pages.pouchFrozenFood.pass')}</p>
                <p className="text-[10px] font-bold opacity-60">{t('seoPages.pages.pouchFrozenFood.highPressureResistance')}</p>
              </div>
              <div className="border-4 border-black p-4 bg-[#D4FF00] shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <h4 className="font-black uppercase mb-2 text-black text-xs">{t('seoPages.pages.pouchFrozenFood.sealIntegrity')}</h4>
                <p className="text-xl font-black font-['JetBrains_Mono'] text-black">{t('seoPages.pages.pouchFrozenFood.active')}</p>
                <p className="text-[10px] font-bold opacity-60">{t('seoPages.pages.pouchFrozenFood.zeroleakClosure')}</p>
              </div>
            </div>
          </div>
          <NeoCard color="bg-black" className="text-white">
            <h3 className="font-black text-3xl uppercase mb-8 text-[#D4FF00]">{t('seoPages.pages.pouchFrozenFood.frozenProtocol')}</h3>
            <div className="space-y-6">
              {[
                { name: t('seoPages.pages.pouchFrozenFood.nylonReinforced'), desc: t('seoPages.pages.pouchFrozenFood.superiorPunctureResistanceFor') },
                { name: t('seoPages.pages.pouchFrozenFood.monopeOption'), desc: t('seoPages.pages.pouchFrozenFood.100RecyclableEvenIn') },
                { name: t('seoPages.pages.pouchFrozenFood.frostproofMatte'), desc: t('seoPages.pages.pouchFrozenFood.keepsBrandingVisibleThrough') },
                { name: t('seoPages.pages.pouchFrozenFood.retortStable'), desc: t('seoPages.pages.pouchFrozenFood.safeForBoilinthebagApplications') }
              ].map(feature => (
                <div key={feature.name} className="flex gap-4">
                  <CheckCircle className="w-6 h-6 text-[#D4FF00] flex-shrink-0" />
                  <div>
                    <h4 className="font-black uppercase text-lg">{feature.name}</h4>
                    <p className="text-sm opacity-80 font-['JetBrains_Mono']">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </NeoCard>
        </div>
      </section>

      {/* Deep Dive SEO Content */}
      <section className="py-24 bg-white border-t-4 border-b-4 border-black">
        <div className="max-w-4xl mx-auto px-6">
          <NeoBadge color="cyan">{t('seoPages.pages.pouchFrozenFood.industrydeepdive')}</NeoBadge>
          <h2 className="text-4xl md:text-5xl font-['Space_Grotesk'] font-black uppercase mt-6 mb-8 italic">
            {t('seoPages.pages.pouchFrozenFood.theScienceOf')} <span className="text-cyan-600">{t('seoPages.pages.pouchFrozenFood.frozenFoodPackaging')}</span>
          </h2>
          
          <div className="prose prose-lg max-w-none font-['JetBrains_Mono'] text-gray-700 space-y-6">
            <p>
              {t('seoPages.pages.pouchFrozenFood.theFrozenFoodSector')}
            </p>
            <p>
              {t('seoPages.pages.pouchFrozenFood.atPouchecoOurArcticgrade')}
            </p>
            
            <ClickableImage 
              src="/imgs/seo-photos/a_achievepack_barrier_range_comparison_2896222.webp" 
              alt={t('seoPages.pages.pouchFrozenFood.alt_frozenFoodPackagingStructure')} 
              className="w-full h-80 object-cover border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] my-8"
              caption={t('seoPages.pages.pouchFrozenFood.caption_engineeredForExtremeCold')}
            />

            <h3 className="text-2xl font-['Space_Grotesk'] font-black uppercase text-black mt-12 mb-4">{t('seoPages.pages.pouchFrozenFood.combatingColdFlexFailure')}</h3>
            <p>
              {t('seoPages.pages.pouchFrozenFood.toCombatTheHarsh')} 
            </p>
            <p>
              {t('seoPages.pages.pouchFrozenFood.byMaintainingFlexibilityOur')}
            </p>

            <h3 className="text-2xl font-['Space_Grotesk'] font-black uppercase text-black mt-12 mb-4">{t('seoPages.pages.pouchFrozenFood.punctureResistanceForSharp')}</h3>
            <p>
              {t('seoPages.pages.pouchFrozenFood.frozenFoodsAreOften')}
            </p>
            <p>
              {t('seoPages.pages.pouchFrozenFood.toPreventPuncturingOur')}
            </p>

            <h3 className="text-2xl font-['Space_Grotesk'] font-black uppercase text-black mt-12 mb-4">{t('seoPages.pages.pouchFrozenFood.sustainablePathsInFrozen')}</h3>
            <p>
              {t('seoPages.pages.pouchFrozenFood.historicallyRecyclingFrozenFood')}
            </p>
            <p>
              {t('seoPages.pages.pouchFrozenFood.weAlsoOfferSpecialized')}
            </p>
          </div>
        </div>
      </section>

      {/* 5 Common Problems Section */}
      <section className="py-24 bg-cyan-50 border-t-4 border-b-4 border-black">
        <div className="max-w-6xl mx-auto px-6">
          <NeoBadge color="blue">Problem & Solution</NeoBadge>
          <h2 className="text-4xl md:text-5xl font-['Space_Grotesk'] font-black uppercase mt-6 mb-12">
            {locT.sectionTitle}
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              {[
                { title: locT.p1Title, desc: locT.p1Desc, sol: locT.p1Sol },
                { title: locT.p2Title, desc: locT.p2Desc, sol: locT.p2Sol },
                { title: locT.p3Title, desc: locT.p3Desc, sol: locT.p3Sol },
                { title: locT.p4Title, desc: locT.p4Desc, sol: locT.p4Sol },
                { title: locT.p5Title, desc: locT.p5Desc, sol: locT.p5Sol },
              ].map((item, i) => (
                <div key={i} className="bg-white border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] relative">
                  <div className="absolute -top-4 -left-4 w-8 h-8 bg-[#00FFFF] border-4 border-black flex items-center justify-center font-black">
                    {i + 1}
                  </div>
                  <h3 className="font-black text-xl uppercase mb-2">{item.title}</h3>
                  <div className="flex gap-3 mb-3">
                    <Snowflake className="w-5 h-5 text-red-500 shrink-0" />
                    <p className="font-['JetBrains_Mono'] text-sm text-gray-700">{item.desc}</p>
                  </div>
                  <div className="flex gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 shrink-0" />
                    <p className="font-['JetBrains_Mono'] text-sm font-bold text-black">{item.sol}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="sticky top-24">
              <ClickableImage 
                src="/imgs/knowledge/frozen-food-pain-points.jpg" 
                alt="Common Frozen Food Packaging Problems" 
                className="w-full h-auto border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-white border-b-4 border-black">
        <div className="max-w-4xl mx-auto px-6">
          <NeoBadge color="blue">{t('seoPages.pages.pouchFrozenFood.knowledgebase')}</NeoBadge>
          <h2 className="font-black text-5xl md:text-7xl mt-6 uppercase leading-tight italic mb-12">{t('seoPages.pages.pouchFrozenFood.frequentlyAsked')}<br/>{t('seoPages.pages.pouchFrozenFood.questions')}</h2>
          <div className="space-y-6">
            <NeoCard color="bg-gray-50">
              <h4 className="font-black text-xl mb-2">{t('seoPages.pages.pouchFrozenFood.canThesePouchesWithstand')}</h4>
              <p className="font-['JetBrains_Mono'] text-gray-600">{t('seoPages.pages.pouchFrozenFood.yesOurArcticgradeStructures')}</p>
            </NeoCard>
            <NeoCard color="bg-gray-50">
              <h4 className="font-black text-xl mb-2">{t('seoPages.pages.pouchFrozenFood.areTheyPunctureResistant')}</h4>
              <p className="font-['JetBrains_Mono'] text-gray-600">{t('seoPages.pages.pouchFrozenFood.yesWeOfferNylonreinforced')}</p>
            </NeoCard>
            <NeoCard color="bg-gray-50">
              <h4 className="font-black text-xl mb-2">{t('seoPages.pages.pouchFrozenFood.areYourFrozenPouches')}</h4>
              <p className="font-['JetBrains_Mono'] text-gray-600">{t('seoPages.pages.pouchFrozenFood.weOfferMonopeStructures')}</p>
            </NeoCard>
            <NeoCard color="bg-gray-50">
              <h4 className="font-black text-xl mb-2">{t('seoPages.pages.pouchFrozenFood.whatIsTheMoq')}</h4>
              <p className="font-['JetBrains_Mono'] text-gray-600">{t('seoPages.pages.pouchFrozenFood.ourMoqStartsAt')}</p>
            </NeoCard>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-cyan-600 text-white border-t-4 border-black">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-8">
          <NeoBadge color="lime">{t('seoPages.pages.pouchFrozenFood.arcticready')}</NeoBadge>
          <h2 className="font-black text-5xl md:text-8xl uppercase leading-none italic text-black">{t('seoPages.pages.pouchFrozenFood.coldChain')}<br/>{t('seoPages.pages.pouchFrozenFood.builtSolid')}</h2>
          <p className="font-['JetBrains_Mono'] font-bold text-xl opacity-80 max-w-2xl mx-auto text-black">
            {t('seoPages.pages.pouchFrozenFood.specializedFrozenFoodPackaging')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <NeoButton variant="primary" to="/sample" className="!bg-black !text-cyan-400">{t('seoPages.pages.pouchFrozenFood.orderArcticSample')}</NeoButton>
            <NeoButton variant="secondary" className="!border-black !text-black" href="https://calendly.com/30-min-free-packaging-consultancy">{t('seoPages.pages.pouchFrozenFood.consultation')}</NeoButton>
          </div>
        </div>
      </section>
      {/* Keep Reading */}
      <section className="py-16 px-4 bg-white border-t-4 border-black">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-['Space_Grotesk'] font-black text-3xl md:text-4xl uppercase mb-8">
            <span className="bg-[#00FFFF] px-2">{t('seoPages.pages.pouchFrozenFood.keepReading')}</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <a
              href="/industry/baby-food"
              className="group bg-[#F0F0F0] border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:-translate-x-1 hover:-translate-y-1 transition-all"
            >
              <div className="border-b-4 border-black overflow-hidden">
                <ClickableImage 
                  src="/imgs/artifacts/baby_food_hero.jpg"
                  alt={t('seoPages.pages.pouchFrozenFood.alt_babyFoodPackaging')}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform"
                />
              </div>
              <div className="p-4">
                <h3 className="font-['Space_Grotesk'] font-black text-lg uppercase group-hover:text-cyan-600 transition-colors">
                  {t('seoPages.pages.pouchFrozenFood.babyFood')}
                </h3>
                <p className="text-sm font-['JetBrains_Mono'] text-gray-600 mt-2 mb-3">
                  {t('seoPages.pages.pouchFrozenFood.safetyfirstLiquidPackaging')}
                </p>
                <div className="flex items-center gap-2 text-sm font-['JetBrains_Mono'] font-bold">
                  {t('seoPages.pages.pouchFrozenFood.readMore')}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </a>

            <a
              href="/industry/pet-food"
              className="group bg-[#F0F0F0] border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:-translate-x-1 hover:-translate-y-1 transition-all"
            >
              <div className="border-b-4 border-black overflow-hidden">
                <ClickableImage 
                  src="/imgs/artifacts/pet_food_pouch.jpg"
                  alt={t('seoPages.pages.pouchFrozenFood.alt_petFoodPouches')}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform"
                />
              </div>
              <div className="p-4">
                <h3 className="font-['Space_Grotesk'] font-black text-lg uppercase group-hover:text-cyan-600 transition-colors">
                  {t('seoPages.pages.pouchFrozenFood.petFood')}
                </h3>
                <p className="text-sm font-['JetBrains_Mono'] text-gray-600 mt-2 mb-3">
                  {t('seoPages.pages.pouchFrozenFood.highbarrierPetSolutions')}
                </p>
                <div className="flex items-center gap-2 text-sm font-['JetBrains_Mono'] font-bold">
                  {t('seoPages.pages.pouchFrozenFood.readMore')}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </a>

            <a
              href="/packaging/vacuum-pouches"
              className="group bg-[#F0F0F0] border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:-translate-x-1 hover:-translate-y-1 transition-all"
            >
              <div className="border-b-4 border-black overflow-hidden">
                <ClickableImage 
                  src="/imgs/artifacts/vacuum_pouch_frozen.jpg"
                  alt={t('seoPages.pages.pouchFrozenFood.alt_vacuumPouchesGuide')}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform"
                />
              </div>
              <div className="p-4">
                <h3 className="font-['Space_Grotesk'] font-black text-lg uppercase group-hover:text-cyan-600 transition-colors">
                  {t('seoPages.pages.pouchFrozenFood.vacuumPouches')}
                </h3>
                <p className="text-sm font-['JetBrains_Mono'] text-gray-600 mt-2 mb-3">
                  {t('seoPages.pages.pouchFrozenFood.technicalSpecsForFrozen')}
                </p>
                <div className="flex items-center gap-2 text-sm font-['JetBrains_Mono'] font-bold">
                  {t('seoPages.pages.pouchFrozenFood.readMore')}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </a>
          </div>
        </div>
      </section>
    </PouchLayout>
  )
}
