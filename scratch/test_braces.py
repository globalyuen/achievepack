import re

with open('src/pages/composting/CompostServiceFinderPage.tsx', 'r') as f:
    content = f.read()

n = len(content)
i = 0
while i < n:
    match = re.match(r'\breturn\s*\(', content[i:])
    if match:
        start_idx = i + match.end()
        i += match.end()
        print(f'\nFound return at index {start_idx}, line {content[:start_idx].count("\n") + 1}')
        in_brace = 0
        js_quote_char = None
        
        while i < n:
            char = content[i]
            
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
                print(f"Brace Open: {in_brace} at line {content[:i].count('\n') + 1}")
            elif char == '}':
                in_brace -= 1
                print(f"Brace Close: {in_brace} at line {content[:i].count('\n') + 1}")
                
            i += 1
    else:
        i += 1
