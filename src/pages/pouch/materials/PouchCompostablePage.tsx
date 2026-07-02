import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { Leaf, Zap, CheckCircle, ArrowRight, Shield, Award, Droplets, Recycle, AlertTriangle } from 'lucide-react'
import PouchLayout from '../../../components/pouch/PouchLayout'
import { NeoButton, NeoCard, NeoBadge } from '../../../components/pouch/PouchUI'

const translations: Record<string, any> = {
  en: {
    problemsTitle: "5 Common Compostable Pouch Problems (And Solutions)",
    problems: [
      {
        title: "Low Barrier Properties",
        description: "Compostable materials often lack the oxygen and moisture barriers of traditional plastics.",
        solution: "We utilize advanced biopolymer coatings and high-barrier metallized compostable films (like ALOx/SiOx coated PLA) to match traditional barrier performance."
      },
      {
        title: "Poor Seal Strength",
        description: "Standard heat sealing can warp or fail on compostable films.",
        solution: "Our pouches feature specialized bio-based sealants with lower initiation temperatures and optimized heat seal layers for strong, consistent seals."
      },
      {
        title: "Premature Degradation / Short Shelf Life",
        description: "Products may compromise the structural integrity of the pouch over time.",
        solution: "We employ multi-layer lamination using adhesive technologies that maintain integrity on the shelf but break down reliably in industrial composting conditions."
      },
      {
        title: "Limited Printability & Aesthetics",
        description: "Achieving vibrant, premium branding can be difficult on eco-friendly films.",
        solution: "Through surface treatment optimizations (corona treatment) and compostable-certified inks, we deliver stunning, high-resolution graphics."
      },
      {
        title: "High Material Cost",
        description: "Sustainable packaging typically carries a premium price tag.",
        solution: "By optimizing gauge thickness (down-gauging) and leveraging economies of scale, we provide cost-effective solutions without sacrificing quality."
      }
    ]
  },
  es: {
    problemsTitle: "5 Problemas Comunes de las Bolsas Compostables (y Soluciones)",
    problems: [
      {
        title: "Bajas Propiedades de Barrera",
        description: "Los materiales compostables a menudo carecen de las barreras contra el oxígeno y la humedad de los plásticos tradicionales.",
        solution: "Utilizamos recubrimientos avanzados de biopolímeros y películas compostables metalizadas de alta barrera."
      },
      {
        title: "Poca Resistencia del Sello",
        description: "El sellado por calor estándar puede deformarse o fallar en películas compostables.",
        solution: "Nuestras bolsas cuentan con selladores especializados de base biológica con temperaturas de inicio más bajas."
      },
      {
        title: "Degradación Prematura / Vida Útil Corta",
        description: "Los productos pueden comprometer la integridad estructural de la bolsa con el tiempo.",
        solution: "Empleamos laminación multicapa utilizando tecnologías adhesivas que mantienen la integridad en el estante."
      },
      {
        title: "Impresión y Estética Limitadas",
        description: "Lograr una marca vibrante y premium puede ser difícil en películas ecológicas.",
        solution: "A través de optimizaciones de tratamiento de superficie y tintas certificadas compostables, ofrecemos gráficos de alta resolución."
      },
      {
        title: "Alto Costo del Material",
        description: "Los envases sostenibles suelen tener un precio superior.",
        solution: "Al optimizar el grosor del calibre y aprovechar las economías de escala, ofrecemos soluciones rentables."
      }
    ]
  },
  fr: {
    problemsTitle: "5 Problèmes Courants des Sachets Compostables (et Solutions)",
    problems: [
      {
        title: "Faibles Propriétés Barrières",
        description: "Les matériaux compostables manquent souvent des barrières contre l'oxygène et l'humidité des plastiques traditionnels.",
        solution: "Nous utilisons des revêtements biopolymères avancés et des films compostables métallisés à haute barrière."
      },
      {
        title: "Faible Résistance de Scellage",
        description: "Le thermoscellage standard peut se déformer ou échouer sur les films compostables.",
        solution: "Nos sachets sont dotés de scellants biosourcés spécialisés avec des températures d'initiation plus basses."
      },
      {
        title: "Dégradation Prématurée",
        description: "Les produits peuvent compromettre l'intégrité structurelle du sachet avec le temps.",
        solution: "Nous utilisons une stratification multicouche avec des adhésifs qui maintiennent l'intégrité en rayon."
      },
      {
        title: "Imprimabilité et Esthétique Limitées",
        description: "Obtenir une image de marque vibrante peut être difficile sur des films écologiques.",
        solution: "Grâce à des traitements de surface optimisés et des encres certifiées compostables, nous offrons des graphismes époustouflants."
      },
      {
        title: "Coût Matériel Élevé",
        description: "Les emballages durables ont généralement un prix plus élevé.",
        solution: "En optimisant l'épaisseur et en tirant parti des économies d'échelle, nous proposons des solutions rentables."
      }
    ]
  },
  'zh-TW': {
    problemsTitle: "5 個常見的可堆肥包裝袋問題（與解決方案）",
    problems: [
      {
        title: "阻隔性能低",
        description: "可堆肥材料通常缺乏傳統塑料的防氧氣和防潮屏障。",
        solution: "我們利用先進的生物聚合物塗層和高阻隔金屬化可堆肥薄膜來匹配傳統屏障性能。"
      },
      {
        title: "熱封強度差",
        description: "標準的熱封可能會在可堆肥薄膜上變形或失效。",
        solution: "我們的包裝袋採用專用的生物基密封劑，具有較低的起始溫度，確保密封牢固一致。"
      },
      {
        title: "過早降解 / 保質期短",
        description: "隨著時間的推移，產品可能會損害包裝袋的結構完整性。",
        solution: "我們採用多層複合技術和特定的黏合劑，在貨架上保持完整性，並在工業堆肥條件下可靠降解。"
      },
      {
        title: "印刷與美觀性受限",
        description: "在環保薄膜上實現鮮豔、優質的品牌視覺效果可能很困難。",
        solution: "透過表面處理優化和經認證的可堆肥油墨，我們提供令人驚豔的高解析度圖形。"
      },
      {
        title: "材料成本高",
        description: "可持續包裝通常價格較高。",
        solution: "透過優化厚度並利用規模經濟，我們在不犧牲品質的情況下提供具成本效益的解決方案。"
      }
    ]
  }
};

const sectionsForPouch = [
  { id: 'compostable-problems', translationKey: 'problemsTitle' }
];

const sectionsForAchieve = [
  { id: 'compostable-problems', translationKey: 'problemsTitle' }
];

export default function PouchCompostablePage() {
  const { t, i18n } = useTranslation()
  const p = 'seoPages.pages.pouchCompostable'
  const currentLang = i18n.language || 'en';
  const localT = translations[currentLang] || translations['en'];

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
        <link rel="canonical" href="https://pouch.eco/materials/compostable" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative pt-12 pb-24 border-b-4 border-black bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:20px_20px]">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 z-10">
              <div className="inline-block bg-[#14532d] text-[#D4FF00] border-4 border-black px-4 py-2 transform -rotate-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <span className="font-['JetBrains_Mono'] font-bold text-sm">{t(`${p}.heroBadge`)}</span>
              </div>
              
              <h1 className="font-black text-5xl md:text-7xl leading-[0.9] tracking-tighter uppercase">
                {t(`${p}.heroTitle1`)}<br/>{t(`${p}.heroTitle2`)}<br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-[#10b981] to-[#D4FF00] drop-shadow-[4px_4px_0px_rgba(0,0,0,1)]">{t(`${p}.heroTitleHighlight`)}</span>
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
              <NeoCard className="bg-[#10b981] relative z-10 rotate-2 !p-0 overflow-hidden group border-4 border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
                <div className="aspect-square relative overflow-hidden">
                  <img 
                    src="/imgs/pouch/materials/pouch_compost_hero.png" 
                    alt="Compostable Pouch" 
                    className="w-full h-full object-cover group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500"
                  />
                  <motion.div animate={floatAnim} className="absolute top-4 right-4 bg-white border-2 border-black px-2 py-1 font-['JetBrains_Mono'] text-xs font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] z-20">
                    {t(`${p}.bpiCertBadge`)}
                  </motion.div>
                </div>
              </NeoCard>
              <div className="absolute top-10 -right-10 w-full h-full border-4 border-black bg-[#D4FF00] -z-0 rotate-6" />
            </div>
          </div>
        </div>
      </section>

      {/* Science Section */}
      <section className="py-24 px-4 md:px-6 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="font-black text-5xl md:text-6xl uppercase leading-none">{t(`${p}.scienceTitle1`)}<br/>{t(`${p}.scienceTitle2`)}</h2>
            <p className="font-['JetBrains_Mono'] text-lg leading-relaxed text-neutral-600">
              {t(`${p}.scienceDesc`)}
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="border-4 border-black p-4 bg-white">
                <h4 className="font-black uppercase mb-2">{t(`${p}.homeCompostTitle`)}</h4>
                <p className="text-xs font-bold font-['JetBrains_Mono']">{t(`${p}.homeCompostDesc`)}</p>
              </div>
              <div className="border-4 border-black p-4 bg-[#D4FF00]">
                <h4 className="font-black uppercase mb-2">{t(`${p}.industrialCompostTitle`)}</h4>
                <p className="text-xs font-bold font-['JetBrains_Mono']">{t(`${p}.industrialCompostDesc`)}</p>
              </div>
            </div>
          </div>
          <NeoCard color="bg-black" className="text-white">
            <h3 className="font-black text-3xl uppercase mb-8 text-[#D4FF00]">{t(`${p}.certifiedBadge`)}</h3>
            <div className="space-y-6">
              {[
                { name: 'EN 13432', desc: t(`${p}.cert1Desc`) },
                { name: 'ASTM D6400', desc: t(`${p}.cert2Desc`) },
                { name: 'BPI CERTIFIED', desc: t(`${p}.cert3Desc`) },
                { name: 'OK COMPOST', desc: t(`${p}.cert4Desc`) }
              ].map(cert => (
                <div key={cert.name} className="flex gap-4">
                  <CheckCircle className="w-6 h-6 text-[#D4FF00] flex-shrink-0" />
                  <div>
                    <h4 className="font-black uppercase text-lg">{cert.name}</h4>
                    <p className="text-sm opacity-80 font-['JetBrains_Mono']">{cert.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </NeoCard>
        </div>
      </section>

      {/* Deep Dive SEO Content */}
      <section className="py-24 bg-white border-t-4 border-black">
        <div className="max-w-4xl mx-auto px-4 md:px-6">
          <h2 className="text-4xl md:text-5xl font-['Space_Grotesk'] font-black uppercase mb-8">
            {t(`${p}.guideTitle`)} <span className="text-[#10b981]">{t(`${p}.guideTitleHighlight`)}</span>
          </h2>
          
          <div className="prose prose-lg max-w-none font-['JetBrains_Mono'] text-gray-700 space-y-6">
            <p>
              {t(`${p}.guideDesc1`)}
            </p>
            
            <img 
              src="/imgs/4-infograhic/compost.webp" 
              alt={t(`${p}.guideImage1Alt`)} 
              className="w-full h-auto border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] my-8"
            />

            <h3 className="text-2xl font-['Space_Grotesk'] font-black uppercase text-black mt-12 mb-4">{t(`${p}.guideSection1Title`)}</h3>
            <p>
              {t(`${p}.guideSection1Paragraph1`)}
            </p>
            <p>
              {t(`${p}.guideSection1Paragraph2`)}
            </p>

            <h3 className="text-2xl font-['Space_Grotesk'] font-black uppercase text-black mt-12 mb-4">{t(`${p}.guideSection2Title`)}</h3>
            <p>
              {t(`${p}.guideSection2Paragraph1`)} 
            </p>
            
            <img 
              src="/imgs/blog/Sustainable-pet/a_sustainable_pet_food_packaging_hero_2601845.webp" 
              alt={t(`${p}.guideImage2Alt`)} 
              className="w-full h-80 object-cover border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] my-8"
            />

            <p>
              {t(`${p}.guideSection2Paragraph2`)}
            </p>

            <h3 className="text-2xl font-['Space_Grotesk'] font-black uppercase text-black mt-12 mb-4">{t(`${p}.guideSection3Title`)}</h3>
            <p>
              {t(`${p}.guideSection3Paragraph1`)}
            </p>
          </div>
        </div>
      </section>

      {/* 5 Common Problems Section */}
      <section className="py-24 bg-white border-t-4 border-black">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <h2 className="text-4xl md:text-5xl font-['Space_Grotesk'] font-black uppercase mb-12 text-center text-black">
            {localT.problemsTitle}
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              {localT.problems.map((prob: any, idx: number) => (
                <div key={idx} className="bg-gray-50 border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                  <div className="flex items-center gap-3 mb-3">
                    <AlertTriangle className="w-6 h-6 text-red-500 flex-shrink-0" />
                    <h3 className="font-black text-xl uppercase">{prob.title}</h3>
                  </div>
                  <p className="font-['JetBrains_Mono'] text-sm text-gray-700 mb-4">
                    <span className="font-bold text-red-500">Problem:</span> {prob.description}
                  </p>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#10b981] flex-shrink-0 mt-0.5" />
                    <p className="font-['JetBrains_Mono'] text-sm text-gray-700">
                      <span className="font-bold text-[#10b981]">Solution:</span> {prob.solution}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div className="relative">
              <img 
                src="/imgs/knowledge/compostable-pouches-pain-points.jpg" 
                alt="Compostable Pouches Engineering Solutions" 
                className="w-full h-auto border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] object-cover"
              />
              <div className="absolute top-4 -right-4 w-full h-full border-4 border-black bg-[#D4FF00] -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-gray-50 border-t-4 border-black">
        <div className="max-w-4xl mx-auto px-4 md:px-6">
          <h2 className="text-4xl md:text-5xl font-['Space_Grotesk'] font-black uppercase mb-12 text-center">
            {t(`${p}.faqTitle`)} <span className="text-[#10b981]">{t(`${p}.faqTitleHighlight`)}</span>
          </h2>

          <div className="space-y-6">
            {[
              { q: t(`${p}.faq.q1`), a: t(`${p}.faq.a1`) },
              { q: t(`${p}.faq.q2`), a: t(`${p}.faq.a2`) },
              { q: t(`${p}.faq.q3`), a: t(`${p}.faq.a3`) },
              { q: t(`${p}.faq.q4`), a: t(`${p}.faq.a4`) }
            ].map((faq, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-6 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
              >
                <h3 className="font-['Space_Grotesk'] font-black text-lg uppercase mb-3 flex items-start gap-3">
                  <span className="text-[#10b981] flex-shrink-0">Q:</span>
                  {faq.q}
                </h3>
                <p className="font-['JetBrains_Mono'] text-sm text-gray-700 pl-8">
                  <span className="font-bold text-[#10b981]">A:</span> {faq.a}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-[#14532d] border-t-4 border-black text-[#D4FF00]">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-8">
          <h2 className="font-black text-5xl md:text-7xl uppercase text-white">{t(`${p}.ctaTitle`)}</h2>
          <p className="font-['JetBrains_Mono'] font-bold text-xl text-white opacity-80">
            {t(`${p}.ctaDesc`)}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <NeoButton href="https://calendly.com/30-min-free-packaging-consultancy">{t(`${p}.ctaButton1`)}</NeoButton>
            <NeoButton variant="secondary" className="!text-black">{t(`${p}.ctaButton2`)}</NeoButton>
          </div>
        </div>
      </section>
    </PouchLayout>
  )
}
