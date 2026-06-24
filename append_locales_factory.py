import json, fcntl, os

locales_path = 'src/locales/en.json'

data_to_add = {
  "videos": [
    {
      "title": "Welcome to Our Factory",
      "description": "Step inside our state-of-the-art sustainable packaging facility"
    },
    {
      "title": "Digital Printing Technology",
      "description": "High-quality digital printing for short runs with unlimited colors"
    },
    {
      "title": "Rotogravure Printing",
      "description": "Plate printing for large volume production with Pantone matching"
    },
    {
      "title": "Lamination Process",
      "description": "Multi-layer bonding for optimal barrier properties"
    },
    {
      "title": "Precision Slitting",
      "description": "Accurate material cutting for perfect dimensions"
    },
    {
      "title": "Pouch Manufacturing",
      "description": "Converting films into finished pouches with quality seals"
    }
  ],
  "seo": {
    "title": "Factory Tour | See How We Make Eco Pouches | Pouch.eco",
    "description": "Virtual factory tour: Watch our sustainable pouch manufacturing process from printing to bag making. Quality certified eco-packaging production.",
    "ogTitle": "Factory Tour | Pouch.eco",
    "ogDescription": "See inside our eco-friendly packaging factory"
  },
  "hero": {
    "breadcrumbHome": "Home",
    "breadcrumbAbout": "About Us",
    "breadcrumbTour": "Factory Tour",
    "badge": "FACTORY_TOUR_V1.0",
    "titleLine1": "See How We",
    "titleLine2": "Make Magic",
    "desc": "Virtual tour of our <strong>BRCGS certified facility</strong> where certified sustainable pouches are engineered.",
    "stats": [
      { "label": "Production Lines", "value": "6" },
      { "label": "Daily Capacity", "value": "100K+" },
      { "label": "Quality Tests", "value": "15+" },
      { "label": "Years Experience", "value": "13+" }
    ]
  },
  "grid": {
    "badge": "PRODUCTION_WORKFLOW",
    "titleLine1": "Precision",
    "titleLine2": "Manufacturing",
    "desc": "Hover over or click any process to watch our production line highlights."
  },
  "quality": {
    "badge": "QUALITY_ASSURANCE",
    "titleLine1": "Certified",
    "titleLine2": "Standards",
    "sections": [
      {
        "title": "Material Testing",
        "points": [
          "OTR & WVTR gas barrier permeability testing",
          "Hermetic seal strength measurement (ASTM F88)",
          "Sub-micron thickness uniformity verification",
          "Migration safety analysis for food compatibility"
        ]
      },
      {
        "title": "Quality Control",
        "points": [
          "In-line high-resolution camera print inspections",
          "Pantone color consistency digital checkouts",
          "Dimensional blueprints accuracy check",
          "Heavy-load physical drops and pressure tests"
        ]
      },
      {
        "title": "Certifications",
        "points": [
          "BPI ASTM D6400 Composting Certificate",
          "TUV OK Compost HOME Environmental Standards",
          "Grade A BRCGS Food-Safety Compliances",
          "FSC Responsible Wood Pulp Traceability"
        ]
      }
    ]
  },
  "cta": {
    "badge": "BIO_TOUR_MANDATE",
    "title": "Partner With Us",
    "desc": "Direct-to-factory communication ensuring complete regulatory transparency.",
    "button1": "Request Free Eco Sample Kit",
    "button2": "Consult Packaging Engineer",
    "footerTitle": "Seeking high-volume enterprise contract manufacturing?",
    "footerDesc": "For high-volume bulk rotogravure print specifications and private label factory contracts, visit our wholesale portal:"
  }
}

with open(locales_path, 'r+') as f:
    fcntl.flock(f, fcntl.LOCK_EX)
    data = json.load(f)
    if 'seoPages' not in data:
        data['seoPages'] = {}
    if 'pages' not in data['seoPages']:
        data['seoPages']['pages'] = {}
    data['seoPages']['pages']['pouchFactoryTour'] = data_to_add
    f.seek(0)
    json.dump(data, f, indent=4, ensure_ascii=False)
    f.truncate()
    fcntl.flock(f, fcntl.LOCK_UN)
