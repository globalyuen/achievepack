import re

with open('src/store/productData.ts', 'r') as f:
    lines = f.readlines()

new_lines = []
in_interfaces = True
for i, line in enumerate(lines):
    if line.strip().startswith('export const FEATURED_PRODUCTS'):
        in_interfaces = False
        
    if in_interfaces and line.strip().startswith('sustainability:'):
        # Skip the explicit type definition in child interfaces
        continue
    
    new_lines.append(line)

with open('src/store/productData.ts', 'w') as f:
    f.writelines(new_lines)
