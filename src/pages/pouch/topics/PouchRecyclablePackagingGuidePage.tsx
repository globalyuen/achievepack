import React from 'react'
import { Helmet } from 'react-helmet-async'
import { useTranslation } from 'react-i18next'
import { Microscope, TrendingUp, Layers, Thermometer, Wind, Shield, Droplets } from 'lucide-react'
import PouchLayout from '../../../components/pouch/PouchLayout'
import { NeoButton, NeoCard, NeoBadge } from '../../../components/pouch/PouchUI'
import { getBaseUrl } from '../../../utils/domain'
import ClickableImage from '../../../components/ClickableImage'

const translations = {
  en: {
    title: "5 Common Recyclable Packaging Problems (And Solutions)",
    p1: "Inadequate Barrier Properties",
    d1: "Single-material structures (Mono-PE/PP) often lack the oxygen and moisture barriers of mixed materials like PET/AL/PE.",
    s1: "Apply advanced barrier coatings like AlOx, SiOx, or EVOH co-extrusion while maintaining cyclos-HTP cyclability.",
    p2: "Poor Heat Sealing Performance",
    d2: "Mono-materials tend to shrink or warp under high sealing temperatures, compromising pouch integrity.",
    s2: "Use multi-layer PE co-extrusion with a high-density (HDPE) heat-resistant outer layer and a low-density (LDPE) sealant layer.",
    p3: "Lack of Stiffness and Aesthetics",
    d3: "Recyclable PE pouches often feel soft, stretch easily, and lack the premium look of traditional laminates.",
    s3: "Incorporate Machine Direction Oriented (MDO) PE or Biaxially Oriented PE (BOPE) for enhanced stiffness, clarity, and printability.",
    p4: "Reduced Puncture Resistance",
    d4: "Mono-material films are typically more susceptible to punctures from sharp edges or heavy contents.",
    s4: "Increase the gauge of the sealant layer and utilize specialized metallocene PE (mPE) blends to boost dart impact strength.",
    p5: "Sorting Facility Rejections",
    d5: "Pouches with incompatible inks, adhesives, or attachments (like non-PE zippers) are rejected at recycling centers.",
    s5: "Ensure all components (zipper, spout, valve) are made from the same polymer family and use washable inks."
  },
  es: {
    title: "5 Problemas Comunes de Empaques Reciclables (Y Soluciones)",
    p1: "Propiedades de Barrera Inadecuadas",
    d1: "Las estructuras monomateriales a menudo carecen de barreras contra oxígeno y humedad como las de PET/AL/PE.",
    s1: "Aplique recubrimientos de barrera avanzados como AlOx, SiOx o coextrusión de EVOH manteniendo la reciclabilidad.",
    p2: "Mal Rendimiento de Sellado Térmico",
    d2: "Los monomateriales tienden a encogerse o deformarse bajo altas temperaturas, comprometiendo la bolsa.",
    s2: "Use coextrusión de PE multicapa con una capa exterior resistente al calor (HDPE) y una selladora (LDPE).",
    p3: "Falta de Rigidez y Estética",
    d3: "Las bolsas de PE reciclable a menudo se sienten suaves, se estiran fácilmente y carecen de un aspecto premium.",
    s3: "Incorpore PE orientado en la dirección de la máquina (MDO) o PE biorientado (BOPE) para mayor rigidez y claridad.",
    p4: "Resistencia Reducida a Perforaciones",
    d4: "Las películas monomateriales son típicamente más susceptibles a pinchazos por bordes afilados.",
    s4: "Aumente el grosor de la capa selladora y use mezclas de PE metaloceno (mPE) para mejorar la resistencia al impacto.",
    p5: "Rechazos en Instalaciones de Clasificación",
    d5: "Las bolsas con tintas, adhesivos o cierres incompatibles son rechazadas en los centros de reciclaje.",
    s5: "Asegure que todos los componentes (cierre, boquilla) sean de la misma familia de polímeros y use tintas lavables."
  },
  fr: {
    title: "5 Problèmes Courants d'Emballages Recyclables (Et Solutions)",
    p1: "Propriétés Barrières Inadéquates",
    d1: "Les structures mono-matériaux manquent souvent des barrières à l'oxygène et à l'humidité des matériaux mixtes.",
    s1: "Appliquez des revêtements barrières avancés comme l'AlOx, le SiOx ou la co-extrusion d'EVOH tout en maintenant la recyclabilité.",
    p2: "Mauvaise Performance de Thermoscellage",
    d2: "Les mono-matériaux ont tendance à rétrécir ou à se déformer sous des températures élevées, compromettant le sachet.",
    s2: "Utilisez une co-extrusion de PE multicouche avec une couche extérieure résistante (HDPE) et une couche scellante (LDPE).",
    p3: "Manque de Rigidité et d'Esthétique",
    d3: "Les sachets en PE recyclable sont souvent souples, s'étirent facilement et manquent d'un aspect haut de gamme.",
    s3: "Intégrez du PE orienté (MDO) ou bi-orienté (BOPE) pour une rigidité, une clarté et une imprimabilité accrues.",
    p4: "Résistance Réduite aux Perforations",
    d4: "Les films mono-matériaux sont généralement plus vulnérables aux perforations par des arêtes vives.",
    s4: "Augmentez l'épaisseur de la couche scellante et utilisez des mélanges de PE métallocène (mPE) pour améliorer la résistance.",
    p5: "Rejets dans les Centres de Tri",
    d5: "Les sachets avec des encres, colles ou fermetures incompatibles sont rejetés par les centres de recyclage.",
    s5: "Assurez-vous que tous les composants soient de la même famille de polymères et utilisez des encres lavables."
  },
  "zh-TW": {
    title: "5個常見的可回收包裝問題（及解決方案）",
    p1: "阻隔性能不足",
    d1: "單一材質結構（如單一PE/PP）通常缺乏傳統PET/AL/PE複合材料的氧氣和水分阻隔性。",
    s1: "應用AlOx、SiOx或EVOH共擠等先進的高阻隔塗層，同時保持其可回收性。",
    p2: "熱封性能差",
    d2: "單一材質在高溫密封下容易收縮或變形，影響包裝袋的完整性。",
    s2: "採用多層PE共擠技術，外層使用耐熱的高密度聚乙烯（HDPE），內層使用低密度（LDPE）密封層。",
    p3: "缺乏挺度與美觀",
    d3: "可回收PE袋通常手感較軟、易拉伸，缺乏傳統複合材料的高級質感。",
    s3: "引入機器方向拉伸PE（MDO-PE）或雙向拉伸PE（BOPE）以提高挺度、透明度和印刷適性。",
    p4: "抗穿刺性降低",
    d4: "單一材質薄膜通常更容易被鋒利邊緣或重物刺破。",
    s4: "增加密封層的厚度，並使用特殊的茂金屬PE（mPE）混合物來提高抗衝擊強度。",
    p5: "分揀中心拒收",
    d5: "帶有不相容油墨、黏合劑或附件（如非PE拉鏈）的袋子會在回收中心被拒收。",
    s5: "確保所有組件（拉鏈、吸嘴、氣閥）均由同一聚合物家族製成，並使用可清洗油墨。"
  }
};

const sectionsForPouch = ["5 Common Recyclable Packaging Problems (And Solutions)"];
const sectionsForAchieve = ["5 Common Recyclable Packaging Problems (And Solutions)"];

const PouchRecyclablePackagingGuidePage: React.FC = () => {
  const baseUrl = getBaseUrl()
  const { t } = useTranslation()
  
  const RECYCLE_METRICS = [
    { label: t('pouchRecyclablePackagingGuidePage.engineering.metrics.m1.label'), value: t('pouchRecyclablePackagingGuidePage.engineering.metrics.m1.value'), unit: t('pouchRecyclablePackagingGuidePage.engineering.metrics.m1.unit'), desc: t('pouchRecyclablePackagingGuidePage.engineering.metrics.m1.desc') },
    { label: t('pouchRecyclablePackagingGuidePage.engineering.metrics.m2.label'), value: t('pouchRecyclablePackagingGuidePage.engineering.metrics.m2.value'), unit: t('pouchRecyclablePackagingGuidePage.engineering.metrics.m2.unit'), desc: t('pouchRecyclablePackagingGuidePage.engineering.metrics.m2.desc') },
    { label: t('pouchRecyclablePackagingGuidePage.engineering.metrics.m3.label'), value: t('pouchRecyclablePackagingGuidePage.engineering.metrics.m3.value'), unit: t('pouchRecyclablePackagingGuidePage.engineering.metrics.m3.unit'), desc: t('pouchRecyclablePackagingGuidePage.engineering.metrics.m3.desc') },
    { label: t('pouchRecyclablePackagingGuidePage.engineering.metrics.m4.label'), value: t('pouchRecyclablePackagingGuidePage.engineering.metrics.m4.value'), unit: t('pouchRecyclablePackagingGuidePage.engineering.metrics.m4.unit'), desc: t('pouchRecyclablePackagingGuidePage.engineering.metrics.m4.desc') }
  ]

  return (
    <PouchLayout>
      <Helmet>
        <title>{t('pouchRecyclablePackagingGuidePage.meta.title')}</title>
        <meta name="description" content={t('pouchRecyclablePackagingGuidePage.meta.description')} />
        <link rel="canonical" href={`${baseUrl}/topics/recyclable-packaging`} />
        <meta name="keywords" content={t('pouchRecyclablePackagingGuidePage.meta.keywords')} />
      </Helmet>

      {/* Hero Section */}
      <section className="relative pt-12 pb-24 border-b-4 border-black bg-[radial-gradient(#1e3a8a_1px,transparent_1px)] [background-size:24px_24px] bg-neutral-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-left">
              <NeoBadge color="blue">{t('pouchRecyclablePackagingGuidePage.hero.badge')}</NeoBadge>
              <h1 className="mt-8 font-black text-6xl md:text-8xl leading-none uppercase italic" dangerouslySetInnerHTML={{ __html: t('pouchRecyclablePackagingGuidePage.hero.title') }} />
              <p className="mt-8 text-xl font-bold font-['JetBrains_Mono'] text-gray-800 bg-white border-4 border-black p-6 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
                {t('pouchRecyclablePackagingGuidePage.hero.subtitle')}
              </p>
              <div className="flex flex-wrap gap-6 mt-12">
                <NeoButton variant="primary" to="/products">{t('pouchRecyclablePackagingGuidePage.hero.browse')}</NeoButton>
                <NeoButton variant="secondary" to="/sample">{t('pouchRecyclablePackagingGuidePage.hero.order')}</NeoButton>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-blue-400 translate-x-4 translate-y-4 border-4 border-black" />
              <ClickableImage 
                src="/imgs/topics/ocean-bound-plastic-hero.png" 
                alt={t('pouchRecyclablePackagingGuidePage.hero.title').replace(/<br\s*\/?>/gi, ' ')} 
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
              <div className="absolute inset-0 bg-blue-400 translate-x-4 translate-y-4 border-4 border-black" />
              <ClickableImage 
                src="/imgs/illustrated/a_recyclable_mono_pe_card_v2_5619420.webp" 
                alt={t('pouchRecyclablePackagingGuidePage.engineering.title').replace(/<br\s*\/?>/gi, ' ')} 
                className="relative z-10 border-4 border-black w-full shadow-2xl"
              />
            </div>
            <div>
              <NeoBadge color="blue">{t('pouchRecyclablePackagingGuidePage.engineering.badge')}</NeoBadge>
              <h2 className="font-black text-5xl md:text-7xl mt-6 uppercase leading-tight italic" dangerouslySetInnerHTML={{ __html: t('pouchRecyclablePackagingGuidePage.engineering.title') }} />
              <p className="mt-8 text-xl text-gray-600 font-['JetBrains_Mono'] leading-relaxed">
                {t('pouchRecyclablePackagingGuidePage.engineering.p1')}
              </p>
              <div className="mt-8 grid grid-cols-2 gap-4">
                {RECYCLE_METRICS.map((p, i) => (
                  <div key={i} className="bg-white border-4 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 transition-all">
                    <h4 className="font-black uppercase text-xs mb-1 text-blue-800">{p.label}</h4>
                    <p className="text-xl font-black">{p.value} <span className="text-[10px] opacity-60 font-normal">{p.unit}</span></p>
                    <p className="text-[10px] font-bold opacity-60">{p.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical: Sortability & NIR Tech */}
      <section className="py-24 bg-black text-white border-b-4 border-black">
        <div className="max-w-7xl mx-auto px-6">
          <NeoBadge color="lime">{t('pouchRecyclablePackagingGuidePage.tech.badge')}</NeoBadge>
          <h2 className="font-black text-5xl md:text-8xl mt-6 uppercase leading-none italic mb-16" dangerouslySetInnerHTML={{ __html: t('pouchRecyclablePackagingGuidePage.tech.title') }} />
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="border-l-4 border-blue-500 pl-8 py-4">
              <h3 className="text-3xl font-black uppercase mb-4">{t('pouchRecyclablePackagingGuidePage.tech.t1.title')}</h3>
              <p className="text-lg font-['JetBrains_Mono'] opacity-70 leading-relaxed">
                {t('pouchRecyclablePackagingGuidePage.tech.t1.desc')}
              </p>
            </div>

            <div className="border-l-4 border-blue-500 pl-8 py-4">
              <h3 className="text-3xl font-black uppercase mb-4">{t('pouchRecyclablePackagingGuidePage.tech.t2.title')}</h3>
              <p className="text-lg font-['JetBrains_Mono'] opacity-70 leading-relaxed">
                {t('pouchRecyclablePackagingGuidePage.tech.t2.desc')}
              </p>
            </div>

            <div className="border-l-4 border-blue-500 pl-8 py-4">
              <h3 className="text-3xl font-black uppercase mb-4">{t('pouchRecyclablePackagingGuidePage.tech.t3.title')}</h3>
              <p className="text-lg font-['JetBrains_Mono'] opacity-70 leading-relaxed">
                {t('pouchRecyclablePackagingGuidePage.tech.t3.desc')}
              </p>
            </div>

            <div className="border-l-4 border-blue-500 pl-8 py-4">
              <h3 className="text-3xl font-black uppercase mb-4">{t('pouchRecyclablePackagingGuidePage.tech.t4.title')}</h3>
              <p className="text-lg font-['JetBrains_Mono'] opacity-70 leading-relaxed">
                {t('pouchRecyclablePackagingGuidePage.tech.t4.desc')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Laboratory Verification Section */}
      <section className="py-24 bg-blue-50 border-b-4 border-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <NeoBadge color="blue">{t('pouchRecyclablePackagingGuidePage.lab.badge')}</NeoBadge>
              <h2 className="font-black text-5xl md:text-7xl mt-6 uppercase leading-tight italic" dangerouslySetInnerHTML={{ __html: t('pouchRecyclablePackagingGuidePage.lab.title') }} />
              <p className="mt-8 text-xl text-gray-700 font-['JetBrains_Mono'] leading-relaxed">
                {t('pouchRecyclablePackagingGuidePage.lab.p1')}
              </p>
              <div className="mt-12 space-y-4">
                <div className="bg-white p-6 border-4 border-black flex gap-6 items-center">
                  <Microscope className="w-12 h-12 flex-shrink-0" />
                  <div>
                    <h4 className="font-black uppercase">{t('pouchRecyclablePackagingGuidePage.lab.f1_title')}</h4>
                    <p className="text-sm opacity-60">{t('pouchRecyclablePackagingGuidePage.lab.f1_desc')}</p>
                  </div>
                </div>
                <div className="bg-white p-6 border-4 border-black flex gap-6 items-center">
                  <TrendingUp className="w-12 h-12 flex-shrink-0" />
                  <div>
                    <h4 className="font-black uppercase">{t('pouchRecyclablePackagingGuidePage.lab.f2_title')}</h4>
                    <p className="text-sm opacity-60">{t('pouchRecyclablePackagingGuidePage.lab.f2_desc')}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-neutral-400 translate-x-4 translate-y-4 border-4 border-black" />
              <ClickableImage 
                src="/imgs/illustrated/a_monomaterial_warm_4127359.webp" 
                alt={t('pouchRecyclablePackagingGuidePage.lab.title').replace(/<br\s*\/?>/gi, ' ')} 
                className="relative z-10 border-4 border-black w-full shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 5 Common Problems Section */}
      <section className="py-24 bg-white border-b-4 border-black">
        <div className="max-w-4xl mx-auto px-4 md:px-6">
          <h2 className="text-4xl md:text-5xl font-['Space_Grotesk'] font-black uppercase mb-12 text-center">
            {t('pouchRecyclablePackagingGuidePage.problems.title', "5 Common Recyclable Packaging Problems (And Solutions)")}
          </h2>
          
          <div className="mb-12 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] overflow-hidden">
            <img 
              src="/imgs/knowledge/recyclable-packaging-pain-points.jpg" 
              alt={t('pouchRecyclablePackagingGuidePage.problems.imgAlt', "Recyclable Packaging Pain Points and Solutions")}
              className="w-full h-auto object-cover"
            />
          </div>

          <div className="space-y-8">
            {[
              {
                title: t('pouchRecyclablePackagingGuidePage.problems.items.0.title', "Inadequate Barrier Properties"),
                desc: t('pouchRecyclablePackagingGuidePage.problems.items.0.desc', "Single-material structures (Mono-PE/PP) often lack the oxygen and moisture barriers of mixed materials like PET/AL/PE."),
                solution: t('pouchRecyclablePackagingGuidePage.problems.items.0.solution', "Apply advanced barrier coatings like AlOx, SiOx, or EVOH co-extrusion while maintaining cyclos-HTP cyclability."),
                icon: <Layers className="w-8 h-8 text-pink-500" />
              },
              {
                title: t('pouchRecyclablePackagingGuidePage.problems.items.1.title', "Poor Heat Sealing Performance"),
                desc: t('pouchRecyclablePackagingGuidePage.problems.items.1.desc', "Mono-materials tend to shrink or warp under high sealing temperatures, compromising pouch integrity."),
                solution: t('pouchRecyclablePackagingGuidePage.problems.items.1.solution', "Use multi-layer PE co-extrusion with a high-density (HDPE) heat-resistant outer layer and a low-density (LDPE) sealant layer."),
                icon: <Thermometer className="w-8 h-8 text-blue-500" />
              },
              {
                title: t('pouchRecyclablePackagingGuidePage.problems.items.2.title', "Lack of Stiffness and Aesthetics"),
                desc: t('pouchRecyclablePackagingGuidePage.problems.items.2.desc', "Recyclable PE pouches often feel soft, stretch easily, and lack the premium look of traditional laminates."),
                solution: t('pouchRecyclablePackagingGuidePage.problems.items.2.solution', "Incorporate Machine Direction Oriented (MDO) PE or Biaxially Oriented PE (BOPE) for enhanced stiffness, clarity, and printability."),
                icon: <Wind className="w-8 h-8 text-orange-500" />
              },
              {
                title: t('pouchRecyclablePackagingGuidePage.problems.items.3.title', "Reduced Puncture Resistance"),
                desc: t('pouchRecyclablePackagingGuidePage.problems.items.3.desc', "Mono-material films are typically more susceptible to punctures from sharp edges or heavy contents."),
                solution: t('pouchRecyclablePackagingGuidePage.problems.items.3.solution', "Increase the gauge of the sealant layer and utilize specialized metallocene PE (mPE) blends to boost dart impact strength."),
                icon: <Shield className="w-8 h-8 text-green-500" />
              },
              {
                title: t('pouchRecyclablePackagingGuidePage.problems.items.4.title', "Sorting Facility Rejections"),
                desc: t('pouchRecyclablePackagingGuidePage.problems.items.4.desc', "Pouches with incompatible inks, adhesives, or attachments (like non-PE zippers) are rejected at recycling centers."),
                solution: t('pouchRecyclablePackagingGuidePage.problems.items.4.solution', "Ensure all components (zipper, spout, valve) are made from the same polymer family and use washable inks."),
                icon: <Droplets className="w-8 h-8 text-purple-500" />
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

      {/* FAQ: Recyclable Intelligence */}
      <section className="py-24 bg-white border-b-4 border-black">
        <div className="max-w-4xl mx-auto px-6">
          <NeoBadge color="magenta">{t('pouchRecyclablePackagingGuidePage.faq.badge')}</NeoBadge>
          <h2 className="font-black text-5xl md:text-7xl mt-6 uppercase leading-tight italic mb-12" dangerouslySetInnerHTML={{ __html: t('pouchRecyclablePackagingGuidePage.faq.title') }} />
          <div className="space-y-4">
            {[
              { q: t('pouchRecyclablePackagingGuidePage.faq.q1_q'), a: t('pouchRecyclablePackagingGuidePage.faq.q1_a') },
              { q: t('pouchRecyclablePackagingGuidePage.faq.q2_q'), a: t('pouchRecyclablePackagingGuidePage.faq.q2_a') },
              { q: t('pouchRecyclablePackagingGuidePage.faq.q3_q'), a: t('pouchRecyclablePackagingGuidePage.faq.q3_a') },
              { q: t('pouchRecyclablePackagingGuidePage.faq.q4_q'), a: t('pouchRecyclablePackagingGuidePage.faq.q4_a') }
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
      <section className="py-24 bg-blue-900 text-white border-b-4 border-black">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-12">
          <NeoBadge color="lime">{t('pouchRecyclablePackagingGuidePage.cta.badge')}</NeoBadge>
          <h2 className="font-black text-6xl md:text-9xl uppercase leading-none italic" dangerouslySetInnerHTML={{ __html: t('pouchRecyclablePackagingGuidePage.cta.title') }} />
          <p className="font-['JetBrains_Mono'] font-bold text-xl opacity-80 max-w-2xl mx-auto">
            {t('pouchRecyclablePackagingGuidePage.cta.subtitle')}
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
            <NeoButton variant="primary" to="/sample" className="!bg-white !text-blue-900">{t('pouchRecyclablePackagingGuidePage.cta.samples')}</NeoButton>
            <NeoButton variant="secondary" className="!border-white !text-white" href="https://calendly.com/30-min-free-packaging-consultancy">
              {t('pouchRecyclablePackagingGuidePage.cta.engineer')}
            </NeoButton>
          </div>
        </div>
      </section>
    </PouchLayout>
  )
}

export default PouchRecyclablePackagingGuidePage
