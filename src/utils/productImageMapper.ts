/**
 * Product Image Mapper
 * Maps product attributes (shape, material, closure, surface) to the correct product image
 */

export type ShapeType = 
  | '3 Side Seal Pouch'
  | 'Center Seal Pouch'
  | 'Stand Up Pouch / Doypack'
  | 'Box Bottom Pouch'
  | 'Flat Squared Bottom Pouch'
  | 'Quad Seal Pouch'
  | 'Side Gusset Pouch'

export type ClosureType = 'No' | 'Zipper' | 'Spout'
export type SurfaceType = 'Glossy' | 'Matt'
export type MaterialType = 
  | 'PCR or Bio Plastic'
  | 'Mono Recyclable Plastic'
  | 'Biodegradable and Compostable'

interface ImageMapperOptions {
  shape: ShapeType
  closure?: ClosureType
  surface?: SurfaceType
  material?: MaterialType
}

/**
 * Image mapping based on shape + closure + surface
 * Using local images from public/imgs/store/pouch shape/
 */
const IMAGE_BASE_URL = '/imgs/store/pouch shape/'

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
  'Zipper': 'zipper',
  'Spout': 'spout',
}

const surfaceMap: Record<SurfaceType, string> = {
  'Glossy': 'glossy',
  'Matt': 'matt',
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
  } = options

  const shapeName = shapeNameMap[shape]

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
