import { Shield, Clock, Target, Zap, Package, Droplets, Wind, HelpCircle, ArrowRight, AlertTriangle } from 'lucide-react'
import { motion } from 'framer-motion'
import { Helmet } from 'react-helmet-async'
import { useTranslation } from 'react-i18next'
import PouchLayout from '../../components/pouch/PouchLayout'

// ============================================
// NEO-BRUTALIST COMPONENTS
// ============================================

import { NeoButton, NeoCard, NeoBadge } from '../../components/pouch/PouchUI'

const translations = {
  en: {
    sectionTitle: "5 Common Material Barrier Properties Problems (And Solutions)",
    problems: [
      {
        title: "1. Moisture Ingress & Clumping",
        desc: "Moisture penetrates the packaging, causing powders to clump or dry goods to become soggy.",
        solution: "Use high-barrier Aluminum (AL) or Metallized films (VMPET/VMCPP) with ultra-low Water Vapor Transmission Rate (WVTR)."
      },
      {
        title: "2. Oxidation & Flavor Loss",
        desc: "Oxygen enters the package, degrading active ingredients, coffee, or oils, leading to staleness.",
        solution: "Incorporate EVOH, Aluminum foil, or specialized K-coated films (KPET/KNY) for extreme oxygen barrier."
      },
      {
        title: "3. UV Light Degradation",
        desc: "Ultraviolet rays penetrate transparent films, causing discoloration and breakdown of sensitive nutrients.",
        solution: "Add completely opaque layers like Aluminum foil or use specialized UV-blocking inks and coatings."
      },
      {
        title: "4. Flex-Cracking During Transport",
        desc: "The barrier layer breaks due to folding and vibration during shipping, compromising protection.",
        solution: "Use Biaxially Oriented Nylon (BOPA) or ALOX/SIOX coated PET for high flexural strength and resilience."
      },
      {
        title: "5. Chemical & Oil Attack",
        desc: "Aggressive contents like spices, essential oils, or chemicals dissolve or delaminate standard sealant layers.",
        solution: "Deploy specialized chemical-resistant sealant layers like HDPE, special CPP, or specialized tie-layers."
      }
    ]
  },
  es: {
    sectionTitle: "5 problemas comunes de propiedades de barrera de materiales (y soluciones)",
    problems: [
      { title: "1. Ingreso de humedad y aglomeración", desc: "La humedad penetra, provocando que los polvos se aglomeren o los productos secos se ablanden.", solution: "Use aluminio (AL) de alta barrera o películas metalizadas con tasa de transmisión de vapor de agua (WVTR) ultra baja." },
      { title: "2. Oxidación y pérdida de sabor", desc: "El oxígeno entra, degradando ingredientes activos, café o aceites.", solution: "Incorpore EVOH, papel de aluminio o películas con recubrimiento K para una barrera extrema al oxígeno." },
      { title: "3. Degradación por luz UV", desc: "Los rayos UV penetran películas transparentes, causando decoloración y descomposición de nutrientes.", solution: "Añada capas opacas como papel de aluminio o tintas y recubrimientos especiales que bloqueen los rayos UV." },
      { title: "4. Agrietamiento por flexión", desc: "La capa de barrera se rompe debido a la vibración durante el envío, comprometiendo la protección.", solution: "Use nailon (BOPA) o PET recubierto de ALOX/SIOX para mayor resistencia a la flexión." },
      { title: "5. Ataque químico y de aceites", desc: "Contenidos agresivos disuelven o deslaminan las capas selladoras estándar.", solution: "Implemente capas de sellado resistentes a químicos como HDPE o CPP especial." }
    ]
  },
  fr: {
    sectionTitle: "5 problèmes courants de propriétés de barrière des matériaux (et solutions)",
    problems: [
      { title: "1. Pénétration d'humidité et agglutination", desc: "L'humidité pénètre, provoquant l'agglutination des poudres.", solution: "Utilisez de l'aluminium (AL) ou des films métallisés avec un taux de transmission de vapeur d'eau (WVTR) ultra-faible." },
      { title: "2. Oxydation et perte de saveur", desc: "L'oxygène pénètre, dégradant les ingrédients actifs, le café ou les huiles.", solution: "Incorporez de l'EVOH, de l'aluminium ou des films à revêtement K pour une barrière extrême à l'oxygène." },
      { title: "3. Dégradation par les rayons UV", desc: "Les rayons UV pénètrent les films transparents, causant une décoloration.", solution: "Ajoutez des couches opaques comme l'aluminium ou utilisez des encres bloquant les UV." },
      { title: "4. Fissuration par flexion", desc: "La couche barrière se brise en raison des vibrations pendant le transport.", solution: "Utilisez du nylon (BOPA) ou du PET revêtu d'ALOX/SIOX pour une haute résistance." },
      { title: "5. Attaque chimique et d'huile", desc: "Le contenu agressif dissout ou délamine les couches d'étanchéité standard.", solution: "Déployez des couches résistantes aux produits chimiques comme le HDPE ou le CPP spécial." }
    ]
  },
  'zh-TW': {
    sectionTitle: "5 個常見的材料阻隔性問題（與解決方案）",
    problems: [
      { title: "1. 水氣侵入與結塊", desc: "水分穿透包裝，導致粉末結塊或乾燥食品變軟。", solution: "使用高阻隔鋁箔 (AL) 或鍍金屬薄膜，具備超低水蒸氣透過率 (WVTR)。" },
      { title: "2. 氧化與風味流失", desc: "氧氣進入包裝，使活性成分、咖啡或油脂氧化變質。", solution: "加入 EVOH、鋁箔或特殊 K 塗層薄膜，提供極高的氧氣阻隔性。" },
      { title: "3. 紫外線降解", desc: "紫外線穿透透明薄膜，導致變色和敏感營養素分解。", solution: "增加完全不透光的鋁箔層或使用特殊的抗 UV 油墨和塗層。" },
      { title: "4. 運輸過程中的耐折裂性", desc: "阻隔層在運輸過程中的折疊和震動而破裂，失去保護作用。", solution: "使用雙向拉伸尼龍 (BOPA) 或 ALOX/SIOX 塗層 PET，提供高抗折強度。" },
      { title: "5. 化學品與油脂侵蝕", desc: "香料、精油或化學品等侵蝕性內容物會溶解或使標準封口層分層。", solution: "使用特殊的抗化學性封口層，如 HDPE、特殊 CPP 膜或特殊結合層。" }
    ]
  }
};

const propertiesData1 = [
  { material: 'OPP 20', o2: '1900', wvtr: '6' },
  { material: 'OPP 30', o2: '1800', wvtr: '5.8' },
  { material: 'OPP 40', o2: '1700', wvtr: '5.5' },
  { material: 'PET 12', o2: '85', wvtr: '55' },
  { material: 'NY 15', o2: '45', wvtr: '260' },
  { material: 'CPP 20', o2: '2000', wvtr: '6' },
  { material: 'CPP 30', o2: '1800', wvtr: '5.5' },
  { material: 'CPP 40', o2: '1700', wvtr: '5' },
  { material: 'VMCPP 25', o2: '25', wvtr: '1' },
  { material: 'VMPET 12', o2: '2', wvtr: '2' },
  { material: 'AL 7', o2: '1', wvtr: '1.4' },
];

const propertiesData2 = [
  { material: 'AL 9', o2: '1', wvtr: '1.1' },
  { material: 'LLDPE 40', o2: '5000', wvtr: '18' },
  { material: 'KOP 21', o2: '10', wvtr: '4' },
  { material: 'KNY 17', o2: '8', wvtr: '12' },
  { material: 'KPET 12', o2: '8', wvtr: '12' },
  { material: 'PEARL 30', o2: '2200', wvtr: '9' },
  { material: 'MAT OPP 20', o2: '1900', wvtr: '6' },
];

// ============================================
// MAIN PAGE
// ============================================

export default function PouchMaterialBarrierPropertiesPage() {
  const { t, i18n } = useTranslation()
  const lang = i18n.language?.toLowerCase().includes('zh') ? 'zh-TW' 
    : i18n.language?.toLowerCase().includes('es') ? 'es' 
    : i18n.language?.toLowerCase().includes('fr') ? 'fr' : 'en'
  const tLocal = translations[lang as keyof typeof translations] || translations.en

  return (
    <PouchLayout>
      <Helmet>
        <title>{t('pouchMaterialBarrierPropertiesPage.meta.title')}</title>
        <meta name="description" content={t('pouchMaterialBarrierPropertiesPage.meta.description')} />
        <link rel="canonical" href="https://pouch.eco/barriers/material-properties" />
      </Helmet>

      {/* Hero */}
      <section className="pt-12 pb-16 px-4 bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:20px_20px]">
        <div className="max-w-6xl mx-auto">
          <div className="mb-6">
            <NeoBadge color="bg-[#D4FF00]">{t('pouchMaterialBarrierPropertiesPage.hero.badge')}</NeoBadge>
          </div>

          <h1 className="font-black text-5xl md:text-7xl leading-none mb-6">
            {t('pouchMaterialBarrierPropertiesPage.hero.title1')}<br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-600">{t('pouchMaterialBarrierPropertiesPage.hero.title2')}</span>
          </h1>

          <p className="text-xl text-gray-700 mb-8 max-w-3xl font-['Space_Grotesk']" dangerouslySetInnerHTML={{ __html: t('pouchMaterialBarrierPropertiesPage.hero.subtitle') }} />
        </div>
      </section>

      {/* Key Metrics */}
      <section className="py-16 px-4 bg-white border-t-4 border-black">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-black text-4xl mb-8 uppercase">{t('pouchMaterialBarrierPropertiesPage.keyMetrics.title')}</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <NeoCard color="bg-[#00FFFF]">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-white border-2 border-black w-14 h-14 flex items-center justify-center">
                  <Wind className="w-8 h-8" />
                </div>
                <h3 className="font-black text-2xl uppercase m-0 leading-none">{t('pouchMaterialBarrierPropertiesPage.keyMetrics.o2.title')}</h3>
              </div>
              <p className="text-gray-900 mb-4 font-bold">{t('pouchMaterialBarrierPropertiesPage.keyMetrics.o2.description')}</p>
              <div className="bg-white border-2 border-black p-3 font-mono text-sm mb-2 font-bold shadow-[4px_4px_0px_0px_#000]">
                {t('pouchMaterialBarrierPropertiesPage.keyMetrics.o2.unit')}
              </div>
              <p className="text-xs text-gray-700 mt-4 uppercase font-black tracking-wider">{t('pouchMaterialBarrierPropertiesPage.keyMetrics.o2.note')}</p>
            </NeoCard>

            <NeoCard color="bg-[#FF00FF]">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-white border-2 border-black w-14 h-14 flex items-center justify-center">
                  <Droplets className="w-8 h-8" />
                </div>
                <h3 className="font-black text-2xl uppercase m-0 text-white leading-none">{t('pouchMaterialBarrierPropertiesPage.keyMetrics.wvtr.title')}</h3>
              </div>
              <p className="text-white mb-4 font-bold">{t('pouchMaterialBarrierPropertiesPage.keyMetrics.wvtr.description')}</p>
              <div className="bg-white border-2 border-black p-3 font-mono text-sm mb-2 font-bold shadow-[4px_4px_0px_0px_#000]">
                {t('pouchMaterialBarrierPropertiesPage.keyMetrics.wvtr.unit')}
              </div>
              <p className="text-xs text-white mt-4 uppercase font-black tracking-wider">{t('pouchMaterialBarrierPropertiesPage.keyMetrics.wvtr.note')}</p>
            </NeoCard>
          </div>
        </div>
      </section>

      {/* Main Tables */}
      <section className="py-16 px-4 bg-gray-50 border-t-4 border-b-4 border-black">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-black text-4xl mb-4 uppercase text-center">{t('pouchMaterialBarrierPropertiesPage.dataSection.title')}</h2>
          <p className="text-center text-sm font-['Space_Grotesk'] mb-12 max-w-2xl mx-auto border-2 border-black p-4 bg-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            {t('pouchMaterialBarrierPropertiesPage.dataSection.disclaimer')}
          </p>
          
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="bg-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-0 overflow-hidden">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-black text-[#D4FF00] font-['JetBrains_Mono']">
                    <th className="p-4 border-b-4 border-r-2 border-black font-black uppercase text-sm w-[40%]">{t('pouchMaterialBarrierPropertiesPage.dataSection.materialHeader')}</th>
                    <th className="p-4 border-b-4 border-r-2 border-black font-black uppercase text-sm text-center w-[30%]">{t('pouchMaterialBarrierPropertiesPage.dataSection.o2Header')}<br/><span className="text-[10px] font-normal leading-tight text-white block mt-1">{t('pouchMaterialBarrierPropertiesPage.dataSection.o2Unit')}</span></th>
                    <th className="p-4 border-b-4 border-black font-black uppercase text-sm text-center w-[30%]">{t('pouchMaterialBarrierPropertiesPage.dataSection.wvtrHeader')}<br/><span className="text-[10px] font-normal leading-tight text-white block mt-1">{t('pouchMaterialBarrierPropertiesPage.dataSection.wvtrUnit')}</span></th>
                  </tr>
                </thead>
                <tbody className="font-['Space_Grotesk'] font-bold">
                  {propertiesData1.map((row, idx) => (
                    <tr key={idx} className={idx % 2 === 0 ? "bg-white" : "bg-gray-100"}>
                      <td className="p-4 border-b-2 border-r-2 border-black">{row.material}</td>
                      <td className="p-4 border-b-2 border-r-2 border-black text-center font-['JetBrains_Mono']">{row.o2}</td>
                      <td className="p-4 border-b-2 border-black text-center font-['JetBrains_Mono']">{row.wvtr}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="bg-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-0 overflow-hidden self-start">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-black text-[#FF00FF] font-['JetBrains_Mono']">
                    <th className="p-4 border-b-4 border-r-2 border-black font-black uppercase text-sm w-[40%]">{t('pouchMaterialBarrierPropertiesPage.dataSection.materialHeader')}</th>
                    <th className="p-4 border-b-4 border-r-2 border-black font-black uppercase text-sm text-center w-[30%]">{t('pouchMaterialBarrierPropertiesPage.dataSection.o2Header')}<br/><span className="text-[10px] font-normal leading-tight text-white block mt-1">{t('pouchMaterialBarrierPropertiesPage.dataSection.o2Unit')}</span></th>
                    <th className="p-4 border-b-4 border-black font-black uppercase text-sm text-center w-[30%]">{t('pouchMaterialBarrierPropertiesPage.dataSection.wvtrHeader')}<br/><span className="text-[10px] font-normal leading-tight text-white block mt-1">{t('pouchMaterialBarrierPropertiesPage.dataSection.wvtrUnit')}</span></th>
                  </tr>
                </thead>
                <tbody className="font-['Space_Grotesk'] font-bold">
                  {propertiesData2.map((row, idx) => (
                    <tr key={idx} className={idx % 2 === 0 ? "bg-white" : "bg-gray-100"}>
                      <td className="p-4 border-b-2 border-r-2 border-black">{row.material}</td>
                      <td className="p-4 border-b-2 border-r-2 border-black text-center font-['JetBrains_Mono']">{row.o2}</td>
                      <td className="p-4 border-b-2 border-black text-center font-['JetBrains_Mono']">{row.wvtr}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Key Takeaways */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-black text-4xl mb-8 uppercase text-center">{t('pouchMaterialBarrierPropertiesPage.takeaways.title')}</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <NeoCard color="bg-[#D4FF00]">
              <h3 className="font-black text-xl mb-4">{t('pouchMaterialBarrierPropertiesPage.takeaways.transparent.title')}</h3>
              <p className="text-gray-900 font-bold mb-2 text-sm uppercase">{t('pouchMaterialBarrierPropertiesPage.takeaways.transparent.subtitle')}</p>
              <p className="text-gray-800 text-sm font-['Space_Grotesk']">
                {t('pouchMaterialBarrierPropertiesPage.takeaways.transparent.description')}
              </p>
            </NeoCard>

            <NeoCard color="bg-black text-white">
              <h3 className="font-black text-xl mb-4 text-[#D4FF00]">{t('pouchMaterialBarrierPropertiesPage.takeaways.metallized.title')}</h3>
              <p className="text-[#D4FF00] font-bold mb-2 text-sm uppercase">{t('pouchMaterialBarrierPropertiesPage.takeaways.metallized.subtitle')}</p>
              <p className="text-gray-300 text-sm font-['Space_Grotesk']">
                {t('pouchMaterialBarrierPropertiesPage.takeaways.metallized.description')}
              </p>
            </NeoCard>

            <NeoCard color="bg-[#00FFFF]">
              <h3 className="font-black text-xl mb-4">{t('pouchMaterialBarrierPropertiesPage.takeaways.aluminum.title')}</h3>
              <p className="text-black font-bold mb-2 text-sm uppercase">{t('pouchMaterialBarrierPropertiesPage.takeaways.aluminum.subtitle')}</p>
              <p className="text-black text-sm font-['Space_Grotesk']">
                {t('pouchMaterialBarrierPropertiesPage.takeaways.aluminum.description')}
              </p>
            </NeoCard>

            <NeoCard color="bg-[#FF00FF]">
              <h3 className="font-black text-xl mb-4 text-white">{t('pouchMaterialBarrierPropertiesPage.takeaways.pvdc.title')}</h3>
              <p className="text-white font-bold mb-2 text-sm uppercase">{t('pouchMaterialBarrierPropertiesPage.takeaways.pvdc.subtitle')}</p>
              <p className="text-white text-sm font-['Space_Grotesk']">
                {t('pouchMaterialBarrierPropertiesPage.takeaways.pvdc.description')}
              </p>
            </NeoCard>
          </div>
        </div>
      </section>

      {/* 5 Common Problems */}
      <section className="py-16 px-4 bg-white border-t-4 border-black">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-black text-4xl mb-12 uppercase text-center">{tLocal.sectionTitle}</h2>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="border-4 border-black shadow-[8px_8px_0px_0px_#000] overflow-hidden bg-[#D4FF00]">
              <img 
                src="/imgs/knowledge/material-barrier-properties-pain-points.jpg" 
                alt={tLocal.sectionTitle}
                className="w-full h-auto mix-blend-multiply"
              />
            </div>
            <div className="space-y-6">
              {tLocal.problems.map((prob, idx) => (
                <NeoCard key={idx} color={idx % 2 === 0 ? "bg-[#00FFFF]" : "bg-[#FF00FF]"}>
                  <div className="flex gap-4">
                    <div className="mt-1">
                      <AlertTriangle className={idx % 2 === 0 ? "text-black" : "text-white"} />
                    </div>
                    <div>
                      <h3 className={`font-black text-xl mb-2 ${idx % 2 === 0 ? "text-black" : "text-white"}`}>{prob.title}</h3>
                      <p className={`font-bold mb-2 ${idx % 2 === 0 ? "text-gray-900" : "text-white"}`}>{prob.desc}</p>
                      <div className="bg-white border-2 border-black p-3 font-mono text-sm shadow-[4px_4px_0px_0px_#000]">
                        <span className="font-black text-black">SOLUTION:</span> <span className="text-gray-800">{prob.solution}</span>
                      </div>
                    </div>
                  </div>
                </NeoCard>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Still Unsure? */}
      <section className="py-16 px-4 bg-[#D4FF00] border-t-4 border-black">
        <div className="max-w-4xl mx-auto text-center">
          <NeoCard className="bg-white">
            <HelpCircle className="w-16 h-16 mx-auto mb-4" />
            <h2 className="font-black text-3xl mb-4">{t('pouchMaterialBarrierPropertiesPage.cta.title')}</h2>
            <p className="text-xl text-gray-700 mb-6 font-['Space_Grotesk']" dangerouslySetInnerHTML={{ __html: t('pouchMaterialBarrierPropertiesPage.cta.description') }} />
            <NeoButton href="https://calendly.com/30-min-free-packaging-consultancy">
              {t('pouchMaterialBarrierPropertiesPage.cta.button')}
            </NeoButton>
          </NeoCard>
        </div>
      </section>

    </PouchLayout>
  )
}
