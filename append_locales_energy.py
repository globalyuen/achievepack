import json, fcntl

locales_path = 'src/locales/en.json'

data_to_add = {
  "seo": {
    "title": "Achieve Energy | Unleash the Future | Demo Site",
    "description": "Achieve Energy - High performance energy gel in sustainable spouted pouches. The future of fuel."
  },
  "nav": {
    "demoText": "Demo Site by Achieve Pack",
    "brand1": "ACHIEVE",
    "brand2": "ENERGY",
    "flavors": "FLAVORS",
    "performance": "PERFORMANCE",
    "community": "COMMUNITY"
  },
  "hero": {
    "badge": "SYSTEM ONLINE // V 2.0",
    "titleHtml": "FUEL THE <br />\n<span className=\"text-transparent bg-clip-text bg-gradient-to-r from-[#D4FF00] to-white neon-glow\">FUTURE.</span>",
    "desc": "Next-gen hydration and energy in a sustainable, ultra-portable format. No bottles. No waste. Just raw power.",
    "btnCharge": "GET CHARGED",
    "btnIntro": "WATCH INTRO"
  },
  "marquee": "ENERGY • FOCUS • POWER • VELOCITY • SUSTAINABILITY • NO CRASH •",
  "productsSection": {
    "titleHtml": "SELECT YOUR <span className=\"text-[#D4FF00]\">SOURCE</span>",
    "sugarFree": "Sugar Free",
    "vegan": "Vegan",
    "gf": "GF",
    "addBtn": "Add to Cart"
  },
  "products": {
    "neon-zest": {
      "name": "Neon Zest",
      "tagline": "Citrus Charged Focus",
      "description": "Electric lime and yuzu fusion. Charged with 200mg caffeine and L-Theanine for laser focus without the crash."
    },
    "cyber-berry": {
      "name": "Cyber Berry",
      "tagline": "Blue Raspberry Overdrive",
      "description": "Synthesized blue raspberry with electrolyte matrix. Hydration and power for endurance sessions."
    },
    "magma-punch": {
      "name": "Magma Punch",
      "tagline": "Tropical Heat Surge",
      "description": "Volcanic tropical punch with cayenne kick. Thermogenic formula to ignite your metabolism."
    }
  },
  "features": {
    "titleHtml": "ENGINEERED FOR <span className=\"text-[#D4FF00]\">DOMINANCE</span>",
    "desc": "The most advanced energy delivery system on the planet.",
    "f1": {
      "title": "Zero Sugar. Pure Power.",
      "lt": "Clean Energy",
      "ld": "No crash, no jitters. Just pure, sustainable energy from natural caffeine sources.",
      "lb1": "0g Sugar",
      "lb2": "Natural Caffeine",
      "rt": "Cognitive Boost",
      "rd": "Fortified with Nootropics like Alpha-GPC and Lion's Mane for peak mental performance.",
      "rb1": "Focus",
      "rb2": "Clarity"
    },
    "f2": {
      "title": "Built for Performance",
      "lt": "Ergonomic Pouch",
      "ld": "Flexible, durable spouted pouch fits in any pocket or gear bag. No bulk, no glass.",
      "lb1": "Portable",
      "lb2": "Durable",
      "rt": "Sustainable",
      "rd": "Uses 70% less plastic than rigid bottles and is fully recyclable via our take-back program.",
      "rb1": "Eco-Friendly",
      "rb2": "Low Carbon"
    },
    "f3": {
      "title": "Ignite Your Workout",
      "lt": "Pre-Workout",
      "ld": "Beta-Alanine and Citrulline Malate for pump and endurance.",
      "lb1": "Pump",
      "lb2": "Endurance",
      "rt": "Thermogenic",
      "rd": "Active ingredients to boost metabolism and heat up your training.",
      "rb1": "Burn",
      "rb2": "Sweat"
    }
  },
  "community": {
    "title1": "JOIN THE SQUAD",
    "desc1": "Share your achievements. Tag #AchieveEnergy",
    "title2": "UNSTOPPABLE MOMENTUM",
    "desc2": "Whether you're crushing a PR, coding a marathon, or dominating the lobby, Achieve Energy provides the clean, sustained fuel you need to win.",
    "btnRead": "READ THE SCIENCE"
  },
  "footer": {
    "desc": "The future of performance nutrition. Sustainable packaging. Uncompromising power.",
    "shop": "SHOP",
    "allProducts": "All Products",
    "apparel": "Apparel",
    "bundles": "Bundles",
    "subscribe": "Subscribe & Save",
    "support": "SUPPORT",
    "faq": "FAQ",
    "contact": "Contact Us",
    "shipping": "Shipping",
    "returns": "Returns",
    "copyright": "© 2026 Achieve Energy. All rights reserved.",
    "powered": "Powered by "
  }
}

with open(locales_path, 'r+') as f:
    fcntl.flock(f, fcntl.LOCK_EX)
    data = json.load(f)
    if 'seoPages' not in data:
        data['seoPages'] = {}
    if 'pages' not in data['seoPages']:
        data['seoPages']['pages'] = {}
    if 'achieveEnergyDemo' not in data['seoPages']['pages']:
        data['seoPages']['pages']['achieveEnergyDemo'] = {}
    data['seoPages']['pages']['achieveEnergyDemo'].update(data_to_add)
    f.seek(0)
    json.dump(data, f, indent=4, ensure_ascii=False)
    f.truncate()
    fcntl.flock(f, fcntl.LOCK_UN)
