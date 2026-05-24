import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect, useRef } from 'react'
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
  { id: 'size-1', label: '160 × 260 + 80 mm', dimensions: '160 × 260 + 80 mm', capacity: '250g Bean / Ground' },
  { id: 'size-2', label: '180 × 280 + 80 mm', dimensions: '180 × 280 + 80 mm', capacity: '340g - 400g Pouch' },
  { id: 'size-3', label: '200 × 300 + 80 mm', dimensions: '200 × 300 + 80 mm', capacity: '500g Bean / Ground' },
  { id: 'size-4', label: '260 × 340 + 80 mm', dimensions: '260 × 340 + 80 mm', capacity: '1kg Heavy Weight Pouch' },
]

export default function PouchEcoGPTKPage() {
  const [totalBudget, setTotalBudget] = useState<number>(3000)
  const [numDesigns, setNumDesigns] = useState<number>(3)
  const [qtyPerDesign, setQtyPerDesign] = useState<number>(500)
  const [selectedSize, setSelectedSize] = useState<BagSize>(BAG_SIZES[0])
  const [whatsappCopied, setWhatsappCopied] = useState<boolean>(false)

  // Pricing interpolation engine matching user's spreadsheet criteria perfectly
  const calculateOptionPrice = (optionId: string) => {
    const sizeId = selectedSize.dimensions;

    // Option 1: Stock Pouch + Roast Cards (Conventional direction)
    if (optionId === 'stock-cards') {
      const unitPrice = 0.50
      const isBelowMoq = qtyPerDesign < 100
      const totalCost = numDesigns * qtyPerDesign * unitPrice
      return {
        unitPrice,
        totalCost,
        isBelowMoq,
        moq: 100,
        badge: 'Startup Starter (低門檻入門)',
        desc: 'Matte blank white/kraft flat bottom bags fitted with custom-printed roast card attachments. Swap flavor cards in a second.',
        accentColor: '#10B981',
        certLogo: 'FSC Card Stock',
        leadTime: '3 - 5 Days'
      }
    }

    // Custom print options MOQ = 500
    const isBelowMoq = qtyPerDesign < 500

    // Matrices
    const matrices: Record<string, Record<string, { 500: number; 1000: number }>> = {
      'custom-print': {
        '160 × 260 + 80 mm': { 500: 2.00, 1000: 1.50 },
        '180 × 280 + 80 mm': { 500: 2.10, 1000: 1.60 },
        '200 × 300 + 80 mm': { 500: 2.20, 1000: 1.70 },
        '260 × 340 + 80 mm': { 500: 2.40, 1000: 1.90 },
      },
      'recyclable': {
        '160 × 260 + 80 mm': { 500: 2.50, 1000: 1.70 },
        '180 × 280 + 80 mm': { 500: 2.60, 1000: 1.80 },
        '200 × 300 + 80 mm': { 500: 2.70, 1000: 1.90 },
        '260 × 340 + 80 mm': { 500: 2.90, 1000: 2.10 },
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

    if (optionId === 'custom-print') {
      return {
        unitPrice,
        totalCost,
        isBelowMoq,
        moq: 500,
        badge: 'Custom Print Standard (經典全定制)',
        desc: 'Edge-to-edge full surface custom digital printing on standard high-barrier BOPP/PE structures. $0 cylinder setup fee.',
        accentColor: '#00D8FF',
        certLogo: 'Barrier Protection',
        leadTime: '15 - 20 Days'
      }
    } else if (optionId === 'recyclable') {
      return {
        unitPrice,
        totalCost,
        isBelowMoq,
        moq: 500,
        badge: 'Option A: PE+EVOH Recyclable (可回收軟塑)',
        desc: 'Eco-responsible Mono-PE composite laminated with EVOH high-barrier. Complete with Recycle Triangle Logo No. 4.',
        accentColor: '#34D399',
        certLogo: '♻️ Recycle Code 4',
        leadTime: '20 - 25 Days'
      }
    } else {
      return {
        unitPrice,
        totalCost,
        isBelowMoq,
        moq: 500,
        badge: 'Option B: Compostable (生物基可堆肥)',
        desc: '100% Home & Backyard Biodegradable FSC Kraft laminate with VM-Cello barrier. Disintegrates in 180 days with zero microplastics.',
        accentColor: '#A7F3D0',
        certLogo: '🌱 BPI Compostable',
        leadTime: '20 - 25 Days'
      }
    }
  }

  // Compile bilingual RFQ clipboard content
  const getBilingualRfqText = () => {
    const stockPrice = calculateOptionPrice('stock-cards')
    const customPrice = calculateOptionPrice('custom-print')
    const recPrice = calculateOptionPrice('recyclable')
    const compPrice = calculateOptionPrice('compostable')

    return `Achieve Pack 咖啡品牌包裝詢價配置 (PaaS Packaging RFQ Summary):
--------------------------------------------------
📐 規格尺寸 (Selected Dimension): ${selectedSize.dimensions} (${selectedSize.capacity})
🎨 印刷款式 (Number of Designs): ${numDesigns} 款 (Designs)
📦 單款印量 (Quantity per Design): ${qtyPerDesign} 個 (pcs)
🎁 袋子總數 (Total Bags Quantity): ${numDesigns * qtyPerDesign} 個
💰 用戶目標預算 (Target Budget): $${totalBudget.toLocaleString()} USD

方案實時估算 (Real-time Options Quotation):
1️⃣ 貼紙卡牌現貨方案 (Stock Pouch + Cards):
   - 單價 (Unit): $${stockPrice.unitPrice.toFixed(2)} USD | 總額 (Total): $${stockPrice.totalCost.toFixed(2)} USD ${stockPrice.isBelowMoq ? '(Below MOQ)' : ''}
2️⃣ 標準全定制數碼印刷 (Custom Print Standard):
   - 單價 (Unit): $${customPrice.unitPrice.toFixed(2)} USD | 總額 (Total): $${customPrice.totalCost.toFixed(2)} USD ${customPrice.isBelowMoq ? '(Below MOQ)' : ''}
3️⃣ ♻️ 4號標誌單一可回收方案 (PE+EVOH Recyclable):
   - 單價 (Unit): $${recPrice.unitPrice.toFixed(2)} USD | 總額 (Total): $${recPrice.totalCost.toFixed(2)} USD ${recPrice.isBelowMoq ? '(Below MOQ)' : ''}
4️⃣ 🌱 BPI認證家用可堆肥方案 (Compostable):
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
      // Redirect to WhatsApp Global support
      window.open('https://api.whatsapp.com/send?phone=85269704411&text=' + encodeURIComponent('Hello Achieve Pack! I have generated my PaaS Coffee Packaging configuration: \n\n' + text), '_blank')
    })
  }

  const isEco = isPouch()

  // Dynamic SVG preview rendering live dimensions & material styles
  const PouchVisualRender = ({ optionId, accentColor }: { optionId: string; accentColor: string }) => {
    let bagBg = 'fill-neutral-100 stroke-neutral-800'
    let textLabel = 'STOCK BAG'
    let iconOverlay = null

    if (optionId === 'stock-cards') {
      bagBg = 'fill-white stroke-neutral-800'
      textLabel = 'CARD INSERT'
      iconOverlay = (
        <g transform="translate(15, 60)">
          <rect x="0" y="0" width="50" height="35" rx="3" fill="#0f172a" opacity="0.9" />
          <line x1="5" y1="10" x2="45" y2="10" stroke="white" strokeWidth="2" />
          <line x1="5" y1="18" x2="35" y2="18" stroke="white" strokeWidth="1.5" />
          <line x1="5" y1="26" x2="40" y2="26" stroke={accentColor} strokeWidth="2" />
        </g>
      )
    } else if (optionId === 'custom-print') {
      bagBg = 'fill-emerald-900 stroke-neutral-900'
      textLabel = 'CUSTOM PRINT'
      iconOverlay = (
        <g transform="translate(20, 65)">
          <circle cx="20" cy="20" r="16" fill="none" stroke={accentColor} strokeWidth="3" strokeDasharray="4 2" className="animate-spin-slow" />
          <path d="M12 20 L28 20 M20 12 L20 28" stroke="white" strokeWidth="2" />
        </g>
      )
    } else if (optionId === 'recyclable') {
      bagBg = 'fill-[#042f1a] stroke-emerald-600'
      textLabel = 'PE+EVOH'
      iconOverlay = (
        <g transform="translate(25, 65)" fill={accentColor}>
          {/* Recycle triangle representation */}
          <path d="M15 5 L5 25 L25 25 Z" fill="none" stroke={accentColor} strokeWidth="2" />
          <text x="12" y="21" fontSize="9" fontWeight="900" fill={accentColor}>4</text>
        </g>
      )
    } else if (optionId === 'compostable') {
      bagBg = 'fill-[#1c2e24] stroke-emerald-500'
      textLabel = 'COMPOSTABLE'
      iconOverlay = (
        <g transform="translate(25, 65)">
          <Leaf className="w-8 h-8 text-emerald-400 fill-emerald-400/20" />
        </g>
      )
    }

    return (
      <svg viewBox="0 0 100 150" className="w-24 h-36 drop-shadow-2xl transition-transform duration-300 hover:scale-105">
        {/* Pouch body */}
        <path d="M10,20 L90,20 L80,140 L20,140 Z" className={`${bagBg}`} strokeWidth="2" />
        {/* Tear notch */}
        <path d="M10,32 L15,35 L10,38" fill="none" stroke="#22c55e" strokeWidth="1.5" />
        {/* Valve welded circle */}
        <circle cx="50" cy="45" r="5" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="1" />
        <circle cx="50" cy="45" r="2" fill="#cbd5e1" />
        {/* Dynamic Graphic elements */}
        {iconOverlay}
        {/* Bottom seal */}
        <line x1="20" y1="134" x2="80" y2="134" stroke="#475569" strokeWidth="3" />
        <text x="50" y="15" textAnchor="middle" fontSize="6" fontWeight="bold" className="fill-neutral-400 font-mono tracking-wider">{textLabel}</text>
      </svg>
    )
  }

  // --- NEO-BRUTALIST STYLING FOR POUCH.ECO DOMAIN ---
  if (isEco) {
    return (
      <PouchLayout>
        <Helmet>
          <title>B2B Coffee Packaging Budget & Investment Calculator | POUCH.ECO</title>
          <meta name="description" content="Calculate your startup coffee bags packaging costs instantly with our interactive B2B mortgage-style budget calculator. Real-time rates for Stock Pouches, Recyclable PE+EVOH, and Backyard Compostable bags." />
          <link rel="canonical" href="https://pouch.eco/coffee" />
        </Helmet>

        <style>{`
          @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700;800;900&family=JetBrains+Mono:wght@400;700&display=swap');
        `}</style>

        <section className="relative pt-20 pb-28 border-b-4 border-black bg-[#fafafa] font-['Space_Grotesk'] overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            
            {/* Header Title Card */}
            <div className="border-4 border-black bg-[#D4FF00] p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] mb-12 transform -rotate-1 relative">
              <div className="absolute top-4 right-4 bg-black text-white px-2 py-1 font-['JetBrains_Mono'] text-xs font-black">
                RELEASE_2026.B2B
              </div>
              <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tight text-black leading-none">
                B2B Coffee PaaS Budget Calculator
              </h1>
              <p className="text-md md:text-lg text-neutral-800 font-bold uppercase tracking-wider mt-2 font-['JetBrains_Mono']">
                包裝預算與品牌投資計算器 // 10秒掌控啟動預算
              </p>
              <p className="text-neutral-700 text-sm font-semibold max-w-3xl mt-4">
                Specialty coffee brands often get stuck on plate charges and massive MOQs. Use our smart budget telemetry configurator to instantly model unit costs across 4 packaging directions, matching your unique budget limits.
              </p>
            </div>

            {/* Main Interactive Grid */}
            <div className="grid lg:grid-cols-12 gap-10 items-start">
              
              {/* Left Column: Interactive Controls */}
              <div className="lg:col-span-5 border-4 border-black bg-white p-6 shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] space-y-8">
                <div className="flex items-center gap-2 border-b-4 border-black pb-4">
                  <RefreshCw className="w-6 h-6 text-emerald-600 animate-spin-slow" />
                  <h2 className="text-2xl font-black uppercase tracking-tight">Calculator Config</h2>
                </div>

                {/* 1. Target Budget */}
                <div className="space-y-2">
                  <div className="flex justify-between items-center font-['JetBrains_Mono'] font-bold text-xs uppercase text-neutral-700">
                    <span>1. Target Investment Budget (目標投資預算)</span>
                    <span className="bg-black text-[#D4FF00] px-2 py-0.5">${totalBudget.toLocaleString()} USD</span>
                  </div>
                  <input 
                    type="range" 
                    min="500" 
                    max="15000" 
                    step="250"
                    value={totalBudget} 
                    onChange={(e) => setTotalBudget(parseInt(e.target.value))}
                    className="w-full h-3 bg-neutral-200 border-2 border-black rounded-lg appearance-none cursor-pointer accent-black" 
                  />
                  <div className="flex justify-between text-[10px] font-bold text-neutral-400">
                    <span>$500 Min</span>
                    <span>$7,500 Medium Startup</span>
                    <span>$15,000 Scale</span>
                  </div>
                </div>

                {/* 2. Number of Designs */}
                <div className="space-y-2">
                  <div className="flex justify-between items-center font-['JetBrains_Mono'] font-bold text-xs uppercase text-neutral-700">
                    <span>2. Distinct Flavor Designs (口味款式數量)</span>
                    <span className="bg-[#00FFFF] text-black px-2 py-0.5 border border-black font-black">{numDesigns} SKUs</span>
                  </div>
                  <input 
                    type="range" 
                    min="1" 
                    max="10" 
                    step="1"
                    value={numDesigns} 
                    onChange={(e) => setNumDesigns(parseInt(e.target.value))}
                    className="w-full h-3 bg-neutral-200 border-2 border-black rounded-lg appearance-none cursor-pointer accent-black" 
                  />
                  <div className="grid grid-cols-10 text-[9px] font-bold text-neutral-400 text-center">
                    {[1,2,3,4,5,6,7,8,9,10].map(n => (
                      <span key={n} className={numDesigns === n ? 'text-black font-black font-mono' : ''}>{n}</span>
                    ))}
                  </div>
                </div>

                {/* 3. Quantity per Design */}
                <div className="space-y-3">
                  <div className="flex justify-between items-center font-['JetBrains_Mono'] font-bold text-xs uppercase text-neutral-700">
                    <span>3. Quantity per Design (每款印量)</span>
                    <span className="bg-[#FF00FF] text-white px-2 py-0.5 border border-black font-black">{qtyPerDesign.toLocaleString()} Bags / SKU</span>
                  </div>
                  <input 
                    type="range" 
                    min="100" 
                    max="5000" 
                    step="50"
                    value={qtyPerDesign} 
                    onChange={(e) => setQtyPerDesign(parseInt(e.target.value))}
                    className="w-full h-3 bg-neutral-200 border-2 border-black rounded-lg appearance-none cursor-pointer accent-black" 
                  />
                  {/* Quick select buttons */}
                  <div className="grid grid-cols-5 gap-1.5 font-['JetBrains_Mono'] font-bold text-[10px]">
                    {[100, 500, 1000, 2000, 5000].map(q => (
                      <button
                        key={q}
                        type="button"
                        onClick={() => setQtyPerDesign(q)}
                        className={`border-2 border-black py-1 hover:bg-neutral-50 transition-all ${qtyPerDesign === q ? 'bg-black text-white font-black' : 'bg-white text-neutral-700'}`}
                      >
                        {q}
                      </button>
                    ))}
                  </div>
                  <p className="text-[10px] text-neutral-500 font-semibold italic">
                    💡 註: 印量以款為單位。如印 3 款、每款 500 個，袋子總數將為 1,500 個。
                  </p>
                </div>

                {/* 4. Bag Size Choice */}
                <div className="space-y-2">
                  <label className="block font-['JetBrains_Mono'] font-bold text-xs uppercase text-neutral-700">
                    4. Select Packaging Dimension (選擇尺寸)
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    {BAG_SIZES.map(s => (
                      <button
                        key={s.id}
                        type="button"
                        onClick={() => setSelectedSize(s)}
                        className={`border-2 border-black p-2.5 text-left transition-all ${selectedSize.id === s.id ? 'bg-[#D4FF00] shadow-[2px_2px_0px_rgba(0,0,0,1)]' : 'bg-white hover:bg-neutral-50'}`}
                      >
                        <div className="font-black text-xs">{s.dimensions}</div>
                        <div className="text-[9px] font-['JetBrains_Mono'] opacity-70 mt-0.5">{s.capacity}</div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Live Stats Summary */}
                <div className="border-4 border-black bg-neutral-900 text-white p-4 font-['JetBrains_Mono'] text-xs font-bold space-y-2 shadow-[4px_4px_0px_rgba(0,0,0,1)]">
                  <div className="flex justify-between border-b border-neutral-800 pb-1.5">
                    <span className="text-neutral-400">Total Bags Volume:</span>
                    <span className="text-[#00FFFF] font-black text-sm">{(numDesigns * qtyPerDesign).toLocaleString()} pcs</span>
                  </div>
                  <div className="flex justify-between border-b border-neutral-800 pb-1.5">
                    <span className="text-neutral-400">Target Budget Allocation:</span>
                    <span className="text-[#D4FF00] font-black">${totalBudget.toLocaleString()} USD</span>
                  </div>
                  <div className="flex justify-between items-center text-[10px] pt-1 text-emerald-400">
                    <span>⚡ Plate Cylinder Cost:</span>
                    <span className="bg-emerald-950 border border-emerald-500 px-1 py-0.5 rounded font-black">$0 FREE</span>
                  </div>
                </div>

              </div>

              {/* Right Column: Comparative Results Panel */}
              <div className="lg:col-span-7 space-y-6">
                
                {['stock-cards', 'custom-print', 'recyclable', 'compostable'].map(optionId => {
                  const data = calculateOptionPrice(optionId)
                  const isSafe = data.totalCost <= totalBudget
                  const budgetDiff = Math.abs(data.totalCost - totalBudget)

                  return (
                    <div 
                      key={optionId} 
                      className={`border-4 border-black p-5 relative overflow-hidden transition-all bg-white shadow-[6px_6px_0px_rgba(0,0,0,1)] ${data.isBelowMoq ? 'opacity-65' : ''}`}
                    >
                      {/* Budget Match Corner Badge */}
                      <div className="absolute top-0 right-0 border-b-2 border-l-2 border-black font-['JetBrains_Mono'] text-[9px] font-black uppercase px-2.5 py-1" style={{ backgroundColor: data.isBelowMoq ? '#ef4444' : (isSafe ? '#10B981' : '#f59e0b'), color: data.isBelowMoq || isSafe ? 'white' : 'black' }}>
                        {data.isBelowMoq ? 'BELOW MOQ (低於起訂)' : (isSafe ? '🟢 WITHIN BUDGET (安全)' : '🟡 ADJUST CONFIG (超預算)')}
                      </div>

                      <div className="flex flex-col md:flex-row gap-5 items-start">
                        {/* Visual 3D Representation */}
                        <div className="flex-shrink-0 bg-neutral-50 border-2 border-neutral-200 p-2.5 rounded flex items-center justify-center shadow-inner">
                          <PouchVisualRender optionId={optionId} accentColor={data.accentColor || '#10B981'} />
                        </div>

                        {/* Text and stats */}
                        <div className="flex-grow space-y-2.5 w-full">
                          <div>
                            <span className="bg-black text-white px-2 py-0.5 text-[9px] font-black uppercase font-['JetBrains_Mono'] tracking-wider">
                              {data.badge}
                            </span>
                            <h3 className="text-lg font-black uppercase text-neutral-850 mt-1.5 flex items-center gap-1.5">
                              {optionId === 'stock-cards' && 'Attached Card Starter'}
                              {optionId === 'custom-print' && 'Full Digital Pouch'}
                              {optionId === 'recyclable' && 'Mono-PE EVOH Recyclable'}
                              {optionId === 'compostable' && '100% Home Compostable Kraft'}
                            </h3>
                            <p className="text-xs text-neutral-500 font-semibold leading-relaxed mt-1">
                              {data.desc}
                            </p>
                          </div>

                          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 pt-2 border-t border-neutral-100 font-['JetBrains_Mono'] text-[11px] font-bold text-neutral-700">
                            <div>
                              <span className="text-neutral-400 block text-[9px]">Unit Price:</span>
                              <span className="text-black font-black text-sm">${data.unitPrice.toFixed(2)}</span>
                            </div>
                            <div>
                              <span className="text-neutral-400 block text-[9px]">Total Cost:</span>
                              <span className="text-emerald-600 font-black text-sm">${data.totalCost.toLocaleString(undefined, {minimumFractionDigits: 2})}</span>
                            </div>
                            <div>
                              <span className="text-neutral-400 block text-[9px]">Certification:</span>
                              <span className="text-neutral-800 font-black">{data.certLogo}</span>
                            </div>
                            <div>
                              <span className="text-neutral-400 block text-[9px]">Avg Lead Time:</span>
                              <span className="text-neutral-800 font-black">{data.leadTime}</span>
                            </div>
                          </div>

                          {/* Dynamic Cost-Share bar chart */}
                          {!data.isBelowMoq && (
                            <div className="space-y-1 pt-1">
                              <div className="flex justify-between text-[9px] font-bold text-neutral-400 font-['JetBrains_Mono']">
                                <span>Budget Allocation Share</span>
                                <span className={isSafe ? 'text-emerald-600' : 'text-amber-600'}>
                                  {Math.round((data.totalCost / totalBudget) * 100)}%
                                </span>
                              </div>
                              <div className="w-full h-2 border border-black bg-neutral-100 rounded-sm overflow-hidden">
                                <div 
                                  className="h-full border-r border-black" 
                                  style={{ 
                                    width: `${Math.min((data.totalCost / totalBudget) * 100, 100)}%`,
                                    backgroundColor: isSafe ? '#10B981' : '#f59e0b'
                                  }} 
                                />
                              </div>
                              {!isSafe && (
                                <p className="text-[9px] text-amber-600 font-black uppercase font-['JetBrains_Mono']">
                                  ⚠️ Exceeds budget by +${budgetDiff.toLocaleString(undefined, {maximumFractionDigits: 2})} USD. Adjust configuration or increase investment.
                                </p>
                              )}
                            </div>
                          )}

                          {data.isBelowMoq && (
                            <div className="bg-red-50 border-2 border-red-500/20 p-2 text-[10px] text-red-700 font-bold flex items-center gap-1.5">
                              <AlertTriangle className="w-3.5 h-3.5 flex-shrink-0" />
                              <span>Below Minimum Order Quantity. MOQ is {data.moq} pieces per design.</span>
                            </div>
                          )}

                        </div>
                      </div>
                    </div>
                  )
                })}

              </div>

            </div>

            {/* Section: One-Click WhatsApp RFQ Summary Generator */}
            <div className="border-4 border-black bg-neutral-900 text-white p-6 shadow-[10px_10px_0px_rgba(0,0,0,1)] mt-12 space-y-6">
              <div className="flex items-center gap-2 border-b border-neutral-800 pb-4">
                <Phone className="w-6 h-6 text-[#D4FF00] animate-bounce" />
                <div>
                  <h3 className="text-2xl font-black uppercase tracking-tight">1-Click Parameter WhatsApp RFQ</h3>
                  <p className="text-xs text-neutral-400 font-['JetBrains_Mono'] font-bold">一鍵複製參數配置 & 發送客服</p>
                </div>
              </div>

              <p className="text-xs text-neutral-300 font-semibold leading-relaxed max-w-3xl">
                Ready to review samples or final artwork blueprints? Click below to instantly copy your calculated packaging parameters into a standard RFQ string and dispatch it straight to our packaging support advisors over WhatsApp!
              </p>

              <div className="bg-neutral-950 border border-neutral-800 p-4 rounded text-xs font-['JetBrains_Mono'] text-neutral-300 leading-relaxed font-bold relative group">
                <button
                  type="button"
                  onClick={() => {
                    navigator.clipboard.writeText(getBilingualRfqText())
                    setWhatsappCopied(true)
                    setTimeout(() => setWhatsappCopied(false), 2000)
                  }}
                  className="absolute top-3 right-3 bg-neutral-900 hover:bg-black text-[#D4FF00] border border-neutral-700 px-2 py-1 text-[10px] flex items-center gap-1 cursor-pointer transition-all"
                >
                  <Copy className="w-3 h-3" />
                  {whatsappCopied ? 'Copied!' : 'Copy'}
                </button>
                <pre className="whitespace-pre-wrap select-all pr-12 font-['JetBrains_Mono']">
                  {getBilingualRfqText()}
                </pre>
              </div>

              <button
                type="button"
                onClick={handleWhatsappCopy}
                className="w-full bg-[#D4FF00] text-black font-black uppercase text-sm py-4 border-2 border-black hover:bg-[#bce000] active:translate-y-0.5 transition-all flex items-center justify-center gap-2.5 cursor-pointer shadow-[4px_4px_0px_rgba(255,255,255,0.2)]"
              >
                <Phone className="w-4 h-4 fill-black" />
                Copy Config & Open WhatsApp Support (一鍵複製配置並開啟 WhatsApp)
              </button>
            </div>

          </div>
        </section>
      </PouchLayout>
    )
  }

  // --- HYPER-PREMIUM DARK GREEN GLASSMORPHISM STYLING FOR ACHIEVEPACK DOMAIN ---
  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-200 font-sans selection:bg-emerald-500 selection:text-white">
      <Helmet>
        <title>B2B Coffee Packaging Budget & Investment Calculator | Achieve Pack</title>
        <meta name="description" content="Calculate your startup coffee bags packaging costs instantly with our interactive B2B mortgage-style budget calculator. Real-time rates for Stock Pouches, Recyclable PE+EVOH, and Backyard Compostable bags." />
        <link rel="canonical" href="https://achievepack.com/coffee" />
      </Helmet>

      <SiteHeader />

      {/* Hero Section */}
      <section className="pt-32 pb-24 bg-gradient-to-b from-[#022c22] via-[#091a13] to-[#040d0a] text-white relative overflow-hidden">
        
        {/* Glowing environmental light backgrounds */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(16,185,129,0.08)_0%,transparent_50%)] pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(52,211,153,0.08)_0%,transparent_50%)] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
          
          {/* Header Introductions */}
          <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold tracking-wide uppercase bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
              <Sparkles className="w-3.5 h-3.5 mr-1.5 text-emerald-300 animate-spin-slow" />
              INTELLIGENT TELEMETRY CONFIGURATOR
            </span>
            <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tight text-white leading-tight font-['Outfit']">
              Brand Packaging Investment Calculator
            </h1>
            <p className="text-emerald-400 font-semibold uppercase tracking-wider text-sm font-mono">
              ☕ 咖啡茶葉品牌包裝預算與配置計算器
            </p>
            <p className="text-neutral-400 text-base leading-relaxed max-w-2xl mx-auto">
              Calculate specialty B2B bag pricing in real-time, modeled precisely like a mortgage calculator. Instantly compare conventional, recyclable, and backyard compostable structures to match your startup budget goals.
            </p>
          </div>

          {/* Interactive Calculator Dashboard */}
          <div className="grid lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Column: Glassmorphic Control panel */}
            <div className="lg:col-span-5 bg-emerald-950/20 backdrop-blur-xl border border-emerald-500/10 p-6 rounded-3xl space-y-6 shadow-2xl relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/5 to-transparent pointer-events-none" />
              
              <div className="flex items-center gap-2.5 border-b border-emerald-500/10 pb-4">
                <RefreshCw className="w-5 h-5 text-emerald-400 animate-spin-slow" />
                <h2 className="text-lg font-bold uppercase tracking-wider text-white">Adjust Parameters</h2>
              </div>

              {/* 1. Target Budget */}
              <div className="space-y-2">
                <div className="flex justify-between items-center font-mono text-xs text-neutral-400">
                  <span>1. Target Investment (目標預算)</span>
                  <span className="text-emerald-300 font-bold bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
                    ${totalBudget.toLocaleString()} USD
                  </span>
                </div>
                <input 
                  type="range" 
                  min="500" 
                  max="15000" 
                  step="250"
                  value={totalBudget} 
                  onChange={(e) => setTotalBudget(parseInt(e.target.value))}
                  className="w-full h-1.5 bg-neutral-800 rounded-lg appearance-none cursor-pointer accent-emerald-400" 
                />
                <div className="flex justify-between text-[10px] text-neutral-500 font-mono">
                  <span>$500 Min</span>
                  <span>$7,500 Mid</span>
                  <span>$15,000 Max</span>
                </div>
              </div>

              {/* 2. Number of Designs */}
              <div className="space-y-2">
                <div className="flex justify-between items-center font-mono text-xs text-neutral-400">
                  <span>2. Number of Designs (口味款式)</span>
                  <span className="text-cyan-300 font-bold bg-cyan-500/10 px-2 py-0.5 rounded-full border border-cyan-500/20">
                    {numDesigns} SKU{numDesigns > 1 ? 's' : ''}
                  </span>
                </div>
                <input 
                  type="range" 
                  min="1" 
                  max="10" 
                  step="1"
                  value={numDesigns} 
                  onChange={(e) => setNumDesigns(parseInt(e.target.value))}
                  className="w-full h-1.5 bg-neutral-800 rounded-lg appearance-none cursor-pointer accent-emerald-400" 
                />
                <div className="grid grid-cols-10 text-[9px] text-neutral-500 text-center font-mono">
                  {[1,2,3,4,5,6,7,8,9,10].map(n => (
                    <span key={n} className={numDesigns === n ? 'text-white font-bold' : ''}>{n}</span>
                  ))}
                </div>
              </div>

              {/* 3. Quantity per Design */}
              <div className="space-y-3">
                <div className="flex justify-between items-center font-mono text-xs text-neutral-400">
                  <span>3. Quantity per Design (每款印量)</span>
                  <span className="text-purple-300 font-bold bg-purple-500/10 px-2 py-0.5 rounded-full border border-purple-500/20">
                    {qtyPerDesign.toLocaleString()} Bags / design
                  </span>
                </div>
                <input 
                  type="range" 
                  min="100" 
                  max="5000" 
                  step="50"
                  value={qtyPerDesign} 
                  onChange={(e) => setQtyPerDesign(parseInt(e.target.value))}
                  className="w-full h-1.5 bg-neutral-800 rounded-lg appearance-none cursor-pointer accent-emerald-400" 
                />
                <div className="grid grid-cols-5 gap-1.5 font-mono text-[9px]">
                  {[100, 500, 1000, 2000, 5000].map(q => (
                    <button
                      key={q}
                      type="button"
                      onClick={() => setQtyPerDesign(q)}
                      className={`py-1 rounded border transition-all ${qtyPerDesign === q ? 'bg-emerald-500 border-emerald-500 text-neutral-950 font-bold shadow-md shadow-emerald-500/25' : 'bg-neutral-900 border-neutral-800 text-neutral-400 hover:text-white'}`}
                    >
                      {q}
                    </button>
                  ))}
                </div>
                <p className="text-[10px] text-neutral-500 font-medium">
                  💡 Note: Print setup costs are evaluated per design SKU. Total bags quantity will be <span className="text-white font-bold">{numDesigns * qtyPerDesign} pcs</span>.
                </p>
              </div>

              {/* 4. Bag Size Picker */}
              <div className="space-y-2">
                <label className="block font-mono text-xs text-neutral-400 uppercase">
                  4. Select Bag Dimension (包裝尺寸)
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {BAG_SIZES.map(s => (
                    <button
                      key={s.id}
                      type="button"
                      onClick={() => setSelectedSize(s)}
                      className={`p-2.5 rounded-xl border text-left transition-all ${selectedSize.id === s.id ? 'bg-emerald-950 border-emerald-400 text-white shadow-lg' : 'bg-neutral-900/60 border-neutral-800/80 text-neutral-400 hover:text-neutral-200'}`}
                    >
                      <div className="font-bold text-xs">{s.dimensions}</div>
                      <div className="text-[9px] font-mono opacity-70 mt-0.5">{s.capacity}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Glowing B2B Telemetry Panel */}
              <div className="border border-emerald-500/20 bg-emerald-950/30 rounded-2xl p-4 font-mono text-xs space-y-2">
                <div className="flex justify-between border-b border-emerald-500/10 pb-1.5 text-neutral-400">
                  <span>Total Bags Run:</span>
                  <span className="text-emerald-400 font-bold">{(numDesigns * qtyPerDesign).toLocaleString()} units</span>
                </div>
                <div className="flex justify-between border-b border-emerald-500/10 pb-1.5 text-neutral-400">
                  <span>Investment Target:</span>
                  <span className="text-white font-bold">${totalBudget.toLocaleString()} USD</span>
                </div>
                <div className="flex justify-between items-center text-[10px] pt-1 text-emerald-400">
                  <span>⚡ Cylinder plates fee:</span>
                  <span className="bg-emerald-500/20 text-emerald-300 px-1.5 py-0.5 rounded font-black border border-emerald-500/30">WAIVED ($0)</span>
                </div>
              </div>

            </div>

            {/* Right Column: Glassmorphic Option Cards List */}
            <div className="lg:col-span-7 space-y-4">
              
              {['stock-cards', 'custom-print', 'recyclable', 'compostable'].map(optionId => {
                const data = calculateOptionPrice(optionId)
                const isSafe = data.totalCost <= totalBudget
                const budgetDiff = Math.abs(data.totalCost - totalBudget)

                return (
                  <div 
                    key={optionId} 
                    className={`bg-emerald-950/5 backdrop-blur-md border border-neutral-850 p-5 rounded-3xl relative overflow-hidden transition-all duration-300 hover:border-emerald-500/10 ${data.isBelowMoq ? 'opacity-50' : 'hover:-translate-y-0.5 shadow-xl shadow-emerald-950/5'}`}
                  >
                    
                    {/* Budget Badge */}
                    <div className="absolute top-0 right-0 border-b border-l border-neutral-800 rounded-bl-xl font-mono text-[9px] font-bold uppercase px-3 py-1.5" style={{ backgroundColor: data.isBelowMoq ? '#ef4444' : (isSafe ? 'rgba(16,185,129,0.1)' : 'rgba(245,158,11,0.1)'), color: data.isBelowMoq ? 'white' : (isSafe ? '#34D399' : '#FBBF24'), borderLeftColor: isSafe ? 'rgba(16,185,129,0.2)' : 'rgba(245,158,11,0.2)' }}>
                      {data.isBelowMoq ? 'BELOW MOQ' : (isSafe ? '🟢 WITHIN BUDGET' : '🟡 ADJUST BUDGET')}
                    </div>

                    <div className="flex flex-col sm:flex-row gap-5 items-center">
                      
                      {/* Stylized Pouch Graphics */}
                      <div className="flex-shrink-0 bg-neutral-900/40 border border-neutral-850 p-3 rounded-2xl flex items-center justify-center shadow-inner">
                        <PouchVisualRender optionId={optionId} accentColor={data.accentColor || '#10B981'} />
                      </div>

                      {/* Content panel */}
                      <div className="flex-grow space-y-3 w-full">
                        <div>
                          <span className="inline-block bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 px-2 py-0.5 text-[9px] font-semibold tracking-wide uppercase rounded-full">
                            {data.badge}
                          </span>
                          <h3 className="text-base font-bold text-white mt-2">
                            {optionId === 'stock-cards' && 'Blank Stock Bag + Tag/Slot Cards'}
                            {optionId === 'custom-print' && 'Full Surface Standard Print'}
                            {optionId === 'recyclable' && '♻️ High-Barrier Recyclable PE+EVOH'}
                            {optionId === 'compostable' && '🌱 TUV Certified Home Compostable'}
                          </h3>
                          <p className="text-xs text-neutral-400 leading-relaxed mt-1">
                            {data.desc}
                          </p>
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 pt-3 border-t border-neutral-850 font-mono text-[11px] text-neutral-400">
                          <div>
                            <span className="text-neutral-500 block text-[9px] uppercase tracking-wider">Unit Price:</span>
                            <span className="text-white font-bold text-sm">${data.unitPrice.toFixed(2)}</span>
                          </div>
                          <div>
                            <span className="text-neutral-500 block text-[9px] uppercase tracking-wider">Total Cost:</span>
                            <span className="text-emerald-400 font-bold text-sm">${data.totalCost.toLocaleString(undefined, {minimumFractionDigits: 2})}</span>
                          </div>
                          <div>
                            <span className="text-neutral-500 block text-[9px] uppercase tracking-wider">Eco Label:</span>
                            <span className="text-neutral-300 font-bold">{data.certLogo}</span>
                          </div>
                          <div>
                            <span className="text-neutral-500 block text-[9px] uppercase tracking-wider">Delivery:</span>
                            <span className="text-neutral-300 font-bold">{data.leadTime}</span>
                          </div>
                        </div>

                        {/* Cost share allocation */}
                        {!data.isBelowMoq && (
                          <div className="space-y-1 pt-1 font-mono text-[10px]">
                            <div className="flex justify-between text-neutral-500">
                              <span>Budget Allocation share</span>
                              <span className={isSafe ? 'text-emerald-400' : 'text-amber-400'}>
                                {Math.round((data.totalCost / totalBudget) * 100)}%
                              </span>
                            </div>
                            <div className="w-full h-1 bg-neutral-900 rounded-full overflow-hidden">
                              <div 
                                className="h-full rounded-full" 
                                style={{ 
                                  width: `${Math.min((data.totalCost / totalBudget) * 100, 100)}%`,
                                  backgroundColor: isSafe ? '#10B981' : '#f59e0b'
                                }} 
                              />
                            </div>
                            {!isSafe && (
                              <p className="text-[9px] text-amber-500 font-semibold italic">
                                ⚠️ Requires an additional +${budgetDiff.toLocaleString(undefined, {maximumFractionDigits: 2})} USD to match this custom eco structure.
                              </p>
                            )}
                          </div>
                        )}

                        {data.isBelowMoq && (
                          <div className="bg-red-500/10 border border-red-500/25 p-2 rounded-lg text-[10px] text-red-400 font-mono flex items-center gap-1.5">
                            <AlertTriangle className="w-3.5 h-3.5 flex-shrink-0" />
                            <span>Run quantity falls below MOQ. Requires at least {data.moq} pieces per flavor design.</span>
                          </div>
                        )}

                      </div>

                    </div>

                  </div>
                )
              })}

            </div>

          </div>

          {/* WhatsApp Lead RFQ Generator */}
          <div className="bg-emerald-950/20 backdrop-blur-xl border border-emerald-500/10 p-6 rounded-3xl shadow-2xl mt-12 space-y-6 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/5 to-transparent pointer-events-none" />
            
            <div className="flex items-center gap-2.5 border-b border-emerald-500/10 pb-4">
              <Phone className="w-6 h-6 text-emerald-400 animate-bounce" />
              <div>
                <h3 className="text-xl font-bold text-white uppercase font-['Outfit']">Instant WhatsApp RFQ Dispatch</h3>
                <p className="text-xs text-neutral-400 font-mono">一鍵複製參數配置 & WhatsApp 聯絡客服</p>
              </div>
            </div>

            <p className="text-xs text-neutral-300 leading-relaxed max-w-3xl">
              Ready to verify samples or request final artwork vectors? Click the button below to instantly save your chosen configuration string to your clipboard and dispatch it directly to our specialty B2B support desk on WhatsApp!
            </p>

            <div className="bg-neutral-950 border border-neutral-850 p-4 rounded-2xl text-xs font-mono text-neutral-400 leading-relaxed relative group">
              <button
                type="button"
                onClick={() => {
                  navigator.clipboard.writeText(getBilingualRfqText())
                  setWhatsappCopied(true)
                  setTimeout(() => setWhatsappCopied(false), 2000)
                }}
                className="absolute top-3.5 right-3.5 bg-neutral-900 hover:bg-black text-emerald-400 border border-neutral-800 rounded-lg px-2.5 py-1 text-[10px] flex items-center gap-1.5 cursor-pointer transition-all"
              >
                <Copy className="w-3 h-3" />
                {whatsappCopied ? 'Copied!' : 'Copy'}
              </button>
              <pre className="whitespace-pre-wrap select-all pr-12 font-mono">
                {getBilingualRfqText()}
              </pre>
            </div>

            <button
              type="button"
              onClick={handleWhatsappCopy}
              className="w-full bg-emerald-500 hover:bg-emerald-400 text-neutral-950 font-black uppercase text-sm py-4 rounded-xl active:scale-98 transition-all flex items-center justify-center gap-2.5 cursor-pointer shadow-lg shadow-emerald-500/20"
            >
              <Phone className="w-4 h-4 fill-neutral-950" />
              Copy Config & Open WhatsApp Support (一鍵複製配置並開啟 WhatsApp)
            </button>
          </div>

        </div>
      </section>

      <Footer />
    </div>
  )
}
