import json
import random

with open("src/data/image-gallery.json", "r") as f:
    gallery = json.load(f)
    
with open("src/data/image-seo-map.json", "r") as f:
    seo_map = json.load(f)
    
unmapped = [img for img in gallery if img['src'] not in seo_map]

print(f"Total images in gallery: {len(gallery)}")
print(f"Total unmapped images: {len(unmapped)}")

# Show a random sample of 20 unmapped images
sample = random.sample(unmapped, min(20, len(unmapped)))
for img in sample:
    print(f"- {img['title']} ({img['src']})")
    
