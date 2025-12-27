import type { VercelRequest, VercelResponse } from '@vercel/node'

// ============ PAGE CONTEXT TYPE ============
interface PageContext {
  path: string
  pageType: 'home' | 'store' | 'product' | 'materials' | 'industry' | 'packaging' | 'spec' | 'other'
  productId?: string
  productName?: string
  productCategory?: string
  productDescription?: string
  pageName?: string
}

interface RelatedPage {
  title: string
  url: string
  description: string
}

// ============ RELATED PAGES DATABASE ============
const RELATED_PAGES_MAP: Record<string, RelatedPage[]> = {
  // Coffee related
  'coffee': [
    { title: 'Coffee & Tea Packaging', url: '/industry/coffee-tea', description: 'Best solutions for roasters' },
    { title: 'Flat Bottom Bags', url: '/packaging/flat-bottom-bags', description: 'Premium coffee presentation' },
    { title: 'Side Gusset Bags', url: '/packaging/side-gusset-bags', description: 'Classic coffee bag style' },
  ],
  // Eco/Sustainable
  'eco': [
    { title: 'Compostable Materials', url: '/materials/compostable', description: 'Certified compostable options' },
    { title: 'Recyclable Materials', url: '/materials/recyclable', description: 'PE recyclable pouches' },
    { title: 'PCR & Bio-based', url: '/materials/pcr-bio', description: 'Recycled content options' },
  ],
  // Pet food
  'pet': [
    { title: 'Pet Food Packaging', url: '/industry/pet-food', description: 'Durable pet food solutions' },
    { title: 'Stand Up Pouches', url: '/packaging/stand-up-pouches', description: 'Great shelf presence' },
    { title: 'Quad Seal Bags', url: '/packaging/quad-seal-bags', description: 'Heavy duty options' },
  ],
  // Snacks
  'snacks': [
    { title: 'Snacks Packaging', url: '/industry/snacks', description: 'Chips, nuts, dried fruits' },
    { title: 'Stand Up Pouches', url: '/packaging/stand-up-pouches', description: 'Best seller for snacks' },
    { title: '3 Side Seal Pouches', url: '/packaging/flat-pouches', description: 'Cost-effective option' },
  ],
  // Samples
  'sample': [
    { title: 'Product Store', url: '/store', description: 'Browse all sample packs' },
    { title: 'Sizing Pack', url: '/store/product/sample-sizing-pack', description: 'Test different sizes' },
    { title: 'Eco Samples', url: '/store/product/sample-assorted-eco', description: 'Try eco materials' },
  ],
  // Pricing/MOQ
  'pricing': [
    { title: 'Product Store', url: '/store', description: 'See all prices' },
    { title: 'Sample Packs', url: '/store?category=sample', description: 'Start with samples' },
    { title: 'Eco Digital', url: '/store?category=eco-digital', description: 'Eco-friendly options' },
  ],
  // General store
  'store': [
    { title: 'Stand Up Pouches', url: '/packaging/stand-up-pouches', description: 'Most popular shape' },
    { title: 'Compostable Materials', url: '/materials/compostable', description: 'Eco-friendly options' },
    { title: 'Coffee Packaging', url: '/industry/coffee-tea', description: 'For roasters & cafes' },
  ],
  // Materials
  'materials': [
    { title: 'Material Comparison', url: '/materials/compostable', description: 'Compare eco options' },
    { title: 'Kraft Paper', url: '/materials/kraft-paper', description: 'Natural look materials' },
    { title: 'Product Store', url: '/store', description: 'See products by material' },
  ],
  // Custom Boxes
  'boxes': [
    { title: 'Corrugated Mailer Boxes', url: '/store/product/box-corrugated-custom', description: 'FSC certified rigid boxes' },
    { title: 'Tuck Boxes', url: '/store/product/box-tuck-custom', description: 'Gold foil & embossing' },
    { title: 'Product Store', url: '/store?category=boxes', description: 'Browse all boxes' },
  ],
  // Consultation/Meeting/Book
  'consultation': [
    { title: '📅 Book FREE Consultation', url: 'https://calendly.com/30-min-free-packaging-consultancy', description: '30-min video call with our team' },
    { title: 'Product Store', url: '/store', description: 'Browse products first' },
    { title: 'Sample Packs', url: '/store?category=sample', description: 'Try before full order' },
  ],
  // Default
  'default': [
    { title: 'Product Store', url: '/store', description: 'Browse all products' },
    { title: 'Sample Packs', url: '/store?category=sample', description: 'Try before you buy' },
    { title: '📅 FREE Consultation', url: 'https://calendly.com/30-min-free-packaging-consultancy', description: 'Book a call with us' },
  ],
}

// ============ PRODUCT CATALOG ============
// Synced with productData.ts - Use correct product IDs
const PRODUCT_CATALOG = [
  // Sample Products (from productData.ts)
  { id: 'sample-sizing-pack', name: 'Sizing Pack', category: 'sample', basePrice: 40, moq: 1, description: '7 different pouch sizes to test before ordering. Perfect for finding the right fit.', materials: ['Mono PE'], bestFor: ['testing', 'sizing'] },
  { id: 'sample-assorted-eco', name: 'Assorted Eco Pouches Sample', category: 'sample', basePrice: 40, moq: 1, description: 'Explore our eco-friendly materials: PCR, Bio-based, Recyclable, Compostable pouches.', materials: ['PCR', 'BioPE', 'Mono PE', 'Compostable'], bestFor: ['eco', 'sustainable'] },
  { id: 'sample-top-film', name: 'Custom Digital Printed Top Film', category: 'sample', basePrice: 60, moq: 1, description: 'Sample of custom printed top sealing film for trays.', materials: ['PET/PE'], bestFor: ['lidding', 'trays'] },
  { id: 'sample-hand-sealed', name: 'Custom Digital Printed Hand Sealed Pouches', category: 'sample', basePrice: 60, moq: 1, description: 'Sample of custom printed heat-sealed pouches.', materials: ['Various'], bestFor: ['sachets', 'samples'] },
  
  // Conventional Digital Products (correct IDs from productData.ts)
  { id: 'conven-3ss-clear-xzip', name: '3 Side Seal Pouch – Clear', category: 'conventional-digital', basePrice: 90, moq: 100, description: 'Clear flat pouch for samples and sachets. Low barrier.', shape: '3-side-seal', turnaround: '2-3 weeks', barrier: 'low', bestFor: ['samples', 'sachets', 'dry goods'] },
  { id: 'conven-3ss-clear-zip', name: '3 Side Seal Pouch – Clear, With Zipper', category: 'conventional-digital', basePrice: 100, moq: 100, description: 'Clear flat resealable pouch. Low barrier.', shape: '3-side-seal', turnaround: '2-3 weeks', barrier: 'low', bestFor: ['samples', 'sachets'] },
  { id: 'conven-3ss-met-xzip', name: '3 Side Seal Pouch – Metalised', category: 'conventional-digital', basePrice: 95, moq: 100, description: 'Metalised flat pouch with high barrier for moisture/oxygen sensitive products.', shape: '3-side-seal', turnaround: '2-3 weeks', barrier: 'high', bestFor: ['coffee', 'tea', 'snacks'] },
  { id: 'conven-3ss-met-zip', name: '3 Side Seal Pouch – Metalised, With Zipper', category: 'conventional-digital', basePrice: 105, moq: 100, description: 'Metalised resealable flat pouch with high barrier.', shape: '3-side-seal', turnaround: '2-3 weeks', barrier: 'high', bestFor: ['coffee', 'tea', 'snacks'] },
  { id: 'conven-sup-clear-xzip', name: 'Stand Up Pouch – Clear', category: 'conventional-digital', basePrice: 90, moq: 100, description: 'Clear stand-up pouch with excellent shelf presence.', shape: 'stand-up', turnaround: '2-3 weeks', barrier: 'low', bestFor: ['snacks', 'candy', 'dry goods'] },
  { id: 'conven-sup-clear-zip', name: 'Stand Up Pouch – Clear, With Zipper', category: 'conventional-digital', basePrice: 100, moq: 100, description: 'Resealable clear stand-up pouch. Best seller for snacks.', shape: 'stand-up', turnaround: '2-3 weeks', barrier: 'low', bestFor: ['snacks', 'candy', 'granola'] },
  { id: 'conven-sup-met-xzip', name: 'Stand Up Pouch – Metalised', category: 'conventional-digital', basePrice: 95, moq: 100, description: 'Metalised stand-up pouch with high barrier protection.', shape: 'stand-up', turnaround: '2-3 weeks', barrier: 'high', bestFor: ['coffee', 'tea', 'nuts'] },
  { id: 'conven-sup-met-zip', name: 'Stand Up Pouch – Metalised, With Zipper', category: 'conventional-digital', basePrice: 100, moq: 100, description: 'Premium metalised stand-up pouch with zipper. HIGH BARRIER - Best for coffee, tea, and moisture-sensitive products.', shape: 'stand-up', turnaround: '2-3 weeks', barrier: 'high', bestFor: ['coffee', 'tea', 'snacks', 'nuts', 'dried fruit'] },
  
  // Eco Digital Products (correct IDs from productData.ts)
  { id: 'eco-3side', name: 'Eco Digital – 3 Side Seal Pouch', category: 'eco-digital', basePrice: 100, moq: 1000, description: 'Eco-friendly 3-side seal flat pouch. Available in PCR, BioPE, Mono PE, Compostable.', materials: ['Mono PE', 'PCR', 'BioPE', 'Compostable'], turnaround: '3-4 weeks', bestFor: ['samples', 'sachets'] },
  { id: 'eco-centerseal', name: 'Eco Digital – Center Seal Pouch', category: 'eco-digital', basePrice: 110, moq: 1000, description: 'Traditional pillow-style eco pouch. Center seal design.', materials: ['Mono PE', 'PCR', 'BioPE'], turnaround: '3-4 weeks', bestFor: ['snacks', 'candy'] },
  { id: 'eco-standup', name: 'Eco Digital – Stand Up Pouch', category: 'eco-digital', basePrice: 120, moq: 1000, description: 'Premium eco stand-up pouch. Most popular eco option for retail.', materials: ['Mono PE', 'PCR', 'BioPE', 'Compostable'], turnaround: '3-4 weeks', bestFor: ['snacks', 'granola', 'pet treats'] },
  { id: 'eco-boxbottom', name: 'Eco Digital – Box Bottom Pouch', category: 'eco-digital', basePrice: 160, moq: 1000, description: 'Square bottom eco pouch with premium shelf presence. Great for coffee.', materials: ['Kraft Paper', 'Mono PE', 'Compostable'], turnaround: '3-4 weeks', barrier: 'high', bestFor: ['coffee', 'tea', 'premium products'] },
  { id: 'eco-flatbottom', name: 'Eco Digital – Flat Bottom Pouch', category: 'eco-digital', basePrice: 170, moq: 1000, description: 'Eco flat bottom bag with excellent shelf stability. Premium look for coffee and tea.', materials: ['Kraft Paper', 'Mono PE', 'Compostable'], turnaround: '3-4 weeks', barrier: 'high', bestFor: ['coffee', 'tea', 'granola', 'premium snacks'] },
  { id: 'eco-sidegusset', name: 'Eco Digital – Side Gusset Pouch', category: 'eco-digital', basePrice: 150, moq: 1000, description: 'Classic coffee bag style with eco materials. Traditional look.', materials: ['Kraft Paper', 'Mono PE', 'Compostable'], turnaround: '3-4 weeks', barrier: 'high', bestFor: ['coffee', 'tea', 'beans', 'rice'] },
  { id: 'eco-quad', name: 'Eco Digital – Quad Seal Pouch', category: 'eco-digital', basePrice: 155, moq: 1000, description: 'Four-corner sealed eco pouch for maximum shelf impact.', materials: ['Kraft Paper', 'Mono PE'], turnaround: '3-4 weeks', bestFor: ['pet food', 'bulk products'] },
  
  // Eco Stock Products (correct IDs from productData.ts)
  { id: 'eco-stock-header', name: 'Stock Compostable Header Bag', category: 'eco-stock', basePrice: 42, moq: 100, description: 'Ready-made compostable bag with hang hole. Ships in 3-5 days. Perfect for retail display.', materials: ['Compostable'], inStock: true, turnaround: '3-5 days', bestFor: ['retail', 'display', 'quick ship'] },
  { id: 'eco-stock-mailer', name: 'Stock Compostable Mailer Bag', category: 'eco-stock', basePrice: 42, moq: 100, description: 'Compostable shipping mailer for eco-conscious e-commerce. Ships in 3-5 days.', materials: ['Compostable'], inStock: true, turnaround: '3-5 days', bestFor: ['shipping', 'e-commerce', 'mailers'] },
  
  // Custom Printed Boxes Products
  { id: 'box-corrugated-custom', name: 'Custom Printed Corrugated Mailer Boxes', category: 'boxes', basePrice: 514.50, moq: 200, description: 'Premium custom printed corrugated mailer boxes. CMYK printing, matte lamination, gold foil & embossing available. FSC certified recycled paper. Sizes: 500g (130×85×35mm), 1kg (270×85×35mm). Sea freight included.', materials: ['FSC Recycled Paper', 'Grayboard'], turnaround: '30 days + 40-60 days shipping', bestFor: ['coffee', 'tea', 'chocolate', 'gift boxes', 'premium packaging'] },
  { id: 'box-tuck-custom', name: 'Custom Printed Tuck Boxes', category: 'boxes', basePrice: 1105.50, moq: 200, description: 'Premium tuck boxes (cartons) with gold foil stamping and embossing. 250g white card, matte finish. Size: 100g box (81×162×15mm). Perfect for chocolate bars, tea, confectionery. Sea freight included.', materials: ['250g White Card', 'FSC Paper'], turnaround: '30 days + 40-60 days shipping', bestFor: ['chocolate', 'tea', 'confectionery', 'premium gifts', 'luxury packaging'] },
]

// FAQ Knowledge Base
const FAQ_KNOWLEDGE = [
  { keywords: ['plastic free', 'plastic-free', 'no plastic', 'without plastic'], answer: 'Yes, we have plastic-free packaging options! Our compostable packaging line (Kraft+PLA, NatureFlex) is 100% plastic-free, made from plant-based materials. Our custom printed corrugated mailer boxes and tuck boxes are also plastic-free, made from FSC-certified recycled paper and cardstock. Both are certified sustainable and fully biodegradable.' },
  { keywords: ['moq', 'minimum', 'order', 'quantity'], answer: 'Minimum Order Quantity: Sample packs start from 1 unit ($15-25). Digital printed pouches from 100 pieces. Eco digital from 1,000 pieces. Volume discounts start at 5,000+ pieces.' },
  { keywords: ['turnaround', 'time', 'production', 'lead', 'how long'], answer: 'Production time: Sample packs ship in 3-5 days. Conventional digital print: 2-3 weeks. Eco digital print: 3-4 weeks. Large bulk orders: 6-8 weeks.' },
  { keywords: ['shipping', 'delivery', 'freight'], answer: 'We offer Air Freight (5-7 days), Sea Freight (25-35 days), and Dual Shipping options. Minimum shipping cost is $40. Free shipping on conventional digital orders.' },
  { keywords: ['compostable', 'biodegradable', 'home compost'], answer: 'Our compostable pouches are certified EN13432 and ASTM D6400 for industrial composting. Some products are also OK Compost Home certified for backyard composting.' },
  { keywords: ['recyclable', 'recycle', 'mono pe', 'pcr'], answer: 'Mono PE pouches are 100% recyclable in PE recycling streams. PCR (Post-Consumer Recycled) options contain 30% recycled content.' },
  { keywords: ['custom', 'print', 'design', 'artwork'], answer: 'All digital printed pouches support full-color CMYK printing with matte or glossy finish. We provide free artwork templates after order confirmation.' },
  { keywords: ['barrier', 'moisture', 'oxygen', 'protection'], answer: 'We offer Clear/Low barrier (glossy) for dry goods and Metalised/High barrier (matte) for products needing moisture/oxygen protection like coffee and snacks.' },
  { keywords: ['coffee', 'valve', 'degassing'], answer: 'For coffee packaging, we recommend metalised high-barrier pouches with optional one-way degassing valve. Flat bottom and side gusset styles are most popular.' },
  { keywords: ['certification', 'certified', 'en13432', 'astm', 'bpi'], answer: 'Available certifications: EN13432, ASTM D6400, OK Compost Home, OK Compost Industrial, GRS (recycled content), BPI certified, FSC (paper products and boxes).' },
  { keywords: ['size', 'dimension', 'capacity'], answer: 'We offer 14 standard sizes from 90x130mm to 260x350mm. Custom sizes available for orders of 5,000+ pieces. Contact us for specific capacity needs.' },
  { keywords: ['box', 'boxes', 'carton', 'corrugated', 'tuck', 'rigid'], answer: 'We offer custom printed boxes: 1) Corrugated Mailer Boxes (FSC recycled, 500g & 1kg sizes, from $514 for 200pcs) 2) Tuck Boxes (gold foil, embossing, 100g size, from $1105 for 200pcs). Both include matte lamination and sea freight shipping.' },
  { keywords: ['meeting', 'book', 'schedule', 'consultation', 'call', 'talk', 'discuss', 'calendly', 'appointment', 'consult'], answer: 'Book a FREE 30-minute packaging consultation with our team! Schedule directly at: https://calendly.com/30-min-free-packaging-consultancy - We\'ll discuss your requirements, recommend the best solutions, and provide accurate quotes.' },
  { keywords: ['contact', 'email', 'phone', 'whatsapp', 'reach'], answer: 'Contact us: Email ryan@achievepack.com, WhatsApp +852 6970 4411, or book a free consultation at https://calendly.com/30-min-free-packaging-consultancy' },
]

// ============ RETRIEVAL LAYER ============
function findRelevantProducts(question: string): typeof PRODUCT_CATALOG {
  const q = question.toLowerCase()
  
  // Special handling for boxes queries
  if (q.includes('box') || q.includes('carton') || q.includes('corrugated') || q.includes('tuck') || q.includes('rigid') || q.includes('chocolate')) {
    const boxProducts = PRODUCT_CATALOG.filter(p => 
      p.category === 'boxes' ||
      (p as any).bestFor?.some((b: string) => ['chocolate', 'gift boxes', 'premium packaging', 'luxury packaging'].includes(b))
    )
    if (boxProducts.length > 0) return boxProducts.slice(0, 5)
  }
  
  // Special handling for coffee/high barrier queries - prioritize best matches
  if (q.includes('coffee') || q.includes('roast') || q.includes('bean') || 
      q.includes('high barrier') || q.includes('moisture') || q.includes('freshness')) {
    const coffeeProducts = PRODUCT_CATALOG.filter(p => 
      (p as any).bestFor?.some((b: string) => ['coffee', 'tea'].includes(b)) ||
      (p as any).barrier === 'high' ||
      p.description.toLowerCase().includes('coffee')
    )
    if (coffeeProducts.length > 0) return coffeeProducts.slice(0, 5)
  }
  
  // Special handling for eco/compostable queries
  if (q.includes('eco') || q.includes('sustainable') || q.includes('compostable') || 
      q.includes('recyclable') || q.includes('green') || q.includes('biodegradable')) {
    const ecoProducts = PRODUCT_CATALOG.filter(p => 
      p.category.includes('eco') ||
      (p as any).materials?.some((m: string) => 
        ['Compostable', 'BioPE', 'PCR', 'Mono PE'].includes(m)
      )
    )
    if (ecoProducts.length > 0) return ecoProducts.slice(0, 5)
  }
  
  // Special handling for sample queries
  if (q.includes('sample') || q.includes('test') || q.includes('try')) {
    return PRODUCT_CATALOG.filter(p => p.category === 'sample').slice(0, 4)
  }
  
  // General keyword matching with scoring
  const keywords = q.split(/\s+/).filter(w => w.length > 2)
  
  const scored = PRODUCT_CATALOG.map(product => {
    const searchText = `${product.name} ${product.description} ${product.category} ${(product as any).materials?.join(' ') || ''} ${(product as any).shape || ''} ${(product as any).bestFor?.join(' ') || ''}`.toLowerCase()
    let score = 0
    keywords.forEach(kw => {
      if (searchText.includes(kw)) score += 1
      if (product.name.toLowerCase().includes(kw)) score += 2
      if ((product as any).bestFor?.some((b: string) => b.includes(kw))) score += 3
    })
    return { product, score }
  })
  
  return scored
    .filter(s => s.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, 5)
    .map(s => s.product)
}

function findRelevantFAQs(question: string): string[] {
  const q = question.toLowerCase()
  return FAQ_KNOWLEDGE
    .filter(faq => faq.keywords.some(kw => q.includes(kw)))
    .map(faq => faq.answer)
}

// ============ RELATED PAGES FINDER ============
function findRelatedPages(question: string, pageContext?: PageContext): RelatedPage[] {
  const q = question.toLowerCase()
  const pages: RelatedPage[] = []
  
  // Check keywords in question
  if (q.includes('coffee') || q.includes('roast') || q.includes('bean') || q.includes('tea')) {
    pages.push(...(RELATED_PAGES_MAP['coffee'] || []))
  }
  if (q.includes('eco') || q.includes('compostable') || q.includes('recyclable') || q.includes('sustainable') || q.includes('green')) {
    pages.push(...(RELATED_PAGES_MAP['eco'] || []))
  }
  if (q.includes('pet') || q.includes('dog') || q.includes('cat') || q.includes('animal')) {
    pages.push(...(RELATED_PAGES_MAP['pet'] || []))
  }
  if (q.includes('snack') || q.includes('chip') || q.includes('nut') || q.includes('candy')) {
    pages.push(...(RELATED_PAGES_MAP['snacks'] || []))
  }
  if (q.includes('sample') || q.includes('test') || q.includes('try')) {
    pages.push(...(RELATED_PAGES_MAP['sample'] || []))
  }
  if (q.includes('price') || q.includes('cost') || q.includes('moq') || q.includes('how much')) {
    pages.push(...(RELATED_PAGES_MAP['pricing'] || []))
  }
  if (q.includes('material') || q.includes('barrier') || q.includes('kraft')) {
    pages.push(...(RELATED_PAGES_MAP['materials'] || []))
  }
  if (q.includes('box') || q.includes('carton') || q.includes('corrugated') || q.includes('tuck') || q.includes('chocolate')) {
    pages.push(...(RELATED_PAGES_MAP['boxes'] || []))
  }
  // Consultation/Meeting keywords
  if (q.includes('meeting') || q.includes('book') || q.includes('schedule') || q.includes('consultation') || 
      q.includes('call') || q.includes('talk') || q.includes('discuss') || q.includes('calendly') || 
      q.includes('appointment') || q.includes('consult') || q.includes('quote') || q.includes('custom')) {
    pages.push(...(RELATED_PAGES_MAP['consultation'] || []))
  }
  // Page awareness - when user asks about current page, suggest related content
  if (q.includes('page') || q.includes('looking') || q.includes('viewing') || q.includes('where am i') || q.includes('what is this')) {
    // Add consultation as a helpful next step
    pages.push(...(RELATED_PAGES_MAP['consultation'] || []))
  }
  
  // Context-based suggestions if on product page
  if (pageContext?.pageType === 'product' && pageContext.productCategory) {
    if (pageContext.productCategory === 'eco-digital' || pageContext.productCategory === 'eco-stock') {
      pages.push(...(RELATED_PAGES_MAP['eco'] || []))
    }
    if (pageContext.productCategory === 'sample') {
      pages.push(...(RELATED_PAGES_MAP['store'] || []))
    }
    // Always add consultation for product pages
    pages.push({ title: '📅 Book FREE Consultation', url: 'https://calendly.com/30-min-free-packaging-consultancy', description: 'Get expert advice on this product' })
  }
  
  // If on store page, suggest popular categories
  if (pageContext?.pageType === 'store') {
    pages.push(...(RELATED_PAGES_MAP['store'] || []))
  }
  
  // If on materials page, suggest related materials and products
  if (pageContext?.pageType === 'materials') {
    pages.push(...(RELATED_PAGES_MAP['materials'] || []))
    pages.push(...(RELATED_PAGES_MAP['eco'] || []))
  }
  
  // If on industry page, suggest related products and consultation
  if (pageContext?.pageType === 'industry') {
    pages.push(...(RELATED_PAGES_MAP['consultation'] || []))
  }
  
  // If no specific matches, use defaults based on page type
  if (pages.length === 0) {
    if (pageContext?.pageType === 'store') {
      pages.push(...(RELATED_PAGES_MAP['store'] || []))
    } else if (pageContext?.pageType === 'materials') {
      pages.push(...(RELATED_PAGES_MAP['materials'] || []))
    } else {
      pages.push(...(RELATED_PAGES_MAP['default'] || []))
    }
  }
  
  // Deduplicate and filter out current page
  const seen = new Set<string>()
  const currentPath = pageContext?.path || ''
  
  return pages
    .filter(p => {
      if (seen.has(p.url) || p.url === currentPath) return false
      seen.add(p.url)
      return true
    })
    .slice(0, 3)
}

// ============ xAI INTEGRATION ============
async function callXAI(userQuestion: string, context: string, pageContext?: PageContext): Promise<string> {
  const XAI_API_KEY = process.env.XAI_API_KEY
  
  if (!XAI_API_KEY) {
    return "I'm currently unable to process your request. Please contact us directly at ryan@achievepack.com or WhatsApp +852 6970 4411."
  }

  // Build page-aware context - more explicit about current page
  let pageAwareContext = ''
  if (pageContext) {
    if (pageContext.pageType === 'product' && pageContext.productName) {
      pageAwareContext = `

=== CURRENT PAGE THE USER IS VIEWING ===
Page Type: Product Page
Product Name: ${pageContext.productName}
Product Category: ${pageContext.productCategory || 'N/A'}
Product Description: ${pageContext.productDescription || 'N/A'}
Page URL Path: ${pageContext.path}

IMPORTANT: 
- You CAN see what page the user is on!
- If user asks "what page am I on" or "what am I looking at", tell them: "You're viewing the ${pageContext.productName} product page."
- If user asks about "this" or "it", they mean this product.
- Always be aware of and reference this product context.`
    } else if (pageContext.pageName) {
      pageAwareContext = `

=== CURRENT PAGE THE USER IS VIEWING ===
Page Type: ${pageContext.pageType}
Page Name: ${pageContext.pageName}
Page URL Path: ${pageContext.path}

IMPORTANT:
- You CAN see what page the user is on!
- If user asks "what page am I on" or "what am I looking at", tell them: "You're on the ${pageContext.pageName} page."
- Answer questions in context of this page.`
    } else {
      pageAwareContext = `

=== CURRENT PAGE THE USER IS VIEWING ===
Page URL Path: ${pageContext.path}
Page Type: ${pageContext.pageType}

You can see the user is browsing this page and should reference it when relevant.`
    }
  }

  const systemPrompt = `You are a helpful packaging assistant for AchievePack, specializing in eco-friendly flexible packaging solutions (pouches, bags, mailers) and custom printed boxes.

IMPORTANT RULES:
1. Only use product and price information provided in the CONTEXT below.
2. NEVER invent or guess prices. If exact price is not in context, say "Please check our Store or contact us for the latest price."
3. Be friendly, professional, and concise. Keep responses under 150 words.
4. For complex quotes or custom requirements, ALWAYS encourage booking a FREE consultation via Calendly: https://calendly.com/30-min-free-packaging-consultancy
5. Always provide helpful next steps.
6. If asked about competitors, politely redirect to our offerings.
7. **YOU CAN SEE WHAT PAGE THE USER IS ON** - Check the CURRENT PAGE section in context. When users ask "what page am I on" or "what am I looking at", tell them the specific page/product they're viewing.
8. Use markdown formatting for better readability (bold for important info, bullet points for lists).
9. When users want to schedule a meeting, book a call, or get a consultation, provide this Calendly link: https://calendly.com/30-min-free-packaging-consultancy
10. When on a product page, proactively offer to help with that specific product.

CONTEXT:
${context}${pageAwareContext}

QUICK FACTS:
- Conventional digital MOQ: 100 pieces
- Eco digital MOQ: 1,000 pieces
- Custom boxes MOQ: 200 pieces
- Sample packs: $15-25, ships in 3-5 days
- All prices include shipping ($40 minimum)
- Boxes include sea freight (40-60 days)
- FREE Consultation: https://calendly.com/30-min-free-packaging-consultancy
- Contact: ryan@achievepack.com, WhatsApp +852 6970 4411`

  try {
    const response = await fetch('https://api.x.ai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${XAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: 'grok-3-mini-beta',
        messages: [
          { role: 'system', content: systemPrompt },
          { role: 'user', content: userQuestion },
        ],
        max_tokens: 400,
        temperature: 0.7,
      }),
    })

    if (!response.ok) {
      console.error('xAI API error:', response.status, await response.text())
      throw new Error(`API error: ${response.status}`)
    }

    const data = await response.json()
    return data.choices?.[0]?.message?.content || "I couldn't process your request. Please try again."
  } catch (error) {
    console.error('xAI Error:', error)
    return "I'm experiencing technical difficulties. Please contact us at ryan@achievepack.com or WhatsApp +852 6970 4411."
  }
}

// ============ API HANDLER ============
export default async function handler(req: VercelRequest, res: VercelResponse) {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type')

  if (req.method === 'OPTIONS') {
    return res.status(200).end()
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  try {
    const { question, sessionId, pageContext } = req.body

    if (!question || typeof question !== 'string') {
      return res.status(400).json({ error: 'Question is required' })
    }

    // If on a product page, include that product in the context
    let relevantProducts = findRelevantProducts(question)
    if (pageContext?.productId) {
      const currentProduct = PRODUCT_CATALOG.find(p => p.id === pageContext.productId)
      if (currentProduct && !relevantProducts.find(p => p.id === currentProduct.id)) {
        relevantProducts = [currentProduct, ...relevantProducts].slice(0, 5)
      }
    }
    
    const relevantFAQs = findRelevantFAQs(question)

    const productContext = relevantProducts.length > 0
      ? `RELEVANT PRODUCTS:\n${relevantProducts.map(p => 
          `- ${p.name}: ${p.description}. Starting from US$${p.basePrice}. MOQ: ${p.moq} pieces.${(p as any).materials ? ` Materials: ${(p as any).materials.join(', ')}` : ''}${(p as any).turnaround ? ` Turnaround: ${(p as any).turnaround}` : ''}`
        ).join('\n')}`
      : 'No specific products matched. Suggest browsing our Store at achievepack.com/store'

    const faqContext = relevantFAQs.length > 0
      ? `\nRELEVANT INFO:\n${relevantFAQs.join('\n')}`
      : ''

    const fullContext = `${productContext}${faqContext}`
    const answer = await callXAI(question, fullContext, pageContext)
    
    // Find related pages based on question and context
    const relatedPages = findRelatedPages(question, pageContext)

    return res.status(200).json({
      answer,
      sources: relevantProducts.map(p => ({ id: p.id, name: p.name, url: `/store/product/${p.id}` })),
      relatedPages,
      sessionId: sessionId || `session_${Date.now()}`,
    })

  } catch (error) {
    console.error('Assistant Error:', error)
    return res.status(500).json({ error: 'Internal server error' })
  }
}
