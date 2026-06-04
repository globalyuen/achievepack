import os
import json
import time
import requests
import base64
import sys

# Paths
base_dir = "/Users/ryanmacmini/Desktop/1 App i made/Master Achieve Pack/achieve pack website/achieve-pack"
missing_json_path = "/Users/ryanmacmini/.gemini/antigravity/scratch/missing_infographics.json"
output_dir = os.path.join(base_dir, "public", "imgs", "infographics")
log_path = os.path.join(base_dir, "scratch", "generation_progress.log")

os.makedirs(output_dir, exist_ok=True)
os.makedirs(os.path.join(base_dir, "scratch"), exist_ok=True)

# API configuration
API_KEY = os.environ.get("XAI_API_KEY", "")
url = "https://api.x.ai/v1/images/generations"
headers = {
    "Authorization": f"Bearer {API_KEY}",
    "Content-Type": "application/json"
}

def log_message(msg):
    timestamp = time.strftime("%Y-%m-%d %H:%M:%S")
    formatted = f"[{timestamp}] {msg}"
    print(formatted)
    with open(log_path, "a", encoding="utf-8") as f:
        f.write(formatted + "\n")

if not os.path.exists(missing_json_path):
    log_message(f"❌ Error: {missing_json_path} not found!")
    sys.exit(1)

with open(missing_json_path, "r", encoding="utf-8") as f:
    items = json.load(f)

log_message(f"Loaded {len(items)} target infographic items.")

success_count = 0
skip_count = 0
failed_count = 0

for i, item in enumerate(items):
    filename = item["filename"]
    target_path = os.path.join(output_dir, filename)
    
    # Check if already exists
    if os.path.exists(target_path) and os.path.getsize(target_path) > 0:
        skip_count += 1
        continue
        
    log_message(f"Generating ({i+1}/{len(items)}): {filename}")
    enhanced_prompt = item["enhancedPrompt"]
    
    payload = {
        "model": "grok-imagine-image",
        "prompt": enhanced_prompt,
        "response_format": "b64_json"
    }
    
    retries = 3
    success = False
    for attempt in range(retries):
        try:
            response = requests.post(url, headers=headers, json=payload, timeout=60)
            if response.status_code == 200:
                res_json = response.json()
                if "data" in res_json and len(res_json["data"]) > 0:
                    b64_data = res_json["data"][0]["b64_json"]
                    img_data = base64.b64decode(b64_data)
                    with open(target_path, "wb") as img_file:
                        img_file.write(img_data)
                    log_message(f"✅ Saved successfully: {filename}")
                    success_count += 1
                    success = True
                    break
                else:
                    log_message(f"⚠️ Response format error on attempt {attempt+1}: {res_json}")
            elif response.status_code == 429:
                log_message(f"⚠️ Rate limited (429) on attempt {attempt+1}. Waiting 30 seconds...")
                time.sleep(30)
            else:
                log_message(f"⚠️ Error {response.status_code} on attempt {attempt+1}: {response.text}")
        except Exception as e:
            log_message(f"⚠️ Exception on attempt {attempt+1}: {e}")
            
        time.sleep(2)
        
    if not success:
        log_message(f"❌ Failed to generate: {filename} after {retries} attempts.")
        failed_count += 1
        
    # Rate limiting protection
    time.sleep(1)

log_message("=== GENERATION SESSION FINISHED ===")
log_message(f"Processed: {len(items)}, Skipped: {skip_count}, Success: {success_count}, Failed: {failed_count}")
