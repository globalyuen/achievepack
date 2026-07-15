import os
import json
import re
import time
from deep_translator import GoogleTranslator

PROJECT_ROOT = '/Users/ryanmacmini/Desktop/1 App i made/Master Achieve Pack/achieve pack website/achieve-pack'
TOPICS_DIR = os.path.join(PROJECT_ROOT, 'src/pages/topics')

PAGES = [
    "DigitalProductPassportPackaging",
    "AiPackagingBarcodesBottomFold",
    "AiPackagingBleedDimensions",
    "AiPackagingSafeMargins",
    "AiPackagingLayeredAssets",
    "AiPackagingResolution",
    "ApparelZipper",
    "BeefJerkyBarrier",
    "BeverageSoftStandUpPouch",
    "CheesePocketZipper",
    "CocktailSpout",
    "CollagenHighBarrier",
    "CacaoStandUp",
    "BeefJerkyPillowPouch",
    "BreadFlatBottomBag"
]

def extract_en_dict_and_block(content):
    # Match the entire const localTranslations block
    match = re.search(r'(const localTranslations = \{\s*en:\s*({.*?}),\s*(?:es:|fr:|\'zh-tw\':).*?\n\}\n?)', content, re.DOTALL)
    if not match:
        return None, None
    try:
        en_str = match.group(2)
        return json.loads(en_str), match.group(1)
    except Exception as e:
        print(f"Error parsing en block: {e}")
        return None, None

def translate_dict(d, target_lang):
    translator = GoogleTranslator(source='en', target=target_lang)
    translated = {}
    for k, v in d.items():
        if isinstance(v, str):
            try:
                time.sleep(0.1)
                translated[k] = translator.translate(v)
            except Exception as e:
                print(f"Failed to translate {k} to {target_lang}: {e}")
                translated[k] = v
        else:
            translated[k] = v
    return translated

for page_name in PAGES:
    file_path = os.path.join(TOPICS_DIR, f"{page_name}.tsx")
    if not os.path.exists(file_path):
        print(f"File not found: {page_name}")
        continue
        
    print(f"Processing {page_name}...")
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
        
    en_dict, old_block = extract_en_dict_and_block(content)
    if not en_dict:
        print(f"Failed to extract English dictionary for {page_name}")
        continue
        
    print("Translating to Spanish...")
    es_dict = translate_dict(en_dict, 'es')
    print("Translating to French...")
    fr_dict = translate_dict(en_dict, 'fr')
    print("Translating to Traditional Chinese...")
    zh_tw_dict = translate_dict(en_dict, 'zh-TW')
    
    new_local_translations = f"""const localTranslations = {{
  en: {json.dumps(en_dict, indent=2)},
  es: {json.dumps(es_dict, indent=2, ensure_ascii=False)},
  fr: {json.dumps(fr_dict, indent=2, ensure_ascii=False)},
  'zh-tw': {json.dumps(zh_tw_dict, indent=2, ensure_ascii=False)}
}}
"""

    new_content = content.replace(old_block, new_local_translations)
    
    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(new_content)
    print(f"Successfully translated and updated {page_name}")

print("Batch 1 Translation Complete!")
