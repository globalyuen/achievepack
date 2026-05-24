import os
import re

product_data_path = "/Users/ryanmacmini/Desktop/1 App i made/Master Achieve Pack/achieve pack website/achieve-pack/src/store/productData.ts"
public_dir = "/Users/ryanmacmini/Desktop/1 App i made/Master Achieve Pack/achieve pack website/achieve-pack/public"

with open(product_data_path, "r", encoding="utf-8") as f:
    content = f.read()

# Let's find all occurrences of '/imgs/store/products/...' inside the file
# Example: '/imgs/store/products/eco-custom-label-thumbnail-1.jpg'
image_paths = re.findall(r"'/imgs/store/products/[^']+'", content)
image_paths = [p.strip("'") for p in image_paths]

print(f"Total image references found in productData.ts: {len(image_paths)}")

missing_files = []
for path in sorted(list(set(image_paths))):
    full_path = os.path.join(public_dir, path.lstrip("/"))
    if not os.path.exists(full_path):
        missing_files.append(path)

print(f"\nTotal unique missing image files in public/ directory: {len(missing_files)}")
if missing_files:
    print("\nMissing files:")
    for m in missing_files:
        print(f"  - {m}")
else:
    print("\nNo defined images are missing in public/!")
