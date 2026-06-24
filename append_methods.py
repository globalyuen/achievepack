import json, fcntl

locales_path = 'src/locales/en.json'

with open(locales_path, 'r+') as f:
    fcntl.flock(f, fcntl.LOCK_EX)
    data = json.load(f)
    contact_data = data['seoPages']['pages']['contact']
    contact_data['methods'] = "Contact Methods"
    f.seek(0)
    json.dump(data, f, indent=4, ensure_ascii=False)
    f.truncate()
    fcntl.flock(f, fcntl.LOCK_UN)
