import json, fcntl, os

locales_path = 'src/locales/en.json'

data_to_add = {
  "seo": {
    "title": "Digital vs Rotogravure Printing for Pouches | POUCH.ECO",
    "description": "Understand the difference between Digital (HP Indigo) and Rotogravure printing for flexible packaging. Learn about MOQs, print quality, setup costs, and finishes."
  },
  "hero": {
    "label": "KNOWLEDGE_BASE // PRINTING",
    "titleLine1": "Ink meets",
    "titleLine2": "Film.",
    "desc": "Demystifying the packaging printing process. Compare Digital vs. Rotogravure printing to determine the most cost-effective and visually stunning method for your brand.",
    "imgAlt": "Various printing finishes on custom pouches",
    "hexLabel": "CMYK + PANTONE"
  },
  "deepDive": {
    "titleLine1": "Digital vs. Rotogravure",
    "titleLine2": "Printing",
    "intro": "In the flexible packaging industry, the way your artwork is transferred onto the film dictates not only the visual quality of the final bag but also the minimum order quantities (MOQs) and the upfront costs. The two dominant technologies are HP Indigo Digital Printing and Traditional Rotogravure Printing. Understanding the difference is crucial to optimizing your packaging budget.",
    "digital": {
      "title": "Digital Printing",
      "bestForLabel": "Best For:",
      "bestFor": "Startups, multiple SKUs, seasonal designs.",
      "moqLabel": "MOQ:",
      "moq": "Very Low (500 - 1,000 pcs)",
      "setupLabel": "Setup Costs:",
      "setup": "$0 (No plate fees)",
      "leadLabel": "Lead Time:",
      "lead": "Fast (10-15 days)",
      "qualityLabel": "Quality:",
      "quality": "Excellent (HP Indigo 1200 dpi)",
      "costLabel": "Unit Cost:",
      "cost": "Higher per bag at low volumes."
    },
    "rotogravure": {
      "title": "Rotogravure",
      "bestForLabel": "Best For:",
      "bestFor": "Large established brands, high volume.",
      "moqLabel": "MOQ:",
      "moq": "High (10,000+ pcs per SKU)",
      "setupLabel": "Setup Costs:",
      "setup": "Cylinder Plate Fees ($100-$150 per color)",
      "leadLabel": "Lead Time:",
      "lead": "Longer (20-30 days)",
      "qualityLabel": "Quality:",
      "quality": "Flawless (Perfect Pantone matching)",
      "costLabel": "Unit Cost:",
      "cost": "Extremely low per bag at scale."
    },
    "howDigitalWorks": {
      "title": "How HP Indigo Digital Printing Works",
      "desc1": "Digital printing works much like a massive version of your office laser printer. Your digital PDF file is sent directly to the press, and the artwork is printed onto the film in one continuous pass.",
      "desc2": "Because there are no physical printing plates to engrave, the upfront setup cost is zero. This makes digital printing the absolute best choice for brands launching multiple flavor SKUs (e.g., 5 different coffee roasts) at low quantities. You can print 1,000 bags of each flavor without paying thousands of dollars in plate fees. POUCH.ECO utilizes state-of-the-art HP Indigo 20000 presses, ensuring vibrant, high-resolution CMYK graphics."
    },
    "howRotoWorks": {
      "title": "How Rotogravure Printing Works",
      "desc1": "Rotogravure is the traditional powerhouse of flexible packaging. The artwork is physically engraved onto massive metal cylinders (plates). Each color in your design requires a separate cylinder. The film passes over these spinning, ink-filled cylinders to build the image.",
      "desc2": "Because engraving the metal cylinders is expensive (typically $100 to $150 per color per SKU), the upfront cost is high. However, once the cylinders are made, the press runs at incredibly high speeds, making the actual cost per bag incredibly cheap. Rotogravure also allows for precise Pantone (PMS) spot color matching, metallic inks, and specialized spot UV varnishes."
    },
    "whichToChoose": {
      "title": "Which should you choose?",
      "desc": "The decision is almost entirely mathematical. If you are ordering fewer than 5,000 to 10,000 bags per design, Digital Printing is cheaper because you avoid plate fees. Once you cross the 10,000 bag threshold per design, the cheap unit cost of Rotogravure outweighs the initial cost of the plates, making it the most economical choice."
    }
  },
  "faq": {
    "titleLine1": "Printing",
    "titleLine2": "FAQ",
    "qLabel": "Q:",
    "aLabel": "A:",
    "items": [
      {
        "q": "Do I have to pay cylinder/plate fees every time I reorder?",
        "a": "No. For rotogravure printing, the cylinder plates are a one-time fee. We keep your plates in our climate-controlled facility, so you never pay for them again when reordering the exact same design."
      },
      {
        "q": "Can digital printing hit my exact Pantone (PMS) color?",
        "a": "Digital printing utilizes a CMYK process. While HP Indigo presses are incredibly advanced and can simulate about 90% of the Pantone spectrum very accurately, true, flawless Pantone spot color matching requires Rotogravure printing."
      },
      {
        "q": "Can I do a mix of Matte and Gloss (Spot UV) on digital?",
        "a": "While we can simulate some effects digitally, true Spot UV (where the bag is matte but your logo is high-gloss) requires a physical varnish plate, meaning it is only available via Rotogravure printing."
      },
      {
        "q": "I have 5 different flavors. Do I need plates for all of them?",
        "a": "If you use Rotogravure, yes. If your design has 5 colors, and you have 5 flavors, you would need 25 plates. This is why Digital Printing is the perfect solution for multi-SKU brands, as you pay zero plate fees."
      },
      {
        "q": "What color mode should my artwork be in?",
        "a": "All artwork submitted for packaging printing must be in CMYK color mode. If you submit RGB artwork (which is meant for screens), the colors will shift when printed."
      }
    ]
  },
  "cta": {
    "title": "Ready to Print?",
    "desc": "Whether you need 500 digitally printed bags or 50,000 rotogravure bags, we have the presses to make your brand pop.",
    "button": "Get Print Quote"
  }
}

with open(locales_path, 'r+') as f:
    fcntl.flock(f, fcntl.LOCK_EX)
    data = json.load(f)
    if 'seoPages' not in data:
        data['seoPages'] = {}
    if 'pages' not in data['seoPages']:
        data['seoPages']['pages'] = {}
    data['seoPages']['pages']['pouchPrintingTypes'] = data_to_add
    f.seek(0)
    json.dump(data, f, indent=4, ensure_ascii=False)
    f.truncate()
    fcntl.flock(f, fcntl.LOCK_UN)
