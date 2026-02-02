import React, { useState, useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { ShoppingBag, Menu, X, ArrowLeft, ArrowRight, Sun, Leaf, Droplets, Heart, Feather, Award, Sprout } from 'lucide-react'
import { motion, AnimatePresence, Variants } from 'motion/react'
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

const SUPERFOOD_IMAGES = {
  hero: '/imgs/demo-site/superfood/hero.png',
  lifestyle: '/imgs/demo-site/superfood/goji.png', // Using goji as lifestyle fallback or I can reuse hero
  products: {
    cacao: '/imgs/demo-site/superfood/cacao.png',
    chia: '/imgs/demo-site/superfood/chia.png',
    goji: '/imgs/demo-site/superfood/goji.png'
  }
}

const PRODUCTS = [
  {
    id: 'cacao',
    name: 'Organic Cacao Powder',
    tagline: 'Nature’s Dark Chocolate',
    description: 'Antioxidant-rich organic cacao powder. Ethically sourced from small family farms in Peru. Perfect for smoothies, baking, or hot cocoa.',
    price: 14.99,
    image: SUPERFOOD_IMAGES.products.cacao,
    color: '#3E2723', // Dark Brown
    bg: 'bg-stone-100',
    accent: 'text-stone-800'
  },
  {
    id: 'chia',
    name: 'Organic Chia Seeds',
    tagline: 'Ancient Energy Source',
    description: 'Power-packed with Omega-3s, fiber, and protein. These tiny seeds are a versatile superfood staple for modern wellness.',
    price: 11.99,
    image: SUPERFOOD_IMAGES.products.chia,
    color: '#5D4037', // Brown
    bg: 'bg-orange-50',
    accent: 'text-orange-900'
  },
  {
    id: 'goji',
    name: 'Organic Goji Berries',
    tagline: 'The Longevity Berry',
    description: 'Succulent, sweet-tart berries used for centuries in traditional medicine. A vibrant snack supporting immune health and vitality.',
    price: 16.99,
    image: SUPERFOOD_IMAGES.products.goji,
    color: '#C62828', // Red
    bg: 'bg-red-50',
    accent: 'text-red-700'
  }
]

export default function AchieveSuperfoodDemoPage() {
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
    <div className="min-h-screen bg-[#FDFBF7] text-stone-800 font-sans selection:bg-green-200 selection:text-green-900">
      <Helmet>
        <title>Achieve Superfood | Empowering Wellness | Demo Site</title>
        <meta name="description" content="Achieve Superfood - Organic, nutrient-dense superfoods in sustainable compostable packaging." />
        <style>{`
          @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&family=Lato:wght@300;400;700&display=swap');
          .font-playfair { font-family: 'Playfair Display', serif; }
          .font-lato { font-family: 'Lato', sans-serif; }
        `}</style>
      </Helmet>

      {/* Demo Banner */}
      <div className="fixed top-0 left-0 right-0 z-[60] bg-green-900 text-green-50 py-1 px-4 font-medium text-center text-xs tracking-wider uppercase">
        <Link to="/free-service/website-upgrade" className="hover:text-white flex items-center justify-center gap-2 transition-colors">
          <ArrowLeft className="w-3 h-3" />
          Demo Site by Achieve Pack
        </Link>
      </div>

      {/* Navigation */}
      <nav className={`fixed top-[26px] w-full z-50 transition-all duration-500 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-2' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="font-playfair font-bold text-2xl md:text-3xl text-stone-900 tracking-tight">
              Achieve<span className="text-green-600">Superfood</span>
            </span>
          </div>

          <div className="hidden md:flex items-center gap-8 font-lato text-sm font-semibold tracking-widest uppercase text-stone-600">
            <a href="#products" className="hover:text-green-600 transition-colors">Shop</a>
            <a href="#mission" className="hover:text-green-600 transition-colors">Mission</a>
            <a href="#sustainability" className="hover:text-green-600 transition-colors">Sustainability</a>
          </div>

          <div className="flex items-center gap-6">
            <button className="relative group" onClick={() => setCartCount(c => c + 1)}>
              <ShoppingBag className="w-6 h-6 text-stone-800 group-hover:text-green-600 transition-colors" />
              <span className="absolute -top-1 -right-1 bg-green-600 text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                {cartCount}
              </span>
            </button>
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden"
            >
              <Menu className="w-8 h-8 text-stone-800" />
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
            className="fixed inset-0 z-[55] bg-[#FDFBF7] md:hidden flex flex-col items-center justify-center gap-8 font-playfair text-3xl text-stone-800"
          >
            <button onClick={() => setIsMenuOpen(false)} className="absolute top-8 right-8">
              <X className="w-8 h-8 text-stone-500" />
            </button>
            <a href="#products" onClick={() => setIsMenuOpen(false)} className="hover:text-green-600 hover:italic transition-all">Shop</a>
            <a href="#mission" onClick={() => setIsMenuOpen(false)} className="hover:text-green-600 hover:italic transition-all">Mission</a>
            <a href="#sustainability" onClick={() => setIsMenuOpen(false)} className="hover:text-green-600 hover:italic transition-all">Sustainability</a>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section className="relative min-h-screen pt-20 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={SUPERFOOD_IMAGES.hero} 
            alt="Superfood Pouches in Nature" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-stone-900/10" />
        </div>

        <div className="relative z-20 max-w-7xl mx-auto px-6 w-full text-center md:text-left">
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="max-w-2xl bg-white/30 backdrop-blur-md p-8 md:p-12 rounded-2xl border border-white/40 shadow-2xl"
          >
            <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 bg-green-100/90 text-green-900 px-4 py-1 rounded-full text-xs font-bold tracking-widest uppercase mb-6">
              <Leaf className="w-3 h-3" />
              Certified Organic & Compostable
            </motion.div>
            
            <motion.h1 variants={fadeInUp} className="font-playfair font-bold text-5xl md:text-7xl text-stone-900 mb-6 leading-tight drop-shadow-sm">
              Empowering Wellness, <br/><span className="text-green-800 italic">Naturally.</span>
            </motion.h1>

            <motion.p variants={fadeInUp} className="font-lato text-lg md:text-xl text-stone-800 mb-8 leading-relaxed font-medium">
              Nutrient-dense superfoods packed in our revolutionary compostable pouches. 
              Nourish your body and the planet with every scoop.
            </motion.p>

            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-green-700 text-white font-lato font-bold text-lg px-8 py-4 rounded-full hover:bg-green-800 transition-all shadow-lg hover:shadow-green-700/30"
              >
                Start Your Journey
              </button>
              <button className="bg-white/90 text-stone-800 font-lato font-bold text-lg px-8 py-4 rounded-full hover:bg-white transition-all shadow-lg">
                Our Story
              </button>
            </motion.div>
          </motion.div>
        </div>
        
        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/90 animate-bounce"
        >
          <div className="flex flex-col items-center gap-2">
            <span className="text-xs uppercase tracking-widest font-lato text-stone-800 bg-white/50 px-2 py-1 rounded">Scroll</span>
            <ArrowRight className="w-5 h-5 rotate-90 text-stone-800" />
          </div>
        </motion.div>
      </section>

      {/* Marquee - Calm & Earthy */}
      <section className="bg-[#FDFBF7] py-8 border-b border-stone-200 overflow-hidden">
        <ParallaxText baseVelocity={1} textClassName="font-playfair text-3xl md:text-5xl text-stone-300 italic mx-8">
           Organic • Non-GMO • Plant-Based • Compostable • Ethical • Nutrient-Dense • 
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
            <span className="text-green-600 font-lato text-sm font-bold tracking-widest uppercase block mb-3">Pure Ingredients</span>
            <h2 className="font-playfair font-bold text-4xl md:text-6xl text-stone-900 mb-6">The Collection</h2>
            <div className="w-24 h-1 bg-green-200 mx-auto rounded-full" />
          </motion.div>

          {/* Product Showcase */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Image Side */}
            <motion.div 
              key={activeProduct.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className={`relative rounded-[3rem] overflow-hidden aspect-[4/5] ${activeProduct.bg}`}
            >
              <div className="absolute inset-0 flex items-center justify-center p-8">
                <img 
                  src={activeProduct.image} 
                  alt={activeProduct.name} 
                  className="w-full h-full object-contain drop-shadow-2xl transition-transform hover:scale-105 duration-700"
                />
              </div>
              
              {/* Floating Badge */}
              <div className="absolute top-8 right-8 bg-white/90 backdrop-blur-md px-4 py-2 rounded-full shadow-lg">
                <span className={`font-bold font-lato ${activeProduct.accent}`}>Best Seller</span>
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
                    className={`flex-shrink-0 px-6 py-3 rounded-full font-lato font-bold transition-all ${
                      activeProduct.id === prod.id 
                        ? 'bg-stone-900 text-white shadow-lg' 
                        : 'bg-stone-100 text-stone-500 hover:bg-stone-200'
                    }`}
                  >
                    {prod.name}
                  </button>
                ))}
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={activeProduct.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                >
                  <h3 className="font-playfair font-bold text-5xl text-stone-900 mb-2">{activeProduct.name}</h3>
                  <p className={`font-lato text-lg font-medium italic mb-6 ${activeProduct.accent}`}>— {activeProduct.tagline}</p>
                  
                  <p className="font-lato text-xl text-stone-600 leading-relaxed mb-8">
                    {activeProduct.description}
                  </p>

                  <div className="grid grid-cols-2 gap-6 mb-10">
                    <div className="flex items-start gap-3">
                      <div className="p-2 bg-stone-100 rounded-lg text-stone-900">
                        <Sprout className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="font-bold text-stone-900 text-sm">Source</h4>
                        <p className="text-sm text-stone-500">Regenerative Farming</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="p-2 bg-stone-100 rounded-lg text-stone-900">
                        <Leaf className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="font-bold text-stone-900 text-sm">Packaging</h4>
                        <p className="text-sm text-stone-500">100% Compostable</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between border-t border-stone-200 pt-8">
                    <div>
                      <span className="block text-sm text-stone-500 font-bold mb-1">NET WT. 8 OZ</span>
                      <span className="font-playfair font-bold text-4xl text-stone-900">${activeProduct.price}</span>
                    </div>
                    <button
                      onClick={() => setCartCount(c => c + 1)}
                      className="bg-green-700 text-white font-lato font-bold text-lg px-8 py-4 rounded-full hover:bg-green-800 transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1"
                    >
                      Add to Basket
                    </button>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section id="sustainability" className="py-24 bg-[#EFECE6]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div 
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="bg-white p-10 rounded-3xl shadow-sm text-center card-hover"
            >
              <div className="w-16 h-16 bg-green-50 rounded-2xl flex items-center justify-center mx-auto mb-6 text-green-600">
                <Leaf className="w-8 h-8" />
              </div>
              <h3 className="font-playfair font-bold text-2xl mb-4">Certified Compostable</h3>
              <p className="font-lato text-stone-600 leading-relaxed">
                Our plant-based pouches break down in home compost settings, returning nutrients to the soil.
              </p>
            </motion.div>

            <motion.div 
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, delay: 0.2 }}
              className="bg-white p-10 rounded-3xl shadow-sm text-center card-hover"
            >
              <div className="w-16 h-16 bg-green-50 rounded-2xl flex items-center justify-center mx-auto mb-6 text-green-600">
                <Heart className="w-8 h-8" />
              </div>
              <h3 className="font-playfair font-bold text-2xl mb-4">Direct Trade</h3>
              <p className="font-lato text-stone-600 leading-relaxed">
                We build long-term relationships with farmers, ensuring fair wages and sustainable community development.
              </p>
            </motion.div>

            <motion.div 
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, delay: 0.4 }}
              className="bg-white p-10 rounded-3xl shadow-sm text-center card-hover"
            >
              <div className="w-16 h-16 bg-green-50 rounded-2xl flex items-center justify-center mx-auto mb-6 text-green-600">
                <Sun className="w-8 h-8" />
              </div>
              <h3 className="font-playfair font-bold text-2xl mb-4">Meticulously Sourced</h3>
              <p className="font-lato text-stone-600 leading-relaxed">
                We select only the highest quality superfoods, minimally processed to retain their nutritional potting.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission Story */}
      <section id="mission" className="py-0">
        <div className="grid md:grid-cols-2 min-h-[80vh]">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="relative h-[60vh] md:h-auto"
          >
            {/* Reusing hero or goji image for now as lifestyle */}
            <img src={SUPERFOOD_IMAGES.hero} alt="Superfood Lifestyle" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-900/60 to-transparent flex items-end p-12">
              <div className="text-white">
                <div className="flex items-center gap-2 mb-2">
                  <Feather className="w-5 h-5" />
                  <span className="font-bold text-sm tracking-widest uppercase">The Vision</span>
                </div>
                <h3 className="font-playfair text-3xl italic">"Live Life Positive."</h3>
              </div>
            </div>
          </motion.div>
          
          <div className="bg-[#2E3B33] text-[#FDFBF7] p-12 lg:p-24 flex flex-col justify-center">
            <span className="text-green-400 font-bold font-lato tracking-widest uppercase mb-6">Our Purpose</span>
            <h2 className="font-playfair font-bold text-4xl md:text-5xl mb-8 leading-tight">
              Wellness for You, <br/> Health for the Planet.
            </h2>
            <p className="font-lato text-lg text-white/80 leading-relaxed mb-8">
              At Achieve Superfood, we believe that nutrient-dense foods shouldn't come at a cost to the environment. 
              That's why we've partnered with Achieve Pack to revolutionize our packaging, moving towards a zero-waste future without compromising on freshness or quality.
            </p>
            <div className="flex gap-4">
              <button className="border border-white/30 text-white px-8 py-3 rounded-full hover:bg-white hover:text-[#2E3B33] transition-all font-lato font-bold">
                Read Our Impact Report
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-stone-900/5 py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="font-playfair font-bold text-4xl text-stone-900 mb-6">Achieve<span className="text-green-600">Superfood</span></h2>
          <p className="font-lato text-stone-600 max-w-lg mx-auto mb-10">
            Premium organic superfoods.
            <br />Sustainably packaged and ethically sourced.
          </p>
          
          <div className="flex justify-center gap-8 mb-12 font-lato font-bold text-stone-800 text-sm tracking-widest uppercase">
            <a href="#" className="hover:text-green-600 transition-colors">Shop</a>
            <a href="#" className="hover:text-green-600 transition-colors">About</a>
            <a href="#" className="hover:text-green-600 transition-colors">Recipes</a>
            <a href="#" className="hover:text-green-600 transition-colors">Contact</a>
          </div>

          <div className="text-stone-400 text-sm font-lato">
            © 2026 Achieve Superfood. Powered by <Link to="/" className="text-stone-600 hover:text-green-600 font-bold">Achieve Pack</Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
