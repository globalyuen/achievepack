import json, fcntl

json_data = {
  "title": "Custom Coffee Bags with Low MOQ & High-Barrier Sustainable Options for Roasters | Achieve Pack Direct Supplier",
  "description": "Calculate custom coffee bags and flexible packaging costs instantly. Compare low MOQ digital short runs, high-barrier recyclable Mono-PE EVOH, and certified industrial compostable flat bottom pouches.",
  "hero": {
    "badge": "B2B Packaging Pricing Plans",
    "titlePrefix": "Flexible Packaging Pricing for",
    "desc": "Select your quantity, dimension size, and design counts using the segmented selectors below. Unit prices update instantly below to give you complete transparency."
  },
  "nav": {
    "home": "Home",
    "customPackaging": "Custom Packaging",
    "pricingCalculator": "Pricing Calculator"
  }
}

file_path = 'src/locales/en.json'
with open(file_path, 'r+') as f:
    fcntl.flock(f, fcntl.LOCK_EX)
    data = json.load(f)
    
    if 'seoPages' not in data:
        data['seoPages'] = {}
    if 'pages' not in data['seoPages']:
        data['seoPages']['pages'] = {}
        
    data['seoPages']['pages']['pouchEcoGPTK'] = json_data
    
    f.seek(0)
    json.dump(data, f, indent=4, ensure_ascii=False)
    f.truncate()
    fcntl.flock(f, fcntl.LOCK_UN)

print("en.json updated successfully")
