import json, fcntl, os

locales_path = 'src/locales/en.json'

data_to_add = {
  "seo": {
    "title": "Recyclable Snack Packaging | High Barrier & Crunch | Pouch.eco",
    "description": "Technical guide to recyclable snack packaging. 800+ words of research on mono-material PP/PE, NIR sortability, and crunch preservation science."
  },
  "hero": {
    "badge": "SNACK_TECH_V1.0",
    "titleLine1": "Crunch.",
    "titleLine2": "Pure.",
    "titleLine3": "Fresh.",
    "desc": "Snack packaging is the final frontier of recycling. We engineer high-barrier mono-material pouches.",
    "button1": "Browse Snack Solutions",
    "button2": "Order Crunch Samples"
  },
  "engineering": {
    "badge": "CRUNCH_PRESERVATION_AUDIT",
    "titleLine1": "Engineered.",
    "titleLine2": "For the Crunch.",
    "desc": "The snack industry has long relied on metallized multi-layer films to protect products from moisture and light. But these films are a recycling nightmare. In 2026, the mandate is <strong>Purity</strong>. At Pouch.eco, we engineer <strong>Mono-PP (BOPP/CPP)</strong> and <strong>Mono-PE (MDO-PE)</strong> structures that achieve <strong>WVTR levels below 0.5</strong>—matching the performance of traditional foil bags. Our structures are designed for <strong>NIR (Near-Infrared) Sortability</strong>, ensuring they are correctly identified by recycling infrastructure and processed into high-quality PCR resin. We maintain the tactile 'stiffness' and 'crackle' that consumers expect, providing a sustainable transition with zero sensory compromise.",
    "metrics": [
      { "label": "Crunch Pres", "value": "100%", "unit": "Shelf", "desc": "Verified parity with foil." },
      { "label": "Sortability", "value": "NIR", "unit": "Ready", "desc": "Scan-verified recovery." },
      { "label": "Grease Barr", "value": "High", "unit": "Seal", "desc": "Tested for oily snacks." },
      { "label": "Recyclable", "value": "PP/PE", "unit": "Mono", "desc": "Single-stream compatible." }
    ]
  },
  "tech": {
    "badge": "SNACK_TECH_STACK",
    "titleLine1": "High Barrier.",
    "titleLine2": "High Speed.",
    "items": [
      {
        "title": "01. Vacuum Metallization",
        "desc": "Applying nano-layers of aluminum to mono-PP or mono-PE films. This provides extreme light and oxygen barriers while remaining within the < 5% weight limit for recyclability."
      },
      {
        "title": "02. Grease Barrier Tech",
        "desc": "Engineered inner layers that block oils and fats from migrating through the packaging, preventing delamination and maintaining crisp visual branding."
      },
      {
        "title": "03. High-Speed Converting",
        "desc": "Optimized COF (Coefficient of Friction) for high-speed automated Form-Fill-Seal (FFS) lines, ensuring zero downtime during the transition to sustainable films."
      },
      {
        "title": "04. Laser Easy-Open",
        "desc": "Precision laser scoring that ensures a clean, straight tear every time—preventing the 'packaging explosion' common with traditional snack bags."
      }
    ]
  },
  "laboratory": {
    "badge": "SNACK_SCIENCE_V1",
    "titleLine1": "Verified.",
    "titleLine2": "To the Crunch.",
    "desc": "Snack freshness is a measurable technical variable. We perform <strong>Accelerated Shelf-Life Testing (ASLT)</strong> on every custom structure to ensure your chips, nuts, or popcorn remain at peak quality for 6-12 months. Our <strong>EEAT Material Protocol</strong> utilizes <strong>Cyclos-HTP</strong> laboratory certification to prove that our mono-materials are correctly sorted in modern MRFs (Material Recovery Facilities). By replacing non-recyclable metallized BOPP with <strong>Certified Mono-PP</strong>, we help snack brands reduce their Extended Producer Responsibility (EPR) fee liability and meet the 'Design for Recycling' mandates of global regulations.",
    "barrier": "Barrier Validated",
    "barrierDesc": "Tested for OTR and WVTR to ensure absolute parity with traditional non-recyclable foil.",
    "foodSafety": "Food Safety Certified",
    "foodSafetyDesc": "100% solvent-free lamination and food-grade resins for total consumer safety."
  },
  "faq": {
    "badge": "SNACK_FAQ",
    "titleLine1": "Expert",
    "titleLine2": "Intelligence.",
    "items": [
      { "q": "Is metallized film truly recyclable?", "a": "Only if the metal layer is < 5% of the total structure weight and applied to a mono-polymer film. Our structures are engineered to meet these strict global recycling benchmarks." },
      { "q": "Do you offer 'Recyclable Kraft' snack pouches?", "a": "Yes. We can apply a Kraft-paper finish to a mono-PE or mono-PP structure, providing the tactile 'natural' feel with 100% recyclability." },
      { "q": "Can I use your films on my existing packing lines?", "a": "Absolutely. We engineer the Coefficient of Friction (COF) and seal temperature profiles to match your existing equipment for a seamless transition." },
      { "q": "What is NIR Sortability?", "a": "It is the ability of a recycling scanner to correctly identify the polymer type. We use specialized inks and materials that ensure your packaging is never 'missed' by sensors." }
    ]
  },
  "cta": {
    "badge": "SNACK_MANDATE",
    "titleLine1": "Think Fresh.",
    "titleLine2": "Impact Pure.",
    "desc": "Ready to secure a high-barrier, sustainable supply chain for your snack brand? Let's start the technical audit today.",
    "button1": "Order Snack Samples",
    "button2": "Speak to a Snack Engineer"
  }
}

with open(locales_path, 'r+') as f:
    fcntl.flock(f, fcntl.LOCK_EX)
    data = json.load(f)
    if 'seoPages' not in data:
        data['seoPages'] = {}
    if 'pages' not in data['seoPages']:
        data['seoPages']['pages'] = {}
    data['seoPages']['pages']['pouchRecyclableSnackPackaging'] = data_to_add
    f.seek(0)
    json.dump(data, f, indent=4, ensure_ascii=False)
    f.truncate()
    fcntl.flock(f, fcntl.LOCK_UN)
