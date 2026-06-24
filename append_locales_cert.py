import json, fcntl, os

locales_path = 'src/locales/en.json'

data_to_add = {
  "certificates": [
    {
      "name": "BPI Certificate",
      "description": "BPI Commercial Compostability Certification"
    },
    {
      "name": "BRC Food Safety Audit Report 2024",
      "description": "Latest BRC Global Standards audit report for food packaging safety"
    },
    {
      "name": "BRC Certificate (English)",
      "description": "BRC Global Standard for Packaging Materials - Certificate"
    },
    {
      "name": "ISO 14001 Environmental Management",
      "description": "Environmental management system certification from CWL"
    },
    {
      "name": "FSC Chain of Custody",
      "description": "Forest Stewardship Council certification for responsible sourcing"
    },
    {
      "name": "GRS Global Recycled Standard",
      "description": "Certification for recycled content verification"
    },
    {
      "name": "ISO 9001 Quality Management",
      "description": "Quality management system certification"
    },
    {
      "name": "Home Compostable Certificate",
      "description": "DIN CERTCO home compostable certification (OK Compost HOME)"
    },
    {
      "name": "Home Compost Test Report",
      "description": "Full laboratory test report for home compostability"
    },
    {
      "name": "Seedling Logo EU Industrial Compostable",
      "description": "European Bioplastics certification confirming compliance with EN 13432"
    }
  ],
  "passwordGate": {
    "title": "Secure Certificate Download - Achieve Pack",
    "heading": "Password Required",
    "description": "Please enter the password to access certificate downloads.",
    "placeholder": "Enter password",
    "button": "Unlock"
  },
  "page": {
    "title": "Certificate Downloads - Pouch.eco",
    "heading": "Certificate Downloads",
    "description": "Access our complete collection of quality, food safety, and environmental certifications. All certificates are available in PDF format for your records."
  },
  "sections": {
    "foodSafety": "Food Safety Certifications",
    "environmental": "Environmental Certifications",
    "quality": "Quality Management"
  },
  "footer": {
    "text": "Need additional documentation or specific certificates? Contact us at "
  },
  "card": {
    "pdfType": "PDF Document",
    "download": "Download"
  }
}

with open(locales_path, 'r+') as f:
    fcntl.flock(f, fcntl.LOCK_EX)
    data = json.load(f)
    if 'seoPages' not in data:
        data['seoPages'] = {}
    if 'pages' not in data['seoPages']:
        data['seoPages']['pages'] = {}
    data['seoPages']['pages']['certificateDownload'] = data_to_add
    f.seek(0)
    json.dump(data, f, indent=4, ensure_ascii=False)
    f.truncate()
    fcntl.flock(f, fcntl.LOCK_UN)
