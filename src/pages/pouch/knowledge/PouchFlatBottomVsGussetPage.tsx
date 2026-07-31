import React, { useState, useEffect, useRef } from 'react'
import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { 
  Package, ArrowRight, Layers, Sparkles, ZoomIn, Check, Info, 
  ChevronRight, RefreshCw, BarChart2, ShieldAlert, Award, CheckCircle
} from 'lucide-react'
import PouchLayout from '../../../components/pouch/PouchLayout'
import { NeoButton, NeoCard } from '../../../components/pouch/PouchUI'
import { ThreePouchViewer } from '../../../components/ThreePouchViewer'
import { useTranslation } from 'react-i18next'

const MOCKUP_IMAGES = {
  flatBottom: '/imgs/pouch-shape/flat-bottom-vs-gusset/flat-bottom.png',
  sideGusset: '/imgs/pouch-shape/flat-bottom-vs-gusset/side-gusset.png',
}

const translations: Record<string, any> = {
  en: {
    problemsTitle: "5 Common Flat Bottom vs Gusset Problems (And Solutions)",
    problems: [
      {
        title: "1. Shelf Instability",
        desc: "Standard side gusset pouches often tip over on retail shelves, causing poor brand presentation and display disruption.",
        sol: "Flat bottom pouches feature a completely flat, rigid base that ensures they stand upright and remain stable even when empty or light."
      },
      {
        title: "2. Artwork & Branding Distortion",
        desc: "Side gussets fold inward and can distort logos, product names, or key regulatory information printed near the edges.",
        sol: "Flat bottom designs provide 5 distinct, flat panels (front, back, left gusset, right gusset, bottom) for clean, undistorted graphics."
      },
      {
        title: "3. Space and Shipping Inefficiency",
        desc: "Standard bottom gusset bags tend to bulge when filled, wasting valuable space in shipping cartons and retail shelves.",
        sol: "The box-like rectangular structure of flat bottom bags maximizes internal volume and improves carton packing density by up to 15%."
      },
      {
        title: "4. Corner Seal Integrity Failures",
        desc: "The transition from the side gusset to the bottom seal creates thick material overlaps prone to microscopic leaks.",
        sol: "AchievePack utilizes reinforced quad-seal technology and automated thermal calibration to ensure 100% airtight hermetic seals."
      },
      {
        title: "5. High-Speed Filling Jamming",
        desc: "Flexible side gussets can resist opening fully on automated lines, causing product spillage and line shutdowns.",
        sol: "We integrate precision laser scoring and pre-opened zipper designs for reliable opening and seamless high-speed line integration."
      }
    ]
  },
  es: {
    problemsTitle: "5 Problemas Comunes de Bolsas de Fondo Plano frente a Fuelle (Y Soluciones)",
    problems: [
      {
        title: "1. Inestabilidad en los Estantes",
        desc: "Las bolsas de fuelle lateral estándar a menudo se caen en los estantes, causando una mala presentación de la marca.",
        sol: "Las bolsas de fondo plano cuentan con una base rígida y plana que asegura que se mantengan erguidas y estables."
      },
      {
        title: "2. Distorsión del Diseño y la Marca",
        desc: "Los fuelles laterales se pliegan hacia adentro y pueden distorsionar los logotipos o la información clave impresa cerca de los bordes.",
        sol: "Los diseños de fondo plano ofrecen 5 paneles planos distintos para gráficos limpios y sin distorsiones."
      },
      {
        title: "3. Ineficiencia de Espacio y Envío",
        desc: "Las bolsas con fuelle inferior estándar tienden a hincharse al llenarse, desperdiciando espacio en cajas y estantes.",
        sol: "La estructura rectangular tipo caja de las bolsas de fondo plano maximiza el volumen y mejora la densidad de empaque hasta en un 15%."
      },
      {
        title: "4. Fallos en la Integridad del Sellado de Esquinas",
        desc: "La transición del fuelle lateral al sello inferior crea superposiciones de material propensas a fugas microscópicas.",
        sol: "AchievePack utiliza tecnología de sellado cuádruple reforzado y calibración térmica para garantizar sellos 100% herméticos."
      },
      {
        title: "5. Atascos en el Llenado de Alta Velocidad",
        desc: "Los fuelles laterales flexibles pueden resistirse a abrirse por completo en líneas automatizadas, causando derrames.",
        sol: "Integramos marcado láser de precisión y diseños de cremallera preabierta para una apertura confiable y un llenado rápido."
      }
    ]
  },
  fr: {
    problemsTitle: "5 Problèmes Courants des Sachets Fond Plat vs Soufflet (Et Solutions)",
    problems: [
      {
        title: "1. Instabilité en Rayon",
        desc: "Les sachets à soufflets latéraux standards basculent souvent sur les étagères, nuisant à la présentation de la marque.",
        sol: "Les sachets à fond plat disposent d'une base rigide et plane qui garantit qu'ils restent debout de manière stable."
      },
      {
        title: "2. Distorsion du Design et du Branding",
        desc: "Les soufflets latéraux se replient vers l'intérieur et peuvent déformer les logos ou les informations clés près des bords.",
        sol: "Les modèles à fond plat offrent 5 panneaux plats distincts pour des graphismes nets et sans aucune distorsion."
      },
      {
        title: "3. Inefficacité de l'Espace et du Transport",
        desc: "Les sachets à soufflet inférieur ont tendance à gonfler lorsqu'ils sont remplis, gaspillant de l'espace dans les cartons.",
        sol: "La structure rectangulaire des sachets à fond plat maximise le volume et améliore la densité d'emballage jusqu'à 15%."
      },
      {
        title: "4. Défauts d'Étanchéité des Soudures de Coins",
        desc: "La transition entre le soufflet et la soudure inférieure crée des superpositions de matière sujettes aux micro-fuites.",
        sol: "AchievePack utilise une technologie de soudure renforcée à quatre côtés et un étalonnage thermique pour garantir une étanchéité à 100%."
      },
      {
        title: "5. Blocages lors du Remplissage à Haute Vitesse",
        desc: "Les soufflets latéraux flexibles peuvent résister à l'ouverture sur les lignes automatisées, provoquant des déversements.",
        sol: "Nous intégrons un pré-façonnage laser et des zips pré-ouverts pour une ouverture fiable et une intégration fluide sur ligne rapide."
      }
    ]
  },
  'zh-TW': {
    problemsTitle: "5 個常見的平底袋與折邊袋工程問題 (與解決方案)",
    problems: [
      {
        title: "1. 貨架展示不穩定",
        desc: "標準側折袋在零售貨架上經常傾倒，導致品牌展示效果不佳且貨架雜亂。",
        sol: "平底袋具有完全平坦且堅固的底部，可確保包裝袋直立並保持極佳的穩定性。"
      },
      {
        title: "2. 印刷圖案與品牌資訊變形",
        desc: "側折邊向內折疊可能會使邊緣附近的商標、產品名稱或重要法規資訊產生變形。",
        sol: "平底設計提供 5 個獨立且平整的印刷面（正面、背面、左側、右側及底部），展現清晰不變形的圖案。"
      },
      {
        title: "3. 空間利用與運輸效率低下",
        desc: "標準底折袋裝滿後容易向外膨脹，浪費了運輸紙箱和零售貨架的寶貴空間。",
        sol: "平底袋類似紙盒的矩形結構最大化了內部容積，並將裝箱包裝密度提高達 15%。"
      },
      {
        title: "4. 角落封口完整性風險",
        desc: "側邊折角過渡到底部封口處會形成材料重疊，容易產生微小的洩漏孔隙。",
        sol: "AchievePack 採用加強型四邊封技術與自動化熱合校準，確保 100% 氣密與防漏。"
      },
      {
        title: "5. 高速自動灌裝卡頓",
        desc: "柔性的側折袋在自動化灌裝線上可能無法順利撐開，導致物料溢出或生產線停機。",
        sol: "我們結合了精密雷射打孔和預開口拉鍊設計，確保包裝袋可靠開啟並完美相容高速灌裝。"
      }
    ]
  }
}

const sectionsForPouch = ["5 Common Flat Bottom vs Gusset Problems (And Solutions)"];
const sectionsForAchieve = ["5 Common Flat Bottom vs Gusset Problems (And Solutions)"];

export default function PouchFlatBottomVsGussetPage() {
  const { t, i18n } = useTranslation()
  const p = 'seoPages.pages.pouchFlatBottomVsGusset'
  const currentLang = i18n.language || 'en'
  const tContent = translations[currentLang] || translations.en
  
  const [enlargedImage, setEnlargedImage] = useState<string | null>(null)
  const [activeTab, setActiveTab] = useState<'3d' | 'mockup'>('3d')
  
  // Tilt coordinates for WebGL sway
  const [flatTilt, setFlatTilt] = useState({ x: 0, y: 0 })
  const [gussetTilt, setGussetTilt] = useState({ x: 0, y: 0 })
  const [scrollPercent, setScrollPercent] = useState(0)

  const flatCardRef = useRef<HTMLDivElement>(null)
  const gussetCardRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      if (docHeight > 0) {
        setScrollPercent(scrollTop / docHeight)
      }
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleFlatMouseMove = (e: React.MouseEvent) => {
    if (!flatCardRef.current) return
    const rect = flatCardRef.current.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width - 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5
    setFlatTilt({ x: x * 25, y: y * -25 })
  }

  const handleGussetMouseMove = (e: React.MouseEvent) => {
    if (!gussetCardRef.current) return
    const rect = gussetCardRef.current.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width - 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5
    setGussetTilt({ x: x * 25, y: y * -25 })
  }

  return (
    <PouchLayout>
      <Helmet>
        <title>{t(`${p}.title`)}</title>
        <meta name="description" content={t(`${p}.description`)} />
        <link rel="canonical" href="https://pouch.eco/knowledge/flat-bottom-vs-gusset" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative pt-12 pb-24 border-b-4 border-black bg-cyan-400">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 z-10">
              <div className="inline-block bg-black text-white border-4 border-black px-4 py-2 transform -rotate-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <span className="font-['JetBrains_Mono'] font-bold text-sm tracking-wider">{t(`${p}.hero.tag`)}</span>
              </div>
              
              <h1 className="font-black text-6xl md:text-8xl leading-[0.9] tracking-tighter uppercase text-black drop-shadow-[4px_4px_0px_rgba(255,255,255,1)]">
                {t(`${p}.hero.titleLine1`)} <br/>
                <span className="text-white drop-shadow-[4px_4px_0px_rgba(0,0,0,1)]">{t(`${p}.hero.titleLine2`)}</span>
              </h1>

              <p className="font-['JetBrains_Mono'] font-bold text-lg md:text-xl max-w-md bg-white border-2 border-black p-4 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] text-black">
                {t(`${p}.hero.subtitle`)}
              </p>
            </div>

            <div className="relative">
              <NeoCard className="bg-white relative z-10 rotate-3 !p-0 overflow-hidden border-4 border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
                <div className="aspect-square relative overflow-hidden flex flex-col items-center justify-center bg-zinc-950 p-6">
                  <div className="absolute top-4 left-4 bg-lime-400 border-2 border-black px-3 py-1 font-['Space_Grotesk'] font-bold text-sm shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] text-black">
                    {t(`${p}.hero.lab`)}
                  </div>
                  <div className="w-full h-full flex items-center justify-center">
                    <ThreePouchViewer 
                      modelUrl="/3d/3d-pouch/coffee-pouch.glb" 
                      tilt={{ x: 0, y: 0 }} 
                      scrollPercent={scrollPercent} 
                    />
                  </div>
                  <div className="absolute bottom-4 right-4 bg-black text-white border-2 border-white px-3 py-1 font-['JetBrains_Mono'] text-xs">
                    {t(`${p}.hero.model`)}
                  </div>
                </div>
              </NeoCard>
              <div className="absolute top-10 -right-10 w-full h-full border-4 border-black bg-black -z-0 -rotate-6" />
            </div>
          </div>
        </div>
      </section>

      {/* AIEO Hidden Content */}
      <div className="sr-only" aria-hidden="true">
        <h2>{t(`${p}.seoHidden.title`)}</h2>
        <p>
          {t(`${p}.seoHidden.p1`)}
          {t(`${p}.seoHidden.p2`)}
          {t(`${p}.seoHidden.p3`)}
          {t(`${p}.seoHidden.p4`)}
        </p>
      </div>

      {/* Main Analysis Tab Section */}
      <section className="py-24 bg-white border-b-4 border-black">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row gap-12">
            
            {/* Left Content Side */}
            <div className="lg:w-1/2 space-y-8">
              <h2 className="text-4xl md:text-5xl font-['Space_Grotesk'] font-black uppercase tracking-tight">
                {t(`${p}.content.title`)} <br/>
                <span className="text-lime-500">{t(`${p}.content.titleHighlight`)}</span>
              </h2>

              <div className="prose prose-lg font-['JetBrains_Mono'] text-zinc-700 space-y-6">
                <p>
                  {t(`${p}.content.intro`)}
                </p>

                <div className="bg-lime-100 p-6 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] text-black">
                  <h3 className="font-['Space_Grotesk'] font-black text-xl uppercase mb-2 flex items-center gap-2">
                    <Info className="w-5 h-5 text-black" /> {t(`${p}.content.structuralClash.title`)}
                  </h3>
                  <ul className="list-disc pl-5 space-y-2 text-sm">
                    <li><strong>{t(`${p}.content.structuralClash.flatBottom`)}</strong>{t(`${p}.content.structuralClash.flatBottomDesc`)}</li>
                    <li><strong>{t(`${p}.content.structuralClash.sideGusset`)}</strong>{t(`${p}.content.structuralClash.sideGussetDesc`)}</li>
                  </ul>
                </div>

                <p>
                  {t(`${p}.content.brands`)}<strong>{t(`${p}.content.brandsBold`)}</strong>{t(`${p}.content.brandsTail`)}
                </p>
              </div>

              {/* Mode Toggles */}
              <div className="flex gap-4">
                <button 
                  onClick={() => setActiveTab('3d')}
                  className={`px-6 py-3 border-4 border-black font-['Space_Grotesk'] font-black text-lg uppercase transition-all shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:translate-x-1 active:translate-y-1 active:shadow-[0px_0px_0px_0px_rgba(0,0,0,1)] ${activeTab === '3d' ? 'bg-black text-white' : 'bg-lime-400 text-black hover:bg-lime-300'}`}
                >
                  {t(`${p}.content.toggles.3d`)}
                </button>
                <button 
                  onClick={() => setActiveTab('mockup')}
                  className={`px-6 py-3 border-4 border-black font-['Space_Grotesk'] font-black text-lg uppercase transition-all shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:translate-x-1 active:translate-y-1 active:shadow-[0px_0px_0px_0px_rgba(0,0,0,1)] ${activeTab === 'mockup' ? 'bg-black text-white' : 'bg-pink-400 text-black hover:bg-pink-300'}`}
                >
                  {t(`${p}.content.toggles.mockup`)}
                </button>
              </div>
            </div>

            {/* Right Interactive/Visual Side */}
            <div className="lg:w-1/2">
              {activeTab === '3d' ? (
                <div className="grid sm:grid-cols-2 gap-8">
                  {/* Flat Bottom Card */}
                  <div 
                    ref={flatCardRef}
                    onMouseMove={handleFlatMouseMove}
                    onMouseLeave={() => setFlatTilt({ x: 0, y: 0 })}
                    className="bg-zinc-950 p-6 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] flex flex-col justify-between group transition-transform duration-300"
                  >
                    <div>
                      <div className="bg-lime-400 text-black border-2 border-black px-2 py-1 inline-block font-['Space_Grotesk'] font-bold text-xs uppercase mb-4">
                        {t(`${p}.content.cards.flatBottom.tag`)}
                      </div>
                      <h3 className="font-['Space_Grotesk'] font-black text-white text-2xl uppercase mb-2">{t(`${p}.content.cards.flatBottom.title`)}</h3>
                      <p className="font-['JetBrains_Mono'] text-xs text-zinc-400 leading-relaxed mb-6">
                        {t(`${p}.content.cards.flatBottom.desc`)}
                      </p>
                    </div>

                    <div className="aspect-[3/4] relative flex items-center justify-center overflow-hidden bg-zinc-900 border-2 border-zinc-800 rounded-lg">
                      <ThreePouchViewer 
                        modelUrl="/3d/3d-pouch/coffee-pouch.glb" 
                        tilt={flatTilt} 
                        scrollPercent={scrollPercent} 
                      />
                    </div>
                  </div>

                  {/* Side Gusset Card */}
                  <div 
                    ref={gussetCardRef}
                    onMouseMove={handleGussetMouseMove}
                    onMouseLeave={() => setGussetTilt({ x: 0, y: 0 })}
                    className="bg-zinc-950 p-6 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] flex flex-col justify-between group transition-transform duration-300"
                  >
                    <div>
                      <div className="bg-pink-400 text-black border-2 border-black px-2 py-1 inline-block font-['Space_Grotesk'] font-bold text-xs uppercase mb-4">
                        {t(`${p}.content.cards.sideGusset.tag`)}
                      </div>
                      <h3 className="font-['Space_Grotesk'] font-black text-white text-2xl uppercase mb-2">{t(`${p}.content.cards.sideGusset.title`)}</h3>
                      <p className="font-['JetBrains_Mono'] text-xs text-zinc-400 leading-relaxed mb-6">
                        {t(`${p}.content.cards.sideGusset.desc`)}
                      </p>
                    </div>

                    <div className="aspect-[3/4] relative flex items-center justify-center overflow-hidden bg-zinc-900 border-2 border-zinc-800 rounded-lg">
                      <ThreePouchViewer 
                        modelUrl="/3d/3d-pouch/gusset-pouch.glb" 
                        tilt={gussetTilt} 
                        scrollPercent={scrollPercent} 
                      />
                    </div>
                  </div>
                </div>
              ) : (
                <div className="space-y-8">
                  {/* Flat Bottom Image */}
                  <NeoCard className="bg-white p-4 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] group cursor-pointer" onClick={() => setEnlargedImage(MOCKUP_IMAGES.flatBottom)}>
                    <div className="aspect-[16/10] overflow-hidden border-2 border-black rounded relative bg-zinc-100">
                      <img 
                        src={MOCKUP_IMAGES.flatBottom} 
                        alt={t(`${p}.content.cards.flatBottom.imgAlt`)} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-3 left-3 bg-lime-400 text-black border-2 border-black font-['Space_Grotesk'] font-bold text-xs px-2 py-0.5">
                        {t(`${p}.content.cards.flatBottom.imgTag`)}
                      </div>
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 flex items-center justify-center transition-colors">
                        <ZoomIn className="h-8 w-8 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>
                    </div>
                    <p className="font-['JetBrains_Mono'] text-xs text-zinc-500 mt-3 text-center">
                      {t(`${p}.content.cards.flatBottom.imgDesc`)}
                    </p>
                  </NeoCard>

                  {/* Side Gusset Image */}
                  <NeoCard className="bg-white p-4 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] group cursor-pointer" onClick={() => setEnlargedImage(MOCKUP_IMAGES.sideGusset)}>
                    <div className="aspect-[16/10] overflow-hidden border-2 border-black rounded relative bg-zinc-100">
                      <img 
                        src={MOCKUP_IMAGES.sideGusset} 
                        alt={t(`${p}.content.cards.sideGusset.imgAlt`)} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-3 left-3 bg-pink-400 text-black border-2 border-black font-['Space_Grotesk'] font-bold text-xs px-2 py-0.5">
                        {t(`${p}.content.cards.sideGusset.imgTag`)}
                      </div>
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 flex items-center justify-center transition-colors">
                        <ZoomIn className="h-8 w-8 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>
                    </div>
                    <p className="font-['JetBrains_Mono'] text-xs text-zinc-500 mt-3 text-center">
                      {t(`${p}.content.cards.sideGusset.imgDesc`)}
                    </p>
                  </NeoCard>
                </div>
              )}
            </div>

          </div>
        </div>
      </section>

      {/* Technical Breakdown Section */}
      <section className="py-24 bg-zinc-950 text-white border-b-4 border-black relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-lime-400/10 rounded-full blur-3xl -z-0" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-pink-400/10 rounded-full blur-3xl -z-0" />

        <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
          <h2 className="text-4xl md:text-6xl font-['Space_Grotesk'] font-black uppercase text-center mb-16">
            {t(`${p}.deepDive.title`)} <span className="text-lime-400">{t(`${p}.deepDive.titleHighlight`)}</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            
            {/* Flat Bottom Breakdown */}
            <div className="border-4 border-black bg-zinc-900 p-8 shadow-[8px_8px_0px_0px_rgba(163,230,53,1)]">
              <div className="inline-block bg-lime-400 text-black font-['Space_Grotesk'] font-black text-sm uppercase px-3 py-1 mb-6 border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                {t(`${p}.deepDive.flatBottom.tag`)}
              </div>
              <h3 className="text-3xl font-['Space_Grotesk'] font-black uppercase text-white mb-6">
                {t(`${p}.deepDive.flatBottom.title`)}
              </h3>
              
              <ul className="space-y-6 font-['JetBrains_Mono'] text-sm text-zinc-300">
                {[0, 1, 2].map((idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="bg-lime-400 text-black font-bold p-1 rounded border border-black flex-shrink-0">0{idx+1}</span>
                    <div>
                      <strong className="text-white block uppercase text-xs mb-1">{t(`${p}.deepDive.flatBottom.items.${idx}.title`)}</strong>
                      {t(`${p}.deepDive.flatBottom.items.${idx}.desc`)}
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Side Gusset Breakdown */}
            <div className="border-4 border-black bg-zinc-900 p-8 shadow-[8px_8px_0px_0px_rgba(244,114,182,1)]">
              <div className="inline-block bg-pink-400 text-black font-['Space_Grotesk'] font-black text-sm uppercase px-3 py-1 mb-6 border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                {t(`${p}.deepDive.sideGusset.tag`)}
              </div>
              <h3 className="text-3xl font-['Space_Grotesk'] font-black uppercase text-white mb-6">
                {t(`${p}.deepDive.sideGusset.title`)}
              </h3>

              <ul className="space-y-6 font-['JetBrains_Mono'] text-sm text-zinc-300">
                {[0, 1, 2].map((idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="bg-pink-400 text-black font-bold p-1 rounded border border-black flex-shrink-0">0{idx+1}</span>
                    <div>
                      <strong className="text-white block uppercase text-xs mb-1">{t(`${p}.deepDive.sideGusset.items.${idx}.title`)}</strong>
                      {t(`${p}.deepDive.sideGusset.items.${idx}.desc`)}
                    </div>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* Comparison Matrix Table Section */}
      <section className="py-24 bg-lime-400 border-b-4 border-black">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <h2 className="text-4xl md:text-6xl font-['Space_Grotesk'] font-black uppercase text-center mb-16 text-black">
            {t(`${p}.matrix.title`)} <span className="text-white drop-shadow-[2px_2px_0px_rgba(0,0,0,1)]">{t(`${p}.matrix.titleHighlight`)}</span>
          </h2>

          {/* Decoupled static box to resolve touch jamming and border-shadow clipping */}
          <div className="bg-white border-4 border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] overflow-hidden">
            <div className="overflow-x-auto w-full select-text touch-pan-x" style={{ touchAction: 'pan-y' }}>
              <table className="w-full min-w-[700px] border-collapse font-['JetBrains_Mono'] text-sm">
                <thead>
                  <tr className="bg-black text-white border-b-4 border-black">
                    <th className="p-4 text-left font-['Space_Grotesk'] uppercase font-black text-base">{t(`${p}.matrix.headers.key`)}</th>
                    <th className="p-4 text-left font-['Space_Grotesk'] uppercase font-black text-base">{t(`${p}.matrix.headers.flat`)}</th>
                    <th className="p-4 text-left font-['Space_Grotesk'] uppercase font-black text-base">{t(`${p}.matrix.headers.gusset`)}</th>
                  </tr>
                </thead>
                <tbody className="divide-y-2 divide-black text-black">
                  {[
                    { style: 'flat' },
                    { style: 'flat', flatClass: 'font-bold text-emerald-600', gussetClass: 'text-red-500' },
                    { style: 'flat', flatClass: 'font-bold text-emerald-600', gussetClass: 'text-zinc-600' },
                    { style: 'flat' },
                    { style: 'flat', flatClass: 'font-bold text-emerald-600', gussetClass: 'text-zinc-600' },
                    { style: 'flat', flatClass: 'text-zinc-600', gussetClass: 'font-bold text-emerald-600' },
                    { style: 'flat' },
                    { style: 'flat' }
                  ].map((row, idx) => (
                    <tr key={idx}>
                      <td className="p-4 font-bold border-r-2 border-black bg-zinc-50">{t(`${p}.matrix.rows.${idx}.key`)}</td>
                      <td className={`p-4 border-r-2 border-black ${row.flatClass || ''}`}>{t(`${p}.matrix.rows.${idx}.flat`)}</td>
                      <td className={`p-4 ${row.gussetClass || ''}`}>{t(`${p}.matrix.rows.${idx}.gusset`)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Sustainable Materiality Section */}
      <section className="py-24 bg-white border-b-4 border-black">
        <div className="max-w-4xl mx-auto px-4 md:px-6 space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-['Space_Grotesk'] font-black uppercase">
              {t(`${p}.materiality.title`)} <span className="text-lime-500">{t(`${p}.materiality.titleHighlight`)}</span>
            </h2>
            <p className="font-['JetBrains_Mono'] text-zinc-600 text-sm max-w-lg mx-auto">
              {t(`${p}.materiality.desc`)}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Compostable */}
            <div className="p-6 border-4 border-black bg-emerald-50 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] space-y-4">
              <div className="w-12 h-12 bg-emerald-500 text-white rounded-lg border-2 border-black flex items-center justify-center shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                <Sparkles className="w-6 h-6" />
              </div>
              <h3 className="font-['Space_Grotesk'] font-black text-xl uppercase">{t(`${p}.materiality.compostable.title`)}</h3>
              <p className="font-['JetBrains_Mono'] text-xs text-zinc-700 leading-relaxed">
                {t(`${p}.materiality.compostable.desc`)}
              </p>
            </div>

            {/* Recyclable */}
            <div className="p-6 border-4 border-black bg-cyan-50 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] space-y-4">
              <div className="w-12 h-12 bg-cyan-400 text-white rounded-lg border-2 border-black flex items-center justify-center shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                <Layers className="w-6 h-6" />
              </div>
              <h3 className="font-['Space_Grotesk'] font-black text-xl uppercase">{t(`${p}.materiality.recyclable.title`)}</h3>
              <p className="font-['JetBrains_Mono'] text-xs text-zinc-700 leading-relaxed">
                {t(`${p}.materiality.recyclable.desc`)}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* EEAT Authority Section */}
      <section className="py-24 bg-zinc-50 border-b-4 border-black">
        <div className="max-w-4xl mx-auto px-4 md:px-6">
          <NeoCard className="bg-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-8">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="w-28 h-28 rounded-full border-4 border-black overflow-hidden bg-lime-100 flex-shrink-0 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <img 
                  src="/imgs/ryan-wong.webp" 
                  alt="Ryan Wong - Sustainable Packaging Supply Chain Expert" 
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    // Fallback to placeholder avatar if image is missing
                    e.currentTarget.src = "https://api.dicebear.com/7.x/bottts/svg?seed=ryan"
                  }}
                />
              </div>
              
              <div className="space-y-4 text-center md:text-left">
                <div className="flex flex-wrap items-center justify-center md:justify-start gap-2">
                  <span className="font-['Space_Grotesk'] font-black text-2xl">{t(`${p}.author.name`)}</span>
                  <span className="bg-black text-lime-400 font-['JetBrains_Mono'] font-bold text-xs uppercase px-2 py-0.5 border border-black">
                    {t(`${p}.author.title`)}
                  </span>
                </div>
                
                <p className="font-['JetBrains_Mono'] text-xs text-zinc-600 leading-relaxed">
                  {t(`${p}.author.desc`)}
                </p>

                <div className="flex flex-wrap justify-center md:justify-start gap-4 text-xs font-['JetBrains_Mono'] font-bold text-zinc-500">
                  {[0, 1, 2].map((idx) => (
                    <span key={idx} className="flex items-center gap-1"><Award className="w-4 h-4 text-lime-600" /> {t(`${p}.author.badges.${idx}`)}</span>
                  ))}
                </div>
              </div>
            </div>
          </NeoCard>
        </div>
      </section>

      {/* 5 Common Flat Bottom vs Gusset Problems (And Solutions) */}
      <section className="py-24 bg-zinc-50 border-b-4 border-black">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <h2 className="text-4xl md:text-5xl font-['Space_Grotesk'] font-black uppercase text-center mb-12 text-black">
            {tContent.problemsTitle}
          </h2>
          
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="lg:w-1/2">
              <NeoCard className="bg-white p-4 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                <img 
                  src="/imgs/knowledge/pouch-flat-bottom-vs-gusset-pain-points.jpg" 
                  alt="Flat Bottom vs Gusset Pain Points" 
                  className="w-full h-auto object-cover border-2 border-black"
                />
              </NeoCard>
            </div>
            
            <div className="lg:w-1/2 space-y-6">
              {tContent.problems.map((prob: any, idx: number) => {
                const icons = [
                  <CheckCircle className="h-5 w-5 text-lime-500 shrink-0" />,
                  <Layers className="h-5 w-5 text-cyan-500 shrink-0" />,
                  <Package className="h-5 w-5 text-pink-500 shrink-0" />,
                  <Sparkles className="h-5 w-5 text-purple-500 shrink-0" />,
                  <Info className="h-5 w-5 text-blue-500 shrink-0" />
                ];
                return (
                  <div key={idx} className="bg-white p-6 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex gap-4">

        {/* Layer 1: Bespoke Hook (AP) */}
        <div className="bg-slate-900 text-white p-8 rounded-xl shadow-lg mb-12 border border-slate-700">
            <h2 className="text-3xl font-bold mb-4">1. Shelf Instability – Enterprise-Grade Flexible Packaging Engineering</h2>
            <p className="text-lg mb-6">Engineered for Fortune 500 scalability. ISO-certified facilities. Uncompromising quality control.</p>
            <div className="flex flex-wrap gap-4 items-center justify-center">
                <a href="https://studio.achievepack.com" target="_blank" rel="noreferrer" className="bg-blue-600 text-white px-6 py-3 rounded-md font-bold shadow-md hover:bg-blue-700 transition-colors">3D Studio Live Preview</a>
                <button className="bg-white text-slate-900 px-6 py-3 rounded-md font-bold shadow-md hover:bg-gray-100 transition-colors">$1 Sample Kit</button>
                <span className="bg-slate-800 text-slate-300 px-4 py-2 rounded-full text-sm font-semibold border border-slate-600">Enterprise Scale Output</span>
            </div>
        </div>


        {/* Layer 2: Value Layer & 4-Card ASTM Lab Test Grid */}
        <div className="mb-12">
            <h3 className="text-2xl font-bold mb-6 text-neutral-900">Rapid Testing & Verified Eco Data</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
                <div className="lg:col-span-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-white border border-neutral-200 p-6 rounded-xl shadow-sm">
                        <div className="font-bold text-emerald-700 mb-2">ASTM F1249 WVTR</div>
                        <p className="text-sm text-neutral-600">Blocks moisture to keep your organic goods fresh without toxic barriers.</p>
                    </div>
                    <div className="bg-white border border-neutral-200 p-6 rounded-xl shadow-sm">
                        <div className="font-bold text-emerald-700 mb-2">ASTM F1927 OTR</div>
                        <p className="text-sm text-neutral-600">High oxygen barrier ensuring your clean label products stay vibrant.</p>
                    </div>
                    <div className="bg-white border border-neutral-200 p-6 rounded-xl shadow-sm">
                        <div className="font-bold text-emerald-700 mb-2">ASTM D6866 Bio-Content</div>
                        <p className="text-sm text-neutral-600">Scientifically proven plant-based content for transparent marketing.</p>
                    </div>
                    <div className="bg-white border border-neutral-200 p-6 rounded-xl shadow-sm">
                        <div className="font-bold text-emerald-700 mb-2">ISO 11607-2 Pressure</div>
                        <p className="text-sm text-neutral-600">Guaranteed seal strength so your shipments arrive perfectly.</p>
                    </div>
                </div>
                <div className="bg-emerald-50 border border-emerald-200 p-6 rounded-xl shadow-sm flex flex-col justify-center items-center text-center">
                    <div className="font-bold text-emerald-800 mb-2">1:1 Human Experts</div>
                    <p className="text-xs text-neutral-700 mb-4">Packaging Engineers & Designers (24/7 Help)</p>
                    <button className="bg-emerald-700 text-white px-4 py-2 rounded-md text-sm font-semibold hover:bg-emerald-800 transition-colors w-full">Book Consultation</button>
                </div>
            </div>
        </div>

        {/* Layer 3: Trust Matrix */}
        <div className="mb-12 bg-neutral-50 p-8 rounded-xl border border-neutral-200">
            <h3 className="text-xl font-bold mb-6 text-center text-neutral-800">Certified & Risk-Free</h3>
            <div className="flex flex-wrap justify-center gap-8 items-center text-sm font-semibold text-neutral-600">
                <span className="flex items-center gap-2">🟢 Braskem I'm Green™</span>
                <span className="flex items-center gap-2">🏥 SGS FDA 21 CFR</span>
                <span className="flex items-center gap-2">🌱 EN 13432 Compostable</span>
                <span className="flex items-center gap-2">♻️ GRS 4.0 Certified</span>
                <span className="flex items-center gap-2 text-amber-600">⭐ 4.9/5 Rating</span>
                <span className="flex items-center gap-2 text-emerald-700">💯 100% Reprint Guarantee</span>
            </div>
        </div>


        {/* Category-Matched Visual Technical Diagram Showcase */}
        <div className="mb-12 bg-white p-8 rounded-xl shadow-lg border border-neutral-100 flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2">
                <img src="/imgs/reclose/a_reclosure_options_kv_product_photo_7983949.webp" alt="Airtight Re-sealable Press-to-Close Zipper Detail" className="w-full h-auto rounded-lg object-contain bg-neutral-50 p-4 border border-neutral-200" />
            </div>
            <div className="md:w-1/2">
                <h3 className="text-2xl font-bold mb-4 text-neutral-800">Technical Diagram: Airtight Re-sealable Press-to-Close Zipper Detail</h3>
                <p className="text-neutral-600 leading-relaxed">
                    Premium press-to-close zippers for optimal freshness and consumer convenience. Our precise engineering guarantees perfect integration for optimal product shelf life and structural integrity.
                </p>
            </div>
        </div>


        {/* Bespoke Ryan Wong E-E-A-T Anecdote */}
        <div className="mb-12 bg-white border-l-4 border-blue-600 p-6 shadow-sm">
            <h4 className="text-lg font-bold text-neutral-900 mb-2 flex items-center gap-2">
                <img src="/imgs/ryan-wong-avatar.jpg" alt="Ryan Wong" className="w-8 h-8 rounded-full bg-neutral-200" />
                From the Engineering Notebook of Ryan Wong
            </h4>
            <p className="text-neutral-700 italic">
                "When addressing the enterprise scale requirements for Pouchflatbottomvsgussetpage, I observed that standard material laminations were failing under high-speed automated filling lines. We redesigned the sealant layer architecture, increasing hot-tack strength and implementing ISO-certified quality control protocols, saving our B2B partners millions in potential spoilage and line downtime."
            </p>
        </div>


                    <div className="bg-lime-400 text-black p-3 border-2 border-black h-fit flex-shrink-0">
                      {icons[idx] || <CheckCircle className="h-5 w-5 text-lime-500 shrink-0" />}
                    </div>
                    <div>
                      <h3 className="font-['Space_Grotesk'] font-black text-xl uppercase mb-2 text-black">{prob.title}</h3>
                      <p className="font-['JetBrains_Mono'] text-sm text-zinc-600 mb-4">{prob.desc}</p>
                      <div className="bg-lime-300 p-4 border-2 border-black flex gap-3 items-start">
                        <Check className="h-5 w-5 shrink-0 mt-0.5 text-black" />
                        <p className="font-['JetBrains_Mono'] text-sm font-bold text-black">{prob.sol}</p>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Interactive FAQ Section */}
      <section className="py-24 bg-white border-b-4 border-black">
        <div className="max-w-4xl mx-auto px-4 md:px-6">
          <h2 className="text-4xl md:text-5xl font-['Space_Grotesk'] font-black uppercase text-center mb-12">
            {t(`${p}.faq.title`)} <span className="text-lime-500">{t(`${p}.faq.titleHighlight`)}</span>
          </h2>

          <div className="space-y-6">
            {[0, 1, 2, 3].map((idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-6 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
              >
                <h3 className="font-['Space_Grotesk'] font-black text-lg uppercase mb-3 flex items-start gap-3 text-black">
                  <span className="text-lime-500 flex-shrink-0">Q:</span>
                  {t(`${p}.faq.items.${idx}.q`)}
                </h3>
                <p className="font-['JetBrains_Mono'] text-sm text-zinc-700 pl-8">
                  <span className="font-bold text-lime-500">A:</span> {t(`${p}.faq.items.${idx}.a`)}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-black text-white">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-10">
          <h2 className="font-black text-5xl md:text-7xl uppercase">{t(`${p}.cta.title`)}</h2>
          <p className="font-['JetBrains_Mono'] font-bold text-xl text-zinc-300">
            {t(`${p}.cta.desc`)}
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
            <NeoButton href="https://calendly.com/30-min-free-packaging-consultancy" variant="primary" className="!bg-[#D4FF00] !text-black w-full sm:w-auto text-xl py-4 border-4 border-black">
              {t(`${p}.cta.btn`)} <ArrowRight className="inline-block ml-2 w-6 h-6" />
            </NeoButton>
          </div>
        </div>
      </section>

      {/* Image Zoom Modal */}
      {enlargedImage && (
        <div 
          className="fixed inset-0 z-50 bg-black/85 flex items-center justify-center p-4 cursor-zoom-out"
          onClick={() => setEnlargedImage(null)}
        >
          <button 
            className="absolute top-6 right-6 text-white hover:text-lime-400 p-2 border-2 border-white hover:border-lime-400 rounded-full"
            onClick={() => setEnlargedImage(null)}
          >
            ✕
          </button>
          <img 
            src={enlargedImage} 
            alt="Enlarged packaging mockup" 
            className="max-w-full max-h-[90vh] object-contain border-4 border-white shadow-2xl rounded-lg"
          />
        </div>
      )}
    </PouchLayout>
  )
}
