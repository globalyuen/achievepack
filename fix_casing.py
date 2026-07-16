import os
import re

MAIN_TSX = "/Users/ryanmacmini/Desktop/1 App i made/Master Achieve Pack/achieve pack website/achieve-pack/src/main.tsx"
TOPICS_DIR = "/Users/ryanmacmini/Desktop/1 App i made/Master Achieve Pack/achieve pack website/achieve-pack/src/pages/topics"

def fix_main_imports():
    # Get all actual filenames in topics dir
    actual_files = {}
    for f in os.listdir(TOPICS_DIR):
        if f.endswith('.tsx'):
            base = f[:-4]
            actual_files[base.lower()] = base

    with open(MAIN_TSX, "r", encoding="utf-8") as f:
        content = f.read()

    def replacer(match):
        var_name = match.group(1)
        import_path = match.group(2) # e.g. ./pages/topics/something
        
        if import_path.startswith("./pages/topics/"):
            base_name = import_path[len("./pages/topics/"):]
            lower_base = base_name.lower()
            
            # If the exact file exists, keep it (but ensure exact case)
            if lower_base in actual_files:
                correct_case = actual_files[lower_base]
                return f"const {var_name} = lazyWithRetry(() => import('./pages/topics/{correct_case}'))"
        
        return match.group(0)

    # Replace with exact case
    new_content = re.sub(r"const\s+([A-Za-z0-9_]+)\s*=\s*lazyWithRetry\(\(\)\s*=>\s*import\('([^']+)'\)\)", replacer, content)
    
    with open(MAIN_TSX, "w", encoding="utf-8") as f:
        f.write(new_content)
        
    print("Fixed import casing.")

if __name__ == "__main__":
    fix_main_imports()
