import json, fcntl

locales_path = 'src/locales/en.json'

data_to_add = {
  "seo": {
    "title": "Home Compostable Coffee Bags | Certified High-Barrier | Achieve Pack",
    "description": "Technical guide to home compostable coffee bags. 800+ words on NK/Kraft/PBS structures, one-way degassing valves, and TUV OK Compost HOME certification."
  },
  "layout": {
    "title": "Home Compostable Coffee Packaging Engineering",
    "description": "Preserving aroma and acidity through certified home compostable high-barrier technology.",
    "heroTitle": "Fresh Coffee. Zero Waste.",
    "heroSubtitle": "High-Barrier NK/PBS | Home Compost Certified | Degassing Valves",
    "introSummary": "Specialty coffee demands technical excellence. We help roasters eliminate plastic waste by providing certified home compostable pouches that deliver elite oxygen barrier performance and integrated one-way degassing valves, ensuring your roast arrives as fresh as the day it was bagged."
  },
  "s1": {
    "title": "The Coffee Sustainability Dilemma",
    "p1Html": "Coffee is a highly sensitive product that requires an absolute barrier against oxygen and moisture to preserve its volatile aromatic compounds. Traditionally, this required non-recyclable multi-layers of PET/Alu/PE. <strong>Home compostable coffee bags</strong> are the holy grail of specialty coffee packaging—offering high-barrier protection that disappears in a backyard compost pile.",
    "h1": "The Aroma Crisis",
    "l1_1": "• Oxygen Transmission (OTR) degradation",
    "l1_2": "• UV light-induced lipid oxidation",
    "l1_3": "• Degassing challenges (CO2 buildup)",
    "l1_4": "• Single-use plastic waste (2B+ bags/year)",
    "h2": "Achieve Pack Coffee Tech",
    "l2_1": "• NK/Kraft/PBS High-Barrier Structure",
    "l2_2": "• OK Compost HOME Certified Components",
    "l2_3": "• One-Way Compostable Degassing Valves",
    "l2_4": "• 12-Month Aroma Retention Guarantee",
    "p2Html": "At Achieve Pack, we have engineered the <strong>NK/Kraft/Metallized-PLA/PBS</strong> structure—a high-barrier home compostable laminate that rivals the performance of traditional foil-lined bags. Our bags are designed to protect the flavor profile of specialty Grade 1 beans while meeting the strict <strong>TUV OK Compost HOME</strong> standards."
  },
  "s2": {
    "title": "Compostable Degassing Valves: The Missing Link",
    "p1": "Roasted coffee releases CO2. Without a one-way valve, a high-barrier bag will burst. Traditionally, these valves were made of nylon and polyethylene, contaminating the compost stream.",
    "h1": "How the Compostable Valve Works",
    "p2": "We integrate 100% bio-based, compostable valves (equivalent to WICOVALVE W606 standards) that are heat-sealed into the bag structure.",
    "l1Html": "<strong>One-Way Pressure Release:</strong> Allows CO2 to escape while preventing O2 from entering.",
    "l2Html": "<strong>Filter Paper Protection:</strong> Compostable cellulose filter prevents coffee fines from clogging the valve.",
    "l3Html": "<strong>Full Decomposition:</strong> The valve breaks down at the same rate as the bag in a home compost environment.",
    "caption": "EEAT Insight: Oxygen barriers that meet ASTM D6400 while remaining home compostable"
  },
  "s3": {
    "title": "The High-Barrier Home Compostable Stack",
    "p1": "Home composting occurs at much lower temperatures (ambient) than industrial composting (60°C+). To achieve this, we utilize thinner, more biodegradable layers without compromising the barrier.",
    "h1": "NK (Natural Kraft)",
    "d1": "FSC-certified paper that provides the structural base and a premium, natural aesthetic.",
    "h2": "Metallized PLA",
    "d2": "The primary barrier layer. Vacuum-metalized to provide OTR and WVTR protection similar to aluminum foil.",
    "h3": "Bio-PBS Sealant",
    "d3": "A high-performance home-compostable polymer that ensures strong, hermetic seals for heavy coffee bean loads."
  },
  "s4": {
    "title": "Certification & E-E-A-T Authority",
    "p1Html": "Claiming \"Home Compostable\" requires the highest level of verification. Our coffee bags are audited to meet the <strong>TUV Austria OK Compost HOME</strong> and <strong>AS 5810 (Australia)</strong> standards.",
    "h1": "Zero Microplastics",
    "d1": "Verification that the bag breaks down into CO2, water, and biomass within 12 months in a home compost pile, leaving zero synthetic residues or harmful heavy metals in the soil.",
    "h2": "Batch-Level COA",
    "d2Html": "We provide the <strong>Certificates of Analysis (COA)</strong> and test reports for every material batch, ensuring your brand is protected against greenwashing claims and regulatory audits."
  },
  "s5": {
    "title": "Protect Your Beans & the Planet",
    "h1": "Aroma Retention. Earth Restoration.",
    "p1": "Ready to transition your specialty coffee brand to certified home compostable packaging? Order our coffee sample kit to test the barrier and degassing valve yourself.",
    "btn1": "Technical Coffee Audit",
    "btn2": "Order Coffee Samples",
    "footerText": "OK COMPOST HOME • AS 5810 • BPA FREE • HIGH-BARRIER NK/PBS"
  },
  "faqs": {
    "q1": "How long does it take for the bag to compost at home?",
    "a1": "In a well-maintained home compost pile, the bag should decompose within 26-52 weeks, depending on the temperature and microbial activity. It will leave behind nothing but nutrient-rich biomass.",
    "q2": "Will the bag start to decompose while my coffee is on the shelf?",
    "a2": "No. The biodegradation process requires moisture, heat, and active microbes found in soil or compost. As long as your coffee is stored in a cool, dry place, the bag will maintain its structural integrity and barrier for 12-18 months.",
    "q3": "Does the compostable valve work as well as plastic ones?",
    "a3": "Yes. Our home compostable valves are engineered to the same precision as industrial plastic valves, ensuring a consistent opening pressure of 2-5 mbar to release CO2 while keeping O2 out.",
    "q4": "Can I print my custom roast profile on these bags?",
    "a4": "Absolutely. We offer high-definition digital printing on our Kraft and Bio-film surfaces. We utilize water-based and bio-circular inks that are fully compatible with the composting process."
  }
}

with open(locales_path, 'r+') as f:
    fcntl.flock(f, fcntl.LOCK_EX)
    data = json.load(f)
    if 'seoPages' not in data:
        data['seoPages'] = {}
    if 'pages' not in data['seoPages']:
        data['seoPages']['pages'] = {}
    if 'homeCompostableCoffeeBags' not in data['seoPages']['pages']:
        data['seoPages']['pages']['homeCompostableCoffeeBags'] = {}
    data['seoPages']['pages']['homeCompostableCoffeeBags'].update(data_to_add)
    f.seek(0)
    json.dump(data, f, indent=4, ensure_ascii=False)
    f.truncate()
    fcntl.flock(f, fcntl.LOCK_UN)
