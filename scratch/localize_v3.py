import re
import json
import os
import sys

def slugify(text):
    text = re.sub(r'<[^>]+>', '', text)
    # Convert text to camelCase keys
    text = re.sub(r'[^a-zA-Z0-9\s]', '', text)
    words = text.strip().split()
    if not words:
        return 'text'
    # limit to max 4 words for key
    words = words[:4]
    return words[0].lower() + ''.join(w.capitalize() for w in words[1:])

def is_translatable(s):
    s = s.strip()
    if not s:
        return False
    # Must contain at least one English word of length >= 2
    if not re.search(r'[a-zA-Z]{2,}', s):
        return False
    # Exclude URLs, paths, emails
    if 'http://' in s or 'https://' in s or 'file://' in s or 'ryan@achievepack.com' in s:
        return False
    if s.startswith('/') or s.startswith('./') or s.startswith('../'):
        return False
    # Exclude import/file references
    if any(s.endswith(ext) for ext in ['.tsx', '.ts', '.js', '.json', '.css', '.png', '.jpg', '.jpeg', '.webp', '.mp4', '.svg', '.zip', '.pdf']):
        return False
    # Exclude font names and JSON-LD types
    if s in ['JetBrains Mono', 'Space Grotesk', 'application/ld+json', 'product', 'summary_large_image', 'canonical', 'description', 'og:type']:
        return False
    if s in ['@context', '@type', 'Product', 'AggregateOffer', 'AggregateRating', 'USD', 'InStock', 'FAQPage', 'Question', 'Answer', 'mainEntity', 'offers', 'brand', 'Brand', 'offers']:
        return False
    # Exclude tailwind classes and classnames
    if any(x in s for x in ['bg-', 'text-', 'flex', 'grid-', 'w-', 'h-', 'p-', 'm-', 'border-', 'hover:', 'md:', 'lg:', 'xl:', 'shadow-', 'items-', 'justify-']):
        # If it looks like a list of classes
        if len(s.split()) > 1 and all(re.match(r'^(?:[a-z0-9\-:]+)$', w) for w in s.split()):
            return False
    # Exclude lucide icon names or package names
    if s in ['lucide-react', 'react', 'react-helmet-async', 'framer-motion', 'react-router-dom', 'react-i18next']:
        return False
    # Exclude state names/actions or single short identifiers
    if re.match(r'^[a-z]+[A-Z]\w+$', s) and len(s) < 15: # camelCase identifiers
        return False
    # Exclude pure code constants
    if re.match(r'^[A-Z0-9_]+$', s):
        return False
    return True

def find_return_blocks(content):
    blocks = []
    n = len(content)
    i = 0
    while i < n:
        match = re.match(r'\breturn\s*\(', content[i:])
        if match:
            start_idx = i + match.end()
            i += match.end()
            
            paren_count = 1
            jsx_depth = 0
            in_tag = False
            tag_brace_count = 0
            tag_quote_char = None
            tag_buf = []
            
            in_brace = 0
            js_quote_char = None
            
            while i < n and paren_count > 0:
                char = content[i]
                
                if in_tag:
                    tag_buf.append(char)
                    if tag_quote_char:
                        if char == '\\':
                            tag_buf.append(content[i+1])
                            i += 2
                            continue
                        if char == tag_quote_char:
                            tag_quote_char = None
                        i += 1
                        continue
                    
                    if char in ['"', "'", '`']:
                        tag_quote_char = char
                        i += 1
                        continue
                    
                    if char == '{':
                        tag_brace_count += 1
                        i += 1
                        continue
                    elif char == '}':
                        tag_brace_count -= 1
                        i += 1
                        continue
                        
                    if char == '>' and tag_brace_count == 0:
                        in_tag = False
                        tag_str = "".join(tag_buf)
                        if tag_str.startswith("</"):
                            jsx_depth -= 1
                        elif tag_str.endswith("/>"):
                            pass
                        elif tag_str.startswith("<!--"):
                            pass
                        else:
                            jsx_depth += 1
                        i += 1
                        continue
                    
                    i += 1
                    continue
                    
                # Not in tag
                if in_brace > 0:
                    if js_quote_char:
                        if char == '\\':
                            i += 2
                            continue
                        if char == js_quote_char:
                            js_quote_char = None
                        i += 1
                        continue
                        
                    if char in ['"', "'", '`']:
                        js_quote_char = char
                        i += 1
                        continue
                        
                    if char == '{':
                        in_brace += 1
                        i += 1
                        continue
                    elif char == '}':
                        in_brace -= 1
                        i += 1
                        continue
                        
                    if char == '(':
                        paren_count += 1
                    elif char == ')':
                        paren_count -= 1
                    i += 1
                    continue
                
                # Not in tag and in_brace == 0
                if char == '<':
                    in_tag = True
                    tag_buf = [char]
                    tag_brace_count = 0
                    tag_quote_char = None
                    i += 1
                    continue
                    
                if char == '{':
                    in_brace = 1
                    js_quote_char = None
                    i += 1
                    continue
                    
                if char == '(':
                    if jsx_depth == 0:
                        paren_count += 1
                elif char == ')':
                    if jsx_depth == 0:
                        paren_count -= 1
                i += 1
                
            if paren_count == 0:
                blocks.append((start_idx - len(match.group(0)), i))
        else:
            i += 1
    return blocks

def localize_file(file_path, page_key):
    print(f"\nProcessing {file_path} (pageKey: {page_key})")
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()

    translations = {}

    # Ensure useTranslation import is present
    if 'useTranslation' not in content:
        react_match = re.search(r"import React(, \{[^}]+\})? from 'react'", content)
        if react_match:
            content = content[:react_match.end()] + "\nimport { useTranslation } from 'react-i18next'" + content[react_match.end():]
        else:
            # Insert at the very top of file imports
            content = "import { useTranslation } from 'react-i18next'\n" + content

    # Ensure const { t } = useTranslation() is inside the main component
    comp_match = re.search(r'export\s+default\s+function\s+(\w+)\s*\([^)]*\)\s*\{', content)
    if comp_match:
        insert_idx = comp_match.end()
        if 'const { t } = useTranslation()' not in content[comp_match.start():comp_match.start()+300]:
            content = content[:insert_idx] + "\n  const { t } = useTranslation()\n" + content[insert_idx:]
    else:
        # Check for React.FC style component
        fc_match = re.search(r'const\s+(\w+)\s*:\s*React\.FC(\s*<[^>]+>)?\s*=\s*(?:\([^)]*\))?\s*=>\s*\{', content)
        if fc_match:
            insert_idx = fc_match.end()
            if 'const { t } = useTranslation()' not in content[fc_match.start():fc_match.start()+300]:
                content = content[:insert_idx] + "\n  const { t } = useTranslation()\n" + content[insert_idx:]

    # 1. First, extract and replace raw JSX text inside return blocks
    blocks = find_return_blocks(content)
    if blocks:
        # We only look at the main return block (usually the last one or the one inside default export)
        # For simplicity, we process all return blocks from last to first
        blocks.sort(key=lambda x: x[0], reverse=True)
        for start, end in blocks:
            block_text = content[start:end]
            
            # Replace alt and caption attributes inside this block
            attr_pattern = r'\b(alt|caption)="([^"]*)"'
            def replace_attr(match):
                attr_name = match.group(1)
                attr_val = match.group(2)
                if is_translatable(attr_val):
                    key = f"{attr_name}_{slugify(attr_val)}"
                    translations[key] = attr_val
                    return f"{attr_name}={{t('seoPages.pages.{page_key}.{key}')}}"
                return match.group(0)
            block_text = re.sub(attr_pattern, replace_attr, block_text)
            
            # Replace meta description & title & keywords if they are hardcoded in Helmet inside the return block
            desc_pattern = r'<meta\s+name="description"\s+content="([^"]+)"'
            def replace_desc(match):
                val = match.group(1)
                if is_translatable(val):
                    translations['metaDescription'] = val
                    return f'<meta name="description" content={{t(\'seoPages.pages.{page_key}.metaDescription\')}}'
                return match.group(0)
            block_text = re.sub(desc_pattern, replace_desc, block_text)

            keywords_pattern = r'<meta\s+name="keywords"\s+content="([^"]+)"'
            def replace_keywords(match):
                val = match.group(1)
                if is_translatable(val):
                    translations['metaKeywords'] = val
                    return f'<meta name="keywords" content={{t(\'seoPages.pages.{page_key}.metaKeywords\')}}'
                return match.group(0)
            block_text = re.sub(keywords_pattern, replace_keywords, block_text)

            title_pattern = r'<title>(.*?)</title>'
            def replace_title(match):
                val = match.group(1)
                if is_translatable(val):
                    translations['metaTitle'] = val
                    return f"<title>{{t('seoPages.pages.{page_key}.metaTitle')}}</title>"
                return match.group(0)
            block_text = re.sub(title_pattern, replace_title, block_text)

            # Character by character scan for JSX text
            output = []
            i = 0
            in_tag = False
            tag_brace_count = 0
            tag_quote_char = None
            in_brace = 0
            in_comment = False
            current_text = []
            n_block = len(block_text)
            
            while i < n_block:
                if not in_tag and block_text[i:i+4] == '{/*':
                    in_comment = True
                    output.append(block_text[i:i+4])
                    i += 4
                    continue
                elif in_comment and block_text[i:i+3] == '*/}':
                    in_comment = False
                    output.append(block_text[i:i+3])
                    i += 3
                    continue
                elif in_comment:
                    output.append(block_text[i])
                    i += 1
                    continue
                    
                if not in_tag and in_brace == 0 and block_text[i] == '<':
                    if current_text:
                        text_str = "".join(current_text)
                        stripped = text_str.strip()
                        if stripped and is_translatable(stripped) and not stripped.startswith('{') and not stripped.endswith('}'):
                            key = slugify(stripped)
                            orig_key = key
                            idx = 1
                            while key in translations and translations[key] != stripped:
                                key = f"{orig_key}{idx}"
                                idx += 1
                            translations[key] = stripped
                            leading = text_str[:len(text_str)-len(text_str.lstrip())]
                            trailing = text_str[len(text_str.rstrip()):]
                            output.append(f"{leading}{{t('seoPages.pages.{page_key}.{key}')}}{trailing}")
                        else:
                            output.append(text_str)
                        current_text = []
                    
                    in_tag = True
                    tag_brace_count = 0
                    tag_quote_char = None
                    output.append(block_text[i])
                    i += 1
                    continue
                    
                if in_tag:
                    if tag_quote_char:
                        if block_text[i] == '\\':
                            output.append(block_text[i:i+2])
                            i += 2
                            continue
                        if block_text[i] == tag_quote_char:
                            tag_quote_char = None
                        output.append(block_text[i])
                        i += 1
                        continue
                    
                    if block_text[i] in ['"', "'", '`']:
                        tag_quote_char = block_text[i]
                        output.append(block_text[i])
                        i += 1
                        continue
                        
                    if block_text[i] == '{':
                        tag_brace_count += 1
                        output.append(block_text[i])
                        i += 1
                        continue
                    elif block_text[i] == '}':
                        tag_brace_count -= 1
                        output.append(block_text[i])
                        i += 1
                        continue
                        
                    if block_text[i] == '>' and tag_brace_count == 0:
                        in_tag = False
                        output.append(block_text[i])
                        i += 1
                        continue
                    
                    output.append(block_text[i])
                    i += 1
                    continue
                    
                if not in_tag:
                    if block_text[i] == '{':
                        if current_text:
                            text_str = "".join(current_text)
                            stripped = text_str.strip()
                            if stripped and is_translatable(stripped):
                                key = slugify(stripped)
                                orig_key = key
                                idx = 1
                                while key in translations and translations[key] != stripped:
                                    key = f"{orig_key}{idx}"
                                    idx += 1
                                translations[key] = stripped
                                leading = text_str[:len(text_str)-len(text_str.lstrip())]
                                trailing = text_str[len(text_str.rstrip()):]
                                output.append(f"{leading}{{t('seoPages.pages.{page_key}.{key}')}}{trailing}")
                            else:
                                output.append(text_str)
                            current_text = []
                        in_brace += 1
                        output.append(block_text[i])
                        i += 1
                        continue
                    elif block_text[i] == '}':
                        in_brace -= 1
                        output.append(block_text[i])
                        i += 1
                        continue
                        
                if not in_tag and in_brace == 0:
                    current_text.append(block_text[i])
                else:
                    output.append(block_text[i])
                i += 1
                
            if current_text:
                output.append("".join(current_text))
                
            content = content[:start] + "".join(output) + content[end:]

    # 2. Extract and replace translatable quoted strings in variables, arrays, schemas, etc.
    # We find all quoted strings, but we must make sure we only match inside assignments like "key": "value" or var = "value" or in arrays.
    # To do this safely and avoid replacing code, we search for string literals:
    # 'string' or "string" or `string`
    # Let's extract all matches.
    string_pattern = r'(["\'`])((?:\\\1|(?!\1).)*)\1'
    matches = re.findall(string_pattern, content)
    
    # We filter and de-duplicate the strings to translate
    unique_strings = set()
    for quote, val in matches:
        # Unescape quotes
        unescaped = val.replace('\\' + quote, quote)
        if is_translatable(unescaped):
            unique_strings.add((quote, unescaped))

    # Sort strings by length descending to prevent partial replacement issues
    sorted_strings = sorted(list(unique_strings), key=lambda x: len(x[1]), reverse=True)
    
    for quote, val in sorted_strings:
        # Determine the key name
        key = slugify(val)
        # Special variable names mapping
        if 'Protein Powder' in val and 'Supplement' in val:
            key = 'metaTitle'
        elif 'Baby Food Pouches' in val:
            key = 'metaTitle'
        elif 'Frozen Food Packaging' in val:
            key = 'metaTitle'
        elif 'Citrus Oil' in val and 'Low MOQ' in val:
            key = 'metaTitle'
        elif 'Sauces & Condiments' in val:
            key = 'metaTitle'
        elif 'Snack Pouches' in val:
            key = 'metaTitle'
        elif 'Coffee & Tea' in val and 'Compostable' in val:
            key = 'metaTitle'
        elif 'Environmental Benefits of Composting' in val:
            key = 'metaTitle'
        elif 'Plastic-Free vs Compostable' in val:
            key = 'metaTitle'
        elif 'Waste Audits' in val or 'Composting Services' in val:
            key = 'metaTitle'
        
        # Resolve key collisions
        orig_key = key
        idx = 1
        while key in translations and translations[key] != val:
            key = f"{orig_key}{idx}"
            idx += 1
        
        translations[key] = val
        
        # Replace occurrences in the content. We only replace quoted strings.
        escaped_val = val.replace(quote, '\\' + quote)
        # Search for exact quoted string
        old_pattern = re.escape(quote + val + quote)
        # Replacement is t(...)
        # Wait! If it is inside a JSON/object style structure, e.g. "Question": "What is the MOQ...", or name: "What is..."
        # we replace with t('...')
        # But wait, what if it's in Helmet description like <meta name="description" content={metaDescription} /> where metaDescription is a JS variable?
        # That's perfect because if we replace the definition of metaDescription:
        # const metaDescription = '...' -> const metaDescription = t('...')
        # Then the variable itself holds the localized string! This is beautiful and works everywhere!
        
        new_ref = f"t('seoPages.pages.{page_key}.{key}')"
        content = re.sub(quote + re.escape(val) + quote, new_ref, content)

    # Let's clean up any double translations or syntax errors:
    # E.g. t('seoPages.pages.page_key.key') inside {t('...')}
    # If the text was replaced inside JSX curly braces like {t('seoPages.pages.pageKey.key')}, it's fine.
    # But if it was replaced as a quoted string inside {t('text')}, it might become {t(t('seoPages.pages.pageKey.key'))} or similar.
    # Let's check for t(t(...)) and fix it:
    content = re.sub(r"t\(t\('([^']+)'\)\)", r"t('\1')", content)
    # Also if we have {t('seoPages.pages.pageKey.key')} -> if it's inside tag, it's correct.
    
    # Save the updated TSX file
    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(content)
        
    print(f"Saved localized file: {file_path}")
    print(f"Extracted {len(translations)} strings.")
    
    return translations

def merge_into_en_json(all_translations, json_path):
    with open(json_path, 'r', encoding='utf-8') as f:
        en_data = json.load(f)
        
    if 'seoPages' not in en_data:
        en_data['seoPages'] = {}
    if 'pages' not in en_data['seoPages']:
        en_data['seoPages']['pages'] = {}
        
    for page_key, trans in all_translations.items():
        if page_key not in en_data['seoPages']['pages']:
            en_data['seoPages']['pages'][page_key] = {}
        en_data['seoPages']['pages'][page_key].update(trans)
        
    with open(json_path, 'w', encoding='utf-8') as f:
        json.dump(en_data, f, indent=4, ensure_ascii=False)
        
    print(f"\nSuccessfully merged translations into {json_path}")

if __name__ == '__main__':
    # Define files and pageKeys to process
    targets = [
        ('src/pages/pouch/industry/PouchBabyFoodPage.tsx', 'pouchBabyFood'),
        ('src/pages/pouch/industry/PouchCoffeeTeaPage.tsx', 'pouchCoffeeTea'),
        ('src/pages/pouch/industry/PouchFrozenFoodPage.tsx', 'pouchFrozenFood'),
        ('src/pages/pouch/industry/PouchPetFoodPage.tsx', 'pouchPetFood'),
        ('src/pages/pouch/industry/PouchSaucesPage.tsx', 'pouchSauces'),
        ('src/pages/pouch/industry/PouchSnacksPage.tsx', 'pouchSnacks'),
        ('src/pages/pouch/industry/PouchSupplementsPage.tsx', 'pouchSupplements'),
        ('src/pages/pouch/composting/PouchCompostingBenefitsPage.tsx', 'pouchCompostingBenefits'),
        ('src/pages/pouch/composting/PouchCompostingServicesPage.tsx', 'pouchCompostingServices'),
        ('src/pages/pouch/composting/PouchPlasticFreePage.tsx', 'pouchPlasticFree'),
        ('src/pages/pouch/solutions/PouchCitrusOilPackagingPage.tsx', 'pouchCitrusOilPackaging')
    ]
    
    json_path = 'src/locales/en.json'
    
    all_translations = {}
    
    for file_path, page_key in targets:
        if os.path.exists(file_path):
            trans = localize_file(file_path, page_key)
            all_translations[page_key] = trans
        else:
            print(f"Skipping {file_path} - file not found!")
            
    merge_into_en_json(all_translations, json_path)
