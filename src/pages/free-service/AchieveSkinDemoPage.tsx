import React, { useState, useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { 
  ShoppingBag, Menu, X, ArrowLeft, ArrowRight, 
  Droplet, Sparkles, Wind, Waves, Star, Search,
  Play, Pause, ChevronDown
} from 'lucide-react'
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion'

// ============================================
// HOLOGRAPHIC / ETHEREAL ASSETS
// ============================================

const SKIN_IMAGES = {
  hero: '/imgs/demo-site/skin/hero.png',
  products: {
    serum: '/imgs/demo-site/skin/serum.png',
    essence: '/imgs/demo-site/skin/essence.png',
    gel: '/imgs/demo-site/skin/gel.png'
  }
}

const PRODUCTS = [
  {
    id: 'luminous-serum',
    name: 'Luminous Serum',
    tagline: 'Radiance Refill',
    description: 'A concentrated dose of hyaluronic acid and pearl extract. Restores glow instantly.',
    price: 45.00,
    image: SKIN_IMAGES.products.serum,
    gradient: 'from-pink-300 via-purple-300 to-indigo-400',
    blobColor: '#F472B6'
  },
  {
    id: 'hydra-essence',
    name: 'Hydra Essence',
    tagline: 'Deep Moisture',
    description: 'Pure glacial water trapped in a semi-permeable matrix. The ultimate thirst quencher for skin.',
    price: 38.00,
    image: SKIN_IMAGES.products.essence,
    gradient: 'from-cyan-300 via-blue-300 to-purple-400',
    blobColor: '#60A5FA'
  },
  {
    id: 'purifying-gel',
    name: 'Purifying Gel',
    tagline: 'Liquid Clarity',
    description: 'Silver-ion infused cleanser that dissolves impurities without stripping oils.',
    price: 32.00,
    image: SKIN_IMAGES.products.gel,
    gradient: 'from-gray-200 via-slate-300 to-zinc-400',
    blobColor: '#94A3B8'
  }
]

// ============================================
// COMPONENTS
// ============================================

const GlassCard = ({ children, className = '' }: any) => (
  <div className={`backdrop-blur-xl bg-white/10 border border-white/20 shadow-xl ${className}`}>
    {children}
  </div>
)

const FluidBlob = ({ color, className }: any) => (
  <div 
    className={`absolute rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob ${className}`}
    style={{ backgroundColor: color }}
  />
)

export default function AchieveSkinDemoPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeProduct, setActiveProduct] = useState(PRODUCTS[0])
  const [cartCount, setCartCount] = useState(0)
  const { scrollY } = useScroll()
  const y1 = useTransform(scrollY, [0, 500], [0, 200])
  const y2 = useTransform(scrollY, [0, 500], [0, -150])

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-800 font-sans selection:bg-pink-200 selection:text-slate-900 overflow-hidden relative">
      <Helmet>
        <title>Achieve Skin | Ethereal Skincare | Demo Site</title>
        <style>{`
          @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,400&family=Montserrat:wght@200;300;400;500&display=swap');
          .font-serif { font-family: 'Cormorant Garmond', serif; }
          .font-sans { font-family: 'Montserrat', sans-serif; }
          
          .glass-text {
            background: linear-gradient(135deg, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0.2) 100%);
            -webkit-background-clip: text;
            background-clip: text;
            color: transparent;
            text-shadow: 0 0 20px rgba(255,255,255,0.5);
          }
          
          @keyframes blob {
            0% { transform: translate(0px, 0px) scale(1); }
            33% { transform: translate(30px, -50px) scale(1.1); }
            66% { transform: translate(-20px, 20px) scale(0.9); }
            100% { transform: translate(0px, 0px) scale(1); }
          }
          .animate-blob { animation: blob 7s infinite; }
          .animation-delay-2000 { animation-delay: 2s; }
          .animation-delay-4000 { animation-delay: 4s; }
        `}</style>
      </Helmet>

      {/* Dynamic Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 to-slate-100" />
        <FluidBlob color="#F9A8D4" className="top-0 left-0 w-96 h-96 animation-delay-2000" />
        <FluidBlob color="#A7F3D0" className="bottom-0 right-0 w-96 h-96 animation-delay-4000" />
        <FluidBlob color="#E9D5FF" className="top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96" />
        <div className="absolute inset-0 bg-white/30 backdrop-blur-[100px]" />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 p-6">
        <GlassCard className="max-w-7xl mx-auto rounded-full px-8 py-4 flex justify-between items-center">
          <Link to="/free-service/website-upgrade" className="flex items-center gap-2 hover:opacity-70 transition">
            <ArrowLeft className="w-4 h-4" />
            <span className="text-xs tracking-widest uppercase">Back to Achieve</span>
          </Link>

          <div className="font-serif text-2xl italic tracking-wide relative">
             Achieve Skin
             <span className="absolute -top-1 -right-3 text-[10px] font-sans not-italic text-pink-500">Refill</span>
          </div>

          <div className="flex items-center gap-6">
             <button className="hover:opacity-70 transition" onClick={() => setCartCount(c => c + 1)}>
                <ShoppingBag className="w-5 h-5" />
             </button>
             <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden">
                {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
             </button>
          </div>
        </GlassCard>
      </nav>

      {/* Hero Section */}
      <section className="relative z-10 min-h-screen flex items-center justify-center pt-24 pb-12 px-6">
         <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <motion.div style={{ y: y1 }} className="space-y-8 text-center md:text-left">
               <span className="inline-block px-4 py-1 rounded-full border border-slate-300 text-xs tracking-[0.2em] uppercase text-slate-500">
                  The Future is Fluid
               </span>
               <h1 className="font-serif text-7xl md:text-9xl text-slate-800 leading-[0.85] tracking-tight">
                  Ethereal <br/>
                  <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-indigo-400">Beauty.</span>
               </h1>
               <p className="font-sans text-slate-600 text-lg max-w-md leading-relaxed">
                  Premium skincare refills in holographic, high-barrier spouted pouches. 
                  Minimalist luxury that reflects the purity of what's inside.
               </p>
               <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                  <button className="px-8 py-4 bg-slate-900 text-white rounded-full font-serif text-lg italic hover:bg-slate-800 transition shadow-xl shadow-slate-200">
                     Discover the Collection
                  </button>
               </div>
            </motion.div>

            <motion.div style={{ y: y2 }} className="relative h-[600px] w-full flex items-center justify-center">
               <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/50 to-white/0 rounded-full blur-3xl" />
               <img 
                  src={SKIN_IMAGES.hero} 
                  alt="Ethereal Skincare Collection" 
                  className="relative z-10 w-full h-full object-contain hover:scale-105 transition-transform duration-[2s] ease-in-out"
               />
               
               {/* Floating Glass Panels */}
               <motion.div 
                  animate={{ y: [0, -20, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute top-20 right-0 p-4 rounded-2xl backdrop-blur-md bg-white/30 border border-white/40 shadow-lg text-xs font-medium"
               >
                  <Sparkles className="w-4 h-4 mb-1 text-pink-400" />
                  Holographic Barrier
               </motion.div>

               <motion.div 
                  animate={{ y: [0, 20, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  className="absolute bottom-40 left-10 p-4 rounded-2xl backdrop-blur-md bg-white/30 border border-white/40 shadow-lg text-xs font-medium"
               >
                  <Droplet className="w-4 h-4 mb-1 text-blue-400" />
                  Liquid Metal Finish
               </motion.div>
            </motion.div>
         </div>
      </section>

      {/* Main Product Showcase - The Carousel */}
      <section className="relative z-10 py-24 px-6 mb-24">
         <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
               <h2 className="font-serif text-5xl md:text-6xl mb-4">Essence of Light</h2>
               <p className="text-slate-500 font-sans tracking-widest uppercase text-sm">Select your ritual</p>
            </div>

            <div className="flex flex-wrap justify-center gap-8 md:gap-12">
               {PRODUCTS.map((product) => (
                  <motion.div
                     key={product.id}
                     whileHover={{ y: -10 }}
                     className="relative group cursor-pointer"
                     onClick={() => setActiveProduct(product)}
                  >
                     {/* Glass Card */}
                     <GlassCard className={`w-full md:w-80 p-8 rounded-[2rem] transition-all duration-500 ${activeProduct.id === product.id ? 'ring-2 ring-pink-200 ring-offset-4 ring-offset-[#F8FAFC]' : 'opacity-60 hover:opacity-100'}`}>
                        <div className="relative aspect-[3/4] mb-8 flex items-center justify-center">
                           <div className={`absolute inset-0 bg-gradient-to-br ${product.gradient} opacity-20 blur-2xl rounded-full group-hover:opacity-40 transition-opacity`} />
                           <img 
                              src={product.image} 
                              alt={product.name} 
                              className="w-full h-full object-contain drop-shadow-xl z-10"
                           />
                        </div>
                        <div className="text-center space-y-2">
                           <h3 className="font-serif text-2xl italic">{product.name}</h3>
                           <p className="text-xs text-slate-500 uppercase tracking-widest">{product.tagline}</p>
                           <p className="font-sans font-medium mt-4">${product.price}</p>
                        </div>
                     </GlassCard>
                  </motion.div>
               ))}
            </div>
         </div>
      </section>

      {/* Feature Section - "The Science of Light" */}
      <section className="relative z-10 py-24 bg-white/40 backdrop-blur-sm">
         <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
            <div className="relative h-[600px] rounded-[3rem] overflow-hidden group">
               <img 
                  src="https://images.unsplash.com/photo-1512353087810-25dfcd100962?q=80&w=2574&auto=format&fit=crop" 
                  alt="Water texture" 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-[3s] group-hover:scale-110" 
               />
               <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/40 to-transparent mix-blend-overlay" />
               <div className="absolute inset-0 flex items-center justify-center">
                  <GlassCard className="p-8 rounded-full">
                     <Play className="w-8 h-8 text-white fill-white ml-1" />
                  </GlassCard>
               </div>
            </div>
            
            <div className="space-y-8">
               <h2 className="font-serif text-5xl md:text-6xl text-slate-800">
                  Refracting <br/> Norms.
               </h2>
               <div className="space-y-6">
                  {[
                     { 
                        title: "Prismatic Barrier", 
                        desc: "Multi-layer light-blocking technology protects photosensitive ingredients like Vitamin C and Retinol from degradation.",
                        icon: Sparkles
                     },
                     { 
                        title: "Zero-Air Dispensing", 
                        desc: "Our spout pouches collapse as you use them, preventing oxidation and ensuring you get every last drop of precious serum.",
                        icon: Wind
                     },
                     { 
                        title: "Fluid Sustainability", 
                        desc: "Weighing 93% less than glass bottles, our refills drastically reduce carbon footprint during transport.",
                        icon: Leaf
                     }
                  ].map((feat, i) => (
                     <div key={i} className="flex gap-6 group">
                        <div className="w-12 h-12 rounded-2xl bg-white border border-slate-100 flex items-center justify-center shrink-0 shadow-sm group-hover:shadow-md transition">
                           <feat.icon className="w-5 h-5 text-slate-400 group-hover:text-pink-400 transition" />
                        </div>
                        <div>
                           <h3 className="font-sans font-medium text-lg mb-1">{feat.title}</h3>
                           <p className="text-slate-500 font-serif italic leading-relaxed">{feat.desc}</p>
                        </div>
                     </div>
                  ))}
               </div>
            </div>
         </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 pt-24 pb-12 px-6">
         <div className="max-w-7xl mx-auto border-t border-slate-200 pt-16 grid md:grid-cols-4 gap-12">
            <div className="col-span-2 space-y-6">
               <div className="font-serif text-3xl italic">Achieve Skin.</div>
               <p className="text-slate-500 max-w-sm font-sans font-light">
                  Transcending traditional packaging. <br/>
                  Refill. Reuse. Radiate.
               </p>
               <div className="flex gap-4">
                  {[1, 2, 3].map(i => (
                     <div key={i} className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center hover:bg-slate-100 transition cursor-pointer">
                        <div className="w-1 h-1 bg-slate-400 rounded-full" />
                     </div>
                  ))}
               </div>
            </div>
            
            <div>
               <h4 className="font-sans text-xs font-bold uppercase tracking-widest mb-6 text-slate-400">Shop</h4>
               <ul className="space-y-3 font-serif italic text-lg text-slate-600">
                  <li className="hover:text-pink-400 cursor-pointer transition">Serums</li>
                  <li className="hover:text-pink-400 cursor-pointer transition">Essences</li>
                  <li className="hover:text-pink-400 cursor-pointer transition">Cleansers</li>
                  <li className="hover:text-pink-400 cursor-pointer transition">Bundles</li>
               </ul>
            </div>

            <div>
               <h4 className="font-sans text-xs font-bold uppercase tracking-widest mb-6 text-slate-400">Connect</h4>
               <div className="space-y-4">
                  <p className="font-sans text-sm text-slate-500">
                     Join our newsletter for early access to new drops.
                  </p>
                  <div className="flex border-b border-slate-300 pb-2">
                     <input type="email" placeholder="Email address" className="bg-transparent w-full focus:outline-none font-serif italic" />
                     <button className="text-xs uppercase tracking-widest hover:text-pink-400 transition">Join</button>
                  </div>
               </div>
            </div>
         </div>
         
         <div className="text-center mt-24 text-slate-400 text-xs font-sans tracking-widest uppercase">
            © 2026 Achieve Skin // Powered by Achieve Pack
         </div>
      </footer>
    </div>
  )
}

function Leaf({ className }: any) {
   return (
      <svg 
         xmlns="http://www.w3.org/2000/svg" 
         width="24" 
         height="24" 
         viewBox="0 0 24 24" 
         fill="none" 
         stroke="currentColor" 
         strokeWidth="2" 
         strokeLinecap="round" 
         strokeLinejoin="round" 
         className={className}
      >
         <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"/><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/>
      </svg>
   )
}
