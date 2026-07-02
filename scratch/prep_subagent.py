import os
import re
import json

directories = [
    'src/pages/topics',
    'src/pages/pouch/topics'
]

keys = set()

def to_camel_case(s):
    # reduceWasteGuidePage -> reduceWasteGuide
    s = s.replace('Page', '')
    
    # If the filename is PascalCase (e.g. ReduceWasteGuide), convert to camelCase
    if re.match(r'^[A-Z]', s):
        s = s[0].lower() + s[1:]
        
    return s

for d in directories:
    if not os.path.exists(d): continue
    for f in os.listdir(d):
        if not f.endswith('.tsx'): continue
        
        # We need the actual URL slug to derive the camelCase key that SEOPageLayout uses.
        # SEOPageLayout uses:
        # const slug = location.pathname.split('/').pop() || '';
        # const pathKey = slug.replace(/-([a-z])/g, (g) => g[1].toUpperCase());
        
        # Example filename: ReduceWasteGuidePage.tsx
        # Let's derive the slug by converting PascalCase to kebab-case
        name = f.replace('.tsx', '')
        name = name.replace('Page', '')
        
        # Convert PascalCase to kebab-case
        s1 = re.sub('(.)([A-Z][a-z]+)', r'\1-\2', name)
        slug = re.sub('([a-z0-9])([A-Z])', r'\1-\2', s1).lower()
        
        # Now convert slug to camelCase
        parts = slug.split('-')
        pathKey = parts[0] + ''.join(p.capitalize() for p in parts[1:])
        
        keys.add(pathKey)

keys = sorted(list(keys))
print(f"Found {len(keys)} unique keys.")

prompt = f"""You are an expert copywriter for Achieve Pack, a sustainable packaging manufacturer.
We need to generate a "Buyer Concerns & Solutions" section for all of our {len(keys)} SEO landing pages.

For EACH of the following keys, you must write:
1. `title`: "Buyer Concerns & Solutions"
2. `concern1Title`, `concern1Pain`, `concern1Solution`
3. `concern2Title`, `concern2Pain`, `concern2Solution`
4. `concern3Title`, `concern3Pain`, `concern3Solution`
5. `concern4Title`, `concern4Pain`, `concern4Solution`
6. `concern5Title`, `concern5Pain`, `concern5Solution`

The concerns and solutions MUST be highly relevant to the specific topic implied by the key name.
For example, if the key is 'compostablePackaging', the concerns should be about barrier properties, shelf life, and certification.

Please generate a SINGLE JSON file at `/Users/ryanmacmini/Desktop/1 App i made/Master Achieve Pack/achieve pack website/achieve-pack/scratch/buyer_concerns_en.json` containing a JSON object where the root keys are the keys below, and the values are the generated objects.
Be sure to wrap the entire object in `{{ }}` and format it properly as valid JSON.
DO NOT output any markdown blocks like ```json ... ```, ONLY output the raw JSON directly to the file!

Here are the keys:
{json.dumps(keys, indent=2)}

Use the `write_to_file` tool to save the JSON.
"""

with open('scratch/subagent_prompt.txt', 'w', encoding='utf-8') as f:
    f.write(prompt)

