import React from 'react'
import { useTranslation } from 'react-i18next'
import { Helmet } from 'react-helmet-async'
import { BarChart3, Package, CheckCircle, Award, Zap, Globe, Factory, Recycle, ArrowLeftRight, TrendingUp, ShoppingBag, Target, Shield, MessageCircle, Thermometer, Wind, Droplets, Microscope, Beaker, Truck, Sparkles, AlertTriangle } from 'lucide-react'
import PouchLayout from '../../../components/pouch/PouchLayout'
import { NeoButton, NeoCard, NeoBadge } from '../../../components/pouch/PouchUI'
import { getBaseUrl } from '../../../utils/domain'
import ClickableImage from '../../../components/ClickableImage'

const localTranslations = {
  en: {
    title: "5 Common DTC Packaging Problems (And Solutions)",
    badge: "Troubleshooting",
    problems: [
      { title: "High Dimensional Weight (DIM) Costs", desc: "Oversized boxes ship mostly air, inflating freight costs.", solution: "Switch to flexible pouches to reduce dead space and lower shipping fees by up to 40%." },
      { title: "Poor Unboxing Experience with Eco-Materials", desc: "Some sustainable materials look cheap or lack durability.", solution: "Use premium matte compostable or recyclable finishes that maintain high-end aesthetics." },
      { title: "Product Damage During Transit", desc: "Flimsy eco-packaging fails under shipping stress.", solution: "Implement high-barrier films with durable seals that resist punctures and impact." },
      { title: "Confusing Disposal Instructions", desc: "Consumers don't know how to recycle or compost the packaging.", solution: "Print clear, scannable QR codes and minimalist icons for precise disposal guidelines." },
      { title: "High MOQs for Custom Eco-Prints", desc: "Brands are locked into large orders for sustainable custom packaging.", solution: "Utilize digital printing to allow low MOQs and rapid iteration of eco-friendly designs." }
    ]
  },
  es: {
    title: "5 Problemas Comunes de Empaque DTC (y Soluciones)",
    badge: "Solución de problemas",
    problems: [
      { title: "Altos Costos por Peso Dimensional (DIM)", desc: "Las cajas de gran tamaño envían principalmente aire, inflando los costos.", solution: "Cambie a bolsas flexibles para reducir el espacio muerto y los costos de envío hasta un 40%." },
      { title: "Mala Experiencia de Unboxing con Eco-Materiales", desc: "Algunos materiales sostenibles se ven baratos o carecen de durabilidad.", solution: "Use acabados mate premium reciclables o compostables que mantengan la estética de alta gama." },
      { title: "Daños del Producto Durante el Tránsito", desc: "El eco-empaque endeble falla bajo el estrés del envío.", solution: "Implemente películas de alta barrera con sellos duraderos que resistan pinchazos e impactos." },
      { title: "Instrucciones de Eliminación Confusas", desc: "Los consumidores no saben cómo reciclar o compostar el empaque.", solution: "Imprima códigos QR claros e íconos minimalistas para pautas de eliminación precisas." },
      { title: "Altos MOQ para Impresiones Ecológicas", desc: "Las marcas se ven obligadas a realizar grandes pedidos de empaques sostenibles.", solution: "Utilice la impresión digital para permitir bajos MOQ y una rápida iteración de diseños." }
    ]
  },
  fr: {
    title: "5 Problèmes Courants d'Emballage DTC (et Solutions)",
    badge: "Dépannage",
    problems: [
      { title: "Coûts de Poids Dimensionnel (DIM) Élevés", desc: "Les boîtes surdimensionnées expédient surtout de l'air, gonflant les coûts.", solution: "Passez aux sachets flexibles pour réduire l'espace mort et réduire les frais de port jusqu'à 40%." },
      { title: "Mauvaise Expérience de Déballage avec les Éco-Matériaux", desc: "Certains matériaux durables ont l'air bon marché ou manquent de durabilité.", solution: "Utilisez des finitions mates premium compostables ou recyclables qui maintiennent une esthétique haut de gamme." },
      { title: "Dommages aux Produits Pendant le Transport", desc: "L'éco-emballage fragile échoue sous la contrainte de l'expédition.", solution: "Mettez en œuvre des films à haute barrière avec des scellés durables qui résistent aux perforations et aux impacts." },
      { title: "Instructions d'Élimination Confuses", desc: "Les consommateurs ne savent pas comment recycler ou composter l'emballage.", solution: "Imprimez des codes QR clairs et des icônes minimalistes pour des directives d'élimination précises." },
      { title: "MOQ Élevés pour les Impressions Écologiques", desc: "Les marques sont contraintes de passer de grosses commandes d'emballages durables.", solution: "Utilisez l'impression numérique pour permettre de faibles MOQ et une itération rapide des conceptions." }
    ]
  },
  'zh-TW': {
    title: "5 個常見的 DTC 包裝問題（與解決方案）",
    badge: "疑難排解",
    problems: [
      { title: "高材積重量 (DIM) 成本", desc: "過大的紙箱主要運送的是空氣，使運費膨脹。", solution: "改用軟包裝袋以減少死角，降低高達 40% 的運費。" },
      { title: "環保材質的開箱體驗不佳", desc: "某些永續材料看起來廉價或缺乏耐用性。", solution: "使用保持高端美感的高級霧面可堆肥或可回收飾面。" },
      { title: "運輸過程中產品損壞", desc: "脆弱的環保包裝在運輸壓力下容易破損。", solution: "採用具有耐用密封的高阻隔薄膜，可抗穿刺和衝擊。" },
      { title: "令人困惑的丟棄指示", desc: "消費者不知道如何回收或堆肥包裝。", solution: "印製清晰的可掃描 QR 碼和極簡圖示，提供準確的丟棄指南。" },
      { title: "客製化環保印刷的最低起訂量高", desc: "品牌被迫為永續客製化包裝下大訂單。", solution: "利用數位印刷允許低最低起訂量和環保設計的快速迭代。" }
    ]
  }
}

const PouchDTCSustainablePackagingPage: React.FC = () => {
  const { t, i18n } = useTranslation()
  const currentLang = (i18n.language && localTranslations[i18n.language as keyof typeof localTranslations]) ? (i18n.language as keyof typeof localTranslations) : 'en'
  const localeData = localTranslations[currentLang]
  const p = 'pouchDTCSustainablePackagingPage'
  const baseUrl = getBaseUrl()
  
  const DTC_METRICS = [
    { label: t(`${p}.metrics.dimWeight.label`), value: t(`${p}.metrics.dimWeight.value`), unit: t(`${p}.metrics.dimWeight.unit`), desc: t(`${p}.metrics.dimWeight.desc`) },
    { label: t(`${p}.metrics.freightSav.label`), value: t(`${p}.metrics.freightSav.value`), unit: t(`${p}.metrics.freightSav.unit`), desc: t(`${p}.metrics.freightSav.desc`) },
    { label: t(`${p}.metrics.unboxing.label`), value: t(`${p}.metrics.unboxing.value`), unit: t(`${p}.metrics.unboxing.unit`), desc: t(`${p}.metrics.unboxing.desc`) },
    { label: t(`${p}.metrics.moqEntry.label`), value: t(`${p}.metrics.moqEntry.value`), unit: t(`${p}.metrics.moqEntry.unit`), desc: t(`${p}.metrics.moqEntry.desc`) }
  ]

  return (
    <PouchLayout>
      <Helmet>
        <title>{t(`${p}.meta.title`)}</title>
        <meta name="description" content={t(`${p}.meta.description`)} />
        <link rel="canonical" href={`${baseUrl}/topics/dtc-sustainable-packaging`} />
        <meta name="keywords" content={t(`${p}.meta.keywords`)} />
      </Helmet>

      {/* Hero Section */}
      <section className="relative pt-12 pb-24 border-b-4 border-black bg-[radial-gradient(#1e3a8a_1px,transparent_1px)] [background-size:24px_24px] bg-neutral-50">
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
                src="/imgs/topics/minimalist-d2c-unboxing-hero.png" 
                alt={t(`${p}.hero.imageAlt`)} 
                className="relative z-10 border-4 border-black w-full shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Engineering: The DTC Framework */}
      <section className="py-24 bg-white border-b-4 border-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="absolute inset-0 bg-neutral-400 translate-x-4 translate-y-4 border-4 border-black" />
              <ClickableImage 
                src="/imgs/topics/minimalist-d2c-unboxing-hero.png" 
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
                {DTC_METRICS.map((p, i) => (
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

      {/* Technical: The Unboxing Tech Stack */}
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

      {/* Material Science Section */}
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
                  <Sparkles className="w-12 h-12 flex-shrink-0" />
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

      {/* Problems & Solutions Section */}
      <section className="py-24 bg-neutral-100 border-b-4 border-black">
        <div className="max-w-7xl mx-auto px-6">
          <NeoBadge color="magenta">{localeData.badge}</NeoBadge>
          <h2 className="font-black text-5xl md:text-7xl mt-6 uppercase leading-tight italic mb-12">
            {localeData.title}
          </h2>
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div className="space-y-6">
              {localeData.problems.map((prob, i) => (
                <div key={i} className="bg-white border-4 border-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all">
                  <h4 className="font-black text-xl uppercase mb-2 flex items-center gap-3">
                    <AlertTriangle className="w-6 h-6 text-black flex-shrink-0" />
                    {prob.title}
                  </h4>
                  <p className="font-['JetBrains_Mono'] text-gray-700 mb-4">{prob.desc}</p>
                  <div className="bg-[#D4FF00] p-4 border-2 border-black">
                    <p className="font-black uppercase text-sm mb-1">Solution:</p>
                    <p className="font-['JetBrains_Mono'] font-bold">{prob.solution}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="relative sticky top-24">
              <div className="absolute inset-0 bg-neutral-400 translate-x-4 translate-y-4 border-4 border-black" />
              <ClickableImage 
                src="/imgs/knowledge/dtc-sustainable-packaging-pain-points.jpg" 
                alt="DTC Sustainable Packaging Problems and Solutions" 
                className="relative z-10 border-4 border-black w-full shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ: DTC Intelligence */}
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

export default PouchDTCSustainablePackagingPage
