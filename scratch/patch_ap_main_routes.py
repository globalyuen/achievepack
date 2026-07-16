import re

AP_MAIN = "/Users/ryanmacmini/Desktop/1 App i made/Master Achieve Pack/achieve pack website/achieve-pack/src/main.tsx"

pages = [
    ("SustainableFlexiblePackagingForPowders", "sustainable-flexible-packaging-for-powders"),
    ("CustomPrintedKraftPaperSachetsForHerbs", "custom-printed-kraft-paper-sachets-for-herbs"),
    ("FreezerSafeVacuumPackaging", "freezer-safe-vacuum-packaging"),
    ("SustainablePouchSizesForCoffeeBeans", "sustainable-pouch-sizes-for-coffee-beans"),
    ("DigitalPrintFlexiblePackagingForPharmaceuticals", "digital-print-flexible-packaging-for-pharmaceuticals")
]

def patch_main(filepath):
    with open(filepath, 'r') as f:
        content = f.read()

    routes_to_add = ""
    for name, slug in pages:
        route_stmt = f'                        <Route path="/topics/{slug}" element={{<{name}Page />}} />\n'
        if route_stmt not in content:
            routes_to_add += route_stmt

    if routes_to_add:
        target = '<Route path="*" element={<NotFoundPage />} />'
        if target in content:
            content = content.replace(target, routes_to_add + "                        " + target)
            with open(filepath, 'w') as f:
                f.write(content)
            print("Injected routes.")
        else:
            print("Target not found.")

patch_main(AP_MAIN)
