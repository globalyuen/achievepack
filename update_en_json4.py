import json, fcntl

json_data = {
  "title": "Why Compostable Zippers Break & How We Solved It | POUCH.ECO",
  "description": "Sick of flimsy eco-friendly closures? Discover the material science behind compostable zipper failures and how co-extruded bio-resins and ultrasonic welding prevent breakage.",
  "hero": {
    "badge": "TECH_SPECS: HIGH_STRENGTH_BIO_ZIP",
    "headlinePrefix": "Zero Breaks.",
    "headlineSuffix": "Zero",
    "headlineHighlight": "Microplastics.",
    "subheading": "> Broken zippers = Stale coffee.<br/>> Cheap glue = Delamination.<br/>> Co-extruded ultrasonic welding is here.",
    "imgAlt": "Kraft compostable pouch with double lock zipper",
    "animBadge": "15N_TENSILE_WELD"
  },
  "physics": {
    "titlePrefix": "The Physics of",
    "titleHighlight": "True Zipper Durability",
    "intro": "One of the most persistent complaints from consumers switching to green packaging is that **compostable zippers break**. They delaminate, peel away from the paper, or tear completely when opened for the first time. Why does this happen? The answer lies in thermodynamics.",
    "imgAlt": "Tensile strength and weld verification testing in packaging lab",
    "sections": [
      {
        "title": "The Danger of Narrow Heat Windows",
        "paragraphs": [
          "Traditional plastic zippers are extremely forgiving. You can heat seal them at a wide range of temperatures. However, compostable bio-polymers like PLA and PBS have an incredibly narrow thermal sealing window (115°C - 130°C).",
          "If a packaging line runs even slightly too hot, the bio-polymer structures weaken, making the zipper brittle and prone to failure. If it is too cool, the adhesive bond fails, leading to delamination under tension."
        ]
      },
      {
        "title": "Co-Extrusion and Ultrasonic Welding",
        "paragraphs": [
          "At POUCH.ECO, we refuse to accept flimsy compromises. We co-extrude our zippers using multiple distinct bio-resin layers. The outer layer is formulated to fuse permanently to the bag lining at low temperatures, while the inner double-lock core retains maximum molecular elasticity.",
          "We then utilize **Ultrasonic Welding** instead of conduction heat. High-frequency acoustic vibrations generate friction heat only at the contact interface, fusing the parts together in milliseconds. This creates a secure, molecular bond that easily handles over 15N/cm of tensile force without micro-fracturing."
        ]
      },
      {
        "title": "No Greenwashing, Full Certification",
        "paragraphs": [
          "Because our zippers, coffee degassing valves, and lamination resins share the exact same biodegradable polymer formulation, they break down together naturally in industrial and home composting conditions. Our bags are certified **TUV Austria OK Compost Home** and comply fully with EN 13432 and ASTM D6400 standards."
        ]
      }
    ]
  },
  "faq": {
    "titlePrefix": "TECHNICAL",
    "titleHighlight": "Q&A",
    "qPrefix": "Q:",
    "aPrefix": "A:",
    "questions": [
      {
        "q": "Why do compostable zippers feel more brittle than plastic ones?",
        "a": "Traditional packaging conduction heaters overheat the delicate molecular chain of biodegradable polymers. POUCH.ECO solves this using co-extrusion and ultrasonic welding, which creates a flexible double-lock snap profile."
      },
      {
        "q": "What is the pull-strength rating of your resealable closures?",
        "a": "Our closures undergo rigorous scientific testing and hold a pull-strength rating exceeding 15N/cm, matching oil-based plastic performance and preventing accidental delamination."
      },
      {
        "q": "Do I have to worry about zipper microplastics in compost?",
        "a": "No. Our entire pouch is 100% compostable. The zipper, the degassing valve, and the adhesives decompose entirely into organic matter within 180 days, leaving zero toxins behind."
      }
    ]
  },
  "cta": {
    "title": "Get High-Strength Closures",
    "description": "Durable, co-extruded zippers that satisfy customers and save the planet.",
    "button": "Order Custom Samples"
  }
}

file_path = '/Users/ryanmacmini/Desktop/1 App i made/Master Achieve Pack/achieve pack website/achieve-pack/src/locales/en.json'
with open(file_path, 'r+') as f:
    fcntl.flock(f, fcntl.LOCK_EX)
    data = json.load(f)
    
    if 'seoPages' not in data:
        data['seoPages'] = {}
    if 'pages' not in data['seoPages']:
        data['seoPages']['pages'] = {}
        
    data['seoPages']['pages']['pouchCompostableZipperDurability'] = json_data
    
    f.seek(0)
    json.dump(data, f, indent=4, ensure_ascii=False)
    f.truncate()
    fcntl.flock(f, fcntl.LOCK_UN)

print("en.json updated successfully")
