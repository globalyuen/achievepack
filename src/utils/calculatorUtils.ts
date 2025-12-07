/**
 * Calculator Utility Functions
 * Handles all calculations for the savings calculator
 */

export type PackageType = 'rigid-plastic' | 'glass' | 'metal' | 'cardboard' | 'flexible' | 'unknown';
export type ShippingFrequency = 'daily' | 'weekly' | 'monthly';

export interface PackageSpecs {
    type: PackageType;
    dimensions: {
        length: number | null;
        width: number | null;
        height: number | null;
    };
    weight: number | null; // grams
    material: string | null;
}

export interface UsageDetails {
    unitsPerMonth: number;
    shippingDistance: number | null; // km
    shippingFrequency: ShippingFrequency;
    currentPackagingCost: number | null; // $ per unit
    currentShippingCost: number | null; // $ per unit
}

export interface CalculatorResults {
    costSavings: {
        materialSavings: number;
        shippingSavings: number;
        storageSavings: number;
        totalAnnualSavings: number;
    };
    environmentalImpact: {
        co2Reduction: number; // kg/year
        plasticReduction: number; // kg/year
        waterSavings: number; // liters/year
        treesEquivalent: number;
    };
    operationalBenefits: {
        storageSpaceSaved: number; // percentage
        shippingEfficiency: number; // percentage
        handlingTimeReduction: number; // percentage
    };
}

// Default values when user selects "not sure"
const DEFAULTS = {
    rigidPlasticCost: 0.50, // $ per unit
    glassCost: 0.75,
    metalCost: 0.60,
    cardboardCost: 0.40,
    flexibleCost: 0.30,

    rigidPlasticWeight: 50, // grams
    glassWeight: 150,
    metalWeight: 80,
    cardboardWeight: 40,
    flexibleWeight: 15,

    shippingCostPerKg: 0.15, // $ per kg per 100km
    storageCostPerM3: 5, // $ per m³ per month

    // Environmental constants
    co2PerGramPlastic: 0.003, // kg CO2 per gram
    waterPerGramPlastic: 0.005, // liters per gram
    treesPerTonCO2: 50, // trees needed to offset 1 ton CO2
};

/**
 * Calculate volume in cubic meters
 */
function calculateVolume(length: number | null, width: number | null, height: number | null): number {
    if (!length || !width || !height) return 0.0001; // 100 cm³ default
    return (length * width * height) / 1000000000; // mm³ to m³
}

/**
 * Get default weight based on package type
 */
function getDefaultWeight(type: PackageType): number {
    switch (type) {
        case 'rigid-plastic': return DEFAULTS.rigidPlasticWeight;
        case 'glass': return DEFAULTS.glassWeight;
        case 'metal': return DEFAULTS.metalWeight;
        case 'cardboard': return DEFAULTS.cardboardWeight;
        case 'flexible': return DEFAULTS.flexibleWeight;
        default: return DEFAULTS.rigidPlasticWeight;
    }
}

/**
 * Get default packaging cost based on type
 */
function getDefaultPackagingCost(type: PackageType): number {
    switch (type) {
        case 'rigid-plastic': return DEFAULTS.rigidPlasticCost;
        case 'glass': return DEFAULTS.glassCost;
        case 'metal': return DEFAULTS.metalCost;
        case 'cardboard': return DEFAULTS.cardboardCost;
        case 'flexible': return DEFAULTS.flexibleCost;
        default: return DEFAULTS.rigidPlasticCost;
    }
}

/**
 * Calculate material cost savings
 */
function calculateMaterialSavings(
    packageSpecs: PackageSpecs,
    usage: UsageDetails
): number {
    const currentCost = usage.currentPackagingCost || getDefaultPackagingCost(packageSpecs.type);
    const flexibleCost = DEFAULTS.flexibleCost;

    // If already using flexible, no savings
    if (packageSpecs.type === 'flexible') return 0;

    const annualUnits = usage.unitsPerMonth * 12;
    const savingsPerUnit = currentCost - flexibleCost;

    return Math.max(0, savingsPerUnit * annualUnits);
}

/**
 * Calculate shipping cost savings
 */
function calculateShippingSavings(
    packageSpecs: PackageSpecs,
    usage: UsageDetails
): number {
    const currentWeight = packageSpecs.weight || getDefaultWeight(packageSpecs.type);
    const flexibleWeight = DEFAULTS.flexibleWeight;

    // 70% weight reduction when switching to flexible
    const weightReduction = currentWeight * 0.70;
    const newWeight = currentWeight - weightReduction;

    // Calculate shipping cost if not provided
    const distance = usage.shippingDistance || 500; // default 500km
    const currentShippingCost = usage.currentShippingCost ||
        (currentWeight / 1000) * DEFAULTS.shippingCostPerKg * (distance / 100);

    // 22% shipping cost reduction (from website data)
    const shippingReduction = 0.22;
    const newShippingCost = currentShippingCost * (1 - shippingReduction);

    const annualUnits = usage.unitsPerMonth * 12;
    const savingsPerUnit = currentShippingCost - newShippingCost;

    return Math.max(0, savingsPerUnit * annualUnits);
}

/**
 * Calculate storage cost savings
 */
function calculateStorageSavings(
    packageSpecs: PackageSpecs,
    usage: UsageDetails
): number {
    const { length, width, height } = packageSpecs.dimensions;
    const currentVolume = calculateVolume(length, width, height);

    // 70% volume reduction when switching to flexible
    const volumeReduction = 0.70;
    const flexibleVolume = currentVolume * (1 - volumeReduction);
    const volumeSaved = currentVolume - flexibleVolume;

    const annualUnits = usage.unitsPerMonth * 12;
    const totalVolumeSaved = volumeSaved * annualUnits;

    // Storage cost per cubic meter per month
    const annualStorageSavings = totalVolumeSaved * DEFAULTS.storageCostPerM3 * 12;

    return Math.max(0, annualStorageSavings);
}

/**
 * Calculate environmental impact
 */
function calculateEnvironmentalImpact(
    packageSpecs: PackageSpecs,
    usage: UsageDetails
): {
    co2Reduction: number;
    plasticReduction: number;
    waterSavings: number;
    treesEquivalent: number;
} {
    const currentWeight = packageSpecs.weight || getDefaultWeight(packageSpecs.type);
    const flexibleWeight = DEFAULTS.flexibleWeight;

    // 70% reduction in materials
    const materialReduction = currentWeight * 0.70;

    const annualUnits = usage.unitsPerMonth * 12;

    // CO2 reduction (70% reduction as per website)
    const currentCO2 = currentWeight * DEFAULTS.co2PerGramPlastic;
    const flexibleCO2 = flexibleWeight * DEFAULTS.co2PerGramPlastic;
    const co2ReductionPerUnit = currentCO2 - flexibleCO2;
    const co2Reduction = co2ReductionPerUnit * annualUnits;

    // Plastic reduction (in kg)
    const plasticReduction = (materialReduction * annualUnits) / 1000;

    // Water savings (60% reduction)
    const waterReduction = currentWeight * DEFAULTS.waterPerGramPlastic * 0.60;
    const waterSavings = waterReduction * annualUnits;

    // Trees equivalent (trees needed to offset CO2)
    const treesEquivalent = (co2Reduction / 1000) * DEFAULTS.treesPerTonCO2;

    return {
        co2Reduction: Math.max(0, co2Reduction),
        plasticReduction: Math.max(0, plasticReduction),
        waterSavings: Math.max(0, waterSavings),
        treesEquivalent: Math.max(0, Math.round(treesEquivalent)),
    };
}

/**
 * Calculate operational benefits
 */
function calculateOperationalBenefits(): {
    storageSpaceSaved: number;
    shippingEfficiency: number;
    handlingTimeReduction: number;
} {
    // Based on website data and industry standards
    return {
        storageSpaceSaved: 70, // 70% space savings
        shippingEfficiency: 22, // 22% shipping efficiency improvement
        handlingTimeReduction: 35, // 35% handling time reduction (estimated)
    };
}

/**
 * Main calculation function
 */
export function calculateSavings(
    packageSpecs: PackageSpecs,
    usage: UsageDetails
): CalculatorResults {
    const materialSavings = calculateMaterialSavings(packageSpecs, usage);
    const shippingSavings = calculateShippingSavings(packageSpecs, usage);
    const storageSavings = calculateStorageSavings(packageSpecs, usage);

    const environmentalImpact = calculateEnvironmentalImpact(packageSpecs, usage);
    const operationalBenefits = calculateOperationalBenefits();

    return {
        costSavings: {
            materialSavings,
            shippingSavings,
            storageSavings,
            totalAnnualSavings: materialSavings + shippingSavings + storageSavings,
        },
        environmentalImpact,
        operationalBenefits,
    };
}

/**
 * Format currency
 */
export function formatCurrency(amount: number, locale: string = 'en-US'): string {
    return new Intl.NumberFormat(locale, {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
    }).format(amount);
}

/**
 * Format number with commas
 */
export function formatNumber(num: number, locale: string = 'en-US'): string {
    return new Intl.NumberFormat(locale, {
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
    }).format(num);
}

/**
 * Format percentage
 */
export function formatPercentage(num: number): string {
    return `${num}%`;
}
