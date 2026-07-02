import React from 'react'
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { Leaf, Package, CheckCircle, Award, Globe, Shield, Zap, Recycle, ArrowRight, BarChart3, Factory, AlertTriangle, Wrench } from 'lucide-react'
import PouchLayout from '../../../components/pouch/PouchLayout'
import { NeoButton, NeoCard, NeoBadge } from '../../../components/pouch/PouchUI'
import { getBaseUrl } from '../../../utils/domain'

const translations: Record<string, any> = {
  en: {
    sectionTitle: "5 Common Bio-PE Pouch Problems (And Solutions)",
    problems: [
      {
        title: "Clarity & Haze Issues",
        description: "Bio-PE can sometimes have lower clarity compared to traditional fossil-based PE, impacting product visibility.",
        solution: "Optimize the extrusion process and use a multi-layer structure where Bio-PE is the inner layer and a clear material like PET is the outer layer."
      },
      {
        title: "Narrow Heat Sealing Window",
        description: "The heat sealing temperature range for Bio-PE can be narrower compared to fossil PE, leading to inconsistent seals.",
        solution: "Implement precise temperature control and use specialized sealant layers (like Bio-PE blended with plastomers) to broaden the sealing window."
      },
      {
        title: "Inconsistent Coefficient of Friction (COF)",
        description: "Bio-PE films may exhibit slightly different COF, causing slippage or jamming on automated lines.",
        solution: "Incorporate specialized slip and anti-block additives during manufacturing to match traditional PE films."
      },
      {
        title: "Higher Material Costs",
        description: "Bio-PE can be more expensive than conventional PE, challenging cost-sensitive projects.",
        solution: "Use a hybrid structure where Bio-PE is placed strategically in the sealant layer to maintain eco-claims while managing costs."
      },
      {
        title: "Insufficient Barrier Properties",
        description: "Moisture and oxygen barrier properties of Bio-PE alone are not sufficient for sensitive products.",
        solution: "Laminate Bio-PE with high-barrier materials like EVOH, ALOX, or SIOX to ensure product freshness."
      }
    ]
  },
  es: {
    sectionTitle: "5 Problemas Comunes de las Bolsas Bio-PE (Y Soluciones)",
    problems: [
      {
        title: "Problemas de Claridad y Opacidad",
        description: "El Bio-PE a veces puede tener menor claridad en comparación con el PE tradicional de base fósil, lo que afecta la visibilidad del producto.",
        solution: "Optimice el proceso de extrusión y use una estructura multicapa donde el Bio-PE sea la capa interna y un material transparente como el PET sea la externa."
      },
      {
        title: "Ventana Estrecha de Sellado por Calor",
        description: "El rango de temperatura de sellado por calor para el Bio-PE puede ser más estrecho, lo que provoca sellos inconsistentes.",
        solution: "Implemente un control de temperatura preciso y use capas selladoras especializadas para ampliar la ventana de sellado."
      },
      {
        title: "Coeficiente de Fricción (COF) Inconsistente",
        description: "Las películas de Bio-PE pueden exhibir un COF ligeramente diferente, causando atascos en las líneas automáticas.",
        solution: "Incorpore aditivos especiales de deslizamiento y antibloqueo durante la fabricación para igualar a las películas tradicionales."
      },
      {
        title: "Mayores Costos de Materiales",
        description: "El Bio-PE puede ser más caro que el PE convencional, lo que representa un desafío para proyectos sensibles al costo.",
        solution: "Utilice una estructura híbrida donde el Bio-PE se coloca estratégicamente en la capa de sellado para gestionar los costos."
      },
      {
        title: "Propiedades de Barrera Insuficientes",
        description: "Las propiedades de barrera contra la humedad y el oxígeno del Bio-PE por sí solas no son suficientes para productos sensibles.",
        solution: "Lamine el Bio-PE con materiales de alta barrera como EVOH, ALOX o SIOX para garantizar la frescura del producto."
      }
    ]
  },
  fr: {
    sectionTitle: "5 Problèmes Courants des Sachets Bio-PE (Et Solutions)",
    problems: [
      {
        title: "Problèmes de Clarté et d'Opacité",
        description: "Le Bio-PE peut parfois avoir une clarté inférieure par rapport au PE traditionnel, ce qui affecte la visibilité du produit.",
        solution: "Optimisez le processus d'extrusion et utilisez une structure multicouche où le Bio-PE est la couche interne."
      },
      {
        title: "Fenêtre de Thermoscellage Étroite",
        description: "La plage de température de thermoscellage du Bio-PE peut être plus étroite, entraînant des scellages incohérents.",
        solution: "Mettez en œuvre un contrôle précis de la température et utilisez des couches de scellage spécialisées."
      },
      {
        title: "Coefficient de Frottement (COF) Inconstant",
        description: "Les films Bio-PE peuvent présenter un COF légèrement différent, provoquant des blocages sur les lignes automatisées.",
        solution: "Incorporez des additifs spéciaux de glissement et antiblocage lors de la fabrication."
      },
      {
        title: "Coûts de Matériaux Plus Élevés",
        description: "Le Bio-PE peut être plus cher que le PE conventionnel, ce qui représente un défi pour les projets sensibles aux coûts.",
        solution: "Utilisez une structure hybride où le Bio-PE est placé stratégiquement dans la couche de scellage."
      },
      {
        title: "Propriétés de Barrière Insuffisantes",
        description: "Les propriétés de barrière du Bio-PE seul ne sont pas suffisantes pour les produits sensibles.",
        solution: "Stratifiez le Bio-PE avec des matériaux à haute barrière comme l'EVOH, l'ALOX ou le SIOX."
      }
    ]
  },
  'zh-TW': {
    sectionTitle: "Bio-PE 包裝袋的 5 個常見問題 (及解決方案)",
    problems: [
      {
        title: "透明度與混濁度問題",
        description: "與傳統化石基 PE 相比，Bio-PE 有時透明度較低，會影響產品的可視性。",
        solution: "優化擠出工藝並使用多層結構，將 Bio-PE 作為內層，而 PET 等透明材料作為外層。"
      },
      {
        title: "熱封窗口較窄",
        description: "Bio-PE 的熱封溫度範圍可能較窄，導致封口不一致。",
        solution: "實施精確的溫度控制，並使用特殊的密封層（如與塑性體混合的 Bio-PE）以擴大封口窗口。"
      },
      {
        title: "摩擦係數 (COF) 不一致",
        description: "Bio-PE 薄膜可能表現出略有不同的 COF，導致自動化包裝線上出現打滑或卡機。",
        solution: "在製造過程中加入特殊的爽滑和抗粘連添加劑，以匹配傳統 PE 薄膜的 COF。"
      },
      {
        title: "較高的材料成本",
        description: "Bio-PE 可能比傳統 PE 更貴，對成本敏感的項目構成挑戰。",
        solution: "使用混合結構，策略性地將 Bio-PE 應用於熱封層，在管理成本的同時保持環保聲明。"
      },
      {
        title: "阻隔性能不足",
        description: "單純 Bio-PE 的防潮和阻氧性能不足以應對敏感產品。",
        solution: "將 Bio-PE 與 EVOH、ALOX 或 SIOX 等高阻隔材料複合，以確保產品的新鮮度。"
      }
    ]
  }
};

const sectionsForPouch = [
  { id: 'bio-pe-problems', translationKey: 'sectionTitle' }
];

const sectionsForAchieve = [
  { id: 'bio-pe-problems', translationKey: 'sectionTitle' }
];

const PouchBioPEPage: React.FC = () => {
  const { t, i18n } = useTranslation()
  const p = 'seoPages.pages.pouchBioPE'
  const currentLang = i18n.language || 'en';
  const localT = translations[currentLang] || translations['en'];

  const baseUrl = getBaseUrl()
  
  const PERFORMANCE_DATA = [
    { label: t(`${p}.performanceData.tensileStrength.label`), bio: t(`${p}.performanceData.tensileStrength.bio`), fossil: t(`${p}.performanceData.tensileStrength.fossil`), match: true },
    { label: t(`${p}.performanceData.moistureBarrier.label`), bio: t(`${p}.performanceData.moistureBarrier.bio`), fossil: t(`${p}.performanceData.moistureBarrier.fossil`), match: true },
    { label: t(`${p}.performanceData.heatSealability.label`), bio: t(`${p}.performanceData.heatSealability.bio`), fossil: t(`${p}.performanceData.heatSealability.fossil`), match: true },
    { label: t(`${p}.performanceData.foodSafety.label`), bio: t(`${p}.performanceData.foodSafety.bio`), fossil: t(`${p}.performanceData.foodSafety.fossil`), match: true }
  ]

  return (
    <PouchLayout>
      <Helmet>
        <title>{t(`${p}.title`)}</title>
        <meta name="description" content={t(`${p}.description`)} />
        <link rel="canonical" href={`${baseUrl}/materials/bio-pe`} />
        <meta name="keywords" content={t(`${p}.keywords`)} />
      </Helmet>

      {/* Hero Section */}
      <section className="relative pt-12 pb-24 border-b-4 border-black bg-[radial-gradient(#d4ff00_1px,transparent_1px)] [background-size:24px_24px] bg-lime-50">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <NeoBadge color="lime">{t(`${p}.heroBadge`)}</NeoBadge>
          <h1 className="mt-8 font-black text-6xl md:text-9xl leading-none uppercase text-black">{t(`${p}.heroTitle1`)}<br/>{t(`${p}.heroTitle2`)}</h1>
          <p className="mt-8 text-xl md:text-2xl font-bold font-['JetBrains_Mono'] text-gray-800 max-w-3xl mx-auto bg-white border-4 border-black p-6 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
            {t(`${p}.heroDescription`)}
          </p>
          <div className="mt-12 flex flex-wrap justify-center gap-6">
            <NeoButton variant="primary" to="/sample">{t(`${p}.heroCta1`)}</NeoButton>
            <NeoButton variant="secondary" to="/products">{t(`${p}.heroCta2`)}</NeoButton>
          </div>
        </div>
      </section>

      {/* Tech Overview Section */}
      <section className="py-24 bg-white border-b-4 border-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="absolute inset-0 bg-[#D4FF00] translate-x-4 translate-y-4 border-4 border-black" />
              <img 
                src="/imgs/4-infograhic/Bio-PE.webp" 
                alt="Bio-PE Lifecycle" 
                className="relative z-10 border-4 border-black w-full"
              />
            </div>
            <div>
              <NeoBadge color="cyan">{t(`${p}.lifecycleBadge`)}</NeoBadge>
              <h2 className="font-black text-5xl md:text-7xl uppercase mt-6 leading-tight">{t(`${p}.lifecycleTitle1`)}<br/>{t(`${p}.lifecycleTitle2`)}<br/>{t(`${p}.lifecycleTitle3`)}</h2>
              <p className="mt-8 text-xl text-gray-600 font-['JetBrains_Mono'] leading-relaxed">
                {t(`${p}.lifecycleDescription`)}
              </p>
              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="bg-white border-4 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                  <BarChart3 className="text-green-600 w-8 h-8 mb-2" />
                  <h4 className="font-black uppercase text-xs">{t(`${p}.lifecycleMetric1Label`)}</h4>
                  <p className="text-[10px] font-bold">{t(`${p}.lifecycleMetric1Value`)}</p>
                </div>
                <div className="bg-white border-4 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                  <Globe className="text-blue-600 w-8 h-8 mb-2" />
                  <h4 className="font-black uppercase text-xs">{t(`${p}.lifecycleMetric2Label`)}</h4>
                  <p className="text-[10px] font-bold">{t(`${p}.lifecycleMetric2Value`)}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Comparison */}
      <section className="py-24 bg-black text-white border-b-4 border-black">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-black text-5xl md:text-7xl uppercase mb-16 text-center text-[#D4FF00]">{t(`${p}.comparisonTitle`)}</h2>
          <p className="text-center font-['JetBrains_Mono'] mb-12 text-xl opacity-80">{t(`${p}.comparisonSubtitle`)}</p>
          <div className="overflow-x-auto border-4 border-white bg-black">
            <table className="w-full font-['JetBrains_Mono'] text-sm">
              <thead className="bg-white text-black border-b-4 border-black">
                <tr>
                  <th className="p-6 text-left">{t(`${p}.tableHeaderProperty`)}</th>
                  <th className="p-6 text-left">{t(`${p}.tableHeaderBioPE`)}</th>
                  <th className="p-6 text-left">{t(`${p}.tableHeaderFossilPE`)}</th>
                  <th className="p-6 text-left">{t(`${p}.tableHeaderMatch`)}</th>
                </tr>
              </thead>
              <tbody className="divide-y-2 divide-white/20">
                {PERFORMANCE_DATA.map((row, i) => (
                  <tr key={i}>
                    <td className="p-6 font-black uppercase">{row.label}</td>
                    <td className="p-6 text-[#D4FF00]">{row.bio}</td>
                    <td className="p-6">{row.fossil}</td>
                    <td className="p-6">✅</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Visual Component Section */}
      <section className="py-24 bg-[#F0F0F0] border-b-4 border-black">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8">
          <NeoCard>
            <img src="/imgs/cert/im-green-logo.png" className="w-24 mb-6" alt="I'm Green Logo" />
            <h4 className="font-black text-xl mb-4 uppercase">{t(`${p}.card1Title`)}</h4>
            <p className="text-sm font-['JetBrains_Mono'] text-gray-600">{t(`${p}.card1Description`)}</p>
          </NeoCard>
          <NeoCard color="bg-white shadow-[10px_10px_0px_0px_rgba(212,255,0,1)]">
            <Shield className="w-12 h-12 mb-6 text-green-600" />
            <h4 className="font-black text-xl mb-4 uppercase">{t(`${p}.card2Title`)}</h4>
            <p className="text-sm font-['JetBrains_Mono'] text-gray-600">{t(`${p}.card2Description`)}</p>
          </NeoCard>
          <NeoCard>
            <Recycle className="w-12 h-12 mb-6 text-blue-600" />
            <h4 className="font-black text-xl mb-4 uppercase">{t(`${p}.card3Title`)}</h4>
            <p className="text-sm font-['JetBrains_Mono'] text-gray-600">{t(`${p}.card3Description`)}</p>
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
              {t(`${p}.guideParagraph1`)}
            </p>
            
            <img 
              src="/imgs/spec/biope-pet-triplex-metalised.webp" 
              alt={t(`${p}.guideImage1Alt`)} 
              className="w-full h-80 object-cover border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] my-8"
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
              src="/imgs/spec/biope-pet-kraft-triplex-clear.webp" 
              alt={t(`${p}.guideImage2Alt`)} 
              className="w-full h-80 object-cover border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] my-8"
            />

            <h3 className="text-2xl font-['Space_Grotesk'] font-black uppercase text-black mt-12 mb-4">{t(`${p}.guideSection3Title`)}</h3>
            <p>
              {t(`${p}.guideSection3Paragraph1`)}
            </p>
          </div>
        </div>
      </section>

      {/* 5 Common Problems */}
      <section id="bio-pe-problems" className="py-24 bg-white border-t-4 border-black">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-black text-5xl md:text-7xl uppercase mb-16 text-center">{localT.sectionTitle}</h2>
          
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div className="relative">
              <div className="absolute inset-0 bg-[#D4FF00] translate-x-4 translate-y-4 border-4 border-black" />
              <img 
                src="/imgs/knowledge/pouch-biope-pain-points.jpg" 
                alt="Bio-PE Pouch Problems and Solutions" 
                className="relative z-10 border-4 border-black w-full object-cover aspect-square"
              />
            </div>
            
            <div className="space-y-8">
              {localT.problems.map((prob: any, idx: number) => (
                <div key={idx} className="bg-white border-4 border-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                  <h3 className="font-black text-2xl uppercase mb-4 flex items-center gap-3">
                    <span className="bg-black text-white w-8 h-8 flex items-center justify-center font-['JetBrains_Mono'] text-sm">{idx + 1}</span>
                    {prob.title}
                  </h3>
                  <div className="space-y-4 font-['JetBrains_Mono'] text-sm">
                    <div className="flex gap-3">
                      <AlertTriangle className="w-5 h-5 text-red-500 flex-shrink-0 mt-1" />
                      <p className="text-gray-700">{prob.description}</p>
                    </div>
                    <div className="flex gap-3">
                      <Wrench className="w-5 h-5 text-[#10b981] flex-shrink-0 mt-1" />
                      <p className="text-gray-900 font-bold">{prob.solution}</p>
                    </div>
                  </div>
                </div>
              ))}
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
      <section className="py-24 bg-black text-white border-b-4 border-black">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-10">
          <NeoBadge color="magenta">{t(`${p}.ctaBadge`)}</NeoBadge>
          <h2 className="font-black text-6xl md:text-9xl uppercase leading-none italic">{t(`${p}.ctaTitle1`)}<br/>{t(`${p}.ctaTitle2`)}</h2>
          <p className="font-['JetBrains_Mono'] font-bold text-xl opacity-80 max-w-2xl mx-auto">
            {t(`${p}.ctaDescription`)}
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
            <NeoButton variant="primary" to="/sample" className="!bg-[#D4FF00] !text-black">{t(`${p}.ctaButton1`)}</NeoButton>
            <NeoButton variant="secondary" className="!border-white !text-white" href="https://calendly.com/30-min-free-packaging-consultancy">
              {t(`${p}.ctaButton2`)}
            </NeoButton>
          </div>
        </div>
      </section>
    </PouchLayout>
  )
}

export default PouchBioPEPage
