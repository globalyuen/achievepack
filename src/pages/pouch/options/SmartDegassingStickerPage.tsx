import { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle, Package, Leaf, Zap, Shield, Sparkles, ChevronDown, ChevronUp, Calendar, Mail, AlertCircle } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import PouchLayout from '../../../components/pouch/PouchLayout'

export const sectionsForPouch = ["5 Common Smart Degassing Sticker Problems (And Solutions)"];
export const sectionsForAchieve = ["5 Common Smart Degassing Sticker Problems (And Solutions)"];

const translations = {
  en: {
    sectionTitle: "5 Common Smart Degassing Sticker Problems (And Solutions)",
    problems: [
      {
        title: "Pouch Bursting During Shipping",
        desc: "Excess gas from roasted coffee or fermented foods builds up, causing the bag to inflate and burst in transit.",
        solution: "Solution: Implement a one-way degassing sticker valve that safely releases CO2 at a specified pressure threshold."
      },
      {
        title: "Oxygen Entering and Spoiling Product",
        desc: "Poor quality valves allow outside oxygen to seep back in, ruining flavor and reducing shelf life.",
        solution: "Solution: Use high-precision smart valves that seal completely once internal pressure drops, preventing any reverse airflow."
      },
      {
        title: "Valves Clogged by Fine Powders",
        desc: "Fine coffee grounds or liquids block the tiny venting holes, stopping the valve from functioning.",
        solution: "Solution: Add a specialized liquid-proof or dust-proof membrane layer over the valve opening."
      },
      {
        title: "Bulky Hard Plastic Valves Increasing Costs",
        desc: "Traditional hard valves take up more space on the reel, require special application equipment, and increase shipping volume.",
        solution: "Solution: Switch to ultra-thin sticker valves that come pre-applied on the film roll."
      },
      {
        title: "Inconsistent Venting Performance",
        desc: "Batches of valves open at different pressures, leading to some bags looking bloated while others look flat.",
        solution: "Solution: Source valves from manufacturers with automated quality control testing for consistent cracking pressure."
      }
    ]
  },
  es: {
    sectionTitle: "5 Problemas Comunes con Válvulas Adhesivas Desgasificadoras (Y Soluciones)",
    problems: [
      {
        title: "Rotura de la Bolsa Durante el Envío",
        desc: "El exceso de gas del café tostado o los alimentos fermentados se acumula, lo que hace que la bolsa se infle y reviente durante el tránsito.",
        solution: "Solución: Implemente una válvula de desgasificación unidireccional que libere CO2 de forma segura a un umbral de presión específico."
      },
      {
        title: "Entrada de Oxígeno y Deterioro del Producto",
        desc: "Las válvulas de mala calidad permiten que el oxígeno exterior vuelva a entrar, arruinando el sabor y reduciendo la vida útil.",
        solution: "Solución: Utilice válvulas inteligentes de alta precisión que se sellan completamente una vez que baja la presión interna."
      },
      {
        title: "Válvulas Obstruidas por Polvos Finos",
        desc: "Los posos de café finos o los líquidos bloquean los pequeños orificios de ventilación, deteniendo el funcionamiento de la válvula.",
        solution: "Solución: Agregue una capa de membrana especializada a prueba de líquidos o polvo sobre la abertura de la válvula."
      },
      {
        title: "Válvulas Voluminosas que Aumentan los Costos",
        desc: "Las válvulas tradicionales de plástico duro ocupan más espacio en el carrete, requieren equipo de aplicación especial y aumentan el volumen de envío.",
        solution: "Solución: Cambie a válvulas adhesivas ultrafinas que vienen pre-aplicadas en el rollo de película."
      },
      {
        title: "Rendimiento de Ventilación Inconsistente",
        desc: "Lotes de válvulas se abren a diferentes presiones, lo que hace que algunas bolsas parezcan hinchadas mientras que otras se ven planas.",
        solution: "Solución: Adquiera válvulas de fabricantes con pruebas de control de calidad automatizadas para una presión de apertura constante."
      }
    ]
  },
  fr: {
    sectionTitle: "5 Problèmes Courants avec les Autocollants de Dégazage (Et Solutions)",
    problems: [
      {
        title: "Rupture de la Poche Pendant l'Expédition",
        desc: "L'excès de gaz provenant du café torréfié ou des aliments fermentés s'accumule, provoquant le gonflement et l'éclatement du sachet.",
        solution: "Solution : Mettez en œuvre une valve de dégazage unidirectionnelle qui libère le CO2 en toute sécurité à un seuil de pression spécifié."
      },
      {
        title: "L'Oxygène Pénètre et Altière le Produit",
        desc: "Les valves de mauvaise qualité permettent à l'oxygène extérieur de s'infiltrer, ruinant la saveur et réduisant la durée de conservation.",
        solution: "Solution : Utilisez des valves intelligentes de haute précision qui se scellent complètement une fois que la pression interne baisse."
      },
      {
        title: "Valves Bouchées par des Poudres Fines",
        desc: "Le marc de café fin ou les liquides bloquent les minuscules trous de ventilation, empêchant la valve de fonctionner.",
        solution: "Solution : Ajoutez une couche de membrane spécialisée étanche aux liquides ou à la poussière sur l'ouverture de la valve."
      },
      {
        title: "Valves Encombrantes Qui Augmentent les Coûts",
        desc: "Les valves rigides traditionnelles prennent plus de place sur la bobine, nécessitent un équipement d'application spécial et augmentent le volume d'expédition.",
        solution: "Solution : Passez aux valves autocollantes ultra-fines qui sont pré-appliquées sur le rouleau de film."
      },
      {
        title: "Performances de Ventilation Incohérentes",
        desc: "Les lots de valves s'ouvrent à des pressions différentes, de sorte que certains sacs semblent gonflés tandis que d'autres paraissent plats.",
        solution: "Solution : Achetez des valves auprès de fabricants proposant des tests de contrôle qualité automatisés pour une pression d'ouverture constante."
      }
    ]
  },
  "zh-TW": {
    sectionTitle: "5 個常見的智能排氣貼片問題（及解決方案）",
    problems: [
      {
        title: "運輸過程中袋子破裂",
        desc: "烘焙咖啡或發酵食品產生的多餘氣體積聚，導致袋子在運輸過程中膨脹並破裂。",
        solution: "解決方案：實施單向排氣貼片閥門，在指定的壓力閾值下安全釋放二氧化碳。"
      },
      {
        title: "氧氣進入導致產品變質",
        desc: "劣質閥門會讓外部氧氣滲入，破壞風味並縮短保質期。",
        solution: "解決方案：使用高精度智能閥門，一旦內部壓力下降，它們就會完全密封，防止任何空氣回流。"
      },
      {
        title: "細粉堵塞閥門",
        desc: "細咖啡粉或液體堵塞了微小的通風孔，導致閥門停止運作。",
        solution: "解決方案：在閥門開口上方添加一層專用的防水或防塵透氣膜。"
      },
      {
        title: "笨重的硬質塑料閥門增加成本",
        desc: "傳統硬質閥門在卷膜上佔據更多空間，需要特殊的應用設備，並增加運輸體積。",
        solution: "解決方案：改用預先貼在薄膜卷上的超薄貼片閥門。"
      },
      {
        title: "排氣性能不一致",
        desc: "各批次閥門在不同的壓力下開啟，導致有些袋子看起來膨脹，有些則扁平。",
        solution: "解決方案：向具有自動化質量控制測試的製造商採購閥門，以確保一致的開啟壓力。"
      }
    ]
  }
} as const;
type LocaleKey = keyof typeof translations;
export default function SmartDegassingStickerPage() {
  const { t, i18n } = useTranslation()
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null)
  const [lightboxImage, setLightboxImage] = useState<string | null>(null)

  // Gallery of degassing options
  const DEGASSING_GALLERY = [
    { id: 'smart-valve', name: t('smartDegassingStickerPage.gallery.smart-valve.name'), description: t('smartDegassingStickerPage.gallery.smart-valve.desc'), image: '/imgs/function/smart_sticker_valve_detail.png' },
    { id: 'squeeze-test', name: t('smartDegassingStickerPage.gallery.squeeze-test.name'), description: t('smartDegassingStickerPage.gallery.squeeze-test.desc'), image: '/imgs/function/kimchi_valve_squeeze_test.png' },
    { id: 'production', name: t('smartDegassingStickerPage.gallery.production.name'), description: t('smartDegassingStickerPage.gallery.production.desc'), image: '/imgs/function/pouch_production_line_valves.png' },
    { id: 'sticker-liner', name: t('smartDegassingStickerPage.gallery.sticker-liner.name'), description: t('smartDegassingStickerPage.gallery.sticker-liner.desc'), image: '/imgs/function/square_sticker_valves.png' },
    { id: 'header-pocket', name: t('smartDegassingStickerPage.gallery.header-pocket.name'), description: t('smartDegassingStickerPage.gallery.header-pocket.desc'), image: '/imgs/function/jongga_kimchi_bag_seal.png' },
    { id: 'absorber-packet', name: t('smartDegassingStickerPage.gallery.absorber-packet.name'), description: t('smartDegassingStickerPage.gallery.absorber-packet.desc'), image: '/imgs/function/stayfresh_co2_absorber.png' },
  ]

  // Comparison table data
  const OPTION_COMPARISON = [
    { 
      option: t('smartDegassingStickerPage.comparison.rows.absorber.option'), 
      placement: t('smartDegassingStickerPage.comparison.rows.absorber.placement'), 
      cost: t('smartDegassingStickerPage.comparison.rows.absorber.cost'), 
      liquidProof: t('smartDegassingStickerPage.comparison.rows.absorber.liquidProof'), 
      buyerPerception: t('smartDegassingStickerPage.comparison.rows.absorber.buyerPerception'), 
      optimalFor: t('smartDegassingStickerPage.comparison.rows.absorber.optimalFor') 
    },
    { 
      option: t('smartDegassingStickerPage.comparison.rows.header.option'), 
      placement: t('smartDegassingStickerPage.comparison.rows.header.placement'), 
      cost: t('smartDegassingStickerPage.comparison.rows.header.cost'), 
      liquidProof: t('smartDegassingStickerPage.comparison.rows.header.liquidProof'), 
      buyerPerception: t('smartDegassingStickerPage.comparison.rows.header.buyerPerception'), 
      optimalFor: t('smartDegassingStickerPage.comparison.rows.header.optimalFor') 
    },
    { 
      option: t('smartDegassingStickerPage.comparison.rows.sticker.option'), 
      placement: t('smartDegassingStickerPage.comparison.rows.sticker.placement'), 
      cost: t('smartDegassingStickerPage.comparison.rows.sticker.cost'), 
      liquidProof: t('smartDegassingStickerPage.comparison.rows.sticker.liquidProof'), 
      buyerPerception: t('smartDegassingStickerPage.comparison.rows.sticker.buyerPerception'), 
      optimalFor: t('smartDegassingStickerPage.comparison.rows.sticker.optimalFor') 
    },
  ]

  const FAQ_DATA = [
    {
      question: t('smartDegassingStickerPage.faq.questions.0.q'),
      answer: t('smartDegassingStickerPage.faq.questions.0.a')
    },
    {
      question: t('smartDegassingStickerPage.faq.questions.1.q'),
      answer: t('smartDegassingStickerPage.faq.questions.1.a')
    },
    {
      question: t('smartDegassingStickerPage.faq.questions.2.q'),
      answer: t('smartDegassingStickerPage.faq.questions.2.a')
    },
    {
      question: t('smartDegassingStickerPage.faq.questions.3.q'),
      answer: t('smartDegassingStickerPage.faq.questions.3.a')
    },
  ]

  return (
    <PouchLayout>
      <Helmet>
        <title>{t('smartDegassingStickerPage.title')}</title>
        <meta name="description" content={t('smartDegassingStickerPage.metaDesc')} />
        <link rel="canonical" href="https://pouch.eco/options/smart-degassing-sticker" />
        
        {/* Open Graph */}
        <meta property="og:title" content={t('smartDegassingStickerPage.title')} />
        <meta property="og:description" content={t('smartDegassingStickerPage.metaDesc')} />
        <meta property="og:url" content="https://pouch.eco/options/smart-degassing-sticker" />
        <meta property="og:type" content="article" />
        <meta property="og:image" content="https://pouch.eco/imgs/function/smart_sticker_valve_detail.png" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative pt-24 pb-20 border-b-4 border-black overflow-hidden bg-black text-white">
        <div className="absolute inset-0 w-full h-full">
          <div className="absolute inset-0 bg-[radial-gradient(#10B981_1px,transparent_1px)] [background-size:20px_20px] opacity-10" />
        </div>

        <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <p className="text-sm uppercase tracking-[4px] text-[#10B981] font-black mb-4">
              {t('smartDegassingStickerPage.hero.badge')}
            </p>
            <h1 className="text-4xl md:text-6xl font-['Space_Grotesk'] font-black uppercase mb-6 leading-tight">
              {t('smartDegassingStickerPage.hero.title')}
              <span className="text-[#10B981]">{t('smartDegassingStickerPage.hero.titleColored')}</span>
            </h1>
            <p className="text-lg md:text-xl font-['JetBrains_Mono'] mb-8 text-gray-300">
              {t('smartDegassingStickerPage.hero.desc')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/store"
                className="inline-flex items-center gap-2 px-8 py-4 bg-[#10B981] text-white font-black uppercase border-4 border-black shadow-[8px_8px_0px_0px_rgba(255,255,255,1)] hover:shadow-[12px_12px_0px_0px_rgba(255,255,255,1)] hover:-translate-x-1 hover:-translate-y-1 transition-all"
              >
                <Package className="w-6 h-6 text-black" />
                <span className="text-black">{t('smartDegassingStickerPage.hero.requestSamples')}</span>
                <ArrowRight className="w-6 h-6 text-black" />
              </Link>
              <a
                href="https://calendly.com/30-min-free-packaging-consultancy"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 bg-black text-[#10B981] font-black uppercase border-4 border-[#10B981] shadow-[8px_8px_0px_0px_#10B981] hover:shadow-[12px_12px_0px_0px_#10B981] hover:-translate-x-1 hover:-translate-y-1 transition-all"
              >
                <Calendar className="w-6 h-6" />
                {t('smartDegassingStickerPage.hero.bookMeeting')}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* PART 1: THE CHALLENGE AND SOLUTIONS */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-['Space_Grotesk'] font-black uppercase mb-4">
              {t('smartDegassingStickerPage.gasControl.title')}<span className="text-[#10B981]">{t('smartDegassingStickerPage.gasControl.titleColored')}</span>
            </h2>
            <p className="text-lg font-['JetBrains_Mono'] text-gray-600 max-w-3xl mx-auto">
              {t('smartDegassingStickerPage.gasControl.desc')}
            </p>
          </div>

          {/* Main Showcase Image */}
          <div 
            onClick={() => setLightboxImage('/imgs/function/smart_sticker_valve_detail.png')}
            className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-2xl mb-12 border-4 border-black cursor-zoom-in group"
          >
            <img 
              src="/imgs/function/smart_sticker_valve_detail.png" 
              alt="Smart Degassing Pouch Showcase" 
              className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 text-white text-center">
              <h3 className="font-['Space_Grotesk'] text-xl font-bold uppercase mb-1">{t('smartDegassingStickerPage.gasControl.showcaseTitle')}</h3>
              <p className="font-['JetBrains_Mono'] text-sm text-gray-200">
                {t('smartDegassingStickerPage.gasControl.showcaseDesc')}
              </p>
            </div>
          </div>

          {/* Degassing Gallery Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-16">
            {DEGASSING_GALLERY.map((item) => (
              <div 
                key={item.id}
                onClick={() => setLightboxImage(item.image)}
                className="bg-white rounded-xl overflow-hidden shadow-lg border-4 border-black hover:-translate-y-1 transition-all cursor-zoom-in group"
              >
                <div className="aspect-square overflow-hidden border-b-2 border-black">
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                </div>
                <div className="p-3">
                  <h4 className="font-bold text-sm font-['Space_Grotesk']">{item.name}</h4>
                  <p className="text-xxs text-gray-500 font-['JetBrains_Mono'] mt-1">{item.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* The Three Methods Detail */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="border-4 border-black p-6 rounded-xl shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] bg-neutral-50 flex flex-col justify-between">
              <div>
                <span className="inline-block px-3 py-1 bg-black text-[#10B981] font-black text-xs uppercase border border-black mb-4 font-['JetBrains_Mono']">{t('smartDegassingStickerPage.options.opt1.badge')}</span>
                <h3 className="text-xl font-black uppercase mb-3 font-['Space_Grotesk']">{t('smartDegassingStickerPage.options.opt1.title')}</h3>
                <p className="font-['JetBrains_Mono'] text-xs text-gray-600 mb-4 leading-relaxed">
                  {t('smartDegassingStickerPage.options.opt1.desc')}
                </p>
              </div>
              <img src="/imgs/function/stayfresh_co2_absorber.png" alt="StayFresh sachet" className="w-full h-32 object-cover rounded-lg border-2 border-black" />
            </div>

            <div className="border-4 border-black p-6 rounded-xl shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] bg-neutral-50 flex flex-col justify-between">
              <div>
                <span className="inline-block px-3 py-1 bg-black text-[#10B981] font-black text-xs uppercase border border-black mb-4 font-['JetBrains_Mono']">{t('smartDegassingStickerPage.options.opt2.badge')}</span>
                <h3 className="text-xl font-black uppercase mb-3 font-['Space_Grotesk']">{t('smartDegassingStickerPage.options.opt2.title')}</h3>
                <p className="font-['JetBrains_Mono'] text-xs text-gray-600 mb-4 leading-relaxed">
                  {t('smartDegassingStickerPage.options.opt2.desc')}
                </p>
              </div>
              <img src="/imgs/function/jongga_kimchi_bag_seal.png" alt="Header seal sachet placement" className="w-full h-32 object-cover rounded-lg border-2 border-black" />
            </div>

            <div className="border-4 border-black p-6 rounded-xl shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] bg-neutral-50 flex flex-col justify-between">
              <div>
                <span className="inline-block px-3 py-1 bg-black text-[#10B981] font-black text-xs uppercase border border-black mb-4 font-['JetBrains_Mono']">{t('smartDegassingStickerPage.options.opt3.badge')}</span>
                <h3 className="text-xl font-black uppercase mb-3 font-['Space_Grotesk']">{t('smartDegassingStickerPage.options.opt3.title')}</h3>
                <p className="font-['JetBrains_Mono'] text-xs text-gray-600 mb-4 leading-relaxed">
                  {t('smartDegassingStickerPage.options.opt3.desc')}
                </p>
              </div>
              <img src="/imgs/function/square_sticker_valves.png" alt="Degassing sticker valves" className="w-full h-32 object-cover rounded-lg border-2 border-black" />
            </div>
          </div>

          {/* Comparison Table */}
          <div className="bg-[#D4FF00] border-4 border-black rounded-2xl p-6 mb-16 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] overflow-x-auto">
            <h3 className="text-xl font-black uppercase mb-4 text-center font-['Space_Grotesk']">{t('smartDegassingStickerPage.comparison.title')}</h3>
            <table className="w-full min-w-[650px] border-collapse font-['JetBrains_Mono'] text-xs">
              <thead>
                <tr className="border-b-2 border-black">
                  <th className="p-3 text-left font-black uppercase">{t('smartDegassingStickerPage.comparison.thOption')}</th>
                  <th className="p-3 text-left font-black uppercase">{t('smartDegassingStickerPage.comparison.thPlacement')}</th>
                  <th className="p-3 text-left font-black uppercase">{t('smartDegassingStickerPage.comparison.thCost')}</th>
                  <th className="p-3 text-left font-black uppercase">{t('smartDegassingStickerPage.comparison.thLiquid')}</th>
                  <th className="p-3 text-left font-black uppercase">{t('smartDegassingStickerPage.comparison.thExperience')}</th>
                  <th className="p-3 text-left font-black uppercase">{t('smartDegassingStickerPage.comparison.thApplication')}</th>
                </tr>
              </thead>
              <tbody>
                {OPTION_COMPARISON.map((row, idx) => (
                  <tr key={idx} className="border-b border-black/10 last:border-0 hover:bg-black/5">
                    <td className="p-3 font-bold">{row.option}</td>
                    <td className="p-3">{row.placement}</td>
                    <td className="p-3 font-semibold">{row.cost}</td>
                    <td className="p-3 font-bold text-emerald-800">{row.liquidProof}</td>
                    <td className="p-3">{row.buyerPerception}</td>
                    <td className="p-3 text-gray-700">{row.optimalFor}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* PART 2: LEAKPROOF SCIENCE & APPLICATION */}
      <section className="py-16 bg-neutral-100 border-t-4 border-black">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl md:text-5xl font-['Space_Grotesk'] font-black uppercase mb-6">
                {t('smartDegassingStickerPage.science.title')}<span className="text-[#10B981]">{t('smartDegassingStickerPage.science.titleColored')}</span>
              </h2>
              <p className="font-['JetBrains_Mono'] text-sm text-gray-700 leading-relaxed mb-4">
                {t('smartDegassingStickerPage.science.desc')}
              </p>
              <div className="space-y-3 font-['JetBrains_Mono'] text-xs text-gray-600">
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                  <span><strong>{t('smartDegassingStickerPage.science.points.leak.title')}</strong> {t('smartDegassingStickerPage.science.points.leak.desc')}</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                  <span><strong>{t('smartDegassingStickerPage.science.points.oxygen.title')}</strong> {t('smartDegassingStickerPage.science.points.oxygen.desc')}</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                  <span><strong>{t('smartDegassingStickerPage.science.points.coffee.title')}</strong> {t('smartDegassingStickerPage.science.points.coffee.desc')}</span>
                </div>
              </div>
            </div>
            <div 
              onClick={() => setLightboxImage('/imgs/function/kimchi_valve_squeeze_test.png')}
              className="border-4 border-black rounded-xl overflow-hidden shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] bg-white cursor-zoom-in group"
            >
              <img src="/imgs/function/kimchi_valve_squeeze_test.png" alt="Venting Squeeze Test Infographic" className="w-full h-auto object-cover group-hover:scale-102 transition-transform duration-300" />
              <div className="bg-neutral-50 px-3 py-2 text-xs text-center border-t-2 border-black font-['JetBrains_Mono'] text-gray-500">{t('smartDegassingStickerPage.science.viewInfographic')}</div>
            </div>
          </div>

          {/* Functional Performance Testing Videos Block */}
          <div className="border-4 border-black bg-white p-6 md:p-8 rounded-xl shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] mb-16">
            <span className="inline-block bg-[#00FFFF] border-2 border-black px-3 py-1 text-xs font-black uppercase tracking-wider shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] mb-4 font-mono text-black">
              {t('smartDegassingStickerPage.videos.badge')}
            </span>
            <h3 className="font-black text-2xl md:text-4xl uppercase tracking-tighter leading-none mb-4">
              {t('smartDegassingStickerPage.videos.title')}
            </h3>
            <p className="font-['Space_Grotesk'] text-base font-bold text-neutral-800 mb-8 max-w-3xl leading-snug">
              {t('smartDegassingStickerPage.videos.desc')}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Video 1: Leak-proof */}
              <div className="bg-white border-4 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all flex flex-col justify-between">
                <div>
                  <div className="aspect-video bg-black border-2 border-black overflow-hidden relative mb-4">
                    <video muted={true}
                      src="https://ofobzjpexljkrqsgdgua.supabase.co/storage/v1/object/public/artworks/batches/66a055fe-0e3f-4e20-b43a-3d57a695af31/1781061880450_mn5s9twgw7.mp4"
                      controls
                      loop
                      
                      playsInline
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="inline-block bg-green-600 text-white text-[10px] font-black uppercase px-2 py-0.5 mb-2 font-mono border-2 border-black shadow-[1px_1px_0px_0px_rgba(0,0,0,1)]">
                    {t('smartDegassingStickerPage.videos.v1.badge')}
                  </div>
                  <h4 className="font-black text-lg uppercase tracking-tight mb-1">{t('smartDegassingStickerPage.videos.v1.title')}</h4>
                  <p className="text-xxs text-gray-500 font-black font-mono uppercase tracking-wider mb-2">{t('smartDegassingStickerPage.videos.v1.sub')}</p>
                  <p className="text-xs text-neutral-700 font-bold leading-relaxed font-['Space_Grotesk'] mb-3">
                    {t('smartDegassingStickerPage.videos.v1.desc')}
                  </p>
                </div>
                <div className="mt-4 border-t-2 border-black pt-3 text-[11px] font-bold font-mono text-neutral-500 italic leading-relaxed">
                  {t('smartDegassingStickerPage.videos.v1.chineseCaption')}
                </div>
              </div>

              {/* Video 2: Failed Coffee Valve */}
              <div className="bg-white border-4 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all flex flex-col justify-between">
                <div>
                  <div className="aspect-video bg-black border-2 border-black overflow-hidden relative mb-4">
                    <video muted={true}
                      src="https://ofobzjpexljkrqsgdgua.supabase.co/storage/v1/object/public/artworks/batches/66a055fe-0e3f-4e20-b43a-3d57a695af31/1781062000337_s34sw1mer8a.mp4"
                      controls
                      loop
                      
                      playsInline
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="inline-block bg-red-600 text-white text-[10px] font-black uppercase px-2 py-0.5 mb-2 font-mono border-2 border-black shadow-[1px_1px_0px_0px_rgba(0,0,0,1)]">
                    {t('smartDegassingStickerPage.videos.v2.badge')}
                  </div>
                  <h4 className="font-black text-lg uppercase tracking-tight mb-1">{t('smartDegassingStickerPage.videos.v2.title')}</h4>
                  <p className="text-xxs text-gray-500 font-black font-mono uppercase tracking-wider mb-2">{t('smartDegassingStickerPage.videos.v2.sub')}</p>
                  <p className="text-xs text-neutral-700 font-bold leading-relaxed font-['Space_Grotesk'] mb-3">
                    {t('smartDegassingStickerPage.videos.v2.desc')}
                  </p>
                </div>
                <div className="mt-4 border-t-2 border-black pt-3 text-[11px] font-bold font-mono text-neutral-500 italic leading-relaxed">
                  {t('smartDegassingStickerPage.videos.v2.chineseCaption')}
                </div>
              </div>

              {/* Video 3: Active Degassing */}
              <div className="bg-white border-4 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all flex flex-col justify-between">
                <div>
                  <div className="aspect-video bg-black border-2 border-black overflow-hidden relative mb-4">
                    <video muted={true}
                      src="https://ofobzjpexljkrqsgdgua.supabase.co/storage/v1/object/public/artworks/batches/66a055fe-0e3f-4e20-b43a-3d57a695af31/1781187167584_l98hchl2bfd.mp4"
                      controls
                      loop
                      
                      playsInline
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="inline-block bg-blue-600 text-white text-[10px] font-black uppercase px-2 py-0.5 mb-2 font-mono border-2 border-black shadow-[1px_1px_0px_0px_rgba(0,0,0,1)]">
                    {t('smartDegassingStickerPage.videos.v3.badge')}
                  </div>
                  <h4 className="font-black text-lg uppercase tracking-tight mb-1">{t('smartDegassingStickerPage.videos.v3.title')}</h4>
                  <p className="text-xxs text-gray-500 font-black font-mono uppercase tracking-wider mb-2">{t('smartDegassingStickerPage.videos.v3.sub')}</p>
                  <p className="text-xs text-neutral-700 font-bold leading-relaxed font-['Space_Grotesk'] mb-3">
                    {t('smartDegassingStickerPage.videos.v3.desc')}
                  </p>
                </div>
                <div className="mt-4 border-t-2 border-black pt-3 text-[11px] font-bold font-mono text-neutral-500 italic leading-relaxed">
                  {t('smartDegassingStickerPage.videos.v3.chineseCaption')}
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div 
              onClick={() => setLightboxImage('/imgs/function/pouch_production_line_valves.png')}
              className="order-2 md:order-1 border-4 border-black rounded-xl overflow-hidden shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] bg-white cursor-zoom-in group"
            >
              <img src="/imgs/function/pouch_production_line_valves.png" alt="Inline Application Process" className="w-full h-auto object-cover group-hover:scale-102 transition-transform duration-300" />
              <div className="bg-neutral-50 px-3 py-2 text-xs text-center border-t-2 border-black font-['JetBrains_Mono'] text-gray-500">{t('smartDegassingStickerPage.guide.viewAssembly')}</div>
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-3xl md:text-5xl font-['Space_Grotesk'] font-black uppercase mb-6">
                {t('smartDegassingStickerPage.guide.title')}<span className="text-[#10B981]">{t('smartDegassingStickerPage.guide.titleColored')}</span>{t('smartDegassingStickerPage.guide.titleSuffix')}
              </h2>
              <p className="font-['JetBrains_Mono'] text-sm text-gray-700 leading-relaxed mb-6">
                {t('smartDegassingStickerPage.guide.desc')}
              </p>
              <ol className="font-['JetBrains_Mono'] text-xs text-gray-600 space-y-4">
                <li className="flex gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-black text-[#10B981] font-bold flex items-center justify-center">1</span>
                  <span><strong>{t('smartDegassingStickerPage.guide.steps.1.title')}</strong> {t('smartDegassingStickerPage.guide.steps.1.desc')}</span>
                </li>
                <li className="flex gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-black text-[#10B981] font-bold flex items-center justify-center">2</span>
                  <span><strong>{t('smartDegassingStickerPage.guide.steps.2.title')}</strong> {t('smartDegassingStickerPage.guide.steps.2.desc')}</span>
                </li>
                <li className="flex gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-black text-[#10B981] font-bold flex items-center justify-center">3</span>
                  <span><strong>{t('smartDegassingStickerPage.guide.steps.3.title')}</strong> {t('smartDegassingStickerPage.guide.steps.3.desc')}</span>
                </li>
                <li className="flex gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-black text-[#10B981] font-bold flex items-center justify-center">4</span>
                  <span><strong>{t('smartDegassingStickerPage.guide.steps.4.title')}</strong> {t('smartDegassingStickerPage.guide.steps.4.desc')}</span>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* PAIN POINTS SECTION */}
      <section className="py-16 bg-neutral-100 border-t-4 border-black">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-['Space_Grotesk'] font-black uppercase mb-6 text-black">
                {translations[(i18n.language as LocaleKey) || 'en']?.sectionTitle || translations['en'].sectionTitle}
              </h2>
              <div className="space-y-6">
                {(translations[(i18n.language as LocaleKey) || 'en']?.problems || translations['en'].problems).map((problem, idx) => (
                  <div key={idx} className="bg-white p-6 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] rounded-xl">
                    <h3 className="font-['Space_Grotesk'] font-black text-xl uppercase mb-2 text-red-600 flex items-center gap-2">
                      <AlertCircle className="w-6 h-6 flex-shrink-0" />
                      {problem.title}
                    </h3>
                    <p className="font-['JetBrains_Mono'] text-sm text-gray-700 mb-3">
                      {problem.desc}
                    </p>
                    <div className="bg-[#10B981]/10 p-3 border-l-4 border-[#10B981] font-['JetBrains_Mono'] text-sm text-emerald-900 font-bold flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 flex-shrink-0 text-[#10B981]" />
                      <span>{problem.solution}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="order-first md:order-last border-4 border-black rounded-xl overflow-hidden shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] bg-white group">
              <img 
                src="/imgs/knowledge/smart-degassing-sticker-pain-points.jpg" 
                alt="Degassing Valve Pain Points Illustration" 
                className="w-full h-auto object-cover group-hover:scale-102 transition-transform duration-300" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="py-16 bg-white border-t-4 border-black">
        <div className="max-w-4xl mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-5xl font-['Space_Grotesk'] font-black uppercase mb-10 text-center">
            {t('smartDegassingStickerPage.faq.title')}<span className="text-[#10B981]">{t('smartDegassingStickerPage.faq.titleColored')}</span>
          </h2>
          <div className="space-y-4">
            {FAQ_DATA.map((faq, idx) => (
              <div 
                key={idx} 
                className="border-4 border-black rounded-xl overflow-hidden bg-neutral-50 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
              >
                <button
                  className="w-full flex items-center justify-between p-5 hover:bg-neutral-100 transition-colors text-left"
                  onClick={() => setExpandedFaq(expandedFaq === idx ? null : idx)}
                >
                  <span className="font-bold text-md md:text-lg pr-4 font-['Space_Grotesk'] uppercase">{faq.question}</span>
                  {expandedFaq === idx ? (
                    <ChevronUp className="w-6 h-6 flex-shrink-0 text-[#10B981] stroke-[3]" />
                  ) : (
                    <ChevronDown className="w-6 h-6 flex-shrink-0 stroke-[3]" />
                  )}
                </button>
                {expandedFaq === idx && (
                  <div className="p-5 bg-white border-t-4 border-black">
                    <p className="font-['JetBrains_Mono'] text-xs md:text-sm text-gray-700 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-16 bg-[#10B981] border-t-4 border-b-4 border-black shadow-[0_8px_0_0_rgba(0,0,0,1)]">
        <div className="max-w-4xl mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-['Space_Grotesk'] font-black uppercase mb-4 text-black">
            {t('smartDegassingStickerPage.cta.title')}
          </h2>
          <p className="text-md md:text-lg font-['JetBrains_Mono'] mb-8 text-black/80 max-w-xl mx-auto">
            {t('smartDegassingStickerPage.cta.desc')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/store"
              className="inline-flex items-center gap-2 px-8 py-4 bg-black text-[#10B981] font-black uppercase border-4 border-black shadow-[8px_8px_0px_0px_rgba(255,255,255,1)] hover:shadow-[12px_12px_0px_0px_rgba(255,255,255,1)] transition-all"
            >
              <Package className="w-6 h-6" />
              {t('smartDegassingStickerPage.cta.orderSamples')}
              <ArrowRight className="w-6 h-6" />
            </Link>
            <a
              href="mailto:ryan@achievepack.com?subject=Degassing Sticker Valve Specification Inquiry"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black font-black uppercase border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] transition-all"
            >
              <Mail className="w-6 h-6" />
              {t('smartDegassingStickerPage.cta.emailSpecs')}
            </a>
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {lightboxImage && (
        <div 
          className="fixed inset-0 z-[1000] flex items-center justify-center bg-black/90 p-4 cursor-zoom-out animate-fade-in"
          onClick={() => setLightboxImage(null)}
        >
          <div className="relative max-w-4xl max-h-[85vh]">
            <img 
              src={lightboxImage} 
              alt="Enlarged View" 
              className="max-w-full max-h-[85vh] object-contain rounded-lg border-4 border-black"
            />
            <button 
              onClick={() => setLightboxImage(null)}
              className="absolute top-4 right-4 text-white bg-black hover:bg-neutral-850 border-2 border-white px-3 py-1 font-bold rounded transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </PouchLayout>
  )
}
