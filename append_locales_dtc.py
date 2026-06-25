import json, fcntl

locales_path = 'src/locales/en.json'

data_to_add = {
  "seo": {
    "title": "DTC Sustainable Packaging | Logistics & Brand Strategy | Achieve Pack",
    "description": "Optimize your DTC brand with sustainable packaging. 800+ words on logistics engineering, DIM weight reduction, premium unboxing, and circular economy loyalty."
  },
  "layout": {
    "title": "DTC Sustainable Packaging: Logistics Optimized",
    "description": "Establishing technical authority in direct-to-consumer packaging engineering and sustainable unboxing experiences.",
    "heroTitle": "Lighter. Faster. Sustainable.",
    "heroSubtitle": "DIM Weight Optimized | Premium Unboxing | 100% Recyclable | Low MOQ",
    "introSummary": "In the competitive DTC landscape, your packaging is your brand's physical representative. This guide outlines how we use material science and logistics engineering to help you reduce shipping costs, eliminate waste, and deliver a sustainable unboxing experience that builds lasting customer loyalty."
  },
  "s1": {
    "title": "DTC Sustainable Packaging: Engineering the Unboxing Experience",
    "p1Html": "Direct-to-Consumer (DTC) brands face a unique packaging challenge: the container must survive a <strong>multi-touch logistics cycle</strong> while delivering a premium <strong>sustainable unboxing experience</strong>.",
    "h1": "The DTC Friction",
    "l1_1": "• High shipping costs (DIM weight)",
    "l1_2": "• Fragile packaging failure during transit",
    "l1_3": "• Consumer 'Packaging Rage' over plastic waste",
    "l1_4": "• Lack of brand consistency across SKUs",
    "h2": "The Achieve Pack Solution",
    "l2_1": "• Lightweight Flexible Pouch engineering",
    "l2_2": "• Puncture-Resistant high-barrier laminates",
    "l2_3": "• 100% Recyclable Mono-PE structures",
    "l2_4": "• Premium Matte/Soft-Touch finishes",
    "p2Html": "At Achieve Pack, we help DTC brands optimize their packaging for <strong>profitability and planet</strong>. By replacing rigid containers with lightweight flexible pouches, we help you slash shipping carbon, reduce warehouse space, and provide a tactile, sustainable experience your customers will love."
  },
  "s2": {
    "title": "Logistics Engineering: Reducing DIM Weight",
    "p1Html": "In DTC, you don't just ship products; you ship air. Our engineers perform a <strong>Logistics Audit</strong> to ensure your packaging is 'right-sized' to minimize <strong>Dimensional Weight (DIM)</strong> charges.",
    "h1": "Weight Reduction",
    "d1": "Flexible pouches weigh up to 80% less than glass or rigid PET jars, directly lowering per-unit freight costs.",
    "h2": "Density Gains",
    "d2": "Ship 5x to 10x more empty units in the same truck volume compared to rigid containers.",
    "h3": "Puncture Resistance",
    "d3": "Engineered multi-layer films (NY/PE) ensure your product arrives intact despite rough handling.",
    "caption": "EEAT Insight: Lightweight flexible structures are the primary tool for reducing Scope 3 logistics carbon"
  },
  "s3": {
    "title": "Premium Sustainable Finishes",
    "p1Html": "Sustainable doesn't have to look \"brown and boring\". We utilize advanced printing and coating technology to deliver a <strong>luxury sustainable aesthetic</strong>.",
    "h1": "Tactile & Visual Features",
    "h1_1": "Soft-Touch Matte",
    "d1_1": "A velvety, premium hand-feel that signals quality to the consumer immediately upon contact.",
    "h1_2": "Digital Metallic Effects",
    "d1_2": "Eye-catching foil-like effects without the environmental burden of traditional hot-stamping.",
    "h1_3": "Recyclable Kraft Textures",
    "d1_3": "The look of paper with the barrier performance of high-tech polymers, in a 100% recyclable structure.",
    "h2": "Color Precision",
    "d2Html": "We utilize <strong>G7 Master Certified</strong> color matching to ensure your DTC brand identity is consistent across your entire product line, from the primary pouch to the shipping mailer."
  },
  "s4": {
    "title": "Circular Loyalty: Engaging the Customer",
    "p1Html": "Sustainable packaging is a powerful tool for customer retention. By providing a <strong>clear disposal pathway</strong>, you build trust and loyalty with your audience.",
    "caption": "Recycling Ready: High-clarity messaging on 100% recyclable mono-PE structures",
    "h1": "Transparency Milestones",
    "l1Html": "<strong>How2Recycle Aligned:</strong> Clear, standardized labeling for consumer disposal.",
    "l2Html": "<strong>QR Code Integration:</strong> Link to digital LCAs and localized recycling instructions.",
    "l3Html": "<strong>Plastic Tax Proof:</strong> Prove your 30% PCR content to environmentally conscious buyers."
  },
  "s5": {
    "title": "Optimize Your DTC Brand Today",
    "h1": "Lighter. Stronger. Sustainable.",
    "p1": "Ready to reduce your DTC shipping costs and carbon footprint? Our engineering team will review your current packaging and design your upgrade.",
    "btn1": "Book DTC Strategy Session",
    "btn2": "Order D2C Finish Samples",
    "footerText": "LOGISTICS OPTIMIZED • 100% RECYCLABLE • LOW MOQ DIGITAL • PREMIUM FINISHES"
  },
  "faqs": {
    "q1": "How much weight can I save by switching to flexible pouches?",
    "a1": "Depending on your current rigid container (glass vs. PET), you can expect a 70% to 90% reduction in primary packaging weight, which directly translates to lower freight and carbon costs.",
    "q2": "Can flexible pouches handle liquid DTC products?",
    "a2": "Yes. Our high-performance laminates are engineered for liquid laundry detergents, soap refills, and even aggressive chemical products, featuring anti-leak spout and fitment technology.",
    "q3": "Do you offer custom sizes for subscription boxes?",
    "a3": "Absolutely. We specialize in custom-dimensioned pouches that are 'right-sized' for standard mailers (like USPS/FedEx sizes) to ensure you aren't paying for shipping air.",
    "q4": "What is your MOQ for custom printed DTC pouches?",
    "a4": "Utilizing our digital HP Indigo technology, we can offer custom printed pouches with MOQs as low as 500 units per SKU, ideal for product launches and subscription variety packs."
  }
}

with open(locales_path, 'r+') as f:
    fcntl.flock(f, fcntl.LOCK_EX)
    data = json.load(f)
    if 'seoPages' not in data:
        data['seoPages'] = {}
    if 'pages' not in data['seoPages']:
        data['seoPages']['pages'] = {}
    if 'dTCSustainablePackaging' not in data['seoPages']['pages']:
        data['seoPages']['pages']['dTCSustainablePackaging'] = {}
    data['seoPages']['pages']['dTCSustainablePackaging'].update(data_to_add)
    f.seek(0)
    json.dump(data, f, indent=4, ensure_ascii=False)
    f.truncate()
    fcntl.flock(f, fcntl.LOCK_UN)
