import os

file_path = "/Users/ryanmacmini/Desktop/1 App i made/Master Achieve Pack/achieve pack website/achieve-pack/src/pages/PouchDielineCreatorPage.tsx"

with open(file_path, "r", encoding="utf-8") as f:
    code = f.read()

# Tokenizer state
stack = []
i = 0
n = len(code)

def get_line_col(pos):
    lines = code[:pos].split('\n')
    return len(lines), len(lines[-1]) + 1

# Stack of string/comment states:
# 'COMMENT_LINE', 'COMMENT_MULTI', 'STR_DOUBLE', 'STR_SINGLE', 'STR_BACKTICK'
# For backticks, we also need to keep track of nested JS expressions inside `${ ... }`
state_stack = []

while i < n:
    char = code[i]
    next_char = code[i+1] if i + 1 < n else ''
    prev_char = code[i-1] if i > 0 else ''
    
    # Handle line comments
    if state_stack and state_stack[-1] == 'COMMENT_LINE':
        if char == '\n':
            state_stack.pop()
        i += 1
        continue
        
    # Handle multi-line comments
    if state_stack and state_stack[-1] == 'COMMENT_MULTI':
        if char == '*' and next_char == '/':
            state_stack.pop()
            i += 2
        else:
            i += 1
        continue

    # Handle JSX comments (treat as multi-line comments since they start with {/* and end with */})
    # Actually, JSX comments are parsed as expression { /* comment */ }
    # So the brace '{' is pushed, then /* starts comment, then */ ends comment, then '}' closes expression.
    
    # Handle strings
    if state_stack and state_stack[-1] == 'STR_DOUBLE':
        if char == '"' and prev_char != '\\':
            state_stack.pop()
        i += 1
        continue
    if state_stack and state_stack[-1] == 'STR_SINGLE':
        if char == "'" and prev_char != '\\':
            state_stack.pop()
        i += 1
        continue
    if state_stack and state_stack[-1] == 'STR_BACKTICK':
        if char == '`' and prev_char != '\\':
            state_stack.pop()
            i += 1
        elif char == '$' and next_char == '{' and prev_char != '\\':
            # Start of expression inside template literal
            state_stack.append('BACKTICK_EXPR')
            stack.append(('{', *get_line_col(i+1)))
            i += 2
        else:
            i += 1
        continue
    
    # Handle JS expressions inside template literals
    # We are in JS mode inside backticks, but if we see '}', it might end the backtick expression if it matches the '${' opening
    if state_stack and state_stack[-1] == 'BACKTICK_EXPR':
        # In this mode, we check for braces.
        # If we see a '}', we need to check if it closes the BACKTICK_EXPR.
        pass

    # Start comments/strings/braces in normal JS/TS code
    if char == '/' and next_char == '/':
        state_stack.append('COMMENT_LINE')
        i += 2
        continue
    if char == '/' and next_char == '*':
        state_stack.append('COMMENT_MULTI')
        i += 2
        continue
    if char == '"':
        state_stack.append('STR_DOUBLE')
        i += 1
        continue
    if char == "'":
        state_stack.append('STR_SINGLE')
        i += 1
        continue
    if char == '`':
        state_stack.append('STR_BACKTICK')
        i += 1
        continue
        
    # Check braces, parentheses, brackets
    if char in ('{', '(', '['):
        stack.append((char, *get_line_col(i)))
    elif char in ('}', ')', ']'):
        if not stack:
            line, col = get_line_col(i)
            print(f"Extra closing character '{char}' at line {line}, col {col}")
        else:
            last_char, last_line, last_col = stack.pop()
            matches = (
                (last_char == '{' and char == '}') or
                (last_char == '(' and char == ')') or
                (last_char == '[' and char == ']')
            )
            if not matches:
                line, col = get_line_col(i)
                print(f"Mismatched closing character '{char}' at line {line}, col {col} (expected match for '{last_char}' from line {last_line}, col {last_col})")
                # Put it back to try to keep going
                stack.append((last_char, last_line, last_col))
                
            # If we just closed a '{' and our current state is BACKTICK_EXPR, check if it closed the BACKTICK_EXPR
            if char == '}' and state_stack and state_stack[-1] == 'BACKTICK_EXPR':
                # Check if the opening '{' we popped was the one that started BACKTICK_EXPR.
                # In template literals, the opening is '${'.
                # Let's see if this was indeed matching.
                # For simplicity, we just pop 'BACKTICK_EXPR' since the brace balanced.
                state_stack.pop()
                
    i += 1

print("\n--- Summary ---")
print(f"Remaining stack size: {len(stack)}")
for char, line, col in stack:
    print(f"Unclosed '{char}' at line {line}, col {col}")
