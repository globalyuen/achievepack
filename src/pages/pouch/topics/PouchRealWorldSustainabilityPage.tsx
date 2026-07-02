import React from 'react'
import { useTranslation } from 'react-i18next'
import { Helmet } from 'react-helmet-async'
import { BarChart3, Package, CheckCircle, Award, Zap, Globe, Factory, Recycle, ArrowLeftRight, TrendingUp, ShoppingBag, Target, Shield, MessageCircle, Thermometer, Wind, Droplets, Microscope, Beaker, Trash2, FileSearch } from 'lucide-react'
import PouchLayout from '../../../components/pouch/PouchLayout'
import { NeoButton, NeoCard, NeoBadge } from '../../../components/pouch/PouchUI'
import { getBaseUrl } from '../../../utils/domain'
import ClickableImage from '../../../components/ClickableImage'

export const translations = {
  en: {
    sectionTitle: "5 Common Real World Sustainability Problems (And Solutions)",
    problems: [
      { title: "Greenwashing Risks", desc: "Solution: Transparent supply chain tracking and verifiable LCA data." },
      { title: "Compliance with changing EPR laws", desc: "Solution: Utilizing standardized reporting and pre-certified sustainable materials." },
      { title: "High cost of sustainable materials", desc: "Solution: Optimized material science reducing waste and thickness without sacrificing barrier properties." },
      { title: "Unreliable end-of-life processing", desc: "Solution: Designing mono-materials matching local infrastructure." },
      { title: "Slower production speeds with eco-materials", desc: "Solution: Specialized coatings engineered for high-speed filling lines." }
    ]
  },
  es: {
    sectionTitle: "5 problemas comunes de sostenibilidad en el mundo real (y soluciones)",
    problems: [
      { title: "Riesgos de lavado verde", desc: "Solución: Seguimiento transparente de la cadena de suministro y datos de ACV verificables." },
      { title: "Cumplimiento de las cambiantes leyes de REP", desc: "Solución: Uso de informes estandarizados y materiales sostenibles precertificados." },
      { title: "Alto costo de los materiales sostenibles", desc: "Solución: Ciencia de materiales optimizada que reduce el desperdicio y el grosor sin sacrificar las propiedades de barrera." },
      { title: "Procesamiento de fin de vida útil poco confiable", desc: "Solución: Diseño de monomateriales que se adapten a la infraestructura local." },
      { title: "Velocidades de producción más lentas con materiales ecológicos", desc: "Solución: Recubrimientos especializados diseñados para líneas de llenado de alta velocidad." }
    ]
  },
  fr: {
    sectionTitle: "5 problèmes courants de durabilité dans le monde réel (et solutions)",
    problems: [
      { title: "Risques d'écoblanchiment", desc: "Solution : Suivi transparent de la chaîne d'approvisionnement et données d'ACV vérifiables." },
      { title: "Conformité aux lois REP changeantes", desc: "Solution : Utilisation de rapports standardisés et de matériaux durables pré-certifiés." },
      { title: "Coût élevé des matériaux durables", desc: "Solution : Science des matériaux optimisée réduisant les déchets et l'épaisseur sans sacrifier les propriétés barrières." },
      { title: "Traitement de fin de vie non fiable", desc: "Solution : Conception de mono-matériaux adaptés aux infrastructures locales." },
      { title: "Vitesses de production plus lentes avec des éco-matériaux", desc: "Solution : Revêtements spécialisés conçus pour les lignes de remplissage à grande vitesse." }
    ]
  },
  'zh-TW': {
    sectionTitle: "5 個常見的現實世界永續性問題（與解決方案）",
    problems: [
      { title: "漂綠風險", desc: "解決方案：透明的供應鏈追蹤與可驗證的生命週期評估數據。" },
      { title: "應對不斷變化的 EPR 法規", desc: "解決方案：利用標準化報告與預先認證的永續材料。" },
      { title: "永續材料成本高昂", desc: "解決方案：優化材料科學，在不犧牲阻隔性的前提下減少浪費與厚度。" },
      { title: "產品報廢處理不可靠", desc: "解決方案：設計符合當地基礎設施的單一材質包裝。" },
      { title: "環保材料導致生產速度變慢", desc: "解決方案：專為高速填充線設計的特殊塗層。" }
    ]
  }
};

export const sectionsForPouch = translations;
export const sectionsForAchieve = translations;

const PouchRealWorldSustainabilityPage: React.FC = () => {
  const { t, i18n } = useTranslation()
  const p = 'pouchRealWorldSustainabilityPage'
  const baseUrl = getBaseUrl()
  
  const pageT = translations[i18n.language as keyof typeof translations] || translations.en;
  
  const IMPACT_METRICS = [
    { label: t(`${p}.metrics.carbonProof.label`), value: t(`${p}.metrics.carbonProof.value`), unit: t(`${p}.metrics.carbonProof.unit`), desc: t(`${p}.metrics.carbonProof.desc`) },
    { label: t(`${p}.metrics.landfillAvoid.label`), value: t(`${p}.metrics.landfillAvoid.value`), unit: t(`${p}.metrics.landfillAvoid.unit`), desc: t(`${p}.metrics.landfillAvoid.desc`) },
    { label: t(`${p}.metrics.eprMitigation.label`), value: t(`${p}.metrics.eprMitigation.value`), unit: t(`${p}.metrics.eprMitigation.unit`), desc: t(`${p}.metrics.eprMitigation.desc`) },
    { label: t(`${p}.metrics.compliance.label`), value: t(`${p}.metrics.compliance.value`), unit: t(`${p}.metrics.compliance.unit`), desc: t(`${p}.metrics.compliance.desc`) }
  ]

  return (
    <PouchLayout>
      <Helmet>
        <title>{t(`${p}.meta.title`)}</title>
        <meta name="description" content={t(`${p}.meta.description`)} />
        <link rel="canonical" href={`${baseUrl}/topics/real-world-sustainability`} />
        <meta name="keywords" content={t(`${p}.meta.keywords`)} />
      </Helmet>

      {/* Hero Section */}
      <section className="relative pt-12 pb-24 border-b-4 border-black bg-[radial-gradient(#171717_1px,transparent_1px)] [background-size:24px_24px] bg-neutral-50">
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
                src="/imgs/illustrated/a_corporate_sustainability_variation_1_1739210.webp" 
                alt={t(`${p}.hero.imageAlt`)} 
                className="relative z-10 border-4 border-black w-full shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Engineering: The LCA Framework */}
      <section className="py-24 bg-white border-b-4 border-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="absolute inset-0 bg-neutral-400 translate-x-4 translate-y-4 border-4 border-black" />
              <ClickableImage 
                src="/imgs/illustrated/a_pet_food_hero_v3_7652587.webp" 
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
                {IMPACT_METRICS.map((p, i) => (
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

      {/* Technical: Regulatory Compliance */}
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

      {/* Supply Chain Verification */}
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
                  <FileSearch className="w-12 h-12 flex-shrink-0" />
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
                src="/imgs/illustrated/a_all_options_card_v3_3800862.webp" 
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
          <div className="text-center mb-16">
            <h2 className="font-black text-4xl md:text-6xl uppercase italic">
              {pageT.sectionTitle}
            </h2>
          </div>
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="absolute inset-0 bg-neutral-400 translate-x-4 translate-y-4 border-4 border-black" />
              <ClickableImage 
                src="/imgs/knowledge/real-world-sustainability-pain-points.jpg"
                alt={pageT.sectionTitle}
                className="relative z-10 border-4 border-black w-full shadow-2xl"
              />
            </div>
            <div className="space-y-6">
              {pageT.problems.map((prob, idx) => (
                <div key={idx} className="bg-white border-4 border-black p-6 flex gap-4 items-start shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 transition-transform">
                  <div className="bg-black text-[#D4FF00] p-2 flex-shrink-0 mt-1">
                    <CheckCircle className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-black uppercase text-xl mb-2">{prob.title}</h4>
                    <p className="font-['JetBrains_Mono'] text-gray-700 leading-relaxed">{prob.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ: Technical Sustainability */}
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
                <p className="font-['JetBrains_Mono'] text-gray-600 pl-11">{faq.a}</p>
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

export default PouchRealWorldSustainabilityPage
