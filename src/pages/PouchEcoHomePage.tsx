import React, { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { 
  Package, Leaf, Zap, ShoppingCart, Star, CheckCircle, 
  ArrowRight, Box, Sparkles, Heart, Users, Globe,
  Calculator as CalcIcon, Calendar, ChevronDown
} from 'lucide-react'
import DualDomainSEOHead from '../components/DualDomainSEOHead'
import { getDomain, getBrandConfig, getDomainContent } from '../utils/domain'
import { getImage } from '../utils/imageMapper'
import { HeroGrainBackground } from '../components/HeroGrainBackground'
import Newsletter from '../components/Newsletter'
import { useStore } from '../store/StoreContext'
import ProductCarousel from '../components/ProductCarousel'

/**
 * Pouch.eco Homepage - B2C Focused
 * 
 * Key Features:
 * - Domain detection (shows pouch.eco branding)
 * - Neo-Brutalist design style
 * - 30%+ content differentiation from achievepack.com
 * - Low MOQ emphasis (500 units)
 * - Friendly, approachable tone
 * - Green eco theme (#10b981)
 */

// Neo-Brutalist Components (matching POUCH_ECO_DESIGN_SYSTEM.md)
const NeoButton = ({ children, onClick, variant = 'primary', className = '', to }: any) => {
  const baseStyle = "relative px-8 py-4 font-black uppercase tracking-widest border-4 border-black transition-all active:translate-x-1 active:translate-y-1 inline-block"
  const variants = {
    primary: "bg-[#10b981] text-white hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 hover:-translate-x-1",
    secondary: "bg-white text-black hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 hover:-translate-x-1",
    yellow: "bg-[#D4FF00] text-black hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 hover:-translate-x-1"
  }
  
  if (to) {
    return (
      <Link to={to} className={`${baseStyle} ${variants[variant as keyof typeof variants]} ${className}`}>
        {children}
      </Link>
    )
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

const NeoBadge = ({ children, color = 'bg-[#10b981]' }: any) => (
  <span className={`inline-block px-3 py-1 text-xs font-black uppercase border-2 border-black ${color} text-white shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]`}>
    {children}
  </span>
)

export default function PouchEcoHomePage() {
  const brand = getBrandConfig()
  const content = getDomainContent('homepage')
  const { cartCount, setIsCartOpen } = useStore()
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeFeature, setActiveFeature] = useState(0)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Auto-rotate features
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveFeature(prev => (prev + 1) % 3)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const features = [
    {
      icon: <Zap className="w-12 h-12 text-[#10b981]" />,
      title: "Start Small, Dream Big",
      description: "Begin with just 500 units. Test your market without massive inventory risks. Perfect for startups and new product launches.",
      badge: "500 MOQ",
      color: "bg-[#D4FF00]"
    },
    {
      icon: <Leaf className="w-12 h-12 text-[#10b981]" />,
      title: "Truly Compostable",
      description: "EN13432 & ASTM D6400 certified. Your packaging becomes soil in 90-180 days. Home & industrial composting compatible.",
      badge: "BPI Certified",
      color: "bg-[#00FFFF]"
    },
    {
      icon: <Sparkles className="w-12 h-12 text-[#10b981]" />,
      title: "8 Premium Finishes",
      description: "Matte, glossy, soft-touch, metallic, holographic, spot UV, embossed, debossed. Make your brand stand out on the shelf.",
      badge: "Premium",
      color: "bg-[#FF00FF]"
    }
  ]

  const products = [
    {
      id: 'starter',
      name: 'Starter Kit',
      tagline: 'Perfect for Testing',
      description: 'Compostable pouches from 500 units. Ideal for product launches and market testing.',
      price: 'From $0.50/bag',
      moq: '500',
      image: getImage('stand-up-pouch/stand800'),
      badges: ['Compostable', 'Low MOQ', 'Fast Ship'],
      color: 'bg-[#D4FF00]'
    },
    {
      id: 'pro',
      name: 'Pro Pack',
      tagline: 'Best Value',
      description: 'High-barrier recyclable pouches. Food-safe certified. Premium finishes available.',
      price: 'From $0.35/bag',
      moq: '2,000',
      image: getImage('flat-bottom/flat-bottom800'),
      badges: ['Recyclable', 'Food Safe', 'Premium'],
      color: 'bg-[#00FFFF]'
    },
    {
      id: 'custom',
      name: 'Custom Solution',
      tagline: 'Unlimited Options',
      description: 'Fully custom design, size, material, and features. Work with our team to create your perfect pouch.',
      price: 'Custom Quote',
      moq: 'Flexible',
      image: getImage('side-gusset/side-gusset800'),
      badges: ['Custom', 'Any MOQ', 'Full Service'],
      color: 'bg-[#FF00FF]'
    }
  ]

  const socialProof = [
    { icon: <Users className="w-6 h-6" />, number: "1,200+", label: "Happy Brands" },
    { icon: <Package className="w-6 h-6" />, number: "50M+", label: "Pouches Made" },
    { icon: <Globe className="w-6 h-6" />, number: "40+", label: "Countries" },
    { icon: <Star className="w-6 h-6" />, number: "4.9/5", label: "Rating" }
  ]

  return (
    <div className="min-h-screen bg-neutral-50 text-black font-['Space_Grotesk'] selection:bg-[#10b981] selection:text-white overflow-x-hidden">
      <DualDomainSEOHead
        title="Eco Packaging for Startups - From 500 Units"
        description="Beautiful compostable and recyclable pouches from just 500 units. Perfect for small brands starting their sustainability journey. BPI certified, 8 premium finishes, fast turnaround."
        keywords={['startup packaging', 'low moq pouches', 'compostable bags', 'eco packaging', 'small batch packaging', '500 units moq']}
        ogImage={getImage('eco-pouch-og')}
      />

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700;800;900&family=JetBrains+Mono:wght@400;700&display=swap');
      `}</style>

      {/* Navigation */}
      <nav className={`border-b-4 border-black sticky top-0 z-50 transition-all ${isScrolled ? 'bg-white shadow-lg' : 'bg-white/95 backdrop-blur-sm'}`}>
        <div className="max-w-7xl mx-auto px-4 md:px-6 h-20 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 hover:scale-105 transition-transform">
            <div className="w-10 h-10 bg-[#10b981] flex items-center justify-center border-2 border-black">
              <Leaf className="text-white w-6 h-6" />
            </div>
            <span className="font-black text-2xl tracking-tighter">
              POUCH<span className="text-[#10b981]">.ECO</span>
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-8 font-['JetBrains_Mono'] font-bold text-sm">
            <Link to="/store" className="hover:text-[#10b981] transition-colors">
              [SHOP]
            </Link>
            <Link to="/materials" className="hover:text-[#10b981] transition-colors">
              [MATERIALS]
            </Link>
            <Link to="/size-guide" className="hover:text-[#10b981] transition-colors">
              [SIZE GUIDE]
            </Link>
            <Link to="/contact" className="hover:text-[#10b981] transition-colors">
              [CONTACT]
            </Link>
          </div>

          <button 
            onClick={() => setIsCartOpen(true)}
            className="border-2 border-black p-2 hover:bg-[#10b981] hover:text-white transition-colors relative"
          >
            <ShoppingCart className="w-6 h-6" />
            {cartCount > 0 && (
              <div className="absolute -top-3 -right-3 bg-black text-[#D4FF00] w-6 h-6 flex items-center justify-center font-['JetBrains_Mono'] font-bold text-xs border-2 border-[#D4FF00]">
                {cartCount}
              </div>
            )}
          </button>
        </div>
      </nav>

      {/* Hero Section with Dark Background */}
      <section className="relative pt-16 pb-24 border-b-4 border-black overflow-hidden bg-neutral-900">

        {/* Dot pattern overlay */}
        <div className="absolute inset-0 z-[1] bg-[radial-gradient(rgba(16,185,129,0.3)_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Content */}
            <div className="space-y-8 z-10">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-block bg-[#D4FF00] border-4 border-black px-4 py-2 transform -rotate-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
              >
                <span className="font-['JetBrains_Mono'] font-bold text-sm">✨ START WITH 500 UNITS</span>
              </motion.div>
              
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="font-black text-6xl md:text-8xl leading-[0.9] tracking-tighter uppercase text-white drop-shadow-[0_4px_8px_rgba(0,0,0,0.8)]"
              >
                Your Brand.<br/>
                Our Eco<br/>
                <span className="text-[#D4FF00]">Packaging.</span>
              </motion.h1>

              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="font-['JetBrains_Mono'] font-bold text-lg md:text-xl max-w-md bg-white border-4 border-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]"
              >
                → Compostable & Recyclable pouches<br/>
                → From just 500 units<br/>
                → 8 premium finishes<br/>
                → Fast 2-3 week turnaround<br/>
                → No hidden fees 💚
              </motion.p>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <NeoButton to="/store" variant="primary">
                  Shop Starter Kits
                </NeoButton>
                <NeoButton to="/contact" variant="secondary">
                  Get Free Sample
                </NeoButton>
              </motion.div>

              {/* Social Proof with group.png background */}
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="relative pt-8 mt-4 -mx-4 px-4 py-6 rounded-xl overflow-hidden"
                style={{
                  backgroundImage: 'url(/imgs/group/group.png)',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              >
                {/* Overlay for readability */}
                <div className="absolute inset-0 bg-black/60 backdrop-blur-[1px]" />
                
                <p className="text-center text-sm font-bold text-[#D4FF00] mb-4 relative z-10 uppercase tracking-wider">Trusted by Global Brands</p>
                
                <div className="grid grid-cols-4 gap-4 relative z-10">
                  {socialProof.map((item, idx) => (
                    <div key={idx} className="text-center bg-white/10 backdrop-blur-sm border-2 border-white/20 p-3 rounded-lg">
                      <div className="flex justify-center mb-2 text-[#D4FF00]">
                        {item.icon}
                      </div>
                      <div className="font-black text-xl text-white">{item.number}</div>
                      <div className="text-xs text-white/80 font-['JetBrains_Mono']">{item.label}</div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Right Visual */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="relative z-10 rotate-2 group">
                <div className="aspect-square flex items-center justify-center relative bg-black border-4 border-black">
                  <video 
                    src="/video/hero/bag.mov"
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                    poster="/imgs/hero/pouch-eco-cover.jpg"
                  />
                  {/* Floating Badges */}
                  <motion.div 
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-4 right-4 bg-white border-4 border-black px-3 py-2 font-['JetBrains_Mono'] text-sm font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] z-20"
                  >
                    ✓ COMPOSTABLE
                  </motion.div>
                  <motion.div 
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                    className="absolute bottom-4 left-4 bg-[#D4FF00] border-4 border-black px-3 py-2 font-['JetBrains_Mono'] text-sm font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] z-20"
                  >
                    FROM 500
                  </motion.div>
                </div>
              </div>
              
              {/* Decorative Background Elements */}
              <div className="absolute top-10 -right-10 w-full h-full border-4 border-black bg-[#D4FF00] -z-0 rotate-6" />
              <motion.div 
                animate={{ rotate: [0, 10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-10 -left-10 w-32 h-32 bg-[#00FFFF] border-4 border-black flex items-center justify-center"
              >
                <span className="font-black text-2xl rotate-[-15deg]">ECO!</span>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Product Photos Carousel */}
      <section className="py-24 px-4 md:px-6 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-block bg-black text-[#D4FF00] px-4 py-1 mb-6 font-['JetBrains_Mono'] font-bold transform -rotate-1">
            REAL PRODUCTS • REAL BRANDS
          </div>
          <h2 className="font-black text-5xl md:text-7xl uppercase mb-6">
            See Our <span className="text-[#10b981]">Work</span>
          </h2>
          <p className="font-['JetBrains_Mono'] text-lg max-w-2xl mx-auto text-gray-700">
            Browse through real product photos from brands we've helped launch and grow. 
            Your brand could be next.
          </p>
        </div>
        
        <ProductCarousel autoPlay autoPlayInterval={4000} />
      </section>

      {/* Features Bento Grid */}
      <section className="py-24 px-4 md:px-6 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <h2 className="font-black text-5xl md:text-7xl uppercase">
            Why Choose<br/>
            <span className="text-[#10b981]">Pouch.eco?</span>
          </h2>
          <div className="font-['JetBrains_Mono'] text-sm font-bold bg-[#D4FF00] border-4 border-black px-4 py-3 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            [SCROLL_TO_EXPLORE]
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <NeoCard className={`bg-neutral-50 h-full ${activeFeature === idx ? 'ring-4 ring-[#10b981]' : ''}`}>
                <div className="mb-4">{feature.icon}</div>
                <h3 className="font-black text-2xl mb-4 uppercase">{feature.title}</h3>
                <p className="font-['JetBrains_Mono'] text-sm leading-relaxed mb-6 text-gray-700">
                  {feature.description}
                </p>
                <NeoBadge>{feature.badge}</NeoBadge>
              </NeoCard>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Products Section */}
      <section className="py-24 px-4 md:px-6 max-w-7xl mx-auto border-t-4 border-black">
        <div className="text-center mb-16">
          <h2 className="font-black text-5xl md:text-7xl uppercase mb-6">
            Popular <span className="text-[#10b981]">Packages</span>
          </h2>
          <p className="font-['JetBrains_Mono'] text-lg max-w-2xl mx-auto">
            Choose the perfect starting point for your brand. All options include free samples and design consultation.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {products.map((product, idx) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group relative"
            >
              {/* Dual shadow effect */}
              <div className={`absolute inset-0 ${product.color} translate-x-4 translate-y-4 border-4 border-black transition-transform group-hover:translate-x-6 group-hover:translate-y-6`} />
              
              <div className="relative bg-white border-4 border-black p-6 h-full flex flex-col">
                {/* Product Image */}
                <div className="aspect-square mb-6 border-2 border-black overflow-hidden bg-neutral-50">
                  <img 
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-contain p-4 group-hover:scale-110 transition-transform duration-500"
                  />
                </div>

                {/* Product Info */}
                <div className="flex-1">
                  <div className="inline-block bg-[#D4FF00] border-2 border-black px-2 py-1 text-xs font-black uppercase mb-3">
                    {product.tagline}
                  </div>
                  <h3 className="font-black text-2xl mb-2 uppercase">{product.name}</h3>
                  <p className="font-['JetBrains_Mono'] text-sm text-gray-600 mb-4">
                    {product.description}
                  </p>

                  {/* Badges */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {product.badges.map((badge, i) => (
                      <NeoBadge key={i} color={i === 0 ? 'bg-[#10b981]' : 'bg-gray-800'}>
                        {badge}
                      </NeoBadge>
                    ))}
                  </div>

                  {/* Price & MOQ */}
                  <div className="space-y-2 mb-6 font-['JetBrains_Mono'] text-sm">
                    <div className="flex justify-between">
                      <span className="font-bold">Price:</span>
                      <span className="font-black text-[#10b981]">{product.price}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-bold">MOQ:</span>
                      <span className="font-black">{product.moq} units</span>
                    </div>
                  </div>
                </div>

                {/* CTA Button */}
                <NeoButton to={`/store`} variant="primary" className="w-full text-center">
                  Shop Now <ArrowRight className="inline w-4 h-4 ml-2" />
                </NeoButton>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 md:px-6 border-t-4 border-black bg-[#10b981] text-white">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="font-black text-5xl md:text-7xl uppercase">
            Ready to Start<br/>
            Your Eco Journey?
          </h2>
          <p className="font-['JetBrains_Mono'] text-xl">
            Join 1,200+ brands making a positive impact. Get your free sample kit today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <NeoButton to="/store" variant="yellow">
              Shop Starter Kits
            </NeoButton>
            <NeoButton to="/contact" variant="secondary">
              Book Free Consultation
            </NeoButton>
          </div>

          {/* Trust Badges */}
          <div className="flex flex-wrap justify-center gap-4 pt-8">
            <div className="bg-white text-black border-4 border-black px-4 py-2 font-black text-sm">
              ✓ BPI CERTIFIED
            </div>
            <div className="bg-white text-black border-4 border-black px-4 py-2 font-black text-sm">
              ✓ EN13432
            </div>
            <div className="bg-white text-black border-4 border-black px-4 py-2 font-black text-sm">
              ✓ ASTM D6400
            </div>
            <div className="bg-white text-black border-4 border-black px-4 py-2 font-black text-sm">
              ✓ FOOD SAFE
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 px-4 md:px-6 border-t-4 border-black">
        <div className="max-w-2xl mx-auto">
          <Newsletter />
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t-4 border-black bg-white py-12 px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-[#10b981] flex items-center justify-center border-2 border-black">
                  <Leaf className="text-white w-5 h-5" />
                </div>
                <span className="font-black text-xl">POUCH.ECO</span>
              </div>
              <p className="text-sm text-gray-600 font-['JetBrains_Mono']">
                Eco packaging for the next generation of sustainable brands.
              </p>
            </div>

            <div>
              <h4 className="font-black mb-4 uppercase">Shop</h4>
              <ul className="space-y-2 text-sm">
                <li><Link to="/store" className="hover:text-[#10b981]">All Products</Link></li>
                <li><Link to="/materials" className="hover:text-[#10b981]">Materials</Link></li>
                <li><Link to="/size-guide" className="hover:text-[#10b981]">Size Guide</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-black mb-4 uppercase">Learn</h4>
              <ul className="space-y-2 text-sm">
                <li><Link to="/about" className="hover:text-[#10b981]">About Us</Link></li>
                <li><Link to="/blog" className="hover:text-[#10b981]">Blog</Link></li>
                <li><Link to="/testimonials" className="hover:text-[#10b981]">Testimonials</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-black mb-4 uppercase">Contact</h4>
              <ul className="space-y-2 text-sm text-gray-600 font-['JetBrains_Mono']">
                <li>{brand.email}</li>
                <li>{brand.phone}</li>
                <li>Mon-Fri 9am-6pm PST</li>
              </ul>
            </div>
          </div>

          <div className="border-t-2 border-black pt-8 text-center text-sm text-gray-600 font-['JetBrains_Mono']">
            © 2026 {brand.name}. All rights reserved. Made with 💚 for the planet.
          </div>
        </div>
      </footer>
    </div>
  )
}
