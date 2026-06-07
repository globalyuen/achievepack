import os
import re
import json

files = [
    ("src/pages/solutions/ArtisanProducerPage.tsx", "artisanProducer"),
    ("src/pages/solutions/CitrusOilPackagingPage.tsx", "citrusOilPackaging"),
    ("src/pages/solutions/CoffeeRoasterPage.tsx", "coffeeRoaster"),
    ("src/pages/solutions/CorporateSustainabilityPage.tsx", "corporateSustainability"),
    ("src/pages/solutions/EcommerceBrandPage.tsx", "ecommerceBrand"),
    ("src/pages/solutions/FoodManufacturerPage.tsx", "foodManufacturer"),
    ("src/pages/solutions/ProductDeveloperPage.tsx", "productDeveloper"),
    ("src/pages/solutions/SnackBrandManagerPage.tsx", "snackBrandManager"),
    ("src/pages/solutions/StartupFounderPage.tsx", "startupFounder"),
    ("src/pages/recyclable/MonoMaterialFoundationPage.tsx", "monoMaterialFoundation"),
    ("src/pages/recyclable/RecyclableRoadmapPage.tsx", "recyclableRoadmap"),
    ("src/pages/recyclable/WhatIsRecyclablePage.tsx", "whatIsRecyclable")
]

base_dir = "/Users/ryanmacmini/Desktop/1 App i made/Master Achieve Pack/achieve pack website/achieve-pack"

def extract_meta_helmet(content):
    meta = {}
    title_match = re.search(r'<title>(.*?)</title>', content)
    if title_match:
        meta['title'] = title_match.group(1)
    
    desc_match = re.search(r'<meta name="description" content="(.*?)"', content)
    if desc_match:
        meta['description'] = desc_match.group(1)
        
    og_title = re.search(r'<meta property="og:title" content="(.*?)"', content)
    if og_title:
        meta['ogTitle'] = og_title.group(1)
        
    og_desc = re.search(r'<meta property="og:description" content="(.*?)"', content)
    if og_desc:
        meta['ogDescription'] = og_desc.group(1)
        
    return meta

def extract_seopagelayout_props(content):
    props = {}
    
    # We look for the SEOPageLayout component call
    layout_match = re.search(r'<SEOPageLayout\s+(.*?)\s*/>', content, re.DOTALL)
    if layout_match:
        layout_text = layout_match.group(1)
        # title
        t_match = re.search(r'title="(.*?)"', layout_text)
        if t_match:
            props['layoutTitle'] = t_match.group(1)
        # description
        d_match = re.search(r'description="(.*?)"', layout_text)
        if d_match:
            props['layoutDescription'] = d_match.group(1)
        # heroTitle
        ht_match = re.search(r'heroTitle="(.*?)"', layout_text)
        if ht_match:
            props['heroTitle'] = ht_match.group(1)
        # heroSubtitle
        hs_match = re.search(r'heroSubtitle="(.*?)"', layout_text)
        if hs_match:
            props['heroSubtitle'] = hs_match.group(1)
        # introSummary
        is_match = re.search(r'introSummary="(.*?)"', layout_text)
        if is_match:
            props['introSummary'] = is_match.group(1)
            
        # CTA props if any
        ct_match = re.search(r'ctaTitle="(.*?)"', layout_text)
        if ct_match:
            props['ctaTitle'] = ct_match.group(1)
        cd_match = re.search(r'ctaDescription="(.*?)"', layout_text)
        if cd_match:
            props['ctaDescription'] = cd_match.group(1)
        cb_match = re.search(r'ctaButtonText="(.*?)"', layout_text)
        if cb_match:
            props['ctaButtonText'] = cb_match.group(1)
            
    return props

def extract_faqs(content):
    # faqs array
    faq_match = re.search(r'const faqs = \[(.*?)\]', content, re.DOTALL)
    if not faq_match:
        return []
    
    faq_text = faq_match.group(1)
    # find all objects { question: "...", answer: "..." }
    # use a regex that matches question and answer
    faq_items = []
    matches = re.finditer(r'\{\s*question:\s*"(.*?)",\s*answer:\s*"(.*?)"\s*\}', faq_text, re.DOTALL)
    for m in matches:
        faq_items.append({
            'question': m.group(1).replace('\\"', '"'),
            'answer': m.group(2).replace('\\"', '"')
        })
    return faq_items

def extract_tables(content):
    table_match = re.search(r'const tables = \[(.*?)\]', content, re.DOTALL)
    if not table_match:
        return []
    
    # Let's extract titles, headers, and rows
    table_text = table_match.group(1)
    tables = []
    # Match titles
    titles = re.findall(r'title:\s*"(.*?)"', table_text)
    # Match headers
    headers_match = re.search(r'headers:\s*\[(.*?)\]', table_text)
    headers = []
    if headers_match:
        headers = [h.strip().strip('"').strip("'") for h in headers_match.group(1).split(',')]
        
    # Match rows
    rows_match = re.search(r'rows:\s*\[(.*?)\]\s*\}\s*\}', table_text, re.DOTALL)
    rows = []
    if rows_match:
        row_text = rows_match.group(1)
        # find each sub-array [ ... ]
        sub_arrays = re.findall(r'\[(.*?)\]', row_text)
        for sa in sub_arrays:
            row_items = [item.strip().strip('"').strip("'") for item in sa.split(',')]
            rows.append(row_items)
            
    if titles:
        tables.append({
            'title': titles[0],
            'headers': headers,
            'rows': rows
        })
    return tables

def extract_related_links(content):
    links_match = re.search(r'const relatedLinks = \[(.*?)\]', content, re.DOTALL)
    if not links_match:
        return []
    
    link_text = links_match.group(1)
    links = []
    matches = re.finditer(r'\{\s*title:\s*"(.*?)",\s*url:\s*"(.*?)",\s*description:\s*"(.*?)"\s*\}', link_text, re.DOTALL)
    for m in matches:
        links.append({
            'title': m.group(1),
            'url': m.group(2),
            'description': m.group(3)
        })
    return links

results = {}

for rel_path, page_key in files:
    full_path = os.path.join(base_dir, rel_path)
    if not os.path.exists(full_path):
        continue
    
    with open(full_path, "r", encoding="utf-8") as f:
        content = f.read()
        
    results[page_key] = {
        'meta': extract_meta_helmet(content),
        'layout': extract_seopagelayout_props(content),
        'faqs': extract_faqs(content),
        'tables': extract_tables(content),
        'relatedLinks': extract_related_links(content)
    }

# Save results
output_path = os.path.join(base_dir, "scratch/extracted_pages_data.json")
with open(output_path, "w", encoding="utf-8") as f:
    json.dump(results, f, indent=2, ensure_ascii=False)

print(f"Extracted data saved to {output_path}")
