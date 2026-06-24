import json, fcntl, os

locales_path = 'src/locales/en.json'

data_to_add = {
  "seo": {
    "title": "Fin Seal vs. Lap Seal | Back Seal Types | POUCH.ECO",
    "description": "Understand the structural differences between Fin Seals and Lap Seals on flexible pouches. Learn which back seal method is best for your custom packaging."
  },
  "hero": {
    "label": "KNOWLEDGE_BASE // SEALS",
    "titleLine1": "Seal the",
    "titleLine2": "Deal.",
    "desc": "Learn the critical differences between a Fin Seal and a Lap Seal. Understand how the back of your pouch is formed and why it matters for your product's safety.",
    "finSealTitle": "FIN SEAL (Inside to Inside)",
    "lapSealTitle": "LAP SEAL (Inside to Outside)",
    "backSeamTypes": "BACK SEAM TYPES"
  },
  "deepDive": {
    "titleLine1": "Fin Seal vs.",
    "titleLine2": "Lap Seal",
    "intro1": "When a flat piece of packaging film is folded over to create a pouch (like a potato chip bag or a coffee bag), the two edges of the film must be joined together running down the back of the package. This is called the \"Back Seam\" or \"Back Seal.\" There are two primary methods used to create this seal: the Fin Seal and the Lap Seal.",
    "intro2": "Choosing the wrong type of seal can result in burst bags during shipping, leaked products, and rejected inventory. It all comes down to how the inner and outer layers of your film interact with heat.",
    "finSeal": {
      "title": "The Fin Seal",
      "desc1": "A Fin Seal is created by bringing the two inside edges of the film together and sealing them ",
      "descHighlight": "Inside-to-Inside",
      "desc2": ". Because the inner layer of the packaging is designed to melt and bond under heat, this creates an extremely strong, air-tight seal. The sealed edges stick out from the back of the bag like a shark's fin (hence the name), though they are usually folded over flat against the bag.",
      "strengthLabel": "Strength:",
      "strengthDesc": "Maximum strength",
      "usageLabel": "Usage:",
      "usageDesc": "Heavy products, gas-flushed bags, liquids",
      "visualLabel": "Visual:",
      "visualDesc": "Creates a thicker seam down the back"
    },
    "lapSeal": {
      "title": "The Lap Seal",
      "desc1": "A Lap Seal is created by overlapping the edges of the film so that the inner layer of one edge seals against the outer layer of the other edge (",
      "descHighlight": "Inside-to-Outside",
      "desc2": "). Because you are sealing the meltable inner layer against the non-meltable outer layer, this seal is inherently weaker. It requires the outer film layer to have specific heat-sealable properties.",
      "strengthLabel": "Strength:",
      "strengthDesc": "Weaker",
      "usageLabel": "Usage:",
      "usageDesc": "Light snacks (chips), candy wrappers",
      "visualLabel": "Visual:",
      "visualDesc": "Completely flat, uses less material"
    },
    "whyFinSeal": {
      "title": "Why is the Fin Seal the Industry Standard?",
      "desc1": "At POUCH.ECO, the vast majority of our Stand-Up Pouches and Flat Bottom bags utilize a ",
      "descHighlight": "Fin Seal",
      "desc2": ".",
      "desc3": "The reason is simple: barrier protection and structural integrity. Most premium flexible packaging utilizes an outer layer made of PET or BOPP (which is heat resistant so it doesn't melt on the sealing jaws) and an inner layer made of PE or CPP (which melts easily to create the seal). If you try to make a Lap Seal with these materials, the PE will not bond properly to the PET, resulting in a weak seam that will burst when squeezed. A Fin Seal guarantees that the PE bonds perfectly with PE, creating an impenetrable weld."
    },
    "whenLapSeal": {
      "title": "When are Lap Seals Used?",
      "desc": "Lap seals are primarily used in high-speed, automated Form-Fill-Seal (VFFS) machines running single-layer or specialized co-extruded films (like a bag of potato chips). The main advantage of a Lap Seal is that it uses slightly less film material (since the edges just overlap instead of pinching together), which saves money when producing tens of millions of bags. For custom, multi-layer laminated pouches, however, the Fin Seal is far superior."
    }
  },
  "faq": {
    "titleLine1": "Sealing",
    "titleLine2": "FAQ",
    "qLabel": "Q:",
    "aLabel": "A:",
    "items": [
      {
        "q": "Do I need to choose which seal I want?",
        "a": "Usually, no. Our packaging engineers will automatically dictate a Fin Seal for almost all pre-made Stand-Up and Flat Bottom pouches to ensure maximum structural integrity and barrier performance."
      },
      {
        "q": "Can you print graphics over a Fin Seal?",
        "a": "Because a Fin Seal creates a physical flap running down the back of the bag (which is then folded over), any graphics that cross that seam will be interrupted. It is best practice to keep important text or barcodes away from the center back seam area in your dieline."
      },
      {
        "q": "Will a Fin Seal ruin the look of the back of my bag?",
        "a": "No. The fin is typically folded flat and tacked down to one side. It is a standard feature of almost all premium coffee and food packaging and is generally ignored by consumers."
      },
      {
        "q": "Can a Lap Seal hold liquids?",
        "a": "Generally, no. We strongly advise against using Lap Seals for liquids, purees, or heavy powders as the seam is highly susceptible to bursting under hydraulic pressure. Always use a Fin Seal for these products."
      }
    ]
  },
  "cta": {
    "title": "Trust the Seal",
    "desc": "Don't risk burst bags and ruined product. Our heavy-duty Fin Seals guarantee your product stays fresh and safe.",
    "button": "Get Your Custom Quote"
  }
}

with open(locales_path, 'r+') as f:
    fcntl.flock(f, fcntl.LOCK_EX)
    data = json.load(f)
    if 'seoPages' not in data:
        data['seoPages'] = {}
    if 'pages' not in data['seoPages']:
        data['seoPages']['pages'] = {}
    data['seoPages']['pages']['pouchFinSealLapSeal'] = data_to_add
    f.seek(0)
    json.dump(data, f, indent=4, ensure_ascii=False)
    f.truncate()
    fcntl.flock(f, fcntl.LOCK_UN)
