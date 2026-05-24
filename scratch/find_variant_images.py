import re
import os

product_data_path = "/Users/ryanmacmini/Desktop/1 App i made/Master Achieve Pack/achieve pack website/achieve-pack/src/store/productData.ts"
products_dir = "/Users/ryanmacmini/Desktop/1 App i made/Master Achieve Pack/achieve pack website/achieve-pack/public/imgs/store/products"
ai_dir = "/Users/ryanmacmini/Desktop/1 App i made/Master Achieve Pack/achieve pack website/achieve-pack/public/imgs/store/products-ai"

with open(product_data_path, "r", encoding="utf-8") as f:
    content = f.read()

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

def find_block(prefix):
    match = re.search(r"id:\s*'" + prefix + r"'.*?images:\s*\[(.*?)\].*?sizeVariants:\s*\[(.*?)\]", content, re.DOTALL)
    if not match:
        match = re.search(r"id:\s*'" + prefix + r"'.*?sizeVariants:\s*\[(.*?)\]", content, re.DOTALL)
        if match:
            match_images = re.search(r"id:\s*'" + prefix + r"'.*?images:\s*\[(.*?)\]", content, re.DOTALL)
            images_str = match_images.group(1) if match_images else ""
            variants_str = match.group(1)
            return images_str, variants_str
        return "", ""
    return match.group(1), match.group(2)

all_variant_images = []
missing_variant_images = []

print("--- VARIANT HERO IMAGE ANALYSIS ---")
for prefix in products_prefixes:
    images_str, variants_str = find_block(prefix)
    if not images_str or not variants_str:
        continue
    
    images = re.findall(r"'/imgs/store/products/[^']+'", images_str)
    images = [img.strip("'") for img in images]
    
    variant_indices = re.findall(r"heroImageIndex:\s*(\d+)", variants_str)
    variant_indices = sorted(list(set([int(idx) for idx in variant_indices])))
    
    product_missing = []
    for idx in variant_indices:
        if idx < len(images):
            img_path = images[idx]
            filename = os.path.basename(img_path)
            prod_path = os.path.join(products_dir, filename)
            
            if os.path.exists(prod_path):
                prod_size = os.path.getsize(prod_path)
                in_ai = os.path.exists(os.path.join(ai_dir, filename))
                
                # Check if it's old (small size or not in AI dir)
                if not in_ai or prod_size < 300 * 1024:
                    product_missing.append((filename, idx, prod_size))
                    missing_variant_images.append(os.path.join(products_dir, filename))
    
    if product_missing:
        print(f"\nProduct: {prefix}")
        print(f"  Missing or old variant hero images:")
        for filename, idx, size in product_missing:
            print(f"    - Index {idx}: {filename} ({size/1024:.1f}KB)")
            
print(f"\nTotal variant hero images needing regeneration: {len(missing_variant_images)}")
