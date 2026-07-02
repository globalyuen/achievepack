import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { Recycle, Zap, CheckCircle, ArrowRight, Shield, Award, Droplets } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import PouchLayout from '../../../components/pouch/PouchLayout'
import { NeoButton, NeoCard, NeoBadge } from '../../../components/pouch/PouchUI'

type LocalTranslation = {
  problemsTitle: string;
  problems: {
    title: string;
    description: string;
    solution: string;
  }[];
};

const translations: Record<string, LocalTranslation> = {
  en: {
    problemsTitle: "5 Common Recyclable Pouch Problems (And Solutions)",
    problems: [
      {
        title: "1. Poor Barrier Performance",
        description: "Mono-materials often lack oxygen and moisture barriers.",
        solution: "Solution: High-barrier coatings like EVOH or AlOx."
      },
      {
        title: "2. Heat Sealing Issues",
        description: "Mono-PE can distort or melt unevenly during sealing.",
        solution: "Solution: Co-extruded PE with optimized low-temperature seal layers."
      },
      {
        title: "3. Low Puncture Resistance",
        description: "Standard mono-material PE is flexible but weak.",
        solution: "Solution: Using MDO-PE (Machine Direction Oriented PE) for increased tensile strength."
      },
      {
        title: "4. Subpar Printing Quality",
        description: "Direct printing on PE can look dull and stretch.",
        solution: "Solution: Reverse printing on clear MDO-PE."
      },
      {
        title: "5. Slower Machine Speeds",
        description: "Flexible mono-materials can cause jams on packaging lines.",
        solution: "Solution: Stiffer film structures and slip additives."
      }
    ]
  },
  es: {
    problemsTitle: "5 Problemas Comunes de las Bolsas Reciclables (y Soluciones)",
    problems: [
      {
        title: "1. Rendimiento de barrera deficiente",
        description: "Los monomateriales suelen carecer de barreras contra el oxígeno y la humedad.",
        solution: "Solución: Recubrimientos de alta barrera como EVOH o AlOx."
      },
      {
        title: "2. Problemas de sellado térmico",
        description: "El mono-PE puede distorsionarse o fundirse de forma desigual.",
        solution: "Solución: PE coextruido con capas de sellado de baja temperatura."
      },
      {
        title: "3. Baja resistencia a la punción",
        description: "El mono-PE estándar es flexible pero débil.",
        solution: "Solución: Uso de MDO-PE para mayor resistencia a la tracción."
      },
      {
        title: "4. Calidad de impresión inferior",
        description: "La impresión directa en PE puede verse opaca.",
        solution: "Solución: Impresión inversa en MDO-PE transparente."
      },
      {
        title: "5. Velocidades de máquina más lentas",
        description: "Los materiales flexibles pueden causar atascos en las líneas.",
        solution: "Solución: Estructuras de película más rígidas y aditivos de deslizamiento."
      }
    ]
  },
  fr: {
    problemsTitle: "5 Problèmes Courants des Sachets Recyclables (et Solutions)",
    problems: [
      {
        title: "1. Mauvaise performance de barrière",
        description: "Les mono-matériaux manquent souvent de barrières contre l'oxygène et l'humidité.",
        solution: "Solution : Revêtements haute barrière comme l'EVOH ou l'AlOx."
      },
      {
        title: "2. Problèmes de thermoscellage",
        description: "Le mono-PE peut se déformer lors du scellage.",
        solution: "Solution : PE co-extrudé avec des couches de scellage à basse température."
      },
      {
        title: "3. Faible résistance à la perforation",
        description: "Le mono-PE standard est flexible mais faible.",
        solution: "Solution : Utilisation de MDO-PE pour une résistance accrue à la traction."
      },
      {
        title: "4. Qualité d'impression médiocre",
        description: "L'impression directe sur PE peut paraître terne.",
        solution: "Solution : Impression inversée sur MDO-PE transparent."
      },
      {
        title: "5. Vitesses de machine plus lentes",
        description: "Les matériaux flexibles peuvent provoquer des bourrages.",
        solution: "Solution : Structures de films plus rigides et additifs de glissement."
      }
    ]
  },
  'zh-TW': {
    problemsTitle: "可回收包裝袋的 5 個常見問題 (及解決方案)",
    problems: [
      {
        title: "1. 阻隔性能差",
        description: "單一材質通常缺乏氧氣和水分阻隔性。",
        solution: "解決方案：使用 EVOH 或 AlOx 等高阻隔塗層。"
      },
      {
        title: "2. 熱封問題",
        description: "單一 PE 在密封時容易變形或熔化不均。",
        solution: "解決方案：使用優化的低溫熱封層的共擠 PE。"
      },
      {
        title: "3. 耐穿刺性低",
        description: "標準單一 PE 柔韌但強度弱。",
        solution: "解決方案：使用 MDO-PE (機器方向定向 PE) 提高拉伸強度。"
      },
      {
        title: "4. 印刷品質不佳",
        description: "直接在 PE 上印刷會顯得暗淡。",
        solution: "解決方案：在透明 MDO-PE 上進行反面印刷。"
      },
      {
        title: "5. 機器速度較慢",
        description: "柔性單一材質容易在包裝線上導致卡機。",
        solution: "解決方案：使用更硬的薄膜結構和滑動劑。"
      }
    ]
  }
};

export const sectionsForPouch = [
  { id: 'recyclable-problems', translationKey: 'problemsTitle' }
];

export const sectionsForAchieve = [
  { id: 'recyclable-problems', translationKey: 'problemsTitle' }
];

export default function PouchRecyclablePage() {
  const { t, i18n } = useTranslation()
  const currentLang = i18n.language || 'en'
  const tLocal = translations[currentLang] || translations['en']
  const p = 'seoPages.pages.pouchRecyclable'

  const floatAnim = {
    y: [0, -10, 0],
    transition: { duration: 2, repeat: Infinity, ease: "easeInOut" as const }
  }

  const title = t(`${p}.title`)
  const description = t(`${p}.description`)

  return (
    <PouchLayout>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href="https://pouch.eco/materials/recyclable" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative pt-12 pb-24 border-b-4 border-black bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:20px_20px]">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 z-10">
              <div className="inline-block bg-[#00FFFF] text-black border-4 border-black px-4 py-2 transform -rotate-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <span className="font-['JetBrains_Mono'] font-bold text-sm">{t(`${p}.heroClass`)}</span>
              </div>
              
              <h1 className="font-black text-5xl md:text-7xl leading-[0.9] tracking-tighter uppercase">
                {t(`${p}.heroTitleClose`)}<br/>
                {t(`${p}.heroTitleThe`)}<br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00FFFF] to-[#FF00FF] drop-shadow-[4px_4px_0px_rgba(0,0,0,1)]">{t(`${p}.heroTitleLoop`)}</span>
              </h1>

              <p className="font-['JetBrains_Mono'] font-bold text-lg md:text-xl max-w-md bg-white border-2 border-black p-4 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] text-black">
                &gt; {t(`${p}.heroBullet1`)}<br/>
                &gt; {t(`${p}.heroBullet2`)}<br/>
                &gt; {t(`${p}.heroBullet3`)}
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <NeoButton href="https://calendly.com/30-min-free-packaging-consultancy">{t(`${p}.heroBtnExplore`)}</NeoButton>
                <NeoButton variant="secondary">{t(`${p}.heroBtnDownload`)}</NeoButton>
              </div>
            </div>

            <div className="relative">
              <NeoCard className="bg-[#00FFFF] relative z-10 rotate-2 !p-0 overflow-hidden group border-4 border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
                <div className="aspect-square relative overflow-hidden">
                  <img 
                    src="/imgs/pouch/materials/pouch_recycle_hero.png" 
                    alt={t(`${p}.heroImgAlt`)} 
                    className="w-full h-full object-cover group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500"
                  />
                  <motion.div animate={floatAnim} className="absolute top-4 right-4 bg-white border-2 border-black px-2 py-1 font-['JetBrains_Mono'] text-xs font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] z-20">
                    {t(`${p}.heroBadge`)}
                  </motion.div>
                </div>
              </NeoCard>
              <div className="absolute top-10 -right-10 w-full h-full border-4 border-black bg-[#FF00FF] -z-0 rotate-6" />
            </div>
          </div>
        </div>
      </section>

      {/* Science Section */}
      <section className="py-24 px-4 md:px-6 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          <NeoCard color="bg-white">
            <h3 className="font-black text-3xl mb-4 uppercase">{t(`${p}.card1Title`)}</h3>
            <p className="font-['JetBrains_Mono'] text-sm leading-relaxed mb-6">
              {t(`${p}.card1Desc`)}
            </p>
            <NeoBadge color="bg-[#00FFFF]">{t(`${p}.card1Badge`)}</NeoBadge>
          </NeoCard>

          <NeoCard color="bg-[#D4FF00]">
            <h3 className="font-black text-3xl mb-4 uppercase">{t(`${p}.card2Title`)}</h3>
            <p className="font-['JetBrains_Mono'] text-sm leading-relaxed mb-6">
              {t(`${p}.card2Desc`)}
            </p>
            <NeoBadge color="bg-[#FF00FF]">{t(`${p}.card2Badge`)}</NeoBadge>
          </NeoCard>

          <NeoCard color="bg-[#FF00FF]" className="text-white">
            <h3 className="font-black text-3xl mb-4 uppercase text-white">{t(`${p}.card3Title`)}</h3>
            <p className="font-['JetBrains_Mono'] text-sm leading-relaxed mb-6">
              {t(`${p}.card3Desc`)}
            </p>
            <NeoBadge color="bg-[#D4FF00]">{t(`${p}.card3Badge`)}</NeoBadge>
          </NeoCard>
        </div>
      </section>

      {/* 5 Common Problems Section */}
      <section id="recyclable-problems" className="py-24 px-4 md:px-6 bg-white border-t-4 border-black">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-black text-4xl md:text-5xl uppercase mb-12">{tLocal.problemsTitle}</h2>
            
            <div className="space-y-8">
              {tLocal.problems.map((prob, idx) => {
                const IconComponent = [Shield, Zap, CheckCircle, Award, Droplets][idx];
                const colors = [
                  { bg: 'bg-[#00FFFF]', text: 'text-black' },
                  { bg: 'bg-[#D4FF00]', text: 'text-black' },
                  { bg: 'bg-[#FF00FF]', text: 'text-white' },
                  { bg: 'bg-black', text: 'text-white' },
                  { bg: 'bg-white', text: 'text-black' }
                ][idx];
                const solColor = ['text-[#FF00FF]', 'text-[#FF00FF]', 'text-[#00FFFF]', 'text-[#00FFFF]', 'text-[#FF00FF]'][idx];

                return (
                  <div key={idx} className="flex gap-4">
                    <div className={`${colors.bg} p-3 h-fit border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]`}>
                      <IconComponent size={24} className={colors.text} />
                    </div>
                    <div>
                      <h4 className="font-black text-xl uppercase mb-1">{prob.title}</h4>
                      <p className="font-['JetBrains_Mono'] text-sm mb-1">{prob.description}</p>
                      <p className={`font-['JetBrains_Mono'] text-sm font-bold ${solColor}`}>{prob.solution}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          
          <div className="relative">
            <NeoCard className="bg-[#00FFFF] p-0 overflow-hidden border-4 border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] rotate-1 group">
              <div className="aspect-square relative overflow-hidden">
                <img 
                  src="/imgs/knowledge/recyclable-pouch-pain-points.jpg" 
                  alt="Recyclable Pouch Problems and Solutions" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
            </NeoCard>
            <div className="absolute top-8 -right-8 w-full h-full border-4 border-black bg-[#FF00FF] -z-10 rotate-3" />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-[#00FFFF] border-t-4 border-black">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-8">
          <h2 className="font-black text-5xl md:text-7xl uppercase">{t(`${p}.ctaTitle`)}</h2>
          <p className="font-['JetBrains_Mono'] font-bold text-xl">
            {t(`${p}.ctaDesc`)}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <NeoButton href="https://calendly.com/30-min-free-packaging-consultancy">{t(`${p}.ctaBtnConsult`)}</NeoButton>
            <NeoButton variant="dark">{t(`${p}.ctaBtnPrice`)}</NeoButton>
          </div>
        </div>
      </section>
    </PouchLayout>
  )
}
