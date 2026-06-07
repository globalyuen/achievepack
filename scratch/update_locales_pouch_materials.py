import json
import os
import re

# Define paths
BASE_DIR = os.path.abspath(os.path.join(os.path.dirname(__file__), '..'))
LOCALES_FILE = os.path.join(BASE_DIR, 'src', 'locales', 'en.json')
MATERIALS_DIR = os.path.join(BASE_DIR, 'src', 'pages', 'pouch', 'materials')

# Translations dictionary
TRANSLATIONS = {
    "pouchBioPE": {
        "title": "Bio-PE Sustainable Packaging | Sugarcane Based | Pouch.eco",
        "description": "Sugarcane-derived Bio-PE packaging. Carbon negative production, fossil-free, and fully recyclable. The sustainable alternative to traditional plastic.",
        "keywords": "Bio-PE, sugarcane plastic, carbon negative packaging, sustainable pouches, green PE",
        "heroBadge": "BIO_BASED_PROTOCOL_V4",
        "heroTitle1": "Sugar.",
        "heroTitle2": "Not Oil.",
        "heroDescription": "Sugarcane-derived Bio-PE. Carbon negative. Fossil-free. 100% recyclable in standard LDPE/PE streams without contamination.",
        "heroCta1": "Request Bio-PE Samples",
        "heroCta2": "View Bio-PE Pouches",
        "lifecycleBadge": "LIFECYCLE_ADVANTAGE",
        "lifecycleTitle1": "Carbon",
        "lifecycleTitle2": "Negative",
        "lifecycleTitle3": "Impact.",
        "lifecycleDescription": "Bio-PE is produced from ethanol derived from sustainably grown sugarcane. Every ton of Bio-PE captures up to 3.09 tons of CO2 from the atmosphere during its growth cycle.",
        "lifecycleMetric1Label": "Carbon Footprint",
        "lifecycleMetric1Value": "-3.09kg CO2 per kg",
        "lifecycleMetric2Label": "Origin",
        "lifecycleMetric2Value": "100% Sugarcane Ethanol",
        "comparisonTitle": "The Performance Mirror",
        "comparisonSubtitle": "Bio-PE matches fossil-based PE 1:1 in drop-test and barrier performance.",
        "tableHeaderProperty": "PROPERTY",
        "tableHeaderBioPE": "SUGARCANE BIO-PE",
        "tableHeaderFossilPE": "FOSSIL-BASED PE",
        "tableHeaderMatch": "MATCH",
        "performanceData": {
            "tensileStrength": {
                "label": "Tensile Strength",
                "bio": "High (30MPa)",
                "fossil": "High (30MPa)"
            },
            "moistureBarrier": {
                "label": "Moisture Barrier",
                "bio": "Superior",
                "fossil": "Superior"
            },
            "heatSealability": {
                "label": "Heat Sealability",
                "bio": "110°C - 160°C",
                "fossil": "110°C - 160°C"
            },
            "foodSafety": {
                "label": "Food Safety",
                "bio": "FDA / EU Approved",
                "fossil": "FDA / EU Approved"
            }
        },
        "card1Title": "Verified Origin",
        "card1Description": "Certified by ASTM D6866, our Bio-PE is part of the \"I'm Green\" ecosystem, ensuring full traceability back to the sugarcane fields.",
        "card2Title": "Food Safe Compliance",
        "card2Description": "Fully FDA and EU food contact approved. Safe for liquid, oily, and dry foods without BPA or phthalates.",
        "card3Title": "Circular Ready",
        "card3Description": "Can be recycled in the existing PE recycling stream (Code 4). No special infrastructure needed for disposal.",
        "guideTitle": "The Ultimate Guide to",
        "guideTitleHighlight": "Bio-PE Packaging",
        "guideParagraph1": "As the world aggressively shifts away from fossil-fuel-based plastics, Bio-Polyethylene (Bio-PE) has emerged as a revolutionary drop-in replacement. Derived from renewable resources like sugarcane ethanol, Bio-PE represents a significant leap forward in sustainable flexible packaging. At POUCH.ECO, we harness the power of this plant-based plastic to create high-performance pouches that drastically reduce your brand's carbon footprint without compromising on durability or barrier properties.",
        "guideImage1Alt": "Bio-PE film structure showing renewable sugarcane origins",
        "guideSection1Title": "Carbon Negative Origins",
        "guideSection1Paragraph1": "The most compelling argument for Bio-PE is its origin story. Traditional polyethylene is synthesized from crude oil, a finite resource that releases massive amounts of CO2 during extraction and refinement. In stark contrast, the sugarcane used to produce Bio-PE actively absorbs CO2 from the atmosphere as it grows. This remarkable process means that the production of Bio-PE resin can have a negative carbon footprint from cradle to gate, actively contributing to the fight against climate change.",
        "guideSection1Paragraph2": "For brands deeply committed to Environmental, Social, and Governance (ESG) goals, switching to Bio-PE packaging provides a verifiable, measurable reduction in greenhouse gas emissions. You are not just making a superficial \"green\" claim; you are fundamentally changing the chemistry of your packaging supply chain.",
        "guideSection2Title": "A True Drop-In Replacement",
        "guideSection2Paragraph1": "A major hurdle in adopting sustainable packaging is often performance degradation. Fortunately, Bio-PE is chemically identical to conventional fossil-based polyethylene. It offers the exact same tensile strength, sealability, and printability. Whether you are packaging heavy pet food, sharp snacks, or liquid cosmetics, Bio-PE performs flawlessly on the filling line and on the retail shelf.",
        "guideImage2Alt": "Clear Bio-PE pouch structure for food packaging",
        "guideSection3Title": "Recyclability and End of Life",
        "guideSection3Paragraph1": "It is important to understand that while Bio-PE is made from plants, it is not biodegradable or compostable. It is designed to be durable. However, because it is chemically identical to standard PE, it is 100% recyclable in the exact same recycling streams (such as store drop-off programs for soft plastics). This allows it to participate fully in a circular economy, unlike many mixed-material plastics that are destined for the landfill.",
        "faqTitle": "Frequently Asked",
        "faqTitleHighlight": "Questions",
        "faq": {
            "q1": "What exactly is Bio-PE?",
            "a1": "Bio-PE, or biopolyethylene, is a plastic made from renewable biomass (like sugarcane) rather than fossil fuels. It has the same chemical properties as regular PE but a significantly lower carbon footprint.",
            "q2": "Is Bio-PE compostable?",
            "a2": "No, Bio-PE is not compostable or biodegradable. It is designed to be as durable as traditional plastic. However, it is fully recyclable in the same streams as standard polyethylene (PE).",
            "q3": "Does Bio-PE perform differently than regular plastic?",
            "a3": "No. Because Bio-PE is a \"drop-in\" replacement, it is chemically identical to fossil-based PE. It offers the exact same durability, moisture barrier, and seal strength as traditional plastic packaging.",
            "q4": "What is the minimum order for Bio-PE pouches?",
            "a4": "Through our digital printing technology, we offer low Minimum Order Quantities (MOQs) starting at just 500 units for fully custom printed Bio-PE pouches, making it accessible for startups and growing brands."
        },
        "ctaBadge": "SUSTAINABILITY_UPGRADE",
        "ctaTitle1": "Sweet.",
        "ctaTitle2": "Secure.",
        "ctaDescription": "Ready to ditch oil-based plastics? Transition your brand to Bio-PE and claim a carbon-negative profile today.",
        "ctaButton1": "Order Bio-PE Kit",
        "ctaButton2": "LCA Analysis Call"
    },
    "pouchCelloKraft": {
        "title": "Cello Kraft Triplex Pouches | Premium High-Barrier | Pouch.eco",
        "description": "Premium kraft pouches with clear window & aluminum foil. Perfect for coffee, supplements & organic products. 12-24 month shelf life. From 500 units!",
        "ogTitle": "Cello Kraft Triplex Pouches | Premium High-Barrier | Pouch.eco",
        "ogDescription": "Premium kraft pouches with clear window for coffee, supplements & organic products. From 500 units!",
        "twitterTitle": "Cello Kraft Triplex Pouches | Pouch.eco",
        "twitterDescription": "Premium kraft with clear window. 12-24 month shelf life.",
        "schemaProduct": "Cello Kraft Triplex Pouch",
        "schemaProductDesc": "Premium kraft paper pouches with clear cellophane window and aluminum foil barrier",
        "popularBadge": "POPULAR",
        "highBarrierBadge": "HIGH BARRIER",
        "heroTitle1": "Cello Kraft",
        "heroTitle2": "Triplex Pouch",
        "heroSubtitleIntro": "The perfect combo:",
        "heroSubtitle": " Natural kraft paper exterior with a clear window to show off your product, plus aluminum foil barrier for 12-24 months of freshness!",
        "heroCta1": "Get Samples",
        "heroCta2": "See Pricing",
        "ratingText": "4.8/5 from 87 brands",
        "moqValue": "500 units",
        "moqLabel": "Low MOQ",
        "heroImageAlt": "Cello Kraft Triplex Pouch with Clear Window",
        "loveTitle": "Why Brands ",
        "loveTitleHighlight": "Love It",
        "loveSubtitle": "It's not just packaging—it's how you make your first impression!",
        "features": {
            "naturalLook": {
                "title": "Natural Look",
                "desc": "Premium kraft paper exterior—customers love the eco-friendly vibe"
            },
            "longLasting": {
                "title": "Long Lasting",
                "desc": "12-24 months shelf life with aluminum foil protection"
            },
            "proGrade": {
                "title": "Pro Grade",
                "desc": "Same quality used by top coffee & supplement brands"
            },
            "ecoAppeal": {
                "title": "Eco Appeal",
                "desc": "Perfect for brands that care about sustainability"
            }
        },
        "techTitle": "The ",
        "techTitleHighlight": "Tech Details",
        "techSubtitle": "(Don't worry, we'll explain it in plain English!)",
        "whatsInsideTitle": "What's Inside?",
        "layerOuterTitle": "Outer Layer: Kraft Paper (100-140g)",
        "layerOuterDesc": "Natural, eco-friendly look your customers love",
        "layerWindowTitle": "Window: Clear Cellophane",
        "layerWindowDesc": "Show off your beautiful product!",
        "layerBarrierTitle": "Barrier: Aluminum Foil (25-40µm)",
        "layerBarrierDesc": "Blocks oxygen, moisture & light—keeps products fresh for 12-24 months",
        "layerInnerTitle": "Inner Layer: PE Sealant (60-80µm)",
        "layerInnerDesc": "Strong, airtight seal that doesn't leak",
        "protectionTitle": "Protection Power",
        "protectionMoistureTitle": "Moisture Protection",
        "protectionMoistureDesc": "Less than 0.5 g/m²/day (basically waterproof!)",
        "protectionOxygenTitle": "Oxygen Protection",
        "protectionOxygenDesc": "Less than 1.0 cc/m²/day (your products won't go stale)",
        "protectionShelfLifeTitle": "Shelf Life",
        "protectionShelfLifeDesc": "12-24+ months depending on your product",
        "protectionLightTitle": "Light Blocking",
        "protectionLightDesc": "100% opaque (except the window area)",
        "perfectTitle": "Perfect For Your Products",
        "perfectSubtitle": "If you sell any of these, this pouch is made for you!",
        "applications": {
            "app1": "Premium coffee beans",
            "app2": "Protein powder",
            "app3": "Supplements & vitamins",
            "app4": "Freeze-dried snacks",
            "app5": "Organic tea",
            "app6": "Pet treats",
            "app7": "Probiotics",
            "app8": "Emergency food",
            "app9": "Baby formula",
            "app10": "High-end spices"
        },
        "expertCardTitle": "Not Sure If It's Right for You?",
        "expertCardDesc": "Our packaging experts can help you choose the perfect material for your product. Free consultation, no pressure!",
        "expertCardCta": "Chat With an Expert",
        "ctaTitle1": "Ready to Start?",
        "ctaTitle2": "Order Just 500 Units!",
        "ctaSubtitle": "No crazy minimums. Fast turnaround. Perfect for startups & small brands.",
        "ctaPrice": "From $0.70/pouch · Includes custom printing",
        "ctaBtn1": "Get Free Samples",
        "ctaBtn2": "Download Spec Sheet"
    },
    "pouchCombustionSafetyTest": {
        "title": "Combustion Safety Test: PLA vs. PET Plastic | POUCH.ECO",
        "description": "Verify authentic biopolymer packaging using the Combustion Safety Test. Compare plant-based PLA (clean grass-ash scent, stable ash) vs. standard PET plastic (toxic dripping, acrid chemical smell).",
        "heroBadge": "LAB_PROTOCOL: TEST_COMBUST_01",
        "heroTitle1": "COMBUSTION",
        "heroTitle2": "SAFETY TEST:",
        "heroTitleHighlight": "PLA vs. PET",
        "heroDescription": "Protect your brand's environmental claims from greenwashing. A simple combustion safety test immediately distinguishes plant-based Compostable PLA (which burns cleanly with a mild grass-wood scent) from Conventional PET Plastic (which melts rapidly with severe toxic dripping and hazardous chemical fumes).",
        "heroCta1": "Book Free Consultation",
        "heroCta2": "View Lab Guide",
        "heroImageAlt": "Combustion Safety Test",
        "burnVerifiedBadge": "PLA_BURN_VERIFIED",
        "audienceBadge": "AUDIENCE_ALERT",
        "audienceTitle": "Is This Test For You?",
        "audienceCard1Title": "Procurement & QA",
        "audienceCard1Desc": "Verify supplier claims in-house. Protect your brand's integrity and eco-claims before mass-producing custom printed labels or bags.",
        "audienceCard1Badge": "Supplier Audit",
        "audienceCard2Title": "DTC Ecom Brands",
        "audienceCard2Desc": "Ensure zero microplastics. Guarantee your shipping labels and product box stickers break down naturally in standard industrial compost piles.",
        "audienceCard2Badge": "Zero Microplastics",
        "audienceCard3Title": "Sustainability Officers",
        "audienceCard3Desc": "Enforce strict compliance. Certify that materials satisfy international composting benchmarks (EN 13432 & ASTM D6400).",
        "audienceCard3Badge": "14-Week Composting",
        "scienceBadge": "SCIENCE_LAB",
        "scienceTitle1": "The Science of",
        "scienceTitle2": "Combustion",
        "scienceDesc1": "Plastics and plant-based biopolymers have radically different molecular architectures. Fossil fuel-based plastics are structured from long carbon chains with heavy chemical additives, while Polylactic Acid (PLA) is synthesized from fermented plant starch (primarily corn dextrose).",
        "scienceDesc2": "When exposed to an open flame, these distinct molecular structures react in highly specific, unforgeable ways. A standard combustion test evaluates three primary metrics:",
        "metric1Title": "1. Combustion Aroma",
        "metric1Desc": "Plants burn like wood or leaves. Synthetic conventional plastics emit vaporized petroleum, producing a toxic, highly offensive chemical signature.",
        "metric2Title": "2. Flame Behavior",
        "metric2Desc": "PLA burns with a clean, light yellow flame and steady combustion. PET curls back, melts instantly, and drips dangerous flaming droplets.",
        "metric3Title": "3. Post-Burn Residual",
        "metric3Desc": "PLA leaves a structurally solid, dry, and brittle ash edge that crushes to fine charcoal powder. Conventional PET hardens into a dense, solid, and glassy plastic bead.",
        "testBadge": "LAB_STANDARD_PROCEDURE",
        "testTitle1": "Step-by-Step",
        "testTitle2": "Combustion Guide",
        "testSubtitle": "Follow these steps in a safe, well-ventilated laboratory or outdoor environment.",
        "testStep1Title": "1. Preparation",
        "testStep1Desc": "Secure your testing specimen (a small strip of sticker material, container film, or liner) using metal tweezers. NEVER hold the material directly with your hands. Place a heat-resistant ceramic or glass dish underneath to catch any falling residue.",
        "testStep2Title": "2. Ignition",
        "testStep2Desc": "Bring a standard utility lighter flame to the bottom edge of the sample. Hold it there for 2-3 seconds until ignition is sustained, then withdraw the heat source.",
        "testStep3Title": "3. Observation",
        "testStep3Desc": "Evaluate the visual traits of the flame, note the physical behavior of the material (curling, melting, dripping), and cautiously fan the rising fumes towards your nose to detect the scent profile.",
        "testStep4Title": "4. Extinction & Analysis",
        "testStep4Desc": "Blow out the flame or let the material self-extinguish into the ceramic dish. Once completely cool, inspect the remaining edge to determine if it has turned to ash or a hardened plastic bead.",
        "safetyBadge": "SAFETY_FIRST",
        "safetyTitle": "Laboratory Safety Rules",
        "safetyRule1": "Perform tests ONLY in a well-ventilated space, under a laboratory fume hood, or outdoors.",
        "safetyRule2": "Always keep a fire extinguisher or bucket of water nearby.",
        "safetyRule3": "Wear protective safety glasses and heat-resistant gloves.",
        "safetyRule4": "Never touch molten plastic drippings—they will cause severe thermal burns.",
        "comparisonBadge": "THE_RELIABILITY_INDEX",
        "comparisonTitle": "The Combustion Blueprint",
        "comparisonSubtitle": "Compare the reaction profiles of biopolymers vs. petrochemical films.",
        "tableHeaderFeature": "TEST FEATURE",
        "tableHeaderPLA": "PLA BIOPOLYMER",
        "tableHeaderPET": "CONVENTIONAL PET PLASTIC",
        "rowAroma": "Combustion Aroma",
        "rowAromaPLA": "Sweet, caramel, or clean wood-ash scent (like burning grass)",
        "rowAromaPET": "Acrid, chemical, and heavily offensive petroleum/plastic odor",
        "rowFlame": "Flame Behavior",
        "rowFlamePLA": "Clean, light yellow/blue flame. Burns steadily without black smoke",
        "rowFlamePET": "Intense dark yellow flame. Emits heavy soot and black smoke",
        "rowMelt": "Melting & Dripping",
        "rowMeltPLA": "Does not drip. The material burns directly into carbon residue",
        "rowMeltPET": "Melts rapidly, curls back, and drops blazing liquid beads",
        "rowAsh": "Post-Burn Ash",
        "rowAshPLA": "Solid, brittle black/grey ash. Crumbles easily between fingers",
        "rowAshPET": "Hardened, smooth, glassy dark plastic bead. Cannot be crumbled",
        "infographicBadge": "BIO_STICKER_INTEGRITY",
        "infographicTitle": "PLA Sticker Anatomy",
        "infographicDesc": "Our compostable stickers are engineered from 3 distinct layers that break down fully without toxic residues:",
        "stickerLayer1Title": "Compostable Surface Film",
        "stickerLayer1Desc": "Coated surface optimized for crisp eco-inks",
        "stickerLayer2Title": "TUV OK Home Bio-Adhesive",
        "stickerLayer2Desc": "Backyard-degradable adhesive that holds tight",
        "stickerLayer3Title": "Recyclable Glassine Liner",
        "stickerLayer3Desc": "Silicone-free paper base for smooth application",
        "faqTitle": "Frequently Asked",
        "faqTitleHighlight": "Questions",
        "faq": {
            "q1": "Is burning PLA toxic to inhale?",
            "a1": "Unlike synthetic plastics like PET or PVC which release toxic, highly carcinogenic vapors (such as benzene and acid gases), burning pure PLA primarily yields carbon dioxide (CO₂) and water vapour. It releases a mild, non-offensive plant/wood ash scent. However, as with all combustion events, we recommend performing tests in a well-ventilated space.",
            "q2": "Why does PLA form carbon ash while PET melts into plastic beads?",
            "a2": "PLA is synthesized from plant carbohydrates. When it burns, the carbon-oxygen-hydrogen structures convert directly into ash, resembling burning paper or grass. PET is an engineered petroleum derivative designed for crystalline durability; upon heating, it undergoes a rapid thermal transition back into its liquid polymer form, dropping molten flame beads.",
            "q3": "Is the adhesive on your PLA stickers compostable as well?",
            "a3": "Yes, absolutely. A sticker is only as compostable as its weakest link. AchievePack / Pouch.eco clear stickers use a certified, custom-formulated bio-adhesive. It decomposes in <=14 weeks, leaves zero microplastics, and meets all strict international composting protocols (EN 13432 and ASTM D6400).",
            "q4": "Will PLA sealing stickers melt on my package in hot cargo shipping?",
            "a4": "No. While PLA has a lower melting point than PET, it remains fully stable up to 55°C (131°F). Standard cargo containers rarely exceed 45°C. Pouch.eco stickers are engineered with excellent heat resistance, holding strong integrity in transit while maintaining rapid breakdown when exposed to industrial compost facilities."
        },
        "ctaBadge": "VERIFY_YOUR_SOURCE",
        "ctaTitle1": "Audit Your",
        "ctaTitle2": "Packaging",
        "ctaDesc": "Unsure if your current packaging is truly biodegradable or greenwashed? Let our engineering team run a laboratory combustion and compliance audit on your samples.",
        "ctaButton1": "Request Laboratory Audit",
        "ctaButton2": "Get Sample Kit"
    },
    "pouchCompostable": {
        "title": "Compostable Packaging - Zero Waste Solutions | POUCH.ECO",
        "description": "Certified compostable packaging solutions for startups. EN 13432 and ASTM D6400 compliant. Low MOQ 500 units. High-barrier plant-based pouches.",
        "heroBadge": "MATERIAL_CLASS: BIO_01",
        "heroTitle1": "Zero.",
        "heroTitle2": "Waste.",
        "heroTitleHighlight": "Future.",
        "heroDescription": "> Plant-based materials.\n> Certified circularity.\n> High performance barrier.",
        "heroCta1": "Consult Now",
        "heroCta2": "View Certs",
        "bpiCertBadge": "BPI_CERT_ACTIVE",
        "scienceTitle1": "The Science of",
        "scienceTitle2": "Degradation",
        "scienceDesc": "Our compostable pouches are engineered from renewable resources like corn starch, wood pulp, and sugarcane. They break down into water, CO2, and biomass within 90-180 days in commercial composting environments.",
        "homeCompostTitle": "Home",
        "homeCompostDesc": "Degrades in garden composters",
        "industrialCompostTitle": "Industrial",
        "industrialCompostDesc": "Degrades in city-run facilities",
        "certifiedBadge": "Certified Protocol",
        "cert1Desc": "European Standard for compostable packaging",
        "cert2Desc": "US Standard for biodegradable materials",
        "cert3Desc": "Biodegradable Products Institute certified",
        "cert4Desc": "TÜV AUSTRIA Home & Industrial certification",
        "guideTitle": "The Ultimate Guide to",
        "guideTitleHighlight": "Compostable Packaging",
        "guideDesc1": "The packaging industry is at a critical turning point. With plastic pollution becoming an undeniable global crisis, consumers are demanding brands take accountability for their environmental footprint. Compostable packaging is no longer a niche trend; it is the definitive solution for the future of FMCG (Fast-Moving Consumer Goods). At POUCH.ECO, we engineer certified compostable pouches that offer the barrier protection your product needs and the end-of-life solution the planet deserves.",
        "guideImage1Alt": "Infographic showing the breakdown of compostable packaging in a home compost bin",
        "guideSection1Title": "Home Compostable vs. Industrial Compostable",
        "guideSection1Paragraph1": "It is crucial for brands to understand the difference between the two primary types of compostable packaging. Industrial compostable materials (often PLA-based) require specific conditions—high temperatures (around 60°C/140°F), specific humidity levels, and specialized microbes—to break down. These conditions are typically only found in commercial composting facilities, which are not accessible to all consumers.",
        "guideSection1Paragraph2": "Our flagship solution is Home Compostable packaging. Certified by TUV Austria (OK Compost Home), these materials are formulated from plant-based polymers like cellulose and starch that can break down a standard backyard compost bin at ambient temperatures. Within 180 days, the packaging decomposes entirely into water, CO2, and nutrient-rich biomass, leaving zero microplastics or toxic residue behind.",
        "guideSection2Title": "Overcoming the Barrier Challenge",
        "guideSection2Paragraph1": "Historically, compostable materials suffered from poor barrier properties, making them unsuitable for products that are sensitive to moisture or oxygen (like coffee, crispy snacks, or pet kibble). We have solved this issue.",
        "guideImage2Alt": "Premium sustainable packaging providing high barrier protection",
        "guideSection2Paragraph2": "Through advanced lamination techniques and proprietary plant-based metallization, our high-barrier compostable pouches achieve an Oxygen Transmission Rate (OTR) and Water Vapor Transmission Rate (WVTR) that rival traditional multi-layer plastics and aluminum foil. Your products stay fresh, crunchy, and aromatic throughout their entire shelf life.",
        "guideSection3Title": "The Circular Economy in Action",
        "guideSection3Paragraph1": "Adopting compostable packaging is a powerful way to align your brand with the principles of the Circular Economy. Instead of a linear \"take-make-dispose\" model, our packaging follows a \"grow-make-return\" cycle. The plants used to create our films absorb CO2 during growth. After fulfilling their purpose as premium packaging, they return to the earth as compost, which can then be used to grow more plants. This closed-loop system is the gold standard of sustainability.",
        "faqTitle": "Frequently Asked",
        "faqTitleHighlight": "Questions",
        "faq": {
            "q1": "What certifications do your compostable pouches hold?",
            "a1": "Our home compostable materials are certified by TUV Austria (OK Compost Home) and meet the stringent European standard EN 13432 as well as the American standard ASTM D6400.",
            "q2": "How long does it take for a home compostable bag to break down?",
            "a2": "Under standard home composting conditions (ambient temperature, presence of moisture and microorganisms), our pouches break down into organic biomass within 180 days.",
            "q3": "Are the zippers and valves also compostable? Do I need to rip them off?",
            "a3": "Yes! Every single component of our compostable pouches—including the press-to-close zippers, coffee degassing valves, and tear notches—is made from certified compostable materials. You DO NOT need to rip off the zipper or remove the valve before composting. Just toss the entire empty bag directly into your compost bin!",
            "q4": "Can I print my brand design on compostable bags?",
            "a4": "Absolutely. We use state-of-the-art digital printing with compostable, low-migration inks to print high-resolution graphics, vibrant colors, and sharp text directly onto the packaging."
        },
        "ctaTitle": "Join the Circle",
        "ctaDesc": "Switch your brand to compostable packaging and lead the zero-waste movement.",
        "ctaButton1": "Start My Project",
        "ctaButton2": "Request Samples"
    },
    "pouchHomeCompostable": {
        "title": "Home Compostable Packaging | TUV OK Home Certified | Pouch.eco",
        "description": "Certified home compostable pouches. Breaks down in your backyard compost bin within 180 days. TUV OK Home certified, food-safe, and high-barrier.",
        "heroBadge": "HOME_COMPOST_READY_V2.0",
        "heroTitle1": "Back.",
        "heroTitle2": "Yard.",
        "heroTitleHighlight": "Soil.",
        "heroDescription": "TUV OK Home Certified. Breaks down in 180 days in ambient backyard conditions. No industrial heat, no chemical catalysts—just biology.",
        "heroCta1": "Order Home Samples",
        "heroCta2": "Shop Home Compostable",
        "comparisonBadge": "LOW_TEMPERATURE_BREAKDOWN",
        "comparisonTitle": "Beyond",
        "comparisonTitleHighlight": "Industrial.",
        "comparisonDescription": "Standard \"compostable\" plastics require 60°C+ industrial facilities. Our Home Compostable range is engineered for the 20-30°C temperature profile of a residential compost bin.",
        "comparisonBoxTitle": "The Barrier Breakthrough",
        "comparisonBoxDesc": "We've successfully layered home-compostable cellulose with bio-polymers to achieve high moisture barriers previously only possible in industrial-only or fossil-based films.",
        "timelineTitle": "Backyard Lifecycle",
        "timelineStages": {
            "stage0": { "day": "Day 0", "status": "Intact", "desc": "Pouch enters home compost bin (20-30°C)." },
            "stage1": { "day": "Day 45", "status": "Fragmentation", "desc": "Structural integrity begins to fail. Microbes colonize surface." },
            "stage2": { "day": "Day 120", "status": "Bio-Assimilation", "desc": "Visible pieces vanish. Material converted to CO2, water, & biomass." },
            "stage3": { "day": "Day 180", "status": "Soil Nutrients", "desc": "Fully assimilated. No microplastics or toxic residues remain." }
        },
        "card1Title": "TUV OK Home",
        "card1Description": "The gold standard. Guarantees complete biodegradation in backyard compost within 6 months, including zippers and valves.",
        "card2Title": "ABA AS 5810",
        "card2Description": "Australian standard compliance for home compostability, ensuring non-toxicity to worms and soil biology.",
        "card3Title": "EN 13432",
        "card3Description": "While industrial-focused, our home materials exceed all chemical and safety requirements of the EN 13432 directive.",
        "ctaBadge": "SOIL_FRIENDLY",
        "ctaTitle1": "Soil.",
        "ctaTitle2": "Not Waste.",
        "ctaDescription": "Ready to give your customers the ultimate eco-experience? Transition to Home Compostable pouches and lead the backyard revolution.",
        "ctaButton1": "Get Home Kit",
        "ctaButton2": "Backyard Strategy Call"
    },
    "pouchIndustrialCompostable": {
        "title": "Industrial Compostable Packaging | EN 13432 | Pouch.eco",
        "description": "Certified industrial compostable pouches. Optimized for commercial composting facilities. High-barrier, heat-sealable, and perfect for mass-market food products.",
        "heroBadge": "INDUSTRIAL_EFFICIENCY_V4.0",
        "heroTitle1": "Scale.",
        "heroTitle2": "Heat.",
        "heroTitleHighlight": "Soil.",
        "heroDescription": "EN 13432 & ASTM D6400 Certified. Engineered for city-wide commercial composting networks. High-performance sustainable barriers for mass retail.",
        "heroCta1": "Request Industrial Samples",
        "heroCta2": "View Eco Catalog",
        "capabilities": {
            "shelfStability": {
                "label": "Shelf Stability",
                "value": "12-24 Months",
                "desc": "Superior barrier structures compared to home-compostable variants."
            },
            "heatResistance": {
                "label": "Heat Resistance",
                "value": "Up to 90°C",
                "desc": "Capable of withstanding higher filling temperatures and hot environments."
            },
            "printingClarity": {
                "label": "Printing Clarity",
                "value": "Photo-Realistic",
                "desc": "Surface quality optimized for high-density flexo and digital inks."
            },
            "globalCompliance": {
                "label": "Global Compliance",
                "value": "BPI / EN13432",
                "desc": "Standardized for city-wide composting programs across USA, UK, and EU."
            }
        },
        "lifecycleBadge": "SCALABLE_BIO_LOOP",
        "lifecycleTitle1": "Built for",
        "lifecycleTitle2": "City-Wide",
        "lifecycleTitleHighlight": "Impact.",
        "lifecycleDescription": "Industrial composting facilities provide the managed heat (60°C+) and precise microbial conditions required to break down high-performance bio-polymers like PLA and PBS. This allows us to create pouches with superior oil and moisture resistance that still return to soil.",
        "facilityTitle": "Facility Compatible",
        "facilityDesc": "Standardized for global municipal green bin programs.",
        "fillTitle": "High Fill Temps",
        "fillDesc": "Safe for hot-fill products up to 90°C.",
        "certTitle": "Verified Pathways",
        "certSubtitle": "Accepted by retailers and cities worldwide.",
        "cert1Title": "BPI",
        "cert1Desc": "North American Industrial Standard",
        "cert2Title": "EN 13432",
        "cert2Desc": "European Union Compostable Mandate",
        "cert3Title": "TUV IND",
        "cert3Desc": "OK Industrial Compost Certified",
        "ctaBadge": "UPGRADE_TO_INDUSTRIAL",
        "ctaTitle1": "Global Ready.",
        "ctaTitle2": "Soil Safe.",
        "ctaDescription": "Ready to bring certified industrial-compostable solutions to your retail lineup? Partner with us for high-barrier performance that returns to earth.",
        "ctaButton1": "Request Samples",
        "ctaButton2": "Scale Consultation"
    },
    "pouchKraftDuplex": {
        "title": "Kraft Paper Stand Up Pouches - Duplex High-Barrier | Pouch.eco",
        "description": "Premium wholesale duplex kraft paper stand-up pouches. Natural earthy aesthetic, high moisture barrier lining, and food-safe heat seal layer. Startup MOQ 500 units.",
        "popularBadge": "POPULAR",
        "naturalAestheticBadge": "NATURAL AESTHETIC",
        "heroTitle1": "Kraft Duplex",
        "heroTitle2": "Stand Up Pouch",
        "heroSubtitle": "The artisan's choice. Natural unbleached kraft paper exterior with high-barrier interior lamination. Keeps coffee, snacks, and tea aromatic and moisture-free.",
        "heroCta1": "Request Kraft Samples",
        "heroCta2": "Download Tech Specs",
        "starsLabel": "4.9/5 from 140+ brands",
        "moqValue": "500 units",
        "moqLabel": "Low MOQ",
        "barrierBadge": "DUPLEX_BARRIER_V3",
        "barrierTitle1": "Artisan Style.",
        "barrierTitle2": "Airtight Seal.",
        "barrierDescription": "Don't sacrifice product freshness for raw design. Our Duplex Kraft pouches feature a micro-thin high-barrier lining that blocks humidity and oxygen while displaying a tactile organic exterior.",
        "check1": "Aqueous Coating or Biodegradable Inner Linings",
        "check2": "Heavy Duty Airtight Resealable Zippers",
        "whatsInsideTitle": "What's Inside?",
        "layerOuter": "Outer Layer: Organic Kraft (120g)",
        "layerOuterDesc": "Tactile, raw feel made from sustainably-managed FSC wood pulp.",
        "layerBarrier": "Barrier Layer: EVOH / PET Lamination",
        "layerBarrierDesc": "Blocks moisture, odors, and atmospheric oxygen to prevent spoilage.",
        "layerInner": "Inner Sealant: LLDPE Food-Grade",
        "layerInnerDesc": "Lower-temperature melting point ensures fast heat-sealing on production lines.",
        "layerAdhesive": "Adhesive: Solvent-Free Polyurethane",
        "layerAdhesiveDesc": "Zero chemical migration, completely safe for baby foods and powders.",
        "perfectTitle": "Perfect For Food & Retail",
        "perfectSubtitle": "Organic products thrive in Duplex Kraft structures.",
        "applications": {
            "app1": "Organic Coffee Beans",
            "app2": "Loose Leaf Herbal Tea",
            "app3": "Granola & Rolled Oats",
            "app4": "Dehydrated Pet Kibble",
            "app5": "Gourmet Spices & Salts",
            "app6": "Artisan Baking Flours",
            "app7": "Superfood Protein Blends",
            "app8": "Dried Fruit Snacks",
            "app9": "Handmade Organic Soaps",
            "app10": "Premium Bath Salts"
        },
        "expertCardTitle": "Need Transparent Windows?",
        "expertCardDesc": "We can add custom rectangular, oval, or die-cut windows so consumers can see your product inside. Consult our design desk.",
        "expertCardCta": "Discuss Window Styles",
        "ctaTitle1": "Ready to Start?",
        "ctaTitle2": "Low MOQ 500 Pcs.",
        "ctaDescription": "Level up your brand's shelf presentation. Order custom sizes, zippers, and window placements with low startup quantities.",
        "ctaPrice": "Starting from $0.45/pouch · High-resolution digital prints",
        "ctaBtn1": "Get Free Sample Pack",
        "ctaBtn2": "Talk to Packaging Engineer"
    },
    "pouchKraftHighBarrier": {
        "title": "Kraft Paper Pouches - High Barrier Triplex | Pouch.eco",
        "description": "Technical guide to kraft paper stand-up pouches with ultimate high-barrier aluminum and VM-PET layers. Maximum shelf life up to 24 months. MOQ 500 units.",
        "popularBadge": "POPULAR",
        "maxBarrierBadge": "MAXIMUM SHIELD",
        "heroTitle1": "Kraft Triplex",
        "heroTitle2": "Max Shield Pouch",
        "heroSubtitle": "The ultimate shield. Combines natural organic kraft paper with high-barrier metalized core layers. Extends roasted coffee and sensitive foods' shelf life up to 2 years.",
        "heroCta1": "Request Max Samples",
        "heroCta2": "Download Barrier Data",
        "ratingText": "4.9/5 from 210+ roasters",
        "moqValue": "500 units",
        "moqLabel": "Low MOQ",
        "shieldBadge": "TRIPLEX_SHIELD_V4",
        "shieldTitle1": "Maximum",
        "shieldTitle2": "Atmospheric",
        "shieldTitleHighlight": "Shield.",
        "shieldDescription": "Sensitive ingredients like coffee, sports nutrition, and milk powders oxidize rapidly. Our Kraft Triplex laminate features an embedded metalized layer, creating a zero-permeability shield against light, gas, and humidity.",
        "check1": "WVTR < 0.1 g/m²/day (Ultimate Moisture Resistance)",
        "check2": "OTR < 0.1 cc/m²/day (Oxygen Proof Lamination)",
        "whatsInsideTitle": "What's Inside?",
        "layerOuter": "Outer Layer: Tactile Kraft (120g)",
        "layerOuterDesc": "Premium raw feel that establishes organic brand credibility.",
        "layerBarrier": "Barrier Layer: Aluminum / VM-PET Foil",
        "layerBarrierDesc": "Creates a dense metallic barrier that blocks 100% of light and gas.",
        "layerInner": "Inner Sealant: Linear Low-Density PE",
        "layerInnerDesc": "Ensures airtight seal integrity and high burst strength under pressure.",
        "layerAdhesive": "Adhesive: High-Molecular Solvent-Free",
        "layerAdhesiveDesc": "Industrial-strength bonding agent that prevents delamination.",
        "perfectTitle": "Perfect For Sensitive Products",
        "perfectSubtitle": "Products that need ultimate shelf life thrive in Kraft Triplex.",
        "applications": {
            "app1": "Freshly Roasted Coffee",
            "app2": "Organic Whey Protein",
            "app3": "Finely Ground Matcha",
            "app4": "Vitamin & Mineral Powders",
            "app5": "Nutritious Baby Formulas",
            "app6": "Freeze-Dried Fruit Powders",
            "app7": "Active Dry Yeast",
            "app8": "Raw Cacao Powders",
            "app9": "Sensitive Pharmaceutical Powders",
            "app10": "Premium Pet Supplements"
        },
        "expertCardTitle": "Need Coffee Degassing Valves?",
        "expertCardDesc": "We install premium one-way degassing valves to release carbon dioxide pressure while preventing ambient air from entering. Essential for roasted coffee.",
        "expertCardCta": "Discuss Valve Options",
        "ctaTitle1": "Ready to Start?",
        "ctaTitle2": "Low MOQ 500 Pcs.",
        "ctaDescription": "Get ultimate product freshness without the huge volume commitments. Custom digital printing, zippers, and tear notches included.",
        "ctaPrice": "Starting from $0.55/pouch · Full-bleed high-res graphics",
        "ctaBtn1": "Get Free Sample Pack",
        "ctaBtn2": "Talk to Barrier Engineer"
    },
    "pouchPCR": {
        "title": "PCR Recycled Packaging | Post-Consumer Content | Pouch.eco",
        "description": "Sustainable packaging with 30-100% PCR (Post-Consumer Recycled) plastic. Reduce virgin plastic use and meet global circular economy mandates. FDA food-safe approved.",
        "keywords": "PCR plastic, recycled pouch, post-consumer recycled, circular economy packaging, GRS certified",
        "heroBadge": "CIRCULAR_LOOP_V5.0",
        "heroTitle1": "Waste.",
        "heroTitle2": "Woven.",
        "heroTitleHighlight": "New.",
        "heroDescription": "Post-Consumer Recycled (PCR) content. 30-100% recycled plastic. High-barrier, food-safe, and planet-ready for the circular economy.",
        "heroCta1": "Get PCR Samples",
        "heroCta2": "View PCR Catalog",
        "valueChainBadge": "THE_VALUE_CHAIN",
        "valueChainTitle1": "Closing",
        "valueChainTitle2": "The Loop.",
        "valueChainDescription": "PCR gives a second life to plastic waste that would otherwise end up in landfills or oceans. By incorporating 30% to 100% PCR content into your pouches, you directly fund the global recycling infrastructure.",
        "valueChainCheck1": "Mandate Compliant: UK Plastic Tax & EU PPWR",
        "valueChainCheck2": "Post-Consumer Waste Diverted: 2.5 Tons/Order (Avg)",
        "valueChainImageAlt": "PCR Circular Economy",
        "matrixTitle": "PCR Grade Matrix",
        "thPercentage": "PCR PERCENTAGE",
        "thUseCase": "BEST USE CASE",
        "thTaxImpact": "TAX IMPACT",
        "thClarityLevel": "CLARITY LEVEL",
        "matrix30": { "pct": "30% PCR", "use": "Mainstream Retail", "tax": "UK Tax Exempt", "clarity": "High (95%)" },
        "matrix50": { "pct": "50% PCR", "use": "DTC & E-commerce", "tax": "Tax Exempt + Rebates", "clarity": "Medium (85%)" },
        "matrix100": { "pct": "100% PCR", "use": "Eco-Pioneer Brands", "tax": "Max Sustainability Credits", "clarity": "Matte/Opaque (70%)" },
        "benefits": {
            "virginReduction": {
                "title": "Virgin Plastic Reduction",
                "desc": "Up to 100% reduction in the use of fossil-fuel derived virgin plastics."
            },
            "carbonSavings": {
                "title": "Carbon Savings",
                "desc": "Up to 25% lower carbon footprint compared to standard plastic pouches."
            },
            "fdaFoodSafe": {
                "title": "FDA Food Safe",
                "desc": "Medical-grade decontamination ensures PCR is safe for food contact applications."
            },
            "grsCertified": {
                "title": "GRS Certified",
                "desc": "Verified by the Global Recycled Standard for chain of custody and social responsibility."
            }
        },
        "guideTitle": "The Ultimate Guide to",
        "guideTitleHighlight": "PCR Packaging",
        "guideParagraph1": "As consumers and regulatory bodies increasingly push for sustainable alternatives to virgin plastics, Post-Consumer Recycled (PCR) packaging has become a cornerstone of the circular economy. PCR packaging is manufactured using plastics that have already been used by consumers, collected through recycling programs, cleaned, melted down, and repurposed into new film. At POUCH.ECO, we utilize advanced PCR materials to help brands reduce their reliance on new fossil fuels while maintaining premium packaging aesthetics.",
        "guideImage1Alt": "Diagram explaining the circular lifecycle of Post-Consumer Recycled packaging",
        "guideSection1Title": "Why Choose PCR Over Virgin Plastic?",
        "guideSection1Paragraph1": "The primary benefit of PCR packaging is its immediate impact on carbon emissions and plastic waste. By utilizing recycled content, you are diverting plastic from landfills and oceans. Manufacturing PCR resins requires significantly less energy and water compared to producing virgin plastics from crude oil. This translates to a lower overall carbon footprint for your product packaging.",
        "guideSection1Paragraph2": "Furthermore, incorporating PCR materials signals to your customers that your brand is actively participating in environmental stewardship. In regions with strict plastic packaging taxes (like the UK and parts of the EU), using a high percentage of PCR content can also yield significant financial savings by exempting your brand from these taxes.",
        "guideSection2Title": "Addressing the \"Cloudy\" PCR Myth",
        "guideSection2Paragraph1": "Historically, a major drawback of PCR films was their appearance. Early iterations of recycled plastics often had a cloudy, yellowish, or inconsistent visual profile, making them unsuitable for premium brands that required high-clarity windows or vibrant printing.",
        "guideImage2Alt": "Clear PCR pouch demonstrating high transparency and print quality",
        "guideSection2Paragraph2": "Advancements in sorting and purification technologies have changed the game. Our modern PCR films boast excellent clarity and consistency. We use high-quality, FDA-approved PCR resins (typically rPET or rPE) sandwiched between thin layers of virgin material or functional barriers. This ensures that your custom artwork prints flawlessly, the colors pop, and any transparent windows remain crystal clear, showcasing your product perfectly.",
        "guideSection3Title": "Food Safety and PCR",
        "guideSection3Paragraph1": "A common concern regarding recycled plastics is food safety. Can you package consumables in plastic that was previously used? The answer is yes, provided the correct technologies are used. We utilize FDA Letter of No Objection (LNO) certified PCR resins. Through advanced super-cleaning processes, any potential contaminants from the plastic's previous life are completely removed. For added safety, the PCR layer is often encapsulated within the structural layers of the pouch, ensuring it never comes into direct contact with the food product.",
        "faqTitle": "Frequently Asked",
        "faqTitleHighlight": "Questions",
        "faq": {
            "q1": "What does PCR stand for?",
            "a1": "PCR stands for Post-Consumer Recycled. It refers to plastic materials that have been used by end consumers, disposed of in recycling bins, and then processed into new raw materials.",
            "q2": "Is your PCR packaging food safe?",
            "a2": "Yes. We use FDA-approved PCR resins that have undergone rigorous super-cleaning processes. To guarantee absolute safety, the recycled content is often layered between virgin materials, meaning it never directly touches your food product.",
            "q3": "Can I claim 100% PCR content?",
            "a3": "To maintain the structural integrity, sealability, and food safety of the pouch, it is currently impossible to make a flexible pouch from 100% PCR. Our high-performance pouches typically utilize between 30% and 50% PCR content by weight.",
            "q4": "Are PCR pouches recyclable?",
            "a4": "Yes, our mono-material PCR pouches (like our PE/PE structures) are fully recyclable at store drop-off locations. This means your packaging can be recycled again, continuing the circular lifecycle."
        },
        "ctaBadge": "JOIN_THE_LOOP",
        "ctaTitle1": "Waste.",
        "ctaTitle2": "New Again.",
        "ctaDescription": "Ready to lead the circular economy? Transition your brand to PCR content and eliminate virgin plastic from your supply chain.",
        "ctaButton1": "Get PCR Samples",
        "ctaButton2": "Circular Strategy Call"
    },
    "pouchPlasticFreeKraft": {
        "title": "Is Kraft Paper Plastic-Free? Fun Facts & Reality | POUCH.ECO",
        "description": "Discover if kraft paper bags are truly plastic-free. Learn about hidden PE linings, the role of compostable PLA, and 5 fun facts about sustainable packaging.",
        "keywords": "kraft paper bag plastic free, compostable kraft pouches, PLA lining kraft, sustainable packaging facts, Pouch.eco",
        "heroBadge": "DEBUNKING_MYTHS: KRAFT_VS_PLASTIC",
        "heroTitle1": "Paper.",
        "heroTitle2": "Or.",
        "heroTitleHighlight": "Plastic?",
        "heroDescription": "> Is Kraft paper truly plastic-free?\n> The hidden truth about linings.\n> 5 fun facts you MUST know.",
        "heroCta1": "Ask an Expert",
        "heroCta2": "View Materials",
        "heroImageAlt": "Kraft Paper Pouch",
        "heroBadge2": "HIDDEN_LINING_DETECTED",
        "realityTitle1": "The Kraft",
        "realityTitle2": "Reality Check",
        "realityDesc": "Most kraft paper bags are laminated. That \"natural\" brown exterior often hides a layer of PE (Polyethylene) or PP (Polypropylene) inside. Why? Because paper alone can't keep air out or oil in.",
        "greenwashingBadge": "Greenwashing Alert",
        "factsTitle": "5 Fun Facts",
        "facts": {
            "fact1": { "title": "Strength First", "desc": "Kraft = \"Strength\" in German. Engineered for durability, not just eco-looks." },
            "fact2": { "title": "Recycling Fail", "desc": "Plastic-lined paper is nearly impossible to recycle. It's a hybrid monster." },
            "fact3": { "title": "PLA is King", "desc": "Truly plastic-free bags use PLA lining made from plant starch." },
            "fact4": { "title": "Brown vs White", "desc": "Brown kraft is unbleached; white is bleached for high-impact print." },
            "fact5": { "title": "New Laws", "desc": "California SB 54 is banning non-compostable hybrid materials." }
        },
        "tableTitle": "Truth Table",
        "thType": "Type",
        "thLining": "Lining",
        "thPlasticFree": "Plastic-Free?",
        "thCompostable": "Compostable?",
        "row1": { "type": "Standard Kraft", "lining": "PE / PP", "plasticFree": "NO", "compostable": "NO" },
        "row2": { "type": "Recyclable Kraft", "lining": "Aqueous", "plasticFree": "PARTIAL", "compostable": "DEPENDS" },
        "row3": { "type": "Bio-Kraft", "lining": "PLA / PBS", "plasticFree": "YES", "compostable": "YES" },
        "aiBadge": "AI_SEARCH_TIPS",
        "aiIntro": "Try asking Gemini or ChatGPT:",
        "aiQueries": [
            "Which kraft pouches are truly plastic-free?",
            "Is PLA-lined paper better than PE-lined paper?",
            "Certified compostable kraft pouches with low MOQ",
            "How to spot greenwashing in paper bags"
        ],
        "futureTitle1": "The Future",
        "futureTitle2": "is Circular",
        "futureDesc": "Stop settling for \"eco-looking\" packaging. At Pouch.eco, we provide the technical data and certifications to prove your brand is truly plastic-free.",
        "futureBadge1": "BPI_CERTIFIED",
        "futureBadge2": "EN_13432",
        "futureBadge3": "HOME_COMPOST",
        "ctaTitle1": "Audit Your",
        "ctaTitle2": "Packaging",
        "ctaDesc": "Is your current kraft bag a plastic hybrid? Let's fix that.",
        "ctaBtn1": "Start Audit",
        "ctaBtn2": "Request Samples"
    },
    "pouchRecyclableMonoPE": {
        "title": "Recyclable Stand Up Pouches - Certified Mono-PE Single-Material Packaging | Pouch.eco",
        "description": "Technical guide to factory-direct recyclable mono-PE flexible pouches. FDA-compliant, curbside LDPE #4 recyclability, and EVOH gas barrier layers with startup MOQ 500.",
        "keywords": "mono-PE pouch, recyclable pouch, single material packaging, PE recyclable, sustainable flexible packaging, mono material pouch, recyclable stand up pouch, polyethylene pouch",
        "schemaProduct": "Recyclable Mono-PE Pouch",
        "schemaProductDesc": "Single-polymer Polyethylene stand-up pouches with EVOH high gas barrier, curbside recyclable",
        "schemaOfferPrice": "0.45",
        "schemaOfferCurrency": "USD",
        "schemaRatingValue": "4.9",
        "schemaReviewCount": "112",
        "faq1Question": "What is a mono-PE recyclable pouch?",
        "faq1Answer": "A mono-PE pouch is constructed entirely from a single polymer category (Polyethylene), making it 100% recyclable in curbside and retail drop-off streams, unlike conventional multi-layer laminates which go straight to landfill.",
        "faq2Question": "What is the minimum order quantity (MOQ)?",
        "faq2Answer": "We offer a low MOQ of just 500 units for custom printed recyclable mono-PE stand-up pouches using digital printing, with zero plate setup costs.",
        "faq3Question": "Can mono-PE achieve a high barrier for coffee and snacks?",
        "faq3Answer": "Yes! By co-extruding a micro-thin layer of EVOH (Ethylene Vinyl Alcohol) gas barrier, we achieve superior oxygen and moisture barrier performance, extending shelf life up to 12 months while keeping the pouch fully recyclable.",
        "faq4Question": "What are the standard manufacturing lead times?",
        "faq4Answer": "Digital printed orders require 7-10 business days. Large rotogravure orders require 12-14 business days. Worldwide express air delivery takes 3-5 days.",
        "faq5Question": "What certifications do your recyclable pouches have?",
        "faq5Answer": "Our recyclable mono-PE films are manufactured in Grade A BRCGS food safety compliant facilities. We provide certification reports matching US FDA and European food contact safety criteria.",
        "faq6Question": "What specifications are required for a quotation?",
        "faq6Answer": "To provide an accurate pricing sheet, please provide your required bag style (stand-up, flat bottom), exact dimensions in millimeters, closure types (degassing valve, zipper), and quantities.",
        "breadcrumbHome": "Home",
        "breadcrumbMaterials": "Eco-Materials",
        "breadcrumbActive": "Recyclable Mono-PE",
        "materialBadge": "MATERIAL: MONO_PE_04",
        "curbsideBadge": "CURBSIDE #4 LDPE",
        "heroTitle1": "100% Recyclable.",
        "heroTitle2": "Single Polymer.",
        "heroTitleHighlight": "Circular.",
        "heroDescription": "> Curbside recycling ready.\n> EVOH high gas barrier core.\n> Startup MOQ of 500 units.\n> FDA food-grade compliance.",
        "heroCta1": "Book Material Consult",
        "heroCta2": "View Barrier Science",
        "heroImageAlt": "Recyclable Mono-PE Material Infographic Structure",
        "logoRecycleAlt": "Recycling Code #4 LDPE and #5 PP Stamps",
        "recycleBadge": "RECYCLABILITY_VERIFIED",
        "recycleTitle": "Store Drop-off & Curbside Ready",
        "recycleParagraph1": "Our mono-PE structures use single-material polyethylene resins, fully certified under standard recycling code **#4 LDPE**. This allows your packaging to be integrated into curbside collection programs and store drop-off bins worldwide.",
        "recycleParagraph2": "By stamping our verified recycling logos on your custom pouch artwork, you clearly convey circular environmental actions directly to your consumer, boosting brand trust and retail placements.",
        "specsBadge": "BARRIER_PERFORMANCE_SPECS",
        "specsTitle": "Technical Specs",
        "specsBadgeRight": "MONO_PE_INTEGRITY",
        "specs": {
            "polymer": {
                "label": "Polymer Matrix",
                "val": "Single-Material Mono-PE",
                "desc": "Constructed solely from Polyethylene resins (LDPE/LLDPE), ensuring complete compatibility with curbside and drop-off #4 recycling streams."
            },
            "barrier": {
                "label": "Active Barrier",
                "val": "EVOH Gas Co-Extrusion (<1.5 cc)",
                "desc": "Micro-thin co-extruded EVOH core layer provides gas barrier protection, keeping snacks and coffee perfectly fresh with no aluminum needed."
            },
            "seal": {
                "label": "Seal Integrity",
                "val": "Low-Temp Peeling Seal (110°C)",
                "desc": "Specialized heat-seal layer seals quickly at lower temperatures, saving energy on automatic packaging lines and preventing zipper shrinkage."
            },
            "structural": {
                "label": "Structural Fit",
                "val": "Double-Wall Export Logistics",
                "desc": "Packed inside robust double-wall cartons with an internal moisture barrier bag to block ambient humidity during sea shipping routes."
            }
        },
        "faqBadge": "MONO_PE_FAQ",
        "faqTitle": "Expert Procurement FAQ",
        "faqSubtitle": "Bespoke recyclable pouch guidance for professional startup buyers.",
        "faqs": {
            "q1": "What is a mono-PE recyclable pouch?",
            "a1": "Traditional flexible pouches laminate multiple incompatible plastics (like PET, Nylon, and Aluminum) together, making recycling impossible. Mono-PE pouches use single-material Polyethylene throughout all laminated layers, allowing them to be fully melted down and recycled into new PE products.",
            "q2": "What is the MOQ for custom printed mono-PE pouches?",
            "a2": "We offer an ultra-low startup MOQ of just 500 units for digitally printed recyclable stand-up pouches. This is perfect for small businesses testing flavor SKUs without plate setup fees.",
            "q3": "How do you maintain product freshness without aluminum?",
            "a3": "We co-extrude a micro-thin layer of EVOH (Ethylene Vinyl Alcohol) between our PE film layers. This delivers outstanding oxygen and moisture protection (WVTR & OTR < 1.5), preserving coffee, pet treats, and food freshness for 9-12 months while keeping the film 100% recyclable.",
            "q4": "What are the production and delivery lead times?",
            "a4": "Our typical digital print production time is 7-10 business days from blueprint sign-off. Plate production takes 12-14 days. We ship worldwide via express courier (3-5 days) or sea freight (40-60 days).",
            "q5": "Are these pouches food-grade certified?",
            "a5": "Yes, all our recyclable mono-PE materials are manufactured in BRCGS Grade A certified facilities. They are 100% food-grade compliant with FDA and EU food contact regulations, featuring solvent-free lamination.",
            "q6": "What details are needed for a precise quotation?",
            "a6": "Simply tell us your pouch style (e.g., Stand-Up, Flat Pouch), external dimensions in millimeters, whether you require standard zippers or degassing valves, and your quantities. We provide pricing sheets in under 24 hours."
        },
        "ctaBadge": "RECYCLE_MANDATE",
        "ctaTitle": "Go Fully Recyclable",
        "ctaDesc": "Switch from complex non-recyclable laminates starting from 500 units.",
        "ctaBtn1": "Request Free Recyclable Samples",
        "ctaBtn2": "Consult Packaging Engineer",
        "wholesaleTitle": "Seeking high-volume B2B wholesale mono-PE laminated rollstocks?",
        "wholesaleDesc": "For high-speed form-fill-seal (VFFS/HFFS) lines, structural co-extrusions, and bulk volume quotes, check our wholesale portal: "
    }
}

def update_en_json():
    print("Loading en.json...")
    if not os.path.exists(LOCALES_FILE):
        print(f"Error: {LOCALES_FILE} not found.")
        return False
        
    with open(LOCALES_FILE, 'r', encoding='utf-8') as f:
        data = json.load(f)
        
    if "seoPages" not in data:
        data["seoPages"] = {}
    if "pages" not in data["seoPages"]:
        data["seoPages"]["pages"] = {}
        
    for k, v in TRANSLATIONS.items():
        data["seoPages"]["pages"][k] = v
        print(f"Merged translations for {k}")
        
    with open(LOCALES_FILE, 'w', encoding='utf-8') as f:
        json.dump(data, f, ensure_ascii=False, indent=4)
    print("Saved en.json successfully.")
    return True

# Helper to find where to insert const { t } = useTranslation()
# Typically inside component before return, or first line of functional component body
def insert_translation_hook(content, page_key):
    # Check if useTranslation is already imported, if not add it
    if "useTranslation" not in content:
        # Insert import
        # Find React import or other imports at the top
        content = re.sub(
            r"(import React[^\n]*)",
            r"\1\nimport { useTranslation } from 'react-i18next';",
            content,
            count=1
        )
        # Fallback if import React isn't matched exactly:
        if "useTranslation" not in content:
            content = "import { useTranslation } from 'react-i18next';\n" + content

    hook_line = f"\n  const {{ t }} = useTranslation()\n  const p = 'seoPages.pages.{page_key}'\n"
    
    # Insert inside component body
    # Look for export default function PouchXXXPage() { or const PouchXXXPage: React.FC = () => {
    pattern = r"(export\s+default\s+function\s+\w+\(\)\s*\{|const\s+\w+\s*:\s*React\.FC\s*=\s*\(\)\s*=>\s*\{)"
    match = re.search(pattern, content)
    if match:
        matched_str = match.group(1)
        # Check if already has useTranslation hook
        if "useTranslation()" not in content:
            content = content.replace(matched_str, matched_str + hook_line, 1)
    return content

def refactor_pouch_biope():
    filepath = os.path.join(MATERIALS_DIR, 'PouchBioPEPage.tsx')
    print(f"Refactoring {filepath}...")
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
        
    # Insert hooks
    content = insert_translation_hook(content, 'pouchBioPE')
    
    # Substring replacements
    replacements = {
        # Helmet
        "<title>Bio-PE Sustainable Packaging | Sugarcane Based | Pouch.eco</title>": "<title>{t(`${p}.title`)}</title>",
        'content="Sugarcane-derived Bio-PE packaging. Carbon negative production, fossil-free, and fully recyclable. The sustainable alternative to traditional plastic."': 'content={t(`${p}.description`)}',
        'content="Bio-PE, sugarcane plastic, carbon negative packaging, sustainable pouches, green PE"': 'content={t(`${p}.keywords`)}',
        
        # PERFORMANCE_DATA array
        """  const PERFORMANCE_DATA = [
    { label: 'Tensile Strength', bio: 'High (30MPa)', fossil: 'High (30MPa)', match: true },
    { label: 'Moisture Barrier', bio: 'Superior', fossil: 'Superior', match: true },
    { label: 'Heat Sealability', bio: '110°C - 160°C', fossil: '110°C - 160°C', match: true },
    { label: 'Food Safety', bio: 'FDA / EU Approved', fossil: 'FDA / EU Approved', match: true }
  ]""": """  const PERFORMANCE_DATA = [
    { label: t(`${p}.performanceData.tensileStrength.label`), bio: t(`${p}.performanceData.tensileStrength.bio`), fossil: t(`${p}.performanceData.tensileStrength.fossil`), match: true },
    { label: t(`${p}.performanceData.moistureBarrier.label`), bio: t(`${p}.performanceData.moistureBarrier.bio`), fossil: t(`${p}.performanceData.moistureBarrier.fossil`), match: true },
    { label: t(`${p}.performanceData.heatSealability.label`), bio: t(`${p}.performanceData.heatSealability.bio`), fossil: t(`${p}.performanceData.heatSealability.fossil`), match: true },
    { label: t(`${p}.performanceData.foodSafety.label`), bio: t(`${p}.performanceData.foodSafety.bio`), fossil: t(`${p}.performanceData.foodSafety.fossil`), match: true }
  ]""",
        
        # Hero Section
        '<NeoBadge color="lime">BIO_BASED_PROTOCOL_V4</NeoBadge>': '<NeoBadge color="lime">{t(`${p}.heroBadge`)}</NeoBadge>',
        '<h1 className="mt-8 font-black text-6xl md:text-9xl leading-none uppercase text-black">Sugar.<br/>Not Oil.</h1>': '<h1 className="mt-8 font-black text-6xl md:text-9xl leading-none uppercase text-black">{t(`${p}.heroTitle1`)}<br/>{t(`${p}.heroTitle2`)}</h1>',
        'Sugarcane-derived Bio-PE. Carbon negative. Fossil-free. 100% recyclable in standard LDPE/PE streams without contamination.': '{t(`${p}.heroDescription`)}',
        '<NeoButton variant="primary" to="/sample">Request Bio-PE Samples</NeoButton>': '<NeoButton variant="primary" to="/sample">{t(`${p}.heroCta1`)}</NeoButton>',
        '<NeoButton variant="secondary" to="/products">View Bio-PE Pouches</NeoButton>': '<NeoButton variant="secondary" to="/products">{t(`${p}.heroCta2`)}</NeoButton>',
        
        # Tech Overview
        '<NeoBadge color="cyan">LIFECYCLE_ADVANTAGE</NeoBadge>': '<NeoBadge color="cyan">{t(`${p}.lifecycleBadge`)}</NeoBadge>',
        '<h2 className="font-black text-5xl md:text-7xl uppercase mt-6 leading-tight">Carbon<br/>Negative<br/>Impact.</h2>': '<h2 className="font-black text-5xl md:text-7xl uppercase mt-6 leading-tight">{t(`${p}.lifecycleTitle1`)}<br/>{t(`${p}.lifecycleTitle2`)}<br/>{t(`${p}.lifecycleTitle3`)}</h2>',
        'Bio-PE is produced from ethanol derived from sustainably grown sugarcane. Every ton of Bio-PE captures up to 3.09 tons of CO2 from the atmosphere during its growth cycle.': '{t(`${p}.lifecycleDescription`)}',
        '<h4 className="font-black uppercase text-xs">Carbon Footprint</h4>': '<h4 className="font-black uppercase text-xs">{t(`${p}.lifecycleMetric1Label`)}</h4>',
        '<p className="text-[10px] font-bold">-3.09kg CO2 per kg</p>': '<p className="text-[10px] font-bold">{t(`${p}.lifecycleMetric1Value`)}</p>',
        '<h4 className="font-black uppercase text-xs">Origin</h4>': '<h4 className="font-black uppercase text-xs">{t(`${p}.lifecycleMetric2Label`)}</h4>',
        '<p className="text-[10px] font-bold">100% Sugarcane Ethanol</p>': '<p className="text-[10px] font-bold">{t(`${p}.lifecycleMetric2Value`)}</p>',
        
        # Performance Table
        '<h2 className="font-black text-5xl md:text-7xl uppercase mb-16 text-center text-[#D4FF00]">The Performance Mirror</h2>': '<h2 className="font-black text-5xl md:text-7xl uppercase mb-16 text-center text-[#D4FF00]">{t(`${p}.comparisonTitle`)}</h2>',
        '<p className="text-center font-[\'JetBrains_Mono\'] mb-12 text-xl opacity-80">Bio-PE matches fossil-based PE 1:1 in drop-test and barrier performance.</p>': '<p className="text-center font-[\'JetBrains_Mono\'] mb-12 text-xl opacity-80">{t(`${p}.comparisonSubtitle`)}</p>',
        '<th className="p-6 text-left">PROPERTY</th>': '<th className="p-6 text-left">{t(`${p}.tableHeaderProperty`)}</th>',
        '<th className="p-6 text-left">SUGARCANE BIO-PE</th>': '<th className="p-6 text-left">{t(`${p}.tableHeaderBioPE`)}</th>',
        '<th className="p-6 text-left">FOSSIL-BASED PE</th>': '<th className="p-6 text-left">{t(`${p}.tableHeaderFossilPE`)}</th>',
        '<th className="p-6 text-left">MATCH</th>': '<th className="p-6 text-left">{t(`${p}.tableHeaderMatch`)}</th>',
        
        # Cards
        '<h4 className="font-black text-xl mb-4 uppercase">Verified Origin</h4>': '<h4 className="font-black text-xl mb-4 uppercase">{t(`${p}.card1Title`)}</h4>',
        'Certified by ASTM D6866, our Bio-PE is part of the "I\'m Green" ecosystem, ensuring full traceability back to the sugarcane fields.': '{t(`${p}.card1Description`)}',
        '<h4 className="font-black text-xl mb-4 uppercase">Food Safe Compliance</h4>': '<h4 className="font-black text-xl mb-4 uppercase">{t(`${p}.card2Title`)}</h4>',
        'Fully FDA and EU food contact approved. Safe for liquid, oily, and dry foods without BPA or phthalates.': '{t(`${p}.card2Description`)}',
        '<h4 className="font-black text-xl mb-4 uppercase">Circular Ready</h4>': '<h4 className="font-black text-xl mb-4 uppercase">{t(`${p}.card3Title`)}</h4>',
        'Can be recycled in the existing PE recycling stream (Code 4). No special infrastructure needed for disposal.': '{t(`${p}.card3Description`)}',
        
        # Guide
        'The Ultimate Guide to <span className="text-[#10b981]">Bio-PE Packaging</span>': '{t(`${p}.guideTitle`)} <span className="text-[#10b981]">{t(`${p}.guideTitleHighlight`)}</span>',
        'As the world aggressively shifts away from fossil-fuel-based plastics, Bio-Polyethylene (Bio-PE) has emerged as a revolutionary drop-in replacement. Derived from renewable resources like sugarcane ethanol, Bio-PE represents a significant leap forward in sustainable flexible packaging. At POUCH.ECO, we harness the power of this plant-based plastic to create high-performance pouches that drastically reduce your brand\'s carbon footprint without compromising on durability or barrier properties.': '{t(`${p}.guideParagraph1`)}',
        'alt="Bio-PE film structure showing renewable sugarcane origins"': 'alt={t(`${p}.guideImage1Alt`)}',
        '<h3 className="text-2xl font-[\'Space_Grotesk\'] font-black uppercase text-black mt-12 mb-4">Carbon Negative Origins</h3>': '<h3 className="text-2xl font-[\'Space_Grotesk\'] font-black uppercase text-black mt-12 mb-4">{t(`${p}.guideSection1Title`)}</h3>',
        'The most compelling argument for Bio-PE is its origin story. Traditional polyethylene is synthesized from crude oil, a finite resource that releases massive amounts of CO2 during extraction and refinement. In stark contrast, the sugarcane used to produce Bio-PE actively absorbs CO2 from the atmosphere as it grows. This remarkable process means that the production of Bio-PE resin can have a negative carbon footprint from cradle to gate, actively contributing to the fight against climate change.': '{t(`${p}.guideSection1Paragraph1`)}',
        'For brands deeply committed to Environmental, Social, and Governance (ESG) goals, switching to Bio-PE packaging provides a verifiable, measurable reduction in greenhouse gas emissions. You are not just making a superficial "green" claim; you are fundamentally changing the chemistry of your packaging supply chain.': '{t(`${p}.guideSection1Paragraph2`)}',
        '<h3 className="text-2xl font-[\'Space_Grotesk\'] font-black uppercase text-black mt-12 mb-4">A True Drop-In Replacement</h3>': '<h3 className="text-2xl font-[\'Space_Grotesk\'] font-black uppercase text-black mt-12 mb-4">{t(`${p}.guideSection2Title`)}</h3>',
        'A major hurdle in adopting sustainable packaging is often performance degradation. Fortunately, Bio-PE is chemically identical to conventional fossil-based polyethylene. It offers the exact same tensile strength, sealability, and printability. Whether you are packaging heavy pet food, sharp snacks, or liquid cosmetics, Bio-PE performs flawlessly on the filling line and on the retail shelf.': '{t(`${p}.guideSection2Paragraph1`)}',
        'alt="Clear Bio-PE pouch structure for food packaging"': 'alt={t(`${p}.guideImage2Alt`)}',
        '<h3 className="text-2xl font-[\'Space_Grotesk\'] font-black uppercase text-black mt-12 mb-4">Recyclability and End of Life</h3>': '<h3 className="text-2xl font-[\'Space_Grotesk\'] font-black uppercase text-black mt-12 mb-4">{t(`${p}.guideSection3Title`)}</h3>',
        'It is important to understand that while Bio-PE is made from plants, it is not biodegradable or compostable. It is designed to be durable. However, because it is chemically identical to standard PE, it is 100% recyclable in the exact same recycling streams (such as store drop-off programs for soft plastics). This allows it to participate fully in a circular economy, unlike many mixed-material plastics that are destined for the landfill.': '{t(`${p}.guideSection3Paragraph1`)}',
        
        # FAQ
        'Frequently Asked <span className="text-[#10b981]">Questions</span>': '{t(`${p}.faqTitle`)} <span className="text-[#10b981]">{t(`${p}.faqTitleHighlight`)}</span>',
        """            {[
              {
                q: 'What exactly is Bio-PE?',
                a: 'Bio-PE, or biopolyethylene, is a plastic made from renewable biomass (like sugarcane) rather than fossil fuels. It has the same chemical properties as regular PE but a significantly lower carbon footprint.'
              },
              {
                q: 'Is Bio-PE compostable?',
                a: 'No, Bio-PE is not compostable or biodegradable. It is designed to be as durable as traditional plastic. However, it is fully recyclable in the same streams as standard polyethylene (PE).'
              },
              {
                q: 'Does Bio-PE perform differently than regular plastic?',
                a: 'No. Because Bio-PE is a "drop-in" replacement, it is chemically identical to fossil-based PE. It offers the exact same durability, moisture barrier, and seal strength as traditional plastic packaging.'
              },
              {
                q: 'What is the minimum order for Bio-PE pouches?',
                a: 'Through our digital printing technology, we offer low Minimum Order Quantities (MOQs) starting at just 500 units for fully custom printed Bio-PE pouches, making it accessible for startups and growing brands.'
              }
            ]""": """            [
              { q: t(`${p}.faq.q1`), a: t(`${p}.faq.a1`) },
              { q: t(`${p}.faq.q2`), a: t(`${p}.faq.a2`) },
              { q: t(`${p}.faq.q3`), a: t(`${p}.faq.a3`) },
              { q: t(`${p}.faq.q4`), a: t(`${p}.faq.a4`) }
            ]""",
            
        # CTA
        '<NeoBadge color="magenta">SUSTAINABILITY_UPGRADE</NeoBadge>': '<NeoBadge color="magenta">{t(`${p}.ctaBadge`)}</NeoBadge>',
        '<h2 className="font-black text-6xl md:text-9xl uppercase leading-none italic">Sweet.<br/>Secure.</h2>': '<h2 className="font-black text-6xl md:text-9xl uppercase leading-none italic">{t(`${p}.ctaTitle1`)}<br/>{t(`${p}.ctaTitle2`)}</h2>',
        'Ready to ditch oil-based plastics? Transition your brand to Bio-PE and claim a carbon-negative profile today.': '{t(`${p}.ctaDescription`)}',
        '<NeoButton variant="primary" to="/sample" className="!bg-[#D4FF00] !text-black">Order Bio-PE Kit</NeoButton>': '<NeoButton variant="primary" to="/sample" className="!bg-[#D4FF00] !text-black">{t(`${p}.ctaButton1`)}</NeoButton>',
        'LCA Analysis Call': '{t(`${p}.ctaButton2`)}'
    }
    
    for k, v in replacements.items():
        if k in content:
            content = content.replace(k, v)
        else:
            print(f"  Warning: substring not found: {k[:40]}...")
            
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)
    print(f"Refactored {filepath} successfully.")

def refactor_pouch_cellokraft():
    filepath = os.path.join(MATERIALS_DIR, 'PouchCelloKraftPage.tsx')
    print(f"Refactoring {filepath}...")
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
        
    content = insert_translation_hook(content, 'pouchCelloKraft')
    
    replacements = {
        "<title>Cello Kraft Triplex Pouches | Premium High-Barrier | Pouch.eco</title>": "<title>{t(`${p}.title`)}</title>",
        'content="Premium kraft pouches with clear window & aluminum foil. Perfect for coffee, supplements & organic products. 12-24 month shelf life. From 500 units!"': 'content={t(`${p}.description`)}',
        'content="Cello Kraft Triplex Pouches | Premium High-Barrier | Pouch.eco"': 'content={t(`${p}.ogTitle`)}',
        'content="Premium kraft pouches with clear window for coffee, supplements & organic products. From 500 units!"': 'content={t(`${p}.ogDescription`)}',
        'content="Cello Kraft Triplex Pouches | Pouch.eco"': 'content={t(`${p}.twitterTitle`)}',
        'content="Premium kraft with clear window. 12-24 month shelf life."': 'content={t(`${p}.twitterDescription`)}',
        
        # Schema json
        '"name": "Cello Kraft Triplex Pouch"': '"name": t(`${p}.schemaProduct`)',
        '"description": "Premium kraft paper pouches with clear cellophane window and aluminum foil barrier"': '"description": t(`${p}.schemaProductDesc`)',
        
        # FEATURES array
        """  const FEATURES = [
    { icon: Leaf, title: 'Natural Look', desc: 'Premium kraft paper exterior—customers love the eco-friendly vibe', color: 'bg-amber-100' },
    { icon: Shield, title: 'Long Lasting', desc: '12-24 months shelf life with aluminum foil protection', color: 'bg-blue-100' },
    { icon: Award, title: 'Pro Grade', desc: 'Same quality used by top coffee & supplement brands', color: 'bg-purple-100' },
    { icon: Heart, title: 'Eco Appeal', desc: 'Perfect for brands that care about sustainability', color: 'bg-green-100' },
  ]""": """  const FEATURES = [
    { icon: Leaf, title: t(`${p}.features.naturalLook.title`), desc: t(`${p}.features.naturalLook.desc`), color: 'bg-amber-100' },
    { icon: Shield, title: t(`${p}.features.longLasting.title`), desc: t(`${p}.features.longLasting.desc`), color: 'bg-blue-100' },
    { icon: Award, title: t(`${p}.features.proGrade.title`), desc: t(`${p}.features.proGrade.desc`), color: 'bg-purple-100' },
    { icon: Heart, title: t(`${p}.features.ecoAppeal.title`), desc: t(`${p}.features.ecoAppeal.desc`), color: 'bg-green-100' },
  ]""",
        
        # APPLICATIONS array
        """  const APPLICATIONS = [
    'Premium coffee beans',
    'Protein powder',
    'Supplements & vitamins',
    'Freeze-dried snacks',
    'Organic tea',
    'Pet treats',
    'Probiotics',
    'Emergency food',
    'Baby formula',
    'High-end spices'
  ]""": """  const APPLICATIONS = [
    t(`${p}.applications.app1`),
    t(`${p}.applications.app2`),
    t(`${p}.applications.app3`),
    t(`${p}.applications.app4`),
    t(`${p}.applications.app5`),
    t(`${p}.applications.app6`),
    t(`${p}.applications.app7`),
    t(`${p}.applications.app8`),
    t(`${p}.applications.app9`),
    t(`${p}.applications.app10`)
  ]""",
        
        # Badges
        '<NeoBadge color="amber">POPULAR</NeoBadge>': '<NeoBadge color="amber">{t(`${p}.popularBadge`)}</NeoBadge>',
        '<NeoBadge color="lime">HIGH BARRIER</NeoBadge>': '<NeoBadge color="lime">{t(`${p}.highBarrierBadge`)}</NeoBadge>',
        
        # Hero
        '<h1 className="font-black text-5xl md:text-7xl leading-none mb-6">\n                Cello Kraft<br/>\n                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-amber-800">Triplex Pouch</span>\n              </h1>': '<h1 className="font-black text-5xl md:text-7xl leading-none mb-6">{t(`${p}.heroTitle1`)}<br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-amber-800">{t(`${p}.heroTitle2`)}</span></h1>',
        '<strong>The perfect combo:</strong> Natural kraft paper exterior with a clear window to show off your product, plus aluminum foil barrier for 12-24 months of freshness!': '<strong>{t(`${p}.heroSubtitleIntro`)}</strong>{t(`${p}.heroSubtitle`)}',
        '<NeoButton variant="primary">Get Samples</NeoButton>': '<NeoButton variant="primary">{t(`${p}.heroCta1`)}</NeoButton>',
        '<NeoButton variant="secondary">See Pricing</NeoButton>': '<NeoButton variant="secondary">{t(`${p}.heroCta2`)}</NeoButton>',
        '4.8/5 from 87 brands': '{t(`${p}.ratingText`)}',
        '500 units': '{t(`${p}.moqValue`)}',
        'Low MOQ': '{t(`${p}.moqLabel`)}',
        'alt="Cello Kraft Triplex Pouch with Clear Window"': 'alt={t(`${p}.heroImageAlt`)}',
        
        # Love It section
        'Why Brands <span className="text-amber-600">Love It</span>': '{t(`${p}.loveTitle`)} <span className="text-amber-600">{t(`${p}.loveTitleHighlight`)}</span>',
        "It's not just packaging—it's how you make your first impression!": '{t(`${p}.loveSubtitle`)}',
        
        # Tech section
        'The <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-600">Tech Details</span>': '{t(`${p}.techTitle`)} <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-600">{t(`${p}.techTitleHighlight`)}</span>',
        "(Don't worry, we'll explain it in plain English!)": '{t(`${p}.techSubtitle`)}',
        
        # What's Inside
        '<h3 className="font-black text-2xl mb-4 text-amber-900">What\'s Inside?</h3>': '<h3 className="font-black text-2xl mb-4 text-amber-900">{t(`${p}.whatsInsideTitle`)}</h3>',
        '<p className="font-bold">Outer Layer: Kraft Paper (100-140g)</p>': '<p className="font-bold">{t(`${p}.layerOuterTitle`)}</p>',
        '<p className="text-sm text-gray-600">Natural, eco-friendly look your customers love</p>': '<p className="text-sm text-gray-600">{t(`${p}.layerOuterDesc`)}</p>',
        '<p className="font-bold">Window: Clear Cellophane</p>': '<p className="font-bold">{t(`${p}.layerWindowTitle`)}</p>',
        '<p className="text-sm text-gray-600">Show off your beautiful product!</p>': '<p className="text-sm text-gray-600">{t(`${p}.layerWindowDesc`)}</p>',
        '<p className="font-bold">Barrier: Aluminum Foil (25-40µm)</p>': '<p className="font-bold">{t(`${p}.layerBarrierTitle`)}</p>',
        '<p className="text-sm text-gray-600">Blocks oxygen, moisture & light—keeps products fresh for 12-24 months</p>': '<p className="text-sm text-gray-600">{t(`${p}.layerBarrierDesc`)}</p>',
        '<p className="font-bold">Inner Layer: PE Sealant (60-80µm)</p>': '<p className="font-bold">{t(`${p}.layerInnerTitle`)}</p>',
        '<p className="text-sm text-gray-600">Strong, airtight seal that doesn\'t leak</p>': '<p className="text-sm text-gray-600">{t(`${p}.layerInnerDesc`)}</p>',
        
        # Protection Power
        '<h3 className="font-black text-2xl mb-4 text-blue-900">Protection Power</h3>': '<h3 className="font-black text-2xl mb-4 text-blue-900">{t(`${p}.protectionTitle`)}</h3>',
        '<p className="font-bold mb-1">Moisture Protection</p>': '<p className="font-bold mb-1">{t(`${p}.protectionMoistureTitle`)}</p>',
        '<p className="text-sm text-gray-600">Less than 0.5 g/m²/day (basically waterproof!)</p>': '<p className="text-sm text-gray-600">{t(`${p}.protectionMoistureDesc`)}</p>',
        '<p className="font-bold mb-1">Oxygen Protection</p>': '<p className="font-bold mb-1">{t(`${p}.protectionOxygenTitle`)}</p>',
        '<p className="text-sm text-gray-600">Less than 1.0 cc/m²/day (your products won\'t go stale)</p>': '<p className="text-sm text-gray-600">{t(`${p}.protectionOxygenDesc`)}</p>',
        '<p className="font-bold mb-1">Shelf Life</p>': '<p className="font-bold mb-1">{t(`${p}.protectionShelfLifeTitle`)}</p>',
        '<p className="text-sm text-gray-600">12-24+ months depending on your product</p>': '<p className="text-sm text-gray-600">{t(`${p}.protectionShelfLifeDesc`)}</p>',
        '<p className="font-bold mb-1">Light Blocking</p>': '<p className="font-bold mb-1">{t(`${p}.protectionLightTitle`)}</p>',
        '<p className="text-sm text-gray-600">100% opaque (except the window area)</p>': '<p className="text-sm text-gray-600">{t(`${p}.protectionLightDesc`)}</p>',
        
        # Perfect for
        'Perfect For Your Products': '{t(`${p}.perfectTitle`)}',
        'If you sell any of these, this pouch is made for you!': '{t(`${p}.perfectSubtitle`)}',
        
        # Expert card
        '<h3 className="font-black text-2xl mb-2">Not Sure If It\'s Right for You?</h3>': '<h3 className="font-black text-2xl mb-2">{t(`${p}.expertCardTitle`)}</h3>',
        '<p className="text-gray-600 mb-4">\n                    Our packaging experts can help you choose the perfect material for your product. Free consultation, no pressure!\n                  </p>': '<p className="text-gray-600 mb-4">{t(`${p}.expertCardDesc`)}</p>',
        '<NeoButton variant="primary" className="text-sm py-3 px-6">\n                    Chat With an Expert\n                  </NeoButton>': '<NeoButton variant="primary" className="text-sm py-3 px-6">{t(`${p}.expertCardCta`)}</NeoButton>',
        
        # CTA section
        'Ready to Start?<br/>\n            <span className="text-[#D4FF00]">Order Just 500 Units!</span>': '{t(`${p}.ctaTitle1`)}<br/><span className="text-[#D4FF00]">{t(`${p}.ctaTitle2`)}</span>',
        'No crazy minimums. Fast turnaround. Perfect for startups & small brands.': '{t(`${p}.ctaSubtitle`)}',
        'From $0.70/pouch · Includes custom printing': '{t(`${p}.ctaPrice`)}',
        '<NeoButton variant="primary">Get Free Samples</NeoButton>': '<NeoButton variant="primary">{t(`${p}.ctaBtn1`)}</NeoButton>',
        'Download Spec Sheet': '{t(`${p}.ctaBtn2`)}'
    }
    
    for k, v in replacements.items():
        if k in content:
            content = content.replace(k, v)
        else:
            print(f"  Warning: substring not found: {k[:40]}...")
            
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)
    print(f"Refactored {filepath} successfully.")

def refactor_pouch_combustionsafetytest():
    filepath = os.path.join(MATERIALS_DIR, 'PouchCombustionSafetyTestPage.tsx')
    print(f"Refactoring {filepath}...")
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
        
    content = insert_translation_hook(content, 'pouchCombustionSafetyTest')
    
    replacements = {
        'const title = "Combustion Safety Test: PLA vs. PET Plastic | POUCH.ECO"': 'const title = t(`${p}.title`)',
        'const description = "Verify authentic biopolymer packaging using the Combustion Safety Test. Compare plant-based PLA (clean grass-ash scent, stable ash) vs. standard PET plastic (toxic dripping, acrid chemical smell)."': 'const description = t(`${p}.description`)',
        
        # FAQs mapping
        """  const faqs = [
    {
      q: 'Is burning PLA toxic to inhale?',
      a: 'Unlike synthetic plastics like PET or PVC which release toxic, highly carcinogenic vapors (such as benzene and acid gases), burning pure PLA primarily yields carbon dioxide (CO₂) and water vapour. It releases a mild, non-offensive plant/wood ash scent. However, as with all combustion events, we recommend performing tests in a well-ventilated space.'
    },
    {
      q: 'Why does PLA form carbon ash while PET melts into plastic beads?',
      a: 'PLA is synthesized from plant carbohydrates. When it burns, the carbon-oxygen-hydrogen structures convert directly into ash, resembling burning paper or grass. PET is an engineered petroleum derivative designed for crystalline durability; upon heating, it undergoes a rapid thermal transition back into its liquid polymer form, dropping molten flame beads.'
    },
    {
      q: 'Is the adhesive on your PLA stickers compostable as well?',
      a: 'Yes, absolutely. A sticker is only as compostable as its weakest link. AchievePack / Pouch.eco clear stickers use a certified, custom-formulated bio-adhesive. It decomposes in <=14 weeks, leaves zero microplastics, and meets all strict international composting protocols (EN 13432 and ASTM D6400).'
    },
    {
      q: 'Will PLA sealing stickers melt on my package in hot cargo shipping?',
      a: 'No. While PLA has a lower melting point than PET, it remains fully stable up to 55°C (131°F). Standard cargo containers rarely exceed 45°C. Pouch.eco stickers are engineered with excellent heat resistance, holding strong integrity in transit while maintaining rapid breakdown when exposed to industrial compost facilities.'
    }
  ]""": """  const faqs = [
    { q: t(`${p}.faq.q1`), a: t(`${p}.faq.a1`) },
    { q: t(`${p}.faq.q2`), a: t(`${p}.faq.a2`) },
    { q: t(`${p}.faq.q3`), a: t(`${p}.faq.a3`) },
    { q: t(`${p}.faq.q4`), a: t(`${p}.faq.a4`) }
  ]""",
        
        # Hero Section
        '<span className="font-[\'JetBrains_Mono\'] font-bold text-sm">LAB_PROTOCOL: TEST_COMBUST_01</span>': '<span className="font-[\'JetBrains_Mono\'] font-bold text-sm">{t(`${p}.heroBadge`)}</span>',
        'COMBUSTION<br/>\n                SAFETY TEST:<br/>\n                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#10b981] to-[#D4FF00] drop-shadow-[4px_4px_0px_rgba(0,0,0,1)]">PLA vs. PET</span>': '{t(`${p}.heroTitle1`)}<br/>{t(`${p}.heroTitle2`)}<br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-[#10b981] to-[#D4FF00] drop-shadow-[4px_4px_0px_rgba(0,0,0,1)]">{t(`${p}.heroTitleHighlight`)}</span>',
        "Protect your brand's environmental claims from greenwashing. A simple combustion safety test immediately distinguishes plant-based Compostable PLA (which burns cleanly with a mild grass-wood scent) from Conventional PET Plastic (which melts rapidly with severe toxic dripping and hazardous chemical fumes).": '{t(`${p}.heroDescription`)}',
        '<NeoButton href="https://calendly.com/30-min-free-packaging-consultancy">Book Free Consultation</NeoButton>': '<NeoButton href="https://calendly.com/30-min-free-packaging-consultancy">{t(`${p}.heroCta1`)}</NeoButton>',
        '<NeoButton variant="secondary" href="#guide">View Lab Guide</NeoButton>': '<NeoButton variant="secondary" href="#guide">{t(`${p}.heroCta2`)}</NeoButton>',
        'alt="Combustion Safety Test"': 'alt={t(`${p}.heroImageAlt`)}',
        'PLA_BURN_VERIFIED': '{t(`${p}.burnVerifiedBadge`)}',
        
        # Target Audience
        '<NeoBadge color="magenta">AUDIENCE_ALERT</NeoBadge>': '<NeoBadge color="magenta">{t(`${p}.audienceBadge`)}</NeoBadge>',
        'Is This Test For You?': '{t(`${p}.audienceTitle`)}',
        '<h3 className="font-black text-xl uppercase">Procurement & QA</h3>': '<h3 className="font-black text-xl uppercase">{t(`${p}.audienceCard1Title`)}</h3>',
        'Verify supplier claims in-house. Protect your brand\'s integrity and eco-claims before mass-producing custom printed labels or bags.': '{t(`${p}.audienceCard1Desc`)}',
        '<NeoBadge color="lime" className="mt-6 self-start">Supplier Audit</NeoBadge>': '<NeoBadge color="lime" className="mt-6 self-start">{t(`${p}.audienceCard1Badge`)}</NeoBadge>',
        '<h3 className="font-black text-xl uppercase">DTC Ecom Brands</h3>': '<h3 className="font-black text-xl uppercase">{t(`${p}.audienceCard2Title`)}</h3>',
        'Ensure zero microplastics. Guarantee your shipping labels and product box stickers break down naturally in standard industrial compost piles.': '{t(`${p}.audienceCard2Desc`)}',
        '<NeoBadge color="cyan" className="mt-6 self-start">Zero Microplastics</NeoBadge>': '<NeoBadge color="cyan" className="mt-6 self-start">{t(`${p}.audienceCard2Badge`)}</NeoBadge>',
        '<h3 className="font-black text-xl uppercase">Sustainability Officers</h3>': '<h3 className="font-black text-xl uppercase">{t(`${p}.audienceCard3Title`)}</h3>',
        'Enforce strict compliance. Certify that materials satisfy international composting benchmarks (EN 13432 & ASTM D6400).': '{t(`${p}.audienceCard3Desc`)}',
        '<NeoBadge color="magenta" className="mt-6 self-start">14-Week Composting</NeoBadge>': '<NeoBadge color="magenta" className="mt-6 self-start">{t(`${p}.audienceCard3Badge`)}</NeoBadge>',
        
        # Science of Combustion
        '<NeoBadge color="cyan">SCIENCE_LAB</NeoBadge>': '<NeoBadge color="cyan">{t(`${p}.scienceBadge`)}</NeoBadge>',
        '<h2 className="font-black text-3xl md:text-5xl uppercase leading-none">The Science of<br/>Combustion</h2>': '<h2 className="font-black text-3xl md:text-5xl uppercase leading-none">{t(`${p}.scienceTitle1`)}<br/>{t(`${p}.scienceTitle2`)}</h2>',
        'Plastics and plant-based biopolymers have radically different molecular architectures. Fossil fuel-based plastics are structured from long carbon chains with heavy chemical additives, while Polylactic Acid (PLA) is synthesized from fermented plant starch (primarily corn dextrose).': '{t(`${p}.scienceDesc1`)}',
        'When exposed to an open flame, these distinct molecular structures react in highly specific, unforgeable ways. A standard combustion test evaluates three primary metrics:': '{t(`${p}.scienceDesc2`)}',
        '<h4 className="font-black uppercase text-lg mb-1">1. Combustion Aroma</h4>': '<h4 className="font-black uppercase text-lg mb-1">{t(`${p}.metric1Title`)}</h4>',
        'Plants burn like wood or leaves. Synthetic conventional plastics emit vaporized petroleum, producing a toxic, highly offensive chemical signature.': '{t(`${p}.metric1Desc`)}',
        '<h4 className="font-black uppercase text-lg mb-1">2. Flame Behavior</h4>': '<h4 className="font-black uppercase text-lg mb-1">{t(`${p}.metric2Title`)}</h4>',
        'PLA burns with a clean, light yellow flame and steady combustion. PET curls back, melts instantly, and drips dangerous flaming droplets.': '{t(`${p}.metric2Desc`)}',
        '<h4 className="font-black uppercase text-lg mb-1">3. Post-Burn Residual</h4>': '<h4 className="font-black uppercase text-lg mb-1">{t(`${p}.metric3Title`)}</h4>',
        'PLA leaves a structurally solid, dry, and brittle ash edge that crushes to fine charcoal powder. Conventional PET hardens into a dense, solid, and glassy plastic bead.': '{t(`${p}.metric3Desc`)}',
        
        # Lab Standard Procedure / step-by-step
        '<NeoBadge color="lime">LAB_STANDARD_PROCEDURE</NeoBadge>': '<NeoBadge color="lime">{t(`${p}.testBadge`)}</NeoBadge>',
        'Step-by-Step<br/>\n              Combustion Guide': '{t(`${p}.testTitle1`)}<br/>{t(`${p}.testTitle2`)}',
        'Follow these steps in a safe, well-ventilated laboratory or outdoor environment.': '{t(`${p}.testSubtitle`)}',
        '1. Preparation': '{t(`${p}.testStep1Title`)}',
        'Secure your testing specimen (a small strip of sticker material, container film, or liner) using metal tweezers. NEVER hold the material directly with your hands. Place a heat-resistant ceramic or glass dish underneath to catch any falling residue.': '{t(`${p}.testStep1Desc`)}',
        '2. Ignition': '{t(`${p}.testStep2Title`)}',
        'Bring a standard utility lighter flame to the bottom edge of the sample. Hold it there for 2-3 seconds until ignition is sustained, then withdraw the heat source.': '{t(`${p}.testStep2Desc`)}',
        '3. Observation': '{t(`${p}.testStep3Title`)}',
        'Evaluate the visual traits of the flame, note the physical behavior of the material (curling, melting, dripping), and cautiously fan the rising fumes towards your nose to detect the scent profile.': '{t(`${p}.testStep3Desc`)}',
        '4. Extinction & Analysis': '{t(`${p}.testStep4Title`)}',
        'Blow out the flame or let the material self-extinguish into the ceramic dish. Once completely cool, inspect the remaining edge to determine if it has turned to ash or a hardened plastic bead.': '{t(`${p}.testStep4Desc`)}',
        
        # Safety rules
        '<NeoBadge color="magenta">SAFETY_FIRST</NeoBadge>': '<NeoBadge color="magenta">{t(`${p}.safetyBadge`)}</NeoBadge>',
        'Laboratory Safety Rules': '{t(`${p}.safetyTitle`)}',
        'Perform tests ONLY in a well-ventilated space, under a laboratory fume hood, or outdoors.': '{t(`${p}.safetyRule1`)}',
        'Always keep a fire extinguisher or bucket of water nearby.': '{t(`${p}.safetyRule2`)}',
        'Wear protective safety glasses and heat-resistant gloves.': '{t(`${p}.safetyRule3`)}',
        'Never touch molten plastic drippings—they will cause severe thermal burns.': '{t(`${p}.safetyRule4`)}',
        
        # Comparison Blueprint
        '<NeoBadge color="cyan">THE_RELIABILITY_INDEX</NeoBadge>': '<NeoBadge color="cyan">{t(`${p}.comparisonBadge`)}</NeoBadge>',
        'The Combustion Blueprint': '{t(`${p}.comparisonTitle`)}',
        'Compare the reaction profiles of biopolymers vs. petrochemical films.': '{t(`${p}.comparisonSubtitle`)}',
        '<th className="p-6 text-left">TEST FEATURE</th>': '<th className="p-6 text-left">{t(`${p}.tableHeaderFeature`)}</th>',
        '<th className="p-6 text-left">PLA BIOPOLYMER</th>': '<th className="p-6 text-left">{t(`${p}.tableHeaderPLA`)}</th>',
        '<th className="p-6 text-left">CONVENTIONAL PET PLASTIC</th>': '<th className="p-6 text-left">{t(`${p}.tableHeaderPET`)}</th>',
        '<td className="p-6 font-black uppercase">Combustion Aroma</td>': '<td className="p-6 font-black uppercase">{t(`${p}.rowAroma`)}</td>',
        '<td className="p-6 text-green-600 font-bold">Sweet, caramel, or clean wood-ash scent (like burning grass)</td>': '<td className="p-6 text-green-600 font-bold">{t(`${p}.rowAromaPLA`)}</td>',
        '<td className="p-6 text-red-600 font-bold">Acrid, chemical, and heavily offensive petroleum/plastic odor</td>': '<td className="p-6 text-red-600 font-bold">{t(`${p}.rowAromaPET`)}</td>',
        '<td className="p-6 font-black uppercase">Flame Behavior</td>': '<td className="p-6 font-black uppercase">{t(`${p}.rowFlame`)}</td>',
        '<td className="p-6">Clean, light yellow/blue flame. Burns steadily without black smoke</td>': '<td className="p-6">{t(`${p}.rowFlamePLA`)}</td>',
        '<td className="p-6">Intense dark yellow flame. Emits heavy soot and black smoke</td>': '<td className="p-6">{t(`${p}.rowFlamePET`)}</td>',
        '<td className="p-6 font-black uppercase">Melting & Dripping</td>': '<td className="p-6 font-black uppercase">{t(`${p}.rowMelt`)}</td>',
        '<td className="p-6">Does not drip. The material burns directly into carbon residue</td>': '<td className="p-6">{t(`${p}.rowMeltPLA`)}</td>',
        '<td className="p-6">Melts rapidly, curls back, and drops blazing liquid beads</td>': '<td className="p-6">{t(`${p}.rowMeltPET`)}</td>',
        '<td className="p-6 font-black uppercase">Post-Burn Ash</td>': '<td className="p-6 font-black uppercase">{t(`${p}.rowAsh`)}</td>',
        '<td className="p-6">Solid, brittle black/grey ash. Crumbles easily between fingers</td>': '<td className="p-6">{t(`${p}.rowAshPLA`)}</td>',
        '<td className="p-6">Hardened, smooth, glassy dark plastic bead. Cannot be crumbled</td>': '<td className="p-6">{t(`${p}.rowAshPET`)}</td>',
        
        # Sticker anatomy
        '<NeoBadge color="lime">BIO_STICKER_INTEGRITY</NeoBadge>': '<NeoBadge color="lime">{t(`${p}.infographicBadge`)}</NeoBadge>',
        'PLA Sticker Anatomy': '{t(`${p}.infographicTitle`)}',
        'Our compostable stickers are engineered from 3 distinct layers that break down fully without toxic residues:': '{t(`${p}.infographicDesc`)}',
        'Compostable Surface Film': '{t(`${p}.stickerLayer1Title`)}',
        'Coated surface optimized for crisp eco-inks': '{t(`${p}.stickerLayer1Desc`)}',
        'TUV OK Home Bio-Adhesive': '{t(`${p}.stickerLayer2Title`)}',
        'Backyard-degradable adhesive that holds tight': '{t(`${p}.stickerLayer2Desc`)}',
        'Recyclable Glassine Liner': '{t(`${p}.stickerLayer3Title`)}',
        'Silicone-free paper base for smooth application': '{t(`${p}.stickerLayer3Desc`)}',
        
        # FAQ Title
        'Frequently Asked <span className="text-[#3b82f6]">Questions</span>': '{t(`${p}.faqTitle`)} <span className="text-[#3b82f6]">{t(`${p}.faqTitleHighlight`)}</span>',
        
        # CTA Section
        '<NeoBadge color="magenta">VERIFY_YOUR_SOURCE</NeoBadge>': '<NeoBadge color="magenta">{t(`${p}.ctaBadge`)}</NeoBadge>',
        'Audit Your<br/>\n            Packaging': '{t(`${p}.ctaTitle1`)}<br/>{t(`${p}.ctaTitle2`)}',
        "Unsure if your current packaging is truly biodegradable or greenwashed? Let our engineering team run a laboratory combustion and compliance audit on your samples.": '{t(`${p}.ctaDesc`)}',
        '<NeoButton href="https://calendly.com/30-min-free-packaging-consultancy">Request Laboratory Audit</NeoButton>': '<NeoButton href="https://calendly.com/30-min-free-packaging-consultancy">{t(`${p}.ctaButton1`)}</NeoButton>',
        '<NeoButton variant="secondary" href="#sample-kit">Get Sample Kit</NeoButton>': '<NeoButton variant="secondary" href="#sample-kit">{t(`${p}.ctaButton2`)}</NeoButton>'
    }
    
    for k, v in replacements.items():
        if k in content:
            content = content.replace(k, v)
        else:
            print(f"  Warning: substring not found: {k[:40]}...")
            
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)
    print(f"Refactored {filepath} successfully.")

def refactor_pouch_compostable():
    filepath = os.path.join(MATERIALS_DIR, 'PouchCompostablePage.tsx')
    print(f"Refactoring {filepath}...")
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
        
    content = insert_translation_hook(content, 'pouchCompostable')
    
    replacements = {
        'const title = "Compostable Packaging - Zero Waste Solutions | POUCH.ECO"': 'const title = t(`${p}.title`)',
        'const description = "Certified compostable packaging solutions for startups. EN 13432 and ASTM D6400 compliant. Low MOQ 500 units. High-barrier plant-based pouches."': 'const description = t(`${p}.description`)',
        
        # Hero
        '<span className="font-[\'JetBrains_Mono\'] font-bold text-sm">MATERIAL_CLASS: BIO_01</span>': '<span className="font-[\'JetBrains_Mono\'] font-bold text-sm">{t(`${p}.heroBadge`)}</span>',
        'Zero.<br/>\n                Waste.<br/>\n                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#10b981] to-[#D4FF00] drop-shadow-[4px_4px_0px_rgba(0,0,0,1)]">Future.</span>': '{t(`${p}.heroTitle1`)}<br/>{t(`${p}.heroTitle2`)}<br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-[#10b981] to-[#D4FF00] drop-shadow-[4px_4px_0px_rgba(0,0,0,1)]">{t(`${p}.heroTitleHighlight`)}</span>',
        """              <p className="font-['JetBrains_Mono'] font-bold text-lg md:text-xl max-w-md bg-white border-2 border-black p-4 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] text-black">
                &gt; Plant-based materials.<br/>
                &gt; Certified circularity.<br/>
                &gt; High performance barrier.
              </p>""": """              <p className="font-['JetBrains_Mono'] font-bold text-lg md:text-xl max-w-md bg-white border-2 border-black p-4 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] text-black">
                {t(`${p}.heroDescription`)}
              </p>""",
        '<NeoButton href="https://calendly.com/30-min-free-packaging-consultancy">Consult Now</NeoButton>': '<NeoButton href="https://calendly.com/30-min-free-packaging-consultancy">{t(`${p}.heroCta1`)}</NeoButton>',
        '<NeoButton variant="secondary">View Certs</NeoButton>': '<NeoButton variant="secondary">{t(`${p}.heroCta2`)}</NeoButton>',
        'BPI_CERT_ACTIVE': '{t(`${p}.bpiCertBadge`)}',
        
        # Science section
        '<h2 className="font-black text-5xl md:text-6xl uppercase leading-none">The Science of<br/>Degradation</h2>': '<h2 className="font-black text-5xl md:text-6xl uppercase leading-none">{t(`${p}.scienceTitle1`)}<br/>{t(`${p}.scienceTitle2`)}</h2>',
        'Our compostable pouches are engineered from renewable resources like corn starch, wood pulp, and sugarcane. They break down into water, CO2, and biomass within 90-180 days in commercial composting environments.': '{t(`${p}.scienceDesc`)}',
        '<h4 className="font-black uppercase mb-2">Home</h4>': '<h4 className="font-black uppercase mb-2">{t(`${p}.homeCompostTitle`)}</h4>',
        'Degrades in garden composters': '{t(`${p}.homeCompostDesc`)}',
        '<h4 className="font-black uppercase mb-2">Industrial</h4>': '<h4 className="font-black uppercase mb-2">{t(`${p}.industrialCompostTitle`)}</h4>',
        'Degrades in city-run facilities': '{t(`${p}.industrialCompostDesc`)}',
        
        # Cert protocol
        '<h3 className="font-black text-3xl uppercase mb-8 text-[#D4FF00]">Certified Protocol</h3>': '<h3 className="font-black text-3xl uppercase mb-8 text-[#D4FF00]">{t(`${p}.certifiedBadge`)}</h3>',
        """              {[
                { name: 'EN 13432', desc: 'European Standard for compostable packaging' },
                { name: 'ASTM D6400', desc: 'US Standard for biodegradable materials' },
                { name: 'BPI CERTIFIED', desc: 'Biodegradable Products Institute certified' },
                { name: 'OK COMPOST', desc: 'TÜV AUSTRIA Home & Industrial certification' }
              ].map(cert => (""": """              [
                { name: 'EN 13432', desc: t(`${p}.cert1Desc`) },
                { name: 'ASTM D6400', desc: t(`${p}.cert2Desc`) },
                { name: 'BPI CERTIFIED', desc: t(`${p}.cert3Desc`) },
                { name: 'OK COMPOST', desc: t(`${p}.cert4Desc`) }
              ].map(cert => (""",
              
        # Guide
        'The Ultimate Guide to <span className="text-[#10b981]">Compostable Packaging</span>': '{t(`${p}.guideTitle`)} <span className="text-[#10b981]">{t(`${p}.guideTitleHighlight`)}</span>',
        'The packaging industry is at a critical turning point. With plastic pollution becoming an undeniable global crisis, consumers are demanding brands take accountability for their environmental footprint. Compostable packaging is no longer a niche trend; it is the definitive solution for the future of FMCG (Fast-Moving Consumer Goods). At POUCH.ECO, we engineer certified compostable pouches that offer the barrier protection your product needs and the end-of-life solution the planet deserves.': '{t(`${p}.guideDesc1`)}',
        'alt="Infographic showing the breakdown of compostable packaging in a home compost bin"': 'alt={t(`${p}.guideImage1Alt`)}',
        '<h3 className="text-2xl font-[\'Space_Grotesk\'] font-black uppercase text-black mt-12 mb-4">Home Compostable vs. Industrial Compostable</h3>': '<h3 className="text-2xl font-[\'Space_Grotesk\'] font-black uppercase text-black mt-12 mb-4">{t(`${p}.guideSection1Title`)}</h3>',
        'It is crucial for brands to understand the difference between the two primary types of compostable packaging. <strong>Industrial compostable</strong> materials (often PLA-based) require specific conditions—high temperatures (around 60°C/140°F), specific humidity levels, and specialized microbes—to break down. These conditions are typically only found in commercial composting facilities, which are not accessible to all consumers.': '{t(`${p}.guideSection1Paragraph1`)}',
        'Our flagship solution is <strong>Home Compostable</strong> packaging. Certified by TUV Austria (OK Compost Home), these materials are formulated from plant-based polymers like cellulose and starch that can break down in a standard backyard compost bin at ambient temperatures. Within 180 days, the packaging decomposes entirely into water, CO2, and nutrient-rich biomass, leaving zero microplastics or toxic residue behind.': '{t(`${p}.guideSection1Paragraph2`)}',
        '<h3 className="text-2xl font-[\'Space_Grotesk\'] font-black uppercase text-black mt-12 mb-4">Overcoming the Barrier Challenge</h3>': '<h3 className="text-2xl font-[\'Space_Grotesk\'] font-black uppercase text-black mt-12 mb-4">{t(`${p}.guideSection2Title`)}</h3>',
        'Historically, compostable materials suffered from poor barrier properties, making them unsuitable for products that are sensitive to moisture or oxygen (like coffee, crispy snacks, or pet kibble). We have solved this issue.': '{t(`${p}.guideSection2Paragraph1`)}',
        'alt="Premium sustainable packaging providing high barrier protection"': 'alt={t(`${p}.guideImage2Alt`)}',
        'Through advanced lamination techniques and proprietary plant-based metallization, our high-barrier compostable pouches achieve an Oxygen Transmission Rate (OTR) and Water Vapor Transmission Rate (WVTR) that rival traditional multi-layer plastics and aluminum foil. Your products stay fresh, crunchy, and aromatic throughout their entire shelf life.': '{t(`${p}.guideSection2Paragraph2`)}',
        '<h3 className="text-2xl font-[\'Space_Grotesk\'] font-black uppercase text-black mt-12 mb-4">The Circular Economy in Action</h3>': '<h3 className="text-2xl font-[\'Space_Grotesk\'] font-black uppercase text-black mt-12 mb-4">{t(`${p}.guideSection3Title`)}</h3>',
        'Adopting compostable packaging is a powerful way to align your brand with the principles of the Circular Economy. Instead of a linear "take-make-dispose" model, our packaging follows a "grow-make-return" cycle. The plants used to create our films absorb CO2 during growth. After fulfilling their purpose as premium packaging, they return to the earth as compost, which can then be used to grow more plants. This closed-loop system is the gold standard of sustainability.': '{t(`${p}.guideSection3Paragraph1`)}',
        
        # FAQ Title
        'Frequently Asked <span className="text-[#10b981]">Questions</span>': '{t(`${p}.faqTitle`)} <span className="text-[#10b981]">{t(`${p}.faqTitleHighlight`)}</span>',
        
        # FAQs mapping
        """            {[
              {
                q: 'What certifications do your compostable pouches hold?',
                a: 'Our home compostable materials are certified by TUV Austria (OK Compost Home) and meet the stringent European standard EN 13432 as well as the American standard ASTM D6400.'
              },
              {
                q: 'How long does it take for a home compostable bag to break down?',
                a: 'Under standard home composting conditions (ambient temperature, presence of moisture and microorganisms), our pouches break down into organic biomass within 180 days.'
              },
              {
                q: 'Are the zippers and valves also compostable? Do I need to rip them off?',
                a: 'Yes! Every single component of our compostable pouches—including the press-to-close zippers, coffee degassing valves, and tear notches—is made from certified compostable materials. You DO NOT need to rip off the zipper or remove the valve before composting. Just toss the entire empty bag directly into your compost bin!'
              },
              {
                q: 'Can I print my brand design on compostable bags?',
                a: 'Absolutely. We use state-of-the-art digital printing with compostable, low-migration inks to print high-resolution graphics, vibrant colors, and sharp text directly onto the packaging.'
              }
            ]""": """            [
              { q: t(`${p}.faq.q1`), a: t(`${p}.faq.a1`) },
              { q: t(`${p}.faq.q2`), a: t(`${p}.faq.a2`) },
              { q: t(`${p}.faq.q3`), a: t(`${p}.faq.a3`) },
              { q: t(`${p}.faq.q4`), a: t(`${p}.faq.a4`) }
            ]""",
            
        # CTA
        '<h2 className="font-black text-5xl md:text-7xl uppercase text-white">Join the Circle</h2>': '<h2 className="font-black text-5xl md:text-7xl uppercase text-white">{t(`${p}.ctaTitle`)}</h2>',
        'Switch your brand to compostable packaging and lead the zero-waste movement.': '{t(`${p}.ctaDesc`)}',
        '<NeoButton href="https://calendly.com/30-min-free-packaging-consultancy">Start My Project</NeoButton>': '<NeoButton href="https://calendly.com/30-min-free-packaging-consultancy">{t(`${p}.ctaButton1`)}</NeoButton>',
        '<NeoButton variant="secondary" className="!text-black">Request Samples</NeoButton>': '<NeoButton variant="secondary" className="!text-black">{t(`${p}.ctaButton2`)}</NeoButton>'
    }
    
    for k, v in replacements.items():
        if k in content:
            content = content.replace(k, v)
        else:
            print(f"  Warning: substring not found: {k[:40]}...")
            
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)
    print(f"Refactored {filepath} successfully.")

def refactor_pouch_homecompostable():
    filepath = os.path.join(MATERIALS_DIR, 'PouchHomeCompostablePage.tsx')
    print(f"Refactoring {filepath}...")
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
        
    content = insert_translation_hook(content, 'pouchHomeCompostable')
    
    replacements = {
        "<title>Home Compostable Packaging | TUV OK Home Certified | Pouch.eco</title>": "<title>{t(`${p}.title`)}</title>",
        'content="Certified home compostable pouches. Breaks down in your backyard compost bin within 180 days. TUV OK Home certified, food-safe, and high-barrier."': 'content={t(`${p}.description`)}',
        'content="home compostable, backyard compost, TUV OK Home, sustainable pouches, biodegradable bags"': 'content={t(`${p}.keywords`)}',
        
        # Hero
        '<NeoBadge color="magenta">HOME_COMPOST_READY_V2.0</NeoBadge>': '<NeoBadge color="magenta">{t(`${p}.heroBadge`)}</NeoBadge>',
        '<h1 className="mt-8 font-black text-6xl md:text-9xl leading-none uppercase text-black">Back.<br/>Yard.<br/>Soil.</h1>': '<h1 className="mt-8 font-black text-6xl md:text-9xl leading-none uppercase text-black">{t(`${p}.heroTitle1`)}<br/>{t(`${p}.heroTitle2`)}<br/>{t(`${p}.heroTitleHighlight`)}</h1>',
        'TUV OK Home Certified. Breaks down in 180 days in ambient backyard conditions. No industrial heat, no chemical catalysts—just biology.': '{t(`${p}.heroDescription`)}',
        '<NeoButton variant="primary" to="/sample">Order Home Samples</NeoButton>': '<NeoButton variant="primary" to="/sample">{t(`${p}.heroCta1`)}</NeoButton>',
        '<NeoButton variant="secondary" to="/products">Shop Home Compostable</NeoButton>': '<NeoButton variant="secondary" to="/products">{t(`${p}.heroCta2`)}</NeoButton>',
        
        # Comparison Section
        '<NeoBadge color="blue">LOW_TEMPERATURE_BREAKDOWN</NeoBadge>': '<NeoBadge color="blue">{t(`${p}.comparisonBadge`)}</NeoBadge>',
        '<h2 className="font-black text-5xl md:text-7xl uppercase mt-6 leading-tight italic">Beyond<br/>Industrial.</h2>': '<h2 className="font-black text-5xl md:text-7xl uppercase mt-6 leading-tight italic">{t(`${p}.comparisonTitle`)}<br/>{t(`${p}.comparisonTitleHighlight`)}</h2>',
        'Standard "compostable" plastics require 60°C+ industrial facilities. Our Home Compostable range is engineered for the 20-30°C temperature profile of a residential compost bin.': '{t(`${p}.comparisonDescription`)}',
        '<h4 className="font-black uppercase mb-4 text-pink-600 italic">The Barrier Breakthrough</h4>': '<h4 className="font-black uppercase mb-4 text-pink-600 italic">{t(`${p}.comparisonBoxTitle`)}</h4>',
        "We've successfully layered home-compostable cellulose with bio-polymers to achieve high moisture barriers previously only possible in industrial-only or fossil-based films.": '{t(`${p}.comparisonBoxDesc`)}',
        'alt="Home Compostable Process"': 'alt={t(`${p}.comparisonImageAlt`)}',
        
        # Timeline
        '<h2 className="font-black text-5xl md:text-7xl uppercase mb-16 text-pink-400">Backyard Lifecycle</h2>': '<h2 className="font-black text-5xl md:text-7xl uppercase mb-16 text-pink-400">{t(`${p}.timelineTitle`)}</h2>',
        """  const DECOMPOSITION_STAGES = [
    { day: 'Day 0', status: 'Intact', desc: 'Pouch enters home compost bin (20-30°C).' },
    { day: 'Day 45', status: 'Fragmentation', desc: 'Structural integrity begins to fail. Microbes colonize surface.' },
    { day: 'Day 120', status: 'Bio-Assimilation', desc: 'Visible pieces vanish. Material converted to CO2, water, & biomass.' },
    { day: 'Day 180', status: 'Soil Nutrients', desc: 'Fully assimilated. No microplastics or toxic residues remain.' }
  ]""": """  const DECOMPOSITION_STAGES = [
    { day: t(`${p}.timelineStages.stage0.day`), status: t(`${p}.timelineStages.stage0.status`), desc: t(`${p}.timelineStages.stage0.desc`) },
    { day: t(`${p}.timelineStages.stage1.day`), status: t(`${p}.timelineStages.stage1.status`), desc: t(`${p}.timelineStages.stage1.desc`) },
    { day: t(`${p}.timelineStages.stage2.day`), status: t(`${p}.timelineStages.stage2.status`), desc: t(`${p}.timelineStages.stage2.desc`) },
    { day: t(`${p}.timelineStages.stage3.day`), status: t(`${p}.timelineStages.stage3.status`), desc: t(`${p}.timelineStages.stage3.desc`) }
  ]""",
  
        # Cards
        '<h4 className="font-black text-xl mb-4 uppercase text-pink-600">TUV OK Home</h4>': '<h4 className="font-black text-xl mb-4 uppercase text-pink-600">{t(`${p}.card1Title`)}</h4>',
        'The gold standard. Guarantees complete biodegradation in backyard compost within 6 months, including zippers and valves.': '{t(`${p}.card1Description`)}',
        '<h4 className="font-black text-xl mb-4 uppercase text-pink-600">ABA AS 5810</h4>': '<h4 className="font-black text-xl mb-4 uppercase text-pink-600">{t(`${p}.card2Title`)}</h4>',
        'Australian standard compliance for home compostability, ensuring non-toxicity to worms and soil biology.': '{t(`${p}.card2Description`)}',
        '<h4 className="font-black text-xl mb-4 uppercase text-pink-600">EN 13432</h4>': '<h4 className="font-black text-xl mb-4 uppercase text-pink-600">{t(`${p}.card3Title`)}</h4>',
        'While industrial-focused, our home materials exceed all chemical and safety requirements of the EN 13432 directive.': '{t(`${p}.card3Description`)}',
        
        # CTA
        '<NeoBadge color="lime">SOIL_FRIENDLY</NeoBadge>': '<NeoBadge color="lime">{t(`${p}.ctaBadge`)}</NeoBadge>',
        '<h2 className="font-black text-6xl md:text-9xl uppercase leading-none">Soil.<br/>Not Waste.</h2>': '<h2 className="font-black text-6xl md:text-9xl uppercase leading-none">{t(`${p}.ctaTitle1`)}<br/>{t(`${p}.ctaTitle2`)}</h2>',
        'Ready to give your customers the ultimate eco-experience? Transition to Home Compostable pouches and lead the backyard revolution.': '{t(`${p}.ctaDescription`)}',
        '<NeoButton variant="primary" to="/sample" className="!bg-white !text-pink-600">Get Home Kit</NeoButton>': '<NeoButton variant="primary" to="/sample" className="!bg-white !text-pink-600">{t(`${p}.ctaButton1`)}</NeoButton>',
        'Backyard Strategy Call': '{t(`${p}.ctaButton2`)}'
    }
    
    for k, v in replacements.items():
        if k in content:
            content = content.replace(k, v)
        else:
            print(f"  Warning: substring not found: {k[:40]}...")
            
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)
    print(f"Refactored {filepath} successfully.")

def refactor_pouch_industrialcompostable():
    filepath = os.path.join(MATERIALS_DIR, 'PouchIndustrialCompostablePage.tsx')
    print(f"Refactoring {filepath}...")
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
        
    content = insert_translation_hook(content, 'pouchIndustrialCompostable')
    
    replacements = {
        "<title>Industrial Compostable Packaging | EN 13432 | Pouch.eco</title>": "<title>{t(`${p}.title`)}</title>",
        'content="Certified industrial compostable pouches. Optimized for commercial composting facilities. High-barrier, heat-sealable, and perfect for mass-market food products."': 'content={t(`${p}.description`)}',
        'content="industrial compostable, BPI certified, EN 13432, commercial composting, sustainable flexible packaging"': 'content={t(`${p}.keywords`)}',
        
        # Capabilities
        """  const INDUSTRIAL_CAPABILITIES = [
    { label: 'Shelf Stability', value: '12-24 Months', desc: 'Superior barrier structures compared to home-compostable variants.' },
    { label: 'Heat Resistance', value: 'Up to 90°C', desc: 'Capable of withstanding higher filling temperatures and hot environments.' },
    { label: 'Printing Clarity', value: 'Photo-Realistic', desc: 'Surface quality optimized for high-density flexo and digital inks.' },
    { label: 'Global Compliance', value: 'BPI / EN13432', desc: 'Standardized for city-wide composting programs across USA, UK, and EU.' }
  ]""": """  const INDUSTRIAL_CAPABILITIES = [
    { label: t(`${p}.capabilities.shelfStability.label`), value: t(`${p}.capabilities.shelfStability.value`), desc: t(`${p}.capabilities.shelfStability.desc`) },
    { label: t(`${p}.capabilities.heatResistance.label`), value: t(`${p}.capabilities.heatResistance.value`), desc: t(`${p}.capabilities.heatResistance.desc`) },
    { label: t(`${p}.capabilities.printingClarity.label`), value: t(`${p}.capabilities.printingClarity.value`), desc: t(`${p}.capabilities.printingClarity.desc`) },
    { label: t(`${p}.capabilities.globalCompliance.label`), value: t(`${p}.capabilities.globalCompliance.value`), desc: t(`${p}.capabilities.globalCompliance.desc`) }
  ]""",
        
        # Hero
        '<NeoBadge color="lime">INDUSTRIAL_EFFICIENCY_V4.0</NeoBadge>': '<NeoBadge color="lime">{t(`${p}.heroBadge`)}</NeoBadge>',
        '<h1 className="mt-8 font-black text-6xl md:text-9xl leading-none uppercase text-[#D4FF00]">Scale.<br/>Heat.<br/>Soil.</h1>': '<h1 className="mt-8 font-black text-6xl md:text-9xl leading-none uppercase text-[#D4FF00]">{t(`${p}.heroTitle1`)}<br/>{t(`${p}.heroTitle2`)}<br/>{t(`${p}.heroTitleHighlight`)}</h1>',
        'EN 13432 & ASTM D6400 Certified. Engineered for city-wide commercial composting networks. High-performance sustainable barriers for mass retail.': '{t(`${p}.heroDescription`)}',
        '<NeoButton variant="primary" to="/sample" className="!bg-[#D4FF00] !text-black">Request Industrial Samples</NeoButton>': '<NeoButton variant="primary" to="/sample" className="!bg-[#D4FF00] !text-black">{t(`${p}.heroCta1`)}</NeoButton>',
        '<NeoButton variant="secondary" className="!border-[#D4FF00] !text-[#D4FF00]" to="/products">View Eco Catalog</NeoButton>': '<NeoButton variant="secondary" className="!border-[#D4FF00] !text-[#D4FF00]" to="/products">{t(`${p}.heroCta2`)}</NeoButton>',
        
        # Stats Grid - values mapped dynamically above
        'alt="Industrial Composting Process"': 'alt={t(`${p}.lifecycleImageAlt`)}',
        
        # Manufacturing
        '<NeoBadge color="blue">SCALABLE_BIO_LOOP</NeoBadge>': '<NeoBadge color="blue">{t(`${p}.lifecycleBadge`)}</NeoBadge>',
        '<h2 className="font-black text-5xl md:text-7xl uppercase mt-6 leading-tight italic">Built for<br/>City-Wide<br/>Impact.</h2>': '<h2 className="font-black text-5xl md:text-7xl uppercase mt-6 leading-tight italic">{t(`${p}.lifecycleTitle1`)}<br/>{t(`${p}.lifecycleTitle2`)}<br/>{t(`${p}.lifecycleTitleHighlight`)}</h2>',
        'Industrial composting facilities provide the managed heat (60°C+) and precise microbial conditions required to break down high-performance bio-polymers like PLA and PBS. This allows us to create pouches with superior oil and moisture resistance that still return to soil.': '{t(`${p}.lifecycleDescription`)}',
        '<h4 className="font-black uppercase text-xs">Facility Compatible</h4>': '<h4 className="font-black uppercase text-xs">{t(`${p}.facilityTitle`)}</h4>',
        'Standardized for global municipal green bin programs.': '{t(`${p}.facilityDesc`)}',
        '<h4 className="font-black uppercase text-xs">High Fill Temps</h4>': '<h4 className="font-black uppercase text-xs">{t(`${p}.fillTitle`)}</h4>',
        'Safe for hot-fill products up to 90°C.': '{t(`${p}.fillDesc`)}',
        
        # Pathway
        '<h2 className="font-black text-5xl md:text-7xl uppercase text-[#D4FF00]">Verified Pathways</h2>': '<h2 className="font-black text-5xl md:text-7xl uppercase text-[#D4FF00]">{t(`${p}.certTitle`)}</h2>',
        'Accepted by retailers and cities worldwide.': '{t(`${p}.certSubtitle`)}',
        'North American Industrial Standard': '{t(`${p}.cert1Desc`)}',
        'European Union Compostable Mandate': '{t(`${p}.cert2Desc`)}',
        'OK Industrial Compost Certified': '{t(`${p}.cert3Desc`)}',
        '<h4 className="font-black uppercase text-3xl">BPI</h4>': '<h4 className="font-black uppercase text-3xl">{t(`${p}.cert1Title`)}</h4>',
        '<h4 className="font-black uppercase text-3xl">EN 13432</h4>': '<h4 className="font-black uppercase text-3xl">{t(`${p}.cert2Title`)}</h4>',
        '<h4 className="font-black uppercase text-3xl">TUV IND</h4>': '<h4 className="font-black uppercase text-3xl">{t(`${p}.cert3Title`)}</h4>',
        
        # CTA
        '<NeoBadge color="magenta">UPGRADE_TO_INDUSTRIAL</NeoBadge>': '<NeoBadge color="magenta">{t(`${p}.ctaBadge`)}</NeoBadge>',
        '<h2 className="font-black text-6xl md:text-9xl uppercase leading-none">Global Ready.<br/>Soil Safe.</h2>': '<h2 className="font-black text-6xl md:text-9xl uppercase leading-none">{t(`${p}.ctaTitle1`)}<br/>{t(`${p}.ctaTitle2`)}</h2>',
        'Ready to bring certified industrial-compostable solutions to your retail lineup? Partner with us for high-barrier performance that returns to earth.': '{t(`${p}.ctaDescription`)}',
        '<NeoButton variant="dark" to="/sample">Request Samples</NeoButton>': '<NeoButton variant="dark" to="/sample">{t(`${p}.ctaButton1`)}</NeoButton>',
        'Scale Consultation': '{t(`${p}.ctaButton2`)}'
    }
    
    for k, v in replacements.items():
        if k in content:
            content = content.replace(k, v)
        else:
            print(f"  Warning: substring not found: {k[:40]}...")
            
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)
    print(f"Refactored {filepath} successfully.")

def refactor_pouch_kraftduplex():
    filepath = os.path.join(MATERIALS_DIR, 'PouchKraftDuplexPage.tsx')
    print(f"Refactoring {filepath}...")
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
        
    content = insert_translation_hook(content, 'pouchKraftDuplex')
    
    replacements = {
        "<title>Kraft Paper Stand Up Pouches - Duplex High-Barrier | Pouch.eco</title>": "<title>{t(`${p}.title`)}</title>",
        'content="Premium wholesale duplex kraft paper stand-up pouches. Natural earthy aesthetic, high moisture barrier lining, and food-safe heat seal layer. Startup MOQ 500 units."': 'content={t(`${p}.description`)}',
        
        # Badges & Hero
        '<NeoBadge color="amber">POPULAR</NeoBadge>': '<NeoBadge color="amber">{t(`${p}.popularBadge`)}</NeoBadge>',
        '<NeoBadge color="lime">NATURAL AESTHETIC</NeoBadge>': '<NeoBadge color="lime">{t(`${p}.naturalAestheticBadge`)}</NeoBadge>',
        '<h1 className="font-black text-5xl md:text-7xl leading-none mb-6">\n                Kraft Duplex<br/>\n                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-amber-800">Stand Up Pouch</span>\n              </h1>': '<h1 className="font-black text-5xl md:text-7xl leading-none mb-6">{t(`${p}.heroTitle1`)}<br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-amber-800">{t(`${p}.heroTitle2`)}</span></h1>',
        'The artisan\'s choice. Natural unbleached kraft paper exterior with high-barrier interior lamination. Keeps coffee, snacks, and tea aromatic and moisture-free.': '{t(`${p}.heroSubtitle`)}',
        '<NeoButton variant="primary">Request Kraft Samples</NeoButton>': '<NeoButton variant="primary">{t(`${p}.heroCta1`)}</NeoButton>',
        '<NeoButton variant="secondary">Download Tech Specs</NeoButton>': '<NeoButton variant="secondary">{t(`${p}.heroCta2`)}</NeoButton>',
        '4.9/5 from 140+ brands': '{t(`${p}.starsLabel`)}',
        '500 units': '{t(`${p}.moqValue`)}',
        'Low MOQ': '{t(`${p}.moqLabel`)}',
        
        # Details
        '<NeoBadge color="amber">DUPLEX_BARRIER_V3</NeoBadge>': '<NeoBadge color="amber">{t(`${p}.barrierBadge`)}</NeoBadge>',
        '<h2 className="font-black text-5xl md:text-7xl uppercase mt-6 leading-tight italic">Artisan Style.<br/>Airtight Seal.</h2>': '<h2 className="font-black text-5xl md:text-7xl uppercase mt-6 leading-tight italic">{t(`${p}.barrierTitle1`)}<br/>{t(`${p}.barrierTitle2`)}</h2>',
        'Don\'t sacrifice product freshness for raw design. Our Duplex Kraft pouches feature a micro-thin high-barrier lining that blocks humidity and oxygen while displaying a tactile organic exterior.': '{t(`${p}.barrierDescription`)}',
        'Aqueous Coating or Biodegradable Inner Linings': '{t(`${p}.check1`)}',
        'Heavy Duty Airtight Resealable Zippers': '{t(`${p}.check2`)}',
        
        # What's Inside
        '<h3 className="font-black text-2xl mb-4 text-amber-900">What\'s Inside?</h3>': '<h3 className="font-black text-2xl mb-4 text-amber-900">{t(`${p}.whatsInsideTitle`)}</h3>',
        '<p className="font-bold">Outer Layer: Organic Kraft (120g)</p>': '<p className="font-bold">{t(`${p}.layerOuter`)}</p>',
        '<p className="text-sm text-gray-600">Tactile, raw feel made from sustainably-managed FSC wood pulp.</p>': '<p className="text-sm text-gray-600">{t(`${p}.layerOuterDesc`)}</p>',
        '<p className="font-bold">Barrier Layer: EVOH / PET Lamination</p>': '<p className="font-bold">{t(`${p}.layerBarrier`)}</p>',
        '<p className="text-sm text-gray-600">Blocks moisture, odors, and atmospheric oxygen to prevent spoilage.</p>': '<p className="text-sm text-gray-600">{t(`${p}.layerBarrierDesc`)}</p>',
        '<p className="font-bold">Inner Sealant: LLDPE Food-Grade</p>': '<p className="font-bold">{t(`${p}.layerInner`)}</p>',
        '<p className="text-sm text-gray-600">Lower-temperature melting point ensures fast heat-sealing on production lines.</p>': '<p className="text-sm text-gray-600">{t(`${p}.layerInnerDesc`)}</p>',
        '<p className="font-bold">Adhesive: Solvent-Free Polyurethane</p>': '<p className="font-bold">{t(`${p}.layerAdhesive`)}</p>',
        '<p className="text-sm text-gray-600">Zero chemical migration, completely safe for baby foods and powders.</p>': '<p className="text-sm text-gray-600">{t(`${p}.layerAdhesiveDesc`)}</p>',
        
        # Perfect for
        'Perfect For Food & Retail': '{t(`${p}.perfectTitle`)}',
        'Organic products thrive in Duplex Kraft structures.': '{t(`${p}.perfectSubtitle`)}',
        
        # Applications
        """  const APPLICATIONS = [
    'Organic Coffee Beans',
    'Loose Leaf Herbal Tea',
    'Granola & Rolled Oats',
    'Dehydrated Pet Kibble',
    'Gourmet Spices & Salts',
    'Artisan Baking Flours',
    'Superfood Protein Blends',
    'Dried Fruit Snacks',
    'Handmade Organic Soaps',
    'Premium Bath Salts'
  ]""": """  const APPLICATIONS = [
    t(`${p}.applications.app1`),
    t(`${p}.applications.app2`),
    t(`${p}.applications.app3`),
    t(`${p}.applications.app4`),
    t(`${p}.applications.app5`),
    t(`${p}.applications.app6`),
    t(`${p}.applications.app7`),
    t(`${p}.applications.app8`),
    t(`${p}.applications.app9`),
    t(`${p}.applications.app10`)
  ]""",
        
        # Expert Card
        '<h3 className="font-black text-2xl mb-2">Need Transparent Windows?</h3>': '<h3 className="font-black text-2xl mb-2">{t(`${p}.expertCardTitle`)}</h3>',
        '<p className="text-gray-600 mb-4">\n                    We can add custom rectangular, oval, or die-cut windows so consumers can see your product inside. Consult our design desk.\n                  </p>': '<p className="text-gray-600 mb-4">{t(`${p}.expertCardDesc`)}</p>',
        '<NeoButton variant="primary" className="text-sm py-3 px-6">\n                    Discuss Window Styles\n                  </NeoButton>': '<NeoButton variant="primary" className="text-sm py-3 px-6">{t(`${p}.expertCardCta`)}</NeoButton>',
        
        # CTA
        'Ready to Start?<br/>\n            <span className="text-[#D4FF00]">Low MOQ 500 Pcs.</span>': '{t(`${p}.ctaTitle1`)}<br/><span className="text-[#D4FF00]">{t(`${p}.ctaTitle2`)}</span>',
        'Level up your brand\'s shelf presentation. Order custom sizes, zippers, and window placements with low startup quantities.': '{t(`${p}.ctaDescription`)}',
        'Starting from $0.45/pouch · High-resolution digital prints': '{t(`${p}.ctaPrice`)}',
        '<NeoButton variant="primary">Get Free Sample Pack</NeoButton>': '<NeoButton variant="primary">{t(`${p}.ctaBtn1`)}</NeoButton>',
        'Talk to Packaging Engineer': '{t(`${p}.ctaBtn2`)}'
    }
    
    for k, v in replacements.items():
        if k in content:
            content = content.replace(k, v)
        else:
            print(f"  Warning: substring not found: {k[:40]}...")
            
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)
    print(f"Refactored {filepath} successfully.")

def refactor_pouch_krafthighbarrier():
    filepath = os.path.join(MATERIALS_DIR, 'PouchKraftHighBarrierPage.tsx')
    print(f"Refactoring {filepath}...")
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
        
    content = insert_translation_hook(content, 'pouchKraftHighBarrier')
    
    replacements = {
        "<title>Kraft Paper Pouches - High Barrier Triplex | Pouch.eco</title>": "<title>{t(`${p}.title`)}</title>",
        'content="Technical guide to kraft paper stand-up pouches with ultimate high-barrier aluminum and VM-PET layers. Maximum shelf life up to 24 months. MOQ 500 units."': 'content={t(`${p}.description`)}',
        
        # Badges & Hero
        '<NeoBadge color="amber">POPULAR</NeoBadge>': '<NeoBadge color="amber">{t(`${p}.popularBadge`)}</NeoBadge>',
        '<NeoBadge color="lime">MAXIMUM SHIELD</NeoBadge>': '<NeoBadge color="lime">{t(`${p}.maxBarrierBadge`)}</NeoBadge>',
        '<h1 className="font-black text-5xl md:text-7xl leading-none mb-6">\n                Kraft Triplex<br/>\n                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-amber-800">Max Shield Pouch</span>\n              </h1>': '<h1 className="font-black text-5xl md:text-7xl leading-none mb-6">{t(`${p}.heroTitle1`)}<br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-amber-800">{t(`${p}.heroTitle2`)}</span></h1>',
        'The ultimate shield. Combines natural organic kraft paper with high-barrier metalized core layers. Extends roasted coffee and sensitive foods\' shelf life up to 2 years.': '{t(`${p}.heroSubtitle`)}',
        '<NeoButton variant="primary">Request Max Samples</NeoButton>': '<NeoButton variant="primary">{t(`${p}.heroCta1`)}</NeoButton>',
        '<NeoButton variant="secondary">Download Barrier Data</NeoButton>': '<NeoButton variant="secondary">{t(`${p}.heroCta2`)}</NeoButton>',
        '4.9/5 from 210+ roasters': '{t(`${p}.ratingText`)}',
        '500 units': '{t(`${p}.moqValue`)}',
        'Low MOQ': '{t(`${p}.moqLabel`)}',
        
        # Shield section
        '<NeoBadge color="amber">TRIPLEX_SHIELD_V4</NeoBadge>': '<NeoBadge color="amber">{t(`${p}.shieldBadge`)}</NeoBadge>',
        '<h2 className="font-black text-5xl md:text-7xl uppercase mt-6 leading-tight italic">Maximum<br/>Atmospheric<br/>Shield.</h2>': '<h2 className="font-black text-5xl md:text-7xl uppercase mt-6 leading-tight italic">{t(`${p}.shieldTitle1`)}<br/>{t(`${p}.shieldTitle2`)}<br/>{t(`${p}.shieldTitleHighlight`)}</h2>',
        'Sensitive ingredients like coffee, sports nutrition, and milk powders oxidize rapidly. Our Kraft Triplex laminate features an embedded metalized layer, creating a zero-permeability shield against light, gas, and humidity.': '{t(`${p}.shieldDescription`)}',
        'WVTR &lt; 0.1 g/m²/day (Ultimate Moisture Resistance)': '{t(`${p}.check1`)}',
        'OTR &lt; 0.1 cc/m²/day (Oxygen Proof Lamination)': '{t(`${p}.check2`)}',
        
        # What's Inside
        '<h3 className="font-black text-2xl mb-4 text-amber-900">What\'s Inside?</h3>': '<h3 className="font-black text-2xl mb-4 text-amber-900">{t(`${p}.whatsInsideTitle`)}</h3>',
        '<p className="font-bold">Outer Layer: Tactile Kraft (120g)</p>': '<p className="font-bold">{t(`${p}.layerOuter`)}</p>',
        '<p className="text-sm text-gray-600">Premium raw feel that establishes organic brand credibility.</p>': '<p className="text-sm text-gray-600">{t(`${p}.layerOuterDesc`)}</p>',
        '<p className="font-bold">Barrier Layer: Aluminum / VM-PET Foil</p>': '<p className="font-bold">{t(`${p}.layerBarrier`)}</p>',
        '<p className="text-sm text-gray-600">Creates a dense metallic barrier that blocks 100% of light and gas.</p>': '<p className="text-sm text-gray-600">{t(`${p}.layerBarrierDesc`)}</p>',
        '<p className="font-bold">Inner Sealant: Linear Low-Density PE</p>': '<p className="font-bold">{t(`${p}.layerInner`)}</p>',
        '<p className="text-sm text-gray-600">Ensures airtight seal integrity and high burst strength under pressure.</p>': '<p className="text-sm text-gray-600">{t(`${p}.layerInnerDesc`)}</p>',
        '<p className="font-bold">Adhesive: High-Molecular Solvent-Free</p>': '<p className="font-bold">{t(`${p}.layerAdhesive`)}</p>',
        '<p className="text-sm text-gray-600">Industrial-strength bonding agent that prevents delamination.</p>': '<p className="text-sm text-gray-600">{t(`${p}.layerAdhesiveDesc`)}</p>',
        
        # Perfect for
        'Perfect For Sensitive Products': '{t(`${p}.perfectTitle`)}',
        'Products that need ultimate shelf life thrive in Kraft Triplex.': '{t(`${p}.perfectSubtitle`)}',
        
        # Applications
        """  const APPLICATIONS = [
    'Freshly Roasted Coffee',
    'Organic Whey Protein',
    'Finely Ground Matcha',
    'Vitamin & Mineral Powders',
    'Nutritious Baby Formulas',
    'Freeze-Dried Fruit Powders',
    'Active Dry Yeast',
    'Raw Cacao Powders',
    'Sensitive Pharmaceutical Powders',
    'Premium Pet Supplements'
  ]""": """  const APPLICATIONS = [
    t(`${p}.applications.app1`),
    t(`${p}.applications.app2`),
    t(`${p}.applications.app3`),
    t(`${p}.applications.app4`),
    t(`${p}.applications.app5`),
    t(`${p}.applications.app6`),
    t(`${p}.applications.app7`),
    t(`${p}.applications.app8`),
    t(`${p}.applications.app9`),
    t(`${p}.applications.app10`)
  ]""",
        
        # Expert Card
        '<h3 className="font-black text-2xl mb-2">Need Coffee Degassing Valves?</h3>': '<h3 className="font-black text-2xl mb-2">{t(`${p}.expertCardTitle`)}</h3>',
        '<p className="text-gray-600 mb-4">\n                    We install premium one-way degassing valves to release carbon dioxide pressure while preventing ambient air from entering. Essential for roasted coffee.\n                  </p>': '<p className="text-gray-600 mb-4">{t(`${p}.expertCardDesc`)}</p>',
        '<NeoButton variant="primary" className="text-sm py-3 px-6">\n                    Discuss Valve Options\n                  </NeoButton>': '<NeoButton variant="primary" className="text-sm py-3 px-6">{t(`${p}.expertCardCta`)}</NeoButton>',
        
        # CTA
        'Ready to Start?<br/>\n            <span className="text-[#D4FF00]">Low MOQ 500 Pcs.</span>': '{t(`${p}.ctaTitle1`)}<br/><span className="text-[#D4FF00]">{t(`${p}.ctaTitle2`)}</span>',
        'Get ultimate product freshness without the huge volume commitments. Custom digital printing, zippers, and tear notches included.': '{t(`${p}.ctaDescription`)}',
        'Starting from $0.55/pouch · Full-bleed high-res graphics': '{t(`${p}.ctaPrice`)}',
        '<NeoButton variant="primary">Get Free Sample Pack</NeoButton>': '<NeoButton variant="primary">{t(`${p}.ctaBtn1`)}</NeoButton>',
        'Talk to Barrier Engineer': '{t(`${p}.ctaBtn2`)}'
    }
    
    for k, v in replacements.items():
        if k in content:
            content = content.replace(k, v)
        else:
            print(f"  Warning: substring not found: {k[:40]}...")
            
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)
    print(f"Refactored {filepath} successfully.")

def refactor_pouch_pcr():
    filepath = os.path.join(MATERIALS_DIR, 'PouchPCRPage.tsx')
    print(f"Refactoring {filepath}...")
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
        
    content = insert_translation_hook(content, 'pouchPCR')
    
    replacements = {
        "<title>PCR Recycled Packaging | Post-Consumer Content | Pouch.eco</title>": "<title>{t(`${p}.title`)}</title>",
        'content="Sustainable packaging with 30-100% PCR (Post-Consumer Recycled) plastic. Reduce virgin plastic use and meet global circular economy mandates. FDA food-safe approved."': 'content={t(`${p}.description`)}',
        'content="PCR plastic, recycled pouch, post-consumer recycled, circular economy packaging, GRS certified"': 'content={t(`${p}.keywords`)}',
        
        # Benefits array
        """  const PCR_BENEFITS = [
    { icon: Recycle, title: 'Virgin Plastic Reduction', desc: 'Up to 100% reduction in the use of fossil-fuel derived virgin plastics.' },
    { icon: BarChart3, title: 'Carbon Savings', desc: 'Up to 25% lower carbon footprint compared to standard plastic pouches.' },
    { icon: Shield, title: 'FDA Food Safe', desc: 'Medical-grade decontamination ensures PCR is safe for food contact applications.' },
    { icon: Factory, title: 'GRS Certified', desc: 'Verified by the Global Recycled Standard for chain of custody and social responsibility.' }
  ]""": """  const PCR_BENEFITS = [
    { icon: Recycle, title: t(`${p}.benefits.virginReduction.title`), desc: t(`${p}.benefits.virginReduction.desc`) },
    { icon: BarChart3, title: t(`${p}.benefits.carbonSavings.title`), desc: t(`${p}.benefits.carbonSavings.desc`) },
    { icon: Shield, title: t(`${p}.benefits.fdaFoodSafe.title`), desc: t(`${p}.benefits.fdaFoodSafe.desc`) },
    { icon: Factory, title: t(`${p}.benefits.grsCertified.title`), desc: t(`${p}.benefits.grsCertified.desc`) }
  ]""",
        
        # Hero
        '<NeoBadge color="cyan">CIRCULAR_LOOP_V5.0</NeoBadge>': '<NeoBadge color="cyan">{t(`${p}.heroBadge`)}</NeoBadge>',
        '<h1 className="mt-8 font-black text-6xl md:text-9xl leading-none uppercase">Waste.<br/>Woven.<br/>New.</h1>': '<h1 className="mt-8 font-black text-6xl md:text-9xl leading-none uppercase">{t(`${p}.heroTitle1`)}<br/>{t(`${p}.heroTitle2`)}<br/>{t(`${p}.heroTitleHighlight`)}</h1>',
        'Post-Consumer Recycled (PCR) content. 30-100% recycled plastic. High-barrier, food-safe, and planet-ready for the circular economy.': '{t(`${p}.heroDescription`)}',
        '<NeoButton variant="primary" to="/sample">Get PCR Samples</NeoButton>': '<NeoButton variant="primary" to="/sample">{t(`${p}.heroCta1`)}</NeoButton>',
        '<NeoButton variant="secondary" to="/products">View PCR Catalog</NeoButton>': '<NeoButton variant="secondary" to="/products">{t(`${p}.heroCta2`)}</NeoButton>',
        
        # Value Chain
        '<NeoBadge color="magenta">THE_VALUE_CHAIN</NeoBadge>': '<NeoBadge color="magenta">{t(`${p}.valueChainBadge`)}</NeoBadge>',
        '<h2 className="font-black text-5xl md:text-7xl uppercase mt-6 leading-tight italic">Closing<br/>The Loop.</h2>': '<h2 className="font-black text-5xl md:text-7xl uppercase mt-6 leading-tight italic">{t(`${p}.valueChainTitle1`)}<br/>{t(`${p}.valueChainTitle2`)}</h2>',
        'PCR gives a second life to plastic waste that would otherwise end up in landfills or oceans. By incorporating 30% to 100% PCR content into your pouches, you directly fund the global recycling infrastructure.': '{t(`${p}.valueChainDescription`)}',
        'Mandate Compliant: UK Plastic Tax & EU PPWR': '{t(`${p}.valueChainCheck1`)}',
        'Post-Consumer Waste Diverted: 2.5 Tons/Order (Avg)': '{t(`${p}.valueChainCheck2`)}',
        'alt="PCR Circular Economy"': 'alt={t(`${p}.valueChainImageAlt`)}',
        
        # Matrix
        '<h2 className="font-black text-5xl md:text-7xl uppercase mb-16 text-center text-cyan-400 italic">PCR Grade Matrix</h2>': '<h2 className="font-black text-5xl md:text-7xl uppercase mb-16 text-center text-cyan-400 italic">{t(`${p}.matrixTitle`)}</h2>',
        '<th className="p-6 text-left">PCR PERCENTAGE</th>': '<th className="p-6 text-left">{t(`${p}.thPercentage`)}</th>',
        '<th className="p-6 text-left">BEST USE CASE</th>': '<th className="p-6 text-left">{t(`${p}.thUseCase`)}</th>',
        '<th className="p-6 text-left">TAX IMPACT</th>': '<th className="p-6 text-left">{t(`${p}.thTaxImpact`)}</th>',
        '<th className="p-6 text-left">CLARITY LEVEL</th>': '<th className="p-6 text-left">{t(`${p}.thClarityLevel`)}</th>',
        
        '<td className="p-6 font-black uppercase">30% PCR</td>': '<td className="p-6 font-black uppercase">{t(`${p}.matrix30.pct`)}</td>',
        '<td className="p-6 text-cyan-400">Mainstream Retail</td>': '<td className="p-6 text-cyan-400">{t(`${p}.matrix30.use`)}</td>',
        '<td className="p-6">UK Tax Exempt</td>': '<td className="p-6">{t(`${p}.matrix30.tax`)}</td>',
        '<td className="p-6">High (95%)</td>': '<td className="p-6">{t(`${p}.matrix30.clarity`)}</td>',
        
        '<td className="p-6 font-black uppercase">50% PCR</td>': '<td className="p-6 font-black uppercase">{t(`${p}.matrix50.pct`)}</td>',
        '<td className="p-6 text-cyan-400">DTC & E-commerce</td>': '<td className="p-6 text-cyan-400">{t(`${p}.matrix50.use`)}</td>',
        '<td className="p-6">Tax Exempt + Rebates</td>': '<td className="p-6">{t(`${p}.matrix50.tax`)}</td>',
        '<td className="p-6">Medium (85%)</td>': '<td className="p-6">{t(`${p}.matrix50.clarity`)}</td>',
        
        '<td className="p-6 font-black uppercase">100% PCR</td>': '<td className="p-6 font-black uppercase">{t(`${p}.matrix100.pct`)}</td>',
        '<td className="p-6 text-cyan-400">Eco-Pioneer Brands</td>': '<td className="p-6 text-cyan-400">{t(`${p}.matrix100.use`)}</td>',
        '<td className="p-6">Max Sustainability Credits</td>': '<td className="p-6">{t(`${p}.matrix100.tax`)}</td>',
        '<td className="p-6">Matte/Opaque (70%)</td>': '<td className="p-6">{t(`${p}.matrix100.clarity`)}</td>',
        
        # Guide
        'The Ultimate Guide to <span className="text-[#3b82f6]">PCR Packaging</span>': '{t(`${p}.guideTitle`)} <span className="text-[#3b82f6]">{t(`${p}.guideTitleHighlight`)}</span>',
        'As consumers and regulatory bodies increasingly push for sustainable alternatives to virgin plastics, Post-Consumer Recycled (PCR) packaging has become a cornerstone of the circular economy. PCR packaging is manufactured using plastics that have already been used by consumers, collected through recycling programs, cleaned, melted down, and repurposed into new film. At POUCH.ECO, we utilize advanced PCR materials to help brands reduce their reliance on new fossil fuels while maintaining premium packaging aesthetics.': '{t(`${p}.guideParagraph1`)}',
        'alt="Diagram explaining the circular lifecycle of Post-Consumer Recycled packaging"': 'alt={t(`${p}.guideImage1Alt`)}',
        '<h3 className="text-2xl font-[\'Space_Grotesk\'] font-black uppercase text-black mt-12 mb-4">Why Choose PCR Over Virgin Plastic?</h3>': '<h3 className="text-2xl font-[\'Space_Grotesk\'] font-black uppercase text-black mt-12 mb-4">{t(`${p}.guideSection1Title`)}</h3>',
        'The primary benefit of PCR packaging is its immediate impact on carbon emissions and plastic waste. By utilizing recycled content, you are diverting plastic from landfills and oceans. Manufacturing PCR resins requires significantly less energy and water compared to producing virgin plastics from crude oil. This translates to a lower overall carbon footprint for your product packaging.': '{t(`${p}.guideSection1Paragraph1`)}',
        'Furthermore, incorporating PCR materials signals to your customers that your brand is actively participating in environmental stewardship. In regions with strict plastic packaging taxes (like the UK and parts of the EU), using a high percentage of PCR content can also yield significant financial savings by exempting your brand from these taxes.': '{t(`${p}.guideSection1Paragraph2`)}',
        '<h3 className="text-2xl font-[\'Space_Grotesk\'] font-black uppercase text-black mt-12 mb-4">Addressing the "Cloudy" PCR Myth</h3>': '<h3 className="text-2xl font-[\'Space_Grotesk\'] font-black uppercase text-black mt-12 mb-4">{t(`${p}.guideSection2Title`)}</h3>',
        'Historically, a major drawback of PCR films was their appearance. Early iterations of recycled plastics often had a cloudy, yellowish, or inconsistent visual profile, making them unsuitable for premium brands that required high-clarity windows or vibrant printing.': '{t(`${p}.guideSection2Paragraph1`)}',
        'alt="Clear PCR pouch demonstrating high transparency and print quality"': 'alt={t(`${p}.guideImage2Alt`)}',
        'Advancements in sorting and purification technologies have changed the game. Our modern PCR films boast excellent clarity and consistency. We use high-quality, FDA-approved PCR resins (typically rPET or rPE) sandwiched between thin layers of virgin material or functional barriers. This ensures that your custom artwork prints flawlessly, the colors pop, and any transparent windows remain crystal clear, showcasing your product perfectly.': '{t(`${p}.guideSection2Paragraph2`)}',
        '<h3 className="text-2xl font-[\'Space_Grotesk\'] font-black uppercase text-black mt-12 mb-4">Food Safety and PCR</h3>': '<h3 className="text-2xl font-[\'Space_Grotesk\'] font-black uppercase text-black mt-12 mb-4">{t(`${p}.guideSection3Title`)}</h3>',
        'A common concern regarding recycled plastics is food safety. Can you package consumables in plastic that was previously used? The answer is yes, provided the correct technologies are used. We utilize FDA Letter of No Objection (LNO) certified PCR resins. Through advanced super-cleaning processes, any potential contaminants from the plastic\'s previous life are completely removed. For added safety, the PCR layer is often encapsulated within the structural layers of the pouch, ensuring it never comes into direct contact with the food product.': '{t(`${p}.guideSection3Paragraph1`)}',
        
        # FAQ Title
        'Frequently Asked <span className="text-[#3b82f6]">Questions</span>': '{t(`${p}.faqTitle`)} <span className="text-[#3b82f6]">{t(`${p}.faqTitleHighlight`)}</span>',
        
        # FAQs mapping
        """            {[
              {
                q: 'What does PCR stand for?',
                a: 'PCR stands for Post-Consumer Recycled. It refers to plastic materials that have been used by end consumers, disposed of in recycling bins, and then processed into new raw materials.'
              },
              {
                q: 'Is your PCR packaging food safe?',
                a: 'Yes. We use FDA-approved PCR resins that have undergone rigorous super-cleaning processes. To guarantee absolute safety, the recycled content is often layered between virgin materials, meaning it never directly touches your food product.'
              },
              {
                q: 'Can I claim 100% PCR content?',
                a: 'To maintain the structural integrity, sealability, and food safety of the pouch, it is currently impossible to make a flexible pouch from 100% PCR. Our high-performance pouches typically utilize between 30% and 50% PCR content by weight.'
              },
              {
                q: 'Are PCR pouches recyclable?',
                a: 'Yes, our mono-material PCR pouches (like our PE/PE structures) are fully recyclable at store drop-off locations. This means your packaging can be recycled again, continuing the circular lifecycle.'
              }
            ]""": """            [
              { q: t(`${p}.faq.q1`), a: t(`${p}.faq.a1`) },
              { q: t(`${p}.faq.q2`), a: t(`${p}.faq.a2`) },
              { q: t(`${p}.faq.q3`), a: t(`${p}.faq.a3`) },
              { q: t(`${p}.faq.q4`), a: t(`${p}.faq.a4`) }
            ]""",
            
        # CTA
        '<NeoBadge color="magenta">JOIN_THE_LOOP</NeoBadge>': '<NeoBadge color="magenta">{t(`${p}.ctaBadge`)}</NeoBadge>',
        '<h2 className="font-black text-6xl md:text-9xl uppercase leading-none">Waste.<br/>New Again.</h2>': '<h2 className="font-black text-6xl md:text-9xl uppercase leading-none">{t(`${p}.ctaTitle1`)}<br/>{t(`${p}.ctaTitle2`)}</h2>',
        'Ready to lead the circular economy? Transition your brand to PCR content and eliminate virgin plastic from your supply chain.': '{t(`${p}.ctaDescription`)}',
        '<NeoButton variant="dark" to="/sample">Get PCR Samples</NeoButton>': '<NeoButton variant="dark" to="/sample">{t(`${p}.ctaButton1`)}</NeoButton>',
        'Circular Strategy Call': '{t(`${p}.ctaButton2`)}'
    }
    
    for k, v in replacements.items():
        if k in content:
            content = content.replace(k, v)
        else:
            print(f"  Warning: substring not found: {k[:40]}...")
            
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)
    print(f"Refactored {filepath} successfully.")

def refactor_pouch_plasticfreekraft():
    filepath = os.path.join(MATERIALS_DIR, 'PouchPlasticFreeKraftPage.tsx')
    print(f"Refactoring {filepath}...")
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
        
    content = insert_translation_hook(content, 'pouchPlasticFreeKraft')
    
    replacements = {
        'const title = "Is Kraft Paper Plastic-Free? Fun Facts & Reality | POUCH.ECO"': 'const title = t(`${p}.title`)',
        'const description = "Discover if kraft paper bags are truly plastic-free. Learn about hidden PE linings, the role of compostable PLA, and 5 fun facts about sustainable packaging."': 'const description = t(`${p}.description`)',
        
        # Hero
        'DEBUNKING_MYTHS: KRAFT_VS_PLASTIC': '{t(`${p}.heroBadge`)}',
        'Paper.<br/>\n                Or.<br/>\n                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-amber-500 drop-shadow-[4px_4px_0px_rgba(0,0,0,1)]">Plastic?</span>': '{t(`${p}.heroTitle1`)}<br/>{t(`${p}.heroTitle2`)}<br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-amber-500 drop-shadow-[4px_4px_0px_rgba(0,0,0,1)]">{t(`${p}.heroTitleHighlight`)}</span>',
        """              <p className="font-['JetBrains_Mono'] font-bold text-lg md:text-xl max-w-md bg-white border-2 border-black p-4 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] text-black">
                &gt; Is Kraft paper truly plastic-free?<br/>
                &gt; The hidden truth about linings.<br/>
                &gt; 5 fun facts you MUST know.
              </p>""": """              <p className="font-['JetBrains_Mono'] font-bold text-lg md:text-xl max-w-md bg-white border-2 border-black p-4 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] text-black">
                {t(`${p}.heroDescription`)}
              </p>""",
        'Ask an Expert': '{t(`${p}.heroCta1`)}',
        'View Materials': '{t(`${p}.heroCta2`)}',
        'alt="Kraft Paper Pouch"': 'alt={t(`${p}.heroImageAlt`)}',
        'HIDDEN_LINING_DETECTED': '{t(`${p}.heroBadge2`)}',
        
        # Reality
        '<h2 className="font-black text-5xl md:text-6xl uppercase leading-none text-black">The Kraft<br/>Reality Check</h2>': '<h2 className="font-black text-5xl md:text-6xl uppercase leading-none text-black">{t(`${p}.realityTitle1`)}<br/>{t(`${p}.realityTitle2`)}</h2>',
        'Most kraft paper bags are <strong>laminated</strong>. That "natural" brown exterior often hides a layer of PE (Polyethylene) or PP (Polypropylene) inside. Why? Because paper alone can\'t keep air out or oil in.': '{t(`${p}.realityDesc`)}',
        'Greenwashing Alert': '{t(`${p}.greenwashingBadge`)}',
        
        # 5 Facts Title & loop
        '<h3 className="font-black text-3xl uppercase mb-8 text-[#D4FF00]">5 Fun Facts</h3>': '<h3 className="font-black text-3xl uppercase mb-8 text-[#D4FF00]">{t(`${p}.factsTitle`)}</h3>',
        """              {[
                { title: 'Strength First', desc: 'Kraft = "Strength" in German. Engineered for durability, not just eco-looks.' },
                { title: 'Recycling Fail', desc: 'Plastic-lined paper is nearly impossible to recycle. It\'s a hybrid monster.' },
                { title: 'PLA is King', desc: 'Truly plastic-free bags use PLA lining made from plant starch.' },
                { title: 'Brown vs White', desc: 'Brown kraft is unbleached; white is bleached for high-impact print.' },
                { title: 'New Laws', desc: 'California SB 54 is banning non-compostable hybrid materials.' }
              ].map((fact, idx) => (""": """              [
                { title: t(`${p}.facts.fact1.title`), desc: t(`${p}.facts.fact1.desc`) },
                { title: t(`${p}.facts.fact2.title`), desc: t(`${p}.facts.fact2.desc`) },
                { title: t(`${p}.facts.fact3.title`), desc: t(`${p}.facts.fact3.desc`) },
                { title: t(`${p}.facts.fact4.title`), desc: t(`${p}.facts.fact4.desc`) },
                { title: t(`${p}.facts.fact5.title`), desc: t(`${p}.facts.fact5.desc`) }
              ].map((fact, idx) => (""",
              
        # Table
        '<h2 className="font-black text-5xl md:text-6xl uppercase mb-12 text-center">Truth Table</h2>': '<h2 className="font-black text-5xl md:text-6xl uppercase mb-12 text-center">{t(`${p}.tableTitle`)}</h2>',
        '<th className="p-4 text-left uppercase">Type</th>': '<th className="p-4 text-left uppercase">{t(`${p}.thType`)}</th>',
        '<th className="p-4 text-center uppercase">Lining</th>': '<th className="p-4 text-center uppercase">{t(`${p}.thLining`)}</th>',
        '<th className="p-4 text-center uppercase">Plastic-Free?</th>': '<th className="p-4 text-center uppercase">{t(`${p}.thPlasticFree`)}</th>',
        '<th className="p-4 text-center uppercase">Compostable?</th>': '<th className="p-4 text-center uppercase">{t(`${p}.thCompostable`)}</th>',
        
        '<td className="p-4 uppercase">Standard Kraft</td>': '<td className="p-4 uppercase">{t(`${p}.row1.type`)}</td>',
        '<td className="p-4 text-center uppercase">PE / PP</td>': '<td className="p-4 text-center uppercase">{t(`${p}.row1.lining`)}</td>',
        '<td className="p-4 text-center text-red-600">NO</td>': '<td className="p-4 text-center text-red-600">{t(`${p}.row1.plasticFree`)}</td>',
        '<td className="p-4 text-center">NO</td>': '<td className="p-4 text-center">{t(`${p}.row1.compostable`)}</td>',
        
        '<td className="p-4 uppercase">Recyclable Kraft</td>': '<td className="p-4 uppercase">{t(`${p}.row2.type`)}</td>',
        '<td className="p-4 text-center uppercase">Aqueous</td>': '<td className="p-4 text-center uppercase">{t(`${p}.row2.lining`)}</td>',
        '<td className="p-4 text-center text-amber-600">PARTIAL</td>': '<td className="p-4 text-center text-amber-600">{t(`${p}.row2.plasticFree`)}</td>',
        '<td className="p-4 text-center">DEPENDS</td>': '<td className="p-4 text-center">{t(`${p}.row2.compostable`)}</td>',
        
        '<td className="p-4 uppercase">Bio-Kraft</td>': '<td className="p-4 uppercase">{t(`${p}.row3.type`)}</td>',
        '<td className="p-4 text-center uppercase">PLA / PBS</td>': '<td className="p-4 text-center uppercase">{t(`${p}.row3.lining`)}</td>',
        '<td className="p-4 text-center text-green-600">YES</td>': '<td className="p-4 text-center text-green-600">{t(`${p}.row3.plasticFree`)}</td>',
        '<td className="p-4 text-center text-green-600">YES</td>': '<td className="p-4 text-center text-green-600">{t(`${p}.row3.compostable`)}</td>',
        
        # AI Tips
        'AI_SEARCH_TIPS': '{t(`${p}.aiBadge`)}',
        'Try asking Gemini or ChatGPT:': '{t(`${p}.aiIntro`)}',
        """              {[
                "Which kraft pouches are truly plastic-free?",
                "Is PLA-lined paper better than PE-lined paper?",
                "Certified compostable kraft pouches with low MOQ",
                "How to spot greenwashing in paper bags"
              ].map((query, idx) => (""": """              (t(`${p}.aiQueries`, { returnObjects: true }) as string[]).map((query, idx) => (""",
              
        # Future circular
        '<h2 className="font-black text-5xl md:text-6xl uppercase leading-none">The Future<br/>is Circular</h2>': '<h2 className="font-black text-5xl md:text-6xl uppercase leading-none">{t(`${p}.futureTitle1`)}<br/>{t(`${p}.futureTitle2`)}</h2>',
        'Stop settling for "eco-looking" packaging. At Pouch.eco, we provide the technical data and certifications to prove your brand is truly plastic-free.': '{t(`${p}.futureDesc`)}',
        'BPI_CERTIFIED': '{t(`${p}.futureBadge1`)}',
        'EN_13432': '{t(`${p}.futureBadge2`)}',
        'HOME_COMPOST': '{t(`${p}.futureBadge3`)}',
        
        # CTA Audit
        '<h2 className="font-black text-5xl md:text-7xl uppercase text-white">Audit Your<br/>Packaging</h2>': '<h2 className="font-black text-5xl md:text-7xl uppercase text-white">{t(`${p}.ctaTitle1`)}<br/>{t(`${p}.ctaTitle2`)}</h2>',
        'Is your current kraft bag a plastic hybrid? Let\'s fix that.': '{t(`${p}.ctaDesc`)}',
        '<NeoButton href="https://calendly.com/30-min-free-packaging-consultancy">Start Audit</NeoButton>': '<NeoButton href="https://calendly.com/30-min-free-packaging-consultancy">{t(`${p}.ctaBtn1`)}</NeoButton>',
        '<NeoButton variant="secondary" className="!text-black">Request Samples</NeoButton>': '<NeoButton variant="secondary" className="!text-black">{t(`${p}.ctaBtn2`)}</NeoButton>'
    }
    
    for k, v in replacements.items():
        if k in content:
            content = content.replace(k, v)
        else:
            print(f"  Warning: substring not found: {k[:40]}...")
            
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)
    print(f"Refactored {filepath} successfully.")

def refactor_pouch_recyclablemonope():
    filepath = os.path.join(MATERIALS_DIR, 'PouchRecyclableMonoPEPage.tsx')
    print(f"Refactoring {filepath}...")
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
        
    content = insert_translation_hook(content, 'pouchRecyclableMonoPE')
    
    replacements = {
        'const title = "Recyclable Stand Up Pouches - Certified Mono-PE Single-Material Packaging | Pouch.eco"': 'const title = t(`${p}.title`)',
        'const description = "Technical guide to factory-direct recyclable mono-PE flexible pouches. FDA-compliant, curbside LDPE #4 recyclability, and EVOH gas barrier layers with startup MOQ 500."': 'const description = t(`${p}.description`)',
        
        # Schema json
        '"name": "What is a mono-PE recyclable pouch?"': '"name": t(`${p}.faq1Question`)',
        '"text": "A mono-PE pouch is constructed entirely from a single polymer category (Polyethylene), making it 100% recyclable in curbside and retail drop-off streams, unlike conventional multi-layer laminates which go straight to landfill."': '"text": t(`${p}.faq1Answer`)',
        '"name": "What is the minimum order quantity (MOQ)?"': '"name": t(`${p}.faq2Question`)',
        '"text": "We offer a low MOQ of just 500 units for custom printed recyclable mono-PE stand-up pouches using digital printing, with zero plate setup costs."': '"text": t(`${p}.faq2Answer`)',
        '"name": "Can mono-PE achieve a high barrier for coffee and snacks?"': '"name": t(`${p}.faq3Question`)',
        '"text": "Yes! By co-extruding a micro-thin layer of EVOH (Ethylene Vinyl Alcohol) gas barrier, we achieve superior oxygen and moisture barrier performance, extending shelf life up to 12 months while keeping the pouch fully recyclable."': '"text": t(`${p}.faq3Answer`)',
        '"name": "What are the standard manufacturing lead times?"': '"name": t(`${p}.faq4Question`)',
        '"text": "Digital printed orders require 7-10 business days. Large rotogravure orders require 12-14 business days. Worldwide express air delivery takes 3-5 days."': '"text": t(`${p}.faq4Answer`)',
        '"name": "What certifications do your recyclable pouches have?"': '"name": t(`${p}.faq5Question`)',
        '"text": "Our recyclable mono-PE films are manufactured in Grade A BRCGS food safety compliant facilities. We provide certification reports matching US FDA and European food contact safety criteria."': '"text": t(`${p}.faq5Answer`)',
        '"name": "What specifications are required for a quotation?"': '"name": t(`${p}.faq6Question`)',
        '"text": "To provide an accurate pricing sheet, please provide your required bag style (stand-up, flat bottom), exact dimensions in millimeters, closure types (degassing valve, zipper), and quantities."': '"text": t(`${p}.faq6Answer`)',
        
        # specs list
        """  const specTranslations = [
    {
      label: "Polymer Matrix",
      val: "Single-Material Mono-PE",
      desc: "Constructed solely from Polyethylene resins (LDPE/LLDPE), ensuring complete compatibility with curbside and drop-off #4 recycling streams."
    },
    {
      label: "Active Barrier",
      val: "EVOH Gas Co-Extrusion (<1.5 cc)",
      desc: "Micro-thin co-extruded EVOH core layer provides gas barrier protection, keeping snacks and coffee perfectly fresh with no aluminum needed."
    },
    {
      label: "Seal Integrity",
      val: "Low-Temp Peeling Seal (110°C)",
      desc: "Specialized heat-seal layer seals quickly at lower temperatures, saving energy on automatic packaging lines and preventing zipper shrinkage."
    },
    {
      label: "Structural Fit",
      val: "Double-Wall Export Logistics",
      desc: "Packed inside robust double-wall cartons with an internal moisture barrier bag to block ambient humidity during sea shipping routes."
    }
  ]""": """  const specTranslations = [
    {
      label: t(`${p}.specs.polymer.label`),
      val: t(`${p}.specs.polymer.val`),
      desc: t(`${p}.specs.polymer.desc`)
    },
    {
      label: t(`${p}.specs.barrier.label`),
      val: t(`${p}.specs.barrier.val`),
      desc: t(`${p}.specs.barrier.desc`)
    },
    {
      label: t(`${p}.specs.seal.label`),
      val: t(`${p}.specs.seal.val`),
      desc: t(`${p}.specs.seal.desc`)
    },
    {
      label: t(`${p}.specs.structural.label`),
      val: t(`${p}.specs.structural.val`),
      desc: t(`${p}.specs.structural.desc`)
    }
  ]""",
        
        # faqs list
        """  const faqs = [
    {
      q: 'What is a mono-PE recyclable pouch?',
      a: 'Traditional flexible pouches laminate multiple incompatible plastics (like PET, Nylon, and Aluminum) together, making recycling impossible. Mono-PE pouches use single-material Polyethylene throughout all laminated layers, allowing them to be fully melted down and recycled into new PE products.'
    },
    {
      q: 'What is the MOQ for custom printed mono-PE pouches?',
      a: 'We offer an ultra-low startup MOQ of just 500 units for digitally printed recyclable stand-up pouches. This is perfect for small businesses testing flavor SKUs without plate setup fees.'
    },
    {
      q: 'How do you maintain product freshness without aluminum?',
      a: 'We co-extrude a micro-thin layer of EVOH (Ethylene Vinyl Alcohol) between our PE film layers. This delivers outstanding oxygen and moisture protection (WVTR & OTR < 1.5), preserving coffee, pet treats, and food freshness for 9-12 months while keeping the film 100% recyclable.'
    },
    {
      q: 'What are the production and delivery lead times?',
      a: 'Our typical digital print production time is 7-10 business days from blueprint sign-off. Plate production takes 12-14 days. We ship worldwide via express courier (3-5 days) or sea freight (40-60 days).'
    },
    {
      q: 'Are these pouches food-grade certified?',
      a: 'Yes, all our recyclable mono-PE materials are manufactured in BRCGS Grade A certified facilities. They are 100% food-grade compliant with FDA and EU food contact regulations, featuring solvent-free lamination.'
    },
    {
      q: 'What details are needed for a precise quotation?',
      a: 'Simply tell us your pouch style (e.g., Stand-Up, Flat Pouch), external dimensions in millimeters, whether you require standard zippers or degassing valves, and your quantities. We provide pricing sheets in under 24 hours.'
    }
  ]""": """  const faqs = [
    { q: t(`${p}.faqs.q1`), a: t(`${p}.faqs.a1`) },
    { q: t(`${p}.faqs.q2`), a: t(`${p}.faqs.a2`) },
    { q: t(`${p}.faqs.q3`), a: t(`${p}.faqs.a3`) },
    { q: t(`${p}.faqs.q4`), a: t(`${p}.faqs.a4`) },
    { q: t(`${p}.faqs.q5`), a: t(`${p}.faqs.a5`) },
    { q: t(`${p}.faqs.q6`), a: t(`${p}.faqs.a6`) }
  ]""",
        
        # Breadcrumbs
        'Home</Link>': '{t(`${p}.breadcrumbHome`)}</Link>',
        'Eco-Materials</Link>': '{t(`${p}.breadcrumbMaterials`)}</Link>',
        'Recyclable Mono-PE</span>': '{t(`${p}.breadcrumbActive`)}</span>',
        
        # Hero
        'MATERIAL: MONO_PE_04': '{t(`${p}.materialBadge`)}',
        'CURBSIDE #4 LDPE': '{t(`${p}.curbsideBadge`)}',
        '100% Recyclable.<br/>\n                Single Polymer.<br/>\n                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4FF00] to-[#FF00FF] drop-shadow-[4px_4px_0px_rgba(0,0,0,1)]">Circular.</span>': '{t(`${p}.heroTitle1`)}<br/>{t(`${p}.heroTitle2`)}<br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4FF00] to-[#FF00FF] drop-shadow-[4px_4px_0px_rgba(0,0,0,1)]">{t(`${p}.heroTitleHighlight`)}</span>',
        """              <p className="font-['JetBrains_Mono'] font-bold text-lg md:text-xl max-w-md bg-white border-4 border-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] text-black">
                &gt; Curbside recycling ready.<br/>
                &gt; EVOH high gas barrier core.<br/>
                &gt; Startup MOQ of 500 units.<br/>
                &gt; FDA food-grade compliance.
              </p>""": """              <p className="font-['JetBrains_Mono'] font-bold text-lg md:text-xl max-w-md bg-white border-4 border-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] text-black">
                {t(`${p}.heroDescription`)}
              </p>""",
        'Book Material Consult': '{t(`${p}.heroCta1`)}',
        'View Barrier Science': '{t(`${p}.heroCta2`)}',
        'alt="Recyclable Mono-PE Material Infographic Structure"': 'alt={t(`${p}.heroImageAlt`)}',
        'alt="Recycling Code #4 LDPE and #5 PP Stamps"': 'alt={t(`${p}.logoRecycleAlt`)}',
        
        # Recyclability verified
        '<NeoBadge color="magenta">RECYCLABILITY_VERIFIED</NeoBadge>': '<NeoBadge color="magenta">{t(`${p}.recycleBadge`)}</NeoBadge>',
        'Store Drop-off & Curbside Ready': '{t(`${p}.recycleTitle`)}',
        'Our mono-PE structures use single-material polyethylene resins, fully certified under standard recycling code **#4 LDPE**. This allows your packaging to be integrated into curbside collection programs and store drop-off bins worldwide.': '{t(`${p}.recycleParagraph1`)}',
        'By stamping our verified recycling logos on your custom pouch artwork, you clearly convey circular environmental actions directly to your consumer, boosting brand trust and retail placements.': '{t(`${p}.recycleParagraph2`)}',
        
        # Specs block
        '<NeoBadge color="lime">BARRIER_PERFORMANCE_SPECS</NeoBadge>': '<NeoBadge color="lime">{t(`${p}.specsBadge`)}</NeoBadge>',
        'Technical Specs</h2>': '{t(`${p}.specsTitle`)}</h2>',
        'MONO_PE_INTEGRITY': '{t(`${p}.specsBadgeRight`)}',
        
        # FAQ block
        '<NeoBadge color="magenta">MONO_PE_FAQ</NeoBadge>': '<NeoBadge color="magenta">{t(`${p}.faqBadge`)}</NeoBadge>',
        'Expert Procurement FAQ': '{t(`${p}.faqTitle`)}',
        'Bespoke recyclable pouch guidance for professional startup buyers.': '{t(`${p}.faqSubtitle`)}',
        
        # CTA block
        'RECYCLE_MANDATE': '{t(`${p}.ctaBadge`)}',
        'Go Fully Recyclable': '{t(`${p}.ctaTitle`)}',
        'Switch from complex non-recyclable laminates starting from 500 units.': '{t(`${p}.ctaDesc`)}',
        'Request Free Recyclable Samples': '{t(`${p}.ctaBtn1`)}',
        'Consult Packaging Engineer': '{t(`${p}.ctaBtn2`)}',
        'Seeking high-volume B2B wholesale mono-PE laminated rollstocks?': '{t(`${p}.wholesaleTitle`)}',
        'For high-speed form-fill-seal (VFFS/HFFS) lines, structural co-extrusions, and bulk volume quotes, check our wholesale portal:': '{t(`${p}.wholesaleDesc`)}'
    }
    
    for k, v in replacements.items():
        if k in content:
            content = content.replace(k, v)
        else:
            print(f"  Warning: substring not found: {k[:40]}...")
            
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)
    print(f"Refactored {filepath} successfully.")

def refactor_remaining_3():
    # We still need: PouchCelloKraftPage, PouchCombustionSafetyTestPage, PouchCompostablePage, PouchHomeCompostablePage,
    # PouchIndustrialCompostablePage, PouchKraftDuplexPage, PouchKraftHighBarrierPage, PouchPCRPage, PouchPlasticFreeKraftPage,
    # PouchRecyclableMonoPEPage.
    # Let's write refactor functions for PouchCelloKraftPage, PouchCombustionSafetyTestPage, etc.
    # Wait, we have functions for: biope, cellokraft, combustionsafetytest, compostable, homecompostable, industrialcompostable,
    # kraftduplex, krafthighbarrier, pcr, plasticfreekraft, recyclablemonope. That is 11 functions!
    pass

def main():
    if update_en_json():
        refactor_pouch_biope()
        refactor_pouch_cellokraft()
        refactor_pouch_combustionsafetytest()
        refactor_pouch_compostable()
        refactor_pouch_homecompostable()
        refactor_pouch_industrialcompostable()
        refactor_pouch_kraftduplex()
        refactor_pouch_krafthighbarrier()
        refactor_pouch_pcr()
        refactor_pouch_plasticfreekraft()
        refactor_pouch_recyclablemonope()

if __name__ == '__main__':
    main()
