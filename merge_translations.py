import json
import os

def load_json(path):
    with open(path, 'r', encoding='utf-8') as f:
        return json.load(f)

def save_json(path, data):
    with open(path, 'w', encoding='utf-8') as f:
        json.dump(data, f, indent=4, ensure_ascii=False)

def start_merge():
    # Define tasks: (Locale File, Section Key, Translated File)
    tasks = [
        ('src/locales/es.json', 'pcr', 'pcr_es.json'),
        ('src/locales/zh-TW.json', 'pcr', 'pcr_zhtw.json'),
        ('src/locales/es.json', 'bioPE', 'biope_es.json'),
        ('src/locales/zh-TW.json', 'bioPE', 'biope_zhtw.json')
    ]

    for locale_file, section_key, translated_file in tasks:
        print(f"Merging {section_key} into {locale_file}...")
        
        locale_data = load_json(locale_file)
        translated_data = load_json(translated_file)
        
        # Ensure path exists
        if 'seoPages' not in locale_data:
            locale_data['seoPages'] = {}
        if 'pages' not in locale_data['seoPages']:
            locale_data['seoPages']['pages'] = {}
            
        # Update data
        locale_data['seoPages']['pages'][section_key] = translated_data
        
        # Save
        save_json(locale_file, locale_data)
        print(f"Done.")

if __name__ == '__main__':
    start_merge()
