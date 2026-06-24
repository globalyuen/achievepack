import json, fcntl

locales_path = 'src/locales/en.json'

data_to_add = {
  "nav": {
    "brand1": "Achieve",
    "brand2": "Superfood",
    "shop": "Shop",
    "mission": "Mission",
    "sustainability": "Sustainability",
    "demoText": "Demo Site by Achieve Pack"
  },
  "hero": {
    "badge": "Certified Organic & Compostable",
    "titleHtml": "Empowering Wellness, <br/><span className=\"text-green-800 italic\">Naturally.</span>",
    "desc": "Nutrient-dense superfoods packed in our revolutionary compostable pouches. Nourish your body and the planet with every scoop.",
    "btnStart": "Start Your Journey",
    "btnStory": "Our Story"
  },
  "productsSection": {
    "titleHtml": "Earth's <span className=\"italic font-normal\">Finest</span>",
    "sourceTitle": "Source",
    "sourceDesc": "Regenerative Farming",
    "packTitle": "Packaging",
    "packDesc": "100% Compostable",
    "netWt": "NET WT. 8 OZ",
    "addBtn": "Add to Basket"
  },
  "sustainability": {
    "c1": {
      "title": "Certified Compostable",
      "desc": "Our plant-based pouches break down in home compost settings, returning nutrients to the soil."
    },
    "c2": {
      "title": "Direct Trade",
      "desc": "We build long-term relationships with farmers, ensuring fair wages and sustainable community development."
    },
    "c3": {
      "title": "Meticulously Sourced",
      "desc": "We select only the highest quality superfoods, minimally processed to retain their nutritional potting."
    }
  },
  "mission": {
    "visionLabel": "The Vision",
    "visionQuote": "\"Live Life Positive.\"",
    "purposeLabel": "Our Purpose",
    "titleHtml": "Wellness for You, <br/> Health for the Planet.",
    "desc": "At Achieve Superfood, we believe that nutrient-dense foods shouldn't come at a cost to the environment. That's why we've partnered with Achieve Pack to revolutionize our packaging, moving towards a zero-waste future without compromising on freshness or quality.",
    "btnReport": "Read Our Impact Report"
  },
  "footer": {
    "desc": "Premium organic superfoods.<br />Sustainably packaged and ethically sourced.",
    "shop": "Shop",
    "about": "About",
    "recipes": "Recipes",
    "contact": "Contact",
    "copyright": "© 2026 Achieve Superfood. Powered by "
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
