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

// ============ COMPLETE SEO PAGES DATABASE ============
// Auto-synced with LearnNavigation.tsx LEARN_PAGES
const ALL_SEO_PAGES: { name: string; url: string; keywords: string[]; category: string }[] = [
  // Company
  { name: 'About Us', url: '/company/about', keywords: ['about', 'company', 'who we are', 'achievepack'], category: 'Company' },
  { name: 'Our Impact (B Corp)', url: '/company/b-corp', keywords: ['b corp', 'bcorp', 'impact', 'certification', 'sustainability'], category: 'Company' },
  { name: 'BPI Certified', url: '/company/bpi-certified', keywords: ['bpi', 'certified', 'biodegradable', 'certification'], category: 'Company' },
  { name: 'Certificates', url: '/company/certificates', keywords: ['certificate', 'certification', 'en13432', 'astm', 'ok compost'], category: 'Company' },
  { name: 'Factory Tour', url: '/company/factory-tour', keywords: ['factory', 'tour', 'manufacturing', 'production'], category: 'Company' },
  // Packaging Shapes
  { name: 'Stand Up Pouches', url: '/packaging/stand-up-pouches', keywords: ['stand up', 'standup', 'sup', 'pouch', 'doypack'], category: 'Packaging' },
  { name: 'Flat Bottom Bags', url: '/packaging/flat-bottom-bags', keywords: ['flat bottom', 'box pouch', 'block bottom', 'coffee bag'], category: 'Packaging' },
  { name: 'Side Gusset Bags', url: '/packaging/side-gusset-bags', keywords: ['side gusset', 'gusset', 'coffee bag', 'traditional'], category: 'Packaging' },
  { name: 'Flat Pouches', url: '/packaging/flat-pouches', keywords: ['flat', '3 side seal', 'three side seal', 'sachet'], category: 'Packaging' },
  { name: 'Spout Pouches', url: '/packaging/spout-pouches', keywords: ['spout', 'liquid', 'juice', 'sauce', 'baby food'], category: 'Packaging' },
  { name: 'Vacuum Pouches', url: '/packaging/vacuum-pouches', keywords: ['vacuum', 'vacuum seal', 'meat', 'cheese'], category: 'Packaging' },
  { name: 'Custom Boxes', url: '/packaging/custom-boxes', keywords: ['box', 'carton', 'corrugated', 'tuck box', 'packaging box'], category: 'Packaging' },
  // Materials
  { name: 'Compostable Overview', url: '/materials/compostable', keywords: ['compostable', 'compost', 'biodegradable', 'eco', 'sustainable'], category: 'Materials' },
  { name: 'Home Compostable', url: '/materials/home-compostable', keywords: ['home compost', 'ok compost home', 'backyard', 'garden compost'], category: 'Materials' },
  { name: 'Industrial Compostable', url: '/materials/industrial-compostable', keywords: ['industrial compost', 'commercial compost', 'facility'], category: 'Materials' },
  { name: 'Recyclable Mono PE', url: '/materials/recyclable-mono-pe', keywords: ['mono pe', 'recyclable', 'pe', 'polyethylene', 'mono material'], category: 'Materials' },
  { name: 'Recyclable Mono PP', url: '/materials/recyclable-mono-pp', keywords: ['mono pp', 'recyclable', 'pp', 'polypropylene'], category: 'Materials' },
  { name: 'Bio-PE', url: '/materials/bio-pe', keywords: ['bio pe', 'biope', 'bio-based', 'sugarcane', 'i\'m green', 'plant based'], category: 'Materials' },
  { name: 'PCR Recycled', url: '/materials/pcr', keywords: ['pcr', 'post consumer', 'recycled', 'recycled content'], category: 'Materials' },
  // Industries
  { name: 'Coffee & Tea', url: '/industry/coffee-tea', keywords: ['coffee', 'tea', 'roaster', 'cafe', 'beans', 'loose leaf'], category: 'Industries' },
  { name: 'Snacks & Food', url: '/industry/snacks-food', keywords: ['snacks', 'snack', 'chips', 'nuts', 'dried fruit', 'food'], category: 'Industries' },
  { name: 'Pet Food', url: '/industry/pet-food', keywords: ['pet', 'dog', 'cat', 'pet food', 'treats', 'animal'], category: 'Industries' },
  { name: 'Supplements', url: '/industry/supplements-powders', keywords: ['supplement', 'protein', 'powder', 'vitamins', 'health'], category: 'Industries' },
  { name: 'Baby Food', url: '/industry/baby-food', keywords: ['baby', 'infant', 'toddler', 'baby food', 'puree'], category: 'Industries' },
  { name: 'Frozen Food', url: '/industry/frozen-food', keywords: ['frozen', 'freeze', 'ice cream', 'cold storage'], category: 'Industries' },
  { name: 'Sauces & Condiments', url: '/industry/sauces-condiments', keywords: ['sauce', 'condiment', 'ketchup', 'mayonnaise'], category: 'Industries' },
  // Composting (including plastic-free)
  { name: 'Commercial Composting', url: '/composting/commercial-composting', keywords: ['commercial', 'industrial', 'facility', 'composting'], category: 'Composting' },
  { name: 'Composting Benefits', url: '/composting/composting-benefits', keywords: ['benefits', 'advantage', 'why compost'], category: 'Composting' },
  { name: 'Composting Service Finder', url: '/composting/composting-services', keywords: ['service', 'finder', 'locate', 'near me'], category: 'Composting' },
  { name: 'Biodegradable vs Compostable', url: '/composting/biodegradable-vs-compostable', keywords: ['biodegradable', 'difference', 'vs', 'comparison'], category: 'Composting' },
  { name: 'Home vs Industrial Compostable', url: '/composting/home-vs-industrial-compostable', keywords: ['home', 'industrial', 'difference', 'comparison'], category: 'Composting' },
  { name: 'Plastic-Free vs Compostable', url: '/composting/plastic-free', keywords: ['plastic free', 'plastic-free', 'no plastic', 'pla', 'pbat', 'bioplastic'], category: 'Composting' },
  // BioPE
  { name: 'What is Bio-PE', url: '/biope/what-is-bio-pe', keywords: ['what is', 'bio pe', 'biope', 'explanation'], category: 'BioPE' },
  { name: 'Bio-PE vs Compostable', url: '/biope/bio-pe-vs-compostable', keywords: ['vs', 'comparison', 'difference'], category: 'BioPE' },
  { name: 'Bio-PE & EPR Regulations', url: '/biope/bio-pe-epr-regulations', keywords: ['epr', 'regulation', 'law', 'compliance'], category: 'BioPE' },
  { name: 'Inside I\'m green™ Bio-PE', url: '/biope/inside-im-green-bio-pe', keywords: ['i\'m green', 'im green', 'braskem', 'sugarcane'], category: 'BioPE' },
  // PCR
  { name: 'What Is PCR Plastic?', url: '/pcr/pcr-plastic-guide', keywords: ['what is pcr', 'guide', 'explanation'], category: 'PCR' },
  { name: '7-Point PCR Checklist', url: '/pcr/7-checklist', keywords: ['checklist', '7 point', 'steps'], category: 'PCR' },
  { name: 'Realistic PCR Content', url: '/pcr/realistic-pcr-content', keywords: ['realistic', 'percentage', 'content'], category: 'PCR' },
  { name: 'Recyclable vs PCR vs Bio-Based', url: '/pcr/recyclable-vs-pcr-biobased', keywords: ['recyclable', 'vs', 'comparison', 'bio-based'], category: 'PCR' },
  // Recyclable
  { name: 'What Is 100% Recyclable?', url: '/recyclable/what-is-recyclable', keywords: ['100% recyclable', 'fully recyclable', 'explanation'], category: 'Recyclable' },
  { name: '3-Step Roadmap for SMEs', url: '/recyclable/roadmap-sme', keywords: ['roadmap', 'sme', 'small business', 'steps'], category: 'Recyclable' },
  { name: 'Mono-Material Foundation', url: '/recyclable/mono-material-foundation', keywords: ['mono material', 'foundation', 'basics'], category: 'Recyclable' },
  // Free Service
  { name: 'Free Packaging Design Consultation', url: '/free-service/packaging-design-consultation', keywords: ['free', 'design', 'consultation', 'advice'], category: 'Free Service' },
  { name: 'Free Website Upgrade', url: '/free-service/website-upgrade', keywords: ['free', 'website', 'upgrade'], category: 'Free Service' },
  { name: 'Free Packaging Mockup', url: '/free-service/packaging-mockup', keywords: ['free', 'mockup', '3d', 'render'], category: 'Free Service' },
  { name: 'Free Customer Center', url: '/free-service/customer-center', keywords: ['free', 'customer', 'center', 'portal'], category: 'Free Service' },
  // Options & Features
  { name: 'Digital Printing', url: '/printing/digital-printing', keywords: ['digital', 'printing', 'cmyk', 'low moq'], category: 'Printing' },
  { name: 'Plate Printing', url: '/printing/plate-printing', keywords: ['plate', 'gravure', 'rotogravure', 'flexo'], category: 'Printing' },
  { name: 'Reclosure Options', url: '/features/reclosure-options', keywords: ['zipper', 'resealable', 'reclosure', 'zip'], category: 'Features' },
  { name: 'Surface Finishes', url: '/features/surface-finish', keywords: ['matte', 'glossy', 'finish', 'lamination'], category: 'Features' },
  { name: 'Barrier Options', url: '/features/barrier-options', keywords: ['barrier', 'moisture', 'oxygen', 'protection'], category: 'Features' },
  { name: 'Low Barrier', url: '/features/low-barrier', keywords: ['low barrier', 'clear', 'window'], category: 'Features' },
  { name: 'Medium Barrier', url: '/features/medium-barrier', keywords: ['medium barrier', 'balanced'], category: 'Features' },
  { name: 'High Barrier', url: '/features/high-barrier', keywords: ['high barrier', 'metalized', 'aluminium', 'coffee'], category: 'Features' },
  // Solutions
  { name: 'Startup Founder', url: '/solutions/startup-founder', keywords: ['startup', 'founder', 'small business', 'new business'], category: 'Solutions' },
  { name: 'Ecommerce Brand', url: '/solutions/ecommerce-brand', keywords: ['ecommerce', 'online', 'dtc', 'd2c', 'direct to consumer'], category: 'Solutions' },
  { name: 'Corporate Sustainability', url: '/solutions/corporate-sustainability', keywords: ['corporate', 'enterprise', 'esg', 'sustainability'], category: 'Solutions' },
  { name: 'Food Manufacturer', url: '/solutions/food-manufacturer', keywords: ['manufacturer', 'food production', 'cpg'], category: 'Solutions' },
  { name: 'Product Developer', url: '/solutions/product-developer', keywords: ['product developer', 'r&d', 'innovation'], category: 'Solutions' },
  { name: 'Coffee Roaster', url: '/solutions/coffee-roaster', keywords: ['coffee roaster', 'roastery', 'specialty coffee'], category: 'Solutions' },
  { name: 'Artisan Producer', url: '/solutions/artisan-producer', keywords: ['artisan', 'handmade', 'craft', 'small batch'], category: 'Solutions' },
  { name: 'Snack Brand Manager', url: '/solutions/snack-brand-manager', keywords: ['snack brand', 'brand manager', 'cpg'], category: 'Solutions' },
  // Topics
  { name: 'Eco Food Packaging', url: '/topics/eco-friendly-food-packaging', keywords: ['eco', 'food packaging', 'sustainable'], category: 'Topics' },
  { name: 'DTC Packaging', url: '/topics/dtc-sustainable-packaging', keywords: ['dtc', 'd2c', 'direct to consumer', 'ecommerce'], category: 'Topics' },
  { name: 'Coffee Materials', url: '/topics/green-coffee-materials', keywords: ['coffee', 'green', 'materials'], category: 'Topics' },
  { name: 'Digital Printing Guide', url: '/topics/digital-printing-eco-packaging', keywords: ['digital printing', 'guide', 'eco'], category: 'Topics' },
  { name: 'Recyclable Snack Packaging', url: '/topics/recyclable-snack-packaging', keywords: ['recyclable', 'snack', 'chips'], category: 'Topics' },
  { name: 'Custom Printed Pouches', url: '/topics/custom-printed-sustainable-pouches', keywords: ['custom', 'printed', 'pouches'], category: 'Topics' },
  { name: 'Packaging Regulations', url: '/topics/eco-packaging-regulations', keywords: ['regulation', 'law', 'compliance', 'epr'], category: 'Topics' },
  { name: 'Compostable Suppliers', url: '/topics/compostable-pouch-suppliers', keywords: ['supplier', 'manufacturer', 'compostable'], category: 'Topics' },
  { name: 'Low MOQ Startup', url: '/topics/low-moq-startup-packaging', keywords: ['low moq', 'startup', 'small order'], category: 'Topics' },
  { name: 'Baby Food Bags', url: '/topics/compostable-baby-food-bags', keywords: ['baby', 'baby food', 'compostable'], category: 'Topics' },
  // Function
  { name: 'Microwave Steam Bags', url: '/function/microwave-steam-bags', keywords: ['microwave', 'steam', 'heat', 'cooking'], category: 'Function' },
  { name: 'Carbon Neutral Bags', url: '/function/carbon-neutral-bags', keywords: ['carbon neutral', 'carbon offset', 'climate'], category: 'Function' },
  { name: 'Spout Pouches Juice', url: '/function/spout-pouches-juice', keywords: ['spout', 'juice', 'beverage', 'liquid'], category: 'Function' },
  { name: 'Child-Resistant Bags', url: '/function/child-resistant-bags', keywords: ['child resistant', 'child proof', 'cannabis', 'pharmaceutical'], category: 'Function' },
  { name: 'Digital Printed Retort Bags', url: '/function/digital-printed-retort-bags', keywords: ['retort', 'sterilization', 'autoclave', 'ready meal'], category: 'Function' },
  { name: 'Pre-Zippered Rollstock', url: '/function/pre-zippered-rollstock', keywords: ['rollstock', 'roll', 'pre-zippered', 'ffs'], category: 'Function' },
  { name: 'Rice Paper Bags', url: '/function/rice-paper-bags', keywords: ['rice paper', 'paper', 'natural look'], category: 'Function' },
  { name: 'PVA Water-Soluble Bags', url: '/function/pva-water-soluble-bags', keywords: ['pva', 'water soluble', 'dissolvable'], category: 'Function' },
  // Knowledge
  { name: 'All Options', url: '/knowledge/all-options', keywords: ['options', 'all', 'overview'], category: 'Knowledge' },
  { name: 'Pouch Sizing', url: '/knowledge/pouch-sizing', keywords: ['sizing', 'size', 'dimensions', 'capacity'], category: 'Knowledge' },
  { name: 'Size Guide', url: '/knowledge/size-guide', keywords: ['size guide', 'chart', 'dimensions'], category: 'Knowledge' },
  { name: 'Printing Types', url: '/knowledge/printing-types', keywords: ['printing', 'types', 'digital', 'gravure'], category: 'Knowledge' },
  { name: 'K-Seal Stand Up Pouches', url: '/knowledge/k-seal-stand-up-pouches', keywords: ['k-seal', 'kseal', 'stand up'], category: 'Knowledge' },
  { name: 'White Ink Underprint', url: '/knowledge/white-ink-underprint', keywords: ['white ink', 'underprint', 'printing'], category: 'Knowledge' },
  { name: 'Fin Seal vs Lap Seal', url: '/knowledge/fin-seal-lap-seal', keywords: ['fin seal', 'lap seal', 'seal type'], category: 'Knowledge' },
  { name: 'Workflow', url: '/knowledge/workflow', keywords: ['workflow', 'process', 'order', 'how to'], category: 'Knowledge' },
  // Case Studies
  { name: 'Coffee Roastery Case Study', url: '/case-studies/coffee-roastery', keywords: ['coffee', 'roastery', 'case study'], category: 'Case Studies' },
  { name: 'Tea Brand Case Study', url: '/case-studies/tea-brand', keywords: ['tea', 'brand', 'case study'], category: 'Case Studies' },
  { name: 'Superfood Brand Case Study', url: '/case-studies/superfood-brand', keywords: ['superfood', 'health', 'case study'], category: 'Case Studies' },
  { name: 'Pet Treats Case Study', url: '/case-studies/pet-treats', keywords: ['pet', 'treats', 'case study'], category: 'Case Studies' },
  { name: 'Chocolate Brand Case Study', url: '/case-studies/chocolate-brand', keywords: ['chocolate', 'confectionery', 'case study'], category: 'Case Studies' },
  // Lab
  { name: 'Lateral Filter Bags', url: '/lab/lateral-filter-bags', keywords: ['filter', 'lab', 'lateral'], category: 'Lab' },
  { name: 'Wire Closure Bags', url: '/lab/wire-closure-bags', keywords: ['wire', 'closure', 'lab'], category: 'Lab' },
  { name: 'Lab Blender Bags', url: '/lab/lab-blender-bags', keywords: ['blender', 'lab', 'stomacher'], category: 'Lab' },
  // USA Market
  { name: 'Compostable Packaging USA', url: '/usa/compostable-packaging', keywords: ['usa', 'us', 'america', 'compostable'], category: 'USA' },
  { name: 'Coffee Packaging USA', url: '/usa/coffee-packaging', keywords: ['usa', 'us', 'america', 'coffee'], category: 'USA' },
  { name: 'Snacks Packaging USA', url: '/usa/snacks-packaging', keywords: ['usa', 'us', 'america', 'snacks'], category: 'USA' },
  { name: 'Labeling Guide USA', url: '/usa/labeling-guide', keywords: ['usa', 'labeling', 'ftc', 'green guides'], category: 'USA' },
  // Spec
  { name: 'PCR PET Duplex Clear', url: '/spec/pcr-pet-duplex-clear', keywords: ['pcr', 'pet', 'spec', 'clear'], category: 'Spec' },
  { name: 'Bio-PE PET Duplex Clear', url: '/spec/biope-pet-duplex-clear', keywords: ['biope', 'pet', 'spec', 'clear'], category: 'Spec' },
  { name: 'Bio-Cello Duplex Clear', url: '/spec/bio-cello-duplex-clear', keywords: ['bio-cello', 'natureflex', 'clear'], category: 'Spec' },
  { name: 'Mono PE Duplex Clear', url: '/spec/mono-pe-duplex-clear', keywords: ['mono pe', 'recyclable', 'clear'], category: 'Spec' },
]

// Search SEO pages by question - intelligent matching
function searchSEOPages(question: string): RelatedPage[] {
  const q = question.toLowerCase()
  const words = q.split(/\s+/).filter(w => w.length > 2)
  
  const scored = ALL_SEO_PAGES.map(page => {
    let score = 0
    const searchText = `${page.name.toLowerCase()} ${page.keywords.join(' ')} ${page.category.toLowerCase()}`
    
    // Check each word and keyword
    words.forEach(word => {
      if (searchText.includes(word)) score += 1
      // Exact keyword match gets higher score
      if (page.keywords.some(k => k.includes(word) || word.includes(k))) score += 2
      // Name match gets highest score
      if (page.name.toLowerCase().includes(word)) score += 3
    })
    
    // Boost for full phrase matches
    page.keywords.forEach(keyword => {
      if (q.includes(keyword)) score += 5
    })
    
    return { page, score }
  })
  
  return scored
    .filter(s => s.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, 3)
    .map(s => ({
      title: s.page.name,
      url: s.page.url,
      description: `Learn about ${s.page.name} - ${s.page.category}`
    }))
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
    { title: 'Recyclable Mono PE', url: '/materials/recyclable-mono-pe', description: 'PE recyclable pouches' },
    { title: 'PCR Recycled', url: '/materials/pcr', description: 'Recycled content options' },
  ],
  // Pet food
  'pet': [
    { title: 'Pet Food Packaging', url: '/industry/pet-food', description: 'Durable pet food solutions' },
    { title: 'Stand Up Pouches', url: '/packaging/stand-up-pouches', description: 'Great shelf presence' },
  ],
  // Snacks
  'snacks': [
    { title: 'Snacks & Food Packaging', url: '/industry/snacks-food', description: 'Chips, nuts, dried fruits' },
    { title: 'Stand Up Pouches', url: '/packaging/stand-up-pouches', description: 'Best seller for snacks' },
  ],
  // Samples
  'sample': [
    { title: 'Product Store', url: '/store', description: 'Browse all sample packs' },
    { title: 'Sizing Pack', url: '/store/product/sample-sizing-pack', description: 'Test different sizes' },
  ],
  // Pricing/MOQ
  'pricing': [
    { title: 'Product Store', url: '/store', description: 'See all prices' },
    { title: 'Sample Packs', url: '/store?category=sample', description: 'Start with samples' },
  ],
  // Consultation/Meeting/Book
  'consultation': [
    { title: '📅 Book FREE Consultation', url: 'https://calendly.com/30-min-free-packaging-consultancy', description: '30-min video call with our team' },
    { title: 'Product Store', url: '/store', description: 'Browse products first' },
  ],
  // Default
  'default': [
    { title: 'Product Store', url: '/store', description: 'Browse all products' },
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
  { keywords: ['compostable', 'biodegradable', 'home compost'], answer: 'Our compostable pouches are 100% PLASTIC-FREE, made from plant-based materials like Kraft paper and PLA. They are certified EN13432 and ASTM D6400 for industrial composting. Some products are also OK Compost Home certified for backyard composting. This is our most eco-friendly option!' },
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
  let pages: RelatedPage[] = []

  // FIRST: Search all SEO pages intelligently based on user's question
  const seoMatches = searchSEOPages(question)
  if (seoMatches.length > 0) {
    pages.push(...seoMatches)
  }

  // THEN: Add category-specific matches from RELATED_PAGES_MAP
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
  // Consultation/Meeting keywords
  if (q.includes('meeting') || q.includes('book') || q.includes('schedule') || q.includes('consultation') ||
    q.includes('call') || q.includes('talk') || q.includes('discuss') || q.includes('calendly') ||
    q.includes('appointment') || q.includes('consult') || q.includes('quote') || q.includes('custom')) {
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

    const data: any = await response.json()
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
