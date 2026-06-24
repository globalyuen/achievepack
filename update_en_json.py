import json, fcntl

json_data = {
  "title": "What is a K-Seal Stand-Up Pouch? | Flexible Packaging | POUCH.ECO",
  "description": "Learn the difference between K-Seal, Doyen (U-Seal), and Plow Bottom gussets. Discover why K-Seal is the industry standard for heavier products.",
  "hero": {
    "badge": "KNOWLEDGE_BASE // BOTTOM_GUSSETS",
    "headlinePrefix": "Crack the",
    "headlineSuffix": "K-Seal.",
    "subheading": "Not all stand-up pouches are created equal. Dive into the engineering behind bottom gussets and why the K-Seal is the undisputed champion for holding weight.",
    "imgAlt": "Close up of the K-Seal design on the bottom corner of a stand up pouch",
    "imgBadge": "STRUCTURAL INTEGRITY"
  },
  "engineering": {
    "titlePrefix": "The Engineering of",
    "titleSuffix": "Bottom Gussets",
    "intro": "When a consumer looks at a Stand-Up Pouch (also known as a Doypack), they rarely think about how it actually stands up. The secret lies entirely in the engineering of the bottom gusset. The way the bottom fold is heat-sealed determines how much weight the bag can hold without tearing, and how stable it will be on a retail shelf. Among the different styles, the <0>K-Seal</0> is the heavy-duty standard.",
    "imgAlt": "High barrier pouch showing the structural stability of the gusset",
    "sections": [
      {
        "title": "What exactly is a K-Seal?",
        "paragraphs": [
          "A K-Seal gets its name from the appearance of the seals at the bottom corners of the pouch. If you look closely at the bottom edge of the bag, you will see heat seals that angle inward, resembling the letter \"K\".",
          "During manufacturing, the bottom gusset is inserted, and a diagonal seal is applied across the corners. This diagonal seal relieves stress from the very bottom corner point of the bag, distributing the weight of the product across a wider, reinforced area."
        ]
      },
      {
        "title": "K-Seal vs. Doyen (Round) Bottom",
        "paragraphs": [
          "The <0>Doyen (or Round Bottom)</0> is the other most common gusset style. Instead of an angled K-shape, the seal is a smooth, continuous \"U\" shape that curves across the bottom.",
          "Doyen seals are fantastic for lightweight products (like 2oz snack bags or small cosmetic samples) because the curved seal acts like a spring, forcing the bottom of the bag open so it stands up even when empty. However, because the Doyen seal does not reinforce the corners, putting a heavy product (like 2lbs of coffee) inside can cause the bottom corners to \"blow out\" or tear under the pressure. This is why the K-Seal is mandatory for heavier weights."
        ]
      },
      {
        "title": "K-Seal vs. Plow Bottom (Corner Gusset)",
        "paragraphs": [
          "A <0>Plow Bottom</0> bag is essentially a continuous piece of film folded at the bottom (like a V), with no bottom seal at all. The weight of the product pushes the fold flat, allowing it to stand. Plow bottoms are rarely used for heavy items because without seals to dictate the shape, the bottom can bulge unevenly, causing the bag to tip over on the shelf."
        ]
      }
    ],
    "prosCons": {
      "whenToUse": {
        "title": "When to use a K-Seal:",
        "list": [
          "✓ Heavy products (1lb, 2lb, 5lb bags)",
          "✓ Liquids and purees",
          "✓ Dense powders (Whey protein, sugar)",
          "✓ Large volume items (Pet food)"
        ]
      },
      "whenNotToUse": {
        "title": "When NOT to use a K-Seal:",
        "list": [
          "✗ Very light, single-serve items",
          "✗ Bags holding less than 4oz (100g)",
          "✗ When a fully flat bottom is required"
        ]
      }
    }
  },
  "faq": {
    "titlePrefix": "Gusset",
    "titleSuffix": "FAQ",
    "qPrefix": "Q:",
    "aPrefix": "A:",
    "questions": [
      {
        "q": "Does a K-Seal cost more than a Doyen seal?",
        "a": "No. The cost of a Stand-Up Pouch is driven by the dimensions and materials, not the shape of the bottom seal. We will automatically specify a K-Seal or Doyen seal based on the dimensions and intended weight of your product."
      },
      {
        "q": "Can a K-Seal bag stand up when it is empty?",
        "a": "Unlike a Doyen style bag which naturally springs open, a K-Seal bag tends to lay relatively flat when completely empty. It relies on the weight and volume of the product being dropped inside to push the gusset open and form a stable base."
      },
      {
        "q": "What is the maximum weight a K-Seal bag can hold?",
        "a": "With properly engineered multi-layer laminations, a large K-Seal stand-up pouch can comfortably hold 5 to 10 pounds (e.g., large pet food bags or bulk flour). For extreme weights (20+ lbs), woven polypropylene (WPP) bags or quad-seal formats are recommended."
      },
      {
        "q": "Are Flat Bottom bags better than K-Seal Stand-Up Pouches?",
        "a": "Flat Bottom (Box) bags offer superior shelf stability and an extra printable panel on the completely flat base. They are considered a more premium packaging format, but they are also more expensive to manufacture than standard K-Seal pouches."
      }
    ]
  },
  "cta": {
    "title": "Stand Out. Stand Up.",
    "desc": "Let our packaging engineers determine the perfect gusset and structure for your heavy-duty products.",
    "button": "Get Your Custom Quote"
  }
}

file_path = '/Users/ryanmacmini/Desktop/1 App i made/Master Achieve Pack/achieve pack website/achieve-pack/src/locales/en.json'
with open(file_path, 'r+') as f:
    fcntl.flock(f, fcntl.LOCK_EX)
    data = json.load(f)
    
    if 'seoPages' not in data:
        data['seoPages'] = {}
    if 'pages' not in data['seoPages']:
        data['seoPages']['pages'] = {}
        
    data['seoPages']['pages']['pouchKSealStandUpPouches'] = json_data
    
    f.seek(0)
    json.dump(data, f, indent=4, ensure_ascii=False)
    f.truncate()
    fcntl.flock(f, fcntl.LOCK_UN)

print("en.json updated successfully")
