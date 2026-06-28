import os

topics = [
    "Matcha Sachet", "Cacao Stand Up", "Spices Moisture Proof", "Premium Tea", "Cocktail Spout", 
    "Candy UV", "Crisps Shaped", "Dried Fruits Tear Notch", "Cheese Pocket Zipper", "Euro Hole Hang", 
    "Pet Food Quad Seal", "Pharma Velcro", "Detergent Spout", "Electronics Anti Static", "Apparel Zipper", 
    "Hologram Hot Stamping", "Granola Soft Touch", "Collagen High Barrier", "PLA Rice", "Rice Paper Artisanal", 
    "DDP Packaging", "Fast Air Freight", "FDA BRC Certified", "ISO Sustainable", "Urgent Orders", 
    "Frozen Vacuum", "EVOH Retort", "Beef Jerky Barrier", "Valve Coffee Bags", "Home vs Industrial Compostable"
]

def to_camel_case(text):
    return ''.join(word.title() for word in text.split())

def to_kebab_case(text):
    return '-'.join(word.lower() for word in text.split())

def to_snake_case(text):
    return '_'.join(word.lower() for word in text.split())

# 1. Patch main.tsx
with open('src/main.tsx', 'r') as f:
    main_ts = f.read()

imports = []
route_map = []
routes = []

for topic in topics:
    camel = to_camel_case(topic)
    kebab = to_kebab_case(topic)
    imports.append(f"const {camel}Page = lazyWithRetry(() => import('./pages/topics/{camel}'))")
    route_map.append(f"  '/topics/{kebab}': () => import('./pages/topics/{camel}'),")
    routes.append(f"          <Route path=\"topics/{kebab}\" element={{<{camel}Page />}} />")

imports_str = "\n".join(imports)
route_map_str = "\n".join(route_map)
routes_str = "\n".join(routes)

if "MatchaSachetPage" not in main_ts:
    main_ts = main_ts.replace("// Topics Pages - AI Search Volume SEO - Lazy loaded", "// Topics Pages - AI Search Volume SEO - Lazy loaded\n" + imports_str)
    main_ts = main_ts.replace("  '/topics/minimalist-d2c-packaging': () => import('./pages/topics/MinimalistD2CPackagingPage'),", "  '/topics/minimalist-d2c-packaging': () => import('./pages/topics/MinimalistD2CPackagingPage'),\n" + route_map_str)
    main_ts = main_ts.replace("{/* Topics Pages - AI Search Volume SEO */}", "{/* Topics Pages - AI Search Volume SEO */}\n" + routes_str)

    with open('src/main.tsx', 'w') as f:
        f.write(main_ts)
    print("main.tsx patched")
else:
    print("main.tsx already patched")

# 2. Patch Footer.tsx
with open('src/components/Footer.tsx', 'r') as f:
    footer_tsx = f.read()

footer_links = []
for topic in topics:
    camel = to_camel_case(topic)
    kebab = to_kebab_case(topic)
    snake = to_snake_case(topic)
    footer_links.append(f"              <li><Link to=\"/topics/{kebab}\" className=\"text-gray-400 hover:text-white transition-colors\">{{t('seo_topics.{snake}.title', '{topic}')}}</Link></li>")

footer_links_str = "\n".join(footer_links)

if "MatchaSachet" not in footer_tsx:
    footer_tsx = footer_tsx.replace(
        "<li><Link to=\"/topics/custom-vs-standard-packaging\" className=\"text-gray-400 hover:text-white transition-colors\">{t('pouchEcoFooter.customVsStandard', 'Custom vs. Standard')}</Link></li>",
        "<li><Link to=\"/topics/custom-vs-standard-packaging\" className=\"text-gray-400 hover:text-white transition-colors\">{t('pouchEcoFooter.customVsStandard', 'Custom vs. Standard')}</Link></li>\n" + footer_links_str
    )
    with open('src/components/Footer.tsx', 'w') as f:
        f.write(footer_tsx)
    print("Footer.tsx patched")
else:
    print("Footer.tsx already patched")

# 3. Patch LearnSearchPage.tsx
with open('src/pages/LearnSearchPage.tsx', 'r') as f:
    learn_tsx = f.read()

learn_links = []
for topic in topics:
    kebab = to_kebab_case(topic)
    snake = to_snake_case(topic)
    learn_links.append(f"  {{ id: '{kebab}', title: t('seo_topics.{snake}.title', '{topic}'), category: 'packaging', description: t('seo_topics.{snake}.description', 'Learn about {topic} packaging solutions.'), link: '/topics/{kebab}', icon: FileText, date: '2026-06-28', readTime: '5 min' }},")

learn_links_str = "\n".join(learn_links)
if "matcha-sachet" not in learn_tsx:
    learn_tsx = learn_tsx.replace("  // Add more content as needed", learn_links_str + "\n  // Add more content as needed")
    with open('src/pages/LearnSearchPage.tsx', 'w') as f:
        f.write(learn_tsx)
    print("LearnSearchPage.tsx patched")
else:
    print("LearnSearchPage.tsx already patched")

