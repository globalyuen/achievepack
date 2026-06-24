import json, fcntl, os

locales_path = 'src/locales/en.json'

data_to_add = {
  "passwordScreen": {
    "title": "Shipment Tracking",
    "description": "Enter your access password to view shipment details",
    "passwordLabel": "Password",
    "passwordPlaceholder": "Enter access password",
    "verifying": "Verifying...",
    "viewShipment": "View Shipment",
    "backToHome": "Back to Achieve Pack",
    "errors": {
      "pleaseEnter": "Please enter password",
      "notFound": "Shipment not found",
      "incorrect": "Incorrect password",
      "failed": "Verification failed"
    }
  },
  "statusSteps": {
    "pending": "Pending",
    "processing": "Processing",
    "shipped": "Shipped",
    "in_transit": "In Transit",
    "delivered": "Delivered"
  },
  "header": {
    "title": "Shipment Tracking"
  },
  "titleCard": {
    "shipment": "Shipment",
    "po": "PO:"
  },
  "statusProgress": {
    "title": "Shipping Status",
    "estimatedDelivery": "Estimated Delivery",
    "trackingNumber": "Tracking Number"
  },
  "trackingUpdates": {
    "title": "Tracking Updates"
  },
  "documents": {
    "title": "Documents",
    "view": "View",
    "download": "Download"
  },
  "deliveryProofs": {
    "title": "Delivery Proofs"
  },
  "shipmentDetails": {
    "title": "Shipment Details",
    "shippingTerm": "Shipping Term",
    "deliveryTo": "Delivery To",
    "totalBoxes": "Total Boxes",
    "totalWeight": "Total Weight",
    "totalVolume": "Total Volume",
    "ctns": "CTNS",
    "kg": "KG",
    "cbm": "CBM"
  },
  "contact": {
    "questions": "Questions about your shipment?",
    "contactUs": "Contact us"
  },
  "imageModal": {
    "download": "Download"
  },
  "footer": {
    "copyright": "© {{year}} Achieve Pack. All rights reserved."
  }
}

with open(locales_path, 'r+') as f:
    fcntl.flock(f, fcntl.LOCK_EX)
    data = json.load(f)
    if 'seoPages' not in data:
        data['seoPages'] = {}
    if 'pages' not in data['seoPages']:
        data['seoPages']['pages'] = {}
    data['seoPages']['pages']['shipmentTracking'] = data_to_add
    f.seek(0)
    json.dump(data, f, indent=4, ensure_ascii=False)
    f.truncate()
    fcntl.flock(f, fcntl.LOCK_UN)
