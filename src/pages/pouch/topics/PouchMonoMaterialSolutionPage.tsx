import React from 'react'
import { useTranslation } from 'react-i18next'
import { Helmet } from 'react-helmet-async'
import { BarChart3, Package, CheckCircle, Award, Zap, Globe, Factory, Recycle, ArrowLeftRight, TrendingUp, ShoppingBag, Target, Shield, MessageCircle, Thermometer, Wind, Droplets, Microscope, Beaker, Layers, AlertTriangle } from 'lucide-react'
import PouchLayout from '../../../components/pouch/PouchLayout'
import { NeoButton, NeoCard, NeoBadge } from '../../../components/pouch/PouchUI'
import { getBaseUrl } from '../../../utils/domain'
import ClickableImage from '../../../components/ClickableImage'

const translations: Record<string, any> = {
  en: {
    title: "5 Common Mono-Material Packaging Problems (And Solutions)",
    badge: "Pain Points",
    problems: [
      { q: "1. Low Barrier Properties (Oxygen/Moisture)", a: "Solution: Applying transparent EVOH or thin oxide (SiOx/AlOx) coatings provides high barriers without compromising single-stream recyclability." },
      { q: "2. Heat Resistance Issues During Sealing", a: "Solution: Utilizing MDO-PE (Machine Direction Oriented PE) on the outer layer provides thermal stability while the inner PE layer seals effectively at lower temperatures." },
      { q: "3. Lack of Stiffness for Stand-Up Pouches", a: "Solution: Extruding high-density PE (HDPE) or using MDO stretching techniques significantly increases rigidity and structural integrity." },
      { q: "4. Slower Packaging Machine Speeds", a: "Solution: Using slip agents and optimizing the sealing jaws with Teflon coatings ensure smooth, high-speed runability on form-fill-seal (FFS) lines." },
      { q: "5. Inferior Print Quality", a: "Solution: Employing specialized surface tension treatments (Corona) and advanced flexographic or rotogravure inks designed for PE enhances graphic vibrancy and ink adhesion." }
    ]
  },
  es: {
    title: "5 Problemas Comunes del Empaque Monomaterial (Y Soluciones)",
    badge: "Puntos Críticos",
    problems: [
      { q: "1. Bajas Propiedades de Barrera", a: "Solución: La aplicación de EVOH transparente o recubrimientos finos de óxido proporciona altas barreras sin comprometer la reciclabilidad." },
      { q: "2. Resistencia al Calor Durante el Sellado", a: "Solución: Utilizar MDO-PE en la capa externa proporciona estabilidad térmica mientras que la interna sella a temperaturas más bajas." },
      { q: "3. Falta de Rigidez en Bolsas Stand-Up", a: "Solución: Extruir HDPE o utilizar técnicas de estiramiento MDO aumenta significativamente la rigidez." },
      { q: "4. Velocidades Más Lentas en Máquinas", a: "Solución: El uso de agentes de deslizamiento y la optimización de mordazas de sellado garantizan un funcionamiento suave." },
      { q: "5. Calidad de Impresión Inferior", a: "Solución: El empleo de tratamientos Corona y tintas avanzadas diseñadas para PE mejora la vitalidad gráfica." }
    ]
  },
  fr: {
    title: "5 Problèmes Courants d'Emballage Mono-Matériau (Et Solutions)",
    badge: "Points Douloureux",
    problems: [
      { q: "1. Faibles Propriétés Barrières", a: "Solution : L'application d'EVOH transparent ou de fins revêtements d'oxyde offre des barrières élevées sans compromettre la recyclabilité." },
      { q: "2. Résistance à la Chaleur Lors du Scellage", a: "Solution : L'utilisation de MDO-PE sur la couche externe offre une stabilité thermique." },
      { q: "3. Manque de Rigidité pour Sachets Stand-Up", a: "Solution : L'extrusion de HDPE ou l'utilisation de techniques d'étirement MDO augmente la rigidité." },
      { q: "4. Vitesses d'Emballage Plus Lentes", a: "Solution : L'utilisation d'agents glissants et l'optimisation des mâchoires assurent un fonctionnement fluide." },
      { q: "5. Qualité d'Impression Inférieure", a: "Solution : Les traitements Corona et les encres avancées pour PE améliorent l'adhérence et la qualité graphique." }
    ]
  },
  'zh-TW': {
    title: "單一材質包裝的5個常見問題（及解決方案）",
    badge: "痛點分析",
    problems: [
      { q: "1. 阻隔性能低", a: "解決方案：應用透明EVOH或薄氧化物塗層可提供高阻隔性，而不影響可回收性。" },
      { q: "2. 封口時的耐熱性問題", a: "解決方案：在外層使用MDO-PE提供熱穩定性，而內層在較低溫度下有效密封。" },
      { q: "3. 自立袋缺乏剛性", a: "解決方案：擠出高密度PE（HDPE）或使用MDO拉伸技術可顯著提高剛性。" },
      { q: "4. 包裝機速度較慢", a: "解決方案：使用滑爽劑並優化封口鉗，確保生產線平穩高速運行。" },
      { q: "5. 印刷質量問題", a: "解決方案：採用專門的表面處理和專為PE設計的高級油墨，增強油墨附著力。" }
    ]
  }
};

const sectionsForPouch = ["5 Common Mono-Material Packaging Problems (And Solutions)"];
const sectionsForAchieve = ["5 Common Mono-Material Packaging Problems (And Solutions)"];

const PouchMonoMaterialSolutionPage: React.FC = () => {
  const { t, i18n } = useTranslation()
  const p = 'pouchMonoMaterialSolutionPage'
  const baseUrl = getBaseUrl()
  
  const currentLang = i18n.language || 'en'
  const localT = translations[currentLang] || translations['en']
  
  const MONO_METRICS = [
    { label: t(`${p}.metrics.purity.label`), value: t(`${p}.metrics.purity.value`), unit: t(`${p}.metrics.purity.unit`), desc: t(`${p}.metrics.purity.desc`) },
    { label: t(`${p}.metrics.power.label`), value: t(`${p}.metrics.power.value`), unit: t(`${p}.metrics.power.unit`), desc: t(`${p}.metrics.power.desc`) },
    { label: t(`${p}.metrics.recyclability.label`), value: t(`${p}.metrics.recyclability.value`), unit: t(`${p}.metrics.recyclability.unit`), desc: t(`${p}.metrics.recyclability.desc`) },
    { label: t(`${p}.metrics.barrier.label`), value: t(`${p}.metrics.barrier.value`), unit: t(`${p}.metrics.barrier.unit`), desc: t(`${p}.metrics.barrier.desc`) }
  ]

  return (
    <PouchLayout>
      <Helmet>
        <title>{t(`${p}.meta.title`)}</title>
        <meta name="description" content={t(`${p}.meta.description`)} />
        <link rel="canonical" href={`${baseUrl}/topics/mono-material-packaging`} />
        <meta name="keywords" content={t(`${p}.meta.keywords`)} />
      </Helmet>

      {/* Hero Section */}
      <section className="relative pt-12 pb-24 border-b-4 border-black bg-[radial-gradient(#1e3a8a_1px,transparent_1px)] [background-size:24px_24px] bg-neutral-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-left">
              <NeoBadge color="magenta">{t(`${p}.hero.badge`)}</NeoBadge>
              <h1 className="mt-8 font-black text-6xl md:text-8xl leading-none uppercase italic">
                {t(`${p}.hero.title`).split('\n').map((line, idx) => (
                  <React.Fragment key={idx}>
                    {line}
                    <br />
                  </React.Fragment>
                ))}
              </h1>
              <p className="mt-8 text-xl font-bold font-['JetBrains_Mono'] text-gray-800 bg-white border-4 border-black p-6 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
                {t(`${p}.hero.desc`)}
              </p>
              <div className="flex flex-wrap gap-6 mt-12">
                <NeoButton variant="primary" to="/products">{t(`${p}.hero.btnBrowse`)}</NeoButton>
                <NeoButton variant="secondary" to="/sample">{t(`${p}.hero.btnOrder`)}</NeoButton>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-blue-400 translate-x-4 translate-y-4 border-4 border-black" />
              <ClickableImage 
                src="/imgs/illustrated/a_monomaterial_warm_4127359.webp" 
                alt={t(`${p}.hero.imgAlt`)} 
                className="relative z-10 border-4 border-black w-full shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Engineering: The Mono-Material Framework */}
      <section className="py-24 bg-white border-b-4 border-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="absolute inset-0 bg-neutral-400 translate-x-4 translate-y-4 border-4 border-black" />
              <ClickableImage 
                src="/imgs/topics/ocean-bound-plastic-hero.png" 
                alt={t(`${p}.eng.imgAlt`)} 
                className="relative z-10 border-4 border-black w-full shadow-2xl"
              />
            </div>
            <div>
              <NeoBadge color="blue">{t(`${p}.eng.badge`)}</NeoBadge>
              <h2 className="font-black text-5xl md:text-7xl mt-6 uppercase leading-tight italic">
                {t(`${p}.eng.title`).split('\n').map((line, idx) => (
                  <React.Fragment key={idx}>
                    {line}
                    <br />
                  </React.Fragment>
                ))}
              </h2>
              <p className="mt-8 text-xl text-gray-600 font-['JetBrains_Mono'] leading-relaxed">
                {t(`${p}.eng.desc`)}
              </p>
              <div className="mt-8 grid grid-cols-2 gap-4">
                {MONO_METRICS.map((pMetric, i) => (
                  <div key={i} className="bg-white border-4 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 transition-all">
                    <h4 className="font-black uppercase text-xs mb-1 text-black">{pMetric.label}</h4>
                    <p className="text-xl font-black">{pMetric.value} <span className="text-[10px] opacity-60 font-normal">{pMetric.unit}</span></p>
                    <p className="text-[10px] font-bold opacity-60">{pMetric.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical: MDO-PE Science */}
      <section className="py-24 bg-black text-white border-b-4 border-black">
        <div className="max-w-7xl mx-auto px-6">
          <NeoBadge color="lime">{t(`${p}.tech.badge`)}</NeoBadge>
          <h2 className="font-black text-5xl md:text-8xl mt-6 uppercase leading-none italic mb-16">
            {t(`${p}.tech.title`).split('\n').map((line, idx) => (
              <React.Fragment key={idx}>
                {line}
                <br />
              </React.Fragment>
            ))}
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
                {t(`${p}.science.title`).split('\n').map((line, idx) => (
                  <React.Fragment key={idx}>
                    {line}
                    <br />
                  </React.Fragment>
                ))}
              </h2>
              <p className="mt-8 text-xl text-gray-700 font-['JetBrains_Mono'] leading-relaxed">
                {t(`${p}.science.desc`)}
              </p>
              <div className="mt-12 space-y-4">
                <div className="bg-white p-6 border-4 border-black flex gap-6 items-center">
                  <Microscope className="w-12 h-12 flex-shrink-0" />
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
                alt={t(`${p}.science.imgAlt`)} 
                className="relative z-10 border-4 border-black w-full shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ: Mono-Material Intelligence */}
      <section className="py-24 bg-white border-b-4 border-black">
        <div className="max-w-4xl mx-auto px-6">
          <NeoBadge color="magenta">{t(`${p}.faq.badge`)}</NeoBadge>
          <h2 className="font-black text-5xl md:text-7xl mt-6 uppercase leading-tight italic mb-12">
            {t(`${p}.faq.title`).split('\n').map((line, idx) => (
              <React.Fragment key={idx}>
                {line}
                <br />
              </React.Fragment>
            ))}
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

      {/* Pain Points Section */}
      <section className="py-24 bg-white border-b-4 border-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative order-2 lg:order-1">
              <div className="absolute inset-0 bg-red-400 translate-x-4 translate-y-4 border-4 border-black" />
              <ClickableImage 
                src="/imgs/knowledge/mono-material-packaging-pain-points.jpg" 
                alt="Mono Material Packaging Pain Points" 
                className="relative z-10 border-4 border-black w-full shadow-2xl"
              />
            </div>
            <div className="order-1 lg:order-2">
              <NeoBadge color="red">{localT.badge}</NeoBadge>
              <h2 className="font-black text-5xl md:text-6xl mt-6 uppercase leading-tight italic mb-12">
                {localT.title}
              </h2>
              <div className="space-y-6">
                {localT.problems.map((prob: any, idx: number) => (
                  <div key={idx} className="bg-neutral-50 p-6 border-l-4 border-red-500 shadow-sm">
                    <h4 className="font-bold text-neutral-900 text-xl mb-3 flex items-start gap-3">
                      <AlertTriangle className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                      {prob.q}
                    </h4>
                    <p className="text-neutral-700 text-md leading-relaxed font-['JetBrains_Mono'] ml-9">
                      {prob.a}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-blue-950 text-white border-b-4 border-black">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-12">
          <NeoBadge color="lime">{t(`${p}.cta.badge`)}</NeoBadge>
          <h2 className="font-black text-6xl md:text-9xl uppercase leading-none italic">
            {t(`${p}.cta.title`).split('\n').map((line, idx) => (
              <React.Fragment key={idx}>
                {line}
                <br />
              </React.Fragment>
            ))}
          </h2>
          <p className="font-['JetBrains_Mono'] font-bold text-xl opacity-80 max-w-2xl mx-auto">
            {t(`${p}.cta.desc`)}
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
            <NeoButton variant="primary" to="/sample" className="!bg-white !text-blue-950">{t(`${p}.cta.btnOrder`)}</NeoButton>
            <NeoButton variant="secondary" className="!border-white !text-white" href="https://calendly.com/30-min-free-packaging-consultancy">
              {t(`${p}.cta.btnSpeak`)}
            </NeoButton>
          </div>
        </div>
      </section>
    </PouchLayout>
  )
}

export default PouchMonoMaterialSolutionPage
