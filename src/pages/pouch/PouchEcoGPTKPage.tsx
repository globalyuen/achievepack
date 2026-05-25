import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { 
  Coffee, Leaf, Zap, CheckCircle, ArrowRight, Shield, Award, Box, 
  Sparkles, DollarSign, Clock, HelpCircle, Mail, Download, Compass, 
  MapPin, Check, Layers, AlertCircle, ShoppingBag, Grid, Info, Sparkle, Globe,
  Copy, Phone, RefreshCw, AlertTriangle
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
  { id: 'size-1', label: '160 × 260 + 80 mm', dimensions: '160 × 260 + 80 mm', capacity: 'approx 150g' },
  { id: 'size-2', label: '180 × 280 + 80 mm', dimensions: '180 × 280 + 80 mm', capacity: 'approx 250g' },
  { id: 'size-3', label: '200 × 300 + 80 mm', dimensions: '200 × 300 + 80 mm', capacity: 'approx 500g' },
  { id: 'size-4', label: '260 × 340 + 80 mm', dimensions: '260 × 340 + 80 mm', capacity: 'approx 1000g' },
]

interface TableRow {
  name: string
  values: Record<string, string>
  isEco: Record<string, boolean>
}

const TABLE_ROWS: TableRow[] = [
  {
    name: '1. Base Material',
    values: {
      'stock-cards': 'Conventional Base Pouch',
      'stock-tag': 'Conventional Base Pouch',
      'conventional-stock': 'Conventional Base Pouch',
      'recyclable-doypack': 'Eco (Recyclable/Compostable)',
      'recyclable': 'Eco-Friendly Mono-PE',
      'compostable': 'Eco-Friendly Home Compostable'
    },
    isEco: {
      'stock-cards': false,
      'stock-tag': false,
      'conventional-stock': false,
      'recyclable-doypack': true,
      'recyclable': true,
      'compostable': true
    }
  },
  {
    name: '2. Zipper Closure',
    values: {
      'stock-cards': 'Regular Double-Track Zipper',
      'stock-tag': 'Airtight One-Sided Zipper',
      'conventional-stock': 'Airtight One-Sided Zipper',
      'recyclable-doypack': 'Airtight One-Sided Zipper',
      'recyclable': 'Airtight One-Sided Zipper',
      'compostable': 'Airtight One-Sided Zipper'
    },
    isEco: {
      'stock-cards': true,
      'stock-tag': true,
      'conventional-stock': true,
      'recyclable-doypack': true,
      'recyclable': true,
      'compostable': true
    }
  },
  {
    name: '3. Printing Method',
    values: {
      'stock-cards': 'Unprinted (Plates Waived)',
      'stock-tag': 'Unprinted (Plates Waived)',
      'conventional-stock': 'Unprinted (Includes Custom Sticker)',
      'recyclable-doypack': 'Edge-to-Edge Digital Custom Print',
      'recyclable': 'Edge-to-Edge Digital Custom Print',
      'compostable': 'Edge-to-Edge Digital Custom Print'
    },
    isEco: {
      'stock-cards': false,
      'stock-tag': false,
      'conventional-stock': true,
      'recyclable-doypack': true,
      'recyclable': true,
      'compostable': true
    }
  },
  {
    name: '4. Base Pouch Shape',
    values: {
      'stock-cards': 'Flat Bottom (Box Pouch)',
      'stock-tag': 'Flat Bottom (Box Pouch)',
      'conventional-stock': 'Flat Bottom (Box Pouch)',
      'recyclable-doypack': 'Stand-Up Pouch (Oval Bottom Doypack)',
      'recyclable': 'Flat Bottom (Box Pouch)',
      'compostable': 'Flat Bottom (Box Pouch)'
    },
    isEco: {
      'stock-cards': true,
      'stock-tag': true,
      'conventional-stock': true,
      'recyclable-doypack': true,
      'recyclable': true,
      'compostable': true
    }
  },
  {
    name: '5. Side Gussets',
    values: {
      'stock-cards': 'Side Gusset Included',
      'stock-tag': 'Side Gusset Included',
      'conventional-stock': 'Side Gusset Included',
      'recyclable-doypack': 'No Side Gussets (Oval Bottom Seal)',
      'recyclable': 'Side Gusset Included',
      'compostable': 'Side Gusset Included'
    },
    isEco: {
      'stock-cards': true,
      'stock-tag': true,
      'conventional-stock': true,
      'recyclable-doypack': false,
      'recyclable': true,
      'compostable': true
    }
  },
  {
    name: '6. Barrier Protection',
    values: {
      'stock-cards': 'High-Barrier Multi-Layer',
      'stock-tag': 'High-Barrier Multi-Layer',
      'conventional-stock': 'High-Barrier Option',
      'recyclable-doypack': 'High-Barrier (Recyclable/Compostable)',
      'recyclable': 'Medium-Barrier Protection',
      'compostable': 'High-Barrier certified bio-laminate'
    },
    isEco: {
      'stock-cards': true,
      'stock-tag': true,
      'conventional-stock': true,
      'recyclable-doypack': true,
      'recyclable': false,
      'compostable': true
    }
  },
  {
    name: '7. Clear Display Window',
    values: {
      'stock-cards': 'No Window (Full Aroma Shield)',
      'stock-tag': 'No Window (Full Aroma Shield)',
      'conventional-stock': 'Optional Window (Stock Pouch)',
      'recyclable-doypack': 'Optional Window (Custom Doypack)',
      'recyclable': 'Optional Window (Integrated)',
      'compostable': 'Optional Window (PLA certified)'
    },
    isEco: {
      'stock-cards': false,
      'stock-tag': false,
      'conventional-stock': true,
      'recyclable-doypack': true,
      'recyclable': true,
      'compostable': true
    }
  }
];

export default function PouchEcoGPTKPage() {
  const [totalBudget, setTotalBudget] = useState<number>
(3000)
  const [numDesigns, setNumDesigns] = useState<number>(3)
  const [qtyPerDesign, setQtyPerDesign] = useState<number>(500)
  const [selectedSize, setSelectedSize] = useState<BagSize>(BAG_SIZES[0])
  const [whatsappCopied, setWhatsappCopied] = useState<boolean>(false)
  const [enlargedImage, setEnlargedImage] = useState<string | null>(null)
  const [expandedOption, setExpandedOption] = useState<string | null>(null)

  const getOptionParams = (optionId: string) => {
    switch (optionId) {
      case 'stock-cards':
        return [
          { label: '1. Material', value: '1. conventional ✅ / eco friendly ❌', isPositive: false },
          { label: '2. Zipper', value: '2. regular zipper ✅ / one sided zipper ❌', isPositive: true },
          { label: '3. Print', value: '3. No print ✅ / Digital Print ❌', isPositive: false },
          { label: '4. Shape', value: '4. Flat Bottom ✅ / Oval Bottom ❌', isPositive: true },
          { label: '5. Side Gusset', value: '5. Side Gusset ✅ / No Side Gusset ❌', isPositive: true },
          { label: '6. Barrier', value: '6. Medium Barrier ❌ / High Barrier ✅', isPositive: true },
          { label: '7. Window', value: '7. Window ❌ / No Window ✅', isPositive: true }
        ];
      case 'stock-tag':
        return [
          { label: '1. Material', value: '1. conventional ✅ / eco friendly ❌', isPositive: false },
          { label: '2. Zipper', value: '2. regular zipper ❌ / one sided zipper ✅', isPositive: true },
          { label: '3. Print', value: '3. No print ✅ / Digital Print ❌', isPositive: false },
          { label: '4. Shape', value: '4. Flat Bottom ✅ / Oval Bottom ❌', isPositive: true },
          { label: '5. Side Gusset', value: '5. Side Gusset ✅ / No Side Gusset ❌', isPositive: true },
          { label: '6. Barrier', value: '6. Medium Barrier ❌ / High Barrier ✅', isPositive: true },
          { label: '7. Window', value: '7. Window ❌ / No Window ✅', isPositive: true }
        ];
      case 'conventional-stock':
        return [
          { label: '1. Material', value: '1. conventional ✅ / eco friendly ❌', isPositive: false },
          { label: '2. Zipper', value: '2. regular zipper ❌ / one sided zipper ✅', isPositive: true },
          { label: '3. Print', value: '3. No print ✅ / Digital Print ❌', isPositive: false },
          { label: '4. Shape', value: '4. Flat Bottom ✅ / Oval Bottom ❌', isPositive: true },
          { label: '5. Side Gusset', value: '5. Side Gusset ✅ / No Side Gusset ❌', isPositive: true },
          { label: '6. Barrier', value: '6. Medium Barrier ✅ / High Barrier ✅', isPositive: true },
          { label: '7. Window', value: '7. Window ✅ / No Window ✅', isPositive: true }
        ];
      case 'recyclable-doypack':
        return [
          { label: '1. Material', value: '1. conventional ❌ / eco friendly ✅', isPositive: true },
          { label: '2. Zipper', value: '2. regular zipper ❌ / one sided zipper ✅', isPositive: true },
          { label: '3. Print', value: '3. No print ❌ / Digital Print ✅', isPositive: true },
          { label: '4. Shape', value: '4. Flat Bottom ❌ / Oval Bottom ✅', isPositive: true },
          { label: '5. Side Gusset', value: '5. Side Gusset ❌ / No Side Gusset ✅', isPositive: true },
          { label: '6. Barrier', value: '6. Medium Barrier ✅ / High Barrier ✅', isPositive: true },
          { label: '7. Window', value: '7. Window ✅ / No Window ✅', isPositive: true }
        ];
      case 'recyclable':
        return [
          { label: '1. Material', value: '1. conventional ❌ / eco friendly ✅', isPositive: true },
          { label: '2. Zipper', value: '2. regular zipper ❌ / one sided zipper ✅', isPositive: true },
          { label: '3. Print', value: '3. No print ❌ / Digital Print ✅', isPositive: true },
          { label: '4. Shape', value: '4. Flat Bottom ✅ / Oval Bottom ❌', isPositive: true },
          { label: '5. Side Gusset', value: '5. Side Gusset ✅ / No Side Gusset ❌', isPositive: true },
          { label: '6. Barrier', value: '6. Medium Barrier ✅ / High Barrier ❌', isPositive: false },
          { label: '7. Window', value: '7. Window ✅ / No Window ❌', isPositive: true }
        ];
      case 'compostable':
        return [
          { label: '1. Material', value: '1. conventional ❌ / eco friendly ✅', isPositive: true },
          { label: '2. Zipper', value: '2. regular zipper ❌ / one sided zipper ✅', isPositive: true },
          { label: '3. Print', value: '3. No print ❌ / Digital Print ✅', isPositive: true },
          { label: '4. Shape', value: '4. Flat Bottom ✅ / Oval Bottom ❌', isPositive: true },
          { label: '5. Side Gusset', value: '5. Side Gusset ✅ / No Side Gusset ❌', isPositive: true },
          { label: '6. Barrier', value: '6. Medium Barrier ✅ / High Barrier ✅', isPositive: true },
          { label: '7. Window', value: '7. Window ✅ / No Window ✅', isPositive: true }
        ];
      default:
        return [];
    }
  };

  // Pricing interpolation engine matching user's spreadsheet criteria perfectly
  const calculateOptionPrice = (optionId: string) => {
    const sizeId = selectedSize.dimensions;

    // Option 1, 2 & C: Cost-saving Conventional Group options (flat $0.50 USD no matter quantity)
    if (optionId === 'stock-cards' || optionId === 'stock-tag' || optionId === 'conventional-stock') {
      const unitPrice = 0.50
      const isBelowMoq = qtyPerDesign < 100
      const totalCost = numDesigns * qtyPerDesign * unitPrice

      if (optionId === 'stock-cards') {
        return {
          unitPrice,
          totalCost,
          isBelowMoq,
          moq: 100,
          badge: 'Stock Unprinted Pouch + Card',
          desc: 'Matte stock flat bottom pouches in white/kraft fitted with attached card insertion pocket. $0 plates. Ultra-low B2B barrier.',
          accentColor: '#10B981',
          certLogo: 'FSC Eco Card',
          leadTime: '3 - 5 Days',
          image: '/imgs/store/products/invest-cal-card-insert.jpg',
          points: [
            'Food-Safe High Barrier Stock Materials',
            'Easily Slip in Customized Flavor Cards',
            '$0 Plate Cylinder Fees (Digital/Stamp)',
            'Perfect for Modular Roaster Branding',
            '100pcs Ultra-Low MOQ'
          ]
        }
      } else if (optionId === 'stock-tag') {
        return {
          unitPrice,
          totalCost,
          isBelowMoq,
          moq: 100,
          badge: 'Stock Unprinted Pouch + Tag',
          desc: 'Ultimate airtight and light-shielding seal flat bottom pouch. Reusable with premium side zipper and custom string tag attachment.',
          accentColor: '#FBBF24',
          certLogo: 'Premium Roast Tag',
          leadTime: '3 - 5 Days',
          image: '/imgs/store/products/invest-cal-tag.jpg',
          points: [
            'Ultimate Airtight & Light-Shielding Seal',
            'Reusable with Convenient One-Sided Zipper',
            'Handcrafted String & Tag Premium Feel',
            'Fast Modular Local Delivery',
            '100pcs Ultra-Low MOQ'
          ]
        }
      } else {
        return {
          unitPrice,
          totalCost,
          isBelowMoq,
          moq: 100,
          badge: 'Stock Unprinted Pouch + Sticker',
          desc: 'Premium unprinted stock flat bottom pouch paired with custom branded high-gloss/matte stickers. A highly economical yet professional branding solution.',
          accentColor: '#059669',
          certLogo: 'Custom Sticker',
          leadTime: '3 - 5 Days',
          image: '/imgs/store/products/flat-bottom-one-sided-zipper-conventional-thumbnail-1.jpg',
          points: [
            'Food-Safe High Barrier Triple Laminate',
            'Includes Custom Branded Color Stickers',
            'Sturdy Flat Bottom for Upright Shelf Presentation',
            'No Plate Cylinder Fees (Digital Branded)',
            '100pcs Ultra-Low MOQ'
          ]
        }
      }
    }

    // Custom print options MOQ = 500
    const isBelowMoq = qtyPerDesign < 500

    // Matrices
    const matrices: Record<string, Record<string, { 500: number; 1000: number }>> = {
      'recyclable': {
        '160 × 260 + 80 mm': { 500: 2.50, 1000: 1.70 },
        '180 × 280 + 80 mm': { 500: 2.60, 1000: 1.80 },
        '200 × 300 + 80 mm': { 500: 2.70, 1000: 1.90 },
        '260 × 340 + 80 mm': { 500: 2.90, 1000: 2.10 },
      },
      'recyclable-doypack': {
        '160 × 260 + 80 mm': { 500: 1.25, 1000: 0.85 },
        '180 × 280 + 80 mm': { 500: 1.30, 1000: 0.90 },
        '200 × 300 + 80 mm': { 500: 1.35, 1000: 0.95 },
        '260 × 340 + 80 mm': { 500: 1.45, 1000: 1.05 },
      },
      'compostable': {
        '160 × 260 + 80 mm': { 500: 2.70, 1000: 1.90 },
        '180 × 280 + 80 mm': { 500: 2.80, 1000: 2.00 },
        '200 × 300 + 80 mm': { 500: 2.90, 1000: 2.10 },
        '260 × 340 + 80 mm': { 500: 3.10, 1000: 2.30 },
      }
    }

    const sizeMap = matrices[optionId]?.[sizeId]
    if (!sizeMap) return { unitPrice: 0, totalCost: 0, isBelowMoq: true, moq: 500 }

    let unitPrice = 0
    if (qtyPerDesign <= 500) {
      unitPrice = sizeMap[500]
    } else if (qtyPerDesign >= 1000) {
      unitPrice = sizeMap[1000]
    } else {
      // Linear pricing interpolation
      const p500 = sizeMap[500]
      const p1000 = sizeMap[1000]
      unitPrice = p500 - ((qtyPerDesign - 500) / 500) * (p500 - p1000)
    }

    const totalCost = numDesigns * qtyPerDesign * unitPrice

    if (optionId === 'recyclable') {
      return {
        unitPrice,
        totalCost,
        isBelowMoq,
        moq: 500,
        badge: 'Professional Recyclable Custom Print',
        desc: 'Premium Recyclable Mono-PE flat bottom pouch with advanced one-way degassing valve and integrated clear window for product visibility.',
        accentColor: '#34D399',
        certLogo: '♻️ Code 4 Recyclable',
        leadTime: '20 - 25 Days',
        image: '/imgs/store/products/invest-cal-recyclable.jpg',
        points: [
          'Premium Recyclable Mono-PE Material',
          'Superior High-Barrier with Resealable Zipper',
          'Advanced One-Way Degassing Valve',
          'Integrated Clear Window for product visibility',
          'Code 4 SPI Recyclable & Highly Durable'
        ]
      }
    } else if (optionId === 'recyclable-doypack') {
      return {
        unitPrice,
        totalCost,
        isBelowMoq,
        moq: 500,
        badge: 'Custom Stand-Up Pouch (Recyclable or Industrial Compostable)',
        desc: 'Transition to Doypack shape with an oval bottom gusset. Saves 50% cost while retaining premium high-barrier (PE+EVOH or Matte AL), resealable zipper, one-way degassing valve, and full edge-to-edge custom print.',
        accentColor: '#3B82F6',
        certLogo: '♻️/🌱 Eco-Saver 50%',
        leadTime: '20 - 25 Days',
        image: '/imgs/store/hero/eco-digital.png',
        points: [
          'Saves 50% Cost Compared to Flat Bottom',
          'Mono-PE Recyclable or BPI Compostable',
          'Same Sizing Capacity (Oval Bottom Gusset)',
          'Airtight Resealable Zipper & Degassing Valve',
          '500pcs MOQ / SKU (HP Indigo Digital)'
        ]
      }
    } else {
      return {
        unitPrice,
        totalCost,
        isBelowMoq,
        moq: 500,
        badge: 'Professional Compostable Custom Print',
        desc: '100% Home certified compostable Kraft paper laminate with high-barrier VM-Cello and compostable resealable zipper & valve.',
        accentColor: '#A7F3D0',
        certLogo: '🌱 BPI Compostable',
        leadTime: '20 - 25 Days',
        image: '/imgs/store/products/invest-cal-compostable.jpg',
        points: [
          '100% Home & Industrial Compostable',
          'Kraft Paper & Certified Bio-Lining',
          'Resealable Zipper & Degassing Valve for freshness',
          'High-Barrier against moisture, oxygen, and odor',
          'Decomposes in backyard compost in 12 months'
        ]
      }
    }
  }

  // Compile bilingual RFQ clipboard content
  const getBilingualRfqText = () => {
    const cardPrice = calculateOptionPrice('stock-cards')
    const tagPrice = calculateOptionPrice('stock-tag')
    const conventionalPrice = calculateOptionPrice('conventional-stock')
    const doypackPrice = calculateOptionPrice('recyclable-doypack')
    const recPrice = calculateOptionPrice('recyclable')
    const compPrice = calculateOptionPrice('compostable')

    return `Achieve Pack 咖啡品牌包裝詢價配置 (Invest Cal PaaS RFQ Summary):
--------------------------------------------------
📐 規格尺寸 (Selected Dimension): ${selectedSize.dimensions} (${selectedSize.capacity})
🎨 印刷款式 (Number of Designs): ${numDesigns} 款 (Designs)
📦 單款印量 (Quantity per Design): ${qtyPerDesign} 個 (pcs)
🎁 袋子總數 (Total Bags Quantity): ${numDesigns * qtyPerDesign} 個
💰 用戶目標預算 (Target Budget): $${totalBudget.toLocaleString()} USD

方案實時估算 (Real-time Options Quotation):
1️⃣ 卡牌插卡方案 (Stock Unprinted Pouch + Card):
   - 單價 (Unit): $${cardPrice.unitPrice.toFixed(2)} USD | 總額 (Total): $${cardPrice.totalCost.toFixed(2)} USD ${cardPrice.isBelowMoq ? '(Below MOQ)' : ''}
2️⃣ 吊牌綁帶方案 (Stock Unprinted Pouch + Tag):
   - 單價 (Unit): $${tagPrice.unitPrice.toFixed(2)} USD | 總額 (Total): $${tagPrice.totalCost.toFixed(2)} USD ${tagPrice.isBelowMoq ? '(Below MOQ)' : ''}
3️⃣ 貼紙標籤方案 (Stock Unprinted Pouch + Sticker):
   - 單價 (Unit): $${conventionalPrice.unitPrice.toFixed(2)} USD | 總額 (Total): $${conventionalPrice.totalCost.toFixed(2)} USD ${conventionalPrice.isBelowMoq ? '(Below MOQ)' : ''}
4️⃣ ⚡ 50%省錢自立袋方案 (Custom Stand-Up Pouch Recyclable/Industrial Compostable):
   - 單價 (Unit): $${doypackPrice.unitPrice.toFixed(2)} USD | 總額 (Total): $${doypackPrice.totalCost.toFixed(2)} USD ${doypackPrice.isBelowMoq ? '(Below MOQ)' : ''}
5️⃣ ♻️ 4號標誌單一可回收方底袋方案 (Professional Recyclable Custom Print):
   - 單價 (Unit): $${recPrice.unitPrice.toFixed(2)} USD | 總額 (Total): $${recPrice.totalCost.toFixed(2)} USD ${recPrice.isBelowMoq ? '(Below MOQ)' : ''}
6️⃣ 🌱 BPI認證家用可堆肥方底袋方案 (Professional Compostable Custom Print):
   - 單價 (Unit): $${compPrice.unitPrice.toFixed(2)} USD | 總額 (Total): $${compPrice.totalCost.toFixed(2)} USD ${compPrice.isBelowMoq ? '(Below MOQ)' : ''}

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

  const isEco = isPouch()

  return (
    <div className={`min-h-screen ${isEco ? "bg-[#fafafa] text-neutral-900 font-['Space_Grotesk']" : "bg-[#040d0a] text-neutral-200 font-sans"} selection:bg-emerald-500 selection:text-white`}>
      
      {isEco ? (
        <PouchLayout>
          <Helmet>
            <title>Invest Cal | Brand Packaging Investment Calculator | POUCH.ECO</title>
            <meta name="description" content="Calculate your coffee bags packaging costs instantly with our interactive B2B budget calculator. Compare Card Insert, Tag Attachment, Recyclable PE+EVOH, and Home Compostable options." />
            <link rel="canonical" href="https://pouch.eco/coffee" />
          </Helmet>
          
          <div className="max-w-7xl mx-auto px-4 md:px-6 pt-24 pb-20">
            {/* Header */}
            <div className="border-4 border-black bg-[#D4FF00] p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] mb-8 transform -rotate-1 relative grid md:grid-cols-12 gap-6 items-center">
              <div className="md:col-span-8">
                <h2 className="text-sm font-['JetBrains_Mono'] font-bold text-neutral-800 uppercase tracking-widest">
                  1-PAGE UNIFIED BUDGET TELEMETRY
                </h2>
                <h1 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-black leading-none mt-1">
                  Invest Cal
                </h1>
                <p className="text-xs font-['JetBrains_Mono'] font-bold text-neutral-700 uppercase mt-2">
                  ☕ 咖啡茶葉品牌包裝預算與品牌配置對比計算器 (一版睇清)
                </p>
                <p className="text-sm font-bold mt-4 font-['Space_Grotesk'] text-black/80">
                  Compare modular card insert/tag options against high-barrier customizable Recyclable & Compostable stand-up flat bottom pouches to maximize your packaging investments.
                </p>
              </div>
              <div 
                onClick={() => setEnlargedImage('/imgs/free/invest-cal-hero.jpg')}
                className="md:col-span-4 relative cursor-zoom-in"
              >
                <div className="absolute inset-0 bg-black translate-x-2 translate-y-2 border-2 border-black" />
                <img 
                  src="/imgs/free/invest-cal-hero.jpg" 
                  alt="Invest Cal App Dashboard" 
                  className="relative z-10 border-2 border-black w-full object-cover bg-white hover:opacity-95 transition-opacity"
                />
              </div>
            </div>
            
            {/* 2-Column High-Density Layout Panel */}
            <div className="grid lg:grid-cols-12 gap-6 items-stretch mb-6">
              {/* Col 1: Configurator */}
              <div className="lg:col-span-7 border-4 border-black bg-white p-5 shadow-[6px_6px_0px_rgba(0,0,0,1)] flex flex-col justify-between space-y-4">
                <h3 className="font-black text-lg uppercase border-b-2 border-black pb-2 flex items-center gap-2">
                  <Grid className="w-5 h-5" /> 1. Config Parameters
                </h3>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <div className="flex justify-between text-xs font-bold font-['JetBrains_Mono']">
                      <span>Target Budget:</span>
                      <span className="bg-black text-[#D4FF00] px-1.5">${totalBudget.toLocaleString()}</span>
                    </div>
                    <input type="range" min="500" max="15000" step="250" value={totalBudget} onChange={(e) => setTotalBudget(parseInt(e.target.value))} className="w-full h-2 border border-black rounded cursor-pointer accent-black" />
                  </div>

                  <div className="space-y-1">
                    <div className="flex justify-between text-xs font-bold font-['JetBrains_Mono']">
                      <span>Designs SKUs:</span>
                      <span className="bg-[#00FFFF] border border-black px-1.5 font-black">{numDesigns} SKUs</span>
                    </div>
                    <input type="range" min="1" max="10" step="1" value={numDesigns} onChange={(e) => setNumDesigns(parseInt(e.target.value))} className="w-full h-2 border border-black rounded cursor-pointer accent-black" />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <div className="flex justify-between text-xs font-bold font-['JetBrains_Mono']">
                      <span>Qty / Design:</span>
                      <span className="bg-[#FF00FF] text-white border border-black px-1.5 font-black">{qtyPerDesign} pcs</span>
                    </div>
                    <input type="range" min="100" max="5000" step="50" value={qtyPerDesign} onChange={(e) => setQtyPerDesign(parseInt(e.target.value))} className="w-full h-2 border border-black rounded cursor-pointer accent-black" />
                    <div className="grid grid-cols-5 gap-1 font-['JetBrains_Mono'] text-[9px] font-black pt-1">
                      {[100, 500, 1000, 2000, 5000].map(q => (
                        <button key={q} type="button" onClick={() => setQtyPerDesign(q)} className={`border border-black py-0.5 ${qtyPerDesign === q ? 'bg-black text-white' : 'bg-white'}`}>{q}</button>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-1">
                    <span className="block text-[11px] font-bold uppercase tracking-wider font-['JetBrains_Mono']">Bag Dimensions:</span>
                    <div className="grid grid-cols-2 gap-1 text-[10px] font-bold">
                      {BAG_SIZES.map(s => (
                        <button key={s.id} type="button" onClick={() => setSelectedSize(s)} className={`border border-black p-1 text-left ${selectedSize.id === s.id ? 'bg-[#D4FF00]' : 'bg-white'}`}>
                          <div className="font-black truncate">{s.dimensions}</div>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Col 2: Summary & Lead dispatch */}
              <div className="lg:col-span-5 border-4 border-black bg-neutral-900 text-white p-5 shadow-[6px_6px_0px_rgba(0,0,0,1)] flex flex-col justify-between">
                <div>
                  <h3 className="font-black text-lg uppercase text-[#D4FF00] border-b border-neutral-800 pb-2">2. RFQ Summarizer</h3>
                  <div className="mt-3 font-['JetBrains_Mono'] text-xs space-y-2 font-bold">
                    <div className="flex justify-between border-b border-neutral-800 pb-1">
                      <span className="text-neutral-400">Dimension Chosen:</span>
                      <span className="text-white">{selectedSize.dimensions}</span>
                    </div>
                    <div className="flex justify-between border-b border-neutral-800 pb-1">
                      <span className="text-neutral-400">Total Print Run:</span>
                      <span className="text-[#00FFFF]">{(numDesigns * qtyPerDesign).toLocaleString()} Bags</span>
                    </div>
                    <div className="flex justify-between border-b border-neutral-800 pb-1">
                      <span className="text-neutral-400">Cylinder Plate Fee:</span>
                      <span className="text-emerald-400 bg-emerald-950 px-1 border border-emerald-500 rounded text-[10px]">$0 WAIVED</span>
                    </div>
                  </div>
                </div>

                <div className="pt-4 space-y-2">
                  <button onClick={handleWhatsappCopy} className="w-full bg-[#D4FF00] text-black border-2 border-black font-black uppercase text-xs py-3.5 text-center hover:bg-[#bce000] transition active:translate-y-0.5 shadow-[2px_2px_0px_rgba(255,255,255,0.2)] flex items-center justify-center gap-1.5 cursor-pointer">
                    <Phone className="w-4 h-4" /> Whatsapp RFQ Configuration
                  </button>
                  {whatsappCopied && <p className="text-[10px] text-emerald-400 font-bold text-center">✓ Configuration parameters copied to clipboard!</p>}
                </div>
              </div>
            </div>

            {/* Custom Sizing & Material Adjustments Info Box */}
            <div className="border-4 border-black bg-emerald-50 p-4 shadow-[4px_4px_0px_rgba(0,0,0,1)] mb-6 flex gap-3 items-start">
              <Info className="w-5 h-5 text-emerald-700 flex-shrink-0 mt-0.5" />
              <div className="text-xs font-semibold text-emerald-900 leading-relaxed">
                <span className="font-bold uppercase tracking-wider block text-emerald-800 mb-1">💡 Custom Sizing & Material Optimization Available</span>
                The dimensions listed above represent standard sizes. However, for both the **PE+EVOH Recyclable** and **Compostable** options, Achieve Pack offers **fully custom pouch sizes**! Any tailored width or height smaller than the standard templates can be manufactured at no additional premium setup cost. Contact us to tweak dimensions to perfectly fit your budget and bean volume.
              </div>
            </div>

            {/* Visual Grouping Grid (Stock Modular vs Premium Custom Digital) */}
            <div className="grid xl:grid-cols-2 gap-8 items-stretch mb-8">
              {/* Group A: Stock Modular Pouch Group (Card, Tag, Sticker) */}
              <div className="border-4 border-black bg-white p-5 shadow-[6px_6px_0px_rgba(0,0,0,1)] rounded-2xl flex flex-col justify-between space-y-4">
                <div className="border-b-2 border-black pb-2">
                  <span className="inline-block bg-black text-[#D4FF00] px-2 py-0.5 text-[9px] font-black uppercase tracking-wider rounded">
                    STOCK MODULAR BASE (FLAT $0.50)
                  </span>
                  <h3 className="text-lg font-black uppercase text-black mt-1">
                    1. Stock Modular Pouch Group
                  </h3>
                  <p className="text-xs text-neutral-500 font-bold mt-0.5">
                    Flat $0.50 USD / pouch. Identical premium stock base — only branding method differs.
                  </p>
                </div>

                <div className="grid md:grid-cols-3 gap-4 flex-1">
                  {['stock-cards', 'stock-tag', 'conventional-stock'].map(optionId => {
                    const data = calculateOptionPrice(optionId)
                    const isSafe = data.totalCost <= totalBudget

                    return (
                      <div key={optionId} className={`border-2 border-black bg-neutral-50/50 p-3 rounded-xl flex flex-col justify-between relative ${data.isBelowMoq ? 'opacity-65' : ''} hover:bg-neutral-50 transition`}>
                        {/* Budget Badge */}
                        <div className="absolute top-0 right-0 border-b border-l border-black font-['JetBrains_Mono'] text-[8px] font-black uppercase px-1.5 py-0.2 rounded-bl" style={{ backgroundColor: data.isBelowMoq ? '#ef4444' : (isSafe ? '#10B981' : '#f59e0b'), color: 'white' }}>
                          {data.isBelowMoq ? 'MOQ' : (isSafe ? 'Budget ✓' : 'Over')}
                        </div>

                        <div className="space-y-3">
                          {/* Storefront Image */}
                          <div 
                            onClick={() => setEnlargedImage(data.image)}
                            className="w-full aspect-square border border-black rounded-lg overflow-hidden shadow-inner relative group bg-white flex items-center justify-center cursor-zoom-in"
                          >
                            <img src={data.image} alt={data.badge} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
                          </div>

                          <div>
                            <div className="flex items-center justify-between gap-1">
                              <h4 className="font-black text-[11px] uppercase leading-tight truncate flex-1">{data.badge.replace('Stock Unprinted Pouch + ', '')}</h4>
                              <button
                                type="button"
                                onClick={() => setExpandedOption(optionId)}
                                className="text-neutral-400 hover:text-black transition-colors focus:outline-none flex-shrink-0 cursor-pointer"
                                title="Click for specs lightbox"
                              >
                                <Info className="w-3.5 h-3.5" />
                              </button>
                            </div>
                          </div>
                        </div>

                        <div className="border-t border-dashed border-neutral-300 pt-2 mt-3 font-['JetBrains_Mono'] text-[10px] font-bold text-neutral-700 space-y-1">
                          <div className="flex justify-between">
                            <span>Unit Price:</span>
                            <span className="text-black font-black">${data.unitPrice.toFixed(2)}</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Total Cost:</span>
                            <span className="text-emerald-600 font-black">${data.totalCost.toLocaleString(undefined, {minimumFractionDigits: 2})}</span>
                          </div>
                        </div>

                        {data.isBelowMoq && (
                          <div className="bg-red-50 border border-red-200 text-[8px] text-red-700 font-bold p-1 mt-2 rounded text-center leading-tight">
                            ⚠️ MOQ {data.moq} pcs
                          </div>
                        )}
                      </div>
                    )
                  })}
                </div>
              </div>

              {/* Group B: Premium Custom Digital Group (Doypack, Recyclable, Compostable) */}
              <div className="border-4 border-black bg-white p-5 shadow-[6px_6px_0px_rgba(0,0,0,1)] rounded-2xl flex flex-col justify-between space-y-4">
                <div className="border-b-2 border-black pb-2">
                  <span className="inline-block bg-[#D4FF00] text-black border border-black px-2 py-0.5 text-[9px] font-black uppercase tracking-wider rounded">
                    FULL CUSTOM PRINT (VOLUME SCALE)
                  </span>
                  <h3 className="text-lg font-black uppercase text-black mt-1">
                    2. Premium Custom Digital Group
                  </h3>
                  <p className="text-xs text-neutral-500 font-bold mt-0.5">
                    Volume-scaled pricing. Waived cylinder plate fees. Full-bleed edge-to-edge printing.
                  </p>
                </div>

                <div className="grid md:grid-cols-3 gap-4 flex-1">
                  {['recyclable-doypack', 'recyclable', 'compostable'].map(optionId => {
                    const data = calculateOptionPrice(optionId)
                    const isSafe = data.totalCost <= totalBudget

                    return (
                      <div key={optionId} className={`border-2 border-black bg-neutral-50/50 p-3 rounded-xl flex flex-col justify-between relative ${data.isBelowMoq ? 'opacity-65' : ''} hover:bg-neutral-50 transition`}>
                        {/* Budget Badge */}
                        <div className="absolute top-0 right-0 border-b border-l border-black font-['JetBrains_Mono'] text-[8px] font-black uppercase px-1.5 py-0.2 rounded-bl" style={{ backgroundColor: data.isBelowMoq ? '#ef4444' : (isSafe ? '#10B981' : '#f59e0b'), color: 'white' }}>
                          {data.isBelowMoq ? 'MOQ' : (isSafe ? 'Budget ✓' : 'Over')}
                        </div>

                        <div className="space-y-3">
                          {/* Storefront Image */}
                          <div 
                            onClick={() => setEnlargedImage(data.image)}
                            className="w-full aspect-square border border-black rounded-lg overflow-hidden shadow-inner relative group bg-white flex items-center justify-center cursor-zoom-in"
                          >
                            <img src={data.image} alt={data.badge} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
                          </div>

                          <div>
                            <div className="flex items-center justify-between gap-1">
                              <h4 className="font-black text-[11px] uppercase leading-tight truncate flex-1">{data.badge.replace('Professional ', '').replace(' Custom Print', '').replace('Custom Stand-Up Pouch ', '')}</h4>
                              <button
                                type="button"
                                onClick={() => setExpandedOption(optionId)}
                                className="text-neutral-400 hover:text-black transition-colors focus:outline-none flex-shrink-0 cursor-pointer"
                                title="Click for specs lightbox"
                              >
                                <Info className="w-3.5 h-3.5" />
                              </button>
                            </div>
                          </div>
                        </div>

                        <div className="border-t border-dashed border-neutral-300 pt-2 mt-3 font-['JetBrains_Mono'] text-[10px] font-bold text-neutral-700 space-y-1">
                          <div className="flex justify-between">
                            <span>Unit Price:</span>
                            <span className="text-black font-black">${data.unitPrice.toFixed(2)}</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Total Cost:</span>
                            <span className="text-emerald-600 font-black">${data.totalCost.toLocaleString(undefined, {minimumFractionDigits: 2})}</span>
                          </div>
                        </div>

                        {data.isBelowMoq && (
                          <div className="bg-red-50 border border-red-200 text-[8px] text-red-700 font-bold p-1 mt-2 rounded text-center leading-tight">
                            ⚠️ MOQ {data.moq} pcs
                          </div>
                        )}
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>

            {/* B2B Comparison Table (Stripe-Style Light Mode) */}
            <div className="border-4 border-black bg-white p-5 shadow-[6px_6px_0px_rgba(0,0,0,1)] rounded-2xl mt-8">
              <h3 className="text-lg font-black uppercase tracking-tight text-black border-b-2 border-black pb-3 flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-emerald-600" /> Option Feature Comparison Matrix
              </h3>
              <div className="overflow-x-auto mt-4">
                <table className="w-full text-left border-collapse min-w-[850px] text-xs font-semibold text-neutral-800">
                  <thead>
                    <tr className="border-b border-neutral-200 bg-neutral-50/50">
                      <th className="p-3 font-black uppercase text-neutral-500 w-[180px]">Parameters</th>
                      <th className="p-3 font-black uppercase text-emerald-700 border-l border-neutral-100">Stock + Card</th>
                      <th className="p-3 font-black uppercase text-amber-700 border-l border-neutral-100">Stock + Tag</th>
                      <th className="p-3 font-black uppercase text-teal-700 border-l border-neutral-100">Stock + Sticker</th>
                      <th className="p-3 font-black uppercase text-blue-700 border-l-2 border-black bg-blue-50/10">Custom Doypack</th>
                      <th className="p-3 font-black uppercase text-emerald-600 border-l border-neutral-100 bg-emerald-50/10">Custom Recyclable</th>
                      <th className="p-3 font-black uppercase text-emerald-800 border-l border-neutral-100 bg-emerald-50/10">Custom Compostable</th>
                    </tr>
                  </thead>
                  <tbody>
                    {TABLE_ROWS.map((row, i) => (
                      <tr key={i} className="border-b border-neutral-100 hover:bg-neutral-50/50 transition">
                        <td className="p-3 font-bold text-neutral-600">{row.name}</td>
                        <td className="p-3 border-l border-neutral-100 text-neutral-700">{row.values['stock-cards']}</td>
                        <td className="p-3 border-l border-neutral-100 text-neutral-700">{row.values['stock-tag']}</td>
                        <td className="p-3 border-l border-neutral-100 text-neutral-700">{row.values['conventional-stock']}</td>
                        <td className="p-3 border-l-2 border-black bg-blue-50/5 text-neutral-800 font-bold">{row.values['recyclable-doypack']}</td>
                        <td className="p-3 border-l border-neutral-100 bg-emerald-50/5 text-neutral-800 font-bold">{row.values['recyclable']}</td>
                        <td className="p-3 border-l border-neutral-100 bg-emerald-50/5 text-neutral-800 font-bold">{row.values['compostable']}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

          </div>
        </PouchLayout>
      ) : (
        <div className="min-h-screen flex flex-col justify-between selection:bg-emerald-500 selection:text-white">
          <SiteHeader />

          {/* B2B ACHIEVEPACK CALCULATOR VIEWPORT */}
          <section className="pt-32 pb-20 bg-[#06110e] text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(16,185,129,0.06)_0%,transparent_60%)] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
              
              {/* Title Section */}
              <div className="grid md:grid-cols-12 gap-8 items-center mb-12 bg-neutral-900/50 backdrop-blur-md border border-neutral-800 p-6 md:p-8 rounded-3xl">
                <div className="md:col-span-8 text-center md:text-left space-y-4">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold uppercase bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-mono">
                    <Sparkles className="w-3.5 h-3.5 mr-1.5 text-emerald-300 animate-spin-slow" />
                    1-PAGE UNIFIED BUDGET TELEMETRY
                  </span>
                  <h1 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-white leading-tight font-['Outfit']">
                    Invest Cal
                  </h1>
                  <p className="text-xs font-mono text-emerald-400 uppercase tracking-wider">
                    ☕ 咖啡茶葉品牌包裝預算與品牌配置對比計算器 (一版睇清)
                  </p>
                  <p className="text-sm text-neutral-400 leading-relaxed font-sans max-w-xl">
                    Compare modular card insert/tag options against high-barrier customizable Recyclable & Compostable stand-up flat bottom pouches to maximize your packaging investments.
                  </p>
                </div>
                <div 
                  onClick={() => setEnlargedImage('/imgs/free/invest-cal-hero.jpg')}
                  className="md:col-span-4 relative group cursor-zoom-in"
                >
                  <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl blur opacity-20 group-hover:opacity-30 transition"></div>
                  <div className="relative border border-neutral-800 bg-neutral-950 p-1.5 rounded-2xl shadow-xl overflow-hidden">
                    <img 
                      src="/imgs/free/invest-cal-hero.jpg" 
                      alt="Invest Cal App Dashboard" 
                      className="w-full h-auto rounded-xl object-cover hover:opacity-90 transition-opacity"
                    />
                  </div>
                </div>
              </div>

              {/* 2-Column High-Density Dashboard Card */}
              <div className="grid lg:grid-cols-12 gap-6 items-stretch mb-6">
                
                {/* Column 1: Configurator Controls */}
                <div className="lg:col-span-7 bg-emerald-950/10 backdrop-blur-xl border border-emerald-500/10 p-5 rounded-3xl flex flex-col justify-between shadow-2xl space-y-4">
                  <h3 className="text-base font-bold text-white uppercase border-b border-emerald-500/10 pb-2">1. Config Inputs</h3>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <div className="flex justify-between font-mono text-xs text-neutral-400">
                        <span>Target Budget (預算):</span>
                        <span className="text-emerald-300 font-bold bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/25">
                          ${totalBudget.toLocaleString()} USD
                        </span>
                      </div>
                      <input type="range" min="500" max="15000" step="250" value={totalBudget} onChange={(e) => setTotalBudget(parseInt(e.target.value))} className="w-full h-1.5 bg-neutral-800 rounded appearance-none cursor-pointer accent-emerald-400" />
                    </div>

                    <div className="space-y-1.5">
                      <div className="flex justify-between font-mono text-xs text-neutral-400">
                        <span>Flavor SKUs (款式):</span>
                        <span className="text-cyan-300 font-bold bg-cyan-500/10 px-2 py-0.5 rounded-full border border-cyan-500/25">
                          {numDesigns} 款 (SKUs)
                        </span>
                      </div>
                      <input type="range" min="1" max="10" step="1" value={numDesigns} onChange={(e) => setNumDesigns(parseInt(e.target.value))} className="w-full h-1.5 bg-neutral-800 rounded appearance-none cursor-pointer accent-emerald-400" />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <div className="flex justify-between font-mono text-xs text-neutral-400">
                        <span>Qty / SKU (每款印量):</span>
                        <span className="text-purple-300 font-bold bg-purple-500/10 px-2 py-0.5 rounded-full border border-purple-500/25">
                          {qtyPerDesign.toLocaleString()} pcs
                        </span>
                      </div>
                      <input type="range" min="100" max="5000" step="50" value={qtyPerDesign} onChange={(e) => setQtyPerDesign(parseInt(e.target.value))} className="w-full h-1.5 bg-neutral-800 rounded appearance-none cursor-pointer accent-emerald-400" />
                      <div className="grid grid-cols-5 gap-1 font-mono text-[9px]">
                        {[100, 500, 1000, 2000, 5000].map(q => (
                          <button key={q} type="button" onClick={() => setQtyPerDesign(q)} className={`py-0.5 rounded border transition-all ${qtyPerDesign === q ? 'bg-emerald-500 border-emerald-500 text-neutral-950 font-bold' : 'bg-neutral-900 border-neutral-800 text-neutral-400 hover:text-white'}`}>{q}</button>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <span className="block font-mono text-xs text-neutral-400 uppercase">Bag Size (尺寸):</span>
                      <div className="grid grid-cols-2 gap-1 text-[10px]">
                        {BAG_SIZES.map(s => (
                          <button key={s.id} type="button" onClick={() => setSelectedSize(s)} className={`p-1.5 rounded border text-left truncate transition-all ${selectedSize.id === s.id ? 'bg-emerald-950 border-emerald-400 text-white font-bold' : 'bg-neutral-900 border-neutral-800 text-neutral-400 hover:text-white'}`}>
                            {s.dimensions}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Column 2: Summary and Whatsapp Lead Generator */}
                <div className="lg:col-span-5 bg-emerald-950/10 backdrop-blur-xl border border-emerald-500/10 p-5 rounded-3xl flex flex-col justify-between shadow-2xl relative">
                  <div>
                    <h3 className="text-base font-bold text-white uppercase border-b border-emerald-500/10 pb-2">2. Config Telemetry</h3>
                    <div className="mt-3 font-mono text-xs space-y-2">
                      <div className="flex justify-between border-b border-emerald-500/5 pb-1 text-neutral-400">
                        <span>Dimensions selected:</span>
                        <span className="text-white font-bold">{selectedSize.dimensions}</span>
                      </div>
                      <div className="flex justify-between border-b border-emerald-500/5 pb-1 text-neutral-400">
                        <span>Total Pouch Count:</span>
                        <span className="text-cyan-400 font-bold">{(numDesigns * qtyPerDesign).toLocaleString()} units</span>
                      </div>
                      <div className="flex justify-between items-center text-[10px] pt-1 text-emerald-400">
                        <span>⚡ Plate Cylinder fees:</span>
                        <span className="bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 px-1.5 py-0.5 rounded font-black">$0 WAIVED</span>
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 space-y-2">
                    <button onClick={handleWhatsappCopy} className="w-full bg-emerald-500 hover:bg-emerald-400 text-neutral-950 font-black uppercase text-xs py-3.5 rounded-xl active:scale-98 transition shadow-lg shadow-emerald-500/15 flex items-center justify-center gap-1.5 cursor-pointer">
                      <Phone className="w-4 h-4 fill-neutral-950" /> Copy Config to WhatsApp
                    </button>
                    {whatsappCopied && <p className="text-[10px] text-emerald-400 font-bold text-center">✓ Configuration copied to clipboard! Redirecting...</p>}
                  </div>
                </div>

              </div>

              {/* Custom Sizing & Material Adjustments Info Box */}
              <div className="bg-emerald-950/10 border border-emerald-500/10 p-4 rounded-3xl mb-6 flex gap-3 items-start shadow-xl">
                <Info className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                <div className="text-xs font-mono text-neutral-300 leading-relaxed">
                  <span className="font-bold uppercase tracking-wider block text-emerald-400 mb-1">💡 Custom Dimensions & Material Optimization Available</span>
                  The dimensions listed above represent standard B2B templates. However, for both the **PE+EVOH Recyclable** and **Compostable** options, Achieve Pack offers **fully custom sizes**! Any tailored width or height smaller than the standard sizes listed can be custom-made at no additional premium setup cost. Contact us to tweak dimensions to perfectly fit your budget and bean volume.
                </div>
              </div>

              {/* Visual Grouping Grid (Stock Modular vs Premium Custom Digital) - Dark Mode */}
              <div className="grid xl:grid-cols-2 gap-8 items-stretch mb-8">
              {/* Group A: Stock Modular Pouch Group (Card, Tag, Sticker) */}
              <div className="bg-emerald-950/5 backdrop-blur-md border border-neutral-850 p-5 rounded-3xl flex flex-col justify-between space-y-4 shadow-2xl">
                <div className="border-b border-neutral-800 pb-3">
                  <span className="inline-block bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 px-2.5 py-0.5 text-[9px] font-semibold uppercase tracking-wider rounded-full">
                    STOCK MODULAR BASE (FLAT $0.50)
                  </span>
                  <h3 className="text-base font-bold text-white uppercase mt-1.5 font-['Outfit']">
                    1. Stock Modular Pouch Group
                  </h3>
                  <p className="text-xs text-neutral-450 mt-1 font-sans">
                    Flat $0.50 USD / pouch. Identical premium stock base — only branding method differs.
                  </p>
                </div>

                <div className="grid md:grid-cols-3 gap-4 flex-1">
                  {['stock-cards', 'stock-tag', 'conventional-stock'].map(optionId => {
                    const data = calculateOptionPrice(optionId)
                    const isSafe = data.totalCost <= totalBudget

                    return (
                      <div key={optionId} className={`bg-neutral-900/30 border border-neutral-850 p-3 rounded-2xl flex flex-col justify-between relative transition-all duration-300 hover:border-emerald-500/10 ${data.isBelowMoq ? 'opacity-50' : 'hover:-translate-y-0.5'}`}>
                        {/* Budget Badge */}
                        <div className="absolute top-0 right-0 border-b border-l border-neutral-800 rounded-bl-xl font-mono text-[8px] font-bold uppercase px-2 py-0.5" style={{ backgroundColor: data.isBelowMoq ? '#ef4444' : (isSafe ? 'rgba(16,185,129,0.1)' : 'rgba(245,158,11,0.1)'), color: data.isBelowMoq ? 'white' : (isSafe ? '#34D399' : '#FBBF24'), borderLeftColor: isSafe ? 'rgba(16,185,129,0.2)' : 'rgba(245,158,11,0.2)' }}>
                          {data.isBelowMoq ? 'MOQ' : (isSafe ? 'Budget' : 'Over')}
                        </div>

                        <div className="space-y-3">
                          {/* Storefront Image */}
                          <div 
                            onClick={() => setEnlargedImage(data.image)}
                            className="w-full aspect-square border border-neutral-850 rounded-xl overflow-hidden shadow-inner relative group bg-neutral-950 flex items-center justify-center cursor-zoom-in"
                          >
                            <img src={data.image} alt={data.badge} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
                          </div>

                          <div>
                            <div className="flex items-center justify-between gap-1.5">
                              <span className="inline-block bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 px-2 py-0.5 text-[9px] font-semibold uppercase tracking-wider rounded-full truncate flex-1">{data.badge.replace('Stock Unprinted Pouch + ', '')}</span>
                              <button
                                type="button"
                                onClick={() => setExpandedOption(optionId)}
                                className="text-neutral-400 hover:text-emerald-400 transition-colors focus:outline-none flex-shrink-0 cursor-pointer"
                                title="Click for specs lightbox"
                              >
                                <Info className="w-3.5 h-3.5" />
                              </button>
                            </div>
                          </div>
                        </div>

                        <div className="border-t border-neutral-850 pt-3 mt-3 font-mono text-[10px] text-neutral-400 space-y-1.5">
                          <div className="flex justify-between">
                            <span className="text-neutral-500">Unit Price:</span>
                            <span className="text-white font-bold">${data.unitPrice.toFixed(2)}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-neutral-500">Total Cost:</span>
                            <span className="text-emerald-400 font-bold">${data.totalCost.toLocaleString(undefined, {minimumFractionDigits: 2})}</span>
                          </div>
                        </div>

                        {data.isBelowMoq && (
                          <div className="bg-red-500/10 border border-red-200 text-[8px] text-red-400 font-mono p-1 mt-2 rounded text-center">
                            ⚠️ MOQ {data.moq} pcs
                          </div>
                        )}
                      </div>
                    )
                  })}
                </div>
              </div>

              {/* Group B: Premium Custom Digital Group (Doypack, Recyclable, Compostable) */}
              <div className="bg-emerald-950/5 backdrop-blur-md border border-neutral-850 p-5 rounded-3xl flex flex-col justify-between space-y-4 shadow-2xl">
                <div className="border-b border-neutral-800 pb-3">
                  <span className="inline-block bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 px-2.5 py-0.5 text-[9px] font-semibold uppercase tracking-wider rounded-full">
                    FULL CUSTOM PRINT (VOLUME SCALE)
                  </span>
                  <h3 className="text-base font-bold text-white uppercase mt-1.5 font-['Outfit']">
                    2. Premium Custom Digital Group
                  </h3>
                  <p className="text-xs text-neutral-450 mt-1 font-sans">
                    Volume-scaled pricing. Waived cylinder plate fees. Full-bleed edge-to-edge printing.
                  </p>
                </div>

                <div className="grid md:grid-cols-3 gap-4 flex-1">
                  {['recyclable-doypack', 'recyclable', 'compostable'].map(optionId => {
                    const data = calculateOptionPrice(optionId)
                    const isSafe = data.totalCost <= totalBudget

                    return (
                      <div key={optionId} className={`bg-neutral-900/30 border border-neutral-850 p-3 rounded-2xl flex flex-col justify-between relative transition-all duration-300 hover:border-emerald-500/10 ${data.isBelowMoq ? 'opacity-50' : 'hover:-translate-y-0.5'}`}>
                        {/* Budget Badge */}
                        <div className="absolute top-0 right-0 border-b border-l border-neutral-800 rounded-bl-xl font-mono text-[8px] font-bold uppercase px-2 py-0.5" style={{ backgroundColor: data.isBelowMoq ? '#ef4444' : (isSafe ? 'rgba(16,185,129,0.1)' : 'rgba(245,158,11,0.1)'), color: data.isBelowMoq ? 'white' : (isSafe ? '#34D399' : '#FBBF24'), borderLeftColor: isSafe ? 'rgba(16,185,129,0.2)' : 'rgba(245,158,11,0.2)' }}>
                          {data.isBelowMoq ? 'MOQ' : (isSafe ? 'Budget' : 'Over')}
                        </div>

                        <div className="space-y-3">
                          {/* Storefront Image */}
                          <div 
                            onClick={() => setEnlargedImage(data.image)}
                            className="w-full aspect-square border border-neutral-850 rounded-xl overflow-hidden shadow-inner relative group bg-neutral-950 flex items-center justify-center cursor-zoom-in"
                          >
                            <img src={data.image} alt={data.badge} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
                          </div>

                          <div>
                            <div className="flex items-center justify-between gap-1.5">
                              <span className="inline-block bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 px-2 py-0.5 text-[9px] font-semibold uppercase tracking-wider rounded-full truncate flex-1">{data.badge.replace('Professional ', '').replace(' Custom Print', '').replace('Custom Stand-Up Pouch ', '')}</span>
                              <button
                                type="button"
                                onClick={() => setExpandedOption(optionId)}
                                className="text-neutral-400 hover:text-emerald-400 transition-colors focus:outline-none flex-shrink-0 cursor-pointer"
                                title="Click for specs lightbox"
                              >
                                <Info className="w-3.5 h-3.5" />
                              </button>
                            </div>
                          </div>
                        </div>

                        <div className="border-t border-neutral-855 pt-3 mt-3 font-mono text-[10px] text-neutral-400 space-y-1.5">
                          <div className="flex justify-between">
                            <span className="text-neutral-500">Unit Price:</span>
                            <span className="text-white font-bold">${data.unitPrice.toFixed(2)}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-neutral-500">Total Cost:</span>
                            <span className="text-emerald-400 font-bold">${data.totalCost.toLocaleString(undefined, {minimumFractionDigits: 2})}</span>
                          </div>
                        </div>

                        {data.isBelowMoq && (
                          <div className="bg-red-500/10 border border-red-200 text-[8px] text-red-400 font-mono p-1 mt-2 rounded text-center">
                            ⚠️ MOQ {data.moq} pcs
                          </div>
                        )}
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>

            {/* B2B Comparison Table (Stripe-Style Dark Mode) */}
            <div className="bg-neutral-900/40 backdrop-blur-md border border-neutral-800 p-5 rounded-3xl mt-8 shadow-2xl">
              <h3 className="text-base font-bold text-white uppercase border-b border-emerald-500/10 pb-3 flex items-center gap-2 font-['Outfit']">
                <CheckCircle className="w-5 h-5 text-emerald-400" /> Option Feature Comparison Matrix
              </h3>
              <div className="overflow-x-auto mt-4">
                <table className="w-full text-left border-collapse min-w-[850px] text-xs font-mono text-neutral-300">
                  <thead>
                    <tr className="border-b border-neutral-850 bg-neutral-950/60">
                      <th className="p-3 font-bold uppercase text-neutral-500 w-[180px]">Parameters</th>
                      <th className="p-3 font-bold uppercase text-emerald-400 border-l border-neutral-855">Stock + Card</th>
                      <th className="p-3 font-bold uppercase text-amber-400 border-l border-neutral-855">Stock + Tag</th>
                      <th className="p-3 font-bold uppercase text-cyan-400 border-l border-neutral-855">Stock + Sticker</th>
                      <th className="p-3 font-bold uppercase text-blue-450 border-l border-neutral-800 bg-blue-950/10">Custom Doypack</th>
                      <th className="p-3 font-bold uppercase text-emerald-400 border-l border-neutral-855 bg-emerald-950/10">Custom Recyclable</th>
                      <th className="p-3 font-bold uppercase text-emerald-300 border-l border-neutral-855 bg-emerald-950/10">Custom Compostable</th>
                    </tr>
                  </thead>
                  <tbody>
                    {TABLE_ROWS.map((row, i) => (
                      <tr key={i} className="border-b border-neutral-855 hover:bg-neutral-900/20 transition">
                        <td className="p-3 font-bold text-neutral-500">{row.name}</td>
                        <td className="p-3 border-l border-neutral-855 text-neutral-300">{row.values['stock-cards']}</td>
                        <td className="p-3 border-l border-neutral-855 text-neutral-300">{row.values['stock-tag']}</td>
                        <td className="p-3 border-l border-neutral-855 text-neutral-300">{row.values['conventional-stock']}</td>
                        <td className="p-3 border-l border-neutral-800 bg-blue-950/5 text-white font-bold">{row.values['recyclable-doypack']}</td>
                        <td className="p-3 border-l border-neutral-855 bg-emerald-950/5 text-white font-bold">{row.values['recyclable']}</td>
                        <td className="p-3 border-l border-neutral-855 bg-emerald-950/5 text-white font-bold">{row.values['compostable']}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

          </div>
        </section>

        <Footer />
      </div>
    )}
      {/* Click to Enlarge Lightbox Modal */}
      <AnimatePresence>
        {enlargedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setEnlargedImage(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-sm p-4 md:p-10 cursor-zoom-out"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className={`relative max-w-4xl max-h-[85vh] ${isEco ? 'border-4 border-black bg-white shadow-[8px_8px_0px_rgba(0,0,0,1)] rounded-xl p-2' : 'border border-neutral-800 bg-neutral-950 rounded-3xl p-3 shadow-2xl'} overflow-hidden flex items-center justify-center`}
              onClick={(e) => e.stopPropagation()}
            >
              <img 
                src={enlargedImage} 
                alt="Enlarged Packaging Preview" 
                className={`max-w-full max-h-[80vh] object-contain rounded-lg ${isEco ? 'border border-neutral-200' : 'border border-neutral-850'}`}
              />
              <button 
                onClick={() => setEnlargedImage(null)}
                className={`absolute top-4 right-4 font-black uppercase text-xs px-3 py-1.5 rounded-full transition active:scale-95 cursor-pointer font-mono ${isEco ? 'bg-black text-[#D4FF00] hover:text-white border-2 border-black shadow-[2px_2px_0px_rgba(0,0,0,1)]' : 'bg-emerald-500 hover:bg-emerald-400 text-neutral-950'}`}
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Product Specifications & Details Lightbox Modal */}
      <AnimatePresence>
        {expandedOption && (() => {
          const data = calculateOptionPrice(expandedOption);
          return (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setExpandedOption(null)}
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4 cursor-zoom-out"
            >
              <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                className={`relative max-w-2xl w-full ${isEco ? 'border-4 border-black bg-white shadow-[8px_8px_0px_rgba(0,0,0,1)] rounded-2xl p-6 text-black' : 'border border-neutral-800 bg-neutral-950 rounded-3xl p-6 text-neutral-200 shadow-2xl'} max-h-[90vh] overflow-y-auto cursor-default`}
                onClick={(e) => e.stopPropagation()}
              >
                {/* Modal Header */}
                <div className="flex justify-between items-start border-b border-neutral-200 dark:border-neutral-850 pb-4 mb-4">
                  <div>
                    <span className="inline-block text-[9px] font-black uppercase tracking-wider px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400">
                      {data.certLogo}
                    </span>
                    <h2 className="text-xl md:text-2xl font-black uppercase mt-1 leading-tight">
                      {data.badge}
                    </h2>
                  </div>
                  <button
                    onClick={() => setExpandedOption(null)}
                    className={`font-black uppercase text-xs px-3 py-1.5 rounded-full active:scale-95 transition cursor-pointer font-mono ${isEco ? 'bg-black text-[#D4FF00] hover:text-white border-2 border-black shadow-[2px_2px_0px_rgba(0,0,0,1)]' : 'bg-emerald-500 hover:bg-emerald-400 text-neutral-950'}`}
                  >
                    ✕ Close
                  </button>
                </div>

                {/* Modal Body */}
                <div className="grid md:grid-cols-12 gap-6 items-start">
                  <div className="md:col-span-5 relative group overflow-hidden border border-neutral-200 dark:border-neutral-850 rounded-xl bg-neutral-50 dark:bg-neutral-900 aspect-square flex items-center justify-center">
                    <img src={data.image} alt={data.badge} className="w-full h-full object-cover rounded-lg" />
                  </div>
                  <div className="md:col-span-7 space-y-4">
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-400">Product Overview</h4>
                      <p className="text-sm font-medium leading-relaxed text-neutral-600 dark:text-neutral-350 mt-1">
                        {data.desc}
                      </p>
                    </div>

                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-400 mb-2">Key Highlights</h4>
                      <ul className="space-y-2 text-xs font-medium text-neutral-700 dark:text-neutral-300">
                        {data.points?.map((pt, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <Check className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" strokeWidth={3} />
                            <span>{pt}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {(expandedOption === 'recyclable' || expandedOption === 'compostable') && (
                      <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-xl p-2.5 text-[10px] text-emerald-600 dark:text-emerald-400 leading-normal font-sans">
                        💡 **Custom sizing & layout** is available for this option! Achieve Pack can adjust exact pouch width/height dimensions to perfectly optimize your volume.
                      </div>
                    )}

                    <div className="border-t border-neutral-100 dark:border-neutral-850 pt-4 flex justify-between items-center text-xs font-bold font-mono">
                      <div>
                        <span className="text-neutral-400 block uppercase text-[10px]">Lead Time</span>
                        <span className="text-neutral-950 dark:text-white">{data.leadTime}</span>
                      </div>
                      <div className="text-right">
                        <span className="text-neutral-400 block uppercase text-[10px]">Minimum Order (MOQ)</span>
                        <span className="text-emerald-500">{data.moq.toLocaleString()} pcs</span>
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
