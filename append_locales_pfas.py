import json, fcntl, os

locales_path = 'src/locales/en.json'

data_to_add = {
  "seo": {
    "title": "PFAS-Free Packaging | Chemical Safety Engineering | Pouch.eco",
    "description": "Technical guide to PFAS-free packaging. 800+ words of research on forever chemicals, regulatory bans, and advanced aqueous grease barriers."
  },
  "hero": {
    "badge": "TOXIC_LOCK_V1.0",
    "titleLine1": "Pure.",
    "titleLine2": "Clean.",
    "titleLine3": "Safe.",
    "desc": "\"Forever Chemicals\" have no place in food packaging. We engineer high-performance, PFAS-free flexible pouches.",
    "button1": "Browse Safe Solutions",
    "button2": "Request Purity Lab Pack"
  },
  "engineering": {
    "badge": "CHEMICAL_SAFETY_LAB",
    "titleLine1": "Beyond the",
    "titleLine2": "Forever.",
    "desc": "PFAS (per- and polyfluoroalkyl substances) have historically been used for grease-proofing, but their environmental persistence is a catastrophic failure of engineering. Our <strong>PFAS-Free protocols</strong> utilize high-purity <strong>Aqueous Coatings</strong> and mechanical orientation (MDO) to create a grease shield (Kit Rating 12+) that is biologically inert. We verify every batch through <strong>Total Fluorine (TF) Analysis</strong> to ensure detection levels remain below 50 ppm.",
    "metrics": [
      { "label": "Total Fluorine", "value": "< 50", "unit": "PPM", "desc": "Certified absence of added PFAS." },
      { "label": "Grease Barrier", "value": "12+", "unit": "Kit Rating", "desc": "Superior protection against oils." },
      { "label": "Bio-Content", "value": "100%", "unit": "Aqueous", "desc": "Natural grease-resistant coatings." },
      { "label": "Regulatory", "value": "PASSED", "unit": "AB 1200", "desc": "California & EU safety compliant." }
    ]
  },
  "tech": {
    "badge": "BARRIER_TECH_STACK",
    "titleLine1": "The Clean",
    "titleLine2": "Shield.",
    "items": [
      {
        "title": "01. Aqueous Coating",
        "desc": "Water-based dispersion technology that creates a physical grease-proof layer. 100% PFAS-free and recyclable in standard paper or plastic streams depending on the substrate."
      },
      {
        "title": "02. Mechanical Barrier",
        "desc": "Utilizing high-purity PE and PP polymers oriented at the molecular level to resist oil penetration. This physical defense replaces the need for fluorinated chemical additives."
      },
      {
        "title": "03. Bio-Wax Tech",
        "desc": "Natural-origin wax coatings derived from plant sources. These provides excellent water and grease resistance for compostable food pouches."
      },
      {
        "title": "04. NIAS Testing",
        "desc": "We perform Non-Intentionally Added Substances (NIAS) screening to ensure no chemical migration from adhesives or inks compromises the PFAS-free status of the bag."
      }
    ]
  },
  "regulatory": {
    "badge": "REGULATORY_FRAMEWORK",
    "titleLine1": "Compliant.",
    "titleLine2": "By Design.",
    "desc": "PFAS legislation is sweeping the globe. From <strong>California AB 1200</strong> to the <strong>EU REACH</strong> restriction list, brands are now legally responsible for the chemical purity of their packaging. Achieve Pack provides the certified <strong>Technical Data Sheets (TDS)</strong> and third-party lab reports required to move your brand into a toxic-free future.",
    "euReady": "EU REACH Ready",
    "euReadyDesc": "Zero PFOA, PFOS, or other restricted fluorinated chemicals.",
    "ab1200": "AB 1200 Audited",
    "ab1200Desc": "Meets strict California disclosure and prohibition mandates for 2026."
  },
  "faq": {
    "badge": "CHEMICAL_FAQ",
    "titleLine1": "No Secrets.",
    "titleLine2": "Just Safety.",
    "items": [
      { "q": "What exactly are PFAS?", "a": "PFAS are synthetic chemicals used to repel oil and water. They are known as 'forever chemicals' because they do not break down in the environment and can cause long-term health issues in humans." },
      { "q": "How do you test for PFAS?", "a": "We utilize Total Fluorine (TF) analysis via Combustion Ion Chromatography (CIC). If total fluorine is below 50 ppm, the sample is considered PFAS-free by global regulatory standards." },
      { "q": "Can I get a grease-proof bag without PFAS?", "a": "Yes. Our aqueous-coated structures provide equal or superior grease resistance (Kit Rating 12) to traditional fluorinated treatments without the toxic risk." },
      { "q": "Do these safe bags affect product shelf life?", "a": "No. By using mechanical barrier orientation and high-purity sealants, we maintain identical oxygen and moisture barrier properties (OTR/WVTR)." }
    ]
  },
  "cta": {
    "badge": "SAFETY_MANDATE",
    "titleLine1": "Pure Future.",
    "titleLine2": "Safe Now.",
    "desc": "Ready to secure a PFAS-free supply chain for your brand? Audit our laboratory purity reports today.",
    "button1": "Order Purity Samples",
    "button2": "Speak to a Safety Engineer"
  }
}

with open(locales_path, 'r+') as f:
    fcntl.flock(f, fcntl.LOCK_EX)
    data = json.load(f)
    if 'seoPages' not in data:
        data['seoPages'] = {}
    if 'pages' not in data['seoPages']:
        data['seoPages']['pages'] = {}
    data['seoPages']['pages']['pouchPFASFreePackaging'] = data_to_add
    f.seek(0)
    json.dump(data, f, indent=4, ensure_ascii=False)
    f.truncate()
    fcntl.flock(f, fcntl.LOCK_UN)
