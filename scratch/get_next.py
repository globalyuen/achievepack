import json
import os

queue_path = "/Users/ryanmacmini/Desktop/1 App i made/Master Achieve Pack/achieve pack website/achieve-pack/scratch/generation_queue.json"
products_dir = "/Users/ryanmacmini/Desktop/1 App i made/Master Achieve Pack/achieve pack website/achieve-pack/public/imgs/store/products"

if not os.path.exists(queue_path):
    print("No queue file found.")
    sys.exit(1)

with open(queue_path, "r") as f:
    queue = json.load(f)

if not queue:
    print("Queue is empty! All done!")
    sys.exit(0)

next_item = queue[0]
original_path = os.path.join(products_dir, next_item)

# Create a clean ImageName
clean_name = os.path.splitext(next_item)[0]
# Replace dashes with underscores
clean_name = clean_name.replace("-", "_")
# Make sure it's descriptive and max 3 words
words = [w for w in clean_name.split("_") if w not in ["thumbnail", "webp", "jpg", "png", "jpeg"]]
# Take first 3 words
image_name = "_".join(words[:3])

print(f"\n=================== NEXT ITEM IN QUEUE ===================")
print(f"File Name: {next_item}")
print(f"Original Path: {original_path}")
print(f"Remaining in Queue: {len(queue)}")
print(f"\n--- copy and paste the tool arguments below ---")
print(f"ImageName: {image_name}")
print(f"ImagePaths: [\"{original_path}\"]")
print(f"Prompt: redesign IG poster and keep all engaging element but remake as amazon photo quality achievepack.com branding and product vi different angle for eshop and add text for easy understand and translate in english add achievepack.com branding and keep color and design match achievepack.com avoid using high contrast color like red yellow etc not red use dark green theme and nature design do not change product shape texture and details. Do not include any unrelated images or original Taobao seller logos.")
