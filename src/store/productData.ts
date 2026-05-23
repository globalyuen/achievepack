// Store category types
export type StoreCategory = 'sample' | 'conventional-digital' | 'eco-digital' | 'eco-stock' | 'boxes' | 'conventional-stock'

// NEW: Product type for Stock vs Custom distinction
export type ProductType = 'sample' | 'stock' | 'custom'

// NEW: Sub-category for sidebar menu grouping
export type ProductSubCategory = 
  | 'samples'                    // Sample category
  | 'conventional-digital'       // Stock: Conventional Digital (fixed sizes)
  | 'eco-stock-plain'           // Stock: Eco Stock (no print, plain bags)
  | 'conventional-stock-plain'   // Stock: Conventional Stock (no print)
  | 'eco-digital'               // Custom: Eco Digital (custom sizes)
  | 'eco-stock-custom-print'    // Custom: Eco Stock Custom Print
  | 'boxes'                     // Custom: Boxes

// Legacy product interface (keeping for backward compatibility)
export interface PouchProduct {
  id: string
  name: string
  category: 'custom-printed' | 'compostable' | 'recyclable' | 'stock' | StoreCategory
  description: string
  shortDesc: string
  features: string[]
  images: string[]
  basePrice: number
  badge?: string
  rating: number
  reviews: number
  inStock: boolean
  turnaround: string
  minOrder: number
  videoUrl?: string
  videoUrls?: string[]
}

// New store product types
export interface BaseStoreProduct {
  id: string
  name: string
  category: StoreCategory
  productType?: ProductType        // 'sample' | 'stock' | 'custom' (optional for backward compat)
  subCategory?: ProductSubCategory // for sidebar grouping (optional for backward compat)
  description: string
  shortDesc: string
  features: string[]
  images: string[]
  badge?: string
  rating: number
  reviews: number
  inStock: boolean
  turnaround: string
  minOrder: number
  // YouTube or MP4 video URLs for product demo
  videoUrl?: string;
  videoUrls?: string[];
  // Allow custom size input (for custom products)
  allowCustomSize?: boolean
}

// Sample product
export interface SampleProduct extends BaseStoreProduct {
  category: 'sample'
  sampleType: string
  sampleCost: number
  shippingCost: number
  basePrice: number
}

// Conventional Digital product
export interface ConventionalProduct extends BaseStoreProduct {
  category: 'conventional-digital'
  shape: string
  basePrice: number
}

// Eco Digital product
export interface EcoDigitalProduct extends BaseStoreProduct {
  category: 'eco-digital'
  shape: string
  basePrice: number // calculated from defaults
  ecoConfig: {
    defaultMaterial: string
    defaultSize: string
    defaultQuantity: string
    defaultDesignCount: number
    defaultBarrier: string
    defaultStiffness: string
    defaultZipper: string
    defaultShippingMethod: string
  }
}

export type StoreProduct = PouchProduct | SampleProduct | ConventionalProduct | EcoDigitalProduct | EcoStockProduct | BoxProduct

// Eco Stock size variant (for products with multiple sizes)
export interface EcoStockSizeVariant {
  id: string
  label: string
  dimensions: string
  hasHole: boolean
  quantity: number
  totalPrice: number
  unitPrice: number
  heroImageIndex?: number  // Optional: switch main image when this variant is selected
}

// Eco Stock size with multiple quantity options (for mailer bags)
export interface EcoStockQuantityOption {
  quantity: number
  totalPrice: number
  unitPrice: number
}

// Custom print quantity option with discount
export interface CustomPrintQuantityOption {
  quantity: number
  unitPrice: number
  totalPrice: number
  discount: string
}

export interface EcoStockSizeWithQuantities {
  id: string
  label: string
  dimensions: string
  quantityOptions: EcoStockQuantityOption[]
}

// Eco Stock product (ready-made compostable)
export interface EcoStockProduct extends BaseStoreProduct {
  category: 'eco-stock' | 'conventional-stock'
  shape: string
  material: string
  basePrice: number
  pricePerPiece: number
  minQuantity: number
  quantityStep: number
  sizeInfo: string
  shelfLife?: string
  certification?: string
  // For multi-size products like Header Bag
  sizeVariants?: EcoStockSizeVariant[]
  // For multi-size with multi-quantity products like Mailer Bag
  sizeWithQuantities?: EcoStockSizeWithQuantities[]
  customPrintNote?: string
  // YouTube video URL for product demo
  videoUrl?: string
  // Link to custom print version
  customPrintProductId?: string
  // Link back to stock version (for custom print products)
  stockProductId?: string
  // Custom print quantity pricing tiers
  customPrintQuantities?: CustomPrintQuantityOption[]
}

// Box quantity option
export interface BoxQuantityOption {
  quantity: number
  totalPrice: number
  unitPrice: number
}

// Box size with multiple quantity options
export interface BoxSizeWithQuantities {
  id: string
  label: string
  dimensions: string
  quantityOptions: BoxQuantityOption[]
}

// Box product (corrugated boxes)
export interface BoxProduct extends BaseStoreProduct {
  category: 'boxes'
  shape: string
  material: string
  basePrice: number
  minQuantity: number
  insideDimensions?: string
  additionalFeatures: string[]
  quantityOptions?: BoxQuantityOption[]
  sizeWithQuantities?: BoxSizeWithQuantities[]
  customQuoteNote?: string
  videoUrl?: string
  // Compatibility with EcoStockProduct rendering
  sizeVariants?: never
  customPrintQuantities?: never
  pricePerPiece?: number
  sizeInfo?: string
  quantityStep?: number
  customPrintNote?: string
  customPrintProductId?: never
  stockProductId?: never
}

export interface PouchSize {
  id: string
  label: string
  dimensions: string
  imperial: string
  gusset?: string
}

export interface PouchShape {
  id: string
  label: string
  hasZipper: boolean
}

export const POUCH_SHAPES: PouchShape[] = [
  { id: '3-side-seal', label: '3 Side Seal Pouch', hasZipper: false },
  { id: 'zipper-3-side-seal', label: 'Zipper 3 Side Seal Pouch', hasZipper: true },
  { id: 'stand-up', label: 'Stand Up Pouch', hasZipper: false },
  { id: 'zipper-stand-up', label: 'Zipper Stand Up Pouch', hasZipper: true },
]

export const POUCH_SIZES: PouchSize[] = [
  { id: '70x100', label: '70 × 100mm', dimensions: '70x100', imperial: '2.8" × 3.9"', gusset: '0' },
  { id: '90x130', label: '90 × 130mm', dimensions: '90x130', imperial: '3.5" × 5.1"', gusset: '60' },
  { id: '100x150', label: '100 × 150mm', dimensions: '100x150', imperial: '3.9" × 5.9"', gusset: '50' },
  { id: '110x160', label: '110 × 160mm', dimensions: '110x160', imperial: '4.3" × 6.3"', gusset: '60' },
  { id: '120x170', label: '120 × 170mm', dimensions: '120x170', imperial: '4.7" × 6.7"', gusset: '80' },
  { id: '120x200', label: '120 × 200mm', dimensions: '120x200', imperial: '4.7" × 7.9"', gusset: '80' },
  { id: '130x180', label: '130 × 180mm', dimensions: '130x180', imperial: '5.1" × 7.1"', gusset: '80' },
  { id: '140x200', label: '140 × 200mm', dimensions: '140x200', imperial: '5.5" × 7.9"', gusset: '80' },
  { id: '150x220', label: '150 × 220mm', dimensions: '150x220', imperial: '5.9" × 8.7"', gusset: '80' },
  { id: '160x240', label: '160 × 240mm', dimensions: '160x240', imperial: '6.3" × 9.4"', gusset: '80' },
  { id: '180x260', label: '180 × 260mm', dimensions: '180x260', imperial: '7.1" × 10.2"', gusset: '80' },
  { id: '200x300', label: '200 × 300mm', dimensions: '200x300', imperial: '7.9" × 11.8"', gusset: '100' },
  { id: '210x310', label: '210 × 310mm', dimensions: '210x310', imperial: '8.3" × 12.2"', gusset: '100' },
  { id: '230x350', label: '230 × 350mm', dimensions: '230x350', imperial: '9.1" × 13.8"', gusset: '100' },
  { id: '260x350', label: '260 × 350mm', dimensions: '260x350', imperial: '10.2" × 13.8"', gusset: '100' },
]

/**
 * Formats a size label based on the pouch shape.
 * Removes gusset info for 3-side seal pouches.
 */
export const formatPouchSizeLabel = (size: PouchSize, shapeId: string): string => {
  const isFlat = shapeId.includes('3-side-seal')
  if (isFlat) {
    return `${size.label} (${size.imperial})`
  }
  
  if (size.gusset) {
    // Add gusset back for stand-up pouches
    const cleanLabel = size.label.replace('mm', '')
    return `${cleanLabel}+${size.gusset}mm (${size.imperial})`
  }
  
  return `${size.label} (${size.imperial})`
}

export const BARRIER_OPTIONS = [
  { id: 'clear', label: 'Clear - Low Barrier (Glossy)', finish: 'glossy' },
  { id: 'metalised', label: 'Metalised - High Barrier (Matte)', finish: 'matt' },
]

export const QUANTITY_OPTIONS = [100, 200, 300, 500, 1000, 2000, 3000, 5000, 10000, 20000]

export const PRICING_DATA: Record<string, Record<string, Record<number, number>>> = {
  'zipper-stand-up': {
    '90x130': { 100: 100, 200: 100, 300: 100, 500: 110, 1000: 210, 2000: 450, 3000: 640, 5000: 890, 10000: 1230, 20000: 2220 },
    '100x150': { 100: 100, 200: 110, 300: 110, 500: 110, 1000: 220, 2000: 490, 3000: 700, 5000: 940, 10000: 1320, 20000: 2410 },
    '110x160': { 100: 120, 200: 120, 300: 130, 500: 130, 1000: 270, 2000: 600, 3000: 790, 5000: 1120, 10000: 1620, 20000: 2910 },
    '120x170': { 100: 120, 200: 130, 300: 150, 500: 150, 1000: 300, 2000: 570, 3000: 710, 5000: 1020, 10000: 1550, 20000: 2870 },
    '120x200': { 100: 130, 200: 130, 300: 160, 500: 170, 1000: 330, 2000: 600, 3000: 770, 5000: 1100, 10000: 1700, 20000: 3170 },
    '130x180': { 100: 130, 200: 140, 300: 180, 500: 210, 1000: 420, 2000: 630, 3000: 870, 5000: 1230, 10000: 2020, 20000: 3860 },
    '140x200': { 100: 140, 200: 150, 300: 180, 500: 220, 1000: 450, 2000: 690, 3000: 930, 5000: 1340, 10000: 2270, 20000: 4190 },
    '150x220': { 100: 150, 200: 160, 300: 230, 500: 270, 1000: 490, 2000: 740, 3000: 920, 5000: 1510, 10000: 2540, 20000: 4860 },
    '160x240': { 100: 150, 200: 170, 300: 180, 500: 250, 1000: 490, 2000: 770, 3000: 1060, 5000: 1660, 10000: 2700, 20000: 5030 },
    '180x260': { 100: 170, 200: 180, 300: 220, 500: 280, 1000: 560, 2000: 900, 3000: 1230, 5000: 1830, 10000: 3140, 20000: 5860 },
    '200x300': { 100: 170, 200: 180, 300: 230, 500: 280, 1000: 550, 2000: 910, 3000: 1320, 5000: 1940, 10000: 3290, 20000: 6310 },
    '210x310': { 100: 170, 200: 190, 300: 260, 500: 320, 1000: 580, 2000: 950, 3000: 1330, 5000: 1960, 10000: 3330, 20000: 6500 },
    '230x350': { 100: 190, 200: 200, 300: 270, 500: 340, 1000: 620, 2000: 1020, 3000: 1450, 5000: 2140, 10000: 3740, 20000: 7060 },
    '260x350': { 100: 200, 200: 210, 300: 280, 500: 390, 1000: 680, 2000: 1080, 3000: 1630, 5000: 2430, 10000: 4240, 20000: 8240 }
  },
  'stand-up': {
    '90x130': { 100: 90, 200: 90, 300: 90, 500: 99, 1000: 189, 2000: 405, 3000: 576, 5000: 801, 10000: 1107, 20000: 1998 },
    '100x150': { 100: 90, 200: 99, 300: 99, 500: 99, 1000: 198, 2000: 441, 3000: 630, 5000: 846, 10000: 1188, 20000: 2169 },
    '110x160': { 100: 108, 200: 108, 300: 117, 500: 117, 1000: 243, 2000: 540, 3000: 711, 5000: 1008, 10000: 1458, 20000: 2619 },
    '120x170': { 100: 108, 200: 117, 300: 135, 500: 135, 1000: 270, 2000: 513, 3000: 639, 5000: 918, 10000: 1395, 20000: 2583 },
    '120x200': { 100: 117, 200: 117, 300: 144, 500: 153, 1000: 297, 2000: 540, 3000: 693, 5000: 990, 10000: 1530, 20000: 2853 },
    '130x180': { 100: 117, 200: 126, 300: 162, 500: 189, 1000: 378, 2000: 567, 3000: 783, 5000: 1107, 10000: 1818, 20000: 3474 },
    '140x200': { 100: 126, 200: 135, 300: 162, 500: 198, 1000: 405, 2000: 621, 3000: 837, 5000: 1206, 10000: 2043, 20000: 3771 },
    '150x220': { 100: 135, 200: 144, 300: 207, 500: 243, 1000: 441, 2000: 666, 3000: 828, 5000: 1359, 10000: 2286, 20000: 4374 },
    '160x240': { 100: 135, 200: 153, 300: 162, 500: 225, 1000: 441, 2000: 693, 3000: 954, 5000: 1494, 10000: 2430, 20000: 4527 },
    '180x260': { 100: 153, 200: 162, 300: 198, 500: 252, 1000: 504, 2000: 810, 3000: 1107, 5000: 1647, 10000: 2826, 20000: 5274 },
    '200x300': { 100: 153, 200: 162, 300: 207, 500: 252, 1000: 495, 2000: 819, 3000: 1188, 5000: 1746, 10000: 2961, 20000: 5679 },
    '210x310': { 100: 153, 200: 171, 300: 234, 500: 288, 1000: 522, 2000: 855, 3000: 1197, 5000: 1764, 10000: 2997, 20000: 5850 },
    '230x350': { 100: 171, 200: 180, 300: 243, 500: 306, 1000: 558, 2000: 918, 3000: 1305, 5000: 1926, 10000: 3366, 20000: 6354 },
    '260x350': { 100: 180, 200: 189, 300: 252, 500: 351, 1000: 612, 2000: 972, 3000: 1467, 5000: 2187, 10000: 3816, 20000: 7416 }
  },
  '3-side-seal': {
    '70x100': { 100: 85, 200: 85, 300: 85, 500: 94, 1000: 180, 2000: 385, 3000: 547, 5000: 761, 10000: 1052, 20000: 1898 },
    '90x130': { 100: 90, 200: 90, 300: 90, 500: 99, 1000: 189, 2000: 405, 3000: 576, 5000: 801, 10000: 1107, 20000: 1998 },
    '100x150': { 100: 90, 200: 90, 300: 90, 500: 100, 1000: 200, 2000: 400, 3000: 600, 5000: 900, 10000: 1150, 20000: 2190 },
    '110x160': { 100: 108, 200: 108, 300: 117, 500: 117, 1000: 243, 2000: 540, 3000: 711, 5000: 1008, 10000: 1458, 20000: 2619 },
    '120x170': { 100: 110, 200: 120, 300: 120, 500: 130, 1000: 260, 2000: 510, 3000: 710, 5000: 1090, 10000: 1390, 20000: 2680 },
    '120x200': { 100: 117, 200: 117, 300: 144, 500: 153, 1000: 297, 2000: 540, 3000: 693, 5000: 990, 10000: 1530, 20000: 2853 },
    '130x180': { 100: 110, 200: 110, 300: 140, 500: 140, 1000: 280, 2000: 560, 3000: 750, 5000: 1070, 10000: 1530, 20000: 3020 },
    '140x200': { 100: 126, 200: 135, 300: 162, 500: 198, 1000: 405, 2000: 621, 3000: 837, 5000: 1206, 10000: 2043, 20000: 3771 },
    '150x220': { 100: 110, 200: 120, 300: 180, 500: 190, 1000: 550, 2000: 960, 3000: 1190, 5000: 1890, 10000: 3300, 20000: 6500 },
    '160x240': { 100: 110, 200: 130, 300: 190, 500: 210, 1000: 580, 2000: 980, 3000: 1220, 5000: 1900, 10000: 3560, 20000: 6860 },
    '180x260': { 100: 110, 200: 150, 300: 230, 500: 270, 1000: 700, 2000: 1100, 3000: 1410, 5000: 2350, 10000: 4070, 20000: 7890 },
    '200x300': { 100: 110, 200: 160, 300: 240, 500: 290, 1000: 720, 2000: 1150, 3000: 1430, 5000: 2360, 10000: 4160, 20000: 8300 },
    '210x310': { 100: 153, 200: 171, 300: 234, 500: 288, 1000: 522, 2000: 855, 3000: 1197, 5000: 1764, 10000: 2997, 20000: 5850 },
    '230x350': { 100: 171, 200: 180, 300: 243, 500: 306, 1000: 558, 2000: 918, 3000: 1305, 5000: 1926, 10000: 3366, 20000: 6354 },
    '260x350': { 100: 180, 200: 189, 300: 252, 500: 351, 1000: 612, 2000: 972, 3000: 1467, 5000: 2187, 10000: 3816, 20000: 7416 }
  },
  'zipper-3-side-seal': {
    '70x100': { 100: 95, 200: 95, 300: 95, 500: 104, 1000: 199, 2000: 427, 3000: 608, 5000: 845, 10000: 1168, 20000: 2109 },
    '90x130': { 100: 100, 200: 100, 300: 100, 500: 110, 1000: 210, 2000: 450, 3000: 640, 5000: 890, 10000: 1230, 20000: 2220 },
    '100x150': { 100: 110, 200: 110, 300: 120, 500: 120, 1000: 210, 2000: 430, 3000: 590, 5000: 890, 10000: 1200, 20000: 2140 },
    '110x160': { 100: 120, 200: 120, 300: 130, 500: 130, 1000: 270, 2000: 600, 3000: 790, 5000: 1120, 10000: 1620, 20000: 2910 },
    '120x170': { 100: 120, 200: 130, 300: 150, 500: 150, 1000: 300, 2000: 570, 3000: 710, 5000: 1020, 10000: 1550, 20000: 2870 },
    '120x200': { 100: 130, 200: 130, 300: 160, 500: 170, 1000: 330, 2000: 600, 3000: 770, 5000: 1100, 10000: 1700, 20000: 3170 },
    '130x180': { 100: 130, 200: 140, 300: 140, 500: 150, 1000: 290, 2000: 560, 3000: 710, 5000: 1010, 10000: 1540, 20000: 2820 },
    '140x200': { 100: 140, 200: 150, 300: 180, 500: 220, 1000: 450, 2000: 690, 3000: 930, 5000: 1340, 10000: 2270, 20000: 4190 },
    '150x220': { 100: 150, 200: 160, 300: 230, 500: 270, 1000: 490, 2000: 740, 3000: 920, 5000: 1510, 10000: 2540, 20000: 4860 },
    '160x240': { 100: 130, 200: 140, 300: 200, 500: 340, 1000: 610, 2000: 940, 3000: 1300, 5000: 1990, 10000: 3260, 20000: 6260 },
    '180x260': { 100: 170, 200: 180, 300: 220, 500: 280, 1000: 560, 2000: 900, 3000: 1230, 5000: 1830, 10000: 3140, 20000: 5860 },
    '200x300': { 100: 150, 200: 190, 300: 280, 500: 460, 1000: 730, 2000: 1200, 3000: 1660, 5000: 2600, 10000: 4210, 20000: 8410 },
    '210x310': { 100: 170, 200: 190, 300: 260, 500: 320, 1000: 580, 2000: 950, 3000: 1330, 5000: 1960, 10000: 3330, 20000: 6500 },
    '230x350': { 100: 190, 200: 200, 300: 270, 500: 340, 1000: 620, 2000: 1020, 3000: 1450, 5000: 2140, 10000: 3740, 20000: 7060 },
    '260x350': { 100: 200, 200: 210, 300: 280, 500: 390, 1000: 680, 2000: 1080, 3000: 1630, 5000: 2430, 10000: 4240, 20000: 8240 }
  }
}

// Sample Products (4)
const SAMPLE_PRODUCTS: SampleProduct[] = [
  {
    id: 'sample-sizing-pack',
    name: 'Sizing Pack (Conventional Plastic)',
    category: 'sample',
    productType: 'sample',
    subCategory: 'samples',
    description: 'Free samples in standard sizes with conventional plastic material. Perfect for testing different sizes for your products.',
    shortDesc: 'Free samples + $40 shipping',
    features: ['Multiple Standard Sizes', 'Conventional Plastic', 'Free Samples', 'Fast Shipping'],
    images: ['/imgs/store/sample/sizing-pack.webp'],
    badge: '📦 Free Samples',
    rating: 4.9,
    reviews: 156,
    inStock: true,
    turnaround: '3-5 days',
    minOrder: 1,
    sampleType: 'sizing-pack',
    sampleCost: 0,
    shippingCost: 40,
    basePrice: 40,
    videoUrl: 'https://youtu.be/xKusl5lOEYM',
  },
  {
    id: 'sample-assorted-eco',
    name: 'Assorted Eco Pouches Sample',
    category: 'sample',
    productType: 'sample',
    subCategory: 'samples',
    description: 'Mixed eco-friendly sample pouches including PCR/Bio, Recyclable, and Compostable materials.',
    shortDesc: 'Free samples + $40 shipping',
    features: ['PCR/Bio Materials', 'Recyclable Options', 'Compostable Options', 'Variety Pack'],
    images: ['/imgs/store/sample/assorted.webp'],
    badge: '🌱 Eco-Friendly',
    rating: 4.8,
    reviews: 98,
    inStock: true,
    turnaround: '3-5 days',
    minOrder: 1,
    sampleType: 'assorted-eco',
    sampleCost: 0,
    shippingCost: 40,
    basePrice: 40,
    videoUrl: 'https://youtu.be/xKusl5lOEYM',
  },
  {
    id: 'sample-top-film',
    name: 'Custom digital printed top film of your design',
    category: 'sample',
    productType: 'sample',
    subCategory: 'samples',
    description: 'Large format digital printed film sample. Perfect for testing print quality and colors.',
    shortDesc: '$20 sample + $40 shipping',
    features: ['760mm x 1000mm', 'Digital Print Quality', 'Color Testing', 'Fast Turnaround'],
    images: ['/imgs/store/sample/proof.webp'],
    badge: '🎨 Print Sample',
    rating: 4.7,
    reviews: 67,
    inStock: true,
    turnaround: '5-7 days',
    minOrder: 1,
    sampleType: 'top-film',
    sampleCost: 20,
    shippingCost: 40,
    basePrice: 60,
    videoUrl: 'https://youtu.be/xKusl5lOEYM',
  },
  {
    id: 'sample-hand-sealed',
    name: 'Custom Digital Printed Hand Sealed Pouches',
    category: 'sample',
    productType: 'sample',
    subCategory: 'samples',
    description: 'Custom size hand-sealed digital printed pouches. Test your exact specifications before bulk order.',
    shortDesc: '$20 sample + $40 shipping',
    features: ['Custom Sizes', 'Hand Sealed', 'Digital Print', 'Full Customization'],
    images: ['/imgs/store/sample/hand-seal.webp'],
    badge: '✂️ Custom Size',
    rating: 4.6,
    reviews: 45,
    inStock: true,
    turnaround: '7-10 days',
    minOrder: 1,
    sampleType: 'hand-sealed',
    sampleCost: 20,
    shippingCost: 40,
    basePrice: 60,
    videoUrl: 'https://youtu.be/xKusl5lOEYM',
  },
]

// Conventional Digital Products - 8 products (2 shapes x 2 materials x 2 zipper options)
const CONVENTIONAL_PRODUCTS: ConventionalProduct[] = [
  // ===== 3 Side Seal Pouches =====
  {
    id: 'conven-3ss-clear-xzip',
    name: '3 Side Seal Pouch – Clear, No Zipper',
    category: 'conventional-digital',
    description: 'Crystal clear 3-side seal pouch with low barrier finish. Perfect for showcasing your products with full visibility.',
    shortDesc: 'From US$90 for 100 pcs',
    features: ['Clear Material', 'Low Barrier (Glossy)', 'Digital Print', 'Free Shipping'],
    images: [
      '/imgs/store/con-digital/3ss-clear-xzip/1.webp',
      '/imgs/store/con-digital/3ss-clear-xzip/2.webp',
      '/imgs/store/con-digital/3ss-clear-xzip/3.webp',
      '/imgs/store/con-digital/3ss-clear-xzip/tear.webp'
    ],
    badge: '🔍 Full Visibility',
    rating: 4.7,
    reviews: 156,
    inStock: true,
    turnaround: '15-20 days',
    minOrder: 100,
    shape: '3-side-seal',
    basePrice: 90,
    videoUrl: 'https://youtu.be/xKusl5lOEYM',
  },
  {
    id: 'conven-3ss-clear-zip',
    name: '3 Side Seal Pouch – Clear, With Zipper',
    category: 'conventional-digital',
    description: 'Resealable clear 3-side seal pouch. Combines product visibility with convenient resealing functionality.',
    shortDesc: 'From US$110 for 100 pcs',
    features: ['Clear Material', 'Resealable Zipper', 'Low Barrier (Glossy)', 'Digital Print'],
    images: [
      '/imgs/store/con-digital/3ss-clear-zip/1.webp',
      '/imgs/store/con-digital/3ss-clear-zip/2.webp',
      '/imgs/store/con-digital/3ss-clear-zip/3.webp',
      '/imgs/store/con-digital/3ss-clear-zip/tear.webp'
    ],
    badge: '🔒 Resealable',
    rating: 4.8,
    reviews: 187,
    inStock: true,
    turnaround: '15-20 days',
    minOrder: 100,
    shape: 'zipper-3-side-seal',
    basePrice: 110,
    videoUrl: 'https://youtu.be/xKusl5lOEYM',
  },
  {
    id: 'conven-3ss-met-xzip',
    name: '3 Side Seal Pouch – Metalised, No Zipper',
    category: 'conventional-digital',
    description: 'Metalised 3-side seal pouch with high barrier protection. Ideal for light-sensitive and moisture-sensitive products.',
    shortDesc: 'From US$90 for 100 pcs',
    features: ['Metalised Material', 'High Barrier (Matte)', 'Light Protection', 'Digital Print'],
    images: [
      '/imgs/store/con-digital/3ss-met-xzip/1.webp',
      '/imgs/store/con-digital/3ss-met-xzip/2.webp',
      '/imgs/store/con-digital/3ss-met-xzip/3.webp',
      '/imgs/store/con-digital/3ss-met-xzip/tear.webp'
    ],
    badge: '🛡️ High Barrier',
    rating: 4.8,
    reviews: 203,
    inStock: true,
    turnaround: '15-20 days',
    minOrder: 100,
    shape: '3-side-seal',
    basePrice: 90,
    videoUrl: 'https://youtu.be/xKusl5lOEYM',
  },
  {
    id: 'conven-3ss-met-zip',
    name: '3 Side Seal Pouch – Metalised, With Zipper',
    category: 'conventional-digital',
    description: 'Premium metalised 3-side seal with zipper. Maximum protection with convenient reseal for freshness retention.',
    shortDesc: 'From US$110 for 100 pcs',
    features: ['Metalised Material', 'Resealable Zipper', 'High Barrier (Matte)', 'Maximum Freshness'],
    images: [
      '/imgs/store/con-digital/3ss-met-zip/1.webp',
      '/imgs/store/con-digital/3ss-met-zip/2.webp',
      '/imgs/store/con-digital/3ss-met-zip/3.webp',
      '/imgs/store/con-digital/3ss-met-zip/tear.webp'
    ],
    badge: '⭐ Premium',
    rating: 4.9,
    reviews: 245,
    inStock: true,
    turnaround: '15-20 days',
    minOrder: 100,
    shape: 'zipper-3-side-seal',
    basePrice: 110,
    videoUrl: 'https://youtu.be/xKusl5lOEYM',
  },
  
  // ===== Stand Up Pouches =====
  {
    id: 'conven-sup-clear-xzip',
    name: 'Stand Up Pouch – Clear, No Zipper',
    category: 'conventional-digital',
    description: 'Clear stand-up pouch with excellent shelf presence. Showcases your product while standing upright on shelves.',
    shortDesc: 'From US$90 for 100 pcs',
    features: ['Clear Material', 'Stand Up Design', 'Low Barrier (Glossy)', 'Shelf Presence'],
    images: [
      '/imgs/store/con-digital/sup-clear-xzip/1.webp',
      '/imgs/store/con-digital/sup-clear-xzip/2.webp',
      '/imgs/store/con-digital/sup-clear-xzip/3.webp',
      '/imgs/store/con-digital/sup-clear-xzip/transparent_gusset.webp',
      '/imgs/store/con-digital/sup-clear-xzip/tear.webp',
      '/imgs/store/con-digital/sup-clear-xzip/4.webp'
    ],
    badge: '📐 Stand Up',
    rating: 4.8,
    reviews: 278,
    inStock: true,
    turnaround: '15-20 days',
    minOrder: 100,
    shape: 'stand-up',
    basePrice: 90,
    videoUrl: 'https://youtu.be/xKusl5lOEYM',
  },
  {
    id: 'conven-sup-clear-zip',
    name: 'Stand Up Pouch – Clear, With Zipper',
    category: 'conventional-digital',
    description: 'Resealable clear stand-up pouch. Perfect blend of visibility, shelf appeal, and resealable convenience.',
    shortDesc: 'From US$100 for 100 pcs',
    features: ['Clear Material', 'Stand Up + Zipper', 'Low Barrier (Glossy)', 'Free Shipping'],
    images: [
      '/imgs/store/con-digital/sup-clear-zip/1.webp',
      '/imgs/store/con-digital/sup-clear-zip/2.webp',
      '/imgs/store/con-digital/sup-clear-zip/3.webp',
      '/imgs/store/con-digital/sup-clear-zip/transparent_gusset.webp',
      '/imgs/store/con-digital/sup-clear-zip/tear.webp',
      '/imgs/store/con-digital/sup-clear-zip/4.webp'
    ],
    badge: '✨ Popular',
    rating: 4.9,
    reviews: 356,
    inStock: true,
    turnaround: '15-20 days',
    minOrder: 100,
    shape: 'zipper-stand-up',
    basePrice: 100,
    videoUrl: 'https://youtu.be/xKusl5lOEYM',
  },
  {
    id: 'conven-sup-met-xzip',
    name: 'Stand Up Pouch – Metalised, No Zipper',
    category: 'conventional-digital',
    description: 'Metalised stand-up pouch with high barrier protection. Combines premium appearance with product protection.',
    shortDesc: 'From US$90 for 100 pcs',
    features: ['Metalised Material', 'Stand Up Design', 'High Barrier (Matte)', 'Premium Look'],
    images: [
      '/imgs/store/con-digital/sup-met-xzip/1.webp',
      '/imgs/store/con-digital/sup-met-xzip/2.webp',
      '/imgs/store/con-digital/sup-met-xzip/3.webp',
      '/imgs/store/con-digital/sup-met-xzip/silver_gusset.webp',
      '/imgs/store/con-digital/sup-met-xzip/tear.webp',
      '/imgs/store/con-digital/sup-met-xzip/4.webp'
    ],
    badge: '🛡️ High Barrier',
    rating: 4.8,
    reviews: 298,
    inStock: true,
    turnaround: '15-20 days',
    minOrder: 100,
    shape: 'stand-up',
    basePrice: 90,
    videoUrl: 'https://youtu.be/xKusl5lOEYM',
  },
  {
    id: 'conven-sup-met-zip',
    name: 'Stand Up Pouch – Metalised, With Zipper',
    category: 'conventional-digital',
    description: 'Premium metalised stand-up pouch with zipper. Our best-selling option combining all premium features.',
    shortDesc: 'From US$100 for 100 pcs',
    features: ['Metalised Material', 'Stand Up + Zipper', 'High Barrier (Matte)', 'Best Seller'],
    images: [
      '/imgs/store/con-digital/sup-met-zip/1.webp',
      '/imgs/store/con-digital/sup-met-zip/2.webp',
      '/imgs/store/con-digital/sup-met-zip/3.webp',
      '/imgs/store/con-digital/sup-met-zip/silver_gusset.webp',
      '/imgs/store/con-digital/sup-met-zip/tear.webp',
      'https://ofobzjpexljkrqsgdgua.supabase.co/storage/v1/object/public/artworks/batches/8312d2d0-2a3e-4871-8333-2a6d78f96030/1776490853002_3rf9qwsi0za.jpg',
      '/imgs/store/con-digital/sup-met-zip/4.webp'
    ],
    badge: '⭐ Best Seller',
    rating: 5.0,
    reviews: 521,
    inStock: true,
    turnaround: '15-20 days',
    minOrder: 100,
    shape: 'zipper-stand-up',
    basePrice: 100,
    videoUrl: 'https://ofobzjpexljkrqsgdgua.supabase.co/storage/v1/object/public/artworks/batches/8312d2d0-2a3e-4871-8333-2a6d78f96030/1777910170433_yt1h1k19q0g.mp4',
    videoUrls: [
      'https://ofobzjpexljkrqsgdgua.supabase.co/storage/v1/object/public/artworks/batches/8312d2d0-2a3e-4871-8333-2a6d78f96030/1777910170433_yt1h1k19q0g.mp4',
      'https://youtu.be/xKusl5lOEYM'
    ],
  },
]

// Eco Digital Products (7 shapes, material as option)
const ECO_DIGITAL_PRODUCTS: EcoDigitalProduct[] = [
  // 3 Side Seal Pouch
  {
    id: 'eco-3side',
    name: 'Eco Digital – 3 Side Seal Pouch',
    category: 'eco-digital',
    description: 'Eco-friendly 3-side seal pouch. Choose from PCR/Bio Plastic, Mono Recyclable, or Biodegradable materials.',
    shortDesc: 'From US$100 for 1,000 pcs',
    features: ['Eco Materials', '30% Lower Carbon', 'Digital Print', 'Sustainable'],
    images: [
      '/imgs/store/eco-digital/0eQiBArdHVo_uyy12vmVid9Vc-hB8Msln4h0Oddu4dQ=.webp',
      '/imgs/store/eco-digital/1k3ig0ezuHcds_30mxxPOgFL-qeSwHc8uuzElo2-GP4=.webp',
      '/imgs/store/pouch shape/3-side.webp'
    ],
    badge: '🌿 Eco',
    rating: 4.7,
    reviews: 210,
    inStock: true,
    turnaround: '20-30 days',
    minOrder: 1000,
    shape: '3 Side Seal Pouch',
    basePrice: 100,
    ecoConfig: {
      defaultMaterial: 'Mono Recyclable Plastic',
      defaultSize: 'XS',
      defaultQuantity: '1,000 (Digital print)',
      defaultDesignCount: 1,
      defaultBarrier: 'mid clear mid barrier (Optional Window)',
      defaultStiffness: 'Without Paper Lining (Softer)',
      defaultZipper: 'No',
      defaultShippingMethod: 'Air Freight',
    },
    videoUrl: 'https://youtu.be/xKusl5lOEYM',
  },

  // Center Seal Pouch
  {
    id: 'eco-centerseal',
    name: 'Eco Digital – Center Seal Pouch',
    category: 'eco-digital',
    description: 'Eco-friendly center seal. Simple and cost-effective design with sustainable material options.',
    shortDesc: 'From US$100 for 1,000 pcs',
    features: ['Eco Materials', 'Center Seal', 'Digital Print', 'Sustainable'],
    images: [
      '/imgs/store/eco-digital/7CWxuO-mB4GevbYtCFnSFfzuCLECtUQ8AjuleiT4vAk=.webp',
      '/imgs/store/eco-digital/AvEbY4SX8gwP2SzENbSen8dnT_kTrrk8VN6siqp1B2I=.webp',
      '/imgs/store/pouch shape/center.webp'
    ],
    badge: '🌿 Eco',
    rating: 4.5,
    reviews: 110,
    inStock: true,
    turnaround: '20-30 days',
    minOrder: 1000,
    shape: 'Center Seal Pouch',
    basePrice: 100,
    ecoConfig: {
      defaultMaterial: 'Mono Recyclable Plastic',
      defaultSize: 'XS',
      defaultQuantity: '1,000 (Digital print)',
      defaultDesignCount: 1,
      defaultBarrier: 'mid clear mid barrier (Optional Window)',
      defaultStiffness: 'Without Paper Lining (Softer)',
      defaultZipper: 'No',
      defaultShippingMethod: 'Air Freight',
    },
    videoUrl: 'https://youtu.be/xKusl5lOEYM',
  },

  // Stand Up Pouch
  {
    id: 'eco-standup',
    name: 'Eco Digital – Stand Up Pouch / Doypack',
    category: 'eco-digital',
    description: 'Premium eco stand-up pouch. Excellent shelf presence with sustainable materials.',
    shortDesc: 'From US$120 for 1,000 pcs',
    features: ['Eco Materials', 'Stand Up', 'Digital Print', 'Premium'],
    images: [
      '/imgs/store/hero/eco-digital.png',
      '/imgs/store/eco-digital/D_Ec0HTDnnSvukUxwY-fJNRDhAjAWxtRnjMmkr63vlk=.webp',
      '/imgs/store/eco-digital/LQ5WGOrIkQPzbXSfWupAIFvVrlyL9lvZoMKc35bbHPw=.webp',
      '/imgs/store/eco-digital/MPRxOw-bWF57OrAxie9J1CXjpM4HKHUUkoMKHeflN6E=.webp',
      '/imgs/store/pouch shape/stand-up.webp'
    ],
    badge: '✨ Most Popular',
    rating: 4.9,
    reviews: 426,
    inStock: true,
    turnaround: '20-30 days',
    minOrder: 1000,
    shape: 'Stand Up Pouch / Doypack',
    basePrice: 120,
    ecoConfig: {
      defaultMaterial: 'Mono Recyclable Plastic',
      defaultSize: 'XS',
      defaultQuantity: '1,000 (Digital print)',
      defaultDesignCount: 1,
      defaultBarrier: 'mid clear mid barrier (Optional Window)',
      defaultStiffness: 'Without Paper Lining (Softer)',
      defaultZipper: 'No',
      defaultShippingMethod: 'Air Freight',
    },
    videoUrl: 'https://youtu.be/xKusl5lOEYM',
  },

  // Box Bottom Pouch
  {
    id: 'eco-boxbottom',
    name: 'Eco Digital – Box Bottom Pouch',
    category: 'eco-digital',
    description: 'Eco box bottom pouch. Maximum stability and capacity with sustainable materials.',
    shortDesc: 'From US$170 for 1,000 pcs',
    features: ['Eco Materials', 'Box Bottom', 'High Capacity', 'Sustainable'],
    images: [
      '/imgs/store/eco-digital/TKAqlW4KL2xV9glNA91iuD_sYEvp2G29eWT4819Ne1g=.webp',
      '/imgs/store/eco-digital/X5RkmCe76z3hyMvMr6Yvb5RjclkrdDjh2rNvGIRqgWU=.webp',
      '/imgs/store/pouch shape/box.webp'
    ],
    badge: '🌿 Eco',
    rating: 4.6,
    reviews: 81,
    inStock: true,
    turnaround: '25-35 days',
    minOrder: 1000,
    shape: 'Box Bottom Pouch',
    basePrice: 170,
    ecoConfig: {
      defaultMaterial: 'Mono Recyclable Plastic',
      defaultSize: 'L',
      defaultQuantity: '1,000 (Digital print)',
      defaultDesignCount: 1,
      defaultBarrier: 'mid clear mid barrier (Optional Window)',
      defaultStiffness: 'With Paper Lining (stiffer)',
      defaultZipper: 'No',
      defaultShippingMethod: 'Air Freight',
    },
    videoUrl: 'https://youtu.be/xKusl5lOEYM',
  },

  // Flat Squared Bottom Pouch
  {
    id: 'eco-flatbottom',
    name: 'Eco Digital – Flat Squared Bottom Pouch',
    category: 'eco-digital',
    description: 'Eco flat bottom pouch. Premium flat bottom design with eco-friendly materials.',
    shortDesc: 'From US$190 for 1,000 pcs',
    features: ['Eco Materials', 'Flat Bottom', 'Premium Design', 'Sustainable'],
    images: [
      '/imgs/store/eco-digital/YoIBVbbSdfCfRc5654ldAbT_L3N5rKcJk__lYon7YmU=.webp',
      '/imgs/store/eco-digital/bUr_Wdvkcyq2aH95-oFtusPsS5YMJ2jZ6tjm74mHEr4=.webp',
      '/imgs/store/eco-digital/ghEYoZQN4q_bq5SzDz94a_q95YbMZS933hJEnuImpmc=.webp',
      '/imgs/store/pouch shape/flat-bottom.webp'
    ],
    badge: '🌿 Eco',
    rating: 4.7,
    reviews: 119,
    inStock: true,
    turnaround: '25-35 days',
    minOrder: 1000,
    shape: 'Flat Squared Bottom Pouch',
    basePrice: 190,
    ecoConfig: {
      defaultMaterial: 'Mono Recyclable Plastic',
      defaultSize: 'L',
      defaultQuantity: '1,000 (Digital print)',
      defaultDesignCount: 1,
      defaultBarrier: 'mid clear mid barrier (Optional Window)',
      defaultStiffness: 'With Paper Lining (stiffer)',
      defaultZipper: 'No',
      defaultShippingMethod: 'Air Freight',
    },
    videoUrl: 'https://youtu.be/xKusl5lOEYM',
  },

  // Quad Seal Pouch
  {
    id: 'eco-quadseal',
    name: 'Eco Digital – Quad Seal Pouch',
    category: 'eco-digital',
    description: 'Eco quad seal pouch. Four-corner seal for maximum stability with sustainable materials.',
    shortDesc: 'From US$160 for 1,000 pcs',
    features: ['Eco Materials', 'Quad Seal', 'High Stability', 'Sustainable'],
    images: [
      '/imgs/store/eco-digital/hAGC60SxXYmSdiBTJD3XPhMZBocRVBXZyuV-dvt3r7c=.webp',
      '/imgs/store/eco-digital/os9CHhTSQoGASvA8lsfm-iHYfG4kddPoZP2wYMh47fs=.webp',
      '/imgs/store/eco-digital/vxuLNp13OWRZXhe-qkwn3UgHCWirk5TzBLhB7q8JJ30=.webp',
      '/imgs/store/pouch shape/quad-seal.webp'
    ],
    badge: '🌿 Eco',
    rating: 4.6,
    reviews: 97,
    inStock: true,
    turnaround: '25-35 days',
    minOrder: 1000,
    shape: 'Quad Seal Pouch',
    basePrice: 160,
    ecoConfig: {
      defaultMaterial: 'Mono Recyclable Plastic',
      defaultSize: 'L',
      defaultQuantity: '1,000 (Digital print)',
      defaultDesignCount: 1,
      defaultBarrier: 'mid clear mid barrier (Optional Window)',
      defaultStiffness: 'With Paper Lining (stiffer)',
      defaultZipper: 'No',
      defaultShippingMethod: 'Air Freight',
    },
    videoUrl: 'https://youtu.be/xKusl5lOEYM',
  },

  // Side Gusset Pouch
  {
    id: 'eco-sidegusset',
    name: 'Eco Digital – Side Gusset Pouch',
    category: 'eco-digital',
    description: 'Eco side gusset pouch. Classic coffee bag style with sustainable materials.',
    shortDesc: 'From US$140 for 1,000 pcs',
    features: ['Eco Materials', 'Side Gusset', 'Coffee Bag Style', 'Sustainable'],
    images: [
      '/imgs/store/eco-digital/wXqLssPqdR9J0iDhIyQ-NGTDDFm-3DgFKlyQD4ipsEw=.webp',
      '/imgs/store/eco-digital/zwwZAmSiOHouQPEkkT_Wwz5rhX13CtgkT8LqvNnoJ5w=.webp',
      '/imgs/store/pouch shape/side -seal.webp'
    ],
    badge: '🌿 Eco',
    rating: 4.8,
    reviews: 236,
    inStock: true,
    turnaround: '20-30 days',
    minOrder: 1000,
    shape: 'Side Gusset Pouch',
    basePrice: 140,
    ecoConfig: {
      defaultMaterial: 'Mono Recyclable Plastic',
      defaultSize: 'XS',
      defaultQuantity: '1,000 (Digital print)',
      defaultDesignCount: 1,
      defaultBarrier: 'metalised high barrier (No Window)',
      defaultStiffness: 'With Paper Lining (stiffer)',
      defaultZipper: 'No',
      defaultShippingMethod: 'Air Freight',
    },
    videoUrl: 'https://youtu.be/xKusl5lOEYM',
  },
]

// Eco Stock Products (Ready-made Compostable)
const ECO_STOCK_PRODUCTS: EcoStockProduct[] = [
  // Honeycomb Paper Wrap
  {
    id: 'eco-friendly-kraft-honeycomb-packing-paper-wrap',
    name: 'Eco-Friendly Kraft Honeycomb Packing Paper Wrap',
    category: 'eco-stock',
    description: 'An premium, ultra-protective buffer and cushioning solution made from 100% natural virgin wood pulp Kraft paper. Employing a unique honeycomb expanding structure, this wrap provides outstanding shock absorption, scratch prevention, and load distribution without the need for plastic bubble wraps. Biodegradable, compostable, and recyclable, it is ideal for premium cosmetics, glass and ceramic wares, electronics, and elegant floral wrapping.',
    shortDesc: 'Premium 80g virgin wood pulp compostable honeycomb cushioning wrap for glass, cosmetics, and flowers',
    features: [
      '100% Virgin Wood Pulp, FSC-Certified Kraft Paper',
      'Expanding Honeycomb Structure for Superior Shock Absorption',
      'Eco-Friendly Alternative to Plastic Bubble Wrap & Packing Peanuts',
      'No Tape or Scissors Required: Interlocking Design for Easy Packing',
      'Available in 4 Elegant Colors for Premium Aesthetic Presentation',
      'Naturally Biodegradable, Compostable, and Fully Recyclable'
    ],
    images: [
      '/taobao/paper-wrapping/O1CN01vgk7nh2AqO6TTWWZG_--2602218254.jpg',
      '/taobao/paper-wrapping/O1CN01EkxHv32AqNtHQro3Q_--2602218254.jpg',
      '/taobao/paper-wrapping/O1CN01XpIvtR2AqNtHQsTdy_--2602218254.jpg',
      '/taobao/paper-wrapping/O1CN01F3olDm2AqNtDgwkCO_--2602218254.jpg',
      '/taobao/paper-wrapping/O1CN01gVeabD2AqO6Seuewi_--2602218254.jpg',
      '/taobao/paper-wrapping/O1CN01CTz5IM2AqO6Y4B7aB_--2602218254.jpg',
      '/taobao/paper-wrapping/O1CN01hz1gfZ2AqNtKRxplo_--2602218254.jpg',
      '/taobao/paper-wrapping/O1CN015Yvnu52AqO5EK7ofw_--2602218254.jpg',
      '/taobao/paper-wrapping/O1CN01jeHap72AqNv4lztPA_--2602218254.jpg',
      '/taobao/paper-wrapping/O1CN01tA9ENg2AqO6YgjF4d_--2602218254.jpg',
      '/taobao/paper-wrapping/O1CN01gALJQc2AqNyQgfIIT_--2602218254.jpg',
      '/taobao/paper-wrapping/O1CN01s9XUH72AqO6Seu3WX_--2602218254.jpg'
    ],
    badge: '🌿 100% Compostable Buffer',
    rating: 4.8,
    reviews: 95,
    inStock: true,
    turnaround: '3-5 days',
    minOrder: 100,
    shape: 'Honeycomb Buffer Sheet',
    material: '100% Compostable FSC-Certified Kraft Paper (80 GSM)',
    basePrice: 10.00,
    pricePerPiece: 0.10,
    minQuantity: 100,
    quantityStep: 100,
    sizeInfo: 'S (30×30cm) / M (38×38cm) / L (50×50cm) • 80 GSM',
    shelfLife: 'Indefinite when dry',
    certification: 'FSC Certified, Fully Biodegradable & Compostable',
    customPrintNote: 'Custom prints available from 100+ pieces. Please consult our team.',
    sizeVariants: [
      {
        id: 'paper-wrap-s-kraft-100pcs',
        label: 'Size S (30 × 30 cm) - Natural Kraft (100 Sheets)',
        dimensions: '30 × 30 cm • 80 GSM • Natural Kraft',
        hasHole: false,
        quantity: 100,
        totalPrice: 10.00,
        unitPrice: 0.1000,
        heroImageIndex: 6
      },
      {
        id: 'paper-wrap-s-kraft-200pcs',
        label: 'Size S (30 × 30 cm) - Natural Kraft (200 Sheets)',
        dimensions: '30 × 30 cm • 80 GSM • Natural Kraft',
        hasHole: false,
        quantity: 200,
        totalPrice: 17.90,
        unitPrice: 0.0895,
        heroImageIndex: 6
      },
      {
        id: 'paper-wrap-s-kraft-500pcs',
        label: 'Size S (30 × 30 cm) - Natural Kraft (500 Sheets)',
        dimensions: '30 × 30 cm • 80 GSM • Natural Kraft',
        hasHole: false,
        quantity: 500,
        totalPrice: 38.00,
        unitPrice: 0.0760,
        heroImageIndex: 6
      },
      {
        id: 'paper-wrap-s-white-100pcs',
        label: 'Size S (30 × 30 cm) - Pristine White (100 Sheets)',
        dimensions: '30 × 30 cm • 80 GSM • Pristine White',
        hasHole: false,
        quantity: 100,
        totalPrice: 10.00,
        unitPrice: 0.1000,
        heroImageIndex: 3
      },
      {
        id: 'paper-wrap-s-white-200pcs',
        label: 'Size S (30 × 30 cm) - Pristine White (200 Sheets)',
        dimensions: '30 × 30 cm • 80 GSM • Pristine White',
        hasHole: false,
        quantity: 200,
        totalPrice: 17.90,
        unitPrice: 0.0895,
        heroImageIndex: 3
      },
      {
        id: 'paper-wrap-s-white-500pcs',
        label: 'Size S (30 × 30 cm) - Pristine White (500 Sheets)',
        dimensions: '30 × 30 cm • 80 GSM • Pristine White',
        hasHole: false,
        quantity: 500,
        totalPrice: 38.00,
        unitPrice: 0.0760,
        heroImageIndex: 3
      },
      {
        id: 'paper-wrap-s-black-100pcs',
        label: 'Size S (30 × 30 cm) - Sleek Black (100 Sheets)',
        dimensions: '30 × 30 cm • 80 GSM • Sleek Black',
        hasHole: false,
        quantity: 100,
        totalPrice: 10.00,
        unitPrice: 0.1000,
        heroImageIndex: 7
      },
      {
        id: 'paper-wrap-s-black-200pcs',
        label: 'Size S (30 × 30 cm) - Sleek Black (200 Sheets)',
        dimensions: '30 × 30 cm • 80 GSM • Sleek Black',
        hasHole: false,
        quantity: 200,
        totalPrice: 17.90,
        unitPrice: 0.0895,
        heroImageIndex: 7
      },
      {
        id: 'paper-wrap-s-black-500pcs',
        label: 'Size S (30 × 30 cm) - Sleek Black (500 Sheets)',
        dimensions: '30 × 30 cm • 80 GSM • Sleek Black',
        hasHole: false,
        quantity: 500,
        totalPrice: 38.00,
        unitPrice: 0.0760,
        heroImageIndex: 7
      },
      {
        id: 'paper-wrap-s-red-100pcs',
        label: 'Size S (30 × 30 cm) - Vibrant Red (100 Sheets)',
        dimensions: '30 × 30 cm • 80 GSM • Vibrant Red',
        hasHole: false,
        quantity: 100,
        totalPrice: 10.00,
        unitPrice: 0.1000,
        heroImageIndex: 1
      },
      {
        id: 'paper-wrap-s-red-200pcs',
        label: 'Size S (30 × 30 cm) - Vibrant Red (200 Sheets)',
        dimensions: '30 × 30 cm • 80 GSM • Vibrant Red',
        hasHole: false,
        quantity: 200,
        totalPrice: 17.90,
        unitPrice: 0.0895,
        heroImageIndex: 1
      },
      {
        id: 'paper-wrap-s-red-500pcs',
        label: 'Size S (30 × 30 cm) - Vibrant Red (500 Sheets)',
        dimensions: '30 × 30 cm • 80 GSM • Vibrant Red',
        hasHole: false,
        quantity: 500,
        totalPrice: 38.00,
        unitPrice: 0.0760,
        heroImageIndex: 1
      },
      {
        id: 'paper-wrap-m-kraft-100pcs',
        label: 'Size M (38 × 38 cm) - Natural Kraft (100 Sheets)',
        dimensions: '38 × 38 cm • 80 GSM • Natural Kraft',
        hasHole: false,
        quantity: 100,
        totalPrice: 14.00,
        unitPrice: 0.1400,
        heroImageIndex: 6
      },
      {
        id: 'paper-wrap-m-kraft-200pcs',
        label: 'Size M (38 × 38 cm) - Natural Kraft (200 Sheets)',
        dimensions: '38 × 38 cm • 80 GSM • Natural Kraft',
        hasHole: false,
        quantity: 200,
        totalPrice: 25.20,
        unitPrice: 0.1260,
        heroImageIndex: 6
      },
      {
        id: 'paper-wrap-m-kraft-500pcs',
        label: 'Size M (38 × 38 cm) - Natural Kraft (500 Sheets)',
        dimensions: '38 × 38 cm • 80 GSM • Natural Kraft',
        hasHole: false,
        quantity: 500,
        totalPrice: 54.80,
        unitPrice: 0.1096,
        heroImageIndex: 6
      },
      {
        id: 'paper-wrap-m-white-100pcs',
        label: 'Size M (38 × 38 cm) - Pristine White (100 Sheets)',
        dimensions: '38 × 38 cm • 80 GSM • Pristine White',
        hasHole: false,
        quantity: 100,
        totalPrice: 14.00,
        unitPrice: 0.1400,
        heroImageIndex: 3
      },
      {
        id: 'paper-wrap-m-white-200pcs',
        label: 'Size M (38 × 38 cm) - Pristine White (200 Sheets)',
        dimensions: '38 × 38 cm • 80 GSM • Pristine White',
        hasHole: false,
        quantity: 200,
        totalPrice: 25.20,
        unitPrice: 0.1260,
        heroImageIndex: 3
      },
      {
        id: 'paper-wrap-m-white-500pcs',
        label: 'Size M (38 × 38 cm) - Pristine White (500 Sheets)',
        dimensions: '38 × 38 cm • 80 GSM • Pristine White',
        hasHole: false,
        quantity: 500,
        totalPrice: 54.80,
        unitPrice: 0.1096,
        heroImageIndex: 3
      },
      {
        id: 'paper-wrap-m-black-100pcs',
        label: 'Size M (38 × 38 cm) - Sleek Black (100 Sheets)',
        dimensions: '38 × 38 cm • 80 GSM • Sleek Black',
        hasHole: false,
        quantity: 100,
        totalPrice: 14.00,
        unitPrice: 0.1400,
        heroImageIndex: 7
      },
      {
        id: 'paper-wrap-m-black-200pcs',
        label: 'Size M (38 × 38 cm) - Sleek Black (200 Sheets)',
        dimensions: '38 × 38 cm • 80 GSM • Sleek Black',
        hasHole: false,
        quantity: 200,
        totalPrice: 25.20,
        unitPrice: 0.1260,
        heroImageIndex: 7
      },
      {
        id: 'paper-wrap-m-black-500pcs',
        label: 'Size M (38 × 38 cm) - Sleek Black (500 Sheets)',
        dimensions: '38 × 38 cm • 80 GSM • Sleek Black',
        hasHole: false,
        quantity: 500,
        totalPrice: 54.80,
        unitPrice: 0.1096,
        heroImageIndex: 7
      },
      {
        id: 'paper-wrap-m-red-100pcs',
        label: 'Size M (38 × 38 cm) - Vibrant Red (100 Sheets)',
        dimensions: '38 × 38 cm • 80 GSM • Vibrant Red',
        hasHole: false,
        quantity: 100,
        totalPrice: 14.00,
        unitPrice: 0.1400,
        heroImageIndex: 1
      },
      {
        id: 'paper-wrap-m-red-200pcs',
        label: 'Size M (38 × 38 cm) - Vibrant Red (200 Sheets)',
        dimensions: '38 × 38 cm • 80 GSM • Vibrant Red',
        hasHole: false,
        quantity: 200,
        totalPrice: 25.20,
        unitPrice: 0.1260,
        heroImageIndex: 1
      },
      {
        id: 'paper-wrap-m-red-500pcs',
        label: 'Size M (38 × 38 cm) - Vibrant Red (500 Sheets)',
        dimensions: '38 × 38 cm • 80 GSM • Vibrant Red',
        hasHole: false,
        quantity: 500,
        totalPrice: 54.80,
        unitPrice: 0.1096,
        heroImageIndex: 1
      },
      {
        id: 'paper-wrap-l-kraft-100pcs',
        label: 'Size L (50 × 50 cm) - Natural Kraft (100 Sheets)',
        dimensions: '50 × 50 cm • 80 GSM • Natural Kraft',
        hasHole: false,
        quantity: 100,
        totalPrice: 21.20,
        unitPrice: 0.2120,
        heroImageIndex: 6
      },
      {
        id: 'paper-wrap-l-kraft-200pcs',
        label: 'Size L (50 × 50 cm) - Natural Kraft (200 Sheets)',
        dimensions: '50 × 50 cm • 80 GSM • Natural Kraft',
        hasHole: false,
        quantity: 200,
        totalPrice: 38.00,
        unitPrice: 0.1900,
        heroImageIndex: 6
      },
      {
        id: 'paper-wrap-l-kraft-500pcs',
        label: 'Size L (50 × 50 cm) - Natural Kraft (500 Sheets)',
        dimensions: '50 × 50 cm • 80 GSM • Natural Kraft',
        hasHole: false,
        quantity: 500,
        totalPrice: 82.80,
        unitPrice: 0.1656,
        heroImageIndex: 6
      },
      {
        id: 'paper-wrap-l-white-100pcs',
        label: 'Size L (50 × 50 cm) - Pristine White (100 Sheets)',
        dimensions: '50 × 50 cm • 80 GSM • Pristine White',
        hasHole: false,
        quantity: 100,
        totalPrice: 21.20,
        unitPrice: 0.2120,
        heroImageIndex: 3
      },
      {
        id: 'paper-wrap-l-white-200pcs',
        label: 'Size L (50 × 50 cm) - Pristine White (200 Sheets)',
        dimensions: '50 × 50 cm • 80 GSM • Pristine White',
        hasHole: false,
        quantity: 200,
        totalPrice: 38.00,
        unitPrice: 0.1900,
        heroImageIndex: 3
      },
      {
        id: 'paper-wrap-l-white-500pcs',
        label: 'Size L (50 × 50 cm) - Pristine White (500 Sheets)',
        dimensions: '50 × 50 cm • 80 GSM • Pristine White',
        hasHole: false,
        quantity: 500,
        totalPrice: 82.80,
        unitPrice: 0.1656,
        heroImageIndex: 3
      },
      {
        id: 'paper-wrap-l-black-100pcs',
        label: 'Size L (50 × 50 cm) - Sleek Black (100 Sheets)',
        dimensions: '50 × 50 cm • 80 GSM • Sleek Black',
        hasHole: false,
        quantity: 100,
        totalPrice: 21.20,
        unitPrice: 0.2120,
        heroImageIndex: 7
      },
      {
        id: 'paper-wrap-l-black-200pcs',
        label: 'Size L (50 × 50 cm) - Sleek Black (200 Sheets)',
        dimensions: '50 × 50 cm • 80 GSM • Sleek Black',
        hasHole: false,
        quantity: 200,
        totalPrice: 38.00,
        unitPrice: 0.1900,
        heroImageIndex: 7
      },
      {
        id: 'paper-wrap-l-black-500pcs',
        label: 'Size L (50 × 50 cm) - Sleek Black (500 Sheets)',
        dimensions: '50 × 50 cm • 80 GSM • Sleek Black',
        hasHole: false,
        quantity: 500,
        totalPrice: 82.80,
        unitPrice: 0.1656,
        heroImageIndex: 7
      },
      {
        id: 'paper-wrap-l-red-100pcs',
        label: 'Size L (50 × 50 cm) - Vibrant Red (100 Sheets)',
        dimensions: '50 × 50 cm • 80 GSM • Vibrant Red',
        hasHole: false,
        quantity: 100,
        totalPrice: 21.20,
        unitPrice: 0.2120,
        heroImageIndex: 1
      },
      {
        id: 'paper-wrap-l-red-200pcs',
        label: 'Size L (50 × 50 cm) - Vibrant Red (200 Sheets)',
        dimensions: '50 × 50 cm • 80 GSM • Vibrant Red',
        hasHole: false,
        quantity: 200,
        totalPrice: 38.00,
        unitPrice: 0.1900,
        heroImageIndex: 1
      },
      {
        id: 'paper-wrap-l-red-500pcs',
        label: 'Size L (50 × 50 cm) - Vibrant Red (500 Sheets)',
        dimensions: '50 × 50 cm • 80 GSM • Vibrant Red',
        hasHole: false,
        quantity: 500,
        totalPrice: 82.80,
        unitPrice: 0.1656,
        heroImageIndex: 1
      }
    ]
  },
  // Retro Horizontal Kraft Food Bag with Handle
  {
    id: 'retro-horizontal-kraft-food-handle-bag',
    name: 'Retro Horizontal Kraft Food & Gift Bag with Handle',
    category: 'eco-stock',
    description: 'An exceptionally elegant, retro-themed horizontal Kraft paper packaging pouch featuring a secure die-cut handle and a high-barrier moisture-proof food-grade internal lamination. Made from thickened FSC-certified natural Kraft paper, it combines classic organic aesthetics with outstanding durability, tear-resistance, and food preservation properties. Perfect for bulk dry foods, specialty rice, grains, premium dried fruits, tea leaves, organic snacks, and rustic gift presentation.',
    shortDesc: 'Thickened FSC-certified retro horizontal Kraft packaging bag with die-cut handle and internal lamination',
    features: [
      'Thickened FSC-Certified Organic Kraft Paper with Retro Design',
      'Inner Food-Grade Moisture-Proof, Leak-Proof Lamination',
      'Sturdy Die-Cut Hand-Carry Handle for Premium Convenience',
      'Horizontal Standing Layout with Wide Flat Gusset Bottom',
      'Ideal for Specialty Grains, Rice, Dried Fruits, Tea, and Gifts',
      '100% Recyclable and Biodegradable Exterior Body'
    ],
    images: [
      '/taobao/kraft-bag-with-handle/O1CN018gBt601my7yKOLraF_--166645022-jpg_.webp',
      '/taobao/kraft-bag-with-handle/O1CN01BF4ebQ1my7yNNqoTd_--166645022-jpg_.webp',
      '/taobao/kraft-bag-with-handle/O1CN01FfmG0r1my8BFzGkHe_--166645022-jpg_.webp',
      '/taobao/kraft-bag-with-handle/O1CN01Fpd3WB1my7z9V0Qmq_--166645022-png_.webp',
      '/taobao/kraft-bag-with-handle/O1CN01zYvKpI1my7yRibSOd_--166645022-png_.webp',
      '/taobao/kraft-bag-with-handle/O1CN01kh39AI1my8AqSjCuc_--166645022-jpg_.webp',
      '/taobao/kraft-bag-with-handle/O1CN01g44xWR1my85fAqZcZ_--166645022-jpg_.webp',
      '/taobao/kraft-bag-with-handle/O1CN01CwjIzc1my85YKsbKC_--166645022-jpg_.webp',
      '/taobao/kraft-bag-with-handle/O1CN01iIZ4GJ1my85cdtP2F_--166645022-jpg_.webp',
      '/taobao/kraft-bag-with-handle/O1CN017Cy6nT1my85eQpLnP_--166645022-jpg_.webp',
      '/taobao/kraft-bag-with-handle/O1CN01WKPVyO1my85fjhA8k_--166645022-jpg_.webp',
      '/taobao/kraft-bag-with-handle/O1CN01uvXKIR1my85fApQuC_--166645022-jpg_.webp'
    ],
    badge: '🛍️ Retro Hand-Carry Pouch',
    rating: 4.9,
    reviews: 142,
    inStock: true,
    turnaround: '3-5 days',
    minOrder: 100,
    shape: 'Horizontal Stand-up Hand-Carry Pouch',
    material: 'Thickened FSC Kraft Paper + Food-Grade PE Inner Liner',
    basePrice: 22.40,
    pricePerPiece: 0.224,
    minQuantity: 100,
    quantityStep: 100,
    sizeInfo: '1斤 (0.5kg) / 2斤 (1kg) / 3斤 (1.5kg) / 5斤 (2.5kg) / 6斤 (3kg) / 10斤 (5kg)',
    shelfLife: 'Indefinite when dry',
    certification: 'FSC Certified Kraft, FDA Food-Grade Compliant Interior',
    customPrintNote: 'Custom logo printing available from 100+ pieces. Contact our design team.',
    sizeVariants: [
      {
        id: 'kraft-bag-105kg-brown-100pcs',
        label: '1斤装 (0.5kg) - Classic Brown (100 Pcs)',
        dimensions: 'L10.5 × W5 × H9 cm • Thickened Kraft • Classic Brown',
        hasHole: false,
        quantity: 100,
        totalPrice: 22.40,
        unitPrice: 0.2240,
        heroImageIndex: 3
      },
      {
        id: 'kraft-bag-105kg-brown-200pcs',
        label: '1斤装 (0.5kg) - Classic Brown (200 Pcs)',
        dimensions: 'L10.5 × W5 × H9 cm • Thickened Kraft • Classic Brown',
        hasHole: false,
        quantity: 200,
        totalPrice: 40.30,
        unitPrice: 0.2015,
        heroImageIndex: 3
      },
      {
        id: 'kraft-bag-105kg-brown-500pcs',
        label: '1斤装 (0.5kg) - Classic Brown (500 Pcs)',
        dimensions: 'L10.5 × W5 × H9 cm • Thickened Kraft • Classic Brown',
        hasHole: false,
        quantity: 500,
        totalPrice: 89.50,
        unitPrice: 0.1790,
        heroImageIndex: 3
      },
      {
        id: 'kraft-bag-105kg-green-100pcs',
        label: '1斤装 (0.5kg) - Eco Green (100 Pcs)',
        dimensions: 'L10.5 × W5 × H9 cm • Thickened Kraft • Eco Green',
        hasHole: false,
        quantity: 100,
        totalPrice: 22.40,
        unitPrice: 0.2240,
        heroImageIndex: 6
      },
      {
        id: 'kraft-bag-105kg-green-200pcs',
        label: '1斤装 (0.5kg) - Eco Green (200 Pcs)',
        dimensions: 'L10.5 × W5 × H9 cm • Thickened Kraft • Eco Green',
        hasHole: false,
        quantity: 200,
        totalPrice: 40.30,
        unitPrice: 0.2015,
        heroImageIndex: 6
      },
      {
        id: 'kraft-bag-105kg-green-500pcs',
        label: '1斤装 (0.5kg) - Eco Green (500 Pcs)',
        dimensions: 'L10.5 × W5 × H9 cm • Thickened Kraft • Eco Green',
        hasHole: false,
        quantity: 500,
        totalPrice: 89.50,
        unitPrice: 0.1790,
        heroImageIndex: 6
      },
      {
        id: 'kraft-bag-105kg-red-100pcs',
        label: '1斤装 (0.5kg) - Festive Red (100 Pcs)',
        dimensions: 'L10.5 × W5 × H9 cm • Thickened Kraft • Festive Red',
        hasHole: false,
        quantity: 100,
        totalPrice: 22.40,
        unitPrice: 0.2240,
        heroImageIndex: 10
      },
      {
        id: 'kraft-bag-105kg-red-200pcs',
        label: '1斤装 (0.5kg) - Festive Red (200 Pcs)',
        dimensions: 'L10.5 × W5 × H9 cm • Thickened Kraft • Festive Red',
        hasHole: false,
        quantity: 200,
        totalPrice: 40.30,
        unitPrice: 0.2015,
        heroImageIndex: 10
      },
      {
        id: 'kraft-bag-105kg-red-500pcs',
        label: '1斤装 (0.5kg) - Festive Red (500 Pcs)',
        dimensions: 'L10.5 × W5 × H9 cm • Thickened Kraft • Festive Red',
        hasHole: false,
        quantity: 500,
        totalPrice: 89.50,
        unitPrice: 0.1790,
        heroImageIndex: 10
      },
      {
        id: 'kraft-bag-210kg-brown-100pcs',
        label: '2斤装 (1.0kg) - Classic Brown (100 Pcs)',
        dimensions: 'L12 × W7 × H10.5 cm • Thickened Kraft • Classic Brown',
        hasHole: false,
        quantity: 100,
        totalPrice: 28.00,
        unitPrice: 0.2800,
        heroImageIndex: 2
      },
      {
        id: 'kraft-bag-210kg-brown-200pcs',
        label: '2斤装 (1.0kg) - Classic Brown (200 Pcs)',
        dimensions: 'L12 × W7 × H10.5 cm • Thickened Kraft • Classic Brown',
        hasHole: false,
        quantity: 200,
        totalPrice: 50.30,
        unitPrice: 0.2515,
        heroImageIndex: 2
      },
      {
        id: 'kraft-bag-210kg-brown-500pcs',
        label: '2斤装 (1.0kg) - Classic Brown (500 Pcs)',
        dimensions: 'L12 × W7 × H10.5 cm • Thickened Kraft • Classic Brown',
        hasHole: false,
        quantity: 500,
        totalPrice: 111.90,
        unitPrice: 0.2238,
        heroImageIndex: 2
      },
      {
        id: 'kraft-bag-210kg-green-100pcs',
        label: '2斤装 (1.0kg) - Eco Green (100 Pcs)',
        dimensions: 'L12 × W7 × H10.5 cm • Thickened Kraft • Eco Green',
        hasHole: false,
        quantity: 100,
        totalPrice: 28.00,
        unitPrice: 0.2800,
        heroImageIndex: 6
      },
      {
        id: 'kraft-bag-210kg-green-200pcs',
        label: '2斤装 (1.0kg) - Eco Green (200 Pcs)',
        dimensions: 'L12 × W7 × H10.5 cm • Thickened Kraft • Eco Green',
        hasHole: false,
        quantity: 200,
        totalPrice: 50.30,
        unitPrice: 0.2515,
        heroImageIndex: 6
      },
      {
        id: 'kraft-bag-210kg-green-500pcs',
        label: '2斤装 (1.0kg) - Eco Green (500 Pcs)',
        dimensions: 'L12 × W7 × H10.5 cm • Thickened Kraft • Eco Green',
        hasHole: false,
        quantity: 500,
        totalPrice: 111.90,
        unitPrice: 0.2238,
        heroImageIndex: 6
      },
      {
        id: 'kraft-bag-210kg-red-100pcs',
        label: '2斤装 (1.0kg) - Festive Red (100 Pcs)',
        dimensions: 'L12 × W7 × H10.5 cm • Thickened Kraft • Festive Red',
        hasHole: false,
        quantity: 100,
        totalPrice: 28.00,
        unitPrice: 0.2800,
        heroImageIndex: 11
      },
      {
        id: 'kraft-bag-210kg-red-200pcs',
        label: '2斤装 (1.0kg) - Festive Red (200 Pcs)',
        dimensions: 'L12 × W7 × H10.5 cm • Thickened Kraft • Festive Red',
        hasHole: false,
        quantity: 200,
        totalPrice: 50.30,
        unitPrice: 0.2515,
        heroImageIndex: 11
      },
      {
        id: 'kraft-bag-210kg-red-500pcs',
        label: '2斤装 (1.0kg) - Festive Red (500 Pcs)',
        dimensions: 'L12 × W7 × H10.5 cm • Thickened Kraft • Festive Red',
        hasHole: false,
        quantity: 500,
        totalPrice: 111.90,
        unitPrice: 0.2238,
        heroImageIndex: 11
      },
      {
        id: 'kraft-bag-315kg-brown-100pcs',
        label: '3斤装 (1.5kg) - Classic Brown (100 Pcs)',
        dimensions: 'L13.5 × W8 × H12 cm • Thickened Kraft • Classic Brown',
        hasHole: false,
        quantity: 100,
        totalPrice: 36.40,
        unitPrice: 0.3640,
        heroImageIndex: 1
      },
      {
        id: 'kraft-bag-315kg-brown-200pcs',
        label: '3斤装 (1.5kg) - Classic Brown (200 Pcs)',
        dimensions: 'L13.5 × W8 × H12 cm • Thickened Kraft • Classic Brown',
        hasHole: false,
        quantity: 200,
        totalPrice: 65.40,
        unitPrice: 0.3270,
        heroImageIndex: 1
      },
      {
        id: 'kraft-bag-315kg-brown-500pcs',
        label: '3斤装 (1.5kg) - Classic Brown (500 Pcs)',
        dimensions: 'L13.5 × W8 × H12 cm • Thickened Kraft • Classic Brown',
        hasHole: false,
        quantity: 500,
        totalPrice: 145.40,
        unitPrice: 0.2908,
        heroImageIndex: 1
      },
      {
        id: 'kraft-bag-315kg-green-100pcs',
        label: '3斤装 (1.5kg) - Eco Green (100 Pcs)',
        dimensions: 'L13.5 × W8 × H12 cm • Thickened Kraft • Eco Green',
        hasHole: false,
        quantity: 100,
        totalPrice: 36.40,
        unitPrice: 0.3640,
        heroImageIndex: 6
      },
      {
        id: 'kraft-bag-315kg-green-200pcs',
        label: '3斤装 (1.5kg) - Eco Green (200 Pcs)',
        dimensions: 'L13.5 × W8 × H12 cm • Thickened Kraft • Eco Green',
        hasHole: false,
        quantity: 200,
        totalPrice: 65.40,
        unitPrice: 0.3270,
        heroImageIndex: 6
      },
      {
        id: 'kraft-bag-315kg-green-500pcs',
        label: '3斤装 (1.5kg) - Eco Green (500 Pcs)',
        dimensions: 'L13.5 × W8 × H12 cm • Thickened Kraft • Eco Green',
        hasHole: false,
        quantity: 500,
        totalPrice: 145.40,
        unitPrice: 0.2908,
        heroImageIndex: 6
      },
      {
        id: 'kraft-bag-315kg-red-100pcs',
        label: '3斤装 (1.5kg) - Festive Red (100 Pcs)',
        dimensions: 'L13.5 × W8 × H12 cm • Thickened Kraft • Festive Red',
        hasHole: false,
        quantity: 100,
        totalPrice: 36.40,
        unitPrice: 0.3640,
        heroImageIndex: 8
      },
      {
        id: 'kraft-bag-315kg-red-200pcs',
        label: '3斤装 (1.5kg) - Festive Red (200 Pcs)',
        dimensions: 'L13.5 × W8 × H12 cm • Thickened Kraft • Festive Red',
        hasHole: false,
        quantity: 200,
        totalPrice: 65.40,
        unitPrice: 0.3270,
        heroImageIndex: 8
      },
      {
        id: 'kraft-bag-315kg-red-500pcs',
        label: '3斤装 (1.5kg) - Festive Red (500 Pcs)',
        dimensions: 'L13.5 × W8 × H12 cm • Thickened Kraft • Festive Red',
        hasHole: false,
        quantity: 500,
        totalPrice: 145.40,
        unitPrice: 0.2908,
        heroImageIndex: 8
      },
      {
        id: 'kraft-bag-525kg-brown-100pcs',
        label: '5斤装 (2.5kg) - Classic Brown (100 Pcs)',
        dimensions: 'L18 × W8 × H14.5 cm • Thickened Kraft • Classic Brown',
        hasHole: false,
        quantity: 100,
        totalPrice: 47.60,
        unitPrice: 0.4760,
        heroImageIndex: 0
      },
      {
        id: 'kraft-bag-525kg-brown-200pcs',
        label: '5斤装 (2.5kg) - Classic Brown (200 Pcs)',
        dimensions: 'L18 × W8 × H14.5 cm • Thickened Kraft • Classic Brown',
        hasHole: false,
        quantity: 200,
        totalPrice: 85.60,
        unitPrice: 0.4280,
        heroImageIndex: 0
      },
      {
        id: 'kraft-bag-525kg-brown-500pcs',
        label: '5斤装 (2.5kg) - Classic Brown (500 Pcs)',
        dimensions: 'L18 × W8 × H14.5 cm • Thickened Kraft • Classic Brown',
        hasHole: false,
        quantity: 500,
        totalPrice: 190.20,
        unitPrice: 0.3804,
        heroImageIndex: 0
      },
      {
        id: 'kraft-bag-525kg-green-100pcs',
        label: '5斤装 (2.5kg) - Eco Green (100 Pcs)',
        dimensions: 'L18 × W8 × H14.5 cm • Thickened Kraft • Eco Green',
        hasHole: false,
        quantity: 100,
        totalPrice: 47.60,
        unitPrice: 0.4760,
        heroImageIndex: 6
      },
      {
        id: 'kraft-bag-525kg-green-200pcs',
        label: '5斤装 (2.5kg) - Eco Green (200 Pcs)',
        dimensions: 'L18 × W8 × H14.5 cm • Thickened Kraft • Eco Green',
        hasHole: false,
        quantity: 200,
        totalPrice: 85.60,
        unitPrice: 0.4280,
        heroImageIndex: 6
      },
      {
        id: 'kraft-bag-525kg-green-500pcs',
        label: '5斤装 (2.5kg) - Eco Green (500 Pcs)',
        dimensions: 'L18 × W8 × H14.5 cm • Thickened Kraft • Eco Green',
        hasHole: false,
        quantity: 500,
        totalPrice: 190.20,
        unitPrice: 0.3804,
        heroImageIndex: 6
      },
      {
        id: 'kraft-bag-525kg-red-100pcs',
        label: '5斤装 (2.5kg) - Festive Red (100 Pcs)',
        dimensions: 'L18 × W8 × H14.5 cm • Thickened Kraft • Festive Red',
        hasHole: false,
        quantity: 100,
        totalPrice: 47.60,
        unitPrice: 0.4760,
        heroImageIndex: 8
      },
      {
        id: 'kraft-bag-525kg-red-200pcs',
        label: '5斤装 (2.5kg) - Festive Red (200 Pcs)',
        dimensions: 'L18 × W8 × H14.5 cm • Thickened Kraft • Festive Red',
        hasHole: false,
        quantity: 200,
        totalPrice: 85.60,
        unitPrice: 0.4280,
        heroImageIndex: 8
      },
      {
        id: 'kraft-bag-525kg-red-500pcs',
        label: '5斤装 (2.5kg) - Festive Red (500 Pcs)',
        dimensions: 'L18 × W8 × H14.5 cm • Thickened Kraft • Festive Red',
        hasHole: false,
        quantity: 500,
        totalPrice: 190.20,
        unitPrice: 0.3804,
        heroImageIndex: 8
      },
      {
        id: 'kraft-bag-630kg-brown-100pcs',
        label: '6斤装 (3.0kg) - Classic Brown (100 Pcs)',
        dimensions: 'L21 × W8 × H16 cm • Thickened Kraft • Classic Brown',
        hasHole: false,
        quantity: 100,
        totalPrice: 53.20,
        unitPrice: 0.5320,
        heroImageIndex: 5
      },
      {
        id: 'kraft-bag-630kg-brown-200pcs',
        label: '6斤装 (3.0kg) - Classic Brown (200 Pcs)',
        dimensions: 'L21 × W8 × H16 cm • Thickened Kraft • Classic Brown',
        hasHole: false,
        quantity: 200,
        totalPrice: 95.70,
        unitPrice: 0.4785,
        heroImageIndex: 5
      },
      {
        id: 'kraft-bag-630kg-brown-500pcs',
        label: '6斤装 (3.0kg) - Classic Brown (500 Pcs)',
        dimensions: 'L21 × W8 × H16 cm • Thickened Kraft • Classic Brown',
        hasHole: false,
        quantity: 500,
        totalPrice: 212.60,
        unitPrice: 0.4252,
        heroImageIndex: 5
      },
      {
        id: 'kraft-bag-630kg-green-100pcs',
        label: '6斤装 (3.0kg) - Eco Green (100 Pcs)',
        dimensions: 'L21 × W8 × H16 cm • Thickened Kraft • Eco Green',
        hasHole: false,
        quantity: 100,
        totalPrice: 53.20,
        unitPrice: 0.5320,
        heroImageIndex: 6
      },
      {
        id: 'kraft-bag-630kg-green-200pcs',
        label: '6斤装 (3.0kg) - Eco Green (200 Pcs)',
        dimensions: 'L21 × W8 × H16 cm • Thickened Kraft • Eco Green',
        hasHole: false,
        quantity: 200,
        totalPrice: 95.70,
        unitPrice: 0.4785,
        heroImageIndex: 6
      },
      {
        id: 'kraft-bag-630kg-green-500pcs',
        label: '6斤装 (3.0kg) - Eco Green (500 Pcs)',
        dimensions: 'L21 × W8 × H16 cm • Thickened Kraft • Eco Green',
        hasHole: false,
        quantity: 500,
        totalPrice: 212.60,
        unitPrice: 0.4252,
        heroImageIndex: 6
      },
      {
        id: 'kraft-bag-630kg-red-100pcs',
        label: '6斤装 (3.0kg) - Festive Red (100 Pcs)',
        dimensions: 'L21 × W8 × H16 cm • Thickened Kraft • Festive Red',
        hasHole: false,
        quantity: 100,
        totalPrice: 53.20,
        unitPrice: 0.5320,
        heroImageIndex: 8
      },
      {
        id: 'kraft-bag-630kg-red-200pcs',
        label: '6斤装 (3.0kg) - Festive Red (200 Pcs)',
        dimensions: 'L21 × W8 × H16 cm • Thickened Kraft • Festive Red',
        hasHole: false,
        quantity: 200,
        totalPrice: 95.70,
        unitPrice: 0.4785,
        heroImageIndex: 8
      },
      {
        id: 'kraft-bag-630kg-red-500pcs',
        label: '6斤装 (3.0kg) - Festive Red (500 Pcs)',
        dimensions: 'L21 × W8 × H16 cm • Thickened Kraft • Festive Red',
        hasHole: false,
        quantity: 500,
        totalPrice: 212.60,
        unitPrice: 0.4252,
        heroImageIndex: 8
      },
      {
        id: 'kraft-bag-1050kg-brown-100pcs',
        label: '10斤装 (5.0kg) - Classic Brown (100 Pcs)',
        dimensions: 'L24 × W10 × H20 cm • Thickened Kraft • Classic Brown',
        hasHole: false,
        quantity: 100,
        totalPrice: 72.70,
        unitPrice: 0.7270,
        heroImageIndex: 4
      },
      {
        id: 'kraft-bag-1050kg-brown-200pcs',
        label: '10斤装 (5.0kg) - Classic Brown (200 Pcs)',
        dimensions: 'L24 × W10 × H20 cm • Thickened Kraft • Classic Brown',
        hasHole: false,
        quantity: 200,
        totalPrice: 130.90,
        unitPrice: 0.6545,
        heroImageIndex: 4
      },
      {
        id: 'kraft-bag-1050kg-brown-500pcs',
        label: '10斤装 (5.0kg) - Classic Brown (500 Pcs)',
        dimensions: 'L24 × W10 × H20 cm • Thickened Kraft • Classic Brown',
        hasHole: false,
        quantity: 500,
        totalPrice: 290.90,
        unitPrice: 0.5818,
        heroImageIndex: 4
      },
      {
        id: 'kraft-bag-1050kg-green-100pcs',
        label: '10斤装 (5.0kg) - Eco Green (100 Pcs)',
        dimensions: 'L24 × W10 × H20 cm • Thickened Kraft • Eco Green',
        hasHole: false,
        quantity: 100,
        totalPrice: 72.70,
        unitPrice: 0.7270,
        heroImageIndex: 7
      },
      {
        id: 'kraft-bag-1050kg-green-200pcs',
        label: '10斤装 (5.0kg) - Eco Green (200 Pcs)',
        dimensions: 'L24 × W10 × H20 cm • Thickened Kraft • Eco Green',
        hasHole: false,
        quantity: 200,
        totalPrice: 130.90,
        unitPrice: 0.6545,
        heroImageIndex: 7
      },
      {
        id: 'kraft-bag-1050kg-green-500pcs',
        label: '10斤装 (5.0kg) - Eco Green (500 Pcs)',
        dimensions: 'L24 × W10 × H20 cm • Thickened Kraft • Eco Green',
        hasHole: false,
        quantity: 500,
        totalPrice: 290.90,
        unitPrice: 0.5818,
        heroImageIndex: 7
      },
      {
        id: 'kraft-bag-1050kg-red-100pcs',
        label: '10斤装 (5.0kg) - Festive Red (100 Pcs)',
        dimensions: 'L24 × W10 × H20 cm • Thickened Kraft • Festive Red',
        hasHole: false,
        quantity: 100,
        totalPrice: 72.70,
        unitPrice: 0.7270,
        heroImageIndex: 9
      },
      {
        id: 'kraft-bag-1050kg-red-200pcs',
        label: '10斤装 (5.0kg) - Festive Red (200 Pcs)',
        dimensions: 'L24 × W10 × H20 cm • Thickened Kraft • Festive Red',
        hasHole: false,
        quantity: 200,
        totalPrice: 130.90,
        unitPrice: 0.6545,
        heroImageIndex: 9
      },
      {
        id: 'kraft-bag-1050kg-red-500pcs',
        label: '10斤装 (5.0kg) - Festive Red (500 Pcs)',
        dimensions: 'L24 × W10 × H20 cm • Thickened Kraft • Festive Red',
        hasHole: false,
        quantity: 500,
        totalPrice: 290.90,
        unitPrice: 0.5818,
        heroImageIndex: 9
      }
    ]
  },

  // 40ml Foil Capsule and Packing Machine
  {
    id: '40ml-foil-capsule-and-packing-machine',
    name: '40ml Foil Capsule and Packing Machine',
    category: 'eco-stock',
    description: 'A versatile DIY preservation set featuring high-barrier food-grade dual-color aluminum foil cups (40ml) and matching sealing lids, alongside a compact manual heat sealer. Crafted from premium 100% recyclable aluminum foil with a hot-pressed glue-free sealing process, this set guarantees outstanding sealing performance, high temperature resistance, and superior moisture/oxidation barriers. Perfect for DIY packaging and lock-in freshness of loose tea leaves, coffee powder/liquid, honey, sauces, probiotics, herbal medicine, and dry condiments.',
    shortDesc: 'DIY food-grade 100% recyclable 40ml foil capsule and compact heat sealer set',
    features: [
      '100% Recyclable Food-Grade High-Barrier Aluminum Foil',
      'Dual-Color Metallic Finish (Premium Aesthetic)',
      'Glue-Free Hot-Press Sealing Process for Secure Seal',
      'Compact Portable Sealing Machine (Manual Operation)',
      'Excellent Heat & Cold Resistance (Refrigeration Safe)',
      'Highly Versatile DIY Packaging (Tea, Coffee, Honey, Sauces)'
    ],
    images: [
      '/taobao/40ml-foil-capsule-and-packing-machine/O1CN01F9RKpl24iFRr3TGRu_--2218032007424.jpg',
      '/taobao/40ml-foil-capsule-and-packing-machine/O1CN01Ic70IY24iFRr3Vbzn_--2218032007424.jpg',
      '/taobao/40ml-foil-capsule-and-packing-machine/O1CN01bb4JEJ24iFRzT9NzD_--2218032007424.jpg',
      '/taobao/40ml-foil-capsule-and-packing-machine/O1CN01cvZZSM24iFRt15cdx_--2218032007424.jpg',
      '/taobao/40ml-foil-capsule-and-packing-machine/O1CN0139wIo524iFRskVfPy_--2218032007424.jpg',
      '/taobao/40ml-foil-capsule-and-packing-machine/O1CN01Ljy5rU24iFRsp3rrr_--2218032007424.jpg',
      '/taobao/40ml-foil-capsule-and-packing-machine/O1CN01iCT08U24iFRskY12j_--2218032007424.jpg',
      '/taobao/40ml-foil-capsule-and-packing-machine/O1CN014dUHK224iFRrwyzGO_--2218032007424.jpg',
      '/taobao/40ml-foil-capsule-and-packing-machine/O1CN01Mjj8FW24iFRrwymo2_--2218032007424.jpg',
      '/taobao/40ml-foil-capsule-and-packing-machine/O1CN015e6J4v24iFRt16MO6_--2218032007424.jpg',
      '/taobao/40ml-foil-capsule-and-packing-machine/O1CN01LbEryP24iFRtJd2YD_--2218032007424.jpg',
      '/taobao/40ml-foil-capsule-and-packing-machine/O1CN01BKsGJo24iFRsC77Qf_--2218032007424.jpg'
    ],
    badge: '♻️ 100% Recyclable Foil',
    rating: 4.9,
    reviews: 124,
    inStock: true,
    turnaround: '5-7 days',
    minOrder: 10,
    shape: 'Round Foil Capsule & Heat Sealer',
    material: '100% Recyclable Food-Grade Aluminum Foil',
    basePrice: 10.00,
    pricePerPiece: 0.20,
    minQuantity: 10,
    quantityStep: 10,
    sizeInfo: '40ml (Top 57mm, Bottom 37mm, Height 30mm)',
    shelfLife: 'Indefinite',
    certification: 'FDA Food-Grade High-Barrier Compliance',
    sizeVariants: [
      {
        id: 'capsule-empty-50sets',
        label: '50 Sets Empty Cups & Sealing Lids (No Machine)',
        dimensions: '40ml (Top 57mm, Bottom 37mm, Height 30mm)',
        hasHole: false,
        quantity: 50,
        totalPrice: 10.00,
        unitPrice: 0.20,
        heroImageIndex: 9
      },
      {
        id: 'capsule-empty-100sets',
        label: '100 Sets Empty Cups & Sealing Lids (No Machine)',
        dimensions: '40ml (Top 57mm, Bottom 37mm, Height 30mm)',
        hasHole: false,
        quantity: 100,
        totalPrice: 17.90,
        unitPrice: 0.179,
        heroImageIndex: 10
      },
      {
        id: 'capsule-empty-200sets',
        label: '200 Sets Empty Cups & Sealing Lids (No Machine)',
        dimensions: '40ml (Top 57mm, Bottom 37mm, Height 30mm)',
        hasHole: false,
        quantity: 200,
        totalPrice: 32.40,
        unitPrice: 0.162,
        heroImageIndex: 11
      },
      {
        id: 'capsule-starter-white',
        label: 'Starter Kit: White Sealer + 10 Sets Cups & Lids',
        dimensions: 'Sealer × 1 + 10 Sets Cups & Lids + Tools',
        hasHole: false,
        quantity: 10,
        totalPrice: 21.20,
        unitPrice: 2.12,
        heroImageIndex: 5
      },
      {
        id: 'capsule-starter-black',
        label: 'Starter Kit: Black Sealer + 10 Sets Cups & Lids',
        dimensions: 'Sealer × 1 + 10 Sets Cups & Lids + Tools',
        hasHole: false,
        quantity: 10,
        totalPrice: 21.20,
        unitPrice: 2.12,
        heroImageIndex: 6
      },
      {
        id: 'capsule-pro-white',
        label: 'Pro Kit: White Sealer + 50 Sets Cups & Lids',
        dimensions: 'Sealer × 1 + 50 Sets Cups & Lids + Tools',
        hasHole: false,
        quantity: 50,
        totalPrice: 32.40,
        unitPrice: 0.648,
        heroImageIndex: 7
      },
      {
        id: 'capsule-pro-black',
        label: 'Pro Kit: Black Sealer + 50 Sets Cups & Lids',
        dimensions: 'Sealer × 1 + 50 Sets Cups & Lids + Tools',
        hasHole: false,
        quantity: 50,
        totalPrice: 32.40,
        unitPrice: 0.648,
        heroImageIndex: 8
      }
    ],
    customPrintNote: 'Custom prints available from 10,000+ pieces. Please consult our team.'
  },
  // 100% Recyclable PE Wire Cut Zipper Bag
  {
    id: '100-recyclable-pe-wire-cut-zipper-bag',
    name: '100% Recyclable PE Wire Cut Zipper Bag',
    category: 'eco-stock',
    description: '100% recyclable, high-clarity, food-grade PE wire-cut zipper bags. Designed for secure, eco-friendly storage and organization. Features a high-transparency finish, an ultra-strong concave-convex bite-lock zipper, and clean, durable wire-cut heat-sealed edges. Made from premium virgin polyethylene materials without any standard plastic additives, fully compliant with global food-contact safety standards and completely recyclable. Perfect for dry foods, accessories, components, and retail goods.',
    shortDesc: 'High-clarity food-grade recyclable PE wire-cut zipper bag',
    features: [
      '100% Recyclable Food-Grade PE Material',
      'High Transparency & Glass-Like Clarity',
      'Strong Concave-Convex Bite-Lock Zipper',
      'Neat & Clean Wire-Cut Heat-Sealed Edges',
      'FDA & LFGB Food Safety Compliant'
    ],
    images: [
      '/taobao/100-Recyclable-PE-wire-cut-zipper-bag/dimensions_guide.png',
      '/taobao/100-Recyclable-PE-wire-cut-zipper-bag/measurement_guide.png',
      '/taobao/100-Recyclable-PE-wire-cut-zipper-bag/size_analysis.png'
    ],
    badge: '♻️ 100% Recyclable',
    rating: 4.8,
    reviews: 96,
    inStock: true,
    turnaround: '5-7 days',
    minOrder: 1000,
    shape: 'Flat Wire-Cut Zipper Bag',
    material: '100% Recyclable Food-Grade PE - High Transparency',
    basePrice: 14.00,
    pricePerPiece: 0.014,
    minQuantity: 1000,
    quantityStep: 1000,
    sizeInfo: 'Multiple dimensions available (7x10cm to 24x35cm)',
    shelfLife: 'Indefinite (store in cool, dry place)',
    certification: 'FDA & LFGB Food Safety Compliant',
    sizeVariants: [
      {
        id: 'pe-wire-cut-zipper-7x10',
        label: '7x10cm (1000pcs)',
        dimensions: '70 × 100 mm, Double 100 micron',
        hasHole: false,
        quantity: 1000,
        totalPrice: 14.00,
        unitPrice: 0.014,
        heroImageIndex: 0
      },
      {
        id: 'pe-wire-cut-zipper-10x15',
        label: '10x15cm (1000pcs)',
        dimensions: '100 × 150 mm, Double 100 micron',
        hasHole: false,
        quantity: 1000,
        totalPrice: 25.20,
        unitPrice: 0.025,
        heroImageIndex: 0
      },
      {
        id: 'pe-wire-cut-zipper-11x16',
        label: '11x16cm (1000pcs)',
        dimensions: '110 × 160 mm, Double 100 micron',
        hasHole: false,
        quantity: 1000,
        totalPrice: 30.80,
        unitPrice: 0.031,
        heroImageIndex: 1
      },
      {
        id: 'pe-wire-cut-zipper-15x22',
        label: '15x22cm (1000pcs)',
        dimensions: '150 × 220 mm, Double 100 micron',
        hasHole: false,
        quantity: 1000,
        totalPrice: 58.70,
        unitPrice: 0.059,
        heroImageIndex: 0
      },
      {
        id: 'pe-wire-cut-zipper-18x26',
        label: '18x26cm (1000pcs)',
        dimensions: '180 × 260 mm, Double 100 micron',
        hasHole: false,
        quantity: 1000,
        totalPrice: 86.70,
        unitPrice: 0.087,
        heroImageIndex: 0
      },
      {
        id: 'pe-wire-cut-zipper-20x30',
        label: '20x30cm (1000pcs)',
        dimensions: '200 × 300 mm, Double 100 micron',
        hasHole: false,
        quantity: 1000,
        totalPrice: 123.10,
        unitPrice: 0.123,
        heroImageIndex: 2
      },
      {
        id: 'pe-wire-cut-zipper-24x35',
        label: '24x35cm (1000pcs)',
        dimensions: '240 × 350 mm, Double 100 micron',
        hasHole: false,
        quantity: 1000,
        totalPrice: 179.00,
        unitPrice: 0.179,
        heroImageIndex: 0
      }
    ],
    customPrintNote: 'Custom prints available from 100+ pieces. Please consult our team.'
  },
  // Unprinted White Kraft Compostable & Biodegradable Stand Up Pouch
  {
    id: 'unprinted-white-kraft-compostable-and-biodegrable-zipper-stand-up-pouch',
    name: 'Unprinted White Kraft Compostable and Biodegradable Zipper Stand Up Pouch',
    category: 'eco-stock',
    description: '100% certified compostable and biodegradable stand-up pouch made of premium natural white kraft paper and high-barrier compostable plant-based bio-films. Features a strong resealable airtight zipper, tear notches for easy opening, and a stable bottom gusset. Zero PE, zero standard plastics — fully compliant with BPI, OK Compost, and Din Certco composting standards for eco-friendly product packaging.',
    shortDesc: 'Premium eco-friendly white kraft stand-up zipper pouch',
    features: [
      '100% Certified Compostable & Biodegradable',
      'Premium Natural White Kraft Paper Finish',
      'High-Barrier Plant-Based Eco Protection',
      'Strong Airtight Resealable Zipper',
      'Sturdy Bottom Gusset for Perfect Shelf Presentation'
    ],
    images: [
      '/taobao/unprinted-white-kraft-compostable-and-biodegrable-zipper-stand-up-pouch/O1CN01RyFIDP1fZfY0LyJa9_--454021.jpg',
      '/taobao/unprinted-white-kraft-compostable-and-biodegrable-zipper-stand-up-pouch/O1CN01eHA4yL1fZfXwloFvL_--454021.jpg',
      '/taobao/unprinted-white-kraft-compostable-and-biodegrable-zipper-stand-up-pouch/O1CN01XFvHP41fZfXz3dsKS_--454021.jpg',
      '/taobao/unprinted-white-kraft-compostable-and-biodegrable-zipper-stand-up-pouch/O1CN01EEW3Dt1fZfXwguPMa_--454021.jpg',
      '/taobao/unprinted-white-kraft-compostable-and-biodegrable-zipper-stand-up-pouch/O1CN01GNksHq1fZfXvxmVXy_--454021.jpg',
      '/taobao/unprinted-white-kraft-compostable-and-biodegrable-zipper-stand-up-pouch/O1CN01ZQ2gxP1fZfY0LxVg1_--454021.jpg',
      '/taobao/unprinted-white-kraft-compostable-and-biodegrable-zipper-stand-up-pouch/O1CN01zPXxOU1fZfXvxmuVq_--454021.jpg',
      '/taobao/unprinted-white-kraft-compostable-and-biodegrable-zipper-stand-up-pouch/O1CN01icajyH1fZfXwgtP29_--454021.jpg',
      '/taobao/unprinted-white-kraft-compostable-and-biodegrable-zipper-stand-up-pouch/O1CN01NdoNqa1fZfXu8usQy_--454021.jpg',
      '/taobao/unprinted-white-kraft-compostable-and-biodegrable-zipper-stand-up-pouch/O1CN01DSbOkX1fZfXy023tK_--454021.jpg',
      '/taobao/unprinted-white-kraft-compostable-and-biodegrable-zipper-stand-up-pouch/O1CN01GjOs7y1fZfXolWfNN_--454021.jpg',
      '/taobao/unprinted-white-kraft-compostable-and-biodegrable-zipper-stand-up-pouch/O1CN01TqHetj1fZfXz3cw5j_--454021.jpg',
      '/taobao/unprinted-white-kraft-compostable-and-biodegrable-zipper-stand-up-pouch/O1CN01W0pHh61fZfXyryEEY_--454021.jpg',
      '/taobao/unprinted-white-kraft-compostable-and-biodegrable-zipper-stand-up-pouch/O1CN01tja5Es1fZfcv1xCzI_--454021.jpg',
      '/taobao/unprinted-white-kraft-compostable-and-biodegrable-zipper-stand-up-pouch/O1CN01yzfwfN1fZfY0LyqrH_--454021.jpg'
    ],
    badge: '🌱 100% Compostable',
    rating: 4.9,
    reviews: 24,
    inStock: true,
    turnaround: '5-7 days',
    minOrder: 100,
    shape: 'Stand Up Zipper Pouch',
    material: 'Certified White Kraft / PLA / PBAT - 100% Compostable High Barrier',
    basePrice: 9.23,
    pricePerPiece: 0.092,
    minQuantity: 100,
    quantityStep: 100,
    sizeInfo: 'Multiple dimensions available (10x10cm to 20x27cm)',
    shelfLife: '12 months freshness',
    certification: 'BPI & OK Compost Certified',
    sizeVariants: [
      {
        id: 'white-kraft-compostable-sup-10x10',
        label: '10x10+2.5cm (100pcs)',
        dimensions: '100 × 100 + 25 mm',
        hasHole: false,
        quantity: 100,
        totalPrice: 9.23,
        unitPrice: 0.092,
        heroImageIndex: 6
      },
      {
        id: 'white-kraft-compostable-sup-15x20',
        label: '15x20+2.5cm (100pcs)',
        dimensions: '150 × 200 + 25 mm',
        hasHole: false,
        quantity: 100,
        totalPrice: 22.38,
        unitPrice: 0.224,
        heroImageIndex: 7
      },
      {
        id: 'white-kraft-compostable-sup-18x23',
        label: '18x23+3cm (100pcs)',
        dimensions: '180 × 230 + 30 mm',
        hasHole: false,
        quantity: 100,
        totalPrice: 29.37,
        unitPrice: 0.294,
        heroImageIndex: 8
      },
      {
        id: 'white-kraft-compostable-sup-20x27',
        label: '20x27+3cm (100pcs)',
        dimensions: '200 × 270 + 30 mm',
        hasHole: false,
        quantity: 100,
        totalPrice: 36.36,
        unitPrice: 0.364,
        heroImageIndex: 9
      }
    ],
    customPrintNote: 'Custom prints available from 100+ pieces. Please consult our team.',
  },
  // Compostable Flat Bottom Pouch - Kraft
  {
    id: 'eco-stock-flatbottom-kraft',
    name: 'Compostable Flat Bottom Pouch – Natural Kraft',
    category: 'eco-stock',
    description: '100% compostable flat bottom pouch with natural kraft finish. Made from plant-based materials that break down in industrial composting facilities. Features one-sided zipper for resealability.',
    shortDesc: 'From US$1000 for 1000 pcs',
    features: ['100% Compostable', 'Industrial Composting Certified', 'High Barrier (+12 months)', 'One-Sided Zipper', 'Natural Kraft Finish'],
    images: [
      '/imgs/store/eco-stock/flat-bottom/kraft/1.webp',
      '/imgs/store/eco-stock/flat-bottom/kraft/2.webp',
      '/imgs/store/eco-stock/flat-bottom/kraft/3.webp',
      '/imgs/store/eco-stock/flat-bottom/kraft/4.webp',
      '/imgs/store/eco-stock/flat-bottom/kraft/5.webp'
    ],
    badge: '🌱 100% Compostable',
    rating: 4.9,
    reviews: 178,
    inStock: true,
    turnaround: '5-7 days',
    minOrder: 1000,
    shape: 'Flat Squared Bottom Pouch',
    material: 'Natural Kraft - High Barrier (Matte)',
    basePrice: 1000,
    pricePerPiece: 1.00,
    minQuantity: 1000,
    quantityStep: 500,
    sizeInfo: '160mm x 150mm + 70mm (approx. 6.3" x 5.9" + 2.8")',
    shelfLife: '+12 months',
    customPrintNote: 'Custom print available for orders of 5,000+ pcs per design. Contact us for details.',
    videoUrl: 'https://youtu.be/xKusl5lOEYM',
  },
  // Compostable Flat Bottom Pouch - Clear
  {
    id: 'eco-stock-flatbottom-clear',
    name: 'Compostable Flat Bottom Pouch – Milky Clear',
    category: 'eco-stock',
    description: '100% compostable flat bottom pouch with milky clear finish for product visibility. Made from plant-based materials with industrial composting certification. Features one-sided zipper for convenience.',
    shortDesc: 'From US$1000 for 1000 pcs',
    features: ['100% Compostable', 'Industrial Composting Certified', 'High Barrier (+12 months)', 'One-Sided Zipper', 'Milky Clear Finish'],
    images: [
      '/imgs/store/eco-stock/flat-bottom/clear/1.webp',
      '/imgs/store/eco-stock/flat-bottom/clear/2.webp',
      '/imgs/store/eco-stock/flat-bottom/clear/3.webp',
      '/imgs/store/eco-stock/flat-bottom/clear/4.webp',
      '/imgs/store/eco-stock/flat-bottom/clear/5.webp'
    ],
    badge: '🌱 100% Compostable',
    rating: 4.8,
    reviews: 156,
    inStock: true,
    turnaround: '5-7 days',
    minOrder: 1000,
    shape: 'Flat Squared Bottom Pouch',
    material: 'Milky Clear - High Barrier (Glossy)',
    basePrice: 1000,
    pricePerPiece: 1.00,
    minQuantity: 1000,
    quantityStep: 500,
    sizeInfo: '160mm x 150mm + 70mm (approx. 6.3" x 5.9" + 2.8")',
    shelfLife: '+12 months',
    customPrintNote: 'Custom print available for orders of 5,000+ pcs per design. Contact us for details.',
    videoUrl: 'https://youtu.be/xKusl5lOEYM',
  },
  // Compostable Header Bag with Adhesive
  {
    id: 'eco-stock-header-adhesive',
    name: 'Compostable Gusseted Bag with Adhesive Header',
    category: 'eco-stock',
    description: '100% certified compostable gusseted bag with adhesive header for secure sealing. Made from plant-based materials. Price includes air shipping. Multiple sizes available with optional hanging hole.',
    shortDesc: 'From US$5.56 for 100 pcs',
    features: ['100% Certified Compostable', 'Adhesive Header Closure', 'Gusseted Design', 'Air Shipping Included', 'Optional Hanging Hole'],
    images: [
      '/imgs/store/eco-stock/header/adhesive/v1/1.webp',
      '/imgs/store/eco-stock/header/adhesive/v1/2.webp',
      '/imgs/store/eco-stock/header/adhesive/v1/3.webp',
      '/imgs/store/eco-stock/header/adhesive/v1/4.webp',
      '/imgs/store/eco-stock/header/adhesive/v1/5.webp',
      '/imgs/store/eco-stock/header/adhesive/v2/a_hero_kv_unprinted_milky_7789289.webp',
      '/imgs/store/eco-stock/header/adhesive/v2/a_comparison_unprinted_milky_3707943.webp',
      '/imgs/store/eco-stock/header/adhesive/v2/a_seal_detail_unprinted_0724101.webp',
      '/imgs/store/eco-stock/header/adhesive/v2/a_durability_test_unprinted_7520599.webp',
      '/imgs/store/eco-stock/header/adhesive/v2/a_unboxing_unprinted_milky_3877400.webp',
      '/imgs/store/eco-stock/header/adhesive/v2/a_disposal_unprinted_milky_9571422.webp',
      '/imgs/store/eco-stock/header/adhesive/v2/a_earth_return_unprinted_1676760.webp',
      '/imgs/store/eco-stock/header/adhesive/v2/a_custom_printing_unprinted_4919263.webp'
    ],
    badge: '🌱 Certified Compostable',
    rating: 4.9,
    reviews: 89,
    inStock: true,
    turnaround: '5-7 days',
    minOrder: 100,
    shape: 'Header Bag',
    material: 'Compostable Bio-film',
    basePrice: 5.56,
    pricePerPiece: 0.056,
    minQuantity: 100,
    quantityStep: 100,
    sizeInfo: 'Multiple sizes available',
    sizeVariants: [
      { id: 'size-xl', label: 'XL (35×45cm)', dimensions: '35 × (41+4) cm, 100 micron', hasHole: true, quantity: 100, totalPrice: 35.28, unitPrice: 0.352 },
      { id: 'size-l', label: 'L (24×38cm)', dimensions: '24 × (34+4) cm, 100 micron', hasHole: true, quantity: 100, totalPrice: 18.54, unitPrice: 0.186 },
      { id: 'size-m', label: 'M (20×30cm)', dimensions: '20 × (26+4) cm, 100 micron', hasHole: true, quantity: 100, totalPrice: 12.02, unitPrice: 0.120 },
      { id: 'size-s', label: 'S (17×22.5cm)', dimensions: '17 × (19.5+3) cm, 100 micron', hasHole: false, quantity: 100, totalPrice: 7.66, unitPrice: 0.076 },
      { id: 'size-xs', label: 'XS (14×20cm)', dimensions: '14 × (17+3) cm, 100 micron', hasHole: false, quantity: 100, totalPrice: 5.56, unitPrice: 0.056 },
    ],
    customPrintNote: 'Custom print available for orders of 5,000+ pcs per design. Contact us for details.',
    // Link to custom print version
    customPrintProductId: 'eco-stock-header-adhesive-custom',
  },
  // Custom Printed Compostable Header Bag with Adhesive
  {
    id: 'eco-stock-header-adhesive-custom',
    name: 'Custom Printed Compostable Gusseted Bag with Adhesive Header',
    category: 'eco-stock',
    description: 'Custom printed 100% certified compostable gusseted bag with adhesive header. Full-color digital printing available. MOQ 5,000 pcs per design. Volume discounts available up to 50,000 pcs.',
    shortDesc: 'From US$0.112/pc for 5,000 pcs',
    features: ['Full Color Digital Printing', '100% Certified Compostable', 'Adhesive Header Closure', 'Volume Discounts Available', 'Free Design Support'],
    images: [
      '/imgs/store/eco-stock/header/adhesive/custom print/a_hero_kv_compost_mailer_transparent_5939909.webp',
      '/imgs/store/eco-stock/header/adhesive/custom print/a_custom_printing_showcase_transparent_0406760.webp',
      '/imgs/store/eco-stock/header/adhesive/custom print/a_comparison_compostable_transparent_7910662.webp',
      '/imgs/store/eco-stock/header/adhesive/custom print/a_compost_mailer_seal_detail_closeup_3236876.webp',
      '/imgs/store/eco-stock/header/adhesive/custom print/a_durability_test_material_pull_6142959.webp',
      '/imgs/store/eco-stock/header/adhesive/custom print/a_unboxing_scene_transparent_mailer_7400547.webp',
      '/imgs/store/eco-stock/header/adhesive/custom print/a_ecommerce_packing_scene_transparent_8524468.webp',
      '/imgs/store/eco-stock/header/adhesive/custom print/a_disposal_instructions_transparent_mailer_4494569.webp',
      '/imgs/store/eco-stock/header/adhesive/custom print/a_brand_closing_earth_return_transparent_9888178.webp'
    ],
    badge: '🎨 Custom Print',
    rating: 4.9,
    reviews: 67,
    inStock: true,
    turnaround: '15-20 days',
    minOrder: 5000,
    shape: 'Header Bag',
    material: 'Compostable Bio-film',
    basePrice: 560,
    pricePerPiece: 0.112,
    minQuantity: 5000,
    quantityStep: 5000,
    sizeInfo: 'Multiple sizes available',
    // Custom print pricing: Unit price = Unprinted × 2, 10% discount per additional 5000 pcs up to 50000
    sizeWithQuantities: [
      { id: 'size-xl', label: 'XL (35×45cm)', dimensions: '35 × (41+4) cm, 100 micron', quantityOptions: [
        { quantity: 5000, unitPrice: 0.704, totalPrice: 3520 },
        { quantity: 10000, unitPrice: 0.634, totalPrice: 6336 },
        { quantity: 15000, unitPrice: 0.570, totalPrice: 8554 },
        { quantity: 20000, unitPrice: 0.513, totalPrice: 10266 },
        { quantity: 25000, unitPrice: 0.462, totalPrice: 11546 },
        { quantity: 30000, unitPrice: 0.416, totalPrice: 12470 },
        { quantity: 35000, unitPrice: 0.374, totalPrice: 13098 },
        { quantity: 40000, unitPrice: 0.337, totalPrice: 13469 },
        { quantity: 45000, unitPrice: 0.303, totalPrice: 13630 },
        { quantity: 50000, unitPrice: 0.273, totalPrice: 13637 }
      ]},
      { id: 'size-l', label: 'L (24×38cm)', dimensions: '24 × (34+4) cm, 100 micron', quantityOptions: [
        { quantity: 5000, unitPrice: 0.372, totalPrice: 1860 },
        { quantity: 10000, unitPrice: 0.335, totalPrice: 3348 },
        { quantity: 15000, unitPrice: 0.301, totalPrice: 4519 },
        { quantity: 20000, unitPrice: 0.271, totalPrice: 5423 },
        { quantity: 25000, unitPrice: 0.244, totalPrice: 6103 },
        { quantity: 30000, unitPrice: 0.220, totalPrice: 6588 },
        { quantity: 35000, unitPrice: 0.198, totalPrice: 6919 },
        { quantity: 40000, unitPrice: 0.178, totalPrice: 7115 },
        { quantity: 45000, unitPrice: 0.160, totalPrice: 7200 },
        { quantity: 50000, unitPrice: 0.144, totalPrice: 7204 }
      ]},
      { id: 'size-m', label: 'M (20×30cm)', dimensions: '20 × (26+4) cm, 100 micron', quantityOptions: [
        { quantity: 5000, unitPrice: 0.240, totalPrice: 1200 },
        { quantity: 10000, unitPrice: 0.216, totalPrice: 2160 },
        { quantity: 15000, unitPrice: 0.194, totalPrice: 2916 },
        { quantity: 20000, unitPrice: 0.175, totalPrice: 3499 },
        { quantity: 25000, unitPrice: 0.157, totalPrice: 3937 },
        { quantity: 30000, unitPrice: 0.142, totalPrice: 4252 },
        { quantity: 35000, unitPrice: 0.128, totalPrice: 4464 },
        { quantity: 40000, unitPrice: 0.115, totalPrice: 4591 },
        { quantity: 45000, unitPrice: 0.103, totalPrice: 4646 },
        { quantity: 50000, unitPrice: 0.093, totalPrice: 4649 }
      ]},
      { id: 'size-s', label: 'S (17×22.5cm)', dimensions: '17 × (19.5+3) cm, 100 micron', quantityOptions: [
        { quantity: 5000, unitPrice: 0.152, totalPrice: 760 },
        { quantity: 10000, unitPrice: 0.137, totalPrice: 1368 },
        { quantity: 15000, unitPrice: 0.123, totalPrice: 1847 },
        { quantity: 20000, unitPrice: 0.111, totalPrice: 2216 },
        { quantity: 25000, unitPrice: 0.100, totalPrice: 2493 },
        { quantity: 30000, unitPrice: 0.090, totalPrice: 2693 },
        { quantity: 35000, unitPrice: 0.081, totalPrice: 2827 },
        { quantity: 40000, unitPrice: 0.073, totalPrice: 2908 },
        { quantity: 45000, unitPrice: 0.065, totalPrice: 2942 },
        { quantity: 50000, unitPrice: 0.059, totalPrice: 2944 }
      ]},
      { id: 'size-xs', label: 'XS (14×20cm)', dimensions: '14 × (17+3) cm, 100 micron', quantityOptions: [
        { quantity: 5000, unitPrice: 0.112, totalPrice: 560 },
        { quantity: 10000, unitPrice: 0.101, totalPrice: 1008 },
        { quantity: 15000, unitPrice: 0.091, totalPrice: 1361 },
        { quantity: 20000, unitPrice: 0.082, totalPrice: 1633 },
        { quantity: 25000, unitPrice: 0.073, totalPrice: 1837 },
        { quantity: 30000, unitPrice: 0.066, totalPrice: 1984 },
        { quantity: 35000, unitPrice: 0.060, totalPrice: 2083 },
        { quantity: 40000, unitPrice: 0.054, totalPrice: 2143 },
        { quantity: 45000, unitPrice: 0.048, totalPrice: 2168 },
        { quantity: 50000, unitPrice: 0.043, totalPrice: 2170 }
      ]}
    ],
    // Link back to stock version
    stockProductId: 'eco-stock-header-adhesive',
  },
  // Compostable Resealable Mailer Bag
  {
    id: 'eco-stock-mailer-zipbag',
    name: 'Compostable Resealable Mailer Bag',
    category: 'eco-stock',
    description: '100% biodegradable resealable mailer bag made from PLA+PBAT. Features durable zip-lock closure for multiple uses, moisture and dust protection. Certified compostable - decomposes in 3 months (industrial) or 1-2 years (natural conditions).',
    shortDesc: 'From US$5.83 for 400 pcs',
    features: ['100% Biodegradable (PLA+PBAT)', 'Resealable Zip-Lock', 'Moisture & Dust Protection', 'Reusable Design', 'GB/T35795-2017 Certified'],
    images: [
      '/imgs/store/eco-stock/mailer/zip bag/1.webp',
      '/imgs/store/eco-stock/mailer/zip bag/2.webp',
      '/imgs/store/eco-stock/mailer/zip bag/3.webp',
      '/imgs/store/eco-stock/mailer/zip bag/4.webp',
      '/imgs/store/eco-stock/mailer/zip bag/5.webp'
    ],
    badge: '🌱 Fully Biodegradable',
    rating: 4.9,
    reviews: 124,
    inStock: true,
    turnaround: '5-7 days',
    minOrder: 400,
    shape: 'Mailer Bag',
    material: 'PLA+PBAT (Fully Biodegradable), 140 micron',
    basePrice: 5.83,
    pricePerPiece: 0.0146,
    minQuantity: 400,
    quantityStep: 400,
    sizeInfo: 'Multiple sizes available (7cm - 35cm)',
    sizeWithQuantities: [
      { id: 'size-7x10', label: '7×10cm', dimensions: '7×10cm, 140 micron', quantityOptions: [
        { quantity: 400, totalPrice: 5.83, unitPrice: 0.0146 },
        { quantity: 2000, totalPrice: 26.83, unitPrice: 0.0134 },
        { quantity: 4000, totalPrice: 49.61, unitPrice: 0.0124 }
      ]},
      { id: 'size-8x12', label: '8×12cm', dimensions: '8×12cm, 140 micron', quantityOptions: [
        { quantity: 400, totalPrice: 6.94, unitPrice: 0.0174 },
        { quantity: 2000, totalPrice: 31.94, unitPrice: 0.0160 },
        { quantity: 4000, totalPrice: 59.06, unitPrice: 0.0148 }
      ]},
      { id: 'size-9x13', label: '9×13cm', dimensions: '9×13cm, 140 micron', quantityOptions: [
        { quantity: 400, totalPrice: 8.33, unitPrice: 0.0208 },
        { quantity: 2000, totalPrice: 38.33, unitPrice: 0.0192 },
        { quantity: 4000, totalPrice: 70.83, unitPrice: 0.0177 }
      ]},
      { id: 'size-10x15', label: '10×15cm', dimensions: '10×15cm, 140 micron', quantityOptions: [
        { quantity: 400, totalPrice: 10.00, unitPrice: 0.0250 },
        { quantity: 2000, totalPrice: 46.00, unitPrice: 0.0230 },
        { quantity: 4000, totalPrice: 85.00, unitPrice: 0.0213 }
      ]},
      { id: 'size-11x16', label: '11×16cm', dimensions: '11×16cm, 140 micron', quantityOptions: [
        { quantity: 400, totalPrice: 12.78, unitPrice: 0.0319 },
        { quantity: 2000, totalPrice: 62.22, unitPrice: 0.0311 },
        { quantity: 4000, totalPrice: 120.44, unitPrice: 0.0301 }
      ]},
      { id: 'size-12x17', label: '12×17cm', dimensions: '12×17cm, 140 micron', quantityOptions: [
        { quantity: 400, totalPrice: 13.89, unitPrice: 0.0347 },
        { quantity: 2000, totalPrice: 68.78, unitPrice: 0.0344 },
        { quantity: 4000, totalPrice: 127.06, unitPrice: 0.0318 }
      ]},
      { id: 'size-13x19', label: '13×19cm', dimensions: '13×19cm, 140 micron', quantityOptions: [
        { quantity: 400, totalPrice: 14.44, unitPrice: 0.0361 },
        { quantity: 2000, totalPrice: 71.11, unitPrice: 0.0356 },
        { quantity: 4000, totalPrice: 132.22, unitPrice: 0.0331 }
      ]},
      { id: 'size-14x20', label: '14×20cm', dimensions: '14×20cm, 140 micron', quantityOptions: [
        { quantity: 400, totalPrice: 15.56, unitPrice: 0.0389 },
        { quantity: 2000, totalPrice: 75.00, unitPrice: 0.0375 },
        { quantity: 4000, totalPrice: 139.33, unitPrice: 0.0348 }
      ]},
      { id: 'size-15x22', label: '15×22cm', dimensions: '15×22cm, 140 micron', quantityOptions: [
        { quantity: 400, totalPrice: 18.33, unitPrice: 0.0458 },
        { quantity: 2000, totalPrice: 90.00, unitPrice: 0.0450 },
        { quantity: 4000, totalPrice: 167.64, unitPrice: 0.0419 }
      ]},
      { id: 'size-16x24', label: '16×24cm', dimensions: '16×24cm, 140 micron', quantityOptions: [
        { quantity: 400, totalPrice: 20.00, unitPrice: 0.0500 },
        { quantity: 2000, totalPrice: 96.11, unitPrice: 0.0481 },
        { quantity: 4000, totalPrice: 179.44, unitPrice: 0.0449 }
      ]},
      { id: 'size-17x25', label: '17×25cm', dimensions: '17×25cm, 140 micron', quantityOptions: [
        { quantity: 400, totalPrice: 22.22, unitPrice: 0.0556 },
        { quantity: 2000, totalPrice: 108.89, unitPrice: 0.0544 },
        { quantity: 4000, totalPrice: 203.06, unitPrice: 0.0508 }
      ]},
      { id: 'size-18x26', label: '18×26cm', dimensions: '18×26cm, 140 micron', quantityOptions: [
        { quantity: 400, totalPrice: 25.00, unitPrice: 0.0625 },
        { quantity: 2000, totalPrice: 124.44, unitPrice: 0.0622 },
        { quantity: 4000, totalPrice: 231.39, unitPrice: 0.0578 }
      ]},
      { id: 'size-20x28', label: '20×28cm', dimensions: '20×28cm, 140 micron', quantityOptions: [
        { quantity: 400, totalPrice: 28.33, unitPrice: 0.0708 },
        { quantity: 2000, totalPrice: 141.67, unitPrice: 0.0708 },
        { quantity: 4000, totalPrice: 264.44, unitPrice: 0.0661 }
      ]},
      { id: 'size-22x32', label: '22×32cm', dimensions: '22×32cm, 140 micron', quantityOptions: [
        { quantity: 400, totalPrice: 35.56, unitPrice: 0.0889 },
        { quantity: 2000, totalPrice: 176.67, unitPrice: 0.0883 },
        { quantity: 4000, totalPrice: 328.19, unitPrice: 0.0820 }
      ]},
      { id: 'size-24x35', label: '24×35cm', dimensions: '24×35cm, 140 micron', quantityOptions: [
        { quantity: 400, totalPrice: 42.22, unitPrice: 0.1056 },
        { quantity: 2000, totalPrice: 210.00, unitPrice: 0.1050 },
        { quantity: 4000, totalPrice: 391.94, unitPrice: 0.0980 }
      ]},
    ],
    customPrintNote: 'Custom print available for orders of 5,000+ pcs per design. Contact us for details.',
    videoUrl: 'https://youtu.be/rqAtUbtzOuY',
    customPrintProductId: 'eco-stock-mailer-zipbag-custom',
  },
  // Compostable Resealable Mailer Bag - Custom Print Version
  {
    id: 'eco-stock-mailer-zipbag-custom',
    name: 'Custom Printed Compostable Mailer Bag',
    category: 'eco-stock',
    description: 'Custom printed 100% biodegradable resealable mailer bag made from PLA+PBAT. Full-color printing with your brand logo and design. Features durable zip-lock closure for multiple uses, moisture and dust protection. Certified compostable.',
    shortDesc: 'From US$124 for 5,000 pcs',
    features: ['Full-Color Custom Printing', '100% Biodegradable (PLA+PBAT)', 'Resealable Zip-Lock', 'Moisture & Dust Protection', 'MOQ 5,000 pcs per size'],
    images: [
      '/imgs/store/eco-stock/mailer/custom-print/a_custom_printing_showcase_transparent_0406760.webp',
      '/imgs/store/eco-stock/mailer/custom-print/a_comparison_compostable_transparent_7910662.webp',
      '/imgs/store/eco-stock/mailer/custom-print/a_durability_test_material_pull_6142959.webp',
      '/imgs/store/eco-stock/mailer/custom-print/944af2cf-100b-4861-868e-be855852b5f7_upscayl_3x_upscayl-standard-4x.webp',
      '/imgs/store/eco-stock/mailer/custom-print/447849b2-65ea-49fb-86de-1278a636c795_upscayl_3x_upscayl-standard-4x.webp'
    ],
    badge: '🎨 Custom Print',
    rating: 4.9,
    reviews: 87,
    inStock: true,
    turnaround: '15-20 days',
    minOrder: 5000,
    shape: 'Mailer Bag',
    material: 'PLA+PBAT (Fully Biodegradable), 140 micron',
    basePrice: 124.00,
    pricePerPiece: 0.0248,
    minQuantity: 5000,
    quantityStep: 5000,
    sizeInfo: 'Multiple sizes available (7cm - 35cm)',
    sizeWithQuantities: [
      // 7×10cm: base unit price = 0.0124 * 2 = 0.0248
      { id: 'size-7x10', label: '7×10cm', dimensions: '7×10cm, 140 micron', quantityOptions: [
        { quantity: 5000, totalPrice: 124.00, unitPrice: 0.0248 },
        { quantity: 10000, totalPrice: 223.20, unitPrice: 0.0223 },
        { quantity: 15000, totalPrice: 297.60, unitPrice: 0.0198 },
        { quantity: 20000, totalPrice: 347.20, unitPrice: 0.0174 },
        { quantity: 25000, totalPrice: 372.00, unitPrice: 0.0149 },
        { quantity: 30000, totalPrice: 372.00, unitPrice: 0.0124 },
        { quantity: 40000, totalPrice: 496.00, unitPrice: 0.0124 },
        { quantity: 50000, totalPrice: 620.00, unitPrice: 0.0124 }
      ]},
      // 8×12cm: base unit price = 0.0148 * 2 = 0.0296
      { id: 'size-8x12', label: '8×12cm', dimensions: '8×12cm, 140 micron', quantityOptions: [
        { quantity: 5000, totalPrice: 148.00, unitPrice: 0.0296 },
        { quantity: 10000, totalPrice: 266.40, unitPrice: 0.0266 },
        { quantity: 15000, totalPrice: 355.20, unitPrice: 0.0237 },
        { quantity: 20000, totalPrice: 414.40, unitPrice: 0.0207 },
        { quantity: 25000, totalPrice: 444.00, unitPrice: 0.0178 },
        { quantity: 30000, totalPrice: 444.00, unitPrice: 0.0148 },
        { quantity: 40000, totalPrice: 592.00, unitPrice: 0.0148 },
        { quantity: 50000, totalPrice: 740.00, unitPrice: 0.0148 }
      ]},
      // 9×13cm: base unit price = 0.0177 * 2 = 0.0354
      { id: 'size-9x13', label: '9×13cm', dimensions: '9×13cm, 140 micron', quantityOptions: [
        { quantity: 5000, totalPrice: 177.00, unitPrice: 0.0354 },
        { quantity: 10000, totalPrice: 318.60, unitPrice: 0.0319 },
        { quantity: 15000, totalPrice: 424.80, unitPrice: 0.0283 },
        { quantity: 20000, totalPrice: 495.60, unitPrice: 0.0248 },
        { quantity: 25000, totalPrice: 531.00, unitPrice: 0.0212 },
        { quantity: 30000, totalPrice: 531.00, unitPrice: 0.0177 },
        { quantity: 40000, totalPrice: 708.00, unitPrice: 0.0177 },
        { quantity: 50000, totalPrice: 885.00, unitPrice: 0.0177 }
      ]},
      // 10×15cm: base unit price = 0.0213 * 2 = 0.0426
      { id: 'size-10x15', label: '10×15cm', dimensions: '10×15cm, 140 micron', quantityOptions: [
        { quantity: 5000, totalPrice: 213.00, unitPrice: 0.0426 },
        { quantity: 10000, totalPrice: 383.40, unitPrice: 0.0383 },
        { quantity: 15000, totalPrice: 511.20, unitPrice: 0.0341 },
        { quantity: 20000, totalPrice: 596.40, unitPrice: 0.0298 },
        { quantity: 25000, totalPrice: 639.00, unitPrice: 0.0256 },
        { quantity: 30000, totalPrice: 639.00, unitPrice: 0.0213 },
        { quantity: 40000, totalPrice: 852.00, unitPrice: 0.0213 },
        { quantity: 50000, totalPrice: 1065.00, unitPrice: 0.0213 }
      ]},
      // 11×16cm: base unit price = 0.0301 * 2 = 0.0602
      { id: 'size-11x16', label: '11×16cm', dimensions: '11×16cm, 140 micron', quantityOptions: [
        { quantity: 5000, totalPrice: 301.00, unitPrice: 0.0602 },
        { quantity: 10000, totalPrice: 541.80, unitPrice: 0.0542 },
        { quantity: 15000, totalPrice: 722.40, unitPrice: 0.0482 },
        { quantity: 20000, totalPrice: 842.80, unitPrice: 0.0421 },
        { quantity: 25000, totalPrice: 903.00, unitPrice: 0.0361 },
        { quantity: 30000, totalPrice: 903.00, unitPrice: 0.0301 },
        { quantity: 40000, totalPrice: 1204.00, unitPrice: 0.0301 },
        { quantity: 50000, totalPrice: 1505.00, unitPrice: 0.0301 }
      ]},
      // 12×17cm: base unit price = 0.0318 * 2 = 0.0636
      { id: 'size-12x17', label: '12×17cm', dimensions: '12×17cm, 140 micron', quantityOptions: [
        { quantity: 5000, totalPrice: 318.00, unitPrice: 0.0636 },
        { quantity: 10000, totalPrice: 572.40, unitPrice: 0.0572 },
        { quantity: 15000, totalPrice: 763.20, unitPrice: 0.0509 },
        { quantity: 20000, totalPrice: 890.40, unitPrice: 0.0445 },
        { quantity: 25000, totalPrice: 954.00, unitPrice: 0.0382 },
        { quantity: 30000, totalPrice: 954.00, unitPrice: 0.0318 },
        { quantity: 40000, totalPrice: 1272.00, unitPrice: 0.0318 },
        { quantity: 50000, totalPrice: 1590.00, unitPrice: 0.0318 }
      ]},
      // 13×19cm: base unit price = 0.0331 * 2 = 0.0662
      { id: 'size-13x19', label: '13×19cm', dimensions: '13×19cm, 140 micron', quantityOptions: [
        { quantity: 5000, totalPrice: 331.00, unitPrice: 0.0662 },
        { quantity: 10000, totalPrice: 595.80, unitPrice: 0.0596 },
        { quantity: 15000, totalPrice: 794.40, unitPrice: 0.0530 },
        { quantity: 20000, totalPrice: 926.80, unitPrice: 0.0463 },
        { quantity: 25000, totalPrice: 993.00, unitPrice: 0.0397 },
        { quantity: 30000, totalPrice: 993.00, unitPrice: 0.0331 },
        { quantity: 40000, totalPrice: 1324.00, unitPrice: 0.0331 },
        { quantity: 50000, totalPrice: 1655.00, unitPrice: 0.0331 }
      ]},
      // 14×20cm: base unit price = 0.0348 * 2 = 0.0696
      { id: 'size-14x20', label: '14×20cm', dimensions: '14×20cm, 140 micron', quantityOptions: [
        { quantity: 5000, totalPrice: 348.00, unitPrice: 0.0696 },
        { quantity: 10000, totalPrice: 626.40, unitPrice: 0.0626 },
        { quantity: 15000, totalPrice: 835.20, unitPrice: 0.0557 },
        { quantity: 20000, totalPrice: 974.40, unitPrice: 0.0487 },
        { quantity: 25000, totalPrice: 1044.00, unitPrice: 0.0418 },
        { quantity: 30000, totalPrice: 1044.00, unitPrice: 0.0348 },
        { quantity: 40000, totalPrice: 1392.00, unitPrice: 0.0348 },
        { quantity: 50000, totalPrice: 1740.00, unitPrice: 0.0348 }
      ]},
      // 15×22cm: base unit price = 0.0419 * 2 = 0.0838
      { id: 'size-15x22', label: '15×22cm', dimensions: '15×22cm, 140 micron', quantityOptions: [
        { quantity: 5000, totalPrice: 419.00, unitPrice: 0.0838 },
        { quantity: 10000, totalPrice: 754.20, unitPrice: 0.0754 },
        { quantity: 15000, totalPrice: 1005.60, unitPrice: 0.0670 },
        { quantity: 20000, totalPrice: 1173.20, unitPrice: 0.0587 },
        { quantity: 25000, totalPrice: 1257.00, unitPrice: 0.0503 },
        { quantity: 30000, totalPrice: 1257.00, unitPrice: 0.0419 },
        { quantity: 40000, totalPrice: 1676.00, unitPrice: 0.0419 },
        { quantity: 50000, totalPrice: 2095.00, unitPrice: 0.0419 }
      ]},
      // 16×24cm: base unit price = 0.0449 * 2 = 0.0898
      { id: 'size-16x24', label: '16×24cm', dimensions: '16×24cm, 140 micron', quantityOptions: [
        { quantity: 5000, totalPrice: 449.00, unitPrice: 0.0898 },
        { quantity: 10000, totalPrice: 808.20, unitPrice: 0.0808 },
        { quantity: 15000, totalPrice: 1077.60, unitPrice: 0.0718 },
        { quantity: 20000, totalPrice: 1257.20, unitPrice: 0.0629 },
        { quantity: 25000, totalPrice: 1347.00, unitPrice: 0.0539 },
        { quantity: 30000, totalPrice: 1347.00, unitPrice: 0.0449 },
        { quantity: 40000, totalPrice: 1796.00, unitPrice: 0.0449 },
        { quantity: 50000, totalPrice: 2245.00, unitPrice: 0.0449 }
      ]},
      // 17×25cm: base unit price = 0.0508 * 2 = 0.1016
      { id: 'size-17x25', label: '17×25cm', dimensions: '17×25cm, 140 micron', quantityOptions: [
        { quantity: 5000, totalPrice: 508.00, unitPrice: 0.1016 },
        { quantity: 10000, totalPrice: 914.40, unitPrice: 0.0914 },
        { quantity: 15000, totalPrice: 1219.20, unitPrice: 0.0813 },
        { quantity: 20000, totalPrice: 1422.40, unitPrice: 0.0711 },
        { quantity: 25000, totalPrice: 1524.00, unitPrice: 0.0610 },
        { quantity: 30000, totalPrice: 1524.00, unitPrice: 0.0508 },
        { quantity: 40000, totalPrice: 2032.00, unitPrice: 0.0508 },
        { quantity: 50000, totalPrice: 2540.00, unitPrice: 0.0508 }
      ]},
      // 18×26cm: base unit price = 0.0578 * 2 = 0.1156
      { id: 'size-18x26', label: '18×26cm', dimensions: '18×26cm, 140 micron', quantityOptions: [
        { quantity: 5000, totalPrice: 578.00, unitPrice: 0.1156 },
        { quantity: 10000, totalPrice: 1040.40, unitPrice: 0.1040 },
        { quantity: 15000, totalPrice: 1387.20, unitPrice: 0.0925 },
        { quantity: 20000, totalPrice: 1618.40, unitPrice: 0.0809 },
        { quantity: 25000, totalPrice: 1734.00, unitPrice: 0.0694 },
        { quantity: 30000, totalPrice: 1734.00, unitPrice: 0.0578 },
        { quantity: 40000, totalPrice: 2312.00, unitPrice: 0.0578 },
        { quantity: 50000, totalPrice: 2890.00, unitPrice: 0.0578 }
      ]},
      // 20×28cm: base unit price = 0.0661 * 2 = 0.1322
      { id: 'size-20x28', label: '20×28cm', dimensions: '20×28cm, 140 micron', quantityOptions: [
        { quantity: 5000, totalPrice: 661.00, unitPrice: 0.1322 },
        { quantity: 10000, totalPrice: 1189.80, unitPrice: 0.1190 },
        { quantity: 15000, totalPrice: 1586.40, unitPrice: 0.1058 },
        { quantity: 20000, totalPrice: 1850.80, unitPrice: 0.0925 },
        { quantity: 25000, totalPrice: 1983.00, unitPrice: 0.0793 },
        { quantity: 30000, totalPrice: 1983.00, unitPrice: 0.0661 },
        { quantity: 40000, totalPrice: 2644.00, unitPrice: 0.0661 },
        { quantity: 50000, totalPrice: 3305.00, unitPrice: 0.0661 }
      ]},
      // 22×32cm: base unit price = 0.0820 * 2 = 0.1640
      { id: 'size-22x32', label: '22×32cm', dimensions: '22×32cm, 140 micron', quantityOptions: [
        { quantity: 5000, totalPrice: 820.00, unitPrice: 0.1640 },
        { quantity: 10000, totalPrice: 1476.00, unitPrice: 0.1476 },
        { quantity: 15000, totalPrice: 1968.00, unitPrice: 0.1312 },
        { quantity: 20000, totalPrice: 2296.00, unitPrice: 0.1148 },
        { quantity: 25000, totalPrice: 2460.00, unitPrice: 0.0984 },
        { quantity: 30000, totalPrice: 2460.00, unitPrice: 0.0820 },
        { quantity: 40000, totalPrice: 3280.00, unitPrice: 0.0820 },
        { quantity: 50000, totalPrice: 4100.00, unitPrice: 0.0820 }
      ]},
      // 24×35cm: base unit price = 0.0980 * 2 = 0.1960
      { id: 'size-24x35', label: '24×35cm', dimensions: '24×35cm, 140 micron', quantityOptions: [
        { quantity: 5000, totalPrice: 980.00, unitPrice: 0.1960 },
        { quantity: 10000, totalPrice: 1764.00, unitPrice: 0.1764 },
        { quantity: 15000, totalPrice: 2352.00, unitPrice: 0.1568 },
        { quantity: 20000, totalPrice: 2744.00, unitPrice: 0.1372 },
        { quantity: 25000, totalPrice: 2940.00, unitPrice: 0.1176 },
        { quantity: 30000, totalPrice: 2940.00, unitPrice: 0.0980 },
        { quantity: 40000, totalPrice: 3920.00, unitPrice: 0.0980 },
        { quantity: 50000, totalPrice: 4900.00, unitPrice: 0.0980 }
      ]},
    ],
    stockProductId: 'eco-stock-mailer-zipbag',
  },
  // Corn Fiber PLA Tea Filter Bags
  {
    id: 'eco-stock-tea-bags-pla',
    name: 'Corn Fiber Tea Bags (Disposable PLA Filter Bags)',
    category: 'eco-stock',
    description: 'Food grade corn fiber (PLA) tea filter bags. Ideal for brewing tea, spices, and herbs. Lightweight, clean filtration, and strong permeability. Made from natural corn starch, safe and odorless. Fold-over type for easy filling and sealing. Price includes air shipping.',
    shortDesc: 'From USD 4 for 100 pcs',
    features: ['100% PLA Corn Fiber', 'Food Contact Grade', 'Fold-Over Flap Closure', 'Clean Filtration & High Permeability', 'Air Shipping Included'],
    images: [
      '/imgs/store/eco-stock/tea-bags/1.jpg',
      '/imgs/store/eco-stock/tea-bags/2.jpg',
      '/imgs/store/eco-stock/tea-bags/3.jpg',
      '/imgs/store/eco-stock/tea-bags/4.jpg'
    ],
    badge: '🌱 PLA Corn Fiber',
    rating: 4.9,
    reviews: 84,
    inStock: true,
    turnaround: '5-7 days',
    minOrder: 100,
    shape: 'Tea Filter Bag',
    material: 'PLA Corn Fiber Mesh',
    basePrice: 4.00,
    pricePerPiece: 0.04,
    minQuantity: 100,
    quantityStep: 100,
    sizeInfo: 'Multiple sizes available (6.5cm - 10cm)',
    sizeWithQuantities: [
      { id: 'size-6.5x7', label: '6.5×7cm', dimensions: '6.5×7cm', quantityOptions: [
        { quantity: 100, totalPrice: 4.00, unitPrice: 0.04 },
        { quantity: 400, totalPrice: 12.00, unitPrice: 0.03 }
      ]},
      { id: 'size-7x8', label: '7×8cm', dimensions: '7×8cm', quantityOptions: [
        { quantity: 100, totalPrice: 5.00, unitPrice: 0.05 },
        { quantity: 400, totalPrice: 14.00, unitPrice: 0.035 }
      ]},
      { id: 'size-7x10', label: '7×10cm', dimensions: '7×10cm', quantityOptions: [
        { quantity: 100, totalPrice: 6.00, unitPrice: 0.06 },
        { quantity: 400, totalPrice: 16.00, unitPrice: 0.04 }
      ]}
    ],
    customPrintNote: 'Contact us for bulk wholesale orders or custom sizes.',
  }
]

// Custom Printed Boxes Products
export const BOXES_PRODUCTS: BoxProduct[] = [
  {
    id: 'box-corrugated-custom',
    name: 'Custom Printed Corrugated Mailer Boxes',
    category: 'boxes',
    shape: 'Corrugated Box',
    material: '157g coated gloss/matt art paper, CMYK printing, matt lamination, 2.0mm grayboard (rigid box construction)',
    description: 'Premium custom printed corrugated mailer boxes ideal for coffee, tea, chocolate, and artisan food products. Features four-color CMYK printing with matte finish, optional gold foil and embossing. Made with FSC certified recycled paper—perfect for eco-conscious brands seeking sustainable premium packaging.',
    shortDesc: 'FSC recycled rigid mailer box with premium finishes',
    features: [
      'Matte Finish',
      'Gold Foil Available',
      'Embossed Details',
      'FSC Certified Recycled Paper',
      'Four Color Custom Printed (CMYK)',
      'Rigid Box Construction'
    ],
    images: [
      '/imgs/store/box/corrugated-box/2be65396-ac07-44d0-b54c-2422d3bfe981.webp',
      '/imgs/store/box/corrugated-box/90f309ab-e30c-49e3-891c-83b47a7fe7a6.webp',
      '/imgs/store/box/corrugated-box/a_half_open_box_3d_perspective_7357116.webp',
      '/imgs/store/box/corrugated-box/a_mockup_premium_layflat_applied_2105634.webp',
      '/imgs/store/box/corrugated-box/8ffb866f-c5a2-4d0c-abdd-7398c6fe1387.webp',
      '/imgs/store/box/corrugated-box/ads/a_brand_closing_collection_9526391.webp',
      '/imgs/store/box/corrugated-box/ads/a_foil_stamping_detail_logo_3101304.webp',
      '/imgs/store/box/corrugated-box/ads/a_hero_kv_black_gold_mailer_4737831.webp',
      '/imgs/store/box/corrugated-box/ads/a_insert_detail_arrangement_4804418.webp',
      '/imgs/store/box/corrugated-box/ads/a_load_bearing_structure_detail_7538740.webp',
      '/imgs/store/box/corrugated-box/ads/a_material_benefits_page_4228725.webp',
      '/imgs/store/box/corrugated-box/ads/a_packing_scene_production_9264348.webp',
      '/imgs/store/box/corrugated-box/ads/a_structure_info_page_mailer_9213547.webp',
      '/imgs/store/box/corrugated-box/ads/a_tactile_opening_detail_7956611.webp',
    ],
    badge: 'FSC Recycled',
    rating: 4.9,
    reviews: 79,
    inStock: true,
    turnaround: '30 days + 40-60 days sea freight',
    minOrder: 200,
    minQuantity: 200,
    basePrice: 514.50,
    additionalFeatures: [
      'Matte Finish',
      'Gold Foil',
      'Embossed',
      'FSC certified recycled paper',
      'Sea Freight Included (40-60 days)'
    ],
    sizeWithQuantities: [
      // 500g Corrugated Mailer Box: 130×85×35mm
      { id: 'size-500g', label: '500g Corrugated Mailer Box', dimensions: '130(L) × 85(W) × 35(H) mm', quantityOptions: [
        { quantity: 200, totalPrice: 514.50, unitPrice: 2.5725 },
        { quantity: 1000, totalPrice: 771.75, unitPrice: 0.7718 },
        { quantity: 5000, totalPrice: 2054.25, unitPrice: 0.4109 },
        { quantity: 10000, totalPrice: 3657.38, unitPrice: 0.3657 },
      ]},
      // 1kg Corrugated Mailer Box: 270×85×35mm
      { id: 'size-1kg', label: '1kg Corrugated Mailer Box', dimensions: '270(L) × 85(W) × 35(H) mm', quantityOptions: [
        { quantity: 200, totalPrice: 1285.50, unitPrice: 6.4275 },
        { quantity: 1000, totalPrice: 1714.50, unitPrice: 1.7145 },
        { quantity: 5000, totalPrice: 3859.50, unitPrice: 0.7719 },
        { quantity: 10000, totalPrice: 5040.75, unitPrice: 0.5041 },
      ]},
    ],
    customQuoteNote: 'For quantities over 10,000 pcs or custom sizes, please request a custom quote.',
    videoUrl: 'https://youtube.com/shorts/nRWIQg9rCiQ',
  },
  {
    id: 'box-tuck-custom',
    name: 'Custom Printed Tuck Boxes',
    category: 'boxes',
    shape: 'Tuck Box',
    material: '250g White Card • Matte Finish • Gold Foil • Embossed',
    description: 'Premium custom printed tuck boxes (cartons) with elegant matte finish, gold foil stamping, and embossed details. Perfect for chocolate bars, tea sachets, small confectionery, and artisan products requiring a sophisticated presentation. Made from FSC certified paper for eco-conscious brands.',
    shortDesc: 'Premium tuck box with gold foil & embossing',
    features: [
      '250g White Card',
      'Matte Finish',
      'Gold Foil Stamping',
      'Embossed Details',
      'FSC Certified Paper',
      'Tuck End Closure'
    ],
    images: [
      '/imgs/store/box/tuck-box/8a2918bb-a48c-44a3-875d-6e766e5f305f.webp',
      '/imgs/store/box/tuck-box/247e2fdf-3274-4be8-b656-03d7e20b5a0f.webp',
      '/imgs/store/box/tuck-box/ads/a_detail_base_loading_4721904.webp',
      '/imgs/store/box/tuck-box/ads/a_detail_edge_finish_8463428.webp',
      '/imgs/store/box/tuck-box/ads/a_detail_gold_foil_embossing_5696847.webp',
      '/imgs/store/box/tuck-box/ads/a_detail_interior_unboxing_9052534.webp',
      '/imgs/store/box/tuck-box/ads/a_detail_tuck_flaps_folds_9224764.webp',
      '/imgs/store/box/tuck-box/ads/a_hero_kv_tuck_box_3590474.webp',
      '/imgs/store/box/tuck-box/ads/a_material_sustainability_page_9060501.webp',
      '/imgs/store/box/tuck-box/ads/a_range_collection_closing_9211739.webp',
      '/imgs/store/box/tuck-box/ads/a_retail_display_scene_3099119.webp',
      '/imgs/store/box/tuck-box/ads/a_structure_tuck_box_views_2089693.webp',
    ],
    badge: 'Premium Finish',
    rating: 4.8,
    reviews: 45,
    inStock: true,
    turnaround: '30 days + 40-60 days sea freight',
    minOrder: 200,
    minQuantity: 200,
    basePrice: 1105.50,
    additionalFeatures: [
      'Gold Foil Stamping',
      'Embossed',
      'Matte Finish',
      'FSC certified paper',
      'Sea Freight Included (40-60 days)'
    ],
    sizeWithQuantities: [
      // 100g Tuck Box: 81(W)×162(L)×15(H)mm
      { id: 'size-100g', label: '100g Tuck Box', dimensions: '81(W) × 162(L) × 15(H) mm', quantityOptions: [
        { quantity: 200, totalPrice: 1105.50, unitPrice: 5.5275 },
        { quantity: 1000, totalPrice: 1381.50, unitPrice: 1.3815 },
        { quantity: 5000, totalPrice: 2761.50, unitPrice: 0.5523 },
        { quantity: 10000, totalPrice: 4486.50, unitPrice: 0.4487 },
      ]},
    ],
    customQuoteNote: 'For larger quantities, please contact us for a custom free quote.',
    videoUrl: 'https://youtube.com/shorts/nRWIQg9rCiQ',
  },
]

// Conventional Stock Products (Ready-made Premium)
const CONVENTIONAL_STOCK_PRODUCTS: EcoStockProduct[] = [
  // Flat Bottom Pouch with Card Insert
  {
    id: 'flat-bottom-pouch-with-card-insert',
    name: 'Flat Bottom Pouch with Card Insert',
    category: 'conventional-stock',
    description: 'An exceptionally premium B2B stock packaging solution featuring an integrated high-clarity front pocket for effortless card or label insertion. Designed with a sturdy flat bottom (eight-side seal box shape) for unrivaled shelf stability and beautiful presentation. Equipped with a heavy-duty reusable zip lock, easy-tear notches, and a multi-layer high-barrier structure (Matte BOPP + Metalized VMPET + Food-Grade PE) that guarantees maximum preservation against light, oxygen, and moisture. Perfect for roasting houses, artisanal tea brands, pet treats, organic superfoods, and retail-ready confectionery that require highly flexible, modular branding.',
    shortDesc: 'Premium eight-side seal flat bottom box pouch with integrated high-clarity front card insert pocket',
    features: [
      'Front Card Insert Pocket: High-clarity sleeve for quick, professional custom branding cards',
      'Stable Eight-Side Sealed Box Bottom: Self-standing design for dynamic retail shelf displays',
      'Heavy-Duty Reusable Airtight Zipper: Keeps contents completely fresh after opening',
      'High-Barrier Laminate Structure: Matte BOPP + VMPET + PE locks in aroma and blocks moisture',
      'Pre-Cut Easy-Tear Notches & Heat Sealable Header for tamper-evident security',
      'Available in 2 Premium Kraft Finishes: White Kraft & Brown Kraft, in both Cubical (魔方款) and Long (长款) shapes'
    ],
    images: [
      '/taobao/flat-bottom-pouch-with-card-insert/O1CN01l9ZQvX1kRUeUwNPuY_--2214004244680-jpg_.webp', // White Kraft Cubical
      '/taobao/flat-bottom-pouch-with-card-insert/O1CN01NYuKkP1kRUeWM05gC_--2214004244680-jpg_q50-jpg_.webp', // Brown Kraft Cubical
      '/taobao/flat-bottom-pouch-with-card-insert/O1CN01zhZWdI1kRUeW1pQaK_--2214004244680-jpg_q50-jpg_.webp', // White Kraft Long
      '/taobao/flat-bottom-pouch-with-card-insert/O1CN01IAbsQQ1kRUeQ1VSI8_--2214004244680-jpg_q50-jpg_.webp'  // Brown Kraft Long
    ],
    badge: '📥 Modular Card Insert',
    rating: 4.9,
    reviews: 74,
    inStock: true,
    turnaround: '3-5 days',
    minOrder: 100,
    shape: 'Flat Bottom Box Pouch',
    material: 'Matte BOPP + Metalized VMPET + Food-Grade PE High-Barrier Laminate (130 Microns)',
    basePrice: 24.00,
    pricePerPiece: 0.240,
    minQuantity: 100,
    quantityStep: 100,
    sizeInfo: 'Cubical (S: 15.5×16.5+8cm / M: 19.5×20.5+8cm / L: 23×24+10cm) | Long (S: 13×20+7cm / M: 13.5×26+7.5cm / L: 15×32.5+10cm)',
    shelfLife: '+36 months',
    certification: 'FDA Approved & Food Grade LFGB Certified',
    customPrintNote: 'Customize your branding by printing professional cards to slip in, or request custom overall printed pouches from 5,000+ pieces.',
    sizeVariants: [
      {
        id: 'flat-bottom-card-insert-cubical-s-white-kraft-100pcs',
        label: 'Cubical Size S (半磅) (15.5 × 16.5 + 8 cm) - White Kraft (100 Pcs)',
        dimensions: '15.5 × 16.5 + 8 cm • Holds ~250g coffee beans / ~100g loose tea • Cubical (魔方款) • White Kraft (白牛皮)',
        hasHole: false,
        quantity: 100,
        totalPrice: 24.00,
        unitPrice: 0.2400,
        heroImageIndex: 0
      },
      {
        id: 'flat-bottom-card-insert-cubical-s-white-kraft-200pcs',
        label: 'Cubical Size S (半磅) (15.5 × 16.5 + 8 cm) - White Kraft (200 Pcs)',
        dimensions: '15.5 × 16.5 + 8 cm • Holds ~250g coffee beans / ~100g loose tea • Cubical (魔方款) • White Kraft (白牛皮)',
        hasHole: false,
        quantity: 200,
        totalPrice: 43.20,
        unitPrice: 0.2160,
        heroImageIndex: 0
      },
      {
        id: 'flat-bottom-card-insert-cubical-s-white-kraft-500pcs',
        label: 'Cubical Size S (半磅) (15.5 × 16.5 + 8 cm) - White Kraft (500 Pcs)',
        dimensions: '15.5 × 16.5 + 8 cm • Holds ~250g coffee beans / ~100g loose tea • Cubical (魔方款) • White Kraft (白牛皮)',
        hasHole: false,
        quantity: 500,
        totalPrice: 96.00,
        unitPrice: 0.1920,
        heroImageIndex: 0
      },
      {
        id: 'flat-bottom-card-insert-cubical-s-brown-kraft-100pcs',
        label: 'Cubical Size S (半磅) (15.5 × 16.5 + 8 cm) - Brown Kraft (100 Pcs)',
        dimensions: '15.5 × 16.5 + 8 cm • Holds ~250g coffee beans / ~100g loose tea • Cubical (魔方款) • Brown Kraft (黄牛皮)',
        hasHole: false,
        quantity: 100,
        totalPrice: 24.00,
        unitPrice: 0.2400,
        heroImageIndex: 1
      },
      {
        id: 'flat-bottom-card-insert-cubical-s-brown-kraft-200pcs',
        label: 'Cubical Size S (半磅) (15.5 × 16.5 + 8 cm) - Brown Kraft (200 Pcs)',
        dimensions: '15.5 × 16.5 + 8 cm • Holds ~250g coffee beans / ~100g loose tea • Cubical (魔方款) • Brown Kraft (黄牛皮)',
        hasHole: false,
        quantity: 200,
        totalPrice: 43.20,
        unitPrice: 0.2160,
        heroImageIndex: 1
      },
      {
        id: 'flat-bottom-card-insert-cubical-s-brown-kraft-500pcs',
        label: 'Cubical Size S (半磅) (15.5 × 16.5 + 8 cm) - Brown Kraft (500 Pcs)',
        dimensions: '15.5 × 16.5 + 8 cm • Holds ~250g coffee beans / ~100g loose tea • Cubical (魔方款) • Brown Kraft (黄牛皮)',
        hasHole: false,
        quantity: 500,
        totalPrice: 96.00,
        unitPrice: 0.1920,
        heroImageIndex: 1
      },
      {
        id: 'flat-bottom-card-insert-cubical-m-white-kraft-100pcs',
        label: 'Cubical Size M (一磅) (19.5 × 20.5 + 8 cm) - White Kraft (100 Pcs)',
        dimensions: '19.5 × 20.5 + 8 cm • Holds ~500g coffee beans / ~200g loose tea • Cubical (魔方款) • White Kraft (白牛皮)',
        hasHole: false,
        quantity: 100,
        totalPrice: 30.00,
        unitPrice: 0.3000,
        heroImageIndex: 0
      },
      {
        id: 'flat-bottom-card-insert-cubical-m-white-kraft-200pcs',
        label: 'Cubical Size M (一磅) (19.5 × 20.5 + 8 cm) - White Kraft (200 Pcs)',
        dimensions: '19.5 × 20.5 + 8 cm • Holds ~500g coffee beans / ~200g loose tea • Cubical (魔方款) • White Kraft (白牛皮)',
        hasHole: false,
        quantity: 200,
        totalPrice: 54.00,
        unitPrice: 0.2700,
        heroImageIndex: 0
      },
      {
        id: 'flat-bottom-card-insert-cubical-m-white-kraft-500pcs',
        label: 'Cubical Size M (一磅) (19.5 × 20.5 + 8 cm) - White Kraft (500 Pcs)',
        dimensions: '19.5 × 20.5 + 8 cm • Holds ~500g coffee beans / ~200g loose tea • Cubical (魔方款) • White Kraft (白牛皮)',
        hasHole: false,
        quantity: 500,
        totalPrice: 120.00,
        unitPrice: 0.2400,
        heroImageIndex: 0
      },
      {
        id: 'flat-bottom-card-insert-cubical-m-brown-kraft-100pcs',
        label: 'Cubical Size M (一磅) (19.5 × 20.5 + 8 cm) - Brown Kraft (100 Pcs)',
        dimensions: '19.5 × 20.5 + 8 cm • Holds ~500g coffee beans / ~200g loose tea • Cubical (魔方款) • Brown Kraft (黄牛皮)',
        hasHole: false,
        quantity: 100,
        totalPrice: 30.00,
        unitPrice: 0.3000,
        heroImageIndex: 1
      },
      {
        id: 'flat-bottom-card-insert-cubical-m-brown-kraft-200pcs',
        label: 'Cubical Size M (一磅) (19.5 × 20.5 + 8 cm) - Brown Kraft (200 Pcs)',
        dimensions: '19.5 × 20.5 + 8 cm • Holds ~500g coffee beans / ~200g loose tea • Cubical (魔方款) • Brown Kraft (黄牛皮)',
        hasHole: false,
        quantity: 200,
        totalPrice: 54.00,
        unitPrice: 0.2700,
        heroImageIndex: 1
      },
      {
        id: 'flat-bottom-card-insert-cubical-m-brown-kraft-500pcs',
        label: 'Cubical Size M (一磅) (19.5 × 20.5 + 8 cm) - Brown Kraft (500 Pcs)',
        dimensions: '19.5 × 20.5 + 8 cm • Holds ~500g coffee beans / ~200g loose tea • Cubical (魔方款) • Brown Kraft (黄牛皮)',
        hasHole: false,
        quantity: 500,
        totalPrice: 120.00,
        unitPrice: 0.2400,
        heroImageIndex: 1
      },
      {
        id: 'flat-bottom-card-insert-cubical-l-white-kraft-100pcs',
        label: 'Cubical Size L (两磅) (23 × 24 + 10 cm) - White Kraft (100 Pcs)',
        dimensions: '23 × 24 + 10 cm • Holds ~1000g coffee beans / ~400g loose tea • Cubical (魔方款) • White Kraft (白牛皮)',
        hasHole: false,
        quantity: 100,
        totalPrice: 38.00,
        unitPrice: 0.3800,
        heroImageIndex: 0
      },
      {
        id: 'flat-bottom-card-insert-cubical-l-white-kraft-200pcs',
        label: 'Cubical Size L (两磅) (23 × 24 + 10 cm) - White Kraft (200 Pcs)',
        dimensions: '23 × 24 + 10 cm • Holds ~1000g coffee beans / ~400g loose tea • Cubical (魔方款) • White Kraft (白牛皮)',
        hasHole: false,
        quantity: 200,
        totalPrice: 68.40,
        unitPrice: 0.3420,
        heroImageIndex: 0
      },
      {
        id: 'flat-bottom-card-insert-cubical-l-white-kraft-500pcs',
        label: 'Cubical Size L (两磅) (23 × 24 + 10 cm) - White Kraft (500 Pcs)',
        dimensions: '23 × 24 + 10 cm • Holds ~1000g coffee beans / ~400g loose tea • Cubical (魔方款) • White Kraft (白牛皮)',
        hasHole: false,
        quantity: 500,
        totalPrice: 152.00,
        unitPrice: 0.3040,
        heroImageIndex: 0
      },
      {
        id: 'flat-bottom-card-insert-cubical-l-brown-kraft-100pcs',
        label: 'Cubical Size L (两磅) (23 × 24 + 10 cm) - Brown Kraft (100 Pcs)',
        dimensions: '23 × 24 + 10 cm • Holds ~1000g coffee beans / ~400g loose tea • Cubical (魔方款) • Brown Kraft (黄牛皮)',
        hasHole: false,
        quantity: 100,
        totalPrice: 38.00,
        unitPrice: 0.3800,
        heroImageIndex: 1
      },
      {
        id: 'flat-bottom-card-insert-cubical-l-brown-kraft-200pcs',
        label: 'Cubical Size L (两磅) (23 × 24 + 10 cm) - Brown Kraft (200 Pcs)',
        dimensions: '23 × 24 + 10 cm • Holds ~1000g coffee beans / ~400g loose tea • Cubical (魔方款) • Brown Kraft (黄牛皮)',
        hasHole: false,
        quantity: 200,
        totalPrice: 68.40,
        unitPrice: 0.3420,
        heroImageIndex: 1
      },
      {
        id: 'flat-bottom-card-insert-cubical-l-brown-kraft-500pcs',
        label: 'Cubical Size L (两磅) (23 × 24 + 10 cm) - Brown Kraft (500 Pcs)',
        dimensions: '23 × 24 + 10 cm • Holds ~1000g coffee beans / ~400g loose tea • Cubical (魔方款) • Brown Kraft (黄牛皮)',
        hasHole: false,
        quantity: 500,
        totalPrice: 152.00,
        unitPrice: 0.3040,
        heroImageIndex: 1
      },
      {
        id: 'flat-bottom-card-insert-long-s-white-kraft-100pcs',
        label: 'Long Size S (半磅) (13 × 20 + 7 cm) - White Kraft (100 Pcs)',
        dimensions: '13 × 20 + 7 cm • Holds ~250g coffee beans / ~100g loose tea • Long (长款) • White Kraft (白牛皮)',
        hasHole: false,
        quantity: 100,
        totalPrice: 24.00,
        unitPrice: 0.2400,
        heroImageIndex: 2
      },
      {
        id: 'flat-bottom-card-insert-long-s-white-kraft-200pcs',
        label: 'Long Size S (半磅) (13 × 20 + 7 cm) - White Kraft (200 Pcs)',
        dimensions: '13 × 20 + 7 cm • Holds ~250g coffee beans / ~100g loose tea • Long (长款) • White Kraft (白牛皮)',
        hasHole: false,
        quantity: 200,
        totalPrice: 43.20,
        unitPrice: 0.2160,
        heroImageIndex: 2
      },
      {
        id: 'flat-bottom-card-insert-long-s-white-kraft-500pcs',
        label: 'Long Size S (半磅) (13 × 20 + 7 cm) - White Kraft (500 Pcs)',
        dimensions: '13 × 20 + 7 cm • Holds ~250g coffee beans / ~100g loose tea • Long (长款) • White Kraft (白牛皮)',
        hasHole: false,
        quantity: 500,
        totalPrice: 96.00,
        unitPrice: 0.1920,
        heroImageIndex: 2
      },
      {
        id: 'flat-bottom-card-insert-long-s-brown-kraft-100pcs',
        label: 'Long Size S (半磅) (13 × 20 + 7 cm) - Brown Kraft (100 Pcs)',
        dimensions: '13 × 20 + 7 cm • Holds ~250g coffee beans / ~100g loose tea • Long (长款) • Brown Kraft (黄牛皮)',
        hasHole: false,
        quantity: 100,
        totalPrice: 24.00,
        unitPrice: 0.2400,
        heroImageIndex: 3
      },
      {
        id: 'flat-bottom-card-insert-long-s-brown-kraft-200pcs',
        label: 'Long Size S (半磅) (13 × 20 + 7 cm) - Brown Kraft (200 Pcs)',
        dimensions: '13 × 20 + 7 cm • Holds ~250g coffee beans / ~100g loose tea • Long (长款) • Brown Kraft (黄牛皮)',
        hasHole: false,
        quantity: 200,
        totalPrice: 43.20,
        unitPrice: 0.2160,
        heroImageIndex: 3
      },
      {
        id: 'flat-bottom-card-insert-long-s-brown-kraft-500pcs',
        label: 'Long Size S (半磅) (13 × 20 + 7 cm) - Brown Kraft (500 Pcs)',
        dimensions: '13 × 20 + 7 cm • Holds ~250g coffee beans / ~100g loose tea • Long (长款) • Brown Kraft (黄牛皮)',
        hasHole: false,
        quantity: 500,
        totalPrice: 96.00,
        unitPrice: 0.1920,
        heroImageIndex: 3
      },
      {
        id: 'flat-bottom-card-insert-long-m-white-kraft-100pcs',
        label: 'Long Size M (一磅) (13.5 × 26 + 7.5 cm) - White Kraft (100 Pcs)',
        dimensions: '13.5 × 26 + 7.5 cm • Holds ~500g coffee beans / ~200g loose tea • Long (长款) • White Kraft (白牛皮)',
        hasHole: false,
        quantity: 100,
        totalPrice: 30.00,
        unitPrice: 0.3000,
        heroImageIndex: 2
      },
      {
        id: 'flat-bottom-card-insert-long-m-white-kraft-200pcs',
        label: 'Long Size M (一磅) (13.5 × 26 + 7.5 cm) - White Kraft (200 Pcs)',
        dimensions: '13.5 × 26 + 7.5 cm • Holds ~500g coffee beans / ~200g loose tea • Long (长款) • White Kraft (白牛皮)',
        hasHole: false,
        quantity: 200,
        totalPrice: 54.00,
        unitPrice: 0.2700,
        heroImageIndex: 2
      },
      {
        id: 'flat-bottom-card-insert-long-m-white-kraft-500pcs',
        label: 'Long Size M (一磅) (13.5 × 26 + 7.5 cm) - White Kraft (500 Pcs)',
        dimensions: '13.5 × 26 + 7.5 cm • Holds ~500g coffee beans / ~200g loose tea • Long (长款) • White Kraft (白牛皮)',
        hasHole: false,
        quantity: 500,
        totalPrice: 120.00,
        unitPrice: 0.2400,
        heroImageIndex: 2
      },
      {
        id: 'flat-bottom-card-insert-long-m-brown-kraft-100pcs',
        label: 'Long Size M (一磅) (13.5 × 26 + 7.5 cm) - Brown Kraft (100 Pcs)',
        dimensions: '13.5 × 26 + 7.5 cm • Holds ~500g coffee beans / ~200g loose tea • Long (长款) • Brown Kraft (黄牛皮)',
        hasHole: false,
        quantity: 100,
        totalPrice: 30.00,
        unitPrice: 0.3000,
        heroImageIndex: 3
      },
      {
        id: 'flat-bottom-card-insert-long-m-brown-kraft-200pcs',
        label: 'Long Size M (一磅) (13.5 × 26 + 7.5 cm) - Brown Kraft (200 Pcs)',
        dimensions: '13.5 × 26 + 7.5 cm • Holds ~500g coffee beans / ~200g loose tea • Long (长款) • Brown Kraft (黄牛皮)',
        hasHole: false,
        quantity: 200,
        totalPrice: 54.00,
        unitPrice: 0.2700,
        heroImageIndex: 3
      },
      {
        id: 'flat-bottom-card-insert-long-m-brown-kraft-500pcs',
        label: 'Long Size M (一磅) (13.5 × 26 + 7.5 cm) - Brown Kraft (500 Pcs)',
        dimensions: '13.5 × 26 + 7.5 cm • Holds ~500g coffee beans / ~200g loose tea • Long (长款) • Brown Kraft (黄牛皮)',
        hasHole: false,
        quantity: 500,
        totalPrice: 120.00,
        unitPrice: 0.2400,
        heroImageIndex: 3
      },
      {
        id: 'flat-bottom-card-insert-long-l-white-kraft-100pcs',
        label: 'Long Size L (两磅) (15 × 32.5 + 10 cm) - White Kraft (100 Pcs)',
        dimensions: '15 × 32.5 + 10 cm • Holds ~1000g coffee beans / ~400g loose tea • Long (长款) • White Kraft (白牛皮)',
        hasHole: false,
        quantity: 100,
        totalPrice: 38.00,
        unitPrice: 0.3800,
        heroImageIndex: 2
      },
      {
        id: 'flat-bottom-card-insert-long-l-white-kraft-200pcs',
        label: 'Long Size L (两磅) (15 × 32.5 + 10 cm) - White Kraft (200 Pcs)',
        dimensions: '15 × 32.5 + 10 cm • Holds ~1000g coffee beans / ~400g loose tea • Long (长款) • White Kraft (白牛皮)',
        hasHole: false,
        quantity: 200,
        totalPrice: 68.40,
        unitPrice: 0.3420,
        heroImageIndex: 2
      },
      {
        id: 'flat-bottom-card-insert-long-l-white-kraft-500pcs',
        label: 'Long Size L (两磅) (15 × 32.5 + 10 cm) - White Kraft (500 Pcs)',
        dimensions: '15 × 32.5 + 10 cm • Holds ~1000g coffee beans / ~400g loose tea • Long (长款) • White Kraft (白牛皮)',
        hasHole: false,
        quantity: 500,
        totalPrice: 152.00,
        unitPrice: 0.3040,
        heroImageIndex: 2
      },
      {
        id: 'flat-bottom-card-insert-long-l-brown-kraft-100pcs',
        label: 'Long Size L (两磅) (15 × 32.5 + 10 cm) - Brown Kraft (100 Pcs)',
        dimensions: '15 × 32.5 + 10 cm • Holds ~1000g coffee beans / ~400g loose tea • Long (长款) • Brown Kraft (黄牛皮)',
        hasHole: false,
        quantity: 100,
        totalPrice: 38.00,
        unitPrice: 0.3800,
        heroImageIndex: 3
      },
      {
        id: 'flat-bottom-card-insert-long-l-brown-kraft-200pcs',
        label: 'Long Size L (两磅) (15 × 32.5 + 10 cm) - Brown Kraft (200 Pcs)',
        dimensions: '15 × 32.5 + 10 cm • Holds ~1000g coffee beans / ~400g loose tea • Long (长款) • Brown Kraft (黄牛皮)',
        hasHole: false,
        quantity: 200,
        totalPrice: 68.40,
        unitPrice: 0.3420,
        heroImageIndex: 3
      },
      {
        id: 'flat-bottom-card-insert-long-l-brown-kraft-500pcs',
        label: 'Long Size L (两磅) (15 × 32.5 + 10 cm) - Brown Kraft (500 Pcs)',
        dimensions: '15 × 32.5 + 10 cm • Holds ~1000g coffee beans / ~400g loose tea • Long (长款) • Brown Kraft (黄牛皮)',
        hasHole: false,
        quantity: 500,
        totalPrice: 152.00,
        unitPrice: 0.3040,
        heroImageIndex: 3
      }
    ]
  },
  // Textured Burlap & Cork Pattern Stand Up Pouch with Valve
  {
    id: 'textured-burlap-cork-pattern-coffee-pouch-with-valve',
    name: 'Textured Burlap & Cork Pattern Stand Up Pouch with Valve',
    category: 'conventional-stock',
    description: 'An ultra-premium, eco-responsible stand up packaging solution featuring distinct burlap linen and natural cork patterns. Engineered from high-barrier mono-material PE, this metal-free and aluminum-free pouch is fully recyclable in standard plastic streams. Equipped with a premium one-way degassing valve that features an integrated micro-filter mesh to prevent fine coffee grounds or powder from clogging the valve. Perfect for specialty whole bean coffees, artisanal ground coffees, loose leaf teas, and high-end organic powders.',
    shortDesc: 'Premium metal-free recyclable stand up pouch with anti-clogging degassing valve and organic burlap/cork textures',
    features: [
      'Natural Textured Aesthetics: Burlap Linen and Real Cork prints for an organic brand look',
      'Single-Stream Recyclable: 100% Mono-PE composite film, completely aluminum-free and metal-free',
      'Anti-Clogging Valve: Single-way degassing valve with integrated filter mesh keeps oxygen out and prevents powder blockage',
      'Built-In Freshness Zipper: Strong resealable zipper with easy-tear notches for convenient daily reuse',
      'High puncture and tear resistance with food-grade FDA & LFGB compliance'
    ],
    images: [
      '/taobao/digital-printed-pattern-coffee-pouch-with-valve/O1CN018LiXF92IpwK0XyOZr_--4218319336-jpg_.webp',
      '/taobao/digital-printed-pattern-coffee-pouch-with-valve/O1CN01ekJ6892IpwJtNUR5W_--4218319336-jpg_.webp',
      '/taobao/digital-printed-pattern-coffee-pouch-with-valve/O1CN01iFQEb82IpwJiRTg4L_--4218319336-jpg_.webp',
      '/taobao/digital-printed-pattern-coffee-pouch-with-valve/O1CN01ww7aYt2IpwJdlzLH2_--4218319336-jpg_.webp',
      '/taobao/digital-printed-pattern-coffee-pouch-with-valve/O1CN01DxTsUD2IpwRWXt67s_--4218319336.jpg',
      '/taobao/digital-printed-pattern-coffee-pouch-with-valve/O1CN01Hp0i0D2IpwRckiH8L_--4218319336.jpg',
      '/taobao/digital-printed-pattern-coffee-pouch-with-valve/O1CN01Ivgety2IpwRckkUQ6_--4218319336.jpg',
      '/taobao/digital-printed-pattern-coffee-pouch-with-valve/O1CN01LV7AcH2IpwRR9OWpo_--4218319336.jpg',
      '/taobao/digital-printed-pattern-coffee-pouch-with-valve/O1CN01epxZw62IpwRW2g0vL_--4218319336.jpg'
    ],
    badge: '♻️ Aluminum-Free Recyclable',
    rating: 4.9,
    reviews: 58,
    inStock: true,
    turnaround: '3-5 days',
    minOrder: 100,
    shape: 'Stand Up Pouch',
    material: 'Mono-PE High-Barrier Recyclable Lamination (Aluminum-Free / Metal-Free)',
    basePrice: 28.00,
    pricePerPiece: 0.280,
    minQuantity: 100,
    quantityStep: 100,
    sizeInfo: '1/4 lb (160×170+60mm) / 1/2 lb (190×200+70mm) / 1 lb (230×260+80mm)',
    shelfLife: '+24 months',
    certification: 'FDA Food-Grade & Recyclable Mono-PE Certified',
    customPrintNote: 'Custom multi-color digital prints and sizing options available from 500+ pieces. Please consult our team.',
    sizeVariants: [
      {
        id: 'coffee-valve-pouch-s-natural-linen-100pcs',
        label: 'Size S (1/4 lb) (W160) - Natural Linen (100 Pcs)',
        dimensions: 'W160 × H170 + G60 mm • Holds ~120g coffee beans / ~50g loose tea • Natural Linen',
        hasHole: false,
        quantity: 100,
        totalPrice: 28.00,
        unitPrice: 0.2800,
        heroImageIndex: 0
      },
      {
        id: 'coffee-valve-pouch-s-natural-linen-200pcs',
        label: 'Size S (1/4 lb) (W160) - Natural Linen (200 Pcs)',
        dimensions: 'W160 × H170 + G60 mm • Holds ~120g coffee beans / ~50g loose tea • Natural Linen',
        hasHole: false,
        quantity: 200,
        totalPrice: 50.40,
        unitPrice: 0.2520,
        heroImageIndex: 0
      },
      {
        id: 'coffee-valve-pouch-s-natural-linen-500pcs',
        label: 'Size S (1/4 lb) (W160) - Natural Linen (500 Pcs)',
        dimensions: 'W160 × H170 + G60 mm • Holds ~120g coffee beans / ~50g loose tea • Natural Linen',
        hasHole: false,
        quantity: 500,
        totalPrice: 112.00,
        unitPrice: 0.2240,
        heroImageIndex: 0
      },
      {
        id: 'coffee-valve-pouch-s-natural-cork-100pcs',
        label: 'Size S (1/4 lb) (W160) - Natural Cork (100 Pcs)',
        dimensions: 'W160 × H170 + G60 mm • Holds ~120g coffee beans / ~50g loose tea • Natural Cork',
        hasHole: false,
        quantity: 100,
        totalPrice: 28.00,
        unitPrice: 0.2800,
        heroImageIndex: 1
      },
      {
        id: 'coffee-valve-pouch-s-natural-cork-200pcs',
        label: 'Size S (1/4 lb) (W160) - Natural Cork (200 Pcs)',
        dimensions: 'W160 × H170 + G60 mm • Holds ~120g coffee beans / ~50g loose tea • Natural Cork',
        hasHole: false,
        quantity: 200,
        totalPrice: 50.40,
        unitPrice: 0.2520,
        heroImageIndex: 1
      },
      {
        id: 'coffee-valve-pouch-s-natural-cork-500pcs',
        label: 'Size S (1/4 lb) (W160) - Natural Cork (500 Pcs)',
        dimensions: 'W160 × H170 + G60 mm • Holds ~120g coffee beans / ~50g loose tea • Natural Cork',
        hasHole: false,
        quantity: 500,
        totalPrice: 112.00,
        unitPrice: 0.2240,
        heroImageIndex: 1
      },
      {
        id: 'coffee-valve-pouch-s-charcoal-linen-100pcs',
        label: 'Size S (1/4 lb) (W160) - Charcoal Linen (100 Pcs)',
        dimensions: 'W160 × H170 + G60 mm • Holds ~120g coffee beans / ~50g loose tea • Charcoal Linen',
        hasHole: false,
        quantity: 100,
        totalPrice: 28.00,
        unitPrice: 0.2800,
        heroImageIndex: 2
      },
      {
        id: 'coffee-valve-pouch-s-charcoal-linen-200pcs',
        label: 'Size S (1/4 lb) (W160) - Charcoal Linen (200 Pcs)',
        dimensions: 'W160 × H170 + G60 mm • Holds ~120g coffee beans / ~50g loose tea • Charcoal Linen',
        hasHole: false,
        quantity: 200,
        totalPrice: 50.40,
        unitPrice: 0.2520,
        heroImageIndex: 2
      },
      {
        id: 'coffee-valve-pouch-s-charcoal-linen-500pcs',
        label: 'Size S (1/4 lb) (W160) - Charcoal Linen (500 Pcs)',
        dimensions: 'W160 × H170 + G60 mm • Holds ~120g coffee beans / ~50g loose tea • Charcoal Linen',
        hasHole: false,
        quantity: 500,
        totalPrice: 112.00,
        unitPrice: 0.2240,
        heroImageIndex: 2
      },
      {
        id: 'coffee-valve-pouch-s-white-linen-100pcs',
        label: 'Size S (1/4 lb) (W160) - White Linen (100 Pcs)',
        dimensions: 'W160 × H170 + G60 mm • Holds ~120g coffee beans / ~50g loose tea • White Linen',
        hasHole: false,
        quantity: 100,
        totalPrice: 28.00,
        unitPrice: 0.2800,
        heroImageIndex: 3
      },
      {
        id: 'coffee-valve-pouch-s-white-linen-200pcs',
        label: 'Size S (1/4 lb) (W160) - White Linen (200 Pcs)',
        dimensions: 'W160 × H170 + G60 mm • Holds ~120g coffee beans / ~50g loose tea • White Linen',
        hasHole: false,
        quantity: 200,
        totalPrice: 50.40,
        unitPrice: 0.2520,
        heroImageIndex: 3
      },
      {
        id: 'coffee-valve-pouch-s-white-linen-500pcs',
        label: 'Size S (1/4 lb) (W160) - White Linen (500 Pcs)',
        dimensions: 'W160 × H170 + G60 mm • Holds ~120g coffee beans / ~50g loose tea • White Linen',
        hasHole: false,
        quantity: 500,
        totalPrice: 112.00,
        unitPrice: 0.2240,
        heroImageIndex: 3
      },
      {
        id: 'coffee-valve-pouch-m-natural-linen-100pcs',
        label: 'Size M (1/2 lb) (W190) - Natural Linen (100 Pcs)',
        dimensions: 'W190 × H200 + G70 mm • Holds ~250g coffee beans / ~100g loose tea • Natural Linen',
        hasHole: false,
        quantity: 100,
        totalPrice: 34.00,
        unitPrice: 0.3400,
        heroImageIndex: 0
      },
      {
        id: 'coffee-valve-pouch-m-natural-linen-200pcs',
        label: 'Size M (1/2 lb) (W190) - Natural Linen (200 Pcs)',
        dimensions: 'W190 × H200 + G70 mm • Holds ~250g coffee beans / ~100g loose tea • Natural Linen',
        hasHole: false,
        quantity: 200,
        totalPrice: 61.20,
        unitPrice: 0.3060,
        heroImageIndex: 0
      },
      {
        id: 'coffee-valve-pouch-m-natural-linen-500pcs',
        label: 'Size M (1/2 lb) (W190) - Natural Linen (500 Pcs)',
        dimensions: 'W190 × H200 + G70 mm • Holds ~250g coffee beans / ~100g loose tea • Natural Linen',
        hasHole: false,
        quantity: 500,
        totalPrice: 136.00,
        unitPrice: 0.2720,
        heroImageIndex: 0
      },
      {
        id: 'coffee-valve-pouch-m-natural-cork-100pcs',
        label: 'Size M (1/2 lb) (W190) - Natural Cork (100 Pcs)',
        dimensions: 'W190 × H200 + G70 mm • Holds ~250g coffee beans / ~100g loose tea • Natural Cork',
        hasHole: false,
        quantity: 100,
        totalPrice: 34.00,
        unitPrice: 0.3400,
        heroImageIndex: 1
      },
      {
        id: 'coffee-valve-pouch-m-natural-cork-200pcs',
        label: 'Size M (1/2 lb) (W190) - Natural Cork (200 Pcs)',
        dimensions: 'W190 × H200 + G70 mm • Holds ~250g coffee beans / ~100g loose tea • Natural Cork',
        hasHole: false,
        quantity: 200,
        totalPrice: 61.20,
        unitPrice: 0.3060,
        heroImageIndex: 1
      },
      {
        id: 'coffee-valve-pouch-m-natural-cork-500pcs',
        label: 'Size M (1/2 lb) (W190) - Natural Cork (500 Pcs)',
        dimensions: 'W190 × H200 + G70 mm • Holds ~250g coffee beans / ~100g loose tea • Natural Cork',
        hasHole: false,
        quantity: 500,
        totalPrice: 136.00,
        unitPrice: 0.2720,
        heroImageIndex: 1
      },
      {
        id: 'coffee-valve-pouch-m-charcoal-linen-100pcs',
        label: 'Size M (1/2 lb) (W190) - Charcoal Linen (100 Pcs)',
        dimensions: 'W190 × H200 + G70 mm • Holds ~250g coffee beans / ~100g loose tea • Charcoal Linen',
        hasHole: false,
        quantity: 100,
        totalPrice: 34.00,
        unitPrice: 0.3400,
        heroImageIndex: 2
      },
      {
        id: 'coffee-valve-pouch-m-charcoal-linen-200pcs',
        label: 'Size M (1/2 lb) (W190) - Charcoal Linen (200 Pcs)',
        dimensions: 'W190 × H200 + G70 mm • Holds ~250g coffee beans / ~100g loose tea • Charcoal Linen',
        hasHole: false,
        quantity: 200,
        totalPrice: 61.20,
        unitPrice: 0.3060,
        heroImageIndex: 2
      },
      {
        id: 'coffee-valve-pouch-m-charcoal-linen-500pcs',
        label: 'Size M (1/2 lb) (W190) - Charcoal Linen (500 Pcs)',
        dimensions: 'W190 × H200 + G70 mm • Holds ~250g coffee beans / ~100g loose tea • Charcoal Linen',
        hasHole: false,
        quantity: 500,
        totalPrice: 136.00,
        unitPrice: 0.2720,
        heroImageIndex: 2
      },
      {
        id: 'coffee-valve-pouch-m-white-linen-100pcs',
        label: 'Size M (1/2 lb) (W190) - White Linen (100 Pcs)',
        dimensions: 'W190 × H200 + G70 mm • Holds ~250g coffee beans / ~100g loose tea • White Linen',
        hasHole: false,
        quantity: 100,
        totalPrice: 34.00,
        unitPrice: 0.3400,
        heroImageIndex: 3
      },
      {
        id: 'coffee-valve-pouch-m-white-linen-200pcs',
        label: 'Size M (1/2 lb) (W190) - White Linen (200 Pcs)',
        dimensions: 'W190 × H200 + G70 mm • Holds ~250g coffee beans / ~100g loose tea • White Linen',
        hasHole: false,
        quantity: 200,
        totalPrice: 61.20,
        unitPrice: 0.3060,
        heroImageIndex: 3
      },
      {
        id: 'coffee-valve-pouch-m-white-linen-500pcs',
        label: 'Size M (1/2 lb) (W190) - White Linen (500 Pcs)',
        dimensions: 'W190 × H200 + G70 mm • Holds ~250g coffee beans / ~100g loose tea • White Linen',
        hasHole: false,
        quantity: 500,
        totalPrice: 136.00,
        unitPrice: 0.2720,
        heroImageIndex: 3
      },
      {
        id: 'coffee-valve-pouch-l-natural-linen-100pcs',
        label: 'Size L (1 lb) (W230) - Natural Linen (100 Pcs)',
        dimensions: 'W230 × H260 + G80 mm • Holds ~500g coffee beans / ~200g loose tea • Natural Linen',
        hasHole: false,
        quantity: 100,
        totalPrice: 42.00,
        unitPrice: 0.4200,
        heroImageIndex: 0
      },
      {
        id: 'coffee-valve-pouch-l-natural-linen-200pcs',
        label: 'Size L (1 lb) (W230) - Natural Linen (200 Pcs)',
        dimensions: 'W230 × H260 + G80 mm • Holds ~500g coffee beans / ~200g loose tea • Natural Linen',
        hasHole: false,
        quantity: 200,
        totalPrice: 75.60,
        unitPrice: 0.3780,
        heroImageIndex: 0
      },
      {
        id: 'coffee-valve-pouch-l-natural-linen-500pcs',
        label: 'Size L (1 lb) (W230) - Natural Linen (500 Pcs)',
        dimensions: 'W230 × H260 + G80 mm • Holds ~500g coffee beans / ~200g loose tea • Natural Linen',
        hasHole: false,
        quantity: 500,
        totalPrice: 168.00,
        unitPrice: 0.3360,
        heroImageIndex: 0
      },
      {
        id: 'coffee-valve-pouch-l-natural-cork-100pcs',
        label: 'Size L (1 lb) (W230) - Natural Cork (100 Pcs)',
        dimensions: 'W230 × H260 + G80 mm • Holds ~500g coffee beans / ~200g loose tea • Natural Cork',
        hasHole: false,
        quantity: 100,
        totalPrice: 42.00,
        unitPrice: 0.4200,
        heroImageIndex: 1
      },
      {
        id: 'coffee-valve-pouch-l-natural-cork-200pcs',
        label: 'Size L (1 lb) (W230) - Natural Cork (200 Pcs)',
        dimensions: 'W230 × H260 + G80 mm • Holds ~500g coffee beans / ~200g loose tea • Natural Cork',
        hasHole: false,
        quantity: 200,
        totalPrice: 75.60,
        unitPrice: 0.3780,
        heroImageIndex: 1
      },
      {
        id: 'coffee-valve-pouch-l-natural-cork-500pcs',
        label: 'Size L (1 lb) (W230) - Natural Cork (500 Pcs)',
        dimensions: 'W230 × H260 + G80 mm • Holds ~500g coffee beans / ~200g loose tea • Natural Cork',
        hasHole: false,
        quantity: 500,
        totalPrice: 168.00,
        unitPrice: 0.3360,
        heroImageIndex: 1
      },
      {
        id: 'coffee-valve-pouch-l-charcoal-linen-100pcs',
        label: 'Size L (1 lb) (W230) - Charcoal Linen (100 Pcs)',
        dimensions: 'W230 × H260 + G80 mm • Holds ~500g coffee beans / ~200g loose tea • Charcoal Linen',
        hasHole: false,
        quantity: 100,
        totalPrice: 42.00,
        unitPrice: 0.4200,
        heroImageIndex: 2
      },
      {
        id: 'coffee-valve-pouch-l-charcoal-linen-200pcs',
        label: 'Size L (1 lb) (W230) - Charcoal Linen (200 Pcs)',
        dimensions: 'W230 × H260 + G80 mm • Holds ~500g coffee beans / ~200g loose tea • Charcoal Linen',
        hasHole: false,
        quantity: 200,
        totalPrice: 75.60,
        unitPrice: 0.3780,
        heroImageIndex: 2
      },
      {
        id: 'coffee-valve-pouch-l-charcoal-linen-500pcs',
        label: 'Size L (1 lb) (W230) - Charcoal Linen (500 Pcs)',
        dimensions: 'W230 × H260 + G80 mm • Holds ~500g coffee beans / ~200g loose tea • Charcoal Linen',
        hasHole: false,
        quantity: 500,
        totalPrice: 168.00,
        unitPrice: 0.3360,
        heroImageIndex: 2
      },
      {
        id: 'coffee-valve-pouch-l-white-linen-100pcs',
        label: 'Size L (1 lb) (W230) - White Linen (100 Pcs)',
        dimensions: 'W230 × H260 + G80 mm • Holds ~500g coffee beans / ~200g loose tea • White Linen',
        hasHole: false,
        quantity: 100,
        totalPrice: 42.00,
        unitPrice: 0.4200,
        heroImageIndex: 3
      },
      {
        id: 'coffee-valve-pouch-l-white-linen-200pcs',
        label: 'Size L (1 lb) (W230) - White Linen (200 Pcs)',
        dimensions: 'W230 × H260 + G80 mm • Holds ~500g coffee beans / ~200g loose tea • White Linen',
        hasHole: false,
        quantity: 200,
        totalPrice: 75.60,
        unitPrice: 0.3780,
        heroImageIndex: 3
      },
      {
        id: 'coffee-valve-pouch-l-white-linen-500pcs',
        label: 'Size L (1 lb) (W230) - White Linen (500 Pcs)',
        dimensions: 'W230 × H260 + G80 mm • Holds ~500g coffee beans / ~200g loose tea • White Linen',
        hasHole: false,
        quantity: 500,
        totalPrice: 168.00,
        unitPrice: 0.3360,
        heroImageIndex: 3
      }
    ]
  },
  // Coffee & Tea Flat Bottom Pouch with Hanging Strip and One-Sided Zipper
  {
    id: 'coffee-tea-one-sided-zipper-flat-bottom-pouch-with-hanging-strip',
    name: 'Coffee & Tea One-Sided Zipper Flat Bottom Pouch with Hanging Strip',
    category: 'conventional-stock',
    description: 'An innovative, highly functional packaging solution featuring a robust iron-ring loop hanging strip for convenient carrying, coupled with an advanced easy-tear one-sided zipper and a built-in resealable zipper. Constructed from a premium three-layer high-barrier laminate (Matte BOPP + Natural White Kraft Paper + Metalized Foil + PE) with a substantial 150-micron thickness. Provides absolute protection from oxygen and moisture. Requires a heat sealer to seal the top above the zipper.',
    shortDesc: 'Innovative flat bottom pouch with carrying hanging strip, easy-tear T-zipper, and premium white kraft paper finish',
    features: [
      'Sturdy Iron-Ring Loop Hanging Strip Design for Effortless Carrying & Hanging',
      'Advanced One-Sided T-Zipper & Easy-Tear Tab for Easy Opening & Resealing',
      'Premium Three-Layer White Kraft Paper & Metalized Foil High-Barrier Laminate',
      'Robust 150-Micron Thickness for Ultimate Shelf Protection and Durability',
      'Sturdy Eight-Side Sealed Box-Bottom Design for Perfect Shelf Presentation',
      'Available in 4 Rich Modern Matte Finishes: Cream White, Vibrant Orange, Forest Green, Matte Black'
    ],
    images: [
      '/taobao/coffee-tea-one-sided-zipper-flat-bottom-pouch-with-hanging-strip/O1CN01ACAOHt28L7lplHT7k_--2212393587915.jpg',
      '/taobao/coffee-tea-one-sided-zipper-flat-bottom-pouch-with-hanging-strip/O1CN01bk9Azf28L7loR20Cy_--2212393587915-jpg_.webp',
      '/taobao/coffee-tea-one-sided-zipper-flat-bottom-pouch-with-hanging-strip/O1CN01iiKC5x28L7lle7d5d_--2212393587915-jpg_.webp',
      '/taobao/coffee-tea-one-sided-zipper-flat-bottom-pouch-with-hanging-strip/O1CN016otCNc28L7ljGUulx_--2212393587915-jpg_.webp',
      '/taobao/coffee-tea-one-sided-zipper-flat-bottom-pouch-with-hanging-strip/O1CN01TbTsTy28L7lrJNeeB_--2212393587915-jpg_.webp',
      '/taobao/coffee-tea-one-sided-zipper-flat-bottom-pouch-with-hanging-strip/O1CN01QROZcL28L7v9IQ2MN_--2212393587915.png',
      '/taobao/coffee-tea-one-sided-zipper-flat-bottom-pouch-with-hanging-strip/O1CN01xi7XkG28L7li8vWk8_--2212393587915.jpg',
      '/taobao/coffee-tea-one-sided-zipper-flat-bottom-pouch-with-hanging-strip/O1CN01bgvyUY28L7lqa6tVI_--2212393587915.jpg',
      '/taobao/coffee-tea-one-sided-zipper-flat-bottom-pouch-with-hanging-strip/O1CN01IgoaoG28L7ldYZERu_--2212393587915.jpg',
      '/taobao/coffee-tea-one-sided-zipper-flat-bottom-pouch-with-hanging-strip/O1CN01lPYfhj28L7lpQsWLZ_--2212393587915.jpg',
      '/taobao/coffee-tea-one-sided-zipper-flat-bottom-pouch-with-hanging-strip/O1CN01WZUyAk28L7lma4XDa_--2212393587915.jpg'
    ],
    badge: '⭐ Portable Carrying Loop',
    rating: 4.8,
    reviews: 95,
    inStock: true,
    turnaround: '3-5 days',
    minOrder: 100,
    shape: 'Flat Bottom Box Pouch',
    material: 'Matte BOPP + Natural White Kraft Paper + Metalized Foil + PE Laminate (150 Microns)',
    basePrice: 32.00,
    pricePerPiece: 0.320,
    minQuantity: 100,
    quantityStep: 100,
    sizeInfo: 'Small (14.5×14+9cm) / Medium (17×15.5+9.5cm) / Large (21.5×20+10cm)',
    shelfLife: '+36 months',
    certification: 'FDA Food-Grade & FSC Certified',
    customPrintNote: 'Custom logo stamps and high-end label prints available from 1,000+ pieces. Please consult our team.',
    sizeVariants: [
      {
        id: 'hanging-strip-pouch-s-cream-white-100pcs',
        label: 'Size S (W14.5 × H14 + G9 cm) - Cream White (100 Pcs)',
        dimensions: 'W14.5 × H14 + G9 cm (Hanging Strip: 30cm) • Holds ~160g coffee beans / ~70g green tea • Cream White',
        hasHole: false,
        quantity: 100,
        totalPrice: 32.00,
        unitPrice: 0.3200,
        heroImageIndex: 1
      },
      {
        id: 'hanging-strip-pouch-s-cream-white-200pcs',
        label: 'Size S (W14.5 × H14 + G9 cm) - Cream White (200 Pcs)',
        dimensions: 'W14.5 × H14 + G9 cm (Hanging Strip: 30cm) • Holds ~160g coffee beans / ~70g green tea • Cream White',
        hasHole: false,
        quantity: 200,
        totalPrice: 57.60,
        unitPrice: 0.2880,
        heroImageIndex: 1
      },
      {
        id: 'hanging-strip-pouch-s-cream-white-500pcs',
        label: 'Size S (W14.5 × H14 + G9 cm) - Cream White (500 Pcs)',
        dimensions: 'W14.5 × H14 + G9 cm (Hanging Strip: 30cm) • Holds ~160g coffee beans / ~70g green tea • Cream White',
        hasHole: false,
        quantity: 500,
        totalPrice: 128.00,
        unitPrice: 0.2560,
        heroImageIndex: 1
      },
      {
        id: 'hanging-strip-pouch-s-vibrant-orange-100pcs',
        label: 'Size S (W14.5 × H14 + G9 cm) - Vibrant Orange (100 Pcs)',
        dimensions: 'W14.5 × H14 + G9 cm (Hanging Strip: 30cm) • Holds ~160g coffee beans / ~70g green tea • Vibrant Orange',
        hasHole: false,
        quantity: 100,
        totalPrice: 32.00,
        unitPrice: 0.3200,
        heroImageIndex: 2
      },
      {
        id: 'hanging-strip-pouch-s-vibrant-orange-200pcs',
        label: 'Size S (W14.5 × H14 + G9 cm) - Vibrant Orange (200 Pcs)',
        dimensions: 'W14.5 × H14 + G9 cm (Hanging Strip: 30cm) • Holds ~160g coffee beans / ~70g green tea • Vibrant Orange',
        hasHole: false,
        quantity: 200,
        totalPrice: 57.60,
        unitPrice: 0.2880,
        heroImageIndex: 2
      },
      {
        id: 'hanging-strip-pouch-s-vibrant-orange-500pcs',
        label: 'Size S (W14.5 × H14 + G9 cm) - Vibrant Orange (500 Pcs)',
        dimensions: 'W14.5 × H14 + G9 cm (Hanging Strip: 30cm) • Holds ~160g coffee beans / ~70g green tea • Vibrant Orange',
        hasHole: false,
        quantity: 500,
        totalPrice: 128.00,
        unitPrice: 0.2560,
        heroImageIndex: 2
      },
      {
        id: 'hanging-strip-pouch-s-forest-green-100pcs',
        label: 'Size S (W14.5 × H14 + G9 cm) - Forest Green (100 Pcs)',
        dimensions: 'W14.5 × H14 + G9 cm (Hanging Strip: 30cm) • Holds ~160g coffee beans / ~70g green tea • Forest Green',
        hasHole: false,
        quantity: 100,
        totalPrice: 32.00,
        unitPrice: 0.3200,
        heroImageIndex: 3
      },
      {
        id: 'hanging-strip-pouch-s-forest-green-200pcs',
        label: 'Size S (W14.5 × H14 + G9 cm) - Forest Green (200 Pcs)',
        dimensions: 'W14.5 × H14 + G9 cm (Hanging Strip: 30cm) • Holds ~160g coffee beans / ~70g green tea • Forest Green',
        hasHole: false,
        quantity: 200,
        totalPrice: 57.60,
        unitPrice: 0.2880,
        heroImageIndex: 3
      },
      {
        id: 'hanging-strip-pouch-s-forest-green-500pcs',
        label: 'Size S (W14.5 × H14 + G9 cm) - Forest Green (500 Pcs)',
        dimensions: 'W14.5 × H14 + G9 cm (Hanging Strip: 30cm) • Holds ~160g coffee beans / ~70g green tea • Forest Green',
        hasHole: false,
        quantity: 500,
        totalPrice: 128.00,
        unitPrice: 0.2560,
        heroImageIndex: 3
      },
      {
        id: 'hanging-strip-pouch-s-matte-black-100pcs',
        label: 'Size S (W14.5 × H14 + G9 cm) - Matte Black (100 Pcs)',
        dimensions: 'W14.5 × H14 + G9 cm (Hanging Strip: 30cm) • Holds ~160g coffee beans / ~70g green tea • Matte Black',
        hasHole: false,
        quantity: 100,
        totalPrice: 32.00,
        unitPrice: 0.3200,
        heroImageIndex: 4
      },
      {
        id: 'hanging-strip-pouch-s-matte-black-200pcs',
        label: 'Size S (W14.5 × H14 + G9 cm) - Matte Black (200 Pcs)',
        dimensions: 'W14.5 × H14 + G9 cm (Hanging Strip: 30cm) • Holds ~160g coffee beans / ~70g green tea • Matte Black',
        hasHole: false,
        quantity: 200,
        totalPrice: 57.60,
        unitPrice: 0.2880,
        heroImageIndex: 4
      },
      {
        id: 'hanging-strip-pouch-s-matte-black-500pcs',
        label: 'Size S (W14.5 × H14 + G9 cm) - Matte Black (500 Pcs)',
        dimensions: 'W14.5 × H14 + G9 cm (Hanging Strip: 30cm) • Holds ~160g coffee beans / ~70g green tea • Matte Black',
        hasHole: false,
        quantity: 500,
        totalPrice: 128.00,
        unitPrice: 0.2560,
        heroImageIndex: 4
      },
      {
        id: 'hanging-strip-pouch-m-cream-white-100pcs',
        label: 'Size M (W17 × H15.5 + G9.5 cm) - Cream White (100 Pcs)',
        dimensions: 'W17 × H15.5 + G9.5 cm (Hanging Strip: 30cm) • Holds ~185g coffee beans / ~120g green tea • Cream White',
        hasHole: false,
        quantity: 100,
        totalPrice: 39.00,
        unitPrice: 0.3900,
        heroImageIndex: 1
      },
      {
        id: 'hanging-strip-pouch-m-cream-white-200pcs',
        label: 'Size M (W17 × H15.5 + G9.5 cm) - Cream White (200 Pcs)',
        dimensions: 'W17 × H15.5 + G9.5 cm (Hanging Strip: 30cm) • Holds ~185g coffee beans / ~120g green tea • Cream White',
        hasHole: false,
        quantity: 200,
        totalPrice: 70.20,
        unitPrice: 0.3510,
        heroImageIndex: 1
      },
      {
        id: 'hanging-strip-pouch-m-cream-white-500pcs',
        label: 'Size M (W17 × H15.5 + G9.5 cm) - Cream White (500 Pcs)',
        dimensions: 'W17 × H15.5 + G9.5 cm (Hanging Strip: 30cm) • Holds ~185g coffee beans / ~120g green tea • Cream White',
        hasHole: false,
        quantity: 500,
        totalPrice: 156.00,
        unitPrice: 0.3120,
        heroImageIndex: 1
      },
      {
        id: 'hanging-strip-pouch-m-vibrant-orange-100pcs',
        label: 'Size M (W17 × H15.5 + G9.5 cm) - Vibrant Orange (100 Pcs)',
        dimensions: 'W17 × H15.5 + G9.5 cm (Hanging Strip: 30cm) • Holds ~185g coffee beans / ~120g green tea • Vibrant Orange',
        hasHole: false,
        quantity: 100,
        totalPrice: 39.00,
        unitPrice: 0.3900,
        heroImageIndex: 2
      },
      {
        id: 'hanging-strip-pouch-m-vibrant-orange-200pcs',
        label: 'Size M (W17 × H15.5 + G9.5 cm) - Vibrant Orange (200 Pcs)',
        dimensions: 'W17 × H15.5 + G9.5 cm (Hanging Strip: 30cm) • Holds ~185g coffee beans / ~120g green tea • Vibrant Orange',
        hasHole: false,
        quantity: 200,
        totalPrice: 70.20,
        unitPrice: 0.3510,
        heroImageIndex: 2
      },
      {
        id: 'hanging-strip-pouch-m-vibrant-orange-500pcs',
        label: 'Size M (W17 × H15.5 + G9.5 cm) - Vibrant Orange (500 Pcs)',
        dimensions: 'W17 × H15.5 + G9.5 cm (Hanging Strip: 30cm) • Holds ~185g coffee beans / ~120g green tea • Vibrant Orange',
        hasHole: false,
        quantity: 500,
        totalPrice: 156.00,
        unitPrice: 0.3120,
        heroImageIndex: 2
      },
      {
        id: 'hanging-strip-pouch-m-forest-green-100pcs',
        label: 'Size M (W17 × H15.5 + G9.5 cm) - Forest Green (100 Pcs)',
        dimensions: 'W17 × H15.5 + G9.5 cm (Hanging Strip: 30cm) • Holds ~185g coffee beans / ~120g green tea • Forest Green',
        hasHole: false,
        quantity: 100,
        totalPrice: 39.00,
        unitPrice: 0.3900,
        heroImageIndex: 3
      },
      {
        id: 'hanging-strip-pouch-m-forest-green-200pcs',
        label: 'Size M (W17 × H15.5 + G9.5 cm) - Forest Green (200 Pcs)',
        dimensions: 'W17 × H15.5 + G9.5 cm (Hanging Strip: 30cm) • Holds ~185g coffee beans / ~120g green tea • Forest Green',
        hasHole: false,
        quantity: 200,
        totalPrice: 70.20,
        unitPrice: 0.3510,
        heroImageIndex: 3
      },
      {
        id: 'hanging-strip-pouch-m-forest-green-500pcs',
        label: 'Size M (W17 × H15.5 + G9.5 cm) - Forest Green (500 Pcs)',
        dimensions: 'W17 × H15.5 + G9.5 cm (Hanging Strip: 30cm) • Holds ~185g coffee beans / ~120g green tea • Forest Green',
        hasHole: false,
        quantity: 500,
        totalPrice: 156.00,
        unitPrice: 0.3120,
        heroImageIndex: 3
      },
      {
        id: 'hanging-strip-pouch-m-matte-black-100pcs',
        label: 'Size M (W17 × H15.5 + G9.5 cm) - Matte Black (100 Pcs)',
        dimensions: 'W17 × H15.5 + G9.5 cm (Hanging Strip: 30cm) • Holds ~185g coffee beans / ~120g green tea • Matte Black',
        hasHole: false,
        quantity: 100,
        totalPrice: 39.00,
        unitPrice: 0.3900,
        heroImageIndex: 4
      },
      {
        id: 'hanging-strip-pouch-m-matte-black-200pcs',
        label: 'Size M (W17 × H15.5 + G9.5 cm) - Matte Black (200 Pcs)',
        dimensions: 'W17 × H15.5 + G9.5 cm (Hanging Strip: 30cm) • Holds ~185g coffee beans / ~120g green tea • Matte Black',
        hasHole: false,
        quantity: 200,
        totalPrice: 70.20,
        unitPrice: 0.3510,
        heroImageIndex: 4
      },
      {
        id: 'hanging-strip-pouch-m-matte-black-500pcs',
        label: 'Size M (W17 × H15.5 + G9.5 cm) - Matte Black (500 Pcs)',
        dimensions: 'W17 × H15.5 + G9.5 cm (Hanging Strip: 30cm) • Holds ~185g coffee beans / ~120g green tea • Matte Black',
        hasHole: false,
        quantity: 500,
        totalPrice: 156.00,
        unitPrice: 0.3120,
        heroImageIndex: 4
      },
      {
        id: 'hanging-strip-pouch-l-cream-white-100pcs',
        label: 'Size L (W21.5 × H20 + G10 cm) - Cream White (100 Pcs)',
        dimensions: 'W21.5 × H20 + G10 cm (Hanging Strip: 40cm) • Holds ~530g coffee beans / ~300g green tea • Cream White',
        hasHole: false,
        quantity: 100,
        totalPrice: 48.00,
        unitPrice: 0.4800,
        heroImageIndex: 1
      },
      {
        id: 'hanging-strip-pouch-l-cream-white-200pcs',
        label: 'Size L (W21.5 × H20 + G10 cm) - Cream White (200 Pcs)',
        dimensions: 'W21.5 × H20 + G10 cm (Hanging Strip: 40cm) • Holds ~530g coffee beans / ~300g green tea • Cream White',
        hasHole: false,
        quantity: 200,
        totalPrice: 86.40,
        unitPrice: 0.4320,
        heroImageIndex: 1
      },
      {
        id: 'hanging-strip-pouch-l-cream-white-500pcs',
        label: 'Size L (W21.5 × H20 + G10 cm) - Cream White (500 Pcs)',
        dimensions: 'W21.5 × H20 + G10 cm (Hanging Strip: 40cm) • Holds ~530g coffee beans / ~300g green tea • Cream White',
        hasHole: false,
        quantity: 500,
        totalPrice: 192.00,
        unitPrice: 0.3840,
        heroImageIndex: 1
      },
      {
        id: 'hanging-strip-pouch-l-vibrant-orange-100pcs',
        label: 'Size L (W21.5 × H20 + G10 cm) - Vibrant Orange (100 Pcs)',
        dimensions: 'W21.5 × H20 + G10 cm (Hanging Strip: 40cm) • Holds ~530g coffee beans / ~300g green tea • Vibrant Orange',
        hasHole: false,
        quantity: 100,
        totalPrice: 48.00,
        unitPrice: 0.4800,
        heroImageIndex: 2
      },
      {
        id: 'hanging-strip-pouch-l-vibrant-orange-200pcs',
        label: 'Size L (W21.5 × H20 + G10 cm) - Vibrant Orange (200 Pcs)',
        dimensions: 'W21.5 × H20 + G10 cm (Hanging Strip: 40cm) • Holds ~530g coffee beans / ~300g green tea • Vibrant Orange',
        hasHole: false,
        quantity: 200,
        totalPrice: 86.40,
        unitPrice: 0.4320,
        heroImageIndex: 2
      },
      {
        id: 'hanging-strip-pouch-l-vibrant-orange-500pcs',
        label: 'Size L (W21.5 × H20 + G10 cm) - Vibrant Orange (500 Pcs)',
        dimensions: 'W21.5 × H20 + G10 cm (Hanging Strip: 40cm) • Holds ~530g coffee beans / ~300g green tea • Vibrant Orange',
        hasHole: false,
        quantity: 500,
        totalPrice: 192.00,
        unitPrice: 0.3840,
        heroImageIndex: 2
      },
      {
        id: 'hanging-strip-pouch-l-forest-green-100pcs',
        label: 'Size L (W21.5 × H20 + G10 cm) - Forest Green (100 Pcs)',
        dimensions: 'W21.5 × H20 + G10 cm (Hanging Strip: 40cm) • Holds ~530g coffee beans / ~300g green tea • Forest Green',
        hasHole: false,
        quantity: 100,
        totalPrice: 48.00,
        unitPrice: 0.4800,
        heroImageIndex: 3
      },
      {
        id: 'hanging-strip-pouch-l-forest-green-200pcs',
        label: 'Size L (W21.5 × H20 + G10 cm) - Forest Green (200 Pcs)',
        dimensions: 'W21.5 × H20 + G10 cm (Hanging Strip: 40cm) • Holds ~530g coffee beans / ~300g green tea • Forest Green',
        hasHole: false,
        quantity: 200,
        totalPrice: 86.40,
        unitPrice: 0.4320,
        heroImageIndex: 3
      },
      {
        id: 'hanging-strip-pouch-l-forest-green-500pcs',
        label: 'Size L (W21.5 × H20 + G10 cm) - Forest Green (500 Pcs)',
        dimensions: 'W21.5 × H20 + G10 cm (Hanging Strip: 40cm) • Holds ~530g coffee beans / ~300g green tea • Forest Green',
        hasHole: false,
        quantity: 500,
        totalPrice: 192.00,
        unitPrice: 0.3840,
        heroImageIndex: 3
      },
      {
        id: 'hanging-strip-pouch-l-matte-black-100pcs',
        label: 'Size L (W21.5 × H20 + G10 cm) - Matte Black (100 Pcs)',
        dimensions: 'W21.5 × H20 + G10 cm (Hanging Strip: 40cm) • Holds ~530g coffee beans / ~300g green tea • Matte Black',
        hasHole: false,
        quantity: 100,
        totalPrice: 48.00,
        unitPrice: 0.4800,
        heroImageIndex: 4
      },
      {
        id: 'hanging-strip-pouch-l-matte-black-200pcs',
        label: 'Size L (W21.5 × H20 + G10 cm) - Matte Black (200 Pcs)',
        dimensions: 'W21.5 × H20 + G10 cm (Hanging Strip: 40cm) • Holds ~530g coffee beans / ~300g green tea • Matte Black',
        hasHole: false,
        quantity: 200,
        totalPrice: 86.40,
        unitPrice: 0.4320,
        heroImageIndex: 4
      },
      {
        id: 'hanging-strip-pouch-l-matte-black-500pcs',
        label: 'Size L (W21.5 × H20 + G10 cm) - Matte Black (500 Pcs)',
        dimensions: 'W21.5 × H20 + G10 cm (Hanging Strip: 40cm) • Holds ~530g coffee beans / ~300g green tea • Matte Black',
        hasHole: false,
        quantity: 500,
        totalPrice: 192.00,
        unitPrice: 0.3840,
        heroImageIndex: 4
      }
    ]
  },
  // Flat Bottom Pouch with Tin Tie
  {
    id: 'flat-bottom-pouch-tin-tie',
    name: 'Flat Bottom Pouch with Tin Tie',
    category: 'conventional-stock',
    description: 'A premium eight-side sealed box bottom pouch featuring an integrated thickened dual-wire tin tie closure. Specially constructed with high-barrier food-grade laminated layers (BOPP, Aluminum Foil, and PE) to offer superior protection against oxygen, moisture, and light. Perfect for specialty coffees, loose-leaf teas, baking mixes, premium snacks, and cookies that require repeated resealing while maintaining peak freshness.',
    shortDesc: 'Premium eight-side sealed flat bottom pouch with thickened dual-wire tin tie closure for coffee, tea, and dry food',
    features: [
      'Thickened Dual-Wire Tin Tie Closure for N-Times Reusable Freshness Seal',
      'Sturdy Eight-Side Sealed Box-Bottom Design for Perfect Shelf Presentation',
      'Matte BOPP + Pure Aluminum Foil Core + Food-Grade PE High-Barrier Laminate',
      'Total 120-Micron Thickness for Maximum Tear and Puncture Resistance',
      'Perfect for Specialty Loose-Leaf Tea, Fresh Coffee Beans, and Premium Snacks',
      'Available in 3 Stunning Matte Finishes: Silver, Green, and Red'
    ],
    images: [
      '/taobao/flat-bottom-pouch-with-tin-tie/O1CN01aO3ItC1gN8UhkLMx2_--2212321894129.jpg',
      '/taobao/flat-bottom-pouch-with-tin-tie/O1CN017pqUbO1gN8S61NEjn_--2212321894129-jpg_.webp',
      '/taobao/flat-bottom-pouch-with-tin-tie/O1CN012CiLlS1gN8S7Buk89_--2212321894129-jpg_.webp',
      '/taobao/flat-bottom-pouch-with-tin-tie/O1CN01PaVDCI1gN8S6QoVlJ_--2212321894129-jpg_.webp',
      '/taobao/flat-bottom-pouch-with-tin-tie/O1CN01tmQOOs1gN8S6kD19i_--2212321894129-jpg_.webp',
      '/taobao/flat-bottom-pouch-with-tin-tie/O1CN01jb0Vf31gN8S7J39lJ_--2212321894129-jpg_.webp',
      '/taobao/flat-bottom-pouch-with-tin-tie/O1CN01ep0Hfy1gN8S6QnAc9_--2212321894129-jpg_.webp',
      '/taobao/flat-bottom-pouch-with-tin-tie/O1CN01L5Us811gN8S1GYt31_--2212321894129-jpg_.webp',
      '/taobao/flat-bottom-pouch-with-tin-tie/O1CN018fSrGZ1gN8S6tnF6M_--2212321894129-jpg_.webp',
      '/taobao/flat-bottom-pouch-with-tin-tie/O1CN01o1HtsJ1gN8S5ynWBV_--2212321894129-jpg_.webp',
      '/taobao/flat-bottom-pouch-with-tin-tie/O1CN01woyzD81gN8S7BsrkD_--2212321894129-jpg_.webp',
      '/taobao/flat-bottom-pouch-with-tin-tie/O1CN01q88kyR1gN8S7BvwzM_--2212321894129-jpg_.webp',
      '/taobao/flat-bottom-pouch-with-tin-tie/O1CN01namHli1gN8S6rFS6K_--2212321894129-jpg_.webp'
    ],
    badge: '⭐ Premium Freshness Seal',
    rating: 4.9,
    reviews: 112,
    inStock: true,
    turnaround: '3-5 days',
    minOrder: 100,
    shape: 'Flat Bottom Box Pouch',
    material: 'Matte BOPP + Pure Aluminum Foil + Food-Grade PE High-Barrier Laminate (120 Microns)',
    basePrice: 22.00,
    pricePerPiece: 0.220,
    minQuantity: 100,
    quantityStep: 100,
    sizeInfo: '125g (20×11+9.5cm) / 250g (20×14+9.5cm) / 500g (25×19+11cm) / 750g (30×25+13cm)',
    shelfLife: '+36 months',
    certification: 'FDA Food-Grade & FSC Certified',
    customPrintNote: 'Custom prints and metallic color enhancements available from 1,000+ pieces. Please consult our team.',
    sizeVariants: [
      {
        id: 'tin-tie-pouch-125g-matte-silver-100pcs',
        label: 'Size S (125g) - Matte Silver (100 Pcs)',
        dimensions: 'W11 × H20 + G9.5 cm • Holds ~125g loose tea / coffee beans • Matte Silver',
        hasHole: false,
        quantity: 100,
        totalPrice: 22.00,
        unitPrice: 0.2200,
        heroImageIndex: 1
      },
      {
        id: 'tin-tie-pouch-125g-matte-silver-200pcs',
        label: 'Size S (125g) - Matte Silver (200 Pcs)',
        dimensions: 'W11 × H20 + G9.5 cm • Holds ~125g loose tea / coffee beans • Matte Silver',
        hasHole: false,
        quantity: 200,
        totalPrice: 39.60,
        unitPrice: 0.1980,
        heroImageIndex: 1
      },
      {
        id: 'tin-tie-pouch-125g-matte-silver-500pcs',
        label: 'Size S (125g) - Matte Silver (500 Pcs)',
        dimensions: 'W11 × H20 + G9.5 cm • Holds ~125g loose tea / coffee beans • Matte Silver',
        hasHole: false,
        quantity: 500,
        totalPrice: 88.00,
        unitPrice: 0.1760,
        heroImageIndex: 1
      },
      {
        id: 'tin-tie-pouch-125g-forest-green-100pcs',
        label: 'Size S (125g) - Forest Green (100 Pcs)',
        dimensions: 'W11 × H20 + G9.5 cm • Holds ~125g loose tea / coffee beans • Forest Green',
        hasHole: false,
        quantity: 100,
        totalPrice: 22.00,
        unitPrice: 0.2200,
        heroImageIndex: 5
      },
      {
        id: 'tin-tie-pouch-125g-forest-green-200pcs',
        label: 'Size S (125g) - Forest Green (200 Pcs)',
        dimensions: 'W11 × H20 + G9.5 cm • Holds ~125g loose tea / coffee beans • Forest Green',
        hasHole: false,
        quantity: 200,
        totalPrice: 39.60,
        unitPrice: 0.1980,
        heroImageIndex: 5
      },
      {
        id: 'tin-tie-pouch-125g-forest-green-500pcs',
        label: 'Size S (125g) - Forest Green (500 Pcs)',
        dimensions: 'W11 × H20 + G9.5 cm • Holds ~125g loose tea / coffee beans • Forest Green',
        hasHole: false,
        quantity: 500,
        totalPrice: 88.00,
        unitPrice: 0.1760,
        heroImageIndex: 5
      },
      {
        id: 'tin-tie-pouch-125g-ruby-red-100pcs',
        label: 'Size S (125g) - Ruby Red (100 Pcs)',
        dimensions: 'W11 × H20 + G9.5 cm • Holds ~125g loose tea / coffee beans • Ruby Red',
        hasHole: false,
        quantity: 100,
        totalPrice: 22.00,
        unitPrice: 0.2200,
        heroImageIndex: 9
      },
      {
        id: 'tin-tie-pouch-125g-ruby-red-200pcs',
        label: 'Size S (125g) - Ruby Red (200 Pcs)',
        dimensions: 'W11 × H20 + G9.5 cm • Holds ~125g loose tea / coffee beans • Ruby Red',
        hasHole: false,
        quantity: 200,
        totalPrice: 39.60,
        unitPrice: 0.1980,
        heroImageIndex: 9
      },
      {
        id: 'tin-tie-pouch-125g-ruby-red-500pcs',
        label: 'Size S (125g) - Ruby Red (500 Pcs)',
        dimensions: 'W11 × H20 + G9.5 cm • Holds ~125g loose tea / coffee beans • Ruby Red',
        hasHole: false,
        quantity: 500,
        totalPrice: 88.00,
        unitPrice: 0.1760,
        heroImageIndex: 9
      },
      {
        id: 'tin-tie-pouch-250g-matte-silver-100pcs',
        label: 'Size M (250g) - Matte Silver (100 Pcs)',
        dimensions: 'W14 × H20 + G9.5 cm • Holds ~250g loose tea / coffee beans • Matte Silver',
        hasHole: false,
        quantity: 100,
        totalPrice: 28.00,
        unitPrice: 0.2800,
        heroImageIndex: 2
      },
      {
        id: 'tin-tie-pouch-250g-matte-silver-200pcs',
        label: 'Size M (250g) - Matte Silver (200 Pcs)',
        dimensions: 'W14 × H20 + G9.5 cm • Holds ~250g loose tea / coffee beans • Matte Silver',
        hasHole: false,
        quantity: 200,
        totalPrice: 50.40,
        unitPrice: 0.2520,
        heroImageIndex: 2
      },
      {
        id: 'tin-tie-pouch-250g-matte-silver-500pcs',
        label: 'Size M (250g) - Matte Silver (500 Pcs)',
        dimensions: 'W14 × H20 + G9.5 cm • Holds ~250g loose tea / coffee beans • Matte Silver',
        hasHole: false,
        quantity: 500,
        totalPrice: 110.00,
        unitPrice: 0.2200,
        heroImageIndex: 2
      },
      {
        id: 'tin-tie-pouch-250g-forest-green-100pcs',
        label: 'Size M (250g) - Forest Green (100 Pcs)',
        dimensions: 'W14 × H20 + G9.5 cm • Holds ~250g loose tea / coffee beans • Forest Green',
        hasHole: false,
        quantity: 100,
        totalPrice: 28.00,
        unitPrice: 0.2800,
        heroImageIndex: 6
      },
      {
        id: 'tin-tie-pouch-250g-forest-green-200pcs',
        label: 'Size M (250g) - Forest Green (200 Pcs)',
        dimensions: 'W14 × H20 + G9.5 cm • Holds ~250g loose tea / coffee beans • Forest Green',
        hasHole: false,
        quantity: 200,
        totalPrice: 50.40,
        unitPrice: 0.2520,
        heroImageIndex: 6
      },
      {
        id: 'tin-tie-pouch-250g-forest-green-500pcs',
        label: 'Size M (250g) - Forest Green (500 Pcs)',
        dimensions: 'W14 × H20 + G9.5 cm • Holds ~250g loose tea / coffee beans • Forest Green',
        hasHole: false,
        quantity: 500,
        totalPrice: 110.00,
        unitPrice: 0.2200,
        heroImageIndex: 6
      },
      {
        id: 'tin-tie-pouch-250g-ruby-red-100pcs',
        label: 'Size M (250g) - Ruby Red (100 Pcs)',
        dimensions: 'W14 × H20 + G9.5 cm • Holds ~250g loose tea / coffee beans • Ruby Red',
        hasHole: false,
        quantity: 100,
        totalPrice: 28.00,
        unitPrice: 0.2800,
        heroImageIndex: 10
      },
      {
        id: 'tin-tie-pouch-250g-ruby-red-200pcs',
        label: 'Size M (250g) - Ruby Red (200 Pcs)',
        dimensions: 'W14 × H20 + G9.5 cm • Holds ~250g loose tea / coffee beans • Ruby Red',
        hasHole: false,
        quantity: 200,
        totalPrice: 50.40,
        unitPrice: 0.2520,
        heroImageIndex: 10
      },
      {
        id: 'tin-tie-pouch-250g-ruby-red-500pcs',
        label: 'Size M (250g) - Ruby Red (500 Pcs)',
        dimensions: 'W14 × H20 + G9.5 cm • Holds ~250g loose tea / coffee beans • Ruby Red',
        hasHole: false,
        quantity: 500,
        totalPrice: 110.00,
        unitPrice: 0.2200,
        heroImageIndex: 10
      },
      {
        id: 'tin-tie-pouch-500g-matte-silver-100pcs',
        label: 'Size L (500g) - Matte Silver (100 Pcs)',
        dimensions: 'W19 × H25 + G11 cm • Holds ~500g loose tea / coffee beans • Matte Silver',
        hasHole: false,
        quantity: 100,
        totalPrice: 35.00,
        unitPrice: 0.3500,
        heroImageIndex: 3
      },
      {
        id: 'tin-tie-pouch-500g-matte-silver-200pcs',
        label: 'Size L (500g) - Matte Silver (200 Pcs)',
        dimensions: 'W19 × H25 + G11 cm • Holds ~500g loose tea / coffee beans • Matte Silver',
        hasHole: false,
        quantity: 200,
        totalPrice: 63.00,
        unitPrice: 0.3150,
        heroImageIndex: 3
      },
      {
        id: 'tin-tie-pouch-500g-matte-silver-500pcs',
        label: 'Size L (500g) - Matte Silver (500 Pcs)',
        dimensions: 'W19 × H25 + G11 cm • Holds ~500g loose tea / coffee beans • Matte Silver',
        hasHole: false,
        quantity: 500,
        totalPrice: 140.00,
        unitPrice: 0.2800,
        heroImageIndex: 3
      },
      {
        id: 'tin-tie-pouch-500g-forest-green-100pcs',
        label: 'Size L (500g) - Forest Green (100 Pcs)',
        dimensions: 'W19 × H25 + G11 cm • Holds ~500g loose tea / coffee beans • Forest Green',
        hasHole: false,
        quantity: 100,
        totalPrice: 35.00,
        unitPrice: 0.3500,
        heroImageIndex: 7
      },
      {
        id: 'tin-tie-pouch-500g-forest-green-200pcs',
        label: 'Size L (500g) - Forest Green (200 Pcs)',
        dimensions: 'W19 × H25 + G11 cm • Holds ~500g loose tea / coffee beans • Forest Green',
        hasHole: false,
        quantity: 200,
        totalPrice: 63.00,
        unitPrice: 0.3150,
        heroImageIndex: 7
      },
      {
        id: 'tin-tie-pouch-500g-forest-green-500pcs',
        label: 'Size L (500g) - Forest Green (500 Pcs)',
        dimensions: 'W19 × H25 + G11 cm • Holds ~500g loose tea / coffee beans • Forest Green',
        hasHole: false,
        quantity: 500,
        totalPrice: 140.00,
        unitPrice: 0.2800,
        heroImageIndex: 7
      },
      {
        id: 'tin-tie-pouch-500g-ruby-red-100pcs',
        label: 'Size L (500g) - Ruby Red (100 Pcs)',
        dimensions: 'W19 × H25 + G11 cm • Holds ~500g loose tea / coffee beans • Ruby Red',
        hasHole: false,
        quantity: 100,
        totalPrice: 35.00,
        unitPrice: 0.3500,
        heroImageIndex: 11
      },
      {
        id: 'tin-tie-pouch-500g-ruby-red-200pcs',
        label: 'Size L (500g) - Ruby Red (200 Pcs)',
        dimensions: 'W19 × H25 + G11 cm • Holds ~500g loose tea / coffee beans • Ruby Red',
        hasHole: false,
        quantity: 200,
        totalPrice: 63.00,
        unitPrice: 0.3150,
        heroImageIndex: 11
      },
      {
        id: 'tin-tie-pouch-500g-ruby-red-500pcs',
        label: 'Size L (500g) - Ruby Red (500 Pcs)',
        dimensions: 'W19 × H25 + G11 cm • Holds ~500g loose tea / coffee beans • Ruby Red',
        hasHole: false,
        quantity: 500,
        totalPrice: 140.00,
        unitPrice: 0.2800,
        heroImageIndex: 11
      },
      {
        id: 'tin-tie-pouch-750g-matte-silver-100pcs',
        label: 'Size XL (750g) - Matte Silver (100 Pcs)',
        dimensions: 'W25 × H30 + G13 cm • Holds ~750g loose tea / coffee beans • Matte Silver',
        hasHole: false,
        quantity: 100,
        totalPrice: 42.00,
        unitPrice: 0.4200,
        heroImageIndex: 4
      },
      {
        id: 'tin-tie-pouch-750g-matte-silver-200pcs',
        label: 'Size XL (750g) - Matte Silver (200 Pcs)',
        dimensions: 'W25 × H30 + G13 cm • Holds ~750g loose tea / coffee beans • Matte Silver',
        hasHole: false,
        quantity: 200,
        totalPrice: 75.60,
        unitPrice: 0.3780,
        heroImageIndex: 4
      },
      {
        id: 'tin-tie-pouch-750g-matte-silver-500pcs',
        label: 'Size XL (750g) - Matte Silver (500 Pcs)',
        dimensions: 'W25 × H30 + G13 cm • Holds ~750g loose tea / coffee beans • Matte Silver',
        hasHole: false,
        quantity: 500,
        totalPrice: 168.00,
        unitPrice: 0.3360,
        heroImageIndex: 4
      },
      {
        id: 'tin-tie-pouch-750g-forest-green-100pcs',
        label: 'Size XL (750g) - Forest Green (100 Pcs)',
        dimensions: 'W25 × H30 + G13 cm • Holds ~750g loose tea / coffee beans • Forest Green',
        hasHole: false,
        quantity: 100,
        totalPrice: 42.00,
        unitPrice: 0.4200,
        heroImageIndex: 8
      },
      {
        id: 'tin-tie-pouch-750g-forest-green-200pcs',
        label: 'Size XL (750g) - Forest Green (200 Pcs)',
        dimensions: 'W25 × H30 + G13 cm • Holds ~750g loose tea / coffee beans • Forest Green',
        hasHole: false,
        quantity: 200,
        totalPrice: 75.60,
        unitPrice: 0.3780,
        heroImageIndex: 8
      },
      {
        id: 'tin-tie-pouch-750g-forest-green-500pcs',
        label: 'Size XL (750g) - Forest Green (500 Pcs)',
        dimensions: 'W25 × H30 + G13 cm • Holds ~750g loose tea / coffee beans • Forest Green',
        hasHole: false,
        quantity: 500,
        totalPrice: 168.00,
        unitPrice: 0.3360,
        heroImageIndex: 8
      },
      {
        id: 'tin-tie-pouch-750g-ruby-red-100pcs',
        label: 'Size XL (750g) - Ruby Red (100 Pcs)',
        dimensions: 'W25 × H30 + G13 cm • Holds ~750g loose tea / coffee beans • Ruby Red',
        hasHole: false,
        quantity: 100,
        totalPrice: 42.00,
        unitPrice: 0.4200,
        heroImageIndex: 12
      },
      {
        id: 'tin-tie-pouch-750g-ruby-red-200pcs',
        label: 'Size XL (750g) - Ruby Red (200 Pcs)',
        dimensions: 'W25 × H30 + G13 cm • Holds ~750g loose tea / coffee beans • Ruby Red',
        hasHole: false,
        quantity: 200,
        totalPrice: 75.60,
        unitPrice: 0.3780,
        heroImageIndex: 12
      },
      {
        id: 'tin-tie-pouch-750g-ruby-red-500pcs',
        label: 'Size XL (750g) - Ruby Red (500 Pcs)',
        dimensions: 'W25 × H30 + G13 cm • Holds ~750g loose tea / coffee beans • Ruby Red',
        hasHole: false,
        quantity: 500,
        totalPrice: 168.00,
        unitPrice: 0.3360,
        heroImageIndex: 12
      }
    ]
  },
  // Bottle-Shaped Specialty Foil Sachet Pouch
  {
    id: 'bottle-shape-sachet-bag',
    name: 'Bottle-Shaped Specialty Foil Sachet Pouch',
    category: 'conventional-stock',
    description: 'An eye-catching, bottle-shaped specialty aluminum foil sachet pouch designed for single-use samples and premium retail packaging. Features high-barrier food-grade internal lamination that provides absolute protection against oxygen, moisture, and light. Excellent choice for honey, liquid syrups, herbal extracts, face lotions, creams, serums, and high-end cosmetic samples.',
    shortDesc: 'Eye-catching bottle-shaped high-barrier foil sachet pouch for honey, lotions, and cosmetics samples',
    features: [
      'Unique Bottle-Shaped Design for Maximum Brand Recognition',
      'High-Barrier Aluminum Foil Core Protects Active Ingredients',
      'Perfect for Single-Use Liquid, Gel, or Powder Samples',
      'Precise Tear Notch for Smooth and Effortless Opening',
      'Wide Flat Sealing Edges to Prevent Any Leakage',
      'Available in 4 Gorgeous Seasonal Matte Finishes'
    ],
    images: [
      '/taobao/bottle-shape-sachet-bag/O1CN01HLBEAS1wI7QTrjp8l_--1816946284.jpg',
      '/taobao/bottle-shape-sachet-bag/O1CN010uoYV21wI7XdAgp32_--1816946284.jpg',
      '/taobao/bottle-shape-sachet-bag/O1CN0172bE0p1wI7XalXVjb_--1816946284.jpg',
      '/taobao/bottle-shape-sachet-bag/O1CN01F0bUzr1wI7Xfz93bG_--1816946284.jpg',
      '/taobao/bottle-shape-sachet-bag/O1CN01HFAcnm1wI7XYEdGLa_--1816946284.jpg',
      '/taobao/bottle-shape-sachet-bag/O1CN01HSqPJa1wI7XdwA824_--1816946284.jpg',
      '/taobao/bottle-shape-sachet-bag/O1CN01KYZtWN1wI7XfLWk4F_--1816946284.jpg',
      '/taobao/bottle-shape-sachet-bag/O1CN01q5cziX1wI7uDjUFyO_--1816946284-jpg_.webp',
      '/taobao/bottle-shape-sachet-bag/O1CN01vYlOKD1wI7uE46oqf_--1816946284-jpg_.webp',
      '/taobao/bottle-shape-sachet-bag/O1CN01WdpQpo1wI7uDVKw4F_--1816946284-jpg_.webp',
      '/taobao/bottle-shape-sachet-bag/O1CN01XMYfTm1wI7XfLEHJi_--1816946284-jpg_.webp',
      '/taobao/bottle-shape-sachet-bag/O1CN01pDMoD61wI7Xfz7utO_--1816946284.jpg'
    ],
    badge: '⭐ Premium Sample Pouch',
    rating: 4.9,
    reviews: 86,
    inStock: true,
    turnaround: '3-5 days',
    minOrder: 100,
    shape: 'Bottle-Shaped Sachet Pouch',
    material: 'Matte Aluminum Foil + PE High-Barrier Food-Grade Laminate (110 Microns)',
    basePrice: 8.40,
    pricePerPiece: 0.084,
    minQuantity: 100,
    quantityStep: 100,
    sizeInfo: '5×11 cm (Holds 5-12g) / 6×12 cm (Holds 10-18g) / 7.5×13 cm (Holds 25-35g)',
    shelfLife: '+36 months',
    certification: 'FSC & FDA Food-Grade Certified',
    customPrintNote: 'Custom logo printing available from 1,000+ pieces. Please consult our team.',
    sizeVariants: [
      {
        id: 'sachet-bag-s-spring-pink-100pcs',
        label: 'Size S (5 × 11 cm) - Spring Sakura Pink (100 Pcs)',
        dimensions: 'L5 × H11 cm (4 × 10 cm Inner) • Holds ~5g liquid/gel/powder or ~12g honey • Spring Sakura Pink',
        hasHole: false,
        quantity: 100,
        totalPrice: 8.40,
        unitPrice: 0.0840,
        heroImageIndex: 7
      },
      {
        id: 'sachet-bag-s-spring-pink-200pcs',
        label: 'Size S (5 × 11 cm) - Spring Sakura Pink (200 Pcs)',
        dimensions: 'L5 × H11 cm (4 × 10 cm Inner) • Holds ~5g liquid/gel/powder or ~12g honey • Spring Sakura Pink',
        hasHole: false,
        quantity: 200,
        totalPrice: 15.10,
        unitPrice: 0.0755,
        heroImageIndex: 7
      },
      {
        id: 'sachet-bag-s-spring-pink-500pcs',
        label: 'Size S (5 × 11 cm) - Spring Sakura Pink (500 Pcs)',
        dimensions: 'L5 × H11 cm (4 × 10 cm Inner) • Holds ~5g liquid/gel/powder or ~12g honey • Spring Sakura Pink',
        hasHole: false,
        quantity: 500,
        totalPrice: 33.60,
        unitPrice: 0.0672,
        heroImageIndex: 7
      },
      {
        id: 'sachet-bag-s-summer-blue-100pcs',
        label: 'Size S (5 × 11 cm) - Summer Ocean Blue (100 Pcs)',
        dimensions: 'L5 × H11 cm (4 × 10 cm Inner) • Holds ~5g liquid/gel/powder or ~12g honey • Summer Ocean Blue',
        hasHole: false,
        quantity: 100,
        totalPrice: 8.40,
        unitPrice: 0.0840,
        heroImageIndex: 8
      },
      {
        id: 'sachet-bag-s-summer-blue-200pcs',
        label: 'Size S (5 × 11 cm) - Summer Ocean Blue (200 Pcs)',
        dimensions: 'L5 × H11 cm (4 × 10 cm Inner) • Holds ~5g liquid/gel/powder or ~12g honey • Summer Ocean Blue',
        hasHole: false,
        quantity: 200,
        totalPrice: 15.10,
        unitPrice: 0.0755,
        heroImageIndex: 8
      },
      {
        id: 'sachet-bag-s-summer-blue-500pcs',
        label: 'Size S (5 × 11 cm) - Summer Ocean Blue (500 Pcs)',
        dimensions: 'L5 × H11 cm (4 × 10 cm Inner) • Holds ~5g liquid/gel/powder or ~12g honey • Summer Ocean Blue',
        hasHole: false,
        quantity: 500,
        totalPrice: 33.60,
        unitPrice: 0.0672,
        heroImageIndex: 8
      },
      {
        id: 'sachet-bag-s-autumn-gold-100pcs',
        label: 'Size S (5 × 11 cm) - Autumn Harvest Gold (100 Pcs)',
        dimensions: 'L5 × H11 cm (4 × 10 cm Inner) • Holds ~5g liquid/gel/powder or ~12g honey • Autumn Harvest Gold',
        hasHole: false,
        quantity: 100,
        totalPrice: 8.40,
        unitPrice: 0.0840,
        heroImageIndex: 9
      },
      {
        id: 'sachet-bag-s-autumn-gold-200pcs',
        label: 'Size S (5 × 11 cm) - Autumn Harvest Gold (200 Pcs)',
        dimensions: 'L5 × H11 cm (4 × 10 cm Inner) • Holds ~5g liquid/gel/powder or ~12g honey • Autumn Harvest Gold',
        hasHole: false,
        quantity: 200,
        totalPrice: 15.10,
        unitPrice: 0.0755,
        heroImageIndex: 9
      },
      {
        id: 'sachet-bag-s-autumn-gold-500pcs',
        label: 'Size S (5 × 11 cm) - Autumn Harvest Gold (500 Pcs)',
        dimensions: 'L5 × H11 cm (4 × 10 cm Inner) • Holds ~5g liquid/gel/powder or ~12g honey • Autumn Harvest Gold',
        hasHole: false,
        quantity: 500,
        totalPrice: 33.60,
        unitPrice: 0.0672,
        heroImageIndex: 9
      },
      {
        id: 'sachet-bag-s-winter-white-100pcs',
        label: 'Size S (5 × 11 cm) - Winter Frost White (100 Pcs)',
        dimensions: 'L5 × H11 cm (4 × 10 cm Inner) • Holds ~5g liquid/gel/powder or ~12g honey • Winter Frost White',
        hasHole: false,
        quantity: 100,
        totalPrice: 8.40,
        unitPrice: 0.0840,
        heroImageIndex: 5
      },
      {
        id: 'sachet-bag-s-winter-white-200pcs',
        label: 'Size S (5 × 11 cm) - Winter Frost White (200 Pcs)',
        dimensions: 'L5 × H11 cm (4 × 10 cm Inner) • Holds ~5g liquid/gel/powder or ~12g honey • Winter Frost White',
        hasHole: false,
        quantity: 200,
        totalPrice: 15.10,
        unitPrice: 0.0755,
        heroImageIndex: 5
      },
      {
        id: 'sachet-bag-s-winter-white-500pcs',
        label: 'Size S (5 × 11 cm) - Winter Frost White (500 Pcs)',
        dimensions: 'L5 × H11 cm (4 × 10 cm Inner) • Holds ~5g liquid/gel/powder or ~12g honey • Winter Frost White',
        hasHole: false,
        quantity: 500,
        totalPrice: 33.60,
        unitPrice: 0.0672,
        heroImageIndex: 5
      },
      {
        id: 'sachet-bag-m-spring-pink-100pcs',
        label: 'Size M (6 × 12 cm) - Spring Sakura Pink (100 Pcs)',
        dimensions: 'L6 × H12 cm (5 × 11 cm Inner) • Holds ~10g liquid/gel/powder or ~18g honey • Spring Sakura Pink',
        hasHole: false,
        quantity: 100,
        totalPrice: 10.00,
        unitPrice: 0.1000,
        heroImageIndex: 7
      },
      {
        id: 'sachet-bag-m-spring-pink-200pcs',
        label: 'Size M (6 × 12 cm) - Spring Sakura Pink (200 Pcs)',
        dimensions: 'L6 × H12 cm (5 × 11 cm Inner) • Holds ~10g liquid/gel/powder or ~18g honey • Spring Sakura Pink',
        hasHole: false,
        quantity: 200,
        totalPrice: 18.10,
        unitPrice: 0.0905,
        heroImageIndex: 7
      },
      {
        id: 'sachet-bag-m-spring-pink-500pcs',
        label: 'Size M (6 × 12 cm) - Spring Sakura Pink (500 Pcs)',
        dimensions: 'L6 × H12 cm (5 × 11 cm Inner) • Holds ~10g liquid/gel/powder or ~18g honey • Spring Sakura Pink',
        hasHole: false,
        quantity: 500,
        totalPrice: 40.30,
        unitPrice: 0.0806,
        heroImageIndex: 7
      },
      {
        id: 'sachet-bag-m-summer-blue-100pcs',
        label: 'Size M (6 × 12 cm) - Summer Ocean Blue (100 Pcs)',
        dimensions: 'L6 × H12 cm (5 × 11 cm Inner) • Holds ~10g liquid/gel/powder or ~18g honey • Summer Ocean Blue',
        hasHole: false,
        quantity: 100,
        totalPrice: 10.00,
        unitPrice: 0.1000,
        heroImageIndex: 8
      },
      {
        id: 'sachet-bag-m-summer-blue-200pcs',
        label: 'Size M (6 × 12 cm) - Summer Ocean Blue (200 Pcs)',
        dimensions: 'L6 × H12 cm (5 × 11 cm Inner) • Holds ~10g liquid/gel/powder or ~18g honey • Summer Ocean Blue',
        hasHole: false,
        quantity: 200,
        totalPrice: 18.10,
        unitPrice: 0.0905,
        heroImageIndex: 8
      },
      {
        id: 'sachet-bag-m-summer-blue-500pcs',
        label: 'Size M (6 × 12 cm) - Summer Ocean Blue (500 Pcs)',
        dimensions: 'L6 × H12 cm (5 × 11 cm Inner) • Holds ~10g liquid/gel/powder or ~18g honey • Summer Ocean Blue',
        hasHole: false,
        quantity: 500,
        totalPrice: 40.30,
        unitPrice: 0.0806,
        heroImageIndex: 8
      },
      {
        id: 'sachet-bag-m-autumn-gold-100pcs',
        label: 'Size M (6 × 12 cm) - Autumn Harvest Gold (100 Pcs)',
        dimensions: 'L6 × H12 cm (5 × 11 cm Inner) • Holds ~10g liquid/gel/powder or ~18g honey • Autumn Harvest Gold',
        hasHole: false,
        quantity: 100,
        totalPrice: 10.00,
        unitPrice: 0.1000,
        heroImageIndex: 9
      },
      {
        id: 'sachet-bag-m-autumn-gold-200pcs',
        label: 'Size M (6 × 12 cm) - Autumn Harvest Gold (200 Pcs)',
        dimensions: 'L6 × H12 cm (5 × 11 cm Inner) • Holds ~10g liquid/gel/powder or ~18g honey • Autumn Harvest Gold',
        hasHole: false,
        quantity: 200,
        totalPrice: 18.10,
        unitPrice: 0.0905,
        heroImageIndex: 9
      },
      {
        id: 'sachet-bag-m-autumn-gold-500pcs',
        label: 'Size M (6 × 12 cm) - Autumn Harvest Gold (500 Pcs)',
        dimensions: 'L6 × H12 cm (5 × 11 cm Inner) • Holds ~10g liquid/gel/powder or ~18g honey • Autumn Harvest Gold',
        hasHole: false,
        quantity: 500,
        totalPrice: 40.30,
        unitPrice: 0.0806,
        heroImageIndex: 9
      },
      {
        id: 'sachet-bag-m-winter-white-100pcs',
        label: 'Size M (6 × 12 cm) - Winter Frost White (100 Pcs)',
        dimensions: 'L6 × H12 cm (5 × 11 cm Inner) • Holds ~10g liquid/gel/powder or ~18g honey • Winter Frost White',
        hasHole: false,
        quantity: 100,
        totalPrice: 10.00,
        unitPrice: 0.1000,
        heroImageIndex: 5
      },
      {
        id: 'sachet-bag-m-winter-white-200pcs',
        label: 'Size M (6 × 12 cm) - Winter Frost White (200 Pcs)',
        dimensions: 'L6 × H12 cm (5 × 11 cm Inner) • Holds ~10g liquid/gel/powder or ~18g honey • Winter Frost White',
        hasHole: false,
        quantity: 200,
        totalPrice: 18.10,
        unitPrice: 0.0905,
        heroImageIndex: 5
      },
      {
        id: 'sachet-bag-m-winter-white-500pcs',
        label: 'Size M (6 × 12 cm) - Winter Frost White (500 Pcs)',
        dimensions: 'L6 × H12 cm (5 × 11 cm Inner) • Holds ~10g liquid/gel/powder or ~18g honey • Winter Frost White',
        hasHole: false,
        quantity: 500,
        totalPrice: 40.30,
        unitPrice: 0.0806,
        heroImageIndex: 5
      },
      {
        id: 'sachet-bag-l-spring-pink-100pcs',
        label: 'Size L (7.5 × 13 cm) - Spring Sakura Pink (100 Pcs)',
        dimensions: 'L7.5 × H13 cm (6.5 × 12 cm Inner) • Holds ~25g liquid/gel/powder or ~35g honey • Spring Sakura Pink',
        hasHole: false,
        quantity: 100,
        totalPrice: 12.30,
        unitPrice: 0.1230,
        heroImageIndex: 7
      },
      {
        id: 'sachet-bag-l-spring-pink-200pcs',
        label: 'Size L (7.5 × 13 cm) - Spring Sakura Pink (200 Pcs)',
        dimensions: 'L7.5 × H13 cm (6.5 × 12 cm Inner) • Holds ~25g liquid/gel/powder or ~35g honey • Spring Sakura Pink',
        hasHole: false,
        quantity: 200,
        totalPrice: 22.10,
        unitPrice: 0.1105,
        heroImageIndex: 7
      },
      {
        id: 'sachet-bag-l-spring-pink-500pcs',
        label: 'Size L (7.5 × 13 cm) - Spring Sakura Pink (500 Pcs)',
        dimensions: 'L7.5 × H13 cm (6.5 × 12 cm Inner) • Holds ~25g liquid/gel/powder or ~35g honey • Spring Sakura Pink',
        hasHole: false,
        quantity: 500,
        totalPrice: 49.20,
        unitPrice: 0.0984,
        heroImageIndex: 7
      },
      {
        id: 'sachet-bag-l-summer-blue-100pcs',
        label: 'Size L (7.5 × 13 cm) - Summer Ocean Blue (100 Pcs)',
        dimensions: 'L7.5 × H13 cm (6.5 × 12 cm Inner) • Holds ~25g liquid/gel/powder or ~35g honey • Summer Ocean Blue',
        hasHole: false,
        quantity: 100,
        totalPrice: 12.30,
        unitPrice: 0.1230,
        heroImageIndex: 8
      },
      {
        id: 'sachet-bag-l-summer-blue-200pcs',
        label: 'Size L (7.5 × 13 cm) - Summer Ocean Blue (200 Pcs)',
        dimensions: 'L7.5 × H13 cm (6.5 × 12 cm Inner) • Holds ~25g liquid/gel/powder or ~35g honey • Summer Ocean Blue',
        hasHole: false,
        quantity: 200,
        totalPrice: 22.10,
        unitPrice: 0.1105,
        heroImageIndex: 8
      },
      {
        id: 'sachet-bag-l-summer-blue-500pcs',
        label: 'Size L (7.5 × 13 cm) - Summer Ocean Blue (500 Pcs)',
        dimensions: 'L7.5 × H13 cm (6.5 × 12 cm Inner) • Holds ~25g liquid/gel/powder or ~35g honey • Summer Ocean Blue',
        hasHole: false,
        quantity: 500,
        totalPrice: 49.20,
        unitPrice: 0.0984,
        heroImageIndex: 8
      },
      {
        id: 'sachet-bag-l-autumn-gold-100pcs',
        label: 'Size L (7.5 × 13 cm) - Autumn Harvest Gold (100 Pcs)',
        dimensions: 'L7.5 × H13 cm (6.5 × 12 cm Inner) • Holds ~25g liquid/gel/powder or ~35g honey • Autumn Harvest Gold',
        hasHole: false,
        quantity: 100,
        totalPrice: 12.30,
        unitPrice: 0.1230,
        heroImageIndex: 9
      },
      {
        id: 'sachet-bag-l-autumn-gold-200pcs',
        label: 'Size L (7.5 × 13 cm) - Autumn Harvest Gold (200 Pcs)',
        dimensions: 'L7.5 × H13 cm (6.5 × 12 cm Inner) • Holds ~25g liquid/gel/powder or ~35g honey • Autumn Harvest Gold',
        hasHole: false,
        quantity: 200,
        totalPrice: 22.10,
        unitPrice: 0.1105,
        heroImageIndex: 9
      },
      {
        id: 'sachet-bag-l-autumn-gold-500pcs',
        label: 'Size L (7.5 × 13 cm) - Autumn Harvest Gold (500 Pcs)',
        dimensions: 'L7.5 × H13 cm (6.5 × 12 cm Inner) • Holds ~25g liquid/gel/powder or ~35g honey • Autumn Harvest Gold',
        hasHole: false,
        quantity: 500,
        totalPrice: 49.20,
        unitPrice: 0.0984,
        heroImageIndex: 9
      },
      {
        id: 'sachet-bag-l-winter-white-100pcs',
        label: 'Size L (7.5 × 13 cm) - Winter Frost White (100 Pcs)',
        dimensions: 'L7.5 × H13 cm (6.5 × 12 cm Inner) • Holds ~25g liquid/gel/powder or ~35g honey • Winter Frost White',
        hasHole: false,
        quantity: 100,
        totalPrice: 12.30,
        unitPrice: 0.1230,
        heroImageIndex: 5
      },
      {
        id: 'sachet-bag-l-winter-white-200pcs',
        label: 'Size L (7.5 × 13 cm) - Winter Frost White (200 Pcs)',
        dimensions: 'L7.5 × H13 cm (6.5 × 12 cm Inner) • Holds ~25g liquid/gel/powder or ~35g honey • Winter Frost White',
        hasHole: false,
        quantity: 200,
        totalPrice: 22.10,
        unitPrice: 0.1105,
        heroImageIndex: 5
      },
      {
        id: 'sachet-bag-l-winter-white-500pcs',
        label: 'Size L (7.5 × 13 cm) - Winter Frost White (500 Pcs)',
        dimensions: 'L7.5 × H13 cm (6.5 × 12 cm Inner) • Holds ~25g liquid/gel/powder or ~35g honey • Winter Frost White',
        hasHole: false,
        quantity: 500,
        totalPrice: 49.20,
        unitPrice: 0.0984,
        heroImageIndex: 5
      }
    ]
  },
  {
    id: 'spouted-foil-pouch',
    name: 'Spouted Foil Stand Up Pouch',
    category: 'conventional-stock',
    description: 'Premium high-barrier glossy/matte aluminum foil stand-up pouches with an integrated center-spout and a tamper-evident resealable screw cap. Highly protective foil laminate structure shields liquids, purees, baby food, sauces, juices, and chemical refills from oxygen, moisture, and UV light. Spill-proof, puncture-resistant, and lightweight.',
    shortDesc: 'Premium foil stand-up pouch with center spout & resealable cap',
    features: [
      'Integrated Leak-Proof Center Spout & Cap',
      'Advanced 3-Layer Aluminum Foil Lamination',
      'Spill-Proof Resealable Screw Cap',
      'Lightweight and Low Carbon Packaging Alternative',
      'Sturdy Bottom Gusset for Upright Display'
    ],
    images: [
      "/taobao/spouted-foil-pouch/O1CN01AwQEko2DvNFl3p6FD_--0-item_pic-jpg_.webp",
      "/taobao/spouted-foil-pouch/O1CN01xoNpZp2DvN4a4POXK_--2211902278671-jpg_.webp",
      "/taobao/spouted-foil-pouch/O1CN015fdERr2DvN6kT0Zmh_--2211902278671.jpg",
      "/taobao/spouted-foil-pouch/O1CN01P8ngA62DvNMARTzpR_--2211902278671-jpg_.webp",
      "/taobao/spouted-foil-pouch/O1CN010wjMKr2DvNMARVPCA_--2211902278671-jpg_.webp",
      "/taobao/spouted-foil-pouch/O1CN01P9wK8O2DvNMARXcNd_--2211902278671-jpg_.webp",
      "/taobao/spouted-foil-pouch/O1CN01hmtevl2DvMyvoOv3g_--2211902278671-jpg_.webp",
      "/taobao/spouted-foil-pouch/O1CN01Xq4qLp2DvMyvsk44r_--2211902278671-jpg_.webp",
      "/taobao/spouted-foil-pouch/O1CN01H8mUJP2DvMywNXR9v_--2211902278671-jpg_.webp",
      "/taobao/spouted-foil-pouch/O1CN01jmsyrF2DvMyri1toe_--2211902278671-jpg_.webp",
      "/taobao/spouted-foil-pouch/O1CN01Xc0BKH2DvMyzcjxQG_--2211902278671-jpg_.webp",
      "/taobao/spouted-foil-pouch/O1CN01W2JAMT2DvMywNXEgX_--2211902278671-jpg_.webp",
      "/taobao/spouted-foil-pouch/O1CN01VltrDR2DvMyxV9qpB_--2211902278671-jpg_.webp",
      "/taobao/spouted-foil-pouch/O1CN01rvcrKc2DvMz2d9HYg_--2211902278671-jpg_.webp",
      "/taobao/spouted-foil-pouch/O1CN010JKv8a2DvMyoX62J5_--2211902278671-jpg_.webp",
      "/taobao/spouted-foil-pouch/O1CN01FOmbhF2DvMyxVC8CE_--2211902278671-jpg_.webp",
      "/taobao/spouted-foil-pouch/O1CN01Y1OiVt2DvMyxEhXMT_--2211902278671-jpg_.webp",
      "/taobao/spouted-foil-pouch/O1CN01x5KIo52DvN6nNHyFd_--2211902278671.jpg",
      "/taobao/spouted-foil-pouch/O1CN01BRZTja2DvMywNZ7BH_--2211902278671-jpg_.webp",
      "/taobao/spouted-foil-pouch/O1CN01iXt89U2DvMyxEiCwR_--2211902278671-jpg_.webp",
      "/taobao/spouted-foil-pouch/O1CN01FKhClm2DvMz19LhQD_--2211902278671-jpg_.webp",
      "/taobao/spouted-foil-pouch/O1CN01q4scpq2DvMywNWEGb_--2211902278671-jpg_.webp",
      "/taobao/spouted-foil-pouch/O1CN01YguBdN2DvMytldcsK_--2211902278671-jpg_.webp",
      "/taobao/spouted-foil-pouch/O1CN01FvsydD2DvN8saFz9A_--2211902278671-jpg_.webp",
      "/taobao/spouted-foil-pouch/O1CN01r0w8X42DvNFo5ZoFl_--2211902278671-jpg_.webp",
      "/taobao/spouted-foil-pouch/O1CN01w8PSNJ2DvMz1rXWVb_--2211902278671-jpg_.webp",
      "/taobao/spouted-foil-pouch/O1CN01QzlVBR2DvMytB1kCI_--2211902278671-jpg_.webp",
      "/taobao/spouted-foil-pouch/O1CN01PQq4x22DvMytB2cGX_--2211902278671-jpg_.webp",
      "/taobao/spouted-foil-pouch/O1CN01z8qxFG2DvMyn3vJyJ_--2211902278671-jpg_.webp",
      "/taobao/spouted-foil-pouch/O1CN010QdZAp2DvMyvoRbMW_--2211902278671-jpg_.webp",
      "/taobao/spouted-foil-pouch/O1CN01gJnU8l2DvMz19NVjT_--2211902278671-jpg_.webp",
      "/imgs/pouch-shape/ads/a_achieve_pack_spout_pouch_closeup_5874382.webp",
      "/imgs/illustrated/a_achievepack_spout_pouches_1062736.webp",
      "/imgs/function/spout/a_detail_spout_cap_2155787.webp",
      "/imgs/store/closure/spout.webp"
    ],
    badge: '🔥 Bestseller',
    rating: 4.8,
    reviews: 34,
    inStock: true,
    turnaround: '5-7 days',
    minOrder: 100,
    shape: 'Spouted Stand Up Pouch',
    material: 'Glossy Aluminum Foil - High Barrier Lamination',
    basePrice: 14.58,
    pricePerPiece: 0.15,
    minQuantity: 100,
    quantityStep: 100,
    sizeInfo: 'Multiple volume capacities available (100ml - 10L)',
    shelfLife: '+18 months',
    certification: 'FDA Approved',
    sizeVariants: [
      {
        id: "foil-50ml-slanted",
        label: "Foil - 50ml Slanted Spout (80×110mm)",
        dimensions: "80 × 110 mm",
        hasHole: false,
        quantity: 100,
        totalPrice: 13.33,
        unitPrice: 0.13,
        heroImageIndex: 6
      },
      {
        id: "foil-100ml",
        label: "Foil - 100ml Small Spout (80×130mm)",
        dimensions: "80 × 130 mm",
        hasHole: false,
        quantity: 100,
        totalPrice: 14.58,
        unitPrice: 0.15,
        heroImageIndex: 7
      },
      {
        id: "foil-150ml",
        label: "Foil - 150ml Small Spout (100×140mm)",
        dimensions: "100 × 140 mm",
        hasHole: false,
        quantity: 100,
        totalPrice: 15.83,
        unitPrice: 0.16,
        heroImageIndex: 8
      },
      {
        id: "foil-200ml-small-spout",
        label: "Foil - 200ml Small Spout (100×160mm)",
        dimensions: "100 × 160 mm",
        hasHole: false,
        quantity: 100,
        totalPrice: 16.67,
        unitPrice: 0.17,
        heroImageIndex: 9
      },
      {
        id: "foil-200ml-large-spout",
        label: "Foil - 200ml Large Spout (100×160mm)",
        dimensions: "100 × 160 mm",
        hasHole: false,
        quantity: 100,
        totalPrice: 17.5,
        unitPrice: 0.17,
        heroImageIndex: 10
      },
      {
        id: "foil-250ml-small-spout",
        label: "Foil - 250ml Small Spout (100×170mm)",
        dimensions: "100 × 170 mm",
        hasHole: false,
        quantity: 100,
        totalPrice: 17.5,
        unitPrice: 0.17,
        heroImageIndex: 11
      },
      {
        id: "foil-250ml-large-spout",
        label: "Foil - 250ml Large Spout (100×170mm)",
        dimensions: "100 × 170 mm",
        hasHole: false,
        quantity: 100,
        totalPrice: 18.75,
        unitPrice: 0.19,
        heroImageIndex: 12
      },
      {
        id: "foil-300ml-small-spout",
        label: "Foil - 300ml Small Spout (110×170mm)",
        dimensions: "110 × 170 mm",
        hasHole: false,
        quantity: 100,
        totalPrice: 18.75,
        unitPrice: 0.19,
        heroImageIndex: 13
      },
      {
        id: "foil-300ml-large-spout",
        label: "Foil - 300ml Large Spout (110×170mm)",
        dimensions: "110 × 170 mm",
        hasHole: false,
        quantity: 100,
        totalPrice: 20,
        unitPrice: 0.2,
        heroImageIndex: 14
      },
      {
        id: "foil-380ml-small-spout",
        label: "Foil - 380ml Small Spout (130×170mm)",
        dimensions: "130 × 170 mm",
        hasHole: false,
        quantity: 100,
        totalPrice: 20,
        unitPrice: 0.2,
        heroImageIndex: 15
      },
      {
        id: "foil-380ml-large-spout",
        label: "Foil - 380ml Large Spout (130×170mm)",
        dimensions: "130 × 170 mm",
        hasHole: false,
        quantity: 100,
        totalPrice: 21.67,
        unitPrice: 0.22,
        heroImageIndex: 16
      },
      {
        id: "foil-500ml-small-spout",
        label: "Foil - 500ml Small Spout (130×200mm)",
        dimensions: "130 × 200 mm",
        hasHole: false,
        quantity: 100,
        totalPrice: 21.67,
        unitPrice: 0.22,
        heroImageIndex: 17
      },
      {
        id: "foil-500ml-medium-spout",
        label: "Foil - 500ml Medium Spout (140×200mm)",
        dimensions: "140 × 200 mm",
        hasHole: false,
        quantity: 100,
        totalPrice: 22.92,
        unitPrice: 0.23,
        heroImageIndex: 18
      },
      {
        id: "foil-500ml-slanted-spout",
        label: "Foil - 500ml Slanted Spout (140×220mm)",
        dimensions: "140 × 220 mm",
        hasHole: false,
        quantity: 100,
        totalPrice: 24.17,
        unitPrice: 0.24,
        heroImageIndex: 19
      },
      {
        id: "foil-1000ml-slanted-spout",
        label: "Foil - 1L Slanted Spout (190×250mm)",
        dimensions: "190 × 250 mm",
        hasHole: false,
        quantity: 100,
        totalPrice: 30,
        unitPrice: 0.3,
        heroImageIndex: 20
      },
      {
        id: "foil-1500ml-slanted-spout",
        label: "Foil - 1.5L Slanted Spout (200×280mm)",
        dimensions: "200 × 280 mm",
        hasHole: false,
        quantity: 100,
        totalPrice: 35.42,
        unitPrice: 0.35,
        heroImageIndex: 21
      },
      {
        id: "foil-2000ml-slanted-spout",
        label: "Foil - 2L Slanted Spout (230×300mm)",
        dimensions: "230 × 300 mm",
        hasHole: false,
        quantity: 100,
        totalPrice: 40.83,
        unitPrice: 0.41,
        heroImageIndex: 22
      },
      {
        id: "foil-heavy-1l-slanted-1.6",
        label: "Foil Heavy-Duty - 1L Slanted Spout with Handle (220×220mm)",
        dimensions: "220 × 220 mm",
        hasHole: false,
        quantity: 100,
        totalPrice: 49.58,
        unitPrice: 0.5,
        heroImageIndex: 23
      },
      {
        id: "foil-heavy-1l-slanted-2.2",
        label: "Foil Heavy-Duty - 1L Slanted Spout with Handle (2.2cm cap, 220×220mm)",
        dimensions: "220 × 220 mm",
        hasHole: false,
        quantity: 100,
        totalPrice: 55,
        unitPrice: 0.55,
        heroImageIndex: 24
      },
      {
        id: "foil-heavy-1.5l-slanted",
        label: "Foil Heavy-Duty - 1.5L Slanted Spout with Handle (250×230mm)",
        dimensions: "250 × 230 mm",
        hasHole: false,
        quantity: 100,
        totalPrice: 58.33,
        unitPrice: 0.58,
        heroImageIndex: 25
      },
      {
        id: "foil-heavy-2.5l-small",
        label: "Foil Heavy-Duty - 2.5L Small Spout with Handle (300×270mm)",
        dimensions: "300 × 270 mm",
        hasHole: false,
        quantity: 100,
        totalPrice: 72.5,
        unitPrice: 0.72,
        heroImageIndex: 26
      },
      {
        id: "foil-heavy-2.5l-large",
        label: "Foil Heavy-Duty - 2.5L Large Spout with Handle (3.3cm cap, 300×270mm)",
        dimensions: "300 × 270 mm",
        hasHole: false,
        quantity: 100,
        totalPrice: 81.25,
        unitPrice: 0.81,
        heroImageIndex: 27
      },
      {
        id: "foil-heavy-5l-small",
        label: "Foil Heavy-Duty - 5L Small Spout with Handle (350×320mm)",
        dimensions: "350 × 320 mm",
        hasHole: false,
        quantity: 100,
        totalPrice: 117.92,
        unitPrice: 1.18,
        heroImageIndex: 28
      },
      {
        id: "foil-heavy-5l-large",
        label: "Foil Heavy-Duty - 5L Large Spout with Handle (3.3cm cap, 350×320mm)",
        dimensions: "350 × 320 mm",
        hasHole: false,
        quantity: 100,
        totalPrice: 125,
        unitPrice: 1.25,
        heroImageIndex: 29
      },
      {
        id: "foil-heavy-10l-large",
        label: "Foil Heavy-Duty - 10L Large Spout with Handle (3.3cm cap, 440×360mm)",
        dimensions: "440 × 360 mm",
        hasHole: false,
        quantity: 100,
        totalPrice: 172.08,
        unitPrice: 1.72,
        heroImageIndex: 30
      },
      {
        id: "foil-hydrogen-5l-small",
        label: "Hydrogen Water - 5L Small Spout & Handle (Pure Aluminum, 350×320mm)",
        dimensions: "350 × 320 mm",
        hasHole: false,
        quantity: 100,
        totalPrice: 132.08,
        unitPrice: 1.32,
        heroImageIndex: 3
      },
      {
        id: "foil-hydrogen-5l-spigot",
        label: "Hydrogen Water - 5L with Spigot/Faucet (Pure Aluminum, 350×320mm)",
        dimensions: "350 × 320 mm",
        hasHole: false,
        quantity: 100,
        totalPrice: 217.92,
        unitPrice: 2.18,
        heroImageIndex: 4
      },
      {
        id: "foil-hydrogen-5l-small-spigot",
        label: "Hydrogen Water - 5L Small Spout & Spigot & Handle (350×320mm)",
        dimensions: "350 × 320 mm",
        hasHole: false,
        quantity: 100,
        totalPrice: 232.08,
        unitPrice: 2.32,
        heroImageIndex: 5
      },
      {
        id: "foil-soup-500ml-foil",
        label: "Foil - 500ml Soup Bag (1.6cm Caliber, 140×200mm)",
        dimensions: "140 × 200 mm",
        hasHole: false,
        quantity: 100,
        totalPrice: 22.92,
        unitPrice: 0.23,
        heroImageIndex: 1
      },
      {
        id: "foil-soup-500ml-milky",
        label: "Milky White - 500ml Soup Bag (1.6cm Caliber, 140×200mm)",
        dimensions: "140 × 200 mm",
        hasHole: false,
        quantity: 100,
        totalPrice: 18.75,
        unitPrice: 0.19,
        heroImageIndex: 2
      },
      {
        id: "foil-custom-bespoke",
        label: "Custom Spouted Foil Pouch Sample / Setup",
        dimensions: "Custom Size",
        hasHole: false,
        quantity: 100,
        totalPrice: 41.67,
        unitPrice: 0.42,
        heroImageIndex: 0
      }
    ],
    customPrintNote: 'Custom prints and customized spout positions (corner/center) available from 100+ pieces. Please consult our team.',
  },
  {
    id: 'rice-paper-flatbottom-valve',
    name: 'Rice Paper Flat Bottom Zipper Pouch with Valve',
    category: 'conventional-stock',
    description: 'Premium white rice paper flat bottom zipper pouch with a one-way degassing valve. Built with high-barrier structure to protect coffee beans, tea, and other light/moisture-sensitive items. Features an easy tear-notch and pocket-zipper for ultimate freshness retention.',
    shortDesc: 'Premium white rice paper pouch with degassing valve',
    features: [
      'Textured Natural Rice Paper Finish',
      'Integrated One-Way Degassing Valve',
      'High-Barrier Freshness Protection',
      'Convenient Pocket Zipper & Tear Notch',
      'Flat Bottom for Perfect Shelf Presentation'
    ],
    images: [
      '/imgs/store/conventional-stock/rice-paper-flatbottom-valve-hero.png',
      '/imgs/store/conventional-stock/rice-paper-flatbottom-valve-brown-hero.png',
      '/imgs/store/conventional-stock/rice-paper-flatbottom-valve-blue-hero.png',
      '/imgs/store/conventional-stock/rice-paper-flatbottom-valve-pink-hero.png',
      '/imgs/store/conventional-stock/rice-paper-flatbottom-valve-green-hero.png',
      '/imgs/store/conventional-stock/rice-paper-flatbottom-valve-grey-hero.png',
      '/imgs/store/conventional-stock/rice-paper-flatbottom-valve-applications.jpg',
      '/imgs/store/conventional-stock/rice-paper-flatbottom-valve-valve-info.jpg',
      '/imgs/store/conventional-stock/rice-paper-flatbottom-valve-sealing.jpg',
      '/imgs/store/conventional-stock/rice-paper-flatbottom-valve-features.png',
      '/imgs/store/conventional-stock/rice-paper-flatbottom-valve.png'
    ],
    badge: '⭐ Premium Stock',
    rating: 4.9,
    reviews: 42,
    inStock: true,
    turnaround: '5-7 days',
    minOrder: 100,
    shape: 'Flat Squared Bottom Pouch',
    material: 'Natural Rice Paper - High Barrier (Matte)',
    basePrice: 51.25,
    pricePerPiece: 0.513,
    minQuantity: 100,
    quantityStep: 100,
    sizeInfo: 'Multiple sizes and colors available (125g - 1kg coffee beans)',
    sizeVariants: [
      { id: 'white-125g', label: 'White Paper - 125g (90×185+50mm)', dimensions: '90 × 185 + 50 mm', hasHole: false, quantity: 100, totalPrice: 51.25, unitPrice: 0.513, heroImageIndex: 0 },
      { id: 'white-250g', label: 'White Paper - 250g (130×200+70mm)', dimensions: '130 × 200 + 70 mm', hasHole: false, quantity: 100, totalPrice: 60.00, unitPrice: 0.600, heroImageIndex: 0 },
      { id: 'white-500g', label: 'White Paper - 500g (135×265+75mm)', dimensions: '135 × 265 + 75 mm', hasHole: false, quantity: 100, totalPrice: 74.17, unitPrice: 0.742, heroImageIndex: 0 },
      { id: 'white-1000g', label: 'White Paper - 1kg (145×330+100mm)', dimensions: '145 × 330 + 100 mm', hasHole: false, quantity: 100, totalPrice: 85.00, unitPrice: 0.850, heroImageIndex: 0 },
      { id: 'green-250g', label: 'Green Paper - 250g (130×200+70mm)', dimensions: '130 × 200 + 70 mm', hasHole: false, quantity: 100, totalPrice: 60.00, unitPrice: 0.600, heroImageIndex: 4 },
      { id: 'yellow-gray-250g', label: 'Yellow Gray Paper - 250g (130×200+70mm)', dimensions: '130 × 200 + 70 mm', hasHole: false, quantity: 100, totalPrice: 60.00, unitPrice: 0.600, heroImageIndex: 1 },
      { id: 'light-gray-250g', label: 'Light Gray Paper - 250g (130×200+70mm)', dimensions: '130 × 200 + 70 mm', hasHole: false, quantity: 100, totalPrice: 60.00, unitPrice: 0.600, heroImageIndex: 5 },
      { id: 'blue-250g', label: 'Blue Paper - 250g (130×200+70mm)', dimensions: '130 × 200 + 70 mm', hasHole: false, quantity: 100, totalPrice: 60.00, unitPrice: 0.600, heroImageIndex: 2 },
      { id: 'pink-250g', label: 'Pink Paper - 250g (130×200+70mm)', dimensions: '130 × 200 + 70 mm', hasHole: false, quantity: 100, totalPrice: 60.00, unitPrice: 0.600, heroImageIndex: 3 },
    ],
    customPrintNote: 'Custom prints available from 100+ pieces. Please consult our team.',
  },
  {
    id: 'clear-matte-zipper-stand-up-pouch',
    name: 'Matte and Clear Unprinted Stock Zipper Stand Up Pouch',
    category: 'conventional-stock',
    description: 'Premium unprinted clear self-sealing stand-up pouches with reusable ziplock, tear notch, and bottom gusset. Available in both Matte (frosted/translucent) and Glossy (ultra clear/shiny) finishes. High-barrier laminate structures shield tea, dry fruits, snacks, cookies, coffee, and other items from dust, moisture, and pests. Features an ultra-strong resealable zipper and a sturdy bottom base for professional shelf display.',
    shortDesc: 'Premium clear stand-up zipper pouch in Matte or Glossy finish',
    features: [
      'Available in Matte (Frosted) or Glossy (Ultra Clear) Finish',
      'Premium Reusable Resealable Zipper',
      'Easy-Tear Notch for Instant Opening',
      'Sturdy Bottom Gusset for Upright Display',
      'Food-Grade Premium Safe Barrier Materials'
    ],
    images: [
      "/taobao/clear-matte-zipper-stand-up-pouch/O1CN01AdZpiO1fZfU786xk0_--454021-jpg_.webp",
      "/taobao/clear-matte-zipper-stand-up-pouch/O1CN01AojP9y1fZfU5E6Vfv_--454021-jpg_.webp",
      "/taobao/clear-matte-zipper-stand-up-pouch/O1CN01Hld54E1fZfU8TfKVI_--454021-jpg_.webp",
      "/taobao/clear-matte-zipper-stand-up-pouch/O1CN01KXYXYR1fZfU5Dg3l5_--454021-jpg_.webp",
      "/taobao/clear-matte-zipper-stand-up-pouch/O1CN01Q1f2kS1fZfU0fph6S_--454021-jpg_.webp",
      "/taobao/clear-matte-zipper-stand-up-pouch/O1CN01Ty7pyE1fZfU7844tP_--454021-jpg_.webp",
      "/taobao/clear-matte-zipper-stand-up-pouch/O1CN01UIFFAP1fZfU4F4g6z_--454021-jpg_.webp",
      "/taobao/clear-matte-zipper-stand-up-pouch/O1CN01apIFdj1fZfU0focap_--454021-jpg_.webp",
      "/taobao/clear-matte-zipper-stand-up-pouch/O1CN01fixkwO1fZfU2J7zI3_--454021-jpg_.webp",
      "/taobao/clear-matte-zipper-stand-up-pouch/O1CN01h7Vflf1fZfU8Tjcgy_--454021-jpg_.webp",
      "/taobao/clear-matte-zipper-stand-up-pouch/O1CN01iHx7b61fZfUA3gbkD_--454021-jpg_.webp",
      "/taobao/clear-matte-zipper-stand-up-pouch/O1CN01jliOzD1fZfU6me1Lw_--454021-jpg_.webp",
      "/taobao/clear-matte-zipper-stand-up-pouch/O1CN01rsU5EU1fZfU5ETsC2_--454021-jpg_.webp",
      "/taobao/clear-matte-zipper-stand-up-pouch/O1CN01s1bN0m1fZfU4EmkVY_--454021-jpg_.webp",
      "/taobao/clear-matte-zipper-stand-up-pouch/O1CN01sh3hd71fZfU5DfrHM_--454021-jpg_.webp",
      "/taobao/clear-matte-zipper-stand-up-pouch/O1CN01tT16wA1fZfU4F5cJX_--454021-jpg_.webp",
      "/taobao/clear-matte-zipper-stand-up-pouch/O1CN01v5EP1n1fZfU4HuDxJ_--454021-jpg_.webp",
      "/taobao/clear-matte-zipper-stand-up-pouch/O1CN01vI3MAC1fZfU88aHq9_--454021-jpg_.webp",
      "/taobao/clear-matte-zipper-stand-up-pouch/O1CN01z4gPWb1fZfU4Htcco_--454021-jpg_.webp",
      "/taobao/clear-matte-zipper-stand-up-pouch/O1CN01zz4WVu1fZfU8TjDj0_--454021-jpg_.webp"
    ],
    badge: '⚡ New Stock',
    rating: 4.8,
    reviews: 19,
    inStock: true,
    turnaround: '5-7 days',
    minOrder: 100,
    shape: 'Stand Up Zipper Pouch',
    material: 'Clear PE/PET (Matte or Glossy) - Food Grade High Barrier',
    basePrice: 4.20,
    pricePerPiece: 0.042,
    minQuantity: 100,
    quantityStep: 100,
    sizeInfo: 'Multiple dimensions available (90x140mm to 240x350mm)',
    shelfLife: '12-24 months freshness',
    certification: 'FDA Approved',
    sizeVariants: [
      {
        id: "clear-matte-sup-9x14",
        label: "9x14+3cm (100pcs)",
        dimensions: "90 × 140 + 30 mm",
        hasHole: false,
        quantity: 100,
        totalPrice: 4.20,
        unitPrice: 0.042,
        heroImageIndex: 8
      },
      {
        id: "clear-matte-sup-10x15",
        label: "10x15+3cm (100pcs)",
        dimensions: "100 × 150 + 30 mm",
        hasHole: false,
        quantity: 100,
        totalPrice: 5.03,
        unitPrice: 0.050,
        heroImageIndex: 11
      },
      {
        id: "clear-matte-sup-11x17",
        label: "11x17+3cm (100pcs)",
        dimensions: "110 × 170 + 30 mm",
        hasHole: false,
        quantity: 100,
        totalPrice: 6.29,
        unitPrice: 0.063,
        heroImageIndex: 2
      },
      {
        id: "clear-matte-sup-12x20",
        label: "12x20+3cm (100pcs)",
        dimensions: "120 × 200 + 30 mm",
        hasHole: false,
        quantity: 100,
        totalPrice: 7.55,
        unitPrice: 0.076,
        heroImageIndex: 6
      },
      {
        id: "clear-matte-sup-13x20",
        label: "13x20+3cm (100pcs)",
        dimensions: "130 × 200 + 30 mm",
        hasHole: false,
        quantity: 100,
        totalPrice: 8.39,
        unitPrice: 0.084,
        heroImageIndex: 13
      },
      {
        id: "clear-matte-sup-14x20",
        label: "14x20+3cm (100pcs)",
        dimensions: "140 × 200 + 30 mm",
        hasHole: false,
        quantity: 100,
        totalPrice: 9.23,
        unitPrice: 0.092,
        heroImageIndex: 19
      },
      {
        id: "clear-matte-sup-16x24",
        label: "16x24+3cm (100pcs)",
        dimensions: "160 × 240 + 30 mm",
        hasHole: false,
        quantity: 100,
        totalPrice: 13.43,
        unitPrice: 0.134,
        heroImageIndex: 18
      },
      {
        id: "clear-matte-sup-16x26",
        label: "16x26+4cm (100pcs)",
        dimensions: "160 × 260 + 40 mm",
        hasHole: false,
        quantity: 100,
        totalPrice: 15.10,
        unitPrice: 0.151,
        heroImageIndex: 12
      },
      {
        id: "clear-matte-sup-18x26",
        label: "18x26+4cm (100pcs)",
        dimensions: "180 × 260 + 40 mm",
        hasHole: false,
        quantity: 100,
        totalPrice: 16.78,
        unitPrice: 0.168,
        heroImageIndex: 4
      },
      {
        id: "clear-matte-sup-20x30",
        label: "20x30+4cm (100pcs)",
        dimensions: "200 × 300 + 40 mm",
        hasHole: false,
        quantity: 100,
        totalPrice: 23.08,
        unitPrice: 0.231,
        heroImageIndex: 0
      },
      {
        id: "clear-matte-sup-21x35",
        label: "21x35+5cm (100pcs)",
        dimensions: "210 × 350 + 50 mm",
        hasHole: false,
        quantity: 100,
        totalPrice: 28.53,
        unitPrice: 0.285,
        heroImageIndex: 9
      },
      {
        id: "clear-matte-sup-24x35",
        label: "24x35+5cm (100pcs)",
        dimensions: "240 × 350 + 50 mm",
        hasHole: false,
        quantity: 100,
        totalPrice: 33.57,
        unitPrice: 0.336,
        heroImageIndex: 7
      }
    ],
    customPrintNote: 'Custom prints available from 100+ pieces. Please consult our team.',
    customPrintProductId: 'conven-sup-clear-zip',
  },
  {
    id: 'flat-bottom-zipper-pouch',
    name: 'Matte and Clear Unprinted Stock Flat Bottom Zipper Pouch',
    category: 'conventional-stock',
    description: 'Premium unprinted flat bottom (eight-side seal) pouches with high-capacity 5-panel structure, reusable ziplock, and tear notch. Available in both Matte (frosted/translucent) and Glossy (ultra clear/shiny) finishes. Designed with flat bottoms for maximum stability and dynamic box-like shelf display. Perfect for high-density storage of food items, snacks, coffee beans, pet foods, and grain grains.',
    shortDesc: 'Premium flat-bottom eight-side seal zipper pouch in Matte or Glossy finish',
    features: [
      'Elegant Flat Bottom 5-Panel Box Shape for Maximum Storage',
      'Available in Matte (Translucent) or Glossy (Ultra Clear) Finish',
      'Heavy-Duty Reusable Airtight Ziplock',
      'Wide Opening and Tear Notch for Instant Access',
      'High-Barrier Premium Materials Protect Freshness'
    ],
    images: [
      "/taobao/flat-button-zipper-pouch/O1CN013aRCiE1fZfPShUMlv_--454021-jpg_q50-jpg_.webp",
      "/taobao/flat-button-zipper-pouch/O1CN014EuAsX1fZffwT9UQG_--454021.jpg",
      "/taobao/flat-button-zipper-pouch/O1CN01WFelxx1fZfPW2A8Ky_--454021-jpg_.webp",
      "/taobao/flat-button-zipper-pouch/O1CN01AwHEbW1fZfPYl8fJx_--454021-jpg_.webp",
      "/taobao/flat-button-zipper-pouch/O1CN01EbBdHZ1fZfPUicpyw_--454021-jpg_.webp",
      "/taobao/flat-button-zipper-pouch/O1CN01Aj9ekx1fZfPX5YRgz_--454021-jpg_.webp",
      "/taobao/flat-button-zipper-pouch/O1CN014ZQGkp1fZfPX5Vxrv_--454021-jpg_.webp",
      "/taobao/flat-button-zipper-pouch/O1CN01HlXWoj1fZfPS8CbCV_--454021-jpg_.webp",
      "/taobao/flat-button-zipper-pouch/O1CN01WrSnxk1fZfPS8BnGn_--454021-jpg_.webp",
      "/taobao/flat-button-zipper-pouch/O1CN015QIhyg1fZfPW2Dglk_--454021-jpg_.webp",
      "/taobao/flat-button-zipper-pouch/O1CN010O0NK61fZfPOve9iK_--454021-jpg_.webp",
      "/taobao/flat-button-zipper-pouch/O1CN01sbdMUn1fZfPPgQUu6_--454021-jpg_.webp",
      "/taobao/flat-button-zipper-pouch/O1CN014ZO3W31fZfPS8DsDo_--454021-jpg_.webp",
      "/taobao/flat-button-zipper-pouch/O1CN01N5DRZT1fZfPOvhdvg_--454021-jpg_.webp",
      "/taobao/flat-button-zipper-pouch/O1CN01GMOmrv1fZfPS8AvHm_--454021-jpg_.webp",
      "/taobao/flat-button-zipper-pouch/O1CN01YdsYx51fZfPS8AinB_--454021-jpg_.webp",
      "/taobao/flat-button-zipper-pouch/O1CN01exwmf91fZfPOvfEGL_--454021-jpg_.webp"
    ],
    badge: '⚡ New Stock',
    rating: 4.9,
    reviews: 14,
    inStock: true,
    turnaround: '5-7 days',
    minOrder: 100,
    shape: 'Flat Bottom Eight-Side Seal Zipper Pouch',
    material: 'Clear PE/PET (Matte or Glossy) - Food Grade High Barrier',
    basePrice: 10.07,
    pricePerPiece: 0.101,
    minQuantity: 100,
    quantityStep: 100,
    sizeInfo: 'Wide selection of Vertical, Wide, and Handle styles (10x20cm to 30x23cm)',
    shelfLife: '12-24 months freshness',
    certification: 'FDA Approved',
    sizeVariants: [
      {
        id: "flat-bottom-sup-10x20",
        label: "Vertical - 10x20+6cm (100pcs)",
        dimensions: "100 × 200 + 60 mm",
        hasHole: false,
        quantity: 100,
        totalPrice: 10.07,
        unitPrice: 0.101,
        heroImageIndex: 2
      },
      {
        id: "flat-bottom-sup-12x22",
        label: "Vertical - 12x22+6cm (100pcs)",
        dimensions: "120 × 220 + 60 mm",
        hasHole: false,
        quantity: 100,
        totalPrice: 12.59,
        unitPrice: 0.126,
        heroImageIndex: 3
      },
      {
        id: "flat-bottom-sup-14x24",
        label: "Vertical - 14x24+6cm (100pcs)",
        dimensions: "140 × 240 + 60 mm",
        hasHole: false,
        quantity: 100,
        totalPrice: 15.73,
        unitPrice: 0.157,
        heroImageIndex: 4
      },
      {
        id: "flat-bottom-sup-16x26",
        label: "Vertical - 16x26+8cm (100pcs)",
        dimensions: "160 × 260 + 80 mm",
        hasHole: false,
        quantity: 100,
        totalPrice: 22.66,
        unitPrice: 0.227,
        heroImageIndex: 5
      },
      {
        id: "flat-bottom-sup-18x28",
        label: "Vertical - 18x28+8cm (100pcs)",
        dimensions: "180 × 280 + 80 mm",
        hasHole: false,
        quantity: 100,
        totalPrice: 27.69,
        unitPrice: 0.277,
        heroImageIndex: 6
      },
      {
        id: "flat-bottom-sup-20x30",
        label: "Vertical - 20x30+8cm (100pcs)",
        dimensions: "200 × 300 + 80 mm",
        hasHole: false,
        quantity: 100,
        totalPrice: 34.62,
        unitPrice: 0.346,
        heroImageIndex: 7
      },
      {
        id: "flat-bottom-wide-24x17",
        label: "Wide - 24x17+8cm (100pcs)",
        dimensions: "240 × 170 + 80 mm",
        hasHole: false,
        quantity: 100,
        totalPrice: 22.03,
        unitPrice: 0.220,
        heroImageIndex: 8
      },
      {
        id: "flat-bottom-wide-26x19",
        label: "Wide - 26x19+8cm (100pcs)",
        dimensions: "260 × 190 + 80 mm",
        hasHole: false,
        quantity: 100,
        totalPrice: 26.43,
        unitPrice: 0.264,
        heroImageIndex: 9
      },
      {
        id: "flat-bottom-wide-28x21",
        label: "Wide - 28x21+8cm (100pcs)",
        dimensions: "280 × 210 + 80 mm",
        hasHole: false,
        quantity: 100,
        totalPrice: 32.73,
        unitPrice: 0.327,
        heroImageIndex: 10
      },
      {
        id: "flat-bottom-wide-30x23",
        label: "Wide - 30x23+8cm (100pcs)",
        dimensions: "300 × 230 + 80 mm",
        hasHole: false,
        quantity: 100,
        totalPrice: 40.91,
        unitPrice: 0.409,
        heroImageIndex: 11
      },
      {
        id: "flat-bottom-handle-12x23",
        label: "Handle - 12x23+6cm (100pcs)",
        dimensions: "120 × 230 + 60 mm",
        hasHole: true,
        quantity: 100,
        totalPrice: 14.48,
        unitPrice: 0.145,
        heroImageIndex: 12
      },
      {
        id: "flat-bottom-handle-14x25",
        label: "Handle - 14x25+6cm (100pcs)",
        dimensions: "140 × 250 + 60 mm",
        hasHole: true,
        quantity: 100,
        totalPrice: 17.62,
        unitPrice: 0.176,
        heroImageIndex: 13
      },
      {
        id: "flat-bottom-handle-16x27",
        label: "Handle - 16x27+8cm (100pcs)",
        dimensions: "160 × 270 + 80 mm",
        hasHole: true,
        quantity: 100,
        totalPrice: 25.17,
        unitPrice: 0.252,
        heroImageIndex: 14
      },
      {
        id: "flat-bottom-handle-18x29",
        label: "Handle - 18x29+8cm (100pcs)",
        dimensions: "180 × 290 + 80 mm",
        hasHole: true,
        quantity: 100,
        totalPrice: 30.21,
        unitPrice: 0.302,
        heroImageIndex: 15
      },
      {
        id: "flat-bottom-handle-20x31",
        label: "Handle - 20x31+8cm (100pcs)",
        dimensions: "200 × 310 + 80 mm",
        hasHole: true,
        quantity: 100,
        totalPrice: 37.76,
        unitPrice: 0.378,
        heroImageIndex: 16
      }
    ],
    customPrintNote: 'Custom prints available from 100+ pieces. Please consult our team.',
    customPrintProductId: 'conven-sup-clear-zip',
  },
  // Custom Biodegradable Clear PLA Adhesive Sticker & Label (Stock ready-made sizes)
  {
    id: 'eco-custom-label',
    name: 'Custom Biodegradable Clear PLA Adhesive Sticker & Label',
    category: 'eco-stock',
    description: 'Premium ready-made, 100% biodegradable and compostable clear PLA adhesive stickers and labels. Made from high-clarity plant-based PLA film combined with high-performance compostable acrylic adhesive. 100% moisture-resistant, oil-resistant, and completely transparent, making them ideal for high-end organic cosmetics, glass bottle packaging, and food-grade packaging. Fully certified under EN 13432 and ASTM D6400 to degrade cleanly within 180 days under composting conditions with zero microplastic residue.',
    shortDesc: 'Premium 100% biodegradable clear PLA compostable sealing labels and hygiene stickers in stock',
    features: [
      'High-Clarity Clear PLA Film',
      '100% Compostable & Biodegradable',
      'Water-Resistant & Oil-Resistant',
      'Food-Grade Acrylic Bio-Adhesive',
      '180-Day Zero Microplastic Degradation'
    ],
    images: [
      '/taobao/pla-compostable-clear-label/clear-label-hygiene-cover.jpg',
      '/taobao/pla-compostable-clear-label/clear-label-eco-friendly.webp',
      '/taobao/pla-compostable-clear-label/clear-label-factory-material.webp',
      '/taobao/pla-compostable-clear-label/clear-label-hygienic-liner.webp',
      '/taobao/pla-compostable-clear-label/clear-label-hygiene-close-up.jpg',
      '/taobao/pla-compostable-clear-label/clear-label-datasheet.jpg',
      '/taobao/pla-compostable-clear-label/clear-label-parameters.png',
      '/taobao/pla-compostable-clear-label/clear-label-categories.png',
      '/taobao/pla-compostable-clear-label/clear-label-dimensions.png',
      '/taobao/pla-compostable-clear-label/clear-label-customization.jpg',
      '/taobao/pla-compostable-clear-label/clear-label-certifications.jpg'
    ],
    badge: '🌿 100% Compostable Label',
    rating: 4.9,
    reviews: 182,
    inStock: true,
    turnaround: '3-5 days',
    minOrder: 1,
    shape: 'Label & Sticker',
    material: 'Certified Compostable Clear PLA Film & Bio-Adhesive',
    basePrice: 18.90,
    pricePerPiece: 0.0189,
    minQuantity: 1,
    quantityStep: 1,
    sizeInfo: '110×50mm / 140×37.5mm / 140×50mm / 142×65mm / 37.5×140mm / 35×135mm',
    shelfLife: '12 months under dry & cool conditions',
    certification: 'TUV OK Compost Industrial, EN 13432, ASTM D6400, FSC Certified',
    customPrintNote: 'Custom logo printing available. Please check our Custom Digital print page.',
    sizeVariants: [
      {
        id: 'clear-label-110x50-1000pcs',
        label: '110 × 50 mm (1,000 Pcs / Pack)',
        dimensions: '110 × 50 mm • Clear PLA • 1,000 Pcs/Pack',
        hasHole: false,
        quantity: 1000,
        totalPrice: 18.90,
        unitPrice: 0.0189,
        heroImageIndex: 3
      },
      {
        id: 'clear-label-140x37.5-1000pcs',
        label: '140 × 37.5 mm (1,000 Pcs / Pack)',
        dimensions: '140 × 37.5 mm • Clear PLA • 1,000 Pcs/Pack',
        hasHole: false,
        quantity: 1000,
        totalPrice: 22.90,
        unitPrice: 0.0229,
        heroImageIndex: 0
      },
      {
        id: 'clear-label-140x50-1000pcs',
        label: '140 × 50 mm (1,000 Pcs / Pack)',
        dimensions: '140 × 50 mm • Clear PLA • 1,000 Pcs/Pack',
        hasHole: false,
        quantity: 1000,
        totalPrice: 24.90,
        unitPrice: 0.0249,
        heroImageIndex: 4
      },
      {
        id: 'clear-label-37.5x140-1000pcs',
        label: '37.5 × 140 mm (1,000 Pcs / Pack)',
        dimensions: '37.5 × 140 mm • Clear PLA • 1,000 Pcs/Pack',
        hasHole: false,
        quantity: 1000,
        totalPrice: 22.90,
        unitPrice: 0.0229,
        heroImageIndex: 0
      },
      {
        id: 'clear-label-142x65-1000pcs',
        label: '142 × 65 mm (1,000 Pcs / Pack)',
        dimensions: '142 × 65 mm • Clear PLA • 1,000 Pcs/Pack',
        hasHole: false,
        quantity: 1000,
        totalPrice: 28.90,
        unitPrice: 0.0289,
        heroImageIndex: 0
      },
      {
        id: 'clear-label-35x135-1440pcs',
        label: '35 × 135 mm (1,440 Pcs / Pack)',
        dimensions: '35 × 135 mm • Clear PLA • Sheets (12 pcs/sheet, 120 sheets/pack)',
        hasHole: false,
        quantity: 1440,
        totalPrice: 29.90,
        unitPrice: 0.0208,
        heroImageIndex: 7
      }
    ]
  },
  // Premium PLA Biodegradable Clear Sealing Sticker
  {
    id: 'eco-pla-sealing-sticker',
    name: 'Premium PLA Biodegradable Clear Sealing Sticker',
    category: 'eco-stock',
    description: 'High-performance, 100% plant-based compostable transparent circular stickers with high-performance bio-adhesive. Perfect for retail box sealing, hygienic protection, and eco-friendly food packaging. Completely degrades into natural organic compounds in less than 14 weeks (98 days) under composting conditions, leaving zero microplastics or toxic residue.',
    shortDesc: 'Certified compostable premium clear circular PLA sealing stickers and packaging labels',
    features: [
      '100% Plant-Based Clear PLA Film',
      'High-Performance Compostable Acrylic Bio-Adhesive',
      'Complete Biodegradation in ≤14 Weeks (98 Days)',
      'Waterproof, Oil-resistant, and High-Tack Adhesion',
      'Zero Microplastics and Zero Toxic Chemicals'
    ],
    images: [
      '/taobao/pla-sticker/pla-sticker-cover.png',
      '/taobao/pla-sticker/pla-sticker-roll.jpg',
      '/taobao/pla-sticker/pla-sticker-features.png',
      '/taobao/pla-sticker/pla-sticker-details.jpg',
      '/taobao/pla-sticker/pla-sticker-comparison.jpg',
      '/taobao/pla-sticker/pla-sticker-custom-sizes.jpg',
      '/taobao/pla-sticker/pla-sticker-banner.jpg'
    ],
    badge: '🌱 14-Week Biodegradable',
    rating: 4.9,
    reviews: 124,
    inStock: true,
    turnaround: '3-5 days',
    minOrder: 1,
    shape: 'Label & Sticker',
    material: 'Certified Compostable Clear PLA Film & Acrylic Bio-Adhesive',
    basePrice: 9.90,
    pricePerPiece: 0.0099,
    minQuantity: 1,
    quantityStep: 1,
    sizeInfo: 'Diameter: 20mm / 25mm / 30mm / 35mm / 40mm / 50mm (1,000 Pcs/Pack)',
    shelfLife: '12 months under dry & cool conditions',
    certification: 'DIN CERTCO, TUV OK Compost Industrial, EN 13432, ASTM D6400',
    customPrintNote: 'Custom sizes and logo print available from 10,000+ pieces. Please consult our team.',
    sizeVariants: [
      {
        id: 'pla-sticker-dia-20-1000pcs',
        label: 'Diameter 20 mm (1,000 Pcs / Pack)',
        dimensions: 'Dia 20 mm • Transparent Circle • 1,000 Pcs/Pack',
        hasHole: false,
        quantity: 1000,
        totalPrice: 9.90,
        unitPrice: 0.0099,
        heroImageIndex: 0
      },
      {
        id: 'pla-sticker-dia-25-1000pcs',
        label: 'Diameter 25 mm (1,000 Pcs / Pack)',
        dimensions: 'Dia 25 mm • Transparent Circle • 1,000 Pcs/Pack',
        hasHole: false,
        quantity: 1000,
        totalPrice: 11.90,
        unitPrice: 0.0119,
        heroImageIndex: 0
      },
      {
        id: 'pla-sticker-dia-30-1000pcs',
        label: 'Diameter 30 mm (1,000 Pcs / Pack)',
        dimensions: 'Dia 30 mm • Transparent Circle • 1,000 Pcs/Pack',
        hasHole: false,
        quantity: 1000,
        totalPrice: 13.90,
        unitPrice: 0.0139,
        heroImageIndex: 0
      },
      {
        id: 'pla-sticker-dia-35-1000pcs',
        label: 'Diameter 35 mm (1,000 Pcs / Pack)',
        dimensions: 'Dia 35 mm • Transparent Circle • 1,000 Pcs/Pack',
        hasHole: false,
        quantity: 1000,
        totalPrice: 16.90,
        unitPrice: 0.0169,
        heroImageIndex: 0
      },
      {
        id: 'pla-sticker-dia-40-1000pcs',
        label: 'Diameter 40 mm (1,000 Pcs / Pack)',
        dimensions: 'Dia 40 mm • Transparent Circle • 1,000 Pcs/Pack',
        hasHole: false,
        quantity: 1000,
        totalPrice: 19.90,
        unitPrice: 0.0199,
        heroImageIndex: 0
      },
      {
        id: 'pla-sticker-dia-50-1000pcs',
        label: 'Diameter 50 mm (1,000 Pcs / Pack)',
        dimensions: 'Dia 50 mm • Transparent Circle • 1,000 Pcs/Pack',
        hasHole: false,
        quantity: 1000,
        totalPrice: 24.90,
        unitPrice: 0.0249,
        heroImageIndex: 1
      }
    ]
  }
]

// Combined products array
export const FEATURED_PRODUCTS: StoreProduct[] = [
  ...SAMPLE_PRODUCTS,
  ...CONVENTIONAL_PRODUCTS,
  ...ECO_DIGITAL_PRODUCTS,
  ...ECO_STOCK_PRODUCTS,
  ...CONVENTIONAL_STOCK_PRODUCTS,
  ...BOXES_PRODUCTS,
]

export const getPrice = (shape: string, size: string, quantity: number): number => {
  const shapeData = PRICING_DATA[shape]
  if (!shapeData) return 0
  const sizeData = shapeData[size]
  if (!sizeData) return 0
  return sizeData[quantity] || 0
}

export const getProductImage = (shape: string): string => {
  const images: Record<string, string> = {
    '3-side-seal': '/imgs/store/pouch shape/3-side.webp',
    'zipper-3-side-seal': '/imgs/store/pouch shape/3-side.webp',
    'stand-up': '/imgs/store/pouch shape/stand-up.webp',
    'zipper-stand-up': '/imgs/store/pouch shape/stand-up.webp',
  }
  return images[shape] || '/imgs/store/pouch shape/stand-up.webp'
}

// Helper function to get product type based on category and id
export const getProductType = (product: StoreProduct): ProductType => {
  // Check if productType exists on the product
  if ('productType' in product && product.productType) {
    return product.productType as ProductType
  }
  
  // Infer from category
  if (product.category === 'sample') return 'sample'
  if (product.category === 'conventional-digital') return 'stock'
  if (product.category === 'eco-stock') {
    // Override for eco-custom-label which contains '-custom' but is ready-made stock
    if (product.id === 'eco-custom-label' || product.id === 'eco-pla-sealing-sticker') return 'stock'
    // Check if it's a custom print version
    if (product.id.includes('-custom')) return 'custom'
    return 'stock'
  }
  if (product.category === 'conventional-stock') return 'stock'
  if (product.category === 'eco-digital') return 'custom'
  if (product.category === 'boxes') return 'custom'
  
  return 'stock' // default
}

// Helper function to get sub-category for sidebar menu
export const getProductSubCategory = (product: StoreProduct): ProductSubCategory => {
  // Check if subCategory exists on the product
  if ('subCategory' in product && product.subCategory) {
    return product.subCategory as ProductSubCategory
  }
  
  // Infer from category and id
  if (product.category === 'sample') return 'samples'
  if (product.category === 'conventional-digital') return 'conventional-digital'
  if (product.category === 'eco-stock') {
    // Override for eco-custom-label which contains '-custom' but is ready-made stock
    if (product.id === 'eco-custom-label' || product.id === 'eco-pla-sealing-sticker') return 'eco-stock-plain'
    if (product.id.includes('-custom')) return 'eco-stock-custom-print'
    return 'eco-stock-plain'
  }
  if (product.category === 'conventional-stock') return 'conventional-stock-plain'
  if (product.category === 'eco-digital') return 'eco-digital'
  if (product.category === 'boxes') return 'boxes'
  
  return 'conventional-digital' // default
}

// Check if product is purchasable (stock) or requires RFQ (custom)
export const isProductPurchasable = (product: StoreProduct): boolean => {
  const type = getProductType(product)
  return type === 'sample' || type === 'stock'
}


