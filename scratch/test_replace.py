import re

text_block = '<li>• <strong>Soggy Texture:</strong> High moisture vapor transmission (WVTR) ruins snack crispness in weeks.</li>'

# Regex to find JSX text nodes
matches = re.finditer(r'>([^<>{}\n\t]+)<', text_block)

replacements = []
for m in matches:
    t = m.group(1).strip()
    if t and re.search(r'[a-zA-Z]', t):
        replacements.append(m.group(1))

print("Found replacements:", replacements)

replacements = sorted(list(set(replacements)), key=len, reverse=True)

for text in replacements:
    stripped = text.strip()
    key = stripped.replace(' ', '').replace(':', '').lower()
    
    leading = text[:len(text)-len(text.lstrip())]
    trailing = text[len(text)-len(text.rstrip())] if len(text) > len(text.rstrip()) else ""
    
    target = ">" + text + "<"
    replacement = ">" + leading + "{t(`${p}." + key + "`)}" + trailing + "<"
    print(f"Replacing target: {repr(target)} with replacement: {repr(replacement)}")
    text_block = text_block.replace(target, replacement)

print("Result:", text_block)
