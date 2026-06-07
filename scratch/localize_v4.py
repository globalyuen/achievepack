import re
import json
import os

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
    if s in ['JetBrains Mono', 'Space Grotesk', 'application/ld+json', 'product', 'summary_large_image', 'canonical', 'description', 'og:type', 'Brand', 'Product', 'FAQPage', 'Question', 'Answer']:
        return False
    # Exclude currencies, brands, units, ids
    if s in ['USD', 'POUCH.ECO', 'pieces', 'days', 'months', 'weeks', 'mm', 'cMax', 'leakRate', 'hotFill', 'pieces', 'pieces/min', 'mm', 'gsm', 'MOQ']:
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
                blocks.append((start_idx, i - 1))
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

    # Step 1: Replace JS variable declarations for title, description, metaDescription
    # E.g., const title = '...' or const metaDescription = '...'
    var_pattern = r'(\bconst\s+|\blet\s+|\bvar\s+)?\b(title|metaDescription|description)\s*=\s*(["\'`])((?:\\\3|(?!\3).)*)\3'
    def replace_var(match):
        prefix = match.group(1) or ''
        var_name = match.group(2)
        quote = match.group(3)
        val = match.group(4)
        unescaped = val.replace('\\' + quote, quote)
        if is_translatable(unescaped):
            key = 'metaTitle' if var_name == 'title' else 'metaDescription'
            translations[key] = unescaped
            if prefix:
                return f"{prefix}{var_name} = t('seoPages.pages.{page_key}.{key}')"
            else:
                return f"{var_name}={{t('seoPages.pages.{page_key}.{key}')}}"
        return match.group(0)
    content = re.sub(var_pattern, replace_var, content)

    # Step 2: Replace object properties inside declarations (schemas, cards list, specs list, faqs list, etc.)
    # Match properties like name: '...', label: '...', title: '...', description: '...', etc.
    # Optional quotes matching is done via \1
    prop_pattern = r'(?<![a-zA-Z0-9_])(["\'`]?)(name|text|label|title|description|badge|subtitle|ctaText|q|a|desc|sub|bullet|header|caption)\1\s*:\s*(["\'`])((?:\\\3|(?!\3).)*)\3'
    def replace_prop(match):
        prop_name = match.group(2)
        quote = match.group(3)
        val = match.group(4)
        unescaped = val.replace('\\' + quote, quote)
        
        # Don't translate schema names that are variables or constants
        if prop_name in ['name'] and unescaped in ['POUCH.ECO', 'AggregateOffer', 'Product', 'FAQPage', 'Question', 'Answer', 'AggregateRating']:
            return match.group(0)
            
        if is_translatable(unescaped):
            key = slugify(unescaped)
            orig_key = key
            idx = 1
            while key in translations and translations[key] != unescaped:
                key = f"{orig_key}{idx}"
                idx += 1
            translations[key] = unescaped
            return f"{prop_name}: t('seoPages.pages.{page_key}.{key}')"
        return match.group(0)
    content = re.sub(prop_pattern, replace_prop, content)

    # Step 3: Parse the return block and extract raw text and JSX attributes
    blocks = find_return_blocks(content)
    if blocks:
        blocks.sort(key=lambda x: x[0], reverse=True)
        for start, end in blocks:
            block_text = content[start:end]
            
            # Replace attributes: alt="..." and caption="..."
            attr_pattern = r'\b(alt|caption)="([^"]*)"'
            def replace_attr(match):
                attr_name = match.group(1)
                attr_val = match.group(2)
                if is_translatable(attr_val):
                    key = f"{attr_name}_{slugify(attr_val)}"
                    orig_key = key
                    idx = 1
                    while key in translations and translations[key] != attr_val:
                        key = f"{orig_key}{idx}"
                        idx += 1
                    translations[key] = attr_val
                    return f"{attr_name}={{t('seoPages.pages.{page_key}.{key}')}}"
                return match.group(0)
            block_text = re.sub(attr_pattern, replace_attr, block_text)

            # Character by character scan for JSX text nodes
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
                        if stripped and is_translatable(stripped) and not (stripped.startswith('{') and stripped.endswith('}')):
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

    # Clean up duplicate wrapper {t('...')}
    content = re.sub(r"\{\s*t\('([^']+)'\)\s*\}", r"{t('\1')}", content)
    
    # Save the updated TSX file
    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(content)
        
    print(f"Saved localized file: {file_path}")
    print(f"Extracted {len(translations)} strings.")
    
    return translations
