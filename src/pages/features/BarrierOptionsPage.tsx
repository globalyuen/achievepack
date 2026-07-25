import React, { useState } from 'react'
import { Shield, Thermometer, Package, CheckCircle, Clock, Target, Calendar, Mail, Download, X, ChevronLeft, ChevronRight, Image, Factory, BarChart3, ArrowLeftRight, TrendingUp, ShoppingBag, Sparkles } from 'lucide-react'
import SEOPageLayout from '../../components/SEOPageLayout'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { useCalendly } from '../../contexts/CalendlyContext'

const localTranslations = {
  en: {
    seo: {
      title: "Barrier Options & Protection Levels | Achieve Pack Sustainable Packaging",
      description: "Choose the right barrier level for your sustainable packaging. Low, medium, and high barrier options in recyclable and compostable materials. Free shelf-life testing available.",
      keywords: ['barrier packaging', 'high barrier pouches', 'oxygen barrier', 'moisture barrier', 'shelf life packaging', 'EVOH barrier'],
      heroTitle: "Barrier Options & Protection Levels",
      heroSubtitle: "Select the optimal barrier performance for oxygen, moisture, and aroma preservation",
      heroImageAlt: "Barrier protection levels for eco-friendly packaging",
      introSummary: "Discover our comprehensive range of sustainable packaging barrier options engineered to extend product shelf life while maintaining eco-friendly credentials.",
      ctaTitle: "Ready to Find Your Ideal Barrier Solution?",
      ctaDescription: "Our packaging experts conduct free shelf-life testing to ensure your product receives maximum protection with minimum environmental impact.",
      ctaButton: "Get Free Barrier Consultation"
    },
    gallery: [
      { title: 'Eco-Friendly Barrier Technology', desc: 'Our sustainable barrier solutions protect products while minimizing environmental impact' },
      { title: 'Barrier Level Comparison', desc: 'Compare Low, Medium, High, and Max barrier options for your product needs' },
      { title: 'Kraft Paper Barrier Options', desc: 'Paper-based solutions with low to medium barrier properties' },
      { title: 'High Barrier Kraft', desc: 'Enhanced kraft paper with superior oxygen barrier for extended shelf life' },
      { title: 'Transparent Barrier Films', desc: 'Clear packaging with various barrier levels for product visibility' },
      { title: 'Metallic Barrier Detail', desc: 'Aluminum-free metallic appearance with maximum barrier protection' },
      { title: 'Application Scenarios', desc: 'Match the right barrier level to your specific product requirements' },
      { title: 'Eco Value Proposition', desc: 'Sustainable barrier solutions that don\'t compromise on protection' },
      { title: 'Expert Consultation', desc: 'Get personalized barrier recommendations from our packaging specialists' }
    ],
    sections: {
      scenarioTrigger: {
        title: 'Is This Page For You?',
        intro: 'If you need to protect your product from oxygen, moisture, or light while maintaining eco-friendly credentials—you\'re in the right place.',
        food: 'Food & Beverage',
        foodDesc: 'Coffee, snacks, pet food shelf life',
        supplements: 'Supplements',
        supplementsDesc: 'Protein, vitamins, powders protection',
        unsure: 'Unsure of Barrier',
        unsureDesc: 'Free shelf-life testing available'
      },
      overview: {
        title: 'What Are Barrier Options and Why Do They Matter?',
        lead: 'Protect your products with the right barrier level while maintaining sustainability. Achieve Pack offers low, medium, and high barrier options in both recyclable and compostable materials to match your product\'s shelf life requirements.',
        levelsTitle: 'Barrier Protection Levels:',
        low: 'Low Barrier (3-6 months) – Ideal for dry goods with fast turnover',
        medium: 'Medium Barrier (6-12 months) – Balanced protection for most products',
        high: 'High Barrier (12-24 months) – Maximum protection for sensitive products'
      },
      visualGallery: {
        title: 'What Do Different Barrier Levels Look Like?',
        sub: 'Explore our range of barrier packaging options. Click any image to enlarge:'
      },
      barrierTypes: {
        title: 'How Do Low, Medium, and High Barriers Compare?',
        lowTitle: 'Low Barrier',
        lowShelf: '3-6 Months',
        lowBest: 'Best for: Dry snacks, cookies, tea, granola',
        mediumTitle: 'Medium Barrier',
        mediumShelf: '6-12 Months',
        mediumBest: 'Best for: Coffee, nuts, pet treats, cereals',
        highTitle: 'High Barrier',
        highShelf: '12-24 Months',
        highBest: 'Best for: Coffee, supplements, baby food',
        ecoBest: 'Best eco-credentials',
        lowestCost: 'Lowest cost option',
        goodSust: 'Good sustainability',
        modCost: 'Moderate cost',
        maxProt: 'Maximum protection',
        premPos: 'Premium positioning'
      },
      materials: {
        title: 'Which Eco-Friendly Materials Offer the Best Barrier?',
        sub: 'Choose from eco-friendly barrier solutions:',
        thMaterial: 'Material',
        thBarrier: 'Barrier Level',
        thSustainability: 'Sustainability',
        thApp: 'Best Application',
        kraftPla: 'Kraft + PLA',
        monoPe: 'Mono-PE',
        monoPeEvoh: 'Mono-PE + EVOH',
        bioPe: 'Bio-PE',
        pcrPlastic: 'PCR Plastic',
        low: 'Low',
        medium: 'Medium',
        high: 'High',
        medHigh: 'Medium-High',
        compostable: 'Compostable',
        recyclable: 'Recyclable',
        recyclableStar: 'Recyclable*',
        bioBased: 'Bio-based',
        pcrRecycled: '30-100% recycled',
        dryTea: 'Dry goods, tea, cookies',
        snacksPet: 'Snacks, pet food',
        coffeeSupp: 'Coffee, supplements',
        orgProd: 'Organic products',
        genFood: 'General food',
        evohNote: '*EVOH layer is <5% of total structure, accepted in most recycling streams'
      },
      applications: {
        title: 'What Barrier Level Does Your Product Need?',
        lowTitle: 'Low Barrier Products',
        lowItems: ['Dried fruits & vegetables', 'Cookies & biscuits', 'Loose-leaf tea', 'Granola & muesli', 'Rice & grains'],
        medTitle: 'Medium Barrier Products',
        medItems: ['Roasted coffee beans', 'Nuts & seeds', 'Pet food & treats', 'Protein powders', 'Breakfast cereals'],
        highTitle: 'High Barrier Products',
        highItems: ['Ground coffee', 'Vitamins & supplements', 'Baby food', 'Freeze-dried products', 'Pharmaceutical powders']
      },
      order: {
        title: 'How to Get Started with Barrier Testing',
        levels: 'Barrier Levels',
        moq: 'Minimum Order',
        testing: 'Barrier Testing',
        testingNote: 'Not sure which barrier level you need? We offer free shelf-life testing to determine the optimal barrier for your product.'
      },
      riskHedge: {
        title: 'What If You\'re Not Sure Which Barrier to Choose?',
        q1: '"Not sure which barrier I need?"',
        a1: 'Free shelf-life testing to determine optimal barrier',
        q2: '"Is high-barrier still eco-friendly?"',
        a2: 'Yes, mono-PE with EVOH (<5%) is recyclable',
        q3: '"Can I get samples?"',
        a3: 'Free material samples for testing',
        q4: '"What\'s the minimum order?"',
        a4: '500 units for all barrier levels'
      },
      decisionCta: {
        title: 'How Can You Take the Next Step?',
        subtitle: 'Choose How You\'d Like to Connect',
        bookCall: 'Book a Call',
        bookCallDesc: '30-min free consultation',
        scheduleNow: 'Schedule Now',
        emailQuote: 'Email Quote',
        emailQuoteDesc: 'Get response within 24hrs',
        sendEmail: 'Send Email',
        freeTesting: 'Free Testing',
        freeTestingDesc: 'Shelf-life testing',
        requestTesting: 'Request Testing'
      },
      industryScenarios: {
        title: 'Industry Applications',
        sub: 'Different industries have specific barrier requirements. Choosing the right barrier is key to product success.',
        foodBev: 'Food & Beverage Industry',
        foodBevDesc: 'Coffee, nuts, snacks, pet food requiring precise oxygen and moisture protection.',
        foodBevShare: 'Market Share: 65%',
        supplements: 'Health & Supplements Industry',
        supplementsDesc: 'Vitamins, protein powders, and nutraceuticals requiring high barrier to preserve active ingredients.',
        supplementsShare: 'Market Share: 20%',
        infant: 'Infant Food & Pharma',
        infantDesc: 'Baby food and sensitive formulas requiring ultra-high safety barrier protection.',
        infantShare: 'Market Share: 15%',
        storyTitle: 'Customer Success Story',
        storyQuote: '“After upgrading from low to medium barrier packaging, our specialty coffee shelf life extended from 3 to 9 months, increasing customer satisfaction by 40%.”',
        storyAuthor: '— Founder, Specialty Coffee Brand'
      },
      marketData: {
        title: 'Market Data & Intelligence',
        sub: 'The barrier packaging market continues to expand. Understand key trends to make informed packaging decisions.',
        stat1Value: '$42B',
        stat1Label: 'Global Barrier Packaging Market',
        stat1Trend: '5.8% Annual Growth',
        stat2Value: '72%',
        stat2Label: 'Brands Considering Eco-Barriers',
        stat2Trend: 'Growing Demand',
        stat3Value: '85%',
        stat3Label: 'Consumers Focused on Freshness',
        stat3Trend: 'Stable Priority',
        stat4Value: '30%',
        stat4Label: 'Recyclable Barrier Material Growth',
        stat4Trend: 'Rapid Adoption',
        insightTitle: 'Market Trend Insights',
        insightText: 'Demand for sustainable barrier packaging is growing rapidly. Mono-PE + EVOH structures lead market growth due to recyclability, projected to capture 45% of the high-barrier market by 2027.'
      },
      materialComparison: {
        title: 'Material Comparison',
        sub: 'Compare key performance metrics across barrier materials to select the ideal packaging structure.',
        thType: 'Barrier Level',
        thOtr: 'OTR (Oxygen Transmission)',
        thMvtr: 'MVTR (Moisture Transmission)',
        thMat: 'Recommended Material',
        thCost: 'Relative Cost',
        low: 'Low Barrier',
        medium: 'Medium Barrier',
        high: 'High Barrier',
        guideTitle: 'Material Selection Guide',
        guideText: 'When choosing a barrier level, evaluate product sensitivity, target shelf life, and packaging budget. We provide complimentary shelf-life testing to validate your packaging choice.'
      }
    },
    faqs: [
      {
        question: "How do I know which barrier level my product needs?",
        answer: "The required barrier depends on your product's sensitivity to oxygen and moisture, and your target shelf life. We offer free shelf-life testing where we package your product in different barrier materials and monitor quality over time. Contact us for a consultation."
      },
      {
        question: "Can high-barrier packaging still be sustainable?",
        answer: "Yes! Our mono-PE high-barrier pouches with thin EVOH layer (<5%) are accepted in most recycling streams. We also offer bio-based high-barrier options. The key is matching the right barrier to your actual needs - over-engineering barriers wastes resources."
      },
      {
        question: "What is OTR and MVTR?",
        answer: "OTR (Oxygen Transmission Rate) measures how much oxygen passes through the material. MVTR (Moisture Vapor Transmission Rate) measures water vapor passage. Lower numbers mean better barrier protection. We provide test certificates for all materials."
      },
      {
        question: "Do you offer barrier testing services?",
        answer: "Yes, we provide complimentary barrier testing for qualified orders. We can test your current packaging or run comparative tests with different barrier materials to optimize your packaging choice."
      }
    ],
    links: {
      compostable: "Compostable Materials",
      compostableDesc: "Low barrier eco-friendly options",
      recyclableMonoPe: "Recyclable Mono-PE",
      recyclableMonoPeDesc: "Medium-high barrier recyclable",
      coffeeTea: "Coffee & Tea Packaging",
      coffeeTeaDesc: "High barrier applications"
    }
  },
  'zh-tw': {
    seo: {
      title: "阻隔層選項與保護等級 | Achieve Pack 環保可持續包裝",
      description: "為您的可持續包裝選擇正確的阻隔層等級。提供可回收及可降解材料的低、中、高阻隔選項，並提供免費保質期測試。",
      keywords: ['阻隔包裝', '高阻隔袋', '氧氣阻隔', '水氣阻隔', '保質期包裝', 'EVOH阻隔'],
      heroTitle: "阻隔層選項與保護等級",
      heroSubtitle: "精準選擇防氧、防潮與保香的最佳阻隔性能",
      heroImageAlt: "環保包裝阻隔保護等級對比",
      introSummary: "探索我們完整的可持續包裝阻隔方案，專為延長產品保質期同時保持極佳環保指標而設計。",
      ctaTitle: "準備好找到最適合您的阻隔方案了嗎？",
      ctaDescription: "我們的包裝專家提供免費保質期測試，確保您的產品獲得最大保護與最小環境負擔。",
      ctaButton: "獲取免費阻隔諮詢"
    },
    gallery: [
      { title: '環保阻隔技術', desc: '我們的可持續阻隔方案在保護產品的同時最大程度減少環境影響' },
      { title: '阻隔等級對比', desc: '根據您的產品需求對比低、中、高與極高阻隔選項' },
      { title: '牛皮紙阻隔選項', desc: '具有低至中等阻隔特性的紙基環保方案' },
      { title: '高阻隔牛皮紙', desc: '增強型牛皮紙，具備優異隔氧性能，顯著延長保質期' },
      { title: '透明阻隔薄膜', desc: '兼具產品展示透明度與多種阻隔等級的高效薄膜' },
      { title: '金屬質感阻隔細節', desc: '無鋁金屬質感外觀，提供極致阻隔防護' },
      { title: '應用場景展示', desc: '精準配對最佳阻隔等級與特定產品需求' },
      { title: '環保價值主張', desc: '不妥協防護性能的可持續阻隔解決方案' },
      { title: '專家專業諮詢', desc: '從我們的包裝專家獲取個性化阻隔建議' }
    ],
    sections: {
      scenarioTrigger: {
        title: '這頁適合您嗎？',
        intro: '如果您需要保護產品不受氧氣、水氣或光線影響，同時保持環保認證——您來對地方了。',
        food: '食品與飲料',
        foodDesc: '咖啡、零食、寵物食品保質期管理',
        supplements: '保健品與營養品',
        supplementsDesc: '蛋白粉、維生素與粉劑防護',
        unsure: '不確定阻隔需求',
        unsureDesc: '提供免費產品保質期測試服務'
      },
      overview: {
        title: '什麼是阻隔層選項？為什麼它們如此重要？',
        lead: '用適當的阻隔等級保護您的產品，同時兼顧可持續發展。Achieve Pack 提供可回收與可降解材料的低、中、高阻隔選項，完美匹配您產品的保質期需求。',
        levelsTitle: '阻隔防護等級分類：',
        low: '低阻隔 (3-6 個月) – 非常適合快速周轉的乾燥食品',
        medium: '中阻隔 (6-12 個月) – 適用於大多數產品的平衡防護',
        high: '高阻隔 (12-24 個月) – 為敏感產品提供極致保護'
      },
      visualGallery: {
        title: '不同阻隔等級外觀效果如何？',
        sub: '探索我們的阻隔包裝系列。點擊任意圖片放大檢視：'
      },
      barrierTypes: {
        title: '低、中、高阻隔層如何對比？',
        lowTitle: '低阻隔',
        lowShelf: '3-6 個月',
        lowBest: '最適合：乾果零食、餅乾、茶葉、麥片',
        mediumTitle: '中阻隔',
        mediumShelf: '6-12 個月',
        mediumBest: '最適合：咖啡豆、堅果、寵物零食、穀物',
        highTitle: '高阻隔',
        highShelf: '12-24 個月',
        highBest: '最適合：研磨咖啡、保健品、嬰兒食品',
        ecoBest: '最佳環保指標',
        lowestCost: '最低成本選擇',
        goodSust: '良好的可持續性',
        modCost: '適中成本',
        maxProt: '極致全面防護',
        premPos: '高端品牌定位'
      },
      materials: {
        title: '哪些環保材料能提供最佳阻隔性能？',
        sub: '選擇多款環保阻隔解決方案：',
        thMaterial: '材料結構',
        thBarrier: '阻隔等級',
        thSustainability: '可持續特性',
        thApp: '最佳應用領域',
        kraftPla: '牛皮紙 + PLA',
        monoPe: '單一 PE (Mono-PE)',
        monoPeEvoh: 'Mono-PE + EVOH',
        bioPe: '生物基 PE (Bio-PE)',
        pcrPlastic: 'PCR 再生塑料',
        low: '低阻隔',
        medium: '中阻隔',
        high: '高阻隔',
        medHigh: '中高阻隔',
        compostable: '可堆肥',
        recyclable: '可回收',
        recyclableStar: '可回收*',
        bioBased: '生物基',
        pcrRecycled: '30-100% 循環再生',
        dryTea: '乾燥食品、茶葉、餅乾',
        snacksPet: '零食、寵物食品',
        coffeeSupp: '咖啡、保健品粉劑',
        orgProd: '有機天然產品',
        genFood: '通用食品包裝',
        evohNote: '*EVOH 阻隔層佔總結構小於 5%，被絕大多數主流回收流接納'
      },
      applications: {
        title: '您的產品需要哪種阻隔等級？',
        lowTitle: '低阻隔適用產品',
        lowItems: ['乾燥水果與蔬菜', '餅乾與曲奇', '散裝茶葉', '燕麥片與麥片', '大米與穀物'],
        medTitle: '中阻隔適用產品',
        medItems: ['烘焙咖啡豆', '堅果與種子', '寵物主糧與零食', '蛋白粉與營養粉', '早餐麥片'],
        highTitle: '高阻隔適用產品',
        highItems: ['研磨咖啡粉', '維生素與膳食補充劑', '嬰兒輔食', '凍乾食品', '醫藥級粉末']
      },
      order: {
        title: '如何開始進行阻隔測試',
        levels: '阻隔防護等級',
        moq: '最低起訂量',
        testing: '阻隔性能測試',
        testingNote: '不確定您的產品需要哪種阻隔等級？我們提供免費保質期測試，幫助確定最佳阻隔方案。'
      },
      riskHedge: {
        title: '如果不確定如何選擇阻隔層怎麼辦？',
        q1: '「不確定需要哪種阻隔層？」',
        a1: '提供免費保質期測試以確定最佳阻隔層',
        q2: '「高阻隔包裝仍然環保嗎？」',
        a2: '是的，含小於5% EVOH 的單一 PE 結構完全可回收',
        q3: '「可以獲取樣品嗎？」',
        a3: '提供免費材料樣品包進行測試',
        q4: '「最低起訂量是多少？」',
        a4: '所有阻隔等級均為 500 個起訂'
      },
      decisionCta: {
        title: '如何進行下一步？',
        subtitle: '選擇您希望的聯繫方式',
        bookCall: '預約通話',
        bookCallDesc: '30分鐘免費專家諮詢',
        scheduleNow: '立即預約',
        emailQuote: '郵件報價',
        emailQuoteDesc: '24小時內獲得回覆',
        sendEmail: '發送郵件',
        freeTesting: '免費測試',
        freeTestingDesc: '保質期與阻隔測試',
        requestTesting: '申請測試'
      },
      industryScenarios: {
        title: '行業應用方案',
        sub: '不同行業對阻隔層有特定要求，選擇合適的阻隔層是產品成功的關鍵。',
        foodBev: '食品與飲料行業',
        foodBevDesc: '咖啡、堅果、零食、寵物食品等，需要精準防氧防潮。',
        foodBevShare: '市場份額：65%',
        supplements: '保健品與營養品行業',
        supplementsDesc: '維生素、蛋白粉、營養補充劑，需要高阻隔以保護活性成分。',
        supplementsShare: '市場份額：20%',
        infant: '嬰兒食品與醫藥',
        infantDesc: '嬰幼兒食品及高敏感配方，需要極高安全等級的阻隔保護。',
        infantShare: '市場份額：15%',
        storyTitle: '客戶成功案例',
        storyQuote: '「從低阻隔升級至中阻隔包裝後，我們的精品咖啡保質期從3個月延長至9個月，客戶滿意度提升了40%。」',
        storyAuthor: '— 精品咖啡品牌創始人'
      },
      marketData: {
        title: '市場數據與情報',
        sub: '阻隔包裝市場持續增長，瞭解市場趨勢有助於做出更佳的包裝決策。',
        stat1Value: '$420億',
        stat1Label: '全球阻隔包裝市場規模',
        stat1Trend: '年增長 5.8%',
        stat2Value: '72%',
        stat2Label: '品牌優先考慮環保阻隔',
        stat2Trend: '需求強勁',
        stat3Value: '85%',
        stat3Label: '消費者關注產品新鮮度',
        stat3Trend: '穩定優先',
        stat4Value: '30%',
        stat4Label: '可回收阻隔材料增長率',
        stat4Trend: '快速普及',
        insightTitle: '市場趨勢洞察',
        insightText: '可持續阻隔包裝需求快速增長。Mono-PE + EVOH 結構因可回收性成為市場新寵，預計到2027年將佔據高阻隔市場45%的份額。'
      },
      materialComparison: {
        title: '材料性能對比',
        sub: '對比不同阻隔材料的核心性能指標，為您的產品選擇最佳結構。',
        thType: '阻隔等級',
        thOtr: 'OTR 透氧率',
        thMvtr: 'MVTR 透濕率',
        thMat: '推薦材料結構',
        thCost: '相對成本',
        low: '低阻隔',
        medium: '中阻隔',
        high: '高阻隔',
        guideTitle: '材料選擇指南',
        guideText: '選擇阻隔等級時，請綜合考量產品特性、目標保質期及預算。我們提供免費保質期測試服務，幫助您確認最佳阻隔方案。'
      }
    },
    faqs: [
      {
        question: "我如何知道我的產品需要哪種阻隔等級？",
        answer: "所需的阻隔等級取決於您的產品對氧氣和水氣的敏感度以及目標保質期。我們提供免費的保質期測試，將您的產品裝入不同阻隔材料中並持續監測品質。歡迎聯繫我們諮詢。"
      },
      {
        question: "高阻隔包裝是否仍然可以保持環保可持續？",
        answer: "是的！我們的單一 PE (Mono-PE) 高阻隔袋配備薄層 EVOH (<5%)，可被大多數主流塑料回收流接納。我們還提供生物基高阻隔選項。關鍵是匹配適合實際需求的阻隔層，過度設計只會浪費資源。"
      },
      {
        question: "什麼是 OTR 和 MVTR？",
        answer: "OTR (透氧率) 測量 24 小時內穿過材料的氧氣量。MVTR (透濕率) 測量水氣透過量。數值越低，代表阻隔防護性能越強。我們為所有材料提供專業測試證書。"
      },
      {
        question: "您們提供阻隔測試服務嗎？",
        answer: "是的，我們為符合條件的訂單提供免費阻隔測試。我們可以測試您目前的包裝，或使用不同阻隔材料進行對比測試，以優化您的包裝選擇。"
      }
    ],
    links: {
      compostable: "可堆肥環保材料",
      compostableDesc: "低阻隔綠色可堆肥選項",
      recyclableMonoPe: "可回收 Mono-PE",
      recyclableMonoPeDesc: "中高阻隔可回收材料",
      coffeeTea: "咖啡與茶葉包裝",
      coffeeTeaDesc: "高阻隔專業包裝應用"
    }
  },
  fr: {
    seo: {
      title: "Options de Barrière et Niveaux de Protection | Achieve Pack Sachet Éco",
      description: "Choisissez le bon niveau de barrière pour vos emballages durables. Options faible, moyenne et haute barrière en matériaux recyclables et compostables. Tests de conservation gratuits.",
      keywords: ['emballage barrière', 'sachets haute barrière', 'barrière oxygène', 'barrière humidité', 'durée de conservation', 'barrière EVOH'],
      heroTitle: "Options de Barrière et Niveaux de Protection",
      heroSubtitle: "Sélectionnez la protection optimale contre l'oxygène, l'humidité et les arômes",
      heroImageAlt: "Niveaux de protection barrière pour emballages écologiques",
      introSummary: "Découvrez notre gamme complète d'emballages durables conçus pour prolonger la durée de conservation tout en préservant l'environnement.",
      ctaTitle: "Prêt à trouver la solution barrière idéale ?",
      ctaDescription: "Nos experts réalisent des tests de conservation gratuits pour offrir une protection maximale avec un impact environnemental minimal.",
      ctaButton: "Obtenir une consultation gratuite"
    },
    gallery: [
      { title: 'Technologie Barrière Écologique', desc: 'Nos solutions durables protègent les produits tout en réduisant l\'impact environnemental' },
      { title: 'Comparaison des Niveaux', desc: 'Comparez les options faible, moyenne, haute et maximale selon vos besoins' },
      { title: 'Options Papier Kraft Barrière', desc: 'Solutions à base de papier avec propriétés barrières faibles à moyennes' },
      { title: 'Kraft Haute Barrière', desc: 'Papier kraft renforcé avec barrière à l\'oxygène supérieure pour une longue conservation' },
      { title: 'Films Barrières Transparents', desc: 'Emballages clairs offrant divers niveaux de barrière et visibilité optimale' },
      { title: 'Détail Barrière Métallique', desc: 'Apparence métallique sans aluminium avec une protection barrière maximale' },
      { title: 'Scénarios d\'Application', desc: 'Associez le bon niveau de barrière aux exigences spécifiques de votre produit' },
      { title: 'Proposition de Valeur Éco', desc: 'Solutions barrières durables sans compromis sur la protection' },
      { title: 'Consultation d\'Experts', desc: 'Recommandations personnalisées de nos spécialistes en emballage' }
    ],
    sections: {
      scenarioTrigger: {
        title: 'Cette page est-elle faite pour vous ?',
        intro: 'Si vous devez protéger vos produits de l\'oxygène, de l\'humidité ou de la lumière tout en maintenant vos engagements écologiques, vous êtes au bon endroit.',
        food: 'Alimentation & Boissons',
        foodDesc: 'Café, snacks, aliments pour animaux',
        supplements: 'Compléments Alimentaires',
        supplementsDesc: 'Protéines, vitamines, poudres',
        unsure: 'Incertain du niveau ?',
        unsureDesc: 'Tests de conservation gratuits disponibles'
      },
      overview: {
        title: 'Que sont les options de barrière et pourquoi sont-elles cruciales ?',
        lead: 'Protégez vos produits avec le bon niveau de barrière tout en restant écoresponsable. Achieve Pack propose des options faible, moyenne et haute barrière en matériaux recyclables et compostables.',
        levelsTitle: 'Niveaux de protection barrière :',
        low: 'Faible Barrière (3-6 mois) – Idéal pour produits secs à rotation rapide',
        medium: 'Moyenne Barrière (6-12 mois) – Protection équilibrée pour la plupart des produits',
        high: 'Haute Barrière (12-24 mois) – Protection maximale pour produits sensibles'
      },
      visualGallery: {
        title: 'À quoi ressemblent les différents niveaux de barrière ?',
        sub: 'Explorez notre gamme de sachets barrières. Cliquez sur une image pour l\'agrandir :'
      },
      barrierTypes: {
        title: 'Comparaison des barrières faible, moyenne et haute',
        lowTitle: 'Faible Barrière',
        lowShelf: '3-6 Mois',
        lowBest: 'Idéal pour : Snacks secs, biscuits, thé, granola',
        mediumTitle: 'Moyenne Barrière',
        mediumShelf: '6-12 Mois',
        mediumBest: 'Idéal pour : Café moulu, noix, friandises animaux, céréales',
        highTitle: 'Haute Barrière',
        highShelf: '12-24 Mois',
        highBest: 'Idéal pour : Café, compléments, aliments bébé',
        ecoBest: 'Excellents critères éco',
        lowestCost: 'Option la plus économique',
        goodSust: 'Bonne durabilité',
        modCost: 'Coût modéré',
        maxProt: 'Protection maximale',
        premPos: 'Positionnement premium'
      },
      materials: {
        title: 'Quels matériaux écologiques offrent la meilleure barrière ?',
        sub: 'Choisissez parmi nos solutions barrières écoresponsables :',
        thMaterial: 'Matériau',
        thBarrier: 'Niveau Barrière',
        thSustainability: 'Durabilité',
        thApp: 'Meilleure Application',
        kraftPla: 'Kraft + PLA',
        monoPe: 'Mono-PE',
        monoPeEvoh: 'Mono-PE + EVOH',
        bioPe: 'Bio-PE',
        pcrPlastic: 'Plastique PCR',
        low: 'Faible',
        medium: 'Moyenne',
        high: 'Haute',
        medHigh: 'Moyenne-Haute',
        compostable: 'Compostable',
        recyclable: 'Recyclable',
        recyclableStar: 'Recyclable*',
        bioBased: 'Biosourcé',
        pcrRecycled: '30-100% recyclé',
        dryTea: 'Produits secs, thé, biscuits',
        snacksPet: 'Snacks, nourriture animale',
        coffeeSupp: 'Café, compléments',
        orgProd: 'Produits biologiques',
        genFood: 'Alimentation générale',
        evohNote: '*La couche EVOH représente <5% de la structure totale, acceptée dans les filières de recyclage'
      },
      applications: {
        title: 'Quel niveau de barrière faut-il à votre produit ?',
        lowTitle: 'Produits à Faible Barrière',
        lowItems: ['Fruits & légumes séchés', 'Biscuits & cookies', 'Thé en vrac', 'Granola & muesli', 'Riz & céréales'],
        medTitle: 'Produits à Moyenne Barrière',
        medItems: ['Grains de café torréfiés', 'Noix & graines', 'Aliments pour animaux', 'Protéines en poudre', 'Céréales du petit-déjeuner'],
        highTitle: 'Produits à Haute Barrière',
        highItems: ['Café moulu', 'Vitamines & compléments', 'Aliments pour bébé', 'Produits lyophilisés', 'Poudres pharmaceutiques']
      },
      order: {
        title: 'Comment démarrer les tests de barrière',
        levels: 'Niveaux de Barrière',
        moq: 'Commande Minimum',
        testing: 'Tests Barrière',
        testingNote: 'Vous ne savez pas quel niveau choisir ? Nous offrons des tests de conservation gratuits pour déterminer la barrière optimale.'
      },
      riskHedge: {
        title: 'Incertain du choix de votre barrière ?',
        q1: '« Pas sûr du niveau nécessaire ? »',
        a1: 'Tests de conservation gratuits pour déterminer la barrière idéale',
        q2: '« La haute barrière est-elle écologique ? »',
        a2: 'Oui, la structure mono-PE avec EVOH (<5%) est entièrement recyclable',
        q3: '« Puis-je obtenir des échantillons ? »',
        a3: 'Échantillons de matériaux gratuits pour vos tests',
        q4: '« Quelle est la quantité minimale ? »',
        a4: '500 unités seulement pour tous les niveaux de barrière'
      },
      decisionCta: {
        title: 'Comment passer à l\'étape suivante ?',
        subtitle: 'Choisissez votre moyen de contact',
        bookCall: 'Réserver un appel',
        bookCallDesc: 'Consultation gratuite de 30 min',
        scheduleNow: 'Prendre Rendez-vous',
        emailQuote: 'Devis par Email',
        emailQuoteDesc: 'Réponse sous 24h',
        sendEmail: 'Envoyer un Email',
        freeTesting: 'Tests Gratuits',
        freeTestingDesc: 'Tests de conservation & barrière',
        requestTesting: 'Demander un Test'
      },
      industryScenarios: {
        title: 'Applications Industrielles',
        sub: 'Chaque secteur possède des exigences barrières précises. Choisir la bonne barrière est la clé du succès.',
        foodBev: 'Alimentation & Boissons',
        foodBevDesc: 'Café, noix, snacks et nourriture pour animaux nécessitant une protection optimale contre l\'oxygène et l\'humidité.',
        foodBevShare: 'Part de marché : 65%',
        supplements: 'Compléments & Santé',
        supplementsDesc: 'Vitamines, poudres de protéine et nutraceutiques exigeant une haute barrière pour préserver les actifs.',
        supplementsShare: 'Part de marché : 20%',
        infant: 'Alimentation Infantile & Santé',
        infantDesc: 'Aliments bébé et formules sensibles exigeant une sécurité barrière maximale.',
        infantShare: 'Part de marché : 15%',
        storyTitle: 'Témoignage Client',
        storyQuote: '« Après être passé d\'une barrière faible à moyenne, la conservation de nos cafés de spécialité est passée de 3 à 9 mois, augmentant la satisfaction client de 40%. »',
        storyAuthor: '— Fondateur d\'une marque de café spécialisé'
      },
      marketData: {
        title: 'Données & Intelligence de Marché',
        sub: 'Le marché de l\'emballage barrière connaît une forte croissance. Comprenez les tendances clés pour mieux choisir.',
        stat1Value: '42 Mds$',
        stat1Label: 'Marché Mondial Emballage Barrière',
        stat1Trend: 'Croissance annuelle de 5,8%',
        stat2Value: '72%',
        stat2Label: 'Marques visant des barrières éco',
        stat2Trend: 'Demande en hausse',
        stat3Value: '85%',
        stat3Label: 'Consommateurs attentifs à la fraîcheur',
        stat3Trend: 'Priorité stable',
        stat4Value: '30%',
        stat4Label: 'Croissance des matériaux recyclables',
        stat4Trend: 'Adoption rapide',
        insightTitle: 'Tendances du Marché',
        insightText: 'La demande d\'emballages barrières durables augmente rapidement. La structure Mono-PE + EVOH mène le marché grâce à sa recyclabilité et devrait représenter 45% du marché haute barrière d\'ici 2027.'
      },
      materialComparison: {
        title: 'Comparaison des Matériaux',
        sub: 'Comparez les performances des différents matériaux barrières pour sélectionner la structure idéale.',
        thType: 'Niveau Barrière',
        thOtr: 'OTR (Perméabilité Oxygène)',
        thMvtr: 'MVTR (Perméabilité Humidité)',
        thMat: 'Matériau Recommandé',
        thCost: 'Coût Relatif',
        low: 'Faible Barrière',
        medium: 'Moyenne Barrière',
        high: 'Haute Barrière',
        guideTitle: 'Guide de Sélection des Matériaux',
        guideText: 'Évaluez la sensibilité du produit, la durée de conservation visée et le budget. Nous offrons des tests de conservation gratuits pour valider votre emballage.'
      }
    },
    faqs: [
      {
        question: "Comment savoir quel niveau de barrière convient à mon produit ?",
        answer: "Le niveau requis dépend de la sensibilité de votre produit à l'oxygène/humidité et de la durée de conservation visée. Nous proposons des tests de conservation gratuits."
      },
      {
        question: "Un emballage haute barrière peut-il être écologique ?",
        answer: "Oui ! Nos sachets haute barrière mono-PE avec une fine couche d'EVOH (<5%) sont acceptés dans la plupart des filières de recyclage du plastique."
      },
      {
        question: "Que signifient OTR et MVTR ?",
        answer: "L'OTR (Taux de transmission de l'oxygène) et le MVTR (Taux de transmission de la vapeur d'eau) mesurent la perméabilité du matériau. Plus le chiffre est bas, meilleure est la barrière."
      },
      {
        question: "Proposez-vous des services de tests de barrière ?",
        answer: "Oui, nous offrons des tests de barrière gratuits pour les commandes qualifiées afin de valider et d'optimiser votre emballage."
      }
    ],
    links: {
      compostable: "Matériaux Compostables",
      compostableDesc: "Options écologiques faible barrière",
      recyclableMonoPe: "Mono-PE Recyclable",
      recyclableMonoPeDesc: "Recyclable moyenne-haute barrière",
      coffeeTea: "Emballages Café & Thé",
      coffeeTeaDesc: "Applications haute barrière"
    }
  },
  es: {
    seo: {
      title: "Opciones de Barrera y Niveles de Protección | Achieve Pack",
      description: "Elija el nivel de barrera ideal para sus empaques sostenibles. Opciones de barrera baja, media y alta en materiales reciclables y compostables. Pruebas de vida útil gratuitas.",
      keywords: ['empaque de barrera', 'bolsas de alta barrera', 'barrera al oxígeno', 'barrera a la humedad', 'vida útil empaque', 'barrera EVOH'],
      heroTitle: "Opciones de Barrera y Niveles de Protección",
      heroSubtitle: "Seleccione la protección óptima para conservar oxígeno, humedad y aromas",
      heroImageAlt: "Niveles de protección de barrera para empaques ecológicos",
      introSummary: "Descubra nuestra gama completa de opciones de barrera para empaques sostenibles, diseñadas para extender la vida útil y cuidar el planeta.",
      ctaTitle: "¿Listo para encontrar su solución de barrera ideal?",
      ctaDescription: "Nuestros expertos realizan pruebas gratuitas de vida útil para garantizar la máxima protección con el menor impacto ambiental.",
      ctaButton: "Obtener Consulta Gratuita de Barrera"
    },
    gallery: [
      { title: 'Tecnología de Barrera Ecológica', desc: 'Nuestras soluciones sostenibles protegen sus productos minimizando el impacto ambiental' },
      { title: 'Comparativa de Niveles de Barrera', desc: 'Compare opciones de barrera Baja, Media, Alta y Máxima según sus necesidades' },
      { title: 'Opciones de Papel Kraft con Barrera', desc: 'Soluciones a base de papel con propiedades de barrera baja a media' },
      { title: 'Kraft de Alta Barrera', desc: 'Papel kraft reforzado con barrera al oxígeno superior para mayor vida útil' },
      { title: 'Películas de Barrera Transparentes', desc: 'Empaques transparentes con diversos niveles de barrera y alta visibilidad' },
      { title: 'Detalle de Barrera Metalizada', desc: 'Apariencia metálica sin aluminio con la máxima protección de barrera' },
      { title: 'Escenarios de Aplicación', desc: 'Adapte el nivel de barrera exacto a los requisitos específicos de su producto' },
      { title: 'Propuesta de Valor Eco', desc: 'Soluciones de barrera sostenibles sin comprometer la protección' },
      { title: 'Consulta con Especialistas', desc: 'Obtenga recomendaciones personalizadas de nuestros expertos en empaques' }
    ],
    sections: {
      scenarioTrigger: {
        title: '¿Es esta página para usted?',
        intro: 'Si necesita proteger su producto del oxígeno, la humedad o la luz manteniendo credenciales ecológicas, está en el lugar correcto.',
        food: 'Alimentos y Bebidas',
        foodDesc: 'Café, snacks, vida útil de alimentos para mascotas',
        supplements: 'Suplementos',
        supplementsDesc: 'Proteína, vitaminas, protección de polvos',
        unsure: '¿Dudas sobre la barrera?',
        unsureDesc: 'Pruebas de vida útil gratuitas disponibles'
      },
      overview: {
        title: '¿Qué son las opciones de barrera y por qué importan?',
        lead: 'Proteja sus productos con el nivel de barrera adecuado mientras mantiene su compromiso sostenible. Achieve Pack ofrece barrera baja, media y alta en materiales reciclables y compostables.',
        levelsTitle: 'Niveles de protección de barrera:',
        low: 'Barrera Baja (3-6 meses) – Ideal para productos secos de rápida rotación',
        medium: 'Barrera Media (6-12 meses) – Protección equilibrada para la mayoría de productos',
        high: 'Barrera Alta (12-24 meses) – Máxima protección para productos sensibles'
      },
      visualGallery: {
        title: '¿Cómo se ven los diferentes niveles de barrera?',
        sub: 'Explore nuestra línea de empaques de barrera. Haga clic en cualquier imagen para ampliar:'
      },
      barrierTypes: {
        title: '¿Cómo se comparan las barreras baja, media y alta?',
        lowTitle: 'Barrera Baja',
        lowShelf: '3-6 Meses',
        lowBest: 'Ideal para: Snacks secos, galletas, té, granola',
        mediumTitle: 'Barrera Media',
        mediumShelf: '6-12 Meses',
        mediumBest: 'Ideal para: Café, nueces, premios para mascotas, cereales',
        highTitle: 'Barrera Alta',
        highShelf: '12-24 Meses',
        highBest: 'Ideal para: Café molido, suplementos, comida de bebé',
        ecoBest: 'Mejores credenciales eco',
        lowestCost: 'Opción de menor costo',
        goodSust: 'Buena sostenibilidad',
        modCost: 'Costo moderado',
        maxProt: 'Máxima protección',
        premPos: 'Posicionamiento premium'
      },
      materials: {
        title: '¿Qué materiales ecológicos ofrecen la mejor barrera?',
        sub: 'Elija entre nuestras soluciones ecológicas de barrera:',
        thMaterial: 'Material',
        thBarrier: 'Nivel de Barrera',
        thSustainability: 'Sostenibilidad',
        thApp: 'Mejor Aplicación',
        kraftPla: 'Kraft + PLA',
        monoPe: 'Mono-PE',
        monoPeEvoh: 'Mono-PE + EVOH',
        bioPe: 'Bio-PE',
        pcrPlastic: 'Plástico PCR',
        low: 'Baja',
        medium: 'Media',
        high: 'Alta',
        medHigh: 'Media-Alta',
        compostable: 'Compostable',
        recyclable: 'Reciclable',
        recyclableStar: 'Reciclable*',
        bioBased: 'De origen vegetal',
        pcrRecycled: '30-100% reciclado',
        dryTea: 'Productos secos, té, galletas',
        snacksPet: 'Snacks, alimento de mascotas',
        coffeeSupp: 'Café, suplementos',
        orgProd: 'Productos orgánicos',
        genFood: 'Alimentos generales',
        evohNote: '*La capa EVOH es <5% de la estructura total, aceptada en la mayoría de flujos de reciclaje'
      },
      applications: {
        title: '¿Qué nivel de barrera requiere su producto?',
        lowTitle: 'Productos de Barrera Baja',
        lowItems: ['Frutas y verduras deshidratadas', 'Galletas', 'Té a granel', 'Granola y muesli', 'Arroz y granos'],
        medTitle: 'Productos de Barrera Media',
        medItems: ['Café tostado en grano', 'Nueces y semillas', 'Alimento y premios para mascotas', 'Proteína en polvo', 'Cereales de desayuno'],
        highTitle: 'Productos de Barrera Alta',
        highItems: ['Café molido', 'Vitaminas y suplementos', 'Comida para bebés', 'Productos liofilizados', 'Polvos farmacéuticos']
      },
      order: {
        title: 'Cómo comenzar con las pruebas de barrera',
        levels: 'Niveles de Barrera',
        moq: 'Pedido Mínimo',
        testing: 'Pruebas de Barrera',
        testingNote: '¿No está seguro del nivel de barrera necesario? Ofrecemos pruebas gratuitas de vida útil para determinar la barrera óptima.'
      },
      riskHedge: {
        title: '¿Qué pasa si no está seguro de cuál barrera elegir?',
        q1: '«¿No estoy seguro de qué barrera necesito?»',
        a1: 'Prueba de vida útil gratuita para determinar la barrera óptima',
        q2: '«¿La alta barrera sigue siendo ecológica?»',
        a2: 'Sí, la estructura mono-PE con EVOH (<5%) es reciclable',
        q3: '«¿Puedo obtener muestras?»',
        a3: 'Muestras de material gratuitas para sus pruebas',
        q4: '«¿Cuál es el pedido mínimo?»',
        a4: 'Solo 500 unidades para todos los niveles de barrera'
      },
      decisionCta: {
        title: '¿Cómo dar el siguiente paso?',
        subtitle: 'Elija su método de contacto preferido',
        bookCall: 'Reservar una Llamada',
        bookCallDesc: 'Consulta gratuita de 30 min',
        scheduleNow: 'Agendar Ahora',
        emailQuote: 'Cotización por Email',
        emailQuoteDesc: 'Respuesta en 24h',
        sendEmail: 'Enviar Email',
        freeTesting: 'Pruebas Gratuitas',
        freeTestingDesc: 'Prueba de vida útil y barrera',
        requestTesting: 'Solicitar Prueba'
      },
      industryScenarios: {
        title: 'Aplicaciones por Industria',
        sub: 'Cada industria tiene requisitos de barrera específicos. Elegir la barrera correcta es la clave del éxito.',
        foodBev: 'Industria de Alimentos y Bebidas',
        foodBevDesc: 'Café, nueces, snacks y comida para mascotas que requieren protección precisa contra oxígeno y humedad.',
        foodBevShare: 'Cuota de mercado: 65%',
        supplements: 'Salud y Suplementos',
        supplementsDesc: 'Vitaminas, proteínas y nutracéuticos que requieren alta barrera para preservar ingredientes activos.',
        supplementsShare: 'Cuota de mercado: 20%',
        infant: 'Alimentos Infantiles y Salud',
        infantDesc: 'Alimentos para bebés y fórmulas sensibles que requieren barrera de máxima seguridad.',
        infantShare: 'Cuota de mercado: 15%',
        storyTitle: 'Historia de Éxito',
        storyQuote: '«Tras cambiar de barrera baja a media, la vida útil de nuestro café de especialidad aumentó de 3 a 9 meses, incrementando la satisfacción del cliente un 40%.»',
        storyAuthor: '— Fundador de Marca de Café de Especialidad'
      },
      marketData: {
        title: 'Datos e Inteligencia de Mercado',
        sub: 'El mercado de empaques de barrera continúa creciendo. Conozca las tendencias clave para decidir mejor.',
        stat1Value: '$42B',
        stat1Label: 'Mercado Global de Empaques de Barrera',
        stat1Trend: 'Crecimiento anual del 5.8%',
        stat2Value: '72%',
        stat2Label: 'Marcas evaluando barreras ecológicas',
        stat2Trend: 'Demanda en aumento',
        stat3Value: '85%',
        stat3Label: 'Consumidores enfocados en la frescura',
        stat3Trend: 'Prioridad constante',
        stat4Value: '30%',
        stat4Label: 'Crecimiento de materiales reciclables',
        stat4Trend: 'Rápida adopción',
        insightTitle: 'Perspectiva del Mercado',
        insightText: 'La demanda de empaques de barrera sostenibles crece rápidamente. Las estructuras Mono-PE + EVOH lideran por su reciclabilidad y se proyecta que alcancen el 45% del mercado de alta barrera para 2027.'
      },
      materialComparison: {
        title: 'Comparativa de Materiales',
        sub: 'Compare las métricas de rendimiento clave entre materiales para seleccionar la estructura ideal.',
        thType: 'Nivel de Barrera',
        thOtr: 'OTR (Transmisión de Oxígeno)',
        thMvtr: 'MVTR (Transmisión de Humedad)',
        thMat: 'Material Recomendado',
        thCost: 'Costo Relativo',
        low: 'Barrera Baja',
        medium: 'Barrera Media',
        high: 'Barrera Alta',
        guideTitle: 'Guía de Selección de Materiales',
        guideText: 'Evalúe la sensibilidad del producto, vida útil esperada y presupuesto. Ofrecemos pruebas gratuitas de vida útil para validar su empaque.'
      }
    },
    faqs: [
      {
        question: "¿Cómo sé qué nivel de barrera necesita mi producto?",
        answer: "El nivel requerido depende de la sensibilidad del producto al oxígeno/humedad y de la vida útil objetivo. Ofrecemos pruebas gratuitas de vida útil."
      },
      {
        question: "¿El empaque de alta barrera puede ser sostenible?",
        answer: "¡Sí! Nuestras bolsas de alta barrera mono-PE con fina capa de EVOH (<5%) son reciclables en la mayoría de plantas."
      },
      {
        question: "¿Qué son OTR y MVTR?",
        answer: "OTR (Tasa de Transmisión de Oxígeno) y MVTR (Tasa de Transmisión de Vapor de Agua) miden la permeabilidad. Cuanto menor sea el número, mayor es la protección."
      },
      {
        question: "¿Ofrecen servicios de prueba de barrera?",
        answer: "Sí, ofrecemos pruebas gratuitas de barrera para pedidos calificados a fin de optimizar su empaque."
      }
    ],
    links: {
      compostable: "Materiales Compostables",
      compostableDesc: "Opciones ecológicas de barrera baja",
      recyclableMonoPe: "Mono-PE Reciclable",
      recyclableMonoPeDesc: "Reciclable de barrera media-alta",
      coffeeTea: "Empaques para Café y Té",
      coffeeTeaDesc: "Aplicaciones de alta barrera"
    }
  }
}

const barrierGalleryImages = [
  '/imgs/barrier/ads/a_achieve_pack_barrier_kv_updated_green_definition_6833995.webp',
  '/imgs/barrier/ads/a_barrier_levels_7395220.webp',
  '/imgs/barrier/ads/a_kraft_levels_1_2_3604187.webp',
  '/imgs/barrier/ads/a_kraft_high_max_4456348.webp',
  '/imgs/barrier/ads/a_transparent_options_3839456.webp',
  '/imgs/barrier/ads/a_metallic_barrier_closeup_9656118.webp',
  '/imgs/barrier/ads/a_application_scenarios_2234685.webp',
  '/imgs/barrier/ads/a_value_barrier_eco_4905901.webp',
  '/imgs/barrier/ads/a_closing_consultation_6756895.webp',
]

const BarrierOptionsPage: React.FC = () => {
  const { i18n } = useTranslation()
  const rawLang = (i18n.language || 'en').toLowerCase()
  const currentLang = (rawLang === 'zh-tw' || rawLang === 'zh-hant' || rawLang === 'zh') ? 'zh-tw' : (rawLang === 'fr' ? 'fr' : (rawLang === 'es' ? 'es' : 'en'))
  const tLocal = localTranslations[currentLang] || localTranslations.en

  const { openCalendly } = useCalendly()
  const [galleryEnlarged, setGalleryEnlarged] = useState<{ src: string; index: number } | null>(null)
  
  const barrierGallery = barrierGalleryImages.map((src, index) => ({
    src,
    title: tLocal.gallery[index]?.title || '',
    desc: tLocal.gallery[index]?.desc || ''
  }))

  const navigateGallery = (direction: 'prev' | 'next') => {
    if (!galleryEnlarged) return
    let newIndex = direction === 'prev' ? galleryEnlarged.index - 1 : galleryEnlarged.index + 1
    if (newIndex < 0) newIndex = barrierGallery.length - 1
    if (newIndex >= barrierGallery.length) newIndex = 0
    setGalleryEnlarged({ src: barrierGallery[newIndex].src, index: newIndex })
  }
  
  const sections = [
    {
      id: 'scenario-trigger',
      title: tLocal.sections.scenarioTrigger.title,
      icon: <Target className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg border border-blue-200">
          <p className="text-lg font-medium text-neutral-900 mb-4">
            {tLocal.sections.scenarioTrigger.intro}
          </p>
          <div className="grid md:grid-cols-3 gap-4 mt-4">
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h4 className="font-semibold text-neutral-900">{tLocal.sections.scenarioTrigger.food}</h4>
              <p className="text-sm text-neutral-600 mt-1">{tLocal.sections.scenarioTrigger.foodDesc}</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h4 className="font-semibold text-neutral-900">{tLocal.sections.scenarioTrigger.supplements}</h4>
              <p className="text-sm text-neutral-600 mt-1">{tLocal.sections.scenarioTrigger.supplementsDesc}</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h4 className="font-semibold text-neutral-900">{tLocal.sections.scenarioTrigger.unsure}</h4>
              <p className="text-sm text-neutral-600 mt-1">{tLocal.sections.scenarioTrigger.unsureDesc}</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'overview',
      title: tLocal.sections.overview.title,
      icon: <Shield className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>{tLocal.sections.overview.lead}</p>
          <h3 className="text-lg font-semibold text-neutral-900 mt-6">{tLocal.sections.overview.levelsTitle}</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>{tLocal.sections.overview.low}</li>
            <li>{tLocal.sections.overview.medium}</li>
            <li>{tLocal.sections.overview.high}</li>
          </ul>
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
            {barrierGallery.map((img, index) => (
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
      id: 'barrier-types',
      title: tLocal.sections.barrierTypes.title,
      icon: <Thermometer className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <div className="grid md:grid-cols-3 gap-4 mt-4">
            <div className="bg-green-50 p-4 rounded-lg border-2 border-green-200">
              <h4 className="font-semibold text-green-800 mb-2">{tLocal.sections.barrierTypes.lowTitle}</h4>
              <div className="text-2xl font-bold text-green-600 mb-2">{tLocal.sections.barrierTypes.lowShelf}</div>
              <ul className="text-sm space-y-1">
                <li>• OTR: 50-100 cc/m²/day</li>
                <li>• MVTR: 10-20 g/m²/day</li>
                <li>• {tLocal.sections.barrierTypes.ecoBest}</li>
                <li>• {tLocal.sections.barrierTypes.lowestCost}</li>
              </ul>
              <p className="text-xs text-green-700 mt-3">{tLocal.sections.barrierTypes.lowBest}</p>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg border-2 border-blue-200">
              <h4 className="font-semibold text-blue-800 mb-2">{tLocal.sections.barrierTypes.mediumTitle}</h4>
              <div className="text-2xl font-bold text-blue-600 mb-2">{tLocal.sections.barrierTypes.mediumShelf}</div>
              <ul className="text-sm space-y-1">
                <li>• OTR: 5-20 cc/m²/day</li>
                <li>• MVTR: 2-5 g/m²/day</li>
                <li>• {tLocal.sections.barrierTypes.goodSust}</li>
                <li>• {tLocal.sections.barrierTypes.modCost}</li>
              </ul>
              <p className="text-xs text-blue-700 mt-3">{tLocal.sections.barrierTypes.mediumBest}</p>
            </div>
            <div className="bg-primary-50 p-4 rounded-lg border-2 border-primary-200">
              <h4 className="font-semibold text-primary-800 mb-2">{tLocal.sections.barrierTypes.highTitle}</h4>
              <div className="text-2xl font-bold text-primary-600 mb-2">{tLocal.sections.barrierTypes.highShelf}</div>
              <ul className="text-sm space-y-1">
                <li>• OTR: {'<'} 1 cc/m²/day</li>
                <li>• MVTR: {'<'} 1 g/m²/day</li>
                <li>• {tLocal.sections.barrierTypes.maxProt}</li>
                <li>• {tLocal.sections.barrierTypes.premPos}</li>
              </ul>
              <p className="text-xs text-primary-700 mt-3">{tLocal.sections.barrierTypes.highBest}</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'materials',
      title: tLocal.sections.materials.title,
      icon: <Package className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>{tLocal.sections.materials.sub}</p>
          
          <div className="overflow-x-auto mt-4">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-neutral-100">
                  <th className="text-left p-3 border">{tLocal.sections.materials.thMaterial}</th>
                  <th className="text-left p-3 border">{tLocal.sections.materials.thBarrier}</th>
                  <th className="text-left p-3 border">{tLocal.sections.materials.thSustainability}</th>
                  <th className="text-left p-3 border">{tLocal.sections.materials.thApp}</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-3 border font-medium">{tLocal.sections.materials.kraftPla}</td>
                  <td className="p-3 border">{tLocal.sections.materials.low}</td>
                  <td className="p-3 border text-green-600">{tLocal.sections.materials.compostable}</td>
                  <td className="p-3 border">{tLocal.sections.materials.dryTea}</td>
                </tr>
                <tr>
                  <td className="p-3 border font-medium">{tLocal.sections.materials.monoPe}</td>
                  <td className="p-3 border">{tLocal.sections.materials.medium}</td>
                  <td className="p-3 border text-blue-600">{tLocal.sections.materials.recyclable}</td>
                  <td className="p-3 border">{tLocal.sections.materials.snacksPet}</td>
                </tr>
                <tr>
                  <td className="p-3 border font-medium">{tLocal.sections.materials.monoPeEvoh}</td>
                  <td className="p-3 border">{tLocal.sections.materials.high}</td>
                  <td className="p-3 border text-blue-600">{tLocal.sections.materials.recyclableStar}</td>
                  <td className="p-3 border">{tLocal.sections.materials.coffeeSupp}</td>
                </tr>
                <tr>
                  <td className="p-3 border font-medium">{tLocal.sections.materials.bioPe}</td>
                  <td className="p-3 border">{tLocal.sections.materials.medium}</td>
                  <td className="p-3 border text-green-600">{tLocal.sections.materials.bioBased}</td>
                  <td className="p-3 border">{tLocal.sections.materials.orgProd}</td>
                </tr>
                <tr>
                  <td className="p-3 border font-medium">{tLocal.sections.materials.pcrPlastic}</td>
                  <td className="p-3 border">{tLocal.sections.materials.medHigh}</td>
                  <td className="p-3 border text-blue-600">{tLocal.sections.materials.pcrRecycled}</td>
                  <td className="p-3 border">{tLocal.sections.materials.genFood}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-neutral-500">{tLocal.sections.materials.evohNote}</p>
        </div>
      )
    },
    {
      id: 'applications',
      title: tLocal.sections.applications.title,
      icon: <CheckCircle className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 mt-4">
            <div className="bg-green-50 p-3 rounded-lg">
              <h5 className="font-semibold text-green-800 text-sm mb-2">{tLocal.sections.applications.lowTitle}</h5>
              <ul className="text-xs space-y-1 text-green-700">
                {tLocal.sections.applications.lowItems.map((item, idx) => (
                  <li key={idx}>• {item}</li>
                ))}
              </ul>
            </div>
            <div className="bg-blue-50 p-3 rounded-lg">
              <h5 className="font-semibold text-blue-800 text-sm mb-2">{tLocal.sections.applications.medTitle}</h5>
              <ul className="text-xs space-y-1 text-blue-700">
                {tLocal.sections.applications.medItems.map((item, idx) => (
                  <li key={idx}>• {item}</li>
                ))}
              </ul>
            </div>
            <div className="bg-primary-50 p-3 rounded-lg">
              <h5 className="font-semibold text-primary-800 text-sm mb-2">{tLocal.sections.applications.highTitle}</h5>
              <ul className="text-xs space-y-1 text-primary-700">
                {tLocal.sections.applications.highItems.map((item, idx) => (
                  <li key={idx}>• {item}</li>
                ))}
              </ul>
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
              <div className="text-3xl font-bold text-primary-600 mb-2">3</div>
              <div className="text-sm text-neutral-600">{tLocal.sections.order.levels}</div>
            </div>
            <div className="bg-white border border-neutral-200 p-4 rounded-lg text-center">
              <div className="text-3xl font-bold text-primary-600 mb-2">500</div>
              <div className="text-sm text-neutral-600">{tLocal.sections.order.moq}</div>
            </div>
            <div className="bg-white border border-neutral-200 p-4 rounded-lg text-center">
              <div className="text-3xl font-bold text-primary-600 mb-2">Free</div>
              <div className="text-sm text-neutral-600">{tLocal.sections.order.testing}</div>
            </div>
          </div>
          <p className="text-sm text-neutral-500 mt-4">
            {tLocal.sections.order.testingNote}
          </p>
        </div>
      )
    },
    {
      id: 'risk-hedge',
      title: tLocal.sections.riskHedge.title,
      icon: <Shield className="h-5 w-5 text-amber-600" />,
      content: (
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg border border-blue-200">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-neutral-900">{tLocal.sections.riskHedge.q1}</h4>
                  <p className="text-sm text-neutral-600">{tLocal.sections.riskHedge.a1}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-neutral-900">{tLocal.sections.riskHedge.q2}</h4>
                  <p className="text-sm text-neutral-600">{tLocal.sections.riskHedge.a2}</p>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-neutral-900">{tLocal.sections.riskHedge.q3}</h4>
                  <p className="text-sm text-neutral-600">{tLocal.sections.riskHedge.a3}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-neutral-900">{tLocal.sections.riskHedge.q4}</h4>
                  <p className="text-sm text-neutral-600">{tLocal.sections.riskHedge.a4}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'decision-cta',
      title: tLocal.sections.decisionCta.title,
      icon: <Shield className="h-5 w-5 text-white" />,
      content: (
        <div className="bg-gradient-to-br from-blue-500 to-indigo-600 text-white p-8 rounded-xl">
          <h3 className="text-2xl font-bold mb-6 text-center">{tLocal.sections.decisionCta.subtitle}</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white/10 backdrop-blur p-6 rounded-lg text-center">
              <Calendar className="h-8 w-8 mx-auto mb-3" />
              <h4 className="font-semibold mb-2">{tLocal.sections.decisionCta.bookCall}</h4>
              <p className="text-sm text-white/80 mb-4">{tLocal.sections.decisionCta.bookCallDesc}</p>
              <button onClick={openCalendly} className="w-full bg-white text-blue-600 px-4 py-2 rounded-lg font-semibold hover:bg-blue-50 transition cursor-pointer">
                {tLocal.sections.decisionCta.scheduleNow}
              </button>
            </div>
            <div className="bg-white/10 backdrop-blur p-6 rounded-lg text-center">
              <Mail className="h-8 w-8 mx-auto mb-3" />
              <h4 className="font-semibold mb-2">{tLocal.sections.decisionCta.emailQuote}</h4>
              <p className="text-sm text-white/80 mb-4">{tLocal.sections.decisionCta.emailQuoteDesc}</p>
              <a href="mailto:ryan@achievepack.com?subject=Barrier Options Quote" className="block w-full bg-white text-blue-600 px-4 py-2 rounded-lg font-semibold hover:bg-blue-50 transition">
                {tLocal.sections.decisionCta.sendEmail}
              </a>
            </div>
            <div className="bg-white/10 backdrop-blur p-6 rounded-lg text-center">
              <Download className="h-8 w-8 mx-auto mb-3" />
              <h4 className="font-semibold mb-2">{tLocal.sections.decisionCta.freeTesting}</h4>
              <p className="text-sm text-white/80 mb-4">{tLocal.sections.decisionCta.freeTestingDesc}</p>
              <Link to="/contact" className="block w-full bg-white text-blue-600 px-4 py-2 rounded-lg font-semibold hover:bg-blue-50 transition">
                {tLocal.sections.decisionCta.requestTesting}
              </Link>
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
          <p className="text-neutral-700">{tLocal.sections.industryScenarios.sub}</p>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-5 rounded-xl border border-green-200">
              <div className="flex items-center gap-2 mb-3">
                <ShoppingBag className="h-5 w-5 text-green-600" />
                <h4 className="font-semibold text-green-800">{tLocal.sections.industryScenarios.foodBev}</h4>
              </div>
              <p className="text-sm text-green-700 mb-3">{tLocal.sections.industryScenarios.foodBevDesc}</p>
              <div className="text-xs text-green-600 bg-green-100 px-2 py-1 rounded inline-block">{tLocal.sections.industryScenarios.foodBevShare}</div>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-5 rounded-xl border border-blue-200">
              <div className="flex items-center gap-2 mb-3">
                <Sparkles className="h-5 w-5 text-blue-600" />
                <h4 className="font-semibold text-blue-800">{tLocal.sections.industryScenarios.supplements}</h4>
              </div>
              <p className="text-sm text-blue-700 mb-3">{tLocal.sections.industryScenarios.supplementsDesc}</p>
              <div className="text-xs text-blue-600 bg-blue-100 px-2 py-1 rounded inline-block">{tLocal.sections.industryScenarios.supplementsShare}</div>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-5 rounded-xl border border-purple-200">
              <div className="flex items-center gap-2 mb-3">
                <Package className="h-5 w-5 text-purple-600" />
                <h4 className="font-semibold text-purple-800">{tLocal.sections.industryScenarios.infant}</h4>
              </div>
              <p className="text-sm text-purple-700 mb-3">{tLocal.sections.industryScenarios.infantDesc}</p>
              <div className="text-xs text-purple-600 bg-purple-100 px-2 py-1 rounded inline-block">{tLocal.sections.industryScenarios.infantShare}</div>
            </div>
          </div>
          <div className="bg-neutral-50 p-4 rounded-lg mt-4">
            <h5 className="font-semibold text-neutral-800 mb-2">{tLocal.sections.industryScenarios.storyTitle}</h5>
            <p className="text-sm text-neutral-600">{tLocal.sections.industryScenarios.storyQuote} {tLocal.sections.industryScenarios.storyAuthor}</p>
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
          <p className="text-neutral-700">{tLocal.sections.marketData.sub}</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-white border border-neutral-200 p-4 rounded-xl text-center">
              <div className="text-3xl font-bold text-primary-600 mb-1">{tLocal.sections.marketData.stat1Value}</div>
              <div className="text-xs text-neutral-500">{tLocal.sections.marketData.stat1Label}</div>
              <div className="flex items-center justify-center gap-1 mt-2 text-green-600 text-xs">
                <TrendingUp className="h-3 w-3" />
                <span>{tLocal.sections.marketData.stat1Trend}</span>
              </div>
            </div>
            <div className="bg-white border border-neutral-200 p-4 rounded-xl text-center">
              <div className="text-3xl font-bold text-blue-600 mb-1">{tLocal.sections.marketData.stat2Value}</div>
              <div className="text-xs text-neutral-500">{tLocal.sections.marketData.stat2Label}</div>
              <div className="flex items-center justify-center gap-1 mt-2 text-green-600 text-xs">
                <TrendingUp className="h-3 w-3" />
                <span>{tLocal.sections.marketData.stat2Trend}</span>
              </div>
            </div>
            <div className="bg-white border border-neutral-200 p-4 rounded-xl text-center">
              <div className="text-3xl font-bold text-green-600 mb-1">{tLocal.sections.marketData.stat3Value}</div>
              <div className="text-xs text-neutral-500">{tLocal.sections.marketData.stat3Label}</div>
              <div className="flex items-center justify-center gap-1 mt-2 text-green-600 text-xs">
                <TrendingUp className="h-3 w-3" />
                <span>{tLocal.sections.marketData.stat3Trend}</span>
              </div>
            </div>
            <div className="bg-white border border-neutral-200 p-4 rounded-xl text-center">
              <div className="text-3xl font-bold text-amber-600 mb-1">{tLocal.sections.marketData.stat4Value}</div>
              <div className="text-xs text-neutral-500">{tLocal.sections.marketData.stat4Label}</div>
              <div className="flex items-center justify-center gap-1 mt-2 text-green-600 text-xs">
                <TrendingUp className="h-3 w-3" />
                <span>{tLocal.sections.marketData.stat4Trend}</span>
              </div>
            </div>
          </div>
          <div className="bg-blue-50 p-4 rounded-lg">
            <h5 className="font-semibold text-blue-800 mb-2">{tLocal.sections.marketData.insightTitle}</h5>
            <p className="text-sm text-blue-700">{tLocal.sections.marketData.insightText}</p>
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
          <p className="text-neutral-700">{tLocal.sections.materialComparison.sub}</p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-neutral-100">
                  <th className="text-left p-3 border font-semibold">{tLocal.sections.materialComparison.thType}</th>
                  <th className="text-left p-3 border font-semibold">{tLocal.sections.materialComparison.thOtr}</th>
                  <th className="text-left p-3 border font-semibold">{tLocal.sections.materialComparison.thMvtr}</th>
                  <th className="text-left p-3 border font-semibold">{tLocal.sections.materialComparison.thMat}</th>
                  <th className="text-left p-3 border font-semibold">{tLocal.sections.materialComparison.thCost}</th>
                </tr>
              </thead>
              <tbody>
                <tr className="hover:bg-green-50">
                  <td className="p-3 border"><span className="px-2 py-1 bg-green-100 text-green-700 rounded text-xs font-medium">{tLocal.sections.materialComparison.low}</span></td>
                  <td className="p-3 border">50-100 cc/m²/day</td>
                  <td className="p-3 border">10-20 g/m²/day</td>
                  <td className="p-3 border">Kraft + PLA, Mono-PE</td>
                  <td className="p-3 border text-green-600 font-medium">$</td>
                </tr>
                <tr className="hover:bg-blue-50">
                  <td className="p-3 border"><span className="px-2 py-1 bg-blue-100 text-blue-700 rounded text-xs font-medium">{tLocal.sections.materialComparison.medium}</span></td>
                  <td className="p-3 border">5-20 cc/m²/day</td>
                  <td className="p-3 border">2-5 g/m²/day</td>
                  <td className="p-3 border">Mono-PE, Bio-PE</td>
                  <td className="p-3 border text-blue-600 font-medium">$$</td>
                </tr>
                <tr className="hover:bg-primary-50">
                  <td className="p-3 border"><span className="px-2 py-1 bg-primary-100 text-primary-700 rounded text-xs font-medium">{tLocal.sections.materialComparison.high}</span></td>
                  <td className="p-3 border">&lt;1 cc/m²/day</td>
                  <td className="p-3 border">&lt;1 g/m²/day</td>
                  <td className="p-3 border">Mono-PE + EVOH, PCR</td>
                  <td className="p-3 border text-primary-600 font-medium">$$$</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="bg-amber-50 p-4 rounded-lg">
            <h5 className="font-semibold text-amber-800 mb-2">{tLocal.sections.materialComparison.guideTitle}</h5>
            <p className="text-sm text-amber-700">{tLocal.sections.materialComparison.guideText}</p>
          </div>
        </div>
      )
    }
  ]

  const faqs = tLocal.faqs

  const relatedLinks = [
    { title: tLocal.links.compostable, url: "/materials/compostable", description: tLocal.links.compostableDesc },
    { title: tLocal.links.recyclableMonoPe, url: "/materials/recyclable-mono-pe", description: tLocal.links.recyclableMonoPeDesc },
    { title: tLocal.links.coffeeTea, url: "/industry/coffee-tea", description: tLocal.links.coffeeTeaDesc }
  ]

  return (
    <>
      <SEOPageLayout heroBgColor="#1f2937"
        title={tLocal.seo.title}
        description={tLocal.seo.description}
        keywords={tLocal.seo.keywords}
        canonicalUrl="https://achievepack.com/features/barrier-options"
        heroTitle={tLocal.seo.heroTitle}
        heroSubtitle={tLocal.seo.heroSubtitle}
        heroImage="/imgs/seo-photos/a_achievepack_barrier_range_comparison_2896222.webp"
        heroImageAlt={tLocal.seo.heroImageAlt}
        introSummary={tLocal.seo.introSummary}
        sections={sections}
        faqs={faqs}
        relatedLinks={relatedLinks}
        ctaTitle={tLocal.seo.ctaTitle}
        ctaDescription={tLocal.seo.ctaDescription}
        ctaButtonText={tLocal.seo.ctaButton}
      />
      
      {/* Gallery Lightbox Modal */}
      {galleryEnlarged && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setGalleryEnlarged(null)}
        >
          <button onClick={() => setGalleryEnlarged(null)} className="absolute top-4 right-4 text-white hover:text-neutral-300 transition cursor-pointer">
            <X className="h-8 w-8" />
          </button>
          <button onClick={(e) => { e.stopPropagation(); navigateGallery('prev'); }} className="absolute left-4 text-white hover:text-neutral-300 transition p-2 cursor-pointer">
            <ChevronLeft className="h-10 w-10" />
          </button>
          <img src={galleryEnlarged.src} alt={barrierGallery[galleryEnlarged.index]?.title || 'Enlarged view'} className="max-w-full max-h-[80vh] object-contain" onClick={(e) => e.stopPropagation()} />
          <button onClick={(e) => { e.stopPropagation(); navigateGallery('next'); }} className="absolute right-4 text-white hover:text-neutral-300 transition p-2 cursor-pointer">
            <ChevronRight className="h-10 w-10" />
          </button>
          <div className="absolute bottom-4 text-center text-white max-w-xl px-4">
            <p className="text-lg font-semibold">{barrierGallery[galleryEnlarged.index]?.title}</p>
            <p className="text-sm text-neutral-300">{barrierGallery[galleryEnlarged.index]?.desc}</p>
            <p className="text-xs mt-2 text-neutral-400">{galleryEnlarged.index + 1} / {barrierGallery.length}</p>
          </div>
        </div>
      )}
    </>
  )
}

export default BarrierOptionsPage
