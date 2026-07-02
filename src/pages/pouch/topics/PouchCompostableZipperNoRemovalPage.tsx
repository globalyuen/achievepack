import React from 'react'
import { useTranslation } from 'react-i18next'
import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { Recycle, CheckCircle, AlertTriangle, ArrowRight, Shield, Zap, Leaf } from 'lucide-react'
import PouchLayout from '../../../components/pouch/PouchLayout'
import { NeoButton, NeoCard, NeoBadge } from '../../../components/pouch/PouchUI'

const translations: Record<string, any> = {
  en: {
    title: "5 Common Compostable Zipper Problems (And Solutions)",
    badge: "Pain Points",
    problems: [
      { q: "1. Consumer Confusion & Compliance", a: "Solution: Fully compostable zippers eliminate the need to tear off the zipper before composting, ensuring the entire pouch goes into the organic bin safely." },
      { q: "2. Incomplete Degradation in Soil", a: "Solution: Utilizing certified home-compostable PLA/PHA blends guarantees the zipper track degrades at the same rate as the pouch body without leaving microplastics." },
      { q: "3. Weak Seal Strength & Shelf Life", a: "Solution: Advanced biopolymer co-extrusion maintains high barrier properties and burst strength, matching conventional PE zippers while remaining 100% compostable." },
      { q: "4. Manufacturing Speed & Sealing Temp", a: "Solution: Low-temperature activation bio-resins allow manufacturers to run VFFS machines at high speeds without melting or warping the delicate compostable film." },
      { q: "5. High Cost & Sourcing Challenges", a: "Solution: Integrated production from bio-resin to final zipper profile reduces supply chain overhead, making fully compostable closures cost-competitive for sustainable brands." }
    ]
  },
  es: {
    title: "5 Problemas Comunes de los Cierres Compostables (Y Soluciones)",
    badge: "Puntos Críticos",
    problems: [
      { q: "1. Confusión del Consumidor y Cumplimiento", a: "Solución: Los cierres totalmente compostables eliminan la necesidad de arrancar el cierre antes del compostaje, asegurando que toda la bolsa vaya al contenedor orgánico de manera segura." },
      { q: "2. Degradación Incompleta en el Suelo", a: "Solución: La utilización de mezclas de PLA/PHA compostables en el hogar garantiza que la pista del cierre se degrade al mismo ritmo que el cuerpo de la bolsa sin dejar microplásticos." },
      { q: "3. Débil Resistencia del Sello y Vida Útil", a: "Solución: La coextrusión avanzada de biopolímeros mantiene altas propiedades de barrera, igualando a los cierres convencionales de PE pero siendo 100% compostables." },
      { q: "4. Velocidad de Fabricación y Temperatura de Sellado", a: "Solución: Las bio-resinas de activación a baja temperatura permiten a los fabricantes operar máquinas a altas velocidades sin derretir la película compostable." },
      { q: "5. Alto Costo y Desafíos de Abastecimiento", a: "Solución: La producción integrada reduce los gastos generales de la cadena de suministro, haciendo que los cierres compostables sean competitivos en costos para las marcas sostenibles." }
    ]
  },
  fr: {
    title: "5 Problèmes Courants liés aux Zips Compostables (Et Solutions)",
    badge: "Points Douloureux",
    problems: [
      { q: "1. Confusion du Consommateur et Conformité", a: "Solution : Les fermetures éclair entièrement compostables éliminent le besoin d'arracher le zip avant le compostage, garantissant que la pochette entière aille dans le bac organique en toute sécurité." },
      { q: "2. Dégradation Incomplète dans le Sol", a: "Solution : L'utilisation de mélanges PLA/PHA certifiés compostables à domicile garantit que le zip se dégrade au même rythme que le corps de la pochette sans microplastiques." },
      { q: "3. Faible Résistance du Sceau et Durée de Conservation", a: "Solution : La co-extrusion de biopolymères maintient des propriétés barrières élevées, égalant les zips en PE conventionnels tout en restant 100 % compostables." },
      { q: "4. Vitesse de Fabrication et Température de Scellage", a: "Solution : Les bio-résines à activation basse température permettent de faire fonctionner les machines à grande vitesse sans faire fondre le film compostable délicat." },
      { q: "5. Coût Élevé et Défis d'Approvisionnement", a: "Solution : La production intégrée réduit les frais de la chaîne d'approvisionnement, rendant les fermetures compostables compétitives pour les marques durables." }
    ]
  },
  'zh-TW': {
    title: "可堆肥夾鏈袋的5個常見問題（及解決方案）",
    badge: "痛點分析",
    problems: [
      { q: "1. 消費者困惑與合規性", a: "解決方案：全可堆肥夾鏈免除了在堆肥前撕下夾鏈的需要，確保整個包裝袋安全進入有機垃圾箱。" },
      { q: "2. 土壤中降解不完全", a: "解決方案：使用經過家庭堆肥認證的 PLA/PHA 混合物，確保夾鏈軌道與袋身以相同速度降解，不留微塑料。" },
      { q: "3. 密封強度弱與保質期短", a: "解決方案：先進的生物聚合物共擠出技術保持了高阻隔性能，可與傳統 PE 夾鏈相媲美，同時保持 100% 可堆肥。" },
      { q: "4. 生產速度與封口溫度", a: "解決方案：低溫活化生物樹脂使製造商能夠高速運行包裝機，而不會熔化脆弱的可堆肥薄膜。" },
      { q: "5. 成本高與採購挑戰", a: "解決方案：從生物樹脂到最終夾鏈的整合生產降低了供應鏈成本，使全可堆肥封口對可持續品牌更具成本競爭力。" }
    ]
  }
};

export default function PouchCompostableZipperNoRemovalPage() {
  const { t, i18n } = useTranslation()
  const p = 'pouchCompostableZipperNoRemovalPage'
  const currentLang = i18n?.language || 'en'
  const localT = translations[currentLang] || translations['en']

  const floatAnim = {
    y: [0, -10, 0],
    transition: { duration: 2, repeat: Infinity, ease: "easeInOut" as const }
  }

  return (
    <PouchLayout>
      <Helmet>
        <title>{t(`${p}.meta.title`)}</title>
        <meta name="description" content={t(`${p}.meta.description`)} />
        <link rel="canonical" href="https://pouch.eco/blog/compostable-zipper-no-removal" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative pt-12 pb-24 border-b-4 border-black bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:20px_20px]">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 z-10">
              <div className="inline-block bg-[#10b981] text-white border-4 border-black px-4 py-2 transform -rotate-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <span className="font-['JetBrains_Mono'] font-bold text-sm">{t(`${p}.hero.badge`)}</span>
              </div>
              
              <h1 className="font-black text-5xl md:text-7xl leading-[0.9] tracking-tighter uppercase">
                {t(`${p}.hero.titlePart1`)}<br/>
                {t(`${p}.hero.titlePart2`)} <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#10b981] to-[#D4FF00] drop-shadow-[4px_4px_0px_rgba(0,0,0,1)]">{t(`${p}.hero.titlePart3`)}</span>
              </h1>

              <p className="font-['JetBrains_Mono'] font-bold text-lg md:text-xl max-w-md bg-white border-2 border-black p-4 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] text-black">
                {t(`${p}.hero.q1`)}<br/>
                {t(`${p}.hero.q2`)}<br/>
                {t(`${p}.hero.a`)}
              </p>
            </div>

            <div className="relative">
              <NeoCard className="bg-[#D4FF00] relative z-10 rotate-2 !p-0 overflow-hidden group border-4 border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
                <div className="aspect-square relative overflow-hidden">
                    <img 
                      src="/imgs/illustrated/a_topic_01_eco_food_pkg_var_b_3398751.webp" 
                      alt={t(`${p}.hero.alt`)} 
                      className="w-full h-full object-cover group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500"
                    />
                  <motion.div animate={floatAnim} className="absolute top-4 right-4 bg-white border-2 border-black px-2 py-1 font-['JetBrains_Mono'] text-xs font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] z-20">
                    {t(`${p}.hero.badgeFloat`)}
                  </motion.div>
                </div>
              </NeoCard>
              <div className="absolute top-10 -right-10 w-full h-full border-4 border-black bg-[#10b981] -z-0 rotate-6" />
            </div>
          </div>
        </div>
      </section>

      {/* Deep Dive SEO Content */}
      <section className="py-24 bg-white border-b-4 border-black">
        <div className="max-w-4xl mx-auto px-4 md:px-6">
          <h2 className="text-4xl md:text-5xl font-['Space_Grotesk'] font-black uppercase mb-8">
            {t(`${p}.guide.title`)} <span className="text-[#10b981]">{t(`${p}.guide.titleHighlight`)}</span>
          </h2>
          
          <div className="prose prose-lg max-w-none font-['JetBrains_Mono'] text-gray-700 space-y-6">
            <p>
              {t(`${p}.guide.p1`)}
            </p>
            
            <img 
              src="/imgs/illustrated/a_topic_02_dtc_pkg_var_c_7412861.webp" 
              alt={t(`${p}.guide.alt2`)} 
              className="w-full h-80 object-cover border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] my-8"
            />

            <h3 className="text-2xl font-['Space_Grotesk'] font-black uppercase text-black mt-12 mb-4">{t(`${p}.guide.sec1Title`)}</h3>
            <p>
              {t(`${p}.guide.p2`)}
            </p>
            <p>
              {t(`${p}.guide.p3`)}
            </p>

            <h3 className="text-2xl font-['Space_Grotesk'] font-black uppercase text-black mt-12 mb-4">{t(`${p}.guide.sec2Title`)}</h3>
            <p>
              {t(`${p}.guide.p4`)}
            </p>
            
            <img 
              src="/imgs/topics/sustainable-lifecycle-pillar.png" 
              alt={t(`${p}.guide.alt3`)} 
              className="w-full h-80 object-contain bg-gray-100 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] my-8"
            />

            <h3 className="text-2xl font-['Space_Grotesk'] font-black uppercase text-black mt-12 mb-4">{t(`${p}.guide.sec3Title`)}</h3>
            <p>
              {t(`${p}.guide.p5`)}
            </p>
          </div>
        </div>
      </section>

      {/* Pain Points Section */}
      <section className="py-24 bg-white border-b-4 border-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative order-2 lg:order-1">
              <div className="absolute inset-0 bg-[#10b981] translate-x-4 translate-y-4 border-4 border-black" />
              <img 
                src="/imgs/knowledge/compostable-zipper-no-removal-pain-points.jpg" 
                alt="Compostable Zipper Pain Points" 
                className="relative z-10 border-4 border-black w-full shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]"
              />
            </div>
            <div className="order-1 lg:order-2">
              <NeoBadge color="green" className="bg-[#10b981] text-white border-black">{localT.badge}</NeoBadge>
              <h2 className="font-black text-5xl md:text-6xl mt-6 uppercase leading-tight mb-12 text-black">
                {localT.title}
              </h2>
              <div className="space-y-6">
                {localT.problems.map((prob: any, idx: number) => (
                  <div key={idx} className="bg-neutral-50 p-6 border-l-4 border-[#10b981] shadow-sm border-y-4 border-r-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all">
                    <h4 className="font-bold text-black text-xl mb-3 flex items-start gap-3">
                      <AlertTriangle className="w-6 h-6 text-[#10b981] flex-shrink-0 mt-1" />
                      {prob.q}
                    </h4>
                    <p className="text-gray-700 text-md leading-relaxed font-['JetBrains_Mono'] ml-9">
                      {prob.a}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-gray-50 border-b-4 border-black">
        <div className="max-w-4xl mx-auto px-4 md:px-6">
          <h2 className="text-4xl md:text-5xl font-['Space_Grotesk'] font-black uppercase mb-12 text-center">
            {t(`${p}.faq.title`)} <span className="text-[#10b981]">{t(`${p}.faq.titleHighlight`)}</span>
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
              },
              {
                q: t(`${p}.faq.q4`),
                a: t(`${p}.faq.a4`)
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
      <section className="py-24 bg-[#10b981] text-black">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-10">
          <h2 className="font-black text-5xl md:text-7xl uppercase">{t(`${p}.cta.title`)}</h2>
          <p className="font-['JetBrains_Mono'] font-bold text-xl text-black">
            {t(`${p}.cta.description`)}
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
