import re

with open('src/main.tsx', 'r') as f:
    content = f.read()

pages_data = [
    {"slug": "compostable-barrier-packaging-for-nuts", "name": "CompostableBarrierPackagingForNuts"},
    {"slug": "custom-shaped-sachets-for-spices", "name": "CustomShapedSachetsForSpices"},
    {"slug": "organic-compliance-support-guide", "name": "OrganicComplianceSupportGuide"},
    {"slug": "flexible-sachet-sourcing-for-powders", "name": "FlexibleSachetSourcingForPowders"},
    {"slug": "digital-printed-stand-up-pouches-for-pet-food", "name": "DigitalPrintedStandUpPouchesForPetFood"},
    {"slug": "eco-friendly-dupont-paper-bags", "name": "EcoFriendlyDupontPaperBags"},
    {"slug": "flat-bottom-pouch-pe-evoh-pe-140-microns", "name": "FlatBottomPouchPeEvohPe140Microns"},
    {"slug": "digital-printed-barrier-pouches-small-batch", "name": "DigitalPrintedBarrierPouchesSmallBatch"},
    {"slug": "small-sachet-silk", "name": "SmallSachetSilk"},
    {"slug": "middle-seal-gusset-bag-white-kraft-paper-pla-aluminized", "name": "MiddleSealGussetBagWhiteKraftPaperPlaAluminized"}
]

imports = "\n".join([f"const {p['name']}Page = lazyWithRetry(() => import('./pages/seo/{p['name']}Page'));" for p in pages_data])
routes = "\n".join([f"                        <Route path=\"/topics/{p['slug']}\" element={{<{p['name']}Page />}} />" for p in pages_data])

# 1. Inject imports
import_marker = "const DigitalPrintFlexiblePackagingForPharmaceuticalsPage = lazyWithRetry(() => import('./pages/seo/DigitalPrintFlexiblePackagingForPharmaceuticalsPage'));"
content = content.replace(import_marker, import_marker + "\n" + imports)

# 2. Split into B2C and B2B blocks
b2c_idx = content.find("if (getDomain() === 'pouch') {")
else_idx = content.find("} else {", b2c_idx)

# Inject B2C routes
b2c_block = content[:else_idx]
b2c_routes_marker = "</MultilingualRoutes>"
b2c_block = b2c_block.replace(b2c_routes_marker, routes + "\n                      " + b2c_routes_marker)

# Inject B2B routes
b2b_block = content[else_idx:]
b2b_routes_marker = "</MultilingualRoutes>"
b2b_block = b2b_block.replace(b2b_routes_marker, routes + "\n                      " + b2b_routes_marker)

new_content = b2c_block + b2b_block

with open('src/main.tsx', 'w') as f:
    f.write(new_content)

print("Injected routes into main.tsx")
