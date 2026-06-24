import json, fcntl

json_data = {
  "docsTab": {
    "title": "Documents Management",
    "btnUpload": "Upload Document",
    "colName": "Name",
    "colUser": "User",
    "colType": "Type",
    "colDesc": "Description",
    "colCreated": "Created",
    "colActions": "Actions",
    "unknown": "Unknown",
    "noDocs": "No documents uploaded yet"
  },
  "trackingInfo": {
    "title": "Tracking Information",
    "carrier": "Carrier",
    "na": "N/A",
    "trackingNum": "Tracking Number",
    "trackPkg": "Track Package",
    "btnUpdateTracking": "Update Tracking",
    "btnAddTracking": "Add Tracking",
    "btnDeleteOrder": "Delete Order"
  },
  "uploadModal": {
    "title": "Upload Document",
    "customer": "Customer",
    "selectCustomer": "Select customer",
    "docName": "Document Name *",
    "docType": "Document Type",
    "desc": "Description",
    "fileUrl": "File URL *",
    "uploadHint": "Upload file to /public/docs/ folder and enter the path here",
    "btnUpload": "Upload Document",
    "btnCancel": "Cancel"
  },
  "addTrackingModal": {
    "title": "Add Tracking Information",
    "orderNum": "Order Number",
    "customer": "Customer: {{name}}",
    "carrier": "Carrier",
    "selectCarrier": "Select carrier",
    "carriers": {
      "dhl": "DHL",
      "fedex": "FedEx",
      "ups": "UPS",
      "sfExpress": "SF Express",
      "chinaPost": "China Post",
      "other": "Other"
    },
    "trackingNum": "Tracking Number *",
    "trackingUrl": "Tracking URL (Optional)",
    "note": "⚠️ Note:",
    "noteDesc": "Adding tracking will automatically update order status to \"Shipped\"",
    "btnSave": "Save Tracking Info",
    "btnCancel": "Cancel"
  }
}

file_path = '/Users/ryanmacmini/Desktop/1 App i made/Master Achieve Pack/achieve pack website/achieve-pack/src/locales/en.json'
with open(file_path, 'r+') as f:
    fcntl.flock(f, fcntl.LOCK_EX)
    data = json.load(f)
    
    if 'seoPages' not in data:
        data['seoPages'] = {}
    if 'pages' not in data['seoPages']:
        data['seoPages']['pages'] = {}
        
    data['seoPages']['pages']['adminPageAdditions'] = json_data
    
    f.seek(0)
    json.dump(data, f, indent=4, ensure_ascii=False)
    f.truncate()
    fcntl.flock(f, fcntl.LOCK_UN)

print("en.json updated successfully")
