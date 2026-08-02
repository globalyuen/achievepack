import os
import re
import json

directory_file = "/Users/ryanmacmini/Desktop/1 App i made/Master Achieve Pack/achieve pack website/achieve-pack/src/pages/DirectoryPage.tsx"
solutions_dir = "/Users/ryanmacmini/Desktop/1 App i made/Master Achieve Pack/achieve pack website/achieve-pack/src/pages/solutions"

def get_slug(filename):
    file_base = filename.replace('Page.tsx', '')
    slug = re.sub(r'(?<!^)(?=[A-Z])', '-', file_base).lower()
    return slug

files = sorted([f for f in os.listdir(solutions_dir) if f.endswith('.tsx')])

items = []
for f in files:
    if f in ['CatalogPage.tsx', 'CosmeticsBottlesCatalogPage.tsx', 'CustomBoxesCatalogPage.tsx', 'FlexiblePouchesCatalogPage.tsx', 'ShapeDetailPage.tsx']:
        continue
    slug = get_slug(f)
    name = slug.replace('-', ' ').title()
    hero_img = f"/imgs/solutions/{slug}-hero.jpg"
    
    badge = "pSEO Solution"
    if "bio-pe" in slug:
        badge = "Bio-PE Recyclable"
    elif "compostable" in slug:
        badge = "Home Compostable"
    elif "mono-pe" in slug or "mono-pp" in slug:
        badge = "Mono-Material #4"
    elif "pcr" in slug:
        badge = "PCR Recycled Plastic"

    items.append({
        "id": slug,
        "slug": slug,
        "title": name,
        "categoryBadge": badge,
        "image": hero_img,
        "link": f"/solutions/{slug}",
        "description": f"Engineered eco packaging solution for {name} with high barrier protection, custom dielines, and certified sustainable materials.",
        "specs": {
            "material": "Bio-PE / Compostable PLA / Mono-PE / PCR",
            "shape": "Flat Bottom / Stand Up / Side Gusset / Spout",
            "barrier": "EVOH Oxygen & Moisture Barrier (OTR <0.5)",
            "size": "Custom Sizes Available (Inches & mm)",
            "surface": "Soft-Touch Velvet Matte / Gloss / Spot UV",
            "features": "Pocket Zipper, Degassing Valve, Tear Notch"
        }
    })

print(f"Generated {len(items)} solution showcase items for DirectoryPage.tsx")

items_js_str = json.dumps(items, indent=14)

with open(directory_file, 'r', encoding='utf-8') as f:
    code = f.read()

anchor_start = '{/* Solutions Grid */}'
anchor_end = '].map((sol) => ('

idx1 = code.find(anchor_start)
idx2 = code.find(anchor_end, idx1)

if idx1 != -1 and idx2 != -1:
    grid_start = code.find('[', idx1)
    new_code = code[:grid_start] + items_js_str + code[idx2:]
    with open(directory_file, 'w', encoding='utf-8') as f:
        f.write(new_code)
    print("Successfully updated DirectoryPage.tsx with 45+ unique solution cards and hero images!")
else:
    print(f"Index find failed: idx1={idx1}, idx2={idx2}")
