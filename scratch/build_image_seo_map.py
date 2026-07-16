import re
import os
import json

APP_TSX = "src/main.tsx"
PAGES_DIR = "src/pages"
OUTPUT = "src/data/image-seo-map.json"

with open(APP_TSX, "r") as f:
    app_code = f.read()

# Match lazy or regular imports
imports1 = re.findall(r"const\s+(\w+)\s*=\s*(?:lazyWithRetry|lazy)\(.*import\(['\"]([^'\"]+)['\"]\)", app_code)
imports2 = re.findall(r"import\s+(\w+)\s+from\s+['\"]([^'\"]+)['\"]", app_code)

comp_to_file = {}
for comp, path in imports1 + imports2:
    if path.startswith('./pages/') or path.startswith('../pages/'):
        normalized = path.replace('./pages/', 'src/pages/').replace('../pages/', 'src/pages/')
        if not normalized.endswith(".tsx"):
            normalized += ".tsx"
        comp_to_file[comp] = normalized

# Match Routes
routes = re.findall(r'<Route\s+path=["\']([^"\']+)["\']\s+element=\{<([^\s/>]+)', app_code)

file_to_route = {}
for route, comp in routes:
    if comp in comp_to_file:
        file_to_route[comp_to_file[comp]] = route

print(f"Found {len(file_to_route)} mapped routes from main.tsx.")

image_to_routes = {}
for root, _, files in os.walk(PAGES_DIR):
    for file in files:
        if file.endswith(".tsx"):
            filepath = os.path.join(root, file)
            with open(filepath, "r") as f:
                content = f.read()
                images = re.findall(r'(/imgs/[^"\'>\s]+(?:\.webp|\.png|\.jpg))', content)
                
                route = file_to_route.get(filepath)
                if route:
                    title_match = re.search(r'<title>([^<]+)</title>', content)
                    title = title_match.group(1).replace(" | Achieve Pack", "").replace(" | Pouch.eco", "").strip() if title_match else route
                    
                    for img in set(images):
                        if img not in image_to_routes:
                            image_to_routes[img] = []
                        if not any(r['url'] == route for r in image_to_routes[img]):
                            image_to_routes[img].append({"title": title, "url": route})

with open(OUTPUT, "w") as f:
    json.dump(image_to_routes, f, indent=2)

print(f"Generated map for {len(image_to_routes)} images in {OUTPUT}.")
