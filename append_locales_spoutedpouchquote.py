import json, fcntl, os

locales_path = 'src/locales/en.json'

data_to_add = {
  "title": "Quotation: Spouted Stand Up Pouch - Pouch.eco",
  "backToHome": "Back to Home",
  "header": {
    "quotation": "Quotation",
    "date": "Date:",
    "validity": "Validity: 30 Days"
  },
  "productOverview": {
    "includedDetails": "Included Details",
    "spoutBadge": "Spout 9.6mm",
    "spoutTitle": "9.6mm Spout with Cap",
    "spoutDesc": "Standard 9.6mm spout with screw cap for easy pouring and resealing. Perfect for liquids, gels, and semi-liquids.",
    "surfaceBadge": "Surface Finish",
    "surfaceTitle": "Glossy Surface Finish",
    "surfaceDesc": "High-shine glossy finish that enhances color vibrancy and provides a premium shelf appeal. Included in this quotation.",
    "dieCutNote": "Note:",
    "dieCutText": "Spout die cut fee of $300/size applies for new spout position or custom placement."
  },
  "productDetails": {
    "title": "Spouted Stand Up Pouch",
    "description": "Premium spouted stand up pouch ideal for liquid and semi-liquid products. Features a convenient 9.6mm spout for easy dispensing and bio-based materials for sustainability.",
    "materialStructure": "Material Structure",
    "materialTitle": "MOPP 20 / AL 7 / NY 15 / PE 110 Bio-based",
    "bioBadge": "Bio-based Material",
    "materials": [
      "Outer: MOPP 20μ (Matte Finish, Printable)",
      "Middle 1: Aluminum Foil 7μ (High Barrier)",
      "Middle 2: Nylon 15μ (Puncture Resistance)",
      "Inner: PE 110μ Bio-based (Heat Sealant)"
    ],
    "totalThickness": "Total Thickness: 152 micron",
    "keyFeaturesTitle": "Key Features",
    "keyFeatures": [
      "Bio-based PE: Inner layer made from renewable bio-based polyethylene.",
      "High Barrier: Aluminum foil provides excellent oxygen and moisture barrier.",
      "Liquid Safe: Perfect for beverages, sauces, gels, and liquid products.",
      "Digital Print: High-quality digital printing with vibrant colors."
    ],
    "certificationsTitle": "Certifications & Standards",
    "certBioPE": "Bio-PE",
    "certBRC": "BRC Food Safety",
    "bioLogoTitle": "Bio-PE Logo Available for Your Artwork",
    "bioLogoDesc": "Communicate your sustainability commitment directly on your packaging. The Bio-PE certification logo can be incorporated into your artwork design, providing instant visual proof to consumers that your pouch uses renewable, bio-based materials.",
    "bioLogoBenefits": [
      "Demonstrates environmental responsibility",
      "Builds consumer trust and brand credibility",
      "Differentiates your product on retail shelves"
    ],
    "includedOptionsTitle": "Included Options",
    "options": {
      "structure": "Stand Up Structure",
      "spout": "9.6mm Spout",
      "surface": "Glossy Surface",
      "barrier": "Aluminum Barrier",
      "material": "Bio-based PE"
    }
  },
  "dimensions": {
    "title": "Quote Dimensions",
    "pouchType": "Spouted Stand Up Pouch",
    "size": "110 × 160",
    "unit": "mm",
    "gusset": "60mm Gusset",
    "specs": "Spout: 9.6mm | Thickness: 152μ",
    "note": "This quotation is for a single size. Contact us for additional sizes or custom dimensions."
  },
  "pricing": {
    "title": "Digital Print Pricing (Low MOQ)",
    "subtitle": "No plate costs. Vibrant digital printing.",
    "headers": {
      "qty": "Qty (pcs)",
      "unitPrice": "Unit Price (USD)",
      "total": "Total (USD)",
      "weight": "Est. Weight"
    },
    "rows": [
      {"qty": "1,000", "unitPrice": "$0.58", "total": "$580.00", "weight": "20 kg"},
      {"qty": "2,000", "unitPrice": "$0.33", "total": "$660.00", "weight": "40 kg"},
      {"qty": "4,000", "unitPrice": "$0.29", "total": "$1,160.00", "weight": "80 kg"},
      {"qty": "5,000", "unitPrice": "$0.27", "total": "$1,350.00", "weight": "100 kg"},
      {"qty": "10,000", "unitPrice": "$0.23", "total": "$2,300.00", "weight": "200 kg"}
    ],
    "dieCutFeeTitle": "Spout Die Cut Fee:",
    "dieCutFeeText": "$300 per size (one-time fee for new spout position)"
  },
  "shipping": {
    "title": "Shipping Costs (Door-to-Door)",
    "air": {
      "title": "Air Freight",
      "time": "Fast delivery: 7-10 days",
      "price": "$15",
      "unit": "/kg",
      "service": "Door-to-door service",
      "includes": "Includes tax & customs duty"
    },
    "sea": {
      "title": "Sea Freight",
      "time": "Economy: 30-45 days",
      "price": "$5",
      "unit": "/kg",
      "service": "Door-to-door service",
      "includes": "Includes tax & customs duty"
    },
    "exampleTitle": "Shipping Example:",
    "exampleText": "For 5,000 pcs order (100 kg):",
    "exampleAir": "Air freight: 100 kg × $15 = ",
    "exampleAirTotal": "$1,500",
    "exampleSea": "Sea freight: 100 kg × $5 = ",
    "exampleSeaTotal": "$500"
  },
  "enhancements": {
    "title": "Optional Enhancements",
    "foilTitle": "Stamp Foiling",
    "foilDesc": "Upgrade your packaging with a premium metallic finish. Perfect for making logos and specific design elements stand out on the shelf.",
    "pricingNoteTitle": "Pricing Note:",
    "pricingNoteText1": "This feature is",
    "pricingNoteText2": "not included",
    "pricingNoteText3": "in the pricing tables above.",
    "foilCost1": "Stamp foil costs an additional",
    "foilCost2": "USD 150 per size per face.",
    "adviseNote": "Please advise your design to receive a final quote if stamp foiling is needed."
  },
  "contact": {
    "title": "Contact Information",
    "name": "Ryan Wong",
    "slogan": "Achieve Pack ® — Your Packaging Assistant Anywhere ®"
  },
  "terms": {
    "title": "Terms & Conditions",
    "list": [
      "Prices quoted are in USD (EXW).",
      "Shipping costs are additional (see shipping section above).",
      "Spout die cut fee ($167/size) applies for new spout positions.",
      "Production to ex-factory lead time is 15-25 days from artwork confirm and deposit received.",
      "Payment terms: 50% deposit upon order confirmation, balance before shipment.",
      "Production tolerance, invoiced on actual quantity produced:"
    ],
    "tolerances": [
      "Quantity under 1,000: ± 50%",
      "Quantity under 10,000: ± 20%",
      "Quantity 10,000 and over: ± 10%"
    ]
  },
  "footer": {
    "copyright": "© 2025 Pouch.eco by Achieve Pack. All rights reserved."
  }
}

with open(locales_path, 'r+') as f:
    fcntl.flock(f, fcntl.LOCK_EX)
    data = json.load(f)
    if 'seoPages' not in data:
        data['seoPages'] = {}
    if 'pages' not in data['seoPages']:
        data['seoPages']['pages'] = {}
    data['seoPages']['pages']['spoutedPouchQuote'] = data_to_add
    f.seek(0)
    json.dump(data, f, indent=4, ensure_ascii=False)
    f.truncate()
    fcntl.flock(f, fcntl.LOCK_UN)
