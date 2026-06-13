export interface WorkCard {
  keyPrefix: string;
  title: string;
  tag: string;
  desc: string;
  image: string;
  badgeType: 'eco' | 'accent' | 'luxury' | 'liquid';
  link: string;
}

export interface KnowHowCard {
  keyPrefix: string;
  title: string;
  desc: string;
  link: string;
  image: string;
  tag: string;
  badgeType: 'eco' | 'accent' | 'luxury' | 'liquid';
}

export const ourWorkCards: WorkCard[] = [
  {
    keyPrefix: "work_0",
    title: "Compostable Coffee Stand-Up Pouch",
    tag: "Compostable",
    desc: "Plant-based high-barrier stand-up pouches with degassing valves.",
    image: "/imgs/clients-sample/IMG_6311.jpg",
    badgeType: "eco",
    link: "/quotes/stand-up-pouch"
  },
  {
    keyPrefix: "work_1",
    title: "Kraft Flat-Bottom Tea Pouch",
    tag: "Kraft Paper",
    desc: "Earthy, organic kraft outer layers with certified compostable barrier lining.",
    image: "/imgs/clients-sample/IMG_6312.jpg",
    badgeType: "eco",
    link: "/quotes/flat-bottom"
  },
  {
    keyPrefix: "work_2",
    title: "Recyclable Matte Snack Bag",
    tag: "Recyclable",
    desc: "100% recyclable mono-PE film with matte soft-touch finish.",
    image: "/imgs/clients-sample/IMG_8013.jpg",
    badgeType: "accent",
    link: "/quotes/three-side-seal"
  },
  {
    keyPrefix: "work_3",
    title: "Metallic Luxury Stand-Up Pouch",
    tag: "High Barrier",
    desc: "Premium metalized lining providing ultra-high moisture and oxygen barriers.",
    image: "/imgs/clients-sample/IMG_8016.jpg",
    badgeType: "luxury",
    link: "/quotes/stand-up-pouch"
  },
  {
    keyPrefix: "work_4",
    title: "Clear-Window Compostable Pouch",
    tag: "Eco-Friendly",
    desc: "Compostable kraft stand-up pouch featuring a clear plant-based window.",
    image: "/imgs/clients-sample/IMG_8020.jpg",
    badgeType: "eco",
    link: "/quotes/stand-up-pouch"
  },
  {
    keyPrefix: "work_5",
    title: "Spouted Juice & Liquid Pouch",
    tag: "Liquids",
    desc: "Heavy-duty laminated structures with rigid spouts for leakproof transit.",
    image: "/imgs/clients-sample/IMG_8028.jpg",
    badgeType: "liquid",
    link: "/quotes/spouted-pouch"
  },
  {
    keyPrefix: "work_6",
    title: "Custom Printed Stand-Up Pouch",
    tag: "Digital Print",
    desc: "High-resolution digital print sample with low minimum order quantity.",
    image: "/imgs/clients-sample/IMG_8032.jpg",
    badgeType: "accent",
    link: "/quotes/stand-up-pouch"
  },
  {
    keyPrefix: "work_7",
    title: "Premium Black Matte Coffee Bag",
    tag: "Specialty",
    desc: "Sleek matte black flat bottom bag with integrated pocket zipper.",
    image: "/imgs/clients-sample/IMG_8034.jpg",
    badgeType: "luxury",
    link: "/quotes/flat-bottom"
  },
  {
    keyPrefix: "work_8",
    title: "Recyclable Mono-PE Zipper Pouch",
    tag: "Recyclable",
    desc: "Fully circular design with recyclable press-to-close zippers.",
    image: "/imgs/clients-sample/IMG_8042.jpg",
    badgeType: "accent",
    link: "/quotes/three-side-seal"
  },
  {
    keyPrefix: "work_9",
    title: "Bio-PE SugarCane Supplement Bag",
    tag: "Bio-PE",
    desc: "Sugarcane-derived bioplastics helping brands reduce carbon emissions.",
    image: "/imgs/clients-sample/IMG_8043.jpg",
    badgeType: "eco",
    link: "/quotes/stand-up-pouch"
  },
  {
    keyPrefix: "work_10",
    title: "PCR Recycled Plastic Pouch",
    tag: "PCR Plastic",
    desc: "Incorporating post-consumer recycled plastics into structural layers.",
    image: "/imgs/clients-sample/IMG_8048.jpg",
    badgeType: "luxury",
    link: "/quotes/stand-up-pouch"
  },
  {
    keyPrefix: "work_11",
    title: "Ecosential Kraft Mailer Bag",
    tag: "Paper Mailer",
    desc: "Heavy-duty recycled kraft paper mailer bags with self-sealing adhesive strips.",
    image: "/imgs/clients-sample/IMG_8053.jpg",
    badgeType: "eco",
    link: "/store"
  },
  {
    keyPrefix: "work_12",
    title: "Home Compostable Nuts Pouch",
    tag: "Home Compost",
    desc: "TÜV OK Compost HOME certified stand-up pouch for organic snacks.",
    image: "/all-product-photos/IMG_4362.webp",
    badgeType: "eco",
    link: "/quotes/stand-up-pouch"
  },
  {
    keyPrefix: "work_13",
    title: "Gusseted Side Coffee Pouch",
    tag: "Side Gusset",
    desc: "Expandable side gussets with quad seal structure for stable shelf layout.",
    image: "/all-product-photos/IMG_4372.webp",
    badgeType: "accent",
    link: "/quotes/flat-bottom"
  },
  {
    keyPrefix: "work_14",
    title: "Holographic High-Luxe Box",
    tag: "Rigid Box",
    desc: "Corrugated shipping mailers with vibrant holographic foil designs.",
    image: "/all-product-photos/IMG_4385.webp",
    badgeType: "luxury",
    link: "/store?category=boxes"
  },
  {
    keyPrefix: "work_15",
    title: "Eco-Friendly Pet Treat Bag",
    tag: "Pet Treats",
    desc: "Puncture-resistant laminations designed for shelf longevity and grease-resistance.",
    image: "/all-product-photos/IMG_4395.webp",
    badgeType: "liquid",
    link: "/quotes/stand-up-pouch"
  },
  {
    keyPrefix: "work_16",
    title: "Compostable Matte White Pouch",
    tag: "Compostable",
    desc: "Eco-friendly matte white stand-up pouches with organic sugar cane paper styling.",
    image: "/all-product-photos/IMG_4407.webp",
    badgeType: "eco",
    link: "/quotes/stand-up-pouch"
  },
  {
    keyPrefix: "work_17",
    title: "Kraft Side-Gusset Tea Bag",
    tag: "Kraft Paper",
    desc: "High-barrier side-gusset bags for herbal teas with block bottom.",
    image: "/all-product-photos/IMG_4414.webp",
    badgeType: "eco",
    link: "/quotes/flat-bottom"
  },
  {
    keyPrefix: "work_18",
    title: "Mono-PE Circular Supplement Bag",
    tag: "Recyclable",
    desc: "Recyclable matte mono-PE supplement bag with heavy-duty zipper.",
    image: "/all-product-photos/IMG_4425.webp",
    badgeType: "accent",
    link: "/quotes/three-side-seal"
  },
  {
    keyPrefix: "work_19",
    title: "Clear-Front Compostable Pouch",
    tag: "Eco-Friendly",
    desc: "Clear barrier front structure showcasing gourmet coffee beans.",
    image: "/all-product-photos/IMG_4447.webp",
    badgeType: "eco",
    link: "/quotes/stand-up-pouch"
  },
  {
    keyPrefix: "work_20",
    title: "High-Barrier Spouted Purée Pouch",
    tag: "Liquids",
    desc: "Spouted pure-PE packaging for organic baby food and purées.",
    image: "/all-product-photos/IMG_4456.webp",
    badgeType: "liquid",
    link: "/quotes/spouted-pouch"
  },
  {
    keyPrefix: "work_21",
    title: "Matte Black Custom Coffee Bag",
    tag: "Specialty",
    desc: "Modern matte black flat bottom bag featuring front pocket zipper.",
    image: "/all-product-photos/IMG_4464.webp",
    badgeType: "luxury",
    link: "/quotes/flat-bottom"
  },
  {
    keyPrefix: "work_22",
    title: "Holographic Metallic Gift Pouch",
    tag: "High Barrier",
    desc: "Shimmering holographic stand-up bag with premium aroma barrier.",
    image: "/all-product-photos/IMG_4474.webp",
    badgeType: "luxury",
    link: "/quotes/stand-up-pouch"
  },
  {
    keyPrefix: "work_23",
    title: "Circular Mono-PE Jerky Pouch",
    tag: "Recyclable",
    desc: "High oxygen barrier mono-PE film suitable for cured meats and jerky.",
    image: "/all-product-photos/IMG_4486.webp",
    badgeType: "accent",
    link: "/quotes/three-side-seal"
  },
  {
    keyPrefix: "work_24",
    title: "Sugarcane Bio-PE Protein Pack",
    tag: "Bio-PE",
    desc: "Sugarcane base material for heavy supplement pouches.",
    image: "/all-product-photos/IMG_4495.webp",
    badgeType: "eco",
    link: "/quotes/stand-up-pouch"
  },
  {
    keyPrefix: "work_25",
    title: "Corrugated Kraft Shipping Mailer",
    tag: "Paper Mailer",
    desc: "Rigid biodegradable cardboard shipping mailers with double adhesive.",
    image: "/all-product-photos/IMG_4503.webp",
    badgeType: "eco",
    link: "/store"
  },
  {
    keyPrefix: "work_26",
    title: "Certified Compostable Nut Bag",
    tag: "Home Compost",
    desc: "Safe home-composting pouch designed for dry nuts and seeds.",
    image: "/all-product-photos/IMG_4513.webp",
    badgeType: "eco",
    link: "/quotes/stand-up-pouch"
  },
  {
    keyPrefix: "work_27",
    title: "Expandable Side Gusset Coffee Pack",
    tag: "Side Gusset",
    desc: "Quad seal side gusset bag with internal degassing valve.",
    image: "/all-product-photos/IMG_4525.webp",
    badgeType: "accent",
    link: "/quotes/flat-bottom"
  },
  {
    keyPrefix: "work_28",
    title: "Premium Glossy Coffee Pouch",
    tag: "Digital Print",
    desc: "Vibrant high-gloss digital printing on recyclable barrier films.",
    image: "/all-product-photos/IMG_4534.webp",
    badgeType: "accent",
    link: "/quotes/stand-up-pouch"
  },
  {
    keyPrefix: "work_29",
    title: "Puncture-Resistant Pet Food Pack",
    tag: "Pet Treats",
    desc: "Reinforced structure preventing tears and securing freshness.",
    image: "/all-product-photos/IMG_4543.webp",
    badgeType: "liquid",
    link: "/quotes/stand-up-pouch"
  },
  {
    keyPrefix: "work_30",
    title: "Certified Compostable Snacks Pouch",
    tag: "Compostable",
    desc: "High-barrier plant-based flexible stand-up packaging for organic snacks and granola.",
    image: "/all-product-photos/IMG_4561.webp",
    badgeType: "eco",
    link: "/quotes/stand-up-pouch"
  },
  {
    keyPrefix: "work_31",
    title: "Eco-Luxe Matte Box & Pouch Set",
    tag: "Custom Set",
    desc: "Vibrant custom-printed rigid boxes paired with matching barrier stand-up pouches.",
    image: "/all-product-photos/IMG_4562.webp",
    badgeType: "luxury",
    link: "/quotes/stand-up-pouch"
  },
  {
    keyPrefix: "work_32",
    title: "Premium Kraft Paper Flat-Bottom Bag",
    tag: "Kraft Paper",
    desc: "Block bottom bag with organic kraft outer layer and compostable high-barrier lining.",
    image: "/all-product-photos/IMG_4563.webp",
    badgeType: "eco",
    link: "/quotes/flat-bottom"
  },
  {
    keyPrefix: "work_33",
    title: "Heavy-Duty Recyclable Side-Gusset Pouch",
    tag: "Recyclable",
    desc: "Mono-PE side-gusseted structures designed for stable retail shelving and durability.",
    image: "/all-product-photos/IMG_4564.webp",
    badgeType: "accent",
    link: "/quotes/flat-bottom"
  },
  {
    keyPrefix: "work_34",
    title: "High-Barrier Spouted Purée Pouch",
    tag: "Liquids",
    desc: "Heavy-duty laminated spouted pouch with tamper-evident caps for liquids and purees.",
    image: "/all-product-photos/IMG_4565.webp",
    badgeType: "liquid",
    link: "/quotes/spouted-pouch"
  },
  {
    keyPrefix: "work_35",
    title: "Luxury Holographic Supplement Bag",
    tag: "High Luxe",
    desc: "Stunning holographic foil printing on heavy supplement packaging with press-to-close zipper.",
    image: "/all-product-photos/IMG_4567.webp",
    badgeType: "luxury",
    link: "/quotes/stand-up-pouch"
  },
  {
    keyPrefix: "work_36",
    title: "Eco-Friendly Recycled Kraft Mailer",
    tag: "PCR Paper",
    desc: "Heavy-duty recycled kraft mailing bags featuring self-sealing double adhesive strips.",
    image: "/all-product-photos/IMG_4569.webp",
    badgeType: "eco",
    link: "/store"
  }
];

export const seoKnowHowCards: KnowHowCard[] = [
  {
    keyPrefix: "knowhow_0",
    title: "Compostable vs Recyclable",
    desc: "Deciding between circular plastic recovery and organic composting paths for your packaging.",
    link: "/blog/compostable-vs-recyclable",
    image: "/imgs/seo-photos/a_compostable_vs_recyclable_packaging_4528107.jpg",
    tag: "Analysis",
    badgeType: "eco"
  },
  {
    keyPrefix: "knowhow_1",
    title: "Packaging Cost Guide",
    desc: "Complete breakdown of plate charges, setup fees, material costs, and wholesale volume tiers.",
    link: "/blog/packaging-cost-guide",
    image: "/imgs/seo-photos/a_packaging_cost_comparison_8724501.jpg",
    tag: "Finance",
    badgeType: "accent"
  },
  {
    keyPrefix: "knowhow_2",
    title: "Eco Packaging Mistakes",
    desc: "Avoid common design and material selection errors that disrupt commercial supply chains.",
    link: "/blog/eco-packaging-mistakes",
    image: "/imgs/seo-photos/a_packaging_mistakes_overview_6183920.jpg",
    tag: "Strategy",
    badgeType: "luxury"
  },
  {
    keyPrefix: "knowhow_3",
    title: "EU PPWR Compliance",
    desc: "Understanding the new European Union packaging regulations and recycling requirements.",
    link: "/blog/eu-ppwr-compliance-guide",
    image: "/imgs/seo-photos/a_eu_ppwr_compliant_pouch_achieve_pack_3186238.webp",
    tag: "Regulations",
    badgeType: "eco"
  },
  {
    keyPrefix: "knowhow_4",
    title: "Compostable Zippers",
    desc: "How biodegradable press-to-close zippers preserve freshness without polluting composting streams.",
    link: "/blog/compostable-zipper-no-removal",
    image: "/imgs/samples/kraft-compostable-zipper.png",
    tag: "Technology",
    badgeType: "eco"
  },
  {
    keyPrefix: "knowhow_5",
    title: "Foil Stamping Recyclability",
    desc: "Assessing the impact of hot and cold foil stamping on paperboard and plastic recycling.",
    link: "/blog/stamp-foil-recyclability",
    image: "/imgs/seo-photos/a_compostable_packaging_pouch_achieve_pack_2674607.webp",
    tag: "Design",
    badgeType: "luxury"
  },
  {
    keyPrefix: "knowhow_6",
    title: "Compostable Materials",
    desc: "Overview of organic starch-based polymers and plant cell membranes that biodegrade safely.",
    link: "/materials/compostable",
    image: "/imgs/pouch/materials/pouch_compost_hero.png",
    tag: "Materials",
    badgeType: "eco"
  },
  {
    keyPrefix: "knowhow_7",
    title: "Recyclable Mono-PE",
    desc: "Engineered single-polymer films with EVOH barrier that qualify for standard recycling streams.",
    link: "/materials/recyclable-mono-pe",
    image: "/imgs/4-infograhic/recyclable.webp",
    tag: "Materials",
    badgeType: "accent"
  },
  {
    keyPrefix: "knowhow_8",
    title: "Sugarcane Bio-PE",
    desc: "Plant-based polyethylene films derived from sugarcane that reduce carbon footprint.",
    link: "/materials/bio-pe",
    image: "/imgs/4-infograhic/Bio-PE.webp",
    tag: "Materials",
    badgeType: "eco"
  },
  {
    keyPrefix: "knowhow_9",
    title: "Post-Consumer Recycled",
    desc: "Reusing plastic ocean waste and curbside recyclables to fabricate premium composite barrier films.",
    link: "/materials/pcr",
    image: "/imgs/4-infograhic/PCR.webp",
    tag: "Materials",
    badgeType: "luxury"
  },
  {
    keyPrefix: "knowhow_10",
    title: "Stand Up Pouches",
    desc: "The classic retail packaging format with bottom gusset and custom resealable zippers.",
    link: "/packaging/stand-up-pouches",
    image: "/imgs/pouch-shape/achieve-pack-sup-lifestyle.png",
    tag: "Packaging",
    badgeType: "eco"
  },
  {
    keyPrefix: "knowhow_11",
    title: "Flat Bottom Bags",
    desc: "Maximum stability with five printable panels, ideal for heavy coffee beans and dry pet food.",
    link: "/packaging/flat-bottom-bags",
    image: "/imgs/pouch-shape/flat-bottom-premium.png",
    tag: "Packaging",
    badgeType: "accent"
  },
  {
    keyPrefix: "knowhow_12",
    title: "Spouted Liquid Pouches",
    desc: "Flexible bottle-shaped pouches with fitment caps designed to hold cosmetics, drinks, and purees.",
    link: "/packaging/spout-pouches",
    image: "/imgs/seo-pages/compostable-spouted-pouches-seo-infographic.png",
    tag: "Packaging",
    badgeType: "liquid"
  },
  {
    keyPrefix: "knowhow_13",
    title: "Custom Printed Boxes",
    desc: "Sturdy corrugated cardboard boxes, mailers, and custom retail displays with custom finishes.",
    link: "/packaging/custom-boxes",
    image: "/imgs/seo-pages/custom-vs-standard-packaging-seo-infographic.png",
    tag: "Packaging",
    badgeType: "luxury"
  },
  {
    keyPrefix: "knowhow_14",
    title: "Startup Founder Solutions",
    desc: "Low MOQ, design support, and rapid prototyping workflows for launching products.",
    link: "/solutions/startup-founder",
    image: "/imgs/seo-pages/startup-founder-seo-infographic.png",
    tag: "Solutions",
    badgeType: "accent"
  },
  {
    keyPrefix: "knowhow_15",
    title: "Ecommerce Brand Packaging",
    desc: "Optimizing mailers, shipping boxes, and secondary pouches for D2C transit safety.",
    link: "/solutions/ecommerce-brand",
    image: "/imgs/seo-pages/ecommerce-brand-seo-infographic.png",
    tag: "Solutions",
    badgeType: "luxury"
  },
  {
    keyPrefix: "knowhow_16",
    title: "Coffee Roaster Packaging",
    desc: "High-barrier foil stand-up and flat bottom bags equipped with degassing valves.",
    link: "/solutions/coffee-roaster",
    image: "/imgs/seo-pages/coffee-roaster-seo-infographic.png",
    tag: "Solutions",
    badgeType: "accent"
  },
  {
    keyPrefix: "knowhow_17",
    title: "Snack Brand Packaging",
    desc: "Lightproof and air-tight pouches to maintain crispness and extend retail shelf life.",
    link: "/solutions/snack-brand-manager",
    image: "/imgs/seo-pages/snack-brand-manager-seo-infographic.png",
    tag: "Solutions",
    badgeType: "liquid"
  },
  {
    keyPrefix: "knowhow_18",
    title: "Minimalist D2C Branding",
    desc: "Designing clean packaging layouts that reduce ink waste and capture consumer interest.",
    link: "/topics/minimalist-d2c-packaging",
    image: "/imgs/seo-pages/minimalist-d2c-packaging-seo-infographic.png",
    tag: "Branding",
    badgeType: "eco"
  },
  {
    keyPrefix: "knowhow_19",
    title: "Low MOQ Startup Tips",
    desc: "Strategic advice on split-shipping, template reuse, and digital runs for multi-SKU brands.",
    link: "/topics/low-moq-startup-packaging",
    image: "/imgs/seo-pages/low-moq-startup-packaging-seo-infographic.png",
    tag: "Strategy",
    badgeType: "luxury"
  },
  {
    keyPrefix: "knowhow_20",
    title: "Home Compostable Coffee",
    desc: "Integrating plant-based degassing valves and compostable films to create home-friendly coffee bags.",
    link: "/topics/home-compostable-coffee-bags",
    image: "/imgs/seo-pages/home-compostable-coffee-bags-seo-infographic.png",
    tag: "Coffee",
    badgeType: "eco"
  },
  {
    keyPrefix: "knowhow_21",
    title: "Recyclable Snacks Pouch",
    desc: "Preserving chips and granola freshness using EVOH-coated recyclable polyethylene structures.",
    link: "/topics/recyclable-snack-packaging",
    image: "/imgs/seo-pages/recyclable-snack-packaging-seo-infographic.png",
    tag: "Snacks",
    badgeType: "liquid"
  },
  {
    keyPrefix: "knowhow_22",
    title: "Mono-Material PE Guide",
    desc: "Technical deep-dive on single-polymer laminates that fulfill circular economy requirements.",
    link: "/topics/mono-material-pe-pouches",
    image: "/imgs/seo-pages/mono-pe-pouches-seo-infographic.png",
    tag: "Technology",
    badgeType: "accent"
  },
  {
    keyPrefix: "knowhow_23",
    title: "PFAS-Free Food Packaging",
    desc: "Ensuring compliance with local environmental acts by utilizing PFAS-free barriers.",
    link: "/topics/pfas-free-food-packaging",
    image: "/imgs/seo-pages/pfas-free-packaging-seo-infographic.png",
    tag: "Compliance",
    badgeType: "eco"
  },
  {
    keyPrefix: "knowhow_24",
    title: "USA Compostable Standards",
    desc: "Guidelines on ASTM D6400 certification, BPI labels, and local state labeling mandates.",
    link: "/usa/compostable-packaging",
    image: "/imgs/seo-pages/custom-compostable-pouch-suppliers-seo-infographic.png",
    tag: "USA",
    badgeType: "eco"
  },
  {
    keyPrefix: "knowhow_25",
    title: "USA Coffee Bags Market",
    desc: "US retail trends in organic specialty coffee packaging and eco-friendly packaging rules.",
    link: "/usa/coffee-packaging",
    image: "/imgs/seo-photos/usa/coffee/a_specialty_coffee_packaging_hero_4333484.webp",
    tag: "USA",
    badgeType: "accent"
  },
  {
    keyPrefix: "knowhow_26",
    title: "Coffee Roastery Case Study",
    desc: "How a specialty Seattle roastery shifted to 100% compostable bags without dropping speed.",
    link: "/case-studies/coffee-roastery",
    image: "/imgs/seo-photos/a_bean_bole_coffee_roastery_8131919.webp",
    tag: "Case Study",
    badgeType: "accent"
  },
  {
    keyPrefix: "knowhow_27",
    title: "Tea Brand Case Study",
    desc: "Transitioning to plastic-free kraft bags to align with clean label values.",
    link: "/case-studies/tea-brand",
    image: "/imgs/seo-photos/a_milano_botanica_tea_caf_8381320.webp",
    tag: "Case Study",
    badgeType: "eco"
  },
  {
    keyPrefix: "knowhow_28",
    title: "Pet Treats Case Study",
    desc: "Developing high-volume pet food pouches with puncture-resistant layers and durable zippers.",
    link: "/case-studies/pet-treats",
    image: "/imgs/seo-photos/a_food_grade_olive_stone_pouch_achieve_pack_8628145.webp",
    tag: "Case Study",
    badgeType: "liquid"
  },
  {
    keyPrefix: "knowhow_29",
    title: "Chocolate Brand Case Study",
    desc: "Eco-luxe chocolate brand showcases premium rigid box and compostable pouch designs.",
    link: "/case-studies/chocolate-brand",
    image: "/imgs/seo-photos/a_artisan_chocolate_abu_dhabi_luxury_pouch_4218900.webp",
    tag: "Case Study",
    badgeType: "luxury"
  }
];
