import React, { useState, useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { ShoppingBag, Menu, X, ArrowLeft, ArrowRight, Sun, Leaf, Droplets, Heart, Sparkles, Wind } from 'lucide-react'
import { motion, AnimatePresence, Variants } from 'framer-motion'
import { ParallaxText } from '../../components/ParallaxText'

// ============================================
// ANIMATION VARIANTS
// ============================================

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
  }
}

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2
    }
  }
}

// ============================================
// ASSETS & DATA
// ============================================

const CLEANING_IMAGES = {
  hero: '/imgs/demo-site/cleaning/hero.png',
  lifestyle: '/imgs/demo-site/cleaning/lifestyle.png',
  flavors: {
    lemon: '/imgs/demo-site/cleaning/lemon.png',
    ocean: '/imgs/demo-site/cleaning/ocean.png'
  }
}

const PRODUCTS = [
  {
    id: 'lemon',
    name: 'Lemon Fresh',
    tagline: 'Zest & Shine',
    description: 'A powerful citrus blast that cuts through grease effortlessly. Infused with organic lemon extracts for a streak-free, sparkling finish.',
    price: 9.99,
    image: CLEANING_IMAGES.flavors.lemon,
    color: '#EAB308', // Yellow-500
    bg: 'bg-yellow-50',
    accent: 'text-yellow-600',
    icon: <Sun className="w-5 h-5" />
  },
  {
    id: 'ocean',
    name: 'Ocean Breeze',
    tagline: 'Cool & Crisp',
    description: 'Bring the freshness of the sea to your home. Eliminates odors and leaves a refreshing, airy scent that lasts all day.',
    price: 9.99,
    image: CLEANING_IMAGES.flavors.ocean,
    color: '#06B6D4', // Cyan-500
    bg: 'bg-cyan-50',
    accent: 'text-cyan-600',
    icon: <Wind className="w-5 h-5" />
  }
]

export default function AchieveCleaningDemoPage() {
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
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans selection:bg-cyan-200 selection:text-cyan-900">
      <Helmet>
        <title>Achieve Cleaning | Future of Clean | Demo Site</title>
        <meta name="description" content="Achieve Cleaning - Dissolvable cleaning tablets in revolutionary Nano Banana Pro packaging." />
        <style>{`
          @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;600;700&family=Inter:wght@300;400;500;600&display=swap');
          .font-outfit { font-family: 'Outfit', sans-serif; }
          .font-inter { font-family: 'Inter', sans-serif; }
        `}</style>
      </Helmet>

      {/* Demo Banner */}
      <div className="fixed top-0 left-0 right-0 z-[60] bg-slate-900 text-slate-200 py-1 px-4 font-medium text-center text-xs tracking-wider uppercase">
        <Link to="/free-service/website-upgrade" className="hover:text-white flex items-center justify-center gap-2 transition-colors">
          <ArrowLeft className="w-3 h-3" />
          Demo Site by Achieve Pack
        </Link>
      </div>

      {/* Navigation */}
      <nav className={`fixed top-[26px] w-full z-50 transition-all duration-500 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-2' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="font-outfit font-bold text-2xl md:text-3xl text-slate-900 tracking-tight">
              Achieve<span className="text-cyan-600">Cleaning</span>
            </span>
          </div>

          <div className="hidden md:flex items-center gap-8 font-inter text-sm font-semibold tracking-widest uppercase text-slate-600">
            <a href="#products" className="hover:text-cyan-600 transition-colors">Products</a>
            <a href="#innovations" className="hover:text-cyan-600 transition-colors">Innovation</a>
            <a href="#mission" className="hover:text-cyan-600 transition-colors">Mission</a>
          </div>

          <div className="flex items-center gap-6">
            <button className="relative group" onClick={() => setCartCount(c => c + 1)}>
              <ShoppingBag className="w-6 h-6 text-slate-800 group-hover:text-cyan-600 transition-colors" />
              <span className="absolute -top-1 -right-1 bg-cyan-600 text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                {cartCount}
              </span>
            </button>
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden"
            >
              <Menu className="w-8 h-8 text-slate-800" />
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
            className="fixed inset-0 z-[55] bg-white md:hidden flex flex-col items-center justify-center gap-8 font-outfit text-3xl text-slate-800"
          >
            <button onClick={() => setIsMenuOpen(false)} className="absolute top-8 right-8">
              <X className="w-8 h-8 text-slate-500" />
            </button>
            <a href="#products" onClick={() => setIsMenuOpen(false)} className="hover:text-cyan-600 hover:font-bold transition-all">Products</a>
            <a href="#innovations" onClick={() => setIsMenuOpen(false)} className="hover:text-cyan-600 hover:font-bold transition-all">Innovation</a>
            <a href="#mission" onClick={() => setIsMenuOpen(false)} className="hover:text-cyan-600 hover:font-bold transition-all">Mission</a>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section className="relative min-h-screen pt-20 flex items-center justify-center overflow-hidden bg-slate-100">
        <div className="absolute inset-0 z-0">
          <img 
            src={CLEANING_IMAGES.hero} 
            alt="Achieve Cleaning Sachets Stack" 
            className="w-full h-full object-cover opacity-90"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/60 to-transparent" />
        </div>

        <div className="relative z-20 max-w-7xl mx-auto px-6 w-full text-center md:text-left">
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="max-w-2xl bg-white/10 backdrop-blur-md p-8 md:p-12 rounded-3xl border border-white/20 shadow-2xl"
          >
            <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 bg-cyan-100 text-cyan-900 px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-6 shadow-sm">
              <Sparkles className="w-3 h-3" />
              Nano Banana Pro™ Technology
            </motion.div>
            
            <motion.h1 variants={fadeInUp} className="font-outfit font-bold text-5xl md:text-7xl text-white mb-6 leading-tight drop-shadow-lg">
              Powerful Clean. <br/><span className="text-cyan-300">Zero Waste.</span>
            </motion.h1>

            <motion.p variants={fadeInUp} className="font-inter text-lg md:text-xl text-slate-100 mb-8 leading-relaxed drop-shadow-md max-w-lg">
              Dissolvable cleaning tablets in our revolutionary <strong>Nano Banana Pro</strong> sachets. 
              Organic, durable, and 100% home compostable.
            </motion.p>

            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-cyan-500 text-white font-inter font-bold text-lg px-8 py-4 rounded-full hover:bg-cyan-600 transition-all shadow-lg hover:shadow-cyan-500/30"
              >
                Shop Tablets
              </button>
              <button className="bg-white/90 text-slate-900 font-inter font-bold text-lg px-8 py-4 rounded-full hover:bg-white transition-all shadow-lg">
                The Technology
              </button>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/80 animate-bounce"
        >
          <div className="flex flex-col items-center gap-2">
            <span className="text-xs uppercase tracking-widest font-inter">Scroll to Clean</span>
            <ArrowRight className="w-5 h-5 rotate-90" />
          </div>
        </motion.div>
      </section>

      {/* Marquee */}
      <section className="bg-white py-6 border-b border-slate-100 overflow-hidden">
        <ParallaxText baseVelocity={1} textClassName="font-outfit text-3xl md:text-5xl text-slate-200 font-bold uppercase tracking-tighter mx-4">
           Non-Toxic • Plastic Free • Nano Banana Pro • Just Add Water • Effective • Sustainable •
        </ParallaxText>
      </section>

      {/* Product Collection */}
      <section id="products" className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-20"
          >
            <span className="text-cyan-600 font-inter text-sm font-bold tracking-widest uppercase block mb-3">The Future of Cleaning</span>
            <h2 className="font-outfit font-bold text-4xl md:text-6xl text-slate-900 mb-6">Choose Your Scent</h2>
            <div className="w-24 h-1 bg-cyan-200 mx-auto rounded-full" />
          </motion.div>

          {/* Product Showcase */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Image Side */}
            <motion.div 
              key={activeProduct.id}
              initial={{ opacity: 0, scale: 0.95, rotate: -2 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 0.5 }}
              className={`relative rounded-[2.5rem] overflow-hidden aspect-[4/5] ${activeProduct.bg} shadow-inner`}
            >
              <div className="absolute inset-0 flex items-center justify-center p-8">
                <img 
                  src={activeProduct.image} 
                  alt={activeProduct.name} 
                  className="w-full h-full object-contain drop-shadow-2xl transition-transform hover:scale-105 duration-700"
                />
              </div>
              
              {/* Floating Badge */}
               <div className="absolute top-8 left-8 bg-white/90 backdrop-blur-md px-4 py-2 rounded-full shadow-md flex items-center gap-2">
                  {activeProduct.icon}
                 <span className={`font-bold font-inter text-sm ${activeProduct.accent}`}>Premium Formula</span>
               </div>
            </motion.div>

            {/* Content Side */}
            <div className="space-y-12">
              {/* Selector */}
              <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
                {PRODUCTS.map((prod) => (
                  <button
                    key={prod.id}
                    onClick={() => setActiveProduct(prod)}
                    className={`flex-shrink-0 px-6 py-3 rounded-full font-inter font-bold transition-all border-2 ${
                      activeProduct.id === prod.id 
                        ? 'border-slate-900 bg-slate-900 text-white shadow-lg' 
                        : 'border-slate-200 bg-white text-slate-500 hover:border-slate-400'
                    }`}
                  >
                    {prod.name}
                  </button>
                ))}
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={activeProduct.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.4 }}
                >
                  <h3 className="font-outfit font-bold text-5xl text-slate-900 mb-2">{activeProduct.name}</h3>
                  <p className={`font-inter text-lg font-semibold tracking-wide uppercase mb-6 ${activeProduct.accent}`}>— {activeProduct.tagline}</p>
                  
                  <p className="font-inter text-xl text-slate-600 leading-relaxed mb-8">
                    {activeProduct.description}
                  </p>

                  <div className="grid grid-cols-2 gap-6 mb-10">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-slate-100 rounded-xl text-slate-900">
                        <Droplets className="w-6 h-6" />
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-900 text-sm font-outfit">Solubility</h4>
                        <p className="text-sm text-slate-500 font-inter">Instant Fizz</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-slate-100 rounded-xl text-slate-900">
                        <Leaf className="w-6 h-6" />
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-900 text-sm font-outfit">Material</h4>
                        <p className="text-sm text-slate-500 font-inter">Nano Banana Pro</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between border-t border-slate-100 pt-8">
                    <div>
                      <span className="block text-sm text-slate-500 font-bold mb-1 font-inter">STARTER PACK</span>
                      <span className="font-outfit font-bold text-4xl text-slate-900">${activeProduct.price}</span>
                    </div>
                    <button
                      onClick={() => setCartCount(c => c + 1)}
                      className="bg-slate-900 text-white font-inter font-bold text-lg px-10 py-4 rounded-full hover:bg-cyan-600 transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1"
                    >
                      Add to Cart
                    </button>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section id="innovations" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div 
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="bg-white p-10 rounded-3xl shadow-sm text-center card-hover border border-slate-100"
            >
              <div className="w-16 h-16 bg-cyan-50 rounded-2xl flex items-center justify-center mx-auto mb-6 text-cyan-600">
                <Leaf className="w-8 h-8" />
              </div>
              <h3 className="font-outfit font-bold text-2xl mb-4">Nano Banana Pro™</h3>
              <p className="font-inter text-slate-600 leading-relaxed">
                Our proprietary sachet material derived from banana fibers. Stronger than plastic, 100% compostable.
              </p>
            </motion.div>

            <motion.div 
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, delay: 0.2 }}
              className="bg-white p-10 rounded-3xl shadow-sm text-center card-hover border border-slate-100"
            >
              <div className="w-16 h-16 bg-cyan-50 rounded-2xl flex items-center justify-center mx-auto mb-6 text-cyan-600">
                <Droplets className="w-8 h-8" />
              </div>
              <h3 className="font-outfit font-bold text-2xl mb-4">Just Add Water</h3>
              <p className="font-inter text-slate-600 leading-relaxed">
                Stop shipping water. Our concentrated tablets turn your tap water into a premium cleaning solution.
              </p>
            </motion.div>

            <motion.div 
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, delay: 0.4 }}
              className="bg-white p-10 rounded-3xl shadow-sm text-center card-hover border border-slate-100"
            >
              <div className="w-16 h-16 bg-cyan-50 rounded-2xl flex items-center justify-center mx-auto mb-6 text-cyan-600">
                <Heart className="w-8 h-8" />
              </div>
              <h3 className="font-outfit font-bold text-2xl mb-4">Cruelty Free</h3>
              <p className="font-inter text-slate-600 leading-relaxed">
                Never tested on animals. Safe for your pets, safe for your family, safe for the planet.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Lifestyle Story */}
      <section id="mission" className="py-0">
        <div className="grid md:grid-cols-2 min-h-[80vh]">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="relative h-[60vh] md:h-auto"
          >
            <img src={CLEANING_IMAGES.lifestyle} alt="Clean Kitchen Lifestyle" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent flex items-end p-12">
              <div className="text-white">
                <div className="flex items-center gap-2 mb-2">
                  <Sparkles className="w-5 h-5 text-cyan-400" />
                  <span className="font-bold text-sm tracking-widest uppercase">The Vision</span>
                </div>
                <h3 className="font-outfit text-3xl font-bold">"Clean home, clean ocean."</h3>
              </div>
            </div>
          </motion.div>
          
          <div className="bg-slate-900 text-slate-100 p-12 lg:p-24 flex flex-col justify-center">
            <span className="text-cyan-400 font-bold font-inter tracking-widest uppercase mb-6">Our Mission</span>
            <h2 className="font-outfit font-bold text-4xl md:text-5xl mb-8 leading-tight">
              A Plastic-Free <br/> Evolution.
            </h2>
            <p className="font-inter text-lg text-slate-400 leading-relaxed mb-8">
              Every year, billions of plastic cleaning bottles end up in landfills. We're changing that with 
              <strong> Achieve Cleaning</strong>. One tablet, one bottle for life, zero waste packaging.
            </p>
            <div className="flex gap-4">
              <button className="border border-white/30 text-white px-8 py-3 rounded-full hover:bg-white hover:text-slate-900 transition-all font-inter font-bold">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white py-20 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="font-outfit font-bold text-4xl text-slate-900 mb-6">Achieve<span className="text-cyan-600">Cleaning</span></h2>
          <p className="font-inter text-slate-500 max-w-lg mx-auto mb-10">
            Reinventing the way you clean with nature's technology.
            <br />Powered by Achieve Pack.
          </p>
          
          <div className="flex justify-center gap-8 mb-12 font-inter font-bold text-slate-700 text-sm tracking-widest uppercase">
            <a href="#" className="hover:text-cyan-600 transition-colors">Shop</a>
            <a href="#" className="hover:text-cyan-600 transition-colors">About</a>
            <a href="#" className="hover:text-cyan-600 transition-colors">Sustainability</a>
            <a href="#" className="hover:text-cyan-600 transition-colors">Support</a>
          </div>

          <div className="text-slate-400 text-sm font-inter">
            © 2026 Achieve Cleaning. Powered by <Link to="/" className="text-slate-600 hover:text-cyan-600 font-bold">Achieve Pack</Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
