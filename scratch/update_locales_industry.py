import re
import json
import os
import sys

# Define the pages to localize
PAGES = {
    'babyFood': 'src/pages/industry/BabyFoodPage.tsx',
    'coffeeTea': 'src/pages/industry/CoffeeTeaPage.tsx',
    'frozenFood': 'src/pages/industry/FrozenFoodPage.tsx',
    'petFood': 'src/pages/industry/PetFoodPage.tsx',
    'snacksFood': 'src/pages/industry/SnacksFoodPage.tsx',
    'supplementsPowders': 'src/pages/industry/SupplementsPowdersPage.tsx',
    'saucesCondiments': 'src/pages/industry/SaucesCondimentsPage.tsx',
}

EN_JSON_PATH = 'src/locales/en.json'

def slugify(text):
    # Strip HTML tags
    text = re.sub(r'<[^>]+>', '', text)
    # Remove non-alphanumeric characters
    text = re.sub(r'[^a-zA-Z0-9\s]', '', text)
    # Convert curly quotes/apostrophes
    text = text.replace('’', '').replace("'", "")
    words = text.strip().split()
    if not words:
        return 'text'
    # camelCase of first 5 words
    return words[0].lower() + ''.join(w.capitalize() for w in words[1:5])

def localize_file(file_path, page_key):
    print(f"\n--- Localizing {file_path} (key: {page_key}) ---")
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()

    trans = {}

    # Ensure useTranslation is imported
    if 'useTranslation' not in content:
        react_match = re.search(r"import React(, \{[^}]+\})? from 'react'", content)
        if react_match:
            content = content[:react_match.end()] + "\nimport { useTranslation } from 'react-i18next';" + content[react_match.end():]
        else:
            content = "import { useTranslation } from 'react-i18next';\n" + content

    # Add const { t } = useTranslation() and const p = 'seoPages.pages.<page_key>'
    # Match the main component declaration
    comp_match = re.search(r'const\s+' + page_key[0].upper() + page_key[1:] + r'Page\s*:\s*React\.FC(\s*<[^>]+>)?\s*=\s*(?:\([^)]*\))?\s*=>\s*\{', content, re.IGNORECASE)
    if not comp_match:
        # Fallback if case doesn't match perfectly
        comp_match = re.search(r'const\s+(\w+Page)\s*:\s*React\.FC(\s*<[^>]+>)?\s*=\s*(?:\([^)]*\))?\s*=>\s*\{', content)
        
    if comp_match:
        insert_idx = comp_match.end()
        # Check if t and p are already defined
        has_t = 'const { t } = useTranslation()' in content
        has_p = f"const p = 'seoPages.pages.{page_key}'" in content
        
        insert_str = ""
        if not has_t:
            insert_str += "\n  const { t } = useTranslation();"
        if not has_p:
            insert_str += f"\n  const p = 'seoPages.pages.{page_key}';"
            
        if insert_str:
            content = content[:insert_idx] + insert_str + content[insert_idx:]

    # Let's extract and replace:
    # 1. Helmet meta fields
    # Helmet title
    def replace_helmet_title(m):
        val = m.group(1).strip()
        trans['metaTitle'] = val
        return "<title>{t(`${p}.metaTitle`)}</title>"
    content = re.sub(r'<title>(.*?)</title>', replace_helmet_title, content)

    # Helmet meta description
    def replace_helmet_desc(m):
        attr_name = m.group(1)
        prop_val = m.group(2)
        val = m.group(3).strip()
        trans['metaDescription'] = val
        return '<meta ' + attr_name + '="' + prop_val + '" content={t(`${p}.metaDescription`)}'
    content = re.sub(r'<meta\s+(name|property)="(description|og:description)"\s+content="([^"]*)"', replace_helmet_desc, content)

    # Helmet meta keywords
    def replace_helmet_keywords(m):
        val = m.group(1).strip()
        trans['metaKeywords'] = val
        return '<meta name="keywords" content={t(`${p}.metaKeywords`)}'
    content = re.sub(r'<meta\s+name="keywords"\s+content="([^"]*)"', replace_helmet_keywords, content)

    # JSON-LD Schema product name & description
    def replace_schema_prop(m):
        prop = m.group(1)
        val = m.group(2).strip()
        key = "schema" + prop.capitalize()
        trans[key] = val
        return '"' + prop + '": t(`${p}.' + key + '`)'
    content = re.sub(r'"(name|description)":\s*"([^"]+)"(?=\s*,\s*"brand")', replace_schema_prop, content)
    content = re.sub(r'"(name|description)":\s*"([^"]+)"(?=\s*,\s*"acceptedAnswer")', replace_schema_prop, content)
    content = re.sub(r'"description":\s*"([^"]+)"(?=\s*,\s*"offers")', replace_schema_prop, content)

    # 2. SEOPageLayout properties
    # Since we want context-aware replacement, let's find the layout props and replace them
    layout_match = re.search(r'<SEOPageLayout\s+(.*?)\/>', content, re.DOTALL)
    if layout_match:
        layout_text = layout_match.group(1)
        original_layout_text = layout_text
        
        # Attributes to translate: title, description, heroTitle, heroSubtitle, introSummary, ctaTitle, ctaDescription, ctaButtonText
        attrs_to_translate = ['title', 'description', 'heroTitle', 'heroSubtitle', 'introSummary', 'ctaTitle', 'ctaDescription', 'ctaButtonText']
        
        for attr in attrs_to_translate:
            # Match attr="value"
            attr_match = re.search(attr + r'="([^"]*)"', layout_text)
            if attr_match:
                val = attr_match.group(1).strip()
                # If it's already translated, skip
                if val.startswith('{t('):
                    continue
                # Save key
                trans[attr] = val
                # Replace with translated key
                layout_text = layout_text.replace(attr + '="' + val + '"', attr + '={t(`${p}.' + attr + '`)}')
            
            # Match attr={t('...')} and update it to t(`${p}.attr`)
            attr_t_match = re.search(attr + r'=\{t\(\'seoPages\.pages\.' + page_key + r'\.([^)]+)\'\)\}', layout_text)
            if attr_t_match:
                key = attr_t_match.group(1)
                # Just replace with cleaner prefix pattern
                layout_text = layout_text.replace(attr_t_match.group(0), attr + '={t(`${p}.' + key + '`)}')

        content = content.replace(original_layout_text, layout_text)

    # 3. Replace JS Property values in arrays:
    # question: "..." or question: '...'
    # answer: "..." or answer: '...'
    # title: "..." or title: '...' (only inside JS objects, not HTML tags)
    # description: "..." or description: '...'
    # We will search for properties inside objects and replace them.
    # To do this safely without breaking properties like id: '...' or url: '...', we only match question, answer, title, description.
    # Handles nested quotes.
    def replace_js_property(m):
        prop = m.group(1)
        val = m.group(2) if m.group(2) is not None else m.group(3)
        # Skip if it's already a t() call
        if val.strip().startswith('t(') or val.strip().startswith('`t('):
            return m.group(0)
            
        key = prop + "_" + slugify(val)
        trans[key] = val
        return prop + ': t(`${p}.' + key + '`)'

    content = re.sub(r"\b(question|answer|title|description):\s*(?:\"((?:[^\"\\]|\\.)*)\"|'((?:[^'\\]|\\.)*)')", replace_js_property, content)

    # 4. Replace string arrays inside tables headers & rows:
    # Match tables = [ ... ] block
    tables_match = re.search(r'const\s+tables\s*=\s*\[(.*?)\]\s*(?=const|return)', content, re.DOTALL)
    if tables_match:
        tables_block = tables_match.group(0)
        original_tables_block = tables_block
        
        # Match string literals inside the tables block: e.g. "Oxygen Barrier (OTR)" or 'Oxygen Barrier (OTR)'
        # Avoid matching keys like headers: or rows:
        def replace_table_cell(m):
            val = m.group(1) if m.group(1) is not None else m.group(2)
            # Skip if it is already t()
            if val.strip().startswith('t('):
                return m.group(0)
            # Skip numbers or small symbols or units like N/A, Yes, No, 100 pcs, Low ($)
            if not re.search(r'[a-zA-Z]', val):
                return m.group(0)
            
            key = "table_" + slugify(val)
            trans[key] = val
            return 't(`${p}.' + key + '`)'

        # Replace double/single quoted strings in array context: e.g. ["Format", "Oxygen Barrier"]
        # Match strings not preceded by a colon
        tables_block = re.sub(r'(?<!:)\s*(?:\"((?:[^\"\\]|\\.)*)\"|\'((?:[^\'\\]|\\.)*)\')', replace_table_cell, tables_block)
        content = content.replace(original_tables_block, tables_block)

    # 5. Extract JSX text nodes in the sections block
    # We find sections block
    sections_match = re.search(r'const\s+sections\s*=\s*\[(.*?)\]\s*(?=const|return)', content, re.DOTALL)
    if sections_match:
        sections_block = sections_match.group(1)
        original_sections_block = sections_block
        
        # Find JSX text node candidates: text between > and <
        # e.g., >Some text<
        # We find them and replace them.
        # To avoid replacing markup or empty whitespace, we filter matches.
        matches = re.finditer(r'>([^<>{}\n\t]+)<', sections_block)
        
        # We will do replacement from longest to shortest to avoid substring collision
        replacements = []
        for m in matches:
            text = m.group(1).strip()
            # Must contain letters, and not be a brace expression
            if text and re.search(r'[a-zA-Z]', text) and not text.startswith('{') and not text.endswith('}'):
                replacements.append(m.group(1))
                
        # Sort replacements by length in descending order
        replacements = sorted(list(set(replacements)), key=len, reverse=True)
        
        for text in replacements:
            stripped = text.strip()
            # Clean up XML entities
            clean_text = stripped.replace('&nbsp;', ' ').replace('&amp;', '&')
            key = slugify(clean_text)
            
            # Avoid duplicate keys with different text
            orig_key = key
            idx = 1
            while key in trans and trans[key] != clean_text:
                key = orig_key + str(idx)
                idx += 1
                
            trans[key] = clean_text
            
            # We must replace it exactly. Since it's inside JSX, we wrap in curly braces: {t(`${p}.key`)}
            # But wait, what if the text has leading/trailing whitespace? We should preserve it!
            leading = text[:len(text)-len(text.lstrip())]
            trailing = text[len(text.rstrip()):]
            
            target = ">" + text + "<"
            replacement = ">" + leading + "{t(`${p}." + key + "`)}" + trailing + "<"
            sections_block = sections_block.replace(target, replacement)
            
        content = content.replace(original_sections_block, sections_block)

    return content, trans

def main():
    # Load en.json
    if not os.path.exists(EN_JSON_PATH):
        print(f"Error: {EN_JSON_PATH} not found!")
        sys.exit(1)
        
    with open(EN_JSON_PATH, 'r', encoding='utf-8') as f:
        en_data = json.load(f)
        
    if 'seoPages' not in en_data:
        en_data['seoPages'] = {}
    if 'pages' not in en_data['seoPages']:
        en_data['seoPages']['pages'] = {}
        
    pages_translations = en_data['seoPages']['pages']
    
    for page_key, file_path in PAGES.items():
        if not os.path.exists(file_path):
            print(f"Skipping {file_path} - not found.")
            continue
            
        new_content, page_trans = localize_file(file_path, page_key)
        
        # Write back localized file
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(new_content)
        print(f"Successfully wrote localized file: {file_path}")
        
        # Merge translations
        if page_key not in pages_translations:
            pages_translations[page_key] = {}
            
        merged_dict = pages_translations[page_key]
        added = 0
        updated = 0
        for k, v in page_trans.items():
            if k not in merged_dict:
                merged_dict[k] = v
                added += 1
            elif merged_dict[k] != v:
                # Update if different, to ensure it matches the actual page text
                merged_dict[k] = v
                updated += 1
                
        print(f"Merged translations for {page_key}: added {added}, updated {updated}")

    # Write back en.json
    with open(EN_JSON_PATH, 'w', encoding='utf-8') as f:
        json.dump(en_data, f, ensure_ascii=False, indent=4)
    print(f"\nSuccessfully updated {EN_JSON_PATH}!")

if __name__ == '__main__':
    main()
