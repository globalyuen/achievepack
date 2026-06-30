import json
import requests
from pathlib import Path

# Load config
CONFIG_FILE = Path("/Users/ryanmacmini/Desktop/1 App i made/Master Achieve Pack/zoho_to_obsidian/zoho_config.json")
config = json.loads(CONFIG_FILE.read_text())

region = config.get("zoho_region", "com")
client_id = config["client_id"]
client_secret = config["client_secret"]
refresh_token = config["refresh_token"]

# 1. Refresh token
resp = requests.post(f"https://accounts.zoho.{region}/oauth/v2/token", data={
    "refresh_token": refresh_token,
    "client_id":     client_id,
    "client_secret": client_secret,
    "grant_type":    "refresh_token",
})
token_data = resp.json()
access_token = token_data.get("access_token")

if not access_token:
    print("Failed to refresh token:", token_data)
    exit(1)

print("Access token refreshed successfully!")

headers = {
    "Authorization": f"Zoho-oauthtoken {access_token}",
    "Content-Type": "application/json",
}

# 2. Get Account ID
resp = requests.get(f"https://mail.zoho.{region}/api/accounts", headers=headers)
accounts = resp.json().get("data", [])
if not accounts:
    print("No accounts found")
    exit(1)
account_id = accounts[0]["accountId"]
print(f"Account ID: {account_id}")

# 3. Get Folder List
resp = requests.get(f"https://mail.zoho.{region}/api/accounts/{account_id}/folders", headers=headers)
folders = resp.json().get("data", [])
sent_folder = next((f for f in folders if "sent" in f["folderName"].lower()), None)

if not sent_folder:
    print("Sent folder not found")
    exit(1)

print(f"Sent folder ID: {sent_folder['folderId']}")

# 4. Fetch Sent messages list
view_url = f"https://mail.zoho.{region}/api/accounts/{account_id}/messages/view"
params = {
    "folderId": sent_folder["folderId"],
    "limit": 10
}
resp = requests.get(view_url, headers=headers, params=params)
if resp.status_code == 200:
    data = resp.json().get("data", [])
    print(f"Found {len(data)} emails in Sent folder.")
    for idx, msg in enumerate(data):
        print(f"\n[{idx+1}] Subject: {msg.get('subject')}")
        print(f"    Date: {msg.get('sentDateInGMT')}")
        print(f"    To: {msg.get('toAddress')}")
        print(f"    Summary: {msg.get('summary')}")
else:
    print(f"Error {resp.status_code}: {resp.text}")

