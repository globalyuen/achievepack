import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Globe, Package, CheckCircle, Award, Zap, Factory, Recycle, BarChart3, ArrowLeftRight, TrendingUp, ShoppingBag, Target, Shield, MessageCircle, Thermometer, Wind, Droplets, Microscope, Beaker, Waves, Anchor, Ship, AlertTriangle } from 'lucide-react'
import PouchLayout from '../../../components/pouch/PouchLayout'
import { NeoButton, NeoCard, NeoBadge } from '../../../components/pouch/PouchUI'
import { getBaseUrl } from '../../../utils/domain'
import ClickableImage from '../../../components/ClickableImage'
import { useTranslation, Trans } from 'react-i18next'

const translations: Record<string, any> = {
  en: {
    title: "5 Common Recycled Ocean Plastic Packaging Problems (And Solutions)",
    badge: "Pain Points",
    problems: [
      { q: "1. Contamination & Odor Issues", a: "Solution: Advanced multi-stage washing, degassing, and odor-stripping technologies are applied during the extrusion phase to ensure food-safe, odor-free material." },
      { q: "2. Inconsistent Material Strength", a: "Solution: By blending ocean-bound plastics with virgin polymers or standard PCR, along with compatibilizers, structural integrity and tear resistance are maintained." },
      { q: "3. Supply Chain Traceability", a: "Solution: Implementation of strict blockchain tracking and third-party certifications like Global Recycled Standard (GRS) guarantees genuine ocean-bound origins." },
      { q: "4. High Cost vs. Virgin Plastics", a: "Solution: Leveraging government eco-incentives and optimizing logistics helps offset collection costs, making it a viable long-term investment." },
      { q: "5. Visual Imperfections (Specks/Gels)", a: "Solution: Opaque or tinted masterbatches are utilized to mask impurities, turning potential defects into a unique, organic design feature." }
    ]
  },
  es: {
    title: "5 Problemas Comunes de los Envases de Plástico Oceánico Reciclado (Y Soluciones)",
    badge: "Puntos Críticos",
    problems: [
      { q: "1. Problemas de Contaminación y Olor", a: "Solución: Se aplican tecnologías avanzadas de lavado en múltiples etapas, desgasificación y eliminación de olores durante la fase de extrusión para garantizar un material seguro y sin olores." },
      { q: "2. Resistencia Inconsistente del Material", a: "Solución: Al mezclar plásticos marinos con polímeros vírgenes o PCR estándar, junto con agentes compatibilizadores, se mantiene la integridad estructural y la resistencia al desgarro." },
      { q: "3. Trazabilidad de la Cadena de Suministro", a: "Solución: La implementación de un estricto seguimiento mediante blockchain y certificaciones de terceros como Global Recycled Standard (GRS) garantiza orígenes marinos genuinos." },
      { q: "4. Alto Costo vs. Plásticos Vírgenes", a: "Solución: Aprovechar los eco-incentivos gubernamentales y optimizar la logística ayuda a compensar los costos de recolección, convirtiéndolo en una inversión viable a largo plazo." },
      { q: "5. Imperfecciones Visuales", a: "Solución: Se utilizan mezclas maestras opacas o tintadas para enmascarar las impurezas, convirtiendo los posibles defectos en una característica de diseño orgánico único." }
    ]
  },
  fr: {
    title: "5 Problèmes Courants liés aux Emballages en Plastique Océanique Recyclé (Et Solutions)",
    badge: "Points Douloureux",
    problems: [
      { q: "1. Problèmes de Contamination et d'Odeur", a: "Solution : Des technologies avancées de lavage à plusieurs étapes, de dégazage et d'élimination des odeurs sont appliquées lors de l'extrusion pour garantir un matériau sans odeur et sûr." },
      { q: "2. Résistance Inconstante du Matériau", a: "Solution : Le mélange de plastiques océaniques avec des polymères vierges ou du PCR standard, ainsi que des agents de compatibilité, maintient l'intégrité structurelle." },
      { q: "3. Traçabilité de la Chaîne d'Approvisionnement", a: "Solution : La mise en œuvre d'un suivi strict par blockchain et de certifications comme le Global Recycled Standard (GRS) garantit une origine marine authentique." },
      { q: "4. Coût Élevé par rapport aux Plastiques Vierges", a: "Solution : L'exploitation des éco-incitations gouvernementales et l'optimisation logistique compensent les coûts de collecte, en faisant un investissement viable." },
      { q: "5. Imperfections Visuelles (Taches/Gels)", a: "Solution : Des mélanges maîtres opaques ou teintés sont utilisés pour masquer les impuretés, transformant les défauts en un élément de design organique unique." }
    ]
  },
  'zh-TW': {
    title: "回收海洋塑料包裝的5個常見問題（及解決方案）",
    badge: "痛點分析",
    problems: [
      { q: "1. 污染與異味問題", a: "解決方案：在擠出階段應用先進的多級清洗、脫氣和除味技術，確保材料無異味且符合安全標準。" },
      { q: "2. 材料強度不均", a: "解決方案：將海洋塑料與原生聚合物或標準PCR混合，並使用相容劑，以保持結構完整性和抗撕裂性。" },
      { q: "3. 供應鏈可追溯性", a: "解決方案：實施嚴格的區塊鏈追踪和全球回收標準（GRS）等第三方認證，確保真正的海洋來源。" },
      { q: "4. 成本高於原生塑料", a: "解決方案：利用政府環保激勵措施並優化物流有助於抵消收集成本，使其成為可行的長期投資。" },
      { q: "5. 視覺瑕疵（斑點/凝膠）", a: "解決方案：使用不透明或著色的色母粒來掩蓋雜質，將潛在缺陷轉化為獨特的有機設計特徵。" }
    ]
  }
};

const PouchRecycledOceanPlasticPackagingPage: React.FC = () => {
  const baseUrl = getBaseUrl()
  const { t, i18n } = useTranslation()
  const p = 'seoPages.pages.pouchRecycledOceanPlasticPackaging'
  const currentLang = i18n.language || 'en'
  const localT = translations[currentLang] || translations['en']

  return (
    <PouchLayout>
      <Helmet>
        <title>{t(`${p}.title`)}</title>
        <meta name="description" content={t(`${p}.description`)} />
        <link rel="canonical" href={`${baseUrl}/topics/recycled-ocean-plastic-packaging`} />
        <meta name="keywords" content="recycled ocean plastic, OBP packaging, prevented ocean plastic, coastal waste collection, GRS certified" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative pt-12 pb-24 border-b-4 border-black bg-[radial-gradient(#075985_1px,transparent_1px)] [background-size:24px_24px] bg-sky-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-left">
              <NeoBadge color="blue">{t(`${p}.hero.badge`)}</NeoBadge>
              <h1 className="mt-8 font-black text-6xl md:text-8xl leading-none uppercase italic">{t(`${p}.hero.headlinePrefix`)}<br/>{t(`${p}.hero.headlineMid`)}<br/><span className="text-sky-800 drop-shadow-[4px_4px_0px_rgba(212,255,0,1)]">{t(`${p}.hero.headlineSuffix`)}</span></h1>
              <p className="mt-8 text-xl font-bold font-['JetBrains_Mono'] text-gray-800 bg-white border-4 border-black p-6 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
                {t(`${p}.hero.subheading`)}
              </p>
              <div className="flex flex-wrap gap-6 mt-12">
                <NeoButton variant="primary" to="/products">{t(`${p}.cta.primaryBtn`)}</NeoButton>
                <NeoButton variant="secondary" to="/sample">{t(`${p}.cta.secondaryBtn`)}</NeoButton>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-sky-400 translate-x-4 translate-y-4 border-4 border-black" />
              <ClickableImage 
                src="/imgs/illustrated/a_pcr_card_v1_0334493.webp" 
                alt={t(`${p}.hero.imgAlt`)} 
                className="relative z-10 border-4 border-black w-full shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Engineering: The OBP Matrix */}
      <section className="py-24 bg-white border-b-4 border-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="absolute inset-0 bg-sky-400 translate-x-4 translate-y-4 border-4 border-black" />
              <ClickableImage 
                src="/imgs/illustrated/a_topic_01_eco_food_pkg_var_b_3398751.webp" 
                alt={t(`${p}.engineering.imgAlt`)} 
                className="relative z-10 border-4 border-black w-full shadow-2xl"
              />
            </div>
            <div>
              <NeoBadge color="magenta">{t(`${p}.engineering.badge`)}</NeoBadge>
              <h2 className="font-black text-5xl md:text-7xl mt-6 uppercase leading-tight italic">{t(`${p}.engineering.titleLine1`)}<br/>{t(`${p}.engineering.titleLine2`)}</h2>
              <p className="mt-8 text-xl text-gray-600 font-['JetBrains_Mono'] leading-relaxed">
                <Trans i18nKey={`${p}.engineering.description`} components={[<strong key="0" />, <strong key="1" />]} />
              </p>
              <div className="mt-8 grid grid-cols-2 gap-4">
                {[0, 1, 2, 3].map((i) => (
                  <div key={i} className="bg-white border-4 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 transition-all">
                    <h4 className="font-black uppercase text-xs mb-1 text-sky-700">{t(`${p}.stats.${i}.label`)}</h4>
                    <p className="text-xl font-black">{t(`${p}.stats.${i}.value`)} <span className="text-[10px] opacity-60 font-normal">{t(`${p}.stats.${i}.unit`)}</span></p>
                    <p className="text-[10px] font-bold opacity-60">{t(`${p}.stats.${i}.desc`)}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical: The Material Stack */}
      <section className="py-24 bg-black text-white border-b-4 border-black">
        <div className="max-w-7xl mx-auto px-6">
          <NeoBadge color="lime">{t(`${p}.technical.badge`)}</NeoBadge>
          <h2 className="font-black text-5xl md:text-8xl mt-6 uppercase leading-none italic mb-16">{t(`${p}.technical.titleLine1`)}<br/>{t(`${p}.technical.titleLine2`)}</h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            {[0, 1, 2, 3].map((idx) => (
              <div key={idx} className="border-l-4 border-sky-500 pl-8 py-4">
                <h3 className="text-3xl font-black uppercase mb-4">{t(`${p}.technical.sections.${idx}.title`)}</h3>
                <p className="text-lg font-['JetBrains_Mono'] opacity-70 leading-relaxed">
                  {t(`${p}.technical.sections.${idx}.description`)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Verification & Transparency */}
      <section className="py-24 bg-sky-50 border-b-4 border-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <NeoBadge color="blue">{t(`${p}.verification.badge`)}</NeoBadge>
              <h2 className="font-black text-5xl md:text-7xl mt-6 uppercase leading-tight italic">{t(`${p}.verification.titleLine1`)}<br/>{t(`${p}.verification.titleLine2`)}</h2>
              <p className="mt-8 text-xl text-gray-700 font-['JetBrains_Mono'] leading-relaxed">
                <Trans i18nKey={`${p}.verification.description`} components={[<strong key="0" />, <strong key="1" />]} />
              </p>
              <div className="mt-12 space-y-4">
                <div className="bg-white p-6 border-4 border-black flex gap-6 items-center">
                  <Anchor className="w-12 h-12 flex-shrink-0" />
                  <div>
                    <h4 className="font-black uppercase">{t(`${p}.verification.points.0.title`)}</h4>
                    <p className="text-sm opacity-60">{t(`${p}.verification.points.0.desc`)}</p>
                  </div>
                </div>
                <div className="bg-white p-6 border-4 border-black flex gap-6 items-center">
                  <Ship className="w-12 h-12 flex-shrink-0" />
                  <div>
                    <h4 className="font-black uppercase">{t(`${p}.verification.points.1.title`)}</h4>
                    <p className="text-sm opacity-60">{t(`${p}.verification.points.1.desc`)}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-sky-400 translate-x-4 translate-y-4 border-4 border-black" />
              <ClickableImage 
                src="/imgs/illustrated/a_topic_02_dtc_pkg_var_c_7412861.webp" 
                alt={t(`${p}.verification.imgAlt`)} 
                className="relative z-10 border-4 border-black w-full shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ: Ocean Plastic Literacy */}
      <section className="py-24 bg-[#F0F0F0] border-b-4 border-black">
        <div className="max-w-4xl mx-auto px-6">
          <NeoBadge color="magenta">{t(`${p}.faq.badge`)}</NeoBadge>
          <h2 className="font-black text-5xl md:text-7xl mt-6 uppercase leading-tight italic mb-12">{t(`${p}.faq.titleLine1`)}<br/>{t(`${p}.faq.titleLine2`)}</h2>
          <div className="space-y-4">
            {[0, 1, 2, 3].map((i) => (
              <div key={i} className="bg-white border-4 border-black p-8 hover:translate-x-1 hover:translate-y-1 hover:shadow-none shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all">
                <h4 className="font-black text-xl uppercase mb-4 flex items-center gap-3">
                  <span className="w-8 h-8 bg-black text-white flex items-center justify-center text-xs">Q</span>
                  {t(`${p}.faq.questions.${i}.q`)}
                </h4>
                <p className="font-['JetBrains_Mono'] text-gray-600 pl-11">{t(`${p}.faq.questions.${i}.a`)}</p>
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
                src="/imgs/knowledge/ocean-plastic-packaging-pain-points.jpg" 
                alt="Ocean Plastic Packaging Pain Points" 
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
      <section className="py-24 bg-sky-900 text-white border-b-4 border-black">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-12">
          <NeoBadge color="lime">{t(`${p}.cta.badge`)}</NeoBadge>
          <h2 className="font-black text-6xl md:text-9xl uppercase leading-none italic">{t(`${p}.cta.titleLine1`)}<br/>{t(`${p}.cta.titleLine2`)}</h2>
          <p className="font-['JetBrains_Mono'] font-bold text-xl opacity-80 max-w-2xl mx-auto">
            {t(`${p}.cta.description`)}
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
            <NeoButton variant="primary" to="/sample" className="!bg-white !text-sky-900">{t(`${p}.cta.primaryBtn`)}</NeoButton>
            <NeoButton variant="secondary" className="!border-white !text-white" href="https://calendly.com/30-min-free-packaging-consultancy">
              {t(`${p}.cta.secondaryBtn`)}
            </NeoButton>
          </div>
        </div>
      </section>
    </PouchLayout>
  )
}

export default PouchRecycledOceanPlasticPackagingPage
