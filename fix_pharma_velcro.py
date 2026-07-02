import json
import os

locales_dir = "/Users/ryanmacmini/Desktop/1 App i made/Master Achieve Pack/achieve pack website/achieve-pack/src/locales"
files = ["en.json", "es.json", "fr.json", "zh-TW.json"]

new_text = {
    "en.json": "From Ryan Wong's Engineering Notebook: Pharmaceutical Velcro packaging requires stringent adherence to ISO 15378 standards for primary packaging materials for medicinal products. We utilize a high-barrier PET/AL/PE structure to ensure zero moisture and oxygen transmission. The specialized micro-hook Velcro closure is designed specifically for child resistance, passing rigorous ASTM D3475 protocol testing while remaining accessible for senior patients with limited dexterity.",
    "es.json": "Del Cuaderno de Ingeniería de Ryan Wong: Los envases farmacéuticos con cierre Velcro requieren un estricto cumplimiento de los estándares ISO 15378 para materiales de envasado primario de medicamentos. Utilizamos una estructura de alta barrera PET/AL/PE para garantizar la nula transmisión de humedad y oxígeno. El cierre especializado de microganchos Velcro está diseñado específicamente para ser a prueba de niños, superando las rigurosas pruebas del protocolo ASTM D3475, a la vez que permanece accesible para pacientes mayores.",
    "fr.json": "Du Carnet d'Ingénierie de Ryan Wong : L'emballage pharmaceutique Velcro exige un respect strict de la norme ISO 15378 pour les matériaux d'emballage primaire des médicaments. Nous utilisons une structure PET/AL/PE à haute barrière pour assurer une transmission nulle de l'humidité et de l'oxygène. La fermeture Velcro à micro-crochets spécialisée est conçue spécifiquement pour la sécurité des enfants, satisfaisant aux tests rigoureux du protocole ASTM D3475 tout en restant accessible aux patients âgés.",
    "zh-TW.json": "來自 Ryan Wong 的工程筆記：醫療級魔鬼氈包裝需要嚴格遵守 ISO 15378 醫療產品初級包裝材料標準。我們採用高阻隔 PET/AL/PE 結構，確保零水分和氧氣穿透。特殊的微型掛鉤魔鬼氈封口專為防兒童開啟而設計，通過了嚴格的 ASTM D3475 協議測試，同時保持年長患者易於開啟的便利性。"
}

for f in files:
    filepath = os.path.join(locales_dir, f)
    if os.path.exists(filepath):
        with open(filepath, 'r', encoding='utf-8') as file:
            data = json.load(file)
            
        if 'seo_topics' in data and 'pharma_velcro' in data['seo_topics']:
            data['seo_topics']['pharma_velcro']['eeatDetails'] = new_text[f]
            print(f"Fixed {f}")
            
            with open(filepath, 'w', encoding='utf-8') as file:
                json.dump(data, file, ensure_ascii=False, indent=2)
        else:
            print(f"Key not found in {f}")
