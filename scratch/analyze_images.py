import os

products_dir = "/Users/ryanmacmini/Desktop/1 App i made/Master Achieve Pack/achieve pack website/achieve-pack/public/imgs/store/products"
ai_dir = "/Users/ryanmacmini/Desktop/1 App i made/Master Achieve Pack/achieve pack website/achieve-pack/public/imgs/store/products-ai"

# Let's list the 15 products
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

products_files = os.listdir(products_dir)
ai_files = os.listdir(ai_dir)

print(f"Total files in products/: {len(products_files)}")
print(f"Total files in products-ai/: {len(ai_files)}")

# Group files by prefix
def group_by_prefix(files):
    grouped = {}
    for f in files:
        if f.startswith('.'):
            continue
        for prefix in products_prefixes:
            if f.startswith(prefix):
                if prefix not in grouped:
                    grouped[prefix] = []
                grouped[prefix].append(f)
                break
    return grouped

prod_grouped = group_by_prefix(products_files)
ai_grouped = group_by_prefix(ai_files)

print("\n--- ANALYSIS PER PRODUCT ---")
for prefix in products_prefixes:
    p_list = sorted(prod_grouped.get(prefix, []))
    a_list = sorted(ai_grouped.get(prefix, []))
    
    print(f"\nProduct: {prefix}")
    print(f"  Total in products/: {len(p_list)}")
    print(f"  Total in products-ai/: {len(a_list)}")
    
    # Check which thumbnails are missing from products-ai/
    missing_ai = []
    old_images_in_prod = []
    
    for f in p_list:
        p_path = os.path.join(products_dir, f)
        p_size = os.path.getsize(p_path)
        
        # Check if in AI-generated folder
        if f not in a_list:
            missing_ai.append(f)
            # If the size is less than 300KB, it's likely an old Taobao image (new AI images are usually > 500KB)
            if p_size < 300000:
                old_images_in_prod.append(f"{f} ({p_size/1024:.1f}KB)")
        else:
            a_path = os.path.join(ai_dir, f)
            a_size = os.path.getsize(a_path)
            # If the size in prod is different from AI, it hasn't been copied!
            if abs(p_size - a_size) > 100:
                print(f"    WARNING: Size mismatch for {f} (prod: {p_size/1024:.1f}KB, ai: {a_size/1024:.1f}KB) - needs copy")
                
    if missing_ai:
        print(f"  Missing in products-ai/ (total {len(missing_ai)}):")
        for m in missing_ai:
            m_path = os.path.join(products_dir, m)
            m_size = os.path.getsize(m_path)
            print(f"    - {m} ({m_size/1024:.1f}KB)")
    else:
        print("  All production files are present in products-ai/")
