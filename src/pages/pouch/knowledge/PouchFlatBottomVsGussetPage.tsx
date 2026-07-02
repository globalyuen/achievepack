import React, { useState, useEffect, useRef } from 'react'
import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { 
  Package, ArrowRight, Layers, Sparkles, ZoomIn, Check, Info, 
  ChevronRight, RefreshCw, BarChart2, ShieldAlert, Award
} from 'lucide-react'
import PouchLayout from '../../../components/pouch/PouchLayout'
import { NeoButton, NeoCard } from '../../../components/pouch/PouchUI'
import { ThreePouchViewer } from '../../../components/ThreePouchViewer'
import { useTranslation } from 'react-i18next'

const MOCKUP_IMAGES = {
  flatBottom: '/imgs/pouch-shape/flat-bottom-vs-gusset/flat-bottom.png',
  sideGusset: '/imgs/pouch-shape/flat-bottom-vs-gusset/side-gusset.png',
}

const translations = {
  en: {
    ppTitle: "5 Common Pouch Engineering Problems (And Solutions)",
    pp1q: "1. Shelf Instability",
    pp1a: "Standard side gusset pouches often tip over on retail shelves, creating a poor presentation. Solution: Flat bottom pouches feature a perfectly flat base, acting like a rigid box for superior stability.",
    pp2q: "2. Artwork Distortion",
    pp2a: "Side gussets can fold into the main front panel, interrupting branding. Solution: Flat bottom designs offer 5 completely flat, uninterrupted panels for maximum branding real estate.",
    pp3q: "3. Space Inefficiency",
    pp3a: "Bulging gusset bags waste space during shipping and display. Solution: The box-like structure of flat bottom bags maximizes internal volume and improves carton packing density by up to 15%.",
    pp4q: "4. Seal Integrity Risks",
    pp4a: "Complex quad-seals can be prone to microscopic leaks at the corners. Solution: AchievePack uses reinforced corner sealing and pressure-tested multi-layer laminates to guarantee a 100% airtight barrier.",
    pp5q: "5. Automated Filling Jamming",
    pp5a: "Some gusset bags resist opening smoothly on automated filling lines. Solution: We engineer pre-opened zipper formats and precision scoring to ensure smooth compatibility with high-speed filling equipment."
  },
  es: {
    ppTitle: "5 Problemas Comunes de Ingeniería de Bolsas (Y Soluciones)",
    pp1q: "1. Inestabilidad en los Estantes",
    pp1a: "Las bolsas de fuelle lateral estándar a menudo se cacan en los estantes, creando una mala presentación. Solución: Las bolsas de fondo plano cuentan con una base perfectamente plana que actúa como una caja rígida.",
    pp2q: "2. Distorsión del Diseño",
    pp2a: "Los fuelles laterales pueden plegarse sobre el panel frontal, interrumpiendo la marca. Solución: Los diseños de fondo plano ofrecen 5 paneles completamente planos y sin interrupciones.",
    pp3q: "3. Ineficiencia de Espacio",
    pp3a: "Las bolsas con fuelle abultadas desperdician espacio durante el envío. Solución: La estructura tipo caja maximiza el volumen interno y mejora la densidad de embalaje en cartón hasta en un 15%.",
    pp4q: "4. Riesgos de Integridad del Sello",
    pp4a: "Los sellos cuádruples complejos pueden ser propensos a fugas microscópicas. Solución: Usamos sellado de esquinas reforzado para garantizar una barrera 100% hermética.",
    pp5q: "5. Atascos en el Llenado Automático",
    pp5a: "Algunas bolsas con fuelle no se abren suavemente en líneas automatizadas. Solución: Diseñamos formatos de cremallera preabierta para garantizar la compatibilidad con equipos de alta velocidad."
  },
  fr: {
    ppTitle: "5 Problèmes Courants d'Ingénierie des Sachets (Et Solutions)",
    pp1q: "1. Instabilité en Rayon",
    pp1a: "Les sachets à soufflets latéraux standards basculent souvent sur les étagères. Solution : Les sachets à fond plat disposent d'une base parfaitement plate pour une stabilité supérieure.",
    pp2q: "2. Distorsion du Design",
    pp2a: "Les soufflets latéraux peuvent plier le panneau principal, interrompant la marque. Solution : Les conceptions à fond plat offrent 5 panneaux ininterrompus pour une visibilité maximale.",
    pp3q: "3. Inefficacité de l'Espace",
    pp3a: "Les sacs bombés gaspillent de l'espace lors de l'expédition. Solution : La structure en forme de boîte maximise le volume interne et améliore la densité d'emballage en carton jusqu'à 15 %.",
    pp4q: "4. Risques d'Intégrité du Scellage",
    pp4a: "Les soudures quadruples peuvent présenter des fuites microscopiques aux coins. Solution : Nous utilisons une technologie de scellage des coins renforcée pour garantir une barrière 100 % hermétique.",
    pp5q: "5. Blocages de Remplissage Automatique",
    pp5a: "Certains sacs à soufflets s'ouvrent difficilement sur les lignes automatisées. Solution : Nous concevons des formats de zip pré-ouverts pour une compatibilité fluide."
  },
  'zh-TW': {
    ppTitle: "5 個常見的包裝袋工程問題 (與解決方案)",
    pp1q: "1. 貨架不穩定",
    pp1a: "標準側折袋在零售貨架上經常傾倒，導致展示效果不佳。解決方案：平底袋具有完全平坦的底部，像硬盒一樣提供卓越的穩定性。",
    pp2q: "2. 圖案變形",
    pp2a: "側邊折疊處可能會影響正面圖案的完整性。解決方案：平底設計提供 5 個完全平坦、不間斷的印刷版面，最大化品牌展示空間。",
    pp3q: "3. 空間利用率低",
    pp3a: "膨脹的折邊袋在運輸和展示過程中浪費空間。解決方案：平底袋的盒狀結構最大化了內部容積，並將裝箱密度提高了高達 15%。",
    pp4q: "4. 密封完整性風險",
    pp4a: "複雜的四邊封口在角落容易出現微小洩漏。解決方案：我們使用加固的角落密封技術和經過壓力測試的多層複合材料，保證 100% 氣密屏障。",
    pp5q: "5. 自動化灌裝卡頓",
    pp5a: "一些折邊袋在自動灌裝線上難以順利打開。解決方案：我們設計了預開口拉鍊格式和精確壓痕，以確保與高速灌裝設備的順暢兼容。"
  }
}

export default function PouchFlatBottomVsGussetPage() {
  const { t, i18n } = useTranslation()
  const p = 'seoPages.pages.pouchFlatBottomVsGusset'
  
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

      {/* 5 Common Problems Section */}
      <section className="py-24 bg-zinc-50 border-b-4 border-black">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <h2 className="text-4xl md:text-5xl font-['Space_Grotesk'] font-black uppercase text-center mb-12">
            {translations[i18n.language as keyof typeof translations]?.ppTitle || translations.en.ppTitle}
          </h2>
          
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="lg:w-1/2">
              <NeoCard className="bg-white p-4 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                <img 
                  src="/imgs/knowledge/flat-bottom-gusset-pain-points.jpg" 
                  alt="Flat Bottom vs Gusset Pain Points" 
                  className="w-full h-auto object-cover border-2 border-black"
                />
              </NeoCard>
            </div>
            
            <div className="lg:w-1/2 space-y-6">
              {[1, 2, 3, 4, 5].map((idx) => {
                const lang = (i18n.language as keyof typeof translations) || 'en';
                const qKey = `pp${idx}q` as keyof typeof translations['en'];
                const aKey = `pp${idx}a` as keyof typeof translations['en'];
                const qText = translations[lang]?.[qKey] || translations.en[qKey];
                const aText = translations[lang]?.[aKey] || translations.en[aKey];
                return (
                  <div key={idx} className="bg-white p-6 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex gap-4">
                    <div className="bg-lime-400 text-black p-3 border-2 border-black h-fit flex-shrink-0">
                      <ShieldAlert className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-['Space_Grotesk'] font-black text-xl uppercase mb-2 text-black">{qText}</h3>
                      <p className="font-['JetBrains_Mono'] text-sm text-zinc-700 leading-relaxed">{aText}</p>
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
