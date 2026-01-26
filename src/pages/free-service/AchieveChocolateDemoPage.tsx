import React, { useState, useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { ShoppingCart, Menu, X, ArrowLeft, Palette, Award, Leaf } from 'lucide-react'
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

// Images for Chocolate Brand
const CHOCOLATE_IMAGES = {
  hero: {
    main: '/imgs/achieve-chocolate/hero-main.png',
  },
  products: {
    pouch: '/imgs/achieve-chocolate/pouch.png',
    box: '/imgs/achieve-chocolate/box.png',
  },
  sustainability: '/imgs/achieve-chocolate/sustainability.png?v=1'
}

const PRODUCTS = [
  {
    id: 'dark-noir-pouch',
    name: 'Dark Noir Drops',
    tagline: '70% Cocoa Intensity',
    description: 'Single-origin Ecuadorian cocoa beans roasted to perfection. Deep, earthy notes with a hint of red fruit.',
    price: 18.00,
    weight: '250g Pouch',
    image: CHOCOLATE_IMAGES.products.pouch,
    heroImage: CHOCOLATE_IMAGES.hero.main,
    color: '#3e2723',
    badges: ['Vegan', 'Single Origin', 'Organic']
  },
  {
    id: 'imperial-truffle-box',
    name: 'Imperial Truffles',
    tagline: 'The Ultimate Gift',
    description: 'Hand-rolled artisan truffles with gold leaf accents. Assorted flavors including Salted Caramel and Hazelnut Praline.',
    price: 45.00,
    weight: '16pc Gift Box',
    image: CHOCOLATE_IMAGES.products.box,
    heroImage: CHOCOLATE_IMAGES.products.box, // Use box image for hero when selected
    color: '#d4af37',
    badges: ['Handcrafted', 'Gold Leaf', 'Gift Set']
  },
  {
    id: 'milk-velvet-pouch',
    name: 'Milk Velvet Buttons',
    tagline: 'Creamy Swiss Tradition',
    description: 'Smooth, velvety texture made with high alpine milk. A classic indulgence that melts in your mouth.',
    price: 16.00,
    weight: '250g Pouch',
    image: CHOCOLATE_IMAGES.products.pouch, // Reuse pouch image for demo
    heroImage: CHOCOLATE_IMAGES.hero.main,
    color: '#8d6e63',
    badges: ['Swiss Milk', 'Creamy', 'Classic']
  }
]

// Custom scroll cards for chocolate
const CHOCOLATE_SCROLL_CARDS = [
  {
    image: CHOCOLATE_IMAGES.products.pouch,
    title: 'Aroma Lock',
    hueA: 30, hueB: 45,
    leftInfo: {
      title: 'Freshness Sealed',
      description: 'Our high-barrier resealable pouches lock in the complex aromas of fine cocoa.',
      badges: ['High Barrier', 'Resealable']
    },
    rightInfo: {
      title: 'Matte Finish',
      description: 'Premium soft-touch matte finish that feels as luxurious as the chocolate tastes.',
      badges: ['Soft Touch', 'Premium']
    }
  },
  {
    image: CHOCOLATE_IMAGES.products.box,
    title: 'Rigid Elegance',
    hueA: 45, hueB: 60,
    leftInfo: {
      title: 'Structural Integrity',
      description: 'Durable rigid box construction protects delicate truffles during transit.',
      badges: ['Protective', 'Durable']
    },
    rightInfo: {
      title: 'Gold Foil',
      description: 'Hot-stamped gold foil branding for an unmistakable statement of luxury.',
      badges: ['Gold Foil', 'Embossed']
    }
  },
  {
    image: CHOCOLATE_IMAGES.sustainability,
    title: 'Earth First',
    hueA: 100, hueB: 120,
    leftInfo: {
      title: 'Compostable Pouch',
      description: 'Certified home compostable materials that return to the earth in 180 days.',
      badges: ['certified-home-compostable', 'Plastic Free']
    },
    rightInfo: {
      title: 'Sustainably Sourced',
      description: 'Packaging that matches our commitment to fair trade and ethical cocoa sourcing.',
      badges: ['Ethical', 'Fair Trade']
    }
  }
]

export default function AchieveChocolateDemoPage() {
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
    <div className="min-h-screen bg-[#FDFBF7] text-gray-900 font-sans">
      <Helmet>
        <title>Achieve Chocolate | Luxury Sustainable Confectionery</title>
        <meta name="description" content="Discover Achieve Chocolate - where premium artisan flavor meets sustainable compostable packaging. Indulgence without compromise." />
        <style>{`
          @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;500;600;700&family=Playfair+Display:ital,wght@0,400;0,700;1,400&family=Inter:wght@300;400;500;600&display=swap');
          .font-display { font-family: 'Playfair Display', serif; }
          .font-luxury { font-family: 'Cinzel', serif; }
          .font-sans { font-family: 'Inter', sans-serif; }
        `}</style>
      </Helmet>

      {/* Achieve Pack Return Banner */}
      <div className="fixed top-0 left-0 right-0 z-[60] bg-[#2C1810] text-[#D4AF37] py-2 px-4 shadow-md">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link to="/free-service/website-upgrade" className="flex items-center gap-2 text-sm hover:text-white transition">
            <ArrowLeft className="w-4 h-4" />
            Back to Achieve Pack
          </Link>
          <span className="text-xs text-[#D4AF37]/80 hidden sm:block">This is a demo website created by Achieve Pack</span>
          <Link to="/store" className="text-sm font-medium hover:text-white transition">
            See Packaging Specs
          </Link>
        </div>
      </div>

      {/* Navigation */}
      <nav className={`fixed top-[40px] w-full z-50 transition-all duration-500 ${scrolled ? 'bg-[#FDFBF7]/95 backdrop-blur-xl shadow-sm py-4' : 'bg-transparent py-8'}`}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 font-luxury text-2xl font-bold tracking-widest text-[#2C1810]">
              <Award className="h-6 w-6 text-[#D4AF37]" />
              ACHIEVE
            </div>

            <div className="hidden md:flex items-center space-x-12">
              {['Collection', 'Our Story', 'Sustainability'].map((item) => (
                <a key={item} href={`#${item.toLowerCase().replace(' ', '-')}`} className="text-sm font-medium tracking-widest uppercase text-[#5D4037] hover:text-[#2C1810] transition-colors">
                  {item}
                </a>
              ))}
            </div>

            <div className="flex items-center gap-6">
              <button 
                className="relative p-2 text-[#2C1810] hover:text-[#D4AF37] transition"
                onClick={() => setCartCount(c => c + 1)}
              >
                <ShoppingCart className="w-5 h-5" />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 w-4 h-4 bg-[#D4AF37] text-[#2C1810] rounded-full text-[10px] font-bold flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </button>
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden p-1 text-[#2C1810]">
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-[#1a1110]">
        <div className="absolute inset-0 z-0">
          <motion.img 
            key={activeProduct.heroImage}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 0.8, scale: 1 }}
            transition={{ duration: 1.5 }}
            src={activeProduct.heroImage} 
            alt={activeProduct.name}
            className="w-full h-full object-cover opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="text-white pt-20"
          >
            <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-4 py-1 border border-[#D4AF37]/50 rounded-full text-xs font-medium mb-8 text-[#D4AF37] tracking-widest uppercase">
              <Award className="w-3 h-3" />
              Est. 2026 • Geneva
            </motion.div>
            
            <motion.h1 variants={fadeInUp} className="text-5xl md:text-8xl font-display font-light leading-[0.9] mb-8">
              Taste <br/>
              <span className="font-bold italic text-[#D4AF37]">Timeless</span>
            </motion.h1>

            <motion.p variants={fadeInUp} className="text-xl text-white/80 mb-10 max-w-lg font-light leading-relaxed">
              Experience the perfect union of ethically sourced cacao and sustainable craftsmanship. Indulgence, redefined.
            </motion.p>

            <motion.div variants={fadeInUp} className="flex gap-6">
              <button className="px-10 py-4 bg-[#D4AF37] text-[#2C1810] rounded-sm font-medium hover:bg-[#F9D670] transition shadow-lg tracking-wide uppercase text-sm">
                Shop Confections
              </button>
              <button className="px-10 py-4 border border-white/30 text-white rounded-sm font-medium hover:bg-white/5 transition tracking-wide uppercase text-sm">
                Our Journey
              </button>
            </motion.div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: 'easeOut', delay: 0.5 }}
            className="hidden md:flex justify-end items-end h-full pb-20"
          >
            <div className="bg-black/30 backdrop-blur-md p-8 border-l border-[#D4AF37]/30 w-80 text-white">
               <h3 className="text-sm uppercase tracking-widest text-[#D4AF37] mb-6 border-b border-[#D4AF37]/30 pb-2">Selected Works</h3>
               <div className="space-y-2">
                 {PRODUCTS.map(p => (
                   <button
                    key={p.id}
                    onClick={() => setActiveProduct(p)}
                    className={`w-full text-left p-4 transition-all duration-300 group ${activeProduct.id === p.id ? 'bg-[#D4AF37]/10 border-l-2 border-[#D4AF37]' : 'hover:bg-white/5 border-l-2 border-transparent'}`}
                   >
                     <div className={`font-display text-lg mb-1 ${activeProduct.id === p.id ? 'text-[#D4AF37]' : 'text-gray-400 group-hover:text-gray-200'}`}>{p.name}</div>
                     <div className="text-xs text-gray-500 uppercase tracking-wider">{p.tagline}</div>
                   </button>
                 ))}
               </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Marquee */}
      <section className="py-8 bg-[#2C1810] text-[#D4AF37] border-t border-[#D4AF37]/20">
        <ParallaxText baseVelocity={-2} textClassName="text-3xl md:text-5xl font-luxury font-normal uppercase tracking-widest px-8 opacity-80">
          Artisan • Organic • Sustainable • Premium • Heritage • Craft •
        </ParallaxText>
      </section>

      {/* Product Grid */}
      <section id="collection" className="py-32 bg-[#FDFBF7]">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-20"
          >
            <span className="text-[#D4AF37] text-sm uppercase tracking-[0.2em] font-bold mb-4 block">The Collection</span>
            <h2 className="text-5xl font-display font-medium text-[#2C1810] mb-6">Curated Indulgence</h2>
            <p className="text-[#5D4037] max-w-2xl mx-auto font-light text-lg">
              Each piece is created with precision, passion, and respect for nature. From bean to bar, we ensure excellence in every bite.
            </p>
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
                <div className="aspect-[3/4] overflow-hidden bg-white shadow-xl mb-8 relative p-8 flex items-center justify-center">
                  <div className="absolute inset-0 border-[12px] border-[#FDFBF7] z-10 pointer-events-none" />
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-contain transform transition-transform duration-700 group-hover:scale-110 drop-shadow-2xl" 
                  />
                  <div className="absolute top-6 right-6 z-20 flex flex-col gap-2 items-end">
                    {product.badges.map(badge => (
                      <span key={badge} className="px-2 py-1 bg-[#2C1810] text-[#D4AF37] text-[10px] uppercase tracking-wider font-bold">
                        {badge}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="text-center">
                  <h3 className="text-2xl font-display font-bold text-[#2C1810] mb-2">{product.name}</h3>
                  <p className="text-[#8D6E63] mb-4 h-12 text-sm leading-relaxed px-4">{product.description}</p>
                  <div className="flex items-center justify-center gap-4 mt-6">
                    <span className="font-luxury text-xl text-[#2C1810]">${product.price.toFixed(2)}</span>
                    <button className="px-6 py-2 bg-transparent border border-[#2C1810] text-[#2C1810] text-xs uppercase tracking-widest hover:bg-[#2C1810] hover:text-[#D4AF37] transition-all duration-300">
                      Add to Basket
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Scroll */}
      <section className="py-32 bg-[#1a1110] text-white">
        <div className="max-w-7xl mx-auto px-6 mb-16 text-center">
           <span className="text-[#D4AF37] text-sm uppercase tracking-[0.2em] font-bold mb-4 block">Craftsmanship</span>
           <h2 className="text-4xl font-display font-medium">The Art of Packaging</h2>
        </div>
        <ScrollTriggeredCards cards={CHOCOLATE_SCROLL_CARDS} />
      </section>

      {/* Stats Section */}
      <section id="sustainability" className="py-32 bg-[#F5F1E8] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-2 gap-20 items-center">
            <div>
              <span className="text-[#556B2F] text-sm uppercase tracking-[0.2em] font-bold mb-4 block">Our Commitment</span>
              <h2 className="text-5xl font-display font-bold text-[#2C1810] mb-8 leading-tight">Packaged for the <br/><span className="italic text-[#556B2F]">Planet</span></h2>
              <p className="text-[#5D4037] text-lg mb-10 leading-relaxed">
                We believe true luxury shouldn't cost the earth. That's why every Achieve Chocolate product comes in our signature Achieve Pack biodegradable packaging, ensuring your indulgence leaves no trace behind.
              </p>
              
              <div className="grid grid-cols-2 gap-12 border-t border-[#2C1810]/10 pt-10">
                <div>
                  <div className="text-5xl font-display font-bold text-[#556B2F] mb-2">180</div>
                  <div className="text-xs text-[#5D4037] uppercase tracking-widest font-bold">Days to Compost</div>
                </div>
                <div>
                  <div className="text-5xl font-display font-bold text-[#556B2F] mb-2">0%</div>
                  <div className="text-xs text-[#5D4037] uppercase tracking-widest font-bold">Plastic Waste</div>
                </div>
              </div>

              <div className="mt-12">
                <button className="flex items-center gap-3 text-[#2C1810] font-bold uppercase tracking-widest text-sm hover:gap-6 transition-all group">
                  Read Impact Report <ArrowLeft className="w-4 h-4 rotate-180 group-hover:text-[#556B2F]" />
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 border border-[#2C1810]/10 transform translate-x-4 translate-y-4 z-0" />
              <img 
                src={CHOCOLATE_IMAGES.sustainability} 
                alt="Sustainable Packaging" 
                className="relative z-10 w-full shadow-2xl grayscale-[20%] hover:grayscale-0 transition-all duration-1000"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#2C1810] text-[#FDFBF7]/60 pt-24 pb-12 border-t border-[#D4AF37]/20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-16 mb-20">
            <div className="col-span-2">
              <div className="flex items-center gap-2 font-luxury text-3xl font-bold tracking-widest text-[#FDFBF7] mb-8">
                <Award className="h-8 w-8 text-[#D4AF37]" />
                ACHIEVE
              </div>
              <p className="text-lg font-light leading-relaxed max-w-sm mb-8">
                Defining the new standard for luxury confectionery. 
                Where heritage meets the future of sustainability.
              </p>
              <div className="flex gap-4">
                {/* Social icons placeholder */}
                <div className="w-10 h-10 rounded-full border border-[#D4AF37]/30 flex items-center justify-center hover:bg-[#D4AF37] hover:text-[#2C1810] transition cursor-pointer">IG</div>
                <div className="w-10 h-10 rounded-full border border-[#D4AF37]/30 flex items-center justify-center hover:bg-[#D4AF37] hover:text-[#2C1810] transition cursor-pointer">FB</div>
              </div>
            </div>
            <div>
              <h4 className="font-bold text-[#FDFBF7] uppercase tracking-widest text-sm mb-8">Boutique</h4>
              <ul className="space-y-4 font-light">
                <li><a href="#" className="hover:text-[#D4AF37] transition">Dark Noir Collection</a></li>
                <li><a href="#" className="hover:text-[#D4AF37] transition">Milk Velvet Series</a></li>
                <li><a href="#" className="hover:text-[#D4AF37] transition">Gift Sets</a></li>
                <li><a href="#" className="hover:text-[#D4AF37] transition">Corporate Gifting</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-[#FDFBF7] uppercase tracking-widest text-sm mb-8">Maison</h4>
              <ul className="space-y-4 font-light">
                <li><a href="#" className="hover:text-[#D4AF37] transition">Our Philosophy</a></li>
                <li><a href="#" className="hover:text-[#D4AF37] transition">Scent of Cocoa</a></li>
                <li><a href="#" className="hover:text-[#D4AF37] transition">Sustainability</a></li>
                <li><a href="#" className="hover:text-[#D4AF37] transition">Contact Us</a></li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-[#FDFBF7]/10 text-xs tracking-wider uppercase">
            <p>© 2026 Achieve Chocolate. All rights reserved.</p>
            <div className="flex items-center gap-2 mt-4 md:mt-0 opacity-50 hover:opacity-100 transition">
               Proudly Packaged by <Link to="/" className="text-[#D4AF37] font-semibold hover:underline">Achieve Pack</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
