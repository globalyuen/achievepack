import json, fcntl

locales_path = 'src/locales/en.json'

data_to_add = {
  "seo": {
    "title": "Achieve Supplements | Nano-Tech Nutrition",
    "description": "Achieve Supplements - Nano Banana Pro. Advanced bio-available nutrition in sustainable stick pack packaging. The future of supplements."
  },
  "nav": {
    "demoText": "This is a demo website created by Achieve Pack",
    "back": "Back to Achieve Pack",
    "viewSpecs": "View Stick Pack Specs",
    "brand1": "ACHIEVE",
    "brand2": "SUPPS",
    "science": "Science",
    "nanoSeries": "Nano Series",
    "sustainability": "Sustainability"
  },
  "hero": {
    "badge": "New Nano Banana Pro",
    "titleHtml": "DOSE <br/>\n<span className=\"text-transparent bg-clip-text bg-gradient-to-r from-[#FFE135] to-amber-400\">PRECISION</span>",
    "desc": "Bio-available nutrition engineered for the modern athlete. Delivered in sustainable, pocket-sized flat pouches.",
    "btnShop": "Shop Nano Series",
    "btnScience": "The Science"
  },
  "products": {
    "nano-banana-pro": {
      "name": "Nano Banana Pro",
      "tagline": "Rapid Absorption Isolate",
      "description": "Micronized banana protein isolate engineered for 99% bioavailability. The future of recovery in a pocket-sized 3-side seal pouch."
    },
    "nano-vanilla-flow": {
      "name": "Nano Vanilla Flow",
      "tagline": "Cognitive Enhancement",
      "description": "Nootropic-infused vanilla blend. Sharpen focus while fueling muscle synthesis. Clean energy, zero crash."
    },
    "nano-berry-burst": {
      "name": "Nano Berry Burst",
      "tagline": "Antioxidant Matrix",
      "description": "Superfruit complex delivered via nano-liposomal transport. Maximum cellular protection on the go."
    }
  },
  "productFeatures": {
    "titleHtml": "Precision <br/>Engineered",
    "desc": "The most advanced delivery system requires the most advanced packaging.",
    "p1_title": "3-Side Seal Flat Pouch",
    "p1_desc": "Ultra-low profile. Zero wasted space. Maximum freshness.",
    "p1_stat": "0.1mm",
    "p1_stat_desc": "Barrier Thickness",
    "p2_title": "Nano-Dispersion",
    "p2_desc": "Instantly soluble in any liquid. No shaking required.",
    "p2_stat": "5g",
    "p2_stat_desc": "Nano-BCAA"
  },
  "collection": {
    "badge": "The Collection",
    "title": "Engineered For Performance",
    "f1": {
      "title": "3-Side Seal Tech",
      "lt": "Precision Dosing",
      "ld": "Single-serve 3-side seal flat pouches ensure exact nutrient delivery every time. No scoops, no mess.",
      "lb1": "Flat Pouch",
      "lb2": "3-Side Seal",
      "rt": "High Barrier",
      "rd": "Pharmaceutical-grade barrier films protect unstable nano-particles from moisture and oxygen.",
      "rb1": "Freshness",
      "rb2": "Protection"
    },
    "f2": {
      "title": "Lab Verified",
      "lt": "3rd Party Tested",
      "ld": "Every batch rigourously tested for purity and potency. QR code on every sachet.",
      "lb1": "Certified",
      "lb2": "Transparent",
      "rt": "Nano-Engineered",
      "rd": "Particle sizes reduced to <100nm for bypassing digestion bottlenecks.",
      "rb1": "Bioavailable",
      "rb2": "Fast Acting"
    },
    "f3": {
      "title": "Eco-Forward",
      "lt": "Compostable Film",
      "ld": "Our advanced flat pouches are certified home compostable. Dissolves in nature, not in oceans.",
      "lb1": "Compostable",
      "lb2": "Zero Waste",
      "rt": "Minimal Footprint",
      "rd": "Compact format reduces shipping volume by 80% compared to rigid tubs.",
      "rb1": "Low Carbon",
      "rb2": "Efficient"
    }
  },
  "sustainability": {
    "badge": "Achieve Pack Tech",
    "titleHtml": "Clean Fuel. <br/>Clean Planet.",
    "desc": "Single-serve convenience used to mean single-use waste. Not anymore. Our Nano Flat Pouches are crafted from certified home-compostable films derived from eucalyptus and corn starch.",
    "l1": "Plastic-Free Barrier",
    "l2": "Non-Toxic Inks",
    "l3": "Certified Home Compostable",
    "btn": "View Impact Report",
    "shippingBadge": "Shipping Solved",
    "shippingTitleHtml": "Meet the <span className=\"text-emerald-700\">AchievePacker™</span>",
    "shippingDescHtml": "Your commitment to sustainability shouldn't end with the product. Shipped in our signature <strong>AchievePacker Compostable Mailers</strong>. Made from 100% recycled kraft paper and corn starch, printed with soy-based inks.",
    "shippingBox1": "Home Compostable",
    "shippingBox2": "Water Resistant",
    "mailerBadge": "Plastic-Free Shipping"
  },
  "footer": {
    "brand": "ACHIEVE",
    "desc": "Bridging the gap between clinical science and daily performance. Nutrition, evolved.",
    "inputPlaceholder": "Enter email for science digest",
    "series": "Series",
    "series1": "Nano Protein",
    "series2": "Nootropics",
    "series3": "Hydration",
    "series4": "Bundles",
    "connect": "Connect",
    "connect1": "Lab Reports",
    "connect2": "Sustainability",
    "connect3": "Ambassadors",
    "connect4": "Support",
    "copyright": "© 2026 Achieve Supplements. All rights reserved.",
    "powered": "Packaging by "
  }
}

with open(locales_path, 'r+') as f:
    fcntl.flock(f, fcntl.LOCK_EX)
    data = json.load(f)
    if 'seoPages' not in data:
        data['seoPages'] = {}
    if 'pages' not in data['seoPages']:
        data['seoPages']['pages'] = {}
    if 'achieveSupplementDemo' not in data['seoPages']['pages']:
        data['seoPages']['pages']['achieveSupplementDemo'] = {}
    data['seoPages']['pages']['achieveSupplementDemo'].update(data_to_add)
    f.seek(0)
    json.dump(data, f, indent=4, ensure_ascii=False)
    f.truncate()
    fcntl.flock(f, fcntl.LOCK_UN)
