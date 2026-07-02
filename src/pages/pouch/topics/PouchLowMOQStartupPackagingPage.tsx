import React from 'react'
import { useTranslation } from 'react-i18next'
import { Helmet } from 'react-helmet-async'
import { BarChart3, Package, CheckCircle, Award, Zap, Globe, Factory, Recycle, ArrowLeftRight, TrendingUp, ShoppingBag, Target, Shield, MessageCircle, Thermometer, Wind, Droplets, Microscope, Beaker, Rocket, AlertCircle, Clock, DollarSign, Sliders, TrendingDown } from 'lucide-react'

const translations: Record<string, Record<string, string>> = {
  en: {
    problemsBadge: "Pain Points",
    problemsTitle1: "5 Common",
    problemsTitle2: "Startup Packaging Problems (And Solutions)",
    prob1Title: "1. High Initial Capital Requirement",
    prob1Desc: "Custom packaging often demands huge upfront costs. Solution: Digital printing eliminates plate fees, making small runs affordable.",
    prob2Title: "2. Long Lead Times Delaying Launch",
    prob2Desc: "Traditional manufacturing takes months. Solution: Agile production and rapid prototyping ensure you get to market faster.",
    prob3Title: "3. Inconsistent Quality in Small Batches",
    prob3Desc: "Small orders often suffer from poor quality control. Solution: Implementing strict, scalable QA protocols regardless of order size.",
    prob4Title: "4. Limited Customization for Low Volumes",
    prob4Desc: "Suppliers restrict options for small orders. Solution: Variable data printing allows unlimited designs without extra setup.",
    prob5Title: "5. High Per-Unit Costs",
    prob5Desc: "Startups pay a premium per unit. Solution: Strategic structural design and scalable material roadmaps that lower costs as volume grows.",
  },
  es: {
    problemsBadge: "Puntos de Dolor",
    problemsTitle1: "5 Problemas Comunes",
    problemsTitle2: "de Empaque para Startups (Y Soluciones)",
    prob1Title: "1. Alto Requisito de Capital Inicial",
    prob1Desc: "El empaque personalizado suele exigir enormes costos iniciales. Solución: La impresión digital elimina las tarifas de las planchas.",
    prob2Title: "2. Largos Tiempos de Entrega que Retrasan el Lanzamiento",
    prob2Desc: "La fabricación tradicional lleva meses. Solución: La producción ágil garantiza llegar al mercado más rápido.",
    prob3Title: "3. Calidad Inconsistente en Lotes Pequeños",
    prob3Desc: "Los pedidos pequeños suelen sufrir un control de calidad deficiente. Solución: Implementar protocolos de calidad estrictos y escalables.",
    prob4Title: "4. Opciones de Personalización Limitadas",
    prob4Desc: "Los proveedores restringen las opciones. Solución: La impresión de datos variables permite diseños ilimitados.",
    prob5Title: "5. Altos Costos por Unidad",
    prob5Desc: "Las startups pagan una prima por unidad. Solución: Diseño estratégico que reduce los costos a medida que aumenta el volumen.",
  },
  fr: {
    problemsBadge: "Points Faibles",
    problemsTitle1: "5 Problèmes Courants",
    problemsTitle2: "d'Emballage pour Startups (Et Solutions)",
    prob1Title: "1. Besoin en Capital Initial Élevé",
    prob1Desc: "L'emballage personnalisé exige souvent d'énormes coûts. Solution : L'impression numérique rend les petites séries abordables.",
    prob2Title: "2. Délais de Livraison Longs Retardant le Lancement",
    prob2Desc: "La fabrication traditionnelle prend des mois. Solution : La production agile vous assure une mise sur le marché plus rapide.",
    prob3Title: "3. Qualité Incohérente des Petits Lots",
    prob3Desc: "Les petites commandes souffrent d'un mauvais contrôle qualité. Solution : Mettre en œuvre des protocoles stricts.",
    prob4Title: "4. Personnalisation Limitée pour les Faibles Volumes",
    prob4Desc: "Les fournisseurs restreignent les options. Solution : L'impression de données variables permet des conceptions illimitées.",
    prob5Title: "5. Coûts Unitaires Élevés",
    prob5Desc: "Les startups paient une prime par unité. Solution : Conception stratégique qui réduit les coûts avec l'augmentation du volume.",
  },
  'zh-TW': {
    problemsBadge: "常見痛點",
    problemsTitle1: "5大常見",
    problemsTitle2: "新創包裝問題（與解決方案）",
    prob1Title: "1. 初期資金需求高",
    prob1Desc: "客製化包裝通常需要龐大的前期成本。解決方案：數位印刷免除了版費，讓小批量生產更具成本效益。",
    prob2Title: "2. 交期過長延誤上市時間",
    prob2Desc: "傳統製造通常需要數個月。解決方案：敏捷生產和快速打樣確保您能更快進入市場。",
    prob3Title: "3. 小批量生產品質不穩定",
    prob3Desc: "小訂單往往缺乏嚴格的品管。解決方案：無論訂單大小，皆實施嚴格且可擴展的品質保證協議。",
    prob4Title: "4. 小批量客製化選項受限",
    prob4Desc: "供應商通常會限制小訂單的選擇。解決方案：變動資料印刷允許無限制的設計，無需額外設定費用。",
    prob5Title: "5. 單件成本偏高",
    prob5Desc: "新創公司往往承受較高的單價。解決方案：策略性的結構設計和可擴展的材料藍圖，隨著產量增加降低成本。",
  }
}
import PouchLayout from '../../../components/pouch/PouchLayout'
import { NeoButton, NeoCard, NeoBadge } from '../../../components/pouch/PouchUI'
import { getBaseUrl } from '../../../utils/domain'
import ClickableImage from '../../../components/ClickableImage'

const PouchLowMOQStartupPackagingPage: React.FC = () => {
  const { t, i18n } = useTranslation()
  const currentLang = i18n?.language || 'en'
  const localT = (key: string) => {
    const langObj = translations[currentLang] || translations['en'] || {}
    return langObj[key] || translations['en'][key] || ''
  }
  const p = 'pouchLowMOQStartupPackagingPage'
  const baseUrl = getBaseUrl()
  
  const STARTUP_METRICS = [
    { label: t(`${p}.metrics.minEntry.label`), value: t(`${p}.metrics.minEntry.value`), unit: t(`${p}.metrics.minEntry.unit`), desc: t(`${p}.metrics.minEntry.desc`) },
    { label: t(`${p}.metrics.plateFee.label`), value: t(`${p}.metrics.plateFee.value`), unit: t(`${p}.metrics.plateFee.unit`), desc: t(`${p}.metrics.plateFee.desc`) },
    { label: t(`${p}.metrics.launchSpd.label`), value: t(`${p}.metrics.launchSpd.value`), unit: t(`${p}.metrics.launchSpd.unit`), desc: t(`${p}.metrics.launchSpd.desc`) },
    { label: t(`${p}.metrics.riskRed.label`), value: t(`${p}.metrics.riskRed.value`), unit: t(`${p}.metrics.riskRed.unit`), desc: t(`${p}.metrics.riskRed.desc`) }
  ]

  return (
    <PouchLayout>
      <Helmet>
        <title>{t(`${p}.meta.title`)}</title>
        <meta name="description" content={t(`${p}.meta.description`)} />
        <link rel="canonical" href={`${baseUrl}/topics/low-moq-startup`} />
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
                src="/imgs/illustrated/a_all_options_card_v3_3800862.webp" 
                alt={t(`${p}.hero.imageAlt`)} 
                className="relative z-10 border-4 border-black w-full shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Engineering: The Startup Framework */}
      <section className="py-24 bg-white border-b-4 border-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="absolute inset-0 bg-neutral-400 translate-x-4 translate-y-4 border-4 border-black" />
              <ClickableImage 
                src="/imgs/illustrated/a_printing_types_card_v2_6243973.webp" 
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
                {STARTUP_METRICS.map((p, i) => (
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

      {/* Technical: The Agile Tech Stack */}
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
                  <Rocket className="w-12 h-12 flex-shrink-0" />
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
                src="/imgs/illustrated/a_topic_01_eco_food_pkg_var_b_3398751.webp" 
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
              <NeoBadge color="magenta">{localT('problemsBadge')}</NeoBadge>
              <h2 className="font-black text-5xl md:text-7xl mt-6 uppercase leading-tight italic">
                {localT('problemsTitle1')}<br/>
                {localT('problemsTitle2')}
              </h2>
              <div className="mt-12 space-y-6">
                {[
                  { title: localT('prob1Title'), desc: localT('prob1Desc'), icon: <DollarSign className="w-8 h-8" /> },
                  { title: localT('prob2Title'), desc: localT('prob2Desc'), icon: <Clock className="w-8 h-8" /> },
                  { title: localT('prob3Title'), desc: localT('prob3Desc'), icon: <AlertCircle className="w-8 h-8" /> },
                  { title: localT('prob4Title'), desc: localT('prob4Desc'), icon: <Sliders className="w-8 h-8" /> },
                  { title: localT('prob5Title'), desc: localT('prob5Desc'), icon: <TrendingDown className="w-8 h-8" /> }
                ].map((item, i) => (
                  <div key={i} className="bg-white p-6 border-4 border-black flex gap-6 items-start hover:-translate-y-1 hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all">
                    <div className="mt-1 flex-shrink-0 text-black">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-black uppercase text-lg mb-2">{item.title}</h4>
                      <p className="font-['JetBrains_Mono'] text-gray-700 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-neutral-400 translate-x-4 translate-y-4 border-4 border-black" />
              <img 
                src="/imgs/knowledge/low-moq-startup-packaging-pain-points.jpg" 
                alt="Startup Packaging Pain Points" 
                className="relative z-10 border-4 border-black w-full shadow-2xl object-cover aspect-square"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ: Startup Intelligence */}
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
            <NeoButton variant="primary" to="/sample" className="!bg-white !text-black">{t(`${p}.cta.btnReview`)}</NeoButton>
            <NeoButton variant="secondary" className="!border-white !text-white" href="https://calendly.com/30-min-free-packaging-consultancy">
              {t(`${p}.cta.btnEngineer`)}
            </NeoButton>
          </div>
        </div>
      </section>
    </PouchLayout>
  )
}

export default PouchLowMOQStartupPackagingPage
