import React, { useState, useMemo, useEffect, useTransition, useCallback, useRef } from 'react'
import { useParams, Link, useNavigate, useSearchParams } from 'react-router-dom'
import SEO from '../components/SEO'
import { ArrowLeft, ShoppingCart, Star, Check, ChevronDown, ChevronUp, ZoomIn, MessageCircle, Package, Home, Share2, Copy, X, Sparkles, CheckCircle, Info, Calendar, MessageSquare } from 'lucide-react'
import { useStore } from '../store/StoreContext'
import PopoverSelect, { SimplePopoverSelect } from '../components/ui/popover-select'
import { FEATURED_PRODUCTS, type EcoDigitalProduct, type StoreProduct, type ConventionalProduct, type EcoStockProduct, type BoxProduct, type EcoStockSizeVariant, type EcoStockSizeWithQuantities, type EcoStockQuantityOption, PRICING_DATA, POUCH_SIZES, formatPouchSizeLabel, QUANTITY_OPTIONS, getProductType, isProductPurchasable } from '../store/productData'
import { calculateEcoPrice, type EcoCalculatorSelections, getMaterialStructureInfo } from '../utils/ecoDigitalCalculator'
import { getProductImage, getSizeImage, getSurfaceImage, getAdditionalImage, type ShapeType, ClosureType, SurfaceType, EcoSizeType, AdditionalType } from '../utils/productImageMapper'
import { getWhatsAppLink } from '../utils/domain'
import { TESTIMONIALS } from '../data/testimonialsData'
import { getProductFAQs, generateFAQSchema, DEFAULT_FAQS, DEFAULT_BOXES_FAQS, DEFAULT_LABEL_FAQS, type ProductFAQ } from '../data/productFAQData'
import { getAISellingPoints, hasAISellingPoints, type AISellingPoint } from '../data/aiSellingPoints'
import { CLOSURE_OPTIONS, SURFACE_OPTIONS, type ClosureOption, type SurfaceOption } from '../components/SortableOptionsTable'
import Footer from '../components/Footer'
import { useCustomQuote } from '../contexts/CustomQuoteContext'
import { Checkbox } from '../components/animate-ui/components/radix/checkbox'
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from '../components/animate-ui/components/radix/dropdown-menu'
import { useTranslation, Trans } from "react-i18next";
import { useProductTranslation } from '../utils/productTranslation'
import LanguageSelector from '../components/LanguageSelector'

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
  },
  'label': {
    'pcr': {
      problem: 'Traditional labels use virgin fossil-fuel plastics and synthetic adhesives that contaminate the recycling stream.',
      solution: 'This PCR/bio-based paper or PLA self-adhesive label uses recycled content and eco-friendly adhesive to reduce environmental footprint.',
      features: ['FSC-certified paper or bio-based PLA', 'High-performance eco-adhesive', 'Moisture & oil resistant options', 'Smooth application & clean print'],
      certifications: 'FSC Certified • Bio-Based'
    },
    'mono': {
      problem: 'Traditional multi-layer labels with permanent adhesives prevent the host packaging from being recycled.',
      solution: 'This mono-material PP label uses wash-off adhesive so it separates cleanly in the recycling stream.',
      features: ['Mono-PP film substrate', 'Wash-off adhesive technology', 'Zero label contamination in recycling', 'High-clarity or solid color options'],
      certifications: '95% Recyclable • Wash-off Adhesive'
    },
    'compost': {
      problem: 'Traditional labels rely on non-biodegradable plastics (PP/PET) and synthetic adhesives that break down into persistent microplastics, remaining in our ecosystem for centuries.',
      solution: `Zero Microplastics. Complete Biodegradability.
180-Day Complete Biodegradability • Zero Microplastics Residue

Unlike traditional plastic (PP/PET) labels that break down into persistent microplastics, our PLA and FSC-paper compostable labels completely degrade under standard composting conditions. Over 180 days, microorganisms break down the face stock, bio-adhesive, and plant-based printing ink into clean biomass, water, and CO2, fully blending back into the natural eco-system.

Unlike traditional plastic (PP/PET) labels that fragment into microplastics and pollute the environment long-term, our compostable labels decompose rapidly under standard composting conditions. Within the 180-day golden degradation cycle, the face stock, bio-adhesive, and plant-based ink convert completely into organic nutrients, water, and CO2, leaving zero heavy metals or chemical toxic residues.`,
      features: [
        'FSC-certified paper or plant-based clear PLA film substrate',
        'Certified EN 13432 & ASTM D6400 compostable',
        'Zero microplastics residue after 180-day degradation',
        'Plant-based printing inks & compostable bio-adhesives',
        '100% biodegradation returning organic nutrients to soil',
        'High-performance water and oil resistance'
      ],
      certifications: 'EN 13432 / ASTM D6400 / FSC Certified'
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
  
  if (shapeLC === 'wrapping paper' || nameLC.includes('paper pad') || nameLC.includes('cushioning')) {
    const compostDesc = {
      problem: 'Conventional plastic bubble wrap and foam cushioning liners pollute the environment and cannot be composted or easily recycled.',
      solution: 'This 100% natural, food-grade three-layer honeycomb cushioning paper pad is completely biodegradable and certified compostable.',
      features: [
        '100% biodegradable and compostable paper',
        'Food-safe black and white printed designs',
        '3-layer honeycomb shock-absorbing waffle design',
        'Excellent moisture-proof and oil-resistant properties'
      ],
      certifications: '100% Compostable • Food Grade'
    };
    
    return {
      skuType: 'wrapping-paper',
      materialType: 'compost',
      problem: compostDesc.problem,
      solution: compostDesc.solution,
      features: compostDesc.features,
      materialInfo: 'Made from certified food-grade compostable honeycomb waffle paper.',
      sizeInfo: `${size || 'Custom Size'} — Custom cut sheet to fit chocolate and pastry boxes`,
      closureInfo: 'N/A (Cushioning Pad Sheets)',
      certifications: compostDesc.certifications,
      idealFor: 'Specialty chocolate boxes, premium confectionery, luxury pastry packaging'
    };
  }
  
  if (shapeLC === 'wrapping paper' || nameLC.includes('paper pad') || nameLC.includes('cushioning')) {
    const compostDesc = {
      problem: 'Conventional plastic bubble wrap and foam cushioning liners pollute the environment and cannot be composted or easily recycled.',
      solution: 'This 100% natural, food-grade three-layer honeycomb cushioning paper pad is completely biodegradable and certified compostable.',
      features: [
        '100% biodegradable and compostable paper',
        'Food-safe black and white printed designs',
        '3-layer honeycomb shock-absorbing waffle design',
        'Excellent moisture-proof and oil-resistant properties'
      ],
      certifications: '100% Compostable • Food Grade'
    };
    
    return {
      skuType: 'wrapping-paper',
      materialType: 'compost',
      problem: compostDesc.problem,
      solution: compostDesc.solution,
      features: compostDesc.features,
      materialInfo: 'Made from certified food-grade compostable honeycomb waffle paper.',
      sizeInfo: `${size || 'Custom Size'} — Custom cut sheet to fit chocolate and pastry boxes`,
      closureInfo: 'N/A (Cushioning Pad Sheets)',
      certifications: compostDesc.certifications,
      idealFor: 'Specialty chocolate boxes, premium confectionery, luxury pastry packaging'
    };
  }
  
  // Detect SKU type
  if (nameLC.includes('label') || nameLC.includes('sticker') || shapeLC.includes('label') || shapeLC.includes('sticker')) skuType = 'label';
  else if (nameLC.includes('coffee') || shapeLC.includes('coffee')) skuType = 'coffee';
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
  else if ((material || '').toLowerCase().includes('compost') || (material || '').toLowerCase().includes('biodegradable') || (material || '').toLowerCase().includes('pla') || (material || '').toLowerCase().includes('paper')) {
    materialType = 'compost';
  } else if ((material || '').toLowerCase().includes('pcr') || (material || '').toLowerCase().includes('bio')) {
    materialType = 'pcr';
  }
  
  const skuDesc = SKU_DESCRIPTIONS[skuType]?.[materialType] || SKU_DESCRIPTIONS['snack']['mono'];
  
  let matDesc = MATERIAL_DESCRIPTIONS[material || 'Mono Recyclable Plastic'];
  if (!matDesc) {
    if ((material || '').toLowerCase().includes('compost') || (material || '').toLowerCase().includes('biodegradable') || (material || '').toLowerCase().includes('pla') || (material || '').toLowerCase().includes('paper')) {
      matDesc = MATERIAL_DESCRIPTIONS['Biodegradable and Compostable'];
    } else if ((material || '').toLowerCase().includes('pcr') || (material || '').toLowerCase().includes('bio')) {
      matDesc = MATERIAL_DESCRIPTIONS['PCR or Bio Plastic'];
    } else {
      matDesc = MATERIAL_DESCRIPTIONS['Mono Recyclable Plastic'];
    }
  }
  
  let sizeDesc = SIZE_CAPACITIES[size || 'M'];
  if (!sizeDesc) {
    sizeDesc = { capacity: size || 'Custom Size', useCase: 'Custom specification' };
  }
  
  const closureDesc = CLOSURE_DESCRIPTIONS[closure || 'No'] || closure || 'Custom closure';
  
  return {
    skuType, materialType, problem: skuDesc.problem, solution: skuDesc.solution,
    features: skuDesc.features,
    materialInfo: matDesc.eco, sizeInfo: `${sizeDesc.capacity} — ${sizeDesc.useCase}`,
    closureInfo: closureDesc, certifications: skuDesc.certifications, idealFor: matDesc.idealFor
  };
};

const colorInfoMap: Record<string, { name: string; swatchClass: string }> = {
  'matte-silver': { name: 'Matte Silver', swatchClass: 'bg-neutral-300 border-neutral-400' },
  'forest-green': { name: 'Forest Green', swatchClass: 'bg-emerald-800 border-emerald-950 text-white' },
  'ruby-red': { name: 'Ruby Red', swatchClass: 'bg-red-700 border-red-900 text-white' },
  'cream-white': { name: 'Cream White', swatchClass: 'bg-[#FAF9F6] border-neutral-300' },
  'vibrant-orange': { name: 'Vibrant Orange', swatchClass: 'bg-orange-500 border-orange-700 text-white' },
  'matte-black': { name: 'Matte Black', swatchClass: 'bg-neutral-900 border-black text-white' },
  'natural-linen': { name: 'Natural Linen', swatchClass: 'bg-[#C2A67D] border-[#8c7452] text-neutral-900' },
  'natural-cork': { name: 'Natural Cork', swatchClass: 'bg-[#D2B48C] border-[#a07c50] text-neutral-900' },
  'charcoal-linen': { name: 'Charcoal Linen', swatchClass: 'bg-[#2F3E46] border-[#1f282d] text-white' },
  'white-linen': { name: 'White Linen', swatchClass: 'bg-[#F4F4F9] border-neutral-300 text-neutral-900' },
  'white-kraft': { name: 'White Kraft', swatchClass: 'bg-[#F8F9FA] border-neutral-300 text-neutral-900' },
  'brown-kraft': { name: 'Brown Kraft', swatchClass: 'bg-[#E5C290] border-[#b08c50] text-neutral-900' },
};

const parseVariant = (variant: any, productId: string) => {
  let size = '';
  let color = '';
  let qty = variant.quantity;

  if (productId === 'flat-bottom-pouch-tin-tie') {
    const match = variant.id.match(/tin-tie-pouch-([^-]+)-([^-]+-[^-]+)-(\d+)pcs/);
    if (match) {
      size = match[1];
      color = match[2];
    }
  } else if (productId === 'coffee-tea-one-sided-zipper-flat-bottom-pouch-with-hanging-strip') {
    const match = variant.id.match(/hanging-strip-pouch-([^-]+)-([^-]+-[^-]+)-(\d+)pcs/);
    if (match) {
      size = match[1];
      color = match[2];
    }
  } else if (productId === 'textured-burlap-cork-pattern-coffee-pouch-with-valve') {
    const match = variant.id.match(/coffee-valve-pouch-([^-]+)-([^-]+-[^-]+)-(\d+)pcs/);
    if (match) {
      size = match[1];
      color = match[2];
    }
  } else if (productId === 'flat-bottom-pouch-with-card-insert') {
    const match = variant.id.match(/flat-bottom-card-insert-([^-]+)-([^-]+)-([^-]+-[^-]+)-(\d+)pcs/);
    if (match) {
      const shape = match[1] === 'cubical' ? 'Cubical' : 'Long';
      const sizeCode = match[2].toUpperCase();
      size = `${shape} ${sizeCode}`;
      color = match[3];
    }
  }

  if (!size || !color) {
    const parts = variant.id.split('-');
    if (parts.length >= 5) {
      size = parts[3];
      color = parts.slice(4, parts.length - 1).join('-');
    }
  }

  return { size: size.toUpperCase(), color, qty };
};

const getSizeDetails = (sizeCode: string, productId: string) => {
  if (productId === 'flat-bottom-pouch-tin-tie') {
    const details: Record<string, { label: string; sub: string }> = {
      '125G': { label: 'Size S (125g)', sub: 'W11 × H20 + G9.5 cm • holds ~125g' },
      '250G': { label: 'Size M (250g)', sub: 'W14 × H20 + G9.5 cm • holds ~250g' },
      '500G': { label: 'Size L (500g)', sub: 'W19 × H25 + G11 cm • holds ~500g' },
      '750G': { label: 'Size XL (750g)', sub: 'W25 × H30 + G13 cm • holds ~750g' },
    };
    return details[sizeCode] || { label: `Size ${sizeCode}`, sub: '' };
  } else if (productId === 'coffee-tea-one-sided-zipper-flat-bottom-pouch-with-hanging-strip') {
    const details: Record<string, { label: string; sub: string }> = {
      'S': { label: 'Size S', sub: 'W14.5 × H14 + G9 cm • holds ~160g' },
      'M': { label: 'Size M', sub: 'W17 × H15.5 + G9.5 cm • holds ~185g' },
      'L': { label: 'Size L', sub: 'W21.5 × H20 + G10 cm • holds ~530g' },
    };
    return details[sizeCode] || { label: `Size ${sizeCode}`, sub: '' };
  } else if (productId === 'textured-burlap-cork-pattern-coffee-pouch-with-valve') {
    const details: Record<string, { label: string; sub: string }> = {
      'S': { label: 'Size S (1/4 lb)', sub: '160 × 170 + 60 mm • holds ~120g' },
      'M': { label: 'Size M (1/2 lb)', sub: '190 × 200 + 70 mm • holds ~250g' },
      'L': { label: 'Size L (1 lb)', sub: '230 × 260 + 80 mm • holds ~500g' },
    };
    return details[sizeCode] || { label: `Size ${sizeCode}`, sub: '' };
  } else if (productId === 'flat-bottom-pouch-with-card-insert') {
    const details: Record<string, { label: string; sub: string }> = {
      'CUBICAL S': { label: 'Cubical Size S (1/2 lb)', sub: '15.5 × 16.5 + 8 cm • holds ~250g' },
      'CUBICAL M': { label: 'Cubical Size M (1 lb)', sub: '19.5 × 20.5 + 8 cm • holds ~500g' },
      'CUBICAL L': { label: 'Cubical Size L (2 lb)', sub: '23 × 24 + 10 cm • holds ~1000g' },
      'LONG S': { label: 'Long Size S (1/2 lb)', sub: '13 × 20 + 7 cm • holds ~250g' },
      'LONG M': { label: 'Long Size M (1 lb)', sub: '13.5 × 26 + 7.5 cm • holds ~500g' },
      'LONG L': { label: 'Long Size L (2 lb)', sub: '15 × 32.5 + 10 cm • holds ~1000g' },
    };
    return details[sizeCode] || { label: sizeCode, sub: '' };
  }
  return { label: sizeCode, sub: '' };
};

const SACHET_UNPRINTED_OPTIONS = [
  { id: 'sample-9-pack', label: 'Silk & Kraft 9 Colors Sample Pack (1 of each)', pcs: 9, price: 2.70 },
  { id: 'off-white-100', label: 'Off-White Silk Paper 100 pcs', pcs: 100, price: 2.94 },
  { id: 'black-100', label: 'Black Silk Paper 100 pcs', pcs: 100, price: 2.94 },
  { id: 'pink-100', label: 'Pink Silk Paper 100 pcs', pcs: 100, price: 2.94 },
  { id: 'gold-100', label: 'Gold Silk Paper 100 pcs', pcs: 100, price: 2.94 },
  { id: 'blue-100', label: 'Blue Silk Paper 100 pcs', pcs: 100, price: 2.94 },
  { id: 'light-yellow-100', label: 'Light Yellow Silk Paper 100 pcs', pcs: 100, price: 2.94 },
  { id: 'cyan-100', label: 'Teal/Cyan Silk Paper 100 pcs', pcs: 100, price: 2.94 },
  { id: 'yellow-kraft-100', label: 'Yellow Kraft Paper 100 pcs', pcs: 100, price: 2.94 },
  { id: 'white-kraft-100', label: 'White Kraft Paper 100 pcs', pcs: 100, price: 2.94 },
  { id: 'white-cotton-100', label: 'White Cotton Paper 100 pcs', pcs: 100, price: 2.94 }
];

const ProductPage: React.FC = () => {
    const { t } = useTranslation();
    const p = 'seoPages.pages.product';
  const { productId } = useParams<{ productId: string }>()
  const { addToCart, addToRfq, cartCount, setIsCartOpen, setActiveCartMode } = useStore()
  const { openQuoteLightbox } = useCustomQuote()
  const navigate = useNavigate()
  const [isPending, startTransition] = useTransition()

  // Redirect legacy or mismatched URLs to correct products paths
  useEffect(() => {
    if (productId === 'compostable-coffee-bags') {
      navigate('/products/compostable-coffee-bags', { replace: true })
    } else if (productId === 'coffee-bags-degassing-valve') {
      navigate('/products/coffee-bags-degassing-valve', { replace: true })
    }
  }, [productId, navigate])
  
  const faqSectionRef = useRef<HTMLDivElement>(null)
  const [isFaqVisible, setIsFaqVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsFaqVisible(entry.isIntersecting)
      },
      {
        root: null,
        rootMargin: '-50px 0px 0px 0px',
        threshold: 0.1,
      }
    )

    if (faqSectionRef.current) {
      observer.observe(faqSectionRef.current)
    }

    return () => {
      observer.disconnect()
    }
  }, [])
  
  // Optimized navigation handler for better INP
  const handleNavigation = useCallback((to: string) => (e: React.MouseEvent) => {
    e.preventDefault()
    startTransition(() => {
      navigate(to)
    })
  }, [navigate])
  
  const { translateProduct, translateProducts, currentLang } = useProductTranslation()
  const translatedProducts = useMemo(() => translateProducts(FEATURED_PRODUCTS), [currentLang])
  const product = translatedProducts.find(p => p.id === productId)
  const isEcoDigital = product?.category === 'eco-digital'
  const isConventionalDigital = product?.category === 'conventional-digital'
  const isEcoStock = product?.category === 'eco-stock' || product?.category === 'conventional-stock' || product?.category === '3d-print'
  const isBoxes = product?.category === 'boxes'
  const ecoProduct = isEcoDigital ? (product as EcoDigitalProduct) : null
  const conventionalProduct = isConventionalDigital ? (product as ConventionalProduct) : null
  const ecoStockProduct = (isEcoStock || isBoxes) ? (product as EcoStockProduct | BoxProduct) : null
  
  const allEcoDigitalImages = useMemo(() => {
    if (product && product.images && product.images.length > 0) {
      return product.images
    }
    return [
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
  }, [product])

  const isSheetProduct = !!(
    (product?.name.toLowerCase().includes('paper') && 
     !product?.name.toLowerCase().includes('pouch') && 
     !product?.name.toLowerCase().includes('bag') && 
     !product?.name.toLowerCase().includes('doypack')) || 
    product?.name.toLowerCase().includes('wrap') || 
    (ecoStockProduct && 'shape' in ecoStockProduct && ecoStockProduct.shape.toLowerCase().includes('sheet'))
  )
  const isLabelProduct = !!(product?.id.toLowerCase().includes('label') || product?.id.toLowerCase().includes('sticker') || (product && 'shape' in product && (product as any).shape?.toLowerCase().includes('label')) || (product && 'shape' in product && (product as any).shape?.toLowerCase().includes('sticker')))
  const pluralUnit = isSheetProduct ? 'sheets' : 'pcs'
  const singleUnit = isSheetProduct ? 'sheet' : 'pc'
  const singleLabel = isSheetProduct ? 'sheet' : 'piece'
  const pluralLabel = isSheetProduct ? 'sheets' : 'pieces'
  
  // Check if this product is purchasable (stock) or requires RFQ (custom)
  const productType = product ? getProductType(product) : 'stock'
  const isPurchasable = product ? isProductPurchasable(product) : true
  const isCustomProduct = productType === 'custom'

  // Conventional Digital product options
  const [selectedConvSize, setSelectedConvSize] = useState('130x180')
  const [selectedConvQuantity, setSelectedConvQuantity] = useState(100)
  const [selectedMainImage, setSelectedMainImage] = useState(0)

  // Small Sachet Custom Options
  const [sachetPrintMethod, setSachetPrintMethod] = useState<'unprinted' | 'hot-stamping' | 'digital' | 'traditional'>('unprinted')
  const [sachetUnprintedColor, setSachetUnprintedColor] = useState<string>('sample-9-pack')
  const [sachetUnprintedPacks, setSachetUnprintedPacks] = useState<number>(1)
  const [sachetRoundCorners, setSachetRoundCorners] = useState<boolean>(false)
  const [sachetStampingCoverage, setSachetStampingCoverage] = useState<'double-sided' | 'single-sided'>('double-sided')
  const [sachetColorsCount, setSachetColorsCount] = useState<number>(2)
  
  // Eco Stock product options
  const [selectedEcoStockQuantity, setSelectedEcoStockQuantity] = useState(500)
  const [selectedSizeVariant, setSelectedSizeVariant] = useState<string | null>(null)
  const [selectedSizeCode, setSelectedSizeCode] = useState<string | null>(null)
  const [selectedColorCode, setSelectedColorCode] = useState<string | null>(null)
  const [selectedQtyVal, setSelectedQtyVal] = useState<number | null>(null)
  // Batch count for sizeVariants products (Header Bag) - each batch = 100pcs
  const [sizeVariantBatchCount, setSizeVariantBatchCount] = useState(1)
  const [selectedFinish, setSelectedFinish] = useState<'matte' | 'glossy'>('matte')
  // For multi-quantity size products (Mailer Bag)
  const [selectedSizeWithQty, setSelectedSizeWithQty] = useState<string | null>(null)
  const [selectedQtyOption, setSelectedQtyOption] = useState<number | null>(null)

  // Problem card collapse states (collapsed by default)
  const [isConvCardExpanded, setIsConvCardExpanded] = useState(false)
  const [isEcoCustomLabelExpanded, setIsEcoCustomLabelExpanded] = useState(false)
  const [isPlaSealingExpanded, setIsPlaSealingExpanded] = useState(false)
  const [isB2BDynamicLabelExpanded, setIsB2BDynamicLabelExpanded] = useState(false)
  const [isEcoStockExpanded, setIsEcoStockExpanded] = useState(false)
  const [isDynamicDescExpanded, setIsDynamicDescExpanded] = useState(false)
  
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
  
  // Custom size states for Shrink Sleeve (user input)
  const [customWidth, setCustomWidth] = useState(100)
  const [customHeight, setCustomHeight] = useState(150)
  
  // Tab state for Package Visualization / Specifications
  const [activeTab, setActiveTab] = useState<'visualization' | 'specifications'>('visualization')

  // Derive lists of dimensions for Multi-Dimensional Selector
  const isMultiDimensional = isEcoStock && ecoStockProduct && product && (
    product.id === 'flat-bottom-pouch-tin-tie' ||
    product.id === 'coffee-tea-one-sided-zipper-flat-bottom-pouch-with-hanging-strip' ||
    product.id === 'textured-burlap-cork-pattern-coffee-pouch-with-valve' ||
    product.id === 'flat-bottom-pouch-with-card-insert'
  );

  const { uniqueSizes, uniqueColors, uniqueQuantities } = useMemo(() => {
    if (!isMultiDimensional || !ecoStockProduct?.sizeVariants || !product) {
      return { uniqueSizes: [], uniqueColors: [], uniqueQuantities: [] };
    }
    
    const sizesSet = new Set<string>();
    const colorsSet = new Set<string>();
    const quantitiesSet = new Set<number>();
    
    ecoStockProduct.sizeVariants.forEach(variant => {
      const parsed = parseVariant(variant, product.id);
      if (parsed.size) sizesSet.add(parsed.size);
      if (parsed.color) colorsSet.add(parsed.color);
      if (parsed.qty) quantitiesSet.add(parsed.qty);
    });
    
    return {
      uniqueSizes: Array.from(sizesSet),
      uniqueColors: Array.from(colorsSet),
      uniqueQuantities: Array.from(quantitiesSet).sort((a, b) => a - b)
    };
  }, [isMultiDimensional, ecoStockProduct, product?.id]);

  // Synchronize multi-dimensional state from selectedSizeVariant
  useEffect(() => {
    if (isEcoStock && ecoStockProduct && ecoStockProduct.sizeVariants && ecoStockProduct.sizeVariants.length > 0 && selectedSizeVariant) {
      const activeVariant = ecoStockProduct.sizeVariants.find(v => v.id === selectedSizeVariant);
      if (activeVariant) {
        const parsed = parseVariant(activeVariant, ecoStockProduct.id);
        if (parsed.size) setSelectedSizeCode(parsed.size);
        if (parsed.color) setSelectedColorCode(parsed.color);
        if (parsed.qty) setSelectedQtyVal(parsed.qty);
        if (activeVariant.heroImageIndex !== undefined) {
          setSelectedMainImage(activeVariant.heroImageIndex);
        }
      }
    }
  }, [selectedSizeVariant, ecoStockProduct, isEcoStock]);

  const handleSelectDimension = (type: 'size' | 'color' | 'qty', value: any) => {
    if (!ecoStockProduct?.sizeVariants) return;
    
    let newSize = selectedSizeCode;
    let newColor = selectedColorCode;
    let newQty = selectedQtyVal;
    
    if (type === 'size') {
      newSize = value;
      setSelectedSizeCode(value);
    } else if (type === 'color') {
      newColor = value;
      setSelectedColorCode(value);
    } else if (type === 'qty') {
      newQty = value;
      setSelectedQtyVal(value);
    }
    
    // Find the perfect matching variant
    let matched = ecoStockProduct.sizeVariants.find(v => {
      const parsed = parseVariant(v, product.id);
      return parsed.size === newSize && parsed.color === newColor && parsed.qty === newQty;
    });
    
    // Fallback search: if no exact match, find first variant matching the new dimension
    if (!matched) {
      matched = ecoStockProduct.sizeVariants.find(v => {
        const parsed = parseVariant(v, product.id);
        if (type === 'size') return parsed.size === newSize;
        if (type === 'color') return parsed.color === newColor;
        return parsed.qty === newQty;
      });
    }
    
    if (matched) {
      setSelectedSizeVariant(matched.id);
      if (matched.heroImageIndex !== undefined) {
        setSelectedMainImage(matched.heroImageIndex!);
      }
    }
  };
  
  // Tab state for Specifications / Insights
  const [specTab, setSpecTab] = useState<'specs' | 'insights'>('specs')
    
    // Insights collapsed state - collapsed by default
    const [isInsightsExpanded, setIsInsightsExpanded] = useState(false)
  
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
  const [selectedVideoUrl, setSelectedVideoUrl] = useState<string | null>(null)
  
  // Collapsible section states
  const [isLeftCollapsed, setIsLeftCollapsed] = useState(true)
  const [isRightCollapsed, setIsRightCollapsed] = useState(true)
  const [isTestimonialsCollapsed, setIsTestimonialsCollapsed] = useState(true)
  
  // Mobile bottom bar state
  const [mobileActivePanel, setMobileActivePanel] = useState<'none' | 'preview' | 'testimonials' | 'price'>('none')
  
  // Share configuration modal state
  const [isShareModalOpen, setIsShareModalOpen] = useState(false)
  const [shareUrl, setShareUrl] = useState('')
  const [copySuccess, setCopySuccess] = useState(false)
  
  // Compare options modal state
  const [compareModal, setCompareModal] = useState<{ type: 'material' | 'size' | 'closure' | 'surface' | 'barrier' | 'stiffness' | 'additional' | null; isOpen: boolean }>({ type: null, isOpen: false })
  
  // Option comparison data
  const MATERIAL_OPTIONS = [
    { id: 'pcr', name: 'PCR or Bio Plastic', img: '/imgs/store/eco-material/pcr-or-biope.webp', description: 'Made with 30% post-consumer recycled content or 50% sugarcane-based bio-PE, reducing carbon footprint by up to 30%.', bestFor: ['Sustainability-focused brands', 'Coffee roasters', 'Specialty food'], premium: false },
    { id: 'mono', name: 'Mono Recyclable Plastic', img: '/imgs/store/eco-material/recycle.webp', description: 'Single-material construction (mono-PE or mono-PP) designed for maximum recyclability in curbside recycling. 95% recyclable.', bestFor: ['EU/UK markets', 'PPWR compliance', 'Eco-conscious brands'], premium: false },
    { id: 'compost', name: 'Biodegradable and Compostable', img: '/imgs/store/eco-material/compostable.webp', description: 'Certified compostable materials breaking down within 180 days in industrial composting, returning nutrients to soil.', bestFor: ['Organic foods', 'Farmers markets', 'Health food stores'], premium: true }
  ]
  
  const SIZE_OPTIONS = [
    { id: 'XXXS', name: 'XXXS - Extra Extra Extra Small', img: '/imgs/store/size/stand-up/xxxs.webp', description: 'Capacity: 10-30g / 0.35-1oz. Perfect for single-serve samples and trial sizes.', bestFor: ['Samples', 'Single-serve', 'Trial products'], premium: false },
    { id: 'XXS', name: 'XXS - Extra Extra Small', img: '/imgs/store/size/stand-up/xxs.webp', description: 'Capacity: 30-50g / 1-1.75oz. Great for premium samples and small portions.', bestFor: ['Premium samples', 'Small portions'], premium: false },
    { id: 'XS', name: 'XS - Extra Small', img: '/imgs/store/size/stand-up/xs.webp', description: 'Capacity: 50-100g / 1.75-3.5oz. Ideal for specialty foods and premium snacks.', bestFor: ['Specialty foods', 'Premium snacks'], premium: false },
    { id: 'S', name: 'S - Small', img: '/imgs/store/size/stand-up/s.webp', description: 'Capacity: 100-200g / 3.5-7oz. Standard retail size for coffee, tea, and snacks.', bestFor: ['Retail coffee', 'Tea', 'Snacks'], premium: false },
    { id: 'L', name: 'L - Large', img: '/imgs/store/size/stand-up/l.webp', description: 'Capacity: 350-500g / 12-17.5oz. Great for large retail and bulk snacks.', bestFor: ['Large retail', 'Bulk snacks'], premium: false },
    { id: 'XL', name: 'XL - Extra Large', img: '/imgs/store/size/stand-up/xl.webp', description: 'Capacity: 500-1000g / 17.5-35oz. Perfect for bulk packaging and value packs.', bestFor: ['Bulk packaging', 'Value packs'], premium: false },
    { id: 'XXL', name: 'XXL - Extra Extra Large', img: '/imgs/store/size/stand-up/xxl.webp', description: 'Capacity: 1000-2000g / 35-70oz. Commercial and wholesale sizes.', bestFor: ['Commercial', 'Wholesale'], premium: false }
  ]
  
  const CLOSURE_OPTIONS = [
    { id: 'No', name: 'No Closure', img: '/imgs/store/closure/no-zipper.webp', description: 'Simple open-top design. Ideal for heat-sealed products.', bestFor: ['Single-use', 'Heat sealed'], premium: false },
    { id: 'Regular Zipper', name: 'Regular Zipper', img: '/imgs/store/closure/normal-zipper.webp', description: 'Standard press-to-close zipper. Reusable and convenient.', bestFor: ['Snacks', 'Coffee', 'General use'], premium: false },
    { id: 'One-Sided Zipper', name: 'One-Sided Zipper', img: '/imgs/store/closure/front-zipper.webp', description: 'Front-facing zipper for easy access. Modern aesthetic.', bestFor: ['Premium products', 'Display'], premium: false },
    { id: 'Child Resistant Zipper', name: 'Child Resistant', img: '/imgs/store/closure/child-resistant-zipper.webp', description: 'Safety zipper requiring press-and-slide action.', bestFor: ['CBD', 'Supplements', 'Pharmaceuticals'], premium: true },
    { id: 'Slider', name: 'Slider Zipper', img: '/imgs/store/closure/slider-zipper.webp', description: 'Easy-glide slider for effortless opening and closing.', bestFor: ['Large bags', 'Frequent access'], premium: true },
    { id: 'Tin Tie', name: 'Tin Tie', img: '/imgs/store/closure/tin-tie.webp', description: 'Traditional fold-over closure with wire tie.', bestFor: ['Coffee', 'Bakery', 'Artisan products'], premium: false },
    { id: 'Spout', name: 'Spout', img: '/imgs/store/closure/spout.webp', description: 'Screw-cap spout for liquid or powder products.', bestFor: ['Liquids', 'Powders', 'Baby food'], premium: true },
    { id: 'Adhesive Tape', name: 'Adhesive Tape', img: '/imgs/store/closure/adhesive-tap.webp', description: 'Peel-and-seal adhesive strip for secure closure.', bestFor: ['Shipping bags', 'E-commerce'], premium: false }
  ]
  
  const BARRIER_OPTIONS_DATA = [
    { id: 'mid', name: 'Mid Barrier (Optional Window)', img: '/imgs/store/barrier/3-clear.webp', description: 'Clear barrier with 6-9 months shelf life. Good moisture and moderate oxygen protection. Optional clear window for product visibility.', bestFor: ['Dry snacks', 'Candy', 'Nuts', 'Product visibility'], premium: false },
    { id: 'high', name: 'High Barrier (No Window)', img: '/imgs/store/barrier/3-foil.webp', description: 'Metalised barrier with 9-12 months shelf life. Excellent oxygen and moisture protection. Blocks light to preserve freshness.', bestFor: ['Coffee', 'Tea', 'Spices', 'Sensitive products'], premium: false },
    { id: 'highest', name: 'Highest Barrier (Aluminum)', img: '/imgs/store/barrier/3-foil.webp', description: 'Aluminum foil barrier with 12-18 months shelf life. Maximum protection against oxygen, moisture, and light.', bestFor: ['Pharmaceuticals', 'Premium coffee', 'Long shelf life'], premium: true }
  ]
  
  const STIFFNESS_OPTIONS = [
    { id: 'soft', name: 'Without Paper Lining (Softer)', img: '/imgs/store/stiff/no-paper.webp', description: 'More flexible, lighter weight, thinner profile. Standard film construction without added paper layer.', bestFor: ['Flexible products', 'Cost-sensitive', 'Lighter weight'], premium: false },
    { id: 'stiff', name: 'With Paper Lining (Stiffer)', img: '/imgs/store/stiff/with-paper.webp', description: 'Better standing stability, premium feel. Kraft paper layer adds 50-60 micron / 2 mil thickness.', bestFor: ['Premium brands', 'Retail display', 'Coffee bags'], premium: true }
  ]
  
  const ADDITIONAL_OPTIONS = [
    { id: 'valve', name: 'Degassing Valve', img: '/imgs/store/additional/valve.webp', description: 'One-way valve releases gases (CO2) while preventing air entry. Essential for freshly roasted coffee and fermented products.', bestFor: ['Coffee', 'Tea', 'Fermented foods'], premium: true },
    { id: 'laser', name: 'Laser Scoring (Easy Tear)', img: '/imgs/store/additional/laser-tear.webp', description: 'Precision laser-cut tear lines for easy, clean opening. Professional finish with no scissors needed.', bestFor: ['Consumer convenience', 'Single-serve', 'Premium products'], premium: false },
    { id: 'hang', name: 'Hang Hole', img: '/imgs/store/additional/hang-hole.webp', description: 'Euro-slot or round hang hole for retail display hooks. Makes your product easy to merchandise.', bestFor: ['Retail display', 'Convenience stores', 'Gift shops'], premium: false }
  ]
  
  // URL search params for shareable configurations
  const [searchParams] = useSearchParams()
  
  // Restore configuration from URL params (for edit from cart)
  useEffect(() => {
    const isEdit = searchParams.get('edit') === '1'
    if (!isEdit) return
    
    // Restore all configuration from URL params
    const material = searchParams.get('material')
    const size = searchParams.get('size')
    const closure = searchParams.get('closure')
    const surface = searchParams.get('surface')
    const barrier = searchParams.get('barrier')
    const stiffness = searchParams.get('stiffness')
    const shipping = searchParams.get('shipping')
    const designs = searchParams.get('designs')
    const quantity = searchParams.get('quantity')
    const laser = searchParams.get('laser')
    const valve = searchParams.get('valve')
    const hangHole = searchParams.get('hangHole')
    
    if (material) setSelectedMaterial(material)
    if (size) setSelectedSize(size)
    if (closure) setSelectedClosure(closure as ClosureType)
    if (surface) setSelectedSurface(surface as SurfaceType)
    if (barrier) setSelectedBarrier(barrier)
    if (stiffness) setSelectedStiffness(stiffness)
    if (shipping) setSelectedShipping(shipping)
    if (designs) setSelectedDesignCount(parseInt(designs))
    if (quantity) {
      // Find matching quantity option based on the numeric value
      const qtyNum = parseInt(quantity)
      const ecoDigitalQtyOptions = [
        '1,000 (Digital print)', '2,000 (Digital print)', '3,000 (Digital print)',
        '5,000 (Flexo print)', '10,000 (Flexo print)', '20,000 (Flexo print)',
        '30,000 (Flexo print)', '50,000 (Flexo print)'
      ]
      const matchingQty = ecoDigitalQtyOptions.find(q => {
        const numPart = parseInt(q.replace(/,/g, '').split(' ')[0])
        return numPart === qtyNum
      })
      if (matchingQty) setSelectedQuantity(matchingQty)
    }
    if (laser) setSelectedLaserScoring(laser as 'Yes' | 'No')
    if (valve) setSelectedValve(valve as 'Yes' | 'No')
    if (hangHole) setSelectedHangHole(hangHole as 'Yes' | 'No')
  }, [searchParams])
  
  // Generate shareable URL with current configuration
  const generateShareUrl = useCallback(() => {
    const baseUrl = window.location.origin
    const params = new URLSearchParams()
    
    if (isEcoDigital) {
      if (productId === 'eco-shrinksleeve') {
        params.set('width', customWidth.toString())
        params.set('height', customHeight.toString())
      }
      params.set('material', selectedMaterial)
      params.set('size', selectedSize)
      params.set('quantity', selectedQuantity)
      params.set('designs', selectedDesignCount.toString())
      params.set('barrier', selectedBarrier)
      params.set('stiffness', selectedStiffness)
      params.set('closure', selectedClosure)
      params.set('surface', selectedSurface)
      params.set('laser', selectedLaserScoring)
      params.set('valve', selectedValve)
      params.set('adhesive', selectedAdhesiveTape)
      params.set('hanghole', selectedHangHole)
      params.set('spout', selectedSpout)
      params.set('shipping', selectedShipping)
    } else if (isConventionalDigital) {
      params.set('size', selectedConvSize)
      params.set('quantity', selectedConvQuantity.toString())
    } else if (isBoxes && ecoStockProduct) {
      if (selectedSizeVariant) params.set('variant', selectedSizeVariant)
      if (selectedSizeWithQty) params.set('sizeQty', selectedSizeWithQty)
      if (selectedQtyOption) params.set('qtyOption', selectedQtyOption.toString())
      params.set('quantity', selectedEcoStockQuantity.toString())
    }
    
    return `${baseUrl}/store/product/${productId}?${params.toString()}`
  }, [isEcoDigital, isConventionalDigital, isBoxes, productId, selectedMaterial, selectedSize, selectedQuantity, selectedDesignCount, selectedBarrier, selectedStiffness, selectedClosure, selectedSurface, selectedLaserScoring, selectedValve, selectedAdhesiveTape, selectedHangHole, selectedSpout, selectedShipping, selectedConvSize, selectedConvQuantity, ecoStockProduct, selectedSizeVariant, selectedSizeWithQty, selectedQtyOption, selectedEcoStockQuantity, customWidth, customHeight])
  
  // Open share modal
  const handleShareClick = () => {
    const url = generateShareUrl()
    setShareUrl(url)
    setIsShareModalOpen(true)
    setCopySuccess(false)
  }
  
  // Copy share URL to clipboard
  const handleCopyUrl = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl)
      setCopySuccess(true)
      setTimeout(() => setCopySuccess(false), 2000)
    } catch (err) {
      console.error('Failed to copy:', err)
    }
  }
  
  // Load configuration from URL params on mount
  useEffect(() => {
    if (!product) return
    
    // Eco Digital params
    if (isEcoDigital) {
      const material = searchParams.get('material')
      const size = searchParams.get('size')
      const quantity = searchParams.get('quantity')
      const designs = searchParams.get('designs')
      const barrier = searchParams.get('barrier')
      const stiffness = searchParams.get('stiffness')
      const closure = searchParams.get('closure')
      const surface = searchParams.get('surface')
      const laser = searchParams.get('laser')
      const valve = searchParams.get('valve')
      const adhesive = searchParams.get('adhesive')
      const hanghole = searchParams.get('hanghole')
      const spout = searchParams.get('spout')
      const shipping = searchParams.get('shipping')
      
      if (material) setSelectedMaterial(material)
      if (size) setSelectedSize(size)
      if (quantity) setSelectedQuantity(quantity)
      if (designs) setSelectedDesignCount(parseInt(designs) || 1)
      if (barrier) setSelectedBarrier(barrier)
      if (stiffness) setSelectedStiffness(stiffness)
      if (closure) setSelectedClosure(closure as ClosureType)
      if (surface) setSelectedSurface(surface as SurfaceType)
      if (laser) setSelectedLaserScoring(laser as 'Yes' | 'No')
      if (valve) setSelectedValve(valve as 'Yes' | 'No')
      if (adhesive) setSelectedAdhesiveTape(adhesive as 'Yes' | 'No')
      if (hanghole) setSelectedHangHole(hanghole as 'Yes' | 'No')
      if (spout) setSelectedSpout(spout as 'Yes' | 'No')
      if (shipping) setSelectedShipping(shipping)
    }
    
    // Conventional Digital params
    if (isConventionalDigital) {
      const size = searchParams.get('size')
      const quantity = searchParams.get('quantity')
      if (size) setSelectedConvSize(size)
      if (quantity) setSelectedConvQuantity(parseInt(quantity) || 100)
    }
    
    // Boxes params
    if (isBoxes) {
      const variant = searchParams.get('variant')
      const sizeQty = searchParams.get('sizeQty')
      const qtyOption = searchParams.get('qtyOption')
      const quantity = searchParams.get('quantity')
      if (variant) setSelectedSizeVariant(variant)
      if (sizeQty) setSelectedSizeWithQty(sizeQty)
      if (qtyOption) setSelectedQtyOption(parseInt(qtyOption))
      if (quantity) setSelectedEcoStockQuantity(parseInt(quantity) || 500)
    }
    
    // Eco Stock params
    if (isEcoStock && ecoStockProduct) {
      const quantity = searchParams.get('quantity')
      if (quantity) setSelectedEcoStockQuantity(parseInt(quantity) || ecoStockProduct.minQuantity || 500)
      else if (!searchParams.has('quantity')) setSelectedEcoStockQuantity(ecoStockProduct.minQuantity || 500)
      
      // Auto-select first variant
      const variant = searchParams.get('variant')
      if (variant) {
        setSelectedSizeVariant(variant)
      } else if (ecoStockProduct.sizeVariants && ecoStockProduct.sizeVariants.length > 0 && !selectedSizeVariant) {
        setSelectedSizeVariant(ecoStockProduct.sizeVariants[0].id)
      }
    }
  }, [product, isEcoDigital, isConventionalDigital, isBoxes, isEcoStock, ecoStockProduct, searchParams, selectedSizeVariant])
  
  // Initialize from product defaults (only if no URL params)
  useEffect(() => {
    if (ecoProduct?.ecoConfig) {
      // Check if URL has configuration params - if so, skip defaults
      const hasUrlParams = searchParams.has('material') || searchParams.has('size') || searchParams.has('quantity') || searchParams.has('width') || searchParams.has('height')
      if (hasUrlParams) {
        const w = searchParams.get('width')
        const h = searchParams.get('height')
        if (w) setCustomWidth(Number(w))
        if (h) setCustomHeight(Number(h))
        return // URL params take priority
      }
      
      setSelectedMaterial(ecoProduct.ecoConfig.defaultMaterial)
      setSelectedSize(ecoProduct.ecoConfig.defaultSize)
      setSelectedQuantity(ecoProduct.ecoConfig.defaultQuantity)
      setSelectedDesignCount(ecoProduct.ecoConfig.defaultDesignCount)
      setSelectedBarrier(ecoProduct.ecoConfig.defaultBarrier)
      setSelectedStiffness(ecoProduct.ecoConfig.defaultStiffness)
      setSelectedClosure(ecoProduct.ecoConfig.defaultZipper as ClosureType)
      setSelectedShipping(ecoProduct.ecoConfig.defaultShippingMethod)
    }
  }, [ecoProduct, searchParams])

  // Sync custom width/height with selectedSize for eco-shrinksleeve pricing
  useEffect(() => {
    if (product?.id === 'eco-shrinksleeve') {
      // Map custom lay-flat dimensions area to closest standard EcoSizeCode
      const area = customWidth * customHeight
      let sizeCode: string = 'XS'
      if (area <= 9900) sizeCode = 'XXXS'
      else if (area <= 17600) sizeCode = 'XXS'
      else if (area <= 26000) sizeCode = 'XS'
      else if (area <= 30000) sizeCode = 'S'
      else if (area <= 36800) sizeCode = 'M'
      else if (area <= 45000) sizeCode = 'L'
      else if (area <= 60000) sizeCode = 'XL'
      else sizeCode = 'XXL'
      
      setSelectedSize(sizeCode)
      
      // Force defaults for options that must be removed/disabled
      setSelectedClosure('No')
      setSelectedBarrier('mid clear mid barrier (Optional Window)')
      setSelectedStiffness('Without Paper Lining (Softer)')
      setSelectedMaterial('Mono Recyclable Plastic')
    }
  }, [customWidth, customHeight, product?.id])

  // Scroll to top and reset image index when product changes
  useEffect(() => {
    window.scrollTo(0, 0)
    setSelectedMainImage(0)
  }, [productId])

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
    
    // Custom calculation for Small Sachet
    if (conventionalProduct.id === 'small-sachet-conventional') {
      let basePrice = 0
      let total = 0
      
      if (sachetPrintMethod === 'unprinted') {
        const option = SACHET_UNPRINTED_OPTIONS.find(opt => opt.id === sachetUnprintedColor)
        const totalVal = (option?.price || 0) * sachetUnprintedPacks
        return {
          total: totalVal,
          unit: option ? totalVal / (option.pcs * sachetUnprintedPacks) : 0
        }
      } else if (sachetPrintMethod === 'hot-stamping') {
        if (selectedConvQuantity <= 500) basePrice = 159.60
        else if (selectedConvQuantity <= 1000) basePrice = 210.00
        else basePrice = 285.60
        
        total = basePrice
        if (sachetRoundCorners) {
          total += selectedConvQuantity * 0.0336
        }
      } else if (sachetPrintMethod === 'digital') {
        if (selectedConvQuantity <= 1000) basePrice = 231.00
        else if (selectedConvQuantity <= 2000) basePrice = 336.00
        else if (selectedConvQuantity <= 3000) basePrice = 441.00
        else if (selectedConvQuantity <= 5000) basePrice = selectedConvQuantity * 0.1302
        else basePrice = selectedConvQuantity * 0.1092
        
        total = basePrice
        if (sachetRoundCorners) {
          total += selectedConvQuantity * 0.0336
        }
      } else {
        basePrice = selectedConvQuantity * 0.0378
        const setupFee = sachetColorsCount * 126.00
        total = basePrice + setupFee
        if (sachetRoundCorners) {
          total += selectedConvQuantity * 0.0336
        }
      }
      
      return {
        total,
        unit: total / selectedConvQuantity
      }
    }
    
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
  }, [isConventionalDigital, conventionalProduct, selectedConvSize, selectedConvQuantity, sachetPrintMethod, sachetRoundCorners, sachetStampingCoverage, sachetColorsCount, sachetUnprintedColor, sachetUnprintedPacks])
  
  // Get available sizes for conventional product
  const conventionalSizes = useMemo(() => {
    if (!isConventionalDigital || !conventionalProduct) return []
    const shapeKey = conventionalProduct.shape
    const priceData = PRICING_DATA[shapeKey]
    if (!priceData) return []
    return Object.keys(priceData).map(sizeId => {
      const sizeInfo = POUCH_SIZES.find(s => s.id === sizeId)
      if (!sizeInfo) return { id: sizeId, label: sizeId, dimensions: sizeId, imperial: '' }
      
      return { 
        ...sizeInfo, 
        label: formatPouchSizeLabel(sizeInfo, conventionalProduct.shape)
      }
    })
  }, [isConventionalDigital, conventionalProduct])

  // Reset selected conventional size if not available for the active product
  useEffect(() => {
    if (isConventionalDigital && conventionalProduct && conventionalSizes.length > 0) {
      const hasSize = conventionalSizes.some(s => s.id === selectedConvSize)
      if (!hasSize) {
        setSelectedConvSize(conventionalSizes[0].id)
      }
    }
  }, [isConventionalDigital, conventionalProduct, conventionalSizes, selectedConvSize])

  // Get available quantities for selected conventional product and size
  const conventionalQuantities = useMemo(() => {
    if (!isConventionalDigital || !conventionalProduct) return QUANTITY_OPTIONS
    if (conventionalProduct.id === 'small-sachet-conventional') {
      if (sachetPrintMethod === 'unprinted') {
        return [100]
      }
      if (sachetPrintMethod === 'hot-stamping') {
        return [500, 1000, 2000]
      } else if (sachetPrintMethod === 'digital') {
        return [1000, 2000, 3000, 5000, 10000, 20000]
      } else {
        return [50000]
      }
    }
    const shapeKey = conventionalProduct.shape
    const priceData = PRICING_DATA[shapeKey]
    if (!priceData || !priceData[selectedConvSize]) return QUANTITY_OPTIONS
    return Object.keys(priceData[selectedConvSize]).map(Number).sort((a, b) => a - b)
  }, [isConventionalDigital, conventionalProduct, selectedConvSize, sachetPrintMethod])

  // Reset selected conventional quantity if not available for the active size
  useEffect(() => {
    if (isConventionalDigital && conventionalQuantities.length > 0) {
      if (!conventionalQuantities.includes(selectedConvQuantity)) {
        setSelectedConvQuantity(conventionalQuantities[0])
      }
    }
  }, [isConventionalDigital, conventionalQuantities, selectedConvQuantity])
  
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
    // Random full-page background for Product not found page - WebP format
    const HERO_IMAGES = [
      '/imgs/banner/transparent/a_achievepack_hero_3d_depth_5416790 (1).webp',
      '/imgs/banner/transparent/a_achievepack_hero_3d_depth_5416790 (2).webp',
      '/imgs/banner/transparent/a_achievepack_hero_eco_nature_7180632 (1).webp',
      '/imgs/banner/transparent/a_achievepack_hero_flatlay_5941661 (1).webp',
      '/imgs/banner/transparent/a_achievepack_hero_gradient_eco_9331347 (1).webp',
      '/imgs/banner/transparent/a_achievepack_hero_shot_1_white_background_2665361 (1).webp',
    ]
    const randomHero = HERO_IMAGES[Math.floor(Math.random() * HERO_IMAGES.length)]
    
    return (
      <>
        <SEO 
          title="Product Not Found | Achieve Pack"
          description="The requested product was not found on Achieve Pack. Browse our selection of sustainable and high-barrier custom packaging."
          url="https://achievepack.com/store"
          noindex={true}
        />
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
              <h1 className="text-3xl font-bold text-neutral-900 mb-4">{t(`${p}.productNotFound`)}</h1>
              <p className="text-lg text-neutral-600 mb-8">
                {t(`${p}.sorryThisProductDoesnTExistOrM`)}</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Link 
                  to="/store" 
                  className="inline-flex items-center justify-center gap-2 bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-700 transition"
                >
                  <ShoppingCart className="h-5 w-5" /> {t(`${p}.browseProducts`)}</Link>
                <Link 
                  to="/" 
                  className="inline-flex items-center justify-center gap-2 bg-neutral-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-neutral-700 transition"
                >
                  <Home className="h-5 w-5" /> {t(`${p}.backHome`)}</Link>
              </div>
              
              {/* Popular Links */}
              <div className="border-t border-neutral-200 pt-6">
                <p className="text-sm text-neutral-500 mb-4">{t(`${p}.popularCategories`)}</p>
                <div className="flex flex-wrap gap-3 justify-center">
                  <Link to="/materials/compostable" className="text-sm text-primary-600 hover:underline">
                    {t(`${p}.compostableBags`)}</Link>
                  <span className="text-neutral-300">•</span>
                  <Link to="/industry/coffee-tea" className="text-sm text-primary-600 hover:underline">
                    {t(`${p}.coffeePackaging`)}</Link>
                  <span className="text-neutral-300">•</span>
                  <Link to="/packaging/stand-up-pouches" className="text-sm text-primary-600 hover:underline">
                    {t(`${p}.standUpPouches`)}</Link>
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
    
    const cartItem = {
      productId: product.id,
      name: product.name,
      image: productImage,
      variant: { 
        shape: variantDescription, 
        size: selectedSize, 
        barrier: selectedBarrier, 
        finish: selectedSurface.toLowerCase(),
        material: selectedMaterial,
        closure: selectedClosure,
        surface: selectedSurface,
        stiffness: selectedStiffness,
        shipping: selectedShipping,
        designCount: selectedDesignCount,
        quantityUnits: parseInt(selectedQuantity.replace(/,/g, '').split(' ')[0]),
        laserScoring: selectedLaserScoring,
        valve: selectedValve,
        hangHole: selectedHangHole
      },
      quantity: 1,
      unitPrice: totalPrice,
      totalPrice: totalPrice,
      configurationLink: window.location.href
    }
    
    // For custom products, add to RFQ instead of cart
    if (isCustomProduct) {
      addToRfq({
        ...cartItem,
        isRfqItem: true
      })
      setActiveCartMode('rfq')
      setIsCartOpen(true)
    } else {
      addToCart(cartItem)
      setIsCartOpen(true)
    }
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
                  product.category === 'conventional-stock' ? 'Conventional Stock Packaging' :
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

  // Combine default and product-specific FAQs dynamically based on substrate category
  const combinedFAQs = useMemo(() => {
    const specificFAQs = productFAQData?.faqs || []
    if (isBoxes || product?.id.includes('box-') || product?.category === 'boxes') {
      return [...specificFAQs, ...DEFAULT_BOXES_FAQS]
    }
    if (isLabelProduct || product?.id.includes('label') || product?.id.includes('sticker')) {
      return [...specificFAQs, ...DEFAULT_LABEL_FAQS]
    }
    return [...specificFAQs, ...DEFAULT_FAQS]
  }, [productFAQData, isBoxes, isLabelProduct, product])

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
      <SEO 
        title={`${product.name} | Achieve Pack - Eco-Friendly Packaging`}
        description={product.description}
        url={`https://achievepack.com/store/product/${product.id}`}
        image={`https://achievepack.com${product.images[0]}`}
        type="product"
        schema={productSchema || undefined}
        faq={combinedFAQs}
      />
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
                src="/ap-logo.svg" 
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
              <ArrowLeft className="h-4 w-4" /> {t(`${p}.backToStore`)}</a>
          </div>
          <div className="flex items-center gap-3">
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
            <LanguageSelector />
          </div>
        </div>
      </header>

      {/* Spacer for fixed header */}
      <div className="h-[60px]"></div>

      <main className="max-w-7xl mx-auto px-3 sm:px-4 py-6 sm:py-8 lg:pt-14 overflow-x-hidden">
        {/* Main Product Section for Conventional Digital Products */}
        {isConventionalDigital && conventionalProduct && (
          <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 mb-8">
            {/* Left Column - Image Gallery */}
            <div className={`space-y-4 lg:sticky lg:top-24 lg:self-start lg:max-h-[calc(100vh-120px)] lg:overflow-y-auto transition-all duration-500 ease-in-out ${
              isFaqVisible ? 'lg:opacity-0 lg:scale-95 lg:pointer-events-none' : 'lg:opacity-100 lg:scale-100'
            }`}>
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
                <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 gap-2">
                  {product.images.map((img, index) => (
                    <button
                      key={index}
                      onClick={() => startTransition(() => setSelectedMainImage(index))}
                      className={`relative aspect-square bg-white rounded-lg border-2 overflow-hidden transition-all hover:shadow-md ${
                        selectedMainImage === index ? 'border-primary-600 ring-2 ring-primary-200' : 'border-neutral-200'
                      }`}
                    >
                      <img src={img} alt={`View ${index + 1}`} className="w-full h-full object-cover p-1 pointer-events-none" loading="lazy" decoding="async" />
                    </button>
                  ))}
                  {/* Separate Video Thumbnails */}
                  {(product as any).videoUrls?.map((vUrl: string, vIdx: number) => (
                    <button
                      key={`video-${vIdx}`}
                      onClick={() => {
                        setSelectedVideoUrl(vUrl);
                        setIsVideoModalOpen(true);
                      }}
                      className="relative aspect-square bg-neutral-900 rounded-lg border-2 border-neutral-200 overflow-hidden transition-all hover:shadow-md hover:border-red-400"
                    >
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center shadow-lg">
                          <svg className="w-5 h-5 text-white ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M8 5v14l11-7z" />
                          </svg>
                        </div>
                      </div>
                      <div className="absolute bottom-1 left-0 right-0 text-center">
                        <span className="text-[10px] text-white font-medium uppercase tracking-wider">{t(`${p}.video`)}{vIdx + 1}</span>
                      </div>
                    </button>
                  )) || ((product as any).videoUrl && (
                    <button
                      onClick={() => {
                        setSelectedVideoUrl((product as any).videoUrl!);
                        setIsVideoModalOpen(true);
                      }}
                      className="relative aspect-square bg-neutral-900 rounded-lg border-2 border-neutral-200 overflow-hidden transition-all hover:shadow-md hover:border-red-400"
                    >
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center shadow-lg">
                          <svg className="w-5 h-5 text-white ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M8 5v14l11-7z" />
                          </svg>
                        </div>
                      </div>
                      <div className="absolute bottom-1 left-0 right-0 text-center">
                        <span className="text-[10px] text-white font-medium uppercase tracking-wider">{t(`${p}.video`)}</span>
                      </div>
                    </button>
                  ))}
                </div>
              )}
              
              {/* Specifications Tab */}
              <div className="bg-white rounded-lg border border-neutral-200 overflow-hidden">
                <div className="flex border-b border-neutral-200">
                  <button
                    onClick={() => { setActiveTab('visualization'); setSpecTab('specs'); }}
                    className={`flex-1 px-3 py-3 text-sm font-medium transition ${
                      activeTab === 'visualization'
                        ? 'bg-primary-50 text-primary-700 border-b-2 border-primary-600'
                        : 'text-neutral-600 hover:bg-neutral-50'
                    }`}
                  >
                    {t(`${p}.details`)}</button>
                  <button
                    onClick={() => { setActiveTab('specifications'); setSpecTab('specs'); }}
                    className={`flex-1 px-3 py-3 text-sm font-medium transition ${
                      activeTab === 'specifications'
                        ? 'bg-primary-50 text-primary-700 border-b-2 border-primary-600'
                        : 'text-neutral-600 hover:bg-neutral-50'
                    }`}
                  >
                    {t(`${p}.specs`)}</button>
                </div>
                <div className="p-4">
                  {activeTab === 'visualization' ? (
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <span className="text-primary-500">✓</span>
                        <div>
                          <div className="font-medium text-neutral-800">{t(`${p}.digitalPrintQuality`)}</div>
                          <div className="text-sm text-neutral-500">{t(`${p}.highResolutionPrintingWithVibr`)}</div>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <span className="text-primary-500">✓</span>
                        <div>
                          <div className="font-medium text-neutral-800">{t(`${p}.fastTurnaround`)}</div>
                          <div className="text-sm text-neutral-500">{t(`${p}.1520BusinessDaysProductionTime`)}</div>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <span className="text-primary-500">✓</span>
                        <div>
                          <div className="font-medium text-neutral-800">{t(`${p}.freeShipping`)}</div>
                          <div className="text-sm text-neutral-500">{t(`${p}.airFreightShippingIncludedInPr`)}</div>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <span className="text-primary-500">✓</span>
                        <div>
                          <div className="font-medium text-neutral-800">{t(`${p}.lowMoq`)}</div>
                          <div className="text-sm text-neutral-500">{t(`${p}.startingFromJust100Pieces`)}</div>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <dl className="grid grid-cols-1 gap-y-3 text-sm">
                      <div className="grid grid-cols-3 gap-2">
                        <dt className="text-neutral-500">{t(`${p}.shape`)}</dt>
                        <dd className="text-neutral-900 col-span-2">
                          {conventionalProduct.shape === 'small-sachet-conventional' 
                            ? '3 Side Seal Pouch (Sachet)' 
                            : conventionalProduct.shape.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}
                        </dd>
                      </div>
                      <div className="grid grid-cols-3 gap-2">
                        <dt className="text-neutral-500">{t(`${p}.size`)}</dt>
                        <dd className="text-neutral-900 col-span-2">
                          {(() => {
                            const sizeInfo = POUCH_SIZES.find(s => s.id === selectedConvSize);
                            return sizeInfo && conventionalProduct 
                              ? formatPouchSizeLabel(sizeInfo, conventionalProduct.shape) 
                              : selectedConvSize;
                          })()}
                        </dd>
                      </div>
                      <div className="grid grid-cols-3 gap-2">
                        <dt className="text-neutral-500">{t(`${p}.quantity`)}</dt>
                        <dd className="text-neutral-900 col-span-2">{selectedConvQuantity.toLocaleString()} {t(`${p}.pieces`)}</dd>
                      </div>
                      <div className="grid grid-cols-3 gap-2">
                        <dt className="text-neutral-500">{t(`${p}.material`)}</dt>
                        <dd className="text-neutral-900 col-span-2">{product.name.includes('Metalised') ? 'Mattopp/VMPET/LLDPE' : 'Glossy PET/LLDPE'}</dd>
                      </div>
                      <div className="grid grid-cols-3 gap-2">
                        <dt className="text-neutral-500">{t(`${p}.thickness`)}</dt>
                        <dd className="text-neutral-900 col-span-2">{t(`${p}.100Micron4Mil`)}</dd>
                      </div>
                      <div className="grid grid-cols-3 gap-2">
                        <dt className="text-neutral-500">{t(`${p}.printing`)}</dt>
                        <dd className="text-neutral-900 col-span-2">
                          {t(`${p}.digitalPrintUnlimitedColors`)}<div className="mt-1">
                            <Link to="/support/color-accuracy-digital-printing" className="text-xs text-primary-600 hover:text-primary-700 flex items-center gap-1">
                              <Info className="w-3 h-3" /> {t(`${p}.colorAccuracyGuide`)}</Link>
                          </div>
                        </dd>
                      </div>
                      <div className="grid grid-cols-3 gap-2">
                        <dt className="text-neutral-500">{t(`${p}.leadTime`)}</dt>
                        <dd className="text-neutral-900 col-span-2">{t(`${p}.1520BusinessDays`)}</dd>
                      </div>
                      <div className="grid grid-cols-3 gap-2">
                        <dt className="text-neutral-500">{t(`${p}.shipping`)}</dt>
                        <dd className="text-neutral-900 col-span-2">{t(`${p}.airFreightIncluded`)}</dd>
                      </div>
                    </dl>
                  )}
                </div>
              </div>
              
              {/* Collapsible Insights Section */}
              {aiSellingPoints && (
                <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-lg border border-amber-200 overflow-hidden">
                  <button
                    onClick={() => setIsInsightsExpanded(!isInsightsExpanded)}
                    className="w-full px-4 py-3 flex items-center justify-between hover:bg-amber-100/50 transition"
                  >
                    <span className="text-sm font-semibold text-amber-800 flex items-center gap-2">
                      {t(`${p}.productInsights`)}</span>
                    {isInsightsExpanded ? (
                      <ChevronUp className="w-5 h-5 text-amber-600" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-amber-600" />
                    )}
                  </button>
                  {isInsightsExpanded && (
                    <div className="px-4 pb-4 space-y-4">
                      {/* Headline */}
                      <div className="text-sm font-semibold text-primary-700 leading-tight">
                        {aiSellingPoints.headline}
                      </div>
                      
                      {/* Key Benefits Grid */}
                      <div className="grid grid-cols-2 gap-2">
                        {aiSellingPoints.keyBenefits.slice(0, 6).map((benefit, i) => (
                          <div key={i} className="flex gap-2 p-2 bg-white/60 rounded-lg">
                            <span className="text-lg">{benefit.icon}</span>
                            <div>
                              <div className="text-xs font-medium text-primary-800">{benefit.title}</div>
                              <div className="text-xs text-primary-600 leading-tight">{benefit.description}</div>
                            </div>
                          </div>
                        ))}
                      </div>
                      
                      {/* Comparison Advantage */}
                      <div className="bg-white/60 border border-amber-200 rounded-lg p-3">
                        <div className="text-xs font-medium text-amber-800 mb-1">{t(`${p}.whyChooseThis`)}</div>
                        <div className="text-xs text-amber-700">{aiSellingPoints.comparisonAdvantage}</div>
                      </div>
                      
                      {/* Use Cases */}
                      <div>
                        <div className="text-xs font-medium text-neutral-700 mb-1">{t(`${p}.perfectFor`)}</div>
                        <div className="flex flex-wrap gap-1">
                          {aiSellingPoints.useCases.map((useCase, i) => (
                            <span key={i} className="text-xs bg-white/60 text-neutral-600 px-2 py-0.5 rounded-full">
                              {useCase}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      {/* CTA */}
                      <div className="text-xs text-primary-700 font-medium border-t border-amber-200 pt-2">
                        {aiSellingPoints.callToAction}
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
            
            {/* Right Column - Product Options */}
            <div className="space-y-6 lg:sticky lg:top-24 lg:self-start lg:max-h-[calc(100vh-120px)] lg:overflow-y-auto pr-1">
              {product.badge && <span className="inline-block bg-primary-100 text-primary-700 text-xs sm:text-sm px-3 sm:px-4 py-1 rounded-full font-medium">{product.badge}</span>}
              <h1 className="text-2xl sm:text-3xl font-bold text-neutral-900">{product.name}</h1>
              
              <div className="flex items-center gap-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className={`h-5 w-5 ${i < Math.floor(product.rating) ? 'text-yellow-400 fill-yellow-400' : 'text-neutral-300'}`} />
                  ))}
                </div>
                <Link to="/reviews" className="text-neutral-600 hover:text-primary-600 hover:underline transition-colors">({product.reviews} {t(`${p}.reviews`)}</Link>
              </div>
              
              <p className="text-sm sm:text-base text-neutral-600">{product.description}</p>
              
              {/* Dynamic Description for Conventional Digital */}
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200 rounded-xl overflow-hidden shadow-sm hover:shadow transition-all duration-300">
                <div 
                  className="px-5 py-4 flex items-center justify-between cursor-pointer select-none hover:bg-blue-100/30 transition-colors"
                  onClick={() => setIsConvCardExpanded(!isConvCardExpanded)}
                >
                  <div className="flex items-center gap-3 pr-4 flex-1">
                    <div className="w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-amber-600 text-sm">❓</span>
                    </div>
                    <div>
                      <p className="text-xs text-neutral-500 font-semibold uppercase tracking-wider">{t(`${p}.productChallenge`)}</p>
                      <p className="text-sm text-neutral-700 leading-normal line-clamp-1 font-medium">
                        {t(`${p}.customPackagingOftenMeansHighM`)}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-blue-600 font-semibold bg-white px-3 py-1.5 rounded-full shadow-sm hover:shadow transition-all whitespace-nowrap">
                    <span>{isConvCardExpanded ? 'Hide Details' : 'Know More'}</span>
                    {isConvCardExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                  </div>
                </div>

                {isConvCardExpanded && (
                  <div className="border-t border-blue-100 bg-white/20 divide-y divide-blue-100 animate-fadeIn">
                    <div className="px-5 py-4">
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="text-amber-600 text-sm">❓</span>
                        </div>
                        <div>
                          <p className="text-xs text-neutral-500 font-semibold uppercase tracking-wider">{t(`${p}.theProblem`)}</p>
                          <p className="text-sm text-neutral-700 leading-relaxed font-normal mt-0.5">
                            {t(`${p}.customPackagingOftenMeansHighM`)}</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="px-5 py-4">
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="text-blue-600 text-sm">✓</span>
                        </div>
                        <div className="flex-1">
                          <p className="text-xs text-blue-500 font-semibold uppercase tracking-wider">{t(`${p}.sustainableSolution`)}</p>
                          <p className="text-sm text-blue-800 leading-relaxed font-medium mt-0.5">
                            {conventionalProduct?.shape.includes('stand-up') 
                              ? 'This stand-up pouch uses digital printing—MOQ from 100pcs, 15-20 day delivery, get your product on shelf fast.'
                              : 'This 3-side seal flat pouch uses digital printing—no plate fees, MOQ from 100pcs, perfect for lightweight products and trial runs.'}
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="px-5 py-4 space-y-2">
                      <div className="bg-white/60 rounded-lg p-3 text-xs text-neutral-700">
                        <span className="font-semibold text-blue-700">{t(`${p}.structure`)}</span> 
                        {product.name.includes('Metalised') 
                          ? ' Mattopp/VMPET/LLDPE — Metalised high-barrier, extended shelf life, blocks light & oxygen'
                          : ' Glossy PET/LLDPE — Clear glossy finish, perfect product visibility'}
                      </div>
                      <div className="grid grid-cols-2 gap-2">
                        <div className="bg-white/60 rounded-lg p-2 text-xs text-neutral-600">
                          <span className="font-medium">{t(`${p}.size1`)}{(() => {
                            const sizeInfo = POUCH_SIZES.find(s => s.id === selectedConvSize);
                            return sizeInfo && conventionalProduct 
                              ? formatPouchSizeLabel(sizeInfo, conventionalProduct.shape) 
                              : selectedConvSize;
                          })()}</span>
                        </div>
                        <div className="bg-white/60 rounded-lg p-2 text-xs text-neutral-600">
                          <span className="font-medium">{t(`${p}.qty`)}{selectedConvQuantity} {t(`${p}.pcs`)}</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="px-5 py-4">
                      <div className="grid grid-cols-2 gap-2">
                        <div className="flex items-center gap-1.5 text-xs text-blue-700"><Check className="w-3.5 h-3.5 text-blue-600 flex-shrink-0" /><span>{t(`${p}.foodGradeCertified`)}</span></div>
                        <div className="flex items-center gap-1.5 text-xs text-blue-700"><Check className="w-3.5 h-3.5 text-blue-600 flex-shrink-0" /><span>{t(`${p}.fullColorDigitalPrint`)}</span></div>
                        <div className="flex items-center gap-1.5 text-xs text-blue-700"><Check className="w-3.5 h-3.5 text-blue-600 flex-shrink-0" /><span>{t(`${p}.moqFrom100pcsNoPlateFees`)}</span></div>
                        <div className="flex items-center gap-1.5 text-xs text-blue-700"><Check className="w-3.5 h-3.5 text-blue-600 flex-shrink-0" /><span>{t(`${p}.1520DaysInclShipping`)}</span></div>
                      </div>
                    </div>
                    
                    <div className="bg-blue-100/50 px-5 py-3.5 border-t border-blue-200">
                      <p className="text-xs text-blue-700"><span className="font-medium">{t(`${p}.idealFor`)}</span> {t(`${p}.newBrandTrialsLimitedEditionsS`)}</p>
                    </div>
                  </div>
                )}
              </div>
              
              {/* Price Display */}
              <div className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-xl border-2 border-primary-200 p-4 sm:p-6">
                <div className="text-2xl sm:text-3xl font-bold text-primary-700">{t(`${p}.us`)}{conventionalPrice.total.toLocaleString()}</div>
                <div className="text-sm text-primary-600 mt-1">
                  ${conventionalPrice.unit < 0.1 ? conventionalPrice.unit.toFixed(4) : conventionalPrice.unit.toFixed(2)}{t(`${p}.piece`)}{
                    product.id === 'small-sachet-conventional' && sachetPrintMethod === 'unprinted'
                      ? ((SACHET_UNPRINTED_OPTIONS.find(o => o.id === sachetUnprintedColor)?.pcs || 100) * sachetUnprintedPacks).toLocaleString()
                      : selectedConvQuantity.toLocaleString()
                  } {t(`${p}.pieces`)}</div>
                <div className="text-xs text-primary-700 mt-2 bg-white bg-opacity-40 rounded-lg p-2 text-center">
                  {product.id === 'small-sachet-conventional' ? '✓ Free Express Air Shipping & Delivery Included' : '✓ $40 Air Shipping Included'}
                </div>
              </div>

              {/* Color Matching & Custom Options Note */}
              <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 space-y-2">
                <div className="flex gap-2">
                  <span className="text-base">🎨</span>
                  <div className="text-xs font-semibold text-amber-800 uppercase tracking-wider">{t(`${p}.colorMatchingCustomOptions`)}</div>
                </div>
                <p className="text-xs text-amber-700 leading-relaxed">
                  {t(`${p}.theseStandardItemsAreProducedA`)}<span className="font-semibold text-amber-900">{t(`${p}.exactPantoneSpotColorMatching`)}</span>{t(`${p}.customDimensionsUnprintedGusse`)}</p>
                <div className="pt-1 flex flex-wrap gap-x-3 gap-y-1">
                  <Link to="/topics/custom-vs-standard-packaging" className="text-xs font-bold text-primary-700 hover:text-primary-800 underline flex items-center gap-1">
                    {t(`${p}.customVsStandardGuide`)}</Link>
                  <button onClick={openQuoteLightbox} className="text-xs font-bold text-amber-800 hover:text-amber-900 underline flex items-center gap-1">
                    {t(`${p}.getACustomB2bQuote`)}</button>
                </div>
              </div>
              
              {/* Options */}
              <div className="space-y-4 pt-4 border-t">
                {product.id === 'small-sachet-conventional' ? (
                  <>
                    {/* Size display */}
                    <div>
                      <label className="block text-sm font-medium text-neutral-700 mb-1">{t(`${p}.sizeLocked`)}</label>
                      <div className="w-full p-3.5 border-2 border-neutral-100 bg-neutral-50 rounded-xl text-neutral-800 font-medium">
                        {t(`${p}.8080mm3131`)}</div>
                    </div>

                    {/* Print Method Selector */}
                    <div>
                      <label className="block text-sm font-medium text-neutral-700 mb-2">{t(`${p}.printingMethod`)}</label>
                      <select 
                        value={sachetPrintMethod} 
                        onChange={e => {
                          const val = e.target.value as any;
                          setSachetPrintMethod(val);
                          // Reset quantity default when print method changes
                          if (val === 'unprinted') setSelectedConvQuantity(100);
                          else if (val === 'hot-stamping') setSelectedConvQuantity(500);
                          else if (val === 'digital') setSelectedConvQuantity(1000);
                          else setSelectedConvQuantity(50000);
                        }} 
                        className="w-full p-3.5 border-2 border-neutral-200 rounded-xl focus:ring-2 focus:ring-primary-200 focus:border-primary-500 bg-white text-neutral-900 font-medium transition-all hover:border-primary-300 cursor-pointer appearance-none bg-[url('data:image/svg+xml;charset=UTF-8,%3csvg%20xmlns%3d%22http%3a%2f%2fwww.w3.org%2f2000%2fsvg%22%20width%3d%2224%22%20height%3d%2224%22%20viewBox%3d%220%200%2024%2024%22%20fill%3d%22none%22%20stroke%3d%22%239ca3af%22%20stroke-width%3d%222%22%20stroke-linecap%3d%22round%22%20stroke-linejoin%3d%22round%22%3e%3cpolyline%20points%3d%226%209%2012%2015%2018%209%22%3e%3c%2fpolyline%3e%3c%2fsvg%3e')] bg-no-repeat bg-[right_12px_center] bg-[length:20px] pr-10"
                      >
                        <option value="unprinted">{t(`${p}.plainUnprintedReadyStock`)}</option>
                        <option value="hot-stamping">{t(`${p}.hotStampingLowMoq`)}</option>
                        <option value="digital">{t(`${p}.digitalColorPrintingLowMoq`)}</option>
                        <option value="traditional">{t(`${p}.traditionalGravurePrintingHigh`)}</option>
                      </select>
                    </div>

                    {/* Options specific to Unprinted (Ready Stock) */}
                    {sachetPrintMethod === 'unprinted' && (
                      <div className="space-y-4">
                        <div>
                          <label className="block text-sm font-medium text-neutral-700 mb-2">{t(`${p}.selectColorMaterialOption`)}</label>
                          <select 
                            value={sachetUnprintedColor} 
                            onChange={e => setSachetUnprintedColor(e.target.value)} 
                            className="w-full p-3.5 border-2 border-neutral-200 rounded-xl focus:ring-2 focus:ring-primary-200 focus:border-primary-500 bg-white text-neutral-900 font-medium transition-all hover:border-primary-300 cursor-pointer appearance-none bg-[url('data:image/svg+xml;charset=UTF-8,%3csvg%20xmlns%3d%22http%3a%2f%2fwww.w3.org%2f2000%2fsvg%22%20width%3d%2224%22%20height%3d%2224%22%20viewBox%3d%220%200%2024%2024%22%20fill%3d%22none%22%20stroke%3d%22%239ca3af%22%20stroke-width%3d%222%22%20stroke-linecap%3d%22round%22%20stroke-linejoin%3d%22round%22%3e%3cpolyline%20points%3d%226%209%2012%2015%2018%209%22%3e%3c%2fpolyline%3e%3c%2fsvg%3e')] bg-no-repeat bg-[right_12px_center] bg-[length:20px] pr-10"
                          >
                            {SACHET_UNPRINTED_OPTIONS.map(opt => (
                              <option key={opt.id} value={opt.id}>{opt.label} (${opt.price.toFixed(2)} {t(`${p}.usd`)}</option>
                            ))}
                          </select>
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-neutral-700 mb-2">{t(`${p}.packsCount`)}</label>
                          <select
                            value={sachetUnprintedPacks}
                            onChange={e => setSachetUnprintedPacks(Number(e.target.value))}
                            className="w-full p-3.5 border-2 border-neutral-200 rounded-xl focus:ring-2 focus:ring-primary-200 focus:border-primary-500 bg-white text-neutral-900 font-medium transition-all hover:border-primary-300 cursor-pointer appearance-none bg-[url('data:image/svg+xml;charset=UTF-8,%3csvg%20xmlns%3d%22http%3a%2f%2fwww.w3.org%2f2000%2fsvg%22%20width%3d%2224%22%20height%3d%2224%22%20viewBox%3d%220%200%2024%2024%22%20fill%3d%22none%22%20stroke%3d%22%239ca3af%22%20stroke-width%3d%222%22%20stroke-linecap%3d%22round%22%20stroke-linejoin%3d%22round%22%3e%3cpolyline%20points%3d%226%209%2012%2015%2018%209%22%3e%3c%2fpolyline%3e%3c%2fsvg%3e')] bg-no-repeat bg-[right_12px_center] bg-[length:20px] pr-10"
                          >
                            {[1, 2, 3, 4, 5, 10, 20, 50, 100].map(packs => {
                              const pcs = packs * (SACHET_UNPRINTED_OPTIONS.find(o => o.id === sachetUnprintedColor)?.pcs || 100);
                              return (
                                <option key={packs} value={packs}>{packs} {t(`${p}.pack`)}{packs > 1 ? 's' : ''} ({pcs.toLocaleString()} {t(`${p}.pcs2`)}</option>
                              );
                            })}
                          </select>
                        </div>
                      </div>
                    )}

                    {/* Options specific to Hot Stamping */}
                    {sachetPrintMethod === 'hot-stamping' && (
                      <div>
                        <label className="block text-sm font-medium text-neutral-700 mb-2">{t(`${p}.stampingCoverage`)}</label>
                        <select 
                          value={sachetStampingCoverage} 
                          onChange={e => setSachetStampingCoverage(e.target.value as any)} 
                          className="w-full p-3.5 border-2 border-neutral-200 rounded-xl focus:ring-2 focus:ring-primary-200 focus:border-primary-500 bg-white text-neutral-900 font-medium transition-all hover:border-primary-300 cursor-pointer appearance-none bg-[url('data:image/svg+xml;charset=UTF-8,%3csvg%20xmlns%3d%22http%3a%2f%2fwww.w3.org%2f2000%2fsvg%22%20width%3d%2224%22%20height%3d%2224%22%20viewBox%3d%220%200%2024%2024%22%20fill%3d%22none%22%20stroke%3d%22%239ca3af%22%20stroke-width%3d%222%22%20stroke-linecap%3d%22round%22%20stroke-linejoin%3d%22round%22%3e%3cpolyline%20points%3d%226%209%2012%2015%2018%209%22%3e%3c%2fpolyline%3e%3c%2fsvg%3e')] bg-no-repeat bg-[right_12px_center] bg-[length:20px] pr-10"
                        >
                          <option value="double-sided">{t(`${p}.doubleSidedStamping`)}</option>
                          <option value="single-sided">{t(`${p}.singleSidedStamping`)}</option>
                        </select>
                      </div>
                    )}

                    {/* Options specific to Traditional Plate printing */}
                    {sachetPrintMethod === 'traditional' && (
                      <div>
                        <label className="block text-sm font-medium text-neutral-700 mb-2">{t(`${p}.numberOfPrintedColorsPlateFees`)}</label>
                        <select 
                          value={sachetColorsCount} 
                          onChange={e => setSachetColorsCount(Number(e.target.value))} 
                          className="w-full p-3.5 border-2 border-neutral-200 rounded-xl focus:ring-2 focus:ring-primary-200 focus:border-primary-500 bg-white text-neutral-900 font-medium transition-all hover:border-primary-300 cursor-pointer appearance-none bg-[url('data:image/svg+xml;charset=UTF-8,%3csvg%20xmlns%3d%22http%3a%2f%2fwww.w3.org%2f2000%2fsvg%22%20width%3d%2224%22%20height%3d%2224%22%20viewBox%3d%220%200%2024%2024%22%20fill%3d%22none%22%20stroke%3d%22%239ca3af%22%20stroke-width%3d%222%22%20stroke-linecap%3d%22round%22%20stroke-linejoin%3d%22round%22%3e%3cpolyline%20points%3d%226%209%2012%2015%2018%209%22%3e%3c%2fpolyline%3e%3c%2fsvg%3e')] bg-no-repeat bg-[right_12px_center] bg-[length:20px] pr-10"
                        >
                          {[1, 2, 3, 4, 5, 6, 7, 8].map(num => (
                            <option key={num} value={num}>{num} {t(`${p}.color`)}{num > 1 ? 's' : ''} {t(`${p}.setup`)}{(num * 126.00).toFixed(2)} {t(`${p}.usd`)}</option>
                          ))}
                        </select>
                      </div>
                    )}

                    {sachetPrintMethod !== 'unprinted' && (
                      <>
                        {/* Round Corners Option */}
                        <div className="flex items-center gap-3 pt-2">
                          <input 
                            type="checkbox" 
                            id="sachet-round-corners" 
                            checked={sachetRoundCorners} 
                            onChange={e => setSachetRoundCorners(e.target.checked)} 
                            className="w-4.5 h-4.5 text-primary-600 border-neutral-300 rounded focus:ring-primary-500"
                          />
                          <label htmlFor="sachet-round-corners" className="text-sm font-semibold text-neutral-700 cursor-pointer select-none">
                            {t(`${p}.addRoundCorners`)}{(0.0336).toFixed(4)} {t(`${p}.usdUnit`)}</label>
                        </div>

                        {/* Quantity Selector */}
                        <div>
                          <label className="block text-sm font-medium text-neutral-700 mb-2">{t(`${p}.quantity`)}</label>
                          <select 
                            value={selectedConvQuantity} 
                            onChange={e => setSelectedConvQuantity(Number(e.target.value))} 
                            className="w-full p-3.5 border-2 border-neutral-200 rounded-xl focus:ring-2 focus:ring-primary-200 focus:border-primary-500 bg-white text-neutral-900 font-medium transition-all hover:border-primary-300 cursor-pointer appearance-none bg-[url('data:image/svg+xml;charset=UTF-8,%3csvg%20xmlns%3d%22http%3a%2f%2fwww.w3.org%2f2000%2fsvg%22%20width%3d%2224%22%20height%3d%2224%22%20viewBox%3d%220%200%2024%2024%22%20fill%3d%22none%22%20stroke%3d%22%239ca3af%22%20stroke-width%3d%222%22%20stroke-linecap%3d%22round%22%20stroke-linejoin%3d%22round%22%3e%3cpolyline%20points%3d%226%209%2012%2015%2018%209%22%3e%3c%2fpolyline%3e%3c%2fsvg%3e')] bg-no-repeat bg-[right_12px_center] bg-[length:20px] pr-10"
                          >
                            {conventionalQuantities.map(qty => (
                              <option key={qty} value={qty}>{qty.toLocaleString()} {t(`${p}.pieces`)}</option>
                            ))}
                          </select>
                        </div>
                      </>
                    )}
                  </>
                ) : (
                  <>
                    {/* Size Selector */}
                    <div>
                      <label className="block text-sm font-medium text-neutral-700 mb-2">{t(`${p}.sizeWHGusset`)}</label>
                      <select 
                        value={selectedConvSize} 
                        onChange={e => setSelectedConvSize(e.target.value)} 
                        className="w-full p-3.5 border-2 border-neutral-200 rounded-xl focus:ring-2 focus:ring-primary-200 focus:border-primary-500 bg-white text-neutral-900 font-medium transition-all hover:border-primary-300 cursor-pointer appearance-none bg-[url('data:image/svg+xml;charset=UTF-8,%3csvg%20xmlns%3d%22http%3a%2f%2fwww.w3.org%2f2000%2fsvg%22%20width%3d%2224%22%20height%3d%2224%22%20viewBox%3d%220%200%2024%2024%22%20fill%3d%22none%22%20stroke%3d%22%239ca3af%22%20stroke-width%3d%222%22%20stroke-linecap%3d%22round%22%20stroke-linejoin%3d%22round%22%3e%3cpolyline%20points%3d%226%209%2012%2015%2018%209%22%3e%3c%2fpolyline%3e%3c%2fsvg%3e')] bg-no-repeat bg-[right_12px_center] bg-[length:20px] pr-10"
                      >
                        {conventionalSizes.map(size => (
                          <option key={size.id} value={size.id}>{size.label} ({size.imperial})</option>
                        ))}
                      </select>
                    </div>
                    
                    {/* Quantity Selector */}
                    <div>
                      <label className="block text-sm font-medium text-neutral-700 mb-2">{t(`${p}.quantity`)}</label>
                      <select 
                        value={selectedConvQuantity} 
                        onChange={e => setSelectedConvQuantity(Number(e.target.value))} 
                        className="w-full p-3.5 border-2 border-neutral-200 rounded-xl focus:ring-2 focus:ring-primary-200 focus:border-primary-500 bg-white text-neutral-900 font-medium transition-all hover:border-primary-300 cursor-pointer appearance-none bg-[url('data:image/svg+xml;charset=UTF-8,%3csvg%20xmlns%3d%22http%3a%2f%2fwww.w3.org%2f2000%2fsvg%22%20width%3d%2224%22%20height%3d%2224%22%20viewBox%3d%220%200%2024%2024%22%20fill%3d%22none%22%20stroke%3d%22%239ca3af%22%20stroke-width%3d%222%22%20stroke-linecap%3d%22round%22%20stroke-linejoin%3d%22round%22%3e%3cpolyline%20points%3d%226%209%2012%2015%2018%209%22%3e%3c%2fpolyline%3e%3c%2fsvg%3e')] bg-no-repeat bg-[right_12px_center] bg-[length:20px] pr-10"
                      >
                        {conventionalQuantities.map(qty => (
                          <option key={qty} value={qty}>{qty.toLocaleString()} {t(`${p}.pieces`)}</option>
                        ))}
                      </select>
                    </div>
                  </>
                )}
              </div>
              
              {/* Add to Cart */}
              <div className="flex gap-2">
                <button 
                  onClick={() => {
                    addToCart({
                      productId: product.id,
                      name: product.name,
                      image: product.images[0],
                      variant: product.id === 'small-sachet-conventional' 
                        ? sachetPrintMethod === 'unprinted'
                          ? {
                              shape: '3 Side Seal Sachet',
                              size: '80x80mm',
                              material: SACHET_UNPRINTED_OPTIONS.find(o => o.id === sachetUnprintedColor)?.label.split(' (')[0] || 'Silk paper sachet',
                              print: 'Plain / Unprinted',
                              packs: `${sachetUnprintedPacks} Pack${sachetUnprintedPacks > 1 ? 's' : ''}`
                            }
                          : { 
                              shape: '3 Side Seal Sachet', 
                              size: '80x80mm', 
                              material: 'Silk pure aluminum (120um)', 
                              print: sachetPrintMethod.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()),
                              corners: sachetRoundCorners ? 'Round' : 'Square'
                            }
                        : { 
                            shape: conventionalProduct.shape, 
                            size: selectedConvSize, 
                            material: product.name.includes('Metalised') ? 'Mattopp/VMPET/LLDPE' : 'Glossy PET/LLDPE' 
                          },
                      quantity: 1,
                      unitPrice: conventionalPrice.total,
                      totalPrice: conventionalPrice.total,
                      configurationLink: window.location.href
                    })
                  }} 
                  className="flex-1 py-4 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-xl transition flex items-center justify-center gap-2"
                >
                  <ShoppingCart className="h-5 w-5" /> {t(`${p}.add`)}{product.name} {t(`${p}.toCart`)}</button>
                <button 
                  onClick={handleShareClick}
                  className="px-4 py-4 bg-neutral-100 hover:bg-neutral-200 text-neutral-700 rounded-xl transition flex items-center justify-center gap-2 border border-neutral-200"
                  title="Share Configuration"
                >
                  <Share2 className="h-5 w-5" />
                </button>
                <button 
                  onClick={openQuoteLightbox}
                  className="px-4 py-4 bg-primary-100 hover:bg-primary-200 text-primary-700 rounded-xl transition flex items-center justify-center gap-2 border border-primary-200"
                  title="Get Custom Quote"
                >
                  <Sparkles className="h-5 w-5" />
                </button>
              </div>
              
              {/* Features */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3 pt-4">
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
          <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 mb-8">
            {/* Left Column - Image Gallery */}
            <div className={`space-y-4 lg:sticky lg:top-24 lg:self-start lg:max-h-[calc(100vh-120px)] lg:overflow-y-auto transition-all duration-500 ease-in-out ${
              isFaqVisible ? 'lg:opacity-0 lg:scale-95 lg:pointer-events-none' : 'lg:opacity-100 lg:scale-100'
            }`}>
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
                <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 gap-2">
                  {product.images.map((img, index) => (
                    <button
                      key={index}
                      onClick={() => startTransition(() => setSelectedMainImage(index))}
                      className={`relative aspect-square bg-white rounded-lg border-2 overflow-hidden transition-all hover:shadow-md ${
                        selectedMainImage === index ? 'border-green-600 ring-2 ring-green-200' : 'border-neutral-200'
                      }`}
                    >
                      <img src={img} alt={`View ${index + 1}`} className="w-full h-full object-cover p-1 pointer-events-none" loading="lazy" decoding="async" />
                    </button>
                  ))}
                  {/* Separate YouTube Video Thumbnail */}
                  {ecoStockProduct.videoUrl && (
                    <button
                      onClick={() => setIsVideoModalOpen(true)}
                      className="relative aspect-square bg-neutral-900 rounded-lg border-2 border-neutral-200 overflow-hidden transition-all hover:shadow-md hover:border-red-400"
                    >
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center shadow-lg">
                          <svg className="w-5 h-5 text-white ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M8 5v14l11-7z" />
                          </svg>
                        </div>
                      </div>
                      <div className="absolute bottom-1 left-0 right-0 text-center">
                        <span className="text-xs text-white font-medium">{t(`${p}.video`)}</span>
                      </div>
                    </button>
                  )}
                </div>
              )}
              
              {/* Specifications with Insights Tab */}
              <div className="bg-white rounded-lg border border-neutral-200 overflow-hidden">
                <div className="flex border-b border-neutral-200">
                  <button
                    onClick={() => setSpecTab('specs')}
                    className="flex-1 px-4 py-3 text-sm font-medium transition bg-green-50 text-green-700 border-b-2 border-green-600"
                  >
                    {t(`${p}.specifications`)}</button>
                </div>
                <div className="p-4">
                  <dl className="grid grid-cols-1 gap-y-3 text-sm">
                    <div className="grid grid-cols-3 gap-2">
                      <dt className="text-neutral-500">{t(`${p}.material`)}</dt>
                      <dd className="text-neutral-900 col-span-2">{ecoStockProduct.material}</dd>
                    </div>
                    <div className="grid grid-cols-3 gap-2">
                      <dt className="text-neutral-500">{t(`${p}.size`)}</dt>
                      <dd className="text-neutral-900 col-span-2">{ecoStockProduct.sizeInfo}</dd>
                    </div>
                    <div className="grid grid-cols-3 gap-2">
                      <dt className="text-neutral-500">{t(`${p}.shape`)}</dt>
                      <dd className="text-neutral-900 col-span-2">{ecoStockProduct.shape}</dd>
                    </div>
                    <div className="grid grid-cols-3 gap-2">
                      <dt className="text-neutral-500">{t(`${p}.sustainability`)}</dt>
                      <dd className="text-neutral-900 col-span-2">
                        {product?.category === 'conventional-stock' || product?.category === 'conventional-digital'
                          ? 'Recycle Number 7'
                          : (ecoStockProduct as any).certification || (isBoxes ? 'FSC Certified' : 'Home Compostable')
                        }
                      </dd>
                    </div>
                    <div className="grid grid-cols-3 gap-2">
                      <dt className="text-neutral-500">{t(`${p}.shelfLife`)}</dt>
                      <dd className="text-neutral-900 col-span-2">
                        {(ecoStockProduct as any).shelfLife ? (
                          (ecoStockProduct as any).shelfLife.includes('freshness') ? (ecoStockProduct as any).shelfLife : `${(ecoStockProduct as any).shelfLife} freshness`
                        ) : '6-12 months freshness'}
                      </dd>
                    </div>
                    <div className="grid grid-cols-3 gap-2">
                      <dt className="text-neutral-500">{t(`${p}.leadTime`)}</dt>
                      <dd className="text-neutral-900 col-span-2">{ecoStockProduct.turnaround}</dd>
                    </div>
                    <div className="grid grid-cols-3 gap-2">
                      <dt className="text-neutral-500">{t(`${p}.shipping`)}</dt>
                      <dd className="text-neutral-900 col-span-2">
                        {(ecoStockProduct as any).priceRemark ? 'Not Included' : 'Air Freight (Included)'}
                      </dd>
                    </div>
                    {(ecoStockProduct as any).taobaoLinks && (
                      <div className="grid grid-cols-3 gap-2 pt-2 border-t border-neutral-100">
                        <dt className="text-neutral-500">{t(`${p}.taobaoSources`)}</dt>
                        <dd className="text-neutral-900 col-span-2 flex flex-wrap gap-1.5">
                          {(ecoStockProduct as any).taobaoLinks.map((link: string, idx: number) => {
                            const matchId = link.match(/id=(\d+)/);
                            const itemId = matchId ? matchId[1] : `Item ${idx + 1}`;
                            return (
                              <a 
                                key={idx}
                                href={link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1 text-green-700 hover:text-green-800 font-medium hover:underline text-xs bg-green-50 hover:bg-green-100 px-2 py-0.5 border border-green-200 rounded transition-all"
                              >
                                {t(`${p}.itemId`)}{itemId}
                              </a>
                            );
                          })}
                        </dd>
                      </div>
                    )}
                  </dl>
                </div>
              </div>
              
              {/* Collapsible Insights Section */}
              {aiSellingPoints && (
                <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-lg border border-amber-200 overflow-hidden">
                  <button
                    onClick={() => setIsInsightsExpanded(!isInsightsExpanded)}
                    className="w-full px-4 py-3 flex items-center justify-between hover:bg-amber-100/50 transition"
                  >
                    <span className="text-sm font-semibold text-amber-800 flex items-center gap-2">
                      {t(`${p}.productInsights`)}</span>
                    {isInsightsExpanded ? (
                      <ChevronUp className="w-5 h-5 text-amber-600" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-amber-600" />
                    )}
                  </button>
                  {isInsightsExpanded && (
                    <div className="px-4 pb-4 space-y-4">
                      {/* Headline */}
                      <div className="text-sm font-semibold text-green-700 leading-tight">
                        {aiSellingPoints.headline}
                      </div>
                      
                      {/* Key Benefits Grid */}
                      <div className="grid grid-cols-2 gap-2">
                        {aiSellingPoints.keyBenefits.slice(0, 6).map((benefit, i) => (
                          <div key={i} className="flex gap-2 p-2 bg-white/60 rounded-lg">
                            <span className="text-lg">{benefit.icon}</span>
                            <div>
                              <div className="text-xs font-medium text-green-800">{benefit.title}</div>
                              <div className="text-xs text-green-600 leading-tight">{benefit.description}</div>
                            </div>
                          </div>
                        ))}
                      </div>
                      
                      {/* Comparison Advantage */}
                      <div className="bg-white/60 border border-amber-200 rounded-lg p-3">
                        <div className="text-xs font-medium text-amber-800 mb-1">{t(`${p}.whyChooseThis`)}</div>
                        <div className="text-xs text-amber-700">{aiSellingPoints.comparisonAdvantage}</div>
                      </div>
                      
                      {/* Use Cases */}
                      <div>
                        <div className="text-xs font-medium text-neutral-700 mb-1">{t(`${p}.perfectFor`)}</div>
                        <div className="flex flex-wrap gap-1">
                          {aiSellingPoints.useCases.map((useCase, i) => (
                            <span key={i} className="text-xs bg-white/60 text-neutral-600 px-2 py-0.5 rounded-full">
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
                      <div className="text-xs text-green-700 font-medium border-t border-amber-200 pt-2">
                        {aiSellingPoints.callToAction}
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
            
            {/* Right Column - Product Options */}
            <div className="space-y-6 lg:sticky lg:top-24 lg:self-start lg:max-h-[calc(100vh-120px)] lg:overflow-y-auto pr-1">
              {product.badge && <span className="inline-block bg-green-100 text-green-700 text-sm px-4 py-1 rounded-full font-medium">{product.badge}</span>}
              <h1 className="text-3xl font-bold text-neutral-900">{product.name}</h1>
              
              <div className="flex items-center gap-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className={`h-5 w-5 ${i < Math.floor(product.rating) ? 'text-yellow-400 fill-yellow-400' : 'text-neutral-300'}`} />
                  ))}
                </div>
                <Link to="/reviews" className="text-neutral-600 hover:text-primary-600 hover:underline transition-colors">({product.reviews} {t(`${p}.reviews`)}</Link>
              </div>
              
              <p className="text-sm sm:text-base text-neutral-600">{product.description}</p>
              
              {product.viewQuoteLink && (
                <div className="bg-emerald-50/50 border border-emerald-200/80 rounded-xl p-4 flex items-center justify-between shadow-sm">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center text-lg shadow-sm">
                      📋
                    </div>
                    <div className="text-left">
                      <p className="text-xs text-emerald-800 font-bold uppercase tracking-wider">{t(`${p}.officialCustomQuoteReference`)}</p>
                      <p className="text-[10px] text-neutral-500 leading-normal mt-0.5">{t(`${p}.thisProductIsDirectConvertedFr`)}</p>
                    </div>
                  </div>
                  <a
                    href={product.viewQuoteLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-bold text-emerald-700 hover:text-emerald-800 bg-white border border-emerald-200 shadow-sm hover:shadow px-4 py-2 rounded-lg transition-all"
                  >
                    {t(`${p}.viewLiveQuote`)}</a>
                </div>
              )}
              
              {/* Dynamic Description for Eco Stock - Not for box products */}
              {!isBoxes && (
                product.id === 'eco-custom-label' ? (
                  <div className="bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200 rounded-xl overflow-hidden w-full shadow-sm hover:shadow transition-all duration-300">
                    <div 
                      className="px-5 py-4 flex items-center justify-between cursor-pointer select-none hover:bg-green-100/30 transition-colors"
                      onClick={() => setIsEcoCustomLabelExpanded(!isEcoCustomLabelExpanded)}
                    >
                      <div className="flex items-center gap-3 pr-4 flex-1">
                        <div className="w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0">
                          <span className="text-amber-600 text-sm">❓</span>
                        </div>
                        <div>
                          <p className="text-xs text-neutral-500 font-semibold uppercase tracking-wider">{t(`${p}.productChallenge`)}</p>
                          <p className="text-sm text-neutral-700 leading-normal line-clamp-1 font-medium">
                            {t(`${p}.traditionalLabelsRelyOnNonBiod`)}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-1.5 text-xs text-green-700 font-semibold bg-white px-3 py-1.5 rounded-full shadow-sm hover:shadow transition-all whitespace-nowrap">
                        <span>{isEcoCustomLabelExpanded ? 'Hide Details' : 'Know More'}</span>
                        {isEcoCustomLabelExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                      </div>
                    </div>

                    {isEcoCustomLabelExpanded && (
                      <div className="border-t border-green-200 bg-white/20 divide-y divide-green-100 animate-fadeIn">
                        <div className="px-5 py-4">
                          <div className="flex items-start gap-3">
                            <div className="w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                              <span className="text-amber-600 text-sm">❓</span>
                            </div>
                            <div>
                              <p className="text-xs text-neutral-500 font-semibold uppercase tracking-wider">{t(`${p}.theProblem`)}</p>
                              <p className="text-sm text-neutral-700 leading-relaxed font-normal mt-0.5">
                                {t(`${p}.traditionalLabelsRelyOnNonBiod`)}</p>
                            </div>
                          </div>
                        </div>
                        
                        <div className="px-5 py-4">
                          <div className="flex items-start gap-3">
                            <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                              <span className="text-green-600 text-sm">✓</span>
                            </div>
                            <div className="flex-1">
                              <p className="text-xs text-green-500 font-semibold uppercase tracking-wider">{t(`${p}.sustainableSolution`)}</p>
                              <div className="grid grid-cols-1 md:grid-cols-12 gap-5 items-start mt-1.5">
                                <div className="md:col-span-7">
                                  <h4 className="text-sm font-bold text-green-800 mb-1">{t(`${p}.zeroMicroplasticsCompleteBiode`)}</h4>
                                  <p className="text-xs font-semibold text-green-700 mb-2">{t(`${p}.degradation180Days`, '180-Day Complete Biodegradability • Zero Microplastics Residue')}</p>
                                  <p className="text-xs text-green-800 leading-relaxed mb-2">
                                    {t(`${p}.unlikeTraditionalPlasticPpPetL`)}</p>
                                  <p className="text-[11px] text-green-700 leading-relaxed italic">
                                    {t(`${p}.ppPet180`)}</p>
                                </div>
                                <div className="md:col-span-5">
                                  <div className="relative group overflow-hidden rounded-xl border border-green-200/80 bg-white p-2 shadow-sm hover:shadow-md transition-all duration-300">
                                    <img
                                      src="/taobao/compostable-label/compostable-labels-7.jpg"
                                      alt="180-Day Degradation Process"
                                      className="w-full h-auto rounded-lg object-cover transform transition-transform duration-500 group-hover:scale-[1.03]"
                                    />
                                    <div className="absolute inset-0 bg-green-900/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-lg" />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="px-5 py-4 space-y-2">
                          <div className="bg-white/60 rounded-lg p-3 text-xs text-neutral-700">
                            <span className="font-semibold text-green-700">{t(`${p}.material3`)}</span> {t(`${p}.certifiedCompostableClearPlaFi`)}</div>
                          <div className="grid grid-cols-2 gap-2">
                            <div className="bg-white/60 rounded-lg p-2 text-xs text-neutral-600">
                              <span className="font-medium">{t(`${p}.size4`)}{selectedSizeVariant ? ecoStockProduct.sizeVariants?.find(v => v.id === selectedSizeVariant)?.label : '110 × 50 mm (1,000 Pcs / Pack)'}</span>
                            </div>
                            <div className="bg-white/60 rounded-lg p-2 text-xs text-neutral-600">
                              <span className="font-medium">{t(`${p}.bioAdhesiveBacking`)}</span>
                            </div>
                          </div>
                        </div>

                        <div className="px-5 py-4">
                          <div className="grid grid-cols-2 gap-2">
                            <div className="flex items-center gap-1.5 text-xs text-green-700"><Check className="w-3.5 h-3.5 text-green-600 flex-shrink-0" /><span>{t(`${p}.highClarityClearPlaFilm`)}</span></div>
                            <div className="flex items-center gap-1.5 text-xs text-green-700"><Check className="w-3.5 h-3.5 text-green-600 flex-shrink-0" /><span>{t(`${p}.certifiedEn13432AstmD6400`)}</span></div>
                            <div className="flex items-center gap-1.5 text-xs text-green-700"><Check className="w-3.5 h-3.5 text-green-600 flex-shrink-0" /><span>{t(`${p}.zeroMicroplasticsResidue`)}</span></div>
                            <div className="flex items-center gap-1.5 text-xs text-green-700"><Check className="w-3.5 h-3.5 text-green-600 flex-shrink-0" /><span>{t(`${p}.100BiodegradableAdhesive`)}</span></div>
                          </div>
                        </div>

                        <div className="bg-green-100/50 px-5 py-3.5 border-t border-green-200">
                          <div className="flex flex-wrap items-center gap-2 text-xs">
                            <span className="bg-green-600 text-white px-2 py-0.5 rounded-full font-medium">{t(`${p}.en13432AstmD6400FscCertified`)}</span>
                            <span className="text-green-700"><span className="font-medium">{t(`${p}.idealFor`)}</span> {t(`${p}.premiumCosmeticsGlassBottlePac`)}</span>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                ) : product.id === 'eco-pla-sealing-sticker' ? (
                  <div className="bg-gradient-to-br from-emerald-50 to-green-50 border border-emerald-200 rounded-xl overflow-hidden w-full shadow-sm hover:shadow transition-all duration-300">
                    <div 
                      className="px-5 py-4 flex items-center justify-between cursor-pointer select-none hover:bg-emerald-100/30 transition-colors"
                      onClick={() => setIsPlaSealingExpanded(!isPlaSealingExpanded)}
                    >
                      <div className="flex items-center gap-3 pr-4 flex-1">
                        <div className="w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0">
                          <span className="text-amber-600 text-sm">❓</span>
                        </div>
                        <div>
                          <p className="text-xs text-neutral-500 font-semibold uppercase tracking-wider">{t(`${p}.productChallenge`)}</p>
                          <p className="text-sm text-neutral-700 leading-normal line-clamp-1 font-medium">
                            {t(`${p}.traditionalAdhesiveSealingTape`)}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-1.5 text-xs text-emerald-700 font-semibold bg-white px-3 py-1.5 rounded-full shadow-sm hover:shadow transition-all whitespace-nowrap">
                        <span>{isPlaSealingExpanded ? 'Hide Details' : 'Know More'}</span>
                        {isPlaSealingExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                      </div>
                    </div>

                    {isPlaSealingExpanded && (
                      <div className="border-t border-emerald-200 bg-white/20 divide-y divide-emerald-100 animate-fadeIn">
                        <div className="px-5 py-4">
                          <div className="flex items-start gap-3">
                            <div className="w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                              <span className="text-amber-600 text-sm">❓</span>
                            </div>
                            <div>
                              <p className="text-xs text-neutral-500 font-semibold uppercase tracking-wider">{t(`${p}.theProblem`)}</p>
                              <p className="text-sm text-neutral-700 leading-relaxed font-normal mt-0.5">
                                {t(`${p}.traditionalAdhesiveSealingTape5`)}</p>
                            </div>
                          </div>
                        </div>

                        <div className="px-5 py-4">
                          <div className="flex items-start gap-3">
                            <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                              <span className="text-emerald-600 text-sm">✓</span>
                            </div>
                            <div className="flex-1">
                              <p className="text-xs text-emerald-500 font-semibold uppercase tracking-wider">{t(`${p}.sustainableSolution`)}</p>
                              <div className="grid grid-cols-1 md:grid-cols-12 gap-5 items-start mt-1.5">
                                <div className="md:col-span-7">
                                  <h4 className="text-sm font-bold text-emerald-800 mb-1">{t(`${p}.14WeekRapidComposting100NonTox`)}</h4>
                                  <p className="text-xs font-semibold text-emerald-700 mb-2">{t(`${p}.degradation14Weeks`, '≤14-Week Complete Biodegradability • Clean Burn Zero Toxic Gases')}</p>
                                  <p className="text-xs text-neutral-700 leading-relaxed mb-2">
                                    {t(`${p}.madeFrom100PlantBasedCompostab`)}</p>
                                  <p className="text-[11px] text-emerald-650 leading-relaxed italic">
                                    {t(`${p}.100Pla1498`)}</p>
                                </div>
                                <div className="md:col-span-5">
                                  <div className="relative group overflow-hidden rounded-xl border border-emerald-200/80 bg-white p-2 shadow-sm hover:shadow-md transition-all duration-300">
                                    <img
                                      src="/taobao/pla-sticker/pla-sticker-compostable-timeline.jpg"
                                      alt="≤14-Week Composting Timeline"
                                      className="w-full h-auto rounded-lg object-cover transform transition-transform duration-500 group-hover:scale-[1.03]"
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="px-5 py-4">
                          <div className="flex items-start gap-3">
                            <div className="w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                              <span className="text-amber-600 text-sm">🔥</span>
                            </div>
                            <div className="flex-1">
                              <p className="text-xs text-amber-600 font-semibold uppercase tracking-wider">{t(`${p}.combustionTest`)}</p>
                              <div className="grid grid-cols-1 md:grid-cols-12 gap-5 items-start mt-1.5">
                                <div className="md:col-span-7">
                                  <h4 className="text-sm font-bold text-neutral-800 mb-1">{t(`${p}.combustionSafetyTestPlaVsPet`)}</h4>
                                  <p className="text-xs font-semibold text-neutral-700 mb-2">{t(`${p}.vs`)}</p>
                                  <ul className="text-xs text-neutral-600 list-disc pl-4 space-y-1">
                                    <li>
                                      <strong className="text-emerald-700">{t(`${p}.compostablePla`)}</strong> {t(`${p}.burnsCleanlyWithAMildScentOfGr`)}</li>
                                    <li>
                                      <strong className="text-amber-700">{t(`${p}.regularPetPlastic`)}</strong> {t(`${p}.meltsRapidlyWithSevereToxicDri`)}</li>
                                  </ul>
                                </div>
                                <div className="md:col-span-5">
                                  <div className="relative group overflow-hidden rounded-xl border border-neutral-200 bg-white p-2 shadow-sm hover:shadow-md transition-all duration-300">
                                    <img
                                      src="/taobao/pla-sticker/pla-sticker-combustion.png"
                                      alt="Combustion Test Comparison"
                                      className="w-full h-auto rounded-lg object-cover transform transition-transform duration-500 group-hover:scale-[1.03]"
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="px-5 py-4 space-y-2">
                          <div className="bg-white/60 rounded-lg p-3 text-xs text-neutral-700">
                            <span className="font-semibold text-emerald-700">{t(`${p}.material6`)}</span> {t(`${p}.certifiedCompostableClearPlaFi7`)}</div>
                          <div className="grid grid-cols-2 gap-2">
                            <div className="bg-white/60 rounded-lg p-2 text-xs text-neutral-600">
                              <span className="font-medium">{t(`${p}.size8`)}{selectedSizeVariant ? ecoStockProduct.sizeVariants?.find(v => v.id === selectedSizeVariant)?.label : 'Diameter 20 mm (1,000 Pcs / Pack)'}</span>
                            </div>
                            <div className="bg-white/60 rounded-lg p-2 text-xs text-neutral-600">
                              <span className="font-medium">{t(`${p}.bioAdhesiveBacking`)}</span>
                            </div>
                          </div>
                        </div>

                        <div className="px-5 py-4">
                          <div className="grid grid-cols-2 gap-2">
                            <div className="flex items-center gap-1.5 text-xs text-emerald-700"><Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" /><span>{t(`${p}.100PlantBasedPlaFilm`)}</span></div>
                            <div className="flex items-center gap-1.5 text-xs text-emerald-700"><Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" /><span>{t(`${p}.compostableBioAdhesive`)}</span></div>
                            <div className="flex items-center gap-1.5 text-xs text-emerald-700"><Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" /><span>{t(`${p}.14WeekCompostingTimeline`)}</span></div>
                            <div className="flex items-center gap-1.5 text-xs text-emerald-700"><Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" /><span>{t(`${p}.zeroMicroplasticsResidue`)}</span></div>
                          </div>
                        </div>

                        <div className="bg-emerald-100/50 px-5 py-3.5 border-t border-emerald-200">
                          <div className="flex flex-wrap items-center gap-2 text-xs">
                            <span className="bg-emerald-600 text-white px-2 py-0.5 rounded-full font-medium">{t(`${p}.dinCertcoTuvOkCompost`)}</span>
                            <span className="text-emerald-700"><span className="font-medium">{t(`${p}.idealFor`)}</span> {t(`${p}.premiumCosmeticsGiftWrappingGl`)}</span>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                ) : isLabelProduct ? (
                  <div className="bg-gradient-to-br from-emerald-50 to-teal-50 border border-emerald-200 rounded-xl overflow-hidden w-full shadow-sm hover:shadow transition-all duration-300">
                    <div 
                      className="px-5 py-4 flex items-center justify-between cursor-pointer select-none hover:bg-emerald-100/30 transition-colors"
                      onClick={() => setIsB2BDynamicLabelExpanded(!isB2BDynamicLabelExpanded)}
                    >
                      <div className="flex items-center gap-3 pr-4 flex-1">
                        <div className="w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0">
                          <span className="text-amber-600 text-sm">❓</span>
                        </div>
                        <div>
                          <p className="text-xs text-neutral-500 font-semibold uppercase tracking-wider">{t(`${p}.productChallenge`)}</p>
                          <p className="text-sm text-neutral-700 leading-normal line-clamp-1 font-medium">
                            {t(`${p}.needPremiumCustomBrandedLabels`)}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-1.5 text-xs text-emerald-700 font-semibold bg-white px-3 py-1.5 rounded-full shadow-sm hover:shadow transition-all whitespace-nowrap">
                        <span>{isB2BDynamicLabelExpanded ? 'Hide Details' : 'Know More'}</span>
                        {isB2BDynamicLabelExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                      </div>
                    </div>

                    {isB2BDynamicLabelExpanded && (
                      <div className="border-t border-emerald-200 bg-white/20 divide-y divide-emerald-100 animate-fadeIn">
                        <div className="px-5 py-4">
                          <div className="flex items-start gap-3">
                            <div className="w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                              <span className="text-amber-600 text-sm">❓</span>
                            </div>
                            <div>
                              <p className="text-xs text-neutral-500 font-semibold uppercase tracking-wider">{t(`${p}.theProblem`)}</p>
                              <p className="text-sm text-neutral-700 leading-relaxed font-normal mt-0.5">
                                {t(`${p}.needPremiumCustomBrandedLabels`)}</p>
                            </div>
                          </div>
                        </div>

                        <div className="px-5 py-4">
                          <div className="flex items-start gap-3">
                            <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                              <span className="text-emerald-600 text-sm">✓</span>
                            </div>
                            <div className="flex-1">
                              <p className="text-xs text-emerald-500 font-semibold uppercase tracking-wider">{t(`${p}.sustainableSolution`)}</p>
                              <p className="text-sm text-emerald-800 leading-relaxed font-medium mt-0.5">
                                {t(`${p}.ourSustainableAdhesiveStickers`)}</p>
                            </div>
                          </div>
                        </div>

                        <div className="px-5 py-4 space-y-2">
                          <div className="bg-white/60 rounded-lg p-3 text-xs text-neutral-700">
                            <span className="font-semibold text-emerald-700">{t(`${p}.material9`)}</span> {t(`${p}.ecoResponsibleFaceStockAndWate`)}</div>
                          {selectedSizeVariant && (
                            <div className="bg-white/60 rounded-lg p-2 text-xs text-neutral-600">
                              <span className="font-medium">{t(`${p}.size10`)}{ecoStockProduct.sizeVariants?.find(v => v.id === selectedSizeVariant)?.label || 'Standard'}</span>
                            </div>
                          )}
                        </div>

                        <div className="px-5 py-4">
                          <div className="grid grid-cols-2 gap-2">
                            <div className="flex items-center gap-1.5 text-xs text-emerald-700"><Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" /><span>{t(`${p}.zeroMicroplastics`)}</span></div>
                            <div className="flex items-center gap-1.5 text-xs text-emerald-700"><Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" /><span>{t(`${p}.lowMoq`)}</span></div>
                            <div className="flex items-center gap-1.5 text-xs text-emerald-700"><Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" /><span>{t(`${p}.ecoResponsibleBioAdhesives`)}</span></div>
                            <div className="flex items-center gap-1.5 text-xs text-emerald-700"><Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" /><span>{t(`${p}.customPrintPages`)}</span></div>
                          </div>
                        </div>

                        <div className="bg-emerald-100/50 px-5 py-3.5 border-t border-emerald-200">
                          <p className="text-xs text-emerald-700"><span className="font-medium">{t(`${p}.idealFor`)}</span> {t(`${p}.cosmeticsJarsPharmaceuticalBot`)}</p>
                          {ecoStockProduct.customPrintNote && (
                            <p className="text-xs text-emerald-600 mt-1">
                              <span className="font-medium">💡</span>{' '}
                              {ecoStockProduct.customPrintProductId ? (
                                <Link to={`/store/product/${ecoStockProduct.customPrintProductId}`} className="hover:underline">
                                  {ecoStockProduct.customPrintNote}
                                </Link>
                              ) : (
                                ecoStockProduct.customPrintNote
                              )}
                            </p>
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <div className="bg-gradient-to-br from-emerald-50 to-teal-50 border border-emerald-200 rounded-xl overflow-hidden shadow-sm hover:shadow transition-all duration-300">
                    <div 
                      className="px-5 py-4 flex items-center justify-between cursor-pointer select-none hover:bg-emerald-100/30 transition-colors"
                      onClick={() => setIsEcoStockExpanded(!isEcoStockExpanded)}
                    >
                      <div className="flex items-center gap-3 pr-4 flex-1">
                        <div className="w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0">
                          <span className="text-amber-600 text-sm">❓</span>
                        </div>
                        <div>
                          <p className="text-xs text-neutral-500 font-semibold uppercase tracking-wider">{t(`${p}.productChallenge`)}</p>
                          <p className="text-sm text-neutral-700 leading-normal line-clamp-1 font-medium">
                            {ecoStockProduct.name.includes('Compostable') || ecoStockProduct.name.includes('compostable')
                              ? 'Want compostable packaging but worried about long lead times and high MOQs to test market response?'
                              : 'Need eco packaging but budget-limited, don\'t want to pay high custom costs for small quantities?'}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-1.5 text-xs text-emerald-700 font-semibold bg-white px-3 py-1.5 rounded-full shadow-sm hover:shadow transition-all whitespace-nowrap">
                        <span>{isEcoStockExpanded ? 'Hide Details' : 'Know More'}</span>
                        {isEcoStockExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                      </div>
                    </div>

                    {isEcoStockExpanded && (
                      <div className="border-t border-emerald-200 bg-white/20 divide-y divide-emerald-100 animate-fadeIn">
                        <div className="px-5 py-4">
                          <div className="flex items-start gap-3">
                            <div className="w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                              <span className="text-amber-600 text-sm">❓</span>
                            </div>
                            <div>
                              <p className="text-xs text-neutral-500 font-semibold uppercase tracking-wider">{t(`${p}.theProblem`)}</p>
                              <p className="text-sm text-neutral-700 leading-relaxed font-normal mt-0.5">
                                {ecoStockProduct.name.includes('Compostable') || ecoStockProduct.name.includes('compostable')
                                  ? 'Want compostable packaging but worried about long lead times and high MOQs to test market response?'
                                  : 'Need eco packaging but budget-limited, don\'t want to pay high custom costs for small quantities?'}
                              </p>
                            </div>
                          </div>
                        </div>

                        <div className="px-5 py-4">
                          <div className="flex items-start gap-3">
                            <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                              <span className="text-emerald-600 text-sm">✓</span>
                            </div>
                            <div className="flex-1">
                              <p className="text-xs text-emerald-500 font-semibold uppercase tracking-wider">{t(`${p}.sustainableSolution`)}</p>
                              <p className="text-sm text-emerald-800 leading-relaxed font-medium mt-0.5">
                                {ecoStockProduct.name.includes('Compostable')
                                  ? 'This stock compostable pouch ships in 3-5 days—no custom wait, give your product truly sustainable packaging immediately.'
                                  : 'This pre-made eco pouch uses sustainable materials, ships from stock, no MOQ—perfect for quick start and small batches.'}
                              </p>
                            </div>
                          </div>
                        </div>

                        <div className="px-5 py-4 space-y-2">
                          <div className="bg-white/60 rounded-lg p-3 text-xs text-neutral-700">
                            <span className="font-semibold text-emerald-700">{t(`${p}.material11`)}</span> 
                            {ecoStockProduct.name.includes('Compostable')
                              ? ' Certified compostable, breaks down within 180 days in industrial composting, zero microplastics'
                              : ecoStockProduct.name.includes('Kraft')
                              ? ' Natural kraft paper composite, organic feel, perfect for artisanal products'
                              : ' Eco-sustainable materials, reduced plastic use and carbon footprint'}
                          </div>
                          {selectedSizeVariant && (
                            <div className="bg-white/60 rounded-lg p-2 text-xs text-neutral-600">
                              <span className="font-medium">{t(`${p}.size12`)}{ecoStockProduct.sizeVariants?.find(v => v.id === selectedSizeVariant)?.label || 'Standard'}</span>
                            </div>
                          )}
                        </div>

                        <div className="px-5 py-4">
                          <div className="grid grid-cols-2 gap-2">
                            <div className="flex items-center gap-1.5 text-xs text-emerald-700"><Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" /><span>{t(`${p}.shipsIn35Days`)}</span></div>
                            <div className="flex items-center gap-1.5 text-xs text-emerald-700"><Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" /><span>{t(`${p}.noMinimumOrder`)}</span></div>
                            <div className="flex items-center gap-1.5 text-xs text-emerald-700"><Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" /><span>{t(`${p}.ecoCertifiedMaterials`)}</span></div>
                            <div className="flex flex-col gap-1">
                              <div className="flex items-center gap-1.5 text-xs text-emerald-700"><Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" /><span>{t(`${p}.customPrintAvailable`)}</span></div>
                              {ecoStockProduct.customPrintQuantities && (
                                <Link to="/support/color-accuracy-digital-printing" className="text-[10px] text-emerald-600 hover:text-emerald-800 flex items-center gap-1 ml-5">
                                  <Info className="w-3.5 h-3.5" /> {t(`${p}.colorAccuracyGuide`)}</Link>
                              )}
                            </div>
                          </div>
                        </div>

                        <div className="bg-emerald-100/50 px-5 py-3.5 border-t border-emerald-200">
                          <p className="text-xs text-emerald-700"><span className="font-medium">{t(`${p}.idealFor`)}</span> {t(`${p}.farmersMarketsArtisanFoodsOrga`)}</p>
                          {ecoStockProduct.customPrintNote && (
                            <p className="text-xs text-emerald-600 mt-1">
                              <span className="font-medium">💡</span>{' '}
                              {ecoStockProduct.customPrintProductId ? (
                                <Link to={`/store/product/${ecoStockProduct.customPrintProductId}`} className="hover:underline">
                                  {ecoStockProduct.customPrintNote}
                                </Link>
                              ) : (
                                ecoStockProduct.customPrintNote
                              )}
                            </p>
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                )
              )}
              
              {/* Size Variant Selector - for products with multiple sizes */}
              {ecoStockProduct.sizeVariants && ecoStockProduct.sizeVariants.length > 0 && (
                <div className="space-y-4 pt-4 border-t">
                  {isMultiDimensional ? (
                    <div className="space-y-5">
                      {/* Size Selection */}
                      <div className="space-y-2.5">
                        <label className="block text-xs font-bold uppercase tracking-wider text-neutral-500">
                          {t(`${p}.selectSizeCapacity`)}</label>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                          {uniqueSizes.map((sizeCode) => {
                            const details = getSizeDetails(sizeCode, product.id);
                            const isSelected = selectedSizeCode === sizeCode;
                            return (
                              <button
                                key={sizeCode}
                                type="button"
                                onClick={() => handleSelectDimension('size', sizeCode)}
                                className={`p-3 rounded-xl border text-left transition-all duration-200 flex flex-col justify-between ${
                                  isSelected
                                    ? 'border-emerald-600 bg-emerald-50/50 ring-2 ring-emerald-600/20 text-emerald-950 font-semibold shadow-sm'
                                    : 'border-neutral-200 bg-white text-neutral-600 hover:border-neutral-350 hover:bg-neutral-50/50'
                                }`}
                              >
                                <span className="text-xs font-semibold">{details.label}</span>
                                <span className="text-[10px] text-neutral-400 mt-1 font-normal">{details.sub}</span>
                              </button>
                            );
                          })}
                        </div>
                      </div>

                      {/* Style/Pattern Selection */}
                      <div className="space-y-2.5 pt-1">
                        <label className="block text-xs font-bold uppercase tracking-wider text-neutral-500">
                          {t(`${p}.selectPatternStyle`)}</label>
                        <div className={product.id === 'textured-burlap-cork-pattern-coffee-pouch-with-valve' ? "grid grid-cols-2 sm:grid-cols-4 gap-2.5" : "flex flex-wrap gap-4"}>
                          {uniqueColors.map((colorCode) => {
                            const colorInfo = colorInfoMap[colorCode] || { name: colorCode, swatchClass: 'bg-neutral-200' };
                            const isSelected = selectedColorCode === colorCode;
                            if (product.id === 'textured-burlap-cork-pattern-coffee-pouch-with-valve') {
                              return (
                                <button
                                  key={colorCode}
                                  type="button"
                                  onClick={() => handleSelectDimension('color', colorCode)}
                                  className={`p-3 rounded-xl border text-center transition-all duration-200 flex flex-col justify-center items-center relative overflow-hidden ${
                                    isSelected
                                      ? 'border-emerald-600 bg-emerald-50/50 ring-2 ring-emerald-600/20 text-emerald-950 font-semibold shadow-sm'
                                      : 'border-neutral-200 bg-white text-neutral-600 hover:border-neutral-350 hover:bg-neutral-50/50'
                                  }`}
                                >
                                  <span className="text-xs font-semibold">{colorInfo.name}</span>
                                </button>
                              );
                            }
                            return (
                              <button
                                key={colorCode}
                                type="button"
                                onClick={() => handleSelectDimension('color', colorCode)}
                                className="flex flex-col items-center gap-1.5 group focus:outline-none"
                              >
                                <div
                                  className={`w-9 h-9 rounded-full ${colorInfo.swatchClass} flex items-center justify-center transition-all duration-200 shadow-sm border-2 ${
                                    isSelected
                                      ? 'ring-4 ring-emerald-600/20 scale-110 border-emerald-600'
                                      : 'group-hover:scale-105 border-neutral-350'
                                  }`}
                                >
                                  {isSelected && (
                                    <svg className={`w-4 h-4 ${colorCode === 'white-kraft' || colorCode === 'cream-white' || colorCode === 'white-linen' ? 'text-neutral-900' : 'text-white'} drop-shadow-sm font-bold`} fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                    </svg>
                                  )}
                                </div>
                                <span className={`text-[10px] transition duration-200 ${isSelected ? 'font-semibold text-neutral-900' : 'text-neutral-500 group-hover:text-neutral-700'}`}>
                                  {colorInfo.name}
                                </span>
                              </button>
                            );
                          })}
                        </div>
                      </div>

                      {/* Quantity Selection */}
                      <div className="space-y-2.5 pt-1">
                        <label className="block text-xs font-bold uppercase tracking-wider text-neutral-500">
                          {t(`${p}.selectQuantity`)}</label>
                        <div className="grid grid-cols-3 gap-2.5">
                          {uniqueQuantities.map((qty) => {
                            const isSelected = selectedQtyVal === qty;
                            const matchingVariant = ecoStockProduct.sizeVariants?.find(v => {
                              const parsed = parseVariant(v, product.id);
                              return parsed.size === selectedSizeCode && parsed.color === selectedColorCode && parsed.qty === qty;
                            });

                            if (!matchingVariant) return null;

                            let savingsBadge = null;
                            if (qty === 200) savingsBadge = 'Save 10%';
                            if (qty === 500) savingsBadge = 'Save 20%';

                            return (
                              <button
                                key={qty}
                                type="button"
                                onClick={() => handleSelectDimension('qty', qty)}
                                className={`p-3 rounded-xl border text-center transition-all duration-200 flex flex-col justify-center items-center relative overflow-hidden ${
                                  isSelected
                                    ? 'border-emerald-600 bg-emerald-50/50 ring-2 ring-emerald-600/20 text-emerald-950 font-semibold shadow-sm'
                                    : 'border-neutral-200 bg-white text-neutral-600 hover:border-neutral-350 hover:bg-neutral-50/50'
                                }`}
                              >
                                {savingsBadge && (
                                  <span className="absolute top-0 right-0 bg-emerald-600 text-white text-[7px] font-semibold px-1 py-0.5 rounded-bl">
                                    {savingsBadge}
                                  </span>
                                )}
                                <span className="text-xs font-semibold">{qty} {t(`${p}.pcs13`)}</span>
                                <span className="text-[10px] text-emerald-700 font-bold mt-1">${matchingVariant.totalPrice.toFixed(2)}</span>
                                <span className="text-[8px] text-neutral-400 mt-0.5 font-normal">${matchingVariant.unitPrice.toFixed(3)}{t(`${p}.pc`)}</span>
                              </button>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div>
                      <label className="block text-sm font-medium text-neutral-700 mb-2">{t(`${p}.selectSize`)}</label>
                      <div className="space-y-2">
                        {ecoStockProduct.sizeVariants.map((variant) => (
                          <button
                            key={variant.id}
                            onClick={() => {
                              setSelectedSizeVariant(variant.id)
                              if (variant.heroImageIndex !== undefined) {
                                startTransition(() => setSelectedMainImage(variant.heroImageIndex!))
                              }
                            }}
                            className={`w-full p-3 border rounded-lg text-left transition flex justify-between items-center ${
                              selectedSizeVariant === variant.id 
                                ? 'border-green-600 bg-green-50 ring-2 ring-green-200' 
                                : 'border-neutral-200 hover:border-green-300'
                            }`}
                          >
                            <div>
                              <div className="font-medium text-neutral-900">{variant.label}</div>
                              <div className="text-xs text-neutral-500">{variant.dimensions}{ecoStockProduct.shape === 'Header Bag' ? ' • ' + (variant.hasHole ? 'With Hole' : 'No Hole') : ''}</div>
                            </div>
                            <div className="text-right">
                              <div className="font-bold text-green-700">${variant.totalPrice.toFixed(2)}/{variant.quantity || 100}{pluralUnit}</div>
                              <div className="text-xs text-neutral-500">${variant.unitPrice.toFixed(3)}/{singleUnit}</div>
                            </div>
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                  
                  {/* Surface Finish Option - For unprinted clear zipper pouch */}
                  {selectedSizeVariant && product.id === 'clear-matte-zipper-stand-up-pouch' && (
                    <div className="space-y-2 pt-2">
                      <label className="block text-sm font-medium text-neutral-700">{t(`${p}.selectSurfaceFinish`)}</label>
                      <div className="grid grid-cols-2 gap-3">
                        <button
                          type="button"
                          onClick={() => setSelectedFinish('matte')}
                          className={`p-3 rounded-lg border text-center transition font-medium flex flex-col items-center justify-center ${
                            selectedFinish === 'matte'
                              ? 'border-green-600 bg-green-50 ring-2 ring-green-200 text-green-950 font-semibold'
                              : 'border-neutral-200 text-neutral-600 hover:border-neutral-350 hover:bg-neutral-50'
                          }`}
                        >
                          <span className="text-sm flex items-center gap-1">{t(`${p}.matteFinish`)}</span>
                          <span className="text-[10px] text-neutral-400 mt-0.5 font-normal">{t(`${p}.frostedTranslucent`)}</span>
                        </button>
                        <button
                          type="button"
                          onClick={() => setSelectedFinish('glossy')}
                          className={`p-3 rounded-lg border text-center transition font-medium flex flex-col items-center justify-center ${
                            selectedFinish === 'glossy'
                              ? 'border-green-600 bg-green-50 ring-2 ring-green-200 text-green-950 font-semibold'
                              : 'border-neutral-200 text-neutral-600 hover:border-neutral-350 hover:bg-neutral-50'
                          }`}
                        >
                          <span className="text-sm flex items-center gap-1">{t(`${p}.glossyFinish`)}</span>
                          <span className="text-[10px] text-neutral-400 mt-0.5 font-normal">{t(`${p}.ultraClearShiny`)}</span>
                        </button>
                      </div>
                    </div>
                  )}
                  
                  {/* Batch Quantity Selector - Dynamic per batch */}
                  {selectedSizeVariant && (
                    <div>
                      {(() => {
                        const selVariant = ecoStockProduct.sizeVariants?.find(v => v.id === selectedSizeVariant);
                        const batchSize = selVariant?.quantity || 100;
                        return (
                          <>
                            <label className="block text-sm font-medium text-neutral-700 mb-2">{t(`${p}.quantityBatchesOf`)}{batchSize} {pluralUnit})</label>
                            <div className="flex items-center gap-3">
                              <button 
                                onClick={() => setSizeVariantBatchCount(Math.max(1, sizeVariantBatchCount - 1))}
                                className="w-10 h-10 rounded-lg border border-neutral-300 flex items-center justify-center text-lg font-bold hover:bg-neutral-100"
                              >−</button>
                              <div className="flex-1 text-center">
                                <div className="text-2xl font-bold text-green-700">{sizeVariantBatchCount}</div>
                                <div className="text-xs text-neutral-500">{(sizeVariantBatchCount * batchSize).toLocaleString()} {pluralUnit} {t(`${p}.total`)}</div>
                              </div>
                              <button 
                                onClick={() => setSizeVariantBatchCount(sizeVariantBatchCount + 1)}
                                className="w-10 h-10 rounded-lg border border-neutral-300 flex items-center justify-center text-lg font-bold hover:bg-neutral-100"
                              >+</button>
                            </div>
                          </>
                        );
                      })()}
                    </div>
                  )}
                </div>
              )}
              
              {/* Size + Quantity Selector - for products with multiple sizes and quantities (Mailer Bag) */}
              {ecoStockProduct.sizeWithQuantities && ecoStockProduct.sizeWithQuantities.length > 0 && (
                <div className="space-y-4 pt-4 border-t">
                  {/* Step 1: Select Size */}
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-2">{t(`${p}.1SelectSize`)}</label>
                    <div className="grid grid-cols-2 gap-2">
                      {ecoStockProduct.sizeWithQuantities.map((size) => (
                        <button
                          key={size.id}
                          onClick={() => { setSelectedSizeWithQty(size.id); setSelectedQtyOption(null); }}
                          className={`p-3 border rounded-lg text-left transition ${
                            selectedSizeWithQty === size.id 
                              ? 'border-green-600 bg-green-50 ring-2 ring-green-200' 
                              : 'border-neutral-200 hover:border-green-300'
                          }`}
                        >
                          <div className="font-medium text-neutral-900 text-sm">{size.label}</div>
                          <div className="text-xs text-neutral-500 mt-1">{size.dimensions}</div>
                        </button>
                      ))}
                    </div>
                  </div>
                  
                  {/* Step 2: Select Quantity - only show when size is selected */}
                  {selectedSizeWithQty && (
                    <div>
                      <label className="block text-sm font-medium text-neutral-700 mb-2">{t(`${p}.2SelectQuantity`)}</label>
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
                                <div className="font-medium text-neutral-900">{option.quantity.toLocaleString()} {t(`${p}.pcs`)}</div>
                                <div className="text-xs text-neutral-500">${option.unitPrice.toFixed(4)}{t(`${p}.pc14`)}</div>
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
                if (product?.inquiryOnly) {
                  const inquiryText = product.id === 'custom-multi-layer-sticker-labels'
                    ? 'This is a highly customized double-layer peelable sticker label. Pricing depends entirely on size, shapes, Pagination, and order quantity. Contact our packaging engineers to get an instant customized quote.'
                    : 'This is a highly customized eco-friendly rollstock film. Pricing depends entirely on material structure, dimensions, print colors, and order quantity. Contact our packaging engineers to get an instant customized quote.';
                  return (
                    <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl border-2 border-green-200 p-6 shadow-sm">
                      <div className="text-lg font-bold text-green-800 mb-2">{t(`${p}.bespokeCustomProduction`)}</div>
                      <p className="text-xs text-green-700 leading-relaxed">
                        {inquiryText}
                      </p>
                    </div>
                  )
                }

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
                    <div className="text-3xl font-bold text-green-700">{t(`${p}.us`)}{displayPrice.toLocaleString()}</div>
                    <div className="text-sm text-green-600 mt-1">
                      ${displayUnitPrice.toFixed(4)}/{singleLabel} • {displayQuantity.toLocaleString()} {pluralLabel}
                    </div>
                    {discountText && discountText !== '0%' && (
                      <div className="text-sm text-red-500 font-medium mt-1">{t(`${p}.volumeDiscount`)}{discountText}</div>
                    )}
                    <div className="text-xs text-green-700 mt-2 bg-white bg-opacity-40 rounded-lg p-2 text-center">
                      {(ecoStockProduct as any).priceRemark
                        ? `* ${(ecoStockProduct as any).priceRemark}`
                        : `✓ ${ecoStockProduct.customPrintQuantities ? '15-20 Days Production' : 'Air Shipping Included'}`}
                    </div>
                  </div>
                )
              })()}
              
              {/* Quantity Selector - only for products without sizeVariants and without sizeWithQuantities */}
              {!product?.inquiryOnly && (!ecoStockProduct.sizeVariants || ecoStockProduct.sizeVariants.length === 0) && 
               (!ecoStockProduct.sizeWithQuantities || ecoStockProduct.sizeWithQuantities.length === 0) && (
                <div className="space-y-4 pt-4 border-t">
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-2">{t(`${p}.quantityMultiplesOf`)}{ecoStockProduct.quantityStep})</label>
                    <select 
                      value={selectedEcoStockQuantity} 
                      onChange={e => setSelectedEcoStockQuantity(Number(e.target.value))} 
                      className="w-full p-3.5 border-2 border-neutral-200 rounded-xl focus:ring-2 focus:ring-green-200 focus:border-green-500 bg-white text-neutral-900 font-medium transition-all hover:border-green-300 cursor-pointer appearance-none bg-[url('data:image/svg+xml;charset=UTF-8,%3csvg%20xmlns%3d%22http%3a%2f%2fwww.w3.org%2f2000%2fsvg%22%20width%3d%2224%22%20height%3d%2224%22%20viewBox%3d%220%200%2024%2024%22%20fill%3d%22none%22%20stroke%3d%22%239ca3af%22%20stroke-width%3d%222%22%20stroke-linecap%3d%22round%22%20stroke-linejoin%3d%22round%22%3e%3cpolyline%20points%3d%226%209%2012%2015%2018%209%22%3e%3c%2fpolyline%3e%3c%2fsvg%3e')] bg-no-repeat bg-[right_12px_center] bg-[length:20px] pr-10"
                    >
                      {Array.from({ length: 10 }, (_, i) => (ecoStockProduct.minQuantity || 500) + (i * ecoStockProduct.quantityStep)).map(qty => (
                        <option key={qty} value={qty}>{qty.toLocaleString()} {t(`${p}.pieces`)}</option>
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
                      <h4 className="font-semibold text-amber-800 text-sm">
                        <Link to={`/store/product/${ecoStockProduct.customPrintProductId}`} className="hover:underline flex items-center gap-1">
                          {t(`${p}.customPrintingAvailable`)}<span className="text-xs font-normal">→</span>
                        </Link>
                      </h4>
                      <p className="text-sm text-amber-700 mt-1">
                        <Link to={`/store/product/${ecoStockProduct.customPrintProductId}`} className="hover:underline">
                          {ecoStockProduct.customPrintNote}
                        </Link>
                      </p>
                      <Link
                        to={`/store/product/${ecoStockProduct.customPrintProductId}`}
                        className="inline-flex items-center gap-2 mt-3 px-4 py-2 bg-amber-500 hover:bg-amber-600 text-white font-medium rounded-lg text-sm transition"
                      >
                        <span>🎨</span> {t(`${p}.viewCustomPrintOptions`)}</Link>
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
                      <h4 className="font-semibold text-amber-800 text-sm">{t(`${p}.customPrintingAvailable`)}</h4>
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
                      <p className="text-sm text-blue-700">{t(`${p}.lookingForSmallerQuantitiesWit`)}</p>
                    </div>
                    <Link
                      to={`/store/product/${ecoStockProduct.stockProductId}`}
                      className="text-sm text-blue-600 hover:text-blue-800 font-medium underline"
                    >
                      {t(`${p}.viewStockVersion`)}</Link>
                  </div>
                </div>
              )}
              
              {/* Custom Print Quantity Selector */}
              {ecoStockProduct.customPrintQuantities && ecoStockProduct.customPrintQuantities.length > 0 && (
                <div className="space-y-4 pt-4 border-t">
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-2">{t(`${p}.selectQuantityVolumeDiscounts`)}</label>
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
                            <div className="font-medium text-neutral-900">{option.quantity.toLocaleString()} {t(`${p}.pcs`)}</div>
                            <div className="text-xs text-neutral-500">${option.unitPrice.toFixed(3)}{t(`${p}.pc15`)}</div>
                          </div>
                          <div className="text-right">
                            <div className="font-bold text-green-700">${option.totalPrice.toLocaleString()}</div>
                            {option.discount !== '0%' && (
                              <div className="text-xs text-red-500 font-medium">{t(`${p}.save`)}{option.discount}</div>
                            )}
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}
              
              {/* Add to Cart / RFQ & Share */}
              {product?.inquiryOnly ? (
                <div className="flex flex-col sm:flex-row gap-3 pt-2">
                  <a 
                    href="https://calendly.com/30-min-free-packaging-consultancy" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex-1 py-4 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-xl transition flex items-center justify-center gap-2 shadow-lg shadow-emerald-600/10 cursor-pointer text-center"
                  >
                    <Calendar className="h-5 w-5" />
                    {t(`${p}.book11InquiryMeeting`)}</a>
                  <a 
                    href={getWhatsAppLink()} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex-1 py-4 bg-[#25D366] hover:bg-[#20ba5a] text-white font-semibold rounded-xl transition flex items-center justify-center gap-2 shadow-lg shadow-[#25D366]/10 cursor-pointer text-center"
                  >
                    <MessageSquare className="h-5 w-5" />
                    {t(`${p}.chatOnWhatsapp`)}</a>
                </div>
              ) : (
                <div className="flex gap-2">
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
                        cartSize = `Custom Print (${customPrintQtyData.quantity.toLocaleString()} ${pluralUnit})`
                      } else if (selectedQtyData && selectedSizeData) {
                        cartPrice = selectedQtyData.totalPrice
                        cartSize = `${selectedSizeData.label} - ${selectedSizeData.dimensions} (${selectedQtyData.quantity} ${pluralUnit})`
                      } else if (selectedVariant) {
                        // Multiply by batch count for sizeVariants
                        cartPrice = selectedVariant.totalPrice * sizeVariantBatchCount
                        const totalPcs = selectedVariant.quantity * sizeVariantBatchCount
                        cartSize = `${selectedVariant.label} - ${selectedVariant.dimensions} (${totalPcs} ${pluralUnit})`
                      } else {
                        cartPrice = selectedEcoStockQuantity * ecoStockProduct.pricePerPiece
                        cartSize = ecoStockProduct.sizeInfo
                      }
                      
                      const cartItem = {
                        productId: product.id,
                        name: product.name,
                        image: product.images[0],
                        variant: { 
                          shape: ecoStockProduct.shape, 
                          size: cartSize, 
                          material: product.id === 'clear-matte-zipper-stand-up-pouch'
                            ? `Clear PE/PET (${selectedFinish === 'matte' ? 'Matte' : 'Glossy'} Finish)`
                            : ecoStockProduct.material 
                        },
                        quantity: 1,
                        unitPrice: cartPrice,
                        totalPrice: cartPrice,
                        configurationLink: window.location.href
                      }
                      
                      // For custom products (boxes, eco-stock custom print), add to RFQ
                      if (isCustomProduct) {
                        addToRfq({
                          ...cartItem,
                          isRfqItem: true
                        })
                        setActiveCartMode('rfq')
                        setIsCartOpen(true)
                      } else {
                        addToCart(cartItem)
                        setIsCartOpen(true)
                      }
                    }} 
                    disabled={
                      (ecoStockProduct.sizeVariants && ecoStockProduct.sizeVariants.length > 0 && !ecoStockProduct.customPrintQuantities && !selectedSizeVariant) ||
                      (ecoStockProduct.sizeWithQuantities && ecoStockProduct.sizeWithQuantities.length > 0 && (!selectedSizeWithQty || !selectedQtyOption)) ||
                      (ecoStockProduct.customPrintQuantities && ecoStockProduct.customPrintQuantities.length > 0 && !selectedQtyOption)
                    }
                    className={`flex-1 py-4 font-semibold rounded-xl transition flex items-center justify-center gap-2 ${
                      (ecoStockProduct.sizeVariants && ecoStockProduct.sizeVariants.length > 0 && !ecoStockProduct.customPrintQuantities && !selectedSizeVariant) ||
                      (ecoStockProduct.sizeWithQuantities && ecoStockProduct.sizeWithQuantities.length > 0 && (!selectedSizeWithQty || !selectedQtyOption)) ||
                      (ecoStockProduct.customPrintQuantities && ecoStockProduct.customPrintQuantities.length > 0 && !selectedQtyOption)
                        ? 'bg-neutral-300 text-neutral-500 cursor-not-allowed'
                        : isCustomProduct 
                          ? 'bg-amber-500 hover:bg-amber-600 text-white'
                          : 'bg-green-600 hover:bg-green-700 text-white'
                    }`}
                  >
                    {isCustomProduct ? (
                      <><span className="text-lg">📋</span> {isBoxes ? 'Add to Quote Request' : '🎨 Add Custom Print to RFQ'}</>
                    ) : (
                      <>
                        <ShoppingCart className="h-5 w-5" />{' '}
                        {product.category === 'eco-stock' ? '🌱 ' : ''}{t(`${p}.add`)}{product.name} {t(`${p}.toCart`)}</>
                    )}
                  </button>
                  {isBoxes && (
                    <button 
                      onClick={handleShareClick}
                      className="px-4 py-4 bg-neutral-100 hover:bg-neutral-200 text-neutral-700 rounded-xl transition flex items-center justify-center gap-2 border border-neutral-200"
                      title="Share Configuration"
                    >
                      <Share2 className="h-5 w-5" />
                    </button>
                  )}
                  <button 
                    onClick={openQuoteLightbox}
                    className="px-4 py-4 bg-primary-100 hover:bg-primary-200 text-primary-700 rounded-xl transition flex items-center justify-center gap-2 border border-primary-200"
                    title="Get Custom Quote"
                  >
                    <Sparkles className="h-5 w-5" />
                  </button>
                </div>
              )}
              
              {/* Features */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3 pt-4">
                {product.features.map((feature, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm text-neutral-600">
                    <Check className="h-4 w-4 text-green-500" /> {feature}
                  </div>
                ))}
              </div>
              
              {/* Eco Info Box - Only show for eco-stock, not for boxes or conventional stock */}
              {!isBoxes && product?.category === 'eco-stock' && (
                <div className="bg-green-50 border border-green-200 rounded-xl p-4">
                  {isLabelProduct ? (
                    <>
                      <h4 className="font-semibold text-green-800 mb-2">{t(`${p}.zeroMicroplasticsEcoResponsibl`)}</h4>
                      <p className="text-sm text-green-700">
                        {t(`${p}.ourEcoFriendlyLabelsAndSticker`)}</p>
                    </>
                  ) : (
                    <>
                      <h4 className="font-semibold text-green-800 mb-2">{t(`${p}.aboutCompostablePackaging`)}</h4>
                      <p className="text-sm text-green-700">
                        {t(`${p}.ourCompostablePouchesAreMadeFr`)}</p>
                    </>
                  )}
                </div>
              )}
            </div>
          </div>
        )}
        
        {/* Main Product Image for Non-Eco Digital and Non-Conventional and Non-Eco-Stock and Non-Boxes Products - Top of Page */}
        {!isEcoDigital && !isConventionalDigital && !isEcoStock && !isBoxes && (
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
        {!isConventionalDigital && !isEcoStock && !isBoxes && (
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left Column - Customer Examples + Package Preview */}
          <div className={`hidden lg:block space-y-4 lg:sticky lg:top-24 lg:self-start lg:max-h-[calc(100vh-120px)] lg:overflow-y-auto transition-all duration-500 ease-in-out ${
            isFaqVisible ? 'lg:opacity-0 lg:scale-95 lg:pointer-events-none' : 'lg:opacity-100 lg:scale-100'
          }`}>
            {/* Product Images Section - All eco-digital photos */}
            {isEcoDigital && (
              <div className="bg-white rounded-lg border border-neutral-200 overflow-hidden">
                {/* Main Product Image */}
                <div className="bg-neutral-50 p-6">
                  {(() => {
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
                  <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-9 gap-1.5">
                    {allEcoDigitalImages.map((img, index) => (
                      <button
                        key={index}
                        onClick={() => startTransition(() => setSelectedMainImage(index))}
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
            {isEcoDigital && ecoProduct?.shape !== 'Wrapping Paper' && calculationResult && (
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
                    {t(`${p}.packageVisualization`)}</button>
                  <button
                    onClick={() => setActiveTab('specifications')}
                    className={`flex-1 px-4 py-3 text-sm font-medium transition ${
                      activeTab === 'specifications'
                        ? 'bg-primary-50 text-primary-700 border-b-2 border-primary-600'
                        : 'text-neutral-600 hover:bg-neutral-50'
                    }`}
                  >
                    {t(`${p}.packageSpecifications`)}</button>
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
                        <p className="text-sm font-semibold text-neutral-800">{t(`${p}.mainPackage`)}</p>
                        <p className="text-xs text-neutral-500">{product.name}</p>
                      </div>
                      
                      {/* Grid: Material, Size, Closure, Surface, Barrier, Stiffness */}
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-3">
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
                              className="w-full h-16 object-cover"
                            />
                          </button>
                          <p className="text-xs font-medium text-neutral-700">{t(`${p}.material`)}</p>
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
                              className="w-full h-16 object-cover"
                            />
                          </button>
                          <p className="text-xs font-medium text-neutral-700">{t(`${p}.size`)}</p>
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
                              className="w-full h-16 object-cover"
                            />
                          </button>
                          <p className="text-xs font-medium text-neutral-700">{t(`${p}.closure`)}</p>
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
                              className="w-full h-16 object-cover"
                            />
                          </button>
                          <p className="text-xs font-medium text-neutral-700">{t(`${p}.surface`)}</p>
                          <p className="text-xs text-neutral-500 truncate">{selectedSurface}</p>
                        </div>
                        
                        {/* Barrier - Placeholder for future image */}
                        <div className="text-center">
                          <div className="bg-neutral-50 rounded-lg p-3 mb-2 w-full h-[88px] flex items-center justify-center">
                            <div className="text-neutral-400 text-2xl">🛡️</div>
                          </div>
                          <p className="text-xs font-medium text-neutral-700">{t(`${p}.barrier`)}</p>
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
                          <p className="text-xs font-medium text-neutral-700">{t(`${p}.stiffness`)}</p>
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
                            <p className="text-xs font-medium text-neutral-700">{t(`${p}.valve`)}</p>
                            <p className="text-xs text-neutral-500">{t(`${p}.degassing`)}</p>
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
                                className="w-full h-16 object-cover"
                              />
                            </button>
                            <p className="text-xs font-medium text-neutral-700">{t(`${p}.laser`)}</p>
                            <p className="text-xs text-neutral-500">{t(`${p}.scoring`)}</p>
                          </div>
                        )}
                      </div>
                    </div>
                  ) : (
                    /* Package Specifications Content - Full Details */
                    <dl className="grid grid-cols-1 gap-y-3 text-sm">
                      <div className="grid grid-cols-3 gap-2">
                        <dt className="text-neutral-500 col-span-1">{t(`${p}.totalQuantity`)}</dt>
                        <dd className="text-neutral-900 col-span-2">
                          {calculationResult.price.quantityUnits.toLocaleString()} {t(`${p}.digitalPrintPieces`)}</dd>
                      </div>

                      <div className="grid grid-cols-3 gap-2">
                        <dt className="text-neutral-500 col-span-1">{t(`${p}.totalDesigns`)}</dt>
                        <dd className="text-neutral-900 col-span-2">
                          {calculationResult.price.designCount} {calculationResult.price.designCount === 1 ? 'type' : 'types'}
                        </dd>
                      </div>

                      <div className="grid grid-cols-3 gap-2">
                        <dt className="text-neutral-500 col-span-1">{t(`${p}.packageType`)}</dt>
                        <dd className="text-neutral-900 col-span-2">
                          {calculationResult.package.shapeLabel}
                        </dd>
                      </div>

                      <div className="grid grid-cols-3 gap-2">
                        <dt className="text-neutral-500 col-span-1">{t(`${p}.packageSize`)}</dt>
                        <dd className="text-neutral-900 col-span-2">
                          {calculationResult.package.sizeDisplay}
                        </dd>
                      </div>

                      <div className="grid grid-cols-3 gap-2">
                        <dt className="text-neutral-500 col-span-1">{t(`${p}.material`)}</dt>
                        <dd className="text-neutral-900 col-span-2">
                          {calculationResult.package.materialTypeLabel}
                        </dd>
                      </div>

                      <div className="grid grid-cols-3 gap-2">
                        <dt className="text-neutral-500 col-span-1">{t(`${p}.barrierType`)}</dt>
                        <dd className="text-neutral-900 col-span-2">
                          {selectedBarrier}
                        </dd>
                      </div>

                      <div className="grid grid-cols-3 gap-2">
                        <dt className="text-neutral-500 col-span-1">{t(`${p}.structure16`)}</dt>
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
                        <dt className="text-neutral-500 col-span-1">{t(`${p}.thickness`)}</dt>
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
                        <dt className="text-neutral-500 col-span-1">{t(`${p}.otr`)}</dt>
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
                        <dt className="text-neutral-500 col-span-1">{t(`${p}.wvtr`)}</dt>
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
                        <dt className="text-neutral-500 col-span-1">{t(`${p}.stiffness`)}</dt>
                        <dd className="text-neutral-900 col-span-2">
                          {selectedStiffness}
                        </dd>
                      </div>

                      <div className="grid grid-cols-3 gap-2">
                        <dt className="text-neutral-500 col-span-1">{t(`${p}.reclosableOption`)}</dt>
                        <dd className="text-neutral-900 col-span-2">
                          {selectedClosure === 'No' ? 'None' : selectedClosure}
                        </dd>
                      </div>

                      <div className="grid grid-cols-3 gap-2">
                        <dt className="text-neutral-500 col-span-1">{t(`${p}.surfaceTreatment`)}</dt>
                        <dd className="text-neutral-900 col-span-2">
                          {calculationResult.package.surface}
                        </dd>
                      </div>

                      <div className="grid grid-cols-3 gap-2">
                        <dt className="text-neutral-500 col-span-1">{t(`${p}.additionalFeatures`)}</dt>
                        <dd className="text-neutral-900 col-span-2">
                          {calculationResult.package.additional}
                        </dd>
                      </div>

                      <div className="grid grid-cols-3 gap-2">
                        <dt className="text-neutral-500 col-span-1">{t(`${p}.shippingMethod`)}</dt>
                        <dd className="text-neutral-900 col-span-2">
                          {calculationResult.price.shippingMethod}
                        </dd>
                      </div>
                    </dl>
                  )}
                </div>
              </div>
            )}
            
            {/* Testimonials & Customer Samples - Responsive Horizontal Layout */}
            <div className="block">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">
                {/* Left: Customer Testimonials */}
                <div className="bg-gradient-to-br from-white to-neutral-50 rounded-xl lg:rounded-2xl border border-neutral-200 shadow-md lg:shadow-lg overflow-hidden">
                  <div className="bg-gradient-to-r from-primary-500 to-primary-600 px-4 lg:px-5 py-3 lg:py-4">
                    <h3 className="text-base lg:text-lg font-bold text-white flex items-center gap-2 lg:gap-3">
                      <span className="bg-white/20 p-1.5 lg:p-2 rounded-lg text-sm lg:text-base">💬</span>
                      {t(`${p}.customerTestimonials`)}</h3>
                    <p className="text-primary-100 text-xs lg:text-sm mt-0.5 lg:mt-1">{t(`${p}.whatOurCustomersSay`)}</p>
                  </div>
                  <div className="p-3 lg:p-5 space-y-3 lg:space-y-4 max-h-[300px] lg:max-h-[420px] overflow-y-auto custom-scrollbar">
                    {TESTIMONIALS.slice(0, 3).map((testimonial, index) => (
                      <div 
                        key={testimonial.id} 
                        className="bg-white rounded-lg lg:rounded-xl p-3 lg:p-4 shadow-sm border border-neutral-100 hover:shadow-md hover:border-primary-200 transition-all duration-300"
                      >
                        <div className="flex items-start gap-2 lg:gap-3">
                          <div className="relative flex-shrink-0">
                            <img 
                              src={testimonial.ownerImage} 
                              alt={testimonial.name}
                              className="w-10 h-10 lg:w-14 lg:h-14 rounded-full object-cover ring-2 ring-primary-100 ring-offset-1 lg:ring-offset-2"
                              onError={(e) => {
                                const target = e.target as HTMLImageElement
                                target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(testimonial.name)}&background=22c55e&color=fff&size=56`
                              }}
                            />
                            <div className="absolute -bottom-0.5 -right-0.5 lg:-bottom-1 lg:-right-1 bg-primary-500 text-white text-[10px] lg:text-xs w-4 h-4 lg:w-5 lg:h-5 rounded-full flex items-center justify-center shadow">✓</div>
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center justify-between gap-1 lg:gap-2">
                              <div className="font-semibold text-neutral-900 truncate text-sm lg:text-base">{testimonial.name}</div>
                              <div className="flex text-amber-400 flex-shrink-0">
                                {[...Array(5)].map((_, i) => (
                                  <Star key={i} className="w-3 h-3 lg:w-3.5 lg:h-3.5 fill-current" />
                                ))}
                              </div>
                            </div>
                            <div className="text-[10px] lg:text-xs text-neutral-500 truncate">
                              {testimonial.company ? `${testimonial.role}, ${testimonial.company}` : 'Verified Buyer'}
                            </div>
                          </div>
                        </div>
                        <p className="text-xs lg:text-sm text-neutral-600 mt-2 lg:mt-3 leading-relaxed line-clamp-3 lg:line-clamp-none">
                          <span className="text-primary-500 text-base lg:text-lg font-serif">"</span>
                          {testimonial.shortQuote}
                          <span className="text-primary-500 text-base lg:text-lg font-serif">"</span>
                        </p>
                        <div className="text-[10px] lg:text-xs text-neutral-400 mt-1.5 lg:mt-2 flex items-center gap-1">
                          <span>📍</span> {testimonial.extraInfo}
                        </div>
                      </div>
                    ))}
                    {/* Show more testimonials on desktop */}
                    <div className="hidden lg:block">
                      {TESTIMONIALS.slice(3).map((testimonial, index) => (
                        <div 
                          key={testimonial.id} 
                          className="bg-white rounded-xl p-4 shadow-sm border border-neutral-100 hover:shadow-md hover:border-primary-200 transition-all duration-300 mt-4"
                        >
                          <div className="flex items-start gap-3">
                            <div className="relative flex-shrink-0">
                              <img 
                                src={testimonial.ownerImage} 
                                alt={testimonial.name}
                                className="w-14 h-14 rounded-full object-cover ring-2 ring-primary-100 ring-offset-2"
                                onError={(e) => {
                                  const target = e.target as HTMLImageElement
                                  target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(testimonial.name)}&background=22c55e&color=fff&size=56`
                                }}
                              />
                              <div className="absolute -bottom-1 -right-1 bg-primary-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center shadow">✓</div>
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center justify-between gap-2">
                                <div className="font-semibold text-neutral-900 truncate">{testimonial.name}</div>
                                <div className="flex text-amber-400 flex-shrink-0">
                                  {[...Array(5)].map((_, i) => (
                                    <Star key={i} className="w-3.5 h-3.5 fill-current" />
                                  ))}
                                </div>
                              </div>
                              <div className="text-xs text-neutral-500 truncate">
                                {testimonial.company ? `${testimonial.role}, ${testimonial.company}` : 'Verified Buyer'}
                              </div>
                            </div>
                          </div>
                          <p className="text-sm text-neutral-600 mt-3 leading-relaxed">
                            <span className="text-primary-500 text-lg font-serif">"</span>
                            {testimonial.shortQuote}
                            <span className="text-primary-500 text-lg font-serif">"</span>
                          </p>
                          <div className="text-xs text-neutral-400 mt-2 flex items-center gap-1">
                            <span>📍</span> {testimonial.extraInfo}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right: Customer Samples Gallery */}
                <div className="bg-gradient-to-br from-white to-neutral-50 rounded-xl lg:rounded-2xl border border-neutral-200 shadow-md lg:shadow-lg overflow-hidden">
                  <div className="bg-gradient-to-r from-amber-500 to-orange-500 px-4 lg:px-5 py-3 lg:py-4">
                    <h3 className="text-base lg:text-lg font-bold text-white flex items-center gap-2 lg:gap-3">
                      <span className="bg-white/20 p-1.5 lg:p-2 rounded-lg text-sm lg:text-base">📸</span>
                      {t(`${p}.customerSamples`)}</h3>
                    <p className="text-amber-100 text-xs lg:text-sm mt-0.5 lg:mt-1">{t(`${p}.realProductsFromOurCustomers`)}</p>
                  </div>
                  <div className="p-3 lg:p-5">
                    {/* Featured Samples - Larger Images */}
                    <div className="grid grid-cols-2 gap-2 lg:gap-3 mb-3 lg:mb-4">
                      {[
                        'a_blend_coffee_family_group_4850129.webp',
                        'a_blend4_coffee_functional_closeup_9237259.webp',
                        'a_natures_touch_fruit_family_0232483.webp',
                        'Arielle.webp'
                      ].map((img, index) => (
                        <button
                          key={index}
                          onClick={() => setEnlargedImage({ src: `/imgs/store/customer-sample/${img}`, alt: 'Customer Sample' })}
                          className="group relative aspect-square bg-neutral-100 rounded-lg lg:rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300"
                        >
                          <img 
                            src={`/imgs/store/customer-sample/${img}`} 
                            alt="Customer Sample" 
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" 
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-2 lg:pb-3">
                            <span className="text-white text-[10px] lg:text-xs font-medium bg-black/30 px-1.5 lg:px-2 py-0.5 lg:py-1 rounded-full">{t(`${p}.clickToView`)}</span>
                          </div>
                        </button>
                      ))}
                    </div>
                    
                    {/* More Samples - Smaller Grid */}
                    <div className="grid grid-cols-4 gap-1.5 lg:gap-2">
                      {[
                        'David.webp', 'Holly.webp', 'Leo.webp', 'Nicole.webp',
                        'Paul.webp', 'Remi.webp', 'Richard.webp', 'Steph.webp'
                      ].map((img, index) => (
                        <button
                          key={index}
                          onClick={() => setEnlargedImage({ src: `/imgs/store/customer-sample/${img}`, alt: 'Customer Sample' })}
                          className="group relative aspect-square bg-neutral-100 rounded-md lg:rounded-lg overflow-hidden hover:ring-2 hover:ring-amber-400 transition-all duration-200"
                        >
                          <img 
                            src={`/imgs/store/customer-sample/${img}`} 
                            alt="Customer Sample" 
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" 
                          />
                        </button>
                      ))}
                    </div>

                    {/* Pouch Shape Reference - if exists */}
                    {isEcoDigital && product.images.filter(img => img.includes('pouch shape')).length > 0 && (
                      <div className="mt-4 lg:mt-5 pt-4 lg:pt-5 border-t border-neutral-200">
                        <h4 className="text-xs lg:text-sm font-semibold text-neutral-700 flex items-center gap-2 mb-2 lg:mb-3">
                          <span>📐</span> {t(`${p}.pouchShapeReference`)}</h4>
                        <div className="grid grid-cols-2 gap-1.5 lg:gap-2">
                          {product.images.filter(img => img.includes('pouch shape')).map((img, index) => (
                            <button
                              key={index}
                              onClick={() => setEnlargedImage({ src: img, alt: 'Pouch Shape Reference' })}
                              className="bg-neutral-100 rounded-md lg:rounded-lg p-2 lg:p-3 hover:bg-neutral-200 transition cursor-pointer"
                            >
                              <img src={img} alt="Pouch Shape" className="w-full h-16 lg:h-20 object-contain" />
                            </button>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Product Options */}
          <div className="space-y-6 lg:sticky lg:top-24 lg:self-start lg:max-h-[calc(100vh-120px)] lg:overflow-y-auto pr-1">
            {/* Price Section - Hide on desktop since we have fixed top bar */}
            {isEcoDigital && (
              <div className="lg:hidden bg-gradient-to-br from-primary-50 to-primary-100 rounded-xl border-2 border-primary-200 shadow-lg overflow-hidden">
                {/* Collapsible Header with Unit Price */}
                <div 
                  className="flex items-center justify-between px-3 py-3 cursor-pointer hover:bg-primary-100 transition"
                  onClick={() => setIsRightCollapsed(!isRightCollapsed)}
                >
                  <div className="flex items-center gap-2 min-w-0 flex-1">
                    <span className="text-sm font-semibold text-primary-800 whitespace-nowrap">{t(`${p}.total17`)}</span>
                    {isRightCollapsed && (
                      <span className="text-sm font-bold text-primary-700 truncate">${unitPrice.toFixed(2)}{t(`${p}.pc18`)}</span>
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
                  <div className="text-3xl sm:text-4xl font-bold text-primary-700 mb-3">{t(`${p}.us`)}{Math.round(totalPrice).toLocaleString()}</div>
                  {calculationResult && (
                    <div className="grid grid-cols-2 gap-3 text-sm">
                      <div className="bg-white bg-opacity-60 rounded-lg p-3">
                        <div className="text-neutral-600 text-xs mb-1">{t(`${p}.unitPrice`)}</div>
                        <div className="font-semibold text-neutral-800">${unitPrice.toFixed(4)}{ecoProduct?.shape === 'Wrapping Paper' ? '/sheet' : '/pc'}</div>
                      </div>
                      <div className="bg-white bg-opacity-60 rounded-lg p-3">
                        <div className="text-neutral-600 text-xs mb-1">{t(`${p}.quantity`)}</div>
                        <div className="font-semibold text-neutral-800">{calculationResult.price.quantityUnits.toLocaleString()} {ecoProduct?.shape === 'Wrapping Paper' ? 'sheets' : 'pcs'}</div>
                      </div>
                      <div className="bg-white bg-opacity-60 rounded-lg p-3">
                        <div className="text-neutral-600 text-xs mb-1">{t(`${p}.designs`)}</div>
                        <div className="font-semibold text-neutral-800">{calculationResult.price.designCount}</div>
                      </div>
                      <div className="bg-white bg-opacity-60 rounded-lg p-3">
                        <div className="text-neutral-600 text-xs mb-1">{t(`${p}.shipping`)}</div>
                        <div className="font-semibold text-neutral-800 text-xs">{calculationResult.price.shippingMethod}</div>
                      </div>
                    </div>
                  )}
                  <div className="text-xs text-primary-700 mt-3 bg-white bg-opacity-40 rounded-lg p-2 text-center">
                    {t(`${p}.shippingIncluded`)}</div>
                </div>
              </div>
            )}
            
            {product.badge && <span className="inline-block bg-primary-100 text-primary-700 text-sm px-4 py-1 rounded-full font-medium">{product.badge}</span>}
            <h1 className="text-2xl sm:text-3xl font-bold text-neutral-900">{product.name}</h1>
            
            <div className="flex items-center gap-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className={`h-5 w-5 ${i < Math.floor(product.rating) ? 'text-yellow-400 fill-yellow-400' : 'text-neutral-300'}`} />
                ))}
              </div>
              <Link to="/reviews" className="text-neutral-600 hover:text-primary-600 hover:underline transition-colors">({product.reviews} {t(`${p}.reviews`)}</Link>
            </div>

            <p className="text-sm sm:text-base text-neutral-600">{product.description}</p>

            {/* Dynamic Product Description - Problem → Solution → Features */}
            {isEcoDigital && ecoProduct && (
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200 rounded-xl overflow-hidden w-full shadow-sm hover:shadow transition-all duration-300">
                {(() => {
                  const dynamicInfo = generateDynamicDescription({
                    shape: ecoProduct.shape, material: selectedMaterial, size: selectedSize,
                    closure: selectedClosure, surface: selectedSurface, barrier: selectedBarrier,
                    stiffness: selectedStiffness, productName: product.name
                  });
                  return (
                    <>
                      <div 
                        className="px-5 py-4 flex items-center justify-between cursor-pointer select-none hover:bg-green-100/30 transition-colors"
                        onClick={() => setIsDynamicDescExpanded(!isDynamicDescExpanded)}
                      >
                        <div className="flex items-center gap-3 pr-4 flex-1">
                          <div className="w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0">
                            <span className="text-amber-600 text-sm">❓</span>
                          </div>
                          <div>
                            <p className="text-xs text-neutral-500 font-semibold uppercase tracking-wider">{t(`${p}.productChallenge`)}</p>
                            <p className="text-sm text-neutral-700 leading-normal line-clamp-1 font-medium whitespace-pre-line">
                              {dynamicInfo.problem}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center gap-1.5 text-xs text-green-700 font-semibold bg-white px-3 py-1.5 rounded-full shadow-sm hover:shadow transition-all whitespace-nowrap">
                          <span>{isDynamicDescExpanded ? 'Hide Details' : 'Know More'}</span>
                          {isDynamicDescExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                        </div>
                      </div>

                      {isDynamicDescExpanded && (
                        <div className="border-t border-green-200 bg-white/20 divide-y divide-green-100 animate-fadeIn">
                          <div className="px-5 py-4">
                            <div className="flex items-start gap-3">
                              <div className="w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                                <span className="text-amber-600 text-sm">❓</span>
                              </div>
                              <div>
                                <p className="text-xs text-neutral-500 font-semibold uppercase tracking-wider">{t(`${p}.theProblem`)}</p>
                                <p className="text-sm text-neutral-700 leading-relaxed font-normal mt-0.5 whitespace-pre-line">
                                  {dynamicInfo.problem}
                                </p>
                              </div>
                            </div>
                          </div>

                          <div className="px-5 py-4">
                            <div className="flex items-start gap-3">
                              <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                                <span className="text-green-600 text-sm">✓</span>
                              </div>
                              <div className="flex-1">
                                <p className="text-xs text-green-500 font-semibold uppercase tracking-wider">{t(`${p}.sustainableSolution`)}</p>
                                <div className="mt-0.5">
                                  {dynamicInfo.skuType === 'label' && dynamicInfo.materialType === 'compost' ? (
                                    <div className="grid grid-cols-1 md:grid-cols-12 gap-5 items-start">
                                      <div className="md:col-span-7">
                                        <p className="text-sm text-green-800 leading-relaxed font-medium whitespace-pre-line">{dynamicInfo.solution}</p>
                                      </div>
                                      <div className="md:col-span-5">
                                        <div className="relative group overflow-hidden rounded-xl border border-green-200/80 bg-white p-2 shadow-sm hover:shadow-md transition-all duration-300">
                                          <img
                                            src="/taobao/compostable-label/compostable-labels-7.jpg"
                                            alt="180-Day Degradation Process"
                                            className="w-full h-auto rounded-lg object-cover transform transition-transform duration-500 group-hover:scale-[1.03]"
                                          />
                                          <div className="absolute inset-0 bg-green-900/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-lg" />
                                        </div>
                                      </div>
                                    </div>
                                  ) : (
                                    <p className="text-sm text-green-800 leading-relaxed font-medium whitespace-pre-line">{dynamicInfo.solution}</p>
                                  )}
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="px-5 py-4 space-y-2">
                            <div className="bg-white/60 rounded-lg p-3 text-xs text-neutral-700">
                              <span className="font-semibold text-green-700">{t(`${p}.material19`)}</span> {dynamicInfo.materialInfo}
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

                          <div className="px-5 py-4">
                            <div className="grid grid-cols-2 gap-2">
                              {dynamicInfo.features.slice(0, 6).map((feature, i) => (
                                <div key={i} className="flex items-center gap-1.5 text-xs text-green-700">
                                  <Check className="w-3.5 h-3.5 text-green-600 flex-shrink-0" />
                                  <span>{feature}</span>
                                </div>
                              ))}
                            </div>
                          </div>

                          <div className="bg-green-100/50 px-5 py-3.5 border-t border-green-200">
                            <div className="flex flex-wrap items-center gap-2 text-xs">
                              <span className="bg-green-600 text-white px-2 py-0.5 rounded-full font-medium">{dynamicInfo.certifications}</span>
                              <span className="text-green-700"><span className="font-medium">{t(`${p}.idealFor`)}</span> {dynamicInfo.idealFor}</span>
                            </div>
                          </div>
                        </div>
                      )}
                    </>
                  );
                })()}
              </div>
            )}

            {/* Options */}
            {isEcoDigital && ecoProduct && ecoProduct.shape !== 'Wrapping Paper' && (
              <div className="space-y-4 pt-4 border-t">
                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-2">
                    {t(`${p}.ecoMaterialType`)}</label>
                  
                  {product?.id === 'eco-shrinksleeve' ? (
                    <div className="bg-primary-50 border-2 border-primary-500 rounded-xl p-3 flex items-center gap-3">
                      <div className="flex-shrink-0 bg-white rounded-lg p-2 w-12 h-12 flex items-center justify-center border border-primary-200">
                        <img src="/imgs/store/eco-material/recycle.webp" alt="PET" className="max-w-full max-h-full object-contain" />
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-primary-700">PET (100% Recyclable)</p>
                        <p className="text-[10px] text-neutral-500">Resin Code ♻️ 1 compliant film, highly recyclable</p>
                      </div>
                    </div>
                  ) : (
                    <>
                      {/* Compare Options Link */}
                      <button
                        type="button"
                        onClick={() => setCompareModal({ type: 'material', isOpen: true })}
                        className="text-xs text-primary-600 hover:text-primary-700 underline mb-3 block"
                      >
                        {t(`${p}.compareAllMaterialOptions`)}</button>
                      
                      {/* Mobile: Native Select */}
                      <div className="md:hidden flex gap-3 items-center">
                        <select value={selectedMaterial} onChange={e => setSelectedMaterial(e.target.value)} className="flex-1 p-3.5 border-2 border-neutral-200 rounded-xl focus:ring-2 focus:ring-primary-200 focus:border-primary-500 bg-white text-neutral-900 font-medium transition-all hover:border-primary-300 cursor-pointer appearance-none bg-[url('data:image/svg+xml;charset=UTF-8,%3csvg%20xmlns%3d%22http%3a%2f%2fwww.w3.org%2f2000%2fsvg%22%20width%3d%2224%22%20height%3d%2224%22%20viewBox%3d%220%200%2024%2024%22%20fill%3d%22none%22%20stroke%3d%22%239ca3af%22%20stroke-width%3d%222%22%20stroke-linecap%3d%22round%22%20stroke-linejoin%3d%22round%22%3e%3cpolyline%20points%3d%226%209%2012%2015%2018%209%22%3e%3c%2fpolyline%3e%3c%2fsvg%3e')] bg-no-repeat bg-[right_12px_center] bg-[length:20px] pr-10">
                          <option value="PCR or Bio Plastic">{t(`${p}.pcrOrBioPlastic`)}</option>
                          <option value="Mono Recyclable Plastic">{t(`${p}.monoRecyclablePlastic`)}</option>
                          <option value="Biodegradable and Compostable">{t(`${p}.biodegradableAndCompostable`)}</option>
                        </select>
                        <div className="flex-shrink-0 bg-white rounded-lg p-2 w-14 h-14 flex items-center justify-center border-2 border-primary-600">
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
                      
                      {/* Tablet/Desktop: Popover Grid */}
                      <div className="hidden md:block">
                        <div className="grid grid-cols-3 gap-2">
                          {[
                            { value: 'PCR or Bio Plastic', label: 'PCR / Bio PE', image: '/imgs/store/eco-material/pcr-or-biope.webp', desc: 'Recycled or plant-based' },
                            { value: 'Mono Recyclable Plastic', label: 'Mono PE', image: '/imgs/store/eco-material/recycle.webp', desc: 'Fully recyclable' },
                            { value: 'Biodegradable and Compostable', label: 'Compostable', image: '/imgs/store/eco-material/compostable.webp', desc: 'Certified compostable' },
                          ].map(mat => (
                            <button
                              key={mat.value}
                              type="button"
                              onClick={() => setSelectedMaterial(mat.value)}
                              className={`relative p-3 rounded-xl border-2 transition-all text-left ${
                                selectedMaterial === mat.value
                                  ? 'border-primary-500 bg-primary-50 ring-2 ring-primary-100'
                                  : 'border-neutral-200 hover:border-primary-300 hover:bg-neutral-50'
                              }`}
                            >
                              <img src={mat.image} alt="" className="w-10 h-10 object-contain mx-auto mb-2" />
                              <p className={`text-xs font-semibold text-center ${selectedMaterial === mat.value ? 'text-primary-700' : 'text-neutral-800'}`}>
                                {mat.label}
                              </p>
                              <p className="text-[10px] text-neutral-500 text-center mt-0.5">{mat.desc}</p>
                              {selectedMaterial === mat.value && (
                                <div className="absolute top-1 right-1 w-4 h-4 bg-primary-500 rounded-full flex items-center justify-center">
                                  <CheckCircle className="w-3 h-3 text-white" />
                                </div>
                              )}
                            </button>
                          ))}
                        </div>
                      </div>
                    </>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-2">
                    {product?.id === 'eco-shrinksleeve' ? 'Custom Flat Dimensions (mm)' : getSizeLabel}
                  </label>
                  
                  {product?.id === 'eco-shrinksleeve' ? (
                    <div className="space-y-3 bg-neutral-50 p-4 rounded-xl border border-neutral-200">
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-[11px] font-semibold text-neutral-500 mb-1 uppercase tracking-wider">Lay-Flat Width (mm)</label>
                          <div className="relative">
                            <input 
                              type="number"
                              min={40}
                              max={400}
                              value={customWidth}
                              onChange={e => setCustomWidth(Math.max(40, Math.min(400, Number(e.target.value) || 40)))}
                              className="w-full p-3 border border-neutral-200 rounded-lg text-sm text-neutral-900 bg-white font-medium focus:ring-2 focus:ring-primary-200 focus:border-primary-500 transition-all"
                            />
                            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-neutral-400 font-medium">mm</span>
                          </div>
                          <span className="text-[10px] text-neutral-500 mt-1 block">Range: 40 - 400 mm</span>
                        </div>
                        <div>
                          <label className="block text-[11px] font-semibold text-neutral-500 mb-1 uppercase tracking-wider">Cut Length / Height (mm)</label>
                          <div className="relative">
                            <input 
                              type="number"
                              min={40}
                              max={500}
                              value={customHeight}
                              onChange={e => setCustomHeight(Math.max(40, Math.min(500, Number(e.target.value) || 40)))}
                              className="w-full p-3 border border-neutral-200 rounded-lg text-sm text-neutral-900 bg-white font-medium focus:ring-2 focus:ring-primary-200 focus:border-primary-500 transition-all"
                            />
                            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-neutral-400 font-medium">mm</span>
                          </div>
                          <span className="text-[10px] text-neutral-500 mt-1 block">Range: 40 - 500 mm</span>
                        </div>
                      </div>
                      <p className="text-[10px] text-neutral-500 leading-relaxed pt-1.5 border-t border-neutral-200/60">
                        * Lay-Flat Width = (Bottle Circumference at widest point × 1.05 for clearance) ÷ 2. Custom area determines digital print pricing bucket ({customWidth * customHeight} mm²).
                      </p>
                    </div>
                  ) : (
                    <>
                      {/* Compare Options Link */}
                      <button
                        type="button"
                        onClick={() => setCompareModal({ type: 'size', isOpen: true })}
                        className="text-xs text-primary-600 hover:text-primary-700 underline mb-3 block"
                      >
                        {t(`${p}.compareAllSizeOptions`)}</button>
                      
                      {/* Mobile: Native Select */}
                      <div className="md:hidden flex gap-3 items-center">
                        <select value={selectedSize} onChange={e => setSelectedSize(e.target.value)} className="flex-1 p-3.5 border-2 border-neutral-200 rounded-xl focus:ring-2 focus:ring-primary-200 focus:border-primary-500 bg-white text-neutral-900 font-medium transition-all hover:border-primary-300 cursor-pointer appearance-none bg-[url('data:image/svg+xml;charset=UTF-8,%3csvg%20xmlns%3d%22http%3a%2f%2fwww.w3.org%2f2000%2fsvg%22%20width%3d%2224%22%20height%3d%2224%22%20viewBox%3d%220%200%2024%2024%22%20fill%3d%22none%22%20stroke%3d%22%239ca3af%22%20stroke-width%3d%222%22%20stroke-linecap%3d%22round%22%20stroke-linejoin%3d%22round%22%3e%3cpolyline%20points%3d%226%209%2012%2015%2018%209%22%3e%3c%2fpolyline%3e%3c%2fsvg%3e')] bg-no-repeat bg-[right_12px_center] bg-[length:20px] pr-10">
                          {sizeOptions.map(size => (
                            <option key={size.value} value={size.value}>{size.label}</option>
                          ))}
                        </select>
                        <div className="flex-shrink-0 bg-white rounded-lg p-2 w-14 h-14 flex items-center justify-center border-2 border-primary-600">
                          <img 
                            src={getSizeImage(selectedSize as EcoSizeType)} 
                            alt={`Size ${selectedSize}`} 
                            className="max-w-full max-h-full object-contain"
                          />
                        </div>
                      </div>
                      
                      {/* Desktop: Card Grid */}
                      <div className="hidden md:block">
                        <div className="grid grid-cols-4 gap-2">
                          {SIZE_OPTIONS.map(size => (
                            <button
                              key={size.id}
                              type="button"
                              onClick={() => setSelectedSize(size.id)}
                              className={`relative p-2 rounded-xl border-2 transition-all text-left ${
                                selectedSize === size.id
                                  ? 'border-primary-500 bg-primary-50 ring-2 ring-primary-100'
                                  : 'border-neutral-200 hover:border-primary-300 hover:bg-neutral-50'
                              }`}
                            >
                              <img src={size.img} alt="" className="w-full h-12 object-contain mb-1" />
                              <p className={`text-xs font-semibold text-center ${selectedSize === size.id ? 'text-primary-700' : 'text-neutral-800'}`}>
                                {size.id}
                              </p>
                              <p className="text-[9px] text-neutral-500 text-center truncate">{sizeOptions.find(s => s.value === size.id)?.label.split('/')[0]}</p>
                              {selectedSize === size.id && (
                                <div className="absolute top-1 right-1 w-4 h-4 bg-primary-500 rounded-full flex items-center justify-center">
                                  <CheckCircle className="w-3 h-3 text-white" />
                                </div>
                              )}
                            </button>
                          ))}
                        </div>
                      </div>
                    </>
                  )}
                </div>

                {product?.id !== 'eco-shrinksleeve' && (
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-2">
                      {t(`${p}.closure`)}</label>
                    
                    {/* Compare Options Link */}
                    <button
                      type="button"
                      onClick={() => setCompareModal({ type: 'closure', isOpen: true })}
                      className="text-xs text-primary-600 hover:text-primary-700 underline mb-3 block"
                    >
                      {t(`${p}.compareAllClosureOptions`)}</button>
                    
                    {/* Mobile: Native Select */}
                    <div className="md:hidden flex gap-3 items-center">
                      <select value={selectedClosure} onChange={e => setSelectedClosure(e.target.value as ClosureType)} className="flex-1 p-3.5 border-2 border-neutral-200 rounded-xl focus:ring-2 focus:ring-primary-200 focus:border-primary-500 bg-white text-neutral-900 font-medium transition-all hover:border-primary-300 cursor-pointer appearance-none bg-[url('data:image/svg+xml;charset=UTF-8,%3csvg%20xmlns%3d%22http%3a%2f%2fwww.w3.org%2f2000%2fsvg%22%20width%3d%2224%22%20height%3d%2224%22%20viewBox%3d%220%200%2024%2024%22%20fill%3d%22none%22%20stroke%3d%22%239ca3af%22%20stroke-width%3d%222%22%20stroke-linecap%3d%22round%22%20stroke-linejoin%3d%22round%22%3e%3cpolyline%20points%3d%226%209%2012%2015%2018%209%22%3e%3c%2fpolyline%3e%3c%2fsvg%3e')] bg-no-repeat bg-[right_12px_center] bg-[length:20px] pr-10">
                        {CLOSURE_OPTIONS.map(c => (
                          <option key={c.id} value={c.id}>{c.name}</option>
                        ))}
                      </select>
                      <div className="flex-shrink-0 bg-white rounded-lg p-2 w-14 h-14 flex items-center justify-center border-2 border-primary-600">
                        <img 
                          src={CLOSURE_OPTIONS.find(c => c.id === selectedClosure)?.img || '/imgs/store/closure/no-zipper.webp'} 
                          alt={`${selectedClosure} closure`} 
                          className="max-w-full max-h-full object-contain"
                        />
                      </div>
                    </div>
                    
                    {/* Desktop: Card Grid */}
                    <div className="hidden md:block">
                      <div className="grid grid-cols-4 gap-2">
                        {CLOSURE_OPTIONS.map(closure => (
                          <button
                            key={closure.id}
                            type="button"
                            onClick={() => setSelectedClosure(closure.id as ClosureType)}
                            className={`relative p-2 rounded-xl border-2 transition-all text-left ${
                              selectedClosure === closure.id
                                ? 'border-primary-500 bg-primary-50 ring-2 ring-primary-100'
                                : 'border-neutral-200 hover:border-primary-300 hover:bg-neutral-50'
                            }`}
                          >
                            <img src={closure.img} alt="" className="w-full h-12 object-contain mb-1" />
                            <p className={`text-[10px] font-semibold text-center ${selectedClosure === closure.id ? 'text-primary-700' : 'text-neutral-800'}`}>
                              {closure.name.length > 12 ? closure.name.split(' ')[0] : closure.name}
                            </p>
                            {closure.premium && (
                              <span className="absolute top-1 left-1 text-[8px] bg-amber-100 text-amber-700 px-1 py-0.5 rounded">
                                {t(`${p}.premium`)}</span>
                            )}
                            {selectedClosure === closure.id && (
                              <div className="absolute top-1 right-1 w-4 h-4 bg-primary-500 rounded-full flex items-center justify-center">
                                <CheckCircle className="w-3 h-3 text-white" />
                              </div>
                            )}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-2">
                    {t(`${p}.surface`)}</label>
                  
                  {/* Compare Options Link */}
                  <button
                    type="button"
                    onClick={() => setCompareModal({ type: 'surface', isOpen: true })}
                    className="text-xs text-primary-600 hover:text-primary-700 underline mb-3 block"
                  >
                    {t(`${p}.compareAllSurfaceOptions`)}</button>
                  
                  {/* Mobile: Native Select */}
                  <div className="md:hidden flex gap-3 items-center">
                    <select value={selectedSurface} onChange={e => setSelectedSurface(e.target.value as SurfaceType)} className="flex-1 p-3.5 border-2 border-neutral-200 rounded-xl focus:ring-2 focus:ring-primary-200 focus:border-primary-500 bg-white text-neutral-900 font-medium transition-all hover:border-primary-300 cursor-pointer appearance-none bg-[url('data:image/svg+xml;charset=UTF-8,%3csvg%20xmlns%3d%22http%3a%2f%2fwww.w3.org%2f2000%2fsvg%22%20width%3d%2224%22%20height%3d%2224%22%20viewBox%3d%220%200%2024%2024%22%20fill%3d%22none%22%20stroke%3d%22%239ca3af%22%20stroke-width%3d%222%22%20stroke-linecap%3d%22round%22%20stroke-linejoin%3d%22round%22%3e%3cpolyline%20points%3d%226%209%2012%2015%2018%209%22%3e%3c%2fpolyline%3e%3c%2fsvg%3e')] bg-no-repeat bg-[right_12px_center] bg-[length:20px] pr-10">
                      <option value="Glossy">{t(`${p}.glossy`)}</option>
                      <option value="Matt">{t(`${p}.matt`)}</option>
                      <option value="Metallic">{t(`${p}.metallic`)}</option>
                      <option value="Soft Touch">{t(`${p}.softTouch`)}</option>
                      <option value="Emboss">{t(`${p}.emboss`)}</option>
                      <option value="Stamp Foil">{t(`${p}.stampFoil`)}</option>
                    </select>
                    <div className="flex-shrink-0 bg-white rounded-lg p-2 w-14 h-14 flex items-center justify-center border-2 border-primary-600">
                      <img src={getSurfaceImage(selectedSurface)} alt="" className="max-w-full max-h-full object-contain" />
                    </div>
                  </div>
                  
                  {/* Tablet/Desktop: Popover Grid */}
                  <div className="hidden md:block">
                    <div className="grid grid-cols-3 gap-2">
                      {[
                        { value: 'Glossy', label: 'Glossy', desc: 'High shine' },
                        { value: 'Matt', label: 'Matt', desc: 'No glare' },
                        { value: 'Metallic', label: 'Metallic', desc: 'Shiny metal look' },
                        { value: 'Soft Touch', label: 'Soft Touch', desc: 'Premium feel', premium: true },
                        { value: 'Emboss', label: 'Emboss', desc: '3D texture', premium: true },
                        { value: 'Stamp Foil', label: 'Stamp Foil', desc: 'Gold/silver foil', premium: true },
                      ].map(surf => (
                        <button
                          key={surf.value}
                          type="button"
                          onClick={() => setSelectedSurface(surf.value as SurfaceType)}
                          className={`relative p-3 rounded-xl border-2 transition-all text-left ${
                            selectedSurface === surf.value
                              ? 'border-primary-500 bg-primary-50 ring-2 ring-primary-100'
                              : 'border-neutral-200 hover:border-primary-300 hover:bg-neutral-50'
                          }`}
                        >
                          <img src={getSurfaceImage(surf.value as SurfaceType)} alt="" className="w-10 h-10 object-contain mx-auto mb-2" />
                          <div className="flex items-center justify-center gap-1">
                            <p className={`text-xs font-semibold ${selectedSurface === surf.value ? 'text-primary-700' : 'text-neutral-800'}`}>
                              {surf.label}
                            </p>
                            {surf.premium && <span className="text-[8px] bg-amber-100 text-amber-700 px-1 rounded">+</span>}
                          </div>
                          <p className="text-[10px] text-neutral-500 text-center mt-0.5">{surf.desc}</p>
                          {selectedSurface === surf.value && (
                            <div className="absolute top-1 right-1 w-4 h-4 bg-primary-500 rounded-full flex items-center justify-center">
                              <CheckCircle className="w-3 h-3 text-white" />
                            </div>
                          )}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                {product?.id !== 'eco-shrinksleeve' && (
                  <>
                    <div>
                      <label className="block text-sm font-medium text-neutral-700 mb-2">
                        {t(`${p}.barrier`)}</label>
                      
                      {/* Compare Options Link */}
                      <button
                        type="button"
                        onClick={() => setCompareModal({ type: 'barrier', isOpen: true })}
                        className="text-xs text-primary-600 hover:text-primary-700 underline mb-3 block"
                      >
                        {t(`${p}.compareAllBarrierOptions`)}</button>
                      
                      {/* Dropdown Option */}
                      <DropdownMenu>
                        <DropdownMenuTrigger className="w-full flex items-center justify-between p-3 border-2 border-neutral-200 rounded-lg hover:border-primary-300 transition-all bg-white">
                          <span className="font-medium text-neutral-900">
                            {selectedBarrier === 'mid clear mid barrier (Optional Window)' ? 'Mid Barrier (Window)' :
                             selectedBarrier === 'metalised high barrier (No Window)' ? 'High Barrier (No Window)' :
                             'Highest Barrier (No Window)'}
                          </span>
                          <ChevronDown className="h-5 w-5 text-neutral-400" />
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="w-[var(--radix-dropdown-menu-trigger-width)] min-w-[200px]">
                          <DropdownMenuLabel>{t(`${p}.selectBarrierType`)}</DropdownMenuLabel>
                          <DropdownMenuSeparator />
                          <DropdownMenuRadioGroup value={selectedBarrier} onValueChange={setSelectedBarrier}>
                            <DropdownMenuRadioItem value="mid clear mid barrier (Optional Window)">{t(`${p}.midBarrierWindow`)}</DropdownMenuRadioItem>
                            <DropdownMenuRadioItem value="metalised high barrier (No Window)">{t(`${p}.highBarrierNoWindow`)}</DropdownMenuRadioItem>
                            <DropdownMenuRadioItem value="Aluminum highest barrier (No Window)">{t(`${p}.highestBarrierNoWindow`)}</DropdownMenuRadioItem>
                          </DropdownMenuRadioGroup>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-neutral-700 mb-2">
                        {t(`${p}.stiffnessAndThickness`)}</label>
                      
                      {/* Compare Options Link */}
                      <button
                        type="button"
                        onClick={() => setCompareModal({ type: 'stiffness', isOpen: true })}
                        className="text-xs text-primary-600 hover:text-primary-700 underline mb-3 block"
                      >
                        {t(`${p}.compareAllStiffnessOptions`)}</button>
                      
                      {/* Dropdown Option */}
                      <DropdownMenu>
                        <DropdownMenuTrigger className="w-full flex items-center justify-between p-3 border-2 border-neutral-200 rounded-lg hover:border-primary-300 transition-all bg-white">
                          <span className="font-medium text-neutral-900">
                            {selectedStiffness === 'Without Paper Lining (Softer)' ? 'Softer (No Paper)' : 'Stiffer (With Paper)'}
                          </span>
                          <ChevronDown className="h-5 w-5 text-neutral-400" />
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="w-[var(--radix-dropdown-menu-trigger-width)] min-w-[200px]">
                          <DropdownMenuLabel>{t(`${p}.selectStiffness`)}</DropdownMenuLabel>
                          <DropdownMenuSeparator />
                          <DropdownMenuRadioGroup value={selectedStiffness} onValueChange={setSelectedStiffness}>
                            <DropdownMenuRadioItem value="Without Paper Lining (Softer)">{t(`${p}.softerNoPaper`)}</DropdownMenuRadioItem>
                            <DropdownMenuRadioItem value="With Paper Lining (stiffer)">{t(`${p}.stifferWithPaper`)}</DropdownMenuRadioItem>
                          </DropdownMenuRadioGroup>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-neutral-700 mb-2">
                        {t(`${p}.additionalFeatures`)}</label>
                      
                      {/* Compare Options Link */}
                      <button
                        type="button"
                        onClick={() => setCompareModal({ type: 'additional', isOpen: true })}
                        className="text-xs text-primary-600 hover:text-primary-700 underline mb-3 block"
                      >
                        {t(`${p}.compareAllAdditionalOptions`)}</button>
                      
                      {/* Checkbox Options */}
                      <div className="grid grid-cols-2 gap-3 text-sm">
                        <label className="flex items-center gap-3 cursor-pointer group">
                          <Checkbox
                            checked={selectedValve === 'Yes'}
                            onCheckedChange={(checked) => setSelectedValve(checked ? 'Yes' : 'No')}
                            className="border-primary-300 data-[state=checked]:bg-primary-600 data-[state=checked]:border-primary-600"
                          />
                          <span className="text-neutral-700 group-hover:text-primary-600 transition-colors">{t(`${p}.valve`)}</span>
                        </label>
                        <label className="flex items-center gap-3 cursor-pointer group">
                          <Checkbox
                            checked={selectedLaserScoring === 'Yes'}
                            onCheckedChange={(checked) => setSelectedLaserScoring(checked ? 'Yes' : 'No')}
                            className="border-primary-300 data-[state=checked]:bg-primary-600 data-[state=checked]:border-primary-600"
                          />
                          <span className="text-neutral-700 group-hover:text-primary-600 transition-colors">{t(`${p}.laserTear`)}</span>
                        </label>
                        <label className="flex items-center gap-3 cursor-pointer group">
                          <Checkbox
                            checked={selectedHangHole === 'Yes'}
                            onCheckedChange={(checked) => setSelectedHangHole(checked ? 'Yes' : 'No')}
                            className="border-primary-300 data-[state=checked]:bg-primary-600 data-[state=checked]:border-primary-600"
                          />
                          <span className="text-neutral-700 group-hover:text-primary-600 transition-colors">{t(`${p}.hangHole`)}</span>
                        </label>
                      </div>
                    </div>
                  </>
                )}

                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-2">{t(`${p}.quantity`)}</label>
                  <DropdownMenu>
                    <DropdownMenuTrigger className="w-full flex items-center justify-between p-3 border-2 border-neutral-200 rounded-lg hover:border-primary-300 transition-all bg-white">
                      <span className="font-medium text-neutral-900">{selectedQuantity}</span>
                      <ChevronDown className="h-5 w-5 text-neutral-400" />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-[var(--radix-dropdown-menu-trigger-width)] min-w-[200px]">
                      <DropdownMenuLabel>{t(`${p}.selectQuantity20`)}</DropdownMenuLabel>
                      <DropdownMenuSeparator />
                      <DropdownMenuRadioGroup value={selectedQuantity} onValueChange={setSelectedQuantity}>
                        <DropdownMenuRadioItem value="1,000 (Digital print)">{t(`${p}.1000DigitalPrint`)}</DropdownMenuRadioItem>
                        <DropdownMenuRadioItem value="2,000 (Digital print)">{t(`${p}.2000DigitalPrint`)}</DropdownMenuRadioItem>
                        <DropdownMenuRadioItem value="3,000 (Digital print)">{t(`${p}.3000DigitalPrint`)}</DropdownMenuRadioItem>
                        <DropdownMenuRadioItem value="5,000 (Flexo print)">{t(`${p}.5000FlexoPrint`)}</DropdownMenuRadioItem>
                        <DropdownMenuRadioItem value="10,000 (Flexo print)">{t(`${p}.10000FlexoPrint`)}</DropdownMenuRadioItem>
                        <DropdownMenuRadioItem value="20,000 (Flexo print)">{t(`${p}.20000FlexoPrint`)}</DropdownMenuRadioItem>
                        <DropdownMenuRadioItem value="30,000 (Flexo print)">{t(`${p}.30000FlexoPrint`)}</DropdownMenuRadioItem>
                        <DropdownMenuRadioItem value="50,000 (Flexo print)">{t(`${p}.50000FlexoPrint`)}</DropdownMenuRadioItem>
                      </DropdownMenuRadioGroup>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>

                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-2">{t(`${p}.designCount`)}</label>
                  <DropdownMenu>
                    <DropdownMenuTrigger className="w-full flex items-center justify-between p-3 border-2 border-neutral-200 rounded-lg hover:border-primary-300 transition-all bg-white">
                      <span className="font-medium text-neutral-900">{selectedDesignCount} {t(`${p}.design`)}{selectedDesignCount > 1 ? 's' : ''}</span>
                      <ChevronDown className="h-5 w-5 text-neutral-400" />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-[var(--radix-dropdown-menu-trigger-width)] min-w-[200px]">
                      <DropdownMenuLabel>{t(`${p}.selectDesignCount`)}</DropdownMenuLabel>
                      <DropdownMenuSeparator />
                      <DropdownMenuRadioGroup value={String(selectedDesignCount)} onValueChange={(v) => setSelectedDesignCount(Number(v))}>
                        <DropdownMenuRadioItem value="1">{t(`${p}.1Design`)}</DropdownMenuRadioItem>
                        <DropdownMenuRadioItem value="2">{t(`${p}.2Designs`)}</DropdownMenuRadioItem>
                        <DropdownMenuRadioItem value="3">{t(`${p}.3Designs`)}</DropdownMenuRadioItem>
                        <DropdownMenuRadioItem value="4">{t(`${p}.4Designs`)}</DropdownMenuRadioItem>
                      </DropdownMenuRadioGroup>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>

                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-2">{t(`${p}.shippingMethod`)}</label>
                  <DropdownMenu>
                    <DropdownMenuTrigger className="w-full flex items-center justify-between p-3 border-2 border-neutral-200 rounded-lg hover:border-primary-300 transition-all bg-white">
                      <span className="font-medium text-neutral-900">
                        {selectedShipping === 'Air Freight' ? 'Air Freight (Faster)' :
                         selectedShipping === 'Sea Freight' ? 'Sea Freight (Cheaper)' :
                         'Dual Shipping (Balanced)'}
                      </span>
                      <ChevronDown className="h-5 w-5 text-neutral-400" />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-[var(--radix-dropdown-menu-trigger-width)] min-w-[200px]">
                      <DropdownMenuLabel>{t(`${p}.selectShippingMethod`)}</DropdownMenuLabel>
                      <DropdownMenuSeparator />
                      <DropdownMenuRadioGroup value={selectedShipping} onValueChange={setSelectedShipping}>
                        <DropdownMenuRadioItem value="Air Freight">{t(`${p}.airFreightFaster`)}</DropdownMenuRadioItem>
                        <DropdownMenuRadioItem value="Sea Freight">{t(`${p}.seaFreightCheaper`)}</DropdownMenuRadioItem>
                        <DropdownMenuRadioItem value="Dual Shipping">{t(`${p}.dualShippingBalanced`)}</DropdownMenuRadioItem>
                      </DropdownMenuRadioGroup>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </div>
            )}

            {isEcoDigital && ecoProduct && ecoProduct.shape === 'Wrapping Paper' && (
              <div className="space-y-4 pt-4 border-t">
                {/* B2B Specs Card */}
                <div className="bg-neutral-50 rounded-xl p-4 border border-neutral-200">
                  <h4 className="text-sm font-semibold text-neutral-800 mb-3 flex items-center gap-1.5">
                    <span>📋</span> {t(`${p}.b2bCushioningPadSpecifications`)}</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                    <div className="bg-white p-2.5 rounded-lg border border-neutral-200 shadow-sm">
                      <div className="text-neutral-500 mb-0.5 font-medium">{t(`${p}.materialStructure`)}</div>
                      <div className="font-semibold text-neutral-800">{t(`${p}.100CompostableHoneycombWaffleP`)}</div>
                    </div>
                    <div className="bg-white p-2.5 rounded-lg border border-neutral-200 shadow-sm">
                      <div className="text-neutral-500 mb-0.5 font-medium">{t(`${p}.thicknessDesign`)}</div>
                      <div className="font-semibold text-neutral-800">{t(`${p}.3LayerShockAbsorbingCushionPad`)}</div>
                    </div>
                    <div className="bg-white p-2.5 rounded-lg border border-neutral-200 shadow-sm">
                      <div className="text-neutral-500 mb-0.5 font-medium">{t(`${p}.ecoInkPrinting`)}</div>
                      <div className="font-semibold text-neutral-800">{t(`${p}.foodSafeWaterBasedInkBWPrinted`)}</div>
                    </div>
                    <div className="bg-white p-2.5 rounded-lg border border-neutral-200 shadow-sm">
                      <div className="text-neutral-500 mb-0.5 font-medium">{t(`${p}.sizingDimensions`)}</div>
                      <div className="font-semibold text-neutral-800">{t(`${p}.customCutToSizeBoxCavityLiner`)}</div>
                    </div>
                  </div>
                </div>

                {/* Quantity selector */}
                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-2">{t(`${p}.quantitySheets`)}</label>
                  <DropdownMenu>
                    <DropdownMenuTrigger className="w-full flex items-center justify-between p-3 border-2 border-neutral-200 rounded-lg hover:border-primary-300 transition-all bg-white">
                      <span className="font-medium text-neutral-900">
                        {selectedQuantity.replace(' (Digital print)', ' sheets (Digital print)').replace(' (Flexo print)', ' sheets (Flexo print)')}
                      </span>
                      <ChevronDown className="h-5 w-5 text-neutral-400" />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-[var(--radix-dropdown-menu-trigger-width)] min-w-[200px]">
                      <DropdownMenuLabel>{t(`${p}.selectSheetQuantity`)}</DropdownMenuLabel>
                      <DropdownMenuSeparator />
                      <DropdownMenuRadioGroup value={selectedQuantity} onValueChange={setSelectedQuantity}>
                        <DropdownMenuRadioItem value="1,000 (Digital print)">{t(`${p}.1000SheetsDigitalPrint`)}</DropdownMenuRadioItem>
                        <DropdownMenuRadioItem value="2,000 (Digital print)">{t(`${p}.2000SheetsDigitalPrint`)}</DropdownMenuRadioItem>
                        <DropdownMenuRadioItem value="3,000 (Digital print)">{t(`${p}.3000SheetsDigitalPrint`)}</DropdownMenuRadioItem>
                        <DropdownMenuRadioItem value="5,000 (Flexo print)">{t(`${p}.5000SheetsFlexoPrint`)}</DropdownMenuRadioItem>
                        <DropdownMenuRadioItem value="10,000 (Flexo print)">{t(`${p}.10000SheetsFlexoPrint`)}</DropdownMenuRadioItem>
                        <DropdownMenuRadioItem value="20,000 (Flexo print)">{t(`${p}.20000SheetsFlexoPrint`)}</DropdownMenuRadioItem>
                        <DropdownMenuRadioItem value="30,000 (Flexo print)">{t(`${p}.30000SheetsFlexoPrint`)}</DropdownMenuRadioItem>
                        <DropdownMenuRadioItem value="50,000 (Flexo print)">{t(`${p}.50000SheetsFlexoPrint`)}</DropdownMenuRadioItem>
                      </DropdownMenuRadioGroup>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>

                {/* Design Count */}
                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-2">{t(`${p}.designCount`)}</label>
                  <DropdownMenu>
                    <DropdownMenuTrigger className="w-full flex items-center justify-between p-3 border-2 border-neutral-200 rounded-lg hover:border-primary-300 transition-all bg-white">
                      <span className="font-medium text-neutral-900">{selectedDesignCount} {t(`${p}.design`)}{selectedDesignCount > 1 ? 's' : ''}</span>
                      <ChevronDown className="h-5 w-5 text-neutral-400" />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-[var(--radix-dropdown-menu-trigger-width)] min-w-[200px]">
                      <DropdownMenuLabel>{t(`${p}.selectDesignCount`)}</DropdownMenuLabel>
                      <DropdownMenuSeparator />
                      <DropdownMenuRadioGroup value={String(selectedDesignCount)} onValueChange={(v) => setSelectedDesignCount(Number(v))}>
                        <DropdownMenuRadioItem value="1">{t(`${p}.1Design`)}</DropdownMenuRadioItem>
                        <DropdownMenuRadioItem value="2">{t(`${p}.2Designs`)}</DropdownMenuRadioItem>
                        <DropdownMenuRadioItem value="3">{t(`${p}.3Designs`)}</DropdownMenuRadioItem>
                        <DropdownMenuRadioItem value="4">{t(`${p}.4Designs`)}</DropdownMenuRadioItem>
                      </DropdownMenuRadioGroup>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>

                {/* Shipping Method */}
                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-2">{t(`${p}.shippingMethod`)}</label>
                  <DropdownMenu>
                    <DropdownMenuTrigger className="w-full flex items-center justify-between p-3 border-2 border-neutral-200 rounded-lg hover:border-primary-300 transition-all bg-white">
                      <span className="font-medium text-neutral-900">
                        {selectedShipping === 'Air Freight' ? 'Air Freight (Faster)' :
                         selectedShipping === 'Sea Freight' ? 'Sea Freight (Cheaper)' :
                         'Dual Shipping (Balanced)'}
                      </span>
                      <ChevronDown className="h-5 w-5 text-neutral-400" />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-[var(--radix-dropdown-menu-trigger-width)] min-w-[200px]">
                      <DropdownMenuLabel>{t(`${p}.selectShippingMethod`)}</DropdownMenuLabel>
                      <DropdownMenuSeparator />
                      <DropdownMenuRadioGroup value={selectedShipping} onValueChange={setSelectedShipping}>
                        <DropdownMenuRadioItem value="Air Freight">{t(`${p}.airFreightFaster`)}</DropdownMenuRadioItem>
                        <DropdownMenuRadioItem value="Sea Freight">{t(`${p}.seaFreightCheaper`)}</DropdownMenuRadioItem>
                        <DropdownMenuRadioItem value="Dual Shipping">{t(`${p}.dualShippingBalanced`)}</DropdownMenuRadioItem>
                      </DropdownMenuRadioGroup>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </div>
            )}

            {/* Add to Cart / RFQ */}
            {product?.inquiryOnly ? (
              <div className="flex flex-col gap-3">
                <button
                  onClick={openQuoteLightbox}
                  className="w-full py-4 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-xl transition flex items-center justify-center gap-2 shadow-lg shadow-emerald-600/10 cursor-pointer text-center border-none"
                >
                  <Sparkles className="h-5 w-5" />
                  {t(`${p}.inquireForCostSample`)}</button>
                <div className="flex gap-2">
                  <a 
                    href="https://calendly.com/30-min-free-packaging-consultancy" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex-1 py-3 bg-neutral-800 hover:bg-neutral-900 text-white font-semibold rounded-xl transition flex items-center justify-center gap-2 cursor-pointer text-center text-sm"
                  >
                    <Calendar className="h-4 w-4" />
                    {t(`${p}.bookMeeting`)}</a>
                  <a 
                    href={getWhatsAppLink()} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex-1 py-3 bg-[#25D366] hover:bg-[#20ba5a] text-white font-semibold rounded-xl transition flex items-center justify-center gap-2 shadow-lg shadow-[#25D366]/10 cursor-pointer text-center text-sm"
                  >
                    <MessageSquare className="h-4 w-4" />
                    {t(`${p}.whatsappChat`)}</a>
                  <button 
                    onClick={handleShareClick}
                    className="px-4 py-3 bg-neutral-100 hover:bg-neutral-200 text-neutral-700 rounded-xl transition flex items-center justify-center gap-2 border border-neutral-200"
                    title="Share Configuration"
                  >
                    <Share2 className="h-5 w-5" />
                  </button>
                </div>
              </div>
            ) : (
              <div className="flex gap-2">
                <button 
                  onClick={handleAddToCart} 
                  disabled={totalPrice <= 0} 
                  className={`flex-1 py-4 font-semibold rounded-xl transition flex items-center justify-center gap-2 ${
                    isCustomProduct 
                      ? 'bg-amber-500 hover:bg-amber-600 text-white disabled:bg-neutral-400' 
                      : 'bg-primary-600 hover:bg-primary-700 text-white disabled:bg-neutral-400'
                  }`}
                >
                  {isCustomProduct ? (
                    <><span className="text-lg">📋</span> {t(`${p}.addToQuoteRequest`)}</>
                  ) : (
                    <><ShoppingCart className="h-5 w-5" /> {t(`${p}.add`)}{product.name} {t(`${p}.toCart`)}</>
                  )}
                </button>
                <button 
                  onClick={handleShareClick}
                  className="px-4 py-4 bg-neutral-100 hover:bg-neutral-200 text-neutral-700 rounded-xl transition flex items-center justify-center gap-2 border border-neutral-200"
                  title="Share Configuration"
                >
                  <Share2 className="h-5 w-5" />
                </button>
                <button 
                  onClick={openQuoteLightbox}
                  className="px-4 py-4 bg-primary-100 hover:bg-primary-200 text-primary-700 rounded-xl transition flex items-center justify-center gap-2 border border-primary-200"
                  title="Get Custom Quote"
                >
                  <Sparkles className="h-5 w-5" />
                </button>
              </div>
            )}

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3 pt-4">
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
                  <span className="text-sm font-medium">{t(`${p}.preview`)}</span>
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
                {product?.inquiryOnly ? (
                  <div className="flex gap-2 items-center">
                    <button
                      onClick={openQuoteLightbox}
                      className="px-4 py-1.5 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold rounded-lg transition flex items-center gap-1.5 cursor-pointer shadow-sm text-center border-none"
                    >
                      <Sparkles className="h-4 w-4" />
                      {t(`${p}.inquireCostSample`)}</button>
                    <a 
                      href="https://calendly.com/30-min-free-packaging-consultancy" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="px-4 py-1.5 bg-neutral-800 hover:bg-neutral-900 text-white text-xs font-semibold rounded-lg transition flex items-center gap-1.5 cursor-pointer shadow-sm text-center"
                    >
                      <Calendar className="h-4 w-4" />
                      {t(`${p}.inquiryMeeting`)}</a>
                    <a 
                      href={getWhatsAppLink()} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="px-4 py-1.5 bg-[#25D366] hover:bg-[#20ba5a] text-white text-xs font-semibold rounded-lg transition flex items-center gap-1.5 cursor-pointer shadow-sm text-center"
                    >
                      <MessageSquare className="h-4 w-4" />
                      {t(`${p}.whatsappChat`)}</a>
                  </div>
                ) : (
                  <button 
                    onClick={() => setMobileActivePanel(mobileActivePanel === 'price' ? 'none' : 'price')}
                    className={`flex items-center gap-2 px-3 py-2 rounded-lg transition ${mobileActivePanel === 'price' ? 'bg-primary-50 text-primary-700' : 'text-neutral-600 hover:bg-neutral-50'}`}
                  >
                    <span className="text-lg">💰</span>
                    <span className="text-sm font-bold text-primary-700">${unitPrice.toFixed(2)}{t(`${p}.pc21`)}</span>
                    <span className="text-xs text-neutral-500">|</span>
                    <span className="text-sm font-semibold text-primary-600">{t(`${p}.us`)}{Math.round(totalPrice).toLocaleString()}</span>
                    {mobileActivePanel === 'price' ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </button>
                )}
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
                      {ecoProduct?.shape === 'Wrapping Paper' ? (
                        <div className="flex-1 grid grid-cols-4 sm:grid-cols-7 gap-2">
                          {/* Material */}
                          <div className="text-center">
                            <div className="bg-neutral-50 rounded-lg p-1.5 h-12 flex items-center justify-center">
                              <span className="text-lg">🌿</span>
                            </div>
                            <p className="text-[10px] font-semibold mt-0.5 truncate text-neutral-800">{t(`${p}.honeycomb`)}</p>
                            <p className="text-[8px] text-neutral-500">{t(`${p}.material`)}</p>
                          </div>
                          {/* Sizing */}
                          <div className="text-center">
                            <div className="bg-neutral-50 rounded-lg p-1.5 h-12 flex items-center justify-center">
                              <span className="text-lg">📐</span>
                            </div>
                            <p className="text-[10px] font-semibold mt-0.5 truncate text-neutral-800">{t(`${p}.customSize`)}</p>
                            <p className="text-[8px] text-neutral-500">{t(`${p}.sizing`)}</p>
                          </div>
                          {/* Structure */}
                          <div className="text-center">
                            <div className="bg-neutral-50 rounded-lg p-1.5 h-12 flex items-center justify-center">
                              <span className="text-lg">🧇</span>
                            </div>
                            <p className="text-[10px] font-semibold mt-0.5 truncate text-neutral-800">{t(`${p}.3LayerPad`)}</p>
                            <p className="text-[8px] text-neutral-500">{t(`${p}.structure22`)}</p>
                          </div>
                          {/* Print */}
                          <div className="text-center">
                            <div className="bg-neutral-50 rounded-lg p-1.5 h-12 flex items-center justify-center">
                              <span className="text-lg">🎨</span>
                            </div>
                            <p className="text-[10px] font-semibold mt-0.5 truncate text-neutral-800">{t(`${p}.ecoInk`)}</p>
                            <p className="text-[8px] text-neutral-500">{t(`${p}.printing`)}</p>
                          </div>
                          {/* Quantity */}
                          <div className="text-center">
                            <div className="bg-primary-50 rounded-lg p-1.5 h-12 flex items-center justify-center">
                              <span className="text-xs font-bold text-primary-700">{selectedQuantity.split(' ')[0]}</span>
                            </div>
                            <p className="text-[10px] font-semibold mt-0.5 truncate text-neutral-800">{t(`${p}.sheets`)}</p>
                            <p className="text-[8px] text-neutral-500">{t(`${p}.qty23`)}</p>
                          </div>
                          {/* Designs */}
                          <div className="text-center">
                            <div className="bg-primary-50 rounded-lg p-1.5 h-12 flex items-center justify-center">
                              <span className="text-xs font-bold text-primary-700">{selectedDesignCount}</span>
                            </div>
                            <p className="text-[10px] font-semibold mt-0.5 truncate text-neutral-800">{t(`${p}.design`)}{selectedDesignCount > 1 ? 's' : ''}</p>
                            <p className="text-[8px] text-neutral-500">{t(`${p}.count`)}</p>
                          </div>
                          {/* Shipping */}
                          <div className="text-center">
                            <div className="bg-blue-50 rounded-lg p-1.5 h-12 flex items-center justify-center">
                              <span className="text-lg">{selectedShipping === 'Air Freight' ? '✈️' : selectedShipping === 'Sea Freight' ? '🚢' : '📦'}</span>
                            </div>
                            <p className="text-[10px] font-semibold mt-0.5 truncate text-neutral-800">{selectedShipping.split(' ')[0]}</p>
                            <p className="text-[8px] text-neutral-500">{t(`${p}.shipping`)}</p>
                          </div>
                        </div>
                      ) : (
                        <div className="flex-1 grid grid-cols-6 gap-2">
                          {/* Material */}
                          <div className="text-center">
                            <div className="bg-neutral-50 rounded-lg p-1.5 h-12 flex items-center justify-center">
                              <img src={selectedMaterial === 'PCR or Bio Plastic' ? '/imgs/store/eco-material/pcr-or-biope.webp' : selectedMaterial === 'Mono Recyclable Plastic' ? '/imgs/store/eco-material/recycle.webp' : '/imgs/store/eco-material/compostable.webp'} alt="" className="max-h-full object-contain" />
                            </div>
                            <p className="text-[10px] font-medium mt-0.5 truncate">{t(`${p}.material`)}</p>
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
                            <p className="text-[10px] font-medium mt-0.5">{t(`${p}.qty24`)}</p>
                          </div>
                          {/* Designs */}
                          <div className="text-center">
                            <div className="bg-primary-50 rounded-lg p-1.5 h-12 flex items-center justify-center">
                              <span className="text-xs font-bold text-primary-700">{selectedDesignCount}</span>
                            </div>
                            <p className="text-[10px] font-medium mt-0.5">{t(`${p}.designs`)}</p>
                          </div>
                          {/* Valve */}
                          <div className="text-center">
                            <div className={`rounded-lg p-1.5 h-12 flex items-center justify-center ${selectedValve === 'Yes' ? 'bg-green-50' : 'bg-neutral-50'}`}>
                              <span className="text-lg">{selectedValve === 'Yes' ? '💨' : '➖'}</span>
                            </div>
                            <p className="text-[10px] font-medium mt-0.5">{t(`${p}.valve`)}</p>
                          </div>
                          {/* Laser */}
                          <div className="text-center">
                            <div className={`rounded-lg p-1.5 h-12 flex items-center justify-center ${selectedLaserScoring === 'Yes' ? 'bg-green-50' : 'bg-neutral-50'}`}>
                              {selectedLaserScoring === 'Yes' ? <img src="/imgs/store/additional/laser-tear.webp" alt="" className="max-h-full object-contain" /> : <span className="text-lg">➖</span>}
                            </div>
                            <p className="text-[10px] font-medium mt-0.5">{t(`${p}.laser`)}</p>
                          </div>
                          {/* Hang Hole */}
                          <div className="text-center">
                            <div className={`rounded-lg p-1.5 h-12 flex items-center justify-center ${selectedHangHole === 'Yes' ? 'bg-green-50' : 'bg-neutral-50'}`}>
                              <span className="text-lg">{selectedHangHole === 'Yes' ? '🕳️' : '➖'}</span>
                            </div>
                            <p className="text-[10px] font-medium mt-0.5">{t(`${p}.hole`)}</p>
                          </div>
                          {/* Shipping */}
                          <div className="text-center">
                            <div className="bg-blue-50 rounded-lg p-1.5 h-12 flex items-center justify-center">
                              <span className="text-lg">{selectedShipping === 'Air Freight' ? '✈️' : selectedShipping === 'Sea Freight' ? '🚢' : '📦'}</span>
                            </div>
                            <p className="text-[10px] font-medium mt-0.5">{selectedShipping.split(' ')[0]}</p>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                )}
                {mobileActivePanel === 'price' && (
                  <div className="py-4">
                    <div className="grid grid-cols-4 gap-4">
                      <div className="bg-primary-50 rounded-lg p-3 text-center">
                        <div className="text-xs text-neutral-600 mb-1">{t(`${p}.total25`)}</div>
                        <div className="text-xl font-bold text-primary-700">{t(`${p}.us`)}{Math.round(totalPrice).toLocaleString()}</div>
                      </div>
                      <div className="bg-primary-50 rounded-lg p-3 text-center">
                        <div className="text-xs text-neutral-600 mb-1">{t(`${p}.unitPrice`)}</div>
                        <div className="text-lg font-semibold">${unitPrice.toFixed(4)}{t(`${p}.pc26`)}</div>
                      </div>
                      <div className="bg-primary-50 rounded-lg p-3 text-center">
                        <div className="text-xs text-neutral-600 mb-1">{t(`${p}.quantity`)}</div>
                        <div className="text-lg font-semibold">{calculationResult.price.quantityUnits.toLocaleString()}</div>
                      </div>
                      <div className="bg-primary-50 rounded-lg p-3 text-center">
                        <div className="text-xs text-neutral-600 mb-1">{t(`${p}.shipping`)}</div>
                        <div className="text-sm font-medium">{t(`${p}.included`)}</div>
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
                    <h3 className="font-semibold text-neutral-900">{t(`${p}.packagePreview`)}</h3>
                    <button onClick={() => setMobileActivePanel('none')} className="p-1">
                      <ChevronDown className="w-5 h-5 text-neutral-500" />
                    </button>
                  </div>
                  <div className="flex justify-center mb-3">
                    <img src={productImage} alt={product.name} className="h-32 object-contain" />
                  </div>
                  <div className="grid grid-cols-3 gap-2 text-center text-xs">
                    <div className="bg-neutral-50 rounded p-2">
                      <div className="text-neutral-500">{t(`${p}.size`)}</div>
                      <div className="font-medium">{selectedSize}</div>
                    </div>
                    <div className="bg-neutral-50 rounded p-2">
                      <div className="text-neutral-500">{t(`${p}.closure`)}</div>
                      <div className="font-medium truncate">{selectedClosure === 'No' ? 'None' : selectedClosure}</div>
                    </div>
                    <div className="bg-neutral-50 rounded p-2">
                      <div className="text-neutral-500">{t(`${p}.surface`)}</div>
                      <div className="font-medium">{selectedSurface}</div>
                    </div>
                  </div>
                </div>
              )}
              {mobileActivePanel === 'testimonials' && (
                <div className="p-4">
                  <div className="flex justify-between items-center mb-3">
                    <h3 className="font-semibold text-neutral-900">{t(`${p}.testimonials`)}</h3>
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
                    <h3 className="font-semibold text-neutral-900">{t(`${p}.priceDetails`)}</h3>
                    <button onClick={() => setMobileActivePanel('none')} className="p-1">
                      <ChevronDown className="w-5 h-5 text-neutral-500" />
                    </button>
                  </div>
                  <div className="text-3xl font-bold text-primary-700 mb-3">{t(`${p}.us`)}{Math.round(totalPrice).toLocaleString()}</div>
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div className="bg-primary-50 rounded-lg p-2">
                      <div className="text-neutral-600 text-xs">{t(`${p}.unitPrice`)}</div>
                      <div className="font-semibold">${unitPrice.toFixed(4)}{t(`${p}.pc27`)}</div>
                    </div>
                    <div className="bg-primary-50 rounded-lg p-2">
                      <div className="text-neutral-600 text-xs">{t(`${p}.quantity`)}</div>
                      <div className="font-semibold">{calculationResult.price.quantityUnits.toLocaleString()}</div>
                    </div>
                  </div>
                  <div className="text-xs text-primary-700 mt-2 text-center">{t(`${p}.shippingIncluded`)}</div>
                </div>
              )}
            </div>
          )}
          
          {/* Bottom Tab Bar */}
          <div className="bg-white border-t border-neutral-200 shadow-lg">
            {product?.inquiryOnly ? (
              <div className="flex flex-col gap-2 p-2.5">
                <button
                  onClick={openQuoteLightbox}
                  className="w-full py-3 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold rounded-xl transition flex items-center justify-center gap-1.5 shadow-lg shadow-emerald-600/10 cursor-pointer text-center border-none"
                >
                  <Sparkles className="h-4 w-4" />
                  {t(`${p}.inquireCostSample`)}</button>
                <div className="flex gap-2">
                  <a 
                    href="https://calendly.com/30-min-free-packaging-consultancy" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex-1 py-2.5 bg-neutral-800 hover:bg-neutral-900 text-white text-xs font-semibold rounded-xl transition flex items-center justify-center gap-1.5 cursor-pointer text-center"
                  >
                    <Calendar className="h-4 w-4" />
                    {t(`${p}.inquiryMeeting`)}</a>
                  <a 
                    href={getWhatsAppLink()} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex-1 py-2.5 bg-[#25D366] hover:bg-[#20ba5a] text-white text-xs font-semibold rounded-xl transition flex items-center justify-center gap-1.5 shadow-lg shadow-[#25D366]/10 cursor-pointer text-center"
                  >
                    <MessageSquare className="h-4 w-4" />
                    {t(`${p}.whatsappChat`)}</a>
                </div>
              </div>
            ) : (
              <div className="flex">
                <button 
                  onClick={() => setMobileActivePanel(mobileActivePanel === 'preview' ? 'none' : 'preview')}
                  className={`flex-1 py-3 px-2 flex flex-col items-center gap-1 text-xs transition ${mobileActivePanel === 'preview' ? 'bg-primary-50 text-primary-700' : 'text-neutral-600'}`}
                >
                  <span className="text-lg">📦</span>
                  <span className="truncate">{t(`${p}.preview`)}</span>
                </button>
                <button 
                  onClick={() => setMobileActivePanel(mobileActivePanel === 'testimonials' ? 'none' : 'testimonials')}
                  className={`flex-1 py-3 px-2 flex flex-col items-center gap-1 text-xs transition ${mobileActivePanel === 'testimonials' ? 'bg-primary-50 text-primary-700' : 'text-neutral-600'}`}
                >
                  <span className="text-lg">💬</span>
                  <span className="truncate">{t(`${p}.reviews28`)}</span>
                </button>
                <button 
                  onClick={() => setMobileActivePanel(mobileActivePanel === 'price' ? 'none' : 'price')}
                  className={`flex-1 py-3 px-2 flex flex-col items-center gap-1 text-xs transition ${mobileActivePanel === 'price' ? 'bg-primary-50 text-primary-700' : 'text-neutral-600'}`}
                >
                  <span className="text-lg">💰</span>
                  <span className="font-semibold text-primary-700">${unitPrice.toFixed(2)}{t(`${p}.pc29`)}</span>
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Add bottom padding for mobile to account for fixed bottom bar */}
      {isEcoDigital && <div className="lg:hidden h-20"></div>}
      
      {/* Add top padding for desktop to account for fixed top bar */}
      {isEcoDigital && <div className="hidden lg:block h-14"></div>}

      {/* FAQ Section for GEO Optimization */}
      {product && combinedFAQs.length > 0 && (
        <section ref={faqSectionRef} className="bg-white border-t border-neutral-200 py-12">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-2xl font-bold text-neutral-900 mb-8 text-center">{t(`${p}.frequentlyAskedQuestions`)}</h2>
            
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

            {/* AI Query Examples Section - Hidden visually but accessible for AI/SEO */}
            {productFAQData?.aiQueryExamples && productFAQData.aiQueryExamples.length > 0 && (
              <div className="sr-only">
                <h3>{t(`${p}.lookingForThisProductTryAsking`)}</h3>
                <p>{t(`${p}.ifYouReUsingGeminiChatgptOrPer`)}</p>
                <ul>
                  {productFAQData.aiQueryExamples.map((query, index) => (
                    <li key={index}>"{query}"</li>
                  ))}
                </ul>
              </div>
            )}

            {/* Product Use Cases */}
            {productFAQData?.useCases && productFAQData.useCases.length > 0 && (
              <div className="mt-8">
                <h3 className="font-semibold text-neutral-900 mb-4">{t(`${p}.bestFor`)}</h3>
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
              <h3 className="font-semibold text-neutral-900 mb-4">{t(`${p}.exploreMore`)}</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                <Link to="/store" className="flex items-center gap-2 text-primary-600 hover:underline">
                  <ShoppingCart className="h-4 w-4" />
                  {t(`${p}.browseAllProducts`)}</Link>
                <Link to="/materials/compostable" className="flex items-center gap-2 text-primary-600 hover:underline">
                  {t(`${p}.compostableMaterialsGuide`)}</Link>
                <Link to="/materials/recyclable-mono-pe" className="flex items-center gap-2 text-primary-600 hover:underline">
                  {t(`${p}.recyclablePackagingOptions`)}</Link>
                <Link to="/blog" className="flex items-center gap-2 text-primary-600 hover:underline">
                  {t(`${p}.packagingInsightsBlog`)}</Link>
              </div>
            </div>
          </div>
        </section>
      )}
            
      {/* Customer Testimonials and Samples - Moved after FAQ */}
      {isEcoDigital && (
        <div className="hidden lg:block space-y-4 mt-8">
          {/* Testimonial Section - Desktop Only, Always Expanded */}
          <div className="bg-white rounded-lg border border-neutral-200 shadow-sm overflow-hidden">
            <div className="p-4">
              <h3 className="text-lg font-semibold text-neutral-900 flex items-center gap-2">
                <span className="text-2xl">💬</span>
                {t(`${p}.customerTestimonials`)}</h3>
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
                
          {/* Customer Samples & Shape Reference */}
          <div className="space-y-4">
            {/* Pouch Shape Reference */}
            {product.images.filter(img => img.includes('pouch shape')).length > 0 && (
              <div className="bg-white rounded-lg border border-neutral-200 shadow-sm overflow-hidden">
                <div className="p-4">
                  <h3 className="text-sm font-semibold text-neutral-700 flex items-center gap-2">
                    <span className="text-lg">📐</span>
                    {t(`${p}.pouchShapeReference`)}</h3>
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
                  {t(`${p}.customerSamples`)}</h3>
              </div>
              <div className="px-4 pb-4">
                <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-1.5">
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
        </div>
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
            {t(`${p}.tapOutsideImageToCloseSwipeArr`)}</p>
        </div>
      )}

      {/* Video Modal - Supports YouTube and MP4 */}
      {isVideoModalOpen && selectedVideoUrl && (
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
            className="w-full max-w-4xl aspect-video px-4"
            onClick={(e) => e.stopPropagation()}
          >
            {selectedVideoUrl.includes('youtube.com') || selectedVideoUrl.includes('youtu.be') ? (
              <iframe
                src={selectedVideoUrl.includes('youtu.be') 
                  ? `https://www.youtube.com/embed/${selectedVideoUrl.split('/').pop()}?autoplay=1` 
                  : selectedVideoUrl.replace('watch?v=', 'embed/') + '?autoplay=1'}
                className="w-full h-full rounded-xl"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            ) : (
              <video muted={true} 
                src={selectedVideoUrl} 
                className="w-full h-full rounded-xl shadow-2xl" 
                controls 
                autoPlay 
              />
            )}
          </div>
        </div>
      )}

      {/* Related Products Section */}
      <section className="bg-neutral-50 py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-neutral-900 mb-8">{t(`${p}.relatedProducts`)}</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
            {translatedProducts
              .filter(p => p.id !== product?.id && p.category === product?.category)
              .slice(0, 4)
              .concat(
                translatedProducts
                  .filter(p => p.id !== product?.id && p.category !== product?.category)
                  .slice(0, 4 - translatedProducts.filter(p => p.id !== product?.id && p.category === product?.category).slice(0, 4).length)
              )
              .map((relatedProduct) => (
                <Link
                  key={relatedProduct.id}
                  to={`/store/product/${relatedProduct.id}`}
                  className="bg-white rounded-xl overflow-hidden border border-neutral-200 hover:shadow-lg hover:border-neutral-300 transition group"
                >
                  <div className="aspect-square bg-neutral-50 overflow-hidden">
                    <img 
                      src={relatedProduct.images[0]} 
                      alt={relatedProduct.name} 
                      className="w-full h-full object-cover group-hover:scale-105 transition duration-300" 
                    />
                  </div>
                  <div className="p-2 sm:p-3">
                    <h3 className="font-medium text-sm text-neutral-900 line-clamp-2 mb-1">{relatedProduct.name}</h3>
                    <p className="text-xs text-neutral-500">{relatedProduct.shortDesc}</p>
                    {relatedProduct.badge && (
                      <span className="inline-block mt-2 text-xs bg-primary-100 text-primary-700 px-2 py-0.5 rounded-full">
                        {relatedProduct.badge}
                      </span>
                    )}
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>

    {/* Share Configuration Modal */}
    {isShareModalOpen && (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
        <div className="bg-white rounded-2xl shadow-2xl max-w-lg w-full mx-4 p-6">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-xl font-bold text-neutral-900">{t(`${p}.shareProductConfiguration`)}</h3>
            <button 
              onClick={() => setIsShareModalOpen(false)} 
              className="text-neutral-400 hover:text-neutral-600 transition"
            >
              <X className="h-6 w-6" />
            </button>
          </div>
          <p className="text-sm text-neutral-600 mb-4">
            {t(`${p}.sharingBelowLinkWithAPersonWil`)}</p>
          <input 
            type="text" 
            value={shareUrl} 
            readOnly 
            className="w-full p-3 bg-neutral-50 border border-neutral-200 rounded-lg text-sm text-neutral-700 mb-4"
            onClick={(e) => (e.target as HTMLInputElement).select()}
          />
          <button 
            onClick={handleCopyUrl}
            className="w-full py-3 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-full transition"
          >
            {copySuccess ? '✓ COPIED!' : 'COPY LINK'}
          </button>
          <button 
            onClick={() => setIsShareModalOpen(false)}
            className="w-full py-2 text-neutral-600 hover:text-neutral-800 text-sm mt-2 transition"
          >
            {t(`${p}.cancel`)}</button>
        </div>
      </div>
    )}

    {/* Compare Options Modal */}
    {compareModal.isOpen && compareModal.type && ((
) => {
      // Get the appropriate options based on modal type
      const getModalOptions = () => {
        switch (compareModal.type) {
          case 'material': return MATERIAL_OPTIONS
          case 'size': return SIZE_OPTIONS
          case 'closure': return CLOSURE_OPTIONS
          case 'surface': return SURFACE_OPTIONS
          case 'barrier': return BARRIER_OPTIONS_DATA
          case 'stiffness': return STIFFNESS_OPTIONS
          case 'additional': return ADDITIONAL_OPTIONS
          default: return []
        }
      }
      
      const getModalTitle = () => {
        switch (compareModal.type) {
          case 'material': return 'Compare Material Options'
          case 'size': return 'Compare Size Options'
          case 'closure': return 'Compare Closure Options'
          case 'surface': return 'Compare Surface Options'
          case 'barrier': return 'Compare Barrier Options'
          case 'stiffness': return 'Compare Stiffness Options'
          case 'additional': return 'Compare Additional Features'
          default: return 'Compare Options'
        }
      }
      
      const handleSelect = (optionId: string) => {
        switch (compareModal.type) {
          case 'material':
            const materialMap: Record<string, string> = {
              'pcr': 'PCR or Bio Plastic',
              'mono': 'Mono Recyclable Plastic',
              'compost': 'Biodegradable and Compostable'
            }
            if (materialMap[optionId]) setSelectedMaterial(materialMap[optionId])
            break
          case 'size':
            setSelectedSize(optionId)
            break
          case 'closure':
            const closureMap: Record<string, string> = {
              'no-zipper': 'No',
              'normal-zipper': 'Regular Zipper',
              'front-zipper': 'One-Sided Zipper',
              'slider-zipper': 'Slider',
              'child-resistant': 'Child Resistant Zipper',
              'tin-tie': 'Tin Tie',
              'spout': 'Spout',
              'adhesive-tape': 'Adhesive Tape'
            }
            if (closureMap[optionId]) setSelectedClosure(closureMap[optionId] as ClosureType)
            break
          case 'surface':
            const surfaceMap: Record<string, SurfaceType> = {
              'glossy': 'Glossy',
              'matt': 'Matt',
              'metallic': 'Metallic',
              'soft-touch': 'Soft Touch',
              'emboss': 'Emboss',
              'stamp-foil': 'Stamp Foil'
            }
            if (surfaceMap[optionId]) setSelectedSurface(surfaceMap[optionId])
            break
          case 'barrier':
            const barrierMap: Record<string, string> = {
              'mid': 'mid clear mid barrier (Optional Window)',
              'high': 'metalised high barrier (No Window)',
              'highest': 'Aluminum highest barrier (No Window)'
            }
            if (barrierMap[optionId]) setSelectedBarrier(barrierMap[optionId])
            break
          case 'stiffness':
            const stiffnessMap: Record<string, string> = {
              'soft': 'Without Paper Lining (Softer)',
              'stiff': 'With Paper Lining (stiffer)'
            }
            if (stiffnessMap[optionId]) setSelectedStiffness(stiffnessMap[optionId])
            break
          case 'additional':
            if (optionId === 'valve') setSelectedValve('Yes')
            else if (optionId === 'laser') setSelectedLaserScoring('Yes')
            else if (optionId === 'hang') setSelectedHangHole('Yes')
            break
        }
        setCompareModal({ type: null, isOpen: false })
      }
      
      const options = getModalOptions()
      
      return (
        <div 
          className="fixed inset-0 z-50 bg-black/60 overflow-y-auto"
          onClick={() => setCompareModal({ type: null, isOpen: false })}
        >
          <div className="min-h-screen py-4 sm:py-8 px-2 sm:px-4 flex items-start justify-center">
            <div 
              className="bg-white rounded-xl sm:rounded-2xl shadow-2xl max-w-4xl w-full max-h-[95vh] sm:max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="sticky top-0 bg-white border-b border-neutral-200 px-4 sm:px-6 py-3 sm:py-4 flex justify-between items-center z-10">
                <h3 className="text-base sm:text-xl font-bold text-neutral-900">
                  {getModalTitle()}
                </h3>
                <button 
                  onClick={() => setCompareModal({ type: null, isOpen: false })} 
                  className="text-neutral-400 hover:text-neutral-600 transition p-1.5 sm:p-2 hover:bg-neutral-100 rounded-full"
                >
                  <X className="h-5 w-5 sm:h-6 sm:w-6" />
                </button>
              </div>
              
              {/* Options Grid */}
              <div className="p-3 sm:p-6 space-y-3 sm:space-y-4">
                {options.map((option) => (
                  <div 
                    key={option.id}
                    className="flex flex-col sm:flex-row gap-3 sm:gap-4 p-3 sm:p-4 border border-neutral-200 rounded-lg sm:rounded-xl hover:border-primary-300 hover:shadow-md transition"
                  >
                    {/* Image */}
                    <div className="flex-shrink-0 w-full sm:w-32 h-24 sm:h-32 bg-neutral-50 rounded-lg overflow-hidden flex items-center justify-center">
                      <img 
                        src={option.img} 
                        alt={option.name} 
                        className="max-w-full max-h-full object-contain p-2"
                      />
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <h4 className="text-base sm:text-lg font-semibold text-neutral-900 mb-1">{option.name}</h4>
                      <p className="text-xs sm:text-sm text-neutral-600 mb-2 line-clamp-3 sm:line-clamp-none">{option.description}</p>
                      
                      {/* Tags */}
                      <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-2 sm:mb-3">
                        {option.bestFor.map((tag, i) => (
                          <span key={i} className="text-[10px] sm:text-xs bg-primary-50 text-primary-700 px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-full">
                            {tag}
                          </span>
                        ))}
                        {option.premium && (
                          <span className="text-[10px] sm:text-xs bg-amber-50 text-amber-700 px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-full">
                            {t(`${p}.premium`)}</span>
                        )}
                      </div>
                      
                      {/* Select Button */}
                      <button
                        onClick={() => handleSelect(option.id)}
                        className="w-full sm:w-auto px-4 py-2.5 sm:py-2 bg-primary-600 hover:bg-primary-700 text-white text-sm font-medium rounded-lg transition"
                      >
                        {compareModal.type === 'additional' ? 'Enable This Feature' : 'Select This Option'}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Footer */}
              <div className="sticky bottom-0 bg-white border-t border-neutral-200 px-4 sm:px-6 py-3 sm:py-4">
                <button
                  onClick={() => setCompareModal({ type: null, isOpen: false })}
                  className="w-full py-2.5 sm:py-3 text-neutral-600 hover:text-neutral-800 text-sm font-medium transition"
                >
                  {t(`${p}.close`)}</button>
              </div>
            </div>
          </div>
        </div>
      )
    })()}
    </>
  )
}

export default ProductPage
