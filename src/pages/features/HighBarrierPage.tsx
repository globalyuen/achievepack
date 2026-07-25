import React, { useState } from 'react'
import { Shield, Zap, Package, CheckCircle, Clock, Image, X, ChevronLeft, ChevronRight, Factory, BarChart3, ArrowLeftRight, TrendingUp, ShoppingBag, Sparkles } from 'lucide-react'
import SEOPageLayout from '../../components/SEOPageLayout'
import { useTranslation } from 'react-i18next'

const localTranslations = {
  en: {
    seo: {
      title: "High Barrier Eco Packaging Solutions (12-24 Months) | Achieve Pack",
      description: "Maximum oxygen and moisture protection with 12-24 months shelf life. Recyclable mono-PE with EVOH (<5%), aluminum-free metallic, and PCR high barrier options.",
      keywords: ['high barrier packaging', 'EVOH barrier pouches', 'long shelf life packaging', 'supplement packaging', 'coffee bag high barrier'],
      heroTitle: "High Barrier Eco Packaging Solutions",
      heroSubtitle: "12-24 Months Shelf Life Protection for Oxygen & Moisture Sensitive Products",
      heroImageAlt: "High barrier premium packaging for luxury products",
      introSummary: "High barrier packaging provides maximum protection with 12-24 months shelf life. Essential for oxygen-sensitive products, supplements, and premium items requiring extended freshness.",
      ctaTitle: "Protect Your Sensitive Products with High Barrier",
      ctaDescription: "Get technical advice on oxygen and moisture barrier options for your exact product shelf-life requirements.",
      ctaButton: "Get Free Technical Advice"
    },
    gallery: [
      { title: 'High Barrier Technology', desc: 'Maximum oxygen and moisture protection for extended shelf life' },
      { title: 'Barrier Level Comparison', desc: 'High barrier provides 12-24 months protection' },
      { title: 'Metallic Barrier Detail', desc: 'Premium metallic appearance with maximum barrier' },
      { title: 'High Barrier Kraft', desc: 'Paper-based solution with enhanced oxygen barrier' },
      { title: 'Application Scenarios', desc: 'Coffee, supplements, and sensitive products' },
      { title: 'Expert Consultation', desc: 'Get personalized high barrier recommendations' }
    ],
    sections: {
      overview: {
        title: 'High Barrier Packaging (12-24 Months Shelf Life)',
        lead: 'High barrier packaging provides maximum protection with 12-24 months shelf life. Essential for oxygen-sensitive products, supplements, and premium items requiring extended freshness.',
        specsTitle: 'Technical Specifications',
        otr: 'OTR: < 1 cc/m²/day',
        mvtr: 'MVTR: < 1 g/m²/day',
        shelf: 'Shelf Life: 12-24 months typical',
        sust: 'Sustainability: Recyclable mono-structures available'
      },
      visualGallery: {
        title: 'High Barrier Solutions Gallery',
        sub: 'Explore our high barrier packaging solutions. Click any image to enlarge:'
      },
      materials: {
        title: 'High Barrier Material Options',
        monoPeEvoh: 'Mono-PE + EVOH',
        monoPeEvohDesc: 'PE structure with thin EVOH oxygen barrier. Recyclable.',
        monoPeEvoh1: '✓ EVOH layer <5% (recyclable)',
        monoPeEvoh2: '✓ Excellent oxygen barrier',
        monoPeEvoh3: '✓ Premium protection',
        monoPp: 'Mono-PP High Barrier',
        monoPpDesc: 'Polypropylene with enhanced barrier properties.',
        monoPp1: '✓ 100% recyclable PP',
        monoPp2: '✓ High heat resistance',
        monoPp3: '✓ Crystal clear options',
        metallic: 'Aluminum-Free Metallic',
        metallicDesc: 'Metallized film without aluminum for recyclability.',
        metallic1: '✓ Premium metallic look',
        metallic2: '✓ Excellent light barrier',
        metallic3: '✓ Recyclable in PE streams',
        pcr: 'PCR High Barrier',
        pcrDesc: 'Post-consumer recycled content with premium barrier.',
        pcr1: '✓ Up to 50% recycled content',
        pcr2: '✓ GRS certified available',
        pcr3: '✓ Circular economy',
        footNote: '*Our high barrier recyclable structures with thin EVOH layer (<5%) are accepted in most recycling programs as the layer is too thin to affect processing.'
      },
      applications: {
        title: 'Ideal Product Applications',
        sub: 'High barrier packaging is essential for:',
        items: ['Ground Coffee', 'Vitamins & Supplements', 'Baby Food & Formula', 'Freeze-Dried Products', 'Medical Powders', 'Premium Adaptogens']
      },
      features: {
        title: 'Additional Features for High Barrier',
        valveTitle: 'Degassing Valve',
        valveDesc: 'One-way valve for freshly roasted coffee - releases CO2 while blocking oxygen entry.',
        tinTieTitle: 'Tin Tie Reclosure',
        tinTieDesc: 'Metal clasp closure for repeated opening and sealing. Maintains barrier after opening.',
        zipperTitle: 'Child-Resistant Zipper',
        zipperDesc: 'Safety zipper for supplements and pharmaceuticals requiring secure packaging.',
        notchTitle: 'Tear Notch',
        notchDesc: 'Easy-open tear notch with controlled opening for portion control.'
      },
      order: {
        title: 'Order Information',
        moq: 'Minimum Order',
        leadTime: 'Days Lead Time',
        testing: 'OTR/MVTR Testing',
        note: 'All high barrier materials come with OTR and MVTR test certificates. We offer accelerated shelf-life testing for validation.'
      },
      industryScenarios: {
        title: 'Industry Applications',
        coffeeTitle: 'Coffee & Tea',
        coffeeDesc: 'Specialty coffee, Ground coffee, High premium Tea',
        coffeeShare: 'Share: 35%',
        supplementsTitle: 'Health Supplements',
        supplementsDesc: 'Vitamins, Protein powder, Nutritional supplements',
        supplementsShare: 'Share: 40%',
        babyTitle: 'Baby Food & Infant Care',
        babyDesc: 'Infant formula, Baby food, Nutrition powder',
        babyShare: 'Share: 25%',
        storyTitle: 'Customer Success Story',
        storyQuote: '“After adopting high barrier packaging, our nutritional supplement brand extended product shelf life from 6 to 18 months, reducing merchant product waste by 50%.”',
        storyAuthor: '— Health Supplements Brand, Annual Sales Growth +45%'
      },
      marketData: {
        title: 'Market Data & Intelligence',
        stat1Value: '$15.8B',
        stat1Label: 'Global High Barrier Packaging Market',
        stat1Sub: '2024 Market Size',
        stat2Value: '7.2%',
        stat2Label: 'CAGR Growth Rate',
        stat2Sub: '2024-2030 Projection',
        stat3Value: '12-24',
        stat3Label: 'Months Shelf Life',
        stat3Sub: 'High Barrier Standard',
        stat4Value: '< 1',
        stat4Label: 'OTR cc/m²/day',
        stat4Sub: 'Ultra-low Oxygen Permeability',
        insightTitle: 'Market Trend Insights',
        trend1: 'Recyclable High Barrier: Mono-PE + EVOH market share continues to increase rapidly.',
        trend2: 'Health Supplements Growth: Per-unit health supplement packaging market grows 12% annually.'
      },
      materialComparison: {
        title: 'Material Comparison',
        thType: 'Material Type',
        thOtr: 'OTR',
        thShelf: 'Shelf Life',
        thEco: 'Eco-Friendly',
        thUse: 'Recommended Use',
        monoPeEvoh: 'Mono-PE + EVOH',
        monoPeEvohEco: '♥️ Recyclable',
        monoPeEvohUse: 'Ground coffee, Supplements',
        foil: 'PET/Al/PE Aluminum Foil',
        foilEco: 'Hard to recycle',
        foilUse: 'Baby formula, Pharmaceuticals',
        monoPp: 'Mono-PP High Barrier',
        monoPpEco: '♥️ Recyclable',
        monoPpUse: 'Retortable products, Ready-to-Eat',
        pcr: 'PCR High Barrier',
        pcrEco: '🌱 Circular economy',
        pcrUse: 'Eco-friendly brands',
        guideTitle: 'Material Selection Guide',
        guideText: 'High barrier packaging requires OTR < 1 cc/m²/day. Choose Mono-PE + EVOH for recyclability, Aluminum Foil laminate for absolute barrier, or PCR materials for sustainability.'
      }
    },
    faqs: [
      { question: "What qualifies as high barrier packaging?", answer: "High barrier packaging typically has an OTR under 1 cc/m²/day and MVTR under 1 g/m²/day, extending shelf life up to 12-24 months." },
      { question: "How does Mono-PE + EVOH remain recyclable?", answer: "The EVOH layer accounts for less than 5% of the total pouch weight, allowing it to pass standard PE recycling stream guidelines (such as APR or CEFLEX)." },
      { question: "Do high barrier bags require aluminum foil?", answer: "Not anymore. Modern metallized films and EVOH-infused PE structures achieve near-aluminum barrier performance while maintaining recyclability." },
      { question: "Can I get third-party OTR and MVTR test reports?", answer: "Yes, every batch of high barrier film includes certified lab test reports verifying oxygen and moisture transmission rates." }
    ],
    links: {
      low: "Low Barrier Options",
      lowDesc: "3-6 month protection",
      medium: "Medium Barrier Options",
      mediumDesc: "6-12 month protection",
      coffee: "Coffee & Tea Packaging",
      coffeeDesc: "Specialty coffee solutions"
    }
  },
  'zh-tw': {
    seo: {
      title: "高阻隔環保包裝解決方案 (12-24個月) | Achieve Pack",
      description: "為敏感產品提供最高等級的防氧防潮保護，保質期長達 12-24 個月。提供含 EVOH (<5%) 的可回收單一 PE、無鋁金屬化薄膜及 PCR 高阻隔材料。",
      keywords: ['高阻隔包裝', 'EVOH阻隔袋', '長保質期包裝', '保健品包裝', '高阻隔咖啡袋'],
      heroTitle: "高阻隔環保包裝解決方案",
      heroSubtitle: "為氧氣與濕度敏感產品提供 12-24 個月頂級保質期防護",
      heroImageAlt: "高端奢華產品的高阻隔保護包裝",
      introSummary: "高阻隔包裝提供極致防護與 12-24 個月的長期保質期，是氧氣敏感型產品、保健品及需長時間保持新鮮度的高端產品的必選方案。",
      ctaTitle: "為您的敏感產品配備高阻隔保護",
      ctaDescription: "獲取針對您產品精確保質期要求的氧氣與水氣阻隔專業建議。",
      ctaButton: "獲取免費技術諮詢"
    },
    gallery: [
      { title: '高阻隔技術', desc: '極致隔氧與隔水氣保護，延長產品保質期' },
      { title: '阻隔等級對比', desc: '高阻隔層提供 12-24 個月的長效保護' },
      { title: '金屬質感阻隔細節', desc: '提供極致阻隔防護的高端金屬質感外觀' },
      { title: '高阻隔牛皮紙', desc: '具備優異隔氧性能的環保紙基解決方案' },
      { title: '應用場景展示', desc: '適用於研磨咖啡、保健品及極度敏感產品' },
      { title: '專家專業諮詢', desc: '獲取個性化的高阻隔包裝方案建議' }
    ],
    sections: {
      overview: {
        title: '高阻隔包裝 (12-24 個月保質期)',
        lead: '高阻隔包裝提供極致防護與 12-24 個月的長期保質期。對於氧氣敏感型產品、保健補充劑及需要長期保持新鮮的高端產品至關重要。',
        specsTitle: '技術規格參數',
        otr: 'OTR 透氧率: < 1 cc/m²/天',
        mvtr: 'MVTR 透濕率: < 1 g/m²/天',
        shelf: '保質期: 典型 12-24 個月',
        sust: '可持續性: 提供可回收單一材料結構'
      },
      visualGallery: {
        title: '高阻隔解決方案展示',
        sub: '探索我們的高阻隔包裝解決方案。點擊任意圖片放大檢視：'
      },
      materials: {
        title: '高阻隔材料結構選擇',
        monoPeEvoh: 'Mono-PE + EVOH',
        monoPeEvohDesc: '帶有微量 EVOH 隔氧層的 PE 結構，完全可回收。',
        monoPeEvoh1: '✓ EVOH 層 <5%（符合回收標準）',
        monoPeEvoh2: '✓ 出色的氧氣阻隔性能',
        monoPeEvoh3: '✓ 頂級產品保護性能',
        monoPp: 'Mono-PP 高阻隔',
        monoPpDesc: '具備增強阻隔特性的聚丙烯結構。',
        monoPp1: '✓ 100% 可回收 PP',
        monoPp2: '✓ 高耐熱性',
        monoPp3: '✓ 高透明度選項',
        metallic: '無鋁金屬化薄膜',
        metallicDesc: '無鋁金屬鍍膜，兼具阻隔與回收便利性。',
        metallic1: '✓ 高端金屬質感外觀',
        metallic2: '✓ 優異的避光性能',
        metallic3: '✓ 可併入 PE 流水線回收',
        pcr: 'PCR 再生高阻隔',
        pcrDesc: '含消費後再生塑料的頂級阻隔結構。',
        pcr1: '✓ 高達 50% 再生塑料含量',
        pcr2: '✓ 可提供 GRS 認證',
        pcr3: '✓ 促進循環經濟發展',
        footNote: '*我們的含薄層 EVOH (<5%) 可回收高阻隔結構符合多數主流回收計劃，因為其佔比極低不影響熔融再造。'
      },
      applications: {
        title: '理想的產品應用場景',
        sub: '高阻隔包裝是以下產品的理想選擇：',
        items: ['研磨咖啡粉', '維生素與保健補充劑', '嬰兒輔食與奶粉', '凍乾食品', '醫藥級粉劑', '高端適應原草本粉']
      },
      features: {
        title: '高阻隔包裝附加功能配件',
        valveTitle: '單向排氣閥',
        valveDesc: '適用於新鮮烘焙咖啡，在排出 CO2 的同時阻擋外部氧氣進入。',
        tinTieTitle: '鐵芯金屬封口條 (Tin Tie)',
        tinTieDesc: '可用於重複開啟與密封，開封後依然保持良好防護。',
        zipperTitle: '兒童安全拉鍊 (Child-Resistant)',
        zipperDesc: '為保健品及醫藥產品提供安全防護鎖定拉鍊。',
        notchTitle: '易撕口設計',
        notchDesc: '順暢易撕開口，方便消費者分量取用與清潔撕開。'
      },
      order: {
        title: '訂購與生產資訊',
        moq: '最低起訂量',
        leadTime: '交貨週期 (天)',
        testing: 'OTR / MVTR 檢測',
        note: '所有高阻隔材料均附帶 OTR 和 MVTR 實驗室檢測報告。我們亦提供加速保質期測試。'
      },
      industryScenarios: {
        title: '行業應用案例',
        coffeeTitle: '咖啡與茶葉',
        coffeeDesc: '精品咖啡、研磨咖啡、高檔特級茶葉',
        coffeeShare: '市場份額: 35%',
        supplementsTitle: '保健品與膳食補充劑',
        supplementsDesc: '維生素、蛋白粉、營養粉劑',
        supplementsShare: '市場份額: 40%',
        babyTitle: '嬰幼兒食品與母嬰',
        babyDesc: '嬰兒配方奶粉、嬰兒輔食、營養米粉',
        babyShare: '市場份額: 25%',
        storyTitle: '客戶成功故事',
        storyQuote: '「在採用高阻隔包裝後，我們的保健品品牌將保質期從 6 個月延長至 18 個月，經銷商退貨損耗降低了 50%。」',
        storyAuthor: '— 保健品品牌，年銷售額增長 +45%'
      },
      marketData: {
        title: '市場數據與情報',
        stat1Value: '$158億',
        stat1Label: '全球高阻隔包裝市場規模',
        stat1Sub: '2024年市場統計',
        stat2Value: '7.2%',
        stat2Label: 'CAGR 年複合增長率',
        stat2Sub: '2024-2030年預測',
        stat3Value: '12-24',
        stat3Label: '個月保質期',
        stat3Sub: '高阻隔行業標準',
        stat4Value: '< 1',
        stat4Label: 'OTR cc/m²/天',
        stat4Sub: '極低透氧率指標',
        insightTitle: '市場趨勢洞察',
        trend1: '可回收高阻隔：Mono-PE + EVOH 結構市場份額持續快速上升。',
        trend2: '保健品需求強勁：保健品包裝市場年增長率高達 12%。'
      },
      materialComparison: {
        title: '材料性能對比表',
        thType: '材料結構類型',
        thOtr: 'OTR 透氧率',
        thShelf: '目標保質期',
        thEco: '環保屬性',
        thUse: '推薦使用場景',
        monoPeEvoh: 'Mono-PE + EVOH',
        monoPeEvohEco: '♥️ 完全可回收',
        monoPeEvohUse: '研磨咖啡粉、保健品',
        foil: 'PET/Al/PE 鋁箔複合',
        foilEco: '較難回收',
        foilUse: '嬰兒配方奶粉、藥品',
        monoPp: 'Mono-PP 高阻隔',
        monoPpEco: '♥️ 完全可回收',
        monoPpUse: '耐高溫產品、即食食品',
        pcr: 'PCR 再生高阻隔',
        pcrEco: '🌱 循環經濟',
        pcrUse: '注重環保形象的品牌',
        guideTitle: '材料選擇指南',
        guideText: '高阻隔包裝要求 OTR < 1 cc/m²/天。追求可回收性首選 Mono-PE+EVOH；追求絕對極致阻隔選擇鋁箔複合；追求綠色永續首選 PCR 再生材料。'
      }
    },
    faqs: [
      { question: "什麼是高阻隔包裝？", answer: "高阻隔包裝通常指 OTR 低於 1 cc/m²/天且 MVTR 低於 1 g/m²/天，能將產品保質期延長至 12-24 個月。" },
      { question: "Mono-PE + EVOH 如何保持可回收性？", answer: "EVOH 阻隔層重量佔總袋重小於 5%，滿足全球主流單一 PE 塑膠回收指南（如 APR 和 CEFLEX）。" },
      { question: "高阻隔袋一定需要鋁箔嗎？", answer: "不再必須。現代金屬化薄膜與含 EVOH 的 PE 結構已能達到接近鋁箔的阻隔效果，同時具備可回收優勢。" },
      { question: "您們能提供第三方 OTR/MVTR 檢測報告嗎？", answer: "可以，每批高阻隔材料均可附帶專業權威實驗室的透氧與透濕檢測報告。" }
    ],
    links: {
      low: "低阻隔選項指南",
      lowDesc: "3-6 個月基礎保護",
      medium: "中阻隔選項指南",
      mediumDesc: "6-12 個月平衡保護",
      coffee: "咖啡與茶葉包裝",
      coffeeDesc: "精品咖啡專業包裝"
    }
  },
  fr: {
    seo: {
      title: "Solutions d'Emballage Haute Barrière Éco (12-24 Mois) | Achieve Pack",
      description: "Protection maximale contre l'oxygène et l'humidité avec 12 à 24 mois de conservation. Options Mono-PE avec EVOH (<5%), métallique sans aluminium et PCR.",
      keywords: ['emballage haute barrière', 'sachets EVOH', 'longue conservation', 'emballage compléments', 'sachet café haute barrière'],
      heroTitle: "Solutions d'Emballage Haute Barrière Écologiques",
      heroSubtitle: "Protection de 12 à 24 Mois pour Produits Sensibles à l'Oxygène et à l'Humidité",
      heroImageAlt: "Emballage haute barrière premium pour produits haut de gamme",
      introSummary: "L'emballage haute barrière offre une protection maximale garantissant une conservation de 12 à 24 mois. Indispensable pour le café moulu, les compléments alimentaires et produits sensibles.",
      ctaTitle: "Protégez vos produits sensibles avec la Haute Barrière",
      ctaDescription: "Obtenez des conseils techniques sur les meilleures options barrières adaptées à votre durée de conservation.",
      ctaButton: "Obtenir des Conseils Techniques"
    },
    gallery: [
      { title: 'Technologie Haute Barrière', desc: 'Protection maximale contre l\'oxygène et l\'humidité' },
      { title: 'Comparaison des Niveaux', desc: 'La haute barrière assure 12 à 24 mois de protection' },
      { title: 'Détail Barrière Métallique', desc: 'Apparence métallique haut de gamme avec protection maximale' },
      { title: 'Kraft Haute Barrière', desc: 'Solution papier renforcée avec excellente barrière à l\'oxygène' },
      { title: 'Scénarios d\'Application', desc: 'Café, compléments et produits très sensibles' },
      { title: 'Consultation d\'Experts', desc: 'Recommandations personnalisées pour la haute barrière' }
    ],
    sections: {
      overview: {
        title: 'Emballage Haute Barrière (12-24 Mois de Conservation)',
        lead: 'L\'emballage haute barrière offre une protection maximale garantissant 12 à 24 mois de fraîcheur. Indispensable pour le café moulu, les compléments alimentaires et produits exigeants.',
        specsTitle: 'Spécifications Techniques',
        otr: 'OTR: < 1 cc/m²/jour',
        mvtr: 'MVTR: < 1 g/m²/jour',
        shelf: 'Conservation: 12-24 mois typique',
        sust: 'Durabilité: Structures mono-matériau recyclables disponibles'
      },
      visualGallery: {
        title: 'Galerie des Solutions Haute Barrière',
        sub: 'Explorez nos sachets haute barrière. Cliquez pour agrandir :'
      },
      materials: {
        title: 'Options de Matériaux Haute Barrière',
        monoPeEvoh: 'Mono-PE + EVOH',
        monoPeEvohDesc: 'Structure PE avec fine barrière EVOH. Recyclable.',
        monoPeEvoh1: '✓ Couche EVOH <5% (recyclable)',
        monoPeEvoh2: '✓ Excellente barrière oxygène',
        monoPeEvoh3: '✓ Protection haut de gamme',
        monoPp: 'Mono-PP Haute Barrière',
        monoPpDesc: 'Polypropylène à propriétés barrières renforcées.',
        monoPp1: '✓ PP 100% recyclable',
        monoPp2: '✓ Haute résistance à la chaleur',
        monoPp3: '✓ Options transparentes claires',
        metallic: 'Métallisé Sans Aluminium',
        metallicDesc: 'Film métallisé sans aluminium favorisant le recyclage.',
        metallic1: '✓ Aspect métallique élégant',
        metallic2: '✓ Excellente barrière lumière',
        metallic3: '✓ Recyclable dans les flux PE',
        pcr: 'PCR Haute Barrière',
        pcrDesc: 'Contenu recyclé post-consommation à haute barrière.',
        pcr1: '✓ Jusqu\'à 50% de matière recyclée',
        pcr2: '✓ Certification GRS disponible',
        pcr3: '✓ Économie circulaire',
        footNote: '*Nos structures recyclables avec couche EVOH (<5%) sont acceptées dans la plupart des centres de tri car la couche est trop fine pour impacter le recyclage.'
      },
      applications: {
        title: 'Applications Produits Idéales',
        sub: 'L\'emballage haute barrière est essentiel pour :',
        items: ['Café moulu', 'Vitamines & Compléments', 'Aliments & Laits Bébé', 'Produits Lyophilisés', 'Poudres Pharmaceutiques', 'Plantes & Adaptogènes']
      },
      features: {
        title: 'Options Supplémentaires Haute Barrière',
        valveTitle: 'Valve de Dégazage',
        valveDesc: 'Valve unidirectionnelle pour café frais - évacue le CO2 tout en bloquant l\'oxygène.',
        tinTieTitle: 'Fermeture Barrette Metal (Tin Tie)',
        tinTieDesc: 'Système de fermeture répétée pour conserver la fraîcheur après ouverture.',
        zipperTitle: 'Zip Sécurité Enfant',
        zipperDesc: 'Zip de sécurité pour compléments et produits pharmaceutiques.',
        notchTitle: 'Encoche d\'Amorce de Rupture',
        notchDesc: 'Ouverture facile et propre pour un dosage pratique.'
      },
      order: {
        title: 'Informations de Commande',
        moq: 'Commande Minimum',
        leadTime: 'Jours de Délai',
        testing: 'Tests OTR/MVTR',
        note: 'Tous les matériaux haute barrière sont accompagnés de certificats de tests OTR/MVTR.'
      },
      industryScenarios: {
        title: 'Applications Industrielles',
        coffeeTitle: 'Café & Thé',
        coffeeDesc: 'Café spécialité, café moulu, thés haut de gamme',
        coffeeShare: 'Part : 35%',
        supplementsTitle: 'Compléments & Santé',
        supplementsDesc: 'Vitamines, poudres de protéine, nutraceutiques',
        supplementsShare: 'Part : 40%',
        babyTitle: 'Alimentation Bébé',
        babyDesc: 'Lait infantile, petits pots, céréales bébé',
        babyShare: 'Part : 25%',
        storyTitle: 'Témoignage Client',
        storyQuote: '« En passant à l\'haute barrière, notre marque de compléments a étendu la durée de conservation de 6 à 18 mois, réduisant le gaspillage de 50%. »',
        storyAuthor: '— Marque de compléments, Croissance de +45%'
      },
      marketData: {
        title: 'Données & Intelligence de Marché',
        stat1Value: '15.8 Mds$',
        stat1Label: 'Marché Mondial Haute Barrière',
        stat1Sub: 'Taille du marché 2024',
        stat2Value: '7.2%',
        stat2Label: 'Taux de croissance annuel',
        stat2Sub: 'Projection 2024-2030',
        stat3Value: '12-24',
        stat3Label: 'Mois de conservation',
        stat3Sub: 'Standard haute barrière',
        stat4Value: '< 1',
        stat4Label: 'OTR cc/m²/jour',
        stat4Sub: 'Perméabilité oxygène ultra-faible',
        insightTitle: 'Tendances du Marché',
        trend1: 'Haute barrière recyclable : La part de marché du Mono-PE + EVOH progresse très rapidement.',
        trend2: 'Croissance des compléments : Le secteur de l\'emballage de compléments augmente de 12% par an.'
      },
      materialComparison: {
        title: 'Tableau Comparatif des Matériaux',
        thType: 'Type de Matériau',
        thOtr: 'OTR',
        thShelf: 'Conservation',
        thEco: 'Écologie',
        thUse: 'Usage Recommandé',
        monoPeEvoh: 'Mono-PE + EVOH',
        monoPeEvohEco: '♥️ Recyclable',
        monoPeEvohUse: 'Café moulu, Compléments',
        foil: 'PET/Al/PE Feuille d\'Aluminium',
        foilEco: 'Difficile à recycler',
        foilUse: 'Lait bébé, Pharmacie',
        monoPp: 'Mono-PP Haute Barrière',
        monoPpEco: '♥️ Recyclable',
        monoPpUse: 'Produits autoclavables, Plats cuisinés',
        pcr: 'PCR Haute Barrière',
        pcrEco: '🌱 Économie circulaire',
        pcrUse: 'Marques éco-responsables',
        guideTitle: 'Guide de Sélection',
        guideText: 'La haute barrière exige un OTR < 1 cc/m²/jour. Choisissez Mono-PE+EVOH pour le recyclage, le complexe Aluminium pour une barrière absolue, ou le PCR pour l\'économie circulaire.'
      }
    },
    faqs: [
      { question: "Qu'est-ce qu'un emballage haute barrière ?", answer: "Un emballage haute barrière possède généralement un OTR < 1 cc/m²/jour et un MVTR < 1 g/m²/jour, garantissant 12 à 24 mois de conservation." },
      { question: "Comment le Mono-PE + EVOH reste-t-il recyclable ?", answer: "La couche d'EVOH est inférieure à 5% de la masse totale du sachet, ce qui est conforme aux recommandations européennes de recyclage (ex: CEFLEX)." },
      { question: "L'aluminium est-il obligatoire pour la haute barrière ?", answer: "Non. Les films métallisés modernes et le Mono-PE avec EVOH offrent des performances équivalentes tout en étant recyclables." },
      { question: "Fournissez-vous des rapports de tests d'étanchéité ?", answer: "Oui, chaque lot d'emballages haute barrière est accompagné de certificats de laboratoires agréés pour l'OTR et le MVTR." }
    ],
    links: {
      low: "Options Faible Barrière",
      lowDesc: "Protection 3-6 mois",
      medium: "Options Moyenne Barrière",
      mediumDesc: "Protection 6-12 mois",
      coffee: "Emballages Café & Thé",
      coffeeDesc: "Solutions cafés de spécialité"
    }
  },
  es: {
    seo: {
      title: "Soluciones de Empaque de Alta Barrera Ecológicas (12-24 Meses) | Achieve Pack",
      description: "Protección máxima al oxígeno y humedad con 12-24 meses de vida útil. Opciones de Mono-PE con EVOH (<5%), metálico sin aluminio y alta barrera PCR.",
      keywords: ['empaque de alta barrera', 'bolsas con EVOH', 'larga vida útil empaque', 'empaque para suplementos', 'bolsa de café alta barrera'],
      heroTitle: "Soluciones de Empaque de Alta Barrera Ecológicas",
      heroSubtitle: "Protección de 12 a 24 Meses de Vida Útil para Productos Sensibles al Oxígeno y Humedad",
      heroImageAlt: "Empaque de alta barrera premium para productos de lujo",
      introSummary: "El empaque de alta barrera ofrece máxima protección garantizando de 12 a 24 meses de vida útil. Esencial para café molido, suplementos y productos de alta exigencia.",
      ctaTitle: "Proteja sus Productos Sensibles con Alta Barrera",
      ctaDescription: "Reciba asesoría técnica sobre las mejores opciones de barrera para la vida útil que requiere su producto.",
      ctaButton: "Obtener Asesoría Técnica"
    },
    gallery: [
      { title: 'Tecnología de Alta Barrera', desc: 'Máxima protección contra oxígeno y humedad para mayor vida útil' },
      { title: 'Comparativa de Niveles', desc: 'La alta barrera brinda entre 12 y 24 meses de protección' },
      { title: 'Detalle de Barrera Metalizada', desc: 'Apariencia metálica elegante con la máxima protección de barrera' },
      { title: 'Kraft de Alta Barrera', desc: 'Solución a base de papel con excelente barrera al oxígeno' },
      { title: 'Escenarios de Aplicación', desc: 'Café molido, suplementos y productos altamente sensibles' },
      { title: 'Consulta con Especialistas', desc: 'Recomendaciones personalizadas de alta barrera' }
    ],
    sections: {
      overview: {
        title: 'Empaque de Alta Barrera (12-24 Meses de Vida Útil)',
        lead: 'El empaque de alta barrera proporciona máxima protección con 12 a 24 meses de vida útil. Esencial para café molido, suplementos y artículos premium.',
        specsTitle: 'Especificaciones Técnicas',
        otr: 'OTR: < 1 cc/m²/día',
        mvtr: 'MVTR: < 1 g/m²/día',
        shelf: 'Vida Útil: 12-24 meses típico',
        sust: 'Sostenibilidad: Estructuras monomaterial reciclables disponibles'
      },
      visualGallery: {
        title: 'Galería de Soluciones de Alta Barrera',
        sub: 'Explore nuestras bolsas de alta barrera. Haga clic para ampliar:'
      },
      materials: {
        title: 'Opciones de Materiales de Alta Barrera',
        monoPeEvoh: 'Mono-PE + EVOH',
        monoPeEvohDesc: 'Estructura PE con delgada barrera de EVOH. Reciclable.',
        monoPeEvoh1: '✓ Capa de EVOH <5% (reciclable)',
        monoPeEvoh2: '✓ Excelente barrera al oxígeno',
        monoPeEvoh3: '✓ Protección de nivel superior',
        monoPp: 'Mono-PP Alta Barrera',
        monoPpDesc: 'Polipropileno con propiedades de barrera mejoradas.',
        monoPp1: '✓ PP 100% reciclable',
        monoPp2: '✓ Alta resistencia al calor',
        monoPp3: '✓ Opción de alta transparencia',
        metallic: 'Metalizado Sin Aluminio',
        metallicDesc: 'Película metalizada libre de aluminio para facilitar el reciclaje.',
        metallic1: '✓ Aspecto metálico premium',
        metallic2: '✓ Excelente barrera a la luz',
        metallic3: '✓ Reciclable en flujos de PE',
        pcr: 'PCR Alta Barrera',
        pcrDesc: 'Contenido reciclado postconsumo con alta barrera.',
        pcr1: '✓ Hasta 50% de material reciclado',
        pcr2: '✓ Certificación GRS disponible',
        pcr3: '✓ Economía circular',
        footNote: '*Nuestras estructuras reciclables con capa de EVOH (<5%) son aceptadas en la mayoría de programas de reciclaje porque la capa es demasiado delgada para interferir.'
      },
      applications: {
        title: 'Aplicaciones Ideales de Productos',
        sub: 'El empaque de alta barrera es indispensable para:',
        items: ['Café molido', 'Vitaminas y Suplementos', 'Alimentos para bebés', 'Productos liofilizados', 'Polvos farmacéuticos', 'Adaptógenos y hierbas premium']
      },
      features: {
        title: 'Características Adicionales de Alta Barrera',
        valveTitle: 'Válvula de Desgasificación',
        valveDesc: 'Válvula unidireccional para café recién tostado: libera CO2 y bloquea el oxígeno.',
        tinTieTitle: 'Cierre Tin Tie',
        tinTieDesc: 'Cierre metálico para abrir y sellar repetidamente manteniendo la frescura.',
        zipperTitle: 'Cierre Infantil de Seguridad',
        zipperDesc: 'Cierre de seguridad para suplementos y productos farmacéuticos.',
        notchTitle: 'Muesca de Abre Fácil',
        notchDesc: 'Muesca para una apertura limpia y cómoda.'
      },
      order: {
        title: 'Información de Pedido',
        moq: 'Pedido Mínimo',
        leadTime: 'Días de Tiempo de Entrega',
        testing: 'Pruebas OTR/MVTR',
        note: 'Todos los materiales de alta barrera incluyen certificados de pruebas de laboratorio para OTR y MVTR.'
      },
      industryScenarios: {
        title: 'Aplicaciones por Industria',
        coffeeTitle: 'Café y Té',
        coffeeDesc: 'Café de especialidad, café molido, tés de alta gama',
        coffeeShare: 'Cuota: 35%',
        supplementsTitle: 'Salud y Suplementos',
        supplementsDesc: 'Vitaminas, proteínas en polvo, nutracéuticos',
        supplementsShare: 'Cuota: 40%',
        babyTitle: 'Alimentos Infantiles',
        babyDesc: 'Fórmula infantil, papillas, cereales para bebé',
        babyShare: 'Cuota: 25%',
        storyTitle: 'Historia de Éxito',
        storyQuote: '«Al adoptar el empaque de alta barrera, nuestra marca de suplementos extendió la vida útil de 6 a 18 meses, reduciendo las mermas un 50%.»',
        storyAuthor: '— Marca de Suplementos de Salud, Crecimiento Anual +45%'
      },
      marketData: {
        title: 'Datos e Inteligencia de Mercado',
        stat1Value: '$15.8B',
        stat1Label: 'Mercado Global de Alta Barrera',
        stat1Sub: 'Tamaño del mercado 2024',
        stat2Value: '7.2%',
        stat2Label: 'Tasa de crecimiento anual (CAGR)',
        stat2Sub: 'Proyección 2024-2030',
        stat3Value: '12-24',
        stat3Label: 'Meses de vida útil',
        stat3Sub: 'Estándar de alta barrera',
        stat4Value: '< 1',
        stat4Label: 'OTR cc/m²/día',
        stat4Sub: 'Permeabilidad al oxígeno ultra baja',
        insightTitle: 'Perspectivas del Mercado',
        trend1: 'Alta barrera reciclable: La cuota de mercado de Mono-PE + EVOH aumenta rápidamente.',
        trend2: 'Crecimiento en suplementos: El empaque para suplementos crece un 12% anual.'
      },
      materialComparison: {
        title: 'Tabla Comparativa de Materiales',
        thType: 'Tipo de Material',
        thOtr: 'OTR',
        thShelf: 'Vida Útil',
        thEco: 'Propiedad Eco',
        thUse: 'Uso Recomendado',
        monoPeEvoh: 'Mono-PE + EVOH',
        monoPeEvohEco: '♥️ Reciclable',
        monoPeEvohUse: 'Café molido, Suplementos',
        foil: 'PET/Al/PE Papel de Aluminio',
        foilEco: 'Difícil de reciclar',
        foilUse: 'Fórmula infantil, Farmacia',
        monoPp: 'Mono-PP Alta Barrera',
        monoPpEco: '♥️ Reciclable',
        monoPpUse: 'Productos esterilizables, Comida lista',
        pcr: 'PCR Alta Barrera',
        pcrEco: '🌱 Economía circular',
        pcrUse: 'Marcas ecológicas',
        guideTitle: 'Guía de Selección',
        guideText: 'La alta barrera exige un OTR < 1 cc/m²/día. Elija Mono-PE+EVOH por reciclabilidad, lámina de Aluminio para barrera absoluta o PCR para sostenibilidad.'
      }
    },
    faqs: [
      { question: "¿Qué se considera un empaque de alta barrera?", answer: "Suele tener un OTR < 1 cc/m²/día y MVTR < 1 g/m²/día, extendiendo la vida útil a 12-24 meses." },
      { question: "¿Cómo se mantiene reciclable el Mono-PE + EVOH?", answer: "La capa de EVOH representa menos del 5% del peso total del empaque, lo que cumple con las directrices de reciclaje de PE." },
      { question: "¿Es obligatorio el uso de aluminio?", answer: "Ya no. Los filmes metalizados modernos y las estructuras PE con EVOH logran barreras cercanas al aluminio siendo reciclables." },
      { question: "¿Entregan certificados de laboratorio para OTR y MVTR?", answer: "Sí, cada lote incluye certificados oficiales que verifican las tasas de transmisión de oxígeno y humedad." }
    ],
    links: {
      low: "Opciones de Barrera Baja",
      lowDesc: "Protección de 3-6 meses",
      medium: "Opciones de Barrera Media",
      mediumDesc: "Protección de 6-12 meses",
      coffee: "Empaques para Café y Té",
      coffeeDesc: "Soluciones para café de especialidad"
    }
  }
}

const highBarrierGalleryImages = [
  '/imgs/barrier/ads/a_achieve_pack_barrier_kv_updated_green_definition_6833995.webp',
  '/imgs/barrier/ads/a_barrier_levels_7395220.webp',
  '/imgs/barrier/ads/a_metallic_barrier_closeup_9656118.webp',
  '/imgs/barrier/ads/a_kraft_high_max_4456348.webp',
  '/imgs/barrier/ads/a_application_scenarios_2234685.webp',
  '/imgs/barrier/ads/a_closing_consultation_6756895.webp',
]

const HighBarrierPage: React.FC = () => {
  const { i18n } = useTranslation()
  const rawLang = (i18n.language || 'en').toLowerCase()
  const currentLang = (rawLang === 'zh-tw' || rawLang === 'zh-hant' || rawLang === 'zh') ? 'zh-tw' : (rawLang === 'fr' ? 'fr' : (rawLang === 'es' ? 'es' : 'en'))
  const tLocal = localTranslations[currentLang] || localTranslations.en

  const [galleryEnlarged, setGalleryEnlarged] = useState<{ src: string; index: number } | null>(null)
  
  const highBarrierGallery = highBarrierGalleryImages.map((src, index) => ({
    src,
    title: tLocal.gallery[index]?.title || '',
    desc: tLocal.gallery[index]?.desc || ''
  }))

  const navigateGallery = (direction: 'prev' | 'next') => {
    if (!galleryEnlarged) return
    let newIndex = direction === 'prev' ? galleryEnlarged.index - 1 : galleryEnlarged.index + 1
    if (newIndex < 0) newIndex = highBarrierGallery.length - 1
    if (newIndex >= highBarrierGallery.length) newIndex = 0
    setGalleryEnlarged({ src: highBarrierGallery[newIndex].src, index: newIndex })
  }
  
  const sections = [
    {
      id: 'overview',
      title: tLocal.sections.overview.title,
      icon: <Shield className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>{tLocal.sections.overview.lead}</p>
          <div className="bg-primary-50 p-4 rounded-lg border-l-4 border-primary-500 mt-4">
            <h4 className="font-semibold text-primary-800 mb-2">{tLocal.sections.overview.specsTitle}</h4>
            <ul className="text-sm space-y-1 text-primary-700">
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
            {highBarrierGallery.map((img, index) => (
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
      icon: <Zap className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <div className="grid md:grid-cols-2 gap-4 mt-4">
            <div className="bg-white border border-neutral-200 p-4 rounded-lg">
              <h4 className="font-semibold text-neutral-900 mb-2">{tLocal.sections.materials.monoPeEvoh}</h4>
              <p className="text-sm mb-3">{tLocal.sections.materials.monoPeEvohDesc}</p>
              <ul className="text-xs space-y-1 text-neutral-600">
                <li>{tLocal.sections.materials.monoPeEvoh1}</li>
                <li>{tLocal.sections.materials.monoPeEvoh2}</li>
                <li>{tLocal.sections.materials.monoPeEvoh3}</li>
              </ul>
            </div>
            <div className="bg-white border border-neutral-200 p-4 rounded-lg">
              <h4 className="font-semibold text-neutral-900 mb-2">{tLocal.sections.materials.monoPp}</h4>
              <p className="text-sm mb-3">{tLocal.sections.materials.monoPpDesc}</p>
              <ul className="text-xs space-y-1 text-neutral-600">
                <li>{tLocal.sections.materials.monoPp1}</li>
                <li>{tLocal.sections.materials.monoPp2}</li>
                <li>{tLocal.sections.materials.monoPp3}</li>
              </ul>
            </div>
            <div className="bg-white border border-neutral-200 p-4 rounded-lg">
              <h4 className="font-semibold text-neutral-900 mb-2">{tLocal.sections.materials.metallic}</h4>
              <p className="text-sm mb-3">{tLocal.sections.materials.metallicDesc}</p>
              <ul className="text-xs space-y-1 text-neutral-600">
                <li>{tLocal.sections.materials.metallic1}</li>
                <li>{tLocal.sections.materials.metallic2}</li>
                <li>{tLocal.sections.materials.metallic3}</li>
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
          </div>
          <p className="text-sm text-neutral-500 mt-4">
            {tLocal.sections.materials.footNote}
          </p>
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
              <div key={idx} className="bg-primary-50 p-3 rounded-lg text-center">
                <div className="text-2xl mb-2">{['☕', '💊', '👶', '❄️', '🏥', '🌿'][idx] || '✨'}</div>
                <h5 className="font-semibold text-sm">{item}</h5>
              </div>
            ))}
          </div>
        </div>
      )
    },
    {
      id: 'features',
      title: tLocal.sections.features.title,
      icon: <CheckCircle className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-neutral-50 p-4 rounded-lg">
              <h4 className="font-semibold mb-2">{tLocal.sections.features.valveTitle}</h4>
              <p className="text-sm">{tLocal.sections.features.valveDesc}</p>
            </div>
            <div className="bg-neutral-50 p-4 rounded-lg">
              <h4 className="font-semibold mb-2">{tLocal.sections.features.tinTieTitle}</h4>
              <p className="text-sm">{tLocal.sections.features.tinTieDesc}</p>
            </div>
            <div className="bg-neutral-50 p-4 rounded-lg">
              <h4 className="font-semibold mb-2">{tLocal.sections.features.zipperTitle}</h4>
              <p className="text-sm">{tLocal.sections.features.zipperDesc}</p>
            </div>
            <div className="bg-neutral-50 p-4 rounded-lg">
              <h4 className="font-semibold mb-2">{tLocal.sections.features.notchTitle}</h4>
              <p className="text-sm">{tLocal.sections.features.notchDesc}</p>
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
              <div className="text-3xl font-bold text-primary-600 mb-2">15-25</div>
              <div className="text-sm text-neutral-600">{tLocal.sections.order.leadTime}</div>
            </div>
            <div className="bg-white border border-neutral-200 p-4 rounded-lg text-center">
              <div className="text-3xl font-bold text-primary-600 mb-2">Free</div>
              <div className="text-sm text-neutral-600">{tLocal.sections.order.testing}</div>
            </div>
          </div>
          <p className="text-sm text-neutral-500 mt-4">
            {tLocal.sections.order.note}
          </p>
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
                <h4 className="font-semibold text-neutral-900">{tLocal.sections.industryScenarios.supplementsTitle}</h4>
              </div>
              <p className="text-sm text-neutral-600 mb-3">{tLocal.sections.industryScenarios.supplementsDesc}</p>
              <div className="text-xs text-blue-700 bg-blue-100 px-2 py-1 rounded inline-block">{tLocal.sections.industryScenarios.supplementsShare}</div>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-5 rounded-xl border border-green-200">
              <div className="flex items-center gap-2 mb-3">
                <TrendingUp className="h-5 w-5 text-green-600" />
                <h4 className="font-semibold text-neutral-900">{tLocal.sections.industryScenarios.babyTitle}</h4>
              </div>
              <p className="text-sm text-neutral-600 mb-3">{tLocal.sections.industryScenarios.babyDesc}</p>
              <div className="text-xs text-green-700 bg-green-100 px-2 py-1 rounded inline-block">{tLocal.sections.industryScenarios.babyShare}</div>
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
                  <th className="border border-neutral-200 px-4 py-2 text-center">{tLocal.sections.materialComparison.thOtr}</th>
                  <th className="border border-neutral-200 px-4 py-2 text-center">{tLocal.sections.materialComparison.thShelf}</th>
                  <th className="border border-neutral-200 px-4 py-2 text-center">{tLocal.sections.materialComparison.thEco}</th>
                  <th className="border border-neutral-200 px-4 py-2 text-left">{tLocal.sections.materialComparison.thUse}</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-neutral-200 px-4 py-2 font-medium">{tLocal.sections.materialComparison.monoPeEvoh}</td>
                  <td className="border border-neutral-200 px-4 py-2 text-center">{'<'}1</td>
                  <td className="border border-neutral-200 px-4 py-2 text-center">18-24 months</td>
                  <td className="border border-neutral-200 px-4 py-2 text-center">{tLocal.sections.materialComparison.monoPeEvohEco}</td>
                  <td className="border border-neutral-200 px-4 py-2">{tLocal.sections.materialComparison.monoPeEvohUse}</td>
                </tr>
                <tr className="bg-neutral-50">
                  <td className="border border-neutral-200 px-4 py-2 font-medium">{tLocal.sections.materialComparison.foil}</td>
                  <td className="border border-neutral-200 px-4 py-2 text-center">{'<'}0.5</td>
                  <td className="border border-neutral-200 px-4 py-2 text-center">24+ months</td>
                  <td className="border border-neutral-200 px-4 py-2 text-center">{tLocal.sections.materialComparison.foilEco}</td>
                  <td className="border border-neutral-200 px-4 py-2">{tLocal.sections.materialComparison.foilUse}</td>
                </tr>
                <tr>
                  <td className="border border-neutral-200 px-4 py-2 font-medium">{tLocal.sections.materialComparison.monoPp}</td>
                  <td className="border border-neutral-200 px-4 py-2 text-center">{'<'}2</td>
                  <td className="border border-neutral-200 px-4 py-2 text-center">12-18 months</td>
                  <td className="border border-neutral-200 px-4 py-2 text-center">{tLocal.sections.materialComparison.monoPpEco}</td>
                  <td className="border border-neutral-200 px-4 py-2">{tLocal.sections.materialComparison.monoPpUse}</td>
                </tr>
                <tr className="bg-green-50">
                  <td className="border border-neutral-200 px-4 py-2 font-medium">{tLocal.sections.materialComparison.pcr}</td>
                  <td className="border border-neutral-200 px-4 py-2 text-center">{'<'}1</td>
                  <td className="border border-neutral-200 px-4 py-2 text-center">12-18 months</td>
                  <td className="border border-neutral-200 px-4 py-2 text-center">{tLocal.sections.materialComparison.pcrEco}</td>
                  <td className="border border-neutral-200 px-4 py-2">{tLocal.sections.materialComparison.pcrUse}</td>
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
    { title: tLocal.links.medium, url: "/features/medium-barrier", description: tLocal.links.mediumDesc },
    { title: tLocal.links.coffee, url: "/industry/coffee-tea", description: tLocal.links.coffeeDesc }
  ]

  return (
    <>
      <SEOPageLayout heroBgColor="#1f2937"
        title={tLocal.seo.title}
        description={tLocal.seo.description}
        keywords={tLocal.seo.keywords}
        canonicalUrl="https://achievepack.com/features/high-barrier"
        heroTitle={tLocal.seo.heroTitle}
        heroSubtitle={tLocal.seo.heroSubtitle}
        heroImage="/imgs/seo-photos/a_achievepack_high_barrier_luxury_1992395.webp"
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
          <img src={galleryEnlarged.src} alt={highBarrierGallery[galleryEnlarged.index]?.title || 'Enlarged view'} className="max-w-full max-h-[80vh] object-contain" onClick={(e) => e.stopPropagation()} />
          <button onClick={(e) => { e.stopPropagation(); navigateGallery('next'); }} className="absolute right-4 text-white hover:text-neutral-300 transition p-2 cursor-pointer"><ChevronRight className="h-10 w-10" /></button>
          <div className="absolute bottom-4 text-center text-white max-w-xl px-4">
            <p className="text-lg font-semibold">{highBarrierGallery[galleryEnlarged.index]?.title}</p>
            <p className="text-sm text-neutral-300">{highBarrierGallery[galleryEnlarged.index]?.desc}</p>
            <p className="text-xs mt-2 text-neutral-400">{galleryEnlarged.index + 1} / {highBarrierGallery.length}</p>
          </div>
        </div>
      )}
    </>
  )
}

export default HighBarrierPage
