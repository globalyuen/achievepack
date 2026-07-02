import React from 'react'
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet-async'
import { Shield, Zap, Package, ArrowRight, CheckCircle, Award, BarChart3, Droplets, Sun, Wind, AlertTriangle } from 'lucide-react'
import PouchLayout from '../../../components/pouch/PouchLayout'
import { NeoButton, NeoCard, NeoBadge } from '../../../components/pouch/PouchUI'
import { getBaseUrl } from '../../../utils/domain'

const translations: Record<string, any> = {
  en: {
    problemsTitle: "5 Common Kraft High Barrier Pouch Problems (And Solutions)",
    problems: [
      {
        title: "Oxygen Transmission & Food Spoilage",
        description: "Standard kraft paper is porous, leading to rapid oxygen ingress and food spoilage.",
        solution: "We integrate AL (Aluminum) or VMPET layers between the kraft and PE, ensuring near-zero Oxygen Transmission Rate (OTR)."
      },
      {
        title: "Moisture Ingress & Clumping",
        description: "Dry goods like coffee or powders can clump if moisture penetrates the packaging.",
        solution: "A specialized multi-layer structure with a high-barrier inner PE film provides exceptional Water Vapor Transmission Rate (WVTR) protection."
      },
      {
        title: "Pouch Puncturing During Transit",
        description: "Rough handling during shipping can cause sharp products to puncture the pouch.",
        solution: "We reinforce the structure with a BOPA (Nylon) layer, significantly increasing puncture resistance and structural integrity."
      },
      {
        title: "Unattractive Wrinkling of Kraft Paper",
        description: "Kraft paper can easily wrinkle or crease, ruining the premium brand aesthetic.",
        solution: "We apply a Matte BOPP outer layer over the kraft paper, protecting it from moisture and creasing while maintaining a natural look."
      },
      {
        title: "Poor Seal Integrity",
        description: "Thick multi-layer structures can be difficult to heat seal, leading to leaks.",
        solution: "We utilize high-quality PE or CPP sealing layers with optimized heat sealing profiles to ensure strong, leak-proof closures."
      }
    ]
  },
  es: {
    problemsTitle: "5 Problemas Comunes de las Bolsas Kraft de Alta Barrera (y Soluciones)",
    problems: [
      {
        title: "Transmisión de Oxígeno y Deterioro de Alimentos",
        description: "El papel kraft estándar es poroso, lo que permite la entrada rápida de oxígeno y el deterioro de los alimentos.",
        solution: "Integramos capas de AL (Aluminio) o VMPET entre el kraft y el PE, asegurando una Tasa de Transmisión de Oxígeno (OTR) casi nula."
      },
      {
        title: "Ingreso de Humedad y Aglomeración",
        description: "Los productos secos como el café o los polvos pueden aglomerarse si la humedad penetra el envase.",
        solution: "Una estructura especializada multicapa con una película interior de PE de alta barrera proporciona una protección excepcional contra la Tasa de Transmisión de Vapor de Agua (WVTR)."
      },
      {
        title: "Perforación de la Bolsa Durante el Tránsito",
        description: "El manejo brusco durante el envío puede hacer que los productos afilados perforen la bolsa.",
        solution: "Reforzamos la estructura con una capa de BOPA (Nylon), aumentando significativamente la resistencia a la perforación."
      },
      {
        title: "Arrugas Poco Atractivas en el Papel Kraft",
        description: "El papel kraft puede arrugarse fácilmente, arruinando la estética premium de la marca.",
        solution: "Aplicamos una capa exterior de BOPP mate sobre el papel kraft, protegiéndolo de la humedad y las arrugas mientras mantiene un aspecto natural."
      },
      {
        title: "Mala Integridad del Sello",
        description: "Las estructuras gruesas multicapa pueden ser difíciles de sellar por calor, provocando fugas.",
        solution: "Utilizamos capas de sellado de PE o CPP de alta calidad con perfiles de sellado por calor optimizados para garantizar cierres fuertes."
      }
    ]
  },
  fr: {
    problemsTitle: "5 Problèmes Courants des Sachets Kraft à Haute Barrière (et Solutions)",
    problems: [
      {
        title: "Transmission d'Oxygène et Détérioration des Aliments",
        description: "Le papier kraft standard est poreux, entraînant une pénétration rapide de l'oxygène.",
        solution: "Nous intégrons des couches d'AL (Aluminium) ou de VMPET entre le kraft et le PE, garantissant un taux de transmission d'oxygène (OTR) proche de zéro."
      },
      {
        title: "Pénétration d'Humidité",
        description: "Les produits secs peuvent s'agglutiner si l'humidité pénètre dans l'emballage.",
        solution: "Une structure multicouche avec un film intérieur en PE à haute barrière offre une protection exceptionnelle (WVTR)."
      },
      {
        title: "Perforation du Sachet",
        description: "Une manipulation brutale peut provoquer des perforations par des produits pointus.",
        solution: "Nous renforçons la structure avec une couche BOPA (Nylon), augmentant considérablement la résistance à la perforation."
      },
      {
        title: "Plis Disgracieux du Papier Kraft",
        description: "Le papier kraft peut se froisser, ruinant l'esthétique haut de gamme.",
        solution: "Nous appliquons une couche extérieure en BOPP mat pour le protéger de l'humidité et des plis tout en conservant un aspect naturel."
      },
      {
        title: "Mauvaise Intégrité du Scellage",
        description: "Les structures multicouches épaisses peuvent être difficiles à thermosceller.",
        solution: "Nous utilisons des couches de scellage en PE ou CPP de haute qualité pour garantir des fermetures solides et étanches."
      }
    ]
  },
  'zh-TW': {
    problemsTitle: "5 個常見的牛皮紙高阻隔包裝袋問題（與解決方案）",
    problems: [
      {
        title: "氧氣滲透與食品變質",
        description: "標準牛皮紙多孔，會導致氧氣快速進入和食品變質。",
        solution: "我們在牛皮紙和 PE 之間整合了 AL (鋁箔) 或 VMPET 層，確保極低的氧氣透過率 (OTR)。"
      },
      {
        title: "濕氣滲入與結塊",
        description: "如果濕氣滲入包裝，咖啡或粉末等乾貨會結塊。",
        solution: "採用高阻隔內部 PE 薄膜的專業多層結構，提供卓越的水氣透過率 (WVTR) 防護。"
      },
      {
        title: "運輸過程中的刺穿",
        description: "運輸過程中的粗暴處理可能會導致尖銳產品刺穿包裝袋。",
        solution: "我們使用 BOPA (尼龍) 層強化結構，顯著提高抗穿刺性和結構完整性。"
      },
      {
        title: "牛皮紙起皺",
        description: "牛皮紙容易起皺或產生摺痕，破壞高端品牌美感。",
        solution: "我們在牛皮紙外層複合消光 BOPP，保護其免受濕氣和摺痕影響，同時保持自然外觀。"
      },
      {
        title: "封口完整性差",
        description: "厚實的多層結構可能難以熱封，導致漏氣。",
        solution: "我們使用高品質的 PE 或 CPP 封口層，並優化熱封參數，確保封口堅固防漏。"
      }
    ]
  }
}

const PouchKraftHighBarrierPage: React.FC = () => {
  const { t, i18n } = useTranslation()
  const currentLang = i18n.language || 'en'
  const localT = translations[currentLang] || translations['en']
  const p = 'seoPages.pages.pouchKraftHighBarrier'

  const baseUrl = getBaseUrl()
  
  const BARRIER_LEVELS = [
    { name: t(`${p}.levels.level1.name`), barrier: t(`${p}.levels.level1.barrier`), use: t(`${p}.levels.level1.use`), shelf: t(`${p}.levels.level1.shelf`) },
    { name: t(`${p}.levels.level2.name`), barrier: t(`${p}.levels.level2.barrier`), use: t(`${p}.levels.level2.use`), shelf: t(`${p}.levels.level2.shelf`) },
    { name: t(`${p}.levels.level3.name`), barrier: t(`${p}.levels.level3.barrier`), use: t(`${p}.levels.level3.use`), shelf: t(`${p}.levels.level3.shelf`) }
  ]

  return (
    <PouchLayout>
      <Helmet>
        <title>{t(`${p}.metaTitle`)}</title>
        <meta name="description" content={t(`${p}.metaDescription`)} />
        <link rel="canonical" href={`${baseUrl}/materials/kraft-high-barrier`} />
        <meta name="keywords" content={t(`${p}.metaKeywords`)} />
      </Helmet>

      {/* Hero Section */}
      <section className="relative pt-12 pb-24 border-b-4 border-black bg-[radial-gradient(#451a03_1px,transparent_1px)] [background-size:24px_24px] bg-orange-50">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <NeoBadge color="yellow">{t(`${p}.heroBadge`)}</NeoBadge>
          <h1 className="mt-8 font-black text-6xl md:text-9xl leading-none uppercase text-black">
            {t(`${p}.heroTitle1`)}<br/>{t(`${p}.heroTitle2`)}<br/>{t(`${p}.heroTitle3`)}
          </h1>
          <p className="mt-8 text-xl md:text-2xl font-bold font-['JetBrains_Mono'] text-gray-800 max-w-3xl mx-auto bg-white border-4 border-black p-6 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
            {t(`${p}.heroSubtitle`)}
          </p>
          <div className="mt-12 flex flex-wrap justify-center gap-6">
            <NeoButton variant="primary" to="/quotes/flat-bottom">{t(`${p}.heroCta1`)}</NeoButton>
            <NeoButton variant="secondary" to="/products">{t(`${p}.heroCta2`)}</NeoButton>
          </div>
        </div>
      </section>

      {/* Technical Breakdown Section */}
      <section className="py-24 bg-white border-b-4 border-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="absolute inset-0 bg-[#451a03] translate-x-4 translate-y-4 border-4 border-black" />
              <img 
                src="/imgs/barrier/ads/a_kraft_high_max_4456348.webp" 
                alt={t(`${p}.heroImageAlt`, { defaultValue: "Kraft High Barrier Structure" })} 
                className="relative z-10 border-4 border-black w-full shadow-2xl"
              />
            </div>
            <div>
              <NeoBadge color="blue">{t(`${p}.techBadge`)}</NeoBadge>
              <h2 className="font-black text-5xl md:text-7xl uppercase mt-6 leading-tight">
                {t(`${p}.techTitle1`)}<br/>{t(`${p}.techTitle2`)}<br/>{t(`${p}.techTitle3`)}
              </h2>
              <p className="mt-8 text-xl text-gray-600 font-['JetBrains_Mono'] leading-relaxed">
                {t(`${p}.techDescription`)}
              </p>
              <div className="mt-8 grid grid-cols-1 gap-4">
                <div className="flex items-center gap-4 bg-[#FDE68A]/20 border-l-8 border-[#451a03] p-4">
                  <div className="bg-black text-white w-8 h-8 flex items-center justify-center font-black">1</div>
                  <span className="font-black uppercase text-sm">{t(`${p}.layer1`)}</span>
                </div>
                <div className="flex items-center gap-4 bg-[#FDE68A]/20 border-l-8 border-blue-600 p-4">
                  <div className="bg-black text-white w-8 h-8 flex items-center justify-center font-black">2</div>
                  <span className="font-black uppercase text-sm">{t(`${p}.layer2`)}</span>
                </div>
                <div className="flex items-center gap-4 bg-[#FDE68A]/20 border-l-8 border-green-600 p-4">
                  <div className="bg-black text-white w-8 h-8 flex items-center justify-center font-black">3</div>
                  <span className="font-black uppercase text-sm">{t(`${p}.layer3`)}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Barrier Level Matrix */}
      <section className="py-24 bg-black text-white border-b-4 border-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-black text-5xl md:text-7xl uppercase text-[#D4FF00] italic">{t(`${p}.matrixTitle`)}</h2>
            <p className="font-['JetBrains_Mono'] text-xl mt-4 opacity-70">{t(`${p}.matrixSubtitle`)}</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {BARRIER_LEVELS.map((level, i) => (
              <div key={i} className="border-4 border-white p-8 hover:border-[#D4FF00] group transition-all">
                <h4 className="font-black text-2xl uppercase mb-2 group-hover:text-[#D4FF00]">{level.name}</h4>
                <div className="text-sm font-bold uppercase mb-6 opacity-60">{t(`${p}.matrixLabelBarrier`, { defaultValue: "Barrier" })}: {level.barrier}</div>
                <div className="space-y-4 font-['JetBrains_Mono'] text-sm">
                  <div className="flex justify-between border-b border-white/20 pb-2">
                    <span>{t(`${p}.matrixLabelApplication`)}</span>
                    <span className="font-bold">{level.use}</span>
                  </div>
                  <div className="flex justify-between border-b border-white/20 pb-2">
                    <span>{t(`${p}.matrixLabelShelfLife`)}</span>
                    <span className="font-bold text-[#D4FF00]">{level.shelf}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Visual Component Section */}
      <section className="py-24 bg-[#F0F0F0] border-b-4 border-black">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8">
          <NeoCard>
            <Sun className="w-12 h-12 mb-6 text-orange-600" />
            <h4 className="font-black text-xl mb-4 uppercase">{t(`${p}.uvTitle`)}</h4>
            <p className="text-sm font-['JetBrains_Mono'] text-gray-600">{t(`${p}.uvDesc`)}</p>
          </NeoCard>
          <NeoCard color="bg-white shadow-[10px_10px_0px_0px_rgba(69,26,3,1)]">
            <Droplets className="w-12 h-12 mb-6 text-blue-600" />
            <h4 className="font-black text-xl mb-4 uppercase">{t(`${p}.moistureTitle`)}</h4>
            <p className="text-sm font-['JetBrains_Mono'] text-gray-600">{t(`${p}.moistureDesc`)}</p>
          </NeoCard>
          <NeoCard>
            <Wind className="w-12 h-12 mb-6 text-cyan-600" />
            <h4 className="font-black text-xl mb-4 uppercase">{t(`${p}.aromaTitle`)}</h4>
            <p className="text-sm font-['JetBrains_Mono'] text-gray-600">{t(`${p}.aromaDesc`)}</p>
          </NeoCard>
        </div>
      </section>

      {/* 5 Common Problems Section */}
      <section className="py-24 bg-white border-b-4 border-black">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <h2 className="text-4xl md:text-5xl font-['Space_Grotesk'] font-black uppercase mb-12 text-center text-black">
            {localT.problemsTitle}
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              {localT.problems.map((prob: any, idx: number) => (
                <div key={idx} className="bg-gray-50 border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                  <div className="flex items-center gap-3 mb-3">
                    <AlertTriangle className="w-6 h-6 text-[#451a03] flex-shrink-0" />
                    <h3 className="font-black text-xl uppercase">{prob.title}</h3>
                  </div>
                  <p className="font-['JetBrains_Mono'] text-sm text-gray-700 mb-4">
                    <span className="font-bold text-red-500">Problem:</span> {prob.description}
                  </p>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#10b981] flex-shrink-0 mt-0.5" />
                    <p className="font-['JetBrains_Mono'] text-sm text-gray-700">
                      <span className="font-bold text-[#10b981]">Solution:</span> {prob.solution}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div className="relative">
              <img 
                src="/imgs/knowledge/kraft-high-barrier-pain-points.jpg" 
                alt="Kraft High Barrier Pouches Engineering Solutions" 
                className="w-full h-auto border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] object-cover"
              />
              <div className="absolute top-4 -right-4 w-full h-full border-4 border-black bg-[#451a03] -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-[#451a03] text-white border-b-4 border-black">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-10">
          <NeoBadge color="yellow">{t(`${p}.ctaBadge`)}</NeoBadge>
          <h2 className="font-black text-6xl md:text-9xl uppercase leading-none">{t(`${p}.ctaTitle1`)}<br/>{t(`${p}.ctaTitle2`)}</h2>
          <p className="font-['JetBrains_Mono'] font-bold text-xl opacity-80 max-w-2xl mx-auto">
            {t(`${p}.ctaDescription`)}
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
            <NeoButton variant="primary" to="/sample" className="!bg-[#D4FF00] !text-black">{t(`${p}.ctaButton1`)}</NeoButton>
            <NeoButton variant="secondary" className="!border-white !text-white" href="https://calendly.com/30-min-free-packaging-consultancy">
              {t(`${p}.ctaButton2`)}
            </NeoButton>
          </div>
        </div>
      </section>
    </PouchLayout>
  )
}

export default PouchKraftHighBarrierPage
