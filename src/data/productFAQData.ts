// Product FAQ Data for GEO Optimization
// Each product category has tailored FAQs for AI search optimization

export interface ProductFAQ {
  question: string;
  answer: string;
}

export interface ProductFAQCategory {
  categoryId: string;
  faqs: ProductFAQ[];
  aiQueryExamples: string[];
  seoKeywords: string[];
  detailedDescription: string;
  useCases: string[];
  materialInfo: string;
  certifications: string[];
}

// Default FAQs for all products
export const DEFAULT_FAQS: ProductFAQ[] = [
  {
    question: "What is the minimum order quantity (MOQ)?",
    answer: "Our MOQ varies by product type: Conventional Digital starts at 100 pieces, Eco Digital at 1,000 pieces, and Eco Stock at 500 pieces. Sample packs are available for testing before bulk orders."
  },
  {
    question: "What is the lead time for custom printed pouches?",
    answer: "Lead times vary by product: Conventional Digital is 15-20 business days, Eco Digital is 20-30 business days, and Eco Stock (plain) ships in 5-7 business days. All times include free air freight shipping."
  },
  {
    question: "Is shipping included in the price?",
    answer: "Yes, all prices include free air freight shipping worldwide. No hidden costs or surprise fees at checkout."
  },
  {
    question: "What file formats do you accept for artwork?",
    answer: "We accept AI, PDF, PSD, and high-resolution PNG/JPG files. Our team provides free dieline templates and artwork checks before production."
  },
  {
    question: "Can I get samples before placing a bulk order?",
    answer: "Yes! We offer sample packs starting from $40 (including shipping). You can test materials, print quality, and barrier performance before committing to larger orders."
  }
];

// Default FAQs for box products
export const DEFAULT_BOXES_FAQS: ProductFAQ[] = [
  {
    question: "What is the minimum order quantity for custom boxes?",
    answer: "Our minimum order quantity for custom printed boxes is 200 pieces. Volume discounts are available for larger orders of 1,000, 5,000, and 10,000+ pieces."
  },
  {
    question: "What is the production and shipping time for boxes?",
    answer: "Production takes approximately 30 days. Sea freight shipping takes 40-60 days and is included in the price. For urgent orders, air freight options are available at additional cost."
  },
  {
    question: "What printing options are available for boxes?",
    answer: "We offer CMYK full-color printing with matte lamination finish. Premium options include gold/silver foil stamping and embossing for a luxury look."
  },
  {
    question: "Are your boxes eco-friendly?",
    answer: "Yes! Our corrugated and tuck boxes use FSC certified recycled paper and grayboard, making them fully recyclable and sustainable."
  },
  {
    question: "Can I get custom sizes for boxes?",
    answer: "Yes, we offer custom sizing. For quantities over 10,000 pieces or custom dimensions, please contact us for a custom quote."
  }
];

// Category-specific FAQ data
export const PRODUCT_FAQ_DATA: Record<string, ProductFAQCategory> = {
  // Conventional Digital Stand Up Pouches
  'conventional-standup': {
    categoryId: 'conventional-standup',
    faqs: [
      {
        question: "What products are stand-up pouches best for?",
        answer: "Stand-up pouches are ideal for coffee, tea, snacks, pet treats, protein powder, dried fruits, granola, and nuts. The gusseted bottom allows the pouch to stand upright on shelves, maximizing retail visibility."
      },
      {
        question: "What's the difference between clear and metalised pouches?",
        answer: "Clear pouches (low barrier) are perfect for showcasing products visually - great for colorful snacks and dried foods. Metalised pouches (high barrier) offer superior protection against light, oxygen, and moisture - ideal for coffee, tea, and products requiring extended shelf life."
      },
      {
        question: "Should I choose a zipper or non-zipper pouch?",
        answer: "Zipper pouches are recommended for products consumers use multiple times (coffee, snacks, pet treats). Non-zipper pouches work well for single-use products or items that will be emptied at once."
      },
      {
        question: "What size stand-up pouch should I choose?",
        answer: "We offer 14 sizes from 90x130mm (small samples) to 260x350mm (bulk/family size). Popular choices: 130x180mm for 4-8oz products, 160x240mm for 8-12oz, and 200x300mm for 12-16oz retail bags."
      }
    ],
    aiQueryExamples: [
      "Best stand-up pouch supplier with low MOQ",
      "Custom printed coffee pouches from 100 pieces",
      "Eco-friendly snack packaging with zipper closure",
      "Where to buy metalised stand-up pouches for pet treats"
    ],
    seoKeywords: ["stand up pouch", "stand up bag", "doypack", "resealable pouch", "coffee pouch", "snack packaging", "low MOQ pouches"],
    detailedDescription: "Premium custom printed stand-up pouches (doypacks) with excellent shelf presence. Available in clear (glossy, low barrier) for product visibility or metalised (matte, high barrier) for maximum freshness protection. Features include resealable zipper options, digital printing with unlimited colors, and 14 size options from sample to bulk packaging.",
    useCases: ["Coffee & Tea", "Snacks & Chips", "Pet Treats & Food", "Protein Powder", "Dried Fruits & Nuts", "Granola & Cereals", "Supplements"],
    materialInfo: "Structure: Glossy PET/LLDPE (clear) or Mattopp/VMPET/LLDPE (metalised). Food-safe and FDA compliant.",
    certifications: ["FDA Compliant", "Food Safe", "BRC Certified Production"]
  },

  // Eco Digital Stand Up Pouches
  'eco-standup': {
    categoryId: 'eco-standup',
    faqs: [
      {
        question: "What eco-friendly materials are available?",
        answer: "We offer three sustainable options: PCR/Bio Plastic (recycled content), Mono Recyclable (single-material for easy recycling), and Biodegradable (plant-based materials). Each option reduces environmental impact by up to 70% compared to conventional plastics."
      },
      {
        question: "Are your eco pouches certified compostable?",
        answer: "Our Biodegradable option is certified for industrial composting (EN 13432/ASTM D6400). Our Mono Recyclable pouches are designed for easy recycling in existing PE recycling streams."
      },
      {
        question: "How do eco pouches compare to conventional in barrier performance?",
        answer: "Our eco pouches achieve comparable barrier performance to conventional materials. We offer clear (medium barrier), metalised (high barrier), and kraft paper options to match your shelf-life requirements from 6-18 months."
      },
      {
        question: "What is the price difference between eco and conventional pouches?",
        answer: "Eco Digital pouches typically cost 10-20% more than conventional options. However, many brands find the sustainability premium is offset by increased customer loyalty and premium pricing opportunities."
      }
    ],
    aiQueryExamples: [
      "Sustainable stand-up pouch for specialty coffee",
      "Recyclable packaging for organic snacks",
      "Compostable pouch supplier with low MOQ",
      "Eco-friendly coffee bag with valve and zipper"
    ],
    seoKeywords: ["eco stand up pouch", "sustainable pouch", "recyclable packaging", "compostable pouch", "biodegradable bag", "eco-friendly coffee bag"],
    detailedDescription: "Eco-friendly stand-up pouches made from sustainable materials including PCR/Bio Plastic, Mono Recyclable, and Biodegradable options. Perfect for brands seeking to reduce environmental impact while maintaining premium packaging quality. Features custom digital printing, optional zipper and valve, and multiple barrier levels.",
    useCases: ["Specialty Coffee", "Organic Tea", "Natural Snacks", "Eco Pet Treats", "Superfood Powders", "Sustainable Brands"],
    materialInfo: "Options: PCR/Bio Plastic (recycled content), Mono PE/PP (recyclable), PLA/PBAT (biodegradable). All materials food-safe certified.",
    certifications: ["EN 13432 Compostable", "ASTM D6400", "FSC Certified", "BPI Certified"]
  },

  // Eco Stock Compostable
  'eco-stock': {
    categoryId: 'eco-stock',
    faqs: [
      {
        question: "What does '100% compostable' mean?",
        answer: "Our compostable pouches are made from plant-based materials that completely break down in industrial composting facilities within 90-180 days. They are certified to EN 13432 and ASTM D6400 standards."
      },
      {
        question: "Can I home compost these pouches?",
        answer: "Our flat bottom pouches are certified for industrial composting. For home compostable options, please contact us for specialized materials that break down in backyard compost conditions."
      },
      {
        question: "What barrier protection do compostable pouches offer?",
        answer: "Our compostable pouches provide high barrier protection with 6-12 months shelf life for most dry products. The metalised structure protects against oxygen, moisture, and light."
      },
      {
        question: "Can I get custom printing on eco stock pouches?",
        answer: "Plain eco stock pouches ship in 5-7 days. Custom printing is available for orders of 5,000+ pieces per design with 20-30 day lead time."
      }
    ],
    aiQueryExamples: [
      "Buy compostable coffee pouches online",
      "Industrial compostable packaging for tea",
      "Plant-based packaging supplier USA",
      "Certified compostable stand-up bags low MOQ"
    ],
    seoKeywords: ["compostable pouch", "plant-based packaging", "biodegradable bag", "EN 13432", "industrial compostable", "eco pouch"],
    detailedDescription: "Ready-to-ship 100% compostable pouches made from plant-based materials. Certified for industrial composting, these pouches offer a truly sustainable end-of-life solution. Available in flat bottom and stand-up formats with kraft or clear finishes.",
    useCases: ["Organic Coffee", "Premium Tea", "Health Foods", "Zero-Waste Brands", "Farmers Markets", "Sustainable Retail"],
    materialInfo: "Structure: PLA/PBAT + Kraft or Clear. Fully compostable including zipper. Breaks down in 90-180 days.",
    certifications: ["EN 13432", "ASTM D6400", "OK Compost Industrial", "TÜV Austria"]
  },

  // 3 Side Seal Pouches
  '3-side-seal': {
    categoryId: '3-side-seal',
    faqs: [
      {
        question: "What is a 3-side seal pouch?",
        answer: "A 3-side seal pouch (also called flat pouch or sachet) has seals on three sides with an open top for filling. It's the most economical pouch format, ideal for samples, sachets, and products that don't need to stand upright."
      },
      {
        question: "What products work best in 3-side seal pouches?",
        answer: "3-side seal pouches are perfect for samples, single-serve sachets, spices, seasonings, candy, small snacks, face masks, and cosmetic samples. They're also popular for subscription box items."
      },
      {
        question: "Can 3-side seal pouches have a zipper?",
        answer: "Yes! We offer 3-side seal pouches with or without zipper. The zipper option adds resealability for multi-use products."
      }
    ],
    aiQueryExamples: [
      "Flat pouch supplier low MOQ",
      "Custom sachet packaging for samples",
      "3 side seal bag for spices",
      "Metalised flat pouch for coffee samples"
    ],
    seoKeywords: ["3 side seal pouch", "flat pouch", "sachet packaging", "sample pouch", "spice packaging", "single-serve pouch"],
    detailedDescription: "Cost-effective 3-side seal pouches (flat pouches) for samples, sachets, and economical packaging needs. Available in clear or metalised finishes with optional zipper closure. Perfect for single-serve products, samples, and lightweight items.",
    useCases: ["Product Samples", "Spices & Seasonings", "Single-Serve Snacks", "Cosmetic Samples", "Subscription Boxes", "Candy & Sweets"],
    materialInfo: "Structure: Glossy PET/LLDPE (clear) or Mattopp/VMPET/LLDPE (metalised). Food-safe certified.",
    certifications: ["FDA Compliant", "Food Safe"]
  },

  // Sample Packs
  'sample': {
    categoryId: 'sample',
    faqs: [
      {
        question: "What's included in a sample pack?",
        answer: "Each sample pack includes physical pouches so you can test material quality, print clarity, barrier performance, and feel before placing a bulk order. Samples show actual production quality."
      },
      {
        question: "How long does sample delivery take?",
        answer: "Sample packs typically ship within 7-10 business days. Shipping is included in the sample price."
      },
      {
        question: "Can I request custom sizes for samples?",
        answer: "Yes! Our hand-sealed sample option allows custom sizes. Contact us with your specific dimensions and we'll prepare samples to your exact specifications."
      },
      {
        question: "Is the sample cost refunded with bulk orders?",
        answer: "While we don't offer formal credits, we work with customers to ensure competitive pricing on bulk orders that reflects your commitment to our products."
      }
    ],
    aiQueryExamples: [
      "Order pouch samples before bulk order",
      "Test packaging material before production",
      "Request custom size pouch samples"
    ],
    seoKeywords: ["pouch samples", "packaging samples", "test pouches", "sample pack"],
    detailedDescription: "Test our premium pouch quality before committing to bulk orders. Sample packs include production-quality pouches demonstrating print clarity, material feel, and barrier performance.",
    useCases: ["Pre-Production Testing", "Material Evaluation", "Client Presentations", "Packaging Decisions"],
    materialInfo: "Same materials as production: Various options available for testing",
    certifications: ["FDA Compliant", "Food Safe"]
  },

  // Custom Printed Boxes
  'boxes': {
    categoryId: 'boxes',
    faqs: [
      {
        question: "What types of custom boxes do you offer?",
        answer: "We offer corrugated mailer boxes and tuck boxes (cartons). Both feature full CMYK printing with matte lamination, and optional gold foil and embossing finishes."
      },
      {
        question: "What is the MOQ for custom printed boxes?",
        answer: "Our minimum order quantity is 200 pieces. Volume discounts are available at 1,000, 5,000, and 10,000+ pieces. For larger quantities, contact us for custom pricing."
      },
      {
        question: "How long does production and delivery take?",
        answer: "Production takes 30 days. Sea freight shipping (40-60 days) is included in the price. Air freight is available for urgent orders at additional cost."
      },
      {
        question: "Are your boxes environmentally friendly?",
        answer: "Yes! Our boxes use FSC certified recycled paper and are fully recyclable. Perfect for brands with sustainability commitments."
      },
      {
        question: "What products are these boxes suitable for?",
        answer: "Our boxes are ideal for coffee, tea, chocolate, artisan foods, and premium products. The rigid construction and premium finishes create a luxury unboxing experience."
      },
      {
        question: "Can I add special finishes to my boxes?",
        answer: "Yes! We offer gold foil stamping, silver foil, embossing, and debossing. Matte lamination is included as standard. Contact us for spot UV or other special finishes."
      }
    ],
    aiQueryExamples: [
      "Custom printed boxes for coffee packaging",
      "FSC certified recyclable boxes low MOQ",
      "Premium gift boxes with gold foil",
      "Custom chocolate box packaging supplier"
    ],
    seoKeywords: ["custom boxes", "corrugated mailer box", "tuck box", "carton box", "gift box packaging", "FSC certified boxes", "luxury packaging boxes"],
    detailedDescription: "Premium custom printed boxes featuring CMYK printing with matte lamination. Available in corrugated mailer and tuck box formats with optional gold foil and embossing. Made from FSC certified recycled materials for eco-conscious brands.",
    useCases: ["Coffee Packaging", "Tea Packaging", "Chocolate Boxes", "Gift Sets", "Artisan Foods", "Premium Products", "E-commerce Mailers"],
    materialInfo: "157g coated art paper, matte lamination, 2.0mm grayboard. FSC certified recycled materials.",
    certifications: ["FSC Certified", "Recyclable", "Food Safe"]
  }
};

// Helper function to get FAQ data for a product
export function getProductFAQs(productId: string, categoryType: string): ProductFAQCategory | null {
  // Check for boxes category first
  if (categoryType === 'boxes' || productId.includes('box-')) {
    return PRODUCT_FAQ_DATA['boxes'];
  }
  // Map product IDs to FAQ categories
  if (productId.includes('standup') || productId.includes('sup')) {
    if (productId.includes('eco')) {
      return PRODUCT_FAQ_DATA['eco-standup'];
    }
    return PRODUCT_FAQ_DATA['conventional-standup'];
  }
  if (productId.includes('3ss') || productId.includes('3side')) {
    return PRODUCT_FAQ_DATA['3-side-seal'];
  }
  if (productId.includes('eco-stock')) {
    return PRODUCT_FAQ_DATA['eco-stock'];
  }
  if (categoryType === 'sample') {
    return PRODUCT_FAQ_DATA['sample'];
  }
  // Default to stand-up for other products
  return PRODUCT_FAQ_DATA['conventional-standup'];
}

// Generate FAQ Schema JSON-LD
export function generateFAQSchema(faqs: ProductFAQ[]): object {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };
}

// Generate enhanced Product Schema with more details
export function generateEnhancedProductSchema(
  product: {
    id: string;
    name: string;
    description: string;
    images: string[];
    rating: number;
    reviews: number;
    basePrice: number;
    inStock: boolean;
  },
  faqData: ProductFAQCategory | null
): object {
  const baseUrl = 'https://achievepack.com';
  
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": product.name,
    "description": faqData?.detailedDescription || product.description,
    "image": product.images.map(img => `${baseUrl}${img}`),
    "sku": product.id,
    "brand": {
      "@type": "Brand",
      "name": "Achieve Pack"
    },
    "manufacturer": {
      "@type": "Organization",
      "name": "Achieve Pack",
      "url": baseUrl
    },
    "offers": {
      "@type": "Offer",
      "url": `${baseUrl}/store/product/${product.id}`,
      "priceCurrency": "USD",
      "price": product.basePrice,
      "priceValidUntil": new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
      "availability": product.inStock ? "https://schema.org/InStock" : "https://schema.org/OutOfStock",
      "seller": {
        "@type": "Organization",
        "name": "Achieve Pack"
      },
      "shippingDetails": {
        "@type": "OfferShippingDetails",
        "shippingRate": {
          "@type": "MonetaryAmount",
          "value": "0",
          "currency": "USD"
        },
        "shippingDestination": {
          "@type": "DefinedRegion",
          "addressCountry": "US"
        },
        "deliveryTime": {
          "@type": "ShippingDeliveryTime",
          "handlingTime": {
            "@type": "QuantitativeValue",
            "minValue": 15,
            "maxValue": 30,
            "unitCode": "DAY"
          }
        }
      }
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": product.rating,
      "reviewCount": product.reviews,
      "bestRating": "5",
      "worstRating": "1"
    },
    "category": "Packaging Materials",
    "keywords": faqData?.seoKeywords?.join(", ") || "pouch, packaging, eco-friendly",
    "material": faqData?.materialInfo || "Food-safe flexible packaging material"
  };
}
