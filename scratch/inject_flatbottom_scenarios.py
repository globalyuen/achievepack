import json
import os

locales_dir = "/Users/ryanmacmini/Desktop/1 App i made/Master Achieve Pack/achieve pack website/achieve-pack/src/locales"
locales = ["en.json", "es.json", "fr.json", "zh-TW.json"]

translations = {
    "en": {
        "title": "Industry Applications",
        "coffee": {
            "title": "Specialty Coffee",
            "desc": "5-panel branding with optional degassing valves. Perfect for premium roasted coffee beans.",
            "badge": "Share: 45%"
        },
        "pet": {
            "title": "Premium Pet Food",
            "desc": "Flat, stable base prevents tipping for heavy products.",
            "badge": "Share: 30%"
        },
        "superfood": {
            "title": "Superfoods & Snacks",
            "desc": "High shelf visibility and premium aesthetic for high-value products.",
            "badge": "Share: 25%"
        },
        "storyTitle": "Customer Success Story",
        "storyText": "Since switching to flat bottom bags, our premium coffee brand gained 30% more shelf space and increased retail sales by 40%.",
        "storyAuthor": "Boutique Coffee Roaster"
    },
    "es": {
        "title": "Aplicaciones en la Industria",
        "coffee": {
            "title": "Café de Especialidad",
            "desc": "Marca en 5 paneles con válvulas de desgasificación opcionales. Perfecto para granos de café tostados premium.",
            "badge": "Participación: 45%"
        },
        "pet": {
            "title": "Alimento Premium para Mascotas",
            "desc": "La base plana y estable evita vuelcos en productos pesados.",
            "badge": "Participación: 30%"
        },
        "superfood": {
            "title": "Superalimentos y Snacks",
            "desc": "Alta visibilidad en estantes y estética premium para productos de alto valor.",
            "badge": "Participación: 25%"
        },
        "storyTitle": "Historia de Éxito del Cliente",
        "storyText": "Desde que cambiamos a las bolsas de fondo plano, nuestra marca de café premium ganó un 30% más de espacio en los estantes y aumentó las ventas minoristas en un 40%.",
        "storyAuthor": "Tostador de Café Boutique"
    },
    "fr": {
        "title": "Applications Industrielles",
        "coffee": {
            "title": "Café de Spécialité",
            "desc": "Marquage sur 5 panneaux avec valves de dégazage en option. Parfait pour les grains de café torréfiés premium.",
            "badge": "Part: 45%"
        },
        "pet": {
            "title": "Nourriture Premium pour Animaux",
            "desc": "La base plate et stable empêche le basculement des produits lourds.",
            "badge": "Part: 30%"
        },
        "superfood": {
            "title": "Superaliments et Snacks",
            "desc": "Haute visibilité en rayon et esthétique haut de gamme pour les produits de grande valeur.",
            "badge": "Part: 25%"
        },
        "storyTitle": "Histoire de Réussite Client",
        "storyText": "Depuis que nous sommes passés aux sachets à fond plat, notre marque de café premium a gagné 30 % d'espace supplémentaire en rayon et a augmenté ses ventes au détail de 40 %.",
        "storyAuthor": "Torréfacteur de Café Boutique"
    },
    "zh-TW": {
        "title": "產業應用",
        "coffee": {
            "title": "精品咖啡",
            "desc": "五面印刷設計，可選配單向排氣閥。非常適合優質烘焙咖啡豆。",
            "badge": "佔比: 45%"
        },
        "pet": {
            "title": "高級寵物食品",
            "desc": "平穩的底部設計，防止重型產品傾倒。",
            "badge": "佔比: 30%"
        },
        "superfood": {
            "title": "超級食物與零食",
            "desc": "高價值的產品在貨架上擁有極高的能見度與優質美感。",
            "badge": "佔比: 25%"
        },
        "storyTitle": "客戶成功案例",
        "storyText": "自從改用平底袋後，我們的優質咖啡品牌在貨架上的空間增加了 30%，零售額成長了 40%。",
        "storyAuthor": "精品咖啡烘焙商"
    }
}

for filename in locales:
    lang = filename.split(".")[0]
    filepath = os.path.join(locales_dir, filename)
    with open(filepath, 'r', encoding='utf-8') as f:
        data = json.load(f)
    
    # Ensure nested keys exist
    try:
        sections = data["seoPages"]["pages"]["flatBottomBags"]["sections"]
        sections["industryScenarios"] = translations.get(lang, translations["en"])
    except KeyError:
        print(f"Skipping {filename} due to missing structure")
        continue
    
    with open(filepath, 'w', encoding='utf-8') as f:
        json.dump(data, f, ensure_ascii=False, indent=2)

print("Injected flatBottomBags industryScenarios translations.")
