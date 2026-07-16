import os
import glob
import re

AP_DIR = "/Users/ryanmacmini/Desktop/1 App i made/Master Achieve Pack/achieve pack website/achieve-pack"
MAIN_TSX = os.path.join(AP_DIR, "src/main.tsx")
TOPICS_DIR = os.path.join(AP_DIR, "src/pages/topics")

def to_pascal(text):
    res = ''.join(word.capitalize() for word in re.split(r'[^a-zA-Z0-9]', text) if word)
    if not res: return "Page"
    if res[0].isdigit(): res = "Page" + res
    return res

def update_main():
    with open(MAIN_TSX, "r", encoding="utf-8") as f:
        main_content = f.read()
    
    # Extract existing import paths to avoid duplicates
    existing_imports = set(re.findall(r"import\('\./pages/topics/([^']+)'\)", main_content))
    
    routes_imports = []
    routes_components = []
    
    for filepath in glob.glob(os.path.join(TOPICS_DIR, "*.tsx")):
        filename = os.path.basename(filepath)
        base_name = filename.replace(".tsx", "")
        
        if base_name not in existing_imports:
            slug = re.sub(r'(?<!^)(?=[A-Z])', '-', base_name).lower()
            if not re.search(r'[A-Z]', base_name):
                slug = base_name.lower()
                
            var_name = to_pascal(base_name)
            
            routes_imports.append(f"const {var_name} = lazyWithRetry(() => import('./pages/topics/{base_name}'));")
            routes_components.append(f'<Route path="/topics/{slug}" element={{<{var_name} />}} />')
            
    if not routes_imports:
        print("No new components to add to main.tsx")
        return
        
    imports_str = "\n" + "\n".join(routes_imports) + "\n"
    routes_str = "\n              ".join(routes_components)
    
    main_content = main_content.replace(
        "export const MultilingualRoutes",
        imports_str + "export const MultilingualRoutes"
    )
    
    main_content = main_content.replace(
        "<Routes>",
        f"<Routes>\n              {routes_str}",
        1
    )
    
    with open(MAIN_TSX, "w", encoding="utf-8") as f:
        f.write(main_content)
        
    print(f"Added {len(routes_imports)} components to main.tsx")

if __name__ == "__main__":
    update_main()
