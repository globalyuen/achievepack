import React, { useState } from 'react'
import { Lock, RefreshCw, Package, CheckCircle, Clock, Target, Shield, Calendar, Mail, Download, X, ChevronLeft, ChevronRight, Image, Factory, BarChart3, ArrowLeftRight, TrendingUp, ShoppingBag, Sparkles } from 'lucide-react'
import SEOPageLayout from '../../components/SEOPageLayout'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { useCalendly } from '../../contexts/CalendlyContext'

const recloseGalleryImages = [
  '/imgs/reclose/ads/a_reclosure_options_kv_product_photo_7983949.webp',
  '/imgs/reclose/ads/a_reclosure_four_quadrant_overview_3481316.webp',
  '/imgs/reclose/ads/a_reclosure_decision_guide_7052390.webp',
  '/imgs/reclose/ads/a_reclosure_value_proposition_0710400.webp',
  '/imgs/reclose/ads/a_reclosure_comparison_scene_9769566.webp',
  '/imgs/reclose/ads/a_presstoclose_closure_detail_5742103.webp',
  '/imgs/reclose/ads/a_spout_closure_closeup_detail_2705813.webp',
  '/imgs/reclose/ads/a_tintie_coffee_pouch_correct_4114906.webp',
  '/imgs/store/additional/valve.webp',
]

const localTranslations = {
  en: {
    seo: {
      title: "Reclosure Options | Eco-Friendly Flexible Packaging | Achieve Pack",
      description: "Sustainable reclosure solutions for flexible packaging. Press-to-close zippers, slider zippers, spout caps, tin-ties, and child-resistant options for eco-friendly pouches.",
      keywords: ['reclosable pouches', 'zipper bags', 'spout pouch', 'resealable packaging', 'child resistant packaging', 'tin tie bags'],
      canonicalUrl: "https://achievepack.com/features/reclosure-options",
      heroTitle: "Reclosure Options for Eco-Friendly Pouches",
      heroSubtitle: "Keep products fresh and consumers happy with our range of press-to-close zippers, slider zippers, spout caps, tin-ties, and child-resistant closures.",
      heroImageAlt: "Various reclosure options for eco-friendly pouches",
      introSummary: "Achieve Pack offers a wide range of resealable zipper and spout options for custom pouches. Extend product shelf life, enhance user convenience, and meet compliance standards."
    },
    scenario: {
      title: "Is This Page For You?",
      mainText: "If your product needs to stay fresh after opening or requires child-resistant packaging—you're in the right place.",
      card1Title: "Snack & Pet Brands",
      card1Desc: "Resealable zippers for freshness",
      card2Title: "Baby & Sauce Brands",
      card2Desc: "Spout pouches with caps",
      card3Title: "Cannabis & Pharma",
      card3Desc: "Child-resistant certified closures"
    },
    overview: {
      title: "Reclosure Options for Eco-Friendly Pouches",
      p1: "Keep products fresh and consumers happy with our range of sustainable reclosure solutions. From press-to-close zippers to child-resistant caps, Achieve Pack offers reclosure options that maintain freshness while supporting your eco-friendly positioning.",
      listTitle: "Available Reclosure Types:",
      items: [
        "Press-to-close zippers – Simple, reliable sealing for everyday products",
        "Slider zippers – Easy one-hand operation for convenience",
        "Spout caps – Pour control for liquids and powders",
        "Tin-ties – Classic look for coffee and artisan products",
        "Child-resistant closures – Safety-first for cannabis and pharmaceuticals"
      ]
    },
    gallery: {
      title: "Reclosure Solutions Gallery",
      desc: "Explore our range of reclosure options. Click any image to enlarge:",
      items: [
        { title: 'Reclosure Options Overview', desc: 'Complete range of resealable closure solutions for flexible packaging' },
        { title: 'Closure Categories', desc: 'Four main closure types: zippers, spouts, tin-ties, and child-resistant' },
        { title: 'Closure Selection Guide', desc: 'How to choose the right closure for your specific product needs' },
        { title: 'Closure Benefits', desc: 'Consumer convenience and extended product freshness advantages' },
        { title: 'Closure Comparison', desc: 'Side-by-side comparison of different reclosure mechanisms' },
        { title: 'Press-to-Close Zipper', desc: 'Standard resealable zipper for easy open and close operations' },
        { title: 'Spout Cap Detail', desc: 'Screw cap spout for controlled pouring of liquids and sauces' },
        { title: 'Tin Tie Closure', desc: 'Classic tin tie for coffee bags and artisan bakery products' },
        { title: 'Degassing Valve', desc: 'One-way valve for fresh roasted coffee and fermented products' }
      ]
    },
    zippers: {
      title: "Zipper Options",
      pressTitle: "Press-to-Close Zipper",
      pressItems: [
        "Most economical option",
        "500+ open/close cycles",
        "Available in all pouch formats",
        "Clear or colored options"
      ],
      sliderTitle: "Slider Zipper",
      sliderItems: [
        "Premium one-hand operation",
        "Tactile \"click\" confirmation",
        "Ideal for snacks and pet food",
        "Higher perceived value"
      ],
      crTitle: "Child-Resistant Zipper",
      crItems: [
        "ASTM D3475 certified",
        "Required for cannabis packaging",
        "Push-and-slide mechanism",
        "Senior-friendly (16 CFR 1700)"
      ],
      velcroTitle: "Velcro-Style Zipper",
      velcroItems: [
        "Ultra-quiet opening",
        "Soft-touch feel",
        "Great for premium products",
        "1000+ cycle durability"
      ]
    },
    spouts: {
      title: "Spout & Cap Options",
      intro: "For liquids, sauces, and pourable products:",
      items: [
        'Standard Screw Cap (8.6mm)',
        'Wide Mouth Cap (15mm)',
        'Flip-Top Dispensing Cap',
        'Child-Resistant Cap',
        'Tamper-Evident Seal',
        'Corner Spout (Space-Saving)',
        'Center Spout (Pour Control)',
        'Pump Dispenser Cap',
        'Squeeze & Measure Cap'
      ]
    },
    applications: {
      title: "Product Applications",
      headers: ["Product Type", "Recommended Closure", "Why"],
      rows: [
        { type: "Coffee Beans", closure: "Tin-tie + Valve", why: "Classic look, degassing" },
        { type: "Snacks & Chips", closure: "Slider Zipper", why: "Easy one-hand access" },
        { type: "Pet Food", closure: "Press-to-Close", why: "Cost-effective, durable" },
        { type: "Baby Food Puree", closure: "Screw Cap Spout", why: "Controlled dispensing" },
        { type: "Cannabis", closure: "Child-Resistant", why: "Regulatory compliance" },
        { type: "Sauces", closure: "Flip-Top Spout", why: "Easy squeeze & pour" }
      ]
    },
    order: {
      title: "Order Information",
      val1: "500", label1: "Min Order (Zippers)",
      val2: "1,000", label2: "Min Order (Spouts)",
      val3: "5+", label3: "Closure Options"
    },
    riskHedge: {
      title: "Still Not Sure? We Have Answers",
      q1: "Are zippers eco-friendly?", a1: "Yes, mono-PE zippers recyclable, PLA zippers compostable",
      q2: "Need child-resistant?", a2: "ASTM D3475 certified options available",
      q3: "Spout vs zipper cost?", a3: "Spouts add 20-40%, we help you decide",
      q4: "Can I test samples?", a4: "Free samples for evaluation"
    },
    cta: {
      title: "Ready to Get Started?",
      subtitle: "Choose How You'd Like to Connect",
      callTitle: "Book a Call", callDesc: "30-min free consultation", callBtn: "Schedule Now",
      emailTitle: "Email Quote", emailDesc: "Get response within 24hrs", emailBtn: "Send Email",
      sampleTitle: "Free Samples", sampleDesc: "Test closures first", sampleBtn: "Request Samples"
    },
    scenarios: {
      title: "Industry Applications",
      intro: "Different product types have unique resealable functionality requirements. Choosing the right closure type is key to enhancing the consumer experience.",
      c1Title: "Snacks & Pet Food",
      c1Desc: "Slider zippers and press-to-close zippers are essential for maintaining the freshness of snacks and pet food after opening.",
      c1Share: "Market Share: 45%",
      c2Title: "Baby Food & Puree",
      c2Desc: "Spout pouch designs are ideal for baby purees, squeeze foods, and liquid products, offering controlled dispensing.",
      c2Share: "Market Share: 30%",
      c3Title: "Cannabis & Pharma",
      c3Desc: "Child-resistant locks are mandatory regulatory requirements for cannabis and pharmaceutical products to ensure safety.",
      c3Share: "Market Share: 25%",
      storyTitle: "Customer Success Story",
      storyText: "「After upgrading from a standard press-to-close zipper to a premium slider zipper, our pet snack repurchase rate improved by 25%. Customer feedback frequently highlighted how much they loved the single-hand operation.」— Pet Food Brand Manager"
    },
    marketData: {
      title: "Market Data & Intelligence",
      intro: "The market for resealable packaging is experiencing continued growth as consumers place an increasingly high focus on convenience and prolonged product freshness.",
      m1Val: "78%", m1Label: "Consumer Preference for Resealable Layouts", m1Badge: "Steady Growth",
      m2Val: "$8.5B", m2Label: "Resealable Packaging Market Size", m2Badge: "6.2% YoY Growth",
      m3Val: "35%", m3Label: "Improvement in Brand Perception", m3Badge: "Stable",
      m4Val: "500+", m4Label: "Estimated Open/Close Cycles", m4Badge: "High Durability",
      insightsTitle: "Market Trend Insights",
      insightsText: "Consumers consistently prioritize convenience and ease of use in packaging. Slider zippers are becoming a favorite due to their tactile feedback and single-handed operation feature, expected to reach a 40% market share by 2026."
    },
    detailedComparison: {
      title: "Closure Comparison",
      intro: "A detailed performance comparison of different resealable options to help you choose the best solution for your business.",
      headers: ["Closure Type", "Convenience", "Sealing Performance", "Suitable Scenarios", "Cost Impact"],
      rows: [
        { type: "Press-to-Close", conv: "★★★", seal: "★★★★", scenario: "Snacks, Pet Food, Dry Goods", cost: "+5%" },
        { type: "Slider Zipper", conv: "★★★★★", seal: "★★★★", scenario: "Premium Snacks, Large Pet Food Bags", cost: "+15%" },
        { type: "Spout Cap", conv: "★★★★", seal: "★★★★★", scenario: "Baby Food, Sauces, Liquids", cost: "+30%" },
        { type: "Tin-Tie", conv: "★★", seal: "★★★", scenario: "Coffee Beans, Baked Goods", cost: "+10%" }
      ],
      guideTitle: "Selection Guide",
      guideText: "When choosing a reclosure method, we recommend considering your product's physical state, usage scenario, and target demographic. We provide free product samples to help you verify and choose the optimal solution."
    },
    faqs: [
      {
        question: "Are your zippers recyclable or compostable?",
        answer: "Our mono-PE zippers are fully recyclable with PE pouches. For compostable pouches, we offer PLA-based zippers that meet EN 13432 standards. The zipper material always matches the pouch material for proper end-of-life processing."
      },
      {
        question: "What is the child-resistant certification for cannabis packaging?",
        answer: "Our child-resistant pouches are certified to ASTM D3475 standards and comply with 16 CFR 1700 for senior accessibility. We provide COC (Certificate of Compliance) documentation for regulatory submissions."
      },
      {
        question: "Can I have a tear notch AND a zipper?",
        answer: "Yes, most customers combine a tear notch for easy opening with a zipper for reclosure. The tear notch is positioned above the zipper line so the reseal functionality remains intact after opening."
      },
      {
        question: "Do spout pouches cost more than zipper pouches?",
        answer: "Spout pouches typically cost 20-40% more than zipper pouches due to the spout component and additional sealing process. However, they offer unique functionality for liquid and semi-liquid products that zippers can't provide."
      }
    ],
    relatedLinks: [
      { title: "Spout Pouches", url: "/packaging/spout-pouches", description: "Complete spout pouch solutions" },
      { title: "Stand-Up Pouches", url: "/packaging/stand-up-pouches", description: "Most popular zipper format" },
      { title: "Surface Finish Options", url: "/features/surface-finish", description: "Enhance your pouch appearance" }
    ]
  },
  'zh-tw': {
    seo: {
      title: "重新密封選項 | 環保軟包裝袋 | Achieve Pack",
      description: "適用於軟包裝的永續重新密封解決方案。提供按壓式夾鏈、滑塊夾鏈、吸嘴蓋、鐵芯條（Tin-tie）及防兒童開啟等環保袋封口選項。",
      keywords: ['可重複密封包裝袋', '夾鏈袋', '吸嘴袋', '密封包裝', '防兒童開啟包裝', '鐵條封口袋'],
      canonicalUrl: "https://achievepack.com/features/reclosure-options",
      heroTitle: "環保軟包裝袋重新密封選項",
      heroSubtitle: "運用按壓式夾鏈、滑塊夾鏈、吸嘴蓋、鐵芯條與防兒童開啟封口，保持產品新鮮與安全。",
      heroImageAlt: "環保軟包裝袋的各式重新密封選項展示",
      introSummary: "Achieve Pack 為客製化包裝袋提供豐富的可重複密封夾鏈與吸嘴選擇。延長產品保質期、提升消費便利性，並滿足法規合規標準。"
    },
    scenario: {
      title: "這頁適合您嗎？",
      mainText: "如果您的產品需要開袋後保持新鮮或需要防兒童開啟包裝——您來對地方了。",
      card1Title: "零食與寵物食品品牌",
      card1Desc: "可重複密封夾鏈保持新鮮",
      card2Title: "嬰兒食品與醬料品牌",
      card2Desc: "帶蓋吸嘴袋方便擠壓傾倒",
      card3Title: "漢麻與藥品品牌",
      card3Desc: "通過認證的防兒童開啟封口"
    },
    overview: {
      title: "環保軟包裝袋重新密封選項",
      p1: "透過我們的系列永續封口解決方案，讓產品保持新鮮並提升消費者滿意度。從按壓式夾鏈到防兒童開啟蓋，Achieve Pack 提供兼具保鮮功能與環保定位的豐富密封選擇。",
      listTitle: "可用的重新密封類型：",
      items: [
        "按壓式夾鏈 – 日常產品簡便可靠的密封",
        "滑塊夾鏈 – 方便單手操作的滑動體驗",
        "吸嘴蓋 – 適用於液體與粉末的精準傾倒控制",
        "鐵芯條（Tin-ties） – 適用於咖啡與手工烘焙產品的經典外觀",
        "防兒童開啟封口 – 適用於漢麻與藥品的安全第一防護"
      ]
    },
    gallery: {
      title: "重新密封解決方案展示廊",
      desc: "探索我們可重複密封的豐富選項。點擊任意圖片可放大檢視：",
      items: [
        { title: '重新密封選項總覽', desc: '用於軟包裝的全系列可重複密封解決方案' },
        { title: '封口分類', desc: '四大主要封口類型：夾鏈、吸嘴、鐵芯條與防兒童開啟封口' },
        { title: '封口選擇指南', desc: '如何針對您具體的產品需求選擇最適封口' },
        { title: '封口優勢效益', desc: '提升消費者便利性與延長產品保鮮期優勢' },
        { title: '封口對比分析', desc: '不同重新密封機制橫向比較' },
        { title: '按壓式密封夾鏈', desc: '標準可重複密封夾鏈，開合簡便' },
        { title: '吸嘴蓋細節', desc: '螺紋蓋吸嘴，精準控制液體與醬料傾倒' },
        { title: '鐵芯條封口', desc: '經典鐵芯條，適用於咖啡袋與手工麵包烘焙產品' },
        { title: '單向排氣閥', desc: '適用於新鮮烘焙咖啡與發酵產品的單向排氣閥' }
      ]
    },
    zippers: {
      title: "夾鏈選項",
      pressTitle: "按壓式夾鏈",
      pressItems: [
        "最具經濟效益的選擇",
        "500次以上重複開合壽命",
        "適用於所有袋型格式",
        "提供透明或彩色樣式"
      ],
      sliderTitle: "滑塊夾鏈",
      sliderItems: [
        "高端單手操作體驗",
        "清晰的手感「喀嗒」確認",
        "非常適合零食與寵物食品",
        "提升包裝品質感知"
      ],
      crTitle: "防兒童開啟夾鏈",
      crItems: [
        "通過 ASTM D3475 安全認證",
        "漢麻與藥品包裝必備法規要求",
        "按壓並滑動開啟機制",
        "長者友善設計 (16 CFR 1700)"
      ],
      velcroTitle: "魔鬼氈風格夾鏈",
      velcroItems: [
        "超靜音開合體驗",
        "柔軟觸覺體驗",
        "非常適合高端精緻產品",
        "1000次以上耐用壽命"
      ]
    },
    spouts: {
      title: "吸嘴與蓋子選項",
      intro: "適用於液體、醬料與可傾倒產品：",
      items: [
        '標準螺紋蓋 (8.6mm)',
        '寬口蓋 (15mm)',
        '掀蓋式分配蓋',
        '防兒童開啟蓋',
        '防篡改防偽封條',
        '角落吸嘴 (省空間設計)',
        '中央吸嘴 (傾倒控制)',
        '泵浦按壓蓋',
        '擠壓計量蓋'
      ]
    },
    applications: {
      title: "產品應用建議",
      headers: ["產品類型", "推薦封口", "選用原因"],
      rows: [
        { type: "咖啡豆", closure: "鐵芯條 + 排氣閥", why: "經典復古外觀、單向排氣保鮮" },
        { type: "零食與洋洋片", closure: "滑塊夾鏈", why: "方便單手拿取與密合" },
        { type: "寵物食品", closure: "按壓式夾鏈", why: "具成本效益且結實耐用" },
        { type: "嬰兒泥狀食品", closure: "螺紋蓋吸嘴", why: "精準控制擠壓與衛生保存" },
        { type: "漢麻與藥品", closure: "防兒童開啟夾鏈", why: "符合法律安全監管標準" },
        { type: "醬料與調味汁", closure: "掀蓋式吸嘴", why: "方便擠壓傾倒與重複使用" }
      ]
    },
    order: {
      title: "訂購資訊",
      val1: "500 個", label1: "最低起訂量 (夾鏈袋)",
      val2: "1,000 個", label2: "最低起訂量 (吸嘴袋)",
      val3: "5+ 種", label3: "重新密封選項"
    },
    riskHedge: {
      title: "仍有疑問？我們為您解答",
      q1: "夾鏈環保嗎？", a1: "是的，單一PE夾鏈可回收，PLA夾鏈可完全降解",
      q2: "需要防兒童開啟認證嗎？", a2: "提供通過 ASTM D3475 認證的選項",
      q3: "吸嘴與夾鏈成本差異？", a3: "吸嘴約增加 20-40% 成本，我們可協助評估",
      q4: "可以測試樣品嗎？", a4: "提供免費樣品供功能評估"
    },
    cta: {
      title: "準備好開始了嗎？",
      subtitle: "選擇您希望的聯繫方式",
      callTitle: "預約諮詢", callDesc: "30分鐘免費專業諮詢", callBtn: "立即預約",
      emailTitle: "郵件報價", emailDesc: "24小時內獲得專業回覆", emailBtn: "發送郵件",
      sampleTitle: "免費索樣", sampleDesc: "先親自測試密封組件功能", sampleBtn: "索取樣品"
    },
    scenarios: {
      title: "產業應用場景",
      intro: "不同產品類型對可重複密封功能有獨特需求，選擇合適的封口類型是提升消費者體驗的關鍵。",
      c1Title: "零食與寵物食品",
      c1Desc: "滑塊夾鏈與按壓夾鏈對於開封後保持零食與寵物食品新鮮至關重要。",
      c1Share: "市場佔有率：45%",
      c2Title: "嬰兒食品與果泥",
      c2Desc: "吸嘴袋設計非常適合嬰兒果泥、擠壓食品與液體產品，提供精準控制與便利性。",
      c2Share: "市場佔有率：30%",
      c3Title: "漢麻與藥品",
      c3Desc: "防兒童鎖是漢麻與藥品強制性的法規安全要求，確保用藥與兒童安全。",
      c3Share: "市場佔有率：25%",
      storyTitle: "客戶成功案例",
      storyText: "「從標準按壓夾鏈升級為高端滑塊夾鏈後，我們的寵物零食重複購買率提升了25%。客戶反饋經常提到他們多麼喜歡單手操作的便利。」— 寵物食品品牌經理"
    },
    marketData: {
      title: "市場數據與情報",
      intro: "隨著消費者對便利性與延長產品保鮮期的高度關注，可重複密封包裝市場持續快速成長。",
      m1Val: "78%", m1Label: "消費者偏好可重複密封包裝設計", m1Badge: "穩定成長中",
      m2Val: "$85億", m2Label: "可重複密封包裝全球市場規模", m2Badge: "年成長率 6.2%",
      m3Val: "35%", m3Label: "提升品牌感知的效果顯著", m3Badge: "維持穩定",
      m4Val: "500+", m4Label: "預估夾鏈開合耐用次數", m4Badge: "高耐用度",
      insightsTitle: "市場趨勢洞察",
      insightsText: "消費者始終將包裝的便利性與易用性放在首位。滑塊夾鏈因具備明確的觸覺反饋與單手操作特性，正成為熱門選擇，預計至2026年市場份額將達到40%。"
    },
    detailedComparison: {
      title: "封口方式詳細對比",
      intro: "不同可重複密封選項的詳細性能對比，協助您為業務選擇最佳解決方案。",
      headers: ["封口類型", "便利程度", "密封保鮮性能", "適用場景", "成本影響"],
      rows: [
        { type: "按壓式夾鏈", conv: "★★★", seal: "★★★★", scenario: "零食、寵物食品、乾貨", cost: "+5%" },
        { type: "滑塊夾鏈", conv: "★★★★★", seal: "★★★★", scenario: "高端零食、大容量寵物食品袋", cost: "+15%" },
        { type: "吸嘴蓋", conv: "★★★★", seal: "★★★★★", scenario: "嬰兒食品、醬料、液體", cost: "+30%" },
        { type: "鐵芯條（Tin-Tie）", conv: "★★", seal: "★★★", scenario: "咖啡豆、烘焙食品", cost: "+10%" }
      ],
      guideTitle: "選擇指南",
      guideText: "選擇重新密封方式時，建議綜合考量產品形態、使用場景與目標受眾。我們提供免費產品樣品，協助您親自驗證並選擇最佳方案。"
    },
    faqs: [
      {
        question: "你們的夾鏈是可以回收或可完全降解的嗎？",
        answer: "我們的單一 PE 夾鏈完全可隨 PE 袋一同回收。針對可降解包裝袋，我們提供符合 EN 13432 標準的 PLA 基材夾鏈。夾鏈材質始終與袋體材質保持一致，以確保廢棄後處理的合規性。"
      },
      {
        question: "漢麻包裝的防兒童開啟認證標準是什麼？",
        answer: "我們的防兒童開啟包裝袋通過 ASTM D3475 標準認證，並符合 16 CFR 1700 長者使用便利規範。我們提供完整 COC 合格證書供監管申報使用。"
      },
      {
        question: "我可以同時採用易撕缺口與密封夾鏈嗎？",
        answer: "可以！絕大多數客戶都會結合易撕缺口（方便首次撕開）與夾鏈（方便後續重複密封）。易撕缺口會設計在夾鏈上方，撕開後不影響夾鏈的密封功能。"
      },
      {
        question: "吸嘴袋的成本是否高於傳統夾鏈袋？",
        answer: "由於吸嘴組件及額外的熱封加工工序，吸嘴袋的成本通常比夾鏈袋高出 20-40%。不過，吸嘴能為液體與半流體產品提供夾鏈無法替代的傾倒控制便利。"
      }
    ],
    relatedLinks: [
      { title: "吸嘴袋解決方案", url: "/packaging/spout-pouches", description: "完整的吸嘴軟包裝解決方案" },
      { title: "直立拉鍊袋", url: "/packaging/stand-up-pouches", description: "最熱門的夾鏈袋型格式" },
      { title: "表面處理選項", url: "/features/surface-finish", description: "提升您包裝袋的外觀視覺質感" }
    ]
  },
  fr: {
    seo: {
      title: "Options de Refermeture | Sachets Écologiques | Achieve Pack",
      description: "Solutions de refermeture durables pour emballages flexibles. Zips à pression, zips à curseur, bouchons à bec, barrettes tin-tie et fermetures sécurité enfant.",
      keywords: ['sachets refermables', 'sachets zip', 'sachet avec bouchon', 'emballage refermable', 'emballage securite enfant', 'sachets tin tie'],
      canonicalUrl: "https://achievepack.com/features/reclosure-options",
      heroTitle: "Options de Refermeture pour Sachets Écoresponsables",
      heroSubtitle: "Conservez la fraîcheur et la sécurité de vos produits grâce aux fermetures zip, zips à curseur, bouchons à bec, tin-ties et fermetures sécurité enfant.",
      heroImageAlt: "Diverses options de refermeture pour sachets écologiques",
      introSummary: "Achieve Pack propose une vaste gamme d'options de fermetures éclair et de becs verseurs pour sachets personnalisés. Prolongez la durée de conservation, améliorez le confort d'utilisation et respectez les normes."
    },
    scenario: {
      title: "Cette page est-elle pour vous ?",
      mainText: "Si votre produit doit rester frais après ouverture ou nécessite un emballage avec sécurité enfant, vous êtes au bon endroit.",
      card1Title: "Snacks & Aliments Animaux",
      card1Desc: "Fermetures éclair refermables pour préserver la fraîcheur",
      card2Title: "Aliments Bébé & Sauces",
      card2Desc: "Sachets à bec verseur avec bouchon",
      card3Title: "Cannabis & Pharmacie",
      card3Desc: "Fermetures certifiées sécurité enfant"
    },
    overview: {
      title: "Options de Refermeture pour Sachets Écologiques",
      p1: "Maintenez la fraîcheur de vos produits et la satisfaction de vos clients grâce à nos solutions de refermeture durables. Du zip à pression aux bouchons sécurité enfant, Achieve Pack propose des options préservant la fraîcheur tout en soutenant votre positionnement écologique.",
      listTitle: "Types de Refermeture Disponibles :",
      items: [
        "Fermetures zip à pression – Fermeture simple et fiable au quotidien",
        "Fermetures zip à curseur – Utilisation facile à une main",
        "Bouchons à bec verseur – Contrôle de l'écoulement pour liquides et poudres",
        "Barrettes métalliques (Tin-ties) – Look classique pour le café et l'artisanat",
        "Fermetures sécurité enfant – La sécurité avant tout pour le cannabis et la pharmacie"
      ]
    },
    gallery: {
      title: "Galerie des Solutions de Refermeture",
      desc: "Explorez notre gamme d'options de refermeture. Cliquez sur une image pour l'agrandir :",
      items: [
        { title: 'Aperçu des Options de Refermeture', desc: 'Gamme complète de solutions de fermeture refermables pour emballages flexibles' },
        { title: 'Catégories de Fermetures', desc: 'Quatre types principaux : zips, becs verseurs, tin-ties et sécurité enfant' },
        { title: 'Guide de Sélection des Fermetures', desc: 'Comment choisir la fermeture adaptée aux besoins de votre produit' },
        { title: 'Avantages de la Refermeture', desc: 'Confort pour le consommateur et conservation prolongée de la fraîcheur' },
        { title: 'Comparatif des Fermetures', desc: 'Comparaison côte à côte des différents mécanismes de refermeture' },
        { title: 'Zip à Pression Standard', desc: 'Fermeture éclair refermable standard pour une ouverture et fermeture faciles' },
        { title: 'Détail Bouchon à Bec', desc: 'Bouchon à vis pour un versement contrôlé des liquides et sauces' },
        { title: 'Fermeture Barrettes Tin Tie', desc: 'Attache tin-tie classique pour sachets de café et produits de boulangerie' },
        { title: 'Valve de Dégazage', desc: 'Valve unidirectionnelle pour café fraîchement torréfié et produits fermentés' }
      ]
    },
    zippers: {
      title: "Options de Zip Refermable",
      pressTitle: "Zip à Pression",
      pressItems: [
        "Option la plus économique",
        "Plus de 500 cycles d'ouverture/fermeture",
        "Disponible sur tous les formats de sachets",
        "Options transparentes ou colorées"
      ],
      sliderTitle: "Zip à Curseur (Slider)",
      sliderItems: [
        "Utilisation haut de gamme à une main",
        "Confirmation tactile du « clic »",
        "Idéal pour les snacks et la nourriture pour animaux",
        "Valeur perçue supérieure"
      ],
      crTitle: "Zip Sécurité Enfant",
      crItems: [
        "Certifié ASTM D3475",
        "Requis pour l'emballage du cannabis",
        "Mécanisme appuyer-glisser",
        "Adapté aux seniors (16 CFR 1700)"
      ],
      velcroTitle: "Zip Style Velcro",
      velcroItems: [
        "Ouverture ultra-silencieuse",
        "Toucher doux et agréable",
        "Parfait pour les produits haut de gamme",
        "Durabilité supérieure à 1 000 cycles"
      ]
    },
    spouts: {
      title: "Options de Becs Verseurs et Bouchons",
      intro: "Pour liquides, sauces et produits versables :",
      items: [
        'Bouchon à vis standard (8,6 mm)',
        'Bouchon à large ouverture (15 mm)',
        'Bouchon clapet (Flip-Top)',
        'Bouchon sécurité enfant',
        'Sceau d\'inviolabilité',
        'Bec d\'angle (Gain d\'espace)',
        'Bec central (Contrôle du versage)',
        'Bouchon pompe',
        'Bouchon doseur à pression'
      ]
    },
    applications: {
      title: "Applications Produits",
      headers: ["Type de Produit", "Fermeture Recommandée", "Pourquoi"],
      rows: [
        { type: "Café en Grains", closure: "Tin-tie + Valve", why: "Look classique, dégazage garanti" },
        { type: "Snacks & Chips", closure: "Zip à Curseur", why: "Accès facile d'une seule main" },
        { type: "Nourriture Animaux", closure: "Zip à Pression", why: "Économique, solide et durable" },
        { type: "Purée pour Bébé", closure: "Bouchon à Bec à Vis", why: "Dosage propre et contrôlé" },
        { type: "Cannabis / Pharma", closure: "Sécurité Enfant", why: "Conformité réglementaire" },
        { type: "Sauces et Condiments", closure: "Bec Verseur à Clapet", why: "Facile à presser et verser" }
      ]
    },
    order: {
      title: "Informations de Commande",
      val1: "500", label1: "Commande Min. (Sachets Zip)",
      val2: "1 000", label2: "Commande Min. (Sachets à Bec)",
      val3: "5+", label3: "Options de Refermeture"
    },
    riskHedge: {
      title: "Encore un doute ? Nous avons les réponses",
      q1: "Les zips sont-ils écologiques ?", a1: "Oui, zips mono-PE recyclables, zips PLA compostables",
      q2: "Besoin d'une sécurité enfant ?", a2: "Options certifiées ASTM D3475 disponibles",
      q3: "Différence de coût bec vs zip ?", a3: "Les becs ajoutent 20 à 40 %, nous vous guidons",
      q4: "Puis-je tester des échantillons ?", a4: "Échantillons gratuits pour évaluation"
    },
    cta: {
      title: "Prêt à commencer ?",
      subtitle: "Choisissez comment vous souhaitez échanger",
      callTitle: "Planifier un Appel", callDesc: "Consultation gratuite de 30 min", callBtn: "Réserver",
      emailTitle: "Devis par E-mail", emailDesc: "Réponse sous 24h", emailBtn: "Envoyer un E-mail",
      sampleTitle: "Échantillons Gratuits", sampleDesc: "Testez les fermetures d'abord", sampleBtn: "Demander des Échantillons"
    },
    scenarios: {
      title: "Applications par Secteur",
      intro: "Chaque type de produit requiert des fonctionnalités de refermeture spécifiques. Choisir la bonne fermeture est essentiel pour améliorer l'expérience utilisateur.",
      c1Title: "Snacks & Aliments Animaux",
      c1Desc: "Les zips à curseur et à pression sont essentiels pour maintenir la fraîcheur des snacks et croquettes après ouverture.",
      c1Share: "Part de marché : 45 %",
      c2Title: "Alimentation Bébé & Purées",
      c2Desc: "Les sachets à bec sont idéaux pour les purées pour bébé et liquides, offrant un dosage contrôlé.",
      c2Share: "Part de marché : 30 %",
      c3Title: "Cannabis & Pharmacie",
      c3Desc: "Les fermetures sécurité enfant sont des exigences réglementaires obligatoires pour garantir la sécurité.",
      c3Share: "Part de marché : 25 %",
      storyTitle: "Témoignage Client",
      storyText: "« Après avoir remplacé le zip classique par un zip à curseur premium, le taux de réachat de nos friandises pour animaux a augmenté de 25 %. Les clients soulignent souvent la praticité d'ouverture d'une seule main. » — Responsable Marque Animalerie"
    },
    marketData: {
      title: "Données du Marché & Intelligence",
      intro: "Le marché des emballages refermables connaît une croissance soutenue car les consommateurs accordent une importance primordiale à la praticité et à la conservation des aliments.",
      m1Val: "78 %", m1Label: "Préférence consommateur pour les emballages refermables", m1Badge: "Croissance continue",
      m2Val: "8,5 Md$", m2Label: "Taille du marché mondial des emballages refermables", m2Badge: "Croissance 6,2 %/an",
      m3Val: "35 %", m3Label: "Amélioration de la perception de la marque", m3Badge: "Stable",
      m4Val: "500+", m4Label: "Cycles d'ouverture/fermeture estimés", m4Badge: "Haute durabilité",
      insightsTitle: "Tendances du Marché",
      insightsText: "Les consommateurs privilégient constamment la facilité d'utilisation. Les zips à curseur rencontrent un vif succès grâce à leur confirmation tactile et leur manipulation à une main, avec une part de marché visée de 40 % d'ici 2026."
    },
    detailedComparison: {
      title: "Comparatif des Modes de Fermeture",
      intro: "Une comparaison détaillée des différentes options refermables pour vous aider à choisir la solution idéale.",
      headers: ["Type de Fermeture", "Praticité", "Performance d'Étanchéité", "Scénarios Adaptés", "Impact Coût"],
      rows: [
        { type: "Zip à Pression", conv: "★★★", seal: "★★★★", scenario: "Snacks, Croquettes, Produits secs", cost: "+5 %" },
        { type: "Zip à Curseur", conv: "★★★★★", seal: "★★★★", scenario: "Snacks premium, Grands sacs pour animaux", cost: "+15 %" },
        { type: "Bouchon à Bec", conv: "★★★★", seal: "★★★★★", scenario: "Alimentation bébé, Sauces, Liquides", cost: "+30 %" },
        { type: "Attache Tin-Tie", conv: "★★", seal: "★★★", scenario: "Café en grains, Produits de boulangerie", cost: "+10 %" }
      ],
      guideTitle: "Guide de Sélection",
      guideText: "Lors de la sélection d'une méthode de refermeture, nous recommandons d'analyser la texture de votre produit, l'utilisation prévue et votre public cible. Nous fournissons des échantillons gratuits pour vos tests."
    },
    faqs: [
      {
        question: "Vos zips sont-ils recyclables ou compostables ?",
        answer: "Nos zips en mono-PE sont 100 % recyclables avec les sachets PE. Pour les sachets compostables, nous proposons des zips en PLA conformes à la norme EN 13432. Le matériau du zip correspond toujours au matériau du sachet."
      },
      {
        question: "Quelle est la certification sécurité enfant pour le cannabis ?",
        answer: "Nos sachets avec sécurité enfant sont certifiés ASTM D3475 et conformes à la norme 16 CFR 1700 pour l'accessibilité aux seniors. Nous fournissons les certificats de conformité (COC)."
      },
      {
        question: "Puis-je avoir une encoche d'amorce de déchirure ET un zip ?",
        answer: "Oui, la plupart des clients combinent une encoche d'amorce pour une ouverture initiale facile et un zip pour la refermeture. L'encoche est placée au-dessus de la ligne du zip."
      },
      {
        question: "Les sachets à bec coûtent-ils plus cher que les sachets zip ?",
        answer: "Les sachets à bec coûtent généralement 20 à 40 % de plus que les sachets zip en raison du composant bec et du processus de scellage supplémentaire, mais offrent un versement contrôlé unique."
      }
    ],
    relatedLinks: [
      { title: "Sachets à Bec Verseur", url: "/packaging/spout-pouches", description: "Solutions complètes de sachets à bec" },
      { title: "Sachets Tenue Debout", url: "/packaging/stand-up-pouches", description: "Format zip le plus populaire" },
      { title: "Options de Finition de Surface", url: "/features/surface-finish", description: "Sublimez l'apparence de vos sachets" }
    ]
  },
  es: {
    seo: {
      title: "Opciones de Recremallera | Bolsas Ecológicas | Achieve Pack",
      description: "Soluciones de cierre reutilizable para empaques flexibles. Cierres a presión, cierres deslizantes, boquillas con tapón, tiras metálicas tin-tie y cierres a prueba de niños.",
      keywords: ['bolsas reutilizables', 'bolsas con zipper', 'bolsa con boquilla', 'empaque resellable', 'empaque seguridad ninos', 'bolsas tin tie'],
      canonicalUrl: "https://achievepack.com/features/reclosure-options",
      heroTitle: "Opciones de Recremallera y Cierre para Bolsas Ecológicas",
      heroSubtitle: "Mantenga sus productos frescos y seguros con cierres de presión, deslizantes, boquillas, tin-ties y cierres a prueba de niños.",
      heroImageAlt: "Diversas opciones de re-cierre para bolsas ecológicas",
      introSummary: "Achieve Pack ofrece una amplia gama de opciones de cierres resellables y boquillas para bolsas personalizadas. Prolongue la vida útil del producto, mejore la comodidad y cumpla con las normativas."
    },
    scenario: {
      title: "¿Es esta página para usted?",
      mainText: "Si su producto necesita mantenerse fresco tras la apertura o requiere empaque a prueba de niños, está en el lugar indicado.",
      card1Title: "Snacks y Alimentos de Mascotas",
      card1Desc: "Cierres resellables para preservar la frescura",
      card2Title: "Alimento Infantil y Salsas",
      card2Desc: "Bolsas con boquilla y tapón",
      card3Title: "Cannabis y Farmacia",
      card3Desc: "Cierres certificados a prueba de niños"
    },
    overview: {
      title: "Opciones de Cierre para Bolsas Ecológicas",
      p1: "Mantenga sus productos frescos y a sus clientes satisfechos con nuestra gama de soluciones de cierre sostenible. Desde cierres a presión hasta tapones a prueba de niños, Achieve Pack ofrece opciones que conservan la frescura respaldando su compromiso ecológico.",
      listTitle: "Tipos de Cierre Disponibles:",
      items: [
        "Cierres a presión (Press-to-close) – Sellado sencillo y confiable para uso diario",
        "Cierres deslizantes (Slider) – Fácil manejo con una sola mano para mayor comodidad",
        "Boquillas con tapón – Control de vertido para líquidos y polvos",
        "Tiras metálicas (Tin-ties) – Aspecto clásico para café y productos artesanales",
        "Cierres a prueba de niños – Seguridad certificada para cannabis y farmacia"
      ]
    },
    gallery: {
      title: "Galería de Soluciones de Cierre",
      desc: "Explore nuestra gama de opciones de cierre. Haga clic en cualquier imagen para ampliarla:",
      items: [
        { title: 'Resumen de Opciones de Cierre', desc: 'Gama completa de soluciones de cierre resellable para empaques flexibles' },
        { title: 'Categorías de Cierre', desc: 'Cuatro tipos principales: cierres zipper, boquillas, tin-ties y seguridad infantil' },
        { title: 'Guía de Selección de Cierre', desc: 'Cómo elegir el cierre adecuado según las necesidades de su producto' },
        { title: 'Beneficios del Cierre Resellable', desc: 'Comodidad para el consumidor y conservación prolongada de frescura' },
        { title: 'Comparación de Cierres', desc: 'Comparativa lado a lado de los diferentes mecanismos de cierre' },
        { title: 'Zipper de Presión', desc: 'Cierre resellable estándar para apertura y cierre sencillos' },
        { title: 'Detalle de Boquilla con Tapón', desc: 'Tapón a rosca para vertido controlado de líquidos y salsas' },
        { title: 'Cierre Tin Tie (Tira Metálica)', desc: 'Cierre metálico clásico para bolsas de café y panadería artesanal' },
        { title: 'Válvula de Desgasificación', desc: 'Válvula unidireccional para café recién tostado y productos fermentados' }
      ]
    },
    zippers: {
      title: "Opciones de Cierre Zipper",
      pressTitle: "Cierre a Presión",
      pressItems: [
        "Opción más económica",
        "Más de 500 ciclos de apertura/cierre",
        "Disponible en todos los formatos de bolsa",
        "Opciones transparentes o a color"
      ],
      sliderTitle: "Cierre Deslizante (Slider)",
      sliderItems: [
        "Manejo premium con una sola mano",
        "Confirmación táctil de \"clic\"",
        "Ideal para snacks y alimento de mascotas",
        "Mayor percepción de valor"
      ],
      crTitle: "Cierre A Prueba de Niños",
      crItems: [
        "Certificado bajo norma ASTM D3475",
        "Requisito obligatorio para cannabis",
        "Mecanismo de presionar y deslizar",
        "Apto para adultos mayores (16 CFR 1700)"
      ],
      velcroTitle: "Cierre Estilo Velcro",
      velcroItems: [
        "Apertura ultra silenciosa",
        "Tacto suave y agradable",
        "Excelente para productos premium",
        "Durabilidad superior a 1,000 ciclos"
      ]
    },
    spouts: {
      title: "Opciones de Boquilla y Tapón",
      intro: "Para líquidos, salsas y productos vertibles:",
      items: [
        'Tapón a rosca estándar (8.6mm)',
        'Tapón de boca ancha (15mm)',
        'Tapón de bisagra (Flip-Top)',
        'Tapón a prueba de niños',
        'Sello de seguridad inviolable',
        'Boquilla de esquina (Ahorro de espacio)',
        'Boquilla central (Control de vertido)',
        'Tapón dispensador de bomba',
        'Tapón dosificador con medición'
      ]
    },
    applications: {
      title: "Aplicaciones por Producto",
      headers: ["Tipo de Producto", "Cierre Recomendado", "Por qué"],
      rows: [
        { type: "Café en Grano", closure: "Tin-tie + Válvula", why: "Aspecto clásico, desgasificación" },
        { type: "Snacks y Chips", closure: "Cierre Deslizante", why: "Fácil acceso con una sola mano" },
        { type: "Alimento de Mascotas", closure: "Cierre a Presión", why: "Económico, resistente y durable" },
        { type: "Papilla de Bebé", closure: "Boquilla con Tapón a Rosca", why: "Dispensado limpio y controlado" },
        { type: "Cannabis / Farmacia", closure: "A Prueba de Niños", why: "Cumplimiento normativo estricto" },
        { type: "Salsas y Condimentos", closure: "Boquilla Flip-Top", why: "Fácil vertido y compresión" }
      ]
    },
    order: {
      title: "Información de Pedido",
      val1: "500", label1: "Pedido Mín. (Bolsas Zipper)",
      val2: "1,000", label2: "Pedido Mín. (Bolsas con Boquilla)",
      val3: "5+", label3: "Opciones de Cierre"
    },
    riskHedge: {
      title: "¿Aún tiene dudas? Le ayudamos",
      q1: "¿Son ecológicos los cierres?", a1: "Sí, cierres de mono-PE reciclables, cierres de PLA compostables",
      q2: "¿Necesita certificación a prueba de niños?", a2: "Opciones certificadas ASTM D3475 disponibles",
      q3: "¿Diferencia de costo entre boquilla y zipper?", a3: "Las boquillas añaden 20-40%, le ayudamos a decidir",
      q4: "¿Puedo probar muestras?", a4: "Muestras gratuitas para evaluación de empaque"
    },
    cta: {
      title: "¿Listo para comenzar?",
      subtitle: "Elija cómo prefiere ponerse en contacto",
      callTitle: "Agendar Llamada", callDesc: "Consulta gratuita de 30 min", callBtn: "Reservar Ahora",
      emailTitle: "Solicitar Cotización", emailDesc: "Respuesta en menos de 24h", emailBtn: "Enviar Correo",
      sampleTitle: "Muestras Gratuitas", sampleDesc: "Pruebe los cierres primero", sampleBtn: "Solicitar Muestras"
    },
    scenarios: {
      title: "Aplicaciones por Industria",
      intro: "Cada tipo de producto requiere características de cierre específicas. Seleccionar el cierre correcto es clave para mejorar la experiencia del cliente.",
      c1Title: "Snacks y Alimentos de Mascotas",
      c1Desc: "Los cierres deslizantes y a presión son fundamentales para preservar la frescura de los alimentos tras la apertura.",
      c1Share: "Cuota de mercado: 45%",
      c2Title: "Alimento Infantil y Papillas",
      c2Desc: "Las bolsas con boquilla son ideales para papillas de bebé, alimentos exprimibles y líquidos, ofreciendo un vertido controlado.",
      c2Share: "Cuota de mercado: 30%",
      c3Title: "Cannabis y Farmacia",
      c3Desc: "Los cierres a prueba de niños son requisitos normativos obligatorios para garantizar la seguridad del usuario.",
      c3Share: "Cuota de mercado: 25%",
      storyTitle: "Historia de Éxito",
      storyText: "«Tras cambiar de un cierre a presión estándar a un cierre deslizante premium, la tasa de recompra de nuestros snacks para mascotas subió un 25%. Los comentarios destacan lo práctico del manejo con una mano.» — Gerente de Marca de Alimentos de Mascotas"
    },
    marketData: {
      title: "Datos del Mercado e Inteligencia",
      intro: "El mercado de empaques resellables experimenta un crecimiento constante gracias al enfoque del consumidor en la comodidad y la frescura prolongada.",
      m1Val: "78%", m1Label: "Preferencia del consumidor por empaques resellables", m1Badge: "Crecimiento constante",
      m2Val: "$8.5B", m2Label: "Tamaño del mercado global de empaques resellables", m2Badge: "Crecimiento anual 6.2%",
      m3Val: "35%", m3Label: "Mejora en la percepción de marca", m3Badge: "Estable",
      m4Val: "500+", m4Label: "Ciclos de apertura/cierre estimados", m4Badge: "Alta durabilidad",
      insightsTitle: "Perspectiva de Mercado",
      insightsText: "Los consumidores priorizan la comodidad y facilidad de uso. Los cierres deslizantes están ganando gran preferencia por su confirmación táctil y operación con una mano, esperando alcanzar un 40% de cuota para 2026."
    },
    detailedComparison: {
      title: "Comparativa de Métodos de Cierre",
      intro: "Una comparación detallada del rendimiento de las distintas opciones resellables para ayudarle a elegir la mejor solución para su negocio.",
      headers: ["Tipo de Cierre", "Comodidad", "Rendimiento de Sellado", "Escenarios Adecuados", "Impacto en Costo"],
      rows: [
        { type: "Cierre a Presión", conv: "★★★", seal: "★★★★", scenario: "Snacks, Alimento de mascotas, Granos secos", cost: "+5%" },
        { type: "Cierre Deslizante", conv: "★★★★★", seal: "★★★★", scenario: "Snacks premium, Bolsas grandes de mascotas", cost: "+15%" },
        { type: "Boquilla con Tapón", conv: "★★★★", seal: "★★★★★", scenario: "Alimento infantil, Salsas, Líquidos", cost: "+30%" },
        { type: "Tira Metálica (Tin-Tie)", conv: "★★", seal: "★★★", scenario: "Café en grano, Panadería artesanal", cost: "+10%" }
      ],
      guideTitle: "Guía de Selección",
      guideText: "Al elegir un método de cierre, recomendamos considerar el estado físico del producto, escenario de uso y público objetivo. Proporcionamos muestras gratuitas para sus pruebas."
    },
    faqs: [
      {
        question: "¿Son sus cierres reciclables o compostables?",
        answer: "Nuestros cierres de mono-PE son totalmente reciclables con bolsas de PE. Para bolsas compostables, ofrecemos cierres a base de PLA que cumplen con las normas EN 13432. El material del cierre siempre coincide con el de la bolsa."
      },
      {
        question: "¿Cuál es la certificación a prueba de niños para empaques de cannabis?",
        answer: "Nuestras bolsas a prueba de niños están certificadas bajo normas ASTM D3475 y cumplen con 16 CFR 1700 para accesibilidad de adultos mayores. Proporcionamos certificados de conformidad (COC)."
      },
      {
        question: "¿Puedo colocar muesca de fáci apertura Y zipper?",
        answer: "Sí, la mayoría de los clientes combinan una muesca de abre fácil con un zipper para el cierre posterior. La muesca se ubica por encima de la línea del zipper."
      },
      {
        question: "¿Las bolsas con boquilla cuestan más que las bolsas con zipper?",
        answer: "Las bolsas con boquilla suelen costar entre un 20 y un 40% más debido a la boquilla y al proceso de sellado adicional, pero ofrecen un control de vertido único para líquidos y semilíquidos."
      }
    ],
    relatedLinks: [
      { title: "Bolsas con Boquilla", url: "/packaging/spout-pouches", description: "Soluciones completas de bolsas con boquilla" },
      { title: "Bolsas Stand-Up", url: "/packaging/stand-up-pouches", description: "El formato zipper más popular" },
      { title: "Opciones de Acabado Superficial", url: "/features/surface-finish", description: "Mejore la apariencia de su bolsa" }
    ]
  }
}

const ReclosureOptionsPage: React.FC = () => {
  const { i18n } = useTranslation()
  const rawLang = (i18n.language || 'en').toLowerCase()
  const currentLang = (rawLang === 'zh-tw' || rawLang === 'zh-hant' || rawLang === 'zh') ? 'zh-tw' : (rawLang === 'fr' ? 'fr' : (rawLang === 'es' ? 'es' : 'en'))
  const tLocal = localTranslations[currentLang] || localTranslations.en

  const { openCalendly } = useCalendly()
  const [galleryEnlarged, setGalleryEnlarged] = useState<{ src: string; index: number } | null>(null)

  const recloseGallery = tLocal.gallery.items.map((item, index) => ({
    src: recloseGalleryImages[index] || recloseGalleryImages[0],
    title: item.title,
    desc: item.desc
  }))

  const navigateGallery = (direction: 'prev' | 'next') => {
    if (!galleryEnlarged) return
    let newIndex = direction === 'prev' ? galleryEnlarged.index - 1 : galleryEnlarged.index + 1
    if (newIndex < 0) newIndex = recloseGallery.length - 1
    if (newIndex >= recloseGallery.length) newIndex = 0
    setGalleryEnlarged({ src: recloseGallery[newIndex].src, index: newIndex })
  }
  
  const sections = [
    {
      id: 'scenario-trigger',
      title: tLocal.scenario.title,
      icon: <Target className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-lg border border-purple-200">
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
      icon: <Lock className="h-5 w-5 text-primary-600" />,
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
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {recloseGallery.map((img, index) => (
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
      id: 'zipper-types',
      title: tLocal.zippers.title,
      icon: <RefreshCw className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <div className="grid md:grid-cols-2 gap-4 mt-4">
            <div className="bg-primary-50 p-4 rounded-lg">
              <h4 className="font-semibold text-primary-800 mb-2">{tLocal.zippers.pressTitle}</h4>
              <ul className="text-sm space-y-1">
                {tLocal.zippers.pressItems.map((item, idx) => (
                  <li key={idx}>• {item}</li>
                ))}
              </ul>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg">
              <h4 className="font-semibold text-blue-800 mb-2">{tLocal.zippers.sliderTitle}</h4>
              <ul className="text-sm space-y-1">
                {tLocal.zippers.sliderItems.map((item, idx) => (
                  <li key={idx}>• {item}</li>
                ))}
              </ul>
            </div>
            <div className="bg-green-50 p-4 rounded-lg">
              <h4 className="font-semibold text-green-800 mb-2">{tLocal.zippers.crTitle}</h4>
              <ul className="text-sm space-y-1">
                {tLocal.zippers.crItems.map((item, idx) => (
                  <li key={idx}>• {item}</li>
                ))}
              </ul>
            </div>
            <div className="bg-yellow-50 p-4 rounded-lg">
              <h4 className="font-semibold text-yellow-800 mb-2">{tLocal.zippers.velcroTitle}</h4>
              <ul className="text-sm space-y-1">
                {tLocal.zippers.velcroItems.map((item, idx) => (
                  <li key={idx}>• {item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'spouts',
      title: tLocal.spouts.title,
      icon: <Package className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>{tLocal.spouts.intro}</p>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 mt-4">
            {tLocal.spouts.items.map((item, idx) => (
              <div key={idx} className="flex items-center gap-2 bg-neutral-50 px-3 py-2 rounded-lg">
                <CheckCircle className="h-4 w-4 text-primary-500 flex-shrink-0" />
                <span className="text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>
      )
    },
    {
      id: 'applications',
      title: tLocal.applications.title,
      icon: <CheckCircle className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <div className="overflow-x-auto mt-4">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-neutral-100">
                  {tLocal.applications.headers.map((h, idx) => (
                    <th key={idx} className="text-left p-3 border font-semibold">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {tLocal.applications.rows.map((row, idx) => (
                  <tr key={idx}>
                    <td className="p-3 border font-medium">{row.type}</td>
                    <td className="p-3 border">{row.closure}</td>
                    <td className="p-3 border">{row.why}</td>
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
              <div className="text-3xl font-bold text-primary-600 mb-2">{tLocal.order.val1}</div>
              <div className="text-sm text-neutral-600">{tLocal.order.label1}</div>
            </div>
            <div className="bg-white border border-neutral-200 p-4 rounded-lg text-center">
              <div className="text-3xl font-bold text-primary-600 mb-2">{tLocal.order.val2}</div>
              <div className="text-sm text-neutral-600">{tLocal.order.label2}</div>
            </div>
            <div className="bg-white border border-neutral-200 p-4 rounded-lg text-center">
              <div className="text-3xl font-bold text-primary-600 mb-2">{tLocal.order.val3}</div>
              <div className="text-sm text-neutral-600">{tLocal.order.label3}</div>
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
        <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-lg border border-purple-200">
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
      icon: <Lock className="h-5 w-5 text-white" />,
      content: (
        <div className="bg-gradient-to-br from-purple-500 to-pink-600 text-white p-8 rounded-xl">
          <h3 className="text-2xl font-bold mb-6 text-center">{tLocal.cta.subtitle}</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white/10 backdrop-blur p-6 rounded-lg text-center">
              <Calendar className="h-8 w-8 mx-auto mb-3" />
              <h4 className="font-semibold mb-2">{tLocal.cta.callTitle}</h4>
              <p className="text-sm text-white/80 mb-4">{tLocal.cta.callDesc}</p>
              <button onClick={openCalendly} className="w-full bg-white text-purple-600 px-4 py-2 rounded-lg font-semibold hover:bg-purple-50 transition cursor-pointer">
                {tLocal.cta.callBtn}
              </button>
            </div>
            <div className="bg-white/10 backdrop-blur p-6 rounded-lg text-center">
              <Mail className="h-8 w-8 mx-auto mb-3" />
              <h4 className="font-semibold mb-2">{tLocal.cta.emailTitle}</h4>
              <p className="text-sm text-white/80 mb-4">{tLocal.cta.emailDesc}</p>
              <a href="mailto:ryan@achievepack.com?subject=Reclosure Options Quote" className="block w-full bg-white text-purple-600 px-4 py-2 rounded-lg font-semibold hover:bg-purple-50 transition">
                {tLocal.cta.emailBtn}
              </a>
            </div>
            <div className="bg-white/10 backdrop-blur p-6 rounded-lg text-center">
              <Download className="h-8 w-8 mx-auto mb-3" />
              <h4 className="font-semibold mb-2">{tLocal.cta.sampleTitle}</h4>
              <p className="text-sm text-white/80 mb-4">{tLocal.cta.sampleDesc}</p>
              <Link to="/contact" className="block w-full bg-white text-purple-600 px-4 py-2 rounded-lg font-semibold hover:bg-purple-50 transition">
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
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-5 rounded-xl border border-green-200">
              <div className="flex items-center gap-2 mb-3">
                <ShoppingBag className="h-5 w-5 text-green-600" />
                <h4 className="font-semibold text-green-800">{tLocal.scenarios.c1Title}</h4>
              </div>
              <p className="text-sm text-green-700 mb-3">{tLocal.scenarios.c1Desc}</p>
              <div className="text-xs text-green-600 bg-green-100 px-2 py-1 rounded inline-block">{tLocal.scenarios.c1Share}</div>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-5 rounded-xl border border-blue-200">
              <div className="flex items-center gap-2 mb-3">
                <Sparkles className="h-5 w-5 text-blue-600" />
                <h4 className="font-semibold text-blue-800">{tLocal.scenarios.c2Title}</h4>
              </div>
              <p className="text-sm text-blue-700 mb-3">{tLocal.scenarios.c2Desc}</p>
              <div className="text-xs text-blue-600 bg-blue-100 px-2 py-1 rounded inline-block">{tLocal.scenarios.c2Share}</div>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-5 rounded-xl border border-purple-200">
              <div className="flex items-center gap-2 mb-3">
                <Package className="h-5 w-5 text-purple-600" />
                <h4 className="font-semibold text-purple-800">{tLocal.scenarios.c3Title}</h4>
              </div>
              <p className="text-sm text-purple-700 mb-3">{tLocal.scenarios.c3Desc}</p>
              <div className="text-xs text-purple-600 bg-purple-100 px-2 py-1 rounded inline-block">{tLocal.scenarios.c3Share}</div>
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
                    <td className="p-3 border font-medium">{row.type}</td>
                    <td className="p-3 border">{row.conv}</td>
                    <td className="p-3 border">{row.seal}</td>
                    <td className="p-3 border">{row.scenario}</td>
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
        heroImage="/imgs/seo-photos/a_closure_systems_infographic_4275938.webp"
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
          <img src={galleryEnlarged.src} alt={recloseGallery[galleryEnlarged.index]?.title || 'Enlarged view'} className="max-w-full max-h-[80vh] object-contain" onClick={(e) => e.stopPropagation()} />
          <button onClick={(e) => { e.stopPropagation(); navigateGallery('next'); }} className="absolute right-4 text-white hover:text-neutral-300 transition p-2"><ChevronRight className="h-10 w-10" /></button>
          <div className="absolute bottom-4 text-center text-white max-w-xl px-4">
            <p className="text-lg font-semibold">{recloseGallery[galleryEnlarged.index]?.title}</p>
            <p className="text-sm text-neutral-300">{recloseGallery[galleryEnlarged.index]?.desc}</p>
            <p className="text-xs mt-2 text-neutral-400">{galleryEnlarged.index + 1} / {recloseGallery.length}</p>
          </div>
        </div>
      )}
    </>
  )
}

export default ReclosureOptionsPage
