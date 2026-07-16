import json

with open("src/data/image-gallery.json", "r") as f:
    gallery = json.load(f)

with open("src/data/image-seo-map.json", "r") as f:
    seo_map = json.load(f)

mapped_urls = set()
for category in seo_map.values():
    for item in category:
        if "url" in item:
            mapped_urls.add(item["url"])

unmapped = [img for img in gallery if img.get("url") not in mapped_urls]

print(f"Total unmapped: {len(unmapped)}")

# Pick from indices 301 to 400. That's 100 items. Let's just take the first 50 from this slice.
start_index = 301
end_index = min(400, len(unmapped))
slice_unmapped = unmapped[start_index:end_index]
selected = slice_unmapped[:50]

with open("selected_50.json", "w") as f:
    json.dump(selected, f, indent=2)

print(f"Selected {len(selected)} unmapped images.")
