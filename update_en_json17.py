import json, fcntl

file_path = '/Users/ryanmacmini/Desktop/1 App i made/Master Achieve Pack/achieve pack website/achieve-pack/src/locales/en.json'
with open(file_path, 'r+') as f:
    fcntl.flock(f, fcntl.LOCK_EX)
    data = json.load(f)
    
    data['seoPages']['pages']['prospectLists']['enterEmailToBlock'] = "Enter email to block..."
    
    f.seek(0)
    json.dump(data, f, indent=4, ensure_ascii=False)
    f.truncate()
    fcntl.flock(f, fcntl.LOCK_UN)

print("en.json updated successfully")
