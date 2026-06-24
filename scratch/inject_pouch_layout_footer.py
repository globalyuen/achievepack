import json
import os

locales_dir = "/Users/ryanmacmini/Desktop/1 App i made/Master Achieve Pack/achieve pack website/achieve-pack/src/locales"
locales = ["en.json", "es.json", "fr.json", "zh-TW.json"]

translations = {
    "en": {
        "readyToLaunch": "Ready to Launch?",
        "joinBrands": "Join 2,000+ brands. Get instant quote. Start with 500 units.",
        "enterEmail": "ENTER_EMAIL",
        "bookCall": "Book Call",
        "categories": {
            "packaging": "Packaging",
            "materials": "Materials",
            "industries": "Industries",
            "usaMarket": "USA Market",
            "support": "Support",
            "certifications": "Certifications"
        },
        "links": {
            "standUpPouches": "[STAND-UP POUCHES]",
            "flatBottomBags": "[FLAT BOTTOM BAGS]",
            "spoutPouches": "[SPOUT POUCHES]",
            "flatPouches": "[FLAT POUCHES]",
            "vacuumPouches": "[VACUUM POUCHES]",
            "kSeal": "[K-SEAL FOR HEAVY WEIGHTS]",
            "allProducts": "[ALL PRODUCTS]",
            "compostable": "[COMPOSTABLE]",
            "recyclable": "[RECYCLABLE]",
            "plasticFreeKraft": "[PLASTIC-FREE KRAFT]",
            "tds": "[TECHNICAL DATA SHEETS]",
            "materialHub": "[MATERIAL HUB]",
            "coffeeTea": "[COFFEE & TEA]",
            "babyFood": "[BABY FOOD]",
            "frozenFood": "[FROZEN FOOD]",
            "snacks": "[SNACKS]",
            "petFood": "[PET FOOD]",
            "supplements": "[SUPPLEMENTS]",
            "sauces": "[SAUCES & CONDIMENTS]",
            "citrusOil": "[CITRUS OIL SOLUTIONS]",
            "compostableUsa": "[COMPOSTABLE USA]",
            "coffeeUsa": "[COFFEE USA]",
            "snacksUsa": "[SNACKS USA]",
            "labelingUsa": "[LABELING USA]",
            "blog": "[BLOG]",
            "colorAccuracy": "[COLOR ACCURACY]",
            "sizeGuide": "[SIZE GUIDE]",
            "unprintedSamples": "[UNPRINTED SAMPLES]",
            "techSpecs": "[TECH SPECS]",
            "customSample": "[CUSTOM PRINTED SAMPLE]",
            "stampFoil": "[STAMP FOIL RECYCLABILITY]",
            "drinkPouches": "[DRINK & LIQUID POUCHES]",
            "digitalPrint": "[DIGITAL PRINT 100PCS MOQ]",
            "bioBasedSpout": "[BIO-BASED SPOUT POUCHES]",
            "prepress": "[PREPRESS TRAPPING & KEYLINES]",
            "refillPouch": "[REFILL POUCH SYSTEMS]"
        },
        "legal": {
            "copyright": "© 2026 Achieve Pack. All rights reserved.",
            "privacy": "Privacy",
            "terms": "Terms",
            "returns": "Returns"
        }
    },
    "es": {
        "readyToLaunch": "¿Listo para Lanzar?",
        "joinBrands": "Únase a más de 2000 marcas. Cotización instantánea. Desde 500 uds.",
        "enterEmail": "INTRODUCIR_CORREO",
        "bookCall": "Agendar Llamada",
        "categories": {
            "packaging": "Embalaje",
            "materials": "Materiales",
            "industries": "Industrias",
            "usaMarket": "Mercado USA",
            "support": "Soporte",
            "certifications": "Certificaciones"
        },
        "links": {
            "standUpPouches": "[BOLSAS STAND-UP]",
            "flatBottomBags": "[BOLSAS DE FONDO PLANO]",
            "spoutPouches": "[BOLSAS CON BOQUILLA]",
            "flatPouches": "[BOLSAS PLANAS]",
            "vacuumPouches": "[BOLSAS AL VACÍO]",
            "kSeal": "[SELLO K PARA PESO PESADO]",
            "allProducts": "[TODOS LOS PRODUCTOS]",
            "compostable": "[COMPOSTABLE]",
            "recyclable": "[RECICLABLE]",
            "plasticFreeKraft": "[KRAFT SIN PLÁSTICO]",
            "tds": "[FICHAS TÉCNICAS]",
            "materialHub": "[CENTRO DE MATERIALES]",
            "coffeeTea": "[CAFÉ Y TÉ]",
            "babyFood": "[COMIDA PARA BEBÉS]",
            "frozenFood": "[ALIMENTOS CONGELADOS]",
            "snacks": "[SNACKS]",
            "petFood": "[COMIDA PARA MASCOTAS]",
            "supplements": "[SUPLEMENTOS]",
            "sauces": "[SALSAS Y CONDIMENTOS]",
            "citrusOil": "[SOLUCIONES DE ACEITE CÍTRICO]",
            "compostableUsa": "[COMPOSTABLE USA]",
            "coffeeUsa": "[CAFÉ USA]",
            "snacksUsa": "[SNACKS USA]",
            "labelingUsa": "[ETIQUETADO USA]",
            "blog": "[BLOG]",
            "colorAccuracy": "[PRECISIÓN DE COLOR]",
            "sizeGuide": "[GUÍA DE TAMAÑOS]",
            "unprintedSamples": "[MUESTRAS SIN IMPRIMIR]",
            "techSpecs": "[ESPECIFICACIONES TÉCNICAS]",
            "customSample": "[MUESTRA IMPRESA PERSONALIZADA]",
            "stampFoil": "[RECICLABILIDAD DEL LÁMINA ESTAMPADA]",
            "drinkPouches": "[BOLSAS PARA BEBIDAS Y LÍQUIDOS]",
            "digitalPrint": "[IMPRESIÓN DIGITAL MOQ 100 UDS]",
            "bioBasedSpout": "[BOLSAS CON BOQUILLA BIOLÓGICA]",
            "prepress": "[PREIMPRESIÓN: ATRAPAMIENTO Y LÍNEAS]",
            "refillPouch": "[SISTEMAS DE BOLSAS DE RECARGA]"
        },
        "legal": {
            "copyright": "© 2026 Achieve Pack. Todos los derechos reservados.",
            "privacy": "Privacidad",
            "terms": "Términos",
            "returns": "Devoluciones"
        }
    },
    "fr": {
        "readyToLaunch": "Prêt à Lancer ?",
        "joinBrands": "Rejoignez plus de 2000 marques. Devis instantané. À partir de 500 unités.",
        "enterEmail": "ENTRER_EMAIL",
        "bookCall": "Réserver un Appel",
        "categories": {
            "packaging": "Emballage",
            "materials": "Matériaux",
            "industries": "Industries",
            "usaMarket": "Marché USA",
            "support": "Support",
            "certifications": "Certifications"
        },
        "links": {
            "standUpPouches": "[SACHETS TENANT DEBOUT]",
            "flatBottomBags": "[SACS À FOND PLAT]",
            "spoutPouches": "[SACHETS À BEC]",
            "flatPouches": "[SACHETS PLATS]",
            "vacuumPouches": "[SACHETS SOUS VIDE]",
            "kSeal": "[SOUDURE K POUR POIDS LOURDS]",
            "allProducts": "[TOUS LES PRODUITS]",
            "compostable": "[COMPOSTABLE]",
            "recyclable": "[RECYCLABLE]",
            "plasticFreeKraft": "[KRAFT SANS PLASTIQUE]",
            "tds": "[FICHES TECHNIQUES]",
            "materialHub": "[CENTRE DES MATÉRIAUX]",
            "coffeeTea": "[CAFÉ & THÉ]",
            "babyFood": "[NOURRITURE BÉBÉ]",
            "frozenFood": "[ALIMENTS SURGELÉS]",
            "snacks": "[SNACKS]",
            "petFood": "[NOURRITURE ANIMAUX]",
            "supplements": "[SUPPLÉMENTS]",
            "sauces": "[SAUCES & CONDIMENTS]",
            "citrusOil": "[SOLUTIONS HUILE D'AGRUMES]",
            "compostableUsa": "[COMPOSTABLE USA]",
            "coffeeUsa": "[CAFÉ USA]",
            "snacksUsa": "[SNACKS USA]",
            "labelingUsa": "[ÉTIQUETAGE USA]",
            "blog": "[BLOG]",
            "colorAccuracy": "[PRÉCISION DES COULEURS]",
            "sizeGuide": "[GUIDE DES TAILLES]",
            "unprintedSamples": "[ÉCHANTILLONS NON IMPRIMÉS]",
            "techSpecs": "[SPÉCIFICATIONS TECHNIQUES]",
            "customSample": "[ÉCHANTILLON IMPRIMÉ PERSONNALISÉ]",
            "stampFoil": "[RECYCLABILITÉ DU DORAGE]",
            "drinkPouches": "[SACHETS BOISSONS & LIQUIDES]",
            "digitalPrint": "[IMPRESSION NUMÉRIQUE 100 PIÈCES MOQ]",
            "bioBasedSpout": "[SACHETS À BEC BIO-SOURCÉS]",
            "prepress": "[PRÉPRESSE: GROSSISSEMENT ET CONTOURS]",
            "refillPouch": "[SYSTÈMES DE SACHETS RECHARGE]"
        },
        "legal": {
            "copyright": "© 2026 Achieve Pack. Tous droits réservés.",
            "privacy": "Confidentialité",
            "terms": "Conditions",
            "returns": "Retours"
        }
    },
    "zh-TW": {
        "readyToLaunch": "準備好啟動了嗎？",
        "joinBrands": "加入 2,000+ 品牌的行列。獲取即時報價。500件起訂。",
        "enterEmail": "輸入電子郵件",
        "bookCall": "預約諮詢",
        "categories": {
            "packaging": "袋型選項",
            "materials": "材質選項",
            "industries": "應用產業",
            "usaMarket": "美國市場",
            "support": "客戶支援",
            "certifications": "環保認證"
        },
        "links": {
            "standUpPouches": "[直立袋]",
            "flatBottomBags": "[平底袋]",
            "spoutPouches": "[吸嘴袋]",
            "flatPouches": "[三面封平口袋]",
            "vacuumPouches": "[真空包裝袋]",
            "kSeal": "[K型封邊大容量袋]",
            "allProducts": "[所有產品]",
            "compostable": "[可堆肥材質]",
            "recyclable": "[可回收材質]",
            "plasticFreeKraft": "[無塑料牛皮紙]",
            "tds": "[技術數據表 TDS]",
            "materialHub": "[材質資訊中心]",
            "coffeeTea": "[咖啡與茶葉]",
            "babyFood": "[嬰幼兒副食品]",
            "frozenFood": "[冷凍食品]",
            "snacks": "[休閒零食]",
            "petFood": "[寵物食品]",
            "supplements": "[營養補充品]",
            "sauces": "[醬料與調味品]",
            "citrusOil": "[柑橘精油包裝方案]",
            "compostableUsa": "[美國可堆肥政策]",
            "coffeeUsa": "[美國咖啡包裝]",
            "snacksUsa": "[美國零食包裝]",
            "labelingUsa": "[美國環保標示指南]",
            "blog": "[官方部落格]",
            "colorAccuracy": "[色彩準確度指南]",
            "sizeGuide": "[尺寸指南]",
            "unprintedSamples": "[索取免費無印刷樣品]",
            "techSpecs": "[技術規格]",
            "customSample": "[索取客製印刷樣品]",
            "stampFoil": "[燙金燙銀的可回收性]",
            "drinkPouches": "[飲料與液體包裝袋]",
            "digitalPrint": "[100件起訂數位印刷]",
            "bioBasedSpout": "[生物基吸嘴袋]",
            "prepress": "[印前出血與套印指南]",
            "refillPouch": "[補充包裝系統]"
        },
        "legal": {
            "copyright": "© 2026 Achieve Pack. 保留所有權利。",
            "privacy": "隱私權政策",
            "terms": "服務條款",
            "returns": "退換貨政策"
        }
    }
}

for filename in locales:
    lang = filename.split(".")[0]
    filepath = os.path.join(locales_dir, filename)
    with open(filepath, 'r', encoding='utf-8') as f:
        data = json.load(f)
    
    data["pouchLayoutFooter"] = translations.get(lang, translations["en"])
    
    with open(filepath, 'w', encoding='utf-8') as f:
        json.dump(data, f, ensure_ascii=False, indent=2)

print("Injected pouchLayoutFooter translations.")
