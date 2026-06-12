import re

file_path = "/Users/ryanmacmini/Desktop/1 App i made/Master Achieve Pack/achieve pack website/achieve-pack/src/pages/PouchDielineCreatorPage.tsx"

with open(file_path, "r", encoding="utf-8") as f:
    code = f.read()

stack = [] # stack for braces/parentheses
state_stack = ['CODE'] # stack of states: 'CODE', 'JSX_TAG', 'JSX_TEXT', 'STRING', 'COMMENT_LINE', 'COMMENT_MULTI'
string_char = None # '"', "'", or '`'

i = 0
n = len(code)

def get_line_col(pos):
    lines = code[:pos].split('\n')
    return len(lines), len(lines[-1]) + 1

while i < n:
    char = code[i]
    next_char = code[i+1] if i + 1 < n else ''
    prev_char = code[i-1] if i > 0 else ''
    
    current_state = state_stack[-1]
    
    # Escape sequence inside string
    if current_state == 'STRING' and char == '\\':
        i += 2
        continue
        
    if current_state == 'COMMENT_LINE':
        if char == '\n':
            state_stack.pop()
        i += 1
        continue
        
    if current_state == 'COMMENT_MULTI':
        if char == '*' and next_char == '/':
            state_stack.pop()
            i += 2
        else:
            i += 1
        continue
        
    if current_state == 'STRING':
        if char == string_char:
            state_stack.pop()
            string_char = None
            i += 1
        elif string_char == '`' and char == '$' and next_char == '{':
            # Template literal expression
            state_stack.append('CODE')
            stack.append(('{', *get_line_col(i+1)))
            i += 2
        else:
            i += 1
        continue

    # If we are in JSX tag or JSX text
    if current_state == 'JSX_TAG':
        if char == '"' or char == "'":
            state_stack.append('STRING')
            string_char = char
            i += 1
        elif char == '{':
            state_stack.append('CODE')
            stack.append(('{', *get_line_col(i)))
            i += 1
        elif char == '>':
            state_stack.pop()
            state_stack.append('JSX_TEXT')
            i += 1
        else:
            i += 1
        continue
        
    if current_state == 'JSX_TEXT':
        if char == '<':
            state_stack.pop()
            state_stack.append('JSX_TAG')
            i += 1
        elif char == '{':
            state_stack.append('CODE')
            stack.append(('{', *get_line_col(i)))
            i += 1
        else:
            # Ignore parenthesis/braces in JSX text!
            i += 1
        continue

    # CODE state
    if current_state == 'CODE':
        if char == '/' and next_char == '/':
            state_stack.append('COMMENT_LINE')
            i += 2
            continue
        elif char == '/' and next_char == '*':
            state_stack.append('COMMENT_MULTI')
            i += 2
            continue
        elif char in ('"', "'", '`'):
            state_stack.append('STRING')
            string_char = char
            i += 1
            continue
        elif char == '<' and (next_char.isalpha() or next_char == '/' or next_char == '>'):
            # Start of JSX tag
            state_stack.append('JSX_TAG')
            i += 1
            continue
        
        # Check braces/parentheses
        if char in ('{', '(', '['):
            stack.append((char, *get_line_col(i)))
        elif char in ('}', ')', ']'):
            if not stack:
                line, col = get_line_col(i)
                print(f"Extra closing '{char}' at line {line}, col {col}")
            else:
                last_char, last_line, last_col = stack.pop()
                matches = (
                    (last_char == '{' and char == '}') or
                    (last_char == '(' and char == ')') or
                    (last_char == '[' and char == ']')
                )
                if not matches:
                    line, col = get_line_col(i)
                    print(f"Mismatch: closed '{char}' at line {line}, col {col} (expected match for '{last_char}' from line {last_line}, col {last_col})")
                    stack.append((last_char, last_line, last_col)) # put it back
                
                # If we just popped a brace '{' and it matches the expression wrapper
                if char == '}' and len(state_stack) > 1 and state_stack[-1] == 'CODE':
                    # This could be the end of expression in JSX text, JSX tag, or Template literal
                    state_stack.pop()
        
        i += 1

print("\n--- Summary ---")
print(f"Remaining stack size: {len(stack)}")
for char, line, col in stack:
    print(f"Unclosed '{char}' at line {line}, col {col}")
print(f"State stack: {state_stack}")
