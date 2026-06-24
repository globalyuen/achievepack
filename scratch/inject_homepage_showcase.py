import json
import os

locales_dir = "/Users/ryanmacmini/Desktop/1 App i made/Master Achieve Pack/achieve pack website/achieve-pack/src/locales"
locales = ["en.json", "es.json", "fr.json", "zh-TW.json"]

translations = {
    "en": {
        "spouted": {
            "tag": "💧 Liquids & Purees",
            "title": "Industrial Compostable Spouted Pouch",
            "desc": "Certified industrial compostable flexible pouch featuring a fully plant-based rigid spout. Replaces conventional plastic spout barrier options with zero plastic footprint.",
            "moqLabel": "MOQ",
            "moqVal": "2,000 units",
            "certLabel": "Certifications",
            "certVal": "EN 13432, ASTM D6400"
        },
        "flatBottom": {
            "tag": "🌱 Dry Goods & Coffee",
            "title": "Home Compostable Flat Bottom Pouch",
            "desc": "Premium 100% home compostable box bottom structure that delivers outstanding shelf presence. Decomposes safely and naturally in home backyard compost bins.",
            "moqLabel": "MOQ",
            "moqVal": "1,000 units",
            "certLabel": "Certifications",
            "certVal": "OK Compost HOME"
        }
    },
    "es": {
        "spouted": {
            "tag": "💧 Líquidos y Purés",
            "title": "Bolsa con Boquilla Compostable Industrial",
            "desc": "Bolsa flexible certificada como compostable industrial que presenta una boquilla rígida totalmente basada en plantas. Reemplaza las opciones convencionales de boquilla de plástico con cero huella plástica.",
            "moqLabel": "MOQ",
            "moqVal": "2,000 unidades",
            "certLabel": "Certificaciones",
            "certVal": "EN 13432, ASTM D6400"
        },
        "flatBottom": {
            "tag": "🌱 Productos Secos y Café",
            "title": "Bolsa de Fondo Plano Compostable Doméstica",
            "desc": "Estructura de fondo de caja 100% compostable doméstica de primera calidad que ofrece una excelente presencia en los estantes. Se descompone de forma segura y natural en los contenedores de compost del patio trasero.",
            "moqLabel": "MOQ",
            "moqVal": "1,000 unidades",
            "certLabel": "Certificaciones",
            "certVal": "OK Compost HOME"
        }
    },
    "fr": {
        "spouted": {
            "tag": "💧 Liquides et Purées",
            "title": "Sachet à Bec Compostable Industriel",
            "desc": "Sachet flexible certifié compostable industriellement avec un bec rigide entièrement à base de plantes. Remplace les options conventionnelles de barrière avec bec en plastique avec une empreinte plastique nulle.",
            "moqLabel": "MOQ",
            "moqVal": "2 000 unités",
            "certLabel": "Certifications",
            "certVal": "EN 13432, ASTM D6400"
        },
        "flatBottom": {
            "tag": "🌱 Produits Secs et Café",
            "title": "Sachet à Fond Plat Compostable à Domicile",
            "desc": "Structure de fond plat 100% compostable à domicile haut de gamme qui offre une présence exceptionnelle en rayon. Se décompose en toute sécurité et naturellement dans les bacs à compost de jardin.",
            "moqLabel": "MOQ",
            "moqVal": "1 000 unités",
            "certLabel": "Certifications",
            "certVal": "OK Compost HOME"
        }
    },
    "zh-TW": {
        "spouted": {
            "tag": "💧 液體與果泥",
            "title": "工業可堆肥吸嘴袋",
            "desc": "獲得認證的工業可堆肥軟包裝袋，配備全植物基硬質吸嘴。取代傳統塑膠吸嘴阻隔選項，實現零塑膠足跡。",
            "moqLabel": "最低起訂量",
            "moqVal": "2,000 件",
            "certLabel": "認證",
            "certVal": "EN 13432, ASTM D6400"
        },
        "flatBottom": {
            "tag": "🌱 乾貨與咖啡",
            "title": "家庭可堆肥平底袋",
            "desc": "優質 100% 家庭可堆肥平底結構，提供卓越的貨架展示效果。在家庭後院堆肥桶中安全自然地分解。",
            "moqLabel": "最低起訂量",
            "moqVal": "1,000 件",
            "certLabel": "認證",
            "certVal": "OK Compost HOME"
        }
    }
}

for filename in locales:
    lang = filename.split(".")[0]
    filepath = os.path.join(locales_dir, filename)
    with open(filepath, 'r', encoding='utf-8') as f:
        data = json.load(f)
    
    # Ensure nested keys exist
    if "seoPages" not in data:
        data["seoPages"] = {}
    if "pages" not in data["seoPages"]:
        data["seoPages"]["pages"] = {}
    if "pouchHomePage" not in data["seoPages"]["pages"]:
        data["seoPages"]["pages"]["pouchHomePage"] = {}
    if "showcase" not in data["seoPages"]["pages"]["pouchHomePage"]:
        data["seoPages"]["pages"]["pouchHomePage"]["showcase"] = {}
        
    data["seoPages"]["pages"]["pouchHomePage"]["showcase"].update(translations.get(lang, translations["en"]))
    
    with open(filepath, 'w', encoding='utf-8') as f:
        json.dump(data, f, ensure_ascii=False, indent=2)

print("Injected pouchHomePage showcase translations.")
