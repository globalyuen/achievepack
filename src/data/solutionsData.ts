export type SolutionItem = {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  industry: string[];
  product: string[];
  special: string[];
  link: string;
};

export const filterCategories = {
  industry: [
    { id: 'food', label: 'Food & Beverage' },
    { id: 'pet', label: 'Pet Food' },
    { id: 'coffee', label: 'Coffee & Tea' },
    { id: 'cosmetics', label: 'Health & Beauty' },
    { id: 'household', label: 'Household & Chemical' }
  ],
  product: [
    { id: 'stand-up', label: 'Stand-Up Pouches' },
    { id: 'flat-bottom', label: 'Flat Bottom Bags' },
    { id: 'spout', label: 'Spouted Pouches' },
    { id: 'three-side', label: '3-Side Seal / Sachets' },
    { id: 'rollstock', label: 'Rollstock Film' }
  ],
  special: [
    { id: 'frozen', label: 'Frozen / Cold Storage' },
    { id: 'microwave', label: 'Microwave Safe' },
    { id: 'retort', label: 'Retort (High Temp)' },
    { id: 'child-resistant', label: 'Child Resistant (CR)' },
    { id: 'eco', label: 'Eco-Friendly (PCR / Compostable)' },
    { id: 'high-barrier', label: 'High Barrier (Foil/AL)' }
  ]
};

export const solutionsData: SolutionItem[] = [
  {
    id: 'sol-1',
    title: 'Frozen Food Stand-Up Pouches',
    description: 'Durable, puncture-resistant pouches designed to withstand sub-zero temperatures without cracking. Perfect for frozen fruits, vegetables, and ready-meals.',
    imageUrl: '/imgs/barrier/ads/a_achieve_pack_barrier_kv_updated_green_definition_6833995.webp',
    industry: ['food'],
    product: ['stand-up'],
    special: ['frozen', 'high-barrier'],
    link: '/topics/freezer-safe-vacuum-packaging'
  },
  {
    id: 'sol-2',
    title: 'Microwavable Retort Pouches',
    description: 'High-temperature resistant pouches that can be safely microwaved or boiled. Ideal for ready-to-eat meals, soups, and sauces.',
    imageUrl: '/imgs/barrier/ads/a_barrier_levels_7395220.webp',
    industry: ['food'],
    product: ['stand-up', 'flat-bottom'],
    special: ['microwave', 'retort', 'high-barrier'],
    link: '/topics/printed-compostable-retort-bags'
  },
  {
    id: 'sol-3',
    title: 'Eco-Friendly Coffee Flat Bottom Bags',
    description: 'Sustainable, compostable or PCR flat bottom bags with degassing valves. Preserves coffee freshness while reducing environmental impact.',
    imageUrl: '/imgs/barrier/ads/a_kraft_levels_1_2_3604187.webp',
    industry: ['coffee'],
    product: ['flat-bottom'],
    special: ['eco', 'high-barrier'],
    link: '/topics/sustainable-pouch-sizes-for-coffee-beans'
  },
  {
    id: 'sol-4',
    title: 'Child-Resistant Cannabis/Pharma Pouches',
    description: 'Certified child-resistant (CR) zippers on smell-proof pouches. Essential for cannabis, pharmaceuticals, and concentrated detergents.',
    imageUrl: '/imgs/barrier/ads/a_kraft_high_max_4456348.webp',
    industry: ['cosmetics', 'household'],
    product: ['stand-up', 'three-side'],
    special: ['child-resistant', 'high-barrier'],
    link: '/topics/child-resistant-exit-bag'
  },
  {
    id: 'sol-5',
    title: 'Spouted Pouches for Pet Food',
    description: 'Convenient spouted pouches for liquid or puree pet foods and treats. Easy to pour, resealable, and space-efficient.',
    imageUrl: '/imgs/pouch-shape/ads/a_achieve_pack_spout_pouch_closeup_5874382.webp',
    industry: ['pet'],
    product: ['spout'],
    special: ['high-barrier'],
    link: '/topics/digital-printed-stand-up-pouches-for-pet-food'
  },
  {
    id: 'sol-6',
    title: 'High-Speed Rollstock for Snacks',
    description: 'Premium printed rollstock film optimized for VFFS and HFFS machines. Excellent seal integrity and vibrant graphics for chips and snacks.',
    imageUrl: '/imgs/pouch-shape/ads/a_achieve_pack_rollstock_closeup_5394787.webp',
    industry: ['food'],
    product: ['rollstock'],
    special: ['high-barrier'],
    link: '/topics/recyclable-rollstock-film'
  },
  {
    id: 'sol-7',
    title: 'Cosmetic Sample Sachets',
    description: 'Small, single-use 3-side seal sachets for lotions, serums, and creams. Highly customizable and cost-effective for promotional giveaways.',
    imageUrl: '/imgs/pouch-shape/ads/a_achieve_pack_3side_seal_closeup_7717814.webp',
    industry: ['cosmetics'],
    product: ['three-side'],
    special: ['high-barrier'],
    link: '/topics/small-sachet-silk'
  },
  {
    id: 'sol-8',
    title: 'Household Liquid Spout Pouches',
    description: 'Durable, drop-resistant spouted pouches for detergents, soaps, and cleaners. A sustainable alternative to rigid plastic bottles.',
    imageUrl: '/imgs/reclose/ads/a_spout_closure_closeup_detail_2705813.webp',
    industry: ['household'],
    product: ['spout'],
    special: ['eco', 'high-barrier'],
    link: '/topics/detergent-spout'
  },
  {
    id: 'sol-9',
    title: 'Compostable Snack Pouches',
    description: 'BPI-certified compostable stand-up pouches for dry snacks, nuts, and jerky. Excellent oxygen and moisture barriers using plant-based materials.',
    imageUrl: '/imgs/barrier/ads/a_value_barrier_eco_4905901.webp',
    industry: ['food'],
    product: ['stand-up'],
    special: ['eco'],
    link: '/topics/compostable-barrier-packaging-for-nuts'
  }
];
