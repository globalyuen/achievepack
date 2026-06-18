import React, { useRef, useEffect, useState, type MouseEvent, type UIEvent } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { Package, Leaf, Zap, Box as BoxIcon, Flame, Star, Play, Sparkles, BookOpen, ShieldCheck, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react'
import { motion } from 'framer-motion'
import { Helmet } from 'react-helmet-async'
import PouchLayout from '../../components/pouch/PouchLayout'
import VideoShowcase from '../../components/pouch/VideoShowcase'
import { ThreePouchViewer } from '../../components/ThreePouchViewer'
import { SizingFinderIcon, MaterialSpecFinderIcon } from '../../components/AppIcons'

import { useTranslation } from 'react-i18next'
import WorkCarousel from '../../components/WorkCarousel'
import KnowHowCarousel from '../../components/KnowHowCarousel'

// ============================================
// NEO-BRUTALIST COMPONENTS (Local)
// ============================================

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
            <video 
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

// ============================================
// MAIN PAGE
// ============================================

export default function PouchHomePage() {
  const { t } = useTranslation()
  const navigate = useNavigate()
  const productsRef = useRef<HTMLElement>(null)



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

      {/* Hero Section with Video Background */}
      <section className="relative pt-12 pb-24 border-b-4 border-black overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0 w-full h-full">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover opacity-50"
            key="hero-video"
          >
            <source src="/video/pouch-eco-marketing-videos/problem.mp4" type="video/mp4" />
            <source src="/video/pouch-eco-marketing-videos/brand-reveal.mp4" type="video/mp4" />
            <source src="/video/pouch-eco-marketing-videos/Material.mp4" type="video/mp4" />
            <source src="/video/pouch-eco-marketing-videos/Performance.mp4" type="video/mp4" />
          </video>
          {/* Liquid Glass Effect Overlay */}
          <div className="absolute inset-0 backdrop-blur-[2px] bg-white/30" />
          {/* Pattern Overlay */}
          <div className="absolute inset-0 bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:20px_20px] opacity-80" />
        </div>

        <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Content */}
            <div className="space-y-8 z-10">
              <div className="inline-block bg-[#D4FF00] border-4 border-black px-4 py-2 transform -rotate-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <span className="font-['JetBrains_Mono'] font-bold text-sm">{t('pouchHomePage.hero.badge', 'ECO_SYSTEM v2026')}</span>
              </div>
              
              <h1 className="font-black text-6xl md:text-8xl leading-[0.9] tracking-tighter uppercase">
                {t('pouchHomePage.hero.h1Line1', 'Start.')}<br/>
                {t('pouchHomePage.hero.h1Line2', 'Scale.')}<br/>
                <Typewriter words={t('pouchHomePage.hero.typewriterWords', { returnObjects: true, defaultValue: ['Sustain.', 'Eco.', 'Digital.'] }) as string[]} />
              </h1>

              {/* Neo-brutalist Emotional Slogan Block */}
              <div className="bg-[#D4FF00] border-4 border-black p-4 rotate-1 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] font-['Space_Grotesk'] text-lg font-bold uppercase text-black leading-snug max-w-md">
                "{slogan}"
              </div>

              <div className="bg-white border-2 border-black p-4 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] max-w-md">
                <p className="font-['JetBrains_Mono'] font-bold text-lg md:text-xl">
                  {t('pouchHomePage.hero.terminalLine1', '> Eco packaging from 500 units.')}<br/>
                  {t('pouchHomePage.hero.terminalLine2', '> Compostable // Recyclable // Bio-based.')}<br/>
                  {t('pouchHomePage.hero.terminalLine3', '> Fast turnaround. No BS.')}
                </p>
                {/* Eco Material Badges */}
                <div className="flex gap-4 mt-4 border-t-2 border-black pt-4">
                  <img src="/eco-logo/transparent-bkg/compost.png" alt={t("pouchHomePage.hero.alts.compostable", "Compostable")} className="h-12 md:h-16 w-auto hover:scale-110 transition-transform" />
                  <img src="/eco-logo/transparent-bkg/recycle.png" alt={t("pouchHomePage.hero.alts.recyclable", "Recyclable")} className="h-12 md:h-16 w-auto hover:scale-110 transition-transform" />
                  <img src="/eco-logo/transparent-bkg/biope.png" alt={t("pouchHomePage.hero.alts.biobased", "Bio-based")} className="h-12 md:h-16 w-auto hover:scale-110 transition-transform" />
                  <img src="/eco-logo/transparent-bkg/pcr.png" alt={t("pouchHomePage.hero.alts.pcr", "PCR")} className="h-12 md:h-16 w-auto hover:scale-110 transition-transform" />
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <NeoButton href="https://calendly.com/30-min-free-packaging-consultancy">{t('pouchHomePage.hero.ctaBook', 'Book Consultation')}</NeoButton>
                <NeoButton to="/materials">{t('pouchHomePage.hero.ctaMaterials', 'View Materials')}</NeoButton>
              </div>
            </div>

            {/* Right Visual - Rotating Card Stack */}
            <div className="relative w-full max-w-md lg:max-w-[540px] aspect-square mx-auto lg:ml-auto lg:mr-0 mb-10 md:mb-0">
              {/* Manual Nav Arrows */}
              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  setActiveHeroIndex((prev) => (prev === 0 ? 4 : prev - 1));
                }}
                className="absolute left-[-24px] top-1/2 -translate-y-1/2 w-12 h-12 bg-white hover:bg-[#D4FF00] border-4 border-black flex items-center justify-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:scale-95 transition-all z-[60] cursor-pointer"
                aria-label={t("pouchHomePage.hero.buttons.prev", "Previous video")}
              >
                <ChevronLeft className="w-6 h-6 text-black" />
              </button>
              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  setActiveHeroIndex((prev) => (prev === 4 ? 0 : prev + 1));
                }}
                className="absolute right-[-24px] top-1/2 -translate-y-1/2 w-12 h-12 bg-white hover:bg-[#D4FF00] border-4 border-black flex items-center justify-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:scale-95 transition-all z-[60] cursor-pointer"
                aria-label={t("pouchHomePage.hero.buttons.next", "Next video")}
              >
                <ChevronRight className="w-6 h-6 text-black" />
              </button>



              {/* Card 1: Bag Video */}
              <motion.div
                variants={card1Variants}
                animate={activeHeroIndex === 0 ? "front" : (activeHeroIndex === 4 ? "middle" : "back")}
                className="absolute inset-0 w-full h-full"
              >
                <NeoCard className="bg-white w-full h-full !p-0 overflow-hidden group relative">
                  <video
                    ref={videoRef1}
                    autoPlay
                    muted
                    playsInline
                    poster="/video/hero/cover.jpg"
                    onEnded={() => setActiveHeroIndex(1)}
                    className="w-full h-full object-cover relative z-10 group-hover:scale-105 transition-transform duration-500"
                  >
                    <source src="/video/hero/bag.mp4" type="video/mp4" />
                    <source src="/video/hero/bag.mov" type="video/quicktime" />
                  </video>
                  
                  {/* Floating Tag */}
                  <motion.div animate={floatAnim} className="absolute top-4 right-4 bg-white border-2 border-black px-2 py-1 font-['JetBrains_Mono'] text-xs font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] z-20">
                    {t("pouchHomePage.hero.tags.compostable", "COMPOSTABLE_OK")}
                  </motion.div>
                  
                  {/* Overlay Texture */}
                  <div className="absolute inset-0 bg-[url('https://achievepack.com/imgs/paper-texture.png')] opacity-10 mix-blend-overlay z-10 pointer-events-none" />
                </NeoCard>
              </motion.div>

              {/* Card 2: Recycle Video */}
              <motion.div
                variants={card2Variants}
                animate={activeHeroIndex === 1 ? "front" : (activeHeroIndex === 0 ? "middle" : "back")}
                className="absolute inset-0 w-full h-full"
              >
                <NeoCard className="bg-white w-full h-full !p-0 overflow-hidden group relative">
                  <video
                    ref={videoRef2}
                    autoPlay
                    muted
                    playsInline
                    poster="/video/hero/recycle/recyclable cover.png"
                    onEnded={() => setActiveHeroIndex(2)}
                    className="w-full h-full object-cover relative z-10 group-hover:scale-105 transition-transform duration-500"
                  >
                    <source src="/video/hero/recycle/remake_this_image_to_square_.mp4" type="video/mp4" />
                  </video>
                  
                  {/* Floating Tag */}
                  <motion.div animate={floatAnim} className="absolute top-4 right-4 bg-white border-2 border-black px-2 py-1 font-['JetBrains_Mono'] text-xs font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] z-20">
                    {t("pouchHomePage.hero.tags.recyclable", "RECYCLABLE_OK")}
                  </motion.div>
                  
                  {/* Overlay Texture */}
                  <div className="absolute inset-0 bg-[url('https://achievepack.com/imgs/paper-texture.png')] opacity-10 mix-blend-overlay z-10 pointer-events-none" />
                </NeoCard>
              </motion.div>

              {/* Card 3: Industrial Video */}
              <motion.div
                variants={card3Variants}
                animate={activeHeroIndex === 2 ? "front" : (activeHeroIndex === 1 ? "middle" : "back")}
                className="absolute inset-0 w-full h-full"
              >
                <NeoCard className="bg-white w-full h-full !p-0 overflow-hidden group relative">
                  <video
                    ref={videoRef3}
                    autoPlay
                    muted
                    playsInline
                    poster="/video/hero/industrial/industrial cover.png"
                    onEnded={() => setActiveHeroIndex(3)}
                    className="w-full h-full object-cover relative z-10 group-hover:scale-105 transition-transform duration-500"
                  >
                    <source src="/video/hero/industrial/industrial.mp4" type="video/mp4" />
                  </video>
                  
                  {/* Floating Tag */}
                  <motion.div animate={floatAnim} className="absolute top-4 right-4 bg-white border-2 border-black px-2 py-1 font-['JetBrains_Mono'] text-xs font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] z-20">
                    {t("pouchHomePage.hero.tags.industrial", "INDUSTRIAL_OK")}
                  </motion.div>
                  
                  {/* Overlay Texture */}
                  <div className="absolute inset-0 bg-[url('https://achievepack.com/imgs/paper-texture.png')] opacity-10 mix-blend-overlay z-10 pointer-events-none" />
                </NeoCard>
              </motion.div>

              {/* Card 4: PCR Video */}
              <motion.div
                variants={card4Variants}
                animate={activeHeroIndex === 3 ? "front" : (activeHeroIndex === 2 ? "middle" : "back")}
                className="absolute inset-0 w-full h-full"
              >
                <NeoCard className="bg-white w-full h-full !p-0 overflow-hidden group relative">
                  <video
                    ref={videoRef4}
                    autoPlay
                    muted
                    playsInline
                    poster="/video/hero/PCR/prc cover.png"
                    onEnded={() => setActiveHeroIndex(4)}
                    className="w-full h-full object-cover relative z-10 group-hover:scale-105 transition-transform duration-500"
                  >
                    <source src="/video/hero/PCR/pcr.mp4" type="video/mp4" />
                  </video>
                  
                  {/* Floating Tag */}
                  <motion.div animate={floatAnim} className="absolute top-4 right-4 bg-white border-2 border-black px-2 py-1 font-['JetBrains_Mono'] text-xs font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] z-20">
                    {t("pouchHomePage.hero.tags.pcr", "PCR_BARRIER_OK")}
                  </motion.div>
                  
                  {/* Overlay Texture */}
                  <div className="absolute inset-0 bg-[url('https://achievepack.com/imgs/paper-texture.png')] opacity-10 mix-blend-overlay z-10 pointer-events-none" />
                </NeoCard>
              </motion.div>

              {/* Card 5: BioPE Video */}
              <motion.div
                variants={card5Variants}
                animate={activeHeroIndex === 4 ? "front" : (activeHeroIndex === 3 ? "middle" : "back")}
                className="absolute inset-0 w-full h-full"
              >
                <NeoCard className="bg-white w-full h-full !p-0 overflow-hidden group relative">
                  <video
                    ref={videoRef5}
                    autoPlay
                    muted
                    playsInline
                    poster="/video/hero/biope/biope cover.png"
                    onEnded={() => setActiveHeroIndex(0)}
                    className="w-full h-full object-cover relative z-10 group-hover:scale-105 transition-transform duration-500"
                  >
                    <source src="/video/hero/biope/biope.mp4" type="video/mp4" />
                  </video>
                  
                  {/* Floating Tag */}
                  <motion.div animate={floatAnim} className="absolute top-4 right-4 bg-white border-2 border-black px-2 py-1 font-['JetBrains_Mono'] text-xs font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] z-20">
                    {t("pouchHomePage.hero.tags.biobased", "BIO_BASED_OK")}
                  </motion.div>
                  
                  {/* Overlay Texture */}
                  <div className="absolute inset-0 bg-[url('https://achievepack.com/imgs/paper-texture.png')] opacity-10 mix-blend-overlay z-10 pointer-events-none" />
                </NeoCard>
              </motion.div>

              {/* Decorative Foreground Badge */}
              <div className="absolute -bottom-6 -left-6 w-24 h-24 md:w-32 md:h-32 bg-[#FF00FF] border-4 border-black flex items-center justify-center animate-bounce z-[70]">
                <span className="font-black text-sm md:text-xl rotate-[-15deg]">{t("pouchHomePage.hero.badge", "500!")}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted Brands Logo Marquee - Neo-Brutalist Style */}
      <section className="py-16 px-4 bg-white border-y-4 border-black overflow-hidden">
        <div className="max-w-6xl mx-auto mb-12 text-center">
          <div className="inline-block bg-[#D4FF00] border-4 border-black px-4 py-2 transform rotate-1 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] mb-6">
            <span className="font-['JetBrains_Mono'] font-bold uppercase">{t('pouchHomePage.trustedBy.badge', 'TRUSTED_BY')}</span>
          </div>
          <h2 className="font-black text-4xl md:text-5xl uppercase mb-4">
            {t('pouchHomePage.trustedBy.titlePrefix', 'Join ')}<span className="text-[#10b981]">{t('pouchHomePage.trustedBy.titleHighlight', '500+')}</span>{t('pouchHomePage.trustedBy.titleSuffix', ' Brands')}
          </h2>
          <p className="text-lg text-gray-700 font-['Space_Grotesk']">
            {t('pouchHomePage.trustedBy.subtitle', 'From startups to established names - they all started with 500 units')}
          </p>
        </div>

        {/* Logo Strip 1 - Scrolling Left */}
        <div className="relative -rotate-1 mb-6">
          <div className="bg-black border-4 border-black py-6 overflow-hidden">
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
                  className="flex-shrink-0 mx-8 h-16 w-32 flex items-center justify-center bg-white border-2 border-black shadow-[4px_4px_0px_0px_rgba(212,255,0,1)] hover:shadow-[6px_6px_0px_0px_rgba(212,255,0,1)] transition-all"
                >
                  <img 
                    src={logo.image} 
                    alt={logo.name} 
                    className="h-12 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity grayscale hover:grayscale-0" 
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
                  className="flex-shrink-0 mx-8 h-16 w-32 flex items-center justify-center bg-white border-2 border-black shadow-[4px_4px_0px_0px_rgba(212,255,0,1)] hover:shadow-[6px_6px_0px_0px_rgba(212,255,0,1)] transition-all"
                >
                  <img 
                    src={logo.image} 
                    alt={logo.name} 
                    className="h-12 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity grayscale hover:grayscale-0" 
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Logo Strip 2 - Scrolling Right */}
        <div className="relative rotate-1">
          <div className="bg-[#10b981] border-4 border-black py-6 overflow-hidden">
            <div className="flex animate-scroll-right">
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
              ].slice().reverse().map((logo, idx) => (
                <div 
                  key={`logo-3-${idx}`} 
                  className="flex-shrink-0 mx-8 h-16 w-32 flex items-center justify-center bg-white border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all"
                >
                  <img 
                    src={logo.image} 
                    alt={logo.name} 
                    className="h-12 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity grayscale hover:grayscale-0" 
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
                { name: 'Hike Again Remedies', image: '/imgs/clien-logos/hike.png' },
                { name: 'Nuditea', image: '/imgs/clien-logos/nuditea.png' },
                { name: 'Winand Products', image: '/imgs/clien-logos/winand.png' },
                { name: 'Freshfield', image: '/imgs/clien-logos/freshfield.png' },
                { name: 'Honestea', image: '/imgs/clien-logos/honestea.png' },
                { name: 'Moom Health', image: '/imgs/clien-logos/moom.png' }
              ].slice().reverse().map((logo, idx) => (
                <div 
                  key={`logo-4-${idx}`} 
                  className="flex-shrink-0 mx-8 h-16 w-32 flex items-center justify-center bg-white border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all"
                >
                  <img 
                    src={logo.image} 
                    alt={logo.name} 
                    className="h-12 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity grayscale hover:grayscale-0" 
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

          @keyframes scroll-left-fast {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }

          @keyframes scroll-right-fast {
            0% {
              transform: translateX(-50%);
            }
            100% {
              transform: translateX(0);
            }
          }

          .animate-scroll-left {
            animation: scroll-left 13s linear infinite;
          }

          .animate-scroll-right {
            animation: scroll-right 13s linear infinite;
          }

          .animate-scroll-left:hover,
          .animate-scroll-right:hover {
            animation-play-state: paused;
          }

          /* Speed up on page scroll */
          body.is-scrolling .animate-scroll-left {
            animation: scroll-left-fast 4s linear infinite;
          }

          body.is-scrolling .animate-scroll-right {
            animation: scroll-right-fast 4s linear infinite;
          }
        `}</style>
      </section>

      {/* Interactive 3D Eco Pouch Showcase */}
      <section 
        ref={threeContainerRef}
        onMouseMove={handleThreeMouseMove}
        onMouseLeave={handleThreeMouseLeave}
        className="py-24 bg-neutral-100 border-b-4 border-black overflow-hidden relative animate-fade-in"
      >
        {/* Dot pattern overlay */}
        <div className="absolute inset-0 z-0 bg-[radial-gradient(rgba(0,0,0,0.15)_1.5px,transparent_1.5px)] [background-size:24px_24px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <div className="inline-block bg-[#10b981] border-4 border-black px-4 py-2 transform -rotate-1 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] text-white font-black text-xs uppercase tracking-wider mb-6">
              {t("pouchHomePage.showcase.badge", "✨ Interactive 3D Showcase")}
            </div>
            <h2 className="font-black text-5xl md:text-7xl uppercase leading-[0.9] tracking-tighter text-black">
              {t("pouchHomePage.showcase.title", "Eco Bags in 3D Space")}
            </h2>
            <p className="font-['JetBrains_Mono'] text-lg mt-6 leading-relaxed max-w-2xl mx-auto text-neutral-800">
              {t("pouchHomePage.showcase.subtitle", "Rotate, tilt, and inspect the certified organic structural barriers of our green pouches. Move your mouse to tilt, scroll to spin, or toggle models below.")}
            </p>
          </div>

          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* Left Controls & Marketing Copy (5 columns) */}
            <div className="lg:col-span-5 space-y-8">
              {/* Card 1: Spouted Pouch */}
              <button
                onClick={() => setActivePouchModel('spouted')}
                className={`w-full text-left p-8 border-4 border-black transition-all duration-300 relative ${
                  activePouchModel === 'spouted'
                    ? 'bg-[#D4FF00] shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] -translate-x-1 -translate-y-1'
                    : 'bg-white hover:bg-neutral-50 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:-translate-x-0.5 hover:-translate-y-0.5'
                }`}
              >
                <div className="flex justify-between items-start gap-4">
                  <div>
                    <span className="inline-block px-3 py-1 text-xs font-black uppercase border-2 border-black bg-black text-white shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] mb-3">
                      {t("pouchHomePage.showcase.spouted.tag", "💧 Liquids & Purees")}
                    </span>
                    <h3 className="font-black text-2xl uppercase text-black">
                      {t("pouchHomePage.showcase.spouted.title", "Industrial Compostable Spouted Pouch")}
                    </h3>
                  </div>
                  <span className="text-3xl bg-white border-2 border-black p-2 rounded-xl shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">🥤</span>
                </div>
                
                <p className="font-['JetBrains_Mono'] text-sm mt-4 leading-relaxed text-neutral-800">
                  {t("pouchHomePage.showcase.spouted.desc", "Certified industrial compostable flexible pouch featuring a fully plant-based rigid spout. Replaces conventional plastic spout barrier options with zero plastic footprint.")}
                </p>

                <div className="mt-6 pt-4 border-t-2 border-dashed border-black grid grid-cols-2 gap-4 font-['JetBrains_Mono'] text-xs text-black">
                  <div>
                    <span className="font-bold block uppercase tracking-wider text-black">{t("pouchHomePage.showcase.spouted.moqLabel", "MOQ:")}</span>
                    <span className="font-black bg-white px-2 py-0.5 border border-black inline-block mt-1">{t("pouchHomePage.showcase.spouted.moqVal", "2,000 units")}</span>
                  </div>
                  <div>
                    <span className="font-bold block uppercase tracking-wider text-black">{t("pouchHomePage.showcase.spouted.certLabel", "Certifications:")}</span>
                    <span className="font-black text-[#10b981] bg-white px-2 py-0.5 border border-black inline-block mt-1">{t("pouchHomePage.showcase.spouted.certVal", "EN 13432, ASTM D6400")}</span>
                  </div>
                </div>
              </button>

              {/* Card 2: Flat Bottom Pouch */}
              <button
                onClick={() => setActivePouchModel('flat-bottom')}
                className={`w-full text-left p-8 border-4 border-black transition-all duration-300 relative ${
                  activePouchModel === 'flat-bottom'
                    ? 'bg-[#D4FF00] shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] -translate-x-1 -translate-y-1'
                    : 'bg-white hover:bg-neutral-50 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:-translate-x-0.5 hover:-translate-y-0.5'
                }`}
              >
                <div className="flex justify-between items-start gap-4">
                  <div>
                    <span className="inline-block px-3 py-1 text-xs font-black uppercase border-2 border-black bg-black text-white shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] mb-3">
                      {t("pouchHomePage.showcase.flatBottom.tag", "🌱 Dry Goods & Coffee")}
                    </span>
                    <h3 className="font-black text-2xl uppercase text-black">
                      {t("pouchHomePage.showcase.flatBottom.title", "Home Compostable Flat Bottom Pouch")}
                    </h3>
                  </div>
                  <span className="text-3xl bg-white border-2 border-black p-2 rounded-xl shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">☕</span>
                </div>
                
                <p className="font-['JetBrains_Mono'] text-sm mt-4 leading-relaxed text-neutral-800">
                  {t("pouchHomePage.showcase.flatBottom.desc", "Premium 100% home compostable box bottom structure that delivers outstanding shelf presence. Decomposes safely and naturally in home backyard compost bins.")}
                </p>

                <div className="mt-6 pt-4 border-t-2 border-dashed border-black grid grid-cols-2 gap-4 font-['JetBrains_Mono'] text-xs text-black">
                  <div>
                    <span className="font-bold block uppercase tracking-wider text-black">{t("pouchHomePage.showcase.flatBottom.moqLabel", "MOQ:")}</span>
                    <span className="font-black bg-white px-2 py-0.5 border border-black inline-block mt-1">{t("pouchHomePage.showcase.flatBottom.moqVal", "1,000 units")}</span>
                  </div>
                  <div>
                    <span className="font-bold block uppercase tracking-wider text-black">{t("pouchHomePage.showcase.flatBottom.certLabel", "Certifications:")}</span>
                    <span className="font-black text-[#10b981] bg-white px-2 py-0.5 border border-black inline-block mt-1">{t("pouchHomePage.showcase.flatBottom.certVal", "OK Compost HOME")}</span>
                  </div>
                </div>
              </button>
            </div>

            {/* Right 3D Viewport (7 columns) */}
            <div className="lg:col-span-7 h-[500px] md:h-[600px] bg-white border-4 border-black p-8 shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] relative flex items-center justify-center overflow-hidden">
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

      {/* Neobrutalist Packaging Apps Section */}
      <section className="py-24 px-4 md:px-6 bg-[#00FFFF] border-t-4 border-black border-b-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-block bg-black text-[#D4FF00] border-4 border-black px-4 py-2 transform -rotate-1 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] font-['JetBrains_Mono'] font-bold text-xs uppercase mb-6">
              {t("pouchHomePage.appSuite.badge", "⚡ INTERACTIVE_UTILITIES")}
            </div>
            <h2 className="font-black text-5xl md:text-7xl uppercase leading-[0.9] tracking-tighter text-black">
              {t("pouchHomePage.appSuite.title", "PACKAGING APP SUITE")}
            </h2>
            <p className="font-['Space_Grotesk'] text-lg mt-6 leading-relaxed max-w-2xl mx-auto text-black font-semibold">
              {t("pouchHomePage.appSuite.subtitle", "Engineer your pouch sizing and material specifications instantly. No guessing, no errors. Pure technical precision.")}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Sizing Finder App */}
            <div className="bg-white border-4 border-black p-8 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] hover:shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] transition-all flex flex-col justify-between group">
              <div>
                <div className="flex justify-between items-start mb-6 pb-4 border-b-2 border-black">
                  <div className="w-16 h-16 border-4 border-black bg-[#D4FF00] flex items-center justify-center group-hover:rotate-3 transition-transform">
                    <SizingFinderIcon className="w-9 h-9 text-black" strokeWidth={2.5} />
                  </div>
                  <NeoBadge color="bg-[#FF00FF] text-white">{t("pouchHomePage.appSuite.sizing.badge", "SIZING APP")}</NeoBadge>
                </div>
                
                <h3 className="font-black text-3xl mb-4 uppercase">{t("pouchHomePage.appSuite.sizing.title", "[SIZING FINDER APP]")}</h3>
                <p className="font-['JetBrains_Mono'] text-sm leading-relaxed mb-6 text-neutral-800">
                  {t("pouchHomePage.appSuite.sizing.desc", "Calculate exact dimensions and capacity based on product weight & density presets. Match dimensions instantly with standard manufacturing templates.")}
                </p>

                <ul className="space-y-3 mb-8 font-['JetBrains_Mono'] text-xs font-bold text-black uppercase">
                  <li className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 border border-black bg-[#D4FF00]"></span>
                    <span>{t("pouchHomePage.appSuite.sizing.bullets.0", "Density presets (Coffee, Powders, Snacks)")}</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 border border-black bg-[#D4FF00]"></span>
                    <span>{t("pouchHomePage.appSuite.sizing.bullets.1", "Volume calculations (Ounces, Grams, ML)")}</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 border border-black bg-[#D4FF00]"></span>
                    <span>{t("pouchHomePage.appSuite.sizing.bullets.2", "Standard MoQ and size reference matching")}</span>
                  </li>
                </ul>
              </div>

              <NeoButton to="/size-guide" variant="dark" className="w-full text-center py-4 text-base font-black uppercase">
                {t("pouchHomePage.appSuite.sizing.btn", "LAUNCH SIZING APP →")}
              </NeoButton>
            </div>

            {/* Material Spec Finder App */}
            <div className="bg-white border-4 border-black p-8 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] hover:shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] transition-all flex flex-col justify-between group">
              <div>
                <div className="flex justify-between items-start mb-6 pb-4 border-b-2 border-black">
                  <div className="w-16 h-16 border-4 border-black bg-[#FF00FF] flex items-center justify-center group-hover:-rotate-3 transition-transform">
                    <MaterialSpecFinderIcon className="w-9 h-9 text-white" strokeWidth={2.5} />
                  </div>
                  <NeoBadge color="bg-[#D4FF00] text-black">{t("pouchHomePage.appSuite.spec.badge", "MATERIAL SPEC")}</NeoBadge>
                </div>
                
                <h3 className="font-black text-3xl mb-4 uppercase">{t("pouchHomePage.appSuite.spec.title", "[SPEC FINDER APP]")}</h3>
                <p className="font-['JetBrains_Mono'] text-sm leading-relaxed mb-6 text-neutral-800">
                  {t("pouchHomePage.appSuite.spec.desc", "Search, filter, and compare water vapor & oxygen transmission rates (OTR/WVTR) across 15+ certified compostable, recyclable, PCR, and plant-based biopolymer structures.")}
                </p>

                <ul className="space-y-3 mb-8 font-['JetBrains_Mono'] text-xs font-bold text-black uppercase">
                  <li className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 border border-black bg-[#FF00FF]"></span>
                    <span>{t("pouchHomePage.appSuite.spec.bullets.0", "15+ eco duplex & triplex structures")}</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 border border-black bg-[#FF00FF]"></span>
                    <span>{t("pouchHomePage.appSuite.spec.bullets.1", "OTR & WVTR performance level filtering")}</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 border border-black bg-[#FF00FF]"></span>
                    <span>{t("pouchHomePage.appSuite.spec.bullets.2", "Full thickness & weight sheets download")}</span>
                  </li>
                </ul>
              </div>

              <NeoButton to="/tech-specs" variant="dark" className="w-full text-center py-4 text-base font-black uppercase">
                {t("pouchHomePage.appSuite.spec.btn", "LAUNCH SPEC FINDER →")}
              </NeoButton>
            </div>
          </div>
        </div>
      </section>

      {/* Product Grid */}
      <section ref={productsRef} className="py-24 bg-black border-y-4 border-[#D4FF00]">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <h2 className="font-black text-5xl md:text-7xl uppercase text-white mb-16 text-center">
            {t("pouchHomePage.choosePlan.title", "Choose Plan")}
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {PRODUCTS.map((product) => (
              <NeoCard key={product.id} className="h-full flex flex-col p-0 overflow-hidden">
                <div className={`relative bg-white p-6 h-full flex flex-col`}>
                  <div className="bg-gray-100 border-2 border-black aspect-square mb-6 flex items-center justify-center relative overflow-hidden">
                    <div className={`absolute inset-0 ${product.color} opacity-20`} />
                    <img 
                      src={product.image} 
                      alt={t("pouchHomePage.choosePlan." + (product.id === "stand-up" ? "standUp" : product.id === "flat-bottom" ? "flatBottom" : "spouted") + ".name", product.name)}
                      className="w-full h-full object-cover mix-blend-multiply grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-500"
                    />
                    <div className="absolute top-2 left-2 bg-black text-white px-2 py-0.5 font-['JetBrains_Mono'] text-xs font-bold z-10">
                      ID: {product.id.toUpperCase()}
                    </div>
                  </div>

                  <h3 className="font-black text-3xl mb-2 uppercase">{t("pouchHomePage.choosePlan." + (product.id === "stand-up" ? "standUp" : product.id === "flat-bottom" ? "flatBottom" : "spouted") + ".name", product.name)}</h3>
                  <p className="font-['JetBrains_Mono'] text-sm mb-6 flex-grow">{t("pouchHomePage.choosePlan." + (product.id === "stand-up" ? "standUp" : product.id === "flat-bottom" ? "flatBottom" : "spouted") + ".desc", product.description)}</p>

                  {/* Stats Grid */}
                  <div className="grid grid-cols-3 gap-2 mb-6 font-['JetBrains_Mono'] text-xs border-y-2 border-black py-4 bg-gray-50">
                    <div className="text-center">
                      <div className="font-bold">MOQ</div>
                      <div>{t("pouchHomePage.choosePlan." + (product.id === "stand-up" ? "standUp" : product.id === "flat-bottom" ? "flatBottom" : "spouted") + ".moq", product.stats.moq)}</div>
                    </div>
                    <div className="text-center border-l-2 border-black">
                      <div className="font-bold">MAT</div>
                      <div>{t("pouchHomePage.choosePlan." + (product.id === "stand-up" ? "standUp" : product.id === "flat-bottom" ? "flatBottom" : "spouted") + ".mat", product.stats.material)}</div>
                    </div>
                    <div className="text-center border-l-2 border-black">
                      <div className="font-bold">BAR</div>
                      <div>{t("pouchHomePage.choosePlan." + (product.id === "stand-up" ? "standUp" : product.id === "flat-bottom" ? "flatBottom" : "spouted") + ".bar", product.stats.barrier)}</div>
                    </div>
                  </div>

                  <div className="text-center mb-4 font-black text-2xl">{product.price}</div>

                  <NeoButton className="w-full" href="https://calendly.com/30-min-free-packaging-consultancy">
                    {t("pouchHomePage.choosePlan.bookCall", "BOOK CALL")}
                  </NeoButton>
                </div>
              </NeoCard>
            ))}
          </div>
        </div>
      </section>

      {/* Resource & Circular Economy Guides Library */}
      <section className="py-24 bg-white border-b-4 border-black">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-block bg-[#FF00FF] text-white border-4 border-black px-4 py-2 transform rotate-1 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] font-['JetBrains_Mono'] font-bold text-xs uppercase mb-6">
              {t("pouchHomePage.knowledge.badge", "📚 KNOWLEDGE_PORTAL")}
            </div>
            <h2 className="font-black text-5xl md:text-7xl uppercase leading-[0.9] tracking-tighter text-black">
              {t("pouchHomePage.knowledge.title", "ECO RESOURCE & LIBRARY")}
            </h2>
            <p className="font-['Space_Grotesk'] text-lg mt-6 leading-relaxed text-neutral-800 font-semibold">
              {t("pouchHomePage.knowledge.subtitle", "Deep-dive technical reports, global compliance playbooks, and circular economy research drafted by certified experts to keep your brand aligned.")}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 font-['Space_Grotesk'] text-black">
            {/* Guide 1: EU PPWR Compliance */}
            <NeoCard color="bg-white" className="flex flex-col justify-between group">
              <div>
                <div className="flex justify-between items-center mb-4">
                  <span className="bg-[#D4FF00] border-2 border-black text-black px-2 py-0.5 text-[10px] font-black uppercase font-['JetBrains_Mono']">
                    {t("pouchHomePage.knowledge.guides.compliance.tag", "COMPLIANCE_2026")}
                  </span>
                  <ShieldCheck className="w-5 h-5 text-green-600" />
                </div>
                <h3 className="font-black text-xl mb-3 uppercase leading-tight group-hover:text-[#10b981] transition-colors">
                  {t("pouchHomePage.knowledge.guides.compliance.title", "EU PPWR Compliance Guide")}
                </h3>
                <p className="font-['JetBrains_Mono'] text-xs leading-relaxed mb-6 text-neutral-600">
                  {t("pouchHomePage.knowledge.guides.compliance.desc", "Detailed analysis of void space ratios, harmonized recycling sorting labels, and eco-modulated modulation fees relief for EU-bound brand owners.")}
                </p>
              </div>
              <NeoButton to="/blog/eu-ppwr-compliance-guide" className="text-xs !py-2.5 !px-4 w-full text-center">
                {t("pouchHomePage.knowledge.guides.compliance.btn", "Read Playbook →")}
              </NeoButton>
            </NeoCard>

            {/* Guide 2: Stamp Foil Recyclability */}
            <NeoCard color="bg-white" className="flex flex-col justify-between group">
              <div>
                <div className="flex justify-between items-center mb-4">
                  <span className="bg-[#00FFFF] border-2 border-black text-black px-2 py-0.5 text-[10px] font-black uppercase font-['JetBrains_Mono']">
                    {t("pouchHomePage.knowledge.guides.foil.tag", "RECYCLING_SPECS")}
                  </span>
                  <BookOpen className="w-5 h-5 text-blue-600" />
                </div>
                <h3 className="font-black text-xl mb-3 uppercase leading-tight group-hover:text-[#10b981] transition-colors">
                  {t("pouchHomePage.knowledge.guides.foil.title", "Stamp Foil Recyclability")}
                </h3>
                <p className="font-['JetBrains_Mono'] text-xs leading-relaxed mb-6 text-neutral-600">
                  {t("pouchHomePage.knowledge.guides.foil.desc", "How hot stamp foils and metallic decorative embellishments affect sorting telemetry in municipal mono-material recycling streams.")}
                </p>
              </div>
              <NeoButton to="/blog/stamp-foil-recyclability" className="text-xs !py-2.5 !px-4 w-full text-center">
                {t("pouchHomePage.knowledge.guides.foil.btn", "Read Research →")}
              </NeoButton>
            </NeoCard>

            {/* Guide 3: Compostable Zipper Study */}
            <NeoCard color="bg-white" className="flex flex-col justify-between group">
              <div>
                <div className="flex justify-between items-center mb-4">
                  <span className="bg-[#FF00FF] text-white border-2 border-black px-2 py-0.5 text-[10px] font-black uppercase font-['JetBrains_Mono']">
                    {t("pouchHomePage.knowledge.guides.zipper.tag", "MATERIAL_SCIENCE")}
                  </span>
                  <Zap className="w-5 h-5 text-pink-600" />
                </div>
                <h3 className="font-black text-xl mb-3 uppercase leading-tight group-hover:text-[#10b981] transition-colors">
                  {t("pouchHomePage.knowledge.guides.zipper.title", "Compostable Zipper Durability")}
                </h3>
                <p className="font-['JetBrains_Mono'] text-xs leading-relaxed mb-6 text-neutral-600">
                  {t("pouchHomePage.knowledge.guides.zipper.desc", "Analyzing oxygen transmission rates and tensile grip durability of 100% plant-based reclosure zippers without removal requirements.")}
                </p>
              </div>
              <NeoButton to="/topics/compostable-zipper-durability" className="text-xs !py-2.5 !px-4 w-full text-center">
                {t("pouchHomePage.knowledge.guides.zipper.btn", "Read Technical Study →")}
              </NeoButton>
            </NeoCard>

            {/* Guide 4: Custom vs Standard */}
            <NeoCard color="bg-[#D4FF00]" className="flex flex-col justify-between group">
              <div>
                <div className="flex justify-between items-center mb-4">
                  <span className="bg-black text-[#D4FF00] border-2 border-black px-2 py-0.5 text-[10px] font-black uppercase font-['JetBrains_Mono']">
                    {t("pouchHomePage.knowledge.guides.roi.tag", "PROCUREMENT_ROI")}
                  </span>
                  <Leaf className="w-5 h-5 text-black" />
                </div>
                <h3 className="font-black text-xl mb-3 uppercase leading-tight group-hover:text-white transition-colors">
                  {t("pouchHomePage.knowledge.guides.roi.title", "Standard Runs vs. Custom Specs")}
                </h3>
                <p className="font-['JetBrains_Mono'] text-xs leading-relaxed mb-6 text-neutral-850">
                  {t("pouchHomePage.knowledge.guides.roi.desc", "Decision matrix comparing pre-made online packaging stock models with custom-engineered bulk B2B production specs to optimize unit pricing.")}
                </p>
              </div>
              <NeoButton to="/topics/custom-vs-standard-packaging" variant="secondary" className="text-xs !py-2.5 !px-4 w-full text-center">
                {t("pouchHomePage.knowledge.guides.roi.btn", "Compare Spec Sheets →")}
              </NeoButton>
            </NeoCard>
          </div>

          {/* Quick links list for remaining guides */}
          <div className="mt-12 bg-neutral-50 border-4 border-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] grid md:grid-cols-2 lg:grid-cols-3 gap-4 font-['JetBrains_Mono'] text-sm font-bold uppercase">
            <Link to="/topics/real-world-sustainability" className="flex items-center justify-between p-3 border-2 border-black bg-white hover:bg-[#D4FF00] transition-colors group">
              <span>{t("pouchHomePage.knowledge.links.sustainability", "🌱 Real-World Circular Sustainability")}</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link to="/topics/compostable-spouted-pouches" className="flex items-center justify-between p-3 border-2 border-black bg-white hover:bg-[#00FFFF] transition-colors group">
              <span>{t("pouchHomePage.knowledge.links.spoutedComposting", "💧 Spouted Biopolymer Composting")}</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link to="/solutions/citrus-oil-packaging" className="flex items-center justify-between p-3 border-2 border-black bg-white hover:bg-[#FF00FF] hover:text-white transition-colors group">
              <span className="group-hover:text-white">{t("pouchHomePage.knowledge.links.citrus", "🍊 Citrus Oil Protective Barriers")}</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform group-hover:text-white" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-24 px-4 md:px-6 max-w-5xl mx-auto">
        <NeoCard color="bg-[#FF00FF]" className="text-center">
          <div className="flex justify-center mb-6">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-8 h-8 text-white fill-white" />
            ))}
          </div>
          <blockquote className="font-['JetBrains_Mono'] text-xl font-bold text-white mb-6 leading-relaxed">
            {t("pouchHomePage.testimonial.quote", "\"Started with 500 pouches from POUCH.ECO. Best decision ever. Now ordering 10K+ monthly.\"")}
          </blockquote>
          <cite className="font-black text-lg text-white uppercase">
            {t("pouchHomePage.testimonial.author", "- Sarah M., Brand Founder")}
          </cite>
        </NeoCard>
      </section>

      {/* Add animations */}
      <style>{`
        @keyframes bounce {
          0%, 100% {
            transform: translateY(0) rotate(-15deg);
          }
          50% {
            transform: translateY(-10px) rotate(-15deg);
          }
        }
        .mask-image-gradient {
          mask-image: linear-gradient(to left, black 50%, transparent 100%);
          -webkit-mask-image: linear-gradient(to left, black 50%, transparent 100%);
        }
      `}</style>
    </PouchLayout>
  )
}
