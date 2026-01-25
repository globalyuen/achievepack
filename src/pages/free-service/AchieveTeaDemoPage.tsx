import React, { useState, useEffect, useRef } from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { ShoppingCart, Menu, X, ArrowLeft, ArrowRight, Check, Leaf, Recycle, ShieldCheck, Award, MapPin, Phone, Mail, Facebook, Instagram, Twitter, ExternalLink, ChevronDown, Globe, Play, Star, Palette, Ruler, Coffee } from 'lucide-react'
import { motion, useInView, useScroll, useTransform, AnimatePresence, Variants } from 'motion/react'
import { ParallaxText } from '../../components/ParallaxText'
import { ScrollTriggeredCards, type CardData } from '../../components/ScrollTriggeredCards'

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

// Tea Images from local assets
const TEA_IMAGES = {
  hero: '/imgs/demo-site/tea/hero.png',
  products: {
    matcha: '/imgs/demo-site/tea/matcha.png',
    chamomile: '/imgs/demo-site/tea/chamomile.png',
    earlGrey: '/imgs/demo-site/tea/earl-grey.png'
  },
  lifestyle: '/imgs/demo-site/tea/lifestyle.png',
  detail: '/imgs/demo-site/tea/detail.png',
  texture: '/imgs/demo-site/tea/texture.png',
  logo: '/imgs/demo-site/tea/hero.png' // Using hero crop for now or could use an icon
}

const PRODUCTS = [
  {
    id: 'morning-zen',
    name: 'Morning Zen Matcha',
    tagline: 'Ceremonial Grade Focus',
    description: 'Shade-grown in Kyoto. Stone-ground for a vibrant emerald green. Rich in antioxidants for sustained energy.',
    price: 34.00,
    weight: '30g Tin',
    image: TEA_IMAGES.products.matcha,
    heroImage: TEA_IMAGES.products.matcha,
    color: '#4A7C59',
    badges: ['Ceremonial Grade', 'Organic', 'Kyoto Origin']
  },
  {
    id: 'royal-earl-grey',
    name: 'Royal Earl Grey',
    tagline: 'Citrus & Bergamot Elegance',
    description: 'A robust Assam black tea base infused with pure Italian bergamot oil and blue cornflowers.',
    price: 22.00,
    weight: '100g Pouch',
    image: TEA_IMAGES.products.earlGrey,
    heroImage: TEA_IMAGES.products.earlGrey,
    color: '#1a365d',
    badges: ['Italian Bergamot', 'Full Body', 'High Caffeine']
  },
  {
    id: 'calm-night',
    name: 'Calm Night Chamomile',
    tagline: 'Soothing Floral Embrace',
    description: 'While Egyptian chamomile blossoms. Caffeine-free and perfect for winding down after a long day.',
    price: 18.00,
    weight: '50g Pouch',
    image: TEA_IMAGES.products.chamomile,
    heroImage: TEA_IMAGES.products.chamomile,
    color: '#D4B483',
    badges: ['Caffeine Free', 'Egyptian Origin', 'Sleep Aid']
  }
]

// Custom scroll items for Tea
const TEA_SCROLL_CARDS: CardData[] = [
  {
    image: TEA_IMAGES.products.matcha,
    title: 'Ceremonial Grade',
    hueA: 90, hueB: 140,
    leftInfo: {
      title: 'Shade Grown',
      description: 'Increases chlorophyll and amino acids like L-Theanine for calm focus.',
      badges: ['L-Theanine', 'Umami']
    },
    rightInfo: {
      title: 'Stone Ground',
      description: 'Slow-ground by granite wheels to preserve delicate nutrients and flavor.',
      badges: ['Traditional', 'Smooth Texture']
    }
  },
  {
    image: TEA_IMAGES.products.earlGrey,
    title: 'Organic Bergamot',
    hueA: 200, hueB: 240,
    leftInfo: {
      title: 'Assam Base',
      description: 'Malty, rich black tea from the Brahmaputra Valley.',
      badges: ['Single Estate', 'Bold']
    },
    rightInfo: {
      title: 'Real Oil',
      description: 'We use cold-pressed oil from Calabria, not synthetic flavorings.',
      badges: ['Cold Pressed', 'Natural']
    }
  },
  {
    image: TEA_IMAGES.detail,
    title: 'Earth Friendly',
    hueA: 30, hueB: 50,
    leftInfo: {
      title: 'Compostable',
      description: 'Pouch breaks down in 180 days. Certified home compostable.',
      badges: ['No Plastic', 'Plant Based']
    },
    rightInfo: {
      title: 'Achieve Pack',
      description: 'Leading innovation in sustainable barrier films.',
      badges: ['High Barrier', 'Freshness Kept']
    }
  },
   {
    image: TEA_IMAGES.texture,
    title: 'Pure Leaf',
    hueA: 300, hueB: 340,
    leftInfo: {
      title: 'Whole Leaf',
      description: 'We never use dust or fannings. Only whole leaves for full flavor expansion.',
      badges: ['Premium Pluck', 'Full Flavor']
    },
    rightInfo: {
      title: 'Hand Blended',
      description: 'Small batches mixed by our tea masters ensures consistency.',
      badges: ['Artisan', 'Small Batch']
    }
  }
]

export default function AchieveTeaDemoPage() {
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
    <div className="min-h-screen bg-[#FDFBF7] text-[#2C3E50] font-sans selection:bg-[#8FBC8F] selection:text-white">
      <Helmet>
        <title>Achieve Tea | Organic Wellness Blends | Sustainable Packaging</title>
        <meta name="description" content="Achieve Tea - Experience the purity of nature with our organic, sustainably packaged teas. Matcha, Earl Grey, and Herbal infusions." />
        <style>{`
          @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,400&family=Montserrat:wght@300;400;500;600&display=swap');
          .font-display { font-family: 'Cormorant Garamond', serif; }
          .font-sans { font-family: 'Montserrat', sans-serif; }
        `}</style>
      </Helmet>

      {/* Achieve Pack Return Banner */}
      <div className="fixed top-0 left-0 right-0 z-[60] bg-[#4A7C59] text-white py-2 px-4 shadow-md">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link to="/free-service/website-upgrade" className="flex items-center gap-2 text-xs uppercase tracking-widest hover:text-white/80 transition">
            <ArrowLeft className="w-3 h-3" />
            Back to Achieve Pack
          </Link>
          <span className="text-[10px] uppercase tracking-widest text-white/80 hidden sm:block">Demo Concept by Achieve Pack</span>
          <Link to="/store" className="text-xs uppercase tracking-widest font-medium hover:text-white/80 transition">
            Get This Packaging
          </Link>
        </div>
      </div>

      {/* Navigation */}
      <nav className={`fixed top-[40px] w-full z-50 transition-all duration-500 ${scrolled ? 'bg-[#FDFBF7]/90 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-8'}`}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 font-display text-2xl font-semibold tracking-wide text-[#2C3E50]">
              <Leaf className="h-5 w-5 text-[#4A7C59]" />
              ACHIEVE TEA
            </div>

            <div className="hidden md:flex items-center space-x-10">
              {['Shop', 'Our Ritual', 'Sustainability'].map((item) => (
                <a key={item} href={`#${item.toLowerCase().replace(' ', '-')}`} className="text-xs font-medium tracking-[0.15em] uppercase text-gray-500 hover:text-[#4A7C59] transition-colors">
                  {item}
                </a>
              ))}
            </div>

            <div className="flex items-center gap-6">
              <button 
                className="relative p-1 hover:text-[#4A7C59] transition"
                onClick={() => setCartCount(c => c + 1)}
              >
                <ShoppingCart className="w-5 h-5" />
                {cartCount > 0 && (
                  <span className="absolute -top-2 -right-2 w-4 h-4 bg-[#C26DBC] text-white rounded-full text-[9px] font-bold flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </button>
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden p-1 hover:text-[#4A7C59] transition">
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={TEA_IMAGES.hero} 
            alt="Zen Garden Tea"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#FDFBF7]/40 via-[#FDFBF7]/10 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center min-h-[80vh]">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="text-[#2C3E50] max-w-xl"
          >
            <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-4 py-2 bg-white/60 backdrop-blur-sm rounded-full text-xs font-semibold tracking-widest uppercase mb-8 text-[#4A7C59] shadow-sm">
              <Star className="w-3 h-3 fill-current" />
              Award Winning Organic Blends
            </motion.div>
            
            <motion.h1 variants={fadeInUp} className="text-6xl md:text-8xl font-display font-light leading-[0.9] mb-8">
              Nurture <br/>
              <span className="italic text-[#4A7C59]">Nature</span> in<br/>
              Every Cup.
            </motion.h1>

            <motion.p variants={fadeInUp} className="text-lg text-gray-700 mb-10 max-w-md font-light leading-relaxed">
              Ethically sourced, organic loose leaf tea packaged in 100% compostable materials. Good for you, good for the earth.
            </motion.p>

            <motion.div variants={fadeInUp} className="flex gap-4">
              <button className="px-10 py-4 bg-[#2C3E50] text-white rounded-none font-medium hover:bg-[#4A7C59] transition shadow-xl text-xs tracking-widest uppercase">
                Explore Blends
              </button>
              <button className="px-10 py-4 border border-[#2C3E50] text-[#2C3E50] rounded-none font-medium hover:bg-white/50 transition backdrop-blur-sm text-xs tracking-widest uppercase flex items-center gap-2">
                <Play className="w-3 h-3 fill-current" /> Our Story
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Marquee */}
      <section className="py-12 bg-[#4A7C59] text-[#FDFBF7]">
        <ParallaxText baseVelocity={-2} textClassName="text-4xl md:text-6xl font-display font-light italic px-8">
          Organic • Sustainable • Compostable Packaging • Single Origin • Fair Trade • 
        </ParallaxText>
      </section>

      {/* Product Grid */}
      <section id="shop" className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-20"
          >
            <span className="text-[#C26DBC] text-xs font-bold tracking-[0.2em] uppercase mb-4 block">The Collection</span>
            <h2 className="text-5xl font-display font-medium text-[#2C3E50]">Curated for Wellness</h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-12">
            {PRODUCTS.map((product) => (
              <motion.div
                key={product.id}
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                whileHover={cardHover}
                className="group cursor-pointer"
              >
                <div className="aspect-[4/5] overflow-hidden rounded-sm mb-8 bg-[#F5F5F0] relative">
                  <div className="absolute top-4 right-4 z-10 flex flex-col items-end gap-2">
                     {product.badges.map((b, i) => (
                       <span key={i} className="bg-white/90 backdrop-blur text-[10px] font-bold uppercase tracking-wider px-2 py-1 text-gray-500">{b}</span>
                     ))}
                  </div>
                  <img src={product.image} alt={product.name} className="w-full h-full object-contain p-8 transition-transform duration-700 group-hover:scale-105" />
                </div>
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-2xl font-display font-medium text-[#2C3E50]">{product.name}</h3>
                  <span className="font-sans font-bold text-[#4A7C59]">${product.price}</span>
                </div>
                <p className="text-gray-500 text-sm mb-4 line-clamp-2 leading-relaxed">{product.description}</p>
                
                <button className="w-full py-3 border border-gray-200 text-xs font-bold uppercase tracking-widest hover:bg-[#2C3E50] hover:text-white transition-colors duration-300">
                  Add to Cart
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Ritual/Lifestyle Section */}
      <section id="our-ritual" className="py-0 relative">
        <div className="grid md:grid-cols-2 min-h-[80vh]">
           <div className="relative h-full min-h-[50vh]">
             <img src={TEA_IMAGES.lifestyle} alt="Pouring Tea" className="absolute inset-0 w-full h-full object-cover" />
           </div>
           
           <div className="bg-[#EBE7DF] flex flex-col justify-center p-12 md:p-24 relative overflow-hidden">
              {/* Bg texture */}
              <div className="absolute inset-0 opacity-5" style={{ backgroundImage: `url(${TEA_IMAGES.texture})`, backgroundSize: 'cover' }} />
              
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={staggerContainer}
                className="relative z-10"
              >
                <motion.span variants={fadeInUp} className="text-[#8FBC8F] text-xs font-bold tracking-[0.2em] uppercase mb-6 block">The Ritual</motion.span>
                <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-display font-medium text-[#2C3E50] mb-8 leading-tight">
                  Slow Down.<br/>Sip Intentionally.
                </motion.h2>
                <motion.p variants={fadeInUp} className="text-gray-600 text-lg mb-10 leading-relaxed font-light">
                  Tea is more than a beverage; it's a moment of connection with yourself. 
                  Our blends are crafted to transform your daily routine into a grounding ritual. 
                  From the energizing whisk of Matcha to the calming steep of Chamomile.
                </motion.p>
                <motion.ul variants={staggerContainer} className="space-y-4 mb-10">
                  {['Sourced from small family farms', 'Blended by master herbalists', 'Tested for purity and potency'].map((item, i) => (
                    <motion.li key={i} variants={slideInRight} className="flex items-center gap-3 text-sm font-medium text-gray-700">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#4A7C59]" />
                      {item}
                    </motion.li>
                  ))}
                </motion.ul>
                <motion.button variants={fadeInUp} className="text-[#2C3E50] font-bold text-xs uppercase tracking-widest border-b border-[#2C3E50] pb-1 hover:text-[#4A7C59] hover:border-[#4A7C59] transition w-max">
                  Read Our Brewing Guide
                </motion.button>
              </motion.div>
           </div>
        </div>
      </section>

      {/* Features Scroll */}
      <section className="py-32 bg-[#fff]">
        <div className="max-w-7xl mx-auto px-6 mb-20 text-center">
           <span className="text-[#C26DBC] text-xs font-bold tracking-[0.2em] uppercase mb-4 block">Why Choose Achieve Tea</span>
           <h2 className="text-4xl font-display font-medium text-[#2C3E50]">Purity in Every Leaf</h2>
        </div>
        <ScrollTriggeredCards cards={TEA_SCROLL_CARDS} className="bg-white" />
      </section>

      {/* Sustainability Section */}
      <section id="sustainability" className="py-24 bg-[#2C3E50] text-[#FDFBF7] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
           <img src={TEA_IMAGES.detail} alt="Texture" className="w-full h-full object-cover" />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-2 gap-20 items-center">
            <div className="relative">
              <div className="absolute top-[-20px] left-[-20px] w-20 h-20 border-t border-l border-[#4A7C59]" />
              <img 
                src={TEA_IMAGES.detail} 
                alt="Compostable Pouch Detail" 
                className="w-full rounded-sm shadow-2xl"
              />
              <div className="absolute -bottom-10 -right-10 bg-[#4A7C59] p-8 text-center rounded-full w-40 h-40 flex flex-col items-center justify-center animate-pulse-slow">
                 <span className="text-3xl font-display font-bold block mb-1">180</span>
                 <span className="text-[10px] uppercase tracking-widest">Days to Compost</span>
              </div>
            </div>

            <div>
              <span className="text-[#8FBC8F] text-xs font-bold tracking-[0.2em] uppercase mb-6 block">Our Commitment</span>
              <h2 className="text-4xl md:text-6xl font-display font-light mb-8">
                Packed with <br/> <span className="italic">Purpose</span>
              </h2>
              <p className="text-[#FDFBF7]/80 text-lg mb-8 leading-relaxed font-light">
                The tea industry generates tons of plastic waste annually. We refused to be part of the problem.
                Partnering with **Achieve Pack**, we developed a fully compostable barrier pouch that protects 
                flavor without harming the planet.
              </p>
              
              <div className="grid grid-cols-3 gap-8 mb-10">
                <div className="text-center">
                  <div className="bg-[#4A7C59]/20 w-12 h-12 flex items-center justify-center rounded-full mx-auto mb-3">
                    <Recycle className="w-5 h-5 text-[#8FBC8F]" />
                  </div>
                  <span className="text-xs uppercase tracking-wide font-bold">Plastic Free</span>
                </div>
                <div className="text-center">
                  <div className="bg-[#4A7C59]/20 w-12 h-12 flex items-center justify-center rounded-full mx-auto mb-3">
                    <Leaf className="w-5 h-5 text-[#8FBC8F]" />
                  </div>
                  <span className="text-xs uppercase tracking-wide font-bold">Bio-Based</span>
                </div>
                <div className="text-center">
                  <div className="bg-[#4A7C59]/20 w-12 h-12 flex items-center justify-center rounded-full mx-auto mb-3">
                    <ShieldCheck className="w-5 h-5 text-[#8FBC8F]" />
                  </div>
                  <span className="text-xs uppercase tracking-wide font-bold">Non-Toxic</span>
                </div>
              </div>

              <Link to="/store" className="inline-flex items-center gap-2 text-[#8FBC8F] hover:text-white transition text-sm font-bold uppercase tracking-widest">
                Learn about Custom Packaging <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#FDFBF7] pt-24 pb-12 border-t border-[#EBE7DF]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12 mb-20">
            <div className="col-span-2">
              <div className="flex items-center gap-2 font-display text-3xl font-semibold tracking-wide text-[#2C3E50] mb-6">
                <Leaf className="h-6 w-6 text-[#4A7C59]" />
                ACHIEVE TEA
              </div>
              <p className="text-gray-500 max-w-sm leading-relaxed mb-8">
                Elevating the tea experience through organic purity and sustainable innovation. Join us in sipping for a better world.
              </p>
              <div className="flex gap-4">
                 <a href="https://www.facebook.com/achievepack" target="_blank" rel="noopener noreferrer" className="w-10 h-10 border border-gray-200 rounded-full flex items-center justify-center text-gray-400 hover:border-[#4A7C59] hover:text-[#4A7C59] transition">
                   <Facebook className="w-4 h-4" />
                 </a>
                 <a href="https://www.instagram.com/achievepack" target="_blank" rel="noopener noreferrer" className="w-10 h-10 border border-gray-200 rounded-full flex items-center justify-center text-gray-400 hover:border-[#4A7C59] hover:text-[#4A7C59] transition">
                   <Instagram className="w-4 h-4" />
                 </a>
                 <a href="https://twitter.com/achievepack" target="_blank" rel="noopener noreferrer" className="w-10 h-10 border border-gray-200 rounded-full flex items-center justify-center text-gray-400 hover:border-[#4A7C59] hover:text-[#4A7C59] transition">
                   <Twitter className="w-4 h-4" />
                 </a>
              </div>
            </div>
            
            <div>
              <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-[#2C3E50] mb-8">Shop Tea</h4>
              <ul className="space-y-4 text-gray-500 text-sm">
                <li><a href="#" className="hover:text-[#4A7C59] transition">Matcha Green Tea</a></li>
                <li><a href="#" className="hover:text-[#4A7C59] transition">Black Tea</a></li>
                <li><a href="#" className="hover:text-[#4A7C59] transition">Herbal Infusions</a></li>
                <li><a href="#" className="hover:text-[#4A7C59] transition">Gift Sets</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-[#2C3E50] mb-8">Company</h4>
              <ul className="space-y-4 text-gray-500 text-sm">
                <li><a href="#" className="hover:text-[#4A7C59] transition">Our Story</a></li>
                <li><a href="#" className="hover:text-[#4A7C59] transition">Sustainability Report</a></li>
                <li><a href="#" className="hover:text-[#4A7C59] transition">Contact Us</a></li>
                <li><a href="#" className="hover:text-[#4A7C59] transition">Wholesale</a></li>
              </ul>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-[#EBE7DF] text-xs text-gray-400 font-medium uppercase tracking-wider">
            <p>© 2026 Achieve Tea. All rights reserved.</p>
            <div className="flex items-center gap-1">
               Powered by <Link to="/" className="text-[#4A7C59] hover:underline">Achieve Pack</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
