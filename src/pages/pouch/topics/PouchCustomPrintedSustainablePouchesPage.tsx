import React from 'react'
import { useTranslation } from 'react-i18next'
import { Helmet } from 'react-helmet-async'
import { AlertTriangle, BarChart3, Package, CheckCircle, Award, Zap, Globe, Factory, Recycle, ArrowLeftRight, TrendingUp, ShoppingBag, Target, Shield, MessageCircle, Thermometer, Wind, Droplets, Microscope, Beaker, Printer, Palette } from 'lucide-react'
import PouchLayout from '../../../components/pouch/PouchLayout'
import { NeoButton, NeoCard, NeoBadge } from '../../../components/pouch/PouchUI'
import { getBaseUrl } from '../../../utils/domain'
import ClickableImage from '../../../components/ClickableImage'

const translations: Record<string, any> = {
  en: {
    title: "5 Common Custom Printed Sustainable Pouches Problems (And Solutions)",
    badge: "Troubleshooting",
    problems: [
      {
        problem: "Fading or Bleeding Inks on Sustainable Materials",
        solution: "UV-Cured Eco Inks (Provides high color fastness without harsh solvents)"
      },
      {
        problem: "Weak Seams on Compostable Films",
        solution: "Advanced Heat Seal Engineering (Optimized temperature control ensures robust, leak-proof seams)"
      },
      {
        problem: "Inconsistent Material Thickness (Gauge Variation)",
        solution: "Automated Gauge Control & Extrusion Tech (Ensures uniform film thickness)"
      },
      {
        problem: "Delamination of Multi-layer Sustainable Films",
        solution: "High-Bond Solventless Lamination (Maintains structural integrity without compromising compostability)"
      },
      {
        problem: "Poor Print Registration due to Material Stretch",
        solution: "Tension-Controlled Printing (Maintains precise registration even on extensible bio-polymers)"
      }
    ]
  },
  es: {
    title: "5 Problemas Comunes de las Bolsas Sostenibles Impresas (y Soluciones)",
    badge: "Solución de problemas",
    problems: [
      {
        problem: "Tintas que se desvanecen o corren en materiales sostenibles",
        solution: "Tintas Ecológicas de Curado UV (Alta solidez de color sin solventes agresivos)"
      },
      {
        problem: "Costuras débiles en películas compostables",
        solution: "Ingeniería Avanzada de Sellado por Calor (Control de temperatura para costuras robustas)"
      },
      {
        problem: "Espesor inconsistente del material",
        solution: "Control Automático de Calibre (Garantiza un espesor de película uniforme)"
      },
      {
        problem: "Delaminación de películas sostenibles multicapa",
        solution: "Laminación Sin Solventes de Alta Adherencia (Mantiene la integridad estructural)"
      },
      {
        problem: "Mal registro de impresión por el estiramiento del material",
        solution: "Impresión con Control de Tensión (Mantiene un registro preciso en biopolímeros extensibles)"
      }
    ]
  },
  fr: {
    title: "5 Problèmes Courants des Sachets Durables Imprimés (et Solutions)",
    badge: "Dépannage",
    problems: [
      {
        problem: "Encres qui s'estompent ou bavent sur les matériaux durables",
        solution: "Encres Écologiques à Séchage UV (Haute solidité des couleurs sans solvants agressifs)"
      },
      {
        problem: "Coutures faibles sur les films compostables",
        solution: "Ingénierie Avancée de Thermoscellage (Contrôle de température pour des coutures robustes)"
      },
      {
        problem: "Épaisseur irrégulière du matériau",
        solution: "Contrôle Automatique d'Épaisseur (Garantit une épaisseur de film uniforme)"
      },
      {
        problem: "Délamination des films durables multicouches",
        solution: "Lamination Sans Solvant à Haute Adhérence (Maintient l'intégrité structurelle)"
      },
      {
        problem: "Mauvais repérage d'impression dû à l'étirement du matériau",
        solution: "Impression à Tension Contrôlée (Maintient un repérage précis sur les biopolymères extensibles)"
      }
    ]
  },
  "zh-TW": {
    title: "客製化印刷永續包裝袋的 5 個常見問題 (及解決方案)",
    badge: "疑難排解",
    problems: [
      {
        problem: "永續材質上的油墨褪色或暈染",
        solution: "UV固化環保油墨 (提供高色牢度且無刺激性溶劑)"
      },
      {
        problem: "可堆肥薄膜的接縫脆弱",
        solution: "先進熱封工程 (優化溫度控制確保堅固防漏的接縫)"
      },
      {
        problem: "材質厚度不均",
        solution: "自動化厚度控制與擠出技術 (確保薄膜厚度均勻)"
      },
      {
        problem: "多層永續薄膜的脫層現象",
        solution: "高黏合無溶劑貼合 (在不影響可堆肥性的情況下保持結構完整性)"
      },
      {
        problem: "材質拉伸導致的印刷套印不良",
        solution: "張力控制印刷 (在可延伸的生物聚合物上也能保持精確的套印)"
      }
    ]
  }
}

export const sectionsForPouch = ["5 Common Custom Printed Sustainable Pouches Problems (And Solutions)"];
export const sectionsForAchieve = ["5 Common Custom Printed Sustainable Pouches Problems (And Solutions)"];

const PouchCustomPrintedSustainablePouchesPage: React.FC = () => {
  const { t, i18n } = useTranslation()
  const lang = i18n.language || 'en'
  const currentLang = lang.startsWith('zh') ? 'zh-TW' : (lang.split('-')[0] || 'en')
  const localT = translations[currentLang] || translations.en
  const p = 'pouchCustomPrintedSustainablePouchesPage'
  const baseUrl = getBaseUrl()
  
  const PRINT_METRICS = [
    { label: t(`${p}.metrics.colorPrec.label`), value: t(`${p}.metrics.colorPrec.value`), unit: t(`${p}.metrics.colorPrec.unit`), desc: t(`${p}.metrics.colorPrec.desc`) },
    { label: t(`${p}.metrics.resolution.label`), value: t(`${p}.metrics.resolution.value`), unit: t(`${p}.metrics.resolution.unit`), desc: t(`${p}.metrics.resolution.desc`) },
    { label: t(`${p}.metrics.printTech.label`), value: t(`${p}.metrics.printTech.value`), unit: t(`${p}.metrics.printTech.unit`), desc: t(`${p}.metrics.printTech.desc`) },
    { label: t(`${p}.metrics.inkSafety.label`), value: t(`${p}.metrics.inkSafety.value`), unit: t(`${p}.metrics.inkSafety.unit`), desc: t(`${p}.metrics.inkSafety.desc`) }
  ]

  return (
    <PouchLayout>
      <Helmet>
        <title>{t(`${p}.meta.title`)}</title>
        <meta name="description" content={t(`${p}.meta.description`)} />
        <link rel="canonical" href={`${baseUrl}/topics/custom-printed-pouches`} />
        <meta name="keywords" content={t(`${p}.meta.keywords`)} />
      </Helmet>

      {/* Hero Section */}
      <section className="relative pt-12 pb-24 border-b-4 border-black bg-[radial-gradient(#4c1d95_1px,transparent_1px)] [background-size:24px_24px] bg-neutral-50">
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
                {t(`${p}.hero.description`)}
              </p>
              <div className="flex flex-wrap gap-6 mt-12">
                <NeoButton variant="primary" to="/products">{t(`${p}.hero.btnBrowse`)}</NeoButton>
                <NeoButton variant="secondary" to="/sample">{t(`${p}.hero.btnRequest`)}</NeoButton>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-neutral-400 translate-x-4 translate-y-4 border-4 border-black" />
              <ClickableImage 
                src="/imgs/illustrated/a_printing_types_card_v2_6243973.webp" 
                alt={t(`${p}.hero.alt`)} 
                className="relative z-10 border-4 border-black w-full shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Engineering: The Branding Framework */}
      <section className="py-24 bg-white border-b-4 border-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="absolute inset-0 bg-neutral-400 translate-x-4 translate-y-4 border-4 border-black" />
              <ClickableImage 
                src="/imgs/seo-photos/a_digital_printing_customization_2717640.webp" 
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
                {PRINT_METRICS.map((item, i) => (
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

      {/* Technical: The Identity Tech Stack */}
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
                  <Palette className="w-12 h-12 flex-shrink-0" />
                  <div>
                    <h4 className="font-black uppercase">{t(`${p}.science.visualTitle`)}</h4>
                    <p className="text-sm opacity-60">{t(`${p}.science.visualDesc`)}</p>
                  </div>
                </div>
                <div className="bg-white p-6 border-4 border-black flex gap-6 items-center">
                  <TrendingUp className="w-12 h-12 flex-shrink-0" />
                  <div>
                    <h4 className="font-black uppercase">{t(`${p}.science.scaleTitle`)}</h4>
                    <p className="text-sm opacity-60">{t(`${p}.science.scaleDesc`)}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-neutral-400 translate-x-4 translate-y-4 border-4 border-black" />
              <ClickableImage 
                src="/imgs/illustrated/a_topic_04_digital_print_var_b_3318604.webp" 
                alt={t(`${p}.science.alt`)} 
                className="relative z-10 border-4 border-black w-full shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 5 Common Problems Section */}
      <section className="py-24 bg-neutral-100 border-b-4 border-black">
        <div className="max-w-7xl mx-auto px-6">
          <NeoBadge color="red">{localT.badge}</NeoBadge>
          <h2 className="font-black text-4xl md:text-6xl mt-6 uppercase leading-tight italic mb-12">
            {localT.title}
          </h2>
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              {localT.problems.map((item: any, i: number) => (
                <div key={i} className="bg-white border-4 border-black p-6 hover:translate-x-1 hover:translate-y-1 hover:shadow-none shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all">
                  <h4 className="font-black text-lg uppercase flex items-start gap-3 mb-2 text-red-600">
                    <AlertTriangle className="w-6 h-6 flex-shrink-0 mt-0.5" />
                    {item.problem}
                  </h4>
                  <p className="font-['JetBrains_Mono'] text-gray-700 flex items-start gap-3 pl-9">
                    <CheckCircle className="w-5 h-5 flex-shrink-0 text-green-600 mt-0.5" />
                    {item.solution}
                  </p>
                </div>
              ))}
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-neutral-400 translate-x-4 translate-y-4 border-4 border-black" />
              <ClickableImage 
                src="/imgs/knowledge/custom-printed-sustainable-pouches-pain-points.jpg" 
                alt="5 Common Custom Printed Sustainable Pouches Problems" 
                className="relative z-10 border-4 border-black w-full shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ: Identity Intelligence */}
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

export default PouchCustomPrintedSustainablePouchesPage
