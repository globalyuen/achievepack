import os
import json
import sys
from PIL import Image

queue_path = "/Users/ryanmacmini/Desktop/1 App i made/Master Achieve Pack/achieve pack website/achieve-pack/scratch/generation_queue.json"
products_dir = "/Users/ryanmacmini/Desktop/1 App i made/Master Achieve Pack/achieve pack website/achieve-pack/public/imgs/store/products"
ai_dir = "/Users/ryanmacmini/Desktop/1 App i made/Master Achieve Pack/achieve pack website/achieve-pack/public/imgs/store/products-ai"

if len(sys.argv) < 3:
    print("Usage: python3 process_generated.py <artifact_png_path> <original_filename>")
    sys.exit(1)

artifact_path = sys.argv[1]
original_filename = sys.argv[2]

if not os.path.exists(artifact_path):
    print(f"Error: Artifact path {artifact_path} does not exist!")
    sys.exit(1)

# Convert and save
try:
    img = Image.open(artifact_path)
    
    # Target paths
    ai_target = os.path.join(ai_dir, original_filename)
    prod_target = os.path.join(products_dir, original_filename)
    
    # Make sure dirs exist
    os.makedirs(ai_dir, exist_ok=True)
    os.makedirs(products_dir, exist_ok=True)
    
    ext = os.path.splitext(original_filename)[1].lower()
    
    if ext == '.webp':
        img.save(ai_target, 'WEBP', quality=85)
        img.save(prod_target, 'WEBP', quality=85)
    elif ext in ['.jpg', '.jpeg']:
        if img.mode in ('RGBA', 'LA'):
            img = img.convert('RGB')
        img.save(ai_target, 'JPEG', quality=85)
        img.save(prod_target, 'JPEG', quality=85)
    else:
        img.save(ai_target)
        img.save(prod_target)
        
    print(f"Successfully processed {original_filename}!")
    print(f"  Saved to: {ai_target}")
    print(f"  Saved to: {prod_target}")
    
    # Remove from queue
    if os.path.exists(queue_path):
        with open(queue_path, "r") as f:
            queue = json.load(f)
            
        if original_filename in queue:
            queue.remove(original_filename)
            with open(queue_path, "w") as f:
                json.dump(queue, f, indent=2)
            print(f"Removed {original_filename} from queue. {len(queue)} items remaining.")
        else:
            print(f"Note: {original_filename} was not in queue.")
            
except Exception as e:
    print(f"Error processing image: {e}")
    sys.exit(1)
