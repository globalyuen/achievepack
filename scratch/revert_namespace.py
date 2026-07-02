import os
import re

directories = [
    'src/pages/topics',
    'src/pages/pouch/topics'
]

count = 0

for d in directories:
    if not os.path.exists(d): continue
    for f in os.listdir(d):
        if not f.endswith('.tsx'): continue
        filepath = os.path.join(d, f)
        
        with open(filepath, 'r', encoding='utf-8') as file:
            content = file.read()
            
        if '<SEOPageLayout translationNamespace={p}' in content:
            content = content.replace('<SEOPageLayout translationNamespace={p}', '<SEOPageLayout')
            with open(filepath, 'w', encoding='utf-8') as file:
                file.write(content)
            count += 1
            
print(f"Reverted {count} files.")
