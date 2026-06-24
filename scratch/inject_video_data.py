import json
import os

locales_dir = "/Users/ryanmacmini/Desktop/1 App i made/Master Achieve Pack/achieve pack website/achieve-pack/src/locales"
locales = ["en.json", "es.json", "fr.json", "zh-TW.json"]

translations = {
    "en": {
        "compostable": {
            "title": "Compostable Solution",
            "badge": "100% Compostable",
            "desc": "Fully compostable flexible packaging certified under ASTM D6400 and EN 13432. Engineered to break down completely in industrial or home composting environments within 180 days, returning to the soil with zero toxic residues.",
            "bullets": [
                "ASTM D6400 & EN 13432 Certified",
                "Breaks down within 180 days in soil",
                "High gas & moisture barrier options",
                "Food-contact safe (FDA compliant)"
            ]
        },
        "pcr": {
            "title": "Post-Consumer Recycled (PCR)",
            "badge": "Up to 100% Recycled Content",
            "desc": "Made from high-quality post-consumer recycled plastic waste. Our PCR structures reduce carbon footprint and keep plastic out of landfills and oceans, while maintaining premium barrier strength.",
            "bullets": [
                "Saves post-consumer waste from landfills",
                "Lowers carbon footprint substantially",
                "Meets consumer demand for recycled packaging",
                "Excellent tear resistance & print quality"
            ]
        },
        "biope": {
            "title": "Plant-Based Bio-PE",
            "badge": "100% Sugarcane Ethanol",
            "desc": "Derived from sustainably-farmed Brazilian sugarcane. It captures atmospheric CO2 during growth and is a direct drop-in replacement for traditional PE, meaning it fits perfectly in current recycling streams.",
            "bullets": [
                "Captures CO2 during plant growth",
                "100% recyclable in regular PE stream (#4)",
                "Identical physical properties to fossil-fuel PE",
                "Reduces dependence on fossil resources"
            ]
        },
        "recyclable": {
            "title": "Recyclable Mono-Material",
            "badge": "100% Mono-Material",
            "desc": "Engineered using Mono-PE or Mono-PP structures to enable simple, circular sorting and recycling. Combined with specialized high-barrier coatings to preserve freshness without compromising recyclability.",
            "bullets": [
                "100% recyclable mono-polymer structure",
                "Meets EU Circular Economy directives",
                "EVOH barrier layer for oxygen protection",
                "Highly customizable surface finishes"
            ]
        }
    },
    "es": {
        "compostable": {
            "title": "Solución Compostable",
            "badge": "100% Compostable",
            "desc": "Embalaje flexible totalmente compostable certificado bajo ASTM D6400 y EN 13432. Diseñado para descomponerse completamente en entornos de compostaje industrial o doméstico en 180 días, volviendo al suelo sin residuos tóxicos.",
            "bullets": [
                "Certificado ASTM D6400 y EN 13432",
                "Se descompone en 180 días en el suelo",
                "Opciones de alta barrera contra gases y humedad",
                "Seguro para contacto con alimentos (cumple FDA)"
            ]
        },
        "pcr": {
            "title": "Reciclado Post-Consumo (PCR)",
            "badge": "Hasta 100% Contenido Reciclado",
            "desc": "Hecho de residuos plásticos reciclados post-consumo de alta calidad. Nuestras estructuras PCR reducen la huella de carbono y mantienen el plástico fuera de los vertederos y océanos, manteniendo una excelente fuerza de barrera.",
            "bullets": [
                "Salva residuos post-consumo de los vertederos",
                "Reduce sustancialmente la huella de carbono",
                "Satisface la demanda de envases reciclados",
                "Excelente resistencia al desgarro y calidad de impresión"
            ]
        },
        "biope": {
            "title": "Bio-PE Basado en Plantas",
            "badge": "100% Etanol de Caña de Azúcar",
            "desc": "Derivado de caña de azúcar brasileña cultivada de forma sostenible. Captura CO2 atmosférico durante el crecimiento y es un reemplazo directo del PE tradicional, encajando perfectamente en las corrientes de reciclaje actuales.",
            "bullets": [
                "Captura CO2 durante el crecimiento de la planta",
                "100% reciclable en corriente regular de PE (#4)",
                "Propiedades físicas idénticas al PE fósil",
                "Reduce la dependencia de recursos fósiles"
            ]
        },
        "recyclable": {
            "title": "Mono-Material Reciclable",
            "badge": "100% Mono-Material",
            "desc": "Diseñado usando estructuras Mono-PE o Mono-PP para permitir una clasificación y reciclaje simple y circular. Combinado con recubrimientos especializados de alta barrera para preservar la frescura sin comprometer la reciclabilidad.",
            "bullets": [
                "Estructura mono-polímero 100% reciclable",
                "Cumple con las directivas de Economía Circular de la UE",
                "Capa de barrera EVOH para protección contra oxígeno",
                "Acabados de superficie altamente personalizables"
            ]
        }
    },
    "fr": {
        "compostable": {
            "title": "Solution Compostable",
            "badge": "100% Compostable",
            "desc": "Emballage flexible entièrement compostable certifié selon ASTM D6400 et EN 13432. Conçu pour se décomposer complètement dans des environnements de compostage industriels ou domestiques en 180 jours, retournant au sol sans résidus toxiques.",
            "bullets": [
                "Certifié ASTM D6400 & EN 13432",
                "Se décompose en 180 jours dans le sol",
                "Options haute barrière gaz & humidité",
                "Contact alimentaire sûr (conforme FDA)"
            ]
        },
        "pcr": {
            "title": "Recyclé Post-Consommation (PCR)",
            "badge": "Jusqu'à 100% de Contenu Recyclé",
            "desc": "Fabriqué à partir de déchets plastiques recyclés post-consommation de haute qualité. Nos structures PCR réduisent l'empreinte carbone et évitent que le plastique ne finisse dans les décharges et les océans, tout en conservant une force de barrière premium.",
            "bullets": [
                "Sauve les déchets post-consommation des décharges",
                "Réduit considérablement l'empreinte carbone",
                "Répond à la demande des consommateurs",
                "Excellente résistance à la déchirure et qualité d'impression"
            ]
        },
        "biope": {
            "title": "Bio-PE d'Origine Végétale",
            "badge": "100% Éthanol de Canne à Sucre",
            "desc": "Dérivé de canne à sucre brésilienne cultivée durablement. Il capture le CO2 atmosphérique pendant sa croissance et remplace directement le PE traditionnel, s'intégrant parfaitement dans les filières de recyclage actuelles.",
            "bullets": [
                "Capture le CO2 pendant la croissance",
                "100% recyclable dans la filière PE classique (#4)",
                "Propriétés physiques identiques au PE fossile",
                "Réduit la dépendance aux ressources fossiles"
            ]
        },
        "recyclable": {
            "title": "Mono-Matériau Recyclable",
            "badge": "100% Mono-Matériau",
            "desc": "Conçu avec des structures Mono-PE ou Mono-PP pour permettre un tri et un recyclage simples et circulaires. Combiné avec des revêtements haute barrière spécialisés pour préserver la fraîcheur sans compromettre la recyclabilité.",
            "bullets": [
                "Structure mono-polymère 100% recyclable",
                "Conforme aux directives d'Économie Circulaire de l'UE",
                "Couche barrière EVOH pour la protection contre l'oxygène",
                "Finitions de surface hautement personnalisables"
            ]
        }
    },
    "zh-TW": {
        "compostable": {
            "title": "可堆肥環保方案",
            "badge": "100% 可堆肥材質",
            "desc": "完全可堆肥的軟包裝，符合 ASTM D6400 和 EN 13432 認證。專為在工業或家庭堆肥環境中180天內完全分解而設計，回歸土壤且無毒性殘留。",
            "bullets": [
                "ASTM D6400 & EN 13432 雙認證",
                "在土壤中180天內完全分解",
                "可選擇高氣體及水分阻隔層",
                "食品接觸安全 (符合 FDA 規範)"
            ]
        },
        "pcr": {
            "title": "消費後回收塑料 (PCR)",
            "badge": "最高 100% 回收內容物",
            "desc": "採用高品質消費後回收塑料廢棄物製成。我們的 PCR 結構有效減少碳足跡，並防止塑料進入垃圾掩埋場和海洋，同時保持優異的阻隔強度。",
            "bullets": [
                "從垃圾掩埋場挽救消費後廢棄物",
                "大幅降低產品碳足跡",
                "滿足消費者對回收包裝的需求",
                "優異的抗撕裂強度與印刷品質"
            ]
        },
        "biope": {
            "title": "植物基生物 PE",
            "badge": "100% 甘蔗提取乙醇",
            "desc": "源自永續種植的巴西甘蔗。在植物生長過程中吸收大氣中的 CO2，並且是傳統 PE 的直接替代品，完美融入現有的回收系統。",
            "bullets": [
                "在植物生長過程中吸收 CO2",
                "可在常規 PE 回收流中 100% 回收 (#4)",
                "物理性質與化石燃料 PE 完全相同",
                "減少對化石燃料資源的依賴"
            ]
        },
        "recyclable": {
            "title": "可回收單一材質",
            "badge": "100% 單一材質",
            "desc": "採用 Mono-PE 或 Mono-PP 結構設計，實現簡單、循環的分類和回收。結合專業的高阻隔塗層，在不影響可回收性的情況下保持產品新鮮。",
            "bullets": [
                "100% 可回收的單一聚合物結構",
                "符合歐盟循環經濟指令",
                "配備 EVOH 阻隔層，有效阻擋氧氣",
                "高度客製化的表面印刷效果"
            ]
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
        
    data["seoPageLayout"]["videoData"] = translations.get(lang, translations["en"])
    
    with open(filepath, 'w', encoding='utf-8') as f:
        json.dump(data, f, ensure_ascii=False, indent=2)

print("Injected videoData translations.")
