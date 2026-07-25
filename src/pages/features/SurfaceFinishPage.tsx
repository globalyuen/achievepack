import React, { useState } from 'react'
import { Sparkles, Eye, Package, CheckCircle, Clock, Target, Shield, Calendar, Mail, Download, X, ChevronLeft, ChevronRight, Image, Factory, BarChart3, ArrowLeftRight, TrendingUp, ShoppingBag } from 'lucide-react'
import SEOPageLayout from '../../components/SEOPageLayout'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { useCalendly } from '../../contexts/CalendlyContext'

const galleryImages = [
  '/imgs/surface/ads/a_gloss_finish_detail_5685549.webp',
  '/imgs/surface/ads/a_gloss_pouch_correct_5078762.webp',
  '/imgs/surface/ads/a_matte_finish_detail_7483118.webp',
  '/imgs/surface/ads/a_matte_pouch_correct_6361818.webp',
  '/imgs/surface/spot-matte-finish.webp',
  '/imgs/surface/spot-uv-pouch.png',
  '/imgs/surface/ads/a_metallic_gold_closeup_5151764.webp',
  '/imgs/surface/ads/a_softtouch_pouch_correct_7961783.webp',
  '/imgs/surface/ads/a_embossed_navy_9933981.webp',
  '/imgs/surface/ads/a_foil_green_charcoal_7632386.webp',
]

const localTranslations = {
  en: {
    seo: {
      title: "Surface Finish Options | Eco-Friendly Flexible Packaging | Achieve Pack",
      description: "Premium surface finishes for eco-friendly pouches. Matte, gloss, soft-touch coating, spot UV, hot foil stamping, and embossing options for sustainable packaging.",
      keywords: ['pouch finish options', 'matte packaging', 'soft touch coating', 'spot UV pouches', 'hot foil packaging', 'premium pouch finishes'],
      canonicalUrl: "https://achievepack.com/features/surface-finish",
      heroTitle: "Surface Finish Options for Eco-Friendly Pouches",
      heroSubtitle: "Transform your sustainable packaging into a premium shelf presence with matte, gloss, soft-touch, spot UV, and hot foil finishes.",
      heroImageAlt: "Premium surface finishes on eco-friendly pouches",
      introSummary: "Achieve Pack provides custom surface finishing solutions for flexible packaging. Enhance your shelf presence, brand perception, and tactile engagement while maintaining sustainability."
    },
    scenario: {
      title: "Is This Page For You?",
      mainText: "If you want to elevate your packaging shelf presence with premium finishes while staying sustainable—you're in the right place.",
      card1Title: "Premium Brands",
      card1Desc: "Soft-touch, spot UV, hot foil",
      card2Title: "Organic & Natural",
      card2Desc: "Matte finish, kraft look",
      card3Title: "Retail Ready",
      card3Desc: "Gloss finish, vibrant colors"
    },
    overview: {
      title: "Surface Finish Options for Eco-Friendly Pouches",
      p1: "Transform your sustainable packaging into a premium shelf presence with our range of surface finishes. From soft-touch tactile coatings to eye-catching spot UV, Achieve Pack offers finishing options that elevate your brand while maintaining eco-credentials.",
      listTitle: "Available Surface Finishes:",
      items: [
        "Matte lamination – Sophisticated, non-reflective finish",
        "Gloss lamination – Vibrant colors and high shine",
        "Soft-touch coating – Velvety tactile experience",
        "Spot UV – Selective gloss highlights",
        "Hot foil stamping – Metallic accents and logos"
      ]
    },
    gallery: {
      title: "Surface Finish Gallery",
      desc: "Explore our range of premium surface finishes. Click any image to enlarge:",
      items: [
        { title: 'Gloss Finish Detail', desc: 'High-shine reflective surface for maximum color vibrancy' },
        { title: 'Gloss Pouch Example', desc: 'Full gloss lamination creating eye-catching shelf presence' },
        { title: 'Matte Finish Detail', desc: 'Smooth non-reflective surface for elegant sophisticated look' },
        { title: 'Matte Pouch Example', desc: 'Sophisticated matte finish perfect for premium brands' },
        { title: 'Spot Matte Finish', desc: 'Selective matte varnish creating elegant contrast between glossy and matte areas' },
        { title: 'Spot UV Finish', desc: 'Premium glossy spots over a matte surface creating stark contrast and focus' },
        { title: 'Metallic Gold Effect', desc: 'Luxurious gold metallic finish for premium product positioning' },
        { title: 'Soft Touch Finish', desc: 'Velvety tactile surface creating sensory brand appeal' },
        { title: 'Embossed Texture', desc: 'Raised patterns creating dimensional brand experience' },
        { title: 'Foil Stamping', desc: 'Hot foil accents in gold, silver, or custom metallic colors' }
      ]
    },
    lamination: {
      title: "Lamination Options",
      glossTitle: "Gloss Lamination",
      glossItems: [
        "Maximum color vibrancy",
        "High light reflection",
        "Easy to clean surface",
        "Best for: Food, beverages"
      ],
      matteTitle: "Matte Lamination",
      matteItems: [
        "Sophisticated, elegant look",
        "Reduced glare",
        "Fingerprint resistant",
        "Best for: Premium, organic"
      ],
      softTouchTitle: "Soft-Touch Coating",
      softTouchItems: [
        "Velvety tactile feel",
        "Premium perception",
        "Scuff-resistant",
        "Best for: Luxury, cosmetics"
      ]
    },
    specialEffects: {
      title: "Special Effect Finishes",
      intro: "Elevate your packaging with premium finishing effects:",
      spotUV: {
        title: "Spot UV Varnish",
        desc: "Apply high-gloss coating to specific areas for contrast and emphasis.",
        items: [
          "Highlight logos and text",
          "Create texture patterns",
          "Combine with matte base",
          "Adds $0.02-0.05/unit"
        ]
      },
      foil: {
        title: "Hot Foil Stamping",
        desc: "Metallic foil transfer for premium brand elements.",
        items: [
          "Gold, silver, copper, holographic",
          "Logos and borders",
          "Certificate/award seals",
          "Adds $0.05-0.15/unit"
        ]
      },
      emboss: {
        title: "Embossing/Debossing",
        desc: "Raised or recessed 3D patterns on the pouch surface.",
        items: [
          "Tactile brand logos",
          "Texture patterns",
          "Combine with foil",
          "Adds $0.03-0.08/unit"
        ]
      },
      metallic: {
        title: "Registered Metallics",
        desc: "Metallic ink effects printed in registration with design.",
        items: [
          "Full metallic panels",
          "Gradient metallic effects",
          "More economical than foil",
          "Included in plate printing"
        ]
      }
    },
    comparison: {
      title: "Finish Comparison",
      headers: ["Finish", "Look", "Feel", "Best For", "Cost Impact"],
      rows: [
        { finish: "Gloss", look: "Shiny, vibrant", feel: "Smooth", bestFor: "Food, snacks", cost: "Base cost" },
        { finish: "Matte", look: "Elegant, subtle", feel: "Smooth", bestFor: "Premium, organic", cost: "Base cost" },
        { finish: "Soft-Touch", look: "Rich, premium", feel: "Velvety", bestFor: "Luxury, cosmetics", cost: "+10-15%" },
        { finish: "Spot UV", look: "Contrast highlights", feel: "Textured", bestFor: "Branding emphasis", cost: "+$0.02-0.05/unit" },
        { finish: "Hot Foil", look: "Metallic shine", feel: "Smooth metallic", bestFor: "Luxury, awards", cost: "+$0.05-0.15/unit" }
      ]
    },
    order: {
      title: "Order Information",
      optionsVal: "6",
      optionsLabel: "Finish Options",
      digitalVal: "500",
      digitalLabel: "Min Order (Digital)",
      specialVal: "5,000",
      specialLabel: "Min Order (Foil/UV)"
    },
    riskHedge: {
      title: "Still Not Sure? We Have Answers",
      q1: "Which finish for my brand?",
      a1: "Free design consultation to recommend finishes",
      q2: "Are finishes eco-friendly?",
      a2: "Yes, water-based coatings for compostable pouches",
      q3: "MOQ for special finishes?",
      a3: "500 for digital, 5,000 for foil/UV",
      q4: "Can I see samples?",
      a4: "Free finish samples for evaluation"
    },
    cta: {
      title: "Ready to Get Started?",
      subtitle: "Choose How You'd Like to Connect",
      callTitle: "Book a Call",
      callDesc: "30-min free consultation",
      callBtn: "Schedule Now",
      emailTitle: "Email Quote",
      emailDesc: "Get response within 24hrs",
      emailBtn: "Send Email",
      sampleTitle: "Free Samples",
      sampleDesc: "Test finishes first",
      sampleBtn: "Request Samples"
    },
    scenarios: {
      title: "Industry Applications",
      intro: "Different industries have different surface finish requirements. Choosing the right coating is key to brand differentiation.",
      c1Title: "Premium Food Brands",
      c1Desc: "Soft-touch coating & hot foil stamping elevate brand perceived value.",
      c1Share: "Market Share: 40%",
      c2Title: "Organic & Natural Brands",
      c2Desc: "Matte finish & kraft paper look convey natural eco-friendly values.",
      c2Share: "Market Share: 35%",
      c3Title: "Retail Foods",
      c3Desc: "Gloss finish & vibrant colors enhance shelf appeal.",
      c3Share: "Market Share: 25%",
      storyTitle: "Customer Success Story",
      storyText: "「After upgrading from standard gloss to soft-touch + hot foil stamping logo, our product retail price increased by 15%. Customer feedback highly praised the packaging texture.」— Premium Nut Brand Founder"
    },
    marketData: {
      title: "Market Data & Intelligence",
      intro: "The premium surface finish market continues to grow as consumer demand for packaging texture increases.",
      m1Val: "67%", m1Label: "of consumers value packaging texture", m1Badge: "Growing",
      m2Val: "$12B", m2Label: "Global packaging print finishing market", m2Badge: "4.5% YoY Growth",
      m3Val: "85%", m3Label: "of brands prioritize packaging differentiation", m3Badge: "Stable",
      m4Val: "25%", m4Label: "Soft-touch coating annual growth", m4Badge: "Rapid Growth",
      insightsTitle: "Market Trend Insights",
      insightsText: "Soft-touch coating is becoming the top choice for premium brands due to its unique tactile experience. Growth is especially significant in coffee, nuts, and pet food categories, with market share expected to reach 30% by 2026."
    },
    detailedComparison: {
      title: "Material Comparison",
      intro: "Comparison of different surface finish effects to help you choose the best solution.",
      headers: ["Surface Finish", "Visual Effect", "Tactile Experience", "Suitable Brands", "Cost Impact"],
      rows: [
        { name: "Gloss", look: "Vibrant, High Shine", feel: "Smooth", suitable: "Retail Foods & Beverages", cost: "Baseline" },
        { name: "Matte", look: "Elegant, Sophisticated", feel: "Smooth", suitable: "Premium & Organic Brands", cost: "Baseline" },
        { name: "Soft-touch", look: "Premium, Luxurious", feel: "Velvety, Silky", suitable: "Luxury Brands & Cosmetics", cost: "+10-15%" },
        { name: "Spot UV", look: "Contrast & Highlight", feel: "Textured", suitable: "Brand Emphasis & Logos", cost: "+$0.02-0.05/unit" },
        { name: "Hot Foil", look: "Metallic, Luxurious", feel: "Smooth Metallic", suitable: "High-End & Luxury Products", cost: "+$0.05-0.15/unit" }
      ],
      guideTitle: "Selection Guide",
      guideText: "When choosing a surface finish, consider brand positioning, target customer segment, and budget. Combining multiple finishes can enhance packaging sophistication, for example a matte base with spot UV and hot foil logo."
    },
    faqs: [
      {
        question: "Can I combine multiple finishes on one pouch?",
        answer: "Yes! Popular combinations include matte lamination + spot UV for contrast, or soft-touch + hot foil for luxury. We can help you design the optimal finish combination for your brand positioning."
      },
      {
        question: "Are special finishes available on compostable pouches?",
        answer: "Matte and gloss lamination are available on compostable materials. However, some special effects like hot foil require testing for compostability. We recommend water-based coatings for certified compostable packaging."
      },
      {
        question: "What is the minimum order for spot UV or hot foil?",
        answer: "Special finishes like spot UV and hot foil require plate printing (5,000+ MOQ) as they involve additional tooling. For smaller orders, we recommend metallic inks which can be done with digital printing."
      },
      {
        question: "Does soft-touch coating affect food safety?",
        answer: "Our soft-touch coating is applied to the exterior surface only and is FDA-compliant. The interior food-contact layer remains unaffected and meets all food safety standards."
      }
    ],
    relatedLinks: [
      { title: "Plate Printing", url: "/printing/plate-printing", description: "Required for special finishes" },
      { title: "Reclosure Options", url: "/features/reclosure-options", description: "Complete your pouch design" },
      { title: "Stand-Up Pouches", url: "/packaging/stand-up-pouches", description: "Popular format for premium finishes" }
    ]
  },
  'zh-tw': {
    seo: {
      title: "表面處理選項 | 環保軟包裝袋 | Achieve Pack",
      description: "適用於環保包裝袋的高級表面處理選項。提供霧面、光澤、柔觸感塗層、局部UV、熱燙金與壓紋等永續包裝處理方案。",
      keywords: ['包裝袋表面處理選項', '霧面包裝', '觸感塗層', '局部UV包裝袋', '燙金包裝', '高級包裝袋加工'],
      canonicalUrl: "https://achievepack.com/features/surface-finish",
      heroTitle: "環保軟包裝袋表面處理選項",
      heroSubtitle: "運用高級霧面、光澤、柔觸感、局部UV與熱燙金處理，打造極具吸引力的永續包裝。",
      heroImageAlt: "環保軟包裝袋的高級表面處理展示",
      introSummary: "Achieve Pack 為軟包裝提供客製化表面處理解決方案。在保持永續環保的同時，提升貨架吸引力、品牌質感與觸覺體驗。"
    },
    scenario: {
      title: "這頁適合您嗎？",
      mainText: "如果您希望在保持永續環保的同時，透過高級表面處理提升包裝的貨架吸引力——您來對地方了。",
      card1Title: "高端品牌",
      card1Desc: "柔觸感塗層、局部UV、熱燙金",
      card2Title: "有機與天然品牌",
      card2Desc: "霧面處理、牛皮紙質感",
      card3Title: "零售熱銷品牌",
      card3Desc: "亮面光澤、鮮豔色彩"
    },
    overview: {
      title: "環保軟包裝袋表面處理選項",
      p1: "透過我們的系列表面處理，將您的永續包裝轉化為高質感的貨架焦點。從柔和觸感的塗層到吸引眼球的局部UV，Achieve Pack 提供多種精細加工選擇，在彰顯環保承諾的同時大幅升級品牌形象。",
      listTitle: "可用的表面處理類型：",
      items: [
        "霧面壓膜 – 高雅耐看、無反射光澤",
        "光澤壓膜 – 色彩鮮豔、高亮澤感",
        "柔觸感塗層 – 絲絨般細緻的觸覺體驗",
        "局部UV – 選擇性亮光提重點",
        "熱燙金 – 金屬質感標誌與細節"
      ]
    },
    gallery: {
      title: "表面處理展示廊",
      desc: "探索我們的高級表面處理系列。點擊任意圖片可放大檢視：",
      items: [
        { title: '亮面細節', desc: '高光澤反射表面，完美呈現色彩鮮艷度' },
        { title: '亮面袋範例', desc: '全亮面壓膜，打造奪目的貨架視覺效果' },
        { title: '霧面細節', desc: '平滑無反射表面，展現高雅端莊質感' },
        { title: '霧面袋範例', desc: '精緻霧面處理，適合高端品牌定位' },
        { title: '局部霧面處理', desc: '選擇性霧面金屬漆，創造光澤與霧面對比' },
        { title: '局部UV處理', desc: '霧面基底搭配局部亮光，形成鮮明對比焦點' },
        { title: '金屬金色效果', desc: '奢華金色金屬質感，適用於高端產品定位' },
        { title: '柔觸感處理', desc: '絲絨般的觸感表面，提升品牌觸覺體驗' },
        { title: '壓紋紋理', desc: '立體浮雕圖案，創造立體感品牌視覺' },
        { title: '熱燙金加工', desc: '金色、銀色或客製化金屬色燙印效果' }
      ]
    },
    lamination: {
      title: "壓膜選項",
      glossTitle: "光澤壓膜",
      glossItems: [
        "最高色彩鮮艷度",
        "高光反射率",
        "表面易於清潔",
        "最適合：食品、飲料"
      ],
      matteTitle: "霧面壓膜",
      matteItems: [
        "高雅精緻質感",
        "減少眩光與反射",
        "抗指紋沾染",
        "最適合：高端、有機產品"
      ],
      softTouchTitle: "柔觸感塗層",
      softTouchItems: [
        "絲絨般舒適手感",
        "提升高端品質認知",
        "耐磨損抗刮傷",
        "最適合：奢華品、化妝品"
      ]
    },
    specialEffects: {
      title: "特殊效果加工",
      intro: "運用高級加工技術提升您的包裝質感：",
      spotUV: {
        title: "局部UV上光",
        desc: "在特定區域塗佈高光澤塗層，創造對比與重點。",
        items: [
          "突出標誌與文字",
          "創造紋理圖案",
          "結合霧面基膜",
          "每個約增加 $0.02-0.05"
        ]
      },
      foil: {
        title: "熱燙金印",
        desc: "轉印金屬箔膜，打造高端品牌元素。",
        items: [
          "金、銀、銅、全息彩虹",
          "標誌與邊框設計",
          "認證/獲獎標章",
          "每個約增加 $0.05-0.15"
        ]
      },
      emboss: {
        title: "壓紋 / 凹凸印",
        desc: "在包裝袋表面打造立體浮雕或壓凹紋理。",
        items: [
          "具觸感的品牌標誌",
          "紋理圖案設計",
          "可結合燙金效果",
          "每個約增加 $0.03-0.08"
        ]
      },
      metallic: {
        title: "定位金屬墨印",
        desc: "與設計精準對位的金屬油墨印刷效果。",
        items: [
          "全金屬感面板",
          "金屬漸層效果",
          "比燙金更具經濟效益",
          "已包含於版印刷中"
        ]
      }
    },
    comparison: {
      title: "表面處理對比",
      headers: ["表面處理", "視覺效果", "觸感體驗", "最適合", "成本影響"],
      rows: [
        { finish: "光澤壓膜", look: "亮麗鮮豔", feel: "平滑", bestFor: "食品、零食", cost: "基礎成本" },
        { finish: "霧面壓膜", look: "高雅低調", feel: "平滑", bestFor: "高端、有機", cost: "基礎成本" },
        { finish: "柔觸感", look: "豐富高檔", feel: "絲絨質感", bestFor: "奢華品、化妝品", cost: "+10-15%" },
        { finish: "局部UV", look: "對比亮點", feel: "紋理觸感", bestFor: "強調品牌重點", cost: "+$0.02-0.05/個" },
        { finish: "熱燙金", look: "金屬光澤", feel: "平滑金屬", bestFor: "奢華品、獎項標章", cost: "+$0.05-0.15/個" }
      ]
    },
    order: {
      title: "訂購資訊",
      optionsVal: "6 種",
      optionsLabel: "表面處理選項",
      digitalVal: "500 個",
      digitalLabel: "最低起訂量 (數位印刷)",
      specialVal: "5,000 個",
      specialLabel: "最低起訂量 (燙金/UV)"
    },
    riskHedge: {
      title: "仍有疑問？我們為您解答",
      q1: "哪個處理最適合我的品牌？",
      a1: "提供免費設計諮詢，推薦最適表面處理",
      q2: "這些處理環保嗎？",
      a2: "是的，可降解袋使用水性環保塗層",
      q3: "特殊處理的起訂量是多少？",
      a3: "數位印刷 500 個，燙金/局部UV 5,000 個",
      q4: "可以看樣品嗎？",
      a4: "提供免費表面處理樣品評估質感"
    },
    cta: {
      title: "準備好開始了嗎？",
      subtitle: "選擇您希望的聯繫方式",
      callTitle: "預約諮詢",
      callDesc: "30分鐘免費專業諮詢",
      callBtn: "立即預約",
      emailTitle: "郵件報價",
      emailDesc: "24小時內獲得專業回覆",
      emailBtn: "發送郵件",
      sampleTitle: "免費索樣",
      sampleDesc: "先親自測試表面處理質感",
      sampleBtn: "索取樣品"
    },
    scenarios: {
      title: "產業應用場景",
      intro: "不同產業對表面處理有不同需求，選擇合適的塗層是品牌差異化的關鍵。",
      c1Title: "高端食品品牌",
      c1Desc: "柔觸感塗層與熱燙金提升品牌感知價值。",
      c1Share: "市場佔有率：40%",
      c2Title: "有機天然品牌",
      c2Desc: "霧面處理與牛皮紙質感傳遞天然環保價值。",
      c2Share: "市場佔有率：35%",
      c3Title: "零售食品",
      c3Desc: "亮面光澤與鮮豔色彩增強貨架吸引力。",
      c3Share: "市場佔有率：25%",
      storyTitle: "客戶成功案例",
      storyText: "「從標準光澤升級為柔觸感+燙金LOGO後，我們的產品零售價提升了15%，客戶對包裝質感的評價極高。」— 高端堅果品牌創辦人"
    },
    marketData: {
      title: "市場數據與情報",
      intro: "高端表面處理市場持續成長，消費者對包裝質感的追求日益增高。",
      m1Val: "67%", m1Label: "消費者重視包裝觸感與質感", m1Badge: "持續成長中",
      m2Val: "$120億", m2Label: "全球包裝印刷後加工市場規模", m2Badge: "年成長率 4.5%",
      m3Val: "85%", m3Label: "品牌優先考量包裝視覺差異化", m3Badge: "維持穩定",
      m4Val: "25%", m4Label: "柔觸感塗層年增長率", m4Badge: "快速成長",
      insightsTitle: "市場趨勢洞察",
      insightsText: "柔觸感塗層因其獨特的觸覺體驗，正成為高端品牌的首選，尤其在咖啡、堅果與寵物食品領域成長顯著，預計至2026年市場份額將達到30%。"
    },
    detailedComparison: {
      title: "材質與加工詳細對比",
      intro: "比較不同表面處理效果，協助您選擇最佳解決方案。",
      headers: ["表面處理", "視覺效果", "觸感體驗", "適用品牌", "成本影響"],
      rows: [
        { name: "光澤壓膜", look: "鮮豔、高亮澤", feel: "平滑", suitable: "零售食品、飲料", cost: "基準成本" },
        { name: "霧面壓膜", look: "高雅、精緻", feel: "平滑", suitable: "高端品牌、有機產品", cost: "基準成本" },
        { name: "柔觸感塗層", look: "高端、奢華", feel: "絲絨般柔軟", suitable: "奢華品牌、美妝", cost: "+10-15%" },
        { name: "局部UV", look: "強烈對比、突出重點", feel: "具紋理層次", suitable: "強調品牌標誌", cost: "+$0.02-0.05/個" },
        { name: "熱燙金", look: "金屬質感、華麗", feel: "平滑金屬感", suitable: "高端奢華產品", cost: "+$0.05-0.15/個" }
      ],
      guideTitle: "選擇指南",
      guideText: "選擇表面處理時，請綜合考量品牌定位、目標客群與預算。結合多種工藝可大幅提升包裝精緻度，例如霧面基底 + 局部UV + 燙金標誌的組合。"
    },
    faqs: [
      {
        question: "我能在同一個包裝袋上結合多種表面處理嗎？",
        answer: "可以！熱門組合包含霧面壓膜 + 局部UV以營造光影對比，或是柔觸感塗層 + 熱燙金提升奢華質感。我們能協助您設計最適切的工藝組合。"
      },
      {
        question: "可降解包裝袋可以使用特殊表面處理嗎？",
        answer: "霧面與光澤壓膜均可用於可降解材質。不過部分特殊效果如熱燙金需經過降解測試。針對認證可降解包裝，我們建議使用水性環保塗層。"
      },
      {
        question: "局部UV或熱燙金的最低起訂量是多少？",
        answer: "局部UV與熱燙金等特殊工藝需要版印刷（起訂量 5,000 個以上）。若訂單量較小，我們建議採用可透過數位印刷實現的金屬油墨效果。"
      },
      {
        question: "柔觸感塗層會影響食品安全嗎？",
        answer: "我們的柔觸感塗層僅施加於包裝袋外層，且符合 FDA 食品安全規範。內層接觸食品部分不受影響，完全滿足食品安全標準。"
      }
    ],
    relatedLinks: [
      { title: "凹版印刷工藝", url: "/printing/plate-printing", description: "特殊表面處理所需工藝" },
      { title: "重新密封選項", url: "/features/reclosure-options", description: "完善您的包裝袋設計" },
      { title: "直立拉鍊袋", url: "/packaging/stand-up-pouches", description: "高級表面處理的熱門袋型" }
    ]
  },
  fr: {
    seo: {
      title: "Options de Finition de Surface | Sachets Écologiques | Achieve Pack",
      description: "Finitions de surface haut de gamme pour sachets écologiques. Options mat, brillant, revêtement soft-touch, vernis sélectif UV, dorure à chaud et gaufrage pour emballages durables.",
      keywords: ['options de finition sachet', 'emballage mat', 'revêtement soft touch', 'sachets vernis UV', 'emballage dorure à chaud', 'finitions sachet premium'],
      canonicalUrl: "https://achievepack.com/features/surface-finish",
      heroTitle: "Options de Finition de Surface pour Sachets Écologiques",
      heroSubtitle: "Transformez vos emballages durables avec des finitions haut de gamme : mat, brillant, soft-touch, vernis sélectif UV et dorure à chaud.",
      heroImageAlt: "Finitions de surface haut de gamme sur sachets écoresponsables",
      introSummary: "Achieve Pack fournit des solutions de finition de surface personnalisées pour l'emballage flexible. Améliorez votre présence en rayon, la perception de votre marque et l'engagement tactile tout en respectant l'environnement."
    },
    scenario: {
      title: "Cette page est-elle pour vous ?",
      mainText: "Si vous souhaitez sublimer l'impact visuel de vos emballages en rayon avec des finitions haut de gamme tout en restant écoresponsable, vous êtes au bon endroit.",
      card1Title: "Marques Premium",
      card1Desc: "Soft-touch, vernis UV sélectif, dorure à chaud",
      card2Title: "Bio & Naturel",
      card2Desc: "Finition mate, aspect papier kraft",
      card3Title: "Prêt pour la Vente",
      card3Desc: "Finition brillante, couleurs éclatantes"
    },
    overview: {
      title: "Options de Finition pour Sachets Écoresponsables",
      p1: "Transformez vos emballages durables en une présence remarquable sur étagère grâce à notre gamme de finitions de surface. Du revêtement soft-touch au vernis sélectif UV captivant, Achieve Pack propose des options de finition qui valorisent votre marque tout en préservant vos engagements écologiques.",
      listTitle: "Finitions de Surface Disponibles :",
      items: [
        "Pelliculage mat – Finition élégante et sans reflet",
        "Pelliculage brillant – Couleurs éclatantes et haute brillance",
        "Revêtement Soft-touch – Expérience tactile veloutée",
        "Vernis sélectif UV – Brillance ciblée pour mettre en valeur les éléments clés",
        "Dorure à chaud – Accents métalliques et logos dorés/argentés"
      ]
    },
    gallery: {
      title: "Galerie des Finitions de Surface",
      desc: "Explorez notre gamme de finitions de surface haut de gamme. Cliquez sur une image pour l'agrandir :",
      items: [
        { title: 'Détail Finition Brillante', desc: 'Surface réfléchissante haute brillance pour un éclat maximal des couleurs' },
        { title: 'Exemple Sachet Brillant', desc: 'Pelliculage brillant intégral créant une présence captivante en rayon' },
        { title: 'Détail Finition Mate', desc: 'Surface lisse sans reflet pour un look élégant et sophistiqué' },
        { title: 'Exemple Sachet Mat', desc: 'Finition mate sophistiquée idéale pour les marques haut de gamme' },
        { title: 'Finition Mat Sélectif', desc: 'Vernis mat sélectif créant un contraste élégant entre zones brillantes et mates' },
        { title: 'Finition Vernis UV Sélectif', desc: 'Points brillants haut de gamme sur surface mate créant un fort contraste' },
        { title: 'Effet Or Métallique', desc: 'Finition métallique dorée luxueuse pour un positionnement produit premium' },
        { title: 'Finition Soft Touch', desc: 'Surface tactile veloutée créant un fort attrait sensoriel de marque' },
        { title: 'Texture Gaufrée', desc: 'Motifs en relief créant une expérience de marque dimensionnelle' },
        { title: 'Marquage à Chaud', desc: 'Accents métalliques dorés, argentés ou couleurs personnalisées' }
      ]
    },
    lamination: {
      title: "Options de Pelliculage",
      glossTitle: "Pelliculage Brillant",
      glossItems: [
        "Éclat maximal des couleurs",
        "Forte réflexion de la lumière",
        "Surface facile à nettoyer",
        "Idéal pour : Alimentation, boissons"
      ],
      matteTitle: "Pelliculage Mat",
      matteItems: [
        "Look raffiné et élégant",
        "Reflets réduits",
        "Résistant aux traces de doigts",
        "Idéal pour : Premium, produits bio"
      ],
      softTouchTitle: "Revêtement Soft-Touch",
      softTouchItems: [
        "Toucher velouté luxueux",
        "Perception haut de gamme",
        "Résistant aux rayures",
        "Idéal pour : Luxe, cosmétiques"
      ]
    },
    specialEffects: {
      title: "Finition à Effets Spéciaux",
      intro: "Sublimez vos emballages avec des effets de finition d'exception :",
      spotUV: {
        title: "Vernis UV Sélectif",
        desc: "Appliquez une couche brillante sur des zones ciblées pour créer du contraste.",
        items: [
          "Mise en valeur des logos et textes",
          "Création de motifs texturés",
          "Combinaison avec base mate",
          "Ajoute +0,02-0,05 $/unité"
        ]
      },
      foil: {
        title: "Dorure à Chaud",
        desc: "Transfert de film métallique pour éléments de marque prestigieux.",
        items: [
          "Or, argent, cuivre, holographique",
          "Logos et bordures raffinés",
          "Sceaux de certification/récompense",
          "Ajoute +0,05-0,15 $/unité"
        ]
      },
      emboss: {
        title: "Gaufrage / Embossage",
        desc: "Motifs 3D en relief ou en creux sur la surface du sachet.",
        items: [
          "Logos tactiles de marque",
          "Motifs texturés 3D",
          "Combinable avec dorure",
          "Ajoute +0,03-0,08 $/unité"
        ]
      },
      metallic: {
        title: "Encre Métallique Alignée",
        desc: "Effet d'encre métallique imprimé en registre avec le design.",
        items: [
          "Panneaux métalliques complets",
          "Effets métalliques en dégradé",
          "Plus économique que la dorure",
          "Inclus dans l'impression hélio"
        ]
      }
    },
    comparison: {
      title: "Comparatif des Finitions",
      headers: ["Finition", "Aspect", "Toucher", "Idéal Pour", "Impact Coût"],
      rows: [
        { finish: "Brillant", look: "Éclatant, lumineux", feel: "Lisse", bestFor: "Alimentation, snacks", cost: "Coût de base" },
        { finish: "Mat", look: "Élégant, subtil", feel: "Lisse", bestFor: "Premium, bio", cost: "Coût de base" },
        { finish: "Soft-Touch", look: "Riche, luxueux", feel: "Velouté", bestFor: "Luxe, cosmétiques", cost: "+10 à 15 %" },
        { finish: "Vernis UV", look: "Contraste ciblé", feel: "Texturé", bestFor: "Accentuation de marque", cost: "+0,02-0,05 $/unité" },
        { finish: "Dorure à Chaud", look: "Éclat métallique", feel: "Métallique lisse", bestFor: "Luxe, distinctions", cost: "+0,05-0,15 $/unité" }
      ]
    },
    order: {
      title: "Informations de Commande",
      optionsVal: "6",
      optionsLabel: "Options de Finition",
      digitalVal: "500",
      digitalLabel: "Commande Min. (Numérique)",
      specialVal: "5 000",
      specialLabel: "Commande Min. (Dorure/UV)"
    },
    riskHedge: {
      title: "Encore un doute ? Nous avons les réponses",
      q1: "Quelle finition pour ma marque ?",
      a1: "Consultation design gratuite pour recommander la bonne finition",
      q2: "Les finitions sont-elles écologiques ?",
      a2: "Oui, vernis à base d'eau pour sachets compostables",
      q3: "MOQ pour les finitions spéciales ?",
      a3: "500 en numérique, 5 000 pour dorure/UV",
      q4: "Puis-je voir des échantillons ?",
      a4: "Échantillons de finition gratuits pour évaluation"
    },
    cta: {
      title: "Prêt à commencer ?",
      subtitle: "Choisissez comment vous souhaitez échanger",
      callTitle: "Planifier un Appel",
      callDesc: "Consultation gratuite de 30 min",
      callBtn: "Réserver",
      emailTitle: "Devis par E-mail",
      emailDesc: "Réponse sous 24h",
      emailBtn: "Envoyer un E-mail",
      sampleTitle: "Échantillons Gratuits",
      sampleDesc: "Testez les finitions d'abord",
      sampleBtn: "Demander des Échantillons"
    },
    scenarios: {
      title: "Applications par Secteur",
      intro: "Chaque secteur a des exigences spécifiques en matière de finition. Choisir le bon revêtement est la clé de la différenciation.",
      c1Title: "Marques Alimentaires Premium",
      c1Desc: "Le revêtement soft-touch et la dorure à chaud augmentent la valeur perçue.",
      c1Share: "Part de marché : 40 %",
      c2Title: "Marques Bio et Naturelles",
      c2Desc: "La finition mate et l'aspect papier kraft transmettent des valeurs écologiques.",
      c2Share: "Part de marché : 35 %",
      c3Title: "Alimentaire Grande Distribution",
      c3Desc: "La finition brillante et les couleurs vives renforcent l'attractivité en rayon.",
      c3Share: "Part de marché : 25 %",
      storyTitle: "Témoignage Client",
      storyText: "« Après être passés d'un brillant classique à un duo soft-touch + logo en dorure à chaud, notre prix de vente a augmenté de 15 %. Nos clients adorent la texture de l'emballage. » — Fondateur d'une marque de fruits secs haut de gamme"
    },
    marketData: {
      title: "Données du Marché & Intelligence",
      intro: "Le marché des finitions de surface premium poursuit sa croissance alors que la demande des consommateurs pour la texture des emballages augmente.",
      m1Val: "67 %", m1Label: "des consommateurs privilégient la texture de l'emballage", m1Badge: "En croissance",
      m2Val: "12 Md$", m2Label: "Marché mondial des finitions d'impression", m2Badge: "Croissance 4,5 %/an",
      m3Val: "85 %", m3Label: "des marques privilégient la différenciation visuelle", m3Badge: "Stable",
      m4Val: "25 %", m4Label: "Croissance annuelle du revêtement soft-touch", m4Badge: "Croissance rapide",
      insightsTitle: "Tendances du Marché",
      insightsText: "Le revêtement soft-touch devient le choix privilégié des marques premium grâce à son toucher unique. La croissance est particulièrement forte dans les secteurs du café, des fruits secs et des aliments pour animaux, avec une part de marché prévue de 30 % d'ici 2026."
    },
    detailedComparison: {
      title: "Comparatif Détaillé des Finitions",
      intro: "Comparaison des différentes finitions de surface pour vous aider à choisir la solution idéale.",
      headers: ["Finition", "Effet Visuel", "Expérience Tactile", "Marques Adaptées", "Impact Coût"],
      rows: [
        { name: "Brillant", look: "Éclatant, très lumineux", feel: "Lisse", suitable: "Alimentation libre-service, boissons", cost: "Base" },
        { name: "Mat", look: "Élégant, raffiné", feel: "Lisse", suitable: "Marques premium & bio", cost: "Base" },
        { name: "Soft-touch", look: "Haut de gamme, luxueux", feel: "Velouté, soyeux", suitable: "Marques de luxe, cosmétiques", cost: "+10-15 %" },
        { name: "Vernis UV", look: "Contraste fort, relief", feel: "Texturé", suitable: "Accentuation de marque & logos", cost: "+0,02-0,05 $/u" },
        { name: "Dorure à chaud", look: "Métallique, luxueux", feel: "Métallique lisse", suitable: "Produits d'exception & récompenses", cost: "+0,05-0,15 $/u" }
      ],
      guideTitle: "Guide de Sélection",
      guideText: "Lors du choix d'une finition, prenez en compte le positionnement de votre marque, votre public cible et votre budget. Combiner plusieurs procédés (ex. mat + vernis sélectif + dorure) permet d'obtenir un rendu d'une grande sophistication."
    },
    faqs: [
      {
        question: "Puis-je combiner plusieurs finitions sur un même sachet ?",
        answer: "Oui ! Les combinaisons populaires incluent le pelliculage mat + vernis sélectif UV pour créer du relief, ou le soft-touch + dorure à chaud pour un rendu de luxe. Nous pouvons vous aider à concevoir la combinaison optimale."
      },
      {
        question: "Les finitions spéciales sont-elles disponibles sur sachets compostables ?",
        answer: "Les pelliculages mat et brillant sont disponibles sur matériaux compostables. Cependant, certains effets comme la dorure à chaud nécessitent des tests de compostabilité. Nous recommandons des vernis à base d'eau pour les sachets compostables certifiés."
      },
      {
        question: "Quel est le minimum de commande pour le vernis UV ou la dorure ?",
        answer: "Les finitions spéciales nécessitent une impression hélio par plaques (MOQ 5 000+). Pour les commandes plus petites, nous recommandons des encres métalliques réalisables en impression numérique."
      },
      {
        question: "Le revêtement soft-touch affecte-t-il la sécurité alimentaire ?",
        answer: "Notre revêtement soft-touch est appliqué uniquement sur la surface extérieure et est conforme aux normes FDA. La couche intérieure en contact avec les aliments reste intacte et totalement sécurisée."
      }
    ],
    relatedLinks: [
      { title: "Impression Hélio", url: "/printing/plate-printing", description: "Nécessaire pour les finitions spéciales" },
      { title: "Options de Refermeture", url: "/features/reclosure-options", description: "Complétez le design de votre sachet" },
      { title: "Sachets Tenue Debout", url: "/packaging/stand-up-pouches", description: "Format populaire pour finitions premium" }
    ]
  },
  es: {
    seo: {
      title: "Opciones de Acabado Superficial | Bolsas Ecológicas | Achieve Pack",
      description: "Acabados superficiales de primera calidad para bolsas ecológicas. Opciones mate, brillante, recubrimiento soft-touch, barniz UV sectorizado, estampado en caliente y grabado en relieve.",
      keywords: ['acabados de bolsas', 'empaque mate', 'recubrimiento soft touch', 'bolsas barniz UV', 'estampado dorado empaque', 'acabados bolsas premium'],
      canonicalUrl: "https://achievepack.com/features/surface-finish",
      heroTitle: "Opciones de Acabado Superficial para Bolsas Ecológicas",
      heroSubtitle: "Transforme sus empaques sostenibles con acabados premium: mate, brillante, soft-touch, barniz UV sectorizado y estampado en caliente.",
      heroImageAlt: "Acabados superficiales de primera calidad en bolsas ecológicas",
      introSummary: "Achieve Pack ofrece soluciones personalizadas de acabado superficial para empaques flexibles. Mejore la presencia en anaquel, la percepción de marca y el atractivo táctil manteniendo la sostenibilidad."
    },
    scenario: {
      title: "¿Es esta página para usted?",
      mainText: "Si desea elevar la presencia de su empaque en anaquel con acabados premium sin renunciar a la sostenibilidad, está en el lugar correcto.",
      card1Title: "Marcas Premium",
      card1Desc: "Soft-touch, barniz UV sectorizado, estampado dorado",
      card2Title: "Orgánico y Natural",
      card2Desc: "Acabado mate, aspecto papel kraft",
      card3Title: "Listos para Minoristas",
      card3Desc: "Acabado brillante, colores vibrantes"
    },
    overview: {
      title: "Opciones de Acabado para Bolsas Ecológicas",
      p1: "Transforme sus empaques sostenibles en una presencia destacada en anaquel con nuestra gama de acabados superficiales. Desde recubrimientos de tacto suave hasta llamativos detalles en barniz UV, Achieve Pack ofrece opciones que elevan su marca manteniendo sus credenciales ecológicas.",
      listTitle: "Acabados Superficiales Disponibles:",
      items: [
        "Laminado mate – Acabado sofisticado y sin reflejos",
        "Laminado brillante – Colores vibrantes y alto brillo",
        "Recubrimiento Soft-touch – Experiencia táctil aterciopelada",
        "Barniz UV sectorizado – Brillo seleccionado para resaltar elementos clave",
        "Estampado en caliente – Detalles metálicos y logotipos dorados/plateados"
      ]
    },
    gallery: {
      title: "Galería de Acabados Superficiales",
      desc: "Explore nuestra gama de acabados superficiales de alta calidad. Haga clic en cualquier imagen para ampliarla:",
      items: [
        { title: 'Detalle de Acabado Brillante', desc: 'Superficie reflectante de alto brillo para máxima intensidad cromática' },
        { title: 'Ejemplo de Bolsa Brillante', desc: 'Laminado brillante completo que crea gran impacto en anaquel' },
        { title: 'Detalle de Acabado Mate', desc: 'Superficie suave sin reflejos para una apariencia elegante y sofisticada' },
        { title: 'Ejemplo de Bolsa Mate', desc: 'Acabado mate sofisticado ideal para marcas de alta gama' },
        { title: 'Acabado Mate Sectorizado', desc: 'Barniz mate selectivo que crea un contraste elegante entre zonas mate y brillantes' },
        { title: 'Acabado Barniz UV Sectorizado', desc: 'Puntos brillantes premium sobre superficie mate creando alto contraste' },
        { title: 'Efecto Dorado Metálico', desc: 'Acabado metálico dorado lujoso para un posicionamiento de producto premium' },
        { title: 'Acabado Soft Touch', desc: 'Superficie de tacto aterciopelado que genera gran atractivo sensorial' },
        { title: 'Textura en Relieve', desc: 'Patrones en relief que crean una experiencia tridimensional de marca' },
        { title: 'Estampado en Caliente', desc: 'Accentos metálicos dorados, plateados o en colores personalizados' }
      ]
    },
    lamination: {
      title: "Opciones de Laminación",
      glossTitle: "Laminado Brillante",
      glossItems: [
        "Máxima vibrantez de color",
        "Alta reflexión de luz",
        "Superficie fácil de limpiar",
        "Ideal para: Alimentos, bebidas"
      ],
      matteTitle: "Laminado Mate",
      matteItems: [
        "Aspecto elegante y sofisticado",
        "Reflejos reducidos",
        "Resistente a huellas dactilares",
        "Ideal para: Productos premium y orgánicos"
      ],
      softTouchTitle: "Recubrimiento Soft-Touch",
      softTouchItems: [
        "Tacto aterciopelado suave",
        "Percepción de gran lujo",
        "Resistente a rozaduras",
        "Ideal para: Luxe, cosmética"
      ]
    },
    specialEffects: {
      title: "Acabados de Efectos Especiales",
      intro: "Eleve sus empaques con acabados especiales de alta calidad:",
      spotUV: {
        title: "Barniz UV Sectorizado",
        desc: "Aplique recubrimiento brillante en zonas específicas para crear contraste.",
        items: [
          "Resalte logotipos y texto",
          "Cree patrones con textura",
          "Combine con base mate",
          "Añade +$0.02-0.05/unidad"
        ]
      },
      foil: {
        title: "Estampado en Caliente",
        desc: "Transferencia de lámina metálica para elementos distintivos.",
        items: [
          "Oro, plata, cobre, holográfico",
          "Logotipos y bordes",
          "Sellos de certificación o premios",
          "Añade +$0.05-0.15/unidad"
        ]
      },
      emboss: {
        title: "Relieve / Grabado",
        desc: "Patrones 3D en relieve o hundidos en la superficie de la bolsa.",
        items: [
          "Logotipos táctiles de marca",
          "Patrones de textura 3D",
          "Combinable con estampado dorado",
          "Añade +$0.03-0.08/unidad"
        ]
      },
      metallic: {
        title: "Tintas Metálicas Registradas",
        desc: "Efectos de tinta metálica impresos en registro preciso con el diseño.",
        items: [
          "Paneles metálicos completos",
          "Efectos metálicos en degradado",
          "Más económico que el estampado",
          "Incluido en la impresión con placas"
        ]
      }
    },
    comparison: {
      title: "Comparativa de Acabados",
      headers: ["Acabado", "Aspecto", "Tacto", "Ideal Para", "Impacto en Costo"],
      rows: [
        { finish: "Brillante", look: "Luminoso, vibrante", feel: "Suave", bestFor: "Alimentos, snacks", cost: "Costo base" },
        { finish: "Mate", look: "Elegante, sutil", feel: "Suave", bestFor: "Premium, orgánicos", cost: "Costo base" },
        { finish: "Soft-Touch", look: "Rico, lujoso", feel: "Aterciopelado", bestFor: "Lujo, cosmética", cost: "+10-15%" },
        { finish: "Barniz UV", look: "Contraste destacado", feel: "Texturizado", bestFor: "Énfasis en marca", cost: "+$0.02-0.05/unidad" },
        { finish: "Estampado Dorado", look: "Brillo metálico", feel: "Metálico suave", bestFor: "Lujo, premios", cost: "+$0.05-0.15/unidad" }
      ]
    },
    order: {
      title: "Información de Pedido",
      optionsVal: "6",
      optionsLabel: "Opciones de Acabado",
      digitalVal: "500",
      digitalLabel: "Pedido Mín. (Digital)",
      specialVal: "5,000",
      specialLabel: "Pedido Mín. (Estampado/UV)"
    },
    riskHedge: {
      title: "¿Aún tiene dudas? Le ayudamos",
      q1: "¿Qué acabado elegir para mi marca?",
      a1: "Consultoría de diseño gratuita para recomendar la mejor opción",
      q2: "¿Son ecológicos estos acabados?",
      a2: "Sí, barnices a base de agua para bolsas compostables",
      q3: "¿MOQ para acabados especiales?",
      a3: "500 en digital, 5,000 para estampado/UV",
      q4: "¿Puedo ver muestras?",
      a4: "Muestras de acabado gratuitas para evaluación"
    },
    cta: {
      title: "¿Listo para comenzar?",
      subtitle: "Elija cómo prefiere ponerse en contacto",
      callTitle: "Agendar Llamada",
      callDesc: "Consulta gratuita de 30 min",
      callBtn: "Reservar Ahora",
      emailTitle: "Solicitar Cotización",
      emailDesc: "Respuesta en menos de 24h",
      emailBtn: "Enviar Correo",
      sampleTitle: "Muestras Gratuitas",
      sampleDesc: "Pruebe los acabados primero",
      sampleBtn: "Solicitar Muestras"
    },
    scenarios: {
      title: "Aplicaciones por Industria",
      intro: "Cada industria tiene diferentes requerimientos de acabado. Elegir el recubrimiento adecuado es clave para diferenciarse.",
      c1Title: "Marcas Alimentarias Premium",
      c1Desc: "Soft-touch y estampado dorado elevan el valor percibido.",
      c1Share: "Cuota de mercado: 40%",
      c2Title: "Marcas Orgánicas y Naturales",
      c2Desc: "El acabado mate y aspecto kraft transmiten valores ecológicos.",
      c2Share: "Cuota de mercado: 35%",
      c3Title: "Alimentos Minoristas",
      c3Desc: "El acabado brillante y colores vivos aumentan la atracción en anaquel.",
      c3Share: "Cuota de mercado: 25%",
      storyTitle: "Historia de Éxito",
      storyText: "«Tras cambiar de brillante estándar a soft-touch con logotipo en estampado dorado, el precio de venta de nuestro producto subió un 15%. La respuesta de los clientes sobre la textura fue excepcional.» — Fundador de marca de frutos secos premium"
    },
    marketData: {
      title: "Datos del Mercado e Inteligencia",
      intro: "El mercado de acabados superficiales de alta calidad sigue creciendo debido a la alta exigencia táctil del consumidor.",
      m1Val: "67%", m1Label: "de los consumidores valora la textura del empaque", m1Badge: "En crecimiento",
      m2Val: "$12B", m2Label: "Mercado global de acabados de impresión", m2Badge: "Crecimiento 4.5%/año",
      m3Val: "85%", m3Label: "de las marcas prioriza la diferenciación de su empaque", m3Badge: "Estable",
      m4Val: "25%", m4Label: "Crecimiento anual de recubrimiento soft-touch", m4Badge: "Crecimiento rápido",
      insightsTitle: "Perspectiva de Mercado",
      insightsText: "El recubrimiento soft-touch se está convirtiendo en la opción favorita de las marcas premium gracias a su experiencia táctil única. Destaca en café, frutos secos y alimento para mascotas, esperando alcanzar un 30% de cuota para 2026."
    },
    detailedComparison: {
      title: "Comparativa Dettallada de Materiales",
      intro: "Comparación de los diferentes acabados superficiales para ayudarle a elegir la mejor opción.",
      headers: ["Acabado", "Efecto Visual", "Experiencia Táctil", "Marcas Adecuadas", "Impacto en Costo"],
      rows: [
        { name: "Brillante", look: "Vibrante, alto brillo", feel: "Suave", suitable: "Alimentos minoristas, bebidas", cost: "Base" },
        { name: "Mate", look: "Elegante, sofisticado", feel: "Suave", suitable: "Marcas premium y orgánicas", cost: "Base" },
        { name: "Soft-touch", look: "Premium, lujoso", feel: "Aterciopelado, sedoso", suitable: "Lujo, cosmética", cost: "+10-15%" },
        { name: "Barniz UV", look: "Contraste y realce", feel: "Texturizado", suitable: "Énfasis en marcas y logotipos", cost: "+$0.02-0.05/u" },
        { name: "Estampado dorado", look: "Metálico, lujoso", feel: "Metálico suave", suitable: "Productos de alta gama y lujo", cost: "+$0.05-0.15/u" }
      ],
      guideTitle: "Guía de Selección",
      guideText: "Al seleccionar un acabado superficial, considere el posicionamiento de marca, público objetivo y presupuesto. Combinar varios acabados (como base mate + barniz UV + logotipo dorado) aporta gran sofisticación."
    },
    faqs: [
      {
        question: "¿Puedo combinar múltiples acabados en una sola bolsa?",
        answer: "¡Sí! Las combinaciones populares incluyen laminado mate + barniz UV sectorizado para crear contraste, o soft-touch + estampado en caliente para máxima elegancia. Le ayudamos a diseñar la combinación óptima."
      },
      {
        question: "¿Están disponibles estos acabados especiales en bolsas compostables?",
        answer: "El laminado mate y brillante se pueden aplicar en materiales compostables. Sin embargo, algunos efectos especiales como el estampado en caliente requieren pruebas de compostabilidad. Recomendamos recubrimientos acuosos para empaques compostables certificados."
      },
      {
        question: "¿Cuál es el pedido mínimo para barniz UV o estampado en caliente?",
        answer: "Los acabados especiales requieren impresión por placas (MOQ desde 5,000 unidades). Para pedidos más pequeños, recomendamos tintas metálicas que se pueden realizar con impresión digital."
      },
      {
        question: "¿El recubrimiento soft-touch afecta la seguridad alimentaria?",
        answer: "Nuestro recubrimiento soft-touch se aplica solo en la superficie exterior y cumple con las normas de la FDA. La capa interior en contacto con los alimentos no se ve afectada y cumple todos los estándares de inocuidad."
      }
    ],
    relatedLinks: [
      { title: "Impresión por Placas", url: "/printing/plate-printing", description: "Requerido para acabados especiales" },
      { title: "Opciones de Recremallera", url: "/features/reclosure-options", description: "Complete el diseño de su bolsa" },
      { title: "Bolsas Stand-Up", url: "/packaging/stand-up-pouches", description: "Formato popular para acabados premium" }
    ]
  }
}

const SurfaceFinishPage: React.FC = () => {
  const { i18n } = useTranslation()
  const rawLang = (i18n.language || 'en').toLowerCase()
  const currentLang = (rawLang === 'zh-tw' || rawLang === 'zh-hant' || rawLang === 'zh') ? 'zh-tw' : (rawLang === 'fr' ? 'fr' : (rawLang === 'es' ? 'es' : 'en'))
  const tLocal = localTranslations[currentLang] || localTranslations.en

  const { openCalendly } = useCalendly()
  const [galleryEnlarged, setGalleryEnlarged] = useState<{ src: string; index: number } | null>(null)
  
  const surfaceGallery = tLocal.gallery.items.map((item, index) => ({
    src: galleryImages[index] || galleryImages[0],
    title: item.title,
    desc: item.desc
  }))

  const navigateGallery = (direction: 'prev' | 'next') => {
    if (!galleryEnlarged) return
    let newIndex = direction === 'prev' ? galleryEnlarged.index - 1 : galleryEnlarged.index + 1
    if (newIndex < 0) newIndex = surfaceGallery.length - 1
    if (newIndex >= surfaceGallery.length) newIndex = 0
    setGalleryEnlarged({ src: surfaceGallery[newIndex].src, index: newIndex })
  }
  
  const sections = [
    {
      id: 'scenario-trigger',
      title: tLocal.scenario.title,
      icon: <Target className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="bg-gradient-to-r from-amber-50 to-yellow-50 p-6 rounded-lg border border-amber-200">
          <p className="text-lg font-medium text-neutral-900 mb-4">
            {tLocal.scenario.mainText}
          </p>
          <div className="grid md:grid-cols-3 gap-4 mt-4">
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h4 className="font-semibold text-neutral-900">{tLocal.scenario.card1Title}</h4>
              <p className="text-sm text-neutral-600 mt-1">{tLocal.scenario.card1Desc}</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h4 className="font-semibold text-neutral-900">{tLocal.scenario.card2Title}</h4>
              <p className="text-sm text-neutral-600 mt-1">{tLocal.scenario.card2Desc}</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h4 className="font-semibold text-neutral-900">{tLocal.scenario.card3Title}</h4>
              <p className="text-sm text-neutral-600 mt-1">{tLocal.scenario.card3Desc}</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'overview',
      title: tLocal.overview.title,
      icon: <Sparkles className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>{tLocal.overview.p1}</p>
          <h3 className="text-lg font-semibold text-neutral-900 mt-6">{tLocal.overview.listTitle}</h3>
          <ul className="list-disc pl-6 space-y-2">
            {tLocal.overview.items.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>
      )
    },
    {
      id: 'visual-gallery',
      title: tLocal.gallery.title,
      icon: <Image className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>{tLocal.gallery.desc}</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {surfaceGallery.map((img, index) => (
              <button
                key={index}
                onClick={() => setGalleryEnlarged({ src: img.src, index })}
                className="text-left bg-white rounded-xl border border-neutral-200 hover:border-primary-400 overflow-hidden transition-all hover:shadow-lg group"
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
      id: 'lamination',
      title: tLocal.lamination.title,
      icon: <Eye className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <div className="grid md:grid-cols-3 gap-4 mt-4">
            <div className="bg-primary-50 p-4 rounded-lg">
              <h4 className="font-semibold text-primary-800 mb-2">{tLocal.lamination.glossTitle}</h4>
              <ul className="text-sm space-y-1">
                {tLocal.lamination.glossItems.map((item, idx) => (
                  <li key={idx}>• {item}</li>
                ))}
              </ul>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg">
              <h4 className="font-semibold text-blue-800 mb-2">{tLocal.lamination.matteTitle}</h4>
              <ul className="text-sm space-y-1">
                {tLocal.lamination.matteItems.map((item, idx) => (
                  <li key={idx}>• {item}</li>
                ))}
              </ul>
            </div>
            <div className="bg-green-50 p-4 rounded-lg">
              <h4 className="font-semibold text-green-800 mb-2">{tLocal.lamination.softTouchTitle}</h4>
              <ul className="text-sm space-y-1">
                {tLocal.lamination.softTouchItems.map((item, idx) => (
                  <li key={idx}>• {item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'special-effects',
      title: tLocal.specialEffects.title,
      icon: <Sparkles className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>{tLocal.specialEffects.intro}</p>
          
          <div className="grid md:grid-cols-2 gap-4 mt-4">
            <div className="bg-white border border-neutral-200 p-4 rounded-lg">
              <h4 className="font-semibold text-neutral-900 mb-2">{tLocal.specialEffects.spotUV.title}</h4>
              <p className="text-sm text-neutral-600 mb-2">{tLocal.specialEffects.spotUV.desc}</p>
              <ul className="text-sm space-y-1">
                {tLocal.specialEffects.spotUV.items.map((item, idx) => (
                  <li key={idx}>• {item}</li>
                ))}
              </ul>
            </div>
            <div className="bg-white border border-neutral-200 p-4 rounded-lg">
              <h4 className="font-semibold text-neutral-900 mb-2">{tLocal.specialEffects.foil.title}</h4>
              <p className="text-sm text-neutral-600 mb-2">{tLocal.specialEffects.foil.desc}</p>
              <ul className="text-sm space-y-1">
                {tLocal.specialEffects.foil.items.map((item, idx) => (
                  <li key={idx}>• {item}</li>
                ))}
              </ul>
            </div>
            <div className="bg-white border border-neutral-200 p-4 rounded-lg">
              <h4 className="font-semibold text-neutral-900 mb-2">{tLocal.specialEffects.emboss.title}</h4>
              <p className="text-sm text-neutral-600 mb-2">{tLocal.specialEffects.emboss.desc}</p>
              <ul className="text-sm space-y-1">
                {tLocal.specialEffects.emboss.items.map((item, idx) => (
                  <li key={idx}>• {item}</li>
                ))}
              </ul>
            </div>
            <div className="bg-white border border-neutral-200 p-4 rounded-lg">
              <h4 className="font-semibold text-neutral-900 mb-2">{tLocal.specialEffects.metallic.title}</h4>
              <p className="text-sm text-neutral-600 mb-2">{tLocal.specialEffects.metallic.desc}</p>
              <ul className="text-sm space-y-1">
                {tLocal.specialEffects.metallic.items.map((item, idx) => (
                  <li key={idx}>• {item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'comparison',
      title: tLocal.comparison.title,
      icon: <CheckCircle className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <div className="overflow-x-auto mt-4">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-neutral-100">
                  {tLocal.comparison.headers.map((h, idx) => (
                    <th key={idx} className="text-left p-3 border font-semibold">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {tLocal.comparison.rows.map((row, idx) => (
                  <tr key={idx}>
                    <td className="p-3 border font-medium">{row.finish}</td>
                    <td className="p-3 border">{row.look}</td>
                    <td className="p-3 border">{row.feel}</td>
                    <td className="p-3 border">{row.bestFor}</td>
                    <td className="p-3 border text-green-600">{row.cost}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )
    },
    {
      id: 'order',
      title: tLocal.order.title,
      icon: <Clock className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-white border border-neutral-200 p-4 rounded-lg text-center">
              <div className="text-3xl font-bold text-primary-600 mb-2">{tLocal.order.optionsVal}</div>
              <div className="text-sm text-neutral-600">{tLocal.order.optionsLabel}</div>
            </div>
            <div className="bg-white border border-neutral-200 p-4 rounded-lg text-center">
              <div className="text-3xl font-bold text-primary-600 mb-2">{tLocal.order.digitalVal}</div>
              <div className="text-sm text-neutral-600">{tLocal.order.digitalLabel}</div>
            </div>
            <div className="bg-white border border-neutral-200 p-4 rounded-lg text-center">
              <div className="text-3xl font-bold text-primary-600 mb-2">{tLocal.order.specialVal}</div>
              <div className="text-sm text-neutral-600">{tLocal.order.specialLabel}</div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'risk-hedge',
      title: tLocal.riskHedge.title,
      icon: <Shield className="h-5 w-5 text-amber-600" />,
      content: (
        <div className="bg-gradient-to-r from-amber-50 to-yellow-50 p-6 rounded-lg border border-amber-200">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-neutral-900">{tLocal.riskHedge.q1}</h4>
                  <p className="text-sm text-neutral-600">{tLocal.riskHedge.a1}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-neutral-900">{tLocal.riskHedge.q2}</h4>
                  <p className="text-sm text-neutral-600">{tLocal.riskHedge.a2}</p>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-neutral-900">{tLocal.riskHedge.q3}</h4>
                  <p className="text-sm text-neutral-600">{tLocal.riskHedge.a3}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-neutral-900">{tLocal.riskHedge.q4}</h4>
                  <p className="text-sm text-neutral-600">{tLocal.riskHedge.a4}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'decision-cta',
      title: tLocal.cta.title,
      icon: <Sparkles className="h-5 w-5 text-white" />,
      content: (
        <div className="bg-gradient-to-br from-amber-500 to-yellow-600 text-white p-8 rounded-xl">
          <h3 className="text-2xl font-bold mb-6 text-center">{tLocal.cta.subtitle}</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white/10 backdrop-blur p-6 rounded-lg text-center">
              <Calendar className="h-8 w-8 mx-auto mb-3" />
              <h4 className="font-semibold mb-2">{tLocal.cta.callTitle}</h4>
              <p className="text-sm text-white/80 mb-4">{tLocal.cta.callDesc}</p>
              <button onClick={openCalendly} className="w-full bg-white text-amber-600 px-4 py-2 rounded-lg font-semibold hover:bg-amber-50 transition cursor-pointer">
                {tLocal.cta.callBtn}
              </button>
            </div>
            <div className="bg-white/10 backdrop-blur p-6 rounded-lg text-center">
              <Mail className="h-8 w-8 mx-auto mb-3" />
              <h4 className="font-semibold mb-2">{tLocal.cta.emailTitle}</h4>
              <p className="text-sm text-white/80 mb-4">{tLocal.cta.emailDesc}</p>
              <a href="mailto:ryan@achievepack.com?subject=Surface Finish Quote" className="block w-full bg-white text-amber-600 px-4 py-2 rounded-lg font-semibold hover:bg-amber-50 transition">
                {tLocal.cta.emailBtn}
              </a>
            </div>
            <div className="bg-white/10 backdrop-blur p-6 rounded-lg text-center">
              <Download className="h-8 w-8 mx-auto mb-3" />
              <h4 className="font-semibold mb-2">{tLocal.cta.sampleTitle}</h4>
              <p className="text-sm text-white/80 mb-4">{tLocal.cta.sampleDesc}</p>
              <Link to="/contact" className="block w-full bg-white text-amber-600 px-4 py-2 rounded-lg font-semibold hover:bg-amber-50 transition">
                {tLocal.cta.sampleBtn}
              </Link>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'industry-scenarios',
      title: tLocal.scenarios.title,
      icon: <Factory className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-6">
          <p className="text-neutral-700">{tLocal.scenarios.intro}</p>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-gradient-to-br from-amber-50 to-yellow-50 p-5 rounded-xl border border-amber-200">
              <div className="flex items-center gap-2 mb-3">
                <ShoppingBag className="h-5 w-5 text-amber-600" />
                <h4 className="font-semibold text-amber-800">{tLocal.scenarios.c1Title}</h4>
              </div>
              <p className="text-sm text-amber-700 mb-3">{tLocal.scenarios.c1Desc}</p>
              <div className="text-xs text-amber-600 bg-amber-100 px-2 py-1 rounded inline-block">{tLocal.scenarios.c1Share}</div>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-5 rounded-xl border border-green-200">
              <div className="flex items-center gap-2 mb-3">
                <Sparkles className="h-5 w-5 text-green-600" />
                <h4 className="font-semibold text-green-800">{tLocal.scenarios.c2Title}</h4>
              </div>
              <p className="text-sm text-green-700 mb-3">{tLocal.scenarios.c2Desc}</p>
              <div className="text-xs text-green-600 bg-green-100 px-2 py-1 rounded inline-block">{tLocal.scenarios.c2Share}</div>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-5 rounded-xl border border-blue-200">
              <div className="flex items-center gap-2 mb-3">
                <Package className="h-5 w-5 text-blue-600" />
                <h4 className="font-semibold text-blue-800">{tLocal.scenarios.c3Title}</h4>
              </div>
              <p className="text-sm text-blue-700 mb-3">{tLocal.scenarios.c3Desc}</p>
              <div className="text-xs text-blue-600 bg-blue-100 px-2 py-1 rounded inline-block">{tLocal.scenarios.c3Share}</div>
            </div>
          </div>
          <div className="bg-neutral-50 p-4 rounded-lg mt-4">
            <h5 className="font-semibold text-neutral-800 mb-2">{tLocal.scenarios.storyTitle}</h5>
            <p className="text-sm text-neutral-600">{tLocal.scenarios.storyText}</p>
          </div>
        </div>
      )
    },
    {
      id: 'market-data',
      title: tLocal.marketData.title,
      icon: <BarChart3 className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-6">
          <p className="text-neutral-700">{tLocal.marketData.intro}</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-white border border-neutral-200 p-4 rounded-xl text-center">
              <div className="text-3xl font-bold text-primary-600 mb-1">{tLocal.marketData.m1Val}</div>
              <div className="text-xs text-neutral-500">{tLocal.marketData.m1Label}</div>
              <div className="flex items-center justify-center gap-1 mt-2 text-green-600 text-xs">
                <TrendingUp className="h-3 w-3" />
                <span>{tLocal.marketData.m1Badge}</span>
              </div>
            </div>
            <div className="bg-white border border-neutral-200 p-4 rounded-xl text-center">
              <div className="text-3xl font-bold text-blue-600 mb-1">{tLocal.marketData.m2Val}</div>
              <div className="text-xs text-neutral-500">{tLocal.marketData.m2Label}</div>
              <div className="flex items-center justify-center gap-1 mt-2 text-green-600 text-xs">
                <TrendingUp className="h-3 w-3" />
                <span>{tLocal.marketData.m2Badge}</span>
              </div>
            </div>
            <div className="bg-white border border-neutral-200 p-4 rounded-xl text-center">
              <div className="text-3xl font-bold text-green-600 mb-1">{tLocal.marketData.m3Val}</div>
              <div className="text-xs text-neutral-500">{tLocal.marketData.m3Label}</div>
              <div className="flex items-center justify-center gap-1 mt-2 text-green-600 text-xs">
                <TrendingUp className="h-3 w-3" />
                <span>{tLocal.marketData.m3Badge}</span>
              </div>
            </div>
            <div className="bg-white border border-neutral-200 p-4 rounded-xl text-center">
              <div className="text-3xl font-bold text-amber-600 mb-1">{tLocal.marketData.m4Val}</div>
              <div className="text-xs text-neutral-500">{tLocal.marketData.m4Label}</div>
              <div className="flex items-center justify-center gap-1 mt-2 text-green-600 text-xs">
                <TrendingUp className="h-3 w-3" />
                <span>{tLocal.marketData.m4Badge}</span>
              </div>
            </div>
          </div>
          <div className="bg-blue-50 p-4 rounded-lg">
            <h5 className="font-semibold text-blue-800 mb-2">{tLocal.marketData.insightsTitle}</h5>
            <p className="text-sm text-blue-700">{tLocal.marketData.insightsText}</p>
          </div>
        </div>
      )
    },
    {
      id: 'material-comparison',
      title: tLocal.detailedComparison.title,
      icon: <ArrowLeftRight className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-6">
          <p className="text-neutral-700">{tLocal.detailedComparison.intro}</p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-neutral-100">
                  {tLocal.detailedComparison.headers.map((header, idx) => (
                    <th key={idx} className="text-left p-3 border font-semibold">{header}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {tLocal.detailedComparison.rows.map((row, idx) => (
                  <tr key={idx} className="hover:bg-neutral-50">
                    <td className="p-3 border font-medium">{row.name}</td>
                    <td className="p-3 border">{row.look}</td>
                    <td className="p-3 border">{row.feel}</td>
                    <td className="p-3 border">{row.suitable}</td>
                    <td className="p-3 border text-green-600 font-medium">{row.cost}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="bg-amber-50 p-4 rounded-lg">
            <h5 className="font-semibold text-amber-800 mb-2">{tLocal.detailedComparison.guideTitle}</h5>
            <p className="text-sm text-amber-700">{tLocal.detailedComparison.guideText}</p>
          </div>
        </div>
      )
    }
  ]

  return (
    <>
      <SEOPageLayout
        heroBgColor="#1f2937"
        title={tLocal.seo.title}
        description={tLocal.seo.description}
        keywords={tLocal.seo.keywords}
        canonicalUrl={tLocal.seo.canonicalUrl}
        heroTitle={tLocal.seo.heroTitle}
        heroSubtitle={tLocal.seo.heroSubtitle}
        heroImage="/imgs/seo-photos/a_finishing_options_premium_showcase_3613860.webp"
        heroImageAlt={tLocal.seo.heroImageAlt}
        introSummary={tLocal.seo.introSummary}
        sections={sections}
        faqs={tLocal.faqs}
        relatedLinks={tLocal.relatedLinks}
        ctaTitle={tLocal.cta.title}
        ctaDescription={tLocal.cta.subtitle}
        ctaButtonText={tLocal.cta.callBtn}
      />
      
      {/* Gallery Lightbox Modal */}
      {galleryEnlarged && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4" onClick={() => setGalleryEnlarged(null)}>
          <button onClick={() => setGalleryEnlarged(null)} className="absolute top-4 right-4 text-white hover:text-neutral-300 transition"><X className="h-8 w-8" /></button>
          <button onClick={(e) => { e.stopPropagation(); navigateGallery('prev'); }} className="absolute left-4 text-white hover:text-neutral-300 transition p-2"><ChevronLeft className="h-10 w-10" /></button>
          <img src={galleryEnlarged.src} alt={surfaceGallery[galleryEnlarged.index]?.title || 'Enlarged view'} className="max-w-full max-h-[80vh] object-contain" onClick={(e) => e.stopPropagation()} />
          <button onClick={(e) => { e.stopPropagation(); navigateGallery('next'); }} className="absolute right-4 text-white hover:text-neutral-300 transition p-2"><ChevronRight className="h-10 w-10" /></button>
          <div className="absolute bottom-4 text-center text-white max-w-xl px-4">
            <p className="text-lg font-semibold">{surfaceGallery[galleryEnlarged.index]?.title}</p>
            <p className="text-sm text-neutral-300">{surfaceGallery[galleryEnlarged.index]?.desc}</p>
            <p className="text-xs mt-2 text-neutral-400">{galleryEnlarged.index + 1} / {surfaceGallery.length}</p>
          </div>
        </div>
      )}
    </>
  )
}

export default SurfaceFinishPage
