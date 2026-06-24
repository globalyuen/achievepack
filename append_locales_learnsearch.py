import json, fcntl, os

locales_path = 'src/locales/en.json'

data_to_add = {
  "seo": {
    "titlePrefix": "Search: ",
    "titleSuffix": " | Achieve Pack",
    "titleDefault": "Learn Center | Achieve Pack",
    "description": "Explore our comprehensive knowledge base on sustainable packaging materials, shapes, features, and industry solutions."
  },
  "header": {
    "title": "Learn Center",
    "store": "Store"
  },
  "hero": {
    "title": "Packaging Knowledge Center",
    "desc": "Everything you need to know about sustainable packaging materials, shapes, and solutions"
  },
  "filters": {
    "searchPlaceholder": "Search materials, shapes, features..."
  },
  "categories": {
    "All": "All",
    "Company": "Company",
    "Materials": "Materials",
    "Packaging": "Packaging",
    "Features": "Features",
    "Industries": "Industries",
    "Products": "Products",
    "Solutions": "Solutions",
    "Topics": "Topics",
    "Case Studies": "Case Studies",
    "Knowledge": "Knowledge",
    "Free Service": "Free Service",
    "Function": "Function",
    "Lab": "Lab",
    "USA Market": "USA Market",
    "Spec": "Spec",
    "Support": "Support"
  },
  "results": {
    "found": "Found ",
    "results": " results",
    "browseAll": "Browse all ",
    "pages": " pages",
    "noPages": "No pages found matching your criteria.",
    "clearFilters": "Clear Filters",
    "learnMore": "Learn More"
  },
  "cta": {
    "title": "Ready to Get Started?",
    "desc": "Explore our sustainable packaging options. Low MOQ from 100 pieces.",
    "button1": "Shop Now",
    "button2": "Get Custom Quote"
  }
}

with open(locales_path, 'r+') as f:
    fcntl.flock(f, fcntl.LOCK_EX)
    data = json.load(f)
    if 'seoPages' not in data:
        data['seoPages'] = {}
    if 'pages' not in data['seoPages']:
        data['seoPages']['pages'] = {}
    data['seoPages']['pages']['learnSearch'] = data_to_add
    f.seek(0)
    json.dump(data, f, indent=4, ensure_ascii=False)
    f.truncate()
    fcntl.flock(f, fcntl.LOCK_UN)
