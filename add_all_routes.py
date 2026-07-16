import os
import re

main_tsx_path = "src/main.tsx"
topics_dir = "src/pages/topics"

with open(main_tsx_path, "r") as f:
    main_content = f.read()

existing_imports = set()
for match in re.finditer(r"import\('\./pages/topics/([^']+)'\)", main_content):
    existing_imports.add(match.group(1))

missing_files = []
for filename in os.listdir(topics_dir):
    if filename.endswith(".tsx"):
        base_name = filename[:-4]
        if base_name not in existing_imports:
            missing_files.append(base_name)

print(f"Found {len(missing_files)} missing files to inject.")

def to_kebab_case(name):
    s = re.sub('(.)([A-Z][a-z]+)', r'\1-\2', name)
    s = re.sub('([a-z0-9])([A-Z])', r'\1-\2', s).lower()
    s = re.sub(r'[^a-z0-9]+', '-', s).strip('-')
    return s

new_imports = []
new_routes = []
for base_name in sorted(missing_files):
    comp_name = re.sub(r'[^a-zA-Z0-9]', '', base_name.title()) 
    if not comp_name[0].isalpha():
        comp_name = "C" + comp_name
        
    slug = to_kebab_case(base_name)
    
    new_imports.append(f"const {comp_name} = lazyWithRetry(() => import('./pages/topics/{base_name}'));")
    new_routes.append(f'              <Route path="/topics/{slug}" element={{<{comp_name} />}} />')

if missing_files:
    # Insert both imports and routes around MultilingualRoutes
    multilingual_idx = main_content.find("export const MultilingualRoutes")
    if multilingual_idx != -1:
        # Insert imports RIGHT BEFORE export const MultilingualRoutes
        imports_str = "\n".join(new_imports) + "\n\n"
        
        routes_end_idx = main_content.find("</Routes>", multilingual_idx)
        if routes_end_idx != -1:
            routes_str = "\n".join(new_routes) + "\n    "
            
            # Since we modify the string twice, insert routes first (at the back), then imports (at the front)
            # This way indices don't get messed up if we process in reverse order
            main_content = main_content[:routes_end_idx] + routes_str + main_content[routes_end_idx:]
            
            # The length of main_content changed but multilingual_idx is before routes_end_idx, so it's safe.
            main_content = main_content[:multilingual_idx] + imports_str + main_content[multilingual_idx:]
            
            with open(main_tsx_path, "w") as f:
                f.write(main_content)
            print("Injected all missing routes successfully!")
        else:
            print("Could not find </Routes>")
    else:
        print("Could not find MultilingualRoutes")
else:
    print("No missing routes.")
