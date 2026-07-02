import React from 'react'
import { useTranslation } from 'react-i18next'
import { Helmet } from 'react-helmet-async'
import { BarChart3, Package, CheckCircle, Award, Zap, Globe, Factory, Recycle, ArrowLeftRight, TrendingUp, ShoppingBag, Target, Shield, MessageCircle, Thermometer, Wind, Droplets, Microscope, Beaker, Trash2, Leaf } from 'lucide-react'
import PouchLayout from '../../../components/pouch/PouchLayout'
import { NeoButton, NeoCard, NeoBadge } from '../../../components/pouch/PouchUI'
import { getBaseUrl } from '../../../utils/domain'
import ClickableImage from '../../../components/ClickableImage'

const translations = {
  en: {
    painPoints: {
      title: "5 Common Reduce Packaging Waste Problems (And Solutions)",
      items: [
        { title: "Overpackaging & Excessive Void Fill", desc: "Solution: Custom-sized flexible pouches fit the product perfectly, eliminating the need for dunnage and reducing volumetric weight." },
        { title: "Unrecyclable Multi-Layer Materials", desc: "Solution: Mono-material PE/PP structures provide high barrier properties while being 100% recyclable in existing streams." },
        { title: "High Carbon Footprint in Transport", desc: "Solution: Lightweight pouches reduce transport emissions by up to 80% due to better packing density compared to rigid containers." },
        { title: "Food Spoilage & Reduced Shelf Life", desc: "Solution: Advanced high-barrier EVOH laminations protect against oxygen and moisture, extending shelf life and preventing food waste." },
        { title: "Lack of Circularity (End-of-Life)", desc: "Solution: Implementing Post-Consumer Recycled (PCR) content resins into packaging layers creates a closed-loop packaging lifecycle." }
      ]
    }
  },
  es: {
    painPoints: {
      title: "5 Problemas Comunes para Reducir el Desperdicio de Empaques (Y Soluciones)",
      items: [
        { title: "Sobreempaque y Relleno Excesivo", desc: "Solución: Las bolsas flexibles a medida se adaptan perfectamente, eliminando material de relleno y reduciendo el peso volumétrico." },
        { title: "Materiales Multicapa No Reciclables", desc: "Solución: Estructuras monomateriales de PE/PP ofrecen alta barrera siendo 100% reciclables." },
        { title: "Alta Huella de Carbono en Transporte", desc: "Solución: Las bolsas ligeras reducen emisiones de transporte hasta un 80% gracias a su mejor densidad de empaque." },
        { title: "Deterioro de Alimentos", desc: "Solución: Laminaciones avanzadas EVOH protegen contra oxígeno y humedad, extendiendo la vida útil." },
        { title: "Falta de Circularidad", desc: "Solución: Integrar resinas recicladas posconsumo (PCR) crea un ciclo de vida de empaque cerrado." }
      ]
    }
  },
  fr: {
    painPoints: {
      title: "5 Problèmes Courants liés à la Réduction des Déchets (Et Solutions)",
      items: [
        { title: "Suremballage et Remplissage Excessif", desc: "Solution : Les sachets flexibles sur mesure s'adaptent parfaitement, éliminant le calage et réduisant le poids." },
        { title: "Matériaux Multicouches Non Recyclables", desc: "Solution : Les structures mono-matériaux PE/PP offrent une haute barrière tout en étant 100% recyclables." },
        { title: "Forte Empreinte Carbone en Transport", desc: "Solution : Les sachets légers réduisent les émissions jusqu'à 80% grâce à une meilleure densité d'emballage." },
        { title: "Détérioration des Aliments", desc: "Solution : Les laminages avancés EVOH protègent contre l'oxygène et l'humidité, prolongeant la durée de conservation." },
        { title: "Manque de Circularité", desc: "Solution : L'intégration de résines recyclées post-consommation (PCR) crée un cycle de vie fermé." }
      ]
    }
  },
  'zh-TW': {
    painPoints: {
      title: "5 個常見減少包裝浪費的問題 (及解決方案)",
      items: [
        { title: "過度包裝和過多的填充物", desc: "解決方案：定制尺寸的軟包裝袋完全貼合產品，消除對緩衝材料的需求並減少體積重量。" },
        { title: "不可回收的多層材料", desc: "解決方案：單一材質 PE/PP 結構提供高阻隔性能，同時在現有回收系統中 100% 可回收。" },
        { title: "運輸碳足跡高", desc: "解決方案：輕量化的軟袋比硬質容器具有更好的包裝密度，可將運輸碳排放減少高達 80%。" },
        { title: "食物腐敗及保質期縮短", desc: "解決方案：先進的 EVOH 高阻隔塗層可防止氧氣和水分滲透，延長保質期並防止食物浪費。" },
        { title: "缺乏循環性 (生命週期結束)", desc: "解決方案：在包裝層中加入消費後回收 (PCR) 樹脂材料，打造閉環的包裝生命週期。" }
      ]
    }
  }
} as const;

const PouchReducePackagingWasteGuidePage: React.FC = () => {
  const { t, i18n } = useTranslation()
  const p = 'pouchReducePackagingWasteGuidePage'
  const baseUrl = getBaseUrl()
  
  const currentLang = (i18n.language || 'en') as keyof typeof translations;
  const tLocal = translations[currentLang] || translations['en'];
  
  const WASTE_METRICS = [
    { label: t(`${p}.metrics.massReduct.label`), value: t(`${p}.metrics.massReduct.value`), unit: t(`${p}.metrics.massReduct.unit`), desc: t(`${p}.metrics.massReduct.desc`) },
    { label: t(`${p}.metrics.lcaImpact.label`), value: t(`${p}.metrics.lcaImpact.value`), unit: t(`${p}.metrics.lcaImpact.unit`), desc: t(`${p}.metrics.lcaImpact.desc`) },
    { label: t(`${p}.metrics.logistics.label`), value: t(`${p}.metrics.logistics.value`), unit: t(`${p}.metrics.logistics.unit`), desc: t(`${p}.metrics.logistics.desc`) },
    { label: t(`${p}.metrics.circular.label`), value: t(`${p}.metrics.circular.value`), unit: t(`${p}.metrics.circular.unit`), desc: t(`${p}.metrics.circular.desc`) }
  ]

  return (
    <PouchLayout>
      <Helmet>
        <title>{t(`${p}.meta.title`)}</title>
        <meta name="description" content={t(`${p}.meta.description`)} />
        <link rel="canonical" href={`${baseUrl}/topics/reduce-packaging-waste`} />
        <meta name="keywords" content={t(`${p}.meta.keywords`)} />
      </Helmet>

      {/* Hero Section */}
      <section className="relative pt-12 pb-24 border-b-4 border-black bg-[radial-gradient(#1e1b4b_1px,transparent_1px)] [background-size:24px_24px] bg-neutral-50">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <NeoBadge color="blue">{t(`${p}.hero.badge`)}</NeoBadge>
          <h1 className="mt-8 font-black text-6xl md:text-9xl leading-none uppercase italic">
            {t(`${p}.hero.titlePart1`)}<br/>
            {t(`${p}.hero.titlePart2`)}<br/>
            <span className="text-black drop-shadow-[4px_4px_0px_rgba(212,255,0,1)]">{t(`${p}.hero.titlePart3`)}</span>
          </h1>
          <p className="mt-8 text-xl md:text-2xl font-bold font-['JetBrains_Mono'] text-gray-800 max-w-3xl mx-auto bg-white border-4 border-black p-6 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
            {t(`${p}.hero.description`)}
          </p>
          <div className="flex flex-wrap justify-center gap-6 mt-12">
            <NeoButton variant="primary" to="/products">{t(`${p}.hero.btnBrowse`)}</NeoButton>
            <NeoButton variant="secondary" to="/sample">{t(`${p}.hero.btnRequest`)}</NeoButton>
          </div>
        </div>
      </section>

      {/* Engineering: The Waste Reduction Framework */}
      <section className="py-24 bg-white border-b-4 border-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="absolute inset-0 bg-neutral-400 translate-x-4 translate-y-4 border-4 border-black" />
              <ClickableImage 
                src="/imgs/illustrated/a_topic_01_eco_food_pkg_var_b_3398751.webp" 
                alt={t(`${p}.engineering.alt`)} 
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
                {WASTE_METRICS.map((item, i) => (
                  <div key={i} className="bg-white border-4 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 transition-all">
                    <h4 className="font-black uppercase text-xs mb-1 text-black">{item.label}</h4>
                    <p className="text-xl font-black">{item.value} <span className="text-[10px] opacity-60 font-normal">{item.unit}</span></p>
                    <p className="text-[10px] font-bold opacity-60">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical: The Lightweighting Stack */}
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
                  <BarChart3 className="w-12 h-12 flex-shrink-0" />
                  <div>
                    <h4 className="font-black uppercase">{t(`${p}.science.lcaTitle`)}</h4>
                    <p className="text-sm opacity-60">{t(`${p}.science.lcaDesc`)}</p>
                  </div>
                </div>
                <div className="bg-white p-6 border-4 border-black flex gap-6 items-center">
                  <TrendingUp className="w-12 h-12 flex-shrink-0" />
                  <div>
                    <h4 className="font-black uppercase">{t(`${p}.science.eprTitle`)}</h4>
                    <p className="text-sm opacity-60">{t(`${p}.science.eprDesc`)}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-neutral-400 translate-x-4 translate-y-4 border-4 border-black" />
              <ClickableImage 
                src="/imgs/illustrated/a_topic_02_dtc_pkg_var_c_7412861.webp" 
                alt={t(`${p}.science.alt`)} 
                className="relative z-10 border-4 border-black w-full shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 5 Common Problems Section */}
      <section className="py-24 bg-neutral-50 border-b-4 border-black">
        <div className="max-w-7xl mx-auto px-6">
          <NeoBadge color="orange">PAIN POINTS & SOLUTIONS</NeoBadge>
          <h2 className="font-black text-4xl md:text-6xl mt-6 uppercase leading-tight italic mb-12">
            {tLocal.painPoints.title}
          </h2>
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              {tLocal.painPoints.items.map((item: any, i: number) => {
                const icons = [<Package key="i1" />, <Recycle key="i2" />, <Globe key="i3" />, <Shield key="i4" />, <Leaf key="i5" />];
                return (
                  <div key={i} className="bg-white border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 transition-all">
                    <div className="flex items-center gap-4 mb-3">
                      <div className="w-10 h-10 bg-black text-white flex items-center justify-center shrink-0">
                        {icons[i]}
                      </div>
                      <h4 className="font-black text-lg uppercase leading-tight">{item.title}</h4>
                    </div>
                    <p className="font-['JetBrains_Mono'] text-gray-700 text-sm">{item.desc}</p>
                  </div>
                )
              })}
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-orange-400 translate-x-4 translate-y-4 border-4 border-black" />
              <ClickableImage 
                src="/imgs/knowledge/reduce-packaging-waste-pain-points.jpg" 
                alt="Reduce Packaging Waste Pain Points" 
                className="relative z-10 border-4 border-black w-full shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ: Waste Reduction Intelligence */}
      <section className="py-24 bg-white border-b-4 border-black">
        <div className="max-w-4xl mx-auto px-6">
          <NeoBadge color="magenta">{t(`${p}.faq.badge`)}</NeoBadge>
          <h2 className="font-black text-5xl md:text-7xl mt-6 uppercase leading-tight italic mb-12">
            {t(`${p}.faq.titlePart1`)}<br/>
            {t(`${p}.faq.titlePart2`)}
          </h2>
          <div className="space-y-4">
            {[
              { q: t(`${p}.faq.q1`), a: t(`${p}.faq.a1`) },
              { q: t(`${p}.faq.q2`), a: t(`${p}.faq.a2`) },
              { q: t(`${p}.faq.q3`), a: t(`${p}.faq.a3`) },
              { q: t(`${p}.faq.q4`), a: t(`${p}.faq.a4`) }
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
            <NeoButton variant="primary" to="/sample" className="!bg-white !text-black">{t(`${p}.cta.btnSample`)}</NeoButton>
            <NeoButton variant="secondary" className="!border-white !text-white" href="https://calendly.com/30-min-free-packaging-consultancy">
              {t(`${p}.cta.btnSpeak`)}
            </NeoButton>
          </div>
        </div>
      </section>
    </PouchLayout>
  )
}

export default PouchReducePackagingWasteGuidePage
