import os
import re
import json

directories = [
    'src/pages/topics',
    'src/pages/pouch/topics'
]

pages_data = []

for d in directories:
    if not os.path.exists(d): continue
    for f in os.listdir(d):
        if not f.endswith('.tsx'): continue
        filepath = os.path.join(d, f)
        
        with open(filepath, 'r', encoding='utf-8') as file:
            content = file.read()
            
        if '<SEOPageLayout' in content:
            # Extract const p = '...'
            p_match = re.search(r"const p\s*=\s*['\"]([^'\"]+)['\"]", content)
            p_val = p_match.group(1) if p_match else None
            
            # Extract title
            title_match = re.search(r'<title>([^<]+)</title>', content)
            title = title_match.group(1) if title_match else ""
            
            if p_val:
                pages_data.append({
                    "file": f,
                    "key": p_val,
                    "title": title.replace("{t(`${p}.seoTitle`)}", "").strip() or f
                })

with open('scratch/seo_pages_list.json', 'w', encoding='utf-8') as out:
    json.dump(pages_data, out, indent=2)

print(f"Extracted {len(pages_data)} pages.")
