#!/usr/bin/env python3
import os
import sys
import json
import subprocess
from PIL import Image

def print_help():
    print("""
================================================================================
🚀 AchievePack Taobao Image Regeneration Pipeline (Store Image Skill)
================================================================================
This script automates the replacement of old Taobao product images with premium,
Amazon-quality AI-generated HSL dark-green-themed images.

Usage:
  Phase 1 - Get prompt & arguments for generation:
    python3 scripts/regenerate_image.py prep <original_image_path>
    Example: python3 scripts/regenerate_image.py prep public/imgs/store/products/flat-bottom-zipper-pouch-thumbnail-7.webp

  Phase 2 - Post-process, copy, convert, and push to Vercel:
    python3 scripts/regenerate_image.py process <original_image_path> <generated_png_artifact_path>
    Example: python3 scripts/regenerate_image.py process public/imgs/store/products/flat-bottom-zipper-pouch-thumbnail-7.webp /Users/ryanmacmini/.gemini/antigravity/brain/506f8fdb-9bda-4f55-bb87-a8628b3e6433/pouch_7.png
""")

def prep_generation(original_path):
    if not os.path.exists(original_path):
        print(f"❌ Error: File {original_path} not found!")
        sys.exit(1)
        
    filename = os.path.basename(original_path)
    clean_name = os.path.splitext(filename)[0].replace("-", "_")
    words = [w for w in clean_name.split("_") if w not in ["thumbnail", "webp", "jpg", "png", "jpeg"]]
    image_name = "_".join(words[:2]) + "_" + clean_name.split("_")[-1]
    
    abs_original = os.path.abspath(original_path)
    
    print("\n" + "="*80)
    print("📋 COPY AND PASTE THIS TOOL CALL INTO YOUR CHAT")
    print("="*80)
    print(f"Tool: generate_image")
    print(f"ImageName: {image_name}")
    print(f"ImagePaths: [\"{abs_original}\"]")
    print("Prompt: redesign IG poster and keep all engaging element but remake as amazon photo quality achievepack.com branding and product vi different angle for eshop and add text for easy understand and translate in english add achievepack.com branding and keep color and design match achievepack.com avoid using high contrast color like red yellow etc not red use dark green theme and nature design do not change product shape texture and details. Do not include any unrelated images or original Taobao seller logos.")
    print("="*80)
    print("\n💡 After the image generates, run Phase 2 of this script using the generated path!")

def process_generation(original_path, artifact_path):
    if not os.path.exists(original_path):
        print(f"❌ Error: Original file {original_path} not found!")
        sys.exit(1)
    if not os.path.exists(artifact_path):
        print(f"❌ Error: Artifact file {artifact_path} not found!")
        sys.exit(1)
        
    filename = os.path.basename(original_path)
    ext = os.path.splitext(filename)[1].lower()
    
    # Target folders
    base_dir = "/Users/ryanmacmini/Desktop/1 App i made/Master Achieve Pack/achieve pack website/achieve-pack"
    prod_target = os.path.join(base_dir, "public/imgs/store/products", filename)
    ai_target = os.path.join(base_dir, "public/imgs/store/products-ai", filename)
    
    print(f"🔄 Converting {artifact_path} -> {filename}...")
    
    try:
        img = Image.open(artifact_path)
        
        # Convert transparent/RGBA to RGB if target is JPEG
        if ext in ['.jpg', '.jpeg']:
            if img.mode in ('RGBA', 'LA'):
                img = img.convert('RGB')
            img.save(prod_target, 'JPEG', quality=85)
            img.save(ai_target, 'JPEG', quality=85)
        elif ext == '.webp':
            img.save(prod_target, 'WEBP', quality=85)
            img.save(ai_target, 'WEBP', quality=85)
        else:
            img.save(prod_target)
            img.save(ai_target)
            
        print(f"✅ Successfully converted and copied image!")
        print(f"  - Saved to: {prod_target}")
        print(f"  - Saved to: {ai_target}")
        
        # Update queue
        queue_path = os.path.join(base_dir, "scratch/generation_queue.json")
        if os.path.exists(queue_path):
            with open(queue_path, "r") as f:
                queue = json.load(f)
            if filename in queue:
                queue.remove(filename)
                with open(queue_path, "w") as f:
                    json.dump(queue, f, indent=2)
                print(f"📋 Queue updated. {len(queue)} items remaining in queue.")
                
        # Automatically git commit & push
        print("\n🚀 Committing and pushing changes to deploy live to Vercel...")
        subprocess.run(["git", "add", prod_target, ai_target], cwd=base_dir)
        commit_msg = f"fix(store): replace {filename} with premium AI-generated HSL green theme version"
        subprocess.run(["git", "commit", "-m", commit_msg], cwd=base_dir)
        subprocess.run(["git", "push"], cwd=base_dir)
        print("\n🎉 Deployed online! Check the product page in 1-2 minutes to see it live!")
        
    except Exception as e:
        print(f"❌ Error during processing: {e}")
        sys.exit(1)

if __name__ == "__main__":
    if len(sys.argv) < 3:
        print_help()
        sys.exit(1)
        
    action = sys.argv[1].lower()
    path = sys.argv[2]
    
    if action == "prep":
        prep_generation(path)
    elif action == "process":
        if len(sys.argv) < 4:
            print("❌ Error: Missing generated PNG artifact path for process action.")
            sys.exit(1)
        artifact = sys.argv[3]
        process_generation(path, artifact)
    else:
        print_help()
