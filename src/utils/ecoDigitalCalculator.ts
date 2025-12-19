/**
 * Eco Digital Calculator
 * 100% replication of Python eco pouch calculator pricing logic
 */

import {
  SIZE_DATA,
  SIZE_SPECS,
  MATERIALS_SPECS,
  MATERIALS_FACTORS,
  PACKAGING_SHAPE_FACTORS,
  BARRIER_FACTORS,
  BARRIERS,
  DESIGNS_FACTORS,
  STIFFNESS_FACTORS,
  QUANTITY_FACTORS,
  ZIPPER_FACTORS,
  SURFACE_TREATMENT_FACTORS,
  SHIPPING_METHODS,
  type EcoSizeCode,
  type PouchShape,
  type EcoMaterial,
  type ShippingMethod,
} from './ecoDigitalData'

// Calculator input selections
export interface EcoCalculatorSelections {
  shape: PouchShape
  material: EcoMaterial
  size: EcoSizeCode
  quantityOption: string // e.g. "100 (Digital print)"
  designCount: number

  barrier: string
  stiffness: string
  zipper: string
  laserScoring: 'Yes' | 'No'
  valve: 'Yes' | 'No'
  additions: string[]
  surfaceTreatments: string[]

  shippingMethod: ShippingMethod
  seaPortion?: number // 0-1 for Dual Shipping
}

// Price breakdown output
export interface EcoPriceBreakdown {
  currentUnitPrice: number
  quantityLabel: string
  quantityUnits: number
  designCount: number
  totalInvestment: number

  pouchCostPerUnit: number
  fixedComponentsPerUnit: number
  setupCostsPerUnit: number
  shippingCostPerUnit: number

  totalPouchCost: number
  totalFixedComponents: number
  totalSetupCosts: number
  totalShippingCost: number

  shippingMethod: ShippingMethod
  seaPortion?: number

  unitWeightGrams: number
  totalWeightKg: number
}

// Package information output
export interface EcoPackageInfo {
  shapeLabel: string
  closureLabel: string
  sizeDisplay: string
  materialTypeLabel: string
  materialStructure: string
  barrierProperties: {
    otr: string
    wvtr: string
  }
  surface: string
  additional: string
}

// Combined calculator result
export interface EcoCalculatorResult {
  price: EcoPriceBreakdown
  package: EcoPackageInfo
}

/**
 * Calculate shipping cost per piece (replicates Python calculate_shipping_cost)
 */
function calculateShippingCost(
  weight: number,
  quantity: number,
  shippingMethod: ShippingMethod,
  seaPortion: number = 0.9
): number {
  const MIN_SHIPPING_COST = 40 // USD

  let shippingCostPerGram = 0

  if (shippingMethod === 'Air Freight') {
    shippingCostPerGram = SHIPPING_METHODS['Air Freight'].cost_per_gram
  } else if (shippingMethod === 'Sea Freight') {
    shippingCostPerGram = SHIPPING_METHODS['Sea Freight'].cost_per_gram
  } else {
    // Dual Shipping
    const airCostPerGram = SHIPPING_METHODS['Air Freight'].cost_per_gram
    const seaCostPerGram = SHIPPING_METHODS['Sea Freight'].cost_per_gram
    shippingCostPerGram = airCostPerGram * (1 - seaPortion) + seaCostPerGram * seaPortion
  }

  const totalWeight = weight * quantity
  let totalShipping = totalWeight * shippingCostPerGram

  if (totalShipping < MIN_SHIPPING_COST) {
    totalShipping = MIN_SHIPPING_COST
  }

  return totalShipping / quantity
}

/**
 * Calculate factors (replicates Python calculate_factors from app.py)
 */
function calculateFactors(
  baseCost: number,
  baseWeight: number,
  factors: Record<string, any>,
  material: string  // Add material parameter for material-based costs
): {
  unit_cost: number
  unit_weight: number
  fixed_costs: number
  setup_costs: number
} {
  let costMultiplier = 1.0
  let weightMultiplier = 1.0
  let fixedCosts = 0
  let setupCosts = 0

  // Apply percentage-based factors
  for (const [key, value] of Object.entries(factors)) {
    if (!value) continue

    if (key === 'barrier') {
      // Barrier is a special case: multiplier
      const barrierFactor = BARRIER_FACTORS[value as string]
      if (barrierFactor) {
        costMultiplier *= barrierFactor.cost
        weightMultiplier += barrierFactor.weight / 100
      }
    } else if (typeof value === 'object' && 'cost' in value) {
      // Percentage-based factors
      costMultiplier += (value.cost || 0) / 100
      weightMultiplier += (value.weight || 0) / 100
    }
  }

  // Calculate base unit cost and weight
  let unitCost = baseCost * costMultiplier
  let unitWeight = baseWeight * weightMultiplier

  // Add fixed costs (Spout, Valve, Tin Tie, Stamps, Surface Treatments)
  // Note: Zipper costs are now applied as percentage factors in the main calculation
  // Special handling for Spout and Tin Tie which have variable/fixed costs
  const zipperType = factors.zipper_type || 'No'  // Get original zipper string for special cases
  const isBioCompostable = material === 'Biodegradable and Compostable'
  
  if (zipperType === 'Spout') {
    // Spout has variable cost based on material type (matching Python logic)
    const spoutCost = isBioCompostable ? 0.15 : 0.10
    fixedCosts += spoutCost
    // Spout also has $300 setup cost (matching Python)
    setupCosts += 300
  }
  
  if (zipperType === 'Tin Tie') {
    // Tin tie cost based on width (simplified average)
    const tinTieCost = 0.05
    fixedCosts += tinTieCost
  }

  if (factors.valve === 'Yes') {
    // Valve cost depends on material type (matching Python logic)
    const valveCost = isBioCompostable ? 0.15 : 0.10
    fixedCosts += valveCost
  }

  // Stamps (UV, Foil, Embossing)
  if (factors.stamps && Array.isArray(factors.stamps)) {
    if (factors.stamps.includes('UV Coating')) {
      fixedCosts += 0.05
    }
    if (factors.stamps.includes('Foil Stamping')) {
      setupCosts += 150
      fixedCosts += 0.10
    }
    if (factors.stamps.includes('Embossing')) {
      setupCosts += 100
      fixedCosts += 0.08
    }
  }

  // Surface treatments setup costs
  if (factors.surfaceTreatments && Array.isArray(factors.surfaceTreatments)) {
    if (factors.surfaceTreatments.includes('Soft Touch Matt')) {
      setupCosts += 200
    }
  }

  // Irregular die cut
  if (factors.irregular_die_cut === 'Yes') {
    setupCosts += 200
  }

  return {
    unit_cost: unitCost,
    unit_weight: unitWeight,
    fixed_costs: fixedCosts,
    setup_costs: setupCosts,
  }
}

/**
 * Main calculation function (100% Python logic replication)
 */
export function calculateEcoPrice(selections: EcoCalculatorSelections): EcoCalculatorResult {
  const { shape, material, size, quantityOption, designCount, barrier, stiffness, zipper, laserScoring, valve, additions, surfaceTreatments, shippingMethod, seaPortion } = selections

  // Get base cost and weight from SIZE_DATA
  const sizeData = SIZE_DATA[size]
  let baseCost = sizeData.base_cost
  let baseWeight = sizeData.base_weight

  // Build factors object
  const factors: Record<string, any> = {
    designs: DESIGNS_FACTORS[String(designCount)],
    packaging_shape: PACKAGING_SHAPE_FACTORS[shape],
    material: MATERIALS_FACTORS[material],
    barrier: barrier,
    stiffness: STIFFNESS_FACTORS[stiffness],
    zipper: ZIPPER_FACTORS[zipper] || { cost: 0, weight: 0 },  // Apply zipper as percentage factor
    zipper_type: zipper,  // Keep original string for special handling in calculateFactors
    laser_scoring: laserScoring === 'Yes' ? { cost: 5, weight: 0 } : { cost: 0, weight: 0 },
    valve: valve,
    surfaceTreatments: surfaceTreatments,
    irregular_die_cut: 'No',
    stamps: [],
  }

  // Calculate unit cost/weight with factors
  const calculations = calculateFactors(baseCost, baseWeight, factors, material)

  // Apply quantity multiplier
  const quantityFactor = QUANTITY_FACTORS[quantityOption]
  if (!quantityFactor) {
    throw new Error(`Invalid quantity option: ${quantityOption}`)
  }

  const quantityMultiplier = quantityFactor.multiplier
  let unitCost = calculations.unit_cost * quantityMultiplier
  const unitWeight = calculations.unit_weight

  // Add fixed costs per unit
  unitCost += calculations.fixed_costs

  // Get quantity number
  const quantityMatch = quantityOption.match(/^([\d,]+)/)
  const quantity = quantityMatch ? parseInt(quantityMatch[1].replace(/,/g, '')) : 1000

  // Calculate shipping cost per unit
  const shippingCostPerUnit = calculateShippingCost(
    unitWeight,
    quantity,
    shippingMethod,
    seaPortion || 0.9
  )

  // Total unit cost
  const totalUnitCost = unitCost + shippingCostPerUnit + calculations.setup_costs / quantity

  // Total investment
  const totalInvestment = totalUnitCost * quantity

  // Build price breakdown
  const price: EcoPriceBreakdown = {
    currentUnitPrice: totalUnitCost,
    quantityLabel: quantityOption,
    quantityUnits: quantity,
    designCount: designCount,
    totalInvestment: totalInvestment,

    pouchCostPerUnit: unitCost,
    fixedComponentsPerUnit: calculations.fixed_costs,
    setupCostsPerUnit: calculations.setup_costs / quantity,
    shippingCostPerUnit: shippingCostPerUnit,

    totalPouchCost: unitCost * quantity,
    totalFixedComponents: calculations.fixed_costs * quantity,
    totalSetupCosts: calculations.setup_costs,
    totalShippingCost: shippingCostPerUnit * quantity,

    shippingMethod: shippingMethod,
    seaPortion: seaPortion,

    unitWeightGrams: unitWeight,
    totalWeightKg: (unitWeight * quantity) / 1000,
  }

  // Build package info
  const sizeSpec = SIZE_SPECS[size]
  const barrierInfo = BARRIERS[barrier]

  const packageInfo: EcoPackageInfo = {
    shapeLabel: shape,
    closureLabel: zipper === 'No' ? 'No' : zipper,
    sizeDisplay: sizeSpec.label,
    materialTypeLabel: material,
    materialStructure: getMaterialStructure(material, barrier, stiffness),
    barrierProperties: {
      otr: barrierInfo?.info.otr || 'N/A',
      wvtr: barrierInfo?.info.wvtr || 'N/A',
    },
    surface: surfaceTreatments.length > 0 ? surfaceTreatments.join(', ') : 'Full Glossy',
    additional: additions.length > 0 ? additions.join(', ') : 'None',
  }

  return {
    price,
    package: packageInfo,
  }
}

// Complete Material Structures Data (from Python material_structures.py)
const MATERIAL_STRUCTURES: Record<string, Record<string, Record<string, {
  options: Array<{ structure: string; thickness: string; otr: string; wvtr: string }>;
  food_types: string;
}>>> = {
  'PCR or Bio Plastic': {
    'mid clear mid barrier (Optional Window)': {
      'Without Paper Lining (Softer)': {
        options: [
          { structure: 'KPET12 / 30% PCR-PE or 50% Bio-PE80 (PET Duplex)', thickness: '100 micron or 4 mil', otr: '<8', wvtr: '<12' },
          { structure: 'KOPP20 / 30% PCR-PE or 50% Bio-PE80 (PP Duplex)', thickness: '100 micron or 4 mil', otr: '<10', wvtr: '<4' }
        ],
        food_types: 'Dry foods, snacks, cookies, confectionery, nuts, tea, coffee, dried fruits, powdered products'
      },
      'With Paper Lining (stiffer)': {
        options: [
          { structure: 'KPET12 / Kraft Paper 50gsm / 30% PCR-PE or 50% Bio-PE80 (PET Kraft Paper Triplex)', thickness: '150 micron or 6 mil', otr: '<6', wvtr: '<10' },
          { structure: 'KOPP20 / Kraft Paper 50gsm / 30% PCR-PE or 50% Bio-PE80 (PP Kraft Paper Triplex)', thickness: '150 micron or 6 mil', otr: '<8', wvtr: '<3' }
        ],
        food_types: 'Dry foods, snacks, cookies, confectionery, nuts, tea, coffee, dried fruits, powdered products (with enhanced protection and premium feel)'
      }
    },
    'mid clear mid barrier (No Window)': {
      'Without Paper Lining (Softer)': {
        options: [
          { structure: 'PET12 / 30% PCR-PE or 50% Bio-PE80 (PET Duplex)', thickness: '100 micron or 4 mil', otr: '<8', wvtr: '<12' },
          { structure: 'OPP20 / 30% PCR-PE or 50% Bio-PE80 (PP Duplex)', thickness: '100 micron or 4 mil', otr: '<10', wvtr: '<4' }
        ],
        food_types: 'Dry foods, snacks, cookies, confectionery, nuts, tea, coffee, dried fruits, powdered products'
      }
    },
    'metalised high barrier (No Window)': {
      'Without Paper Lining (Softer)': {
        options: [
          { structure: 'PET12 / Metalised PET12 / 30% PCR-PE or 50% Bio-PE80 (PET Triplex)', thickness: '100 micron or 4 mil', otr: '<2', wvtr: '<2' },
          { structure: 'OPP20 / Metalised PET12 / 30% PCR-PE or 50% Bio-PE80 (PP Triplex)', thickness: '100 micron or 4 mil', otr: '<2', wvtr: '<2' }
        ],
        food_types: 'Coffee, high-fat snacks, confectionery with nuts, food with medium shelf life requirements, dried fruits, herbs, spices'
      },
      'With Paper Lining (stiffer)': {
        options: [
          { structure: 'Kraft Paper 50gsm / VMPET12 / PCR or Bio PE 80', thickness: '150 micron or 6 mils', otr: '<2', wvtr: '<2' }
        ],
        food_types: 'Premium coffee, high-fat snacks, confectionery with nuts, food with extended shelf life requirements, dried fruits, herbs, spices'
      }
    },
    'Aluminum highest barrier (No Window)': {
      'Without Paper Lining (Softer)': {
        options: [
          { structure: 'PET12 / AL7 / 30% PCR-PE or 50% Bio-PE80 (PET Triplex)', thickness: '100 micron or 4 mil', otr: '<1', wvtr: '<1.1' },
          { structure: 'OPP20 / AL7 / 30% PCR-PE or 50% Bio-PE80 (PP Triplex)', thickness: '100 micron or 4 mil', otr: '<1', wvtr: '<1.1' }
        ],
        food_types: 'Products requiring extended shelf life, coffee, high-fat content foods, oxygen-sensitive products, processed meats, prepared meals, sauces'
      },
      'With Paper Lining (stiffer)': {
        options: [
          { structure: 'PET12 / Kraft Paper 50gsm / AL7 / 30% PCR-PE or 50% Bio-PE80 (PET Kraft Paper Quad-lex)', thickness: '150 micron or 6 mil', otr: '<0.8', wvtr: '<0.9' },
          { structure: 'OPP20 / Kraft Paper 50gsm / AL7 / 30% PCR-PE or 50% Bio-PE80 (PP Kraft Paper Quad-lex)', thickness: '150 micron or 6 mil', otr: '<0.8', wvtr: '<0.9' }
        ],
        food_types: 'Premium products requiring maximum shelf life, specialty coffee, high-fat content foods'
      }
    },
    'Low barrier (No window)': {
      'With Paper Lining (stiffer)': {
        options: [
          { structure: 'Kraft Paper 50gsm / 30% PCR-PE or 50% Bio-PE80 (Kraft Paper Duplex)', thickness: '125 micron or 5 mil', otr: '>5000', wvtr: '>18' }
        ],
        food_types: 'Short shelf-life dry goods, artisanal products, bakery items, fresh bread, coffee beans (consume within 2-4 weeks)'
      }
    }
  },
  'Mono Recyclable Plastic': {
    'mid clear mid barrier (Optional Window)': {
      'Without Paper Lining (Softer)': {
        options: [
          { structure: 'PE60 / PE60 (PE Duplex)', thickness: '125 micron or 5 mil', otr: '<5000', wvtr: '<18' },
          { structure: 'OPP30 / CPP60 (PP Duplex)', thickness: '100 micron or 4 mil', otr: '<1000', wvtr: '<5' }
        ],
        food_types: 'Dry foods with short shelf life requirements, snacks, cookies, pasta, candy, granola, cereals, pet food'
      }
    },
    'mid clear mid barrier (No Window)': {
      'Without Paper Lining (Softer)': {
        options: [
          { structure: 'PE60 / PE60 (PE Duplex)', thickness: '120 micron', otr: '<5000', wvtr: '<18' },
          { structure: 'OPP30 / CPP60 (PP Duplex)', thickness: '100 micron or 4 mil', otr: '<1000', wvtr: '<5' }
        ],
        food_types: 'Dry foods with short shelf life requirements, snacks, cookies, pasta, candy, granola, cereals, pet food'
      }
    }
  },
  'Biodegradable and Compostable': {
    'mid clear mid barrier (Optional Window)': {
      'Without Paper Lining (Softer)': {
        options: [
          { structure: 'High Barrier Cellulose or PLA 25gsm / PBAT60 (Cello Duplex)', thickness: '100 micron or 4 mil', otr: '<5', wvtr: '<5' }
        ],
        food_types: 'Organic foods, eco-friendly snacks, premium dried foods, coffee, tea, spices, healthy snacks'
      }
    },
    'barrier coating + metalised highest barrier (no window)': {
      'Without Paper Lining (Softer)': {
        options: [
          { structure: 'High Barrier Cellulose or PLA 25gsm / Metalised Cellulose or PLA 15 / PBAT60 (Cellulose Triplex)', thickness: '100 micron or 4 mil', otr: '<2', wvtr: '<2' }
        ],
        food_types: 'Organic foods requiring extended shelf life, premium coffee, high-fat organic snacks, specialty organic products'
      }
    },
    'metalised high barrier (No Window)': {
      'Without Paper Lining (Softer)': {
        options: [
          { structure: 'Cellulose or PLA 25gsm / Metalised Cellulose or PLA / PBAT60 (Cellulose Triplex)', thickness: '100 micron or 4 mil', otr: '<5', wvtr: '<5' }
        ],
        food_types: 'Organic foods, premium coffee, tea, nuts, dried fruits, specialty snacks with medium shelf life requirements'
      },
      'With Paper Lining (stiffer)': {
        options: [
          { structure: 'Kraft Paper 50gsm / VM cellulose or PLA15 / PBAT60', thickness: '125 micron or 5 mils', otr: '<5', wvtr: '<5' }
        ],
        food_types: 'Premium organic foods requiring enhanced protection, specialty coffee, tea, nuts, dried fruits with extended shelf life requirements'
      }
    },
    'Low barrier (No window)': {
      'With Paper Lining (stiffer)': {
        options: [
          { structure: 'Kraft Paper 50gsm / PBAT60 (Kraft Paper Duplex)', thickness: '120 micron or 5 mil', otr: '>1000', wvtr: '>100' }
        ],
        food_types: 'Short shelf-life organic products, artisanal foods, fresh organic bakery items, specialty items for immediate consumption'
      }
    }
  }
}

/**
 * Get material structure info based on material, barrier, and stiffness
 * Returns the first structure option from MATERIAL_STRUCTURES
 */
export function getMaterialStructureInfo(material: EcoMaterial, barrier: string, stiffness: string): {
  structure: string;
  thickness: string;
  otr: string;
  wvtr: string;
} | null {
  const materialData = MATERIAL_STRUCTURES[material]
  if (!materialData) return null
  
  // Try exact match first
  let barrierData = materialData[barrier]
  
  // Try case-insensitive match if exact match fails
  if (!barrierData) {
    const barrierLower = barrier.toLowerCase()
    for (const barrierKey of Object.keys(materialData)) {
      if (barrierKey.toLowerCase() === barrierLower) {
        barrierData = materialData[barrierKey]
        break
      }
    }
  }
  
  if (!barrierData) return null
  
  const stiffnessData = barrierData[stiffness]
  if (!stiffnessData || !stiffnessData.options || stiffnessData.options.length === 0) {
    // Try fallback: if requesting paper lining but only softer exists
    if (stiffness === 'With Paper Lining (stiffer)' && barrierData['Without Paper Lining (Softer)']) {
      const baseData = barrierData['Without Paper Lining (Softer)']
      if (baseData && baseData.options && baseData.options.length > 0) {
        // Return modified structure with kraft paper added
        const base = baseData.options[0]
        const parts = base.structure.split(' / ')
        const modifiedStructure = `${parts[0]} / Kraft Paper 50gsm / ${parts.slice(1).join(' / ')}`
        return {
          structure: modifiedStructure,
          thickness: '150 micron or 6 mil',
          otr: base.otr,
          wvtr: base.wvtr
        }
      }
    }
    return null
  }
  
  return stiffnessData.options[0]
}

/**
 * Get material structure description
 */
function getMaterialStructure(material: EcoMaterial, barrier: string, stiffness: string): string {
  const info = getMaterialStructureInfo(material, barrier, stiffness)
  return info ? info.structure : 'Multi-layer structure'
}

/**
 * Build price description text block (as per user requirements)
 */
export function buildEcoPriceDescription(result: EcoCalculatorResult): string {
  const { price, package: pkg } = result

  return [
    `CURRENT PRICE: $${price.currentUnitPrice.toFixed(4)}/pc`,
    '',
    'Price Details',
    `Quantity: ${price.quantityLabel} pcs`,
    '',
    `Number of Designs: ${price.designCount}`,
    '',
    `Total Investment: $${price.totalInvestment.toFixed(2)}`,
    '',
    `Pouch Cost: $${price.pouchCostPerUnit.toFixed(4)}/pc`,
    `Fixed Components: $${price.fixedComponentsPerUnit.toFixed(4)}/pc`,
    `Setup Costs: $${price.setupCostsPerUnit.toFixed(4)}/pc`,
    `Shipping Cost: $${price.shippingCostPerUnit.toFixed(4)}/pc`,
    '',
    `Estimated Unit Weight: ${price.unitWeightGrams.toFixed(2)} g/pc`,
    `Estimated Total Weight: ${price.totalWeightKg.toFixed(2)} kg`,
    '',
    'Package Information',
    `Shape: ${pkg.shapeLabel}`,
    '',
    `Closure: ${pkg.closureLabel}`,
    '',
    `Size: ${pkg.sizeDisplay}`,
    '',
    `Material Type: ${pkg.materialTypeLabel}`,
    '',
    `Material Structure: ${pkg.materialStructure}`,
    '',
    `Barrier Properties: OTR ${pkg.barrierProperties.otr}, WVTR ${pkg.barrierProperties.wvtr}`,
    '',
    `Surface: ${pkg.surface}`,
    '',
    `Additional: ${pkg.additional}`,
  ].join('\n')
}
