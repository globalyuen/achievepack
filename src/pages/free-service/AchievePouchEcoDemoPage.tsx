import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { 
  ShoppingBag, Search, Menu, X, ArrowRight, ArrowLeft, 
  Leaf, Recycle, ShieldCheck, Globe, CheckCircle
} from 'lucide-react'
import { Link } from 'react-router-dom'
import GeoBlocker from '../../components/GeoBlocker'
import CookieConsent from '../../components/CookieConsent'

// ============================================
// BRAND ASSETS (Using existing placeholders)
// ============================================
const ASSETS = {
  // Using generic images from the project if specific ones aren't available yet
  hero: '/imgs/pouch-shape/ads/a_achieve_pack_structure_overview_7409393.webp', 
  lifestyle: '/imgs/surface/ads/a_achieve_pack_main_kv_six_finishes_3535755.webp',
  flatBottom: '/imgs/pouch-shape/ads/a_achieve_pack_size_closure_options_7735113.webp',
  standUp: '/imgs/pouch-shape/ads/a_achieve_pack_brand_closing_6612868.webp',
  spout: '/imgs/pouch-shape/ads/a_achieve_pack_spout_pouch_closeup_5874382.webp',
  rollstock: '/imgs/pouch-shape/ads/a_achieve_pack_rollstock_closeup_5394787.webp',
}

const PRODUCTS = [
  {
    id: 'flat-bottom',
    name: 'Flat Bottom Pouch',
    desc: 'Our most popular standing pouch.',
    price: 320,
    unit: ' / 1000 pcs',
    image: ASSETS.flatBottom
  },
  {
    id: 'stand-up',
    name: 'Stand Up Pouch',
    desc: 'Classic versatility for any product.',
    price: 280,
    unit: ' / 1000 pcs',
    image: ASSETS.standUp
  },
  {
    id: 'spout-pouch',
    name: 'Spout Pouch',
    desc: 'Liquid-ready with secure closure.',
    price: 450,
    unit: ' / 1000 pcs',
    image: ASSETS.spout
  },
  {
    id: 'rollstock',
    name: 'Auto-Pack Rollstock',
    desc: 'High-speed efficiency film.',
    price: 150,
    unit: ' / 100 meters',
    image: ASSETS.rollstock
  }
]

// ============================================
// ANIMATIONS
// ============================================
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
}

const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
}

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled ? 'bg-[#FDFCF8]/90 backdrop-blur-md py-4 border-b border-emerald-900/10' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <Link to="/free-service/achieve-pouch-eco-demo" className="text-2xl font-serif font-bold tracking-tight text-emerald-950 flex items-center gap-2">
          <div className="w-8 h-8 bg-emerald-700 rounded-full flex items-center justify-center text-white">
            <Leaf className="w-4 h-4" />
          </div>
          pouch.eco
        </Link>

        <div className="hidden md:flex gap-8 text-sm font-medium text-emerald-900/60">
          <a href="#" className="hover:text-emerald-900 transition-colors">Products</a>
          <a href="#" className="hover:text-emerald-900 transition-colors">Mission</a>
          <a href="#" className="hover:text-emerald-900 transition-colors">Impact</a>
        </div>

        <div className="hidden md:flex gap-6 items-center">
             <button className="text-sm font-bold text-emerald-800 border bg-emerald-50 border-emerald-200 px-5 py-2 rounded-full hover:bg-emerald-100 transition-colors">
                Get Samples
             </button>
        </div>

        <button className="md:hidden text-emerald-900" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-[#FDFCF8] border-b border-emerald-100 p-6 md:hidden shadow-xl">
          <div className="flex flex-col gap-6 text-center font-serif text-xl text-emerald-900">
            <a href="#">Products</a>
            <a href="#">Mission</a>
            <a href="#">Impact</a>
          </div>
        </div>
      )}
    </nav>
  )
}

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] pt-32 pb-20 px-6 bg-[#FDFCF8] flex items-center overflow-hidden">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={stagger}
          className="space-y-8 relative z-10"
        >
          <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100/50 border border-emerald-200 text-emerald-800 text-xs font-bold uppercase tracking-wider">
             <Globe className="w-3 h-3" />
             Global Shipping
          </motion.div>
          
          <motion.h1 variants={fadeUp} className="text-6xl md:text-8xl font-serif text-emerald-950 leading-[1.05] tracking-tight">
            Make pouch <br />
            packaging <span className="text-emerald-600 italic">eco.</span>
          </motion.h1>
          
          <motion.p variants={fadeUp} className="text-xl text-emerald-900/70 max-w-md font-light leading-relaxed">
            Switch to certified plant-based materials. Compostable, plastic-free, and designed for circular economy.
            <span className="block mt-4 font-medium text-emerald-800">Up to 70% carbon footprint reduction.</span>
          </motion.p>
          
          <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 pt-4">
             <div className="relative">
                <input 
                  type="email" 
                  placeholder="Enter your email to start" 
                  className="bg-white border border-emerald-200 placeholder:text-emerald-300 text-emerald-900 px-6 py-4 rounded-full w-full sm:w-80 focus:outline-none focus:ring-2 focus:ring-emerald-500 shadow-sm"
                />
                <button className="absolute right-2 top-2 bottom-2 bg-emerald-800 text-white px-6 rounded-full font-bold text-sm hover:bg-emerald-700 transition-colors">
                  Join
                </button>
             </div>
          </motion.div>
          
          <motion.div variants={fadeUp} className="flex gap-6 items-center pt-4">
             <div className="flex -space-x-3">
               {[1,2,3,4].map(i => (
                 <div key={i} className="w-10 h-10 rounded-full border-2 border-[#FDFCF8] bg-emerald-100 overflow-hidden">
                   <img src={`https://randomuser.me/api/portraits/thumb/men/${i+20}.jpg`} alt="User" className="w-full h-full object-cover opacity-80" />
                 </div>
               ))}
             </div>
             <p className="text-sm text-emerald-800/60 font-medium">Trusted by 500+ eco-brands</p>
          </motion.div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95, rotate: 2 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="relative h-[600px] w-full rounded-[3rem] overflow-hidden shadow-2xl border-[8px] border-white"
        >
          <img 
            src={ASSETS.hero} 
            alt="Eco Friendly Pouches" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/40 to-transparent"></div>
          
          {/* Floating UI Card */}
          <div className="absolute bottom-8 left-8 right-8 bg-white/90 backdrop-blur rounded-2xl p-6 shadow-lg border border-white/40">
             <div className="flex justify-between items-end">
                <div>
                   <p className="text-xs uppercase tracking-widest text-emerald-600 font-bold mb-1">Material Science</p>
                   <h3 className="text-2xl font-serif text-emerald-950">Bio-Based Polymer</h3>
                </div>
                <div className="text-right">
                   <p className="text-3xl font-bold text-emerald-700">100%</p>
                   <p className="text-xs text-emerald-600">Compostable</p>
                </div>
             </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

const Comparison = () => {
    return (
        <section className="py-24 px-6 bg-[#E7F0EA]">
            <div className="max-w-7xl mx-auto">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <span className="text-emerald-600 font-bold text-sm uppercase tracking-wider">The Problem</span>
                        <h2 className="text-4xl md:text-5xl font-serif text-emerald-950 mt-4 mb-6 leading-tigher">
                            Plastic lasts forever. <br />
                            <span className="opacity-40">Your packaging shouldn't.</span>
                        </h2>
                        <p className="text-emerald-800/70 text-lg leading-relaxed mb-8">
                            Most flexible packaging is made from multi-layer mixed plastics that are impossible to recycle. They end up in landfills or oceans for centuries.
                        </p>
                        
                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shrink-0 text-red-500 shadow-sm">
                                    <X className="w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="text-xl font-serif text-emerald-950">Traditional Plastic</h4>
                                    <p className="text-emerald-800/60 text-sm mt-1">Takes 400+ years to decompose. High carbon footprint.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-full bg-emerald-600 flex items-center justify-center shrink-0 text-white shadow-lg shadow-emerald-600/20">
                                    <CheckCircle className="w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="text-xl font-serif text-emerald-950">Pouch.eco Material</h4>
                                    <p className="text-emerald-800/60 text-sm mt-1">Certified home compostable. Decomposes in 180 days.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="bg-white rounded-[2rem] p-10 shadow-xl border border-emerald-100 relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-6 opacity-10">
                            <Recycle className="w-64 h-64 text-emerald-900" />
                        </div>
                        <h3 className="text-2xl font-serif text-emerald-950 mb-8 relative z-10">Carbon Impact Comparison</h3>
                        
                        <div className="space-y-8 relative z-10">
                            <div>
                                <div className="flex justify-between text-sm font-bold text-gray-500 mb-2">
                                    <span>Standard PET/ALU/PE Pouch</span>
                                    <span>High Impact</span>
                                </div>
                                <div className="h-4 bg-gray-100 rounded-full overflow-hidden">
                                    <div className="h-full bg-gray-400 w-[95%]"></div>
                                </div>
                            </div>
                            <div>
                                <div className="flex justify-between text-sm font-bold text-emerald-800 mb-2">
                                    <span>Pouch.eco Compostable</span>
                                    <span>-70% CO₂</span>
                                </div>
                                <div className="h-4 bg-emerald-50 rounded-full overflow-hidden">
                                    <div className="h-full bg-emerald-500 w-[25%] shadow-[0_0_20px_rgba(16,185,129,0.5)]"></div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="mt-10 pt-8 border-t border-emerald-50 grid grid-cols-2 gap-4">
                            <div className="text-center">
                                <p className="text-3xl font-bold text-emerald-950">180</p>
                                <p className="text-xs text-emerald-600 uppercase font-bold mt-1">Days to Compost</p>
                            </div>
                             <div className="text-center">
                                <p className="text-3xl font-bold text-emerald-950">0</p>
                                <p className="text-xs text-emerald-600 uppercase font-bold mt-1">Microplastics</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

const Shop = () => {
    return (
        <section className="py-32 px-6 bg-[#FDFCF8]">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-24 space-y-4">
                    <span className="text-xs font-bold tracking-[0.2em] text-emerald-600 uppercase border border-emerald-200 px-4 py-1 rounded-full">Collection</span>
                    <h2 className="font-serif text-5xl md:text-6xl text-emerald-950">Certified Solutions</h2>
                    <p className="text-lg text-emerald-900/60 max-w-2xl mx-auto">Available in low MOQ for startups. Digital printing included.</p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {PRODUCTS.map((product) => (
                        <motion.div 
                            key={product.id}
                            whileHover={{ y: -10 }}
                            className="group bg-white rounded-3xl p-6 border border-emerald-50 hover:border-emerald-200 shadow-sm hover:shadow-xl transition-all duration-300"
                        >
                            <div className="aspect-[4/5] rounded-2xl bg-[#F4F8F5] mb-6 overflow-hidden relative">
                                <img src={product.image} alt={product.name} className="w-full h-full object-contain mix-blend-multiply p-4 transition-transform group-hover:scale-105" />
                                <div className="absolute top-3 right-3 bg-white px-2 py-1 rounded-md text-[10px] font-bold text-emerald-800 uppercase shadow-sm">
                                    MOQ 100
                                </div>
                            </div>
                            <h3 className="text-xl font-serif text-emerald-950 font-bold">{product.name}</h3>
                            <p className="text-sm text-emerald-600/80 mb-4">{product.desc}</p>
                            <div className="flex items-center justify-between border-t border-emerald-50 pt-4">
                                <div className="text-emerald-950 font-bold">${product.price}<span className="text-[10px] font-normal text-emerald-400">{product.unit}</span></div>
                                <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                                    <ShoppingBag className="w-4 h-4" />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

const Certifications = () => (
    <section className="py-16 bg-emerald-950 text-white/80">
        <div className="max-w-7xl mx-auto text-center px-6">
            <h4 className="text-sm font-bold uppercase tracking-widest mb-10 opacity-50">Internationally Certified</h4>
            <div className="flex flex-wrap justify-center gap-12 md:gap-24 items-center grayscale hover:grayscale-0 transition-all duration-500">
               {/* Reusing existing assets implicitly or just text design for now if assets missing */}
               <div className="flex flex-col items-center gap-2">
                  <ShieldCheck className="w-12 h-12" />
                  <span className="font-serif">EN 13432</span>
               </div>
               <div className="flex flex-col items-center gap-2">
                  <Leaf className="w-12 h-12" />
                  <span className="font-serif">BPI Certified</span>
               </div>
               <div className="flex flex-col items-center gap-2">
                   <Recycle className="w-12 h-12" />
                   <span className="font-serif">GRS Verified</span>
               </div>
               <div className="flex flex-col items-center gap-2">
                   <Globe className="w-12 h-12" />
                   <span className="font-serif">ASTM D6400</span>
               </div>
            </div>
        </div>
    </section>
)

const Footer = () => {
  return (
    <footer className="bg-[#FDFCF8] pt-24 pb-12 px-6 border-t border-emerald-100">
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center space-y-12">
        <Link to="/free-service/achieve-pouch-eco-demo" className="text-4xl font-serif text-emerald-950 font-bold flex items-center gap-2">
            <div className="w-10 h-10 bg-emerald-800 rounded-full flex items-center justify-center text-white">
                <Leaf className="w-5 h-5" />
            </div>
            pouch.eco
        </Link>
        <div className="flex gap-8 text-xs tracking-widest text-emerald-900/40 uppercase">
          <a href="#" className="hover:text-emerald-900">Instagram</a>
          <a href="#" className="hover:text-emerald-900">LinkedIn</a>
          <a href="#" className="hover:text-emerald-900">Email</a>
        </div>
        <p className="text-xs text-emerald-900/20">© 2026 Achieve Pack Demo. All materials plant-based.</p>
      </div>
    </footer>
  )
}

const DemoBanner = () => (
   <div className="fixed bottom-8 left-8 z-[60] max-w-xs bg-white/90 backdrop-blur border border-emerald-100 p-6 shadow-2xl animate-in slide-in-from-bottom duration-1000 rounded-2xl">
      <h4 className="font-serif text-xl mb-2 text-emerald-950">Demo Concept</h4>
      <p className="text-xs text-emerald-600 leading-relaxed mb-4">
          showcasing "Trumprx Style" minimalism with an <strong>Eco-Friendly</strong> twist for pouch.eco content.
      </p>
      <Link 
         to="/free-service/website-upgrade"
         className="text-xs font-bold uppercase tracking-widest text-emerald-800 border-b border-emerald-800 pb-1 hover:text-emerald-600 hover:border-emerald-600 transition-colors"
      >
         Get Your Demo
      </Link>
   </div>
)

export default function AchievePouchEcoDemoPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <GeoBlocker>
      <Helmet>
        <title>Pouch.eco Demo | Sustainable Packaging Solutions</title>
        <meta name="description" content="Make your packaging eco. Certified compostable pouches with low MOQ digital printing." />
      </Helmet>
      
      <div className="min-h-screen bg-[#FDFCF8] font-sans text-emerald-950 selection:bg-emerald-200 selection:text-emerald-950">
        {/* Demo Banner */}
        <div className="fixed top-0 left-0 right-0 z-[60] bg-emerald-950 text-emerald-50 py-1 px-4 font-medium text-center text-xs tracking-wider uppercase">
          <Link to="/free-service/website-upgrade" className="hover:text-white flex items-center justify-center gap-2 transition-colors">
            <ArrowLeft className="w-3 h-3" />
            Demo Site by Achieve Pack
          </Link>
        </div>
        <Navbar />
        <Hero />
        <Comparison />
        <Shop />
        <Certifications />
        <Footer />
        <DemoBanner />
        <CookieConsent />
      </div>
    </GeoBlocker>
  )
}
