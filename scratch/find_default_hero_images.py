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

# Let's find all products and parse their images and default size variant's heroImageIndex
# We can find all products by splitting by { id: '...' or similar.
# Since we know the prefixes, let's look for each prefix block.

def find_block(prefix):
    # Regex to find the block for id: 'prefix'
    match = re.search(r"id:\s*'" + prefix + r"'.*?images:\s*\[(.*?)\].*?sizeVariants:\s*\[(.*?)\]", content, re.DOTALL)
    if not match:
        # Try finding without category or names
        match = re.search(r"id:\s*'" + prefix + r"'.*?sizeVariants:\s*\[(.*?)\]", content, re.DOTALL)
        if match:
            # Re-search images
            match_images = re.search(r"id:\s*'" + prefix + r"'.*?images:\s*\[(.*?)\]", content, re.DOTALL)
            images_str = match_images.group(1) if match_images else ""
            variants_str = match.group(1)
            return images_str, variants_str
        return "", ""
    return match.group(1), match.group(2)

print("--- DEFAULT DISPLAYED HERO IMAGE ANALYSIS ---")
for prefix in products_prefixes:
    images_str, variants_str = find_block(prefix)
    if not images_str or not variants_str:
        print(f"Product: {prefix} - Could not parse block")
        continue
    
    # Parse images list
    images = re.findall(r"'/imgs/store/products/[^']+'", images_str)
    images = [img.strip("'") for img in images]
    
    # Find the first variant block
    # A variant block looks like { id: '...', ..., heroImageIndex: X }
    variant_blocks = re.findall(r"\{\s*id:.*?\s*heroImageIndex:\s*(\d+)\s*\}", variants_str, re.DOTALL)
    if not variant_blocks:
        # Try another regex for variants
        variant_blocks = re.findall(r"heroImageIndex:\s*(\d+)", variants_str)
        
    if not variant_blocks:
        print(f"Product: {prefix} - No heroImageIndex found in variants")
        continue
        
    default_hero_index = int(variant_blocks[0])
    
    if default_hero_index < len(images):
        default_image_path = images[default_hero_index]
        filename = os.path.basename(default_image_path)
        prod_path = os.path.join(products_dir, filename)
        
        prod_size = os.path.getsize(prod_path) if os.path.exists(prod_path) else 0
        in_ai = os.path.exists(os.path.join(ai_dir, filename))
        
        status = "✅ AI-Generated" if in_ai and prod_size > 300 * 1024 else "❌ OLD TAOBAO IMAGE!"
        print(f"\nProduct: {prefix}")
        print(f"  Images array length: {len(images)}")
        print(f"  Default variant heroImageIndex: {default_hero_index}")
        print(f"  Default image shown on load: {filename} (size: {prod_size/1024:.1f}KB) -> {status}")
    else:
        print(f"Product: {prefix} - heroImageIndex {default_hero_index} out of bounds (length {len(images)})")
