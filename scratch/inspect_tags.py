import os

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
        continue
    with open(full_path, "r", encoding="utf-8") as f:
        content = f.read()
    
    has_layout_tag = "<SEOPageLayout" in content
    has_blog_tag = "<BlogArticleTemplate" in content
    has_helmet_tag = "<Helmet" in content
    
    print(f"{page_key}: layout={has_layout_tag}, blog={has_blog_tag}, helmet={has_helmet_tag}")
