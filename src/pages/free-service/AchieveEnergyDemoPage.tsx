import React, { useState, useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { ShoppingCart, Menu, X, ArrowLeft, ArrowRight, Zap, Target, Flame, Activity, Battery, ChevronDown, Play, Instagram, Twitter, Facebook, ExternalLink } from 'lucide-react'
import { motion, useScroll, useTransform, AnimatePresence, Variants } from 'motion/react'
import { ParallaxText } from '../../components/ParallaxText'
import { ScrollTriggeredCards } from '../../components/ScrollTriggeredCards'

// ============================================
// ANIMATION VARIANTS
// ============================================

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }
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

const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: 'easeOut' }
  }
}

const cardHover = {
  y: -10,
  scale: 1.02,
  boxShadow: '0 0 30px rgba(226, 253, 63, 0.2)',
  transition: { duration: 0.3 }
}

// ============================================
// ASSETS & DATA
// ============================================

const ENERGY_IMAGES = {
  hero: '/imgs/demo-site/energy/hero.png',
  lifestyle: '/imgs/demo-site/energy/lifestyle.png',
  flavors: {
    green: '/imgs/demo-site/energy/neon-zest.png',
    blue: '/imgs/demo-site/energy/cyber-berry.png',
    red: '/imgs/demo-site/energy/magma-punch.png'
  }
}

const PRODUCTS = [
  {
    id: 'neon-zest',
    name: 'Neon Zest',
    tagline: 'Citrus Charged Focus',
    description: 'Electric lime and yuzu fusion. Charged with 200mg caffeine and L-Theanine for laser focus without the crash.',
    price: 34.99,
    packSize: '12 Pack',
    image: ENERGY_IMAGES.flavors.green,
    color: '#D4FF00', // Neon Green/Yellow
    accent: 'bg-[#D4FF00]',
    textAccent: 'text-[#D4FF00]',
    gradient: 'from-[#D4FF00] to-[#80B900]',
    stats: { caffeine: '200mg', sugar: '0g', focus: '100%' }
  },
  {
    id: 'cyber-berry',
    name: 'Cyber Berry',
    tagline: 'Blue Raspberry Overdrive',
    description: 'Synthesized blue raspberry with electrolyte matrix. Hydration and power for endurance sessions.',
    price: 34.99,
    packSize: '12 Pack',
    image: ENERGY_IMAGES.flavors.blue,
    color: '#00F0FF', // Cyan
    accent: 'bg-[#00F0FF]',
    textAccent: 'text-[#00F0FF]',
    gradient: 'from-[#00F0FF] to-[#0080FF]',
    stats: { caffeine: '180mg', sugar: '0g', hydration: 'MAX' }
  },
  {
    id: 'magma-punch',
    name: 'Magma Punch',
    tagline: 'Tropical Heat Surge',
    description: 'Volcanic tropical punch with cayenne kick. Thermogenic formula to ignite your metabolism.',
    price: 34.99,
    packSize: '12 Pack',
    image: ENERGY_IMAGES.flavors.red,
    color: '#FF2A00', // Red/Orange
    accent: 'bg-[#FF2A00]',
    textAccent: 'text-[#FF2A00]',
    gradient: 'from-[#FF2A00] to-[#CC0000]',
    stats: { caffeine: '250mg', sugar: '0g', burn: 'HIGH' }
  }
]

// Feature Cards for Scroll Section
const FEATURE_CARDS = [
  {
    image: ENERGY_IMAGES.flavors.green,
    title: 'Zero Sugar. Pure Power.',
    hueA: 60, hueB: 90, // Yellow-Green range
    leftInfo: {
      title: 'Clean Energy',
      description: 'No crash, no jitters. Just pure, sustainable energy from natural caffeine sources.',
      badges: ['0g Sugar', 'Natural Caffeine']
    },
    rightInfo: {
      title: 'Cognitive Boost',
      description: 'Fortified with Nootropics like Alpha-GPC and Lion\'s Mane for peak mental performance.',
      badges: ['Focus', 'Clarity']
    }
  },
  {
    image: ENERGY_IMAGES.lifestyle,
    title: 'Built for Performance',
    hueA: 180, hueB: 220, // Cyan-Blue range
    leftInfo: {
      title: 'Ergonomic Pouch',
      description: 'Flexible, durable spouted pouch fits in any pocket or gear bag. No bulk, no glass.',
      badges: ['Portable', 'Durable']
    },
    rightInfo: {
      title: 'Sustainable',
      description: 'Uses 70% less plastic than rigid bottles and is fully recyclable via our take-back program.',
      badges: ['Eco-Friendly', 'Low Carbon']
    }
  },
  {
    image: ENERGY_IMAGES.flavors.red,
    title: 'Ignite Your Workout',
    hueA: 0, hueB: 30, // Red-Orange range
    leftInfo: {
      title: 'Pre-Workout',
      description: 'Beta-Alanine and Citrulline Malate for pump and endurance.',
      badges: ['Pump', 'Endurance']
    },
    rightInfo: {
      title: 'Thermogenic',
      description: 'Active ingredients to boost metabolism and heat up your training.',
      badges: ['Burn', 'Sweat']
    }
  }
]

export default function AchieveEnergyDemoPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeProduct, setActiveProduct] = useState(PRODUCTS[0])
  const [cartCount, setCartCount] = useState(0)

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-[#D4FF00] selection:text-black">
      <Helmet>
        <title>Achieve Energy | Unleash the Future | Demo Site</title>
        <meta name="description" content="Achieve Energy - High performance energy gel in sustainable spouted pouches. The future of fuel." />
        <style>{`
          @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500;700;900&family=Rajdhani:wght@300;400;500;600;700&display=swap');
          .font-orbitron { font-family: 'Orbitron', sans-serif; }
          .font-rajdhani { font-family: 'Rajdhani', sans-serif; }
          
          /* Neon Glue Effect */
          .neon-glow {
            text-shadow: 0 0 10px rgba(212, 255, 0, 0.5), 0 0 20px rgba(212, 255, 0, 0.3);
          }
          .neon-box {
            box-shadow: 0 0 15px rgba(212, 255, 0, 0.2), inset 0 0 10px rgba(212, 255, 0, 0.1);
          }
        `}</style>
      </Helmet>

      {/* Demo Banner */}
      <div className="fixed top-0 left-0 right-0 z-[60] bg-[#D4FF00] text-black py-1 px-4 font-bold font-rajdhani tracking-wider text-center uppercase text-sm">
        <Link to="/free-service/website-upgrade" className="hover:underline flex items-center justify-center gap-2">
          <ArrowLeft className="w-4 h-4" />
          Demo Site by Achieve Pack
        </Link>
      </div>

      {/* Navigation */}
      <nav className={`fixed top-[28px] w-full z-50 transition-all duration-300 ${scrolled ? 'bg-black/80 backdrop-blur-md border-b border-white/10' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Zap className="h-8 w-8 text-[#D4FF00] fill-[#D4FF00]" />
            <span className="font-orbitron font-bold text-2xl tracking-widest text-white">
              ACHIEVE<span className="text-[#D4FF00]">ENERGY</span>
            </span>
          </div>

          <div className="hidden md:flex items-center gap-8 font-rajdhani font-semibold text-lg tracking-wide">
            <a href="#products" className="hover:text-[#D4FF00] transition-colors">FLAVORS</a>
            <a href="#performance" className="hover:text-[#D4FF00] transition-colors">PERFORMANCE</a>
            <a href="#community" className="hover:text-[#D4FF00] transition-colors">COMMUNITY</a>
          </div>

          <div className="flex items-center gap-6">
            <button className="relative group" onClick={() => setCartCount(c => c + 1)}>
              <ShoppingCart className="w-6 h-6 text-white group-hover:text-[#D4FF00] transition-colors" />
              <span className="absolute -top-2 -right-2 bg-[#D4FF00] text-black text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">
                {cartCount}
              </span>
            </button>
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden"
            >
              <Menu className="w-8 h-8 text-white" />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            className="fixed inset-0 z-[55] bg-black/95 backdrop-blur-xl md:hidden flex flex-col items-center justify-center gap-8 font-orbitron text-2xl"
          >
            <button onClick={() => setIsMenuOpen(false)} className="absolute top-8 right-8">
              <X className="w-8 h-8 text-[#D4FF00]" />
            </button>
            <a href="#products" onClick={() => setIsMenuOpen(false)} className="text-[#D4FF00]">FLAVORS</a>
            <a href="#performance" onClick={() => setIsMenuOpen(false)}>PERFORMANCE</a>
            <a href="#community" onClick={() => setIsMenuOpen(false)}>COMMUNITY</a>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section className="relative min-h-screen pt-20 flex items-center justify-center overflow-hidden">
        {/* Background Video/Image */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black z-10" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#D4FF00]/10 via-transparent to-transparent z-10" />
          <img 
            src={ENERGY_IMAGES.hero} 
            alt="Hero Background" 
            className="w-full h-full object-cover opacity-60 scale-105 animate-pulse-slow"
          />
        </div>

        <div className="relative z-20 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 border border-[#D4FF00]/50 rounded-full px-4 py-1 mb-6 bg-black/50 backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-[#D4FF00] animate-ping" />
              <span className="font-rajdhani font-bold text-[#D4FF00] tracking-wider text-sm">SYSTEM ONLINE // V 2.0</span>
            </motion.div>
            
            <motion.h1 variants={fadeInUp} className="font-orbitron font-black text-6xl md:text-8xl leading-none mb-6">
              FUEL THE <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4FF00] to-white neon-glow">FUTURE.</span>
            </motion.h1>

            <motion.p variants={fadeInUp} className="font-rajdhani text-xl text-gray-400 mb-8 max-w-lg leading-relaxed">
              Next-gen hydration and energy in a sustainable, ultra-portable format. 
              No bottles. No waste. Just raw power.
            </motion.p>

            <motion.div variants={fadeInUp} className="flex flex-wrap gap-4">
              <button 
                onClick={() => setCartCount(c => c + 1)}
                className="bg-[#D4FF00] text-black font-orbitron font-bold text-lg px-8 py-4 clip-path-polygon hover:bg-white transition-colors duration-300"
                style={{ clipPath: 'polygon(10% 0, 100% 0, 100% 70%, 90% 100%, 0 100%, 0 30%)' }}
              >
                GET CHARGED
              </button>
              <button className="border border-white/30 text-white font-orbitron font-bold text-lg px-8 py-4 clip-path-polygon hover:bg-white/10 transition-colors duration-300"
                style={{ clipPath: 'polygon(10% 0, 100% 0, 100% 70%, 90% 100%, 0 100%, 0 30%)' }}
              >
                WATCH INTRO
              </button>
            </motion.div>
          </motion.div>

          {/* Floating Product Hero */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="hidden lg:block relative"
          >
             <div className="absolute inset-0 bg-[#D4FF00] blur-[150px] opacity-20 animate-pulse" />
             <img 
              src={activeProduct.image} 
              alt="Floating Product" 
              className="relative z-10 w-full max-w-[500px] mx-auto drop-shadow-2xl animate-float"
             />
          </motion.div>
        </div>
      </section>

      {/* Marquee */}
      <section className="bg-[#D4FF00] text-black py-4 border-y-4 border-white overflow-hidden">
        <ParallaxText baseVelocity={-3} textClassName="font-orbitron font-black text-4xl md:text-6xl italic mx-4 opacity-80">
          ENERGY • FOCUS • POWER • VELOCITY • SUSTAINABILITY • NO CRASH • 
        </ParallaxText>
      </section>

      {/* Product Selector Section */}
      <section id="products" className="py-24 relative overflow-hidden bg-neutral-900">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('/imgs/noise.png')] opacity-10 pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="font-orbitron font-bold text-4xl md:text-5xl mb-4">SELECT YOUR <span className="text-[#D4FF00]">SOURCE</span></h2>
            <div className="w-24 h-1 bg-[#D4FF00] mx-auto rounded-full" />
          </motion.div>

          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* Product List */}
            <div className="lg:col-span-4 space-y-4">
              {PRODUCTS.map((prod) => (
                <button
                  key={prod.id}
                  onClick={() => setActiveProduct(prod)}
                  className={`w-full text-left p-6 rounded-xl border-2 transition-all duration-300 group relative overflow-hidden ${activeProduct.id === prod.id ? `border-[${prod.color}] bg-white/5` : 'border-white/10 hover:border-white/30'}`}
                  style={{ borderColor: activeProduct.id === prod.id ? prod.color : '' }}
                >
                  <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity bg-gradient-to-r ${prod.gradient}`} />
                  <h3 className={`font-orbitron font-bold text-2xl mb-1 ${activeProduct.id === prod.id ? 'text-white' : 'text-gray-400 group-hover:text-white'}`}>
                    {prod.name}
                  </h3>
                  <p className="font-rajdhani font-medium text-sm text-gray-500 uppercase tracking-wider">{prod.tagline}</p>
                </button>
              ))}
            </div>

            {/* Product Display */}
            <div className="lg:col-span-8 relative bg-black rounded-3xl border border-white/10 p-8 md:p-12 overflow-hidden flex flex-col md:flex-row items-center gap-12 min-h-[500px]">
               {/* Background Glow */}
               <div 
                 className="absolute inset-0 opacity-20 transition-colors duration-500"
                 style={{ background: `radial-gradient(circle at center, ${activeProduct.color}, transparent 70%)` }}
               />

               {/* Image */}
               <motion.div 
                 key={activeProduct.id}
                 initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
                 animate={{ opacity: 1, scale: 1, rotate: 0 }}
                 transition={{ type: "spring", stiffness: 100 }}
                 className="w-full md:w-1/2 relative z-10 flex justify-center"
               >
                 <img src={activeProduct.image} alt={activeProduct.name} className="max-h-[400px] object-contain drop-shadow-[0_0_30px_rgba(255,255,255,0.2)]" />
               </motion.div>

               {/* Details */}
               <div className="w-full md:w-1/2 relative z-10">
                 <motion.div
                   key={`${activeProduct.id}-text`}
                   initial={{ opacity: 0, x: 20 }}
                   animate={{ opacity: 1, x: 0 }}
                   transition={{ duration: 0.4 }}
                 >
                   <h3 className="font-orbitron font-black text-4xl mb-2" style={{ color: activeProduct.color }}>{activeProduct.name.toUpperCase()}</h3>
                   <div className="flex items-center gap-4 mb-6">
                     <span className="bg-white/10 px-3 py-1 rounded text-xs font-bold uppercase tracking-wider">Sugar Free</span>
                     <span className="bg-white/10 px-3 py-1 rounded text-xs font-bold uppercase tracking-wider">Vegan</span>
                     <span className="bg-white/10 px-3 py-1 rounded text-xs font-bold uppercase tracking-wider">GF</span>
                   </div>
                   <p className="font-rajdhani text-lg text-gray-300 mb-8 leading-relaxed">
                     {activeProduct.description}
                   </p>
                   
                   {/* Stats Grid */}
                   <div className="grid grid-cols-3 gap-4 mb-8">
                      {Object.entries(activeProduct.stats).map(([key, val]) => (
                        <div key={key} className="bg-white/5 p-3 rounded border border-white/10 text-center">
                          <div className="font-orbitron font-bold text-xl text-white">{val}</div>
                          <div className="text-[10px] uppercase text-gray-500 font-bold">{key}</div>
                        </div>
                      ))}
                   </div>

                   <div className="flex items-center justify-between">
                     <span className="font-orbitron font-bold text-3xl">${activeProduct.price}</span>
                     <button
                       onClick={() => setCartCount(c => c + 1)}
                       className="text-black px-8 py-3 font-bold font-orbitron uppercase tracking-wide hover:scale-105 transition-transform"
                       style={{ backgroundColor: activeProduct.color }}
                     >
                       Add to Cart
                     </button>
                   </div>
                 </motion.div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Scroll Triggered Features */}
      <section id="performance" className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-6 mb-16 text-center">
          <h2 className="font-orbitron font-bold text-4xl md:text-5xl mb-4">ENGINEERED FOR <span className="text-[#D4FF00]">DOMINANCE</span></h2>
          <p className="font-rajdhani text-xl text-gray-400">The most advanced energy delivery system on the planet.</p>
        </div>
        <ScrollTriggeredCards cards={FEATURE_CARDS} />
      </section>

      {/* Lifestyle / Community */}
      <section id="community" className="py-0 relative">
        <div className="grid md:grid-cols-2 h-[80vh]">
          <div className="relative group overflow-hidden">
            <img src={ENERGY_IMAGES.lifestyle} alt="Gym Lifestyle" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors flex items-center justify-center">
               <div className="text-center p-8 bg-black/60 backdrop-blur-md rounded-2xl border border-white/20 transform translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                 <h3 className="font-orbitron font-bold text-3xl mb-2">JOIN THE SQUAD</h3>
                 <p className="font-rajdhani text-gray-300 mb-4">Share your achievements. Tag #AchieveEnergy</p>
                 <div className="flex justify-center gap-4">
                   <Instagram className="w-6 h-6 hover:text-[#D4FF00] cursor-pointer" />
                   <Twitter className="w-6 h-6 hover:text-[#D4FF00] cursor-pointer" />
                   <Facebook className="w-6 h-6 hover:text-[#D4FF00] cursor-pointer" />
                 </div>
               </div>
            </div>
          </div>
          <div className="bg-[#111] flex flex-col justify-center p-12 lg:p-24 relative overflow-hidden">
             <div className="absolute top-0 right-0 p-20 bg-[#D4FF00] blur-[150px] opacity-10 pointer-events-none" />
             
             <Activity className="w-16 h-16 text-[#D4FF00] mb-8" />
             <h2 className="font-orbitron font-bold text-4xl md:text-6xl mb-6">UNSTOPPABLE MOMENTUM</h2>
             <p className="font-rajdhani text-xl text-gray-400 mb-8 leading-relaxed">
               Whether you're crushing a PR, coding a marathon, or dominating the lobby, Achieve Energy provides the clean, sustained fuel you need to win.
             </p>
             <button className="self-start border-2 border-[#D4FF00] text-[#D4FF00] px-8 py-3 font-orbitron font-bold text-lg hover:bg-[#D4FF00] hover:text-black transition-all">
                READ THE SCIENCE
             </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-neutral-900 border-t border-white/10 pt-20 pb-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-2">
              <div className="flex items-center gap-2 mb-6">
                 <Zap className="h-6 w-6 text-[#D4FF00] fill-[#D4FF00]" />
                 <span className="font-orbitron font-bold text-2xl tracking-widest text-white">ACHIEVE<span className="text-[#D4FF00]">ENERGY</span></span>
              </div>
              <p className="font-rajdhani text-gray-500 max-w-sm">
                The future of performance nutrition. 
                Sustainable packaging. 
                Uncompromising power.
              </p>
            </div>
            <div>
              <h4 className="font-orbitron font-bold mb-6 text-white">SHOP</h4>
              <ul className="space-y-4 font-rajdhani text-gray-400 text-lg">
                <li><a href="#" className="hover:text-[#D4FF00] transition-colors">All Products</a></li>
                <li><a href="#" className="hover:text-[#D4FF00] transition-colors">Apparel</a></li>
                <li><a href="#" className="hover:text-[#D4FF00] transition-colors">Bundles</a></li>
                <li><a href="#" className="hover:text-[#D4FF00] transition-colors">Subscribe & Save</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-orbitron font-bold mb-6 text-white">SUPPORT</h4>
              <ul className="space-y-4 font-rajdhani text-gray-400 text-lg">
                <li><a href="#" className="hover:text-[#D4FF00] transition-colors">FAQ</a></li>
                <li><a href="#" className="hover:text-[#D4FF00] transition-colors">Contact Us</a></li>
                <li><a href="#" className="hover:text-[#D4FF00] transition-colors">Shipping</a></li>
                <li><a href="#" className="hover:text-[#D4FF00] transition-colors">Returns</a></li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5 font-rajdhani text-gray-500 text-sm">
            <p>© 2026 Achieve Energy. All rights reserved.</p>
            <div className="flex items-center gap-1">
               Powered by <Link to="/" className="text-white font-bold hover:text-[#D4FF00] transition-colors">Achieve Pack</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
