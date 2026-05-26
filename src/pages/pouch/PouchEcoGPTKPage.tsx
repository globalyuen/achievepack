import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import React, { useState, useMemo } from 'react'
import { 
  Coffee, Leaf, Zap, CheckCircle, ArrowRight, Shield, Award, Box, 
  Sparkles, DollarSign, Clock, HelpCircle, Mail, Download, Compass, 
  MapPin, Check, Layers, AlertCircle, ShoppingBag, Grid, Info, Sparkle, Globe,
  Copy, Phone, RefreshCw, AlertTriangle, Calendar, ChevronDown, ChevronRight, MessageSquare
} from 'lucide-react'
import PouchLayout from '../../components/pouch/PouchLayout'
import SiteHeader from '../../components/SiteHeader'
import Footer from '../../components/Footer'
import { isPouch } from '../../utils/domain'

// Custom sizing definitions requested by user
interface BagSize {
  id: string
  label: string
  dimensions: string
  capacity: string
}

const BAG_SIZES: BagSize[] = [
  { id: 'size-1', label: '150g', dimensions: '160 × 260 + 80 mm', capacity: 'approx 150-250g' },
  { id: 'size-2', label: '250g', dimensions: '180 × 280 + 80 mm', capacity: 'approx 250-340g' },
  { id: 'size-3', label: '500g', dimensions: '200 × 300 + 80 mm', capacity: 'approx 500g' },
  { id: 'size-4', label: '1kg', dimensions: '260 × 340 + 80 mm', capacity: 'approx 1000g' },
]

interface TableRow {
  name: string
  stockCards: string
  customStandard: string
  customRecyclable: string
  customCompostable: string
}

interface TableCategory {
  title: string
  rows: TableRow[]
}

const TABLE_CATEGORIES: TableCategory[] = [
  {
    title: '📦 Structural Design & Base Specifications',
    rows: [
      {
        name: 'Base Material',
        stockCards: 'High-Barrier Conventional Pouch',
        customStandard: 'Conventional Stand-Up Multi-Laminate',
        customRecyclable: '♻️ PE+EVOH Recyclable Flat Bottom',
        customCompostable: '🌱 Bio-compostable Kraft Flat Bottom'
      },
      {
        name: 'Pouch Shape',
        stockCards: 'Flat Bottom (Side Gusset)',
        customStandard: 'Stand-Up Pouch Shape (Doypack)',
        customRecyclable: 'Flat Bottom Pouch Shape (Side Gussets)',
        customCompostable: 'Flat Bottom Pouch Shape (Side Gussets)'
      },
      {
        name: 'Side Gusset Support',
        stockCards: 'Yes (Sturdy base)',
        customStandard: 'No (Oval bottom gusset)',
        customRecyclable: 'Yes (Sturdy structural gusset)',
        customCompostable: 'Yes (Sturdy structural gusset)'
      }
    ]
  },
  {
    title: '🎨 Customization & Branding Mechanics',
    rows: [
      {
        name: 'Printing Method',
        stockCards: 'Modular card insert / roped tag / sticker',
        customStandard: 'Full Digital Edge-to-Edge custom print',
        customRecyclable: 'Full Digital Edge-to-Edge custom print',
        customCompostable: 'Full Digital Edge-to-Edge custom print'
      },
      {
        name: 'Clear Display Window',
        stockCards: 'No Window (Matte finish)',
        customStandard: 'Optional',
        customRecyclable: 'Optional (High clarity)',
        customCompostable: 'Optional'
      },
      {
        name: 'Cylinder Setup Fees',
        stockCards: '$0 Waived',
        customStandard: '$0 Waived (Digital)',
        customRecyclable: '$0 Waived (Digital)',
        customCompostable: '$0 Waived (Digital)'
      }
    ]
  },
  {
    title: '🛡️ Closure & Aroma Preservation',
    rows: [
      {
        name: 'Zipper Closure',
        stockCards: 'Regular premium zipper',
        customStandard: 'One-Sided Zipper / Pull-Tab',
        customRecyclable: '♻️ Recyclable One-Sided Zip',
        customCompostable: '🌱 Certified Bio One-Sided Zip'
      },
      {
        name: 'Degassing Valve',
        stockCards: 'Optional',
        customStandard: 'One-way degassing valve integrated',
        customRecyclable: 'One-way degassing valve integrated',
        customCompostable: 'Certified bio-valve integrated'
      },
      {
        name: 'Barrier Level',
        stockCards: 'High (Oxygen/Moisture foil)',
        customStandard: 'High (Optimal freshness)',
        customRecyclable: 'High (PE+EVOH gas lock)',
        customCompostable: 'High (VM-Cello aroma seal)'
      }
    ]
  }
]

export default function PouchEcoGPTKPage() {
  const [sizeMode, setSizeMode] = useState<'standard' | 'custom'>('standard')
  const [numDesigns, setNumDesigns] = useState<number>(3)
  const [qtyPerDesign, setQtyPerDesign] = useState<number>(500)
  const [selectedSize, setSelectedSize] = useState<BagSize>(BAG_SIZES[0])
  const [whatsappCopied, setWhatsappCopied] = useState<boolean>(false)
  const [enlargedImage, setEnlargedImage] = useState<string | null>(null)
  const [expandedOption, setExpandedOption] = useState<string | null>(null)
  
  // State for sub-options in Card 1 (Stock Conventional)
  const [stockOption, setStockOption] = useState<'card' | 'tag' | 'sticker'>('card')

  // State for sub-options in the Custom printed cards (PE+EVOH Recyclable vs Compostable)
  const [ovalEcoOption, setOvalEcoOption] = useState<'pe-evoh' | 'compostable'>('pe-evoh')
  const [flatEcoOption, setFlatEcoOption] = useState<'pe-evoh' | 'compostable'>('pe-evoh')
  
  // State for collapsible FAQs
  const [faqStates, setFaqStates] = useState<Record<number, boolean>>({
    0: true, // Expand first one by default
    1: false,
    2: false,
    3: false,
    4: false
  })

  const toggleFaq = (index: number) => {
    setFaqStates(prev => ({
      ...prev,
      [index]: !prev[index]
    }))
  }

  // Real-time Pricing Calculation Engine
  const calculateOptionPrice = (optionId: string, subOption?: 'pe-evoh' | 'compostable') => {
    const sizeText = selectedSize.dimensions;
    const isSize1 = sizeText.includes('160');
    const isSize2 = sizeText.includes('180');
    const isSize3 = sizeText.includes('200');
    const isSize4 = sizeText.includes('260');

    let unitPrice = 0;
    let isBelowMoq = false;
    let moq = 500;

    if (optionId === 'stock-cards') {
      moq = 100;
      if (qtyPerDesign < 100) {
        isBelowMoq = true;
      } else if (qtyPerDesign === 100 || qtyPerDesign === 500 || qtyPerDesign === 1000) {
        unitPrice = 0.50;
      } else if (qtyPerDesign === 5000) {
        unitPrice = 0.25; // 5000pcs is exactly half of 1000pcs price
      }
      
      const totalCost = unitPrice * qtyPerDesign * numDesigns;
      
      // Dynamic stock images based on selection
      let stockImg = '/imgs/store/products/invest-cal-card-insert.jpg';
      let stockTitle = 'Stock Conventional + Insert Cards';
      if (stockOption === 'tag') {
        stockImg = '/imgs/store/products/invest-cal-tag.jpg';
        stockTitle = 'Stock Conventional + Roped Tags';
      } else if (stockOption === 'sticker') {
        stockImg = '/imgs/store/products/flat-bottom-one-sided-zipper-conventional-thumbnail-1.jpg';
        stockTitle = 'Stock Conventional + Custom Stickers';
      }

      return {
        unitPrice,
        totalCost,
        isBelowMoq,
        moq,
        badge: stockTitle,
        desc: 'Matte stock flat bottom pouches in white/kraft fitted with attached modular card insertion, string tags, or custom branded stickers.',
        accentColor: '#10B981',
        certLogo: 'FSC Card / Tag',
        leadTime: '3 - 5 Days',
        image: stockImg,
        points: [
          'Food-Safe High Barrier Stock Materials',
          'Easilyslip in flavor cards or attach custom tags',
          'Perfect for modular brand custom stickers',
          'Reusable with premium integrated zipper seal',
          '100pcs Ultra-Low MOQ'
        ]
      };
    }

    // For Custom printed standard and eco, MOQ is 500
    if (qtyPerDesign < 500) {
      isBelowMoq = true;
    }

    if (optionId === 'custom-flat') {
      const isCompostable = subOption === 'compostable';
      if (!isCompostable) {
        // Option A: PE+EVOH Recyclable
        if (isSize1) {
          if (qtyPerDesign === 500) unitPrice = 2.50;
          else if (qtyPerDesign === 1000) unitPrice = 1.70;
          else if (qtyPerDesign === 5000) unitPrice = 0.85;
        } else if (isSize2) {
          if (qtyPerDesign === 500) unitPrice = 2.60;
          else if (qtyPerDesign === 1000) unitPrice = 1.80;
          else if (qtyPerDesign === 5000) unitPrice = 0.90;
        } else if (isSize3) {
          if (qtyPerDesign === 500) unitPrice = 2.70;
          else if (qtyPerDesign === 1000) unitPrice = 1.90;
          else if (qtyPerDesign === 5000) unitPrice = 0.95;
        } else {
          // size 4
          if (qtyPerDesign === 500) unitPrice = 2.90;
          else if (qtyPerDesign === 1000) unitPrice = 2.10;
          else if (qtyPerDesign === 5000) unitPrice = 1.05;
        }
      } else {
        // Option B: Compostable
        if (isSize1) {
          if (qtyPerDesign === 500) unitPrice = 2.70;
          else if (qtyPerDesign === 1000) unitPrice = 1.90;
          else if (qtyPerDesign === 5000) unitPrice = 0.95;
        } else if (isSize2) {
          if (qtyPerDesign === 500) unitPrice = 2.80;
          else if (qtyPerDesign === 1000) unitPrice = 2.00;
          else if (qtyPerDesign === 5000) unitPrice = 1.00;
        } else if (isSize3) {
          if (qtyPerDesign === 500) unitPrice = 2.90;
          else if (qtyPerDesign === 1000) unitPrice = 2.10;
          else if (qtyPerDesign === 5000) unitPrice = 1.05;
        } else {
          // size 4
          if (qtyPerDesign === 500) unitPrice = 3.10;
          else if (qtyPerDesign === 1000) unitPrice = 2.30;
          else if (qtyPerDesign === 5000) unitPrice = 1.15;
        }
      }

      const totalCost = isBelowMoq ? 0 : unitPrice * qtyPerDesign * numDesigns;
      return {
        unitPrice,
        totalCost,
        isBelowMoq,
        moq,
        badge: isCompostable ? 'Custom Flat Bottom Eco (Compostable)' : 'Custom Flat Bottom Eco (Recyclable)',
        desc: isCompostable
          ? '100% Home & Industrial certified compostable Kraft laminate flat bottom pouch with side gussets, degassing valve and bio-adhesives.'
          : 'Recyclable Mono-PE flat bottom pouch with EVOH high oxygen barrier layer and side gussets, supporting zero microplastic footprints.',
        accentColor: '#10b981',
        certLogo: isCompostable ? '🌱 Certified Bio' : '♻️ SPI Code 4',
        leadTime: '20 - 25 Days',
        image: isCompostable ? '/imgs/store/products/compostable-kraft-premium.png' : '/imgs/store/products/pe-flat-bottom-premium.png',
        points: isCompostable
          ? [
              'Sturdy Box-Style Flat Bottom Shape with Side Gussets',
              '100% Biodegradable & Compostable Bio-Liner',
              'Sustainably Sourced Kraft Paper Shell',
              'Degassing Valve & Compostable Resealable Zip',
              'Full Width & Height Customizable Sizing Available'
            ]
          : [
              'Sturdy Box-Style Flat Bottom Shape with Side Gussets',
              'Premium Recyclable Mono-PE Mono-Material',
              'EVOH Layer for Superior Gas & Light Barrier',
              'Zero Microplastic & Recyclable Resealable Zip',
              'Customizable Millimeter Sizing at $0 Setup Fee'
            ]
      };
    }

    if (optionId === 'custom-oval') {
      // Oval Bottom Eco is stand-up Doypack pouch shape, priced at exactly half of the Flat Bottom Eco price!
      const flatPrices = calculateOptionPrice('custom-flat', subOption);
      unitPrice = flatPrices.unitPrice / 2;
      const totalCost = isBelowMoq ? 0 : unitPrice * qtyPerDesign * numDesigns;
      const isCompostable = subOption === 'compostable';

      return {
        unitPrice,
        totalCost,
        isBelowMoq,
        moq,
        badge: isCompostable ? 'Custom Oval Bottom Eco (Compostable)' : 'Custom Oval Bottom Eco (Recyclable)',
        desc: isCompostable
          ? 'Stand-Up Doypack pouch shape with an oval bottom gusset. Saves 50% material costs while retaining certified bio-compostable Kraft papers and valve seals.'
          : 'Stand-Up Doypack pouch shape with an oval bottom gusset. Saves 50% material costs while retaining premium recyclable Mono-PE EVOH gas barriers and zip seals.',
        accentColor: '#3b82f6',
        certLogo: isCompostable ? '🌱 Bio-Saver 50%' : '♻️ Eco-Saver 50%',
        leadTime: '20 - 25 Days',
        image: isCompostable ? '/imgs/store/products/compostable-oval-doypack-premium.png' : '/imgs/store/products/pe-oval-doypack-premium.png',
        points: isCompostable
          ? [
              'Stand-Up Pouch Shape (Doypack with Oval Bottom)',
              'Saves 50% Material & Unit Cost Compared to Flat Bottom',
              '100% Compostable Bio-Liner & Kraft Paper Shell',
              'BPI certified degassing valve & bio zipper closure',
              '500pcs low MOQ with waived cylinder setups'
            ]
          : [
              'Stand-Up Pouch Shape (Doypack with Oval Bottom)',
              'Saves 50% Material & Unit Cost Compared to Flat Bottom',
              'Mono-PE Recyclable construction with EVOH gas lock',
              'Airtight resealable zipper & integrated degassing valve',
              '500pcs low MOQ with waived cylinder setups'
            ]
      };
    }

    return {
      unitPrice: 0,
      totalCost: 0,
      isBelowMoq: true,
      moq: 500,
      badge: '',
      desc: '',
      accentColor: '',
      certLogo: '',
      leadTime: '',
      image: '',
      points: []
    };
  }

  // Pre-calculated data matching selections for all Tiers
  const cardData = useMemo(() => calculateOptionPrice('stock-cards'), [qtyPerDesign, numDesigns, selectedSize, stockOption])
  const ovalData = useMemo(() => calculateOptionPrice('custom-oval', ovalEcoOption), [qtyPerDesign, numDesigns, selectedSize, ovalEcoOption])
  const flatData = useMemo(() => calculateOptionPrice('custom-flat', flatEcoOption), [qtyPerDesign, numDesigns, selectedSize, flatEcoOption])

  // Telemetry values for the "WhatsApp Configurator Summary"
  const getBilingualRfqText = () => {
    const cardStatus = cardData.isBelowMoq ? 'Below MOQ' : `$${cardData.unitPrice.toFixed(2)} USD (Total: $${cardData.totalCost.toFixed(2)})`;
    const ovalStatus = ovalData.isBelowMoq ? 'Below MOQ' : `$${ovalData.unitPrice.toFixed(2)} USD (Total: $${ovalData.totalCost.toFixed(2)})`;
    const flatStatus = flatData.isBelowMoq ? 'Below MOQ' : `$${flatData.unitPrice.toFixed(2)} USD (Total: $${flatData.totalCost.toFixed(2)})`;

    return `Achieve Pack 咖啡品牌包裝詢價配置 (Pricing Telemetry PaaS RFQ Summary):
--------------------------------------------------
📐 規格尺寸 (Selected Dimension): ${sizeMode === 'custom' ? 'Custom size' : selectedSize.dimensions} (capacity: ${selectedSize.label})
🎨 印刷款式 (Number of Designs): ${numDesigns} 款 (Designs)
📦 單款印量 (Quantity per Design): ${qtyPerDesign} 個 (pcs)
🎁 袋子總數 (Total Bags Quantity): ${numDesigns * qtyPerDesign} 個

方案實時估算 (Real-time Options Quotation):
1️⃣ Stock Conventional 方案 (Modular: ${stockOption === 'card' ? 'Insert Card' : stockOption === 'tag' ? 'Roped Tag' : 'Sticker'}):
   - ${cardStatus}
2️⃣ Custom Oval Bottom Eco 客製自立袋方案 (Oval Stand-Up - ${ovalEcoOption === 'pe-evoh' ? 'PE+EVOH Recyclable' : 'Compostable'}):
   - ${ovalStatus}
3️⃣ Custom Flat Bottom Eco 客製方底袋方案 (Premium Flat Bottom - ${flatEcoOption === 'pe-evoh' ? 'PE+EVOH Recyclable' : 'Compostable'}):
   - ${flatStatus}

--------------------------------------------------
💬 我已使用網頁版按揭式預算計算器配置完成。請客服團隊為我安排專屬樣品及設計對接！
(I have verified my configuration. Please arrange sample packages and packaging layout assistance.)`
  }

  const handleWhatsappCopy = () => {
    const text = getBilingualRfqText()
    navigator.clipboard.writeText(text).then(() => {
      setWhatsappCopied(true)
      setTimeout(() => setWhatsappCopied(false), 3000)
      window.open('https://api.whatsapp.com/send?phone=85269704411&text=' + encodeURIComponent('Hello Achieve Pack! I have generated my PaaS Coffee Packaging configuration: \n\n' + text), '_blank')
    })
  }

  // Shared beautiful pricing page components wrapped inside the layout
  const renderUnifiedPricingPage = () => {
    return (
      <div className="bg-[#ffffff] text-neutral-800 font-sans selection:bg-emerald-500 selection:text-white pb-24">
        {/* Helmet Header Elements */}
        <Helmet>
          <title>Pricing | Custom Coffee Bags Pricing Plans | Achieve Pack</title>
          <meta name="description" content="Calculate B2B packaging costs instantly. Compare Stock Conventional card / tag / sticker modular bags, Custom Stand-Up Oval Bottom Eco pouches, and Custom Premium Flat Bottom Eco retail packaging." />
          <link rel="canonical" href="https://achievepack.com/pricing" />
        </Helmet>

        {/* HERO SECTION */}
        <section className="relative pt-36 pb-10 bg-white text-center">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(16,185,129,0.02)_0%,transparent_50%)] pointer-events-none" />
          
          <div className="max-w-4xl mx-auto px-4 relative z-10 space-y-4">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase bg-emerald-50 border border-emerald-100 text-emerald-800 tracking-wider">
              B2B Packaging Pricing Plans
            </span>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-neutral-900 font-['Outfit']">
              Choose the plan that's right for you
            </h1>
            <p className="text-sm font-mono text-emerald-600 uppercase tracking-widest font-bold">
              ☕ 咖啡茶葉袋客製 實時單價與配置成本計算器
            </p>
            <p className="text-base text-neutral-500 max-w-2xl mx-auto leading-relaxed">
              Select your quantity, dimension size, and design counts using the segmented selectors below. Unit prices update instantly below to give you complete transparency.
            </p>
          </div>
        </section>

        {/* LINEAR-STYLE TOP CONTROLS & SELECTORS */}
        <section className="max-w-4xl mx-auto px-4 md:px-6 relative z-20 pb-8">
          <div className="bg-neutral-50/40 border border-neutral-200/75 rounded-3xl p-6 md:p-8 space-y-6 shadow-[0_4px_24px_rgba(0,0,0,0.02)] backdrop-blur-sm">
            
            {/* Control 1: Sizes Toggles (Standard Sizes vs Custom Size) */}
            <div className="space-y-2.5">
              <span className="block text-xs font-bold uppercase tracking-wider text-neutral-400">1. Sizing Mode Selector (選擇規格模式)</span>
              <div className="bg-neutral-100 border border-neutral-200 p-1 rounded-2xl grid grid-cols-2 text-center text-xs font-bold font-sans">
                <button 
                  type="button" 
                  onClick={() => setSizeMode('standard')}
                  className={`py-2.5 px-2 rounded-xl transition-all duration-200 ${sizeMode === 'standard' ? 'bg-white text-neutral-900 shadow-sm border border-neutral-200/50 font-black' : 'text-neutral-500 hover:text-neutral-900'}`}
                >
                  Standard Sizes
                </button>
                <button 
                  type="button" 
                  onClick={() => setSizeMode('custom')}
                  className={`py-2.5 px-2 rounded-xl transition-all duration-200 ${sizeMode === 'custom' ? 'bg-white text-neutral-900 shadow-sm border border-neutral-200/50 font-black' : 'text-neutral-500 hover:text-neutral-900'}`}
                >
                  Custom Size (Millimeter scale)
                </button>
              </div>
            </div>

            {/* Sizing controls depending on standard vs custom */}
            {sizeMode === 'standard' ? (
              <div className="space-y-2.5">
                <span className="block text-xs font-bold uppercase tracking-wider text-neutral-400">2. Standard Weight & Capacity Selector (選定規格重量)</span>
                <div className="grid grid-cols-4 gap-2 bg-neutral-100 border border-neutral-200 p-1.5 rounded-2xl text-center text-xs font-bold">
                  {BAG_SIZES.map(s => (
                    <button 
                      key={s.id} 
                      type="button" 
                      onClick={() => setSelectedSize(s)}
                      className={`py-2.5 px-2 rounded-xl transition-all duration-200 flex flex-col justify-center items-center ${selectedSize.id === s.id ? 'bg-white text-neutral-900 shadow-sm border border-neutral-200/60 font-black' : 'text-neutral-500 hover:text-neutral-950'}`}
                    >
                      <span className="text-[12px]">{s.label}</span>
                      <span className="text-[9px] text-neutral-400 font-medium font-mono mt-0.5">{s.dimensions.replace(' + 80 mm', '').replace(' × ', 'x')}</span>
                    </button>
                  ))}
                </div>
                
                {/* Dieline Finder / Help link */}
                <div className="flex justify-end pt-1">
                  <Link 
                    to="/dieline-finder" 
                    className="inline-flex items-center gap-1.5 text-xs text-neutral-500 hover:text-emerald-600 transition font-semibold"
                  >
                    <HelpCircle className="w-4 h-4" /> Don't know what size to choose? Open Sizing & Dieline Finder
                  </Link>
                </div>
              </div>
            ) : (
              <div className="bg-emerald-50 border border-emerald-100 rounded-2xl p-4 space-y-2 text-xs font-semibold text-emerald-800 leading-relaxed font-sans">
                <div className="flex items-center gap-1.5 font-bold uppercase text-emerald-950">
                  <Sparkles className="w-4 h-4 text-emerald-600" /> Custom Sizing Range Mode Active
                </div>
                <div>
                  Any customizable width or height dimension smaller than **260 × 340 + 80 mm** is fully allowed at no extra cylinder setup premium. Under Custom Size mode:
                  <ul className="list-disc pl-5 mt-1 space-y-0.5 text-[11px] text-emerald-900">
                    <li>**Stock Conventional** is constrained to standard sizes and Lasts subject to stock list.</li>
                    <li>**Custom printed eco cards (Oval & Flat bottom)** allow millimeter-level dimensions tailoring at exactly the same unit rates as the closest standard categories!</li>
                  </ul>
                </div>
                <div className="flex justify-end pt-1">
                  <Link 
                    to="/dieline-finder" 
                    className="inline-flex items-center gap-1 text-xs text-emerald-700 hover:text-emerald-900 transition font-semibold"
                  >
                    <HelpCircle className="w-3.5 h-3.5" /> View Sizing & Dieline Finder Guide
                  </Link>
                </div>
              </div>
            )}

            <div className="grid md:grid-cols-12 gap-6 pt-2">
              {/* Order Run Quantity */}
              <div className="md:col-span-8 space-y-2.5">
                <div className="flex justify-between items-center text-xs font-bold uppercase tracking-wider text-neutral-400">
                  <span>3. Order Run Quantity (單款起訂量)</span>
                  {qtyPerDesign === 100 && (
                    <span className="text-amber-600 font-bold bg-amber-50 border border-amber-100 px-2 py-0.5 rounded text-[10px]">Stock Only (Custom MOQ is 500)</span>
                  )}
                </div>
                <div className="bg-neutral-100 border border-neutral-200 p-1 rounded-2xl grid grid-cols-4 text-center text-xs font-bold font-sans">
                  {[100, 500, 1000, 5000].map(q => (
                    <button 
                      key={q} 
                      type="button" 
                      onClick={() => setQtyPerDesign(q)}
                      className={`py-2.5 px-2 rounded-xl transition-all duration-200 ${qtyPerDesign === q ? 'bg-white text-neutral-900 shadow-sm border border-neutral-200/80 font-black' : 'text-neutral-500 hover:text-neutral-900'}`}
                    >
                      {q.toLocaleString()} pcs
                    </button>
                  ))}
                </div>
              </div>

              {/* Stepper counter designs */}
              <div className="md:col-span-4 space-y-2.5">
                <span className="block text-xs font-bold uppercase tracking-wider text-neutral-400">4. Designs SKUs (款式數)</span>
                <div className="flex items-center justify-between bg-neutral-100 border border-neutral-200 p-1.5 rounded-2xl">
                  <button 
                    type="button" 
                    onClick={() => setNumDesigns(prev => Math.max(1, prev - 1))}
                    className="w-8 h-8 rounded-xl bg-white border border-neutral-200 hover:bg-neutral-50 active:scale-95 text-neutral-600 font-extrabold flex items-center justify-center transition"
                  >
                    -
                  </button>
                  <span className="text-xs font-black text-neutral-800">{numDesigns} SKU{numDesigns > 1 ? 's' : ''}</span>
                  <button 
                    type="button" 
                    onClick={() => setNumDesigns(prev => Math.min(10, prev + 1))}
                    className="w-8 h-8 rounded-xl bg-white border border-neutral-200 hover:bg-neutral-50 active:scale-95 text-neutral-600 font-extrabold flex items-center justify-center transition"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>

            {/* Config Summarizer Dispatch Telemetry */}
            <div className="pt-4 border-t border-dashed border-neutral-200 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 text-xs font-semibold">
              <div className="text-neutral-500">
                Selected: <span className="text-neutral-950 font-bold">{sizeMode === 'custom' ? 'Custom size' : selectedSize.dimensions}</span> size &middot; <span className="text-neutral-950 font-bold">{(qtyPerDesign * numDesigns).toLocaleString()} total pouches</span> run ({qtyPerDesign} per SKU design).
              </div>
              <div className="flex gap-2 shrink-0">
                <button 
                  onClick={handleWhatsappCopy} 
                  className="bg-neutral-950 hover:bg-neutral-900 text-white font-extrabold uppercase text-[10px] px-4 py-2.5 rounded-xl transition duration-150 active:scale-98 flex items-center gap-1.5 shadow-sm shadow-black/5 cursor-pointer"
                >
                  <Phone className="w-3.5 h-3.5 fill-white stroke-none" /> Send WhatsApp RFQ
                </button>
              </div>
            </div>
            {whatsappCopied && (
              <p className="text-[10px] text-emerald-600 font-bold text-right -mt-2">
                ✓ Setup parameters copied to clipboard! Opening WhatsApp Chat...
              </p>
            )}

          </div>
        </section>

        {/* LINEAR-STYLE PLANS GRID (3 COLUMNS) */}
        <section className="max-w-7xl mx-auto px-4 md:px-6 pt-10">
          <div className="grid lg:grid-cols-3 gap-6 items-stretch max-w-6xl mx-auto">
            
            {/* TIER 1 CARD: STOCK CONVENTIONAL */}
            <div className={`bg-white border border-neutral-200/80 rounded-3xl p-6 shadow-sm flex flex-col justify-between relative group transition-all duration-300 ${sizeMode === 'custom' ? 'opacity-50 hover:border-neutral-200' : 'hover:-translate-y-1 hover:border-neutral-300 hover:shadow-md'}`}>
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between items-start">
                    <span className="inline-block bg-neutral-100 text-neutral-600 border border-neutral-200 px-2.5 py-0.5 rounded-md text-[9px] font-bold uppercase tracking-wider">
                      Stock Modular
                    </span>
                    <span className="text-[10px] text-neutral-400 font-semibold font-mono">MOQ: 100pcs</span>
                  </div>
                  <h3 className="text-xl md:text-2xl font-extrabold text-neutral-900 mt-2.5 font-['Outfit']">
                    Stock Conventional
                  </h3>
                  <p className="text-xs text-neutral-400 mt-1 leading-relaxed">
                    Premade high-barrier stock pouches with attachments. Fast 3-5 days delivery, $0 Cylinder plate wavied.
                  </p>
                </div>

                {/* Stock Options Sub-Toggle (Card, Tag, Sticker) */}
                <div className="bg-neutral-50 border border-neutral-250/70 p-1 rounded-xl grid grid-cols-3 text-center text-[10px] font-bold font-sans">
                  <button 
                    type="button" 
                    onClick={() => sizeMode === 'standard' && setStockOption('card')}
                    disabled={sizeMode === 'custom'}
                    className={`py-1.5 rounded-lg transition ${stockOption === 'card' ? 'bg-white text-neutral-900 shadow-sm border border-neutral-200/50 font-black' : 'text-neutral-500'}`}
                  >
                    Insert Card
                  </button>
                  <button 
                    type="button" 
                    onClick={() => sizeMode === 'standard' && setStockOption('tag')}
                    disabled={sizeMode === 'custom'}
                    className={`py-1.5 rounded-lg transition ${stockOption === 'tag' ? 'bg-white text-neutral-900 shadow-sm border border-neutral-200/50 font-black' : 'text-neutral-500'}`}
                  >
                    Roped Tag
                  </button>
                  <button 
                    type="button" 
                    onClick={() => sizeMode === 'standard' && setStockOption('sticker')}
                    disabled={sizeMode === 'custom'}
                    className={`py-1.5 rounded-lg transition ${stockOption === 'sticker' ? 'bg-white text-neutral-900 shadow-sm border border-neutral-200/50 font-black' : 'text-neutral-500'}`}
                  >
                    Stickers
                  </button>
                </div>

                {/* Dynamic Product Visual Thumbnail with Click to enlarge Lightbox zoom */}
                <div 
                  onClick={() => setEnlargedImage(cardData.image)}
                  className="w-full aspect-[16/10] border border-neutral-200/80 rounded-2xl overflow-hidden shadow-inner relative group bg-neutral-50 flex items-center justify-center cursor-zoom-in"
                >
                  <img src={cardData.image} alt={cardData.badge} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-103" />
                  <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="bg-white/95 text-neutral-800 text-[10px] font-bold px-2 py-1 rounded-lg border border-neutral-200/70 shadow-md">Click to Zoom</span>
                  </div>
                </div>

                {/* Primary Price - Big Bold & Obvious */}
                <div className="border-t border-b border-neutral-100 py-5">
                  <div className="flex items-baseline gap-1">
                    <span className="text-5xl font-extrabold text-neutral-900 tracking-tight font-['Outfit']">
                      ${cardData.unitPrice.toFixed(2)}
                    </span>
                    <span className="text-sm text-neutral-450 font-bold">/ pouch</span>
                  </div>
                  <div className="text-[11px] text-neutral-500 font-bold mt-1.5">
                    Estimated Total: <span className="text-neutral-900">${cardData.totalCost.toLocaleString(undefined, {minimumFractionDigits: 2})} USD</span> for {numDesigns} SKUs
                  </div>
                </div>

                {/* Sizing & Material labels under price */}
                <div className="bg-neutral-50 border border-neutral-200/80 rounded-2xl p-3 text-center">
                  <span className="text-[10px] text-neutral-400 uppercase font-mono tracking-wider font-bold block">Sizing details</span>
                  <div className="text-xs font-black text-neutral-800 mt-0.5 truncate">
                    approx {selectedSize.dimensions}
                  </div>
                  <span className="text-[9px] text-amber-700 bg-amber-50 border border-amber-100/50 px-2 py-0.5 rounded-full inline-block mt-1 font-bold">
                    Size & material subject to stock availability
                  </span>
                </div>

                {/* Features points */}
                <div className="space-y-3 pt-2">
                  <h4 className="text-[10px] font-extrabold uppercase tracking-widest text-neutral-400">Included in Stock Conventional</h4>
                  <ul className="space-y-2 text-xs font-semibold text-neutral-600">
                    {cardData.points.map((pt, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" strokeWidth={3} />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-8">
                <button
                  onClick={() => setExpandedOption('stock-cards')}
                  className="w-full bg-neutral-50 hover:bg-neutral-100 text-neutral-800 border border-neutral-200 font-extrabold text-xs py-3 rounded-xl transition duration-150 active:scale-95 flex items-center justify-center gap-1 select-none cursor-pointer"
                >
                  View Technical Specs
                </button>
              </div>
            </div>

            {/* TIER 2 CARD: CUSTOM OVAL BOTTOM ECO */}
            <div className={`bg-white border border-neutral-200/80 rounded-3xl p-6 shadow-sm flex flex-col justify-between relative group transition-all duration-300 ${sizeMode === 'custom' ? 'opacity-50 hover:border-neutral-200' : 'hover:-translate-y-1 hover:border-neutral-300 hover:shadow-md'}`}>
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between items-start">
                    <span className="inline-block bg-blue-50 text-blue-700 border border-blue-100 px-2.5 py-0.5 rounded-md text-[9px] font-bold uppercase tracking-wider">
                      Custom Oval Stand-Up
                    </span>
                    <span className="text-[10px] text-emerald-600 font-bold font-mono">MOQ: 500pcs</span>
                  </div>
                  <h3 className="text-xl md:text-2xl font-extrabold text-neutral-900 mt-2.5 font-['Outfit']">
                    Custom Oval Bottom Eco
                  </h3>
                  <p className="text-xs text-neutral-400 mt-1 leading-relaxed">
                    Stand-Up Pouch Shape (Doypack). Saves 50% material costs compared to flat bottom designs. Waived Cylinder plates.
                  </p>
                </div>

                {/* Custom Oval Options Sub-Toggle (PE+EVOH vs Compostable) */}
                <div className="bg-neutral-50 border border-neutral-200 p-1 rounded-xl grid grid-cols-2 text-center text-[10px] font-bold font-sans">
                  <button 
                    type="button" 
                    onClick={() => sizeMode === 'standard' && setOvalEcoOption('pe-evoh')}
                    disabled={sizeMode === 'custom'}
                    className={`py-1.5 rounded-lg transition ${ovalEcoOption === 'pe-evoh' ? 'bg-white text-emerald-700 shadow-sm border border-neutral-200/50 font-black' : 'text-neutral-500'}`}
                  >
                    ♻️ Recyclable PE
                  </button>
                  <button 
                    type="button" 
                    onClick={() => sizeMode === 'standard' && setOvalEcoOption('compostable')}
                    disabled={sizeMode === 'custom'}
                    className={`py-1.5 rounded-lg transition ${ovalEcoOption === 'compostable' ? 'bg-white text-emerald-700 shadow-sm border border-neutral-200/50 font-black' : 'text-neutral-500'}`}
                  >
                    🌱 Compostable
                  </button>
                </div>

                {/* Click to Zoom Visual Pouch Image */}
                <div 
                  onClick={() => setEnlargedImage(ovalData.image)}
                  className="w-full aspect-[16/10] border border-neutral-200/80 rounded-2xl overflow-hidden shadow-inner relative group bg-neutral-50 flex items-center justify-center cursor-zoom-in"
                >
                  <img src={ovalData.image} alt={ovalData.badge} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-103" />
                  <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="bg-white/95 text-neutral-800 text-[10px] font-bold px-2 py-1 rounded-lg border border-neutral-200/70 shadow-md">Click to Zoom</span>
                  </div>
                </div>

                {/* Primary Price - Big Bold & Obvious */}
                <div className="border-t border-b border-neutral-100 py-5">
                  {ovalData.isBelowMoq ? (
                    <div className="py-2">
                      <span className="text-2xl font-extrabold text-red-500 uppercase tracking-wider block font-['Outfit']">Below MOQ</span>
                      <span className="text-[10px] text-neutral-400 font-semibold mt-1 block">Custom printed orders require 500+ pcs</span>
                    </div>
                  ) : (
                    <>
                      <div className="flex items-baseline gap-1">
                        <span className="text-5xl font-extrabold text-neutral-900 tracking-tight font-['Outfit']">
                          ${ovalData.unitPrice.toFixed(2)}
                        </span>
                        <span className="text-sm text-neutral-450 font-bold">/ pouch</span>
                      </div>
                      <div className="text-[11px] text-emerald-600 font-bold mt-1.5 flex items-center gap-1">
                        <Zap className="w-3.5 h-3.5 text-emerald-500 fill-emerald-100" /> <span className="text-neutral-900">${ovalData.totalCost.toLocaleString(undefined, {minimumFractionDigits: 2})} USD total</span>
                      </div>
                    </>
                  )}
                </div>

                {/* Sizing & Material labels under price */}
                <div className="bg-neutral-50 border border-neutral-200/80 rounded-2xl p-3 text-center">
                  <span className="text-[10px] text-neutral-400 uppercase font-mono tracking-wider font-bold block">Sizing details</span>
                  <div className="text-xs font-black text-neutral-800 mt-0.5 truncate">
                    {sizeMode === 'custom' ? 'Millimeter Scale customizable size' : `approx ${selectedSize.dimensions}`}
                  </div>
                  <span className="text-[9px] text-emerald-700 bg-emerald-50 border border-emerald-100 px-2 py-0.5 rounded-full inline-block mt-1 font-bold">
                    {sizeMode === 'custom' ? 'Fully Customizable Sizing' : 'Customizable Size'}
                  </span>
                </div>

                {/* Features points */}
                <div className="space-y-3 pt-2">
                  <h4 className="text-[10px] font-extrabold uppercase tracking-widest text-neutral-400">Oval bottom features</h4>
                  <ul className="space-y-2 text-xs font-semibold text-neutral-600">
                    {ovalData.points.map((pt, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" strokeWidth={3} />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-8">
                <button
                  onClick={() => setExpandedOption('custom-oval')}
                  className="w-full bg-neutral-50 hover:bg-neutral-100 text-neutral-800 border border-neutral-200 font-extrabold text-xs py-3 rounded-xl transition duration-150 active:scale-95 flex items-center justify-center gap-1 select-none cursor-pointer"
                >
                  View Technical Specs
                </button>
              </div>
            </div>

            {/* TIER 3 CARD: CUSTOM FLAT BOTTOM ECO */}
            <div className={`bg-white border rounded-3xl p-6 flex flex-col justify-between relative group transition-all duration-300 scale-[1.02] shadow-[0_12px_36px_rgba(0,0,0,0.06)] border-emerald-600/30 ring-4 ring-emerald-500/5`}>
              <div className="absolute top-0 right-6 -translate-y-1/2 bg-emerald-600 text-white text-[9px] font-bold uppercase tracking-widest px-3 py-1 rounded-full shadow-sm">
                HERO FLAT BOTTOM BOX Gusset
              </div>

              <div className="space-y-6">
                <div>
                  <div className="flex justify-between items-start">
                    <span className="inline-block bg-emerald-50 text-emerald-700 border border-emerald-100 px-2.5 py-0.5 rounded-md text-[9px] font-bold uppercase tracking-wider">
                      Custom Premium Flat Bottom
                    </span>
                    <span className="text-[10px] text-emerald-600 font-bold font-mono">MOQ: 500pcs</span>
                  </div>
                  <h3 className="text-xl md:text-2xl font-extrabold text-neutral-900 mt-2.5 font-['Outfit']">
                    Custom Flat Bottom Eco
                  </h3>
                  <p className="text-xs text-neutral-400 mt-1 leading-relaxed">
                    Box-Style Flat Bottom Shape with Side Gussets. Maximizes volume and retail shelf presentation. Waived digital cylinder setups.
                  </p>
                </div>

                {/* Custom Flat bottom Options Sub-Toggle (PE+EVOH vs Compostable) */}
                <div className="bg-neutral-50 border border-neutral-200 p-1 rounded-xl grid grid-cols-2 text-center text-[10px] font-bold font-sans">
                  <button 
                    type="button" 
                    onClick={() => setFlatEcoOption('pe-evoh')}
                    className={`py-1.5 rounded-lg transition ${flatEcoOption === 'pe-evoh' ? 'bg-white text-emerald-700 shadow-sm border border-neutral-200/50 font-black' : 'text-neutral-500'}`}
                  >
                    ♻️ Recyclable PE
                  </button>
                  <button 
                    type="button" 
                    onClick={() => setFlatEcoOption('compostable')}
                    className={`py-1.5 rounded-lg transition ${flatEcoOption === 'compostable' ? 'bg-white text-emerald-700 shadow-sm border border-neutral-200/50 font-black' : 'text-neutral-500'}`}
                  >
                    🌱 Compostable
                  </button>
                </div>

                {/* Dynamic Inline Selector ONLY when Custom Size is active inside Flat Bottom Eco card */}
                {sizeMode === 'custom' && (
                  <div className="bg-emerald-50/50 border border-emerald-100 p-2.5 rounded-xl space-y-1.5">
                    <span className="block text-[10px] font-bold uppercase text-emerald-950 font-mono tracking-wider">
                      Reference Capacity (選擇起算容量)
                    </span>
                    <div className="grid grid-cols-4 gap-1 text-[10px] text-center font-bold">
                      {BAG_SIZES.map(s => (
                        <button
                          key={s.id}
                          type="button"
                          onClick={() => setSelectedSize(s)}
                          className={`py-1.5 rounded-lg border transition ${selectedSize.id === s.id ? 'bg-white border-emerald-600 text-emerald-700 shadow-sm font-black' : 'bg-transparent border-neutral-200 text-neutral-500 hover:text-neutral-900'}`}
                        >
                          {s.label}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Click to Zoom Visual Pouch Image */}
                <div 
                  onClick={() => setEnlargedImage(flatData.image)}
                  className="w-full aspect-[16/10] border border-neutral-200/80 rounded-2xl overflow-hidden shadow-inner relative group bg-neutral-50 flex items-center justify-center cursor-zoom-in"
                >
                  <img src={flatData.image} alt={flatData.badge} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-103" />
                  <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="bg-white/95 text-neutral-800 text-[10px] font-bold px-2 py-1 rounded-lg border border-neutral-200/70 shadow-md">Click to Zoom</span>
                  </div>
                </div>

                {/* Primary Price - Big Bold & Obvious */}
                <div className="border-t border-b border-neutral-100 py-5">
                  {flatData.isBelowMoq ? (
                    <div className="py-2">
                      <span className="text-2xl font-extrabold text-red-500 uppercase tracking-wider block font-['Outfit']">Below MOQ</span>
                      <span className="text-[10px] text-neutral-400 font-semibold mt-1 block">Custom printed orders require 500+ pcs</span>
                    </div>
                  ) : (
                    <>
                      <div className="flex items-baseline gap-1">
                        <span className="text-5xl font-extrabold text-neutral-900 tracking-tight font-['Outfit']">
                          ${flatData.unitPrice.toFixed(2)}
                        </span>
                        <span className="text-sm text-neutral-450 font-bold">/ pouch</span>
                      </div>
                      <div className="text-[11px] text-neutral-500 font-bold mt-1.5">
                        Estimated Total: <span className="text-neutral-900">${flatData.totalCost.toLocaleString(undefined, {minimumFractionDigits: 2})} USD</span> for {numDesigns} SKUs
                      </div>
                    </>
                  )}
                </div>

                {/* Sizing & Material labels under price */}
                <div className="bg-neutral-50 border border-neutral-200/80 rounded-2xl p-3 text-center">
                  <span className="text-[10px] text-neutral-400 uppercase font-mono tracking-wider font-bold block">Sizing details</span>
                  <div className="text-xs font-black text-neutral-800 mt-0.5 truncate">
                    {sizeMode === 'custom' ? 'Millimeter Scale customizable size' : `approx ${selectedSize.dimensions}`}
                  </div>
                  <span className="text-[9px] text-emerald-700 bg-emerald-50 border border-emerald-100 px-2 py-0.5 rounded-full inline-block mt-1 font-bold">
                    {sizeMode === 'custom' ? 'Fully Customizable Sizing' : 'Customizable Size'}
                  </span>
                </div>

                {/* Features points */}
                <div className="space-y-3 pt-2">
                  <h4 className="text-[10px] font-extrabold uppercase tracking-widest text-neutral-400">Flat bottom features</h4>
                  <ul className="space-y-2 text-xs font-semibold text-neutral-600">
                    {flatData.points.map((pt, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" strokeWidth={3} />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-8">
                <button
                  onClick={() => setExpandedOption('custom-flat')}
                  className="w-full bg-neutral-900 hover:bg-neutral-850 text-white font-extrabold text-xs py-3 rounded-xl transition duration-150 active:scale-95 flex items-center justify-center gap-1 select-none cursor-pointer"
                >
                  View Technical Specs
                </button>
              </div>
            </div>

          </div>
        </section>

        {/* ENTERPRISE CONTRACTS SECTION */}
        <section className="max-w-7xl mx-auto px-4 md:px-6 pt-16">
          <div className="relative rounded-3xl border border-neutral-200/80 bg-white p-6 md:p-8 shadow-sm flex flex-col md:grid md:grid-cols-12 gap-8 items-center text-left max-w-5xl mx-auto">
            <div className="absolute top-0 right-0 bg-neutral-900 text-white font-mono text-[9px] font-bold uppercase px-3 py-1 rounded-bl-xl tracking-widest">
              ENTERPRISE CONTRACTS
            </div>
            
            <div className="md:col-span-8 space-y-4">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase bg-neutral-150/60 text-neutral-700">
                <Sparkles className="w-3.5 h-3.5 text-neutral-650" />
                Custom Contract Runs (10,000+ units)
              </span>
              <h2 className="text-2xl md:text-4xl font-extrabold text-neutral-950 tracking-tight leading-none font-['Outfit']">
                Bespoke Enterprise Pricing
              </h2>
              <p className="text-sm text-neutral-500 leading-relaxed max-w-xl">
                For established commercial roasters and multi-SKU brands with high production volume requirements, we offer tailormade dimension sizing, optimized barrier laminates, gravure share pricing, and integrated DDP warehousing logistics.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-3.5 pt-2 text-xs font-semibold text-neutral-600 font-sans">
                <div className="flex items-start gap-2.5">
                  <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-neutral-900 font-extrabold block">Volume Contract Scaling</span>
                    Reduce unit rates aggressively down to $0.10 - $0.35 USD/unit.
                  </div>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-neutral-900 font-extrabold block">Tailored Millimeter Dims</span>
                    Millimeter-precise length, width, and side-gussets for specialized volume matching.
                  </div>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-neutral-900 font-extrabold block">Gravure Consolidation Runs</span>
                    Co-printing cylinder share that waives structural plate setup costs completely.
                  </div>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-neutral-900 font-extrabold block">B2B Warehouse & Credit Plans</span>
                    Split shipments, door-to-door DDP, regional stocking, and flexible payment terms.
                  </div>
                </div>
              </div>
            </div>
            
            <div className="md:col-span-4 bg-neutral-50 border border-neutral-200 p-6 rounded-2xl flex flex-col gap-4 justify-between w-full shadow-inner relative overflow-hidden">
              <div className="absolute top-0 inset-x-0 h-0.5 bg-neutral-300" />
              
              <div className="text-center md:text-left space-y-1">
                <span className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest block font-mono">B2B custom runs</span>
                <div className="flex items-baseline justify-center md:justify-start gap-1">
                  <span className="text-3xl font-extrabold text-neutral-900 font-['Outfit']">$0.10</span>
                  <span className="text-xs text-neutral-400 font-medium">/ unit starting</span>
                </div>
                <p className="text-[10px] text-emerald-600 font-bold pt-1">
                  Waived plate cylinder setup fees included
                </p>
              </div>
              
              <div className="space-y-2 pt-2">
                <a 
                  href="https://calendly.com/achievepack/custom" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-full block bg-neutral-900 hover:bg-neutral-850 text-white font-extrabold uppercase text-xs py-3 rounded-xl text-center transition duration-150 active:scale-95 shadow-sm shadow-neutral-900/10 cursor-pointer"
                >
                  Schedule Consultation
                </a>
                <button 
                  onClick={handleWhatsappCopy} 
                  className="w-full bg-white hover:bg-neutral-50 text-neutral-800 border border-neutral-200 hover:border-neutral-300 font-extrabold uppercase text-xs py-2.5 rounded-xl transition duration-150 active:scale-95 flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <Phone className="w-3.5 h-3.5 fill-neutral-800 stroke-none" /> WhatsApp Specialist
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* B2B FEATURE MATRIX COMPARISON TABLE */}
        <section className="max-w-7xl mx-auto px-4 md:px-6 pt-16">
          <div className="border border-neutral-200 bg-white rounded-3xl p-6 shadow-sm overflow-hidden max-w-5xl mx-auto">
            <h3 className="text-lg font-extrabold text-neutral-950 uppercase border-b border-neutral-100 pb-4 flex items-center gap-2 font-['Outfit']">
              <CheckCircle className="w-5 h-5 text-emerald-600" /> Options Feature Comparison Matrix
            </h3>
            <div className="overflow-x-auto mt-4 font-sans">
              <table className="w-full text-left border-collapse min-w-[800px] text-xs font-semibold text-neutral-700">
                <thead>
                  <tr className="border-b border-neutral-200 bg-neutral-50">
                    <th className="p-3 font-bold uppercase text-neutral-400 w-[200px]">Parameter Specs</th>
                    <th className="p-3 font-bold uppercase text-neutral-900 border-l border-neutral-100">Stock Conventional</th>
                    <th className="p-3 font-bold uppercase text-neutral-900 border-l border-neutral-100">Custom Oval Bottom Eco</th>
                    <th className="p-3 font-bold uppercase text-neutral-900 border-l border-neutral-100">Custom Recyclable Flat</th>
                    <th className="p-3 font-bold uppercase text-neutral-900 border-l border-neutral-100">Custom Compostable Flat</th>
                  </tr>
                </thead>
                <tbody>
                  {TABLE_CATEGORIES.map((category, catIdx) => (
                    <React.Fragment key={catIdx}>
                      {/* Category Divider with prominent gray background */}
                      <tr className="bg-neutral-100 border-t border-b border-neutral-200">
                        <td colSpan={5} className="p-3 text-[10px] font-extrabold uppercase tracking-wider text-neutral-600 select-none">
                          {category.title}
                        </td>
                      </tr>
                      {/* Sub-Rows with alternating gray degree shading */}
                      {category.rows.map((row, rowIdx) => {
                        const isOdd = rowIdx % 2 === 1;
                        const rowBgClass = isOdd ? 'bg-neutral-50/60 hover:bg-neutral-100/50' : 'bg-white hover:bg-neutral-50/40';
                        return (
                          <tr key={rowIdx} className={`border-b border-neutral-150 transition-colors ${rowBgClass}`}>
                            <td className="p-3 text-xs font-bold text-neutral-900 bg-neutral-50/30 w-[200px]">{row.name}</td>
                            <td className="p-3 border-l border-neutral-150 text-[11px] font-medium text-neutral-600">{row.stockCards}</td>
                            <td className="p-3 border-l border-neutral-150 text-[11px] font-medium text-neutral-600">{row.customStandard}</td>
                            <td className="p-3 border-l border-neutral-150 text-[11px] font-medium text-neutral-600">{row.customRecyclable}</td>
                            <td className="p-3 border-l border-neutral-150 text-[11px] font-medium text-neutral-600">{row.customCompostable}</td>
                          </tr>
                        );
                      })}
                    </React.Fragment>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* COLLAPSED FAQS SECTION */}
        <section className="max-w-3xl mx-auto px-4 md:px-6 pt-16">
          <div className="text-center space-y-2 mb-8">
            <h2 className="text-2xl md:text-3xl font-extrabold text-neutral-950 font-['Outfit']">
              Frequently Asked Questions
            </h2>
            <p className="text-xs text-neutral-400 font-semibold uppercase tracking-wider">
              ❓ B2B Custom Printed pouches & MOQ FAQ
            </p>
          </div>

          <div className="space-y-3">
            {[
              {
                q: "Why are Custom Oval Bottom and Custom Flat Bottom Eco pricing hidden if I choose 100 pcs?",
                a: "Because custom print orders require a Minimum Order Quantity (MOQ) of 500 pcs per size and design to calibrate our high-resolution HP Indigo digital printers. For quantities below 500 (such as 100 pcs MOQ), please choose the Stock Conventional modular branding system which supports $0 plate cylinder setup fees."
              },
              {
                q: "How does the half-price volume discount for 5,000 pcs work?",
                a: "To make B2B growth as smooth as possible for commercial roasters, we offer extremely steep scale discounts. For a production run of 5,000 pcs or more per design, the per-unit price is strictly half of the 1,000 pcs unit price. This makes bulk runs highly economical."
              },
              {
                q: "Can I adjust the width, height, or gusset to custom millimeter dimensions?",
                a: "Yes! For both the PE+EVOH Recyclable and certified Biodegradable Compostable options, Achieve Pack provides completely custom tailored sizing. If you require dimensions smaller than our standard listings (e.g., to match custom coffee weight metrics), there is no extra setup premium. We adjust structural layouts for free."
              },
              {
                q: "What is the difference between PE+EVOH Recyclable and Compostable pouches?",
                a: "Our recyclable option uses a high-barrier Mono-PE structure with an integrated EVOH gas-lock layer, globally certified as Class 4 SPI Recyclable and completely free of microplastics. Our compostable option uses certified bio-laminated Kraft paper shells and plant-based barrier sheets that decompose naturally in industrial composting facilities."
              },
              {
                q: "How long is the B2B lead delivery time?",
                a: "Stock pouch attachments dispatch locally in 3-5 days from stock. Custom printed stand-up oval bottom eco runs take 20 days, and premium eco-sustainable flat bottom custom runs take 20-25 days, which includes structural validation checks and quality control checks."
              }
            ].map((faq, idx) => {
              const isOpen = faqStates[idx];
              return (
                <div 
                  key={idx} 
                  className="bg-white border border-neutral-200 rounded-2xl overflow-hidden transition-all duration-300 hover:border-neutral-350 shadow-sm"
                >
                  <button 
                    type="button" 
                    onClick={() => toggleFaq(idx)}
                    className="w-full flex items-center justify-between p-4 font-bold text-left text-neutral-850 hover:text-neutral-950 transition duration-150 select-none cursor-pointer text-sm"
                  >
                    <span>{faq.q}</span>
                    <span className="p-1 rounded-lg bg-neutral-50 border border-neutral-200/80 text-neutral-500 shrink-0 ml-4">
                      {isOpen ? <ChevronDown className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
                    </span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <div className="p-4 pt-0 text-xs font-semibold text-neutral-500 leading-relaxed border-t border-neutral-100 bg-neutral-50/50">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              )
            })}
          </div>
        </section>
      </div>
    )
  }

  // Determine isEco domain flag
  const isEco = isPouch()

  return (
    <div className="min-h-screen bg-white">
      {isEco ? (
        <PouchLayout>
          {renderUnifiedPricingPage()}
        </PouchLayout>
      ) : (
        <div className="min-h-screen flex flex-col justify-between bg-white">
          <SiteHeader />
          <div className="flex-grow">
            {renderUnifiedPricingPage()}
          </div>
          <Footer />
        </div>
      )}

      {/* Enlarged Image Lightbox Modal */}
      <AnimatePresence>
        {enlargedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setEnlargedImage(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 cursor-zoom-out"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="relative max-w-3xl max-h-[85vh] border border-neutral-250 bg-white rounded-3xl p-3 shadow-2xl overflow-hidden flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <img 
                src={enlargedImage} 
                alt="Enlarged Packaging Preview" 
                className="max-w-full max-h-[80vh] object-contain rounded-2xl border border-neutral-100"
              />
              <button 
                onClick={() => setEnlargedImage(null)}
                className="absolute top-4 right-4 bg-neutral-900 hover:bg-neutral-850 text-white font-extrabold text-xs px-3 py-1.5 rounded-full transition cursor-pointer font-sans"
              >
                ✕ Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Product Specifications & Details Lightbox Modal */}
      <AnimatePresence>
        {expandedOption && (() => {
          let data = { unitPrice: 0, totalCost: 0, isBelowMoq: true, moq: 500, badge: '', desc: '', certLogo: '', leadTime: '', image: '', points: [] as string[] };
          if (expandedOption === 'stock-cards') {
            data = cardData;
          } else if (expandedOption === 'custom-oval') {
            data = ovalData;
          } else if (expandedOption === 'custom-flat') {
            data = flatData;
          }
          return (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setExpandedOption(null)}
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-md p-4 cursor-zoom-out"
            >
              <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                className="relative max-w-xl w-full border border-neutral-200 bg-white rounded-3xl p-6 text-neutral-850 shadow-2xl max-h-[90vh] overflow-y-auto cursor-default font-sans"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Modal Header */}
                <div className="flex justify-between items-start border-b border-neutral-100 pb-4 mb-4">
                  <div>
                    <span className="inline-block text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-700">
                      {data.certLogo || 'Spec Sheet'}
                    </span>
                    <h2 className="text-xl font-extrabold text-neutral-900 mt-1 leading-tight font-['Outfit']">
                      {data.badge}
                    </h2>
                  </div>
                  <button
                    onClick={() => setExpandedOption(null)}
                    className="font-bold uppercase text-[10px] px-2.5 py-1 rounded-lg bg-neutral-100 hover:bg-neutral-200 text-neutral-600 transition duration-150 active:scale-95 cursor-pointer"
                  >
                    ✕ Close
                  </button>
                </div>

                {/* Modal Body */}
                <div className="space-y-4">
                  {expandedOption === 'stock-cards' && stockOption === 'sticker' ? (
                    <div className="grid grid-cols-2 gap-2">
                      <div className="relative group overflow-hidden border border-neutral-200 rounded-xl bg-neutral-50 aspect-square flex items-center justify-center shadow-inner">
                        <img src="/imgs/store/products/flat-bottom-one-sided-zipper-conventional-thumbnail-1.jpg" alt="Matte White Kraft Pouch" className="w-full h-full object-cover rounded-lg" />
                        <span className="absolute bottom-1 right-1 bg-black/75 text-[9px] font-bold text-white px-1.5 py-0.5 rounded">
                          White / Kraft
                        </span>
                      </div>
                      <div className="relative group overflow-hidden border border-neutral-200 rounded-xl bg-neutral-50 aspect-square flex items-center justify-center shadow-inner">
                        <img src="/imgs/store/products/flat-bottom-one-sided-zipper-conventional-thumbnail-3.jpg" alt="High Clarity Transparent Pouch" className="w-full h-full object-cover rounded-lg" />
                        <span className="absolute bottom-1 right-1 bg-emerald-900/80 text-[9px] font-bold text-white px-1.5 py-0.5 rounded">
                          Transparent Option
                        </span>
                      </div>
                    </div>
                  ) : (
                    <div className="relative group overflow-hidden border border-neutral-200 rounded-xl bg-neutral-50 aspect-[16/9] flex items-center justify-center max-w-sm mx-auto shadow-sm">
                      <img src={data.image} alt={data.badge} className="w-full h-full object-cover rounded-lg" />
                    </div>
                  )}

                  <div className="space-y-4">
                    <div>
                      <h4 className="text-[10px] font-extrabold uppercase tracking-widest text-neutral-400">Product Overview</h4>
                      <p className="text-xs font-semibold leading-relaxed text-neutral-500 mt-1">
                        {data.desc}
                      </p>
                    </div>

                    <div>
                      <h4 className="text-[10px] font-extrabold uppercase tracking-widest text-neutral-400 mb-2">Key Highlights</h4>
                      <ul className="space-y-2 text-xs font-semibold text-neutral-600">
                        {data.points?.map((pt, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" strokeWidth={3} />
                            <span>{pt}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {(expandedOption === 'custom-oval' || expandedOption === 'custom-flat') && (
                      <div className="bg-emerald-50 border border-emerald-100 rounded-xl p-3 text-[10px] text-emerald-700 leading-normal">
                        💡 **Custom sizing & layout** is fully supported! Achieve Pack can adjust exact pouch width/height dimensions to perfectly optimize your packaging cost margins.
                      </div>
                    )}

                    <div className="border-t border-neutral-100 pt-4 flex justify-between items-center text-xs font-bold font-sans">
                      <div>
                        <span className="text-neutral-400 block uppercase text-[10px]">Lead Time</span>
                        <span className="text-neutral-800">{data.leadTime}</span>
                      </div>
                      <div className="text-right">
                        <span className="text-neutral-400 block uppercase text-[10px]">Minimum Order (MOQ)</span>
                        <span className="text-emerald-600">{data.moq.toLocaleString()} pcs</span>
                      </div>
                    </div>
                  </div>
                </div>

              </motion.div>
            </motion.div>
          );
        })()}
      </AnimatePresence>
    </div>
  )
}
