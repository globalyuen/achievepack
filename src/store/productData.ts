// Store category types
export type StoreCategory = 'sample' | 'conventional-digital' | 'eco-digital' | 'eco-stock'

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
}

// New store product types
export interface BaseStoreProduct {
  id: string
  name: string
  category: StoreCategory
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
  // YouTube video URL for product demo
  videoUrl?: string
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

export type StoreProduct = PouchProduct | SampleProduct | ConventionalProduct | EcoDigitalProduct | EcoStockProduct

// Eco Stock size variant (for products with multiple sizes)
export interface EcoStockSizeVariant {
  id: string
  label: string
  dimensions: string
  hasHole: boolean
  quantity: number
  totalPrice: number
  unitPrice: number
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
  category: 'eco-stock'
  shape: string
  material: string
  basePrice: number
  pricePerPiece: number
  minQuantity: number
  quantityStep: number
  sizeInfo: string
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

export interface PouchSize {
  id: string
  label: string
  dimensions: string
  imperial: string
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
  { id: '90x130', label: '90 × 130+60mm', dimensions: '90x130', imperial: '3.5" × 5.1"' },
  { id: '100x150', label: '100 × 150+50mm', dimensions: '100x150', imperial: '3.9" × 5.9"' },
  { id: '110x160', label: '110 × 160+60mm', dimensions: '110x160', imperial: '4.3" × 6.3"' },
  { id: '120x170', label: '120 × 170+80mm', dimensions: '120x170', imperial: '4.7" × 6.7"' },
  { id: '120x200', label: '120 × 200+80mm', dimensions: '120x200', imperial: '4.7" × 7.9"' },
  { id: '130x180', label: '130 × 180+80mm', dimensions: '130x180', imperial: '5.1" × 7.1"' },
  { id: '140x200', label: '140 × 200+80mm', dimensions: '140x200', imperial: '5.5" × 7.9"' },
  { id: '150x220', label: '150 × 220+80mm', dimensions: '150x220', imperial: '5.9" × 8.7"' },
  { id: '160x240', label: '160 × 240+80mm', dimensions: '160x240', imperial: '6.3" × 9.4"' },
  { id: '180x260', label: '180 × 260+80mm', dimensions: '180x260', imperial: '7.1" × 10.2"' },
  { id: '200x300', label: '200 × 300+100mm', dimensions: '200x300', imperial: '7.9" × 11.8"' },
  { id: '210x310', label: '210 × 310+100mm', dimensions: '210x310', imperial: '8.3" × 12.2"' },
  { id: '230x350', label: '230 × 350+100mm', dimensions: '230x350', imperial: '9.1" × 13.8"' },
  { id: '260x350', label: '260 × 350+100mm', dimensions: '260x350', imperial: '10.2" × 13.8"' },
]

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

// Sample Products (5)
const SAMPLE_PRODUCTS: SampleProduct[] = [
  {
    id: 'sample-sizing-pack',
    name: 'Sizing Pack (Conventional Plastic)',
    category: 'sample',
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
      '/imgs/store/con-digital/3ss-clear-xzip/3.webp'
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
      '/imgs/store/con-digital/3ss-clear-zip/3.webp'
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
      '/imgs/store/con-digital/3ss-met-xzip/3.webp'
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
      '/imgs/store/con-digital/3ss-met-zip/3.webp'
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
    videoUrl: 'https://youtu.be/xKusl5lOEYM',
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
    images: ['/imgs/store/pouch shape/3-side.webp'],
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
    images: ['/imgs/store/pouch shape/center.webp'],
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
    images: ['/imgs/store/pouch shape/stand-up.webp'],
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
    images: ['/imgs/store/pouch shape/box.webp'],
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
    images: ['/imgs/store/pouch shape/flat-bottom.webp'],
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
    images: ['/imgs/store/pouch shape/quad-seal.webp'],
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
    images: ['/imgs/store/pouch shape/side -seal.webp'],
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
  // Compostable Flat Bottom Pouch - Kraft
  {
    id: 'eco-stock-flatbottom-kraft',
    name: 'Compostable Flat Bottom Pouch – Natural Kraft',
    category: 'eco-stock',
    description: '100% compostable flat bottom pouch with natural kraft finish. Made from plant-based materials that break down in industrial composting facilities. Features one-sided zipper for resealability.',
    shortDesc: 'From US$500 for 500 pcs',
    features: ['100% Compostable', 'Industrial Composting Certified', 'High Barrier (6-12 months)', 'One-Sided Zipper', 'Natural Kraft Finish'],
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
    minOrder: 500,
    shape: 'Flat Squared Bottom Pouch',
    material: 'Natural Kraft - High Barrier (Matte)',
    basePrice: 500,
    pricePerPiece: 1.00,
    minQuantity: 500,
    quantityStep: 500,
    sizeInfo: '140mm x 290mm + 80mm',
    customPrintNote: 'Custom print available for orders of 5,000+ pcs per design. Contact us for details.',
    videoUrl: 'https://youtu.be/xKusl5lOEYM',
  },
  // Compostable Flat Bottom Pouch - Clear
  {
    id: 'eco-stock-flatbottom-clear',
    name: 'Compostable Flat Bottom Pouch – Milky Clear',
    category: 'eco-stock',
    description: '100% compostable flat bottom pouch with milky clear finish for product visibility. Made from plant-based materials with industrial composting certification. Features one-sided zipper for convenience.',
    shortDesc: 'From US$500 for 500 pcs',
    features: ['100% Compostable', 'Industrial Composting Certified', 'High Barrier (6-12 months)', 'One-Sided Zipper', 'Milky Clear Finish'],
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
    minOrder: 500,
    shape: 'Flat Squared Bottom Pouch',
    material: 'Milky Clear - High Barrier (Glossy)',
    basePrice: 500,
    pricePerPiece: 1.00,
    minQuantity: 500,
    quantityStep: 500,
    sizeInfo: '140mm x 290mm + 80mm',
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
  },
]

// Combined products array (18 total: 4 sample + 8 conventional + 7 eco + 2 eco-stock)
export const FEATURED_PRODUCTS: StoreProduct[] = [
  ...SAMPLE_PRODUCTS,
  ...CONVENTIONAL_PRODUCTS,
  ...ECO_DIGITAL_PRODUCTS,
  ...ECO_STOCK_PRODUCTS,
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
