import json, fcntl

locales_path = 'src/locales/en.json'

data_to_add = {
  "seo": {
    "title": "Contact Us | Achieve Pack - Sustainable Packaging Solutions",
    "description": "Contact Achieve Pack for custom sustainable packaging quotes, samples, and inquiries. Email, WhatsApp, or book a free 30-min consultation call."
  },
  "header": {
    "back": "Back"
  },
  "hero": {
    "title": "Get in Touch",
    "subtitle": "Have questions about sustainable packaging? Need a quote? We're here to help. Our team responds within 24 hours.",
    "bookCall": "Book Free Consultation"
  },
  "quickActions": {
    "bookCall": "Book a Free Call",
    "bookCallDesc": "30-min packaging consultation",
    "whatsapp": "WhatsApp",
    "whatsappDesc": "+852 6970 4411",
    "email": "Email Us",
    "emailDesc": "ryan@achievepack.com"
  },
  "contactInfo": {
    "title": "Contact Information",
    "hkOffice": "Hong Kong Office",
    "hkOfficeAddress": "Unit 1003, 10/F, Tower A<br />New Mandarin Plaza<br />Tsim Sha Tsui, Hong Kong",
    "factory": "Factory Location",
    "factoryAddress": "Shenzhen, China<br />ISO 9001 & BRCGS Certified",
    "hours": "Business Hours",
    "hoursText": "Monday - Friday: 9:00 AM - 6:00 PM (HKT)<br />Saturday: 10:00 AM - 2:00 PM",
    "timezone": "Time Zone",
    "timezoneText": "Hong Kong Time (GMT+8)"
  },
  "whyContact": {
    "title": "Why Contact Achieve Pack?",
    "points": [
      "Free packaging consultation",
      "Custom quotes within 24 hours",
      "Free samples for qualified inquiries",
      "MOQ from 100 pieces",
      "Worldwide shipping"
    ]
  },
  "form": {
    "title": "Send Us a Message",
    "inquiryType": "Inquiry Type",
    "types": {
      "quote": "Quote Request",
      "samples": "Sample Request",
      "support": "Support",
      "other": "Other"
    },
    "name": "Name *",
    "namePlaceholder": "Your name",
    "email": "Email *",
    "emailPlaceholder": "your@email.com",
    "company": "Company",
    "companyPlaceholder": "Your company name",
    "phone": "Phone",
    "phonePlaceholder": "+1 234 567 8900",
    "subject": "Subject",
    "subjectPlaceholder": "e.g., Quote for 1000 compostable coffee bags",
    "message": "Message *",
    "messagePlaceholder": "Tell us about your packaging needs, quantities, timeline...",
    "attachments": "Attachments (Optional)",
    "clickToUpload": "Click to upload",
    "dragDrop": "or drag and drop",
    "fileTypes": "Images, PDFs, AI, EPS (max 5MB each, 10MB total)",
    "submit": "Send Message",
    "processing": "Processing...",
    "agreeText": "By sending a message, you agree to our",
    "privacyPolicy": "Privacy Policy"
  },
  "success": {
    "title": "Message Sent Successfully!",
    "desc": "Thank you for contacting us. We'll respond within 24 hours.",
    "sendAnother": "Send another message"
  },
  "errors": {
    "verificationFailed": "Verification failed. Please refresh the page.",
    "waitVerification": "Please wait for verification to complete.",
    "fileTooLarge": "File \"{{fileName}}\" exceeds 5MB limit",
    "totalSizeExceeded": "Total attachment size exceeds 10MB limit",
    "maxFilesExceeded": "Maximum 5 files allowed",
    "sendFailed": "Failed to send message. Please try again."
  },
  "footer": {
    "title": "Prefer to Shop Directly?",
    "desc": "Browse our sustainable packaging products and order samples online.",
    "store": "Visit Our Store",
    "about": "Learn About Us"
  }
}

with open(locales_path, 'r+') as f:
    fcntl.flock(f, fcntl.LOCK_EX)
    data = json.load(f)
    if 'seoPages' not in data:
        data['seoPages'] = {}
    if 'pages' not in data['seoPages']:
        data['seoPages']['pages'] = {}
    data['seoPages']['pages']['contact'] = data_to_add
    f.seek(0)
    json.dump(data, f, indent=4, ensure_ascii=False)
    f.truncate()
    fcntl.flock(f, fcntl.LOCK_UN)
