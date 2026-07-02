import React from 'react'
import { Helmet } from 'react-helmet-async'
import { useTranslation } from 'react-i18next'
import { BarChart3, Package, CheckCircle, Award, Zap, Globe, Factory, Recycle, ArrowLeftRight, TrendingUp, ShoppingBag, Target, Shield, MessageCircle, Thermometer, Wind, Droplets, Microscope, Beaker, Utensils } from 'lucide-react'
import PouchLayout from '../../../components/pouch/PouchLayout'
import { NeoButton, NeoCard, NeoBadge } from '../../../components/pouch/PouchUI'
import { getBaseUrl } from '../../../utils/domain'
import ClickableImage from '../../../components/ClickableImage'

const localTranslations: Record<string, any> = {
  en: {
    title: "5 Common Eco-Friendly Food Packaging Problems (And Solutions)",
    problems: [
      { title: "Shelf Life Reduction (Oxygen & Moisture Barrier)", desc: "Eco-materials often have high transmission rates. Solution: Multi-layer high-barrier films (EVOH) with eco-friendly laminates." },
      { title: "Compromised Seal Strength", desc: "Heat-sealing biodegradable materials can cause weak seals. Solution: Advanced heat-sealing technologies and robust zipper structures tailored for sustainable films." },
      { title: "Cost of Transition", desc: "Higher material costs compared to traditional plastics. Solution: Optimized gauge thickness (down-gauging) without losing performance to offset material costs." },
      { title: "Compliance and Certifications", desc: "Navigating complex food safety regulations. Solution: Pre-certified FDA and EFSA compliant materials ready for immediate deployment." },
      { title: "Print Quality Issues", desc: "Inks reacting poorly on eco-materials. Solution: Solvent-free laminations and high-definition water-based or soy-based digital printing." }
    ]
  },
  es: {
    title: "5 Problemas Comunes del Empaque de Alimentos Ecológico (Y Soluciones)",
    problems: [
      { title: "Reducción de la Vida Útil (Barrera de Oxígeno y Humedad)", desc: "Los eco-materiales a menudo tienen altas tasas de transmisión. Solución: Películas de alta barrera multicapa (EVOH) con laminados ecológicos." },
      { title: "Resistencia de Sellado Comprometida", desc: "Sellar térmicamente materiales biodegradables puede causar sellos débiles. Solución: Tecnologías avanzadas de sellado térmico y estructuras de cierre resistentes." },
      { title: "Costo de Transición", desc: "Mayores costos de materiales. Solución: Grosor de calibre optimizado (down-gauging) sin perder rendimiento para compensar los costos." },
      { title: "Cumplimiento y Certificaciones", desc: "Navegar por regulaciones complejas. Solución: Materiales precertificados por FDA y EFSA listos para su uso inmediato." },
      { title: "Problemas de Calidad de Impresión", desc: "Tintas que reaccionan mal en eco-materiales. Solución: Laminaciones sin solventes e impresión digital de alta definición a base de agua." }
    ]
  },
  fr: {
    title: "5 Problèmes Courants d'Emballage Alimentaire Écologique (Et Solutions)",
    problems: [
      { title: "Réduction de la Durée de Conservation", desc: "Les éco-matériaux ont souvent des taux de transmission élevés. Solution : Films haute barrière multicouches (EVOH) avec des stratifiés écologiques." },
      { title: "Force de Scellage Compromise", desc: "Le thermoscellage de matériaux biodégradables peut affaiblir les joints. Solution : Technologies de thermoscellage avancées et structures de fermeture éclair robustes." },
      { title: "Coût de Transition", desc: "Coûts des matériaux plus élevés. Solution : Épaisseur de jauge optimisée (down-gauging) sans perte de performance pour compenser les coûts." },
      { title: "Conformité et Certifications", desc: "Naviguer dans les réglementations complexes. Solution : Matériaux pré-certifiés FDA et EFSA prêts pour un déploiement immédiat." },
      { title: "Problèmes de Qualité d'Impression", desc: "Les encres réagissent mal sur les éco-matériaux. Solution : Laminations sans solvant et impression numérique haute définition à base d'eau." }
    ]
  },
  'zh-TW': {
    title: "5 個常見的環保食品包裝問題 (及解決方案)",
    problems: [
      { title: "保質期縮短 (氧氣和水分阻隔)", desc: "環保材料通常具有較高的滲透率。解決方案：採用環保複合材料的多層高阻隔薄膜 (EVOH)。" },
      { title: "密封強度受損", desc: "生物降解材料的熱封可能導致密封不牢。解決方案：先進的熱封技術和專為可持續薄膜設計的堅固拉鍊結構。" },
      { title: "過渡成本", desc: "材料成本高於傳統塑料。解決方案：優化厚度 (減薄) 而不損失性能，以抵消材料成本。" },
      { title: "合規性和認證", desc: "應對複雜的食品安全法規。解決方案：預先獲得 FDA 和 EFSA 認證的材料，可立即投入使用。" },
      { title: "印刷質量問題", desc: "油墨在環保材料上反應不佳。解決方案：無溶劑複合和高清晰度水性或大豆基數字印刷。" }
    ]
  }
}

const PouchEcoFriendlyFoodPackagingPage: React.FC = () => {
  const { t, i18n } = useTranslation()
  const baseUrl = getBaseUrl()
  const currentLang = i18n.language || 'en'
  const localData = localTranslations[currentLang] || localTranslations['en']
  
  const FOOD_METRICS = [
    { label: t('pouchEcoFriendlyFoodPackagingPage.engineering.metrics.o2_label'), value: '< 1.0', unit: 'cc/m²', desc: t('pouchEcoFriendlyFoodPackagingPage.engineering.metrics.o2_desc') },
    { label: t('pouchEcoFriendlyFoodPackagingPage.engineering.metrics.moist_label'), value: '< 1.0', unit: 'g/m²', desc: t('pouchEcoFriendlyFoodPackagingPage.engineering.metrics.moist_desc') },
    { label: t('pouchEcoFriendlyFoodPackagingPage.engineering.metrics.compliance_label'), value: 'FDA', unit: 'EFSA', desc: t('pouchEcoFriendlyFoodPackagingPage.engineering.metrics.compliance_desc') },
    { label: t('pouchEcoFriendlyFoodPackagingPage.engineering.metrics.seal_label'), value: '±10°C', unit: 'Wide', desc: t('pouchEcoFriendlyFoodPackagingPage.engineering.metrics.seal_desc') }
  ]

  return (
    <PouchLayout>
      <Helmet>
        <title>{t('pouchEcoFriendlyFoodPackagingPage.meta.title')}</title>
        <meta name="description" content={t('pouchEcoFriendlyFoodPackagingPage.meta.description')} />
        <link rel="canonical" href={`${baseUrl}/topics/eco-friendly-food-packaging`} />
        <meta name="keywords" content={t('pouchEcoFriendlyFoodPackagingPage.meta.keywords')} />
      </Helmet>

      {/* Hero Section */}
      <section className="relative pt-12 pb-24 border-b-4 border-black bg-[radial-gradient(#064e3b_1px,transparent_1px)] [background-size:24px_24px] bg-emerald-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-left">
              <NeoBadge color="magenta">{t('pouchEcoFriendlyFoodPackagingPage.hero.badge')}</NeoBadge>
              <h1 className="mt-8 font-black text-6xl md:text-8xl leading-none uppercase italic">
                {t('pouchEcoFriendlyFoodPackagingPage.hero.title').split('<br/>')[0]}<br/>
                {t('pouchEcoFriendlyFoodPackagingPage.hero.title').split('<br/>')[1]}<br/>
                <span className="text-emerald-900 drop-shadow-[4px_4px_0px_rgba(212,255,0,1)]">{t('pouchEcoFriendlyFoodPackagingPage.hero.title').split('<br/>')[2]}</span>
              </h1>
              <p className="mt-8 text-xl font-bold font-['JetBrains_Mono'] text-gray-800 bg-white border-4 border-black p-6 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
                {t('pouchEcoFriendlyFoodPackagingPage.hero.subtitle')}
              </p>
              <div className="flex flex-wrap gap-6 mt-12">
                <NeoButton variant="primary" to="/products">{t('pouchEcoFriendlyFoodPackagingPage.hero.btn_browse')}</NeoButton>
                <NeoButton variant="secondary" to="/sample">{t('pouchEcoFriendlyFoodPackagingPage.hero.btn_request')}</NeoButton>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-emerald-400 translate-x-4 translate-y-4 border-4 border-black" />
              <ClickableImage 
                src="/imgs/illustrated/a_topic_01_eco_food_pkg_var_a_0799522.webp" 
                alt="Eco-Friendly Food Packaging Hero" 
                className="relative z-10 border-4 border-black w-full shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Engineering: The Barrier Framework */}
      <section className="py-24 bg-white border-b-4 border-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="absolute inset-0 bg-emerald-400 translate-x-4 translate-y-4 border-4 border-black" />
              <ClickableImage 
                src="/imgs/illustrated/a_topic_01_eco_food_pkg_var_b_3398751.webp" 
                alt="High Barrier Food Packaging Engineering" 
                className="relative z-10 border-4 border-black w-full shadow-2xl"
              />
            </div>
            <div>
              <NeoBadge color="blue">{t('pouchEcoFriendlyFoodPackagingPage.engineering.badge')}</NeoBadge>
              <h2 className="font-black text-5xl md:text-7xl mt-6 uppercase leading-tight italic">
                {t('pouchEcoFriendlyFoodPackagingPage.engineering.title').split('<br/>')[0]}<br/>
                {t('pouchEcoFriendlyFoodPackagingPage.engineering.title').split('<br/>')[1]}
              </h2>
              <p className="mt-8 text-xl text-gray-600 font-['JetBrains_Mono'] leading-relaxed">
                {t('pouchEcoFriendlyFoodPackagingPage.engineering.p1')}
              </p>
              <div className="mt-8 grid grid-cols-2 gap-4">
                {FOOD_METRICS.map((p, i) => (
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

      {/* Technical: Food Safety Protocols */}
      <section className="py-24 bg-black text-white border-b-4 border-black">
        <div className="max-w-7xl mx-auto px-6">
          <NeoBadge color="lime">{t('pouchEcoFriendlyFoodPackagingPage.technical.badge')}</NeoBadge>
          <h2 className="font-black text-5xl md:text-8xl mt-6 uppercase leading-none italic mb-16">
            {t('pouchEcoFriendlyFoodPackagingPage.technical.title').split('<br/>')[0]}<br/>
            {t('pouchEcoFriendlyFoodPackagingPage.technical.title').split('<br/>')[1]}
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="border-l-4 border-emerald-500 pl-8 py-4">
              <h3 className="text-3xl font-black uppercase mb-4">{t('pouchEcoFriendlyFoodPackagingPage.technical.t1_title')}</h3>
              <p className="text-lg font-['JetBrains_Mono'] opacity-70 leading-relaxed">
                {t('pouchEcoFriendlyFoodPackagingPage.technical.t1_desc')}
              </p>
            </div>

            <div className="border-l-4 border-emerald-500 pl-8 py-4">
              <h3 className="text-3xl font-black uppercase mb-4">{t('pouchEcoFriendlyFoodPackagingPage.technical.t2_title')}</h3>
              <p className="text-lg font-['JetBrains_Mono'] opacity-70 leading-relaxed">
                {t('pouchEcoFriendlyFoodPackagingPage.technical.t2_desc')}
              </p>
            </div>

            <div className="border-l-4 border-emerald-500 pl-8 py-4">
              <h3 className="text-3xl font-black uppercase mb-4">{t('pouchEcoFriendlyFoodPackagingPage.technical.t3_title')}</h3>
              <p className="text-lg font-['JetBrains_Mono'] opacity-70 leading-relaxed">
                {t('pouchEcoFriendlyFoodPackagingPage.technical.t3_desc')}
              </p>
            </div>

            <div className="border-l-4 border-emerald-500 pl-8 py-4">
              <h3 className="text-3xl font-black uppercase mb-4">{t('pouchEcoFriendlyFoodPackagingPage.technical.t4_title')}</h3>
              <p className="text-lg font-['JetBrains_Mono'] opacity-70 leading-relaxed">
                {t('pouchEcoFriendlyFoodPackagingPage.technical.t4_desc')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Lab Verification Section */}
      <section className="py-24 bg-emerald-50 border-b-4 border-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <NeoBadge color="blue">{t('pouchEcoFriendlyFoodPackagingPage.lab.badge')}</NeoBadge>
              <h2 className="font-black text-5xl md:text-7xl mt-6 uppercase leading-tight italic">
                {t('pouchEcoFriendlyFoodPackagingPage.lab.title').split('<br/>')[0]}<br/>
                {t('pouchEcoFriendlyFoodPackagingPage.lab.title').split('<br/>')[1]}
              </h2>
              <p className="mt-8 text-xl text-gray-700 font-['JetBrains_Mono'] leading-relaxed">
                {t('pouchEcoFriendlyFoodPackagingPage.lab.p1')}
              </p>
              <div className="mt-12 space-y-4">
                <div className="bg-white p-6 border-4 border-black flex gap-6 items-center">
                  <Microscope className="w-12 h-12 flex-shrink-0" />
                  <div>
                    <h4 className="font-black uppercase">{t('pouchEcoFriendlyFoodPackagingPage.lab.t1_title')}</h4>
                    <p className="text-sm opacity-60">{t('pouchEcoFriendlyFoodPackagingPage.lab.t1_desc')}</p>
                  </div>
                </div>
                <div className="bg-white p-6 border-4 border-black flex gap-6 items-center">
                  <Beaker className="w-12 h-12 flex-shrink-0" />
                  <div>
                    <h4 className="font-black uppercase">{t('pouchEcoFriendlyFoodPackagingPage.lab.t2_title')}</h4>
                    <p className="text-sm opacity-60">{t('pouchEcoFriendlyFoodPackagingPage.lab.t2_desc')}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-neutral-400 translate-x-4 translate-y-4 border-4 border-black" />
              <ClickableImage 
                src="/imgs/illustrated/a_topic_04_digital_print_var_c_4560298.webp" 
                alt="Technical Food Pouch Manufacturing" 
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
              <NeoBadge color="magenta">{localData.title}</NeoBadge>
              <h2 className="font-black text-4xl md:text-5xl mt-6 uppercase leading-tight italic mb-12">
                {localData.title}
              </h2>
              <div className="space-y-6">
                {localData.problems.map((problem: any, idx: number) => {
                  const Icon = [Droplets, Zap, TrendingUp, Shield, Beaker][idx]
                  return (
                    <div key={idx} className="bg-white border-4 border-black p-6 flex gap-6 hover:-translate-y-1 transition-transform shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                      <Icon className="w-10 h-10 flex-shrink-0 text-emerald-600" />
                      <div>
                        <h4 className="font-black text-xl uppercase mb-2">{problem.title}</h4>
                        <p className="font-['JetBrains_Mono'] text-gray-700 leading-relaxed">{problem.desc}</p>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-emerald-400 translate-x-4 translate-y-4 border-4 border-black" />
              <ClickableImage 
                src="/imgs/knowledge/eco_friendly_food_packaging_pain_points.jpg" 
                alt="5 Common Problems and Solutions" 
                className="relative z-10 border-4 border-black w-full shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ: Food Safety Intelligence */}
      <section className="py-24 bg-white border-b-4 border-black">
        <div className="max-w-4xl mx-auto px-6">
          <NeoBadge color="magenta">{t('pouchEcoFriendlyFoodPackagingPage.faq.badge')}</NeoBadge>
          <h2 className="font-black text-5xl md:text-7xl mt-6 uppercase leading-tight italic mb-12">
            {t('pouchEcoFriendlyFoodPackagingPage.faq.title').split('<br/>')[0]}<br/>
            {t('pouchEcoFriendlyFoodPackagingPage.faq.title').split('<br/>')[1]}
          </h2>
          <div className="space-y-4">
            {[
              { q: t('pouchEcoFriendlyFoodPackagingPage.faq.q1_q'), a: t('pouchEcoFriendlyFoodPackagingPage.faq.q1_a') },
              { q: t('pouchEcoFriendlyFoodPackagingPage.faq.q2_q'), a: t('pouchEcoFriendlyFoodPackagingPage.faq.q2_a') },
              { q: t('pouchEcoFriendlyFoodPackagingPage.faq.q3_q'), a: t('pouchEcoFriendlyFoodPackagingPage.faq.q3_a') },
              { q: t('pouchEcoFriendlyFoodPackagingPage.faq.q4_q'), a: t('pouchEcoFriendlyFoodPackagingPage.faq.q4_a') }
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
      <section className="py-24 bg-emerald-950 text-white border-b-4 border-black">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-12">
          <NeoBadge color="lime">{t('pouchEcoFriendlyFoodPackagingPage.cta.badge')}</NeoBadge>
          <h2 className="font-black text-6xl md:text-9xl uppercase leading-none italic">
            {t('pouchEcoFriendlyFoodPackagingPage.cta.title').split('<br/>')[0]}<br/>
            {t('pouchEcoFriendlyFoodPackagingPage.cta.title').split('<br/>')[1]}
          </h2>
          <p className="font-['JetBrains_Mono'] font-bold text-xl opacity-80 max-w-2xl mx-auto">
            {t('pouchEcoFriendlyFoodPackagingPage.cta.subtitle')}
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
            <NeoButton variant="primary" to="/sample" className="!bg-white !text-emerald-950">{t('pouchEcoFriendlyFoodPackagingPage.cta.btn_samples')}</NeoButton>
            <NeoButton variant="secondary" className="!border-white !text-white" href="https://calendly.com/30-min-free-packaging-consultancy">
              {t('pouchEcoFriendlyFoodPackagingPage.cta.btn_consultation')}
            </NeoButton>
          </div>
        </div>
      </section>
    </PouchLayout>
  )
}

export default PouchEcoFriendlyFoodPackagingPage
