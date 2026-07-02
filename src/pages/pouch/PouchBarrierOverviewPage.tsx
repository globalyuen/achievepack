import { Shield, Clock, Target, Zap, Package, TrendingUp, HelpCircle, CheckCircle, X, AlertTriangle, Wrench, Wind, Droplets, Sun, Flame, ShieldAlert } from 'lucide-react'
import { motion } from 'framer-motion'
import { Helmet } from 'react-helmet-async'
import { useTranslation } from 'react-i18next'
import PouchLayout from '../../components/pouch/PouchLayout'

const translations: Record<string, any> = {
  en: {
    painPointsTitle: "5 Common Pouch Barrier Problems (And Solutions)",
    painPoints: [
      {
        title: "Oxygen Ingress & Premature Spoilage (OTR)",
        description: "Atmospheric oxygen permeates the film, causing oxidation, rancidity, and rapid microbial growth.",
        solution: "Incorporate high-barrier EVOH co-extrusions or pure Aluminum foil layers to drop OTR below 1 cc/m²/day."
      },
      {
        title: "Moisture Penetration & Product Clumping (MVTR)",
        description: "Ambient humidity enters the pouch, causing dry powders, spices, or dehydrated goods to harden and clump.",
        solution: "Deploy Metallized Polyester (VMPET) or high-density PE sealant layers to achieve near-zero MVTR."
      },
      {
        title: "UV & Light-Induced Quality Degradation",
        description: "Exposure to ultraviolet and visible light degrades vitamins, alters colors, and creates off-flavors in light-sensitive products.",
        solution: "Integrate fully opaque metallized films or high-density white pigmented barrier structures that block 100% of light."
      },
      {
        title: "Aroma Loss & Flavor Scalping",
        description: "Volatile aromatic compounds escape outward, while package polymers absorb flavor compounds, leaving products tasteless.",
        solution: "Utilize high-barrier BOPA (Nylon) or special aroma-preserving EVOH resins to lock in aroma and prevent flavor migration."
      },
      {
        title: "Flex Cracking & Puncture Failures",
        description: "Stress during transit creates micro-pinholes or cracks in aluminum foil, instantly destroying the barrier performance.",
        solution: "Reinforce laminate structures with BOPA (Nylon) for outstanding puncture resistance and flex-crack survival."
      }
    ]
  },
  es: {
    painPointsTitle: "5 Problemas Comunes de Barrera en Bolsas (Y Soluciones)",
    painPoints: [
      {
        title: "Ingreso de Oxígeno y Deterioro Prematuro (OTR)",
        description: "El oxígeno atmosférico penetra la película, provocando oxidación, rancidez y un rápido crecimiento microbiano.",
        solution: "Incorporar capas de EVOH de alta barrera coextruidas o papel de aluminio puro para reducir el OTR por debajo de 1 cc/m²/día."
      },
      {
        title: "Penetración de Humedad y Aglutinación (MVTR)",
        description: "La humedad ambiental entra en la bolsa, provocando que los polvos secos, especias o productos deshidratados se endurezcan y aglutinen.",
        solution: "Desplegar capas de Poliéster Metalizado (VMPET) o capas de sellado de PE de alta densidad para lograr un MVTR cercano a cero."
      },
      {
        title: "Degradación de Calidad Inducida por Luz y UV",
        description: "La exposición a la luz ultravioleta y visible degrada las vitaminas, altera los colores y crea sabores no deseados en productos sensibles a la luz.",
        solution: "Integrar películas metalizadas totalmente opacas o estructuras de barrera pigmentadas de blanco de alta densidad que bloqueen el 100% de la luz."
      },
      {
        title: "Pérdida de Aroma y Absorción de Sabor",
        description: "Los compuestos aromáticos volátiles se escapan hacia el exterior, mientras que los polímeros del envase absorben los compuestos del sabor, dejando los productos insípidos.",
        solution: "Utilizar resinas de BOPA (Nylon) de alta barrera o EVOH especiales para conservar el aroma para bloquear los olores y evitar la migración del sabor."
      },
      {
        title: "Agrietamiento por Flexión y Fallas por Perforación",
        description: "El estrés durante el tránsito crea micro-agujeros o grietas en el papel de aluminio, destruyendo instantáneamente el rendimiento de la barrera.",
        solution: "Reforzar las estructuras laminadas con BOPA (Nylon) para obtener una excelente resistencia a las perforaciones y durabilidad contra el agrietamiento por flexión."
      }
    ]
  },
  fr: {
    painPointsTitle: "5 Problèmes Courants de Barrière de Sachet (Et Solutions)",
    painPoints: [
      {
        title: "Pénétration d'Oxygène et Détérioration Prématurée (OTR)",
        description: "L'oxygène atmosphérique traverse le film, provoquant l'oxydation, le rancissement et une croissance microbienne rapide.",
        solution: "Intégrer des couches coextrudées d'EVOH haute barrière ou d'aluminium pur pour abaisser l'OTR sous 1 cc/m²/jour."
      },
      {
        title: "Pénétration d'Humidité et Agglomération (MVTR)",
        description: "L'humidité ambiante pénètre dans le sachet, provoquant le durcissement et l'agglomération des poudres sèches, épices ou produits déshydratés.",
        solution: "Déployer des couches de polyester métallisé (VMPET) ou de PE haute densité pour obtenir un MVTR proche de zéro."
      },
      {
        title: "Dégradation de la Qualité par la Lumière et les UV",
        description: "L'exposition aux UV et à la lumière visible dégrade les vitamines, altère les couleurs et crée des goûts indésirables dans les produits sensibles.",
        solution: "Intégrer des films métallisés totalement opaques ou des structures barrières pigmentées en blanc haute densité bloquant 100 % de la lumière."
      },
      {
        title: "Perte d'Arôme et Migration des Saveurs",
        description: "Les composés aromatiques volatils s'échappent vers l'extérieur, tandis que les polymères de l'emballage absorbent les saveurs, altérant le goût du produit.",
        solution: "Utiliser du BOPA (Nylon) haute barrière ou des résines EVOH spécifiques pour préserver les arômes et empêcher la migration des saveurs."
      },
      {
        title: "Fissures de Flexion et Ruptures par Perforation",
        description: "Les contraintes de transport créent des micro-perforations ou des fissures dans l'aluminium, détruisant instantanément la barrière.",
        solution: "Renforcer les structures stratifiées avec du BOPA (Nylon) pour une excellente résistance aux perforations et aux fissures de flexion."
      }
    ]
  },
  'zh-TW': {
    painPointsTitle: "5個常見的軟袋阻隔包裝問題 (與解決方案)",
    painPoints: [
      {
        title: "氧氣滲入與提早變質 (OTR)",
        description: "大氣中的氧氣穿透包裝膜，導致產品氧化、酸敗及微生物快速滋生。",
        solution: "採用高阻隔 EVOH 共擠出層或純鋁箔層，將透氧率 (OTR) 降至 1 cc/m²/day 以下。"
      },
      {
        title: "水分滲透與產品結塊 (MVTR)",
        description: "環境濕度進入袋內，導致乾燥粉末、香料或脫水食品受潮變硬並結塊。",
        solution: "使用鍍鋁聚酯薄膜 (VMPET) 或高密度 PE 密封層，實現趨近於零的透濕率 (MVTR)。"
      },
      {
        title: "光線與紫外線引起的品質降解",
        description: "暴露於紫外線和可見光下會破壞維生素、使顏色變異，並在光敏感產品中產生異味。",
        solution: "整合完全不透明的鍍鋁薄膜或高密度白色阻隔結構，阻擋 100% 的光線照射。"
      },
      {
        title: "香氣流失與風味吸附",
        description: "揮發性香氣化合物向外逸出，或包裝聚合物吸附風味化合物，導致產品失去原有風味。",
        solution: "利用高阻隔 BOPA (尼龍) 或特殊的保香性 EVOH 樹脂鎖住風味，防止香氣流失與遷移。"
      },
      {
        title: "折裂與穿刺損壞",
        description: "運輸過程中的物理應力會在鋁箔中產生微小針孔或裂紋，瞬間使阻隔性能失效。",
        solution: "使用 BOPA (雙向拉伸尼龍) 強化複合結構，提供卓越的抗穿刺性與抗折裂性。"
      }
    ]
  }
}

const sectionsForPouch = [
  { id: 'pouch-barrier-pain-points', translationKey: 'painPointsTitle' }
]

const sectionsForAchieve = [
  { id: 'pouch-barrier-pain-points', translationKey: 'painPointsTitle' }
]

// ============================================
// NEO-BRUTALIST COMPONENTS
// ============================================

import { NeoButton, NeoCard, NeoBadge } from '../../components/pouch/PouchUI'

// ============================================
// MAIN PAGE
// ============================================

export default function PouchBarrierOverviewPage() {
  const { t, i18n } = useTranslation()
  const currentLang = i18n.language || 'en'
  const localT = translations[currentLang as keyof typeof translations] || translations.en

  const BARRIER_LEVELS = [
    {
      id: 'low',
      name: t('pouchBarrierOverviewPage.compare.levels.low.name'),
      shelf: t('pouchBarrierOverviewPage.compare.levels.low.shelf'),
      otr: '50-100 cc/m²/day',
      mvtr: '10-20 g/m²/day',
      cost: '$',
      color: 'bg-green-100',
      borderColor: 'border-green-400',
      examples: t('pouchBarrierOverviewPage.compare.levels.low.examples', { returnObjects: true }) as string[] || [],
      icon: Zap,
      tagline: t('pouchBarrierOverviewPage.compare.levels.low.tagline'),
      desc: t('pouchBarrierOverviewPage.compare.levels.low.desc')
    },
    {
      id: 'medium',
      name: t('pouchBarrierOverviewPage.compare.levels.medium.name'),
      shelf: t('pouchBarrierOverviewPage.compare.levels.medium.shelf'),
      otr: '5-20 cc/m²/day',
      mvtr: '2-5 g/m²/day',
      cost: '$$',
      color: 'bg-blue-100',
      borderColor: 'border-blue-400',
      examples: t('pouchBarrierOverviewPage.compare.levels.medium.examples', { returnObjects: true }) as string[] || [],
      icon: Package,
      tagline: t('pouchBarrierOverviewPage.compare.levels.medium.tagline'),
      desc: t('pouchBarrierOverviewPage.compare.levels.medium.desc')
    },
    {
      id: 'high',
      name: t('pouchBarrierOverviewPage.compare.levels.high.name'),
      shelf: t('pouchBarrierOverviewPage.compare.levels.high.shelf'),
      otr: '<1 cc/m²/day',
      mvtr: '<1 g/m²/day',
      cost: '$$$',
      color: 'bg-purple-100',
      borderColor: 'border-purple-400',
      examples: t('pouchBarrierOverviewPage.compare.levels.high.examples', { returnObjects: true }) as string[] || [],
      icon: Shield,
      tagline: t('pouchBarrierOverviewPage.compare.levels.high.tagline'),
      desc: t('pouchBarrierOverviewPage.compare.levels.high.desc')
    }
  ]

  return (
    <PouchLayout>
      <Helmet>
        <title>{t('pouchBarrierOverviewPage.title')}</title>
        <meta name="description" content={t('pouchBarrierOverviewPage.metaDesc')} />
        <link rel="canonical" href="https://pouch.eco/barriers/overview" />
        <meta property="og:title" content={t('pouchBarrierOverviewPage.title')} />
        <meta property="og:description" content={t('pouchBarrierOverviewPage.metaDesc')} />
        <meta property="og:url" content="https://pouch.eco/barriers/overview" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={t('pouchBarrierOverviewPage.title')} />
        <meta name="twitter:description" content={t('pouchBarrierOverviewPage.metaDesc')} />
      </Helmet>

      {/* Hero */}
      <section className="pt-12 pb-16 px-4 bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:20px_20px]">
        <div className="max-w-5xl mx-auto">
          <div className="mb-6">
            <NeoBadge color="bg-[#D4FF00]">{t('pouchBarrierOverviewPage.hero.badge')}</NeoBadge>
          </div>

          <h1 className="font-black text-5xl md:text-7xl leading-none mb-6">
            {t('pouchBarrierOverviewPage.hero.title')}<br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">{t('pouchBarrierOverviewPage.hero.titleColored')}</span>
          </h1>

          <p className="text-2xl text-gray-700 mb-8 max-w-3xl">
            {t('pouchBarrierOverviewPage.hero.desc')}
          </p>

          <div className="flex gap-4 flex-wrap">
            <NeoButton href="https://calendly.com/30-min-free-packaging-consultancy">
              {t('pouchBarrierOverviewPage.hero.btnHelp')}
            </NeoButton>
            <NeoButton variant="secondary">{t('pouchBarrierOverviewPage.hero.btnQuiz')}</NeoButton>
          </div>
        </div>
      </section>

      {/* What is Barrier? */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-black text-4xl mb-8 uppercase">{t('pouchBarrierOverviewPage.whatIs.title')}</h2>
          
          <NeoCard color="bg-[#00FFFF]">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-black text-2xl mb-4">{t('pouchBarrierOverviewPage.whatIs.sunscreenTitle')}</h3>
                <p className="text-gray-700 mb-4">
                  {t('pouchBarrierOverviewPage.whatIs.sunscreenDesc')}
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li>🌬️ {t('pouchBarrierOverviewPage.whatIs.oxygen')}</li>
                  <li>💧 {t('pouchBarrierOverviewPage.whatIs.moisture')}</li>
                  <li>☀️ {t('pouchBarrierOverviewPage.whatIs.light')}</li>
                  <li>👃 {t('pouchBarrierOverviewPage.whatIs.odors')}</li>
                </ul>
              </div>
              <div className="bg-white border-2 border-black p-6">
                <h4 className="font-black text-lg mb-4">{t('pouchBarrierOverviewPage.whatIs.ruleTitle')}</h4>
                <p className="text-gray-700 mb-4">
                  <strong>{t('pouchBarrierOverviewPage.whatIs.ruleText')}</strong>
                </p>
                <p className="text-sm text-gray-600">
                  {t('pouchBarrierOverviewPage.whatIs.ruleSub')}
                </p>
              </div>
            </div>
          </NeoCard>
        </div>
      </section>

      {/* Comparison Grid */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-black text-4xl mb-12 uppercase text-center">{t('pouchBarrierOverviewPage.compare.title')}</h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            {BARRIER_LEVELS.map((level) => (
              <NeoCard key={level.id} color={level.color} className={`${level.borderColor}`}>
                <div className="flex items-start justify-between mb-4">
                  <level.icon className="w-10 h-10" />
                  <div className="font-mono font-black text-lg">{level.cost}</div>
                </div>

                <h3 className="font-black text-2xl mb-2">{level.name}</h3>
                <p className="text-sm text-gray-600 mb-4">{level.tagline}</p>
                
                <div className="bg-white border-2 border-black p-3 mb-4">
                  <p className="font-black text-3xl text-center">{level.shelf}</p>
                  <p className="text-xs text-center text-gray-600">{t('pouchBarrierOverviewPage.compare.typicalShelfLife')}</p>
                </div>

                <p className="text-sm text-gray-700 mb-4">{level.desc}</p>

                <div className="space-y-2 mb-4 font-mono text-xs">
                  <div>
                    <span className="font-bold">OTR:</span> {level.otr}
                  </div>
                  <div>
                    <span className="font-bold">MVTR:</span> {level.mvtr}
                  </div>
                </div>

                <div>
                  <p className="font-bold text-sm mb-2">{t('pouchBarrierOverviewPage.compare.bestFor')}</p>
                  <div className="space-y-1">
                    {level.examples.map((ex, idx) => (
                      <div key={idx} className="text-xs bg-white border border-black px-2 py-1">
                        {ex}
                      </div>
                    ))}
                  </div>
                </div>
              </NeoCard>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Decision Tool */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-black text-4xl mb-8 uppercase">{t('pouchBarrierOverviewPage.whichOne.title')}</h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <NeoCard color="bg-green-100" className="text-center">
              <TrendingUp className="w-12 h-12 mx-auto mb-4 text-green-600" />
              <h3 className="font-black text-xl mb-2">{t('pouchBarrierOverviewPage.whichOne.c1.title')}</h3>
              <p className="text-sm text-gray-700 mb-4">{t('pouchBarrierOverviewPage.whichOne.c1.desc')}</p>
              <NeoBadge color="bg-green-300">{t('pouchBarrierOverviewPage.whichOne.c1.badge')}</NeoBadge>
              <p className="text-xs text-gray-606 mt-3">{t('pouchBarrierOverviewPage.whichOne.c1.sub')}</p>
            </NeoCard>

            <NeoCard color="bg-blue-100" className="text-center">
              <Clock className="w-12 h-12 mx-auto mb-4 text-blue-600" />
              <h3 className="font-black text-xl mb-2">{t('pouchBarrierOverviewPage.whichOne.c2.title')}</h3>
              <p className="text-sm text-gray-700 mb-4">{t('pouchBarrierOverviewPage.whichOne.c2.desc')}</p>
              <NeoBadge color="bg-blue-300">{t('pouchBarrierOverviewPage.whichOne.c2.badge')}</NeoBadge>
              <p className="text-xs text-gray-600 mt-3">{t('pouchBarrierOverviewPage.whichOne.c2.sub')}</p>
            </NeoCard>

            <NeoCard color="bg-purple-100" className="text-center">
              <Shield className="w-12 h-12 mx-auto mb-4 text-purple-600" />
              <h3 className="font-black text-xl mb-2">{t('pouchBarrierOverviewPage.whichOne.c3.title')}</h3>
              <p className="text-sm text-gray-700 mb-4">{t('pouchBarrierOverviewPage.whichOne.c3.desc')}</p>
              <NeoBadge color="bg-purple-300">{t('pouchBarrierOverviewPage.whichOne.c3.badge')}</NeoBadge>
              <p className="text-xs text-gray-600 mt-3">{t('pouchBarrierOverviewPage.whichOne.c3.sub')}</p>
            </NeoCard>
          </div>
        </div>
      </section>

      {/* Real Examples */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-black text-4xl mb-12 uppercase">{t('pouchBarrierOverviewPage.examples.title')}</h2>
          
          <div className="space-y-6">
            <NeoCard className="bg-white">
              <div className="flex items-start gap-4">
                <div className="bg-green-100 border-2 border-black p-3 flex-shrink-0">
                  <span className="font-black text-xl">LOW</span>
                </div>
                <div>
                  <h3 className="font-black text-xl mb-2">{t('pouchBarrierOverviewPage.examples.l1.title')}</h3>
                  <p className="text-gray-700 mb-2">
                    {t('pouchBarrierOverviewPage.examples.l1.desc')}
                  </p>
                  <p className="text-sm text-gray-600">
                    <strong>{t('pouchBarrierOverviewPage.examples.l1.resTitle')}</strong> {t('pouchBarrierOverviewPage.examples.l1.resVal')}
                  </p>
                </div>
              </div>
            </NeoCard>

            <NeoCard className="bg-white">
              <div className="flex items-start gap-4">
                <div className="bg-blue-100 border-2 border-black p-3 flex-shrink-0">
                  <span className="font-black text-xl">MED</span>
                </div>
                <div>
                  <h3 className="font-black text-xl mb-2">{t('pouchBarrierOverviewPage.examples.l2.title')}</h3>
                  <p className="text-gray-700 mb-2">
                    {t('pouchBarrierOverviewPage.examples.l2.desc')}
                  </p>
                  <p className="text-sm text-gray-600">
                    <strong>{t('pouchBarrierOverviewPage.examples.l2.resTitle')}</strong> {t('pouchBarrierOverviewPage.examples.l2.resVal')}
                  </p>
                </div>
              </div>
            </NeoCard>

            <NeoCard className="bg-white">
              <div className="flex items-start gap-4">
                <div className="bg-purple-100 border-2 border-black p-3 flex-shrink-0">
                  <span className="font-black text-xl">HIGH</span>
                </div>
                <div>
                  <h3 className="font-black text-xl mb-2">{t('pouchBarrierOverviewPage.examples.l3.title')}</h3>
                  <p className="text-gray-700 mb-2">
                    {t('pouchBarrierOverviewPage.examples.l3.desc')}
                  </p>
                  <p className="text-sm text-gray-600">
                    <strong>{t('pouchBarrierOverviewPage.examples.l3.resTitle')}</strong> {t('pouchBarrierOverviewPage.examples.l3.resVal')}
                  </p>
                </div>
              </div>
            </NeoCard>
          </div>
        </div>
      </section>

      {/* 5 Common Problems */}
      <section id="pouch-barrier-pain-points" className="py-16 px-4 bg-white border-y-4 border-black">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-black text-4xl mb-12 uppercase text-center">{localT.painPointsTitle}</h2>
          
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div className="relative">
              <div className="absolute inset-0 bg-[#D4FF00] translate-x-4 translate-y-4 border-4 border-black" />
              <img 
                src="/imgs/knowledge/pouch-barrier-overview-pain-points.jpg" 
                alt="Pouch Barrier Problems and Solutions" 
                className="relative z-10 border-4 border-black w-full object-cover aspect-square"
              />
            </div>
            
            <div className="space-y-6">
              {localT.painPoints.map((prob: any, idx: number) => {
                const IconComponent = [Wind, Droplets, Sun, Flame, ShieldAlert][idx] || AlertTriangle
                return (
                  <div key={idx} className="bg-white border-4 border-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                    <h3 className="font-black text-xl uppercase mb-4 flex items-center gap-3">
                      <span className="bg-black text-white w-8 h-8 flex items-center justify-center font-mono text-xs">
                        <IconComponent className="w-4 h-4 text-[#D4FF00]" />
                      </span>
                      {prob.title}
                    </h3>
                    <div className="space-y-3 font-mono text-sm">
                      <div className="flex gap-3">
                        <AlertTriangle className="w-5 h-5 text-red-500 flex-shrink-0 mt-1" />
                        <p className="text-gray-700">{prob.description}</p>
                      </div>
                      <div className="flex gap-3">
                        <Wrench className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                        <p className="text-gray-900 font-bold">{prob.solution}</p>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Still Unsure? */}
      <section className="py-16 px-4 bg-[#D4FF00]">
        <div className="max-w-4xl mx-auto text-center">
          <NeoCard className="bg-white">
            <HelpCircle className="w-16 h-16 mx-auto mb-4" />
            <h2 className="font-black text-3xl mb-4">{t('pouchBarrierOverviewPage.unsure.title')}</h2>
            <p className="text-xl text-gray-700 mb-6">
              {t('pouchBarrierOverviewPage.unsure.desc')}
            </p>
            <div className="bg-gray-50 border-2 border-black p-4 mb-6 text-left max-w-md mx-auto">
              <h4 className="font-bold mb-2">{t('pouchBarrierOverviewPage.unsure.testHeading')}</h4>
              <ul className="text-sm space-y-1">
                <li>✓ {t('pouchBarrierOverviewPage.unsure.t1')}</li>
                <li>✓ {t('pouchBarrierOverviewPage.unsure.t2')}</li>
                <li>✓ {t('pouchBarrierOverviewPage.unsure.t3')}</li>
                <li>✓ {t('pouchBarrierOverviewPage.unsure.t4')}</li>
              </ul>
            </div>
            <NeoButton href="https://calendly.com/30-min-free-packaging-consultancy">
              {t('pouchBarrierOverviewPage.unsure.btn')}
            </NeoButton>
          </NeoCard>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-black text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-black text-4xl md:text-5xl mb-6 uppercase">
            {t('pouchBarrierOverviewPage.cta.title')}
          </h2>
          <p className="text-xl mb-8 text-gray-300">
            {t('pouchBarrierOverviewPage.cta.desc')}
          </p>
          <NeoButton href="https://calendly.com/30-min-free-packaging-consultancy">
            {t('pouchBarrierOverviewPage.cta.btn')}
          </NeoButton>
        </div>
      </section>
    </PouchLayout>
  )
}
