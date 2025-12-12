// Store category types
export type StoreCategory = 'sample' | 'conventional-digital' | 'eco-digital'

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

export type StoreProduct = PouchProduct | SampleProduct | ConventionalProduct | EcoDigitalProduct

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
  },
  {
    id: 'sample-assorted-eco',
    name: 'Assorted Eco Pouches Sample',
    category: 'sample',
    description: 'Mixed eco-friendly sample pouches including PCR/Bio, Recyclable, and Compostable materials.',
    shortDesc: '$10 samples + $40 shipping',
    features: ['PCR/Bio Materials', 'Recyclable Options', 'Compostable Options', 'Variety Pack'],
    images: ['/imgs/store/pouch shape/quad-seal.webp'],
    badge: '🌱 Eco-Friendly',
    rating: 4.8,
    reviews: 98,
    inStock: true,
    turnaround: '3-5 days',
    minOrder: 1,
    sampleType: 'assorted-eco',
    sampleCost: 10,
    shippingCost: 40,
    basePrice: 50,
  },
  {
    id: 'sample-top-film',
    name: 'Custom Digital Printed Top Film 760mm x 1000mm',
    category: 'sample',
    description: 'Large format digital printed film sample. Perfect for testing print quality and colors.',
    shortDesc: '$20 sample + $40 shipping',
    features: ['760mm x 1000mm', 'Digital Print Quality', 'Color Testing', 'Fast Turnaround'],
    images: ['/imgs/store/pouch shape/3-side.webp'],
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
  },
  {
    id: 'sample-hand-sealed',
    name: 'Custom Digital Printed Hand Sealed Pouches',
    category: 'sample',
    description: 'Custom size hand-sealed digital printed pouches. Test your exact specifications before bulk order.',
    shortDesc: '$20 sample + $40 shipping',
    features: ['Custom Sizes', 'Hand Sealed', 'Digital Print', 'Full Customization'],
    images: ['/imgs/store/pouch shape/box.webp'],
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
  },
  {
    id: 'sample-commercial-standard',
    name: 'Custom Digital Printed Standard Size Commercial Pouches',
    category: 'sample',
    description: 'Commercial-grade standard size pouches with digital printing. Production-quality samples.',
    shortDesc: 'From $40 + shipping',
    features: ['Standard Sizes', 'Commercial Quality', 'Digital Print', 'Production Ready'],
    images: ['/imgs/store/pouch shape/flat-bottom.webp'],
    badge: '⭐ Commercial',
    rating: 4.8,
    reviews: 112,
    inStock: true,
    turnaround: '7-10 days',
    minOrder: 1,
    sampleType: 'commercial-standard',
    sampleCost: 40,
    shippingCost: 40,
    basePrice: 80,
  },
]

// Conventional Digital Products (4 shapes)
const CONVENTIONAL_PRODUCTS: ConventionalProduct[] = [
  {
    id: 'conven-3side-seal',
    name: 'Conventional Digital – 3 Side Seal Pouch',
    category: 'conventional-digital',
    description: 'Cost-effective 3-side seal pouch with conventional plastic digital printing. Standard sizes available.',
    shortDesc: 'From US$90 for 100 pcs',
    features: ['Digital Print', 'Standard Sizes', 'Fast Turnaround', 'Free Shipping'],
    images: ['/imgs/store/pouch shape/3-side.webp'],
    badge: '✨ Most Popular',
    rating: 4.9,
    reviews: 234,
    inStock: true,
    turnaround: '15-20 days',
    minOrder: 100,
    shape: '3-side-seal',
    basePrice: 90,
  },
  {
    id: 'conven-zipper-3side-seal',
    name: 'Conventional Digital – Zipper 3 Side Seal Pouch',
    category: 'conventional-digital',
    description: 'Resealable zipper 3-side seal pouch with conventional plastic. Perfect for products requiring freshness.',
    shortDesc: 'From US$100 for 100 pcs',
    features: ['Resealable Zipper', 'Digital Print', 'Standard Sizes', 'Free Shipping'],
    images: ['/imgs/store/pouch shape/center.webp'],
    badge: '🔒 Resealable',
    rating: 4.8,
    reviews: 187,
    inStock: true,
    turnaround: '15-20 days',
    minOrder: 100,
    shape: 'zipper-3-side-seal',
    basePrice: 100,
  },
  {
    id: 'conven-stand-up',
    name: 'Conventional Digital – Stand Up Pouch',
    category: 'conventional-digital',
    description: 'Premium stand-up pouch with conventional plastic. Excellent shelf presence and stability.',
    shortDesc: 'From US$90 for 100 pcs',
    features: ['Stand Up Design', 'Digital Print', 'Premium Look', 'Free Shipping'],
    images: ['/imgs/store/pouch shape/stand-up.webp'],
    badge: '📐 Stand Up',
    rating: 4.9,
    reviews: 312,
    inStock: true,
    turnaround: '15-20 days',
    minOrder: 100,
    shape: 'stand-up',
    basePrice: 90,
  },
  {
    id: 'conven-zipper-stand-up',
    name: 'Conventional Digital – Zipper Stand Up Pouch',
    category: 'conventional-digital',
    description: 'Resealable stand-up pouch combining premium presentation with functionality.',
    shortDesc: 'From US$100 for 100 pcs',
    features: ['Stand Up + Zipper', 'Digital Print', 'Maximum Freshness', 'Free Shipping'],
    images: ['/imgs/store/pouch shape/quad-seal.webp'],
    badge: '⭐ Best Seller',
    rating: 5.0,
    reviews: 421,
    inStock: true,
    turnaround: '15-20 days',
    minOrder: 100,
    shape: 'zipper-stand-up',
    basePrice: 100,
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
  },
]

// Combined products array (16 total: 5 sample + 4 conventional + 7 eco)
export const FEATURED_PRODUCTS: StoreProduct[] = [
  ...SAMPLE_PRODUCTS,
  ...CONVENTIONAL_PRODUCTS,
  ...ECO_DIGITAL_PRODUCTS,
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
