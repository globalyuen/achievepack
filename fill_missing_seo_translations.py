import json
import os

BASE_DIR = os.path.abspath(os.path.join(__file__, '..'))
EN_FILE = os.path.join(BASE_DIR, 'src', 'locales', 'en.json')
TARGET_FILES = [
    os.path.join(BASE_DIR, 'src', 'locales', 'es.json'),
    os.path.join(BASE_DIR, 'src', 'locales', 'zh-TW.json'),
    os.path.join(BASE_DIR, 'src', 'locales', 'fr.json'),
]

def load(path):
    with open(path, 'r', encoding='utf-8') as f:
        return json.load(f)

def save(path, data):
    with open(path, 'w', encoding='utf-8') as f:
        json.dump(data, f, ensure_ascii=False, indent=4)

def ensure_path(d, keys):
    for k in keys:
        if k not in d:
            d[k] = {}
        d = d[k]
    return d

def main():
    en_data = load(EN_FILE)
    en_pages = en_data.get('seoPages', {}).get('pages', {})
    for target_path in TARGET_FILES:
        print(f"Processing {target_path}...")
        target_data = load(target_path)
        target_pages = target_data.setdefault('seoPages', {}).setdefault('pages', {})
        # copy missing keys
        for page_key, page_content in en_pages.items():
            if page_key not in target_pages:
                print(f"  Adding missing page {page_key}")
                target_pages[page_key] = page_content
            else:
                # ensure nested keys exist (optional deep copy for subkeys)
                # Here we simply skip if page exists.
                pass
        save(target_path, target_data)
        print(f"  Done {target_path}")

if __name__ == '__main__':
    main()
