import sys
import os
import json

# Add parent directory or scratch to path if needed
sys.path.append(os.path.dirname(os.path.abspath(__file__)))

from localize_v4 import localize_file

def main():
    if len(sys.argv) < 3:
        print("Usage: python run_localize_single.py <file_path> <page_key>")
        sys.exit(1)
        
    file_rel = sys.argv[1]
    page_key = sys.argv[2]
    
    root_dir = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
    file_abs = os.path.join(root_dir, file_rel)
    locales_path = os.path.join(root_dir, "src/locales/en.json")
    
    if not os.path.exists(file_abs):
        print(f"ERROR: File does not exist: {file_abs}")
        sys.exit(1)
        
    print(f"Loading {locales_path}")
    with open(locales_path, "r", encoding="utf-8") as f:
        en_json = json.load(f)

    if "seoPages" not in en_json:
        en_json["seoPages"] = {}
    if "pages" not in en_json["seoPages"]:
        en_json["seoPages"]["pages"] = {}

    try:
        trans = localize_file(file_abs, page_key)
        
        if page_key not in en_json["seoPages"]["pages"]:
            en_json["seoPages"]["pages"][page_key] = {}
            
        for k, v in trans.items():
            en_json["seoPages"]["pages"][page_key][k] = v
            
        print(f"Successfully processed {file_rel} and updated en.json under seoPages.pages.{page_key}")
    except Exception as e:
        print(f"Failed to process {file_rel}: {e}")
        sys.exit(1)

    with open(locales_path, "w", encoding="utf-8") as f:
        json.dump(en_json, f, indent=4, ensure_ascii=False)
        f.write("\n")
    
    print("en.json updated successfully!")

if __name__ == "__main__":
    main()
