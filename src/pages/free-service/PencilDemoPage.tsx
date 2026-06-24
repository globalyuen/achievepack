import React, { useState, useEffect, useRef } from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { 
  ShoppingCart, Menu, X, ArrowLeft, ArrowRight, Check, Leaf, Recycle, 
  ShieldCheck, Award, MapPin, Phone, Mail, ExternalLink, ChevronDown, 
  Globe, Play, Star, Pencil, Palette, Ruler, Cpu, Video, Layers, RefreshCw, 
  Terminal, Sliders, Settings2, Sparkles, Download
} from 'lucide-react'
import { motion, AnimatePresence, Variants } from 'motion/react'
import { ParallaxText } from '../../components/ParallaxText'
import { ScrollTriggeredCards } from '../../components/ScrollTriggeredCards'
import { useTranslation, Trans } from "react-i18next";

// Motion variants
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as const }
  }
}

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1
    }
  }
}

const cardHover = {
  scale: 1.03,
  y: -8,
  boxShadow: '0 20px 40px rgba(0,0,0,0.15)',
  transition: { duration: 0.3 }
}

const PENCIL_IMAGES = {
  logo: {
    src: 'https://images.unsplash.com/photo-1596443686812-2f45229eeb36?q=80&w=2670&auto=format&fit=crop',
    alt: 'Pencil Canvas Logo',
  },
  products: {
    graphite: {
      hero: 'https://images.unsplash.com/photo-1543519808-8e6e58728d15?q=80&w=2000&auto=format&fit=crop',
      detail: 'https://images.unsplash.com/photo-1596443686812-2f45229eeb36?q=80&w=2000&auto=format&fit=crop'
    },
    charcoal: {
      hero: 'https://images.unsplash.com/photo-1615800098779-1be32e60cca3?q=80&w=2000&auto=format&fit=crop',
      detail: 'https://images.unsplash.com/photo-1623838838334-a74e5b8827fa?q=80&w=2000&auto=format&fit=crop'
    },
    color: {
      hero: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=2000&auto=format&fit=crop',
      detail: 'https://images.unsplash.com/photo-1582234559881-bf9695d7db9b?q=80&w=2000&auto=format&fit=crop'
    }
  },
  lifestyle: 'https://images.unsplash.com/photo-1517644493776-3b608d515865?q=80&w=2000&auto=format&fit=crop',
  sustainability: 'https://images.unsplash.com/photo-1522880980456-be117eb66a01?q=80&w=2000&auto=format&fit=crop'
}

const PRODUCTS = [
  {
    id: 'classic-graphite',
    name: 'Classic Graphite',
    tagline: 'Precision meets elegance',
    description: 'Our signature HB graphite core encased in sustainable cedar. Perfect balance for writing and sketching.',
    price: 12.00,
    weight: 'Pack of 12',
    image: PENCIL_IMAGES.products.graphite.hero,
    heroImage: PENCIL_IMAGES.products.graphite.hero,
    color: '#2e2e2e',
    badges: ['HB', 'Cedar Wood', 'Sustainable']
  },
  {
    id: 'charcoal-black',
    name: 'Deep Charcoal',
    tagline: 'Rich, velvety darkness',
    description: 'Compressed charcoal for bold expressions. Smooth application with minimal dust.',
    price: 15.00,
    weight: 'Pack of 6',
    image: PENCIL_IMAGES.products.charcoal.hero,
    heroImage: PENCIL_IMAGES.products.charcoal.hero,
    color: '#1a1a1a',
    badges: ['Artist Grade', 'Compressed', 'Rich Black']
  },
  {
    id: 'prism-color',
    name: 'Prism Color',
    tagline: 'Vibrant hues, soft core',
    description: 'High-pigment colored pencils with a wax-based core for superior blending and layering.',
    price: 24.00,
    weight: 'Pack of 24',
    image: PENCIL_IMAGES.products.color.hero,
    heroImage: PENCIL_IMAGES.products.color.hero,
    color: '#E63946',
    badges: ['High Pigment', 'Wax Core', 'Blendable']
  }
]

const PENCIL_SCROLL_CARDS = [
  {
    image: PENCIL_IMAGES.products.graphite.detail,
    title: 'Precision Core',
    hueA: 200, hueB: 240,
    leftInfo: {
      title: 'Graphite Perfection',
      description: 'Centered bonded cores for break resistance and point retention.',
      badges: ['Bonded Lead', 'Break Resistant']
    },
    rightInfo: {
      title: 'Incense Cedar',
      description: 'Harvested from responsibly managed forests for easy sharpening.',
      badges: ['FSC Certified', 'Easy Sharpen']
    }
  },
  {
    image: PENCIL_IMAGES.products.color.detail,
    title: 'Vibrant Blend',
    hueA: 340, hueB: 20,
    leftInfo: {
      title: 'Artist Pigments',
      description: 'Lightfast pigments ensuring your art stands the test of time.',
      badges: ['Lightfast', 'Vivid']
    },
    rightInfo: {
      title: 'Soft Wax Core',
      description: 'Buttery smooth application perfect for blending and shading.',
      badges: ['Smooth', 'Layering']
    }
  },
  {
    image: PENCIL_IMAGES.sustainability,
    title: 'Eco-Conscious',
    hueA: 100, hueB: 150,
    leftInfo: {
      title: 'Sustainable Wood',
      description: '100% FSC certified wood from renewable forests.',
      badges: ['Sustainable', 'Renewable']
    },
    rightInfo: {
      title: 'Non-Toxic',
      description: 'Safe for artists of all ages. Meets AP & EN71 standards.',
      badges: ['Non-Toxic', 'Safe']
    }
  }
]

// Preset configurations matching our 3D videos
const DESIGN_PRESETS = [
  {
    id: 'pouch1',
    name: 'Matte Black Pouch',
    description: 'Ultra-premium matte carbon black finish with zero-light transmission',
    videoPath: '/3d/video/pouch1.mp4',
    materials: 'High Barrier PET/VMPET/PE',
    suggestedColor: '#121212',
    thickness: '110 microns'
  },
  {
    id: 'pouch2',
    name: 'Frosted Bio-Cello',
    description: 'High-transparency plant-based cellulose laminate structure',
    videoPath: '/3d/video/pouch2.mp4',
    materials: 'NatureFlex Cellulose / PLA Sealer',
    suggestedColor: '#e0ecde',
    thickness: '80 microns'
  },
  {
    id: 'pouch3',
    name: 'Eco Kraft Pouch',
    description: 'Unbleached natural brown kraft paper surface with PLA interior liner',
    videoPath: '/3d/video/pouch3.mp4',
    materials: 'Kraft Paper / Bio-sealing Film',
    suggestedColor: '#d2b48c',
    thickness: '125 microns'
  },
  {
    id: 'pouch4',
    name: 'Mono-PE Recyclable',
    description: 'Gloss-finish fully recyclable single-polymer packaging',
    videoPath: '/3d/video/pouch4.mp4',
    materials: 'Mono-PE #4 (Low Density Polyethylene)',
    suggestedColor: '#ffffff',
    thickness: '95 microns'
  }
]

export default function PencilDemoPage() {
    const { t } = useTranslation();
    const p = 'seoPages.pages.pencilDemo';
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [cartCount, setCartCount] = useState(0)

  // Interactive Mockup States
  const [selectedPreset, setSelectedPreset] = useState(DESIGN_PRESETS[0])
  const [videoSource, setVideoSource] = useState(DESIGN_PRESETS[0].videoPath)
  const [width, setWidth] = useState(150)
  const [height, setHeight] = useState(240)
  const [gusset, setGusset] = useState(45)
  const [isRendering, setIsRendering] = useState(false)
  const [consoleLogs, setConsoleLogs] = useState<string[]>([
    'System ready.',
    'Pencil Canvas connected to antigravity local client.',
    'Ready for export compiles.'
  ])

  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Sync video source when preset changes
  useEffect(() => {
    setVideoSource(selectedPreset.videoPath)
    if (videoRef.current) {
      videoRef.current.load()
    }
    log(`Preset changed to: ${selectedPreset.name} (Material: ${selectedPreset.materials})`)
  }, [selectedPreset])

  const log = (message: string) => {
    setConsoleLogs(prev => [...prev.slice(-6), `[${new Date().toLocaleTimeString()}] ${message}`])
  }

  // Simulate rendering process with html-video
  const handleRenderVideo = () => {
    if (isRendering) return
    setIsRendering(true)
    log('Initiating HTML → Video render request...')
    
    setTimeout(() => {
      log('Target identified: packages/runtime/src/spawn.ts')
    }, 500)

    setTimeout(() => {
      log('Headless Chromium loading frames [1/180]...')
    }, 1200)

    setTimeout(() => {
      log('Compiling layout styles with Hyperframes adapter...')
    }, 2000)

    setTimeout(() => {
      log('Injecting audio soundtrack (MiniMax ambient track)...')
    }, 2800)

    setTimeout(() => {
      log('FFmpeg compiling frames to libx264 MP4...')
    }, 3600)

    setTimeout(() => {
      setIsRendering(false)
      log(`🎉 Export complete! Saved to /downloads/${selectedPreset.id}_promo.mp4`)
    }, 4500)
  }

  const handleToggleSource = (src: string, label: string) => {
    setVideoSource(src)
    if (videoRef.current) {
      videoRef.current.load()
    }
    log(`Source updated to: ${label}`)
  }

  return (
    <div className="min-h-screen bg-[#0d0f12] text-white font-sans selection:bg-[#00e699] selection:text-black">
      <Helmet>
        <title>{t(`${p}.pencilStudioInteractive3dMocku`)}</title>
        <meta name="description" content="Design premium B2B custom packaging bags in 3D using Pencil, and instantly compile them to promo videos via html-video." />
        <style>{`
          @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap');
          .font-display { font-family: 'Plus Jakarta Sans', sans-serif; }
          .font-mono { font-family: 'JetBrains Mono', monospace; }
        `}</style>
      </Helmet>

      {/* Achieve Pack Return Banner */}
      <div className="fixed top-0 left-0 right-0 z-[60] bg-black/80 backdrop-blur-md border-b border-white/10 py-2.5 px-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link to="/free-service/website-upgrade" id="back-to-achievepack-btn" className="flex items-center gap-2 text-sm text-[#00e699] hover:text-[#00e699]/80 transition-colors font-medium">
            <ArrowLeft className="w-4 h-4" />
            {t(`${p}.backToUpgradeCenter`)}</Link>
          <span className="text-xs text-white/50 hidden md:block">{t(`${p}.interactive3dPrototypingDemoEn`)}</span>
          <Link to="/store" id="browse-store-btn" className="text-sm font-semibold text-white hover:underline transition">
            {t(`${p}.browseStore`)}</Link>
        </div>
      </div>

      {/* Navigation */}
      <nav className={`fixed top-[45px] w-full z-50 transition-all duration-500 ${scrolled ? 'bg-[#0d0f12]/95 border-b border-white/5 py-4' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2.5 font-display text-xl font-bold tracking-tight text-white">
              <div className="bg-[#00e699] p-1.5 rounded-lg text-black">
                <Pencil className="h-5 w-5" />
              </div>
              {t(`${p}.pencilStudio`)}</div>

            <div className="hidden md:flex items-center space-x-8">
              {['Design Engine', 'Materials', 'Specs', 'FAQ'].map((item) => (
                <a 
                  key={item} 
                  href={`#${item.toLowerCase().replace(' ', '-')}`} 
                  id={`nav-link-${item.toLowerCase().replace(' ', '-')}`}
                  className="text-sm text-gray-400 hover:text-[#00e699] transition-colors"
                >
                  {item}
                </a>
              ))}
            </div>

            <div className="flex items-center gap-4">
              <button 
                id="shopping-cart-nav"
                className="relative p-2 hover:text-[#00e699] transition-colors"
                onClick={() => setCartCount(c => c + 1)}
              >
                <ShoppingCart className="w-5 h-5" />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 w-4 h-4 bg-[#00e699] text-black rounded-full text-[10px] font-bold flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </button>
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden p-1">
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section - Split Layout with Video Mockup Device */}
      <section id="design-engine" className="relative min-h-screen flex items-center pt-28 pb-16 overflow-hidden bg-[#0d0f12] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-neutral-900 via-[#0d0f12] to-[#0d0f12]">
        
        {/* Decorative Grid Lines */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Headline and Sourcing Copy */}
          <div className="lg:col-span-5 text-left flex flex-col justify-center">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-white/5 border border-white/10 rounded-full text-xs font-semibold tracking-wider text-[#00e699] uppercase mb-6 w-fit backdrop-blur-md">
              <Sparkles className="w-3.5 h-3.5" />
              {t(`${p}.dynamicPrototyping`)}</div>
            
            <h1 className="text-4xl md:text-6xl font-display font-bold leading-[1.1] mb-6 tracking-tight">
              {t(`${p}.designIn3d`)}<br/>
              {t(`${p}.renderTo`)}<span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00e699] to-[#00ffcc] font-extrabold italic">{t(`${p}.video`)}</span>.
            </h1>

            <p className="text-base md:text-lg text-gray-400 mb-8 max-w-lg leading-relaxed font-light">
              {t(`${p}.createAndAdjustPremiumPackagin`)}</p>

            {/* Quick Sourcing Attributes */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="p-3 bg-white/5 border border-white/5 rounded-xl">
                <div className="text-xs text-gray-500 font-mono">{t(`${p}.cadTool`)}</div>
                <div className="text-sm font-semibold mt-1 flex items-center gap-1.5">
                  <Pencil className="w-4 h-4 text-[#00e699]" />
                  {t(`${p}.pencilCanvas`)}</div>
              </div>
              <div className="p-3 bg-white/5 border border-white/5 rounded-xl">
                <div className="text-xs text-gray-500 font-mono">{t(`${p}.videoCompiler`)}</div>
                <div className="text-sm font-semibold mt-1 flex items-center gap-1.5">
                  <Video className="w-4 h-4 text-[#00e699]" />
                  {t(`${p}.htmlVideoHyper`)}</div>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <a 
                href="#collections" 
                id="hero-explore-collection"
                className="px-6 py-3 bg-[#00e699] text-black font-semibold rounded-xl hover:bg-[#00ffcc] transition-all transform hover:-translate-y-0.5 shadow-lg shadow-[#00e699]/15 flex items-center gap-2"
              >
                {t(`${p}.shopCollection`)}<ArrowRight className="w-4 h-4" />
              </a>
              <button 
                id="hero-render-video-btn"
                onClick={handleRenderVideo}
                className="px-6 py-3 border border-white/20 text-white font-medium rounded-xl hover:bg-white/5 transition flex items-center gap-2"
              >
                <RefreshCw className={`w-4 h-4 ${isRendering ? 'animate-spin text-[#00e699]' : ''}`} />
                {t(`${p}.testExportRender`)}</button>
            </div>
          </div>

          {/* Right Column: Dynamic Interactive Device and Controller */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            
            {/* Main Interactive Laptop Mockup */}
            <div className="relative bg-[#161920]/80 rounded-2xl border border-white/10 p-5 shadow-2xl backdrop-blur-md">
              <div className="flex items-center justify-between pb-3.5 mb-4 border-b border-white/5">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                  <span className="text-xs text-gray-500 font-mono ml-2">{t(`${p}.pencil3dViewportHtmlVideoRende`)}</span>
                </div>
                
                {/* Viewport Control Badges */}
                <div className="flex gap-2">
                  <button 
                    id="toggle-pouch-spin"
                    onClick={() => handleToggleSource(selectedPreset.videoPath, 'Product Spin')}
                    className={`px-2.5 py-1 rounded text-[10px] font-semibold tracking-wider uppercase transition ${videoSource.includes('3d') ? 'bg-[#00e699]/10 text-[#00e699] border border-[#00e699]/20' : 'bg-white/5 text-gray-400 hover:text-white'}`}
                  >
                    {t(`${p}.3dSpin`)}</button>
                  <button 
                    id="toggle-factory-video"
                    onClick={() => handleToggleSource('/video/factory/digital-printing.mp4', 'Factory Tour')}
                    className={`px-2.5 py-1 rounded text-[10px] font-semibold tracking-wider uppercase transition ${videoSource.includes('factory') ? 'bg-[#00e699]/10 text-[#00e699] border border-[#00e699]/20' : 'bg-white/5 text-gray-400 hover:text-white'}`}
                  >
                    {t(`${p}.factory`)}</button>
                </div>
              </div>

              {/* Responsive Video Canvas */}
              <div className="relative aspect-video rounded-xl bg-black overflow-hidden border border-white/5">
                <video muted={true} 
                  ref={videoRef}
                  key={videoSource}
                  className="w-full h-full object-cover" 
                  autoPlay 
                  loop 
                   
                  playsInline
                >
                  <source src={videoSource} type="video/mp4" />
                </video>

                {/* Simulated Rendering Overlay */}
                <AnimatePresence>
                  {isRendering && (
                    <motion.div 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="absolute inset-0 bg-black/85 backdrop-blur-sm flex flex-col items-center justify-center p-6 text-center"
                    >
                      <RefreshCw className="w-10 h-10 text-[#00e699] animate-spin mb-4" />
                      <div className="text-base font-bold text-white mb-1">{t(`${p}.htmlVideoCompilerExecuting`)}</div>
                      <div className="text-xs text-gray-400 font-mono">{t(`${p}.headlessChromiumRunningRenderT`)}</div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Preset Selectors */}
              <div className="mt-5 grid grid-cols-2 sm:grid-cols-4 gap-3">
                {DESIGN_PRESETS.map((preset) => (
                  <button
                    key={preset.id}
                    id={`preset-select-${preset.id}`}
                    onClick={() => setSelectedPreset(preset)}
                    className={`p-2.5 rounded-xl border text-left transition-all ${selectedPreset.id === preset.id ? 'bg-[#00e699]/5 border-[#00e699] text-[#00e699]' : 'bg-white/5 border-white/5 hover:border-white/10 hover:bg-white/10'}`}
                  >
                    <div className="text-xs font-semibold truncate">{preset.name}</div>
                    <div className="text-[10px] text-gray-500 font-mono truncate mt-0.5">{preset.thickness}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Slider Controls Console */}
            <div className="grid sm:grid-cols-12 gap-6">
              
              {/* Left Side: Mock Slider Controllers */}
              <div className="sm:col-span-7 bg-[#161920]/80 rounded-2xl border border-white/10 p-5 flex flex-col gap-4 justify-between backdrop-blur-md">
                <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-gray-400 uppercase border-b border-white/5 pb-2">
                  <Sliders className="w-3.5 h-3.5 text-[#00e699]" />
                  {t(`${p}.mockPouchDimensionCustomizatio`)}</div>

                <div className="space-y-3">
                  {/* Width Slider */}
                  <div>
                    <div className="flex justify-between text-xs font-mono mb-1">
                      <span className="text-gray-400">{t(`${p}.pouchWidth`)}</span>
                      <span className="text-white">{width} {t(`${p}.mm`)}</span>
                    </div>
                    <input 
                      type="range" 
                      min="100" 
                      max="250" 
                      value={width} 
                      onChange={(e) => { setWidth(Number(e.target.value)); log(`Width adjusted: ${e.target.value}mm`) }}
                      className="w-full accent-[#00e699] bg-white/10 h-1.5 rounded-lg appearance-none cursor-pointer"
                    />
                  </div>

                  {/* Height Slider */}
                  <div>
                    <div className="flex justify-between text-xs font-mono mb-1">
                      <span className="text-gray-400">{t(`${p}.pouchHeight`)}</span>
                      <span className="text-white">{height} {t(`${p}.mm`)}</span>
                    </div>
                    <input 
                      type="range" 
                      min="150" 
                      max="350" 
                      value={height} 
                      onChange={(e) => { setHeight(Number(e.target.value)); log(`Height adjusted: ${e.target.value}mm`) }}
                      className="w-full accent-[#00e699] bg-white/10 h-1.5 rounded-lg appearance-none cursor-pointer"
                    />
                  </div>

                  {/* Bottom Gusset Slider */}
                  <div>
                    <div className="flex justify-between text-xs font-mono mb-1">
                      <span className="text-gray-400">{t(`${p}.bottomGusset`)}</span>
                      <span className="text-white">{gusset * 2} {t(`${p}.mmOpen`)}</span>
                    </div>
                    <input 
                      type="range" 
                      min="25" 
                      max="60" 
                      value={gusset} 
                      onChange={(e) => { setGusset(Number(e.target.value)); log(`Gusset adjusted: ${e.target.value}mm`) }}
                      className="w-full accent-[#00e699] bg-white/10 h-1.5 rounded-lg appearance-none cursor-pointer"
                    />
                  </div>
                </div>
              </div>

              {/* Right Side: Mock Terminal Log Output */}
              <div className="sm:col-span-5 bg-black rounded-2xl border border-white/10 p-5 flex flex-col justify-between font-mono relative overflow-hidden">
                <div className="absolute top-0 right-0 p-3 text-[10px] text-white/10">{t(`${p}.console`)}</div>
                
                <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-gray-500 uppercase border-b border-white/5 pb-2">
                  <Terminal className="w-3.5 h-3.5 text-red-400" />
                  {t(`${p}.buildOutputs`)}</div>

                <div className="text-[10px] space-y-1.5 text-gray-400 py-3 select-none">
                  {consoleLogs.map((item, idx) => (
                    <div key={idx} className="truncate">
                      <span className="text-gray-600">{t(`${p}.gt`)}</span> {item}
                    </div>
                  ))}
                </div>

                <button
                  onClick={handleRenderVideo}
                  id="console-render-trigger"
                  className="w-full py-2 bg-white/5 border border-white/10 text-xs font-bold rounded-lg hover:bg-[#00e699] hover:text-black transition flex items-center justify-center gap-1.5"
                >
                  <Download className="w-3.5 h-3.5" />
                  {t(`${p}.renderMp4Video`)}</button>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* Marquee - Continuous Loop */}
      <section className="py-6 bg-black text-[#00e699] border-y border-white/5">
        <ParallaxText baseVelocity={-2} textClassName="text-xl md:text-3xl font-display font-medium tracking-tight px-4">
          {t(`${p}.pencil3dCanvasHtmlVideoCompile`)}</ParallaxText>
      </section>

      {/* Product Grid */}
      <section id="collections" className="py-24 bg-[#0d0f12]">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">{t(`${p}.thePencilCanvasShop`)}</h2>
            <p className="text-gray-500">{t(`${p}.premiumDrawingUtensilsCraftedF`)}</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {PRODUCTS.map((product) => (
              <motion.div
                key={product.id}
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                whileHover={cardHover}
                className="bg-[#161920]/45 border border-white/5 rounded-2xl p-5 hover:border-white/15 transition-all duration-300"
              >
                <div className="aspect-[3/4] overflow-hidden rounded-xl mb-6 bg-gray-900 relative">
                  <img src={product.image} alt={product.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-black/10" />
                </div>
                <h3 className="text-xl font-display font-bold mb-2 text-white">{product.name}</h3>
                <p className="text-gray-400 text-sm mb-4 h-12">{product.description}</p>
                <div className="flex items-center justify-between mt-6">
                  <span className="font-bold text-lg">${product.price.toFixed(2)}</span>
                  <button 
                    onClick={() => setCartCount(c => c + 1)}
                    className="px-5 py-2 bg-white text-black font-semibold rounded-lg text-sm hover:bg-gray-100 transition"
                  >
                    {t(`${p}.addToCart`)}</button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Scroll Section */}
      <section id="materials" className="py-24 bg-[#0b0c0f] border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 mb-12 text-center">
           <h2 className="text-3xl font-display font-bold">{t(`${p}.engineeredForCreativePrecision`)}</h2>
           <p className="text-gray-500 mt-2">{t(`${p}.craftedWithAttentionToDetailAn`)}</p>
        </div>
        <ScrollTriggeredCards cards={PENCIL_SCROLL_CARDS} />
      </section>

      {/* Stats and Sustainability Section */}
      <section id="specs" className="py-24 bg-black text-white relative overflow-hidden border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">{t(`${p}.sustainableIncenseCedar`)}</h2>
              <p className="text-gray-400 text-base mb-8 leading-relaxed">
                {t(`${p}.weBelieveTheToolsCreatorsUseSh`)}</p>
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <div className="text-3xl font-display font-bold text-[#00e699] mb-1">100%</div>
                  <div className="text-xs text-gray-500 uppercase tracking-wider font-mono">{t(`${p}.fscCertifiedWood`)}</div>
                </div>
                <div>
                  <div className="text-3xl font-display font-bold text-[#00e699] mb-1">0%</div>
                  <div className="text-xs text-gray-500 uppercase tracking-wider font-mono">{t(`${p}.plasticPackaging`)}</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src={PENCIL_IMAGES.sustainability} 
                alt="Sustainable wood" 
                className="rounded-2xl border border-white/10 opacity-80 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-700 max-h-[380px] w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="faq" className="bg-[#08090b] border-t border-white/5 pt-20 pb-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-2">
              <div className="flex items-center gap-2.5 font-display text-2xl font-bold tracking-tight text-white mb-6">
                <div className="bg-[#00e699] p-1 text-black rounded">
                  <Pencil className="h-5 w-5" />
                </div>
                {t(`${p}.pencilCanvas1`)}</div>
              <p className="text-gray-500 max-w-sm text-sm leading-relaxed">
                {t(`${p}.elevatingTheSimpleActOfPutting`)}</p>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-6 text-sm">{t(`${p}.shop`)}</h4>
              <ul className="space-y-3.5 text-sm text-gray-400">
                <li><a href="#" className="hover:text-[#00e699] transition-colors">{t(`${p}.graphitePencils`)}</a></li>
                <li><a href="#" className="hover:text-[#00e699] transition-colors">{t(`${p}.deepCharcoal`)}</a></li>
                <li><a href="#" className="hover:text-[#00e699] transition-colors">{t(`${p}.prismColors`)}</a></li>
                <li><a href="#" className="hover:text-[#00e699] transition-colors">{t(`${p}.accessories`)}</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-6 text-sm">{t(`${p}.achievePackDemos`)}</h4>
              <ul className="space-y-3.5 text-sm text-gray-400">
                <li><Link to="/free-service/achieve-chips-demo" className="hover:text-[#00e699] transition-colors">{t(`${p}.chipsDemo`)}</Link></li>
                <li><Link to="/free-service/achieve-chocolate-demo" className="hover:text-[#00e699] transition-colors">{t(`${p}.chocolateDemo`)}</Link></li>
                <li><Link to="/free-service/achieve-tea-demo" className="hover:text-[#00e699] transition-colors">{t(`${p}.teaDemo`)}</Link></li>
                <li><Link to="/free-service/achieve-pet-demo" className="hover:text-[#00e699] transition-colors">{t(`${p}.petFoodDemo`)}</Link></li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5 text-xs text-gray-500">
            <p>{t(`${p}.2026PencilCanvasAllRightsReser`)}</p>
            <div className="flex items-center gap-1.5 mt-4 md:mt-0">
               {t(`${p}.poweredBy`)}<Link to="/" className="text-[#00e699] font-medium hover:underline">{t(`${p}.achievePack`)}</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
