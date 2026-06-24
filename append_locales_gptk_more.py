import json, fcntl

locales_path = 'src/locales/en.json'

data_to_add = {
  "whyChoose": {
    "titleHtml": "Why Choose <span className=\"text-[#10b981]\">Kraft?</span>",
    "desc": "Natural, sustainable, and perfect for brands who want an organic aesthetic"
  },
  "techSpecs": {
    "titleHtml": "Tech <span className=\"text-[#10b981]\">Specs</span>"
  },
  "perfectFor": {
    "titleHtml": "Perfect <span className=\"text-[#10b981]\">For</span>"
  }
}

with open(locales_path, 'r+') as f:
    fcntl.flock(f, fcntl.LOCK_EX)
    data = json.load(f)
    if 'seoPages' not in data:
        data['seoPages'] = {}
    if 'pages' not in data['seoPages']:
        data['seoPages']['pages'] = {}
    if 'pouchEcoGPTK2' not in data['seoPages']['pages']:
        data['seoPages']['pages']['pouchEcoGPTK2'] = {}
    data['seoPages']['pages']['pouchEcoGPTK2'].update(data_to_add)
    f.seek(0)
    json.dump(data, f, indent=4, ensure_ascii=False)
    f.truncate()
    fcntl.flock(f, fcntl.LOCK_UN)
