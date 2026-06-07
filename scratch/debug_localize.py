import re

# We will read SnacksFoodPage.tsx
with open('src/pages/industry/SnacksFoodPage.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

def slugify(text):
    text = re.sub(r'<[^>]+>', '', text)
    text = re.sub(r'[^a-zA-Z0-9\s]', '', text)
    text = text.replace('’', '').replace("'", "")
    words = text.strip().split()
    if not words:
        return 'text'
    return words[0].lower() + ''.join(w.capitalize() for w in words[1:5])

sections_match = re.search(r'const\s+sections\s*=\s*\[(.*?)\]\s*(?=const|return)', content, re.DOTALL)
if sections_match:
    sections_block = sections_match.group(1)
    original_sections_block = sections_block
    
    matches = re.finditer(r'>([^<>{}\n\t]+)<', sections_block)
    
    replacements = []
    for m in matches:
        text = m.group(1).strip()
        if text and re.search(r'[a-zA-Z]', text) and not text.startswith('{') and not text.endswith('}'):
            replacements.append(m.group(1))
            
    replacements = sorted(list(set(replacements)), key=len, reverse=True)
    
    for text in replacements:
        stripped = text.strip()
        clean_text = stripped.replace('&nbsp;', ' ').replace('&amp;', '&')
        key = slugify(clean_text)
        
        leading = text[:len(text)-len(text.lstrip())]
        trailing = text[len(text)-len(text.rstrip())] if len(text) > len(text.rstrip()) else ""
        
        target = ">" + text + "<"
        replacement = ">" + leading + "{t(`${p}." + key + "`)}" + trailing + "<"
        
        if "Soggy" in text or "moisture vapor" in text:
            print(f"Text: {repr(text)}")
            print(f"Target: {repr(target)}")
            print(f"Replacement: {repr(replacement)}")
            print(f"Is target in sections_block before replace? {target in sections_block}")
            
        sections_block = sections_block.replace(target, replacement)
        
        if "Soggy" in text or "moisture vapor" in text:
            print(f"Is target in sections_block after replace? {target in sections_block}")
            print("---")
