import json

AP_LEARN = "/Users/ryanmacmini/Desktop/1 App i made/Master Achieve Pack/achieve pack website/achieve-pack/src/data/learn-pages.json"

pages = [
    {
        "name": "Sustainable Flexible Packaging For Powders",
        "link": "/topics/sustainable-flexible-packaging-for-powders",
        "image": "/imgs/blog/heros/sustainable-flexible-packaging-for-powders-hero.png"
    },
    {
        "name": "Custom Printed Kraft Paper Sachets For Herbs",
        "link": "/topics/custom-printed-kraft-paper-sachets-for-herbs",
        "image": "/imgs/blog/heros/custom-printed-kraft-paper-sachets-for-herbs-hero.png"
    },
    {
        "name": "Freezer Safe Vacuum Packaging",
        "link": "/topics/freezer-safe-vacuum-packaging",
        "image": "/imgs/seo/freezer_safe_vacuum_packaging_infographic_5.png"
    },
    {
        "name": "Sustainable Pouch Sizes For Coffee Beans",
        "link": "/topics/sustainable-pouch-sizes-for-coffee-beans",
        "image": "/imgs/blog/heros/sustainable-pouch-sizes-for-coffee-beans-hero.png"
    },
    {
        "name": "Digital Print Flexible Packaging For Pharmaceuticals",
        "link": "/topics/digital-print-flexible-packaging-for-pharmaceuticals",
        "image": "/imgs/blog/heros/digital-print-flexible-packaging-for-pharmaceuticals-hero.png"
    }
]

with open(AP_LEARN, 'r') as f:
    data = json.load(f)

if 'topics' in data:
    existing_links = {p['link'] for p in data['topics']['pages']}
    for p in pages:
        if p['link'] not in existing_links:
            data['topics']['pages'].append(p)

with open(AP_LEARN, 'w') as f:
    json.dump(data, f, indent=2)

print("Patched learn-pages.json")
