import os

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

print("--- THUMBNAIL-1 CHECK ---")
for prefix in products_prefixes:
    # Find files matching prefix and containing 'thumbnail-1.'
    prod_files = [f for f in os.listdir(products_dir) if f.startswith(prefix) and "thumbnail-1." in f]
    ai_files = [f for f in os.listdir(ai_dir) if f.startswith(prefix) and "thumbnail-1." in f]
    
    prod_file = prod_files[0] if prod_files else None
    ai_file = ai_files[0] if ai_files else None
    
    prod_size = os.path.getsize(os.path.join(products_dir, prod_file)) if prod_file else 0
    ai_size = os.path.getsize(os.path.join(ai_dir, ai_file)) if ai_file else 0
    
    print(f"\nProduct: {prefix}")
    print(f"  Production file: {prod_file} (size: {prod_size/1024:.1f}KB)")
    print(f"  AI-generated file: {ai_file} (size: {ai_size/1024:.1f}KB)")
    if prod_size < 300 * 1024:
        print("  WARNING: Production thumbnail-1 is SMALL (<300KB) - likely old!")
    if abs(prod_size - ai_size) > 100:
        print("  WARNING: Production size does not match AI folder size - needs copy!")
