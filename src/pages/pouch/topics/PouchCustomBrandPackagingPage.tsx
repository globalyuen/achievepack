import React from 'react'
import { useTranslation } from 'react-i18next'
import { Helmet } from 'react-helmet-async'
import { Palette, Box, CheckCircle, Award, Zap, Globe, Factory, Recycle, BarChart3, ArrowLeftRight, TrendingUp, ShoppingBag, Sparkles, Target, Shield, MessageCircle, Thermometer, Wind, Droplets, Microscope, Beaker, Layers, MousePointer2 } from 'lucide-react'
import PouchLayout from '../../../components/pouch/PouchLayout'
import { NeoButton, NeoCard, NeoBadge } from '../../../components/pouch/PouchUI'
import { getBaseUrl } from '../../../utils/domain'
import ClickableImage from '../../../components/ClickableImage'

const localTranslations = {
  en: {
    sectionTitle: "5 Common Custom Packaging Problems (And Solutions)",
    problems: [
      {
        title: "Color Inconsistency",
        problem: "Brand colors vary between digital screens and final printed pouches.",
        solution: "Pantone (PMS) matching with spectrophotometer calibration ensures 100% color accuracy."
      },
      {
        title: "High Minimum Order Quantities (MOQ)",
        problem: "Startups cannot afford the high MOQs required by traditional printing.",
        solution: "HP Indigo digital printing allows for low MOQ with zero plate costs."
      },
      {
        title: "Fading and Scratching",
        problem: "Printed designs scratch off or fade during shipping and handling.",
        solution: "We use a reverse printing technique combined with a protective laminate layer."
      },
      {
        title: "Slow Time to Market",
        problem: "Traditional printing requires long lead times for plate creation and setup.",
        solution: "Digital printing eliminates plates, reducing turnaround times to just days."
      },
      {
        title: "Poor Print Resolution",
        problem: "Complex gradients and photographic images look pixelated on standard packaging.",
        solution: "1200 DPI high-definition digital printing captures intricate details and gradients flawlessly."
      }
    ]
  },
  es: {
    sectionTitle: "5 Problemas Comunes del Empaque Personalizado (y Soluciones)",
    problems: [
      {
        title: "Inconsistencia de Color",
        problem: "Los colores de la marca varían entre las pantallas digitales y las bolsas impresas.",
        solution: "La igualación Pantone (PMS) con calibración espectrofotométrica garantiza una precisión del 100%."
      },
      {
        title: "Altas Cantidades Mínimas de Pedido (MOQ)",
        problem: "Las startups no pueden pagar los altos MOQ de la impresión tradicional.",
        solution: "La impresión digital HP Indigo permite MOQ bajos sin costos de planchas."
      },
      {
        title: "Decoloración y Rayones",
        problem: "Los diseños impresos se rayan o se desvanecen durante el envío.",
        solution: "Utilizamos una técnica de impresión inversa combinada con una capa protectora laminada."
      },
      {
        title: "Lentitud en el Lanzamiento",
        problem: "La impresión tradicional requiere largos tiempos de entrega para las planchas.",
        solution: "La impresión digital elimina las planchas, reduciendo el tiempo a solo días."
      },
      {
        title: "Baja Resolución de Impresión",
        problem: "Los degradados e imágenes fotográficas se ven pixelados en el empaque estándar.",
        solution: "La impresión digital de alta definición de 1200 DPI captura detalles impecablemente."
      }
    ]
  },
  fr: {
    sectionTitle: "5 Problèmes Courants d'Emballage Personnalisé (et Solutions)",
    problems: [
      {
        title: "Incohérence des Couleurs",
        problem: "Les couleurs de la marque varient entre les écrans numériques et les sachets imprimés.",
        solution: "La correspondance Pantone (PMS) avec calibrage spectrophotométrique garantit une précision de 100 %."
      },
      {
        title: "Quantités Minimales de Commande (MOQ) Élevées",
        problem: "Les startups ne peuvent pas se permettre les MOQ élevés de l'impression traditionnelle.",
        solution: "L'impression numérique HP Indigo permet de faibles MOQ sans frais de plaque."
      },
      {
        title: "Décoloration et Rayures",
        problem: "Les motifs imprimés se rayent ou s'effacent pendant l'expédition.",
        solution: "Nous utilisons une technique d'impression inversée combinée à une couche protectrice stratifiée."
      },
      {
        title: "Mise sur le Marché Lente",
        problem: "L'impression traditionnelle nécessite de longs délais pour la création des plaques.",
        solution: "L'impression numérique élimine les plaques, réduisant les délais à quelques jours."
      },
      {
        title: "Mauvaise Résolution d'Impression",
        problem: "Les dégradés et les images photographiques semblent pixélisés sur un emballage standard.",
        solution: "L'impression numérique haute définition 1200 DPI capture les détails de manière impeccable."
      }
    ]
  },
  'zh-TW': {
    sectionTitle: "客製化包裝的 5 個常見問題（及解決方案）",
    problems: [
      {
        title: "顏色不一致",
        problem: "品牌顏色在數位螢幕和最終印刷的袋子之間存在差異。",
        solution: "Pantone (PMS) 匹配和分光光度計校準可確保 100% 的顏色準確度。"
      },
      {
        title: "最低訂購量 (MOQ) 高",
        problem: "新創公司無法負擔傳統印刷所需的高最低訂購量。",
        solution: "HP Indigo 數位印刷允許低 MOQ，且無需製版費用。"
      },
      {
        title: "褪色和刮痕",
        problem: "印刷圖案在運輸和處理過程中會被刮掉或褪色。",
        solution: "我們使用反面印刷技術結合保護性複合層。"
      },
      {
        title: "上市時間慢",
        problem: "傳統印刷需要很長的製版和設置時間。",
        solution: "數位印刷消除了製版過程，將交貨時間縮短至幾天。"
      },
      {
        title: "列印解析度差",
        problem: "複雜的漸層和攝影圖像在標準包裝上看起來有像素感。",
        solution: "1200 DPI 高畫質數位印刷完美捕捉複雜細節和漸層。"
      }
    ]
  }
};

const PouchCustomBrandPackagingPage: React.FC = () => {
  const { t, i18n } = useTranslation();
  const currentLang = (i18n.language || 'en') as keyof typeof localTranslations;
  const langData = localTranslations[currentLang] || localTranslations.en;
  const p = 'pouchCustomBrandPackagingPage'
  const baseUrl = getBaseUrl()
  
  const DESIGN_METRICS = [
    { label: t(`${p}.metrics.colorDeviation.label`), value: t(`${p}.metrics.colorDeviation.value`), unit: t(`${p}.metrics.colorDeviation.unit`), desc: t(`${p}.metrics.colorDeviation.desc`) },
    { label: t(`${p}.metrics.printRes.label`), value: t(`${p}.metrics.printRes.value`), unit: t(`${p}.metrics.printRes.unit`), desc: t(`${p}.metrics.printRes.desc`) },
    { label: t(`${p}.metrics.materialYield.label`), value: t(`${p}.metrics.materialYield.value`), unit: t(`${p}.metrics.materialYield.unit`), desc: t(`${p}.metrics.materialYield.desc`) },
    { label: t(`${p}.metrics.plateCost.label`), value: t(`${p}.metrics.plateCost.value`), unit: t(`${p}.metrics.plateCost.unit`), desc: t(`${p}.metrics.plateCost.desc`) }
  ]

  return (
    <PouchLayout>
      <Helmet>
        <title>{t(`${p}.meta.title`)}</title>
        <meta name="description" content={t(`${p}.meta.description`)} />
        <link rel="canonical" href={`${baseUrl}/topics/custom-brand-packaging`} />
        <meta name="keywords" content={t(`${p}.meta.keywords`)} />
      </Helmet>

      {/* Hero Section */}
      <section className="relative pt-12 pb-24 border-b-4 border-black bg-[radial-gradient(#312e81_1px,transparent_1px)] [background-size:24px_24px] bg-indigo-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-left">
              <NeoBadge color="blue">{t(`${p}.hero.badge`)}</NeoBadge>
              <h1 className="mt-8 font-black text-6xl md:text-8xl leading-none uppercase italic">
                {t(`${p}.hero.titlePart1`)}<br/>
                {t(`${p}.hero.titlePart2`)}<br/>
                <span className="text-indigo-800 drop-shadow-[4px_4px_0px_rgba(0,0,0,1)]">{t(`${p}.hero.titlePart3`)}</span>
              </h1>
              <p className="mt-8 text-xl font-bold font-['JetBrains_Mono'] text-gray-800 bg-white border-4 border-black p-6 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
                {t(`${p}.hero.description`)}
              </p>
              <div className="flex flex-wrap gap-6 mt-12">
                <NeoButton variant="primary" to="/products">{t(`${p}.hero.btnBrowse`)}</NeoButton>
                <NeoButton variant="secondary" to="/sample">{t(`${p}.hero.btnRequest`)}</NeoButton>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-indigo-400 translate-x-4 translate-y-4 border-4 border-black" />
              <ClickableImage 
                src="/imgs/illustrated/a_printing_types_card_v2_6243973.webp" 
                alt={t(`${p}.hero.alt`)} 
                className="relative z-10 border-4 border-black w-full shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Engineering: Structural Logic */}
      <section className="py-24 bg-white border-b-4 border-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="absolute inset-0 bg-indigo-400 translate-x-4 translate-y-4 border-4 border-black" />
              <ClickableImage 
                src="/imgs/illustrated/a_topic_04_digital_print_var_b_3318604.webp" 
                alt={t(`${p}.engineering.alt`)} 
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
                {DESIGN_METRICS.map((item, i) => (
                  <div key={i} className="bg-white border-4 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 transition-all">
                    <h4 className="font-black uppercase text-xs mb-1 text-indigo-700">{item.label}</h4>
                    <p className="text-xl font-black">{item.value} <span className="text-[10px] opacity-60 font-normal">{item.unit}</span></p>
                    <p className="text-[10px] font-bold opacity-60">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Deep Dive: Printing Technology */}
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

            <div className="border-l-4 border-indigo-500 pl-8 py-4">
              <h3 className="text-3xl font-black uppercase mb-4">{t(`${p}.tech.item2Title`)}</h3>
              <p className="text-lg font-['JetBrains_Mono'] opacity-70 leading-relaxed">
                {t(`${p}.tech.item2Desc`)}
              </p>
            </div>

            <div className="border-l-4 border-purple-500 pl-8 py-4">
              <h3 className="text-3xl font-black uppercase mb-4">{t(`${p}.tech.item3Title`)}</h3>
              <p className="text-lg font-['JetBrains_Mono'] opacity-70 leading-relaxed">
                {t(`${p}.tech.item3Desc`)}
              </p>
            </div>

            <div className="border-l-4 border-yellow-500 pl-8 py-4">
              <h3 className="text-3xl font-black uppercase mb-4">{t(`${p}.tech.item4Title`)}</h3>
              <p className="text-lg font-['JetBrains_Mono'] opacity-70 leading-relaxed">
                {t(`${p}.tech.item4Desc`)}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Logistics & Efficiency */}
      <section className="py-24 bg-indigo-50 border-b-4 border-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <NeoBadge color="blue">{t(`${p}.logistics.badge`)}</NeoBadge>
              <h2 className="font-black text-5xl md:text-7xl mt-6 uppercase leading-tight italic">
                {t(`${p}.logistics.titlePart1`)}<br/>
                {t(`${p}.logistics.titlePart2`)}
              </h2>
              <p className="mt-8 text-xl text-gray-700 font-['JetBrains_Mono'] leading-relaxed">
                {t(`${p}.logistics.description`)}
              </p>
              <div className="mt-12 space-y-4">
                <div className="bg-white p-6 border-4 border-black flex gap-6 items-center">
                  <BarChart3 className="w-12 h-12 flex-shrink-0" />
                  <div>
                    <h4 className="font-black uppercase">{t(`${p}.logistics.weightTitle`)}</h4>
                    <p className="text-sm opacity-60">{t(`${p}.logistics.weightDesc`)}</p>
                  </div>
                </div>
                <div className="bg-white p-6 border-4 border-black flex gap-6 items-center">
                  <TrendingUp className="w-12 h-12 flex-shrink-0" />
                  <div>
                    <h4 className="font-black uppercase">{t(`${p}.logistics.volumeTitle`)}</h4>
                    <p className="text-sm opacity-60">{t(`${p}.logistics.volumeDesc`)}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-blue-400 translate-x-4 translate-y-4 border-4 border-black" />
              <ClickableImage 
                src="/imgs/illustrated/a_topic_02_dtc_pkg_var_c_7412861.webp" 
                alt={t(`${p}.logistics.alt`)} 
                className="relative z-10 border-4 border-black w-full shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 5 Common Problems */}
      <section className="py-24 bg-white border-b-4 border-black">
        <div className="max-w-7xl mx-auto px-6">
          <NeoBadge color="magenta">SOLUTIONS_ARCHIVE</NeoBadge>
          <h2 className="font-black text-4xl md:text-6xl mt-6 uppercase leading-tight italic mb-12">{langData.sectionTitle}</h2>
          
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div className="space-y-8">
              {langData.problems.map((item, index) => (
                <div key={index} className="flex gap-4 items-start p-6 border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] bg-slate-50">
                  <div className="w-12 h-12 bg-black text-white flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-6 h-6 text-[#D4FF00]" />
                  </div>
                  <div>
                    <h3 className="font-black text-xl uppercase mb-2">{item.title}</h3>
                    <p className="font-['JetBrains_Mono'] text-red-600 mb-2"><strong>Problem:</strong> {item.problem}</p>
                    <p className="font-['JetBrains_Mono'] text-green-700"><strong>Solution:</strong> {item.solution}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="relative sticky top-24">
              <div className="absolute inset-0 bg-indigo-400 translate-x-4 translate-y-4 border-4 border-black" />
              <ClickableImage 
                src="/imgs/knowledge/custom-brand-packaging-pain-points.jpg" 
                alt="Custom Packaging Engineering Solutions" 
                className="relative z-10 border-4 border-black w-full shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ: Technical Clarity */}
      <section className="py-24 bg-[#F0F0F0] border-b-4 border-black">
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
      <section className="py-24 bg-indigo-900 text-white border-b-4 border-black">
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
            <NeoButton variant="primary" to="/sample" className="!bg-white !text-indigo-900">{t(`${p}.cta.btnSample`)}</NeoButton>
            <NeoButton variant="secondary" className="!border-white !text-white" href="https://calendly.com/30-min-free-packaging-consultancy">
              {t(`${p}.cta.btnSpeak`)}
            </NeoButton>
          </div>
        </div>
      </section>
    </PouchLayout>
  )
}

export default PouchCustomBrandPackagingPage
