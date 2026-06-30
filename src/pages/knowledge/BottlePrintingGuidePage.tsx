import React from 'react'
import { getDomain } from '../../utils/domain'
import BlogArticleTemplate from '../../components/pouch/BlogArticleTemplate'
import SEOPageLayout from '../../components/SEOPageLayout'
import PouchLayout from '../../components/pouch/PouchLayout'
import { Printer, ShieldCheck, Flame, Scissors, HelpCircle, Layers, ArrowRight, Award } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

const translations = {
  en: {
    title: "How to Print on Bottles & Canisters: 4 Main Methods Compared",
    metaDesc: "Compare Heat Transfer, Laser Engraving, Sticker Labeling, and Silk Screen Printing for custom bottles and canisters. Read materials specs, wash limits, and GRS auditing standards.",
    heroTitle: "How to Print on Bottles & Jars: The Ultimate Customization Guide",
    heroSubtitle: "Analyzing heat transfer, laser engraving, stickers, and silk screen printing for sustainable rigid packaging.",
    faq1q: "Which printing method is best for cylindrical acrylic canisters?",
    faq1a: "For cylindrical acrylic canisters, silk screen printing is the industry standard for 1-2 spot colors due to high adhesion and lower cost. For complex full-color designs, heat transfer film via a heated silicone roller offers the best wrap-around result, while adhesive labels are the most versatile for fast product runs.",
    faq2q: "How does heat transfer printing on a bottle bottom work?",
    faq2a: "Heat transfer printing uses a heated silicone plate or roller to apply pressure to a carrier film. As the bottle rotates on rollers, the heat (150°C-210°C) melts the adhesive layer of the film, releasing the printed ink onto the plastic/acrylic surface, creating a permanent high-resolution graphic wrap.",
    faq3q: "Is laser engraving permanent on painted metallic and plastic surfaces?",
    faq3a: "Yes. Laser engraving is a subtractive process that uses a high-energy laser beam to vaporize or etch the top coat of the bottle, exposing the material underneath (such as stainless steel or contrasting polymer layers). It is 100% permanent, wash-proof, and won't fade.",
    introTitle: "Rigid Packaging Customization: Decoding the Print Pipeline",
    quickAnswer: "Quick Answer: Small spot-color logos are best applied via Silk Screen Printing, while full-color wraps require Heat Transfer Film under pressure. Permanent tactile marks are achieved by Laser Engraving, and variable batches utilize high-durability Sticker Labels.",
    takeawayTitle: "Key Takeaways",
    takeaway1: "Silk screen printing provides the thickest ink layer, delivering vibrant spot colors with excellent chemical resistance.",
    takeaway2: "Heat transfer plates transfer complex photographic graphics from a PET carrier film to the bottle surface at 180°C.",
    takeaway3: "Laser engraving vaporizes surface coats, creating durable, tactile, and completely wash-proof branding.",
    takeaway4: "Self-adhesive sticker labels are highly versatile, allowing easy design pivots and material textures.",
    introP1: "Customizing rigid containers like acrylic canisters, PET bottles, and metal jars requires selecting the correct mechanical printing pipeline. The right choice depends on the surface curvature, container material, design complexity, and expected lifecycle limits.",
    introP2: "Below, we dive deep into the mechanics of Heat Transfer, Laser Engraving, Sticker Decals, and Silk Screen Printing, analyzing how they perform under commercial wash cycles, GRS standards, and everyday shipping environments.",
    expertTitle: "Expert Engineering Insight",
    expertSub: "From Ryan Wong's Engineering Notebook",
    expertQ1: "\"A common error in bottle customization is trying to use direct heat transfer iron-ons on the bottom curve of an acrylic jar. Direct heat plates cause uneven pressure, resulting in micro-bubbles and logo peeling.\"",
    expertQ2: "To print successfully on curved bottoms, we employ a heated silicone rubber transfer roller. The soft silicone conforms to the bottle surface, ensuring even pressure and thermal dwell time. For rigid acrylic, we also pre-treat the surface with a flame or corona discharge to maximize ink adhesion and pass the 3M tape test.",
    matrixTitle: "Technical Comparison Matrix: Bottle Customization",
    matrixParam: "Technical Parameter",
    methodHeat: "Heat Transfer",
    methodLaser: "Laser Engraving",
    methodSticker: "Stickers & Labels",
    methodScreen: "Silk Screen",
    durability: "Wash Durability (Cycles)",
    heatDur: "100+ Cycles (Commercial)",
    laserDur: "Infinite (Lifetime Permanent)",
    stickerDur: "50-100 Cycles (Premium PET)",
    screenDur: "200+ Cycles (Epoxy Inks)",
    setupCost: "Initial Setup / Plates Cost",
    heatSetup: "High (Per Cylinder Plate)",
    laserSetup: "Zero (Digital Vector)",
    stickerSetup: "Low (Digital Die-Cut)",
    screenSetup: "Medium (Mesh Screen)",
    minOrder: "Minimum Order Quantity (MOQ)",
    heatMoq: "3,000+ units",
    laserMoq: "100+ units",
    stickerMoq: "100+ units",
    screenMoq: "500+ units",
    colorCapability: "Color Capability",
    heatColor: "Full-color photographic gradients",
    laserColor: "Monochrome (Subtracted layer)",
    stickerColor: "Full CMYK + Metallic/Textured",
    screenColor: "1-4 Spot Colors (PMS matching)",
    ctaTitle: "Request a Printing Feasibility Review",
    ctaDesc: "Send us your artwork to analyze the optimal printing setup for your bottles, canisters, and lids under GRS circular standards.",
    ctaBtn: "Consult with Ryan Wong",
    upgradeCta: "Shop Customizable Jars",
    upgradeDesc: "Explore our wholesale-priced high-clarity reusable airtight canisters and jars with customization options.",
    shopTitle: "Customize Reusable Canisters",
    shopDesc: "We support screen printing, laser engraving, and custom label application from 100+ units.",
    shopBtn: "Shop Reusable Canisters",
    processTitle: "Step-by-Step Print Mechanics"
  },
  'zh-TW': {
    title: "瓶罐印刷指南：四種主流客製化工藝深度比較",
    metaDesc: "比較熱轉印、雷射雕刻、不干膠貼紙和絲網印刷四種瓶罐客製化工藝。了解材料適性、耐洗性與 GRS 永續包裝規範。",
    heroTitle: "瓶罐客製化指南：解密四種主流印刷工藝",
    heroSubtitle: "深入分析熱轉印、雷射雕刻、貼標與絲網印刷在永續硬質包裝中的應用與技術規格。",
    faq1q: "哪種印刷方法最適合亞克力罐？",
    faq1a: "對於亞克力罐，絲網印刷是印製 1-2 色單色標誌的首選，附著力強且成本較低。若有複雜的多色或漸層設計，採用矽膠輪加熱的熱轉印膜是最佳選擇；而對於小批量和多品項，不干膠貼紙是最具彈性的做法。",
    faq2q: "瓶底或瓶身的熱轉印是如何運作的？",
    faq2a: "熱轉印印刷是使用加熱的矽膠印版或膠輪向轉印膜施壓。當瓶子在滾輪上旋轉時，高溫（150°C-210°C）熔化轉印膜上的熱熔膠層，將印刷圖案釋放並牢固粘合到亞克力或塑料表面，完成精細的全彩色包裝。",
    faq3q: "雷射雕刻在塗層金屬或塑料表面是永久性的嗎？",
    faq3a: "是的。雷射雕刻是一種減法工藝，利用高能量雷射光束氣化或蝕刻瓶子表面的塗層，顯露出底層的材質色彩（如不鏽鋼或不同顏色的聚合物層）。它100%永久存在，耐磨防刮且永不褪色。",
    introTitle: "硬質包裝客製化：解構印刷生產鏈",
    quickAnswer: "快速解答：小面積單色標誌首選「絲網印刷」；全彩漸層包裝適用「熱轉印膜」；金屬與高端瓶罐推薦「雷射雕刻」實現永續不褪色；小批量多樣化設計最適合採用「不干膠貼紙」。",
    takeawayTitle: "關鍵要點",
    takeaway1: "絲網印刷能提供最厚實的墨層，呈現飽滿的專色並具備極佳的耐化學性。",
    takeaway2: "熱轉印工藝在高溫（180°C）下，將 PET 載體膜上的全彩照片級圖案完整轉移至瓶身。",
    takeaway3: "雷射雕刻直接氣化表面塗層，創造出極佳的耐磨性、質感與完全防洗的品牌標誌。",
    takeaway4: "不干膠貼紙提供最大的材質選擇與彈性，適合產品迭代與豐富的表面紋理。",
    introP1: "硬質包裝容器（如亞克力密封罐、PET 瓶和金屬茶罐）的客製化，首要步驟是選擇正確的物理印刷生產工藝。這取決於容器的表面曲率、材質特性、設計複雜度以及預期的生命週期。",
    introP2: "下面我們將深入探討熱轉印、雷射雕刻、貼標與絲網印刷的工藝機制，並分析其在商業清洗、GRS 永續標準與物流運輸中的實際表現。",
    expertTitle: "專家工程見解",
    expertSub: "來自 Ryan Wong 的工程筆記",
    expertQ1: "「在亞克力罐的弧面底部進行客製化時，一個常見錯誤是試圖使用直壓式熨印轉印。這種硬性直壓會導致弧面受力不均，產生微小氣泡和邊緣翹起起皮。」",
    expertQ2: "為了解決弧面印刷，我們採用了受熱均勻的軟性矽膠轉印滾輪。軟性矽膠能順應瓶身弧度，確保壓力和熱傳導均勻。對於表面緻密的亞克力，我們會先進行火焰或電暈預處理，以提升油墨的附著力，確保通過 3M 拉力測試。」",
    matrixTitle: "技術參數比較表：瓶罐客製化印刷",
    matrixParam: "技術參數",
    methodHeat: "熱轉印 (Transfer)",
    methodLaser: "雷射雕刻 (Laser)",
    methodSticker: "貼紙標籤 (Stickers)",
    methodScreen: "絲網印刷 (Screen)",
    durability: "耐清洗壽命 (洗碗機測試)",
    heatDur: "100次以上商業洗滌",
    laserDur: "永久不磨損 (與材質共存)",
    stickerDur: "50-100次 (高端防水PET)",
    screenDur: "200次以上 (環氧樹脂油墨)",
    setupCost: "版費與前期設置成本",
    heatSetup: "高 (需製作電雕鋼版鋼輥)",
    laserSetup: "零版費 (數位向量控制)",
    stickerSetup: "極低 (數位刀模切)",
    screenSetup: "中等 (網版感光製版)",
    minOrder: "最低起訂量 (MOQ)",
    heatMoq: "3,000 個起",
    laserMoq: "100 個起",
    stickerMoq: "100 個起",
    screenMoq: "500 個起",
    colorCapability: "色彩表現力",
    heatColor: "支持全彩色相片級漸層",
    laserColor: "單色 (取決於底材顯色)",
    stickerColor: "全彩 CMYK + 燙金與局部紋理",
    screenColor: "1-4 色專色 (PMS 對色系統)",
    ctaTitle: "預約瓶罐客製化工藝評估",
    ctaDesc: "提供您的標誌與包裝設計，由包裝工程師為您規劃最符合 GRS 永續認證與生產預算的印刷方案。",
    ctaBtn: "預約 Ryan Wong 的諮詢",
    upgradeCta: "選購可客製化密封罐",
    upgradeDesc: "選購高透光、可重複使用的食品級密封罐，支持多種客製化印刷工藝。",
    shopTitle: "客製化可重複使用罐",
    shopDesc: "支持 100 個起進行絲網印刷、雷射雕刻與標籤貼紙定制服務。",
    shopBtn: "選購密封罐系列",
    processTitle: "四種印刷工藝工作原理圖"
  }
}

// ----------------------------------------------------
// Custom interactive vector illustrations representing printing methods
// ----------------------------------------------------
const HeatTransferSVG = () => (
  <svg viewBox="0 0 400 300" className="w-full h-full bg-slate-900 rounded-xl border border-slate-800 shadow-inner">
    {/* Background Grid Lines */}
    <defs>
      <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
        <path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
      </pattern>
      <linearGradient id="heatGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#ef4444" />
        <stop offset="50%" stopColor="#f97316" />
        <stop offset="100%" stopColor="#eab308" />
      </linearGradient>
    </defs>
    <rect width="100%" height="100%" fill="url(#grid)" />
    
    {/* Heated Roller */}
    <circle cx="200" cy="110" r="45" fill="url(#heatGrad)" opacity="0.9" className="animate-pulse" />
    <circle cx="200" cy="110" r="35" fill="#3f3f46" stroke="#18181b" strokeWidth="4" />
    <text x="200" y="115" textAnchor="middle" fill="#ffffff" className="font-['JetBrains_Mono'] text-[9px] font-black uppercase">180°C HEAT</text>
    
    {/* Film Sheet Rollers */}
    <line x1="80" y1="162" x2="320" y2="162" stroke="#e2e8f0" strokeWidth="4" strokeDasharray="5,5" />
    <circle cx="80" cy="162" r="10" fill="#a1a1aa" />
    <circle cx="320" cy="162" r="10" fill="#a1a1aa" />
    
    {/* Carrier Film Path and ink */}
    <path d="M 80 162 C 140 162, 170 157, 200 155 C 230 157, 260 162, 320 162" fill="none" stroke="#60a5fa" strokeWidth="2" />
    <rect x="180" y="152" width="40" height="4" fill="#10b981" />
    
    {/* Bottle */}
    <rect x="130" y="180" width="140" height="75" rx="8" fill="none" stroke="#38bdf8" strokeWidth="6" />
    <rect x="140" y="190" width="120" height="55" rx="4" fill="none" stroke="#38bdf8" strokeWidth="2" opacity="0.5" />
    {/* Rotating Arrows */}
    <path d="M 285 205 A 15 15 0 0 1 285 230" fill="none" stroke="#38bdf8" strokeWidth="2" strokeDasharray="3,3" />
    <polygon points="280,230 290,232 285,225" fill="#38bdf8" />
    
    {/* Pressure indicators */}
    <path d="M 200 60 L 200 25" stroke="#ef4444" strokeWidth="3" />
    
    {/* Labeling Text */}
    <text x="200" y="275" textAnchor="middle" fill="#94a3b8" className="font-['JetBrains_Mono'] text-xs font-bold uppercase">Silicon Roller Pressing Film on Bottle</text>
  </svg>
)

const LaserEngravingSVG = () => (
  <svg viewBox="0 0 400 300" className="w-full h-full bg-slate-900 rounded-xl border border-slate-800 shadow-inner">
    <rect width="100%" height="100%" fill="url(#grid)" />
    
    {/* Laser Head */}
    <rect x="175" y="30" width="50" height="50" rx="4" fill="#27272a" stroke="#52525b" strokeWidth="3" />
    <circle cx="200" cy="80" r="8" fill="#18181b" />
    
    {/* Laser Beam */}
    <line x1="200" y1="80" x2="200" y2="175" stroke="#00ffff" strokeWidth="3" className="animate-pulse" />
    <line x1="200" y1="80" x2="200" y2="175" stroke="#ffffff" strokeWidth="1" />
    
    {/* Sparks */}
    <circle cx="200" cy="175" r="3" fill="#eab308" />
    <path d="M 195 170 L 190 165 M 205 170 L 210 165 M 200 178 L 200 185" stroke="#eab308" strokeWidth="2" />
    
    {/* Bottle */}
    <rect x="120" y="175" width="160" height="80" rx="4" fill="#18181b" stroke="#3f3f46" strokeWidth="4" />
    <rect x="170" y="200" width="60" height="30" fill="none" stroke="#00ffff" strokeWidth="2" strokeDasharray="3,3" />
    <text x="200" y="218" textAnchor="middle" fill="#00ffff" className="font-['JetBrains_Mono'] text-[10px] font-bold">LOGO</text>
    
    <text x="200" y="275" textAnchor="middle" fill="#94a3b8" className="font-['JetBrains_Mono'] text-xs font-bold uppercase">CNC Vector Laser Beam Ablation</text>
  </svg>
)

const StickerLabelSVG = () => (
  <svg viewBox="0 0 400 300" className="w-full h-full bg-slate-900 rounded-xl border border-slate-800 shadow-inner">
    <rect width="100%" height="100%" fill="url(#grid)" />
    
    {/* Bottle */}
    <rect x="130" y="80" width="140" height="150" rx="10" fill="none" stroke="#60a5fa" strokeWidth="4" />
    
    {/* Backing paper peeling off */}
    <path d="M 330 90 C 270 90, 240 120, 200 135 C 160 150, 130 150, 100 150" fill="none" stroke="#f43f5e" strokeWidth="2" strokeDasharray="4,4" />
    <circle cx="330" cy="90" r="6" fill="#f43f5e" />
    
    {/* Sticker Adhesive Layer */}
    <rect x="145" y="115" width="110" height="80" rx="4" fill="#ffffff" stroke="#e2e8f0" strokeWidth="2" opacity="0.9" />
    <rect x="155" y="125" width="90" height="60" fill="#fef08a" stroke="#ca8a04" strokeWidth="1" />
    <text x="200" y="155" textAnchor="middle" fill="#ca8a04" className="font-sans text-[8px] font-black">ORGANIC TEA</text>
    <text x="200" y="165" textAnchor="middle" fill="#ca8a04" className="font-sans text-[7px] font-bold">100g Loose Leaf</text>
    
    {/* Hand or Roller Pressing */}
    <circle cx="255" cy="155" r="16" fill="#10b981" opacity="0.8" />
    <text x="255" y="159" textAnchor="middle" fill="#ffffff" className="font-['JetBrains_Mono'] text-[9px] font-bold">PRESS</text>
    
    <text x="200" y="275" textAnchor="middle" fill="#94a3b8" className="font-['JetBrains_Mono'] text-xs font-bold uppercase">Self-Adhesive Film Labeling Process</text>
  </svg>
)

const SilkScreenSVG = () => (
  <svg viewBox="0 0 400 300" className="w-full h-full bg-slate-900 rounded-xl border border-slate-800 shadow-inner">
    <rect width="100%" height="100%" fill="url(#grid)" />
    
    {/* Screen Frame */}
    <rect x="70" y="70" width="260" height="12" fill="#d4d4d8" stroke="#71717a" strokeWidth="2" />
    <line x1="80" y1="82" x2="320" y2="82" stroke="#a1a1aa" strokeWidth="2" />
    
    {/* Screen Mesh Stencil holes (fine lines) */}
    <line x1="160" y1="82" x2="160" y2="92" stroke="#10b981" strokeWidth="3" />
    <line x1="240" y1="82" x2="240" y2="92" stroke="#10b981" strokeWidth="3" />
    
    {/* Squeegee */}
    <polygon points="190,40 210,40 205,79 195,79" fill="#eab308" stroke="#ca8a04" strokeWidth="1.5" />
    <rect x="180" y="30" width="40" height="10" fill="#3f3f46" />
    <text x="200" y="60" textAnchor="middle" fill="#ffffff" className="font-['JetBrains_Mono'] text-[8px] font-black uppercase">SQUEEGEE</text>
    
    {/* Green Ink Pool */}
    <path d="M 180 79 C 190 75, 210 75, 220 79 Z" fill="#10b981" />
    
    {/* Bottle Under Screen */}
    <rect x="130" y="130" width="140" height="110" rx="6" fill="none" stroke="#e2e8f0" strokeWidth="4" />
    {/* Ink Transferring */}
    <path d="M 200 82 L 200 130" stroke="#10b981" strokeWidth="4" strokeDasharray="3,3" />
    
    {/* Printed Logo on Bottle */}
    <circle cx="200" cy="180" r="25" fill="none" stroke="#10b981" strokeWidth="4" />
    <text x="200" y="184" textAnchor="middle" fill="#10b981" className="font-['JetBrains_Mono'] text-[9px] font-black">ECO</text>
    
    <text x="200" y="275" textAnchor="middle" fill="#94a3b8" className="font-['JetBrains_Mono'] text-xs font-bold uppercase">Squeegee Forcing Ink through Screen Mesh</text>
  </svg>
)

export default function BottlePrintingGuidePage() {
  const { i18n } = useTranslation()
  const isPouchDomain = getDomain() === 'pouch'
  
  // Language switcher translation selector
  const currentLang = i18n.language && i18n.language.startsWith('zh') ? 'zh-TW' : 'en'
  const t = translations[currentLang]

  const seoProps = {
    title: t.title,
    metaDescription: t.metaDesc,
    keywords: ["bottle printing", "acrylic canister printing", "heat transfer film", "laser engraving glass", "sticker label bottle", "silk screen printing jar"],
    canonicalUrl: isPouchDomain ? "https://www.pouch.eco/knowledge/bottle-printing-guide" : "https://achievepack.com/knowledge/bottle-printing-guide"
  }

  const heroProps = {
    heroTitle: t.heroTitle,
    heroSubtitle: t.heroSubtitle
  }

  const faqSections = [
    { q: t.faq1q, a: t.faq1a },
    { q: t.faq2q, a: t.faq2a },
    { q: t.faq3q, a: t.faq3a }
  ]

  // B2C Pouch.eco Sections Layout
  const sectionsForPouch = [
    {
      id: "introduction",
      title: t.introTitle,
      icon: <Printer className="h-6 w-6" />,
      content: (
        <div className="space-y-6">
          <div className="bg-[#D4FF00] border-4 border-black p-6 font-['JetBrains_Mono'] font-bold text-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            <p className="text-black"><strong>{t.quickAnswer.split(':')[0]}:</strong> {t.quickAnswer.split(':')[1]}</p>
          </div>
          <p className="text-black font-semibold text-base leading-relaxed">{t.introP1}</p>
          <p className="text-black font-semibold text-base leading-relaxed">{t.introP2}</p>
        </div>
      )
    },
    {
      id: "process-diagrams",
      title: t.processTitle,
      icon: <Layers className="h-6 w-6" />,
      content: (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
          <div className="border-4 border-black p-4 bg-white shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] flex flex-col justify-between">
            <h4 className="font-black text-lg uppercase mb-3 text-black">1. {t.methodHeat}</h4>
            <div className="w-full aspect-[4/3] mb-3 overflow-hidden rounded border border-black">
              <img src="/imgs/knowledge/bottle-printing-heat-transfer.jpg" alt="Heat Transfer Printing Machine" className="w-full h-full object-cover" />
            </div>
            <p className="text-xs text-neutral-600 font-bold font-['JetBrains_Mono']">
              {currentLang === 'zh-TW' 
                ? "將受熱（約180°C）的矽膠壓版/壓輪向轉印薄膜施壓，使背膠熔化並把圖案貼合在瓶身上。"
                : "Heated silicone roller rolls over carrier film, thermal-releasing full-color ink directly to bottle body."}
            </p>
          </div>

          <div className="border-4 border-black p-4 bg-white shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] flex flex-col justify-between">
            <h4 className="font-black text-lg uppercase mb-3 text-black">2. {t.methodLaser}</h4>
            <div className="w-full aspect-[4/3] mb-3 overflow-hidden rounded border border-black">
              <img src="/imgs/knowledge/bottle-printing-laser-engraving.jpg" alt="Laser Engraving Schematic" className="w-full h-full object-cover" />
            </div>
            <p className="text-xs text-neutral-600 font-bold font-['JetBrains_Mono']">
              {currentLang === 'zh-TW' 
                ? "高能雷射束微米級氣化塗層，露出底部金屬或塑料本色，實現永久不磨損的防偽標誌。"
                : "CNC-guided laser vaporizes the topcoat of the container, exposing the contrasting bottom material."}
            </p>
          </div>

          <div className="border-4 border-black p-4 bg-white shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] flex flex-col justify-between">
            <h4 className="font-black text-lg uppercase mb-3 text-black">3. {t.methodSticker}</h4>
            <div className="w-full aspect-[4/3] mb-3 overflow-hidden rounded border border-black">
              <img src="/imgs/knowledge/bottle-printing-sticker-label.jpg" alt="Sticker Labeling Machine" className="w-full h-full object-cover" />
            </div>
            <p className="text-xs text-neutral-600 font-bold font-['JetBrains_Mono']">
              {currentLang === 'zh-TW' 
                ? "在底紙上印好高粘度不干膠，由貼標機平整貼合，是目前小批量最穩妥的客製化方案。"
                : "Adhesive decal labels peeled from PET lining and pressed flat onto the bottle via rubber squeegee."}
            </p>
          </div>

          <div className="border-4 border-black p-4 bg-white shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] flex flex-col justify-between">
            <h4 className="font-black text-lg uppercase mb-3 text-black">4. {t.methodScreen}</h4>
            <div className="w-full aspect-[4/3] mb-3 overflow-hidden rounded border border-black">
              <img src="/imgs/knowledge/bottle-printing-silk-screen.jpg" alt="Silk Screen Printing Schematic" className="w-full h-full object-cover" />
            </div>
            <p className="text-xs text-neutral-600 font-bold font-['JetBrains_Mono']">
              {currentLang === 'zh-TW' 
                ? "刮油刀施壓使專色油墨穿過感光開孔網布，覆蓋在瓶身上，墨層厚實飽滿且附著力佳。"
                : "Flexible squeegee forces thick resin-based ink through open stencil mesh directly on bottle."}
            </p>
          </div>
        </div>
      )
    },
    {
      id: "expert-insight",
      title: t.expertTitle,
      icon: <Award className="h-6 w-6" />,
      content: (
        <div className="space-y-6 border-4 border-black bg-white p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
          <div className="flex items-center gap-4 border-b-4 border-black pb-4 mb-4">
            <Award className="w-10 h-10 text-black" strokeWidth={3} />
            <div>
              <h4 className="font-black text-2xl uppercase">{t.expertSub}</h4>
              <p className="text-xs font-['JetBrains_Mono'] font-black uppercase bg-[#D4FF00] border-2 border-black px-2 py-0.5 mt-1 inline-block">14+ Years Experience | GRS Auditing</p>
            </div>
          </div>
          <p className="text-black font-bold italic text-lg border-l-4 border-black pl-4 my-4">"{t.expertQ1}"</p>
          <p className="text-black text-base leading-relaxed">{t.expertQ2}</p>
          
          <div className="bg-[#00FFFF] border-4 border-black p-6 mt-8 font-['JetBrains_Mono'] shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            <h5 className="font-black text-lg uppercase mb-2">{t.shopTitle}</h5>
            <p className="text-black text-sm mb-4">{t.shopDesc}</p>
            <Link to="/shop/reusable-acrylic-airtight-canister" className="inline-flex items-center gap-2 bg-white border-2 border-black px-4 py-2 font-black uppercase text-xs hover:bg-[#D4FF00] transition-colors">
              {t.shopBtn} <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      )
    },
    {
      id: "comparison",
      title: t.matrixTitle,
      icon: <ShieldCheck className="h-6 w-6" />,
      content: (
        <div className="border-4 border-black bg-white p-4 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] overflow-x-auto">
          <table className="w-full border-collapse border-2 border-black font-['JetBrains_Mono'] text-sm">
            <thead>
              <tr className="bg-[#FF00FF] text-white border-b-2 border-black">
                <th className="border-2 border-black p-3 text-left uppercase font-black">{t.matrixParam}</th>
                <th className="border-2 border-black p-3 text-left uppercase font-black bg-black text-[#D4FF00]">{t.methodHeat}</th>
                <th className="border-2 border-black p-3 text-left uppercase font-black">{t.methodLaser}</th>
                <th className="border-2 border-black p-3 text-left uppercase font-black">{t.methodSticker}</th>
                <th className="border-2 border-black p-3 text-left uppercase font-black">{t.methodScreen}</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b-2 border-black">
                <td className="border-2 border-black p-3 font-bold">{t.durability}</td>
                <td className="border-2 border-black p-3 bg-[#D4FF00]/30">{t.heatDur}</td>
                <td className="border-2 border-black p-3">{t.laserDur}</td>
                <td className="border-2 border-black p-3">{t.stickerDur}</td>
                <td className="border-2 border-black p-3">{t.screenDur}</td>
              </tr>
              <tr className="border-b-2 border-black">
                <td className="border-2 border-black p-3 font-bold">{t.setupCost}</td>
                <td className="border-2 border-black p-3 bg-[#D4FF00]/30">{t.heatSetup}</td>
                <td className="border-2 border-black p-3">{t.laserSetup}</td>
                <td className="border-2 border-black p-3">{t.stickerSetup}</td>
                <td className="border-2 border-black p-3">{t.screenSetup}</td>
              </tr>
              <tr className="border-b-2 border-black">
                <td className="border-2 border-black p-3 font-bold">{t.minOrder}</td>
                <td className="border-2 border-black p-3 bg-[#D4FF00]/30">{t.heatMoq}</td>
                <td className="border-2 border-black p-3">{t.laserMoq}</td>
                <td className="border-2 border-black p-3">{t.stickerMoq}</td>
                <td className="border-2 border-black p-3">{t.screenMoq}</td>
              </tr>
              <tr>
                <td className="border-2 border-black p-3 font-bold">{t.colorCapability}</td>
                <td className="border-2 border-black p-3 bg-[#D4FF00]/30">{t.heatColor}</td>
                <td className="border-2 border-black p-3">{t.laserColor}</td>
                <td className="border-2 border-black p-3">{t.stickerColor}</td>
                <td className="border-2 border-black p-3">{t.screenColor}</td>
              </tr>
            </tbody>
          </table>
        </div>
      )
    }
  ]

  // B2B Achieve Pack Sections Layout
  const sectionsForAchieve = [
    {
      id: "introduction",
      title: t.introTitle,
      icon: <Printer className="h-6 w-6" />,
      content: (
        <div className="space-y-4">
          <div className="bg-primary-50 border-l-4 border-primary-500 p-5 mb-8 rounded-r-lg">
            <p className="text-primary-900 font-medium text-lg"><strong>{t.quickAnswer.split(':')[0]}:</strong> {t.quickAnswer.split(':')[1]}</p>
          </div>
          <p className="text-neutral-700 text-lg leading-relaxed">{t.introP1}</p>
          <p className="text-neutral-700 text-lg leading-relaxed">{t.introP2}</p>
        </div>
      )
    },
    {
      id: "process-diagrams",
      title: t.processTitle,
      icon: <Layers className="h-6 w-6" />,
      content: (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-10">
          <div className="bg-white p-6 rounded-2xl border border-neutral-100 shadow-sm flex flex-col justify-between">
            <h4 className="font-bold text-xl text-neutral-900 mb-4">1. {t.methodHeat}</h4>
            <div className="w-full aspect-[4/3] mb-4 overflow-hidden rounded-xl border border-neutral-100">
              <img src="/imgs/knowledge/bottle-printing-heat-transfer.jpg" alt="Heat Transfer Printing Machine" className="w-full h-full object-cover" />
            </div>
            <p className="text-sm text-neutral-600 leading-relaxed">
              {currentLang === 'zh-TW' 
                ? "利用加熱板傳導熱量至受熱均勻的矽膠滾輪，將高解析度的轉印薄膜壓印到旋转的瓶身上。"
                : "Uses a heated silicone plate or roller to apply reverse-printed PET carrier graphics onto the bottle under pressure."}
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-neutral-100 shadow-sm flex flex-col justify-between">
            <h4 className="font-bold text-xl text-neutral-900 mb-4">2. {t.methodLaser}</h4>
            <div className="w-full aspect-[4/3] mb-4 overflow-hidden rounded-xl border border-neutral-100">
              <img src="/imgs/knowledge/bottle-printing-laser-engraving.jpg" alt="Laser Engraving Schematic" className="w-full h-full object-cover" />
            </div>
            <p className="text-sm text-neutral-600 leading-relaxed">
              {currentLang === 'zh-TW' 
                ? "通過高能雷射光束氣化或蝕刻瓶罐表面塗層，露出底部材質本色，印記永久防刮防洗。"
                : "CNC laser beam strips the surface coating of metal/plastic bottles, creating permanent, eco-friendly marks."}
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-neutral-100 shadow-sm flex flex-col justify-between">
            <h4 className="font-bold text-xl text-neutral-900 mb-4">3. {t.methodSticker}</h4>
            <div className="w-full aspect-[4/3] mb-4 overflow-hidden rounded-xl border border-neutral-100">
              <img src="/imgs/knowledge/bottle-printing-sticker-label.jpg" alt="Sticker Labeling Machine" className="w-full h-full object-cover" />
            </div>
            <p className="text-sm text-neutral-600 leading-relaxed">
              {currentLang === 'zh-TW' 
                ? "將印製好的高粘性防水貼紙直接粘貼於瓶身指定位置，材料與工藝選擇豐富多樣。"
                : "Rolls of printed self-adhesive decals are positioned and applied using precision pressure rollers."}
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-neutral-100 shadow-sm flex flex-col justify-between">
            <h4 className="font-bold text-xl text-neutral-900 mb-4">4. {t.methodScreen}</h4>
            <div className="w-full aspect-[4/3] mb-4 overflow-hidden rounded-xl border border-neutral-100">
              <img src="/imgs/knowledge/bottle-printing-silk-screen.jpg" alt="Silk Screen Printing Schematic" className="w-full h-full object-cover" />
            </div>
            <p className="text-sm text-neutral-600 leading-relaxed">
              {currentLang === 'zh-TW' 
                ? "刮刀將油墨透過感光網版的孔洞均勻擠壓到瓶罐表面，墨層厚實飽滿，耐用性極高。"
                : "Squeegee sweeps thick chemical-resistant screen ink through stencil mesh holes onto the curved surface."}
            </p>
          </div>
        </div>
      )
    },
    {
      id: "expert-insight",
      title: t.expertTitle,
      icon: <Award className="h-6 w-6" />,
      content: (
        <div className="space-y-6">
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-neutral-100 flex flex-col md:flex-row gap-8 items-start">
            <div className="flex-shrink-0 w-24 h-24 bg-neutral-100 rounded-full overflow-hidden border-4 border-white shadow-md">
              <img src="/imgs/ryan-wong-avatar.png" alt="Ryan Wong" className="w-full h-full object-cover" onError={(e) => (e.currentTarget.style.display = 'none')} />
            </div>
            <div>
              <h4 className="font-bold text-2xl text-neutral-900 mb-2">{t.expertSub}</h4>
              <div className="flex flex-wrap items-center gap-2 mb-6">
                <span className="text-xs font-bold uppercase tracking-wider text-primary-700 bg-primary-50 px-3 py-1.5 rounded-md">14+ Years Packaging Engineering</span>
                <span className="text-xs font-bold uppercase tracking-wider text-green-700 bg-green-50 px-3 py-1.5 rounded-md">GRS Material Specialist</span>
              </div>
              <p className="text-neutral-600 mb-5 text-lg italic border-l-4 border-neutral-200 pl-4">"{t.expertQ1}"</p>
              <p className="text-neutral-700 text-lg leading-relaxed">{t.expertQ2}</p>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-primary-900 to-emerald-950 p-8 rounded-2xl text-white shadow-lg border border-primary-800">
            <h4 className="font-bold text-2xl mb-2">{t.shopTitle}</h4>
            <p className="text-primary-100 text-base mb-6 max-w-xl">{t.shopDesc}</p>
            <Link to="/store/product/reusable-acrylic-airtight-canister" className="inline-flex items-center gap-2 bg-[#D4FF00] hover:bg-white text-black font-bold px-6 py-3 rounded-xl transition-all shadow-md">
              {t.shopBtn} <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      )
    },
    {
      id: "comparison",
      title: t.matrixTitle,
      icon: <ShieldCheck className="h-6 w-6" />,
      content: (
        <div className="overflow-hidden rounded-2xl border border-neutral-200 mt-8 shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[600px]">
              <thead>
                <tr className="bg-neutral-50 text-neutral-800 border-b border-neutral-200">
                  <th className="p-5 font-semibold w-1/5 uppercase tracking-wider text-xs">{t.matrixParam}</th>
                  <th className="p-5 font-bold text-primary-800 bg-primary-50 w-1/5 uppercase tracking-wider text-xs border-x border-primary-100">{t.methodHeat}</th>
                  <th className="p-5 font-semibold w-1/5 uppercase tracking-wider text-xs">{t.methodLaser}</th>
                  <th className="p-5 font-semibold w-1/5 uppercase tracking-wider text-xs">{t.methodSticker}</th>
                  <th className="p-5 font-semibold w-1/5 uppercase tracking-wider text-xs">{t.methodScreen}</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                <tr className="hover:bg-neutral-50 border-b border-neutral-200">
                  <td className="p-5 font-medium text-neutral-900">{t.durability}</td>
                  <td className="p-5 bg-primary-50/50 text-green-700 font-medium border-x border-primary-100">{t.heatDur}</td>
                  <td className="p-5 text-neutral-600">{t.laserDur}</td>
                  <td className="p-5 text-neutral-600">{t.stickerDur}</td>
                  <td className="p-5 text-neutral-600">{t.screenDur}</td>
                </tr>
                <tr className="bg-neutral-50/50 hover:bg-neutral-50 border-b border-neutral-200">
                  <td className="p-5 font-medium text-neutral-900">{t.setupCost}</td>
                  <td className="p-5 bg-primary-50/50 text-neutral-800 font-medium border-x border-primary-100">{t.heatSetup}</td>
                  <td className="p-5 text-neutral-600">{t.laserSetup}</td>
                  <td className="p-5 text-neutral-600">{t.stickerSetup}</td>
                  <td className="p-5 text-neutral-600">{t.screenSetup}</td>
                </tr>
                <tr className="hover:bg-neutral-50 border-b border-neutral-200">
                  <td className="p-5 font-medium text-neutral-900">{t.minOrder}</td>
                  <td className="p-5 bg-primary-50/50 text-green-700 font-medium border-x border-primary-100">{t.heatMoq}</td>
                  <td className="p-5 text-neutral-600">{t.laserMoq}</td>
                  <td className="p-5 text-neutral-600">{t.stickerMoq}</td>
                  <td className="p-5 text-neutral-600">{t.screenMoq}</td>
                </tr>
                <tr className="bg-neutral-50/50 hover:bg-neutral-50">
                  <td className="p-5 font-medium text-neutral-900">{t.colorCapability}</td>
                  <td className="p-5 bg-primary-50/50 text-neutral-800 font-medium border-x border-primary-100">{t.heatColor}</td>
                  <td className="p-5 text-neutral-600">{t.laserColor}</td>
                  <td className="p-5 text-neutral-600">{t.stickerColor}</td>
                  <td className="p-5 text-neutral-600">{t.screenColor}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )
    }
  ]

  if (isPouchDomain) {
    return (
      <PouchLayout>
        <div className="sr-only" aria-hidden="true">
          <section data-ai-faq="true" itemScope itemType="https://schema.org/FAQPage">
            {faqSections.map((faq, i) => (
              <article key={i} itemScope itemType="https://schema.org/Question" itemProp="mainEntity">
                <h3 itemProp="name">{faq.q}</h3>
                <div itemScope itemType="https://schema.org/Answer" itemProp="acceptedAnswer">
                  <p itemProp="text">{faq.a}</p>
                </div>
              </article>
            ))}
          </section>
        </div>
        <BlogArticleTemplate
          {...seoProps}
          {...heroProps}
          sections={sectionsForPouch}
          faqSections={faqSections}
          ctaTitle={t.upgradeCta}
          ctaDescription={t.upgradeDesc}
        />
      </PouchLayout>
    )
  }

  // B2B Enterprise Layout (Achieve Pack)
  return (
    <>
      <div className="sr-only" aria-hidden="true">
        <section data-ai-faq="true" itemScope itemType="https://schema.org/FAQPage">
          {faqSections.map((faq, i) => (
            <article key={i} itemScope itemType="https://schema.org/Question" itemProp="mainEntity">
              <h3 itemProp="name">{faq.q}</h3>
              <div itemScope itemType="https://schema.org/Answer" itemProp="acceptedAnswer">
                <p itemProp="text">{faq.a}</p>
              </div>
            </article>
          ))}
        </section>
      </div>
      <SEOPageLayout
        title={seoProps.title}
        description={seoProps.metaDescription}
        keywords={seoProps.keywords}
        canonicalUrl={seoProps.canonicalUrl}
        heroTitle={heroProps.heroTitle}
        heroSubtitle={heroProps.heroSubtitle}
        heroImage="/imgs/knowledge/bottle-printing-heat-transfer.jpg"
        introSummary={t.quickAnswer}
        sections={sectionsForAchieve}
        faqs={faqSections.map(f => ({ question: f.q, answer: f.a }))}
        schemaType="Article"
        ctaTitle={t.ctaTitle}
        ctaDescription={t.ctaDesc}
        ctaButtonText={t.ctaBtn}
        heroStyle="banner"
      />
    </>
  )
}
