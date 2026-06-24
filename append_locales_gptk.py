import json, fcntl

locales_path = 'src/locales/en.json'

data_to_add = {
  "seo": {
    "title": "Kraft Paper Pouches with Clear Window - GPTK Material",
    "description": "Compostable kraft paper pouches with optional cellulose window. 6-12 month shelf life. Perfect for coffee, tea, snacks, and pet treats. Industrial compostable. From 500 units.",
    "keywords": "kraft pouches, compostable packaging, kraft paper bags, clear window pouches, coffee bags kraft, eco kraft packaging"
  },
  "hero": {
    "badge": "🌱 COMPOSTABLE MATERIAL",
    "titleHtml": "Kraft Paper<br/><span className=\"text-[#10b981]\">Pouches</span>",
    "desc": "Natural brown kraft exterior with optional clear window. Industrial compostable. Perfect for coffee, tea, and organic snacks. 6-12 month shelf life.",
    "buttonShop": "Shop Kraft Pouches",
    "buttonSample": "Get Free Sample"
  },
  "features": [
    {
      "title": "Compostable Kraft",
      "desc": "Natural brown kraft paper exterior that breaks down in industrial composting facilities."
    },
    {
      "title": "Clear Window",
      "desc": "Optional cellulose window lets customers see your product while staying eco-friendly."
    },
    {
      "title": "Medium Barrier",
      "desc": "6-12 month shelf life. Perfect for most dry goods, coffee, tea, and snacks."
    },
    {
      "title": "Low MOQ",
      "desc": "Start with just 500 units. Test your market without huge commitments."
    }
  ],
  "specs": {
    "title": "Technical Specs",
    "label1": "Structure",
    "val1": "Kraft / Cello / PE (Triplex)",
    "label2": "Shelf Life",
    "val2": "6-12 months",
    "label3": "MOQ",
    "val3": "500 units",
    "label4": "Certifications",
    "val4": "EN13432, BPI, ASTM D6400",
    "label5": "Barrier Type",
    "val5": "Medium (moisture + oxygen)",
    "label6": "Composting",
    "val6": "Industrial only (90-180 days)"
  },
  "idealFor": {
    "title": "Ideal For",
    "items": [
      "Coffee beans & ground coffee",
      "Tea leaves & herbal blends",
      "Granola & trail mix",
      "Dried fruits & nuts",
      "Protein powders",
      "Pet treats",
      "Bath salts & soaps",
      "Spices & herbs",
      "Cookies & baked goods",
      "Organic snacks"
    ]
  },
  "sachet": {
    "badge": "Silk Pure Aluminum (12丝)",
    "title": "Small Sachet – Conventional Material",
    "desc": "Ideal for sample packs, single-serve coffee/tea, cosmetic samples, and powder sachets. Made with high-strength pure aluminum laminate providing absolute moisture and light protection.",
    "button": "View Sachet Options",
    "matrixTitle": "⚡ Pricing Matrix (80x80mm)",
    "matrix1Label": "Hot Stamping (500 pcs):",
    "matrix1Val": "$159.60 USD",
    "matrix2Label": "Hot Stamping (1,000 pcs):",
    "matrix2Val": "$210.00 USD",
    "matrix3Label": "Digital Print (1,000 pcs):",
    "matrix3Val": "$231.00 USD",
    "matrix4Label": "Traditional Gravure (50k+):",
    "matrix4Val": "$0.0378 / pc",
    "note": "* Optional round corners (圆角) at +$0.0336 USD / sachet. Air shipping & delivery included in standard markup formulas."
  },
  "prosCons": {
    "benefitsTitle": "Benefits",
    "benefits": [
      "✅ Eco-friendly kraft paper look",
      "✅ Stand out on shelves naturally",
      "✅ Degassing valve compatible",
      "✅ Resealable zipper available"
    ],
    "considerationsTitle": "Considerations",
    "considerations": [
      "⚠️ Not home compostable",
      "⚠️ Clear window reduces barrier",
      "⚠️ Not suitable for high-fat products",
      "⚠️ Longer shelf life? Consider aluminum"
    ]
  },
  "cta": {
    "titleHtml": "Ready to Go<br/>Natural?",
    "desc": "Order kraft pouches from 500 units. Free design consultation and sample kit included.",
    "btnBrowse": "Browse Kraft Options",
    "btnTalk": "Talk to Expert",
    "trust1": "✓ EN13432 CERTIFIED",
    "trust2": "✓ BPI APPROVED",
    "trust3": "✓ FOOD SAFE"
  },
  "footer": {
    "desc": "Eco packaging for the next generation of sustainable brands.",
    "materials": "Materials",
    "m1": "Kraft Pouches",
    "m2": "Compostable",
    "m3": "Recyclable",
    "learn": "Learn",
    "l1": "Solutions",
    "l2": "Size Guide",
    "l3": "Testimonials",
    "contact": "Contact",
    "c1": "Mon-Fri 9am-6pm PST",
    "copyright": "© 2026 {{brand}}. All rights reserved. Made with 💚 for the planet."
  }
}

with open(locales_path, 'r+') as f:
    fcntl.flock(f, fcntl.LOCK_EX)
    data = json.load(f)
    if 'seoPages' not in data:
        data['seoPages'] = {}
    if 'pages' not in data['seoPages']:
        data['seoPages']['pages'] = {}
    data['seoPages']['pages']['pouchEcoGPTK2'] = data_to_add
    f.seek(0)
    json.dump(data, f, indent=4, ensure_ascii=False)
    f.truncate()
    fcntl.flock(f, fcntl.LOCK_UN)
