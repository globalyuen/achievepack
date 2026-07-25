import React, { useState } from 'react'
import { Shield, Leaf, Package, CheckCircle, Clock, Image, X, ChevronLeft, ChevronRight, Factory, BarChart3, ArrowLeftRight, TrendingUp, ShoppingBag, Sparkles } from 'lucide-react'
import SEOPageLayout from '../../components/SEOPageLayout'
import { useTranslation } from 'react-i18next'

const localTranslations = {
  en: {
    seo: {
      title: "Low Barrier Compostable & Eco Packaging (3-6 Months) | Achieve Pack",
      description: "Home compostable and recyclable packaging solutions for products with fast turnover. Kraft paper with PLA lining, NatureFlex cellulose, and water-coated paper options.",
      keywords: ['low barrier packaging', 'compostable pouches', 'short shelf life packaging', 'eco-friendly packaging', 'kraft paper pouches'],
      heroTitle: "Low Barrier Eco & Compostable Packaging",
      heroSubtitle: "3-6 Months Shelf Life with Maximum Sustainability & Home Compostability",
      heroImageAlt: "Low barrier eco-friendly packaging for fresh products",
      introSummary: "Low barrier packaging offers the best eco-credentials with 3-6 months shelf life protection. Perfect for products with fast turnover or naturally dry goods that don't require extended protection.",
      ctaTitle: "Explore High-Sustainability Low Barrier Options",
      ctaDescription: "Get free samples of home compostable and paper-based low barrier packaging materials.",
      ctaButton: "Get Free Samples"
    },
    gallery: [
      { title: 'Eco-Friendly Barrier', desc: 'Best sustainability credentials with home compostable options' },
      { title: 'Barrier Level Chart', desc: 'Low barrier provides 3-6 months protection' },
      { title: 'Kraft Paper Options', desc: 'Natural kraft paper with PLA inner lining' },
      { title: 'Transparent Options', desc: 'NatureFlex cellulose for product visibility' },
      { title: 'Application Scenarios', desc: 'Cookies, tea, granola, and dry goods' },
      { title: 'Best Eco Value', desc: 'Home compostable and widely recyclable options' }
    ],
    sections: {
      overview: {
        title: 'Low Barrier Packaging (3-6 Months Shelf Life)',
        lead: 'Low barrier packaging offers the best eco-credentials with 3-6 months shelf life protection. Perfect for products with fast turnover or naturally dry goods that don\'t require extended protection.',
        specsTitle: 'Technical Specifications',
        otr: 'OTR: 50-100 cc/m²/day',
        mvtr: 'MVTR: 10-20 g/m²/day',
        shelf: 'Shelf Life: 3-6 months typical',
        sust: 'Best Sustainability: Home compostable options available'
      },
      visualGallery: {
        title: 'Low Barrier Solutions Gallery',
        sub: 'Explore our low barrier eco-friendly solutions. Click any image to enlarge:'
      },
      materials: {
        title: 'Low Barrier Material Options',
        kraftPla: 'Kraft Paper + PLA',
        kraftPlaDesc: 'Natural kraft paper with PLA inner lining. Home compostable.',
        kraftPla1: '✓ 100% plant-based',
        kraftPla2: '✓ Home & industrial compostable',
        kraftPla3: '✓ Natural aesthetic',
        natureFlex: 'NatureFlex™ Cellulose',
        natureFlexDesc: 'Transparent cellulose film for product visibility.',
        natureFlex1: '✓ Crystal clear appearance',
        natureFlex2: '✓ Compostable certified',
        natureFlex3: '✓ Ideal for windowed pouches',
        paperWater: 'Paper + Water-Based Coating',
        paperWaterDesc: 'Pure paper with minimal coating for recyclability.',
        paperWater1: '✓ Widely recyclable',
        paperWater2: '✓ Minimal plastic content',
        paperWater3: '✓ Cost-effective',
        thinPe: 'Thin Mono-PE',
        thinPeDesc: 'Lightweight recyclable film for basic protection.',
        thinPe1: '✓ 100% recyclable',
        thinPe2: '✓ Flexible & durable',
        thinPe3: '✓ Good seal strength'
      },
      applications: {
        title: 'Ideal Product Applications',
        sub: 'Low barrier packaging is perfect for:',
        items: ['Cookies & Biscuits', 'Loose Leaf Tea', 'Granola & Muesli', 'Rice & Grains', 'Dried Fruits', 'Herbal Products']
      },
      benefits: {
        title: 'Why Choose Low Barrier?',
        b1Title: 'Best Eco-Credentials',
        b1Desc: 'Home compostable and widely recyclable options available',
        b2Title: 'Most Cost-Effective',
        b2Desc: 'Lower material costs compared to medium and high barrier',
        b3Title: 'Natural Aesthetics',
        b3Desc: 'Kraft paper look appeals to eco-conscious consumers',
        b4Title: 'Fast Turnover Friendly',
        b4Desc: 'Perfect for artisan products with quick sales cycles'
      },
      order: {
        title: 'Order Information',
        moq: 'Minimum Order',
        leadTime: 'Days Lead Time',
        samples: 'Sample Available'
      },
      industryScenarios: {
        title: 'Industry Applications',
        bakeryTitle: 'Bakery & Confectionery',
        bakeryDesc: 'Cookies, Crackers, Bread, Pastries',
        bakeryShare: 'Share: 40%',
        organicTitle: 'Organic Foods',
        organicDesc: 'Organic Grains, Nuts, Dried fruits',
        organicShare: 'Share: 35%',
        teaTitle: 'Tea & Herbs',
        teaDesc: 'Bulk Tea, Herbal tea, Spices',
        teaShare: 'Share: 25%',
        storyTitle: 'Customer Success Story',
        storyQuote: '“After adopting low barrier home-compostable packaging, our organic grain brand enhanced eco-brand perception, boosting consumer approval by 55%.”',
        storyAuthor: '— Organic Food Brand, Market Share +20%'
      },
      marketData: {
        title: 'Market Data & Intelligence',
        stat1Value: '$6.2B',
        stat1Label: 'Global Compostable Packaging Market',
        stat1Sub: '2024 Market Size',
        stat2Value: '14.5%',
        stat2Label: 'CAGR Growth Rate',
        stat2Sub: '2024-2030 Projection',
        stat3Value: '3-6',
        stat3Label: 'Months Shelf Life',
        stat3Sub: 'Low Barrier Standard',
        stat4Value: '68%',
        stat4Label: 'Consumer Eco Preference',
        stat4Sub: 'Willing to Pay Premium',
        insightTitle: 'Market Trend Insights',
        trend1: 'Home Compostable Mainstream: TÜV Austria OK Compost Home certification becoming standard.',
        trend2: 'Organic Food Growth: 15% annual growth rate driving eco-packaging demand.'
      },
      materialComparison: {
        title: 'Material Comparison',
        thType: 'Material Type',
        thShelf: 'Shelf Life',
        thCost: 'Cost',
        thEco: 'Eco-Friendly',
        thUse: 'Recommended Use',
        kraftPla: 'Kraft Paper + PLA',
        kraftPlaEco: '🌱 Compostable',
        kraftPlaUse: 'Organic food, Cookies',
        natureFlex: 'NatureFlex Cellulose',
        natureFlexEco: '🌱 Compostable',
        natureFlexUse: 'Window pouches, Display',
        paperWater: 'Paper + Water-Based Coating',
        paperWaterEco: '♥️ Recyclable',
        paperWaterUse: 'Dry food, Single-use bags',
        thinPe: 'Thin Mono-PE',
        thinPeEco: '♥️ Recyclable',
        thinPeUse: 'General dry groceries, Grains',
        guideTitle: 'Material Selection Guide',
        guideText: 'Low barrier packaging is ideal for fast turnover products. Choose Kraft + PLA for home compostability, NatureFlex for clear window visibility, or Thin Mono-PE for budget efficiency.'
      }
    },
    faqs: [
      { question: "What products are best suited for low barrier packaging?", answer: "Dry goods with low moisture content and fast retail turnover, such as tea leaves, cookies, crackers, grains, and granola." },
      { question: "Can low barrier packaging be home compostable?", answer: "Yes! Our Kraft + PLA and NatureFlex cellulose pouches are certified home compostable under TÜV Austria Home Compostable standards." },
      { question: "Is low barrier packaging less durable?", answer: "Not physically - low barrier materials still offer great seal strength and puncture resistance; the lower barrier simply refers to gas and moisture permeability." },
      { question: "Are low barrier options lower in cost?", answer: "Generally yes. Thin Mono-PE and water-coated paper structures offer significant material cost savings compared to high-barrier EVOH or foil structures." }
    ],
    links: {
      medium: "Medium Barrier Options",
      mediumDesc: "6-12 month protection",
      high: "High Barrier Options",
      highDesc: "12-24 month protection",
      compostable: "Home Compostable Materials",
      compostableDesc: "Backyard compostable"
    }
  },
  'zh-tw': {
    seo: {
      title: "低阻隔可堆肥與環保包裝 (3-6個月) | Achieve Pack",
      description: "專為快速周轉產品設計的家庭可堆肥與可回收包裝方案。包含 PLA 淋膜牛皮紙、NatureFlex 纖維素薄膜及水性塗層紙。",
      keywords: ['低阻隔包裝', '可堆肥袋', '短保質期包裝', '環保包裝', '牛皮紙袋'],
      heroTitle: "低阻隔環保與可堆肥包裝解決方案",
      heroSubtitle: "為快速周轉商品提供 3-6 個月極致環保與家庭可堆肥保護",
      heroImageAlt: "新鮮與乾糧產品的低阻隔環保包裝",
      introSummary: "低阻隔包裝具備最佳的環保可持續指標，提供 3-6 個月的保質期防護。非常適合快速周轉的產品或天然乾燥無須極高防護的商品。",
      ctaTitle: "探索高可持續性的低阻隔包裝方案",
      ctaDescription: "獲取家庭可堆肥及紙基低阻隔包裝材料的免費樣品包。",
      ctaButton: "獲取免費樣品"
    },
    gallery: [
      { title: '極致環保阻隔', desc: '具備家庭可堆肥選項的最佳可持續指標' },
      { title: '阻隔等級圖表', desc: '低阻隔層提供 3-6 個月的基礎保護' },
      { title: '牛皮紙包裝選項', desc: '內襯 PLA 植物膜的天然牛皮紙包裝' },
      { title: '透明可堆肥薄膜', desc: '提供產品展示視窗的 NatureFlex 纖維素薄膜' },
      { title: '應用場景展示', desc: '適用於餅乾、茶葉、麥片及乾燥食品' },
      { title: '最佳環保價值', desc: '提供家庭可堆肥與廣泛可回收的多種選項' }
    ],
    sections: {
      overview: {
        title: '低阻隔包裝 (3-6 個月保質期)',
        lead: '低阻隔包裝具備最佳的環保可持續指標，提供 3-6 個月的保質期防護。非常適合快速周轉的產品或天然乾燥無須極高防護的商品。',
        specsTitle: '技術規格參數',
        otr: 'OTR 透氧率: 50-100 cc/m²/天',
        mvtr: 'MVTR 透濕率: 10-20 g/m²/天',
        shelf: '保質期: 典型 3-6 個月',
        sust: '最佳環保指標: 提供家庭可堆肥認證材料'
      },
      visualGallery: {
        title: '低阻隔解決方案展示',
        sub: '探索我們的低阻隔環保解決方案。點擊任意圖片放大檢視：'
      },
      materials: {
        title: '低阻隔材料結構選擇',
        kraftPla: '牛皮紙 + PLA 膜',
        kraftPlaDesc: '天然牛皮紙內襯 PLA 生物膜，支持家庭堆肥。',
        kraftPla1: '✓ 100% 植物基環保原料',
        kraftPla2: '✓ 通過家庭與工業堆肥認證',
        kraftPla3: '✓ 天然質樸視覺美感',
        natureFlex: 'NatureFlex™ 纖維素薄膜',
        natureFlexDesc: '高透明度生物基薄膜，完美展示產品。',
        natureFlex1: '✓ 清澈透明的外觀展現',
        natureFlex2: '✓ 權威堆肥認證',
        natureFlex3: '✓ 非常適合帶開窗的包裝袋',
        paperWater: '紙 + 水性障壁塗層',
        paperWaterDesc: '純紙結合極薄水性塗層，便於廢紙回收。',
        paperWater1: '✓ 廣泛可併入廢紙回收',
        paperWater2: '✓ 塑料含量極低',
        paperWater3: '✓ 經濟實惠',
        thinPe: '薄型 Mono-PE',
        thinPeDesc: '輕量化可回收薄膜，提供基礎物理防護。',
        thinPe1: '✓ 100% 可回收結構',
        thinPe2: '✓ 柔韌耐用',
        thinPe3: '✓ 良好的封口熱封強度'
      },
      applications: {
        title: '理想的產品應用場景',
        sub: '低阻隔包裝非常適合以下產品：',
        items: ['曲奇與餅乾', '散裝茶葉', '麥片與燕麥片', '大米與穀物', '乾燥水果', '草本植物產品']
      },
      benefits: {
        title: '為什麼選擇低阻隔包裝？',
        b1Title: '最佳環保屬性',
        b1Desc: '提供家庭可堆肥與紙張可回收等多重綠色選項',
        b2Title: '材料成本低廉',
        b2Desc: '相較於中高阻隔材料，包裝材料成本顯著降低',
        b3Title: '天然質樸美感',
        b3Desc: '牛皮紙質感深受追求環保的消費者喜愛',
        b4Title: '適合快速周轉商品',
        b4Desc: '非常適合銷售週期短的手工烘焙與新鮮食品'
      },
      order: {
        title: '訂購與生產資訊',
        moq: '最低起訂量',
        leadTime: '交貨週期 (天)',
        samples: '提供免費樣品'
      },
      industryScenarios: {
        title: '行業應用案例',
        bakeryTitle: '烘焙與餅乾',
        bakeryDesc: '曲奇、餅乾、麵包、烘焙糕點',
        bakeryShare: '市場份額: 40%',
        organicTitle: '有機食品',
        organicDesc: '有機穀物、堅果、乾燥果乾',
        organicShare: '市場份額: 35%',
        teaTitle: '茶葉與香草',
        teaDesc: '散裝茶葉、花草茶、調味香料',
        teaShare: '市場份額: 25%',
        storyTitle: '客戶成功故事',
        storyQuote: '「在採用低阻隔家庭可堆肥包裝後，我們的有機穀物品牌形象顯著提升，消費者對品牌的認可度提高了 55%。」',
        storyAuthor: '— 有機食品品牌，市場佔有率提升 +20%'
      },
      marketData: {
        title: '市場數據與情報',
        stat1Value: '$62億',
        stat1Label: '全球可堆肥包裝市場規模',
        stat1Sub: '2024年市場統計',
        stat2Value: '14.5%',
        stat2Label: 'CAGR 年複合增長率',
        stat2Sub: '2024-2030年預測',
        stat3Value: '3-6',
        stat3Label: '個月保質期',
        stat3Sub: '低阻隔行業標準',
        stat4Value: '68%',
        stat4Label: '消費者環保偏好',
        stat4Sub: '願意為環保支付溢價',
        insightTitle: '市場趨勢洞察',
        trend1: '家庭堆肥成為主流：TÜV Austria OK Compost Home 認證正成為行業新標準。',
        trend2: '有機食品市場崛起：年增長率高達 15%，強力推動環保包裝需求。'
      },
      materialComparison: {
        title: '材料性能對比表',
        thType: '材料結構類型',
        thShelf: '目標保質期',
        thCost: '相對成本',
        thEco: '環保屬性',
        thUse: '推薦使用場景',
        kraftPla: '牛皮紙 + PLA',
        kraftPlaEco: '🌱 可堆肥',
        kraftPlaUse: '有機食品、曲奇餅乾',
        natureFlex: 'NatureFlex 纖維素',
        natureFlexEco: '🌱 可堆肥',
        natureFlexUse: '帶透明開窗袋、展示包裝',
        paperWater: '紙 + 水性障壁塗層',
        paperWaterEco: '♥️ 廢紙可回收',
        paperWaterUse: '輕度乾燥食品、一次性袋',
        thinPe: '薄型 Mono-PE',
        thinPeEco: '♥️ 塑料可回收',
        thinPeUse: '大宗乾糧、穀物糧食',
        guideTitle: '材料選擇指南',
        guideText: '低阻隔包裝最適合快速銷售的商品。追求堆肥選擇牛皮紙+PLA；追求開窗展示選擇 NatureFlex；追求高性價比選擇薄型 Mono-PE。'
      }
    },
    faqs: [
      { question: "哪些產品最適合低阻隔包裝？", answer: "含水量低且零售周轉快的乾燥商品，如茶葉、曲奇餅乾、餅乾、大米穀物及燕麥片。" },
      { question: "低阻隔包裝可以進行家庭堆肥嗎？", answer: "是的！我們的牛皮紙+PLA及 NatureFlex 纖維素袋均通過 TÜV Austria OK Compost Home 權威家庭堆肥認證。" },
      { question: "低阻隔包裝的物理強度會變差嗎？", answer: "不會。低阻隔指的是對氣體和水氣的透過率較高，其物理拉伸強度與封口牢固度依然非常優異。" },
      { question: "低阻隔選項成本會更低嗎？", answer: "通常是的。薄型 Mono-PE 和水性塗層紙結構相較於高阻隔的 EVOH 或鋁箔結構，能節省顯著的材料成本。" }
    ],
    links: {
      medium: "中阻隔選項指南",
      mediumDesc: "6-12 個月平衡保護",
      high: "高阻隔選項指南",
      highDesc: "12-24 個月長效保護",
      compostable: "家庭可堆肥材料",
      compostableDesc: "庭院庭園可堆肥"
    }
  },
  fr: {
    seo: {
      title: "Emballages Éco & Compostables Faible Barrière (3-6 Mois) | Achieve Pack",
      description: "Solutions d'emballage compostables à la maison et recyclables pour produits à rotation rapide. Papier kraft doublé PLA, cellulose NatureFlex et papier enduit à l'eau.",
      keywords: ['emballage faible barrière', 'sachets compostables', 'courte conservation', 'emballage écologique', 'sachets papier kraft'],
      heroTitle: "Emballages Écologiques & Compostables Faible Barrière",
      heroSubtitle: "Conservation de 3 à 6 Mois avec Durabilité Maximale & Compostabilité Domestique",
      heroImageAlt: "Emballage écologique faible barrière pour produits frais et secs",
      introSummary: "L'emballage faible barrière offre les meilleures compétences écologiques garantissant 3 à 6 mois de fraîcheur. Parfait pour les produits à rotation rapide.",
      ctaTitle: "Explorez nos options faible barrière ultra-durables",
      ctaDescription: "Recevez des échantillons gratuits de sachets compostables et en papier.",
      ctaButton: "Obtenir des Échantillons Gratuits"
    },
    gallery: [
      { title: 'Barrière Ultra-Écologique', desc: 'Excellents critères écologiques avec options compostables à domicile' },
      { title: 'Tableau Niveau Barrière', desc: 'La faible barrière fournit 3 à 6 mois de protection' },
      { title: 'Options Papier Kraft', desc: 'Papier kraft naturel doublé de film végétal PLA' },
      { title: 'Options Transparents', desc: 'Cellulose NatureFlex pour la visibilité des produits' },
      { title: 'Scénarios d\'Application', desc: 'Biscuits, thé, granola et produits secs' },
      { title: 'Valeur Éco Maximale', desc: 'Options compostables à la maison et largement recyclables' }
    ],
    sections: {
      overview: {
        title: 'Emballage Faible Barrière (3-6 Mois de Conservation)',
        lead: 'L\'emballage faible barrière offre les meilleures compétences écologiques avec 3 à 6 mois de conservation. Parfait pour les produits à rotation rapide.',
        specsTitle: 'Spécifications Techniques',
        otr: 'OTR: 50-100 cc/m²/jour',
        mvtr: 'MVTR: 10-20 g/m²/jour',
        shelf: 'Conservation: 3-6 mois typique',
        sust: 'Meilleure Durabilité: Options compostables à domicile disponibles'
      },
      visualGallery: {
        title: 'Galerie des Solutions Faible Barrière',
        sub: 'Explorez nos sachets écologiques à faible barrière. Cliquez pour agrandir :'
      },
      materials: {
        title: 'Options de Matériaux Faible Barrière',
        kraftPla: 'Papier Kraft + PLA',
        kraftPlaDesc: 'Papier kraft naturel doublé PLA. Compostable à domicile.',
        kraftPla1: '✓ 100% d\'origine végétale',
        kraftPla2: '✓ Compostable à la maison et industriel',
        kraftPla3: '✓ Esthétique naturelle et authentique',
        natureFlex: 'Cellulose NatureFlex™',
        natureFlexDesc: 'Film cellulosique transparent pour montrer le produit.',
        natureFlex1: '✓ Transparence cristalline',
        natureFlex2: '✓ Certifié compostable',
        natureFlex3: '✓ Idéal pour les sachets à fenêtre',
        paperWater: 'Papier + Enduction à l\'Eau',
        paperWaterDesc: 'Papier pur avec très fine couche barrière pour le recyclage.',
        paperWater1: '✓ Recyclable dans la filière papier',
        paperWater2: '✓ Contenu plastique minimal',
        paperWater3: '✓ Très économique',
        thinPe: 'Mono-PE Mince',
        thinPeDesc: 'Film recyclable léger offrant une protection physique de base.',
        thinPe1: '✓ 100% recyclable',
        thinPe2: '✓ Souple et résistant',
        thinPe3: '✓ Bonne résistance de soudure'
      },
      applications: {
        title: 'Applications Produits Idéales',
        sub: 'L\'emballage faible barrière est parfait pour :',
        items: ['Cookies & Biscuits', 'Thé en vrac', 'Granola & Muesli', 'Riz & Céréales', 'Fruits séchés', 'Plantes & Herbes']
      },
      benefits: {
        title: 'Pourquoi Choisir la Faible Barrière ?',
        b1Title: 'Meilleures Caractéristiques Éco',
        b1Desc: 'Options compostables à la maison et recyclables',
        b2Title: 'Trés Économique',
        b2Desc: 'Coût de matériau réduit par rapport aux barrières moyennes et hautes',
        b3Title: 'Esthétique Naturelle',
        b3Desc: 'Le style kraft séduit les consommateurs écoresponsables',
        b4Title: 'Parfait pour Ventes Rapides',
        b4Desc: 'Idéal pour les produits artisanaux à rotation rapide'
      },
      order: {
        title: 'Informations de Commande',
        moq: 'Commande Minimum',
        leadTime: 'Jours de Délai',
        samples: 'Échantillons Disponibles'
      },
      industryScenarios: {
        title: 'Applications Industrielles',
        bakeryTitle: 'Boulangerie & Biscuiterie',
        bakeryDesc: 'Biscuits, cookies, pains, viennoiseries',
        bakeryShare: 'Part : 40%',
        organicTitle: 'Produits Biologiques',
        organicDesc: 'Céréales bio, noix, fruits secs',
        organicShare: 'Part : 35%',
        teaTitle: 'Thé & Herbes',
        teaDesc: 'Thé en vrac, tisanes, épices',
        teaShare: 'Part : 25%',
        storyTitle: 'Témoignage Client',
        storyQuote: '« En adoptant un emballage faible barrière compostable à la maison, notre marque de céréales bio a augmenté l\'engagement client de 55%. »',
        storyAuthor: '— Marque d\'aliments bio, Part de marché +20%'
      },
      marketData: {
        title: 'Données & Intelligence de Marché',
        stat1Value: '6.2 Mds$',
        stat1Label: 'Marché Mondial Emballage Compostable',
        stat1Sub: 'Taille du marché 2024',
        stat2Value: '14.5%',
        stat2Label: 'Taux de croissance annuel (CAGR)',
        stat2Sub: 'Projection 2024-2030',
        stat3Value: '3-6',
        stat3Label: 'Mois de conservation',
        stat3Sub: 'Standard faible barrière',
        stat4Value: '68%',
        stat4Label: 'Préférence consommateurs éco',
        stat4Sub: 'Prêts à payer un supplément',
        insightTitle: 'Tendances du Marché',
        trend1: 'Compostable à la maison généralisé : La certification TÜV Austria OK Compost Home devient le standard.',
        trend2: 'Essor du bio : Croissance annuelle de 15% stimulant la demande d\'emballages écologiques.'
      },
      materialComparison: {
        title: 'Tableau Comparatif des Matériaux',
        thType: 'Type de Matériau',
        thShelf: 'Conservation',
        thCost: 'Coût',
        thEco: 'Écologie',
        thUse: 'Usage Recommandé',
        kraftPla: 'Papier Kraft + PLA',
        kraftPlaEco: '🌱 Compostable',
        kraftPlaUse: 'Produits bio, Biscuits',
        natureFlex: 'Cellulose NatureFlex',
        natureFlexEco: '🌱 Compostable',
        natureFlexUse: 'Sachets à fenêtre, Présentation',
        paperWater: 'Papier + Enduction à l\'Eau',
        paperWaterEco: '♥️ Recyclable papier',
        paperWaterUse: 'Produits secs, Sachets simples',
        thinPe: 'Mono-PE Mince',
        thinPeEco: '♥️ Recyclable plastique',
        thinPeUse: 'Épicerie sèche, Céréales',
        guideTitle: 'Guide de Sélection',
        guideText: 'La faible barrière convient aux produits vendus rapidement. Choisissez Kraft + PLA pour le compostage à la maison, NatureFlex pour la transparence, ou Mono-PE Mince pour l\'économie.'
      }
    },
    faqs: [
      { question: "Quels produits conviennent le mieux à la faible barrière ?", answer: "Les produits secs à faible taux d'humidité et rotation rapide : thé, biscuits, gâteaux secs, céréales et fruits séchés." },
      { question: "L'emballage faible barrière est-il compostable à la maison ?", answer: "Oui ! Nos sachets Kraft + PLA et NatureFlex sont certifiés compostables à domicile selon la norme TÜV Austria OK Compost Home." },
      { question: "L'emballage faible barrière est-il résistant ?", answer: "Tout à fait. La faible barrière fait référence à la perméabilité gazeuse, pas à la résistance mécanique du sachet." },
      { question: "Ces sachets sont-ils plus économiques ?", answer: "Oui. Le Mono-PE mince et le papier enduit à l'eau offrent d'importantes économies par rapport aux sachets EVOH ou Aluminium." }
    ],
    links: {
      medium: "Options Moyenne Barrière",
      mediumDesc: "Protection 6-12 mois",
      high: "Options Haute Barrière",
      highDesc: "Protection 12-24 mois",
      compostable: "Matériaux Compostables à Domicile",
      compostableDesc: "Compostable au jardin"
    }
  },
  es: {
    seo: {
      title: "Empaques Ecológicos & Compostables de Barrera Baja (3-6 Meses) | Achieve Pack",
      description: "Soluciones de empaque compostables en casa y reciclables para productos de rápida rotación. Papel kraft con forro de PLA, celulosa NatureFlex y papel recubierto en agua.",
      keywords: ['empaque de barrera baja', 'bolsas compostables', 'corta vida útil empaque', 'empaque ecológico', 'bolsas de papel kraft'],
      heroTitle: "Empaques Ecológicos & Compostables de Barrera Baja",
      heroSubtitle: "Conservación de 3 a 6 Meses con Máxima Sostenibilidad & Compostabilidad en Casa",
      heroImageAlt: "Empaque ecológico de barrera baja para productos frescos y secos",
      introSummary: "El empaque de barrera baja ofrece las mejores credenciales ecológicas garantizando de 3 a 6 meses de protección. Ideal para productos de rápida venta.",
      ctaTitle: "Explore Opciones de Barrera Baja de Alta Sostenibilidad",
      ctaDescription: "Solicite muestras gratuitas de bolsas compostables en casa y de papel.",
      ctaButton: "Obtener Muestras Gratuitas"
    },
    gallery: [
      { title: 'Barrera Ultra Ecológica', desc: 'Las mejores credenciales de sostenibilidad con opciones compostables en casa' },
      { title: 'Tabla de Niveles de Barrera', desc: 'La barrera baja brinda de 3 a 6 meses de protección' },
      { title: 'Opciones de Papel Kraft', desc: 'Papel kraft natural con recubrimiento vegetal PLA' },
      { title: 'Opciones Transparentes', desc: 'Película NatureFlex para visibilidad del producto' },
      { title: 'Escenarios de Aplicación', desc: 'Galletas, té, granola y alimentos secos' },
      { title: 'Máximo Valor Eco', desc: 'Opciones compostables en casa y ampliamente reciclables' }
    ],
    sections: {
      overview: {
        title: 'Empaque de Barrera Baja (3-6 Meses de Vida Útil)',
        lead: 'El empaque de barrera baja ofrece las mejores credenciales ecológicas con 3 a 6 meses de conservación. Perfecto para productos de rápida venta o alimentos secos.',
        specsTitle: 'Especificaciones Técnicas',
        otr: 'OTR: 50-100 cc/m²/día',
        mvtr: 'MVTR: 10-20 g/m²/día',
        shelf: 'Vida Útil: 3-6 meses típico',
        sust: 'Máxima Sostenibilidad: Opciones compostables en casa disponibles'
      },
      visualGallery: {
        title: 'Galería de Soluciones de Barrera Baja',
        sub: 'Explore nuestras bolsas ecológicas de barrera baja. Haga clic para ampliar:'
      },
      materials: {
        title: 'Opciones de Materiales de Barrera Baja',
        kraftPla: 'Papel Kraft + PLA',
        kraftPlaDesc: 'Papel kraft natural con revestimiento de PLA. Compostable en casa.',
        kraftPla1: '✓ 100% de origen vegetal',
        kraftPla2: '✓ Compostable en casa e industrial',
        kraftPla3: '✓ Estética natural y auténtica',
        natureFlex: 'Celulosa NatureFlex™',
        natureFlexDesc: 'Película transparente de celulosa para exhibir el producto.',
        natureFlex1: '✓ Apariencia de alta claridad',
        natureFlex2: '✓ Certificación compostable',
        natureFlex3: '✓ Ideal para bolsas con ventana',
        paperWater: 'Papel + Recubrimiento en Agua',
        paperWaterDesc: 'Papel puro con mínima barrera para fácil reciclaje.',
        paperWater1: '✓ Ampliamente reciclable en papel',
        paperWater2: '✓ Contenido de plástico mínimo',
        paperWater3: '✓ Muy económico',
        thinPe: 'Mono-PE Delgado',
        thinPeDesc: 'Película reciclable ligera para protección física básica.',
        thinPe1: '✓ 100% reciclable',
        thinPe2: '✓ Flexible y resistente',
        thinPe3: '✓ Buena fuerza de sellado'
      },
      applications: {
        title: 'Aplicaciones Ideales de Productos',
        sub: 'El empaque de barrera baja es idóneo para:',
        items: ['Galletas y Repostería', 'Té a granel', 'Granola y Muesli', 'Arroz y Granos', 'Frutas Deshidratadas', 'Hierbas y Especias']
      },
      benefits: {
        title: '¿Por qué elegir Barrera Baja?',
        b1Title: 'Mejores Cualidades Ecológicas',
        b1Desc: 'Opciones compostables en casa y reciclables en papel',
        b2Title: 'Muy Económico',
        b2Desc: 'Costo de material inferior comparado con barreras medias y altas',
        b3Title: 'Estética Natural',
        b3Desc: 'El papel kraft atrae a consumidores con conciencia ambiental',
        b4Title: 'Ideal para Rotación Rápida',
        b4Desc: 'Perfecto para productos artesanales con ciclos de venta cortos'
      },
      order: {
        title: 'Información de Pedido',
        moq: 'Pedido Mínimo',
        leadTime: 'Días de Tiempo de Entrega',
        samples: 'Muestras Disponibles'
      },
      industryScenarios: {
        title: 'Aplicaciones por Industria',
        bakeryTitle: 'Panadería y Galletas',
        bakeryDesc: 'Galletas, panecillos, repostería',
        bakeryShare: 'Cuota: 40%',
        organicTitle: 'Productos Orgánicos',
        organicDesc: 'Granos orgánicos, nueces, frutas secas',
        organicShare: 'Cuota: 35%',
        teaTitle: 'Té y Hierbas',
        teaDesc: 'Té a granel, infusiones, especias',
        teaShare: 'Cuota: 25%',
        storyTitle: 'Historia de Éxito',
        storyQuote: '«Al adoptar empaques de barrera baja compostables en casa, nuestra marca orgánica aumentó el compromiso de los clientes un 55%.»',
        storyAuthor: '— Marca de Alimentos Orgánicos, Cuota de Mercado +20%'
      },
      marketData: {
        title: 'Datos e Inteligencia de Mercado',
        stat1Value: '$6.2B',
        stat1Label: 'Mercado Global de Empaques Compostables',
        stat1Sub: 'Tamaño del mercado 2024',
        stat2Value: '14.5%',
        stat2Label: 'Tasa de crecimiento anual (CAGR)',
        stat2Sub: 'Proyección 2024-2030',
        stat3Value: '3-6',
        stat3Label: 'Meses de vida útil',
        stat3Sub: 'Estándar de barrera baja',
        stat4Value: '68%',
        stat4Label: 'Preferencia ecológica del consumidor',
        stat4Sub: 'Dispuestos a pagar más',
        insightTitle: 'Perspectivas del Mercado',
        trend1: 'Compostable en casa se consolida: La certificación TÜV Austria OK Compost Home se convierte en norma.',
        trend2: 'Crecimiento de alimentos orgánicos: Crecimiento anual del 15% que impulsa la demanda sostenible.'
      },
      materialComparison: {
        title: 'Tabla Comparativa de Materiales',
        thType: 'Tipo de Material',
        thShelf: 'Vida Útil',
        thCost: 'Costo',
        thEco: 'Propiedad Eco',
        thUse: 'Uso Recomendado',
        kraftPla: 'Papel Kraft + PLA',
        kraftPlaEco: '🌱 Compostable',
        kraftPlaUse: 'Comida orgánica, Galletas',
        natureFlex: 'Celulosa NatureFlex',
        natureFlexEco: '🌱 Compostable',
        natureFlexUse: 'Bolsas con ventana, Exhibición',
        paperWater: 'Papel + Recubrimiento en Agua',
        paperWaterEco: '♥️ Reciclable en papel',
        paperWaterUse: 'Comida seca, Bolsas simples',
        thinPe: 'Mono-PE Delgado',
        thinPeEco: '♥️ Reciclable en plástico',
        thinPeUse: 'Abarrotes secos, Granos',
        guideTitle: 'Guía de Selección',
        guideText: 'La barrera baja es idónea para venta rápida. Elija Kraft + PLA para compostaje doméstico, NatureFlex para ventanas transparentes, o Mono-PE Delgado por economía.'
      }
    },
    faqs: [
      { question: "¿Qué productos son ideales para la barrera baja?", answer: "Alimentos secos de baja humedad y rápida rotación: té, galletas, repostería, granos y cereales." },
      { question: "¿El empaque de barrera baja puede compostarse en casa?", answer: "¡Sí! Nuestras bolsas de Kraft + PLA y celulosa NatureFlex cuentan con certificación TÜV Austria OK Compost Home." },
      { question: "¿La barrera baja implica menor resistencia física?", answer: "No. La barrera baja hace referencia a la permeabilidad a gases y agua, no a la resistencia mecánica del empaque." },
      { question: "¿Son empaques más económicos?", answer: "Generalmente sí. El Mono-PE delgado y el papel recubierto en agua ofrecen ahorros frente a estructuras con EVOH o Aluminio." }
    ],
    links: {
      medium: "Opciones de Barrera Media",
      mediumDesc: "Protección de 6-12 meses",
      high: "Opciones de Alta Barrera",
      highDesc: "Protección de 12-24 meses",
      compostable: "Materiales Compostables en Casa",
      compostableDesc: "Compostable en el jardín"
    }
  }
}

const lowBarrierGalleryImages = [
  '/imgs/barrier/ads/a_achieve_pack_barrier_kv_updated_green_definition_6833995.webp',
  '/imgs/barrier/ads/a_barrier_levels_7395220.webp',
  '/imgs/barrier/ads/a_kraft_levels_1_2_3604187.webp',
  '/imgs/barrier/ads/a_transparent_options_3839456.webp',
  '/imgs/barrier/ads/a_application_scenarios_2234685.webp',
  '/imgs/barrier/ads/a_value_barrier_eco_4905901.webp',
]

const LowBarrierPage: React.FC = () => {
  const { i18n } = useTranslation()
  const rawLang = (i18n.language || 'en').toLowerCase()
  const currentLang = (rawLang === 'zh-tw' || rawLang === 'zh-hant' || rawLang === 'zh') ? 'zh-tw' : (rawLang === 'fr' ? 'fr' : (rawLang === 'es' ? 'es' : 'en'))
  const tLocal = localTranslations[currentLang] || localTranslations.en

  const [galleryEnlarged, setGalleryEnlarged] = useState<{ src: string; index: number } | null>(null)
  
  const lowBarrierGallery = lowBarrierGalleryImages.map((src, index) => ({
    src,
    title: tLocal.gallery[index]?.title || '',
    desc: tLocal.gallery[index]?.desc || ''
  }))

  const navigateGallery = (direction: 'prev' | 'next') => {
    if (!galleryEnlarged) return
    let newIndex = direction === 'prev' ? galleryEnlarged.index - 1 : galleryEnlarged.index + 1
    if (newIndex < 0) newIndex = lowBarrierGallery.length - 1
    if (newIndex >= lowBarrierGallery.length) newIndex = 0
    setGalleryEnlarged({ src: lowBarrierGallery[newIndex].src, index: newIndex })
  }
  
  const sections = [
    {
      id: 'overview',
      title: tLocal.sections.overview.title,
      icon: <Shield className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>{tLocal.sections.overview.lead}</p>
          <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500 mt-4">
            <h4 className="font-semibold text-green-800 mb-2">{tLocal.sections.overview.specsTitle}</h4>
            <ul className="text-sm space-y-1 text-green-700">
              <li>• <strong>{tLocal.sections.overview.otr}</strong></li>
              <li>• <strong>{tLocal.sections.overview.mvtr}</strong></li>
              <li>• <strong>{tLocal.sections.overview.shelf}</strong></li>
              <li>• <strong>{tLocal.sections.overview.sust}</strong></li>
            </ul>
          </div>
        </div>
      )
    },
    {
      id: 'visual-gallery',
      title: tLocal.sections.visualGallery.title,
      icon: <Image className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>{tLocal.sections.visualGallery.sub}</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {lowBarrierGallery.map((img, index) => (
              <button
                key={index}
                onClick={() => setGalleryEnlarged({ src: img.src, index })}
                className="text-left bg-white rounded-xl border border-neutral-200 hover:border-primary-400 overflow-hidden transition-all hover:shadow-lg group cursor-pointer"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={img.src} alt={img.title} className="w-full h-full object-cover group-hover:scale-105 transition" />
                </div>
                <div className="p-3">
                  <h5 className="font-semibold text-sm text-neutral-800 mb-1">{img.title}</h5>
                  <p className="text-xs text-neutral-600 line-clamp-2">{img.desc}</p>
                </div>
              </button>
            ))}
          </div>
        </div>
      )
    },
    {
      id: 'materials',
      title: tLocal.sections.materials.title,
      icon: <Leaf className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <div className="grid md:grid-cols-2 gap-4 mt-4">
            <div className="bg-white border border-neutral-200 p-4 rounded-lg">
              <h4 className="font-semibold text-neutral-900 mb-2">{tLocal.sections.materials.kraftPla}</h4>
              <p className="text-sm mb-3">{tLocal.sections.materials.kraftPlaDesc}</p>
              <ul className="text-xs space-y-1 text-neutral-600">
                <li>{tLocal.sections.materials.kraftPla1}</li>
                <li>{tLocal.sections.materials.kraftPla2}</li>
                <li>{tLocal.sections.materials.kraftPla3}</li>
              </ul>
            </div>
            <div className="bg-white border border-neutral-200 p-4 rounded-lg">
              <h4 className="font-semibold text-neutral-900 mb-2">{tLocal.sections.materials.natureFlex}</h4>
              <p className="text-sm mb-3">{tLocal.sections.materials.natureFlexDesc}</p>
              <ul className="text-xs space-y-1 text-neutral-600">
                <li>{tLocal.sections.materials.natureFlex1}</li>
                <li>{tLocal.sections.materials.natureFlex2}</li>
                <li>{tLocal.sections.materials.natureFlex3}</li>
              </ul>
            </div>
            <div className="bg-white border border-neutral-200 p-4 rounded-lg">
              <h4 className="font-semibold text-neutral-900 mb-2">{tLocal.sections.materials.paperWater}</h4>
              <p className="text-sm mb-3">{tLocal.sections.materials.paperWaterDesc}</p>
              <ul className="text-xs space-y-1 text-neutral-600">
                <li>{tLocal.sections.materials.paperWater1}</li>
                <li>{tLocal.sections.materials.paperWater2}</li>
                <li>{tLocal.sections.materials.paperWater3}</li>
              </ul>
            </div>
            <div className="bg-white border border-neutral-200 p-4 rounded-lg">
              <h4 className="font-semibold text-neutral-900 mb-2">{tLocal.sections.materials.thinPe}</h4>
              <p className="text-sm mb-3">{tLocal.sections.materials.thinPeDesc}</p>
              <ul className="text-xs space-y-1 text-neutral-600">
                <li>{tLocal.sections.materials.thinPe1}</li>
                <li>{tLocal.sections.materials.thinPe2}</li>
                <li>{tLocal.sections.materials.thinPe3}</li>
              </ul>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'applications',
      title: tLocal.sections.applications.title,
      icon: <Package className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>{tLocal.sections.applications.sub}</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 mt-4">
            {tLocal.sections.applications.items.map((item, idx) => (
              <div key={idx} className="bg-green-50 p-3 rounded-lg text-center">
                <div className="text-2xl mb-2">{['🍪', '🍵', '🥣', '🍚', '🥜', '🌿'][idx] || '✨'}</div>
                <h5 className="font-semibold text-sm">{item}</h5>
              </div>
            ))}
          </div>
        </div>
      )
    },
    {
      id: 'benefits',
      title: tLocal.sections.benefits.title,
      icon: <CheckCircle className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-green-600 font-bold">1</span>
              </div>
              <div>
                <h4 className="font-semibold">{tLocal.sections.benefits.b1Title}</h4>
                <p className="text-sm">{tLocal.sections.benefits.b1Desc}</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-green-600 font-bold">2</span>
              </div>
              <div>
                <h4 className="font-semibold">{tLocal.sections.benefits.b2Title}</h4>
                <p className="text-sm">{tLocal.sections.benefits.b2Desc}</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-green-600 font-bold">3</span>
              </div>
              <div>
                <h4 className="font-semibold">{tLocal.sections.benefits.b3Title}</h4>
                <p className="text-sm">{tLocal.sections.benefits.b3Desc}</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-green-600 font-bold">4</span>
              </div>
              <div>
                <h4 className="font-semibold">{tLocal.sections.benefits.b4Title}</h4>
                <p className="text-sm">{tLocal.sections.benefits.b4Desc}</p>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'order',
      title: tLocal.sections.order.title,
      icon: <Clock className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-white border border-neutral-200 p-4 rounded-lg text-center">
              <div className="text-3xl font-bold text-primary-600 mb-2">500</div>
              <div className="text-sm text-neutral-600">{tLocal.sections.order.moq}</div>
            </div>
            <div className="bg-white border border-neutral-200 p-4 rounded-lg text-center">
              <div className="text-3xl font-bold text-primary-600 mb-2">15-20</div>
              <div className="text-sm text-neutral-600">{tLocal.sections.order.leadTime}</div>
            </div>
            <div className="bg-white border border-neutral-200 p-4 rounded-lg text-center">
              <div className="text-3xl font-bold text-primary-600 mb-2">Free</div>
              <div className="text-sm text-neutral-600">{tLocal.sections.order.samples}</div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'industry-scenarios',
      title: tLocal.sections.industryScenarios.title,
      icon: <Factory className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-6">
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-5 rounded-xl border border-amber-200">
              <div className="flex items-center gap-2 mb-3">
                <ShoppingBag className="h-5 w-5 text-amber-600" />
                <h4 className="font-semibold text-neutral-900">{tLocal.sections.industryScenarios.bakeryTitle}</h4>
              </div>
              <p className="text-sm text-neutral-600 mb-3">{tLocal.sections.industryScenarios.bakeryDesc}</p>
              <div className="text-xs text-amber-700 bg-amber-100 px-2 py-1 rounded inline-block">{tLocal.sections.industryScenarios.bakeryShare}</div>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-5 rounded-xl border border-green-200">
              <div className="flex items-center gap-2 mb-3">
                <Sparkles className="h-5 w-5 text-green-600" />
                <h4 className="font-semibold text-neutral-900">{tLocal.sections.industryScenarios.organicTitle}</h4>
              </div>
              <p className="text-sm text-neutral-600 mb-3">{tLocal.sections.industryScenarios.organicDesc}</p>
              <div className="text-xs text-green-700 bg-green-100 px-2 py-1 rounded inline-block">{tLocal.sections.industryScenarios.organicShare}</div>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-5 rounded-xl border border-blue-200">
              <div className="flex items-center gap-2 mb-3">
                <TrendingUp className="h-5 w-5 text-blue-600" />
                <h4 className="font-semibold text-neutral-900">{tLocal.sections.industryScenarios.teaTitle}</h4>
              </div>
              <p className="text-sm text-neutral-600 mb-3">{tLocal.sections.industryScenarios.teaDesc}</p>
              <div className="text-xs text-blue-700 bg-blue-100 px-2 py-1 rounded inline-block">{tLocal.sections.industryScenarios.teaShare}</div>
            </div>
          </div>
          <div className="bg-white p-4 rounded-lg border border-neutral-200">
            <h4 className="font-semibold text-neutral-900 mb-3">{tLocal.sections.industryScenarios.storyTitle}</h4>
            <p className="text-sm text-neutral-600">{tLocal.sections.industryScenarios.storyQuote}</p>
            <p className="text-xs text-neutral-500 mt-2">{tLocal.sections.industryScenarios.storyAuthor}</p>
          </div>
        </div>
      )
    },
    {
      id: 'market-data',
      title: tLocal.sections.marketData.title,
      icon: <BarChart3 className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-gradient-to-br from-primary-500 to-primary-600 text-white p-4 rounded-xl text-center">
              <div className="text-3xl font-bold">{tLocal.sections.marketData.stat1Value}</div>
              <div className="text-sm opacity-90">{tLocal.sections.marketData.stat1Label}</div>
              <div className="text-xs opacity-75 mt-1">{tLocal.sections.marketData.stat1Sub}</div>
            </div>
            <div className="bg-gradient-to-br from-green-500 to-green-600 text-white p-4 rounded-xl text-center">
              <div className="text-3xl font-bold">{tLocal.sections.marketData.stat2Value}</div>
              <div className="text-sm opacity-90">{tLocal.sections.marketData.stat2Label}</div>
              <div className="text-xs opacity-75 mt-1">{tLocal.sections.marketData.stat2Sub}</div>
            </div>
            <div className="bg-gradient-to-br from-amber-500 to-amber-600 text-white p-4 rounded-xl text-center">
              <div className="text-3xl font-bold">{tLocal.sections.marketData.stat3Value}</div>
              <div className="text-sm opacity-90">{tLocal.sections.marketData.stat3Label}</div>
              <div className="text-xs opacity-75 mt-1">{tLocal.sections.marketData.stat3Sub}</div>
            </div>
            <div className="bg-gradient-to-br from-purple-500 to-purple-600 text-white p-4 rounded-xl text-center">
              <div className="text-3xl font-bold">{tLocal.sections.marketData.stat4Value}</div>
              <div className="text-sm opacity-90">{tLocal.sections.marketData.stat4Label}</div>
              <div className="text-xs opacity-75 mt-1">{tLocal.sections.marketData.stat4Sub}</div>
            </div>
          </div>
          <div className="bg-neutral-50 p-4 rounded-lg">
            <h4 className="font-semibold text-neutral-900 mb-3">{tLocal.sections.marketData.insightTitle}</h4>
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <div className="flex items-start gap-2">
                <TrendingUp className="h-4 w-4 text-green-500 mt-0.5" />
                <span>{tLocal.sections.marketData.trend1}</span>
              </div>
              <div className="flex items-start gap-2">
                <TrendingUp className="h-4 w-4 text-green-500 mt-0.5" />
                <span>{tLocal.sections.marketData.trend2}</span>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'material-comparison',
      title: tLocal.sections.materialComparison.title,
      icon: <ArrowLeftRight className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-6">
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-neutral-100">
                  <th className="border border-neutral-200 px-4 py-2 text-left">{tLocal.sections.materialComparison.thType}</th>
                  <th className="border border-neutral-200 px-4 py-2 text-center">{tLocal.sections.materialComparison.thShelf}</th>
                  <th className="border border-neutral-200 px-4 py-2 text-center">{tLocal.sections.materialComparison.thCost}</th>
                  <th className="border border-neutral-200 px-4 py-2 text-center">{tLocal.sections.materialComparison.thEco}</th>
                  <th className="border border-neutral-200 px-4 py-2 text-left">{tLocal.sections.materialComparison.thUse}</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-neutral-200 px-4 py-2 font-medium">{tLocal.sections.materialComparison.kraftPla}</td>
                  <td className="border border-neutral-200 px-4 py-2 text-center">3-6 months</td>
                  <td className="border border-neutral-200 px-4 py-2 text-center">💰💰</td>
                  <td className="border border-neutral-200 px-4 py-2 text-center">{tLocal.sections.materialComparison.kraftPlaEco}</td>
                  <td className="border border-neutral-200 px-4 py-2">{tLocal.sections.materialComparison.kraftPlaUse}</td>
                </tr>
                <tr className="bg-neutral-50">
                  <td className="border border-neutral-200 px-4 py-2 font-medium">{tLocal.sections.materialComparison.natureFlex}</td>
                  <td className="border border-neutral-200 px-4 py-2 text-center">3-6 months</td>
                  <td className="border border-neutral-200 px-4 py-2 text-center">💰💰</td>
                  <td className="border border-neutral-200 px-4 py-2 text-center">{tLocal.sections.materialComparison.natureFlexEco}</td>
                  <td className="border border-neutral-200 px-4 py-2">{tLocal.sections.materialComparison.natureFlexUse}</td>
                </tr>
                <tr>
                  <td className="border border-neutral-200 px-4 py-2 font-medium">{tLocal.sections.materialComparison.paperWater}</td>
                  <td className="border border-neutral-200 px-4 py-2 text-center">2-4 months</td>
                  <td className="border border-neutral-200 px-4 py-2 text-center">💰</td>
                  <td className="border border-neutral-200 px-4 py-2 text-center">{tLocal.sections.materialComparison.paperWaterEco}</td>
                  <td className="border border-neutral-200 px-4 py-2">{tLocal.sections.materialComparison.paperWaterUse}</td>
                </tr>
                <tr className="bg-green-50">
                  <td className="border border-neutral-200 px-4 py-2 font-medium">{tLocal.sections.materialComparison.thinPe}</td>
                  <td className="border border-neutral-200 px-4 py-2 text-center">4-6 months</td>
                  <td className="border border-neutral-200 px-4 py-2 text-center">💰</td>
                  <td className="border border-neutral-200 px-4 py-2 text-center">{tLocal.sections.materialComparison.thinPeEco}</td>
                  <td className="border border-neutral-200 px-4 py-2">{tLocal.sections.materialComparison.thinPeUse}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="bg-primary-50 p-4 rounded-lg">
            <h4 className="font-semibold text-primary-800 mb-2">{tLocal.sections.materialComparison.guideTitle}</h4>
            <p className="text-sm text-primary-700">{tLocal.sections.materialComparison.guideText}</p>
          </div>
        </div>
      )
    }
  ]

  const faqs = tLocal.faqs

  const relatedLinks = [
    { title: tLocal.links.medium, url: "/features/medium-barrier", description: tLocal.links.mediumDesc },
    { title: tLocal.links.high, url: "/features/high-barrier", description: tLocal.links.highDesc },
    { title: tLocal.links.compostable, url: "/materials/home-compostable", description: tLocal.links.compostableDesc }
  ]

  return (
    <>
      <SEOPageLayout heroBgColor="#1f2937"
        title={tLocal.seo.title}
        description={tLocal.seo.description}
        keywords={tLocal.seo.keywords}
        canonicalUrl="https://achievepack.com/features/low-barrier"
        heroTitle={tLocal.seo.heroTitle}
        heroSubtitle={tLocal.seo.heroSubtitle}
        heroImage="/imgs/seo-photos/a_achievepack_low_barrier_fresh_5851801.webp"
        heroImageAlt={tLocal.seo.heroImageAlt}
        introSummary={tLocal.seo.introSummary}
        sections={sections}
        faqs={faqs}
        relatedLinks={relatedLinks}
        ctaTitle={tLocal.seo.ctaTitle}
        ctaDescription={tLocal.seo.ctaDescription}
        ctaButtonText={tLocal.seo.ctaButton}
        ctaButtonUrl="/contact"
      />
      
      {/* Gallery Lightbox Modal */}
      {galleryEnlarged && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4" onClick={() => setGalleryEnlarged(null)}>
          <button onClick={() => setGalleryEnlarged(null)} className="absolute top-4 right-4 text-white hover:text-neutral-300 transition cursor-pointer"><X className="h-8 w-8" /></button>
          <button onClick={(e) => { e.stopPropagation(); navigateGallery('prev'); }} className="absolute left-4 text-white hover:text-neutral-300 transition p-2 cursor-pointer"><ChevronLeft className="h-10 w-10" /></button>
          <img src={galleryEnlarged.src} alt={lowBarrierGallery[galleryEnlarged.index]?.title || 'Enlarged view'} className="max-w-full max-h-[80vh] object-contain" onClick={(e) => e.stopPropagation()} />
          <button onClick={(e) => { e.stopPropagation(); navigateGallery('next'); }} className="absolute right-4 text-white hover:text-neutral-300 transition p-2 cursor-pointer"><ChevronRight className="h-10 w-10" /></button>
          <div className="absolute bottom-4 text-center text-white max-w-xl px-4">
            <p className="text-lg font-semibold">{lowBarrierGallery[galleryEnlarged.index]?.title}</p>
            <p className="text-sm text-neutral-300">{lowBarrierGallery[galleryEnlarged.index]?.desc}</p>
            <p className="text-xs mt-2 text-neutral-400">{galleryEnlarged.index + 1} / {lowBarrierGallery.length}</p>
          </div>
        </div>
      )}
    </>
  )
}

export default LowBarrierPage
