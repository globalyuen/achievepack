import json
import os

BASE_DIR = os.path.abspath(os.path.dirname(os.path.dirname(__file__)))
LOCALES_FILE = os.path.join(BASE_DIR, 'src', 'locales', 'en.json')

with open(LOCALES_FILE, 'r', encoding='utf-8') as f:
    data = json.load(f)

if "seoPages" not in data:
    data["seoPages"] = {}
if "pages" not in data["seoPages"]:
    data["seoPages"]["pages"] = {}

pouchKraftDuplex = {
    "metaTitle": "Kraft Duplex Pouches | Medium Barrier for Coffee & Snacks | POUCH.ECO",
    "metaDescription": "Natural kraft paper pouches with medium barrier protection. Perfect for coffee, tea, nuts, and snacks. 6-12 month shelf life. Great eco-friendly look with real protection!",
    "ogTitle": "Kraft Duplex Pouches | Medium Barrier for Coffee & Snacks",
    "ogDescription": "Natural kraft paper pouches with medium barrier. 6-12 month shelf life for coffee, tea, nuts, and more!",
    "twitterTitle": "Kraft Duplex Pouches | Medium Barrier",
    "twitterDescription": "Natural kraft pouches with 6-12 month protection for coffee & snacks",
    "heroBadge": "MEDIUM BARRIER",
    "heroTitle1": "Kraft Duplex",
    "heroTitle2": "Medium Barrier",
    "heroSubtitle": "The sweet spot! Natural kraft paper exterior with metallized barrier inside. Perfect for coffee, tea, and snacks that need 6-12 months of freshness without the high barrier price tag.",
    "heroCta1": "Get Free Sample",
    "heroCta2": "View Pricing",
    "featuresTitle": "Why Choose Kraft Duplex?",
    "features": {
        "naturalLook": {
            "title": "Natural Kraft Look",
            "desc": "That rustic, eco-friendly vibe your customers love"
        },
        "freshness": {
            "title": "6-12 Month Freshness",
            "desc": "Medium barrier keeps products fresh for most needs"
        },
        "value": {
            "title": "Great Value",
            "desc": "More affordable than high barrier, better than low"
        },
        "coffee": {
            "title": "Perfect for Coffee",
            "desc": "The most popular choice for roasted coffee brands"
        }
    },
    "whatsInsideTitle": "What's Inside?",
    "outerLayerTitle": "Outer Layer",
    "outerLayerSub": "Kraft Paper",
    "outerLayerDesc": "80-120g natural brown paper",
    "outerLayerDetail": "That beautiful rustic look!",
    "barrierLayerTitle": "Barrier Layer",
    "barrierLayerSub": "Metallized Film",
    "barrierLayerDesc": "12-15µm aluminum coating",
    "barrierLayerDetail": "Blocks oxygen & moisture",
    "innerLayerTitle": "Inner Layer",
    "innerLayerSub": "PE Sealant",
    "innerLayerDesc": "Food-safe polyethylene",
    "innerLayerDetail": "Heat-sealable, FDA approved",
    "performanceTitle": "📊 Performance Numbers",
    "otrTitle": "Oxygen Barrier (OTR)",
    "otrValue": "5-20",
    "otrUnit": "cc/m²/day",
    "mvtrTitle": "Moisture Barrier (MVTR)",
    "mvtrValue": "2-5",
    "mvtrUnit": "g/m²/day",
    "shelfLifeTitle": "Shelf Life",
    "shelfLifeValue": "6-12",
    "shelfLifeUnit": "months",
    "perfectForTitle": "Perfect For...",
    "applications": {
        "app1": "Roasted coffee beans",
        "app2": "Ground coffee",
        "app3": "Loose leaf tea",
        "app4": "Roasted nuts & seeds",
        "app5": "Dried fruits",
        "app6": "Protein powders",
        "app7": "Granola & cereal",
        "app8": "Spice blends",
        "app9": "Superfood powders",
        "app10": "Energy bars",
        "app11": "Chocolate & cocoa",
        "app12": "Pet treats"
    },
    "rightForYouTitle": "Is This Right for You?",
    "bestForTitle": "Best For",
    "bestForList": {
        "item1": "✅ Coffee & tea products",
        "item2": "✅ 6-12 month shelf life needs",
        "item3": "✅ Products sensitive to oxygen/moisture",
        "item4": "✅ Premium eco-friendly branding",
        "item5": "✅ Natural aesthetic appeal",
        "item6": "✅ Budget-conscious brands"
    },
    "notIdealTitle": "Not Ideal For",
    "notIdealList": {
        "item1": "⚠️ 18+ month shelf life requirements",
        "item2": "⚠️ Extremely oxygen-sensitive items",
        "item3": "⚠️ High-moisture environments",
        "item4": "⚠️ Products needing clear windows",
        "item5": "⚠️ Maximum recyclability needs"
    },
    "needLongerShelfLife": "💡 Need longer shelf life? Check out our ",
    "highBarrierKraftLinkText": "High Barrier Kraft",
    "pricingTitle": "Typical Pricing",
    "pricingPrice": "$0.35 - $0.55 per pouch",
    "pricingPriceDetail": "depending on size, quantity, and printing",
    "pricingMoq": "MOQ: 2,000 units • Lead time: 6-8 weeks after approval",
    "pricingCta": "Get Exact Quote",
    "ctaTitle": "Ready to Get Started?",
    "ctaSubtitle": "Book a free consultation and get samples within 2-3 weeks!",
    "ctaButton": "Book Free Consultation"
}

pouchKraftHighBarrier = {
    "metaTitle": "Kraft High Barrier Packaging | Maximum Shelf Life | Pouch.eco",
    "metaDescription": "Premium kraft paper pouches with high-barrier aluminum or EVOH protection. Ideal for coffee, nuts, and sensitive food products requiring long shelf life.",
    "metaKeywords": "kraft pouches, high barrier kraft, coffee bags, foil lined kraft, aluminum barrier, Pouch.eco",
    "heroBadge": "PREMIUM_BARRIER_V9.2",
    "heroTitle1": "Kraft.",
    "heroTitle2": "Max.",
    "heroTitle3": "Shield.",
    "heroSubtitle": "Artisan aesthetic meets industrial protection. Premium Japanese Kraft paper fused with high-barrier aluminum or clear EVOH for 24+ month flavor preservation.",
    "heroCta1": "Get Premium Quote",
    "heroCta2": "Browse Kraft Styles",
    "techBadge": "TRI_LAMINATE_TECH",
    "techTitle1": "The 3-Layer",
    "techTitle2": "Freshness",
    "techTitle3": "Lock.",
    "techDescription": "Our Kraft High Barrier pouches aren't just paper. They are complex multi-layer laminates engineered to block oxygen, moisture, and UV light with 99.9% efficiency.",
    "layer1": "Outer: Premium FSC Kraft Paper (Aesthetic + Texture)",
    "layer2": "Middle: ALU Foil or EVOH (Absolute Shield)",
    "layer3": "Inner: Food-Safe PE (Structural Seal)",
    "matrixTitle": "Barrier Matrix",
    "matrixSubtitle": "Choose the right shield for your product's sensitivity.",
    "levels": {
        "level1": {
            "name": "Level 1: Standard",
            "barrier": "VMPET",
            "use": "Dry Snacks, Tea",
            "shelf": "6-9 Months"
        },
        "level2": {
            "name": "Level 2: High",
            "barrier": "ALU (Foil)",
            "use": "Coffee, Powder",
            "shelf": "12-24 Months"
        },
        "level3": {
            "name": "Level 3: Ultra",
            "barrier": "EVOH-PE",
            "use": "Specialty Liquid",
            "shelf": "18+ Months"
        }
    },
    "matrixLabelApplication": "Application:",
    "matrixLabelShelfLife": "Shelf Life:",
    "uvTitle": "UV Protection",
    "uvDesc": "The opaque aluminum layer blocks 100% of light, preventing oxidation of oils and color fading in premium products.",
    "moistureTitle": "Moisture Shield",
    "moistureDesc": "Maintains target moisture levels for 18+ months. Essential for maintaining the crispness of nuts and the volatility of coffee aromatics.",
    "aromaTitle": "Aroma Retention",
    "aromaDesc": "Prevents scent migration. Your coffee stays smelling like coffee, and external odors cannot penetrate the barrier.",
    "ctaBadge": "LOCK_IN_FLAVOR",
    "ctaTitle1": "Fresh.",
    "ctaTitle2": "Forever.",
    "ctaDescription": "Don't compromise on flavor. Give your premium brand the barrier protection it deserves with our Kraft High Barrier solutions.",
    "ctaButton1": "Request Premium Kit",
    "ctaButton2": "Barrier Audit Call"
}

data["seoPages"]["pages"]["pouchKraftDuplex"] = pouchKraftDuplex
data["seoPages"]["pages"]["pouchKraftHighBarrier"] = pouchKraftHighBarrier

with open(LOCALES_FILE, 'w', encoding='utf-8') as f:
    json.dump(data, f, ensure_ascii=False, indent=4)

print("Successfully updated en.json with correct translations for Duplex and High Barrier Kraft.")
