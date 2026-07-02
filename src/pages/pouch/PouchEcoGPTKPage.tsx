import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import React, { useState, useMemo, useEffect } from 'react'
import { useTranslation, Trans } from 'react-i18next'
import { 
  Coffee, Leaf, Zap, CheckCircle, ArrowRight, Shield, Award, Box, Ruler, 
  Sparkles, DollarSign, Clock, HelpCircle, Mail, Download, Compass, 
  MapPin, Check, Layers, AlertCircle, ShoppingBag, Grid, Info, Sparkle, Globe,
  Copy, Phone, RefreshCw, AlertTriangle, Calendar, ChevronDown, ChevronRight, MessageSquare, Package
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
  customConven: string
  customOval: string
  customFlat: string
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
        name: 'Base Material (Barrier & Certification)',
        stockCards: 'Pre-made Foil Laminated structure (Matte Finish)',
        customConven: 'Conventional Multi-Laminate Foil (High-barrier PET/AL/PE)',
        customOval: '♻️ Mono-PE (EVOH gas lock) OR 🌱 Bio Kraft (ASTM D6400 Home compostable PBAT layers)',
        customFlat: '♻️ Mono-PE (EVOH gas lock) OR 🌱 Bio Kraft (ASTM D6400 Home compostable PBAT layers)'
      },
      {
        name: 'Pouch Shape (Shelf Display & Capacity)',
        stockCards: 'Flat Bottom / Box Pouch Shape (Side Gussets)',
        customConven: 'Oval Stand-Up Pouch Shape (Doypack)',
        customOval: 'Oval Stand-Up Pouch Shape (Doypack - saves 50% material unit cost)',
        customFlat: 'Box-Style Flat Bottom Pouch Shape (Side Gussets for maximum display volume)'
      },
      {
        name: 'Logistics Protection (Ocean Freight Proof)',
        stockCards: 'Standard single-wall corrugated transport packing',
        customConven: 'Heavy-duty double-wall master cartons',
        customOval: 'Heavy-duty double-wall master cartons + inner moisture-barrier polybags (Ocean-Freight Proof)',
        customFlat: 'Heavy-duty double-wall master cartons + inner moisture-barrier polybags (Ocean-Freight Proof)'
      }
    ]
  },
  {
    title: '🎨 Customization & Printing Mechanics',
    rows: [
      {
        name: 'Printing Method (MOQ & Costs)',
        stockCards: 'Modular branding (card inserts, tags, or matte stickers)',
        customConven: 'High-Resolution CMYK Digital Print (Waived cylinder setups)',
        customOval: 'High-Resolution CMYK Digital Print (Short runs) OR Rotogravure CMYK+3 Spot (Bulk runs)',
        customFlat: 'High-Resolution CMYK Digital Print (Short runs) OR Rotogravure CMYK+3 Spot (Bulk runs)'
      },
      {
        name: 'Cylinder Setup Fees (Setup Costs)',
        stockCards: '$0 Waived completely',
        customConven: '$0 Waived completely (Digital setup)',
        customOval: '$0 Waived (Digital) OR $160 per color (Waived on first gravure run over 10k)',
        customFlat: '$0 Waived (Digital) OR $160 per color (Waived on first gravure run over 10k)'
      },
      {
        name: 'Mechanical Tolerances (Aseptic Filling Strength)',
        stockCards: 'Standard manual loading parameters',
        customConven: 'Durable side-seals, drop-test rated up to 1.5 meters',
        customOval: 'High tensile-strength seals, optimized for high-speed automated VFFS filling lines (65 bags/min)',
        customFlat: 'High tensile-strength seals, optimized for high-speed automated VFFS filling lines (65 bags/min)'
      }
    ]
  },
  {
    title: '🛡️ Closure & Aroma Preservation',
    rows: [
      {
        name: 'Zipper Closure (Leakproof Reclosure)',
        stockCards: 'Premium airtight reclosable zipper',
        customConven: 'Premium airtight reclosable zipper',
        customOval: '♻️ Mono-PE Recyclable Zipper OR 🌱 EN 13432 certified Biodegradable Zip closure',
        customFlat: '♻️ Mono-PE Recyclable Zipper OR 🌱 EN 13432 certified Biodegradable Zip closure'
      },
      {
        name: 'Degassing Valve (One-way Gas Release)',
        stockCards: 'Optional pre-installed degassing valve',
        customConven: 'One-way aroma preservation degassing valve integrated',
        customOval: 'Integrated custom PE/Bio-valve (OTR < 1.0 cc/m²/24h for fresh organic roasted beans)',
        customFlat: 'Integrated custom PE/Bio-valve (OTR < 1.0 cc/m²/24h for fresh organic roasted beans)'
      },
      {
        name: 'Barrier OTR / WVTR (Oxygen & Moisture Block)',
        stockCards: 'High (Standard metal foil lock)',
        customConven: 'High (Durable aluminum-foil aroma barrier)',
        customOval: 'Ultra-High (< 1.0 OTR/WVTR matching metal foil, protecting organic beans against staling)',
        customFlat: 'Ultra-High (< 1.0 OTR/WVTR matching metal foil, protecting organic beans against staling)'
      }
    ]
  }
]

const SACHET_UNPRINTED_OPTIONS = [
  { id: 'sample-9-pack', label: 'Silk & Kraft 9 Colors Sample Pack', pcs: 9, price: 2.70 },
  { id: 'off-white-105', label: 'Off-White Silk Paper 100 pcs', pcs: 100, price: 2.94 },
  { id: 'black-105', label: 'Black Silk Paper 100 pcs', pcs: 100, price: 2.94 },
  { id: 'pink-105', label: 'Pink Silk Paper 100 pcs', pcs: 100, price: 2.94 },
  { id: 'gold-105', label: 'Gold Silk Paper 100 pcs', pcs: 100, price: 2.94 },
  { id: 'blue-105', label: 'Blue Silk Paper 100 pcs', pcs: 100, price: 2.94 },
  { id: 'light-yellow-105', label: 'Light Yellow Silk Paper 100 pcs', pcs: 100, price: 2.94 },
  { id: 'cyan-105', label: 'Teal/Cyan Silk Paper 100 pcs', pcs: 100, price: 2.94 },
  { id: 'yellow-kraft-105', label: 'Yellow Kraft Paper 100 pcs', pcs: 100, price: 2.94 },
  { id: 'white-kraft-105', label: 'White Kraft Paper 100 pcs', pcs: 100, price: 2.94 },
  { id: 'white-cotton-105', label: 'White Cotton Paper 100 pcs', pcs: 100, price: 2.94 }
];

const SACHET_MOCKUPS = [
  '/imgs/store/products/small-sachet-conventional-thumbnail-1.png',
  '/imgs/store/products/small-sachet-conventional-thumbnail-2.png',
  '/imgs/store/products/small-sachet-conventional-thumbnail-3.png',
  '/imgs/store/products/small-sachet-conventional-thumbnail-4.png',
  '/imgs/store/products/small-sachet-conventional-thumbnail-5.png'
];

const translations = {
  en: {
    title: "5 Common Eco Pouch Problems (And Solutions)",
    problems: [
      { q: "High MOQ for custom printed eco-friendly pouches", a: "Solution: Digital printing allows ultra-low MOQ starting at 500 units.", icon: "Package" },
      { q: "Poor oxygen/moisture barrier in standard kraft bags", a: "Solution: EVOH gas lock or metalised PLA core for maximum protection.", icon: "Shield" },
      { q: "Expensive cylinder plate setup fees", a: "Solution: Digital CMYK printing waives all plate costs.", icon: "DollarSign" },
      { q: "Long lead times for custom dimensions", a: "Solution: Millimeter-precise custom sizing without tooling delays.", icon: "Clock" },
      { q: "Weak sealing strength in compostable materials", a: "Solution: Certified PBAT/PLA high-strength heat sealant layers.", icon: "CheckCircle" }
    ]
  },
  es: {
    title: "5 Problemas Comunes de las Bolsas Ecológicas (Y Soluciones)",
    problems: [
      { q: "MOQ alto para bolsas ecológicas impresas personalizadas", a: "Solución: La impresión digital permite MOQ ultra bajos a partir de 500 unidades.", icon: "Package" },
      { q: "Mala barrera de oxígeno/humedad en bolsas kraft estándar", a: "Solución: Bloqueo de gas EVOH o núcleo de PLA metalizado para máxima protección.", icon: "Shield" },
      { q: "Costosas tarifas de configuración de placas", a: "Solución: La impresión digital CMYK exime todos los costos de placas.", icon: "DollarSign" },
      { q: "Largos tiempos de entrega para dimensiones personalizadas", a: "Solución: Tamaño personalizado preciso al milímetro sin demoras en herramientas.", icon: "Clock" },
      { q: "Fuerza de sellado débil en materiales compostables", a: "Solución: Capas de sellador térmico de alta resistencia certificadas PBAT/PLA.", icon: "CheckCircle" }
    ]
  },
  fr: {
    title: "5 Problèmes Courants des Sachets Écologiques (Et Solutions)",
    problems: [
      { q: "MOQ élevé pour les sachets écologiques imprimés personnalisés", a: "Solution : L'impression numérique permet un MOQ ultra-faible à partir de 500 unités.", icon: "Package" },
      { q: "Mauvaise barrière à l'oxygène et à l'humidité dans les sacs kraft", a: "Solution : Verrouillage aux gaz EVOH ou noyau en PLA métallisé pour une protection maximale.", icon: "Shield" },
      { q: "Frais de configuration de plaques coûteux", a: "Solution : L'impression numérique CMYK supprime tous les frais de plaques.", icon: "DollarSign" },
      { q: "Longs délais pour les dimensions personnalisées", a: "Solution : Dimensionnement sur mesure au millimètre près sans retard d'outillage.", icon: "Clock" },
      { q: "Faible résistance d'étanchéité des matériaux compostables", a: "Solution : Couches de scellage thermique haute résistance certifiées PBAT/PLA.", icon: "CheckCircle" }
    ]
  },
  "zh-TW": {
    title: "5 個常見的環保袋問題（及解決方案）",
    problems: [
      { q: "客製化環保袋的起訂量高", a: "解決方案：數位印刷支援從 500 件起的超低起訂量。", icon: "Package" },
      { q: "標準牛皮紙袋的氧氣/濕氣阻隔性差", a: "解決方案：EVOH 氣體鎖定或金屬化 PLA 核心，提供最大保護。", icon: "Shield" },
      { q: "昂貴的版費", a: "解決方案：CMYK 數位印刷免除所有版費。", icon: "DollarSign" },
      { q: "客製化尺寸的交貨時間長", a: "解決方案：毫米級的精確客製尺寸，無需模具延遲。", icon: "Clock" },
      { q: "可堆肥材料的封口強度弱", a: "解決方案：認證的 PBAT/PLA 高強度熱封層。", icon: "CheckCircle" }
    ]
  }
};

const sectionsForPouch = translations;
const sectionsForAchieve = translations;

const iconMap: Record<string, React.ElementType> = { Package, Shield, DollarSign, Clock, CheckCircle };

export default function PouchEcoGPTKPage({ hideNav = false }: { hideNav?: boolean }) {
  const { t, i18n } = useTranslation();
  const lang = i18n.language || 'en';
  const pageT = sectionsForPouch[lang as keyof typeof sectionsForPouch] || sectionsForPouch.en;
  const p = 'seoPages.pages.pouchEcoGPTK';

  const rotatingCategories = [
    'Specialty Coffee Roasters',
    'Organic Tea Brands',
    'Nutritional Supplement Brands',
    'Artisanal Snack Brands',
    'Gourmet Pet Treat Brands',
    'Superfood Powder Brands'
  ]
  const [categoryIndex, setCategoryIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCategoryIndex(prev => (prev + 1) % rotatingCategories.length)
    }, 3000)
    return () => clearInterval(timer)
  }, [])

  const [sizeMode, setSizeMode] = useState<'standard' | 'custom'>('standard')
  const [numDesigns, setNumDesigns] = useState<number>(3)
  const [qtyPerDesign, setQtyPerDesign] = useState<number>(500)
  const [selectedSize, setSelectedSize] = useState<BagSize>(BAG_SIZES[0])
  const [whatsappCopied, setWhatsappCopied] = useState<boolean>(false)
  const [enlargedImage, setEnlargedImage] = useState<string | null>(null)
  const [expandedOption, setExpandedOption] = useState<string | null>(null)
  
  // State for sub-options in Card 1 (Stock Conventional)
  const [stockOption, setStockOption] = useState<'card' | 'tag' | 'sticker'>('card')

  // State for sub-options in Card 2 (Custom Conventional)
  const [convenOption, setConvenOption] = useState<'matt-metallised' | 'glossy-clear'>('matt-metallised')

  // State for sub-options in the Custom printed cards (PE+EVOH Recyclable vs Compostable vs Conventional)
  const [ovalEcoOption, setOvalEcoOption] = useState<'pe-evoh' | 'compostable' | 'conventional'>('pe-evoh')
  const [flatEcoOption, setFlatEcoOption] = useState<'pe-evoh' | 'compostable' | 'conventional'>('pe-evoh')


  // Sachet specific states
  const [sachetUnprintedColor, setSachetUnprintedColor] = useState<string>('off-white-105')
  const [sachetUnprintedPacks, setSachetUnprintedPacks] = useState<number>(5)
  
  const [sachetHotStampingQty, setSachetHotStampingQty] = useState<number>(500)
  const [sachetHotStampingDesigns, setSachetHotStampingDesigns] = useState<number>(1)
  const [sachetHotStampingRound, setSachetHotStampingRound] = useState<boolean>(false)
  
  const [sachetDigitalQty, setSachetDigitalQty] = useState<number>(1000)
  const [sachetDigitalDesigns, setSachetDigitalDesigns] = useState<number>(1)
  const [sachetDigitalRound, setSachetDigitalRound] = useState<boolean>(false)
  
  const [sachetTraditionalQty, setSachetTraditionalQty] = useState<number>(50000)
  const [sachetTraditionalDesigns, setSachetTraditionalDesigns] = useState<number>(1)
  const [sachetTraditionalColors, setSachetTraditionalColors] = useState<number>(4)
  const [sachetTraditionalRound, setSachetTraditionalRound] = useState<boolean>(false)

  // Active sachet image indices for each card
  const [sachetUnprintedImgIdx, setSachetUnprintedImgIdx] = useState<number>(0)
  const [sachetHotStampingImgIdx, setSachetHotStampingImgIdx] = useState<number>(1)
  const [sachetDigitalImgIdx, setSachetDigitalImgIdx] = useState<number>(2)
  const [sachetTraditionalImgIdx, setSachetTraditionalImgIdx] = useState<number>(3)

  const handleSachetWhatsappCopy = (
    cardName: string, 
    qty: number, 
    designs: number, 
    round: boolean, 
    additionalDetails: string, 
    totalCost: number, 
    unitPrice: number
  ) => {
    const text = t('seoPages.pages.pouchEcoGPTK.rfqText', {
      cardName,
      qty,
      designs,
      total: qty * designs,
      roundStatus: round ? t('seoPages.pages.pouchEcoGPTK.roundNeed', 'need (Yes, +$0.0336)') : t('seoPages.pages.pouchEcoGPTK.roundNoNeed', 'no need (No)'),
      additionalDetails,
      unitPrice: unitPrice.toFixed(4),
      totalCost: totalCost.toLocaleString(undefined, {minimumFractionDigits: 2})
    })

    navigator.clipboard.writeText(text).then(() => {
      setWhatsappCopied(true)
      setTimeout(() => setWhatsappCopied(false), 3000)
      window.open('https://api.whatsapp.com/send?phone=85269704411&text=' + encodeURIComponent('Hello Achieve Pack! I have generated my Sachet Packaging configuration: \n\n' + text), '_blank')
    })
  }
  
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
  const calculateOptionPrice = (optionId: string, subOption?: string) => {
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

    if (optionId === 'custom-conven') {
      moq = 100;
      let totalPrice = 0;
      if (qtyPerDesign < 100) {
        isBelowMoq = true;
      } else {
        // Look up flat price based on size
        if (isSize1) {
          if (qtyPerDesign === 100) totalPrice = 190;
          else if (qtyPerDesign === 500) totalPrice = 290;
          else if (qtyPerDesign === 1000) totalPrice = 530;
          else if (qtyPerDesign === 5000) totalPrice = 1700;
        } else if (isSize2) {
          if (qtyPerDesign === 100) totalPrice = 210;
          else if (qtyPerDesign === 500) totalPrice = 320;
          else if (qtyPerDesign === 1000) totalPrice = 600;
          else if (qtyPerDesign === 5000) totalPrice = 1870;
        } else if (isSize3) {
          if (qtyPerDesign === 100) totalPrice = 210;
          else if (qtyPerDesign === 500) totalPrice = 320;
          else if (qtyPerDesign === 1000) totalPrice = 590;
          else if (qtyPerDesign === 5000) totalPrice = 1980;
        } else {
          // isSize4 or custom fallback
          if (qtyPerDesign === 100) totalPrice = 240;
          else if (qtyPerDesign === 500) totalPrice = 430;
          else if (qtyPerDesign === 1000) totalPrice = 720;
          else if (qtyPerDesign === 5000) totalPrice = 2470;
        }
        unitPrice = totalPrice / qtyPerDesign;
      }

      const totalCost = isBelowMoq ? 0 : unitPrice * qtyPerDesign * numDesigns;
      const isClear = subOption === 'glossy-clear';
      const displayImg = isClear
        ? '/imgs/store/products/conven-sup-clear-zip-premium.png'
        : '/imgs/store/products/conven-sup-met-zip-premium.png';

      return {
        unitPrice,
        totalCost,
        isBelowMoq,
        moq,
        badge: isClear 
          ? 'Custom Conventional (Glossy Clear)' 
          : 'Custom Conventional (Matt Metallised)',
        desc: isClear
          ? 'Glossy transparent stand-up pouch (Doypack) custom-printed edge-to-edge. Perfect blend of visibility, high shelf appeal, and resealable convenience.'
          : 'Premium matte metalised stand-up pouch (Doypack) custom-printed edge-to-edge. Offers superb light and moisture barrier properties with custom branding.',
        accentColor: '#4f46e5',
        certLogo: isClear ? '✨ High Visibility' : '⭐ Best Seller',
        leadTime: '15 - 20 Days',
        image: displayImg,
        points: isClear
          ? [
              'Stand-Up Pouch Shape (Doypack with Oval Bottom)',
              'Glossy Crystal Clear Film for Maximum Product Visibility',
              'High-Strength Premium Zipper & Tear Notch',
              '100pcs Ultra-Low MOQ Edge-to-Edge Custom Printing',
              'Waived Cylinder Plate Fees with Digital Print'
            ]
          : [
              'Stand-Up Pouch Shape (Doypack with Oval Bottom)',
              'Matt Metallised Film with Superior Oxygen/Moisture Barrier',
              'Durable Resealable Zipper & Heat-Sealable Top',
              '100pcs Ultra-Low MOQ Edge-to-Edge Custom Printing',
              'Waived Cylinder Plate Fees with Digital Print'
            ]
      };
    }

    // For Custom printed standard and eco, MOQ is 500 total pouches (run)
    const totalQty = (optionId === 'custom-flat' || optionId === 'custom-oval')
      ? qtyPerDesign
      : qtyPerDesign * numDesigns;
    if (optionId === 'custom-flat' || optionId === 'custom-oval') {
      if (totalQty < 500) {
        isBelowMoq = true;
      }
    }

    if (optionId === 'custom-flat') {
      const isCompostable = subOption === 'compostable';
      const isConventional = subOption === 'conventional';
      
      // Determine tier based on total run quantity
      let lookupQty = 500;
      if (totalQty >= 5000) lookupQty = 5000;
      else if (totalQty >= 1000) lookupQty = 1000;
      else lookupQty = 500;

      // Base compostable prices
      let compostablePrice = 0;
      if (isSize1) {
        if (lookupQty === 500) compostablePrice = 2.70;
        else if (lookupQty === 1000) compostablePrice = 1.90;
        else if (lookupQty === 5000) compostablePrice = 0.95;
      } else if (isSize2) {
        if (lookupQty === 500) compostablePrice = 2.80;
        else if (lookupQty === 1000) compostablePrice = 2.00;
        else if (lookupQty === 5000) compostablePrice = 1.00;
      } else if (isSize3) {
        if (lookupQty === 500) compostablePrice = 2.90;
        else if (lookupQty === 1000) compostablePrice = 2.10;
        else if (lookupQty === 5000) compostablePrice = 1.05;
      } else {
        // size 4
        if (lookupQty === 500) compostablePrice = 3.10;
        else if (lookupQty === 1000) compostablePrice = 2.30;
        else if (lookupQty === 5000) compostablePrice = 1.15;
      }

      // Base Recyclable PE prices
      let recyclablePEPrice = 0;
      if (isSize1) {
        if (lookupQty === 500) recyclablePEPrice = 2.50;
        else if (lookupQty === 1000) recyclablePEPrice = 1.70;
        else if (lookupQty === 5000) recyclablePEPrice = 0.85;
      } else if (isSize2) {
        if (lookupQty === 500) recyclablePEPrice = 2.60;
        else if (lookupQty === 1000) recyclablePEPrice = 1.80;
        else if (lookupQty === 5000) recyclablePEPrice = 0.90;
      } else if (isSize3) {
        if (lookupQty === 500) recyclablePEPrice = 2.70;
        else if (lookupQty === 1000) recyclablePEPrice = 1.90;
        else if (lookupQty === 5000) recyclablePEPrice = 0.95;
      } else {
        // size 4
        if (lookupQty === 500) recyclablePEPrice = 2.90;
        else if (lookupQty === 1000) recyclablePEPrice = 2.10;
        else if (lookupQty === 5000) recyclablePEPrice = 1.05;
      }

      // Assign unit price based on material selection
      if (isCompostable) {
        unitPrice = compostablePrice;
      } else if (isConventional) {
        unitPrice = compostablePrice * 0.65; // 35% less than compostable price
      } else {
        unitPrice = recyclablePEPrice; // Recyclable PE
      }

      // If adding 1 more SKU, unit price adds 10% (i.e. +10% per extra design)
      if (numDesigns > 1) {
        unitPrice = unitPrice * (1 + (numDesigns - 1) * 0.1);
      }

      const totalCost = isBelowMoq ? 0 : unitPrice * totalQty;
      
      let badge = '';
      let desc = '';
      let accentColor = '#10b981';
      let certLogo = '♻️ SPI Code 4';
      let image = '/imgs/store/products/pe-flat-bottom-premium.png';
      let points: string[] = [];

      if (isCompostable) {
        badge = 'Custom printed/sized Flat Bottom (Compostable)';
        desc = '100% Home & Industrial certified compostable Kraft laminate flat bottom pouch with side gussets, degassing valve and bio-adhesives.';
        accentColor = '#10b981';
        certLogo = '🌱 Certified Bio';
        image = '/imgs/store/products/compostable-kraft-premium.png';
        points = [
          'Sturdy Box-Style Flat Bottom Shape with Side Gussets',
          '100% Biodegradable & Compostable Bio-Liner',
          'Sustainably Sourced Kraft Paper Shell',
          'Degassing Valve & Compostable Resealable Zip',
          'Full Width & Height Customizable Sizing Available'
        ];
      } else if (isConventional) {
        badge = 'Custom printed/sized Flat Bottom (Conventional)';
        desc = 'Conventional multi-laminate foil flat bottom pouch with side gussets and high protective barrier layers at 35% less cost than compostable.';
        accentColor = '#6366f1';
        certLogo = '📄 Standard Foil';
        image = '/imgs/store/products/pe-flat-bottom-premium.png';
        points = [
          'Sturdy Box-Style Flat Bottom Shape with Side Gussets',
          'High-Barrier Conventional Foil Laminate (PET/AL/PE)',
          '35% Less Cost than Compostable Options',
          'Integrated One-Way Degassing Valve & Zip Lock',
          'Custom Sizing with Zero Cylinder Setup Fees'
        ];
      } else {
        badge = 'Custom printed/sized Flat Bottom (Recyclable)';
        desc = 'Recyclable Mono-PE flat bottom pouch with EVOH high oxygen barrier layer and side gussets, supporting zero microplastic footprints.';
        accentColor = '#059669';
        certLogo = '♻️ SPI Code 4';
        image = '/imgs/store/products/pe-flat-bottom-premium.png';
        points = [
          'Sturdy Box-Style Flat Bottom Shape with Side Gussets',
          'Premium Recyclable Mono-PE Mono-Material',
          'EVOH Layer for Superior Gas & Light Barrier',
          'Zero Microplastic & Recyclable Resealable Zip',
          'Customizable Millimeter Sizing at $0 Setup Fee'
        ];
      }

      return {
        unitPrice,
        totalCost,
        isBelowMoq,
        moq,
        badge,
        desc,
        accentColor,
        certLogo,
        leadTime: '20 - 25 Days',
        image,
        points
      };
    }

    if (optionId === 'custom-oval') {
      // Oval Bottom is stand-up Doypack pouch shape, priced at exactly half of the Flat Bottom price!
      const flatPrices = calculateOptionPrice('custom-flat', subOption);
      unitPrice = flatPrices.unitPrice / 2;
      const totalCost = isBelowMoq ? 0 : unitPrice * totalQty;
      const isCompostable = subOption === 'compostable';
      const isConventional = subOption === 'conventional';

      let badge = '';
      let desc = '';
      let accentColor = '#3b82f6';
      let certLogo = '♻️ Eco-Saver 50%';
      let image = '/imgs/store/products/pe-oval-doypack-premium.png';
      let points: string[] = [];

      if (isCompostable) {
        badge = 'Custom printed/sized Oval Bottom (Compostable)';
        desc = 'Stand-Up Doypack pouch shape with an oval bottom gusset. Saves 50% material costs while retaining certified bio-compostable Kraft papers and valve seals.';
        accentColor = '#3b82f6';
        certLogo = '🌱 Bio-Saver 50%';
        image = '/imgs/store/products/compostable-oval-doypack-premium.png';
        points = [
          'Stand-Up Pouch Shape (Doypack with Oval Bottom)',
          'Saves 50% Material & Unit Cost Compared to Flat Bottom',
          '100% Compostable Bio-Liner & Kraft Paper Shell',
          'BPI certified degassing valve & bio zipper closure',
          '500pcs low MOQ with waived cylinder setups'
        ];
      } else if (isConventional) {
        badge = 'Custom printed/sized Oval Bottom (Conventional)';
        desc = 'Stand-Up Doypack pouch shape with an oval bottom gusset. Saves 50% material costs while retaining high-barrier conventional foil layers and zip lock.';
        accentColor = '#6366f1';
        certLogo = '📄 Foil-Saver 50%';
        image = '/imgs/store/products/pe-oval-doypack-premium.png';
        points = [
          'Stand-Up Pouch Shape (Doypack with Oval Bottom)',
          'Saves 50% Material & Unit Cost Compared to Flat Bottom',
          'Conventional Foil Laminate (35% less than compostable)',
          'One-way degassing valve & airtight zip closure',
          '500pcs low MOQ with waived cylinder setups'
        ];
      } else {
        badge = 'Custom printed/sized Oval Bottom (Recyclable)';
        desc = 'Stand-Up Doypack pouch shape with an oval bottom gusset. Saves 50% material costs while retaining premium recyclable Mono-PE EVOH gas barriers and zip seals.';
        accentColor = '#10b981';
        certLogo = '♻️ Eco-Saver 50%';
        image = '/imgs/store/products/pe-oval-doypack-premium.png';
        points = [
          'Stand-Up Pouch Shape (Doypack with Oval Bottom)',
          'Saves 50% Material & Unit Cost Compared to Flat Bottom',
          'Mono-PE Recyclable construction with EVOH gas lock',
          'Airtight resealable zipper & integrated degassing valve',
          '500pcs low MOQ with waived cylinder setups'
        ];
      }

      return {
        unitPrice,
        totalCost,
        isBelowMoq,
        moq,
        badge,
        desc,
        accentColor,
        certLogo,
        leadTime: '20 - 25 Days',
        image,
        points
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
  const convenData = useMemo(() => calculateOptionPrice('custom-conven', convenOption), [qtyPerDesign, numDesigns, selectedSize, convenOption])
  const ovalData = useMemo(() => calculateOptionPrice('custom-oval', ovalEcoOption), [qtyPerDesign, numDesigns, selectedSize, ovalEcoOption])
  const flatData = useMemo(() => calculateOptionPrice('custom-flat', flatEcoOption), [qtyPerDesign, numDesigns, selectedSize, flatEcoOption])

  // Telemetry values for the "WhatsApp Configurator Summary"
  const getBilingualRfqText = () => {
    const cardStatus = cardData.isBelowMoq ? 'Below MOQ' : `${cardData.unitPrice.toFixed(2)} USD (Total: ${cardData.totalCost.toFixed(2)})`;
    const convenStatus = convenData.isBelowMoq ? 'Below MOQ' : `${convenData.unitPrice.toFixed(2)} USD (Total: ${convenData.totalCost.toFixed(2)})`;
    const ovalStatus = ovalData.isBelowMoq ? 'Below MOQ' : `${ovalData.unitPrice.toFixed(2)} USD (Total: ${ovalData.totalCost.toFixed(2)})`;
    const flatStatus = flatData.isBelowMoq ? 'Below MOQ' : `${flatData.unitPrice.toFixed(2)} USD (Total: ${flatData.totalCost.toFixed(2)})`;

    return `Achieve Pack Coffee Packaging RFQ Summary:
--------------------------------------------------
📐 Selected Dimension: ${sizeMode === 'custom' ? 'Custom size' : selectedSize.dimensions} (capacity: ${selectedSize.label})
🎨 Number of Designs: ${numDesigns} Designs

[For Stock & Custom Conventional]:
📦 Quantity per Design: ${qtyPerDesign} pcs
🎁 Total Bags Quantity: ${numDesigns * qtyPerDesign} pcs

[For Custom Oval & Flat Bottom]:
📦 Quantity per Design: ${Math.round(qtyPerDesign / numDesigns)} pcs
🎁 Total Bags Quantity: ${qtyPerDesign} pcs

Real-time Options Quotation:
1️⃣ Stock Conventional Option (Modular: ${stockOption === 'card' ? 'Insert Card' : stockOption === 'tag' ? 'Roped Tag' : 'Sticker'}):
   - ${cardStatus}
2️⃣ Custom Conventional Printed (${convenOption === 'matt-metallised' ? 'Matt Metallised' : 'Glossy Clear'}):
   - ${convenStatus}
3️⃣ Custom Oval Stand-Up (${ovalEcoOption === 'pe-evoh' ? 'PE+EVOH Recyclable' : ovalEcoOption === 'compostable' ? 'Compostable' : 'Conventional'}):
   - ${ovalStatus}
4️⃣ Custom Premium Flat Bottom (${flatEcoOption === 'pe-evoh' ? 'PE+EVOH Recyclable' : flatEcoOption === 'compostable' ? 'Compostable' : 'Conventional'}):
   - ${flatStatus}
--------------------------------------------------
💬 I have completed the configuration using the online pricing calculator. Please assist with samples and design onboarding!`;
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
          <title>{t(`${p}.title`)}</title>
          <meta name="description" content={t(`${p}.description`)} />
          <link rel="canonical" href="https://achievepack.com/pricing" />
        </Helmet>

        {/* B2B Clickable Breadcrumbs (Slide 06) */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-2">
          <nav className="flex text-xs font-semibold text-neutral-400 gap-1.5 items-center">
            <Link to="/" className="hover:text-emerald-600 transition">{t(`${p}.nav.home`)}</Link>
            <span>/</span>
            <Link to="/materials/recyclable-mono-pe" className="hover:text-emerald-600 transition">{t(`${p}.nav.customPackaging`)}</Link>
            <span>/</span>
            <span className="text-neutral-800 font-black">{t(`${p}.nav.pricingCalculator`)}</span>
          </nav>
        </div>

        {/* HERO SECTION */}
        <section className="relative pt-8 pb-10 bg-white text-center">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(16,185,129,0.02)_0%,transparent_50%)] pointer-events-none" />
          
          <div className="max-w-4xl mx-auto px-4 relative z-10 space-y-4">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase bg-emerald-50 border border-emerald-100 text-emerald-800 tracking-wider">
              {t(`${p}.hero.badge`)}
            </span>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-neutral-900 font-['Outfit'] leading-tight">
              {t(`${p}.hero.titlePrefix`)}{' '}
              <span className="block mt-2">
                <span className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-indigo-600 py-1">
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={categoryIndex}
                      initial={{ y: 15, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: -15, opacity: 0 }}
                      transition={{ duration: 0.35, ease: 'easeOut' }}
                      className="inline-block"
                    >
                      {rotatingCategories[categoryIndex]}
                    </motion.span>
                  </AnimatePresence>
                </span>
              </span>
            </h1>
            <p className="text-base text-neutral-500 max-w-2xl mx-auto leading-relaxed">
              {t(`${p}.hero.desc`)}
            </p>
          </div>
        </section>

        {/* SPLIT-PANE DASHBOARD LAYOUT */}
        <section className="max-w-7xl mx-auto px-4 md:px-6 relative z-20 pb-12">
          <div className="grid lg:grid-cols-12 gap-8 items-start">
            
            {/* LEFT COLUMN: Sticky Control Panel */}
            <div className="lg:col-span-5 lg:sticky lg:top-24 lg:max-h-[calc(100vh-6rem)] lg:overflow-y-auto pr-2 space-y-6">
              <div className="bg-neutral-50/60 border border-neutral-200/80 rounded-3xl p-6 shadow-[0_4px_24px_rgba(0,0,0,0.02)] backdrop-blur-md space-y-6">
                
                {/* Control 1: Sizing Mode */}
                <div className="space-y-2.5">
                  <span className="block text-xs font-bold uppercase tracking-wider text-neutral-400">1. Sizing Mode Selector</span>
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

                {/* Control 2: Capacity Selector */}
                {sizeMode === 'standard' ? (
                  <div className="space-y-2.5">
                    <span className="block text-xs font-bold uppercase tracking-wider text-neutral-400">2. Standard Weight & Capacity Selector</span>
                    <div className="grid grid-cols-4 gap-2 bg-neutral-100 border border-neutral-200 p-1.5 rounded-2xl text-center text-xs font-bold">
                      {BAG_SIZES.map(s => (
                        <button 
                          key={s.id} 
                          type="button" 
                          onClick={() => setSelectedSize(s)}
                          className={`py-2.5 px-1 rounded-xl transition-all duration-200 flex flex-col justify-center items-center ${selectedSize.id === s.id ? 'bg-white text-neutral-900 shadow-sm border border-neutral-200/60 font-black' : 'text-neutral-505 hover:text-neutral-955'}`}
                        >
                          {/* Pouch Silhouette based on size */}
                          {s.id === 'size-1' && (
                            <svg className="w-[20px] h-[24px] mb-1.5 text-current" viewBox="0 0 20 24" fill="currentColor">
                              <path d="M4 5h12l1 12c0 2-3 3-7 3s-7-1-7-3L4 5z" opacity="0.35" />
                              <path d="M4 5h12l1 12c0 2-3 3-7 3s-7-1-7-3L4 5z" fill="none" stroke="currentColor" strokeWidth="1.5" />
                              <path d="M3 5h14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                            </svg>
                          )}
                          {s.id === 'size-2' && (
                            <svg className="w-[22px] h-[26px] mb-1.5 text-current" viewBox="0 0 22 26" fill="currentColor">
                              <path d="M4.5 4.5h13l1 14.5c0 2-3.5 2.5-7.5 2.5s-7.5-0.5-7.5-2.5L4.5 4.5z" opacity="0.35" />
                              <path d="M4.5 4.5h13l1 14.5c0 2-3.5 2.5-7.5 2.5s-7.5-0.5-7.5-2.5L4.5 4.5z" fill="none" stroke="currentColor" strokeWidth="1.5" />
                              <path d="M3.5 4.5h15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                            </svg>
                          )}
                          {s.id === 'size-3' && (
                            <svg className="w-[24px] h-[30px] mb-1 text-current" viewBox="0 0 24 30" fill="currentColor">
                              <path d="M5 4h14l1 18c0 2.5-4 3-8 3s-8-0.5-8-3L5 4z" opacity="0.35" />
                              <path d="M5 4h14l1 18c0 2.5-4 3-8 3s-8-0.5-8-3L5 4z" fill="none" stroke="currentColor" strokeWidth="1.5" />
                              <path d="M4 4h16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                            </svg>
                          )}
                          {s.id === 'size-4' && (
                            <svg className="w-[28px] h-[34px] mb-1 text-current" viewBox="0 0 28 34" fill="currentColor">
                              <path d="M5.5 3h17L24 25c0 3-4.5 3.5-10 3.5S4 28 4 25L5.5 3z" opacity="0.35" />
                              <path d="M5.5 3h17L24 25c0 3-4.5 3.5-10 3.5S4 28 4 25L5.5 3z" fill="none" stroke="currentColor" strokeWidth="1.5" />
                              <path d="M8 3v22.5" stroke="currentColor" strokeWidth="1" strokeDasharray="1.5 1.5" opacity="0.5" />
                              <path d="M20 3v22.5" stroke="currentColor" strokeWidth="1" strokeDasharray="1.5 1.5" opacity="0.5" />
                              <path d="M4.5 3h19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                            </svg>
                          )}
                          <span className="text-[12px]">{s.label}</span>
                          <span className="text-[9px] text-neutral-400 font-medium font-mono mt-0.5">{s.dimensions.replace(' + 80 mm', '').replace(' × ', 'x')}</span>
                        </button>
                      ))}
                    </div>


                    
                    {/* Size Guide links */}
                    <div className="flex flex-wrap gap-x-4 gap-y-2 pt-2 text-[11px] font-semibold text-neutral-450 border-t border-neutral-100 mt-2">
                      <Link to="/size-guide" className="inline-flex items-center gap-1 text-[#10b981] hover:underline">
                        <Ruler className="w-3.5 h-3.5" /> Size Guide
                      </Link>
                      <Link to="/knowledge/pouch-sizing" className="inline-flex items-center gap-1 text-indigo-600 hover:underline">
                        <Info className="w-3.5 h-3.5" /> Pouch Calculator
                      </Link>
                      <Link to="/dieline-finder" className="inline-flex items-center gap-1 hover:text-emerald-600 transition">
                        <HelpCircle className="w-3.5 h-3.5" /> Dieline Finder
                      </Link>
                    </div>
                  </div>
                ) : (
                  <div className="bg-emerald-50 border border-emerald-100 rounded-2xl p-4 space-y-2 text-xs font-semibold text-emerald-800 leading-relaxed font-sans">
                    <div className="flex items-center gap-1.5 font-bold uppercase text-emerald-950">
                      <Sparkles className="w-4 h-4 text-emerald-600" /> Custom Sizing Mode Active
                    </div>
                    <p className="text-[11px] text-emerald-905 font-medium">
                      We support precise custom width, height, and gusset sizes. The calculator applies the pricing of the nearest standard template.
                    </p>
                    <div className="flex gap-4 pt-1 border-t border-emerald-100/50 mt-1">
                      <Link to="/size-guide" className="text-emerald-700 hover:underline">Size Guide</Link>
                      <Link to="/knowledge/pouch-sizing" className="text-emerald-700 hover:underline">Calculator</Link>
                    </div>
                  </div>
                )}

                {/* Control 3: Order Run Quantity & Stepper SKU */}
                <div className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex justify-between items-center text-xs font-bold uppercase tracking-wider text-neutral-400">
                      <span>3. Order Run Quantity</span>
                      {qtyPerDesign === 100 && (
                        <span className="text-amber-700 font-bold bg-amber-50 border border-amber-100 px-2 py-0.5 rounded text-[10px]">Stock Only</span>
                      )}
                    </div>
                    <div className="bg-neutral-100 border border-neutral-200 p-1 rounded-2xl grid grid-cols-4 text-center text-xs font-bold font-sans">
                      {[100, 500, 1000, 5000].map(q => (
                        <button 
                          key={q} 
                          type="button" 
                          onClick={() => setQtyPerDesign(q)}
                          className={`py-2.5 px-1 rounded-xl transition-all duration-200 ${qtyPerDesign === q ? 'bg-white text-neutral-900 shadow-sm border border-neutral-200/80 font-black' : 'text-neutral-500 hover:text-neutral-900'}`}
                        >
                          {q.toLocaleString()} pcs
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Volume Discount Progress Tracker */}
                  <div className="space-y-2 pt-2 border-t border-neutral-200/50">
                    <div className="flex justify-between items-center text-[10px] font-bold uppercase tracking-wider text-neutral-455">
                      <span>Volume Discount Tracker</span>
                      <span className="text-indigo-700 bg-indigo-50 border border-indigo-100/50 px-2 py-0.5 rounded font-black font-sans">
                        {qtyPerDesign === 100 && 'Startup Tier'}
                        {qtyPerDesign === 500 && 'MOQ Unlocked'}
                        {qtyPerDesign === 1000 && '30% Savings'}
                        {qtyPerDesign === 5000 && 'Flexo Price Unlocked'}
                      </span>
                    </div>

                    <div className="relative py-2.5">
                      <div className="absolute top-1/2 left-0 right-0 h-1 bg-neutral-200 -translate-y-1/2 rounded-full" />
                      <div 
                        className="absolute top-1/2 left-0 h-1 bg-gradient-to-r from-emerald-500 to-indigo-500 -translate-y-1/2 rounded-full transition-all duration-300"
                        style={{
                          width: qtyPerDesign === 100 ? '0%' : 
                                 qtyPerDesign === 500 ? '33.33%' : 
                                 qtyPerDesign === 1000 ? '66.66%' : '100%'
                        }}
                      />
                      <div className="relative flex justify-between">
                        {[100, 500, 1000, 5000].map((q) => {
                          const isActive = q <= qtyPerDesign;
                          const isSelected = q === qtyPerDesign;
                          return (
                            <div key={q} className="flex flex-col items-center">
                              <button
                                type="button"
                                onClick={() => setQtyPerDesign(q)}
                                className={`w-3.5 h-3.5 rounded-full border-2 transition-all duration-300 relative z-10 ${isSelected ? 'bg-white border-indigo-600 scale-125 ring-4 ring-indigo-500/20' : isActive ? 'bg-emerald-500 border-emerald-500' : 'bg-white border-neutral-300 hover:border-neutral-400'}`}
                              />
                              <span className={`text-[10px] mt-1 font-bold ${isSelected ? 'text-indigo-600 font-extrabold' : 'text-neutral-400'}`}>
                                {q >= 1000 ? `${q/1000}k` : q}
                              </span>
                            </div>
                          );
                        })}
                      </div>
                    </div>

                    <div className="bg-gradient-to-r from-emerald-50/40 to-indigo-50/40 border border-neutral-200/40 rounded-2xl p-3 text-[11px] font-semibold text-neutral-600 leading-normal flex items-start gap-2 shadow-inner">
                      <Sparkles className="w-4 h-4 text-indigo-500 shrink-0 mt-0.5" />
                      <div>
                        {qtyPerDesign === 100 && (
                          <span>Add <strong className="text-neutral-900">400 more total bags (to reach 500pcs)</strong> to unlock edge-to-edge Custom printed Stand-Up or Box Gusset pouches at better prices!</span>
                        )}
                        {qtyPerDesign === 500 && (
                          <span>Add <strong className="text-neutral-900">500 more total bags (to reach 1,000pcs)</strong> to save up to <strong className="text-emerald-700">30% on average unit price</strong>!</span>
                        )}
                        {qtyPerDesign === 1000 && (
                          <span>Add <strong className="text-neutral-900">4,000 more total bags (to reach 5,000pcs)</strong> to unlock flexo/gravure high-run bulk pricing tiers, saving up to <strong className="text-indigo-700">50% or more</strong>!</span>
                        )}
                        {qtyPerDesign === 5000 && (
                          <span>🎉 <strong className="text-indigo-700">5,000pcs Flexo Bulk Tier unlocked!</strong> Plate setup fees are fully waived, giving you the best cost-to-performance ratio.</span>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* SKU stepper counter */}
                  <div className="space-y-2 pt-2 border-t border-neutral-200/50">
                    <span className="block text-xs font-bold uppercase tracking-wider text-neutral-400">4. Designs SKUs</span>
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

                {/* Config Summary & WhatsApp Dispatch */}
                <div className="pt-4 border-t border-dashed border-neutral-200/80 flex flex-col gap-3 text-xs font-semibold">
                  <div className="text-neutral-550 text-[11px] leading-relaxed space-y-1.5">
                    <div>
                      Selected Dimensions: <strong className="text-neutral-950">{sizeMode === 'custom' ? 'Custom size' : selectedSize.dimensions}</strong>
                    </div>
                    <div className="border-t border-neutral-200/50 pt-1.5">
                      <span className="text-neutral-450 block text-[9px] uppercase font-mono tracking-wider">Stock & Conventional:</span>
                      <strong className="text-neutral-950">{(qtyPerDesign * numDesigns).toLocaleString()} total pouches</strong> ({qtyPerDesign.toLocaleString()} per design)
                    </div>
                    <div className="border-t border-neutral-200/50 pt-1.5">
                      <span className="text-neutral-455 block text-[9px] uppercase font-mono tracking-wider">Custom Oval & Flat Bottom:</span>
                      <strong className="text-neutral-950">{qtyPerDesign.toLocaleString()} total pouches</strong> ({Math.round(qtyPerDesign / numDesigns).toLocaleString()} per design)
                    </div>
                  </div>
                  <button 
                    onClick={handleWhatsappCopy} 
                    className="w-full bg-neutral-950 hover:bg-neutral-900 text-white font-extrabold uppercase text-[11px] py-3 rounded-xl transition duration-150 active:scale-98 flex items-center justify-center gap-1.5 shadow-sm cursor-pointer"
                  >
                    <Phone className="w-3.5 h-3.5 fill-white stroke-none" /> Send WhatsApp RFQ
                  </button>
                  {whatsappCopied && (
                    <p className="text-[10px] text-emerald-600 font-bold text-center mt-1">
                      ✓ Configuration copied! Opening WhatsApp Chat...
                    </p>
                  )}
                </div>

              </div>
            </div>

            {/* RIGHT COLUMN: Comparison Pricing Cards Grid */}
            <div className="lg:col-span-7 lg:sticky lg:top-24 lg:max-h-[calc(100vh-6rem)] lg:overflow-y-auto pr-2">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-stretch">
                
                {/* CARD 1: STOCK CONVENTIONAL */}
                <div className={`relative bg-white/70 backdrop-blur-md border border-neutral-200/50 rounded-3xl p-6 shadow-[0_8px_32px_rgba(0,0,0,0.03)] flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_50px_rgba(16,185,129,0.05)] hover:border-emerald-500/20 group ${sizeMode === 'custom' ? 'opacity-50 pointer-events-none' : ''}`}>
                  <div className="space-y-4">
                    <div className="flex justify-between items-start">
                      <span className="inline-block bg-neutral-100 text-neutral-600 border border-neutral-200 px-2 py-0.5 rounded-md text-[9px] font-bold uppercase tracking-wider">
                        Stock Modular
                      </span>
                      <span className="text-[10px] text-neutral-400 font-semibold font-mono">MOQ: 100pcs</span>
                    </div>

                    <div>
                      <h3 className="text-lg font-black text-neutral-900 font-['Outfit']">Stock Conventional</h3>
                      <p className="text-[11px] text-neutral-400 leading-normal mt-1">
                        Premade high-barrier stock pouches. Quick 3-5 days dispatch.
                      </p>
                    </div>

                    {/* Stock Sub-Options */}
                    <div className="bg-neutral-100/50 border border-neutral-200 p-1 rounded-xl grid grid-cols-3 text-center text-[10px] font-bold">
                      {['card', 'tag', 'sticker'].map((opt) => (
                        <button 
                          key={opt}
                          type="button" 
                          onClick={() => { setStockOption(opt as any); setSizeMode('standard'); }}
                          className={`py-1.5 rounded-lg capitalize transition-all ${stockOption === opt ? 'bg-white text-neutral-900 shadow-sm border border-neutral-200/30 font-black' : 'text-neutral-500'}`}
                        >
                          {opt}
                        </button>
                      ))}
                    </div>

                    {/* Thumbnail Click-to-Zoom */}
                    <div 
                      onClick={() => setEnlargedImage(cardData.image)}
                      className="w-full aspect-[16/10] border border-neutral-200/60 bg-neutral-50 rounded-2xl overflow-hidden shadow-inner relative group/thumb cursor-zoom-in"
                    >
                      <img src={cardData.image} alt={cardData.badge} className="w-full h-full object-cover transition duration-300 group-hover/thumb:scale-103" />
                      <div className="absolute inset-0 bg-black/5 opacity-0 group-hover/thumb:opacity-100 transition duration-150 flex items-center justify-center">
                        <span className="bg-white/95 text-neutral-800 text-[10px] font-bold px-2.5 py-1 rounded-lg border border-neutral-250/30 shadow-md">Click to Zoom</span>
                      </div>
                    </div>

                    {/* Pricing */}
                    <div className="border-t border-b border-neutral-100 py-3.5">
                      <div className="flex items-baseline gap-1">
                        <span className="text-4xl font-extrabold text-neutral-955 tracking-tight font-['Outfit']">${cardData.unitPrice.toFixed(2)}</span>
                        <span className="text-xs text-neutral-455 font-bold">/ pouch</span>
                      </div>
                      <div className="text-[11px] text-neutral-500 font-bold mt-1">
                        Total: <span className="text-neutral-955">${cardData.totalCost.toLocaleString(undefined, {minimumFractionDigits: 2})} USD</span>
                      </div>
                    </div>

                    {/* Short Specs Summary */}
                    <ul className="space-y-1.5 text-xs text-neutral-600">
                      <li className="flex items-start gap-1.5">
                        <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" strokeWidth={3} />
                        <span>Ready in standard {selectedSize.dimensions.split(' + ')[0]}mm size</span>
                      </li>
                      <li className="flex items-start gap-1.5">
                        <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" strokeWidth={3} />
                        <span>Modular stick-on label/tag layout</span>
                      </li>
                    </ul>
                  </div>

                  <div className="pt-4 mt-4 border-t border-neutral-100">
                    <button
                      onClick={() => setExpandedOption('stock-cards')}
                      className="w-full bg-neutral-100 hover:bg-neutral-200 text-neutral-800 border border-neutral-200/50 font-bold text-xs py-2.5 rounded-xl transition duration-150 active:scale-95 flex items-center justify-center gap-1 cursor-pointer"
                    >
                      View Technical Specs
                    </button>
                  </div>
                </div>

                {/* CARD 2: CUSTOM CONVENTIONAL */}
                <div className={`relative bg-white/70 backdrop-blur-md border border-neutral-200/50 rounded-3xl p-6 shadow-[0_8px_32px_rgba(0,0,0,0.03)] flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_50px_rgba(79,70,229,0.05)] hover:border-indigo-500/20 group ${sizeMode === 'custom' ? 'opacity-50 pointer-events-none' : ''}`}>
                  <div className="space-y-4">
                    <div className="flex justify-between items-start">
                      <span className="inline-block bg-indigo-50 text-indigo-700 border border-indigo-100 px-2 py-0.5 rounded-md text-[9px] font-bold uppercase tracking-wider">
                        Custom Conventional
                      </span>
                      <span className="text-[10px] text-neutral-400 font-semibold font-mono">MOQ: 100pcs</span>
                    </div>

                    <div>
                      <h3 className="text-lg font-black text-neutral-900 font-['Outfit']">Custom Conventional</h3>
                      <p className="text-[11px] text-neutral-400 leading-normal mt-1">
                        Edge-to-edge custom digital printed. Stand-up doypack layout.
                      </p>
                    </div>

                    {/* Conventional Sub-Options */}
                    <div className="bg-neutral-100/50 border border-neutral-200 p-1 rounded-xl grid grid-cols-2 text-center text-[10px] font-bold">
                      <button 
                        type="button" 
                        onClick={() => { setConvenOption('matt-metallised'); setSizeMode('standard'); }}
                        className={`py-1.5 rounded-lg transition-all ${convenOption === 'matt-metallised' ? 'bg-white text-indigo-700 shadow-sm border border-neutral-200/30 font-black' : 'text-neutral-505'}`}
                      >
                        Matt Metalised
                      </button>
                      <button 
                        type="button" 
                        onClick={() => { setConvenOption('glossy-clear'); setSizeMode('standard'); }}
                        className={`py-1.5 rounded-lg transition-all ${convenOption === 'glossy-clear' ? 'bg-white text-indigo-700 shadow-sm border border-neutral-200/30 font-black' : 'text-neutral-500'}`}
                      >
                        Glossy Clear
                      </button>
                    </div>

                    {/* Thumbnail */}
                    <div 
                      onClick={() => setEnlargedImage(convenData.image)}
                      className="w-full aspect-[16/10] border border-neutral-200/60 bg-neutral-50 rounded-2xl overflow-hidden shadow-inner relative group/thumb cursor-zoom-in"
                    >
                      <img src={convenData.image} alt={convenData.badge} className="w-full h-full object-cover transition duration-300 group-hover/thumb:scale-103" />
                      <div className="absolute inset-0 bg-black/5 opacity-0 group-hover/thumb:opacity-100 transition duration-150 flex items-center justify-center">
                        <span className="bg-white/95 text-neutral-800 text-[10px] font-bold px-2.5 py-1 rounded-lg border border-neutral-250/30 shadow-md">Click to Zoom</span>
                      </div>
                    </div>

                    {/* Pricing */}
                    <div className="border-t border-b border-neutral-100 py-3.5">
                      {convenData.isBelowMoq ? (
                        <div className="py-2.5 text-center">
                          <span className="text-xl font-bold text-red-500 block">Below MOQ</span>
                          <span className="text-[9px] text-neutral-400 block mt-0.5">Requires 100+ pcs run</span>
                        </div>
                      ) : (
                        <>
                          <div className="flex items-baseline gap-1">
                            <span className="text-4xl font-extrabold text-neutral-955 tracking-tight font-['Outfit']">${convenData.unitPrice.toFixed(2)}</span>
                            <span className="text-xs text-neutral-455 font-bold">/ pouch</span>
                          </div>
                          <div className="text-[11px] text-neutral-505 font-bold mt-1">
                            Total: <span className="text-neutral-955">${convenData.totalCost.toLocaleString(undefined, {minimumFractionDigits: 2})} USD</span>
                          </div>
                        </>
                      )}
                    </div>

                    {/* Short Specs */}
                    <ul className="space-y-1.5 text-xs text-neutral-600">
                      <li className="flex items-start gap-1.5">
                        <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" strokeWidth={3} />
                        <span>Oval-bottom Stand-up pouch shape</span>
                      </li>
                      <li className="flex items-start gap-1.5">
                        <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" strokeWidth={3} />
                        <span>High barrier laminate foil or clarity film</span>
                      </li>
                    </ul>
                  </div>

                  <div className="pt-4 mt-4 border-t border-neutral-100">
                    <button
                      onClick={() => setExpandedOption('custom-conven')}
                      className="w-full bg-neutral-100 hover:bg-neutral-200 text-neutral-800 border border-neutral-200/50 font-bold text-xs py-2.5 rounded-xl transition duration-150 active:scale-95 flex items-center justify-center gap-1 cursor-pointer"
                    >
                      View Technical Specs
                    </button>
                  </div>
                </div>

                {/* CARD 3: CUSTOM OVAL BOTTOM */}
                <div className="relative bg-white/70 backdrop-blur-md border border-neutral-200/50 rounded-3xl p-6 shadow-[0_8px_32px_rgba(0,0,0,0.03)] flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_50px_rgba(59,130,246,0.05)] hover:border-blue-500/20 group">
                  <div className="space-y-4">
                    <div className="flex justify-between items-start">
                      <span className="inline-block bg-blue-50 text-blue-700 border border-blue-100 px-2 py-0.5 rounded-md text-[9px] font-bold uppercase tracking-wider">
                        Custom Oval Stand-Up
                      </span>
                      <span className="text-[10px] text-emerald-600 font-bold font-mono">MOQ: 500pcs</span>
                    </div>

                    <div>
                      <h3 className="text-lg font-black text-neutral-900 font-['Outfit']">Custom Oval Bottom</h3>
                      <p className="text-[11px] text-neutral-400 leading-normal mt-1">
                        Millimeter customizable sizing stand-up. Saves 50% unit price vs flat bottom box bags.
                      </p>
                    </div>

                    {/* Oval Materials Sub-Options */}
                    <div className="bg-neutral-100/50 border border-neutral-200 p-0.5 rounded-xl grid grid-cols-3 text-center text-[9px] font-bold">
                      {['pe-evoh', 'compostable', 'conventional'].map((mat) => (
                        <button 
                          key={mat}
                          type="button" 
                          onClick={() => setOvalEcoOption(mat as any)}
                          className={`py-1.5 rounded-lg transition-all ${ovalEcoOption === mat ? 'bg-white text-emerald-700 shadow-sm border border-neutral-200/30 font-black' : 'text-neutral-550'}`}
                        >
                          {mat === 'pe-evoh' ? 'Mono-PE' : mat === 'compostable' ? 'Bio Kraft' : 'Conventional'}
                        </button>
                      ))}
                    </div>

                    {/* Thumbnail */}
                    <div 
                      onClick={() => setEnlargedImage(ovalData.image)}
                      className="w-full aspect-[16/10] border border-neutral-200/60 bg-neutral-50 rounded-2xl overflow-hidden shadow-inner relative group/thumb cursor-zoom-in"
                    >
                      <img src={ovalData.image} alt={ovalData.badge} className="w-full h-full object-cover transition duration-300 group-hover/thumb:scale-103" />
                      <div className="absolute inset-0 bg-black/5 opacity-0 group-hover/thumb:opacity-100 transition duration-150 flex items-center justify-center">
                        <span className="bg-white/95 text-neutral-800 text-[10px] font-bold px-2.5 py-1 rounded-lg border border-neutral-250/30 shadow-md">Click to Zoom</span>
                      </div>
                    </div>

                    {/* Pricing with smart MOQ button */}
                    <div className="border-t border-b border-neutral-100 py-3.5">
                      {ovalData.isBelowMoq ? (
                        <div className="py-2 text-center space-y-2">
                          <span className="text-xl font-bold text-red-500 block">Below MOQ</span>
                          <span className="text-[9.5px] text-neutral-450 block leading-tight">Total run count must reach 500+ pcs</span>
                          <button
                            type="button"
                            onClick={() => setQtyPerDesign(500)}
                            className="bg-amber-500 hover:bg-amber-600 text-white font-extrabold text-[9px] uppercase px-3 py-1.5 rounded-lg transition-all active:scale-95 shadow-sm"
                          >
                            Upgrade to 500pcs MOQ
                          </button>
                        </div>
                      ) : (
                        <>
                          <div className="flex items-baseline gap-1">
                            <span className="text-4xl font-extrabold text-neutral-955 tracking-tight font-['Outfit']">${ovalData.unitPrice.toFixed(2)}</span>
                            <span className="text-xs text-neutral-455 font-bold">/ pouch</span>
                          </div>
                          <div className="text-[11px] text-emerald-600 font-bold mt-1">
                            Total: <span className="text-neutral-955">${ovalData.totalCost.toLocaleString(undefined, {minimumFractionDigits: 2})} USD</span>
                          </div>
                        </>
                      )}
                    </div>

                    {/* Short Specs */}
                    <ul className="space-y-1.5 text-xs text-neutral-600">
                      <li className="flex items-start gap-1.5">
                        <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" strokeWidth={3} />
                        <span>Saves 50% material costs vs Flat Bottom</span>
                      </li>
                      <li className="flex items-start gap-1.5">
                        <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" strokeWidth={3} />
                        <span>Millimeter scale custom size supported</span>
                      </li>
                    </ul>
                  </div>

                  <div className="pt-4 mt-4 border-t border-neutral-100">
                    <button
                      onClick={() => setExpandedOption('custom-oval')}
                      className="w-full bg-neutral-100 hover:bg-neutral-200 text-neutral-800 border border-neutral-200/50 font-bold text-xs py-2.5 rounded-xl transition duration-150 active:scale-95 flex items-center justify-center gap-1 cursor-pointer"
                    >
                      View Technical Specs
                    </button>
                  </div>
                </div>

                {/* CARD 4: CUSTOM FLAT BOTTOM */}
                <div className="relative bg-white/75 backdrop-blur-md border rounded-3xl p-6 flex flex-col justify-between scale-[1.01] shadow-[0_12px_40px_rgba(0,0,0,0.06)] border-emerald-600/30 ring-4 ring-emerald-500/5 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_24px_60px_rgba(16,185,129,0.1)] group">
                  <div className="absolute top-0 right-6 -translate-y-1/2 bg-emerald-600 text-white text-[9px] font-bold uppercase tracking-widest px-3 py-1 rounded-full shadow-sm z-10">
                    PREMIUM BOX GUSSET
                  </div>

                  <div className="space-y-4">
                    <div className="flex justify-between items-start">
                      <span className="inline-block bg-emerald-50 text-emerald-750 border border-emerald-100 px-2 py-0.5 rounded-md text-[9px] font-bold uppercase tracking-wider">
                        Custom Premium Flat Bottom
                      </span>
                      <span className="text-[10px] text-emerald-600 font-bold font-mono">MOQ: 500pcs</span>
                    </div>

                    <div>
                      <h3 className="text-lg font-black text-neutral-900 font-['Outfit']">Custom Flat Bottom</h3>
                      <p className="text-[11px] text-neutral-400 leading-normal mt-1">
                        Premium box-shape bag with side-gussets for maximum retail branding.
                      </p>
                    </div>

                    {/* Flat materials Sub-Options */}
                    <div className="bg-neutral-100/50 border border-neutral-200 p-0.5 rounded-xl grid grid-cols-3 text-center text-[9px] font-bold">
                      {['pe-evoh', 'compostable', 'conventional'].map((mat) => (
                        <button 
                          key={mat}
                          type="button" 
                          onClick={() => setFlatEcoOption(mat as any)}
                          className={`py-1.5 rounded-lg transition-all ${flatEcoOption === mat ? 'bg-white text-emerald-700 shadow-sm border border-neutral-200/30 font-black' : 'text-neutral-500'}`}
                        >
                          {mat === 'pe-evoh' ? 'Mono-PE' : mat === 'compostable' ? 'Bio Kraft' : 'Conventional'}
                        </button>
                      ))}
                    </div>

                    {/* Thumbnail */}
                    <div 
                      onClick={() => setEnlargedImage(flatData.image)}
                      className="w-full aspect-[16/10] border border-neutral-200/60 bg-neutral-50 rounded-2xl overflow-hidden shadow-inner relative group/thumb cursor-zoom-in"
                    >
                      <img src={flatData.image} alt={flatData.badge} className="w-full h-full object-cover transition duration-300 group-hover/thumb:scale-103" />
                      <div className="absolute inset-0 bg-black/5 opacity-0 group-hover/thumb:opacity-100 transition duration-150 flex items-center justify-center">
                        <span className="bg-white/95 text-neutral-800 text-[10px] font-bold px-2.5 py-1 rounded-lg border border-neutral-250/30 shadow-md">Click to Zoom</span>
                      </div>
                    </div>

                    {/* Pricing with smart MOQ button */}
                    <div className="border-t border-b border-neutral-100 py-3.5">
                      {flatData.isBelowMoq ? (
                        <div className="py-2 text-center space-y-2">
                          <span className="text-xl font-bold text-red-500 block">Below MOQ</span>
                          <span className="text-[9.5px] text-neutral-450 block leading-tight">Total run count must reach 500+ pcs</span>
                          <button
                            type="button"
                            onClick={() => setQtyPerDesign(500)}
                            className="bg-amber-500 hover:bg-amber-600 text-white font-extrabold text-[9px] uppercase px-3 py-1.5 rounded-lg transition-all active:scale-95 shadow-sm"
                          >
                            Upgrade to 500pcs MOQ
                          </button>
                        </div>
                      ) : (
                        <>
                          <div className="flex items-baseline gap-1">
                            <span className="text-4xl font-extrabold text-neutral-950 tracking-tight font-['Outfit']">${flatData.unitPrice.toFixed(2)}</span>
                            <span className="text-xs text-neutral-455 font-bold">/ pouch</span>
                          </div>
                          <div className="text-[11px] text-neutral-500 font-bold mt-1">
                            Total: <span className="text-neutral-950">${flatData.totalCost.toLocaleString(undefined, {minimumFractionDigits: 2})} USD</span>
                          </div>
                        </>
                      )}
                    </div>

                    {/* Short Specs */}
                    <ul className="space-y-1.5 text-xs text-neutral-600">
                      <li className="flex items-start gap-1.5">
                        <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" strokeWidth={3} />
                        <span>Maximum shelf volume display aesthetics</span>
                      </li>
                      <li className="flex items-start gap-1.5">
                        <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" strokeWidth={3} />
                        <span>Millimeter custom sizing & DDP delivery</span>
                      </li>
                    </ul>
                  </div>

                  <div className="pt-4 mt-4 border-t border-emerald-100">
                    <button
                      onClick={() => setExpandedOption('custom-flat')}
                      className="w-full bg-neutral-950 hover:bg-neutral-900 text-white font-bold text-xs py-2.5 rounded-xl transition duration-150 active:scale-95 flex items-center justify-center gap-1 cursor-pointer"
                    >
                      View Technical Specs
                    </button>
                  </div>
                </div>

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

        {/* SMALL SACHET CONVENTIONAL MATERIAL PRICING MATRIX */}
        {(() => {
          // Card 1 Calculations: Unprinted Stock
          const unprintedOpt = SACHET_UNPRINTED_OPTIONS.find(o => o.id === sachetUnprintedColor) || SACHET_UNPRINTED_OPTIONS[1];
          const unprintedTotalPcs = sachetUnprintedPacks * unprintedOpt.pcs;
          const unprintedTotalCost = sachetUnprintedPacks * unprintedOpt.price;
          const unprintedUnit = unprintedOpt.price / unprintedOpt.pcs;

          // Card 2 Calculations: Hot Stamping
          let hotStampingBase = 0;
          if (sachetHotStampingQty <= 500) hotStampingBase = 159.60;
          else if (sachetHotStampingQty <= 1000) hotStampingBase = 210.00;
          else hotStampingBase = 285.60;
          
          const hotStampingBaseTotal = hotStampingBase * sachetHotStampingDesigns;
          const hotStampingRoundSurcharge = sachetHotStampingRound ? sachetHotStampingQty * sachetHotStampingDesigns * 0.0336 : 0;
          const hotStampingTotalCost = hotStampingBaseTotal + hotStampingRoundSurcharge;
          const hotStampingUnit = hotStampingTotalCost / (sachetHotStampingQty * sachetHotStampingDesigns);

          // Card 3 Calculations: Digital Color
          let digitalBase = 0;
          if (sachetDigitalQty <= 1000) digitalBase = 231.00;
          else if (sachetDigitalQty <= 2000) digitalBase = 336.00;
          else if (sachetDigitalQty <= 3000) digitalBase = 441.00;
          else if (sachetDigitalQty <= 5000) digitalBase = sachetDigitalQty * 0.1302;
          else digitalBase = sachetDigitalQty * 0.1092;

          const digitalBaseTotal = digitalBase * sachetDigitalDesigns;
          const digitalRoundSurcharge = sachetDigitalRound ? sachetDigitalQty * sachetDigitalDesigns * 0.0336 : 0;
          const digitalTotalCost = digitalBaseTotal + digitalRoundSurcharge;
          const digitalUnit = digitalTotalCost / (sachetDigitalQty * sachetDigitalDesigns);

          // Card 4 Calculations: Traditional Gravure
          const traditionalBase = sachetTraditionalQty * 0.0378;
          const traditionalCylinderSetup = sachetTraditionalColors * 126.00;
          const traditionalBaseTotal = traditionalBase * sachetTraditionalDesigns;
          const traditionalRoundSurcharge = sachetTraditionalRound ? sachetTraditionalQty * sachetTraditionalDesigns * 0.0336 : 0;
          const traditionalTotalCost = traditionalBaseTotal + traditionalCylinderSetup + traditionalRoundSurcharge;
          const traditionalUnit = traditionalTotalCost / (sachetTraditionalQty * sachetTraditionalDesigns);

          return (
            <section className="max-w-7xl mx-auto px-4 md:px-6 pt-16">
              <div className="max-w-7xl mx-auto space-y-8">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-neutral-200 pb-5">
                  <div>
                    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-indigo-50 border border-indigo-100 text-indigo-700">
                      ⚡ Premium Small Packaging
                    </span>
                    <h3 className="text-xl md:text-2xl font-extrabold text-neutral-950 font-['Outfit'] mt-1.5">
                      Small Sachet – Conventional Material Custom Estimator
                    </h3>
                    <p className="text-xs text-neutral-500 font-medium mt-1 font-sans">
                      {t('seoPages.pages.pouchEcoGPTK.sachetDesc', 'Premium Silk Pure Aluminum (120um / 12 threads) structure offering ultra-high moisture, oxygen, and light barriers. Dimensions: 80 × 80 mm.')}
                    </p>
                  </div>
                  <Link 
                    to="/store/product/small-sachet-conventional" 
                    className="shrink-0 inline-flex items-center justify-center gap-1.5 px-5 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold uppercase text-xs rounded-xl shadow-sm hover:shadow active:scale-95 transition-all select-none font-sans"
                  >
                    Configure Sachet Page <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>

                {/* Grid of 4 Interactive Cards */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
                  
                  {/* Card 1: Ready Stock Sachet */}
                  <div className="bg-white border border-neutral-200 rounded-3xl p-6 shadow-sm flex flex-col justify-between hover:-translate-y-1 hover:border-neutral-300 hover:shadow-md transition-all duration-300">
                    <div className="space-y-6">
                      <div>
                        <div className="flex justify-between items-start">
                          <span className="inline-block bg-neutral-100 text-neutral-600 border border-neutral-200 px-2.5 py-0.5 rounded-md text-[9px] font-bold uppercase tracking-wider">
                            Ready Stock
                          </span>
                          <span className="text-[10px] text-neutral-400 font-semibold font-mono">MOQ: 1 Pack</span>
                        </div>
                        <h3 className="text-xl font-extrabold text-neutral-900 mt-2.5 font-['Outfit']">
                          Plain Ready Stock
                        </h3>
                        <p className="text-xs text-neutral-455 mt-1 leading-relaxed font-sans font-medium">
                          Plain unprinted sachets in beautiful stock textures. Fast 3-5 days delivery, $0 cylinder setup fee.
                        </p>
                      </div>

                      {/* Stock Color Dropdown */}
                      <div className="space-y-2">
                        <div>
                          <label className="block text-[9px] font-bold uppercase tracking-wider text-neutral-400 mb-1 font-mono">Sachet Color</label>
                          <select 
                            value={sachetUnprintedColor}
                            onChange={(e) => setSachetUnprintedColor(e.target.value)}
                            className="w-full text-xs font-semibold text-neutral-750 border border-neutral-200 rounded-xl px-2.5 py-2 bg-neutral-50 hover:bg-neutral-105 transition cursor-pointer outline-none"
                          >
                            {SACHET_UNPRINTED_OPTIONS.map(opt => (
                              <option key={opt.id} value={opt.id}>{opt.label}</option>
                            ))}
                          </select>
                        </div>

                        {/* Packs Stepper */}
                        <div>
                          <label className="block text-[9px] font-bold uppercase tracking-wider text-neutral-400 mb-1 font-mono">Packs Quantity (1 Pack = {unprintedOpt.pcs} pcs)</label>
                          <div className="flex items-center justify-between border border-neutral-200 p-1 rounded-xl bg-neutral-50">
                            <button
                              type="button"
                              onClick={() => setSachetUnprintedPacks(prev => Math.max(1, prev - 1))}
                              className="w-7 h-7 rounded-lg bg-white border border-neutral-200 hover:bg-neutral-100 active:scale-95 text-neutral-700 font-extrabold flex items-center justify-center transition"
                            >
                              -
                            </button>
                            <span className="text-xs font-bold text-neutral-800">{sachetUnprintedPacks} Pack{sachetUnprintedPacks > 1 ? 's' : ''}</span>
                            <button
                              type="button"
                              onClick={() => setSachetUnprintedPacks(prev => Math.min(50, prev + 1))}
                              className="w-7 h-7 rounded-lg bg-white border border-neutral-200 hover:bg-neutral-100 active:scale-95 text-neutral-700 font-extrabold flex items-center justify-center transition"
                            >
                              +
                            </button>
                          </div>
                        </div>
                      </div>

                      {/* Visual Image Gallery with Clicks */}
                      <div className="space-y-2">
                        <div 
                          onClick={() => setEnlargedImage(SACHET_MOCKUPS[sachetUnprintedImgIdx])}
                          className="w-full aspect-[16/10] border border-neutral-200/80 rounded-2xl overflow-hidden shadow-inner relative group bg-neutral-50 flex items-center justify-center cursor-zoom-in"
                        >
                          <img src={SACHET_MOCKUPS[sachetUnprintedImgIdx]} alt="Ready Stock Sachet" className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-103" />
                          <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                            <span className="bg-white/95 text-neutral-800 text-[10px] font-bold px-2 py-1 rounded-lg border border-neutral-200/70 shadow-md">Click to Zoom</span>
                          </div>
                        </div>
                        <div className="flex gap-1 justify-center">
                          {SACHET_MOCKUPS.map((img, idx) => (
                            <button
                              key={idx}
                              type="button"
                              onClick={() => setSachetUnprintedImgIdx(idx)}
                              className={`w-7 h-7 rounded-md border overflow-hidden transition-all ${sachetUnprintedImgIdx === idx ? 'border-emerald-600 ring-2 ring-emerald-600/10' : 'border-neutral-200 opacity-60 hover:opacity-100'}`}
                            >
                              <img src={img} alt="" className="w-full h-full object-cover" />
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* Primary Price */}
                      <div className="border-t border-b border-neutral-100 py-4 font-sans">
                        <div className="flex items-baseline gap-0.5">
                          <span className="text-4xl font-extrabold text-neutral-900 tracking-tight font-['Outfit']">
                            ${unprintedUnit.toFixed(3)}
                          </span>
                          <span className="text-xs text-neutral-450 font-bold">/ sachet</span>
                        </div>
                        <div className="text-[10.5px] text-neutral-500 font-bold mt-1.5 flex items-center gap-1 leading-none">
                          <Zap className="w-3.5 h-3.5 text-emerald-500 fill-emerald-100" />
                          <span>
                            Total: <span className="text-neutral-900">${unprintedTotalCost.toFixed(2)} USD</span> for {unprintedTotalPcs} pcs
                          </span>
                        </div>
                      </div>

                      {/* Sizing Details */}
                      <div className="bg-neutral-50 border border-neutral-200/80 rounded-2xl p-2.5 text-center font-sans">
                        <span className="text-[9px] text-neutral-450 uppercase font-mono tracking-wider font-bold block">Sizing details</span>
                        <div className="text-xs font-bold text-neutral-800 mt-0.5">
                          80 × 80 mm Sachet Size
                        </div>
                        <span className="text-[9px] text-neutral-500 bg-neutral-100 border border-neutral-200/50 px-2 py-0.5 rounded-full inline-block mt-1 font-bold">
                          Ready Made Stock Roll / Bags
                        </span>
                      </div>

                      {/* Features points */}
                      <div className="space-y-2.5 pt-1 font-sans">
                        <h4 className="text-[9px] font-extrabold uppercase tracking-widest text-neutral-450">Sachet features</h4>
                        <ul className="space-y-1.5 text-xs font-semibold text-neutral-605">
                          <li className="flex items-start gap-1.5">
                            <Check className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" strokeWidth={3} />
                            <span>High moisture/oxygen foil structure</span>
                          </li>
                          <li className="flex items-start gap-1.5">
                            <Check className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" strokeWidth={3} />
                            <span>10 premium color choices</span>
                          </li>
                          <li className="flex items-start gap-1.5">
                            <Check className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" strokeWidth={3} />
                            <span>Ideal for stickers or stamp logos</span>
                          </li>
                          <li className="flex items-start gap-1.5">
                            <Check className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" strokeWidth={3} />
                            <span>$0 Cylinder plate setup fee</span>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="pt-6 font-sans">
                      <button
                        onClick={() => handleSachetWhatsappCopy('Ready Stock Sachet', unprintedTotalPcs, 1, false, `Selected Color: ${unprintedOpt.label}`, unprintedTotalCost, unprintedUnit)}
                        className="w-full bg-neutral-900 hover:bg-neutral-850 text-white font-extrabold text-xs py-3 rounded-xl transition duration-150 active:scale-95 flex items-center justify-center gap-1.5 cursor-pointer shadow-sm shadow-black/5"
                      >
                        <Phone className="w-3 h-3 fill-white stroke-none" /> RFQ Ready Stock
                      </button>
                    </div>
                  </div>

                  {/* Card 2: Hot Stamping Logo */}
                  <div className="bg-white border border-neutral-200 rounded-3xl p-6 shadow-sm flex flex-col justify-between hover:-translate-y-1 hover:border-neutral-300 hover:shadow-md transition-all duration-300">
                    <div className="space-y-6">
                      <div>
                        <div className="flex justify-between items-start">
                          <span className="inline-block bg-amber-50 text-amber-700 border border-amber-100 px-2.5 py-0.5 rounded-md text-[9px] font-bold uppercase tracking-wider">
                            Hot Stamping
                          </span>
                          <span className="text-[10px] text-neutral-400 font-semibold font-mono">MOQ: 500pcs</span>
                        </div>
                        <h3 className="text-xl font-extrabold text-neutral-900 mt-2.5 font-['Outfit']">
                          Hot Stamping Logo
                        </h3>
                        <p className="text-xs text-neutral-450 mt-1 leading-relaxed font-sans font-medium">
                          Metallic hot foil stamping on premade sachets. Free setup plates, double-sided single-color.
                        </p>
                      </div>

                      {/* Interactive Controls */}
                      <div className="space-y-2">
                        {/* Qty Selector */}
                        <div>
                          <label className="block text-[9px] font-bold uppercase tracking-wider text-neutral-400 mb-1 font-mono">Quantity</label>
                          <div className="grid grid-cols-3 gap-1 bg-neutral-100 border border-neutral-200 p-0.5 rounded-xl text-center text-[10px] font-bold">
                            {[500, 1000, 2000].map(q => (
                              <button
                                key={q}
                                type="button"
                                onClick={() => setSachetHotStampingQty(q)}
                                className={`py-1.5 px-1 rounded-lg transition-all ${sachetHotStampingQty === q ? 'bg-white text-neutral-900 shadow-sm font-black' : 'text-neutral-500 hover:text-neutral-900'}`}
                              >
                                {q} pcs
                              </button>
                            ))}
                          </div>
                        </div>

                        {/* Designs Stepper & Round corners */}
                        <div className="grid grid-cols-2 gap-2">
                          <div>
                            <label className="block text-[9px] font-bold uppercase tracking-wider text-neutral-400 mb-1 font-mono">SKUs Count</label>
                            <div className="flex items-center justify-between border border-neutral-200 p-0.5 rounded-xl bg-neutral-50">
                              <button
                                type="button"
                                onClick={() => setSachetHotStampingDesigns(prev => Math.max(1, prev - 1))}
                                className="w-6 h-6 rounded-lg bg-white border border-neutral-200 hover:bg-neutral-105 active:scale-95 text-neutral-700 font-bold flex items-center justify-center transition"
                              >
                                -
                              </button>
                              <span className="text-[11px] font-bold text-neutral-800">{sachetHotStampingDesigns} SKU</span>
                              <button
                                type="button"
                                onClick={() => setSachetHotStampingDesigns(prev => Math.min(10, prev + 1))}
                                className="w-6 h-6 rounded-lg bg-white border border-neutral-200 hover:bg-neutral-105 active:scale-95 text-neutral-700 font-bold flex items-center justify-center transition"
                              >
                                +
                              </button>
                            </div>
                          </div>

                          <div className="flex flex-col justify-end">
                            <label className="flex items-center gap-1 text-[10px] font-bold text-neutral-600 select-none cursor-pointer h-7 border border-neutral-200 rounded-xl px-2 bg-neutral-50/50 hover:bg-neutral-50 active:scale-98 transition">
                              <input 
                                type="checkbox"
                                checked={sachetHotStampingRound}
                                onChange={(e) => setSachetHotStampingRound(e.target.checked)}
                                className="rounded text-amber-600 focus:ring-amber-500 w-3 h-3"
                              />
                              <span>Round corners</span>
                            </label>
                          </div>
                        </div>
                      </div>

                      {/* Visual Image Gallery */}
                      <div className="space-y-2">
                        <div 
                          onClick={() => setEnlargedImage(SACHET_MOCKUPS[sachetHotStampingImgIdx])}
                          className="w-full aspect-[16/10] border border-neutral-200/80 rounded-2xl overflow-hidden shadow-inner relative group bg-neutral-50 flex items-center justify-center cursor-zoom-in"
                        >
                          <img src={SACHET_MOCKUPS[sachetHotStampingImgIdx]} alt="Hot Stamping Sachet" className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-103" />
                          <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                            <span className="bg-white/95 text-neutral-800 text-[10px] font-bold px-2 py-1 rounded-lg border border-neutral-200/70 shadow-md">Click to Zoom</span>
                          </div>
                        </div>
                        <div className="flex gap-1 justify-center">
                          {SACHET_MOCKUPS.map((img, idx) => (
                            <button
                              key={idx}
                              type="button"
                              onClick={() => setSachetHotStampingImgIdx(idx)}
                              className={`w-7 h-7 rounded-md border overflow-hidden transition-all ${sachetHotStampingImgIdx === idx ? 'border-emerald-600 ring-2 ring-emerald-600/10' : 'border-neutral-200 opacity-60 hover:opacity-100'}`}
                            >
                              <img src={img} alt="" className="w-full h-full object-cover" />
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* Primary Price */}
                      <div className="border-t border-b border-neutral-100 py-4 font-sans">
                        <div className="flex items-baseline gap-0.5">
                          <span className="text-4xl font-extrabold text-neutral-900 tracking-tight font-['Outfit']">
                            ${hotStampingUnit.toFixed(3)}
                          </span>
                          <span className="text-xs text-neutral-450 font-bold">/ sachet</span>
                        </div>
                        <div className="text-[10.5px] text-neutral-500 font-bold mt-1.5 flex items-center gap-1 leading-none">
                          <Zap className="w-3.5 h-3.5 text-amber-500 fill-amber-100" />
                          <span>
                            Total: <span className="text-neutral-900">${hotStampingTotalCost.toFixed(2)} USD</span> for {sachetHotStampingQty * sachetHotStampingDesigns} pcs
                          </span>
                        </div>
                      </div>

                      {/* Sizing Details */}
                      <div className="bg-neutral-50 border border-neutral-200/80 rounded-2xl p-2.5 text-center font-sans">
                        <span className="text-[9px] text-neutral-450 uppercase font-mono tracking-wider font-bold block">Sizing details</span>
                        <div className="text-xs font-bold text-neutral-800 mt-0.5">
                          80 × 80 mm Sachet Size
                        </div>
                        <span className="text-[9px] text-amber-700 bg-amber-50 border border-amber-100/50 px-2 py-0.5 rounded-full inline-block mt-1 font-bold">
                          Free Plate Setup included
                        </span>
                      </div>

                      {/* Features points */}
                      <div className="space-y-2.5 pt-1 font-sans">
                        <h4 className="text-[9px] font-extrabold uppercase tracking-widest text-neutral-450">Stamping features</h4>
                        <ul className="space-y-1.5 text-xs font-semibold text-neutral-605">
                          <li className="flex items-start gap-1.5">
                            <Check className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" strokeWidth={3} />
                            <span>$0 Cylinder plates setup fee waiver</span>
                          </li>
                          <li className="flex items-start gap-1.5">
                            <Check className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" strokeWidth={3} />
                            <span>Elegant metallic foil branding</span>
                          </li>
                          <li className="flex items-start gap-1.5">
                            <Check className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" strokeWidth={3} />
                            <span>Double-sided single-color coverage</span>
                          </li>
                          <li className="flex items-start gap-1.5">
                            <Check className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" strokeWidth={3} />
                            <span>500 pcs ultra-low MOQ print run</span>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="pt-6 font-sans">
                      <button
                        onClick={() => handleSachetWhatsappCopy('Hot Stamping Sachet', sachetHotStampingQty, sachetHotStampingDesigns, sachetHotStampingRound, `Stamping Method: Single-color Hot Stamping`, hotStampingTotalCost, hotStampingUnit)}
                        className="w-full bg-neutral-900 hover:bg-neutral-850 text-white font-extrabold text-xs py-3 rounded-xl transition duration-150 active:scale-95 flex items-center justify-center gap-1.5 cursor-pointer shadow-sm shadow-black/5"
                      >
                        <Phone className="w-3 h-3 fill-white stroke-none" /> RFQ Hot Stamping
                      </button>
                    </div>
                  </div>

                  {/* Card 3: Digital Color Printing */}
                  <div className="bg-white border border-neutral-200 rounded-3xl p-6 shadow-sm flex flex-col justify-between hover:-translate-y-1 hover:border-neutral-300 hover:shadow-md transition-all duration-300">
                    <div className="space-y-6">
                      <div>
                        <div className="flex justify-between items-start">
                          <span className="inline-block bg-indigo-50 text-indigo-700 border border-indigo-100 px-2.5 py-0.5 rounded-md text-[9px] font-bold uppercase tracking-wider">
                            Digital Printing
                          </span>
                          <span className="text-[10px] text-neutral-400 font-semibold font-mono">MOQ: 1000pcs</span>
                        </div>
                        <h3 className="text-xl font-extrabold text-neutral-900 mt-2.5 font-['Outfit']">
                          Digital Full Color
                        </h3>
                        <p className="text-xs text-neutral-450 mt-1 leading-relaxed font-sans font-medium">
                          High-resolution edge-to-edge CMYK custom printing. Waived cylinder plates, complex graphics.
                        </p>
                      </div>

                      {/* Interactive Controls */}
                      <div className="space-y-2">
                        {/* Qty Selector */}
                        <div>
                          <label className="block text-[9px] font-bold uppercase tracking-wider text-neutral-400 mb-1 font-mono">Quantity</label>
                          <select 
                            value={sachetDigitalQty}
                            onChange={(e) => setSachetDigitalQty(Number(e.target.value))}
                            className="w-full text-xs font-semibold text-neutral-750 border border-neutral-200 rounded-xl px-2.5 py-2 bg-neutral-50 hover:bg-neutral-105 transition cursor-pointer outline-none"
                          >
                            <option value={1000}>1,000 pcs</option>
                            <option value={2000}>2,000 pcs</option>
                            <option value={3000}>3,000 pcs</option>
                            <option value={5000}>5,000 pcs</option>
                            <option value={10000}>10,000 pcs</option>
                          </select>
                        </div>

                        {/* Designs Stepper & Round corners */}
                        <div className="grid grid-cols-2 gap-2">
                          <div>
                            <label className="block text-[9px] font-bold uppercase tracking-wider text-neutral-400 mb-1 font-mono">SKUs Count</label>
                            <div className="flex items-center justify-between border border-neutral-200 p-0.5 rounded-xl bg-neutral-50">
                              <button
                                type="button"
                                onClick={() => setSachetDigitalDesigns(prev => Math.max(1, prev - 1))}
                                className="w-6 h-6 rounded-lg bg-white border border-neutral-200 hover:bg-neutral-105 active:scale-95 text-neutral-700 font-bold flex items-center justify-center transition"
                              >
                                -
                              </button>
                              <span className="text-[11px] font-bold text-neutral-800">{sachetDigitalDesigns} SKU</span>
                              <button
                                type="button"
                                onClick={() => setSachetDigitalDesigns(prev => Math.min(10, prev + 1))}
                                className="w-6 h-6 rounded-lg bg-white border border-neutral-200 hover:bg-neutral-105 active:scale-95 text-neutral-700 font-bold flex items-center justify-center transition"
                              >
                                +
                              </button>
                            </div>
                          </div>

                          <div className="flex flex-col justify-end">
                            <label className="flex items-center gap-1 text-[10px] font-bold text-neutral-600 select-none cursor-pointer h-7 border border-neutral-200 rounded-xl px-2 bg-neutral-50/50 hover:bg-neutral-50 active:scale-98 transition">
                              <input 
                                type="checkbox"
                                checked={sachetDigitalRound}
                                onChange={(e) => setSachetDigitalRound(e.target.checked)}
                                className="rounded text-indigo-600 focus:ring-indigo-500 w-3 h-3"
                              />
                              <span>Round corners</span>
                            </label>
                          </div>
                        </div>
                      </div>

                      {/* Visual Image Gallery */}
                      <div className="space-y-2">
                        <div 
                          onClick={() => setEnlargedImage(SACHET_MOCKUPS[sachetDigitalImgIdx])}
                          className="w-full aspect-[16/10] border border-neutral-200/80 rounded-2xl overflow-hidden shadow-inner relative group bg-neutral-50 flex items-center justify-center cursor-zoom-in"
                        >
                          <img src={SACHET_MOCKUPS[sachetDigitalImgIdx]} alt="Digital Print Sachet" className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-103" />
                          <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                            <span className="bg-white/95 text-neutral-800 text-[10px] font-bold px-2 py-1 rounded-lg border border-neutral-200/70 shadow-md">Click to Zoom</span>
                          </div>
                        </div>
                        <div className="flex gap-1 justify-center">
                          {SACHET_MOCKUPS.map((img, idx) => (
                            <button
                              key={idx}
                              type="button"
                              onClick={() => setSachetDigitalImgIdx(idx)}
                              className={`w-7 h-7 rounded-md border overflow-hidden transition-all ${sachetDigitalImgIdx === idx ? 'border-emerald-600 ring-2 ring-emerald-600/10' : 'border-neutral-200 opacity-60 hover:opacity-100'}`}
                            >
                              <img src={img} alt="" className="w-full h-full object-cover" />
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* Primary Price */}
                      <div className="border-t border-b border-neutral-100 py-4 font-sans">
                        <div className="flex items-baseline gap-0.5">
                          <span className="text-4xl font-extrabold text-neutral-900 tracking-tight font-['Outfit']">
                            ${digitalUnit.toFixed(3)}
                          </span>
                          <span className="text-xs text-neutral-450 font-bold">/ sachet</span>
                        </div>
                        <div className="text-[10.5px] text-neutral-500 font-bold mt-1.5 flex items-center gap-1 leading-none">
                          <Zap className="w-3.5 h-3.5 text-indigo-500 fill-indigo-100" />
                          <span>
                            Total: <span className="text-neutral-900">${digitalTotalCost.toFixed(2)} USD</span> for {sachetDigitalQty * sachetDigitalDesigns} pcs
                          </span>
                        </div>
                      </div>

                      {/* Sizing Details */}
                      <div className="bg-neutral-50 border border-neutral-200/80 rounded-2xl p-2.5 text-center font-sans">
                        <span className="text-[9px] text-neutral-450 uppercase font-mono tracking-wider font-bold block">Sizing details</span>
                        <div className="text-xs font-bold text-neutral-800 mt-0.5">
                          80 × 80 mm Sachet Size
                        </div>
                        <span className="text-[9px] text-indigo-700 bg-indigo-50 border border-indigo-100 px-2 py-0.5 rounded-full inline-block mt-1 font-bold">
                          Digital Setup $0 &bull; Proof: $147
                        </span>
                      </div>

                      {/* Features points */}
                      <div className="space-y-2.5 pt-1 font-sans">
                        <h4 className="text-[9px] font-extrabold uppercase tracking-widest text-neutral-450">Digital features</h4>
                        <ul className="space-y-1.5 text-xs font-semibold text-neutral-605">
                          <li className="flex items-start gap-1.5">
                            <Check className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" strokeWidth={3} />
                            <span>Vibrant edge-to-edge CMYK photorealism</span>
                          </li>
                          <li className="flex items-start gap-1.5">
                            <Check className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" strokeWidth={3} />
                            <span>Waived cylinder plate fees ($0 setup)</span>
                          </li>
                          <li className="flex items-start gap-1.5">
                            <Check className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" strokeWidth={3} />
                            <span>Support multiple graphic design SKUs</span>
                          </li>
                          <li className="flex items-start gap-1.5">
                            <Check className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" strokeWidth={3} />
                            <span>Low 1,000 pcs MOQ to limit inventory</span>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="pt-6 font-sans">
                      <button
                        onClick={() => handleSachetWhatsappCopy('Digital Printed Sachet', sachetDigitalQty, sachetDigitalDesigns, sachetDigitalRound, `Digital CMYK Edge-to-Edge Custom Printing`, digitalTotalCost, digitalUnit)}
                        className="w-full bg-neutral-900 hover:bg-neutral-850 text-white font-extrabold text-xs py-3 rounded-xl transition duration-150 active:scale-95 flex items-center justify-center gap-1.5 cursor-pointer shadow-sm shadow-black/5"
                      >
                        <Phone className="w-3 h-3 fill-white stroke-none" /> RFQ Digital Print
                      </button>
                    </div>
                  </div>

                  {/* Card 4: Traditional Gravure Printing */}
                  <div className="bg-white border rounded-3xl p-6 flex flex-col justify-between relative scale-[1.02] shadow-[0_12px_36px_rgba(0,0,0,0.06)] border-emerald-600/30 ring-4 ring-emerald-500/5">
                    <div className="absolute top-0 right-6 -translate-y-1/2 bg-emerald-600 text-white text-[9px] font-bold uppercase tracking-widest px-3 py-1 rounded-full shadow-sm">
                      Commercial Bulk Run
                    </div>

                    <div className="space-y-6">
                      <div>
                        <div className="flex justify-between items-start">
                          <span className="inline-block bg-emerald-50 text-emerald-700 border border-emerald-100 px-2.5 py-0.5 rounded-md text-[9px] font-bold uppercase tracking-wider">
                            Traditional Gravure
                          </span>
                          <span className="text-[10px] text-emerald-600 font-bold font-mono">MOQ: 50,000pcs</span>
                        </div>
                        <h3 className="text-xl font-extrabold text-neutral-900 mt-2.5 font-['Outfit']">
                          Traditional Gravure
                        </h3>
                        <p className="text-xs text-neutral-455 mt-1 leading-relaxed font-sans font-medium">
                          Highest margin rotogravure printing for large commercial scales. Exact Pantone spot matching.
                        </p>
                      </div>

                      {/* Interactive Controls */}
                      <div className="space-y-2">
                        {/* Qty Selector */}
                        <div>
                          <label className="block text-[9px] font-bold uppercase tracking-wider text-neutral-400 mb-1 font-mono">Quantity</label>
                          <select 
                            value={sachetTraditionalQty}
                            onChange={(e) => setSachetTraditionalQty(Number(e.target.value))}
                            className="w-full text-xs font-semibold text-neutral-750 border border-neutral-200 rounded-xl px-2.5 py-2 bg-neutral-50 hover:bg-neutral-105 transition cursor-pointer outline-none"
                          >
                            <option value={50000}>50,000 pcs</option>
                            <option value={100000}>100,000 pcs</option>
                            <option value={200000}>200,000 pcs</option>
                          </select>
                        </div>

                        {/* Designs & Colors Count */}
                        <div className="grid grid-cols-2 gap-2">
                          <div>
                            <label className="block text-[9px] font-bold uppercase tracking-wider text-neutral-400 mb-1 font-mono">SKUs Count</label>
                            <div className="flex items-center justify-between border border-neutral-200 p-0.5 rounded-xl bg-neutral-50">
                              <button
                                type="button"
                                onClick={() => setSachetTraditionalDesigns(prev => Math.max(1, prev - 1))}
                                className="w-6 h-6 rounded-lg bg-white border border-neutral-200 hover:bg-neutral-105 active:scale-95 text-neutral-700 font-bold flex items-center justify-center transition"
                              >
                                -
                              </button>
                              <span className="text-[11px] font-bold text-neutral-800">{sachetTraditionalDesigns} SKU</span>
                              <button
                                type="button"
                                onClick={() => setSachetTraditionalDesigns(prev => Math.min(10, prev + 1))}
                                className="w-6 h-6 rounded-lg bg-white border border-neutral-200 hover:bg-neutral-105 active:scale-95 text-neutral-700 font-bold flex items-center justify-center transition"
                              >
                                +
                              </button>
                            </div>
                          </div>

                          <div>
                            <label className="block text-[9px] font-bold uppercase tracking-wider text-neutral-400 mb-1 font-mono">Colors Count</label>
                            <div className="flex items-center justify-between border border-neutral-200 p-0.5 rounded-xl bg-neutral-50">
                              <button
                                type="button"
                                onClick={() => setSachetTraditionalColors(prev => Math.max(1, prev - 1))}
                                className="w-6 h-6 rounded-lg bg-white border border-neutral-200 hover:bg-neutral-105 active:scale-95 text-neutral-700 font-bold flex items-center justify-center transition"
                              >
                                -
                              </button>
                              <span className="text-[11px] font-bold text-neutral-800">{sachetTraditionalColors} Colors</span>
                              <button
                                type="button"
                                onClick={() => setSachetTraditionalColors(prev => Math.min(8, prev + 1))}
                                className="w-6 h-6 rounded-lg bg-white border border-neutral-200 hover:bg-neutral-105 active:scale-95 text-neutral-700 font-bold flex items-center justify-center transition"
                              >
                                +
                              </button>
                            </div>
                          </div>
                        </div>

                        {/* Round Corners */}
                        <div>
                          <label className="flex items-center justify-center gap-1 text-[10px] font-bold text-neutral-600 select-none cursor-pointer h-7 border border-neutral-200 rounded-xl px-2 bg-neutral-50/50 hover:bg-neutral-50 active:scale-98 transition">
                            <input 
                              type="checkbox"
                              checked={sachetTraditionalRound}
                              onChange={(e) => setSachetTraditionalRound(e.target.checked)}
                              className="rounded text-emerald-600 focus:ring-emerald-500 w-3 h-3"
                            />
                            <span>{t('seoPages.pages.pouchEcoGPTK.roundCornerProcessing', 'Include Round corner processing (Round corner +$0.0336)')}</span>
                          </label>
                        </div>
                      </div>

                      {/* Visual Image Gallery */}
                      <div className="space-y-2">
                        <div 
                          onClick={() => setEnlargedImage(SACHET_MOCKUPS[sachetTraditionalImgIdx])}
                          className="w-full aspect-[16/10] border border-neutral-200/80 rounded-2xl overflow-hidden shadow-inner relative group bg-neutral-50 flex items-center justify-center cursor-zoom-in"
                        >
                          <img src={SACHET_MOCKUPS[sachetTraditionalImgIdx]} alt="Traditional Gravure Sachet" className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-103" />
                          <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                            <span className="bg-white/95 text-neutral-800 text-[10px] font-bold px-2 py-1 rounded-lg border border-neutral-200/70 shadow-md">Click to Zoom</span>
                          </div>
                        </div>
                        <div className="flex gap-1 justify-center">
                          {SACHET_MOCKUPS.map((img, idx) => (
                            <button
                              key={idx}
                              type="button"
                              onClick={() => setSachetTraditionalImgIdx(idx)}
                              className={`w-7 h-7 rounded-md border overflow-hidden transition-all ${sachetTraditionalImgIdx === idx ? 'border-emerald-600 ring-2 ring-emerald-600/10' : 'border-neutral-200 opacity-60 hover:opacity-100'}`}
                            >
                              <img src={img} alt="" className="w-full h-full object-cover" />
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* Primary Price */}
                      <div className="border-t border-b border-neutral-100 py-4 font-sans">
                        <div className="flex items-baseline gap-0.5">
                          <span className="text-4xl font-extrabold text-neutral-900 tracking-tight font-['Outfit']">
                            ${traditionalUnit.toFixed(3)}
                          </span>
                          <span className="text-xs text-neutral-450 font-bold">/ sachet</span>
                        </div>
                        <div className="text-[10.5px] text-emerald-600 font-bold mt-1.5 flex items-center gap-1 leading-none">
                          <Zap className="w-3.5 h-3.5 text-emerald-500 fill-emerald-100" />
                          <span>
                            Total: <span className="text-neutral-900">${traditionalTotalCost.toFixed(2)} USD</span> for {sachetTraditionalQty * sachetTraditionalDesigns} pcs
                          </span>
                        </div>
                      </div>

                      {/* Sizing Details */}
                      <div className="bg-neutral-50 border border-neutral-200/80 rounded-2xl p-2.5 text-center font-sans">
                        <span className="text-[9px] text-neutral-450 uppercase font-mono tracking-wider font-bold block">Sizing details</span>
                        <div className="text-xs font-bold text-neutral-800 mt-0.5">
                          80 × 80 mm Sachet Size
                        </div>
                        <span className="text-[9px] text-emerald-700 bg-emerald-50 border border-emerald-100 px-2 py-0.5 rounded-full inline-block mt-1 font-bold">
                          Cylinder Fee: $126 / color (Spot match)
                        </span>
                      </div>

                      {/* Features points */}
                      <div className="space-y-2.5 pt-1 font-sans">
                        <h4 className="text-[9px] font-extrabold uppercase tracking-widest text-neutral-450">Traditional features</h4>
                        <ul className="space-y-1.5 text-xs font-semibold text-neutral-605">
                          <li className="flex items-start gap-1.5">
                            <Check className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" strokeWidth={3} />
                            <span>Lowest unit rate of $0.0378 per sachet</span>
                          </li>
                          <li className="flex items-start gap-1.5">
                            <Check className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" strokeWidth={3} />
                            <span>Engraved cylinders deliver exact Pantone colors</span>
                          </li>
                          <li className="flex items-start gap-1.5">
                            <Check className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" strokeWidth={3} />
                            <span>High-speed commercial roll/bag production</span>
                          </li>
                          <li className="flex items-start gap-1.5">
                            <Check className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" strokeWidth={3} />
                            <span>Lifetime plate cylinder storage for reorders</span>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="pt-6 font-sans">
                      <button
                        onClick={() => handleSachetWhatsappCopy('Traditional Gravure Sachet', sachetTraditionalQty, sachetTraditionalDesigns, sachetTraditionalRound, `Traditional Gravure Cylinder Plate Printing with ${sachetTraditionalColors} colors`, traditionalTotalCost, traditionalUnit)}
                        className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-xs py-3 rounded-xl transition duration-150 active:scale-95 flex items-center justify-center gap-1.5 cursor-pointer shadow-sm shadow-emerald-600/5"
                      >
                        <Phone className="w-3 h-3 fill-white stroke-none" /> RFQ Traditional Gravure
                      </button>
                    </div>
                  </div>

                </div>
              </div>
            </section>
          )
        })()}
        
        {/* B2B FEATURE MATRIX COMPARISON TABLE */}
        <section className="max-w-7xl mx-auto px-4 md:px-6 pt-16">
          <div className="border border-neutral-200 bg-white rounded-3xl p-6 shadow-sm overflow-hidden max-w-5xl mx-auto">
            <h3 className="text-lg font-extrabold text-neutral-950 uppercase border-b border-neutral-100 pb-4 flex items-center gap-2 font-['Outfit']">
              <CheckCircle className="w-5 h-5 text-emerald-600" /> Options Feature Comparison Matrix
            </h3>
            <div className="overflow-x-auto mt-4 font-sans">
              <table className="w-full text-left border-collapse min-w-[900px] text-xs font-semibold text-neutral-700">
                <thead>
                  <tr className="border-b border-neutral-200 bg-neutral-50">
                    <th className="p-3 font-bold uppercase text-neutral-400 w-[200px]">Parameter Specs</th>
                    <th className="p-3 font-bold uppercase text-neutral-900 border-l border-neutral-100">Stock Conventional</th>
                    <th className="p-3 font-bold uppercase text-neutral-900 border-l border-neutral-100">Custom Conventional</th>
                    <th className="p-3 font-bold uppercase text-neutral-900 border-l border-neutral-100">Custom printed/sized Oval Bottom</th>
                    <th className="p-3 font-bold uppercase text-neutral-900 border-l border-neutral-100">Custom printed/sized Flat Bottom</th>
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
                            <td className="p-3 border-l border-neutral-150 text-[11px] font-medium text-neutral-600">{row.customConven}</td>
                            <td className="p-3 border-l border-neutral-150 text-[11px] font-medium text-neutral-600">{row.customOval}</td>
                            <td className="p-3 border-l border-neutral-150 text-[11px] font-medium text-neutral-600">{row.customFlat}</td>
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

        {/* NEW SECTION */}
        <section className="max-w-3xl mx-auto px-4 md:px-6 pt-16">
          <div className="text-center space-y-2 mb-8">
            <h2 className="text-2xl md:text-3xl font-extrabold text-neutral-950 font-['Outfit']">
              {pageT.title}
            </h2>
            <div className="mt-6 rounded-2xl overflow-hidden shadow-lg border border-neutral-200">
              <img src="/imgs/knowledge/eco-pouch-packaging-pain-points.jpg" alt="Eco Pouch Packaging Solutions" className="w-full h-auto object-cover" />
            </div>
          </div>
          <div className="space-y-4">
            {pageT.problems.map((prob, idx) => {
              const IconComponent = iconMap[prob.icon] || Package;
              return (
                <div key={idx} className="bg-white border border-neutral-200 rounded-2xl p-5 flex items-start gap-4 shadow-sm hover:border-emerald-500 transition-colors">
                  <div className="p-3 bg-emerald-50 text-emerald-600 rounded-xl">
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-neutral-900 text-sm">{prob.q}</h3>
                    <p className="text-xs text-neutral-600 mt-1">{prob.a}</p>
                  </div>
                </div>
              );
            })}
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
                q: "1. Minimum Order Quantity (MOQ) Policy — What is the minimum order quantity? Can I order small sample runs?",
                a: "We offer highly flexible quantity tiers. For standard blank stock pouches with card additions or sticker labels (Stock Conventional), the MOQ starts at just 100 units. For fully customized printed stand-up pouches (Custom Oval) and premium flat-bottom bags (Custom Flat), high-speed digital printing allows us to support low MOQs starting at 500 units per design. Large-volume commercial rotogravure runs start at 10,000 units."
              },
              {
                q: "2. Free Pre-Production Sample Policy — Do you provide free samples? What is the request process?",
                a: "Yes! We provide free Physical Sample Packs for brands and procurement managers. These packs include various pouch types such as recyclable PE+EVOH pouches, compostable FSC kraft paper bags, and different capacity dimensions. You only need to provide your shipping address and cover the basic shipping cost. For fully customized branded samples printed with your custom artwork, please contact our team to set up a digital sample proof run."
              },
              {
                q: "3. OEM Custom Blueprints & Specification Support — Can pouches be manufactured to custom dimensions?",
                a: "Absolutely! Achieve Pack provides complete Adobe Illustrator (AI) vector dieline templates. You can download and apply your graphics directly. Whether you need customized millimeter-level width, height, gusset depth, or zipper height, we support fully bespoke dielines with zero extra tooling or plate setup fees."
              },
              {
                q: "4. Lead Time & Delivery Calculations — What is the standard production and shipping time?",
                a: "Our digital printing production is exceptionally fast: after confirming printing artwork proofs and receiving payment, stock custom label configurations ship within 3-5 days. Custom digital printed pouches are completed and packed in 10-12 business days. Ocean DDP (Duty Paid door-to-door) shipping typically takes 6-7 weeks, while Express DDP air freight takes only 8-10 days. We provide real-time customs clearance status tracking for all orders."
              },
              {
                q: "5. Verifiable Certifications Verification — Do products carry official BPI, TÜV, or GRS certificates?",
                a: "Yes, all of our eco-friendly packaging structures are supplied with official, verifiable test reports. Our recyclable Mono-PE structure is certified for Class 4 SPI plastic circularity streams. The compostable kraft paper series holds official USA BPI (ASTM D6400 registration #900385) and European TÜV Austria OK Compost (EN 13432) certificates for both industrial and home composting, guaranteeing chemical-free decomposition and smooth customs clearance."
              },
              {
                q: "6. Custom Wholesale Quote Checklist — What specifications are needed to request a formal quote?",
                a: "To calculate the most accurate volume pricing for your wholesale runs, please provide our packaging specialists with: (1) pouch dimensions and style (e.g., Stand-Up Pouch or Flat Bottom Bag); (2) material preference (Recyclable PE, Compostable Kraft Paper, or Conventional High-Barrier foil); (3) quantity per design and total SKU count; and (4) functional accessories (such as one-way degassing valves, hang holes, or resealable zippers)."
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
          {!hideNav && <SiteHeader />}
          <div className="flex-grow">
            {renderUnifiedPricingPage()}
          </div>
          {!hideNav && <Footer />}
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

      {/* Product Specifications & Details Slide-out Drawer */}
      <AnimatePresence>
        {expandedOption && (() => {
          let data = { unitPrice: 0, totalCost: 0, isBelowMoq: true, moq: 500, badge: '', desc: '', certLogo: '', leadTime: '', image: '', points: [] as string[] };
          if (expandedOption === 'stock-cards') {
            data = cardData;
          } else if (expandedOption === 'custom-conven') {
            data = convenData;
          } else if (expandedOption === 'custom-oval') {
            data = ovalData;
          } else if (expandedOption === 'custom-flat') {
            data = flatData;
          }

          // Calculate estimated shipment weight based on quantity
          const totalQty = (expandedOption === 'custom-oval' || expandedOption === 'custom-flat')
            ? qtyPerDesign
            : qtyPerDesign * numDesigns;
          // Approximate weight: 150g = 6g, 250g = 8g, 500g = 12g, 1kg = 18g
          const weightPerUnit = selectedSize.id === 'size-1' ? 6 : selectedSize.id === 'size-2' ? 8 : selectedSize.id === 'size-3' ? 12 : 18;
          const totalWeightKg = (weightPerUnit * totalQty) / 1000;

          // Define material stack layers based on option
          let materialLayers: { name: string; desc: string; thickness: string }[] = [];
          let otrValue = '';
          let wvtrValue = '';

          if (expandedOption === 'stock-cards' || expandedOption === 'custom-conven' || (expandedOption === 'custom-oval' && ovalEcoOption === 'conventional') || (expandedOption === 'custom-flat' && flatEcoOption === 'conventional')) {
            materialLayers = [
              { name: 'PET (Polyester Outer)', desc: 'Provides high tensile strength, print clarity, and thermal stability.', thickness: '12 μm' },
              { name: 'AL (Pure Aluminum Core)', desc: '100% complete barrier protecting fresh beans from light, oxygen, and moisture.', thickness: '7 μm' },
              { name: 'LLDPE (Inner Sealant)', desc: 'Food-safe liner ensuring strong seals and airtight closure.', thickness: '80-100 μm' }
            ];
            otrValue = '< 0.1 cc/m²/24h (Ultra High)';
            wvtrValue = '< 0.1 g/m²/24h (Ultra High)';
          } else if ((expandedOption === 'custom-oval' && ovalEcoOption === 'pe-evoh') || (expandedOption === 'custom-flat' && flatEcoOption === 'pe-evoh')) {
            materialLayers = [
              { name: 'MDO-PE (Outer Film)', desc: 'Recyclable high-durability print surface.', thickness: '25-30 μm' },
              { name: 'EVOH Gas Barrier Core', desc: 'Sustained gas lock replacing metal foil to preserve coffee aroma.', thickness: '4-5 μm' },
              { name: 'LLDPE (Inner Layer)', desc: 'Recyclable sealant film for high structural integrity.', thickness: '75-90 μm' }
            ];
            otrValue = '< 0.5 cc/m²/24h (High Barrier)';
            wvtrValue = '< 0.3 g/m²/24h (High Barrier)';
          } else {
            // Compostable
            materialLayers = [
              { name: 'Sustainably Sourced Kraft Paper', desc: 'Beautiful, natural organic presentation shell.', thickness: '50-60 gsm' },
              { name: 'Metalised PLA / NK Core Film', desc: 'Certified biodegradable aroma and moisture barrier layer.', thickness: '19 μm' },
              { name: 'PBAT / PLA Heat Sealant', desc: '100% home compostable food-safe sealant layer.', thickness: '60 μm' }
            ];
            otrValue = '< 1.0 cc/m²/24h (Good Barrier)';
            wvtrValue = '< 0.8 g/m²/24h (Good Barrier)';
          }

          return (
            <div className="fixed inset-0 z-50 flex justify-end overflow-hidden" role="dialog" aria-modal="true">
              {/* Semi-transparent Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setExpandedOption(null)}
                className="absolute inset-0 bg-neutral-900/60 backdrop-blur-sm transition-opacity cursor-zoom-out"
              />

              {/* Drawer panel */}
              <motion.div
                initial={{ x: '100%' }}
                animate={{ x: 0 }}
                exit={{ x: '100%' }}
                transition={{ type: 'spring', damping: 26, stiffness: 200 }}
                className="relative w-screen max-w-lg bg-white shadow-2xl flex flex-col h-full z-10 border-l border-neutral-200"
              >
                {/* Drawer Header */}
                <div className="px-6 py-5 border-b border-neutral-100 flex items-center justify-between bg-neutral-50/50">
                  <div className="space-y-1">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-emerald-50 border border-emerald-100 text-emerald-700">
                      {data.certLogo || 'Technical Specifications'}
                    </span>
                    <h2 className="text-lg font-black text-neutral-950 font-['Outfit']">
                      {data.badge.split(' (')[0]} Specs
                    </h2>
                  </div>
                  <button
                    onClick={() => setExpandedOption(null)}
                    className="w-8 h-8 rounded-full bg-neutral-100 hover:bg-neutral-200 text-neutral-600 flex items-center justify-center transition active:scale-95 cursor-pointer font-bold"
                  >
                    ✕
                  </button>
                </div>

                {/* Drawer Body (Scrollable) */}
                <div className="flex-1 overflow-y-auto p-6 space-y-8 font-sans">
                  
                  {/* Photo Preview */}
                  <div className="relative group overflow-hidden border border-neutral-200 bg-neutral-50 rounded-2xl aspect-[16/10] flex items-center justify-center shadow-inner">
                    <img src={data.image} alt={data.badge} className="w-full h-full object-cover" />
                  </div>

                  {/* Summary / Description */}
                  <div className="space-y-2">
                    <h4 className="text-[10px] font-extrabold uppercase tracking-widest text-neutral-400">Overview</h4>
                    <p className="text-xs font-semibold leading-relaxed text-neutral-500">
                      {data.desc}
                    </p>
                  </div>

                  {/* 1. Material Layer Architecture */}
                  <div className="space-y-3">
                    <h4 className="text-[10px] font-extrabold uppercase tracking-widest text-neutral-400">1. Material Layer Architecture</h4>
                    <div className="space-y-2.5">
                      {materialLayers.map((layer, idx) => (
                        <div key={idx} className="relative pl-4 border-l-2 border-emerald-500 py-0.5">
                          <div className="flex justify-between items-baseline">
                            <span className="text-xs font-extrabold text-neutral-900">{layer.name}</span>
                            <span className="text-[10px] font-black text-neutral-400 font-mono">{layer.thickness}</span>
                          </div>
                          <p className="text-[10px] text-neutral-450 mt-0.5 leading-normal">{layer.desc}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* 2. OTR / WVTR Gas & Moisture comparison */}
                  <div className="space-y-3">
                    <h4 className="text-[10px] font-extrabold uppercase tracking-widest text-neutral-400">2. Gas & Moisture Protection</h4>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-neutral-50 border border-neutral-200/60 p-3.5 rounded-2xl space-y-1 shadow-sm">
                        <span className="text-[9px] font-black uppercase text-neutral-400 tracking-wider font-mono">OTR (Oxygen Transmission)</span>
                        <div className="text-xs font-black text-neutral-800">{otrValue}</div>
                        <p className="text-[9px] text-neutral-450 leading-tight">Protects volatile roasted coffee oils from oxidation.</p>
                      </div>
                      <div className="bg-neutral-50 border border-neutral-200/60 p-3.5 rounded-2xl space-y-1 shadow-sm">
                        <span className="text-[9px] font-black uppercase text-neutral-400 tracking-wider font-mono">WVTR (Water Vapor)</span>
                        <div className="text-xs font-black text-neutral-800">{wvtrValue}</div>
                        <p className="text-[9px] text-neutral-450 leading-tight">Prevents atmospheric humidity staling the beans.</p>
                      </div>
                    </div>
                  </div>

                  {/* 3. Shipping & Weight Estimator */}
                  <div className="space-y-3">
                    <h4 className="text-[10px] font-extrabold uppercase tracking-widest text-neutral-400">3. Estimated Shipping Weight & Logistics</h4>
                    <div className="bg-gradient-to-r from-emerald-500/5 to-indigo-500/5 border border-neutral-200/50 p-4 rounded-2xl space-y-3 shadow-sm">
                      <div className="flex justify-between items-center text-xs font-bold text-neutral-800">
                        <span>Total Pouches:</span>
                        <span className="font-mono">{totalQty.toLocaleString()} pcs</span>
                      </div>
                      <div className="flex justify-between items-center text-xs font-bold text-neutral-800">
                        <span>Est. Weight (Net):</span>
                        <span className="text-indigo-650 font-black font-mono">~ {totalWeightKg.toFixed(1)} kg ({ (totalWeightKg * 2.2).toFixed(1) } lbs)</span>
                      </div>

                      <div className="border-t border-neutral-200/50 pt-3 space-y-2 text-[11px] font-semibold text-neutral-600">
                        <div className="flex items-start gap-2">
                          <div className="w-2 h-2 rounded-full bg-emerald-500 mt-1.5 shrink-0" />
                          <div>
                            <span className="text-neutral-900 font-extrabold block">Ocean Sea Freight DDP (recommended)</span>
                            Estimated 25-35 days transit. Delivers straight to your warehouse, tax-inclusive DDP. Saves over 85% compared to air cargo.
                          </div>
                        </div>
                        <div className="flex items-start gap-2">
                          <div className="w-2 h-2 rounded-full bg-neutral-400 mt-1.5 shrink-0" />
                          <div>
                            <span className="text-neutral-900 font-extrabold block">Express Air Cargo</span>
                            Estimated 7-10 days transit. Recommended for fast pilot batch sample verification and test launches.
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Custom Sizing Notice */}
                  {data.moq >= 500 && (
                    <div className="bg-emerald-50 border border-emerald-100 rounded-xl p-3.5 text-[11px] font-semibold text-emerald-800 leading-relaxed shadow-sm">
                      💡 <strong>Tailored Pouch Dimensions</strong>: For custom runs over 500 units, we fully support millimeters scale sizing adjustments (e.g. customized side-gusset widths) at zero plate charge.
                    </div>
                  )}

                </div>

                {/* Drawer Footer */}
                <div className="p-4 border-t border-neutral-100 bg-neutral-50 flex items-center justify-between text-xs font-bold font-sans">
                  <div>
                    <span className="text-neutral-400 block uppercase text-[9px] font-mono">Estimated Lead Time</span>
                    <span className="text-neutral-900 text-sm">{data.leadTime}</span>
                  </div>
                  <button
                    onClick={() => {
                      setExpandedOption(null);
                      handleWhatsappCopy();
                    }}
                    className="bg-neutral-950 hover:bg-neutral-900 text-white font-extrabold uppercase text-[10.5px] px-5 py-3 rounded-xl transition flex items-center gap-1.5 cursor-pointer shadow-md"
                  >
                    <Phone className="w-3.5 h-3.5 fill-white stroke-none" /> RFQ via WhatsApp
                  </button>
                </div>

              </motion.div>
            </div>
          );
        })()}
      </AnimatePresence>
    </div>
  )
}
