import json
import os

locales_dir = "/Users/ryanmacmini/Desktop/1 App i made/Master Achieve Pack/achieve pack website/achieve-pack/src/locales"
locales = ["en.json", "es.json", "fr.json", "zh-TW.json"]

translations = {
    "en": {
        "materialVideoBlock": {
            "badge": "Material Showcase",
            "heading": "See the Material in Action",
            "subheading": "Watch real footage of our sustainable materials being handled, folded, and stress-tested.",
            "subheadingAp": "Real footage of our eco-friendly packaging structures in action.",
            "demoLabel": "LIVE DEMO",
            "verified": "Verified Lab Demo"
        },
        "cta": {
            "shopStarterKits": "Shop Starter Kits",
            "bookWholesaleCall": "Book Wholesale Call",
            "shopLowMoq": "Shop Low MOQ Store",
            "enterpriseQuote": "Get Enterprise Quote",
            "bookMeeting": "Book a Meeting",
            "bookConsultation": "Book Free Consultation",
            "orderSamplePack": "Order Sample Pack",
            "browseStore": "Browse Store"
        }
    },
    "es": {
        "materialVideoBlock": {
            "badge": "Exhibición de Materiales",
            "heading": "Vea el Material en Acción",
            "subheading": "Mire imágenes reales de nuestros materiales sostenibles siendo manipulados, doblados y sometidos a pruebas de estrés.",
            "subheadingAp": "Imágenes reales de nuestras estructuras de embalaje ecológico en acción.",
            "demoLabel": "DEMO EN VIVO",
            "verified": "Demostración Verificada en Laboratorio"
        },
        "cta": {
            "shopStarterKits": "Comprar Kits de Inicio",
            "bookWholesaleCall": "Llamada para Mayoristas",
            "shopLowMoq": "Tienda Baja Cantidad Mínima",
            "enterpriseQuote": "Cotización Corporativa",
            "bookMeeting": "Agendar una Reunión",
            "bookConsultation": "Consulta Gratuita",
            "orderSamplePack": "Pedir Muestras",
            "browseStore": "Explorar Tienda"
        }
    },
    "fr": {
        "materialVideoBlock": {
            "badge": "Vitrine des Matériaux",
            "heading": "Voir le Matériau en Action",
            "subheading": "Regardez des images réelles de nos matériaux durables manipulés, pliés et testés sous contrainte.",
            "subheadingAp": "Images réelles de nos structures d'emballage écologiques en action.",
            "demoLabel": "DÉMO EN DIRECT",
            "verified": "Démo Vérifiée en Laboratoire"
        },
        "cta": {
            "shopStarterKits": "Kits de Démarrage",
            "bookWholesaleCall": "Appel Vente en Gros",
            "shopLowMoq": "Boutique Faible Quantité",
            "enterpriseQuote": "Devis Entreprise",
            "bookMeeting": "Réserver une Réunion",
            "bookConsultation": "Consultation Gratuite",
            "orderSamplePack": "Commander des Échantillons",
            "browseStore": "Parcourir la Boutique"
        }
    },
    "zh-TW": {
        "materialVideoBlock": {
            "badge": "材質展示中心",
            "heading": "實際材質展示影片",
            "subheading": "觀看我們永續環保材質在實際操作、摺疊與壓力測試中的真實畫面。",
            "subheadingAp": "環保包裝結構實際應用的真實影片展示。",
            "demoLabel": "實景測試",
            "verified": "實驗室認證展示"
        },
        "cta": {
            "shopStarterKits": "購買新創體驗包",
            "bookWholesaleCall": "預約批發採購會議",
            "shopLowMoq": "前往小批量現貨商城",
            "enterpriseQuote": "獲取企業專屬報價",
            "bookMeeting": "預約線上會議",
            "bookConsultation": "預約免費包裝諮詢",
            "orderSamplePack": "索取免費實體樣品",
            "browseStore": "瀏覽線上商城"
        }
    }
}

for filename in locales:
    lang = filename.split(".")[0]
    filepath = os.path.join(locales_dir, filename)
    with open(filepath, 'r', encoding='utf-8') as f:
        data = json.load(f)
    
    if "seoPageLayout" not in data:
        data["seoPageLayout"] = {}
        
    data["seoPageLayout"]["materialVideoBlock"] = translations[lang]["materialVideoBlock"]
    data["seoPageLayout"]["cta"] = translations[lang]["cta"]
    
    with open(filepath, 'w', encoding='utf-8') as f:
        json.dump(data, f, ensure_ascii=False, indent=2)

print("Injected additional seoPageLayout translations.")
