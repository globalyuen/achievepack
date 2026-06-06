import subprocess
import json
import os

commits = ["28f7ba72", "56c28f62", "8b1d18d0"]
files = set()

for c in commits:
    try:
        res = subprocess.run(
            ["git", "show", "--name-only", c],
            stdout=subprocess.PIPE,
            stderr=subprocess.PIPE,
            text=True,
            check=True
        )
        for line in res.stdout.splitlines():
            line = line.strip()
            if line.startswith("public/imgs/infographics/") and line.endswith(".png"):
                files.add(os.path.basename(line))
    except Exception as e:
        print(f"Error checking commit {c}: {e}")

print(f"Found {len(files)} unique xAI infographic files in git history.")

# Now, we want to load prompts from missing_infographics.json and actual_missing_infographics.json
missing_path = "/Users/ryanmacmini/.gemini/antigravity/scratch/missing_infographics.json"
actual_path = "/Users/ryanmacmini/Desktop/1 App i made/Master Achieve Pack/achieve pack website/achieve-pack/scratch/actual_missing_infographics.json"

prompts_map = {}

for path in [missing_path, actual_path]:
    if os.path.exists(path):
        with open(path, "r", encoding="utf-8") as f:
            items = json.load(f)
            for item in items:
                prompts_map[item["filename"]] = item

# Build final generation list
generation_list = []
missing_prompts = []

for filename in sorted(list(files)):
    if filename in prompts_map:
        generation_list.append(prompts_map[filename])
    else:
        # Fallback to general prompt format if not in spec JSONs
        missing_prompts.append(filename)

print(f"Mapped {len(generation_list)} files to their original prompt spec.")
if missing_prompts:
    print(f"Could not find prompts for {len(missing_prompts)} files: {missing_prompts[:5]}...")

# Save merged list
out_path = "/Users/ryanmacmini/Desktop/1 App i made/Master Achieve Pack/achieve pack website/achieve-pack/scratch/xai_generated_to_replace.json"
with open(out_path, "w", encoding="utf-8") as f:
    json.dump(generation_list, f, indent=2)
print(f"Saved merged generation list to {out_path}")
