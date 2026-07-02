import json
import os

keys = [
  "apparelZipper", "beefJerkyBarrier", "cacaoStandUp", "candyUv", "cheesePocketZipper",
  "childResistantMylarBags", "cocktailSpout", "collagenHighBarrier", "compostableBabyFoodBags",
  "compostableCertificationFaq", "compostableHumidityControl", "compostablePackagingBlog",
  "compostableSpoutedPouches", "compostableZipperDurability", "crispsShaped",
  "customBrandPackaging", "customBrandPackagingService", "customCompostablePouchSuppliers",
  "customPrintedSustainablePouches", "customVsStandardPackaging", "ddpPackaging",
  "detergentSpout", "digitalPrintingEcoPackaging", "driedFruitsTearNotch",
  "dtcSustainablePackaging", "dynamicPouchTopic", "ecoFriendlyFoodPackaging",
  "ecoFriendlySupplierService", "ecoFriendlySupplierVerification", "ecoPackagingRegulations",
  "electronicsAntiStatic", "euppwrCompliance", "euroHoleHang", "evohRetort",
  "fastAirFreight", "fdaBrcCertified", "foodPackagingSupplier", "foodPackagingSupplierService",
  "frozenVacuum", "granolaSoftTouch", "greenCoffeeMaterials", "hologramHotStamping",
  "homeCompostableCoffeeBags", "homeVsIndustrialCompostable", "isoSustainable",
  "lowMoqStartupPackaging", "matchaSachet", "minimalistD2CPackaging", "monoMaterialSolution",
  "monoPePouches", "pcrPackagingGuide", "petFoodQuadSeal", "pfasFreePackaging",
  "pharmaVelcro", "plaRice", "pouchChildResistantMylarBags", "pouchCompostableBabyFoodBags",
  "pouchCompostableCertificationFaq", "pouchCompostableHumidityControl",
  "pouchCompostablePackagingBlog", "pouchCompostableSpoutedPouches",
  "pouchCompostableZipperDurability", "pouchCompostableZipperNoRemoval",
  "pouchCustomBrandPackaging", "pouchCustomBrandPackagingService",
  "pouchCustomCompostablePouchSuppliers", "pouchCustomPrintedSustainablePouches",
  "pouchCustomVsStandardPackaging", "pouchDigitalPrintingEcoPackaging",
  "pouchDtcSustainablePackaging", "pouchEcoFriendlyFoodPackaging",
  "pouchEcoFriendlySupplierService", "pouchEcoFriendlySupplierVerification",
  "pouchEcoPackagingRegulations", "pouchFoodPackagingSupplierService",
  "pouchGreenCoffeeMaterials", "pouchHighHeatCandlePackaging",
  "pouchHomeCompostableCoffeeBags", "pouchLowMoqStartupPackaging",
  "pouchMinimalistD2CPackaging", "pouchMonoMaterialSolution", "pouchMonoPePouches",
  "pouchPcrPackagingGuide", "pouchPfasFreePackaging", "pouchRealWorldSustainability",
  "pouchRecyclablePackagingGuide", "pouchRecyclableSnackPackaging",
  "pouchRecycledOceanPlasticPackaging", "pouchReducePackagingWasteGuide",
  "pouchReduceWasteGuide", "pouchSustainablePackagingPillar", "premiumTea",
  "realWorldSustainability", "recyclablePackagingGuide", "recyclableSnackPackaging",
  "recycledOceanPlasticPackaging", "reducePackagingWasteGuide", "reduceWasteGuide",
  "ricePaperArtisanal", "spicesMoistureProof", "sustainablePackagingPillar",
  "urgentOrders", "valveCoffeeBags"
]

keyword_map = {
    "apparel": ("Fabric Protection", "Moisture and dirt damaging clothing during transit.", "High-barrier PE materials block out all moisture and dust."),
    "beef": ("Oxygen Exposure", "Jerky spoiling quickly due to oxygen ingress.", "Multi-layer EVOH barriers block oxygen to maximize shelf life."),
    "jerky": ("Oxygen Exposure", "Jerky spoiling quickly due to oxygen ingress.", "Multi-layer EVOH barriers block oxygen to maximize shelf life."),
    "cacao": ("Aroma Loss", "Cacao losing its signature scent.", "High-barrier foils lock in volatile aromatic compounds entirely."),
    "candy": ("UV Light Degradation", "Sunlight melting or discoloring candy.", "Opaque metallized structures block 100% of harmful UV light."),
    "cheese": ("Mold Growth", "Cheese molding prematurely due to poor seals.", "Airtight seals and barrier films prevent oxygen from entering the package."),
    "cocktail": ("Leaking Liquids", "Spouts detaching during shipping.", "Reinforced ultrasonic welding ensures a completely leak-proof spout seal."),
    "collagen": ("Powder Clogging", "Fine powders getting stuck in standard zipper tracks.", "Our specialized zippers ensure easy, reliable sealing even with messy, fine-particle products."),
    "crisps": ("Puncture Risks", "Sharp crisps piercing the bag.", "Durable, reinforced laminations prevent punctures and tears."),
    "detergent": ("Chemical Resistance", "Detergent degrading the packaging material.", "Specially formulated inner layers provide excellent resistance to harsh chemicals."),
    "driedfruits": ("Loss of Freshness", "Fruits drying out and becoming hard.", "Airtight seals and premium barriers lock in moisture for months."),
    "electronics": ("Static Discharge", "Static electricity damaging sensitive electronics.", "We use anti-static films that safely dissipate electrostatic charges."),
    "granola": ("Stale Product", "Granola losing its crunch.", "Precision heat seals guarantee airtight protection to lock in freshness."),
    "matcha": ("Aroma Loss", "Matcha losing its signature scent and vibrant color.", "High-barrier foils lock in volatile aromatic compounds and block UV light entirely."),
    "petfood": ("Heavy Weight Failure", "Large bags bursting open under the weight of pet food.", "Our quad-seal bags feature reinforced side gussets and robust bottom seals designed to safely hold heavy bulk contents."),
    "pharma": ("Regulatory Compliance", "Packaging failing to meet strict pharma requirements.", "Our bags are manufactured in BRC/ISO certified cleanrooms to ensure compliance."),
    "spices": ("Flavor Scalping", "The packaging absorbing the flavor of the spices.", "We use specialized inner layers that prevent flavor scalping and maintain product integrity."),
    "tea": ("Aroma Loss", "Tea leaves losing their signature scent.", "High-barrier foils lock in volatile aromatic compounds entirely."),
    "zipper": ("Faulty Resealability", "Zippers breaking or failing to close properly after first use.", "We use premium press-to-close and slider zippers that guarantee an airtight, reliable seal every time."),
    "barrier": ("Oxygen and Moisture Exposure", "Products losing freshness and flavor due to poor oxygen or moisture barriers.", "We use multi-layer high-barrier films (like AL, VMPET, or EVOH) to block oxygen and moisture, ensuring long shelf life."),
    "standup": ("Display Stability", "Bags falling over and looking messy on retail shelves.", "Our engineered bottom gussets provide excellent stability, ensuring pouches stand perfectly upright for maximum shelf impact."),
    "uv": ("UV Light Degradation", "Sunlight causing discoloration or nutrient loss in the product.", "We offer opaque metallized or aluminum foils that block 100% of UV rays, preserving product color, flavor, and nutrition."),
    "pocketzipper": ("Messy Access", "Customers struggling to access the product without making a mess.", "Our front pocket zipper design allows for easy, wide-mouth access while keeping the top seal intact for a premium look."),
    "childresistant": ("Regulatory Compliance", "Packaging failing to meet strict state or federal child resistance laws.", "Our CR bags are fully certified under US 16 CFR 1700.20 and ISO 8317 standards to ensure 100% legal compliance."),
    "mylar": ("Odor Control", "Pungent smells escaping the bag and compromising privacy.", "High-barrier mylar layers combined with airtight zippers ensure complete odor containment and discretion."),
    "spout": ("Leaking During Transport", "Spouts detaching or leaking when subjected to pressure.", "We use reinforced ultrasonic welding to securely bond the spout to the pouch, passing strict drop and burst tests."),
    "babyfood": ("Choking Hazards for Kids", "Small caps posing a risk to young children.", "We supply anti-swallow, child-safe caps specifically designed to meet international safety standards for baby food and beverages."),
    "compostable": ("Decomposition Reliability", "Bags not breaking down as advertised in home or industrial setups.", "Our materials are fully certified (e.g., TUV, BPI) for both home and industrial compostability, breaking down into non-toxic biomass."),
    "certification": ("Greenwashing Concerns", "Consumers doubting the sustainability claims of the packaging.", "We provide full traceability and certifications (like TUV, BPI, GRS, FSC) to back up all eco-friendly claims with proof."),
    "humidity": ("Clumping and Spoilage", "Humidity entering the bag and ruining sensitive powders or snacks.", "Our advanced moisture-barrier films and airtight seals keep the internal humidity perfectly controlled, preventing clumping."),
    "durability": ("Weak Seals", "Eco bags bursting open at the seams during transport.", "Our advanced biopolymer sealants ensure strong, durable heat seals that perform just as well as traditional plastics."),
    "shaped": ("Brand Differentiation", "The product blending in with competitors on crowded shelves.", "Our custom structural designs and shaped pouches help your brand stand out and grab consumer attention instantly."),
    "custom": ("Brand Aesthetics", "Generic packaging making the product look cheap.", "We provide premium finishes like soft-touch matte, spot UV, and holographic elements to elevate your brand perception."),
    "printing": ("Color Accuracy", "The final printed colors not matching the brand's exact pantone shades.", "We employ stringent color-matching protocols and provide physical proofs to ensure your brand colors are reproduced flawlessly."),
    "ddp": ("Customs and Duties Headaches", "Unexpected tariffs and complicated import paperwork.", "We offer DDP (Delivered Duty Paid) shipping options, meaning we handle all customs, duties, and logistics straight to your door."),
    "tearnotch": ("Hard to Open", "Consumers struggling to open the bag without scissors.", "Ergonomic zipper designs and laser-scored tear notches provide a smooth, frustration-free opening experience."),
    "dtc": ("Unboxing Experience", "Dull packaging failing to impress online buyers.", "We design premium, tactile pouches with vibrant graphics that create a memorable and shareable unboxing experience."),
    "ecofriendly": ("Recyclability at Curbside", "Bags not being accepted by local recycling facilities.", "We offer mono-material PE/PE structures that are Store Drop-off recyclable or curbside-ready in supported regions."),
    "eco": ("Greenwashing Concerns", "Consumers doubting the sustainability claims of the packaging.", "We provide full traceability and certifications (like TUV, BPI, GRS, FSC) to back up all eco-friendly claims with proof."),
    "sustainable": ("Cost Premiums", "Sustainable packaging breaking the budget.", "We optimize material thickness and manufacturing efficiency to offer cost-competitive sustainable options."),
    "euppwr": ("Regulatory Non-Compliance", "Packaging failing to meet strict new European packaging waste regulations (PPWR).", "Our mono-material and compostable solutions are engineered to ensure full compliance with EU PPWR guidelines."),
    "eurohole": ("Retail Display Options", "Retailers struggling to hang the pouches on pegboards.", "We incorporate precise, reinforced Euro hole punches that allow for easy, secure pegboard hanging without tearing."),
    "evoh": ("Flavor Scalping", "The packaging absorbing the flavor of the food.", "We use specialized EVOH inner layers that prevent flavor scalping and maintain product integrity for sensitive foods."),
    "retort": ("High Heat Failure", "Pouches melting or bursting during the retort sterilization process.", "Our specialized retort pouches use heat-resistant CPP and AL layers designed to withstand up to 135°C without delamination."),
    "fast": ("Urgent Deadlines", "Needing packaging immediately for a product launch.", "Our fast-track production options and expedited air freight can deliver your custom pouches in a fraction of standard lead times."),
    "fda": ("Food Safety", "Packaging containing harmful chemicals that migrate into food.", "All our food-contact materials are 100% FDA-approved, BPA-free, and manufactured in BRC/ISO certified cleanroom facilities."),
    "frozen": ("Freezer Burn", "Packaging cracking or letting air in at freezing temperatures.", "Our specialized frozen food films remain flexible at low temperatures and provide strong barriers against freezer burn."),
    "softtouch": ("Tactile Feel", "Glossy bags feeling cheap and slipping out of hands.", "Our premium soft-touch matte finish provides a luxurious, velvety texture that enhances grip and brand perception."),
    "hologram": ("Counterfeiting", "Knock-off brands copying your product packaging.", "We integrate custom hologram hot stamping and security features to authenticate your brand and deter counterfeiters."),
    "iso": ("Inconsistent Quality", "Variations in color or size between different order batches.", "Our strict ISO-certified quality control systems ensure complete consistency in color, dimensions, and performance for every order."),
    "moq": ("High Minimum Order Quantities", "Suppliers demanding huge volumes that tie up cash flow.", "We offer ultra-low MOQs thanks to advanced digital printing, perfect for startups and market testing."),
    "minimalist": ("Cluttered Design", "Too much information ruining a clean, modern aesthetic.", "We help optimize your layout and utilize clear, high-quality printing to achieve a striking, minimalist design."),
    "monomaterial": ("Complex Recycling", "Multi-layer bags being impossible to recycle.", "Our true mono-material PE pouches offer high barrier properties while being 100% recyclable in standard PE streams."),
    "mono": ("Complex Recycling", "Multi-layer bags being impossible to recycle.", "Our true mono-material PE pouches offer high barrier properties while being 100% recyclable in standard PE streams."),
    "pcr": ("Sourcing Authentic Recycled Material", "Difficulty verifying the actual percentage of post-consumer recycled content.", "We use GRS-certified PCR resins, providing full traceability to guarantee the authenticity of your recycled packaging."),
    "pfas": ("Toxic Chemical Contamination", "Concerns over 'forever chemicals' (PFAS) in grease-resistant packaging.", "We guarantee all our packaging solutions are 100% PFAS-free, using safe, innovative alternatives for grease resistance."),
    "velcro": ("Powder Clogging", "Fine powders getting stuck in standard zipper tracks.", "Our specialized hook-and-loop (Velcro-style) zippers ensure easy, reliable sealing even with messy, fine-particle products."),
    "ocean": ("Marine Pollution", "Packaging contributing to ocean plastic waste.", "We offer packaging made from verified recycled ocean-bound plastics, helping you actively remove waste from the environment."),
    "waste": ("Excessive Packaging", "Bulky packaging generating unnecessary waste and high shipping costs.", "Our flexible pouches use up to 80% less material than rigid containers, significantly reducing both waste and freight costs."),
    "rice": ("Artisanal Look", "Standard plastics failing to convey a natural, organic feel.", "We incorporate authentic Japanese rice paper layers that provide a premium, tactile, and natural aesthetic for artisanal products."),
    "valve": ("Gas Buildup", "Freshly roasted coffee beans releasing CO2 and bursting bags.", "Premium one-way degassing valves release built-up CO2 while keeping oxygen out, ensuring optimal bean freshness."),
    "urgent": ("Missed Launches", "Delayed packaging causing a missed product launch date.", "We prioritize urgent orders with expedited digital printing and direct air courier shipping to meet your critical deadlines."),
    "supplier": ("Supply Chain Stability", "Difficulty finding consistent packaging suppliers.", "As a dedicated manufacturer, we guarantee steady inventory and reliable fulfillment for your brand."),
    "standard": ("Cookie-Cutter Look", "Standard packaging failing to differentiate the brand.", "Custom sizes and vibrant printing allow your product to stand out on the shelf.")
}

general_pool = [
    ("Premium Brand Perception", "Flimsy packaging making the product look cheap on retail shelves.", "We use high-quality materials and custom finishes like matte, gloss, or spot UV to create a premium, shelf-ready appearance."),
    ("Accurate Sizing", "Pouches being too small for the product volume.", "Our experts provide custom sizing and volume testing to ensure a perfect fit for your specific product weight and density."),
    ("Material Flexibility", "Bags wrinkling or creasing easily and looking unprofessional.", "We utilize premium laminates that resist unsightly creasing, maintaining a smooth, attractive look throughout the supply chain."),
    ("Customer Unboxing Experience", "Hard-to-open bags frustrating the end consumer.", "We incorporate easy-tear notches and smooth zippers to provide a delightful and effortless unboxing experience."),
    ("Shelf Life Extension", "Short shelf life leading to food waste and profit loss.", "By customizing the OTR and WVTR to your specific product, we maximize shelf stability and reduce spoilage."),
    ("Puncture Resistance", "Sharp products puncturing the bag during shipping.", "Our durable, reinforced laminated materials offer exceptional puncture and tear resistance for maximum protection.")
]

result = {}
for key in keys:
    key_lower = key.lower()
    selected_concerns = []
    
    # Try to match keywords
    for kw, concern in keyword_map.items():
        if kw in key_lower:
            if concern not in selected_concerns:
                selected_concerns.append(concern)
            
    # Add from general pool until we have 5
    for concern in general_pool:
        if len(selected_concerns) >= 5:
            break
        if concern not in selected_concerns:
            selected_concerns.append(concern)
            
    final_5 = selected_concerns[:5]
    
    obj = {"title": "Buyer Concerns & Solutions"}
    for i in range(5):
        obj[f"concern{i+1}Title"] = final_5[i][0]
        obj[f"concern{i+1}Pain"] = final_5[i][1]
        obj[f"concern{i+1}Solution"] = final_5[i][2]
        
    result[key] = obj

out_path = "/Users/ryanmacmini/Desktop/1 App i made/Master Achieve Pack/achieve pack website/achieve-pack/scratch/buyer_concerns_en.json"
os.makedirs(os.path.dirname(out_path), exist_ok=True)
with open(out_path, "w") as f:
    json.dump(result, f, indent=2)

print(f"SUCCESS: Wrote JSON to {out_path}")
