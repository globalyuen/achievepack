import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Wine, ShieldCheck, Zap, ArrowRight, RefreshCw, CheckCircle, Droplet, Truck, Layers, HelpCircle, Package, Award } from 'lucide-react';
import SEOPageLayout from '../../components/SEOPageLayout';
import ClickableImage from '../../components/ClickableImage';
import { getDomain } from '../../utils/domain';

const localTranslations: Record<string, any> = {
  en: {
    metaTitle: "Shaped Liquid Dispensing Spout Pouches & Refill Pouches | Achieve Pack",
    metaDesc: "Custom shaped liquid dispensing spout pouches for plant milk concentrates, RTD cocktails, mixers & machine refills. 90% shipping volume savings, anti-burst seals & EVOH high barriers.",
    heroTitle: "Shaped Liquid Dispensing & Spout Refill Pouches",
    heroSubtitle: "Engineered for machine-insert concentrate dispensers, ready-to-drink (RTD) cocktails, and liquid mixers. Ultra-durable EVOH barriers, tamper-evident neck tabs, and 90% freight savings over glass.",
    quickAnswerTitle: "⚡ Technical Quick Answer",
    quickAnswerText: "Achieve Pack's shaped liquid dispensing spout pouches are engineered for high-barrier liquid protection and automatic dispenser insertion. Featuring precision top tear-off tabs ('REMOVE BEFORE USE'), reinforced anti-burst neck seals, and co-extruded NY/EVOH/PE laminations (OTR < 0.1 cc/m²/day), they eliminate glass bottle breakage while cutting freight volume by up to 90%.",
    
    empathyTitle: "The Challenge of Liquid Packaging: Fragile Glass vs. Leaky Seals",
    empathyP1: "If you're launching a plant-based concentrate, a craft RTD cocktail line, or an innovative beverage dispenser system, you know the heartbreak of shipping glass bottles: high freight bills, breakage in transit, and massive storage overhead. But transitioning to flexible pouches comes with its own anxieties—will the seals burst under pressure? Will the alcohol or liquid concentrate leach through the film? How do users insert the pouch into a machine without messy drips?",
    empathyP2: "At Achieve Pack, we engineered our Shaped Liquid Dispensing Spout Pouches specifically to solve these real-world pain points. Inspired by precision dispenser cartridges and high-end RTD pouch designs, our custom pouches feature tear-off neck strips, directional flow channels, and high-tensile laminated barrier films that handle up to 45 PSI of hydraulic insertion pressure without a drop of leakage.",
    
    keyTakeawaysTitle: "Key Takeaways",
    kt1: "90% Shipping Volume Reduction: 1 truckload of flat unfilled spout pouches replaces up to 25 truckloads of empty glass bottles.",
    kt2: "Machine Dispenser & Refill Ready: Precision top alignment tabs and tamper-evident tear strips ('REMOVE BEFORE USE') designed for automated dispensing machines.",
    kt3: "Ultra-High EVOH Barrier: Zero flavor loss, OTR < 0.1 cc/m²/day, alcohol-resistant up to 40% ABV with up to 12-month shelf life.",
    kt4: "Zero Burst Guarantee: High-tensile NY/EVOH/PE lamination withstands hydraulic insertion shock and drop impact tests.",

    ryanNotebookTitle: "🔬 From Ryan Wong's Engineering Notebook",
    ryanNotebookText: "\"When engineering machine-insert liquid concentrate pouches for an automated beverage dispensing line, we encountered severe hydraulic pressure spikes during machine insertion. Standard side-sealed spouts failed under insertion shock, causing micro-fractures along the neck weld. We re-engineered the top neck lamination using a high-tensile 120-micron NY/EVOH/PE structure and increased seal jaw dwell time to 1.8 seconds at 165°C. This achieved zero burst failures under 45 PSI insertion force while maintaining a 100% airtight seal until the user removes the protective top strip.\"",
    ryanSignature: "— Ryan Wong, Co-Founder & Chief Packaging Engineer",

    sec1Title: "Precision Machine Insertion & Ergonomic Dispensing",
    sec1Text: "Our shaped liquid pouches feature custom contour cuts designed to align seamlessly into commercial or household dispensing appliances. The top neck includes an intuitive tear-off safety strip clearly printed with 'REMOVE BEFORE USE' and directional arrows, guaranteeing that users remove the seal prior to inserting the pouch into the machine slot. Below the neck strip, a multi-layer puncture membrane ensures clean piercing by internal dispenser needles without rubber gasket tearing or liquid backflow.",

    sec2Title: "High-Barrier Material Science: Flavor & Alcohol Protection",
    sec2Text: "Liquid concentrates, plant milks, and alcoholic cocktails contain volatile essential oils and alcohol molecules that can permeate standard plastic packaging. Achieve Pack uses multi-layer barrier laminations incorporating EVOH (Ethylene Vinyl Alcohol) or Metalized PET. This creates an impenetrable shield against oxygen (OTR < 0.1 cc/m²/day) and water vapor (MVTR < 0.5 g/m²/day), locking in fresh flavor profiles and preventing alcohol evaporation for up to 12 months.",

    painPointsTitle: "5 Packaging Pain Points & Engineering Solutions",
    pp1Title: "01 / Machine Insertion Leakage & Seal Burst",
    pp1Desc: "Standard spout pouches burst or crack at the neck seal under hydraulic dispenser insertion shock.",
    pp1Sol: "Solution: Engineer 120-micron high-tensile NY/EVOH/PE laminations with reinforced 6mm ultrasonic neck weld zones.",
    
    pp2Title: "02 / Excessive Shipping Freight & Glass Breakage",
    pp2Desc: "Shipping heavy glass bottles burns up logistics budget and results in 3-5% transit breakage rates.",
    pp2Sol: "Solution: Transition to lightweight flexible spout pouches that reduce unfilled freight weight by 75% and volume by 90%.",
    
    pp3Title: "03 / Alcohol & Essential Oil Permeation",
    pp3Desc: "High-proof cocktails or citrus concentrates degrading film layers and losing potency over 60 days.",
    pp3Sol: "Solution: Co-extrude alcohol-resistant PE inner liners paired with EVOH barrier layers certified up to 40% ABV.",
    
    pp4Title: "04 / User Misuse & Messy Dispenser Drips",
    pp4Desc: "Consumers inserting sealed pouches incorrectly, causing spills inside dispensing machines.",
    pp4Sol: "Solution: Print high-contrast visual instruction diagrams (1-2-3-4 step guide) and top directional tear strips.",
    
    pp5Title: "05 / Eco-Regulation Compliance & Microplastics",
    pp5Desc: "Brands struggling to meet EU PPWR or US state sustainability requirements with rigid plastics.",
    pp5Sol: "Solution: Offer 100% Recyclable Mono-PE spout structures or Certified Home Compostable barrier films.",

    matrixTitle: "Flexible Liquid Spout Pouches vs. Traditional Rigid Bottles",
    matrixCol1: "Packaging Feature",
    matrixCol2: "Achieve Pack Shaped Spout Pouch",
    matrixCol3: "Standard Glass Bottle",
    matrixCol4: "Rigid HDPE Plastic Bottle",
    
    mR1C1: "Unfilled Shipping Volume",
    mR1C2: "100% Flat (1 Truckload = 250k pouches)",
    mR1C3: "Bulky (1 Truckload = 10k bottles)",
    mR1C4: "Semi-Bulky (1 Truckload = 25k bottles)",

    mR2C1: "Transit Breakage Rate",
    mR2C2: "0% (Flexible / Shatterproof)",
    mR2C3: "3% - 5% (Fragile Glass)",
    mR2C4: "< 1% (Rigid Plastic)",

    mR3C1: "Machine Dispenser Fit",
    mR3C2: "Custom Contour & Alignment Neck",
    mR3C3: "Requires Special Adapter",
    mR3C4: "Fixed Threaded Cap Only",

    mR4C1: "Oxygen Barrier (OTR)",
    mR4C2: "< 0.1 cc/m²/day (EVOH / Met-PET)",
    mR4C3: "0.0 cc/m²/day (Absolute)",
    mR4C4: "1.5 - 4.0 cc/m²/day (High Permeation)",

    mR5C1: "Freight Carbon Footprint",
    mR5C2: "Reduced by 85%",
    mR5C3: "High CO2 Emission",
    mR5C4: "Moderate CO2 Emission",

    faqTitle: "Frequently Asked Questions",
    faq1Q: "What liquid products are best suited for Achieve Pack shaped spout pouches?",
    faq1A: "Our shaped spout pouches are ideal for plant milk concentrates (oat, almond, soy), ready-to-drink (RTD) cocktails, alcoholic mixers, cold brew coffee concentrates, syrups, liquid condiments, smoothies, and machine-dispensed beverage refills.",

    faq2Q: "How do these pouches integrate with automatic dispenser appliances?",
    faq2A: "We customize the top neck profile with precision alignment tabs, directional flow arrows, and tear-off safety strips ('REMOVE BEFORE USE'). The internal seal zone is engineered to match your machine's puncture needle mechanism for leak-free dispensing.",

    faq3Q: "Can these pouches withstand hot-fill or retort sterilization?",
    faq3A: "Yes! We manufacture heat-resistant NY/PP and Retort-grade laminations capable of hot-fill up to 90°C or retort autoclave sterilization at 121°C for shelf-stable liquid packaging without preservatives.",

    faq4Q: "What barrier protection prevents alcohol or flavor oil loss?",
    faq4A: "We utilize co-extruded EVOH or aluminum-free metalized barrier layers. These layers provide zero alcohol permeation for up to 40% ABV liquids and prevent volatile essential oils from degrading the packaging film.",

    faq5Q: "What is the Minimum Order Quantity (MOQ) for custom shaped liquid pouches?",
    faq5A: "Our low-MOQ digital printing service allows custom shaped spout pouches starting from just 1,000 units for market testing. For high-volume production, our rotogravure lines scale efficiently to 10,000+ units with low per-unit costs.",

    authorTitle: "About the Author & Lead Engineer",
    authorName: "Ryan Wong",
    authorRole: "Co-Founder & Chief Packaging Engineer | 14+ Years Experience",
    authorBio: "Ryan Wong has spent over 14 years specializing in flexible barrier films, ultrasonic spout welding, and automated packaging lines. He has helped over 500 global brands transition from rigid glass and plastic containers to sustainable, high-efficiency flexible liquid packaging."
  },
  es: {
    metaTitle: "Bolsas con Boquilla y Recargas para Líquidos | Achieve Pack",
    metaDesc: "Bolsas con boquilla con forma personalizada para concentrados de leche vegetal, cócteles RTD y recargas de dispensadores. 90% de ahorro de flete.",
    heroTitle: "Bolsas con Boquilla con Forma para Líquidos y Recargas",
    heroSubtitle: "Diseñadas para dispensadores de concentrados, cócteles listos para beber (RTD) y mezcladores. Barrera EVOH ultra duradera y 90% de ahorro de flete sobre el vidrio.",
    quickAnswerTitle: "⚡ Respuesta Técnica Rápida",
    quickAnswerText: "Las bolsas con boquilla para líquidos con forma de Achieve Pack están diseñadas para la protección de líquidos de alta barrera e inserción automática en dispensadores. Con tiras de seguridad desprendibles ('REMOVE BEFORE USE') y laminaciones NY/EVOH/PE (OTR < 0.1 cc/m²/día), eliminan la rotura de botellas de vidrio.",
    ryanNotebookTitle: "🔬 Del Cuaderno de Ingeniería de Ryan Wong",
    ryanNotebookText: "\"Al diseñar bolsas de concentrado líquido para dispensadores automáticos, encontramos picos de presión hidráulica. Reingenierizamos la laminación del cuello con una estructura NY/EVOH/PE de 120 micras, logrando cero fallas de reventón bajo 45 PSI de fuerza de inserción.\"",
    ryanSignature: "— Ryan Wong, Cofundador y Director de Ingeniería de Empaque",
    painPointsTitle: "5 Puntos de Dolor y Soluciones de Ingeniería",
    faqTitle: "Preguntas Frecuentes"
  },
  fr: {
    metaTitle: "Sachets à Bec et Recharges pour Liquides | Achieve Pack",
    metaDesc: "Sachets à bec préformés pour laits végétaux, cocktails RTD et recharges pour distributeurs. 90% d'économie de fret.",
    heroTitle: "Sachets à Bec Préformés pour Liquides et Recharges",
    heroSubtitle: "Conçus pour les distributeurs automatiques de concentrés, les cocktails prêts à boire (RTD) et les mélangeurs. Barrières EVOH ultra-durables et 90% d'économie de volume.",
    quickAnswerTitle: "⚡ Réponse Technique Rapide",
    quickAnswerText: "Les sachets à bec préformés d'Achieve Pack sont conçus pour une protection barrière maximale et une insertion automatique. Dotés de bandes de sécurité déchirables ('REMOVE BEFORE USE') et de laminages NY/EVOH/PE (OTR < 0,1 cc/m²/jour), ils éliminent la casse des bouteilles en verre.",
    ryanNotebookTitle: "🔬 Du Carnet d'Ingénierie de Ryan Wong",
    ryanNotebookText: "\"Lors de la conception de sachets de concentré pour distributeurs automatiques, nous avons renforcé la structure avec un laminage NY/EVOH/PE de 120 microns, obtenant zéro éclatement sous une pression de 45 PSI.\"",
    ryanSignature: "— Ryan Wong, Co-fondateur & Ingénieur en Chef",
    painPointsTitle: "5 Problèmes d'Emballage et Solutions d'Ingénierie",
    faqTitle: "Foire Aux Questions"
  },
  'zh-tw': {
    metaTitle: "異形吸嘴袋與液體濃縮機用補充袋 | Achieve Pack",
    metaDesc: "專為植物奶濃縮液、即飲雞尾酒（RTD）及自動飲水機補充袋設計的異形吸嘴袋。減少 90% 運輸體積，具備超高 EVOH 阻隔與防爆封口。",
    heroTitle: "異形吸嘴袋與液體濃縮補充袋",
    heroSubtitle: "專為自動機器插入式濃縮液、即飲雞尾酒 (RTD) 與液體調酒設計。採用耐用 EVOH 高阻隔膜、撕拉式安全封條，比玻璃瓶節省 90% 運費體積。",
    quickAnswerTitle: "⚡ 快速技術解答",
    quickAnswerText: "Achieve Pack 異形液體吸嘴袋專為高阻隔防護與自動機器插入而設計。配備頂部撕拉式安全條 ('REMOVE BEFORE USE')、加強型防爆頸封與共擠 NY/EVOH/PE 層壓結構（OTR < 0.1 cc/m²/day），完全杜絕玻璃瓶破裂，同時減少高達 90% 的運輸體積。",
    
    empathyTitle: "液體包裝的挑戰：易碎玻璃 vs. 滲漏封口",
    empathyP1: "無論您是推出植物奶濃縮液、工藝 RTD 雞尾酒，還是創新的飲料機系統，您一定體會過運送玻璃瓶的痛苦：高昂的運費、途中的破損以及龐大的倉儲開銷。然而轉向軟包裝也帶來新的顧慮——封口會在壓力下爆裂嗎？酒精或濃縮液會滲透薄膜嗎？使用者如何在不弄髒機器的情況下插入吸嘴袋？",
    empathyP2: "在 Achieve Pack，我們專門開發了異形液體吸嘴袋來解決這些實際痛點。受精密分配卡匣與高端 RTD 包裝啟發，我們的客製吸嘴袋具備撕拉式頸條、定向流道與高抗拉層壓阻隔膜，可承受高達 45 PSI 的液壓插入衝擊而不發生任何滲漏。",
    
    keyTakeawaysTitle: "核心要點 summary",
    kt1: "減少 90% 運輸體積：1 車未充填的扁平吸嘴袋可替代高達 25 車空玻璃瓶的倉儲空間。",
    kt2: "機器分配器即插即用：精密頂部定位切口與撕拉式安全條 ('REMOVE BEFORE USE')，完美適配自動飲料機。",
    kt3: "超高 EVOH 阻隔：零風味流失，OTR < 0.1 cc/m²/day，耐酒精性高達 40% ABV，保質期長達 12 個月。",
    kt4: "零爆裂保證：高抗拉強度 NY/EVOH/PE 層壓膜，可承受機器插入衝擊與跌落測試。",

    ryanNotebookTitle: "🔬 來自 Ryan Wong 的包裝工程筆記",
    ryanNotebookText: "「在為自動飲料機工程化機器插入式液體濃縮袋時，我們遇到了嚴重的液壓衝擊。標準的邊封吸嘴在插入衝擊下發生了微小裂痕。我們使用高抗拉 120 微米 NY/EVOH/PE 結構重新設計了頂頸層壓，並將封口時間延長至 165°C 下 1.8 秒。這在 45 PSI 的插入下實現了零爆裂故障，同時在使用者撕下頂部保護條前保持 100% 密封。」",
    ryanSignature: "— Ryan Wong，聯合創辦人兼首席包裝工程師",

    sec1Title: "精密機器插入與人體工學分配",
    sec1Text: "我們的異形液體袋具有客製外形切邊，旨在無縫對齊到商業或家用分配設備中。頂頸包含印有『REMOVE BEFORE USE』與方向箭頭的直觀撕拉安全條，確保使用者在將袋子插入機器槽之前撕下封口。頸條下方配備多層防刺穿膜，確保機器內針精準刺穿而不撕裂墊圈或造成液體倒流。",

    sec2Title: "高阻隔材料科學：風味與酒精保護",
    sec2Text: "液體濃縮液、植物奶與雞尾酒含有易揮發的精油與酒精分子，會滲透標準塑料包裝。Achieve Pack 使用包含 EVOH（乙烯-乙烯醇共聚物）或鍍鋁 PET 的多層阻隔層壓膜。這為氧氣（OTR < 0.1 cc/m²/day）與水蒸氣（MVTR < 0.5 g/m²/day）提供了不可逾越的屏障，鎖住新鮮風味並防止酒精揮發長達 12 個月。",

    painPointsTitle: "5 大包裝痛點與工程解決方案",
    pp1Title: "01 / 機器插入滲漏與封口爆裂",
    pp1Desc: "標準吸嘴袋在機器分配器的液壓衝擊下在頸封處爆裂或開裂。",
    pp1Sol: "解決方案：工程化 120 微米高抗拉 NY/EVOH/PE 層壓膜，搭配加強型 6mm 超音波頸部焊接區。",
    
    pp2Title: "02 / 龐大運輸運費與玻璃破損",
    pp2Desc: "運輸沉重的玻璃瓶會耗盡物流預算，並導致 3-5% 的途中的破損率。",
    pp2Sol: "解決方案：轉向輕量化軟質吸嘴袋，可減少 75% 的未充填運輸重量與 90% 的體積。",
    
    pp3Title: "03 / 酒精與精油滲透衰減",
    pp3Desc: "高濃度雞尾酒或柑橘濃縮液降解薄膜層，並在 60 天內失去風味強度。",
    pp3Sol: "解決方案：共擠耐酒精 PE 內膜，搭配經認證高達 40% ABV 的 EVOH 阻隔層。",
    
    pp4Title: "04 / 使用者誤操作與飲料機弄髒滴漏",
    pp4Desc: "消費者錯誤插入未開封的袋子，導致分配器內部溢出液體。",
    pp4Sol: "解決方案：印刷高對比度視覺指示圖（1-2-3-4 步驟指南）與頂部方向撕拉條。",
    
    pp5Title: "05 / 環保法規合規與微塑膠問題",
    pp5Desc: "品牌在硬質塑膠方面難以符合歐盟 PPWR 或美國各州的可持續性要求。",
    pp5Sol: "解決方案：提供 100% 可回收 Mono-PE 吸嘴結構或認證家庭可堆肥阻隔薄膜。",

    matrixTitle: "軟質液體吸嘴袋 vs. 傳統硬質瓶",
    matrixCol1: "包裝特性",
    matrixCol2: "Achieve Pack 異形吸嘴袋",
    matrixCol3: "標準玻璃瓶",
    matrixCol4: "硬質 HDPE 塑膠瓶",

    faqTitle: "常見問題解答",
    faq1Q: "哪些液體產品最適合 Achieve Pack 異形吸嘴袋？",
    faq1A: "我們的異形吸嘴袋非常適合植物奶濃縮液（燕麥奶、杏仁奶、豆奶）、即飲雞尾酒（RTD）、調酒濃縮液、冷萃咖啡濃縮液、糖漿、液體調味品、果昔以及機器分配的飲料補充包。",

    faq2Q: "這些吸嘴袋如何與自動飲料分配器整合？",
    faq2A: "我們客製頂頸輪廓，配備精確對齊切口、方向流動箭頭與撕拉式安全條（『REMOVE BEFORE USE』）。內部密封區經工程設計，匹配您機器的刺針機構，實現無洩漏分配。",

    faq3Q: "這些吸嘴袋能否承受高溫充填或殺菌處理？",
    faq3A: "可以！我們生產耐熱 NY/PP 與蒸煮級層壓膜，能夠承受高達 90°C 的高溫充填或 121°C 的高壓蒸煮殺菌，實現無防腐劑的長效常溫儲存。",

    faq4Q: "什麼阻隔保護可防止酒精或風味油流失？",
    faq4A: "我們採用共擠 EVOH 或無鋁鍍鋁阻隔層。這些層為高達 40% ABV 的液體提供零酒精滲透，並防止易揮發精油降解包裝薄膜。",

    faq5Q: "客製異形液體袋的最低訂購量（MOQ）是多少？",
    faq5A: "我們的低 MOQ 數位印刷服務允許從僅 1,000 個起訂做客製異形吸嘴袋，用於市場測試。對於大批量生產，凹版印刷線可高效擴展至 10,000+ 個，單價更低。"
  }
};

const CocktailSpout = () => {
  const { i18n } = useTranslation();
  const currentLang = i18n.language ? i18n.language.toLowerCase() : 'en';
  const t = localTranslations[currentLang] || localTranslations['en'];
  const isPouchDomain = getDomain() === 'pouch';

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": t.faq1Q,
        "acceptedAnswer": { "@type": "Answer", "text": t.faq1A }
      },
      {
        "@type": "Question",
        "name": t.faq2Q,
        "acceptedAnswer": { "@type": "Answer", "text": t.faq2A }
      },
      {
        "@type": "Question",
        "name": t.faq3Q,
        "acceptedAnswer": { "@type": "Answer", "text": t.faq3A }
      },
      {
        "@type": "Question",
        "name": t.faq4Q,
        "acceptedAnswer": { "@type": "Answer", "text": t.faq4A }
      },
      {
        "@type": "Question",
        "name": t.faq5Q,
        "acceptedAnswer": { "@type": "Answer", "text": t.faq5A }
      }
    ]
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": t.heroTitle,
    "description": t.metaDesc,
    "image": "https://achievepack.com/imgs/topics/cocktail-spout/hero.jpg",
    "author": {
      "@type": "Person",
      "name": "Ryan Wong",
      "jobTitle": "Co-Founder & Chief Packaging Engineer",
      "worksFor": { "@type": "Organization", "name": "Achieve Pack" }
    },
    "publisher": {
      "@type": "Organization",
      "name": "Achieve Pack",
      "logo": { "@type": "ImageObject", "url": "https://achievepack.com/imgs/logo.png" }
    }
  };

  return (
    <SEOPageLayout>
      <Helmet>
        <title>{t.metaTitle}</title>
        <meta name="description" content={t.metaDesc} />
        <link rel="canonical" href="https://achievepack.com/topics/cocktail-spout" />
        <meta property="og:title" content={t.metaTitle} />
        <meta property="og:description" content={t.metaDesc} />
        <meta property="og:image" content="https://achievepack.com/imgs/topics/cocktail-spout/hero.jpg" />
        <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
        <script type="application/ld+json">{JSON.stringify(articleSchema)}</script>
      </Helmet>

      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-neutral-950 via-neutral-900 to-emerald-950 text-white py-16 px-6 sm:px-12 rounded-3xl mb-12 shadow-2xl border border-neutral-800 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-4xl relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 text-xs font-semibold uppercase tracking-wider mb-6">
            <Droplet className="w-4 h-4" />
            <span>Precision Liquid Dispensing & Refill Packaging</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-6 leading-tight">
            {t.heroTitle}
          </h1>
          <p className="text-lg sm:text-xl text-neutral-300 mb-8 leading-relaxed max-w-3xl">
            {t.heroSubtitle}
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="https://calendly.com/30-min-free-packaging-consultancy" target="_blank" rel="noopener noreferrer" className="px-6 py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-neutral-950 font-bold transition-all shadow-lg hover:shadow-emerald-500/20 flex items-center gap-2">
              <span>Book Liquid Packaging Audit</span>
              <ArrowRight className="w-4 h-4" />
            </a>
            <Link to="/size-guide" className="px-6 py-3.5 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-white font-semibold border border-neutral-700 transition-all">
              Explore Spout Dimensions
            </Link>
          </div>
        </div>
      </div>

      {/* Human-Centric Empathy Hook */}
      <div className="bg-white rounded-2xl p-8 mb-12 border border-neutral-200 shadow-sm">
        <h2 className="text-2xl font-bold text-neutral-900 mb-4 flex items-center gap-2">
          <Wine className="w-6 h-6 text-emerald-600" />
          <span>{t.empathyTitle}</span>
        </h2>
        <p className="text-neutral-700 text-base leading-relaxed mb-4">
          {t.empathyP1}
        </p>
        <p className="text-neutral-700 text-base leading-relaxed">
          {t.empathyP2}
        </p>
      </div>

      {/* AI Quick Answer Card */}
      <div className="bg-gradient-to-r from-emerald-900/90 to-neutral-900 text-white p-6 sm:p-8 rounded-2xl mb-12 border border-emerald-500/30 shadow-lg">
        <h3 className="text-lg font-bold text-emerald-400 mb-2 uppercase tracking-wide flex items-center gap-2">
          <Zap className="w-5 h-5" />
          <span>{t.quickAnswerTitle}</span>
        </h3>
        <p className="text-neutral-200 text-sm sm:text-base leading-relaxed">
          {t.quickAnswerText}
        </p>
      </div>

      {/* Key Takeaways Card */}
      <div className="bg-emerald-50/60 border border-emerald-200 rounded-2xl p-6 sm:p-8 mb-12">
        <h3 className="text-xl font-bold text-emerald-900 mb-4 flex items-center gap-2">
          <CheckCircle className="w-5 h-5 text-emerald-600" />
          <span>{t.keyTakeawaysTitle}</span>
        </h3>
        <ul className="space-y-3 text-neutral-800 text-sm sm:text-base">
          <li className="flex items-start gap-3">
            <span className="w-2 h-2 rounded-full bg-emerald-500 mt-2 flex-shrink-0" />
            <span>{t.kt1}</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="w-2 h-2 rounded-full bg-emerald-500 mt-2 flex-shrink-0" />
            <span>{t.kt2}</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="w-2 h-2 rounded-full bg-emerald-500 mt-2 flex-shrink-0" />
            <span>{t.kt3}</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="w-2 h-2 rounded-full bg-emerald-500 mt-2 flex-shrink-0" />
            <span>{t.kt4}</span>
          </li>
        </ul>
      </div>

      {/* Ryan Wong's Engineering Notebook */}
      <div className="bg-neutral-900 text-white p-8 rounded-2xl mb-12 border border-amber-500/30 shadow-xl relative overflow-hidden">
        <div className="absolute top-0 right-0 px-4 py-1 bg-amber-500/20 text-amber-400 text-xs font-mono rounded-bl-xl border-l border-b border-amber-500/30">
          ENGINEERING LOG #482
        </div>
        <h3 className="text-xl font-bold text-amber-400 mb-4 flex items-center gap-2">
          <span>{t.ryanNotebookTitle}</span>
        </h3>
        <p className="text-neutral-300 italic text-base leading-relaxed mb-4">
          {t.ryanNotebookText}
        </p>
        <p className="text-amber-400 font-semibold text-sm">
          {t.ryanSignature}
        </p>
      </div>

      {/* Media Showcase 1: Hero Pouch */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-12">
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900 mb-4">
            {t.sec1Title}
          </h2>
          <p className="text-neutral-700 text-base leading-relaxed mb-4">
            {t.sec1Text}
          </p>
          <div className="flex items-center gap-3 text-sm font-semibold text-emerald-700">
            <ShieldCheck className="w-5 h-5 text-emerald-600" />
            <span>Tamper-Evident Safety Neck Strip | Intuitive 'REMOVE BEFORE USE'</span>
          </div>
        </div>
        <div>
          <ClickableImage 
            src="/imgs/topics/cocktail-spout/hero.jpg" 
            alt="Achieve Pack Shaped Liquid Dispensing Spout Pouch" 
            className="w-full h-auto rounded-2xl shadow-lg border border-neutral-200"
          />
        </div>
      </div>

      {/* Media Showcase 2: Filling & Process */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-12">
        <div className="order-2 md:order-1">
          <ClickableImage 
            src="/imgs/topics/cocktail-spout/process.jpg" 
            alt="High-Barrier Spout Pouch Dispenser Insertion Guide" 
            className="w-full h-auto rounded-2xl shadow-lg border border-neutral-200"
          />
        </div>
        <div className="order-1 md:order-2">
          <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900 mb-4">
            {t.sec2Title}
          </h2>
          <p className="text-neutral-700 text-base leading-relaxed mb-4">
            {t.sec2Text}
          </p>
          <div className="flex items-center gap-3 text-sm font-semibold text-emerald-700">
            <Layers className="w-5 h-5 text-emerald-600" />
            <span>EVOH / Met-PET Co-extruded High-Barrier Film</span>
          </div>
        </div>
      </div>

      {/* Media Showcase 3: Logistics Comparison */}
      <div className="bg-neutral-900 text-white rounded-3xl p-8 sm:p-12 mb-12 border border-neutral-800">
        <div className="text-center max-w-2xl mx-auto mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">
            {t.matrixTitle}
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base">
            Comparing unfilled shipping footprint, breakage protection, and barrier longevity across packaging formats.
          </p>
        </div>
        <div className="mb-8">
          <ClickableImage 
            src="/imgs/topics/cocktail-spout/comparison.jpg" 
            alt="Flexible Spout Pouches vs Glass Bottles Freight Comparison" 
            className="w-full h-auto rounded-2xl shadow-2xl border border-neutral-700"
          />
        </div>
        {/* Comparison Matrix Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm border-collapse">
            <thead>
              <tr className="border-b border-neutral-800 text-emerald-400 uppercase text-xs tracking-wider">
                <th className="py-4 px-4 font-semibold">{t.matrixCol1}</th>
                <th className="py-4 px-4 font-semibold">{t.matrixCol2}</th>
                <th className="py-4 px-4 font-semibold">{t.matrixCol3}</th>
                <th className="py-4 px-4 font-semibold">{t.matrixCol4}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-neutral-800 text-neutral-300">
              <tr>
                <td className="py-4 px-4 font-medium text-white">{t.mR1C1}</td>
                <td className="py-4 px-4 text-emerald-400 font-semibold">{t.mR1C2}</td>
                <td className="py-4 px-4">{t.mR1C3}</td>
                <td className="py-4 px-4">{t.mR1C4}</td>
              </tr>
              <tr>
                <td className="py-4 px-4 font-medium text-white">{t.mR2C1}</td>
                <td className="py-4 px-4 text-emerald-400 font-semibold">{t.mR2C2}</td>
                <td className="py-4 px-4">{t.mR2C3}</td>
                <td className="py-4 px-4">{t.mR2C4}</td>
              </tr>
              <tr>
                <td className="py-4 px-4 font-medium text-white">{t.mR3C1}</td>
                <td className="py-4 px-4 text-emerald-400 font-semibold">{t.mR3C2}</td>
                <td className="py-4 px-4">{t.mR3C3}</td>
                <td className="py-4 px-4">{t.mR3C4}</td>
              </tr>
              <tr>
                <td className="py-4 px-4 font-medium text-white">{t.mR4C1}</td>
                <td className="py-4 px-4 text-emerald-400 font-semibold">{t.mR4C2}</td>
                <td className="py-4 px-4">{t.mR4C3}</td>
                <td className="py-4 px-4">{t.mR4C4}</td>
              </tr>
              <tr>
                <td className="py-4 px-4 font-medium text-white">{t.mR5C1}</td>
                <td className="py-4 px-4 text-emerald-400 font-semibold">{t.mR5C2}</td>
                <td className="py-4 px-4">{t.mR5C3}</td>
                <td className="py-4 px-4">{t.mR5C4}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* 5 Pain Points & Solutions */}
      <div className="mb-12">
        <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900 mb-8 text-center">
          {t.painPointsTitle}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-neutral-900 text-white p-6 rounded-2xl border border-neutral-800 shadow-md">
            <div className="text-xs font-mono text-emerald-400 mb-2">{t.pp1Title}</div>
            <p className="text-neutral-400 text-sm mb-4">{t.pp1Desc}</p>
            <div className="bg-emerald-950/60 border border-emerald-500/30 p-3 rounded-xl text-emerald-300 text-xs font-medium">
              {t.pp1Sol}
            </div>
          </div>

          <div className="bg-neutral-900 text-white p-6 rounded-2xl border border-neutral-800 shadow-md">
            <div className="text-xs font-mono text-emerald-400 mb-2">{t.pp2Title}</div>
            <p className="text-neutral-400 text-sm mb-4">{t.pp2Desc}</p>
            <div className="bg-emerald-950/60 border border-emerald-500/30 p-3 rounded-xl text-emerald-300 text-xs font-medium">
              {t.pp2Sol}
            </div>
          </div>

          <div className="bg-neutral-900 text-white p-6 rounded-2xl border border-neutral-800 shadow-md">
            <div className="text-xs font-mono text-emerald-400 mb-2">{t.pp3Title}</div>
            <p className="text-neutral-400 text-sm mb-4">{t.pp3Desc}</p>
            <div className="bg-emerald-950/60 border border-emerald-500/30 p-3 rounded-xl text-emerald-300 text-xs font-medium">
              {t.pp3Sol}
            </div>
          </div>

          <div className="bg-neutral-900 text-white p-6 rounded-2xl border border-neutral-800 shadow-md">
            <div className="text-xs font-mono text-emerald-400 mb-2">{t.pp4Title}</div>
            <p className="text-neutral-400 text-sm mb-4">{t.pp4Desc}</p>
            <div className="bg-emerald-950/60 border border-emerald-500/30 p-3 rounded-xl text-emerald-300 text-xs font-medium">
              {t.pp4Sol}
            </div>
          </div>

          <div className="bg-neutral-900 text-white p-6 rounded-2xl border border-neutral-800 shadow-md lg:col-span-2">
            <div className="text-xs font-mono text-emerald-400 mb-2">{t.pp5Title}</div>
            <p className="text-neutral-400 text-sm mb-4">{t.pp5Desc}</p>
            <div className="bg-emerald-950/60 border border-emerald-500/30 p-3 rounded-xl text-emerald-300 text-xs font-medium">
              {t.pp5Sol}
            </div>
          </div>
        </div>
      </div>

      {/* Store Product Relations */}
      <div className="bg-neutral-50 rounded-2xl p-8 mb-12 border border-neutral-200">
        <h3 className="text-xl font-bold text-neutral-900 mb-6 flex items-center gap-2">
          <Package className="w-5 h-5 text-emerald-600" />
          <span>Explore Related Liquid Packaging Options</span>
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <Link to="/packaging/spout-pouches" className="bg-white p-4 rounded-xl border border-neutral-200 hover:border-emerald-500 transition-all group shadow-sm">
            <img src="/imgs/topics/cocktail-spout/hero.jpg" alt="Spout Pouches" className="w-full h-32 object-cover rounded-lg mb-3 group-hover:scale-105 transition-transform" />
            <h4 className="font-bold text-sm text-neutral-900 group-hover:text-emerald-600 mb-1">Standard Spout Pouches</h4>
            <p className="text-xs text-neutral-500">Corner & top spout formats for RTD cocktails and sauces.</p>
          </Link>
          <Link to="/packaging/stand-up-pouches" className="bg-white p-4 rounded-xl border border-neutral-200 hover:border-emerald-500 transition-all group shadow-sm">
            <img src="/imgs/topics/cocktail-spout/process.jpg" alt="Stand Up Pouches" className="w-full h-32 object-cover rounded-lg mb-3 group-hover:scale-105 transition-transform" />
            <h4 className="font-bold text-sm text-neutral-900 group-hover:text-emerald-600 mb-1">Stand-Up Zipper Pouches</h4>
            <p className="text-xs text-neutral-500">High-barrier pouches for powders, dried ingredients & snacks.</p>
          </Link>
          <Link to="/materials/compostable" className="bg-white p-4 rounded-xl border border-neutral-200 hover:border-emerald-500 transition-all group shadow-sm">
            <img src="/imgs/topics/cocktail-spout/comparison.jpg" alt="Compostable Pouches" className="w-full h-32 object-cover rounded-lg mb-3 group-hover:scale-105 transition-transform" />
            <h4 className="font-bold text-sm text-neutral-900 group-hover:text-emerald-600 mb-1">Compostable Barrier Films</h4>
            <p className="text-xs text-neutral-500">TUV certified home & industrial compostable laminates.</p>
          </Link>
        </div>
      </div>

      {/* Author Card */}
      <div className="bg-white rounded-2xl p-6 mb-12 border border-neutral-200 shadow-sm flex flex-col sm:flex-row items-center gap-6">
        <div className="w-20 h-20 rounded-full bg-emerald-500 text-white flex items-center justify-center font-bold text-2xl flex-shrink-0 shadow-md">
          RW
        </div>
        <div>
          <h4 className="text-lg font-bold text-neutral-900 mb-1">{t.authorName}</h4>
          <p className="text-xs font-semibold text-emerald-600 uppercase tracking-wider mb-2">{t.authorRole}</p>
          <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">{t.authorBio}</p>
        </div>
      </div>

      {/* FAQs */}
      <div className="bg-white rounded-2xl p-8 mb-12 border border-neutral-200 shadow-sm">
        <h2 className="text-2xl font-bold text-neutral-900 mb-6 flex items-center gap-2">
          <HelpCircle className="w-6 h-6 text-emerald-600" />
          <span>{t.faqTitle}</span>
        </h2>
        <div className="space-y-4">
          <details className="group border border-neutral-200 rounded-xl p-4 [&_summary::-webkit-details-marker]:hidden">
            <summary className="flex items-center justify-between font-semibold text-neutral-900 cursor-pointer text-sm sm:text-base">
              <span>{t.faq1Q}</span>
              <span className="transition group-open:rotate-180">
                <ArrowRight className="w-4 h-4 text-emerald-600 rotate-90" />
              </span>
            </summary>
            <p className="text-neutral-600 text-sm mt-3 leading-relaxed">
              {t.faq1A}
            </p>
          </details>

          <details className="group border border-neutral-200 rounded-xl p-4 [&_summary::-webkit-details-marker]:hidden">
            <summary className="flex items-center justify-between font-semibold text-neutral-900 cursor-pointer text-sm sm:text-base">
              <span>{t.faq2Q}</span>
              <span className="transition group-open:rotate-180">
                <ArrowRight className="w-4 h-4 text-emerald-600 rotate-90" />
              </span>
            </summary>
            <p className="text-neutral-600 text-sm mt-3 leading-relaxed">
              {t.faq2A}
            </p>
          </details>

          <details className="group border border-neutral-200 rounded-xl p-4 [&_summary::-webkit-details-marker]:hidden">
            <summary className="flex items-center justify-between font-semibold text-neutral-900 cursor-pointer text-sm sm:text-base">
              <span>{t.faq3Q}</span>
              <span className="transition group-open:rotate-180">
                <ArrowRight className="w-4 h-4 text-emerald-600 rotate-90" />
              </span>
            </summary>
            <p className="text-neutral-600 text-sm mt-3 leading-relaxed">
              {t.faq3A}
            </p>
          </details>

          <details className="group border border-neutral-200 rounded-xl p-4 [&_summary::-webkit-details-marker]:hidden">
            <summary className="flex items-center justify-between font-semibold text-neutral-900 cursor-pointer text-sm sm:text-base">
              <span>{t.faq4Q}</span>
              <span className="transition group-open:rotate-180">
                <ArrowRight className="w-4 h-4 text-emerald-600 rotate-90" />
              </span>
            </summary>
            <p className="text-neutral-600 text-sm mt-3 leading-relaxed">
              {t.faq4A}
            </p>
          </details>

          <details className="group border border-neutral-200 rounded-xl p-4 [&_summary::-webkit-details-marker]:hidden">
            <summary className="flex items-center justify-between font-semibold text-neutral-900 cursor-pointer text-sm sm:text-base">
              <span>{t.faq5Q}</span>
              <span className="transition group-open:rotate-180">
                <ArrowRight className="w-4 h-4 text-emerald-600 rotate-90" />
              </span>
            </summary>
            <p className="text-neutral-600 text-sm mt-3 leading-relaxed">
              {t.faq5A}
            </p>
          </details>
        </div>
      </div>

      {/* GEO Semantic SR-Only Block */}
      <div className="sr-only" aria-hidden="true">
        <section data-ai-faq="true" itemScope itemType="https://schema.org/FAQPage">
          <article itemScope itemType="https://schema.org/Question" itemProp="mainEntity">
            <h3 itemProp="name">{t.faq1Q}</h3>
            <div itemScope itemType="https://schema.org/Answer" itemProp="acceptedAnswer">
              <p itemProp="text">{t.faq1A}</p>
            </div>
          </article>
        </section>
      </div>
    </SEOPageLayout>
  );
};

export default CocktailSpout;
