import React, { useState, useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { 
  ShoppingCart, Menu, X, ArrowLeft, ArrowUpRight, 
  Zap, Heart, Shield, Star, Crown, Flame, 
  Binary, Scan, Box as BoxIcon
} from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { ParallaxText } from '../../components/ParallaxText'

// ============================================
// NEO-BRUTALIST COMPONENTS
// ============================================

const NeoButton = ({ children, onClick, variant = 'primary', className = '' }: any) => {
  const baseStyle = "relative px-8 py-4 font-black uppercase tracking-widest border-4 border-black transition-all active:translate-x-1 active:translate-y-1"
  const variants = {
    primary: "bg-[#D4FF00] text-black hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 hover:-translate-x-1",
    secondary: "bg-white text-black hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 hover:-translate-x-1",
    dark: "bg-black text-[#D4FF00] hover:shadow-[8px_8px_0px_0px_#D4FF00] hover:-translate-y-1 hover:-translate-x-1 border-[#D4FF00]"
  }
  
  return (
    <button onClick={onClick} className={`${baseStyle} ${variants[variant as keyof typeof variants]} ${className}`}>
      {children}
    </button>
  )
}

const NeoCard = ({ children, className = '', color = 'bg-white' }: any) => (
  <div className={`border-4 border-black p-8 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] ${color} ${className} transition-transform hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[14px_14px_0px_0px_rgba(0,0,0,1)]`}>
    {children}
  </div>
)

const NeoBadge = ({ children, color = 'bg-[#FF00FF]' }: any) => (
  <span className={`inline-block px-3 py-1 text-xs font-black uppercase border-2 border-black ${color} text-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]`}>
    {children}
  </span>
)

// ============================================
// DATA & ASSETS
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
    id: 'wagyu',
    name: 'WAGYU_X',
    description: 'Hyper-protein beef bites. 100% Grass-fed. Zero BS.',
    stats: { protein: '85%', fat: '12%', carbs: '3%' },
    image: PET_IMAGES.products.wagyu,
    color: 'bg-[#FF4D4D]' // Red
  },
  {
    id: 'salmon',
    name: 'OMEGA_CORE',
    description: 'Atlantic Salmon + Kale matrix. Coat optimization initiated.',
    stats: { protein: '78%', fat: '18%', carbs: '4%' },
    image: PET_IMAGES.products.salmon,
    color: 'bg-[#00FFFF]' // Cyan
  },
  {
    id: 'duck',
    name: 'HYPO_DUCK',
    description: 'Free-range duck protocol. Sensitive stomach safe mode.',
    stats: { protein: '80%', fat: '15%', carbs: '5%' },
    image: PET_IMAGES.products.duck,
    color: 'bg-[#D4FF00]' // Yellow
  }
]

export default function AchievePetDemoPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeProduct, setActiveProduct] = useState(PRODUCTS[0])
  const [cartCount, setCartCount] = useState(0)

  // Floating elements animation
  const floatAnim = {
    y: [0, -10, 0],
    transition: { duration: 2, repeat: Infinity, ease: "easeInOut" }
  }

  return (
    <div className="min-h-screen bg-[#F0F0F0] text-black font-sans selection:bg-black selection:text-[#D4FF00] overflow-x-hidden">
      <Helmet>
        <title>PAW.OS | Next Gen Pet Nutrition | Demo Site</title>
        <style>{`
          @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;700&display=swap');
          .font-display { font-family: 'Space Grotesk', sans-serif; }
          .font-mono { font-family: 'JetBrains Mono', monospace; }
        `}</style>
      </Helmet>

      {/* Return Banner */}
      <div className="bg-black text-[#D4FF00] py-2 px-4 border-b-4 border-[#D4FF00] font-mono text-xs md:text-sm font-bold flex justify-between items-center sticky top-0 z-[60]">
        <Link to="/free-service/website-upgrade" className="flex items-center gap-2 hover:underline">
          <ArrowLeft className="w-4 h-4" /> RET_TO_BASE
        </Link>
        <span className="hidden md:inline">SYSTEM_STATUS: ONLINE // DEMO_MODE</span>
        <span className="uppercase tracking-widest">AchievePack_v2.0</span>
      </div>

      {/* Navigation */}
      <nav className="border-b-4 border-black bg-white sticky top-[36px] z-50">
        <div className="max-w-7xl mx-auto px-4 md:px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-black flex items-center justify-center">
              <Crown className="text-[#D4FF00] w-6 h-6" />
            </div>
            <span className="font-display font-black text-2xl tracking-tighter">
              PAW<span className="text-[#00FFFF]">.OS</span>
            </span>
          </div>

          <div className="hidden md:flex items-center gap-8 font-mono font-bold text-sm">
            {['MODULES', 'DATA', 'UPGRADE'].map((item) => (
              <a key={item} href="#" className="hover:bg-black hover:text-white px-2 py-1 transition-colors">
                [{item}]
              </a>
            ))}
          </div>

          <div className="flex items-center gap-4">
             <button className="border-2 border-black p-2 hover:bg-[#FF00FF] transition-colors relative" onClick={() => setCartCount(c => c + 1)}>
                <ShoppingCart className="w-6 h-6" />
                {cartCount > 0 && (
                   <div className="absolute -top-3 -right-3 bg-black text-[#D4FF00] w-6 h-6 flex items-center justify-center font-mono font-bold text-xs border-2 border-[#D4FF00]">
                      {cartCount}
                   </div>
                )}
             </button>
             <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden border-2 border-black p-2 hover:bg-[#D4FF00] transition-colors"
             >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
             </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-12 pb-24 border-b-4 border-black bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:20px_20px]">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
             
             {/* Left Content */}
             <div className="space-y-8 z-10">
                <div className="inline-block bg-[#D4FF00] border-4 border-black px-4 py-2 transform -rotate-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                   <span className="font-mono font-bold text-sm">V.2025 UPDATE INSTALLED</span>
                </div>
                
                <h1 className="font-display font-black text-6xl md:text-8xl leading-[0.9] tracking-tighter uppercase">
                   Eat.<br/>
                   Play.<br/>
                   <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF00FF] to-[#00FFFF] drop-shadow-[4px_4px_0px_rgba(0,0,0,1)]">Glitch.</span>
                </h1>

                <p className="font-mono font-bold text-lg md:text-xl max-w-md bg-white border-2 border-black p-4 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                   &gt; High-performance fuel for biological units (dogs).<br/>
                   &gt; 100% natural compiled code.<br/>
                   &gt; No bugs found.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                   <NeoButton>Initialise Order</NeoButton>
                   <NeoButton variant="secondary">View Source (Ingredients)</NeoButton>
                </div>
             </div>

             {/* Right Visual */}
             <div className="relative">
                <NeoCard className="bg-[#FF00FF] relative z-10 rotate-2 !p-0 overflow-hidden group">
                   <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/diagmonds-light.png')] opacity-20" />
                   <img 
                      src={PET_IMAGES.hero} 
                      alt="Hero Pack" 
                      className="w-full relative z-10 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3" 
                   />
                   {/* Floating Tags */}
                   <motion.div animate={floatAnim} className="absolute top-4 right-4 bg-white border-2 border-black px-2 py-1 font-mono text-xs font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] z-20">
                      HIGH_BARRIER_DETECTED
                   </motion.div>
                </NeoCard>
                
                {/* Decorative Background Elements */}
                <div className="absolute top-10 -right-10 w-full h-full border-4 border-black bg-[#00FFFF] -z-0 rotate-6" />
                <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-[#D4FF00] border-4 border-black rounded-full z-20 flex items-center justify-center animate-bounce">
                   <span className="font-black text-xl rotate-[-15deg]">NEW!</span>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Marquee */}
      <section className="bg-black text-white py-4 border-b-4 border-black overflow-hidden font-mono font-bold text-xl md:text-2xl uppercase tracking-widest">
         <ParallaxText baseVelocity={2}>
            System Optimal • 100% Meat • No Fillers • High Barrier • Recyclable • System Optimal •
         </ParallaxText>
      </section>

      {/* Bento Grid Section */}
      <section className="py-24 px-4 md:px-6 max-w-7xl mx-auto">
         <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <h2 className="font-display font-black text-5xl md:text-7xl uppercase">
               Core<br/>Modules
            </h2>
            <div className="font-mono text-sm font-bold bg-[#D4FF00] border-2 border-black px-4 py-2">
               SELECT_UPGRADE_BELOW
            </div>
         </div>

         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1: Freshness */}
            <NeoCard className="md:col-span-2 bg-[#F0F0F0] flex flex-col md:flex-row items-center gap-8 !p-0 overflow-hidden">
               <div className="p-8 flex-1">
                  <Flame className="w-12 h-12 mb-4 text-[#FF4D4D]" />
                  <h3 className="font-display font-black text-3xl mb-4 uppercase">Thermo-Lock Protocol</h3>
                  <p className="font-mono text-sm leading-relaxed mb-6">
                     Our high-barrier films block O2 and Moisture transfer with 99.9% efficiency. 
                     Keeps the crunch executable running at peak performance.
                  </p>
                  <div className="flex gap-2">
                     <NeoBadge color="bg-[#FF4D4D]">Oxygen_Block</NeoBadge>
                     <NeoBadge color="bg-[#D4FF00]">Aroma_Seal</NeoBadge>
                  </div>
               </div>
               <div className="w-full md:w-1/2 h-full bg-black relative min-h-[300px]">
                  <img src={PET_IMAGES.lifestyle} className="absolute inset-0 w-full h-full object-cover opacity-80 mix-blend-luminosity hover:mix-blend-normal transition-all" alt="Dog Life" />
               </div>
            </NeoCard>

            {/* Feature 2: Sustainability */}
            <NeoCard color="bg-[#00FFFF]" className="flex flex-col justify-between">
               <div>
                  <Scan className="w-12 h-12 mb-4" />
                  <h3 className="font-display font-black text-3xl mb-2 uppercase">Eco_Shell</h3>
                  <p className="font-mono text-sm mb-4">Mono-material PE structure ready for recycling stream injection.</p>
               </div>
               <div className="font-mono text-xs border-t-2 border-black pt-4 mt-4">
                  STATUS: <span className="font-bold">CIRCULAR</span>
               </div>
            </NeoCard>

            {/* Feature 3: Texture */}
            <NeoCard color="bg-[#D4FF00]" className="flex flex-col justify-between">
               <div>
                  <BoxIcon className="w-12 h-12 mb-4" />
                  <h3 className="font-display font-black text-3xl mb-2 uppercase">Soft_Touch</h3>
                  <p className="font-mono text-sm mb-4">Tactile matte finish interface for superior grip and premium hand-feel.</p>
               </div>
               <div className="font-mono text-xs border-t-2 border-black pt-4 mt-4">
                  FEEL: <span className="font-bold">PREMIUM_MATTE</span>
               </div>
            </NeoCard>

            {/* Feature 4: Nutrition (Big) */}
            <NeoCard className="md:col-span-2 bg-white flex flex-col md:flex-row-reverse items-center gap-8 !p-0 overflow-hidden">
               <div className="p-8 flex-1">
                  <Binary className="w-12 h-12 mb-4 text-blue-600" />
                  <h3 className="font-display font-black text-3xl mb-4 uppercase">Bio-Available Data</h3>
                  <p className="font-mono text-sm leading-relaxed mb-6">
                     Compiled from single-source protein. No bloated code (fillers). 
                     Direct assimilation for maximum tail-wag velocity.
                  </p>
                  <NeoButton variant="primary" className="text-sm">View Spectrograph</NeoButton>
               </div>
               <div className="w-full md:w-1/2 h-64 md:h-full bg-[url('https://www.transparenttextures.com/patterns/graphy-dark.png')] bg-gray-100 border-r-4 border-black flex items-center justify-center p-8">
                  <div className="w-full h-full bg-[#FF00FF] rounded-none border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] flex items-center justify-center">
                     <span className="font-mono font-black text-4xl text-white">100%</span>
                  </div>
               </div>
            </NeoCard>
         </div>
      </section>

      {/* Product Grid - "The Armory" */}
      <section className="py-24 bg-black border-y-4 border-[#D4FF00]">
         <div className="max-w-7xl mx-auto px-4 md:px-6">
            <h2 className="font-display font-black text-5xl md:text-7xl uppercase text-white mb-16 text-center">
               Choose Loadout
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
               {PRODUCTS.map((product) => (
                  <div key={product.id} className="group relative">
                     {/* Hover Card Effect */}
                     <div className={`absolute inset-0 ${product.color} translate-x-4 translate-y-4 border-4 border-white transition-transform group-hover:translate-x-6 group-hover:translate-y-6`} />
                     
                     <div className="relative bg-white border-4 border-black p-6 h-full flex flex-col">
                        <div className="bg-gray-100 border-2 border-black aspect-square mb-6 flex items-center justify-center relative overflow-hidden">
                           <div className={`absolute inset-0 ${product.color} opacity-20`} />
                           <img 
                              src={product.image} 
                              alt={product.name} 
                              className="w-3/4 object-contain drop-shadow-xl group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300" 
                           />
                           <div className="absolute top-2 left-2 bg-black text-white px-2 py-0.5 font-mono text-xs font-bold">
                              ID: {product.id.toUpperCase()}
                           </div>
                        </div>

                        <h3 className="font-display font-black text-3xl mb-2 uppercase">{product.name}</h3>
                        <p className="font-mono text-sm mb-6 flex-grow">{product.description}</p>

                        {/* Stats Grid */}
                        <div className="grid grid-cols-3 gap-2 mb-6 font-mono text-xs border-y-2 border-black py-4 bg-gray-50">
                           <div className="text-center">
                              <div className="font-bold">PROT</div>
                              <div>{product.stats.protein}</div>
                           </div>
                           <div className="text-center border-l-2 border-black">
                              <div className="font-bold">FAT</div>
                              <div>{product.stats.fat}</div>
                           </div>
                           <div className="text-center border-l-2 border-black">
                              <div className="font-bold">CARB</div>
                              <div>{product.stats.carbs}</div>
                           </div>
                        </div>

                        <NeoButton onClick={() => setCartCount(c => c + 1)} className="w-full">
                           ADD TO CART
                        </NeoButton>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </section>

      {/* CTA / Footer */}
      <footer className="bg-[#D4FF00] pt-24 pb-12 px-4 md:px-6 border-b-8 border-black">
         <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-start mb-24 gap-12">
               <div>
                  <h2 className="font-display font-black text-6xl md:text-8xl leading-none mb-8">
                     READY TO<br/>
                     UPGRADE?
                  </h2>
                  <p className="font-mono font-bold text-xl max-w-md mb-8">
                     Join the beta. Get 20% off your first compilation of treats.
                  </p>
                  <div className="flex gap-4">
                     <input 
                        type="email" 
                        placeholder="ENTER_EMAIL_ADDRESS" 
                        className="bg-white border-4 border-black px-6 py-4 font-mono font-bold w-full max-w-md focus:outline-none focus:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-shadow"
                     />
                     <button className="bg-black text-white px-8 py-4 font-black uppercase border-4 border-black hover:bg-white hover:text-black transition-colors">
                        Submit
                     </button>
                  </div>
               </div>

               <div className="grid grid-cols-2 gap-12 font-mono font-bold">
                  <div>
                     <h4 className="border-b-4 border-black mb-4 pb-2 uppercase">System</h4>
                     <ul className="space-y-2">
                        <li><a href="#" className="hover:underline">Login</a></li>
                        <li><a href="#" className="hover:underline">Register</a></li>
                        <li><a href="#" className="hover:underline">Track Protocol</a></li>
                     </ul>
                  </div>
                  <div>
                     <h4 className="border-b-4 border-black mb-4 pb-2 uppercase">Legal_Core</h4>
                     <ul className="space-y-2">
                        <li><a href="#" className="hover:underline">Privacy.txt</a></li>
                        <li><a href="#" className="hover:underline">Terms.md</a></li>
                        <li><a href="#" className="hover:underline">Shipping.json</a></li>
                     </ul>
                  </div>
               </div>
            </div>

            <div className="border-t-4 border-black pt-8 flex flex-col md:flex-row justify-between items-end font-mono text-xs font-bold">
               <div>
                  © 2026 PAW.OS // POWERED BY ACHIEVE PACK<br/>
                  ALL SYSTEMS NOMINAL
               </div>
               <div className="text-[10rem] leading-none opacity-10 font-display font-black pointer-events-none select-none overflow-hidden h-32 flex items-end">
                  PAW
               </div>
            </div>
         </div>
      </footer>
    </div>
  )
}

