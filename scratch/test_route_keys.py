import os

directories = [
    'src/pages/topics',
    'src/pages/pouch/topics'
]

routes = []

for d in directories:
    if not os.path.exists(d): continue
    for f in os.listdir(d):
        if not f.endswith('.tsx'): continue
        filepath = os.path.join(d, f)
        
        # We need to see the actual path mapping, usually in App.tsx or derived from filename.
        # But if the file is ReduceWasteGuidePage.tsx, the route is usually /topics/reduce-waste-guide
        # Let's just generate the key from the filename
        # ReduceWasteGuidePage.tsx -> reduceWasteGuidePage
        key = f.replace('.tsx', '')
        # maybe camelCase to snake_case?
        import re
        s1 = re.sub('(.)([A-Z][a-z]+)', r'\1_\2', key)
        snake = re.sub('([a-z0-9])([A-Z])', r'\1_\2', s1).lower()
        
        routes.append(snake)

print(f"Total files: {len(routes)}")
print(routes[:5])
