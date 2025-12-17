import json
import os

def load_json(path):
    with open(path, 'r', encoding='utf-8') as f:
        return json.load(f)

def get_keys(obj, prefix=''):
    keys = set()
    if isinstance(obj, dict):
        for k, v in obj.items():
            full_key = f"{prefix}.{k}" if prefix else k
            keys.add(full_key)
            keys.update(get_keys(v, full_key))
    return keys

def compare_keys(base_path, target_path):
    base_data = load_json(base_path)
    target_data = load_json(target_path)
    
    base_keys = get_keys(base_data)
    target_keys = get_keys(target_data)
    
    missing = sorted(list(base_keys - target_keys))
    return missing

base_file = 'src/locales/en.json'
target_files = ['src/locales/es.json', 'src/locales/zh-TW.json', 'src/locales/fr.json']

print(f"Comparing against {base_file}...")
for target in target_files:
    if os.path.exists(target):
        missing = compare_keys(base_file, target)
        print(f"\nMissing in {target} ({len(missing)} keys):")
        # Group by top-level section
        grouped = {}
        for key in missing:
            top = key.split('.')[0]
            if top not in grouped:
                grouped[top] = 0
            grouped[top] += 1
        
        for top, count in grouped.items():
            print(f"  - {top}: {count} missing keys")
            if top == 'seoPages':
                # Show sub-sections for seoPages
                sub_grouped = {}
                for key in missing:
                    if key.startswith('seoPages.pages.'):
                        parts = key.split('.')
                        if len(parts) > 2:
                            sub = parts[2]
                            if sub not in sub_grouped:
                                sub_grouped[sub] = 0
                            sub_grouped[sub] += 1
                for sub, sub_count in sub_grouped.items():
                    print(f"    - {sub}: {sub_count}")
    else:
        print(f"\n{target} does not exist.")
