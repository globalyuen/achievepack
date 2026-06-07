import os
import json
import sys

# Add the scratch directory to python path so we can import extract_translations
sys.path.append(os.path.dirname(os.path.abspath(__file__)))
from extract_translations import extract_and_replace

# Define the 11 pages with their paths and pageKeys
PAGES = [
    {
        "path": "src/pages/pouch/industry/PouchBabyFoodPage.tsx",
        "key": "pouchBabyFood"
    },
    {
        "path": "src/pages/pouch/industry/PouchCoffeeTeaPage.tsx",
        "key": "pouchCoffeeTea"
    },
    {
        "path": "src/pages/pouch/industry/PouchFrozenFoodPage.tsx",
        "key": "pouchFrozenFood"
    },
    {
        "path": "src/pages/pouch/industry/PouchPetFoodPage.tsx",
        "key": "pouchPetFood"
    },
    {
        "path": "src/pages/pouch/industry/PouchSaucesPage.tsx",
        "key": "pouchSauces"
    },
    {
        "path": "src/pages/pouch/industry/PouchSnacksPage.tsx",
        "key": "pouchSnacks"
    },
    {
        "path": "src/pages/pouch/industry/PouchSupplementsPage.tsx",
        "key": "pouchSupplements"
    },
    {
        "path": "src/pages/pouch/composting/PouchCompostingBenefitsPage.tsx",
        "key": "pouchCompostingBenefits"
    },
    {
        "path": "src/pages/pouch/composting/PouchCompostingServicesPage.tsx",
        "key": "pouchCompostingServices"
    },
    {
        "path": "src/pages/pouch/composting/PouchPlasticFreePage.tsx",
        "key": "pouchPlasticFree"
    },
    {
        "path": "src/pages/pouch/solutions/PouchCitrusOilPackagingPage.tsx",
        "key": "pouchCitrusOilPackaging"
    }
]

EN_JSON_PATH = "src/locales/en.json"

def main():
    # Load the master translation file
    if os.path.exists(EN_JSON_PATH):
        with open(EN_JSON_PATH, "r", encoding="utf-8") as f:
            en_data = json.load(f)
    else:
        print(f"Error: {EN_JSON_PATH} not found!")
        return

    if "seoPages" not in en_data:
        en_data["seoPages"] = {}
    if "pages" not in en_data["seoPages"]:
        en_data["seoPages"]["pages"] = {}

    pages_translations = en_data["seoPages"]["pages"]

    for page in PAGES:
        file_path = page["path"]
        page_key = page["key"]
        
        if not os.path.exists(file_path):
            print(f"Skipping: {file_path} (does not exist)")
            continue
            
        print(f"\nProcessing {file_path} (key: {page_key})...")
        new_content, trans = extract_and_replace(file_path, page_key)
        
        # Save updated TSX file
        with open(file_path, "w", encoding="utf-8") as f:
            f.write(new_content)
        print(f"Saved localized file to {file_path}")
        
        # Merge translations safely
        if page_key not in pages_translations:
            pages_translations[page_key] = {}
            
        page_dict = pages_translations[page_key]
        added_count = 0
        skipped_count = 0
        
        for k, v in trans.items():
            if k not in page_dict:
                page_dict[k] = v
                added_count += 1
            else:
                skipped_count += 1
                
        print(f"Merged translations for {page_key}: added {added_count}, skipped {skipped_count} (already existing)")

    # Save the updated en.json
    with open(EN_JSON_PATH, "w", encoding="utf-8") as f:
        json.dump(en_data, f, ensure_ascii=False, indent=4)
    print(f"\nSuccessfully updated {EN_JSON_PATH}!")

if __name__ == "__main__":
    main()
