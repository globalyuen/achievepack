import json, fcntl

json_data = {
  "seoTitle": "Products & Packaging Solutions | Achieve Pack",
  "seoDesc": "Explore Achieve Pack's full range of custom flexible packaging products, from Stand Up Pouches to Flat Bottom Bags. Shop our store for low MOQ printing.",
  "hero": {
    "badge": "Our Catalog",
    "headlineLine1": "Premium Flexible",
    "headlineLine2": "Packaging Solutions",
    "desc": "From classic side gusset bags to innovative eco-friendly stand up pouches. Discover the perfect packaging architecture for your product, available for low MOQ custom printing.",
    "btnShop": "Shop All Products",
    "btnSize": "View Size Guide"
  },
  "products": {
    "standUp": {
      "title": "Stand Up Pouches",
      "desc": "The industry standard for shelf presence. Perfect for coffee, snacks, granola, and supplements. Available in conventional, recyclable, and compostable materials.",
      "features": ["Bottom Gusset Design", "Resealable Zippers", "Tear Notches"]
    },
    "flatBottom": {
      "title": "Flat Bottom Bags",
      "desc": "The premium choice for coffee and high-end goods. Box-like stability with 5 printable faces for maximum retail visibility.",
      "features": ["5-Panel Branding", "Box-Like Stability", "Volume Optimized"]
    },
    "sideGusset": {
      "title": "Side Gusset Bags",
      "desc": "The classic coffee packaging format. Quad seal structure with expandable side panels to maximize capacity in a compact footprint.",
      "features": ["Quad Seal Structure", "High Volume Capacity", "Tin Tie Compatible"]
    },
    "ecoStock": {
      "title": "Eco Stock Pouches (Plain)",
      "desc": "Ready-to-ship, sustainable blank pouches. Perfect for startups and small batches wanting to apply their own labels.",
      "features": ["Ready to Ship", "Apply Custom Labels", "Recyclable/Compostable"]
    },
    "spoutPouches": {
      "title": "Spout Pouches",
      "desc": "The flexible, lightweight alternative to rigid bottles and jars. Ideal for liquids, purees, and refill packaging.",
      "features": ["Leak-Proof Spout", "80% Less Plastic", "Cheaper Shipping"]
    },
    "customBoxes": {
      "title": "Custom Boxes",
      "desc": "Premium folding cartons and corrugated mailer boxes to complete your product packaging ecosystem.",
      "features": ["Folding Cartons", "Corrugated Mailers", "Retail Ready"]
    }
  },
  "card": {
    "btnShop": "Shop Now",
    "btnSpecs": "View Specs"
  },
  "cta": {
    "title": "Ready to start packaging?",
    "desc": "Browse our complete store inventory. Access live pricing, 3D previews, and our interactive quotation builder.",
    "btn": "Go to the Store"
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
        
    data['seoPages']['pages']['products'] = json_data
    
    f.seek(0)
    json.dump(data, f, indent=4, ensure_ascii=False)
    f.truncate()
    fcntl.flock(f, fcntl.LOCK_UN)

print("en.json updated successfully")
