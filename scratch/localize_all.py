import sys
import os
import json

# Add parent directory or scratch to path if needed
sys.path.append(os.path.dirname(os.path.abspath(__file__)))

from localize_v4 import localize_file

PAGES = {
    "src/pages/pouch/industry/PouchBabyFoodPage.tsx": "pouchBabyFood",
    "src/pages/pouch/industry/PouchCoffeeTeaPage.tsx": "pouchCoffeeTea",
    "src/pages/pouch/industry/PouchFrozenFoodPage.tsx": "pouchFrozenFood",
    "src/pages/pouch/industry/PouchPetFoodPage.tsx": "pouchPetFood",
    "src/pages/pouch/industry/PouchSaucesPage.tsx": "pouchSauces",
    "src/pages/pouch/industry/PouchSnacksPage.tsx": "pouchSnacks",
    "src/pages/pouch/industry/PouchSupplementsPage.tsx": "pouchSupplements",
    "src/pages/pouch/composting/PouchCompostingBenefitsPage.tsx": "pouchCompostingBenefits",
    "src/pages/pouch/composting/PouchCompostingServicesPage.tsx": "pouchCompostingServices",
    "src/pages/pouch/composting/PouchPlasticFreePage.tsx": "pouchPlasticFree",
    "src/pages/pouch/solutions/PouchCitrusOilPackagingPage.tsx": "pouchCitrusOilPackaging",
}

def main():
    root_dir = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
    locales_path = os.path.join(root_dir, "src/locales/en.json")
    
    print(f"Loading {locales_path}")
    with open(locales_path, "r", encoding="utf-8") as f:
        en_json = json.load(f)

    if "seoPages" not in en_json:
        en_json["seoPages"] = {}
    if "pages" not in en_json["seoPages"]:
        en_json["seoPages"]["pages"] = {}

    for file_rel, page_key in PAGES.items():
        file_abs = os.path.join(root_dir, file_rel)
        if not os.path.exists(file_abs):
            print(f"ERROR: File does not exist: {file_abs}")
            continue
        
        try:
            trans = localize_file(file_abs, page_key)
            
            if page_key not in en_json["seoPages"]["pages"]:
                en_json["seoPages"]["pages"][page_key] = {}
                
            for k, v in trans.items():
                en_json["seoPages"]["pages"][page_key][k] = v
                
            print(f"Successfully processed {file_rel} and updated en.json under seoPages.pages.{page_key}")
        except Exception as e:
            print(f"Failed to process {file_rel}: {e}")

    with open(locales_path, "w", encoding="utf-8") as f:
        json.dump(en_json, f, indent=4, ensure_ascii=False)
    
    print("All files processed and src/locales/en.json updated successfully!")

if __name__ == "__main__":
    main()
