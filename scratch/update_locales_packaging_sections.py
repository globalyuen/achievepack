import json
import os

BASE_DIR = os.path.abspath(os.path.join(__file__, '..', '..'))

locales = {
    'en': os.path.join(BASE_DIR, 'src', 'locales', 'en.json'),
    'zh-TW': os.path.join(BASE_DIR, 'src', 'locales', 'zh-TW.json'),
    'es': os.path.join(BASE_DIR, 'src', 'locales', 'es.json'),
    'fr': os.path.join(BASE_DIR, 'src', 'locales', 'fr.json'),
}

# The dictionary of all localization page data
DATA = {
    "en": {
        "flatPouches": {
            "title": "Flat Pouches | Three-Side Sealed Bags",
            "heroTitle": "Simple, But Don't Sleep on It",
            "heroSubtitle": "The OG of flexible packaging. Three-side sealed sachets for samples, single-serve, and products that don't need to stand.",
            "introSummary": "Flat pouches are the most cost-effective flexible option. Perfect for sample packs, sachets, and lightweight products. Low waste, lower cost, surprisingly versatile.",
            "cta": {
                "title": "Start Simple",
                "description": "Samples, sachets, or something else—tell us what you need.",
                "button": "Get Free Samples"
            },
            "sections": {
                "scenarioTrigger": {
                    "title": "Is This Page For You?",
                    "text": "If you need economical single-serve packaging, samples, or sachets—you're in the right place.",
                    "sampleProducers": {"title": "Sample Producers", "desc": "Product samples, trial sizes"},
                    "foodService": {"title": "Food Service", "desc": "Sauce sachets, sugar packets"},
                    "teaSpice": {"title": "Tea & Spice Brands", "desc": "Single-serve portions"}
                },
                "overview": {
                    "title": "What is a 3-Side Seal Pouch?",
                    "text": "A 3-side seal pouch (also called flat pouch or sachet) is sealed on three sides with an open top for filling. This is the most economical flexible packaging format, ideal for samples, single-serve products, and lightweight items.",
                    "advantagesTitle": "Key Advantages:",
                    "advantages": [
                        "Most cost-effective pouch format",
                        "Efficient material usage (less waste)",
                        "Compact shipping and storage",
                        "Quick to fill and seal",
                        "Easy tear-open access"
                    ]
                },
                "types": {
                    "title": "3-Side vs 4-Side Seal",
                    "seal3": {
                        "title": "3-Side Seal",
                        "desc": "Made from folded film, sealed on 3 sides:",
                        "items": [
                            "One folded edge (no seal)",
                            "Two side seals",
                            "Bottom or top seal after filling",
                            "Most economical option"
                        ]
                    },
                    "seal4": {
                        "title": "4-Side Seal",
                        "desc": "Made from two separate sheets:",
                        "items": [
                            "Sealed on all 4 edges",
                            "Slightly more surface area",
                            "Different front/back materials possible",
                            "Slightly higher cost"
                        ]
                    }
                },
                "applications": {
                    "title": "Common Applications",
                    "items": [
                        "Product samples", "Single-serve portions", "Spice sachets", "Sugar & sweetener packets",
                        "Sauce sachets", "Tea bags (outer)", "Seed packets", "Promotional items",
                        "Pharmaceutical sachets", "Cosmetic samples", "Hotel amenities", "Wet wipes"
                    ]
                },
                "features": {
                    "title": "Available Features",
                    "opening": {
                        "title": "Opening Features",
                        "items": ["Tear notch (V-notch or laser scored)", "Easy-peel seal", "Perforated line", "Die-cut shapes"]
                    },
                    "additional": {
                        "title": "Additional Options",
                        "items": ["Hang hole for display", "Clear window", "Matte/gloss finish", "Foil stamping"]
                    },
                    "galleryTitle": "3-Side Seal Pouch Options",
                    "gallery": ["3-Side Seal", "Clear Film", "Kraft Paper", "Compostable"]
                },
                "riskHedge": {
                    "title": "Still Not Sure? We Have Answers",
                    "items": [
                        {"q": "Are sachets eco-friendly?", "a": "Yes, PLA and paper/PLA options available"},
                        {"q": "What's the minimum order?", "a": "500 plain, 1,000 custom printed"},
                        {"q": "Can they have zippers?", "a": "Yes, or consider stand-up pouches for resealable"},
                        {"q": "Can I get samples?", "a": "Free sachet samples for evaluation"}
                    ]
                },
                "decisionCta": {
                    "title": "Choose How You'd Like to Connect",
                    "call": {"title": "Book a Call", "desc": "30-min free consultation", "btn": "Schedule Now"},
                    "email": {"title": "Email Quote", "desc": "Get response within 24hrs", "btn": "Send Email"},
                    "samples": {"title": "Free Samples", "desc": "Test sachets first", "btn": "Request Samples"}
                },
                "industryScenarios": {
                    "title": "Industry Applications",
                    "food": {"title": "Food & Condiments", "desc": "Sauce packets, sugar packets, seasoning sachets, spice packs", "badge": "45% market share"},
                    "cosmetics": {"title": "Cosmetic Samples", "desc": "Face mask serums, lotion samples, skincare trials", "badge": "30% market share"},
                    "pharma": {"title": "Pharmaceutical & Health", "desc": "Pharmaceutical portions, supplement trials, nutrition packs", "badge": "25% market share"},
                    "storyTitle": "Customer Success Story",
                    "storyText": "\"After switching to 3-side seal sachets, our condiment brand reduced unit costs by 35% while perfectly meeting food service single-use needs, significantly expanding market coverage.\"",
                    "storyAuthor": "— Condiment manufacturer, 2M+ units/month"
                },
                "marketData": {
                    "title": "Market Data & Intelligence",
                    "metrics": [
                        {"val": "$8.2B", "label": "global sachet market size", "desc": "2024 value"},
                        {"val": "6.8%", "label": "CAGR", "desc": "2024-2030"},
                        {"val": "35%", "label": "food service market share", "desc": "largest end-use sector"},
                        {"val": "150B", "label": "Asia-Pacific consumption", "desc": "world's largest market"}
                    ],
                    "trendTitle": "Market Trend Insights",
                    "trends": [
                        "Single-serve market: Convenience demand drives continued sachet growth",
                        "Compostable materials: Demand for PLA and eco-materials growing 25% annually"
                    ]
                },
                "materialComparison": {
                    "title": "Material Comparison",
                    "guideTitle": "Material Selection Guide",
                    "guideText": "3-side seal sachets are ideal for cost-sensitive single-use scenarios. For liquid packaging, choose aluminum foil laminate; for eco-friendly requirements, choose PLA compostable materials."
                }
            },
            "faqs": [
                {
                    "question": "What is the difference between 3-side seal and 4-side seal?",
                    "answer": "3-side seal pouches are made from folded film (sealed on 3 sides), while 4-side seal pouches use two separate sheets (sealed on all 4 sides). 3-side seal is more economical, while 4-side seal offers slightly more surface area and allows different materials on front and back."
                },
                {
                    "question": "What is the minimum order for sachets?",
                    "answer": "Our MOQ for custom printed sachets is 1,000 units. For plain sachets, we can offer 500 units. The lower price point per unit makes sachets economical even at smaller quantities."
                },
                {
                    "question": "Can flat pouches have a resealable zipper?",
                    "answer": "Traditional flat pouches are single-use, but we can add a zipper to create a resealable flat pouch. However, for resealable applications, stand-up pouches typically offer better functionality and value."
                },
                {
                    "question": "Are flat pouches available in compostable materials?",
                    "answer": "Yes, we offer compostable flat pouches made from PLA, paper/PLA, or cellulose-based films. These are certified to EN 13432 for industrial composting."
                }
            ],
            "tables": [
                {
                    "title": "Flat Pouch Size Guide",
                    "headers": ["Size", "Dimensions", "Typical Capacity", "Common Use"],
                    "rows": [
                        ["Small sachet", "50 × 70mm", "5-10g / 5-10ml", "Sugar packets, samples"],
                        ["Medium sachet", "70 × 100mm", "10-30g", "Spices, sauce sachets"],
                        ["Large sachet", "100 × 150mm", "30-100g", "Tea outer, seed packets"],
                        ["Sample pouch", "80 × 120mm", "20-50g", "Product samples"],
                        ["Promotional", "120 × 180mm", "50-100g", "Promotional items"]
                    ]
                }
            ]
        },
        "standUpPouches": {
            "title": "Stand-Up Pouches | Flexible Packaging Solutions",
            "heroTitle": "The Pouch That Stands on Its Own",
            "heroSubtitle": "Great shelf presence, endless customization options, and way less plastic than bottles. Zipper, slider, spout, or valve—pick your closure.",
            "introSummary": "Stand-up pouches give you the shelf impact of rigid packaging without the waste. Custom printed, resealable, high-barrier, compostable or recyclable. Starting at 500 units.",
            "cta": {
                "title": "Let's Design Yours",
                "description": "Tell us what you're packing and we'll recommend the right setup.",
                "button": "Get Free Samples"
            },
            "b2c": {
                "heroBadge": "Shelf-Standing Eco Packaging",
                "heroTitleLine1": "STAND-UP",
                "heroTitleLine2": "POUCHES",
                "heroSubtitle": "Certified compostable PLA plant-stars & recyclable Mono-PE structures. Outstanding barrier preservation, durable zippers, and custom sizes.",
                "btnCall": "Book Free Call",
                "btnWhatsapp": "WhatsApp Specialist",
                "badgeMoq": "LOW MOQ: 500!",
                "bento": {
                    "title": "ADVANCED FLEXIBLE PERFORMANCE",
                    "c1Title": "Compostable & Recyclable",
                    "c1Desc": "Choose 100% home/industrial compostable films or curbside recyclable mono-material structures. Help customers easily recycle.",
                    "c2Title": "OTR/WVTR Gas Locks",
                    "c2Desc": "High-performance inner barriers protect against oxygen and moisture transmission (<1.0 cc/m²/24hr). Extend product shelf life up to 12 months.",
                    "c3Title": "Stable Gusset Base",
                    "c3Desc": "Precision-folded oval or heavy-duty diagonal K-seal bottom options. Allows perfect shelf standing and maximizes internal volume.",
                    "c4Title": "Bespoke Closures",
                    "c4Desc": "Add resealable press-to-close zippers, tin-ties, sliders, one-way degassing coffee valves, or custom-shaped windows."
                },
                "showcase": {
                    "badge": "Visual Showcase",
                    "title": "REAL-WORLD PRODUCTION RUNS",
                    "desc": "Click any real-world print run sample to inspect our high-definition print clarity, gusset seals, and premium finishes:",
                    "gallery": [
                        {"title": "Premium Printed Stand-Up Pouch", "desc": "Custom printed stand-up pouch showcasing beautiful digital printing with high contrast and vibrant eco-inks."},
                        {"title": "Stand-Up Pouch Lifestyle Use", "desc": "Sustainable stand-up pouch presented in a modern, organic B2B food branding scene."},
                        {"title": "Heavy-Duty K-Seal Pouch Base", "desc": "diagonal K-seal bottom structure engineered to carry heavier items (up to 5kg) with extreme base stability."},
                        {"title": "Zero Waste Compostable Kraft SUP", "desc": "Official FSC-certified natural kraft paper stand-up pouch supporting high moisture protection and resealable zippers."}
                    ]
                },
                "specPricing": {
                    "title": "SPECIFICATIONS & PRICING",
                    "moqVal": "500 units",
                    "moqTitle": "Ultra-low custom MOQ",
                    "moqDesc": "Perfect for startup scaling, limited seasonal runs, and SKU testing",
                    "dielinesVal": "24 Hours",
                    "dielinesTitle": "complimentary dielines",
                    "dielinesDesc": "Get precise vector drawings adjusted for your exact volumetric specifications",
                    "samplesVal": "100% Free",
                    "samplesTitle": "compostable sample kit",
                    "samplesDesc": "Receive a kit containing 10 physical pouches to test barrier properties"
                },
                "table": {
                    "headers": ["Size (W x H + G)", "Volumetric Capacity", "Barrier Performance", "Best Application"],
                    "rows": [
                        ["70 x 110 + 40mm", "20g - 50g", "OTR & WVTR < 1.0", "DTC single-serve samples, gourmet spice pods, cosmetic powder sachets"],
                        ["100 x 150 + 60mm", "50g - 100g", "OTR & WVTR < 1.0", "Organic tea leaf bundles, visual candy displays, premium pet treats"],
                        ["120 x 200 + 80mm", "100g - 250g", "OTR & WVTR < 0.5", "Specialty coffee beans with degassing valve, loose granola, protein chips"],
                        ["150 x 230 + 90mm", "250g - 500g", "OTR & WVTR < 0.5", "Bulk snack bags, raw superfoods, powdered ingredients, supplement pouches"],
                        ["180 x 280 + 100mm", "500g - 1kg", "OTR & WVTR < 0.1", "Professional wholesale kibble pet food, premium retail bath salts, bulk seeds"]
                    ]
                },
                "faqs": [
                    {"question": "Are stand-up pouches really compostable or recyclable?", "answer": "Yes! We offer two distinct eco paths. Our compostable pouches feature BPI and TÜV certified bio-films (like plant-starch PLA and NatureFlex wood pulp) that safely decompose in 90-180 days under organic conditions. Our recyclable pouches use mono-material PE or PP structures that are fully compatible with store drop-off and standard circular recycling lines."},
                    {"question": "Will these pouches keep our dry food or coffee fresh?", "answer": "Absolutely. We apply high-barrier barrier films providing OTR & WVTR under 1.0 (some metallized cellulose stacks drop below 0.1). Combined with our certified one-way degassing valves, your product is protected from oxidation and moisture ingress for up to 12 months."},
                    {"question": "What bottom gusset formats do you support?", "answer": "We support standard round bottom gussets for light products, K-seal diagonal bases that push heavy loads outwards for maximum standing structure, and plow bottom gussets for single-source continuous rolls."},
                    {"question": "Do you offer custom sizes and shape tooling?", "answer": "Yes. Beyond standard sizes (from 20g to 5kg), we build custom dielines down to the millimeter scale. We also manufacture custom shapes (like round flasks or bottle shapes) with custom die-cut tooling to give your DTC brand unique shelf presence."}
                ]
            },
            "sections": {
                "overview": {
                    "title": "Custom Stand-Up Pouches Wholesale & Supply",
                    "text": "Custom Stand-Up Pouches (SUP) represent the gold standard in premium commercial flexible packaging. Derived from BRCGS-certified factory production lines, our pouches deliver maximum shelf presence, lightweight material savings, and robust barrier protection specifically calibrated for global DTC startups and scaling wholesale food brands.",
                    "kpisTitle": "Key B2B Commercial Performance Indicators:",
                    "kpis": [
                        "75% Lighter Footprint – Drastically reduces warehousing storage space and long-haul shipping emissions vs glass jars or metal tins.",
                        "360° Branding Real Estate – Full-width digital layout coverage printed with certified soy-based plant inks.",
                        "Resealable Integration – Durable zip locks and sliders that prevent product shelf degradation.",
                        "Automatic Line Compatibility – Engineered roll width tolerance allowing seamless integration on auto VFFS/HFFS lines."
                    ]
                },
                "specifications": {
                    "title": "Technical Parameter Translation & Buying Guide",
                    "text": "Professional procurement requires strict verification of material data. Here is how our raw technical metrics translate directly into B2B buying benefits:"
                },
                "applications": {
                    "title": "Target B2B Application Scenarios",
                    "text": "Our custom printed stand-up bags are engineered to meet specific regulatory and chemical barrier criteria across professional use cases:",
                    "coffee": {"title": "☕ Specialty Coffee Roasters", "desc": "High OTR locks combined with one-way degassing valves to vent gas while locking out oxygen ingress. Perfect for retaining roasted bean integrity.", "badge": "12-Month Roasted Freshness"},
                    "organic": {"title": "🌱 Organic Foods & Snacks", "desc": "Compostable kraft paper and PLA starch bio-films certified under European EN 13432. Meets rising retail and consumer eco-expectations.", "badge": "TÜV Home Compostable"},
                    "petFood": {"title": "🐾 Pet Food & Treats", "desc": "Heavy-duty diagonal K-seal bottoms that prevent grease migration and support bulk volumetric weight (from 1kg up to 5kg) without bursting.", "badge": "Diagonal Gusset Stability"},
                    "kSealTitle": "Heavier Volume stability: K-Seal Bottom Spotlight",
                    "kSealDesc": "For wholesale pet food, high-density supplements, or coffee beans, we integrate custom **K-seal bases**. The diagonal sealing structure guides product weight outwards, improving shelf-standing stability and preventing base crumple.",
                    "kSealLink": "Learn how K-seal increases volume capacity →"
                },
                "gallery": {
                    "title": "Real Production Runs & Materials Verification",
                    "text": "We operate 4 high-speed digital lines supporting multiple SKUs. Review our actual production runs of BRC compliant, certified compostable and recyclable stand-up pouches:"
                }
            },
            "faqs": [
                {
                    "question": "1. What is the Minimum Order Quantity (MOQ) for custom stand-up pouches?",
                    "answer": "We support startups with an industry-low digital printing MOQ of just 500 units per design. For larger wholesale volumes, we operate rotogravure plate printing from 5,000 units, providing the ultimate wholesale cost efficiency."
                },
                {
                    "question": "2. Do you provide physical pre-production samples?",
                    "answer": "Yes, we ship a free sustainable sample kit with 10 physical pouches to test barrier properties. For custom orders, we generate a 24-hour PDF soft proof and can construct exact custom digital mockups before bulk manufacture."
                },
                {
                    "question": "3. Can you manufacture stand-up pouches according to custom volumetric CAD drawings?",
                    "answer": "Yes. Our material engineers analyze your product volumetric density and customize bottom gussets and dimensions down to the millimeter scale. We provide a custom dieline layout PDF within 24 hours."
                },
                {
                    "question": "4. What is the production and transit lead time for commercial runs?",
                    "answer": "Digital runs finish in 7-10 business days; rotogravure plate orders take 12-14 days. Express DHL/FedEx air delivery to USA/EU takes 5-7 business days, and economical ocean freight is available in 20-30 days."
                },
                {
                    "question": "5. What certifications are available to verify eco-friendly compliance?",
                    "answer": "Our biopolymers carry official certificate numbers from BPI (Biodegradable Products Institute #10529618) and TÜV Austria (OK Compost HOME). Stacks comply with ASTM D6400 (US) and EN 13432 (EU) compostability guidelines."
                },
                {
                    "question": "6. What details must be submitted to receive a wholesale quotation?",
                    "answer": "Please provide estimated volumetric capacity (or exact dimensions), material preference (compostable kraft, mono-PE recyclable, high barrier), zip/degassing valve requirements, number of SKUs, and vector artwork."
                }
            ],
            "tables": [
                {
                    "title": "Commercial Volumetric Size Matrix",
                    "headers": ["Dimensions (W x H + G)", "Volumetric Weight", "Recommended Application Scenarios"],
                    "rows": [
                        ["70 x 110 + 40mm", "20g - 50g", "Product sample sachets, gourmet spices, dry botanical extracts"],
                        ["100 x 150 + 60mm", "50g - 100g", "Skincare powder bags, single-origin tea leaf, pet treat boxes"],
                        ["120 x 200 + 80mm", "100g - 250g", "Specialty coffee beans (with valve), organic granolas, protein crisps"],
                        ["150 x 230 + 90mm", "250g - 500g", "Commercial organic oats, large snack SKUs, bath salt canisters"],
                        ["180 x 280 + 100mm", "500g - 1kg", "Pet food kibble bags, bulk grains, wholesale coffee beans"]
                    ]
                }
            ]
        },
        "spoutPouches": {
            "title": "Spout Pouches | Liquid Packaging Solutions",
            "heroTitle": "Bottles, But Better",
            "heroSubtitle": "Pour spouts for liquids, purées, sauces, drinks. 70% less plastic than bottles. Reclosable, convenient, sustainable.",
            "introSummary": "All the functionality of bottles with a fraction of the waste. Easy dispensing, reclosable, and your customers can squeeze out every last drop. Baby food, sauces, beverages, refills.",
            "cta": {
                "title": "Pour Into Sustainability",
                "description": "See our spout options and find your fit.",
                "button": "Get Free Samples"
            },
            "sections": {
                "scenarioTrigger": {
                    "title": "Is This Page For You?",
                    "text": "If you are a baby food brand, sauce manufacturer, or beverage company looking for packaging that pours like a bottle but costs less and ships lighter—spout pouches are your solution.",
                    "baby": {"title": "Baby Food Brands", "desc": "Safe, portable, easy dispensing for infants"},
                    "sauce": {"title": "Sauce & Condiment Makers", "desc": "Hot-fill capable, mess-free pouring"},
                    "beverage": {"title": "Beverage Companies", "desc": "70% less plastic than rigid bottles"}
                },
                "overview": {
                    "title": "What is a Spout Pouch?",
                    "text": "A spout pouch is a flexible stand-up pouch with a built-in pour spout and cap, designed for liquids, semi-liquids, and viscous products. This format combines the cost efficiency of flexible packaging with the functionality of rigid containers.",
                    "advantagesTitle": "Key Advantages:",
                    "advantages": [
                        "Easy dispensing with reclosable cap",
                        "Uses 70% less plastic than rigid bottles",
                        "Self-standing for retail display",
                        "Lightweight, reduced shipping costs",
                        "High-barrier options available"
                    ]
                },
                "applications": {
                    "title": "What Products Work Best in Spout Pouches?",
                    "text": "Spout pouches are ideal for pourable products across many industries:",
                    "baby": {"title": "Baby Food", "items": ["Fruit purées", "Vegetable blends", "Yogurt smoothies"]},
                    "sauce": {"title": "Sauces & Condiments", "items": ["Ketchup & mayo", "Hot sauce", "Dressings"]},
                    "beverage": {"title": "Beverages", "items": ["Smoothie packs", "Cold brew coffee", "Cocktail mixes"]},
                    "oil": {"title": "Oils & Spreads", "items": ["Cooking oils", "Honey & syrups", "Ghee"]},
                    "pet": {"title": "Pet Food", "items": ["Wet food toppers", "Gravy & broths", "Pet supplements"]},
                    "nonfood": {"title": "Non-Food", "items": ["Laundry detergent", "Hand soap refills", "Cleaning products"]}
                },
                "spoutOptions": {
                    "title": "What Spout & Cap Options Are Available?",
                    "sizes": {
                        "title": "Spout Sizes",
                        "items": [
                            "8.6mm – Standard for liquids",
                            "10mm – Thicker liquids, purees",
                            "15mm – Viscous products",
                            "22mm – High viscosity, pastes"
                        ]
                    },
                    "caps": {
                        "title": "Cap Features",
                        "items": [
                            "Standard screw cap",
                            "Flip-top dispensing cap",
                            "Child-resistant (baby food)",
                            "Tamper-evident bands"
                        ]
                    },
                    "galleryTitle": "Spout Pouch Options",
                    "gallery": ["Spout Cap", "Spout Pouch", "High Barrier", "Glossy Finish"]
                },
                "ecoMaterials": {
                    "title": "Which Eco-Friendly Materials Work for Liquid Packaging?",
                    "text": "Spout pouches can be produced with sustainable materials that reduce environmental impact without compromising on liquid barrier performance.",
                    "kraft": {
                        "title": "🌾 What is \"Kraft-Look\"?",
                        "p1": "Kraft-look is a digital printed kraft pattern with matte coating applied to the pouch surface. It gives you the natural, premium appearance and tactile feel of kraft paper, while being 100% waterproof — essential for liquid products.",
                        "p2": "Real kraft paper would absorb moisture, but our kraft-look finish delivers the aesthetic without compromising liquid barrier performance."
                    },
                    "eco": {
                        "title": "ℹ️ Important: Understanding \"Eco\" Materials",
                        "p1": "Bio-PE and PCR pouches are NOT biodegradable or compostable. They are traditional plastic at end-of-life. However, they are eco-friendly at the START of their lifecycle:",
                        "bio": {
                            "title": "Bio-PE (30-50% Bio-Based)",
                            "items": [
                                "Made from sugarcane polyethylene",
                                "Renewable, sustainable source",
                                "Reduces fossil fuel dependency",
                                "Fully recyclable in PE streams"
                            ]
                        },
                        "pcr": {
                            "title": "PCR (30% Recycled Content)",
                            "items": [
                                "Contains post-consumer recycled plastic",
                                "Reduces virgin plastic demand",
                                "GRS certified available",
                                "Fully recyclable in PE streams"
                            ]
                        },
                        "p2": "Need truly compostable? See our compostable options (note: compostable spout pouches have limited availability)"
                    }
                },
                "specifications": {
                    "title": "Technical Specifications",
                    "items": [
                        "Material: PA/PE (Nylon/Polyethylene) multi-layer",
                        "Thickness: 70-150 microns",
                        "OTR: <1.0 cc/m²/24hr (oxygen transmission)",
                        "MVTR: <2.0 g/m²/24hr (moisture transmission)",
                        "Seal strength: >25 N/15mm",
                        "Puncture resistance: High (for bone-in products)"
                    ]
                },
                "marketData": {
                    "title": "Market Data & Intelligence",
                    "metrics": [
                        {"val": "$4.1B", "label": "global spout pouch market", "desc": "2024 value"},
                        {"val": "7.4%", "label": "CAGR", "desc": "2024-2030"},
                        {"val": "Food & bev", "label": "largest share", "desc": "over 60% of volume"},
                        {"val": "High-barrier", "label": "films growth", "desc": "fastest growing segment"}
                    ],
                    "storyTitle": "Customer Success Story",
                    "storyText": "\"After switching to spout pouches for our baby food line, our packaging material cost dropped by 45% and transport carbon footprint decreased by 62%.\"",
                    "storyAuthor": "— Baby food brand, 500k+ units/month"
                },
                "materialComparison": {
                    "title": "Material Comparison"
                }
            },
            "faqs": [
                {
                    "question": "Can spout pouches be used for hot-fill products?",
                    "answer": "Yes, we offer special materials (like heat-resistant PET/PA/R-CPP) that support hot filling up to 85-90°C. This is essential for pasteurizing fruit purées and hot-filled sauces."
                },
                {
                    "question": "What is the minimum order for custom spout pouches?",
                    "answer": "Our MOQ for custom printed spout pouches is 1,000 units. For plain, unprinted pouches, we can offer 500 units, giving startups access to professional liquid packaging."
                },
                {
                    "question": "Are spout pouches recyclable?",
                    "answer": "Yes, our Mono-PE and PCR options are recyclable in standard PE plastic streams (Class 4). Custom high-barrier laminate films (like PET/AL/PE) may be harder to recycle locally."
                },
                {
                    "question": "How are spout pouches filled?",
                    "answer": "Spout pouches can be filled in two ways: either through the open top of the pouch before final sealing, or directly through the spout using a liquid nozzle filler, then capping."
                }
            ],
            "tables": [
                {
                    "title": "Spout Pouch Size Matrix",
                    "headers": ["Volume", "Dimensions (W x H + G)", "Spout Diameter", "Common Use"],
                    "rows": [
                        ["100ml", "85 × 140 + 50mm", "8.6mm / 10mm", "Baby food, purées, energy gels"],
                        ["250ml", "110 × 170 + 60mm", "10mm", "Juice pouches, cocktail mixes"],
                        ["500ml", "130 × 200 + 70mm", "10mm / 15mm", "Refill pouches (soap), sauces"],
                        ["1L", "160 × 250 + 80mm", "15mm / 22mm", "Cooking oils, laundry detergent refill"],
                        ["2L", "200 × 300 + 100mm", "22mm", "Bulk condiments, liquid chemicals"]
                    ]
                }
            ]
        },
        "flatBottomBags": {
            "title": "Flat Bottom Bags | Box Pouch Packaging",
            "heroTitle": "The Premium Box Look, Without the Box",
            "heroSubtitle": "Five sides of branding real estate. Stands like a champ. The go-to for specialty coffee and premium products.",
            "introSummary": "Flat bottom bags look expensive without the expensive price tag. Stable rectangular base, 5 printable panels, and serious shelf presence. Perfect for coffee, pet food, anything premium.",
            "cta": {
                "title": "Elevate Your Packaging",
                "description": "See why premium brands choose flat bottom bags.",
                "button": "Get Free Samples"
            },
            "sections": {
                "scenarioTrigger": {
                    "title": "Is This Page For You?",
                    "text": "If you are a specialty coffee roaster, premium pet food brand, or artisan food producer looking for packaging that stands out on retail shelves with maximum branding real estate—flat bottom bags deliver premium presence.",
                    "coffee": {"title": "Coffee Roasters", "desc": "5-panel branding + degassing valve"},
                    "petFood": {"title": "Pet Food Brands", "desc": "Stable base for heavy products"},
                    "premium": {"title": "Premium Products", "desc": "Box-like appearance for gift-worthy packaging"}
                },
                "overview": {
                    "title": "What is a Flat Bottom Bag?",
                    "text": "A flat bottom bag (also called box bottom pouch or block bottom bag) features a rectangular base that allows it to stand upright with maximum stability. This premium format offers superior shelf presence and capacity compared to standard stand-up pouches.",
                    "benefitsTitle": "Key Benefits:",
                    "benefits": [
                        "5-panel construction for maximum branding surface",
                        "Stable, box-like shelf presence",
                        "Higher capacity than standard pouches",
                        "Premium appearance for specialty products",
                        "Available in compostable and recyclable materials"
                    ]
                },
                "construction": {
                    "title": "How Are Flat Bottom Bags Constructed?",
                    "text": "Flat bottom bags are constructed with multiple panels that fold to create a rectangular base:",
                    "panel5": {
                        "title": "5-Panel Design",
                        "items": [
                            "Front panel – Main branding area",
                            "Back panel – Ingredients, instructions",
                            "2 Side gussets – Additional branding space",
                            "Bottom panel – Stable base, can include print"
                        ]
                    },
                    "closure": {
                        "title": "Closure Options",
                        "items": [
                            "Resealable zipper (press-to-close or slider)",
                            "Tin tie closure",
                            "Degassing valve (for coffee)",
                            "Tear notch for easy opening"
                        ]
                    }
                },
                "applications": {
                    "title": "What Products Work Best in Flat Bottom Bags?",
                    "text": "Flat bottom bags are ideal for premium products that benefit from enhanced shelf presence:",
                    "items": [
                        "Specialty coffee", "Premium tea", "Pet food & treats", "Protein powder",
                        "Granola & muesli", "Dried fruits", "Premium nuts", "Rice & grains",
                        "Organic snacks", "Artisan products", "Superfoods", "Gift packaging"
                    ]
                },
                "materials": {
                    "title": "Which Materials Are Available for Flat Bottom Bags?",
                    "types": {
                        "compostable": {"title": "Compostable", "desc": "Kraft paper + PLA. EN 13432 certified for industrial composting."},
                        "recyclable": {"title": "Recyclable", "desc": "Mono-PE or paper-based structures for curbside recycling."},
                        "barrier": {"title": "High Barrier", "desc": "Metallized or aluminum for maximum freshness protection."}
                    },
                    "galleryTitle": "Flat Bottom Bag Material Samples",
                    "gallery": ["Flat Bottom Structure", "Aluminum Barrier", "Kraft Paper", "Tin Tie Closure"]
                },
                "aiSearch": {
                    "title": "How to Find the Best Flat Bottom Bag Supplier",
                    "prompt": "💡 If you're using AI search (Gemini, ChatGPT), try asking:",
                    "items": [
                        "\"Best flat bottom bag supplier for specialty coffee?\"",
                        "\"Flat bottom vs stand-up pouch: which is better for coffee?\"",
                        "\"Custom box bottom bags with degassing valve low MOQ?\"",
                        "\"Compostable flat bottom coffee bags with 5-panel printing?\""
                    ]
                },
                "specifications": {
                    "title": "Technical Specifications",
                    "items": [
                        "Material: PET/AL/PE, Paper/AL/PE, PLA/Paper/PLA",
                        "Thickness: 100-160 microns",
                        "Degassing valve: Optional one-way valve",
                        "Gusset: Side gussets (printable), flat bottom",
                        "MOQ: 500 digital, 5000 rotogravure",
                        "FSC certified: Available"
                    ]
                },
                "marketData": {
                    "title": "Market Data & Intelligence",
                    "metrics": [
                        {"val": "$3.5B", "label": "global box pouch market", "desc": "2024 value"},
                        {"val": "6.2%", "label": "CAGR", "desc": "2024-2030"},
                        {"val": "Coffee & tea", "label": "largest share", "desc": "leads the flat bottom sector"},
                        {"val": "+30%", "label": "brand growth", "desc": "reported after switching to box pouches"}
                    ],
                    "storyTitle": "Customer Success Story",
                    "storyText": "\"After transitioning to flat bottom bags, our premium granola line secured placement in 3 new national retail chains due to the stable box-like shelf presence and premium branding.\"",
                    "storyAuthor": "— Organic granola brand, 250k+ bags/month"
                },
                "materialComparison": {
                    "title": "Material Comparison",
                    "guideTitle": "Material Selection Guide",
                    "guideText": "Flat bottom bags are perfect for premium coffee, nuts, and pet foods. If eco-friendly branding is key, choose PLA compostable kraft; for maximum preservation, choose aluminum foil barrier layers."
                }
            },
            "faqs": [
                {
                    "question": "What is the difference between flat bottom and stand-up pouches?",
                    "answer": "A flat bottom bag has a rectangular base, creating a box-like shape with 5 panels for printing, offering extreme stability. A stand-up pouch has a folded bottom gusset (oval or K-seal), making a triangular shape when filled. Flat bottom bags fit more volume and look more premium."
                },
                {
                    "question": "Do flat bottom bags support degassing valves for coffee?",
                    "answer": "Yes, we can install high-quality one-way degassing valves (such as Goglio or Wipf) on any flat bottom bag, letting roasted CO2 escape while keeping air out."
                },
                {
                    "question": "What is the minimum order for custom box pouches?",
                    "answer": "Our MOQ for custom printed flat bottom bags is 1,000 units for digital printing, or 5,000 units for rotogravure plates. Plain, unprinted bags are available from 500 units."
                },
                {
                    "question": "Are flat bottom bags recyclable?",
                    "answer": "Yes, we manufacture flat bottom bags in curbside-recyclable Mono-PE structures, as well as eco-friendly compostable Kraft/PLA structures."
                }
            ],
            "tables": [
                {
                    "title": "Flat Bottom Bag Size Matrix",
                    "headers": ["Capacity", "Dimensions (W x H x G)", "Recommended Use", "Degassing Valve"],
                    "rows": [
                        ["250g", "90 × 200 × 60mm", "Specialty coffee, tea tins", "Optional"],
                        ["500g", "120 × 260 × 80mm", "Granola, pet treats, coffee beans", "Optional"],
                        ["1kg", "140 × 320 × 90mm", "Bulk coffee, protein powders", "Optional"],
                        ["2kg", "180 × 400 × 110mm", "Pet food, dry ingredients", "Not typical"],
                        ["5kg", "240 × 500 × 120mm", "Bulk pet food, animal feed", "Not typical"]
                    ]
                }
            ]
        },
        "vacuumPouches": {
            "title": "Vacuum Pouches | Co-extruded High Barrier Bags",
            "heroTitle": "Lock in Freshness, Block out Oxygen",
            "heroSubtitle": "Industrial-grade PA/PE vacuum packaging pouches. Extends shelf life 3-5x. Heavy-duty puncture resistance, sous vide, and retort options.",
            "introSummary": "Vacuum pouches extend product shelf life 3-5x by removing oxygen before sealing. Our high-barrier pouches protect against oxidation, moisture, and contamination. Available for chamber and external vacuum machines, including sous vide and retort applications.",
            "cta": {
                "title": "Get Custom Vacuum Pouches",
                "description": "Request a free sample and quote for your vacuum packaging needs.",
                "button": "Request Free Sample"
            },
            "sections": {
                "overview": {
                    "title": "What is a Vacuum Pouch?",
                    "text": "A vacuum pouch is designed for vacuum packaging, where air is removed before sealing to extend product shelf life. These high-barrier pouches protect against oxygen, moisture, and contaminants.",
                    "benefitsTitle": "Key Benefits:",
                    "benefits": [
                        "Extended shelf life (3-5x longer than standard)",
                        "Prevents oxidation and freezer burn",
                        "Maintains product freshness and quality",
                        "Reduces food waste",
                        "Sous vide cooking compatible"
                    ]
                },
                "applications": {
                    "title": "Common Applications",
                    "meat": {"title": "Meat & Poultry", "items": ["Fresh cuts", "Cured meats", "Processed meats", "Deli products"]},
                    "seafood": {"title": "Seafood", "items": ["Fresh fish", "Smoked salmon", "Shellfish", "Frozen seafood"]},
                    "cheese": {"title": "Cheese & Dairy", "items": ["Block cheese", "Sliced cheese", "Specialty cheese", "Butter"]},
                    "meals": {"title": "Ready Meals", "items": ["Sous vide meals", "Meal kits", "Pre-cooked proteins", "Marinated items"]},
                    "coffee": {"title": "Coffee", "items": ["Roasted beans", "Ground coffee", "Single origins", "Specialty blends"]},
                    "nonfood": {"title": "Non-Food", "items": ["Electronics", "Medical devices", "Pharmaceuticals", "Archival storage"]}
                },
                "types": {
                    "title": "Vacuum Pouch Types",
                    "chamber": {"title": "Chamber Vacuum Pouches", "desc": "Smooth surface for chamber vacuum machines. Lower cost, works with liquids."},
                    "external": {"title": "External Vacuum Pouches", "desc": "Embossed/channeled surface for external sealers. More widely compatible."},
                    "retort": {"title": "Retort Vacuum Pouches", "desc": "Heat-resistant for pasteurization/sterilization. Shelf-stable products."},
                    "sousvide": {"title": "Sous Vide Pouches", "desc": "Cook-in pouches rated for immersion cooking up to 100°C."}
                },
                "specifications": {
                    "title": "Technical Specifications",
                    "items": [
                        "Material: PA/PE (Nylon/Polyethylene) multi-layer",
                        "Thickness: 70-150 microns",
                        "OTR: <1.0 cc/m²/24hr (oxygen transmission)",
                        "MVTR: <2.0 g/m²/24hr (moisture transmission)",
                        "Seal strength: >25 N/15mm",
                        "Puncture resistance: High (for bone-in products)"
                    ]
                },
                "industryScenarios": {
                    "title": "Industry Applications",
                    "meat": {"title": "Meat Processing", "desc": "Fresh meat, processed meat, deli meats, frozen meats", "badge": "Share: 40%"},
                    "seafood": {"title": "Seafood", "desc": "Fresh fish, smoked salmon, shellfish, frozen seafood", "badge": "30% market share"},
                    "dairy": {"title": "Dairy Products", "desc": "Cheese blocks, sliced cheese, butter, cream cheese", "badge": "30% market share"},
                    "storyTitle": "Customer Success Story",
                    "storyText": "\"Our meat processing factory saw shelf life extend from 5 to 21 days after adopting vacuum bags, reducing product waste by 80%.\"",
                    "storyAuthor": "— Premium meat brand, 100k+ bags/month"
                },
                "marketData": {
                    "title": "Market Data & Intelligence",
                    "metrics": [
                        {"val": "$5.8B", "label": "global vacuum packaging", "desc": "2024 value"},
                        {"val": "5.2%", "label": "CAGR", "desc": "2024-2030"},
                        {"val": "Meat & seafood", "label": "largest sector", "desc": "over 50% market share"},
                        {"val": "70%", "label": "PA/PE co-extruded share", "desc": "industry standard material"}
                    ],
                    "storyTitle": "Material Verification Story",
                    "storyText": "\"Switching to nylon/PE co-extruded vacuum bags reduced puncture rates from 4% to less than 0.1%, saving thousands in retail returns.\"",
                    "storyAuthor": "— Seafood processor, 500k+ bags/month"
                },
                "materialComparison": {
                    "title": "Material Comparison"
                }
            },
            "faqs": [
                {
                    "question": "What is the difference between smooth and embossed vacuum pouches?",
                    "answer": "Smooth vacuum pouches are used in chamber vacuum machines, where air pressure is equalized inside the chamber. Embossed/textured pouches have tiny channels that allow external suction sealers (like FoodSaver) to draw air out of the bag."
                },
                {
                    "question": "Can vacuum pouches be boiled or heated?",
                    "answer": "Yes, we manufacture food-grade PA/PE sous vide vacuum pouches designed to withstand boiling and immersion cooking up to 100°C. For autoclave sterilization (retort), we use special PA/PP structures rated up to 121°C."
                },
                {
                    "question": "What thickness vacuum pouches do I need?",
                    "answer": "70 to 90 microns is standard for soft foods, cheeses, and boneless meats. For bone-in meats, jerky, or hard items, we recommend 120 to 150 microns to prevent punctures."
                },
                {
                    "question": "What is your minimum order for custom printed vacuum bags?",
                    "answer": "Our MOQ for custom printed vacuum bags is 1,000 units. Plain, unprinted vacuum pouches are kept in stock and can be ordered from 500 units."
                }
            ],
            "tables": [
                {
                    "title": "Vacuum Pouch Size Matrix",
                    "headers": ["Size", "Dimensions (W x H)", "Thickness", "Common Use"],
                    "rows": [
                        ["Small Pouch", "150 × 200mm", "80 microns", "Single-portion cheese, deli meats"],
                        ["Medium Pouch", "200 × 300mm", "80/90 microns", "Steaks, fish fillets, pre-cut cheese"],
                        ["Large Pouch", "250 × 350mm", "100 microns", "Whole chicken, large fish portions"],
                        ["Bone-in Pouch", "200 × 300mm", "120/150 microns", "Ribs, bone-in pork chops, hard foods"],
                        ["Bulk Pouch", "300 × 450mm", "120 microns", "Wholesale food service portions"]
                    ]
                }
            ]
        },
        "customBoxes": {
            "title": "Custom Boxes | Premium Rigid Packaging | Achieve Pack",
            "heroTitle": "Custom Printed Boxes",
            "heroSubtitle": "Premium rigid packaging for chocolate, tea, coffee & artisan foods",
            "introSummary": "Achieve Pack offers premium custom printed boxes with FSC certified materials, gold foil stamping, and embossing. Perfect for chocolate, tea, coffee, and artisan food brands seeking luxury presentation. MOQ 200 pieces with sea freight included. Production 30 days + 40-60 days shipping.",
            "cta": {
                "title": "Ready to Order Custom Boxes?",
                "description": "Create premium packaging for your artisan products with our custom printed boxes. MOQ 200 pieces.",
                "button": "Shop Custom Boxes"
            },
            "sections": {
                "scenarioTrigger": {
                    "title": "Is This Page For You?",
                    "text": "If you need premium rigid packaging for artisan products—chocolate, tea, coffee, or luxury gifts—you're in the right place.",
                    "chocolate": {"title": "Chocolate & Confectionery", "desc": "Premium presentation with gold foil & embossing"},
                    "coffee": {"title": "Coffee & Tea Brands", "desc": "Rigid mailer boxes for premium blends"},
                    "artisan": {"title": "Artisan Food Producers", "desc": "FSC certified sustainable packaging"}
                },
                "overview": {
                    "title": "What Custom Boxes Do We Offer?",
                    "text": "Achieve Pack offers premium custom printed rigid boxes designed for artisan food products, specialty coffee, luxury gifts, and high-end retail. Our boxes feature FSC certified materials, matte lamination, and optional premium finishes including gold foil stamping and embossing.",
                    "mailer": {
                        "title": "Corrugated Mailer Boxes",
                        "desc": "Perfect for coffee, tea, and artisan foods requiring sturdy shipping protection.",
                        "sizes": ["✓ 500g size: 130 × 85 × 35mm", "✓ 1kg size: 270 × 85 × 35mm", "✓ CMYK custom printing", "✓ Matte finish standard", "✓ Gold foil available", "✓ FSC certified paper"]
                    },
                    "tuck": {
                        "title": "Tuck Boxes (Cartons)",
                        "desc": "Elegant folding cartons for chocolate bars, tea sachets, and premium confectionery.",
                        "sizes": ["✓ 100g size: 81 × 162 × 15mm", "✓ 250g white card", "✓ Gold foil stamping", "✓ Embossed details", "✓ Matte finish", "✓ FSC certified"]
                    }
                },
                "features": {
                    "title": "Premium Features & Finishes",
                    "f1": {"title": "✨ Gold Foil Stamping", "desc": "Hot-stamped metallic gold accents for luxury branding"},
                    "f2": {"title": "🎨 Embossed Details", "desc": "Raised texture for tactile premium experience"},
                    "f3": {"title": "📦 Matte Lamination", "desc": "Sophisticated matte finish standard on all boxes"},
                    "f4": {"title": "🌱 FSC Certified", "desc": "Sustainably sourced recycled paper materials"},
                    "f5": {"title": "🖨️ CMYK Printing", "desc": "Full-color custom printing for vibrant branding"},
                    "f6": {"title": "💪 Rigid Construction", "desc": "2.0mm grayboard for premium structural integrity"},
                    "galleryTitle": "Box Types & Styles",
                    "gallery": ["Corrugated Mailer", "Tuck Box Carton", "Gold Foil Finish", "Embossed Texture"]
                },
                "applications": {
                    "title": "Perfect For These Products",
                    "chocolate": {"title": "Chocolate", "desc": "Bars, truffles, pralines"},
                    "tea": {"title": "Tea", "desc": "Loose leaf, sachets, gift sets"},
                    "coffee": {"title": "Coffee", "desc": "Specialty beans, gift boxes"},
                    "cosmetics": {"title": "Cosmetics", "desc": "Skincare serums, luxury lotions"},
                    "gifts": {"title": "Luxury Gifts", "desc": "Corporate hampers, holiday sets"},
                    "jewelry": {"title": "Jewelry & Goods", "desc": "High-end watches, artisan goods"}
                },
                "specifications": {
                    "title": "Technical Specifications",
                    "items": [
                        "Materials: 2.0mm Grayboard, White Cardboard, Corrugated E-flute",
                        "Printing: CMYK offset, Pantone matching",
                        "Finishing: Matte/gloss lamination, UV coating",
                        "FSC Certified: Certified sustainable papers",
                        "MOQ: 200 pieces",
                        "Production: 30 days + 40-60 days shipping (sea freight included)"
                    ]
                },
                "marketData": {
                    "title": "Market Data & Intelligence",
                    "metrics": [
                        {"val": "$15.6B", "label": "global rigid box market", "desc": "2024 value"},
                        {"val": "4.8%", "label": "CAGR", "desc": "2024-2030"},
                        {"val": "Artisan food", "label": "fastest growing", "desc": "premium gift packaging sector"},
                        {"val": "75%", "label": "consumers prefer FSC", "desc": "shows demand for certified paper"}
                    ],
                    "storyTitle": "Customer Success Story",
                    "storyText": "\"After launching our artisan chocolate gift set in custom gold-foil rigid boxes, sales increased by 150% in the first quarter, establishing our brand in the premium gift tier.\"",
                    "storyAuthor": "— Luxury confectionery brand, UK"
                },
                "materialComparison": {
                    "title": "Material Comparison"
                }
            },
            "faqs": [
                {
                    "question": "What is the difference between corrugated mailers and rigid boxes?",
                    "answer": "Corrugated mailer boxes are made of E-flute corrugated cardboard, which is lightweight yet highly impact-resistant for shipping. Rigid boxes (greyboard) are thick, non-collapsible cardboard structures used for luxury retail presentation."
                },
                {
                    "question": "Can I add custom shapes inside the box?",
                    "answer": "Yes, we design custom cardboard, EVA foam, or pulp tray inserts to fit your specific product shapes (such as tea tins or chocolate compartments) and keep them secure."
                },
                {
                    "question": "What is the minimum order for custom boxes?",
                    "answer": "Our MOQ for custom printed corrugated mailers and rigid boxes is 200 pieces. This low entry point makes high-end packaging accessible for luxury startups."
                },
                {
                    "question": "How long does shipping take for rigid boxes?",
                    "answer": "Because rigid boxes are bulky and shipped fully assembled, we include sea freight in the cost. Production takes 30 days, and sea transit takes 40 to 60 days depending on your destination."
                }
            ],
            "tables": [
                {
                    "title": "Custom Box Type Comparison",
                    "headers": ["Box Type", "Strength", "Premium Look", "Cost", "Best Application"],
                    "rows": [
                        ["Rigid Greyboard (2.0mm)", "Outstanding", "Ultimate", "High", "Premium gift boxes, luxury chocolate"],
                        ["Corrugated Kraft (E-flute)", "High", "Premium-rustic", "Medium", "E-commerce mailer boxes, coffee sets"],
                        ["White Folding Cardboard", "Medium", "Clean-modern", "Low", "Tuck boxes, individual chocolate bars, tea bags"],
                        ["Recycled Paperboard", "Medium", "Eco-natural", "Low", "Lightweight retail boxes, eco-brands"]
                    ]
                }
            ]
        }
    },
    "zh-TW": {
        "flatPouches": {
            "title": "平口袋 | 三邊封袋 | 包裝袋批發",
            "heroTitle": "極致簡單，但絕不可輕視",
            "heroSubtitle": "軟包裝的鼻祖。三邊封平口袋，最適合樣品、單次裝及無須直立擺放的產品。",
            "introSummary": "平口袋是性價比最高的軟包裝選擇。最適合樣品包裝、小包裝袋和輕量級產品。材料浪費少、成本低，且出奇地實用。",
            "cta": {
                "title": "從最簡單的開始",
                "description": "樣品袋、小包裝袋或其他需求——告訴我們您的要求。",
                "button": "獲取免費樣品"
            },
            "sections": {
                "scenarioTrigger": {
                    "title": "這個頁面適合您嗎？",
                    "text": "如果您需要經濟實惠的單次裝包裝、產品樣品袋或小包裝袋，您來對地方了。",
                    "sampleProducers": {"title": "樣品生產商", "desc": "產品樣品、試用裝"},
                    "foodService": {"title": "餐飲服務業", "desc": "醬汁包、糖包"},
                    "teaSpice": {"title": "茶葉與香料品牌", "desc": "單次使用裝"}
                },
                "overview": {
                    "title": "什麼是三邊封袋？",
                    "text": "三邊封袋（也稱為平口袋或小袋）是三邊密封、頂部留空以便填充的包裝袋。這是最經濟的軟包裝格式，非常適合樣品、單次裝產品和輕質物品。",
                    "advantagesTitle": "主要優勢：",
                    "advantages": [
                        "最具成本效益的袋型格式",
                        "材料使用效率高（浪費更少）",
                        "運輸及儲存體積小",
                        "填充及密封速度快",
                        "易於撕開使用"
                    ]
                },
                "types": {
                    "title": "三邊封與四邊封袋的對比",
                    "seal3": {
                        "title": "三邊封",
                        "desc": "由折疊薄膜製成，封閉三邊：",
                        "items": [
                            "一個折疊邊（無封口）",
                            "兩個側邊封口",
                            "填充後密封底部或頂部",
                            "最經濟實惠的選擇"
                        ]
                    },
                    "seal4": {
                        "title": "四邊封",
                        "desc": "由兩張獨立薄膜製成：",
                        "items": [
                            "四個邊緣均封口",
                            "印刷表面積略大",
                            "正面和背面可使用不同材料",
                            "成本略高"
                        ]
                    }
                },
                "applications": {
                    "title": "常見應用",
                    "items": [
                        "產品樣品", "單次使用包裝", "香料包", "白糖及甜味劑包",
                        "醬包", "茶包外袋", "種子袋", "促銷贈品",
                        "醫藥小包", "化妝品試用裝", "酒店一次性用品", "濕紙巾"
                    ]
                },
                "features": {
                    "title": "可用特徵與工藝",
                    "opening": {
                        "title": "易開設計",
                        "items": ["撕裂缺口（易撕口或激光易撕線）", "易撕密封條", "虛線易撕口", "特殊模切形狀"]
                    },
                    "additional": {
                        "title": "附加選項",
                        "items": ["懸掛孔（方便貨架展示）", "透明窗口", "啞面/光面效果", "燙金燙銀"]
                    },
                    "galleryTitle": "三邊封袋工藝樣品",
                    "gallery": ["三邊封標準結構", "高透明包裝", "牛皮紙袋", "可降解環保袋"]
                },
                "riskHedge": {
                    "title": "還有疑慮？為您解答",
                    "items": [
                        {"q": "這些小包裝袋環保嗎？", "a": "是的，我們提供 PLA 及牛皮紙/PLA 可降解環保選項"},
                        {"q": "最低起訂量是多少？", "a": "無印刷 500 個，特製印刷 1,000 個"},
                        {"q": "可以加拉鏈嗎？", "a": "可以，但如果您需要重復密封，建議考慮自立袋"},
                        {"q": "可以拿樣品嗎？", "a": "我們可以提供免費樣品供您評估"}
                    ]
                },
                "decisionCta": {
                    "title": "選擇您方便的聯繫方式",
                    "call": {"title": "預約通話", "desc": "30分鐘免費包裝咨詢", "btn": "立即預約"},
                    "email": {"title": "郵件詢價", "desc": "24小時內為您回覆", "btn": "發送電郵"},
                    "samples": {"title": "免費樣品", "desc": "先測試包裝袋實物", "btn": "索取樣品"}
                },
                "industryScenarios": {
                    "title": "行業應用分析",
                    "food": {"title": "食品與調味品", "desc": "醬料包、糖包、香料包、湯料包", "badge": "45% 市場份額"},
                    "cosmetics": {"title": "化妝品樣品", "desc": "面膜精華液、乳液試用裝、護膚試用包", "badge": "30% 市場份額"},
                    "pharma": {"title": "醫藥與保健", "desc": "藥劑分裝、保健品試用裝、營養粉小包", "badge": "25% 市場份額"},
                    "storyTitle": "客戶成功案例",
                    "storyText": "「自從我們調味品品牌換成了三邊封平口袋，單個包裝成本降低了35%，而且完美適應了餐飲服務的單次裝需求，幫助我們迅速擴大了市佔率。」",
                    "storyAuthor": "— 調味品製造商，月產量 200萬+ 個"
                },
                "marketData": {
                    "title": "市場數據與情報",
                    "metrics": [
                        {"val": "$8.2B", "label": "全球平袋市場規模", "desc": "2024年價值"},
                        {"val": "6.8%", "label": "複合年增長率", "desc": "2024-2030"},
                        {"val": "35%", "label": "餐飲服務份額", "desc": "最大終端使用領域"},
                        {"val": "150B", "label": "亞太地區年消耗量", "desc": "全球最大市場"}
                    ],
                    "trendTitle": "市場趨勢洞察",
                    "trends": [
                        "單次裝市場：便利性需求推動平袋市場持續擴大",
                        "可降解材料：對 PLA 及環保紙張平袋的需求每年增長 25%"
                    ]
                },
                "materialComparison": {
                    "title": "材料對比",
                    "guideTitle": "材料選擇指南",
                    "guideText": "三邊封平口袋最適合對成本敏感的單次使用場景。液體包裝建議選擇鋁箔複合材料，環保要求高的品牌可以選擇 PLA 可降解材料。"
                }
            },
            "faqs": [
                {
                    "question": "三邊封袋和四邊封袋有什麼區別？",
                    "answer": "三邊封袋是由單張薄膜對折（只密封三邊）製成，而四邊封袋則是使用兩張獨立薄膜（四個邊緣都密封）。三邊封更經濟，而四邊封提供的包裝表面積稍大，且正背面可使用不同的材料。"
                },
                {
                    "question": "平口袋最低起訂量是多少？",
                    "answer": "特製印刷的平口袋最低起訂量為 1,000 個。無印刷的平口袋最低 500 個。平口袋單價較低，即使少量訂購也具有極佳的經濟效益。"
                },
                {
                    "question": "平口袋可以加自封拉鏈嗎？",
                    "answer": "傳統的平口袋為一次性包裝，但我們也可以為其加入拉鏈。不過，如果您需要反復密封，自立袋通常能提供更好的功能和實用價值。"
                },
                {
                    "question": "平口袋有提供可降解的環保材料嗎？",
                    "answer": "是的，我們提供採用 PLA、牛皮紙/PLA 或纖維素薄膜製成的環保平口袋，這些材料均通過歐盟 EN 13432 工業堆肥認證。"
                }
            ],
            "tables": [
                {
                    "title": "平口袋尺寸參考指南",
                    "headers": ["規格", "尺寸 (寬 × 高)", "常見容量", "典型用途"],
                    "rows": [
                        ["極小號小袋", "50 × 70mm", "5-10g / 5-10ml", "糖包、超小樣品包"],
                        ["中號小袋", "70 × 100mm", "10-30g", "香料、調味醬包"],
                        ["大號小袋", "100 × 150mm", "30-100g", "茶葉外袋、種子袋"],
                        ["樣品包裝袋", "80 × 120mm", "20-50g", "產品試用樣品"],
                        ["促銷大袋", "120 × 180mm", "50-100g", "促銷贈品袋"]
                    ]
                }
            ]
        },
        "standUpPouches": {
            "title": "自立袋 | 站立包裝袋 | 軟包裝解決方案",
            "heroTitle": "傲然直立的包裝袋",
            "heroSubtitle": "極佳的貨架視覺效果、無窮的定制選擇，且塑料用量遠低於塑料瓶。拉鏈、滑塊、吸嘴或單向閥——隨心搭配。",
            "introSummary": "自立袋為您帶來硬質包裝的貨架衝擊力，卻沒有包裝廢棄物的負擔。特製印刷、可重復密封、高阻隔、可堆肥或可回收。最低 500 個起訂。",
            "cta": {
                "title": "開始設計您的專屬自立袋",
                "description": "告訴我們您要包裝的產品，我們為您推薦最合適的方案。",
                "button": "獲取免費樣品"
            },
            "b2c": {
                "heroBadge": "貨架直立環保軟包裝",
                "heroTitleLine1": "STAND-UP",
                "heroTitleLine2": "POUCHES",
                "heroSubtitle": "通過認證的可降解 PLA 植物澱粉薄膜及可回收單一 PE 結構。極佳的阻隔保鮮效能、耐用拉鏈及多款客製尺寸。",
                "btnCall": "預約免費通話",
                "btnWhatsapp": "聯絡包裝專家",
                "badgeMoq": "最低起訂量 500 個起！",
                "bento": {
                    "title": "領先的軟包裝性能",
                    "c1Title": "可堆肥與可回收",
                    "c1Desc": "可選 100% 家庭/工業可堆肥生物薄膜，或可放入路邊回收箱的單一材料結構，讓消費者輕鬆做環保。",
                    "c2Title": "阻氣鎖水高阻隔",
                    "c2Desc": "高效能內阻隔層，阻擋氧氣與水汽滲透（OTR/WVTR < 1.0），完美延長產品保質期達 12 個月。",
                    "c3Title": "穩固的底部站立",
                    "c3Desc": "精準折疊的圓底或強韌的 K-Seal 底部設計，確保產品在貨架上穩固直立，同時擴大包裝內部容量。",
                    "c4Title": "各式密封配搭",
                    "c4Desc": "可加裝可重復密封拉鏈、馬口鐵封口條、滑塊拉鏈、咖啡單向排氣閥或特製透明視窗。"
                },
                "showcase": {
                    "badge": "實物展示",
                    "title": "真實生產樣品",
                    "desc": "點擊任何真實印刷樣品，查看我們的高清印刷效果、封口邊及精細做工：",
                    "gallery": [
                        {"title": "高級特製印刷自立袋", "desc": "特製印刷自立袋，展示細緻的高對比度數位印刷及環保油墨色彩。"},
                        {"title": "自立袋生活場景展示", "desc": "環保自立袋在現代有機食品品牌場景中的視覺展示。"},
                        {"title": "強韌 K-Seal 自立袋底", "desc": "斜角 K-Seal 底部構造，專為承載較重產品（高達 5kg）而設計，站立極為穩固。"},
                        {"title": "零廢棄可堆肥牛皮紙袋", "desc": "通過 FSC 認證的天然牛皮紙自立袋，配備高防潮屏障和可重復密封拉鏈。"}
                    ]
                },
                "specPricing": {
                    "title": "產品規格與參考價格",
                    "moqVal": "500 個",
                    "moqTitle": "極低起訂量",
                    "moqDesc": "非常適合初創品牌、限量節日版產品以及多 SKU 測試",
                    "dielinesVal": "24 小時",
                    "dielinesTitle": "免費刀模線",
                    "dielinesDesc": "根據您所需的容量尺寸，24小時內提供精準的矢量刀模圖紙",
                    "samplesVal": "100% 免費",
                    "samplesTitle": "可堆肥樣品包",
                    "samplesDesc": "寄送包含 10 個不同規格的物理樣品包，以便您測試防潮防漏性能"
                },
                "table": {
                    "headers": ["尺寸 (寬 x 高 + 底闊)", "參考容量", "阻隔性能", "最佳應用"],
                    "rows": [
                        ["70 x 110 + 40mm", "20g - 50g", "OTR & WVTR < 1.0", "樣品袋、調味香料粉、化妝品試用粉末"],
                        ["100 x 150 + 60mm", "50g - 100g", "OTR & WVTR < 1.0", "茶葉、糖果糖果、寵物零食包"],
                        ["120 x 200 + 80mm", "100g - 250g", "OTR & WVTR < 0.5", "帶單向排氣閥的咖啡豆、麥片、高蛋白脆片"],
                        ["150 x 230 + 90mm", "250g - 500g", "OTR & WVTR < 0.5", "大包裝零食、堅果、代餐粉、貓糧狗糧袋"],
                        ["180 x 280 + 100mm", "500g - 1kg", "OTR & WVTR < 0.1", "商業大包裝寵物糧、沐浴鹽、種子及散裝穀物"]
                    ]
                },
                "faqs": [
                    {"question": "自立袋真的可以降解堆肥或回收嗎？", "answer": "是的！我們提供兩條環保路線。可堆肥自立袋採用 BPI 和 TÜV 認證的生物薄膜（如植物澱粉 PLA 和 NatureFlex 木漿薄膜），在工業堆肥環境下 90-180 天內可完全分解為有機質。可回收自立袋則使用單一聚乙烯（PE）或聚丙烯（PP）結構，可直接放入軟塑料回收箱中循環利用。"},
                    {"question": "這些包裝袋能保持乾貨或咖啡的新鮮度嗎？", "answer": "絕對可以。我們使用高阻隔多層複合技術，將氧氣和水汽透過率（OTR & WVTR）控制在 1.0 以下（部分金屬化纖維素結構可低於 0.1）。加上我們配備的專利單向排氣閥，可完美保護咖啡免受氧氣入侵，保鮮期長達 12 個月。"},
                    {"question": "你們支持哪些類型的底部結構？", "answer": "我們支持最常見的圓底自立結構（適合輕質產品）、K-Seal 斜角底結構（可將重物重力分流，防止倒塌，適合 1kg 以上重物）以及平底/犁形底結構。"},
                    {"question": "可以定做特別尺寸或特殊形狀嗎？", "answer": "可以。除了 20g 至 5kg 的標準規格，我們也提供精準至毫米的尺寸客製服務。此外，我們還能為您定做特殊異形袋（如燒瓶形、瓶裝形），讓您的品牌在貨架上脫穎而出。"}
                ]
            },
            "sections": {
                "overview": {
                    "title": "客製化自立袋批發及供應",
                    "text": "特製自立包裝袋（Stand-Up Pouches）是高級商業軟包裝的黃金標準。我們出自 BRCGS 認證工廠的生產線，為全球 DTC 品牌和食品批發商提供極佳的貨架展示效果、極輕的包裝重量及高強度的保鮮阻隔性能。",
                    "kpisTitle": "關鍵 B2B 商業性能指標：",
                    "kpis": [
                        "減重 75% —— 比起玻璃罐或鐵罐，可大幅度節省倉庫儲存空間和遠途運輸的碳排放量。",
                        "360度展示空間 —— 整個外包裝袋均可進行全彩色數位印刷，採用安全的大豆植物油墨。",
                        "實用重復密封 —— 配備高強度的自封拉鏈及滑塊，防止產品受潮變質。",
                        "自動化裝填兼容 —— 精準的卷材厚度及拉伸控制，完美兼容各類自動包裝機（VFFS/HFFS）。"
                    ]
                },
                "specifications": {
                    "title": "技術參數說明及採購指南",
                    "text": "專業採購需要嚴格的數據支持。以下是我們包裝的技術指標如何轉化為您的商業效益："
                },
                "applications": {
                    "title": "專業 B2B 應用場景",
                    "text": "我們客製印刷的站立袋專為各行業的合規和保鮮需求而設計：",
                    "coffee": {"title": "☕ 精品咖啡烘焙商", "desc": "高阻隔氣密層配合 Goglio 單向排氣閥，既能排除咖啡豆釋放的二氧化碳，又能防止外氣進入，保證香氣持久。", "badge": "12個月極致保鮮"},
                    "organic": {"title": "🌱 有機食品及零食", "desc": "採用符合歐盟 EN 13432 標準的牛皮紙及 PLA 植物澱粉薄膜，滿足現代消費者對綠色環保的期望。", "badge": "TÜV 家庭堆肥認證"},
                    "petFood": {"title": "🐾 寵物糧食與零食", "desc": "特製 K-Seal 強韌底部，承重能力極強，防油脂滲透，適合裝填 1kg 至 5kg 的重物而不會破裂。", "badge": "K-Seal 強力支撐"},
                    "kSealTitle": "重物站立優化：K-Seal 底部技術特點",
                    "kSealDesc": "對於寵物飼料、大容量營養粉或大量咖啡豆，我們建議採用 **K-Seal 底部設計**。其特殊的斜角熱封線可將產品重力引導至兩側，使袋子立得更穩，防止底部折皺。",
                    "kSealLink": "了解 K-Seal 如何提高容積與站立稳定性 →"
                },
                "gallery": {
                    "title": "真實印刷樣品及材料驗證",
                    "text": "我們擁有 4 條高速數位印刷線，支持小批量多 SKUs 生產。以下是我們為客戶製造的自立袋樣品："
                }
            },
            "faqs": [
                {
                    "question": "1. 特製印刷自立袋的最低起訂量是多少？",
                    "answer": "為支持初創品牌發展，我們提供極低的數位印刷起訂量，每款設計僅 500 個起。對於大批量採購，我們提供凹版滾筒印刷，起訂量為 5,000 個，以提供最優惠的批發成本。"
                },
                {
                    "question": "2. 你們能提供樣品袋供測試嗎？",
                    "answer": "可以。我們可免費寄送包含 10 個樣品袋的環保樣品包，以便您測試防潮及包裝強度。在正式大貨生產前，我們也會提供 24 小時內的 PDF 電子版模圖，或製作數碼打樣袋供您確認。"
                },
                {
                    "question": "3. 你們能根據我們的容量要求定制專門的尺寸嗎？",
                    "answer": "可以。我們的包裝工程師會根據您產品的體積密度（如咖啡豆、粉末或顆粒），為您量身定制長、寬及底闊尺寸，精確至毫米。24 小時內可為您提供特製的刀模線圖。"
                },
                {
                    "question": "4. 訂單的生產及運輸時間是多少？",
                    "answer": "數位印刷通常需要 7-10 個工作天；凹版印刷大貨需要 12-14 個工作天。空運（DHL/FedEx）至歐美約 5-7 個工作天，海運約 20-30 個工作天。"
                },
                {
                    "question": "5. 你們的環保材料有什麼國際證書？",
                    "answer": "我們的生物降解材料均取得 BPI（美國可生物降解產品學會 #10529618）及 TÜV Austria（OK Compost HOME 家庭堆肥認證）。符合歐盟 EN 13432 及美國 ASTM D6400 標準。"
                },
                {
                    "question": "6. 詢價時需要提供什麼資訊？",
                    "answer": "請提供您大約需要的容量（或具體尺寸）、材料喜好（如可堆肥牛皮紙、可回收 PE、高阻隔鋁箔複合）、是否需要拉鏈或氣閥、SKU 數量以及設計圖稿格式。"
                }
            ],
            "tables": [
                {
                    "title": "商業容量與尺寸對照表",
                    "headers": ["規格尺寸 (寬 x 高 + 底闊)", "推薦容量重量", "適用產品場景"],
                    "rows": [
                        ["70 x 110 + 40mm", "20g - 50g", "產品試用包、香料調味粉、草本乾茶葉"],
                        ["100 x 150 + 60mm", "50g - 100g", "化妝護膚粉末、小包有機茶葉、寵物零食"],
                        ["120 x 200 + 80mm", "100g - 250g", "咖啡豆包裝（配氣閥）、有機麥片、堅果果乾"],
                        ["150 x 230 + 90mm", "250g - 500g", "大容量燕麥、高纖零食包、沐浴鹽袋"],
                        ["180 x 280 + 100mm", "500g - 1kg", "批發裝寵物乾糧、散裝穀物、大容量咖啡豆"]
                    ]
                }
            ]
        },
        "spoutPouches": {
            "title": "吸嘴袋 | 帶嘴包裝袋 | 液體包裝批發",
            "heroTitle": "是塑料瓶，但更完美",
            "heroSubtitle": "適合液體、果泥、醬汁和飲料的帶蓋吸嘴袋。塑料用量比傳統硬質塑料瓶減少 70%。易重復封口、攜帶方便且環保。",
            "introSummary": "兼具塑料瓶的實用性與軟包裝的環保優勢。傾倒方便，可重復密封，顧客能輕鬆擠乾淨每一滴產品。最適合嬰兒食品、醬料、飲料和環保補充裝。",
            "cta": {
                "title": "傾倒環保未來",
                "description": "查看我們豐富的吸嘴與蓋子配件，找到最合適的組合。",
                "button": "獲取免費樣品"
            },
            "sections": {
                "scenarioTrigger": {
                    "title": "這個頁面適合您嗎？",
                    "text": "如果您是嬰兒食品品牌、醬料製造商或飲料公司，正在尋找一種比起傳統塑料瓶成本更低、運輸更輕的液體包裝——吸嘴袋就是您的完美方案。",
                    "baby": {"title": "嬰兒副食品品牌", "desc": "安全、攜帶方便，方便嬰幼兒吮吸食用"},
                    "sauce": {"title": "醬料及調味品商", "desc": "支持高溫灌裝，傾倒乾淨不髒手"},
                    "beverage": {"title": "飲料與液體品牌", "desc": "比起硬質塑料瓶減少 70% 的塑料消耗量"}
                },
                "overview": {
                    "title": "什麼是吸嘴袋？",
                    "text": "吸嘴袋是在站立袋的基礎上，加裝了塑料倾倒嘴和旋蓋的軟包裝袋，專為液體、半流體和粘稠產品而設計。它既有軟包裝的低成本優勢，又有硬質容器的便利功能。",
                    "advantagesTitle": "主要優勢：",
                    "advantages": [
                        "旋蓋設計，方便重復開啟和密封",
                        "比起塑料瓶減少 70% 的塑料消耗",
                        "可在貨架上穩固站立展示",
                        "重量極輕，可大幅度節省運輸物流成本",
                        "提供高阻隔材料選項，防止液體變質"
                    ]
                },
                "applications": {
                    "title": "哪些產品最適合使用吸嘴袋？",
                    "text": "吸嘴袋被廣泛應用於各行各業的流體產品：",
                    "baby": {"title": "嬰兒副食品", "items": ["水果泥", "蔬菜泥", "酸奶奶昔"]},
                    "sauce": {"title": "醬料與調味品", "items": ["番茄醬與沙拉醬", "辣椒醬", "沙律醬"]},
                    "beverage": {"title": "飲品飲料", "items": ["能量果汁包", "冷萃咖啡", "調酒預調液"]},
                    "oil": {"title": "油脂與糖漿", "items": ["食用油", "天然蜂蜜及楓糖", "酥油"]},
                    "pet": {"title": "寵物濕糧", "items": ["寵物流食貓條", "肉湯補充劑", "液體營養品"]},
                    "nonfood": {"title": "非食品類", "items": ["洗衣液", "洗手液補充裝", "家用清潔劑"]}
                },
                "spoutOptions": {
                    "title": "我們提供哪些吸嘴及旋蓋選項？",
                    "sizes": {
                        "title": "吸嘴口徑規格",
                        "items": [
                            "8.6mm – 標準口徑，適合清水、果汁等流動液體",
                            "10mm – 中等口徑，適合果泥、較稀的醬料",
                            "15mm – 大口徑，適合較粘稠的液體產品",
                            "22mm – 特大口徑，適合膏狀物、果醬或大顆粒流體"
                        ]
                    },
                    "caps": {
                        "title": "瓶蓋功能特色",
                        "items": [
                            "標準螺紋旋蓋",
                            "翻蓋式倾倒口",
                            "防窒息蓋（專為嬰兒食品設計的大花蓋）",
                            "防盜防偽安全扣環"
                        ]
                    },
                    "galleryTitle": "吸嘴袋款式與工藝樣品",
                    "gallery": ["標準吸嘴旋蓋", "飲料吸嘴袋", "高阻隔鋁箔袋", "高光澤質感表面"]
                },
                "ecoMaterials": {
                    "title": "有哪些適合液體包裝的環保材料？",
                    "text": "我們可以使用符合環保理念的材料來生產吸嘴袋，既能降低環境負擔，又不會影響防漏及阻隔性能。",
                    "kraft": {
                        "title": "🌾 什麼是 \"防潮牛皮紙質感 (Kraft-Look)\"？",
                        "p1": "防潮牛皮紙質感是在薄膜表面採用高精度數位印刷仿牛皮紙紋理，再覆以啞光塗層。它能為包裝帶來牛皮紙自然、高檔的視覺和觸覺質感，同時保持 100% 防水——這對於液體包裝是必不可少的。",
                        "p2": "真實的牛皮紙會吸水受潮，但我們的仿牛皮紙工藝既有環保美感，又能確保液體阻隔性完好無損。"
                    },
                    "eco": {
                        "title": "ℹ️ 重要資訊：正確認知「環保」材料",
                        "p1": "Bio-PE（生物基 PE）和 PCR（回收再生塑料）吸嘴袋在廢棄後並不能自動降解。但是，它們在產品生命週期的「起點」是非常環保的：",
                        "bio": {
                            "title": "Bio-PE (含30-50%生物基成分)",
                            "items": [
                                "原料來自甘蔗提取的聚乙烯",
                                "使用可再生的可持續資源",
                                "降低對石油化工原料的依賴",
                                "在 PE 回收體系中可 100% 循環再造"
                            ]
                        },
                        "pcr": {
                            "title": "PCR (含30%回收再生塑料)",
                            "items": [
                                "含有消費後回收的再生塑料",
                                "減少全新塑料的消耗量",
                                "可提供 GRS（全球回收標準）認證",
                                "在 PE 回收體系中可 100% 循環再造"
                            ]
                        },
                        "p2": "需要完全可降解堆肥的材料？請看我們的可堆肥材料介紹（注意：由於防漏技術限制，完全可堆肥的液體吸嘴袋可選規格較少）"
                    }
                },
                "specifications": {
                    "title": "技術參數",
                    "items": [
                        "材料結構：PA/PE (尼龍/聚乙烯) 多層共擠或複合",
                        "薄膜厚度：70 - 150 微米",
                        "透氧率 (OTR)：< 1.0 cc/m²/24hr (極佳阻氣)",
                        "透濕率 (MVTR)：< 2.0 g/m²/24hr (高效鎖水)",
                        "熱封強度：> 25 N/15mm (確保不爆袋)",
                        "防穿刺力：極高（可防尖銳物刺破）"
                    ]
                },
                "marketData": {
                    "title": "市場數據與情報",
                    "metrics": [
                        {"val": "$4.1B", "label": "全球吸嘴袋市場", "desc": "2024年產值"},
                        {"val": "7.4%", "label": "複合年增長率", "desc": "2024-2030"},
                        {"val": "食品飲料占", "label": "最大份額", "desc": "佔總銷量 60% 以上"},
                        {"val": "高阻隔薄膜", "label": "需求激增", "desc": "年增長率最快的板塊"}
                    ],
                    "storyTitle": "客戶成功案例",
                    "storyText": "「我們把嬰兒果泥線的包裝從玻璃瓶改成吸嘴袋後，包裝材料成本直接降低了 45%，物流行程中的碳足跡也減少了 62%。」",
                    "storyAuthor": "— 嬰幼兒食品品牌，月產量 50萬+ 個"
                },
                "materialComparison": {
                    "title": "材料性能對比"
                }
            },
            "faqs": [
                {
                    "question": "吸嘴袋可以用於高溫灌裝的產品嗎？",
                    "answer": "可以，我們提供專門的高溫複合材料（如耐高溫 PET/PA/R-CPP），可承受 85-90°C 的高溫熱灌裝，非常適合需要巴氏殺菌的果泥和熱充填醬料。"
                },
                {
                    "question": "客製化印刷吸嘴袋的最低起訂量是多少？",
                    "answer": "我們特製印刷的吸嘴袋起訂量僅為 1,000 個起。無印刷的現貨吸嘴袋最低起訂量為 500 個，極力降低初創品牌的准入門檻。"
                },
                {
                    "question": "吸嘴袋可以回收嗎？",
                    "answer": "是的，我們的 Mono-PE（單一 PE）和 PCR（再生 PE）材料吸嘴袋，在支持塑料軟包裝回收的地區可進行循環利用。而一些含有鋁箔（PET/AL/PE）的超高阻隔袋在部分地區回收難度較大。"
                },
                {
                    "question": "吸嘴袋是如何進行灌裝的？",
                    "answer": "吸嘴袋主要有兩種灌裝方式：第一種是在工廠製作時不封頂部，由灌裝機從頂部開口灌入液體後進行最終熱封；第二種是直接從吸嘴口注入液體，隨後由旋蓋機自動旋緊瓶蓋密封。"
                }
            ],
            "tables": [
                {
                    "title": "吸嘴袋規格容量對照表",
                    "headers": ["袋裝容量", "外形尺寸 (寬 x 高 + 底闊)", "常用吸嘴口徑", "典型用途"],
                    "rows": [
                        ["100ml", "85 × 140 + 50mm", "8.6mm / 10mm", "嬰兒副食果泥、能量凝膠、便攜果汁"],
                        ["250ml", "110 × 170 + 60mm", "10mm", "袋裝果汁、預調雞尾酒、運動飲料"],
                        ["500ml", "130 × 200 + 70mm", "10mm / 15mm", "環保洗手液補充裝、沙拉醬、調味醬"],
                        ["1L", "160 × 250 + 80mm", "15mm / 22mm", "食用植物油、洗衣液、洗車液補充裝"],
                        ["2L", "200 × 300 + 100mm", "22mm", "商用大容量調味醬、液體化工產品"]
                    ]
                }
            ]
        },
        "flatBottomBags": {
            "title": "平底袋 | 方底袋 | 八邊封包裝袋批發",
            "heroTitle": "高檔紙盒質感，卻無紙盒累贅",
            "heroSubtitle": "五個展示面，極致的貨架站立效果。精品咖啡與高端零食的最佳選擇。",
            "introSummary": "平底袋能為您的產品帶來高端精緻的形象，且性價比極高。長方形平整底座、5個印刷展示面、極佳的貨架存在感。最適合精品咖啡豆、寵物糧食和所有高端零售產品。",
            "cta": {
                "title": "提升您的品牌檔次",
                "description": "看看精品品牌為何紛紛換成八邊封平底袋。",
                "button": "獲取免費樣品"
            },
            "sections": {
                "scenarioTrigger": {
                    "title": "這個頁面適合您嗎？",
                    "text": "如果您是精品咖啡烘焙商、高端寵物糧品牌或手工零食製造商，正在尋找一種能在零售貨架上完美展示品牌，且承重力極強的包裝袋——平底袋就是您的首選。",
                    "coffee": {"title": "咖啡烘焙商", "desc": "五面高清印刷展示 + WIPF排氣閥"},
                    "petFood": {"title": "寵物糧食品牌", "desc": "方正底座，裝填重物後依然平整直立"},
                    "premium": {"title": "高端手工產品", "desc": "精美紙盒外觀，極具送禮檔次"}
                },
                "overview": {
                    "title": "什麼是平底袋？",
                    "text": "平底袋（也稱為方底袋或八邊封袋）具有一個長方形的平整底座，使袋子在填充產品後能夠如紙盒般穩固直立。相比傳統的自立袋，平底袋提供了更佳的展示視覺效果和更大的裝填空間。",
                    "benefitsTitle": "主要優勢：",
                    "benefits": [
                        "5面印刷區域，360度立體展示品牌信息",
                        "平整方底，貨架擺放穩固，不偏不倒",
                        "比起同等尺寸的自立袋容量提升 30%",
                        "外觀高檔，能顯著提升產品溢價",
                        "提供可降解及路邊可回收等環保材料"
                    ]
                },
                "construction": {
                    "title": "平底袋的結構是怎樣的？",
                    "text": "平底袋是由多個獨立面熱封拼接而成，形成穩固的立體結構：",
                    "panel5": {
                        "title": "五面立體設計",
                        "items": [
                            "正面 —— 品牌主視覺展示區",
                            "背面 —— 產品成份、介紹及故事",
                            "兩側風琴邊 —— 額外的設計及展示空間",
                            "底部平底 —— 穩固的底座，亦可印刷條碼"
                        ]
                    },
                    "closure": {
                        "title": "密封配件選擇",
                        "items": [
                            "拉鏈（普通貼合拉鏈或魔術貼拉鏈）",
                            "馬口鐵封口條（咖啡包裝經典配搭）",
                            "單向排氣閥（釋放咖啡二氧化碳，阻隔氧氣）",
                            "易撕口設計，方便消費者開啟"
                        ]
                    }
                },
                "applications": {
                    "title": "哪些產品最適合使用平底袋？",
                    "text": "平底袋最適合定位高端、需要卓越貨架形象的零售產品：",
                    "items": [
                        "精品咖啡豆", "高端茶葉禮盒", "寵物乾糧及零食", "蛋白粉及代餐粉",
                        "有機燕麥麥片", "脫水乾果", "高端堅果", "大米及五穀雜糧",
                        "有機零食", "手工糕點", "超級食品", "高端禮品包裝"
                    ]
                },
                "materials": {
                    "title": "平底袋有哪些材料可供選擇？",
                    "types": {
                        "compostable": {"title": "可堆肥降解", "desc": "天然牛皮紙 + PLA。符合歐盟 EN 13432 工業堆肥認證。"},
                        "recyclable": {"title": "路邊可回收", "desc": "單一材料 Mono-PE 結構，可直接放入軟塑料回收箱。"},
                        "barrier": {"title": "超高阻隔鋁箔", "desc": "金屬化高阻隔薄膜或純鋁箔，提供極致的氣密保鮮保護。"}
                    },
                    "galleryTitle": "平底袋材料及配件展示",
                    "gallery": ["方正平底結構", "內層鋁箔阻隔", "牛皮紙復古質感", "馬口鐵封口條"]
                },
                "aiSearch": {
                    "title": "如何利用 AI 搜索尋找最佳平底袋供應商",
                    "prompt": "💡 如果您正使用 AI 搜索引擎（如 Gemini 或 ChatGPT），可以試試這樣提問：",
                    "items": [
                        "「推薦高檔咖啡平底袋廠家，最低起訂量是多少？」",
                        "「八邊封平底袋和一般自立袋裝咖啡有什麼區別？」",
                        "「有沒有帶排氣閥和拉鏈的環保紙質方底袋製造商？」",
                        "「哪裡可以定制 5 面印刷的可堆肥降解咖啡包裝袋？」"
                    ]
                },
                "specifications": {
                    "title": "技術指標",
                    "items": [
                        "常用結構：PET/AL/PE、牛皮紙/AL/PE、PLA/紙/PLA",
                        "薄膜厚度：100 - 160 微米 (厚實有質感)",
                        "單向排氣閥：可選裝 Goglio 或 WIPF 進口氣閥",
                        "兩側風琴邊：可印刷，增加側面視覺層次",
                        "起訂量：數位印刷 1,000 個起，凹版大貨 5,000 個起",
                        "FSC森林認證：紙質包裝可提供 FSC 認證"
                    ]
                },
                "marketData": {
                    "title": "市場數據與情報",
                    "metrics": [
                        {"val": "$3.5B", "label": "全球平底袋規模", "desc": "2024年產值"},
                        {"val": "6.2%", "label": "複合年增長率", "desc": "2024-2030"},
                        {"val": "咖啡與茶葉", "label": "最大份額", "desc": "引領平底袋的使用潮流"},
                        {"val": "+30%", "label": "品牌業績提升", "desc": "許多品牌換裝八邊封袋後錄得此增幅"}
                    ],
                    "storyTitle": "客戶成功案例",
                    "storyText": "「我們的高端手工燕麥系列改用平底八邊封袋後，由於能在貨架上立得非常平整漂亮，成功吸引了三家大型連鎖超市採購，銷量迅速翻倍。」",
                    "storyAuthor": "— 有機麥片品牌，月銷量 25萬+ 包"
                },
                "materialComparison": {
                    "title": "材料性能對比",
                    "guideTitle": "材料採購指南",
                    "guideText": "平底袋是咖啡和寵物糧食的頂級包裝選擇。如果品牌走綠色環保路線，建議選擇 PLA 牛皮紙降解材料；如果產品需要長期防潮防氧化，則建議選用帶有純鋁箔阻隔層的結構。"
                }
            },
            "faqs": [
                {
                    "question": "平底袋和普通自立袋有什麼區別？",
                    "answer": "平底袋具有長方形的平底座，填充後袋身呈立體箱狀，擁有5個展示面，且立在貨架上極其穩固。而自立袋是底部折疊熱封（圓底或K-Seal底），填充後袋身呈扁三角錐狀。平底袋的容量更大，外觀也更高檔。"
                },
                {
                    "question": "平底袋可以裝咖啡排氣閥嗎？",
                    "answer": "可以。我們可以在平底袋的任意位置（通常為正面中上方）安裝進口 Goglio 或國產優質單向排氣閥，以便新鮮烘焙的咖啡豆釋放二氧化碳，同時防止外氣進入導致豆子受潮氧化。"
                },
                {
                    "question": "特製印刷平底袋的最低起訂量是多少？",
                    "answer": "特製數位印刷的平底袋最低起訂量僅為 1,000 個；如果需要更優惠的單價且批量較大，凹版印刷大貨起訂量為 5,000 個。無印刷的現貨平底袋最低 500 個即可出貨。"
                },
                {
                    "question": "平底袋有環保材料嗎？",
                    "answer": "有的。我們提供由 Mono-PE（單一 PE）製成的路邊可回收平底袋，以及採用牛皮紙與 PLA 複合製成的生物降解可堆肥平底袋。"
                }
            ],
            "tables": [
                {
                    "title": "平底袋容量尺寸參考表",
                    "headers": ["容量規格", "參考尺寸 (寬 x 高 x 底闊/風琴深)", "常見裝填產品", "是否建議加排氣閥"],
                    "rows": [
                        ["250g (半磅)", "90 × 200 × 60mm", "精品咖啡豆、高端花茶", "建議"],
                        ["500g (一磅)", "120 × 260 × 80mm", "咖啡豆、堅果、燕麥、寵物零食", "建議"],
                        ["1kg", "140 × 320 × 90mm", "批發裝咖啡豆、蛋白粉、五穀雜糧", "建議"],
                        ["2kg", "180 × 400 × 110mm", "中包裝寵物乾糧、貓砂、麵粉", "不需"],
                        ["5kg", "240 × 500 × 120mm", "商業批發寵物飼料、大米", "不需"]
                    ]
                }
            ]
        },
        "vacuumPouches": {
            "title": "真空袋 | 多層共擠高阻隔真空包裝袋",
            "heroTitle": "鎖住新鮮，隔絕氧氣",
            "heroSubtitle": "工業級 PA/PE 真空包裝袋。延長食物保質期 3-5 倍。超強抗穿刺性能，支持低溫慢煮及高溫殺菌。",
            "introSummary": "真空包裝袋通過在封口前抽乾包裝內空氣，使食品的保鮮期延長3至5倍。我們的高阻隔真空袋能有效防止氧化、水分流失及細菌污染。適用於商用真空機、外抽式真空機，並提供低溫慢煮及高溫殺菌規格。",
            "cta": {
                "title": "索取客製化真空袋",
                "description": "索取免費樣品或為您的產品獲取詢價估計。",
                "button": "免費索取樣品"
            },
            "sections": {
                "overview": {
                    "title": "什麼是真空袋？",
                    "text": "真空包裝袋是專為真空抽氣設計的包裝。在熱封口之前，機器會將袋內的空氣抽盡，使袋內達到高度真空狀態。高阻隔的薄膜結構能有效阻擋氧氣與水汽滲透，從而極大地延長食物的保質期。",
                    "benefitsTitle": "主要優勢：",
                    "benefits": [
                        "延長產品保質期達 3 - 5 倍",
                        "防止產品氧化變色及凍結燒（Freezer Burn）",
                        "完美保留食材的水分與新鮮口感",
                        "顯著減少食品過期造成的浪費",
                        "部分規格支持 Sous Vide 低溫慢煮"
                    ]
                },
                "applications": {
                    "title": "真空袋的常見應用",
                    "meat": {"title": "肉類與禽類", "items": ["新鮮肉塊", "臘肉香腸", "加工肉製品", "熟食冷切肉"]},
                    "seafood": {"title": "海鮮水產", "items": ["新鮮魚肉", "煙燻三文魚", "貝類", "冷凍海產"]},
                    "cheese": {"title": "芝士與乳製品", "items": ["整塊芝士", "芝士切片", "手工乳酪", "牛油黃油"]},
                    "meals": {"title": "預製菜與慢煮", "items": ["低溫慢煮料理", "料理包", "預熟肉類", "醃製食品"]},
                    "coffee": {"title": "咖啡硬包", "items": ["真空磚型咖啡豆", "咖啡粉", "單品咖啡", "拼配咖啡粉"]},
                    "nonfood": {"title": "非食品類別", "items": ["精密電子零件", "無菌醫療器械", "藥品原料", "檔案書信防霉保存"]}
                },
                "types": {
                    "title": "真空袋的種類",
                    "chamber": {"title": "光面真空袋 (商用)", "desc": "表面光滑，適用於商用室式真空包裝機。成本低，適合液體及醬料。"},
                    "external": {"title": "紋路真空袋 (家用)", "desc": "單面有微通道紋路，使家用外抽式真空機容易抽氣，兼容性極廣。"},
                    "retort": {"title": "高溫蒸煮真空袋", "desc": "採用耐高溫材料，支持 121°C 高溫殺菌蒸煮，適合常溫保存食品。"},
                    "sousvide": {"title": "低溫慢煮袋", "desc": "食品級無毒材料，支持水浴加熱慢煮（100°C 以下不釋放有害物質）。"}
                },
                "specifications": {
                    "title": "技術指標",
                    "items": [
                        "常用結構：PA/PE (尼龍/聚乙烯) 共擠或複合材料",
                        "薄膜厚度：70 - 150 微米 (μm)",
                        "透氧率 (OTR)：< 1.0 cc/m²/24hr (高阻氣性能)",
                        "透濕率 (MVTR)：< 2.0 g/m²/24hr (極佳鎖水防潮)",
                        "熱封強度：> 25 N/15mm (封口牢固不漏氣)",
                        "抗穿刺力：極強（能防止帶骨肉類刺破包裝）"
                    ]
                },
                "industryScenarios": {
                    "title": "行業應用分析",
                    "meat": {"title": "肉類加工廠", "desc": "鮮肉批發、醃製臘肉、冷凍肉品分裝", "badge": "市場佔有率：40%"},
                    "seafood": {"title": "水產海鮮", "desc": "海魚切片、熟食蝦蟹、煙燻海鮮保存", "badge": "30% 市場份額"},
                    "dairy": {"title": "乳製品行業", "desc": "芝士整塊包裝、乾酪分切、黃油包裝", "badge": "30% 市場份額"},
                    "storyTitle": "客戶成功案例",
                    "storyText": "「我們肉類加工廠採用這款尼龍共擠真空袋後，鮮肉的保質期從原來的 5 天延長到了 21 天，使我們可以進行跨地區配送，產品報廢率降低了 80%。」",
                    "storyAuthor": "— 高端肉品配送商，月出貨量 10萬+ 個"
                },
                "marketData": {
                    "title": "市場數據與情報",
                    "metrics": [
                        {"val": "$5.8B", "label": "全球真空包裝規模", "desc": "2024年產值"},
                        {"val": "5.2%", "label": "複合年增長率", "desc": "2024-2030"},
                        {"val": "肉類與海鮮", "label": "最大板塊", "desc": "佔真空包裝 50% 以上"},
                        {"val": "70%", "label": "PA/PE共擠份額", "desc": "行業首選標準材料"}
                    ],
                    "storyTitle": "品質驗證案例",
                    "storyText": "「換用這款高韌性尼龍共擠真空袋後，我們帶骨豬扒的破損率從 4% 降至 0.1% 以下，為我們節省了大量零售退貨成本。」",
                    "storyAuthor": "— 海鮮肉類出口商，月用量 50萬+ 個"
                },
                "materialComparison": {
                    "title": "材料性能對比"
                }
            },
            "faqs": [
                {
                    "question": "光面真空袋和紋路真空袋有什麼區別？",
                    "answer": "光面真空袋表面光滑，最適合商用「室式真空機」。機器會把整個袋子放入工作室內，使內外氣壓一致進行抽氣。而紋路真空袋單面有凹凸網格紋路，形成微小通道，使家用「外抽式真空機」（如 FoodSaver）能順利將袋內空氣吸出。"
                },
                {
                    "question": "真空袋可以放進開水里煮或用微波爐加熱嗎？",
                    "answer": "我們生產的 PA/PE 食品級低溫慢煮真空袋，支持 100°C 以下的水浴慢煮。如果您的食品需要放入高壓鍋進行 121°C 高溫高壓殺菌（如常溫熟食），必須選用專門的 PA/PP 高溫蒸煮真空袋。微波爐加熱前必須在袋上剪開一個缺口放氣。"
                },
                {
                    "question": "我該如何選擇真空袋的厚度？",
                    "answer": "一般無骨肉類、芝士、軟質食品，選用 70 至 90 微米厚度即可。如果是帶骨的排骨、堅硬的肉乾或有尖銳邊角的乾貨，建議選擇 120 至 150 微米厚度，以防刺穿漏氣。"
                },
                {
                    "question": "特製印刷真空袋的最低起訂量是多少？",
                    "answer": "特製印刷真空袋的最低起訂量為 1,000 個起。無印刷的現貨光面/紋路真空袋，最低 500 個起即可出貨。"
                }
            ],
            "tables": [
                {
                    "title": "真空袋常用規格對照表",
                    "headers": ["規格名稱", "外形尺寸 (寬 x 高)", "推薦薄膜厚度", "適用食品範例"],
                    "rows": [
                        ["小號袋", "150 × 200mm", "80 微米", "單人份切片芝士、香腸、火腿"],
                        ["中號袋", "200 × 300mm", "80 / 90 微米", "牛扒、魚排、整塊奶酪"],
                        ["大號袋", "250 × 350mm", "100 微米", "整隻春雞、大塊冷凍海鮮、排骨"],
                        ["防刺骨頭袋", "200 × 300mm", "120 / 150 微米", "帶骨肉排、羊排、堅硬乾貨"],
                        ["商用大袋", "300 × 450mm", "120 微米", "餐飲批發裝大份肉類、原料保存"]
                    ]
                }
            ]
        },
        "customBoxes": {
            "title": "精裝禮盒 | 特製包裝紙盒 | Achieve Pack",
            "heroTitle": "特製印刷包裝盒",
            "heroSubtitle": "為朱古力、茶葉、咖啡和手工食品打造的高級精裝禮盒包裝",
            "introSummary": "Achieve Pack 提供優質的特製印刷包裝盒，採用 FSC 認證材料，提供燙金及凹凸壓印等高級工藝。最適合追求奢華外觀的朱古力、茶葉、咖啡和手工食品品牌。MOQ 200 個（包含海運）。生產期 30 天 + 船期 40-60 天。",
            "cta": {
                "title": "準備好訂購特製包裝盒了嗎？",
                "description": "為您的手工產品製作高級包裝。最低起訂量 200 個。",
                "button": "選購特製包裝盒"
            },
            "sections": {
                "scenarioTrigger": {
                    "title": "這個頁面適合您嗎？",
                    "text": "如果您需要為高端手工食品（如朱古力、高級茶葉、精品咖啡）或奢侈禮品打造高級包裝，您來對地方了。",
                    "chocolate": {"title": "朱古力與糖果", "desc": "燙金與擊凸工藝展現極致奢華感"},
                    "coffee": {"title": "咖啡與茶葉品牌", "desc": "結實的飛機盒，適合網購配送"},
                    "artisan": {"title": "手工食品商", "desc": "採用 FSC 森林環保認證紙張材料"}
                },
                "overview": {
                    "title": "我們提供哪些包裝盒款式？",
                    "text": "Achieve Pack 提供優質的特製印刷硬紙盒，專為手工食品、精品咖啡、奢華禮品及高端零售而設計。我們的包裝盒採用 FSC 認證的可持續紙張，表面採用啞膜處理，並可加裝燙金、擊凸等高級視覺效果。",
                    "mailer": {
                        "title": "瓦楞飛機盒 (Mailer Boxes)",
                        "desc": "結構結實，最適合咖啡、茶葉及手工食品的網購郵寄包裝，防壓防撞。",
                        "sizes": ["✓ 500g 裝尺寸: 130 × 85 × 35mm", "✓ 1kg 裝尺寸: 270 × 85 × 35mm", "✓ CMYK 全彩色客製印刷", "✓ 標準啞光表面處理", "✓ 支持局部燙金工藝", "✓ FSC 森林認證環保紙張"]
                    },
                    "tuck": {
                        "title": "折疊卡紙盒 (Tuck Boxes)",
                        "desc": "精美小巧，最適合朱古力排塊、單包茶袋及精緻糖果的零售包裝。",
                        "sizes": ["✓ 100g 裝尺寸: 81 × 162 × 15mm", "✓ 250g 優質白卡紙", "✓ 高精細金屬燙印", "✓ 特色擊凸工藝", "✓ 啞光觸感膜", "✓ 100% 可回收再造"]
                    }
                },
                "features": {
                    "title": "高級表面工藝選項",
                    "f1": {"title": "✨ 金屬燙印 (Gold Foil Stamping)", "desc": "採用高溫燙印金屬箔，為品牌標誌增添亮眼奢華光澤"},
                    "f2": {"title": "🎨 擊凸壓紋 (Embossing)", "desc": "使文字或圖案微微凸起，創造出眾的立體觸覺效果"},
                    "f3": {"title": "📦 啞光覆膜 (Matte Lamination)", "desc": "表面覆以啞光保護膜，手感細緻防刮，質感高檔"},
                    "f4": {"title": "🌱 FSC 森林認證", "desc": "源自負責任森林管理的可回收紙張材料，更符合環保理念"},
                    "f5": {"title": "🖨️ CMYK 柯式印刷", "desc": "高精度色彩還原，色彩飽滿逼真，展示精美圖案"},
                    "f6": {"title": "💪 強韌灰色卡紙", "desc": "採用 2.0mm 高密度硬紙板，為包裝提供堅固防護與筆挺外觀"},
                    "galleryTitle": "包裝盒款式與細節工藝",
                    "gallery": ["瓦楞飛機盒", "折疊卡紙盒", "標誌燙金工藝", "特色擊凸細節"]
                },
                "applications": {
                    "title": "最適合以下產品",
                    "chocolate": {"title": "手工朱古力", "desc": "排塊朱古力、松露朱古力禮盒"},
                    "tea": {"title": "高級茶葉", "desc": "散裝茶罐盒、茶包禮盒、茶具套裝"},
                    "coffee": {"title": "精品咖啡", "desc": "咖啡掛耳包禮盒、咖啡豆套裝盒"},
                    "cosmetics": {"title": "高端化妝品", "desc": "護膚品禮盒、香水包裝盒"},
                    "gifts": {"title": "奢華節日禮品", "desc": "商務答謝禮盒、中秋端午節日禮品"},
                    "jewelry": {"title": "珠寶與工藝品", "desc": "高檔手錶盒、首飾包裝、手工藝品"}
                },
                "specifications": {
                    "title": "技術參數",
                    "items": [
                        "紙張材質：2.0mm 灰板紙、白卡紙、E瓦楞瓦楞紙",
                        "印刷技術：CMYK 高精柯式印刷、專色 Pantone 印刷",
                        "表面處理：啞光膜、亮光膜、局部過 UV 光油",
                        "環保認證：可提供 FSC 森林認證紙張",
                        "起訂量：最低起訂量僅 200 個起",
                        "交貨週期：生產約 30 天 + 船期約 40-60 天（含海運）"
                    ]
                },
                "marketData": {
                    "title": "市場數據與情報",
                    "metrics": [
                        {"val": "$15.6B", "label": "全球精裝盒規模", "desc": "2024年產值"},
                        {"val": "4.8%", "label": "複合年增長率", "desc": "2024-2030"},
                        {"val": "手工食品", "label": "增速最快", "desc": "引領高端禮盒包裝的需求"},
                        {"val": "75%", "label": "消費者青睞環保", "desc": "傾向購買有 FSC 認證的產品包裝"}
                    ],
                    "storyTitle": "客戶成功案例",
                    "storyText": "「我們把手工巧克力禮盒升級為這款帶燙金的精裝磁鐵盒後，第一季度的銷量直接增長了 150%，成功將品牌定位提升到了高端禮品級別。」",
                    "storyAuthor": "— 高級手工朱古力品牌，英國"
                },
                "materialComparison": {
                    "title": "包裝材質對比"
                }
            },
            "faqs": [
                {
                    "question": "瓦楞飛機盒和精裝硬紙盒有什麼區別？",
                    "answer": "瓦楞飛機盒由 E-flute 瓦楞紙板製成，重量輕且非常耐衝擊，適合郵寄和網購快遞。精裝硬紙盒（灰板盒）則由厚實、不可折疊的高密度紙板製成，主要用於高端零售店鋪展示及奢華禮盒包裝。"
                },
                {
                    "question": "可以加裝包裝內墊 (Insert) 嗎？",
                    "answer": "可以。我們可根據您的產品形狀，設計紙卡內托、EVA 泡棉或環保紙漿內托，以固定並保護您的產品（如茶罐、朱古力等）。"
                },
                {
                    "question": "定制包裝盒的最低起訂量是多少？",
                    "answer": "我們定制印刷的瓦楞飛機盒及精裝禮盒最低起訂量僅為 200 個。如此低的門檻讓初創或獨立手工品牌也能擁有大牌包裝。"
                },
                {
                    "question": "精裝盒的海運需要多長時間？",
                    "answer": "由於精裝硬盒體積較大，通常以成品（非折疊）形式發貨，因此最經濟的方式是海運。生產需要 30 天，海運航程根據目的地通常需要 40 到 60 天。報價中已包含海運費用。"
                }
            ],
            "tables": [
                {
                    "title": "特製包裝盒款式性能對比",
                    "headers": ["包裝盒類型", "抗壓強度", "高檔外觀", "生產成本", "最佳適用場景"],
                    "rows": [
                        ["硬板精裝盒 (2.0mm)", "極高", "極致奢華", "較高", "高端節日禮盒、奢侈巧克力、精品珠寶"],
                        ["E瓦楞飛機盒", "高", "自然簡約", "中等", "電商快遞飛機盒、咖啡套裝、手工皂盒"],
                        ["折疊卡紙盒", "中等", "現代乾淨", "較低", "巧克力排塊、單包茶包、化妝品零售盒"],
                        ["環保再生紙板盒", "中等", "自然古樸", "較低", "天然有機護膚品、環保理念品牌"]
                    ]
                }
            ]
        }
    },
    "es": {
        "flatPouches": {
            "title": "Bolsas Planas | Sobres de Tres Sellos | Empaque Flexible",
            "heroTitle": "Simple, pero no lo subestimes",
            "heroSubtitle": "El empaque flexible original. Sobres sellados en tres lados para muestras, porciones individuales y productos que no necesitan mantenerse de pie.",
            "introSummary": "Las bolsas planas son la opción flexible más rentable. Perfectas para paquetes de muestras, sobres y productos livianos. Bajo desperdicio, menor costo, sorprendentemente versátil.",
            "cta": {
                "title": "Comience con lo Simple",
                "description": "Muestras, sobres o cualquier otra cosa: díganos qué necesita.",
                "button": "Obtener Muestras Gratis"
            },
            "sections": {
                "scenarioTrigger": {
                    "title": "¿Es esta página para usted?",
                    "text": "Si necesita empaques económicos para porciones individuales, muestras o sobres, está en el lugar correcto.",
                    "sampleProducers": {"title": "Productores de Muestras", "desc": "Muestras de productos, tamaños de prueba"},
                    "foodService": {"title": "Servicio de Alimentos", "desc": "Sobres de salsas, paquetes de azúcar"},
                    "teaSpice": {"title": "Marcas de Té y Especias", "desc": "Porciones individuales"}
                },
                "overview": {
                    "title": "¿Qué es una bolsa de 3 sellos?",
                    "text": "Una bolsa sellada por 3 lados (también llamada bolsa plana o sachet) está sellada en tres lados con una parte superior abierta para el llenado. Este es el formato de empaque flexible más económico, ideal para muestras, productos de una sola porción y artículos livianos.",
                    "advantagesTitle": "Ventajas Clave:",
                    "advantages": [
                        "El formato de bolsa más rentable",
                        "Uso eficiente del material (menos desperdicio)",
                        "Envío y almacenamiento compactos",
                        "Rápido de llenar y sellar",
                        "Acceso fácil de rasgar para abrir"
                    ]
                },
                "types": {
                    "title": "Sellado de 3 Lados vs 4 Lados",
                    "seal3": {
                        "title": "Sello de 3 Lados",
                        "desc": "Hecho de película doblada, sellada en 3 lados:",
                        "items": [
                            "Un borde doblado (sin sello)",
                            "Dos sellos laterales",
                            "Sello inferior o superior después del llenado",
                            "La opción más económica"
                        ]
                    },
                    "seal4": {
                        "title": "Sello de 4 Lados",
                        "desc": "Hecho de dos hojas separadas:",
                        "items": [
                            "Sellado en los 4 bordes",
                            "Superficie ligeramente más grande",
                            "Diferentes materiales en el frente y el dorso posibles",
                            "Costo ligeramente más alto"
                        ]
                    }
                },
                "applications": {
                    "title": "Aplicaciones Comunes",
                    "items": [
                        "Muestras de productos", "Porciones individuales", "Sobres de especias", "Paquetes de azúcar",
                        "Sobres de salsas", "Bolsas de té (exterior)", "Paquetes de semillas", "Artículos promocionales",
                        "Sobres farmacéuticos", "Muestras de cosméticos", "Amenidades de hotel", "Toallitas húmedas"
                    ]
                },
                "features": {
                    "title": "Características Disponibles",
                    "opening": {
                        "title": "Características de Apertura",
                        "items": ["Muesca de desgarro (en V o marcada por láser)", "Sello de fácil apertura", "Línea perforada", "Formas troqueladas"]
                    },
                    "additional": {
                        "title": "Opciones Adicionales",
                        "items": ["Agujero para colgar", "Ventana transparente", "Acabado mate/brillante", "Estampado en caliente (foil)"]
                    },
                    "galleryTitle": "Opciones de Bolsas Planas de 3 Sellos",
                    "gallery": ["Sello de 3 Lados", "Película Transparente", "Papel Kraft", "Compostable"]
                },
                "riskHedge": {
                    "title": "¿Aún no está seguro? Tenemos respuestas",
                    "items": [
                        {"q": "¿Son los sobres ecológicos?", "a": "Sí, opciones de PLA y papel/PLA disponibles"},
                        {"q": "¿Cuál es el pedido mínimo?", "a": "500 sin impresión, 1,000 personalizados"},
                        {"q": "¿Pueden tener cremallera (zipper)?", "a": "Sí, o considere bolsas stand-up si requiere resellable"},
                        {"q": "¿Puedo obtener muestras?", "a": "Muestras gratis de sobres para evaluación"}
                    ]
                },
                "decisionCta": {
                    "title": "Elija cómo le gustaría conectarse",
                    "call": {"title": "Reservar una llamada", "desc": "Consulta gratuita de 30 minutos", "btn": "Programar Ahora"},
                    "email": {"title": "Presupuesto por Correo", "desc": "Obtenga respuesta en 24 horas", "btn": "Enviar Correo"},
                    "samples": {"title": "Muestras Gratis", "desc": "Pruebe los sobres primero", "btn": "Solicitar Muestras"}
                },
                "industryScenarios": {
                    "title": "Aplicaciones en la Industria",
                    "food": {"title": "Alimentos y Condimentos", "desc": "Paquetes de salsas, azúcar, condimentos, especias", "badge": "45% de cuota de mercado"},
                    "cosmetics": {"title": "Muestras de Cosméticos", "desc": "Serums de mascarillas faciales, cremas, cuidado de la piel", "badge": "30% de cuota de mercado"},
                    "pharma": {"title": "Farmacéutica y Salud", "desc": "Porciones farmacéuticas, suplementos, paquetes nutricionales", "badge": "25% de cuota de mercado"},
                    "storyTitle": "Historia de Éxito del Cliente",
                    "storyText": "\"Después de cambiar a los sobres de 3 sellos, nuestra marca de condimentos redujo los costos unitarios en un 35% mientras satisfacía perfectamente las necesidades de porciones individuales del servicio de alimentos, expandiendo significativamente nuestra cobertura de mercado.\"",
                    "storyAuthor": "— Fabricante de condimentos, más de 2 millones de unidades al mes"
                },
                "marketData": {
                    "title": "Datos de Mercado e Inteligencia",
                    "metrics": [
                        {"val": "$8.2B", "label": "mercado global de sobres", "desc": "Valor de 2024"},
                        {"val": "6.8%", "label": "CAGR", "desc": "2024-2030"},
                        {"val": "35%", "label": "cuota de servicio de comida", "desc": "Mayor sector de uso final"},
                        {"val": "150B", "label": "consumo en Asia-Pacífico", "desc": "Mercado más grande del mundo"}
                    ],
                    "trendTitle": "Información sobre tendencias del mercado",
                    "trends": [
                        "Mercado de porciones individuales: La demanda de conveniencia impulsa el crecimiento continuo del sobre",
                        "Materiales compostables: La demanda de PLA y materiales ecológicos crece un 25% anual"
                    ]
                },
                "materialComparison": {
                    "title": "Comparación de Materiales",
                    "guideTitle": "Guía de Selección de Materiales",
                    "guideText": "Las bolsas planas de 3 sellos son ideales para escenarios de un solo uso sensibles al costo. Para empaque de líquidos, elija laminado de aluminio; para requisitos ecológicos, elija materiales compostables PLA."
                }
            },
            "faqs": [
                {
                    "question": "¿Cuál es la diferencia entre el sellado de 3 lados y el de 4 lados?",
                    "answer": "Las bolsas de 3 sellos están hechas de una película doblada (sellada en 3 lados), mientras que las bolsas de 4 sellos usan dos hojas separadas (selladas en los 4 lados). El sello de 3 lados es más económico, mientras que el de 4 lados ofrece un área de superficie ligeramente mayor y permite diferentes materiales en el frente y el reverso."
                },
                {
                    "question": "¿Cuál es el pedido mínimo para los sobres?",
                    "answer": "Nuestra cantidad mínima de pedido para sobres impresos personalizados es de 1,000 unidades. Para sobres sin impresión, podemos ofrecer 500 unidades. El bajo costo unitario hace que los sobres sean económicos incluso en cantidades pequeñas."
                },
                {
                    "question": "¿Pueden las bolsas planas tener una cremallera resellable?",
                    "answer": "Las bolsas planas tradicionales son de un solo uso, pero podemos agregar una cremallera para crear una bolsa plana resellable. Sin embargo, para aplicaciones resellables, las bolsas stand-up suelen ofrecer una mejor funcionalidad y valor."
                },
                {
                    "question": "¿Están disponibles las bolsas planas en materiales compostables?",
                    "answer": "Sí, ofrecemos bolsas planas compostables hechas de PLA, papel/PLA o películas a base de celulosa. Están certificadas según la norma EN 13432 para compostaje industrial."
                }
            ],
            "tables": [
                {
                    "title": "Guía de Tamaños de Bolsas Planas",
                    "headers": ["Tamaño", "Dimensiones", "Capacidad Típica", "Uso Común"],
                    "rows": [
                        ["Sobre pequeño", "50 × 70mm", "5-10g / 5-10ml", "Paquetes de azúcar, muestras"],
                        ["Sobre mediano", "70 × 100mm", "10-30g", "Especias, sobres de salsas"],
                        ["Sobre grande", "100 × 150mm", "30-100g", "Exterior de té, paquetes de semillas"],
                        ["Bolsa de muestra", "80 × 120mm", "20-50g", "Muestras de productos"],
                        ["Promocional", "120 × 180mm", "50-100g", "Artículos promocionales"]
                    ]
                }
            ]
        },
        "standUpPouches": {
            "title": "Bolsas Stand-Up | Soluciones de Empaque Flexible",
            "heroTitle": "La Bolsa que se Sostiene por Sí Misma",
            "heroSubtitle": "Excelente presencia en el estante, infinitas opciones de personalización y mucha menos plástico que las botellas. Cremallera, válvula, boquilla o cierre: elija lo suyo.",
            "introSummary": "Las bolsas stand-up le brindan el impacto visual de los empaques rígidos sin el desperdicio. Impresas personalizadas, resellables, de alta阻隔, compostables o reciclables. Desde 500 unidades.",
            "cta": {
                "title": "Diseñemos la Suya",
                "description": "Díganos qué está empacando y le recomendaremos la configuración correcta.",
                "button": "Obtener Muestras Gratis"
            },
            "b2c": {
                "heroBadge": "Empaque Ecológico Stand-Up",
                "heroTitleLine1": "BOLSAS",
                "heroTitleLine2": "STAND-UP",
                "heroSubtitle": "PLA compostable certificado de origen vegetal y estructuras Mono-PE reciclables. Conservación excepcional de la barrera, cremalleras duraderas y tamaños personalizados.",
                "btnCall": "Llamada Gratuita",
                "btnWhatsapp": "Especialista en WhatsApp",
                "badgeMoq": "MÍNIMO PEDIDO: ¡500!",
                "bento": {
                    "title": "RENDIMIENTO FLEXIBLE AVANZADO",
                    "c1Title": "Compostable y Reciclable",
                    "c1Desc": "Elija películas 100% compostables en el hogar/industriales o estructuras de monomaterial reciclables. Ayude a sus clientes a reciclar fácilmente.",
                    "c2Title": "Barreras OTR/WVTR",
                    "c2Desc": "Barreras internas de alto rendimiento que protegen contra la transmisión de oxígeno y humedad (<1.0 cc/m²/24hr). Extienden la vida útil del producto hasta 12 meses.",
                    "c3Title": "Base de Fuelle Estable",
                    "c3Desc": "Opciones de fondo ovalado doblado con precisión o fondo diagonal K-seal reforzado. Permite una perfecta estabilidad en el estante.",
                    "c4Title": "Cierres Personalizados",
                    "c4Desc": "Agregue cremalleras resellables, tiras de hojalata (tin-tie), deslizadores, válvulas desgasificadoras de café o ventanas personalizadas."
                },
                "showcase": {
                    "badge": "Muestra Visual",
                    "title": "PRODUCCIONES REALES",
                    "desc": "Haga clic en cualquier muestra de producción real para inspeccionar nuestra claridad de impresión HD, sellos de fuelle y acabados premium:",
                    "gallery": [
                        {"title": "Bolsa Stand-Up Premium Impresa", "desc": "Bolsa stand-up impresa personalizada que muestra una hermosa impresión digital con alto contraste y tintas ecológicas."},
                        {"title": "Uso de Estilo de Vida de Bolsa Stand-Up", "desc": "Bolsa stand-up sostenible presentada en una escena moderna y orgánica de marca de alimentos B2B."},
                        {"title": "Base de Bolsa K-Seal de Alta Resistencia", "desc": "Estructura de fondo K-seal diagonal diseñada para transportar artículos pesados (hasta 5 kg) con extrema estabilidad de base."},
                        {"title": "Bolsa de Papel Kraft Compostable Cero Residuos", "desc": "Bolsa stand-up oficial de papel kraft natural certificado por el FSC con alta protección contra la humedad y cremalleras resellables."}
                    ]
                },
                "specPricing": {
                    "title": "ESPECIFICACIONES Y PRECIOS",
                    "moqVal": "500 unidades",
                    "moqTitle": "Cantidad mínima de pedido baja",
                    "moqDesc": "Perfecto para el crecimiento de startups, tiradas estacionales limitadas y pruebas de SKU",
                    "dielinesVal": "24 Horas",
                    "dielinesTitle": "líneas de troquel gratuitas",
                    "dielinesDesc": "Obtenga dibujos vectoriales precisos ajustados a sus especificaciones volumétricas exactas",
                    "samplesVal": "100% Gratis",
                    "samplesTitle": "kit de muestras compostables",
                    "samplesDesc": "Reciba un kit que contiene 10 bolsas físicas para probar las propiedades de barrera"
                },
                "table": {
                    "headers": ["Tamaño (A x A + F)", "Capacidad Volumétrica", "Rendimiento de Barrera", "Mejor Aplicación"],
                    "rows": [
                        ["70 x 110 + 40mm", "20g - 50g", "OTR y WVTR < 1.0", "Muestras de porción individual, condimentos, cosméticos en polvo"],
                        ["100 x 150 + 60mm", "50g - 100g", "OTR y WVTR < 1.0", "Té orgánico, dulces, golosinas para mascotas"],
                        ["120 x 200 + 80mm", "100g - 250g", "OTR y WVTR < 0.5", "Café de especialidad con válvula, granola, bocadillos proteicos"],
                        ["150 x 230 + 90mm", "250g - 500g", "OTR y WVTR < 0.5", "Snacks a granel, superalimentos, ingredientes en polvo, suplementos"],
                        ["180 x 280 + 100mm", "500g - 1kg", "OTR y WVTR < 0.1", "Alimento para mascotas al por mayor, sales de baño retail, semillas a granel"]
                    ]
                },
                "faqs": [
                    {"question": "¿Son las bolsas stand-up realmente compostables o reciclables?", "answer": "¡Sí! Ofrecemos dos rutas ecológicas distintas. Nuestras bolsas compostables cuentan con biopelículas certificadas por BPI y TÜV (como PLA de almidón vegetal y pulpa de madera NatureFlex) que se descomponen de forma segura en 90-180 días bajo condiciones orgánicas. Nuestras bolsas reciclables utilizan estructuras de monomaterial PE o PP que son totalmente compatibles con la recolección en tiendas y las líneas estándar de reciclaje circular."},
                    {"question": "¿Mantendrán estas bolsas la frescura de nuestros alimentos secos o café?", "answer": "Absolutamente. Aplicamos películas de alta barrera que proporcionan un OTR y WVTR por debajo de 1.0 (algunos laminados de celulosa metalizada descienden por debajo de 0.1). En combinación con nuestras válvulas desgasificadoras unidireccionales certificadas, su producto está protegido contra la oxidación y la entrada de humedad hasta por 12 meses."},
                    {"question": "¿Qué formatos de fuelle inferior admiten?", "answer": "Admitimos fuelles inferiores redondos estándar para productos livianos, bases K-seal diagonales que distribuyen el peso hacia afuera para mejorar la estabilidad de pie de productos pesados, y fuelles inferiores de arado (plow bottom)."},
                    {"question": "¿Ofrecen tamaños personalizados y formas troqueladas?", "answer": "Sí. Más allá de los tamaños estándar (desde 20g hasta 5kg), diseñamos líneas de troquel personalizadas al milímetro. También fabricamos formas personalizadas (como botellas o matraces) con troqueles especiales para darle a su marca presencia única en el estante."}
                ]
            },
            "sections": {
                "overview": {
                    "title": "Venta al por mayor y suministro de bolsas Stand-Up personalizadas",
                    "text": "Las bolsas Stand-Up (SUP) personalizadas representan el estándar de oro en el empaque comercial comercial flexible. Producidas en líneas de producción de fábrica certificadas por BRCGS, nuestras bolsas ofrecen la máxima presencia en los estantes, ahorro de peso de material y una protección de barrera robusta específicamente calibrada para marcas comerciales en crecimiento.",
                    "kpisTitle": "Indicadores Clave de Rendimiento Comercial B2B:",
                    "kpis": [
                        "Huella 75% más ligera – Reduce drásticamente el espacio de almacenamiento y las emisiones de envío en comparación con frascos de vidrio o latas de metal.",
                        "Área de marca de 360° – Cobertura total de diseño digital impreso con tintas vegetales certificadas a base de soya.",
                        "Integración resellable – Cremalleras resellables duraderas que evitan la degradación del producto en el estante.",
                        "Compatibilidad con líneas automáticas – Tolerancia de ancho de bobina diseñada para permitir una integración perfecta en líneas de envasado automáticas VFFS/HFFS."
                    ]
                },
                "specifications": {
                    "title": "Traducción de parámetros técnicos y guía de compra",
                    "text": "Las compras profesionales requieren una verificación estricta de los datos del empaque. A continuación, le indicamos cómo se traducen nuestras métricas técnicas en beneficios de compra:"
                },
                "applications": {
                    "title": "Escenarios de aplicación B2B recomendados",
                    "text": "Nuestras bolsas stand-up impresas están diseñadas para cumplir con criterios regulatorios y de barrera específicos en el ámbito comercial:",
                    "coffee": {"title": "☕ Tostadores de Café de Especialidad", "desc": "Barreras OTR altas combinadas con válvulas desgasificadoras unidireccionales para ventilar gas y bloquear el oxígeno. Perfecto para conservar granos.", "badge": "Frescura del café tostado por 12 meses"},
                    "organic": {"title": "🌱 Alimentos y Snacks Orgánicos", "desc": "Papel kraft compostable y biopelículas de almidón PLA certificados bajo la norma europea EN 13432. Cumple con las expectativas del mercado ecológico.", "badge": "Compostaje doméstico certificado por TÜV"},
                    "petFood": {"title": "🐾 Alimento y Premios para Mascotas", "desc": "Fondos K-seal reforzados de alta resistencia que evitan la migración de grasa y soportan peso pesado (de 1 kg a 5 kg) sin romperse.", "badge": "Estabilidad del fuelle diagonal K-Seal"},
                    "kSealTitle": "Estabilidad del volumen pesado: Enfoque en K-Seal",
                    "kSealDesc": "Para alimento para mascotas, suplementos de alta densidad o café en grano, integramos bases K-seal personalizadas. El sellado diagonal guía el peso hacia los lados, previniendo rupturas.",
                    "kSealLink": "Conozca cómo K-seal aumenta la capacidad volumétrica →"
                },
                "gallery": {
                    "title": "Producciones reales y verificación de materiales",
                    "text": "Operamos 4 líneas digitales de alta velocidad que admiten múltiples SKU. Revise nuestras producciones reales de bolsas certificadas, compostables y reciclables:"
                }
            },
            "faqs": [
                {
                    "question": "1. ¿Cuál es la cantidad mínima de pedido (MOQ) para bolsas stand-up personalizadas?",
                    "answer": "Apoyamos a las startups con un MOQ de impresión digital líder en la industria de solo 500 unidades por diseño. Para volúmenes mayoristas más grandes, operamos la impresión por huecograbado desde 5,000 unidades, ofreciendo una gran rentabilidad."
                },
                {
                    "question": "2. ¿Proporcionan muestras físicas de preproducción?",
                    "answer": "Sí, enviamos un kit de muestras sostenible gratuito con 10 bolsas físicas para probar las propiedades de barrera. Para pedidos personalizados, generamos una prueba de PDF en 24 horas y podemos fabricar maquetas digitales impresas."
                },
                {
                    "question": "3. ¿Pueden fabricar bolsas de pie según dibujos CAD volumétricos personalizados?",
                    "answer": "Sí. Nuestros ingenieros analizan la densidad de su producto y personalizan los fuelles inferiores y las dimensiones al milímetro. Proporcionamos un archivo PDF con la línea de troquel personalizada en 24 horas."
                },
                {
                    "question": "4. ¿Cuál es el tiempo de producción y tránsito comercial?",
                    "answer": "La producción digital tarda de 7 a 10 días hábiles; los pedidos de huecograbado tardan de 12 a 14 días. El envío aéreo express a EE.UU./UE tarda de 5 a 7 días hábiles, y el flete marítimo económico está disponible en 20-30 días."
                },
                {
                    "question": "5. ¿Qué certificaciones están disponibles para verificar el cumplimiento ecológico?",
                    "answer": "Nuestros biopolímeros tienen números de certificado oficiales de BPI (Biodegradable Products Institute #10529618) y TÜV Austria (OK Compost HOME). Cumplen con las pautas de compostabilidad ASTM D6400 (EE. UU.) y EN 13432 (UE)."
                },
                {
                    "question": "6. ¿Qué detalles se deben enviar para recibir un presupuesto de venta al por mayor?",
                    "answer": "Proporcione la capacidad volumétrica estimada (o dimensiones exactas), preferencia de material (kraft compostable, reciclable mono-PE o alta barrera), requisitos de cremallera o válvula, cantidad de SKU y diseño."
                }
            ],
            "tables": [
                {
                    "title": "Matriz de tamaños volumétricos comerciales",
                    "headers": ["Dimensiones (A x A + F)", "Peso Volumétrico", "Escenarios de Aplicación Recomendados"],
                    "rows": [
                        ["70 x 110 + 40mm", "20g - 50g", "Muestras de porción individual, condimentos, cosméticos en polvo"],
                        ["100 x 150 + 60mm", "50g - 100g", "Té orgánico, dulces, golosinas para mascotas"],
                        ["120 x 200 + 80mm", "100g - 250g", "Café de especialidad con válvula, granola, bocadillos proteicos"],
                        ["150 x 230 + 90mm", "250g - 500g", "Snacks a granel, superalimentos, ingredientes en polvo, suplementos"],
                        ["180 x 280 + 100mm", "500g - 1kg", "Alimento para mascotas al por mayor, sales de baño retail, semillas a granel"]
                    ]
                }
            ]
        },
        "spoutPouches": {
            "title": "Bolsas con Boquilla | Soluciones de Empaque para Líquidos",
            "heroTitle": "Botellas, pero mejores",
            "heroSubtitle": "Boquillas para verter líquidos, purés, salsas, bebidas. 70% menos plástico que las botellas. Reutilizables, cómodas y sostenibles.",
            "introSummary": "Toda la funcionalidad de las botellas con una fracción del desperdicio. Dispensación fácil, resellable, y sus clientes pueden exprimir hasta la última gota. Alimentos para bebés, salsas, bebidas, recargas.",
            "cta": {
                "title": "Viértase en la Sostenibilidad",
                "description": "Vea nuestras opciones de boquillas y encuentre su ajuste.",
                "button": "Obtener Muestras Gratis"
            },
            "sections": {
                "scenarioTrigger": {
                    "title": "¿Es esta página para usted?",
                    "text": "Si es una marca de alimentos para bebés, fabricante de salsas o empresa de bebidas que busca un empaque que vierta como una botella pero cueste menos y se envíe más ligero, las bolsas con boquilla son su solución.",
                    "baby": {"title": "Marcas de Alimento para Bebé", "desc": "Seguro, portátil, fácil dispensación para bebés"},
                    "sauce": {"title": "Productores de Salsas y Condimentos", "desc": "Apto para llenado en caliente, vertido limpio"},
                    "beverage": {"title": "Compañías de Bebidas", "desc": "70% menos plástico que las botellas rígidas"}
                },
                "overview": {
                    "title": "¿Qué es una bolsa con boquilla?",
                    "text": "Una bolsa con boquilla es una bolsa stand-up flexible con una boquilla de vertido y tapón integrados, diseñada para líquidos, semilíquidos y productos viscosos. Este formato combina la rentabilidad del empaque flexible con la funcionalidad de los contenedores rígidos.",
                    "advantagesTitle": "Ventajas Clave:",
                    "advantages": [
                        "Dispensación fácil con tapón resellable",
                        "Usa un 70% menos de plástico que las botellas rígidas",
                        "Se mantiene de pie para exhibición en tiendas",
                        "Ligero, reducción de costos de envío",
                        "Opciones de alta barrera disponibles"
                    ]
                },
                "applications": {
                    "title": "¿Qué productos funcionan mejor en bolsas con boquilla?",
                    "text": "Las bolsas con boquilla son ideales para productos vertibles en muchas industrias:",
                    "baby": {"title": "Alimento para Bebés", "items": ["Purés de frutas", "Mezclas de vegetales", "Batidos de yogur"]},
                    "sauce": {"title": "Salsas y Condimentos", "items": ["Ketchup y mayonesa", "Salsa picante", "Aderezos"]},
                    "beverage": {"title": "Bebidas", "items": ["Batidos", "Café cold brew", "Mezclas para cócteles"]},
                    "oil": {"title": "Aceites y Untables", "items": ["Aceites de cocina", "Miel y jarabes", "Ghee"]},
                    "pet": {"title": "Alimento para Mascotas", "items": ["Cremas para mascotas", "Caldos y jugos", "Suplementos líquidos"]},
                    "nonfood": {"title": "No Alimenticios", "items": ["Detergente para ropa", "Jabón líquido para manos", "Refill de limpieza"]}
                },
                "spoutOptions": {
                    "title": "¿Qué opciones de boquillas y tapones están disponibles?",
                    "sizes": {
                        "title": "Tamaños de Boquilla",
                        "items": [
                            "8.6mm – Estándar para líquidos ligeros",
                            "10mm – Líquidos más espesos, purés",
                            "15mm – Productos viscosos",
                            "22mm – Alta viscosidad, pastas"
                        ]
                    },
                    "caps": {
                        "title": "Características de Tapones",
                        "items": [
                            "Tapón de rosca estándar",
                            "Tapón dispensador flip-top",
                            "Resistente a niños (alimento para bebés)",
                            "Bandas de evidencia de manipulación"
                        ]
                    },
                    "galleryTitle": "Opciones de Bolsas con Boquilla",
                    "gallery": ["Tapón de Boquilla", "Bolsa con Boquilla", "Alta Barrera", "Acabado Brillante"]
                },
                "ecoMaterials": {
                    "title": "¿Qué materiales ecológicos funcionan para empaques de líquidos?",
                    "text": "Las bolsas con boquilla se pueden producir con materiales sostenibles que reducen el impacto ambiental sin comprometer el rendimiento de la barrera de líquidos.",
                    "kraft": {
                        "title": "🌾 ¿Qué es el \"Aspecto Kraft\" (Kraft-Look)?",
                        "p1": "El aspecto Kraft es un patrón de papel kraft impreso digitalmente con revestimiento mate aplicado a la superficie de la bolsa. Le brinda la apariencia natural y premium y la sensación táctil del papel kraft, al tiempo que es 100% impermeable, esencial para productos líquidos.",
                        "p2": "El papel kraft real absorbería la humedad, pero nuestro acabado de aspecto kraft ofrece la estética sin comprometer el rendimiento de la barrera para líquidos."
                    },
                    "eco": {
                        "title": "ℹ️ Importante: Entendiendo los materiales \"Eco\"",
                        "p1": "Las bolsas Bio-PE y PCR NO son biodegradables ni compostables. Son plástico tradicional al final de su vida útil. Sin embargo, son ecológicas al INICIO de su ciclo de vida:",
                        "bio": {
                            "title": "Bio-PE (30-50% de origen biológico)",
                            "items": [
                                "Hecho de polietileno de caña de azúcar",
                                "Fuente renovable y sostenible",
                                "Reduce la dependencia de combustibles fósiles",
                                "Totalmente reciclable en flujos de PE"
                            ]
                        },
                        "pcr": {
                            "title": "PCR (30% de contenido reciclado)",
                            "items": [
                                "Contiene plástico reciclado posconsumo",
                                "Reduce la demanda de plástico virgen",
                                "Certificación GRS disponible",
                                "Totalmente reciclable en flujos de PE"
                            ]
                        },
                        "p2": "¿Necesita compostable real? Vea nuestras opciones compostables (nota: las bolsas con boquilla compostables tienen disponibilidad limitada)"
                    }
                },
                "specifications": {
                    "title": "Especificaciones Técnicas",
                    "items": [
                        "Material: PA/PE (Nylon/Polietileno) multicapa",
                        "Espesor: 70-150 micras",
                        "OTR: <1.0 cc/m²/24hr (transmisión de oxígeno)",
                        "MVTR: <2.0 g/m²/24hr (transmisión de humedad)",
                        "Resistencia del sello: >25 N/15mm",
                        "Resistencia a la perforación: Alta (para productos con bordes)"
                    ]
                },
                "marketData": {
                    "title": "Datos de Mercado e Inteligencia",
                    "metrics": [
                        {"val": "$4.1B", "label": "mercado global de bolsas con boquilla", "desc": "Valor de 2024"},
                        {"val": "7.4%", "label": "CAGR", "desc": "2024-2030"},
                        {"val": "Alimentos y beb", "label": "mayor participación", "desc": "Más del 60% del volumen"},
                        {"val": "Alta barrera", "label": "crecimiento de películas", "desc": "Sector de más rápido crecimiento"}
                    ],
                    "storyTitle": "Historia de Éxito del Cliente",
                    "storyText": "\"Después de cambiar a bolsas con boquilla para nuestra línea de alimentos para bebés, nuestro costo de material de empaque cayó en un 45% y la huella de carbono de transporte disminuyó en un 62%.\"",
                    "storyAuthor": "— Marca de alimento para bebés, más de 500k unidades al mes"
                },
                "materialComparison": {
                    "title": "Comparación de Materiales"
                }
            },
            "faqs": [
                {
                    "question": "¿Se pueden usar las bolsas con boquilla para llenado en caliente?",
                    "answer": "Sí, ofrecemos materiales especiales (como PET/PA/R-CPP resistente al calor) que soportan el llenado en caliente hasta 85-90°C. Esto es esencial para pasteurizar purés de frutas y salsas llenadas en caliente."
                },
                {
                    "question": "¿Cuál es el pedido mínimo para bolsas con boquilla personalizadas?",
                    "answer": "Nuestra cantidad mínima de pedido para bolsas con boquilla impresas personalizadas es de 1,000 unidades. Para bolsas sin impresión, podemos ofrecer 500 unidades, dando a las nuevas empresas acceso a empaques de líquidos profesionales."
                },
                {
                    "question": "¿Son reciclables las bolsas con boquilla?",
                    "answer": "Sí, nuestras opciones Mono-PE y PCR son reciclables en flujos de plástico PE estándar (Clase 4). Las películas laminadas personalizadas de alta barrera (como PET/AL/PE) pueden ser más difíciles de reciclar localmente."
                },
                {
                    "question": "¿Cómo se llenan las bolsas con boquilla?",
                    "answer": "Las bolsas con boquilla se pueden llenar de dos maneras: ya sea a través de la parte superior abierta de la bolsa antes del sellado final, o directamente a través de la boquilla usando una llenadora de boquilla líquida, y luego tapando."
                }
            ],
            "tables": [
                {
                    "title": "Matriz de Tamaños de Bolsas con Boquilla",
                    "headers": ["Volumen", "Dimensiones (A x A + F)", "Diámetro de Boquilla", "Uso Común"],
                    "rows": [
                        ["100ml", "85 × 140 + 50mm", "8.6mm / 10mm", "Alimento para bebés, purés, geles de energía"],
                        ["255ml", "110 × 170 + 60mm", "10mm", "Bolsas de jugo, mezclas para cócteles"],
                        ["500ml", "130 × 200 + 70mm", "10mm / 15mm", "Bolsas de recarga (jabón), salsas"],
                        ["1L", "160 × 255 + 80mm", "15mm / 22mm", "Aceites de cocina, recarga de detergente"],
                        ["2L", "200 × 300 + 100mm", "22mm", "Condimentos a granel, productos químicos líquidos"]
                    ]
                }
            ]
        },
        "flatBottomBags": {
            "title": "Bolsas de Fondo Plano | Empaque de Bolsa Box Pouch",
            "heroTitle": "La apariencia premium de caja, sin la caja",
            "heroSubtitle": "Cinco lados de área de marca. Se sostiene como un campeón. El favorito para café de especialidad y productos premium.",
            "introSummary": "Las bolsas de fondo plano parecen caras sin el precio costoso. Base rectangular estable, 5 paneles impresos y presencia importante en el estante. Perfecto para café, alimento para mascotas, cualquier cosa premium.",
            "cta": {
                "title": "Eleve su Empaque",
                "description": "Vea por qué las marcas premium eligen bolsas de fondo plano.",
                "button": "Obtener Muestras Gratis"
            },
            "sections": {
                "scenarioTrigger": {
                    "title": "¿Es esta página para usted?",
                    "text": "Si es un tostador de café de especialidad, una marca de alimento premium para mascotas o un productor de alimentos artesanales que busca un empaque que se destaque en los estantes con la máxima área de marca, las bolsas de fondo plano ofrecen una presencia premium.",
                    "coffee": {"title": "Tostadores de Café", "desc": "Imagen en 5 paneles + válvula desgasificadora"},
                    "petFood": {"title": "Alimento para Mascotas", "desc": "Base estable para productos pesados"},
                    "premium": {"title": "Productos Premium", "desc": "Apariencia de caja para empaques dignos de regalo"}
                },
                "overview": {
                    "title": "¿Qué es una bolsa de fondo plano?",
                    "text": "Una bolsa de fondo plano (también llamada bolsa de fondo de caja o bolsa de bloque inferior) cuenta con una base rectangular que le permite mantenerse de pie con la máxima estabilidad. Este formato premium ofrece una presencia en el estante y una capacidad superiores en comparación con las bolsas stand-up estándar.",
                    "benefitsTitle": "Beneficios Clave:",
                    "benefits": [
                        "Construcción de 5 paneles para una superficie máxima de marca",
                        "Presencia estable tipo caja en el estante",
                        "Mayor capacidad que las bolsas estándar",
                        "Apariencia premium para productos de especialidad",
                        "Disponible en materiales compostables y reciclables"
                    ]
                },
                "construction": {
                    "title": "¿Cómo se construyen las bolsas de fondo plano?",
                    "text": "Las bolsas de fondo plano se construyen con múltiples paneles que se pliegan para crear una base rectangular:",
                    "panel5": {
                        "title": "Diseño de 5 Paneles",
                        "items": [
                            "Panel frontal – Área de marca principal",
                            "Panel posterior – Ingredientes, instrucciones",
                            "2 Fuelles laterales – Espacio adicional para la marca",
                            "Panel inferior – Base estable, puede incluir impresión"
                        ]
                    },
                    "closure": {
                        "title": "Opciones de Cierre",
                        "items": [
                            "Cremallera resellable (presione para cerrar o deslizador)",
                            "Cierre tin-tie (tira de hojalata)",
                            "Válvula desgasificadora (para café)",
                            "Muesca de desgarro para abrir fácilmente"
                        ]
                    }
                },
                "applications": {
                    "title": "¿Qué productos funcionan mejor en bolsas de fondo plano?",
                    "text": "Las bolsas de fondo plano son ideales para productos premium que se benefician de una presencia mejorada en el estante:",
                    "items": [
                        "Café de especialidad", "Té de especialidad", "Alimentos y premios para mascotas", "Proteína en polvo",
                        "Granola y muesli", "Frutas secas", "Nueces premium", "Arroz y granos",
                        "Snacks orgánicos", "Productos artesanales", "Superalimentos", "Empaque de regalo"
                    ]
                },
                "materials": {
                    "title": "¿Qué materiales están disponibles para las bolsas de fondo plano?",
                    "types": {
                        "compostable": {"title": "Compostable", "desc": "Papel kraft + PLA. Certificación EN 13432 para compostaje industrial."},
                        "recyclable": {"title": "Reciclable", "desc": "Estructuras a base de Mono-PE o papel para reciclaje en la calle."},
                        "barrier": {"title": "Alta Barrera", "desc": "Metalizado o aluminio para máxima protección de frescura."}
                    },
                    "galleryTitle": "Muestras de Material de Bolsa de Fondo Plano",
                    "gallery": ["Estructura de Fondo Plano", "Barrera de Aluminio", "Papel Kraft", "Cierre Tin-Tie"]
                },
                "aiSearch": {
                    "title": "Cómo encontrar el mejor proveedor de bolsas de fondo plano",
                    "prompt": "💡 Si está utilizando la búsqueda de IA (Gemini, ChatGPT), intente preguntar:",
                    "items": [
                        "\"¿Mejor proveedor de bolsas de fondo plano para café de especialidad?\"",
                        "\"Bolsa de fondo plano vs bolsa stand-up: ¿cuál es mejor para el café?\"",
                        "\"¿Bolsas personalizadas de fondo de caja con válvula de bajo MOQ?\"",
                        "\"¿Bolsas de café compostables de fondo plano con impresión de 5 paneles?\""
                    ]
                },
                "specifications": {
                    "title": "Especificaciones Técnicas",
                    "items": [
                        "Material: PET/AL/PE, Papel/AL/PE, PLA/Papel/PLA",
                        "Espesor: 100-160 micras",
                        "Válvula desgasificadora: Válvula unidireccional opcional",
                        "Fuelle: Fuelles laterales (imprimibles), fondo plano",
                        "MOQ: 500 digital, 5000 rotograbado",
                        "Certificado FSC: Disponible"
                    ]
                },
                "marketData": {
                    "title": "Datos de Mercado e Inteligencia",
                    "metrics": [
                        {"val": "$3.5B", "label": "mercado global de bolsas de fondo plano", "desc": "Valor de 2024"},
                        {"val": "6.2%", "label": "CAGR", "desc": "2024-2030"},
                        {"val": "Café y té", "label": "mayor cuota", "desc": "Lidera el sector de fondo plano"},
                        {"val": "+30%", "label": "crecimiento de marca", "desc": "Reportado después de cambiar a bolsas de fondo plano"}
                    ],
                    "storyTitle": "Historia de Éxito del Cliente",
                    "storyText": "\"Después de la transición a las bolsas de fondo plano, nuestra línea de granola premium aseguró su lugar en 3 nuevas cadenas nacionales de tiendas minoristas debido a la presencia estable en el estante tipo caja y la marca de alta calidad.\"",
                    "storyAuthor": "— Marca de granola orgánica, más de 250k bolsas al mes"
                },
                "materialComparison": {
                    "title": "Comparación de Materiales",
                    "guideTitle": "Guía de Selección de Materiales",
                    "guideText": "Las bolsas de fondo plano son perfectas para café premium, nueces y alimentos para mascotas. Si el branding ecológico es clave, elija kraft compostable PLA; para una conservación máxima, elija capas de barrera de papel de aluminio."
                }
            },
            "faqs": [
                {
                    "question": "¿Cuál es la diferencia entre el fondo plano y las bolsas stand-up?",
                    "answer": "Una bolsa de fondo plano tiene una base rectangular, creando una forma similar a una caja con 5 paneles para impresión, ofreciendo una estabilidad extrema. Una bolsa de pie tiene un fuelle inferior doblado (ovalado o K-seal), formando una forma triangular cuando se llena. Las bolsas de fondo plano admiten más volumen y se ven más premium."
                },
                {
                    "question": "¿Admiten las bolsas de fondo plano válvulas desgasificadoras para café?",
                    "answer": "Sí, podemos instalar válvulas desgasificadoras unidireccionales de alta calidad (como Goglio o Wipf) en cualquier bolsa de fondo plano, lo que permite que escape el CO2 liberado por el tostado mientras se mantiene el aire afuera."
                },
                {
                    "question": "¿Cuál es el pedido mínimo para bolsas de caja de fondo plano personalizadas?",
                    "answer": "Nuestra cantidad mínima de pedido para bolsas de fondo plano impresas personalizadas es de 1,000 unidades para impresión digital, o 5,000 unidades para placas de huecograbado. Las bolsas sin impresión están disponibles desde 500 unidades."
                },
                {
                    "question": "¿Son reciclables las bolsas de fondo plano?",
                    "answer": "Sí, fabricamos bolsas de fondo plano en estructuras Mono-PE reciclables en la calle, así como en estructuras compostables ecológicas de Kraft/PLA."
                }
            ],
            "tables": [
                {
                    "title": "Matriz de Tamaños de Bolsas de Fondo Plano",
                    "headers": ["Capacidad", "Dimensiones (A x A x F)", "Uso Recomendado", "Válvula Desgasificadora"],
                    "rows": [
                        ["250g", "90 × 200 × 60mm", "Café de especialidad, té", "Opcional"],
                        ["500g", "120 × 260 × 80mm", "Granola, premios de mascotas, café en grano", "Opcional"],
                        ["1kg", "140 × 320 × 90mm", "Café a granel, proteínas en polvo", "Opcional"],
                        ["2kg", "180 × 400 × 110mm", "Alimento para mascotas, ingredientes secos", "No común"],
                        ["5kg", "240 × 500 × 120mm", "Alimento para mascotas a granel, alimento balanceado", "No común"]
                    ]
                }
            ]
        },
        "vacuumPouches": {
            "title": "Bolsas de Vacío | Bolsas de Alta Barrera Co-extruidas",
            "heroTitle": "Retenga la frescura, bloquee el oxígeno",
            "heroSubtitle": "Bolsas de empaque de vacío PA/PE de grado industrial. Extiende la vida útil de 3 a 5 veces. Alta resistencia a la perforación, opciones de sous vide y autoclave.",
            "introSummary": "Las bolsas de vacío extienden la vida útil del producto de 3 a 5 veces al eliminar el oxígeno antes del sellado. Nuestras bolsas de alta barrera protegen contra la oxidación, la humedad y la contaminación. Disponibles para máquinas de cámara y de vacío externas, incluidas las aplicaciones de sous vide y autoclave.",
            "cta": {
                "title": "Obtenga Bolsas de Vacío Personalizadas",
                "description": "Solicite una muestra gratis y un presupuesto para sus necesidades de empaque de vacío.",
                "button": "Solicitar Muestra Gratis"
            },
            "sections": {
                "overview": {
                    "title": "¿Qué es una bolsa de vacío?",
                    "text": "Una bolsa de vacío está diseñada para el empaque al vacío, donde se elimina el aire antes de sellar para extender la vida útil del producto. Estas bolsas de alta barrera protegen contra el oxígeno, la humedad y los contaminantes.",
                    "benefitsTitle": "Beneficios Clave:",
                    "benefits": [
                        "Vida útil extendida (3-5 veces más larga que la estándar)",
                        "Previene la oxidación y las quemaduras por congelación",
                        "Mantiene la frescura y calidad del producto",
                        "Reduce el desperdicio de alimentos",
                        "Compatible con cocción al vacío (sous vide)"
                    ]
                },
                "applications": {
                    "title": "Aplicaciones Comunes",
                    "meat": {"title": "Carne y Aves", "items": ["Cortes frescos", "Carnes curadas", "Carnes procesadas", "Productos de charcutería"]},
                    "seafood": {"title": "Pescados y Mariscos", "items": ["Pescado fresco", "Salmón ahumado", "Mariscos", "Pescado congelado"]},
                    "cheese": {"title": "Queso y Lácteos", "items": ["Queso en bloque", "Queso rebanado", "Quesos de especialidad", "Mantequilla"]},
                    "meals": {"title": "Platos Preparados", "items": ["Comidas sous vide", "Kits de comida", "Proteínas precocinadas", "Artículos marinados"]},
                    "coffee": {"title": "Café", "items": ["Granos tostados", "Café molido", "Orígenes únicos", "Mezclas de especialidad"]},
                    "nonfood": {"title": "No Alimenticios", "items": ["Electrónicos", "Dispositivos médicos", "Productos farmacéuticos", "Almacenamiento de archivos"]}
                },
                "types": {
                    "title": "Tipos de Bolsas de Vacío",
                    "chamber": {"title": "Bolsas de Vacío Lisas", "desc": "Superficie lisa para máquinas de vacío de cámara. Menor costo, funciona con líquidos."},
                    "external": {"title": "Bolsas de Vacío Gofradas", "desc": "Superficie gofrada/canalizada para selladoras externas. Más ampliamente compatible."},
                    "retort": {"title": "Bolsas de Vacío para Autoclave", "desc": "Resistente al calor para pasteurización/esterilización. Productos estables en estante."},
                    "sousvide": {"title": "Bolsas para Cocción al Vacío (Sous Vide)", "desc": "Bolsas aptas para cocinar a temperaturas de inmersión de hasta 100°C."}
                },
                "specifications": {
                    "title": "Especificaciones Técnicas",
                    "items": [
                        "Material: PA/PE (Nylon/Polietileno) multicapa",
                        "Espesor: 70-150 micras",
                        "OTR: <1.0 cc/m²/24hr (transmisión de oxígeno)",
                        "MVTR: <2.0 g/m²/24hr (transmisión de humedad)",
                        "Resistencia del sello: >25 N/15mm",
                        "Resistencia a la perforación: Alta (para productos con hueso)"
                    ]
                },
                "industryScenarios": {
                    "title": "Aplicaciones Industriales",
                    "meat": {"title": "Procesamiento de Carne", "desc": "Carne fresca, procesada, fiambres, carnes congeladas", "badge": "Participación: 40%"},
                    "seafood": {"title": "Pescados y Mariscos", "desc": "Pescado fresco, salmón ahumado, mariscos, pescado congelado", "badge": "30% de cuota de mercado"},
                    "dairy": {"title": "Productos Lácteos", "desc": "Queso en bloques, rebanado, mantequilla, queso crema", "badge": "30% de cuota de mercado"},
                    "storyTitle": "Historia de Éxito del Cliente",
                    "storyText": "\"Nuestra planta de procesamiento de carne vio cómo la vida útil se extendía de 5 a 21 días después de adoptar bolsas de vacío, lo que redujo el desperdicio de productos en un 80%.\"",
                    "storyAuthor": "— Marca de carne premium, más de 100k bolsas al mes"
                },
                "marketData": {
                    "title": "Datos de Mercado e Inteligencia",
                    "metrics": [
                        {"val": "$5.8B", "label": "empaque de vacío global", "desc": "Valor de 2024"},
                        {"val": "5.2%", "label": "CAGR", "desc": "2024-2030"},
                        {"val": "Carne y mariscos", "label": "sector más grande", "desc": "Más del 50% de participación de mercado"},
                        {"val": "70%", "label": "cuota co-extruida PA/PE", "desc": "Material estándar de la industria"}
                    ],
                    "storyTitle": "Historia de Verificación de Materiales",
                    "storyText": "\"Cambiar a bolsas de vacío coextruidas de nylon/PE redujo las tasas de perforación del 4% a menos del 0.1%, lo que ahorró miles en devoluciones minoristas.\"",
                    "storyAuthor": "— Procesador de mariscos, más de 500k bolsas al mes"
                },
                "materialComparison": {
                    "title": "Comparación de Materiales"
                }
            },
            "faqs": [
                {
                    "question": "¿Cuál es la diferencia entre bolsas de vacío lisas y gofradas?",
                    "answer": "Las bolsas de vacío lisas se utilizan en máquinas de vacío de cámara, donde la presión del aire se ecualiza dentro de la cámara. Las bolsas gofradas o texturizadas tienen pequeños canales que permiten que las selladoras de succión externa (como FoodSaver) extraigan el aire de la bolsa."
                },
                {
                    "question": "¿Se pueden hervir o calentar las bolsas de vacío?",
                    "answer": "Sí, fabricamos bolsas de vacío para sous vide de grado alimenticio PA/PE diseñadas para soportar la ebullición y la cocción por inmersión hasta 100°C. Para la esterilización en autoclave (retort), utilizamos estructuras especiales de PA/PP clasificadas hasta 121°C."
                },
                {
                    "question": "¿Qué espesor de bolsas de vacío necesito?",
                    "answer": "El estándar de 70 a 90 micras es para alimentos blandos, quesos y carnes deshuesadas. Para carnes con hueso, cecina o artículos duros, recomendamos de 120 a 150 micras para evitar perforaciones."
                },
                {
                    "question": "¿Cuál es su pedido mínimo para bolsas de vacío impresas personalizadas?",
                    "answer": "Nuestra cantidad mínima de pedido para bolsas de vacío impresas personalizadas es de 1,000 unidades. Las bolsas de vacío lisas y sin impresión se mantienen en stock y se pueden pedir desde 500 unidades."
                }
            ],
            "tables": [
                {
                    "title": "Matriz de Tamaños de Bolsas de Vacío",
                    "headers": ["Tamaño", "Dimensiones (A x A)", "Espesor", "Uso Común"],
                    "rows": [
                        ["Bolsa Pequeña", "150 × 200mm", "80 micras", "Queso de una sola porción, carnes frías"],
                        ["Bolsa Mediana", "200 × 300mm", "80/90 micras", "Filetes, filetes de pescado, queso precortado"],
                        ["Bolsa Grande", "250 × 350mm", "100 micras", "Pollo entero, porciones grandes de pescado"],
                        ["Bolsa con Hueso", "200 × 300mm", "120/150 micras", "Costillas, chuletas de cerdo con hueso, alimentos duros"],
                        ["Bolsa a Granel", "300 × 450mm", "120 micras", "Porciones mayoristas de servicio de alimentos"]
                    ]
                }
            ]
        },
        "customBoxes": {
            "title": "Cajas Personalizadas | Cajas Rígidas Premium | Achieve Pack",
            "heroTitle": "Cajas Impresas Personalizadas",
            "heroSubtitle": "Empaque rígido premium para chocolates, té, café y alimentos artesanales",
            "introSummary": "Achieve Pack ofrece cajas rígidas impresas personalizadas de primera calidad con materiales certificados por el FSC, estampado en pan de oro y relieve. Perfecto para marcas de chocolate, té, café y alimentos artesanales que buscan una presentación de lujo. Cantidad mínima de pedido 200 unidades con flete marítimo incluido. Producción de 30 días + envío de 40 a 60 días.",
            "cta": {
                "title": "¿Listo para pedir cajas personalizadas?",
                "description": "Cree un empaque premium para sus productos artesanales con nuestras cajas impresas personalizadas. Cantidad mínima de pedido 200 unidades.",
                "button": "Comprar Cajas Personalizadas"
            },
            "sections": {
                "scenarioTrigger": {
                    "title": "¿Es esta página para usted?",
                    "text": "Si necesita empaques rígidos premium para productos artesanales (chocolate, té, café o regalos de lujo), está en el lugar correcto.",
                    "chocolate": {"title": "Chocolatería y Confitería", "desc": "Presentación premium con estampado en oro y relieve"},
                    "coffee": {"title": "Marcas de Café y Té", "desc": "Cajas de envío rígidas para mezclas premium"},
                    "artisan": {"title": "Productores de Alimentos", "desc": "Empaque sostenible certificado FSC"}
                },
                "overview": {
                    "title": "¿Qué cajas personalizadas ofrecemos?",
                    "text": "Achieve Pack ofrece cajas rígidas impresas personalizadas de alta calidad diseñadas para productos alimenticios artesanales, café de especialidad, regalos de lujo y venta minorista de alta gama. Nuestras cajas cuentan con materiales certificados FSC, laminación mate y acabados premium opcionales que incluyen estampado en caliente de oro y relieve.",
                    "mailer": {
                        "title": "Cajas de Envío Corrugadas",
                        "desc": "Perfectas para café, té y alimentos artesanales que requieren una protección de envío resistente.",
                        "sizes": ["✓ Tamaño de 500g: 130 × 85 × 35mm", "✓ Tamaño de 1kg: 270 × 85 × 35mm", "✓ Impresión personalizada CMYK", "✓ Estándar de acabado mate", "✓ Estampado en oro disponible", "✓ Papel certificado FSC"]
                    },
                    "tuck": {
                        "title": "Cajas de Cartón Plegables",
                        "desc": "Cajas plegables elegantes para tabletas de chocolate, sobres de té y confitería premium.",
                        "sizes": ["✓ Tamaño de 100g: 81 × 162 × 15mm", "✓ Cartulina blanca de 250g", "✓ Estampado de oro en caliente", "✓ Detalles grabados en relieve", "✓ Acabado mate", "✓ Certificado FSC"]
                    }
                },
                "features": {
                    "title": "Características y Acabados Premium",
                    "f1": {"title": "✨ Estampado de Oro en Caliente", "desc": "Acentos de oro metálico estampados en caliente para una marca de lujo"},
                    "f2": {"title": "🎨 Detalles Grabados en Relieve", "desc": "Textura elevada para una experiencia táctil premium"},
                    "f3": {"title": "📦 Laminación Mate", "desc": "Sofisticado estándar de acabado mate en todas las cajas"},
                    "f4": {"title": "🌱 Certificado FSC", "desc": "Materiales de papel reciclado de origen sostenible"},
                    "f5": {"title": "🖨️ Impresión CMYK", "desc": "Impresión personalizada a todo color para una marca vibrante"},
                    "f6": {"title": "💪 Construcción Rígida", "desc": "Cartón gris de 2.0 mm para una integridad estructural superior"},
                    "galleryTitle": "Tipos y Estilos de Cajas",
                    "gallery": ["Caja de Envío Corrugada", "Caja Plegable de Cartón", "Acabado de Estampado en Oro", "Textura en Relieve"]
                },
                "applications": {
                    "title": "Perfecto para estos productos",
                    "chocolate": {"title": "Chocolate", "desc": "Tabletas, trufas, bombones"},
                    "tea": {"title": "Té", "desc": "Té suelto, sobres, juegos de regalo"},
                    "coffee": {"title": "Café", "desc": "Granos de especialidad, cajas de regalo"},
                    "cosmetics": {"title": "Cosméticos", "desc": "Serums para la piel, lociones de lujo"},
                    "gifts": {"title": "Regalos de Lujo", "desc": "Cestas corporativas, sets de vacaciones"},
                    "jewelry": {"title": "Joyería y Productos", "desc": "Relojes de alta gama, artículos artesanales"}
                },
                "specifications": {
                    "title": "Especificaciones Técnicas",
                    "items": [
                        "Materiales: Cartón gris de 2.0 mm, cartón blanco, microcorrugado E-flute",
                        "Impresión: Offset CMYK, coincidencia de Pantone",
                        "Acabado: Laminación mate/brillante, revestimiento UV",
                        "Certificado FSC: Papeles sostenibles certificados",
                        "MOQ: 200 piezas",
                        "Producción: 30 días + 40-60 días de envío (flete marítimo incluido)"
                    ]
                },
                "marketData": {
                    "title": "Datos de Mercado e Inteligencia",
                    "metrics": [
                        {"val": "$15.6B", "label": "mercado global de cajas rígidas", "desc": "Valor de 2024"},
                        {"val": "4.8%", "label": "CAGR", "desc": "2024-2030"},
                        {"val": "Alimentos art", "label": "crecimiento rápido", "desc": "Sector de empaque de regalo premium"},
                        {"val": "75%", "label": "consumidores prefieren FSC", "desc": "Muestra la demanda de papel certificado"}
                    ],
                    "storyTitle": "Historia de Éxito del Cliente",
                    "storyText": "\"Después de lanzar nuestro set de regalo de chocolate artesanal en cajas rígidas personalizadas con estampado de oro, las ventas aumentaron en un 150% en el primer trimestre, estableciendo nuestra marca en el segmento de regalos premium.\"",
                    "storyAuthor": "— Marca de confitería de lujo, Reino Unido"
                },
                "materialComparison": {
                    "title": "Comparación de Materiales"
                }
            },
            "faqs": [
                {
                    "question": "¿Cuál es la diferencia entre las cajas de envío corrugadas y las cajas rígidas?",
                    "answer": "Las cajas de envío corrugadas están hechas de cartón corrugado E-flute, que es liviano pero altamente resistente a los impactos para el envío. Las cajas rígidas (cartón gris) son estructuras de cartón grueso no colapsables que se utilizan para la presentación minorista de lujo."
                },
                {
                    "question": "¿Puedo agregar formas personalizadas dentro de la caja?",
                    "answer": "Sí, diseñamos bandejas de cartón, espuma EVA o pulpa personalizadas para adaptarse a las formas específicas de su producto (como latas de té o compartimentos de chocolate) y mantenerlos seguros."
                },
                {
                    "question": "¿Cuál es el pedido mínimo para cajas personalizadas?",
                    "answer": "Nuestra cantidad mínima de pedido para cajas rígidas y de envío corrugadas impresas personalizadas es de 200 unidades. Este bajo punto de entrada hace que el empaque de alta gama sea accesible para las nuevas empresas de lujo."
                },
                {
                    "question": "¿Cuánto tiempo tarda el envío de las cajas rígidas?",
                    "answer": "Debido a que las cajas rígidas son voluminosas y se envían completamente ensambladas, incluimos el flete marítimo en el costo. La producción tarda 30 días y el tránsito marítimo demora de 40 a 60 días según su destino."
                }
            ],
            "tables": [
                {
                    "title": "Comparación de Tipos de Cajas Personalizadas",
                    "headers": ["Tipo de Caja", "Resistencia", "Apariencia Premium", "Costo", "Mejor Aplicación"],
                    "rows": [
                        ["Cartón Gris Rígido (2.0mm)", "Sobresaliente", "Lujo Máximo", "Alto", "Cajas de regalo premium, chocolates de lujo"],
                        ["Kraft Corrugado (E-flute)", "Alto", "Premium-Rústico", "Medio", "Cajas de envío e-commerce, sets de café"],
                        ["Cartón Plegable Blanco", "Medio", "Limpio-Modern", "Bajo", "Cajas plegables, barras de chocolate individuales, bolsitas de té"],
                        ["Cartón Reciclado", "Medio", "Eco-Natural", "Bajo", "Cajas retail ligeras, marcas ecológicas"]
                    ]
                }
            ]
        }
    },
    "fr": {
        "flatPouches": {
            "title": "Sachets Plats | Sachets Trois Soudures | Emballage Souple",
            "heroTitle": "Simple, mais ne le sous-estimez pas",
            "heroSubtitle": "L'emballage souple d'origine. Sachets scellés sur trois côtés pour les échantillons, les portions individuelles et les produits qui n'ont pas besoin de tenir debout.",
            "introSummary": "Les sachets plats sont l'option souple la plus rentable. Parfait pour les paquets d'échantillons, les sachets et les produits légers. Faible gaspillage, coût inférieur, étonnamment polyvalent.",
            "cta": {
                "title": "Commencez Simple",
                "description": "Échantillons, sachets ou autre chose : dites-nous ce dont vous avez besoin.",
                "button": "Obtenir des Échantillons Gratuits"
            },
            "sections": {
                "scenarioTrigger": {
                    "title": "Cette page est-elle pour vous ?",
                    "text": "Si vous avez besoin d'emballages économiques pour portions individuelles, d'échantillons ou de sachets, vous êtes au bon endroit.",
                    "sampleProducers": {"title": "Producteurs d'Échantillons", "desc": "Échantillons de produits, formats d'essai"},
                    "foodService": {"title": "Restauration", "desc": "Sachets de sauce, paquets de sucre"},
                    "teaSpice": {"title": "Marques de Thé et d'Épices", "desc": "Portions individuelles"}
                },
                "overview": {
                    "title": "Qu'est-ce qu'un sachet 3 soudures ?",
                    "text": "Un sachet scellé sur 3 côtés (également appelé sachet plat) est scellé sur trois côtés avec une ouverture supérieure pour le remplissage. Il s'agit du format d'emballage souple le plus économique, idéal pour les échantillons, les produits à portion individuelle et les articles légers.",
                    "advantagesTitle": "Avantages Clés :",
                    "advantages": [
                        "Format de sachet le plus rentable",
                        "Utilisation efficace du matériau (moins de gaspillage)",
                        "Expédition et stockage compacts",
                        "Rapide à remplir et à sceller",
                        "Accès facile à déchirer pour ouvrir"
                    ]
                },
                "types": {
                    "title": "Scellage 3 Côtés vs 4 Côtés",
                    "seal3": {
                        "title": "Scellage 3 Côtés",
                        "desc": "Fabriqué à partir d'un film plié, scellé sur 3 côtés :",
                        "items": [
                            "Un bord plié (pas de joint)",
                            "Deux joints latéraux",
                            "Joint inférieur ou supérieur après remplissage",
                            "L'option la plus économique"
                        ]
                    },
                    "seal4": {
                        "title": "Scellage 4 Côtés",
                        "desc": "Fabriqué à partir de deux feuilles distinctes :",
                        "items": [
                            "Scellé sur les 4 bords",
                            "Surface légèrement plus grande",
                            "Matériaux différents possibles pour le devant et l'arrière",
                            "Coût légèrement plus élevé"
                        ]
                    }
                },
                "applications": {
                    "title": "Applications Courantes",
                    "items": [
                        "Échantillons de produits", "Portions individuelles", "Sachets d'épices", "Paquets de sucre",
                        "Sachets de sauce", "Sachets de thé (extérieur)", "Sachets de graines", "Articles promotionnels",
                        "Sachets pharmaceutiques", "Échantillons de cosmétiques", "Produits d'accueil pour hôtels", "Lingettes humides"
                    ]
                },
                "features": {
                    "title": "Caractéristiques Disponibles",
                    "opening": {
                        "title": "Caractéristiques d'Ouverture",
                        "items": ["Encoche de déchirure (en V ou marquée au laser)", "Joint à ouverture facile", "Ligne perforée", "Formes découpées"]
                    },
                    "additional": {
                        "title": "Options Supplémentaires",
                        "items": ["Trou de suspension", "Fenêtre transparente", "Finition mate/brillante", "Marquage à chaud (foil)"]
                    },
                    "galleryTitle": "Options de Sachets Plats 3 Soudures",
                    "gallery": ["Joint 3 Côtés", "Film Transparent", "Papier Kraft", "Compostable"]
                },
                "riskHedge": {
                    "title": "Toujours pas sûr ? Nous avons des réponses",
                    "items": [
                        {"q": "Les sachets sont-ils écologiques ?", "a": "Oui, options PLA et papier/PLA disponibles"},
                        {"q": "Quelle est la commande minimale ?", "a": "500 neutres, 1 000 imprimés personnalisés"},
                        {"q": "Peuvent-ils avoir des fermetures éclair (zipper) ?", "a": "Oui, ou considérez les sachets stand-up pour le refermable"},
                        {"q": "Puis-je obtenir des échantillons ?", "a": "Échantillons de sachets gratuits pour évaluation"}
                    ]
                },
                "decisionCta": {
                    "title": "Choisissez comment vous souhaitez vous connecter",
                    "call": {"title": "Réserver un appel", "desc": "Consultation gratuite de 30 min", "btn": "Planifier Maintenant"},
                    "email": {"title": "Devis par E-mail", "desc": "Obtenez une réponse sous 24h", "btn": "Envoyer un E-mail"},
                    "samples": {"title": "Échantillons Gratuits", "desc": "Testez les sachets d'abord", "btn": "Demander des Échantillons"}
                },
                "industryScenarios": {
                    "title": "Applications par Industrie",
                    "food": {"title": "Aliments et Condiments", "desc": "Sachets de sauce, sucre, assaisonnements, épices", "badge": "Part de marché de 45%"},
                    "cosmetics": {"title": "Échantillons Cosmétiques", "desc": "Sérums de masques faciaux, lotions, soins de la peau", "badge": "Part de marché de 30%"},
                    "pharma": {"title": "Pharmaceutique et Santé", "desc": "Portions pharmaceutiques, suppléments, emballages nutritionnels", "badge": "Part de marché de 25%"},
                    "storyTitle": "Témoignage Client",
                    "storyText": "\"Après être passés aux sachets 3 soudures, notre marque de condiments a réduit les coûts unitaires de 35% tout en répondant parfaitement aux besoins de portion individuelle de la restauration, élargissant considérablement notre couverture.\"",
                    "storyAuthor": "— Fabricant de condiments, plus de 2 millions d'unités par mois"
                },
                "marketData": {
                    "title": "Données du Marché et Intelligence",
                    "metrics": [
                        {"val": "$8.2B", "label": "marché mondial des sachets", "desc": "Valeur en 2024"},
                        {"val": "6.8%", "label": "TCAC", "desc": "2024-2030"},
                        {"val": "35%", "label": "part restauration", "desc": "Plus grand secteur d'utilisation finale"},
                        {"val": "150B", "label": "consommation Asie-Pacifique", "desc": "Plus grand marché mondial"}
                    ],
                    "trendTitle": "Aperçu des tendances du marché",
                    "trends": [
                        "Marché des portions individuelles : La demande de commodité stimule la croissance continue des sachets",
                        "Matériaux compostables : La demande de PLA et de matériaux écologiques augmente de 25% par an"
                    ]
                },
                "materialComparison": {
                    "title": "Comparatif des Matériaux",
                    "guideTitle": "Guide de Sélection des Matériaux",
                    "guideText": "Les sachets plats 3 soudures sont idéaux pour les scénarios à usage unique sensibles aux coûts. Pour l'emballage de liquides, choisissez le stratifié d'aluminium ; pour les exigences écologiques, choisissez les matériaux compostables PLA."
                }
            },
            "faqs": [
                {
                    "question": "Quelle est la différence entre le scellage 3 côtés et 4 côtés ?",
                    "answer": "Les sachets 3 soudures sont fabriqués à partir d'un film plié (scellé sur 3 côtés), tandis que les sachets 4 soudures utilisent deux feuilles distinctes (scellées sur les 4 côtés). Le scellage 3 côtés est plus économique, tandis que le scellage 4 côtés offre une surface légèrement plus grande et permet différents matériaux pour le devant et l'arrière."
                },
                {
                    "question": "Quelle est la commande minimale pour les sachets ?",
                    "answer": "Notre MOQ pour les sachets imprimés personnalisés est de 1 000 unités. Pour les sachets neutres, nous pouvons proposer 500 unités. Le faible coût unitaire rend les sachets économiques même en petites quantités."
                },
                {
                    "question": "Les sachets plats peuvent-ils avoir une fermeture éclair refermable ?",
                    "answer": "Les sachets plats traditionnels sont à usage unique, mais nous pouvons ajouter un zip pour créer un sachet plat refermable. Cependant, pour les applications refermables, les sachets stand-up offrent généralement une meilleure fonctionnalité et une meilleure valeur."
                },
                {
                    "question": "Les sachets plats sont-ils disponibles en matériaux compostables ?",
                    "answer": "Oui, nous proposons des sachets plats compostables fabriqués à partir de PLA, de papier/PLA ou de films à base de cellulose. Ils sont certifiés EN 13432 pour le compostage industriel."
                }
            ],
            "tables": [
                {
                    "title": "Guide des Tailles de Sachets Plats",
                    "headers": ["Taille", "Dimensions", "Capacité Typique", "Usage Commun"],
                    "rows": [
                        ["Petit sachet", "50 × 70mm", "5-10g / 5-10ml", "Paquets de sucre, échantillons"],
                        ["Sachet moyen", "70 × 100mm", "10-30g", "Épices, sachets de sauce"],
                        ["Grand sachet", "100 × 150mm", "30-100g", "Extérieur de thé, paquets de graines"],
                        ["Sachet échantillon", "80 × 120mm", "20-50g", "Échantillons de produits"],
                        ["Promotionnel", "120 × 180mm", "50-100g", "Articles promotionnels"]
                    ]
                }
            ]
        },
        "standUpPouches": {
            "title": "Sachets Stand-Up | Solutions d'Emballage Souple",
            "heroTitle": "Le sachet qui tient debout tout seul",
            "heroSubtitle": "Excellente présence en rayon, options de personnalisation infinies et beaucoup moins de plastique que les bouteilles. Zip, valve, bouchon ou fermeture : faites votre choix.",
            "introSummary": "Les sachets stand-up vous offrent l'impact visuel des emballages rigides sans le gaspillage. Imprimés personnalisés, refermables, haute barrière, compostables ou recyclables. À partir de 500 pièces.",
            "cta": {
                "title": "Créons le Vôtre",
                "description": "Dites-nous ce que vous emballez et nous vous recommanderons la bonne configuration.",
                "button": "Obtenir des Échantillons Gratuits"
            },
            "b2c": {
                "heroBadge": "Emballage Écologique Stand-Up",
                "heroTitleLine1": "SACHETS",
                "heroTitleLine2": "STAND-UP",
                "heroSubtitle": "PLA compostable certifié d'origine végétale et structures Mono-PE recyclables. Conservation exceptionnelle de la barrière, fermetures éclair durables et tailles personnalisées.",
                "btnCall": "Appel Gratuit",
                "btnWhatsapp": "Spécialiste WhatsApp",
                "badgeMoq": "MINIMUM DE COMMANDE : ¡500!",
                "bento": {
                    "title": "PERFORMANCE SOUPLE AVANCÉE",
                    "c1Title": "Compostable & Recyclable",
                    "c1Desc": "Choisissez des films 100% compostables à domicile/industriels ou des structures mono-matériau recyclables. Aidez vos clients à recycler facilement.",
                    "c2Title": "Barrières OTR/WVTR",
                    "c2Desc": "Barrières internes haute performance protégeant contre la transmission d'oxygène et d'humidité (<1.0 cc/m²/24h). Prolongent la durée de conservation du produit jusqu'à 12 mois.",
                    "c3Title": "Base de Soufflet Stable",
                    "c3Desc": "Options de fond ovale plié avec précision ou fond diagonal K-seal renforcé. Permet une parfaite stabilité en rayon.",
                    "c4Title": "Fermetures Sur Mesure",
                    "c4Desc": "Ajoutez des zips refermables, des bandes d'étain (tin-tie), des curseurs, des valves de dégazage de café ou des fenêtres personnalisées."
                },
                "showcase": {
                    "badge": "Présentation Visuelle",
                    "title": "PRODUCTIONS RÉELLES",
                    "desc": "Cliquez sur n'importe quel échantillon de production réelle pour inspecter notre clarté d'impression HD, nos joints de soufflet et nos finitions premium :",
                    "gallery": [
                        {"title": "Sachet Stand-Up Premium Imprimé", "desc": "Sachet stand-up imprimé personnalisé présentant une belle impression numérique avec un contraste élevé et des encres écologiques."},
                        {"title": "Utilisation de Style de Vie de Sachet Stand-Up", "desc": "Sachet stand-up durable présenté dans une scène moderne et organique de marque alimentaire B2B."},
                        {"title": "Base de Sachet K-Seal Haute Résistance", "desc": "Structure de fond K-seal diagonale conçue pour transporter des articles lourds (jusqu'à 5 kg) avec une extrême stabilité de base."},
                        {"title": "Sachet de Papier Kraft Compostable Zéro Déchet", "desc": "Sachet stand-up officiel en papier kraft naturel certifié FSC avec une protection élevée contre l'humidité et des zips refermables."}
                    ]
                },
                "specPricing": {
                    "title": "SPÉCIFICATIONS ET PRIX",
                    "moqVal": "500 unités",
                    "moqTitle": "Quantité minimale de commande basse",
                    "moqDesc": "Idéal pour le développement des startups, les séries saisonnières limitées et les tests de SKU",
                    "dielinesVal": "24 Heures",
                    "dielinesTitle": "gabarits de découpe gratuits",
                    "dielinesDesc": "Obtenez des dessins vectoriels précis ajustés à vos spécifications volumétriques exactes",
                    "samplesVal": "100% Gratuit",
                    "samplesTitle": "kit d'échantillons compostables",
                    "samplesDesc": "Recevez un kit contenant 10 sachets physiques pour tester les propriétés de barrière"
                },
                "table": {
                    "headers": ["Taille (L x H + S)", "Capacité Volumétrique", "Performance de Barrière", "Meilleure Application"],
                    "rows": [
                        ["70 x 110 + 40mm", "20g - 50g", "OTR & WVTR < 1.0", "Échantillons de portion individuelle, condiments, cosmétiques en poudre"],
                        ["100 x 150 + 60mm", "50g - 100g", "OTR & WVTR < 1.0", "Thé biologique, bonbons, friandises pour animaux de compagnie"],
                        ["120 x 200 + 80mm", "100g - 250g", "OTR & WVTR < 0.5", "Café de spécialité avec valve, granola, collations protéinées"],
                        ["150 x 230 + 90mm", "250g - 500g", "OTR & WVTR < 0.5", "Snacks en vrac, superaliments, ingrédients en poudre, suppléments"],
                        ["180 x 280 + 100mm", "500g - 1kg", "OTR & WVTR < 0.1", "Aliments pour animaux en gros, sels de bain retail, graines en vrac"]
                    ]
                },
                "faqs": [
                    {"question": "Les sachets stand-up sont-ils vraiment compostables ou recyclables ?", "answer": "Oui ! Nous proposons deux voies écologiques distinctes. Nos sachets compostables comportent des biopellicules certifiées BPI et TÜV (comme le PLA d'amidon végétal et la pâte de bois NatureFlex) qui se décomposent en toute sécurité en 90-180 jours dans des conditions organiques. Nos sachets recyclables utilisent des structures de mono-matériau PE ou PP qui sont entièrement compatibles avec le recyclage des plastiques souples."},
                    {"question": "Ces sachets conserveront-ils la fraîcheur de nos aliments secs ou de notre café ?", "answer": "Absolument. Nous appliquons des films haute barrière offrant un OTR et un WVTR inférieurs à 1.0 (certains complexes de cellulose métallisée descendent en dessous de 0.1). En combinaison avec nos valves de dégazage unidirectionnelles certifiées, votre produit est protégé contre l'oxydation et l'humidité pendant 12 mois maximum."},
                    {"question": "Quels formats de soufflet inférieur soutenez-vous ?", "answer": "Nous prenons en charge les soufflets inférieurs ronds standard pour les produits légers, les bases K-seal diagonales qui dirigent le poids du produit vers l'extérieur pour plus de stabilité de debout des produits lourds, et les soufflets inférieurs de type charrue (plow bottom)."},
                    {"question": "Proposez-vous des tailles personnalisées et des formes découpées ?", "answer": "Oui. Au-delà des tailles standard (de 20g à 5kg), nous concevons des gabarits de découpe sur mesure au millimètre près. Nous fabriquons également des formes personnalisées (comme des gourdes ou des bouteilles) avec des outils spéciaux pour donner à votre marque une présence unique en rayon."}
                ]
            },
            "sections": {
                "overview": {
                    "title": "Vente en gros et fourniture de sachets Stand-Up personnalisés",
                    "text": "Les sachets Stand-Up (SUP) personnalisés représentent la référence absolue en matière d'emballage commercial flexible. Fabriqués sur des lignes certifiées BRCGS, nos sachets offrent une visibilité maximale en rayon, des économies de poids de matériel et une protection de barrière robuste spécifiquement calibrée pour les marques en croissance.",
                    "kpisTitle": "Indicateurs de Performance Commerciale B2B Clés :",
                    "kpis": [
                        "Empreinte 75% plus légère – Réduit considérablement l'espace de stockage et les émissions liées au transport par rapport aux bocaux en verre ou boîtes en métal.",
                        "Espace de branding à 360° – Couverture complète de conception numérique imprimée avec des encres végétales certifiées à base de soja.",
                        "Intégration refermable – Fermetures zippées durables qui empêchent la dégradation du produit en rayon.",
                        "Compatibilité avec les lignes automatiques – Tolérance de largeur de bobine conçue pour permettre une intégration parfaite dans les lignes d'ensachage automatiques VFFS/HFFS."
                    ]
                },
                "specifications": {
                    "title": "Spécifications techniques et guide d'achat",
                    "text": "Les achats professionnels nécessitent une vérification stricte des données d'emballage. Voici comment nos indicateurs techniques se traduisent directement en avantages d'achat :"
                },
                "applications": {
                    "title": "Scénarios d'application B2B recommandés",
                    "text": "Nos sachets stand-up imprimés sont conçus pour répondre à des critères réglementaires et de barrière spécifiques dans le domaine commercial :",
                    "coffee": {"title": "☕ Torréfacteurs de Café de Spécialité", "desc": "Barrières OTR élevées combinées à des valves de dégazage unidirectionnelles pour évacuer les gaz et bloquer l'oxygène. Parfait pour conserver les grains.", "badge": "Fraîcheur du café torréfié pendant 12 mois"},
                    "organic": {"title": "🌱 Aliments et Snacks Biologiques", "desc": "Papier kraft compostable et biopellicules d'amidon PLA certifiés selon la norme européenne EN 13432. Répond aux attentes du marché écologique.", "badge": "Compostage domestique certifié TÜV"},
                    "petFood": {"title": "🐾 Aliments et Friandises pour Animaux", "desc": "Fonds K-seal renforcés haute résistance qui empêchent la migration des graisses et supportent des poids lourds (de 1 kg à 5 kg) sans éclater.", "badge": "Stabilité du soufflet diagonal K-Seal"},
                    "kSealTitle": "Stabilité des volumes lourds : Focus sur le K-Seal",
                    "kSealDesc": "Pour les aliments pour animaux, les suppléments à haute densité ou le café en grains, nous intégrons des bases K-seal personnalisées. Le scellage diagonal guide le poids vers les côtés, prévenant les ruptures.",
                    "kSealLink": "Découvrez comment le K-seal augmente la capacité volumétrique →"
                },
                "gallery": {
                    "title": "Productions réelles et vérification des matériaux",
                    "text": "Nous exploitons 4 lignes numériques haute vitesse prenant en charge plusieurs SKU. Découvrez nos productions réelles de sachets certifiés, compostables et recyclables :"
                }
            },
            "faqs": [
                {
                    "question": "1. Quelle est la quantité minimale de commande (MOQ) pour les sachets stand-up personnalisés ?",
                    "answer": "Nous soutenons les startups avec un MOQ d'impression numérique de seulement 500 unités par design. Pour les volumes plus importants, nous proposons l'impression par héliogravure à partir de 5 000 unités, offrant un grand rapport coût-efficacité."
                },
                {
                    "question": "2. Fournissez-vous des échantillons physiques de préproduction ?",
                    "answer": "Oui, nous envoyons un kit d'échantillons durable gratuit avec 10 sachets physiques pour tester les propriétés de barrière. Pour les commandes personnalisées, nous générons un bon à tirer (BAT) PDF en 24h et pouvons fabriquer des maquettes physiques."
                },
                {
                    "question": "3. Pouvez-vous fabriquer des sachets de debout selon des dessins CAD volumétriques personnalisés ?",
                    "answer": "Oui. Nos ingénieurs analysent la densité de votre produit et personnalisent les soufflets inférieurs et les dimensions au millimètre près. Nous fournissons un fichier PDF avec le gabarit personnalisé en 24 heures."
                },
                {
                    "question": "4. Quel est le délai de production et de transit commercial ?",
                    "answer": "La production numérique prend 7 à 10 jours ouvrés ; les commandes en héliogravure prennent 12 à 14 jours. L'expédition aérienne express vers les États-Unis ou l'Europe prend 5 à 7 jours ouvrés, et le fret maritime économique est disponible en 20 à 30 jours."
                },
                {
                    "question": "5. Quelles certifications sont disponibles pour vérifier la conformité écologique ?",
                    "answer": "Nos biopolymères ont des certificats officiels de BPI (Biodegradable Products Institute #10529618) et TÜV Austria (OK Compost HOME). Ils respectent les normes de compostabilité ASTM D6400 (États-Unis) et EN 13432 (Europe)."
                },
                {
                    "question": "6. Quels détails doivent être soumis pour recevoir un devis de vente en gros ?",
                    "answer": "Veuillez fournir la capacité volumétrique estimée (ou les dimensions exactes), la préférence de matériau (kraft compostable, recyclable mono-PE ou haute barrière), les exigences de zip ou de valve, le nombre de SKU et le design."
                }
            ],
            "tables": [
                {
                    "title": "Matrice de tailles volumétriques commerciales",
                    "headers": ["Dimensions (L x H + S)", "Poids Volumétrique", "Scénarios d'Application Recommandés"],
                    "rows": [
                        ["70 x 110 + 40mm", "20g - 50g", "Échantillons de portion individuelle, condiments, cosmétiques en poudre"],
                        ["100 x 150 + 60mm", "50g - 100g", "Thé biologique, bonbons, friandises pour animaux de compagnie"],
                        ["120 x 200 + 80mm", "100g - 250g", "Café de spécialité avec valve, granola, collations protéinées"],
                        ["150 x 230 + 90mm", "250g - 500g", "Snacks en vrac, superaliments, ingrédients en poudre, suppléments"],
                        ["180 x 280 + 100mm", "500g - 1kg", "Aliments pour animaux en gros, sels de bain retail, graines en vrac"]
                    ]
                }
            ]
        },
        "spoutPouches": {
            "title": "Sachets avec Bouchon | Solutions d'Emballage pour Liquides",
            "heroTitle": "Des bouteilles, mais en mieux",
            "heroSubtitle": "Bouchons verseurs pour liquides, purées, sauces, boissons. 70% de plastique en moins que les bouteilles. Refermables, pratiques et durables.",
            "introSummary": "Toute la fonctionnalité des bouteilles avec une fraction des déchets. Distribution facile, refermable, et vos clients peuvent presser jusqu'à la dernière goutte. Aliments pour bébés, sauces, boissons, recharges.",
            "cta": {
                "title": "Versez-vous dans la Durabilité",
                "description": "Découvrez nos options de bouchons et trouvez votre sachet.",
                "button": "Obtenir des Échantillons Gratuits"
            },
            "sections": {
                "scenarioTrigger": {
                    "title": "Cette page est-elle pour vous ?",
                    "text": "Si vous êtes une marque d'aliments pour bébés, un fabricant de sauces ou une entreprise de boissons à la recherche d'un emballage qui se verse comme une bouteille mais coûte moins cher et s'expédie plus léger, les sachets avec bouchon sont votre solution.",
                    "baby": {"title": "Marques d'Aliment pour Bébé", "desc": "Sûr, portable, distribution facile pour les bébés"},
                    "sauce": {"title": "Producteurs de Sauces et Condiments", "desc": "Adapté pour le remplissage à chaud, versement propre"},
                    "beverage": {"title": "Compagnies de Boissons", "desc": "70% de plastique en moins que les bouteilles rigides"}
                },
                "overview": {
                    "title": "Qu'est-ce qu'un sachet avec bouchon ?",
                    "text": "Un sachet avec bouchon est un sachet stand-up flexible avec un goulot verseur et un bouchon intégrés, conçu pour les liquides, les semi-liquides et les produits visqueux. Ce format associe la rentabilité de l'emballage souple à la fonctionnalité des contenants rigides.",
                    "advantagesTitle": "Avantages Clés :",
                    "advantages": [
                        "Distribution facile avec bouchon refermable",
                        "Utilise 70% de plastique en moins que les bouteilles rigides",
                        "Tient debout pour une présentation en rayon",
                        "Léger, réduction des frais d'expédition",
                        "Options haute barrière disponibles"
                    ]
                },
                "applications": {
                    "title": "Quels produits fonctionnent le mieux dans les sachets avec bouchon ?",
                    "text": "Les sachets avec bouchon sont idéaux pour les produits versables dans de nombreuses industries :",
                    "baby": {"title": "Aliment pour Bébés", "items": ["Purées de fruits", "Mélanges de légumes", "Smoothies au yaourt"]},
                    "sauce": {"title": "Sauces et Condiments", "items": ["Ketchup et mayonnaise", "Sauce piquante", "Assaisonnements"]},
                    "beverage": {"title": "Boissons", "items": ["Smoothies", "Café cold brew", "Mélanges pour cocktails"]},
                    "oil": {"title": "Huiles et Produits à tartiner", "items": ["Huiles de cuisson", "Miel et sirops", "Ghee"]},
                    "pet": {"title": "Aliments pour Animaux", "items": ["Crèmes pour animaux", "Bouillons et jus", "Suppléments liquides"]},
                    "nonfood": {"title": "Non Alimentaire", "items": ["Détergent à lessive", "Savon liquide pour les mains", "Recharges de nettoyage"]}
                },
                "spoutOptions": {
                    "title": "Quelles options de goulots et de bouchons sont disponibles ?",
                    "sizes": {
                        "title": "Tailles de Goulot",
                        "items": [
                            "8.6mm – Standard pour les liquides légers",
                            "10mm – Liquides plus épais, purées",
                            "15mm – Produits visqueux",
                            "22mm – Haute viscosité, pâtes"
                        ]
                    },
                    "caps": {
                        "title": "Caractéristiques des Bouchons",
                        "items": [
                            "Bouchon à vis standard",
                            "Bouchon distributeur flip-top",
                            "Sécurité enfants (aliment pour bébé)",
                            "Bandes d'inviolabilité"
                        ]
                    },
                    "galleryTitle": "Options de Sachets avec Bouchon",
                    "gallery": ["Bouchon de Goulot", "Sachet avec Bouchon", "Haute Barrière", "Finition Brillante"]
                },
                "ecoMaterials": {
                    "title": "Quels matériaux écologiques fonctionnent pour les emballages de liquides ?",
                    "text": "Les sachets avec bouchon peuvent être produits avec des matériaux durables qui réduisent l'impact environnemental sans compromettre les performances de barrière pour les liquides.",
                    "kraft": {
                        "title": "🌾 Qu'est-ce que l'\"Aspect Kraft\" (Kraft-Look) ?",
                        "p1": "L'aspect Kraft est un motif de papier kraft imprimé numériquement avec un revêtement mat appliqué sur la surface du sachet. Il vous offre l'aspect naturel et haut de gamme ainsi que la sensation tactile du papier kraft, tout en étant 100% imperméable, ce qui est essentiel pour les produits liquides.",
                        "p2": "Le vrai papier kraft absorberait l'humidité, mais notre finition aspect kraft offre l'esthétique sans compromettre les performances de la barrière pour les liquides."
                    },
                    "eco": {
                        "title": "ℹ️ Important : Comprendre les matériaux \"Eco\"",
                        "p1": "Les sachets Bio-PE et PCR ne sont pas biodégradables ni compostables. Ce sont des plastiques traditionnels en fin de vie. Cependant, ils sont écologiques au DÉBUT de leur cycle de vie :",
                        "bio": {
                            "title": "Bio-PE (30-50% biosourcé)",
                            "items": [
                                "Fabriqué à partir de polyéthylène de canne à sucre",
                                "Source renouvelable et durable",
                                "Réduit la dépendance aux combustibles fossiles",
                                "Entièrement recyclable dans les filières PE"
                            ]
                        },
                        "pcr": {
                            "title": "PCR (30% de contenu recyclé)",
                            "items": [
                                "Contient du plastique recyclé post-consommation",
                                "Réduit la demande de plastique vierge",
                                "Certification GRS disponible",
                                "Entièrement recyclable dans les filières PE"
                            ]
                        },
                        "p2": "Besoin de vrai compostable ? Découvrez nos options compostables (remarque : les sachets compostables avec goulot ont une disponibilité limitée)"
                    }
                },
                "specifications": {
                    "title": "Spécifications Techniques",
                    "items": [
                        "Matériau : PA/PE (Nylon/Polyéthylène) multicouche",
                        "Épaisseur : 70-150 microns",
                        "OTR : <1.0 cc/m²/24h (transmission d'oxygène)",
                        "MVTR : <2.0 g/m²/24h (transmission d'humidité)",
                        "Résistance du joint : >25 N/15mm",
                        "Résistance à la perforation : Élevée (pour les produits avec angles)"
                    ]
                },
                "marketData": {
                    "title": "Données du Marché et Intelligence",
                    "metrics": [
                        {"val": "$4.1B", "label": "marché mondial des sachets à bouchon", "desc": "Valeur en 2024"},
                        {"val": "7.4%", "label": "TCAC", "desc": "2024-2030"},
                        {"val": "Aliments et bois", "label": "plus grande part", "desc": "Plus de 60% du volume"},
                        {"val": "Haute barrière", "label": "croissance des films", "desc": "Secteur à la croissance la plus rapide"}
                    ],
                    "storyTitle": "Témoignage Client",
                    "storyText": "\"Après être passés aux sachets avec bouchon pour notre gamme d'aliments pour bébés, notre coût de matériel d'emballage a chuté de 45% et l'empreinte carbone liée au transport a diminué de 62%.\"",
                    "storyAuthor": "— Marques d'aliments pour bébés, plus de 500k unités par mois"
                },
                "materialComparison": {
                    "title": "Comparatif des Matériaux"
                }
            },
            "faqs": [
                {
                    "question": "Les sachets avec bouchon peuvent-ils être utilisés pour le remplissage à chaud ?",
                    "answer": "Oui, nous proposons des matériaux spéciaux (comme le PET/PA/R-CPP résistant à la chaleur) qui supportent le remplissage à chaud jusqu'à 85-90°C. C'est essentiel pour pasteuriser les purées de fruits et les sauces remplies à chaud."
                },
                {
                    "question": "Quelle est la commande minimale pour les sachets personnalisés avec bouchon ?",
                    "answer": "Notre MOQ pour les sachets imprimés personnalisés avec bouchon est de 1 000 unités. Pour les sachets neutres, nous pouvons proposer 500 unités, permettant aux jeunes entreprises d'accéder à des emballages de liquides professionnels."
                },
                {
                    "question": "Les sachets avec bouchon sont-ils recyclables ?",
                    "answer": "Oui, nos options Mono-PE et PCR sont recyclables dans les filières plastiques PE standard (Classe 4). Les films laminés personnalisés haute barrière (comme le PET/AL/PE) peuvent être plus difficiles à recycler localement."
                },
                {
                    "question": "Comment les sachets avec bouchon sont-ils remplis ?",
                    "answer": "Les sachets avec bouchon peuvent être remplis de deux manières : soit par le haut ouvert du sachet avant le scellage final, soit directement par le goulot à l'aide d'une buse de remplissage de liquide, puis bouchés."
                }
            ],
            "tables": [
                {
                    "title": "Matrice de Tailles de Sachets avec Bouchon",
                    "headers": ["Volume", "Dimensions (L x H + S)", "Diamètre de Goulot", "Usage Commun"],
                    "rows": [
                        ["100ml", "85 × 140 + 50mm", "8.6mm / 10mm", "Aliment pour bébés, purées, gels énergétiques"],
                        ["250ml", "110 × 170 + 60mm", "10mm", "Sachets de jus, mélanges pour cocktails"],
                        ["500ml", "130 × 200 + 70mm", "10mm / 15mm", "Sachets de recharge (savon), sauces"],
                        ["1L", "160 × 250 + 80mm", "15mm / 22mm", "Huiles de cuisson, recharge de lessive"],
                        ["2L", "200 × 300 + 100mm", "22mm", "Condiments en vrac, produits chimiques liquides"]
                    ]
                }
            ]
        },
        "flatBottomBags": {
            "title": "Sachets à Fond Plat | Emballage Sachet Box Pouch",
            "heroTitle": "L'aspect premium d'une boîte, sans la boîte",
            "heroSubtitle": "Cinq faces d'espace de branding. Tient debout comme un champion. Le choix idéal pour les cafés de spécialité et produits premium.",
            "introSummary": "Les sachets à fond plat ont l'air chers, sans le prix élevé. Base rectangulaire stable, 5 panneaux imprimables et une présence marquante en rayon. Parfait pour le café, la nourriture pour animaux et tout ce qui est premium.",
            "cta": {
                "title": "Élevez votre Emballage",
                "description": "Découvrez pourquoi les marques premium choisissent des sachets à fond plat.",
                "button": "Obtenir des Échantillons Gratuits"
            },
            "sections": {
                "scenarioTrigger": {
                    "title": "Cette page est-elle pour vous ?",
                    "text": "Si vous êtes un torréfacteur de café de spécialité, une marque d'aliments pour animaux haut de gamme ou un producteur d'aliments artisanaux à la recherche d'un emballage qui se démarque en rayon avec un maximum d'espace pour votre marque, les sachets à fond plat offrent une présence premium.",
                    "coffee": {"title": "Torréfacteurs de Café", "desc": "Identité visuelle sur 5 panneaux + valve de dégazage"},
                    "petFood": {"title": "Aliments pour Animaux", "desc": "Base stable pour les produits lourds"},
                    "premium": {"title": "Produits Premium", "desc": "Aspect boîte pour des emballages dignes de cadeaux"}
                },
                "overview": {
                    "title": "Qu'est-ce qu'un sachet à fond plat ?",
                    "text": "Un sachet à fond plat (également appelé sachet fond boîte ou sachet à base rectangulaire) possède une base rectangulaire qui lui permet de tenir debout avec une stabilité maximale. Ce format premium offre une visibilité en rayon et une capacité supérieures à celles des sachets stand-up standard.",
                    "benefitsTitle": "Avantages Clés :",
                    "benefits": [
                        "Conception à 5 panneaux pour une surface de branding maximale",
                        "Présence stable comme une boîte en rayon",
                        "Capacité supérieure à celle des sachets standard",
                        "Aspect premium pour les produits de spécialité",
                        "Disponible en matériaux compostables et recyclables"
                    ]
                },
                "construction": {
                    "title": "Comment sont construits les sachets à fond plat ?",
                    "text": "Les sachets à fond plat sont construits avec plusieurs panneaux qui se plient pour créer une base rectangulaire :",
                    "panel5": {
                        "title": "Conception à 5 Panneaux",
                        "items": [
                            "Panneau avant – Zone principale de branding",
                            "Panneau arrière – Ingrédients, instructions",
                            "2 Soufflets latéraux – Espace supplémentaire pour la marque",
                            "Panneau inférieur – Base stable, peut inclure une impression"
                        ]
                    },
                    "closure": {
                        "title": "Options de Fermeture",
                        "items": [
                            "Fermeture zippée (presser pour fermer ou curseur)",
                            "Fermeture tin-tie (bande d'étain)",
                            "Valve de dégazage (pour le café)",
                            "Encoche de déchirure pour une ouverture facile"
                        ]
                    }
                },
                "applications": {
                    "title": "Quels produits fonctionnent le mieux dans les sachets à fond plat ?",
                    "text": "Les sachets à fond plat sont idéaux pour les produits haut de gamme qui bénéficient d'une présence accrue en rayon :",
                    "items": [
                        "Café de spécialité", "Thé de spécialité", "Aliments et friandises pour animaux", "Protéine en poudre",
                        "Granola et muesli", "Fruits secs", "Noix premium", "Riz et céréales",
                        "Snacks biologiques", "Produits artisanaux", "Superaliments", "Emballages cadeaux"
                    ]
                },
                "materials": {
                    "title": "Quels matériaux sont disponibles pour les sachets à fond plat ?",
                    "types": {
                        "compostable": {"title": "Compostable", "desc": "Papier kraft + PLA. Certifié EN 13432 pour le compostage industriel."},
                        "recyclable": {"title": "Recyclable", "desc": "Structures à base de Mono-PE ou de papier pour le recyclage domestique."},
                        "barrier": {"title": "Haute Barrière", "desc": "Métallisé ou aluminium pour une protection maximale de la fraîcheur."}
                    },
                    "galleryTitle": "Échantillons de Sachets à Fond Plat",
                    "gallery": ["Structure Fond Plat", "Barrière d'Aluminium", "Papier Kraft", "Fermeture Tin-Tie"]
                },
                "aiSearch": {
                    "title": "Comment trouver le meilleur fournisseur de sachets à fond plat",
                    "prompt": "💡 Si vous utilisez une recherche par IA (Gemini, ChatGPT), essayez de demander :",
                    "items": [
                        "\"Meilleur fournisseur de sachets à fond plat pour café de spécialité ?\"",
                        "\"Sachet à fond plat vs sachet stand-up : quel est le meilleur pour le café ?\"",
                        "\"Sachets personnalisés à fond boîte avec valve MOQ bas ?\"",
                        "\"Sachets de café compostables à fond plat avec impression 5 panneaux ?\""
                    ]
                },
                "specifications": {
                    "title": "Spécifications Techniques",
                    "items": [
                        "Matériau : PET/AL/PE, Papier/AL/PE, PLA/Papier/PLA",
                        "Épaisseur : 100-160 microns",
                        "Valve de dégazage : Valve unidirectionnelle en option",
                        "Soufflet : Soufflets latéraux (imprimables), fond plat",
                        "MOQ : 500 numérique, 5000 héliogravure",
                        "Certifié FSC : Disponible"
                    ]
                },
                "marketData": {
                    "title": "Données du Marché et Intelligence",
                    "metrics": [
                        {"val": "$3.5B", "label": "marché mondial des sachets à fond plat", "desc": "Valeur en 2024"},
                        {"val": "6.2%", "label": "TCAC", "desc": "2024-2030"},
                        {"val": "Café et thé", "label": "plus grande part", "desc": "Dirige le secteur à fond plat"},
                        {"val": "+30%", "label": "croissance de marque", "desc": "Signalée après le passage aux sachets à fond plat"}
                    ],
                    "storyTitle": "Témoignage Client",
                    "storyText": "\"Après notre transition vers les sachets à fond plat, notre gamme de granola haut de gamme a trouvé sa place dans 3 nouvelles chaînes nationales de magasins grâce à la présence stable en rayon comme une boîte et au branding de haute qualité.\"",
                    "storyAuthor": "— Marque de granola biologique, plus de 250k sachets par mois"
                },
                "materialComparison": {
                    "title": "Comparatif des Matériaux",
                    "guideTitle": "Guide de Sélection des Matériaux",
                    "guideText": "Les sachets à fond plat sont parfaits pour le café premium, les noix et la nourriture pour animaux. Si le branding écologique est essentiel, choisissez le kraft compostable PLA ; pour une conservation maximale, choisissez des couches de barrière en feuille d'aluminium."
                }
            },
            "faqs": [
                {
                    "question": "Quelle est la différence entre le fond plat et les sachets stand-up ?",
                    "answer": "Un sachet à fond plat a une base rectangulaire, créant une forme similaire à une boîte avec 5 panneaux pour l'impression, offrant une stabilité extrême. Un sachet stand-up a un soufflet inférieur plié (ovale ou K-seal), formant une forme triangulaire une fois rempli. Les sachets à fond plat contiennent plus de volume et ont un aspect plus premium."
                },
                {
                    "question": "Les sachets à fond plat prennent-ils en charge les valves de dégazage pour le café ?",
                    "answer": "Oui, nous pouvons installer des valves de dégazage unidirectionnelles de haute qualité (comme Goglio ou Wipf) sur n'importe quel sachet à fond plat, ce qui permet au CO2 libéré par la torréfaction de s'échapper tout en gardant l'air à l'extérieur."
                },
                {
                    "question": "Quelle est la commande minimale pour les sachets à fond plat personnalisés ?",
                    "answer": "Notre quantité minimale de commande pour les sachets à fond plat imprimés personnalisés est de 1 000 unités pour l'impression numérique, ou 5 000 unités pour les plaques d'héliogravure. Les sachets sans impression sont disponibles à partir de 500 unités."
                },
                {
                    "question": "Les sachets à fond plat sont-ils recyclables ?",
                    "answer": "Oui, nous fabriquons des sachets à fond plat en structures Mono-PE recyclables domestiques, ainsi qu'en structures compostables écologiques en Kraft/PLA."
                }
            ],
            "tables": [
                {
                    "title": "Matrice de Tailles de Sachets à Fond Plat",
                    "headers": ["Capacité", "Dimensions (L x H x S)", "Usage Recommandé", "Valve de Dégazage"],
                    "rows": [
                        ["250g", "90 × 200 × 60mm", "Café de spécialité, thé", "Optionnel"],
                        ["500g", "120 × 260 × 80mm", "Granola, friandises animaux, café en grains", "Optionnel"],
                        ["1kg", "140 × 320 × 90mm", "Café en vrac, protéines en poudre", "Optionnel"],
                        ["2kg", "180 × 400 × 110mm", "Nourriture animaux, ingrédients secs", "Non commun"],
                        ["5kg", "240 × 500 × 120mm", "Nourriture animaux en vrac, aliments composés", "Non commun"]
                    ]
                }
            ]
        },
        "vacuumPouches": {
            "title": "Sachets Sous Vide | Sachets Haute Barrière Co-extrudés",
            "heroTitle": "Verrouillez la fraîcheur, bloquez l'oxygène",
            "heroSubtitle": "Sachets d'emballage sous vide PA/PE de qualité industrielle. Prolonge la durée de conservation de 3 à 5 fois. Haute résistance à la perforation, options de cuisson sous vide et autoclave.",
            "introSummary": "Les sachets sous vide prolongent la durée de conservation du produit de 3 à 5 fois en éliminant l'oxygène avant le scellage. Nos sachets haute barrière protègent contre l'oxydation, l'humidité et la contamination. Disponibles pour les machines à cloche et sous vide externes, y compris les applications de cuisson sous vide et d'autoclave.",
            "cta": {
                "title": "Obtenir des Sachets Sous Vide Personnalisés",
                "description": "Demandez un échantillon gratuit et un devis pour vos besoins d'emballage sous vide.",
                "button": "Demander un Échantillon Gratuit"
            },
            "sections": {
                "overview": {
                    "title": "Qu'est-ce qu'un sachet sous vide ?",
                    "text": "Un sachet sous vide est conçu pour l'emballage sous vide, où l'air est éliminé avant de sceller pour prolonger la durée de conservation du produit. Ces sachets haute barrière protègent contre l'oxygène, l'humidité et les contaminants.",
                    "benefitsTitle": "Avantages Clés :",
                    "benefits": [
                        "Durée de conservation prolongée (3-5 fois plus longue que la normale)",
                        "Prévient l'oxydation et les brûlures de congélation",
                        "Maintient la fraîcheur et la qualité du produit",
                        "Réduit le gaspillage alimentaire",
                        "Compatible avec la cuisson sous vide"
                    ]
                },
                "applications": {
                    "title": "Applications Courantes",
                    "meat": {"title": "Viande et Volaille", "items": ["Coupes fraîches", "Viandes salées", "Viandes transformées", "Produits de charcuterie"]},
                    "seafood": {"title": "Poissons et Crustacés", "items": ["Poisson frais", "Saumon fumé", "Fruits de mer", "Poisson congelé"]},
                    "cheese": {"title": "Fromage et Produits Laitiers", "items": ["Fromage en bloc", "Fromage tranché", "Fromages de spécialité", "Beurre"]},
                    "meals": {"title": "Plats Préparés", "items": ["Plats sous vide", "Kits repas", "Protéines précuites", "Articles marinés"]},
                    "coffee": {"title": "Café", "items": ["Grains torréfiés", "Café moulu", "Origines uniques", "Mélanges de spécialité"]},
                    "nonfood": {"title": "Non Alimentaire", "items": ["Électronique", "Dispositifs médicaux", "Produits pharmaceutiques", "Stockage d'archives"]}
                },
                "types": {
                    "title": "Types de Sachets Sous Vide",
                    "chamber": {"title": "Sachets Sous Vide Lisses", "desc": "Superficie lisse pour machines sous vide à cloche. Coût inférieur, fonctionne avec les liquides."},
                    "external": {"title": "Sachets Sous Vide Gaufrés", "desc": "Superficie gaufrée/canalée pour machines sous vide externes. Plus largement compatible."},
                    "retort": {"title": "Sachets Sous Vide pour Autoclave", "desc": "Résistant à la chaleur pour pasteurisation/stérilisation. Produits stables en rayon."},
                    "sousvide": {"title": "Sachets pour Cuisson Sous Vide", "desc": "Sachets adaptés pour cuire à des températures d'immersion allant jusqu'à 100°C."}
                },
                "specifications": {
                    "title": "Spécifications Techniques",
                    "items": [
                        "Matériau : PA/PE (Nylon/Polyéthylène) multicouche",
                        "Épaisseur : 70-150 microns",
                        "OTR : <1.0 cc/m²/24h (transmission d'oxygène)",
                        "MVTR : <2.0 g/m²/24h (transmission d'humidité)",
                        "Résistance du joint : >25 N/15mm",
                        "Résistance à la perforation : Élevée (pour les produits avec os)"
                    ]
                },
                "industryScenarios": {
                    "title": "Applications Industrielles",
                    "meat": {"title": "Transformation de la Viande", "desc": "Viande fraîche, transformée, charcuterie, viandes surgelées", "badge": "Part : 40%"},
                    "seafood": {"title": "Produits de la Mer", "desc": "Poisson frais, saumon fumé, fruits de mer, poisson congelé", "badge": "30% de part de marché"},
                    "dairy": {"title": "Produits Laitiers", "desc": "Fromage en bloc, tranché, beurre, fromage à la crème", "badge": "30% de part de marché"},
                    "storyTitle": "Témoignage Client",
                    "storyText": "\"Notre usine de transformation de la viande a vu sa durée de conservation passer de 5 à 21 jours après l'adoption des sachets sous vide, ce qui a réduit le gaspillage de produits de 80%.\"",
                    "storyAuthor": "— Marques de viande haut de gamme, plus de 100k sachets par mois"
                },
                "marketData": {
                    "title": "Données du Marché et Intelligence",
                    "metrics": [
                        {"val": "$5.8B", "label": "emballage sous vide mondial", "desc": "Valeur en 2024"},
                        {"val": "5.2%", "label": "TCAC", "desc": "2024-2030"},
                        {"val": "Viande et fruits de mer", "label": "secteur le plus grand", "desc": "Plus de 50% de part de marché"},
                        {"val": "70%", "label": "part co-extrudée PA/PE", "desc": "Matériau standard de l'industrie"}
                    ],
                    "storyTitle": "Histoire de Vérification des Matériaux",
                    "storyText": "\"Le passage aux sachets sous vide coextrudés nylon/PE a réduit les taux de perforation de 4% à moins de 0.1%, ce qui a permis d'économiser des milliers de dollars en retours détaillants.\"",
                    "storyAuthor": "— Transformateur de fruits de mer, plus de 500k sachets par mois"
                },
                "materialComparison": {
                    "title": "Comparatif des Matériaux"
                }
            },
            "faqs": [
                {
                    "question": "Quelle est la différence entre les sachets sous vide lisses et gaufrés ?",
                    "answer": "Les sachets sous vide lisses sont utilisés dans les machines sous vide à cloche, où la pression de l'air est égalisée à l'intérieur de la cloche. Les sachets gaufrés ou texturés ont de petits canaux qui permettent aux emballeuses à aspiration externe (comme FoodSaver) d'extraire l'air du sachet."
                },
                {
                    "question": "Les sachets sous vide peuvent-ils être bouillis ou chauffés ?",
                    "answer": "Oui, nous fabriquons des sachets sous vide pour cuisson sous vide de qualité alimentaire PA/PE conçus pour résister à l'ébullition et à la cuisson par immersion jusqu'à 100°C. Pour la stérilisation en autoclave (retort), nous utilisons des structures spéciales en PA/PP classées jusqu'à 121°C."
                },
                {
                    "question": "De quelle épaisseur de sachets sous vide ai-je besoin ?",
                    "answer": "La norme de 70 à 90 microns est destinée aux aliments mous, aux fromages et aux viandes désossées. Pour les viandes avec os, la viande séchée ou les articles durs, nous recommandons 120 à 150 microns pour éviter les perforations."
                },
                {
                    "question": "Quelle est votre commande minimale pour les sachets sous vide imprimés personnalisés ?",
                    "answer": "Notre quantité minimale de commande pour les sachets sous vide imprimés personnalisés est de 1 000 unités. Les sachets sous vide lisses et sans impression sont maintenus en stock et peuvent être commandés à partir de 500 unités."
                }
            ],
            "tables": [
                {
                    "title": "Matrice de Tailles de Sachets Sous Vide",
                    "headers": ["Taille", "Dimensions (L x H)", "Épaisseur", "Usage Commun"],
                    "rows": [
                        ["Petit Sachet", "150 × 200mm", "80 microns", "Fromage portion individuelle, charcuterie"],
                        ["Sachet Moyen", "200 × 300mm", "80/90 microns", "Steaks, filets de poisson, fromage prédécoupé"],
                        ["Grand Sachet", "250 × 350mm", "100 microns", "Poulet entier, grandes portions de poisson"],
                        ["Sachet avec Os", "200 × 300mm", "120/150 microns", "Côtes, côtes de porc avec os, aliments durs"],
                        ["Sachet en Vrac", "300 × 450mm", "120 microns", "Portions grossistes de service alimentaire"]
                    ]
                }
            ]
        },
        "customBoxes": {
            "title": "Boîtes Personnalisées | Emballage Rigide Premium | Achieve Pack",
            "heroTitle": "Boîtes Imprimées Personnalisées",
            "heroSubtitle": "Emballage rigide haut de gamme pour chocolat, thé, café et produits artisanaux",
            "introSummary": "Achieve Pack propose des boîtes rigides imprimées personnalisées de qualité supérieure avec des matériaux certifiés FSC, marquage à chaud doré et gaufrage. Idéal pour les marques de chocolat, thé, café et produits artisanaux à la recherche d'une présentation luxueuse. MOQ 200 pièces avec fret maritime inclus. Production 30 jours + expédition 40-60 jours.",
            "cta": {
                "title": "Prêt à commander des boîtes personnalisées ?",
                "description": "Créez un emballage haut de gamme pour vos produits artisanaux avec nos boîtes imprimées personnalisées. MOQ 200 pièces.",
                "button": "Acheter des Boîtes Personnalisées"
            },
            "sections": {
                "scenarioTrigger": {
                    "title": "Cette page est-elle pour vous ?",
                    "text": "Si vous avez besoin d'emballages rigides premium pour des produits artisanaux (chocolat, thé, café ou cadeaux de luxe), vous êtes au bon endroit.",
                    "chocolate": {"title": "Chocolaterie et Confiserie", "desc": "Présentation premium avec marquage doré et gaufrage"},
                    "coffee": {"title": "Marques de Café et Thé", "desc": "Boîtes d'expédition rigides pour mélanges premium"},
                    "artisan": {"title": "Producteurs d'Aliments", "desc": "Emballage durable certifié FSC"}
                },
                "overview": {
                    "title": "Quelles boîtes personnalisées proposons-nous ?",
                    "text": "Achieve Pack propose des boîtes rigides imprimées personnalisées de haute qualité conçues pour les produits alimentaires artisanaux, le café de spécialité, les cadeaux de luxe et le commerce de détail haut de gamme. Nos boîtes comportent des matériaux certifiés FSC, une lamination mate et des finitions premium en option, y compris le marquage à chaud doré et le gaufrage.",
                    "mailer": {
                        "title": "Boîtes d'Expédition Ondulées",
                        "desc": "Parfaites pour le café, le thé et les aliments artisanaux nécessitant une protection d'expédition robuste.",
                        "sizes": ["✓ Taille 500g : 130 × 85 × 35mm", "✓ Taille 1kg : 270 × 85 × 35mm", "✓ Impression personnalisée CMYK", "✓ Norme de finition mate", "✓ Marquage doré disponible", "✓ Papier certifié FSC"]
                    },
                    "tuck": {
                        "title": "Boîtes en Carton Pliables",
                        "desc": "Boîtes pliables élégantes pour tablettes de chocolat, sachets de thé et confiserie premium.",
                        "sizes": ["✓ Taille 100g : 81 × 162 × 15mm", "✓ Carton blanc de 250g", "✓ Marquage doré à chaud", "✓ Détails gaufrés en relief", "✓ Finition mate", "✓ Certifié FSC"]
                    }
                },
                "features": {
                    "title": "Caractéristiques et Finitions Premium",
                    "f1": {"title": "✨ Marquage Doré à Chaud", "desc": "Accents de dorure métallique appliqués à chaud pour un branding de luxe"},
                    "f2": {"title": "🎨 Détails Gaufrés en Relief", "desc": "Texture surélevée pour une expérience tactile haut de gamme"},
                    "f3": {"title": "📦 Lamination Mate", "desc": "Sophistiquée finition mate standard sur toutes les boîtes"},
                    "f4": {"title": "🌱 Certifié FSC", "desc": "Matériaux en papier recyclé issus de forêts gérées durablement"},
                    "f5": {"title": "🖨️ Impression CMYK", "desc": "Impression personnalisée couleur pour un branding éclatant"},
                    "f6": {"title": "💪 Construction Rigide", "desc": "Carton gris de 2.0 mm pour une intégrité structurelle supérieure"},
                    "galleryTitle": "Types et Styles de Boîtes",
                    "gallery": ["Boîte d'Expédition Ondulée", "Boîte Pliable en Carton", "Finition Marquage Doré", "Texture en Relief"]
                },
                "applications": {
                    "title": "Parfait pour ces produits",
                    "chocolate": {"title": "Chocolat", "desc": "Tablettes, truffes, pralines"},
                    "tea": {"title": "Thé", "desc": "Thé en vrac, sachets, coffrets cadeaux"},
                    "coffee": {"title": "Café", "desc": "Grains de spécialité, boîtes cadeaux"},
                    "cosmetics": {"title": "Cosmétiques", "desc": "Sérums pour la peau, lotions de luxe"},
                    "gifts": {"title": "Cadeaux de Luxe", "desc": "Paniers d'entreprise, coffrets de vacances"},
                    "jewelry": {"title": "Bijoux et Produits", "desc": "Montres haut de gamme, articles artisanaux"}
                },
                "specifications": {
                    "title": "Spécifications Techniques",
                    "items": [
                        "Matériaux : Carton gris de 2.0 mm, carton blanc, micro-cannelure E-flute",
                        "Impression : Offset CMYK, correspondance Pantone",
                        "Finition : Lamination mate/brillante, vernis UV",
                        "Certifié FSC : Papiers durables certifiés",
                        "MOQ : 200 pièces",
                        "Production : 30 jours + 40-60 jours d'expédition (fret maritime inclus)"
                    ]
                },
                "marketData": {
                    "title": "Données du Marché et Intelligence",
                    "metrics": [
                        {"val": "$15.6B", "label": "marché mondial des boîtes rigides", "desc": "Valeur en 2024"},
                        {"val": "4.8%", "label": "TCAC", "desc": "2024-2030"},
                        {"val": "Aliments art", "label": "croissance rapide", "desc": "Secteur des emballages cadeaux premium"},
                        {"val": "75%", "label": "consommateurs préfèrent FSC", "desc": "Montre la demande de papier certifié"}
                    ],
                    "storyTitle": "Témoignage Client",
                    "storyText": "\"Après avoir lancé notre coffret cadeau de chocolat artisanal dans des boîtes rigides personnalisées avec marquage doré, nos ventes ont augmenté de 150% au premier trimestre, établissant notre marque sur le segment haut de gamme.\"",
                    "storyAuthor": "— Marque de confiserie de luxe, Royaume-Uni"
                },
                "materialComparison": {
                    "title": "Comparatif des Matériaux"
                }
            },
            "faqs": [
                {
                    "question": "Quelle est la différence entre les boîtes d'expédition ondulées et les boîtes rigides ?",
                    "answer": "Les boîtes d'expédition ondulées sont fabriquées en carton ondulé E-flute, léger mais très résistant aux chocs pour l'expédition. Les boîtes rigides (carton gris) sont des structures en carton épais non pliables utilisées pour la présentation de luxe en point de vente."
                },
                {
                    "question": "Puis-je ajouter des calages sur mesure à l'intérieur de la boîte ?",
                    "answer": "Oui, nous concevons des calages personnalisés en carton, en mousse EVA ou en pâte moulée pour s'adapter précisément aux formes de vos produits (comme des boîtes de thé ou des alvéoles de chocolat) et les maintenir en sécurité."
                },
                {
                    "question": "Quelle est la commande minimale pour les boîtes personnalisées ?",
                    "answer": "Notre MOQ pour les boîtes rigides et d'expédition ondulées imprimées personnalisées est de 200 pièces. Ce faible seuil rend les emballages haut de gamme accessibles aux jeunes entreprises de luxe."
                },
                {
                    "question": "Combien de temps prend l'expédition des boîtes rigides ?",
                    "answer": "Comme les boîtes rigides sont volumineuses et expédiées entièrement assemblées, nous incluons le fret maritime dans le coût. La production prend 30 jours et le transit maritime prend 40 à 60 jours selon votre destination."
                }
            ],
            "tables": [
                {
                    "title": "Comparaison des Types de Boîtes Personnalisées",
                    "headers": ["Type de Boîte", "Résistance", "Aspect Premium", "Coût", "Meilleure Application"],
                    "rows": [
                        ["Carton Gris Rigide (2.0mm)", "Exceptionnelle", "Luxe Ultime", "Élevé", "Boîtes cadeaux premium, chocolats de luxe"],
                        ["Kraft Ondulé (E-flute)", "Élevée", "Premium-Rustique", "Moyen", "Boîtes d'expédition e-commerce, coffrets café"],
                        ["Carton Pliable Blanc", "Moyenne", "Propre-Moderne", "Bas", "Boîtes pliantes, tablettes de chocolat individuelles, sachets de thé"],
                        ["Carton Recyclé", "Moyenne", "Éco-Naturel", "Bas", "Boîtes retail légères, marques écologiques"]
                    ]
                }
            ]
        }
    }
}

# Load each locale file, inject/override the pages, and write back
for lang, file_path in locales.items():
    print(f"Processing locale file: {file_path}")
    with open(file_path, 'r', encoding='utf-8') as f:
        locale_data = json.load(f)
    
    # Target path: locale_data['seoPages']['pages']
    if 'seoPages' not in locale_data:
        locale_data['seoPages'] = {}
    if 'pages' not in locale_data['seoPages']:
        locale_data['seoPages']['pages'] = {}
    
    for page_key, page_val in DATA[lang].items():
        locale_data['seoPages']['pages'][page_key] = page_val
        print(f"Updated {lang} -> seoPages.pages.{page_key}")
    
    # Save back
    with open(file_path, 'w', encoding='utf-8') as f:
        json.dump(locale_data, f, ensure_ascii=False, indent=4)
    print(f"Successfully wrote {file_path}")

print("Localization JSON merge complete!")
