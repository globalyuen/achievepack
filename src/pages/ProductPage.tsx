import React, { useState, useMemo, useEffect, useTransition, useCallback } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { ArrowLeft, ShoppingCart, Star, Check, ChevronDown, ChevronUp, ZoomIn, MessageCircle, Package, Home } from 'lucide-react'
import { useStore } from '../store/StoreContext'
import { FEATURED_PRODUCTS, type EcoDigitalProduct, type StoreProduct, type ConventionalProduct, type EcoStockProduct, type BoxProduct, type EcoStockSizeVariant, type EcoStockSizeWithQuantities, type EcoStockQuantityOption, PRICING_DATA, POUCH_SIZES, QUANTITY_OPTIONS } from '../store/productData'
import { calculateEcoPrice, type EcoCalculatorSelections, getMaterialStructureInfo } from '../utils/ecoDigitalCalculator'
import { getProductImage, getSizeImage, getSurfaceImage, getAdditionalImage, type ShapeType, ClosureType, SurfaceType, EcoSizeType, AdditionalType } from '../utils/productImageMapper'
import { TESTIMONIALS } from '../data/testimonialsData'
import { getProductFAQs, generateFAQSchema, DEFAULT_FAQS, type ProductFAQ } from '../data/productFAQData'
import { getAISellingPoints, hasAISellingPoints, type AISellingPoint } from '../data/aiSellingPoints'

// SKU-based Dynamic Product Descriptions (Problem → Solution → Features logic)
// Organized by material type: pcr (PCR/Bio), mono (Mono Recyclable), compost (Biodegradable)
const SKU_DESCRIPTIONS: Record<string, Record<string, {
  problem: string;
  solution: string;
  features: string[];
  certifications: string;
}>> = {
  'snack': {
    'pcr': {
      problem: 'Conventional snack bags use virgin plastics and are hard to recycle, increasing your carbon footprint.',
      solution: 'This PCR/Bio-PE stand-up pouch uses 30% recycled or 50% plant-based materials—same performance, 30% lower carbon footprint.',
      features: ['30% post-consumer recycled or 50% bio-based PE', 'Recyclable in existing streams', 'Drop-in replacement for conventional', 'Clear/frosted window available'],
      certifications: 'Recyclable • 30% Lower Carbon'
    },
    'mono': {
      problem: 'Multi-layer snack bags can\'t be recycled—they end up in landfills even when consumers try to recycle.',
      solution: 'This mono-material recyclable pouch is made from single-material PE/PP—95% recyclable in curbside programs.',
      features: ['Single-material mono-PE or mono-PP', '95% recyclable curbside', 'OPRL "Recycle" ready', 'EU PPWR 2030 compliant'],
      certifications: '95% Recyclable • Mono-Material'
    },
    'compost': {
      problem: 'Plastic snack bags stay in landfills for decades, but you can\'t sacrifice crunch or shelf appeal.',
      solution: 'This compostable stand-up pouch breaks down in 180 days—turning packaging into soil nutrients.',
      features: ['90%+ breakdown in 180 days', 'Bag + zipper + ink all compostable', 'Zero microplastics', 'Clear/frosted window available'],
      certifications: 'EN 13432 / ASTM D6400 Compostable'
    }
  },
  'coffee': {
    'pcr': {
      problem: 'Coffee packaging needs high barrier but virgin plastics increase environmental impact.',
      solution: 'This PCR/Bio-PE coffee pouch with valve uses recycled or plant-based materials while maintaining freshness.',
      features: ['30% PCR or 50% bio-based PE', 'High-barrier blocks oxygen & moisture', 'One-way degassing valve', 'Recyclable after use'],
      certifications: 'Recyclable • 30% Lower Carbon'
    },
    'mono': {
      problem: 'Traditional coffee bags are multi-layer and can\'t be recycled—a problem for eco-conscious roasters.',
      solution: 'This mono-material recyclable coffee pouch delivers barrier performance in a 95% recyclable format.',
      features: ['Single-material mono-PE or mono-PP', 'Integrated degassing valve', '95% recyclable curbside', 'PPWR 2030 compliant'],
      certifications: '95% Recyclable • Mono-Material'
    },
    'compost': {
      problem: 'Coffee roasters want packaging that preserves flavor while telling a credible sustainability story.',
      solution: 'This compostable coffee pouch with valve breaks down completely—bag, valve, and ink all return to soil.',
      features: ['High-barrier compostable structure', 'Compostable degassing valve', 'Zero microplastics', 'Kraft or full-color print'],
      certifications: 'EN 13432 / ASTM D6400 Compostable'
    }
  },
  'tea': {
    'pcr': {
      problem: 'Tea packaging often uses virgin plastics that increase carbon footprint unnecessarily.',
      solution: 'This PCR/Bio-PE flat-bottom bag uses recycled or plant-based materials for premium tea presentation.',
      features: ['30% PCR or 50% bio-based PE', 'Flat bottom stands on shelf', 'Multiple printable faces', 'Recyclable after use'],
      certifications: 'Recyclable • 30% Lower Carbon'
    },
    'mono': {
      problem: 'Premium tea bags are typically multi-layer and end up in landfills despite recycling efforts.',
      solution: 'This mono-material recyclable tea bag stands beautifully on shelf and recycles easily.',
      features: ['Single-material construction', 'Flat bottom 3D shape', '95% recyclable curbside', 'PPWR 2030 compliant'],
      certifications: '95% Recyclable • Mono-Material'
    },
    'compost': {
      problem: 'Premium tea deserves stable aroma and ritual feel—not another layer of plastic burden.',
      solution: 'This compostable flat-bottom bag breaks down naturally while keeping tea fresh.',
      features: ['Compostable film + paper', 'Flat bottom shape', 'Zipper keeps dry & aromatic', 'Zero microplastics'],
      certifications: 'Industrial/Home Compostable'
    }
  },
  'powder': {
    'pcr': {
      problem: 'Powder packaging needs high barrier but virgin plastic multi-layers harm the environment.',
      solution: 'This PCR/Bio-PE powder pouch reduces carbon footprint by 30% while protecting formula integrity.',
      features: ['30% PCR or 50% bio-based PE', 'High-barrier protection', 'Prevents clumping', 'Recyclable after use'],
      certifications: 'Recyclable • 30% Lower Carbon'
    },
    'mono': {
      problem: 'Supplement and powder pouches are typically unrecyclable multi-layer constructions.',
      solution: 'This mono-material recyclable powder pouch delivers protection in a 95% recyclable format.',
      features: ['Single-material mono-PE/PP', 'Moisture & oxygen barrier', '95% recyclable curbside', 'PPWR 2030 compliant'],
      certifications: '95% Recyclable • Mono-Material'
    },
    'compost': {
      problem: 'Powder packaging often uses heavy multi-layer plastics that can\'t be recycled.',
      solution: 'This compostable powder pouch balances formula protection with complete biodegradability.',
      features: ['High-barrier compostable film', 'Moisture & oxygen protection', '90%+ breakdown in 180 days', 'Zero microplastics'],
      certifications: '90%+ Breakdown in 180 Days'
    }
  },
  'liquid': {
    'pcr': {
      problem: 'Liquid pouches traditionally use virgin plastics with high environmental impact.',
      solution: 'This PCR/Bio-PE spouted pouch uses recycled or plant-based materials for liquid products.',
      features: ['30% PCR or 50% bio-based PE', 'Integrated spout design', 'Lighter than bottles', 'Recyclable after use'],
      certifications: 'Recyclable • 30% Lower Carbon'
    },
    'mono': {
      problem: 'Liquid pouches are complex multi-layer structures that can\'t enter recycling streams.',
      solution: 'This mono-material recyclable spouted pouch brings recyclability to liquid packaging.',
      features: ['Single-material construction', 'Stable fill, pour, seal', '95% recyclable', 'PPWR 2030 compliant'],
      certifications: '95% Recyclable • Mono-Material'
    },
    'compost': {
      problem: 'Liquid packaging traditionally relies on plastic bottles or non-recyclable pouches.',
      solution: 'This compostable spouted pouch brings truly compostable flexible packaging to liquids.',
      features: ['Compostable spout design', 'Stable fill, pour, seal', 'Much lighter than bottles', 'Zero microplastics'],
      certifications: 'Industrial/Home Compostable'
    }
  },
  'sample': {
    'pcr': {
      problem: 'Sample packs use virgin plastics and are often too small to recycle properly.',
      solution: 'This PCR/Bio-PE sample sachet reduces carbon footprint even in small-format packaging.',
      features: ['30% PCR or 50% bio-based PE', 'Compact for mailing', 'Good barrier properties', 'Recyclable after use'],
      certifications: 'Recyclable • 30% Lower Carbon'
    },
    'mono': {
      problem: 'Sample packs are the biggest plastic waste source and can\'t be recycled.',
      solution: 'This mono-material recyclable sachet makes even trial packaging recyclable.',
      features: ['Single-material mono-PE/PP', 'Lightweight & compact', '95% recyclable', 'PPWR compliant'],
      certifications: '95% Recyclable • Mono-Material'
    },
    'compost': {
      problem: 'Sample packs and single-serves are often the biggest plastic waste source.',
      solution: 'This compostable sachet is sustainable from first customer touch—compostable with food waste.',
      features: ['Clear/translucent compostable film', 'Excellent barrier properties', 'Lightweight for mailing', 'Compostable with food waste'],
      certifications: 'EN 13432 / ASTM D6400 Standard'
    }
  }
};

// Material-specific descriptions
const MATERIAL_DESCRIPTIONS: Record<string, { eco: string; benefits: string[]; idealFor: string }> = {
  'PCR or Bio Plastic': {
    eco: 'Made with 30% post-consumer recycled content or 50% sugarcane-based bio-PE, reducing carbon footprint by up to 30%.',
    benefits: ['Recyclable in existing streams', 'Drop-in replacement for conventional', 'Reduced oil dependency'],
    idealFor: 'Sustainability-focused CPG brands, coffee roasters, specialty food producers'
  },
  'Mono Recyclable Plastic': {
    eco: 'Single-material construction (mono-PE or mono-PP) designed for maximum recyclability in curbside recycling.',
    benefits: ['95% recyclable', 'Easy sortation single-material', 'OPRL "Recycle" ready'],
    idealFor: 'Brands targeting EU/UK markets, PPWR compliance needs'
  },
  'Biodegradable and Compostable': {
    eco: 'Certified compostable materials breaking down within 180 days in industrial composting, returning nutrients to soil.',
    benefits: ['Zero microplastics', 'OK Compost Industrial certified', 'BPI/EN 13432 compliant'],
    idealFor: 'Organic foods, eco-conscious brands, farmers markets, health food stores'
  }
};

// Size capacity descriptions
const SIZE_CAPACITIES: Record<string, { capacity: string; useCase: string }> = {
  'XXXS': { capacity: '10-30g / 0.35-1oz', useCase: 'Samples, single-serve' },
  'XXS': { capacity: '30-50g / 1-1.75oz', useCase: 'Trial sizes, premium samples' },
  'XS': { capacity: '50-100g / 1.75-3.5oz', useCase: 'Specialty foods, premium snacks' },
  'S': { capacity: '100-200g / 3.5-7oz', useCase: 'Standard retail coffee, tea, snacks' },
  'M': { capacity: '200-350g / 7-12oz', useCase: 'Family-size snacks, coffee bags' },
  'L': { capacity: '350-500g / 12-17.5oz', useCase: 'Large retail, bulk snacks' },
  'XL': { capacity: '500-1000g / 17.5-35oz', useCase: 'Bulk packaging, value packs' },
  'XXL': { capacity: '1000-2000g / 35-70oz', useCase: 'Commercial, wholesale' }
};

// Closure descriptions
const CLOSURE_DESCRIPTIONS: Record<string, string> = {
  'No': 'Heat-sealed for single-use',
  'Regular Zipper': 'Resealable press-to-close zipper',
  'One-Sided Zipper': 'Front-opening for easy pour',
  'Child Resistant Zipper': 'Child-safety certified zipper',
  'Slider': 'Premium smooth-glide slider',
  'Tin Tie': 'Classic wire tie for coffee/tea',
  'Spout': 'Pour spout for liquids',
  'Adhesive Tape': 'Peel-and-seal adhesive'
};

// Generate dynamic description based on selections
const generateDynamicDescription = (options: {
  shape?: string; material?: string; size?: string; closure?: string;
  surface?: string; barrier?: string; stiffness?: string; productName?: string;
}): { skuType: string; materialType: string; problem: string; solution: string; features: string[];
  materialInfo: string; sizeInfo: string; closureInfo: string; certifications: string; idealFor: string;
} => {
  const { shape, material, size, closure, productName } = options;
  let skuType = 'snack';
  const nameLC = (productName || '').toLowerCase();
  const shapeLC = (shape || '').toLowerCase();
  
  // Detect SKU type
  if (nameLC.includes('coffee') || shapeLC.includes('coffee')) skuType = 'coffee';
  else if (nameLC.includes('tea') || shapeLC.includes('tea')) skuType = 'tea';
  else if (nameLC.includes('powder') || nameLC.includes('supplement') || nameLC.includes('protein')) skuType = 'powder';
  else if (nameLC.includes('liquid') || nameLC.includes('spout') || closure === 'Spout') skuType = 'liquid';
  else if (nameLC.includes('sample') || size === 'XXXS' || size === 'XXS') skuType = 'sample';
  else if (shapeLC.includes('flat') || shapeLC.includes('box bottom')) skuType = 'tea';
  
  // Map material to type key
  let materialType = 'mono'; // default
  if (material === 'PCR or Bio Plastic') materialType = 'pcr';
  else if (material === 'Mono Recyclable Plastic') materialType = 'mono';
  else if (material === 'Biodegradable and Compostable') materialType = 'compost';
  
  const skuDesc = SKU_DESCRIPTIONS[skuType]?.[materialType] || SKU_DESCRIPTIONS['snack']['mono'];
  const matDesc = MATERIAL_DESCRIPTIONS[material || 'Mono Recyclable Plastic'];
  const sizeDesc = SIZE_CAPACITIES[size || 'M'];
  const closureDesc = CLOSURE_DESCRIPTIONS[closure || 'No'];
  
  return {
    skuType, materialType, problem: skuDesc.problem, solution: skuDesc.solution,
    features: skuDesc.features,
    materialInfo: matDesc.eco, sizeInfo: `${sizeDesc.capacity} — ${sizeDesc.useCase}`,
    closureInfo: closureDesc, certifications: skuDesc.certifications, idealFor: matDesc.idealFor
  };
};

const ProductPage: React.FC = () => {
  const { productId } = useParams<{ productId: string }>()
  const { addToCart, cartCount, setIsCartOpen } = useStore()
  const navigate = useNavigate()
  const [isPending, startTransition] = useTransition()
  
  // Optimized navigation handler for better INP
  const handleNavigation = useCallback((to: string) => (e: React.MouseEvent) => {
    e.preventDefault()
    startTransition(() => {
      navigate(to)
    })
  }, [navigate])
  
  const product = FEATURED_PRODUCTS.find(p => p.id === productId)
  const isEcoDigital = product?.category === 'eco-digital'
  const isConventionalDigital = product?.category === 'conventional-digital'
  const isEcoStock = product?.category === 'eco-stock'
  const isBoxes = product?.category === 'boxes'
  const ecoProduct = isEcoDigital ? (product as EcoDigitalProduct) : null
  const conventionalProduct = isConventionalDigital ? (product as ConventionalProduct) : null
  const ecoStockProduct = (isEcoStock || isBoxes) ? (product as EcoStockProduct | BoxProduct) : null
  
  // Conventional Digital product options
  const [selectedConvSize, setSelectedConvSize] = useState('130x180')
  const [selectedConvQuantity, setSelectedConvQuantity] = useState(100)
  const [selectedMainImage, setSelectedMainImage] = useState(0)
  
  // Eco Stock product options
  const [selectedEcoStockQuantity, setSelectedEcoStockQuantity] = useState(500)
  const [selectedSizeVariant, setSelectedSizeVariant] = useState<string | null>(null)
  // Batch count for sizeVariants products (Header Bag) - each batch = 100pcs
  const [sizeVariantBatchCount, setSizeVariantBatchCount] = useState(1)
  // For multi-quantity size products (Mailer Bag)
  const [selectedSizeWithQty, setSelectedSizeWithQty] = useState<string | null>(null)
  const [selectedQtyOption, setSelectedQtyOption] = useState<number | null>(null)
  
  // Eco Digital product options
  const [selectedMaterial, setSelectedMaterial] = useState('Mono Recyclable Plastic')
  const [selectedSize, setSelectedSize] = useState('M')
  const [selectedQuantity, setSelectedQuantity] = useState('1,000 (Digital print)')
  const [selectedDesignCount, setSelectedDesignCount] = useState(1)
  const [selectedBarrier, setSelectedBarrier] = useState('mid clear mid barrier (Optional Window)')
  const [selectedStiffness, setSelectedStiffness] = useState('Without Paper Lining (Softer)')
  const [selectedClosure, setSelectedClosure] = useState<ClosureType>('No')
  const [selectedSurface, setSelectedSurface] = useState<SurfaceType>('Matt')
  const [selectedLaserScoring, setSelectedLaserScoring] = useState<'Yes' | 'No'>('No')
  const [selectedValve, setSelectedValve] = useState<'Yes' | 'No'>('No')
  const [selectedAdhesiveTape, setSelectedAdhesiveTape] = useState<'Yes' | 'No'>('No')
  const [selectedHangHole, setSelectedHangHole] = useState<'Yes' | 'No'>('No')
  const [selectedSpout, setSelectedSpout] = useState<'Yes' | 'No'>('No')
  const [selectedShipping, setSelectedShipping] = useState('Air Freight')
  
  // Tab state for Package Visualization / Specifications
  const [activeTab, setActiveTab] = useState<'visualization' | 'specifications'>('visualization')
  
  // Tab state for Specifications / Insights
  const [specTab, setSpecTab] = useState<'specs' | 'insights'>('specs')
  
  // Image enlargement modal state with gallery navigation
  const [enlargedImage, setEnlargedImage] = useState<{ src: string; alt: string; index?: number; images?: string[] } | null>(null)
  
  // Navigate to previous/next image in gallery
  const navigateImage = (direction: 'prev' | 'next') => {
    if (!enlargedImage?.images || enlargedImage.index === undefined) return
    const { images, index, alt } = enlargedImage
    let newIndex = direction === 'prev' ? index - 1 : index + 1
    if (newIndex < 0) newIndex = images.length - 1
    if (newIndex >= images.length) newIndex = 0
    setEnlargedImage({ src: images[newIndex], alt, index: newIndex, images })
  }
  
  // Video modal state for eco-stock products
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false)
  
  // Collapsible section states
  const [isLeftCollapsed, setIsLeftCollapsed] = useState(true)
  const [isRightCollapsed, setIsRightCollapsed] = useState(true)
  const [isTestimonialsCollapsed, setIsTestimonialsCollapsed] = useState(true)
  
  // Mobile bottom bar state
  const [mobileActivePanel, setMobileActivePanel] = useState<'none' | 'preview' | 'testimonials' | 'price'>('none')
  
  // Initialize from product defaults
  useEffect(() => {
    if (ecoProduct?.ecoConfig) {
      setSelectedMaterial(ecoProduct.ecoConfig.defaultMaterial)
      setSelectedSize(ecoProduct.ecoConfig.defaultSize)
      setSelectedQuantity(ecoProduct.ecoConfig.defaultQuantity)
      setSelectedDesignCount(ecoProduct.ecoConfig.defaultDesignCount)
      setSelectedBarrier(ecoProduct.ecoConfig.defaultBarrier)
      setSelectedStiffness(ecoProduct.ecoConfig.defaultStiffness)
      setSelectedClosure(ecoProduct.ecoConfig.defaultZipper as ClosureType)
      setSelectedShipping(ecoProduct.ecoConfig.defaultShippingMethod)
    }
  }, [ecoProduct])

  // Get size options based on product shape
  const sizeOptions = useMemo(() => {
    if (!isEcoDigital || !ecoProduct) return []
    
    const shape = ecoProduct.shape
    const is3SideOrCenterSeal = shape === '3 Side Seal Pouch' || shape === 'Center Seal Pouch'
    
    if (is3SideOrCenterSeal) {
      // 3 Side Seal & Center Seal sizes (no gusset)
      return [
        { value: 'XXXS', label: 'XXXS (3.6" × 6.3" / 90 × 110 mm)' },
        { value: 'XXS', label: 'XXS (4.3" × 6.3" / 110 × 160 mm)' },
        { value: 'XS', label: 'XS (5.1" × 7.1" / 130 × 180 mm)' },
        { value: 'S', label: 'S (5.9" × 7.9" / 150 × 200 mm)' },
        { value: 'L', label: 'L (7.1" × 9.8" / 180 × 250 mm)' },
        { value: 'XL', label: 'XL (7.9" × 11.8" / 200 × 300 mm)' },
        { value: 'XXL', label: 'XXL (9.8" × 13.8" / 250 × 350 mm)' },
      ]
    } else {
      // Other shapes (with gusset)
      return [
        { value: 'XXXS', label: 'XXXS (3.6" × 6.3" + 2.4" / 90 × 110 + 60 mm)' },
        { value: 'XXS', label: 'XXS (4.3" × 6.3" + 2.4" / 110 × 160 + 60 mm)' },
        { value: 'XS', label: 'XS (5.1" × 7.1" + 3.1" / 130 × 180 + 80 mm)' },
        { value: 'S', label: 'S (5.9" × 7.9" + 3.1" / 150 × 200 + 80 mm)' },
        { value: 'L', label: 'L (7.1" × 9.8" + 3.1" / 180 × 250 + 80 mm)' },
        { value: 'XL', label: 'XL (7.9" × 11.8" + 3.9" / 200 × 300 + 100 mm)' },
        { value: 'XXL', label: 'XXL (9.8" × 13.8" + 3.9" / 250 × 350 + 100 mm)' },
      ]
    }
  }, [isEcoDigital, ecoProduct])

  // Get size label text based on product shape
  const getSizeLabel = useMemo(() => {
    if (!isEcoDigital || !ecoProduct) return 'Size'
    
    const shape = ecoProduct.shape
    const is3SideOrCenterSeal = shape === '3 Side Seal Pouch' || shape === 'Center Seal Pouch'
    
    if (is3SideOrCenterSeal) {
      return 'Size (width × length)'
    } else {
      return 'Size (width × length + unfolded gusset)'
    }
  }, [isEcoDigital, ecoProduct])

  // Calculate price for Eco Digital products
  const calculationResult = useMemo(() => {
    if (!isEcoDigital || !ecoProduct) return null
    
    try {
      const selections: EcoCalculatorSelections = {
        shape: ecoProduct.shape as any,
        material: selectedMaterial as any,
        size: selectedSize as any,
        quantityOption: selectedQuantity,
        designCount: selectedDesignCount,
        barrier: selectedBarrier,
        stiffness: selectedStiffness,
        zipper: selectedClosure,
        laserScoring: selectedLaserScoring,
        valve: selectedValve,
        additions: [],
        surfaceTreatments: selectedSurface === 'Glossy' ? [] : ['Matt'],
        shippingMethod: selectedShipping as any,
      }
      
      return calculateEcoPrice(selections)
    } catch (error) {
      console.error('Price calculation error:', error)
      return null
    }
  }, [isEcoDigital, ecoProduct, selectedMaterial, selectedSize, selectedQuantity, selectedDesignCount, selectedBarrier, selectedStiffness, selectedClosure, selectedSurface, selectedLaserScoring, selectedValve, selectedShipping])

  const totalPrice = calculationResult?.price.totalInvestment || product?.basePrice || 0
  const unitPrice = calculationResult?.price.currentUnitPrice || 0
  
  // Conventional Digital price calculation
  const conventionalPrice = useMemo(() => {
    if (!isConventionalDigital || !conventionalProduct) return { total: 0, unit: 0 }
    
    const shapeKey = conventionalProduct.shape
    const priceData = PRICING_DATA[shapeKey]
    if (!priceData || !priceData[selectedConvSize]) return { total: conventionalProduct.basePrice, unit: conventionalProduct.basePrice / 100 }
    
    const basePrice = priceData[selectedConvSize][selectedConvQuantity] || conventionalProduct.basePrice
    // Add shipping cost ($40 flat rate already included in display)
    const totalWithShipping = basePrice + 40
    return {
      total: totalWithShipping,
      unit: totalWithShipping / selectedConvQuantity
    }
  }, [isConventionalDigital, conventionalProduct, selectedConvSize, selectedConvQuantity])
  
  // Get available sizes for conventional product
  const conventionalSizes = useMemo(() => {
    if (!isConventionalDigital || !conventionalProduct) return []
    const shapeKey = conventionalProduct.shape
    const priceData = PRICING_DATA[shapeKey]
    if (!priceData) return []
    return Object.keys(priceData).map(sizeId => {
      const sizeInfo = POUCH_SIZES.find(s => s.id === sizeId)
      return sizeInfo || { id: sizeId, label: sizeId, dimensions: sizeId, imperial: '' }
    })
  }, [isConventionalDigital, conventionalProduct])
  
  // Product image based on selections - Always show pouch shape for Eco Digital
  const productImage = useMemo(() => {
    if (isEcoDigital && ecoProduct) {
      // Always show pouch shape image, not material type
      return getProductImage({
        shape: ecoProduct.shape as ShapeType,
        closure: selectedClosure,
        surface: selectedSurface,
        material: undefined, // Don't use material for main image
        size: selectedSize as EcoSizeType, // Include size for Stand Up Pouch
      })
    }
    return product?.images[0] || ''
  }, [isEcoDigital, ecoProduct, selectedClosure, selectedSurface, selectedSize, product])

  if (!product) {
    // Random full-page background for Product not found page
    const HERO_IMAGES = [
      '/imgs/banner/a_achievepack_hero_3d_depth_5416790.webp',
      '/imgs/banner/a_achievepack_hero_eco_nature_7180632.webp',
      '/imgs/banner/a_achievepack_hero_flatlay_5941661.webp',
      '/imgs/banner/a_achievepack_hero_gradient_eco_9331347.webp',
      '/imgs/banner/a_achievepack_hero_shot_1_white_background_2665361.webp',
    ]
    const randomHero = HERO_IMAGES[Math.floor(Math.random() * HERO_IMAGES.length)]
    
    return (
      <>
        <Helmet>
          <title>Product Not Found | Achieve Pack</title>
          <meta name="robots" content="noindex, nofollow" />
        </Helmet>
        <div className="min-h-screen relative">
          {/* Full Page Background Image */}
          <div className="absolute inset-0">
            <img 
              src={randomHero} 
              alt="Achieve Pack Eco Packaging" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40"></div>
          </div>
          
          {/* Content Card - Centered */}
          <div className="relative z-10 min-h-screen flex items-center justify-center px-4 py-12">
            <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl p-8 md:p-12 text-center max-w-lg w-full">
              <div className="w-20 h-20 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Package className="h-10 w-10 text-amber-600" />
              </div>
              <h1 className="text-3xl font-bold text-neutral-900 mb-4">Product Not Found</h1>
              <p className="text-lg text-neutral-600 mb-8">
                Sorry, this product doesn't exist or may have been moved.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Link 
                  to="/store" 
                  className="inline-flex items-center justify-center gap-2 bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-700 transition"
                >
                  <ShoppingCart className="h-5 w-5" /> Browse Products
                </Link>
                <Link 
                  to="/" 
                  className="inline-flex items-center justify-center gap-2 bg-neutral-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-neutral-700 transition"
                >
                  <Home className="h-5 w-5" /> Back Home
                </Link>
              </div>
              
              {/* Popular Links */}
              <div className="border-t border-neutral-200 pt-6">
                <p className="text-sm text-neutral-500 mb-4">Popular Categories:</p>
                <div className="flex flex-wrap gap-3 justify-center">
                  <Link to="/materials/compostable" className="text-sm text-primary-600 hover:underline">
                    Compostable Bags
                  </Link>
                  <span className="text-neutral-300">•</span>
                  <Link to="/industry/coffee-tea" className="text-sm text-primary-600 hover:underline">
                    Coffee Packaging
                  </Link>
                  <span className="text-neutral-300">•</span>
                  <Link to="/packaging/stand-up-pouches" className="text-sm text-primary-600 hover:underline">
                    Stand-Up Pouches
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }

  const handleAddToCart = () => {
    if (totalPrice <= 0 || !product) return
    
    const variantDescription = isEcoDigital && ecoProduct
      ? `${ecoProduct.shape} / ${selectedSize} / ${selectedClosure} / ${selectedSurface} / ${selectedQuantity}`
      : 'Standard'
    
    addToCart({
      productId: product.id,
      name: product.name,
      image: productImage,
      variant: { shape: variantDescription, size: selectedSize, barrier: selectedBarrier, finish: selectedSurface.toLowerCase() },
      quantity: 1,
      unitPrice: totalPrice,
      totalPrice: totalPrice
    })
  }

  // Generate Product Schema for SEO with full specifications for AI crawlers
  const productSchema = useMemo(() => {
    if (!product) return null
    
    const baseUrl = 'https://achievepack.com'
    const currentPrice = isConventionalDigital ? conventionalPrice.total : 
                         isEcoStock ? (ecoStockProduct?.basePrice || 0) :
                         totalPrice
    
    // Build detailed specifications for AI understanding
    const additionalProperties = []
    
    // Add material info
    if (ecoStockProduct?.material) {
      additionalProperties.push({
        "@type": "PropertyValue",
        "name": "Material",
        "value": ecoStockProduct.material
      })
    }
    
    // Add shape info
    if ('shape' in product && product.shape) {
      additionalProperties.push({
        "@type": "PropertyValue",
        "name": "Bag Type",
        "value": product.shape
      })
    }
    
    // Add turnaround time
    if (product.turnaround) {
      additionalProperties.push({
        "@type": "PropertyValue",
        "name": "Lead Time",
        "value": product.turnaround
      })
    }
    
    // Add MOQ
    if (product.minOrder) {
      additionalProperties.push({
        "@type": "PropertyValue",
        "name": "Minimum Order Quantity",
        "value": `${product.minOrder} pieces`
      })
    }
    
    // Add size info for eco-stock
    if (ecoStockProduct?.sizeInfo) {
      additionalProperties.push({
        "@type": "PropertyValue",
        "name": "Available Sizes",
        "value": ecoStockProduct.sizeInfo
      })
    }
    
    // Add features as additional properties
    if (product.features && product.features.length > 0) {
      additionalProperties.push({
        "@type": "PropertyValue",
        "name": "Key Features",
        "value": product.features.join(', ')
      })
    }
    
    // Build size/quantity offers for eco-stock products
    const offers: any[] = []
    
    if (ecoStockProduct?.sizeWithQuantities && ecoStockProduct.sizeWithQuantities.length > 0) {
      // Create individual offers for each size/quantity combination
      ecoStockProduct.sizeWithQuantities.slice(0, 5).forEach((size, idx) => {
        if (size.quantityOptions && size.quantityOptions.length > 0) {
          const firstOption = size.quantityOptions[0]
          offers.push({
            "@type": "Offer",
            "name": `${size.label} - ${firstOption.quantity} pcs`,
            "url": `${baseUrl}/store/product/${product.id}`,
            "priceCurrency": "USD",
            "price": firstOption.totalPrice,
            "availability": "https://schema.org/InStock",
            "itemCondition": "https://schema.org/NewCondition",
            "priceSpecification": {
              "@type": "UnitPriceSpecification",
              "price": firstOption.unitPrice,
              "priceCurrency": "USD",
              "unitText": "piece"
            }
          })
        }
      })
    }
    
    // Default offer if no size variants
    if (offers.length === 0) {
      offers.push({
        "@type": "Offer",
        "url": `${baseUrl}/store/product/${product.id}`,
        "priceCurrency": "USD",
        "price": currentPrice,
        "priceValidUntil": new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
        "availability": "https://schema.org/InStock",
        "itemCondition": "https://schema.org/NewCondition",
        "seller": {
          "@type": "Organization",
          "name": "Achieve Pack"
        }
      })
    }
    
    return {
      "@context": "https://schema.org",
      "@type": "Product",
      "name": product.name,
      "description": product.description,
      "image": product.images.map(img => `${baseUrl}${img}`),
      "sku": product.id,
      "mpn": product.id,
      "brand": {
        "@type": "Brand",
        "name": "Achieve Pack",
        "url": baseUrl
      },
      "manufacturer": {
        "@type": "Organization",
        "name": "Achieve Pack",
        "url": baseUrl
      },
      "offers": offers.length === 1 ? offers[0] : {
        "@type": "AggregateOffer",
        "lowPrice": Math.min(...offers.map((o: any) => o.price)),
        "highPrice": Math.max(...offers.map((o: any) => o.price)),
        "priceCurrency": "USD",
        "offerCount": offers.length,
        "offers": offers
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": product.rating,
        "reviewCount": product.reviews,
        "bestRating": 5,
        "worstRating": 1
      },
      "category": product.category === 'eco-stock' ? 'Eco-Friendly Compostable Packaging' :
                  product.category === 'eco-digital' ? 'Sustainable Digital Print Packaging' :
                  product.category === 'conventional-digital' ? 'Custom Printed Packaging' :
                  product.category === 'sample' ? 'Sample Packs' :
                  product.category === 'boxes' ? 'Custom Printed Corrugated Boxes' : 'Packaging Materials',
      "additionalProperty": additionalProperties,
      "isRelatedTo": [
        { "@type": "WebPage", "name": "Materials Guide", "url": `${baseUrl}/materials` },
        { "@type": "WebPage", "name": "FAQs", "url": `${baseUrl}/support/faqs` }
      ]
    }
  }, [product, isConventionalDigital, isEcoStock, isBoxes, conventionalPrice.total, ecoStockProduct, totalPrice])

  // Get FAQ data for this product
  const productFAQData = useMemo(() => {
    if (!product) return null
    return getProductFAQs(product.id, product.category)
  }, [product])

  // Combine default and product-specific FAQs
  const combinedFAQs = useMemo(() => {
    const specificFAQs = productFAQData?.faqs || []
    return [...specificFAQs, ...DEFAULT_FAQS]
  }, [productFAQData])

  // Generate FAQ Schema
  const faqSchema = useMemo(() => {
    if (combinedFAQs.length === 0) return null
    return generateFAQSchema(combinedFAQs)
  }, [combinedFAQs])

  // Get AI Selling Points for this product
  const aiSellingPoints = useMemo(() => {
    if (!product) return null
    return getAISellingPoints(product.id)
  }, [product])

  return (
    <>
      {product && (
        <Helmet>
          <title>{product.name} | Achieve Pack - Eco-Friendly Packaging</title>
          <meta name="description" content={product.description} />
          <link rel="canonical" href={`https://achievepack.com/store/product/${product.id}`} />
          
          {/* Open Graph */}
          <meta property="og:title" content={`${product.name} | Achieve Pack`} />
          <meta property="og:description" content={product.description} />
          <meta property="og:image" content={`https://achievepack.com${product.images[0]}`} />
          <meta property="og:url" content={`https://achievepack.com/store/product/${product.id}`} />
          <meta property="og:type" content="product" />
          
          {/* Twitter */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content={product.name} />
          <meta name="twitter:description" content={product.description} />
          <meta name="twitter:image" content={`https://achievepack.com${product.images[0]}`} />
          
          {/* Product Schema */}
          {productSchema && (
            <script type="application/ld+json">
              {JSON.stringify(productSchema)}
            </script>
          )}
          
          {/* FAQ Schema for GEO Optimization */}
          {faqSchema && (
            <script type="application/ld+json">
              {JSON.stringify(faqSchema)}
            </script>
          )}
        </Helmet>
      )}
    <div className="min-h-screen bg-neutral-50">
      {/* Header - Fixed at top */}
      <header className="bg-white border-b fixed top-0 left-0 right-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <a 
              href="/" 
              onClick={handleNavigation('/')}
              className="flex items-center gap-2 hover:opacity-80 transition"
            >
              <img 
                src="/achieve-pack-logo.png" 
                alt="Achieve Pack" 
                className="h-9 w-auto"
                loading="eager"
                decoding="async"
                width="120"
                height="36"
              />
            </a>
            <a 
              href="/store" 
              onClick={handleNavigation('/store')}
              className="flex items-center gap-1 text-sm text-neutral-500 hover:text-primary-600 transition"
            >
              <ArrowLeft className="h-4 w-4" /> Back to Store
            </a>
          </div>
          <button onClick={() => {
            if (cartCount === 0) {
              navigate('/store')
            } else {
              setIsCartOpen(true)
            }
          }} className="relative p-2 hover:bg-neutral-100 rounded-full transition">
            <ShoppingCart className="h-6 w-6 text-neutral-700" />
            {cartCount > 0 && <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-bold">{cartCount}</span>}
          </button>
        </div>
      </header>

      {/* Spacer for fixed header */}
      <div className="h-[60px]"></div>

      <main className="max-w-7xl mx-auto px-4 py-8 lg:pt-14">
        {/* Main Product Section for Conventional Digital Products */}
        {isConventionalDigital && conventionalProduct && (
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 mb-8">
            {/* Left Column - Image Gallery */}
            <div className="space-y-4">
              {/* Main Image */}
              <div className="bg-white rounded-lg border border-neutral-200 overflow-hidden">
                <button 
                  onClick={() => setEnlargedImage({
                    src: product.images[selectedMainImage],
                    alt: product.name,
                    index: selectedMainImage,
                    images: product.images
                  })}
                  className="w-full bg-neutral-50 p-6 cursor-pointer hover:bg-neutral-100 transition"
                >
                  <img 
                    src={product.images[selectedMainImage]}
                    alt={product.name}
                    className="w-full h-80 object-contain"
                  />
                </button>
              </div>
              
              {/* Thumbnail Gallery */}
              {product.images.length > 1 && (
                <div className="grid grid-cols-5 gap-2">
                  {product.images.map((img, index) => {
                    const isLastImage = index === product.images.length - 1
                    const hasVideo = conventionalProduct.videoUrl && isLastImage
                    
                    return (
                      <button
                        key={index}
                        onClick={() => {
                          if (hasVideo) {
                            setIsVideoModalOpen(true)
                          } else {
                            setSelectedMainImage(index)
                          }
                        }}
                        className={`relative aspect-square bg-white rounded-lg border-2 overflow-hidden transition-all hover:shadow-md ${
                          selectedMainImage === index && !hasVideo ? 'border-primary-600 ring-2 ring-primary-200' : 'border-neutral-200'
                        }`}
                      >
                        <img src={img} alt={`View ${index + 1}`} className="w-full h-full object-contain p-1" />
                        {/* YouTube Play Icon Overlay */}
                        {hasVideo && (
                          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                            <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center">
                              <svg className="w-5 h-5 text-white ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M8 5v14l11-7z" />
                              </svg>
                            </div>
                          </div>
                        )}
                      </button>
                    )
                  })}
                </div>
              )}
              
              {/* Specifications Tab */}
              <div className="bg-white rounded-lg border border-neutral-200 overflow-hidden">
                <div className="flex border-b border-neutral-200">
                  <button
                    onClick={() => { setActiveTab('visualization'); setSpecTab('specs'); }}
                    className={`flex-1 px-3 py-3 text-sm font-medium transition ${
                      activeTab === 'visualization' && specTab !== 'insights'
                        ? 'bg-primary-50 text-primary-700 border-b-2 border-primary-600'
                        : 'text-neutral-600 hover:bg-neutral-50'
                    }`}
                  >
                    📦 Details
                  </button>
                  <button
                    onClick={() => { setActiveTab('specifications'); setSpecTab('specs'); }}
                    className={`flex-1 px-3 py-3 text-sm font-medium transition ${
                      activeTab === 'specifications' && specTab !== 'insights'
                        ? 'bg-primary-50 text-primary-700 border-b-2 border-primary-600'
                        : 'text-neutral-600 hover:bg-neutral-50'
                    }`}
                  >
                    📋 Specs
                  </button>
                  {aiSellingPoints && (
                    <button
                      onClick={() => setSpecTab('insights')}
                      className={`flex-1 px-3 py-3 text-sm font-medium transition ${
                        specTab === 'insights'
                          ? 'bg-primary-50 text-primary-700 border-b-2 border-primary-600'
                          : 'text-neutral-600 hover:bg-neutral-50'
                      }`}
                    >
                      ✨ Insights
                    </button>
                  )}
                </div>
                <div className="p-4">
                  {specTab === 'insights' && aiSellingPoints ? (
                    <div className="space-y-4">
                      {/* Headline */}
                      <div className="text-sm font-semibold text-primary-700 leading-tight">
                        {aiSellingPoints.headline}
                      </div>
                      
                      {/* Key Benefits Grid */}
                      <div className="grid grid-cols-2 gap-2">
                        {aiSellingPoints.keyBenefits.slice(0, 6).map((benefit, i) => (
                          <div key={i} className="flex gap-2 p-2 bg-primary-50 rounded-lg">
                            <span className="text-lg">{benefit.icon}</span>
                            <div>
                              <div className="text-xs font-medium text-primary-800">{benefit.title}</div>
                              <div className="text-xs text-primary-600 leading-tight">{benefit.description}</div>
                            </div>
                          </div>
                        ))}
                      </div>
                      
                      {/* Comparison Advantage */}
                      <div className="bg-amber-50 border border-amber-200 rounded-lg p-3">
                        <div className="text-xs font-medium text-amber-800 mb-1">💡 Why Choose This?</div>
                        <div className="text-xs text-amber-700">{aiSellingPoints.comparisonAdvantage}</div>
                      </div>
                      
                      {/* Use Cases */}
                      <div>
                        <div className="text-xs font-medium text-neutral-700 mb-1">Perfect For:</div>
                        <div className="flex flex-wrap gap-1">
                          {aiSellingPoints.useCases.map((useCase, i) => (
                            <span key={i} className="text-xs bg-neutral-100 text-neutral-600 px-2 py-0.5 rounded-full">
                              {useCase}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      {/* CTA */}
                      <div className="text-xs text-primary-700 font-medium border-t pt-2">
                        {aiSellingPoints.callToAction}
                      </div>
                    </div>
                  ) : activeTab === 'visualization' ? (
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <span className="text-primary-500">✓</span>
                        <div>
                          <div className="font-medium text-neutral-800">Digital Print Quality</div>
                          <div className="text-sm text-neutral-500">High-resolution printing with vibrant colors</div>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <span className="text-primary-500">✓</span>
                        <div>
                          <div className="font-medium text-neutral-800">Fast Turnaround</div>
                          <div className="text-sm text-neutral-500">15-20 business days production time</div>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <span className="text-primary-500">✓</span>
                        <div>
                          <div className="font-medium text-neutral-800">Free Shipping</div>
                          <div className="text-sm text-neutral-500">Air freight shipping included in price</div>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <span className="text-primary-500">✓</span>
                        <div>
                          <div className="font-medium text-neutral-800">Low MOQ</div>
                          <div className="text-sm text-neutral-500">Starting from just 100 pieces</div>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <dl className="grid grid-cols-1 gap-y-3 text-sm">
                      <div className="grid grid-cols-3 gap-2">
                        <dt className="text-neutral-500">Shape</dt>
                        <dd className="text-neutral-900 col-span-2">{conventionalProduct.shape.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}</dd>
                      </div>
                      <div className="grid grid-cols-3 gap-2">
                        <dt className="text-neutral-500">Size</dt>
                        <dd className="text-neutral-900 col-span-2">{POUCH_SIZES.find(s => s.id === selectedConvSize)?.label || selectedConvSize}</dd>
                      </div>
                      <div className="grid grid-cols-3 gap-2">
                        <dt className="text-neutral-500">Quantity</dt>
                        <dd className="text-neutral-900 col-span-2">{selectedConvQuantity.toLocaleString()} pieces</dd>
                      </div>
                      <div className="grid grid-cols-3 gap-2">
                        <dt className="text-neutral-500">Material</dt>
                        <dd className="text-neutral-900 col-span-2">{product.name.includes('Metalised') ? 'Mattopp/VMPET/LLDPE' : 'Glossy PET/LLDPE'}</dd>
                      </div>
                      <div className="grid grid-cols-3 gap-2">
                        <dt className="text-neutral-500">Thickness</dt>
                        <dd className="text-neutral-900 col-span-2">100 micron / 4 mil</dd>
                      </div>
                      <div className="grid grid-cols-3 gap-2">
                        <dt className="text-neutral-500">Printing</dt>
                        <dd className="text-neutral-900 col-span-2">Digital Print (Unlimited Colors)</dd>
                      </div>
                      <div className="grid grid-cols-3 gap-2">
                        <dt className="text-neutral-500">Lead Time</dt>
                        <dd className="text-neutral-900 col-span-2">15-20 business days</dd>
                      </div>
                      <div className="grid grid-cols-3 gap-2">
                        <dt className="text-neutral-500">Shipping</dt>
                        <dd className="text-neutral-900 col-span-2">Air Freight (Included)</dd>
                      </div>
                    </dl>
                  )}
                </div>
              </div>
            </div>
            
            {/* Right Column - Product Options */}
            <div className="space-y-6">
              {product.badge && <span className="inline-block bg-primary-100 text-primary-700 text-sm px-4 py-1 rounded-full font-medium">{product.badge}</span>}
              <h1 className="text-3xl font-bold text-neutral-900">{product.name}</h1>
              
              <div className="flex items-center gap-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className={`h-5 w-5 ${i < Math.floor(product.rating) ? 'text-yellow-400 fill-yellow-400' : 'text-neutral-300'}`} />
                  ))}
                </div>
                <span className="text-neutral-600">({product.reviews} reviews)</span>
              </div>
              
              <p className="text-neutral-600">{product.description}</p>
              
              {/* Dynamic Description for Conventional Digital */}
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200 rounded-xl overflow-hidden">
                <div className="px-5 pt-5 pb-3">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-amber-600 text-sm">❓</span>
                    </div>
                    <p className="text-sm text-neutral-700 leading-relaxed">
                      Custom packaging often means high MOQs and long lead times, making it hard for new brands and trial products to get to market quickly.
                    </p>
                  </div>
                </div>
                <div className="px-5 pb-3">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-blue-600 text-sm">✓</span>
                    </div>
                    <p className="text-sm text-blue-800 leading-relaxed font-medium">
                      {conventionalProduct?.shape.includes('stand-up') 
                        ? 'This stand-up pouch uses digital printing—MOQ from 100pcs, 15-20 day delivery, get your product on shelf fast.'
                        : 'This 3-side seal flat pouch uses digital printing—no plate fees, MOQ from 100pcs, perfect for lightweight products and trial runs.'}
                    </p>
                  </div>
                </div>
                <div className="px-5 pb-3 space-y-2">
                  <div className="bg-white/60 rounded-lg p-3 text-xs text-neutral-700">
                    <span className="font-semibold text-blue-700">Structure:</span> 
                    {product.name.includes('Metalised') 
                      ? ' Mattopp/VMPET/LLDPE — Metalised high-barrier, extended shelf life, blocks light & oxygen'
                      : ' Glossy PET/LLDPE — Clear glossy finish, perfect product visibility'}
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="bg-white/60 rounded-lg p-2 text-xs text-neutral-600">
                      <span className="font-medium">📐 Size: {selectedConvSize}mm</span>
                    </div>
                    <div className="bg-white/60 rounded-lg p-2 text-xs text-neutral-600">
                      <span className="font-medium">📦 Qty: {selectedConvQuantity} pcs</span>
                    </div>
                  </div>
                </div>
                <div className="px-5 pb-4">
                  <div className="grid grid-cols-2 gap-2">
                    <div className="flex items-center gap-1.5 text-xs text-blue-700"><Check className="w-3.5 h-3.5 text-blue-600 flex-shrink-0" /><span>Food-grade certified</span></div>
                    <div className="flex items-center gap-1.5 text-xs text-blue-700"><Check className="w-3.5 h-3.5 text-blue-600 flex-shrink-0" /><span>Full-color digital print</span></div>
                    <div className="flex items-center gap-1.5 text-xs text-blue-700"><Check className="w-3.5 h-3.5 text-blue-600 flex-shrink-0" /><span>MOQ from 100pcs, no plate fees</span></div>
                    <div className="flex items-center gap-1.5 text-xs text-blue-700"><Check className="w-3.5 h-3.5 text-blue-600 flex-shrink-0" /><span>15-20 days incl. shipping</span></div>
                  </div>
                </div>
                <div className="bg-blue-100/50 px-5 py-3 border-t border-blue-200">
                  <p className="text-xs text-blue-700"><span className="font-medium">Ideal for:</span> New brand trials, limited editions, seasonal packaging, small-batch ecommerce sellers</p>
                </div>
              </div>
              
              {/* Price Display */}
              <div className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-xl border-2 border-primary-200 p-6">
                <div className="text-3xl font-bold text-primary-700">US${conventionalPrice.total.toLocaleString()}</div>
                <div className="text-sm text-primary-600 mt-1">
                  ${conventionalPrice.unit.toFixed(2)}/piece • {selectedConvQuantity.toLocaleString()} pieces
                </div>
                <div className="text-xs text-primary-700 mt-2 bg-white bg-opacity-40 rounded-lg p-2 text-center">
                  ✓ $40 Air Shipping Included
                </div>
              </div>
              
              {/* Options */}
              <div className="space-y-4 pt-4 border-t">
                {/* Size Selector */}
                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-2">Size (W × H + Gusset)</label>
                  <select 
                    value={selectedConvSize} 
                    onChange={e => setSelectedConvSize(e.target.value)} 
                    className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  >
                    {conventionalSizes.map(size => (
                      <option key={size.id} value={size.id}>{size.label} ({size.imperial})</option>
                    ))}
                  </select>
                </div>
                
                {/* Quantity Selector */}
                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-2">Quantity</label>
                  <select 
                    value={selectedConvQuantity} 
                    onChange={e => setSelectedConvQuantity(Number(e.target.value))} 
                    className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  >
                    {QUANTITY_OPTIONS.map(qty => (
                      <option key={qty} value={qty}>{qty.toLocaleString()} pieces</option>
                    ))}
                  </select>
                </div>
              </div>
              
              {/* Add to Cart */}
              <button 
                onClick={() => {
                  addToCart({
                    productId: product.id,
                    name: product.name,
                    image: product.images[0],
                    variant: { shape: conventionalProduct.shape, size: selectedConvSize, material: product.name.includes('Metalised') ? 'Mattopp/VMPET/LLDPE' : 'Glossy PET/LLDPE' },
                    quantity: 1,
                    unitPrice: conventionalPrice.total,
                    totalPrice: conventionalPrice.total
                  })
                }} 
                className="w-full py-4 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-xl transition flex items-center justify-center gap-2"
              >
                <ShoppingCart className="h-5 w-5" /> Add to Cart
              </button>
              
              {/* Features */}
              <div className="grid grid-cols-2 gap-3 pt-4">
                {product.features.map((feature, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm text-neutral-600">
                    <Check className="h-4 w-4 text-primary-500" /> {feature}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
        
        {/* Eco Stock Products Layout */}
        {(isEcoStock || isBoxes) && ecoStockProduct && (
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 mb-8">
            {/* Left Column - Image Gallery */}
            <div className="space-y-4">
              {/* Main Image */}
              <div className="bg-white rounded-lg border border-neutral-200 overflow-hidden">
                <button 
                  onClick={() => setEnlargedImage({
                    src: product.images[selectedMainImage],
                    alt: product.name,
                    index: selectedMainImage,
                    images: product.images
                  })}
                  className="w-full bg-neutral-50 p-6 cursor-pointer hover:bg-neutral-100 transition"
                >
                  <img 
                    src={product.images[selectedMainImage]}
                    alt={product.name}
                    className="w-full h-80 object-contain"
                  />
                </button>
              </div>
              
              {/* Thumbnail Gallery */}
              {product.images.length > 1 && (
                <div className="grid grid-cols-5 gap-2">
                  {product.images.map((img, index) => {
                    const isLastImage = index === product.images.length - 1
                    const hasVideo = ecoStockProduct.videoUrl && isLastImage
                    
                    return (
                      <button
                        key={index}
                        onClick={() => {
                          if (hasVideo) {
                            setIsVideoModalOpen(true)
                          } else {
                            setSelectedMainImage(index)
                          }
                        }}
                        className={`relative aspect-square bg-white rounded-lg border-2 overflow-hidden transition-all hover:shadow-md ${
                          selectedMainImage === index && !hasVideo ? 'border-green-600 ring-2 ring-green-200' : 'border-neutral-200'
                        }`}
                      >
                        <img src={img} alt={`View ${index + 1}`} className="w-full h-full object-contain p-1" />
                        {/* YouTube Play Icon Overlay */}
                        {hasVideo && (
                          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                            <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center">
                              <svg className="w-5 h-5 text-white ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M8 5v14l11-7z" />
                              </svg>
                            </div>
                          </div>
                        )}
                      </button>
                    )
                  })}
                </div>
              )}
              
              {/* Specifications with Insights Tab */}
              <div className="bg-white rounded-lg border border-neutral-200 overflow-hidden">
                <div className="flex border-b border-neutral-200">
                  <button
                    onClick={() => setSpecTab('specs')}
                    className={`flex-1 px-4 py-3 text-sm font-medium transition ${
                      specTab === 'specs'
                        ? 'bg-green-50 text-green-700 border-b-2 border-green-600'
                        : 'text-neutral-600 hover:bg-neutral-50'
                    }`}
                  >
                    🌱 Specifications
                  </button>
                  {aiSellingPoints && (
                    <button
                      onClick={() => setSpecTab('insights')}
                      className={`flex-1 px-4 py-3 text-sm font-medium transition ${
                        specTab === 'insights'
                          ? 'bg-green-50 text-green-700 border-b-2 border-green-600'
                          : 'text-neutral-600 hover:bg-neutral-50'
                      }`}
                    >
                      ✨ Insights
                    </button>
                  )}
                </div>
                <div className="p-4">
                  {specTab === 'specs' ? (
                    <dl className="grid grid-cols-1 gap-y-3 text-sm">
                      <div className="grid grid-cols-3 gap-2">
                        <dt className="text-neutral-500">Material</dt>
                        <dd className="text-neutral-900 col-span-2">{ecoStockProduct.material}</dd>
                      </div>
                      <div className="grid grid-cols-3 gap-2">
                        <dt className="text-neutral-500">Size</dt>
                        <dd className="text-neutral-900 col-span-2">{ecoStockProduct.sizeInfo}</dd>
                      </div>
                      <div className="grid grid-cols-3 gap-2">
                        <dt className="text-neutral-500">Shape</dt>
                        <dd className="text-neutral-900 col-span-2">{ecoStockProduct.shape}</dd>
                      </div>
                      <div className="grid grid-cols-3 gap-2">
                        <dt className="text-neutral-500">Certification</dt>
                        <dd className="text-neutral-900 col-span-2">Industrial Composting Approved</dd>
                      </div>
                      <div className="grid grid-cols-3 gap-2">
                        <dt className="text-neutral-500">Shelf Life</dt>
                        <dd className="text-neutral-900 col-span-2">6-12 months freshness</dd>
                      </div>
                      <div className="grid grid-cols-3 gap-2">
                        <dt className="text-neutral-500">Lead Time</dt>
                        <dd className="text-neutral-900 col-span-2">{ecoStockProduct.turnaround}</dd>
                      </div>
                      <div className="grid grid-cols-3 gap-2">
                        <dt className="text-neutral-500">Shipping</dt>
                        <dd className="text-neutral-900 col-span-2">Air Freight (Included)</dd>
                      </div>
                    </dl>
                  ) : aiSellingPoints && (
                    <div className="space-y-4">
                      {/* Headline */}
                      <div className="text-sm font-semibold text-green-700 leading-tight">
                        {aiSellingPoints.headline}
                      </div>
                      
                      {/* Key Benefits Grid */}
                      <div className="grid grid-cols-2 gap-2">
                        {aiSellingPoints.keyBenefits.slice(0, 6).map((benefit, i) => (
                          <div key={i} className="flex gap-2 p-2 bg-green-50 rounded-lg">
                            <span className="text-lg">{benefit.icon}</span>
                            <div>
                              <div className="text-xs font-medium text-green-800">{benefit.title}</div>
                              <div className="text-xs text-green-600 leading-tight">{benefit.description}</div>
                            </div>
                          </div>
                        ))}
                      </div>
                      
                      {/* Comparison Advantage */}
                      <div className="bg-amber-50 border border-amber-200 rounded-lg p-3">
                        <div className="text-xs font-medium text-amber-800 mb-1">💡 Why Choose This?</div>
                        <div className="text-xs text-amber-700">{aiSellingPoints.comparisonAdvantage}</div>
                      </div>
                      
                      {/* Use Cases */}
                      <div>
                        <div className="text-xs font-medium text-neutral-700 mb-1">Perfect For:</div>
                        <div className="flex flex-wrap gap-1">
                          {aiSellingPoints.useCases.map((useCase, i) => (
                            <span key={i} className="text-xs bg-neutral-100 text-neutral-600 px-2 py-0.5 rounded-full">
                              {useCase}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      {/* Certifications */}
                      {aiSellingPoints.certifications.length > 0 && (
                        <div className="flex flex-wrap gap-1">
                          {aiSellingPoints.certifications.map((cert, i) => (
                            <span key={i} className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full">
                              ✓ {cert}
                            </span>
                          ))}
                        </div>
                      )}
                      
                      {/* CTA */}
                      <div className="text-xs text-green-700 font-medium border-t pt-2">
                        {aiSellingPoints.callToAction}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
            
            {/* Right Column - Product Options */}
            <div className="space-y-6">
              {product.badge && <span className="inline-block bg-green-100 text-green-700 text-sm px-4 py-1 rounded-full font-medium">{product.badge}</span>}
              <h1 className="text-3xl font-bold text-neutral-900">{product.name}</h1>
              
              <div className="flex items-center gap-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className={`h-5 w-5 ${i < Math.floor(product.rating) ? 'text-yellow-400 fill-yellow-400' : 'text-neutral-300'}`} />
                  ))}
                </div>
                <span className="text-neutral-600">({product.reviews} reviews)</span>
              </div>
              
              <p className="text-neutral-600">{product.description}</p>
              
              {/* Dynamic Description for Eco Stock */}
              <div className="bg-gradient-to-br from-emerald-50 to-teal-50 border border-emerald-200 rounded-xl overflow-hidden">
                <div className="px-5 pt-5 pb-3">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-amber-600 text-sm">❓</span>
                    </div>
                    <p className="text-sm text-neutral-700 leading-relaxed">
                      {ecoStockProduct.name.includes('Compostable') || ecoStockProduct.name.includes('compostable')
                        ? 'Want compostable packaging but worried about long lead times and high MOQs to test market response?'
                        : 'Need eco packaging but budget-limited, don\'t want to pay high custom costs for small quantities?'}
                    </p>
                  </div>
                </div>
                <div className="px-5 pb-3">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-emerald-600 text-sm">✓</span>
                    </div>
                    <p className="text-sm text-emerald-800 leading-relaxed font-medium">
                      {ecoStockProduct.name.includes('Compostable')
                        ? 'This stock compostable pouch ships in 3-5 days—no custom wait, give your product truly sustainable packaging immediately.'
                        : 'This pre-made eco pouch uses sustainable materials, ships from stock, no MOQ—perfect for quick start and small batches.'}
                    </p>
                  </div>
                </div>
                <div className="px-5 pb-3 space-y-2">
                  <div className="bg-white/60 rounded-lg p-3 text-xs text-neutral-700">
                    <span className="font-semibold text-emerald-700">Material:</span> 
                    {ecoStockProduct.name.includes('Compostable')
                      ? ' Certified compostable, breaks down within 180 days in industrial composting, zero microplastics'
                      : ecoStockProduct.name.includes('Kraft')
                      ? ' Natural kraft paper composite, organic feel, perfect for artisanal products'
                      : ' Eco-sustainable materials, reduced plastic use and carbon footprint'}
                  </div>
                  {selectedSizeVariant && (
                    <div className="bg-white/60 rounded-lg p-2 text-xs text-neutral-600">
                      <span className="font-medium">📐 Size: {ecoStockProduct.sizeVariants?.find(v => v.id === selectedSizeVariant)?.label || 'Standard'}</span>
                    </div>
                  )}
                </div>
                <div className="px-5 pb-4">
                  <div className="grid grid-cols-2 gap-2">
                    <div className="flex items-center gap-1.5 text-xs text-emerald-700"><Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" /><span>Ships in 3-5 days</span></div>
                    <div className="flex items-center gap-1.5 text-xs text-emerald-700"><Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" /><span>No minimum order</span></div>
                    <div className="flex items-center gap-1.5 text-xs text-emerald-700"><Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" /><span>Eco-certified materials</span></div>
                    <div className="flex items-center gap-1.5 text-xs text-emerald-700"><Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" /><span>Custom print available</span></div>
                  </div>
                </div>
                <div className="bg-emerald-100/50 px-5 py-3 border-t border-emerald-200">
                  <p className="text-xs text-emerald-700"><span className="font-medium">Ideal for:</span> Farmers markets, artisan foods, organic brands, small bakeries, ecommerce startups</p>
                  {ecoStockProduct.customPrintNote && (
                    <p className="text-xs text-emerald-600 mt-1"><span className="font-medium">💡</span> {ecoStockProduct.customPrintNote}</p>
                  )}
                </div>
              </div>
              
              {/* Size Variant Selector - for products with multiple sizes */}
              {ecoStockProduct.sizeVariants && ecoStockProduct.sizeVariants.length > 0 && (
                <div className="space-y-4 pt-4 border-t">
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-2">Select Size</label>
                    <div className="space-y-2">
                      {ecoStockProduct.sizeVariants.map((variant) => (
                        <button
                          key={variant.id}
                          onClick={() => setSelectedSizeVariant(variant.id)}
                          className={`w-full p-3 border rounded-lg text-left transition flex justify-between items-center ${
                            selectedSizeVariant === variant.id 
                              ? 'border-green-600 bg-green-50 ring-2 ring-green-200' 
                              : 'border-neutral-200 hover:border-green-300'
                          }`}
                        >
                          <div>
                            <div className="font-medium text-neutral-900">{variant.label}</div>
                            <div className="text-xs text-neutral-500">{variant.dimensions} {variant.hasHole ? '• With Hole' : '• No Hole'}</div>
                          </div>
                          <div className="text-right">
                            <div className="font-bold text-green-700">${variant.totalPrice.toFixed(2)}/100pcs</div>
                            <div className="text-xs text-neutral-500">${variant.unitPrice.toFixed(3)}/pc</div>
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                  
                  {/* Batch Quantity Selector - 100pcs per batch */}
                  {selectedSizeVariant && (
                    <div>
                      <label className="block text-sm font-medium text-neutral-700 mb-2">Quantity (batches of 100 pcs)</label>
                      <div className="flex items-center gap-3">
                        <button 
                          onClick={() => setSizeVariantBatchCount(Math.max(1, sizeVariantBatchCount - 1))}
                          className="w-10 h-10 rounded-lg border border-neutral-300 flex items-center justify-center text-lg font-bold hover:bg-neutral-100"
                        >−</button>
                        <div className="flex-1 text-center">
                          <div className="text-2xl font-bold text-green-700">{sizeVariantBatchCount}</div>
                          <div className="text-xs text-neutral-500">{(sizeVariantBatchCount * 100).toLocaleString()} pcs total</div>
                        </div>
                        <button 
                          onClick={() => setSizeVariantBatchCount(sizeVariantBatchCount + 1)}
                          className="w-10 h-10 rounded-lg border border-neutral-300 flex items-center justify-center text-lg font-bold hover:bg-neutral-100"
                        >+</button>
                      </div>
                    </div>
                  )}
                </div>
              )}
              
              {/* Size + Quantity Selector - for products with multiple sizes and quantities (Mailer Bag) */}
              {ecoStockProduct.sizeWithQuantities && ecoStockProduct.sizeWithQuantities.length > 0 && (
                <div className="space-y-4 pt-4 border-t">
                  {/* Step 1: Select Size */}
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-2">1. Select Size</label>
                    <div className="grid grid-cols-3 gap-2">
                      {ecoStockProduct.sizeWithQuantities.map((size) => (
                        <button
                          key={size.id}
                          onClick={() => { setSelectedSizeWithQty(size.id); setSelectedQtyOption(null); }}
                          className={`p-2 border rounded-lg text-center transition ${
                            selectedSizeWithQty === size.id 
                              ? 'border-green-600 bg-green-50 ring-2 ring-green-200' 
                              : 'border-neutral-200 hover:border-green-300'
                          }`}
                        >
                          <div className="font-medium text-neutral-900 text-sm">{size.label}</div>
                        </button>
                      ))}
                    </div>
                  </div>
                  
                  {/* Step 2: Select Quantity - only show when size is selected */}
                  {selectedSizeWithQty && (
                    <div>
                      <label className="block text-sm font-medium text-neutral-700 mb-2">2. Select Quantity</label>
                      <div className="space-y-2">
                        {ecoStockProduct.sizeWithQuantities
                          .find(s => s.id === selectedSizeWithQty)
                          ?.quantityOptions.map((option) => (
                            <button
                              key={option.quantity}
                              onClick={() => setSelectedQtyOption(option.quantity)}
                              className={`w-full p-3 border rounded-lg text-left transition flex justify-between items-center ${
                                selectedQtyOption === option.quantity 
                                  ? 'border-green-600 bg-green-50 ring-2 ring-green-200' 
                                  : 'border-neutral-200 hover:border-green-300'
                              }`}
                            >
                              <div>
                                <div className="font-medium text-neutral-900">{option.quantity.toLocaleString()} pcs</div>
                                <div className="text-xs text-neutral-500">${option.unitPrice.toFixed(4)}/pc</div>
                              </div>
                              <div className="text-right">
                                <div className="font-bold text-green-700">${option.totalPrice.toFixed(2)}</div>
                              </div>
                            </button>
                          ))}
                      </div>
                    </div>
                  )}
                </div>
              )}
              
              {/* Price Display - Green theme */}
              {(() => {
                const selectedVariant = ecoStockProduct.sizeVariants?.find(v => v.id === selectedSizeVariant)
                const selectedSizeData = ecoStockProduct.sizeWithQuantities?.find(s => s.id === selectedSizeWithQty)
                const selectedQtyData = selectedSizeData?.quantityOptions.find(o => o.quantity === selectedQtyOption)
                const customPrintQtyData = ecoStockProduct.customPrintQuantities?.find(o => o.quantity === selectedQtyOption)
                
                // Priority: customPrintQuantities > sizeWithQuantities > sizeVariants > default
                let displayPrice: number
                let displayUnitPrice: number
                let displayQuantity: number
                let discountText = ''
                
                if (customPrintQtyData) {
                  displayPrice = customPrintQtyData.totalPrice
                  displayUnitPrice = customPrintQtyData.unitPrice
                  displayQuantity = customPrintQtyData.quantity
                  discountText = customPrintQtyData.discount
                } else if (selectedQtyData) {
                  displayPrice = selectedQtyData.totalPrice
                  displayUnitPrice = selectedQtyData.unitPrice
                  displayQuantity = selectedQtyData.quantity
                } else if (selectedVariant) {
                  // Multiply by batch count for sizeVariants
                  displayPrice = selectedVariant.totalPrice * sizeVariantBatchCount
                  displayUnitPrice = selectedVariant.unitPrice
                  displayQuantity = selectedVariant.quantity * sizeVariantBatchCount
                } else if (ecoStockProduct.pricePerPiece) {
                  displayPrice = selectedEcoStockQuantity * ecoStockProduct.pricePerPiece
                  displayUnitPrice = ecoStockProduct.pricePerPiece
                  displayQuantity = selectedEcoStockQuantity
                } else {
                  // Fallback for products with sizeWithQuantities but no selection yet
                  const firstSize = ecoStockProduct.sizeWithQuantities?.[0]
                  const firstOption = firstSize?.quantityOptions?.[0]
                  displayPrice = firstOption?.totalPrice || ecoStockProduct.basePrice || 0
                  displayUnitPrice = firstOption?.unitPrice || 0
                  displayQuantity = firstOption?.quantity || ecoStockProduct.minQuantity || 200
                }
                
                return (
                  <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl border-2 border-green-200 p-6">
                    <div className="text-3xl font-bold text-green-700">US${displayPrice.toLocaleString()}</div>
                    <div className="text-sm text-green-600 mt-1">
                      ${displayUnitPrice.toFixed(4)}/piece • {displayQuantity.toLocaleString()} pieces
                    </div>
                    {discountText && discountText !== '0%' && (
                      <div className="text-sm text-red-500 font-medium mt-1">Volume Discount: {discountText}</div>
                    )}
                    <div className="text-xs text-green-700 mt-2 bg-white bg-opacity-40 rounded-lg p-2 text-center">
                      ✓ {ecoStockProduct.customPrintQuantities ? '15-20 Days Production' : 'Air Shipping Included'}
                    </div>
                  </div>
                )
              })()}
              
              {/* Quantity Selector - only for products without sizeVariants and without sizeWithQuantities */}
              {(!ecoStockProduct.sizeVariants || ecoStockProduct.sizeVariants.length === 0) && 
               (!ecoStockProduct.sizeWithQuantities || ecoStockProduct.sizeWithQuantities.length === 0) && (
                <div className="space-y-4 pt-4 border-t">
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-2">Quantity (multiples of {ecoStockProduct.quantityStep})</label>
                    <select 
                      value={selectedEcoStockQuantity} 
                      onChange={e => setSelectedEcoStockQuantity(Number(e.target.value))} 
                      className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                    >
                      {Array.from({ length: 10 }, (_, i) => (i + 1) * ecoStockProduct.quantityStep).map(qty => (
                        <option key={qty} value={qty}>{qty.toLocaleString()} pieces</option>
                      ))}
                    </select>
                  </div>
                </div>
              )}
              
              {/* Custom Print Note - Highlighted with CTA button */}
              {ecoStockProduct.customPrintNote && ecoStockProduct.customPrintProductId && (
                <div className="bg-amber-50 border-2 border-amber-300 rounded-xl p-4">
                  <div className="flex items-start gap-2">
                    <span className="text-amber-600 text-lg">🎨</span>
                    <div className="flex-1">
                      <h4 className="font-semibold text-amber-800 text-sm">Custom Printing Available</h4>
                      <p className="text-sm text-amber-700 mt-1">{ecoStockProduct.customPrintNote}</p>
                      <Link
                        to={`/store/product/${ecoStockProduct.customPrintProductId}`}
                        className="inline-flex items-center gap-2 mt-3 px-4 py-2 bg-amber-500 hover:bg-amber-600 text-white font-medium rounded-lg text-sm transition"
                      >
                        <span>🎨</span> View Custom Print Options
                      </Link>
                    </div>
                  </div>
                </div>
              )}
              
              {/* Custom Print Note without CTA (no linked product) */}
              {ecoStockProduct.customPrintNote && !ecoStockProduct.customPrintProductId && (
                <div className="bg-amber-50 border-2 border-amber-300 rounded-xl p-4">
                  <div className="flex items-start gap-2">
                    <span className="text-amber-600 text-lg">🎨</span>
                    <div>
                      <h4 className="font-semibold text-amber-800 text-sm">Custom Printing Available</h4>
                      <p className="text-sm text-amber-700 mt-1">{ecoStockProduct.customPrintNote}</p>
                    </div>
                  </div>
                </div>
              )}
              
              {/* Back to Stock Version Link (for custom print products) */}
              {ecoStockProduct.stockProductId && (
                <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
                  <div className="flex items-center gap-2">
                    <span className="text-blue-600">📦</span>
                    <div className="flex-1">
                      <p className="text-sm text-blue-700">Looking for smaller quantities without custom print?</p>
                    </div>
                    <Link
                      to={`/store/product/${ecoStockProduct.stockProductId}`}
                      className="text-sm text-blue-600 hover:text-blue-800 font-medium underline"
                    >
                      View Stock Version →
                    </Link>
                  </div>
                </div>
              )}
              
              {/* Custom Print Quantity Selector */}
              {ecoStockProduct.customPrintQuantities && ecoStockProduct.customPrintQuantities.length > 0 && (
                <div className="space-y-4 pt-4 border-t">
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-2">Select Quantity (Volume Discounts)</label>
                    <div className="space-y-2 max-h-64 overflow-y-auto">
                      {ecoStockProduct.customPrintQuantities.map((option) => (
                        <button
                          key={option.quantity}
                          onClick={() => setSelectedQtyOption(option.quantity)}
                          className={`w-full p-3 border rounded-lg text-left transition flex justify-between items-center ${
                            selectedQtyOption === option.quantity 
                              ? 'border-green-600 bg-green-50 ring-2 ring-green-200' 
                              : 'border-neutral-200 hover:border-green-300'
                          }`}
                        >
                          <div>
                            <div className="font-medium text-neutral-900">{option.quantity.toLocaleString()} pcs</div>
                            <div className="text-xs text-neutral-500">${option.unitPrice.toFixed(3)}/pc</div>
                          </div>
                          <div className="text-right">
                            <div className="font-bold text-green-700">${option.totalPrice.toLocaleString()}</div>
                            {option.discount !== '0%' && (
                              <div className="text-xs text-red-500 font-medium">Save {option.discount}</div>
                            )}
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}
              
              {/* Add to Cart - Green button for compostable products */}
              <button 
                onClick={() => {
                  const selectedVariant = ecoStockProduct.sizeVariants?.find(v => v.id === selectedSizeVariant)
                  const selectedSizeData = ecoStockProduct.sizeWithQuantities?.find(s => s.id === selectedSizeWithQty)
                  const selectedQtyData = selectedSizeData?.quantityOptions.find(o => o.quantity === selectedQtyOption)
                  const customPrintQtyData = ecoStockProduct.customPrintQuantities?.find(o => o.quantity === selectedQtyOption)
                  
                  let cartPrice: number
                  let cartSize: string
                  
                  if (customPrintQtyData) {
                    cartPrice = customPrintQtyData.totalPrice
                    cartSize = `Custom Print (${customPrintQtyData.quantity.toLocaleString()} pcs)`
                  } else if (selectedQtyData && selectedSizeData) {
                    cartPrice = selectedQtyData.totalPrice
                    cartSize = `${selectedSizeData.label} - ${selectedSizeData.dimensions} (${selectedQtyData.quantity} pcs)`
                  } else if (selectedVariant) {
                    // Multiply by batch count for sizeVariants
                    cartPrice = selectedVariant.totalPrice * sizeVariantBatchCount
                    const totalPcs = selectedVariant.quantity * sizeVariantBatchCount
                    cartSize = `${selectedVariant.label} - ${selectedVariant.dimensions} (${totalPcs} pcs)`
                  } else {
                    cartPrice = selectedEcoStockQuantity * ecoStockProduct.pricePerPiece
                    cartSize = ecoStockProduct.sizeInfo
                  }
                  
                  addToCart({
                    productId: product.id,
                    name: product.name,
                    image: product.images[0],
                    variant: { shape: ecoStockProduct.shape, size: cartSize, material: ecoStockProduct.material },
                    quantity: 1,
                    unitPrice: cartPrice,
                    totalPrice: cartPrice
                  })
                }} 
                disabled={
                  (ecoStockProduct.sizeVariants && ecoStockProduct.sizeVariants.length > 0 && !ecoStockProduct.customPrintQuantities && !selectedSizeVariant) ||
                  (ecoStockProduct.sizeWithQuantities && ecoStockProduct.sizeWithQuantities.length > 0 && (!selectedSizeWithQty || !selectedQtyOption)) ||
                  (ecoStockProduct.customPrintQuantities && ecoStockProduct.customPrintQuantities.length > 0 && !selectedQtyOption)
                }
                className={`w-full py-4 font-semibold rounded-xl transition flex items-center justify-center gap-2 ${
                  (ecoStockProduct.sizeVariants && ecoStockProduct.sizeVariants.length > 0 && !ecoStockProduct.customPrintQuantities && !selectedSizeVariant) ||
                  (ecoStockProduct.sizeWithQuantities && ecoStockProduct.sizeWithQuantities.length > 0 && (!selectedSizeWithQty || !selectedQtyOption)) ||
                  (ecoStockProduct.customPrintQuantities && ecoStockProduct.customPrintQuantities.length > 0 && !selectedQtyOption)
                    ? 'bg-neutral-300 text-neutral-500 cursor-not-allowed'
                    : 'bg-green-600 hover:bg-green-700 text-white'
                }`}
              >
                <ShoppingCart className="h-5 w-5" /> {ecoStockProduct.customPrintQuantities ? '🎨 Add Custom Print Order' : isBoxes ? 'Add to Cart' : '🌱 Add Compostable Bag to Cart'}
              </button>
              
              {/* Features */}
              <div className="grid grid-cols-2 gap-3 pt-4">
                {product.features.map((feature, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm text-neutral-600">
                    <Check className="h-4 w-4 text-green-500" /> {feature}
                  </div>
                ))}
              </div>
              
              {/* Eco Info Box - Only show for eco-stock, not for boxes */}
              {!isBoxes && (
                <div className="bg-green-50 border border-green-200 rounded-xl p-4">
                  <h4 className="font-semibold text-green-800 mb-2">♻️ About Compostable Packaging</h4>
                  <p className="text-sm text-green-700">
                    Our compostable pouches are made from plant-based materials that break down in industrial composting facilities. 
                    Certified for industrial composting, these pouches provide a sustainable alternative without compromising on product protection.
                  </p>
                </div>
              )}
            </div>
          </div>
        )}
        
        {/* Main Product Image for Non-Eco Digital and Non-Conventional and Non-Eco-Stock Products - Top of Page */}
        {!isEcoDigital && !isConventionalDigital && !isEcoStock && (
          <div className="mb-8">
            <div className="bg-white rounded-lg border border-neutral-200 overflow-hidden max-w-2xl mx-auto">
              <div className="p-6">
                <div className="text-center">
                  <button 
                    onClick={() => setEnlargedImage({
                      src: productImage,
                      alt: product.name
                    })}
                    className="bg-neutral-50 rounded-lg p-6 mb-4 cursor-pointer hover:bg-neutral-100 transition w-full"
                  >
                    <img 
                      src={productImage}
                      alt={product.name}
                      className="w-full h-64 object-contain"
                    />
                  </button>
                  <h3 className="text-lg font-semibold text-neutral-900">{product.name}</h3>
                  <p className="text-sm text-neutral-500 mt-1">{product.shortDesc}</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Grid layout for sample products and eco-digital */}
        {!isConventionalDigital && !isEcoStock && (
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left Column - Customer Examples + Package Preview */}
          <div className="hidden lg:block space-y-4">
            {/* Product Images Section - All eco-digital photos */}
            {isEcoDigital && (
              <div className="bg-white rounded-lg border border-neutral-200 overflow-hidden">
                {/* Main Product Image */}
                <div className="bg-neutral-50 p-6">
                  {(() => {
                    // All eco-digital images for main showcase
                    const allEcoDigitalImages = [
                      '/imgs/store/eco-digital/0eQiBArdHVo_uyy12vmVid9Vc-hB8Msln4h0Oddu4dQ=.webp',
                      '/imgs/store/eco-digital/1k3ig0ezuHcds_30mxxPOgFL-qeSwHc8uuzElo2-GP4=.webp',
                      '/imgs/store/eco-digital/7CWxuO-mB4GevbYtCFnSFfzuCLECtUQ8AjuleiT4vAk=.webp',
                      '/imgs/store/eco-digital/AvEbY4SX8gwP2SzENbSen8dnT_kTrrk8VN6siqp1B2I=.webp',
                      '/imgs/store/eco-digital/D_Ec0HTDnnSvukUxwY-fJNRDhAjAWxtRnjMmkr63vlk=.webp',
                      '/imgs/store/eco-digital/LQ5WGOrIkQPzbXSfWupAIFvVrlyL9lvZoMKc35bbHPw=.webp',
                      '/imgs/store/eco-digital/MPRxOw-bWF57OrAxie9J1CXjpM4HKHUUkoMKHeflN6E=.webp',
                      '/imgs/store/eco-digital/TKAqlW4KL2xV9glNA91iuD_sYEvp2G29eWT4819Ne1g=.webp',
                      '/imgs/store/eco-digital/X5RkmCe76z3hyMvMr6Yvb5RjclkrdDjh2rNvGIRqgWU=.webp',
                      '/imgs/store/eco-digital/YoIBVbbSdfCfRc5654ldAbT_L3N5rKcJk__lYon7YmU=.webp',
                      '/imgs/store/eco-digital/bUr_Wdvkcyq2aH95-oFtusPsS5YMJ2jZ6tjm74mHEr4=.webp',
                      '/imgs/store/eco-digital/ghEYoZQN4q_bq5SzDz94a_q95YbMZS933hJEnuImpmc=.webp',
                      '/imgs/store/eco-digital/hAGC60SxXYmSdiBTJD3XPhMZBocRVBXZyuV-dvt3r7c=.webp',
                      '/imgs/store/eco-digital/os9CHhTSQoGASvA8lsfm-iHYfG4kddPoZP2wYMh47fs=.webp',
                      '/imgs/store/eco-digital/vxuLNp13OWRZXhe-qkwn3UgHCWirk5TzBLhB7q8JJ30=.webp',
                      '/imgs/store/eco-digital/wXqLssPqdR9J0iDhIyQ-NGTDDFm-3DgFKlyQD4ipsEw=.webp',
                      '/imgs/store/eco-digital/zwwZAmSiOHouQPEkkT_Wwz5rhX13CtgkT8LqvNnoJ5w=.webp'
                    ]
                    const currentImg = allEcoDigitalImages[selectedMainImage] || allEcoDigitalImages[0]
                    return (
                      <button 
                        onClick={() => setEnlargedImage({
                          src: currentImg,
                          alt: product.name,
                          index: selectedMainImage,
                          images: allEcoDigitalImages
                        })}
                        className="w-full cursor-pointer hover:opacity-90 transition"
                      >
                        <img 
                          src={currentImg}
                          alt={product.name}
                          className="w-full h-80 object-contain"
                        />
                      </button>
                    )
                  })()}
                </div>
                
                {/* Thumbnail Gallery - 2 rows */}
                <div className="p-3 border-t border-neutral-200">
                  <div className="grid grid-cols-9 gap-1.5">
                    {[
                      '/imgs/store/eco-digital/0eQiBArdHVo_uyy12vmVid9Vc-hB8Msln4h0Oddu4dQ=.webp',
                      '/imgs/store/eco-digital/1k3ig0ezuHcds_30mxxPOgFL-qeSwHc8uuzElo2-GP4=.webp',
                      '/imgs/store/eco-digital/7CWxuO-mB4GevbYtCFnSFfzuCLECtUQ8AjuleiT4vAk=.webp',
                      '/imgs/store/eco-digital/AvEbY4SX8gwP2SzENbSen8dnT_kTrrk8VN6siqp1B2I=.webp',
                      '/imgs/store/eco-digital/D_Ec0HTDnnSvukUxwY-fJNRDhAjAWxtRnjMmkr63vlk=.webp',
                      '/imgs/store/eco-digital/LQ5WGOrIkQPzbXSfWupAIFvVrlyL9lvZoMKc35bbHPw=.webp',
                      '/imgs/store/eco-digital/MPRxOw-bWF57OrAxie9J1CXjpM4HKHUUkoMKHeflN6E=.webp',
                      '/imgs/store/eco-digital/TKAqlW4KL2xV9glNA91iuD_sYEvp2G29eWT4819Ne1g=.webp',
                      '/imgs/store/eco-digital/X5RkmCe76z3hyMvMr6Yvb5RjclkrdDjh2rNvGIRqgWU=.webp',
                      '/imgs/store/eco-digital/YoIBVbbSdfCfRc5654ldAbT_L3N5rKcJk__lYon7YmU=.webp',
                      '/imgs/store/eco-digital/bUr_Wdvkcyq2aH95-oFtusPsS5YMJ2jZ6tjm74mHEr4=.webp',
                      '/imgs/store/eco-digital/ghEYoZQN4q_bq5SzDz94a_q95YbMZS933hJEnuImpmc=.webp',
                      '/imgs/store/eco-digital/hAGC60SxXYmSdiBTJD3XPhMZBocRVBXZyuV-dvt3r7c=.webp',
                      '/imgs/store/eco-digital/os9CHhTSQoGASvA8lsfm-iHYfG4kddPoZP2wYMh47fs=.webp',
                      '/imgs/store/eco-digital/vxuLNp13OWRZXhe-qkwn3UgHCWirk5TzBLhB7q8JJ30=.webp',
                      '/imgs/store/eco-digital/wXqLssPqdR9J0iDhIyQ-NGTDDFm-3DgFKlyQD4ipsEw=.webp',
                      '/imgs/store/eco-digital/zwwZAmSiOHouQPEkkT_Wwz5rhX13CtgkT8LqvNnoJ5w=.webp'
                    ].map((img, index) => (
                      <button
                        key={index}
                        onClick={() => setSelectedMainImage(index)}
                        className={`aspect-square bg-white rounded-md border-2 overflow-hidden transition-all hover:shadow-md ${
                          selectedMainImage === index ? 'border-primary-600 ring-2 ring-primary-200' : 'border-neutral-200'
                        }`}
                      >
                        <img 
                          src={img}
                          alt={`Product view ${index + 1}`}
                          className="w-full h-full object-contain p-0.5"
                        />
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}
            
            {/* Package Preview Section - Always Visible */}
            {isEcoDigital && calculationResult && (
              <div className="bg-white rounded-lg border border-neutral-200 overflow-hidden">
                {/* Tab Headers - Always visible */}
                <div className="flex border-b border-neutral-200">
                  <button
                    onClick={() => setActiveTab('visualization')}
                    className={`flex-1 px-4 py-3 text-sm font-medium transition ${
                      activeTab === 'visualization'
                        ? 'bg-primary-50 text-primary-700 border-b-2 border-primary-600'
                        : 'text-neutral-600 hover:bg-neutral-50'
                    }`}
                  >
                    📦 Package Visualization
                  </button>
                  <button
                    onClick={() => setActiveTab('specifications')}
                    className={`flex-1 px-4 py-3 text-sm font-medium transition ${
                      activeTab === 'specifications'
                        ? 'bg-primary-50 text-primary-700 border-b-2 border-primary-600'
                        : 'text-neutral-600 hover:bg-neutral-50'
                    }`}
                  >
                    📋 Package Specifications
                  </button>
                </div>
                
                {/* Tab Content - Always visible */}
                <div className="p-4 max-h-[600px] overflow-y-auto">
                  {activeTab === 'visualization' ? (
                    /* Package Visualization Content */
                    <div className="space-y-4">
                      {/* Main Product Image */}
                      <div className="text-center">
                        <button 
                          onClick={() => setEnlargedImage({
                            src: productImage,
                            alt: product.name
                          })}
                          className="bg-neutral-50 rounded-lg p-4 mb-2 cursor-pointer hover:bg-neutral-100 transition w-full"
                        >
                          <img 
                            src={productImage}
                            alt={product.name}
                            className="w-full h-48 object-contain"
                          />
                        </button>
                        <p className="text-sm font-semibold text-neutral-800">Main Package</p>
                        <p className="text-xs text-neutral-500">{product.name}</p>
                      </div>
                      
                      {/* Grid: Material, Size, Closure, Surface, Barrier, Stiffness */}
                      <div className="grid grid-cols-3 gap-3">
                        {/* Material */}
                        <div className="text-center">
                          <button 
                            onClick={() => setEnlargedImage({
                              src: selectedMaterial === 'PCR or Bio Plastic' 
                                ? '/imgs/store/eco-material/pcr-or-biope.webp'
                                : selectedMaterial === 'Mono Recyclable Plastic'
                                ? '/imgs/store/eco-material/recycle.webp'
                                : '/imgs/store/eco-material/compostable.webp',
                              alt: selectedMaterial
                            })}
                            className="bg-neutral-50 rounded-lg p-3 mb-2 cursor-pointer hover:bg-neutral-100 transition w-full"
                          >
                            <img 
                              src={
                                selectedMaterial === 'PCR or Bio Plastic' 
                                  ? '/imgs/store/eco-material/pcr-or-biope.webp'
                                  : selectedMaterial === 'Mono Recyclable Plastic'
                                  ? '/imgs/store/eco-material/recycle.webp'
                                  : '/imgs/store/eco-material/compostable.webp'
                              }
                              alt={selectedMaterial}
                              className="w-full h-16 object-contain"
                            />
                          </button>
                          <p className="text-xs font-medium text-neutral-700">Material</p>
                          <p className="text-xs text-neutral-500 truncate">{selectedMaterial}</p>
                        </div>
                        
                        {/* Size */}
                        <div className="text-center">
                          <button 
                            onClick={() => setEnlargedImage({
                              src: getSizeImage(selectedSize as EcoSizeType),
                              alt: `Size ${selectedSize}`
                            })}
                            className="bg-neutral-50 rounded-lg p-3 mb-2 cursor-pointer hover:bg-neutral-100 transition w-full"
                          >
                            <img 
                              src={getSizeImage(selectedSize as EcoSizeType)}
                              alt={`Size ${selectedSize}`}
                              className="w-full h-16 object-contain"
                            />
                          </button>
                          <p className="text-xs font-medium text-neutral-700">Size</p>
                          <p className="text-xs text-neutral-500">{selectedSize}</p>
                        </div>
                        
                        {/* Closure */}
                        <div className="text-center">
                          <button 
                            onClick={() => setEnlargedImage({
                              src: selectedClosure === 'No' ? '/imgs/store/closure/no-zipper.webp' :
                                selectedClosure === 'Regular Zipper' ? '/imgs/store/closure/normal-zipper.webp' :
                                selectedClosure === 'One-Sided Zipper' ? '/imgs/store/closure/front-zipper.webp' :
                                selectedClosure === 'Child Resistant Zipper' ? '/imgs/store/closure/child-resistant-zipper.webp' :
                                selectedClosure === 'Slider' ? '/imgs/store/closure/slider-zipper.webp' :
                                selectedClosure === 'Tin Tie' ? '/imgs/store/closure/tin-tie.webp' :
                                selectedClosure === 'Spout' ? '/imgs/store/closure/spout.webp' :
                                '/imgs/store/closure/no-zipper.webp',
                              alt: selectedClosure
                            })}
                            className="bg-neutral-50 rounded-lg p-3 mb-2 cursor-pointer hover:bg-neutral-100 transition w-full"
                          >
                            <img 
                              src={
                                selectedClosure === 'No' ? '/imgs/store/closure/no-zipper.webp' :
                                selectedClosure === 'Regular Zipper' ? '/imgs/store/closure/normal-zipper.webp' :
                                selectedClosure === 'One-Sided Zipper' ? '/imgs/store/closure/front-zipper.webp' :
                                selectedClosure === 'Child Resistant Zipper' ? '/imgs/store/closure/child-resistant-zipper.webp' :
                                selectedClosure === 'Slider' ? '/imgs/store/closure/slider-zipper.webp' :
                                selectedClosure === 'Tin Tie' ? '/imgs/store/closure/tin-tie.webp' :
                                selectedClosure === 'Spout' ? '/imgs/store/closure/spout.webp' :
                                '/imgs/store/closure/no-zipper.webp'
                              }
                              alt={selectedClosure}
                              className="w-full h-16 object-contain"
                            />
                          </button>
                          <p className="text-xs font-medium text-neutral-700">Closure</p>
                          <p className="text-xs text-neutral-500 truncate">{selectedClosure === 'No' ? 'None' : selectedClosure}</p>
                        </div>
                        
                        {/* Surface */}
                        <div className="text-center">
                          <button 
                            onClick={() => setEnlargedImage({
                              src: getSurfaceImage(selectedSurface),
                              alt: selectedSurface
                            })}
                            className="bg-neutral-50 rounded-lg p-3 mb-2 cursor-pointer hover:bg-neutral-100 transition w-full"
                          >
                            <img 
                              src={getSurfaceImage(selectedSurface)}
                              alt={selectedSurface}
                              className="w-full h-16 object-contain"
                            />
                          </button>
                          <p className="text-xs font-medium text-neutral-700">Surface</p>
                          <p className="text-xs text-neutral-500 truncate">{selectedSurface}</p>
                        </div>
                        
                        {/* Barrier - Placeholder for future image */}
                        <div className="text-center">
                          <div className="bg-neutral-50 rounded-lg p-3 mb-2 w-full h-[88px] flex items-center justify-center">
                            <div className="text-neutral-400 text-2xl">🛡️</div>
                          </div>
                          <p className="text-xs font-medium text-neutral-700">Barrier</p>
                          <p className="text-xs text-neutral-500 truncate">
                            {selectedBarrier === 'mid clear mid barrier (Optional Window)' ? 'Mid' :
                             selectedBarrier === 'metalised high barrier (No Window)' ? 'High' : 'Highest'}
                          </p>
                        </div>
                        
                        {/* Stiffness - Placeholder for future image */}
                        <div className="text-center">
                          <div className="bg-neutral-50 rounded-lg p-3 mb-2 w-full h-[88px] flex items-center justify-center">
                            <div className="text-neutral-400 text-2xl">💪</div>
                          </div>
                          <p className="text-xs font-medium text-neutral-700">Stiffness</p>
                          <p className="text-xs text-neutral-500 truncate">
                            {selectedStiffness === 'Without Paper Lining (Softer)' ? 'Softer' : 'Stiffer'}
                          </p>
                        </div>
                        
                        {/* Valve - if selected */}
                        {selectedValve === 'Yes' && (
                          <div className="text-center">
                            <div className="bg-neutral-50 rounded-lg p-3 mb-2 w-full h-[88px] flex items-center justify-center">
                              <div className="text-neutral-400 text-2xl">💨</div>
                            </div>
                            <p className="text-xs font-medium text-neutral-700">Valve</p>
                            <p className="text-xs text-neutral-500">Degassing</p>
                          </div>
                        )}
                        
                        {/* Laser Scoring - if selected */}
                        {selectedLaserScoring === 'Yes' && (
                          <div className="text-center">
                            <button 
                              onClick={() => setEnlargedImage({
                                src: '/imgs/store/additional/laser-tear.webp',
                                alt: 'Laser Scoring'
                              })}
                              className="bg-neutral-50 rounded-lg p-3 mb-2 cursor-pointer hover:bg-neutral-100 transition w-full"
                            >
                              <img 
                                src="/imgs/store/additional/laser-tear.webp"
                                alt="Laser Scoring"
                                className="w-full h-16 object-contain"
                              />
                            </button>
                            <p className="text-xs font-medium text-neutral-700">Laser</p>
                            <p className="text-xs text-neutral-500">Scoring</p>
                          </div>
                        )}
                      </div>
                    </div>
                  ) : (
                    /* Package Specifications Content - Full Details */
                    <dl className="grid grid-cols-1 gap-y-3 text-sm">
                      <div className="grid grid-cols-3 gap-2">
                        <dt className="text-neutral-500 col-span-1">Total Quantity</dt>
                        <dd className="text-neutral-900 col-span-2">
                          {calculationResult.price.quantityUnits.toLocaleString()} (Digital print) pieces
                        </dd>
                      </div>

                      <div className="grid grid-cols-3 gap-2">
                        <dt className="text-neutral-500 col-span-1">Total Designs</dt>
                        <dd className="text-neutral-900 col-span-2">
                          {calculationResult.price.designCount} {calculationResult.price.designCount === 1 ? 'type' : 'types'}
                        </dd>
                      </div>

                      <div className="grid grid-cols-3 gap-2">
                        <dt className="text-neutral-500 col-span-1">Package Type</dt>
                        <dd className="text-neutral-900 col-span-2">
                          {calculationResult.package.shapeLabel}
                        </dd>
                      </div>

                      <div className="grid grid-cols-3 gap-2">
                        <dt className="text-neutral-500 col-span-1">Package Size</dt>
                        <dd className="text-neutral-900 col-span-2">
                          {calculationResult.package.sizeDisplay}
                        </dd>
                      </div>

                      <div className="grid grid-cols-3 gap-2">
                        <dt className="text-neutral-500 col-span-1">Material</dt>
                        <dd className="text-neutral-900 col-span-2">
                          {calculationResult.package.materialTypeLabel}
                        </dd>
                      </div>

                      <div className="grid grid-cols-3 gap-2">
                        <dt className="text-neutral-500 col-span-1">Barrier Type</dt>
                        <dd className="text-neutral-900 col-span-2">
                          {selectedBarrier}
                        </dd>
                      </div>

                      <div className="grid grid-cols-3 gap-2">
                        <dt className="text-neutral-500 col-span-1">Structure</dt>
                        <dd className="text-neutral-900 col-span-2">
                          {(() => {
                            const structureInfo = getMaterialStructureInfo(
                              selectedMaterial as any,
                              selectedBarrier,
                              selectedStiffness
                            )
                            return structureInfo?.structure || calculationResult.package.materialStructure
                          })()}
                        </dd>
                      </div>

                      <div className="grid grid-cols-3 gap-2">
                        <dt className="text-neutral-500 col-span-1">Thickness</dt>
                        <dd className="text-neutral-900 col-span-2">
                          {(() => {
                            const structureInfo = getMaterialStructureInfo(
                              selectedMaterial as any,
                              selectedBarrier,
                              selectedStiffness
                            )
                            return structureInfo?.thickness || '100 micron or 4 mil'
                          })()}
                        </dd>
                      </div>

                      <div className="grid grid-cols-3 gap-2">
                        <dt className="text-neutral-500 col-span-1">OTR</dt>
                        <dd className="text-neutral-900 col-span-2">
                          {(() => {
                            const structureInfo = getMaterialStructureInfo(
                              selectedMaterial as any,
                              selectedBarrier,
                              selectedStiffness
                            )
                            return structureInfo?.otr || calculationResult.package.barrierProperties.otr
                          })()}
                        </dd>
                      </div>

                      <div className="grid grid-cols-3 gap-2">
                        <dt className="text-neutral-500 col-span-1">WVTR</dt>
                        <dd className="text-neutral-900 col-span-2">
                          {(() => {
                            const structureInfo = getMaterialStructureInfo(
                              selectedMaterial as any,
                              selectedBarrier,
                              selectedStiffness
                            )
                            return structureInfo?.wvtr || calculationResult.package.barrierProperties.wvtr
                          })()}
                        </dd>
                      </div>

                      <div className="grid grid-cols-3 gap-2">
                        <dt className="text-neutral-500 col-span-1">Stiffness</dt>
                        <dd className="text-neutral-900 col-span-2">
                          {selectedStiffness}
                        </dd>
                      </div>

                      <div className="grid grid-cols-3 gap-2">
                        <dt className="text-neutral-500 col-span-1">Reclosable Option</dt>
                        <dd className="text-neutral-900 col-span-2">
                          {selectedClosure === 'No' ? 'None' : selectedClosure}
                        </dd>
                      </div>

                      <div className="grid grid-cols-3 gap-2">
                        <dt className="text-neutral-500 col-span-1">Surface Treatment</dt>
                        <dd className="text-neutral-900 col-span-2">
                          {calculationResult.package.surface}
                        </dd>
                      </div>

                      <div className="grid grid-cols-3 gap-2">
                        <dt className="text-neutral-500 col-span-1">Additional Features</dt>
                        <dd className="text-neutral-900 col-span-2">
                          {calculationResult.package.additional}
                        </dd>
                      </div>

                      <div className="grid grid-cols-3 gap-2">
                        <dt className="text-neutral-500 col-span-1">Shipping Method</dt>
                        <dd className="text-neutral-900 col-span-2">
                          {calculationResult.price.shippingMethod}
                        </dd>
                      </div>
                    </dl>
                  )}
                </div>
              </div>
            )}
            
            {/* Testimonial Section - Desktop Only, Always Expanded */}
            <div className="hidden lg:block bg-white rounded-lg border border-neutral-200 shadow-sm overflow-hidden">
              <div className="p-4">
                <h3 className="text-lg font-semibold text-neutral-900 flex items-center gap-2">
                  <span className="text-2xl">💬</span>
                  Customer Testimonials
                </h3>
              </div>
              <div className="px-6 pb-6 space-y-4 max-h-[500px] overflow-y-auto">
                {/* Real Testimonials */}
                {TESTIMONIALS.map((testimonial) => (
                  <div key={testimonial.id} className="bg-neutral-50 rounded-lg p-4 border-l-4 border-primary-500">
                    <div className="flex items-start gap-3 mb-2">
                      <img 
                        src={testimonial.ownerImage} 
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full flex-shrink-0 object-cover"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement
                          target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(testimonial.name)}&background=22c55e&color=fff&size=48`
                        }}
                      />
                      <div className="flex-1">
                        <div className="font-semibold text-neutral-900">{testimonial.name}</div>
                        <div className="text-xs text-neutral-500">
                          {testimonial.company ? `${testimonial.role}, ${testimonial.company}` : 'Verified Buyer'}
                        </div>
                      </div>
                      <div className="flex text-yellow-400">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-current" />
                        ))}
                      </div>
                    </div>
                    <p className="text-sm text-neutral-700 italic">
                      "{testimonial.shortQuote}"
                    </p>
                    <div className="text-xs text-neutral-400 mt-2">{testimonial.extraInfo}</div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Customer Samples & Shape Reference - Below Testimonials for Eco Digital */}
            {isEcoDigital && (
              <div className="hidden lg:block space-y-4">
                {/* Pouch Shape Reference */}
                {product.images.filter(img => img.includes('pouch shape')).length > 0 && (
                  <div className="bg-white rounded-lg border border-neutral-200 shadow-sm overflow-hidden">
                    <div className="p-4">
                      <h3 className="text-sm font-semibold text-neutral-700 flex items-center gap-2">
                        <span className="text-lg">📐</span>
                        Pouch Shape Reference
                      </h3>
                    </div>
                    <div className="px-4 pb-4">
                      <div className="grid grid-cols-1 gap-2">
                        {product.images.filter(img => img.includes('pouch shape')).map((img, index) => (
                          <button
                            key={index}
                            onClick={() => setEnlargedImage({ src: img, alt: 'Pouch Shape Reference' })}
                            className="bg-neutral-50 rounded-lg p-3 hover:bg-neutral-100 transition cursor-pointer"
                          >
                            <img src={img} alt="Pouch Shape" className="w-full h-24 object-contain" />
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
                
                {/* Customer Samples Gallery */}
                <div className="bg-white rounded-lg border border-neutral-200 shadow-sm overflow-hidden">
                  <div className="p-4">
                    <h3 className="text-sm font-semibold text-neutral-700 flex items-center gap-2">
                      <span className="text-lg">📸</span>
                      Customer Samples
                    </h3>
                  </div>
                  <div className="px-4 pb-4">
                    <div className="grid grid-cols-6 gap-1.5">
                      {[
                        'a_blend_coffee_family_group_4850129.webp',
                        'a_blend4_coffee_functional_closeup_9237259.webp',
                        'a_natures_touch_fruit_family_0232483.webp',
                        'Arielle.webp', 'David.webp', 'Holly.webp',
                        'Leo.webp', 'Nicole.webp', 'Paul.webp',
                        'Remi.webp', 'Richard.webp', 'Steph.webp'
                      ].map((img, index) => (
                        <button
                          key={index}
                          onClick={() => setEnlargedImage({ src: `/imgs/store/customer-sample/${img}`, alt: 'Customer Sample' })}
                          className="aspect-square bg-neutral-50 rounded-md overflow-hidden hover:opacity-80 transition cursor-pointer"
                        >
                          <img src={`/imgs/store/customer-sample/${img}`} alt="Customer Sample" className="w-full h-full object-cover" />
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Right Column - Product Options */}
          <div className="space-y-6">
            {/* Price Section - Hide on desktop since we have fixed top bar */}
            {isEcoDigital && (
              <div className="lg:hidden bg-gradient-to-br from-primary-50 to-primary-100 rounded-xl border-2 border-primary-200 shadow-lg overflow-hidden">
                {/* Collapsible Header with Unit Price */}
                <div 
                  className="flex items-center justify-between px-3 py-3 cursor-pointer hover:bg-primary-100 transition"
                  onClick={() => setIsRightCollapsed(!isRightCollapsed)}
                >
                  <div className="flex items-center gap-2 min-w-0 flex-1">
                    <span className="text-sm font-semibold text-primary-800 whitespace-nowrap">💰 Total</span>
                    {isRightCollapsed && (
                      <span className="text-sm font-bold text-primary-700 truncate">${unitPrice.toFixed(2)}/pc</span>
                    )}
                  </div>
                  <div className="flex-shrink-0 ml-2">
                    {isRightCollapsed ? (
                      <ChevronDown className="w-5 h-5 text-primary-600" />
                    ) : (
                      <ChevronUp className="w-5 h-5 text-primary-600" />
                    )}
                  </div>
                </div>
                
                {/* Collapsible Content */}
                <div className={`px-6 pb-6 transition-all duration-300 ${isRightCollapsed ? 'hidden' : ''}`}>
                  <div className="text-4xl font-bold text-primary-700 mb-3">US${Math.round(totalPrice).toLocaleString()}</div>
                  {calculationResult && (
                    <div className="grid grid-cols-2 gap-3 text-sm">
                      <div className="bg-white bg-opacity-60 rounded-lg p-3">
                        <div className="text-neutral-600 text-xs mb-1">Unit Price</div>
                        <div className="font-semibold text-neutral-800">${unitPrice.toFixed(4)}/pc</div>
                      </div>
                      <div className="bg-white bg-opacity-60 rounded-lg p-3">
                        <div className="text-neutral-600 text-xs mb-1">Quantity</div>
                        <div className="font-semibold text-neutral-800">{calculationResult.price.quantityUnits.toLocaleString()} pcs</div>
                      </div>
                      <div className="bg-white bg-opacity-60 rounded-lg p-3">
                        <div className="text-neutral-600 text-xs mb-1">Designs</div>
                        <div className="font-semibold text-neutral-800">{calculationResult.price.designCount}</div>
                      </div>
                      <div className="bg-white bg-opacity-60 rounded-lg p-3">
                        <div className="text-neutral-600 text-xs mb-1">Shipping</div>
                        <div className="font-semibold text-neutral-800 text-xs">{calculationResult.price.shippingMethod}</div>
                      </div>
                    </div>
                  )}
                  <div className="text-xs text-primary-700 mt-3 bg-white bg-opacity-40 rounded-lg p-2 text-center">
                    ✓ Shipping Included
                  </div>
                </div>
              </div>
            )}
            
            {product.badge && <span className="inline-block bg-primary-100 text-primary-700 text-sm px-4 py-1 rounded-full font-medium">{product.badge}</span>}
            <h1 className="text-3xl font-bold text-neutral-900">{product.name}</h1>
            
            <div className="flex items-center gap-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className={`h-5 w-5 ${i < Math.floor(product.rating) ? 'text-yellow-400 fill-yellow-400' : 'text-neutral-300'}`} />
                ))}
              </div>
              <span className="text-neutral-600">({product.reviews} reviews)</span>
            </div>

            <p className="text-neutral-600">{product.description}</p>

            {/* Dynamic Product Description - Problem → Solution → Features */}
            {isEcoDigital && ecoProduct && (
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200 rounded-xl overflow-hidden">
                {(() => {
                  const dynamicInfo = generateDynamicDescription({
                    shape: ecoProduct.shape, material: selectedMaterial, size: selectedSize,
                    closure: selectedClosure, surface: selectedSurface, barrier: selectedBarrier,
                    stiffness: selectedStiffness, productName: product.name
                  });
                  return (
                    <>
                      {/* Problem */}
                      <div className="px-5 pt-5 pb-3">
                        <div className="flex items-start gap-3">
                          <div className="w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                            <span className="text-amber-600 text-sm">❓</span>
                          </div>
                          <p className="text-sm text-neutral-700 leading-relaxed">{dynamicInfo.problem}</p>
                        </div>
                      </div>
                      {/* Solution */}
                      <div className="px-5 pb-3">
                        <div className="flex items-start gap-3">
                          <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                            <span className="text-green-600 text-sm">✓</span>
                          </div>
                          <p className="text-sm text-green-800 leading-relaxed font-medium">{dynamicInfo.solution}</p>
                        </div>
                      </div>
                      {/* Material & Size */}
                      <div className="px-5 pb-3 space-y-2">
                        <div className="bg-white/60 rounded-lg p-3 text-xs text-neutral-700">
                          <span className="font-semibold text-green-700">Material:</span> {dynamicInfo.materialInfo}
                        </div>
                        <div className="grid grid-cols-2 gap-2">
                          <div className="bg-white/60 rounded-lg p-2 text-xs text-neutral-600">
                            <span className="font-medium">📐 {dynamicInfo.sizeInfo}</span>
                          </div>
                          <div className="bg-white/60 rounded-lg p-2 text-xs text-neutral-600">
                            <span className="font-medium">🔒 {dynamicInfo.closureInfo}</span>
                          </div>
                        </div>
                      </div>
                      {/* Features */}
                      <div className="px-5 pb-4">
                        <div className="grid grid-cols-2 gap-2">
                          {dynamicInfo.features.slice(0, 6).map((feature, i) => (
                            <div key={i} className="flex items-center gap-1.5 text-xs text-green-700">
                              <Check className="w-3.5 h-3.5 text-green-600 flex-shrink-0" />
                              <span>{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      {/* Footer */}
                      <div className="bg-green-100/50 px-5 py-3 border-t border-green-200">
                        <div className="flex flex-wrap items-center gap-2 text-xs">
                          <span className="bg-green-600 text-white px-2 py-0.5 rounded-full font-medium">{dynamicInfo.certifications}</span>
                          <span className="text-green-700"><span className="font-medium">Ideal for:</span> {dynamicInfo.idealFor}</span>
                        </div>
                      </div>
                    </>
                  );
                })()}
              </div>
            )}

            {/* Options */}
            {isEcoDigital && ecoProduct && (
              <div className="space-y-4 pt-4 border-t">
                <div className="group relative">
                  <label className="block text-sm font-medium text-neutral-700 mb-2 flex items-center gap-2">
                    Eco Material Type
                    <span className="text-neutral-400 text-xs cursor-help">ℹ️</span>
                  </label>
                  {/* Tooltip */}
                  <div className="invisible group-hover:visible absolute left-0 top-full mt-1 w-72 bg-neutral-800 text-white text-xs rounded-lg p-3 shadow-lg z-50">
                    <div className="font-semibold mb-1">Material Type Guide:</div>
                    <div className="mb-2">
                      <strong>PCR/Bio Plastic:</strong> 30% lower carbon footprint, uses recycled or plant-based materials
                    </div>
                    <div className="mb-2">
                      <strong>Mono Recyclable:</strong> 40% lower carbon footprint, 95% recyclable, single-material construction
                    </div>
                    <div>
                      <strong>Biodegradable:</strong> Breaks down naturally, compostable, returns nutrients to soil
                    </div>
                  </div>
                  
                  {/* Image Grid Selection */}
                  <div className="grid grid-cols-3 gap-3 mb-3">
                    {[
                      { value: 'PCR or Bio Plastic', label: 'PCR/Bio', img: '/imgs/store/eco-material/pcr-or-biope.webp' },
                      { value: 'Mono Recyclable Plastic', label: 'Recyclable', img: '/imgs/store/eco-material/recycle.webp' },
                      { value: 'Biodegradable and Compostable', label: 'Compostable', img: '/imgs/store/eco-material/compostable.webp' }
                    ].map(option => (
                      <button
                        key={option.value}
                        type="button"
                        onClick={() => setSelectedMaterial(option.value)}
                        className={`relative p-3 border-2 rounded-lg transition-all hover:shadow-md ${
                          selectedMaterial === option.value
                            ? 'border-primary-600 bg-primary-50'
                            : 'border-neutral-200 hover:border-primary-300'
                        }`}
                      >
                        <div className="aspect-square bg-white rounded-lg mb-2 flex items-center justify-center relative group/img">
                          <img src={option.img} alt={option.label} className="max-w-full max-h-full object-contain p-2" />
                          <button
                            type="button"
                            onClick={(e) => { e.stopPropagation(); setEnlargedImage({ src: option.img, alt: option.label }); }}
                            className="absolute bottom-1 right-1 bg-white/90 rounded-full p-1 opacity-0 group-hover/img:opacity-100 transition shadow hover:bg-primary-50"
                          >
                            <ZoomIn className="w-3 h-3 text-neutral-600" />
                          </button>
                        </div>
                        <div className="text-xs font-medium text-neutral-700 text-center">{option.label}</div>
                        {selectedMaterial === option.value && (
                          <div className="absolute top-1 right-1 bg-primary-600 text-white rounded-full w-5 h-5 flex items-center justify-center">
                            <Check className="w-3 h-3" />
                          </div>
                        )}
                      </button>
                    ))}
                  </div>
                  
                  {/* Dropdown Option */}
                  <div className="flex gap-3 items-center">
                    <select value={selectedMaterial} onChange={e => setSelectedMaterial(e.target.value)} className="flex-1 p-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500">
                      <option value="PCR or Bio Plastic">PCR or Bio Plastic</option>
                      <option value="Mono Recyclable Plastic">Mono Recyclable Plastic</option>
                      <option value="Biodegradable and Compostable">Biodegradable and Compostable</option>
                    </select>
                    {/* Material Thumbnail */}
                    <div className="flex-shrink-0 bg-white rounded-lg p-2 w-16 h-16 flex items-center justify-center border-2 border-primary-600">
                      <img 
                        src={selectedMaterial === 'PCR or Bio Plastic' 
                          ? '/imgs/store/eco-material/pcr-or-biope.webp'
                          : selectedMaterial === 'Mono Recyclable Plastic'
                          ? '/imgs/store/eco-material/recycle.webp'
                          : '/imgs/store/eco-material/compostable.webp'
                        } 
                        alt={selectedMaterial} 
                        className="max-w-full max-h-full object-contain"
                      />
                    </div>
                  </div>
                </div>

                <div className="group relative">
                  <label className="block text-sm font-medium text-neutral-700 mb-2 flex items-center gap-2">
                    {getSizeLabel}
                    <span className="text-neutral-400 text-xs cursor-help">ℹ️</span>
                  </label>
                  {/* Tooltip */}
                  <div className="invisible group-hover:visible absolute left-0 top-full mt-1 w-72 bg-neutral-800 text-white text-xs rounded-lg p-3 shadow-lg z-50">
                    <div className="font-semibold mb-1">Package Size Guide:</div>
                    • <strong>XXXS-XXS:</strong> Trial sizes, samples, single-serve products<br/>
                    • <strong>XS-S:</strong> Specialty foods, premium coffee, small portions<br/>
                    • <strong>M-L:</strong> Standard retail products, family-sized packs<br/>
                    • <strong>XL-XXL:</strong> Bulk items, wholesale, subscription products
                  </div>
                  
                  {/* Image Grid Selection */}
                  <div className="grid grid-cols-4 gap-2 mb-3">
                    {sizeOptions.map(size => (
                      <button
                        key={size.value}
                        type="button"
                        onClick={() => setSelectedSize(size.value)}
                        className={`relative p-2 border-2 rounded-lg transition-all hover:shadow-md ${
                          selectedSize === size.value
                            ? 'border-primary-600 bg-primary-50'
                            : 'border-neutral-200 hover:border-primary-300'
                        }`}
                      >
                        <div className="aspect-square bg-white rounded-lg mb-1 flex items-center justify-center relative group/img">
                          <img src={getSizeImage(size.value as EcoSizeType)} alt={size.label} className="max-w-full max-h-full object-contain p-1" />
                          <button
                            type="button"
                            onClick={(e) => { e.stopPropagation(); setEnlargedImage({ src: getSizeImage(size.value as EcoSizeType), alt: size.label }); }}
                            className="absolute bottom-1 right-1 bg-white/90 rounded-full p-1 opacity-0 group-hover/img:opacity-100 transition shadow hover:bg-primary-50"
                          >
                            <ZoomIn className="w-3 h-3 text-neutral-600" />
                          </button>
                        </div>
                        <div className="text-xs font-medium text-neutral-700 text-center">{size.value}</div>
                        {selectedSize === size.value && (
                          <div className="absolute top-1 right-1 bg-primary-600 text-white rounded-full w-4 h-4 flex items-center justify-center">
                            <Check className="w-2.5 h-2.5" />
                          </div>
                        )}
                      </button>
                    ))}
                  </div>
                  
                  {/* Dropdown Option */}
                  <div className="flex gap-3 items-start">
                    <select value={selectedSize} onChange={e => setSelectedSize(e.target.value)} className="flex-1 p-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500">
                      {sizeOptions.map(size => (
                        <option key={size.value} value={size.value}>{size.label}</option>
                      ))}
                    </select>
                    {/* Size Preview Thumbnail */}
                    <div className="flex-shrink-0 bg-white rounded-lg p-2 w-16 h-16 flex items-center justify-center border-2 border-primary-600">
                      <img 
                        src={getSizeImage(selectedSize as EcoSizeType)} 
                        alt={`Size ${selectedSize}`} 
                        className="max-w-full max-h-full object-contain"
                      />
                    </div>
                  </div>
                </div>

                <div className="group relative">
                  <label className="block text-sm font-medium text-neutral-700 mb-2 flex items-center gap-2">
                    Closure
                    <span className="text-neutral-400 text-xs cursor-help">ℹ️</span>
                  </label>
                  {/* Tooltip */}
                  <div className="invisible group-hover:visible absolute left-0 top-full mt-1 w-72 bg-neutral-800 text-white text-xs rounded-lg p-3 shadow-lg z-50">
                    <div className="font-semibold mb-1">Closure Options:</div>
                    • <strong>Regular Zipper:</strong> Resealable, maintains freshness<br/>
                    • <strong>One-Sided:</strong> Easy pouring, front access<br/>
                    • <strong>Child Resistant:</strong> Safety feature for medications<br/>
                    • <strong>Slider:</strong> Premium smooth action<br/>
                    • <strong>Tin Tie:</strong> Cost-effective for coffee/tea<br/>
                    • <strong>Spout:</strong> Perfect for liquids, precise pouring
                  </div>
                  
                  {/* Image Grid Selection */}
                  <div className="grid grid-cols-4 gap-2 mb-3">
                    {[
                      { value: 'No' as ClosureType, label: 'No Closure', img: '/imgs/store/closure/no-zipper.webp' },
                      { value: 'Regular Zipper' as ClosureType, label: 'Regular', img: '/imgs/store/closure/normal-zipper.webp' },
                      { value: 'One-Sided Zipper' as ClosureType, label: 'One-Sided', img: '/imgs/store/closure/front-zipper.webp' },
                      { value: 'Child Resistant Zipper' as ClosureType, label: 'Child Safe', img: '/imgs/store/closure/child-resistant-zipper.webp' },
                      { value: 'Slider' as ClosureType, label: 'Slider', img: '/imgs/store/closure/slider-zipper.webp' },
                      { value: 'Tin Tie' as ClosureType, label: 'Tin Tie', img: '/imgs/store/closure/tin-tie.webp' },
                      { value: 'Spout' as ClosureType, label: 'Spout', img: '/imgs/store/closure/spout.webp' },
                      { value: 'Adhesive Tape' as ClosureType, label: 'Adhesive Tape', img: '/imgs/store/closure/adhesive-tap.webp' }
                    ].map(option => (
                      <button
                        key={option.value}
                        type="button"
                        onClick={() => setSelectedClosure(option.value)}
                        className={`relative p-2 border-2 rounded-lg transition-all hover:shadow-md ${
                          selectedClosure === option.value
                            ? 'border-primary-600 bg-primary-50'
                            : 'border-neutral-200 hover:border-primary-300'
                        }`}
                      >
                        <div className="aspect-square bg-white rounded-lg mb-1 flex items-center justify-center relative group/img">
                          <img src={option.img} alt={option.label} className="max-w-full max-h-full object-contain p-1" />
                          <button
                            type="button"
                            onClick={(e) => { e.stopPropagation(); setEnlargedImage({ src: option.img, alt: option.label }); }}
                            className="absolute bottom-1 right-1 bg-white/90 rounded-full p-1 opacity-0 group-hover/img:opacity-100 transition shadow hover:bg-primary-50"
                          >
                            <ZoomIn className="w-3 h-3 text-neutral-600" />
                          </button>
                        </div>
                        <div className="text-xs font-medium text-neutral-700 text-center truncate">{option.label}</div>
                        {selectedClosure === option.value && (
                          <div className="absolute top-1 right-1 bg-primary-600 text-white rounded-full w-4 h-4 flex items-center justify-center">
                            <Check className="w-2.5 h-2.5" />
                          </div>
                        )}
                      </button>
                    ))}
                  </div>
                  
                  {/* Dropdown Option */}
                  <div className="flex gap-3 items-center">
                    <select value={selectedClosure} onChange={e => setSelectedClosure(e.target.value as ClosureType)} className="flex-1 p-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500">
                      <option value="No">No Closure</option>
                      <option value="Regular Zipper">Regular Zipper</option>
                      <option value="One-Sided Zipper">One-Sided Zipper</option>
                      <option value="Child Resistant Zipper">Child Resistant Zipper</option>
                      <option value="Slider">Slider Zipper</option>
                      <option value="Tin Tie">Tin Tie</option>
                      <option value="Spout">Spout</option>
                      <option value="Adhesive Tape">Adhesive Tape</option>
                    </select>
                    {/* Closure Image Thumbnail */}
                    <div className="flex-shrink-0 bg-white rounded-lg p-2 w-16 h-16 flex items-center justify-center border-2 border-primary-600">
                      <img 
                        src={
                          selectedClosure === 'No' ? '/imgs/store/closure/no-zipper.webp' :
                          selectedClosure === 'Regular Zipper' ? '/imgs/store/closure/normal-zipper.webp' :
                          selectedClosure === 'One-Sided Zipper' ? '/imgs/store/closure/front-zipper.webp' :
                          selectedClosure === 'Child Resistant Zipper' ? '/imgs/store/closure/child-resistant-zipper.webp' :
                          selectedClosure === 'Slider' ? '/imgs/store/closure/slider-zipper.webp' :
                          selectedClosure === 'Tin Tie' ? '/imgs/store/closure/tin-tie.webp' :
                          selectedClosure === 'Spout' ? '/imgs/store/closure/spout.webp' :
                          selectedClosure === 'Adhesive Tape' ? '/imgs/store/closure/adhesive-tap.webp' :
                          '/imgs/store/closure/no-zipper.webp'
                        } 
                        alt={`${selectedClosure} closure`} 
                        className="max-w-full max-h-full object-contain"
                      />
                    </div>
                  </div>
                </div>

                <div className="group relative">
                  <label className="block text-sm font-medium text-neutral-700 mb-2 flex items-center gap-2">
                    Surface
                    <span className="text-neutral-400 text-xs cursor-help">ℹ️</span>
                  </label>
                  {/* Tooltip */}
                  <div className="invisible group-hover:visible absolute left-0 top-full mt-1 w-72 bg-neutral-800 text-white text-xs rounded-lg p-3 shadow-lg z-50">
                    <div className="font-semibold mb-1">Surface Treatment:</div>
                    • <strong>Glossy:</strong> Vibrant colors, classic finish<br/>
                    • <strong>Matt:</strong> Elegant, reduced glare, modern look<br/>
                    • <strong>Metallic:</strong> Premium metallic appearance<br/>
                    • <strong>Soft Touch:</strong> Luxurious velvet-like feel<br/>
                    • <strong>Emboss:</strong> Raised/depressed design, tactile<br/>
                    • <strong>Stamp Foil:</strong> Metallic accents, luxury effect
                  </div>
                  
                  {/* Image Grid Selection */}
                  <div className="grid grid-cols-3 gap-3 mb-3">
                    {[
                      { value: 'Glossy' as SurfaceType, label: 'Glossy' },
                      { value: 'Matt' as SurfaceType, label: 'Matt' },
                      { value: 'Metallic' as SurfaceType, label: 'Metallic' },
                      { value: 'Soft Touch' as SurfaceType, label: 'Soft Touch' },
                      { value: 'Emboss' as SurfaceType, label: 'Emboss' },
                      { value: 'Stamp Foil' as SurfaceType, label: 'Stamp Foil' }
                    ].map(option => (
                      <button
                        key={option.value}
                        type="button"
                        onClick={() => setSelectedSurface(option.value)}
                        className={`relative p-2 border-2 rounded-lg transition-all hover:shadow-md ${
                          selectedSurface === option.value
                            ? 'border-primary-600 bg-primary-50'
                            : 'border-neutral-200 hover:border-primary-300'
                        }`}
                      >
                        <div className="aspect-square bg-white rounded-lg mb-1 flex items-center justify-center relative group/img">
                          <img src={getSurfaceImage(option.value)} alt={option.label} className="max-w-full max-h-full object-contain p-1" />
                          <button
                            type="button"
                            onClick={(e) => { e.stopPropagation(); setEnlargedImage({ src: getSurfaceImage(option.value), alt: option.label }); }}
                            className="absolute bottom-1 right-1 bg-white/90 rounded-full p-1 opacity-0 group-hover/img:opacity-100 transition shadow hover:bg-primary-50"
                          >
                            <ZoomIn className="w-3 h-3 text-neutral-600" />
                          </button>
                        </div>
                        <div className="text-xs font-medium text-neutral-700 text-center">{option.label}</div>
                        {selectedSurface === option.value && (
                          <div className="absolute top-1 right-1 bg-primary-600 text-white rounded-full w-4 h-4 flex items-center justify-center">
                            <Check className="w-2.5 h-2.5" />
                          </div>
                        )}
                      </button>
                    ))}
                  </div>
                  
                  {/* Dropdown Option */}
                  <div className="flex gap-3 items-center">
                    <select value={selectedSurface} onChange={e => setSelectedSurface(e.target.value as SurfaceType)} className="flex-1 p-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500">
                      <option value="Glossy">Glossy</option>
                      <option value="Matt">Matt</option>
                      <option value="Metallic">Metallic</option>
                      <option value="Soft Touch">Soft Touch</option>
                      <option value="Emboss">Emboss</option>
                      <option value="Stamp Foil">Stamp Foil</option>
                    </select>
                    {/* Surface Preview Thumbnail */}
                    <div className="flex-shrink-0 bg-white rounded-lg p-2 w-16 h-16 flex items-center justify-center border-2 border-primary-600">
                      <img 
                        src={getSurfaceImage(selectedSurface)} 
                        alt={`${selectedSurface} surface`} 
                        className="max-w-full max-h-full object-contain"
                      />
                    </div>
                  </div>
                </div>

                <div className="group relative">
                  <label className="block text-sm font-medium text-neutral-700 mb-2 flex items-center gap-2">
                    Barrier
                    <span className="text-neutral-400 text-xs cursor-help">ℹ️</span>
                  </label>
                  {/* Tooltip */}
                  <div className="invisible group-hover:visible absolute left-0 top-full mt-1 w-80 bg-neutral-800 text-white text-xs rounded-lg p-3 shadow-lg z-50">
                    <div className="font-semibold mb-1">Barrier Protection:</div>
                    <div className="mb-2">
                      <strong>Mid Barrier:</strong> 6-9 months shelf life, clear visibility, good for dry snacks
                    </div>
                    <div className="mb-2">
                      <strong>High Barrier:</strong> 9-12 months, blocks light/oxygen, for coffee/tea/spices
                    </div>
                    <div>
                      <strong>Highest Barrier:</strong> 12-18 months, aluminum layer, maximum protection
                    </div>
                  </div>
                  
                  {/* Button Grid Selection */}
                  <div className="grid grid-cols-3 gap-3 mb-3">
                    {[
                      { value: 'mid clear mid barrier (Optional Window)', label: 'Mid Barrier', sublabel: '(Window)' },
                      { value: 'metalised high barrier (No Window)', label: 'High Barrier', sublabel: '(No Window)' },
                      { value: 'Aluminum highest barrier (No Window)', label: 'Highest', sublabel: '(No Window)' }
                    ].map(option => (
                      <button
                        key={option.value}
                        type="button"
                        onClick={() => setSelectedBarrier(option.value)}
                        className={`relative p-3 border-2 rounded-lg transition-all hover:shadow-md text-left ${
                          selectedBarrier === option.value
                            ? 'border-primary-600 bg-primary-50'
                            : 'border-neutral-200 hover:border-primary-300'
                        }`}
                      >
                        <div className="text-sm font-semibold text-neutral-800">{option.label}</div>
                        <div className="text-xs text-neutral-600">{option.sublabel}</div>
                        {selectedBarrier === option.value && (
                          <div className="absolute top-2 right-2 bg-primary-600 text-white rounded-full w-5 h-5 flex items-center justify-center">
                            <Check className="w-3 h-3" />
                          </div>
                        )}
                      </button>
                    ))}
                  </div>
                  
                  {/* Dropdown Option */}
                  <select value={selectedBarrier} onChange={e => setSelectedBarrier(e.target.value)} className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500">
                    <option value="mid clear mid barrier (Optional Window)">Mid Barrier (Window)</option>
                    <option value="metalised high barrier (No Window)">High Barrier (No Window)</option>
                    <option value="Aluminum highest barrier (No Window)">Highest Barrier (No Window)</option>
                  </select>
                </div>

                <div className="group relative">
                  <label className="block text-sm font-medium text-neutral-700 mb-2 flex items-center gap-2">
                    Stiffness and Thickness
                    <span className="text-neutral-400 text-xs cursor-help">ℹ️</span>
                  </label>
                  {/* Tooltip */}
                  <div className="invisible group-hover:visible absolute left-0 top-full mt-1 w-80 bg-neutral-800 text-white text-xs rounded-lg p-3 shadow-lg z-50">
                    <div className="font-semibold mb-1">Package Stiffness and Thickness:</div>
                    <div className="mb-2">
                      <strong>With Paper Lining (Stiffer):</strong> Better standing stability, premium feel. Adding kraft paper increases thickness by 50-60 micron / 2 mil.
                    </div>
                    <div>
                      <strong>Without Paper (Softer):</strong> More flexible, lighter weight, thinner profile.
                    </div>
                  </div>
                  
                  {/* Button Grid Selection */}
                  <div className="grid grid-cols-2 gap-3 mb-3">
                    {[
                      { value: 'Without Paper Lining (Softer)', label: 'Softer', sublabel: '(No Paper)' },
                      { value: 'With Paper Lining (stiffer)', label: 'Stiffer', sublabel: '(With Paper)' }
                    ].map(option => (
                      <button
                        key={option.value}
                        type="button"
                        onClick={() => setSelectedStiffness(option.value)}
                        className={`relative p-3 border-2 rounded-lg transition-all hover:shadow-md text-left ${
                          selectedStiffness === option.value
                            ? 'border-primary-600 bg-primary-50'
                            : 'border-neutral-200 hover:border-primary-300'
                        }`}
                      >
                        <div className="text-sm font-semibold text-neutral-800">{option.label}</div>
                        <div className="text-xs text-neutral-600">{option.sublabel}</div>
                        {selectedStiffness === option.value && (
                          <div className="absolute top-2 right-2 bg-primary-600 text-white rounded-full w-5 h-5 flex items-center justify-center">
                            <Check className="w-3 h-3" />
                          </div>
                        )}
                      </button>
                    ))}
                  </div>
                  
                  {/* Dropdown Option */}
                  <select value={selectedStiffness} onChange={e => setSelectedStiffness(e.target.value)} className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500">
                    <option value="Without Paper Lining (Softer)">Softer (No Paper)</option>
                    <option value="With Paper Lining (stiffer)">Stiffer (With Paper)</option>
                  </select>
                </div>

                <div className="group relative">
                  <label className="block text-sm font-medium text-neutral-700 mb-2 flex items-center gap-2">
                    Additional Features
                    <span className="text-neutral-400 text-xs cursor-help">ℹ️</span>
                  </label>
                  {/* Tooltip */}
                  <div className="invisible group-hover:visible absolute left-0 top-full mt-1 w-80 bg-neutral-800 text-white text-xs rounded-lg p-3 shadow-lg z-50">
                    <div className="font-semibold mb-1">Additional Features:</div>
                    <div className="mb-2">
                      <strong>Degassing Valve:</strong> Releases gases while preventing air entry, ideal for coffee/tea
                    </div>
                    <div>
                      <strong>Laser Scoring:</strong> Easy-tear lines for convenient opening, professional finish
                    </div>
                  </div>
                  
                  {/* Button Grid Selection - 3 options */}
                  <div className="grid grid-cols-3 gap-2 mb-3">
                    {[
                      { key: 'Valve' as AdditionalType, value: 'valve', label: 'Valve', sublabel: '(Coffee/Tea)', state: selectedValve, setter: setSelectedValve },
                      { key: 'Laser Scoring' as AdditionalType, value: 'laser', label: 'Laser Tear', sublabel: '(Easy Open)', state: selectedLaserScoring, setter: setSelectedLaserScoring },
                      { key: 'Hang Hole' as AdditionalType, value: 'hang', label: 'Hang Hole', sublabel: '(Display)', state: selectedHangHole, setter: setSelectedHangHole }
                    ].map(option => (
                      <button
                        key={option.value}
                        type="button"
                        onClick={() => option.setter(option.state === 'Yes' ? 'No' : 'Yes')}
                        className={`relative p-2 border-2 rounded-lg transition-all hover:shadow-md ${
                          option.state === 'Yes'
                            ? 'border-primary-600 bg-primary-50'
                            : 'border-neutral-200 hover:border-primary-300'
                        }`}
                      >
                        <div className="aspect-square bg-white rounded-lg mb-1 flex items-center justify-center relative group/img">
                          <img src={getAdditionalImage(option.key)} alt={option.label} className="max-w-full max-h-full object-contain p-1" />
                          <button
                            type="button"
                            onClick={(e) => { e.stopPropagation(); setEnlargedImage({ src: getAdditionalImage(option.key), alt: option.label }); }}
                            className="absolute bottom-1 right-1 bg-white/90 rounded-full p-1 opacity-0 group-hover/img:opacity-100 transition shadow hover:bg-primary-50"
                          >
                            <ZoomIn className="w-3 h-3 text-neutral-600" />
                          </button>
                        </div>
                        <div className="text-xs font-medium text-neutral-700 text-center truncate">{option.label}</div>
                        <div className="text-xs text-neutral-500 text-center truncate">{option.sublabel}</div>
                        {option.state === 'Yes' && (
                          <div className="absolute top-1 right-1 bg-primary-600 text-white rounded-full w-4 h-4 flex items-center justify-center">
                            <Check className="w-2.5 h-2.5" />
                          </div>
                        )}
                      </button>
                    ))}
                  </div>
                  
                  {/* Checkbox Options - Keep for accessibility */}
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input type="checkbox" checked={selectedValve === 'Yes'} onChange={e => setSelectedValve(e.target.checked ? 'Yes' : 'No')} className="rounded" />
                      <span>Valve</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input type="checkbox" checked={selectedLaserScoring === 'Yes'} onChange={e => setSelectedLaserScoring(e.target.checked ? 'Yes' : 'No')} className="rounded" />
                      <span>Laser Tear</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input type="checkbox" checked={selectedHangHole === 'Yes'} onChange={e => setSelectedHangHole(e.target.checked ? 'Yes' : 'No')} className="rounded" />
                      <span>Hang Hole</span>
                    </label>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-2">Quantity</label>
                  <select value={selectedQuantity} onChange={e => setSelectedQuantity(e.target.value)} className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500">
                    <option value="1,000 (Digital print)">1,000 (Digital print)</option>
                    <option value="2,000 (Digital print)">2,000 (Digital print)</option>
                    <option value="3,000 (Digital print)">3,000 (Digital print)</option>
                    <option value="5,000 (Flexo print)">5,000 (Flexo print)</option>
                    <option value="10,000 (Flexo print)">10,000 (Flexo print)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-2">Design Count</label>
                  <select value={selectedDesignCount} onChange={e => setSelectedDesignCount(Number(e.target.value))} className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500">
                    <option value={1}>1 Design</option>
                    <option value={2}>2 Designs</option>
                    <option value={3}>3 Designs</option>
                    <option value={4}>4 Designs</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-2">Shipping Method</label>
                  <select value={selectedShipping} onChange={e => setSelectedShipping(e.target.value)} className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500">
                    <option value="Air Freight">Air Freight (Faster)</option>
                    <option value="Sea Freight">Sea Freight (Cheaper)</option>
                    <option value="Dual Shipping">Dual Shipping (Balanced)</option>
                  </select>
                </div>
              </div>
            )}

            {/* Add to Cart */}
            <button onClick={handleAddToCart} disabled={totalPrice <= 0} className="w-full py-4 bg-primary-600 hover:bg-primary-700 disabled:bg-neutral-400 text-white font-semibold rounded-xl transition flex items-center justify-center gap-2">
              <ShoppingCart className="h-5 w-5" /> Add to Cart
            </button>

            {/* Features */}
            <div className="grid grid-cols-2 gap-3 pt-4">
              {product.features.map((feature, i) => (
                <div key={i} className="flex items-center gap-2 text-sm text-neutral-600">
                  <Check className="h-4 w-4 text-primary-500" /> {feature}
                </div>
              ))}
            </div>
          </div>
          </div>
        )}
      </main>

      {/* Desktop Top Fixed Bar - Similar to mobile but at top */}
      {isEcoDigital && (
        <div className="hidden lg:block fixed top-[60px] left-0 right-0 z-40">
          {/* Top Bar with icons */}
          <div className="bg-white border-b border-neutral-200 shadow-sm">
            <div className="max-w-7xl mx-auto px-4">
              <div className="flex items-center justify-between py-2">
                {/* Left: Preview Toggle */}
                <button 
                  onClick={() => setMobileActivePanel(mobileActivePanel === 'preview' ? 'none' : 'preview')}
                  className={`flex items-center gap-2 px-3 py-2 rounded-lg transition ${mobileActivePanel === 'preview' ? 'bg-primary-50 text-primary-700' : 'text-neutral-600 hover:bg-neutral-50'}`}
                >
                  <span className="text-lg">📦</span>
                  <span className="text-sm font-medium">Preview</span>
                  <div className="flex items-center gap-1 ml-2">
                    <img src={productImage} alt="" className="w-6 h-6 object-contain rounded border border-neutral-200" />
                    <img src={selectedMaterial === 'PCR or Bio Plastic' ? '/imgs/store/eco-material/pcr-or-biope.webp' : selectedMaterial === 'Mono Recyclable Plastic' ? '/imgs/store/eco-material/recycle.webp' : '/imgs/store/eco-material/compostable.webp'} alt="" className="w-6 h-6 object-contain rounded border border-neutral-200" />
                    <img src={getSizeImage(selectedSize as EcoSizeType)} alt="" className="w-6 h-6 object-contain rounded border border-neutral-200" />
                    <img src={selectedClosure === 'No' ? '/imgs/store/closure/no-zipper.webp' : selectedClosure === 'Regular Zipper' ? '/imgs/store/closure/normal-zipper.webp' : selectedClosure === 'One-Sided Zipper' ? '/imgs/store/closure/front-zipper.webp' : selectedClosure === 'Child Resistant Zipper' ? '/imgs/store/closure/child-resistant-zipper.webp' : selectedClosure === 'Slider' ? '/imgs/store/closure/slider-zipper.webp' : selectedClosure === 'Tin Tie' ? '/imgs/store/closure/tin-tie.webp' : selectedClosure === 'Spout' ? '/imgs/store/closure/spout.webp' : selectedClosure === 'Adhesive Tape' ? '/imgs/store/closure/adhesive-tap.webp' : '/imgs/store/closure/no-zipper.webp'} alt="" className="w-6 h-6 object-contain rounded border border-neutral-200" />
                    <img src={getSurfaceImage(selectedSurface)} alt="" className="w-6 h-6 object-contain rounded border border-neutral-200" />
                  </div>
                  {mobileActivePanel === 'preview' ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                </button>
                
                {/* Right: Price Toggle */}
                <button 
                  onClick={() => setMobileActivePanel(mobileActivePanel === 'price' ? 'none' : 'price')}
                  className={`flex items-center gap-2 px-3 py-2 rounded-lg transition ${mobileActivePanel === 'price' ? 'bg-primary-50 text-primary-700' : 'text-neutral-600 hover:bg-neutral-50'}`}
                >
                  <span className="text-lg">💰</span>
                  <span className="text-sm font-bold text-primary-700">${unitPrice.toFixed(2)}/pc</span>
                  <span className="text-xs text-neutral-500">|</span>
                  <span className="text-sm font-semibold text-primary-600">US${Math.round(totalPrice).toLocaleString()}</span>
                  {mobileActivePanel === 'price' ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                </button>
              </div>
            </div>
          </div>
          
          {/* Expandable Panel */}
          {mobileActivePanel !== 'none' && calculationResult && (
            <div className="bg-white border-b border-neutral-200 shadow-lg max-h-[50vh] overflow-y-auto">
              <div className="max-w-7xl mx-auto px-4">
                {mobileActivePanel === 'preview' && (
                  <div className="py-4">
                    <div className="flex gap-6">
                      {/* Left: Main Image */}
                      <div className="text-center flex-shrink-0">
                        <button onClick={() => setEnlargedImage({ src: productImage, alt: product.name })} className="bg-neutral-50 rounded-lg p-3 hover:bg-neutral-100 transition">
                          <img src={productImage} alt={product.name} className="w-32 h-32 object-contain" />
                        </button>
                        <p className="text-xs font-semibold text-neutral-800 mt-1">{ecoProduct?.shape}</p>
                      </div>
                      {/* Right: All Options Grid */}
                      <div className="flex-1 grid grid-cols-6 gap-2">
                        {/* Material */}
                        <div className="text-center">
                          <div className="bg-neutral-50 rounded-lg p-1.5 h-12 flex items-center justify-center">
                            <img src={selectedMaterial === 'PCR or Bio Plastic' ? '/imgs/store/eco-material/pcr-or-biope.webp' : selectedMaterial === 'Mono Recyclable Plastic' ? '/imgs/store/eco-material/recycle.webp' : '/imgs/store/eco-material/compostable.webp'} alt="" className="max-h-full object-contain" />
                          </div>
                          <p className="text-[10px] font-medium mt-0.5 truncate">Material</p>
                        </div>
                        {/* Size */}
                        <div className="text-center">
                          <div className="bg-neutral-50 rounded-lg p-1.5 h-12 flex items-center justify-center">
                            <img src={getSizeImage(selectedSize as EcoSizeType)} alt="" className="max-h-full object-contain" />
                          </div>
                          <p className="text-[10px] font-medium mt-0.5">{selectedSize}</p>
                        </div>
                        {/* Closure */}
                        <div className="text-center">
                          <div className="bg-neutral-50 rounded-lg p-1.5 h-12 flex items-center justify-center">
                            <img src={selectedClosure === 'No' ? '/imgs/store/closure/no-zipper.webp' : selectedClosure === 'Regular Zipper' ? '/imgs/store/closure/normal-zipper.webp' : selectedClosure === 'One-Sided Zipper' ? '/imgs/store/closure/front-zipper.webp' : selectedClosure === 'Child Resistant Zipper' ? '/imgs/store/closure/child-resistant-zipper.webp' : selectedClosure === 'Slider' ? '/imgs/store/closure/slider-zipper.webp' : selectedClosure === 'Tin Tie' ? '/imgs/store/closure/tin-tie.webp' : selectedClosure === 'Spout' ? '/imgs/store/closure/spout.webp' : selectedClosure === 'Adhesive Tape' ? '/imgs/store/closure/adhesive-tap.webp' : '/imgs/store/closure/no-zipper.webp'} alt="" className="max-h-full object-contain" />
                          </div>
                          <p className="text-[10px] font-medium mt-0.5 truncate">{selectedClosure === 'No' ? 'None' : selectedClosure.split(' ')[0]}</p>
                        </div>
                        {/* Surface */}
                        <div className="text-center">
                          <div className="bg-neutral-50 rounded-lg p-1.5 h-12 flex items-center justify-center">
                            <img src={getSurfaceImage(selectedSurface)} alt="" className="max-h-full object-contain" />
                          </div>
                          <p className="text-[10px] font-medium mt-0.5">{selectedSurface}</p>
                        </div>
                        {/* Barrier */}
                        <div className="text-center">
                          <div className="bg-neutral-50 rounded-lg p-1.5 h-12 flex items-center justify-center">
                            <span className="text-lg">🛡️</span>
                          </div>
                          <p className="text-[10px] font-medium mt-0.5 truncate">{selectedBarrier.includes('mid') ? 'Mid' : selectedBarrier.includes('high') ? 'High' : 'Max'}</p>
                        </div>
                        {/* Stiffness */}
                        <div className="text-center">
                          <div className="bg-neutral-50 rounded-lg p-1.5 h-12 flex items-center justify-center">
                            <span className="text-lg">💪</span>
                          </div>
                          <p className="text-[10px] font-medium mt-0.5">{selectedStiffness.includes('Without') ? 'Soft' : 'Stiff'}</p>
                        </div>
                        {/* Quantity */}
                        <div className="text-center">
                          <div className="bg-primary-50 rounded-lg p-1.5 h-12 flex items-center justify-center">
                            <span className="text-xs font-bold text-primary-700">{selectedQuantity.split(' ')[0]}</span>
                          </div>
                          <p className="text-[10px] font-medium mt-0.5">Qty</p>
                        </div>
                        {/* Designs */}
                        <div className="text-center">
                          <div className="bg-primary-50 rounded-lg p-1.5 h-12 flex items-center justify-center">
                            <span className="text-xs font-bold text-primary-700">{selectedDesignCount}</span>
                          </div>
                          <p className="text-[10px] font-medium mt-0.5">Designs</p>
                        </div>
                        {/* Valve */}
                        <div className="text-center">
                          <div className={`rounded-lg p-1.5 h-12 flex items-center justify-center ${selectedValve === 'Yes' ? 'bg-green-50' : 'bg-neutral-50'}`}>
                            <span className="text-lg">{selectedValve === 'Yes' ? '💨' : '➖'}</span>
                          </div>
                          <p className="text-[10px] font-medium mt-0.5">Valve</p>
                        </div>
                        {/* Laser */}
                        <div className="text-center">
                          <div className={`rounded-lg p-1.5 h-12 flex items-center justify-center ${selectedLaserScoring === 'Yes' ? 'bg-green-50' : 'bg-neutral-50'}`}>
                            {selectedLaserScoring === 'Yes' ? <img src="/imgs/store/additional/laser-tear.webp" alt="" className="max-h-full object-contain" /> : <span className="text-lg">➖</span>}
                          </div>
                          <p className="text-[10px] font-medium mt-0.5">Laser</p>
                        </div>
                        {/* Hang Hole */}
                        <div className="text-center">
                          <div className={`rounded-lg p-1.5 h-12 flex items-center justify-center ${selectedHangHole === 'Yes' ? 'bg-green-50' : 'bg-neutral-50'}`}>
                            <span className="text-lg">{selectedHangHole === 'Yes' ? '🕳️' : '➖'}</span>
                          </div>
                          <p className="text-[10px] font-medium mt-0.5">Hole</p>
                        </div>
                        {/* Shipping */}
                        <div className="text-center">
                          <div className="bg-blue-50 rounded-lg p-1.5 h-12 flex items-center justify-center">
                            <span className="text-lg">{selectedShipping === 'Air Freight' ? '✈️' : selectedShipping === 'Sea Freight' ? '🚢' : '📦'}</span>
                          </div>
                          <p className="text-[10px] font-medium mt-0.5">{selectedShipping.split(' ')[0]}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                {mobileActivePanel === 'price' && (
                  <div className="py-4">
                    <div className="grid grid-cols-4 gap-4">
                      <div className="bg-primary-50 rounded-lg p-3 text-center">
                        <div className="text-xs text-neutral-600 mb-1">Total</div>
                        <div className="text-xl font-bold text-primary-700">US${Math.round(totalPrice).toLocaleString()}</div>
                      </div>
                      <div className="bg-primary-50 rounded-lg p-3 text-center">
                        <div className="text-xs text-neutral-600 mb-1">Unit Price</div>
                        <div className="text-lg font-semibold">${unitPrice.toFixed(4)}/pc</div>
                      </div>
                      <div className="bg-primary-50 rounded-lg p-3 text-center">
                        <div className="text-xs text-neutral-600 mb-1">Quantity</div>
                        <div className="text-lg font-semibold">{calculationResult.price.quantityUnits.toLocaleString()}</div>
                      </div>
                      <div className="bg-primary-50 rounded-lg p-3 text-center">
                        <div className="text-xs text-neutral-600 mb-1">Shipping</div>
                        <div className="text-sm font-medium">✓ Included</div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      )}

      {/* Mobile Bottom Fixed Bar */}
      {isEcoDigital && (
        <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40">
          {/* Expandable Panel */}
          {mobileActivePanel !== 'none' && (
            <div className="bg-white border-t border-neutral-200 shadow-lg max-h-[60vh] overflow-y-auto">
              {mobileActivePanel === 'preview' && calculationResult && (
                <div className="p-4">
                  <div className="flex justify-between items-center mb-3">
                    <h3 className="font-semibold text-neutral-900">📦 Package Preview</h3>
                    <button onClick={() => setMobileActivePanel('none')} className="p-1">
                      <ChevronDown className="w-5 h-5 text-neutral-500" />
                    </button>
                  </div>
                  <div className="flex justify-center mb-3">
                    <img src={productImage} alt={product.name} className="h-32 object-contain" />
                  </div>
                  <div className="grid grid-cols-3 gap-2 text-center text-xs">
                    <div className="bg-neutral-50 rounded p-2">
                      <div className="text-neutral-500">Size</div>
                      <div className="font-medium">{selectedSize}</div>
                    </div>
                    <div className="bg-neutral-50 rounded p-2">
                      <div className="text-neutral-500">Closure</div>
                      <div className="font-medium truncate">{selectedClosure === 'No' ? 'None' : selectedClosure}</div>
                    </div>
                    <div className="bg-neutral-50 rounded p-2">
                      <div className="text-neutral-500">Surface</div>
                      <div className="font-medium">{selectedSurface}</div>
                    </div>
                  </div>
                </div>
              )}
              {mobileActivePanel === 'testimonials' && (
                <div className="p-4">
                  <div className="flex justify-between items-center mb-3">
                    <h3 className="font-semibold text-neutral-900">💬 Testimonials</h3>
                    <button onClick={() => setMobileActivePanel('none')} className="p-1">
                      <ChevronDown className="w-5 h-5 text-neutral-500" />
                    </button>
                  </div>
                  <div className="space-y-3 max-h-[300px] overflow-y-auto">
                    {TESTIMONIALS.slice(0, 6).map((testimonial) => (
                      <div key={testimonial.id} className="bg-neutral-50 rounded-lg p-3 border-l-4 border-primary-500">
                        <div className="flex items-center gap-2 mb-1">
                          <img 
                            src={testimonial.ownerImage} 
                            alt={testimonial.name}
                            className="w-8 h-8 rounded-full object-cover"
                            onError={(e) => {
                              const target = e.target as HTMLImageElement
                              target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(testimonial.name)}&background=22c55e&color=fff&size=32`
                            }}
                          />
                          <div className="text-sm font-semibold">{testimonial.name}</div>
                          <div className="flex text-yellow-400 ml-auto">
                            {[...Array(5)].map((_, i) => <Star key={i} className="w-3 h-3 fill-current" />)}
                          </div>
                        </div>
                        <p className="text-xs text-neutral-600 italic">"{testimonial.shortQuote}"</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              {mobileActivePanel === 'price' && calculationResult && (
                <div className="p-4">
                  <div className="flex justify-between items-center mb-3">
                    <h3 className="font-semibold text-neutral-900">💰 Price Details</h3>
                    <button onClick={() => setMobileActivePanel('none')} className="p-1">
                      <ChevronDown className="w-5 h-5 text-neutral-500" />
                    </button>
                  </div>
                  <div className="text-3xl font-bold text-primary-700 mb-3">US${Math.round(totalPrice).toLocaleString()}</div>
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div className="bg-primary-50 rounded-lg p-2">
                      <div className="text-neutral-600 text-xs">Unit Price</div>
                      <div className="font-semibold">${unitPrice.toFixed(4)}/pc</div>
                    </div>
                    <div className="bg-primary-50 rounded-lg p-2">
                      <div className="text-neutral-600 text-xs">Quantity</div>
                      <div className="font-semibold">{calculationResult.price.quantityUnits.toLocaleString()}</div>
                    </div>
                  </div>
                  <div className="text-xs text-primary-700 mt-2 text-center">✓ Shipping Included</div>
                </div>
              )}
            </div>
          )}
          
          {/* Bottom Tab Bar */}
          <div className="bg-white border-t border-neutral-200 shadow-lg">
            <div className="flex">
              <button 
                onClick={() => setMobileActivePanel(mobileActivePanel === 'preview' ? 'none' : 'preview')}
                className={`flex-1 py-3 px-2 flex flex-col items-center gap-1 text-xs transition ${mobileActivePanel === 'preview' ? 'bg-primary-50 text-primary-700' : 'text-neutral-600'}`}
              >
                <span className="text-lg">📦</span>
                <span className="truncate">Preview</span>
              </button>
              <button 
                onClick={() => setMobileActivePanel(mobileActivePanel === 'testimonials' ? 'none' : 'testimonials')}
                className={`flex-1 py-3 px-2 flex flex-col items-center gap-1 text-xs transition ${mobileActivePanel === 'testimonials' ? 'bg-primary-50 text-primary-700' : 'text-neutral-600'}`}
              >
                <span className="text-lg">💬</span>
                <span className="truncate">Reviews</span>
              </button>
              <button 
                onClick={() => setMobileActivePanel(mobileActivePanel === 'price' ? 'none' : 'price')}
                className={`flex-1 py-3 px-2 flex flex-col items-center gap-1 text-xs transition ${mobileActivePanel === 'price' ? 'bg-primary-50 text-primary-700' : 'text-neutral-600'}`}
              >
                <span className="text-lg">💰</span>
                <span className="font-semibold text-primary-700">${unitPrice.toFixed(2)}/pc</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Add bottom padding for mobile to account for fixed bottom bar */}
      {isEcoDigital && <div className="lg:hidden h-20"></div>}
      
      {/* Add top padding for desktop to account for fixed top bar */}
      {isEcoDigital && <div className="hidden lg:block h-14"></div>}

      {/* FAQ Section for GEO Optimization */}
      {product && combinedFAQs.length > 0 && (
        <section className="bg-white border-t border-neutral-200 py-12">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-2xl font-bold text-neutral-900 mb-8 text-center">Frequently Asked Questions</h2>
            
            <div className="space-y-4">
              {combinedFAQs.slice(0, 8).map((faq, index) => (
                <details
                  key={index}
                  className="group bg-neutral-50 rounded-lg border border-neutral-200 overflow-hidden"
                >
                  <summary className="flex items-center justify-between px-6 py-4 cursor-pointer hover:bg-neutral-100 transition">
                    <span className="font-medium text-neutral-900 pr-4">{faq.question}</span>
                    <ChevronDown className="h-5 w-5 text-neutral-500 group-open:rotate-180 transition-transform flex-shrink-0" />
                  </summary>
                  <div className="px-6 pb-4 text-neutral-700">
                    {faq.answer}
                  </div>
                </details>
              ))}
            </div>

            {/* AI Query Examples Section */}
            {productFAQData?.aiQueryExamples && productFAQData.aiQueryExamples.length > 0 && (
              <div className="mt-10 bg-blue-50 rounded-xl p-6 border border-blue-200">
                <div className="flex items-center gap-2 mb-4">
                  <MessageCircle className="h-5 w-5 text-blue-600" />
                  <h3 className="font-semibold text-blue-800">Looking for this product? Try asking AI:</h3>
                </div>
                <p className="text-sm text-blue-700 mb-3">If you're using Gemini, ChatGPT, or Perplexity, try these queries:</p>
                <ul className="space-y-2">
                  {productFAQData.aiQueryExamples.map((query, index) => (
                    <li key={index} className="flex items-start gap-2 text-blue-700">
                      <span className="text-blue-500">•</span>
                      <span className="text-sm">"{query}"</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Product Use Cases */}
            {productFAQData?.useCases && productFAQData.useCases.length > 0 && (
              <div className="mt-8">
                <h3 className="font-semibold text-neutral-900 mb-4">Best For:</h3>
                <div className="flex flex-wrap gap-2">
                  {productFAQData.useCases.map((useCase, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm"
                    >
                      {useCase}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Related Links */}
            <div className="mt-10 pt-8 border-t border-neutral-200">
              <h3 className="font-semibold text-neutral-900 mb-4">Explore More:</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                <Link to="/store" className="flex items-center gap-2 text-primary-600 hover:underline">
                  <ShoppingCart className="h-4 w-4" />
                  Browse All Products
                </Link>
                <Link to="/materials/compostable" className="flex items-center gap-2 text-primary-600 hover:underline">
                  🌱 Compostable Materials Guide
                </Link>
                <Link to="/materials/recyclable-mono-pe" className="flex items-center gap-2 text-primary-600 hover:underline">
                  ♻️ Recyclable Packaging Options
                </Link>
                <Link to="/blog" className="flex items-center gap-2 text-primary-600 hover:underline">
                  📚 Packaging Insights Blog
                </Link>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Image Enlargement Modal - Fit screen height, mobile responsive, with gallery navigation */}
      {enlargedImage && (
        <div 
          className="fixed inset-0 bg-black/90 flex items-center justify-center z-50"
          onClick={() => setEnlargedImage(null)}
          onKeyDown={(e) => {
            if (e.key === 'Escape') setEnlargedImage(null)
            if (e.key === 'ArrowLeft') navigateImage('prev')
            if (e.key === 'ArrowRight') navigateImage('next')
          }}
          tabIndex={0}
          role="dialog"
          aria-modal="true"
        >
          {/* Close button - positioned at top right */}
          <button
            onClick={(e) => { e.stopPropagation(); setEnlargedImage(null); }}
            className="absolute top-4 right-4 bg-white/20 hover:bg-white/30 rounded-full p-3 transition z-20"
            aria-label="Close"
          >
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          
          {/* Left Arrow - Previous Image */}
          {enlargedImage.images && enlargedImage.images.length > 1 && (
            <button
              onClick={(e) => { e.stopPropagation(); navigateImage('prev'); }}
              className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 rounded-full p-2 sm:p-3 transition z-20"
              aria-label="Previous image"
            >
              <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
          )}
          
          {/* Right Arrow - Next Image */}
          {enlargedImage.images && enlargedImage.images.length > 1 && (
            <button
              onClick={(e) => { e.stopPropagation(); navigateImage('next'); }}
              className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 rounded-full p-2 sm:p-3 transition z-20"
              aria-label="Next image"
            >
              <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          )}
          
          {/* Image container - fit screen height on all devices */}
          <div 
            className="flex flex-col items-center justify-center w-full h-full p-4 sm:p-6 md:p-8"
          >
            <img 
              src={enlargedImage.src}
              alt={enlargedImage.alt}
              className="max-w-full max-h-[calc(100vh-140px)] sm:max-h-[calc(100vh-120px)] object-contain rounded-lg shadow-2xl cursor-default"
              onClick={(e) => e.stopPropagation()}
            />
            {/* Caption and counter - below image */}
            <div className="mt-4 px-4 text-center">
              <p className="text-white font-medium text-sm sm:text-base">{enlargedImage.alt}</p>
              {enlargedImage.images && enlargedImage.images.length > 1 && enlargedImage.index !== undefined && (
                <p className="text-white/60 text-xs mt-1">
                  {enlargedImage.index + 1} / {enlargedImage.images.length}
                </p>
              )}
            </div>
          </div>
          
          {/* Tap/click hint - mobile only */}
          <p className="absolute bottom-4 left-0 right-0 text-center text-white/50 text-xs sm:hidden">
            Tap outside image to close • Swipe arrows to navigate
          </p>
        </div>
      )}

      {/* YouTube Video Modal */}
      {isVideoModalOpen && (product as any)?.videoUrl && (
        <div 
          className="fixed inset-0 bg-black flex items-center justify-center z-50"
          onClick={() => setIsVideoModalOpen(false)}
        >
          <button
            onClick={() => setIsVideoModalOpen(false)}
            className="absolute top-4 right-4 bg-white/20 hover:bg-white/30 rounded-full p-2 transition z-10"
          >
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <div 
            className="w-full max-w-4xl aspect-video"
            onClick={(e) => e.stopPropagation()}
          >
            <iframe
              src={`https://www.youtube.com/embed/${(product as any).videoUrl.split('/').pop()}?autoplay=1`}
              title="Product Video"
              className="w-full h-full"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-neutral-900 text-white py-12 mt-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 mb-8">
            {/* Store Info */}
            <div className="col-span-2 md:col-span-1">
              <Link to="/" className="flex items-center gap-2 mb-4">
                <img src="/ap-logo-white.png" alt="Achieve Pack" className="h-8 w-auto" loading="lazy" decoding="async" width="106" height="32" />
                <span className="font-bold">Store</span>
              </Link>
              <p className="text-neutral-400 text-sm mb-4">Premium custom printed pouches with eco-friendly options.</p>
              <div className="space-y-1 text-xs text-neutral-500">
                <p>Free worldwide shipping</p>
                <p>15-20 days turnaround</p>
                <p>Food-grade quality</p>
              </div>
            </div>

            {/* Products by Category */}
            <div>
              <h4 className="font-semibold text-sm mb-4">Categories</h4>
              <ul className="space-y-2 text-xs text-neutral-400">
                <li><Link to="/store" className="hover:text-primary-400">Sample Packs</Link></li>
                <li><Link to="/store" className="hover:text-primary-400">Conventional Digital</Link></li>
                <li><Link to="/store" className="hover:text-primary-400">Eco Digital</Link></li>
                <li><Link to="/store" className="hover:text-primary-400">Eco Stock</Link></li>
              </ul>
            </div>

            {/* Shapes */}
            <div>
              <h4 className="font-semibold text-sm mb-4">Pouch Shapes</h4>
              <ul className="space-y-2 text-xs text-neutral-400">
                <li><Link to="/packaging/stand-up-pouches" className="hover:text-primary-400">Stand Up Pouches</Link></li>
                <li><Link to="/packaging/flat-bottom-bags" className="hover:text-primary-400">Flat Bottom Bags</Link></li>
                <li><Link to="/packaging/flat-pouches" className="hover:text-primary-400">3 Side Seal</Link></li>
                <li><Link to="/packaging/side-gusset-bags" className="hover:text-primary-400">Side Gusset</Link></li>
                <li><Link to="/packaging/spout-pouches" className="hover:text-primary-400">Spout Pouches</Link></li>
              </ul>
            </div>

            {/* Materials */}
            <div>
              <h4 className="font-semibold text-sm mb-4">Materials</h4>
              <ul className="space-y-2 text-xs text-neutral-400">
                <li><Link to="/materials/compostable" className="hover:text-primary-400">Compostable</Link></li>
                <li><Link to="/materials/recyclable-mono-pe" className="hover:text-primary-400">Recyclable Mono-PE</Link></li>
                <li><Link to="/materials/bio-pe" className="hover:text-primary-400">Bio-PE / PCR</Link></li>
                <li><Link to="/materials/kraft-paper-pe-lining" className="hover:text-primary-400">Kraft Paper</Link></li>
                <li><Link to="/materials/home-compostable" className="hover:text-primary-400">Home Compostable</Link></li>
              </ul>
            </div>

            {/* Store Policies */}
            <div>
              <h4 className="font-semibold text-sm mb-4">Store Policies</h4>
              <ul className="space-y-2 text-xs text-neutral-400">
                <li><Link to="/terms" className="hover:text-primary-400">Terms & Conditions</Link></li>
                <li><Link to="/returns" className="hover:text-primary-400">Return Policy</Link></li>
                <li><Link to="/shipping" className="hover:text-primary-400">Shipping Info</Link></li>
                <li><Link to="/privacy" className="hover:text-primary-400">Privacy Policy</Link></li>
                <li><Link to="/support/lead-time" className="hover:text-primary-400">Lead Time</Link></li>
              </ul>
            </div>

            {/* Support */}
            <div>
              <h4 className="font-semibold text-sm mb-4">Help & Support</h4>
              <ul className="space-y-2 text-xs text-neutral-400">
                <li><Link to="/support/faqs" className="hover:text-primary-400">FAQs</Link></li>
                <li><Link to="/knowledge/workflow" className="hover:text-primary-400">How It Works</Link></li>
                <li><Link to="/blog" className="hover:text-primary-400">Blog</Link></li>
                <li><a href="mailto:ryan@achievepack.com" className="hover:text-primary-400">Contact Us</a></li>
                <li><Link to="/" className="hover:text-primary-400">Main Website</Link></li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-neutral-800 pt-6">
            {/* Payment Methods */}
            <div className="flex flex-wrap justify-center gap-4 mb-6">
              <img src="/imgs/store/payment-logo/a_visa_logo_grey_5781158.webp" alt="Visa" className="h-8 w-auto" />
              <img src="/imgs/store/payment-logo/a_mastercard_logo_grey_4350426.webp" alt="Mastercard" className="h-8 w-auto" />
              <img src="/imgs/store/payment-logo/a_amex_logo_grey_3038228.webp" alt="American Express" className="h-8 w-auto" />
              <img src="/imgs/store/payment-logo/a_paypal_logo_grey_3236525.webp" alt="PayPal" className="h-8 w-auto" />
              <img src="/imgs/store/payment-logo/a_stripe_logo_grey_3625928.webp" alt="Stripe" className="h-8 w-auto" />
            </div>

            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-neutral-500 text-xs">© 2025 Achieve Pack. All rights reserved.</p>
              <div className="text-neutral-600 text-xs text-center md:text-right">
                <p>Hong Kong Business Registration: 41007097</p>
                <p>No.41 1/F Wo Liu Hang Tsuen, Fotan, Hong Kong</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
    </>
  )
}

export default ProductPage
