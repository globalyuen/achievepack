import React, { useState, useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { ShoppingCart, Menu, X, ArrowLeft, ArrowRight, Dog, Bone, Heart, ShieldCheck, Leaf, Check, Star, Award, MapPin } from 'lucide-react'
import { motion, AnimatePresence, Variants } from 'framer-motion'
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

// ============================================
// ASSETS & DATA
// ============================================

const PET_IMAGES = {
  hero: '/imgs/demo-site/pet/hero.png',
  lifestyle: '/imgs/demo-site/pet/lifestyle.png',
  products: {
    wagyu: '/imgs/demo-site/pet/wagyu.png',
    salmon: '/imgs/demo-site/pet/salmon.png',
    duck: '/imgs/demo-site/pet/duck.png'
  }
}

const PRODUCTS = [
  {
    id: 'wagyu-bites',
    name: 'Wagyu Beef Bites',
    tagline: 'Premium Protein',
    description: '100% Grass-fed Wagyu beef, air-dried to perfection. Rich in Omega-3 and Omega-6 for a healthy coat and heart.',
    price: 18.99,
    weight: '6oz (170g)',
    image: PET_IMAGES.products.wagyu,
    color: '#8B4513', // Saddle Brown
    bg: 'bg-[#8B4513]/5',
    accent: 'text-[#8B4513]',
    badge: 'Hip & Joint'
  },
  {
    id: 'salmon-superfood',
    name: 'Salmon Superfood',
    tagline: 'Vitality Boost',
    description: 'Wild-caught salmon blended with kale and blueberries. A nutrient-dense treat packed with antioxidants.',
    price: 16.99,
    weight: '6oz (170g)',
    image: PET_IMAGES.products.salmon,
    color: '#CD5C5C', // Indian Red
    bg: 'bg-[#CD5C5C]/5',
    accent: 'text-[#CD5C5C]',
    badge: 'Skin & Coat'
  },
  {
    id: 'orchard-duck',
    name: 'Orchard Duck',
    tagline: 'Hypoallergenic',
    description: 'Free-range duck with sweet potato and apple. Grain-free and gentle on sensitive stomachs.',
    price: 17.99,
    weight: '6oz (170g)',
    image: PET_IMAGES.products.duck,
    color: '#2E8B57', // Sea Green
    bg: 'bg-[#2E8B57]/5',
    accent: 'text-[#2E8B57]',
    badge: 'Sensitive Digestion'
  }
]

// Feature Cards for Scroll Section
const PET_SCROLL_CARDS = [
  {
    image: PET_IMAGES.products.wagyu,
    title: 'Peak Freshness',
    hueA: 30, hueB: 45, // Browns/Oranges
    leftInfo: {
      title: 'High Barrier',
      description: 'Our multi-layer metal-free barrier blocks oxygen and moisture, keeping treats chewy and fresh for months.',
      badges: ['O2 Barrier', 'Moisture Block']
    },
    rightInfo: {
      title: 'Aroma Lock',
      description: 'Hermetic seals ensure that enticing meat aroma stays inside the bag until you open it.',
      badges: ['Scent Lock', 'Flavor Seal']
    }
  },
  {
    image: PET_IMAGES.products.duck,
    title: 'Earth Friendly',
    hueA: 100, hueB: 120, // Greens
    leftInfo: {
      title: 'Recyclable',
      description: 'Made from mono-material PE that can be recycled with grocery bags. No multi-material laminates.',
      badges: ['Store Drop-off', 'Circular']
    },
    rightInfo: {
      title: 'Soft Touch',
      description: 'Luxurious matte finish that feels premium in hand while being fully recyclable.',
      badges: ['Matte Finish', 'Tactile']
    }
  },
  {
    image: PET_IMAGES.lifestyle,
    title: 'Dog Approved',
    hueA: 200, hueB: 220, // Blues
    leftInfo: {
      title: 'Resealable',
      description: 'Premium press-to-close zippers that actually work. Keep the treats in and the pests out.',
      badges: ['Durable Zipper', 'Easy Open']
    },
    rightInfo: {
      title: 'Safe Materials',
      description: 'BPA-free, food-grade materials certified for direct food contact. Safety first for your furry friend.',
      badges: ['BPA Free', 'Food Grade']
    }
  }
]

export default function AchievePetDemoPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [cartCount, setCartCount] = useState(0)
  const [activeProduct, setActiveProduct] = useState(PRODUCTS[0])

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-[#FDFBF7] text-[#4A4A4A] font-sans selection:bg-[#E6C288] selection:text-[#4A4A4A]">
      <Helmet>
        <title>Achieve Pet | Premium Natural Treats | Demo Site</title>
        <meta name="description" content="Achieve Pet - Premium dog treats in high-barrier recyclable packaging. Keeping trails fresh and tails wagging." />
        <style>{`
          @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display&family=DM+Sans:opsz,wght@9..40,400;500;700&display=swap');
          .font-serif { font-family: 'DM Serif Display', serif; }
          .font-sans { font-family: 'DM Sans', sans-serif; }
        `}</style>
      </Helmet>

      {/* Achieve Pack Return Banner */}
      <div className="fixed top-0 left-0 right-0 z-[60] bg-[#4A4A4A] text-[#FDFBF7] py-2 px-4 shadow-md">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link to="/free-service/website-upgrade" className="flex items-center gap-2 text-sm hover:text-[#E6C288] transition">
            <ArrowLeft className="w-4 h-4" />
            Back to Achieve Pack
          </Link>
          <span className="text-xs text-[#FDFBF7]/80 hidden sm:block font-medium tracking-wide">DEMO SITE BY ACHIEVE PACK</span>
          <Link to="/packaging/stand-up-pouches" className="text-sm font-medium hover:text-[#E6C288] transition">
            View Pouch Specs
          </Link>
        </div>
      </div>

      {/* Navigation */}
      <nav className={`fixed top-[40px] w-full z-50 transition-all duration-500 ${scrolled ? 'bg-[#FDFBF7]/95 backdrop-blur-xl shadow-sm py-4 border-b border-[#E5E0D6]' : 'bg-transparent py-8'}`}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Dog className="h-8 w-8 text-[#8B4513] stroke-[1.5]" />
              <span className="font-serif text-2xl text-[#4A4A4A] tracking-tight">
                Achieve<span className="text-[#8B4513]">Pet.</span>
              </span>
            </div>

            <div className="hidden md:flex items-center space-x-12">
              {['Treats', 'Our Story', 'Sustainability'].map((item) => (
                <a key={item} href={`#${item.toLowerCase().replace(' ', '-')}`} className="text-sm font-bold tracking-wide text-[#4A4A4A]/80 hover:text-[#8B4513] transition-colors uppercase">
                  {item}
                </a>
              ))}
            </div>

            <div className="flex items-center gap-6">
              <button 
                className="relative p-2 hover:text-[#8B4513] transition"
                onClick={() => setCartCount(c => c + 1)}
              >
                <ShoppingCart className="w-6 h-6 stroke-[1.5]" />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 w-5 h-5 bg-[#8B4513] text-white rounded-full text-[10px] font-bold flex items-center justify-center animate-bounce">
                    {cartCount}
                  </span>
                )}
              </button>
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden p-1">
                {isMenuOpen ? <X className="w-6 h-6 stroke-[1.5]" /> : <Menu className="w-6 h-6 stroke-[1.5]" />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center pt-24 overflow-hidden bg-[#F4F1EA]">
         {/* Background Pattern */}
         <div className="absolute inset-0 z-0 opacity-[0.03]" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
         }} />

         <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="space-y-8"
            >
               <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-4 py-2 bg-[#E6C288]/20 text-[#8B4513] rounded-full text-sm font-bold tracking-wide uppercase">
                  <Award className="w-4 h-4" />
                  Voted Best New Treat 2026
               </motion.div>
               
               <motion.h1 variants={fadeInUp} className="font-serif text-6xl md:text-8xl text-[#2C2C2C] leading-[0.9]">
                  Real Food <br/>
                  <span className="italic text-[#8B4513]">Real Love.</span>
               </motion.h1>

               <motion.p variants={fadeInUp} className="text-xl text-[#4A4A4A]/80 max-w-lg leading-relaxed font-medium">
                  Small-batch, single-ingredient treats in high-barrier sustainable packaging. Because your best friend deserves the best.
               </motion.p>
               
               <motion.div variants={fadeInUp} className="flex gap-4">
                  <button className="px-8 py-4 bg-[#8B4513] text-white rounded-xl font-bold hover:bg-[#723910] transition shadow-lg shadow-[#8B4513]/20">
                     Shop All Treats
                  </button>
                  <button className="px-8 py-4 bg-white text-[#8B4513] border-2 border-[#8B4513]/10 rounded-xl font-bold hover:border-[#8B4513] transition">
                     Meet the Farmers
                  </button>
               </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 100, rotate: 10 }}
              animate={{ opacity: 1, x: 0, rotate: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="relative h-[600px] flex items-center justify-center"
            >
               {/* Decorative Circle */}
               <div className="absolute w-[500px] h-[500px] bg-[#E6C288] rounded-full opacity-20 blur-3xl animate-pulse" />
               <img 
                  src={PET_IMAGES.hero} 
                  alt="Achieve Pet Treats Collection" 
                  className="relative z-10 w-full max-h-full object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-700 ease-out"
               />
            </motion.div>
         </div>
      </section>

      {/* Marquee */}
      <section className="py-6 bg-[#2E8B57] text-[#FDFBF7] overflow-hidden">
        <ParallaxText baseVelocity={1.5} textClassName="text-xl md:text-3xl font-serif italic px-8">
           • 100% Natural • Human Grade • High Protein • Grain Free • Sustainable Packaging • Made with Love
        </ParallaxText>
      </section>

      {/* Products Section */}
      <section id="treats" className="py-24 bg-white">
         <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16 space-y-4">
               <span className="text-[#8B4513] font-bold tracking-widest uppercase text-sm">The Collection</span>
               <h2 className="font-serif text-5xl text-[#2C2C2C]">Pawsitively Delicious</h2>
            </div>

            <div className="grid lg:grid-cols-12 gap-12">
               {/* Product Selector */}
               <div className="lg:col-span-4 space-y-4">
                  {PRODUCTS.map(product => (
                     <button
                        key={product.id}
                        onClick={() => setActiveProduct(product)}
                        className={`w-full text-left p-6 rounded-2xl border-2 transition-all duration-300 flex items-center gap-4 group ${activeProduct.id === product.id ? `border-[${product.color}] bg-[#FDFBF7] shadow-lg` : 'border-transparent hover:bg-gray-50'}`}
                        style={{ borderColor: activeProduct.id === product.id ? product.color : 'transparent' }}
                     >
                        <div className={`w-16 h-16 rounded-xl flex items-center justify-center shrink-0 transition-colors ${activeProduct.id === product.id ? 'bg-white' : 'bg-gray-100'}`}>
                           <img src={product.image} alt={product.name} className="w-12 h-12 object-contain" />
                        </div>
                        <div>
                           <h3 className="font-bold text-lg text-[#2C2C2C]">{product.name}</h3>
                           <p className="text-sm text-gray-500 font-medium">{product.tagline}</p>
                        </div>
                     </button>
                  ))}
               </div>

               {/* Product Detail */}
               <div className="lg:col-span-8 bg-[#FDFBF7] rounded-[3rem] p-8 md:p-16 relative overflow-hidden flex flex-col items-center text-center border border-[#E5E0D6]">
                  <AnimatePresence mode="wait">
                     <motion.div
                        key={activeProduct.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.4 }}
                        className="relative z-10 max-w-lg"
                     >
                        <span 
                           className="inline-block px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-8 bg-white border shadow-sm"
                           style={{ color: activeProduct.color, borderColor: activeProduct.color }}
                        >
                           {activeProduct.badge}
                        </span>
                        
                        <div className="relative aspect-square mb-12 flex items-center justify-center">
                           <div 
                              className="absolute inset-0 rounded-full blur-3xl opacity-30 scale-75"
                              style={{ backgroundColor: activeProduct.color }} 
                           />
                           <img 
                              src={activeProduct.image} 
                              alt={activeProduct.name} 
                              className="w-full h-full object-contain drop-shadow-2xl hover:rotate-3 transition-transform duration-500"
                           />
                        </div>

                        <h3 className="font-serif text-4xl mb-4 text-[#2C2C2C]">{activeProduct.name}</h3>
                        <p className="text-lg text-gray-600 mb-8 leading-relaxed">{activeProduct.description}</p>
                        
                        <div className="flex items-center justify-center gap-8 mb-8">
                           <div className="text-center">
                              <p className="text-xs text-gray-400 uppercase font-bold tracking-widest mb-1">Weight</p>
                              <p className="font-serif text-xl">{activeProduct.weight}</p>
                           </div>
                           <div className="w-px h-10 bg-gray-200" />
                           <div className="text-center">
                              <p className="text-xs text-gray-400 uppercase font-bold tracking-widest mb-1">Price</p>
                              <p className="font-serif text-xl">${activeProduct.price}</p>
                           </div>
                        </div>

                        <button 
                           className="w-full py-4 text-white rounded-xl font-bold text-lg shadow-xl hover:scale-[1.02] transition-transform active:scale-95"
                           style={{ backgroundColor: activeProduct.color }}
                           onClick={() => setCartCount(c => c + 1)}
                        >
                           Add to Cart
                        </button>
                     </motion.div>
                  </AnimatePresence>
               </div>
            </div>
         </div>
      </section>

      {/* Scroll Features */}
      <section id="sustainability" className="py-24 bg-[#E5E0D6]">
         <div className="max-w-7xl mx-auto px-6 mb-16 text-center">
            <span className="text-[#8B4513] font-bold tracking-widest uppercase text-sm block mb-4">Why It Matters</span>
            <h2 className="font-serif text-4xl md:text-5xl text-[#2C2C2C]">Packaging That Protects</h2>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto text-lg">
               We use advanced high-barrier films that keep our treats fresh without using materials that harm the planet.
            </p>
         </div>
         <ScrollTriggeredCards cards={PET_SCROLL_CARDS} />
      </section>

      {/* Lifestyle / Story */}
      <section id="our-story" className="py-0 grid md:grid-cols-2 min-h-[80vh]">
         <div className="relative h-full min-h-[500px]">
            <img src={PET_IMAGES.lifestyle} alt="Happy Dog" className="absolute inset-0 w-full h-full object-cover" />
         </div>
         <div className="bg-[#8B4513] text-[#FDFBF7] p-12 lg:p-24 flex flex-col justify-center">
            <Heart className="w-12 h-12 text-[#E6C288] mb-8" />
            <h2 className="font-serif text-5xl mb-8 leading-tight">
               From Our Family <br/> To Yours.
            </h2>
            <p className="text-[#FDFBF7]/80 text-lg mb-12 leading-relaxed font-light">
               Achieve Pet was born from a simple promise: to feed our dogs the same quality food we eat ourselves. 
               No fillers, no preservatives, and absolutely no mystery ingredients. Just pure, wholesome nutrition 
               packed in bags that care for the earth they run on.
            </p>
            
            <div className="grid grid-cols-2 gap-8 mb-12 border-t border-[#FDFBF7]/10 pt-8">
               <div>
                  <h4 className="font-serif text-3xl mb-2 text-[#E6C288]">50k+</h4>
                  <p className="text-sm opacity-60 uppercase tracking-widest">Happy Tails</p>
               </div>
               <div>
                  <h4 className="font-serif text-3xl mb-2 text-[#E6C288]">100%</h4>
                  <p className="text-sm opacity-60 uppercase tracking-widest">Satisfaction Guarantee</p>
               </div>
            </div>

            <button className="self-start text-[#FDFBF7] font-bold border-b-2 border-[#E6C288] pb-1 hover:text-[#E6C288] transition-colors">
               READ OUR FULL STORY
            </button>
         </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#2C2C2C] text-white pt-24 pb-12">
         <div className="max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-4 gap-12 mb-16">
               <div className="col-span-2">
                  <div className="flex items-center gap-2 mb-6">
                     <Dog className="h-8 w-8 text-[#E6C288]" />
                     <span className="font-serif text-2xl text-white">Achieve<span className="text-[#E6C288]">Pet.</span></span>
                  </div>
                  <p className="text-gray-400 max-w-sm leading-relaxed">
                     Premium nutrition for the modern dog. <br/>
                     Packaged sustainably. Delivered with love.
                  </p>
               </div>
               <div>
                  <h4 className="font-bold text-[#E6C288] uppercase tracking-widest text-sm mb-6">Explore</h4>
                  <ul className="space-y-4 text-gray-400">
                     <li><a href="#" className="hover:text-white transition">All Treats</a></li>
                     <li><a href="#" className="hover:text-white transition">Bundles</a></li>
                     <li><a href="#" className="hover:text-white transition">Merch</a></li>
                     <li><a href="#" className="hover:text-white transition">Find a Store</a></li>
                  </ul>
               </div>
               <div>
                  <h4 className="font-bold text-[#E6C288] uppercase tracking-widest text-sm mb-6">Help</h4>
                  <ul className="space-y-4 text-gray-400">
                     <li><a href="#" className="hover:text-white transition">Shipping & Returns</a></li>
                     <li><a href="#" className="hover:text-white transition">FAQ</a></li>
                     <li><a href="#" className="hover:text-white transition">Contact Us</a></li>
                  </ul>
               </div>
            </div>
            <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-800 text-sm text-gray-500">
               <p>© 2026 Achieve Pet. All rights reserved.</p>
               <div className="flex items-center gap-2 mt-4 md:mt-0">
                  <span>Powered by</span>
                  <Link to="/" className="text-white font-bold hover:text-[#E6C288] transition">Achieve Pack</Link>
               </div>
            </div>
         </div>
      </footer>
    </div>
  )
}
