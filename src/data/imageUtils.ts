// Image Utils - AI图片匹配工具
// 提供智能图片匹配和推荐功能

import { 
  imageHub, 
  ImageAsset, 
  getImagesForPage, 
  searchImagesByKeywords,
  getImagesByCategory,
  getImagesBySizeHint
} from './imageHub';

// ============================================
// 类型定义
// ============================================

export interface PageImageRecommendation {
  pagePath: string;
  pageTitle: string;
  heroImage?: ImageAsset;
  galleryImages: ImageAsset[];
  inlineImages: ImageAsset[];
  certificationImages: ImageAsset[];
}

export interface ContentThemeMapping {
  theme: string;
  primaryKeywords: string[];
  secondaryKeywords: string[];
  categories: {
    material?: string[];
    feature?: string[];
    barrier?: string[];
    pouchShape?: string[];
    surface?: string[];
    application?: string[];
    region?: string[];
  };
}

// ============================================
// 主题关键词映射
// ============================================

const themeKeywordMappings: Record<string, ContentThemeMapping> = {
  'compostable-coffee': {
    theme: 'compostable-coffee',
    primaryKeywords: ['compostable', 'coffee', 'eco-friendly'],
    secondaryKeywords: ['degassing', 'roastery', 'sustainable', 'biodegradable'],
    categories: {
      material: ['compostable', 'home-compostable', 'industrial-compostable'],
      feature: ['degassing-valve', 'tin-tie'],
      application: ['coffee'],
    },
  },
  'compostable-standup': {
    theme: 'compostable-standup',
    primaryKeywords: ['compostable', 'stand-up', 'pouch'],
    secondaryKeywords: ['garden', 'home composting', 'backyard', 'sustainable'],
    categories: {
      material: ['compostable', 'home-compostable'],
      pouchShape: ['stand-up-pouch'],
    },
  },
  'recyclable-mono': {
    theme: 'recyclable-mono',
    primaryKeywords: ['recyclable', 'mono-material', 'PE'],
    secondaryKeywords: ['store drop-off', 'curbside', 'circular economy', 'GRS'],
    categories: {
      material: ['recyclable', 'mono-material'],
    },
  },
  'coffee-valve': {
    theme: 'coffee-valve',
    primaryKeywords: ['degassing valve', 'coffee', 'freshness'],
    secondaryKeywords: ['one-way valve', 'CO2', 'tin tie', 'reseal'],
    categories: {
      feature: ['degassing-valve', 'tin-tie', 'ziplock'],
      application: ['coffee'],
    },
  },
  'low-moq': {
    theme: 'low-moq',
    primaryKeywords: ['low MOQ', 'small batch', 'startup'],
    secondaryKeywords: ['digital printing', 'trial order', 'ecommerce', 'DTC'],
    categories: {},
  },
  'high-barrier': {
    theme: 'high-barrier',
    primaryKeywords: ['high barrier', 'premium', 'protection'],
    secondaryKeywords: ['luxury', 'extended shelf life', 'metallic', 'foil'],
    categories: {
      barrier: ['high-barrier'],
    },
  },
  'medium-barrier': {
    theme: 'medium-barrier',
    primaryKeywords: ['medium barrier', 'balanced', 'pantry'],
    secondaryKeywords: ['dry goods', 'snacks', 'everyday'],
    categories: {
      barrier: ['medium-barrier'],
    },
  },
  'low-barrier': {
    theme: 'low-barrier',
    primaryKeywords: ['low barrier', 'fresh', 'breathable'],
    secondaryKeywords: ['produce', 'short shelf life', 'natural'],
    categories: {
      barrier: ['low-barrier'],
    },
  },
  'surface-finish': {
    theme: 'surface-finish',
    primaryKeywords: ['matte', 'gloss', 'soft-touch'],
    secondaryKeywords: ['metallic', 'embossed', 'foil stamping', 'premium'],
    categories: {
      surface: ['matte', 'gloss', 'soft-touch', 'metallic', 'embossed'],
    },
  },
  'pouch-shapes': {
    theme: 'pouch-shapes',
    primaryKeywords: ['stand-up', 'flat bottom', 'side gusset'],
    secondaryKeywords: ['three side seal', 'spout pouch', 'doypack'],
    categories: {
      pouchShape: ['stand-up-pouch', 'flat-bottom', 'side-gusset', 'three-side-seal', 'spout-pouch'],
    },
  },
  'usa-coffee': {
    theme: 'usa-coffee',
    primaryKeywords: ['USA', 'coffee', 'roaster'],
    secondaryKeywords: ['NYC', 'artisan', 'specialty'],
    categories: {
      application: ['coffee'],
      region: ['usa'],
    },
  },
  'australia-coffee': {
    theme: 'australia-coffee',
    primaryKeywords: ['Australia', 'coffee', 'organic'],
    secondaryKeywords: ['Perth', 'Melbourne', 'specialty'],
    categories: {
      application: ['coffee'],
      region: ['australia'],
    },
  },
  'europe-packaging': {
    theme: 'europe-packaging',
    primaryKeywords: ['Europe', 'EU', 'PPWR'],
    secondaryKeywords: ['regulation', 'compliant', '2030'],
    categories: {
      region: ['europe', 'uk'],
    },
  },
};

// ============================================
// AI 智能推荐函数
// ============================================

/**
 * AI智能推荐页面图片
 * 根据页面路径和内容信息，智能匹配最适合的图片
 */
export function getAIRecommendedImages(
  pagePath: string,
  pageContent: {
    title: string;
    keywords: string[];
    sections?: string[];
  }
): PageImageRecommendation {
  // 1. 首先获取该页面的专属图片
  const pageImages = getImagesForPage(pagePath);
  
  // 2. 根据页面关键词搜索相关图片
  const keywordImages = searchImagesByKeywords(pageContent.keywords);
  
  // 3. 合并去重，按优先级排序
  const allImages: ImageAsset[] = [...pageImages];
  keywordImages.forEach((img) => {
    if (!allImages.find((i) => i.id === img.id)) {
      allImages.push(img);
    }
  });
  
  // 4. 分配图片角色
  const heroImages = allImages.filter((img) => img.sizeHint === 'hero');
  const galleryImages = allImages.filter((img) => 
    img.sizeHint === 'gallery' && 
    !heroImages.find((h) => h.id === img.id)
  );
  const inlineImages = allImages.filter((img) => img.sizeHint === 'inline');
  const certificationImages = allImages.filter((img) => 
    img.categories.contentType.includes('certification')
  );
  
  return {
    pagePath,
    pageTitle: pageContent.title,
    heroImage: heroImages[0],
    galleryImages: galleryImages.slice(0, 4),
    inlineImages: inlineImages.slice(0, 6),
    certificationImages: certificationImages.slice(0, 3),
  };
}

/**
 * 根据SEO内容主题自动匹配图片
 * 使用预定义的主题映射进行智能匹配
 */
export function matchImagesForSEOContent(
  contentTheme: string,
  options?: {
    materialType?: string;
    region?: string;
    maxImages?: number;
  }
): ImageAsset[] {
  const mapping = themeKeywordMappings[contentTheme];
  const allKeywords: string[] = [];
  const matches: ImageAsset[] = [];
  
  // 添加主题关键词
  if (mapping) {
    allKeywords.push(...mapping.primaryKeywords, ...mapping.secondaryKeywords);
    
    // 按分类获取图片
    if (mapping.categories.material) {
      mapping.categories.material.forEach((cat) => {
        matches.push(...getImagesByCategory('material', cat));
      });
    }
    if (mapping.categories.feature) {
      mapping.categories.feature.forEach((cat) => {
        matches.push(...getImagesByCategory('feature', cat));
      });
    }
    if (mapping.categories.barrier) {
      mapping.categories.barrier.forEach((cat) => {
        matches.push(...getImagesByCategory('barrier', cat));
      });
    }
    if (mapping.categories.application) {
      mapping.categories.application.forEach((cat) => {
        matches.push(...getImagesByCategory('application', cat));
      });
    }
    if (mapping.categories.region) {
      mapping.categories.region.forEach((cat) => {
        matches.push(...getImagesByCategory('region', cat));
      });
    }
  } else {
    // 如果没有预定义映射，使用主题作为关键词
    allKeywords.push(contentTheme);
  }
  
  // 添加可选的材料类型
  if (options?.materialType) {
    allKeywords.push(options.materialType);
    matches.push(...getImagesByCategory('material', options.materialType));
  }
  
  // 添加可选的地区
  if (options?.region) {
    allKeywords.push(options.region);
    matches.push(...getImagesByCategory('region', options.region));
  }
  
  // 通过关键词搜索补充
  const keywordMatches = searchImagesByKeywords(allKeywords);
  keywordMatches.forEach((img) => {
    if (!matches.find((m) => m.id === img.id)) {
      matches.push(img);
    }
  });
  
  // 排序并限制数量
  const sorted = matches.sort((a, b) => b.priority - a.priority);
  const maxImages = options?.maxImages || 8;
  
  return sorted.slice(0, maxImages);
}

/**
 * 获取特定材料类型的推荐图片组合
 */
export function getMaterialImageSet(materialType: string): {
  infographic?: ImageAsset;
  lifestyle: ImageAsset[];
  product: ImageAsset[];
  certification: ImageAsset[];
} {
  const materialImages = getImagesByCategory('material', materialType);
  
  return {
    infographic: materialImages.find((img) => 
      img.categories.contentType.includes('infographic')
    ),
    lifestyle: materialImages.filter((img) => 
      img.categories.contentType.includes('lifestyle')
    ).slice(0, 3),
    product: materialImages.filter((img) => 
      img.categories.contentType.includes('product')
    ).slice(0, 3),
    certification: materialImages.filter((img) => 
      img.categories.contentType.includes('certification')
    ).slice(0, 2),
  };
}

/**
 * 获取特定地区的推荐图片
 */
export function getRegionalImages(region: string): ImageAsset[] {
  return getImagesByCategory('region', region)
    .sort((a, b) => b.priority - a.priority);
}

/**
 * 获取特定应用场景的推荐图片
 */
export function getApplicationImages(application: string): ImageAsset[] {
  return getImagesByCategory('application', application)
    .sort((a, b) => b.priority - a.priority);
}

// ============================================
// 统计和分析
// ============================================

/**
 * 获取图片库统计信息
 */
export function getImageStatistics(): {
  total: number;
  byContentType: Record<string, number>;
  byMaterial: Record<string, number>;
  byRegion: Record<string, number>;
  byApplication: Record<string, number>;
  bySizeHint: Record<string, number>;
} {
  const stats = {
    total: imageHub.length,
    byContentType: {} as Record<string, number>,
    byMaterial: {} as Record<string, number>,
    byRegion: {} as Record<string, number>,
    byApplication: {} as Record<string, number>,
    bySizeHint: {} as Record<string, number>,
  };
  
  imageHub.forEach((img) => {
    // Content Type
    img.categories.contentType.forEach((ct) => {
      stats.byContentType[ct] = (stats.byContentType[ct] || 0) + 1;
    });
    
    // Material
    if (img.categories.material) {
      img.categories.material.forEach((m) => {
        stats.byMaterial[m] = (stats.byMaterial[m] || 0) + 1;
      });
    }
    
    // Region
    if (img.categories.region) {
      img.categories.region.forEach((r) => {
        stats.byRegion[r] = (stats.byRegion[r] || 0) + 1;
      });
    }
    
    // Application
    if (img.categories.application) {
      img.categories.application.forEach((a) => {
        stats.byApplication[a] = (stats.byApplication[a] || 0) + 1;
      });
    }
    
    // Size Hint
    if (img.sizeHint) {
      stats.bySizeHint[img.sizeHint] = (stats.bySizeHint[img.sizeHint] || 0) + 1;
    }
  });
  
  return stats;
}

/**
 * 检查页面是否有足够的图片覆盖
 */
export function checkPageImageCoverage(pagePath: string): {
  hasHero: boolean;
  galleryCount: number;
  totalCount: number;
  suggestions: string[];
} {
  const images = getImagesForPage(pagePath);
  const hasHero = images.some((img) => img.sizeHint === 'hero');
  const galleryCount = images.filter((img) => img.sizeHint === 'gallery').length;
  const totalCount = images.length;
  
  const suggestions: string[] = [];
  
  if (!hasHero) {
    suggestions.push('Missing hero image for this page');
  }
  if (galleryCount < 3) {
    suggestions.push(`Only ${galleryCount} gallery images - recommend at least 4`);
  }
  if (totalCount < 4) {
    suggestions.push(`Low image coverage (${totalCount}) - add more relevant images`);
  }
  
  return {
    hasHero,
    galleryCount,
    totalCount,
    suggestions,
  };
}

// ============================================
// 导出工具
// ============================================

/**
 * 导出图片Hub为JSON供外部系统使用
 */
export function exportImageHubAsJSON(): string {
  return JSON.stringify(imageHub, null, 2);
}

/**
 * 导出页面图片映射为JSON
 */
export function exportPageImageMappingAsJSON(): string {
  const pages = [
    '/products/compostable-coffee-bags',
    '/products/compostable-stand-up-pouches',
    '/products/recyclable-mono-material-pouches',
    '/products/coffee-bags-degassing-valve',
    '/products/low-moq-packaging',
    '/materials/compostable',
    '/materials/pcr',
    '/materials/bio-pe',
    '/materials/recyclable-mono-pe',
    '/options/barrier',
    '/options/high-barrier',
    '/options/medium-barrier',
    '/options/low-barrier',
    '/options/surface-finish',
    '/options/printing-types',
    '/options/reclosure',
    '/options/pouch-shapes',
  ];
  
  const mapping: Record<string, ImageAsset[]> = {};
  
  pages.forEach((page) => {
    mapping[page] = getImagesForPage(page);
  });
  
  return JSON.stringify(mapping, null, 2);
}

/**
 * 获取所有可用的主题列表
 */
export function getAvailableThemes(): string[] {
  return Object.keys(themeKeywordMappings);
}

/**
 * 生成SEO图片推荐报告
 */
export function generateSEOImageReport(): {
  totalImages: number;
  pagesWithImages: number;
  averageImagesPerPage: number;
  topKeywords: Array<{ keyword: string; count: number }>;
  coverageGaps: string[];
} {
  const allKeywords: Record<string, number> = {};
  
  imageHub.forEach((img) => {
    img.keywords.forEach((kw) => {
      allKeywords[kw] = (allKeywords[kw] || 0) + 1;
    });
  });
  
  const topKeywords = Object.entries(allKeywords)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 20)
    .map(([keyword, count]) => ({ keyword, count }));
  
  // Check for coverage gaps
  const coverageGaps: string[] = [];
  const desiredPages = [
    '/products/compostable-coffee-bags',
    '/products/compostable-stand-up-pouches',
    '/products/recyclable-mono-material-pouches',
    '/products/coffee-bags-degassing-valve',
    '/products/low-moq-packaging',
  ];
  
  desiredPages.forEach((page) => {
    const coverage = checkPageImageCoverage(page);
    if (coverage.suggestions.length > 0) {
      coverageGaps.push(`${page}: ${coverage.suggestions.join(', ')}`);
    }
  });
  
  return {
    totalImages: imageHub.length,
    pagesWithImages: new Set(imageHub.flatMap((img) => img.suitablePages)).size,
    averageImagesPerPage: imageHub.length / desiredPages.length,
    topKeywords,
    coverageGaps,
  };
}
