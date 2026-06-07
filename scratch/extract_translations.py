import re
import json
import os
import sys

def slugify(text):
    text = re.sub(r'<[^>]+>', '', text)
    text = re.sub(r'[^a-zA-Z0-9\s]', '', text)
    words = text.strip().split()
    if not words:
        return 'text'
    return words[0].lower() + ''.join(w.capitalize() for w in words[1:5])

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

def extract_and_replace(file_path, page_key):
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()

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

    # 3. Process return blocks
    blocks = find_return_blocks(content)
    if not blocks:
        print("No return blocks found!")
        return content, {}
        
    main_comp_start = 0
    if comp_match:
        main_matches = list(re.finditer(r'const\s+([A-Z]\w+)\s*:\s*React\.FC(\s*<[^>]+>)?\s*=\s*(?:\([^)]*\))?\s*=>\s*\{', content))
        for m in main_matches:
            if m.group(1).endswith('Page'):
                main_comp_start = m.start()
                break
    else:
        func_match = re.search(r'export\s+default\s+function\s+(\w+)\s*\([^)]*\)\s*\{', content)
        if func_match:
            main_comp_start = func_match.start()
            
    filtered_blocks = [b for b in blocks if b[0] >= main_comp_start]
    if not filtered_blocks:
        filtered_blocks = blocks
        
    new_content_parts = []
    last_idx = 0
    
    for start, end in filtered_blocks:
        new_content_parts.append(content[last_idx:start])
        block_text = content[start:end]
        
        # Translate alt and caption attributes inside this block
        attr_pattern = r'\b(alt|caption)="([^"]*[a-zA-Z][^"]*)"'
        def replace_attr(match):
            attr_name = match.group(1)
            attr_val = match.group(2)
            key = f"{attr_name}_{slugify(attr_val)}"
            translations[key] = attr_val
            return f"{attr_name}={{t('seoPages.pages.{page_key}.{key}')}}"
        
        block_text = re.sub(attr_pattern, replace_attr, block_text)
        
        # Translate Helmet meta description
        desc_pattern = r'<meta\s+name="description"\s+content="([^"]*)"'
        def replace_desc(match):
            desc_val = match.group(1)
            translations['metaDescription'] = desc_val
            return f'<meta name="description" content={{t(\'seoPages.pages.{page_key}.metaDescription\')}}'
        block_text = re.sub(desc_pattern, replace_desc, block_text)
        
        # Translate Helmet meta keywords
        keywords_pattern = r'<meta\s+name="keywords"\s+content="([^"]*)"'
        def replace_keywords(match):
            keywords_val = match.group(1)
            translations['metaKeywords'] = keywords_val
            return f'<meta name="keywords" content={{t(\'seoPages.pages.{page_key}.metaKeywords\')}}'
        block_text = re.sub(keywords_pattern, replace_keywords, block_text)
        
        # Translate Helmet title
        title_pattern = r'<title>(.*?)</title>'
        def replace_title(match):
            title_val = match.group(1)
            translations['metaTitle'] = title_val
            return f"<title>{{t('seoPages.pages.{page_key}.metaTitle')}}</title>"
        block_text = re.sub(title_pattern, replace_title, block_text)

        # Now, scan JSX text character by character inside the block
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
                    if stripped and re.search(r'[a-zA-Z]', stripped) and not stripped.startswith('{') and not stripped.endswith('}'):
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
                        if stripped and re.search(r'[a-zA-Z]', stripped):
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
            
        new_content_parts.append("".join(output))
        last_idx = end
        
    new_content_parts.append(content[last_idx:])
    final_content = "".join(new_content_parts)
    
    return final_content, translations

if __name__ == '__main__':
    if len(sys.argv) < 3:
        print("Usage: python extract_translations.py <file_path> <page_key>")
        sys.exit(1)
        
    file_path = sys.argv[1]
    page_key = sys.argv[2]
    
    new_content, trans = extract_and_replace(file_path, page_key)
    print(json.dumps(trans, indent=2))
    
    out_path = file_path + ".localized"
    with open(out_path, 'w', encoding='utf-8') as f:
        f.write(new_content)
    print(f"Saved localized file to {out_path}")
