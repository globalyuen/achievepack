import json, fcntl

locales_path = 'src/locales/en.json'

data_to_add = {
  "seo": {
    "title": "5 Eco Packaging Mistakes Small Brands Make (And How to Avoid Them)",
    "description": "Avoid costly packaging mistakes that waste money and hurt your brand. Learn from real examples: over-ordering, wrong materials, greenwashing risks, and more. Expert advice from a packaging manufacturer."
  },
  "hero": {
    "title": "5 Eco Packaging Mistakes Small Brands Make",
    "subtitle": "And How to Avoid Them — Advice from a Packaging Manufacturer",
    "introSummary": "After working with hundreds of small brands and startups, we've seen the same packaging mistakes come up again and again. Some cost thousands of dollars, others damage brand trust. Here are the top 5 mistakes — and exactly how to avoid each one."
  },
  "cta": {
    "title": "Get Expert Packaging Advice — Free",
    "description": "Not sure where to start? Our team will review your product and recommend the best packaging solution.",
    "buttonText": "Book Free Consultation"
  },
  "sections": {
    "mistake1": {
      "title": "Mistake #1: Over-ordering on the First Run",
      "imgAlt": "Warehouse shelves full of excess custom packaging stock that cannot be used",
      "imgCaption": "Ordering 10,000 bags to save pennies per unit often leads to thousands of wasted units when a recipe or label change occurs.",
      "wrongTitle": "What brands do wrong",
      "wrongText": "They order 20,000 units on their very first run to get a lower unit price (e.g., $0.15 instead of $0.50). Then, a month later, they need to change the nutrition label, ingredient list, or bar code — and 19,000 bags end up in the trash.",
      "rightTitle": "What to do instead",
      "rightText": "Start with a small run (100–1,000 units) using digital printing. You will pay more per unit initially, but you will save thousands of dollars in wasted inventory and plate fees while you finalize your product-market fit.",
      "proTip": "💡 Pro tip: Only invest in plate printing (large volume) after your product has been in the market for 6+ months without artwork changes."
    },
    "mistake2": {
      "title": "Mistake #2: Choosing the Wrong Barrier Material",
      "imgAlt": "Spoiled coffee beans in poorly sealed kraft paper packaging",
      "imgCaption": "Without the correct barrier, coffee beans lose their aroma and natural oils can seep through paper.",
      "wrongTitle": "What brands do wrong",
      "wrongText": "They choose \"100% Kraft Paper\" because it looks natural and eco-friendly. But if they're selling coffee, jerky, or anything with oils/moisture, the oils seep through the paper and the product spoils in weeks.",
      "rightTitle": "What to do instead",
      "rightText": "Match the barrier to the product. Use metallized films (VMPET/AL) for coffee/tea, clear EVOH for high-barrier transparent windows, and simple PE/CPP for dry, non-sensitive goods.",
      "chartTitle": "Quick Barrier Guide:",
      "barrierCoffee": "Coffee/Tea: High barrier (AL/VMPET)",
      "barrierSnacks": "Snacks/Chips: Medium barrier (VMPET/EVOH)",
      "barrierApparel": "Apparel/Non-food: Low barrier (PE/CPP)"
    },
    "mistake3": {
      "title": "Mistake #3: Accidental Greenwashing",
      "imgAlt": "A generic green leaf logo on packaging with vague 'eco friendly' claims",
      "imgCaption": "Generic 'Eco' or 'Green' claims without third-party certification can lead to regulatory fines.",
      "wrongTitle": "What brands do wrong",
      "wrongText": "Printing \"100% Biodegradable\" or \"Eco-Friendly\" without certifications. In many countries (like the US and EU), these terms are regulated. If a customer throws a \"biodegradable\" bag in the trash, it will not degrade in a landfill, making the claim deceptive.",
      "rightTitle": "What to do instead",
      "rightText": "Be specific and use certified logos. Use \"Recyclable (PE #4)\" with a How2Recycle logo, or \"Compostable\" with a BPI certification mark.",
      "warning": "⚠️ Important: California SB 343, EU Packaging Directive, and FTC Green Guides all restrict unsubstantiated environmental claims. Non-compliance can result in fines up to $50,000 per violation."
    },
    "mistake4": {
      "title": "Mistake #4: Neglecting the Unboxing Experience",
      "imgAlt": "Perfect ecommerce unboxing experience with kraft mailer box, branded pouch, and tissue paper",
      "imgCaption": "A cohesive unboxing experience dramatically increases customer retention and brand loyalty.",
      "wrongTitle": "What brands do wrong",
      "wrongText": "Focus only on shelf appeal but forget that DTC customers receive products in the mail. A plain brown box with a beautiful pouch inside feels disconnected.",
      "rightTitle": "What to do instead",
      "rightText": "Design a cohesive experience: branded outer packaging + inner pouch + thank-you card. Even a simple sticker on a kraft mailer bag creates a premium feel."
    },
    "mistake5": {
      "title": "Mistake #5: Not Planning for Scale",
      "wrongTitle": "What brands do wrong",
      "wrongText": "Use a supplier that only does small runs. When they need 50,000 bags, they have to switch suppliers and redo everything — artwork, tooling, testing.",
      "rightTitle": "What to do instead",
      "rightText": "Choose a supplier (like Achieve Pack) that offers both small-run digital and large-run plate printing. Same factory, same quality, seamless scaling from 100 to 100,000+ pieces.",
      "advantage": "🚀 Achieve Pack advantage: We keep your artwork files and plate specifications on record. When you're ready to scale, just tell us the quantity — we handle the rest with zero redesign needed."
    },
    "achievepackEcoMaterials": {
      "title": "AchievePack Sustainable Material Specifications"
    }
  },
  "faqs": [
    {
      "question": "What is the biggest mistake small brands make with packaging?",
      "answer": "Over-ordering on the first run. Many startups order 10,000+ units to get a better price, but then need to change their design after launch. Starting with 500-1,000 units via digital printing (no plate fees) lets you test the market and iterate before committing to a large order."
    },
    {
      "question": "Can I use \"eco-friendly\" on my packaging labels?",
      "answer": "Be careful — terms like \"eco-friendly,\" \"green,\" and \"sustainable\" are vague and can violate FTC Green Guides in the USA and EU regulations. Instead, use specific certified claims like \"Certified Compostable — BPI\" or \"Recyclable — How2Recycle.\" Always include the certification logo."
    },
    {
      "question": "How many units should I order for my first packaging run?",
      "answer": "We recommend 500-1,000 units for your first run. This gives you enough inventory to test the market for 2-3 months while keeping costs low. Digital printing allows full-color custom designs with no plate fees at this quantity. You can scale to 5,000+ on your second order for 30-50% lower per-unit costs."
    },
    {
      "question": "What is the most common packaging design mistake?",
      "answer": "Not leaving enough space for required information. Many brands design beautiful packaging but forget to account for nutrition labels, barcodes, lot codes, and regulatory text. Always plan your artwork with mandatory elements first, then design around them."
    }
  ],
  "relatedLinks": [
    {
      "title": "Low MOQ Packaging",
      "description": "Start from 100 pieces"
    },
    {
      "title": "Packaging Cost Guide",
      "description": "Understand real prices"
    },
    {
      "title": "Compostable vs Recyclable",
      "description": "Choose the right material"
    },
    {
      "title": "Request Free Samples",
      "description": "Test before you buy"
    }
  ]
}

with open(locales_path, 'r+') as f:
    fcntl.flock(f, fcntl.LOCK_EX)
    data = json.load(f)
    if 'seoPages' not in data:
        data['seoPages'] = {}
    if 'pages' not in data['seoPages']:
        data['seoPages']['pages'] = {}
    data['seoPages']['pages']['ecoPackagingMistakes'] = data_to_add
    f.seek(0)
    json.dump(data, f, indent=4, ensure_ascii=False)
    f.truncate()
    fcntl.flock(f, fcntl.LOCK_UN)
