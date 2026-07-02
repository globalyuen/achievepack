import React from 'react'
import { Helmet } from 'react-helmet-async'
import { useTranslation } from 'react-i18next'
import { Trash2, BarChart3 } from 'lucide-react'
import PouchLayout from '../../../components/pouch/PouchLayout'
import { NeoButton, NeoCard, NeoBadge } from '../../../components/pouch/PouchUI'
import { getBaseUrl } from '../../../utils/domain'
import ClickableImage from '../../../components/ClickableImage'

const PouchReduceWasteGuidePage: React.FC = () => {
  const baseUrl = getBaseUrl()
  const { t, i18n } = useTranslation()
  const lang = (i18n.language || 'en') as 'en' | 'es' | 'fr' | 'zh-TW'
  
  const localTranslations = {
    en: {
      title: "5 Common Waste Reduction Problems (And Solutions)",
      problems: [
        { q: "Over-Packaging Material Waste", a: "Solution: Right-sizing and structural optimization." },
        { q: "High Sealing Defect Rates", a: "Solution: Advanced quality control and precise sealing calibration." },
        { q: "Ink & Setup Waste in Printing", a: "Solution: Digital printing with zero setup waste." },
        { q: "Non-Recyclable Mixed Layers", a: "Solution: Mono-material PE/PP structures for recyclability." },
        { q: "Inefficient Die-Cutting Yield", a: "Solution: Optimized die-line layout to maximize roll usage." }
      ]
    },
    es: {
      title: "5 Problemas Comunes de Reducción de Desperdicio (y Soluciones)",
      problems: [
        { q: "Desperdicio por Sobreembalaje", a: "Solución: Tamaño adecuado y optimización estructural." },
        { q: "Altas Tasas de Defectos de Sellado", a: "Solución: Control de calidad avanzado y calibración precisa." },
        { q: "Desperdicio de Tinta y Configuración", a: "Solución: Impresión digital sin desperdicio de configuración." },
        { q: "Capas Mixtas No Reciclables", a: "Solución: Estructuras monomateriales de PE/PP." },
        { q: "Rendimiento Ineficiente de Troquelado", a: "Solución: Diseño de troquel optimizado." }
      ]
    },
    fr: {
      title: "5 Problèmes Courants de Réduction des Déchets (et Solutions)",
      problems: [
        { q: "Gaspillage dû au Suremballage", a: "Solution : Dimensionnement adapté et optimisation structurelle." },
        { q: "Taux de Défauts de Scellage Élevés", a: "Solution : Contrôle qualité avancé et calibrage précis." },
        { q: "Gaspillage d'Encre et de Configuration", a: "Solution : Impression numérique sans gaspillage." },
        { q: "Couches Mixtes Non Recyclables", a: "Solution : Structures mono-matériaux PE/PP." },
        { q: "Rendement de Découpe Inefficace", a: "Solution : Disposition de découpe optimisée." }
      ]
    },
    'zh-TW': {
      title: "5 個常見的減少浪費問題（與解決方案）",
      problems: [
        { q: "過度包裝導致的材料浪費", a: "解決方案：尺寸優化與結構設計優化。" },
        { q: "封口不良導致的高不良率", a: "解決方案：先進的品質控制與精確的封口校準。" },
        { q: "印刷油墨與設置浪費", a: "解決方案：採用無設置浪費的數位印刷。" },
        { q: "不可回收的混合材質", a: "解決方案：採用可回收的單一材質 PE/PP 結構。" },
        { q: "模切良率低下", a: "解決方案：優化刀模排版以最大化卷材利用率。" }
      ]
    }
  }

  const currentT = localTranslations[lang] || localTranslations.en

  const WASTE_METRICS = [
    { label: t('pouchReduceWasteGuidePage.engineering.metrics.m1.label'), value: t('pouchReduceWasteGuidePage.engineering.metrics.m1.value'), unit: t('pouchReduceWasteGuidePage.engineering.metrics.m1.unit'), desc: t('pouchReduceWasteGuidePage.engineering.metrics.m1.desc') },
    { label: t('pouchReduceWasteGuidePage.engineering.metrics.m2.label'), value: t('pouchReduceWasteGuidePage.engineering.metrics.m2.value'), unit: t('pouchReduceWasteGuidePage.engineering.metrics.m2.unit'), desc: t('pouchReduceWasteGuidePage.engineering.metrics.m2.desc') },
    { label: t('pouchReduceWasteGuidePage.engineering.metrics.m3.label'), value: t('pouchReduceWasteGuidePage.engineering.metrics.m3.value'), unit: t('pouchReduceWasteGuidePage.engineering.metrics.m3.unit'), desc: t('pouchReduceWasteGuidePage.engineering.metrics.m3.desc') },
    { label: t('pouchReduceWasteGuidePage.engineering.metrics.m4.label'), value: t('pouchReduceWasteGuidePage.engineering.metrics.m4.value'), unit: t('pouchReduceWasteGuidePage.engineering.metrics.m4.unit'), desc: t('pouchReduceWasteGuidePage.engineering.metrics.m4.desc') }
  ]

  return (
    <PouchLayout>
      <Helmet>
        <title>{t('pouchReduceWasteGuidePage.meta.title')}</title>
        <meta name="description" content={t('pouchReduceWasteGuidePage.meta.description')} />
        <link rel="canonical" href={`${baseUrl}/topics/reduce-waste-guide`} />
        <meta name="keywords" content={t('pouchReduceWasteGuidePage.meta.keywords')} />
      </Helmet>

      {/* Hero Section */}
      <section className="relative pt-12 pb-24 border-b-4 border-black bg-[radial-gradient(#065f46_1px,transparent_1px)] [background-size:24px_24px] bg-emerald-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-left">
              <NeoBadge color="magenta">{t('pouchReduceWasteGuidePage.hero.badge')}</NeoBadge>
              <h1 className="mt-8 font-black text-6xl md:text-8xl leading-none uppercase italic" dangerouslySetInnerHTML={{ __html: t('pouchReduceWasteGuidePage.hero.title') }} />
              <p className="mt-8 text-xl font-bold font-['JetBrains_Mono'] text-gray-800 bg-white border-4 border-black p-6 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
                {t('pouchReduceWasteGuidePage.hero.subtitle')}
              </p>
              <div className="flex flex-wrap gap-6 mt-12">
                <NeoButton variant="primary" to="/products">{t('pouchReduceWasteGuidePage.hero.browse')}</NeoButton>
                <NeoButton variant="secondary" to="/sample">{t('pouchReduceWasteGuidePage.hero.order')}</NeoButton>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-emerald-400 translate-x-4 translate-y-4 border-4 border-black" />
              <ClickableImage 
                src="/imgs/illustrated/a_topic_02_dtc_pkg_var_c_7412861.webp" 
                alt={t('pouchReduceWasteGuidePage.hero.title').replace(/<br\s*\/?>/gi, ' ')} 
                className="relative z-10 border-4 border-black w-full shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Engineering: Source Reduction */}
      <section className="py-24 bg-white border-b-4 border-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="absolute inset-0 bg-emerald-400 translate-x-4 translate-y-4 border-4 border-black" />
              <ClickableImage 
                src="/imgs/illustrated/a_topic_02_dtc_pkg_var_c_7412861.webp" 
                alt={t('pouchReduceWasteGuidePage.engineering.title').replace(/<br\s*\/?>/gi, ' ')} 
                className="relative z-10 border-4 border-black w-full shadow-2xl"
              />
            </div>
            <div>
              <NeoBadge color="blue">{t('pouchReduceWasteGuidePage.engineering.badge')}</NeoBadge>
              <h2 className="font-black text-5xl md:text-7xl mt-6 uppercase leading-tight italic" dangerouslySetInnerHTML={{ __html: t('pouchReduceWasteGuidePage.engineering.title') }} />
              <p className="mt-8 text-xl text-gray-600 font-['JetBrains_Mono'] leading-relaxed">
                {t('pouchReduceWasteGuidePage.engineering.p1')}
              </p>
              <div className="mt-8 grid grid-cols-2 gap-4">
                {WASTE_METRICS.map((p, i) => (
                  <div key={i} className="bg-white border-4 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 transition-all">
                    <h4 className="font-black uppercase text-xs mb-1 text-emerald-700">{p.label}</h4>
                    <p className="text-xl font-black">{p.value} <span className="text-[10px] opacity-60 font-normal">{p.unit}</span></p>
                    <p className="text-[10px] font-bold opacity-60">{p.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical: Circular Design */}
      <section className="py-24 bg-black text-white border-b-4 border-black">
        <div className="max-w-7xl mx-auto px-6">
          <NeoBadge color="lime">{t('pouchReduceWasteGuidePage.tech.badge')}</NeoBadge>
          <h2 className="font-black text-5xl md:text-8xl mt-6 uppercase leading-none italic mb-16" dangerouslySetInnerHTML={{ __html: t('pouchReduceWasteGuidePage.tech.title') }} />
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="border-l-4 border-[#D4FF00] pl-8 py-4">
              <h3 className="text-3xl font-black uppercase mb-4">{t('pouchReduceWasteGuidePage.tech.t1.title')}</h3>
              <p className="text-lg font-['JetBrains_Mono'] opacity-70 leading-relaxed">
                {t('pouchReduceWasteGuidePage.tech.t1.desc')}
              </p>
            </div>

            <div className="border-l-4 border-[#D4FF00] pl-8 py-4">
              <h3 className="text-3xl font-black uppercase mb-4">{t('pouchReduceWasteGuidePage.tech.t2.title')}</h3>
              <p className="text-lg font-['JetBrains_Mono'] opacity-70 leading-relaxed">
                {t('pouchReduceWasteGuidePage.tech.t2.desc')}
              </p>
            </div>

            <div className="border-l-4 border-[#D4FF00] pl-8 py-4">
              <h3 className="text-3xl font-black uppercase mb-4">{t('pouchReduceWasteGuidePage.tech.t3.title')}</h3>
              <p className="text-lg font-['JetBrains_Mono'] opacity-70 leading-relaxed">
                {t('pouchReduceWasteGuidePage.tech.t3.desc')}
              </p>
            </div>

            <div className="border-l-4 border-[#D4FF00] pl-8 py-4">
              <h3 className="text-3xl font-black uppercase mb-4">{t('pouchReduceWasteGuidePage.tech.t4.title')}</h3>
              <p className="text-lg font-['JetBrains_Mono'] opacity-70 leading-relaxed">
                {t('pouchReduceWasteGuidePage.tech.t4.desc')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Waste Audit Methodology */}
      <section className="py-24 bg-emerald-50 border-b-4 border-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <NeoBadge color="blue">{t('pouchReduceWasteGuidePage.lab.badge')}</NeoBadge>
              <h2 className="font-black text-5xl md:text-7xl mt-6 uppercase leading-tight italic" dangerouslySetInnerHTML={{ __html: t('pouchReduceWasteGuidePage.lab.title') }} />
              <p className="mt-8 text-xl text-gray-700 font-['JetBrains_Mono'] leading-relaxed">
                {t('pouchReduceWasteGuidePage.lab.p1')}
              </p>
              <div className="mt-12 space-y-4">
                <div className="bg-white p-6 border-4 border-black flex gap-6 items-center">
                  <Trash2 className="w-12 h-12 flex-shrink-0" />
                  <div>
                    <h4 className="font-black uppercase">{t('pouchReduceWasteGuidePage.lab.f1_title')}</h4>
                    <p className="text-sm opacity-60">{t('pouchReduceWasteGuidePage.lab.f1_desc')}</p>
                  </div>
                </div>
                <div className="bg-white p-6 border-4 border-black flex gap-6 items-center">
                  <BarChart3 className="w-12 h-12 flex-shrink-0" />
                  <div>
                    <h4 className="font-black uppercase">{t('pouchReduceWasteGuidePage.lab.f2_title')}</h4>
                    <p className="text-sm opacity-60">{t('pouchReduceWasteGuidePage.lab.f2_desc')}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-emerald-400 translate-x-4 translate-y-4 border-4 border-black" />
              <ClickableImage 
                src="/imgs/illustrated/a_topic_04_digital_print_var_c_4560298.webp" 
                alt={t('pouchReduceWasteGuidePage.lab.title').replace(/<br\s*\/?>/gi, ' ')} 
                className="relative z-10 border-4 border-black w-full shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 5 Common Problems Section */}
      <section className="py-24 bg-white border-b-4 border-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <NeoBadge color="magenta">PAIN POINTS & SOLUTIONS</NeoBadge>
              <h2 className="font-black text-4xl md:text-6xl mt-6 uppercase leading-tight italic">
                {currentT.title}
              </h2>
              <div className="mt-8 space-y-4">
                {currentT.problems.map((prob, idx) => (
                  <div key={idx} className="bg-[#F0F0F0] border-4 border-black p-6 flex gap-4 items-start shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                    <Trash2 className="w-8 h-8 text-magenta flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-black uppercase text-lg mb-1">{prob.q}</h4>
                      <p className="font-['JetBrains_Mono'] text-sm text-gray-700">{prob.a}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-magenta translate-x-4 translate-y-4 border-4 border-black" />
              <ClickableImage 
                src="/imgs/knowledge/reduce-waste-pain-points.jpg" 
                alt="Waste Reduction Pain Points" 
                className="relative z-10 border-4 border-black w-full shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ: Technical Waste */}
      <section className="py-24 bg-[#F0F0F0] border-b-4 border-black">
        <div className="max-w-4xl mx-auto px-6">
          <NeoBadge color="magenta">{t('pouchReduceWasteGuidePage.faq.badge')}</NeoBadge>
          <h2 className="font-black text-5xl md:text-7xl mt-6 uppercase leading-tight italic mb-12" dangerouslySetInnerHTML={{ __html: t('pouchReduceWasteGuidePage.faq.title') }} />
          <div className="space-y-4">
            {[
              { q: t('pouchReduceWasteGuidePage.faq.q1_q'), a: t('pouchReduceWasteGuidePage.faq.q1_a') },
              { q: t('pouchReduceWasteGuidePage.faq.q2_q'), a: t('pouchReduceWasteGuidePage.faq.q2_a') },
              { q: t('pouchReduceWasteGuidePage.faq.q3_q'), a: t('pouchReduceWasteGuidePage.faq.q3_a') },
              { q: t('pouchReduceWasteGuidePage.faq.q4_q'), a: t('pouchReduceWasteGuidePage.faq.q4_a') }
            ].map((faq, i) => (
              <div key={i} className="bg-white border-4 border-black p-8 hover:translate-x-1 hover:translate-y-1 hover:shadow-none shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all">
                <h4 className="font-black text-xl uppercase mb-4 flex items-center gap-3">
                  <span className="w-8 h-8 bg-black text-white flex items-center justify-center text-xs">Q</span>
                  {faq.q}
                </h4>
                <p className="font-['JetBrains_Mono'] text-gray-600 pl-11">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-emerald-900 text-white border-b-4 border-black">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-12">
          <NeoBadge color="lime">{t('pouchReduceWasteGuidePage.cta.badge')}</NeoBadge>
          <h2 className="font-black text-6xl md:text-9xl uppercase leading-none italic" dangerouslySetInnerHTML={{ __html: t('pouchReduceWasteGuidePage.cta.title') }} />
          <p className="font-['JetBrains_Mono'] font-bold text-xl opacity-80 max-w-2xl mx-auto">
            {t('pouchReduceWasteGuidePage.cta.subtitle')}
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
            <NeoButton variant="primary" to="/sample" className="!bg-white !text-emerald-900">{t('pouchReduceWasteGuidePage.cta.samples')}</NeoButton>
            <NeoButton variant="secondary" className="!border-white !text-white" href="https://calendly.com/30-min-free-packaging-consultancy">
              {t('pouchReduceWasteGuidePage.cta.audit')}
            </NeoButton>
          </div>
        </div>
      </section>
    </PouchLayout>
  )
}

export default PouchReduceWasteGuidePage
