import React from 'react'
import { useTranslation } from 'react-i18next'
import { Helmet } from 'react-helmet-async'
import { Recycle, Package, CheckCircle, Award, Zap, Globe, Factory, BarChart3, ArrowLeftRight, TrendingUp, ShoppingBag, Target, Shield, MessageCircle, Thermometer, Wind, Droplets, Microscope, Beaker, Layers, FileSearch } from 'lucide-react'
import PouchLayout from '../../../components/pouch/PouchLayout'
import { NeoButton, NeoCard, NeoBadge } from '../../../components/pouch/PouchUI'
import { getBaseUrl } from '../../../utils/domain'
import ClickableImage from '../../../components/ClickableImage'

const painPointsTranslations: Record<string, any> = {
  en: {
    title: "5 Common Mono-PE Pouch Problems (And Solutions)",
    badge: "Engineering Insights",
    items: [
      { title: "Poor Stiffness & Machinability", desc: "Solution: Incorporating MDO-PE (Machine Direction Orientation PE) to increase rigidity and enable high-speed packaging.", icon: "Factory" },
      { title: "Weak Barrier Properties", desc: "Solution: EVOH co-extrusion or ultra-thin ALOX/SiOX coating that maintains recyclability while protecting shelf life.", icon: "Shield" },
      { title: "Compromised Heat Sealing", desc: "Solution: Multi-layer PE design with a low-temperature sealing inner layer and a high-heat resistant outer layer.", icon: "Thermometer" },
      { title: "Poor Printing Quality", desc: "Solution: Specialized surface treatment and high-tension PE films to ensure vivid colors and crisp graphics.", icon: "Droplets" },
      { title: "Puncture Resistance", desc: "Solution: Utilizing advanced metallocene PE blends (mPE) to enhance toughness and prevent leaks.", icon: "Target" }
    ]
  },
  es: {
    title: "5 Problemas Comunes de Bolsas Mono-PE (Y Soluciones)",
    badge: "Perspectivas de Ingeniería",
    items: [
      { title: "Poca Rigidez y Maquinabilidad", desc: "Solución: Incorporar MDO-PE (PE con Orientación en Dirección de Máquina) para aumentar la rigidez.", icon: "Factory" },
      { title: "Propiedades de Barrera Débiles", desc: "Solución: Coextrusión de EVOH o recubrimiento ultrafino de ALOX/SiOX que mantiene la reciclabilidad.", icon: "Shield" },
      { title: "Sellado Térmico Comprometido", desc: "Solución: Diseño de PE multicapa con una capa de sellado a baja temperatura y una capa exterior resistente al calor.", icon: "Thermometer" },
      { title: "Mala Calidad de Impresión", desc: "Solución: Tratamiento superficial especializado y películas de PE de alta tensión para gráficos nítidos.", icon: "Droplets" },
      { title: "Resistencia a la Perforación", desc: "Solución: Uso de mezclas avanzadas de PE metaloceno (mPE) para mejorar la dureza y prevenir fugas.", icon: "Target" }
    ]
  },
  fr: {
    title: "5 Problèmes Courants des Sachets Mono-PE (Et Solutions)",
    badge: "Perspectives d'Ingénierie",
    items: [
      { title: "Faible Rigidité et Usinabilité", desc: "Solution: Intégration de MDO-PE (PE à orientation dans le sens de la machine) pour augmenter la rigidité.", icon: "Factory" },
      { title: "Faibles Propriétés Barrières", desc: "Solution: Co-extrusion d'EVOH ou revêtement ultra-fin ALOX/SiOX qui maintient la recyclabilité.", icon: "Shield" },
      { title: "Scellage Thermique Compromis", desc: "Solution: Conception PE multicouche avec une couche de scellage basse température et une couche extérieure résistante à la chaleur.", icon: "Thermometer" },
      { title: "Mauvaise Qualité d'Impression", desc: "Solution: Traitement de surface spécialisé et films PE haute tension pour des graphismes nets.", icon: "Droplets" },
      { title: "Résistance à la Perforation", desc: "Solution: Utilisation de mélanges de PE métallocène (mPE) avancés pour améliorer la ténacité.", icon: "Target" }
    ]
  },
  'zh-TW': {
    title: "單一PE材質包裝袋的5個常見問題（與解決方案）",
    badge: "工程洞察",
    items: [
      { title: "挺度與加工性差", desc: "解決方案：引入 MDO-PE（機器方向延伸 PE）以增加剛性，實現高速包裝。", icon: "Factory" },
      { title: "阻隔性能弱", desc: "解決方案：EVOH 共擠或超薄 ALOX/SiOX 塗層，在保持可回收性的同時延長保質期。", icon: "Shield" },
      { title: "熱封性能受損", desc: "解決方案：多層 PE 設計，包含低溫熱封內層與耐高溫外層。", icon: "Thermometer" },
      { title: "印刷品質不佳", desc: "解決方案：專業表面處理與高張力 PE 薄膜，確保色彩鮮豔與圖案清晰。", icon: "Droplets" },
      { title: "抗穿刺性不足", desc: "解決方案：採用先進的茂金屬 PE (mPE) 混合材料增強韌性，防止漏液。", icon: "Target" }
    ]
  }
}

const getIcon = (name: string) => {
  switch (name) {
    case 'Factory': return <Factory className="w-8 h-8" />
    case 'Shield': return <Shield className="w-8 h-8" />
    case 'Thermometer': return <Thermometer className="w-8 h-8" />
    case 'Droplets': return <Droplets className="w-8 h-8" />
    case 'Target': return <Target className="w-8 h-8" />
    default: return <CheckCircle className="w-8 h-8" />
  }
}

const PouchMonoPEPouchesPage: React.FC = () => {
  const { t, i18n } = useTranslation()
  const p = 'pouchMonoPEPouchesPage'
  const baseUrl = getBaseUrl()
  const localT = painPointsTranslations[i18n.language] || painPointsTranslations['en']
  
  const MONO_METRICS = [
    { label: t(`${p}.metrics.recyclability.label`), value: t(`${p}.metrics.recyclability.value`), unit: t(`${p}.metrics.recyclability.unit`), desc: t(`${p}.metrics.recyclability.desc`) },
    { label: t(`${p}.metrics.stiffness.label`), value: t(`${p}.metrics.stiffness.value`), unit: t(`${p}.metrics.stiffness.unit`), desc: t(`${p}.metrics.stiffness.desc`) },
    { label: t(`${p}.metrics.oxygen.label`), value: t(`${p}.metrics.oxygen.value`), unit: t(`${p}.metrics.oxygen.unit`), desc: t(`${p}.metrics.oxygen.desc`) },
    { label: t(`${p}.metrics.sealStrength.label`), value: t(`${p}.metrics.sealStrength.value`), unit: t(`${p}.metrics.sealStrength.unit`), desc: t(`${p}.metrics.sealStrength.desc`) }
  ]

  return (
    <PouchLayout>
      <Helmet>
        <title>{t(`${p}.meta.title`)}</title>
        <meta name="description" content={t(`${p}.meta.description`)} />
        <link rel="canonical" href={`${baseUrl}/topics/mono-pe-pouches`} />
        <meta name="keywords" content={t(`${p}.meta.keywords`)} />
      </Helmet>

      {/* Hero Section */}
      <section className="relative pt-12 pb-24 border-b-4 border-black bg-[radial-gradient(#1e3a8a_1px,transparent_1px)] [background-size:24px_24px] bg-blue-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-left">
              <NeoBadge color="blue">{t(`${p}.hero.badge`)}</NeoBadge>
              <h1 className="mt-8 font-black text-6xl md:text-8xl leading-none uppercase italic">
                {t(`${p}.hero.titlePart1`)}<br/>
                {t(`${p}.hero.titlePart2`)}<br/>
                <span className="text-blue-800 drop-shadow-[4px_4px_0px_rgba(212,255,0,1)]">{t(`${p}.hero.titlePart3`)}</span>
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
              <div className="absolute inset-0 bg-blue-400 translate-x-4 translate-y-4 border-4 border-black" />
              <ClickableImage 
                src="/imgs/topics/mono-pe-recyclable-hero.png" 
                alt={t(`${p}.hero.imageAlt`)} 
                className="relative z-10 border-4 border-black w-full shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Engineering: MDO-PE Stiffness */}
      <section className="py-24 bg-white border-b-4 border-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="absolute inset-0 bg-blue-400 translate-x-4 translate-y-4 border-4 border-black" />
              <ClickableImage 
                src="/imgs/seo-photos/a_mono_recyclable_certification_compliance_7572715.webp" 
                alt={t(`${p}.engineering.imageAlt`)} 
                className="relative z-10 border-4 border-black w-full shadow-2xl"
              />
            </div>
            <div>
              <NeoBadge color="magenta">{t(`${p}.engineering.badge`)}</NeoBadge>
              <h2 className="font-black text-5xl md:text-7xl mt-6 uppercase leading-tight italic">
                {t(`${p}.engineering.titlePart1`)}<br/>
                {t(`${p}.engineering.titlePart2`)}
              </h2>
              <p className="mt-8 text-xl text-gray-600 font-['JetBrains_Mono'] leading-relaxed">
                {t(`${p}.engineering.description`)}
              </p>
              <div className="mt-8 grid grid-cols-2 gap-4">
                {MONO_METRICS.map((p, i) => (
                  <div key={i} className="bg-white border-4 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 transition-all">
                    <h4 className="font-black uppercase text-xs mb-1 text-blue-700">{p.label}</h4>
                    <p className="text-xl font-black">{p.value} <span className="text-[10px] opacity-60 font-normal">{p.unit}</span></p>
                    <p className="text-[10px] font-bold opacity-60">{p.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Deep Dive: Barrier Architecture */}
      <section className="py-24 bg-black text-white border-b-4 border-black">
        <div className="max-w-7xl mx-auto px-6">
          <NeoBadge color="lime">{t(`${p}.tech.badge`)}</NeoBadge>
          <h2 className="font-black text-5xl md:text-8xl mt-6 uppercase leading-none italic mb-16">
            {t(`${p}.tech.titlePart1`)}<br/>
            {t(`${p}.tech.titlePart2`)}
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="border-l-4 border-blue-500 pl-8 py-4">
              <h3 className="text-3xl font-black uppercase mb-4">{t(`${p}.tech.item1Title`)}</h3>
              <p className="text-lg font-['JetBrains_Mono'] opacity-70 leading-relaxed">
                {t(`${p}.tech.item1Desc`)}
              </p>
            </div>

            <div className="border-l-4 border-blue-500 pl-8 py-4">
              <h3 className="text-3xl font-black uppercase mb-4">{t(`${p}.tech.item2Title`)}</h3>
              <p className="text-lg font-['JetBrains_Mono'] opacity-70 leading-relaxed">
                {t(`${p}.tech.item2Desc`)}
              </p>
            </div>

            <div className="border-l-4 border-blue-500 pl-8 py-4">
              <h3 className="text-3xl font-black uppercase mb-4">{t(`${p}.tech.item3Title`)}</h3>
              <p className="text-lg font-['JetBrains_Mono'] opacity-70 leading-relaxed">
                {t(`${p}.tech.item3Desc`)}
              </p>
            </div>

            <div className="border-l-4 border-blue-500 pl-8 py-4">
              <h3 className="text-3xl font-black uppercase mb-4">{t(`${p}.tech.item4Title`)}</h3>
              <p className="text-lg font-['JetBrains_Mono'] opacity-70 leading-relaxed">
                {t(`${p}.tech.item4Desc`)}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Recyclability Verification */}
      <section className="py-24 bg-blue-50 border-b-4 border-black">
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
                  <Recycle className="w-12 h-12 flex-shrink-0" />
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
              <div className="absolute inset-0 bg-blue-400 translate-x-4 translate-y-4 border-4 border-black" />
              <ClickableImage 
                src="/imgs/topics/mono-pe-recyclable-hero.png" 
                alt={t(`${p}.science.imageAlt`)} 
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
              <NeoBadge color="magenta">{localT.badge}</NeoBadge>
              <h2 className="font-black text-5xl md:text-6xl mt-6 uppercase leading-tight italic">
                {localT.title}
              </h2>
              <div className="mt-12 space-y-4">
                {localT.items.map((item: any, i: number) => (
                  <div key={i} className="bg-white p-6 border-4 border-black flex gap-6 items-start hover:translate-x-1 hover:translate-y-1 transition-transform shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                    <div className="text-blue-600 flex-shrink-0 mt-1">
                      {getIcon(item.icon)}
                    </div>
                    <div>
                      <h4 className="font-black uppercase text-xl mb-2">{item.title}</h4>
                      <p className="font-['JetBrains_Mono'] text-gray-700 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-yellow-400 translate-x-4 translate-y-4 border-4 border-black" />
              <ClickableImage 
                src="/imgs/knowledge/mono-pe-pouches-pain-points.jpg" 
                alt="Mono PE Pouches Pain Points" 
                className="relative z-10 border-4 border-black w-full shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ: Technical Mono-PE */}
      <section className="py-24 bg-[#F0F0F0] border-b-4 border-black">
        <div className="max-w-4xl mx-auto px-6">
          <NeoBadge color="magenta">{t(`${p}.faq.badge`)}</NeoBadge>
          <h2 className="font-black text-5xl md:text-7xl mt-6 uppercase leading-tight italic mb-12">
            {t(`${p}.faq.titlePart1`)}
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
      <section className="py-24 bg-blue-900 text-white border-b-4 border-black">
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
            <NeoButton variant="primary" to="/sample" className="!bg-white !text-blue-900">{t(`${p}.cta.btnReview`)}</NeoButton>
            <NeoButton variant="secondary" className="!border-white !text-white" href="https://calendly.com/30-min-free-packaging-consultancy">
              {t(`${p}.cta.btnEngineer`)}
            </NeoButton>
          </div>
        </div>
      </section>
    </PouchLayout>
  )
}

export default PouchMonoPEPouchesPage
