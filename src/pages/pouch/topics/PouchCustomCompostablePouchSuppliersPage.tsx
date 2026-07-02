import React from 'react'
import { useTranslation } from 'react-i18next'
import { Helmet } from 'react-helmet-async'
import { BarChart3, Package, CheckCircle, Award, Zap, Globe, Factory, Recycle, ArrowLeftRight, TrendingUp, ShoppingBag, Target, Shield, MessageCircle, Thermometer, Wind, Droplets, Microscope, Beaker, Leaf, AlertTriangle } from 'lucide-react'
import PouchLayout from '../../../components/pouch/PouchLayout'
import { NeoButton, NeoCard, NeoBadge } from '../../../components/pouch/PouchUI'
import { getBaseUrl } from '../../../utils/domain'
import ClickableImage from '../../../components/ClickableImage'

const translations: Record<string, any> = {
  en: {
    title: "5 Common Custom Compostable Pouch Problems (And Solutions)",
    badge: "Pain Points",
    problems: [
      { q: "1. Low Barrier Properties", a: "Solution: Advanced metallized compostable films or ALOX/SIOX coatings are used to improve oxygen and moisture barriers." },
      { q: "2. Poor Seal Strength", a: "Solution: Utilizing innovative bio-based sealants ensures robust seal integrity even at high speeds." },
      { q: "3. Premature Degradation", a: "Solution: Implementing controlled-release stabilizing additives extends shelf life without compromising compostability." },
      { q: "4. Limited Print Quality", a: "Solution: Utilizing eco-friendly water-based or soy-based inks combined with surface pre-treatments allows for vibrant printing." },
      { q: "5. High MOQ Requirements", a: "Solution: Adopting agile digital printing on compostable substrates enables cost-effective short runs and lower MOQs." }
    ]
  },
  es: {
    title: "5 Problemas Comunes de las Bolsas Compostables (Y Soluciones)",
    badge: "Puntos Críticos",
    problems: [
      { q: "1. Bajas Propiedades de Barrera", a: "Solución: Se utilizan películas compostables metalizadas avanzadas o recubrimientos ALOX/SIOX para mejorar la barrera." },
      { q: "2. Poca Resistencia del Sello", a: "Solución: El uso de selladores innovadores de base biológica garantiza la integridad del sello a altas velocidades." },
      { q: "3. Degradación Prematura", a: "Solución: La implementación de aditivos estabilizadores prolonga la vida útil sin comprometer la compostabilidad." },
      { q: "4. Calidad de Impresión Limitada", a: "Solución: La utilización de tintas ecológicas a base de agua o soja permite una impresión vibrante." },
      { q: "5. Altos Requisitos de MOQ", a: "Solución: La adopción de impresión digital ágil permite tiradas cortas rentables y MOQs más bajos." }
    ]
  },
  fr: {
    title: "5 Problèmes Courants des Sachets Compostables (Et Solutions)",
    badge: "Points Douloureux",
    problems: [
      { q: "1. Faibles Propriétés de Barrière", a: "Solution: Des films compostables métallisés avancés ou des revêtements ALOX/SIOX sont utilisés pour améliorer la barrière." },
      { q: "2. Faible Résistance du Joint", a: "Solution: L'utilisation de scellants biosourcés innovants garantit l'intégrité du joint même à grande vitesse." },
      { q: "3. Dégradation Prématurée", a: "Solution: La mise en œuvre d'additifs stabilisants prolonge la durée de conservation sans compromettre la compostabilité." },
      { q: "4. Qualité d'Impression Limitée", a: "Solution: L'utilisation d'encres écologiques à base d'eau ou de soja permet une impression éclatante." },
      { q: "5. Exigences MOQ Élevées", a: "Solution: L'adoption de l'impression numérique agile permet des tirages courts rentables." }
    ]
  },
  'zh-TW': {
    title: "定制可降解包裝袋的5個常見問題（及解決方案）",
    badge: "痛點分析",
    problems: [
      { q: "1. 阻隔性能低", a: "解決方案：使用先進的金屬化可降解薄膜或 ALOX/SIOX 塗層來提高阻氧和阻水性。" },
      { q: "2. 封口強度差", a: "解決方案：利用創新的生物基密封劑確保在高速運作下的封口完整性。" },
      { q: "3. 過早降解", a: "解決方案：添加控釋穩定劑，延長保質期而不影響可降解性。" },
      { q: "4. 印刷質量有限", a: "解決方案：使用環保的水性或大豆基油墨，實現鮮豔的高解析度印刷。" },
      { q: "5. 起訂量要求高", a: "解決方案：在可降解基材上採用靈活的數字印刷，實現高性價比的小批量生產。" }
    ]
  }
}

export const sectionsForPouch = ["5 Common Custom Compostable Pouch Problems (And Solutions)"];
export const sectionsForAchieve = ["5 Common Custom Compostable Pouch Problems (And Solutions)"];

const PouchCustomCompostablePouchSuppliersPage: React.FC = () => {
  const { t, i18n } = useTranslation()
  const p = 'pouchCustomCompostablePouchSuppliersPage'
  const baseUrl = getBaseUrl()
  
  const currentLang = i18n.language || 'en'
  const localT = translations[currentLang] || translations['en']
  
  const BIO_METRICS = [
    { label: t(`${p}.metrics.bioDegrade.label`), value: t(`${p}.metrics.bioDegrade.value`), unit: t(`${p}.metrics.bioDegrade.unit`), desc: t(`${p}.metrics.bioDegrade.desc`) },
    { label: t(`${p}.metrics.barrier.label`), value: t(`${p}.metrics.barrier.value`), unit: t(`${p}.metrics.barrier.unit`), desc: t(`${p}.metrics.barrier.desc`) },
    { label: t(`${p}.metrics.certification.label`), value: t(`${p}.metrics.certification.value`), unit: t(`${p}.metrics.certification.unit`), desc: t(`${p}.metrics.certification.desc`) },
    { label: t(`${p}.metrics.moqEntry.label`), value: t(`${p}.metrics.moqEntry.value`), unit: t(`${p}.metrics.moqEntry.unit`), desc: t(`${p}.metrics.moqEntry.desc`) }
  ]

  return (
    <PouchLayout>
      <Helmet>
        <title>{t(`${p}.meta.title`)}</title>
        <meta name="description" content={t(`${p}.meta.description`)} />
        <link rel="canonical" href={`${baseUrl}/topics/compostable-suppliers`} />
        <meta name="keywords" content={t(`${p}.meta.keywords`)} />
      </Helmet>

      {/* Hero Section */}
      <section className="relative pt-12 pb-24 border-b-4 border-black bg-[radial-gradient(#064e3b_1px,transparent_1px)] [background-size:24px_24px] bg-neutral-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-left">
              <NeoBadge color="magenta">{t(`${p}.hero.badge`)}</NeoBadge>
              <h1 className="mt-8 font-black text-6xl md:text-8xl leading-none uppercase italic">
                {t(`${p}.hero.titlePart1`)}<br/>
                {t(`${p}.hero.titlePart2`)}<br/>
                <span className="text-black drop-shadow-[4px_4px_0px_rgba(212,255,0,1)]">{t(`${p}.hero.titlePart3`)}</span>
              </h1>
              <p className="mt-8 text-xl font-bold font-['JetBrains_Mono'] text-gray-800 bg-white border-4 border-black p-6 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
                {t(`${p}.hero.subtitle`)}
              </p>
              <div className="flex flex-wrap gap-6 mt-12">
                <NeoButton variant="primary" to="/products">{t(`${p}.hero.btnBrowse`)}</NeoButton>
                <NeoButton variant="secondary" to="/sample">{t(`${p}.hero.btnRequest`)}</NeoButton>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-neutral-400 translate-x-4 translate-y-4 border-4 border-black" />
              <ClickableImage 
                src="/imgs/topics/sustainable-lifecycle-pillar.png" 
                alt={t(`${p}.hero.imageAlt`)} 
                className="relative z-10 border-4 border-black w-full shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Engineering: The Bio Framework */}
      <section className="py-24 bg-white border-b-4 border-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="absolute inset-0 bg-neutral-400 translate-x-4 translate-y-4 border-4 border-black" />
              <ClickableImage 
                src="/imgs/blog/How/a_compostable_pouch_material_structure_5028836.webp" 
                alt={t(`${p}.engineering.imageAlt`)} 
                className="relative z-10 border-4 border-black w-full shadow-2xl"
              />
            </div>
            <div>
              <NeoBadge color="blue">{t(`${p}.engineering.badge`)}</NeoBadge>
              <h2 className="font-black text-5xl md:text-7xl mt-6 uppercase leading-tight italic">
                {t(`${p}.engineering.titlePart1`)}<br/>
                {t(`${p}.engineering.titlePart2`)}
              </h2>
              <p className="mt-8 text-xl text-gray-600 font-['JetBrains_Mono'] leading-relaxed">
                {t(`${p}.engineering.description`)}
              </p>
              <div className="mt-8 grid grid-cols-2 gap-4">
                {BIO_METRICS.map((p, i) => (
                  <div key={i} className="bg-white border-4 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 transition-all">
                    <h4 className="font-black uppercase text-xs mb-1 text-black">{p.label}</h4>
                    <p className="text-xl font-black">{p.value} <span className="text-[10px] opacity-60 font-normal">{p.unit}</span></p>
                    <p className="text-[10px] font-bold opacity-60">{p.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical: The Bio Tech Stack */}
      <section className="py-24 bg-black text-white border-b-4 border-black">
        <div className="max-w-7xl mx-auto px-6">
          <NeoBadge color="lime">{t(`${p}.tech.badge`)}</NeoBadge>
          <h2 className="font-black text-5xl md:text-8xl mt-6 uppercase leading-none italic mb-16">
            {t(`${p}.tech.titlePart1`)}<br/>
            {t(`${p}.tech.titlePart2`)}
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="border-l-4 border-[#D4FF00] pl-8 py-4">
              <h3 className="text-3xl font-black uppercase mb-4">{t(`${p}.tech.item1Title`)}</h3>
              <p className="text-lg font-['JetBrains_Mono'] opacity-70 leading-relaxed">
                {t(`${p}.tech.item1Desc`)}
              </p>
            </div>

            <div className="border-l-4 border-[#D4FF00] pl-8 py-4">
              <h3 className="text-3xl font-black uppercase mb-4">{t(`${p}.tech.item2Title`)}</h3>
              <p className="text-lg font-['JetBrains_Mono'] opacity-70 leading-relaxed">
                {t(`${p}.tech.item2Desc`)}
              </p>
            </div>

            <div className="border-l-4 border-[#D4FF00] pl-8 py-4">
              <h3 className="text-3xl font-black uppercase mb-4">{t(`${p}.tech.item3Title`)}</h3>
              <p className="text-lg font-['JetBrains_Mono'] opacity-70 leading-relaxed">
                {t(`${p}.tech.item3Desc`)}
              </p>
            </div>

            <div className="border-l-4 border-[#D4FF00] pl-8 py-4">
              <h3 className="text-3xl font-black uppercase mb-4">{t(`${p}.tech.item4Title`)}</h3>
              <p className="text-lg font-['JetBrains_Mono'] opacity-70 leading-relaxed">
                {t(`${p}.tech.item4Desc`)}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Laboratory Verification Section */}
      <section className="py-24 bg-neutral-100 border-b-4 border-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <NeoBadge color="blue">{t(`${p}.science.badge`)}</NeoBadge>
              <h2 className="font-black text-5xl md:text-7xl mt-6 uppercase leading-tight italic">
                {t(`${p}.science.titlePart1`)}<br/>
                {t(`${p}.science.titlePart2`)}
              </h2>
              <p className="mt-8 text-xl text-gray-700 font-['JetBrains_Mono'] leading-relaxed">
                {t(`${p}.science.description`)}
              </p>
              <div className="mt-12 space-y-4">
                <div className="bg-white p-6 border-4 border-black flex gap-6 items-center">
                  <Leaf className="w-12 h-12 flex-shrink-0" />
                  <div>
                    <h4 className="font-black uppercase">{t(`${p}.science.item1Title`)}</h4>
                    <p className="text-sm opacity-60">{t(`${p}.science.item1Desc`)}</p>
                  </div>
                </div>
                <div className="bg-white p-6 border-4 border-black flex gap-6 items-center">
                  <TrendingUp className="w-12 h-12 flex-shrink-0" />
                  <div>
                    <h4 className="font-black uppercase">{t(`${p}.science.item2Title`)}</h4>
                    <p className="text-sm opacity-60">{t(`${p}.science.item2Desc`)}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-neutral-400 translate-x-4 translate-y-4 border-4 border-black" />
              <ClickableImage 
                src="/imgs/illustrated/a_topic_02_dtc_pkg_var_c_7412861.webp" 
                alt={t(`${p}.science.imageAlt`)} 
                className="relative z-10 border-4 border-black w-full shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 5 Common Problems Section */}
      <section className="py-24 bg-neutral-50 border-b-4 border-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <NeoBadge color="magenta">{localT.badge}</NeoBadge>
              <h2 className="font-black text-4xl md:text-6xl mt-6 uppercase leading-tight italic mb-12">
                {localT.title}
              </h2>
              <div className="space-y-6">
                {localT.problems.map((prob: any, i: number) => (
                  <div key={i} className="bg-white border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 transition-all">
                    <h4 className="font-black text-xl uppercase mb-2 flex items-center gap-3">
                      <AlertTriangle className="w-6 h-6 text-red-500" />
                      {prob.q}
                    </h4>
                    <p className="font-['JetBrains_Mono'] text-gray-700 pl-9">{prob.a}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-neutral-400 translate-x-4 translate-y-4 border-4 border-black" />
              <ClickableImage 
                src="/imgs/knowledge/custom-compostable-pouch-suppliers-pain-points.jpg" 
                alt="Compostable Pouch Problems" 
                className="relative z-10 border-4 border-black w-full shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ: Bio Intelligence */}
      <section className="py-24 bg-white border-b-4 border-black">
        <div className="max-w-4xl mx-auto px-6">
          <NeoBadge color="magenta">{t(`${p}.faq.badge`)}</NeoBadge>
          <h2 className="font-black text-5xl md:text-7xl mt-6 uppercase leading-tight italic mb-12">
            {t(`${p}.faq.titlePart1`)}<br/>
            {t(`${p}.faq.titlePart2`)}
          </h2>
          <div className="space-y-4">
            {[
              { q: t(`${p}.faq.q1.q`), a: t(`${p}.faq.q1.a`) },
              { q: t(`${p}.faq.q2.q`), a: t(`${p}.faq.q2.a`) },
              { q: t(`${p}.faq.q3.q`), a: t(`${p}.faq.q3.a`) },
              { q: t(`${p}.faq.q4.q`), a: t(`${p}.faq.q4.a`) }
            ].map((faq, i) => (
              <div key={i} className="bg-white border-4 border-black p-8 hover:translate-x-1 hover:translate-y-1 hover:shadow-none shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all">
                <h4 className="font-black text-xl uppercase mb-4 flex items-center gap-3">
                  <span className="w-8 h-8 bg-black text-white flex items-center justify-center text-xs">Q</span>
                  {faq.q}
                </h4>
                <p className="font-['JetBrains_Mono'] text-gray-700 pl-11">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-black text-white border-b-4 border-black">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-12">
          <NeoBadge color="lime">{t(`${p}.cta.badge`)}</NeoBadge>
          <h2 className="font-black text-6xl md:text-9xl uppercase leading-none italic">
            {t(`${p}.cta.titlePart1`)}<br/>
            {t(`${p}.cta.titlePart2`)}
          </h2>
          <p className="font-['JetBrains_Mono'] font-bold text-xl opacity-80 max-w-2xl mx-auto">
            {t(`${p}.cta.description`)}
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
            <NeoButton variant="primary" to="/sample" className="!bg-white !text-black">{t(`${p}.cta.btnRequest`)}</NeoButton>
            <NeoButton variant="secondary" className="!border-white !text-white" href="https://calendly.com/30-min-free-packaging-consultancy">
              {t(`${p}.cta.btnEngineer`)}
            </NeoButton>
          </div>
        </div>
      </section>
    </PouchLayout>
  )
}

export default PouchCustomCompostablePouchSuppliersPage
