import json, fcntl

json_data = {
  "title": "The 5 Pillars of Sustainable Packaging | Technical Architecture | Pouch.eco",
  "description": "Technical guide to the 5 pillars of 2026 sustainable packaging. 800+ words of research on source reduction, recyclability, PCR, and carbon metrics.",
  "hero": {
    "badge": "PILLAR_TECH_V1.0",
    "headlinePrefix": "Build.",
    "headlineMid": "The.",
    "headlineSuffix": "Future.",
    "subheading": "Sustainability is not a feature—it's an architecture. We engineer your packaging across five critical pillars: Source Reduction, Recyclability, Compostability, PCR, and Carbon Neutrality.",
    "imgAlt": "Sustainable Packaging Pillars Hero",
    "primaryBtn": "Browse 5-Pillar Solutions",
    "secondaryBtn": "Order Material Proof"
  },
  "metrics": [
    { "label": "Source Reduct", "value": "-80%", "unit": "Weight", "desc": "Weight reduction vs. rigid glass/PET." },
    { "label": "Recyclability", "value": "90%", "unit": "Stream", "desc": "Mono-PE recovery rate (Cyclos-HTP)." },
    { "label": "PCR Content", "value": "30%+", "unit": "Certified", "desc": "GRS-verified post-consumer resin." },
    { "label": "Carbon Save", "value": "-60%", "unit": "CO2e", "desc": "Total life-cycle carbon reduction." }
  ],
  "engineering": {
    "imgAlt": "5 Pillars of Sustainable Packaging Engineering",
    "badge": "CIRCULAR_ARCHITECTURE",
    "titleLine1": "Engineered.",
    "titleLine2": "For Impact.",
    "description": "To thrive in the 2026 <0>Circular Economy</0>, brands must move beyond surface-level claims. Our engineering framework optimizes for <1>Source Reduction</1> (minimizing mass), <2>Design for Recyclability</2> (Mono-Material structures), <3>Certified Compostability</3> (EN 13432 integrity), <4>PCR Integration</4> (reclaimed plastics), and <5>LCA Verification</5> (Carbon Neutrality). By aligning your product with these five pillars, we ensure compliance with global regulations like the EU PPWR and California SB 54 while delivering a premium consumer experience."
  },
  "technical": {
    "badge": "PILLAR_TECH_STACK",
    "titleLine1": "The Technical",
    "titleLine2": "Matrix.",
    "sections": [
      {
        "title": "01. Source Reduction",
        "description": "Flexible pouches reduce material mass by up to 80% compared to rigid jars. This directly lowers Scope 3 emissions and reduces EPR fee liability by weight."
      },
      {
        "title": "02. Mono-Material Recyclability",
        "description": "Transitioning from PET/PE laminates to Mono-PE (MDO-PE) structures ensures 100% recyclability in standard curbside streams (Cyclos-HTP certified)."
      },
      {
        "title": "03. PCR Integration",
        "description": "Integrating 30-50% GRS-certified post-consumer resin reduces reliance on virgin fossil plastics and exempts brands from UK and EU plastic taxes."
      },
      {
        "title": "04. Certified Compostability",
        "description": "For organic-contaminated waste, we offer EN 13432 and ASTM D6400 certified structures that return to the soil in under 180 days."
      }
    ]
  },
  "material": {
    "badge": "MATERIAL_SCIENCE_P5",
    "titleLine1": "Pillar 5:",
    "titleLine2": "Carbon Math.",
    "description": "The final pillar is the <0>Life Cycle Assessment (LCA)</0>. We utilize <1>ISO 14040</1> standards to calculate the cradle-to-customer carbon footprint of your specific order. By optimizing material weight and choosing low-impact resins (like Bio-PE or PCR), we can reduce your product's total packaging emissions by over 60%. This data is verifiable and ready for use in your annual ESG reporting and consumer-facing sustainability disclosures.",
    "points": [
      {
        "title": "LCA Verified",
        "desc": "Full ISO 14040/44 compliant carbon footprinting available for all custom orders."
      },
      {
        "title": "Regulatory Ready",
        "desc": "Compliant with FTC Green Guides and UK CMA Green Claims Code standards."
      }
    ],
    "imgAlt": "Technical Pouch Material Layers"
  },
  "faq": {
    "badge": "STRATEGY_FAQ",
    "titleLine1": "Expert",
    "titleLine2": "Intelligence.",
    "questions": [
      {
        "q": "Which pillar should I prioritize first?",
        "a": "Source Reduction (Pillar 1) is usually the quickest win, reducing both costs and carbon. Recyclability (Pillar 2) is the most critical for long-term retail compliance."
      },
      {
        "q": "Is PCR safe for food packaging?",
        "a": "Yes. We use FDA and EFSA compliant PCR resins that have undergone chemical or advanced mechanical purification to ensure 100% safety for direct food contact."
      },
      {
        "q": "How do you define 'Carbon Neutral' packaging?",
        "a": "We focus on reduction first (LCA optimization) and then partner with certified carbon removal projects to offset the unavoidable Scope 3 emissions from the resin and transport."
      },
      {
        "q": "Do these pillars work for e-commerce?",
        "a": "Absolutely. Pillar 1 (Source Reduction) is especially powerful for DTC brands, as it significantly lowers shipping costs and outer packaging waste."
      }
    ]
  },
  "cta": {
    "badge": "PILLAR_MANDATE",
    "titleLine1": "Build Bold.",
    "titleLine2": "Impact Pure.",
    "description": "Ready to audit your brand's packaging against the 5 Pillars of 2026 sustainability? Let's start the technical audit today.",
    "primaryBtn": "Order 5-Pillar Samples",
    "secondaryBtn": "Speak to a Pillar Engineer"
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
        
    data['seoPages']['pages']['pouchSustainablePackagingPillar'] = json_data
    
    f.seek(0)
    json.dump(data, f, indent=4, ensure_ascii=False)
    f.truncate()
    fcntl.flock(f, fcntl.LOCK_UN)

print("en.json updated successfully")
