import os
import re

files_to_process = [
    ("src/pages/composting/CommercialCompostingPage.tsx", "commercialComposting"),
    ("src/pages/composting/CompostServiceFinderPage.tsx", "compostServiceFinder"),
    ("src/pages/composting/CompostingBenefitsPage.tsx", "compostingBenefits"),
    ("src/pages/composting/NaturalCelluloseFiberPage.tsx", "naturalCelluloseFiber"),
    ("src/pages/composting/OrganicComplianceSupportPage.tsx", "organicComplianceSupport"),
    ("src/pages/composting/PlasticFreePage.tsx", "plasticFree"),
    ("src/pages/function/CarbonNeutralBagsPage.tsx", "carbonNeutralBags"),
    ("src/pages/function/HeatResistantCandlePackagingPage.tsx", "heatResistantCandlePackaging"),
    ("src/pages/function/LargeFormatKraftHeavyBagPage.tsx", "largeFormatKraftHeavyBag"),
    ("src/pages/function/MicrowaveSteamBagsPage.tsx", "microwaveSteamBags"),
    ("src/pages/function/PVAWaterSolubleBagsPage.tsx", "pvaWaterSolubleBags"),
    ("src/pages/function/RicePaperBagsPage.tsx", "ricePaperBags"),
    ("src/pages/function/SmartDegassingStickerPage.tsx", "smartDegassingSticker"),
    ("src/pages/function/SpoutPouchesJuicePage.tsx", "spoutPouchesJuice")
]

base_dir = "/Users/ryanmacmini/Desktop/1 App i made/Master Achieve Pack/achieve pack website/achieve-pack"

for rel_path, page_key in files_to_process:
    full_path = os.path.join(base_dir, rel_path)
    if not os.path.exists(full_path):
        print(f"{page_key}: File not found")
        continue
    
    with open(full_path, "r", encoding="utf-8") as f:
        content = f.read()
    
    # Check if they use SEOPageLayout
    uses_layout = "SEOPageLayout" in content
    uses_blog_template = "BlogArticleTemplate" in content
    uses_pouch_domain = "isPouchDomain" in content
    
    # Check helmet title
    title_match = re.search(r"<title>(.*?)</title>", content)
    title = title_match.group(1) if title_match else "None"
    
    print(f"Key: {page_key}")
    print(f"  Path: {rel_path}")
    print(f"  Uses SEOPageLayout: {uses_layout}")
    print(f"  Uses BlogArticleTemplate: {uses_blog_template}")
    print(f"  Uses Pouch Domain check: {uses_pouch_domain}")
    print(f"  Title: {title}")
    print("-" * 50)
