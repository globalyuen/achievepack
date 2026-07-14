import json
import os

locales_dir = 'src/locales'

en_keys = {
  "title": "Molded Pulp Packaging Benefits & Engineering Solutions | Achieve Pack",
  "metaDesc": "Discover why molded pulp packaging is the ultimate sustainable alternative to plastic foam. Explore the 5 major pain points solved and engineering insights.",
  "heroTitle": "The Engineering Benefits of Molded Pulp Packaging",
  "heroSubtitle": "Why advanced thermoformed molded pulp is replacing plastic foam in high-end electronics and cosmetics."
}

es_keys = {
  "title": "Beneficios y Soluciones de Ingeniería del Empaque de Pulpa Moldeada | Achieve Pack",
  "metaDesc": "Descubra por qué el empaque de pulpa moldeada es la mejor alternativa sostenible a la espuma plástica.",
  "heroTitle": "Los Beneficios de Ingeniería del Empaque de Pulpa Moldeada",
  "heroSubtitle": "Por qué la pulpa moldeada termoformada avanzada está reemplazando a la espuma plástica en electrónica y cosmética de alta gama."
}

fr_keys = {
  "title": "Avantages et Solutions d'Ingénierie des Emballages en Pulpe Moulée | Achieve Pack",
  "metaDesc": "Découvrez pourquoi l'emballage en pulpe moulée est l'alternative durable ultime à la mousse plastique.",
  "heroTitle": "Les Avantages d'Ingénierie de l'Emballage en Pulpe Moulée",
  "heroSubtitle": "Pourquoi la pulpe moulée thermoformée avancée remplace la mousse plastique dans l'électronique et les cosmétiques haut de gamme."
}

zh_keys = {
  "title": "紙漿塑模包裝優勢與工程解決方案 | Achieve Pack",
  "metaDesc": "了解為何紙漿塑模包裝是取代塑料泡沫的最佳可持續環保替代方案。",
  "heroTitle": "紙漿塑模包裝的工程優勢",
  "heroSubtitle": "為何先進的熱成型紙漿塑模正在取代高端電子與化妝品中的塑料泡沫。"
}

langs = {'en.json': en_keys, 'es.json': es_keys, 'fr.json': fr_keys, 'zh-TW.json': zh_keys}

for file, new_keys in langs.items():
    path = os.path.join(locales_dir, file)
    with open(path, 'r', encoding='utf-8') as f:
        data = json.load(f)
    
    if "seoPages" not in data: data["seoPages"] = {}
    if "pages" not in data["seoPages"]: data["seoPages"]["pages"] = {}
    data["seoPages"]["pages"]["moldedPulpPackagingBenefits"] = new_keys

    with open(path, 'w', encoding='utf-8') as f:
        json.dump(data, f, ensure_ascii=False, indent=2)

print("Updated translation JSON files!")
