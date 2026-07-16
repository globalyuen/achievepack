import React, { useState, useEffect, useRef } from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { 
  Package, Leaf, Zap, ShoppingCart, Star, CheckCircle, 
  ArrowRight, Box, Sparkles, Heart, Users, Globe,
  Calculator as CalcIcon, Calendar, ChevronDown
} from 'lucide-react'
import DualDomainSEOHead from '../components/DualDomainSEOHead'
import { getDomain, getBrandConfig, getDomainContent } from '../utils/domain'
import { getImage } from '../utils/imageMapper'
import { HeroGrainBackground } from '../components/HeroGrainBackground'
import Newsletter from '../components/Newsletter'
import { useStore } from '../store/StoreContext'
import ProductCarousel from '../components/ProductCarousel'
import ProductCatalogBanner from '../components/ProductCatalogBanner'
import { ThreePouchViewer } from '../components/ThreePouchViewer'
import { FEATURED_PRODUCTS } from '../store/productData'
import { useProductTranslation } from '../utils/productTranslation'

/**
 * Pouch.eco Homepage - B2C Focused
 * 
 * Key Features:
 * - Domain detection (shows pouch.eco branding)
 * - Neo-Brutalist design style
 * - 30%+ content differentiation from achievepack.com
 * - Low MOQ emphasis (500 units)
 * - Friendly, approachable tone
 * - Green eco theme (#10b981)
 */

// Neo-Brutalist Components (matching POUCH_ECO_DESIGN_SYSTEM.md)
const NeoButton = ({ children, onClick, variant = 'primary', className = '', to }: any) => {
  const baseStyle = "relative px-8 py-4 font-black uppercase tracking-widest border-4 border-black transition-all active:translate-x-1 active:translate-y-1 inline-block"
  const variants = {
    primary: "bg-[#10b981] text-white hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 hover:-translate-x-1",
    secondary: "bg-white text-black hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 hover:-translate-x-1",
    yellow: "bg-[#D4FF00] text-black hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 hover:-translate-x-1"
  }
  
  if (to) {
    return (
      <Link to={to} className={`${baseStyle} ${variants[variant as keyof typeof variants]} ${className}`}>
        {children}
      </Link>
    )
  }
  
  return (
    <button onClick={onClick} className={`${baseStyle} ${variants[variant as keyof typeof variants]} ${className}`}>
      {children}
    </button>
  )
}

const NeoCard = ({ children, className = '', color = 'bg-white' }: any) => (
  <div className={`border-4 border-black p-8 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] ${color} ${className} transition-transform hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[14px_14px_0px_0px_rgba(0,0,0,1)]`}>
    {children}
  </div>
)

const NeoBadge = ({ children, color = 'bg-[#10b981]' }: any) => (
  <span className={`inline-block px-3 py-1 text-xs font-black uppercase border-2 border-black ${color} text-white shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]`}>
    {children}
  </span>
)

export default function PouchEcoHomePage() {
  const { t } = useTranslation()
  const { translateProducts } = useProductTranslation()
  const p = 'seoPages.pages.pouchEcoHome'

  const brand = getBrandConfig()
  const content = getDomainContent('homepage')
  const { cartCount, setIsCartOpen } = useStore()
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeFeature, setActiveFeature] = useState(0)

  // 3D Pouch Interactive states
  const [activePouchModel, setActivePouchModel] = useState<'spouted' | 'flat-bottom'>('spouted')
  const [threeTilt, setThreeTilt] = useState({ x: 0, y: 0 })
  const [threeScrollPercent, setThreeScrollPercent] = useState(0)
  const threeContainerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const [footerShapes, setFooterShapes] = useState<any[]>([]);
  const currentLang = React.useMemo(() => {
    const parts = window.location.pathname.split('/').filter(Boolean);
    const possibleLang = parts[0]?.toLowerCase();
    if (possibleLang && ['fr', 'es', 'zh-tw'].includes(possibleLang)) {
      return possibleLang;
    }
    return 'en';
  }, []);

  useEffect(() => {
    fetch(`/models_database_${currentLang}.json`)
      .then(res => res.json())
      .then((data: any[]) => {
        setFooterShapes(data);
      })
      .catch(err => {
        console.error('Error loading localized database in PouchEcoHomePage, falling back:', err);
        fetch('/models_database.json')
          .then(res => res.json())
          .then((data: any[]) => {
            setFooterShapes(data);
          })
          .catch(e => console.error('Error loading fallback database in PouchEcoHomePage:', e));
      });
  }, [currentLang]);

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

  // Auto-rotate features
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveFeature(prev => (prev + 1) % 3)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const features = [
    {
      icon: <Zap className="w-12 h-12 text-[#10b981]" />,
      title: t(`${p}.features.startSmall`),
      description: t(`${p}.features.startSmallDesc`),
      badge: t(`${p}.features.startSmallBadge`),
      color: "bg-[#D4FF00]"
    },
    {
      icon: <Leaf className="w-12 h-12 text-[#10b981]" />,
      title: t(`${p}.features.trulyCompostable`),
      description: t(`${p}.features.trulyCompostableDesc`),
      badge: t(`${p}.features.trulyCompostableBadge`),
      color: "bg-[#00FFFF]"
    },
    {
      icon: <Sparkles className="w-12 h-12 text-[#10b981]" />,
      title: t(`${p}.features.premiumFinishes`),
      description: t(`${p}.features.premiumFinishesDesc`),
      badge: t(`${p}.features.premiumFinishesBadge`),
      color: "bg-[#FF00FF]"
    }
  ]

  const products = [
    {
      id: 'starter',
      name: t(`${p}.products.starterKit`),
      tagline: t(`${p}.products.starterTagline`),
      description: t(`${p}.products.starterDesc`),
      price: t(`${p}.products.starterPrice`),
      moq: '500',
      image: getImage('stand-up-pouch/stand800'),
      badges: ['Compostable', 'Low MOQ', 'Fast Ship'],
      color: 'bg-[#D4FF00]'
    },
    {
      id: 'pro',
      name: t(`${p}.products.proPack`),
      tagline: t(`${p}.products.proTagline`),
      description: t(`${p}.products.proDesc`),
      price: t(`${p}.products.proPrice`),
      moq: '2,000',
      image: getImage('flat-bottom/flat-bottom800'),
      badges: ['Recyclable', 'Food Safe', 'Premium'],
      color: 'bg-[#00FFFF]'
    },
    {
      id: 'custom',
      name: t(`${p}.products.customSolution`),
      tagline: t(`${p}.products.customTagline`),
      description: t(`${p}.products.customDesc`),
      price: t(`${p}.products.customPrice`),
      moq: 'Flexible',
      image: getImage('side-gusset/side-gusset800'),
      badges: ['Custom', 'Any MOQ', 'Full Service'],
      color: 'bg-[#FF00FF]'
    }
  ]

  const socialProof = [
    { icon: <Users className="w-6 h-6" />, number: "1,200+", label: t(`${p}.socialProof.happyBrands`) },
    { icon: <Package className="w-6 h-6" />, number: "50M+", label: t(`${p}.socialProof.pouchesMade`) },
    { icon: <Globe className="w-6 h-6" />, number: "40+", label: t(`${p}.socialProof.countries`) },
    { icon: <Star className="w-6 h-6" />, number: "4.9/5", label: t(`${p}.socialProof.rating`) }
  ]

  return (
    <div className="min-h-screen bg-neutral-50 text-black font-['Space_Grotesk'] selection:bg-[#10b981] selection:text-white overflow-x-hidden">
      <DualDomainSEOHead
        title="Eco Packaging for Startups - From 500 Units"
        description="Beautiful compostable and recyclable pouches from just 500 units. Perfect for small brands starting their sustainability journey. BPI certified, 8 premium finishes, fast turnaround."
        keywords={['startup packaging', 'low moq pouches', 'compostable bags', 'eco packaging', 'small batch packaging', '500 units moq']}
        ogImage={getImage('eco-pouch-og')}
      />

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700;800;900&family=JetBrains+Mono:wght@400;700&display=swap');
      `}</style>

      {/* Navigation */}
      <nav className={`border-b-4 border-black sticky top-0 z-50 transition-all ${isScrolled ? 'bg-white shadow-lg' : 'bg-white/95 backdrop-blur-sm'}`}>
        <div className="max-w-7xl mx-auto px-4 md:px-6 h-20 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 hover:scale-105 transition-transform">
            <div className="w-10 h-10 bg-[#10b981] flex items-center justify-center border-2 border-black">
              <Leaf className="text-white w-6 h-6" />
            </div>
            <span className="font-black text-2xl tracking-tighter">
              POUCH<span className="text-[#10b981]">.ECO</span>
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-8 font-['JetBrains_Mono'] font-bold text-sm">
            <Link to="/store" className="hover:text-[#10b981] transition-colors">
              [SHOP]
            </Link>
            <Link to="/materials" className="hover:text-[#10b981] transition-colors">
              [MATERIALS]
            </Link>
            <Link to="/size-guide" className="hover:text-[#10b981] transition-colors">
              [SIZE GUIDE]
            </Link>
            <Link to="/contact" className="hover:text-[#10b981] transition-colors">
              [CONTACT]
            </Link>
          </div>

          <button 
            onClick={() => setIsCartOpen(true)}
            className="border-2 border-black p-2 hover:bg-[#10b981] hover:text-white transition-colors relative"
          >
            <ShoppingCart className="w-6 h-6" />
            {cartCount > 0 && (
              <div className="absolute -top-3 -right-3 bg-black text-[#D4FF00] w-6 h-6 flex items-center justify-center font-['JetBrains_Mono'] font-bold text-xs border-2 border-[#D4FF00]">
                {cartCount}
              </div>
            )}
          </button>
        </div>
      </nav>
      <ProductCatalogBanner />

      {/* Hero Section with Dark Background */}
      <section className="relative pt-16 pb-24 border-b-4 border-black overflow-hidden bg-neutral-900">

        {/* Dot pattern overlay */}
        <div className="absolute inset-0 z-[1] bg-[radial-gradient(rgba(16,185,129,0.3)_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Content */}
            <div className="space-y-8 z-10">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-block bg-[#D4FF00] border-4 border-black px-4 py-2 transform -rotate-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
              >
                <span className="font-['JetBrains_Mono'] font-bold text-sm">✨ START WITH 500 UNITS</span>
              </motion.div>
              
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="font-black text-6xl md:text-8xl leading-[0.9] tracking-tighter uppercase text-white drop-shadow-[0_4px_8px_rgba(0,0,0,0.8)]"
              >
                Your Brand.<br/>
                Our Eco<br/>
                <span className="text-[#D4FF00]">Packaging.</span>
              </motion.h1>

              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="font-['JetBrains_Mono'] font-bold text-lg md:text-xl max-w-md bg-white border-4 border-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]"
              >
                → Compostable & Recyclable pouches<br/>
                → From just 500 units<br/>
                → 8 premium finishes<br/>
                → Fast 2-3 week turnaround<br/>
                → No hidden fees 💚
              </motion.p>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <NeoButton to="/store" variant="primary">
                  Shop Starter Kits
                </NeoButton>
                <NeoButton to="/contact" variant="secondary">
                  Get Free Sample
                </NeoButton>
              </motion.div>

              {/* Product Hunt Feature Badge */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.35 }}
                className="flex justify-start pt-2"
              >
                <a 
                  href="https://www.producthunt.com/products/achieve-pack-free-3d-studio?embed=true&utm_source=badge-featured&utm_medium=badge&utm_campaign=badge-achieve-pack-free-3d-studio" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-block hover:opacity-90 transition-opacity border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] bg-white"
                >
                  <img 
                    alt="Achieve Pack Free 3D Studio - Design & visualize 3D pouches instantly in your browser. | Product Hunt" 
                    width="250" 
                    height="54" 
                    src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=1198264&theme=light&t=1784212056282" 
                    style={{ width: '250px', height: '54px' }}
                  />
                </a>
              </motion.div>

              {/* Social Proof with group.png background */}
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="relative pt-8 mt-4 -mx-4 px-4 py-6 rounded-xl overflow-hidden"
                style={{
                  backgroundImage: 'url(/imgs/group/group.png)',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              >
                {/* Overlay for readability */}
                <div className="absolute inset-0 bg-black/60 backdrop-blur-[1px]" />
                
                <p className="text-center text-sm font-bold text-[#D4FF00] mb-4 relative z-10 uppercase tracking-wider">Trusted by Global Brands</p>
                
                <div className="grid grid-cols-4 gap-4 relative z-10">
                  {socialProof.map((item, idx) => (
                    <div key={idx} className="text-center bg-white/10 backdrop-blur-sm border-2 border-white/20 p-3 rounded-lg">
                      <div className="flex justify-center mb-2 text-[#D4FF00]">
                        {item.icon}
                      </div>
                      <div className="font-black text-xl text-white">{item.number}</div>
                      <div className="text-xs text-white/80 font-['JetBrains_Mono']">{item.label}</div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Right Visual */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="relative z-10 rotate-2 group">
                <div className="aspect-square flex items-center justify-center relative bg-black border-4 border-black">
                  <video 
                    src="/video/hero/bag.mov"
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                    poster="/imgs/hero/pouch-eco-cover.jpg"
                  />
                  {/* Floating Badges */}
                  <motion.div 
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-4 right-4 bg-white border-4 border-black px-3 py-2 font-['JetBrains_Mono'] text-sm font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] z-20"
                  >
                    ✓ COMPOSTABLE
                  </motion.div>
                  <motion.div 
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                    className="absolute bottom-4 left-4 bg-[#D4FF00] border-4 border-black px-3 py-2 font-['JetBrains_Mono'] text-sm font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] z-20"
                  >
                    FROM 500
                  </motion.div>
                </div>
              </div>
              
              {/* Decorative Background Elements */}
              <div className="absolute top-10 -right-10 w-full h-full border-4 border-black bg-[#D4FF00] -z-0 rotate-6" />
              <motion.div 
                animate={{ rotate: [0, 10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-10 -left-10 w-32 h-32 bg-[#00FFFF] border-4 border-black flex items-center justify-center"
              >
                <span className="font-black text-2xl rotate-[-15deg]">ECO!</span>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3D Studio Promo Section */}
      <section className="py-24 px-4 md:px-6 bg-[#080d1a] border-b-4 border-black overflow-hidden relative">
        {/* Neon blur background highlights */}
        <div className="absolute top-1/4 -left-1/4 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-1/4 -right-1/4 w-[500px] h-[500px] bg-lime-500/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            
            {/* Left Column: Bold Text Info */}
            <div className="lg:col-span-5 space-y-8 text-left">
              <div className="inline-block bg-[#D4FF00] text-black px-4 py-1.5 font-['JetBrains_Mono'] font-extrabold text-xs uppercase tracking-wider transform -rotate-1 border-2 border-black shadow-[4px_4px_0px_0px_rgba(255,255,255,1)]">
                ⚡ FREE ONLINE 3D PACKAGING STUDIO
              </div>
              <h2 className="font-black text-5xl md:text-7xl uppercase text-white leading-[1.05] tracking-tight">
                Design in <br/>
                <span className="text-[#D4FF00]">Real-Time 3D</span> <br/>
                for Free
              </h2>
              <p className="font-['Space_Grotesk'] text-lg font-medium text-white/70 max-w-xl leading-relaxed">
                Skip the expensive prototyping. Choose from over 400+ custom eco-friendly packaging shapes (pouches, boxes, bottles, cans, labels), adjust dimensions, and visualize in high-fidelity instantly in your browser!
              </p>
              
              <div className="space-y-4 pt-2">
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center font-bold text-xs rounded-full">
                    ✓
                  </div>
                  <span className="font-['Space_Grotesk'] text-sm font-semibold text-white/90">400+ Free Packaging Models</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center font-bold text-xs rounded-full">
                    ✓
                  </div>
                  <span className="font-['Space_Grotesk'] text-sm font-semibold text-white/90">BPI Certified Compostable Pouch Templates</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center font-bold text-xs rounded-full">
                    ✓
                  </div>
                  <span className="font-['Space_Grotesk'] text-sm font-semibold text-white/90">Download watermark-free GLB models for 3D printing & mockup validation</span>
                </div>
              </div>

              <div className="pt-4">
                <Link
                  to="/studio"
                  className="inline-block bg-[#10b981] hover:bg-[#D4FF00] text-black font-black text-lg px-10 py-5 border-4 border-black shadow-[8px_8px_0px_0px_rgba(255,255,255,0.15)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all uppercase tracking-wider"
                >
                  Start 3D Studio &rarr;
                </Link>
              </div>
            </div>

            {/* Right Column: Stunning Interactive Device Mockup Frame */}
            <div className="lg:col-span-7 relative">
              <motion.div 
                whileHover={{ rotateY: -6, rotateX: 6, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 100, damping: 15 }}
                className="relative bg-black border-4 border-black p-3 shadow-[20px_20px_0px_0px_rgba(16,185,129,0.15)] rounded-3xl overflow-hidden cursor-pointer"
                style={{ perspective: 1000 }}
              >
                {/* Visual Glassmorphic controls container */}
                <div className="absolute top-6 left-6 z-20 bg-black/60 backdrop-blur-md border border-white/10 px-4 py-2.5 rounded-2xl flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" />
                  <span className="font-['JetBrains_Mono'] font-bold text-[10px] tracking-wide text-white">INTERACTIVE VIEWPORT v3.2</span>
                </div>

                <div className="absolute bottom-6 right-6 z-20 bg-black/60 backdrop-blur-md border border-white/10 px-4 py-3 rounded-2xl flex flex-col gap-1 text-right">
                  <span className="font-['Space_Grotesk'] text-[10px] font-black text-[#D4FF00] uppercase tracking-wider">3D Calibration</span>
                  <span className="font-['JetBrains_Mono'] text-xs font-bold text-white">Width: 155mm | Height: 240mm</span>
                </div>

                {/* Main high fidelity generated image */}
                <img 
                  src="/imgs/pouch_3d_studio_promo.jpg" 
                  alt="Pouch.eco 3D Packaging Design Studio"
                  className="w-full h-auto rounded-2xl object-cover border-2 border-white/5"
                />

                {/* Subtitle spec description banner */}
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-6 pt-16 flex justify-between items-end">
                  <div className="flex gap-2">
                    <span className="inline-block px-2.5 py-1 bg-white/10 border border-white/20 rounded-md text-[9px] font-bold text-white uppercase">WebGL 2.0</span>
                    <span className="inline-block px-2.5 py-1 bg-white/10 border border-white/20 rounded-md text-[9px] font-bold text-white uppercase">Real-Time Lighting</span>
                  </div>
                </div>
              </motion.div>

              {/* Decorative behind elements */}
              <div className="absolute -inset-2 bg-gradient-to-r from-emerald-500 to-lime-500 rounded-3xl opacity-20 blur-xl -z-10 animate-pulse" />
            </div>

          </div>
        </div>
      </section>

      {/* Interactive 3D Eco Pouch Showcase */}
      <section 
        ref={threeContainerRef}
        onMouseMove={handleThreeMouseMove}
        onMouseLeave={handleThreeMouseLeave}
        className="py-24 bg-neutral-100 border-b-4 border-black overflow-hidden relative"
      >
        {/* Dot pattern overlay */}
        <div className="absolute inset-0 z-0 bg-[radial-gradient(rgba(0,0,0,0.15)_1.5px,transparent_1.5px)] [background-size:24px_24px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <div className="inline-block bg-[#10b981] border-4 border-black px-4 py-2 transform -rotate-1 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] text-white font-black text-xs uppercase tracking-wider mb-6">
              ✨ Interactive 3D Showcase
            </div>
            <h2 className="font-black text-5xl md:text-7xl uppercase leading-[0.9] tracking-tighter text-black">
              Eco Bags in <span className="text-[#10b981]">3D Space</span>
            </h2>
            <p className="font-['JetBrains_Mono'] text-lg mt-6 leading-relaxed max-w-2xl mx-auto text-neutral-800">
              Rotate, tilt, and inspect the certified organic structural barriers of our green pouches. Move your mouse to tilt, scroll to spin, or toggle models below.
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
                      💧 Liquids & Purees
                    </span>
                    <h3 className="font-black text-2xl uppercase text-black">
                      Industrial Compostable Spouted Pouch
                    </h3>
                  </div>
                  <span className="text-3xl bg-white border-2 border-black p-2 rounded-xl shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">🥤</span>
                </div>
                
                <p className="font-['JetBrains_Mono'] text-sm mt-4 leading-relaxed text-neutral-800">
                  Certified industrial compostable flexible pouch featuring a fully plant-based rigid spout. Replaces conventional plastic spout barrier options with zero plastic footprint.
                </p>

                <div className="mt-6 pt-4 border-t-2 border-dashed border-black grid grid-cols-2 gap-4 font-['JetBrains_Mono'] text-xs text-black">
                  <div>
                    <span className="font-bold block uppercase tracking-wider text-black">MOQ:</span>
                    <span className="font-black bg-white px-2 py-0.5 border border-black inline-block mt-1">2,000 units</span>
                  </div>
                  <div>
                    <span className="font-bold block uppercase tracking-wider text-black">Certifications:</span>
                    <span className="font-black text-[#10b981] bg-white px-2 py-0.5 border border-black inline-block mt-1">EN 13432, ASTM D6400</span>
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
                      🌱 Dry Goods & Coffee
                    </span>
                    <h3 className="font-black text-2xl uppercase text-black">
                      Home Compostable Flat Bottom Pouch
                    </h3>
                  </div>
                  <span className="text-3xl bg-white border-2 border-black p-2 rounded-xl shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">☕</span>
                </div>
                
                <p className="font-['JetBrains_Mono'] text-sm mt-4 leading-relaxed text-neutral-800">
                  Premium 100% home compostable box bottom structure that delivers outstanding shelf presence. Decomposes safely and naturally in home backyard compost bins.
                </p>

                <div className="mt-6 pt-4 border-t-2 border-dashed border-black grid grid-cols-2 gap-4 font-['JetBrains_Mono'] text-xs text-black">
                  <div>
                    <span className="font-bold block uppercase tracking-wider text-black">MOQ:</span>
                    <span className="font-black bg-white px-2 py-0.5 border border-black inline-block mt-1">1,000 units</span>
                  </div>
                  <div>
                    <span className="font-bold block uppercase tracking-wider text-black">Certifications:</span>
                    <span className="font-black text-[#10b981] bg-white px-2 py-0.5 border border-black inline-block mt-1">OK Compost HOME</span>
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


      {/* Product Photos Carousel */}
      <section className="py-24 px-4 md:px-6 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-block bg-black text-[#D4FF00] px-4 py-1 mb-6 font-['JetBrains_Mono'] font-bold transform -rotate-1">
            REAL PRODUCTS • REAL BRANDS
          </div>
          <h2 className="font-black text-5xl md:text-7xl uppercase mb-6">
            See Our <span className="text-[#10b981]">Work</span>
          </h2>
          <p className="font-['JetBrains_Mono'] text-lg max-w-2xl mx-auto text-gray-700">
            Browse through real product photos from brands we've helped launch and grow. 
            Your brand could be next.
          </p>
        </div>
        
        <ProductCarousel autoPlay autoPlayInterval={4000} />
      </section>

      {/* Featured Products Section */}
      <section className="py-24 px-4 md:px-6 max-w-7xl mx-auto border-t-4 border-black">
        <div className="text-center mb-16">
          <div className="inline-block bg-[#10b981] text-white border-4 border-black px-4 py-2 transform rotate-1 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] font-['JetBrains_Mono'] font-bold text-xs uppercase tracking-wider mb-6">
            🔥 HOT OFF THE PRESS
          </div>
          <h2 className="font-black text-5xl md:text-7xl uppercase mb-6 leading-none">
            Featured <span className="text-[#10b981]">Products</span>
          </h2>
          <p className="font-['JetBrains_Mono'] text-lg max-w-2xl mx-auto text-neutral-700">
            Explore our bestselling sustainable packaging solutions. Order sample packs or request custom prints.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {translateProducts(FEATURED_PRODUCTS.filter(p => ['sample-sizing-pack', 'compostable-stand-up-pouches', 'spouted-foil-pouch'].includes(p.id))).map((product) => {
            const imageUrl = product.images?.[0] || '';
            return (
              <Link 
                key={product.id}
                to={`/shop/${product.id}`}
                className="group border-4 border-black bg-white hover:bg-neutral-50 transition-colors relative flex flex-col h-full shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] hover:-translate-x-1 hover:-translate-y-1 transition-all duration-200"
              >
                <div className="aspect-square border-b-4 border-black p-4 bg-white relative overflow-hidden flex items-center justify-center">
                  <img 
                    src={imageUrl} 
                    alt={product.name}
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                  />
                  {product.badge && (
                    <div className="absolute top-4 right-4 bg-black text-[#D4FF00] font-['JetBrains_Mono'] font-bold text-xs px-2 py-1 uppercase border-2 border-black z-10 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                      {product.badge}
                    </div>
                  )}
                </div>

                <div className="p-6 flex-grow flex flex-col justify-between">
                  <div>
                    <div className="text-[10px] font-['JetBrains_Mono'] font-bold text-[#10B981] mb-1 uppercase tracking-tight">
                      {product.category.replace('-', ' ')}
                    </div>
                    <h3 className="text-xl font-black uppercase leading-tight mb-2 group-hover:underline">
                      {product.name}
                    </h3>
                    <p className="text-xs font-['Space_Grotesk'] line-clamp-2 mb-4 text-gray-600">
                      {product.shortDesc}
                    </p>
                  </div>

                  <div className="flex items-center justify-between mt-auto pt-4 border-t-2 border-black font-['JetBrains_Mono'] font-bold">
                    <div>
                      {product.basePrice > 0 ? (
                        <span className="text-lg font-black">${product.basePrice.toFixed(2)}<span className="text-xs text-gray-500">/ea</span></span>
                      ) : (
                        <span className="text-sm font-black text-[#FF00FF]">Custom Quote</span>
                      )}
                    </div>
                    <div className="bg-[#10b981] border-2 border-black p-1.5 text-white group-hover:bg-black group-hover:text-[#D4FF00] transition-colors">
                      <ArrowRight className="w-4 h-4" strokeWidth={3} />
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <Link 
            to="/shop"
            className="inline-block bg-[#D4FF00] border-4 border-black px-8 py-4 font-black uppercase tracking-widest hover:bg-black hover:text-[#D4FF00] shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all duration-200"
          >
            Explore Full Shop
          </Link>
        </div>
      </section>

      {/* Social Video Section */}
      <section className="py-24 px-4 md:px-6 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-block bg-black text-[#D4FF00] px-4 py-1 mb-6 font-['JetBrains_Mono'] font-bold transform -rotate-1">
            REAL PRODUCTS • REAL BRANDS
          </div>
          <h2 className="font-black text-5xl md:text-7xl uppercase mb-6">
            As Seen In <span className="text-[#10b981]">Social</span>
          </h2>
          <p className="font-['JetBrains_Mono'] text-lg max-w-2xl mx-auto text-gray-700">
            Watch how our pouches help brands go viral. Unboxing experiences that customers love to share.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto border-4 border-black p-4 bg-white shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
          <div className="aspect-video relative bg-black">
            <video 
              src="/pouch-social.mp4"
              controls
              className="w-full h-full object-cover"
              poster="/imgs/hero/pouch-eco-cover.jpg"
            />
          </div>
        </div>
      </section>

      {/* Features Bento Grid */}
      <section className="py-24 px-4 md:px-6 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <h2 className="font-black text-5xl md:text-7xl uppercase">
            Why Choose<br/>
            <span className="text-[#10b981]">Pouch.eco?</span>
          </h2>
          <div className="font-['JetBrains_Mono'] text-sm font-bold bg-[#D4FF00] border-4 border-black px-4 py-3 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            [SCROLL_TO_EXPLORE]
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <NeoCard className={`bg-neutral-50 h-full ${activeFeature === idx ? 'ring-4 ring-[#10b981]' : ''}`}>
                <div className="mb-4">{feature.icon}</div>
                <h3 className="font-black text-2xl mb-4 uppercase">{feature.title}</h3>
                <p className="font-['JetBrains_Mono'] text-sm leading-relaxed mb-6 text-gray-700">
                  {feature.description}
                </p>
                <NeoBadge>{feature.badge}</NeoBadge>
              </NeoCard>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Products Section */}
      <section className="py-24 px-4 md:px-6 max-w-7xl mx-auto border-t-4 border-black">
        <div className="text-center mb-16">
          <h2 className="font-black text-5xl md:text-7xl uppercase mb-6">
            Popular <span className="text-[#10b981]">Packages</span>
          </h2>
          <p className="font-['JetBrains_Mono'] text-lg max-w-2xl mx-auto">
            Choose the perfect starting point for your brand. All options include free samples and design consultation.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {products.map((product, idx) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group relative"
            >
              {/* Dual shadow effect */}
              <div className={`absolute inset-0 ${product.color} translate-x-4 translate-y-4 border-4 border-black transition-transform group-hover:translate-x-6 group-hover:translate-y-6`} />
              
              <div className="relative bg-white border-4 border-black p-6 h-full flex flex-col">
                {/* Product Image */}
                <div className="aspect-square mb-6 border-2 border-black overflow-hidden bg-neutral-50">
                  <img 
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-contain p-4 group-hover:scale-110 transition-transform duration-500"
                  />
                </div>

                {/* Product Info */}
                <div className="flex-1">
                  <div className="inline-block bg-[#D4FF00] border-2 border-black px-2 py-1 text-xs font-black uppercase mb-3">
                    {product.tagline}
                  </div>
                  <h3 className="font-black text-2xl mb-2 uppercase">{product.name}</h3>
                  <p className="font-['JetBrains_Mono'] text-sm text-gray-600 mb-4">
                    {product.description}
                  </p>

                  {/* Badges */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {product.badges.map((badge, i) => (
                      <NeoBadge key={i} color={i === 0 ? 'bg-[#10b981]' : 'bg-gray-800'}>
                        {badge}
                      </NeoBadge>
                    ))}
                  </div>

                  {/* Price & MOQ */}
                  <div className="space-y-2 mb-6 font-['JetBrains_Mono'] text-sm">
                    <div className="flex justify-between">
                      <span className="font-bold">Price:</span>
                      <span className="font-black text-[#10b981]">{product.price}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-bold">MOQ:</span>
                      <span className="font-black">{product.moq} units</span>
                    </div>
                  </div>
                </div>

                {/* CTA Button */}
                <NeoButton to={`/store`} variant="primary" className="w-full text-center">
                  Shop Now <ArrowRight className="inline w-4 h-4 ml-2" />
                </NeoButton>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Custom vs. Standard Packaging Guide Banner */}
        <div className="mt-16 max-w-4xl mx-auto">
          <NeoCard color="bg-[#D4FF00]" className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2 text-left md:max-w-2xl">
              <span className="inline-block px-3 py-1 text-xs font-black uppercase border-2 border-black bg-black text-[#D4FF00] shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                Decision Guide
              </span>
              <h3 className="font-black text-2xl uppercase">Standard Online Runs vs. Custom B2B Quotes</h3>
              <p className="font-['JetBrains_Mono'] text-sm leading-relaxed text-neutral-800">
                Not sure whether to buy standard store items or request a custom run for features like premium closures and dynamic dimensions? Read our comprehensive comparison guide to optimize your packaging ROI.
              </p>
            </div>
            <NeoButton to="/topics/custom-vs-standard-packaging" variant="secondary" className="whitespace-nowrap w-full md:w-auto text-center">
              Compare Options →
            </NeoButton>
          </NeoCard>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 md:px-6 border-t-4 border-black bg-[#10b981] text-white">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="font-black text-5xl md:text-7xl uppercase">
            Ready to Start<br/>
            Your Eco Journey?
          </h2>
          <p className="font-['JetBrains_Mono'] text-xl">
            Join 1,200+ brands making a positive impact. Get your free sample kit today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <NeoButton to="/store" variant="yellow">
              Shop Starter Kits
            </NeoButton>
            <NeoButton to="/contact" variant="secondary">
              Book Free Consultation
            </NeoButton>
          </div>

          {/* Trust Badges */}
          <div className="flex flex-wrap justify-center gap-4 pt-8">
            <div className="bg-white text-black border-4 border-black px-4 py-2 font-black text-sm">
              ✓ BPI CERTIFIED
            </div>
            <div className="bg-white text-black border-4 border-black px-4 py-2 font-black text-sm">
              ✓ EN13432
            </div>
            <div className="bg-white text-black border-4 border-black px-4 py-2 font-black text-sm">
              ✓ ASTM D6400
            </div>
            <div className="bg-white text-black border-4 border-black px-4 py-2 font-black text-sm">
              ✓ FOOD SAFE
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 px-4 md:px-6 border-t-4 border-black">
        <div className="max-w-2xl mx-auto">
          <Newsletter />
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t-4 border-black bg-white py-12 px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-[#10b981] flex items-center justify-center border-2 border-black">
                  <Leaf className="text-white w-5 h-5" />
                </div>
                <span className="font-black text-xl">POUCH.ECO</span>
              </div>
              <p className="text-sm text-gray-600 font-['JetBrains_Mono']">
                Eco packaging for the next generation of sustainable brands.
              </p>
            </div>

            <div>
              <h4 className="font-black mb-4 uppercase">Shop</h4>
              <ul className="space-y-2 text-sm">
                <li><Link to="/store" className="hover:text-[#10b981]">All Products</Link></li>
                <li><Link to="/materials" className="hover:text-[#10b981]">Materials</Link></li>
                <li><Link to="/size-guide" className="hover:text-[#10b981]">Size Guide</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-black mb-4 uppercase">Learn</h4>
              <ul className="space-y-2 text-sm">
                <li><Link to="/about" className="hover:text-[#10b981]">About Us</Link></li>
                <li><Link to="/blog" className="hover:text-[#10b981]">Blog</Link></li>
                <li><Link to="/testimonials" className="hover:text-[#10b981]">Testimonials</Link></li>
                <li><Link to="/topics/custom-vs-standard-packaging" className="hover:text-[#10b981]">Custom vs. Standard</Link></li>
                <li><Link to="/knowledge/pouch-date-coding-guide" className="hover:text-[#10b981]">Date Coding Guide</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-black mb-4 uppercase">Contact</h4>
              <ul className="space-y-2 text-sm text-gray-600 font-['JetBrains_Mono']">
                <li>{brand.email}</li>
                <li>{brand.phone}</li>
                <li>Mon-Fri 9am-6pm PST</li>
              </ul>
            </div>
          </div>

          {/* 3D Packaging Model Directory (Neo-Brutalist Collapsible style) */}
          <div className="border-t-4 border-black py-6 mt-8">
            <details className="group">
              <summary className="flex items-center justify-between cursor-pointer list-none select-none text-black hover:text-[#10b981] transition-colors py-2 focus:outline-none font-black uppercase tracking-wider">
                <div className="flex items-center gap-2">
                  <Box className="h-5 w-5 text-[#10b981]" />
                  <span>3D Packaging Model Directory</span>
                </div>
                <div className="text-xs border-2 border-black px-3 py-1 bg-white shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] group-open:bg-[#10b981] group-open:text-white transition-all font-['JetBrains_Mono'] font-bold">
                  <span className="group-open:hidden">[+] Expand</span>
                  <span className="hidden group-open:inline">[-] Collapse</span>
                </div>
              </summary>
              
              <div className="mt-6 pt-6 border-t-2 border-black text-gray-600 text-xs">
                {footerShapes.length === 0 ? (
                  <p className="text-xs py-2 font-['JetBrains_Mono']">Loading packaging shapes...</p>
                ) : (
                  <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-10 xl:grid-cols-12 gap-3 max-h-[400px] overflow-y-auto pr-2 custom-scrollbar">
                    {footerShapes.map((shape) => {
                      const langPrefix = currentLang === 'en' ? '' : `/${currentLang}`;
                      return (
                        <Link
                          key={shape.id}
                          to={`${langPrefix}/solutions/shapes/${shape.slug || shape.id}`}
                          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                          className="w-[60px] h-[60px] flex items-center justify-center bg-white border-2 border-black hover:bg-gray-50 hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] transition-all p-1 relative group"
                          title={`${shape.id} - ${shape.name}`}
                        >
                          <img
                            src={`/thumbnails/${shape.id}.png?v=2`}
                            alt={shape.name}
                            loading="lazy"
                            className="max-w-full max-h-full object-contain group-hover:scale-105 transition-transform"
                            onError={(e) => {
                              const dielineSrc = shape.dieline_image.startsWith('/') 
                                ? shape.dieline_image 
                                : `/api/proxy?url=${encodeURIComponent(shape.dieline_image)}`;
                              (e.target as HTMLImageElement).src = dielineSrc;
                            }}
                          />
                        </Link>
                      );
                    })}
                  </div>
                )}
              </div>
            </details>
          </div>

          <div className="border-t-2 border-black pt-8 text-center text-sm text-gray-600 font-['JetBrains_Mono']">
            © 2026 {brand.name}. All rights reserved. Made with 💚 for the planet.
          </div>
        </div>
      </footer>
    </div>
  )
}
