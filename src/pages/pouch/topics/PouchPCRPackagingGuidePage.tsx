import React from 'react'
import { Helmet } from 'react-helmet-async'
import { BarChart3, Package, CheckCircle, Award, Zap, Globe, Factory, Recycle, ArrowLeftRight, TrendingUp, ShoppingBag, Target, Shield, MessageCircle, Thermometer, Wind, Droplets, Microscope, Beaker, Layers } from 'lucide-react'
import PouchLayout from '../../../components/pouch/PouchLayout'
import { NeoButton, NeoCard, NeoBadge } from '../../../components/pouch/PouchUI'
import { getBaseUrl } from '../../../utils/domain'
import ClickableImage from '../../../components/ClickableImage'
import { useTranslation } from 'react-i18next'

const translations = {
  en: {
    title: "5 Common PCR Packaging Problems (And Solutions)",
    p1: "Inferior Mechanical Strength",
    d1: "PCR materials can suffer from degraded tensile and tear strength, making the pouch prone to bursting.",
    s1: "Use multi-layer co-extrusion, placing virgin PE in the core layer and PCR in the outer layers for structural integrity.",
    p2: "Poor Clarity and Haze",
    d2: "Recycled resins often have impurities that create a cloudy or grey appearance on the film.",
    s2: "Select high-purity, optically sorted PCR streams and incorporate specialized clarifying agents during the extrusion process.",
    p3: "Unpleasant Odors from Recycled Content",
    d3: "Residual contaminants from the recycling process can emit strong smells that affect the product.",
    s3: "Implement advanced degassing and deodorization technologies during the PCR pelletizing and extrusion phase.",
    p4: "Unstable Sealing Properties",
    d4: "Variations in the PCR melt index can lead to inconsistent heat sealing and potential leaks.",
    s4: "Utilize a 100% virgin sealant layer on the innermost film surface to guarantee consistent and strong heat seals.",
    p5: "Food Contact Compliance Issues",
    d5: "Standard PCR materials may contain unsafe contaminants, making them unsuitable for food packaging.",
    s5: "Use only FDA/EFSA approved food-grade PCR resins, and employ functional barrier layers to prevent migration."
  },
  es: {
    title: "5 Problemas Comunes de Empaques PCR (Y Soluciones)",
    p1: "Fuerza Mecánica Inferior",
    d1: "Los materiales PCR pueden sufrir degradación en resistencia, haciendo que la bolsa sea propensa a romperse.",
    s1: "Use coextrusión multicapa, colocando PE virgen en la capa central y PCR en las capas exteriores para la integridad.",
    p2: "Mala Claridad y Opacidad",
    d2: "Las resinas recicladas suelen tener impurezas que crean un aspecto turbio o gris en la película.",
    s2: "Seleccione flujos de PCR de alta pureza y agregue agentes clarificantes especializados durante la extrusión.",
    p3: "Olores Desagradables del Contenido Reciclado",
    d3: "Los contaminantes residuales del proceso de reciclaje pueden emitir olores fuertes que afectan al producto.",
    s3: "Implemente tecnologías avanzadas de desgasificación y desodorización durante la fase de peletización de PCR.",
    p4: "Propiedades de Sellado Inestables",
    d4: "Las variaciones en el índice de fluidez del PCR pueden causar un sellado térmico inconsistente y posibles fugas.",
    s4: "Utilice una capa de sellado 100% virgen en la superficie interna para garantizar sellados fuertes y consistentes.",
    p5: "Problemas de Cumplimiento de Contacto con Alimentos",
    d5: "Los materiales PCR estándar pueden contener contaminantes, haciéndolos inadecuados para alimentos.",
    s5: "Use solo resinas PCR de grado alimenticio aprobadas por FDA/EFSA, y emplee barreras funcionales."
  },
  fr: {
    title: "5 Problèmes Courants d'Emballages PCR (Et Solutions)",
    p1: "Résistance Mécanique Inférieure",
    d1: "Les matériaux PCR peuvent perdre en résistance, rendant le sachet vulnérable aux déchirures.",
    s1: "Utilisez la co-extrusion multicouche, en plaçant du PE vierge au centre pour garantir l'intégrité structurelle.",
    p2: "Mauvaise Clarté et Opacité",
    d2: "Les résines recyclées ont souvent des impuretés qui créent un aspect trouble ou gris sur le film.",
    s2: "Sélectionnez des flux PCR de haute pureté et intégrez des agents clarifiants lors de l'extrusion.",
    p3: "Odeurs Désagréables du Contenu Recyclé",
    d3: "Les contaminants du processus de recyclage peuvent émettre de fortes odeurs affectant le produit.",
    s3: "Mettez en œuvre des technologies avancées de dégazage et de désodorisation lors de la phase d'extrusion.",
    p4: "Propriétés de Scellage Instables",
    d4: "Les variations de l'indice de fluidité du PCR peuvent entraîner un thermoscellage irrégulier.",
    s4: "Utilisez une couche scellante 100% vierge sur la surface interne pour garantir des scellages constants.",
    p5: "Problèmes de Conformité Alimentaire",
    d5: "Les matériaux PCR standard peuvent contenir des contaminants, les rendant inadaptés pour l'alimentation.",
    s5: "Utilisez uniquement des résines PCR approuvées par la FDA/EFSA et des couches barrières fonctionnelles."
  },
  "zh-TW": {
    title: "5個常見的PCR包裝問題（及解決方案）",
    p1: "機械強度較低",
    d1: "PCR 材料的抗拉和抗撕裂強度可能會下降，使袋子容易破裂。",
    s1: "採用多層共擠技術，將原生 PE 放在芯層，PCR 放在外層，以確保結構完整性。",
    p2: "透明度差和霧度高",
    d2: "回收樹脂通常含有雜質，會在薄膜上產生渾濁或灰色的外觀。",
    s2: "選擇高純度、經過光學分揀的 PCR 來源，並在擠出過程中加入專門的透明劑。",
    p3: "回收材料產生異味",
    d3: "回收過程中的殘留污染物會散發出強烈的氣味，影響產品。",
    s3: "在 PCR 造粒和擠出階段實施先進的脫氣和除臭技術。",
    p4: "封口性能不穩定",
    d4: "PCR 熔融指數的變化可能導致熱封不一致和潛在的洩漏。",
    s4: "在最內層薄膜表面使用 100% 原生密封層，以確保一致且牢固的熱封。",
    p5: "食品接觸合規問題",
    d5: "標準 PCR 材料可能含有不安全的污染物，不適合用於食品包裝。",
    s5: "僅使用經 FDA/EFSA 批准的食品級 PCR 樹脂，並採用功能性阻隔層防止遷移。"
  }
};

const sectionsForPouch = ["5 Common PCR Packaging Problems (And Solutions)"];
const sectionsForAchieve = ["5 Common PCR Packaging Problems (And Solutions)"];

const PouchPCRPackagingGuidePage: React.FC = () => {
  const { t } = useTranslation()
  const p = 'seoPages.pages.pouchPCRPackagingGuide'
  const baseUrl = getBaseUrl()
  
  const PCR_METRICS = [
    { label: t(`${p}.metrics.0.label`), value: t(`${p}.metrics.0.value`), unit: t(`${p}.metrics.0.unit`), desc: t(`${p}.metrics.0.desc`) },
    { label: t(`${p}.metrics.1.label`), value: t(`${p}.metrics.1.value`), unit: t(`${p}.metrics.1.unit`), desc: t(`${p}.metrics.1.desc`) },
    { label: t(`${p}.metrics.2.label`), value: t(`${p}.metrics.2.value`), unit: t(`${p}.metrics.2.unit`), desc: t(`${p}.metrics.2.desc`) },
    { label: t(`${p}.metrics.3.label`), value: t(`${p}.metrics.3.value`), unit: t(`${p}.metrics.3.unit`), desc: t(`${p}.metrics.3.desc`) }
  ]

  return (
    <PouchLayout>
      <Helmet>
        <title>{t(`${p}.title`)}</title>
        <meta name="description" content={t(`${p}.description`)} />
        <link rel="canonical" href={`${baseUrl}/topics/pcr-packaging`} />
        <meta name="keywords" content="PCR packaging, post-consumer recycled, GRS certified, recycled plastic, circular economy" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative pt-12 pb-24 border-b-4 border-black bg-[radial-gradient(#262626_1px,transparent_1px)] [background-size:24px_24px] bg-neutral-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-left">
              <NeoBadge color="magenta">{t(`${p}.hero.badge`)}</NeoBadge>
              <h1 className="mt-8 font-black text-6xl md:text-8xl leading-none uppercase italic">{t(`${p}.hero.titleLine1`)}<br/>{t(`${p}.hero.titleLine2`)}<br/><span className="text-black drop-shadow-[4px_4px_0px_rgba(212,255,0,1)]">{t(`${p}.hero.titleLine3`)}</span></h1>
              <p className="mt-8 text-xl font-bold font-['JetBrains_Mono'] text-gray-800 bg-white border-4 border-black p-6 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
                {t(`${p}.hero.subtitle`)}<strong>{t(`${p}.hero.subtitleBold`)}</strong>{t(`${p}.hero.subtitleEnd`)}
              </p>
              <div className="flex flex-wrap gap-6 mt-12">
                <NeoButton variant="primary" to="/products">{t(`${p}.hero.btnBrowse`)}</NeoButton>
                <NeoButton variant="secondary" to="/sample">{t(`${p}.hero.btnRequest`)}</NeoButton>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-neutral-400 translate-x-4 translate-y-4 border-4 border-black" />
              <ClickableImage 
                src="/imgs/topics/pcr-recycling-hero.png" 
                alt={t(`${p}.hero.imgAlt`)} 
                className="relative z-10 border-4 border-black w-full shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Engineering: The PCR Framework */}
      <section className="py-24 bg-white border-b-4 border-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="absolute inset-0 bg-neutral-400 translate-x-4 translate-y-4 border-4 border-black" />
              <ClickableImage 
                src="/imgs/illustrated/a_pouch_sizing_guide_card_v3_5278730.webp" 
                alt={t(`${p}.engineering.imgAlt`)} 
                className="relative z-10 border-4 border-black w-full shadow-2xl"
              />
            </div>
            <div>
              <NeoBadge color="blue">{t(`${p}.engineering.badge`)}</NeoBadge>
              <h2 className="font-black text-5xl md:text-7xl mt-6 uppercase leading-tight italic">{t(`${p}.engineering.titleLine1`)}<br/>{t(`${p}.engineering.titleLine2`)}</h2>
              <p className="mt-8 text-xl text-gray-600 font-['JetBrains_Mono'] leading-relaxed">
                {t(`${p}.engineering.desc1`)}<strong>{t(`${p}.engineering.bold1`)}</strong>{t(`${p}.engineering.desc2`)}<strong>{t(`${p}.engineering.bold2`)}</strong>{t(`${p}.engineering.desc3`)}<strong>{t(`${p}.engineering.bold3`)}</strong>{t(`${p}.engineering.desc4`)}<strong>{t(`${p}.engineering.bold4`)}</strong>{t(`${p}.engineering.desc5`)}<strong>{t(`${p}.engineering.bold5`)}</strong>{t(`${p}.engineering.desc6`)}
              </p>
              <div className="mt-8 grid grid-cols-2 gap-4">
                {PCR_METRICS.map((pm, i) => (
                  <div key={i} className="bg-white border-4 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 transition-all">
                    <h4 className="font-black uppercase text-xs mb-1 text-black">{pm.label}</h4>
                    <p className="text-xl font-black">{pm.value} <span className="text-[10px] opacity-60 font-normal">{pm.unit}</span></p>
                    <p className="text-[10px] font-bold opacity-60">{pm.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical: The PCR Tech Stack */}
      <section className="py-24 bg-black text-white border-b-4 border-black">
        <div className="max-w-7xl mx-auto px-6">
          <NeoBadge color="lime">{t(`${p}.techStack.badge`)}</NeoBadge>
          <h2 className="font-black text-5xl md:text-8xl mt-6 uppercase leading-none italic mb-16">{t(`${p}.techStack.titleLine1`)}<br/>{t(`${p}.techStack.titleLine2`)}</h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            {[0, 1, 2, 3].map((idx) => (
              <div key={idx} className="border-l-4 border-[#D4FF00] pl-8 py-4">
                <h3 className="text-3xl font-black uppercase mb-4">{t(`${p}.techStack.items.${idx}.title`)}</h3>
                <p className="text-lg font-['JetBrains_Mono'] opacity-70 leading-relaxed">
                  {t(`${p}.techStack.items.${idx}.desc`)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Laboratory Verification Section */}
      <section className="py-24 bg-neutral-100 border-b-4 border-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <NeoBadge color="blue">{t(`${p}.lab.badge`)}</NeoBadge>
              <h2 className="font-black text-5xl md:text-7xl mt-6 uppercase leading-tight italic">{t(`${p}.lab.titleLine1`)}<br/>{t(`${p}.lab.titleLine2`)}</h2>
              <p className="mt-8 text-xl text-gray-700 font-['JetBrains_Mono'] leading-relaxed">
                {t(`${p}.lab.desc1`)}<strong>{t(`${p}.lab.bold1`)}</strong>{t(`${p}.lab.desc2`)}<strong>{t(`${p}.lab.bold2`)}</strong>{t(`${p}.lab.desc3`)}<strong>{t(`${p}.lab.bold3`)}</strong>{t(`${p}.lab.desc4`)}<strong>{t(`${p}.lab.bold4`)}</strong>{t(`${p}.lab.desc5`)}
              </p>
              <div className="mt-12 space-y-4">
                <div className="bg-white p-6 border-4 border-black flex gap-6 items-center">
                  <Microscope className="w-12 h-12 flex-shrink-0" />
                  <div>
                    <h4 className="font-black uppercase">{t(`${p}.lab.purity.title`)}</h4>
                    <p className="text-sm opacity-60">{t(`${p}.lab.purity.desc`)}</p>
                  </div>
                </div>
                <div className="bg-white p-6 border-4 border-black flex gap-6 items-center">
                  <TrendingUp className="w-12 h-12 flex-shrink-0" />
                  <div>
                    <h4 className="font-black uppercase">{t(`${p}.lab.carbon.title`)}</h4>
                    <p className="text-sm opacity-60">{t(`${p}.lab.carbon.desc`)}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-neutral-400 translate-x-4 translate-y-4 border-4 border-black" />
              <ClickableImage 
                src="/imgs/illustrated/a_topic_02_dtc_pkg_var_c_7412861.webp" 
                alt={t(`${p}.lab.imgAlt`)} 
                className="relative z-10 border-4 border-black w-full shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ: PCR Intelligence */}
      <section className="py-24 bg-white border-b-4 border-black">
        <div className="max-w-4xl mx-auto px-6">
          <NeoBadge color="magenta">{t(`${p}.faq.badge`)}</NeoBadge>
          <h2 className="font-black text-5xl md:text-7xl mt-6 uppercase leading-tight italic mb-12">{t(`${p}.faq.titleLine1`)}<br/>{t(`${p}.faq.titleLine2`)}</h2>
          <div className="space-y-4">
            {[0, 1, 2, 3].map((idx) => (
              <div key={idx} className="bg-white border-4 border-black p-8 hover:translate-x-1 hover:translate-y-1 hover:shadow-none shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all">
                <h4 className="font-black text-xl uppercase mb-4 flex items-center gap-3">
                  <span className="w-8 h-8 bg-black text-white flex items-center justify-center text-xs">Q</span>
                  {t(`${p}.faq.items.${idx}.q`)}
                </h4>
                <p className="font-['JetBrains_Mono'] text-gray-600 pl-11">{t(`${p}.faq.items.${idx}.a`)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5 Common Problems Section */}
      <section className="py-24 bg-white border-b-4 border-black">
        <div className="max-w-4xl mx-auto px-4 md:px-6">
          <h2 className="text-4xl md:text-5xl font-['Space_Grotesk'] font-black uppercase mb-12 text-center">
            {t(`${p}.problems.title`, "5 Common PCR Packaging Problems (And Solutions)")}
          </h2>
          
          <div className="mb-12 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] overflow-hidden">
            <img 
              src="/imgs/knowledge/pcr-packaging-pain-points.jpg" 
              alt={t(`${p}.problems.imgAlt`, "PCR Packaging Pain Points and Solutions")}
              className="w-full h-auto object-cover"
            />
          </div>

          <div className="space-y-8">
            {[
              {
                title: t(`${p}.problems.items.0.title`, "Inferior Mechanical Strength"),
                desc: t(`${p}.problems.items.0.desc`, "PCR materials can suffer from degraded tensile and tear strength, making the pouch prone to bursting."),
                solution: t(`${p}.problems.items.0.solution`, "Use multi-layer co-extrusion, placing virgin PE in the core layer and PCR in the outer layers for structural integrity."),
                icon: <Layers className="w-8 h-8 text-pink-500" />
              },
              {
                title: t(`${p}.problems.items.1.title`, "Poor Clarity and Haze"),
                desc: t(`${p}.problems.items.1.desc`, "Recycled resins often have impurities that create a cloudy or grey appearance on the film."),
                solution: t(`${p}.problems.items.1.solution`, "Select high-purity, optically sorted PCR streams and incorporate specialized clarifying agents during the extrusion process."),
                icon: <Droplets className="w-8 h-8 text-blue-500" />
              },
              {
                title: t(`${p}.problems.items.2.title`, "Unpleasant Odors from Recycled Content"),
                desc: t(`${p}.problems.items.2.desc`, "Residual contaminants from the recycling process can emit strong smells that affect the product."),
                solution: t(`${p}.problems.items.2.solution`, "Implement advanced degassing and deodorization technologies during the PCR pelletizing and extrusion phase."),
                icon: <Wind className="w-8 h-8 text-orange-500" />
              },
              {
                title: t(`${p}.problems.items.3.title`, "Unstable Sealing Properties"),
                desc: t(`${p}.problems.items.3.desc`, "Variations in the PCR melt index can lead to inconsistent heat sealing and potential leaks."),
                solution: t(`${p}.problems.items.3.solution`, "Utilize a 100% virgin sealant layer on the innermost film surface to guarantee consistent and strong heat seals."),
                icon: <Thermometer className="w-8 h-8 text-green-500" />
              },
              {
                title: t(`${p}.problems.items.4.title`, "Food Contact Compliance Issues"),
                desc: t(`${p}.problems.items.4.desc`, "Standard PCR materials may contain unsafe contaminants, making them unsuitable for food packaging."),
                solution: t(`${p}.problems.items.4.solution`, "Use only FDA/EFSA approved food-grade PCR resins, and employ functional barrier layers to prevent migration."),
                icon: <Shield className="w-8 h-8 text-purple-500" />
              }
            ].map((item, idx) => (
              <div key={idx} className="bg-neutral-50 border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 hover:translate-x-1 hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 mt-1">{item.icon}</div>
                  <div>
                    <h3 className="font-['Space_Grotesk'] font-black text-2xl uppercase mb-2 text-black">{item.title}</h3>
                    <p className="font-['JetBrains_Mono'] text-red-600 font-bold mb-3">{item.desc}</p>
                    <div className="bg-black text-white p-4 font-['JetBrains_Mono'] text-sm">
                      <span className="text-[#D4FF00] font-bold uppercase mb-1 block">Engineering Solution:</span>
                      {item.solution}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-black text-white border-b-4 border-black">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-12">
          <NeoBadge color="lime">{t(`${p}.cta.badge`)}</NeoBadge>
          <h2 className="font-black text-6xl md:text-9xl uppercase leading-none italic">{t(`${p}.cta.titleLine1`)}<br/>{t(`${p}.cta.titleLine2`)}</h2>
          <p className="font-['JetBrains_Mono'] font-bold text-xl opacity-80 max-w-2xl mx-auto">
            {t(`${p}.cta.desc`)}
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
            <NeoButton variant="primary" to="/sample" className="!bg-white !text-black">{t(`${p}.cta.btnOrder`)}</NeoButton>
            <NeoButton variant="secondary" className="!border-white !text-white" href="https://calendly.com/30-min-free-packaging-consultancy">
              {t(`${p}.cta.btnSpeak`)}
            </NeoButton>
          </div>
        </div>
      </section>
    </PouchLayout>
  )
}

export default PouchPCRPackagingGuidePage
