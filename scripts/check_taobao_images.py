#!/usr/bin/env python3
import os
import re
import sys
import json
import hashlib
import subprocess

PROJECT_DIR = "/Users/ryanmacmini/Desktop/1 App i made/Master Achieve Pack/achieve pack website/achieve-pack"
PRODUCT_DATA_PATH = os.path.join(PROJECT_DIR, "src/store/productData.ts")
PRODUCTS_DIR = os.path.join(PROJECT_DIR, "public/imgs/store/products")
AI_DIR = os.path.join(PROJECT_DIR, "public/imgs/store/products-ai")
BASE_COMMIT = "3f46f44"

# Set of products that are imported from Taobao and need AI image regeneration
TAOBAO_PRODUCTS = {
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
}

def parse_products():
    """
    Parses src/store/productData.ts to extract listed products and their images arrays.
    """
    if not os.path.exists(PRODUCT_DATA_PATH):
        print(f"❌ Error: {PRODUCT_DATA_PATH} not found!")
        sys.exit(1)
        
    with open(PRODUCT_DATA_PATH, "r", encoding="utf-8") as f:
        content = f.read()
        
    # We will find all product blocks by scanning for `id: '...'` or `id: "..."` and then extracting images array
    # A robust way is to scan for `id:` and then grab everything up to the next product block
    products = []
    
    # Split content by id fields
    product_blocks = re.split(r'\s+id:\s*[\'"]', content)[1:]
    
    for block in product_blocks:
        # Extract product ID
        id_match = re.match(r'^([a-zA-Z0-9\-_]+)[\'"]', block)
        if not id_match:
            continue
        p_id = id_match.group(1)
        
        if p_id not in TAOBAO_PRODUCTS:
            continue
            
        # Extract product name
        name_match = re.search(r'name:\s*[\'"]([^\'"]+)[\'"]', block)
        p_name = name_match.group(1) if name_match else p_id
        
        # Extract images array
        images = []
        images_block_match = re.search(r'images:\s*\[([^\]]+)\]', block)
        if images_block_match:
            images_block = images_block_match.group(1)
            # Find all image paths in the block
            img_paths = re.findall(r'[\'"]([^\'"]+)[\'"]', images_block)
            images = [os.path.basename(path) for path in img_paths]
            
        products.append({
            "id": p_id,
            "name": p_name,
            "images": images
        })
        
    return products

def get_git_blob_hash(commit, filepath):
    """
    Returns the git blob hash of a file at a specific commit.
    """
    try:
        res = subprocess.run(
            ["git", "rev-parse", f"{commit}:{filepath}"],
            cwd=PROJECT_DIR,
            stdout=subprocess.PIPE,
            stderr=subprocess.PIPE,
            text=True
        )
        if res.returncode == 0:
            return res.stdout.strip()
    except Exception:
        pass
    return None

def get_local_file_hash(filepath):
    """
    Returns the git-compatible blob hash of a local file.
    """
    if not os.path.exists(filepath):
        return None
    try:
        res = subprocess.run(
            ["git", "hash-object", filepath],
            cwd=PROJECT_DIR,
            stdout=subprocess.PIPE,
            stderr=subprocess.PIPE,
            text=True
        )
        if res.returncode == 0:
            return res.stdout.strip()
    except Exception:
        pass
    return None

def self_check():
    print("================================================================================")
    print("🔍 RUNNING TAOBAO PRODUCT IMAGES ONLINE SELF-CHECK SKILL")
    print("================================================================================")
    
    products = parse_products()
    print(f"Loaded {len(products)} products from productData.ts.")
    
    report_data = []
    
    for p in products:
        p_id = p["id"]
        p_name = p["name"]
        images = p["images"]
        
        print(f"\nAnalyzing {p_name} ({p_id})...")
        
        img_results = []
        regenerated_count = 0
        old_count = 0
        
        for filename in images:
            filepath = os.path.join(PRODUCTS_DIR, filename)
            rel_git_path = f"public/imgs/store/products/{filename}"
            
            # Check local existence
            if not os.path.exists(filepath):
                img_results.append({
                    "filename": filename,
                    "status": "MISSING",
                    "details": "File does not exist in local directory public/imgs/store/products/"
                })
                old_count += 1
                continue
                
            # Heuristic 1: Is it in the products-ai folder?
            ai_filepath = os.path.join(AI_DIR, filename)
            in_ai = os.path.exists(ai_filepath)
            
            # Heuristic 2: Compare hash with base import commit (3f46f44)
            original_hash = get_git_blob_hash(BASE_COMMIT, rel_git_path)
            current_hash = get_local_file_hash(filepath)
            
            # Heuristic 3: Check file size
            file_size = os.path.getsize(filepath)
            
            is_regenerated = False
            status_label = "OLD"
            details = []
            
            if not in_ai:
                details.append("Missing from products-ai/ folder")
            
            if original_hash and current_hash:
                if original_hash != current_hash:
                    # Hash differs, meaning it has been modified since initial import!
                    is_regenerated = True
                    status_label = "REGENERATED"
                else:
                    details.append(f"Content hash matches original Taobao import ({BASE_COMMIT})")
            elif current_hash and not original_hash:
                # Completely new image file, definitely regenerated AI image
                is_regenerated = True
                status_label = "REGENERATED"
            else:
                details.append("Could not calculate git hashes")
                
            # Cross-verify: If it has green background but is small, or is still old
            # Double check size for files like flat-bottom-pouch-tin-tie-thumbnail-2.webp which is 117KB but new
            
            if is_regenerated:
                regenerated_count += 1
            else:
                old_count += 1
                
            img_results.append({
                "filename": filename,
                "status": status_label,
                "size_kb": f"{file_size/1024:.1f} KB",
                "details": ", ".join(details) if details else "Regenerated and verified"
            })
            
        total_imgs = len(images)
        pct = (regenerated_count / total_imgs * 100) if total_imgs > 0 else 0
        
        status_text = "❌ NEEDS ATTENTION"
        if pct == 100:
            status_text = "✅ 100% COMPLETE"
        elif pct >= 80:
            status_text = "⚠️ MOSTLY COMPLETE"
            
        print(f"  -> Progress: {pct:.1f}% ({regenerated_count}/{total_imgs} regenerated)")
        
        report_data.append({
            "id": p_id,
            "name": p_name,
            "total": total_imgs,
            "regenerated": regenerated_count,
            "old": old_count,
            "percentage": f"{pct:.1f}%",
            "status": status_text,
            "images": img_results
        })
        
    # Generate Markdown Report
    generate_markdown_report(report_data)
    
    print("\n" + "="*80)
    print("✅ SELF-CHECK COMPLETED SUCCESSFULLY!")
    print("Report generated and saved to scratch/taobao_images_status.md")
    print("="*80 + "\n")

def generate_markdown_report(report_data):
    report_path = os.path.join(PROJECT_DIR, "scratch/taobao_images_status.md")
    os.makedirs(os.path.dirname(report_path), exist_ok=True)
    
    with open(report_path, "w", encoding="utf-8") as f:
        f.write("# 🔍 Storefront Taobao Images Self-Check Status Report\n\n")
        f.write("This report provides a live audit of all listed Taobao product images on the storefront. It compares each image file's hash against the original import commit (`3f46f44`) and verifies existence in the `products-ai/` directory.\n\n")
        
        f.write("## 📊 Summary Overview\n\n")
        f.write("| Product ID | Product Name | Total Images | Regenerated (AI) | Old (Taobao) | Progress | Status |\n")
        f.write("| :--- | :--- | :---: | :---: | :---: | :---: | :---: |\n")
        
        for p in report_data:
            f.write(f"| `{p['id']}` | {p['name']} | {p['total']} | {p['regenerated']} | {p['old']} | **{p['percentage']}** | {p['status']} |\n")
            
        f.write("\n---\n\n## 📋 Detailed Audit Breakdown\n\n")
        
        for p in report_data:
            f.write(f"### 📦 {p['name']} (`{p['id']}`)\n\n")
            f.write(f"**Progress**: {p['percentage']} ({p['regenerated']}/{p['total']} regenerated) — **{p['status']}**\n\n")
            f.write("| Image Filename | Size | Audit Status | Details / Issues |\n")
            f.write("| :--- | :--- | :--- | :--- |\n")
            
            for img in p["images"]:
                status_emoji = "🟢 NEW" if img["status"] == "REGENERATED" else "🔴 OLD"
                if img["status"] == "MISSING":
                    status_emoji = "⚪ MISSING"
                f.write(f"| `{img['filename']}` | {img.get('size_kb', 'N/A')} | {status_emoji} | {img['details']} |\n")
                
            f.write("\n")

if __name__ == "__main__":
    self_check()
