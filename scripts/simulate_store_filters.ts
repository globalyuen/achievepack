import { FEATURED_PRODUCTS, type StoreProduct } from '../src/store/productData';

// Helper function to get product shape (copied from StorePage.tsx)
const getProductShape = (product: StoreProduct): string | null => {
  if ('shape' in product) {
    const shape = product.shape
    if (!shape) return null
    
    const lowerShape = shape.toLowerCase()
    
    // 1. Rollstock
    if (lowerShape.includes('rollstock') || lowerShape.includes('film')) {
      return 'Rollstock'
    }
    
    // 2. 3 Side Seal
    if (
      lowerShape.includes('3-side-seal') || 
      lowerShape.includes('3 side seal') || 
      lowerShape === 'flat-wire-cut zipper bag' ||
      lowerShape.includes('three side') ||
      lowerShape.includes('sachet')
    ) {
      return '3 Side Seal Pouch'
    }
    
    // 3. Center Seal
    if (
      lowerShape.includes('center seal') || 
      lowerShape.includes('pillow') || 
      lowerShape.includes('tea filter bag')
    ) {
      return 'Center Seal Pouch'
    }
    
    // 4. Stand Up Pouch
    if (
      lowerShape.includes('stand up') || 
      lowerShape.includes('stand-up') || 
      lowerShape.includes('doypack') || 
      lowerShape.includes('standup')
    ) {
      return 'Stand Up Pouch / Doypack'
    }
    
    // 5. Flat Bottom
    if (
      lowerShape.includes('flat squared bottom') || 
      lowerShape.includes('flat bottom') || 
      lowerShape.includes('eight-side seal') ||
      lowerShape.includes('box pouch')
    ) {
      return 'Flat Squared Bottom Pouch'
    }
    
    // 6. Side Gusset
    if (lowerShape.includes('side gusset') || lowerShape.includes('gusset')) {
      return 'Side Gusset Pouch'
    }
    
    // 7. Quad Seal
    if (lowerShape.includes('quad seal') || lowerShape.includes('quad-seal')) {
      return 'Quad Seal Pouch'
    }
    
    // 8. Box Bottom
    if (lowerShape.includes('box bottom')) {
      return 'Box Bottom Pouch'
    }
    
    // 9. Spouted Stand Up
    if (lowerShape.includes('spout') || lowerShape.includes('spouted')) {
      return 'Spouted Stand Up Pouch'
    }
    
    // 10. Mailer Bag
    if (lowerShape.includes('mailer')) {
      return 'Mailer Bag'
    }
    
    // 11. Box
    if (
      lowerShape.includes('box') || 
      lowerShape.includes('tuck') || 
      lowerShape.includes('corrugated')
    ) {
      return 'Corrugated Box'
    }
    
    // 12. Label & Sticker
    if (lowerShape.includes('label') || lowerShape.includes('sticker')) {
      return 'Label & Sticker'
    }
    
    return shape
  }
  return null
}

const getProductSubCategory = (product: StoreProduct) => {
  if ('subCategory' in product && product.subCategory) {
    return product.subCategory;
  }
  if (product.category === 'sample') return 'samples'
  if (product.category === 'conventional-digital') return 'conventional-digital'
  if (product.category === 'eco-stock') {
    if (product.id === 'eco-custom-label' || product.id === 'eco-pla-sealing-sticker') return 'eco-stock-plain'
    if (product.id.includes('-custom')) return 'eco-stock-custom-print'
    return 'eco-stock-plain'
  }
  if (product.category === 'conventional-stock') return 'conventional-stock-plain'
  if (product.category === 'eco-digital') return 'eco-digital'
  if (product.category === 'boxes') return 'boxes'
  return 'conventional-digital'
}

const simulate = (selectedCategory: string, selectedShape: string) => {
  console.log(`\nSimulating selectedCategory="${selectedCategory}", selectedShape="${selectedShape}"`);
  
  const filtered = FEATURED_PRODUCTS.filter(product => {
    const productSubCategory = getProductSubCategory(product);
    
    let matchesCategory = false;
    if (selectedCategory === 'all') {
      matchesCategory = true;
    } else if (selectedCategory === 'samples' || selectedCategory === 'sample') {
      matchesCategory = product.category === 'sample';
    } else if (selectedCategory === 'eco-stock-plain') {
      matchesCategory = productSubCategory === 'eco-stock-plain';
    } else if (selectedCategory === 'eco-stock-custom-print') {
      matchesCategory = productSubCategory === 'eco-stock-custom-print';
    } else {
      matchesCategory = product.category === selectedCategory || productSubCategory === selectedCategory;
    }
    
    const productShape = getProductShape(product);
    const matchesShape = selectedShape === 'all' || productShape === selectedShape;
    
    return matchesCategory && matchesShape;
  });
  
  console.log(`Filtered list has ${filtered.length} products`);
  
  const p1 = filtered.find(p => p.id === 'media__1780570697340.jpg');
  const p2 = filtered.find(p => p.id === 'transparent-colorful-cellophane-candy-wrapping-paper');
  
  console.log("  Rollstock found:", p1 ? "YES" : "NO");
  console.log("  Cellophane found:", p2 ? "YES" : "NO");
}

simulate('all', 'all');
simulate('eco-digital', 'all');
simulate('all', 'Rollstock');
simulate('eco-stock-plain', 'all');
