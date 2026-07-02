import DualDomainSEOHead from '../../components/DualDomainSEOHead'
import { Package, Leaf, Truck, Zap, CheckCircle, Sparkles, AlertTriangle, ArrowRight, Droplets, Lock, Recycle, Hourglass, Palette } from 'lucide-react'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import PouchLayout from '../../components/pouch/PouchLayout'
import { getBaseUrl } from '../../utils/domain'

import { NeoButton, NeoCard, NeoBadge } from '../../components/pouch/PouchUI'

const problemIcons = [Droplets, Lock, Recycle, Hourglass, Palette]

export const sectionsForPouch = ["5 Common Flexible Pouch Problems (And Solutions)", "5 Common Pouch Solutions Problems (And Solutions)"]
export const sectionsForAchieve = ["5 Common Flexible Pouch Problems (And Solutions)", "5 Common Pouch Solutions Problems (And Solutions)"]


const translations: Record<string, any> = {
  en: {
    title: "5 Common Flexible Pouch Problems (And Solutions)",
    items: [
      { problem: "Low Barrier Properties (Moisture & Oxygen)", solution: "Multi-layer high-barrier coatings (ALOx, SiOx) or EVOH in mono-material structures." },
      { problem: "Poor Seal Strength / Leaking", solution: "Advanced heat-sealing technologies and customized sealing temperatures for bio-based resins." },
      { problem: "Lack of Recyclability in Multi-Layer Laminates", solution: "MDO-PE mono-material structures designed for standard recycling streams." },
      { problem: "Degradation of Compostable Materials on Shelf", solution: "Precision-engineered biodegradable layers with high-barrier metallized compostable films." },
      { problem: "Inconsistent Print Quality on Sustainable Substrates", solution: "Specialized eco-friendly surface treatments and water-based inks for vibrant adhesion." }
    ],
    pouchSolutionsTitle: "5 Common Pouch Solutions Problems (And Solutions)",
    pouchSolutionsItems: [
      { problem: "Barrier Integrity in Custom Shapes", solution: "Advanced multi-layer laminates with reinforced barrier coatings (ALOx/SiOx) that maintain integrity along die-cut perimeters." },
      { problem: "Thermal Sealing for High-Speed Packaging Lines", solution: "Precision-engineered heat-seal layers with wide thermal tolerance windows and optimized hot-tack strength." },
      { problem: "Puncture and Flex-Crack Resistance during Transit", solution: "Incorporating high-tensile nylon (BOPA) or specialized tough co-polymers in the laminate structure to absorb physical impacts." },
      { problem: "Degradation of Eco-Friendly Adhesive Layers", solution: "Chemically resistant, FDA-approved aliphatic polyurethanes and plant-derived crosslinkers that ensure strong interlayer bonding." },
      { problem: "Static Charge Interference in Powder Filling", solution: "Anti-static inner layers and conductive coatings integrated into the pouch film to prevent powder adhesion in the seal zone." }
    ]
  },
  es: {
    title: "5 problemas comunes de bolsas flexibles (y soluciones)",
    items: [
      { problem: "Propiedades de barrera bajas (humedad y oxígeno)", solution: "Recubrimientos multicapa de alta barrera (ALOx, SiOx) o EVOH en estructuras monomaterial." },
      { problem: "Poca resistencia del sello / Fugas", solution: "Tecnologías avanzadas de sellado térmico y temperaturas de sellado personalizadas para resinas biológicas." },
      { problem: "Falta de reciclabilidad en laminados multicapa", solution: "Estructuras monomaterial MDO-PE diseñadas para flujos de reciclaje estándar." },
      { problem: "Degradación de materiales compostables en el estante", solution: "Capas biodegradables diseñadas con precisión con películas compostables metalizadas de alta barrera." },
      { problem: "Calidad de impresión inconsistente en sustratos sostenibles", solution: "Tratamientos de superficie ecológicos especializados y tintas a base de agua para una adhesión vibrante." }
    ],
    pouchSolutionsTitle: "5 problemas comunes de soluciones de bolsas (y soluciones)",
    pouchSolutionsItems: [
      { problem: "Integridad de barrera en formas personalizadas", solution: "Laminados multicapa avanzados con recubrimientos de barrera reforzados (ALOx/SiOx) que mantienen la integridad a lo largo de los perímetros troquelados." },
      { problem: "Sellado térmico para líneas de envasado de alta velocidad", solution: "Capas de sellado térmico diseñadas con precisión con amplios rangos de tolerancia térmica y resistencia optimizada en caliente." },
      { problem: "Resistencia a pinchazos y agrietamiento por flexión durante el tránsito", solution: "Incorporación de nailon de alta resistencia a la tracción (BOPA) o copolímeros resistentes especializados en la estructura laminada para absorber impactos físicos." },
      { problem: "Degradación de capas adhesivas ecológicas", solution: "Poliuretanos alifáticos resistentes a los químicos aprobados por la FDA y reticulantes derivados de plantas que aseguran una fuerte unión entre capas." },
      { problem: "Interferencia de carga estática en el llenado de polvo", solution: "Capas internas antiestáticas y recubrimientos conductores integrados en la película de la bolsa para evitar la adhesión de polvo en la zona del sello." }
    ]
  },
  fr: {
    title: "5 problèmes courants liés aux sachets flexibles (et solutions)",
    items: [
      { problem: "Faibles propriétés barrières (humidité et oxygène)", solution: "Revêtements multicouches à haute barrière (ALOx, SiOx) ou EVOH dans des structures mono-matériaux." },
      { problem: "Faible résistance du scellage / Fuites", solution: "Technologies avancées de thermoscellage et températures de scellage personnalisées pour les résines biosourcées." },
      { problem: "Manque de recyclabilité dans les stratifiés multicouches", solution: "Structures mono-matériaux MDO-PE conçues pour les flux de recyclage standards." },
      { problem: "Dégradation des matériaux compostables en rayon", solution: "Couches biodégradables conçues avec précision avec des films compostables métallisés à haute barrière." },
      { problem: "Qualité d'impression irrégulière sur des substrats durables", solution: "Traitements de surface écologiques spécialisés et encres à base d'eau pour une adhérence éclatante." }
    ],
    pouchSolutionsTitle: "5 problèmes courants liés aux solutions de sachets (et solutions)",
    pouchSolutionsItems: [
      { problem: "Intégrité de la barrière dans les formes personnalisées", solution: "Stratifiés multicouches avancés avec des revêtements barrières renforcés (ALOx/SiOx) qui maintiennent l'intégrité le long des périmètres découpés." },
      { problem: "Thermoscellage pour les lignes d'emballage à grande vitesse", solution: "Couches de thermoscellage conçues avec précision avec de larges fenêtres de tolérance thermique et une force d'adhérence à chaud optimisée." },
      { problem: "Résistance à la perforation et aux craquelures dues à la flexion pendant le transport", solution: "Intégration de nylon haute résistance (BOPA) ou de copolymères robustes spécialisés dans la structure stratifiée pour absorber les impacts physiques." },
      { problem: "Dégradation des couches adhésives respectueuses de l'environnement", solution: "Polyuréthanes aliphatiques chimiquement résistants et approuvés par la FDA et agents de réticulation d'origine végétale pour assurer une liaison intercouche solide." },
      { problem: "Interférence de charge statique dans le remplissage de poudre", solution: "Couches internes antistatiques et revêtements conducteurs intégrés dans le film du sachet pour empêcher l'adhérence de la poudre dans la zone de scellage." }
    ]
  },
  'zh-TW': {
    title: "5 個常見的軟包裝袋問題 (與解決方案)",
    items: [
      { problem: "阻隔性差 (濕氣與氧氣)", solution: "在單一材質結構中使用多層高阻隔塗層 (ALOx, SiOx) 或 EVOH。" },
      { problem: "密封強度差 / 洩漏", solution: "採用先進的熱封技術，以及針對生物基樹脂定制的密封溫度。" },
      { problem: "多層複合材料缺乏可回收性", solution: "專為標準回收流程設計的 MDO-PE 單一材質結構。" },
      { problem: "可堆肥材料在貨架上過早降解", solution: "精密設計的生物降解層與高阻隔金屬化可堆肥薄膜。" },
      { problem: "在永續基材上的印刷品質不一致", solution: "採用專門的環保表面處理與水性油墨，實現鮮豔的附著效果。" }
    ],
    pouchSolutionsTitle: "5 個常見的包裝袋解決方案問題 (與解決方案)",
    pouchSolutionsItems: [
      { problem: "異形外觀的邊緣阻隔失效", solution: "採用先進的多層複合材料與強化阻隔塗層 (ALOx/SiOx)，確保模切邊緣處的完整防護。" },
      { problem: "高速包裝線上的熱封瓶頸", solution: "精密設計的熱封層具備寬廣的熱容差窗口與優化的熱黏強度，適配高速填充線。" },
      { problem: "運輸過程中的穿刺與耐折裂性差", solution: "在複合結構中引入高拉伸強度的尼龍 (BOPA) 或特製強韌共聚物，以吸收物理衝擊。" },
      { problem: "環保膠黏劑層降解失效", solution: "採用耐化學腐蝕、FDA 認證的脂肪族聚氨酯及植物源交聯劑，確保牢固的層間粘合。" },
      { problem: "粉末填充時的靜電干擾", solution: "將防靜電內層與導電塗層整合至包裝袋薄膜中，防止粉末粘附在封口區域，確保完美密封。" }
    ]
  }
}

export default function PouchSolutionsPage() {
  const { t, i18n } = useTranslation()
  const baseUrl = getBaseUrl()
  
  const currentLang = translations[i18n.language] || translations['en']

  const SOLUTIONS = [
    {
      id: 'compostable',
      icon: Leaf,
      color: 'bg-[#D4FF00]',
      image: '/imgs/seo-photos/a_compostable_materials_home_transformation_8840512.webp'
    },
    {
      id: 'recyclable',
      icon: Package,
      color: 'bg-[#00FFFF]',
      image: '/imgs/seo-photos/a_grs_mono_material_luxury_texture_1597149.webp'
    },
    {
      id: 'bio-based',
      icon: Sparkles,
      color: 'bg-[#FF00FF]',
      image: '/imgs/seo-photos/a_pcr_biobased_pouches_workspace_6547751.webp'
    }
  ]

  const USE_CASES = [
    { icon: '☕' },
    { icon: '🍪' },
    { icon: '🐾' },
    { icon: '💊' }
  ]

  return (
    <PouchLayout>
      <DualDomainSEOHead
        title={t('pouchSolutionsPage.meta.title')}
        description={t('pouchSolutionsPage.meta.description')}
      />

      {/* Hero Section with Video Background */}
      <section className="relative pt-12 pb-24 border-b-4 border-black overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0 w-full h-full">
          <video muted={true}
            autoPlay
            loop
            
            playsInline
            className="w-full h-full object-cover opacity-50"
            key="hero-video-solutions"
          >
            <source src="/video/pouch-eco-marketing-videos/Environmental.mp4" type="video/mp4" />
          </video>
          {/* Liquid Glass Effect Overlay */}
          <div className="absolute inset-0 backdrop-blur-[2px] bg-white/30" />
          {/* Pattern Overlay */}
          <div className="absolute inset-0 bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:20px_20px] opacity-80" />
        </div>

        <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
          <div className="text-center space-y-8">
            <div className="inline-block bg-black text-[#D4FF00] border-4 border-black px-4 py-2 transform rotate-1 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <span className="font-['JetBrains_Mono'] font-bold text-sm">{t('pouchSolutionsPage.hero.badge')}</span>
            </div>
            
            <h1 className="font-black text-6xl md:text-8xl leading-[0.9] tracking-tighter uppercase">
              {t('pouchSolutionsPage.hero.titleLine1')}<br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#22c55e] to-[#00FFFF] drop-shadow-[4px_4px_0px_rgba(0,0,0,1)]">{t('pouchSolutionsPage.hero.titleLine2')}</span>
            </h1>

            <div className="bg-white border-2 border-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] max-w-2xl mx-auto">
              <p className="font-['JetBrains_Mono'] font-bold text-lg md:text-xl">
                {t('pouchSolutionsPage.hero.terminalLine1')}<br/>
                {t('pouchSolutionsPage.hero.terminalLine2')}<br/>
                {t('pouchSolutionsPage.hero.terminalLine3')}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <NeoButton href="https://calendly.com/30-min-free-packaging-consultancy">
                {t('pouchSolutionsPage.hero.ctaConsultation')}
              </NeoButton>
              <NeoButton variant="secondary">{t('pouchSolutionsPage.hero.ctaMaterials')}</NeoButton>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-24 px-4 md:px-6 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <h2 className="font-black text-5xl md:text-7xl uppercase leading-none">
            {t('pouchSolutionsPage.solutions.title')}<br/>{t('pouchSolutionsPage.solutions.titleLine2')}
          </h2>
          <div className="font-['JetBrains_Mono'] text-sm font-bold bg-[#D4FF00] border-2 border-black px-4 py-2">
            {t('pouchSolutionsPage.solutions.badge')}
          </div>
        </div>

        <div className="grid gap-12">
          {SOLUTIONS.map((solution, index) => (
            <motion.div 
              key={solution.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 items-center`}
            >
              {/* Image Side */}
              <div className="w-full md:w-1/2">
                <NeoCard className={`!p-0 overflow-hidden aspect-square relative group ${solution.color}`}>
                  <img 
                    src={solution.image} 
                    alt={t(`pouchSolutionsPage.solutions.items.${index}.name`)}
                    className="w-full h-full object-cover mix-blend-multiply opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500"
                  />
                  <div className="absolute top-4 right-4 z-20">
                    <NeoBadge color="bg-black text-white">{t(`pouchSolutionsPage.solutions.items.${index}.name`)}</NeoBadge>
                  </div>
                </NeoCard>
              </div>

              {/* Content Side */}
              <div className="w-full md:w-1/2 space-y-6">
                <div className="flex items-center gap-4">
                  <div className={`w-16 h-16 border-4 border-black ${solution.color} flex items-center justify-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]`}>
                    <solution.icon className="w-8 h-8" />
                  </div>
                  <h3 className="font-black text-3xl md:text-5xl uppercase">{t(`pouchSolutionsPage.solutions.items.${index}.headline`)}</h3>
                </div>
                
                <p className="font-['Space_Grotesk'] text-xl leading-relaxed">
                  {t(`pouchSolutionsPage.solutions.items.${index}.description`)}
                </p>
                
                <ul className="space-y-2 font-['JetBrains_Mono'] text-sm">
                  {[0, 1, 2, 3].map(benefitIndex => (
                    <li key={benefitIndex} className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-[#22c55e]" /> {t(`pouchSolutionsPage.solutions.items.${index}.benefits.${benefitIndex}`)}
                    </li>
                  ))}
                </ul>

                <div className="pt-4">
                  <NeoButton className="text-sm" href="https://calendly.com/30-min-free-packaging-consultancy">
                    {t('pouchSolutionsPage.solutions.getQuote')}
                  </NeoButton>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-24 bg-black border-y-4 border-[#D4FF00]">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <h2 className="font-black text-5xl md:text-7xl uppercase text-white mb-16 text-center">
            {t('pouchSolutionsPage.useCases.title')}
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {USE_CASES.map((useCase, index) => (
              <NeoCard key={index} className="bg-white h-full">
                <div className="text-5xl mb-4">{useCase.icon}</div>
                <h3 className="font-black text-2xl mb-3 uppercase">{t(`pouchSolutionsPage.useCases.items.${index}.title`)}</h3>
                <p className="font-['Space_Grotesk'] text-lg mb-4 leading-relaxed">
                  {t(`pouchSolutionsPage.useCases.items.${index}.description`)}
                </p>
                <div className="font-['JetBrains_Mono'] text-xs border-t-2 border-black pt-4 mt-4">
                  {t('pouchSolutionsPage.useCases.moqLabel')} <span className="font-bold">{t(`pouchSolutionsPage.useCases.items.${index}.moq`)}</span>
                </div>
              </NeoCard>
            ))}
          </div>
        </div>
      </section>

      {/* Pain Points Section */}
      <section className="py-24 px-4 md:px-6 max-w-7xl mx-auto border-t-4 border-black">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="w-full md:w-1/2">
            <h2 className="font-black text-4xl md:text-6xl uppercase mb-8 leading-tight">
              {currentLang.title}
            </h2>
            <div className="space-y-6">
              {currentLang.items.map((item: any, idx: number) => {
                const IconComponent = problemIcons[idx] || AlertTriangle
                return (
                  <NeoCard key={idx} className="bg-white hover:-translate-y-1 transition-transform">
                    <div className="flex items-start gap-4">
                      <IconComponent className="w-6 h-6 text-[#FF00FF] shrink-0 mt-1" />
                      <div>
                        <h4 className="font-bold text-xl mb-2">{item.problem}</h4>
                        <div className="flex items-start gap-2 text-gray-700">
                          <ArrowRight className="w-5 h-5 text-[#22c55e] shrink-0 mt-0.5" />
                          <p className="font-['Space_Grotesk']">{item.solution}</p>
                        </div>
                      </div>
                    </div>
                  </NeoCard>
                )
              })}
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <NeoCard className="p-2 bg-[#00FFFF] shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
              <img 
                src="/imgs/knowledge/flexible-pouch-packaging-pain-points.jpg" 
                alt="Pouch Packaging Problems and Solutions" 
                className="w-full h-auto border-4 border-black object-cover"
              />
            </NeoCard>
          </div>
        </div>
      </section>

      {/* Pouch Solutions Pain Points Section */}
      <section className="py-24 px-4 md:px-6 max-w-7xl mx-auto border-t-4 border-black">
        <div className="flex flex-col md:flex-row-reverse gap-12 items-center">
          <div className="w-full md:w-1/2">
            <h2 className="font-black text-4xl md:text-6xl uppercase mb-8 leading-tight">
              {currentLang.pouchSolutionsTitle}
            </h2>
            <div className="space-y-6">
              {currentLang.pouchSolutionsItems.map((item: any, idx: number) => {
                const IconComponent = problemIcons[idx] || AlertTriangle
                return (
                  <NeoCard key={idx} className="bg-white hover:-translate-y-1 transition-transform">
                    <div className="flex items-start gap-4">
                      <IconComponent className="w-6 h-6 text-[#00FFFF] shrink-0 mt-1" />
                      <div>
                        <h4 className="font-bold text-xl mb-2">{item.problem}</h4>
                        <div className="flex items-start gap-2 text-gray-700">
                          <ArrowRight className="w-5 h-5 text-[#22c55e] shrink-0 mt-0.5" />
                          <p className="font-['Space_Grotesk']">{item.solution}</p>
                        </div>
                      </div>
                    </div>
                  </NeoCard>
                )
              })}
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <NeoCard className="p-2 bg-[#FF00FF] shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
              <img 
                src="/imgs/knowledge/pouch-solutions-pain-points.jpg" 
                alt="Pouch Solutions Problems and Solutions" 
                className="w-full h-auto border-4 border-black object-cover"
              />
            </NeoCard>
          </div>
        </div>
      </section>

      {/* Fast Facts Section */}
      <section className="py-24 px-4 md:px-6 max-w-5xl mx-auto">
        <NeoCard className="bg-[#FF00FF] text-center">
          <h2 className="font-black text-4xl mb-8 uppercase">{t('pouchSolutionsPage.fastFacts.title')}</h2>
          <div className="grid md:grid-cols-3 gap-8 font-['JetBrains_Mono'] font-bold text-lg">
            <div>
              <div className="text-5xl mb-2">{t('pouchSolutionsPage.fastFacts.stat1Value')}</div>
              <div>{t('pouchSolutionsPage.fastFacts.stat1Label')}</div>
            </div>
            <div>
              <div className="text-5xl mb-2">{t('pouchSolutionsPage.fastFacts.stat2Value')}</div>
              <div>{t('pouchSolutionsPage.fastFacts.stat2Label')}</div>
            </div>
            <div>
              <div className="text-5xl mb-2">{t('pouchSolutionsPage.fastFacts.stat3Value')}</div>
              <div>{t('pouchSolutionsPage.fastFacts.stat3Label')}</div>
            </div>
          </div>
        </NeoCard>
      </section>

    </PouchLayout>
  )
}

