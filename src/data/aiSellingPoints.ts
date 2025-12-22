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
      { icon: '☕', title: 'Coffee Ready', description: 'High barrier keeps coffee fresh 6-12 months.' },
      { icon: '🌾', title: 'Natural Kraft Look', description: 'Organic aesthetic appeals to eco-consumers.' },
      { icon: '🔒', title: 'Resealable Zipper', description: 'One-sided zipper keeps contents fresh.' },
      { icon: '📦', title: 'Flat Bottom', description: 'Stands upright on retail shelves.' },
      { icon: '🌱', title: '100% Compostable', description: 'Industrial composting certified.' },
      { icon: '⏱️', title: 'Quick Ship', description: '5-7 days from stock.' }
    ],
    specifications: [
      { label: 'Material', value: 'Natural Kraft - High Barrier (Matte)' },
      { label: 'Size', value: '140mm x 290mm + 80mm' },
      { label: 'MOQ', value: '500 pieces' },
      { label: 'Shelf Life', value: '6-12 months' },
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
      { icon: '🛡️', title: 'High Barrier', description: '6-12 months shelf life.' },
      { icon: '⚡', title: 'Fast Delivery', description: '5-7 days from stock.' }
    ],
    specifications: [
      { label: 'Material', value: 'Milky Clear - High Barrier (Glossy)' },
      { label: 'Size', value: '140mm x 290mm + 80mm' },
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
