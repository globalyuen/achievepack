import os
import json
import re

main_tsx_path = "src/main.tsx"
selected_json_path = "selected_50.json"

with open(main_tsx_path, "r") as f:
    main_content = f.read()

main_content = main_content.replace("<br />Here are some things you need to keep in mind:\\n \\n", "<br />Here are some things you need to keep in mind:<br /><br />")
main_content = main_content.replace("If you need more help deciding, feel free to contact us.\\n", "If you need more help deciding, feel free to contact us.<br />")

with open(selected_json_path, "r") as f:
    selected_50 = json.load(f)

new_imports = []
new_routes = []
for i, item in enumerate(selected_50):
    src = item["src"]
    base_name = os.path.basename(src).split('.')[0]
    slug = re.sub(r'[^a-z0-9]+', '-', base_name.lower()).strip('-')
    if not slug:
        slug = f"page-{i}"
    comp = "".join(word.capitalize() for word in slug.split('-'))
    
    new_imports.append(f"const {comp} = lazyWithRetry(() => import('./pages/topics/{comp}'));")
    new_routes.append(f'              <Route path="/topics/{slug}" element={{<{comp} />}} />')

lazy_def_idx = main_content.find("function lazyWithRetry")
if lazy_def_idx != -1:
    lazy_end_idx = main_content.find("}", lazy_def_idx)
    insert_imports_idx = main_content.find("\n", lazy_end_idx) + 1
    
    imports_str = "\n".join(new_imports) + "\n"
    main_content = main_content[:insert_imports_idx] + imports_str + main_content[insert_imports_idx:]

multilingual_idx = main_content.find("export const MultilingualRoutes")
if multilingual_idx != -1:
    routes_end_idx = main_content.find("</Routes>", multilingual_idx)
    if routes_end_idx != -1:
        routes_str = "\n".join(new_routes) + "\n    "
        main_content = main_content[:routes_end_idx] + routes_str + main_content[routes_end_idx:]

with open(main_tsx_path, "w") as f:
    f.write(main_content)

print("Fixed main.tsx and added 50 routes successfully.")
