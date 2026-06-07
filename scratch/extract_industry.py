import re
import json
import os
import sys

def slugify(text):
    # Strip HTML tags
    text = re.sub(r'<[^>]+>', '', text)
    # Remove non-alphanumeric characters
    text = re.sub(r'[^a-zA-Z0-9\s]', '', text)
    words = text.strip().split()
    if not words:
        return 'text'
    # camelCase of first 5 words
    return words[0].lower() + ''.join(w.capitalize() for w in words[1:5])

def extract_strings_from_file(file_path):
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()

    translations = {}

    # Extract Helmet title, description, keywords
    meta_title = re.search(r'<title>(.*?)</title>', content)
    if meta_title:
        translations['metaTitle'] = meta_title.group(1)

    meta_desc = re.search(r'<meta\s+name="description"\s+content="([^"]*)"', content)
    if meta_desc:
        translations['metaDescription'] = meta_desc.group(1)
    else:
        # Check og:description or other description
        meta_desc_og = re.search(r'<meta\s+property="og:description"\s+content="([^"]*)"', content)
        if meta_desc_og:
            translations['metaDescription'] = meta_desc_og.group(1)

    meta_keywords = re.search(r'<meta\s+name="keywords"\s+content="([^"]*)"', content)
    if meta_keywords:
        translations['metaKeywords'] = meta_keywords.group(1)

    # Extract SEOPageLayout props
    layout_match = re.search(r'<SEOPageLayout\s+(.*?)\/>', content, re.DOTALL)
    if layout_match:
        layout_props = layout_match.group(1)
        # Find string attributes like title="...", description="..."
        attrs = re.findall(r'(\w+)="([^"]*)"', layout_props)
        for name, val in attrs:
            if name in ['title', 'description', 'heroTitle', 'heroSubtitle', 'introSummary', 'ctaTitle', 'ctaDescription', 'ctaButtonText']:
                translations[name] = val
        
        # Check if keywords are an array in the prop
        kw_arr = re.search(r'keywords=\{\[([^\]]*)\]\}', layout_props)
        if kw_arr:
            # e.g. 'baby food packaging', 'spout pouch'
            kws = [k.strip().strip("'").strip('"') for k in kw_arr.group(1).split(',')]
            translations['layoutKeywords'] = kws

    # Extract sections, faqs, tables, relatedLinks strings
    # We can scan for string literals in the file that are user facing.
    # To do this safely and precisely, let's extract sections manually or using regex for specific patterns:
    # 1. sections array
    # 2. faqs array
    # 3. tables array
    # 4. relatedLinks array
    
    # Let's extract all strings in the sections array:
    # Search for all strings like: title: '...' or question: '...' or answer: '...'
    # Handles nested quotes correctly
    str_matches = re.finditer(r"\b(title|question|answer|description):\s*(?:\"((?:[^\"\\]|\\.)*)\"|'((?:[^'\\]|\\.)*)')", content)
    for m in str_matches:
        prop = m.group(1)
        val = m.group(2) if m.group(2) is not None else m.group(3)
        # Avoid duplicating keys
        key = f"{prop}_{slugify(val)}"
        translations[key] = val

    # Let's also extract JSX text inside the sections array
    # We can find the block between `const sections = [` and `]` or `const faqs`
    sections_match = re.search(r'const\s+sections\s*=\s*\[(.*?)\]\s*const\s+faqs', content, re.DOTALL)
    if not sections_match:
        sections_match = re.search(r'const\s+sections\s*=\s*\[(.*?)\]\s*const\s+tables', content, re.DOTALL)
    if not sections_match:
        sections_match = re.search(r'const\s+sections\s*=\s*\[(.*?)\]\s*return', content, re.DOTALL)

    if sections_match:
        sections_block = sections_match.group(1)
        # Find all JSX text inside paragraphs, headers, strong tags, list items, etc.
        # Simple regex to find text between tags, excluding tags themselves:
        # e.g., >Text<
        jsx_texts = re.findall(r'>([^<>{}\n\t]+)<', sections_block)
        for text in jsx_texts:
            text = text.strip()
            # Only count if it contains letters
            if text and re.search(r'[a-zA-Z]', text):
                # Clean up entities if any
                text = text.replace('&nbsp;', ' ').replace('&amp;', '&')
                key = slugify(text)
                translations[key] = text

    return translations

if __name__ == '__main__':
    if len(sys.argv) < 2:
        print("Usage: python extract_industry.py <file_path>")
        sys.exit(1)
    file_path = sys.argv[1]
    res = extract_strings_from_file(file_path)
    print(json.dumps(res, indent=2))
