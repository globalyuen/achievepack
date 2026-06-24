import json, fcntl

locales_path = 'src/locales/en.json'

data_to_add = {
  "products": {
    "cacao": {
      "name": "Organic Cacao Powder",
      "tagline": "Nature’s Dark Chocolate",
      "description": "Antioxidant-rich organic cacao powder. Ethically sourced from small family farms in Peru. Perfect for smoothies, baking, or hot cocoa."
    },
    "chia": {
      "name": "Organic Chia Seeds",
      "tagline": "Ancient Energy Source",
      "description": "Power-packed with Omega-3s, fiber, and protein. These tiny seeds are a versatile superfood staple for modern wellness."
    },
    "goji": {
      "name": "Organic Goji Berries",
      "tagline": "The Longevity Berry",
      "description": "Succulent, sweet-tart berries used for centuries in traditional medicine. A vibrant snack supporting immune health and vitality."
    }
  },
  "bestSeller": "Best Seller",
  "marquee": "Organic • Non-GMO • Plant-Based • Compostable • Ethical • Nutrient-Dense •",
  "scroll": "Scroll"
}

with open(locales_path, 'r+') as f:
    fcntl.flock(f, fcntl.LOCK_EX)
    data = json.load(f)
    if 'seoPages' not in data:
        data['seoPages'] = {}
    if 'pages' not in data['seoPages']:
        data['seoPages']['pages'] = {}
    if 'achieveSuperfoodDemo' not in data['seoPages']['pages']:
        data['seoPages']['pages']['achieveSuperfoodDemo'] = {}
    data['seoPages']['pages']['achieveSuperfoodDemo'].update(data_to_add)
    f.seek(0)
    json.dump(data, f, indent=4, ensure_ascii=False)
    f.truncate()
    fcntl.flock(f, fcntl.LOCK_UN)
