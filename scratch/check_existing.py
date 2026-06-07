import json
import os

BASE_DIR = os.path.abspath(os.path.dirname(os.path.dirname(__file__)))
LOCALES_FILE = os.path.join(BASE_DIR, 'src', 'locales', 'en.json')

with open(LOCALES_FILE, 'r', encoding='utf-8') as f:
    data = json.load(f)

pages = data.get("seoPages", {}).get("pages", {})
print("Pages defined in en.json under seoPages.pages:")
for p in pages.keys():
    print(f"  {p}")
