import re
import json
import os
from extract_translations import find_return_blocks, extract_and_replace

# Define the 14 B2B pages with their paths and pageKeys
PAGES = [
    # Composting pages
    {
        "path": "src/pages/composting/CommercialCompostingPage.tsx",
        "key": "commercialComposting"
    },
    {
        "path": "src/pages/composting/CompostServiceFinderPage.tsx",
        "key": "compostServiceFinder"
    },
    {
        "path": "src/pages/composting/CompostingBenefitsPage.tsx",
        "key": "compostingBenefits"
    },
    {
        "path": "src/pages/composting/NaturalCelluloseFiberPage.tsx",
        "key": "naturalCelluloseFiber"
    },
    {
        "path": "src/pages/composting/OrganicComplianceSupportPage.tsx",
        "key": "organicComplianceSupport"
    },
    {
        "path": "src/pages/composting/PlasticFreePage.tsx",
        "key": "plasticFree"
    },
    # Function pages
    {
        "path": "src/pages/function/CarbonNeutralBagsPage.tsx",
        "key": "carbonNeutralBags"
    },
    {
        "path": "src/pages/function/HeatResistantCandlePackagingPage.tsx",
        "key": "heatResistantCandlePackaging"
    },
    {
        "path": "src/pages/function/LargeFormatKraftHeavyBagPage.tsx",
        "key": "largeFormatKraftHeavyBag"
    },
    {
        "path": "src/pages/function/MicrowaveSteamBagsPage.tsx",
        "key": "microwaveSteamBags"
    },
    {
        "path": "src/pages/function/RecyclableHighBarrierPage.tsx",
        "key": "recyclableHighBarrier"
    },
    {
        "path": "src/pages/function/RetortPouchPage.tsx",
        "key": "retortPouch"
    },
    {
        "path": "src/pages/function/SpoutPouchPage.tsx",
        "key": "spoutPouch"
    },
    {
        "path": "src/pages/function/WaterSolublePackagingPage.tsx",
        "key": "waterSolublePackaging"
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
