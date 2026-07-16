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

    # Inject imports
    imports_to_add = ""
    for name, slug in pages:
        import_stmt = f"const {name}Page = lazyWithRetry(() => import('./pages/seo/{name}Page'));\n"
        if import_stmt not in content:
            imports_to_add += import_stmt
            
    if imports_to_add:
        # Find the last occurrence
        matches = list(re.finditer(r"const \w+Page = lazyWithRetry[^\n]+\n", content))
        if matches:
            last_match = matches[-1]
            pos = last_match.end()
            content = content[:pos] + imports_to_add + content[pos:]

    # Inject routes
    routes_to_add = ""
    for name, slug in pages:
        route_stmt = f'          <Route path="/topics/{slug}" element={{<{name}Page />}} />\n'
        if route_stmt not in content:
            routes_to_add += route_stmt

    if routes_to_add:
        target = '<Route path="*" element={<Navigate to="/" replace />} />'
        if target in content:
            content = content.replace(target, routes_to_add + "          " + target)

    with open(filepath, 'w') as f:
        f.write(content)

patch_main(AP_MAIN)
print("Patched AP main.tsx.")
