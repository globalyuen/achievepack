import React from 'react'
import { useTranslation } from 'react-i18next'
import { Helmet } from 'react-helmet-async'
import { BarChart3, Package, CheckCircle, Award, Zap, Globe, Factory, Recycle, ArrowLeftRight, TrendingUp, ShoppingBag, Target, Shield, MessageCircle, Thermometer, Wind, Droplets, Microscope, Beaker, Heart, Baby, AlertTriangle } from 'lucide-react'
import PouchLayout from '../../../components/pouch/PouchLayout'
import { NeoButton, NeoCard, NeoBadge } from '../../../components/pouch/PouchUI'
import { getBaseUrl } from '../../../utils/domain'
import ClickableImage from '../../../components/ClickableImage'

const localTranslations: Record<string, any> = {
  en: {
    title: "5 Common Compostable Baby Food Bag Problems (And Solutions)",
    problems: [
      { title: "1. Leakage & Seal Integrity", solution: "Multi-layered compostable barrier films with reinforced ultrasound sealing." },
      { title: "2. Poor Barrier Properties", solution: "Plant-based EVOH alternative coatings for high oxygen/moisture barrier." },
      { title: "3. Choking Hazards from Caps", solution: "Extra-large, anti-swallow compostable caps designed for infant safety." },
      { title: "4. Slow Degradation", solution: "Certified home-compostable materials that break down fully within 180 days." },
      { title: "5. High Temperature Sterilization Failure", solution: "Retort-grade compostable laminates that withstand up to 121°C." }
    ]
  },
  es: {
    title: "5 Problemas Comunes de las Bolsas Compostables para Alimentos Infantiles (y Soluciones)",
    problems: [
      { title: "1. Fugas e Integridad del Sello", solution: "Películas de barrera compostables multicapa con sellado ultrasónico reforzado." },
      { title: "2. Propiedades de Barrera Deficientes", solution: "Recubrimientos alternativos de EVOH de origen vegetal para alta barrera." },
      { title: "3. Peligros de Asfixia por Tapas", solution: "Tapas compostables extra grandes y antitragado diseñadas para la seguridad infantil." },
      { title: "4. Degradación Lenta", solution: "Materiales compostables certificados para el hogar que se descomponen en 180 días." },
      { title: "5. Fallas en Esterilización a Alta Temperatura", solution: "Laminados compostables que resisten hasta 121°C." }
    ]
  },
  fr: {
    title: "5 Problèmes Courants des Sachets Compostables pour Aliments pour Bébés (et Solutions)",
    problems: [
      { title: "1. Fuites et Intégrité de l'Étanchéité", solution: "Films barrières compostables multicouches avec soudure par ultrasons renforcée." },
      { title: "2. Faibles Propriétés Barrières", solution: "Revêtements alternatifs à l'EVOH d'origine végétale pour une haute barrière." },
      { title: "3. Risques d'Étouffement liés aux Bouchons", solution: "Bouchons compostables extra-larges anti-ingestion." },
      { title: "4. Dégradation Lente", solution: "Matériaux certifiés compostables à domicile qui se décomposent en 180 jours." },
      { title: "5. Échec de la Stérilisation à Haute Température", solution: "Stratifiés compostables résistant jusqu'à 121°C." }
    ]
  },
  'zh-TW': {
    title: "5 個常見的嬰兒食品可堆肥袋問題（與解決方案）",
    problems: [
      { title: "1. 洩漏與密封完整性", solution: "採用強化超聲波密封的多層可堆肥阻隔薄膜。" },
      { title: "2. 阻隔性能差", solution: "植物基 EVOH 替代塗層，確保高氧氣與水分阻隔性。" },
      { title: "3. 瓶蓋造成的窒息危險", solution: "專為嬰兒安全設計的超大防吞嚥可堆肥瓶蓋。" },
      { title: "4. 降解速度慢", solution: "經認證的家庭可堆肥材料，可在180天內完全分解。" },
      { title: "5. 高溫殺菌失敗", solution: "可承受高達 121°C 的耐高溫殺菌級可堆肥複合材料。" }
    ]
  }
};

const PouchCompostableBabyFoodBagsPage: React.FC = () => {
  const { t, i18n } = useTranslation()
  const currentLang = i18n.language || 'en'
  const sectionData = localTranslations[currentLang] || localTranslations['en']
  const p = 'pouchCompostableBabyFoodBagsPage'
  const baseUrl = getBaseUrl()
  
  const BABY_METRICS = [
    { label: t(`${p}.metrics.microplastic.label`), value: t(`${p}.metrics.microplastic.value`), unit: t(`${p}.metrics.microplastic.unit`), desc: t(`${p}.metrics.microplastic.desc`) },
    { label: t(`${p}.metrics.chemicals.label`), value: t(`${p}.metrics.chemicals.value`), unit: t(`${p}.metrics.chemicals.unit`), desc: t(`${p}.metrics.chemicals.desc`) },
    { label: t(`${p}.metrics.shelfLife.label`), value: t(`${p}.metrics.shelfLife.value`), unit: t(`${p}.metrics.shelfLife.unit`), desc: t(`${p}.metrics.shelfLife.desc`) },
    { label: t(`${p}.metrics.safetyCap.label`), value: t(`${p}.metrics.safetyCap.value`), unit: t(`${p}.metrics.safetyCap.unit`), desc: t(`${p}.metrics.safetyCap.desc`) }
  ]

  return (
    <PouchLayout>
      <Helmet>
        <title>{t(`${p}.meta.title`)}</title>
        <meta name="description" content={t(`${p}.meta.description`)} />
        <link rel="canonical" href={`${baseUrl}/topics/compostable-baby-food`} />
        <meta name="keywords" content={t(`${p}.meta.keywords`)} />
      </Helmet>

      {/* Hero Section */}
      <section className="relative pt-12 pb-24 border-b-4 border-black bg-[radial-gradient(#be185d_1px,transparent_1px)] [background-size:24px_24px] bg-neutral-50">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <NeoBadge color="magenta">{t(`${p}.hero.badge`)}</NeoBadge>
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

      {/* Engineering: The Baby Framework */}
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
                {BABY_METRICS.map((item, i) => (
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

      {/* Technical: The Safety Tech Stack */}
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
                  <Shield className="w-12 h-12 flex-shrink-0" />
                  <div>
                    <h4 className="font-black uppercase">{t(`${p}.science.shieldTitle`)}</h4>
                    <p className="text-sm opacity-60">{t(`${p}.science.shieldDesc`)}</p>
                  </div>
                </div>
                <div className="bg-white p-6 border-4 border-black flex gap-6 items-center">
                  <TrendingUp className="w-12 h-12 flex-shrink-0" />
                  <div>
                    <h4 className="font-black uppercase">{t(`${p}.science.trustTitle`)}</h4>
                    <p className="text-sm opacity-60">{t(`${p}.science.trustDesc`)}</p>
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

      {/* FAQ: Baby Intelligence */}
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
                <p className="font-['JetBrains_Mono'] text-gray-700 pl-11">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5 Common Problems Section */}
      <section className="py-24 bg-neutral-50 border-b-4 border-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-black text-5xl md:text-7xl uppercase leading-tight italic">
              {sectionData.title}
            </h2>
          </div>
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              {sectionData.problems.map((prob: any, idx: number) => (
                <div key={idx} className="bg-white border-4 border-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] flex gap-4">
                  <AlertTriangle className="w-8 h-8 text-black flex-shrink-0" />
                  <div>
                    <h4 className="font-black text-xl uppercase mb-2">{prob.title}</h4>
                    <p className="font-['JetBrains_Mono'] text-gray-700">{prob.solution}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-[#be185d] translate-x-4 translate-y-4 border-4 border-black" />
              <img 
                src="/imgs/knowledge/compostable-baby-food-bags-pain-points.jpg" 
                alt="Compostable Baby Food Bags Problems" 
                className="relative z-10 border-4 border-black w-full shadow-2xl object-cover"
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

export default PouchCompostableBabyFoodBagsPage
