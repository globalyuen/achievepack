import React, { useState, useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Menu, X, Facebook, Instagram, Twitter, ArrowRight, 
  MapPin, ShoppingBag, Search, ChevronRight, Droplet, 
  Leaf, Zap, Star
} from 'lucide-react'
import { Link } from 'react-router-dom'
import GeoBlocker from '../../components/GeoBlocker'
import CookieConsent from '../../components/CookieConsent'

// ============================================
// BRAND ASSETS & CONSTANTS
// ============================================
const ASSETS = {
  hero: '/imgs/demo-site/spreads/hero.png',
  lifestyle: '/imgs/demo-site/spreads/lifestyle.png',
  almond: '/imgs/demo-site/spreads/almond.png',
  hazelnut: '/imgs/demo-site/spreads/hazelnut.png',
}

const PRODUCTS = [
  {
    id: 'lemon-fresh',
    name: 'Creamy Almond',
    scent: 'Roasted Perfection',
    price: 12.00,
    image: ASSETS.almond,
    accent: 'bg-[#C6A87C]', // Almond beige/brown
    desc: 'Pure, roasted almonds blended into a silky smooth spread. High protein, zero palm oil, packaged in our compostable squeeze pouch for mess-free enjoyment.'
  },
  {
    id: 'ocean-breeze',
    name: 'Dark Hazelnut',
    scent: 'Rich Cocoa',
    price: 14.00,
    image: ASSETS.hazelnut,
    accent: 'bg-[#5D4037]', // Deep brown
    desc: 'Indulgent hazelnut and fair-trade cocoa. A guilt-free treat that puts the planet first with our Nano Banana Pro packaging.'
  }
]

// Light earthy palette for spreads
const THEME = {
  primary: '#8B5A2B', // Brown/Earth
  secondary: '#F5F5DC', // Beige/Cream
  accent: '#D2691E', // Chocolate
  bg: '#FDFAF5', // Warm white
  text: '#3E2723' // Dark brown text
}

// ============================================
// ANIMATION VARIANTS
// ============================================
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
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
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-[#FDFAF5]/90 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <Link to="/free-service/achieve-spreads-demo" className="text-2xl font-bold tracking-tight text-[#3E2723] flex items-center gap-2">
          <span className="bg-[#8B5A2B] text-white px-2 py-1 rounded-lg text-sm font-black">AS</span>
          Achieve Spreads
        </Link>
        
        <div className="hidden md:flex items-center gap-8 text-[#3E2723]/80 font-medium">
          <a href="#" className="hover:text-[#8B5A2B] transition">Shop</a>
          <a href="#" className="hover:text-[#8B5A2B] transition">Our Story</a>
          <a href="#" className="hover:text-[#8B5A2B] transition">Sustainability</a>
          <button className="p-2 hover:bg-[#8B5A2B]/10 rounded-full transition"><Search className="w-5 h-5" /></button>
          <button className="p-2 hover:bg-[#8B5A2B]/10 rounded-full transition"><ShoppingBag className="w-5 h-5" /></button>
        </div>

        <button className="md:hidden p-2 text-[#3E2723]" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#FDFAF5] border-t border-[#8B5A2B]/10 overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-4 font-semibold text-[#3E2723]">
              <a href="#" className="py-2 border-b border-[#8B5A2B]/10">Shop</a>
              <a href="#" className="py-2 border-b border-[#8B5A2B]/10">Our Story</a>
              <a href="#" className="py-2 border-b border-[#8B5A2B]/10">Sustainability</a>
              <a href="#" className="py-2">Account</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

const Hero = () => {
  return (
    <section className="relative min-h-screen pt-32 pb-20 px-6 overflow-hidden bg-[#FDFAF5]">
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
         <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#C6A87C]/20 to-transparent" />
         <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-[#8B5A2B]/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center relative z-10">
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="space-y-8"
        >
          <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 bg-[#8B5A2B]/10 text-[#8B5A2B] px-4 py-2 rounded-full text-sm font-bold tracking-wider uppercase">
            🌱 Compostable Squeeze Pack
          </motion.div>
          
          <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl font-extrabold text-[#3E2723] leading-[1.1]">
            Spread Simple.<br />
            <span className="text-[#8B5A2B]">Spread Sustainable.</span>
          </motion.h1>
          
          <motion.p variants={fadeInUp} className="text-xl text-[#3E2723]/70 max-w-lg leading-relaxed">
            Premium nut butters and chocolate spreads in revolutionary <span className="font-semibold text-[#8B5A2B]">Nano Banana Pro</span> packaging. Squeezable, mess-free, and 100% plastic-free.
          </motion.p>
          
          <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4">
            <button className="px-8 py-4 bg-[#8B5A2B] text-white rounded-2xl font-bold hover:bg-[#6D4C41] transition shadow-lg hover:shadow-xl hover:-translate-y-1">
              Shop Bundles
            </button>
            <button className="px-8 py-4 border-2 border-[#3E2723]/10 text-[#3E2723] rounded-2xl font-bold hover:bg-[#3E2723]/5 transition">
              Learn More
            </button>
          </motion.div>

          <motion.div variants={fadeInUp} className="flex items-center gap-6 pt-4 text-[#3E2723]/60 text-sm font-medium">
             <div className="flex items-center gap-2">
               <div className="w-2 h-2 rounded-full bg-green-500" /> Plant Based
             </div>
             <div className="flex items-center gap-2">
               <div className="w-2 h-2 rounded-full bg-green-500" /> Palm Oil Free
             </div>
             <div className="flex items-center gap-2">
               <div className="w-2 h-2 rounded-full bg-green-500" /> TUV Certified Compostable
             </div>
          </motion.div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <div className="relative z-10">
            <img src={ASSETS.hero} alt="Achieve Spreads Collection" className="w-full drop-shadow-2xl rounded-3xl" />
          </div>
          {/* Decorative elements behind image */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border border-[#8B5A2B]/10 rounded-full animate-[spin_60s_linear_infinite]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] border border-[#8B5A2B]/5 rounded-full animate-[spin_40s_linear_infinite_reverse]" />
        </motion.div>
      </div>
    </section>
  )
}

const ProductCard = ({ product }: { product: typeof PRODUCTS[0] }) => {
  return (
    <motion.div 
      variants={fadeInUp}
      className="group bg-white rounded-[2rem] p-8 shadow-sm hover:shadow-xl transition-all duration-300 relative overflow-hidden"
    >
      <div className={`absolute top-0 right-0 w-24 h-24 ${product.accent} opacity-10 rounded-bl-[4rem] group-hover:scale-150 transition-transform duration-500`} />
      
      <div className="relative mb-8 flex justify-center py-8">
        <div className="absolute inset-0 bg-neutral-100 rounded-full scale-75 blur-3xl opacity-0 group-hover:opacity-50 transition-opacity" />
        <img 
          src={product.image} 
          alt={product.name} 
          className="h-64 object-contain drop-shadow-lg group-hover:scale-110 transition-transform duration-300"
        />
      </div>
      
      <div className="space-y-4">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-2xl font-bold text-[#3E2723]">{product.name}</h3>
            <p className="text-[#8B5A2B] font-medium">{product.scent}</p>
          </div>
          <span className="text-xl font-bold text-[#3E2723]">${product.price}</span>
        </div>
        
        <p className="text-[#3E2723]/60 text-sm leading-relaxed">
          {product.desc}
        </p>
        
        <button className="w-full py-4 rounded-xl bg-[#3E2723] text-white font-bold group-hover:bg-[#8B5A2B] transition-colors flex items-center justify-center gap-2">
           Add to Cart <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </motion.div>
  )
}

const Products = () => {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center mb-16"
        >
          <span className="text-[#8B5A2B] font-bold tracking-widest text-sm uppercase mb-4 block">Our Collection</span>
          <h2 className="text-4xl md:text-5xl font-bold text-[#3E2723] mb-6">Squeeze & Spread</h2>
          <p className="text-[#3E2723]/60 max-w-2xl mx-auto text-lg">
            Deliciously smooth spreads made from premium ingredients, packaged for convenience and the planet.
          </p>
        </motion.div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto"
        >
          {PRODUCTS.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}

const Feature = ({ icon: Icon, title, desc }: any) => (
  <motion.div variants={fadeInUp} className="flex flex-col items-center text-center p-8 bg-[#FDFAF5] rounded-3xl">
    <div className="w-16 h-16 bg-[#8B5A2B]/10 rounded-2xl flex items-center justify-center text-[#8B5A2B] mb-6">
      <Icon className="w-8 h-8" />
    </div>
    <h3 className="text-xl font-bold text-[#3E2723] mb-3">{title}</h3>
    <p className="text-[#3E2723]/60 leading-relaxed">{desc}</p>
  </motion.div> 
)

const Features = () => {
  return (
    <section className="py-24 px-6 bg-white border-t border-neutral-100">
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
               title="Nano Banana Pro™" 
               desc="Our packaging is made from proprietary fruit fiber technology. It's fully home compostable and tough enough for your adventures."
            />
            <Feature 
               icon={Droplet} 
               title="Mess-Free Design" 
               desc="No more crumbs in the jar. Our precision spout allows you to drizzle perfect amounts every time."
            />
            <Feature 
               icon={Zap} 
               title="Ethically Sourced" 
               desc="We partner directly with farmers for our almonds and cocoa, ensuring fair wages and top-tier quality."
            />
         </motion.div>
       </div>
    </section>
  )
}

const Lifestyle = () => {
  return (
    <section className="py-24 px-6 bg-[#3E2723] text-[#FDFAF5] relative overflow-hidden">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="rounded-[3rem] overflow-hidden"
        >
           <img src={ASSETS.lifestyle} alt="Spreading on toast" className="w-full object-cover h-full min-h-[500px]" />
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <div className="inline-block px-4 py-2 bg-[#FDFAF5]/10 rounded-full text-sm font-semibold tracking-wider uppercase">Our Mission</div>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">Better Breakfast.<br />Better Planet.</h2>
          <p className="text-[#FDFAF5]/70 text-lg leading-relaxed">
            We believe that convenience shouldn't cost the earth. That's why we reinvented the spread experience. 
            Gone are the heavy glass jars and difficult-to-recycle plastic tubs.
          </p>
          <p className="text-[#FDFAF5]/70 text-lg leading-relaxed">
            Achieve Spreads come in our signature <strong className="text-white">Nano Banana Pro</strong> pouches. 
            Lightweight, durable, and completely plastic-free.
          </p>
          
          <button className="px-8 py-4 bg-[#FDFAF5] text-[#3E2723] rounded-2xl font-bold hover:bg-[#8B5A2B] hover:text-white transition">
            Read Our Story
          </button>
        </motion.div>
      </div>
    </section>
  )
}

const Footer = () => {
  return (
    <footer className="bg-[#FDFAF5] pt-24 pb-12 px-6 border-t border-[#3E2723]/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <Link to="/free-service/achieve-spreads-demo" className="text-2xl font-bold tracking-tight text-[#3E2723] flex items-center gap-2">
              <span className="bg-[#8B5A2B] text-white px-2 py-1 rounded-lg text-sm font-black">AS</span>
              Achieve Spreads
            </Link>
            <p className="text-[#3E2723]/60">Spreading joy, sustainably.</p>
            <div className="flex gap-4">
              <Facebook className="text-[#3E2723]/40 hover:text-[#8B5A2B] cursor-pointer" />
              <Instagram className="text-[#3E2723]/40 hover:text-[#8B5A2B] cursor-pointer" />
              <Twitter className="text-[#3E2723]/40 hover:text-[#8B5A2B] cursor-pointer" />
            </div>
          </div>
          
          <div>
            <h4 className="font-bold text-[#3E2723] mb-6">Shop</h4>
            <ul className="space-y-4 text-[#3E2723]/60">
              <li><a href="#" className="hover:text-[#8B5A2B]">Almond</a></li>
              <li><a href="#" className="hover:text-[#8B5A2B]">Hazelnut</a></li>
              <li><a href="#" className="hover:text-[#8B5A2B]">Bundles</a></li>
              <li><a href="#" className="hover:text-[#8B5A2B]">Gift Sets</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-[#3E2723] mb-6">Company</h4>
            <ul className="space-y-4 text-[#3E2723]/60">
              <li><a href="#" className="hover:text-[#8B5A2B]">About Us</a></li>
              <li><a href="#" className="hover:text-[#8B5A2B]">Sustainability</a></li>
              <li><a href="#" className="hover:text-[#8B5A2B]">Nano Banana Pro™</a></li>
              <li><a href="#" className="hover:text-[#8B5A2B]">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-[#3E2723] mb-6">Newsletter</h4>
            <p className="text-[#3E2723]/60 mb-4 text-sm">Join the spread revolution.</p>
            <div className="flex gap-2">
              <input type="email" placeholder="Email" className="bg-white px-4 py-2 rounded-lg border border-[#3E2723]/10 w-full" />
              <button className="bg-[#3E2723] text-white px-4 py-2 rounded-lg font-bold">→</button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-[#3E2723]/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-[#3E2723]/40">
           <p>© 2026 Achieve Spreads. All rights reserved.</p>
           <p>Powered by AchievePack</p>
        </div>
      </div>
    </footer>
  )
}

const DemoBanner = () => (
   <div className="fixed bottom-4 right-4 z-[60] max-w-sm bg-white p-4 rounded-xl shadow-2xl border-2 border-[#8B5A2B] animate-in slide-in-from-bottom duration-1000">
      <div className="flex items-start gap-4">
         <div className="p-2 bg-[#8B5A2B]/10 rounded-lg">
            <Zap className="h-6 w-6 text-[#8B5A2B]" />
         </div>
         <div>
            <h4 className="font-bold text-gray-900 text-sm">This is a Demo Store</h4>
            <p className="text-gray-600 text-xs mt-1 mb-2">
               Created by AchievePack to showcase our "Nano Banana Pro" compostable packaging for spreads.
            </p>
            <Link 
               to="/free-service/website-upgrade"
               className="text-[#8B5A2B] text-xs font-bold hover:underline flex items-center gap-1"
            >
               Get your own free demo site <ArrowRight className="h-3 w-3" />
            </Link>
         </div>
         <button onClick={(e) => e.currentTarget.parentElement?.parentElement?.remove()} className="text-gray-400 hover:text-gray-600">
            <X className="h-4 w-4" />
         </button>
      </div>
   </div>
)

// ============================================
// MAIN PAGE COMPONENT
// ============================================
export default function AchieveSpreadsDemoPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <Helmet>
        <title>Achieve Spreads | Sustainable Nut Butters & Chocolate Spreads</title>
        <meta name="description" content="Premium, plastic-free spreads packaged in compostable Nano Banana Pro pouches. Creamy Almond and Dark Hazelnut flavors." />
      </Helmet>
      
      <GeoBlocker>
        <div className="min-h-screen bg-[#FDFAF5] font-sans selection:bg-[#8B5A2B] selection:text-white">
          <Navbar />
          <Hero />
          <Products />
          <Lifestyle />
          <Features />
          <Footer />
          <DemoBanner />
          <CookieConsent />
        </div>
      </GeoBlocker>
    </>
  )
}
