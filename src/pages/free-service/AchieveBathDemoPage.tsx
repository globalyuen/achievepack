import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { 
  ShoppingBag, Search, Menu, X, ArrowRight, 
  Droplet, Feather, Circle, Star
} from 'lucide-react'
import { Link } from 'react-router-dom'
import GeoBlocker from '../../components/GeoBlocker'
import CookieConsent from '../../components/CookieConsent'

// ============================================
// BRAND ASSETS (Placeholders until generation)
// ============================================
const ASSETS = {
  hero: '/imgs/demo-site/bath/hero.png',
  lifestyle: '/imgs/demo-site/bath/lifestyle.png',
  lavender: '/imgs/demo-site/bath/lavender.png',
  rose: '/imgs/demo-site/bath/rose.png',
}

const PRODUCTS = [
  {
    id: 'calm-lavender',
    name: 'Calm Lavender',
    note: 'Sleep & Relaxation',
    price: 24,
    image: ASSETS.lavender,
    bgColor: 'bg-[#F3E5F5]', // Light Purple
  },
  {
    id: 'rose-quartz',
    name: 'Rose Quartz',
    note: 'Love & Harmony',
    price: 24,
    image: ASSETS.rose,
    bgColor: 'bg-[#FCE4EC]', // Light Pink
  }
]

// ============================================
// ANIMATIONS
// ============================================
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
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
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled ? 'bg-white/90 backdrop-blur-md py-4 border-b border-neutral-100' : 'bg-transparent py-8'}`}>
      <div className="max-w-7xl mx-auto px-8 flex items-center justify-between">
        <div className="hidden md:flex gap-8 text-xs tracking-[0.2em] font-medium text-neutral-500 uppercase">
          <a href="#" className="hover:text-black transition-colors">Shop</a>
          <a href="#" className="hover:text-black transition-colors">Rituals</a>
        </div>

        <Link to="/free-service/achieve-bath-demo" className="text-2xl font-serif tracking-tight text-neutral-900">
          Achieve Bath.
        </Link>

        <div className="hidden md:flex gap-8 text-neutral-900">
          <Search className="w-5 h-5 stroke-[1.5]" />
          <ShoppingBag className="w-5 h-5 stroke-[1.5]" />
        </div>

        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className="w-6 h-6 stroke-[1.5]" /> : <Menu className="w-6 h-6 stroke-[1.5]" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-white border-b border-neutral-100 p-8 md:hidden">
          <div className="flex flex-col gap-6 text-center font-serif text-xl">
            <a href="#">Shop Collection</a>
            <a href="#">Our Story</a>
            <a href="#">Journal</a>
          </div>
        </div>
      )}
    </nav>
  )
}

const Hero = () => {
  return (
    <section className="relative min-h-screen pt-32 pb-20 px-6 bg-[#FAFAFA] flex items-center overflow-hidden">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={stagger}
          className="space-y-10 relative z-10"
        >
          <motion.div variants={fadeUp} className="flex items-center gap-4">
            <div className="h-[1px] w-12 bg-neutral-400"></div>
            <span className="text-xs uppercase tracking-[0.3em] text-neutral-500 font-medium">The Clarity Collection</span>
          </motion.div>
          
          <motion.h1 variants={fadeUp} className="text-6xl md:text-8xl font-serif text-neutral-900 leading-[1.1]">
            Transparency <br />
            <span className="italic text-neutral-400">is the new</span> <br />
            Luxury.
          </motion.h1>
          
          <motion.p variants={fadeUp} className="text-lg text-neutral-600 max-w-md font-light leading-relaxed">
            Experience the purity of Achieve Bath. Hand-pressed botanicals in our revolutionary clear <span className="font-medium text-neutral-900">Nano Banana Pro™</span> packaging. 
            Printed directly on the film—no stickers, just clarity.
          </motion.p>
          
          <motion.div variants={fadeUp} className="flex gap-6">
            <button className="px-10 py-4 bg-neutral-900 text-white text-xs tracking-[0.2em] hover:bg-neutral-800 transition-colors">
              SHOP THE SET
            </button>
            <button className="flex items-center gap-2 px-6 py-4 text-neutral-900 text-xs tracking-[0.2em] border border-neutral-200 hover:border-neutral-900 transition-colors">
              DISCOVER <ArrowRight className="w-4 h-4" />
            </button>
          </motion.div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="relative h-[600px] w-full bg-white p-8 md:p-12 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.05)]"
        >
          <img 
            src={ASSETS.hero} 
            alt="Achieve Bath Clear Pouches" 
            className="w-full h-full object-contain"
          />
          <div className="absolute bottom-8 right-8 text-right">
             <p className="font-serif text-4xl mb-2">01.</p>
             <p className="text-xs uppercase tracking-widest text-neutral-500">Sustainably Clear</p>
          </div>
        </motion.div>
      </div>
      
      {/* Decorative Text */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden opacity-[0.03] pointer-events-none">
        <h2 className="text-[20vw] font-serif whitespace-nowrap leading-none text-center">ACHIEVE BATH</h2>
      </div>
    </section>
  )
}

const Product = ({ product, index }: any) => {
  return (
    <motion.div 
      variants={fadeUp}
      className="group cursor-pointer"
    >
      <div className={`relative aspect-[3/4] mb-8 overflow-hidden bg-neutral-100`}>
        <div className={`absolute inset-0 ${product.bgColor} opacity-0 group-hover:opacity-30 transition-opacity duration-700`} />
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" 
        />
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
           <button className="bg-white px-8 py-3 text-xs tracking-widest uppercase hover:bg-neutral-900 hover:text-white transition-colors">
             Quick Add
           </button>
        </div>
      </div>
      
      <div className="text-center space-y-2">
        <h3 className="font-serif text-2xl text-neutral-900">{product.name}</h3>
        <p className="text-xs uppercase tracking-widest text-neutral-500">{product.note}</p>
        <p className="font-medium text-neutral-900">${product.price}.00</p>
      </div>
    </motion.div>
  )
}

const Shop = () => {
  return (
    <section className="py-32 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24 space-y-4">
          <span className="text-xs font-medium tracking-[0.3em] text-neutral-400 uppercase">The Rituals</span>
          <h2 className="font-serif text-5xl text-neutral-900">Selected Works</h2>
        </div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
          className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto"
        >
          {PRODUCTS.map((p, i) => <Product key={p.id} product={p} index={i} />)}
        </motion.div>
      </div>
    </section>
  )
}

const Feature = ({ icon: Icon, title, desc }: any) => (
  <div className="flex flex-col items-center text-center space-y-6">
    <div className="w-16 h-16 rounded-full border border-neutral-200 flex items-center justify-center text-neutral-900">
      <Icon className="w-6 h-6 stroke-1" />
    </div>
    <h3 className="font-serif text-xl">{title}</h3>
    <p className="text-neutral-500 text-sm leading-relaxed max-w-xs">{desc}</p>
  </div>
)

const Pillars = () => {
  return (
    <section className="py-32 px-6 bg-[#FAFAFA] border-y border-neutral-100">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-16">
        <Feature 
          icon={Droplet} 
          title="Pure Ingredients" 
          desc="Ethically sourced botanicals and essential oils. No synthetic fillers, just nature's essence." 
        />
        <Feature 
          icon={Feather} 
          title="Nano Banana Pro™" 
          desc="Our proprietary clear film is fully compostable. Luxury packaging that leaves no trace." 
        />
        <Feature 
          icon={Circle} 
          title="Direct Print" 
          desc="We print directly on the film to eliminate sticker waste. A seamless, minimal aesthetic." 
        />
      </div>
    </section>
  )
}

const Lifestyle = () => {
  return (
    <section className="py-0 grid md:grid-cols-2 min-h-screen">
       <div className="relative h-full min-h-[600px]">
         <img 
           src={ASSETS.lifestyle} 
           alt="Bath Ritual" 
           className="absolute inset-0 w-full h-full object-cover"
         />
       </div>
       <div className="bg-neutral-900 text-white p-16 md:p-24 flex flex-col justify-center items-start space-y-12">
          <Star className="w-8 h-8 text-neutral-500 stroke-1" />
          <h2 className="font-serif text-5xl md:text-6xl leading-[1.2]">
            "The most elegant way to be sustainable. Truly a game changer."
          </h2>
          <div className="space-y-2">
            <p className="text-xs tracking-[0.2em] text-neutral-400 uppercase">Vogue Living</p>
            <p className="text-xs tracking-[0.2em] text-neutral-400 uppercase">September 2025</p>
          </div>
          <button className="text-sm border-b border-white pb-1 hover:text-neutral-300 hover:border-neutral-300 transition-colors">
            READ THE JOURNAL
          </button>
       </div>
    </section>
  )
}

const Footer = () => {
  return (
    <footer className="bg-white pt-24 pb-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center space-y-12">
        <Link to="/free-service/achieve-bath-demo" className="text-4xl font-serif text-neutral-900">
          Achieve Bath.
        </Link>
        <div className="flex gap-8 text-xs tracking-widest text-neutral-500 uppercase">
          <a href="#" className="hover:text-black">Instagram</a>
          <a href="#" className="hover:text-black">Pinterest</a>
          <a href="#" className="hover:text-black">Email</a>
        </div>
        <p className="text-xs text-neutral-400">© 2026 Achieve Bath. Powered by AchievePack.</p>
      </div>
    </footer>
  )
}

const DemoBanner = () => (
   <div className="fixed bottom-8 left-8 z-[60] max-w-xs bg-white/80 backdrop-blur border border-neutral-200 p-6 shadow-2xl animate-in slide-in-from-bottom duration-1000">
      <h4 className="font-serif text-xl mb-2 text-neutral-900">Demo Concept</h4>
      <p className="text-xs text-neutral-500 leading-relaxed mb-4">
          showcasing "Luxury Minimal" aesthetic with <strong>Nano Banana Pro™ Clear</strong> compostable pouches.
      </p>
      <Link 
         to="/free-service/website-upgrade"
         className="text-xs font-bold uppercase tracking-widest border-b border-black pb-1 hover:text-neutral-600 hover:border-neutral-600 transition-colors"
      >
         Get Your Demo
      </Link>
   </div>
)

export default function AchieveBathDemoPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <GeoBlocker>
      <Helmet>
        <title>Achieve Bath | Luxury Sustainable Bath Rituals</title>
        <meta name="description" content="Minimalist luxury bath products in clear compostable Nano Banana Pro packaging." />
      </Helmet>
      
      <div className="min-h-screen bg-white font-sans text-neutral-900 selection:bg-neutral-900 selection:text-white">
        <Navbar />
        <Hero />
        <Pillars />
        <Shop />
        <Lifestyle />
        <Footer />
        <DemoBanner />
        <CookieConsent />
      </div>
    </GeoBlocker>
  )
}
