import os
import re
import json

solutions_dir = "/Users/ryanmacmini/Desktop/1 App i made/Master Achieve Pack/achieve pack website/achieve-pack/src/pages/solutions"
locales_dir = "/Users/ryanmacmini/Desktop/1 App i made/Master Achieve Pack/achieve pack website/achieve-pack/src/locales"

def load_json(name):
    path = os.path.join(locales_dir, name)
    if os.path.exists(path):
        with open(path, 'r', encoding='utf-8') as f:
            return json.load(f)
    return {}

en_json = load_json("en.json")
es_json = load_json("es.json")
fr_json = load_json("fr.json")
zh_json = load_json("zh-TW.json")

for d in [en_json, es_json, fr_json, zh_json]:
    if "seoPages" not in d:
        d["seoPages"] = {}
    if "pages" not in d["seoPages"]:
        d["seoPages"]["pages"] = {}

# Terms mapping dictionary for technical translation
ES_TERMS = [
    ("Bio-PE Recyclable", "Bio-PE Reciclable"),
    ("Bio-PE", "Bio-PE (Polietileno de Origen Vegetal)"),
    ("Compostable", "Compostable Certificado"),
    ("Recyclable Mono-PE", "Mono-PE Reciclable #4"),
    ("PCR Recycled", "Reciclado PCR Post-Consumo"),
    ("Flat Bottom Box Pouch", "Bolsa de Fondo Plano Tipo Caja"),
    ("Flat Bottom Pouch", "Bolsa de Fondo Plano"),
    ("Stand Up Doypack", "Bolsa Stand Up Doypack"),
    ("Stand Up Pouch", "Bolsa Stand Up"),
    ("Side Gusset Pouch", "Bolsa con Fuelle Lateral"),
    ("Side Gusset Bag", "Bolsa con Fuelle Lateral"),
    ("Quad Seal Pouch", "Bolsa de Cuatro Sellos"),
    ("Spout Pouch", "Bolsa con Boquilla Spout"),
    ("Pillow Pouch", "Bolsa Tipo Almohadilla / Sello Central"),
    ("Sachet", "Sobre / Sachet 3 Sellos"),
    ("Flow Wrap", "Envoltorio Horizontal Flow Wrap"),
    ("One-Way Degassing Valve", "Válvula de Desgasificación Unidireccional"),
    ("Degassing Valve", "Válvula de Desgasificación"),
    ("Pocket Zipper", "Cierre Zipper de Bolsillo"),
    ("EVOH High Barrier", "Barrera de Alto Rendimiento EVOH"),
    ("Soft-Touch Velvet Matte Varnish", "Barniz Mate Tacto Terciopelo Soft-Touch"),
    ("Soft-Touch Matte", "Acabado Mate Soft-Touch"),
    ("Engineering Solution", "Solución de Ingeniería"),
    ("Packaging Engineering Notebook", "Cuaderno de Ingeniería de Empaque"),
    ("Ryan Wong", "Ryan Wong"),
    ("Co-Founder & Chief Packaging Engineer", "Cofundador e Ingeniero Jefe de Empaque"),
]

FR_TERMS = [
    ("Bio-PE Recyclable", "Bio-PE Recyclable"),
    ("Bio-PE", "Bio-PE (Polyéthylène Végétal)"),
    ("Compostable", "Compostable Certifié"),
    ("Recyclable Mono-PE", "Mono-PE Recyclable #4"),
    ("PCR Recycled", "Plastique Recyclé PCR Post-Consommation"),
    ("Flat Bottom Box Pouch", "Sachet à Fond Plat Style Boîte"),
    ("Flat Bottom Pouch", "Sachet à Fond Plat"),
    ("Stand Up Doypack", "Sachet Stand Up Doypack"),
    ("Stand Up Pouch", "Sachet Stand Up"),
    ("Side Gusset Pouch", "Sachet à Soufflets Latéraux"),
    ("Side Gusset Bag", "Sachet à Soufflets Latéraux"),
    ("Quad Seal Pouch", "Sachet à Quatre Soudures"),
    ("Spout Pouch", "Sachet à Bec Verseur Spout"),
    ("Pillow Pouch", "Sachet Coussin / Soudure Centrale"),
    ("Sachet", "Sachet 3 Soudures"),
    ("Flow Wrap", "Emballage Horizontal Flow Wrap"),
    ("One-Way Degassing Valve", "Valve de Dégazage Unidirectionnelle"),
    ("Degassing Valve", "Valve de Dégazage"),
    ("Pocket Zipper", "Fermeture Éclair à Poche (Pocket Zipper)"),
    ("EVOH High Barrier", "Barrière Haute Performance EVOH"),
    ("Soft-Touch Velvet Matte Varnish", "Vernis Mat Toucher Velours Soft-Touch"),
    ("Soft-Touch Matte", "Finition Mat Soft-Touch"),
    ("Engineering Solution", "Solution d'Ingénierie"),
    ("Packaging Engineering Notebook", "Carnet d'Ingénierie de l'Emballage"),
    ("Ryan Wong", "Ryan Wong"),
    ("Co-Founder & Chief Packaging Engineer", "Cofondateur et Ingénieur en Chef de l'Emballage"),
]

ZH_TERMS = [
    ("Bio-PE Recyclable", "Bio-PE 可回收甘蔗塑料"),
    ("Bio-PE", "Bio-PE 植物基甘蔗塑料"),
    ("Compostable", "認證可堆肥環保材質"),
    ("Recyclable Mono-PE", "100% 可回收單一 PE 材質"),
    ("PCR Recycled", "PCR 消費後回收塑料"),
    ("Flat Bottom Box Pouch", "5面平底盒型袋"),
    ("Flat Bottom Pouch", "平底盒型袋"),
    ("Stand Up Doypack", "自立袋 Doypack"),
    ("Stand Up Pouch", "自立袋"),
    ("Side Gusset Pouch", "側風琴風袋"),
    ("Side Gusset Bag", "側風琴風袋"),
    ("Quad Seal Pouch", "四邊封袋"),
    ("Spout Pouch", "吸嘴袋"),
    ("Pillow Pouch", "枕型背封袋"),
    ("Sachet", "三邊封小袋 Sachet"),
    ("Flow Wrap", "橫式 Pillow 枕型包膜"),
    ("One-Way Degassing Valve", "單向排氣閥"),
    ("Degassing Valve", "單向排氣閥"),
    ("Pocket Zipper", "口袋式拉鏈 Pocket Zipper"),
    ("EVOH High Barrier", "EVOH 超高阻隔層"),
    ("Soft-Touch Velvet Matte Varnish", "天鵝絨觸感柔霧啞光油墨"),
    ("Soft-Touch Matte", "柔霧啞光質感"),
    ("Engineering Solution", "工程技術解決方案"),
    ("Packaging Engineering Notebook", "包裝工程師手記"),
    ("Ryan Wong", "Ryan Wong (黃工程師)"),
    ("Co-Founder & Chief Packaging Engineer", "聯合創辦人暨首席包裝工程師"),
]

def translate_str(text, lang):
    if not text:
        return text
    res = text
    terms = ZH_TERMS if lang == 'zh' else (ES_TERMS if lang == 'es' else FR_TERMS)
    for src, tgt in terms:
        res = res.replace(src, tgt)
    
    # Language prefix / suffix touchups
    if lang == 'es':
        if "Stop Sacrificing" in text:
            res = "No sacrifique la frescura del producto por promesas ecológicas no comprobadas. " + res
        elif "Quick Technical Summary" in text:
            res = "Resumen Técnico Rápido (Tarjeta GEO / LLM): " + res
    elif lang == 'fr':
        if "Stop Sacrificing" in text:
            res = "Ne sacrifiez plus la fraîcheur de vos produits pour des arguments écologiques non vérifiés. " + res
        elif "Quick Technical Summary" in text:
            res = "Résumé Technique Rapide (Carte GEO / LLM) : " + res
    elif lang == 'zh':
        if "Stop Sacrificing" in text:
            res = "切勿為了未經證實的環保口號而犧牲產品新鮮度與品質保證。" + res
        elif "Quick Technical Summary" in text:
            res = "⚡ 技術快訊摘要 (AI / GEO 答案卡)：" + res

    return res

files = [f for f in os.listdir(solutions_dir) if f.endswith('.tsx')]
print(f"Found {len(files)} solution page files.")

count = 0
for file in files:
    filepath = os.path.join(solutions_dir, file)
    with open(filepath, 'r', encoding='utf-8') as f:
        code = f.read()

    # Match pageKey string
    pk_match = re.search(r"const\s+p\s*=\s*['\"]seoPages\.pages\.([^'\"]+)['\"]", code)
    page_key = pk_match.group(1) if pk_match else file.replace('.tsx', '')
    page_key = page_key[0].lower() + page_key[1:]

    # Extract default t() strings
    extracted = {}
    re_t = re.compile(r"t\(`\$\{p\}\.([^`]+)`,\s*['\"]([^'\"]+)['\"]\)")
    for match in re_t.finditer(code):
        kpath = match.group(1).split('.')
        val = match.group(2)
        curr = extracted
        for k in kpath[:-1]:
            if k not in curr:
                curr[k] = {}
            curr = curr[k]
        curr[kpath[-1]] = val

    # Fallback to general page structure if empty
    if not extracted:
        # Extract title from heroTitle or JSX
        title_m = re.search(r'heroTitle=["\']([^"\']+)["\']', code)
        subtitle_m = re.search(r'heroSubtitle=["\']([^"\']+)["\']', code)
        title = title_m.group(1) if title_m else file.replace('Page.tsx', '')
        subtitle = subtitle_m.group(1) if subtitle_m else "High-Barrier Eco Flexible Packaging Solution"
        extracted = {
            "hero": {
                "title": title,
                "subtitle": subtitle
            }
        }

    # Assign to en.json
    en_json["seoPages"]["pages"][page_key] = extracted

    # Generate ES, FR, ZH translations
    es_dict = json.loads(json.dumps(extracted))
    fr_dict = json.loads(json.dumps(extracted))
    zh_dict = json.loads(json.dumps(extracted))

    def apply_trans(d, lang):
        if isinstance(d, dict):
            return {k: apply_trans(v, lang) for k, v in d.items()}
        elif isinstance(d, list):
            return [apply_trans(x, lang) for x in d]
        elif isinstance(d, str):
            return translate_str(d, lang)
        return d

    es_json["seoPages"]["pages"][page_key] = apply_trans(es_dict, 'es')
    fr_json["seoPages"]["pages"][page_key] = apply_trans(fr_dict, 'fr')
    zh_json["seoPages"]["pages"][page_key] = apply_trans(zh_dict, 'zh')

    count += 1

print(f"Successfully processed {count} solutions pages for EN, ES, FR, ZH-TW!")

# Write back to files
with open(os.path.join(locales_dir, "en.json"), "w", encoding="utf-8") as f:
    json.dump(en_json, f, ensure_ascii=False, indent=2)

with open(os.path.join(locales_dir, "es.json"), "w", encoding="utf-8") as f:
    json.dump(es_json, f, ensure_ascii=False, indent=2)

with open(os.path.join(locales_dir, "fr.json"), "w", encoding="utf-8") as f:
    json.dump(fr_json, f, ensure_ascii=False, indent=2)

with open(os.path.join(locales_dir, "zh-TW.json"), "w", encoding="utf-8") as f:
    json.dump(zh_json, f, ensure_ascii=False, indent=2)

print("All 4 locale JSON files successfully saved!")
