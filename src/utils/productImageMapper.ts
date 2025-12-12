/**
 * Product Image Mapper
 * Maps product attributes (shape, material, closure, surface, size) to the correct product image
 */

export type ShapeType = 
  | '3 Side Seal Pouch'
  | 'Center Seal Pouch'
  | 'Stand Up Pouch / Doypack'
  | 'Box Bottom Pouch'
  | 'Flat Squared Bottom Pouch'
  | 'Quad Seal Pouch'
  | 'Side Gusset Pouch'

export type ClosureType = 'No' | 'Regular Zipper' | 'One-Sided Zipper' | 'Child Resistant Zipper' | 'Slider' | 'Tin Tie' | 'Spout'
export type SurfaceType = 'Glossy' | 'Matt' | 'Metallic' | 'Soft Touch' | 'Emboss' | 'Stamp Foil'
export type AdditionalType = 'Valve' | 'Laser Scoring' | 'Adhesive Tape' | 'Hang Hole'
export type MaterialType = 
  | 'PCR or Bio Plastic'
  | 'Mono Recyclable Plastic'
  | 'Biodegradable and Compostable'

// Eco Digital size options
export type EcoSizeType = 'XXXS' | 'XXS' | 'XS' | 'S' | 'M' | 'L' | 'XL' | 'XXL'

interface ImageMapperOptions {
  shape: ShapeType
  closure?: ClosureType
  surface?: SurfaceType
  material?: MaterialType
  size?: EcoSizeType
}

/**
 * Image mapping based on shape + closure + surface
 * Using local images from public/imgs/store/pouch shape/
 */
const IMAGE_BASE_URL = '/imgs/store/pouch shape/'
const SIZE_IMAGE_BASE_URL = '/imgs/store/size/stand-up/'

const shapeNameMap: Record<ShapeType, string> = {
  '3 Side Seal Pouch': '3-side',
  'Center Seal Pouch': 'center',
  'Stand Up Pouch / Doypack': 'stand-up',
  'Box Bottom Pouch': 'box',
  'Flat Squared Bottom Pouch': 'flat-bottom',
  'Quad Seal Pouch': 'quad-seal',
  'Side Gusset Pouch': 'side -seal',
}

const closureMap: Record<ClosureType, string> = {
  'No': 'no_zipper',
  'Regular Zipper': 'regular_zipper',
  'One-Sided Zipper': 'one_sided_zipper',
  'Child Resistant Zipper': 'child_resistant_zipper',
  'Slider': 'slider',
  'Tin Tie': 'tin_tie',
  'Spout': 'spout',
}

const surfaceMap: Record<SurfaceType, string> = {
  'Glossy': 'glossy',
  'Matt': 'matt',
  'Metallic': 'metalic',  // File name is 'metalic.webp'
  'Soft Touch': 'soft-touch',
  'Emboss': 'emboss',
  'Stamp Foil': 'stamp-foil',
}

/**
 * Size image mapping for Stand Up Pouch
 * Maps Eco Digital size options (XXXS-XXL) to actual size dimension images
 * File naming: {size}.webp (e.g., xxxs.webp, xxs.webp, xs.webp, s.webp, l.webp, xl.webp, xxl.webp)
 */
const standUpSizeImageMap: Record<EcoSizeType, string> = {
  'XXXS': 'xxxs.webp',
  'XXS': 'xxs.webp',
  'XS': 'xs.webp',
  'S': 's.webp',
  'M': 'l.webp',  // Using L file for M size (no separate M file)
  'L': 'l.webp',
  'XL': 'xl.webp',
  'XXL': 'xxl.webp',
}

/**
 * Get product image URL based on attributes
 */
export function getProductImage(options: ImageMapperOptions): string {
  const {
    shape,
    closure = 'No',
    surface = 'Matt',
    material,
    size,
  } = options

  const shapeName = shapeNameMap[shape]

  // If size is provided and shape is Stand Up Pouch, return size-specific image
  if (size && shape === 'Stand Up Pouch / Doypack') {
    return getSizeImage(size)
  }

  // Map material types to specific images
  if (material === 'Biodegradable and Compostable') {
    return '/imgs/store/eco-material/compostable.webp'
  }
  
  if (material === 'PCR or Bio Plastic') {
    return '/imgs/store/eco-material/pcr-or-biope.webp'
  }
  
  if (material === 'Mono Recyclable Plastic') {
    return '/imgs/store/eco-material/recycle.webp'
  }

  // Use local shape images for products without specific material
  // Format: {shape}.webp
  const imageFilename = `${shapeName}.webp`

  return `${IMAGE_BASE_URL}${imageFilename}`
}

/**
 * Get size-specific image for Stand Up Pouch
 */
export function getSizeImage(size: EcoSizeType): string {
  const imageFilename = standUpSizeImageMap[size]
  if (!imageFilename) {
    // Fallback to default stand up image
    return `${IMAGE_BASE_URL}stand-up.webp`
  }
  return `${SIZE_IMAGE_BASE_URL}${imageFilename}`
}

/**
 * Get surface treatment image
 * Returns image from /imgs/store/surface/ directory
 */
export function getSurfaceImage(surface: SurfaceType): string {
  const surfaceFileName = surfaceMap[surface]
  return `/imgs/store/surface/${surfaceFileName}.webp`
}

/**
 * Additional features image mapping
 */
const additionalMap: Record<AdditionalType, string> = {
  'Valve': 'valve',
  'Laser Scoring': 'laser-tear',
  'Adhesive Tape': 'ahesive-tap',  // File name as-is
  'Hang Hole': 'hang-hole',
}

/**
 * Get additional feature image
 * Returns image from /imgs/store/additional/ directory
 */
export function getAdditionalImage(additional: AdditionalType): string {
  const additionalFileName = additionalMap[additional]
  return `/imgs/store/additional/${additionalFileName}.webp`
}

/**
 * Get all available size images for Stand Up Pouch
 */
export function getAllSizeImages(): Record<EcoSizeType, string> {
  const sizeImages: Record<EcoSizeType, string> = {} as Record<EcoSizeType, string>
  
  Object.keys(standUpSizeImageMap).forEach((size) => {
    sizeImages[size as EcoSizeType] = getSizeImage(size as EcoSizeType)
  })
  
  return sizeImages
}

/**
 * Get multiple product images for gallery
 */
export function getProductImages(options: ImageMapperOptions): string[] {
  const mainImage = getProductImage(options)
  
  // For now, return just the main image
  // In future, can add more variants (different angles, etc.)
  return [mainImage]
}

/**
 * Preload image to check if it exists, fallback to default if not
 */
export function getProductImageWithFallback(options: ImageMapperOptions): Promise<string> {
  return new Promise((resolve) => {
    const imageUrl = getProductImage(options)
    const img = new Image()
    
    img.onload = () => resolve(imageUrl)
    img.onerror = () => {
      // Fallback to stand up pouch
      console.warn(`Image not found: ${imageUrl}, using fallback`)
      resolve(`${IMAGE_BASE_URL}stand-up.webp`)
    }
    
    img.src = imageUrl
  })
}
