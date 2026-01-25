import React, { useState, useEffect, useRef } from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { ShoppingCart, Menu, X, ArrowLeft, ArrowRight, Check, Leaf, Recycle, ShieldCheck, Award, MapPin, Phone, Mail, Facebook, Instagram, Twitter, ExternalLink, ChevronDown, Globe, Play, Star, Pencil, Palette, Ruler } from 'lucide-react'
import { motion, useInView, useScroll, useTransform, AnimatePresence, Variants } from 'motion/react'
import { ParallaxText } from '../../components/ParallaxText'
import { ScrollTriggeredCards, CHIPS_SCROLL_CARDS } from '../../components/ScrollTriggeredCards'

// Reuse motion variants
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }
  }
}

const fadeInScale: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { duration: 0.7, ease: 'easeOut' }
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

const staggerCards: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2
    }
  }
}

const cardHover = {
  scale: 1.03,
  y: -8,
  boxShadow: '0 20px 40px rgba(0,0,0,0.15)',
  transition: { duration: 0.3 }
}

const slideInLeft: Variants = {
  hidden: { opacity: 0, x: -60 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.6, ease: 'easeOut' }
  }
}

const slideInRight: Variants = {
  hidden: { opacity: 0, x: 60 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.6, ease: 'easeOut' }
  }
}

const statReveal: Variants = {
  hidden: { opacity: 0, scale: 0.8, y: 20 },
  visible: { 
    opacity: 1, 
    scale: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' }
  }
}

// Placeholder images for Pencils
const PENCIL_IMAGES = {
  logo: {
    src: 'https://images.unsplash.com/photo-1596443686812-2f45229eeb36?q=80&w=2670&auto=format&fit=crop', // Placeholder
    alt: 'Pencil Canvas Logo',
  },
  products: {
    graphite: {
      hero: 'https://images.unsplash.com/photo-1543519808-8e6e58728d15?q=80&w=2000&auto=format&fit=crop',
      detail: 'https://images.unsplash.com/photo-1596443686812-2f45229eeb36?q=80&w=2000&auto=format&fit=crop'
    },
    charcoal: {
      hero: 'https://images.unsplash.com/photo-1615800098779-1be32e60cca3?q=80&w=2000&auto=format&fit=crop',
      detail: 'https://images.unsplash.com/photo-1623838838334-a74e5b8827fa?q=80&w=2000&auto=format&fit=crop'
    },
    color: {
      hero: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=2000&auto=format&fit=crop',
      detail: 'https://images.unsplash.com/photo-1582234559881-bf9695d7db9b?q=80&w=2000&auto=format&fit=crop'
    }
  },
  lifestyle: 'https://images.unsplash.com/photo-1517644493776-3b608d515865?q=80&w=2000&auto=format&fit=crop',
  sustainability: 'https://images.unsplash.com/photo-1522880980456-be117eb66a01?q=80&w=2000&auto=format&fit=crop'
}

const PRODUCTS = [
  {
    id: 'classic-graphite',
    name: 'Classic Graphite',
    tagline: 'Precision meets elegance',
    description: 'Our signature HB graphite core encased in sustainable cedar. Perfect balance for writing and sketching.',
    price: 12.00,
    weight: 'Pack of 12',
    image: PENCIL_IMAGES.products.graphite.hero,
    heroImage: PENCIL_IMAGES.products.graphite.hero,
    color: '#2e2e2e',
    badges: ['HB', 'Cedar Wood', 'Sustainable']
  },
  {
    id: 'charcoal-black',
    name: 'Deep Charcoal',
    tagline: 'Rich, velvety darkness',
    description: 'Compressed charcoal for bold expressions. Smooth application with minimal dust.',
    price: 15.00,
    weight: 'Pack of 6',
    image: PENCIL_IMAGES.products.charcoal.hero,
    heroImage: PENCIL_IMAGES.products.charcoal.hero,
    color: '#1a1a1a',
    badges: ['Artist Grade', 'Compressed', 'Rich Black']
  },
  {
    id: 'prism-color',
    name: 'Prism Color',
    tagline: 'Vibrant hues, soft core',
    description: 'High-pigment colored pencils with a wax-based core for superior blending and layering.',
    price: 24.00,
    weight: 'Pack of 24',
    image: PENCIL_IMAGES.products.color.hero,
    heroImage: PENCIL_IMAGES.products.color.hero,
    color: '#E63946',
    badges: ['High Pigment', 'Wax Core', 'Blendable']
  }
]

// Custom scroll cards for pencils
const PENCIL_SCROLL_CARDS = [
  {
    image: PENCIL_IMAGES.products.graphite.detail,
    title: 'Precision Core',
    hueA: 200, hueB: 240,
    leftInfo: {
      title: 'Graphite Perfection',
      description: 'Centered bonded cores for break resistance and point retention.',
      badges: ['Bonded Lead', 'Break Resistant']
    },
    rightInfo: {
      title: 'Incense Cedar',
      description: 'Harvested from responsibly managed forests for easy sharpening.',
      badges: ['FSC Certified', 'Easy Sharpen']
    }
  },
  {
    image: PENCIL_IMAGES.products.color.detail,
    title: 'Vibrant Blend',
    hueA: 340, hueB: 20,
    leftInfo: {
      title: 'Artist Pigments',
      description: 'Lightfast pigments ensuring your art stands the test of time.',
      badges: ['Lightfast', 'Vivid']
    },
    rightInfo: {
      title: 'Soft Wax Core',
      description: 'Buttery smooth application perfect for blending and shading.',
      badges: ['Smooth', 'Layering']
    }
  },
  {
    image: PENCIL_IMAGES.sustainability,
    title: 'Eco-Conscious',
    hueA: 100, hueB: 150,
    leftInfo: {
      title: 'Sustainable Wood',
      description: '100% FSC certified wood from renewable forests.',
      badges: ['Sustainable', 'Renewable']
    },
    rightInfo: {
      title: 'Non-Toxic',
      description: 'Safe for artists of all ages. Meets AP & EN71 standards.',
      badges: ['Non-Toxic', 'Safe']
    }
  }
]

export default function PencilDemoPage() {
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
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      <Helmet>
        <title>Pencil Canvas | Premium Artist Tools | Sustainable Design</title>
        <meta name="description" content="Discover Pencil Canvas - premium sustainable pencils for artists and creators. Graphite, charcoal, and color collections." />
        <style>{`
          @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400&family=Inter:wght@300;400;500;600&display=swap');
          .font-display { font-family: 'Playfair Display', serif; }
          .font-sans { font-family: 'Inter', sans-serif; }
        `}</style>
      </Helmet>

      {/* Achieve Pack Return Banner */}
      <div className="fixed top-0 left-0 right-0 z-[60] bg-black text-white py-2 px-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link to="/free-service/website-upgrade" className="flex items-center gap-2 text-sm hover:text-white/80 transition">
            <ArrowLeft className="w-4 h-4" />
            Back to Achieve Pack
          </Link>
          <span className="text-xs text-white/80 hidden sm:block">This is a demo website created by Achieve Pack</span>
          <Link to="/store" className="text-sm font-medium hover:text-white/80 transition">
            Browse Packaging
          </Link>
        </div>
      </div>

      {/* Navigation */}
      <nav className={`fixed top-[40px] w-full z-50 transition-all duration-500 ${scrolled ? 'bg-white/95 backdrop-blur-xl shadow-sm py-4' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 font-display text-2xl font-bold tracking-tighter">
              <Pencil className="h-6 w-6" />
              PENCIL CANVAS
            </div>

            <div className="hidden md:flex items-center space-x-8">
              {['Collections', 'Story', 'Sustainability'].map((item) => (
                <a key={item} href={`#${item.toLowerCase()}`} className="text-sm font-medium tracking-wide text-gray-600 hover:text-black transition-colors">
                  {item}
                </a>
              ))}
            </div>

            <div className="flex items-center gap-4">
              <button 
                className="relative p-2"
                onClick={() => setCartCount(c => c + 1)}
              >
                <ShoppingCart className="w-5 h-5" />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 w-4 h-4 bg-black text-white rounded-full text-[10px] font-bold flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </button>
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden p-1">
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-[#f8f8f8]">
        <div className="absolute inset-0 z-0">
          <img 
            src={activeProduct.heroImage} 
            alt={activeProduct.name}
            className="w-full h-full object-cover opacity-90 transition-opacity duration-700"
          />
          <div className="absolute inset-0 bg-black/20" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="text-white"
          >
            <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-3 py-1 border border-white/30 rounded-full text-sm font-medium mb-6 backdrop-blur-md">
              <Palette className="w-4 h-4" />
              Premium Artist Tools
            </motion.div>
            
            <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl font-display font-light leading-tight mb-6">
              Create with <br/>
              <span className="font-bold italic">Intention</span>
            </motion.h1>

            <motion.p variants={fadeInUp} className="text-xl text-white/90 mb-8 max-w-lg font-light leading-relaxed">
              Experience the perfect balance of form and function. Sustainable cedar, precision cores, timeless design.
            </motion.p>

            <motion.div variants={fadeInUp} className="flex gap-4">
              <button className="px-8 py-4 bg-white text-black rounded-full font-medium hover:bg-gray-100 transition shadow-lg">
                Shop Collection
              </button>
              <button className="px-8 py-4 border border-white text-white rounded-full font-medium hover:bg-white/10 transition backdrop-blur-sm">
                Watch Film
              </button>
            </motion.div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="hidden md:flex justify-end"
          >
            <div className="bg-white/10 backdrop-blur-xl p-8 rounded-2xl border border-white/20 w-80 text-white">
               <h3 className="text-2xl font-display mb-4">Featured</h3>
               <div className="space-y-4">
                 {PRODUCTS.map(p => (
                   <button
                    key={p.id}
                    onClick={() => setActiveProduct(p)}
                    className={`w-full text-left p-4 rounded-xl transition-all ${activeProduct.id === p.id ? 'bg-white text-black' : 'hover:bg-white/10'}`}
                   >
                     <div className="font-bold">{p.name}</div>
                     <div className={`text-sm ${activeProduct.id === p.id ? 'text-gray-600' : 'text-gray-300'}`}>{p.tagline}</div>
                   </button>
                 ))}
               </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Marquee */}
      <section className="py-8 bg-black text-white">
        <ParallaxText baseVelocity={-2} textClassName="text-4xl md:text-6xl font-display font-light italic px-4">
          Sketch • Draw • Create • Inspire • Design • 
        </ParallaxText>
      </section>

      {/* Product Grid */}
      <section id="collections" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-display font-bold mb-4">The Collection</h2>
            <p className="text-gray-500">Tools for every stage of your creative process</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {PRODUCTS.map((product) => (
              <motion.div
                key={product.id}
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                whileHover={cardHover}
                className="group"
              >
                <div className="aspect-[3/4] overflow-hidden rounded-2xl mb-6 bg-gray-100 relative">
                  <img src={product.image} alt={product.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
                </div>
                <h3 className="text-2xl font-display font-bold mb-2">{product.name}</h3>
                <p className="text-gray-600 mb-4 h-12">{product.description}</p>
                <div className="flex items-center justify-between">
                  <span className="font-bold">${product.price.toFixed(2)}</span>
                  <button className="px-6 py-2 bg-black text-white rounded-full text-sm hover:bg-gray-800 transition">
                    Add to Cart
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Scroll */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 mb-12 text-center">
           <h2 className="text-3xl font-display font-bold">Engineered for Artists</h2>
        </div>
        <ScrollTriggeredCards cards={PENCIL_SCROLL_CARDS} />
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-black text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">Sustainable by Design</h2>
              <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                We believe the tools we use to create beautiful things shouldn't destroy the planet. 
                That's why every PENCIL CANVAS product is crafted from 100% FSC-certified incense cedar.
              </p>
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <div className="text-4xl font-display font-bold text-[#E63946] mb-2">100%</div>
                  <div className="text-sm text-gray-500 uppercase tracking-wide">FSC Certified</div>
                </div>
                <div>
                  <div className="text-4xl font-display font-bold text-[#E63946] mb-2">0%</div>
                  <div className="text-sm text-gray-500 uppercase tracking-wide">Plastic Packaging</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src={PENCIL_IMAGES.sustainability} 
                alt="Sustainable wood" 
                className="rounded-2xl grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-100 pt-20 pb-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-2">
              <div className="flex items-center gap-2 font-display text-2xl font-bold tracking-tighter mb-6">
                <Pencil className="h-6 w-6" />
                PENCIL CANVAS
              </div>
              <p className="text-gray-500 max-w-sm">
                Elevating the simple act of putting pencil to paper. 
                Premium tools for the modern creator.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-6">Shop</h4>
              <ul className="space-y-4 text-gray-600">
                <li><a href="#" className="hover:text-black">Graphite</a></li>
                <li><a href="#" className="hover:text-black">Charcoal</a></li>
                <li><a href="#" className="hover:text-black">Color</a></li>
                <li><a href="#" className="hover:text-black">Accessories</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-6">About</h4>
              <ul className="space-y-4 text-gray-600">
                <li><a href="#" className="hover:text-black">Story</a></li>
                <li><a href="#" className="hover:text-black">Sustainability</a></li>
                <li><a href="#" className="hover:text-black">Contact</a></li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-100 text-sm text-gray-500">
            <p>© 2026 Pencil Canvas. All rights reserved.</p>
            <div className="flex items-center gap-1">
               Powered by <Link to="/" className="text-black font-semibold hover:underline">Achieve Pack</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
