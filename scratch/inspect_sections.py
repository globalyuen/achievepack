import os
import re
import json

files = [
    ("src/pages/solutions/ArtisanProducerPage.tsx", "artisanProducer"),
    ("src/pages/solutions/CitrusOilPackagingPage.tsx", "citrusOilPackaging"),
    ("src/pages/solutions/CoffeeRoasterPage.tsx", "coffeeRoaster"),
    ("src/pages/solutions/CorporateSustainabilityPage.tsx", "corporateSustainability"),
    ("src/pages/solutions/EcommerceBrandPage.tsx", "ecommerceBrand"),
    ("src/pages/solutions/FoodManufacturerPage.tsx", "foodManufacturer"),
    ("src/pages/solutions/ProductDeveloperPage.tsx", "productDeveloper"),
    ("src/pages/solutions/SnackBrandManagerPage.tsx", "snackBrandManager"),
    ("src/pages/solutions/StartupFounderPage.tsx", "startupFounder"),
    ("src/pages/recyclable/MonoMaterialFoundationPage.tsx", "monoMaterialFoundation"),
    ("src/pages/recyclable/RecyclableRoadmapPage.tsx", "recyclableRoadmap"),
    ("src/pages/recyclable/WhatIsRecyclablePage.tsx", "whatIsRecyclable")
]

base_dir = "/Users/ryanmacmini/Desktop/1 App i made/Master Achieve Pack/achieve pack website/achieve-pack"

for rel_path, page_key in files:
    full_path = os.path.join(base_dir, rel_path)
    if not os.path.exists(full_path):
        continue
        
    print(f"\nFILE: {rel_path}")
    with open(full_path, "r", encoding="utf-8") as f:
        content = f.read()
        
    # Find the const sections array
    sections_match = re.search(r'const sections = \[(.*?)\]\s*const faqs', content, re.DOTALL)
    if not sections_match:
        # try matching to the end of sections or return
        sections_match = re.search(r'const sections = \[(.*?)\]\s*return', content, re.DOTALL)
        
    if sections_match:
        sections_text = sections_match.group(1)
        # find all id: '...', title: '...'
        section_headers = re.findall(r'id:\s*\'([^\']+)\',\s*title:\s*\'([^\']+)\'', sections_text)
        if not section_headers:
            section_headers = re.findall(r'id:\s*"([^"]+)",\s*title:\s*"([^"]+)"', sections_text)
            
        print("Sections found:")
        for sid, stitle in section_headers:
            print(f"  - [{sid}] {stitle}")
    else:
        print("Sections array NOT matched by regex.")
