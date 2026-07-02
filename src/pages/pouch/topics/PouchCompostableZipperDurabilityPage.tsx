import React from 'react'
import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { Recycle, CheckCircle, AlertTriangle, ArrowRight, Shield, Zap, Leaf, Thermometer, Sparkles } from 'lucide-react'
import PouchLayout from '../../../components/pouch/PouchLayout'
import { NeoButton, NeoCard, NeoBadge } from '../../../components/pouch/PouchUI'
import { useTranslation, Trans } from 'react-i18next'

const localTranslations = {
  en: {
    sectionTitle: "5 Common Compostable Zipper Problems (And Solutions)",
    painPoints: [
      { q: "Brittle Zippers (Breakage)", a: "Solution: Blending PBAT for flexibility." },
      { q: "Poor Sealing Strength (Separation)", a: "Solution: Co-extrusion with PLA and PHA." },
      { q: "Moisture Degradation (Loss of track grip)", a: "Solution: Enhanced moisture barriers like ALOX coating." },
      { q: "Heat Sensitivity (Warping during sealing)", a: "Solution: Precise thermal calibration and low-melt-point polymers." },
      { q: "Limited Reclosability (Wear and tear)", a: "Solution: Reinforced interlocking tracks and thicker profile designs." }
    ]
  },
  es: {
    sectionTitle: "5 problemas comunes de cremalleras compostables (y soluciones)",
    painPoints: [
      { q: "Cremalleras quebradizas (Rotura)", a: "Solución: Mezcla de PBAT para mayor flexibilidad." },
      { q: "Poca fuerza de sellado (Separación)", a: "Solución: Coextrusión con PLA y PHA." },
      { q: "Degradación por humedad (Pérdida de agarre)", a: "Solución: Barreras mejoradas contra la humedad como el recubrimiento ALOX." },
      { q: "Sensibilidad al calor (Deformación)", a: "Solución: Calibración térmica precisa y polímeros de bajo punto de fusión." },
      { q: "Re-sellado limitado (Desgaste)", a: "Solución: Pistas entrelazadas reforzadas y diseños de perfiles más gruesos." }
    ]
  },
  fr: {
    sectionTitle: "5 problèmes courants liés aux fermetures compostables (et solutions)",
    painPoints: [
      { q: "Fermetures fragiles (Casse)", a: "Solution : Mélange de PBAT pour la flexibilité." },
      { q: "Faible résistance d'étanchéité (Séparation)", a: "Solution : Co-extrusion avec PLA et PHA." },
      { q: "Dégradation par l'humidité (Perte d'adhérence)", a: "Solution : Barrières d'humidité améliorées comme le revêtement ALOX." },
      { q: "Sensibilité à la chaleur (Déformation)", a: "Solution : Étalonnage thermique précis et polymères à bas point de fusion." },
      { q: "Refermabilité limitée (Usure)", a: "Solution : Pistes à emboîtement renforcées et conceptions de profils plus épais." }
    ]
  },
  'zh-TW': {
    sectionTitle: "5 個常見的可堆肥拉鍊問題（及解決方案）",
    painPoints: [
      { q: "拉鍊脆化 (斷裂)", a: "解決方案：混合 PBAT 以提高柔韌性。" },
      { q: "密封強度差 (分離)", a: "解決方案：與 PLA 和 PHA 共擠出。" },
      { q: "濕氣降解 (軌道失去抓地力)", a: "解決方案：增強防潮層，例如 ALOX 塗層。" },
      { q: "熱敏感性 (密封時翹曲)", a: "解決方案：精確的熱校準和低熔點聚合物。" },
      { q: "可重複密封性有限 (磨損)", a: "解決方案：加固的互鎖軌道和更厚的輪廓設計。" }
    ]
  }
};
export default function PouchCompostableZipperDurabilityPage() {
  const { t, i18n } = useTranslation();
  const lang = i18n.language || 'en';
  const localT = localTranslations[lang as keyof typeof localTranslations] || localTranslations.en;
  const p = 'seoPages.pages.pouchCompostableZipperDurability';

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
        <link rel="canonical" href="https://pouch.eco/topics/compostable-zipper-durability" />
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
                {t(`${p}.hero.headlinePrefix`)}<br/>
                {t(`${p}.hero.headlineSuffix`)} <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#059669] to-[#D4FF00] drop-shadow-[4px_4px_0px_rgba(0,0,0,1)]">{t(`${p}.hero.headlineHighlight`)}</span>
              </h1>

              <p className="font-['JetBrains_Mono'] font-bold text-lg md:text-xl max-w-md bg-white border-2 border-black p-4 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] text-black" dangerouslySetInnerHTML={{ __html: t(`${p}.hero.subheading`) }} />
            </div>

            <div className="relative">
              <NeoCard className="bg-[#D4FF00] relative z-10 rotate-2 !p-0 overflow-hidden group border-4 border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
                <div className="aspect-square relative overflow-hidden">
                    <img 
                      src="/imgs/illustrated/compostable-zipper-detail-v2.png" 
                      alt={t(`${p}.hero.imgAlt`)} 
                      className="w-full h-full object-cover group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500"
                    />
                  <motion.div animate={floatAnim} className="absolute top-4 right-4 bg-white border-2 border-black px-2 py-1 font-['JetBrains_Mono'] text-xs font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] z-20">
                    {t(`${p}.hero.animBadge`)}
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
            {t(`${p}.physics.titlePrefix`)} <span className="text-[#059669]">{t(`${p}.physics.titleHighlight`)}</span>
          </h2>
          
          <div className="prose prose-lg max-w-none font-['JetBrains_Mono'] text-gray-700 space-y-6">
            <p>
              <Trans i18nKey={`${p}.physics.intro`} components={[<strong key="0" />]} />
            </p>

            <h3 className="text-2xl font-['Space_Grotesk'] font-black uppercase text-black mt-12 mb-4">{t(`${p}.physics.sections.0.title`)}</h3>
            <p>
              {t(`${p}.physics.sections.0.paragraphs.0`)}
            </p>
            <p>
              {t(`${p}.physics.sections.0.paragraphs.1`)}
            </p>

            <img 
              src="/imgs/illustrated/zipper-seal-durability.png" 
              alt={t(`${p}.physics.imgAlt`)} 
              className="w-full h-80 object-cover border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] my-8"
            />

            <h3 className="text-2xl font-['Space_Grotesk'] font-black uppercase text-black mt-12 mb-4">{t(`${p}.physics.sections.1.title`)}</h3>
            <p>
              {t(`${p}.physics.sections.1.paragraphs.0`)}
            </p>
            <p>
              <Trans i18nKey={`${p}.physics.sections.1.paragraphs.1`} components={[<strong key="0" />]} />
            </p>

            <h3 className="text-2xl font-['Space_Grotesk'] font-black uppercase text-black mt-12 mb-4">{t(`${p}.physics.sections.2.title`)}</h3>
            <p>
              <Trans i18nKey={`${p}.physics.sections.2.paragraphs.0`} components={[<strong key="0" />]} />
            </p>
          </div>
        </div>
      </section>

      {/* 5 Common Problems Section */}
      <section className="py-24 bg-white border-b-4 border-black">
        <div className="max-w-4xl mx-auto px-4 md:px-6">
          <h2 className="text-4xl md:text-5xl font-['Space_Grotesk'] font-black uppercase mb-12 text-center text-black">
            {localT.sectionTitle}
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <img 
              src="/imgs/knowledge/compostable-zipper-pain-points.jpg" 
              alt="Compostable Zipper Pain Points"
              className="w-full h-auto border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] rotate-1 hover:rotate-0 transition-transform duration-300"
            />
            <div className="space-y-6">
              {localT.painPoints.map((pt, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="mt-1 flex-shrink-0">
                    <AlertTriangle className="w-6 h-6 text-[#059669]" />
                  </div>
                  <div>
                    <h3 className="font-['Space_Grotesk'] font-black text-xl uppercase mb-1 text-black">
                      {pt.q}
                    </h3>
                    <p className="font-['JetBrains_Mono'] text-sm text-gray-700">
                      <CheckCircle className="inline w-4 h-4 mr-2 text-[#D4FF00] bg-black rounded-full" />
                      <span className="font-bold">{pt.a}</span>
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-gray-50 border-b-4 border-black">
        <div className="max-w-4xl mx-auto px-4 md:px-6">
          <h2 className="text-4xl md:text-5xl font-['Space_Grotesk'] font-black uppercase mb-12 text-center">
            {t(`${p}.faq.titlePrefix`)} <span className="text-[#059669]">{t(`${p}.faq.titleHighlight`)}</span>
          </h2>

          <div className="space-y-6">
            {[0, 1, 2].map((idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-6 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
              >
                <h3 className="font-['Space_Grotesk'] font-black text-lg uppercase mb-3 flex items-start gap-3">
                  <span className="text-[#059669] flex-shrink-0">{t(`${p}.faq.qPrefix`)}</span>
                  {t(`${p}.faq.questions.${idx}.q`)}
                </h3>
                <p className="font-['JetBrains_Mono'] text-sm text-gray-700 pl-8">
                  <span className="font-bold text-[#059669]">{t(`${p}.faq.aPrefix`)}</span> {t(`${p}.faq.questions.${idx}.a`)}
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
            {t(`${p}.cta.description`)}
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
            <NeoButton href="https://calendly.com/30-min-free-packaging-consultancy" variant="primary" className="!bg-[#D4FF00] !text-black w-full sm:w-auto text-xl py-4">
              {t(`${p}.cta.button`)} <ArrowRight className="inline-block ml-2 w-6 h-6" />
            </NeoButton>
          </div>
        </div>
      </section>
    </PouchLayout>
  )
}
