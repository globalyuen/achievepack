import React, { useState, useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { ShoppingCart, Menu, X, ArrowLeft, Zap, Beaker, Leaf, Check, Package } from 'lucide-react'
import { motion, Variants } from 'motion/react'
import { ParallaxText } from '../../components/ParallaxText'
import { ScrollTriggeredCards } from '../../components/ScrollTriggeredCards'

// Reuse motion variants
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

const cardHover = {
  scale: 1.03,
  y: -8,
  boxShadow: '0 20px 40px rgba(0,0,0,0.15)',
  transition: { duration: 0.3 }
}

// Fallback images (Unsplash) since generation is currently capacity limited
// Ideally these would be the generated images:
// hero: /imgs/achieve-supplements/hero.png
// stick: /imgs/achieve-supplements/stick-pack.png
// sustainability: /imgs/achieve-supplements/sustainability.png

const SUPP_IMAGES = {
  hero: '/imgs/achieve-supplements/pouring-powder.png', // New usage shot
  product: '/imgs/achieve-supplements/flat-pouch.png', // New 3-side seal flat pouch
  lifestyle: 'https://images.unsplash.com/photo-1594165565574-88981f3d373c?q=80&w=2670&auto=format&fit=crop', // Lab/Clean vibe (Keep)
  sustainability: '/imgs/menu/header/a_hero_kv_compost_mailer_transparent_5939909.webp', // Actual store mailer image
  mailer: '/imgs/menu/header/a_hero_kv_compost_mailer_transparent_5939909.webp' // Actual store mailer image
}

const PRODUCTS = [
  {
    id: 'nano-banana-pro',
    name: 'Nano Banana Pro',
    tagline: 'Rapid Absorption Isolate',
    description: 'Micronized banana protein isolate engineered for 99% bioavailability. The future of recovery in a pocket-sized 3-side seal pouch.',
    price: 35.00,
    weight: '30 Sachets',
    image: SUPP_IMAGES.product,
    heroImage: SUPP_IMAGES.hero,
    color: '#FFE135', // Banana Yellow
    badges: ['Nano-Tech', 'Isolate', 'Zero Sugar']
  },
  {
    id: 'nano-vanilla-flow',
    name: 'Nano Vanilla Flow',
    tagline: 'Cognitive Enhancement',
    description: 'Nootropic-infused vanilla blend. Sharpen focus while fueling muscle synthesis. Clean energy, zero crash.',
    price: 38.00,
    weight: '30 Sachets',
    image: SUPP_IMAGES.product,
    heroImage: SUPP_IMAGES.lifestyle, // Lab vibe for vanilla
    color: '#F3E5AB', // Vanilla
    badges: ['Nootropic', 'Focus', 'Keto']
  },
  {
    id: 'nano-berry-burst',
    name: 'Nano Berry Burst',
    tagline: 'Antioxidant Matrix',
    description: 'Superfruit complex delivered via nano-liposomal transport. Maximum cellular protection on the go.',
    price: 35.00,
    weight: '30 Sachets',
    image: SUPP_IMAGES.product,
    heroImage: SUPP_IMAGES.hero,
    color: '#E0115F', // Berry
    badges: ['Antioxidant', 'Liposomal', 'Vitality']
  }
]

// Custom scroll cards for supplements
const SUPP_SCROLL_CARDS = [
  {
    image: SUPP_IMAGES.product,
    title: '3-Side Seal Tech',
    hueA: 50, hueB: 60, // Yellows
    leftInfo: {
      title: 'Precision Dosing',
      description: 'Single-serve 3-side seal flat pouches ensure exact nutrient delivery every time. No scoops, no mess.',
      badges: ['Flat Pouch', '3-Side Seal']
    },
    rightInfo: {
      title: 'High Barrier',
      description: 'Pharmaceutical-grade barrier films protect unstable nano-particles from moisture and oxygen.',
      badges: ['Freshness', 'Protection']
    }
  },
  {
    image: SUPP_IMAGES.lifestyle,
    title: 'Lab Verified',
    hueA: 190, hueB: 210, // Cyans
    leftInfo: {
      title: '3rd Party Tested',
      description: 'Every batch rigourously tested for purity and potency. QR code on every sachet.',
      badges: ['Certified', 'Transparent']
    },
    rightInfo: {
      title: 'Nano-Engineered',
      description: 'Particle sizes reduced to <100nm for bypassing digestion bottlenecks.',
      badges: ['Bioavailable', 'Fast Acting']
    }
  },
  {
    image: SUPP_IMAGES.sustainability,
    title: 'Eco-Forward',
    hueA: 100, hueB: 120, // Greens
    leftInfo: {
      title: 'Compostable Film',
      description: 'Our advanced flat pouches are certified home compostable. Dissolves in nature, not in oceans.',
      badges: ['Compostable', 'Zero Waste']
    },
    rightInfo: {
      title: 'Minimal Footprint',
      description: 'Compact format reduces shipping volume by 80% compared to rigid tubs.',
      badges: ['Low Carbon', 'Efficient']
    }
  }
]

export default function AchieveSupplementDemoPage() {
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
    <div className="min-h-screen bg-white text-gray-900 font-sans selection:bg-[#FFE135] selection:text-black">
      <Helmet>
        <title>Achieve Supplements | Nano-Tech Nutrition</title>
        <meta name="description" content="Achieve Supplements - Nano Banana Pro. Advanced bio-available nutrition in sustainable stick pack packaging. The future of supplements." />
        <style>{`
          @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=Inter:wght@300;400;500;600&display=swap');
          .font-display { font-family: 'Space Grotesk', sans-serif; }
          .font-sans { font-family: 'Inter', sans-serif; }
        `}</style>
      </Helmet>

      {/* Achieve Pack Return Banner */}
      <div className="fixed top-0 left-0 right-0 z-[60] bg-black text-white py-2 px-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link to="/free-service/website-upgrade" className="flex items-center gap-2 text-sm hover:text-[#FFE135] transition">
            <ArrowLeft className="w-4 h-4" />
            Back to Achieve Pack
          </Link>
          <span className="text-xs text-white/60 hidden sm:block">This is a demo website created by Achieve Pack</span>
          <Link to="/store" className="text-sm font-medium hover:text-[#FFE135] transition">
            View Stick Pack Specs
          </Link>
        </div>
      </div>

      {/* Navigation */}
      <nav className={`fixed top-[40px] w-full z-50 transition-all duration-500 ${scrolled ? 'bg-white/90 backdrop-blur-xl shadow-sm py-4 border-b border-gray-100' : 'bg-transparent py-8'}`}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 font-display text-2xl font-bold tracking-tight">
              <Zap className="h-6 w-6 text-[#FFE135] fill-current" />
              ACHIEVE<span className="font-light">SUPPS</span>
            </div>

            <div className="hidden md:flex items-center space-x-12">
              {['Science', 'Nano Series', 'Sustainability'].map((item) => (
                <a key={item} href={`#${item.toLowerCase().replace(' ', '-')}`} className="text-sm font-medium tracking-wide hover:text-[#FFE135] transition-colors uppercase">
                  {item}
                </a>
              ))}
            </div>

            <div className="flex items-center gap-6">
              <button 
                className="relative p-2 hover:text-[#FFE135] transition"
                onClick={() => setCartCount(c => c + 1)}
              >
                <ShoppingCart className="w-5 h-5" />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 w-4 h-4 bg-[#FFE135] text-black rounded-full text-[10px] font-bold flex items-center justify-center">
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
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-gray-50">
        <div className="absolute inset-0 z-0">
          <div className="absolute right-0 top-0 w-2/3 h-full bg-[#FFE135]/10 clip-path-slant" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="pt-20"
          >
            <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-3 py-1 border border-black/10 rounded-full text-xs font-bold mb-8 bg-white shadow-sm tracking-wide uppercase">
              <span className="w-2 h-2 rounded-full bg-[#FFE135]" />
              New Nano Banana Pro
            </motion.div>
            
            <motion.h1 variants={fadeInUp} className="text-6xl md:text-8xl font-display font-bold leading-[0.9] mb-8 tracking-tighter">
              DOSE <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFE135] to-amber-400">PRECISION</span>
            </motion.h1>

            <motion.p variants={fadeInUp} className="text-xl text-gray-500 mb-10 max-w-lg leading-relaxed">
              Bio-available nutrition engineered for the modern athlete. 
              Delivered in sustainable, pocket-sized flat pouches.
            </motion.p>

            <motion.div variants={fadeInUp} className="flex gap-6">
              <button className="px-10 py-4 bg-black text-white rounded-full font-bold hover:bg-[#FFE135] hover:text-black transition shadow-xl shadow-black/10">
                Shop Nano Series
              </button>
              <button className="px-10 py-4 border border-black/10 bg-white text-black rounded-full font-bold hover:bg-gray-50 transition">
                The Science
              </button>
            </motion.div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 100, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
            className="relative h-[600px] bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100"
          >
            <img 
               src={activeProduct.heroImage} 
               alt={activeProduct.name}
               className="w-full h-full object-cover"
            />
            {/* Floating Product Selector */}
            <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-md p-4 rounded-2xl border border-white/50 shadow-lg">
               <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide">
                 {PRODUCTS.map(p => (
                   <button
                    key={p.id}
                    onClick={() => setActiveProduct(p)}
                    className={`flex-shrink-0 px-4 py-2 rounded-xl transition-all border ${activeProduct.id === p.id ? 'bg-black text-white border-black' : 'bg-white text-gray-500 border-gray-200 hover:border-gray-400'}`}
                   >
                     <p className="text-xs font-bold whitespace-nowrap">{p.name}</p>
                   </button>
                 ))}
               </div>
            </div>
          </motion.div>
        </div>
        
        {/* Background Decoration */}
        <div className="absolute left-0 bottom-0 text-[20vw] font-display font-bold leading-none text-gray-100/50 select-none z-0">
          ACHIEVE
        </div>
      </section>

      {/* Marquee */}
      <section className="py-6 bg-[#FFE135] text-black overflow-hidden">
        <ParallaxText baseVelocity={2} textClassName="text-xl md:text-3xl font-display font-bold uppercase tracking-widest px-8">
          Nano-Tech • Bio-Available • Compostable • Flat Pouch • Precision • 
        </ParallaxText>
      </section>

      {/* Science/Features Section */}
      <section id="science" className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-20">
             <motion.div
               initial="hidden"
               whileInView="visible"
               viewport={{ once: true }}
               variants={fadeInUp}
             >
               <h2 className="text-5xl font-display font-bold mb-8">The Flat Pouch <br/>Advantage</h2>
               <div className="space-y-8">
                 {[
                   { title: 'Exact Dosage', desc: 'Stop scooping. Start succeeding. Each sachet contains precisely 25g of isolate.' },
                   { title: 'Zero Oxidation', desc: 'Individually sealed to prevent moisture and air from degrading potency.' },
                   { title: 'Ultimate Mobility', desc: 'Gym bag, pocket, or desk drawer. High-performance fuel wherever you go.' }
                 ].map((item, i) => (
                   <div key={i} className="flex gap-6 border-b border-gray-100 pb-8">
                     <span className="text-xs font-bold text-gray-400 mt-1">0{i+1}</span>
                     <div>
                       <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                       <p className="text-gray-500 leading-relaxed">{item.desc}</p>
                     </div>
                   </div>
                 ))}
               </div>
             </motion.div>
             <div className="relative">
                <div className="aspect-square bg-gray-100 rounded-full overflow-hidden relative">
                   <img src={SUPP_IMAGES.hero} alt="Usage detail" className="w-full h-full object-cover" />
                </div>
                {/* Floating Badge */}
                <div className="absolute top-10 -left-10 bg-black text-white p-6 rounded-2xl shadow-xl">
                  <div className="text-4xl font-display font-bold text-[#FFE135]">5g</div>
                  <div className="text-xs font-bold uppercase tracking-wider">Nano-BCAA</div>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Product Highlight Scroll */}
      <section id="nano-series" className="py-32 bg-black text-white">
        <div className="max-w-7xl mx-auto px-6 mb-16 text-center">
           <span className="text-[#FFE135] text-xs uppercase tracking-widest font-bold mb-4 block">The Collection</span>
           <h2 className="text-4xl font-display font-bold">Engineered For Performance</h2>
        </div>
        <ScrollTriggeredCards cards={SUPP_SCROLL_CARDS} />
      </section>

      {/* Sustainability Section */}
      <section id="sustainability" className="py-32 bg-emerald-50 relative overflow-hidden text-emerald-950">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-2 gap-20 items-center">
            <div className="order-2 md:order-1 relative">
               <img 
                 src={SUPP_IMAGES.sustainability} 
                 alt="Sustainable Packaging" 
                 className="rounded-3xl shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-700"
               />
            </div>
            <div className="order-1 md:order-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-100 text-emerald-800 rounded-full text-xs font-bold mb-6 uppercase tracking-wide">
                <Leaf className="w-3 h-3" />
                Achieve Pack Tech
              </div>
              <h2 className="text-5xl font-display font-bold mb-8 leading-tight">Clean Fuel. <br/>Clean Planet.</h2>
              <p className="text-emerald-800/70 text-lg mb-10 leading-relaxed">
                Single-serve convenience used to mean single-use waste. Not anymore. 
                Our Nano Flat Pouches are crafted from certified home-compostable films derived from eucalyptus and corn starch.
              </p>
              
              <ul className="space-y-4 mb-10">
                {['Plastic-Free Barrier', 'Non-Toxic Inks', 'Certified Home Compostable'].map(item => (
                  <li key={item} className="flex items-center gap-3 font-bold">
                    <div className="w-6 h-6 rounded-full bg-emerald-200 flex items-center justify-center">
                      <Check className="w-3 h-3 text-emerald-800" />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>

              <button className="px-8 py-4 bg-emerald-900 text-white rounded-xl font-bold hover:bg-emerald-800 transition shadow-lg">
                View Impact Report
              </button>
            </div>
          </div>

          <div className="mt-20 grid md:grid-cols-2 gap-20 items-center">
            <div className="order-1">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-100 text-amber-900 rounded-full text-xs font-bold mb-6 uppercase tracking-wide">
                <Package className="w-3 h-3" />
                Shipping Solved
              </div>
              <h2 className="text-4xl font-display font-bold mb-6 text-emerald-950">
                Meet the <span className="text-emerald-700">AchievePacker™</span>
              </h2>
              <p className="text-emerald-900/70 text-lg mb-8 leading-relaxed">
                Your commitment to sustainability shouldn't end with the product. 
                Shipped in our signature <strong>AchievePacker Compostable Mailers</strong>. 
                Made from 100% recycled kraft paper and corn starch, printed with soy-based inks.
              </p>
              <div className="flex gap-4">
                 <div className="p-4 bg-white rounded-xl shadow-sm border border-emerald-100/50">
                    <div className="text-2xl mb-1">🌱</div>
                    <div className="font-bold text-sm text-emerald-900">Home Compostable</div>
                 </div>
                 <div className="p-4 bg-white rounded-xl shadow-sm border border-emerald-100/50">
                    <div className="text-2xl mb-1">💧</div>
                    <div className="font-bold text-sm text-emerald-900">Water Resistant</div>
                 </div>
              </div>
            </div>
            <div className="order-2 relative h-[400px] rounded-3xl overflow-hidden shadow-2xl">
               <img 
                 src={SUPP_IMAGES.mailer} 
                 alt="AchievePacker Compostable Mailer" 
                 className="w-full h-full object-cover"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/20 to-transparent" />
               <div className="absolute bottom-6 left-6 text-white font-bold text-xl drop-shadow-md">
                 Plastic-Free Shipping
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-100 pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-16 mb-20">
            <div className="col-span-2">
              <div className="flex items-center gap-2 font-display text-2xl font-bold tracking-tight mb-8">
                <Zap className="h-6 w-6 text-black fill-current" />
                ACHIEVE
              </div>
              <p className="text-gray-500 leading-relaxed max-w-sm mb-8">
                Bridging the gap between clinical science and daily performance. 
                Nutrition, evolved.
              </p>
              <div className="flex gap-4">
                 <input type="email" placeholder="Enter email for science digest" className="bg-gray-50 border border-gray-200 px-4 py-3 rounded-lg w-full text-sm focus:outline-none focus:border-black" />
                 <button className="bg-black text-white px-6 rounded-lg font-bold text-sm hover:bg-[#FFE135] hover:text-black transition">→
                 </button>
              </div>
            </div>
            <div>
              <h4 className="font-bold uppercase tracking-wider text-xs mb-8">Series</h4>
              <ul className="space-y-4 text-sm text-gray-500">
                <li><a href="#" className="hover:text-black transition">Nano Protein</a></li>
                <li><a href="#" className="hover:text-black transition">Nootropics</a></li>
                <li><a href="#" className="hover:text-black transition">Hydration</a></li>
                <li><a href="#" className="hover:text-black transition">Bundles</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold uppercase tracking-wider text-xs mb-8">Connect</h4>
              <ul className="space-y-4 text-sm text-gray-500">
                <li><a href="#" className="hover:text-black transition">Lab Reports</a></li>
                <li><a href="#" className="hover:text-black transition">Sustainability</a></li>
                <li><a href="#" className="hover:text-black transition">Ambassadors</a></li>
                <li><a href="#" className="hover:text-black transition">Support</a></li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-100 text-xs text-gray-400 font-medium uppercase tracking-wide">
            <p>© 2026 Achieve Supplements. All rights reserved.</p>
            <div className="flex items-center gap-2 mt-4 md:mt-0">
               Packaging by <Link to="/" className="text-black font-bold hover:underline">Achieve Pack</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
