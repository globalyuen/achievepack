with open("/Users/ryanmacmini/Desktop/1 App i made/Master Achieve Pack/achieve pack website/achieve-pack/scratch/diff.txt", "r") as f:
    diff_lines = f.readlines()

current_file = ""
hunk_header = ""

for line in diff_lines:
    if line.startswith("+++ b/"):
        current_file = line.strip()[6:]
    elif line.startswith("@@"):
        hunk_header = line.strip()
        print(f"\n{current_file} {hunk_header}")
    elif line.startswith("+") and not line.startswith("+++"):
        print(f"  + {line[1:].strip()}")
    elif line.startswith("-") and not line.startswith("---"):
        print(f"  - {line[1:].strip()}")
