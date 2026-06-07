import json
import os

BASE_DIR = os.path.abspath(os.path.dirname(os.path.dirname(__file__)))
LOCALES_FILE = os.path.join(BASE_DIR, 'src', 'locales', 'en.json')

with open(LOCALES_FILE, 'r', encoding='utf-8') as f:
    data = json.load(f)

# Define pouchRecyclable block
data["seoPages"]["pages"]["pouchRecyclable"] = {
    "title": "Recyclable Packaging - Circular Economy Solutions | POUCH.ECO",
    "description": "Mono-material recyclable pouches for startups. PE/PE and PP/PP structures. Low MOQ 500 units. Certified recyclable and shelf-stable packaging.",
    "heroBadge": "MATERIAL_CLASS: RECYCLE_02",
    "heroTitle1": "Close.",
    "heroTitle2": "The.",
    "heroTitleHighlight": "Loop.",
    "heroDescription": "> Mono-material protocol.\n> Kerbside recyclable.\n> High performance barrier.",
    "heroCta1": "Explore Mono",
    "heroCta2": "Download Specs",
    "heroImageAlt": "Recyclable Pouch",
    "burnVerifiedBadge": "MONO_PE_CERTIFIED",
    "card1Title": "Mono-PE",
    "card1Desc": "100% Polyethylene structure. Easily recycled in existing PE streams. High clarity and good moisture barrier.",
    "card1Badge": "KERBSIDE_READY",
    "card2Title": "Mono-PP",
    "card2Desc": "100% Polypropylene structure. Superior heat resistance and stiffness. Perfect for hot-fill or microwaveable apps.",
    "card2Badge": "HEAT_STABLE",
    "card3Title": "EVOH Barrier",
    "card3Desc": "Ultra-thin barrier layer that doesn't interfere with the recycling stream. Keeps O2 out and freshness in.",
    "card3Badge": "TECH_ACTIVE",
    "ctaTitle": "Ready to Pivot?",
    "ctaSubtitle": "Switch from multi-layer mixed plastics to Mono-Material today.",
    "ctaBtn1": "Consult Engineering",
    "ctaBtn2": "Price Mono-PE"
}

with open(LOCALES_FILE, 'w', encoding='utf-8') as f:
    json.dump(data, f, ensure_ascii=False, indent=4)

print("Successfully added pouchRecyclable translation keys.")
