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

# We will read each file, extract the content, and print it out so we can construct a perfect en.json template.
# Since the files are clean TSX, we can write a script to look at the lines and print the text structures,
# or we can write a custom regex-based parser to find and structure them. Let's inspect the files and write them down.
# Let's read files 4 to 12 first to see how they look. We'll do it using a script to extract all text from these files.

for rel_path, page_key in files:
    full_path = os.path.join(base_dir, rel_path)
    print(f"\n--- {page_key} ({rel_path}) ---")
    with open(full_path, "r", encoding="utf-8") as f:
        lines = f.readlines()
        for idx, line in enumerate(lines):
            # Print elements that contain translatable text
            stripped = line.strip()
            if not stripped:
                continue
            # Check for strings
            if any(s in stripped for s in ['title="', 'description="', 'heroTitle="', 'heroSubtitle="', 'introSummary="', 'ctaTitle="', 'ctaDescription="', 'ctaButtonText="']):
                print(f"Prop at line {idx+1}: {stripped}")
            if 'question:' in stripped or 'answer:' in stripped:
                print(f"FAQ at line {idx+1}: {stripped}")
            if 'headers:' in stripped or 'rows:' in stripped:
                print(f"Table at line {idx+1}: {stripped}")
