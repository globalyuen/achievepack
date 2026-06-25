import json, fcntl

locales_path = 'src/locales/en.json'

data_to_add = {
  "seo": {
    "title": "Compostable Packaging Certification FAQ | Global Standards | Achieve Pack",
    "description": "Technical guide to compostable packaging certifications. 800+ words on ASTM D6400, EN 13432, TUV OK Compost, and industrial vs home composting standards."
  },
  "layout": {
    "title": "Compostable Certification: The Technical Authority",
    "description": "Navigating the world's most rigorous environmental standards through verified material science.",
    "heroTitle": "Certified. Not Claimed.",
    "heroSubtitle": "EN 13432 | ASTM D6400 | TUV OK Compost | BPI Verified",
    "introSummary": "The technical distinction between lab-certified and environmental claim is the difference between brand authority and greenwashing risk. This guide breaks down the global testing protocols and certifications from disintegration to eco-toxicity that ensure your compostable packaging truly delivers on its promise."
  },
  "standardsData": {
    "en13432": "The European gold standard. Requires 90% biodegradation within 6 months and disintegration to < 2mm within 12 weeks in industrial composting conditions.",
    "astmD6400": "The primary US standard used by BPI. Similar to EN 13432 but with specific requirements for heavy metal content and eco-toxicity in finished soil.",
    "as4736": "Known for its strict worm-toxicity test. This ensures that the resulting compost is safe for delicate earthworm populations, a critical benchmark for soil health.",
    "disintegration": "Physical breakdown of the bag. After 12 weeks, > 90% of the material must pass through a 2mm sieve."
  },
  "s1": {
    "title": "Navigating the Global Compostability Standards",
    "p1Html": "Sustainability claims are only as strong as the certifications that back them. In 2026, saying a package is \"compostable\" without specifying the standard (e.g., <strong>ASTM D6400</strong> or <strong>EN 13432</strong>) is considered misleading by regulators. This guide provides the technical breakdown of the world's most authoritative compostability certifications.",
    "h1": "Industrial vs. Home",
    "l1_1": "- Industrial: 60C+ controlled environments",
    "l1_2": "- Home: Ambient temperature (20-30C)",
    "l1_3": "- Different microbial activity requirements",
    "l1_4": "- Variable timeframes (90 vs. 365 days)",
    "h2": "Achieve Pack Assurance",
    "l2_1": "- TUV OK Compost (HOME and INDUSTRIAL)",
    "l2_2": "- BPI Certified (US Market Ready)",
    "l2_3": "- ABA Certified (Australia/NZ Ready)",
    "l2_4": "- DIN CERCO (German Quality Standards)",
    "p2Html": "At Achieve Pack, we ensure that every layer of your compostable pouch - including the inks, adhesives, and zippers - is fully certified. We work with leading global laboratories like <strong>ISEGA</strong> and <strong>OWS</strong> to verify that our materials meet the highest standards of disintegration, biodegradation, and eco-toxicity."
  },
  "s2": {
    "title": "The Big Three Global Standards",
    "p1": "While many countries have local rules, most global packaging is engineered to meet one or more of these three dominant technical standards.",
    "h1": "EN 13432 (Europe)",
    "h2": "ASTM D6400 (US)",
    "h3": "AS 4736 (Australia)",
    "caption": "EEAT Insight: Understanding the difference between BPI, TUV, and ABA certifications"
  },
  "s3": {
    "title": "How a Package is Actually Tested",
    "p1": "To receive a Seedling or OK Compost logo, a material must pass four technical hurdles. Failure in any one area results in a total rejection.",
    "l1Html": "<strong>Chemical Characterization:</strong> Checking for restricted heavy metals (Lead, Cadmium, Mercury) and Fluorine (PFAS).",
    "l2Html": "<strong>Biodegradation:</strong> Measuring the conversion of organic carbon to CO2. 90% must be converted within 180 days (Industrial).",
    "l3_str": "<strong>Disintegration:</strong> ",
    "l4Html": "<strong>Eco-Toxicity:</strong> Testing the resulting compost with plant growth (Cress/Summer Barley) to ensure no negative soil impact.",
    "h1": "Technical Documentation",
    "d1": "We provide the Test Reports and Certification Numbers for every structure we produce. This allows your brand to use the official logos on your artwork, which is essential for consumer trust and retail acceptance."
  },
  "s4": {
    "title": "EEAT: Why Lab Verification Matters",
    "p1": "In the eyes of search engines and regulators, technical expertise is the antidote to greenwashing. We help brands move beyond marketing claims and into substantiated engineering data.",
    "caption": "Operational Integrity: Our manufacturing lines are ISO 9001 and ISO 14001 audited",
    "h1": "Our Certification Partners",
    "l1Html": "<strong>TUV Austria:</strong> OK Compost HOME and Industrial.",
    "l2Html": "<strong>BPI (Biodegradable Products Institute):</strong> US industrial composting.",
    "l3Html": "<strong>DIN CERCO:</strong> Certification for German and Central European markets.",
    "l4Html": "<strong>ABA:</strong> Australian Bioplastics Association HOME and Industrial."
  },
  "s5": {
    "title": "Secure Your Compostable Certification",
    "h1": "Certified Performance. Zero Waste.",
    "p1": "Ready to audit your brand's compostable claims? Our engineering team will match your current materials with certified, high-performance compostable structures.",
    "btn1": "Book Certification Review",
    "btn2": "View Compostable Coffee Tech",
    "footerText": "TUV OK COMPOST - BPI CERTIFIED - AS 4736 READY - PFAS FREE"
  },
  "faqs": {
    "q1": "Can I put Industrial Compostable bags in my home compost?",
    "a1": "No. Industrial compostable materials (like standard PLA) require 60C+ temperatures and high moisture to break down. In a home compost pile (20-30C), they may stay intact for years. You must look for OK Compost HOME or AS 5810 for backyard composting.",
    "q2": "Are your adhesives and inks also compostable?",
    "a2": "Yes. For a bag to be certified, every single component must be tested. We utilize water-based and bio-circular inks and solvent-free compostable adhesives that meet EN 13432 requirements.",
    "q3": "How do I get the Seedling logo on my bag?",
    "a3": "First, you must use a certified material structure. Once your pouch is designed, you can apply to organizations like European Bioplastics or BPI to license the logo. We provide all the technical data and test reports required for this application.",
    "q4": "Is Biodegradable the same as Compostable?",
    "a4": "No. Everything is biodegradable eventually (even a car), but compostable is a technical term with specific timeframes and toxicity requirements. Never use the word biodegradable on packaging artwork as it is often considered greenwashing by regulators like the FTC."
  }
}

with open(locales_path, 'r+') as f:
    fcntl.flock(f, fcntl.LOCK_EX)
    data = json.load(f)
    if 'seoPages' not in data:
        data['seoPages'] = {}
    if 'pages' not in data['seoPages']:
        data['seoPages']['pages'] = {}
    if 'compostableCertificationFAQ' not in data['seoPages']['pages']:
        data['seoPages']['pages']['compostableCertificationFAQ'] = {}
    data['seoPages']['pages']['compostableCertificationFAQ'].update(data_to_add)
    f.seek(0)
    json.dump(data, f, indent=4, ensure_ascii=False)
    f.truncate()
    fcntl.flock(f, fcntl.LOCK_UN)
