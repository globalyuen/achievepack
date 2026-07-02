import { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { ArrowRight, CheckCircle, Package, Leaf, Zap, Shield, Wrench, Sparkles, X, ChevronDown, ChevronUp, Calendar, AlertTriangle } from 'lucide-react'
import PouchLayout from '../../../components/pouch/PouchLayout'
import { SortableOptionsTable, CLOSURE_OPTIONS, SURFACE_OPTIONS } from '../../../components/SortableOptionsTable'

// Star rating component
const StarRating = ({ rating }: { rating: number }) => (
  <span className="text-[#10B981]">
    {'★'.repeat(rating)}{'☆'.repeat(5 - rating)}
  </span>
)

export default function SurfaceAndReclosureOptionsPage() {
  const { t, i18n } = useTranslation()
  const currentLang = i18n.language || 'en'
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null)

  const localTranslations = {
    en: {
      title: "5 Common Surface & Reclosure Problems (And Solutions)",
      pain1: "Zippers breaking or detaching from the pouch film.",
      sol1: "Ultrasonic welding and reinforced flange integration.",
      pain2: "Loss of vacuum or gas barrier through the degassing valve.",
      sol2: "Precision multi-layer valve sealing and 100% inline pressure testing.",
      pain3: "Matte finishes showing scratches and scuffs during transport.",
      sol3: "Anti-scratch soft-touch matte lamination with protective BOPP outer layer.",
      pain4: "Spout leaking around the fitment base.",
      sol4: "Customized sealing dies matching the exact contour of the spout base.",
      pain5: "Difficulty opening child-resistant closures for elderly users.",
      sol5: "Ergonomic push-to-unlock sliders engineered with balanced resistance."
    },
    es: {
      title: "5 Problemas Comunes de Superficies y Cierres (y Soluciones)",
      pain1: "Los cierres se rompen o se desprenden de la película de la bolsa.",
      sol1: "Soldadura ultrasónica e integración de pestañas reforzadas.",
      pain2: "Pérdida de vacío o barrera de gas a través de la válvula de desgasificación.",
      sol2: "Sellado de válvula multicapa de precisión y pruebas de presión en línea al 100%.",
      pain3: "Los acabados mate muestran rayones y desgastes durante el transporte.",
      sol3: "Laminación mate suave al tacto antirayones con capa exterior protectora de BOPP.",
      pain4: "Fugas en la boquilla alrededor de la base del accesorio.",
      sol4: "Troqueles de sellado personalizados que coinciden con el contorno exacto de la base de la boquilla.",
      pain5: "Dificultad para abrir cierres a prueba de niños para usuarios mayores.",
      sol5: "Deslizadores ergonómicos de presionar para desbloquear diseñados con resistencia equilibrada."
    },
    fr: {
      title: "5 Problèmes Courants de Surfaces et de Fermetures (et Solutions)",
      pain1: "Les fermetures éclair se cassent ou se détachent du film du sachet.",
      sol1: "Soudage par ultrasons et intégration de brides renforcées.",
      pain2: "Perte de vide ou de barrière aux gaz par la valve de dégazage.",
      sol2: "Scellage de valve multicouche de précision et tests de pression en ligne à 100 %.",
      pain3: "Les finitions mates montrent des rayures et des éraflures pendant le transport.",
      sol3: "Pelliculage mat doux au toucher anti-rayures avec couche extérieure protectrice en BOPP.",
      pain4: "Fuites du bec verseur autour de la base de fixation.",
      sol4: "Matrices de scellage personnalisées épousant le contour exact de la base du bec verseur.",
      pain5: "Difficulté à ouvrir les fermetures à l'épreuve des enfants pour les utilisateurs âgés.",
      sol5: "Curseurs ergonomiques à pousser pour déverrouiller conçus avec une résistance équilibrée."
    },
    'zh-TW': {
      title: "5 個常見的表面與封口問題（及解決方案）",
      pain1: "拉鍊斷裂或從袋膜上脫落。",
      sol1: "超音波焊接和加固法蘭整合。",
      pain2: "透過排氣閥流失真空或氣體阻隔。",
      sol2: "精密多層閥門密封和 100% 在線壓力測試。",
      pain3: "霧面處理在運輸過程中出現刮痕和磨損。",
      sol3: "防刮觸感霧面複合，帶有保護性 BOPP 外層。",
      pain4: "吸嘴在配件底座周圍洩漏。",
      sol4: "客製化密封模具，完全匹配吸嘴底座的輪廓。",
      pain5: "老年使用者難以打開防兒童開啟封口。",
      sol5: "符合人體工學的按壓解鎖滑塊，採用平衡阻力設計。"
    }
  }

  const tLocal = localTranslations[currentLang as keyof typeof localTranslations] || localTranslations.en

  // Surface finish gallery data
  const SURFACE_GALLERY = [
    { id: 'matte', name: t('surfaceAndReclosureOptionsPage.gallery.matte.name'), description: t('surfaceAndReclosureOptionsPage.gallery.matte.desc'), image: '/imgs/surface/a_matte_finish_detail_7483118.webp' },
    { id: 'gloss', name: t('surfaceAndReclosureOptionsPage.gallery.gloss.name'), description: t('surfaceAndReclosureOptionsPage.gallery.gloss.desc'), image: '/imgs/surface/a_gloss_finish_detail_5685549.webp' },
    { id: 'spot-matte', name: t('surfaceAndReclosureOptionsPage.gallery.spotMatte.name'), description: t('surfaceAndReclosureOptionsPage.gallery.spotMatte.desc'), image: '/imgs/surface/spot-matte-finish.webp' },
    { id: 'spot-uv', name: t('surfaceAndReclosureOptionsPage.gallery.spotUv.name'), description: t('surfaceAndReclosureOptionsPage.gallery.spotUv.desc'), image: '/imgs/surface/spot-uv-pouch.png' },
    { id: 'soft-touch', name: t('surfaceAndReclosureOptionsPage.gallery.softTouch.name'), description: t('surfaceAndReclosureOptionsPage.gallery.softTouch.desc'), image: '/imgs/surface/a_softtouch_pouch_correct_7961783.webp' },
    { id: 'metallic', name: t('surfaceAndReclosureOptionsPage.gallery.metallic.name'), description: t('surfaceAndReclosureOptionsPage.gallery.metallic.desc'), image: '/imgs/surface/a_metallic_gold_closeup_5151764.webp' },
    { id: 'embossed', name: t('surfaceAndReclosureOptionsPage.gallery.embossed.name'), description: t('surfaceAndReclosureOptionsPage.gallery.embossed.desc'), image: '/imgs/surface/a_embossed_navy_9933981.webp' },
    { id: 'foil', name: t('surfaceAndReclosureOptionsPage.gallery.foil.name'), description: t('surfaceAndReclosureOptionsPage.gallery.foil.desc'), image: '/imgs/surface/a_foil_green_charcoal_7632386.webp' },
  ]

  // Reclosure gallery data
  const RECLOSURE_GALLERY = [
    { id: 'press-zipper', name: t('surfaceAndReclosureOptionsPage.gallery.pressZipper.name'), description: t('surfaceAndReclosureOptionsPage.gallery.pressZipper.desc'), image: '/imgs/reclose/a_reclosure_options_kv_product_photo_7983949.webp' },
    { id: 'spout', name: t('surfaceAndReclosureOptionsPage.gallery.spout.name'), description: t('surfaceAndReclosureOptionsPage.gallery.spout.desc'), image: '/imgs/reclose/a_spout_closure_closeup_detail_2705813.webp' },
    { id: 'tintie', name: t('surfaceAndReclosureOptionsPage.gallery.tintie.name'), description: t('surfaceAndReclosureOptionsPage.gallery.tintie.desc'), image: '/imgs/reclose/a_tintie_coffee_pouch_correct_4114906.webp' },
    { id: 'valve', name: t('surfaceAndReclosureOptionsPage.gallery.valve.name'), description: t('surfaceAndReclosureOptionsPage.gallery.valve.desc'), image: '/imgs/store/additional/valve.webp' },
  ]

  // Surface finish comparison data
  const SURFACE_COMPARISON = [
    { finish: t('surfaceAndReclosureOptionsPage.comparison.surface.gloss'), visual: t('surfaceAndReclosureOptionsPage.comparison.gloss.visual'), tactile: t('surfaceAndReclosureOptionsPage.comparison.gloss.tactile'), bestFor: t('surfaceAndReclosureOptionsPage.comparison.gloss.bestFor'), cost: t('surfaceAndReclosureOptionsPage.comparison.gloss.cost'), costColor: 'text-green-600' },
    { finish: t('surfaceAndReclosureOptionsPage.comparison.surface.matte'), visual: t('surfaceAndReclosureOptionsPage.comparison.matte.visual'), tactile: t('surfaceAndReclosureOptionsPage.comparison.matte.tactile'), bestFor: t('surfaceAndReclosureOptionsPage.comparison.matte.bestFor'), cost: t('surfaceAndReclosureOptionsPage.comparison.matte.cost'), costColor: 'text-green-600' },
    { finish: t('surfaceAndReclosureOptionsPage.comparison.surface.spotMatte'), visual: t('surfaceAndReclosureOptionsPage.comparison.spotMatte.visual'), tactile: t('surfaceAndReclosureOptionsPage.comparison.spotMatte.tactile'), bestFor: t('surfaceAndReclosureOptionsPage.comparison.spotMatte.bestFor'), cost: t('surfaceAndReclosureOptionsPage.comparison.spotMatte.cost'), costColor: 'text-amber-600' },
    { finish: t('surfaceAndReclosureOptionsPage.comparison.surface.softTouch'), visual: t('surfaceAndReclosureOptionsPage.comparison.softTouch.visual'), tactile: t('surfaceAndReclosureOptionsPage.comparison.softTouch.tactile'), bestFor: t('surfaceAndReclosureOptionsPage.comparison.softTouch.bestFor'), cost: t('surfaceAndReclosureOptionsPage.comparison.softTouch.cost'), costColor: 'text-amber-600' },
    { finish: t('surfaceAndReclosureOptionsPage.comparison.surface.spotUv'), visual: t('surfaceAndReclosureOptionsPage.comparison.spotUv.visual'), tactile: t('surfaceAndReclosureOptionsPage.comparison.spotUv.tactile'), bestFor: t('surfaceAndReclosureOptionsPage.comparison.spotUv.bestFor'), cost: t('surfaceAndReclosureOptionsPage.comparison.spotUv.cost'), costColor: 'text-purple-600' },
    { finish: t('surfaceAndReclosureOptionsPage.comparison.surface.hotFoil'), visual: t('surfaceAndReclosureOptionsPage.comparison.hotFoil.visual'), tactile: t('surfaceAndReclosureOptionsPage.comparison.hotFoil.tactile'), bestFor: t('surfaceAndReclosureOptionsPage.comparison.hotFoil.bestFor'), cost: t('surfaceAndReclosureOptionsPage.comparison.hotFoil.cost'), costColor: 'text-purple-600' },
  ]

  // Reclosure comparison data
  const RECLOSURE_COMPARISON = [
    { type: t('surfaceAndReclosureOptionsPage.comparison.closure.pressZipper'), convenience: 3, sealing: 4, bestFor: t('surfaceAndReclosureOptionsPage.comparison.pressZipper.bestFor'), cost: t('surfaceAndReclosureOptionsPage.comparison.pressZipper.cost'), costColor: 'text-green-600' },
    { type: t('surfaceAndReclosureOptionsPage.comparison.closure.sliderZipper'), convenience: 5, sealing: 4, bestFor: t('surfaceAndReclosureOptionsPage.comparison.sliderZipper.bestFor'), cost: t('surfaceAndReclosureOptionsPage.comparison.sliderZipper.cost'), costColor: 'text-amber-600' },
    { type: t('surfaceAndReclosureOptionsPage.comparison.closure.spout'), convenience: 4, sealing: 5, bestFor: t('surfaceAndReclosureOptionsPage.comparison.spout.bestFor'), cost: t('surfaceAndReclosureOptionsPage.comparison.spout.cost'), costColor: 'text-purple-600' },
    { type: t('surfaceAndReclosureOptionsPage.comparison.closure.tinTie'), convenience: 2, sealing: 3, bestFor: t('surfaceAndReclosureOptionsPage.comparison.tinTie.bestFor'), cost: t('surfaceAndReclosureOptionsPage.comparison.tinTie.cost'), costColor: 'text-amber-600' },
  ]

  // FAQ data
  const FAQ_DATA = [
    {
      question: t('surfaceAndReclosureOptionsPage.faq.q1.q'),
      answer: t('surfaceAndReclosureOptionsPage.faq.q1.a')
    },
    {
      question: t('surfaceAndReclosureOptionsPage.faq.q2.q'),
      answer: t('surfaceAndReclosureOptionsPage.faq.q2.a')
    },
    {
      question: t('surfaceAndReclosureOptionsPage.faq.q3.q'),
      answer: t('surfaceAndReclosureOptionsPage.faq.q3.a')
    },
    {
      question: t('surfaceAndReclosureOptionsPage.faq.q4.q'),
      answer: t('surfaceAndReclosureOptionsPage.faq.q4.a')
    },
  ]

  

  return (
    <PouchLayout>
      <Helmet>
        <title>{t('surfaceAndReclosureOptionsPage.title')}</title>
        <meta name="description" content={t('surfaceAndReclosureOptionsPage.description')} />
        <link rel="canonical" href="https://pouch.eco/options/surface-and-reclosure" />
        
        {/* Open Graph */}
        <meta property="og:title" content={t('surfaceAndReclosureOptionsPage.title')} />
        <meta property="og:description" content={t('surfaceAndReclosureOptionsPage.description')} />
        <meta property="og:url" content="https://pouch.eco/options/surface-and-reclosure" />
        <meta property="og:type" content="article" />
        <meta property="og:image" content="https://pouch.eco/imgs/surface/a_achieve_pack_main_kv_six_finishes_3535755.webp" />
        
        {/* Schema.org structured data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": t('surfaceAndReclosureOptionsPage.schema.headline'),
            "description": t('surfaceAndReclosureOptionsPage.schema.description'),
            "author": {
              "@type": "Organization",
              "name": "POUCH.ECO"
            },
            "publisher": {
              "@type": "Organization",
              "name": "POUCH.ECO",
              "logo": {
                "@type": "ImageObject",
                "url": "https://pouch.eco/logo.png"
              }
            },
            "datePublished": "2024-01-01T00:00:00Z",
            "dateModified": new Date().toISOString()
          })}
        </script>
      </Helmet>

      {/* Hero Section */}
      <section className="relative pt-24 pb-20 border-b-4 border-black overflow-hidden">
        <div className="absolute inset-0 w-full h-full">
          <div className="absolute inset-0 bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:20px_20px] opacity-10" />
        </div>

        <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <p className="text-sm uppercase tracking-[4px] text-[#10B981] font-bold mb-4">
              {t('surfaceAndReclosureOptionsPage.hero.tagline')}
            </p>
            <h1 className="text-4xl md:text-6xl font-['Space_Grotesk'] font-black uppercase mb-6 leading-tight">
              {t('surfaceAndReclosureOptionsPage.hero.heading1')}
              <span className="text-[#10B981]">{t('surfaceAndReclosureOptionsPage.hero.heading2')}</span>
            </h1>
            <p className="text-lg md:text-xl font-['JetBrains_Mono'] mb-8 text-gray-300">
              {t('surfaceAndReclosureOptionsPage.hero.desc')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/materials"
                className="inline-flex items-center gap-2 px-8 py-4 bg-[#10B981] text-white font-black uppercase border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] hover:-translate-x-1 hover:-translate-y-1 transition-all"
              >
                <Package className="w-6 h-6" />
                {t('surfaceAndReclosureOptionsPage.hero.browseMaterials')}
                <ArrowRight className="w-6 h-6" />
              </Link>
              <a
                href="https://calendly.com/30-min-free-packaging-consultancy"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 bg-black text-[#10B981] font-black uppercase border-4 border-[#10B981] shadow-[8px_8px_0px_0px_#10B981] hover:shadow-[12px_12px_0px_0px_#10B981] hover:-translate-x-1 hover:-translate-y-1 transition-all"
              >
                <Calendar className="w-6 h-6" />
                {t('surfaceAndReclosureOptionsPage.hero.bookMeeting')}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* PART 1: SURFACE FINISHES */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-['Space_Grotesk'] font-black uppercase mb-4">
              {t('surfaceAndReclosureOptionsPage.surface.heading1')}<span className="text-[#10B981]">{t('surfaceAndReclosureOptionsPage.surface.heading2')}</span>
            </h2>
            <p className="text-lg font-['JetBrains_Mono'] text-gray-600">
              {t('surfaceAndReclosureOptionsPage.surface.desc')}
            </p>
          </div>

          {/* Main KV Image */}
          <div 
            className="lb-img cursor-zoom-in relative w-full aspect-video rounded-2xl overflow-hidden shadow-2xl mb-8 cursor-zoom-in group"
          >
            <img 
              src="/imgs/surface/a_achieve_pack_main_kv_six_finishes_3535755.webp" 
              alt="Six premium surface finishes" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            <p className="absolute bottom-4 left-4 right-4 text-white text-center font-['JetBrains_Mono'] text-sm">
              {t('surfaceAndReclosureOptionsPage.surface.galleryCaption')}
            </p>
          </div>

          {/* Surface Gallery Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-12">
            {SURFACE_GALLERY.map((item) => (
              <div 
                key={item.id}
                className="lb-img cursor-zoom-in bg-white rounded-xl overflow-hidden shadow-lg border-2 border-transparent hover:border-[#10B981] transition-all cursor-pointer group"
              >
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    loading="lazy"
                  />
                </div>
                <div className="p-3">
                  <h4 className="font-bold text-sm">{item.name}</h4>
                  <p className="text-xs text-gray-500">{item.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Special Effect Finishes */}
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-8 mb-12 border-4 border-black">
            <h3 className="text-2xl font-black uppercase mb-6 flex items-center gap-3">
              <Sparkles className="w-8 h-8 text-[#10B981]" />
              {t('surfaceAndReclosureOptionsPage.surface.effects.heading')}
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-xl font-bold mb-3">{t('surfaceAndReclosureOptionsPage.surface.effects.spotUv.title')}</h4>
                <p className="font-['JetBrains_Mono'] text-gray-700 mb-4">
                  {t('surfaceAndReclosureOptionsPage.surface.effects.spotUv.desc')}
                </p>
                <ul className="space-y-2 font-['JetBrains_Mono'] text-sm">
                  <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-[#10B981]" /> {t('surfaceAndReclosureOptionsPage.surface.effects.spotUv.point1')}</li>
                  <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-[#10B981]" /> {t('surfaceAndReclosureOptionsPage.surface.effects.spotUv.point2')}</li>
                  <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-[#10B981]" /> {t('surfaceAndReclosureOptionsPage.surface.effects.spotUv.point3')}</li>
                </ul>
              </div>
              <div>
                <h4 className="text-xl font-bold mb-3">{t('surfaceAndReclosureOptionsPage.surface.effects.foil.title')}</h4>
                <p className="font-['JetBrains_Mono'] text-gray-700 mb-4">
                  {t('surfaceAndReclosureOptionsPage.surface.effects.foil.desc')}
                </p>
                <ul className="space-y-2 font-['JetBrains_Mono'] text-sm">
                  <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-[#10B981]" /> {t('surfaceAndReclosureOptionsPage.surface.effects.foil.point1')}</li>
                  <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-[#10B981]" /> {t('surfaceAndReclosureOptionsPage.surface.effects.foil.point2')}</li>
                  <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-[#10B981]" /> {t('surfaceAndReclosureOptionsPage.surface.effects.foil.point3')}</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Surface Comparison Table */}
          <div className="bg-blue-50 rounded-2xl p-6 mb-12 overflow-x-auto">
            <h3 className="text-xl font-black uppercase mb-4 text-center">{t('surfaceAndReclosureOptionsPage.surface.table.title')}</h3>
            <table className="w-full min-w-[600px] border-collapse">
              <thead>
                <tr className="bg-blue-100">
                  <th className="border border-gray-300 p-3 text-left font-bold">{t('surfaceAndReclosureOptionsPage.surface.table.headers.finish')}</th>
                  <th className="border border-gray-300 p-3 text-left font-bold">{t('surfaceAndReclosureOptionsPage.surface.table.headers.visual')}</th>
                  <th className="border border-gray-300 p-3 text-left font-bold">{t('surfaceAndReclosureOptionsPage.surface.table.headers.tactile')}</th>
                  <th className="border border-gray-300 p-3 text-left font-bold">{t('surfaceAndReclosureOptionsPage.surface.table.headers.bestFor')}</th>
                  <th className="border border-gray-300 p-3 text-left font-bold">{t('surfaceAndReclosureOptionsPage.surface.table.headers.cost')}</th>
                </tr>
              </thead>
              <tbody>
                {SURFACE_COMPARISON.map((row, idx) => (
                  <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-blue-50/50'}>
                    <td className="border border-gray-300 p-3 font-bold">{row.finish}</td>
                    <td className="border border-gray-300 p-3">{row.visual}</td>
                    <td className="border border-gray-300 p-3">{row.tactile}</td>
                    <td className="border border-gray-300 p-3">{row.bestFor}</td>
                    <td className={`border border-gray-300 p-3 font-semibold ${row.costColor}`}>{row.cost}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Sortable Options Table */}
          <div className="mb-12">
            <SortableOptionsTable 
              options={SURFACE_OPTIONS} 
              title={t('surfaceAndReclosureOptionsPage.surface.databaseTitle')}
              categoryColor="purple"
              type="surface"
            />
          </div>

          {/* Surface Feature Cards */}
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gray-50 p-6 border-4 border-black rounded-xl">
              <Leaf className="w-10 h-10 text-[#10B981] mb-3" />
              <h3 className="text-xl font-black uppercase mb-3">{t('surfaceAndReclosureOptionsPage.surface.features.eco.title')}</h3>
              <p className="font-['JetBrains_Mono'] text-sm mb-3">
                {t('surfaceAndReclosureOptionsPage.surface.features.eco.desc')}
              </p>
              <ul className="space-y-1 font-['JetBrains_Mono'] text-sm">
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-[#10B981]" /> {t('surfaceAndReclosureOptionsPage.surface.features.eco.point1')}</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-[#10B981]" /> {t('surfaceAndReclosureOptionsPage.surface.features.eco.point2')}</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-[#10B981]" /> {t('surfaceAndReclosureOptionsPage.surface.features.eco.point3')}</li>
              </ul>
            </div>
            
            <div className="bg-gray-50 p-6 border-4 border-black rounded-xl">
              <Wrench className="w-10 h-10 text-[#10B981] mb-3" />
              <h3 className="text-xl font-black uppercase mb-3">{t('surfaceAndReclosureOptionsPage.surface.features.quality.title')}</h3>
              <p className="font-['JetBrains_Mono'] text-sm mb-3">
                {t('surfaceAndReclosureOptionsPage.surface.features.quality.desc')}
              </p>
              <ul className="space-y-1 font-['JetBrains_Mono'] text-sm">
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-[#10B981]" /> {t('surfaceAndReclosureOptionsPage.surface.features.quality.point1')}</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-[#10B981]" /> {t('surfaceAndReclosureOptionsPage.surface.features.quality.point2')}</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-[#10B981]" /> {t('surfaceAndReclosureOptionsPage.surface.features.quality.point3')}</li>
              </ul>
            </div>
            
            <div className="bg-gray-50 p-6 border-4 border-black rounded-xl">
              <Sparkles className="w-10 h-10 text-[#10B981] mb-3" />
              <h3 className="text-xl font-black uppercase mb-3">{t('surfaceAndReclosureOptionsPage.surface.features.custom.title')}</h3>
              <p className="font-['JetBrains_Mono'] text-sm mb-3">
                {t('surfaceAndReclosureOptionsPage.surface.features.custom.desc')}
              </p>
              <ul className="space-y-1 font-['JetBrains_Mono'] text-sm">
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-[#10B981]" /> {t('surfaceAndReclosureOptionsPage.surface.features.custom.point1')}</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-[#10B981]" /> {t('surfaceAndReclosureOptionsPage.surface.features.custom.point2')}</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-[#10B981]" /> {t('surfaceAndReclosureOptionsPage.surface.features.custom.point3')}</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* PART 2: RECLOSURE OPTIONS */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-['Space_Grotesk'] font-black uppercase mb-4">
              {t('surfaceAndReclosureOptionsPage.reclosure.heading1')}<span className="text-[#10B981]">{t('surfaceAndReclosureOptionsPage.reclosure.heading2')}</span>{t('surfaceAndReclosureOptionsPage.reclosure.heading3')}
            </h2>
            <p className="text-lg font-['JetBrains_Mono'] text-gray-600">
              {t('surfaceAndReclosureOptionsPage.reclosure.desc')}
            </p>
          </div>

          {/* Reclosure Gallery Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {RECLOSURE_GALLERY.map((item) => (
              <div 
                key={item.id}
                className="lb-img cursor-zoom-in bg-white rounded-xl overflow-hidden shadow-lg border-2 border-transparent hover:border-[#10B981] transition-all cursor-pointer group"
              >
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    loading="lazy"
                  />
                </div>
                <div className="p-3">
                  <h4 className="font-bold text-sm">{item.name}</h4>
                  <p className="text-xs text-gray-500">{item.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Zipper & Spout Types */}
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-8 mb-12 border-4 border-black">
            <h3 className="text-2xl font-black uppercase mb-6 flex items-center gap-3">
              <Shield className="w-8 h-8 text-[#10B981]" />
              {t('surfaceAndReclosureOptionsPage.reclosure.effects.heading')}
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white p-5 rounded-xl">
                <h4 className="font-bold mb-2">{t('surfaceAndReclosureOptionsPage.reclosure.effects.press.title')}</h4>
                <p className="text-sm text-gray-600">{t('surfaceAndReclosureOptionsPage.reclosure.effects.press.desc')}</p>
              </div>
              <div className="bg-white p-5 rounded-xl">
                <h4 className="font-bold mb-2">{t('surfaceAndReclosureOptionsPage.reclosure.effects.slider.title')}</h4>
                <p className="text-sm text-gray-600">{t('surfaceAndReclosureOptionsPage.reclosure.effects.slider.desc')}</p>
              </div>
              <div className="bg-white p-5 rounded-xl">
                <h4 className="font-bold mb-2">{t('surfaceAndReclosureOptionsPage.reclosure.effects.cr.title')}</h4>
                <p className="text-sm text-gray-600">{t('surfaceAndReclosureOptionsPage.reclosure.effects.cr.desc')}</p>
              </div>
              <div className="bg-white p-5 rounded-xl">
                <h4 className="font-bold mb-2">{t('surfaceAndReclosureOptionsPage.reclosure.effects.spout.title')}</h4>
                <p className="text-sm text-gray-600">{t('surfaceAndReclosureOptionsPage.reclosure.effects.spout.desc')}</p>
              </div>
            </div>
          </div>

          {/* Reclosure Comparison Table */}
          <div className="bg-blue-50 rounded-2xl p-6 mb-12 overflow-x-auto">
            <h3 className="text-xl font-black uppercase mb-4 text-center">{t('surfaceAndReclosureOptionsPage.reclosure.table.title')}</h3>
            <table className="w-full min-w-[600px] border-collapse">
              <thead>
                <tr className="bg-blue-100">
                  <th className="border border-gray-300 p-3 text-left font-bold">{t('surfaceAndReclosureOptionsPage.reclosure.table.headers.type')}</th>
                  <th className="border border-gray-300 p-3 text-left font-bold">{t('surfaceAndReclosureOptionsPage.reclosure.table.headers.convenience')}</th>
                  <th className="border border-gray-300 p-3 text-left font-bold">{t('surfaceAndReclosureOptionsPage.reclosure.table.headers.sealing')}</th>
                  <th className="border border-gray-300 p-3 text-left font-bold">{t('surfaceAndReclosureOptionsPage.reclosure.table.headers.bestFor')}</th>
                  <th className="border border-gray-300 p-3 text-left font-bold">{t('surfaceAndReclosureOptionsPage.reclosure.table.headers.cost')}</th>
                </tr>
              </thead>
              <tbody>
                {RECLOSURE_COMPARISON.map((row, idx) => (
                  <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-blue-50/50'}>
                    <td className="border border-gray-300 p-3 font-bold">{row.type}</td>
                    <td className="border border-gray-300 p-3"><StarRating rating={row.convenience} /></td>
                    <td className="border border-gray-300 p-3"><StarRating rating={row.sealing} /></td>
                    <td className="border border-gray-300 p-3">{row.bestFor}</td>
                    <td className={`border border-gray-300 p-3 font-semibold ${row.costColor}`}>{row.cost}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Sortable Options Table */}
          <div className="mb-12">
            <SortableOptionsTable 
              options={CLOSURE_OPTIONS} 
              title={t('surfaceAndReclosureOptionsPage.reclosure.databaseTitle')}
              categoryColor="blue"
              type="closure"
            />
          </div>

          {/* Reclosure Feature Cards */}
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 border-4 border-black rounded-xl">
              <Zap className="w-10 h-10 text-[#10B981] mb-3" />
              <h3 className="text-xl font-black uppercase mb-3">{t('surfaceAndReclosureOptionsPage.reclosure.features.access.title')}</h3>
              <p className="font-['JetBrains_Mono'] text-sm mb-3">
                {t('surfaceAndReclosureOptionsPage.reclosure.features.access.desc')}
              </p>
              <ul className="space-y-1 font-['JetBrains_Mono'] text-sm">
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-[#10B981]" /> {t('surfaceAndReclosureOptionsPage.reclosure.features.access.point1')}</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-[#10B981]" /> {t('surfaceAndReclosureOptionsPage.reclosure.features.access.point2')}</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-[#10B981]" /> {t('surfaceAndReclosureOptionsPage.reclosure.features.access.point3')}</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 border-4 border-black rounded-xl">
              <Shield className="w-10 h-10 text-[#10B981] mb-3" />
              <h3 className="text-xl font-black uppercase mb-3">{t('surfaceAndReclosureOptionsPage.reclosure.features.protect.title')}</h3>
              <p className="font-['JetBrains_Mono'] text-sm mb-3">
                {t('surfaceAndReclosureOptionsPage.reclosure.features.protect.desc')}
              </p>
              <ul className="space-y-1 font-['JetBrains_Mono'] text-sm">
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-[#10B981]" /> {t('surfaceAndReclosureOptionsPage.reclosure.features.protect.point1')}</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-[#10B981]" /> {t('surfaceAndReclosureOptionsPage.reclosure.features.protect.point2')}</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-[#10B981]" /> {t('surfaceAndReclosureOptionsPage.reclosure.features.protect.point3')}</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 border-4 border-black rounded-xl">
              <Package className="w-10 h-10 text-[#10B981] mb-3" />
              <h3 className="text-xl font-black uppercase mb-3">{t('surfaceAndReclosureOptionsPage.reclosure.features.versatile.title')}</h3>
              <p className="font-['JetBrains_Mono'] text-sm mb-3">
                {t('surfaceAndReclosureOptionsPage.reclosure.features.versatile.desc')}
              </p>
              <ul className="space-y-1 font-['JetBrains_Mono'] text-sm">
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-[#10B981]" /> {t('surfaceAndReclosureOptionsPage.reclosure.features.versatile.point1')}</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-[#10B981]" /> {t('surfaceAndReclosureOptionsPage.reclosure.features.versatile.point2')}</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-[#10B981]" /> {t('surfaceAndReclosureOptionsPage.reclosure.features.versatile.point3')}</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Common Problems Section */}
      <section className="py-16 bg-gray-50 border-t-4 border-black">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-5xl font-['Space_Grotesk'] font-black uppercase mb-12 text-center text-[#10B981]">
            {tLocal.title}
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              {[
                { pain: tLocal.pain1, sol: tLocal.sol1 },
                { pain: tLocal.pain2, sol: tLocal.sol2 },
                { pain: tLocal.pain3, sol: tLocal.sol3 },
                { pain: tLocal.pain4, sol: tLocal.sol4 },
                { pain: tLocal.pain5, sol: tLocal.sol5 }
              ].map((item, idx) => (
                <div key={idx} className="bg-white p-6 rounded-xl border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="p-2 bg-red-100 rounded-lg text-red-600 shrink-0">
                      <AlertTriangle className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Pain Point</h4>
                      <p className="text-sm font-['JetBrains_Mono'] text-gray-700">{item.pain}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 pl-14">
                    <div className="p-1 bg-green-100 rounded text-green-600 shrink-0">
                      <CheckCircle className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Engineering Solution</h4>
                      <p className="text-sm font-['JetBrains_Mono'] text-[#10B981]">{item.sol}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="lb-img relative rounded-2xl overflow-hidden border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
              <img 
                src="/imgs/knowledge/surface-reclosure-pain-points.jpg" 
                alt="Surface and Reclosure Pain Points and Solutions"
                className="w-full h-auto object-cover aspect-[4/5] md:aspect-auto"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl font-['Space_Grotesk'] font-black uppercase mb-8 text-center">
            {t('surfaceAndReclosureOptionsPage.faq.heading1')}<span className="text-[#10B981]">{t('surfaceAndReclosureOptionsPage.faq.heading2')}</span>
          </h2>
          <div className="space-y-4">
            {FAQ_DATA.map((faq, idx) => (
              <div 
                key={idx} 
                className="border-4 border-black rounded-xl overflow-hidden"
              >
                <button
                  className="w-full flex items-center justify-between p-5 bg-gray-50 hover:bg-gray-100 transition-colors text-left"
                  onClick={() => setExpandedFaq(expandedFaq === idx ? null : idx)}
                >
                  <span className="font-bold text-lg pr-4">{faq.question}</span>
                  {expandedFaq === idx ? (
                    <ChevronUp className="w-6 h-6 flex-shrink-0 text-[#10B981]" />
                  ) : (
                    <ChevronDown className="w-6 h-6 flex-shrink-0" />
                  )}
                </button>
                {expandedFaq === idx && (
                  <div className="p-5 bg-white border-t-2 border-gray-200">
                    <p className="font-['JetBrains_Mono'] text-gray-700 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#10B981] border-t-4 border-b-4 border-black">
        <div className="max-w-4xl mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-['Space_Grotesk'] font-black uppercase mb-4">
            {t('surfaceAndReclosureOptionsPage.cta.heading')}
          </h2>
          <p className="text-lg font-['JetBrains_Mono'] mb-8">
            {t('surfaceAndReclosureOptionsPage.cta.desc')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/store"
              className="inline-flex items-center gap-2 px-8 py-4 bg-black text-[#10B981] font-black uppercase border-4 border-[#10B981] shadow-[8px_8px_0px_0px_#10B981] hover:shadow-[12px_12px_0px_0px_#10B981] transition-all"
            >
              <Package className="w-6 h-6" />
              {t('surfaceAndReclosureOptionsPage.cta.startOrder')}
              <ArrowRight className="w-6 h-6" />
            </Link>
            <a
              href="https://calendly.com/30-min-free-packaging-consultancy"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black font-black uppercase border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] transition-all"
            >
              <Shield className="w-6 h-6" />
              {t('surfaceAndReclosureOptionsPage.cta.scheduleConsultation')}
            </a>
          </div>
        </div>
      </section>
    </PouchLayout>
  )
}