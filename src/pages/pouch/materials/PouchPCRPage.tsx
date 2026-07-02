import React from 'react'
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { Recycle, Package, CheckCircle, Award, Shield, Zap, BarChart3, Globe, Factory, ArrowRight, AlertTriangle, Wrench } from 'lucide-react'
import PouchLayout from '../../../components/pouch/PouchLayout'
import { NeoButton, NeoCard, NeoBadge } from '../../../components/pouch/PouchUI'
import { getBaseUrl } from '../../../utils/domain'

const pcrProblemsTranslations = {
  en: {
    sectionTitle: "5 Common PCR Packaging Problems (And Solutions)",
    problems: [
      {
        title: "Odor and Discoloration",
        desc: "PCR materials often have off-odors and visual impurities.",
        solution: "Multi-layer co-extrusion shielding with a virgin contact layer."
      },
      {
        title: "Reduced Structural Strength",
        desc: "Recycled plastics can become brittle over time.",
        solution: "Proprietary blending with reinforcing polymers for high tensile strength."
      },
      {
        title: "Food Safety Compliance",
        desc: "Risk of contaminant migration in food-grade applications.",
        solution: "FDA-approved functional barrier layers to block migration."
      },
      {
        title: "Material Inconsistency",
        desc: "Batch-to-batch variation in PCR resin performance.",
        solution: "Strict GRS-certified sourcing and automated quality control."
      },
      {
        title: "Poor Seal Integrity",
        desc: "Impurities can interfere with the heat sealing process.",
        solution: "Advanced sealant web optimization for consistent hermetic seals."
      }
    ]
  },
  es: {
    sectionTitle: "5 Problemas Comunes del Empaque PCR (Y Soluciones)",
    problems: [
      {
        title: "Olor y Decoloración",
        desc: "Los materiales PCR a menudo tienen malos olores e impurezas visuales.",
        solution: "Blindaje de coextrusión multicapa con una capa de contacto virgen."
      },
      {
        title: "Resistencia Estructural Reducida",
        desc: "Los plásticos reciclados pueden volverse quebradizos.",
        solution: "Mezcla patentada con polímeros de refuerzo para una alta resistencia a la tracción."
      },
      {
        title: "Cumplimiento de Seguridad Alimentaria",
        desc: "Riesgo de migración de contaminantes en aplicaciones alimentarias.",
        solution: "Capas de barrera funcionales aprobadas por la FDA."
      },
      {
        title: "Inconsistencia del Material",
        desc: "Variación entre lotes en la resina PCR.",
        solution: "Abastecimiento estricto certificado por GRS y control de calidad automático."
      },
      {
        title: "Poca Integridad del Sello",
        desc: "Las impurezas interfieren con el sellado térmico.",
        solution: "Optimización avanzada de la red de sellado para sellos herméticos consistentes."
      }
    ]
  },
  fr: {
    sectionTitle: "5 Problèmes Courants d'Emballage PCR (Et Solutions)",
    problems: [
      {
        title: "Odeur et Décoloration",
        desc: "Les matériaux PCR présentent souvent de mauvaises odeurs et des impuretés.",
        solution: "Blindage par coextrusion multicouche avec une couche de contact vierge."
      },
      {
        title: "Résistance Structurelle Réduite",
        desc: "Les plastiques recyclés peuvent devenir cassants.",
        solution: "Mélange breveté avec des polymères de renforcement pour une haute résistance."
      },
      {
        title: "Conformité Sécurité Alimentaire",
        desc: "Risque de migration de contaminants dans les applications alimentaires.",
        solution: "Couches barrières fonctionnelles approuvées par la FDA."
      },
      {
        title: "Incohérence des Matériaux",
        desc: "Variation d'un lot à l'autre de la résine PCR.",
        solution: "Approvisionnement strict certifié GRS et contrôle de qualité."
      },
      {
        title: "Mauvaise Intégrité du Scellage",
        desc: "Les impuretés interfèrent avec le thermoscellage.",
        solution: "Optimisation avancée de la bande de scellage pour des scellés cohérents."
      }
    ]
  },
  "zh-TW": {
    sectionTitle: "PCR 包裝的 5 個常見問題（及解決方案）",
    problems: [
      {
        title: "異味與變色",
        desc: "PCR 材料通常帶有異味與視覺雜質。",
        solution: "使用原生接觸層的多層共擠出屏障技術。"
      },
      {
        title: "結構強度降低",
        desc: "回收塑料容易變脆並降低耐用性。",
        solution: "混合強化聚合物的專利配方，提供高拉伸強度。"
      },
      {
        title: "食品安全合規性",
        desc: "食品級應用中的污染物質遷移風險。",
        solution: "採用 FDA 認可的功能性阻隔層，阻擋物質遷移。"
      },
      {
        title: "材料不穩定",
        desc: "PCR 樹脂在性能上存在批次差異。",
        solution: "嚴格的 GRS 認證採購與自動化品質控制。"
      },
      {
        title: "密封完整性差",
        desc: "雜質會干擾熱封過程。",
        solution: "先進的密封層優化，確保穩定的氣密密封。"
      }
    ]
  }
};
const PouchPCRPage: React.FC = () => {
  const { t, i18n } = useTranslation()
  const p = 'seoPages.pages.pouchPCR'

  const baseUrl = getBaseUrl()
  
  const currentLang = i18n.language || 'en';
  // @ts-ignore
  const localDict = pcrProblemsTranslations[currentLang] || pcrProblemsTranslations['en'];
  
  const PCR_BENEFITS = [
    { icon: Recycle, title: t(`${p}.benefits.virginReduction.title`), desc: t(`${p}.benefits.virginReduction.desc`) },
    { icon: BarChart3, title: t(`${p}.benefits.carbonSavings.title`), desc: t(`${p}.benefits.carbonSavings.desc`) },
    { icon: Shield, title: t(`${p}.benefits.fdaFoodSafe.title`), desc: t(`${p}.benefits.fdaFoodSafe.desc`) },
    { icon: Factory, title: t(`${p}.benefits.grsCertified.title`), desc: t(`${p}.benefits.grsCertified.desc`) }
  ]

  return (
    <PouchLayout>
      <Helmet>
        <title>{t(`${p}.title`)}</title>
        <meta name="description" content={t(`${p}.description`)} />
        <link rel="canonical" href={`${baseUrl}/materials/pcr`} />
        <meta name="keywords" content={t(`${p}.keywords`)} />
      </Helmet>

      {/* Hero Section */}
      <section className="relative pt-12 pb-24 border-b-4 border-black bg-[radial-gradient(#00ffff_1px,transparent_1px)] [background-size:24px_24px] bg-cyan-50">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <NeoBadge color="cyan">{t(`${p}.heroBadge`)}</NeoBadge>
          <h1 className="mt-8 font-black text-6xl md:text-9xl leading-none uppercase">{t(`${p}.heroTitle1`)}<br/>{t(`${p}.heroTitle2`)}<br/>{t(`${p}.heroTitleHighlight`)}</h1>
          <p className="mt-8 text-xl md:text-2xl font-bold font-['JetBrains_Mono'] text-gray-800 max-w-3xl mx-auto bg-white border-4 border-black p-6 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
            {t(`${p}.heroDescription`)}
          </p>
          <div className="mt-12 flex flex-wrap justify-center gap-6">
            <NeoButton variant="primary" to="/sample">{t(`${p}.heroCta1`)}</NeoButton>
            <NeoButton variant="secondary" to="/products">{t(`${p}.heroCta2`)}</NeoButton>
          </div>
        </div>
      </section>

      {/* Circular Economy Section */}
      <section className="py-24 bg-white border-b-4 border-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <NeoBadge color="magenta">{t(`${p}.valueChainBadge`)}</NeoBadge>
              <h2 className="font-black text-5xl md:text-7xl uppercase mt-6 leading-tight italic">{t(`${p}.valueChainTitle1`)}<br/>{t(`${p}.valueChainTitle2`)}</h2>
              <p className="mt-8 text-xl text-gray-600 font-['JetBrains_Mono'] leading-relaxed">
                {t(`${p}.valueChainDescription`)}
              </p>
              <div className="mt-8 space-y-4">
                <div className="flex items-center gap-4 bg-white border-4 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                  <CheckCircle className="text-cyan-600 w-6 h-6 flex-shrink-0" />
                  <span className="font-black uppercase text-sm italic underline">{t(`${p}.valueChainCheck1`)}</span>
                </div>
                <div className="flex items-center gap-4 bg-white border-4 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                  <Globe className="text-cyan-600 w-6 h-6 flex-shrink-0" />
                  <span className="font-black uppercase text-sm">{t(`${p}.valueChainCheck2`)}</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-cyan-400 translate-x-4 translate-y-4 border-4 border-black" />
              <img 
                src="/imgs/4-infograhic/PCR.webp" 
                alt={t(`${p}.valueChainImageAlt`)} 
                className="relative z-10 border-4 border-black w-full shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Grid of Advantages */}
      <section className="py-24 bg-[#F0F0F0] border-b-4 border-black">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {PCR_BENEFITS.map((benefit, i) => (
            <NeoCard key={i} className="hover:-translate-y-2 transition-transform">
              <benefit.icon className="w-12 h-12 mb-6 text-cyan-600" />
              <h3 className="font-black text-xl uppercase mb-4">{benefit.title}</h3>
              <p className="text-sm font-['JetBrains_Mono'] text-gray-600">{benefit.desc}</p>
            </NeoCard>
          ))}
        </div>
      </section>

      {/* Content Density Table */}
      <section className="py-24 bg-black text-white border-b-4 border-black">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-black text-5xl md:text-7xl uppercase mb-16 text-center text-cyan-400 italic">{t(`${p}.matrixTitle`)}</h2>
          <div className="overflow-x-auto border-4 border-white bg-black">
            <table className="w-full font-['JetBrains_Mono'] text-sm">
              <thead className="bg-white text-black border-b-4 border-black">
                <tr>
                  <th className="p-6 text-left">{t(`${p}.thPercentage`)}</th>
                  <th className="p-6 text-left">{t(`${p}.thUseCase`)}</th>
                  <th className="p-6 text-left">{t(`${p}.thTaxImpact`)}</th>
                  <th className="p-6 text-left">{t(`${p}.thClarityLevel`)}</th>
                </tr>
              </thead>
              <tbody className="divide-y-2 divide-white/20">
                <tr>
                  <td className="p-6 font-black uppercase">{t(`${p}.matrix30.pct`)}</td>
                  <td className="p-6 text-cyan-400">{t(`${p}.matrix30.use`)}</td>
                  <td className="p-6">{t(`${p}.matrix30.tax`)}</td>
                  <td className="p-6">{t(`${p}.matrix30.clarity`)}</td>
                </tr>
                <tr className="bg-white/5">
                  <td className="p-6 font-black uppercase">{t(`${p}.matrix50.pct`)}</td>
                  <td className="p-6 text-cyan-400">{t(`${p}.matrix50.use`)}</td>
                  <td className="p-6">{t(`${p}.matrix50.tax`)}</td>
                  <td className="p-6">{t(`${p}.matrix50.clarity`)}</td>
                </tr>
                <tr>
                  <td className="p-6 font-black uppercase">{t(`${p}.matrix100.pct`)}</td>
                  <td className="p-6 text-cyan-400">{t(`${p}.matrix100.use`)}</td>
                  <td className="p-6">{t(`${p}.matrix100.tax`)}</td>
                  <td className="p-6">{t(`${p}.matrix100.clarity`)}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Deep Dive SEO Content */}
      <section className="py-24 bg-white border-t-4 border-black">
        <div className="max-w-4xl mx-auto px-4 md:px-6">
          <h2 className="text-4xl md:text-5xl font-['Space_Grotesk'] font-black uppercase mb-8">
            {t(`${p}.guideTitle`)} <span className="text-[#3b82f6]">{t(`${p}.guideTitleHighlight`)}</span>
          </h2>
          
          <div className="prose prose-lg max-w-none font-['JetBrains_Mono'] text-gray-700 space-y-6">
            <p>
              {t(`${p}.guideParagraph1`)}
            </p>
            
            <img 
              src="/imgs/pcr/guide/a_pcr_barrier_performance_diagram_0887278.webp" 
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
              src="/imgs/spec/pcr-pet-kraft-triplex-clear.webp" 
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
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-['Space_Grotesk'] font-black uppercase mb-12 text-center">
            {localDict.sectionTitle}
          </h2>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              {localDict.problems.map((prob: any, idx: number) => (
                <div key={idx} className="bg-gray-50 border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                  <h3 className="font-['Space_Grotesk'] font-black text-xl uppercase mb-2 flex items-center gap-2 text-red-600">
                    <AlertTriangle className="w-6 h-6" />
                    {prob.title}
                  </h3>
                  <p className="font-['JetBrains_Mono'] text-sm text-gray-700 mb-4">{prob.desc}</p>
                  <div className="bg-cyan-50 border-l-4 border-cyan-500 p-4">
                    <h4 className="font-['Space_Grotesk'] font-bold text-sm uppercase mb-1 flex items-center gap-2 text-cyan-800">
                      <Wrench className="w-4 h-4" />
                      Solution
                    </h4>
                    <p className="font-['JetBrains_Mono'] text-sm text-gray-800">{prob.solution}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-red-400 translate-x-4 translate-y-4 border-4 border-black" />
              <img 
                src="/imgs/knowledge/pcr-packaging-pain-points.jpg" 
                alt="PCR Packaging Pain Points" 
                className="relative z-10 border-4 border-black w-full shadow-2xl object-cover h-full min-h-[500px]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-gray-50 border-t-4 border-black">
        <div className="max-w-4xl mx-auto px-4 md:px-6">
          <h2 className="text-4xl md:text-5xl font-['Space_Grotesk'] font-black uppercase mb-12 text-center">
            {t(`${p}.faqTitle`)} <span className="text-[#3b82f6]">{t(`${p}.faqTitleHighlight`)}</span>
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
                  <span className="text-[#3b82f6] flex-shrink-0">Q:</span>
                  {faq.q}
                </h3>
                <p className="font-['JetBrains_Mono'] text-sm text-gray-700 pl-8">
                  <span className="font-bold text-[#3b82f6]">A:</span> {faq.a}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-cyan-500 text-black border-b-4 border-black">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-10">
          <NeoBadge color="magenta">{t(`${p}.ctaBadge`)}</NeoBadge>
          <h2 className="font-black text-6xl md:text-9xl uppercase leading-none">{t(`${p}.ctaTitle1`)}<br/>{t(`${p}.ctaTitle2`)}</h2>
          <p className="font-['JetBrains_Mono'] font-bold text-xl opacity-80 max-w-2xl mx-auto">
            {t(`${p}.ctaDescription`)}
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
            <NeoButton variant="dark" to="/sample">{t(`${p}.ctaButton1`)}</NeoButton>
            <NeoButton variant="secondary" className="!bg-white" href="https://calendly.com/30-min-free-packaging-consultancy">
              {t(`${p}.ctaButton2`)}
            </NeoButton>
          </div>
        </div>
      </section>
    </PouchLayout>
  )
}

export default PouchPCRPage
