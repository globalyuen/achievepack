import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect, useRef } from 'react'
import { 
  Coffee, Leaf, Zap, CheckCircle, ArrowRight, Shield, Award, Box, 
  Sparkles, DollarSign, Clock, HelpCircle, Mail, Download, Compass, 
  MapPin, Check, Layers, AlertCircle, ShoppingBag, Grid, Info, Sparkle, Globe
} from 'lucide-react'
import PouchLayout from '../../components/pouch/PouchLayout'
import SiteHeader from '../../components/SiteHeader'
import Footer from '../../components/Footer'
import { isPouch } from '../../utils/domain'

interface BlendOption {
  id: string
  name: string
  roast: string
  colorName: string
  hex: string
  gussetHex: string
  textColor: string
  description: string
  flavorNotes: string[]
}

const BLENDS: BlendOption[] = [
  {
    id: 'pippingarra',
    name: 'Pippingarra',
    roast: 'Medium Roast',
    colorName: 'Cyan Blue',
    hex: '#00D8FF',
    gussetHex: '#E0F7FC',
    textColor: 'text-sky-600',
    description: 'A smooth, balanced medium roast with chocolatey undertones, engineered for everyday retail and wholesale cafes.',
    flavorNotes: ['Milk Chocolate', 'Stonefruit', 'Brown Sugar']
  },
  {
    id: 'barrga-binya',
    name: 'Barrga Binya',
    roast: 'Strong Roast',
    colorName: 'Vibrant Green',
    hex: '#10B981',
    gussetHex: '#ECFDF5',
    textColor: 'text-emerald-600',
    description: 'A rich, full-bodied dark roast designed to cut through milk beautifully, delivering a heavy, sweet cup profile.',
    flavorNotes: ['Dark Cocoa', 'Roasted Hazelnut', 'Toffee']
  },
  {
    id: 'karijini',
    name: 'Karijini',
    roast: 'Light Roast',
    colorName: 'Purple / Berry',
    hex: '#A855F7',
    gussetHex: '#F3E8FF',
    textColor: 'text-purple-600',
    description: 'A bright, fruit-forward light roast highlighting delicate acidity and floral notes inspired by regional Western Australia wildflowers.',
    flavorNotes: ['Wild Blueberry', 'Lavender Honey', 'Bergamot']
  },
  {
    id: 'cooya-pooya',
    name: 'Cooya Pooya',
    roast: 'Decaf Roast',
    colorName: 'Burnt Orange / Brown',
    hex: '#F97316',
    gussetHex: '#FFF7ED',
    textColor: 'text-orange-600',
    description: 'A premium chemical-free decaf blend retaining full aroma and complex notes, with zero caffeine compromises.',
    flavorNotes: ['Caramel Fudge', 'Roasted Peanut', 'Vanilla']
  }
]

interface PouchSize {
  id: string
  label: string
  capacity: string
  productType: string
  dimensions: string
  gusset: string
  moq: string
  dielineLink: string
  valveOffset: string
  zipperOffset: string
}

const SIZES: PouchSize[] = [
  {
    id: '150g',
    label: '150g Bag',
    capacity: '150g Ground / Whole Bean',
    productType: 'Ground Coffee',
    dimensions: '95 × 170 mm',
    gusset: '55 mm (Flat Bottom)',
    moq: '100 bags',
    dielineLink: '#dieline-150g',
    valveOffset: '90mm from top',
    zipperOffset: '35mm from top'
  },
  {
    id: '250g',
    label: '250g Bag',
    capacity: '250g Ground / Whole Bean',
    productType: 'Ground Coffee',
    dimensions: '120 × 200 mm',
    gusset: '60 mm (Flat Bottom)',
    moq: '100 bags',
    dielineLink: '#dieline-250g',
    valveOffset: '90mm from top',
    zipperOffset: '35mm from top'
  },
  {
    id: '500g',
    label: '500g Bag',
    capacity: '500g Whole Bean / Ground',
    productType: 'Whole Beans',
    dimensions: '140 × 265 mm',
    gusset: '80 mm (Flat Bottom)',
    moq: '100 bags',
    dielineLink: '#dieline-500g',
    valveOffset: '95mm from top',
    zipperOffset: '40mm from top'
  },
  {
    id: '1kg',
    label: '1kg Bag',
    capacity: '1kg Whole Bean / Ground',
    productType: 'Whole Beans',
    dimensions: '160 × 325 mm',
    gusset: '100 mm (Flat Bottom)',
    moq: '100 bags',
    dielineLink: '#dieline-1kg',
    valveOffset: '100mm from top',
    zipperOffset: '40mm from top'
  }
]

// Option B & C pricing matrices
const PRICING_MATRIX = {
  'recyclable': { // Option B (120μ Mono-PE + EVOH + PE)
    '150g': { 100: 11.78, 500: 2.65, 1000: 1.71, 2000: 1.15, 5000: 0.74 },
    '250g': { 100: 12.96, 500: 2.92, 1000: 1.88, 2000: 1.27, 5000: 0.81 },
    '500g': { 100: 14.14, 500: 3.18, 1000: 2.05, 2000: 1.38, 5000: 0.89 },
    '1kg': { 100: 16.49, 500: 3.71, 1000: 2.39, 2000: 1.61, 5000: 1.04 }
  },
  'compostable': { // Option C (125μ FSC Kraft + VM-Cello + PBAT)
    '150g': { 100: 15.31, 500: 3.45, 1000: 2.22, 2000: 1.50, 5000: 0.96 },
    '250g': { 100: 16.85, 500: 3.80, 1000: 2.44, 2000: 1.65, 5000: 1.05 },
    '500g': { 100: 18.38, 500: 4.14, 1000: 2.67, 2000: 1.79, 5000: 1.16 },
    '1kg': { 100: 21.44, 500: 4.82, 1000: 3.11, 2000: 2.09, 5000: 1.35 }
  }
}

// B2C Neo-Brutalist Components (Only loaded in Pouch.eco)
const NeoButton = ({ children, to, variant = 'primary', className = '' }: any) => {
  const baseStyle = "relative px-8 py-4 font-black uppercase tracking-widest border-4 border-black transition-all active:translate-x-1 active:translate-y-1 inline-block text-center cursor-pointer"
  const variants = {
    primary: "bg-[#10b981] text-white hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 hover:-translate-x-1",
    secondary: "bg-white text-black hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 hover:-translate-x-1",
    yellow: "bg-[#D4FF00] text-black hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 hover:-translate-x-1",
    dark: "bg-black text-white hover:shadow-[8px_8px_0px_0px_rgba(212,255,0,1)] hover:-translate-y-1 hover:-translate-x-1 border-[#D4FF00]"
  }
  
  return (
    <Link to={to} className={`${baseStyle} ${variants[variant as keyof typeof variants]} ${className}`}>
      {children}
    </Link>
  )
}

const NeoCard = ({ children, className = '', color = 'bg-white' }: any) => (
  <div className={`border-4 border-black p-6 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] ${color} ${className}`}>
    {children}
  </div>
)

const NeoBadge = ({ children, color = 'white' }: any) => {
  const colors = {
    white: 'bg-white text-black border-2 border-black',
    lime: 'bg-[#D4FF00] text-black border-2 border-black',
    cyan: 'bg-[#00FFFF] text-black border-2 border-black',
    magenta: 'bg-[#FF00FF] text-white border-2 border-black',
    amber: 'bg-amber-400 text-black border-2 border-black'
  }
  return (
    <span className={`inline-block px-2.5 py-1 text-[10px] font-black uppercase tracking-wider font-['JetBrains_Mono'] ${colors[color as keyof typeof colors]}`}>
      {children}
    </span>
  )
}

// B2B Corporate Components (Only loaded in AchievePack)
const B2bCard = ({ children, className = '', bg = 'bg-white' }: any) => (
  <div className={`${bg} border border-neutral-200 rounded-3xl p-6 shadow-sm hover:shadow-md transition-all duration-300 ${className}`}>
    {children}
  </div>
)

const B2bBadge = ({ children, variant = 'neutral' }: any) => {
  const styles: Record<string, string> = {
    neutral: 'bg-neutral-100 text-neutral-800',
    primary: 'bg-purple-100 text-purple-800',
    eco: 'bg-emerald-100 text-emerald-800',
    accent: 'bg-cyan-100 text-cyan-800',
    warn: 'bg-amber-100 text-amber-800'
  }
  return (
    <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold tracking-wide uppercase ${styles[variant] || styles.neutral}`}>
      {children}
    </span>
  )
}

export default function PouchEcoGPTKPage() {
  const [tilt, setTilt] = useState({ x: 0, y: 0 })
  const heroCardRef = useRef<HTMLDivElement>(null)

  // Configuration State
  const [selectedBlend, setSelectedBlend] = useState<BlendOption>(BLENDS[0])
  const [selectedSize, setSelectedSize] = useState<PouchSize>(SIZES[1]) // 250g default
  const [activeMaterial, setActiveMaterial] = useState<'high-barrier' | 'recyclable' | 'compostable'>('recyclable')
  const [selectedQty, setSelectedQty] = useState<100 | 500 | 1000 | 2000 | 5000>(500)
  
  // Custom Card Variation selection
  const [variationMethod, setVariationMethod] = useState<'digital-print' | 'card-strip' | 'card-slot'>('digital-print')

  // Lead capture state
  const [email, setEmail] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [downloadSuccess, setDownloadSuccess] = useState(false)

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!heroCardRef.current) return
    const rect = heroCardRef.current.getBoundingClientRect()
    setTilt({ 
      x: ((e.clientX - rect.left) / rect.width - 0.5) * 15, 
      y: ((e.clientY - rect.top) / rect.height - 0.5) * -15 
    })
  }

  // Get active price calculations
  const getUnitPrice = () => {
    if (activeMaterial === 'high-barrier') return 'Quote Only'
    const sizeId = selectedSize.id as '150g' | '250g' | '500g' | '1kg'
    const matMatrix = PRICING_MATRIX[activeMaterial]
    const price = matMatrix[sizeId]?.[selectedQty]
    return price ? `$${price.toFixed(2)}` : 'Quote Only'
  }

  const getTotalPrice = () => {
    if (activeMaterial === 'high-barrier') return 'Custom Estimate'
    const sizeId = selectedSize.id as '150g' | '250g' | '500g' | '1kg'
    const matMatrix = PRICING_MATRIX[activeMaterial]
    const price = matMatrix[sizeId]?.[selectedQty]
    return price ? `$${(price * selectedQty).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}` : 'Custom Estimate'
  }

  const triggerPDFDownload = () => {
    const guideContent = `========================================================================
POUCH.ECO PaaS // ONE-STOP BRAND ACCELERATOR STARTER GUIDE
========================================================================
Prepared especially for Coffee Startup Founders entering the Retail Arena.
Verified by Pouch.eco Technical Advisory Team - Ryan Wong (Packaging Specialist)

------------------------------------------------------------------------
SECTION 1: Packaging-as-a-Service (PaaS) Model Overview
------------------------------------------------------------------------
Specialty coffee brands often struggle with huge plate cylinder costs and MOQs.
PaaS completely eliminates these hurdles. We deliver:
- 100% custom printed flat-bottom 3D pouches (MoQ 100 bags per blend!)
- A custom, high-converting Shopify or e-commerce landing page
- Premium 3D marketing renders and launch-ready social assets
All you need to do is provide the roasted product. We handle the rest!

------------------------------------------------------------------------
SECTION 2: Climate-Specific Packaging Optimization
------------------------------------------------------------------------
Coffee roasted and distributed encounters extreme high-heat environments,
accelerating lipid oxidation, CO2 release, and aroma decay.

LAMINATION PROTOCOLS RECOMMENDED:
1. STRUCTURE A (極致阻隔防護 - 推薦): Matte BOPP (19μ) + Pure Aluminum Foil (7μ) + Food-Grade PE (104μ)
   - OTR: < 0.05 cc/m²/24h | WVTR: < 0.05 g/m²/24h
   - Maximum protection against high temperature & direct sun. Perfect for premium retail beans.
2. STRUCTURE B (100% 單一材料可回收): MDO-PE (25μ) + EVOH High-Barrier (3μ) + Food-Grade PE (92μ)
   - 100% Recyclable under Code 4 SPI regulations. High barrier EVOH mimics metallic foil.
3. STRUCTURE C (100% 認證家用可堆肥): FSC Kraft Paper (50g) + Vacuum-Metallized Cellulose (12μ) + PBAT (65μ)
   - Completely biodegrades in backyard compost in 180 days. Zero microplastics.

------------------------------------------------------------------------
SECTION 3: Low-MOQ Brand Variations - attached Coffee Name Cards
------------------------------------------------------------------------
To launch multiple blends with $0 plate setup and absolute minimum startup cost,
we offer premium Stock Flat Bottom pouches fitted with custom coffee name cards:
1. Colored Elastic Band Strips: A thick silicone/fabric band tightly wraps around the bag,
   securing the roast blend card to the front face. Band colors change per roast blend.
2. Built-in Card Insertion Slots: Pre-slit corner slots on the pouch face allow quick,
   secure sliding insertion of beautiful custom-printed blend cards.

------------------------------------------------------------------------
SECTION 4: Pouch.eco Optimized Flat Bottom Bag Dimensions
------------------------------------------------------------------------
- 150g Ground Bag:  95 × 170 + 55 mm   | One-Sided Zipper + Degassing Valve
- 250g Ground Bag:  120 × 200 + 60 mm  | One-Sided Zipper + Degassing Valve
- 500g Bean Bag:    140 × 265 + 80 mm  | One-Sided Zipper + Degassing Valve
- 1kg Bean Bag:     160 × 325 + 100 mm | One-Sided Zipper + Degassing Valve

------------------------------------------------------------------------
HOW TO BOOK YOUR KICKOFF MEETING:
Visit our Interactive Calendly Portal: https://calendly.com/30-min-free-packaging-consultancy
WhatsApp Global Support Desk: +852 6970 4411
Email Direct: paas-desk@pouch.eco

POUCH.ECO - Engineered to Stand. Built to Sustain.
========================================================================`

    const blob = new Blob([guideContent], { type: 'text/plain;charset=utf-8' })
    const url = URL.createObjectURL(blob)
    const link = document.createElement('a')
    link.href = url
    link.setAttribute('download', 'Pouch_Eco_PaaS_Accelerator_Guide.txt')
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    URL.revokeObjectURL(url)
  }

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!email || !email.includes('@')) return

    setIsSubmitting(true)

    // Simulate CRM registration
    setTimeout(() => {
      setIsSubmitting(false)
      setDownloadSuccess(true)
      triggerPDFDownload()
      localStorage.setItem('paas_subscriber_email', email)
    }, 1200)
  }

  const materialSpecs = {
    'high-barrier': {
      name: 'Structure A: Ultra High-Barrier Pure Aluminum Foil',
      structure: 'Matte BOPP // Pure AL // PE (130μ)',
      chineseName: '結構 A（極致阻隔防護 - 推薦）',
      features: '純鋁箔核心層，提供接近 0 的透氧率（OTR）與透濕率（WVTR）。能完全阻隔陽光直射及高溫對熟豆油分的影響，最大程度延長保質期。',
      otr: '< 0.05 cc/m²/24h (Industry Peak Freshness)',
      wvtr: '< 0.05 g/m²/24h (Sweat & Humidity Armor)',
      shelflife: '12 - 18 Months under hot/high humidity conditions',
      ecoRating: 'Standard High Protection (Alu-reclaimable loop)'
    },
    'recyclable': {
      name: 'Structure B: 100% Recycle-Ready Mono-PE Pouch',
      structure: 'MDO-PE // EVOH // PE (120μ)',
      chineseName: '結構 B（100% 單一材料可回收）',
      features: '高阻隔單一聚乙烯（Mono-PE）結構，能直接放入超市軟塑料回收箱。對環境友好，同時具備出色的防水汽與防穿刺性能。',
      otr: '< 0.50 cc/m²/24h (Excellent Aroma Retention)',
      wvtr: '< 0.45 g/m²/24h (Moisture-proof shield)',
      shelflife: '9 - 12 Months',
      ecoRating: '♻️ 100% Curb-side Recyclable (Code 4 SPI)'
    },
    'compostable': {
      name: 'Structure C: 100% Certified Home Compostable Kraft Laminate',
      structure: 'FSC Kraft // VM-Cello // PBAT (125μ)',
      chineseName: '結構 C（100% 認證家用可堆肥）',
      features: '牛皮紙質外觀，核心為真空鍍鋁纖維素阻隔層。可在家庭後院堆肥箱內於 180 天內完全降解為有機質，零微塑料殘留。',
      otr: '< 1.10 cc/m²/24h (Eco Standard Shield)',
      wvtr: '< 1.50 g/m²/24h (Backyard Degradable)',
      shelflife: '6 - 9 Months',
      ecoRating: '🌱 TUV OK Compost HOME (Backyard Bio-decay)'
    }
  }

  // DYNAMIC POUCH VISUALIZER ELEMENT (Shared between B2C and B2B layout trees)
  const PouchVisualizerElement = () => (
    <div className="relative w-full h-[260px] bg-neutral-50 border border-neutral-200 rounded-2xl mb-6 flex items-center justify-center overflow-hidden shadow-inner">
      <div className="absolute inset-0 flex flex-col items-center justify-center p-4">
        {/* Simulated 3D flat-bottom box pouch */}
        <div className="relative w-28 h-40 border-2 border-neutral-900 bg-white shadow-lg flex flex-col justify-between p-2 overflow-hidden transition-all duration-300">
          
          {/* Side gussets for Digital print */}
          {variationMethod === 'digital-print' && (
            <>
              <div className="absolute top-0 bottom-0 left-0 w-3 transition-colors duration-500" style={{ backgroundColor: selectedBlend.hex }} />
              <div className="absolute top-0 bottom-0 right-0 w-3 transition-colors duration-500" style={{ backgroundColor: selectedBlend.hex }} />
            </>
          )}

          {/* Zipper top border */}
          <div className="w-full h-1.5 border-b border-neutral-300 bg-neutral-100 rounded" />

          {/* Valve Welded Circle */}
          <div className="absolute top-9 left-1/2 -translate-x-1/2 w-6 h-6 rounded-full border border-neutral-300 bg-neutral-50 flex items-center justify-center text-[5px] font-bold text-neutral-400 select-none">
            VALVE
          </div>

          {/* Content representation */}
          <div className="relative z-10 flex-1 flex flex-col justify-end items-center pb-2 text-center">
            
            {/* Digital Print decoration */}
            {variationMethod === 'digital-print' && (
              <div className="space-y-1">
                <div className="text-[10px] font-black tracking-tight leading-none text-neutral-800">POUCH COFFEE</div>
                <div className="text-[6px] font-black uppercase tracking-wider px-1 inline-block rounded text-white" style={{ backgroundColor: selectedBlend.hex }}>
                  {selectedBlend.name}
                </div>
                <div className="text-[5px] font-bold text-neutral-400 font-['JetBrains_Mono'] leading-none">
                  {selectedSize.capacity}
                </div>
              </div>
            )}

            {/* Elastic Strip variation */}
            {variationMethod === 'card-strip' && (
              <div className="w-full relative py-1 flex items-center justify-center">
                {/* The vertical Colored strip wrapping around the pouch */}
                <div 
                  className="absolute top-[-30px] bottom-[-20px] w-5 border-x border-neutral-900 shadow-[2px_0px_2px_rgba(0,0,0,0.15)]" 
                  style={{ backgroundColor: selectedBlend.hex }} 
                />
                {/* The tucked Card */}
                <div className="relative z-20 bg-white border border-neutral-800 p-1 shadow-md w-[70px] transform -rotate-1">
                  <div className="text-[6px] font-black tracking-tight leading-none text-left">POUCH COFFEE</div>
                  <div className="text-[5px] font-black text-white px-0.5 mt-0.5 inline-block text-[4px] uppercase" style={{ backgroundColor: selectedBlend.hex }}>
                    {selectedBlend.name}
                  </div>
                  <div className="text-[4px] text-neutral-500 font-['JetBrains_Mono'] mt-0.5 leading-none">Name Card Strip</div>
                </div>
              </div>
            )}

            {/* Corner card insertion slots variation */}
            {variationMethod === 'card-slot' && (
              <div className="w-full relative flex items-center justify-center">
                {/* Corner slots represented by dark tiny marks */}
                <div className="absolute top-[-25px] left-1 w-1 h-1 border-b border-r border-neutral-400" />
                <div className="absolute top-[-25px] right-1 w-1 h-1 border-b border-l border-neutral-400" />
                <div className="absolute bottom-[-10px] left-1 w-1 h-1 border-t border-r border-neutral-400" />
                <div className="absolute bottom-[-10px] right-1 w-1 h-1 border-t border-l border-neutral-400" />
                
                {/* The inserted Card */}
                <div className="bg-neutral-50 border border-neutral-400 p-1.5 w-[80px] shadow-sm">
                  <div className="text-[6px] font-black tracking-tight text-center">POUCH COFFEE</div>
                  <div className="text-[5px] font-black uppercase text-center mt-0.5" style={{ color: selectedBlend.hex }}>
                    {selectedBlend.name}
                  </div>
                  <div className="text-[4px] text-neutral-500 font-['JetBrains_Mono'] text-center leading-none mt-0.5">Card Slot Insertion</div>
                </div>
              </div>
            )}
          </div>

          {/* Sealed Bottom */}
          <div className="w-full h-2 border-t border-neutral-200 bg-neutral-100" />
        </div>

        <p className="text-[10px] font-['JetBrains_Mono'] font-bold text-neutral-400 mt-3 uppercase tracking-wider">
          {variationMethod === 'digital-print' && 'Edge-to-Edge Custom Print'}
          {variationMethod === 'card-strip' && 'Custom Card + Elastic Band Strip'}
          {variationMethod === 'card-slot' && 'Custom Card + Corner Insertion Slots'}
        </p>
      </div>

      <div className="absolute top-2 left-2 flex gap-1 font-['JetBrains_Mono'] text-[8px] font-black">
        <span className="bg-neutral-900 text-white px-1">{selectedSize.id}</span>
        <span className="bg-white border border-neutral-200 px-1" style={{ color: selectedBlend.hex }}>{selectedBlend.roast}</span>
      </div>
    </div>
  )

  const isEco = isPouch()

  // B2C POUCH.ECO NEOBRUTALIST RENDER
  if (isEco) {
    return (
      <PouchLayout>
        <Helmet>
          <title>PaaS Coffee Startup Starter Accelerator Kit | B2B Subscription | POUCH.ECO</title>
          <meta name="description" content="PaaS (Packaging-as-a-Service) Coffee Accelerator Suite. Custom 3D flat bottom pouches, free custom Shopify e-commerce setups, 3D marketing mockups, and low MOQ starting at 100 bags." />
          <link rel="canonical" href="https://pouch.eco/coffee" />
        </Helmet>

        <style>{`
          @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700;800;900&family=JetBrains+Mono:wght@400;700&display=swap');
        `}</style>

        {/* Hero Section */}
        <section className="relative pt-16 pb-24 border-b-4 border-black bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:20px_20px] bg-[#fafafa] font-['Space_Grotesk']">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            
            <div className="inline-flex items-center gap-2 bg-[#D4FF00] text-black border-4 border-black px-4 py-2 transform -rotate-1 font-['JetBrains_Mono'] font-black text-sm shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] mb-8">
              <Sparkles className="w-5 h-5 text-purple-600 animate-spin-slow" />
              PACKAGING-AS-A-SERVICE // PaaS STARTER SUITE
            </div>

            <div className="grid lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-7 space-y-6">
                <h1 className="font-black text-5xl md:text-7xl leading-[0.9] tracking-tighter uppercase text-black">
                  LAUNCH YOUR<br/>
                  COFFEE BRAND.<br/>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-[#10B981] to-[#D4FF00] drop-shadow-[2px_2px_0px_rgba(0,0,0,1)]">
                    PaaS MODEL.
                  </span>
                </h1>

                <p className="text-lg md:text-xl text-neutral-800 font-semibold max-w-2xl">
                  The ultimate B2B launch kit styled like a premium SaaS. We provide the custom-printed flat-bottom 3D pouches, build your high-converting Shopify store, and supply complete 3D marketing mockups. All you need to do is provide your product!
                </p>

                <div className="flex flex-wrap gap-3 pt-2 font-['JetBrains_Mono'] font-bold text-xs">
                  <span className="border-2 border-black bg-white px-3 py-1 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                    ☕ Low MOQ: 100 Bags / Blend
                  </span>
                  <span className="border-2 border-black bg-[#00FFFF] px-3 py-1 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                    ⚡ Prepress cylinder fee: $0
                  </span>
                  <span className="border-2 border-black bg-[#FF00FF] text-white px-3 py-1 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                    📦 100% Home Backyard Compostable Option
                  </span>
                </div>

                <div className="grid sm:grid-cols-2 gap-4 max-w-lg pt-4">
                  <div className="border-4 border-black bg-white p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex items-center gap-3">
                    <div className="w-10 h-10 border-2 border-black bg-emerald-100 flex items-center justify-center font-bold text-lg text-emerald-700">✓</div>
                    <div>
                      <h3 className="font-bold text-sm uppercase">Choose Variation Style</h3>
                      <p className="text-xs text-neutral-600 font-semibold">Digital print or quick Card-Attach</p>
                    </div>
                  </div>

                  <div className="border-4 border-black bg-white p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex items-center gap-3">
                    <div className="w-10 h-10 border-2 border-black bg-purple-100 flex items-center justify-center font-bold text-lg text-purple-700">✓</div>
                    <div>
                      <h3 className="font-bold text-sm uppercase">Complete E-Commerce</h3>
                      <p className="text-xs text-neutral-600 font-semibold">100% Free custom-setup store included</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5">
                <div 
                  ref={heroCardRef}
                  onMouseMove={handleMouseMove}
                  onMouseLeave={() => setTilt({ x: 0, y: 0 })}
                  style={{ 
                    transform: `perspective(1000px) rotateX(${tilt.y}deg) rotateY(${tilt.x}deg)`,
                    transition: 'transform 0.15s ease'
                  }}
                  className="border-4 border-black bg-white p-6 shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] relative overflow-hidden"
                >
                  <div 
                    className="absolute right-0 top-0 bottom-0 w-6 border-l-4 border-black transition-colors duration-500"
                    style={{ backgroundColor: selectedBlend.hex }}
                    title={`${selectedBlend.name} side gusset`}
                  />

                  <div className="flex justify-between items-start mb-6">
                    <div>
                      <NeoBadge color="lime">PaaS_CONFIGURATOR</NeoBadge>
                      <h2 className="font-black text-2xl uppercase mt-2">Pouch Visualizer</h2>
                    </div>
                    <Coffee className="w-8 h-8 text-neutral-800 animate-bounce" />
                  </div>

                  <PouchVisualizerElement />

                  <div className="space-y-4">
                    <div>
                      <label className="block text-xs font-black uppercase tracking-wider text-neutral-700 mb-2">
                        1. Select Roast Blend & Gusset Color
                      </label>
                      <div className="grid grid-cols-2 gap-2">
                        {BLENDS.map((blend) => (
                          <button
                            key={blend.id}
                            type="button"
                            onClick={() => setSelectedBlend(blend)}
                            className={`border-2 border-black p-2 font-['JetBrains_Mono'] font-bold text-[10px] text-left transition-all flex items-center justify-between ${
                              selectedBlend.id === blend.id 
                                ? 'bg-neutral-900 text-white shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]' 
                                : 'bg-white hover:bg-neutral-50 text-neutral-800'
                            }`}
                          >
                            <div>
                              <div className="font-black text-xs leading-none mb-1">{blend.name}</div>
                              <div className="text-[8px] opacity-80 leading-none">{blend.roast}</div>
                            </div>
                            <span 
                              className="w-3.5 h-3.5 border border-black rounded-full" 
                              style={{ backgroundColor: blend.hex }}
                            />
                          </button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-black uppercase tracking-wider text-neutral-700 mb-2">
                        2. Select Customization Method
                      </label>
                      <div className="grid grid-cols-3 gap-2">
                        {[
                          { id: 'digital-print', label: 'Full Digital', icon: '🎨' },
                          { id: 'card-strip', label: 'Card Band', icon: '🎗️' },
                          { id: 'card-slot', label: 'Card Slot', icon: '📇' }
                        ].map((method) => (
                          <button
                            key={method.id}
                            type="button"
                            onClick={() => setVariationMethod(method.id as any)}
                            className={`border-2 border-black p-1.5 font-bold text-[10px] text-center transition-all ${
                              variationMethod === method.id 
                                ? 'bg-neutral-900 text-white shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]' 
                                : 'bg-white hover:bg-neutral-50 text-neutral-800'
                            }`}
                          >
                            <div className="text-sm mb-0.5">{method.icon}</div>
                            <div className="font-black uppercase tracking-tighter leading-none">{method.label}</div>
                          </button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-black uppercase tracking-wider text-neutral-700 mb-2">
                        3. Select Run Quantity (MOQ 100 pcs)
                      </label>
                      <div className="grid grid-cols-5 gap-1 font-['JetBrains_Mono'] font-bold text-xs">
                        {[100, 500, 1000, 2000, 5000].map((qty) => (
                          <button
                            key={qty}
                            type="button"
                            onClick={() => setSelectedQty(qty as any)}
                            className={`border-2 border-black py-2 rounded transition-all text-center ${
                              selectedQty === qty 
                                ? 'bg-[#00FFFF] text-black font-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] translate-y-0.5' 
                                : 'bg-white hover:bg-neutral-50 text-neutral-700'
                            }`}
                          >
                            {qty}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-black uppercase tracking-wider text-neutral-700 mb-2">
                        4. Select Bag Size / Type
                      </label>
                      <div className="grid grid-cols-4 gap-1.5 font-['JetBrains_Mono'] font-bold text-xs">
                        {SIZES.map((size) => (
                          <button
                            key={size.id}
                            type="button"
                            onClick={() => setSelectedSize(size)}
                            className={`border-2 border-black py-2 rounded transition-all text-center ${
                              selectedSize.id === size.id 
                                ? 'bg-[#D4FF00] text-black font-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] translate-y-0.5' 
                                : 'bg-white hover:bg-neutral-50 text-neutral-700'
                            }`}
                          >
                            {size.id}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="bg-neutral-900 border-2 border-black p-4 text-white text-xs font-semibold space-y-2 rounded shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                      <div className="flex justify-between border-b border-neutral-800 pb-1.5">
                        <span className="uppercase text-neutral-400">// Material Choice:</span>
                        <span className="font-bold text-[#D4FF00]">{materialSpecs[activeMaterial].chineseName}</span>
                      </div>
                      <div className="flex justify-between border-b border-neutral-800 pb-1.5">
                        <span className="uppercase text-neutral-400">// Pouch Style & Size:</span>
                        <span className="font-bold font-['JetBrains_Mono']">{selectedSize.dimensions} ({selectedSize.id})</span>
                      </div>
                      <div className="flex justify-between border-b border-neutral-800 pb-1.5">
                        <span className="uppercase text-neutral-400">// Reclosure:</span>
                        <span className="font-bold text-neutral-200">One-sided Zipper + Degassing Valve</span>
                      </div>
                      <div className="flex justify-between items-center text-white border-b border-neutral-800 pb-1.5">
                        <span className="uppercase text-neutral-400">// Unit Price:</span>
                        <span className="font-bold text-xl text-[#00D8FF] font-['JetBrains_Mono']">{getUnitPrice()}</span>
                      </div>
                      <div className="flex justify-between items-center text-[#D4FF00] pt-1">
                        <span className="uppercase text-neutral-300 font-bold">Total Batch Cost:</span>
                        <span className="font-black text-2xl font-['JetBrains_Mono']">{getTotalPrice()}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Advisory Section */}
        <section className="py-20 border-b-4 border-black bg-white font-['Space_Grotesk']">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <div className="flex items-center gap-3 mb-12">
              <NeoBadge color="magenta">CLIMATIC_ADVISORY_REPORT</NeoBadge>
              <h2 className="font-black text-3xl md:text-5xl uppercase tracking-tight">
                Roast Quality Climate Protocol
              </h2>
            </div>

            <div className="grid md:grid-cols-12 gap-8 items-stretch">
              <div className="md:col-span-7 space-y-6">
                <div className="border-4 border-black bg-amber-50 p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] relative">
                  <div className="absolute top-4 right-4 flex items-center gap-1.5 bg-amber-200 border-2 border-black px-2 py-0.5 font-['JetBrains_Mono'] text-[10px] font-black uppercase text-amber-800 animate-pulse">
                    <AlertCircle className="w-3.5 h-3.5" /> Climate Freshness Advice
                  </div>
                  
                  <h3 className="font-black text-xl uppercase mb-3 text-amber-900 flex items-center gap-2">
                    ☀️ Specialty Coffee Preservation Advisory
                  </h3>
                  
                  <p className="text-sm font-semibold text-neutral-800 leading-relaxed mb-4">
                    Roasted specialty coffee beans are extremely sensitive to temperature variations and moisture. Under elevated temperatures, lipid oils migrate to the surface of the beans and oxidize rapidly, volatilizing crucial floral and fruit aromatics, resulting in flat, starchy taste profiles. A high-efficiency one-way degassing valve and air-tight resealable zipper are essential to relieve CO2 bloating without letting oxygen spoil the roast integrity.
                  </p>

                  <div className="border-t-2 border-amber-200/50 pt-4 text-xs font-semibold text-neutral-700 space-y-2">
                    <p><strong>結構 A（極致阻隔防護 - 推薦）：</strong>Matte BOPP + Pure AL + Food-Grade PE（厚度 130μ）</p>
                    <p>特點：純鋁箔核心層，提供接近 0 的透氧率（OTR）與透濕率（WVTR）。能完全阻隔陽光直射及高溫對熟豆油分的影響，最大程度延長保質期。</p>
                  </div>
                </div>

                <div className="grid sm:grid-cols-3 gap-4">
                  <div className="border-2 border-black p-4 bg-white flex flex-col justify-between">
                    <h4 className="font-bold text-xs uppercase text-neutral-500 mb-2">1. One-Sided Zipper</h4>
                    <p className="text-xs text-neutral-600 font-semibold leading-relaxed">
                      Easy, airtight seal fitted on one-side to block air entry after retail opening.
                    </p>
                  </div>
                  <div className="border-2 border-black p-4 bg-white flex flex-col justify-between">
                    <h4 className="font-bold text-xs uppercase text-neutral-500 mb-2">2. Degassing Valve</h4>
                    <p className="text-xs text-neutral-600 font-semibold leading-relaxed">
                      Welded one-way degassing valve vents built-up roasting CO2 gases safely.
                    </p>
                  </div>
                  <div className="border-2 border-black p-4 bg-white flex flex-col justify-between">
                    <h4 className="font-bold text-xs uppercase text-neutral-500 mb-2">3. Flat Bottom 3D</h4>
                    <p className="text-xs text-neutral-600 font-semibold leading-relaxed">
                      Premium structural box bottom ensures perfect vertical shelf stance.
                    </p>
                  </div>
                </div>
              </div>

              <div className="md:col-span-5 bg-neutral-900 text-white border-4 border-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] flex flex-col justify-between">
                <div>
                  <div className="flex gap-2 mb-6 font-['JetBrains_Mono'] text-[10px] font-black">
                    {[
                      { id: 'high-barrier', label: 'STRUCTURE A', color: 'bg-amber-400 border-amber-400 text-black' },
                      { id: 'recyclable', label: 'STRUCTURE B', color: 'bg-[#00FFFF] border-[#00FFFF] text-black' },
                      { id: 'compostable', label: 'STRUCTURE C', color: 'bg-emerald-500 border-emerald-500 text-white' }
                    ].map((mat) => (
                      <button
                        key={mat.id}
                        type="button"
                        onClick={() => setActiveMaterial(mat.id as any)}
                        className={`px-2 py-1.5 border transition-all ${
                          activeMaterial === mat.id 
                            ? mat.color 
                            : 'border-neutral-700 text-neutral-400 hover:text-white hover:border-neutral-500'
                        }`}
                      >
                        {mat.label}
                      </button>
                    ))}
                  </div>

                  <div className="space-y-4">
                    <div>
                      <span className="text-[10px] text-neutral-400 font-['JetBrains_Mono'] uppercase tracking-wider">
                        {materialSpecs[activeMaterial].chineseName}
                      </span>
                      <h3 className="text-lg font-black uppercase text-white mt-1 leading-tight">
                        {materialSpecs[activeMaterial].name}
                      </h3>
                      <p className="text-xs font-['JetBrains_Mono'] text-neutral-300 font-bold mt-1 bg-neutral-800 p-2 inline-block rounded border border-neutral-700">
                        {materialSpecs[activeMaterial].structure}
                      </p>
                    </div>

                    <p className="text-xs text-neutral-300 leading-relaxed font-semibold bg-neutral-850 p-3 rounded border border-neutral-800">
                      {materialSpecs[activeMaterial].features}
                    </p>

                    <div className="grid grid-cols-2 gap-4 border-t border-neutral-800 pt-4 text-xs font-semibold">
                      <div>
                        <span className="text-neutral-500 uppercase block text-[9px] tracking-wider">OTR Oxygen Barrier:</span>
                        <span className="text-white font-bold">{materialSpecs[activeMaterial].otr}</span>
                      </div>
                      <div>
                        <span className="text-neutral-500 uppercase block text-[9px] tracking-wider">WVTR Vapor Barrier:</span>
                        <span className="text-white font-bold">{materialSpecs[activeMaterial].wvtr}</span>
                      </div>
                      <div>
                        <span className="text-neutral-500 uppercase block text-[9px] tracking-wider">Avg Shelf Life:</span>
                        <span className="text-white font-bold">{materialSpecs[activeMaterial].shelflife}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="border-t border-neutral-800 pt-4 mt-6 text-[9px] text-[#D4FF00] font-['JetBrains_Mono'] uppercase tracking-wider font-bold">
                  ⚙️ Eco Certification: {materialSpecs[activeMaterial].ecoRating}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Matrix Tables */}
        <section className="py-20 border-b-4 border-black bg-neutral-100 font-['Space_Grotesk']">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <NeoBadge color="cyan">PaaS_DIGITAL_PRICING</NeoBadge>
              <h2 className="font-black text-3xl md:text-5xl uppercase tracking-tight mt-4">
                B2B Custom Digital Printing Matrices
              </h2>
              <p className="text-sm text-neutral-600 font-semibold mt-2">
                Compare exact B2B digital printing price rates per design. No cylinder setup plate cost. Fully featured with one-sided zipper and degassing valve.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              <div className="border-4 border-black bg-white p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] relative overflow-hidden">
                <div className="absolute top-0 right-0 bg-[#00FFFF] border-b-4 border-l-4 border-black px-3 py-1 font-['JetBrains_Mono'] text-[9px] font-black uppercase">
                  Option B: Recyclable
                </div>

                <h3 className="font-black text-2xl uppercase mb-1">Structure B Matrix</h3>
                <p className="text-xs text-neutral-500 mb-6 uppercase font-bold">120μ Mono-PE + EVOH + PE (Curb-side recycle-ready)</p>

                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="border-b-4 border-black bg-neutral-50 font-['JetBrains_Mono'] text-[10px] uppercase font-bold text-neutral-700">
                        <th className="py-3 px-2">Quantity</th>
                        <th className="py-3 px-2">150g USD</th>
                        <th className="py-3 px-2">250g USD</th>
                        <th className="py-3 px-2">500g USD</th>
                        <th className="py-3 px-2">1kg USD</th>
                      </tr>
                    </thead>
                    <tbody className="font-['JetBrains_Mono'] text-xs font-semibold text-neutral-800">
                      {[
                        { qty: '100 pcs', rates: [11.78, 12.96, 14.14, 16.49] },
                        { qty: '500 pcs', rates: [2.65, 2.92, 3.18, 3.71] },
                        { qty: '1000 pcs', rates: [1.71, 1.88, 2.05, 2.39] },
                        { qty: '2000 pcs', rates: [1.15, 1.27, 1.38, 1.61] },
                        { qty: '5000 pcs', rates: [0.74, 0.81, 0.89, 1.04] }
                      ].map((row, idx) => (
                        <tr 
                          key={idx} 
                          className={`border-b-2 border-black hover:bg-neutral-50 transition-colors ${
                            selectedQty === parseInt(row.qty) ? 'bg-[#00FFFF]/10 font-bold' : ''
                          }`}
                        >
                          <td className="py-3 px-2 font-black uppercase text-[10px]">{row.qty}</td>
                          <td className="py-3 px-2">${row.rates[0].toFixed(2)}</td>
                          <td className="py-3 px-2">${row.rates[1].toFixed(2)}</td>
                          <td className="py-3 px-2">${row.rates[2].toFixed(2)}</td>
                          <td className="py-3 px-2">${row.rates[3].toFixed(2)}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="border-4 border-black bg-white p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] relative overflow-hidden">
                <div className="absolute top-0 right-0 bg-[#D4FF00] border-b-4 border-l-4 border-black px-3 py-1 font-['JetBrains_Mono'] text-[9px] font-black uppercase">
                  Option C: Compostable
                </div>

                <h3 className="font-black text-2xl uppercase mb-1">Structure C Matrix</h3>
                <p className="text-xs text-neutral-500 mb-6 uppercase font-bold">125μ FSC Kraft + VM-Cello + PBAT (Home backyard compostable)</p>

                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="border-b-4 border-black bg-neutral-50 font-['JetBrains_Mono'] text-[10px] uppercase font-bold text-neutral-700">
                        <th className="py-3 px-2">Quantity</th>
                        <th className="py-3 px-2">150g USD</th>
                        <th className="py-3 px-2">250g USD</th>
                        <th className="py-3 px-2">500g USD</th>
                        <th className="py-3 px-2">1kg USD</th>
                      </tr>
                    </thead>
                    <tbody className="font-['JetBrains_Mono'] text-xs font-semibold text-neutral-800">
                      {[
                        { qty: '100 pcs', rates: [15.31, 16.85, 18.38, 21.44] },
                        { qty: '500 pcs', rates: [3.45, 3.80, 4.14, 4.82] },
                        { qty: '1000 pcs', rates: [2.22, 2.44, 2.67, 3.11] },
                        { qty: '2000 pcs', rates: [1.50, 1.65, 1.79, 2.09] },
                        { qty: '5000 pcs', rates: [0.96, 1.05, 1.16, 1.35] }
                      ].map((row, idx) => (
                        <tr 
                          key={idx} 
                          className={`border-b-2 border-black hover:bg-neutral-50 transition-colors ${
                            selectedQty === parseInt(row.qty) ? 'bg-[#D4FF00]/10 font-bold' : ''
                          }`}
                        >
                          <td className="py-3 px-2 font-black uppercase text-[10px]">{row.qty}</td>
                          <td className="py-3 px-2">${row.rates[0].toFixed(2)}</td>
                          <td className="py-3 px-2">${row.rates[1].toFixed(2)}</td>
                          <td className="py-3 px-2">${row.rates[2].toFixed(2)}</td>
                          <td className="py-3 px-2">${row.rates[3].toFixed(2)}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Hacking zero plate fees */}
        <section className="py-24 bg-white border-b-4 border-black font-['Space_Grotesk']">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <div className="grid lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-6 grid sm:grid-cols-2 gap-6">
                <div className="border-4 border-black p-6 bg-neutral-50 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] text-center relative overflow-hidden group">
                  <div className="absolute top-2 right-2 bg-black text-[#D4FF00] text-[8px] font-black px-1.5 py-0.5 uppercase">
                    Option 1
                  </div>
                  <div className="w-16 h-28 mx-auto border-2 border-black bg-white rounded flex flex-col justify-between p-1.5 relative overflow-hidden mb-4">
                    <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-4 border-x border-black bg-[#A855F7]" />
                    <div className="relative z-10 bg-white border border-black p-1 shadow-[1px_1px_0px_rgba(0,0,0,1)] w-[50px] mx-auto mt-8 transform rotate-1">
                      <div className="text-[5px] font-black leading-none text-left">POUCH.ECO</div>
                      <div className="text-[4px] font-black text-white px-0.5 inline-block mt-0.5" style={{ backgroundColor: '#A855F7' }}>
                        Karijini
                      </div>
                    </div>
                  </div>
                  <h4 className="font-black text-lg uppercase mb-2">Vibrant Elastic Band Strip</h4>
                  <p className="text-xs text-neutral-600 font-semibold leading-relaxed">
                    A high-elastic colored rubber/fabric strip wraps around a white/kraft stock flat bottom bag. Secures a customizable, premium roast name card tightly to the front. Swap card colors to identify light, medium, or decaf blends in a second!
                  </p>
                </div>

                <div className="border-4 border-black p-6 bg-neutral-50 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] text-center relative overflow-hidden group">
                  <div className="absolute top-2 right-2 bg-black text-[#00FFFF] text-[8px] font-black px-1.5 py-0.5 uppercase">
                    Option 2
                  </div>
                  <div className="w-16 h-28 mx-auto border-2 border-black bg-white rounded flex flex-col justify-between p-1.5 relative overflow-hidden mb-4">
                    <div className="absolute top-8 left-1.5 w-1 h-1 border-b border-r border-black" />
                    <div className="absolute top-8 right-1.5 w-1 h-1 border-b border-l border-black" />
                    <div className="absolute bottom-6 left-1.5 w-1 h-1 border-t border-r border-black" />
                    <div className="absolute bottom-6 right-1.5 w-1 h-1 border-t border-l border-black" />
                    <div className="bg-neutral-50 border border-black p-1 w-[54px] mx-auto mt-8 shadow-[1px_1px_0px_rgba(0,0,0,0.15)]">
                      <div className="text-[4px] font-black leading-none text-center">POUCH.ECO</div>
                      <div className="text-[4px] text-emerald-600 font-black text-center mt-0.5">
                        Barrga Binya
                      </div>
                    </div>
                  </div>
                  <h4 className="font-black text-lg uppercase mb-2">Built-in Corner Card Slots</h4>
                  <p className="text-xs text-neutral-600 font-semibold leading-relaxed">
                    The front face of the stock pouch is pre-diecut with four precision corner slots. Simply slide custom-printed blend cards in. The card stays completely flat, and gives an extremely rustic, boutique artisan appearance.
                  </p>
                </div>
              </div>

              <div className="lg:col-span-6 space-y-6">
                <NeoBadge color="magenta">ZERO_SETUP_STARTUP_HACK</NeoBadge>
                
                <h2 className="font-black text-4xl md:text-5xl uppercase tracking-tighter leading-none text-black">
                  Dodge Setup Cylinder Costs Entirely
                </h2>

                <p className="font-semibold text-neutral-700 leading-relaxed text-sm">
                  For young brands launch-testing their brand, running 4 different full custom-printed digital pouches (Pippingarra, Barrga Binya, Karijini, Cooya Pooya) can be expensive. Pouch.eco introduces a genius packaging hack: buy standard Matte White or Kraft stock flat-bottom pouches in bulk, and attachment print coffee roast blend name cards.
                </p>

                <div className="border-l-4 border-[#FF00FF] pl-4 space-y-3 font-['JetBrains_Mono'] text-xs font-bold text-neutral-700">
                  <div className="flex gap-2">
                    <span className="text-[#FF00FF]">✓</span> 
                    <span><strong>Zero plate costs:</strong> Attach name cards tightly to differentiate blends.</span>
                  </div>
                  <div className="flex gap-2">
                    <span className="text-[#FF00FF]">✓</span> 
                    <span><strong>Ultra Low MoQ:</strong> Share 1,000 blank pouches across all blends. Just print separate cards!</span>
                  </div>
                  <div className="flex gap-2">
                    <span className="text-[#FF00FF]">✓</span> 
                    <span><strong>Artisan shelf appeal:</strong> Tucked paper cards convey handcrafted attention to detail.</span>
                  </div>
                </div>

                <div className="pt-2 flex flex-col sm:flex-row gap-4">
                  <button
                    type="button"
                    onClick={() => setVariationMethod('card-strip')}
                    className="px-6 py-3 border-2 border-black bg-neutral-900 text-white font-black text-xs uppercase hover:bg-neutral-800 shadow-[4px_4px_0px_rgba(0,0,0,1)] active:translate-y-0.5"
                  >
                    Test Elastic Strip Preview
                  </button>
                  <button
                    type="button"
                    onClick={() => setVariationMethod('card-slot')}
                    className="px-6 py-3 border-2 border-black bg-white text-black font-black text-xs uppercase hover:bg-neutral-50 shadow-[4px_4px_0px_rgba(0,0,0,1)] active:translate-y-0.5"
                  >
                    Test Card-Slot Preview
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Subscription tiers */}
        <section className="py-24 border-b-4 border-black bg-neutral-50 font-['Space_Grotesk']">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <NeoBadge color="lime">PaaS_SUBSCRIPTION_PLANS</NeoBadge>
              <h2 className="font-black text-4xl md:text-6xl uppercase tracking-tight mt-4">
                PaaS Subscription Tiers
              </h2>
              <p className="text-lg text-neutral-700 font-semibold mt-2">
                Packaging-as-a-Service is styled like a premium SaaS. We provide the fully-coded website, premium custom pouches, and marketing assets—all you need to do is provide your product!
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              <div className="border-4 border-black bg-white p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] flex flex-col justify-between hover:-translate-y-1.5 transition-transform">
                <div className="space-y-6">
                  <div className="flex justify-between items-center">
                    <NeoBadge color="lime">Starter Track</NeoBadge>
                    <span className="font-['JetBrains_Mono'] text-neutral-400 text-xs font-black">// TIER_01</span>
                  </div>

                  <div>
                    <h3 className="font-black text-3xl uppercase text-black leading-none">PaaS Bootstrap</h3>
                    <p className="text-xs text-neutral-500 mt-1 uppercase font-bold">Blank Pouches + Blend Name Cards</p>
                  </div>

                  <div className="border-y-4 border-dashed border-black py-4">
                    <div className="text-3xl font-black font-['JetBrains_Mono'] text-black">
                      $1.50 <span className="text-xs font-bold text-neutral-500">/ bag unit</span>
                    </div>
                    <p className="text-[10px] text-neutral-500 font-bold uppercase mt-1">Min run quantity: 100 bags (mix blends)</p>
                  </div>

                  <ul className="space-y-2.5 text-xs font-semibold text-neutral-700">
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-emerald-500 stroke-[3] flex-shrink-0" /> Blank premium flat bottom pouches
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-emerald-500 stroke-[3] flex-shrink-0" /> Custom roast cards (4 blend color templates)
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-emerald-500 stroke-[3] flex-shrink-0" /> Choice of elastic bands or pre-cut slots
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-emerald-500 stroke-[3] flex-shrink-0" /> <strong>Free Shopify landing page setup</strong>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-emerald-500 stroke-[3] flex-shrink-0" /> <strong>Free 3D visual mock-ups</strong>
                    </li>
                    <li className="flex items-center gap-2 font-bold text-black bg-[#D4FF00]/20 px-2 py-0.5 border border-dashed border-[#D4FF00] inline-block rounded">
                      👉 Just provide roasted coffee product!
                    </li>
                  </ul>
                </div>

                <div className="pt-8">
                  <a
                    href="https://calendly.com/30-min-free-packaging-consultancy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-black text-[#D4FF00] border-2 border-black font-black uppercase text-xs py-3 px-6 text-center hover:bg-neutral-800 transition-colors shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:translate-y-0.5 inline-block"
                  >
                    Subscribe Bootstrap Track
                  </a>
                </div>
              </div>

              <div className="border-4 border-black bg-white p-8 shadow-[12px_12px_0px_0px_rgba(214,255,0,1)] border-t-[#D4FF00] flex flex-col justify-between hover:-translate-y-1.5 transition-transform relative">
                <div className="absolute -top-3.5 left-6 bg-black text-[#D4FF00] border-2 border-black text-[9px] font-black uppercase px-2 py-0.5 tracking-widest shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                  🔥 POPULAR ACCELERATOR CHOICE
                </div>
                
                <div className="space-y-6">
                  <div className="flex justify-between items-center">
                    <NeoBadge color="cyan">Growth Track</NeoBadge>
                    <span className="font-['JetBrains_Mono'] text-neutral-400 text-xs font-black">// TIER_02</span>
                  </div>

                  <div>
                    <h3 className="font-black text-3xl uppercase text-black leading-none">PaaS Bespoke</h3>
                    <p className="text-xs text-neutral-500 mt-1 uppercase font-bold">100% Custom Edge-to-Edge Print</p>
                  </div>

                  <div className="border-y-4 border-dashed border-black py-4">
                    <div className="text-3xl font-black font-['JetBrains_Mono'] text-emerald-600">
                      From $1.15 <span className="text-xs font-bold text-neutral-500">/ unit (Option B)</span>
                    </div>
                    <p className="text-[10px] text-neutral-500 font-bold uppercase mt-1">Plate Cylinder Setup Cost: $0 Free</p>
                  </div>

                  <ul className="space-y-2.5 text-xs font-semibold text-neutral-700">
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-emerald-500 stroke-[3] flex-shrink-0" /> Full digital printing (Structures B & C)
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-emerald-500 stroke-[3] flex-shrink-0" /> High-barrier EVOH or certified Compostable
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-emerald-500 stroke-[3] flex-shrink-0" /> Custom color side-gusset outline work
                    </li>
                    <li className="flex items-center gap-2 text-emerald-700 font-black">
                      <Check className="w-4 h-4 text-emerald-500 stroke-[3] flex-shrink-0" /> <strong>Free Custom Shopify & subscriptions</strong>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-emerald-500 stroke-[3] flex-shrink-0" /> <strong>Free hyper-premium 3D mockup assets</strong>
                    </li>
                    <li className="flex items-center gap-2 font-bold text-black bg-[#D4FF00]/20 px-2 py-0.5 border border-dashed border-[#D4FF00] inline-block rounded">
                      👉 Just provide roasted coffee product!
                    </li>
                  </ul>
                </div>

                <div className="pt-8">
                  <a
                    href="https://calendly.com/30-min-free-packaging-consultancy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-[#D4FF00] text-black border-2 border-black font-black uppercase text-xs py-3 px-6 text-center hover:bg-[#bce000] transition-colors shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:translate-y-0.5 inline-block"
                  >
                    Configure Custom Order
                  </a>
                </div>
              </div>

              <div className="border-4 border-black bg-white p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] flex flex-col justify-between hover:-translate-y-1.5 transition-transform">
                <div className="space-y-6">
                  <div className="flex justify-between items-center">
                    <NeoBadge color="magenta">Enterprise Track</NeoBadge>
                    <span className="font-['JetBrains_Mono'] text-neutral-400 text-xs font-black">// TIER_03</span>
                  </div>

                  <div>
                    <h3 className="font-black text-3xl uppercase text-black leading-none">PaaS Scale</h3>
                    <p className="text-xs text-neutral-500 mt-1 uppercase font-bold">Wholesale Gravure Volume runs</p>
                  </div>

                  <div className="border-y-4 border-dashed border-black py-4">
                    <div className="text-3xl font-black font-['JetBrains_Mono'] text-black">
                      Lowest unit price <span className="text-xs font-bold text-[#FF00FF]">From $0.74</span>
                    </div>
                    <p className="text-[10px] text-neutral-500 font-bold uppercase mt-1">Run quantity: 5,000+ bags</p>
                  </div>

                  <ul className="space-y-2.5 text-xs font-semibold text-neutral-700">
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-emerald-500 stroke-[3] flex-shrink-0" /> Embossed metallics or spot gloss varnishes
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-emerald-500 stroke-[3] flex-shrink-0" /> Lowest wholesale unit overhead
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-emerald-500 stroke-[3] flex-shrink-0" /> Premium rotogravure wholesale quality
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-emerald-500 stroke-[3] flex-shrink-0" /> <strong>Free Custom Enterprise Store setup</strong>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-emerald-500 stroke-[3] flex-shrink-0" /> Full video press kits & social templates
                    </li>
                    <li className="flex items-center gap-2 font-bold text-black bg-[#D4FF00]/20 px-2 py-0.5 border border-dashed border-[#D4FF00] inline-block rounded">
                      👉 Just provide roasted coffee product!
                    </li>
                  </ul>
                </div>

                <div className="pt-8">
                  <a
                    href="https://calendly.com/30-min-free-packaging-consultancy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-black text-white border-2 border-black font-black uppercase text-xs py-3 px-6 text-center hover:bg-neutral-800 transition-colors shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:translate-y-0.5 inline-block"
                  >
                    Contact Enterprise Desk
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 1-on-1 brand accelerator */}
        <section className="py-24 bg-white border-b-4 border-black font-['Space_Grotesk']">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
              <div className="max-w-2xl">
                <NeoBadge color="lime">ONE-STOP_ACCELERATION_PROGRAM</NeoBadge>
                <h2 className="font-black text-4xl md:text-6xl uppercase tracking-tight mt-4">
                  1-ON-1 BRAND ACCELERATOR SERVICES
                </h2>
                <p className="text-lg text-neutral-600 font-semibold mt-2">
                  We do not just supply bags. Pouch.eco provides a full suite of brand launching services for our B2B customers—100% FREE.
                </p>
              </div>
              <ShoppingBag className="hidden md:block w-16 h-16 text-neutral-400 rotate-12" />
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="border-4 border-black p-6 bg-neutral-50 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:rotate-1 transition-transform">
                <div className="w-12 h-12 border-2 border-black bg-white rounded flex items-center justify-center font-bold text-2xl shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] mb-6">
                  💻
                </div>
                <h3 className="font-black text-2xl uppercase mb-3">Free Website Setup</h3>
                <p className="text-xs font-semibold text-neutral-600 leading-relaxed mb-6">
                  We will create a free high-converting Shopify or custom landing page mapped specifically for your coffee brand's retail and subscription channels. Let our dev team build your digital shop.
                </p>
                <span className="font-['JetBrains_Mono'] text-[10px] font-black text-primary-600 uppercase bg-[#D4FF00] px-2 py-0.5 border border-black shadow-[1px_1px_0px_0px_rgba(0,0,0,1)]">
                  VALUE: $1,200 (FREE)
                </span>
              </div>

              <div className="border-4 border-black p-6 bg-neutral-50 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:-rotate-1 transition-transform">
                <div className="w-12 h-12 border-2 border-black bg-white rounded flex items-center justify-center font-bold text-2xl shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] mb-6">
                  🎨
                </div>
                <h3 className="font-black text-2xl uppercase mb-3">Free 3D Mock-up Setup</h3>
                <p className="text-xs font-semibold text-neutral-600 leading-relaxed mb-6">
                  Stop using generic flat images. We provide realistic, hyper-premium 3D visual mockups of your customized coffee pouches resting in studio lighting environments, optimized for social media.
                </p>
                <span className="font-['JetBrains_Mono'] text-[10px] font-black text-primary-600 uppercase bg-[#00FFFF] px-2 py-0.5 border border-black shadow-[1px_1px_0px_0px_rgba(0,0,0,1)]">
                  VALUE: $450 (FREE)
                </span>
              </div>

              <div className="border-4 border-black p-6 bg-neutral-50 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:rotate-1 transition-transform">
                <div className="w-12 h-12 border-2 border-black bg-white rounded flex items-center justify-center font-bold text-2xl shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] mb-6">
                  📐
                </div>
                <h3 className="font-black text-2xl uppercase mb-3">Free Prepress Layouts</h3>
                <p className="text-xs font-semibold text-neutral-600 leading-relaxed mb-6">
                  Our in-house design specialists will layout your custom graphics, checking all fold marks, side gusset borders, bleed clearances, pocket zippers, and valve positions to guarantee flawless prints.
                </p>
                <span className="font-['JetBrains_Mono'] text-[10px] font-black text-primary-600 uppercase bg-[#FF00FF] text-white px-2 py-0.5 border border-black shadow-[1px_1px_0px_0px_rgba(0,0,0,1)]">
                  VALUE: $350 (FREE)
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Lead Capture Form */}
        <section className="py-24 bg-gradient-to-r from-neutral-900 to-neutral-800 text-white border-b-4 border-black font-['Space_Grotesk']">
          <div className="max-w-5xl mx-auto px-4 md:px-6">
            <div className="grid md:grid-cols-12 gap-12 items-center">
              <div className="md:col-span-7 space-y-6">
                <div className="inline-flex items-center gap-1 text-[10px] font-black tracking-widest text-[#D4FF00] uppercase font-['JetBrains_Mono']">
                  <Download className="w-3.5 h-3.5 animate-bounce" /> INSTANT KICKSTART DOWNLOAD
                </div>
                
                <h2 className="font-black text-4xl md:text-5xl uppercase tracking-tighter leading-none">
                  GET THE PaaS COFFEE<br/>
                  STARTUP ACCELERATOR GUIDE
                </h2>

                <p className="text-base text-neutral-300 font-semibold leading-relaxed">
                  Download the verified, comprehensive Pouch.eco Coffee Brand Accelerator Guide containing the exact lamination layers formula, pouch side gussets artwork dieline vectors, and zero setup card variation guides.
                </p>

                <div className="border-l-4 border-[#D4FF00] pl-4 space-y-2 text-xs font-['JetBrains_Mono'] font-bold text-neutral-300">
                  <div>// Guide Format: UTF-8 Document (Highly Detailed Technical Specifications)</div>
                  <div>// Compiled by: Ryan Wong, Biopolymer Pouch Engineer</div>
                  <div>// Content: Western Australia climate advisory & attached card template blueprints</div>
                </div>
              </div>

              <div className="md:col-span-5">
                <AnimatePresence mode="wait">
                  {!downloadSuccess ? (
                    <motion.form
                      key="lead-form"
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -15 }}
                      onSubmit={handleEmailSubmit}
                      className="border-4 border-[#D4FF00] bg-black p-6 shadow-[8px_8px_0px_0px_#D4FF00] space-y-4"
                    >
                      <h3 className="font-black text-xl uppercase tracking-tight text-[#D4FF00] mb-2">
                        Unlock Accelerator Guide
                      </h3>

                      <div>
                        <label className="block text-[10px] font-bold uppercase tracking-wider text-neutral-400 mb-1">
                          Corporate Email Address
                        </label>
                        <div className="relative">
                          <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4.5 h-4.5 text-neutral-500" />
                          <input
                            type="email"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="e.g. founder@yourcoffeeco.com"
                            className="w-full bg-neutral-900 border-2 border-neutral-700 pl-10 pr-4 py-3 font-['JetBrains_Mono'] text-sm text-white focus:outline-none focus:border-[#D4FF00] focus:ring-1 focus:ring-[#D4FF00]"
                          />
                        </div>
                      </div>

                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-[#D4FF00] text-black font-black uppercase text-sm py-4 border-2 border-black hover:bg-[#bce000] active:translate-y-0.5 transition-colors flex items-center justify-center gap-2 cursor-pointer"
                      >
                        {isSubmitting ? (
                          <div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin" />
                        ) : (
                          <>
                            <Download className="w-4 h-4" /> Download PaaS Guide
                          </>
                        )}
                      </button>

                      <p className="text-[9px] text-neutral-500 font-semibold text-center">
                        We value privacy. Your email will be logged to verify dieline download permissions.
                      </p>
                    </motion.form>
                  ) : (
                    <motion.div
                      key="success-card"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="border-4 border-[#10B981] bg-black p-6 shadow-[8px_8px_0px_0px_#10B981] space-y-6 text-center"
                    >
                      <div className="w-12 h-12 rounded-full bg-emerald-500/10 border-2 border-emerald-500 flex items-center justify-center mx-auto text-emerald-500">
                        <CheckCircle className="w-6 h-6" />
                      </div>

                      <div className="space-y-2">
                        <h3 className="font-black text-2xl uppercase tracking-tight text-white">
                          DOWNLOAD STARTED!
                        </h3>
                        <p className="text-xs text-neutral-300 font-semibold leading-relaxed">
                          We have automatically generated and triggered the download for <span className="text-[#10B981] font-bold">Pouch_Eco_PaaS_Accelerator_Guide.txt</span> in your browser.
                        </p>
                      </div>

                      <div className="bg-neutral-900 border border-neutral-800 p-3 text-[10px] text-neutral-400 font-['JetBrains_Mono'] leading-relaxed">
                        Logged email: <span className="text-white font-bold">{email}</span>. Click the button below if your browser did not start the download automatically.
                      </div>

                      <div className="space-y-2 pt-2">
                        <button
                          type="button"
                          onClick={triggerPDFDownload}
                          className="w-full bg-neutral-900 border-2 border-neutral-700 text-white font-bold text-xs py-2 hover:bg-neutral-800 transition"
                        >
                          [Manually Re-Download]
                        </button>
                        
                        <NeoButton variant="primary" to="/store" className="w-full text-xs !py-3">
                          Visit Pouch Store
                        </NeoButton>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </section>

      </PouchLayout>
    )
  }

  // B2B ACHIEVEPACK CORPORATE SANS-SERIF RENDER
  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-800 font-sans selection:bg-purple-500 selection:text-white">
      <Helmet>
        <title>PaaS B2B Coffee Brand Accelerator Suite | Subscription | Achieve Pack</title>
        <meta name="description" content="Launch your specialty coffee brand with Achieve Pack Packaging-as-a-Service (PaaS). Get custom flat-bottom degassing valve pouches, 100% free Shopify website builds, and premium 3D brand assets." />
        <link rel="canonical" href="https://achievepack.com/coffee" />
      </Helmet>

      <SiteHeader />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-[#0f172a] via-[#1e1b4b] to-[#0f172a] text-white overflow-hidden relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.15)_0%,transparent_70%)] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            {/* Left: Info */}
            <div className="lg:col-span-7 space-y-6">
              <B2bBadge variant="accent">
                <Sparkles className="w-3.5 h-3.5 inline mr-1 animate-spin-slow text-cyan-600" />
                PACKAGING-AS-A-SERVICE // PaaS STARTER SUITE
              </B2bBadge>
              
              <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight uppercase font-['Outfit']">
                Launch Your Coffee Brand<br/>
                with <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400">PaaS Accelerator</span>
              </h1>
              
              <p className="text-neutral-300 text-lg leading-relaxed max-w-2xl">
                A complete specialty coffee launch solution styled like a premium SaaS pricing model. We provide custom printed degassing-valve flat bottom pouches, free high-converting Shopify store builds, and photorealistic 3D brand renders. All you need to do is provide your roasted product!
              </p>

              <div className="flex flex-wrap gap-3 font-mono text-xs">
                <span className="bg-white/10 px-3 py-1.5 rounded-lg border border-white/10">☕ Low MOQ: 100 Bags / Blend</span>
                <span className="bg-white/10 px-3 py-1.5 rounded-lg border border-white/10">⚡ Prepress setup fee: $0</span>
                <span className="bg-emerald-500/10 text-emerald-400 px-3 py-1.5 rounded-lg border border-emerald-500/20">🌱 100% Home Compostable Option</span>
              </div>

              <div className="flex flex-wrap gap-4 pt-4">
                <a
                  href="https://calendly.com/30-min-free-packaging-consultancy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-3.5 font-bold rounded-xl text-center shadow-lg bg-purple-600 hover:bg-purple-700 text-white transition-all transform hover:-translate-y-0.5"
                >
                  Book Packaging Call
                </a>
                <button
                  type="button"
                  onClick={() => {
                    const el = document.getElementById('b2b-calc')
                    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'center' })
                  }}
                  className="px-6 py-3.5 font-semibold rounded-xl text-center border border-white/20 bg-white/5 hover:bg-white/10 text-white transition-all"
                >
                  Configure Bag Price
                </button>
              </div>
            </div>

            {/* Right: Immersive Interactive Selector Card */}
            <div className="lg:col-span-5" id="b2b-calc">
              <div 
                ref={heroCardRef}
                onMouseMove={handleMouseMove}
                onMouseLeave={() => setTilt({ x: 0, y: 0 })}
                style={{ 
                  transform: `perspective(1000px) rotateX(${tilt.y}deg) rotateY(${tilt.x}deg)`,
                  transition: 'transform 0.15s ease'
                }}
                className="bg-white text-neutral-850 p-6 rounded-3xl border border-neutral-200 shadow-2xl relative overflow-hidden"
              >
                <div 
                  className="absolute right-0 top-0 bottom-0 w-4 transition-colors duration-500"
                  style={{ backgroundColor: selectedBlend.hex }}
                />

                <div className="flex justify-between items-start mb-6">
                  <div>
                    <B2bBadge variant="primary">PaaS_CONFIGURATOR</B2bBadge>
                    <h2 className="text-xl font-bold uppercase text-neutral-850 mt-1">Telemetry Visualizer</h2>
                  </div>
                  <Coffee className="w-6 h-6 text-neutral-800 animate-bounce" />
                </div>

                <PouchVisualizerElement />

                <div className="space-y-4 text-xs font-semibold">
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-neutral-500 mb-2">
                      1. Select Roast Blend & Gusset Accent
                    </label>
                    <div className="grid grid-cols-2 gap-2">
                      {BLENDS.map((blend) => (
                        <button
                          key={blend.id}
                          type="button"
                          onClick={() => setSelectedBlend(blend)}
                          className={`border p-2 rounded-xl text-left transition-all flex items-center justify-between ${
                            selectedBlend.id === blend.id 
                              ? 'bg-neutral-900 border-neutral-900 text-white shadow-md' 
                              : 'bg-white border-neutral-200 hover:bg-neutral-50 text-neutral-800'
                          }`}
                        >
                          <div>
                            <div className="font-bold text-xs leading-none mb-1">{blend.name}</div>
                            <div className="text-[9px] opacity-80 leading-none">{blend.roast}</div>
                          </div>
                          <span 
                            className="w-3 h-3 rounded-full border border-neutral-300" 
                            style={{ backgroundColor: blend.hex }}
                          />
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-neutral-500 mb-2">
                      2. Select Customization Method
                    </label>
                    <div className="grid grid-cols-3 gap-2">
                      {[
                        { id: 'digital-print', label: 'Full Digital', icon: '🎨' },
                        { id: 'card-strip', label: 'Card Band', icon: '🎗️' },
                        { id: 'card-slot', label: 'Card Slot', icon: '📇' }
                      ].map((method) => (
                        <button
                          key={method.id}
                          type="button"
                          onClick={() => setVariationMethod(method.id as any)}
                          className={`border p-2 rounded-xl text-center transition-all ${
                            variationMethod === method.id 
                              ? 'bg-neutral-900 border-neutral-900 text-white shadow-md' 
                              : 'bg-white border-neutral-200 hover:bg-neutral-50 text-neutral-800'
                          }`}
                        >
                          <div className="text-sm mb-0.5">{method.icon}</div>
                          <div className="font-bold uppercase tracking-tighter leading-none">{method.label}</div>
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-neutral-500 mb-2">
                      3. Select Run Quantity (MOQ 100 pcs)
                    </label>
                    <div className="grid grid-cols-5 gap-1 font-mono text-xs">
                      {[100, 500, 1000, 2000, 5000].map((qty) => (
                        <button
                          key={qty}
                          type="button"
                          onClick={() => setSelectedQty(qty as any)}
                          className={`border py-2 rounded-lg transition-all text-center ${
                            selectedQty === qty 
                              ? 'bg-purple-600 border-purple-600 text-white font-bold shadow-md' 
                              : 'bg-white border-neutral-200 hover:bg-neutral-50 text-neutral-700'
                          }`}
                        >
                          {qty}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-neutral-500 mb-2">
                      4. Select Bag Capacity Size
                    </label>
                    <div className="grid grid-cols-4 gap-1.5 font-mono text-xs">
                      {SIZES.map((size) => (
                        <button
                          key={size.id}
                          type="button"
                          onClick={() => setSelectedSize(size)}
                          className={`border py-2 rounded-lg transition-all text-center ${
                            selectedSize.id === size.id 
                              ? 'bg-cyan-500 border-cyan-500 text-white font-bold shadow-md' 
                              : 'bg-white border-neutral-200 hover:bg-neutral-50 text-neutral-700'
                          }`}
                        >
                          {size.id}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="bg-neutral-900 border border-neutral-800 p-4 text-white rounded-2xl shadow-inner space-y-2">
                    <div className="flex justify-between border-b border-neutral-800 pb-1.5">
                      <span className="uppercase text-neutral-400">// Material Choice:</span>
                      <span className="font-bold text-purple-400">{materialSpecs[activeMaterial].chineseName}</span>
                    </div>
                    <div className="flex justify-between border-b border-neutral-800 pb-1.5">
                      <span className="uppercase text-neutral-400">// Pouch Style & Size:</span>
                      <span className="font-bold font-mono">{selectedSize.dimensions} ({selectedSize.id})</span>
                    </div>
                    <div className="flex justify-between border-b border-neutral-800 pb-1.5">
                      <span className="uppercase text-neutral-400">// Reclosure:</span>
                      <span className="font-bold text-neutral-200">One-sided Zipper + Degassing Valve</span>
                    </div>
                    <div className="flex justify-between items-center text-white border-b border-neutral-800 pb-1.5">
                      <span className="uppercase text-neutral-400">// Unit Price:</span>
                      <span className="font-bold text-xl text-cyan-400 font-mono">{getUnitPrice()}</span>
                    </div>
                    <div className="flex justify-between items-center text-[#D4FF00] pt-1">
                      <span className="uppercase text-neutral-300 font-bold">Total Batch Cost:</span>
                      <span className="font-black text-2xl text-purple-300 font-mono">{getTotalPrice()}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Advisory Specs */}
      <section className="py-20 bg-white border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="flex items-center gap-3 mb-12">
            <B2bBadge variant="warn">CLIMATIC_ADVISORY_REPORT</B2bBadge>
            <h2 className="text-3xl md:text-4xl font-extrabold uppercase tracking-tight">
              Roast Quality Climate Protocol
            </h2>
          </div>

          <div className="grid md:grid-cols-12 gap-8 items-stretch">
            <div className="md:col-span-7 space-y-6">
              <div className="bg-amber-50/50 border border-amber-200 rounded-3xl p-6 relative">
                <div className="absolute top-4 right-4 flex items-center gap-1 bg-amber-100 border border-amber-300 px-2 py-0.5 font-mono text-[9px] font-bold uppercase text-amber-800">
                  <AlertCircle className="w-3.5 h-3.5" /> Climate Advisory
                </div>
                
                <h3 className="font-bold text-lg uppercase mb-3 text-amber-900 flex items-center gap-2">
                  ☀️ Specialty Coffee Freshness Guidelines
                </h3>
                
                <p className="text-sm font-semibold text-neutral-700 leading-relaxed mb-4">
                  Roasted specialty coffee beans are highly susceptible to ambient temperature fluctuations and oxygen. Under elevated heat, crucial aromatic oils migrate to the surface of the beans and oxidize rapidly, volatilizing delicate floral/fruit cupping notes. High-efficiency degassing valves and air-tight resealable zip structures are absolutely mandatory to vent CO2 bloating pressure without allowing external oxygen degradation.
                </p>

                <div className="border-t border-amber-200 pt-4 text-xs font-semibold text-neutral-600 space-y-2">
                  <p><strong>結構 A（極致阻隔防護 - 推薦）：</strong>Matte BOPP + Pure AL + Food-Grade PE（厚度 130μ）</p>
                  <p>特點：純鋁箔核心層，提供接近 0 的透氧率（OTR）與透濕率（WVTR）。能完全阻隔陽光直射及高溫對熟豆油分的影響，最大程度延長保質期。</p>
                </div>
              </div>

              <div className="grid sm:grid-cols-3 gap-4">
                <div className="border border-neutral-200 rounded-2xl p-4 bg-neutral-50 flex flex-col justify-between">
                  <h4 className="font-bold text-xs uppercase text-neutral-500 mb-2">1. One-Sided Zipper</h4>
                  <p className="text-xs text-neutral-600 leading-relaxed">
                    Easy, airtight seal fitted on one-side to block air entry after retail opening.
                  </p>
                </div>
                <div className="border border-neutral-200 rounded-2xl p-4 bg-neutral-50 flex flex-col justify-between">
                  <h4 className="font-bold text-xs uppercase text-neutral-500 mb-2">2. Degassing Valve</h4>
                  <p className="text-xs text-neutral-600 leading-relaxed">
                    Welded one-way degassing valve vents built-up roasting CO2 gases safely.
                  </p>
                </div>
                <div className="border border-neutral-200 rounded-2xl p-4 bg-neutral-50 flex flex-col justify-between">
                  <h4 className="font-bold text-xs uppercase text-neutral-500 mb-2">3. Flat Bottom 3D</h4>
                  <p className="text-xs text-neutral-600 leading-relaxed">
                    Premium structural box bottom ensures perfect vertical shelf stance.
                  </p>
                </div>
              </div>
            </div>

            <div className="md:col-span-5 bg-[#0f172a] text-white border border-neutral-850 rounded-3xl p-6 flex flex-col justify-between shadow-lg">
              <div>
                <div className="flex gap-2 mb-6 font-mono text-[9px] font-bold">
                  {[
                    { id: 'high-barrier', label: 'STRUCTURE A', color: 'bg-amber-400 text-black' },
                    { id: 'recyclable', label: 'STRUCTURE B', color: 'bg-cyan-400 text-black' },
                    { id: 'compostable', label: 'STRUCTURE C', color: 'bg-emerald-500 text-white' }
                  ].map((mat) => (
                    <button
                      key={mat.id}
                      type="button"
                      onClick={() => setActiveMaterial(mat.id as any)}
                      className={`px-2 py-1.5 border rounded-lg transition-all ${
                        activeMaterial === mat.id 
                          ? `${mat.color} border-transparent` 
                          : 'border-neutral-700 text-neutral-400 hover:text-white hover:border-neutral-500'
                      }`}
                    >
                      {mat.label}
                    </button>
                  ))}
                </div>

                <div className="space-y-4">
                  <div>
                    <span className="text-[10px] text-neutral-400 font-mono uppercase tracking-wider">
                      {materialSpecs[activeMaterial].chineseName}
                    </span>
                    <h3 className="text-lg font-bold uppercase text-white mt-1 leading-tight">
                      {materialSpecs[activeMaterial].name}
                    </h3>
                    <p className="text-xs font-mono text-neutral-300 font-bold mt-2 bg-neutral-800 p-2 inline-block rounded border border-neutral-700">
                      {materialSpecs[activeMaterial].structure}
                    </p>
                  </div>

                  <p className="text-xs text-neutral-300 leading-relaxed font-semibold bg-neutral-850 p-3 rounded border border-neutral-800">
                    {materialSpecs[activeMaterial].features}
                  </p>

                  <div className="grid grid-cols-2 gap-4 border-t border-neutral-800 pt-4 text-xs font-semibold">
                    <div>
                      <span className="text-neutral-500 uppercase block text-[9px] tracking-wider">OTR Oxygen Barrier:</span>
                      <span className="text-white font-bold">{materialSpecs[activeMaterial].otr}</span>
                    </div>
                    <div>
                      <span className="text-neutral-500 uppercase block text-[9px] tracking-wider">WVTR Vapor Barrier:</span>
                      <span className="text-white font-bold">{materialSpecs[activeMaterial].wvtr}</span>
                    </div>
                    <div>
                      <span className="text-neutral-500 uppercase block text-[9px] tracking-wider">Avg Shelf Life:</span>
                      <span className="text-white font-bold">{materialSpecs[activeMaterial].shelflife}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="border-t border-neutral-800 pt-4 mt-6 text-[9px] text-[#00FFFF] font-mono uppercase tracking-wider font-bold">
                ⚙️ Eco Certification: {materialSpecs[activeMaterial].ecoRating}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dynamic Tables B2B */}
      <section className="py-20 bg-neutral-100">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <B2bBadge variant="primary">PaaS_DIGITAL_PRICING</B2bBadge>
            <h2 className="text-3xl font-extrabold tracking-tight text-neutral-850 mt-2">
              B2B Custom Digital Printing Matrices
            </h2>
            <p className="text-sm text-neutral-500 font-semibold mt-2">
              Compare exact B2B custom digital printing price rates per design. No cylinder setup plate cost. Fully featured with one-sided zipper and high-efficiency degassing valve.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <div className="bg-white rounded-3xl border border-neutral-200 p-6 shadow-sm relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-[#00FFFF]/20 text-neutral-800 px-3 py-1 font-mono text-[9px] font-bold uppercase rounded-bl-xl border-l border-b border-neutral-200">
                Option B: Recyclable
              </div>

              <h3 className="font-bold text-xl uppercase mb-1">Structure B Matrix</h3>
              <p className="text-xs text-neutral-500 mb-6 uppercase font-bold">120μ Mono-PE + EVOH + PE (Curb-side recycle-ready)</p>

              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-neutral-350 bg-neutral-50 font-mono text-[10px] uppercase font-bold text-neutral-700">
                      <th className="py-3 px-2">Quantity</th>
                      <th className="py-3 px-2">150g USD</th>
                      <th className="py-3 px-2">250g USD</th>
                      <th className="py-3 px-2">500g USD</th>
                      <th className="py-3 px-2">1kg USD</th>
                    </tr>
                  </thead>
                  <tbody className="font-mono text-xs font-semibold text-neutral-800">
                    {[
                      { qty: '100 pcs', rates: [11.78, 12.96, 14.14, 16.49] },
                      { qty: '500 pcs', rates: [2.65, 2.92, 3.18, 3.71] },
                      { qty: '1000 pcs', rates: [1.71, 1.88, 2.05, 2.39] },
                      { qty: '2000 pcs', rates: [1.15, 1.27, 1.38, 1.61] },
                      { qty: '5000 pcs', rates: [0.74, 0.81, 0.89, 1.04] }
                    ].map((row, idx) => (
                      <tr 
                        key={idx} 
                        className={`border-b border-neutral-100 hover:bg-neutral-50 transition-colors ${
                          selectedQty === parseInt(row.qty) ? 'bg-[#00FFFF]/10 font-bold' : ''
                        }`}
                      >
                        <td className="py-3 px-2 font-bold uppercase text-[10px]">{row.qty}</td>
                        <td className="py-3 px-2">${row.rates[0].toFixed(2)}</td>
                        <td className="py-3 px-2">${row.rates[1].toFixed(2)}</td>
                        <td className="py-3 px-2">${row.rates[2].toFixed(2)}</td>
                        <td className="py-3 px-2">${row.rates[3].toFixed(2)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="bg-white rounded-3xl border border-neutral-200 p-6 shadow-sm relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-[#D4FF00]/20 text-neutral-800 px-3 py-1 font-mono text-[9px] font-bold uppercase rounded-bl-xl border-l border-b border-neutral-200">
                Option C: Compostable
              </div>

              <h3 className="font-bold text-xl uppercase mb-1">Structure C Matrix</h3>
              <p className="text-xs text-neutral-500 mb-6 uppercase font-bold">125μ FSC Kraft + VM-Cello + PBAT (Home backyard compostable)</p>

              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-neutral-350 bg-neutral-50 font-mono text-[10px] uppercase font-bold text-neutral-700">
                      <th className="py-3 px-2">Quantity</th>
                      <th className="py-3 px-2">150g USD</th>
                      <th className="py-3 px-2">250g USD</th>
                      <th className="py-3 px-2">500g USD</th>
                      <th className="py-3 px-2">1kg USD</th>
                    </tr>
                  </thead>
                  <tbody className="font-mono text-xs font-semibold text-neutral-800">
                    {[
                      { qty: '100 pcs', rates: [15.31, 16.85, 18.38, 21.44] },
                      { qty: '500 pcs', rates: [3.45, 3.80, 4.14, 4.82] },
                      { qty: '1000 pcs', rates: [2.22, 2.44, 2.67, 3.11] },
                      { qty: '2000 pcs', rates: [1.50, 1.65, 1.79, 2.09] },
                      { qty: '5000 pcs', rates: [0.96, 1.05, 1.16, 1.35] }
                    ].map((row, idx) => (
                      <tr 
                        key={idx} 
                        className={`border-b border-neutral-100 hover:bg-neutral-50 transition-colors ${
                          selectedQty === parseInt(row.qty) ? 'bg-[#D4FF00]/10 font-bold' : ''
                        }`}
                      >
                        <td className="py-3 px-2 font-bold uppercase text-[10px]">{row.qty}</td>
                        <td className="py-3 px-2">${row.rates[0].toFixed(2)}</td>
                        <td className="py-3 px-2">${row.rates[1].toFixed(2)}</td>
                        <td className="py-3 px-2">${row.rates[2].toFixed(2)}</td>
                        <td className="py-3 px-2">${row.rates[3].toFixed(2)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pouch card hacks B2B */}
      <section className="py-24 bg-white border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            {/* Visual simulation of the cards attached to stock pouches */}
            <div className="lg:col-span-6 grid sm:grid-cols-2 gap-6">
              
              {/* Option 1: Elastic Strip */}
              <B2bCard className="text-center relative overflow-hidden bg-neutral-50 border-neutral-150">
                <div className="absolute top-2 right-2 bg-neutral-800 text-white text-[8px] font-bold px-1.5 py-0.5 rounded uppercase">
                  Option 1
                </div>
                <div className="w-16 h-28 mx-auto border border-neutral-300 bg-white rounded-lg flex flex-col justify-between p-1.5 relative overflow-hidden mb-4 shadow-sm">
                  <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-4 border-x border-neutral-900 bg-[#A855F7]" />
                  <div className="relative z-10 bg-white border border-neutral-200 rounded p-1 shadow w-[50px] mx-auto mt-8 transform rotate-1">
                    <div className="text-[5px] font-bold leading-none text-left">POUCH.ECO</div>
                    <div className="text-[4px] font-bold text-white px-0.5 inline-block mt-0.5 rounded-[2px]" style={{ backgroundColor: '#A855F7' }}>
                      Karijini
                    </div>
                  </div>
                </div>
                <h4 className="font-bold text-lg mb-2">Vibrant Elastic Band Strip</h4>
                <p className="text-xs text-neutral-500 leading-relaxed">
                  A high-elastic colored rubber/fabric strip wraps around a white/kraft stock flat bottom bag. Secures a customizable, premium roast name card tightly to the front. Swap card colors to identify light, medium, or decaf blends in a second!
                </p>
              </B2bCard>

              {/* Option 2: Pre-cut Slots */}
              <B2bCard className="text-center relative overflow-hidden bg-neutral-50 border-neutral-150">
                <div className="absolute top-2 right-2 bg-neutral-800 text-white text-[8px] font-bold px-1.5 py-0.5 rounded uppercase">
                  Option 2
                </div>
                <div className="w-16 h-28 mx-auto border border-neutral-300 bg-white rounded-lg flex flex-col justify-between p-1.5 relative overflow-hidden mb-4 shadow-sm">
                  <div className="absolute top-8 left-1.5 w-1 h-1 border-b border-r border-neutral-400" />
                  <div className="absolute top-8 right-1.5 w-1 h-1 border-b border-l border-neutral-400" />
                  <div className="absolute bottom-6 left-1.5 w-1 h-1 border-t border-r border-neutral-400" />
                  <div className="absolute bottom-6 right-1.5 w-1 h-1 border-t border-l border-neutral-400" />
                  <div className="bg-neutral-50 border border-neutral-200 p-1 w-[54px] mx-auto mt-8 shadow-sm rounded-[2px]">
                    <div className="text-[4px] font-bold leading-none text-center">POUCH.ECO</div>
                    <div className="text-[4px] text-emerald-600 font-bold text-center mt-0.5">
                      Barrga Binya
                    </div>
                  </div>
                </div>
                <h4 className="font-bold text-lg mb-2">Built-in Corner Card Slots</h4>
                <p className="text-xs text-neutral-500 leading-relaxed">
                  The front face of the stock pouch is pre-diecut with four precision corner slots. Simply slide custom-printed blend cards in. The card stays completely flat, and gives an extremely rustic, boutique artisan appearance.
                </p>
              </B2bCard>
            </div>

            {/* Content info */}
            <div className="lg:col-span-6 space-y-6">
              <B2bBadge variant="primary">ZERO_SETUP_STARTUP_HACK</B2bBadge>
              
              <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight leading-tight text-neutral-850">
                Dodge Setup Cylinder Costs Entirely
              </h2>

              <p className="text-neutral-600 leading-relaxed text-sm">
                For young brands launch-testing their brand, running 4 different full custom-printed digital pouches (Pippingarra, Barrga Binya, Karijini, Cooya Pooya) can be expensive. Achieve Pack introduces a genius packaging hack: buy standard Matte White or Kraft stock flat-bottom pouches in bulk, and attachment print coffee roast blend name cards.
              </p>

              <div className="space-y-3 font-semibold text-xs text-neutral-700">
                <div className="flex gap-2">
                  <span className="text-purple-600 font-bold">✓</span> 
                  <span><strong>Zero plate costs:</strong> Attach name cards tightly to differentiate blends.</span>
                </div>
                <div className="flex gap-2">
                  <span className="text-purple-600 font-bold">✓</span> 
                  <span><strong>Ultra Low MoQ:</strong> Share 1,000 blank pouches across all blends. Just print separate cards!</span>
                </div>
                <div className="flex gap-2">
                  <span className="text-purple-600 font-bold">✓</span> 
                  <span><strong>Artisan shelf appeal:</strong> Tucked paper cards convey handcrafted attention to detail.</span>
                </div>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row gap-4">
                <button
                  type="button"
                  onClick={() => setVariationMethod('card-strip')}
                  className="px-6 py-3 rounded-xl bg-neutral-900 text-white font-bold text-xs uppercase hover:bg-neutral-800 shadow transition-all active:scale-98"
                >
                  Test Elastic Strip Preview
                </button>
                <button
                  type="button"
                  onClick={() => setVariationMethod('card-slot')}
                  className="px-6 py-3 rounded-xl bg-white border border-neutral-300 text-neutral-800 font-bold text-xs uppercase hover:bg-neutral-50 shadow transition-all active:scale-98"
                >
                  Test Card-Slot Preview
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Subscription tiers B2B */}
      <section className="py-24 bg-neutral-50 border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <B2bBadge variant="primary">PaaS_SUBSCRIPTION_PLANS</B2bBadge>
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-neutral-850 mt-2">
              PaaS Subscription Tiers
            </h2>
            <p className="text-neutral-500 font-semibold mt-2">
              Packaging-as-a-Service is styled like a premium SaaS. We provide the fully-coded website, premium custom pouches, and marketing assets—all you need to do is provide your product!
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Bootstrap */}
            <B2bCard className="flex flex-col justify-between hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <B2bBadge variant="neutral">Starter Track</B2bBadge>
                  <span className="font-mono text-neutral-400 text-xs font-bold">// TIER_01</span>
                </div>

                <div>
                  <h3 className="font-extrabold text-2xl uppercase text-neutral-850 leading-none">PaaS Bootstrap</h3>
                  <p className="text-xs text-neutral-500 mt-1 uppercase font-bold">Blank Pouches + Blend Name Cards</p>
                </div>

                <div className="border-y border-neutral-200 py-4 font-mono">
                  <div className="text-3xl font-bold text-neutral-850">
                    $1.50 <span className="text-xs font-normal text-neutral-500">/ bag unit</span>
                  </div>
                  <p className="text-[10px] text-neutral-400 font-bold uppercase mt-1">Min run quantity: 100 bags (mix blends)</p>
                </div>

                <ul className="space-y-3 text-xs text-neutral-700">
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-purple-600 stroke-[3] flex-shrink-0" /> Blank premium flat bottom pouches
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-purple-600 stroke-[3] flex-shrink-0" /> Custom roast cards (4 blend color templates)
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-purple-600 stroke-[3] flex-shrink-0" /> Choice of elastic bands or pre-cut slots
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-purple-600 stroke-[3] flex-shrink-0" /> <strong>Free Shopify landing page setup</strong>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-purple-600 stroke-[3] flex-shrink-0" /> <strong>Free 3D visual mock-ups</strong>
                  </li>
                  <li className="flex items-center gap-2 font-bold text-neutral-800 bg-purple-50 px-2 py-0.5 rounded">
                    👉 Just provide roasted coffee product!
                  </li>
                </ul>
              </div>

              <div className="pt-8">
                <a
                  href="https://calendly.com/30-min-free-packaging-consultancy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-neutral-900 text-white rounded-xl font-bold text-xs uppercase py-3.5 text-center hover:bg-neutral-800 transition-all inline-block shadow active:scale-98"
                >
                  Subscribe Bootstrap Track
                </a>
              </div>
            </B2bCard>

            {/* Bespoke */}
            <B2bCard className="flex flex-col justify-between hover:shadow-lg hover:-translate-y-1 transition-all duration-300 relative border-2 border-purple-500">
              <div className="absolute -top-3 left-6 bg-purple-600 text-white text-[9px] font-bold uppercase px-2.5 py-0.5 tracking-wider rounded-full shadow-md">
                🔥 POPULAR ACCELERATOR CHOICE
              </div>
              
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <B2bBadge variant="primary">Growth Track</B2bBadge>
                  <span className="font-mono text-neutral-400 text-xs font-bold">// TIER_02</span>
                </div>

                <div>
                  <h3 className="font-extrabold text-2xl uppercase text-neutral-850 leading-none">PaaS Bespoke</h3>
                  <p className="text-xs text-neutral-500 mt-1 uppercase font-bold">100% Custom Edge-to-Edge Print</p>
                </div>

                <div className="border-y border-neutral-200 py-4 font-mono">
                  <div className="text-3xl font-bold text-purple-600">
                    From $1.15 <span className="text-xs font-normal text-neutral-500">/ unit (Option B)</span>
                  </div>
                  <p className="text-[10px] text-neutral-400 font-bold uppercase mt-1">Plate Cylinder Setup Cost: $0 Free</p>
                </div>

                <ul className="space-y-3 text-xs text-neutral-700">
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-purple-600 stroke-[3] flex-shrink-0" /> Full digital printing (Structures B & C)
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-purple-600 stroke-[3] flex-shrink-0" /> High-barrier EVOH or certified Compostable
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-purple-600 stroke-[3] flex-shrink-0" /> Custom color side-gusset outline work
                  </li>
                  <li className="flex items-center gap-2 text-purple-700 font-bold">
                    <Check className="w-4 h-4 text-purple-600 stroke-[3] flex-shrink-0" /> <strong>Free Custom Shopify & subscriptions</strong>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-purple-600 stroke-[3] flex-shrink-0" /> <strong>Free hyper-premium 3D mockup assets</strong>
                  </li>
                  <li className="flex items-center gap-2 font-bold text-neutral-800 bg-purple-50 px-2 py-0.5 rounded">
                    👉 Just provide roasted coffee product!
                  </li>
                </ul>
              </div>

              <div className="pt-8">
                <a
                  href="https://calendly.com/30-min-free-packaging-consultancy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-purple-600 hover:bg-purple-700 text-white rounded-xl font-bold text-xs uppercase py-3.5 text-center transition-all inline-block shadow-lg active:scale-98"
                >
                  Configure Custom Order
                </a>
              </div>
            </B2bCard>

            {/* Scale */}
            <B2bCard className="flex flex-col justify-between hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <B2bBadge variant="accent">Enterprise Track</B2bBadge>
                  <span className="font-mono text-neutral-400 text-xs font-bold">// TIER_03</span>
                </div>

                <div>
                  <h3 className="font-extrabold text-2xl uppercase text-neutral-850 leading-none">PaaS Scale</h3>
                  <p className="text-xs text-neutral-500 mt-1 uppercase font-bold">Wholesale Gravure Volume runs</p>
                </div>

                <div className="border-y border-neutral-200 py-4 font-mono">
                  <div className="text-3xl font-bold text-neutral-850">
                    Lowest unit price <span className="text-xs font-bold text-cyan-600">From $0.74</span>
                  </div>
                  <p className="text-[10px] text-neutral-400 font-bold uppercase mt-1">Run quantity: 5,000+ bags</p>
                </div>

                <ul className="space-y-3 text-xs text-neutral-700">
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-purple-600 stroke-[3] flex-shrink-0" /> Embossed metallics or spot gloss varnishes
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-purple-600 stroke-[3] flex-shrink-0" /> Lowest wholesale unit overhead
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-purple-600 stroke-[3] flex-shrink-0" /> Premium rotogravure wholesale quality
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-purple-600 stroke-[3] flex-shrink-0" /> <strong>Free Custom Enterprise Store setup</strong>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-purple-600 stroke-[3] flex-shrink-0" /> Full video press kits & social templates
                  </li>
                  <li className="flex items-center gap-2 font-bold text-neutral-800 bg-purple-50 px-2 py-0.5 rounded">
                    👉 Just provide roasted coffee product!
                  </li>
                </ul>
              </div>

              <div className="pt-8">
                <a
                  href="https://calendly.com/30-min-free-packaging-consultancy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-neutral-900 text-white rounded-xl font-bold text-xs uppercase py-3.5 text-center hover:bg-neutral-800 transition-all inline-block shadow active:scale-98"
                >
                  Contact Enterprise Desk
                </a>
              </div>
            </B2bCard>
          </div>
        </div>
      </section>

      {/* Free Accelerator Services */}
      <section className="py-24 bg-white border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
            <div className="max-w-2xl">
              <B2bBadge variant="eco">ONE-STOP_ACCELERATION_PROGRAM</B2bBadge>
              <h2 className="text-3xl md:text-4xl font-extrabold text-neutral-850 mt-2">
                1-ON-1 BRAND ACCELERATOR SERVICES
              </h2>
              <p className="text-neutral-500 font-semibold mt-2">
                We do not just supply bags. Achieve Pack provides a full suite of brand launching services for our B2B customers—100% FREE.
              </p>
            </div>
            <ShoppingBag className="hidden md:block w-16 h-16 text-neutral-400 rotate-12" />
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <B2bCard className="bg-neutral-50 border-neutral-100 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center font-bold text-2xl shadow-sm mb-6 border border-neutral-100">
                  💻
                </div>
                <h3 className="font-bold text-xl text-neutral-850 mb-3">Free Website Setup</h3>
                <p className="text-xs text-neutral-500 leading-relaxed mb-6">
                  We will create a free high-converting Shopify or custom landing page mapped specifically for your coffee brand's retail and subscription channels. Let our dev team build your digital shop.
                </p>
              </div>
              <span className="font-mono text-[9px] font-bold text-purple-700 bg-purple-50 px-2.5 py-1 rounded border border-purple-100 self-start">
                VALUE: $1,200 (FREE)
              </span>
            </B2bCard>

            <B2bCard className="bg-neutral-50 border-neutral-100 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center font-bold text-2xl shadow-sm mb-6 border border-neutral-100">
                  🎨
                </div>
                <h3 className="font-bold text-xl text-neutral-850 mb-3">Free 3D Mock-up Setup</h3>
                <p className="text-xs text-neutral-500 leading-relaxed mb-6">
                  Stop using generic flat images. We provide realistic, hyper-premium 3D visual mockups of your customized coffee pouches resting in studio lighting environments, optimized for social media.
                </p>
              </div>
              <span className="font-mono text-[9px] font-bold text-cyan-700 bg-cyan-50 px-2.5 py-1 rounded border border-cyan-100 self-start">
                VALUE: $450 (FREE)
              </span>
            </B2bCard>

            <B2bCard className="bg-neutral-50 border-neutral-100 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center font-bold text-2xl shadow-sm mb-6 border border-neutral-100">
                  📐
                </div>
                <h3 className="font-bold text-xl text-neutral-850 mb-3">Free Prepress Layouts</h3>
                <p className="text-xs text-neutral-500 leading-relaxed mb-6">
                  Our in-house design specialists will layout your custom graphics, checking all fold marks, side gusset borders, bleed clearances, pocket zippers, and valve positions to guarantee flawless prints.
                </p>
              </div>
              <span className="font-mono text-[9px] font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded border border-emerald-100 self-start">
                VALUE: $350 (FREE)
              </span>
            </B2bCard>
          </div>
        </div>
      </section>

      {/* Guide Lead Capture */}
      <section className="py-24 bg-gradient-to-b from-neutral-900 to-neutral-950 text-white border-t border-neutral-800">
        <div className="max-w-5xl mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-12 gap-12 items-center">
            <div className="md:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-1 text-[10px] font-bold tracking-widest text-cyan-400 uppercase font-mono">
                <Download className="w-3.5 h-3.5 animate-bounce" /> INSTANT KICKSTART DOWNLOAD
              </div>
              
              <h2 className="text-4xl md:text-5xl font-extrabold uppercase tracking-tight leading-none">
                GET THE PaaS COFFEE<br/>
                STARTUP ACCELERATOR GUIDE
              </h2>

              <p className="text-base text-neutral-300 leading-relaxed">
                Download the verified, comprehensive Pouch.eco Coffee Brand Accelerator Guide containing the exact lamination layers formula, pouch side gussets artwork dieline vectors, and zero setup card variation guides.
              </p>

              <div className="border-l-4 border-purple-500 pl-4 space-y-2 text-xs font-mono text-neutral-400">
                <div>// Guide Format: UTF-8 Document (Highly Detailed Technical Specifications)</div>
                <div>// Compiled by: Ryan Wong, Biopolymer Pouch Engineer</div>
                <div>// Content: Western Australia climate advisory & attached card template blueprints</div>
              </div>
            </div>

            <div className="md:col-span-5">
              <AnimatePresence mode="wait">
                {!downloadSuccess ? (
                  <motion.form
                    key="lead-form"
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    onSubmit={handleEmailSubmit}
                    className="border border-neutral-850 bg-neutral-900/60 backdrop-blur p-6 rounded-3xl space-y-4 shadow-2xl"
                  >
                    <h3 className="font-bold text-xl uppercase tracking-tight text-white mb-2">
                      Unlock Accelerator Guide
                    </h3>

                    <div className="space-y-1">
                      <label className="block text-[10px] font-bold uppercase tracking-wider text-neutral-400">
                        Corporate Email Address
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-500" />
                        <input
                          type="email"
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="e.g. founder@yourcoffeeco.com"
                          className="w-full bg-neutral-950 border border-neutral-800 pl-10 pr-4 py-3 rounded-xl font-mono text-sm text-white focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500"
                        />
                      </div>
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-purple-600 text-white font-bold uppercase text-sm py-4 rounded-xl hover:bg-purple-700 active:scale-98 transition-all flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-purple-600/30"
                    >
                      {isSubmitting ? (
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      ) : (
                        <>
                          <Download className="w-4 h-4" /> Download PaaS Guide
                        </>
                      )}
                    </button>

                    <p className="text-[9px] text-neutral-500 font-semibold text-center">
                      We value privacy. Your email will be logged to verify dieline download permissions.
                    </p>
                  </motion.form>
                ) : (
                  <motion.div
                    key="success-card"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="border border-emerald-500/30 bg-neutral-900/60 p-6 rounded-3xl space-y-6 text-center shadow-2xl"
                  >
                    <div className="w-12 h-12 rounded-full bg-emerald-500/10 border border-emerald-500 flex items-center justify-center mx-auto text-emerald-500">
                      <CheckCircle className="w-6 h-6" />
                    </div>

                    <div className="space-y-2">
                      <h3 className="font-bold text-2xl uppercase tracking-tight text-white">
                        DOWNLOAD STARTED!
                      </h3>
                      <p className="text-xs text-neutral-300 leading-relaxed">
                        We have automatically generated and triggered the download for <span className="text-emerald-400 font-bold">Pouch_Eco_PaaS_Accelerator_Guide.txt</span> in your browser.
                      </p>
                    </div>

                    <div className="bg-neutral-950 border border-neutral-850 p-3 text-[10px] text-neutral-500 font-mono leading-relaxed rounded-xl">
                      Logged email: <span className="text-white font-bold">{email}</span>. Click the button below if your browser did not start the download automatically.
                    </div>

                    <div className="space-y-2 pt-2">
                      <button
                        type="button"
                        onClick={triggerPDFDownload}
                        className="w-full bg-neutral-950 border border-neutral-800 text-white font-bold text-xs py-2 hover:bg-neutral-800 transition rounded-lg"
                      >
                        [Manually Re-Download]
                      </button>
                      
                      <Link 
                        to="/store" 
                        className="w-full bg-purple-600 text-white font-bold text-xs py-2.5 rounded-lg text-center hover:bg-purple-700 transition inline-block shadow active:scale-98"
                      >
                        Visit Store Page
                      </Link>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
