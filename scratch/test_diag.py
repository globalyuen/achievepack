import os
import re

MATERIALS_DIR = "src/pages/pouch/materials"
files = [f for f in os.listdir(MATERIALS_DIR) if f.endswith(".tsx")]

print(f"Scanning {len(files)} files in {MATERIALS_DIR}...")

# Heuristics for finding hardcoded strings
# 1. JSX text: text between > and < that contains letters but no braces
jsx_text_pattern = re.compile(r'>\s*([^<{t]*[a-zA-Z][^<{t]*)\s*<')

# 2. Hardcoded attributes: e.g., alt="Some Text", title="Some Text", label="Some Text"
attr_pattern = re.compile(r'\b(alt|title|label|content|badge|color)="([^"{]*[a-zA-Z][^"{]*)"')

# 3. Hardcoded string literals in JS code (excluding classNames, tailwind classes, icons, routes)
# We look for strings in single/double quotes or backticks that have spaces and letters, or specific array patterns
string_lit_pattern = re.compile(r"(['\"`])([^'\"`]*\s+[^'\"`]*[a-zA-Z][^'\"`]*)\1")

for filename in sorted(files):
    filepath = os.path.join(MATERIALS_DIR, filename)
    with open(filepath, "r", encoding="utf-8") as f:
        content = f.read()
        
    print(f"\n--- {filename} ---")
    
    # We only care about the code inside the component/return block, and the static arrays before it.
    # Let's extract lines and print potential matches with line numbers
    lines = content.splitlines()
    for idx, line in enumerate(lines):
        line_num = idx + 1
        
        # Skip import lines, comments, SVGs, routing paths
        if line.strip().startswith("import") or line.strip().startswith("//"):
            continue
        if "className=" in line or "d=" in line or "viewBox=" in line or "href=" in line or "to=" in line:
            # Let's clean the line for check to avoid false positives on classNames
            cleaned_line = re.sub(r'className="[^"]*"', '', line)
            cleaned_line = re.sub(r'href="[^"]*"', '', cleaned_line)
            cleaned_line = re.sub(r'to="[^"]*"', '', cleaned_line)
        else:
            cleaned_line = line
            
        # 1. Check JSX text
        # Only check if it looks like it has JSX
        if "<" in cleaned_line or ">" in cleaned_line:
            matches = jsx_text_pattern.findall(cleaned_line)
            for m in matches:
                # Avoid false positives like css styling, JS logic, or {t(...)}
                m_strip = m.strip()
                if m_strip and not m_strip.startswith("{") and not m_strip.endswith("}") and not m_strip.startswith("/*"):
                    # Check if it has letters
                    if re.search(r'[a-zA-Z]', m_strip):
                        print(f"  [JSX Text] Line {line_num}: {m_strip!r}")
                        
        # 2. Check attributes
        matches = attr_pattern.findall(cleaned_line)
        for attr, val in matches:
            val_strip = val.strip()
            # Ignore color/badge if they are keys, but keep eye out
            if attr == "color" and val_strip in ["primary", "secondary", "magenta", "lime", "yellow", "black", "white", "bg-black text-white"]:
                continue
            if val_strip and not val_strip.startswith("seoPages."):
                print(f"  [Attr {attr}] Line {line_num}: {val_strip!r}")
                
        # 3. Check string literals in arrays (e.g. q: '...', a: '...', desc: '...', val: '...', name: '...')
        # We look for lines containing keys like q:, a:, desc:, title:, name:, val:, label: followed by string
        if any(k in cleaned_line for k in ["q:", "a:", "desc:", "title:", "name:", "val:", "label:", "use:", "shelf:", "barrier:"]):
            matches = string_lit_pattern.findall(cleaned_line)
            for quote, val in matches:
                val_strip = val.strip()
                if val_strip and not val_strip.startswith("seoPages."):
                    print(f"  [JS String] Line {line_num}: {val_strip!r}")
