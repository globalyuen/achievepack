import re

file_path = "/Users/ryanmacmini/Desktop/1 App i made/Master Achieve Pack/achieve pack website/achieve-pack/src/pages/PouchDielineCreatorPage.tsx"

with open(file_path, "r", encoding="utf-8") as f:
    lines = f.readlines()

# Let's count parentheses and braces but we will ignore any quotes that are inside comments.
# Also, we will print the balance of parentheses and braces for each block of code.
# Let's trace the open/close braces line by line.
open_braces = [] # stack of (char, line_num)

for idx, line in enumerate(lines):
    line_num = idx + 1
    # Strip comments
    line = re.sub(r'//.*', '', line)
    # Strip string literals roughly (both single and double quotes)
    # We replace strings with empty space to avoid getting confused by contractions in comments/text
    line = re.sub(r'"[^"]*"', '""', line)
    line = re.sub(r"'[^']*'", "''", line)
    
    # We do a character-by-character scan on this cleaned line
    for char in line:
        if char in ('{', '('):
            open_braces.append((char, line_num))
        elif char in ('}', ')'):
            if not open_braces:
                print(f"Extra closing '{char}' on line {line_num}")
                continue
            last_char, last_line = open_braces.pop()
            if (last_char == '{' and char != '}') or (last_char == '(' and char != ')'):
                print(f"Mismatch on line {line_num}: closed '{char}', expected match for '{last_char}' from line {last_line}")
                # Put it back
                open_braces.append((last_char, last_line))

print(f"End of file. Remaining stack size: {len(open_braces)}")
for char, line in open_braces:
    print(f"Unclosed '{char}' from line {line}")
