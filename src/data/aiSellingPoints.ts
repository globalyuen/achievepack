// AI-Generated Selling Points for All Products
// This data is used to display AI Insights tab on product pages

export interface AIBenefit {
  icon: string;
  title: string;
  description: string;
}

export interface AISellingPoint {
  productId: string;
  headline: string;
  targetAudience: string[];
  keyBenefits: AIBenefit[];
  specifications: { label: string; value: string }[];
  useCases: string[];
  certifications: string[];
  comparisonAdvantage: string;
  callToAction: string;
}

export const AI_SELLING_POINTS: Record<string, AISellingPoint> = {
  // ========== ECO STOCK PRODUCTS ==========
  'eco-stock-mailer-zipbag': {
    productId: 'eco-stock-mailer-zipbag',
    headline: '100% Biodegradable Resealable Mailer — Zero Plastic Guilt',
    targetAudience: ['E-commerce brands', 'Eco-conscious retailers', 'Subscription boxes', 'Fashion & jewelry brands'],
    keyBenefits: [
      { icon: '🌱', title: 'Fully Compostable', description: 'Decomposes in 3 months (industrial) or 1-2 years naturally. Zero microplastics.' },
      { icon: '🔒', title: 'Resealable Zip-Lock', description: 'Customers can reuse multiple times before composting.' },
      { icon: '💧', title: 'Moisture Protection', description: '140 micron PLA+PBAT provides excellent barrier.' },
      { icon: '📐', title: '15 Size Options', description: 'From 7×10cm to 24×35cm — fit any product.' },
      { icon: '✈️', title: 'Fast Shipping', description: '5-7 days delivery, air freight included.' },
      { icon: '📜', title: 'Certified', description: 'GB/T35795-2017 certified biodegradable.' }
    ],
    specifications: [
      { label: 'Material', value: 'PLA+PBAT (Plant-based)' },
      { label: 'Thickness', value: '140 micron' },
      { label: 'MOQ', value: '400 pcs per size' },
      { label: 'Sizes', value: '15 options (7×10cm - 24×35cm)' },
      { label: 'Lead Time', value: '5-7 business days' }
    ],
    useCases: ['E-commerce shipping', 'Clothing packaging', 'Subscription boxes', 'Jewelry & accessories', 'Sample distribution'],
    certifications: ['GB/T35795-2017', 'Industrial Compostable', 'Biodegradable'],
    comparisonAdvantage: 'Unlike plastic poly mailers that persist for 500+ years, this bag returns to earth in months. Same protection, zero guilt.',
    callToAction: 'Start with 400 bags from $5.83 — make your shipping sustainable today.'
  },

  'eco-stock-header-adhesive': {
    productId: 'eco-stock-header-adhesive',
    headline: 'Compostable Display Bag with Hang Hole — Retail Ready',
    targetAudience: ['Retail stores', 'Farmers markets', 'Gift shops', 'Organic food brands'],
    keyBenefits: [
      { icon: '🌱', title: '100% Compostable', description: 'Certified plant-based material breaks down naturally.' },
      { icon: '🪝', title: 'Hanging Ready', description: 'Optional hole for retail display hooks.' },
      { icon: '📦', title: 'Gusseted Design', description: 'Extra space for bulkier products.' },
      { icon: '🔐', title: 'Adhesive Seal', description: 'Secure closure, easy to open.' },
      { icon: '✈️', title: 'Air Shipping', description: 'Price includes air freight delivery.' },
      { icon: '📐', title: '5 Sizes', description: 'XS to XL — fit any retail product.' }
    ],
    specifications: [
      { label: 'Material', value: 'Compostable Bio-film' },
      { label: 'Thickness', value: '100 micron' },
      { label: 'MOQ', value: '100 pcs per size' },
      { label: 'Sizes', value: '5 options (14×20cm - 35×45cm)' },
      { label: 'Lead Time', value: '5-7 business days' }
    ],
    useCases: ['Retail display', 'Gift packaging', 'Food products', 'Farmers market items', 'Craft supplies'],
    certifications: ['Industrial Compostable', 'Plant-based'],
    comparisonAdvantage: 'Perfect for retail display with hang hole option. No plastic guilt when customers dispose.',
    callToAction: 'Start from just $5.56 for 100 bags — perfect for testing markets.'
  },

  'eco-stock-header-adhesive-custom': {
    productId: 'eco-stock-header-adhesive-custom',
    headline: 'Custom Printed Compostable Display Bag — Your Brand, Fully Sustainable',
    targetAudience: ['Established brands', 'Retail chains', 'Premium food producers', 'Gift brands'],
    keyBenefits: [
      { icon: '🎨', title: 'Full Color Printing', description: 'Digital print with unlimited colors and designs.' },
      { icon: '🌱', title: '100% Compostable', description: 'Same eco-friendly material as stock version.' },
      { icon: '💰', title: 'Volume Discounts', description: '10% off per additional 5,000 pcs up to 50,000.' },
      { icon: '🪝', title: 'Retail Ready', description: 'Optional hanging hole for display.' },
      { icon: '📐', title: '5 Sizes', description: 'XS to XL to fit your product range.' },
      { icon: '🎁', title: 'Free Design Support', description: 'We help optimize your artwork.' }
    ],
    specifications: [
      { label: 'Material', value: 'Compostable Bio-film' },
      { label: 'Printing', value: 'Full color digital' },
      { label: 'MOQ', value: '5,000 pcs per design' },
      { label: 'Lead Time', value: '15-20 business days' }
    ],
    useCases: ['Branded retail packaging', 'Premium gift bags', 'Food product packaging', 'Promotional items'],
    certifications: ['Industrial Compostable', 'Food Safe'],
    comparisonAdvantage: 'Your brand on truly sustainable packaging. Customers see your commitment to the planet.',
    callToAction: 'Custom branding from $0.112/pc — sustainable packaging that sells.'
  },

  'eco-stock-flatbottom-kraft': {
    productId: 'eco-stock-flatbottom-kraft',
    headline: 'Premium Kraft Stand-Up Pouch — 100% Compostable',
    targetAudience: ['Coffee roasters', 'Tea brands', 'Organic food producers', 'Artisan bakeries'],
    keyBenefits: [
      { icon: '☕', title: 'Coffee Ready', description: 'High barrier keeps coffee fresh +12 months.' },
      { icon: '🌾', title: 'Natural Kraft Look', description: 'Organic aesthetic appeals to eco-consumers.' },
      { icon: '🔒', title: 'Resealable Zipper', description: 'One-sided zipper keeps contents fresh.' },
      { icon: '📦', title: 'Flat Bottom', description: 'Stands upright on retail shelves.' },
      { icon: '🌱', title: '100% Compostable', description: 'Industrial composting certified.' },
      { icon: '⏱️', title: 'Quick Ship', description: '5-7 days from stock.' }
    ],
    specifications: [
      { label: 'Material', value: 'Natural Kraft - High Barrier (Matte)' },
      { label: 'Size', value: '160mm x 150mm + 70mm (approx. 6.3" x 5.9" + 2.8")' },
      { label: 'MOQ', value: '500 pieces' },
      { label: 'Shelf Life', value: '+12 months' },
      { label: 'Lead Time', value: '5-7 days' }
    ],
    useCases: ['Specialty coffee', 'Premium tea', 'Granola & cereals', 'Dried fruits', 'Artisan snacks'],
    certifications: ['Industrial Compostable', 'High Barrier Certified'],
    comparisonAdvantage: 'Premium kraft appearance with full compostability. Your customers can compost the entire bag.',
    callToAction: '500 bags for $500 — premium packaging that matches your brand values.'
  },

  'eco-stock-flatbottom-clear': {
    productId: 'eco-stock-flatbottom-clear',
    headline: 'Clear Compostable Stand-Up Pouch — See Your Product, Save the Planet',
    targetAudience: ['Food brands', 'Snack producers', 'Organic products', 'Visual-focused brands'],
    keyBenefits: [
      { icon: '👁️', title: 'Product Visibility', description: 'Milky clear finish shows your product.' },
      { icon: '🌱', title: '100% Compostable', description: 'Industrial composting certified.' },
      { icon: '🔒', title: 'Resealable', description: 'One-sided zipper for freshness.' },
      { icon: '📦', title: 'Flat Bottom', description: 'Premium shelf presence.' },
      { icon: '🛡️', title: 'High Barrier', description: '+12 months shelf life.' },
      { icon: '⚡', title: 'Fast Delivery', description: '5-7 days from stock.' }
    ],
    specifications: [
      { label: 'Material', value: 'Milky Clear - High Barrier (Glossy)' },
      { label: 'Size', value: '160mm x 150mm + 70mm (approx. 6.3" x 5.9" + 2.8")' },
      { label: 'MOQ', value: '500 pieces' },
      { label: 'Lead Time', value: '5-7 days' }
    ],
    useCases: ['Granola', 'Dried fruits', 'Nuts & seeds', 'Snacks', 'Candies'],
    certifications: ['Industrial Compostable', 'Food Safe'],
    comparisonAdvantage: 'Let customers see your product while feeling good about the packaging.',
    callToAction: '500 bags for $500 — sustainable visibility for your products.'
  },

  // ========== CONVENTIONAL DIGITAL PRODUCTS ==========
  'conven-sup-met-zip': {
    productId: 'conven-sup-met-zip',
    headline: 'Metalised Stand-Up Pouch — Maximum Shelf Impact',
    targetAudience: ['Food brands', 'Coffee companies', 'Snack producers', 'Pet food makers'],
    keyBenefits: [
      { icon: '✨', title: 'Premium Look', description: 'Metalised finish for maximum shelf appeal.' },
      { icon: '🛡️', title: 'High Barrier', description: 'Blocks oxygen, moisture, and light.' },
      { icon: '🎨', title: 'Digital Print', description: 'Unlimited colors, no plate fees.' },
      { icon: '📦', title: 'Low MOQ', description: 'Start from just 100 pieces.' },
      { icon: '⚡', title: 'Fast Turnaround', description: '15-20 days production.' },
      { icon: '📐', title: '14 Sizes', description: '90×130mm to 260×350mm.' }
    ],
    specifications: [
      { label: 'Material', value: 'Mattopp/VMPET/LLDPE' },
      { label: 'Thickness', value: '100 micron' },
      { label: 'MOQ', value: '100 pieces' },
      { label: 'Printing', value: 'Digital (Unlimited Colors)' },
      { label: 'Lead Time', value: '15-20 days' }
    ],
    useCases: ['Coffee bags', 'Snack packaging', 'Pet treats', 'Dried foods', 'Supplements'],
    certifications: ['Food Safe', 'Digital Print Quality'],
    comparisonAdvantage: 'Get custom branded packaging from 100 pieces — no minimum 10,000 order like traditional printing.',
    callToAction: 'Custom packaging from $100 — perfect for new brands and test markets.'
  },

  'conven-sup-clear-zip': {
    productId: 'conven-sup-clear-zip',
    headline: 'Clear Stand-Up Pouch — Show Off Your Product',
    targetAudience: ['Visual products', 'Snack brands', 'Candy makers', 'Food producers'],
    keyBenefits: [
      { icon: '👁️', title: 'Full Visibility', description: 'Crystal clear to showcase products.' },
      { icon: '🎨', title: 'Digital Print', description: 'Unlimited colors, vibrant graphics.' },
      { icon: '📦', title: 'Low MOQ', description: 'Start from 100 pieces.' },
      { icon: '🔒', title: 'Resealable', description: 'Zipper keeps contents fresh.' },
      { icon: '⚡', title: 'Quick Production', description: '15-20 days turnaround.' },
      { icon: '✈️', title: 'Free Shipping', description: 'Air freight included.' }
    ],
    specifications: [
      { label: 'Material', value: 'Glossy PET/LLDPE' },
      { label: 'MOQ', value: '100 pieces' },
      { label: 'Printing', value: 'Digital (Unlimited Colors)' },
      { label: 'Lead Time', value: '15-20 days' }
    ],
    useCases: ['Candies', 'Nuts', 'Snacks', 'Dried fruits', 'Samples'],
    certifications: ['Food Safe'],
    comparisonAdvantage: 'Your product is the hero. Clear packaging lets it shine.',
    callToAction: 'From $100 for 100 bags — let your product speak for itself.'
  },

  'conven-3ss-met-xzip': {
    productId: 'conven-3ss-met-xzip',
    headline: 'Flat Metalised Pouch — Cost-Effective & Premium',
    targetAudience: ['Sample products', 'Single-serve items', 'Lightweight products', 'Budget-conscious brands'],
    keyBenefits: [
      { icon: '💰', title: 'Cost Effective', description: 'Lower cost than stand-up pouches.' },
      { icon: '✨', title: 'Premium Look', description: 'Metalised finish looks professional.' },
      { icon: '📦', title: 'Flat Design', description: 'Perfect for lightweight products.' },
      { icon: '🎨', title: 'Full Print', description: 'Both sides printable.' },
      { icon: '⚡', title: 'Fast Production', description: '15-20 days delivery.' },
      { icon: '📐', title: 'Multiple Sizes', description: 'Various dimensions available.' }
    ],
    specifications: [
      { label: 'Material', value: 'Mattopp/VMPET/LLDPE' },
      { label: 'MOQ', value: '100 pieces' },
      { label: 'Lead Time', value: '15-20 days' }
    ],
    useCases: ['Samples', 'Sachets', 'Face masks', 'Single-serve snacks', 'Promotional items'],
    certifications: ['Food Safe'],
    comparisonAdvantage: 'Same premium look at lower cost. Perfect for samples and single-serve products.',
    callToAction: 'Affordable premium packaging — starting from $90.'
  },

  // ========== ECO DIGITAL PRODUCTS ==========
  'eco-standup': {
    productId: 'eco-standup',
    headline: 'Eco Stand-Up Pouch — Sustainable Without Compromise',
    targetAudience: ['Organic brands', 'Health food companies', 'Eco-conscious CPG', 'Specialty food producers'],
    keyBenefits: [
      { icon: '🌱', title: '3 Eco Options', description: 'PCR, Mono Recyclable, or Compostable.' },
      { icon: '🎨', title: 'Full Customization', description: 'Digital print with unlimited colors.' },
      { icon: '📦', title: 'Stand-Up Design', description: 'Great shelf presence and stability.' },
      { icon: '🔄', title: 'Recyclable/Compostable', description: 'End-of-life solution built in.' },
      { icon: '📜', title: 'Certified', description: 'EN13432 or recyclability certifications.' },
      { icon: '🌍', title: '30% Lower Carbon', description: 'Reduced environmental footprint.' }
    ],
    specifications: [
      { label: 'Materials', value: 'PCR/Bio-PE, Mono PE/PP, Compostable' },
      { label: 'MOQ', value: '1,000 pieces' },
      { label: 'Printing', value: 'Digital (Unlimited Colors)' },
      { label: 'Lead Time', value: '20-30 days' }
    ],
    useCases: ['Organic snacks', 'Health foods', 'Coffee & tea', 'Supplements', 'Pet treats'],
    certifications: ['EN13432', 'Recyclable', 'Bio-based'],
    comparisonAdvantage: 'Same great look as conventional, but with real sustainability credentials your customers trust.',
    callToAction: 'From $120 for 1,000 bags — make the switch to sustainable packaging.'
  },

  'eco-flatbottom': {
    productId: 'eco-flatbottom',
    headline: 'Eco Flat Bottom Bag — Premium Sustainability',
    targetAudience: ['Premium coffee', 'Specialty tea', 'Organic food', 'High-end snacks'],
    keyBenefits: [
      { icon: '📦', title: 'Flat Bottom', description: 'Maximum shelf stability and presence.' },
      { icon: '🌱', title: 'Eco Materials', description: 'PCR, Mono PE, or Compostable options.' },
      { icon: '🎨', title: 'Full Branding', description: '5 printable panels for maximum impact.' },
      { icon: '🔒', title: 'Resealable', description: 'Zipper keeps products fresh.' },
      { icon: '📜', title: 'Certified', description: 'Sustainability certifications available.' },
      { icon: '⚡', title: 'Digital Print', description: 'No plate fees, fast turnaround.' }
    ],
    specifications: [
      { label: 'Materials', value: 'PCR/Bio-PE, Mono PE/PP, Compostable' },
      { label: 'MOQ', value: '1,000 pieces' },
      { label: 'Lead Time', value: '25-35 days' }
    ],
    useCases: ['Premium coffee', 'Specialty tea', 'Organic granola', 'Dried fruits', 'Nuts'],
    certifications: ['Recyclable', 'Compostable Options'],
    comparisonAdvantage: 'Premium flat bottom design with sustainable materials. Best of both worlds.',
    callToAction: 'From $190 for 1,000 bags — premium eco packaging for premium products.'
  },

  'eco-boxbottom': {
    productId: 'eco-boxbottom',
    headline: 'Eco Box Bottom Pouch — Maximum Capacity, Minimum Impact',
    targetAudience: ['Bulk products', 'Family-size packaging', 'Coffee roasters', 'Food producers'],
    keyBenefits: [
      { icon: '📦', title: 'Box Bottom', description: 'Maximum capacity and stability.' },
      { icon: '🌱', title: 'Sustainable', description: 'Eco-friendly material options.' },
      { icon: '🎨', title: 'Full Print', description: 'Premium branding on all sides.' },
      { icon: '🔒', title: 'Resealable', description: 'Keep large quantities fresh.' },
      { icon: '📐', title: 'Large Sizes', description: 'Perfect for bulk packaging.' },
      { icon: '⚡', title: 'Digital Print', description: 'Low MOQ, no plates.' }
    ],
    specifications: [
      { label: 'Materials', value: 'PCR/Bio-PE, Mono PE/PP, Compostable' },
      { label: 'MOQ', value: '1,000 pieces' },
      { label: 'Lead Time', value: '25-35 days' }
    ],
    useCases: ['Large coffee bags', 'Family snacks', 'Bulk foods', 'Pet food', 'Wholesale packaging'],
    certifications: ['Recyclable', 'Bio-based Options'],
    comparisonAdvantage: 'Go big with your sustainability. Large capacity with eco credentials.',
    callToAction: 'From $170 for 1,000 bags — sustainable packaging for bigger products.'
  },

  'eco-sidegusset': {
    productId: 'eco-sidegusset',
    headline: 'Eco Side Gusset Bag — Classic Coffee Bag Style, Modern Sustainability',
    targetAudience: ['Coffee roasters', 'Tea brands', 'Traditional food producers', 'Specialty shops'],
    keyBenefits: [
      { icon: '☕', title: 'Coffee Classic', description: 'Traditional side gusset coffee bag style.' },
      { icon: '🌱', title: 'Eco Materials', description: 'PCR, Mono PE, or Compostable.' },
      { icon: '📦', title: 'Good Capacity', description: 'Side gussets add volume.' },
      { icon: '🎨', title: 'Full Branding', description: 'Large print area front and back.' },
      { icon: '🔒', title: 'Valve Compatible', description: 'Degassing valve for coffee.' },
      { icon: '⚡', title: 'Digital Print', description: 'No plates, fast delivery.' }
    ],
    specifications: [
      { label: 'Materials', value: 'PCR/Bio-PE, Mono PE/PP, Compostable' },
      { label: 'MOQ', value: '1,000 pieces' },
      { label: 'Lead Time', value: '20-30 days' }
    ],
    useCases: ['Coffee beans', 'Loose leaf tea', 'Dried foods', 'Traditional snacks'],
    certifications: ['Recyclable', 'Compostable Options'],
    comparisonAdvantage: 'The classic coffee bag look with modern eco materials. Tradition meets sustainability.',
    callToAction: 'From $140 for 1,000 bags — sustainable classic coffee bags.'
  },

  // ========== SAMPLE PRODUCTS ==========
  'sample-sizing-pack': {
    productId: 'sample-sizing-pack',
    headline: 'Try Before You Buy — 7 Sizes in One Pack',
    targetAudience: ['New brands', 'Product developers', 'Small businesses', 'Startups'],
    keyBenefits: [
      { icon: '📐', title: '7 Different Sizes', description: 'Find the perfect fit for your product.' },
      { icon: '💰', title: 'Cost Effective', description: 'Just $40 to test all sizes.' },
      { icon: '⚡', title: 'Fast Delivery', description: 'Ships in 3-5 business days.' },
      { icon: '✅', title: 'No Commitment', description: 'Test before placing bulk order.' },
      { icon: '🎯', title: 'Real Samples', description: 'Same quality as production bags.' },
      { icon: '📦', title: 'Unprinted', description: 'Focus on size, not design.' }
    ],
    specifications: [
      { label: 'Contents', value: '7 different pouch sizes' },
      { label: 'Price', value: '$40 per pack' },
      { label: 'Lead Time', value: '3-5 days' }
    ],
    useCases: ['Size testing', 'Product development', 'Packaging decisions', 'Client presentations'],
    certifications: [],
    comparisonAdvantage: 'Don\'t guess your packaging size. Test with real samples before committing to bulk orders.',
    callToAction: 'Order your sizing pack today — $40 could save you thousands in wrong orders.'
  },

  'sample-eco-material': {
    productId: 'sample-eco-material',
    headline: 'Feel the Difference — Eco Material Sample Pack',
    targetAudience: ['Sustainability managers', 'Brand owners', 'Product developers', 'Marketing teams'],
    keyBenefits: [
      { icon: '🌱', title: 'All Eco Options', description: 'Compostable, recyclable, bio-based samples.' },
      { icon: '👆', title: 'Touch & Feel', description: 'Experience material quality firsthand.' },
      { icon: '💰', title: 'Affordable', description: 'Just $40 to evaluate all options.' },
      { icon: '⚡', title: 'Quick Ship', description: '3-5 days delivery.' },
      { icon: '📋', title: 'Info Cards', description: 'Material specs included.' },
      { icon: '✅', title: 'Decision Ready', description: 'Choose the right eco material.' }
    ],
    specifications: [
      { label: 'Contents', value: 'Assorted eco-friendly materials' },
      { label: 'Price', value: '$40 per pack' },
      { label: 'Lead Time', value: '3-5 days' }
    ],
    useCases: ['Material evaluation', 'Sustainability planning', 'Client presentations', 'Team decisions'],
    certifications: [],
    comparisonAdvantage: 'See and feel the eco difference before committing. Make informed sustainable choices.',
    callToAction: 'Order your eco sample pack — touch sustainability before you commit.'
  },

  // ========== MISSING SAMPLE PRODUCTS ==========
  'sample-assorted-eco': {
    productId: 'sample-assorted-eco',
    headline: 'Assorted Eco Pouches — Touch All Sustainable Options',
    targetAudience: ['Sustainability-focused brands', 'Product developers', 'Marketing teams', 'Eco-conscious startups'],
    keyBenefits: [
      { icon: '🌱', title: 'Variety Pack', description: 'PCR/Bio, Recyclable, and Compostable materials included.' },
      { icon: '👆', title: 'Touch & Compare', description: 'Feel the difference between eco options.' },
      { icon: '💰', title: 'Free Samples', description: 'Just pay $40 shipping.' },
      { icon: '⚡', title: 'Quick Delivery', description: 'Ships in 3-5 business days.' },
      { icon: '📋', title: 'Material Info', description: 'Specs and certifications included.' },
      { icon: '✅', title: 'Informed Decision', description: 'Choose the right eco path for your brand.' }
    ],
    specifications: [
      { label: 'Contents', value: 'Mixed eco-friendly pouch samples' },
      { label: 'Price', value: 'Free + $40 shipping' },
      { label: 'Lead Time', value: '3-5 days' }
    ],
    useCases: ['Material testing', 'Sustainability planning', 'Client presentations', 'Brand decisions'],
    certifications: [],
    comparisonAdvantage: 'Try before you commit. Feel the quality of all eco materials before placing your order.',
    callToAction: 'Get your eco sample pack — free samples, just $40 shipping.'
  },

  'sample-top-film': {
    productId: 'sample-top-film',
    headline: 'Print Quality Sample — See Your Design in Full Scale',
    targetAudience: ['Design teams', 'Brand managers', 'Quality-focused brands', 'Packaging developers'],
    keyBenefits: [
      { icon: '🎨', title: 'Full Print Preview', description: 'See exact colors and quality before production.' },
      { icon: '📐', title: 'Large Format', description: '760mm x 1000mm printed film sample.' },
      { icon: '✅', title: 'Color Accuracy', description: 'Test your design colors in real conditions.' },
      { icon: '⚡', title: 'Fast Turnaround', description: '5-7 days delivery.' },
      { icon: '💰', title: 'Affordable', description: 'Just $20 + $40 shipping.' },
      { icon: '🔍', title: 'Detail Check', description: 'Inspect print quality up close.' }
    ],
    specifications: [
      { label: 'Size', value: '760mm x 1000mm' },
      { label: 'Type', value: 'Digital printed film' },
      { label: 'Price', value: '$20 + $40 shipping' },
      { label: 'Lead Time', value: '5-7 days' }
    ],
    useCases: ['Design approval', 'Color matching', 'Client presentations', 'Quality verification'],
    certifications: [],
    comparisonAdvantage: 'Never guess how your design will look. See the exact print quality before committing to bulk.',
    callToAction: 'Order your print sample — $60 to see exactly what you will get.'
  },

  'sample-hand-sealed': {
    productId: 'sample-hand-sealed',
    headline: 'Custom Size Sample — Test Your Exact Specifications',
    targetAudience: ['Custom product brands', 'Unique size requirements', 'Product developers', 'Quality-focused companies'],
    keyBenefits: [
      { icon: '✂️', title: 'Custom Sizes', description: 'Get samples in your exact dimensions.' },
      { icon: '🎨', title: 'Digital Printed', description: 'See your design on the actual pouch.' },
      { icon: '🔧', title: 'Hand Sealed', description: 'Precision sealed to your specifications.' },
      { icon: '⚡', title: 'Quick Production', description: '7-10 days delivery.' },
      { icon: '💰', title: 'Low Cost', description: 'Just $20 + $40 shipping.' },
      { icon: '✅', title: 'Full Customization', description: 'Exactly what your bulk order will be.' }
    ],
    specifications: [
      { label: 'Size', value: 'Custom to your specs' },
      { label: 'Type', value: 'Hand-sealed pouches' },
      { label: 'Price', value: '$20 + $40 shipping' },
      { label: 'Lead Time', value: '7-10 days' }
    ],
    useCases: ['Size verification', 'Fit testing', 'Client approval', 'Production planning'],
    certifications: [],
    comparisonAdvantage: 'Non-standard product? Get a sample in your exact size before committing to bulk.',
    callToAction: 'Order your custom sample — $60 to test your perfect fit.'
  },

  // ========== MISSING CONVENTIONAL PRODUCTS ==========
  'conven-3ss-clear-xzip': {
    productId: 'conven-3ss-clear-xzip',
    headline: 'Clear Flat Pouch — Maximum Product Visibility',
    targetAudience: ['Visual products', 'Sample sachets', 'Beauty brands', 'Food samples'],
    keyBenefits: [
      { icon: '👁️', title: 'Crystal Clear', description: 'Full product visibility for visual impact.' },
      { icon: '💰', title: 'Cost Effective', description: 'Flat design means lower cost.' },
      { icon: '🎨', title: 'Digital Print', description: 'Unlimited colors, no plate fees.' },
      { icon: '📦', title: 'Low MOQ', description: 'Start from just 100 pieces.' },
      { icon: '⚡', title: 'Fast Production', description: '15-20 days turnaround.' },
      { icon: '✈️', title: 'Free Shipping', description: 'Air freight included.' }
    ],
    specifications: [
      { label: 'Material', value: 'Glossy PET/LLDPE' },
      { label: 'MOQ', value: '100 pieces' },
      { label: 'Lead Time', value: '15-20 days' }
    ],
    useCases: ['Samples', 'Face masks', 'Sachets', 'Single-serve items', 'Promotional products'],
    certifications: ['Food Safe'],
    comparisonAdvantage: 'The most affordable way to showcase your product. Clear visibility at the lowest cost.',
    callToAction: 'From $90 for 100 bags — affordable transparency.'
  },

  'conven-3ss-clear-zip': {
    productId: 'conven-3ss-clear-zip',
    headline: 'Clear Flat Pouch with Zipper — Resealable Visibility',
    targetAudience: ['Snack brands', 'Candy makers', 'Sample products', 'Reusable packaging needs'],
    keyBenefits: [
      { icon: '👁️', title: 'Clear Visibility', description: 'Showcase your products perfectly.' },
      { icon: '🔒', title: 'Resealable', description: 'Zipper for repeated opening.' },
      { icon: '🎨', title: 'Digital Print', description: 'Unlimited colors available.' },
      { icon: '📦', title: 'Low MOQ', description: 'Start from 100 pieces.' },
      { icon: '⚡', title: 'Fast Turnaround', description: '15-20 days production.' },
      { icon: '💰', title: 'Affordable', description: 'Great value for resealable bags.' }
    ],
    specifications: [
      { label: 'Material', value: 'Glossy PET/LLDPE' },
      { label: 'MOQ', value: '100 pieces' },
      { label: 'Lead Time', value: '15-20 days' }
    ],
    useCases: ['Candies', 'Snacks', 'Dried fruits', 'Reusable samples', 'Multi-use products'],
    certifications: ['Food Safe'],
    comparisonAdvantage: 'Clear + resealable = perfect for products customers use multiple times.',
    callToAction: 'From $110 for 100 bags — resealable clarity.'
  },

  'conven-3ss-met-zip': {
    productId: 'conven-3ss-met-zip',
    headline: 'Metalised Flat Pouch with Zipper — Premium Protection',
    targetAudience: ['Coffee samples', 'Premium sachets', 'Light-sensitive products', 'Fresh-keeping needs'],
    keyBenefits: [
      { icon: '✨', title: 'Premium Look', description: 'Metalised finish for shelf appeal.' },
      { icon: '🛡️', title: 'High Barrier', description: 'Blocks light, oxygen, and moisture.' },
      { icon: '🔒', title: 'Resealable', description: 'Zipper keeps contents fresh.' },
      { icon: '🎨', title: 'Digital Print', description: 'Full color customization.' },
      { icon: '📦', title: 'Low MOQ', description: '100 pieces minimum.' },
      { icon: '⚡', title: 'Fast Delivery', description: '15-20 days production.' }
    ],
    specifications: [
      { label: 'Material', value: 'Mattopp/VMPET/LLDPE' },
      { label: 'MOQ', value: '100 pieces' },
      { label: 'Lead Time', value: '15-20 days' }
    ],
    useCases: ['Coffee samples', 'Tea sachets', 'Spices', 'Supplements', 'Premium samples'],
    certifications: ['Food Safe', 'High Barrier'],
    comparisonAdvantage: 'Maximum protection in a flat design. Perfect for premium samples and sachets.',
    callToAction: 'From $110 for 100 bags — premium protection, flat price.'
  },

  'conven-sup-clear-xzip': {
    productId: 'conven-sup-clear-xzip',
    headline: 'Clear Stand-Up Pouch — Shelf Presence with Visibility',
    targetAudience: ['Visual products', 'Candy brands', 'Snack producers', 'Retail packaging'],
    keyBenefits: [
      { icon: '👁️', title: 'Full Visibility', description: 'Clear material showcases your product.' },
      { icon: '📐', title: 'Stand Up Design', description: 'Great shelf presence.' },
      { icon: '🎨', title: 'Digital Print', description: 'Unlimited colors available.' },
      { icon: '📦', title: 'Low MOQ', description: 'Start from 100 pieces.' },
      { icon: '⚡', title: 'Fast Production', description: '15-20 days turnaround.' },
      { icon: '✈️', title: 'Free Shipping', description: 'Air freight included.' }
    ],
    specifications: [
      { label: 'Material', value: 'Glossy PET/LLDPE' },
      { label: 'MOQ', value: '100 pieces' },
      { label: 'Lead Time', value: '15-20 days' }
    ],
    useCases: ['Candies', 'Snacks', 'Dried products', 'Visual packaging', 'Retail display'],
    certifications: ['Food Safe'],
    comparisonAdvantage: 'Stand up and show off. Your product is the star with clear visibility.',
    callToAction: 'From $90 for 100 bags — stand up and be seen.'
  },

  'conven-sup-met-xzip': {
    productId: 'conven-sup-met-xzip',
    headline: 'Metalised Stand-Up Pouch — Premium Without Zipper',
    targetAudience: ['Single-serve products', 'Snack brands', 'Coffee singles', 'Premium samples'],
    keyBenefits: [
      { icon: '✨', title: 'Premium Look', description: 'Metalised finish for maximum impact.' },
      { icon: '🛡️', title: 'High Barrier', description: 'Excellent protection from elements.' },
      { icon: '📐', title: 'Stand Up', description: 'Great shelf presence.' },
      { icon: '🎨', title: 'Digital Print', description: 'Full color customization.' },
      { icon: '📦', title: 'Low MOQ', description: '100 pieces minimum.' },
      { icon: '💰', title: 'Cost Effective', description: 'No zipper = lower cost.' }
    ],
    specifications: [
      { label: 'Material', value: 'Mattopp/VMPET/LLDPE' },
      { label: 'MOQ', value: '100 pieces' },
      { label: 'Lead Time', value: '15-20 days' }
    ],
    useCases: ['Single-serve snacks', 'Coffee pods', 'Premium samples', 'Gift packaging'],
    certifications: ['Food Safe', 'High Barrier'],
    comparisonAdvantage: 'Premium metalised look without the zipper cost. Perfect for single-use products.',
    callToAction: 'From $90 for 100 bags — premium look, smart price.'
  },

  // ========== MISSING ECO DIGITAL PRODUCTS ==========
  'eco-3side': {
    productId: 'eco-3side',
    headline: 'Eco 3 Side Seal — Simple Sustainability',
    targetAudience: ['Sample products', 'Sachets', 'Face masks', 'Single-serve eco brands'],
    keyBenefits: [
      { icon: '🌱', title: 'Eco Materials', description: 'PCR, Mono PE, or Compostable options.' },
      { icon: '💰', title: 'Cost Effective', description: 'Flat design at sustainable pricing.' },
      { icon: '🎨', title: 'Digital Print', description: 'Unlimited colors, no plates.' },
      { icon: '🌍', title: '30% Lower Carbon', description: 'Reduced environmental impact.' },
      { icon: '📦', title: 'Versatile', description: 'Works for many product types.' },
      { icon: '📜', title: 'Certified', description: 'Sustainability certifications available.' }
    ],
    specifications: [
      { label: 'Materials', value: 'PCR/Bio-PE, Mono PE/PP, Compostable' },
      { label: 'MOQ', value: '1,000 pieces' },
      { label: 'Lead Time', value: '20-30 days' }
    ],
    useCases: ['Samples', 'Sachets', 'Face masks', 'Single-serve items', 'Promotional products'],
    certifications: ['Recyclable', 'Compostable Options'],
    comparisonAdvantage: 'The simplest sustainable packaging. Low cost, low impact.',
    callToAction: 'From $100 for 1,000 bags — simple eco packaging.'
  },

  'eco-centerseal': {
    productId: 'eco-centerseal',
    headline: 'Eco Center Seal — Classic Style, Modern Sustainability',
    targetAudience: ['Traditional products', 'Candy brands', 'Snack producers', 'Cost-conscious eco brands'],
    keyBenefits: [
      { icon: '🌱', title: 'Sustainable', description: 'PCR, Recyclable, or Compostable.' },
      { icon: '💰', title: 'Economical', description: 'Simple design = lower cost.' },
      { icon: '🎨', title: 'Full Wrap Print', description: 'Print wraps around the tube.' },
      { icon: '📦', title: 'Classic Design', description: 'Traditional flow-pack style.' },
      { icon: '🌍', title: 'Eco Certified', description: 'Sustainability credentials.' },
      { icon: '⚡', title: 'Digital Print', description: 'Fast turnaround, no plates.' }
    ],
    specifications: [
      { label: 'Materials', value: 'PCR/Bio-PE, Mono PE/PP, Compostable' },
      { label: 'MOQ', value: '1,000 pieces' },
      { label: 'Lead Time', value: '20-30 days' }
    ],
    useCases: ['Candies', 'Bars', 'Cookies', 'Traditional snacks'],
    certifications: ['Recyclable', 'Bio-based Options'],
    comparisonAdvantage: 'The classic flow-pack now in sustainable materials. Tradition meets eco.',
    callToAction: 'From $100 for 1,000 bags — eco center seal.'
  },

  'eco-quadseal': {
    productId: 'eco-quadseal',
    headline: 'Eco Quad Seal — Maximum Stability, Minimum Impact',
    targetAudience: ['Premium brands', 'Coffee roasters', 'Large capacity products', 'Retail packaging'],
    keyBenefits: [
      { icon: '📦', title: 'Quad Seal', description: 'Four-corner stability.' },
      { icon: '🌱', title: 'Eco Options', description: 'PCR, Mono PE, or Compostable.' },
      { icon: '🎨', title: '4 Print Panels', description: 'Maximum branding space.' },
      { icon: '📐', title: 'Premium Look', description: 'Squared appearance on shelf.' },
      { icon: '🌍', title: 'Sustainable', description: '30% lower carbon footprint.' },
      { icon: '⚡', title: 'Digital Print', description: 'Low MOQ, fast production.' }
    ],
    specifications: [
      { label: 'Materials', value: 'PCR/Bio-PE, Mono PE/PP, Compostable' },
      { label: 'MOQ', value: '1,000 pieces' },
      { label: 'Lead Time', value: '25-35 days' }
    ],
    useCases: ['Premium coffee', 'Large snacks', 'Pet food', 'Retail display'],
    certifications: ['Recyclable', 'Compostable Options'],
    comparisonAdvantage: 'The most stable pouch design now in sustainable materials.',
    callToAction: 'From $160 for 1,000 bags — premium eco quad seal.'
  },

  // ========== BOXES PRODUCTS ==========
  'box-corrugated-custom': {
    productId: 'box-corrugated-custom',
    headline: 'Premium Corrugated Mailer Box — FSC Recycled, Luxury Finish',
    targetAudience: ['Coffee roasters', 'Tea brands', 'Chocolate makers', 'Artisan food producers', 'Gift box brands'],
    keyBenefits: [
      { icon: '🎯', title: 'CMYK Printing', description: 'Full-color custom printing.' },
      { icon: '✨', title: 'Matte + Foil', description: 'Matte lamination with gold foil option.' },
      { icon: '🌱', title: 'FSC Certified', description: 'Recycled paper, fully recyclable.' },
      { icon: '📦', title: 'Rigid Structure', description: '2.0mm grayboard for premium feel.' },
      { icon: '💰', title: '2 Sizes', description: '500g and 1kg options available.' },
      { icon: '🚢', title: 'Sea Freight', description: 'Shipping included (40-60 days).' }
    ],
    specifications: [
      { label: 'Material', value: '157g art paper + 2.0mm grayboard' },
      { label: 'Sizes', value: '500g (130×85×35mm), 1kg (270×85×35mm)' },
      { label: 'MOQ', value: '200 pieces' },
      { label: 'Lead Time', value: '30 days production + 40-60 days shipping' }
    ],
    useCases: ['Coffee gift boxes', 'Premium tea packaging', 'Chocolate bars', 'Artisan food gifts', 'Subscription boxes'],
    certifications: ['FSC Certified', 'Recyclable', 'Food Safe'],
    comparisonAdvantage: 'Premium rigid boxes with gold foil and embossing at low MOQ. Perfect for brands that want luxury without 5,000+ piece minimums.',
    callToAction: 'From $514.50 for 200 boxes — start your premium packaging today.'
  },

  'box-tuck-custom': {
    productId: 'box-tuck-custom',
    headline: 'Custom Tuck Box — Gold Foil & Embossing for Premium Products',
    targetAudience: ['Chocolate brands', 'Tea companies', 'Confectionery makers', 'Premium snack brands', 'Gift retailers'],
    keyBenefits: [
      { icon: '✨', title: 'Gold Foil', description: 'Luxurious gold foil stamping.' },
      { icon: '💎', title: 'Embossed', description: 'Tactile embossed details.' },
      { icon: '🎨', title: 'Matte Finish', description: 'Elegant matte lamination.' },
      { icon: '🌱', title: 'FSC Paper', description: '250g white card, recyclable.' },
      { icon: '📦', title: 'Tuck Closure', description: 'Easy tuck-end opening.' },
      { icon: '🚢', title: 'Sea Freight', description: 'Shipping included in price.' }
    ],
    specifications: [
      { label: 'Material', value: '250g White Card' },
      { label: 'Size', value: '100g Box: 81(W) × 162(L) × 15(H) mm' },
      { label: 'MOQ', value: '200 pieces' },
      { label: 'Lead Time', value: '30 days + 40-60 days shipping' }
    ],
    useCases: ['Chocolate bars', 'Tea sachets', 'Small confectionery', 'Premium cookies', 'Gift cards'],
    certifications: ['FSC Certified', 'Recyclable', 'Food Safe'],
    comparisonAdvantage: 'Luxury tuck boxes with gold foil and embossing from just 200 pieces. Compete with premium brands without massive inventory.',
    callToAction: 'From $1,105.50 for 200 boxes — luxury packaging made accessible.'
  }
};

// Helper function to get selling points by product ID
export const getAISellingPoints = (productId: string): AISellingPoint | null => {
  return AI_SELLING_POINTS[productId] || null;
};

// Helper to check if a product has AI selling points
export const hasAISellingPoints = (productId: string): boolean => {
  return productId in AI_SELLING_POINTS;
};
