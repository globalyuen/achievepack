import React, { useState } from 'react'
import { Shield, Layers, Package, CheckCircle, Clock, Image, X, ChevronLeft, ChevronRight, Factory, BarChart3, ArrowLeftRight, TrendingUp, ShoppingBag, Sparkles } from 'lucide-react'
import SEOPageLayout from '../../components/SEOPageLayout'
import { useTranslation } from 'react-i18next'

const localTranslations = {
  en: {
    seo: {
      title: "Medium Barrier Eco Packaging Solutions (6-12 Months) | Achieve Pack",
      description: "Balanced protection with 6-12 months shelf life. Recyclable mono-PE, sugarcane bio-PE, PCR recycled plastic, and metallized kraft options for coffee, pet food, and snacks.",
      keywords: ['medium barrier packaging', 'recyclable pouches', 'mono-PE packaging', 'bio-PE pouches', 'coffee packaging', 'pet food packaging'],
      heroTitle: "Medium Barrier Eco Packaging Solutions",
      heroSubtitle: "6-12 Months Shelf Life Protection for Coffee Beans, Pet Treats & Pantry Goods",
      heroImageAlt: "Medium barrier recyclable packaging for pantry products",
      introSummary: "Medium barrier packaging provides balanced protection with 6-12 months shelf life. The sweet spot for most food products, combining good barrier properties with excellent sustainability credentials.",
      ctaTitle: "Find Your Balanced Medium Barrier Solution",
      ctaDescription: "Get free samples and technical guidance to match your exact 6-12 month shelf-life requirements.",
      ctaButton: "Get Free Consultation"
    },
    gallery: [
      { title: 'Barrier Technology Overview', desc: 'Eco-friendly barrier solutions for balanced protection' },
      { title: 'Barrier Level Chart', desc: 'Medium barrier provides 6-12 months protection' },
      { title: 'Kraft Paper Options', desc: 'Paper-based solutions with medium barrier properties' },
      { title: 'Transparent Options', desc: 'Clear films with medium barrier for product visibility' },
      { title: 'Application Scenarios', desc: 'Coffee beans, nuts, pet food, and protein powders' },
      { title: 'Eco Value Proposition', desc: 'Sustainable medium barrier without compromising protection' }
    ],
    sections: {
      overview: {
        title: 'Medium Barrier Packaging (6-12 Months Shelf Life)',
        lead: 'Medium barrier packaging provides balanced protection with 6-12 months shelf life. The sweet spot for most food products, combining good barrier properties with excellent sustainability credentials.',
        specsTitle: 'Technical Specifications',
        otr: 'OTR: 5-20 cc/m²/day',
        mvtr: 'MVTR: 2-5 g/m²/day',
        shelf: 'Shelf Life: 6-12 months typical',
        sust: 'Sustainability: Recyclable mono-materials available'
      },
      visualGallery: {
        title: 'Medium Barrier Solutions Gallery',
        sub: 'Explore our medium barrier packaging solutions. Click any image to enlarge:'
      },
      materials: {
        title: 'Medium Barrier Material Options',
        monoPe: 'Mono-PE (Recyclable)',
        monoPeDesc: 'Single material polyethylene structure. Widely recyclable.',
        monoPe1: '✓ 100% PE recyclable',
        monoPe2: '✓ Excellent seal strength',
        monoPe3: '✓ Good moisture barrier',
        bioPe: 'Bio-PE (Sugarcane-Based)',
        bioPeDesc: 'Plant-based polyethylene from renewable sugarcane.',
        bioPe1: '✓ Carbon-negative material',
        bioPe2: '✓ Same performance as fossil PE',
        bioPe3: '✓ Recyclable in PE streams',
        pcr: 'PCR Plastic (30-100%)',
        pcrDesc: 'Post-consumer recycled content for circular economy.',
        pcr1: '✓ Up to 100% recycled content',
        pcr2: '✓ GRS certified available',
        pcr3: '✓ Reduces virgin plastic use',
        kraft: 'Metallized Kraft',
        kraftDesc: 'Paper with metallized layer for enhanced protection.',
        kraft1: '✓ Premium natural look',
        kraft2: '✓ Good oxygen barrier',
        kraft3: '✓ Partially recyclable'
      },
      applications: {
        title: 'Ideal Product Applications',
        sub: 'Medium barrier packaging is perfect for:',
        items: ['Roasted Coffee Beans', 'Nuts & Seeds', 'Pet Food & Treats', 'Protein Powders', 'Breakfast Cereals', 'Chocolate & Confections']
      },
      benefits: {
        title: 'Why Choose Medium Barrier?',
        b1Title: 'Balanced Performance',
        b1Desc: 'Optimal protection for most food products',
        b2Title: 'Recyclable Options',
        b2Desc: 'Mono-PE and Bio-PE are widely recyclable',
        b3Title: 'Cost-Effective',
        b3Desc: 'Great value for extended shelf life needs',
        b4Title: 'Versatile Applications',
        b4Desc: 'Suitable for the widest range of products'
      },
      order: {
        title: 'Order Information',
        moq: 'Minimum Order',
        leadTime: 'Days Lead Time',
        testing: 'Barrier Testing'
      },
      industryScenarios: {
        title: 'Industry Applications',
        coffeeTitle: 'Coffee Beans',
        coffeeDesc: 'Roasted coffee beans, Single origin coffee, Specialty coffee',
        coffeeShare: 'Share: 35%',
        petTitle: 'Pet Food',
        petDesc: 'Dog food, Cat food, Pet treats',
        petShare: 'Share: 40%',
        nutsTitle: 'Nuts & Snacks',
        nutsDesc: 'Nuts, Seeds, Dried fruits, Trail mix',
        nutsShare: 'Share: 25%',
        storyTitle: 'Customer Success Story',
        storyQuote: '“After adopting medium barrier recyclable packaging, our pet food brand achieved 12 months shelf life while satisfying eco-conscious consumers.”',
        storyAuthor: '— Pet Food Brand, Annual Sales Growth +35%'
      },
      marketData: {
        title: 'Market Data & Intelligence',
        stat1Value: '$22.5B',
        stat1Label: 'Global Medium Barrier Market',
        stat1Sub: '2024 Market Size',
        stat2Value: '5.8%',
        stat2Label: 'CAGR Growth Rate',
        stat2Sub: '2024-2030 Projection',
        stat3Value: '6-12',
        stat3Label: 'Months Shelf Life',
        stat3Sub: 'Medium Barrier Standard',
        stat4Value: '55%',
        stat4Label: 'Recyclable Share',
        stat4Sub: 'Medium Barrier Market',
        insightTitle: 'Market Trend Insights',
        trend1: 'Mono-PE Market Leadership: Recyclable mono-material structures are becoming mainstream.',
        trend2: 'Pet Food Growth: Global pet food packaging market grows 8% annually.'
      },
      materialComparison: {
        title: 'Material Comparison',
        thType: 'Material Type',
        thShelf: 'Shelf Life',
        thCost: 'Cost',
        thEco: 'Eco-Friendly',
        thUse: 'Recommended Use',
        monoPe: 'Mono-PE Recyclable',
        monoPeEco: '♥️ Recyclable',
        monoPeUse: 'Coffee beans, Pet food',
        bioPe: 'Bio-PE Sugarcane',
        bioPeEco: '🌱 Carbon negative',
        bioPeUse: 'Eco-conscious brands',
        pcr: 'PCR Recycled Plastic',
        pcrEco: '🌱 Circular economy',
        pcrUse: 'Retail brands, Large enterprise',
        kraft: 'Metallized Kraft Paper',
        kraftEco: 'Partially recyclable',
        kraftUse: 'Specialty coffee, Premium tea',
        guideTitle: 'Material Selection Guide',
        guideText: 'Medium barrier is the most widely used packaging category. Choose Mono-PE for recyclability, Bio-PE or PCR for sustainability, or Metallized Kraft for premium natural aesthetics.'
      }
    },
    faqs: [
      { question: "What products are best suited for medium barrier?", answer: "Roasted coffee beans, nuts, pet food, dry snacks, and protein powders that require 6-12 months of protection against moisture and oxygen." },
      { question: "Is Mono-PE 100% recyclable?", answer: "Yes, Mono-PE is a single-family resin polymer that can be directly collected in store drop-off and curbstide PE recycling streams." },
      { question: "What is the difference between Bio-PE and regular PE?", answer: "Bio-PE is made from sugarcane ethanol instead of fossil fuel. It performs identically to traditional PE and is 100% recyclable in the same stream." },
      { question: "How does medium barrier compare to low and high barrier?", answer: "Medium barrier provides OTR of 5-20 cc/m²/day and MVTR of 2-5 g/m²/day, striking an ideal balance between protection level and material cost." }
    ],
    links: {
      low: "Low Barrier Options",
      lowDesc: "3-6 month protection",
      high: "High Barrier Options",
      highDesc: "12-24 month protection",
      monoPe: "Recyclable Mono-PE",
      monoPeDesc: "100% recyclable material"
    }
  },
  'zh-tw': {
    seo: {
      title: "中阻隔環保包裝解決方案 (6-12個月) | Achieve Pack",
      description: "平衡防護，提供 6-12 個月保質期。包含可回收 Mono-PE、甘蔗 Bio-PE、PCR 再生塑料及金屬化牛皮紙選項，適用於咖啡、寵物食品及零食。",
      keywords: ['中阻隔包裝', '可回收袋', 'mono-PE包裝', 'bio-PE袋', '咖啡包裝', '寵物食品包裝'],
      heroTitle: "中阻隔環保包裝解決方案",
      heroSubtitle: "為咖啡豆、寵物零食與乾糧提供 6-12 個月平衡保質期防護",
      heroImageAlt: "食品與乾糧的中阻隔可回收保護包裝",
      introSummary: "中阻隔包裝提供平衡防護與 6-12 個月的理想保質期。這是大多數食品的最佳選擇，兼具優異阻隔性能與出色可持續環保指標。",
      ctaTitle: "找到您理想的中阻隔平衡包裝方案",
      ctaDescription: "獲取免費樣品包與技術指導，精準匹配您 6-12 個月的保質期需求。",
      ctaButton: "獲取免費諮詢"
    },
    gallery: [
      { title: '阻隔技術概覽', desc: '提供平衡防護的可持續阻隔解決方案' },
      { title: '阻隔等級對比圖表', desc: '中阻隔層提供 6-12 個月的長期保質期防護' },
      { title: '牛皮紙包裝選項', desc: '兼具天然外觀與中阻隔性能的紙基方案' },
      { title: '透明阻隔薄膜', desc: '兼具產品展示透明度與中阻隔性能的薄膜' },
      { title: '應用場景展示', desc: '適用於烘焙咖啡豆、堅果、寵物食品與蛋白粉' },
      { title: '環保價值主張', desc: '不妥協防護性能的可持續中阻隔包裝' }
    ],
    sections: {
      overview: {
        title: '中阻隔包裝 (6-12 個月保質期)',
        lead: '中阻隔包裝提供平衡防護與 6-12 個月的理想保質期。這是大多數食品的最佳選擇，兼具優異阻隔性能與出色可持續環保指標。',
        specsTitle: '技術規格參數',
        otr: 'OTR 透氧率: 5-20 cc/m²/天',
        mvtr: 'MVTR 透濕率: 2-5 g/m²/天',
        shelf: '保質期: 典型 6-12 個月',
        sust: '可持續性: 提供 100% 可回收單一材料'
      },
      visualGallery: {
        title: '中阻隔解決方案展示',
        sub: '探索我們的中阻隔包裝解決方案。點擊任意圖片放大檢視：'
      },
      materials: {
        title: '中阻隔材料結構選擇',
        monoPe: 'Mono-PE (可回收聚乙烯)',
        monoPeDesc: '單一材料 PE 結構，全球廣泛接受回收。',
        monoPe1: '✓ 100% PE 可回收結構',
        monoPe2: '✓ 出色的封口強度',
        monoPe3: '✓ 良好的防潮防濕性能',
        bioPe: 'Bio-PE (甘蔗生物基)',
        bioPeDesc: '源自可再生甘蔗的植物基 PE 材料。',
        bioPe1: '✓ 負碳足跡環保材料',
        bioPe2: '✓ 性能與石化 PE 完全一致',
        bioPe3: '✓ 可融入普通 PE 流水線回收',
        pcr: 'PCR 再生塑料 (30-100%)',
        pcrDesc: '包含消費後再生成分，助力循環經濟。',
        pcr1: '✓ 高達 100% 再生塑料含量',
        pcr2: '✓ 可提供 GRS 權威認證',
        pcr3: '✓ 減少原生塑膠消耗',
        kraft: '金屬化牛皮紙',
        kraftDesc: '牛皮紙結合金屬化鍍層，提升防護能力。',
        kraft1: '✓ 高端天然質感外觀',
        kraft2: '✓ 良好的隔氧性能',
        kraft3: '✓ 部分地區可回收'
      },
      applications: {
        title: '理想的產品應用場景',
        sub: '中阻隔包裝非常適合以下產品：',
        items: ['烘焙咖啡豆', '堅果與種子類零食', '寵物主糧與零食', '蛋白粉與健身粉劑', '早餐燕麥片', '巧克力與糖果']
      },
      benefits: {
        title: '為什麼選擇中阻隔包裝？',
        b1Title: '平衡的防護性能',
        b1Desc: '為絕大多數食品提供最佳綜合保護',
        b2Title: '豐富的可回收選項',
        b2Desc: 'Mono-PE 與 Bio-PE 均符合主流回收標準',
        b3Title: '高性價比方案',
        b3Desc: '兼顧保質期需求與包裝成本控制',
        b4Title: '廣泛的適用範圍',
        b4Desc: '適用於市場上最豐富的產品類別'
      },
      order: {
        title: '訂購與生產資訊',
        moq: '最低起訂量',
        leadTime: '交貨週期 (天)',
        testing: '免費阻隔測試'
      },
      industryScenarios: {
        title: '行業應用案例',
        coffeeTitle: '烘焙咖啡豆',
        coffeeDesc: '烘焙咖啡豆、單品咖啡、精品咖啡',
        coffeeShare: '市場份額: 35%',
        petTitle: '寵物食品與零食',
        petDesc: '狗糧、貓糧、寵物凍乾零食',
        petShare: '市場份額: 40%',
        nutsTitle: '堅果與休閒零食',
        nutsDesc: '堅果、種子、果乾、綜合零食',
        nutsShare: '市場份額: 25%',
        storyTitle: '客戶成功故事',
        storyQuote: '「在採用中阻隔可回收包裝後，我們的寵物食品保質期達到了 12 個月，同時滿足了消費者對環保包裝的要求。」',
        storyAuthor: '— 寵物食品品牌，年銷售額增長 +35%'
      },
      marketData: {
        title: '市場數據與情報',
        stat1Value: '$225億',
        stat1Label: '全球中阻隔包裝市場規模',
        stat1Sub: '2024年市場統計',
        stat2Value: '5.8%',
        stat2Label: 'CAGR 年複合增長率',
        stat2Sub: '2024-2030年預測',
        stat3Value: '6-12',
        stat3Label: '個月保質期',
        stat3Sub: '中阻隔行業標準',
        stat4Value: '55%',
        stat4Label: '可回收份額佔比',
        stat4Sub: '中阻隔市場統計',
        insightTitle: '市場趨勢洞察',
        trend1: 'Mono-PE 市場主導地位：可回收單一材料結構正成為主流。',
        trend2: '寵物食品市場強勁：全球寵物食品包裝市場年增長率達 8%。'
      },
      materialComparison: {
        title: '材料性能對比表',
        thType: '材料結構類型',
        thShelf: '目標保質期',
        thCost: '相對成本',
        thEco: '環保屬性',
        thUse: '推薦使用場景',
        monoPe: 'Mono-PE 可回收',
        monoPeEco: '♥️ 完全可回收',
        monoPeUse: '咖啡豆、寵物食品',
        bioPe: 'Bio-PE 甘蔗生物基',
        bioPeEco: '🌱 負碳足跡',
        bioPeUse: '注重環保形象的品牌',
        pcr: 'PCR 再生塑料',
        pcrEco: '🌱 循環經濟',
        pcrUse: '大型企業、零售品牌',
        kraft: '金屬化牛皮紙',
        kraftEco: '部分可回收',
        kraftUse: '精品咖啡、高檔茶葉',
        guideTitle: '材料選擇指南',
        guideText: '中阻隔是應用最廣泛的包裝類別。追求可回收選擇 Mono-PE；追求綠色永續選擇 Bio-PE 或 PCR；追求高端天然質感選擇金屬化牛皮紙。'
      }
    },
    faqs: [
      { question: "哪些產品最適合使用中阻隔包裝？", answer: "烘焙咖啡豆、堅果、寵物食品、乾燥零食與蛋白粉等需要 6-12 個月防潮隔氧防護的產品。" },
      { question: "Mono-PE 是 100% 可回收的嗎？", answer: "是的，Mono-PE 屬於單一聚合物家族，可以直接進入路邊或超市的 PE 專用回收流。" },
      { question: "Bio-PE 與普通 PE 有何區別？", answer: "Bio-PE 源自甘蔗乙醇而非化石燃料，其性能與傳統 PE 完全相同，且可以在相同的 PE 回收流中 100% 回收。" },
      { question: "中阻隔與低阻隔、高阻隔相比有何不同？", answer: "中阻隔提供 OTR 5-20 cc/m²/天及 MVTR 2-5 g/m²/天，在保護性能與材料成本之間取得了最佳平衡。" }
    ],
    links: {
      low: "低阻隔選項指南",
      lowDesc: "3-6 個月基礎保護",
      high: "高阻隔選項指南",
      highDesc: "12-24 個月長效保護",
      monoPe: "可回收 Mono-PE",
      monoPeDesc: "100% 可回收環保材料"
    }
  },
  fr: {
    seo: {
      title: "Solutions d'Emballage Barrière Moyenne Éco (6-12 Mois) | Achieve Pack",
      description: "Protection équilibrée avec 6 à 12 mois de conservation. Options Mono-PE recyclable, Bio-PE de canne à sucre, plastique recyclé PCR et kraft métallisé.",
      keywords: ['emballage barrière moyenne', 'sachets recyclables', 'emballage mono-PE', 'sachets bio-PE', 'emballage café', 'emballage nourriture animaux'],
      heroTitle: "Solutions d'Emballage Barrière Moyenne Écologiques",
      heroSubtitle: "Protection de 6 à 12 Mois pour Grains de Café, Friandises Animaux & Produits Secs",
      heroImageAlt: "Emballage barrière moyenne recyclable pour produits du quotidien",
      introSummary: "L'emballage barrière moyenne offre une protection équilibrée garantissant 6 à 12 mois de fraîcheur. Le choix idéal pour la majorité des produits alimentaires.",
      ctaTitle: "Trouvez votre solution barrière moyenne idéale",
      ctaDescription: "Obtenez des échantillons gratuits et un accompagnement technique personnalisé pour vos besoins de 6 à 12 mois.",
      ctaButton: "Obtenir une Consultation Gratuite"
    },
    gallery: [
      { title: 'Aperçu Technologie Barrière', desc: 'Solutions barrières durables pour une protection équilibrée' },
      { title: 'Tableau des Niveaux Barrières', desc: 'La barrière moyenne assure 6 à 12 mois de conservation' },
      { title: 'Options Papier Kraft', desc: 'Solutions papier avec propriétés barrières moyennes' },
      { title: 'Options Transparentes', desc: 'Films clairs à barrière moyenne pour la visibilité des produits' },
      { title: 'Scénarios d\'Application', desc: 'Café en grains, noix, aliments animaux et protéines en poudre' },
      { title: 'Proposition de Valeur Éco', desc: 'Barrière moyenne durable sans compromis sur la protection' }
    ],
    sections: {
      overview: {
        title: 'Emballage Barrière Moyenne (6-12 Mois de Conservation)',
        lead: 'L\'emballage barrière moyenne offre une protection équilibrée garantissant 6 à 12 mois de conservation. C\'est le compromis idéal pour la majorité des aliments.',
        specsTitle: 'Spécifications Techniques',
        otr: 'OTR: 5-20 cc/m²/jour',
        mvtr: 'MVTR: 2-5 g/m²/jour',
        shelf: 'Conservation: 6-12 mois typique',
        sust: 'Durabilité: Mono-matériaux recyclables disponibles'
      },
      visualGallery: {
        title: 'Galerie des Solutions Barrière Moyenne',
        sub: 'Explorez nos sachets à barrière moyenne. Cliquez pour agrandir :'
      },
      materials: {
        title: 'Options de Matériaux Barrière Moyenne',
        monoPe: 'Mono-PE (Recyclable)',
        monoPeDesc: 'Structure en polyéthylène mono-matériau. Largement recyclable.',
        monoPe1: '✓ 100% PE recyclable',
        monoPe2: '✓ Excellente résistance de soudure',
        monoPe3: '✓ Bonne barrière à l\'humidité',
        bioPe: 'Bio-PE (À base de canne à sucre)',
        bioPeDesc: 'Polyéthylène biosourcé issu de la canne à sucre.',
        bioPe1: '✓ Matériau à empreinte carbone négative',
        bioPe2: '✓ Performances identiques au PE fossile',
        bioPe3: '✓ Recyclable dans les flux PE',
        pcr: 'Plastique PCR (30-100%)',
        pcrDesc: 'Contenu recyclé post-consommation pour l\'économie circulaire.',
        pcr1: '✓ Jusqu\'à 100% de matière recyclée',
        pcr2: '✓ Certification GRS disponible',
        pcr3: '✓ Réduit l\'utilisation de plastique vierge',
        kraft: 'Kraft Métallisé',
        kraftDesc: 'Papier avec couche métallisée pour une protection accrue.',
        kraft1: '✓ Aspect naturel élégant',
        kraft2: '✓ Bonne barrière à l\'oxygène',
        kraft3: '✓ Partiellement recyclable'
      },
      applications: {
        title: 'Applications Produits Idéales',
        sub: 'L\'emballage barrière moyenne est parfait pour :',
        items: ['Café torréfié en grains', 'Noix & Graines', 'Aliments pour animaux', 'Protéines en poudre', 'Céréales du petit-déjeuner', 'Chocolat & Confiserie']
      },
      benefits: {
        title: 'Pourquoi Choisir la Barrière Moyenne ?',
        b1Title: 'Performance Équilibrée',
        b1Desc: 'Protection optimale pour la plupart des produits',
        b2Title: 'Options Recyclables',
        b2Desc: 'Mono-PE et Bio-PE largement recyclables',
        b3Title: 'Rapport Qualité-Prix',
        b3Desc: 'Excellente valeur pour une conservation prolongée',
        b4Title: 'Polyvalence D\'application',
        b4Desc: 'Adapté à une vaste gamme de produits'
      },
      order: {
        title: 'Informations de Commande',
        moq: 'Commande Minimum',
        leadTime: 'Jours de Délai',
        testing: 'Tests Barrière Gratuits'
      },
      industryScenarios: {
        title: 'Applications Industrielles',
        coffeeTitle: 'Café en Grains',
        coffeeDesc: 'Grains torréfiés, café d\'origine, café de spécialité',
        coffeeShare: 'Part : 35%',
        petTitle: 'Nourriture Animale',
        petDesc: 'Croquettes chiens, chats, friandises animaux',
        petShare: 'Part : 40%',
        nutsTitle: 'Noix & Snacks',
        nutsDesc: 'Noix, graines, fruits secs, mélanges',
        nutsShare: 'Part : 25%',
        storyTitle: 'Témoignage Client',
        storyQuote: '« En adoptant l\'emballage recyclable barrière moyenne, notre marque d\'aliments pour animaux a obtenu 12 mois de conservation tout en répondant aux attentes écoresponsables. »',
        storyAuthor: '— Marque d\'aliments pour animaux, Croissance de +35%'
      },
      marketData: {
        title: 'Données & Intelligence de Marché',
        stat1Value: '22.5 Mds$',
        stat1Label: 'Marché Barrière Moyenne',
        stat1Sub: 'Taille du marché 2024',
        stat2Value: '5.8%',
        stat2Label: 'Taux de croissance annuel (CAGR)',
        stat2Sub: 'Projection 2024-2030',
        stat3Value: '6-12',
        stat3Label: 'Mois de conservation',
        stat3Sub: 'Standard barrière moyenne',
        stat4Value: '55%',
        stat4Label: 'Part du recyclable',
        stat4Sub: 'Marché barrière moyenne',
        insightTitle: 'Tendances du Marché',
        trend1: 'Leadership du Mono-PE : Les structures mono-matériaux deviennent la norme.',
        trend2: 'Croissance de l\'alimentation animale : Le marché croît de 8% par an.'
      },
      materialComparison: {
        title: 'Tableau Comparatif des Matériaux',
        thType: 'Type de Matériau',
        thShelf: 'Conservation',
        thCost: 'Coût',
        thEco: 'Écologie',
        thUse: 'Usage Recommandé',
        monoPe: 'Mono-PE Recyclable',
        monoPeEco: '♥️ Recyclable',
        monoPeUse: 'Café en grains, Croquettes',
        bioPe: 'Bio-PE Canne à Sucre',
        bioPeEco: '🌱 Empreinte carbone négative',
        bioPeUse: 'Marques éco-responsables',
        pcr: 'Plastique Recyclé PCR',
        pcrEco: '🌱 Économie circulaire',
        pcrUse: 'Grandes marques & Grande distribution',
        kraft: 'Papier Kraft Métallisé',
        kraftEco: 'Partiellement recyclable',
        kraftUse: 'Cafés de spécialité, Thés',
        guideTitle: 'Guide de Sélection',
        guideText: 'La barrière moyenne est la catégorie la plus utilisée. Choisissez Mono-PE pour la recyclabilité, Bio-PE ou PCR pour le climat, et Kraft Métallisé pour l\'élégance naturelle.'
      }
    },
    faqs: [
      { question: "Quels produits conviennent le mieux à la barrière moyenne ?", answer: "Grains de café torréfiés, noix, aliments pour animaux, snacks secs et compléments en poudre nécessitant 6 à 12 mois de conservation." },
      { question: "Le Mono-PE est-il 100% recyclable ?", answer: "Oui, le Mono-PE est un polyéthylène mono-matériau collecté dans les filières de recyclage de PE plastique." },
      { question: "Quelle est la différence entre Bio-PE et PE classique ?", answer: "Le Bio-PE provient d'éthanol de canne à sucre. Ses performances sont identiques au PE fossile et il est 100% recyclable dans la même filière." },
      { question: "Quelle est la différence entre barrière moyenne, faible et haute ?", answer: "La barrière moyenne offre un OTR de 5 à 20 cc/m²/jour et un MVTR de 2 à 5 g/m²/jour, équilibrant parfaitement protection et coût." }
    ],
    links: {
      low: "Options Faible Barrière",
      lowDesc: "Protection 3-6 mois",
      high: "Options Haute Barrière",
      highDesc: "Protection 12-24 mois",
      monoPe: "Mono-PE Recyclable",
      monoPeDesc: "Matériau 100% recyclable"
    }
  },
  es: {
    seo: {
      title: "Soluciones de Empaque de Barrera Media Ecológicas (6-12 Meses) | Achieve Pack",
      description: "Protección equilibrada con 6-12 meses de vida útil. Opciones de Mono-PE reciclable, Bio-PE de caña de azúcar, plástico reciclado PCR y kraft metalizado.",
      keywords: ['empaque de barrera media', 'bolsas reciclables', 'empaque mono-PE', 'bolsas bio-PE', 'empaque para café', 'empaque para alimento de mascotas'],
      heroTitle: "Soluciones de Empaque de Barrera Media Ecológicas",
      heroSubtitle: "Protección de 6 a 12 Meses de Vida Útil para Café en Grano, Premios de Mascotas y Alimentos",
      heroImageAlt: "Empaque reciclable de barrera media para productos de despensa",
      introSummary: "El empaque de barrera media proporciona protección equilibrada con 6 a 12 meses de vida útil. La opción idónea para la mayoría de los alimentos.",
      ctaTitle: "Encuentre su Solución de Barrera Media Equilibrada",
      ctaDescription: "Obtenga muestras gratuitas y asesoría técnica para sus requerimientos de 6 a 12 meses.",
      ctaButton: "Obtener Consulta Gratuita"
    },
    gallery: [
      { title: 'Vista General de Tecnología de Barrera', desc: 'Soluciones de barrera sostenibles para una protección equilibrada' },
      { title: 'Tabla de Niveles de Barrera', desc: 'La barrera media brinda de 6 a 12 meses de protección' },
      { title: 'Opciones de Papel Kraft', desc: 'Soluciones a base de papel con propiedades de barrera media' },
      { title: 'Opciones Transparentes', desc: 'Películas transparentes con barrera media para visibilidad del producto' },
      { title: 'Escenarios de Aplicación', desc: 'Café en grano, nueces, alimento para mascotas y proteínas' },
      { title: 'Propuesta de Valor Eco', desc: 'Barrera media sostenible sin comprometer la protección' }
    ],
    sections: {
      overview: {
        title: 'Empaque de Barrera Media (6-12 Meses de Vida Útil)',
        lead: 'El empaque de barrera media proporciona protección equilibrada con 6 a 12 meses de vida útil. Combina excelentes propiedades de barrera con sostenibilidad.',
        specsTitle: 'Especificaciones Técnicas',
        otr: 'OTR: 5-20 cc/m²/día',
        mvtr: 'MVTR: 2-5 g/m²/día',
        shelf: 'Vida Útil: 6-12 meses típico',
        sust: 'Sostenibilidad: Monomateriales reciclables disponibles'
      },
      visualGallery: {
        title: 'Galería de Soluciones de Barrera Media',
        sub: 'Explore nuestras bolsas de barrera media. Haga clic para ampliar:'
      },
      materials: {
        title: 'Opciones de Materiales de Barrera Media',
        monoPe: 'Mono-PE (Reciclable)',
        monoPeDesc: 'Estructura de polietileno de un solo material. Ampliamente reciclable.',
        monoPe1: '✓ 100% PE reciclable',
        monoPe2: '✓ Excelente fuerza de sellado',
        monoPe3: '✓ Buena barrera a la humedad',
        bioPe: 'Bio-PE (De Caña de Azúcar)',
        bioPeDesc: 'Polietileno de origen vegetal derivado de caña de azúcar renovable.',
        bioPe1: '✓ Material con huella de carbono negativa',
        bioPe2: '✓ Mismo rendimiento que el PE fósil',
        bioPe3: '✓ Reciclable en flujos de PE',
        pcr: 'Plástico PCR (30-100%)',
        pcrDesc: 'Contenido reciclado postconsumo para economía circular.',
        pcr1: '✓ Hasta 100% de contenido reciclado',
        pcr2: '✓ Certificación GRS disponible',
        pcr3: '✓ Reduce el uso de plástico virgen',
        kraft: 'Kraft Metalizado',
        kraftDesc: 'Papel con capa metalizada para mayor protección.',
        kraft1: '✓ Aspecto natural premium',
        kraft2: '✓ Buena barrera al oxígeno',
        kraft3: '✓ Partialmente reciclable'
      },
      applications: {
        title: 'Aplicaciones Ideales de Productos',
        sub: 'El empaque de barrera media es idóneo para:',
        items: ['Café tostado en grano', 'Nueces y semillas', 'Alimento y premios para mascotas', 'Proteínas en polvo', 'Cereales de desayuno', 'Chocolate y confitería']
      },
      benefits: {
        title: '¿Por qué elegir Barrera Media?',
        b1Title: 'Rendimiento Equilibrado',
        b1Desc: 'Protección óptima para la mayoría de los alimentos',
        b2Title: 'Opciones Reciclables',
        b2Desc: 'Mono-PE y Bio-PE son ampliamente reciclables',
        b3Title: 'Excelente Relación Costo-Beneficio',
        b3Desc: 'Gran valor para necesidades de conservación prolongada',
        b4Title: 'Aplicaciones Versátiles',
        b4Desc: 'Apto para la gama más amplia de productos'
      },
      order: {
        title: 'Información de Pedido',
        moq: 'Pedido Mínimo',
        leadTime: 'Días de Tiempo de Entrega',
        testing: 'Prueba de Barrera Gratuita'
      },
      industryScenarios: {
        title: 'Aplicaciones por Industria',
        coffeeTitle: 'Café en Grano',
        coffeeDesc: 'Café recién tostado, café de origen, café de especialidad',
        coffeeShare: 'Cuota: 35%',
        petTitle: 'Alimento para Mascotas',
        petDesc: 'Comida para perros, gatos, premios para mascotas',
        petShare: 'Cuota: 40%',
        nutsTitle: 'Nueces y Snacks',
        nutsDesc: 'Nueces, semillas, frutas secas, mezclas',
        nutsShare: 'Cuota: 25%',
        storyTitle: 'Historia de Éxito',
        storyQuote: '«Al adoptar el empaque reciclable de barrera media, nuestra marca de alimentos para mascotas logró 12 meses de vida útil satisfaciendo la demanda ecológica.»',
        storyAuthor: '— Marca de Alimentos para Mascotas, Crecimiento Anual +35%'
      },
      marketData: {
        title: 'Datos e Inteligencia de Mercado',
        stat1Value: '$22.5B',
        stat1Label: 'Mercado de Barrera Media',
        stat1Sub: 'Tamaño del mercado 2024',
        stat2Value: '5.8%',
        stat2Label: 'Tasa de crecimiento anual (CAGR)',
        stat2Sub: 'Proyección 2024-2030',
        stat3Value: '6-12',
        stat3Label: 'Meses de vida útil',
        stat3Sub: 'Estándar de barrera media',
        stat4Value: '55%',
        stat4Label: 'Cuota de reciclables',
        stat4Sub: 'Mercado de barrera media',
        insightTitle: 'Perspectivas del Mercado',
        trend1: 'Liderazgo de Mono-PE: Las estructuras monomateriales reciclables se convierten en tendencia principal.',
        trend2: 'Crecimiento en mascotas: El empaque para mascotas crece un 8% anual.'
      },
      materialComparison: {
        title: 'Tabla Comparativa de Materiales',
        thType: 'Tipo de Material',
        thShelf: 'Vida Útil',
        thCost: 'Costo',
        thEco: 'Propiedad Eco',
        thUse: 'Uso Recomendado',
        monoPe: 'Mono-PE Reciclable',
        monoPeEco: '♥️ Reciclable',
        monoPeUse: 'Café en grano, Alimento mascotas',
        bioPe: 'Bio-PE Caña de Azúcar',
        bioPeEco: '🌱 Huella de carbono negativa',
        bioPeUse: 'Marcas con compromiso ambiental',
        pcr: 'Plástico Reciclado PCR',
        pcrEco: '🌱 Economía circular',
        pcrUse: 'Grandes marcas y minoristas',
        kraft: 'Papel Kraft Metalizado',
        kraftEco: 'Partialmente reciclable',
        kraftUse: 'Café de especialidad, Té premium',
        guideTitle: 'Guía de Selección',
        guideText: 'La barrera media es la categoría más utilizada. Elija Mono-PE para reciclabilidad, Bio-PE o PCR para sostenibilidad ambiental, o Kraft Metalizado para elegancia natural.'
      }
    },
    faqs: [
      { question: "¿Qué productos se adaptan mejor a la barrera media?", answer: "Café tostado en grano, nueces, alimento para mascotas, snacks secos y proteínas en polvo que requieren de 6 a 12 meses de protección." },
      { question: "¿El Mono-PE es 100% reciclable?", answer: "Sí, el Mono-PE es un polímero monomaterial que se deposita en los contenedores o puntos limpios de reciclaje de PE." },
      { question: "¿Cuál es la diferencia entre Bio-PE y PE convencional?", answer: "El Bio-PE proviene del etanol de caña de azúcar. Se comporta idénticamente al PE tradicional y es 100% reciclable en el mismo flujo." },
      { question: "¿En qué se diferencia la barrera media de la baja y la alta?", answer: "La barrera media ofrece un OTR de 5-20 cc/m²/día y MVTR de 2-5 g/m²/día, ofreciendo un equilibrio óptimo entre costo y protección." }
    ],
    links: {
      low: "Opciones de Barrera Baja",
      lowDesc: "Protección de 3-6 meses",
      high: "Opciones de Alta Barrera",
      highDesc: "Protección de 12-24 meses",
      monoPe: "Mono-PE Reciclable",
      monoPeDesc: "Material 100% reciclable"
    }
  }
}

const mediumBarrierGalleryImages = [
  '/imgs/barrier/ads/a_achieve_pack_barrier_kv_updated_green_definition_6833995.webp',
  '/imgs/barrier/ads/a_barrier_levels_7395220.webp',
  '/imgs/barrier/ads/a_kraft_levels_1_2_3604187.webp',
  '/imgs/barrier/ads/a_transparent_options_3839456.webp',
  '/imgs/barrier/ads/a_application_scenarios_2234685.webp',
  '/imgs/barrier/ads/a_value_barrier_eco_4905901.webp',
]

const MediumBarrierPage: React.FC = () => {
  const { i18n } = useTranslation()
  const rawLang = (i18n.language || 'en').toLowerCase()
  const currentLang = (rawLang === 'zh-tw' || rawLang === 'zh-hant' || rawLang === 'zh') ? 'zh-tw' : (rawLang === 'fr' ? 'fr' : (rawLang === 'es' ? 'es' : 'en'))
  const tLocal = localTranslations[currentLang] || localTranslations.en

  const [galleryEnlarged, setGalleryEnlarged] = useState<{ src: string; index: number } | null>(null)
  
  const mediumBarrierGallery = mediumBarrierGalleryImages.map((src, index) => ({
    src,
    title: tLocal.gallery[index]?.title || '',
    desc: tLocal.gallery[index]?.desc || ''
  }))

  const navigateGallery = (direction: 'prev' | 'next') => {
    if (!galleryEnlarged) return
    let newIndex = direction === 'prev' ? galleryEnlarged.index - 1 : galleryEnlarged.index + 1
    if (newIndex < 0) newIndex = mediumBarrierGallery.length - 1
    if (newIndex >= mediumBarrierGallery.length) newIndex = 0
    setGalleryEnlarged({ src: mediumBarrierGallery[newIndex].src, index: newIndex })
  }
  
  const sections = [
    {
      id: 'overview',
      title: tLocal.sections.overview.title,
      icon: <Shield className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>{tLocal.sections.overview.lead}</p>
          <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500 mt-4">
            <h4 className="font-semibold text-blue-800 mb-2">{tLocal.sections.overview.specsTitle}</h4>
            <ul className="text-sm space-y-1 text-blue-700">
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
            {mediumBarrierGallery.map((img, index) => (
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
      icon: <Layers className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <div className="grid md:grid-cols-2 gap-4 mt-4">
            <div className="bg-white border border-neutral-200 p-4 rounded-lg">
              <h4 className="font-semibold text-neutral-900 mb-2">{tLocal.sections.materials.monoPe}</h4>
              <p className="text-sm mb-3">{tLocal.sections.materials.monoPeDesc}</p>
              <ul className="text-xs space-y-1 text-neutral-600">
                <li>{tLocal.sections.materials.monoPe1}</li>
                <li>{tLocal.sections.materials.monoPe2}</li>
                <li>{tLocal.sections.materials.monoPe3}</li>
              </ul>
            </div>
            <div className="bg-white border border-neutral-200 p-4 rounded-lg">
              <h4 className="font-semibold text-neutral-900 mb-2">{tLocal.sections.materials.bioPe}</h4>
              <p className="text-sm mb-3">{tLocal.sections.materials.bioPeDesc}</p>
              <ul className="text-xs space-y-1 text-neutral-600">
                <li>{tLocal.sections.materials.bioPe1}</li>
                <li>{tLocal.sections.materials.bioPe2}</li>
                <li>{tLocal.sections.materials.bioPe3}</li>
              </ul>
            </div>
            <div className="bg-white border border-neutral-200 p-4 rounded-lg">
              <h4 className="font-semibold text-neutral-900 mb-2">{tLocal.sections.materials.pcr}</h4>
              <p className="text-sm mb-3">{tLocal.sections.materials.pcrDesc}</p>
              <ul className="text-xs space-y-1 text-neutral-600">
                <li>{tLocal.sections.materials.pcr1}</li>
                <li>{tLocal.sections.materials.pcr2}</li>
                <li>{tLocal.sections.materials.pcr3}</li>
              </ul>
            </div>
            <div className="bg-white border border-neutral-200 p-4 rounded-lg">
              <h4 className="font-semibold text-neutral-900 mb-2">{tLocal.sections.materials.kraft}</h4>
              <p className="text-sm mb-3">{tLocal.sections.materials.kraftDesc}</p>
              <ul className="text-xs space-y-1 text-neutral-600">
                <li>{tLocal.sections.materials.kraft1}</li>
                <li>{tLocal.sections.materials.kraft2}</li>
                <li>{tLocal.sections.materials.kraft3}</li>
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
              <div key={idx} className="bg-blue-50 p-3 rounded-lg text-center">
                <div className="text-2xl mb-2">{['☕', '🥜', '🐕', '💪', '🥣', '🍫'][idx] || '✨'}</div>
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
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-blue-600 font-bold">1</span>
              </div>
              <div>
                <h4 className="font-semibold">{tLocal.sections.benefits.b1Title}</h4>
                <p className="text-sm">{tLocal.sections.benefits.b1Desc}</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-blue-600 font-bold">2</span>
              </div>
              <div>
                <h4 className="font-semibold">{tLocal.sections.benefits.b2Title}</h4>
                <p className="text-sm">{tLocal.sections.benefits.b2Desc}</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-blue-600 font-bold">3</span>
              </div>
              <div>
                <h4 className="font-semibold">{tLocal.sections.benefits.b3Title}</h4>
                <p className="text-sm">{tLocal.sections.benefits.b3Desc}</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-blue-600 font-bold">4</span>
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
              <div className="text-sm text-neutral-600">{tLocal.sections.order.testing}</div>
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
                <h4 className="font-semibold text-neutral-900">{tLocal.sections.industryScenarios.coffeeTitle}</h4>
              </div>
              <p className="text-sm text-neutral-600 mb-3">{tLocal.sections.industryScenarios.coffeeDesc}</p>
              <div className="text-xs text-amber-700 bg-amber-100 px-2 py-1 rounded inline-block">{tLocal.sections.industryScenarios.coffeeShare}</div>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-5 rounded-xl border border-blue-200">
              <div className="flex items-center gap-2 mb-3">
                <Sparkles className="h-5 w-5 text-blue-600" />
                <h4 className="font-semibold text-neutral-900">{tLocal.sections.industryScenarios.petTitle}</h4>
              </div>
              <p className="text-sm text-neutral-600 mb-3">{tLocal.sections.industryScenarios.petDesc}</p>
              <div className="text-xs text-blue-700 bg-blue-100 px-2 py-1 rounded inline-block">{tLocal.sections.industryScenarios.petShare}</div>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-5 rounded-xl border border-green-200">
              <div className="flex items-center gap-2 mb-3">
                <TrendingUp className="h-5 w-5 text-green-600" />
                <h4 className="font-semibold text-neutral-900">{tLocal.sections.industryScenarios.nutsTitle}</h4>
              </div>
              <p className="text-sm text-neutral-600 mb-3">{tLocal.sections.industryScenarios.nutsDesc}</p>
              <div className="text-xs text-green-700 bg-green-100 px-2 py-1 rounded inline-block">{tLocal.sections.industryScenarios.nutsShare}</div>
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
                  <td className="border border-neutral-200 px-4 py-2 font-medium">{tLocal.sections.materialComparison.monoPe}</td>
                  <td className="border border-neutral-200 px-4 py-2 text-center">6-9 months</td>
                  <td className="border border-neutral-200 px-4 py-2 text-center">💰</td>
                  <td className="border border-neutral-200 px-4 py-2 text-center">{tLocal.sections.materialComparison.monoPeEco}</td>
                  <td className="border border-neutral-200 px-4 py-2">{tLocal.sections.materialComparison.monoPeUse}</td>
                </tr>
                <tr className="bg-neutral-50">
                  <td className="border border-neutral-200 px-4 py-2 font-medium">{tLocal.sections.materialComparison.bioPe}</td>
                  <td className="border border-neutral-200 px-4 py-2 text-center">6-9 months</td>
                  <td className="border border-neutral-200 px-4 py-2 text-center">💰💰</td>
                  <td className="border border-neutral-200 px-4 py-2 text-center">{tLocal.sections.materialComparison.bioPeEco}</td>
                  <td className="border border-neutral-200 px-4 py-2">{tLocal.sections.materialComparison.bioPeUse}</td>
                </tr>
                <tr>
                  <td className="border border-neutral-200 px-4 py-2 font-medium">{tLocal.sections.materialComparison.pcr}</td>
                  <td className="border border-neutral-200 px-4 py-2 text-center">6-12 months</td>
                  <td className="border border-neutral-200 px-4 py-2 text-center">💰</td>
                  <td className="border border-neutral-200 px-4 py-2 text-center">{tLocal.sections.materialComparison.pcrEco}</td>
                  <td className="border border-neutral-200 px-4 py-2">{tLocal.sections.materialComparison.pcrUse}</td>
                </tr>
                <tr className="bg-green-50">
                  <td className="border border-neutral-200 px-4 py-2 font-medium">{tLocal.sections.materialComparison.kraft}</td>
                  <td className="border border-neutral-200 px-4 py-2 text-center">9-12 months</td>
                  <td className="border border-neutral-200 px-4 py-2 text-center">💰💰</td>
                  <td className="border border-neutral-200 px-4 py-2 text-center">{tLocal.sections.materialComparison.kraftEco}</td>
                  <td className="border border-neutral-200 px-4 py-2">{tLocal.sections.materialComparison.kraftUse}</td>
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
    { title: tLocal.links.low, url: "/features/low-barrier", description: tLocal.links.lowDesc },
    { title: tLocal.links.high, url: "/features/high-barrier", description: tLocal.links.highDesc },
    { title: tLocal.links.monoPe, url: "/materials/recyclable-mono-pe", description: tLocal.links.monoPeDesc }
  ]

  return (
    <>
      <SEOPageLayout heroBgColor="#1f2937"
        title={tLocal.seo.title}
        description={tLocal.seo.description}
        keywords={tLocal.seo.keywords}
        canonicalUrl="https://achievepack.com/features/medium-barrier"
        heroTitle={tLocal.seo.heroTitle}
        heroSubtitle={tLocal.seo.heroSubtitle}
        heroImage="/imgs/seo-photos/a_achievepack_medium_barrier_pantry_7988653.webp"
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
          <img src={galleryEnlarged.src} alt={mediumBarrierGallery[galleryEnlarged.index]?.title || 'Enlarged view'} className="max-w-full max-h-[80vh] object-contain" onClick={(e) => e.stopPropagation()} />
          <button onClick={(e) => { e.stopPropagation(); navigateGallery('next'); }} className="absolute right-4 text-white hover:text-neutral-300 transition p-2 cursor-pointer"><ChevronRight className="h-10 w-10" /></button>
          <div className="absolute bottom-4 text-center text-white max-w-xl px-4">
            <p className="text-lg font-semibold">{mediumBarrierGallery[galleryEnlarged.index]?.title}</p>
            <p className="text-sm text-neutral-300">{mediumBarrierGallery[galleryEnlarged.index]?.desc}</p>
            <p className="text-xs mt-2 text-neutral-400">{galleryEnlarged.index + 1} / {mediumBarrierGallery.length}</p>
          </div>
        </div>
      )}
    </>
  )
}

export default MediumBarrierPage
