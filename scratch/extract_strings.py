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
        print(f"File not found: {full_path}")
        continue
    
    print(f"\n========================================\nFILE: {rel_path} ({page_key})\n========================================")
    with open(full_path, "r", encoding="utf-8") as f:
        content = f.read()
    
    # Print lines that look like they contain text content for quick inspection
    lines = content.split('\n')
    for i, line in enumerate(lines):
        # match lines that have string literals but are not imports or Lucide icons
        if any(keyword in line for keyword in ['title:', 'description:', 'heroTitle:', 'heroSubtitle:', 'introSummary:', 'question:', 'answer:', 'headers:', 'rows:']):
            print(f"{i+1}: {line.strip()}")
        elif '<h1>' in line or '<p>' in line or '<h4>' in line or '<h5>' in line or '<li>' in line:
            print(f"{i+1}: {line.strip()}")
