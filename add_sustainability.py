import re

with open('src/store/productData.ts', 'r') as f:
    content = f.read()

# Add sustainability to BaseStoreProduct
base_interface_pattern = r"(export interface BaseStoreProduct \{.*?category: StoreCategory\n)"
content = re.sub(base_interface_pattern, r"\1  sustainability?: 'conventional' | 'recyclable' | 'compostable' | 'reusable'\n", content, flags=re.DOTALL)

# Add to all products in FEATURED_PRODUCTS
# Let's find all objects in FEATURED_PRODUCTS
# Since it's typescript, parsing is hard. We can use regex to inject it after category: '...'
def determine_sustainability(cat, sub_cat, name):
    cat_lower = (cat or '').lower()
    name_lower = (name or '').lower()
    
    if 'eco' in cat_lower or 'compostable' in name_lower:
        return 'compostable'
    elif 'conventional' in cat_lower or 'custom-pouches' in cat_lower:
        return 'conventional'
    elif 'reusable' in cat_lower or 'reusable' in name_lower:
        return 'reusable'
    elif 'box' in cat_lower or 'recyclable' in name_lower or 'paper' in name_lower:
        return 'recyclable'
    elif 'sample' in cat_lower:
        return 'conventional' # Samples are mixed
    else:
        return 'conventional'

# We can replace all occurrences of `category: '...'` with `category: '...', sustainability: '...'`
# But wait, category might be 'custom-pouches' | 'eco-stock' | etc.

# Let's iterate over all lines, looking for `id: '...'`, then reading until we see `category: '...'`, then injecting `sustainability: '...'`.
lines = content.split('\n')
new_lines = []
current_id = None
current_name = None
inside_product = False
brace_count = 0

for line in lines:
    new_lines.append(line)
    
    # We want to add it to product objects.
    # We can just look for `category: 'something'` and insert `sustainability` right after it.
    match = re.search(r"^\s*category:\s*'([^']+)'", line)
    if match:
        cat = match.group(1)
        # To determine sustainability, we could look ahead or behind for name, but doing it just by category:
        if cat in ['eco-stock', 'eco-digital']:
            sus = 'compostable'
        elif cat in ['conventional-stock', 'conventional-digital', 'sample', 'custom-pouches', '3d-print']:
            sus = 'conventional'
        elif cat in ['boxes']:
            sus = 'recyclable'
        else:
            sus = 'conventional'
            
        new_lines.append(f"{line.split('category:')[0]}sustainability: '{sus}',")

with open('src/store/productData.ts', 'w') as f:
    f.write('\n'.join(new_lines))

print("Modified productData.ts")
