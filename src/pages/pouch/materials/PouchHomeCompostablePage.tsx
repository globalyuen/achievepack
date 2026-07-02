import React from 'react'
import { useTranslation } from 'react-i18next';

const localTranslations: Record<string, any> = {
  en: {
    title: "5 Common Home Compostable Problems (And Solutions)",
    problems: [
      {
        title: "Short Shelf Life",
        desc: "Poor moisture and oxygen barriers can lead to premature product spoilage.",
        solution: "We use advanced high-barrier compostable films that mimic traditional plastics."
      },
      {
        title: "Fragility in Transit",
        desc: "Eco-materials can sometimes tear or puncture more easily during shipping.",
        solution: "Our multi-layer bio-polymers are reinforced for maximum durability."
      },
      {
        title: "High Material Costs",
        desc: "Compostable packaging is often significantly more expensive.",
        solution: "Optimized material usage and bulk sourcing help us keep prices competitive."
      },
      {
        title: "Confusing Disposal",
        desc: "End-users often don't know how to properly compost the packaging.",
        solution: "We offer clear, custom-printed compost instructions on every pouch."
      },
      {
        title: "Dull Printing",
        desc: "Traditional eco-inks can appear faded and less vibrant.",
        solution: "We utilize eco-friendly, high-vibrancy water-based inks for striking designs."
      }
    ]
  },
  es: {
    title: "5 Problemas Comunes de los Compostables Caseros (Y Soluciones)",
    problems: [
      {
        title: "Corta vida útil",
        desc: "Las malas propiedades de barrera pueden provocar el deterioro prematuro del producto.",
        solution: "Utilizamos películas compostables de alta barrera que imitan a los plásticos tradicionales."
      },
      {
        title: "Fragilidad en tránsito",
        desc: "Los materiales ecológicos a veces se rasgan o perforan más fácilmente durante el envío.",
        solution: "Nuestros biopolímeros multicapa están reforzados para una máxima durabilidad."
      },
      {
        title: "Altos costos de materiales",
        desc: "El embalaje compostable suele ser significativamente más caro.",
        solution: "El uso optimizado de materiales y el abastecimiento a granel nos ayudan a mantener precios competitivos."
      },
      {
        title: "Eliminación confusa",
        desc: "Los usuarios finales a menudo no saben cómo compostar adecuadamente el embalaje.",
        solution: "Ofrecemos instrucciones claras de compostaje impresas en cada bolsa."
      },
      {
        title: "Impresión opaca",
        desc: "Las tintas ecológicas tradicionales pueden parecer descoloridas y menos vibrantes.",
        solution: "Utilizamos tintas a base de agua ecológicas y de alta vitalidad para diseños llamativos."
      }
    ]
  },
  fr: {
    title: "5 Problèmes Courants des Emballages Compostables à Domicile (Et Solutions)",
    problems: [
      {
        title: "Durée de conservation courte",
        desc: "De mauvaises propriétés de barrière peuvent entraîner une détérioration prématurée du produit.",
        solution: "Nous utilisons des films compostables à haute barrière qui imitent les plastiques traditionnels."
      },
      {
        title: "Fragilité en transit",
        desc: "Les éco-matériaux peuvent parfois se déchirer ou se perforer plus facilement pendant le transport.",
        solution: "Nos bio-polymères multicouches sont renforcés pour une durabilité maximale."
      },
      {
        title: "Coûts de matériaux élevés",
        desc: "Les emballages compostables sont souvent nettement plus chers.",
        solution: "L'utilisation optimisée des matériaux et l'approvisionnement en gros nous aident à maintenir des prix compétitifs."
      },
      {
        title: "Élimination confuse",
        desc: "Les utilisateurs finaux ne savent souvent pas comment composter correctement l'emballage.",
        solution: "Nous proposons des instructions de compostage claires et imprimées sur mesure sur chaque sachet."
      },
      {
        title: "Impression terne",
        desc: "Les éco-encres traditionnelles peuvent paraître délavées et moins éclatantes.",
        solution: "Nous utilisons des encres à l'eau écologiques et très éclatantes pour des designs percutants."
      }
    ]
  },
  'zh-TW': {
    title: "5 個常見的家用可堆肥包裝問題（及解決方案）",
    problems: [
      {
        title: "保質期短",
        desc: "阻隔性能差可能導致產品過早變質。",
        solution: "我們使用模仿傳統塑料的高級高阻隔可堆肥薄膜。"
      },
      {
        title: "運輸途中易碎",
        desc: "環保材料在運輸過程中更容易撕裂或刺破。",
        solution: "我們的多層生物聚合物經過加固，以實現最大的耐用性。"
      },
      {
        title: "材料成本高",
        desc: "可堆肥包裝通常要貴得多。",
        solution: "優化的材料使用和批量採購幫助我們保持有競爭力的價格。"
      },
      {
        title: "混亂的處置方式",
        desc: "最終用戶通常不知道如何正確堆肥包裝。",
        solution: "我們在每個袋子上提供清晰的定制印刷堆肥說明。"
      },
      {
        title: "印刷暗淡",
        desc: "傳統的環保油墨可能顯得褪色且不那麼鮮豔。",
        solution: "我們利用環保、高鮮豔度的水性油墨來實現引人注目的設計。"
      }
    ]
  }
};
import { Helmet } from 'react-helmet-async'
import { Leaf, Shield, Zap, CheckCircle, Award, BarChart3, Thermometer, Clock, MessageCircle, AlertTriangle, Check } from 'lucide-react'
import PouchLayout from '../../../components/pouch/PouchLayout'
import { NeoButton, NeoCard, NeoBadge } from '../../../components/pouch/PouchUI'
import { getBaseUrl } from '../../../utils/domain'

const PouchHomeCompostablePage: React.FC = () => {
  const { t, i18n } = useTranslation()
  const p = 'seoPages.pages.pouchHomeCompostable'
  const currentLang = i18n.language || 'en'
  const texts = localTranslations[currentLang] || localTranslations['en']

  const baseUrl = getBaseUrl()
  
  const DECOMPOSITION_STAGES = [
    { day: t(`${p}.timelineStages.stage0.day`), status: t(`${p}.timelineStages.stage0.status`), desc: t(`${p}.timelineStages.stage0.desc`) },
    { day: t(`${p}.timelineStages.stage1.day`), status: t(`${p}.timelineStages.stage1.status`), desc: t(`${p}.timelineStages.stage1.desc`) },
    { day: t(`${p}.timelineStages.stage2.day`), status: t(`${p}.timelineStages.stage2.status`), desc: t(`${p}.timelineStages.stage2.desc`) },
    { day: t(`${p}.timelineStages.stage3.day`), status: t(`${p}.timelineStages.stage3.status`), desc: t(`${p}.timelineStages.stage3.desc`) }
  ]

  return (
    <PouchLayout>
      <Helmet>
        <title>{t(`${p}.title`)}</title>
        <meta name="description" content={t(`${p}.description`)} />
        <link rel="canonical" href={`${baseUrl}/materials/home-compostable`} />
        <meta name="keywords" content={t(`${p}.keywords`)} />
      </Helmet>

      {/* Hero Section */}
      <section className="relative pt-12 pb-24 border-b-4 border-black bg-[radial-gradient(#ff0080_1px,transparent_1px)] [background-size:24px_24px] bg-pink-50">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <NeoBadge color="magenta">{t(`${p}.heroBadge`)}</NeoBadge>
          <h1 className="mt-8 font-black text-6xl md:text-9xl leading-none uppercase text-black">{t(`${p}.heroTitle1`)}<br/>{t(`${p}.heroTitle2`)}<br/>{t(`${p}.heroTitleHighlight`)}</h1>
          <p className="mt-8 text-xl md:text-2xl font-bold font-['JetBrains_Mono'] text-gray-800 max-w-3xl mx-auto bg-white border-4 border-black p-6 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
            {t(`${p}.heroDescription`)}
          </p>
          <div className="mt-12 flex flex-wrap justify-center gap-6">
            <NeoButton variant="primary" to="/sample">{t(`${p}.heroCta1`)}</NeoButton>
            <NeoButton variant="secondary" to="/products">{t(`${p}.heroCta2`)}</NeoButton>
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-24 bg-white border-b-4 border-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="absolute inset-0 bg-pink-400 translate-x-4 translate-y-4 border-4 border-black" />
              <img 
                src="/imgs/4-infograhic/home-compost.webp" 
                alt={t(`${p}.comparisonImageAlt`)} 
                className="relative z-10 border-4 border-black w-full"
              />
            </div>
            <div>
              <NeoBadge color="blue">{t(`${p}.comparisonBadge`)}</NeoBadge>
              <h2 className="font-black text-5xl md:text-7xl uppercase mt-6 leading-tight italic">{t(`${p}.comparisonTitle`)}<br/>{t(`${p}.comparisonTitleHighlight`)}</h2>
              <p className="mt-8 text-xl text-gray-600 font-['JetBrains_Mono'] leading-relaxed">
                {t(`${p}.comparisonDescription`)}
              </p>
              <div className="mt-8 bg-pink-100 border-4 border-black p-6">
                <h4 className="font-black uppercase mb-4 text-pink-600 italic">{t(`${p}.comparisonBoxTitle`)}</h4>
                <p className="text-sm font-bold text-gray-800 leading-relaxed">
                  {t(`${p}.comparisonBoxDesc`)}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Breakdown Timeline */}
      <section className="py-24 bg-black text-white border-b-4 border-black">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="font-black text-5xl md:text-7xl uppercase mb-16 text-pink-400">{t(`${p}.timelineTitle`)}</h2>
          <div className="grid md:grid-cols-4 gap-4">
            {DECOMPOSITION_STAGES.map((stage, i) => (
              <div key={i} className="border-4 border-white p-8 hover:bg-pink-600 transition-colors group">
                <div className="text-4xl font-black mb-2 font-['JetBrains_Mono']">{stage.day}</div>
                <h4 className="font-black uppercase text-xl mb-4 group-hover:text-black">{stage.status}</h4>
                <p className="text-xs font-['JetBrains_Mono'] opacity-70 group-hover:opacity-100 group-hover:text-black font-bold">{stage.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certification Trust */}
      <section className="py-24 bg-[#F0F0F0] border-b-4 border-black">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8">
          <NeoCard>
            <div className="text-4xl mb-6">🇦🇹</div>
            <h4 className="font-black text-xl mb-4 uppercase text-pink-600">{t(`${p}.card1Title`)}</h4>
            <p className="text-sm font-['JetBrains_Mono'] text-gray-600">{t(`${p}.card1Description`)}</p>
          </NeoCard>
          <NeoCard color="bg-white shadow-[10px_10px_0px_0px_rgba(255,0,128,1)]">
            <div className="text-4xl mb-6">🇦🇺</div>
            <h4 className="font-black text-xl mb-4 uppercase text-pink-600">{t(`${p}.card2Title`)}</h4>
            <p className="text-sm font-['JetBrains_Mono'] text-gray-600">{t(`${p}.card2Description`)}</p>
          </NeoCard>
          <NeoCard>
            <div className="text-4xl mb-6">🇪🇺</div>
            <h4 className="font-black text-xl mb-4 uppercase text-pink-600">{t(`${p}.card3Title`)}</h4>
            <p className="text-sm font-['JetBrains_Mono'] text-gray-600">{t(`${p}.card3Description`)}</p>
          </NeoCard>
        </div>
      </section>

      {/* 5 Common Problems Section */}
      <section className="py-24 bg-white border-b-4 border-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-black text-4xl md:text-6xl uppercase leading-tight italic text-black mb-8">
                {texts.title}
              </h2>
              <div className="space-y-6">
                {texts.problems.map((prob: any, idx: number) => (
                  <div key={idx} className="p-6 border-4 border-black bg-pink-50 hover:bg-pink-100 transition-colors">
                    <h3 className="font-black text-xl mb-2 flex items-center gap-2">
                      <AlertTriangle className="text-red-500 flex-shrink-0" /> {prob.title}
                    </h3>
                    <p className="text-gray-700 font-['JetBrains_Mono'] mb-4">{prob.desc}</p>
                    <div className="bg-white border-2 border-black p-4 flex gap-3 items-start">
                      <Check className="text-green-500 flex-shrink-0 mt-1" />
                      <p className="text-sm font-bold text-gray-800">{prob.solution}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-pink-400 translate-x-4 translate-y-4 border-4 border-black" />
              <img 
                src="/imgs/knowledge/home-compostable-pain-points.jpg" 
                alt="Home Compostable Pain Points" 
                className="relative z-10 border-4 border-black w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-pink-600 text-white border-b-4 border-black">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-10">
          <NeoBadge color="lime">{t(`${p}.ctaBadge`)}</NeoBadge>
          <h2 className="font-black text-6xl md:text-9xl uppercase leading-none">{t(`${p}.ctaTitle1`)}<br/>{t(`${p}.ctaTitle2`)}</h2>
          <p className="font-['JetBrains_Mono'] font-bold text-xl opacity-80 max-w-2xl mx-auto">
            {t(`${p}.ctaDescription`)}
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
            <NeoButton variant="primary" to="/sample" className="!bg-white !text-pink-600">{t(`${p}.ctaButton1`)}</NeoButton>
            <NeoButton variant="secondary" className="!border-white !text-white" href="https://calendly.com/30-min-free-packaging-consultancy">
              {t(`${p}.ctaButton2`)}
            </NeoButton>
          </div>
        </div>
      </section>
    </PouchLayout>
  )
}

export default PouchHomeCompostablePage
