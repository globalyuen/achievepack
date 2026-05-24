import os
import json
import re

products_dir = "/Users/ryanmacmini/Desktop/1 App i made/Master Achieve Pack/achieve pack website/achieve-pack/public/imgs/store/products"
ai_dir = "/Users/ryanmacmini/Desktop/1 App i made/Master Achieve Pack/achieve pack website/achieve-pack/public/imgs/store/products-ai"

products_prefixes = [
    "100-recyclable-pe-wire-cut-zipper-bag",
    "40ml-foil-capsule-and-packing-machine",
    "bottle-shape-sachet-bag",
    "clear-matte-zipper-stand-up-pouch",
    "coffee-tea-one-sided-zipper-flat-bottom-pouch-with-hanging-strip",
    "eco-custom-label",
    "eco-friendly-kraft-honeycomb-packing-paper-wrap",
    "eco-pla-sealing-sticker",
    "flat-bottom-pouch-tin-tie",
    "flat-bottom-pouch-with-card-insert",
    "flat-bottom-zipper-pouch",
    "retro-horizontal-kraft-food-handle-bag",
    "spouted-foil-pouch",
    "textured-burlap-cork-pattern-coffee-pouch-with-valve",
    "unprinted-white-kraft-compostable-and-biodegrable-zipper-stand-up-pouch"
]

# Default landing page hero images (the 6 critical ones)
critical_defaults = [
    "bottle-shape-sachet-bag-thumbnail-8.webp",
    "clear-matte-zipper-stand-up-pouch-thumbnail-9.webp",
    "coffee-tea-one-sided-zipper-flat-bottom-pouch-with-hanging-strip-thumbnail-2.webp",
    "eco-friendly-kraft-honeycomb-packing-paper-wrap-thumbnail-7.jpg",
    "flat-bottom-pouch-tin-tie-thumbnail-2.webp",
    "retro-horizontal-kraft-food-handle-bag-thumbnail-4.webp"
]

# Find all missing/old files
missing_files = []
all_files = sorted(os.listdir(products_dir))

for f in all_files:
    if f.startswith('.'):
        continue
    matched = False
    for prefix in products_prefixes:
        if f.startswith(prefix):
            matched = True
            break
    if not matched:
        continue
        
    p_path = os.path.join(products_dir, f)
    p_size = os.path.getsize(p_path)
    a_path = os.path.join(ai_dir, f)
    in_ai = os.path.exists(a_path)
    
    # If not in AI folder or size in prod is small (<300KB)
    if not in_ai or p_size < 300000:
        missing_files.append(f)

# Deduplicate
missing_files = list(set(missing_files))

# Sort so that critical defaults are at the very beginning of the list
priority_list = []
for cd in critical_defaults:
    if cd in missing_files:
        priority_list.append(cd)
        missing_files.remove(cd)

# Append the rest
priority_list.extend(sorted(missing_files))

print(f"Total files in queue: {len(priority_list)}")
print("First 10 items in queue:")
for i, item in enumerate(priority_list[:10]):
    print(f"  {i+1}. {item}")

with open("/Users/ryanmacmini/Desktop/1 App i made/Master Achieve Pack/achieve pack website/achieve-pack/scratch/generation_queue.json", "w") as f:
    json.dump(priority_list, f, indent=2)

print("\nSaved queue to scratch/generation_queue.json")
