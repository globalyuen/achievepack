import re

MAIN_TSX = "/Users/ryanmacmini/Desktop/1 App i made/Master Achieve Pack/achieve pack website/achieve-pack/src/main.tsx"

def fix_dupes():
    with open(MAIN_TSX, "r", encoding="utf-8") as f:
        content = f.read()

    new_content = []
    seen_vars = set()
    
    for line in content.split('\n'):
        m = re.match(r'^const\s+([A-Za-z0-9_]+)\s*=\s*lazyWithRetry', line.strip())
        if m:
            var_name = m.group(1)
            if var_name in seen_vars:
                continue # Skip this duplicate line
            seen_vars.add(var_name)
        new_content.append(line)
        
    with open(MAIN_TSX, "w", encoding="utf-8") as f:
        f.write('\n'.join(new_content))
        
    print("Fixed duplicates.")

if __name__ == "__main__":
    fix_dupes()
