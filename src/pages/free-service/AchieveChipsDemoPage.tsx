import React, { useState, useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { ShoppingCart, Menu, X, ArrowLeft, ArrowRight, Check, Leaf, Recycle, ShieldCheck, Award, MapPin, Phone, Mail, Facebook, Instagram, Twitter, ExternalLink, ChevronDown, Globe, Play, Star } from 'lucide-react'

/**
 * AI-Enhanced Image Metadata - Generated from xAI Grok-2 Vision Analysis
 * Each image includes SEO-optimized alt text, keywords, and usage recommendations
 */
const CHIPS_IMAGES = {
  // Brand & Logo - recommended for: header, hero section, footer, product packaging
  logo: {
    src: '/imgs/demo-site/chips/chips-logo.webp',
    alt: 'Achieve Eco Organic green leaf brand logo - sustainable organic food brand identity',
    title: 'Achieve Eco Organic Brand Logo',
    type: 'logo'
  },
  
  // Product Photos - Chili Lime (Primary Flavor)
  chiliLime: {
    product1: {
      src: '/imgs/demo-site/chips/png a_achievepack_chili_lime_chips_6256919 (1).webp',
      alt: 'Fiery Chili Lime tortilla chips transparent PNG - coral compostable bag cutout for flexible design placement',
      title: 'Fiery Chili Lime Chips - Transparent PNG',
      type: 'cutout'
    },
    product2: {
      src: '/imgs/demo-site/chips/a_achievepack_chili_lime_chips_6256919.webp',
      alt: 'Achieve Eco Fiery Chili Lime tortilla chips coral compostable bag with chili peppers lime - bold spicy gluten-free non-GMO organic snack',
      title: 'Fiery Chili Lime Tortilla Chips Package',
      type: 'product'
    },
    heroKV: {
      src: '/imgs/demo-site/chips/a_achievepack_fiery_chili_lime_hero_kv_4003688.webp',
      alt: 'Fiery Chili Lime tortilla chips hero key visual - dynamic product shot with flying chips chili peppers lime burst',
      title: 'Fiery Chili Lime Hero Key Visual',
      type: 'hero'
    },
    flavor1: {
      src: '/imgs/demo-site/chips/a_achievepack_fiery_chili_lime_flavor_6095462.webp',
      alt: 'Fiery Chili Lime chips with fresh chili peppers lime wedges cilantro - spicy flavor lifestyle scene',
      title: 'Fiery Chili Lime Chips Flavor Scene',
      type: 'scene'
    },
    flavor2: {
      src: '/imgs/demo-site/chips/a_achievepack_fiery_chili_lime_flavor_7320560.webp',
      alt: 'Chili Lime tortilla chips overhead with fresh lime slices red chilies herbs - appetizing snack display',
      title: 'Chili Lime Chips with Fresh Ingredients Display',
      type: 'scene'
    },
    flavor3: {
      src: '/imgs/demo-site/chips/a_achievepack_fiery_chili_lime_flavor_7414560.webp',
      alt: 'Chili Lime chips serving suggestion with salsa and fresh garnishes - party snack presentation',
      title: 'Chili Lime Chips Serving Suggestion',
      type: 'scene'
    }
  },
  
  // Product Photos - Herb Garlic
  herbGarlic: {
    product1: {
      src: '/imgs/demo-site/chips/png a_achievepack_herb_garlic_chips_4271307 (1).webp',
      alt: 'Herb Garlic tortilla chips transparent PNG - sage green compostable bag cutout for flexible design placement',
      title: 'Herb & Garlic Chips - Transparent PNG',
      type: 'cutout'
    },
    product2: {
      src: '/imgs/demo-site/chips/a_achievepack_herb_garlic_chips_4271307.webp',
      alt: 'Achieve Eco Herb Garlic tortilla chips sage green compostable bag with rosemary thyme garlic - savory aromatic gluten-free organic snack',
      title: 'Herb & Garlic Tortilla Chips Package',
      type: 'product'
    },
    heroKV: {
      src: '/imgs/demo-site/chips/a_achievepack_hero_kv_herb_garlic_2110657.webp',
      alt: 'Herb Garlic tortilla chips hero key visual - dynamic product shot with flying chips fresh herbs garlic',
      title: 'Herb & Garlic Hero Key Visual',
      type: 'hero'
    },
    flavor: {
      src: '/imgs/demo-site/chips/a_achievepack_herb_garlic_flavor_5832827.webp',
      alt: 'Herb Garlic chips with fresh rosemary thyme garlic bulbs - savory flavor lifestyle scene on rustic wood',
      title: 'Herb & Garlic Chips Fresh Ingredients Scene',
      type: 'scene'
    }
  },
  
  // Product Photos - Sea Salt & Vinegar
  seaSaltVinegar: {
    product: {
      src: '/imgs/demo-site/chips/png a_achievepack_sea salt_chips_6256919 (2).webp',
      alt: 'Sea Salt Vinegar tortilla chips transparent PNG - ocean blue compostable bag cutout for flexible design placement',
      title: 'Sea Salt & Vinegar Chips - Transparent PNG',
      type: 'cutout'
    },
    heroKV: {
      src: '/imgs/demo-site/chips/a_achievepack_sea_salt_vinegar_hero_kv_6506902.webp',
      alt: 'Sea Salt Vinegar tortilla chips hero key visual - dynamic product shot with flying chips salt crystals splash',
      title: 'Sea Salt & Vinegar Hero Key Visual',
      type: 'hero'
    },
    flavor1: {
      src: '/imgs/demo-site/chips/a_achievepack_sea_salt_vinegar_flavor_2559705.webp',
      alt: 'Sea Salt Vinegar chips with salt crystals vinegar bottle - tangy classic flavor scene cool blue tones',
      title: 'Sea Salt & Vinegar Flavor Scene',
      type: 'scene'
    },
    flavor2: {
      src: '/imgs/demo-site/chips/a_achievepack_sea_salt_vinegar_flavor_4956454.webp',
      alt: 'Sea Salt Vinegar chips serving scene with drinks and snack pairings - entertaining lifestyle shot',
      title: 'Sea Salt & Vinegar Chips Serving Scene',
      type: 'scene'
    }
  },
  
  // Detail & Texture Shots - recommended for: quality section, background texture, about product
  details: {
    crispness: {
      src: '/imgs/demo-site/chips/a_achievepack_chip_detail_crispness_4865766.webp',
      alt: 'Tortilla chip crispness macro close-up showing golden texture and quality - artisanal corn chip detail',
      title: 'Tortilla Chip Crispness Close-Up Detail',
      type: 'detail'
    },
    texture: {
      src: '/imgs/demo-site/chips/a_achievepack_chips_texture_closeup_0138482.webp',
      alt: 'Artisanal tortilla chips texture close-up showing handcrafted quality and golden roasted finish',
      title: 'Artisanal Tortilla Chips Texture Close-Up',
      type: 'detail'
    },
    packageTexture: {
      src: '/imgs/demo-site/chips/a_achievepack_detail_package_texture_9710514.webp',
      alt: 'Compostable packaging material texture close-up - kraft paper eco-friendly sustainable packaging surface',
      title: 'Compostable Package Material Texture Detail',
      type: 'detail'
    },
    packagingCloseup: {
      src: '/imgs/demo-site/chips/a_achievepack_packaging_detail_closeup_9071897.webp',
      alt: 'Compostable chip packaging close-up showing eco-friendly certification and sustainable material texture',
      title: 'Compostable Packaging Detail Close-Up',
      type: 'detail'
    }
  },
  
  // Lifestyle & Brand Story - recommended for: about section, brand story, lifestyle gallery
  lifestyle: {
    premium: {
      src: '/imgs/demo-site/chips/a_achievepack_lifestyle_premium_enjoyment_0668152.webp',
      alt: 'Premium tortilla chips lifestyle enjoyment - person snacking in relaxed home setting warm lighting',
      title: 'Premium Chips Lifestyle Enjoyment Scene',
      type: 'scene'
    },
    scene: {
      src: '/imgs/demo-site/chips/a_achievepack_lifestyle_scene_7839522.webp',
      alt: 'Friends enjoying tortilla chips at social gathering - party snacking lifestyle community moment',
      title: 'Social Gathering Chips Lifestyle Scene',
      type: 'scene'
    }
  },
  
  // Ingredients & Origin Story - recommended for: ingredient story, about section, sourcing transparency
  story: {
    rawPotato: {
      src: '/imgs/demo-site/chips/a_achievepack_raw_material_story_potato_8563355.webp',
      alt: 'Organic corn raw material for tortilla chips - fresh corn cobs farm to chip ingredient story',
      title: 'Organic Corn Raw Material Story',
      type: 'scene'
    }
  },
  
  // Sustainability - recommended for: sustainability section, eco credentials, packaging info
  sustainability: {
    compostable: {
      src: '/imgs/demo-site/chips/a_achievepack_sustainability_composable_4433734.webp',
      alt: 'Compostable packaging sustainability - lifecycle from package to compost earth-friendly decomposition',
      title: 'Compostable Packaging Sustainability Feature',
      type: 'infographic'
    },
    ecoValues: {
      src: '/imgs/demo-site/chips/a_achievepack_sustainability_eco_values_1081822.webp',
      alt: 'Eco values sustainability messaging - organic compostable carbon-neutral brand commitments',
      title: 'Eco Values Sustainability Messaging',
      type: 'infographic'
    }
  }
}

// SEO Keywords from AI Analysis
const SEO_KEYWORDS = [
  'organic tortilla chips', 'compostable packaging', 'gluten-free chips',
  'non-GMO snacks', 'chili lime chips', 'herb garlic chips', 'sea salt vinegar chips',
  'sustainable snacks', 'eco-friendly packaging', 'BPI certified compostable',
  'plant-based packaging', 'artisanal chips', 'premium organic snacks'
]

// Product Catalog - Enhanced with AI metadata
const PRODUCTS = [
  {
    id: 'fiery-chili-lime',
    name: 'Fiery Chili Lime',
    tagline: 'Bold heat meets zesty citrus',
    description: 'Our signature flavor combines authentic chili spices with bright lime zest. Each chip delivers a perfect balance of heat, tangy citrus, and satisfying crunch.',
    price: 5.99,
    weight: '142g / 5oz',
    image: CHIPS_IMAGES.chiliLime.product1.src,
    imageAlt: CHIPS_IMAGES.chiliLime.product1.alt,
    heroImage: CHIPS_IMAGES.chiliLime.heroKV.src,
    heroImageAlt: CHIPS_IMAGES.chiliLime.heroKV.alt,
    flavorImages: [
      { src: CHIPS_IMAGES.chiliLime.flavor1.src, alt: CHIPS_IMAGES.chiliLime.flavor1.alt },
      { src: CHIPS_IMAGES.chiliLime.flavor2.src, alt: CHIPS_IMAGES.chiliLime.flavor2.alt },
      { src: CHIPS_IMAGES.chiliLime.flavor3.src, alt: CHIPS_IMAGES.chiliLime.flavor3.alt }
    ],
    color: '#C75B39',
    badges: ['Organic', 'Vegan', 'Compostable Bag'],
    keywords: ['chili lime chips', 'tortilla chips', 'spicy snack', 'compostable packaging', 'gluten-free', 'non-GMO', 'organic chips']
  },
  {
    id: 'herb-garlic',
    name: 'Herb & Garlic',
    tagline: 'Garden fresh herbs, roasted garlic',
    description: 'A sophisticated blend of Mediterranean herbs and slow-roasted garlic. Savory, aromatic, and impossibly addictive.',
    price: 5.99,
    weight: '142g / 5oz',
    image: CHIPS_IMAGES.herbGarlic.product1.src,
    imageAlt: CHIPS_IMAGES.herbGarlic.product1.alt,
    heroImage: CHIPS_IMAGES.herbGarlic.heroKV.src,
    heroImageAlt: CHIPS_IMAGES.herbGarlic.heroKV.alt,
    flavorImages: [
      { src: CHIPS_IMAGES.herbGarlic.flavor.src, alt: CHIPS_IMAGES.herbGarlic.flavor.alt }
    ],
    color: '#5B8C5A',
    badges: ['Organic', 'Non-GMO', 'Compostable Bag'],
    keywords: ['herb garlic chips', 'savory chips', 'tortilla chips', 'rosemary', 'organic snack']
  },
  {
    id: 'sea-salt-vinegar',
    name: 'Sea Salt & Vinegar',
    tagline: 'Classic tang, ocean-fresh finish',
    description: 'The timeless combination elevated with hand-harvested sea salt and aged apple cider vinegar. Bold, bright, and utterly craveable.',
    price: 5.99,
    weight: '142g / 5oz',
    image: CHIPS_IMAGES.seaSaltVinegar.product.src,
    imageAlt: CHIPS_IMAGES.seaSaltVinegar.product.alt,
    heroImage: CHIPS_IMAGES.seaSaltVinegar.heroKV.src,
    heroImageAlt: CHIPS_IMAGES.seaSaltVinegar.heroKV.alt,
    flavorImages: [
      { src: CHIPS_IMAGES.seaSaltVinegar.flavor1.src, alt: CHIPS_IMAGES.seaSaltVinegar.flavor1.alt },
      { src: CHIPS_IMAGES.seaSaltVinegar.flavor2.src, alt: CHIPS_IMAGES.seaSaltVinegar.flavor2.alt }
    ],
    color: '#4A7C9B',
    badges: ['Organic', 'Gluten-Free', 'Compostable Bag'],
    keywords: ['sea salt vinegar chips', 'tangy chips', 'classic flavor', 'gluten-free']
  }
]

export default function AchieveChipsDemoPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [cartCount, setCartCount] = useState(0)
  const [activeProduct, setActiveProduct] = useState(PRODUCTS[0])
  const [activeFlavorIndex, setActiveFlavorIndex] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Auto-rotate flavor images
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFlavorIndex(prev => (prev + 1) % activeProduct.flavorImages.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [activeProduct.flavorImages.length])

  // Auto-rotate hero products every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveProduct(prev => {
        const currentIndex = PRODUCTS.findIndex(p => p.id === prev.id)
        const nextIndex = (currentIndex + 1) % PRODUCTS.length
        return PRODUCTS[nextIndex]
      })
      setActiveFlavorIndex(0)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      <Helmet>
        <title>Achieve Chips | Premium Organic Potato Chips | Compostable Packaging</title>
        <meta name="description" content="Discover Achieve Chips - premium organic tortilla chips in Fiery Chili Lime, Herb & Garlic, and Sea Salt & Vinegar. Made with certified organic ingredients and packaged in BPI certified compostable bags. Gluten-free, non-GMO, sustainable snacks." />
        <meta name="keywords" content={SEO_KEYWORDS.join(', ')} />
        <style>{`
          @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&family=Fredoka+One&display=swap');
          .font-display { font-family: 'Poppins', sans-serif; }
          .font-serif { font-family: 'Fredoka One', cursive; }
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-marquee {
            animation: marquee 20s linear infinite;
          }
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
      <nav className={`fixed top-[40px] w-full z-50 transition-all duration-500 ${scrolled ? 'bg-white/95 backdrop-blur-xl shadow-md py-3' : 'bg-transparent py-5'}`}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="h-20 w-auto">
              <img src={CHIPS_IMAGES.logo.src} alt={CHIPS_IMAGES.logo.alt} className="h-full w-auto object-contain" />
            </div>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center space-x-8">
              {['Products', 'Our Story', 'Sustainability', 'Where to Buy'].map((item) => (
                <a key={item} href={`#${item.toLowerCase().replace(' ', '-')}`} className="text-sm font-medium tracking-wide hover:text-[#C75B39] transition-colors font-display">
                  {item}
                </a>
              ))}
              <div className="h-5 w-px bg-gray-300 mx-2"></div>
              <button className="relative p-2 hover:text-[#C75B39] transition-colors">
                <ShoppingCart className="w-5 h-5" />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 w-4 h-4 bg-[#C75B39] text-white rounded-full text-[10px] font-bold flex items-center justify-center">
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

      {/* Hero Section - Dynamic Product Showcase */}
      <section className="relative min-h-screen pt-32 pb-20 overflow-hidden">
        {/* Animated Background with Film Texture */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-100" />
          {/* Film texture overlay */}
          <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: `url(${CHIPS_IMAGES.details.texture.src})`, backgroundSize: '400px', backgroundRepeat: 'repeat' }} />
          <div className="absolute top-0 right-0 w-[800px] h-[800px] rounded-full blur-[150px] opacity-30" style={{ backgroundColor: activeProduct.color }} />
          {/* Decorative flavor image - bottom left */}
          <div className="absolute -bottom-20 -left-20 w-[400px] h-[400px] opacity-10 rounded-full overflow-hidden blur-sm">
            <img src={CHIPS_IMAGES.chiliLime.flavor2.src} alt={CHIPS_IMAGES.chiliLime.flavor2.alt} className="w-full h-full object-cover" />
          </div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[80vh]">
            {/* Product Info */}
            <div className="order-2 lg:order-1">
              {/* Flavor Selector */}
              <div className="flex gap-3 mb-8">
                {PRODUCTS.map((product) => (
                  <button
                    key={product.id}
                    onClick={() => { setActiveProduct(product); setActiveFlavorIndex(0) }}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                      activeProduct.id === product.id 
                        ? 'bg-gray-900 text-white' 
                        : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
                    }`}
                  >
                    {product.name}
                  </button>
                ))}
              </div>

              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-display font-bold leading-[0.95] mb-4">
                <span style={{ color: activeProduct.color }}>{activeProduct.name}</span>
              </h1>
              <p className="text-2xl text-gray-500 font-serif italic mb-6">{activeProduct.tagline}</p>
              <p className="text-lg text-gray-600 max-w-lg mb-8 leading-relaxed font-display">
                {activeProduct.description}
              </p>

              {/* Badges */}
              <div className="flex flex-wrap gap-3 mb-8">
                {activeProduct.badges.map((badge, i) => (
                  <span key={i} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-100 border border-gray-200 text-sm font-medium font-display text-gray-700">
                    <Check className="w-4 h-4 text-green-400" />
                    {badge}
                  </span>
                ))}
              </div>

              {/* Price & CTA */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
                <div>
                  <span className="text-4xl font-bold font-display" style={{ color: activeProduct.color }}>${activeProduct.price.toFixed(2)}</span>
                  <span className="text-gray-500 ml-2 font-display">{activeProduct.weight}</span>
                </div>
                <button 
                  onClick={() => setCartCount(c => c + 1)}
                  className="px-8 py-4 rounded-full font-bold text-sm tracking-wide uppercase transition-all transform hover:scale-105 font-display"
                  style={{ backgroundColor: activeProduct.color, color: '#fff' }}
                >
                  Add to Cart
                </button>
              </div>
            </div>

            {/* Product Image */}
            <div className="order-1 lg:order-2 relative flex items-center justify-center">
              <div className="relative aspect-square max-w-2xl mx-auto w-full flex items-center justify-center">
                {/* Glow */}
                <div className="absolute inset-0 rounded-full blur-[120px] opacity-50" style={{ backgroundColor: activeProduct.color }} />
                
                {/* Main Product Image */}
                <img 
                  src={activeProduct.image}
                  alt={activeProduct.name}
                  className="relative z-10 w-[120%] lg:w-[140%] max-w-none object-contain drop-shadow-2xl transform hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
          <ChevronDown className="w-6 h-6 text-gray-400" />
        </div>
      </section>

      {/* Flavor Gallery - Full Width */}
      <section className="py-0 bg-gray-100">
        <div className="grid grid-cols-3 gap-1">
          {[CHIPS_IMAGES.chiliLime.flavor1, CHIPS_IMAGES.herbGarlic.flavor, CHIPS_IMAGES.seaSaltVinegar.flavor1].map((img, i) => (
            <div key={i} className="aspect-[4/3] overflow-hidden group">
              <img src={img.src} alt={img.alt} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
            </div>
          ))}
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-24 bg-white relative overflow-hidden">
        {/* Background film texture with flavor images */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-[500px] h-[500px] opacity-[0.04] -translate-x-1/4 -translate-y-1/4">
            <img src={CHIPS_IMAGES.chiliLime.flavor3.src} alt="" className="w-full h-full object-cover rounded-full blur-sm" />
          </div>
          <div className="absolute bottom-0 right-0 w-[400px] h-[400px] opacity-[0.04] translate-x-1/4 translate-y-1/4">
            <img src={CHIPS_IMAGES.herbGarlic.flavor.src} alt="" className="w-full h-full object-cover rounded-full blur-sm" />
          </div>
          <div className="absolute top-1/2 right-0 w-[300px] h-[300px] opacity-[0.03]">
            <img src={CHIPS_IMAGES.details.texture.src} alt="" className="w-full h-full object-cover" />
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">Our Collection</h2>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto font-display">Three distinct flavors, one uncompromising standard of quality</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {PRODUCTS.map((product) => (
              <div key={product.id} className="group relative bg-gradient-to-b from-gray-50 to-white rounded-3xl p-6 hover:bg-gray-50 transition-all cursor-pointer border border-gray-200 shadow-sm hover:shadow-lg">
                <div className="aspect-[4/5] mb-4 relative overflow-hidden rounded-2xl flex items-center justify-center">
                  <div className="absolute inset-0 opacity-20" style={{ backgroundColor: product.color }} />
                  <img src={product.image} alt={product.name} className="w-[130%] h-auto max-w-none object-contain transform group-hover:scale-110 transition-transform duration-500" />
                </div>
                <h3 className="text-2xl font-display font-bold mb-2">{product.name}</h3>
                <p className="text-gray-500 text-sm mb-4 font-display">{product.tagline}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xl font-bold font-display" style={{ color: product.color }}>${product.price.toFixed(2)}</span>
                  <button 
                    onClick={() => setCartCount(c => c + 1)}
                    className="px-5 py-2 rounded-full text-sm font-medium transition-all font-display"
                    style={{ backgroundColor: product.color, color: '#fff' }}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Film Strip Banner - Flavor Showcase */}
      <section className="py-8 bg-gradient-to-r from-[#C75B39] via-[#5B8C5A] to-[#4A7C9B] relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src={CHIPS_IMAGES.details.packageTexture.src} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="flex animate-marquee whitespace-nowrap">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="flex items-center gap-8 mx-8">
              <span className="text-white/90 text-lg font-display font-bold uppercase tracking-wider">Fiery Chili Lime</span>
              <span className="text-white/50">|</span>
              <span className="text-white/90 text-lg font-display font-bold uppercase tracking-wider">Herb & Garlic</span>
              <span className="text-white/50">|</span>
              <span className="text-white/90 text-lg font-display font-bold uppercase tracking-wider">Sea Salt & Vinegar</span>
              <span className="text-white/50">|</span>
            </div>
          ))}
        </div>
      </section>

      {/* Texture & Quality Section */}
      <section className="py-0 relative">
        <div className="grid md:grid-cols-2">
          <div className="aspect-square md:aspect-auto relative overflow-hidden">
            <img src={CHIPS_IMAGES.details.crispness.src} alt={CHIPS_IMAGES.details.crispness.alt} className="w-full h-full object-cover" />
            {/* Decorative overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
          </div>
          <div className="aspect-square md:aspect-auto bg-gray-50 flex items-center justify-center p-12 md:p-20 relative overflow-hidden">
            {/* Background texture pattern */}
            <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: `url(${CHIPS_IMAGES.details.texture.src})`, backgroundSize: '300px', backgroundRepeat: 'repeat' }} />
            {/* Decorative flavor image */}
            <div className="absolute -bottom-20 -right-20 w-[300px] h-[300px] opacity-[0.06]">
              <img src={CHIPS_IMAGES.seaSaltVinegar.flavor2.src} alt="" className="w-full h-full object-cover rounded-full blur-sm" />
            </div>
            <div className="max-w-md">
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">Perfect Crunch, Every Time</h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-8 font-display">
                Our proprietary cooking process ensures each chip achieves the ideal golden crispness. 
                We source only the finest organic potatoes, slice them to precision thickness, and cook them in small batches.
              </p>
              <div className="flex gap-4">
                <div className="text-center">
                  <div className="text-3xl font-bold font-display" style={{ color: '#C75B39' }}>1.2mm</div>
                  <div className="text-xs text-gray-500 uppercase tracking-wider font-display">Slice Thickness</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold font-display" style={{ color: '#5B8C5A' }}>180°C</div>
                  <div className="text-xs text-gray-500 uppercase tracking-wider font-display">Perfect Temp</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold font-display" style={{ color: '#4A7C9B' }}>48hr</div>
                  <div className="text-xs text-gray-500 uppercase tracking-wider font-display">Quality Check</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ingredient Showcase Strip */}
      <section className="py-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-amber-50 via-orange-50 to-yellow-50" />
        <div className="absolute inset-0 opacity-[0.08]">
          <img src={CHIPS_IMAGES.story.rawPotato.src} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            <div className="text-center">
              <div className="text-4xl font-serif text-amber-700">100%</div>
              <div className="text-sm text-amber-600 font-display uppercase tracking-wider">Organic Potatoes</div>
            </div>
            <div className="hidden md:block w-px h-12 bg-amber-300" />
            <div className="text-center">
              <div className="text-4xl font-serif text-amber-700">Real</div>
              <div className="text-sm text-amber-600 font-display uppercase tracking-wider">Spices & Herbs</div>
            </div>
            <div className="hidden md:block w-px h-12 bg-amber-300" />
            <div className="text-center">
              <div className="text-4xl font-serif text-amber-700">No</div>
              <div className="text-sm text-amber-600 font-display uppercase tracking-wider">Artificial Flavors</div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section id="our-story" className="py-24 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] opacity-5">
          <img src={CHIPS_IMAGES.sustainability.ecoValues.src} alt="" className="w-full h-full object-cover rounded-full blur-sm" />
        </div>
        {/* Additional decorative - flavor image */}
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] opacity-[0.04]">
          <img src={CHIPS_IMAGES.chiliLime.flavor1.src} alt="" className="w-full h-full object-cover rounded-full blur-sm" />
        </div>
        {/* Texture overlay */}
        <div className="absolute inset-0 opacity-[0.015]" style={{ backgroundImage: `url(${CHIPS_IMAGES.details.packagingCloseup.src})`, backgroundSize: '500px', backgroundRepeat: 'repeat' }} />
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-[#C75B39] text-sm font-bold tracking-[0.3em] uppercase mb-4 block font-display">Our Story</span>
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 leading-tight">
                From Farm to<br />
                <span className="text-gray-400">Flavor</span>
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6 font-display">
                It all starts with the potato. We partner directly with organic farms that share our commitment to sustainable agriculture. 
                Each potato is hand-selected for size, starch content, and flavor profile.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed mb-8 font-display">
                Our seasonings are crafted from real ingredients - no artificial flavors, no MSG, no compromise. 
                Just honest, bold taste that you can feel good about.
              </p>
              <div className="grid grid-cols-3 gap-6">
                <div className="text-center p-4 bg-gray-100 rounded-xl">
                  <div className="text-2xl font-bold font-display text-gray-900">15+</div>
                  <div className="text-xs text-gray-500 uppercase tracking-wider font-display">Farm Partners</div>
                </div>
                <div className="text-center p-4 bg-gray-100 rounded-xl">
                  <div className="text-2xl font-bold font-display text-gray-900">100%</div>
                  <div className="text-xs text-gray-500 uppercase tracking-wider font-display">Organic</div>
                </div>
                <div className="text-center p-4 bg-gray-100 rounded-xl">
                  <div className="text-2xl font-bold font-display text-gray-900">0</div>
                  <div className="text-xs text-gray-500 uppercase tracking-wider font-display">Preservatives</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img src={CHIPS_IMAGES.story.rawPotato.src} alt={CHIPS_IMAGES.story.rawPotato.alt} className="w-full rounded-3xl shadow-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Lifestyle Section */}
      <section className="py-0 relative">
        <div className="relative h-[70vh] overflow-hidden">
          <img src={CHIPS_IMAGES.lifestyle.premium.src} alt={CHIPS_IMAGES.lifestyle.premium.alt} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
          {/* Decorative flavor accent */}
          <div className="absolute bottom-0 right-0 w-[300px] h-[300px] opacity-20 mix-blend-soft-light">
            <img src={CHIPS_IMAGES.chiliLime.flavor2.src} alt="" className="w-full h-full object-cover rounded-tl-full" />
          </div>
          <div className="absolute inset-0 flex items-center">
            <div className="max-w-7xl mx-auto px-6 w-full">
              <div className="max-w-xl">
                <h2 className="text-5xl md:text-6xl font-display font-bold mb-6">Elevate Your Snacking</h2>
                <p className="text-xl text-white/70 mb-8 font-display">Premium ingredients. Sustainable packaging. Uncompromising taste. This is snacking, elevated.</p>
                <button className="px-8 py-4 bg-gray-900 text-white rounded-full font-bold text-sm uppercase tracking-wide hover:bg-[#C75B39] transition-all font-display">
                  Shop All Flavors
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sustainability Section */}
      <section id="sustainability" className="py-24 bg-gradient-to-b from-gray-50 to-green-50 relative overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: `url(${CHIPS_IMAGES.details.packagingCloseup})`, backgroundSize: '600px', backgroundRepeat: 'repeat' }} />
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <span className="text-green-400 text-sm font-bold tracking-[0.3em] uppercase mb-4 block font-display">Sustainability</span>
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 leading-tight">
                100% Compostable<br />
                <span className="text-green-400">Packaging</span>
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-8 font-display">
                Every Achieve Chips bag is designed to return to the earth. Our certified compostable packaging breaks down in commercial composting facilities within 180 days, leaving no microplastics behind.
              </p>
              
              <div className="space-y-5 mb-10">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0">
                    <Check className="w-6 h-6 text-green-400" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-lg font-display">BPI Certified Compostable</h4>
                    <p className="text-gray-500 font-display">Meets ASTM D6400 standards for industrial composting</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0">
                    <Check className="w-6 h-6 text-green-400" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-lg font-display">Plant-Based Materials</h4>
                    <p className="text-gray-500 font-display">Made from renewable resources including PLA and cellulose</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0">
                    <Check className="w-6 h-6 text-green-400" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-lg font-display">Zero Plastic Waste</h4>
                    <p className="text-gray-500 font-display">Returns to earth as nutrient-rich compost</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
                <p className="text-gray-600 text-sm mb-4 font-display">Our eco-friendly packaging is proudly supplied by Achieve Pack, specialists in sustainable food packaging.</p>
                <div className="flex flex-wrap gap-4">
                  <Link to="/materials/compostable" className="inline-flex items-center gap-2 text-sm font-semibold text-green-400 hover:text-green-300 transition font-display">
                    Learn About Compostable <ExternalLink className="w-4 h-4" />
                  </Link>
                  <Link to="/industry/snacks-food" className="inline-flex items-center gap-2 text-sm font-semibold text-[#C75B39] hover:text-white transition font-display">
                    Snack Packaging <ExternalLink className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
            
            <div className="order-1 lg:order-2 relative">
              <img src={CHIPS_IMAGES.sustainability.compostable.src} alt={CHIPS_IMAGES.sustainability.compostable.alt} className="w-full rounded-3xl shadow-2xl" />
              <div className="absolute -bottom-6 -right-6 bg-green-500 text-white p-6 rounded-2xl shadow-xl">
                <div className="text-3xl font-bold font-display">180</div>
                <div className="text-xs font-bold uppercase tracking-wider font-display">Days to Compost</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 bg-gray-100 relative overflow-hidden">
        {/* Film grain texture */}
        <div className="absolute inset-0 opacity-[0.015]" style={{ backgroundImage: `url(${CHIPS_IMAGES.lifestyle.scene.src})`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
        {/* Decorative chip textures */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
          <div className="absolute top-10 left-10 w-[200px] h-[200px] opacity-[0.03] rotate-12">
            <img src={CHIPS_IMAGES.details.crispness.src} alt="" className="w-full h-full object-cover rounded-full" />
          </div>
          <div className="absolute bottom-10 right-10 w-[250px] h-[250px] opacity-[0.03] -rotate-12">
            <img src={CHIPS_IMAGES.details.texture.src} alt="" className="w-full h-full object-cover rounded-full" />
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-display font-bold mb-4">Certified Quality</h2>
            <p className="text-gray-500 max-w-2xl mx-auto font-display">Our products meet the highest standards for organic certification and sustainable packaging.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: Award, title: 'USDA Organic', desc: 'Certified organic' },
              { icon: ShieldCheck, title: 'Non-GMO', desc: 'Verified ingredients' },
              { icon: Recycle, title: 'BPI Certified', desc: 'Compostable packaging' },
              { icon: Globe, title: 'Carbon Neutral', desc: 'Offset operations' }
            ].map((cert, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 text-center border border-gray-200 shadow-sm">
                <cert.icon className="w-10 h-10 mx-auto mb-4" style={{ color: ['#C75B39', '#5B8C5A', '#22c55e', '#4A7C9B'][i] }} />
                <h3 className="font-bold mb-1 font-display">{cert.title}</h3>
                <p className="text-gray-500 text-sm font-display">{cert.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 pt-20 pb-10 border-t border-gray-200 relative overflow-hidden">
        {/* Footer background textures */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full opacity-[0.03]">
            <img src={CHIPS_IMAGES.lifestyle.scene.src} alt="" className="w-full h-full object-cover" />
          </div>
          <div className="absolute bottom-0 right-0 w-[400px] h-[400px] opacity-[0.05]">
            <img src={CHIPS_IMAGES.sustainability.compostable.src} alt="" className="w-full h-full object-cover rounded-tl-full blur-sm" />
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-12 mb-16">
            <div className="lg:col-span-4">
              <img src={CHIPS_IMAGES.logo.src} alt={CHIPS_IMAGES.logo.alt} className="h-24 w-auto mb-6" />
              <p className="text-gray-400 max-w-sm leading-relaxed mb-6 font-display">
                Premium organic potato chips crafted with care, packaged sustainably. Because great taste and environmental responsibility go hand in hand.
              </p>
              <div className="flex gap-4">
                {[Facebook, Instagram, Twitter].map((Icon, i) => (
                  <a key={i} href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#C75B39] transition-all border border-white/20">
                    <Icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
            <div className="lg:col-span-2">
              <h4 className="font-bold tracking-wider uppercase text-xs text-[#C75B39] mb-6 font-display">Shop</h4>
              <ul className="space-y-3 text-gray-400 text-sm font-display">
                {PRODUCTS.map(p => <li key={p.id}><a href="#" className="hover:text-white transition">{p.name}</a></li>)}
                <li><a href="#" className="hover:text-white transition">Variety Pack</a></li>
              </ul>
            </div>
            <div className="lg:col-span-2">
              <h4 className="font-bold tracking-wider uppercase text-xs text-[#C75B39] mb-6 font-display">Company</h4>
              <ul className="space-y-3 text-gray-400 text-sm font-display">
                <li><a href="#" className="hover:text-white transition">Our Story</a></li>
                <li><a href="#" className="hover:text-white transition">Sustainability</a></li>
                <li><a href="#" className="hover:text-white transition">Careers</a></li>
              </ul>
            </div>
            <div className="lg:col-span-4">
              <h4 className="font-bold tracking-wider uppercase text-xs text-[#C75B39] mb-6 font-display">Contact</h4>
              <div className="space-y-3 text-gray-400 text-sm font-display">
                <div className="flex items-center gap-3"><Mail className="w-4 h-4" /><span>hello@achievechips.com</span></div>
                <div className="flex items-center gap-3"><Phone className="w-4 h-4" /><span>1-800-ACHIEVE</span></div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-white/10 pt-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-gray-400 text-xs font-display">
              <div className="flex items-center gap-2">
                <Recycle className="w-4 h-4 text-green-500" />
                <span>Sustainable packaging by</span>
                <Link to="/" className="text-[#C75B39] hover:text-white transition font-semibold">Achieve Pack</Link>
              </div>
              <div className="flex items-center gap-4">
                <Link to="/materials/compostable" className="hover:text-white transition">Compostable Options</Link>
                <span>|</span>
                <Link to="/packaging/stand-up-pouches" className="hover:text-white transition">Stand Up Pouches</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-[100] bg-white p-8 flex flex-col">
          <div className="flex justify-between items-center mb-12">
            <img src={CHIPS_IMAGES.logo.src} alt={CHIPS_IMAGES.logo.alt} className="h-16" />
            <button onClick={() => setIsMenuOpen(false)}><X className="w-8 h-8" /></button>
          </div>
          <div className="flex flex-col gap-6">
            {['Products', 'Our Story', 'Sustainability', 'Where to Buy'].map((item) => (
              <a key={item} href={`#${item.toLowerCase().replace(' ', '-')}`} onClick={() => setIsMenuOpen(false)} className="text-3xl font-display font-bold hover:text-[#C75B39] transition">
                {item}
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
