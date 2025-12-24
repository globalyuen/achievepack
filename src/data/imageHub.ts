// Image Hub - 图片资源中心
// 集中管理所有图片元数据，支持AI智能匹配到SEO内容

export interface ImageAsset {
  id: string;
  src: string;
  alt: string;
  caption?: string;
  
  // 分类标签
  categories: {
    material?: string[];
    feature?: string[];
    barrier?: string[];
    pouchShape?: string[];
    surface?: string[];
    application?: string[];
    region?: string[];
    contentType: string[];
  };
  
  // SEO关键词（用于AI匹配）
  keywords: string[];
  
  // 适用的SEO页面路由
  suitablePages: string[];
  
  // 优先级（1-10，10最高）
  priority: number;
  
  // 图片尺寸建议
  sizeHint?: 'hero' | 'gallery' | 'inline' | 'thumbnail';
}

// ============================================
// 图片资源库
// ============================================
export const imageHub: ImageAsset[] = [
  // ============================================
  // INFOGRAPHICS - 信息图
  // ============================================
  {
    id: 'infographic-compost',
    src: '/imgs/4-infograhic/compost.webp',
    alt: 'Industrial compostable packaging certification infographic',
    caption: 'Industrial Compostable',
    categories: {
      material: ['compostable', 'industrial-compostable'],
      contentType: ['infographic'],
    },
    keywords: ['compostable', 'industrial', 'certification', 'EN13432', 'ASTM D6400'],
    suitablePages: [
      '/products/compostable-coffee-bags',
      '/products/compostable-stand-up-pouches',
      '/materials/compostable',
    ],
    priority: 10,
    sizeHint: 'gallery',
  },
  {
    id: 'infographic-home-compost',
    src: '/imgs/4-infograhic/home-compost.webp',
    alt: 'Home compostable packaging - breaks down in backyard compost',
    caption: 'Home Compostable',
    categories: {
      material: ['compostable', 'home-compostable'],
      contentType: ['infographic'],
    },
    keywords: ['home compostable', 'backyard', 'garden', 'OK Compost HOME', 'TUV'],
    suitablePages: [
      '/products/compostable-coffee-bags',
      '/products/compostable-stand-up-pouches',
      '/materials/compostable',
    ],
    priority: 10,
    sizeHint: 'gallery',
  },
  {
    id: 'infographic-recyclable',
    src: '/imgs/4-infograhic/recyclable.webp',
    alt: 'Recyclable mono-material packaging infographic',
    caption: 'Recyclable Mono-PE',
    categories: {
      material: ['recyclable', 'mono-material'],
      contentType: ['infographic'],
    },
    keywords: ['recyclable', 'mono-material', 'PE', 'curbside', 'store drop-off'],
    suitablePages: [
      '/products/recyclable-mono-material-pouches',
      '/materials/recyclable-mono-pe',
    ],
    priority: 10,
    sizeHint: 'gallery',
  },
  {
    id: 'infographic-pcr',
    src: '/imgs/4-infograhic/PCR.webp',
    alt: 'PCR post-consumer recycled plastic infographic',
    caption: 'PCR Material',
    categories: {
      material: ['pcr'],
      contentType: ['infographic'],
    },
    keywords: ['PCR', 'post-consumer recycled', 'GRS certified', 'circular economy'],
    suitablePages: ['/materials/pcr'],
    priority: 10,
    sizeHint: 'gallery',
  },
  {
    id: 'infographic-biope',
    src: '/imgs/4-infograhic/Bio-PE.webp',
    alt: 'Bio-PE plant-based plastic infographic',
    caption: 'Bio-PE Material',
    categories: {
      material: ['bio-pe', 'plant-based'],
      contentType: ['infographic'],
    },
    keywords: ['Bio-PE', 'sugarcane', 'plant-based', 'renewable', 'carbon neutral'],
    suitablePages: ['/materials/bio-pe'],
    priority: 10,
    sizeHint: 'gallery',
  },
  {
    id: 'infographic-low-moq',
    src: '/imgs/infographic-low-moq.webp',
    alt: 'Low MOQ packaging - 100 piece minimum order',
    caption: 'Low MOQ Benefits',
    categories: {
      contentType: ['infographic'],
    },
    keywords: ['low MOQ', 'minimum order', 'small batch', 'startup', 'trial order'],
    suitablePages: ['/products/low-moq-packaging'],
    priority: 10,
    sizeHint: 'gallery',
  },
  {
    id: 'infographic-fast-turnaround',
    src: '/imgs/infographic-fast-turnaround.webp',
    alt: 'Fast turnaround for small batch orders',
    caption: 'Fast Turnaround',
    categories: {
      contentType: ['infographic'],
    },
    keywords: ['fast turnaround', 'quick delivery', '7-10 days', 'express'],
    suitablePages: ['/products/low-moq-packaging'],
    priority: 9,
    sizeHint: 'gallery',
  },

  // ============================================
  // COMPOSTABLE MATERIALS - 可堆肥材料
  // ============================================
  {
    id: 'compostable-pouch-achieve',
    src: '/imgs/seo-photos/a_compostable_packaging_pouch_achieve_pack_2674607.webp',
    alt: 'Achieve Pack compostable coffee bag with eco-friendly materials',
    caption: 'Compostable Pouch',
    categories: {
      material: ['compostable'],
      contentType: ['product'],
    },
    keywords: ['compostable', 'eco-friendly', 'coffee bag', 'sustainable'],
    suitablePages: [
      '/products/compostable-coffee-bags',
      '/products/compostable-stand-up-pouches',
    ],
    priority: 9,
    sizeHint: 'gallery',
  },
  {
    id: 'composting-timeline',
    src: '/imgs/seo-photos/a_composting_timeline_5months_9414148.webp',
    alt: 'Composting timeline showing 5 months breakdown process',
    caption: 'Composting Timeline',
    categories: {
      material: ['compostable'],
      contentType: ['infographic', 'process'],
    },
    keywords: ['composting', 'timeline', 'breakdown', '5 months', 'biodegradable'],
    suitablePages: [
      '/products/compostable-coffee-bags',
      '/materials/compostable',
    ],
    priority: 8,
    sizeHint: 'gallery',
  },
  {
    id: 'compostable-garden',
    src: '/imgs/seo-photos/a_achievepack_compostable_garden_9329618.webp',
    alt: 'Compostable packaging in garden composting setting',
    caption: 'Garden Compostable',
    categories: {
      material: ['compostable', 'home-compostable'],
      contentType: ['lifestyle'],
    },
    keywords: ['garden', 'home composting', 'backyard', 'natural'],
    suitablePages: [
      '/products/compostable-stand-up-pouches',
      '/materials/compostable',
    ],
    priority: 8,
    sizeHint: 'gallery',
  },
  {
    id: 'industrial-compostable-facility',
    src: '/imgs/seo-photos/a_industrial_compostable_facility_2850870.webp',
    alt: 'Industrial composting facility for commercial compostable packaging',
    caption: 'Industrial Composting',
    categories: {
      material: ['compostable', 'industrial-compostable'],
      contentType: ['process'],
    },
    keywords: ['industrial', 'facility', 'commercial', 'composting'],
    suitablePages: [
      '/products/compostable-stand-up-pouches',
      '/materials/compostable',
    ],
    priority: 7,
    sizeHint: 'gallery',
  },
  {
    id: 'home-compostable-balcony',
    src: '/imgs/seo-photos/a_achievepack_home_compostable_balcony_9883994.webp',
    alt: 'Home compostable packaging on balcony setting',
    caption: 'Balcony Composting',
    categories: {
      material: ['compostable', 'home-compostable'],
      contentType: ['lifestyle'],
    },
    keywords: ['balcony', 'urban', 'home composting', 'apartment'],
    suitablePages: ['/products/compostable-stand-up-pouches'],
    priority: 7,
    sizeHint: 'gallery',
  },
  {
    id: 'compostable-kitchen-lifestyle',
    src: '/imgs/seo-photos/a_compostable_mixed_materials_lifestyle_kitchen_6722434.webp',
    alt: 'Compostable packaging in modern kitchen lifestyle setting',
    caption: 'Kitchen Lifestyle',
    categories: {
      material: ['compostable'],
      application: ['coffee', 'tea'],
      contentType: ['lifestyle'],
    },
    keywords: ['kitchen', 'lifestyle', 'modern', 'sustainable living'],
    suitablePages: [
      '/products/compostable-stand-up-pouches',
      '/products/compostable-coffee-bags',
    ],
    priority: 8,
    sizeHint: 'gallery',
  },
  {
    id: 'home-compost-proof',
    src: '/imgs/seo-photos/a_home_compostable_6month_proof_5248827.webp',
    alt: 'Home compostable packaging 6 month breakdown proof',
    caption: '6 Month Proof',
    categories: {
      material: ['compostable', 'home-compostable'],
      contentType: ['process'],
    },
    keywords: ['6 months', 'proof', 'breakdown', 'home compost'],
    suitablePages: ['/materials/compostable'],
    priority: 7,
    sizeHint: 'gallery',
  },

  // ============================================
  // RECYCLABLE / MONO-MATERIAL - 可回收材料
  // ============================================
  {
    id: 'mono-recyclable-certification',
    src: '/imgs/seo-photos/a_mono_recyclable_certification_compliance_7572715.webp',
    alt: 'Mono-material recyclable packaging certification compliance',
    caption: 'Recyclability Certification',
    categories: {
      material: ['recyclable', 'mono-material'],
      contentType: ['certification'],
    },
    keywords: ['certification', 'compliance', 'recyclable', 'mono-material'],
    suitablePages: ['/products/recyclable-mono-material-pouches'],
    priority: 9,
    sizeHint: 'gallery',
  },
  {
    id: 'pcr-store-drop-off',
    src: '/imgs/seo-photos/a_pcr_store_drop_off_recycling_1908718.webp',
    alt: 'Store drop-off recycling for PCR and mono-material packaging',
    caption: 'Store Drop-off Recycling',
    categories: {
      material: ['recyclable', 'pcr'],
      contentType: ['process'],
    },
    keywords: ['store drop-off', 'recycling', 'in-store', 'collection'],
    suitablePages: [
      '/products/recyclable-mono-material-pouches',
      '/materials/pcr',
    ],
    priority: 8,
    sizeHint: 'gallery',
  },
  {
    id: 'grs-mono-luxury-texture',
    src: '/imgs/seo-photos/a_grs_mono_material_luxury_texture_1597149.webp',
    alt: 'GRS certified mono-material with premium luxury texture',
    caption: 'Premium Texture',
    categories: {
      material: ['recyclable', 'mono-material'],
      surface: ['soft-touch'],
      contentType: ['product'],
    },
    keywords: ['GRS', 'luxury', 'premium', 'texture', 'high-end'],
    suitablePages: ['/products/recyclable-mono-material-pouches'],
    priority: 8,
    sizeHint: 'gallery',
  },
  {
    id: 'mono-kitchen',
    src: '/imgs/seo-photos/a_achievepack_mono_kitchen_8539724.webp',
    alt: 'Mono-material recyclable pouch in kitchen setting',
    caption: 'Kitchen Use',
    categories: {
      material: ['recyclable', 'mono-material'],
      contentType: ['lifestyle'],
    },
    keywords: ['kitchen', 'home', 'recyclable', 'daily use'],
    suitablePages: ['/products/recyclable-mono-material-pouches'],
    priority: 7,
    sizeHint: 'gallery',
  },
  {
    id: 'circular-economy',
    src: '/imgs/seo-photos/a_circular_economy_pouch_with_achieve_pack_logo_2595862.webp',
    alt: 'Circular economy sustainable packaging concept',
    caption: 'Circular Economy',
    categories: {
      material: ['recyclable', 'pcr'],
      contentType: ['infographic'],
    },
    keywords: ['circular economy', 'sustainable', 'recycling loop'],
    suitablePages: ['/products/recyclable-mono-material-pouches', '/materials/pcr'],
    priority: 7,
    sizeHint: 'gallery',
  },

  // ============================================
  // COFFEE DEGASSING VALVE - 咖啡脱气阀
  // ============================================
  {
    id: 'valve-closure-detail',
    src: '/imgs/reclose/ads/a_valve_closure_detail_6401844.webp',
    alt: 'Coffee degassing valve one-way valve detail',
    caption: 'Degassing Valve',
    categories: {
      feature: ['degassing-valve'],
      application: ['coffee'],
      contentType: ['product', 'closeup'],
    },
    keywords: ['degassing valve', 'one-way valve', 'CO2', 'freshness', 'coffee'],
    suitablePages: ['/products/coffee-bags-degassing-valve'],
    priority: 10,
    sizeHint: 'gallery',
  },
  {
    id: 'tintie-coffee-pouch',
    src: '/imgs/reclose/ads/a_tintie_coffee_pouch_correct_4114906.webp',
    alt: 'Tin tie closure on coffee pouch for resealing',
    caption: 'Tin Tie Closure',
    categories: {
      feature: ['tin-tie'],
      application: ['coffee'],
      contentType: ['product'],
    },
    keywords: ['tin tie', 'reseal', 'coffee', 'fold over', 'closure'],
    suitablePages: ['/products/coffee-bags-degassing-valve'],
    priority: 9,
    sizeHint: 'gallery',
  },
  {
    id: 'reclosure-options-overview',
    src: '/imgs/reclose/ads/a_reclosure_four_quadrant_overview_3481316.webp',
    alt: 'Reclosure options overview - ziplock, tin tie, valve, spout',
    caption: 'Reclosure Options',
    categories: {
      feature: ['ziplock', 'tin-tie', 'degassing-valve', 'spout'],
      contentType: ['infographic'],
    },
    keywords: ['reclosure', 'options', 'comparison', 'ziplock', 'tin tie'],
    suitablePages: [
      '/products/coffee-bags-degassing-valve',
      '/options/reclosure',
    ],
    priority: 8,
    sizeHint: 'gallery',
  },
  {
    id: 'bean-bole-roastery',
    src: '/imgs/seo-photos/a_bean_bole_coffee_roastery_8131919.webp',
    alt: 'Bean & Bole coffee roastery using Achieve Pack bags',
    caption: 'Roastery Use Case',
    categories: {
      application: ['coffee'],
      contentType: ['lifestyle'],
    },
    keywords: ['roastery', 'coffee roaster', 'artisan', 'specialty coffee'],
    suitablePages: ['/products/coffee-bags-degassing-valve'],
    priority: 8,
    sizeHint: 'gallery',
  },
  {
    id: 'roast-ritual-nyc',
    src: '/imgs/seo-photos/a_roast_ritual_nyc_coffee_urban_2153150.webp',
    alt: 'Roast Ritual NYC urban coffee brand packaging',
    caption: 'NYC Coffee Brand',
    categories: {
      application: ['coffee'],
      region: ['usa'],
      contentType: ['lifestyle'],
    },
    keywords: ['NYC', 'urban', 'coffee', 'brand', 'city'],
    suitablePages: [
      '/products/coffee-bags-degassing-valve',
      '/usa/coffee-bags',
    ],
    priority: 7,
    sizeHint: 'gallery',
  },
  {
    id: 'press-to-close',
    src: '/imgs/reclose/ads/a_presstoclose_closure_detail_5742103.webp',
    alt: 'Press-to-close zipper closure detail',
    caption: 'Press-to-Close',
    categories: {
      feature: ['press-to-close', 'ziplock'],
      contentType: ['closeup'],
    },
    keywords: ['press-to-close', 'zipper', 'reseal', 'easy open'],
    suitablePages: ['/options/reclosure'],
    priority: 7,
    sizeHint: 'gallery',
  },
  {
    id: 'spout-closure-closeup',
    src: '/imgs/reclose/ads/a_spout_closure_closeup_detail_2705813.webp',
    alt: 'Spout closure detail for liquid packaging',
    caption: 'Spout Closure',
    categories: {
      feature: ['spout'],
      contentType: ['closeup'],
    },
    keywords: ['spout', 'liquid', 'pour', 'cap'],
    suitablePages: ['/options/reclosure'],
    priority: 7,
    sizeHint: 'gallery',
  },

  // ============================================
  // LOW MOQ PACKAGING - 低起订量
  // ============================================
  {
    id: 'digital-printing-customization',
    src: '/imgs/seo-photos/a_digital_printing_customization_2717640.webp',
    alt: 'Digital printing for custom low MOQ packaging',
    caption: 'Digital Print',
    categories: {
      contentType: ['process'],
    },
    keywords: ['digital printing', 'customization', 'low MOQ', 'short run'],
    suitablePages: ['/products/low-moq-packaging'],
    priority: 9,
    sizeHint: 'gallery',
  },
  {
    id: 'ecommerce-lightweight-pouch',
    src: '/imgs/seo-photos/a_ecommerce_lightweight_pouch_achieve_pack_8535238.webp',
    alt: 'E-commerce brand lightweight pouch packaging',
    caption: 'E-commerce Pouch',
    categories: {
      contentType: ['product'],
    },
    keywords: ['ecommerce', 'lightweight', 'small business', 'startup'],
    suitablePages: ['/products/low-moq-packaging'],
    priority: 8,
    sizeHint: 'gallery',
  },
  {
    id: 'gen-z-social-media',
    src: '/imgs/seo-photos/a_gen_z_social_media_pouch_achieve_pack_8402407.webp',
    alt: 'Gen Z social media brand pouch packaging',
    caption: 'Social Media Brand',
    categories: {
      contentType: ['lifestyle'],
    },
    keywords: ['Gen Z', 'social media', 'influencer', 'DTC', 'startup'],
    suitablePages: ['/products/low-moq-packaging'],
    priority: 7,
    sizeHint: 'gallery',
  },
  {
    id: 'minimalist-eco-pouch',
    src: '/imgs/seo-photos/a_minimalist_eco_pouch_workspace_2025_8541573.webp',
    alt: 'Minimalist eco-friendly pouch in modern workspace',
    caption: 'Minimalist Design',
    categories: {
      contentType: ['lifestyle'],
    },
    keywords: ['minimalist', 'modern', 'workspace', 'clean design'],
    suitablePages: ['/products/low-moq-packaging'],
    priority: 6,
    sizeHint: 'gallery',
  },

  // ============================================
  // BARRIER OPTIONS - 阻隔等级
  // ============================================
  {
    id: 'barrier-levels-overview',
    src: '/imgs/barrier/ads/a_barrier_levels_7395220.webp',
    alt: 'Barrier levels comparison - high, medium, low',
    caption: 'Barrier Levels',
    categories: {
      barrier: ['high-barrier', 'medium-barrier', 'low-barrier'],
      contentType: ['infographic'],
    },
    keywords: ['barrier', 'levels', 'comparison', 'WVTR', 'OTR'],
    suitablePages: [
      '/options/barrier',
      '/options/high-barrier',
      '/options/medium-barrier',
      '/options/low-barrier',
    ],
    priority: 10,
    sizeHint: 'gallery',
  },
  {
    id: 'high-barrier-luxury',
    src: '/imgs/seo-photos/a_achievepack_high_barrier_luxury_1992395.webp',
    alt: 'High barrier packaging for luxury premium products',
    caption: 'High Barrier Luxury',
    categories: {
      barrier: ['high-barrier'],
      contentType: ['product'],
    },
    keywords: ['high barrier', 'luxury', 'premium', 'protection'],
    suitablePages: ['/options/high-barrier'],
    priority: 9,
    sizeHint: 'gallery',
  },
  {
    id: 'medium-barrier-pantry',
    src: '/imgs/seo-photos/a_achievepack_medium_barrier_pantry_7988653.webp',
    alt: 'Medium barrier packaging for pantry products',
    caption: 'Medium Barrier Pantry',
    categories: {
      barrier: ['medium-barrier'],
      contentType: ['lifestyle'],
    },
    keywords: ['medium barrier', 'pantry', 'dry goods', 'snacks'],
    suitablePages: ['/options/medium-barrier'],
    priority: 9,
    sizeHint: 'gallery',
  },
  {
    id: 'low-barrier-fresh',
    src: '/imgs/seo-photos/a_achievepack_low_barrier_fresh_5851801.webp',
    alt: 'Low barrier packaging for fresh produce',
    caption: 'Low Barrier Fresh',
    categories: {
      barrier: ['low-barrier'],
      contentType: ['lifestyle'],
    },
    keywords: ['low barrier', 'fresh', 'produce', 'breathable'],
    suitablePages: ['/options/low-barrier'],
    priority: 9,
    sizeHint: 'gallery',
  },
  {
    id: 'barrier-comparison',
    src: '/imgs/seo-photos/a_achievepack_barrier_range_comparison_2896222.webp',
    alt: 'Barrier range comparison across different materials',
    caption: 'Barrier Comparison',
    categories: {
      barrier: ['high-barrier', 'medium-barrier', 'low-barrier'],
      contentType: ['comparison'],
    },
    keywords: ['barrier', 'comparison', 'range', 'performance'],
    suitablePages: ['/options/barrier'],
    priority: 8,
    sizeHint: 'gallery',
  },
  {
    id: 'metallic-barrier-closeup',
    src: '/imgs/barrier/ads/a_metallic_barrier_closeup_9656118.webp',
    alt: 'Metallic high barrier material closeup',
    caption: 'Metallic Barrier',
    categories: {
      barrier: ['high-barrier'],
      surface: ['metallic'],
      contentType: ['closeup'],
    },
    keywords: ['metallic', 'aluminum', 'high barrier', 'foil'],
    suitablePages: ['/options/high-barrier'],
    priority: 7,
    sizeHint: 'gallery',
  },
  {
    id: 'kraft-barrier-levels',
    src: '/imgs/barrier/ads/a_kraft_levels_1_2_3604187.webp',
    alt: 'Kraft paper barrier level options',
    caption: 'Kraft Barrier Options',
    categories: {
      barrier: ['medium-barrier', 'low-barrier'],
      contentType: ['product'],
    },
    keywords: ['kraft', 'paper', 'natural', 'eco'],
    suitablePages: ['/options/medium-barrier', '/options/low-barrier'],
    priority: 7,
    sizeHint: 'gallery',
  },

  // ============================================
  // POUCH SHAPES - 袋型
  // ============================================
  {
    id: 'stand-up-pouch-isolated',
    src: '/imgs/pouch-shape/a_stand_up_pouch_isolated_4331591.webp',
    alt: 'Stand-up pouch isolated product photo',
    caption: 'Stand-Up Pouch',
    categories: {
      pouchShape: ['stand-up-pouch'],
      contentType: ['product'],
    },
    keywords: ['stand-up', 'SUP', 'doypack', 'retail shelf'],
    suitablePages: [
      '/products/compostable-stand-up-pouches',
      '/options/pouch-shapes',
    ],
    priority: 9,
    sizeHint: 'gallery',
  },
  {
    id: 'flat-bottom-pouch-isolated',
    src: '/imgs/pouch-shape/a_flat_bottom_pouch_isolated_7901973.webp',
    alt: 'Flat bottom pouch isolated product photo',
    caption: 'Flat Bottom Pouch',
    categories: {
      pouchShape: ['flat-bottom'],
      contentType: ['product'],
    },
    keywords: ['flat bottom', 'box pouch', 'premium', 'coffee'],
    suitablePages: [
      '/products/coffee-bags-degassing-valve',
      '/options/pouch-shapes',
    ],
    priority: 9,
    sizeHint: 'gallery',
  },
  {
    id: 'side-gusset-pouch-isolated',
    src: '/imgs/pouch-shape/a_side_gusset_pouch_isolated_2545871.webp',
    alt: 'Side gusset pouch isolated product photo',
    caption: 'Side Gusset Pouch',
    categories: {
      pouchShape: ['side-gusset'],
      contentType: ['product'],
    },
    keywords: ['side gusset', 'coffee bag', 'traditional'],
    suitablePages: [
      '/products/coffee-bags-degassing-valve',
      '/options/pouch-shapes',
    ],
    priority: 8,
    sizeHint: 'gallery',
  },
  {
    id: 'three-side-seal-isolated',
    src: '/imgs/pouch-shape/a_three_side_seal_pouch_isolated_0879222.webp',
    alt: 'Three side seal pouch isolated product photo',
    caption: 'Three Side Seal',
    categories: {
      pouchShape: ['three-side-seal'],
      contentType: ['product'],
    },
    keywords: ['three side seal', 'flat pouch', 'sachet', 'sample'],
    suitablePages: ['/options/pouch-shapes'],
    priority: 7,
    sizeHint: 'gallery',
  },
  {
    id: 'spout-pouch-isolated',
    src: '/imgs/pouch-shape/a_spout_pouch_isolated_6857112.webp',
    alt: 'Spout pouch isolated product photo',
    caption: 'Spout Pouch',
    categories: {
      pouchShape: ['spout-pouch'],
      feature: ['spout'],
      contentType: ['product'],
    },
    keywords: ['spout pouch', 'liquid', 'beverage', 'sauce'],
    suitablePages: ['/options/pouch-shapes'],
    priority: 8,
    sizeHint: 'gallery',
  },

  // ============================================
  // SURFACE FINISHES - 表面工艺
  // ============================================
  {
    id: 'matte-finish-detail',
    src: '/imgs/surface/a_matte_finish_detail_7483118.webp',
    alt: 'Matte finish surface detail on packaging',
    caption: 'Matte Finish',
    categories: {
      surface: ['matte'],
      contentType: ['product', 'closeup'],
    },
    keywords: ['matte', 'finish', 'premium', 'sophisticated'],
    suitablePages: ['/options/surface-finish', '/options/printing-types'],
    priority: 9,
    sizeHint: 'gallery',
  },
  {
    id: 'gloss-finish-detail',
    src: '/imgs/surface/a_gloss_finish_detail_5685549.webp',
    alt: 'Gloss finish surface detail on packaging',
    caption: 'Gloss Finish',
    categories: {
      surface: ['gloss'],
      contentType: ['product', 'closeup'],
    },
    keywords: ['gloss', 'shiny', 'vibrant', 'eye-catching'],
    suitablePages: ['/options/surface-finish', '/options/printing-types'],
    priority: 9,
    sizeHint: 'gallery',
  },
  {
    id: 'soft-touch-pouch',
    src: '/imgs/surface/a_softtouch_pouch_correct_7961783.webp',
    alt: 'Soft-touch lamination pouch with premium feel',
    caption: 'Soft-Touch',
    categories: {
      surface: ['soft-touch'],
      contentType: ['product'],
    },
    keywords: ['soft-touch', 'tactile', 'luxury', 'velvet'],
    suitablePages: ['/options/surface-finish', '/options/printing-types'],
    priority: 9,
    sizeHint: 'gallery',
  },
  {
    id: 'metallic-gold-closeup',
    src: '/imgs/surface/a_metallic_gold_closeup_5151764.webp',
    alt: 'Metallic gold foil stamping closeup',
    caption: 'Metallic Gold',
    categories: {
      surface: ['metallic', 'foil-stamping'],
      contentType: ['closeup'],
    },
    keywords: ['metallic', 'gold', 'foil', 'luxury', 'premium'],
    suitablePages: ['/options/surface-finish', '/options/printing-types'],
    priority: 8,
    sizeHint: 'gallery',
  },
  {
    id: 'embossed-navy',
    src: '/imgs/surface/a_embossed_navy_9933981.webp',
    alt: 'Embossed navy blue packaging surface',
    caption: 'Embossed Finish',
    categories: {
      surface: ['embossed'],
      contentType: ['closeup'],
    },
    keywords: ['embossed', 'texture', 'tactile', '3D', 'navy'],
    suitablePages: ['/options/surface-finish', '/options/printing-types'],
    priority: 8,
    sizeHint: 'gallery',
  },
  {
    id: 'foil-green-charcoal',
    src: '/imgs/surface/a_foil_green_charcoal_7632386.webp',
    alt: 'Foil stamping in green and charcoal colors',
    caption: 'Foil Stamping',
    categories: {
      surface: ['foil-stamping'],
      contentType: ['product'],
    },
    keywords: ['foil', 'stamping', 'green', 'charcoal', 'metallic'],
    suitablePages: ['/options/surface-finish'],
    priority: 7,
    sizeHint: 'gallery',
  },

  // ============================================
  // REGIONAL / USA - 地区特定
  // ============================================
  {
    id: 'perth-organic-coffee',
    src: '/imgs/seo-photos/a_perth_organic_coffee_pouch_kitchen_0684950.webp',
    alt: 'Perth organic coffee pouch in Australian kitchen',
    caption: 'Perth Coffee',
    categories: {
      application: ['coffee'],
      region: ['australia'],
      contentType: ['lifestyle'],
    },
    keywords: ['Perth', 'Australia', 'organic', 'coffee'],
    suitablePages: ['/australia/coffee-bags'],
    priority: 9,
    sizeHint: 'gallery',
  },
  {
    id: 'tea-craft-australia',
    src: '/imgs/seo-photos/a_tea_craft_australia_garden_morning_8955209.webp',
    alt: 'Tea Craft Australia morning garden tea packaging',
    caption: 'Australian Tea',
    categories: {
      application: ['tea'],
      region: ['australia'],
      contentType: ['lifestyle'],
    },
    keywords: ['Australia', 'tea', 'garden', 'morning'],
    suitablePages: ['/australia/tea-packaging'],
    priority: 8,
    sizeHint: 'gallery',
  },
  {
    id: 'milano-botanica-tea',
    src: '/imgs/seo-photos/a_milano_botanica_tea_caf_8381320.webp',
    alt: 'Milano Botanica tea café in European setting',
    caption: 'European Tea Café',
    categories: {
      application: ['tea'],
      region: ['europe'],
      contentType: ['lifestyle'],
    },
    keywords: ['Milano', 'Europe', 'tea', 'café', 'artisan'],
    suitablePages: ['/europe/tea-packaging'],
    priority: 8,
    sizeHint: 'gallery',
  },
  {
    id: 'nourishnow-seattle',
    src: '/imgs/seo-photos/a_nourishnow_seattle_morning_wellness_pouch_1061333.webp',
    alt: 'NourishNow Seattle wellness brand pouch',
    caption: 'Seattle Wellness',
    categories: {
      application: ['wellness'],
      region: ['usa'],
      contentType: ['lifestyle'],
    },
    keywords: ['Seattle', 'wellness', 'morning', 'health'],
    suitablePages: ['/usa/wellness-packaging'],
    priority: 7,
    sizeHint: 'gallery',
  },
  {
    id: 'vitalgreen-chicago',
    src: '/imgs/seo-photos/a_vitalgreen_superfood_chicago_wellness_pouch_1211501.webp',
    alt: 'VitalGreen Chicago superfood wellness packaging',
    caption: 'Chicago Superfood',
    categories: {
      application: ['wellness', 'supplements'],
      region: ['usa'],
      contentType: ['lifestyle'],
    },
    keywords: ['Chicago', 'superfood', 'wellness', 'health'],
    suitablePages: ['/usa/wellness-packaging'],
    priority: 7,
    sizeHint: 'gallery',
  },

  // ============================================
  // CERTIFICATIONS - 认证
  // ============================================
  {
    id: 'certificates-compliance',
    src: '/imgs/seo-photos/a_certificates_compliance_trust_4184896.webp',
    alt: 'Packaging certifications and compliance badges',
    caption: 'Certifications',
    categories: {
      contentType: ['certification'],
    },
    keywords: ['certification', 'compliance', 'trust', 'badges', 'verified'],
    suitablePages: [
      '/products/compostable-coffee-bags',
      '/products/recyclable-mono-material-pouches',
      '/about',
    ],
    priority: 8,
    sizeHint: 'gallery',
  },
  {
    id: 'eu-ppwr-compliant',
    src: '/imgs/seo-photos/a_eu_ppwr_compliant_pouch_achieve_pack_3186238.webp',
    alt: 'EU PPWR compliant packaging pouch',
    caption: 'EU PPWR Compliant',
    categories: {
      region: ['europe', 'uk'],
      contentType: ['certification'],
    },
    keywords: ['EU', 'PPWR', 'compliant', 'regulation', '2030'],
    suitablePages: [
      '/products/recyclable-mono-material-pouches',
      '/europe/packaging-regulations',
    ],
    priority: 9,
    sizeHint: 'gallery',
  },

  // ============================================
  // LIFESTYLE / APPLICATION - 应用场景
  // ============================================
  {
    id: 'wellness-superfood',
    src: '/imgs/seo-photos/a_wellness_superfood_lifestyle_9527146.webp',
    alt: 'Wellness superfood packaging lifestyle shot',
    caption: 'Wellness Products',
    categories: {
      application: ['wellness'],
      contentType: ['lifestyle'],
    },
    keywords: ['wellness', 'superfood', 'health', 'supplement'],
    suitablePages: ['/solutions/wellness'],
    priority: 8,
    sizeHint: 'gallery',
  },
  {
    id: 'nutrivie-nuts',
    src: '/imgs/seo-photos/a_nutrivie_nuts_sustainable_pouch_lifestyle_0132786.webp',
    alt: 'Nutrivie nuts in sustainable pouch packaging',
    caption: 'Nuts Packaging',
    categories: {
      application: ['nuts', 'snacks'],
      contentType: ['lifestyle'],
    },
    keywords: ['nuts', 'snacks', 'sustainable', 'healthy'],
    suitablePages: ['/solutions/food-beverage'],
    priority: 7,
    sizeHint: 'gallery',
  },
  {
    id: 'wholesome-bakery',
    src: '/imgs/seo-photos/a_wholesome_bakery_pouch_kitchen_9227377.webp',
    alt: 'Wholesome bakery products in pouch packaging',
    caption: 'Bakery Products',
    categories: {
      application: ['bakery'],
      contentType: ['lifestyle'],
    },
    keywords: ['bakery', 'bread', 'baked goods', 'kitchen'],
    suitablePages: ['/solutions/food-beverage'],
    priority: 7,
    sizeHint: 'gallery',
  },
  {
    id: 'artisan-chocolate-abudhabi',
    src: '/imgs/seo-photos/a_artisan_chocolate_abu_dhabi_luxury_pouch_4218900.webp',
    alt: 'Artisan chocolate luxury packaging Abu Dhabi',
    caption: 'Luxury Chocolate',
    categories: {
      application: ['chocolate'],
      region: ['asia'],
      contentType: ['lifestyle'],
    },
    keywords: ['chocolate', 'luxury', 'artisan', 'Abu Dhabi'],
    suitablePages: ['/solutions/food-beverage'],
    priority: 7,
    sizeHint: 'gallery',
  },
  {
    id: 'adaptogens-singapore',
    src: '/imgs/seo-photos/a_adaptogens_singapore_zen_wellness_pouch_1951517.webp',
    alt: 'Adaptogens zen wellness pouch Singapore',
    caption: 'Singapore Wellness',
    categories: {
      application: ['wellness', 'supplements'],
      region: ['asia'],
      contentType: ['lifestyle'],
    },
    keywords: ['adaptogens', 'Singapore', 'zen', 'wellness'],
    suitablePages: ['/asia/wellness-packaging'],
    priority: 7,
    sizeHint: 'gallery',
  },
  {
    id: 'luminara-candle-munich',
    src: '/imgs/seo-photos/a_luminara_candle_munich_luxury_evening_pouch_1830743.webp',
    alt: 'Luminara candle Munich luxury evening packaging',
    caption: 'Munich Luxury',
    categories: {
      application: ['cosmetics'],
      region: ['europe'],
      contentType: ['lifestyle'],
    },
    keywords: ['candle', 'Munich', 'luxury', 'evening'],
    suitablePages: ['/europe/cosmetics-packaging'],
    priority: 6,
    sizeHint: 'gallery',
  },
  {
    id: 'bavarian-bath-bombs',
    src: '/imgs/seo-photos/a_bavarian_bliss_bath_bombs_spa_pouch_9301794.webp',
    alt: 'Bavarian Bliss bath bombs spa pouch',
    caption: 'Bath & Spa',
    categories: {
      application: ['cosmetics'],
      region: ['europe'],
      contentType: ['lifestyle'],
    },
    keywords: ['bath bombs', 'spa', 'Bavaria', 'relaxation'],
    suitablePages: ['/europe/cosmetics-packaging'],
    priority: 6,
    sizeHint: 'gallery',
  },

  // ============================================
  // HERO / MAIN IMAGES - 主图
  // ============================================
  {
    id: 'homepage-hero',
    src: '/imgs/seo-photos/a_homepage_hero_product_showcase_7097945.webp',
    alt: 'Achieve Pack product showcase hero image',
    caption: 'Product Showcase',
    categories: {
      contentType: ['hero'],
    },
    keywords: ['hero', 'showcase', 'homepage', 'main'],
    suitablePages: ['/'],
    priority: 10,
    sizeHint: 'hero',
  },
  {
    id: 'solutions-hub',
    src: '/imgs/seo-photos/a_solutions_hub_comprehensive_offerings_0357822.webp',
    alt: 'Comprehensive packaging solutions hub',
    caption: 'Solutions Hub',
    categories: {
      contentType: ['hero'],
    },
    keywords: ['solutions', 'hub', 'comprehensive', 'offerings'],
    suitablePages: ['/solutions'],
    priority: 9,
    sizeHint: 'hero',
  },
  {
    id: 'cta-start-journey',
    src: '/imgs/seo-photos/a_cta_start_journey_banner_8370209.webp',
    alt: 'Start your packaging journey CTA banner',
    caption: 'Start Your Journey',
    categories: {
      contentType: ['hero'],
    },
    keywords: ['CTA', 'journey', 'start', 'banner'],
    suitablePages: ['/contact', '/quote'],
    priority: 8,
    sizeHint: 'hero',
  },
  {
    id: 'about-sustainability',
    src: '/imgs/seo-photos/a_about_sustainability_mission_5914909.webp',
    alt: 'About sustainability mission and values',
    caption: 'Our Mission',
    categories: {
      contentType: ['hero'],
    },
    keywords: ['sustainability', 'mission', 'about', 'values'],
    suitablePages: ['/about'],
    priority: 9,
    sizeHint: 'hero',
  },
];

// ============================================
// 工具函数
// ============================================

// 总图片数量
export const totalImages = imageHub.length;

// 按分类获取图片
export function getImagesByCategory(
  categoryType: keyof ImageAsset['categories'],
  categoryValue: string
): ImageAsset[] {
  return imageHub.filter((img) => {
    const categories = img.categories[categoryType];
    return categories && categories.includes(categoryValue);
  });
}

// 按页面获取推荐图片
export function getImagesForPage(pagePath: string): ImageAsset[] {
  return imageHub
    .filter((img) => img.suitablePages.includes(pagePath))
    .sort((a, b) => b.priority - a.priority);
}

// 按关键词搜索图片
export function searchImagesByKeywords(keywords: string[]): ImageAsset[] {
  const lowerKeywords = keywords.map((k) => k.toLowerCase());
  return imageHub
    .filter((img) =>
      img.keywords.some((k) =>
        lowerKeywords.some((lk) => k.toLowerCase().includes(lk))
      )
    )
    .sort((a, b) => b.priority - a.priority);
}

// 按尺寸类型获取图片
export function getImagesBySizeHint(sizeHint: ImageAsset['sizeHint']): ImageAsset[] {
  return imageHub.filter((img) => img.sizeHint === sizeHint);
}

// 获取所有可用分类
export function getAllCategories(): Record<string, string[]> {
  const categories: Record<string, Set<string>> = {
    material: new Set(),
    feature: new Set(),
    barrier: new Set(),
    pouchShape: new Set(),
    surface: new Set(),
    application: new Set(),
    region: new Set(),
    contentType: new Set(),
  };

  imageHub.forEach((img) => {
    Object.entries(img.categories).forEach(([key, values]) => {
      if (values) {
        values.forEach((v) => categories[key].add(v));
      }
    });
  });

  return Object.fromEntries(
    Object.entries(categories).map(([k, v]) => [k, Array.from(v)])
  );
}

// 导出为JSON
export function exportAsJSON(): string {
  return JSON.stringify(imageHub, null, 2);
}
