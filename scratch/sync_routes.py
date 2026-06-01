import json

# Load route mapping
json_path = '/Users/ryanmacmini/Desktop/1 App i made/Master Achieve Pack/achieve pack website/achieve-pack/src/data/route-mapping.json'
with open(json_path, 'r', encoding='utf-8') as f:
    data = json.load(f)

# Extract lists
pouch_list = data.get('pouch', [])
achieve_list = data.get('achieve', [])
synced_list = data.get('synced', [])
pending_list = data.get('pending', [])

# Deduplicate pending list
unique_pending = list(set(pending_list))

# Move pending to pouch and synced
for route in unique_pending:
    if route not in pouch_list:
        pouch_list.append(route)
    if route not in synced_list:
        synced_list.append(route)

# Clear pending list
data['pending'] = []

# Deduplicate and sort all lists
# Let's keep them unique but preserve order or sort them nicely
def clean_and_sort(lst):
    # Keep unique elements
    seen = set()
    unique_list = []
    for item in lst:
        if item not in seen:
            seen.add(item)
            unique_list.append(item)
    # Let's sort them so they are neat
    return sorted(unique_list)

data['pouch'] = clean_and_sort(pouch_list)
data['achieve'] = clean_and_sort(achieve_list)
data['synced'] = clean_and_sort(synced_list)

# Write back
with open(json_path, 'w', encoding='utf-8') as f:
    json.dump(data, f, indent=2, ensure_ascii=False)

print("Route mapping synchronized successfully!")
print(f"Total Pouch routes: {len(data['pouch'])}")
print(f"Total Achieve routes: {len(data['achieve'])}")
print(f"Total Synced routes: {len(data['synced'])}")
print(f"Total Pending routes: {len(data['pending'])}")
