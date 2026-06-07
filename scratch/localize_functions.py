import re
import json
import os
import sys

def slugify(text):
    # Remove HTML tags
    text = re.sub(r'<[^>]+>', '', text)
    # Remove non-alphanumeric characters
    text = re.sub(r'[^a-zA-Z0-9\s]', '', text)
    words = text.strip().split()
    if not words:
        return 'text'
    # Generate camelCase key
    key = words[0].lower() + ''.join(w.capitalize() for w in words[1:5])
    # Cap length to 40 chars
    return key[:40]

def extract_balanced_parentheses(text, start_pos):
    """Finds the matching closing parenthesis starting from start_pos."""
    paren_count = 0
    in_quote = None
    i = start_pos
    n = len(text)
    
    while i < n:
        char = text[i]
        
        # Handle quotes to ignore parentheses inside strings
        if in_quote:
            if char == '\\':
                i += 2
                continue
            if char == in_quote:
                in_quote = None
            i += 1
            continue
        
        if char in ['"', "'", '`']:
            in_quote = char
            i += 1
            continue
            
        if char == '(':
            paren_count += 1
        elif char == ')':
            paren_count -= 1
            if paren_count == 0:
                return i
        i += 1
    return -1

def scan_jsx_text_nodes(jsx_content, page_key, translations):
    """Scans a JSX block character by character to find raw text nodes and translate them."""
    output = []
    i = 0
    n = len(jsx_content)
    
    in_tag = False
    tag_brace_count = 0
    tag_quote_char = None
    in_brace = 0
    in_comment = False
    current_text = []
    
    while i < n:
        # Check for JSX comment {/* ... */}
        if not in_tag and jsx_content[i:i+4] == '{/*':
            in_comment = True
            output.append(jsx_content[i:i+4])
            i += 4
            continue
        elif in_comment and jsx_content[i:i+3] == '*/}':
            in_comment = False
            output.append(jsx_content[i:i+3])
            i += 3
            continue
        elif in_comment:
            output.append(jsx_content[i])
            i += 1
            continue
            
        # Entering/Leaving JSX Tag
        if not in_tag and in_brace == 0 and jsx_content[i] == '<':
            # Process accumulated text node
            if current_text:
                text_str = "".join(current_text)
                stripped = text_str.strip()
                # If it has letters, it is user-facing text
                if stripped and re.search(r'[\u4e00-\u9fffac-zA-Z]', stripped) and not stripped.startswith('{') and not stripped.endswith('}'):
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
            output.append(jsx_content[i])
            i += 1
            continue
            
        if in_tag:
            # Handle quotes inside tags (attributes)
            if tag_quote_char:
                if jsx_content[i] == '\\':
                    output.append(jsx_content[i:i+2])
                    i += 2
                    continue
                if jsx_content[i] == tag_quote_char:
                    tag_quote_char = None
                output.append(jsx_content[i])
                i += 1
                continue
            
            if jsx_content[i] in ['"', "'", '`']:
                tag_quote_char = jsx_content[i]
                output.append(jsx_content[i])
                i += 1
                continue
                
            # Handle braces inside tags
            if jsx_content[i] == '{':
                tag_brace_count += 1
                output.append(jsx_content[i])
                i += 1
                continue
            elif jsx_content[i] == '}':
                tag_brace_count -= 1
                output.append(jsx_content[i])
                i += 1
                continue
                
            # Exiting tag
            if jsx_content[i] == '>' and tag_brace_count == 0:
                in_tag = False
                output.append(jsx_content[i])
                i += 1
                continue
            
            output.append(jsx_content[i])
            i += 1
            continue
            
        # Outside tag - handle JS expressions inside JSX
        if not in_tag:
            if jsx_content[i] == '{':
                if current_text:
                    text_str = "".join(current_text)
                    stripped = text_str.strip()
                    if stripped and re.search(r'[\u4e00-\u9fffac-zA-Z]', stripped):
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
                output.append(jsx_content[i])
                i += 1
                continue
            elif jsx_content[i] == '}':
                in_brace -= 1
                output.append(jsx_content[i])
                i += 1
                continue
                
        if not in_tag and in_brace == 0:
            current_text.append(jsx_content[i])
        else:
            output.append(jsx_content[i])
        i += 1
        
    if current_text:
        text_str = "".join(current_text)
        stripped = text_str.strip()
        if stripped and re.search(r'[\u4e00-\u9fffac-zA-Z]', stripped):
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
            
    # Also translate alt and caption attributes inside this JSX block
    processed_jsx = "".join(output)
    
    attr_pattern = r'\b(alt|caption)="([^"]*[a-zA-Z][^"]*)"'
    def replace_attr(match):
        attr_name = match.group(1)
        attr_val = match.group(2)
        # Avoid double-bracing or replacing t(...)
        if attr_val.startswith("{t(") or attr_val.startswith("t("):
            return match.group(0)
        key = f"{attr_name}_{slugify(attr_val)}"
        translations[key] = attr_val
        return f"{attr_name}={{t('seoPages.pages.{page_key}.{key}')}}"
        
    processed_jsx = re.sub(attr_pattern, replace_attr, processed_jsx)
    
    return processed_jsx

def move_gallery_inside_component(content):
    # Find the gallery array declaration
    match = re.search(r'const\s+(\w+Gallery)\s*=\s*\[', content)
    if not match:
        return content
        
    start_idx = match.start()
    open_bracket_idx = match.end() - 1
    
    # Find matching closing bracket
    close_bracket_idx = -1
    bracket_count = 1
    in_quote = None
    i = open_bracket_idx + 1
    n = len(content)
    while i < n:
        char = content[i]
        if in_quote:
            if char == '\\':
                i += 2
                continue
            if char == in_quote:
                in_quote = None
            i += 1
            continue
        if char in ['"', "'", '`']:
            in_quote = char
            i += 1
            continue
        if char == '[':
            bracket_count += 1
        elif char == ']':
            bracket_count -= 1
            if bracket_count == 0:
                close_bracket_idx = i
                break
        i += 1
        
    if close_bracket_idx == -1:
        return content
        
    gallery_decl = content[start_idx : close_bracket_idx + 1]
    # Remove from original position
    content = content[:start_idx] + content[close_bracket_idx + 1:]
    
    # Find where the main component starts and insert it inside the component function block
    # Locate where t is defined
    t_match = re.search(r'const\s*\{\s*t\s*\}\s*=\s*useTranslation\(\s*\)', content)
    if t_match:
        insert_idx = t_match.end()
        content = content[:insert_idx] + "\n\n  " + gallery_decl + "\n" + content[insert_idx:]
    else:
        # If t is not there yet, find the start of the component function and insert there
        comp_match = re.search(r'const\s+([A-Z]\w+)\s*:\s*React\.FC(\s*<[^>]+>)?\s*=\s*(?:\([^)]*\))?\s*=>\s*\{', content)
        if comp_match:
            insert_idx = comp_match.end()
            content = content[:insert_idx] + "\n  " + gallery_decl + "\n" + content[insert_idx:]
        else:
            func_match = re.search(r'export\s+default\s+function\s+(\w+)\s*\([^)]*\)\s*\{', content)
            if func_match:
                insert_idx = func_match.end()
                content = content[:insert_idx] + "\n  " + gallery_decl + "\n" + content[insert_idx:]
                
    return content

def process_file_content(content, page_key):
    translations = {}
    
    # 1. Add import statement at the top if useTranslation is missing
    if 'useTranslation' not in content:
        react_match = re.search(r"import React(, \{[^}]+\})? from 'react'", content)
        if react_match:
            content = content[:react_match.end()] + "\nimport { useTranslation } from 'react-i18next'" + content[react_match.end():]
        else:
            content = "import { useTranslation } from 'react-i18next'\n" + content

    # 2. Add const { t } = useTranslation() inside the component
    comp_match = re.search(r'const\s+([A-Z]\w+)\s*:\s*React\.FC(\s*<[^>]+>)?\s*=\s*(?:\([^)]*\))?\s*=>\s*\{', content)
    if comp_match:
        matches = list(re.finditer(r'const\s+([A-Z]\w+)\s*:\s*React\.FC(\s*<[^>]+>)?\s*=\s*(?:\([^)]*\))?\s*=>\s*\{', content))
        main_match = None
        for m in matches:
            if m.group(1).endswith('Page'):
                main_match = m
                break
        if not main_match and matches:
            main_match = matches[-1]
            
        if main_match:
            insert_idx = main_match.end()
            if 'const { t } = useTranslation()' not in content[main_match.start():main_match.start()+200]:
                content = content[:insert_idx] + "\n  const { t } = useTranslation()\n" + content[insert_idx:]
    else:
        func_match = re.search(r'export\s+default\s+function\s+(\w+)\s*\([^)]*\)\s*\{', content)
        if func_match:
            insert_idx = func_match.end()
            if 'const { t } = useTranslation()' not in content[func_match.start():func_match.start()+200]:
                content = content[:insert_idx] + "\n  const { t } = useTranslation()\n" + content[insert_idx:]

    # Move gallery array inside so it has access to t()
    content = move_gallery_inside_component(content)

    # 3. Extract and replace content blocks: content: ( ... )
    content_matches = list(re.finditer(r'\bcontent:\s*\(', content))
    # We must process matches from end to start to avoid shifting indices
    for m in reversed(content_matches):
        start_idx = m.end() - 1 # starts at (
        end_idx = extract_balanced_parentheses(content, start_idx)
        if end_idx != -1:
            jsx_block = content[start_idx + 1 : end_idx]
            # Process JSX block
            processed_jsx = scan_jsx_text_nodes(jsx_block, page_key, translations)
            # Replace in content
            content = content[:start_idx + 1] + processed_jsx + content[end_idx:]

    # 4. Extract and replace object properties inside variables (like title: "...")
    # Matches keys like title: "...", question: "...", answer: "...", desc: "...", description: "..."
    # Robust matching of escaped quotes: (["'])((?:\\.|(?!\2).)*)\2
    prop_pattern = r'\b(title|titleCn|question|answer|description|desc|heroSubtitle|introSummary|ctaTitle|ctaDescription|ctaButtonText|achievePackText|metaDescription)\s*:\s*(["\'])((?:\\.|(?!\2).)*)\2'
    
    def replace_prop(match):
        prop_name = match.group(1)
        quote_char = match.group(2)
        prop_val_raw = match.group(3)
        # Unescape for JSON
        prop_val = prop_val_raw.replace("\\'", "'").replace('\\"', '"')
        
        # Skip if already translated or contains JavaScript/HTML tags/etc.
        if prop_val.startswith("t(") or prop_val.startswith("{t(") or not re.search(r'[\u4e00-\u9fffac-zA-Z]', prop_val):
            return match.group(0)
        
        # Skip if it's a URL or image path
        if prop_val.startswith('/') or prop_val.startswith('http'):
            return match.group(0)
            
        # Generate key
        if prop_name in ['question', 'answer', 'title', 'titleCn', 'desc', 'description']:
            key = f"{prop_name}_{slugify(prop_val)}"
        else:
            key = prop_name
            
        translations[key] = prop_val
        return f"{prop_name}: t('seoPages.pages.{page_key}.{key}')"
        
    content = re.sub(prop_pattern, replace_prop, content)

    # 5. Extract and replace JSX attributes inside components (like title="...")
    attr_pattern = r'\b(title|description|heroTitle|heroSubtitle|introSummary|ctaTitle|ctaDescription|ctaButtonText|achievePackText|metaDescription|alt|caption)="([^"]*[a-zA-Z][^"]*)"'
    
    def replace_attr(match):
        attr_name = match.group(1)
        attr_val = match.group(2)
        if attr_val.startswith("t(") or attr_val.startswith("{t(") or attr_val.startswith('/') or attr_val.startswith('http'):
            return match.group(0)
            
        # Generate key
        if attr_name in ['alt', 'caption', 'title']:
            key = f"{attr_name}_{slugify(attr_val)}"
        else:
            key = attr_name
            
        translations[key] = attr_val
        return f"{attr_name}={{t('seoPages.pages.{page_key}.{key}')}}"
        
    content = re.sub(attr_pattern, replace_attr, content)

    # 6. Translate Helmet tags inside return statements
    # (meta description, keywords, title)
    desc_pattern = r'<meta\s+name="description"\s+content="([^"]*)"'
    def replace_desc(match):
        desc_val = match.group(1)
        if desc_val.startswith("{t(") or desc_val.startswith("t("):
            return match.group(0)
        translations['metaDescription'] = desc_val
        return f'<meta name="description" content={{t(\'seoPages.pages.{page_key}.metaDescription\')}}'
    content = re.sub(desc_pattern, replace_desc, content)
    
    keywords_pattern = r'<meta\s+name="keywords"\s+content="([^"]*)"'
    def replace_keywords(match):
        keywords_val = match.group(1)
        if keywords_val.startswith("{t(") or keywords_val.startswith("t("):
            return match.group(0)
        translations['metaKeywords'] = keywords_val
        return f'<meta name="keywords" content={{t(\'seoPages.pages.{page_key}.metaKeywords\')}}'
    content = re.sub(keywords_pattern, replace_keywords, content)
    
    title_pattern = r'<title>(.*?)</title>'
    def replace_title(match):
        title_val = match.group(1)
        if title_val.startswith("{t(") or title_val.startswith("t("):
            return match.group(0)
        translations['metaTitle'] = title_val
        return f"<title>{{t('seoPages.pages.{page_key}.metaTitle')}}</title>"
    content = re.sub(title_pattern, replace_title, content)

    return content, translations

if __name__ == "__main__":
    if len(sys.argv) < 3:
        print("Usage: python localize_functions.py <file_path> <page_key>")
        sys.exit(1)
        
    file_path = sys.argv[1]
    page_key = sys.argv[2]
    
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
        
    new_content, trans = process_file_content(content, page_key)
    
    # Save localized content
    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(new_content)
        
    print(f"Refactored {file_path} successfully!")
    print("Extracted translations:")
    print(json.dumps(trans, indent=2))
