import json
import os

BASE_DIR = os.path.abspath(os.path.dirname(os.path.dirname(__file__)))
LOCALES_FILE = os.path.join(BASE_DIR, 'src', 'locales', 'en.json')

with open(LOCALES_FILE, 'r', encoding='utf-8') as f:
    data = json.load(f)

p = data["seoPages"]["pages"]["pouchCombustionSafetyTest"]

# Add missing combustion behavior keys
p["duelTitle"] = "PLA vs. PET Combustion Behavior"
p["plaTitle"] = "Compostable PLA Film"
p["plaBadge"] = "Certified Compostable & Bio-Adhesive"
p["plaMetric1Title"] = "Mild Natural Odor:"
p["plaMetric1Desc"] = "Burns cleanly with a pleasant, earthy scent resembling caramelized sugar, toasted corn, grass, or wood ash."
p["plaMetric2Title"] = "Stable Ash Integrity:"
p["plaMetric2Desc"] = "The sticker body remains structurally solid and intact as a charcoal ash skeleton until fully extinguished."
p["plaMetric3Title"] = "Zero Dangerous Dripping:"
p["plaMetric3Desc"] = "Does not undergo toxic melting or dripping behavior, ensuring high physical safety during burn testing."
p["plaMetric4Title"] = "Zero Microplastics:"
p["plaMetric4Desc"] = "Breaks down completely in soil and industrial composting in ≤14 weeks without microplastics residue."

p["petTitle"] = "Standard PET Plastic"
p["petBadge"] = "Fossil-Based Synthetic Polymer"
p["petMetric1Title"] = "Highly Pungent Odor:"
p["petMetric1Desc"] = "Emits a highly pungent, chokingly acrid, and hazardous chemical smell characteristic of burnt synthetic plastics."
p["petMetric2Title"] = "Melting & Splattering:"
p["petMetric2Desc"] = "Melts incredibly fast and shrivels into a molten liquid pool, splattering during combustion."
p["petMetric3Title"] = "Severe Toxic Dripping:"
p["petMetric3Desc"] = "Drips hot, sticky, and flaming liquid polymer, which is highly dangerous and poses extreme contact burn risks."
p["petMetric4Title"] = "Permanent Environmental Harm:"
p["petMetric4Desc"] = "Cannot biodegrade. Persists for 500+ years, fracturing into conventional toxic microplastics that enter food chains."

# Infographic
p["infographicCaption"] = "Left: Clean carbon-ash burn. Right: Molten PET dripping."
p["takeawaysTitle"] = "Key Takeaways from the Lab Visuals:"
p["takeaway1Title"] = "Ash Edge Stability:"
p["takeaway1Desc"] = "The PLA-based clear film generates a stable black/gray carbonized edge when burnt. It does not drop down or run."
p["takeaway2Title"] = "Liquid Droplet Threat:"
p["takeaway2Desc"] = "Standard PET plastic immediately converts to a running liquid state that can drop onto fabrics, paper, or skin, causing deep heat-sink burns."
p["takeaway3Title"] = "Natural Wood Scent vs. Pungent Benzene:"
p["takeaway3Desc"] = "PLA's gas emission is harmless CO₂ and trace water vapour with a wood ash aroma, whereas PET emits carcinogenic benzene vapors."

# Tech Specs Table / Sticker stack
p["techSpecsTitle"] = "Biodegradable Sticker Stack"
p["techSpecsIntro"] = "At Pouch.eco, our clear seal stickers are designed to offer the exact high-gloss transparency of standard BOPP/PET plastics while adhering to absolute compostability criteria."
p["tableHeaderLayer"] = "Layer"
p["tableHeaderComposition"] = "Composition"
p["tableHeaderComposting"] = "Composting Performance"
p["layer1Name"] = "1. Film Base"
p["layer1Comp"] = "Certified Compostable Clear PLA Film (100% plant dextrose)"
p["layer1Perf"] = "Breaks down into water, CO₂ and biomass in ≤14 weeks"
p["layer2Name"] = "2. Adhesive Layer"
p["layer2Comp"] = "Patent-pending Bio-Adhesive (natural resins & plant tackifiers)"
p["layer2Perf"] = "100% biodegradable, non-toxic, zero microplastics residue"
p["layer3Name"] = "3. Release Liner"
p["layer3Comp"] = "FSC Certified Supercalendered Glassine Paper (Silicone-free option)"
p["layer3Perf"] = "Fully recyclable in paper streams or home-compostable"

# Link Application
p["appLinkTitle"] = "Looking for a real-world application?"
p["appLinkDesc1"] = "This exact material stack is deployed in our popular "
p["appLinkLabel"] = "[Premium PLA Biodegradable Clear Sealing Sticker]"
p["appLinkDesc2"] = ". It provides brands with crystal-clear high clarity, heavy adhesion to envelopes and product boxes, and fully certified compostability."

# Step-by-Step guide additions
p["conductTestTitle"] = "How to Conduct a Combustion Test"
p["conductTestWarningTitle"] = "Safety Warning!"
p["conductTestWarningDesc"] = "Because synthetic plastics (PET, PP) melt and drip sticky, highly burning droplets, NEVER hold the sample directly with your bare fingers. Vapors from conventional plastic materials are toxic—conduct the test only under a laboratory fume hood or in a highly ventilated open outdoor space."
p["step1Title"] = "Prepare Laboratory Tools"
p["step1Desc"] = "Gather a pair of steel laboratory tweezers (long-nosed pliers), a non-flammable metal tray or ceramic dish, a safety lighter, and a glass of water for emergency extinguishing."
p["step2Title"] = "Secure the Film Sample"
p["step2Desc"] = "Cut a small piece of the clear sticker (approx. 2cm x 5cm) and peel it off its liner. Clamp it firmly at one extreme end with the steel tweezers, holding the tweezers horizontally."
p["step3Title"] = "Apply the Flame"
p["step3Desc"] = "Position the sample directly over the ceramic tray. Introduce the flame of your lighter to the bottom tip of the clear film. Observe how it takes fire and pull the flame source away."
p["step4Title"] = "Analyze Odor, Flame & Ash"
p["step4Desc"] = "Waft the air gently toward your nose. If it smells clean and woodsy, it's PLA. If it melts, drops flame, and releases black soot with a highly offensive rubber-chemical stench, it's conventional PET."

# AI verify section
p["aiVerifyTitle"] = "Verify with AI"
p["aiCardTitle"] = "💡 Evaluating Materials Using AI Assistants?"
p["aiCardDesc"] = "Copy and paste these precise search queries into AI models (like Gemini, ChatGPT, or Claude) to cross-reference and verify biodegradable material testing standards:"
p["aiQuery1"] = "What does burning PLA biopolymer smell like compared to burning standard PET plastic?"
p["aiQuery2"] = "Why does Polylactic Acid (PLA) leave a brittle black ash during burn tests while PET drops hot liquid plastic?"
p["aiQuery3"] = "Are bio-adhesives used on PLA clear sealing stickers certified biodegradable under ASTM D6400?"
p["aiQuery4"] = "How do I distinguish compostable packaging films from conventional plastic using a laboratory heat or burn test?"

# CTA
p["ctaTitle"] = "Ready to Elevate Your Packaging Integrity?"
p["ctaSubtitle"] = "Deploy certified compostable materials that stand up to the combustion test. Swap your standard conventional fossil-fuel plastic stickers for Pouch.eco's premium plant-based biopolymers today."
p["ctaBtn1"] = "Consult Eco Specialist"
p["ctaBtn2"] = "Request Samples Pack"

with open(LOCALES_FILE, 'w', encoding='utf-8') as f:
    json.dump(data, f, ensure_ascii=False, indent=4)

print("Successfully merged combustion test translation keys.")
