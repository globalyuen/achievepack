import { useState } from 'react'
import { Package, Leaf, Zap, ShoppingCart, Star, Flame, Box as BoxIcon } from 'lucide-react'
import { motion } from 'framer-motion'
import { Helmet } from 'react-helmet-async'

/**
 * Pouch.eco Design Demo Page - Neo-Brutalist Style
 * Inspired by: AchievePack Pet Demo
 * Colors: Neon Yellow, Cyan, Magenta, Black
 * Style: Bold, geometric, high-contrast
 */

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
// MAIN COMPONENT
// ============================================

export default function PouchEcoDemo() {
  const [cartCount, setCartCount] = useState(0)

  // Floating elements animation
  const floatAnim = {
    y: [0, -10, 0],
    transition: { duration: 2, repeat: Infinity, ease: "easeInOut" }
  }

  const PRODUCTS = [
    {
      id: 'starter',
      name: 'STARTER_KIT',
      description: 'Compostable pouches from 500 units. Perfect for testing markets.',
      price: '$0.50',
      stats: { moq: '500', material: 'BIO', barrier: 'MED' },
      color: 'bg-[#D4FF00]' // Yellow
    },
    {
      id: 'pro',
      name: 'PRO_PACK',
      description: 'High-barrier recyclable pouches. Food-safe protocol certified.',
      price: '$0.35',
      stats: { moq: '2K', material: 'PCR', barrier: 'HIGH' },
      color: 'bg-[#00FFFF]' // Cyan
    },
    {
      id: 'enterprise',
      name: 'ENTERPRISE',
      description: 'Custom bulk orders. Full compliance matrix. Global certified.',
      price: 'Custom',
      stats: { moq: '10K+', material: 'ANY', barrier: 'MAX' },
      color: 'bg-[#FF00FF]' // Magenta
    }
  ]

  return (
    <div className="min-h-screen bg-[#F0F0F0] text-black font-['Space_Grotesk'] selection:bg-black selection:text-[#D4FF00] overflow-x-hidden">
      <Helmet>
        <title>POUCH.ECO | Eco Packaging Protocol | Demo</title>
        <style>{`
          @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;700&display=swap');
        `}</style>
      </Helmet>

      {/* Navigation */}
      <nav className="border-b-4 border-black bg-white sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 md:px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-black flex items-center justify-center">
              <Leaf className="text-[#D4FF00] w-6 h-6" />
            </div>
            <span className="font-black text-2xl tracking-tighter">
              POUCH<span className="text-[#00FFFF]">.ECO</span>
            </span>
          </div>

          <div className="hidden md:flex items-center gap-8 font-['JetBrains_Mono'] font-bold text-sm">
            {['PRODUCTS', 'MATERIALS', 'START'].map((item) => (
              <a key={item} href="#" className="hover:bg-black hover:text-white px-2 py-1 transition-colors">
                [{item}]
              </a>
            ))}
          </div>

          <button className="border-2 border-black p-2 hover:bg-[#FF00FF] transition-colors relative" onClick={() => setCartCount(c => c + 1)}>
            <ShoppingCart className="w-6 h-6" />
            {cartCount > 0 && (
              <div className="absolute -top-3 -right-3 bg-black text-[#D4FF00] w-6 h-6 flex items-center justify-center font-['JetBrains_Mono'] font-bold text-xs border-2 border-[#D4FF00]">
                {cartCount}
              </div>
            )}
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-12 pb-24 border-b-4 border-black bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:20px_20px]">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Content */}
            <div className="space-y-8 z-10">
              <div className="inline-block bg-[#D4FF00] border-4 border-black px-4 py-2 transform -rotate-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <span className="font-['JetBrains_Mono'] font-bold text-sm">ECO_SYSTEM v2025</span>
              </div>
              
              <h1 className="font-black text-6xl md:text-8xl leading-[0.9] tracking-tighter uppercase">
                Start.<br/>
                Scale.<br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF00FF] to-[#00FFFF] drop-shadow-[4px_4px_0px_rgba(0,0,0,1)]">Sustain.</span>
              </h1>

              <p className="font-['JetBrains_Mono'] font-bold text-lg md:text-xl max-w-md bg-white border-2 border-black p-4 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                &gt; Eco packaging from 500 units.<br/>
                &gt; Compostable // Recyclable // Bio-based.<br/>
                &gt; Fast turnaround. No BS.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <NeoButton>Start Building</NeoButton>
                <NeoButton variant="secondary">View Materials</NeoButton>
              </div>
            </div>

            {/* Right Visual */}
            <div className="relative">
              <NeoCard className="bg-[#00FFFF] relative z-10 rotate-2 !p-0 overflow-hidden group">
                <div className="aspect-square bg-gradient-to-br from-[#00FFFF] to-[#FF00FF] flex items-center justify-center relative">
                  <Package className="w-64 h-64 text-black opacity-80 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300" strokeWidth={1.5} />
                  {/* Floating Tag */}
                  <motion.div animate={floatAnim} className="absolute top-4 right-4 bg-white border-2 border-black px-2 py-1 font-['JetBrains_Mono'] text-xs font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] z-20">
                    COMPOSTABLE_OK
                  </motion.div>
                </div>
              </NeoCard>
              
              {/* Decorative Background Elements */}
              <div className="absolute top-10 -right-10 w-full h-full border-4 border-black bg-[#D4FF00] -z-0 rotate-6" />
              <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-[#FF00FF] border-4 border-black flex items-center justify-center animate-bounce">
                <span className="font-black text-xl rotate-[-15deg]">500!</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Bento Grid */}
      <section className="py-24 px-4 md:px-6 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <h2 className="font-black text-5xl md:text-7xl uppercase">
            Core<br/>Features
          </h2>
          <div className="font-['JetBrains_Mono'] text-sm font-bold bg-[#D4FF00] border-2 border-black px-4 py-2">
            SELECT_MATERIAL_BELOW
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Feature 1: Low MOQ */}
          <NeoCard className="md:col-span-2 bg-[#F0F0F0]">
            <Zap className="w-12 h-12 mb-4 text-[#FF00FF]" />
            <h3 className="font-black text-3xl mb-4 uppercase">Low MOQ Protocol</h3>
            <p className="font-['JetBrains_Mono'] text-sm leading-relaxed mb-6">
              Start with just 500 units. Test your market without massive inventory commitment. 
              Perfect for startups and new product launches.
            </p>
            <div className="flex gap-2">
              <NeoBadge color="bg-[#D4FF00]">500_MIN</NeoBadge>
              <NeoBadge color="bg-[#00FFFF]">Fast_Launch</NeoBadge>
            </div>
          </NeoCard>

          {/* Feature 2: Compostable */}
          <NeoCard color="bg-[#00FFFF]" className="flex flex-col justify-between">
            <div>
              <Leaf className="w-12 h-12 mb-4" />
              <h3 className="font-black text-3xl mb-2 uppercase">Bio_Matrix</h3>
              <p className="font-['JetBrains_Mono'] text-sm mb-4">Certified compostable materials. Industrial + home compost ready.</p>
            </div>
            <div className="font-['JetBrains_Mono'] text-xs border-t-2 border-black pt-4 mt-4">
              STATUS: <span className="font-bold">BPI_CERTIFIED</span>
            </div>
          </NeoCard>

          {/* Feature 3: Fast Turnaround */}
          <NeoCard color="bg-[#D4FF00]" className="flex flex-col justify-between">
            <div>
              <Flame className="w-12 h-12 mb-4" />
              <h3 className="font-black text-3xl mb-2 uppercase">Fast_Ship</h3>
              <p className="font-['JetBrains_Mono'] text-sm mb-4">Samples in 2-3 weeks. Production in 6-8 weeks. No delays.</p>
            </div>
            <div className="font-['JetBrains_Mono'] text-xs border-t-2 border-black pt-4 mt-4">
              SPEED: <span className="font-bold">OPTIMIZED</span>
            </div>
          </NeoCard>

          {/* Feature 4: High Barrier */}
          <NeoCard className="md:col-span-2 bg-white">
            <BoxIcon className="w-12 h-12 mb-4 text-blue-600" />
            <h3 className="font-black text-3xl mb-4 uppercase">High-Barrier Tech</h3>
            <p className="font-['JetBrains_Mono'] text-sm leading-relaxed mb-6">
              Multi-layer barrier structures. O2 + moisture blocking. 
              Keeps product fresh for 6-18 months shelf life.
            </p>
            <NeoButton variant="primary" className="text-sm">View Tech Specs</NeoButton>
          </NeoCard>
        </div>
      </section>

      {/* Product Grid */}
      <section className="py-24 bg-black border-y-4 border-[#D4FF00]">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <h2 className="font-black text-5xl md:text-7xl uppercase text-white mb-16 text-center">
            Choose Plan
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {PRODUCTS.map((product) => (
              <div key={product.id} className="group relative">
                {/* Hover Card Effect */}
                <div className={`absolute inset-0 ${product.color} translate-x-4 translate-y-4 border-4 border-white transition-transform group-hover:translate-x-6 group-hover:translate-y-6`} />
                
                <div className="relative bg-white border-4 border-black p-6 h-full flex flex-col">
                  <div className="bg-gray-100 border-2 border-black aspect-square mb-6 flex items-center justify-center relative overflow-hidden">
                    <div className={`absolute inset-0 ${product.color} opacity-20`} />
                    <Package className="w-32 h-32 text-black drop-shadow-xl group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300" strokeWidth={1} />
                    <div className="absolute top-2 left-2 bg-black text-white px-2 py-0.5 font-['JetBrains_Mono'] text-xs font-bold">
                      ID: {product.id.toUpperCase()}
                    </div>
                  </div>

                  <h3 className="font-black text-3xl mb-2 uppercase">{product.name}</h3>
                  <p className="font-['JetBrains_Mono'] text-sm mb-6 flex-grow">{product.description}</p>

                  {/* Stats Grid */}
                  <div className="grid grid-cols-3 gap-2 mb-6 font-['JetBrains_Mono'] text-xs border-y-2 border-black py-4 bg-gray-50">
                    <div className="text-center">
                      <div className="font-bold">MOQ</div>
                      <div>{product.stats.moq}</div>
                    </div>
                    <div className="text-center border-l-2 border-black">
                      <div className="font-bold">MAT</div>
                      <div>{product.stats.material}</div>
                    </div>
                    <div className="text-center border-l-2 border-black">
                      <div className="font-bold">BAR</div>
                      <div>{product.stats.barrier}</div>
                    </div>
                  </div>

                  <div className="text-center mb-4 font-black text-2xl">{product.price}</div>

                  <NeoButton onClick={() => setCartCount(c => c + 1)} className="w-full">
                    GET QUOTE
                  </NeoButton>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-24 px-4 md:px-6 max-w-5xl mx-auto">
        <NeoCard className="bg-[#FF00FF] text-center">
          <div className="flex justify-center mb-6">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-8 h-8 text-white fill-white" />
            ))}
          </div>
          <blockquote className="font-['JetBrains_Mono'] text-xl font-bold text-white mb-6 leading-relaxed">
            "Started with 500 pouches from POUCH.ECO. Best decision ever. Now ordering 10K+ monthly."
          </blockquote>
          <cite className="font-black text-lg text-white uppercase">
            - Sarah M., Brand Founder
          </cite>
        </NeoCard>
      </section>

      {/* CTA Footer */}
      <footer className="bg-[#D4FF00] pt-24 pb-12 px-4 md:px-6 border-b-8 border-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-black text-6xl md:text-8xl leading-none mb-8">
              READY TO<br/>
              LAUNCH?
            </h2>
            <p className="font-['JetBrains_Mono'] font-bold text-xl max-w-md mx-auto mb-8">
              Join 2,000+ brands. Get instant quote. Start with 500 units.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-2xl mx-auto">
              <input 
                type="email" 
                placeholder="ENTER_EMAIL" 
                className="bg-white border-4 border-black px-6 py-4 font-['JetBrains_Mono'] font-bold flex-1 focus:outline-none focus:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-shadow"
              />
              <button className="bg-black text-white px-8 py-4 font-black uppercase border-4 border-black hover:bg-white hover:text-black transition-colors whitespace-nowrap">
                Get Quote
              </button>
            </div>
          </div>

          <div className="border-t-4 border-black pt-8 flex flex-col md:flex-row justify-between items-center font-['JetBrains_Mono'] text-xs font-bold">
            <div className="text-center md:text-left">
              © 2025 POUCH.ECO // ECO PACKAGING PROTOCOL<br/>
              ALL MATERIALS CERTIFIED
            </div>
            <div className="text-8xl md:text-[10rem] leading-none opacity-10 font-black pointer-events-none select-none overflow-hidden h-20 md:h-32 flex items-end mt-4 md:mt-0">
              ECO
            </div>
          </div>
        </div>
      </footer>

      {/* Add animations */}
      <style>{`
        @keyframes bounce {
          0%, 100% {
            transform: translateY(0) rotate(-15deg);
          }
          50% {
            transform: translateY(-10px) rotate(-15deg);
          }
        }
      `}</style>
    </div>
  )
}
