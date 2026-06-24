import json, fcntl

json_data = {
  "title": "Recycled Ocean Plastic | OBP Engineering | Pouch.eco",
  "description": "Technical guide to Recycled Ocean-Bound Plastic (OBP) packaging. 800+ words of research on coastal recovery, GRS certification, and blockchain traceability.",
  "hero": {
    "badge": "OCEAN_GUARD_V1.0",
    "headlinePrefix": "Clean.",
    "headlineMid": "Ocean.",
    "headlineSuffix": "Plastic.",
    "subheading": "Don't just talk about the ocean—protect it. We engineer flexible packaging using certified Ocean-Bound Plastic (OBP).",
    "imgAlt": "Recycled Ocean Plastic Packaging Hero"
  },
  "stats": [
    { "label": "Coastal Recovery", "value": "50km", "unit": "Zone", "desc": "Preventing waste before it enters water." },
    { "label": "Blockchain ID", "value": "100%", "unit": "Traceable", "desc": "Full digital chain of custody." },
    { "label": "OBP Content", "value": "30-50%", "unit": "Per Bag", "desc": "High-impact material integration." },
    { "label": "Ethical Score", "value": "A+", "unit": "Social Audit", "desc": "Fair wages for collection teams." }
  ],
  "engineering": {
    "badge": "IMPACT_AUDIT",
    "imgAlt": "OBP Collection Engineering",
    "titleLine1": "Preventative",
    "titleLine2": "Action.",
    "description": "Ocean-Bound Plastic (OBP) is defined as plastic waste located within 50km of an unprotected coastline. Our engineering team partners with <0>GRS-certified</0> collection networks to recover this material, transforming it into high-purity resins. Every gram of OBP used in an Achieve Pack pouch is <1>Blockchain-Verified</1>, ensuring a transparent chain of custody from the coastal collection point in SE Asia or Haiti directly to your customer's hands."
  },
  "technical": {
    "badge": "OBP_TECH_STACK",
    "titleLine1": "High-Purity",
    "titleLine2": "Recovery.",
    "sections": [
      {
        "title": "01. Decontamination",
        "description": "Proprietary aqueous washing and vacuum stripping removes salt, UV-degraded polymers, and odor. The resulting OBP resin is suitable for non-food contact layers and secondary packaging."
      },
      {
        "title": "02. Chemical Recycling",
        "description": "For food-grade applications, we utilize advanced pyrolysis to break OBP down to its molecular level, creating \"Virgin-Equivalent\" resins that meet 100% of FDA safety standards."
      },
      {
        "title": "03. Social Audit",
        "description": "Collection is performed by verified coastal teams who receive fair wages and medical support. Your packaging purchase directly funds social infrastructure in vulnerable communities."
      },
      {
        "title": "04. Structural Integrity",
        "description": "We blend OBP with high-performance copolymers to ensure your pouches maintain 100% puncture resistance and hermetic seal strength."
      }
    ]
  },
  "verification": {
    "badge": "CERTIFICATION_MATRIX",
    "imgAlt": "OBP Material Verification",
    "titleLine1": "Trust the",
    "titleLine2": "Blockchain.",
    "description": "We follow the <0>Prevented Ocean Plastic (POP)</0> framework, which provides a digital receipt for every kilogram of plastic recovered. This technical verification is essential for brands that want to make authoritative claims without the risk of greenwashing. Achieve Pack OBP pouches come with full <1>GRS Transaction Certificates</1>, proving your commitment to global ocean health through quantifiable data.",
    "points": [
      {
        "title": "Verified OBP Zone",
        "desc": "Sourced exclusively from coastal regions with high leakage and no waste infrastructure."
      },
      {
        "title": "Carbon Savings",
        "desc": "Recovered plastic has a 75% lower carbon footprint than fossil-based virgin polymers."
      }
    ]
  },
  "faq": {
    "badge": "OCEAN_FAQ",
    "titleLine1": "No Fluff.",
    "titleLine2": "Just Impact.",
    "questions": [
      {
        "q": "What makes it 'Ocean-Bound' plastic?",
        "a": "OBP is abandoned plastic waste found within 50km of a coastline. If not collected, wind and rain will push this plastic into the ocean within weeks. We intercept it at the source."
      },
      {
        "q": "Is OBP food-safe?",
        "a": "Yes, when processed through chemical recycling (pyrolysis) which returns the plastic to its virgin-state monomer, or when used in the non-contact center layers of co-extruded films."
      },
      {
        "q": "How much OBP can be put into a pouch?",
        "a": "We typically recommend a 30-50% blend to maintain absolute structural integrity and seal strength, though 100% OBP content is possible for mailers."
      },
      {
        "q": "Does OBP help with the Plastic Tax?",
        "a": "Yes. In the UK and EU, packaging containing over 30% recycled content (including OBP) is exempt from the £200/ton Plastic Packaging Tax."
      }
    ]
  },
  "cta": {
    "badge": "OCEAN_MANDATE",
    "titleLine1": "Clean the",
    "titleLine2": "Ocean Now.",
    "description": "Ready to transition to high-performance, OBP-verified packaging? Audit our collection data and certificates today.",
    "primaryBtn": "Order Impact Samples",
    "secondaryBtn": "Consult an Ocean Tech Expert"
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
        
    data['seoPages']['pages']['pouchRecycledOceanPlasticPackaging'] = json_data
    
    f.seek(0)
    json.dump(data, f, indent=4, ensure_ascii=False)
    f.truncate()
    fcntl.flock(f, fcntl.LOCK_UN)

print("en.json updated successfully")
