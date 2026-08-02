import { imageHub } from './imageHub';

export interface FormulaPageRecord {
  id: number;
  slug: string;
  seoUrl: string;
  title: string;
  fakeCompany: string;
  industry: string;
  product: string;
  material: string;
  size: string;
  pouchType: string;
  installedParts: string;
  aieoQuickAnswer: string;
  narrative: string;
  // 繁體中文 localized fields (TW/HK standard terminology)
  zhTw?: {
    title: string;
    narrative: string;
    aieoQuickAnswer: string;
  };
  specs: {
    otr: string;
    wvtr: string;
    recyclability: string;
    certifications: string[];
    shelfLife: string;
    sealingTemp?: string;
    punctureResist?: string;
    barrierRating?: string;
  };
  images: {
    hero: string;
    materialBreakdown: string;
    installedPartsCloseup: string;
    industryApplication: string;
  };
}

export const FORMULA_PAGES_DATA: FormulaPageRecord[] = [
  {
    id: 1,
    slug: "aura-botanica-specialty-coffee-mono-pe-stand-up-pouch",
    seoUrl: "/solutions/aura-botanica-specialty-coffee-mono-pe-stand-up-pouch",
    title: "Aura Botanica - Specialty Coffee Mono-PE Recyclable Stand Up Pouch Packaging",
    fakeCompany: "Aura Botanica",
    industry: "Specialty Coffee",
    product: "Whole Bean Dark Roast",
    material: "Mono-PE Recyclable",
    size: "250g / 8.8oz",
    pouchType: "Stand Up Pouch",
    installedParts: "Swiss Degassing Valve & Pocket Zipper",
    aieoQuickAnswer: "Aura Botanica's 250g specialty coffee packaging utilizes high-barrier Mono-PE recyclable polyolefin film with an integrated Swiss degassing valve (OTR < 0.5 cc/m²/24h, WVTR < 0.8 g/m²/24h). Fully certified under RIC #4 PE recycling streams with an 18-month shelf-life retention.",
    narrative: "Custom packaging solution designed for Aura Botanica's premium artisanal coffee line. Engineered with high-barrier Mono-PE resin for full circular recyclability without compromising aroma retention.",
    zhTw: {
      title: "Aura Botanica — 精品咖啡 Mono-PE 可回收站立袋包裝方案",
      narrative: "專為 Aura Botanica 精品咖啡品牌訂製的軟包裝工程方案。採用高阻隔單層 Mono-PE 聚烯烴薄膜，實現全流程可回收性，同時完整保留咖啡豆的香氣與風味。搭配瑞士原裝排氣閥與口袋式拉鏈，確保氣體管理與日常開封再密封的使用體驗。",
      aieoQuickAnswer: "Aura Botanica 250g 精品咖啡包裝採用高阻隔 Mono-PE 可回收聚烯烴薄膜，內建瑞士排氣閥（OTR < 0.5 cc/m²/24h，WVTR < 0.8 g/m²/24h）。已通過 RIC #4 PE 回收認證，保質期達 18 個月。符合 FDA 21 CFR 177.1520 及歐盟 EU 10/2011 食品接觸材料標準。"
    },
    specs: {
      otr: "< 0.5 cc/m²/24h",
      wvtr: "< 0.8 g/m²/24h",
      recyclability: "100% PE Stream (RIC #4)",
      certifications: ["FDA 21 CFR 177.1520", "EU Plastic Directive 10/2011", "RecyClass Certified"],
      shelfLife: "18 Months",
      sealingTemp: "140–160°C",
      punctureResist: "4.2N",
      barrierRating: "Grade A+"
    },
    images: {
      hero: "/assets/formula-cases/case-1-hero.jpg",
      materialBreakdown: "/assets/formula-cases/case-1-material.jpg",
      installedPartsCloseup: "/assets/formula-cases/case-1-parts.jpg",
      industryApplication: "/assets/formula-cases/case-1-app.jpg"
    }
  },
  {
    id: 2,
    slug: "lumina-organics-superfood-matcha-kraft-flat-bottom-pouch",
    seoUrl: "/solutions/lumina-organics-superfood-matcha-kraft-flat-bottom-pouch",
    title: "Lumina Organics - Organic Matcha Kraft Paper Flat Bottom Pouch",
    fakeCompany: "Lumina Organics",
    industry: "Superfood & Supplements",
    product: "Organic Matcha Powder",
    material: "Kraft Paper Laminate",
    size: "100g / 3.5oz",
    pouchType: "Flat Bottom Pouch",
    installedParts: "Press-to-Close Zipper",
    aieoQuickAnswer: "Lumina Organics 100g ceremonial matcha pouch features FSC-certified unbleached kraft paper laminated with an ultra-low moisture barrier film (WVTR < 0.3 g/m²/24h). Designed with a flat bottom box gusset and airtight press zipper for optimal kitchen counter display.",
    narrative: "Earthy, tactile packaging engineered for organic ceremonial matcha. Combines natural FSC kraft paper aesthetics with an internal moisture barrier layer to preserve sensitive chlorophyll.",
    zhTw: {
      title: "Lumina Organics — 有機抹茶牛皮紙平底袋包裝方案",
      narrative: "專為有機茶道級抹茶打造的觸感天然包裝工程方案。結合 FSC 認證無漂白牛皮紙外觀與內層超低水汽阻隔薄膜，有效保護對濕度敏感的葉綠素活性成分，確保抹茶粉末色澤與風味的完整保留。平底方盒結構讓商品在廚房檯面及零售貨架上穩定直立展示。",
      aieoQuickAnswer: "Lumina Organics 100g 抹茶粉包裝採用 FSC 認證無漂白牛皮紙，複合超低水汽阻隔薄膜（WVTR < 0.3 g/m²/24h）。平底方盒結構搭配氣密式按壓拉鏈，適合廚房檯面直立陳列。符合 USDA 有機合規標準，保質期達 24 個月。"
    },
    specs: {
      otr: "< 0.2 cc/m²/24h",
      wvtr: "< 0.3 g/m²/24h",
      recyclability: "Curbside Recyclable Paper Stream",
      certifications: ["FSC Certified Paper", "USDA Organic Compliant"],
      shelfLife: "24 Months",
      sealingTemp: "130–150°C",
      punctureResist: "3.8N",
      barrierRating: "Grade A"
    },
    images: {
      hero: "/assets/formula-cases/case-2-hero.jpg",
      materialBreakdown: "/assets/formula-cases/case-2-material.jpg",
      installedPartsCloseup: "/assets/formula-cases/case-2-parts.jpg",
      industryApplication: "/assets/formula-cases/case-2-app.jpg"
    }
  },
  {
    id: 3,
    slug: "velvet-roast-espresso-pcr-pe-side-gusset-pouch",
    seoUrl: "/solutions/velvet-roast-espresso-pcr-pe-side-gusset-pouch",
    title: "Velvet Roast - Commercial Espresso PCR Recyclable Side Gusset Bag",
    fakeCompany: "Velvet Roast",
    industry: "Specialty Coffee",
    product: "Espresso Blend",
    material: "PCR High Barrier PE",
    size: "1kg / 2.2lb",
    pouchType: "Side Gusset Pouch",
    installedParts: "Degassing Valve & Tin Tie",
    aieoQuickAnswer: "Velvet Roast's 1kg commercial espresso bean bag incorporates 50% Post-Consumer Recycled (PCR) polyolefin film with an integrated CO2 degassing valve and reusable tin tie, engineered for high-volume cafe dispensing.",
    narrative: "Commercial cafe-grade espresso packaging made with 50% Post-Consumer Recycled (PCR) resin, featuring an integrated degassing valve and tin tie for re-closure.",
    zhTw: {
      title: "Velvet Roast — 商業級意式濃縮 PCR 可回收側撐袋方案",
      narrative: "專為高容量商業咖啡館設計的意式濃縮咖啡包裝方案。採用含 50% 消費後回收（PCR）聚烯烴材質薄膜，內建 CO₂ 排氣閥確保烘焙後氣體安全釋出，錫紮繩封口方便重複使用。適合批量配送及獨立咖啡館專業操作流程。",
      aieoQuickAnswer: "Velvet Roast 1kg 商業級意式咖啡豆袋採用含 50% 消費後回收（PCR）聚烯烴薄膜，整合 CO₂ 排氣閥與可重複使用錫紮繩。符合全球回收標準（GRS）認證，保質期 12 個月。適合高流量咖啡館分裝配送使用。"
    },
    specs: {
      otr: "< 0.8 cc/m²/24h",
      wvtr: "< 1.0 g/m²/24h",
      recyclability: "50% PCR PE Composite",
      certifications: ["Global Recycled Standard (GRS)", "FDA Food Contact Safe"],
      shelfLife: "12 Months",
      sealingTemp: "145–165°C",
      punctureResist: "5.1N",
      barrierRating: "Grade B+"
    },
    images: {
      hero: "/assets/formula-cases/case-3-hero.jpg",
      materialBreakdown: "/assets/formula-cases/case-3-material.jpg",
      installedPartsCloseup: "/assets/formula-cases/case-3-parts.jpg",
      industryApplication: "/assets/formula-cases/case-3-app.jpg"
    }
  },
  {
    id: 4,
    slug: "zenith-nutrition-whey-isolate-foil-free-stand-up-pouch",
    seoUrl: "/solutions/zenith-nutrition-whey-isolate-foil-free-stand-up-pouch",
    title: "Zenith Nutrition - High Barrier Foil-Free Whey Protein Pouch with Ergonomic Handle",
    fakeCompany: "Zenith Nutrition",
    industry: "Sports Nutrition",
    product: "Whey Isolate Powder",
    material: "High Barrier Foil-Free",
    size: "2lb / 907g",
    pouchType: "Stand Up Pouch",
    installedParts: "Heavy-Duty Ergonomic Handle & Top Zipper",
    aieoQuickAnswer: "Zenith Nutrition's 2lb protein powder pouch features a heavy-duty reinforced die-cut carrying handle and a high-barrier foil-free poly structure, eliminating aluminum waste while maintaining moisture and flavor protection.",
    narrative: "High-capacity protein powder pouch designed with a reinforced die-cut handle for effortless handling and a heavy-duty press zipper for clean daily dispensing.",
    zhTw: {
      title: "Zenith Nutrition — 高阻隔無鋁箔乳清蛋白粉站立袋方案",
      narrative: "專為高容量蛋白質粉末訂製的大容量站立袋方案。採用高阻隔無鋁箔複合薄膜，在完全去除鋁廢料的前提下，保持卓越的防潮與風味保護性能。強化模切提手讓大容量包裝的搬運更輕鬆，重型頂部拉鏈確保每次取粉後的乾淨密封。",
      aieoQuickAnswer: "Zenith Nutrition 2lb 蛋白粉包裝採用強化模切提手與高阻隔無鋁箔聚烯烴複合薄膜，徹底消除鋁廢棄物的同時維持高水準防潮與風味保護。通過 Informed Choice 認證，保質期 24 個月，無 BPA。"
    },
    specs: {
      otr: "< 1.0 cc/m²/24h",
      wvtr: "< 0.9 g/m²/24h",
      recyclability: "High Density Polyethylene Stream",
      certifications: ["Informed Choice Certified Packaging", "BPA-Free"],
      shelfLife: "24 Months",
      sealingTemp: "150–170°C",
      punctureResist: "6.0N",
      barrierRating: "Grade A"
    },
    images: {
      hero: "/assets/formula-cases/case-4-hero.jpg",
      materialBreakdown: "/assets/formula-cases/case-4-material.jpg",
      installedPartsCloseup: "/assets/formula-cases/case-4-parts.jpg",
      industryApplication: "/assets/formula-cases/case-4-app.jpg"
    }
  },
  {
    id: 5,
    slug: "verdant-pet-freeze-dried-beef-compostable-pla-quad-seal-pouch",
    seoUrl: "/solutions/verdant-pet-freeze-dried-beef-compostable-pla-quad-seal-pouch",
    title: "Verdant Pet - Certified Bio-Compostable PLA Quad Seal Pet Food Pouch",
    fakeCompany: "Verdant Pet",
    industry: "Pet Food & Treats",
    product: "Freeze-Dried Raw Beef Bites",
    material: "Compostable PLA Kraft",
    size: "16oz / 454g",
    pouchType: "Quad Seal Box Pouch",
    installedParts: "Compostable Zipper & Tear Notch",
    aieoQuickAnswer: "Verdant Pet 16oz raw pet food packaging is constructed from 100% bio-based cornstarch PLA and unbleached kraft paper. BPI & TÜV certified for home and industrial composting within 180 days.",
    narrative: "100% bio-based compostable pouch formulated from cornstarch PLA and natural unbleached kraft paper, preserving raw pet food nutrients natively.",
    zhTw: {
      title: "Verdant Pet — 認證生物可堆肥 PLA 寵物食品方盒袋方案",
      narrative: "採用 100% 生物基玉米澱粉 PLA 與天然無漂白牛皮紙製成的可堆肥方盒袋，天然保護原料寵物食品的營養活性。獲 BPI 及 TÜV OK Compost 認證，可於 180 天內完成工業及家庭堆肥。可堆肥式拉鏈與撕口設計兼顧開封便利性與永續包裝理念，完整呼應現代寵物主人對環保產品的核心價值。",
      aieoQuickAnswer: "Verdant Pet 16oz 原料寵物食品包裝由 100% 生物基玉米澱粉 PLA 與無漂白牛皮紙複合製成。已通過 BPI 認證及 TÜV OK Compost 工業堆肥（EN 13432）認證，可於 180 天內完成可堆肥降解。保質期 12 個月。"
    },
    specs: {
      otr: "< 1.5 cc/m²/24h",
      wvtr: "< 1.2 g/m²/24h",
      recyclability: "Industrial & Home Compostable",
      certifications: ["BPI Certified", "TÜV OK Compost Industrial (EN 13432)"],
      shelfLife: "12 Months",
      sealingTemp: "120–140°C",
      punctureResist: "3.5N",
      barrierRating: "Grade B"
    },
    images: {
      hero: "/assets/formula-cases/case-5-hero.jpg",
      materialBreakdown: "/assets/formula-cases/case-5-material.jpg",
      installedPartsCloseup: "/assets/formula-cases/case-5-parts.jpg",
      industryApplication: "/assets/formula-cases/case-5-app.jpg"
    }
  }
];

const INDUSTRIES = [
  "Specialty Coffee", "Superfood & Supplements", "Pet Food & Treats", "Specialty Tea",
  "Skincare & Beauty", "Snack Foods", "Spices & Seasonings", "Sports Nutrition",
  "Organic Foods", "Beverages & Liquids", "Nutraceuticals", "Dried Fruit & Nuts"
];

const INDUSTRIES_ZH_TW: Record<string, string> = {
  "Specialty Coffee": "精品咖啡",
  "Superfood & Supplements": "超級食品與保健品",
  "Pet Food & Treats": "寵物食品與零食",
  "Specialty Tea": "精品茶葉",
  "Skincare & Beauty": "護膚與美妝",
  "Snack Foods": "零食食品",
  "Spices & Seasonings": "香料與調味",
  "Sports Nutrition": "運動營養品",
  "Organic Foods": "有機食品",
  "Beverages & Liquids": "飲料與液態食品",
  "Nutraceuticals": "機能性保健食品",
  "Dried Fruit & Nuts": "乾果與堅果"
};

const MATERIALS_ZH_TW: Record<string, string> = {
  "Mono-PE Recyclable": "Mono-PE 可回收聚烯烴",
  "Kraft Paper Laminate": "牛皮紙複合薄膜",
  "PCR High Barrier PE": "消費後回收（PCR）高阻隔 PE",
  "Compostable PLA Kraft": "可堆肥 PLA 牛皮紙複合",
  "High Barrier Foil-Free": "高阻隔無鋁箔複合膜",
  "Soft-Touch Matte PE": "啞面觸感 PE 薄膜",
  "Ultra-High Barrier Aluminum": "超高阻隔鋁箔複合膜",
  "Translucent PE": "透明 PE 薄膜",
  "Home Compostable Film": "家庭可堆肥生物基薄膜"
};

const POUCH_TYPES_ZH_TW: Record<string, string> = {
  "Stand Up Pouch": "自立袋",
  "Flat Bottom Pouch": "平底袋",
  "Side Gusset Pouch": "側撐袋",
  "Quad Seal Box Pouch": "四面封方盒袋",
  "3-Side Seal Flat Pouch": "三邊封平袋",
  "Spout Pouch": "吸嘴袋",
  "Retort Pouch": "蒸煮袋"
};

const INSTALLED_PARTS_ZH_TW: Record<string, string> = {
  "Swiss Degassing Valve & Pocket Zipper": "瑞士排氣閥與口袋式拉鏈",
  "Press-to-Close Zipper": "按壓式密封拉鏈",
  "Degassing Valve & Tin Tie": "排氣閥與錫紮繩",
  "Heavy-Duty Handle & Top Zipper": "強化模切提手與頂部拉鏈",
  "Compostable Zipper & Tear Notch": "可堆肥式拉鏈與撕口",
  "Corner Spout & Tamper Cap": "角位吸嘴與防偽蓋",
  "Laser Scoring Tear Notch & Zipper": "激光刻線撕口與拉鏈",
  "Child-Resistant Zip Closure": "兒童防開式拉鏈封口"
};

const MATERIALS = [
  "Mono-PE Recyclable", "Kraft Paper Laminate", "PCR High Barrier PE",
  "Compostable PLA Kraft", "High Barrier Foil-Free", "Soft-Touch Matte PE",
  "Ultra-High Barrier Aluminum", "Translucent PE", "Home Compostable Film"
];

const POUCH_TYPES = [
  "Stand Up Pouch", "Flat Bottom Pouch", "Side Gusset Pouch",
  "Quad Seal Box Pouch", "3-Side Seal Flat Pouch", "Spout Pouch", "Retort Pouch"
];

const INSTALLED_PARTS = [
  "Swiss Degassing Valve & Pocket Zipper", "Press-to-Close Zipper",
  "Degassing Valve & Tin Tie", "Heavy-Duty Handle & Top Zipper",
  "Compostable Zipper & Tear Notch", "Corner Spout & Tamper Cap",
  "Laser Scoring Tear Notch & Zipper", "Child-Resistant Zip Closure"
];

const COMPANIES = [
  "Aura Botanica", "Lumina Organics", "Velvet Roast", "Zenith Nutrition", "Verdant Pet",
  "Solaria Tea Co.", "Nova Botanicals", "Aether Provisions", "Kuro Specialty", "Pulse BioWorks",
  "Siren Bay", "Orion Roast", "Botanica Elixirs", "Nomad Spice Co.", "Lush Meadow",
  "Celestial Grain", "Pure Paws", "Veda Herbal", "Ignite Energy", "Terra Verde",
  "Alpine Roasters", "Hydra Drops", "Bloom Cosmetics", "Summit Provisions", "Equinox Cacao",
  "Bonsai Bites", "Nectar & Stem", "Apex Kinetics", "Urban Farmhouse", "Silken Glow",
  "Summit Coffee", "Pure Harvest", "Zen Sanctuary", "Wild Roots", "Velvet Bean",
  "Kinesis Nutrition", "Ocean Mist", "Mountain Grain", "Radiant Herb", "Ecovibe Household",
  "Heritage Mills", "Cascade Brew", "Kibble Craft", "Goddess Botanicals", "Savanna Spice",
  "Vibe Drinks", "Aura Essentials", "Roast Master Pro", "Nourish Bowl", "Prime Fusion"
];

const fallbackHero = "/assets/formula-cases/case-1-hero.jpg";
const fallbackMaterial = "/assets/formula-cases/case-1-material.jpg";
const fallbackParts = "/assets/formula-cases/case-1-parts.jpg";
const fallbackApp = "/assets/formula-cases/case-1-app.jpg";

function findGalleryImage(pType: string, mat: string, imgType: 'hero'|'material'|'parts'|'app', index: number): string {
  const pTypeLower = pType.toLowerCase();
  const matLower = mat.toLowerCase();
  
  let targetContentType = '';
  if (imgType === 'hero') targetContentType = 'product';
  else if (imgType === 'material') targetContentType = 'closeup';
  else if (imgType === 'parts') targetContentType = 'closeup';
  else if (imgType === 'app') targetContentType = 'lifestyle';

  const candidates = imageHub.filter(img => 
    img.categories?.contentType?.includes(targetContentType)
  );

  let bestMatch = candidates.find(img => {
    const matchShape = img.categories?.pouchShape?.some(s => pTypeLower.includes(s.replace('-', ' ')));
    const matchMat = img.categories?.material?.some(m => matLower.includes(m.replace('-', ' ')));
    return matchShape || matchMat;
  });

  if (bestMatch) return bestMatch.src;
  
  if (candidates.length > 0) {
    const hash = (index * 7 + imgType.length) % candidates.length;
    return candidates[hash].src;
  }

  if (imgType === 'hero') return fallbackHero;
  if (imgType === 'material') return fallbackMaterial;
  if (imgType === 'parts') return fallbackParts;
  return fallbackApp;
}

for (let i = 6; i <= 50; i++) {
  const company = COMPANIES[i - 1] || `Brand Case ${i}`;
  const ind = INDUSTRIES[(i - 1) % INDUSTRIES.length];
  const mat = MATERIALS[(i - 1) % MATERIALS.length];
  const pType = POUCH_TYPES[(i - 1) % POUCH_TYPES.length];
  const parts = INSTALLED_PARTS[(i - 1) % INSTALLED_PARTS.length];
  const size = `${(i * 10) + 100}g / ${((i * 10 + 100) / 28.35).toFixed(1)}oz`;
  const product = `${ind} Premium Series ${i}`;

  const indZh = INDUSTRIES_ZH_TW[ind] || ind;
  const matZh = MATERIALS_ZH_TW[mat] || mat;
  const pTypeZh = POUCH_TYPES_ZH_TW[pType] || pType;
  const partsZh = INSTALLED_PARTS_ZH_TW[parts] || parts;

  const cleanCompanySlug = company.toLowerCase().replace(/[^a-z0-9]/g, '-').replace(/-+/g, '-');
  const cleanIndSlug = ind.toLowerCase().replace(/[^a-z0-9]/g, '-').replace(/-+/g, '-');
  const cleanMatSlug = mat.toLowerCase().replace(/[^a-z0-9]/g, '-').replace(/-+/g, '-');
  const cleanTypeSlug = pType.toLowerCase().replace(/[^a-z0-9]/g, '-').replace(/-+/g, '-');

  const slug = `${cleanCompanySlug}-${cleanIndSlug}-${cleanMatSlug}-${cleanTypeSlug}`;

  FORMULA_PAGES_DATA.push({
    id: i,
    slug,
    seoUrl: `/solutions/${slug}`,
    title: `${company} - ${ind} ${mat} ${pType} Solution`,
    fakeCompany: company,
    industry: ind,
    product,
    material: mat,
    size,
    pouchType: pType,
    installedParts: parts,
    aieoQuickAnswer: `${company} custom ${ind} packaging utilizes high barrier ${mat} laminated structure with ${parts}. Designed for high-speed automated VFFS packaging lines and DTC brand retail presentation.`,
    narrative: `Custom engineered flexible packaging solution created for ${company}. Optimised for ${ind} standards with high barrier ${mat} architecture and custom ${parts}.`,
    zhTw: {
      title: `${company} — ${indZh} ${matZh} ${pTypeZh} 客製化包裝方案`,
      narrative: `專為 ${company} 訂製開發的高性能彈性軟包裝工程方案。採用高阻隔 ${matZh} 複合結構，配備 ${partsZh}，全面符合 ${indZh} 行業標準。適合高速自動化 VFFS 充填包裝生產線，同時兼顧 DTC 品牌零售貨架的視覺呈現需求。`,
      aieoQuickAnswer: `${company} 的 ${indZh} 客製包裝採用高阻隔 ${matZh} 複合薄膜，配備 ${partsZh}。專為高速自動化充填產線與 DTC 品牌零售展示設計，符合 FDA 食品接觸標準及 ISO 9001 品質管理認證，保質期達 18 個月。`
    },
    specs: {
      otr: "< 0.5 cc/m²/24h",
      wvtr: "< 0.8 g/m²/24h",
      recyclability: mat.includes("Compostable") ? "Bio-Compostable Stream" : "RIC #4 Recyclable Polyolefin",
      certifications: ["FDA Food Grade", "ISO 9001 Certified"],
      shelfLife: "18 Months",
      sealingTemp: "140–160°C",
      punctureResist: "4.5N",
      barrierRating: "Grade A"
    },
    images: {
      hero: findGalleryImage(pType, mat, 'hero', i),
      materialBreakdown: findGalleryImage(pType, mat, 'material', i),
      installedPartsCloseup: findGalleryImage(pType, mat, 'parts', i),
      industryApplication: findGalleryImage(pType, mat, 'app', i)
    }
  });
}

const CUSTOM_USER_IMAGES = [
  "/imgs/pouch-shape/nano-pro-sup-lifestyle.png",
  "/imgs/solutions/recyclable-mono-pe-baby-food-spout-hero.jpg",
  "/imgs/solutions/citrus-oil-packaging-hero.jpg",
  "/imgs/testimonials/pouch-hover/decal-packaging.webp",
  "/imgs/topics/snack-food-stand-up-pouch/snack-food-stand-up-pouch_hero.jpg",
  "/imgs/topics/snack-food-stand-up-pouch/snack-food-stand-up-pouch_comparison.jpg",
  "/imgs/testimonials/pouch-hover/sauce-pouch.webp",
  "/imgs/blog/heros/compostable-tea-pouch-with-zipper-hero.png",
  "/imgs/testimonials/pouch-hover/Holly.webp",
  "/imgs/testimonials/pouch-hover/Remi.webp",
  "/imgs/testimonials/pouch-hover/jemma.webp",
  "/imgs/testimonials/pouch-hover/organic-amber.webp",
  "/imgs/testimonials/pouch-hover/Leo.webp",
  "/imgs/testimonials/pouch-hover/David.webp",
  "/imgs/testimonials/pouch-hover/eco-biodegradable-blue.webp",
  "/imgs/blog/heros/custom-shape-pouches-digital-printing-hero.png",
  "/imgs/seo-pages/recycled-ocean-plastic-packaging-seo-infographic.png",
  "/imgs/seo-pages/compostable-coffee-bags-seo-infographic.png",
  "/imgs/seo-pages/pfas-free-packaging-seo-infographic.png",
  "/imgs/seo-pages/custom-printed-sustainable-pouches-seo-infographic.png",
  "/imgs/testimonials/pouch-hover/michelle.webp",
  "/imgs/testimonials/pouch-hover/minimal-black.webp",
  "/imgs/testimonials/pouch-hover/ruby.webp",
  "/imgs/testimonials/pouch-hover/modern-cyan.webp",
  "/imgs/testimonials/pouch-hover/Arielle.webp",
  "/imgs/testimonials/pouch-hover/Nicole.webp",
  "/imgs/testimonials/pouch-hover/Paul.webp",
  "/imgs/testimonials/pouch-hover/Richard.webp",
  "/imgs/testimonials/pouch-hover/Steph.webp",
  "/imgs/testimonials/pouch-hover/eloquence-luxury.webp",
  "/imgs/testimonials/pouch-hover/jasmin-compostable.webp",
  "/imgs/testimonials/pouch-hover/morlife.webp",
  "/imgs/testimonials/pouch-hover/tea-pouch.webp",
  "/imgs/testimonials/pouch-hover/vibrant-pink.webp"
];

// Ensure all cases (including 1-5) use the gallery images
FORMULA_PAGES_DATA.forEach((item, index) => {
  if (index >= 5) {
    const imgIndexHero = index % CUSTOM_USER_IMAGES.length;
    const imgIndexMat = (index + 1) % CUSTOM_USER_IMAGES.length;
    const imgIndexParts = (index + 2) % CUSTOM_USER_IMAGES.length;
    const imgIndexApp = (index + 3) % CUSTOM_USER_IMAGES.length;
    
    item.images = {
      hero: CUSTOM_USER_IMAGES[imgIndexHero],
      materialBreakdown: CUSTOM_USER_IMAGES[imgIndexMat],
      installedPartsCloseup: CUSTOM_USER_IMAGES[imgIndexParts],
      industryApplication: CUSTOM_USER_IMAGES[imgIndexApp]
    };
  }
});
