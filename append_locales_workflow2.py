import json, fcntl

locales_path = 'src/locales/en.json'

data_to_add = {
  "goProcess": "Go to Process"
}

with open(locales_path, 'r+') as f:
    fcntl.flock(f, fcntl.LOCK_EX)
    data = json.load(f)
    if 'seoPages' not in data:
        data['seoPages'] = {}
    if 'pages' not in data['seoPages']:
        data['seoPages']['pages'] = {}
    if 'orderWorkflow' not in data['seoPages']['pages']:
        data['seoPages']['pages']['orderWorkflow'] = {}
    data['seoPages']['pages']['orderWorkflow'].update(data_to_add)
    f.seek(0)
    json.dump(data, f, indent=4, ensure_ascii=False)
    f.truncate()
    fcntl.flock(f, fcntl.LOCK_UN)
