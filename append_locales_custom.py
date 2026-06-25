import json, fcntl

locales_path = 'src/locales/en.json'

data_to_add = {
  "seo": {
    "title": "Custom vs. Standard Packaging Guide | Combined SKU Discount Hack | Achieve Pack",
    "description": "Technical comparison of tailored B2B custom quote packaging vs standardized store products. Learn how combined SKU runs and premium Velcro zippers optimize your ROI."
  },
  "layout": {
    "title": "Custom vs. Standard Flexible Packaging Sourcing Guide",
    "description": "Understanding tailored B2B custom quote mechanics vs. budget-friendly group production runs.",
    "heroTitle": "Custom Sourcing vs. Standard Store runs",
    "heroSubtitle": "Volume Discount Hacks | Premium Closures | Bottom Gusset Mechanics",
    "introSummary": "Not all pouches are made equal. To help you choose between standard online checkout runs and full B2B dynamic quotes, this guide breaks down the engineering, mechanical setup, and cost differences behind co-printed group production, combined SKU grouping, and closure systems."
  },
  "s1": {
    "title": "Custom Dynamic Quotes vs. Group Production Store Products",
    "p1Html": "When sourcing custom flexible packaging, brands are often surprised by the pricing variance between a <strong>tailored B2B custom quotation</strong> and an <strong>online store product</strong>. The difference comes down to the production method: <strong>Group Production (Collective Runs)</strong> versus <strong>Custom Tailored Manufacturing</strong>.",
    "h1": "Standard Store (Group Production)",
    "d1": "Designed to minimize baseline setup costs by combining multiple brand print runs onto the same production web. To make this possible, several strict standards are maintained:",
    "l1_1Html": "<strong>Fixed Dimensions:</strong> Limited strictly to predefined templates (e.g. 100g, 250g, 500g).",
    "l1_2Html": "<strong>Unprinted Bottom Gusset:</strong> Left raw/silver/clear to preserve phototube registration sensors across changing SKU widths.",
    "l1_3Html": "<strong>Fixed Closures:</strong> Restricted to standard press-to-close zippers or open-tops without premium alternative closures.",
    "h2": "Tailored B2B Custom Quotes",
    "d2": "Your pouch is engineered from the ground up for your specific brand. Every aspect of the bag is customized to meet premium retail standards:",
    "l2_1Html": "<strong>Custom Dimensions:</strong> Engineered down to the millimeter to perfectly fit your product volume and bulk density.",
    "l2_2Html": "<strong>Fully Printed Bottom Gusset:</strong> Support for continuous graphics, branding, and barcodes underneath the pouch.",
    "l2_3Html": "<strong>Premium Closures:</strong> Optional integration of specialized closures like genuine Velcro brand press-to-close tracks."
  },
  "s2": {
    "title": "The Volume Discount Hack: Combined SKU Runs Explained",
    "p1Html": "If you sell multiple SKU variations—such as a <strong>Vanilla protein powder</strong> and a <strong>Chocolate protein powder</strong>—that share the exact same pouch dimensions, shape, and material specification, you can leverage one of flexible packaging’s greatest pricing strategies: **Combined SKU Runs**.",
    "h1": "How Combined SKU Grouping Works:",
    "d1": "Normally, setting up a print job requires extensive machine adjustments, mechanical plate changes, or high digital press calibration times. However, because our HP Indigo 20000 digital presses can transition between print designs instantaneously, we can print multiple artworks sequentially on the same web roll.",
    "label1": "Separate Setup (Expensive)",
    "desc1": "100 pcs Vanilla SKU + 100 pcs Chocolate SKU ordered separately = Charged at separate 100-pc pricing rates.",
    "label2": "Combined Run (Discount Hack)",
    "desc2": "Grouped together as a single 200-piece combined run = Maximizes volume discount, saving up to 25% per unit!"
  },
  "s3": {
    "title": "Closure Engineering: Standard Zippers vs. Premium Velcro",
    "p1": "The mechanism used to seal your pouch plays a huge role in brand perception, ease of opening, and product shelf life. Let's compare standard options against advanced upgrades:",
    "h1": "1. Standard Press-to-Close Zipper",
    "d1": "The standard plastic track utilizes interlocking male and female profiles that seal when pressed firmly together.",
    "l1_1": "• **Ideal For:** Liquids, snacks, pills, and standard retail goods.",
    "l1_2": "• **Limitations:** Fine powders (like cocoa, flour, whey, or matcha) can clog the tracks, making it difficult for consumers to fully close the bag.",
    "l1_3": "• **Cost:** Very economical, standard on all stock store configurations.",
    "badge": "Upgrade Option",
    "h2": "2. Premium Velcro® Packaging Closures",
    "d2": "Premium hook-to-hook Velcro brand sensory tracks align automatically and seal easily even when fine particles contaminate the closure track.",
    "l2_1": "• **Ideal For:** Protein powders, coffee grounds, spices, collagen, and organic grains.",
    "l2_2": "• **Advantages:** Powder-resistant, satisfying tactile and audible click feedback, extreme ease-of-use.",
    "l2_3": "• **Cost:** Incurs a small unit premium, available strictly via custom dynamic quotations."
  },
  "s4": {
    "title": "Store Related Items: Conventional Off-The-Shelf Alternatives",
    "p1": "If you do not require specialized sizes, custom Velcro closures, or fully printed bottom gussets, our **Conventional Stock & Digital Store** offers the absolute lowest minimum setup cost and the fastest turnaround time.",
    "h1": "Give Yourself a Heads Up: Standard Store Products Quick Access",
    "d1": "Explore our standard digital run items in high-barrier metalised and clear film laminates. These fixed-size items are optimized to ship in 15–20 days.",
    "linkHeader1": "Stand Up Pouches (Doypack)",
    "l1_1": "• Metalised, Resealable Zipper (Best Seller)",
    "l1_2": "• Metalised, No Zipper (Heat-Seal Top)",
    "l1_3": "• Clear Visibility, Resealable Zipper",
    "l1_4": "• Clear Visibility, No Zipper",
    "linkHeader2": "3 Side Seal Pouches (Flat Bags)",
    "l2_1": "• Metalised, Resealable Zipper",
    "l2_2": "• Metalised, No Zipper",
    "l2_3": "• Clear Visibility, Resealable Zipper",
    "l2_4": "• Clear Visibility, No Zipper"
  },
  "s5": {
    "title": "Not Sure Which Production Method Is Right for You?",
    "h1": "Let Us Optimize Your Packaging Spec",
    "p1": "Speak directly with Ryan Wong and our packaging engineers to see if you can utilize combined SKU runs, group production rates, or upgrade to powder-resistant Velcro closure tracks.",
    "btn1": "Book Technical Consultation",
    "btn2": "Browse Online Store",
    "footerText": "COMBINED SKU DEALS • DIGITAL DIGITAL PRESS GANG RUNS • VELCRO® & ZIPPER COMPATIBLE"
  },
  "faqs": {
    "q1": "Why does the bottom gusset remain unprinted on standard store products?",
    "a1": "Standardized group production runs multiple different customer designs on the same machine web. Because the widths and optical crop marks differ slightly, the bottom gusset zone is left unprinted to allow phototube registration sensors to properly trace and align the pouch cuts on the bag-making line without color collision.",
    "q2": "How do I group my SKU flavors together to get a higher volume discount?",
    "a2": "As long as your Vanilla, Chocolate, Strawberry, or other SKU flavors share the exact same physical size, material stack, and bag shape (e.g. all are 140x200mm Zipper Stand Up Pouches in Matte Metalised finish), our engineers can group them during dynamic B2B custom quotes. You will get the cumulative quantity pricing bracket!",
    "q3": "Is Velcro really better than standard zippers for powder SKU packaging?",
    "a3": "Yes, significantly. Standard zippers use physical friction locks that get clogged by particulate powders, forcing consumers to clean the tracks before closing. Velcro closures use micro-hooks that auto-align and seal securely even through layers of fine protein, organic collagen, flour, or ground coffee.",
    "q4": "What is the absolute minimum order quantity (MOQ) for custom dynamic quotes?",
    "a4": "For fully customized dimensions and custom printed gussets, our MOQ typically starts at 1,000 units per design. If you need smaller batches (100 to 500 units), standard store fixed-size pouches are the best cost-efficient starting point."
  }
}

with open(locales_path, 'r+') as f:
    fcntl.flock(f, fcntl.LOCK_EX)
    data = json.load(f)
    if 'seoPages' not in data:
        data['seoPages'] = {}
    if 'pages' not in data['seoPages']:
        data['seoPages']['pages'] = {}
    if 'customVsStandardPackaging' not in data['seoPages']['pages']:
        data['seoPages']['pages']['customVsStandardPackaging'] = {}
    data['seoPages']['pages']['customVsStandardPackaging'].update(data_to_add)
    f.seek(0)
    json.dump(data, f, indent=4, ensure_ascii=False)
    f.truncate()
    fcntl.flock(f, fcntl.LOCK_UN)
