import React, { useState, useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Menu, X, Facebook, Instagram, Twitter, ArrowRight, 
  MapPin, ShoppingBag, Search, ChevronRight, Droplet, 
  Leaf, Zap, Star, Sun, Heart
} from 'lucide-react'
import { Link } from 'react-router-dom'
import GeoBlocker from '../../components/GeoBlocker'
import CookieConsent from '../../components/CookieConsent'

// ============================================
// BRAND ASSETS & CONSTANTS
// ============================================
const ASSETS = {
  hero: '/imgs/demo-site/muesli/hero.png',
  lifestyle: '/imgs/demo-site/muesli/lifestyle.png',
  berries: '/imgs/demo-site/muesli/berries.png',
  chocolate: '/imgs/demo-site/muesli/chocolate.png',
}

const PRODUCTS = [
  {
    id: 'wild-berry',
    name: 'Wild Berry & Nut',
    flavor: 'Tangy & Sweet',
    price: 9.50,
    image: ASSETS.berries,
    accent: 'bg-[#FF007F]', // Hot Pink
    bgAccent: 'bg-[#FF007F]/10',
    desc: 'An explosion of freeze-dried strawberries, raspberries, and crunchy almonds. Vibrant energy in every bowl.'
  },
  {
    id: 'cocoa-coconut',
    name: 'Cocoa & Coconut',
    flavor: 'Tropical Indulgence',
    price: 9.50,
    image: ASSETS.chocolate,
    accent: 'bg-[#FFD700]', // Electric Gold
    bgAccent: 'bg-[#FFD700]/10',
    desc: 'Toasted coconut flakes meets rich fair-trade cocoa nibs. A party for your tastebuds that wakes you up.'
  }
]

// ============================================
// ANIMATION VARIANTS
// ============================================
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
}

const popIn = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: { scale: 1, opacity: 1, transition: { type: "spring", stiffness: 200 } }
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
}

// ============================================
// COMPONENTS
// ============================================

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-lg py-4 border-b-4 border-[#00FFFF]' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <Link to="/free-service/achieve-muesli-demo" className="text-3xl font-black italic tracking-tighter text-[#1A1A1A] flex items-center gap-2">
          <span className="bg-[#00FFFF] text-[#1A1A1A] px-2 py-1 -rotate-3 border-2 border-[#1A1A1A] shadow-[4px_4px_0px_0px_#FF007F]">AM</span>
          ACHIEVE
        </Link>
        
        <div className="hidden md:flex items-center gap-8 text-[#1A1A1A] font-bold uppercase tracking-wide">
          <a href="#" className="hover:text-[#FF007F] hover:-translate-y-1 transition-transform">Flavors</a>
          <a href="#" className="hover:text-[#00FFFF] hover:-translate-y-1 transition-transform">Vibe</a>
          <a href="#" className="hover:text-[#FFD700] hover:-translate-y-1 transition-transform">Club</a>
          <button className="p-2 hover:bg-[#1A1A1A] hover:text-white rounded-full transition border-2 border-[#1A1A1A]"><Search className="w-5 h-5" /></button>
          <button className="p-2 bg-[#FF007F] text-white rounded-full transition border-2 border-[#1A1A1A] shadow-[2px_2px_0px_0px_#1A1A1A] hover:translate-y-[2px] hover:shadow-none"><ShoppingBag className="w-5 h-5" /></button>
        </div>

        <button className="md:hidden p-2 text-[#1A1A1A]" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X strokeWidth={3} /> : <Menu strokeWidth={3} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t-4 border-[#1A1A1A] overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-4 font-black text-xl text-[#1A1A1A] uppercase">
              <a href="#" className="py-2 border-b-2 border-dashed border-[#1A1A1A]/20">Flavors</a>
              <a href="#" className="py-2 border-b-2 border-dashed border-[#1A1A1A]/20">Vibe</a>
              <a href="#" className="py-2 border-b-2 border-dashed border-[#1A1A1A]/20">Club</a>
              <a href="#" className="py-2 text-[#FF007F]">Login</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

const Hero = () => {
  return (
    <section className="relative min-h-screen pt-32 pb-20 px-6 overflow-hidden bg-[#FFFBF0]">
      {/* Pop Art Background Elements */}
      <div className="absolute top-20 right-20 w-64 h-64 bg-[#00FFFF] rounded-full blur-[100px] opacity-20" />
      <div className="absolute bottom-20 left-20 w-80 h-80 bg-[#FF007F] rounded-full blur-[100px] opacity-20" />
      <div className="absolute top-1/2 left-1/4 w-40 h-40 bg-[#FFD700] rounded-full blur-[80px] opacity-30" />

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center relative z-10">
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="space-y-8"
        >
          <motion.div variants={popIn} className="inline-block bg-[#1A1A1A] text-white px-6 py-2 text-sm font-black tracking-widest uppercase -rotate-2 shadow-[6px_6px_0px_0px_#00FFFF]">
             The Coolest Pouches on Earth 🌍
          </motion.div>
          
          <motion.h1 variants={fadeInUp} className="text-6xl md:text-8xl font-black text-[#1A1A1A] leading-[0.9] tracking-tighter">
            WAKE UP <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF007F] via-[#FFD700] to-[#00FFFF]">VIBRANT.</span>
          </motion.h1>
          
          <motion.p variants={fadeInUp} className="text-2xl text-[#1A1A1A] font-bold max-w-lg leading-tight">
            Premium muesli in full-print <span className="text-[#FF007F] underline decoration-4 decoration-[#00FFFF]">Nano Banana Pro™</span> pouches. 
            Sustainable never looked this loud.
          </motion.p>
          
          <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-6">
            <button className="px-8 py-4 bg-[#00FFFF] text-[#1A1A1A] border-4 border-[#1A1A1A] font-black text-xl hover:-translate-y-1 hover:shadow-[8px_8px_0px_0px_#1A1A1A] transition-all">
              GET THE BUNDLE
            </button>
            <button className="px-8 py-4 bg-white text-[#1A1A1A] border-4 border-[#1A1A1A] font-black text-xl hover:-translate-y-1 hover:shadow-[8px_8px_0px_0px_#FF007F] transition-all">
              READ THE SCIENCE
            </button>
          </motion.div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 100, rotate: 10 }}
          animate={{ opacity: 1, x: 0, rotate: 0 }}
          transition={{ type: "spring", stiffness: 50, delay: 0.2 }}
          className="relative"
        >
          <div className="relative z-10 w-full max-w-[600px] mx-auto">
            <img src={ASSETS.hero} alt="Achieve Muesli Collection" className="w-full drop-shadow-[20px_20px_0px_rgba(0,255,255,0.2)]" />
          </div>
          {/* Graphic Elements */}
          <div className="absolute -top-10 -right-10 text-[#FF007F] animate-bounce delay-700">
             <Star size={64} fill="#FF007F" strokeWidth={3} stroke="#1A1A1A" />
          </div>
          <div className="absolute -bottom-10 -left-10 text-[#FFD700] animate-spin-slow">
             <Sun size={80} fill="#FFD700" strokeWidth={3} stroke="#1A1A1A" />
          </div>
        </motion.div>
      </div>
    </section>
  )
}

const ProductCard = ({ product }: { product: typeof PRODUCTS[0] }) => {
  return (
    <motion.div 
      variants={fadeInUp}
      className={`group bg-white border-4 border-[#1A1A1A] p-8 shadow-[10px_10px_0px_0px_#1A1A1A] hover:shadow-[15px_15px_0px_0px_#1A1A1A] hover:-translate-y-2 transition-all duration-300 relative overflow-hidden`}
    >
      <div className={`absolute top-0 right-0 w-32 h-32 ${product.accent} rounded-bl-full opacity-20`} />
      
      <div className="relative mb-8 flex justify-center h-64">
        <img 
          src={product.image} 
          alt={product.name} 
          className="h-full object-contain group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300 drop-shadow-xl"
        />
      </div>
      
      <div className="space-y-4">
        <div>
          <span className={`inline-block px-3 py-1 text-xs font-black uppercase text-white ${product.accent} border-2 border-[#1A1A1A] mb-2`}>
             {product.flavor}
          </span>
          <h3 className="text-3xl font-black text-[#1A1A1A] leading-tight">{product.name}</h3>
        </div>
        
        <p className="text-[#1A1A1A] font-bold text-sm leading-relaxed">
          {product.desc}
        </p>
        
        <div className="flex items-center justify-between pt-4">
           <span className="text-2xl font-black text-[#1A1A1A]">${product.price}</span>
           <button className="w-12 h-12 bg-[#1A1A1A] hover:bg-[#FF007F] text-white flex items-center justify-center transition-colors">
              <span className="font-bold text-xl">+</span>
           </button>
        </div>
      </div>
    </motion.div>
  )
}

const Products = () => {
  return (
    <section className="py-24 px-6 bg-[#1A1A1A]">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center mb-16"
        >
          <span className="bg-[#00FFFF] text-[#1A1A1A] px-4 py-1 text-lg font-black uppercase inline-block -rotate-2 border-2 border-white mb-6">
             Limited Drops
          </span>
          <h2 className="text-5xl md:text-7xl font-black text-white mb-6">PICK YOUR POISON</h2>
          <p className="text-white/70 max-w-2xl mx-auto text-xl font-bold">
            Actually, it's the opposite of poison. It's life-giving organic fuel.
          </p>
        </motion.div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto"
        >
          {PRODUCTS.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}

const Feature = ({ icon: Icon, title, desc, color }: any) => (
  <motion.div 
    variants={fadeInUp} 
    className="flex flex-col items-center text-center p-8 bg-white border-4 border-[#1A1A1A] shadow-[8px_8px_0px_0px_#1A1A1A]"
  >
    <div className={`w-20 h-20 ${color} border-4 border-[#1A1A1A] rounded-full flex items-center justify-center text-[#1A1A1A] mb-6 shadow-[4px_4px_0px_0px_#1A1A1A]`}>
      <Icon className="w-10 h-10" strokeWidth={2.5} />
    </div>
    <h3 className="text-2xl font-black text-[#1A1A1A] mb-3 uppercase">{title}</h3>
    <p className="text-[#1A1A1A] font-bold leading-relaxed">{desc}</p>
  </motion.div> 
)

const Features = () => {
  return (
    <section className="py-24 px-6 bg-[#FF007F]">
       <div className="max-w-7xl mx-auto">
         <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-3 gap-8"
         >
            <Feature 
               icon={Leaf} 
               title="Nano Banana Tech" 
               desc="Proprietary plant fiber packaging that composts in your timeline. No plastic guilt."
               color="bg-[#00FFFF]"
            />
            <Feature 
               icon={Heart} 
               title="Full Body Print" 
               desc="High-impact visuals printed edge-to-edge. No stickers using harmful adhesives."
               color="bg-[#FFD700]"
            />
            <Feature 
               icon={Zap} 
               title="Energy Dense" 
               desc="Packed with superfoods to fuel your main character energy all day long."
               color="bg-white"
            />
         </motion.div>
       </div>
    </section>
  )
}

const Lifestyle = () => {
  return (
    <section className="py-0 relative overflow-hidden bg-[#FFFBF0] border-t-4 border-[#1A1A1A]">
      <div className="grid lg:grid-cols-2">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="border-r-4 border-[#1A1A1A] min-h-[500px] lg:min-h-[800px]"
        >
           <img src={ASSETS.lifestyle} alt="Muesli Lifestyle" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" />
        </motion.div>
        
        <div className="flex items-center justify-center p-12 lg:p-24 bg-[#00FFFF]">
           <motion.div 
             initial={{ opacity: 0, x: 50 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             className="space-y-8 max-w-lg"
           >
             <div className="bg-[#1A1A1A] text-white px-4 py-2 text-sm font-black uppercase inline-block -rotate-1">
                The New Standard
             </div>
             <h2 className="text-5xl md:text-7xl font-black text-[#1A1A1A] leading-none">
                EAT GOOD.<br />
                LOOK GOOD.<br />
                DO GOOD.
             </h2>
             <p className="text-[#1A1A1A] text-xl font-bold leading-relaxed border-l-4 border-[#1A1A1A] pl-6">
               Stop hiding your breakfast in the pantry. Achieve Muesli is designed to be seen. 
               Bold flavors in bold, compostable packaging. 
             </p>
             
             <button className="px-10 py-5 bg-[#1A1A1A] text-white rounded-full font-black text-xl hover:bg-[#FF007F] transition-colors shadow-[8px_8px_0px_0px_white]">
               JOIN THE MOVEMENT
             </button>
           </motion.div>
        </div>
      </div>
    </section>
  )
}

const Footer = () => {
  return (
    <footer className="bg-[#1A1A1A] text-white pt-24 pb-12 px-6">
      <div className="max-w-7xl mx-auto text-center space-y-12">
        <Link to="/free-service/achieve-muesli-demo" className="text-5xl md:text-9xl font-black tracking-tighter opacity-10 hover:opacity-100 transition-opacity duration-500 block">
          ACHIEVE
        </Link>
        
        <div className="flex justify-center gap-8">
           <a href="#" className="w-12 h-12 rounded-full border-2 border-white flex items-center justify-center hover:bg-[#FF007F] hover:border-[#FF007F] transition-colors"><Instagram /></a>
           <a href="#" className="w-12 h-12 rounded-full border-2 border-white flex items-center justify-center hover:bg-[#00FFFF] hover:border-[#00FFFF] hover:text-[#1A1A1A] transition-colors"><Twitter /></a>
           <a href="#" className="w-12 h-12 rounded-full border-2 border-white flex items-center justify-center hover:bg-[#FFD700] hover:border-[#FFD700] hover:text-[#1A1A1A] transition-colors"><Facebook /></a>
        </div>
        
        <div className="border-t border-white/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm font-bold text-white/40">
           <p>© 2026 Achieve Muesli. All rights reserved.</p>
           <p>Powered by AchievePack</p>
        </div>
      </div>
    </footer>
  )
}

const DemoBanner = () => (
   <div className="fixed bottom-4 right-4 z-[60] max-w-sm bg-white p-4 border-4 border-[#1A1A1A] shadow-[8px_8px_0px_0px_#00FFFF] animate-in slide-in-from-bottom duration-1000">
      <div className="flex items-start gap-4">
         <div className="p-2 bg-[#FF007F] border-2 border-[#1A1A1A]">
            <Zap className="h-6 w-6 text-white" />
         </div>
         <div>
            <h4 className="font-black text-[#1A1A1A] text-lg uppercase">Demo Store</h4>
            <p className="text-[#1A1A1A] font-bold text-xs mt-1 mb-2">
               Showcasing "Nano Banana Pro" full-print flat pouches. Vibrant, compostable, awesome.
            </p>
            <Link 
               to="/free-service/website-upgrade"
               className="text-[#1A1A1A] text-xs font-black uppercase hover:text-[#FF007F] flex items-center gap-1"
            >
               Get your demo <ArrowRight className="h-3 w-3" />
            </Link>
         </div>
         <button onClick={(e) => e.currentTarget.parentElement?.parentElement?.remove()} className="text-[#1A1A1A] hover:bg-[#1A1A1A] hover:text-white transition-colors p-1">
            <X className="h-4 w-4" strokeWidth={3} />
         </button>
      </div>
   </div>
)

// ============================================
// MAIN PAGE COMPONENT
// ============================================
export default function AchieveMuesliDemoPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <Helmet>
        <title>Achieve Muesli | Vibrant Organic Breakfast</title>
        <meta name="description" content="Wake up vibrant with Achieve Muesli. Premium organic muesli in compostable, full-print Nano Banana Pro pouches." />
      </Helmet>
      
      <div className="min-h-screen bg-[#FFFBF0] font-sans selection:bg-[#00FFFF] selection:text-[#1A1A1A]">
        <GeoBlocker />
        <Navbar />
        <Hero />
        <Products />
        <Features />
        <Lifestyle />
        <Footer />
        <DemoBanner />
        <CookieConsent />
      </div>
    </>
  )
}
