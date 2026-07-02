import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { Recycle, Zap, CheckCircle, ArrowRight, Shield, Award, Droplets } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import PouchLayout from '../../../components/pouch/PouchLayout'
import { NeoButton, NeoCard, NeoBadge } from '../../../components/pouch/PouchUI'

type LocalTranslation = {
  problemsTitle: string;
  p1Title: string;
  p1Desc: string;
  p1Sol: string;
  p2Title: string;
  p2Desc: string;
  p2Sol: string;
  p3Title: string;
  p3Desc: string;
  p3Sol: string;
  p4Title: string;
  p4Desc: string;
  p4Sol: string;
  p5Title: string;
  p5Desc: string;
  p5Sol: string;
};

const translations: Record<string, LocalTranslation> = {
  en: {
    problemsTitle: "5 Common Recyclable Pouch Problems (And Solutions)",
    p1Title: "1. Poor Barrier Performance",
    p1Desc: "Mono-materials often lack oxygen and moisture barriers.",
    p1Sol: "Solution: High-barrier coatings like EVOH or AlOx.",
    p2Title: "2. Heat Sealing Issues",
    p2Desc: "Mono-PE can distort or melt unevenly during sealing.",
    p2Sol: "Solution: Co-extruded PE with optimized low-temperature seal layers.",
    p3Title: "3. Low Puncture Resistance",
    p3Desc: "Standard mono-material PE is flexible but weak.",
    p3Sol: "Solution: Using MDO-PE (Machine Direction Oriented PE) for increased tensile strength.",
    p4Title: "4. Subpar Printing Quality",
    p4Desc: "Direct printing on PE can look dull and stretch.",
    p4Sol: "Solution: Reverse printing on clear MDO-PE.",
    p5Title: "5. Slower Machine Speeds",
    p5Desc: "Flexible mono-materials can cause jams on packaging lines.",
    p5Sol: "Solution: Stiffer film structures and slip additives."
  },
  es: {
    problemsTitle: "5 Problemas Comunes de las Bolsas Reciclables (y Soluciones)",
    p1Title: "1. Rendimiento de barrera deficiente",
    p1Desc: "Los monomateriales suelen carecer de barreras contra el oxígeno y la humedad.",
    p1Sol: "Solución: Recubrimientos de alta barrera como EVOH o AlOx.",
    p2Title: "2. Problemas de sellado térmico",
    p2Desc: "El mono-PE puede distorsionarse o fundirse de forma desigual.",
    p2Sol: "Solución: PE coextruido con capas de sellado de baja temperatura.",
    p3Title: "3. Baja resistencia a la punción",
    p3Desc: "El mono-PE estándar es flexible pero débil.",
    p3Sol: "Solución: Uso de MDO-PE para mayor resistencia a la tracción.",
    p4Title: "4. Calidad de impresión inferior",
    p4Desc: "La impresión directa en PE puede verse opaca.",
    p4Sol: "Solución: Impresión inversa en MDO-PE transparente.",
    p5Title: "5. Velocidades de máquina más lentas",
    p5Desc: "Los materiales flexibles pueden causar atascos en las líneas.",
    p5Sol: "Solución: Estructuras de película más rígidas y aditivos de deslizamiento."
  },
  fr: {
    problemsTitle: "5 Problèmes Courants des Sachets Recyclables (et Solutions)",
    p1Title: "1. Mauvaise performance de barrière",
    p1Desc: "Les mono-matériaux manquent souvent de barrières contre l'oxygène et l'humidité.",
    p1Sol: "Solution : Revêtements haute barrière comme l'EVOH ou l'AlOx.",
    p2Title: "2. Problèmes de thermoscellage",
    p2Desc: "Le mono-PE peut se déformer lors du scellage.",
    p2Sol: "Solution : PE co-extrudé avec des couches de scellage à basse température.",
    p3Title: "3. Faible résistance à la perforation",
    p3Desc: "Le mono-PE standard est flexible mais faible.",
    p3Sol: "Solution : Utilisation de MDO-PE pour une résistance accrue à la traction.",
    p4Title: "4. Qualité d'impression médiocre",
    p4Desc: "L'impression directe sur PE peut paraître terne.",
    p4Sol: "Solution : Impression inversée sur MDO-PE transparent.",
    p5Title: "5. Vitesses de machine plus lentes",
    p5Desc: "Les matériaux flexibles peuvent provoquer des bourrages.",
    p5Sol: "Solution : Structures de films plus rigides et additifs de glissement."
  },
  'zh-TW': {
    problemsTitle: "可回收包裝袋的 5 個常見問題 (及解決方案)",
    p1Title: "1. 阻隔性能差",
    p1Desc: "單一材質通常缺乏氧氣和水分阻隔性。",
    p1Sol: "解決方案：使用 EVOH 或 AlOx 等高阻隔塗層。",
    p2Title: "2. 熱封問題",
    p2Desc: "單一 PE 在密封時容易變形或熔化不均。",
    p2Sol: "解決方案：使用優化的低溫熱封層的共擠 PE。",
    p3Title: "3. 耐穿刺性低",
    p3Desc: "標準單一 PE 柔韌但強度弱。",
    p3Sol: "解決方案：使用 MDO-PE (機器方向定向 PE) 提高拉伸強度。",
    p4Title: "4. 印刷品質不佳",
    p4Desc: "直接在 PE 上印刷會顯得暗淡。",
    p4Sol: "解決方案：在透明 MDO-PE 上進行反面印刷。",
    p5Title: "5. 機器速度較慢",
    p5Desc: "柔性單一材質容易在包裝線上導致卡機。",
    p5Sol: "解決方案：使用更硬的薄膜結構和滑動劑。"
  }
};

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
      <section className="py-24 px-4 md:px-6 bg-white border-t-4 border-black">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-black text-4xl md:text-5xl uppercase mb-12">{tLocal.problemsTitle}</h2>
            
            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="bg-[#00FFFF] p-3 h-fit border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                  <Shield size={24} className="text-black" />
                </div>
                <div>
                  <h4 className="font-black text-xl uppercase mb-1">{tLocal.p1Title}</h4>
                  <p className="font-['JetBrains_Mono'] text-sm mb-1">{tLocal.p1Desc}</p>
                  <p className="font-['JetBrains_Mono'] text-sm font-bold text-[#FF00FF]">{tLocal.p1Sol}</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="bg-[#D4FF00] p-3 h-fit border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                  <Zap size={24} className="text-black" />
                </div>
                <div>
                  <h4 className="font-black text-xl uppercase mb-1">{tLocal.p2Title}</h4>
                  <p className="font-['JetBrains_Mono'] text-sm mb-1">{tLocal.p2Desc}</p>
                  <p className="font-['JetBrains_Mono'] text-sm font-bold text-[#FF00FF]">{tLocal.p2Sol}</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="bg-[#FF00FF] p-3 h-fit border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                  <CheckCircle size={24} className="text-white" />
                </div>
                <div>
                  <h4 className="font-black text-xl uppercase mb-1">{tLocal.p3Title}</h4>
                  <p className="font-['JetBrains_Mono'] text-sm mb-1">{tLocal.p3Desc}</p>
                  <p className="font-['JetBrains_Mono'] text-sm font-bold text-[#00FFFF]">{tLocal.p3Sol}</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="bg-black p-3 h-fit border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                  <Award size={24} className="text-white" />
                </div>
                <div>
                  <h4 className="font-black text-xl uppercase mb-1">{tLocal.p4Title}</h4>
                  <p className="font-['JetBrains_Mono'] text-sm mb-1">{tLocal.p4Desc}</p>
                  <p className="font-['JetBrains_Mono'] text-sm font-bold text-[#00FFFF]">{tLocal.p4Sol}</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="bg-white p-3 h-fit border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                  <Droplets size={24} className="text-black" />
                </div>
                <div>
                  <h4 className="font-black text-xl uppercase mb-1">{tLocal.p5Title}</h4>
                  <p className="font-['JetBrains_Mono'] text-sm mb-1">{tLocal.p5Desc}</p>
                  <p className="font-['JetBrains_Mono'] text-sm font-bold text-[#FF00FF]">{tLocal.p5Sol}</p>
                </div>
              </div>
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
