import os
import re

src_dir = "/Users/ryanmacmini/Desktop/1 App i made/Master Achieve Pack/achieve pack website/achieve-pack/src"

for root, _, files in os.walk(src_dir):
    for file in files:
        if file.endswith(".tsx") or file.endswith(".ts"):
            filepath = os.path.join(root, file)
            with open(filepath, "r", encoding="utf-8") as f:
                content = f.read()

            def repl(match):
                tag_content = match.group(1)
                # Remove existing muted, muted={true}, muted={false}
                tag_content = re.sub(r'\bmuted(?:=\{[^}]+\})?', '', tag_content)
                # Add muted={true}
                return f'<video muted={{true}}{tag_content}>'

            new_content = re.sub(r'<video([^>]*?)>', repl, content)

            if new_content != content:
                with open(filepath, "w", encoding="utf-8") as f:
                    f.write(new_content)
                print(f"Updated {filepath}")

print("Done muting all videos.")
