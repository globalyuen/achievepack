import re

with open('src/main.tsx', 'r') as f:
    lines = f.readlines()

seen_imports = set()
seen_routes = set()

new_lines = []
for line in lines:
    import_match = re.search(r'const\s+(\w+)\s*=\s*lazyWithRetry', line)
    if import_match:
        comp_name = import_match.group(1)
        if comp_name in seen_imports:
            continue
        seen_imports.add(comp_name)
    
    route_match = re.search(r'<Route\s+path="/topics/[^"]+"\s+element=\{<(\w+)\s*/>\}', line)
    if route_match:
        comp_name = route_match.group(1)
        if comp_name in seen_routes:
            continue
        seen_routes.add(comp_name)

    new_lines.append(line)

with open('src/main.tsx', 'w') as f:
    f.writelines(new_lines)

