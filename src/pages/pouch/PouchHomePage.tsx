import React, { useRef, useEffect, useState, type MouseEvent, type UIEvent } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { Package, Leaf, Zap, Box as BoxIcon, Flame, Star, Play, Sparkles, BookOpen, ShieldCheck, ArrowRight, ChevronLeft, ChevronRight, CheckCircle, Search, PenTool, Calculator, MapPin } from 'lucide-react'
import { motion } from 'framer-motion'
import { Helmet } from 'react-helmet-async'
import PouchLayout from '../../components/pouch/PouchLayout'
import VideoShowcase from '../../components/pouch/VideoShowcase'
import { ThreePouchViewer } from '../../components/ThreePouchViewer'
import MobbinHeroSearch from '../../components/pouch/MobbinHeroSearch'
import MobbinPouchGallery from '../../components/pouch/MobbinPouchGallery'
import { SizingFinderIcon, MaterialSpecFinderIcon } from '../../components/AppIcons'

import { useTranslation } from 'react-i18next'
import WorkCarousel from '../../components/WorkCarousel'
import KnowHowCarousel from '../../components/KnowHowCarousel'

// ============================================
// NEO-BRUTALIST COMPONENTS (Local)
// ============================================

export const translations = {
  en: {
    sectionTitle: "5 Common Pouch Packaging Problems (And Solutions)",
    problems: [
      { title: "High Minimum Order Quantities", desc: "Solution: Digital printing allowing runs as low as 500 units without setup fees." },
      { title: "Poor Barrier Performance", desc: "Solution: Advanced multi-layer materials to protect against moisture and oxygen." },
      { title: "Inconsistent Branding Colors", desc: "Solution: Precise color matching tech for vibrant and accurate brand representation." },
      { title: "Non-Sustainable Materials", desc: "Solution: Certified compostable, recyclable, and bio-based options." },
      { title: "Slow Turnaround Times", desc: "Solution: Optimized supply chain delivering production in 6-8 weeks." }
    ]
  },
  es: {
    sectionTitle: "5 problemas comunes del envasado en bolsas (y soluciones)",
    problems: [
      { title: "Altas cantidades mínimas de pedido", desc: "Solución: Impresión digital que permite tiradas desde 500 unidades sin gastos de preparación." },
      { title: "Bajo rendimiento de barrera", desc: "Solución: Materiales multicapa avanzados para proteger contra la humedad y el oxígeno." },
      { title: "Colores de marca inconsistentes", desc: "Solución: Tecnología de coincidencia de color precisa para una representación de marca vibrante y precisa." },
      { title: "Materiales no sostenibles", desc: "Solución: Opciones certificadas compostables, reciclables y de base biológica." },
      { title: "Tiempos de entrega lentos", desc: "Solución: Cadena de suministro optimizada que entrega la producción en 6-8 semanas." }
    ]
  },
  fr: {
    sectionTitle: "5 problèmes courants d'emballage en sachets (et solutions)",
    problems: [
      { title: "Quantités minimales de commande élevées", desc: "Solution : Impression numérique permettant des tirages à partir de 500 unités sans frais de configuration." },
      { title: "Faibles performances de la barrière", desc: "Solution : Matériaux multicouches avancés pour protéger de l'humidité et de l'oxygène." },
      { title: "Couleurs de marque incohérentes", desc: "Solution : Technologie de correspondance précise des couleurs pour une représentation de la marque vibrante et précise." },
      { title: "Matériaux non durables", desc: "Solution : Options certifiées compostables, recyclables et biosourcées." },
      { title: "Délais d'exécution lents", desc: "Solution : Chaîne d'approvisionnement optimisée livrant la production en 6 à 8 semaines." }
    ]
  },
  'zh-TW': {
    sectionTitle: "5 個常見的軟包裝問題（與解決方案）",
    problems: [
      { title: "最低訂購量（MOQ）過高", desc: "解決方案：數位印刷允許低至 500 件的訂單，無需版費。" },
      { title: "阻隔性能差", desc: "解決方案：先進的多層材料可防潮和防氧。" },
      { title: "品牌顏色不一致", desc: "解決方案：精確的色彩匹配技術，實現鮮豔且準確的品牌展示。" },
      { title: "不可持續的材料", desc: "解決方案：經過認證的可堆肥、可回收和生物基選項。" },
      { title: "交貨時間緩慢", desc: "解決方案：優化的供應鏈，可在 6-8 週內交付生產。" }
    ]
  }
};

export const sectionsForPouch = translations;
export const sectionsForAchieve = translations;

import { NeoButton, NeoCard, NeoBadge } from '../../components/pouch/PouchUI'

const Typewriter = ({ words }: { words: string[] }) => {
  const [text, setText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const [wordIndex, setWordIndex] = useState(0)
  
  useEffect(() => {
    const currentWord = words[wordIndex % words.length]
    const typeSpeed = isDeleting ? 100 : 200
    
    const timer = setTimeout(() => {
      if (!isDeleting && text === currentWord) {
         // Finished typing word, wait before deleting
         setTimeout(() => setIsDeleting(true), 2000)
         return
      }
      
      if (isDeleting && text === '') {
         // Finished deleting, move to next word
         setIsDeleting(false)
         setWordIndex((prev) => prev + 1)
         return
      }
      
      setText(currentWord.substring(0, isDeleting ? text.length - 1 : text.length + 1))
    }, typeSpeed)
    
    return () => clearTimeout(timer)
  }, [text, isDeleting, wordIndex, words])

  return (
    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF00FF] to-[#00FFFF] drop-shadow-[4px_4px_0px_rgba(0,0,0,1)]">
      {text}<span className="text-black opacity-50 ml-1 animate-pulse">|</span>
    </span>
  )
}

const SocialVideoCard = ({ videoSrc, coverSrc, index }: { videoSrc: string, coverSrc: string, index: number }) => {
  const [isPlaying, setIsPlaying] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  const handlePlay = (e: MouseEvent) => {
    e.stopPropagation()
    setIsPlaying(true)
  }

  return (
    <div className="flex-shrink-0 w-[280px] md:w-[320px] snap-center">
      <NeoCard className="p-2 h-full">
        <div 
          className="aspect-[9/16] relative bg-black overflow-hidden cursor-pointer group" 
          onClick={!isPlaying ? handlePlay : undefined}
        >
          {!isPlaying ? (
            <>
              <img 
                src={coverSrc} 
                alt={`Social Video ${index}`} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              {/* Play Button Overlay */}
              <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/30 transition-colors">
                <div className="w-16 h-16 bg-[#D4FF00] border-4 border-black rounded-full flex items-center justify-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] group-hover:scale-110 transition-transform">
                  <Play className="w-8 h-8 text-black fill-black ml-1" />
                </div>
              </div>
            </>
          ) : (
            <video muted={true} 
              ref={videoRef}
              src={videoSrc}
              controls
              autoPlay
              playsInline
              className="w-full h-full object-cover"
            />
          )}
        </div>
        <div className="mt-2 flex justify-between items-center font-['JetBrains_Mono'] text-xs font-bold px-1 uppercase">
          <span>@POUCH.ECO</span>
          <span>#{index.toString().padStart(3, '0')}</span>
        </div>
      </NeoCard>
    </div>
  )
}

const PACKAGING_APPS = [
  {
    id: 'sizing-finder',
    title: 'Pouch Sizing Finder App',
    label: 'Sizing Tool',
    desc: 'Calculate exact stand-up pouch dimensions and capacity based on product weight & density presets. Match dimensions instantly with standard manufacturing templates.',
    bullets: [
      'Density presets (Coffee, Powders, Snacks)',
      'Volume calculations (Ounces, Grams, ML)',
      'Standard MoQ and size reference matching'
    ],
    link: '/knowledge/pouch-sizing',
    icon: 'sizing',
    badgeColor: 'bg-[#FF00FF] text-white',
    iconBg: 'bg-[#D4FF00]',
    btnText: 'LAUNCH SIZING APP →'
  },
  {
    id: 'material-spec',
    title: 'Material Spec Finder App',
    label: 'Material Tool',
    desc: 'Search, filter, and compare water vapor & oxygen transmission rates (OTR/WVTR) across 15+ certified compostable, recyclable, PCR, and plant-based structures.',
    bullets: [
      '15+ eco duplex & triplex structures',
      'OTR & WVTR performance level filtering',
      'Full thickness & weight sheets download'
    ],
    link: '/tech-specs',
    icon: 'spec',
    badgeColor: 'bg-[#D4FF00] text-black',
    iconBg: 'bg-[#FF00FF]',
    btnText: 'LAUNCH SPEC FINDER →'
  },
  {
    id: 'dieline-finder',
    title: 'Pouch Dieline Finder App',
    label: 'Dieline Search',
    desc: 'Search, filter, and download standard print-ready vector flat packaging keylines and dieline files matching your pouch type and dimensions directly from our library.',
    bullets: [
      'Over 2,000 standard dieline configurations',
      'Matches Stand Up, Flat Bottom, and 3-Side Seal',
      'Vector PDF and Adobe Illustrator files'
    ],
    link: '/dieline-finder',
    icon: 'search',
    badgeColor: 'bg-[#00FFFF] text-black',
    iconBg: 'bg-[#D4FF00]',
    btnText: 'LAUNCH DIELINE FINDER →'
  },
  {
    id: 'dieline-creator',
    title: 'Dieline Creator PDF App',
    label: 'Dieline Generator',
    desc: 'Generate completely custom dielines by entering your custom pouch width, height, gusset depth, and seal margins. Instantly downloads a dimensioned vector PDF.',
    bullets: [
      'Enter custom dimensions dynamically',
      'Configurable seal widths, zipper, and tear notches',
      'Downloads scale-accurate vector dielines instantly'
    ],
    link: '/dieline-creator',
    icon: 'pentool',
    badgeColor: 'bg-[#FF00FF] text-white',
    iconBg: 'bg-[#00FFFF]',
    btnText: 'LAUNCH DIELINE CREATOR →'
  },
  {
    id: 'compost-finder',
    title: 'Compost Facility Finder App',
    label: 'Facility Map',
    desc: 'Locate local industrial, municipal, and commercial organic waste composting facilities in your area that accept BPI and EN 13432 certified compostable biopolymer packaging.',
    bullets: [
      'Search facility database by zip code or city',
      'Verifies accepted materials and processing specs',
      'Direct links to municipal collection program pages'
    ],
    link: '/composting/composting-services',
    icon: 'map-pin',
    badgeColor: 'bg-[#D4FF00] text-black',
    iconBg: 'bg-[#FF00FF]',
    btnText: 'LAUNCH COMPOST FINDER →'
  },
  {
    id: '3d-showcase',
    title: 'Product 3D Showcase App',
    label: '3D Orbit Viewer',
    desc: 'Spin, tilt, and examine our eco pouches in 3D space. Inspect seals, reclosure options, and material layers from every angle with real-time web 3D model rendering.',
    bullets: [
      'Interactive 3D orbit, tilt, and zoom tools',
      'Visual structural highlight callouts (zipper, valve)',
      'Compare Stand Up, Flat Bottom, and Spouted in 3D'
    ],
    link: '/3d-showcase',
    icon: 'box',
    badgeColor: 'bg-[#00FFFF] text-black',
    iconBg: 'bg-[#D4FF00]',
    btnText: 'LAUNCH 3D SHOWCASE →'
  },
  {
    id: 'quote-standup',
    title: 'Stand-Up Pouch Quote App',
    label: 'B2B Calculator',
    desc: 'Get immediate tiered manufacturing pricing estimates for custom printed stand-up bags. Enter your pouch dimensions, material choice, and volume sizes.',
    bullets: [
      'Calculates unit costs instantly across tiers',
      'Configures zippers, tear notches, and valve add-ons',
      'Generates B2B proposals with shipping estimates'
    ],
    link: '/quotes/stand-up-pouch',
    icon: 'calc',
    badgeColor: 'bg-[#FF00FF] text-white',
    iconBg: 'bg-[#00FFFF]',
    btnText: 'LAUNCH STAND-UP QUOTE →'
  },
  {
    id: 'quote-flatbottom',
    title: 'Flat Bottom Pouch Quote App',
    label: 'B2B Calculator',
    desc: 'Get detailed tiered price quotes for flat bottom quad seal pouches (box pouches) with custom sizes, degassing valves, and front pocket zipper integrations.',
    bullets: [
      'Calculates flat bottom specific pouch volume capacity',
      'Supports matte, gloss, soft-touch, and kraft surfaces',
      'Generates immediate digital quotes for bulk packaging'
    ],
    link: '/quotes/flat-bottom',
    icon: 'calc',
    badgeColor: 'bg-[#D4FF00] text-black',
    iconBg: 'bg-[#FF00FF]',
    btnText: 'LAUNCH FLAT BOTTOM QUOTE →'
  },
  {
    id: 'quote-threeside',
    title: '3 Side Seal Pouch Quote App',
    label: 'B2B Calculator',
    desc: 'Get instant manufacturing and shipping quotes for flat 3-side seal pouches and stick packs, ideal for single-use supplement sachets, tea, and sample packaging.',
    bullets: [
      'Configures tearing notches, euro-holes, and hang tabs',
      'Calculates digital print runs starting from 500 units',
      'Compares pricing across kraft, bio-films, and PCR'
    ],
    link: '/quotes/three-side-seal',
    icon: 'calc',
    badgeColor: 'bg-[#00FFFF] text-black',
    iconBg: 'bg-[#D4FF00]',
    btnText: 'LAUNCH 3-SIDE SEAL QUOTE →'
  },
  {
    id: 'quote-spouted',
    title: 'Spouted Pouch Quote App',
    label: 'B2B Calculator',
    desc: 'Calculate tiered production quotations for spouted stand-up pouches and liquid packaging. Configure cap diameters, spout placement, and material barriers.',
    bullets: [
      'Specifies center or corner spout placements and caps',
      'Configures high-barrier multi-layer liquid-safe structures',
      'Generates direct quotes with freight options'
    ],
    link: '/quotes/spouted-pouch',
    icon: 'calc',
    badgeColor: 'bg-[#FF00FF] text-white',
    iconBg: 'bg-[#00FFFF]',
    btnText: 'LAUNCH SPOUTED QUOTE →'
  },
  {
    id: 'quote-rollstock',
    title: 'Rollstock Film Quote App',
    label: 'B2B Calculator',
    desc: 'Calculate tiered quotes for custom printed rollstock packaging film. Specify reel width, repeat length, winding direction, and core specifications.',
    bullets: [
      'Calculates linear meter weight and total roll weight',
      'Supports auto-packing machine compatibility specs',
      'Estimates custom cylinder setup and digital charges'
    ],
    link: '/quotes/rollstock',
    icon: 'calc',
    badgeColor: 'bg-[#D4FF00] text-black',
    iconBg: 'bg-[#FF00FF]',
    btnText: 'LAUNCH ROLLSTOCK QUOTE →'
  }
];

// ============================================
// MAIN PAGE
// ============================================

export default function PouchHomePage() {
  const { t, i18n } = useTranslation()
  const productsRef = useRef<HTMLElement>(null)
  const appsScrollRef = useRef<HTMLDivElement>(null);
  const scrollAppsLeft = () => {
    if (appsScrollRef.current) {
      appsScrollRef.current.scrollBy({ left: -360, behavior: 'smooth' });
    }
  };
  const scrollAppsRight = () => {
    if (appsScrollRef.current) {
      appsScrollRef.current.scrollBy({ left: 360, behavior: 'smooth' });
    }
  };

  const pageT = translations[i18n.language as keyof typeof translations] || translations.en;



  const [selectedTag, setSelectedTag] = useState('All')
  const [searchTerm, setSearchTerm] = useState('')
  const [activeHeroIndex, setActiveHeroIndex] = useState(0)
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768)
  const [isLaptop, setIsLaptop] = useState(window.innerWidth >= 1024)
  const videoRef1 = useRef<HTMLVideoElement>(null)
  const videoRef2 = useRef<HTMLVideoElement>(null)
  const videoRef3 = useRef<HTMLVideoElement>(null)
  const videoRef4 = useRef<HTMLVideoElement>(null)
  const videoRef5 = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
      setIsLaptop(window.innerWidth >= 1024)
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  useEffect(() => {
    if (activeHeroIndex === 0) {
      videoRef1.current?.play().catch((err) => console.log(err))
      if (videoRef2.current) { videoRef2.current.pause(); videoRef2.current.currentTime = 0; }
      if (videoRef3.current) { videoRef3.current.pause(); videoRef3.current.currentTime = 0; }
      if (videoRef4.current) { videoRef4.current.pause(); videoRef4.current.currentTime = 0; }
      if (videoRef5.current) { videoRef5.current.pause(); videoRef5.current.currentTime = 0; }
    } else if (activeHeroIndex === 1) {
      videoRef2.current?.play().catch((err) => console.log(err))
      if (videoRef1.current) { videoRef1.current.pause(); videoRef1.current.currentTime = 0; }
      if (videoRef3.current) { videoRef3.current.pause(); videoRef3.current.currentTime = 0; }
      if (videoRef4.current) { videoRef4.current.pause(); videoRef4.current.currentTime = 0; }
      if (videoRef5.current) { videoRef5.current.pause(); videoRef5.current.currentTime = 0; }
    } else if (activeHeroIndex === 2) {
      videoRef3.current?.play().catch((err) => console.log(err))
      if (videoRef1.current) { videoRef1.current.pause(); videoRef1.current.currentTime = 0; }
      if (videoRef2.current) { videoRef2.current.pause(); videoRef2.current.currentTime = 0; }
      if (videoRef4.current) { videoRef4.current.pause(); videoRef4.current.currentTime = 0; }
      if (videoRef5.current) { videoRef5.current.pause(); videoRef5.current.currentTime = 0; }
    } else if (activeHeroIndex === 3) {
      videoRef4.current?.play().catch((err) => console.log(err))
      if (videoRef1.current) { videoRef1.current.pause(); videoRef1.current.currentTime = 0; }
      if (videoRef2.current) { videoRef2.current.pause(); videoRef2.current.currentTime = 0; }
      if (videoRef3.current) { videoRef3.current.pause(); videoRef3.current.currentTime = 0; }
      if (videoRef5.current) { videoRef5.current.pause(); videoRef5.current.currentTime = 0; }
    } else {
      videoRef5.current?.play().catch((err) => console.log(err))
      if (videoRef1.current) { videoRef1.current.pause(); videoRef1.current.currentTime = 0; }
      if (videoRef2.current) { videoRef2.current.pause(); videoRef2.current.currentTime = 0; }
      if (videoRef3.current) { videoRef3.current.pause(); videoRef3.current.currentTime = 0; }
      if (videoRef4.current) { videoRef4.current.pause(); videoRef4.current.currentTime = 0; }
    }
  }, [activeHeroIndex])

  const offsetVal = isMobile ? 16 : (isLaptop ? 48 : 40)
  const slideVal = isMobile ? 120 : (isLaptop ? 312 : 260)

  const card1Variants = {
    front: {
      x: 0,
      y: 0,
      rotate: 2,
      scale: 1,
      zIndex: 50,
      transition: { duration: 0.6, ease: "easeInOut" as const }
    },
    middle: {
      x: offsetVal,
      y: offsetVal,
      rotate: 6,
      scale: 1,
      zIndex: 40,
      transition: { duration: 0.6, ease: "easeInOut" as const }
    },
    back: {
      x: [0, -slideVal, offsetVal],
      y: [0, -20, offsetVal],
      rotate: [2, -10, 10],
      scale: 1,
      zIndex: [50, 10, 10],
      transition: {
        times: [0, 0.4, 1],
        duration: 0.8,
        ease: "easeInOut" as const
      }
    }
  }

  const card2Variants = {
    front: {
      x: 0,
      y: 0,
      rotate: 2,
      scale: 1,
      zIndex: 50,
      transition: { duration: 0.6, ease: "easeInOut" as const }
    },
    middle: {
      x: offsetVal,
      y: offsetVal,
      rotate: 6,
      scale: 1,
      zIndex: 40,
      transition: { duration: 0.6, ease: "easeInOut" as const }
    },
    back: {
      x: [0, slideVal, offsetVal],
      y: [0, -20, offsetVal],
      rotate: [2, 10, 10],
      scale: 1,
      zIndex: [50, 10, 10],
      transition: {
        times: [0, 0.4, 1],
        duration: 0.8,
        ease: "easeInOut" as const
      }
    }
  }

  const card3Variants = {
    front: {
      x: 0,
      y: 0,
      rotate: 2,
      scale: 1,
      zIndex: 50,
      transition: { duration: 0.6, ease: "easeInOut" as const }
    },
    middle: {
      x: offsetVal,
      y: offsetVal,
      rotate: 6,
      scale: 1,
      zIndex: 40,
      transition: { duration: 0.6, ease: "easeInOut" as const }
    },
    back: {
      x: [0, -slideVal, offsetVal],
      y: [0, -20, offsetVal],
      rotate: [2, -10, 10],
      scale: 1,
      zIndex: [50, 10, 10],
      transition: {
        times: [0, 0.4, 1],
        duration: 0.8,
        ease: "easeInOut" as const
      }
    }
  }

  const card4Variants = {
    front: {
      x: 0,
      y: 0,
      rotate: 2,
      scale: 1,
      zIndex: 50,
      transition: { duration: 0.6, ease: "easeInOut" as const }
    },
    middle: {
      x: offsetVal,
      y: offsetVal,
      rotate: 6,
      scale: 1,
      zIndex: 40,
      transition: { duration: 0.6, ease: "easeInOut" as const }
    },
    back: {
      x: [0, slideVal, offsetVal],
      y: [0, -20, offsetVal],
      rotate: [2, 10, 10],
      scale: 1,
      zIndex: [50, 10, 10],
      transition: {
        times: [0, 0.4, 1],
        duration: 0.8,
        ease: "easeInOut" as const
      }
    }
  }

  const card5Variants = {
    front: {
      x: 0,
      y: 0,
      rotate: 2,
      scale: 1,
      zIndex: 50,
      transition: { duration: 0.6, ease: "easeInOut" as const }
    },
    middle: {
      x: offsetVal,
      y: offsetVal,
      rotate: 6,
      scale: 1,
      zIndex: 40,
      transition: { duration: 0.6, ease: "easeInOut" as const }
    },
    back: {
      x: [0, -slideVal, offsetVal],
      y: [0, -20, offsetVal],
      rotate: [2, -10, 10],
      scale: 1,
      zIndex: [50, 10, 10],
      transition: {
        times: [0, 0.4, 1],
        duration: 0.8,
        ease: "easeInOut" as const
      }
    }
  }

  const [sloganIdx, setSloganIdx] = useState(-1);

  useEffect(() => {
    const randomIdx = Math.floor(Math.random() * 9);
    setSloganIdx(randomIdx);
  }, []);

  const defaultSlogan = t("slogans.default.full", "Your Customers Care What Their Products Are Made Of & Where They End Up. Your Packaging Should Too.");

  const slogansB2c = t('slogans.b2c', { returnObjects: true });
  const slogan = sloganIdx >= 0 && Array.isArray(slogansB2c) && slogansB2c[sloganIdx]
    ? slogansB2c[sloganIdx]
    : defaultSlogan;

  const scrollToProducts = () => {
    productsRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  // 3D Pouch Interactive states
  const [activePouchModel, setActivePouchModel] = useState<'spouted' | 'flat-bottom'>('spouted')
  const [threeTilt, setThreeTilt] = useState({ x: 0, y: 0 })
  const [threeScrollPercent, setThreeScrollPercent] = useState(0)
  const threeContainerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleThreeScroll = () => {
      if (!threeContainerRef.current) return
      const rect = threeContainerRef.current.getBoundingClientRect()
      const viewportHeight = window.innerHeight
      
      const start = rect.top - viewportHeight
      const totalRange = rect.height + viewportHeight
      
      if (rect.top < viewportHeight && rect.bottom > 0) {
        const progress = (viewportHeight - rect.top) / totalRange
        setThreeScrollPercent(Math.max(0, Math.min(1, progress)))
      }
    }
    window.addEventListener('scroll', handleThreeScroll, { passive: true })
    handleThreeScroll()
    return () => window.removeEventListener('scroll', handleThreeScroll)
  }, [])

  const handleThreeMouseMove = (e: React.MouseEvent) => {
    if (!threeContainerRef.current) return
    const rect = threeContainerRef.current.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width - 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5
    setThreeTilt({ x: x * 25, y: y * -25 })
  }

  const handleThreeMouseLeave = () => {
    setThreeTilt({ x: 0, y: 0 })
  }

  // Floating elements animation
  const floatAnim = {
    y: [0, -10, 0],
    transition: { duration: 2, repeat: Infinity, ease: "easeInOut" as const }
  }

  const PRODUCTS = [
    {
      id: 'stand-up',
      name: t('pouchHomePage.products.standUp.name', 'Stand Up Pouch'),
      description: t('pouchHomePage.products.standUp.description', 'The industry standard. Perfect for snacks & supplements.'),
      price: '$0.50',
      stats: { moq: '500', material: 'BIO/PCR', barrier: 'HIGH' },
      color: 'bg-[#D4FF00]', // Yellow
      image: '/3d/2d-pouch/pouch2.webp'
    },
    {
      id: 'flat-bottom',
      name: t('pouchHomePage.products.flatBottom.name', 'Flat Bottom'),
      description: t('pouchHomePage.products.flatBottom.description', 'Premium box-like stability. Best for coffee & tea.'),
      price: '$0.65',
      stats: { moq: '500', material: 'RECYCLABLE', barrier: 'MAX' },
      color: 'bg-[#00FFFF]', // Cyan
      image: '/3d/2d-pouch/pouch1.webp'
    },
    {
      id: 'spouted',
      name: t('pouchHomePage.products.spouted.name', 'Spouted Pouch'),
      description: t('pouchHomePage.products.spouted.description', 'Flexible alternative to bottles. Lighter & cheaper.'),
      price: '$0.90',
      stats: { moq: '1K', material: 'MONO-PE', barrier: 'LIQUID' },
      color: 'bg-[#FF00FF]', // Magenta
      image: '/3d/2d-pouch/pouch4.webp'
    }
  ]

  // Add scroll detection for marquee speed boost
  useEffect(() => {
    let scrollTimer: NodeJS.Timeout
    
    const handleScroll = () => {
      document.body.classList.add('is-scrolling')
      
      clearTimeout(scrollTimer)
      scrollTimer = setTimeout(() => {
        document.body.classList.remove('is-scrolling')
      }, 150)
    }
    
    window.addEventListener('scroll', handleScroll, { passive: true })
    
    return () => {
      window.removeEventListener('scroll', handleScroll)
      clearTimeout(scrollTimer)
    }
  }, [])

  return (
    <PouchLayout>
      <Helmet>
        <title>{t('pouchHomePage.meta.title', 'POUCH.ECO - Sustainable Eco Packaging for Startups')}</title>
        <meta name="description" content={t('pouchHomePage.meta.description', 'Sustainable packaging made simple. Low MOQ compostable pouches for startups. Get started with 500 units.')} />
      </Helmet>

      {/* Mobbin Signature Hero Search & Filter Matrix */}
      <MobbinHeroSearch
        selectedTag={selectedTag}
        onTagSelect={(tag) => setSelectedTag(tag)}
        onSearchChange={(term) => setSearchTerm(term)}
      />

      {/* Mobbin Clean Showcase Gallery */}
      <MobbinPouchGallery
        filterTag={selectedTag}
        searchTerm={searchTerm}
      />

      {/* Hero Section with Video Background - Mobbin Light Mode */}
      <section className="relative pt-10 pb-20 border-b border-neutral-200 bg-[#F9FAFB] overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0 w-full h-full">
          <video muted={true}
            autoPlay
            loop
            playsInline
            className="w-full h-full object-cover opacity-20"
            key="hero-video"
          >
            <source src="/video/pouch-eco-marketing-videos/problem.mp4" type="video/mp4" />
            <source src="/video/pouch-eco-marketing-videos/brand-reveal.mp4" type="video/mp4" />
            <source src="/video/pouch-eco-marketing-videos/Material.mp4" type="video/mp4" />
            <source src="/video/pouch-eco-marketing-videos/Performance.mp4" type="video/mp4" />
          </video>
          {/* Subtle Ambient Glass Effect Overlay */}
          <div className="absolute inset-0 backdrop-blur-[1px] bg-gradient-to-b from-[#F9FAFB]/90 via-[#F9FAFB]/70 to-[#F9FAFB]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Content */}
            <div className="space-y-6 z-10">
              <div className="inline-flex items-center gap-2 bg-neutral-100 border border-neutral-200/90 rounded-full px-3.5 py-1 text-xs font-semibold text-neutral-800 shadow-xs">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>{t('pouchHomePage.hero.badge', 'ECO_SYSTEM v2026')}</span>
              </div>
              
              <h1 className="font-sans font-bold text-5xl md:text-7xl leading-[1.05] tracking-tight text-neutral-900">
                {t('pouchHomePage.hero.h1Line1', 'Start.')} {t('pouchHomePage.hero.h1Line2', 'Scale.')}<br/>
                <Typewriter words={t('pouchHomePage.hero.typewriterWords', { returnObjects: true, defaultValue: ['Sustain.', 'Eco.', 'Digital.'] }) as string[]} />
              </h1>

              {/* Mobbin Slogan Block */}
              <div className="bg-white border border-neutral-200/90 shadow-sm rounded-2xl p-5 font-sans text-base font-medium text-neutral-700 leading-relaxed max-w-lg">
                "{slogan}"
              </div>

              <div className="bg-white border border-neutral-200/90 rounded-2xl p-5 shadow-sm max-w-lg">
                <p className="font-mono font-medium text-sm md:text-base text-neutral-800 leading-relaxed">
                  {t('pouchHomePage.hero.terminalLine1', '> Eco packaging from 500 units.')}<br/>
                  {t('pouchHomePage.hero.terminalLine2', '> Compostable // Recyclable // Bio-based.')}<br/>
                  {t('pouchHomePage.hero.terminalLine3', '> Fast turnaround. Guaranteed quality.')}
                </p>
                {/* Eco Material Badges */}
                <div className="flex gap-4 mt-4 border-t border-neutral-100 pt-4 items-center">
                  <img src="/eco-logo/transparent-bkg/compost.png" alt={t("pouchHomePage.hero.alts.compostable", "Compostable")} className="h-10 md:h-12 w-auto opacity-80 hover:opacity-100 hover:scale-105 transition-all" />
                  <img src="/eco-logo/transparent-bkg/recycle.png" alt={t("pouchHomePage.hero.alts.recyclable", "Recyclable")} className="h-10 md:h-12 w-auto opacity-80 hover:opacity-100 hover:scale-105 transition-all" />
                  <img src="/eco-logo/transparent-bkg/biope.png" alt={t("pouchHomePage.hero.alts.biobased", "Bio-based")} className="h-10 md:h-12 w-auto opacity-80 hover:opacity-100 hover:scale-105 transition-all" />
                  <img src="/eco-logo/transparent-bkg/pcr.png" alt={t("pouchHomePage.hero.alts.pcr", "PCR")} className="h-10 md:h-12 w-auto opacity-80 hover:opacity-100 hover:scale-105 transition-all" />
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <NeoButton href="https://calendly.com/30-min-free-packaging-consultancy">{t('pouchHomePage.hero.ctaBook', 'Book Consultation')}</NeoButton>
                <NeoButton to="/materials" variant="secondary">{t('pouchHomePage.hero.ctaMaterials', 'View Materials')}</NeoButton>
              </div>
            </div>

            {/* Right Visual - Mobbin Card Showcase */}
            <div className="relative w-full max-w-md lg:max-w-[540px] aspect-square mx-auto lg:ml-auto lg:mr-0 mb-10 md:mb-0">
              {/* Manual Nav Arrows */}
              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  setActiveHeroIndex((prev) => (prev === 0 ? 4 : prev - 1));
                }}
                className="absolute left-[-20px] top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 hover:bg-white border border-neutral-200/90 rounded-full flex items-center justify-center shadow-md active:scale-95 transition-all z-[60] cursor-pointer"
                aria-label={t("pouchHomePage.hero.buttons.prev", "Previous video")}
              >
                <ChevronLeft className="w-5 h-5 text-neutral-700" />
              </button>
              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  setActiveHeroIndex((prev) => (prev === 4 ? 0 : prev + 1));
                }}
                className="absolute right-[-20px] top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 hover:bg-white border border-neutral-200/90 rounded-full flex items-center justify-center shadow-md active:scale-95 transition-all z-[60] cursor-pointer"
                aria-label={t("pouchHomePage.hero.buttons.next", "Next video")}
              >
                <ChevronRight className="w-5 h-5 text-neutral-700" />
              </button>

              {/* Card 1: Bag Video */}
              <motion.div
                variants={card1Variants}
                animate={activeHeroIndex === 0 ? "front" : (activeHeroIndex === 4 ? "middle" : "back")}
                className="absolute inset-0 w-full h-full"
              >
                <div className="bg-white border border-neutral-200/90 rounded-3xl w-full h-full overflow-hidden group relative shadow-lg">
                  <video muted={true}
                    ref={videoRef1}
                    autoPlay
                    playsInline
                    poster="/video/hero/cover.jpg"
                    onEnded={() => setActiveHeroIndex(1)}
                    className="w-full h-full object-cover relative z-10 group-hover:scale-105 transition-transform duration-500"
                  >
                    <source src="/video/hero/bag.mp4" type="video/mp4" />
                    <source src="/video/hero/bag.mov" type="video/quicktime" />
                  </video>
                  
                  {/* Floating Tag */}
                  <motion.div animate={floatAnim} className="absolute top-4 right-4 bg-white/90 backdrop-blur-md border border-neutral-200/90 px-3 py-1 font-mono text-xs font-semibold rounded-full shadow-sm z-20 text-neutral-800">
                    {t("pouchHomePage.hero.tags.compostable", "COMPOSTABLE_OK")}
                  </motion.div>
                </div>
              </motion.div>

              {/* Card 2: Recycle Video */}
              <motion.div
                variants={card2Variants}
                animate={activeHeroIndex === 1 ? "front" : (activeHeroIndex === 0 ? "middle" : "back")}
                className="absolute inset-0 w-full h-full"
              >
                <div className="bg-white border border-neutral-200/90 rounded-3xl w-full h-full overflow-hidden group relative shadow-lg">
                  <video muted={true}
                    ref={videoRef2}
                    autoPlay
                    playsInline
                    poster="/video/hero/recycle/recyclable cover.png"
                    onEnded={() => setActiveHeroIndex(2)}
                    className="w-full h-full object-cover relative z-10 group-hover:scale-105 transition-transform duration-500"
                  >
                    <source src="/video/hero/recycle/remake_this_image_to_square_.mp4" type="video/mp4" />
                  </video>
                  
                  <motion.div animate={floatAnim} className="absolute top-4 right-4 bg-white/90 backdrop-blur-md border border-neutral-200/90 px-3 py-1 font-mono text-xs font-semibold rounded-full shadow-sm z-20 text-neutral-800">
                    {t("pouchHomePage.hero.tags.recyclable", "RECYCLABLE_OK")}
                  </motion.div>
                </div>
              </motion.div>

              {/* Card 3: Industrial Video */}
              <motion.div
                variants={card3Variants}
                animate={activeHeroIndex === 2 ? "front" : (activeHeroIndex === 1 ? "middle" : "back")}
                className="absolute inset-0 w-full h-full"
              >
                <div className="bg-white border border-neutral-200/90 rounded-3xl w-full h-full overflow-hidden group relative shadow-lg">
                  <video muted={true}
                    ref={videoRef3}
                    autoPlay
                    playsInline
                    poster="/video/hero/industrial/industrial cover.png"
                    onEnded={() => setActiveHeroIndex(3)}
                    className="w-full h-full object-cover relative z-10 group-hover:scale-105 transition-transform duration-500"
                  >
                    <source src="/video/hero/industrial/industrial.mp4" type="video/mp4" />
                  </video>
                  
                  <motion.div animate={floatAnim} className="absolute top-4 right-4 bg-white/90 backdrop-blur-md border border-neutral-200/90 px-3 py-1 font-mono text-xs font-semibold rounded-full shadow-sm z-20 text-neutral-800">
                    {t("pouchHomePage.hero.tags.industrial", "INDUSTRIAL_OK")}
                  </motion.div>
                </div>
              </motion.div>

              {/* Card 4: PCR Video */}
              <motion.div
                variants={card4Variants}
                animate={activeHeroIndex === 3 ? "front" : (activeHeroIndex === 2 ? "middle" : "back")}
                className="absolute inset-0 w-full h-full"
              >
                <div className="bg-white border border-neutral-200/90 rounded-3xl w-full h-full overflow-hidden group relative shadow-lg">
                  <video muted={true}
                    ref={videoRef4}
                    autoPlay
                    playsInline
                    poster="/video/hero/PCR/prc cover.png"
                    onEnded={() => setActiveHeroIndex(4)}
                    className="w-full h-full object-cover relative z-10 group-hover:scale-105 transition-transform duration-500"
                  >
                    <source src="/video/hero/PCR/pcr.mp4" type="video/mp4" />
                  </video>
                  
                  <motion.div animate={floatAnim} className="absolute top-4 right-4 bg-white/90 backdrop-blur-md border border-neutral-200/90 px-3 py-1 font-mono text-xs font-semibold rounded-full shadow-sm z-20 text-neutral-800">
                    {t("pouchHomePage.hero.tags.pcr", "PCR_BARRIER_OK")}
                  </motion.div>
                </div>
              </motion.div>

              {/* Card 5: BioPE Video */}
              <motion.div
                variants={card5Variants}
                animate={activeHeroIndex === 4 ? "front" : (activeHeroIndex === 3 ? "middle" : "back")}
                className="absolute inset-0 w-full h-full"
              >
                <div className="bg-white border border-neutral-200/90 rounded-3xl w-full h-full overflow-hidden group relative shadow-lg">
                  <video muted={true}
                    ref={videoRef5}
                    autoPlay
                    playsInline
                    poster="/video/hero/biope/biope cover.png"
                    onEnded={() => setActiveHeroIndex(0)}
                    className="w-full h-full object-cover relative z-10 group-hover:scale-105 transition-transform duration-500"
                  >
                    <source src="/video/hero/biope/biope.mp4" type="video/mp4" />
                  </video>
                  
                  <motion.div animate={floatAnim} className="absolute top-4 right-4 bg-white/90 backdrop-blur-md border border-neutral-200/90 px-3 py-1 font-mono text-xs font-semibold rounded-full shadow-sm z-20 text-neutral-800">
                    {t("pouchHomePage.hero.tags.biobased", "BIO_BASED_OK")}
                  </motion.div>
                </div>
              </motion.div>

              {/* Decorative Pill Badge */}
              <div className="absolute -bottom-4 -left-4 bg-neutral-900 text-white rounded-2xl px-5 py-3 shadow-xl z-[70]">
                <span className="font-bold text-sm font-sans">{t("pouchHomePage.hero.badge", "500 MOQ")}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted Brands Logo Marquee - Mobbin Light Mode */}
      <section className="py-16 px-4 bg-white border-y border-neutral-200/80 overflow-hidden">
        <div className="max-w-6xl mx-auto mb-10 text-center">
          <div className="inline-flex items-center gap-1.5 bg-neutral-100 border border-neutral-200/90 rounded-full px-3.5 py-1 text-xs font-medium text-neutral-800 mb-4">
            <span>{t('pouchHomePage.trustedBy.badge', 'TRUSTED_BY')}</span>
          </div>
          <h2 className="font-sans font-bold text-3xl md:text-5xl text-neutral-900 tracking-tight mb-3">
            {t('pouchHomePage.trustedBy.titlePrefix', 'Join ')}<span className="text-emerald-600">{t('pouchHomePage.trustedBy.titleHighlight', '500+')}</span>{t('pouchHomePage.trustedBy.titleSuffix', ' Brands')}
          </h2>
          <p className="text-base text-neutral-600 font-sans max-w-xl mx-auto">
            {t('pouchHomePage.trustedBy.subtitle', 'From startups to established names - they all started with 500 units')}
          </p>
        </div>

        {/* Logo Strip 1 - Scrolling Left */}
        <div className="relative mb-4">
          <div className="bg-neutral-50/80 border border-neutral-200/80 py-5 rounded-2xl overflow-hidden">
            <div className="flex animate-scroll-left">
              {/* First set */}
              {[
                { name: 'Morlife', image: '/imgs/clien-logos/morlife.png' },
                { name: 'Sustenir Agriculture', image: '/imgs/clien-logos/sustenir.png' },
                { name: 'Two Rivers', image: '/imgs/clien-logos/tworivers.png' },
                { name: 'Humble Snacks', image: '/imgs/clien-logos/humble.png' },
                { name: 'Mavella Superfoods', image: '/imgs/clien-logos/mavella.png' },
                { name: 'Superfood Lab Asia', image: '/imgs/clien-logos/superfood.png' },
                { name: 'Green Urban Foods', image: '/imgs/clien-logos/green-urban.png' },
                { name: 'Knowrish Well', image: '/imgs/clien-logos/knowrish.png' },
                { name: 'Fodilicious', image: '/imgs/clien-logos/fodilicious.png' },
                { name: 'Hike Again Remedies', image: '/imgs/clien-logos/hike.png' },
                { name: 'Nuditea', image: '/imgs/clien-logos/nuditea.png' },
                { name: 'Winand Products', image: '/imgs/clien-logos/winand.png' },
                { name: 'Freshfield', image: '/imgs/clien-logos/freshfield.png' },
                { name: 'Honestea', image: '/imgs/clien-logos/honestea.png' },
                { name: 'Moom Health', image: '/imgs/clien-logos/moom.png' }
              ].map((logo, idx) => (
                <div 
                  key={`logo-1-${idx}`} 
                  className="flex-shrink-0 mx-6 h-14 w-28 flex items-center justify-center bg-white border border-neutral-200/80 rounded-xl shadow-xs hover:border-neutral-300 transition-all"
                >
                  <img 
                    src={logo.image} 
                    alt={logo.name} 
                    className="h-10 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity grayscale hover:grayscale-0" 
                    loading="lazy"
                  />
                </div>
              ))}
              {/* Duplicate set for seamless loop */}
              {[
                { name: 'Morlife', image: '/imgs/clien-logos/morlife.png' },
                { name: 'Sustenir Agriculture', image: '/imgs/clien-logos/sustenir.png' },
                { name: 'Two Rivers', image: '/imgs/clien-logos/tworivers.png' },
                { name: 'Humble Snacks', image: '/imgs/clien-logos/humble.png' },
                { name: 'Mavella Superfoods', image: '/imgs/clien-logos/mavella.png' },
                { name: 'Superfood Lab Asia', image: '/imgs/clien-logos/superfood.png' },
                { name: 'Green Urban Foods', image: '/imgs/clien-logos/green-urban.png' },
                { name: 'Knowrish Well', image: '/imgs/clien-logos/knowrish.png' },
                { name: 'Fodilicious', image: '/imgs/clien-logos/fodilicious.png' },
                { name: 'Hike Again Remedies', image: '/imgs/clike.png' },
                { name: 'Nuditea', image: '/imgs/clien-logos/nuditea.png' },
                { name: 'Winand Products', image: '/imgs/clien-logos/winand.png' },
                { name: 'Freshfield', image: '/imgs/clien-logos/freshfield.png' },
                { name: 'Honestea', image: '/imgs/clien-logos/honestea.png' },
                { name: 'Moom Health', image: '/imgs/clien-logos/moom.png' }
              ].map((logo, idx) => (
                <div 
                  key={`logo-2-${idx}`} 
                  className="flex-shrink-0 mx-6 h-14 w-28 flex items-center justify-center bg-white border border-neutral-200/80 rounded-xl shadow-xs hover:border-neutral-300 transition-all"
                >
                  <img 
                    src={logo.image} 
                    alt={logo.name} 
                    className="h-10 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity grayscale hover:grayscale-0" 
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Custom CSS for infinite scroll animations */}
        <style>{`
          @keyframes scroll-left {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }

          @keyframes scroll-right {
            0% {
              transform: translateX(-50%);
            }
            100% {
              transform: translateX(0);
            }
          }

          .animate-scroll-left {
            animation: scroll-left 25s linear infinite;
          }

          .animate-scroll-right {
            animation: scroll-right 25s linear infinite;
          }

          .animate-scroll-left:hover,
          .animate-scroll-right:hover {
            animation-play-state: paused;
          }
        `}</style>
      </section>

      {/* Interactive 3D Eco Pouch Showcase - Mobbin Light Mode */}
      <section 
        ref={threeContainerRef}
        onMouseMove={handleThreeMouseMove}
        onMouseLeave={handleThreeMouseLeave}
        className="py-20 bg-[#F9FAFB] border-b border-neutral-200 overflow-hidden relative"
      >
        <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="inline-flex items-center gap-1.5 bg-emerald-50 border border-emerald-200 rounded-full px-3.5 py-1 text-xs font-semibold text-emerald-700 mb-4">
              <span>{t("pouchHomePage.showcase.badge", "✨ Interactive 3D Showcase")}</span>
            </div>
            <h2 className="font-sans font-bold text-4xl md:text-6xl text-neutral-900 tracking-tight">
              {t("pouchHomePage.showcase.title", "Eco Bags in 3D Space")}
            </h2>
            <p className="font-sans text-base mt-4 leading-relaxed text-neutral-600">
              {t("pouchHomePage.showcase.subtitle", "Rotate, tilt, and inspect the certified organic structural barriers of our green pouches. Move your mouse to tilt, scroll to spin, or toggle models below.")}
            </p>
          </div>

          <div className="grid lg:grid-cols-12 gap-8 items-center">
            {/* Left Controls & Marketing Copy (5 columns) */}
            <div className="lg:col-span-5 space-y-6">
              {/* Card 1: Spouted Pouch */}
              <button
                onClick={() => setActivePouchModel('spouted')}
                className={`w-full text-left p-6 rounded-2xl border transition-all duration-200 relative ${
                  activePouchModel === 'spouted'
                    ? 'bg-white border-neutral-900 shadow-md'
                    : 'bg-white border-neutral-200 hover:border-neutral-300 shadow-sm'
                }`}
              >
                <div className="flex justify-between items-start gap-4">
                  <div>
                    <span className="inline-block px-2.5 py-0.5 text-xs font-semibold rounded-full bg-neutral-100 text-neutral-800 mb-2">
                      {t("pouchHomePage.showcase.spouted.tag", "💧 Liquids & Purees")}
                    </span>
                    <h3 className="font-sans font-bold text-xl text-neutral-900">
                      {t("pouchHomePage.showcase.spouted.title", "Industrial Compostable Spouted Pouch")}
                    </h3>
                  </div>
                  <span className="text-2xl bg-neutral-50 border border-neutral-200 p-2 rounded-xl">🥤</span>
                </div>
                
                <p className="font-sans text-sm mt-3 leading-relaxed text-neutral-600">
                  {t("pouchHomePage.showcase.spouted.desc", "Certified industrial compostable flexible pouch featuring a fully plant-based rigid spout. Replaces conventional plastic spout barrier options with zero plastic footprint.")}
                </p>

                <div className="mt-4 pt-4 border-t border-neutral-100 grid grid-cols-2 gap-4 text-xs font-sans text-neutral-700">
                  <div>
                    <span className="font-medium text-neutral-500 block uppercase text-[10px] tracking-wider">{t("pouchHomePage.showcase.spouted.moqLabel", "MOQ:")}</span>
                    <span className="font-semibold text-neutral-900 mt-0.5 inline-block">{t("pouchHomePage.showcase.spouted.moqVal", "2,000 units")}</span>
                  </div>
                  <div>
                    <span className="font-medium text-neutral-500 block uppercase text-[10px] tracking-wider">{t("pouchHomePage.showcase.spouted.certLabel", "Certifications:")}</span>
                    <span className="font-semibold text-emerald-700 mt-0.5 inline-block">{t("pouchHomePage.showcase.spouted.certVal", "EN 13432, ASTM D6400")}</span>
                  </div>
                </div>
              </button>

              {/* Card 2: Flat Bottom Pouch */}
              <button
                onClick={() => setActivePouchModel('flat-bottom')}
                className={`w-full text-left p-6 rounded-2xl border transition-all duration-200 relative ${
                  activePouchModel === 'flat-bottom'
                    ? 'bg-white border-neutral-900 shadow-md'
                    : 'bg-white border-neutral-200 hover:border-neutral-300 shadow-sm'
                }`}
              >
                <div className="flex justify-between items-start gap-4">
                  <div>
                    <span className="inline-block px-2.5 py-0.5 text-xs font-semibold rounded-full bg-neutral-100 text-neutral-800 mb-2">
                      {t("pouchHomePage.showcase.flatBottom.tag", "🌱 Dry Goods & Coffee")}
                    </span>
                    <h3 className="font-sans font-bold text-xl text-neutral-900">
                      {t("pouchHomePage.showcase.flatBottom.title", "Home Compostable Flat Bottom Pouch")}
                    </h3>
                  </div>
                  <span className="text-2xl bg-neutral-50 border border-neutral-200 p-2 rounded-xl">☕</span>
                </div>
                
                <p className="font-sans text-sm mt-3 leading-relaxed text-neutral-600">
                  {t("pouchHomePage.showcase.flatBottom.desc", "Premium 100% home compostable box bottom structure that delivers outstanding shelf presence. Decomposes safely and naturally in home backyard compost bins.")}
                </p>

                <div className="mt-4 pt-4 border-t border-neutral-100 grid grid-cols-2 gap-4 text-xs font-sans text-neutral-700">
                  <div>
                    <span className="font-medium text-neutral-500 block uppercase text-[10px] tracking-wider">{t("pouchHomePage.showcase.flatBottom.moqLabel", "MOQ:")}</span>
                    <span className="font-semibold text-neutral-900 mt-0.5 inline-block">{t("pouchHomePage.showcase.flatBottom.moqVal", "1,000 units")}</span>
                  </div>
                  <div>
                    <span className="font-medium text-neutral-500 block uppercase text-[10px] tracking-wider">{t("pouchHomePage.showcase.flatBottom.certLabel", "Certifications:")}</span>
                    <span className="font-semibold text-emerald-700 mt-0.5 inline-block">{t("pouchHomePage.showcase.flatBottom.certVal", "OK Compost HOME")}</span>
                  </div>
                </div>
              </button>
            </div>

            {/* Right 3D Viewport (7 columns) */}
            <div className="lg:col-span-7 h-[480px] md:h-[540px] bg-white border border-neutral-200 rounded-3xl p-6 shadow-sm relative flex items-center justify-center overflow-hidden">
              <div className="w-full h-full relative z-10">
                <ThreePouchViewer 
                  modelUrl={activePouchModel === 'spouted' ? '/3d/3d-pouch/spouted-pouch.glb' : '/3d/3d-pouch/coffee-pouch.glb'} 
                  tilt={threeTilt} 
                  scrollPercent={threeScrollPercent} 
                  isMobile={false} 
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5 Common Problems Section - Mobbin Light Mode */}
      <section className="py-20 bg-white border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-sans font-bold text-3xl md:text-5xl text-neutral-900 tracking-tight">
              {pageT.sectionTitle}
            </h2>
          </div>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img 
                src="/imgs/knowledge/pouch-packaging-pain-points.jpg"
                alt={pageT.sectionTitle}
                className="relative z-10 border border-neutral-200 rounded-3xl w-full shadow-md"
              />
            </div>
            <div className="space-y-4">
              {pageT.problems.map((prob, idx) => (
                <div key={idx} className="bg-[#F9FAFB] border border-neutral-200/90 rounded-2xl p-5 flex gap-4 items-start shadow-xs hover:border-neutral-300 transition-all">
                  <div className="bg-emerald-500/10 text-emerald-600 p-2 rounded-xl flex-shrink-0 mt-0.5">
                    <CheckCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-sans font-bold text-lg text-neutral-900 mb-1">{prob.title}</h4>
                    <p className="font-sans text-sm text-neutral-600 leading-relaxed">{prob.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <WorkCarousel theme="pouch" />
      <KnowHowCarousel theme="pouch" />

      {/* Social Video Section - Added by AI */}
      <section className="py-24 px-4 md:px-6 max-w-[1920px] mx-auto overflow-hidden">
        <div className="text-center mb-16">
          <div className="inline-block bg-black text-[#D4FF00] px-4 py-1 mb-6 font-['JetBrains_Mono'] font-bold transform -rotate-1">
            {t("pouchHomePage.social.badge", "REAL PRODUCTS • REAL BRANDS")}
          </div>
          <h2 className="font-black text-5xl md:text-8xl uppercase mb-6 tracking-tighter">
            {t("pouchHomePage.social.title", "As Seen In Social")}
          </h2>
          <p className="font-['JetBrains_Mono'] text-lg max-w-2xl mx-auto text-gray-700">
            {t("pouchHomePage.social.desc", "Watch how our pouches help brands go viral. Unboxing experiences that customers love to share.")}
          </p>
        </div>
        
        {/* Horizontal Scroll / Grid of Vertical Videos */}
        <div className="flex gap-4 overflow-x-auto pb-8 snap-x snap-mandatory px-4 md:px-0 md:justify-center scrollbar-hide">
          {[1, 2, 3, 4, 5, 6, 7].map((num) => (
            <SocialVideoCard 
              key={num}
              index={num}
              videoSrc={`/video/social/social-${num}.mp4`}
              coverSrc={`/video/social/cover-${num}.jpg`}
            />
          ))}
        </div>
      </section>

      {/* Video Showcase */}
      <VideoShowcase />

      {/* Feature Bento Grid */}
      <section className="py-24 px-4 md:px-6 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <h2 className="font-black text-5xl md:text-7xl uppercase leading-none">
            {t("pouchHomePage.features.title", "Core Features")}
          </h2>
          <div className="font-['JetBrains_Mono'] text-sm font-bold bg-[#D4FF00] border-2 border-black px-4 py-2">
            {t("pouchHomePage.features.selectMaterial", "SELECT_MATERIAL_BELOW")}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Feature 1: Low MOQ */}
          <NeoCard className="md:col-span-2 bg-[#F0F0F0] relative overflow-hidden group">
            <div className="relative z-10">
              <Zap className="w-12 h-12 mb-4 text-[#FF00FF]" />
              <h3 className="font-black text-3xl mb-4 uppercase">{t("pouchHomePage.features.moq.title", "Low MOQ Protocol")}</h3>
              <p className="font-['JetBrains_Mono'] text-sm leading-relaxed mb-6 max-w-md">
                {t("pouchHomePage.features.moq.desc", "Start with just 500 units. Test your market without massive inventory commitment. Perfect for startups and new product launches.")}
              </p>
              <div className="flex gap-2">
                <NeoBadge color="bg-[#D4FF00]">{t("pouchHomePage.features.moq.badge1", "500_MIN")}</NeoBadge>
                <NeoBadge color="bg-[#00FFFF]">{t("pouchHomePage.features.moq.badge2", "Fast_Launch")}</NeoBadge>
              </div>
            </div>
             <img src="/imgs/infographic-low-moq.webp" className="absolute right-0 bottom-0 w-48 opacity-20 grayscale group-hover:scale-110 transition-transform duration-500" alt="Low MOQ" />
          </NeoCard>

          {/* Feature 2: Compostable */}
          <NeoCard color="bg-[#00FFFF]" className="flex flex-col justify-between group overflow-hidden relative">
            <div className="relative z-10">
              <Leaf className="w-12 h-12 mb-4" />
              <h3 className="font-black text-3xl mb-2 uppercase">{t("pouchHomePage.features.compostable.title", "Bio_Matrix")}</h3>
              <p className="font-['JetBrains_Mono'] text-sm mb-4">{t("pouchHomePage.features.compostable.desc", "Certified compostable materials. Industrial + home compost ready.")}</p>
            </div>
            <div className="font-['JetBrains_Mono'] text-xs border-t-2 border-black pt-4 mt-4 relative z-10">
              {t("pouchHomePage.features.compostable.statusLabel", "STATUS:")} <span className="font-bold">{t("pouchHomePage.features.compostable.statusVal", "BPI_CERTIFIED")}</span>
            </div>
            <img src="https://achievepack.com/imgs/infographic-compostable.webp" className="absolute right-[-20%] bottom-[-20%] w-64 opacity-20 grayscale rotate-12 group-hover:rotate-0 transition-transform duration-500" alt="Compostable" />
          </NeoCard>

          {/* Feature 3: Fast Turnaround */}
          <NeoCard color="bg-[#D4FF00]" className="flex flex-col justify-between group overflow-hidden relative">
            <div className="relative z-10">
              <Flame className="w-12 h-12 mb-4" />
              <h3 className="font-black text-3xl mb-2 uppercase">{t("pouchHomePage.features.fast.title", "Fast_Ship")}</h3>
              <p className="font-['JetBrains_Mono'] text-sm mb-4">{t("pouchHomePage.features.fast.desc", "Samples in 2-3 weeks. Production in 6-8 weeks. No delays.")}</p>
            </div>
            <div className="font-['JetBrains_Mono'] text-xs border-t-2 border-black pt-4 mt-4 relative z-10">
              {t("pouchHomePage.features.fast.speedLabel", "SPEED:")} <span className="font-bold">{t("pouchHomePage.features.fast.speedVal", "OPTIMIZED")}</span>
            </div>
            <img src="https://achievepack.com/imgs/infographic-fast-turnaround.webp" className="absolute right-[-20%] bottom-[-20%] w-64 opacity-20 grayscale rotate-12 group-hover:rotate-0 transition-transform duration-500" alt="Fast Turnaround" />
          </NeoCard>

          {/* Feature 4: High Barrier */}
          <NeoCard className="md:col-span-2 bg-white relative overflow-hidden group">
            <div className="relative z-10">
              <BoxIcon className="w-12 h-12 mb-4 text-blue-600" />
              <h3 className="font-black text-3xl mb-4 uppercase">{t("pouchHomePage.features.barrier.title", "High-Barrier Tech")}</h3>
              <p className="font-['JetBrains_Mono'] text-sm leading-relaxed mb-6 max-w-lg">
                {t("pouchHomePage.features.barrier.desc", "Multi-layer barrier structures. O2 + moisture blocking. Keeps product fresh for 6-18 months shelf life.")}
              </p>
              <NeoButton to="/tech-specs" className="text-sm">{t("pouchHomePage.features.barrier.btn", "View Tech Specs")}</NeoButton>
            </div>
            <img src="https://achievepack.com/imgs/feature-barrier-options.webp" className="absolute right-0 top-0 h-full w-1/2 object-cover opacity-20 grayscale group-hover:grayscale-0 transition-all duration-500 mask-image-gradient" alt="Barrier Options" />
          </NeoCard>
        </div>
      </section>

      {/* Mobbin Packaging Apps Section */}
      <section className="py-20 px-4 md:px-6 bg-[#F9FAFB] border-t border-b border-neutral-200 relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-1.5 bg-neutral-100 border border-neutral-200 rounded-full px-3.5 py-1 text-xs font-semibold text-neutral-800 mb-4">
                <span>{t("pouchHomePage.appSuite.badge", "⚡ INTERACTIVE_UTILITIES")}</span>
              </div>
              <h2 className="font-sans font-bold text-4xl md:text-6xl text-neutral-900 tracking-tight">
                {t("pouchHomePage.appSuite.title", "PACKAGING APP SUITE")}
              </h2>
              <p className="font-sans text-base mt-4 leading-relaxed text-neutral-600">
                {t("pouchHomePage.appSuite.subtitle", "Engineer your pouch sizing and material specifications instantly. No guessing, no errors. Pure technical precision.")}
              </p>
            </div>

            {/* Scroll Navigation Controls */}
            <div className="flex items-center gap-3 mt-6 md:mt-0">
              <button 
                onClick={scrollAppsLeft} 
                className="w-10 h-10 rounded-full border border-neutral-200 bg-white hover:bg-neutral-50 shadow-xs active:scale-95 transition-all flex items-center justify-center cursor-pointer"
                aria-label="Scroll left"
              >
                <ChevronLeft className="w-5 h-5 text-neutral-700" />
              </button>
              <button 
                onClick={scrollAppsRight} 
                className="w-10 h-10 rounded-full border border-neutral-200 bg-neutral-900 hover:bg-neutral-800 shadow-xs active:scale-95 transition-all flex items-center justify-center cursor-pointer"
                aria-label="Scroll right"
              >
                <ChevronRight className="w-5 h-5 text-white" />
              </button>
            </div>
          </div>

          {/* Horizontal Scrollable Container */}
          <div 
            ref={appsScrollRef}
            className="flex gap-6 overflow-x-auto no-scrollbar scroll-smooth pb-6"
            style={{ scrollSnapType: 'x mandatory' }}
          >
            {PACKAGING_APPS.map((app) => (
              <div 
                key={app.id}
                className="flex-none w-[310px] sm:w-[350px] bg-white border border-neutral-200 rounded-2xl p-6 shadow-sm hover:shadow-md hover:border-neutral-300 transition-all flex flex-col justify-between group"
                style={{ scrollSnapAlign: 'start' }}
              >
                <div>
                  <div className="flex justify-between items-start mb-5 pb-3 border-b border-neutral-100">
                    <div className="w-12 h-12 rounded-xl border border-neutral-200 bg-neutral-50 flex items-center justify-center group-hover:scale-105 transition-transform">
                      {app.icon === 'sizing' && <SizingFinderIcon className="w-6 h-6 text-neutral-800" strokeWidth={2} />}
                      {app.icon === 'spec' && <MaterialSpecFinderIcon className="w-6 h-6 text-neutral-800" strokeWidth={2} />}
                      {app.icon === 'search' && <Search className="w-6 h-6 text-neutral-800" strokeWidth={2} />}
                      {app.icon === 'pentool' && <PenTool className="w-6 h-6 text-neutral-800" strokeWidth={2} />}
                      {app.icon === 'map-pin' && <MapPin className="w-6 h-6 text-neutral-800" strokeWidth={2} />}
                      {app.icon === 'box' && <BoxIcon className="w-6 h-6 text-neutral-800" strokeWidth={2} />}
                      {app.icon === 'calc' && <Calculator className="w-6 h-6 text-neutral-800" strokeWidth={2} />}
                    </div>
                    <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-neutral-100 text-neutral-800 border border-neutral-200">
                      {app.label}
                    </span>
                  </div>
                  
                  <h3 className="font-sans font-bold text-xl mb-2 text-neutral-900">{app.title}</h3>
                  <p className="font-sans text-xs leading-relaxed mb-4 text-neutral-600 min-h-[64px]">
                    {app.desc}
                  </p>

                  <ul className="space-y-2 mb-6 font-sans text-xs text-neutral-700 min-h-[90px]">
                    {app.bullets.map((bullet, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-1.5 flex-shrink-0"></span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <NeoButton to={app.link} className="w-full text-center py-3 text-xs font-semibold">
                  {app.btnText}
                </NeoButton>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mobbin Website Free Creation & Samples Section */}
      <section className="py-20 px-4 md:px-6 bg-white border-b border-neutral-200">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="inline-flex items-center gap-1.5 bg-neutral-100 border border-neutral-200 rounded-full px-3.5 py-1 text-xs font-medium text-neutral-800 mb-4">
              🌐 FREE_WEB_DEVELOPMENT
            </div>
            <h2 className="font-sans font-bold text-3xl md:text-5xl text-neutral-900 tracking-tight">
              FREE STOREFRONT & LIVE BRAND DEMOS
            </h2>
            <p className="font-sans text-base mt-4 leading-relaxed text-neutral-600">
              Get a premium high-converting web storefront for your business or try our live interactive samples.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Card 1: Free Website Design */}
            <div className="bg-[#F9FAFB] border border-neutral-200 rounded-3xl p-8 shadow-sm flex flex-col justify-between group hover:shadow-md transition-all">
              <div>
                <span className="bg-neutral-900 text-white font-sans font-medium text-xs rounded-full px-3 py-1 inline-block">Free Program</span>
                <h3 className="font-sans font-bold text-2xl mt-5 mb-3 text-neutral-900">Free Storefront Upgrade</h3>
                <p className="font-sans text-sm leading-relaxed mb-6 text-neutral-600">
                  We design and develop a custom modern web storefront in React for brands ordering sustainable packaging from us. Fully responsive, ultra-fast, and search-optimized at zero cost.
                </p>
                <ul className="space-y-3 mb-8 font-sans text-xs font-medium text-neutral-700">
                  <li className="flex items-center gap-2.5">
                    <CheckCircle className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                    <span>Free custom domain mapping & branding system</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <CheckCircle className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                    <span>Integration of custom dielines and calculators</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <CheckCircle className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                    <span>100% SEO-optimized with multi-language support</span>
                  </li>
                </ul>
              </div>
              <NeoButton to="/free-service/website-upgrade" className="w-full text-center py-3 text-xs font-semibold">
                Explore Website Program →
              </NeoButton>
            </div>

            {/* Card 2: Interactive Demos */}
            <div className="bg-[#F9FAFB] border border-neutral-200 rounded-3xl p-8 shadow-sm flex flex-col justify-between group hover:shadow-md transition-all">
              <div>
                <span className="bg-emerald-600 text-white font-sans font-medium text-xs rounded-full px-3 py-1 inline-block">Live Samples</span>
                <h3 className="font-sans font-bold text-2xl mt-5 mb-3 text-neutral-900">Interactive Brand Demos</h3>
                <p className="font-sans text-sm leading-relaxed mb-6 text-neutral-600">
                  Explore pre-built mockups to see the web capabilities we build for our B2B customers. Real-time product customization, fully responsive structures, and custom packaging calculators.
                </p>
                <ul className="space-y-3 mb-8 font-sans text-xs font-medium text-neutral-700">
                  <li className="flex items-center gap-2.5">
                    <CheckCircle className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                    <span>MaxiFoods Storefront Showcase (Responsive shop)</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <CheckCircle className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                    <span>Achieve Chips 3D Stand-Up Pouch Experience</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <CheckCircle className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                    <span>Pencil Interactive Mockup drawing boards</span>
                  </li>
                </ul>
              </div>
              <NeoButton to="/free-service/all" variant="secondary" className="w-full text-center py-3 text-xs font-semibold">
                Browse Brand Samples →
              </NeoButton>
            </div>
          </div>
        </div>
      </section>

      {/* Product Grid - Mobbin Light Mode */}
      <section ref={productsRef} className="py-20 bg-neutral-900 border-y border-neutral-800">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <h2 className="font-sans font-bold text-4xl md:text-6xl text-white mb-14 text-center tracking-tight">
            {t("pouchHomePage.choosePlan.title", "Choose Plan")}
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {PRODUCTS.map((product) => (
              <div key={product.id} className="h-full flex flex-col bg-white border border-neutral-200 rounded-3xl p-6 shadow-sm hover:shadow-lg transition-all group">
                <div className="flex flex-col h-full">
                  <div className="bg-neutral-50 border border-neutral-200 rounded-2xl aspect-square mb-6 flex items-center justify-center relative overflow-hidden">
                    <img 
                      src={product.image} 
                      alt={t("pouchHomePage.choosePlan." + (product.id === "stand-up" ? "standUp" : product.id === "flat-bottom" ? "flatBottom" : "spouted") + ".name", product.name)}
                      className="w-full h-full object-cover group-hover:scale-105 transition-all duration-300"
                    />
                    <div className="absolute top-3 left-3 bg-neutral-900 text-white px-2.5 py-0.5 rounded-full font-sans text-[10px] font-semibold tracking-wider z-10">
                      ID: {product.id.toUpperCase()}
                    </div>
                  </div>

                  <h3 className="font-sans font-bold text-2xl mb-2 text-neutral-900">{t("pouchHomePage.choosePlan." + (product.id === "stand-up" ? "standUp" : product.id === "flat-bottom" ? "flatBottom" : "spouted") + ".name", product.name)}</h3>
                  <p className="font-sans text-xs text-neutral-600 mb-6 leading-relaxed flex-grow">{t("pouchHomePage.choosePlan." + (product.id === "stand-up" ? "standUp" : product.id === "flat-bottom" ? "flatBottom" : "spouted") + ".desc", product.description)}</p>

                  {/* Stats Grid */}
                  <div className="grid grid-cols-3 gap-2 mb-6 font-sans text-xs border-y border-neutral-100 py-3.5 bg-neutral-50 rounded-xl px-2">
                    <div className="text-center">
                      <div className="font-medium text-neutral-500 text-[10px] uppercase">MOQ</div>
                      <div className="font-semibold text-neutral-900">{t("pouchHomePage.choosePlan." + (product.id === "stand-up" ? "standUp" : product.id === "flat-bottom" ? "flatBottom" : "spouted") + ".moq", product.stats.moq)}</div>
                    </div>
                    <div className="text-center border-l border-neutral-200">
                      <div className="font-medium text-neutral-500 text-[10px] uppercase">MAT</div>
                      <div className="font-semibold text-neutral-900">{t("pouchHomePage.choosePlan." + (product.id === "stand-up" ? "standUp" : product.id === "flat-bottom" ? "flatBottom" : "spouted") + ".mat", product.stats.material)}</div>
                    </div>
                    <div className="text-center border-l border-neutral-200">
                      <div className="font-medium text-neutral-500 text-[10px] uppercase">BAR</div>
                      <div className="font-semibold text-neutral-900">{t("pouchHomePage.choosePlan." + (product.id === "stand-up" ? "standUp" : product.id === "flat-bottom" ? "flatBottom" : "spouted") + ".bar", product.stats.barrier)}</div>
                    </div>
                  </div>

                  <div className="text-center mb-5 font-sans font-bold text-2xl text-neutral-900">{product.price}</div>

                  <NeoButton className="w-full text-center py-3 text-xs font-semibold" href="https://calendly.com/30-min-free-packaging-consultancy">
                    {t("pouchHomePage.choosePlan.bookCall", "BOOK CALL")}
                  </NeoButton>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Resource & Circular Economy Guides Library - Mobbin Light Mode */}
      <section className="py-20 bg-white border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="inline-flex items-center gap-1.5 bg-neutral-100 border border-neutral-200 rounded-full px-3.5 py-1 text-xs font-medium text-neutral-800 mb-4">
              {t("pouchHomePage.knowledge.badge", "📚 KNOWLEDGE_PORTAL")}
            </div>
            <h2 className="font-sans font-bold text-3xl md:text-5xl text-neutral-900 tracking-tight">
              {t("pouchHomePage.knowledge.title", "ECO RESOURCE & LIBRARY")}
            </h2>
            <p className="font-sans text-base mt-4 leading-relaxed text-neutral-600">
              {t("pouchHomePage.knowledge.subtitle", "Deep-dive technical reports, global compliance playbooks, and circular economy research drafted by certified experts to keep your brand aligned.")}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 font-sans text-neutral-900">
            {/* Guide 1: EU PPWR Compliance */}
            <div className="bg-[#F9FAFB] border border-neutral-200 rounded-2xl p-6 flex flex-col justify-between group hover:shadow-md transition-all">
              <div>
                <div className="flex justify-between items-center mb-4">
                  <span className="bg-emerald-50 text-emerald-700 border border-emerald-200 px-2.5 py-0.5 rounded-full text-[10px] font-semibold">
                    {t("pouchHomePage.knowledge.guides.compliance.tag", "COMPLIANCE_2026")}
                  </span>
                  <ShieldCheck className="w-5 h-5 text-emerald-600" />
                </div>
                <h3 className="font-sans font-bold text-lg mb-2 text-neutral-900 leading-snug group-hover:text-emerald-600 transition-colors">
                  {t("pouchHomePage.knowledge.guides.compliance.title", "EU PPWR Compliance Guide")}
                </h3>
                <p className="font-sans text-xs leading-relaxed mb-6 text-neutral-600">
                  {t("pouchHomePage.knowledge.guides.compliance.desc", "Detailed analysis of void space ratios, harmonized recycling sorting labels, and eco-modulated modulation fees relief for EU-bound brand owners.")}
                </p>
              </div>
              <NeoButton to="/blog/eu-ppwr-compliance-guide" className="text-xs py-2.5 w-full text-center font-semibold">
                {t("pouchHomePage.knowledge.guides.compliance.btn", "Read Playbook →")}
              </NeoButton>
            </div>

            {/* Guide 2: Stamp Foil Recyclability */}
            <div className="bg-[#F9FAFB] border border-neutral-200 rounded-2xl p-6 flex flex-col justify-between group hover:shadow-md transition-all">
              <div>
                <div className="flex justify-between items-center mb-4">
                  <span className="bg-blue-50 text-blue-700 border border-blue-200 px-2.5 py-0.5 rounded-full text-[10px] font-semibold">
                    {t("pouchHomePage.knowledge.guides.foil.tag", "RECYCLING_SPECS")}
                  </span>
                  <BookOpen className="w-5 h-5 text-blue-600" />
                </div>
                <h3 className="font-sans font-bold text-lg mb-2 text-neutral-900 leading-snug group-hover:text-emerald-600 transition-colors">
                  {t("pouchHomePage.knowledge.guides.foil.title", "Stamp Foil Recyclability")}
                </h3>
                <p className="font-sans text-xs leading-relaxed mb-6 text-neutral-600">
                  {t("pouchHomePage.knowledge.guides.foil.desc", "How hot stamp foils and metallic decorative embellishments affect sorting telemetry in municipal mono-material recycling streams.")}
                </p>
              </div>
              <NeoButton to="/blog/stamp-foil-recyclability" className="text-xs py-2.5 w-full text-center font-semibold">
                {t("pouchHomePage.knowledge.guides.foil.btn", "Read Research →")}
              </NeoButton>
            </div>

            {/* Guide 3: Compostable Zipper Study */}
            <div className="bg-[#F9FAFB] border border-neutral-200 rounded-2xl p-6 flex flex-col justify-between group hover:shadow-md transition-all">
              <div>
                <div className="flex justify-between items-center mb-4">
                  <span className="bg-purple-50 text-purple-700 border border-purple-200 px-2.5 py-0.5 rounded-full text-[10px] font-semibold">
                    {t("pouchHomePage.knowledge.guides.zipper.tag", "MATERIAL_SCIENCE")}
                  </span>
                  <Zap className="w-5 h-5 text-purple-600" />
                </div>
                <h3 className="font-sans font-bold text-lg mb-2 text-neutral-900 leading-snug group-hover:text-emerald-600 transition-colors">
                  {t("pouchHomePage.knowledge.guides.zipper.title", "Compostable Zipper Durability")}
                </h3>
                <p className="font-sans text-xs leading-relaxed mb-6 text-neutral-600">
                  {t("pouchHomePage.knowledge.guides.zipper.desc", "Analyzing oxygen transmission rates and tensile grip durability of 100% plant-based reclosure zippers without removal requirements.")}
                </p>
              </div>
              <NeoButton to="/topics/compostable-zipper-durability" className="text-xs py-2.5 w-full text-center font-semibold">
                {t("pouchHomePage.knowledge.guides.zipper.btn", "Read Technical Study →")}
              </NeoButton>
            </div>

            {/* Guide 4: Custom vs Standard */}
            <div className="bg-[#F9FAFB] border border-neutral-200 rounded-2xl p-6 flex flex-col justify-between group hover:shadow-md transition-all">
              <div>
                <div className="flex justify-between items-center mb-4">
                  <span className="bg-amber-50 text-amber-700 border border-amber-200 px-2.5 py-0.5 rounded-full text-[10px] font-semibold">
                    {t("pouchHomePage.knowledge.guides.roi.tag", "PROCUREMENT_ROI")}
                  </span>
                  <Leaf className="w-5 h-5 text-amber-600" />
                </div>
                <h3 className="font-sans font-bold text-lg mb-2 text-neutral-900 leading-snug group-hover:text-emerald-600 transition-colors">
                  {t("pouchHomePage.knowledge.guides.roi.title", "Standard Runs vs. Custom Specs")}
                </h3>
                <p className="font-sans text-xs leading-relaxed mb-6 text-neutral-600">
                  {t("pouchHomePage.knowledge.guides.roi.desc", "Decision matrix comparing pre-made online packaging stock models with custom-engineered bulk B2B production specs to optimize unit pricing.")}
                </p>
              </div>
              <NeoButton to="/topics/custom-vs-standard-packaging" variant="secondary" className="text-xs py-2.5 w-full text-center font-semibold">
                {t("pouchHomePage.knowledge.guides.roi.btn", "Compare Spec Sheets →")}
              </NeoButton>
            </div>
          </div>

          {/* Quick links list for remaining guides */}
          <div className="mt-10 bg-[#F9FAFB] border border-neutral-200 rounded-2xl p-5 grid md:grid-cols-2 lg:grid-cols-3 gap-3 font-sans text-xs font-semibold">
            <Link to="/topics/real-world-sustainability" className="flex items-center justify-between p-3 rounded-xl border border-neutral-200 bg-white hover:border-neutral-300 hover:shadow-xs transition-all text-neutral-800 group">
              <span>{t("pouchHomePage.knowledge.links.sustainability", "🌱 Real-World Circular Sustainability")}</span>
              <ArrowRight className="w-4 h-4 text-neutral-400 group-hover:translate-x-0.5 group-hover:text-neutral-900 transition-all" />
            </Link>
            <Link to="/topics/compostable-spouted-pouches" className="flex items-center justify-between p-3 rounded-xl border border-neutral-200 bg-white hover:border-neutral-300 hover:shadow-xs transition-all text-neutral-800 group">
              <span>{t("pouchHomePage.knowledge.links.spoutedComposting", "💧 Spouted Biopolymer Composting")}</span>
              <ArrowRight className="w-4 h-4 text-neutral-400 group-hover:translate-x-0.5 group-hover:text-neutral-900 transition-all" />
            </Link>
            <Link to="/solutions/citrus-oil-packaging" className="flex items-center justify-between p-3 rounded-xl border border-neutral-200 bg-white hover:border-neutral-300 hover:shadow-xs transition-all text-neutral-800 group">
              <span>{t("pouchHomePage.knowledge.links.citrus", "🍊 Citrus Oil Protective Barriers")}</span>
              <ArrowRight className="w-4 h-4 text-neutral-400 group-hover:translate-x-0.5 group-hover:text-neutral-900 transition-all" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonial - Mobbin Light Mode */}
      <section className="py-20 px-4 md:px-6 max-w-4xl mx-auto">
        <div className="bg-[#F9FAFB] border border-neutral-200 rounded-3xl p-8 md:p-12 text-center shadow-xs">
          <div className="flex justify-center gap-1 mb-5">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 text-amber-400 fill-amber-400" />
            ))}
          </div>
          <blockquote className="font-sans text-xl md:text-2xl font-bold text-neutral-900 mb-6 leading-relaxed">
            {t("pouchHomePage.testimonial.quote", "\"Started with 500 pouches from POUCH.ECO. Best decision ever. Now ordering 10K+ monthly.\"")}
          </blockquote>
          <cite className="font-sans text-sm font-semibold text-neutral-600 not-italic">
            {t("pouchHomePage.testimonial.author", "- Sarah M., Brand Founder")}
          </cite>
        </div>
      </section>

      {/* Add animations */}
      <style>{`
        .mask-image-gradient {
          mask-image: linear-gradient(to left, black 50%, transparent 100%);
          -webkit-mask-image: linear-gradient(to left, black 50%, transparent 100%);
        }
      `}</style>
    </PouchLayout>
  )
}
