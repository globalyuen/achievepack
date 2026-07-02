import React from 'react'
import { useTranslation } from 'react-i18next'
import { Helmet } from 'react-helmet-async'
import { BarChart3, Package, CheckCircle, Award, Zap, Globe, Factory, Recycle, ArrowLeftRight, TrendingUp, ShoppingBag, Target, Shield, MessageCircle, Thermometer, Wind, Droplets, Microscope, Beaker } from 'lucide-react'
import PouchLayout from '../../../components/pouch/PouchLayout'
import { NeoButton, NeoCard, NeoBadge } from '../../../components/pouch/PouchUI'
import { getBaseUrl } from '../../../utils/domain'
import ClickableImage from '../../../components/ClickableImage'

const translations = {
  en: {
    problemsTitle: "5 Common Compostable Humidity Problems (And Solutions)",
    p1: { q: "Clumping Powders", a: "Use high-barrier metallized compostable films with ultra-low WVTR." },
    p2: { q: "Premature Degradation", a: "Implement a dual-layer bio-polymer structure with a moisture-resistant inner sealant." },
    p3: { q: "Brittle Packaging", a: "Incorporate plant-based plasticizers to maintain film flexibility across varying humidity levels." },
    p4: { q: "Loss of Flavor/Aroma", a: "Utilize EVOH-equivalent compostable barrier coatings to lock in aromatics." },
    p5: { q: "Ineffective Resealing", a: "Deploy precision-engineered, heavy-duty PLA zippers for airtight, repeated resealability." }
  },
  es: {
    problemsTitle: "5 Problemas Comunes de Humedad en Compostables (Y Soluciones)",
    p1: { q: "Polvos Aglutinados", a: "Use películas compostables metalizadas de alta barrera con WVTR ultra bajo." },
    p2: { q: "Degradación Prematura", a: "Implemente una estructura de biopolímero de doble capa con sellador interior resistente a la humedad." },
    p3: { q: "Empaque Quebradizo", a: "Incorpore plastificantes de origen vegetal para mantener la flexibilidad de la película." },
    p4: { q: "Pérdida de Sabor/Aroma", a: "Utilice recubrimientos de barrera compostables (equivalentes a EVOH) para retener aromas." },
    p5: { q: "Resellado Ineficaz", a: "Despliegue cremalleras PLA de alta resistencia diseñadas para un resellado hermético repetido." }
  },
  fr: {
    problemsTitle: "5 Problèmes Courants d'Humidité Compostable (Et Solutions)",
    p1: { q: "Poudres Agglomérées", a: "Utilisez des films compostables métallisés à haute barrière avec un très faible WVTR." },
    p2: { q: "Dégradation Prématurée", a: "Mettez en œuvre une structure de biopolymère à double couche avec un scellant intérieur résistant à l'humidité." },
    p3: { q: "Emballage Cassant", a: "Incorporez des plastifiants d'origine végétale pour maintenir la flexibilité du film." },
    p4: { q: "Perte de Saveur/Arôme", a: "Utilisez des revêtements barrières compostables (équivalent EVOH) pour conserver les aromates." },
    p5: { q: "Refermeture Inefficace", a: "Déployez des fermetures éclair en PLA ultra-résistantes conçues pour une refermeture hermétique." }
  },
  zh: {
    problemsTitle: "5 個常見的可堆肥濕度控制問題（與解決方案）",
    p1: { q: "粉末結塊", a: "使用具有超低 WVTR 的高阻隔金屬化可堆肥薄膜。" },
    p2: { q: "過早降解", a: "採用雙層生物聚合物結構及防潮內封層。" },
    p3: { q: "包裝變脆", a: "加入植物基增塑劑，以維持在不同濕度下的薄膜柔韌性。" },
    p4: { q: "風味/香氣流失", a: "利用等同於 EVOH 的可堆肥阻隔塗層鎖住香氣。" },
    p5: { q: "重新密封無效", a: "配置精密設計的耐用 PLA 夾鏈條，實現氣密且可重複的密封。" }
  }
}

export const sectionsForPouch = [
  "5 Common Compostable Humidity Control Problems (And Solutions)"
];

export const sectionsForAchieve = [
  "5 Common Compostable Humidity Control Problems (And Solutions)"
];

const PouchCompostableHumidityControlPage: React.FC = () => {
  const { t } = useTranslation()
  const p = 'pouchCompostableHumidityControlPage'
  const baseUrl = getBaseUrl()
  
  const HUMIDITY_METRICS = [
    { label: t(`${p}.metrics.wvtr.label`), value: t(`${p}.metrics.wvtr.value`), unit: t(`${p}.metrics.wvtr.unit`), desc: t(`${p}.metrics.wvtr.desc`) },
    { label: t(`${p}.metrics.otr.label`), value: t(`${p}.metrics.otr.value`), unit: t(`${p}.metrics.otr.unit`), desc: t(`${p}.metrics.otr.desc`) },
    { label: t(`${p}.metrics.shelfLife.label`), value: t(`${p}.metrics.shelfLife.value`), unit: t(`${p}.metrics.shelfLife.unit`), desc: t(`${p}.metrics.shelfLife.desc`) },
    { label: t(`${p}.metrics.bioValve.label`), value: t(`${p}.metrics.bioValve.value`), unit: t(`${p}.metrics.bioValve.unit`), desc: t(`${p}.metrics.bioValve.desc`) }
  ]

  return (
    <PouchLayout>
      <Helmet>
        <title>{t(`${p}.meta.title`)}</title>
        <meta name="description" content={t(`${p}.meta.description`)} />
        <link rel="canonical" href={`${baseUrl}/topics/compostable-humidity-control`} />
        <meta name="keywords" content={t(`${p}.meta.keywords`)} />
      </Helmet>

      {/* Hero Section */}
      <section className="relative pt-12 pb-24 border-b-4 border-black bg-[radial-gradient(#0891b2_1px,transparent_1px)] [background-size:24px_24px] bg-neutral-50">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <NeoBadge color="magenta">{t(`${p}.hero.badge`)}</NeoBadge>
          <h1 className="mt-8 font-black text-6xl md:text-9xl leading-none uppercase italic">
            {t(`${p}.hero.titlePart1`)}<br/>
            {t(`${p}.hero.titlePart2`)}<br/>
            <span className="text-black drop-shadow-[4px_4px_0px_rgba(212,255,0,1)]">{t(`${p}.hero.titlePart3`)}</span>
          </h1>
          <p className="mt-8 text-xl md:text-2xl font-bold font-['JetBrains_Mono'] text-gray-800 max-w-3xl mx-auto bg-white border-4 border-black p-6 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
            {t(`${p}.hero.subtitle`)}
          </p>
          <div className="flex flex-wrap justify-center gap-6 mt-12">
            <NeoButton variant="primary" to="/products">{t(`${p}.hero.btnBrowse`)}</NeoButton>
            <NeoButton variant="secondary" to="/sample">{t(`${p}.hero.btnRequest`)}</NeoButton>
          </div>
        </div>
      </section>

      {/* Engineering: The Humidity Framework */}
      <section className="py-24 bg-white border-b-4 border-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="absolute inset-0 bg-neutral-400 translate-x-4 translate-y-4 border-4 border-black" />
              <ClickableImage 
                src="/imgs/illustrated/a_topic_01_eco_food_pkg_var_b_3398751.webp" 
                alt={t(`${p}.science.imageAlt`)} 
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
                {HUMIDITY_METRICS.map((p, i) => (
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

      {/* Technical: The Barrier Tech Stack */}
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
                  <Droplets className="w-12 h-12 flex-shrink-0" />
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

      {/* FAQ: Humidity Intelligence */}
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

      {/* 5 Common Problems Section */}
      <section className="py-24 bg-neutral-100 border-b-4 border-black">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-black text-4xl md:text-6xl uppercase leading-tight italic mb-12 text-center">
            {translations.en.problemsTitle}
          </h2>
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div className="space-y-6">
              {[
                { icon: Package, ...translations.en.p1 },
                { icon: Wind, ...translations.en.p2 },
                { icon: Shield, ...translations.en.p3 },
                { icon: Thermometer, ...translations.en.p4 },
                { icon: CheckCircle, ...translations.en.p5 }
              ].map((item, i) => (
                <div key={i} className="bg-white border-4 border-black p-6 flex gap-4 items-start shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                  <item.icon className="w-8 h-8 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-black text-xl uppercase mb-2">{item.q}</h4>
                    <p className="font-['JetBrains_Mono'] text-gray-700">{item.a}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="relative sticky top-24">
              <div className="absolute inset-0 bg-neutral-400 translate-x-4 translate-y-4 border-4 border-black" />
              <ClickableImage 
                src="/imgs/knowledge/compostable-humidity-control-pain-points.jpg" 
                alt="5 Common Problems" 
                className="relative z-10 border-4 border-black w-full shadow-2xl"
              />
            </div>
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

export default PouchCompostableHumidityControlPage
