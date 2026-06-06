import os
import json
import base64
import time
import requests

json_path = "/Users/ryanmacmini/Desktop/1 App i made/Master Achieve Pack/achieve pack website/achieve-pack/scratch/actual_missing_infographics.json"
public_dir = "/Users/ryanmacmini/Desktop/1 App i made/Master Achieve Pack/achieve pack website/achieve-pack/public/imgs/infographics"
api_key = os.getenv("XAI_API_KEY") or os.getenv("GROK_API_KEY") or "xai-OMbZiEBI..." # Read from env
if not api_key or api_key.startswith("xai-OMbZiEBI..."):
    # Attempt to load from .env file manually if env not set
    try:
        with open(".env", "r") as env_f:
            for line in env_f:
                if line.startswith("XAI_API_KEY="):
                    api_key = line.split("=", 1)[1].strip().strip('"').strip("'")
                    break
    except Exception:
        pass

url = "https://api.x.ai/v1/images/generations"

headers = {
    "Authorization": f"Bearer {api_key}",
    "Content-Type": "application/json"
}

if not os.path.exists(json_path):
    print("actual_missing_infographics.json not found!")
    exit(1)

with open(json_path, "r", encoding="utf-8") as f:
    items = json.load(f)

print(f"Total items in json spec to generate: {len(items)}")
os.makedirs(public_dir, exist_ok=True)

success_count = 0
fail_count = 0

for idx, item in enumerate(items):
    filename = item["filename"]
    target_path = os.path.join(public_dir, filename)
    enhanced_prompt = item.get("enhancedPrompt", "")
    
    # Extract core description
    if "diagram of " in enhanced_prompt:
        try:
            core_part = enhanced_prompt.split("diagram of ")[1]
            if ".. Flat" in core_part:
                core_description = core_part.split(".. Flat")[0]
            else:
                core_description = core_part
        except Exception:
            core_description = enhanced_prompt
    else:
        core_description = enhanced_prompt
        
    core_description = core_description.strip()
    if core_description.endswith('.'):
        core_description = core_description[:-1]
        
    # Construct final prompt aligned with achievepack branding, dark green theme, and eshop mockup
    final_prompt = (
        "Amazon product photo quality, premium e-commerce showcase. "
        f"{core_description}. "
        "Remake as a high-end product presentation with achievepack.com branding, shown from a different angle for e-shop. "
        "Add clean English text for easy understanding. Main visual: a sustainable pouch packaging. "
        "Style: dark green theme, nature-inspired design elements (leaves, plants, organic textures). "
        "Keep the exact product shape, texture, and technical details. "
        "Avoid using high contrast colors like red, yellow, etc. (strictly NO red). "
        "High detail, realistic materials, soft studio lighting."
    )
    
    print(f"[{idx+1}/{len(items)}] Filename: {filename}")
    print(f"  Prompt: {final_prompt[:120]}...")
    
    data = {
        "model": "grok-imagine-image",
        "prompt": final_prompt,
        "response_format": "b64_json"
    }
    
    retries = 3
    success = False
    for attempt in range(retries):
        try:
            response = requests.post(url, headers=headers, json=data, timeout=60)
            if response.status_code == 200:
                res_json = response.json()
                if "data" in res_json and len(res_json["data"]) > 0:
                    img_b64 = res_json["data"][0]["b64_json"]
                    img_data = base64.b64decode(img_b64)
                    with open(target_path, "wb") as img_file:
                        img_file.write(img_data)
                    print(f"  Success! Saved to {target_path} (size: {len(img_data)} bytes)")
                    success_count += 1
                    success = True
                    break
                else:
                    print(f"  Attempt {attempt+1} failed: No data in response JSON.")
            elif response.status_code == 429:
                print(f"  Attempt {attempt+1} got 429 Rate Limit. Sleeping 10s...")
                time.sleep(10)
            else:
                print(f"  Attempt {attempt+1} failed with status {response.status_code}: {response.text}")
        except Exception as e:
            print(f"  Attempt {attempt+1} exception: {e}")
        time.sleep(2)
        
    if not success:
        print(f"  ERROR: Failed to generate {filename} after all attempts.")
        fail_count += 1
        
    # Sleep slightly between successful generations to avoid rate limits
    time.sleep(2.0)

print("\n--- Summary ---")
print(f"Success: {success_count}")
print(f"Failed: {fail_count}")
