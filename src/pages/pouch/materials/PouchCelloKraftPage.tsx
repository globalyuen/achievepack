import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet-async'
import { Leaf, Shield, Award, CheckCircle, Package, Sparkles, Heart, Star, TrendingUp, AlertTriangle } from 'lucide-react'
import { motion } from 'framer-motion'
import PouchLayout from '../../../components/pouch/PouchLayout'
import { getBaseUrl } from '../../../utils/domain'

import { NeoButton, NeoCard, NeoBadge } from '../../../components/pouch/PouchUI'

const localTranslations = {
  en: {
    problemsTitle: "5 Common Cello Kraft Pouch Problems (And Solutions)",
    problems: [
      { title: "Paper Tearing Easily", desc: "Triplex lamination adds structural integrity and tear resistance, preventing rips." },
      { title: "Moisture Permeability", desc: "Integrated high-barrier layers effectively block moisture to keep contents fresh." },
      { title: "Dull Printing on Kraft", desc: "Reverse-printing on the outer clear layer ensures vibrant, scratch-resistant graphics." },
      { title: "Poor Shelf Stability", desc: "Engineered bottom gussets provide a firm base for a self-standing, stable display." },
      { title: "Weak Heat Sealing", desc: "Advanced inner PE layers guarantee strong, consistent, and leak-proof seals." }
    ]
  },
  es: {
    problemsTitle: "5 Problemas Comunes de las Bolsas Cello Kraft (Y Soluciones)",
    problems: [
      { title: "Desgarro Fácil del Papel", desc: "La laminación triplex añade integridad estructural y resistencia al desgarro." },
      { title: "Permeabilidad a la Humedad", desc: "Capas de alta barrera integradas bloquean eficazmente la humedad." },
      { title: "Impresión Opaca en Kraft", desc: "La impresión inversa en la capa exterior transparente asegura gráficos vibrantes." },
      { title: "Mala Estabilidad en Estantes", desc: "Los fuelles inferiores diseñados proporcionan una base firme para mantenerse de pie." },
      { title: "Sellado Débil", desc: "Las capas interiores de PE garantizan sellados térmicos fuertes y a prueba de fugas." }
    ]
  },
  fr: {
    problemsTitle: "5 Problèmes Courants des Sachets Cello Kraft (Et Solutions)",
    problems: [
      { title: "Déchirure Facile du Papier", desc: "Le laminage triplex ajoute une intégrité structurelle et empêche les déchirures." },
      { title: "Perméabilité à l'Humidité", desc: "Des couches barrières bloquent efficacement l'humidité pour garder la fraîcheur." },
      { title: "Impression Terne", desc: "L'impression inversée sur la couche transparente garantit des graphiques éclatants." },
      { title: "Mauvaise Stabilité", desc: "Les soufflets de fond offrent une base ferme pour tenir debout en rayon." },
      { title: "Scellage Faible", desc: "Les couches intérieures en PE garantissent des scellages thermiques solides." }
    ]
  },
  'zh-TW': {
    problemsTitle: "5個常見牛皮紙袋問題（及解決方案）",
    problems: [
      { title: "紙張易撕裂", desc: "三層複合結構增加了結構完整性，防止撕裂破損。" },
      { title: "容易受潮", desc: "內置高阻隔層有效阻擋水氣，保持內容物新鮮。" },
      { title: "牛皮紙印刷暗淡", desc: "在外層透明膜上進行里印，確保圖案鮮豔且防刮。" },
      { title: "貨架穩定性差", desc: "精心設計的底部插角提供穩固的自立基礎。" },
      { title: "熱封不牢", desc: "先進的內層 PE 膜保證了強韌、一致且防漏的封口。" }
    ]
  }
};

export default function PouchCelloKraftPage() {
  const { t, i18n } = useTranslation()
  const p = 'seoPages.pages.pouchCelloKraft'
  
  const currentLang = i18n.language || 'en';
  const langData = localTranslations[currentLang as keyof typeof localTranslations] || localTranslations['en'];

  const baseUrl = getBaseUrl()

  const FEATURES = [
    { icon: Leaf, title: t(`${p}.features.naturalLook.title`), desc: t(`${p}.features.naturalLook.desc`), color: 'bg-amber-100' },
    { icon: Shield, title: t(`${p}.features.longLasting.title`), desc: t(`${p}.features.longLasting.desc`), color: 'bg-blue-100' },
    { icon: Award, title: t(`${p}.features.proGrade.title`), desc: t(`${p}.features.proGrade.desc`), color: 'bg-purple-100' },
    { icon: Heart, title: t(`${p}.features.ecoAppeal.title`), desc: t(`${p}.features.ecoAppeal.desc`), color: 'bg-green-100' },
  ]

  const APPLICATIONS = [
    t(`${p}.applications.app1`),
    t(`${p}.applications.app2`),
    t(`${p}.applications.app3`),
    t(`${p}.applications.app4`),
    t(`${p}.applications.app5`),
    t(`${p}.applications.app6`),
    t(`${p}.applications.app7`),
    t(`${p}.applications.app8`),
    t(`${p}.applications.app9`),
    t(`${p}.applications.app10`)
  ]

  return (
    <PouchLayout>
      <Helmet>
        <title>{t(`${p}.title`)}</title>
        <meta name="description" content={t(`${p}.description`)} />
        <link rel="canonical" href={`${baseUrl}/materials/cello-kraft-triplex`} />
        
        <meta property="og:title" content={t(`${p}.ogTitle`)} />
        <meta property="og:description" content={t(`${p}.ogDescription`)} />
        <meta property="og:url" content={`${baseUrl}/materials/cello-kraft-triplex`} />
        <meta property="og:type" content="product" />
        <meta property="og:image" content={`${baseUrl}/imgs/material-kraft-high-barrier.webp`} />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={t(`${p}.twitterTitle`)} />
        <meta name="twitter:description" content={t(`${p}.twitterDescription`)} />
        
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            "name": t(`${p}.schemaProduct`),
            "description": t(`${p}.schemaProductDesc`),
            "brand": { "@type": "Brand", "name": "Pouch.eco" },
            "offers": {
              "@type": "Offer",
              "availability": "https://schema.org/InStock",
              "price": "0.70",
              "priceCurrency": "USD",
              "priceValidUntil": "2026-12-31"
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.8",
              "reviewCount": "87"
            }
          })}
        </script>
      </Helmet>

      {/* Hero Section */}
      <section className="relative pt-12 pb-24 border-b-4 border-black bg-gradient-to-br from-amber-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex flex-wrap gap-3 mb-6">
                <NeoBadge color="amber">{t(`${p}.popularBadge`)}</NeoBadge>
                <NeoBadge color="lime">{t(`${p}.highBarrierBadge`)}</NeoBadge>
              </div>
              
              <h1 className="font-black text-5xl md:text-7xl leading-none mb-6">{t(`${p}.heroTitle1`)}<br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-amber-800">{t(`${p}.heroTitle2`)}</span></h1>
              
              <p className="text-2xl text-gray-700 mb-8">
                <strong>{t(`${p}.heroSubtitleIntro`)}</strong>{t(`${p}.heroSubtitle`)}
              </p>
              
              <div className="flex flex-wrap gap-4">
                <NeoButton variant="primary">{t(`${p}.heroCta1`)}</NeoButton>
                <NeoButton variant="secondary">{t(`${p}.heroCta2`)}</NeoButton>
              </div>
              
              <div className="mt-8 flex items-center gap-8">
                <div>
                  <div className="flex gap-1 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-[#D4FF00] text-[#D4FF00]" />
                    ))}
                  </div>
                  <p className="text-sm text-gray-600">{t(`${p}.ratingText`)}</p>
                </div>
                <div className="border-l-2 border-black pl-8">
                  <p className="font-black text-2xl">{t(`${p}.moqValue`)}</p>
                  <p className="text-sm text-gray-600">{t(`${p}.moqLabel`)}</p>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <NeoCard className="bg-gradient-to-br from-amber-50 to-white">
                <img 
                  src="https://achievepack.com/imgs/material-kraft-window.webp" 
                  alt={t(`${p}.heroImageAlt`)}
                  className="w-full rounded-lg"
                />
              </NeoCard>
            </div>
          </div>
        </div>
      </section>

      {/* What Makes It Special Section */}
      <section className="py-24 bg-white border-b-4 border-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-black text-5xl md:text-6xl mb-6">
              {t(`${p}.loveTitle`)} <span className="text-amber-600">{t(`${p}.loveTitleHighlight`)}</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {t(`${p}.loveSubtitle`)}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {FEATURES.map((feature, index) => (
              <NeoCard key={index}>
                <div className={`inline-block p-4 ${feature.color} border-4 border-black mb-4`}>
                  <feature.icon className="w-8 h-8 text-black" />
                </div>
                <h3 className="font-black text-xl mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.desc}</p>
              </NeoCard>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Specs Section */}
      <section className="py-24 bg-[#D4FF00]/10 border-b-4 border-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-black text-5xl md:text-6xl mb-6">
              {t(`${p}.techTitle`)} <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-600">{t(`${p}.techTitleHighlight`)}</span>
            </h2>
            <p className="text-xl text-gray-600">
              {t(`${p}.techSubtitle`)}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <NeoCard className="bg-amber-50/50">
              <h3 className="font-black text-2xl mb-4 text-amber-900">{t(`${p}.whatsInsideTitle`)}</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <Package className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-bold">{t(`${p}.layerOuterTitle`)}</p>
                    <p className="text-sm text-gray-600">{t(`${p}.layerOuterDesc`)}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Package className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-bold">{t(`${p}.layerWindowTitle`)}</p>
                    <p className="text-sm text-gray-600">{t(`${p}.layerWindowDesc`)}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Shield className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-bold">{t(`${p}.layerBarrierTitle`)}</p>
                    <p className="text-sm text-gray-600">{t(`${p}.layerBarrierDesc`)}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Package className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-bold">{t(`${p}.layerInnerTitle`)}</p>
                    <p className="text-sm text-gray-600">{t(`${p}.layerInnerDesc`)}</p>
                  </div>
                </div>
              </div>
            </NeoCard>

            <NeoCard className="bg-blue-50/50">
              <h3 className="font-black text-2xl mb-4 text-blue-900">{t(`${p}.protectionTitle`)}</h3>
              <div className="space-y-4">
                <div className="bg-white p-4 border-2 border-black">
                  <p className="font-bold mb-1">{t(`${p}.protectionMoistureTitle`)}</p>
                  <p className="text-sm text-gray-600">{t(`${p}.protectionMoistureDesc`)}</p>
                </div>
                <div className="bg-white p-4 border-2 border-black">
                  <p className="font-bold mb-1">{t(`${p}.protectionOxygenTitle`)}</p>
                  <p className="text-sm text-gray-600">{t(`${p}.protectionOxygenDesc`)}</p>
                </div>
                <div className="bg-white p-4 border-2 border-black">
                  <p className="font-bold mb-1">{t(`${p}.protectionShelfLifeTitle`)}</p>
                  <p className="text-sm text-gray-600">{t(`${p}.protectionShelfLifeDesc`)}</p>
                </div>
                <div className="bg-white p-4 border-2 border-black">
                  <p className="font-bold mb-1">{t(`${p}.protectionLightTitle`)}</p>
                  <p className="text-sm text-gray-600">{t(`${p}.protectionLightDesc`)}</p>
                </div>
              </div>
            </NeoCard>
          </div>
        </div>
      </section>

      {/* Problems & Solutions Section */}
      <section className="py-24 bg-amber-50/50 border-b-4 border-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-black text-4xl md:text-5xl mb-8">
                {langData.problemsTitle}
              </h2>
              <div className="space-y-4">
                {langData.problems.map((problem, idx) => (
                  <div key={idx} className="flex items-start gap-4 p-4 border-2 border-black bg-white">
                    <AlertTriangle className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-lg mb-1">{problem.title}</h3>
                      <p className="text-gray-700">{problem.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <NeoCard className="bg-white">
                <img 
                  src="/imgs/knowledge/cello-kraft-pouches-pain-points.jpg" 
                  alt="Cello Kraft Pouches Pain Points"
                  className="w-full rounded-lg border-2 border-black"
                />
              </NeoCard>
            </div>
          </div>
        </div>
      </section>

      {/* Perfect For Section */}
      <section className="py-24 bg-white border-b-4 border-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-black text-5xl md:text-6xl mb-6">
              {t(`${p}.perfectTitle`)}
            </h2>
            <p className="text-xl text-gray-600">
              {t(`${p}.perfectSubtitle`)}
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4 max-w-6xl mx-auto">
            {APPLICATIONS.map((app, index) => (
              <div key={index} className="flex items-center gap-3 bg-amber-50 border-2 border-black p-4 hover:bg-amber-100 transition">
                <CheckCircle className="w-5 h-5 text-amber-600 flex-shrink-0" />
                <span className="font-bold text-sm">{app}</span>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <NeoCard className="inline-block max-w-3xl">
              <div className="flex items-start gap-6">
                <Sparkles className="w-12 h-12 text-amber-500 flex-shrink-0" />
                <div className="text-left">
                  <h3 className="font-black text-2xl mb-2">{t(`${p}.expertCardTitle`)}</h3>
                  <p className="text-gray-600 mb-4">{t(`${p}.expertCardDesc`)}</p>
                  <NeoButton variant="primary" className="text-sm py-3 px-6">{t(`${p}.expertCardCta`)}</NeoButton>
                </div>
              </div>
            </NeoCard>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-black text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-black text-5xl md:text-6xl mb-8">
            {t(`${p}.ctaTitle1`)}<br/><span className="text-[#D4FF00]">{t(`${p}.ctaTitle2`)}</span>
          </h2>
          <p className="text-xl text-gray-300 mb-4">
            {t(`${p}.ctaSubtitle`)}
          </p>
          <p className="text-2xl font-bold text-[#D4FF00] mb-12">
            {t(`${p}.ctaPrice`)}
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <NeoButton variant="primary">{t(`${p}.ctaBtn1`)}</NeoButton>
            <NeoButton variant="dark" className="!border-[#D4FF00] !text-[#D4FF00]">
              {t(`${p}.ctaBtn2`)}
            </NeoButton>
          </div>
        </div>
      </section>

    </PouchLayout>
  )
}
