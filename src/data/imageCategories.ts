// Image Categories - 图片分类定义
// 用于标准化图片元数据，支持AI智能匹配

export const ImageCategories = {
  // 材料类型
  material: {
    compostable: 'compostable',
    homeCompostable: 'home-compostable',
    industrialCompostable: 'industrial-compostable',
    recyclable: 'recyclable',
    monoMaterial: 'mono-material',
    pcr: 'pcr',
    bioPE: 'bio-pe',
    plantBased: 'plant-based',
  },
  
  // 产品功能
  feature: {
    degassingValve: 'degassing-valve',
    ziplock: 'ziplock',
    tinTie: 'tin-tie',
    spout: 'spout',
    tearNotch: 'tear-notch',
    hangHole: 'hang-hole',
    pressToClose: 'press-to-close',
  },
  
  // 阻隔等级
  barrier: {
    high: 'high-barrier',
    medium: 'medium-barrier',
    low: 'low-barrier',
  },
  
  // 袋型
  pouchShape: {
    standUp: 'stand-up-pouch',
    flatBottom: 'flat-bottom',
    sideGusset: 'side-gusset',
    threeSideSeal: 'three-side-seal',
    spoutPouch: 'spout-pouch',
    quadSeal: 'quad-seal',
  },
  
  // 印刷/表面工艺
  surface: {
    matte: 'matte',
    gloss: 'gloss',
    softTouch: 'soft-touch',
    metallic: 'metallic',
    embossed: 'embossed',
    foil: 'foil-stamping',
    spotUV: 'spot-uv',
  },
  
  // 应用场景
  application: {
    coffee: 'coffee',
    tea: 'tea',
    snacks: 'snacks',
    nuts: 'nuts',
    petFood: 'pet-food',
    cosmetics: 'cosmetics',
    wellness: 'wellness',
    bakery: 'bakery',
    supplements: 'supplements',
    chocolate: 'chocolate',
  },
  
  // 地区
  region: {
    usa: 'usa',
    canada: 'canada',
    europe: 'europe',
    uk: 'uk',
    australia: 'australia',
    newZealand: 'new-zealand',
    asia: 'asia',
    global: 'global',
  },
  
  // 内容类型
  contentType: {
    infographic: 'infographic',
    lifestyle: 'lifestyle',
    product: 'product',
    certification: 'certification',
    process: 'process',
    comparison: 'comparison',
    hero: 'hero',
    gallery: 'gallery',
    closeup: 'closeup',
  },
} as const;

// TypeScript 类型导出
export type MaterialCategory = typeof ImageCategories.material[keyof typeof ImageCategories.material];
export type FeatureCategory = typeof ImageCategories.feature[keyof typeof ImageCategories.feature];
export type BarrierCategory = typeof ImageCategories.barrier[keyof typeof ImageCategories.barrier];
export type PouchShapeCategory = typeof ImageCategories.pouchShape[keyof typeof ImageCategories.pouchShape];
export type SurfaceCategory = typeof ImageCategories.surface[keyof typeof ImageCategories.surface];
export type ApplicationCategory = typeof ImageCategories.application[keyof typeof ImageCategories.application];
export type RegionCategory = typeof ImageCategories.region[keyof typeof ImageCategories.region];
export type ContentTypeCategory = typeof ImageCategories.contentType[keyof typeof ImageCategories.contentType];

// 分类中文名称映射（用于UI显示）
export const CategoryLabels = {
  material: {
    compostable: '可堆肥',
    'home-compostable': '家庭可堆肥',
    'industrial-compostable': '工业可堆肥',
    recyclable: '可回收',
    'mono-material': '单一材料',
    pcr: 'PCR再生塑料',
    'bio-pe': '生物基PE',
    'plant-based': '植物基',
  },
  barrier: {
    'high-barrier': '高阻隔',
    'medium-barrier': '中阻隔',
    'low-barrier': '低阻隔',
  },
  pouchShape: {
    'stand-up-pouch': '站立袋',
    'flat-bottom': '平底袋',
    'side-gusset': '侧风琴袋',
    'three-side-seal': '三边封',
    'spout-pouch': '吸嘴袋',
    'quad-seal': '四边封',
  },
  application: {
    coffee: '咖啡',
    tea: '茶叶',
    snacks: '零食',
    nuts: '坚果',
    'pet-food': '宠物食品',
    cosmetics: '化妆品',
    wellness: '健康产品',
    bakery: '烘焙',
  },
  region: {
    usa: '美国',
    canada: '加拿大',
    europe: '欧洲',
    uk: '英国',
    australia: '澳大利亚',
    'new-zealand': '新西兰',
    asia: '亚洲',
    global: '全球',
  },
};
