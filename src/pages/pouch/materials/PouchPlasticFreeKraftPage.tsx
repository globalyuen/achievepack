import React from 'react'
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { Leaf, Zap, CheckCircle, ArrowRight, Shield, Award, Droplets, Recycle, AlertTriangle, Sparkles, Globe, Target } from 'lucide-react'
import PouchLayout from '../../../components/pouch/PouchLayout'
import { NeoButton, NeoCard, NeoBadge } from '../../../components/pouch/PouchUI'

const translations = {
  en: {
    title: "5 Common Plastic-Free Kraft Problems (And Solutions)",
    problems: [
      {
        title: "Poor Barrier Properties",
        desc: "Kraft paper alone offers poor moisture and oxygen barriers, leading to product spoilage.",
        solution: "Apply a thin aqueous coating or metallized vacuum deposition (like ALOx) that maintains eco-friendliness while drastically improving the barrier."
      },
      {
        title: "Low Tear Resistance",
        desc: "Kraft paper is prone to tearing and puncturing during transit compared to traditional plastic films.",
        solution: "Utilize cross-laminated kraft paper structures or blend with bio-based polymers to enhance structural integrity and puncture resistance."
      },
      {
        title: "Heat Sealing Difficulties",
        desc: "Traditional kraft paper cannot be heat-sealed, making it hard to create airtight pouches.",
        solution: "Coat the inner layer with a compostable biopolymer (such as PBS or PLA) to enable secure and reliable heat-sealing."
      },
      {
        title: "Dull Print Quality",
        desc: "The porous nature of kraft paper absorbs ink, leading to washed-out or dull branding colors.",
        solution: "Employ UV printing techniques with eco-friendly inks or apply a specialized pre-coating layer to ensure vibrant and sharp print results."
      },
      {
        title: "Shorter Shelf Life",
        desc: "Products packaged in pure kraft often have a significantly shorter shelf life than those in plastic.",
        solution: "Engineer multi-layered compostable structures featuring high-barrier bio-coatings to match the shelf life of conventional plastics."
      }
    ]
  },
  es: {
    title: "5 problemas comunes del papel kraft sin plástico (y soluciones)",
    problems: [
      {
        title: "Propiedades de barrera deficientes",
        desc: "El papel kraft por sí solo ofrece poca barrera contra la humedad y el oxígeno, lo que provoca el deterioro del producto.",
        solution: "Aplicar un revestimiento acuoso fino o deposición al vacío metalizada (como ALOx) que mantiene el respeto por el medio ambiente mientras mejora drásticamente la barrera."
      },
      {
        title: "Baja resistencia al desgarro",
        desc: "El papel kraft es propenso a rasgarse y perforarse durante el tránsito en comparación con las películas plásticas tradicionales.",
        solution: "Utilizar estructuras de papel kraft laminado transversalmente o mezclar con polímeros de origen biológico para mejorar la integridad estructural y la resistencia a las perforaciones."
      },
      {
        title: "Dificultades de sellado por calor",
        desc: "El papel kraft tradicional no se puede sellar con calor, lo que dificulta la creación de bolsas herméticas.",
        solution: "Recubrir la capa interna con un biopolímero compostable (como PBS o PLA) para permitir un sellado por calor seguro y confiable."
      },
      {
        title: "Calidad de impresión opaca",
        desc: "La naturaleza porosa del papel kraft absorbe la tinta, lo que da lugar a colores de marca lavados u opacos.",
        solution: "Emplear técnicas de impresión UV con tintas ecológicas o aplicar una capa de prerrecubrimiento especializada para garantizar resultados de impresión vibrantes y nítidos."
      },
      {
        title: "Vida útil más corta",
        desc: "Los productos envasados en kraft puro a menudo tienen una vida útil significativamente más corta que los de plástico.",
        solution: "Diseñar estructuras compostables multicapa que cuenten con biorrevestimientos de alta barrera para igualar la vida útil de los plásticos convencionales."
      }
    ]
  },
  fr: {
    title: "5 problèmes courants du kraft sans plastique (et solutions)",
    problems: [
      {
        title: "Faibles propriétés de barrière",
        desc: "Le papier kraft seul offre de faibles barrières contre l'humidité et l'oxygène, entraînant la détérioration du produit.",
        solution: "Appliquer un fin revêtement aqueux ou une déposition sous vide métallisée (comme ALOx) qui maintient l'aspect écologique tout en améliorant considérablement la barrière."
      },
      {
        title: "Faible résistance à la déchirure",
        desc: "Le papier kraft est sujet aux déchirures et aux perforations pendant le transport par rapport aux films plastiques traditionnels.",
        solution: "Utiliser des structures en papier kraft à stratification croisée ou mélanger avec des polymères biosourcés pour améliorer l'intégrité structurelle et la résistance aux perforations."
      },
      {
        title: "Difficultés de thermoscellage",
        desc: "Le papier kraft traditionnel ne peut pas être thermoscellé, ce qui rend difficile la création de sachets hermétiques.",
        solution: "Enduire la couche interne d'un biopolymère compostable (comme le PBS ou le PLA) pour permettre un thermoscellage sûr et fiable."
      },
      {
        title: "Qualité d'impression terne",
        desc: "La nature poreuse du papier kraft absorbe l'encre, conduisant à des couleurs de marque délavées ou ternes.",
        solution: "Employer des techniques d'impression UV avec des encres écologiques ou appliquer une couche de pré-revêtement spécialisée pour garantir des résultats d'impression vibrants et nets."
      },
      {
        title: "Durée de conservation plus courte",
        desc: "Les produits emballés dans du kraft pur ont souvent une durée de conservation nettement plus courte que ceux dans du plastique.",
        solution: "Concevoir des structures compostables multicouches dotées de bio-revêtements à haute barrière pour égaler la durée de conservation des plastiques conventionnels."
      }
    ]
  },
  'zh-TW': {
    title: "5個常見的無塑牛皮紙問題（及解決方案）",
    problems: [
      {
        title: "阻隔性能差",
        desc: "單純的牛皮紙對水分和氧氣的阻隔性較差，容易導致產品變質。",
        solution: "採用極薄的水性塗層或真空鍍金屬（如 ALOx），在保持環保特性的同時大幅提升阻隔效果。"
      },
      {
        title: "抗撕裂性低",
        desc: "與傳統塑膠薄膜相比，牛皮紙在運輸過程中更容易破裂和穿刺。",
        solution: "使用交叉層壓牛皮紙結構，或與生物基聚合物混合，增強結構完整性和抗穿刺性。"
      },
      {
        title: "熱封困難",
        desc: "傳統牛皮紙無法熱封，難以製成氣密袋。",
        solution: "在內層塗上可堆肥的生物聚合物（如 PBS 或 PLA），實現安全可靠的熱封。"
      },
      {
        title: "印刷品質暗淡",
        desc: "牛皮紙的多孔特性會吸收油墨，導致品牌色彩顯得褪色或暗淡。",
        solution: "採用環保油墨的 UV 印刷技術，或塗上專用的預塗層，確保印刷效果鮮豔清晰。"
      },
      {
        title: "保存期限較短",
        desc: "純牛皮紙包裝的產品，其保存期限通常明顯短於塑膠包裝。",
        solution: "設計多層可堆肥結構，配備高阻隔生物塗層，使保存期限媲美傳統塑膠。"
      }
    ]
  }
};

export const sectionsForPouch = [
  { id: 'plastic-free-kraft-problems', translationKey: 'title' }
];

export const sectionsForAchieve = [
  { id: 'plastic-free-kraft-problems', translationKey: 'title' }
];

export default function PouchPlasticFreeKraftPage() {
  const { t, i18n } = useTranslation()
  const p = 'seoPages.pages.pouchPlasticFreeKraft'

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
        <link rel="canonical" href="https://pouch.eco/materials/plastic-free-kraft" />
        <meta name="keywords" content={t(`${p}.keywords`)} />
      </Helmet>

      {/* Hero Section */}
      <section className="relative pt-12 pb-24 border-b-4 border-black bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:20px_20px]">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 z-10">
              <div className="inline-block bg-black text-[#D4FF00] border-4 border-black px-4 py-2 transform -rotate-2 shadow-[4px_4px_0px_0px_rgba(212,255,0,1)]">
                <span className="font-['JetBrains_Mono'] font-bold text-sm">{t(`${p}.heroBadge`)}</span>
              </div>
              
              <h1 className="font-black text-5xl md:text-7xl leading-[0.9] tracking-tighter uppercase text-black">
                {t(`${p}.heroTitle1`)}<br/>{t(`${p}.heroTitle2`)}<br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-amber-500 drop-shadow-[4px_4px_0px_rgba(0,0,0,1)]">{t(`${p}.heroTitleHighlight`)}</span>
              </h1>

              <p className="font-['JetBrains_Mono'] font-bold text-lg md:text-xl max-w-md bg-white border-2 border-black p-4 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] text-black">
                {t(`${p}.heroDescription`)}
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <NeoButton href="https://calendly.com/30-min-free-packaging-consultancy">{t(`${p}.heroCta1`)}</NeoButton>
                <NeoButton variant="secondary">{t(`${p}.heroCta2`)}</NeoButton>
              </div>
            </div>

            <div className="relative">
              <NeoCard className="bg-amber-100 relative z-10 rotate-2 !p-0 overflow-hidden group border-4 border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
                <div className="aspect-square relative overflow-hidden">
                  <img 
                    src="/imgs/barrier/ads/a_kraft_high_max_4456348.webp" 
                    alt={t(`${p}.heroImageAlt`)} 
                    className="w-full h-full object-cover group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500"
                  />
                  <motion.div animate={floatAnim} className="absolute top-4 right-4 bg-white border-2 border-black px-2 py-1 font-['JetBrains_Mono'] text-xs font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] z-20 text-red-600">
                    {t(`${p}.heroBadge2`)}
                  </motion.div>
                </div>
              </NeoCard>
              <div className="absolute top-10 -right-10 w-full h-full border-4 border-black bg-[#D4FF00] -z-0 rotate-6" />
            </div>
          </div>
        </div>
      </section>

      {/* The Reality Check */}
      <section className="py-24 px-4 md:px-6 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <h2 className="font-black text-5xl md:text-6xl uppercase leading-none text-black">{t(`${p}.realityTitle1`)}<br/>{t(`${p}.realityTitle2`)}</h2>
            <div className="bg-white border-4 border-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
              <p className="font-['JetBrains_Mono'] text-lg leading-relaxed text-black">
                {t(`${p}.realityDesc`)}
              </p>
              <div className="mt-4 flex items-center gap-2 text-red-600 font-black uppercase">
                <AlertTriangle className="w-6 h-6" />
                <span>{t(`${p}.greenwashingBadge`)}</span>
              </div>
            </div>
          </div>
          
          <NeoCard color="bg-black" className="text-white">
            <h3 className="font-black text-3xl uppercase mb-8 text-[#D4FF00]">{t(`${p}.factsTitle`)}</h3>
            <div className="space-y-6">
              {[
                { title: t(`${p}.facts.fact1.title`), desc: t(`${p}.facts.fact1.desc`) },
                { title: t(`${p}.facts.fact2.title`), desc: t(`${p}.facts.fact2.desc`) },
                { title: t(`${p}.facts.fact3.title`), desc: t(`${p}.facts.fact3.desc`) },
                { title: t(`${p}.facts.fact4.title`), desc: t(`${p}.facts.fact4.desc`) },
                { title: t(`${p}.facts.fact5.title`), desc: t(`${p}.facts.fact5.desc`) }
              ].map((fact, idx) => (
                <div key={idx} className="flex gap-4 items-start border-l-2 border-[#D4FF00] pl-4">
                  <div>
                    <h4 className="font-black uppercase text-lg text-[#D4FF00]">{fact.title}</h4>
                    <p className="text-sm opacity-80 font-['JetBrains_Mono']">{fact.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </NeoCard>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-24 bg-[#D4FF00] border-y-4 border-black">
        <div className="max-w-7xl mx-auto px-4 md:px-6 text-black">
          <h2 className="font-black text-5xl md:text-6xl uppercase mb-12 text-center">{t(`${p}.tableTitle`)}</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-4 border-black font-['JetBrains_Mono'] font-bold">
              <thead className="bg-black text-white">
                <tr>
                  <th className="p-4 text-left uppercase">{t(`${p}.thType`)}</th>
                  <th className="p-4 text-center uppercase">{t(`${p}.thLining`)}</th>
                  <th className="p-4 text-center uppercase">{t(`${p}.thPlasticFree`)}</th>
                  <th className="p-4 text-center uppercase">{t(`${p}.thCompostable`)}</th>
                </tr>
              </thead>
              <tbody className="bg-white">
                <tr className="border-b-2 border-black">
                  <td className="p-4 uppercase">{t(`${p}.row1.type`)}</td>
                  <td className="p-4 text-center uppercase">{t(`${p}.row1.lining`)}</td>
                  <td className="p-4 text-center text-red-600">{t(`${p}.row1.plasticFree`)}</td>
                  <td className="p-4 text-center">{t(`${p}.row1.compostable`)}</td>
                </tr>
                <tr className="border-b-2 border-black bg-neutral-100">
                  <td className="p-4 uppercase">{t(`${p}.row2.type`)}</td>
                  <td className="p-4 text-center uppercase">{t(`${p}.row2.lining`)}</td>
                  <td className="p-4 text-center text-amber-600">{t(`${p}.row2.plasticFree`)}</td>
                  <td className="p-4 text-center">{t(`${p}.row2.compostable`)}</td>
                </tr>
                <tr>
                  <td className="p-4 uppercase">{t(`${p}.row3.type`)}</td>
                  <td className="p-4 text-center uppercase">{t(`${p}.row3.lining`)}</td>
                  <td className="p-4 text-center text-green-600">{t(`${p}.row3.compostable`)}</td>
                  <td className="p-4 text-center text-green-600">{t(`${p}.row3.compostable`)}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 5 Common Problems Section */}
      <section id="plastic-free-kraft-problems" className="py-24 px-4 md:px-6 max-w-7xl mx-auto">
        <div className="mb-12">
          <h2 className="font-black text-5xl md:text-6xl uppercase text-black">
            {(translations[i18n.language as keyof typeof translations] || translations.en).title}
          </h2>
        </div>
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-8">
            {((translations[i18n.language as keyof typeof translations] || translations.en).problems).map((prob, idx) => (
              <NeoCard key={idx} color="bg-white">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <AlertTriangle className="w-8 h-8 text-red-600" />
                  </div>
                  <div>
                    <h3 className="font-black text-xl uppercase mb-2">{prob.title}</h3>
                    <p className="font-['JetBrains_Mono'] text-sm text-neutral-600 mb-4">{prob.desc}</p>
                    <div className="bg-[#D4FF00] p-4 border-2 border-black">
                      <div className="flex gap-2 items-center mb-2">
                        <CheckCircle className="w-5 h-5 text-black" />
                        <span className="font-black uppercase text-sm">Solution</span>
                      </div>
                      <p className="font-['JetBrains_Mono'] text-sm font-bold">{prob.solution}</p>
                    </div>
                  </div>
                </div>
              </NeoCard>
            ))}
          </div>
          <div className="sticky top-24">
            <NeoCard className="!p-0 overflow-hidden border-4 border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
              <img 
                src="/imgs/knowledge/pouch-plastic-free-kraft-pain-points.jpg" 
                alt="Plastic-Free Kraft Pain Points" 
                className="w-full h-auto object-cover"
              />
            </NeoCard>
          </div>
        </div>
      </section>

      {/* AIEO Section */}
      <section className="py-24 px-4 md:px-6 max-w-7xl mx-auto text-black">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <NeoCard color="bg-white" className="border-dashed">
            <h3 className="font-black text-3xl uppercase mb-6 flex items-center gap-2">
              <Zap className="text-[#D4FF00] fill-black" />
              {t(`${p}.aiBadge`)}
            </h3>
            <p className="font-['JetBrains_Mono'] font-bold mb-4">{t(`${p}.aiIntro`)}</p>
            <div className="space-y-4">
              {(t(`${p}.aiQueries`, { returnObjects: true }) as string[]).map((query, idx) => (
                <div key={idx} className="bg-neutral-100 border-2 border-black p-3 text-sm italic font-['JetBrains_Mono']">
                   "{query}"
                </div>
              ))}
            </div>
          </NeoCard>
          <div className="space-y-6">
            <h2 className="font-black text-5xl md:text-6xl uppercase leading-none">{t(`${p}.futureTitle1`)}<br/>{t(`${p}.futureTitle2`)}</h2>
            <p className="font-['JetBrains_Mono'] text-lg text-neutral-600">
              {t(`${p}.futureDesc`)}
            </p>
            <div className="flex gap-4">
               <NeoBadge color="bg-black text-white">{t(`${p}.futureBadge1`)}</NeoBadge>
               <NeoBadge color="bg-[#D4FF00] text-black">{t(`${p}.futureBadge2`)}</NeoBadge>
               <NeoBadge color="bg-[#10b981] text-white">{t(`${p}.futureBadge3`)}</NeoBadge>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-black border-t-4 border-black text-[#D4FF00]">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-8">
          <h2 className="font-black text-5xl md:text-7xl uppercase text-white">{t(`${p}.ctaTitle1`)}<br/>{t(`${p}.ctaTitle2`)}</h2>
          <p className="font-['JetBrains_Mono'] font-bold text-xl text-white opacity-80">
            {t(`${p}.ctaDesc`)}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <NeoButton href="https://calendly.com/30-min-free-packaging-consultancy">{t(`${p}.ctaBtn1`)}</NeoButton>
            <NeoButton variant="secondary" className="!text-black">{t(`${p}.ctaBtn2`)}</NeoButton>
          </div>
        </div>
      </section>
    </PouchLayout>
  )
}
