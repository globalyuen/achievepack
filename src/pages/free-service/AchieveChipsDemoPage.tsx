import React, { useState, useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { ShoppingCart, Menu, X, ArrowLeft, ArrowRight, Check, Leaf, Recycle, ShieldCheck, Award, MapPin, Phone, Mail, Facebook, Instagram, Twitter, ExternalLink, ChevronDown, Star, Users, Globe } from 'lucide-react'

// CSS Variables for easy customization
const cssVariables = `
  :root {
    --humble-primary: #8B2635;
    --humble-primary-dark: #6B1E29;
    --humble-accent: #D4A574;
    --humble-accent-light: #E8C9A8;
    --humble-bg-dark: #1A0F0F;
    --humble-bg-warm: #2D1A1A;
    --humble-text: #F5F0EB;
    --humble-text-muted: #C4B8AB;
  }
`

// High-quality product images from demo-site/chips
const CHIPS_IMAGES = {
  logo: '/imgs/demo-site/chips/a_achieve_eco_organic_logo_v3_4396707.webp',
  chiliLime1: '/imgs/demo-site/chips/a_achievepack_chili_lime_chips_6256919 (1).webp',
  chiliLime2: '/imgs/demo-site/chips/a_achievepack_chili_lime_chips_6256919 (2).webp',
  herbGarlic: '/imgs/demo-site/chips/a_achievepack_herb_garlic_chips_4271307 (1).webp'
}

// Product data
const PRODUCTS = {
  featured: {
    id: 'smokey-bbq',
    name: 'Smokey BBQ',
    fullName: 'humble Organic Potato Chips - Smokey BBQ',
    description: 'Experience the authentic taste of slow-smoked barbecue with our premium organic potato chips. Crafted with real spices and natural smoke flavor, every crispy bite delivers a perfect balance of sweet, tangy, and smoky goodness.',
    price: 5.99,
    weight: '142g / 5oz',
    image: CHIPS_IMAGES.chiliLime1,
    badges: ['Organic', 'Non-GMO', 'Compostable Bag'],
    color: '#8B2635'
  },
  related: [
    {
      id: 'chili-lime',
      name: 'Chili Lime',
      price: 5.99,
      image: CHIPS_IMAGES.chiliLime2,
      color: '#C75B39'
    },
    {
      id: 'herb-garlic',
      name: 'Herb & Garlic',
      price: 5.99,
      image: CHIPS_IMAGES.herbGarlic,
      color: '#5B8C5A'
    },
    {
      id: 'sea-salt',
      name: 'Sea Salt',
      price: 4.99,
      image: CHIPS_IMAGES.chiliLime1,
      color: '#4A7C9B'
    },
    {
      id: 'sour-cream',
      name: 'Sour Cream & Onion',
      price: 5.99,
      image: CHIPS_IMAGES.chiliLime2,
      color: '#7B6B8D'
    }
  ]
}

// Nutrition facts
const NUTRITION = {
  servingSize: '28g (about 15 chips)',
  servingsPerContainer: 'About 5',
  calories: 140,
  facts: [
    { name: 'Total Fat', amount: '8g', dv: '10%' },
    { name: 'Saturated Fat', amount: '1g', dv: '5%', indent: true },
    { name: 'Trans Fat', amount: '0g', dv: '', indent: true },
    { name: 'Cholesterol', amount: '0mg', dv: '0%' },
    { name: 'Sodium', amount: '170mg', dv: '7%' },
    { name: 'Total Carbohydrate', amount: '16g', dv: '6%' },
    { name: 'Dietary Fiber', amount: '1g', dv: '4%', indent: true },
    { name: 'Total Sugars', amount: '1g', dv: '', indent: true },
    { name: 'Protein', amount: '2g', dv: '4%' }
  ],
  ingredients: 'Organic Potatoes, Organic Sunflower Oil, Organic Cane Sugar, Salt, Organic Paprika, Organic Onion Powder, Organic Garlic Powder, Natural Smoke Flavor, Organic Spices.'
}

export default function AchieveChipsDemoPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [cartCount, setCartCount] = useState(0)
  const [isNutritionOpen, setIsNutritionOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-[#1A0F0F] text-[#F5F0EB] font-sans">
      <Helmet>
        <title>humble Organic Potato Chips - Smokey BBQ | Premium Artisan Snacks</title>
        <meta name="description" content="Discover humble organic potato chips in Smokey BBQ flavor. Made with certified organic ingredients, non-GMO, and packaged in BPI certified compostable bags. Premium taste, sustainable choice." />
        <meta name="keywords" content="organic potato chips, smokey bbq chips, compostable packaging, non-GMO snacks, sustainable chips, humble chips" />
        <style>{cssVariables}</style>
        <style>{`
          @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&family=Playfair+Display:wght@700&display=swap');
          .font-display { font-family: 'Playfair Display', serif; }
          .font-body { font-family: 'DM Sans', sans-serif; }
        `}</style>
      </Helmet>

      {/* Achieve Pack Return Banner */}
      <div className="fixed top-0 left-0 right-0 z-[60] bg-primary-600 text-white py-2 px-4">
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
      <nav className={`fixed top-[40px] w-full z-50 transition-all duration-500 ${scrolled ? 'bg-[#1A0F0F]/95 backdrop-blur-xl border-b border-white/5 py-3' : 'bg-transparent py-5'}`}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="flex flex-col leading-none">
                <span className="text-3xl font-display font-bold tracking-tight text-[#D4A574]">humble</span>
                <span className="text-[10px] font-body font-medium tracking-[0.3em] uppercase text-[#C4B8AB]">potato chips</span>
              </div>
            </div>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center space-x-8">
              {['Products', 'Our Story', 'Sustainability', 'Where to Buy', 'Contact'].map((item) => (
                <a key={item} href="#" className="text-sm font-body font-medium tracking-wide hover:text-[#D4A574] transition-colors">
                  {item}
                </a>
              ))}
              <div className="h-5 w-px bg-white/20 mx-2"></div>
              <button className="relative p-2 hover:text-[#D4A574] transition-colors">
                <ShoppingCart className="w-5 h-5" />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 w-4 h-4 bg-[#D4A574] text-[#1A0F0F] rounded-full text-[10px] font-bold flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </button>
            </div>

            {/* Mobile Nav Toggle */}
            <div className="md:hidden flex items-center gap-4">
              <button className="relative p-2"><ShoppingCart className="w-5 h-5" /></button>
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-1">
                {isMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section - Single Product Focus */}
      <section className="relative min-h-screen pt-32 pb-20 overflow-hidden">
        {/* Background with warm gradient and subtle pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#8B2635] via-[#6B1E29] to-[#1A0F0F]">
          {/* Subtle wavy pattern overlay */}
          <div className="absolute inset-0 opacity-10">
            <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
              <defs>
                <pattern id="waves" x="0" y="0" width="50" height="50" patternUnits="userSpaceOnUse">
                  <path d="M0 25 Q 12.5 0, 25 25 T 50 25" fill="none" stroke="currentColor" strokeWidth="0.5" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#waves)" />
            </svg>
          </div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Product Image - Large and Centered */}
            <div className="relative flex justify-center order-1 lg:order-2">
              <div className="relative w-full max-w-lg">
                {/* Glow effect behind product */}
                <div className="absolute inset-0 bg-[#D4A574]/20 blur-[80px] rounded-full scale-75"></div>
                
                {/* Main product image */}
                <div className="relative aspect-[3/4] flex items-center justify-center">
                  <img 
                    src={PRODUCTS.featured.image} 
                    alt={PRODUCTS.featured.fullName}
                    className="w-full h-full object-contain drop-shadow-[0_30px_60px_rgba(0,0,0,0.5)] transform hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Floating chips decoration */}
                <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-[120%] h-24 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1A0F0F] to-transparent"></div>
                </div>
              </div>
            </div>

            {/* Product Info */}
            <div className="order-2 lg:order-1 text-center lg:text-left">
              {/* Brand tag */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm mb-6">
                <Leaf className="w-4 h-4 text-green-400" />
                <span className="text-sm font-medium">Certified Organic</span>
              </div>

              {/* Product name */}
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-display font-bold leading-[0.95] mb-6">
                <span className="text-[#D4A574]">humble</span>
                <br />
                <span className="text-white">Organic Potato Chips</span>
                <br />
                <span className="text-[#E8C9A8] italic">{PRODUCTS.featured.name}</span>
              </h1>

              {/* Description */}
              <p className="text-lg text-[#C4B8AB] max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed font-body">
                {PRODUCTS.featured.description}
              </p>

              {/* Badges */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-3 mb-8">
                {PRODUCTS.featured.badges.map((badge, i) => (
                  <span key={i} className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#D4A574]/30 bg-[#D4A574]/10 text-sm font-medium">
                    <Check className="w-4 h-4 text-green-400" />
                    {badge}
                  </span>
                ))}
              </div>

              {/* Price and CTA */}
              <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
                <div className="text-3xl font-display font-bold text-[#D4A574]">
                  ${PRODUCTS.featured.price.toFixed(2)}
                  <span className="text-sm font-body font-normal text-[#C4B8AB] ml-2">{PRODUCTS.featured.weight}</span>
                </div>
                <button 
                  onClick={() => setCartCount(c => c + 1)}
                  className="px-8 py-4 bg-[#D4A574] text-[#1A0F0F] rounded-full font-body font-bold text-sm tracking-wide uppercase hover:bg-[#E8C9A8] transition-all transform hover:scale-105 shadow-xl shadow-[#D4A574]/20"
                >
                  Add to Cart
                </button>
                <button className="px-8 py-4 border-2 border-white/30 text-white rounded-full font-body font-bold text-sm tracking-wide uppercase hover:bg-white/10 transition-all">
                  Find in Store
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
          <span className="text-xs font-body text-[#C4B8AB] uppercase tracking-widest">Scroll</span>
          <ChevronDown className="w-5 h-5 text-[#D4A574]" />
        </div>
      </section>

      {/* Nutrition & Ingredients Section */}
      <section className="py-20 bg-[#2D1A1A]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Nutrition Facts Card */}
            <div className="bg-white text-[#1A0F0F] rounded-3xl p-8 shadow-2xl">
              <h2 className="text-2xl font-display font-bold mb-6 text-center border-b-4 border-[#1A0F0F] pb-2">Nutrition Facts</h2>
              
              <div className="space-y-1 text-sm font-body">
                <div className="flex justify-between py-1">
                  <span className="font-bold">Serving Size</span>
                  <span>{NUTRITION.servingSize}</span>
                </div>
                <div className="flex justify-between py-1 border-b-8 border-[#1A0F0F]">
                  <span className="font-bold">Servings Per Container</span>
                  <span>{NUTRITION.servingsPerContainer}</span>
                </div>
                
                <div className="py-2 border-b border-gray-300">
                  <div className="text-3xl font-bold">Calories <span className="float-right">{NUTRITION.calories}</span></div>
                </div>
                
                <div className="text-right text-xs py-1 border-b border-gray-300">
                  % Daily Value*
                </div>
                
                {NUTRITION.facts.map((fact, i) => (
                  <div key={i} className={`flex justify-between py-1 border-b border-gray-200 ${fact.indent ? 'pl-6' : ''}`}>
                    <span className={fact.indent ? '' : 'font-bold'}>{fact.name} {fact.amount}</span>
                    <span className="font-bold">{fact.dv}</span>
                  </div>
                ))}
                
                <p className="text-xs text-gray-600 pt-4">
                  * The % Daily Value tells you how much a nutrient in a serving of food contributes to a daily diet. 2,000 calories a day is used for general nutrition advice.
                </p>
              </div>
            </div>

            {/* Ingredients */}
            <div className="flex flex-col justify-center">
              <h2 className="text-3xl font-display font-bold mb-6 text-[#D4A574]">Pure Ingredients</h2>
              <p className="text-lg text-[#C4B8AB] leading-relaxed mb-8 font-body">
                We believe in transparency. Every ingredient in our chips is carefully selected for quality and sustainability. No artificial flavors, no preservatives - just honest, organic goodness.
              </p>
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                <h3 className="text-sm font-bold uppercase tracking-wider text-[#D4A574] mb-3">Ingredients</h3>
                <p className="text-[#C4B8AB] font-body leading-relaxed">{NUTRITION.ingredients}</p>
              </div>
              
              <div className="mt-8 flex flex-wrap gap-4">
                <div className="flex items-center gap-2 text-sm text-[#C4B8AB]">
                  <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center">
                    <Leaf className="w-5 h-5 text-green-400" />
                  </div>
                  <span>USDA Organic</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-[#C4B8AB]">
                  <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center">
                    <ShieldCheck className="w-5 h-5 text-blue-400" />
                  </div>
                  <span>Non-GMO Verified</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-[#C4B8AB]">
                  <div className="w-10 h-10 rounded-full bg-amber-500/20 flex items-center justify-center">
                    <Check className="w-5 h-5 text-amber-400" />
                  </div>
                  <span>Gluten-Free</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Compostable Packaging Section */}
      <section className="py-24 bg-gradient-to-b from-[#1A0F0F] to-[#0F1A0F]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <span className="h-[2px] w-12 bg-green-500"></span>
                <span className="text-green-400 font-bold tracking-[0.3em] uppercase text-xs font-body">Sustainability First</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-8 leading-tight">
                100% Compostable<br/>
                <span className="text-green-400">Packaging</span>
              </h2>
              
              <p className="text-xl text-[#C4B8AB] mb-8 leading-relaxed font-body">
                Every humble chips bag is designed to return to the earth. Our certified compostable packaging breaks down in commercial composting facilities within 180 days, leaving no microplastics behind.
              </p>
              
              <div className="space-y-5 mb-10">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0">
                    <Check className="w-6 h-6 text-green-400" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-lg font-body">BPI Certified Compostable</h4>
                    <p className="text-[#C4B8AB] font-body">Meets rigorous ASTM D6400 standards for industrial composting</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0">
                    <Check className="w-6 h-6 text-green-400" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-lg font-body">Plant-Based Materials</h4>
                    <p className="text-[#C4B8AB] font-body">Made from renewable resources including PLA and cellulose</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0">
                    <Check className="w-6 h-6 text-green-400" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-lg font-body">Zero Plastic Waste</h4>
                    <p className="text-[#C4B8AB] font-body">Returns to earth as nutrient-rich compost, not harmful microplastics</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                <p className="text-[#C4B8AB] text-sm mb-4 font-body">Our eco-friendly packaging is proudly supplied by Achieve Pack, specialists in sustainable food packaging.</p>
                <div className="flex flex-wrap gap-4">
                  <Link to="/materials/compostable" className="inline-flex items-center gap-2 text-sm font-semibold text-green-400 hover:text-green-300 transition font-body">
                    Learn About Compostable Materials <ExternalLink className="w-4 h-4" />
                  </Link>
                  <Link to="/industry/snacks-food" className="inline-flex items-center gap-2 text-sm font-semibold text-[#D4A574] hover:text-white transition font-body">
                    Snack Food Packaging <ExternalLink className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img src={CHIPS_IMAGES.herbGarlic} alt="Compostable Chip Bag Packaging" className="w-full h-auto" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>
              <div className="absolute -bottom-6 -right-6 bg-green-500 text-white p-6 rounded-2xl shadow-xl">
                <div className="text-3xl font-display font-bold">180</div>
                <div className="text-xs font-bold uppercase tracking-wider font-body">Days to Compost</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Products Section */}
      <section className="py-24 bg-[#1A0F0F]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">Explore More Flavors</h2>
            <p className="text-lg text-[#C4B8AB] max-w-2xl mx-auto font-body">Each flavor crafted with the same commitment to organic ingredients and sustainable packaging</p>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {PRODUCTS.related.map((product) => (
              <div key={product.id} className="group relative bg-gradient-to-b from-white/5 to-transparent rounded-2xl p-6 hover:bg-white/10 transition-all cursor-pointer">
                <div className="aspect-[3/4] mb-4 relative overflow-hidden rounded-xl">
                  <div className="absolute inset-0 bg-gradient-to-br" style={{ backgroundColor: product.color + '20' }}></div>
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-contain transform group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <h3 className="text-lg font-display font-bold mb-1">{product.name}</h3>
                <p className="text-[#D4A574] font-body font-medium">${product.price.toFixed(2)}</p>
                <button 
                  onClick={() => setCartCount(c => c + 1)}
                  className="mt-4 w-full py-2 bg-white/10 hover:bg-[#D4A574] hover:text-[#1A0F0F] rounded-full text-sm font-medium transition-all font-body"
                >
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story / E-E-A-T Section */}
      <section className="py-24 bg-[#F5F0EB] text-[#1A0F0F]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <img src={CHIPS_IMAGES.logo} alt="humble Chips Founder" className="w-full rounded-3xl shadow-2xl" />
            </div>
            
            <div>
              <div className="flex items-center gap-3 mb-6">
                <span className="h-[2px] w-12 bg-[#8B2635]"></span>
                <span className="text-[#8B2635] font-bold tracking-[0.3em] uppercase text-xs font-body">Our Story</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-8 leading-tight text-[#1A0F0F]">
                A Family Tradition<br/>
                <span className="text-[#8B2635]">Reimagined</span>
              </h2>
              
              <p className="text-xl text-[#1A0F0F]/70 mb-6 leading-relaxed font-body italic">
                "We started humble with a simple belief: snacks should be honest. No hidden ingredients, no environmental shortcuts - just real food in packaging that gives back to the earth."
              </p>
              
              <p className="text-lg text-[#1A0F0F]/70 mb-8 leading-relaxed font-body">
                Founded in 2018 by a family of farmers and food scientists, humble chips combines 20+ years of agricultural expertise with cutting-edge sustainable packaging technology. Every bag represents our commitment to taste, health, and planet.
              </p>
              
              <div className="grid grid-cols-3 gap-6">
                <div className="text-center p-4 bg-white rounded-xl shadow-md">
                  <div className="text-3xl font-display font-bold text-[#8B2635]">20+</div>
                  <div className="text-xs text-[#1A0F0F]/60 uppercase tracking-wider font-body">Years Experience</div>
                </div>
                <div className="text-center p-4 bg-white rounded-xl shadow-md">
                  <div className="text-3xl font-display font-bold text-[#8B2635]">100%</div>
                  <div className="text-xs text-[#1A0F0F]/60 uppercase tracking-wider font-body">Organic</div>
                </div>
                <div className="text-center p-4 bg-white rounded-xl shadow-md">
                  <div className="text-3xl font-display font-bold text-[#8B2635]">0</div>
                  <div className="text-xs text-[#1A0F0F]/60 uppercase tracking-wider font-body">Preservatives</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quality Certifications - E-E-A-T */}
      <section className="py-20 bg-[#2D1A1A]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-display font-bold mb-4">Certified Quality</h2>
            <p className="text-[#C4B8AB] max-w-2xl mx-auto font-body">Our products meet the highest standards for organic certification, food safety, and sustainable packaging.</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-white/5 rounded-2xl p-6 text-center border border-white/10">
              <Award className="w-10 h-10 text-[#D4A574] mx-auto mb-4" />
              <h3 className="font-bold mb-2 font-body">USDA Organic</h3>
              <p className="text-[#C4B8AB] text-sm font-body">Certified organic ingredients</p>
            </div>
            <div className="bg-white/5 rounded-2xl p-6 text-center border border-white/10">
              <ShieldCheck className="w-10 h-10 text-[#D4A574] mx-auto mb-4" />
              <h3 className="font-bold mb-2 font-body">Non-GMO Project</h3>
              <p className="text-[#C4B8AB] text-sm font-body">Verified non-GMO</p>
            </div>
            <div className="bg-white/5 rounded-2xl p-6 text-center border border-white/10">
              <Recycle className="w-10 h-10 text-green-400 mx-auto mb-4" />
              <h3 className="font-bold mb-2 font-body">BPI Certified</h3>
              <p className="text-[#C4B8AB] text-sm font-body">Compostable packaging</p>
            </div>
            <div className="bg-white/5 rounded-2xl p-6 text-center border border-white/10">
              <Globe className="w-10 h-10 text-[#D4A574] mx-auto mb-4" />
              <h3 className="font-bold mb-2 font-body">Carbon Neutral</h3>
              <p className="text-[#C4B8AB] text-sm font-body">Offset operations</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0F0808] pt-20 pb-10 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-12 mb-16">
            <div className="lg:col-span-4">
              <div className="flex flex-col leading-none mb-6">
                <span className="text-3xl font-display font-bold text-[#D4A574]">humble</span>
                <span className="text-[10px] font-body font-medium tracking-[0.3em] uppercase text-[#C4B8AB]">potato chips</span>
              </div>
              <p className="text-[#C4B8AB] max-w-sm leading-relaxed mb-6 font-body">
                Premium organic potato chips crafted with care, packaged sustainably. Because great taste and environmental responsibility go hand in hand.
              </p>
              <div className="flex gap-4">
                {[Facebook, Instagram, Twitter].map((Icon, i) => (
                  <a key={i} href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#D4A574] hover:text-[#1A0F0F] transition-all border border-white/10">
                    <Icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
            
            <div className="lg:col-span-2">
              <h4 className="font-bold tracking-wider uppercase text-xs text-[#D4A574] mb-6 font-body">Shop</h4>
              <ul className="space-y-3 text-[#C4B8AB] text-sm font-body">
                <li><a href="#" className="hover:text-white transition">All Products</a></li>
                <li><a href="#" className="hover:text-white transition">Smokey BBQ</a></li>
                <li><a href="#" className="hover:text-white transition">Chili Lime</a></li>
                <li><a href="#" className="hover:text-white transition">Variety Packs</a></li>
              </ul>
            </div>
            
            <div className="lg:col-span-2">
              <h4 className="font-bold tracking-wider uppercase text-xs text-[#D4A574] mb-6 font-body">Company</h4>
              <ul className="space-y-3 text-[#C4B8AB] text-sm font-body">
                <li><a href="#" className="hover:text-white transition">Our Story</a></li>
                <li><a href="#" className="hover:text-white transition">Sustainability</a></li>
                <li><a href="#" className="hover:text-white transition">Careers</a></li>
                <li><a href="#" className="hover:text-white transition">Press</a></li>
              </ul>
            </div>
            
            <div className="lg:col-span-2">
              <h4 className="font-bold tracking-wider uppercase text-xs text-[#D4A574] mb-6 font-body">Help</h4>
              <ul className="space-y-3 text-[#C4B8AB] text-sm font-body">
                <li><a href="#" className="hover:text-white transition">FAQs</a></li>
                <li><a href="#" className="hover:text-white transition">Shipping</a></li>
                <li><a href="#" className="hover:text-white transition">Returns</a></li>
                <li><a href="#" className="hover:text-white transition">Contact</a></li>
              </ul>
            </div>
            
            <div className="lg:col-span-2">
              <h4 className="font-bold tracking-wider uppercase text-xs text-[#D4A574] mb-6 font-body">Contact</h4>
              <div className="space-y-3 text-[#C4B8AB] text-sm font-body">
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-[#C4B8AB]/50" />
                  <span>hello@humblechips.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-[#C4B8AB]/50" />
                  <span>1-800-HUMBLE</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-white/5 pt-8 mb-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-[#C4B8AB]/50 text-xs font-body">
              <div className="flex items-center gap-2">
                <Recycle className="w-4 h-4 text-green-500" />
                <span>Sustainable packaging proudly supplied by</span>
                <Link to="/" className="text-[#D4A574] hover:text-white transition font-semibold">Achieve Pack</Link>
              </div>
              <div className="flex items-center gap-4">
                <Link to="/materials/compostable" className="hover:text-white transition">Compostable Options</Link>
                <span>|</span>
                <Link to="/packaging/stand-up-pouches" className="hover:text-white transition">Stand Up Pouches</Link>
                <span>|</span>
                <Link to="/industry/snacks-food" className="hover:text-white transition">Snack Packaging</Link>
              </div>
            </div>
          </div>
          
          <div className="text-center text-[#C4B8AB]/30 text-[10px] uppercase tracking-widest font-body">
            <p>2024 humble Chips Co. All rights reserved. Organic, Sustainable, Delicious.</p>
          </div>
        </div>
      </footer>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-[100] bg-[#1A0F0F] p-8 flex flex-col">
          <div className="flex justify-between items-center mb-12">
            <div className="flex flex-col leading-none">
              <span className="text-2xl font-display font-bold text-[#D4A574]">humble</span>
              <span className="text-[8px] font-body font-medium tracking-[0.2em] uppercase text-[#C4B8AB]">potato chips</span>
            </div>
            <button onClick={() => setIsMenuOpen(false)}>
              <X className="w-8 h-8" />
            </button>
          </div>
          <div className="flex flex-col gap-6">
            {['Products', 'Our Story', 'Sustainability', 'Where to Buy', 'Contact'].map((item) => (
              <a key={item} href="#" className="text-3xl font-display font-bold hover:text-[#D4A574] transition">
                {item}
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
