/**
 * Eco Digital Calculator Data
 * TypeScript version of Python data.py for 100% pricing logic consistency
 */

// Size code type
export type EcoSizeCode = 'XXXS' | 'XXS' | 'XS' | 'S' | 'M' | 'L' | 'XL' | 'XXL'

// Pouch shape types
export type PouchShape =
  | '3 Side Seal Pouch'
  | 'Center Seal Pouch'
  | 'Stand Up Pouch / Doypack'
  | 'Box Bottom Pouch'
  | 'Flat Squared Bottom Pouch'
  | 'Quad Seal Pouch'
  | 'Side Gusset Pouch'

// Material types
export type EcoMaterial =
  | 'PCR or Bio Plastic'
  | 'Mono Recyclable Plastic'
  | 'Biodegradable and Compostable'

// Shipping method types
export type ShippingMethod = 'Air Freight' | 'Sea Freight' | 'Dual Shipping'

// SIZE_DATA from Python
export const SIZE_DATA: Record<EcoSizeCode, { base_cost: number; base_weight: number }> = {
  XXXS: { base_cost: 0.45, base_weight: 3 },
  XXS: { base_cost: 0.75, base_weight: 5 },
  XS: { base_cost: 0.77, base_weight: 6 },
  S: { base_cost: 0.80, base_weight: 7.5 },
  M: { base_cost: 0.82, base_weight: 9 },
  L: { base_cost: 0.89, base_weight: 12 },
  XL: { base_cost: 1.05, base_weight: 15 },
  XXL: { base_cost: 1.25, base_weight: 18 },
}

// SIZE_SPECS with display labels
interface SizeSpec {
  cost: number
  weight: number
  label: string
  widthMm: number
  heightMm: number
  gussetMm?: number
  widthInch: number
  heightInch: number
  gussetInch?: number
}

export const SIZE_SPECS: Record<EcoSizeCode, SizeSpec> = {
  XXXS: {
    cost: 0.45,
    weight: 0,
    label: '3.6 width x 6.3 length Inch / 90 x 110 mm',
    widthMm: 90,
    heightMm: 110,
    widthInch: 3.6,
    heightInch: 6.3,
  },
  XXS: {
    cost: 0,
    weight: 0,
    label: '4.3 width x 6.3 length Inch / 110 x 160 mm',
    widthMm: 110,
    heightMm: 160,
    widthInch: 4.3,
    heightInch: 6.3,
  },
  XS: {
    cost: 5,
    weight: 20,
    label: '5.1 width x 7.9 length Inch / 130 x 200 mm',
    widthMm: 130,
    heightMm: 200,
    widthInch: 5.1,
    heightInch: 7.9,
  },
  S: {
    cost: 10,
    weight: 50,
    label: '5.9 width x 7.9 length Inch / 150 x 200 mm',
    widthMm: 150,
    heightMm: 200,
    widthInch: 5.9,
    heightInch: 7.9,
  },
  M: {
    cost: 12.5,
    weight: 70,
    label: '6.3 width x 9.1 length Inch / 160 x 230 mm',
    widthMm: 160,
    heightMm: 230,
    widthInch: 6.3,
    heightInch: 9.1,
  },
  L: {
    cost: 15,
    weight: 90,
    label: '7.1 width x 10.4 length Inch / 180 x 265 mm',
    widthMm: 180,
    heightMm: 265,
    widthInch: 7.1,
    heightInch: 10.4,
  },
  XL: {
    cost: 20,
    weight: 120,
    label: '7.9 width x 11.8 length Inch / 200 x 300 mm',
    widthMm: 200,
    heightMm: 300,
    widthInch: 7.9,
    heightInch: 11.8,
  },
  XXL: {
    cost: 25,
    weight: 150,
    label: '9.8 width x 13 length Inch / 250 x 330 mm',
    widthMm: 250,
    heightMm: 330,
    widthInch: 9.8,
    heightInch: 13,
  },
}

// MATERIALS_SPECS
export const MATERIALS_SPECS: Record<EcoMaterial, {
  base_cost: number
  base_weight: number
  cost: number
  weight: number
  display_name: string
}> = {
  'PCR or Bio Plastic': {
    base_cost: 0.75,
    base_weight: 5.0,
    cost: 15.00,
    weight: 0.00,
    display_name: 'PCR or Bio Plastic',
  },
  'Mono Recyclable Plastic': {
    base_cost: 0.70,
    base_weight: 5.0,
    cost: 20.00,
    weight: 0.00,
    display_name: 'Mono Recyclable Plastic',
  },
  'Biodegradable and Compostable': {
    base_cost: 0.80,
    base_weight: 5.0,
    cost: 60.00,
    weight: 0.00,
    display_name: 'Biodegradable and Compostable',
  },
}

// PACKAGING_SHAPE_FACTORS
export const PACKAGING_SHAPE_FACTORS: Record<PouchShape, {
  cost: number
  weight: number
  multiplier: number
}> = {
  '3 Side Seal Pouch': { cost: -35.00, weight: 0.00, multiplier: 0.65 },
  'Center Seal Pouch': { cost: -35.00, weight: 0.00, multiplier: 0.65 },
  'Stand Up Pouch / Doypack': { cost: 0.00, weight: 0.00, multiplier: 1.00 },
  'Box Bottom Pouch': { cost: 60.00, weight: 20.00, multiplier: 1.30 },
  'Flat Squared Bottom Pouch': { cost: 100.00, weight: 20.00, multiplier: 1.40 },
  'Quad Seal Pouch': { cost: 50.00, weight: 20.00, multiplier: 1.15 },
  'Side Gusset Pouch': { cost: 30.00, weight: 20.00, multiplier: 1.10 },
}

// MATERIALS_FACTORS
export const MATERIALS_FACTORS: Record<EcoMaterial, {
  cost: number
  weight: number
  multiplier: number
}> = {
  'PCR or Bio Plastic': { cost: -10.00, weight: 0.00, multiplier: 0.9 },
  'Mono Recyclable Plastic': { cost: -30.00, weight: 0.00, multiplier: 0.7 },
  'Biodegradable and Compostable': { cost: 60.00, weight: 0.00, multiplier: 1.6 },
}

// BARRIERS
export const BARRIERS: Record<string, {
  cost: number
  weight: number
  info: {
    otr: string
    wvtr: string
    shelf_life: string
    description: string
    recommended_for: string
  }
}> = {
  'mid clear mid barrier (Optional Window)': {
    cost: 0.60,
    weight: 0.00,
    info: {
      otr: '<8',
      wvtr: '<12',
      shelf_life: '6-9 months',
      description: 'Provides moderate oxygen and moisture barrier with clear visibility.',
      recommended_for: 'Dry snacks, nuts, seeds, granola, pasta',
    },
  },
  'metalised high barrier (No Window)': {
    cost: 1.00,
    weight: 5.00,
    info: {
      otr: '<10',
      wvtr: '<3',
      shelf_life: '9-12 months',
      description: 'High-performance metalized barrier',
      recommended_for: 'Coffee, tea, spices, pet food',
    },
  },
  'Aluminum highest barrier (No Window)': {
    cost: 1.20,
    weight: 20.00,
    info: {
      otr: '<1',
      wvtr: '<1',
      shelf_life: '12-18 months',
      description: 'Maximum barrier protection using aluminum foil',
      recommended_for: 'Premium coffee, specialty teas',
    },
  },
  'Low barrier (No window)': {
    cost: 0.40,
    weight: 0.00,
    info: {
      otr: '50-100',
      wvtr: '10-20',
      shelf_life: '3-6 months',
      description: 'Basic barrier properties',
      recommended_for: 'Dry goods, non-food items',
    },
  },
}

// BARRIER_FACTORS
export const BARRIER_FACTORS: Record<string, { cost: number; weight: number }> = {
  'mid clear mid barrier (Optional Window)': { cost: 0.60, weight: 0.00 },
  'metalised high barrier (No Window)': { cost: 1.00, weight: 5.00 },
  'Aluminum highest barrier (No Window)': { cost: 1.20, weight: 20.00 },
  'Low barrier (No window)': { cost: 0.40, weight: 0.00 },
}

// DESIGNS_FACTORS
export const DESIGNS_FACTORS: Record<string, { cost: number; weight: number }> = {
  '1': { cost: 0.00, weight: 0.00 },
  '2': { cost: 5.00, weight: 0.00 },
  '3': { cost: 10.00, weight: 0.00 },
  '4': { cost: 20.00, weight: 0.00 },
  '5': { cost: 25.00, weight: 0.00 },
}

// STIFFNESS_FACTORS
export const STIFFNESS_FACTORS: Record<string, { cost: number; weight: number }> = {
  'With Paper Lining (stiffer)': { cost: 0.00, weight: 30.00 },
  'Without Paper Lining (Softer)': { cost: -20.00, weight: 0.00 },
}

// QUANTITY_FACTORS
export const QUANTITY_FACTORS: Record<string, {
  cost: number
  weight: number
  print_method: string
  multiplier: number
}> = {
  '100 (Digital print)': { cost: 800.00, weight: 0.00, print_method: 'digital', multiplier: 9.00 },
  '500 (Digital print)': { cost: 80.00, weight: 0.00, print_method: 'digital', multiplier: 1.80 },
  '1,000 (Digital print)': { cost: 0.00, weight: 0.00, print_method: 'digital', multiplier: 1.00 },
  '2,000 (Digital print)': { cost: -30.00, weight: 0.00, print_method: 'digital', multiplier: 0.70 },
  '3,000 (Digital print)': { cost: -40.00, weight: 0.00, print_method: 'digital', multiplier: 0.60 },
  '5,000 (Flexo print)': { cost: -50.00, weight: 0.00, print_method: 'flexo', multiplier: 0.50 },
  '10,000 (Flexo print)': { cost: -65.00, weight: 0.00, print_method: 'flexo', multiplier: 0.35 },
  '20,000 (Flexo print)': { cost: -80.00, weight: 0.00, print_method: 'flexo', multiplier: 0.20 },
  '30,000 (Flexo print)': { cost: -82.00, weight: 0.00, print_method: 'flexo', multiplier: 0.18 },
  '50,000 (Flexo print)': { cost: -84.00, weight: 0.00, print_method: 'flexo', multiplier: 0.16 },
  '100,000 (Flexo print)': { cost: -87.00, weight: 0.00, print_method: 'flexo', multiplier: 0.13 },
  '500,000 (Flexo print)': { cost: -90.00, weight: 0.00, print_method: 'flexo', multiplier: 0.10 },
}

// ZIPPER_FACTORS
export const ZIPPER_FACTORS: Record<string, { cost: number; weight: number }> = {
  'No': { cost: 0.00, weight: 0.00 },
  'Regular Zipper': { cost: 5.00, weight: 10.00 },
  'One-Sided Zipper': { cost: 14.00, weight: 10.00 },
  'Child Resistant Zipper': { cost: 20.00, weight: 10.00 },
  'Slider': { cost: 20.00, weight: 10.00 },
  'Tin Tie': { cost: 0.00, weight: 0.00 },
  'Adhesive Tape': { cost: 5.00, weight: 5.00 },
  'Spout': { cost: 0.00, weight: 5.00 },
}

// SURFACE_TREATMENT_FACTORS
export const SURFACE_TREATMENT_FACTORS: Record<string, { cost: number; weight: number }> = {
  'Full Glossy': { cost: 0.00, weight: 0.00 },
  'Full Matt': { cost: 5.00, weight: 0.00 },
  'Soft Touch Matt': { cost: 15.00, weight: 0.00 },
}

// SHIPPING_METHODS
export const SHIPPING_METHODS: Record<ShippingMethod, {
  cost_per_gram: number
  lead_time: string
  air_portion?: number
}> = {
  'Air Freight': { cost_per_gram: 0.015, lead_time: '15 days', air_portion: 1.0 },
  'Sea Freight': { cost_per_gram: 0.005, lead_time: '60 days', air_portion: 0.0 },
  'Dual Shipping': { cost_per_gram: 0, lead_time: '15-60 days' },
}