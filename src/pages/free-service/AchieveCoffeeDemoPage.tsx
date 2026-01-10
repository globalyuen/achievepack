import React, { useState, useEffect, useRef } from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { ChevronDown, ArrowRight, ArrowLeft, Leaf, Award, MapPin, Check, Recycle, Globe, ShieldCheck, Coffee, ExternalLink, Star, Users } from 'lucide-react'
import { motion, AnimatePresence, useScroll, useTransform, type Variants } from 'motion/react'
import { supabase } from '../../lib/supabase'
import { ParallaxText } from '../../components/ParallaxText'
import { ScrollTriggeredCards, COFFEE_SCROLL_CARDS } from '../../components/ScrollTriggeredCards'

// ═══════════════════════════════════════════════════════════════════════════
// MOTION ANIMATION VARIANTS - Reusable animation configurations
// ═══════════════════════════════════════════════════════════════════════════

// Fade in with upward motion - used for hero elements and general reveals
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }
  }
}

// Fade in from left - for alternating sections
const slideInLeft: Variants = {
  hidden: { opacity: 0, x: -60 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.7, ease: 'easeOut' }
  }
}

// Fade in from right - for alternating sections
const slideInRight: Variants = {
  hidden: { opacity: 0, x: 60 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.7, ease: 'easeOut' }
  }
}

// Stagger container - orchestrates children animations
const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1
    }
  }
}

// Scale up animation - for feature cards
const scaleUp: Variants = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { duration: 0.5, ease: 'easeOut' }
  }
}

// Card hover animation preset
const cardHover = {
  scale: 1.03,
  y: -8,
  transition: { duration: 0.3, ease: 'easeOut' }
}

// High-quality product images from demo-site/coffee
const COFFEE_IMAGES = {
  hero: '/imgs/demo-site/coffee/a_achieve_coffee_kv_flagship_opening_9453786.webp',
  brandStatement: '/imgs/demo-site/coffee/a_achieve_coffee_kv_brand_statement_8692247.webp',
  limitedSeries: '/imgs/demo-site/coffee/a_achieve_coffee_kv_limited_series_2884858.webp',
  brightSeries: '/imgs/demo-site/coffee/a_achieve_coffee_kv_bright_series_0823684.webp',
  warmSeries: '/imgs/demo-site/coffee/a_achieve_coffee_kv_warm_series_5435371.webp',
  detail1: '/imgs/demo-site/coffee/a_achieve_detail_01_limited_series_5452944.webp',
  detail2: '/imgs/demo-site/coffee/a_achieve_detail_02_design_1799169.webp',
  detail3: '/imgs/demo-site/coffee/a_achieve_detail_03_perspectives_1618831.webp',
  detail4: '/imgs/demo-site/coffee/a_achieve_detail_04_craftsmanship_5633579.webp',
  detail5: '/imgs/demo-site/coffee/a_achieve_detail_05_dimensional_3952382.webp',
  detail6: '/imgs/demo-site/coffee/a_achieve_detail_06_typography_5171494.webp',
  detail7: '/imgs/demo-site/coffee/a_achieve_detail_07_flatlay_3502987.webp',
  detail8: '/imgs/demo-site/coffee/a_achieve_detail_08_materials_3186664.webp',
  detail9: '/imgs/demo-site/coffee/a_achieve_detail_09_signature_0200823.webp',
  detail10: '/imgs/demo-site/coffee/a_achieve_detail_10_final_masterpiece_6237738.webp'
}

// Default demo content - can be overridden by admin settings
const DEFAULT_CONTENT = {
  brand: {
    name: 'Achieve Coffee',
    tagline: 'Go Against the Grain',
    taglineWords: ['Go', 'Against', 'the', 'Grain'],
    description: 'Surrender to the moment with each sip and every cup of our wide and varied specialty coffee selection.',
    ctaText: 'Shop Now',
    ctaLink: '#shop'
  },
  hero: {
    backgroundImage: COFFEE_IMAGES.hero,
    overlayOpacity: 0.5
  },
  marquee: {
    text: 'NEW * FRESH OFF THE TREE * NEW',
    speed: 30
  },
  products: [
    {
      id: '1',
      name: 'Achieve Signature Blend',
      price: 29.00,
      type: 'Single Origin',
      origin: 'Ethiopia Yirgacheffe',
      process: 'Natural',
      notes: 'Blueberry, Jasmine, Dark Chocolate',
      image: COFFEE_IMAGES.detail1
    },
    {
      id: '2',
      name: 'Morning Ritual',
      price: 25.00,
      type: 'Single Origin',
      origin: 'Colombia Huila',
      process: 'Washed',
      notes: 'Caramel, Red Apple, Hazelnut',
      image: COFFEE_IMAGES.detail4
    },
    {
      id: '3',
      name: 'Red Honey Reserve',
      price: 34.00,
      type: 'Single Origin',
      origin: 'Costa Rica Tarrazú',
      process: 'Red Honey',
      notes: 'Mango, Brown Sugar, Citrus',
      image: COFFEE_IMAGES.detail9
    }
  ],
  collections: [
    {
      id: 'limited',
      name: 'Limited Series',
      logo: 'LIMITED',
      description: "They're the highest echelon of quality we find with producers we already work with. These coffees are produced in very small quantity which makes them highly limited.",
      bgColor: 'from-amber-900 to-amber-950',
      image: COFFEE_IMAGES.limitedSeries,
      images: [
        COFFEE_IMAGES.detail1,
        COFFEE_IMAGES.detail2,
        COFFEE_IMAGES.detail3
      ]
    },
    {
      id: 'bright',
      name: 'Bright Series',
      logo: 'BRIGHT',
      description: 'They are developed with bright aromatic flavors in mind. These lighter roasts will require more attention to the extraction details.',
      bgColor: 'from-orange-800 to-orange-950',
      image: COFFEE_IMAGES.brightSeries,
      images: [
        COFFEE_IMAGES.detail4,
        COFFEE_IMAGES.detail5,
        COFFEE_IMAGES.detail6
      ]
    },
    {
      id: 'warm',
      name: 'Warm Series',
      logo: 'WARM',
      description: 'It showcases the personality of the coffee without adding a burnt taste. These coffees are developed with sweetness, warmth, round body in mind.',
      bgColor: 'from-stone-800 to-stone-950',
      image: COFFEE_IMAGES.warmSeries,
      images: [
        COFFEE_IMAGES.detail7,
        COFFEE_IMAGES.detail8,
        COFFEE_IMAGES.detail9
      ]
    }
  ],
  mission: {
    title: 'Our Mission',
    content: "We've been accused of having a one-track mind. And to those accusations we say - thank you. Because we know it's by focusing on one thing that many things happen. And at Achieve, that one thing was always coffee.",
    image: COFFEE_IMAGES.brandStatement,
    coordinates: '22.3193° N — 114.1694° E'
  },
  subscription: {
    title: 'Never Run Out',
    steps: [
      'Select your coffee and size',
      'Select your frequency',
      'Sit back and Achieve'
    ],
    discount: 'Save up to 15% on every order'
  }
}

// Parallax hook for scroll effects
const useParallax = (speed: number = 0.5) => {
  const [offset, setOffset] = useState(0)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (ref.current) {
        const scrolled = window.scrollY
        setOffset(scrolled * speed)
      }
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [speed])

  return { ref, offset }
}

// Scroll reveal hook
const useScrollReveal = () => {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1, rootMargin: '-50px' }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  return { ref, isVisible }
}

// Hero Text Animation Component - GSAP-like staggered reveal
const HeroText: React.FC<{ words: string[] }> = ({ words }) => {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <h1 className="text-[12vw] md:text-[8vw] lg:text-[6vw] font-black uppercase leading-[0.85] tracking-tighter">
      {words.map((word, i) => (
        <span
          key={i}
          className="block overflow-hidden"
        >
          <span
            className={`block transition-all duration-700 ease-out ${
              mounted
                ? 'translate-y-0 opacity-100'
                : 'translate-y-full opacity-0'
            }`}
            style={{ transitionDelay: `${i * 150}ms` }}
          >
            {word}
          </span>
        </span>
      ))}
    </h1>
  )
}

// Marquee Component - Infinite scroll
const Marquee: React.FC<{ text: string; speed?: number }> = ({ text, speed = 30 }) => {
  return (
    <div className="overflow-hidden bg-neutral-900 py-4">
      <div
        className="flex whitespace-nowrap animate-marquee"
        style={{ '--marquee-speed': `${speed}s` } as React.CSSProperties}
      >
        {[...Array(10)].map((_, i) => (
          <span key={i} className="text-white/80 text-sm uppercase tracking-[0.3em] mx-8">
            {text}
          </span>
        ))}
      </div>
    </div>
  )
}

// Product Card with Motion hover effects
const ProductCard: React.FC<{
  product: typeof DEFAULT_CONTENT.products[0]
  index: number
}> = ({ product, index }) => {
  return (
    <motion.div
      className="group relative cursor-pointer"
      variants={fadeInUp}
      whileHover={cardHover}
      style={{ willChange: 'transform' }}
    >
      <div className="relative overflow-hidden rounded-2xl bg-cream-100/10 backdrop-blur-sm border-2 border-white/20 hover:border-white/40 transition-colors duration-300">
        <div className="aspect-square overflow-hidden">
          <motion.img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5 }}
          />
        </div>
        <div className="p-6 text-white">
          <h3 className="text-lg font-bold mb-1">{product.name}</h3>
          <p className="text-2xl font-light mb-4">${product.price.toFixed(2)}</p>
          <div className="space-y-1 text-sm text-white/70">
            <p><span className="text-white/50">Type:</span> {product.type}</p>
            <p><span className="text-white/50">Origin:</span> {product.origin}</p>
            <p><span className="text-white/50">Process:</span> {product.process}</p>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

// Collection Card with Motion animations
const CollectionCard: React.FC<{
  collection: typeof DEFAULT_CONTENT.collections[0]
  isReversed?: boolean
}> = ({ collection, isReversed = false }) => {
  const [currentImage, setCurrentImage] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % collection.images.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [collection.images.length])

  return (
    <motion.div
      className="grid md:grid-cols-2 gap-8 items-center"
      variants={isReversed ? slideInRight : slideInLeft}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
    >
      <div className={`${isReversed ? 'md:order-2' : ''}`}>
        <div className="flex gap-2 overflow-hidden">
          {collection.images.map((img, i) => (
            <motion.div
              key={i}
              className="w-1/3 aspect-[3/4] rounded-xl overflow-hidden"
              animate={{
                scale: i === currentImage ? 1.05 : 1,
                opacity: i === currentImage ? 1 : 0.7
              }}
              transition={{ duration: 0.5 }}
            >
              <img
                src={img}
                alt={`${collection.name} ${i + 1}`}
                className="w-full h-full object-cover"
              />
            </motion.div>
          ))}
        </div>
      </div>
      <motion.div 
        className={`${isReversed ? 'md:order-1' : ''} text-white`}
        variants={isReversed ? slideInLeft : slideInRight}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <span className="text-xs tracking-[0.4em] text-white/50 mb-2 block">
          {collection.logo}
        </span>
        <h3 className="text-3xl md:text-4xl font-bold mb-4">{collection.name}</h3>
        <p className="text-white/70 leading-relaxed mb-6">{collection.description}</p>
        <div className="flex gap-4">
          <motion.button 
            className="px-6 py-3 border border-white/30 rounded-full text-sm uppercase tracking-wider hover:bg-white hover:text-black transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            Shop
          </motion.button>
          <button className="px-6 py-3 text-sm uppercase tracking-wider text-white/70 hover:text-white transition-all flex items-center gap-2">
            Learn More <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </motion.div>
    </motion.div>
  )
}

// Main Demo Page Component
const AchieveCoffeeDemoPage: React.FC = () => {
  const [content, setContent] = useState(DEFAULT_CONTENT)
  const [isLoading, setIsLoading] = useState(true)
  const heroRef = useRef<HTMLDivElement>(null)
  const { ref: parallaxRef, offset } = useParallax(0.3)

  // Load content from Supabase first, fallback to localStorage
  useEffect(() => {
    const loadContent = async () => {
      try {
        // Try to load from Supabase mini_sites table
        const { data, error } = await supabase
          .from('mini_sites')
          .select('content')
          .eq('slug', 'achieve-coffee-demo')
          .eq('status', 'published')
          .single()
        
        if (data?.content && !error) {
          // Successfully loaded from database
          setContent({ ...DEFAULT_CONTENT, ...data.content })
          // Also sync to localStorage for offline use
          localStorage.setItem('achieve_coffee_demo_content', JSON.stringify(data.content))
        } else {
          // Fallback to localStorage if database fails
          const savedContent = localStorage.getItem('achieve_coffee_demo_content')
          if (savedContent) {
            try {
              const parsed = JSON.parse(savedContent)
              setContent({ ...DEFAULT_CONTENT, ...parsed })
            } catch (e) {
              console.error('Failed to parse saved content')
            }
          }
        }
      } catch (err) {
        console.error('Error loading from Supabase:', err)
        // Fallback to localStorage
        const savedContent = localStorage.getItem('achieve_coffee_demo_content')
        if (savedContent) {
          try {
            const parsed = JSON.parse(savedContent)
            setContent({ ...DEFAULT_CONTENT, ...parsed })
          } catch (e) {
            console.error('Failed to parse saved content')
          }
        }
      }
      setIsLoading(false)
    }
    
    loadContent()
  }, [])

  if (isLoading) {
    return (
      <div className="min-h-screen bg-neutral-950 flex items-center justify-center">
        <div className="w-8 h-8 border-2 border-white/20 border-t-white rounded-full animate-spin" />
      </div>
    )
  }

  return (
    <>
      <Helmet>
        <title>{content.brand.name} | Premium Specialty Coffee</title>
        <meta name="description" content={content.brand.description} />
        <style>{`
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-marquee {
            animation: marquee var(--marquee-speed, 30s) linear infinite;
          }
        `}</style>
      </Helmet>

      <div className="min-h-screen bg-neutral-950 text-white font-sans">
        {/* Achieve Pack Return Banner */}
        <div className="fixed top-0 left-0 right-0 z-[60] bg-primary-600 text-white py-2 px-4">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <Link 
              to="/free-service/website-upgrade" 
              className="flex items-center gap-2 text-sm hover:text-white/80 transition"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Achieve Pack
            </Link>
            <span className="text-xs text-white/80 hidden sm:block">This is a demo website created by Achieve Pack</span>
            <Link 
              to="/store" 
              className="text-sm font-medium hover:text-white/80 transition"
            >
              Browse Packaging →
            </Link>
          </div>
        </div>

        {/* Fixed Navigation */}
        <nav className="fixed top-[40px] left-0 right-0 z-50 bg-neutral-950/80 backdrop-blur-md border-b border-white/10">
          <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
            <span className="text-xl font-bold tracking-tight">{content.brand.name}</span>
            <div className="hidden md:flex items-center gap-8 text-sm uppercase tracking-wider">
              <a href="#shop" className="hover:text-white/60 transition">Shop</a>
              <a href="#collections" className="hover:text-white/60 transition">Collections</a>
              <a href="#about" className="hover:text-white/60 transition">About</a>
              <a href="#subscribe" className="hover:text-white/60 transition">Subscribe</a>
            </div>
            <button className="px-4 py-2 bg-white text-black text-sm font-medium rounded-full hover:bg-white/90 transition">
              Cart (0)
            </button>
          </div>
        </nav>

        {/* Hero Section - Full viewport with parallax */}
        <section
          ref={heroRef}
          className="relative h-screen flex items-center justify-center overflow-hidden"
        >
          {/* Background Image with Parallax */}
          <div
            ref={parallaxRef}
            className="absolute inset-0 w-full h-[120%]"
            style={{ transform: `translateY(${offset}px)` }}
          >
            <img
              src={content.hero.backgroundImage}
              alt="Coffee hero"
              className="w-full h-full object-cover"
            />
            <div
              className="absolute inset-0 bg-neutral-950"
              style={{ opacity: content.hero.overlayOpacity }}
            />
          </div>

          {/* Hero Content */}
          <div className="relative z-10 text-center text-white px-4">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <HeroText words={content.brand.taglineWords} />
            </motion.div>
            <motion.p 
              className="mt-8 text-lg md:text-xl text-white/70 max-w-xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
            >
              {content.brand.description}
            </motion.p>
            <motion.a
              href={content.brand.ctaLink}
              className="inline-flex items-center gap-2 mt-8 px-8 py-4 border-2 border-white/50 rounded-full text-sm uppercase tracking-wider hover:bg-white hover:text-black transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              {content.brand.ctaText}
            </motion.a>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
            <ChevronDown className="w-6 h-6 text-white/50" />
          </div>
        </section>

        {/* Products Section */}
        <section id="shop" className="py-24 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <span className="text-xs tracking-[0.4em] text-white/50 mb-4 block">
                A SPECIALTY COFFEE COMPANY
              </span>
            </div>
            <motion.div 
              className="grid md:grid-cols-3 gap-8"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
            >
              {content.products.map((product, index) => (
                <ProductCard key={product.id} product={product} index={index} />
              ))}
            </motion.div>
          </div>
        </section>

        {/* Scroll Velocity Parallax Text - Brand Showcase */}
        <section className="py-16 bg-neutral-950 overflow-hidden">
          <div className="space-y-6">
            <ParallaxText 
              baseVelocity={-5} 
              textClassName="text-5xl md:text-7xl font-bold uppercase tracking-tight text-amber-500"
            >
              ACHIEVE COFFEE • SPECIALTY COFFEE • SINGLE ORIGIN •
            </ParallaxText>
            <ParallaxText 
              baseVelocity={5} 
              textClassName="text-5xl md:text-7xl font-bold uppercase tracking-tight text-white/20"
            >
              FRESH ROASTED • COMPOSTABLE • DIRECT TRADE • ACHIEVE •
            </ParallaxText>
          </div>
        </section>

        {/* Scroll Triggered Feature Cards - Spring Animation */}
        <section className="py-24 bg-gradient-to-b from-neutral-950 to-neutral-900">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold">Our Coffee Promise</h2>
            <p className="text-white/50 mt-2">Scroll to discover what makes us special</p>
          </div>
          <ScrollTriggeredCards cards={COFFEE_SCROLL_CARDS} />
        </section>

        {/* Collections Section */}
        <section id="collections" className="py-24 px-6 bg-gradient-to-b from-neutral-950 to-neutral-900">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Collections</h2>
              <a href="#" className="text-white/60 hover:text-white transition flex items-center justify-center gap-2">
                View all <ArrowRight className="w-4 h-4" />
              </a>
            </div>
            <div className="space-y-32">
              {content.collections.map((collection, i) => (
                <CollectionCard
                  key={collection.id}
                  collection={collection}
                  isReversed={i % 2 === 1}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section id="about" className="relative min-h-screen flex items-center">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url(${content.mission.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          >
            <div className="absolute inset-0 bg-neutral-950/70" />
          </div>
          <motion.div 
            className="relative z-10 max-w-4xl mx-auto px-6 py-24 text-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-8">
              {content.mission.title}
            </h2>
            <p className="text-xl text-white/70 leading-relaxed mb-8">
              {content.mission.content}
            </p>
            <span className="text-white/40 text-sm tracking-widest">
              {content.mission.coordinates}
            </span>
          </motion.div>
        </section>

        {/* Subscription Section */}
        <section id="subscribe" className="py-24 px-6 bg-neutral-900">
          <motion.div 
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              {content.subscription.title}
            </h2>
            <motion.div 
              className="flex flex-col md:flex-row justify-center gap-8 mb-12"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {content.subscription.steps.map((step, i) => (
                <motion.div key={i} className="flex items-center gap-4" variants={fadeInUp}>
                  <span className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center text-sm">
                    {i + 1}
                  </span>
                  <span className="text-white/70">{step}</span>
                </motion.div>
              ))}
            </motion.div>
            <p className="text-white/60 mb-8">{content.subscription.discount}</p>
            <motion.button 
              className="px-8 py-4 bg-white text-black font-medium rounded-full hover:bg-white/90 transition"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              Subscribe Now
            </motion.button>
          </motion.div>
        </section>

        {/* Sustainable Packaging Section - with slide animations */}
        <section className="py-32 px-6 bg-gradient-to-b from-neutral-900 to-[#0a1a1a]">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div
                variants={slideInLeft}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-100px' }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <span className="h-[2px] w-12 bg-green-500"></span>
                  <span className="text-green-500 font-bold tracking-[0.3em] uppercase text-xs">Our Commitment</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold mb-8">
                  Compostable<br/>
                  <span className="text-green-500">Coffee Packaging</span>
                </h2>
                <p className="text-xl text-white/60 mb-8 leading-relaxed">
                  We believe specialty coffee deserves packaging that respects both the craft and our planet. 
                  Our certified compostable pouches protect your coffee's freshness while breaking down 
                  naturally within 180 days.
                </p>
                
                <motion.div 
                  className="space-y-4 mb-10"
                  variants={staggerContainer}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  <motion.div className="flex items-start gap-4" variants={fadeInUp}>
                    <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0">
                      <Check className="w-5 h-5 text-green-500" />
                    </div>
                    <div>
                      <h4 className="font-bold text-white">BPI Certified Compostable</h4>
                      <p className="text-white/50 text-sm">Meets ASTM D6400 standards for industrial composting</p>
                    </div>
                  </motion.div>
                  <motion.div className="flex items-start gap-4" variants={fadeInUp}>
                    <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0">
                      <Check className="w-5 h-5 text-green-500" />
                    </div>
                    <div>
                      <h4 className="font-bold text-white">Degassing Valve Compatible</h4>
                      <p className="text-white/50 text-sm">One-way valve releases CO2 while keeping oxygen out</p>
                    </div>
                  </motion.div>
                  <motion.div className="flex items-start gap-4" variants={fadeInUp}>
                    <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0">
                      <Check className="w-5 h-5 text-green-500" />
                    </div>
                    <div>
                      <h4 className="font-bold text-white">Premium Kraft Finish</h4>
                      <p className="text-white/50 text-sm">Natural aesthetic that communicates quality and sustainability</p>
                    </div>
                  </motion.div>
                </motion.div>

                {/* Link to Achieve Pack */}
                <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                  <p className="text-white/70 text-sm mb-4">
                    Our packaging is proudly supplied by Achieve Pack, specialists in compostable coffee bag solutions with low MOQ.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <Link 
                      to="/products/compostable-coffee-bags" 
                      className="inline-flex items-center gap-2 text-sm font-semibold text-green-400 hover:text-green-300 transition"
                    >
                      Compostable Coffee Bags <ExternalLink className="w-4 h-4" />
                    </Link>
                    <Link 
                      to="/industry/coffee-tea" 
                      className="inline-flex items-center gap-2 text-sm font-semibold text-white/70 hover:text-white transition"
                    >
                      Coffee Industry Solutions <ExternalLink className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </motion.div>
              
              <motion.div 
                className="relative"
                variants={slideInRight}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-100px' }}
              >
                <img
                  src={COFFEE_IMAGES.detail8}
                  alt="Compostable Coffee Packaging Materials"
                  className="w-full rounded-3xl shadow-2xl"
                />
                <motion.div 
                  className="absolute -bottom-6 -right-6 bg-green-500 text-black p-6 rounded-2xl shadow-xl"
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4, type: 'spring', stiffness: 200 }}
                >
                  <div className="text-3xl font-black">180</div>
                  <div className="text-xs font-bold uppercase tracking-wider">Days to Compost</div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Quality & Sourcing Section - with stagger animations */}
        <section className="py-24 px-6 bg-neutral-950">
          <div className="max-w-7xl mx-auto">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-bold mb-4">Quality at Every Step</h2>
              <p className="text-white/50 max-w-2xl mx-auto">
                From farm to cup, we maintain rigorous quality standards and full traceability.
              </p>
            </motion.div>
            <motion.div 
              className="grid md:grid-cols-4 gap-8"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
            >
              <motion.div 
                className="bg-white/5 rounded-2xl p-8 text-center border border-white/10"
                variants={scaleUp}
                whileHover={cardHover}
              >
                <Globe className="w-12 h-12 text-amber-500 mx-auto mb-4" />
                <h3 className="font-bold mb-2">Direct Trade</h3>
                <p className="text-white/50 text-sm">Sourced directly from farmers in Ethiopia, Colombia, and Costa Rica</p>
              </motion.div>
              <motion.div 
                className="bg-white/5 rounded-2xl p-8 text-center border border-white/10"
                variants={scaleUp}
                whileHover={cardHover}
              >
                <Award className="w-12 h-12 text-amber-500 mx-auto mb-4" />
                <h3 className="font-bold mb-2">SCA Certified</h3>
                <p className="text-white/50 text-sm">All coffees scored 85+ by certified Q graders</p>
              </motion.div>
              <motion.div 
                className="bg-white/5 rounded-2xl p-8 text-center border border-white/10"
                variants={scaleUp}
                whileHover={cardHover}
              >
                <Recycle className="w-12 h-12 text-green-500 mx-auto mb-4" />
                <h3 className="font-bold mb-2">Eco Packaging</h3>
                <p className="text-white/50 text-sm">BPI certified compostable pouches</p>
              </motion.div>
              <motion.div 
                className="bg-white/5 rounded-2xl p-8 text-center border border-white/10"
                variants={scaleUp}
                whileHover={cardHover}
              >
                <ShieldCheck className="w-12 h-12 text-amber-500 mx-auto mb-4" />
                <h3 className="font-bold mb-2">Freshness Sealed</h3>
                <p className="text-white/50 text-sm">Roasted to order with degassing valve technology</p>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Large Feature Image */}
        <section className="relative h-[70vh] overflow-hidden">
          <motion.div
            className="absolute inset-0"
            initial={{ scale: 1.1 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: 'easeOut' }}
          >
            <img
              src={COFFEE_IMAGES.detail10}
              alt="Specialty Coffee Final Masterpiece"
              className="w-full h-full object-cover"
            />
          </motion.div>
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
          <div className="absolute inset-0 flex items-center">
            <div className="max-w-7xl mx-auto px-6 w-full">
              <motion.div 
                className="max-w-xl"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <h2 className="text-4xl md:text-6xl font-bold mb-6">
                  Taste the<br/>Difference
                </h2>
                <p className="text-xl text-white/70 mb-8">
                  Experience specialty coffee that honors tradition, supports farmers, 
                  and respects our planet with every cup.
                </p>
                <motion.a 
                  href="#shop" 
                  className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black font-medium rounded-full hover:bg-white/90 transition"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Shop Our Collection <ArrowRight className="w-5 h-5" />
                </motion.a>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-20 px-6 bg-neutral-950 border-t border-white/10">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-4 gap-12 mb-16">
              <div className="md:col-span-2">
                <span className="text-3xl font-bold tracking-tight block mb-4">
                  {content.brand.name}
                </span>
                <p className="text-white/50 mb-6 max-w-md">
                  Specialty coffee roasters committed to quality, sustainability, and the perfect cup.
                </p>
                <div className="flex gap-4">
                  <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition">
                    <span className="sr-only">Instagram</span>
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition">
                    <span className="sr-only">Twitter</span>
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>
                  </a>
                </div>
              </div>
              <div>
                <h4 className="font-bold mb-4 text-white/80">Shop</h4>
                <ul className="space-y-2 text-white/50 text-sm">
                  <li><a href="#" className="hover:text-white transition">All Coffee</a></li>
                  <li><a href="#" className="hover:text-white transition">Limited Series</a></li>
                  <li><a href="#" className="hover:text-white transition">Bright Series</a></li>
                  <li><a href="#" className="hover:text-white transition">Warm Series</a></li>
                  <li><a href="#" className="hover:text-white transition">Subscriptions</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold mb-4 text-white/80">Company</h4>
                <ul className="space-y-2 text-white/50 text-sm">
                  <li><a href="#" className="hover:text-white transition">Our Story</a></li>
                  <li><a href="#" className="hover:text-white transition">Sustainability</a></li>
                  <li><a href="#" className="hover:text-white transition">Wholesale</a></li>
                  <li><a href="#" className="hover:text-white transition">Contact</a></li>
                </ul>
              </div>
            </div>
            
            {/* Packaging Credit */}
            <div className="border-t border-white/10 pt-8 mb-8">
              <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-white/30 text-xs">
                <div className="flex items-center gap-2">
                  <Recycle className="w-4 h-4 text-green-500" />
                  <span>Compostable packaging proudly supplied by</span>
                  <Link to="/" className="text-white/70 hover:text-white transition font-semibold">Achieve Pack</Link>
                </div>
                <div className="flex items-center gap-4">
                  <Link to="/products/compostable-coffee-bags" className="hover:text-white transition">Coffee Bags</Link>
                  <span>|</span>
                  <Link to="/materials/compostable" className="hover:text-white transition">Compostable Materials</Link>
                  <span>|</span>
                  <Link to="/industry/coffee-tea" className="hover:text-white transition">Coffee Industry</Link>
                </div>
              </div>
            </div>

            <div className="text-center text-white/30 text-xs">
              <p>2024 {content.brand.name}. All rights reserved.</p>
              <p className="mt-2">
                Demo website created by <Link to="/free-service/website-upgrade" className="text-white/50 hover:text-white">Achieve Pack Free Web Design Service</Link>
              </p>
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}

export default AchieveCoffeeDemoPage
