import React from 'react'
import { useTranslation } from 'react-i18next'
import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { Recycle, CheckCircle, AlertTriangle, ArrowRight, Shield, Zap, Leaf, Thermometer, Sparkles } from 'lucide-react'
import PouchLayout from '../../../components/pouch/PouchLayout'
import { NeoButton, NeoCard, NeoBadge } from '../../../components/pouch/PouchUI'

const localTranslations = {
  en: {
    title: "5 Common Compostable Spouted Pouch Problems (And Solutions)",
    items: [
      {
        q: "Weak Seal Strength",
        a: "Solution: Multi-layer biopolymer co-extrusion for robust sealing and integrity."
      },
      {
        q: "Poor Moisture & Oxygen Barrier",
        a: "Solution: High-barrier metallized compostable films (e.g., AlOx or SiOx coated PLA/PBS)."
      },
      {
        q: "Spout Leakage or Detachment",
        a: "Solution: Bio-based spouts ultrasonically or thermally welded with precise temperature control."
      },
      {
        q: "Short Shelf Life for Liquids",
        a: "Solution: Advanced barrier coatings ensuring equivalent shelf life to conventional plastics."
      },
      {
        q: "Incomplete Composting",
        a: "Solution: Certified EN 13432 compostable materials that break down entirely within 90-180 days."
      }
    ]
  },
  es: {
    title: "5 Problemas Comunes de las Bolsas con Boquilla Compostables (Y Soluciones)",
    items: [
      {
        q: "Baja resistencia de sellado",
        a: "Solución: Coextrusión de biopolímeros multicapa para un sellado e integridad robustos."
      },
      {
        q: "Pobre barrera contra humedad y oxígeno",
        a: "Solución: Películas compostables metalizadas de alta barrera (ej. PLA/PBS con recubrimiento de AlOx o SiOx)."
      },
      {
        q: "Fuga o desprendimiento de la boquilla",
        a: "Solución: Boquillas de base biológica soldadas por ultrasonido o térmicamente con control preciso de temperatura."
      },
      {
        q: "Corta vida útil para líquidos",
        a: "Solución: Recubrimientos de barrera avanzados que garantizan una vida útil equivalente a los plásticos convencionales."
      },
      {
        q: "Compostaje incompleto",
        a: "Solución: Materiales compostables certificados EN 13432 que se descomponen completamente en 90-180 días."
      }
    ]
  },
  fr: {
    title: "5 Problèmes Courants des Sachets à Bec Compostables (Et Solutions)",
    items: [
      {
        q: "Faible résistance de scellage",
        a: "Solution : Co-extrusion de biopolymères multicouches pour un scellage et une intégrité robustes."
      },
      {
        q: "Mauvaise barrière contre l'humidité et l'oxygène",
        a: "Solution : Films compostables métallisés à haute barrière (ex. PLA/PBS revêtus d'AlOx ou de SiOx)."
      },
      {
        q: "Fuite ou détachement du bec",
        a: "Solution : Becs biosourcés soudés par ultrasons ou thermiquement avec un contrôle précis de la température."
      },
      {
        q: "Durée de conservation courte pour les liquides",
        a: "Solution : Revêtements barrières avancés garantissant une durée de conservation équivalente aux plastiques conventionnels."
      },
      {
        q: "Compostage incomplet",
        a: "Solution : Matériaux compostables certifiés EN 13432 qui se décomposent entièrement en 90-180 jours."
      }
    ]
  },
  "zh-TW": {
    title: "5 個可堆肥吸嘴袋常見問題 (與解決方案)",
    items: [
      {
        q: "封口強度不足",
        a: "解決方案：採用多層生物聚合物共擠壓技術，實現穩固的封口與完整性。"
      },
      {
        q: "防潮防氧阻隔性差",
        a: "解決方案：使用高阻隔金屬化可堆肥薄膜（例如塗有 AlOx 或 SiOx 的 PLA/PBS）。"
      },
      {
        q: "吸嘴洩漏或脫落",
        a: "解決方案：透過精確的溫度控制，使用超聲波或熱焊接技術結合生物基吸嘴。"
      },
      {
        q: "液體產品保質期短",
        a: "解決方案：先進的阻隔塗層，確保保質期與傳統塑膠相當。"
      },
      {
        q: "堆肥降解不完全",
        a: "解決方案：採用經 EN 13432 認證的可堆肥材料，能在 90-180 天內完全分解。"
      }
    ]
  }
}
export default function PouchCompostableSpoutedPouchesPage() {
  const { t, i18n } = useTranslation()
  const p = 'pouchCompostableSpoutedPouchesPage'
  
  const currentLang = i18n.language || 'en'
  const langData = localTranslations[currentLang as keyof typeof localTranslations] || localTranslations.en

  const floatAnim = {
    y: [0, -10, 0],
    transition: { duration: 2, repeat: Infinity, ease: "easeInOut" as const }
  }

  return (
    <PouchLayout>
      <Helmet>
        <title>{t(`${p}.meta.title`)}</title>
        <meta name="description" content={t(`${p}.meta.description`)} />
        <link rel="canonical" href="https://pouch.eco/topics/compostable-spouted-pouches" />
        <meta name="keywords" content={t(`${p}.meta.keywords`)} />
      </Helmet>

      {/* Hero Section */}
      <section className="relative pt-12 pb-24 border-b-4 border-black bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:20px_20px]">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 z-10">
              <div className="inline-block bg-[#059669] text-white border-4 border-black px-4 py-2 transform -rotate-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <span className="font-['JetBrains_Mono'] font-bold text-sm">{t(`${p}.hero.badge`)}</span>
              </div>
              
              <h1 className="font-black text-5xl md:text-7xl leading-[0.9] tracking-tighter uppercase">
                {t(`${p}.hero.titlePart1`)}<br/>
                {t(`${p}.hero.titlePart2`)}<span className="text-transparent bg-clip-text bg-gradient-to-r from-[#059669] to-[#D4FF00] drop-shadow-[4px_4px_0px_rgba(0,0,0,1)]">{t(`${p}.hero.titlePart3`)}</span>
              </h1>

              <p className="font-['JetBrains_Mono'] font-bold text-lg md:text-xl max-w-md bg-white border-2 border-black p-4 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] text-black">
                {t(`${p}.hero.bullet1`)}<br/>
                {t(`${p}.hero.bullet2`)}<br/>
                {t(`${p}.hero.bullet3`)}
              </p>
            </div>

            <div className="relative">
              <NeoCard className="bg-[#D4FF00] relative z-10 rotate-2 !p-0 overflow-hidden group border-4 border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
                <div className="aspect-square relative overflow-hidden">
                    <img 
                      src="/imgs/topics/compostable-spouted-pouches.png" 
                      alt={t(`${p}.hero.imgAlt`)} 
                      className="w-full h-full object-cover group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500"
                    />
                  <motion.div animate={floatAnim} className="absolute top-4 right-4 bg-white border-2 border-black px-2 py-1 font-['JetBrains_Mono'] text-xs font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] z-20">
                    {t(`${p}.hero.imgBadge`)}
                  </motion.div>
                </div>
              </NeoCard>
              <div className="absolute top-10 -right-10 w-full h-full border-4 border-black bg-[#059669] -z-0 rotate-6" />
            </div>
          </div>
        </div>
      </section>

      {/* Deep Dive SEO Content */}
      <section className="py-24 bg-white border-b-4 border-black">
        <div className="max-w-4xl mx-auto px-4 md:px-6">
          <h2 className="text-4xl md:text-5xl font-['Space_Grotesk'] font-black uppercase mb-8">
            {t(`${p}.science.titlePart1`)}<span className="text-[#059669]">{t(`${p}.science.titlePart2`)}</span>
          </h2>
          
          <div className="prose prose-lg max-w-none font-['JetBrains_Mono'] text-gray-700 space-y-6">
            <p>
              {t(`${p}.science.p1`)}
            </p>

            <h3 className="text-2xl font-['Space_Grotesk'] font-black uppercase text-black mt-12 mb-4">{t(`${p}.science.h3_1`)}</h3>
            <p>
              {t(`${p}.science.p2`)}
            </p>
            <p>
              {t(`${p}.science.p3`)}
            </p>

            <img 
              src="/imgs/topics/compostable-spouted-pouches-alt.png" 
              alt={t(`${p}.science.imgAlt`)} 
              className="w-full h-80 object-cover border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] my-8"
            />

            <h3 className="text-2xl font-['Space_Grotesk'] font-black uppercase text-black mt-12 mb-4">{t(`${p}.science.h3_2`)}</h3>
            <p>
              {t(`${p}.science.p4`)}
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>{t(`${p}.science.li1`)}</li>
              <li>{t(`${p}.science.li2`)}</li>
              <li>{t(`${p}.science.li3`)}</li>
            </ul>

            <h3 className="text-2xl font-['Space_Grotesk'] font-black uppercase text-black mt-12 mb-4">{t(`${p}.science.h3_3`)}</h3>
            <p>
              {t(`${p}.science.p5`)}
            </p>
          </div>
        </div>
      </section>

      {/* 5 Common Problems Section */}
      <section className="py-24 bg-white border-b-4 border-black">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-['Space_Grotesk'] font-black uppercase mb-8">
                {langData.title}
              </h2>
              <div className="space-y-6">
                {langData.items.map((item, idx) => {
                  const icons = [<Shield className="w-8 h-8 text-[#059669]" />, <Thermometer className="w-8 h-8 text-[#059669]" />, <AlertTriangle className="w-8 h-8 text-[#059669]" />, <CheckCircle className="w-8 h-8 text-[#059669]" />, <Recycle className="w-8 h-8 text-[#059669]" />]
                  return (
                    <motion.div 
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1 }}
                      className="bg-white p-6 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex gap-4"
                    >
                      <div className="flex-shrink-0 mt-1">{icons[idx]}</div>
                      <div>
                        <h4 className="font-['Space_Grotesk'] font-black text-xl uppercase mb-2">{item.q}</h4>
                        <p className="font-['JetBrains_Mono'] text-gray-700">{item.a}</p>
                      </div>
                    </motion.div>
                  )
                })}
              </div>
            </div>
            <div className="relative">
              <NeoCard className="bg-[#059669] relative z-10 -rotate-2 !p-0 overflow-hidden group border-4 border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
                <img 
                  src="/imgs/knowledge/compostable-spouted-pouches-pain-points.jpg" 
                  alt="Compostable Spouted Pouches Pain Points" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </NeoCard>
              <div className="absolute top-10 -right-10 w-full h-full border-4 border-black bg-[#D4FF00] -z-0 rotate-3" />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-gray-50 border-b-4 border-black">
        <div className="max-w-4xl mx-auto px-4 md:px-6">
          <h2 className="text-4xl md:text-5xl font-['Space_Grotesk'] font-black uppercase mb-12 text-center">
            {t(`${p}.faq.badge`)}
          </h2>

          <div className="space-y-6">
            {[
              {
                q: t(`${p}.faq.q1`),
                a: t(`${p}.faq.a1`)
              },
              {
                q: t(`${p}.faq.q2`),
                a: t(`${p}.faq.a2`)
              },
              {
                q: t(`${p}.faq.q3`),
                a: t(`${p}.faq.a3`)
              }
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
                  <span className="text-[#059669] flex-shrink-0">Q:</span>
                  {faq.q}
                </h3>
                <p className="font-['JetBrains_Mono'] text-sm text-gray-700 pl-8">
                  <span className="font-bold text-[#059669]">A:</span> {faq.a}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-[#059669] text-white border-t-4 border-black">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-10">
          <h2 className="font-black text-5xl md:text-7xl uppercase text-white">{t(`${p}.cta.title`)}</h2>
          <p className="font-['JetBrains_Mono'] font-bold text-xl text-white/95">
            {t(`${p}.cta.desc`)}
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
            <NeoButton href="https://calendly.com/30-min-free-packaging-consultancy" variant="primary" className="!bg-[#D4FF00] !text-black w-full sm:w-auto text-xl py-4">
              {t(`${p}.cta.btn`)} <ArrowRight className="inline-block ml-2 w-6 h-6" />
            </NeoButton>
          </div>
        </div>
      </section>
    </PouchLayout>
  )
}
