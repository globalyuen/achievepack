import React, { useState, useEffect, useRef } from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { ChevronDown, ArrowRight, ArrowLeft, Coffee, X } from 'lucide-react'
import { motion, AnimatePresence, useScroll, useTransform, type Variants } from 'motion/react'
import { ParallaxText } from '../../components/ParallaxText'

// ═══════════════════════════════════════════════════════════════════════════
// MOTION ANIMATION VARIANTS (Sketch Style)
// ═══════════════════════════════════════════════════════════════════════════

const sketchDraw: Variants = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: { 
    pathLength: 1, 
    opacity: 1,
    transition: { duration: 1.5, ease: "easeInOut" }
  }
}

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20, rotate: -2 },
  visible: { 
    opacity: 1, 
    y: 0, 
    rotate: 0,
    transition: { duration: 0.8, ease: "easeOut" }
  }
}

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
}

// ═══════════════════════════════════════════════════════════════════════════
// TYPES & DEFAULT CONTENT
// ═══════════════════════════════════════════════════════════════════════════

interface CoffeeContent {
  brand: {
    name: string
    tagline: string
    taglineWords: string[]
    description: string
    ctaText: string
    ctaLink: string
  }
  hero: {
    backgroundImage: string
    overlayOpacity: number
  }
  products: Array<{
    id: string
    name: string
    price: number
    type: string
    origin: string
    process: string
    notes: string
    image: string
  }>
  collections: Array<{
    id: string
    name: string
    logo: string
    description: string
    image: string
    images: string[]
  }>
  mission: {
    title: string
    content: string
    image: string
    coordinates: string
  }
}

const DEFAULT_CONTENT: CoffeeContent = {
  brand: {
    name: 'Loading...',
    tagline: 'Loading...',
    taglineWords: ['Loading...'],
    description: '',
    ctaText: '',
    ctaLink: '#'
  },
  hero: {
    backgroundImage: '',
    overlayOpacity: 0.5
  },
  products: [],
  collections: [],
  mission: {
    title: '',
    content: '',
    image: '',
    coordinates: ''
  }
}

// ═══════════════════════════════════════════════════════════════════════════
// COMPONENTS
// ═══════════════════════════════════════════════════════════════════════════

const PaperTexture = () => (
  <div className="fixed inset-0 pointer-events-none z-[-1] opacity-40 mix-blend-multiply" 
       style={{ 
         backgroundImage: `url("https://www.transparenttextures.com/patterns/lined-paper.png")`,
         backgroundColor: '#fdf6e3'
       }} 
  />
)

const SketchBorder = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => (
  <div className={`relative ${className}`}>
    <svg className="absolute inset-0 w-full h-full pointer-events-none overflow-visible">
      <motion.rect
        width="100%"
        height="100%"
        fill="none"
        stroke="black"
        strokeWidth="2"
        rx="5"
        strokeDasharray="5,5"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sketchDraw}
      />
    </svg>
    {children}
  </div>
)

const ProductCard = ({ product, index }: { product: any, index: number }) => (
  <motion.div
    variants={fadeInUp}
    className="group relative p-6 bg-white border-2 border-black rounded-[255px_15px_225px_15px/15px_225px_15px_255px] shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all transform hover:-translate-y-1"
  >
    <div className="aspect-square overflow-hidden mb-4 rounded-lg grayscale hover:grayscale-0 transition-all duration-500 border border-black/10">
      <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
    </div>
    <div className="font-handwriting">
      <h3 className="text-3xl font-bold mb-1">{product.name}</h3>
      <div className="flex justify-between items-baseline mb-4 border-b-2 border-dashed border-black/20 pb-2">
        <span className="text-xl text-neutral-600">{product.origin}</span>
        <span className="text-2xl font-bold">${product.price.toFixed(2)}</span>
      </div>
      <p className="text-lg leading-tight text-neutral-500 italic">"{product.notes}"</p>
    </div>
    <div className="absolute -top-3 -right-3 w-8 h-8 bg-yellow-300 rounded-full border-2 border-black flex items-center justify-center font-bold font-sans text-xs transform rotate-12">
      {index + 1}
    </div>
  </motion.div>
)

// ═══════════════════════════════════════════════════════════════════════════
// MAIN COMPONENT
// ═══════════════════════════════════════════════════════════════════════════

export default function AchieveCoffeeDemoPage() {
  const [content, setContent] = useState<CoffeeContent>(DEFAULT_CONTENT)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    fetch('/achieve-coffee.pen')
      .then(res => res.json())
      .then(data => {
        setContent(data)
        setIsLoading(false)
      })
      .catch(err => {
        console.error("Failed to load .pen file:", err)
        setIsLoading(false)
      })
  }, [])

  if (isLoading) {
    return (
      <div className="min-h-screen bg-[#fdf6e3] flex items-center justify-center font-handwriting text-2xl animate-pulse">
        Sketching layout...
      </div>
    )
  }

  return (
    <>
      <Helmet>
        <title>{content.brand.name} | Pencil Sketch Demo</title>
        <link href="https://fonts.googleapis.com/css2?family=Nanum+Pen+Script&display=swap" rel="stylesheet" />
        <style>{`
          .font-handwriting { font-family: 'Nanum Pen Script', cursive; }
          .clip-paper { clip-path: polygon(2% 2%, 98% 1%, 99% 98%, 1% 99%); }
        `}</style>
      </Helmet>

      <div className="min-h-screen bg-[#fdf6e3] text-black font-handwriting selection:bg-black selection:text-white overflow-x-hidden">
        <PaperTexture />
        
        {/* Navigation */}
        <nav className="fixed top-0 w-full z-50 p-4 bg-[#fdf6e3]/90 backdrop-blur-sm border-b-2 border-black border-dashed">
          <div className="max-w-7xl mx-auto flex justify-between items-center text-2xl">
            <Link to="/free-service/website-upgrade" className="flex items-center gap-2 hover:underline decoration-wavy">
              <ArrowLeft className="w-5 h-5" /> Back to Reality
            </Link>
            <div className="font-bold text-4xl tracking-widest uppercase">{content.brand.name}</div>
            <div className="hidden md:flex gap-6">
              <a href="#shop" className="hover:underline decoration-2">Shop</a>
              <a href="#about" className="hover:underline decoration-2">Manifesto</a>
            </div>
          </div>
        </nav>

        {/* Hero */}
        <header className="relative h-screen flex items-center justify-center overflow-hidden pt-20">
          <div className="absolute inset-0 grayscale contrast-125 opacity-20 pointer-events-none">
             <img src={content.hero.backgroundImage} className="w-full h-full object-cover" />
          </div>
          <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
            <motion.div 
               initial={{ scale: 0.9, opacity: 0 }}
               animate={{ scale: 1, opacity: 1 }}
               transition={{ duration: 1 }}
               className="border-4 border-black p-12 bg-white/80 backdrop-blur-sm rotate-1 shadow-[10px_10px_0px_0px_rgba(0,0,0,0.8)] rounded-[255px_15px_225px_15px/15px_225px_15px_255px]"
            >
              <h1 className="text-9xl mb-4 leading-[0.8]">
                {content.brand.taglineWords.map((word, i) => (
                  <span key={i} className="block">{word}</span>
                ))}
              </h1>
              <p className="text-4xl text-neutral-700 mt-6 -rotate-1">{content.brand.description}</p>
              <a href={content.brand.ctaLink} className="inline-block mt-8 px-8 py-4 bg-black text-white text-3xl hover:scale-105 transition-transform rounded-[255px_15px_225px_15px/15px_225px_15px_255px]">
                {content.brand.ctaText} <span className="ml-2">✎</span>
              </a>
            </motion.div>
          </div>
        </header>

        {/* Marquee */}
        <div className="py-6 bg-black text-[#fdf6e3] overflow-hidden -rotate-1 origin-left scale-110">
          <ParallaxText baseVelocity={3} textClassName="text-6xl font-bold mx-8">
            Rough Drafts • Sketchy Roasts • Pencil Shavings • 
          </ParallaxText>
        </div>

        {/* Products */}
        <section id="shop" className="py-24 px-6 max-w-7xl mx-auto">
          <h2 className="text-7xl text-center mb-16 underline decoration-wavy decoration-4 decoration-yellow-400">Fresh from the Sketchbook</h2>
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            className="grid md:grid-cols-3 gap-12"
          >
            {content.products.map((product, i) => (
              <ProductCard key={product.id} product={product} index={i} />
            ))}
          </motion.div>
        </section>

        {/* Collections - Scrapbook Style */}
        <section className="py-24 bg-white border-t-4 border-black border-dashed relative overflow-hidden">
           <div className="absolute top-0 left-0 w-full h-4 bg-[repeating-linear-gradient(45deg,black,black_10px,transparent_10px,transparent_20px)]" />
           <div className="max-w-7xl mx-auto px-6">
              {content.collections.map((col, i) => (
                <div key={col.id} className={`flex flex-col md:flex-row gap-16 items-center mb-32 ${i % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
                   <div className="md:w-1/2 relative group">
                      <div className="absolute inset-0 bg-black translate-x-4 translate-y-4 rounded-xl" />
                      <div className="relative bg-white border-2 border-black p-4 rounded-xl rotate-2 group-hover:rotate-1 transition-transform">
                        <img src={col.image} className="w-full grayscale contrast-125" />
                        <div className="absolute -bottom-6 -right-6 bg-yellow-300 px-4 py-2 border-2 border-black shadow-[4px_4px_0px_0px_black] -rotate-3 font-bold text-3xl">
                           {col.logo}
                        </div>
                      </div>
                   </div>
                   <div className="md:w-1/2 space-y-6">
                      <h3 className="text-6xl font-bold transform -skew-x-6">{col.name}</h3>
                      <p className="text-3xl leading-relaxed text-neutral-600 border-l-4 border-yellow-400 pl-6">
                        {col.description}
                      </p>
                      <button className="text-3xl border-b-2 border-black hover:border-yellow-400 hover:bg-yellow-100 transition-colors">
                        View Sketches →
                      </button>
                   </div>
                </div>
              ))}
           </div>
        </section>

        {/* Manifesto/Mission */}
        <section id="about" className="py-32 px-6 bg-neutral-900 text-[#fdf6e3] relative">
           <div className="max-w-4xl mx-auto text-center border-4 border-[#fdf6e3] p-12 border-dashed rounded-[50px]">
              <h2 className="text-8xl mb-8">{content.mission.title}</h2>
              <p className="text-4xl leading-relaxed font-light italic">
                "{content.mission.content}"
              </p>
              <div className="mt-12 text-2xl font-mono opacity-50">
                {content.mission.coordinates}
              </div>
           </div>
        </section>

        <footer className="py-12 text-center text-xl border-t-2 border-black">
          <p>© {new Date().getFullYear()} Achieve Coffee (Draft v0.1). Do not erase.</p>
        </footer>
      </div>
    </>
  )
}
