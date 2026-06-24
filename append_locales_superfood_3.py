import json, fcntl

locales_path = 'src/locales/en.json'

data_to_add = {
  "seo": {
    "title": "Achieve Superfood | Empowering Wellness | Demo Site",
    "description": "Achieve Superfood - Organic, nutrient-dense superfoods in sustainable compostable packaging."
  }
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
