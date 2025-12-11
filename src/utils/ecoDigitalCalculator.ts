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

/**
 * Get material structure description (simplified)
 */
function getMaterialStructure(material: EcoMaterial, barrier: string, stiffness: string): string {
  // Simplified material structure mapping
  const structures: Record<string, string> = {
    'PCR or Bio Plastic_mid clear mid barrier (Optional Window)_Without Paper Lining (Softer)': 'KPET12 / 30% PCR-PE or 50% Bio-PE80 (PET Duplex)',
    'Mono Recyclable Plastic_metalised high barrier (No Window)_With Paper Lining (stiffer)': 'MPE12 / Paper / MPE80 (Mono PE)',
    'Biodegradable and Compostable_Aluminum highest barrier (No Window)_With Paper Lining (stiffer)': 'Kraft Paper / PLA / Aluminum Foil / PLA',
  }

  const key = `${material}_${barrier}_${stiffness}`
  return structures[key] || 'Multi-layer structure'
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
