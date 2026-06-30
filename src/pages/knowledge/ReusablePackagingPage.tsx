import React from 'react'
import { getDomain } from '../../utils/domain'
import BlogArticleTemplate from '../../components/pouch/BlogArticleTemplate'
import SEOPageLayout from '../../components/SEOPageLayout'
import PouchLayout from '../../components/pouch/PouchLayout'
import { Leaf, Shield, Award, RefreshCw, AlertTriangle, Lightbulb, ArrowRight, ShoppingBag } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

const translations = {
  en: {
    title: "Reusable vs. Single-Use Packaging: The Circular Economy Transition Guide",
    metaDesc: "Discover the environmental and financial benefits of transitioning from single-use packaging to reusable canisters and containers. Analyze lifecycles, wash-integrity, and GRS compliance.",
    heroTitle: "Reusable vs. Single-Use Packaging: Circular Economy Transition Guide",
    heroSubtitle: "How switching to high-durability, refillable canisters reduces plastic waste and optimizes shipping volume.",
    faq1q: "What makes packaging 'reusable' under GRS standards?",
    faq1a: "Under the Global Recycled Standard (GRS) and circular economy guidelines, reusable packaging must be designed to complete a minimum number of lifecycles (typically 100+ to 1,000+ reuse cycles) while maintaining airtight sealing integrity, washability, and structural safety without material degradation.",
    faq2q: "Are acrylic canisters safe for long-term food contact?",
    faq2a: "Yes. Premium food-grade high-clarity acrylic is 100% BPA-free, non-toxic, and resistant to chemical leaching. It provides glass-like clarity with high shatter resistance and significantly lower shipping weight, reducing transport emissions.",
    faq3q: "How does the carbon footprint of reusable canisters compare to single-use bags?",
    faq3a: "While reusable canisters have a higher initial manufacturing footprint, they reach carbon neutrality after just 4 to 6 reuse cycles compared to single-use laminate pouches. Over 100+ cycles, they reduce total packaging carbon footprint by over 80%.",
    introTitle: "The Circular Packaging Era: Beyond Disposable Bags",
    quickAnswer: "Quick Answer: Single-use laminate packaging requires continuous raw resource extraction and landfilling, while high-durability reusable canisters establish a zero-waste circular pipeline, achieving carbon neutrality after just 5 refilling cycles.",
    takeawayTitle: "Key Takeaways",
    takeaway1: "Reusable acrylic canisters eliminate the continuous purchasing and disposal cycle of single-use laminate bags.",
    takeaway2: "REF-Cycle design: Refillable containers reach ecological and monetary breakeven after only 5 refilling cycles.",
    takeaway3: "High-clarity food-grade acrylic delivers premium retail presence, airtight preservation, and 100% recyclability.",
    introP1: "For decades, single-use pouches and boxes have dominated the retail landscape. While they provide excellent barrier protection, their linear 'take-make-waste' model places a heavy ecological burden on brands and consumers alike.",
    introP2: "Transitioning to a circular model using high-performance reusable canisters and jars helps brands eliminate waste. Reusable canisters are designed for long-term storage, easy washing, and continuous refilling, turning packaging into a durable asset.",
    expertTitle: "Expert Engineering Insight",
    expertSub: "From Ryan Wong's Engineering Notebook",
    expertQ1: "\"In my 14 years in materials science and packaging design, the biggest challenge of circular packaging systems has been cap sealing integrity under repeated washings. Thread degradation can lead to moisture ingress, spoiling dry goods like tea, coffee, or botanical powders.\"",
    expertQ2: "Our Reusable Acrylic Canister addresses this directly with a double-layer Gold Thread cap and marine-grade silicone gasket. It retains airtight MVTR barrier performance even after 500+ commercial wash-dry cycles, giving sustainable retailers an audit-compliant, zero-waste storage solution.",
    matrixTitle: "Canister vs. Pouch Comparison Matrix",
    matrixParam: "Technical Parameter",
    degEnv: "Lifecycle Limit",
    tox: "Airtight Seal Integrity",
    opHand: "Logistical & Shipping Weight",
    therm: "Ecological Breakeven (Co2)",
    phaDeg: "1,000+ Wash & Refill Cycles",
    plaDeg: "Single-Use Only (1 Cycle)",
    petgDeg: "Single-Use Only (1 Cycle)",
    phaTox: "Airtight Silicone Gasket (Excellent OTR/MVTR)",
    plaTox: "Standard Ziplock (Medium Barrier)",
    petgTox: "Heat-sealed (High Barrier until opened)",
    phaOp: "High-rigidity, low shipping weight vs. glass",
    plaOp: "Flexible, ultra-lightweight",
    petgOp: "Flexible, ultra-lightweight",
    ctaTitle: "Schedule a Circular Transition Audit",
    ctaDesc: "Discuss how introducing reusable canisters into your product line aligns with international GRS and FSC targets.",
    ctaBtn: "Book with Ryan Wong",
    upgradeCta: "Adopt Reusable Packaging Today",
    upgradeDesc: "Explore our wholesale-priced high-clarity reusable airtight canisters with gold double-layer caps.",
    shopTitle: "Shop Reusable Acrylic Airtight Canisters",
    shopDesc: "Explore our durable, high-clarity airtight canisters. Optimized for zero-waste retail bulk shops, tea houses, spice brands, and luxury cosmetic refills.",
    shopBtn: "View Canister Sizes",
    sourceMat: "Product Customizability",
    phaSource: "Custom Pad Printing & Labels from 100+ units",
    plaSource: "Plate/Digital Print from 100+ units",
    petgSource: "Plate/Digital Print from 100+ units",
    softTemp: "Recyclability Profile",
    phaSoft: "100% Recyclable Rigid Polymer (#7 Acrylic)",
    plaSoft: "Industrial Compostable / PE Recyclable",
    petgSoft: "Standard Soft Plastic Recyclable"
  },
  'zh-TW': {
    title: "重複使用與一次性包裝：循環經濟轉型指南",
    metaDesc: "探索從一次性包裝轉向可重複使用的密封罐和容器的環保與經濟效益。分析生命週期、耐洗性與 GRS 永續合規標準。",
    heroTitle: "重複使用與一次性包裝：循環經濟轉型指南",
    heroSubtitle: "採用高耐用性、可填充的亞克力密封罐如何減少塑料垃圾並優化物流碳足跡。",
    faq1q: "根據 GRS 標準，什麼樣的包裝算作「可重複使用」？",
    faq1a: "根據全球回收標準 (GRS) 和循環經濟準則，可重複使用的包裝必須經過專門設計，能夠完成多次生命週期（通常為 100 次至 1,000 次以上重複使用），同時在多次清洗和使用後仍能保持氣密密封性、結構安全且不發生材質降解。",
    faq2q: "亞克力密封罐長期接觸食品安全嗎？",
    faq2a: "是的。優質食品級高透光亞克力 100% 不含雙酚 A (BPA-free)，無毒且耐化學浸潤。它提供了與玻璃相同的透光性，但具有極高的耐摔抗衝擊性，且運輸重量大幅降低，能有效減少物流碳排放。",
    faq3q: "與一次性包裝袋相比，可重複使用密封罐的碳足跡如何？",
    faq3a: "雖然可重複使用密封罐在初次製造時的碳足跡較高，但由於其可循環使用，僅需 4 至 6 次重複填充使用即可達到碳中和效益。累計使用 100 次以上時，可降低 80% 以上的包裝總碳足跡。",
    introTitle: "循環包裝時代：超越一次性包裝袋",
    quickAnswer: "快速解答：一次性複合包裝袋需要持續開採原材料並造成填埋壓力，而高耐用性的可重複使用亞克力罐則建立起零廢棄物的循環流程，僅需 5 次填充即可實現生態平衡。",
    takeawayTitle: "關鍵要點",
    takeaway1: "可重複使用亞克力密封罐消除了企業與消費者對一次性複合袋的持續採購與廢棄循環。",
    takeaway2: "環保平衡點：可重複使用罐在僅 5 次重覆填充使用後即可實現生態與金錢上的損益平衡。",
    takeaway3: "高透光食品級亞克力提供了極佳的零售視覺美感、出色的氣密保鮮性能，且 100% 可回收。",
    introP1: "數十年來，一次性包裝袋和紙盒主導了零售市場。雖然它們提供了出色的屏障防護，但「取用-製造-廢棄」的線性模式給品牌和環境帶來了沉重的負擔。",
    introP2: "轉向使用高性能、可重複使用的密封罐和玻璃罐等循環模式，有助於徹底消除包裝廢棄物。這些密封罐經過專門設計，適合長期儲存、易於清洗，並可持續進行填充，將包裝轉化為耐用的資產。",
    expertTitle: "專家工程見解",
    expertSub: "來自 Ryan Wong 的工程筆記",
    expertQ1: "「在我 14 年的材料科學和包裝設計生涯中，循環包裝面臨的最大挑戰就是多次清洗後的瓶蓋密封性。螺紋磨損會導致濕氣滲入，從而使茶葉、咖啡或化妝粉末等乾燥產品變質。」",
    expertQ2: "我們的可重複使用亞克力罐通過雙層金色保護蓋和船用級矽膠密封圈直接解決了這一點。即使經歷了 500 次以上的商業清洗與乾燥循環，它仍能保持氣密保鮮性能，為永續零售品牌提供符合審計的零廢棄包裝解決方案。",
    matrixTitle: "亞克力罐與包裝袋技術比較矩陣",
    matrixParam: "技術參數",
    degEnv: "生命週期極限",
    tox: "氣密保鮮密封性",
    opHand: "物流與運輸重量",
    therm: "生態平衡點 (CO2)",
    phaDeg: "1,000次以上清洗與填充循環",
    plaDeg: "僅限一次性使用 (1次)",
    petgDeg: "僅限一次性使用 (1次)",
    phaTox: "氣密矽膠圈 (極佳 OTR/MVTR)",
    plaTox: "標準自封拉鍊 (中等屏障)",
    petgTox: "熱封 (開封前具高屏障)",
    phaOp: "高剛性，運輸重量遠低於玻璃",
    plaOp: "柔性、極輕量",
    petgOp: "柔性、極輕量",
    ctaTitle: "預約循環包裝轉型評估",
    ctaDesc: "探討如何在您的產品線中引入可重複使用的密封罐，以符合 GRS 和 FSC 的國際永續包裝指標。",
    ctaBtn: "預約 Ryan Wong 的諮詢",
    upgradeCta: "立即採用重複使用包裝",
    upgradeDesc: "探索我們批發價格的高透光可重複使用亞克力密封罐，配有金色雙層蓋。",
    shopTitle: "選購可重複使用亞克力密封罐",
    shopDesc: "選購高透光、耐摔的亞克力氣密密封罐。專為零廢棄無包裝商店、茶行、香料品牌和高端化妝品補充裝設計。",
    shopBtn: "查看密封罐尺寸與價格",
    sourceMat: "產品客製化能力",
    phaSource: "100個起支持客製化移印與標籤",
    plaSource: "100個起數位印刷袋",
    petgSource: "100個起數位印刷袋",
    softTemp: "回收處置屬性",
    phaSoft: "100% 可回收剛性聚合物 (#7 亞克力)",
    plaSoft: "工業堆肥 / PE塑料回收",
    petgSoft: "標準軟塑料回收"
  }
}

export default function ReusablePackagingPage() {
  const { i18n } = useTranslation()
  const isPouchDomain = getDomain() === 'pouch'
  
  // Detect active language translation fallback
  const currentLang = i18n.language && i18n.language.startsWith('zh') ? 'zh-TW' : 'en'
  const t = translations[currentLang]

  const heroImageUrl = '/imgs/store/products/reusable-acrylic-airtight-canister-thumbnail-1.jpg'
  const contentImageUrl = '/imgs/store/products/reusable-acrylic-airtight-canister-thumbnail-2.jpg'
  
  const seoProps = {
    title: t.title,
    metaDescription: t.metaDesc,
    keywords: ["reusable packaging", "refillable jar", "acrylic canister", "airtight container", "circular economy packaging", "sustainable jar"],
    canonicalUrl: isPouchDomain ? "https://www.pouch.eco/knowledge/reusable-packaging" : "https://achievepack.com/knowledge/reusable-packaging"
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
      icon: <Leaf className="h-6 w-6" />,
      content: (
        <div className="space-y-6">
          <div className="bg-[#D4FF00] border-4 border-black p-6 font-['JetBrains_Mono'] font-bold text-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            <p className="text-black"><strong>{t.quickAnswer.split(':')[0]}:</strong> {t.quickAnswer.split(':')[1]}</p>
          </div>
          <div className="flex flex-col md:flex-row gap-6 my-8">
            <div className="border-4 border-black p-2 bg-white w-full md:w-1/2 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
              <img src={heroImageUrl} alt="Airtight Canisters Alignment" className="w-full h-72 object-cover border-2 border-black" />
            </div>
            <div className="border-4 border-black p-2 bg-white w-full md:w-1/2 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
              <img src={contentImageUrl} alt="Canister Detail" className="w-full h-72 object-cover border-2 border-black" />
            </div>
          </div>
          <p className="text-black font-semibold text-base leading-relaxed">{t.introP1}</p>
          <p className="text-black font-semibold text-base leading-relaxed">{t.introP2}</p>
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
              <p className="text-xs font-['JetBrains_Mono'] font-black uppercase bg-[#D4FF00] border-2 border-black px-2 py-0.5 mt-1 inline-block">14+ Years Experience | GRS Expert</p>
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
      icon: <Shield className="h-6 w-6" />,
      content: (
        <div className="border-4 border-black bg-white p-4 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] overflow-x-auto">
          <table className="w-full border-collapse border-2 border-black font-['JetBrains_Mono'] text-sm">
            <thead>
              <tr className="bg-[#FF00FF] text-white border-b-2 border-black">
                <th className="border-2 border-black p-3 text-left uppercase font-black">{t.matrixParam}</th>
                <th className="border-2 border-black p-3 text-left uppercase font-black bg-black text-[#D4FF00]">Reusable Canister</th>
                <th className="border-2 border-black p-3 text-left uppercase font-black">Single-Use Pouch</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b-2 border-black">
                <td className="border-2 border-black p-3 font-bold">{t.degEnv}</td>
                <td className="border-2 border-black p-3 font-bold bg-[#D4FF00]/30">{t.phaDeg}</td>
                <td className="border-2 border-black p-3">{t.plaDeg}</td>
              </tr>
              <tr className="border-b-2 border-black">
                <td className="border-2 border-black p-3 font-bold">{t.tox}</td>
                <td className="border-2 border-black p-3 font-bold bg-[#D4FF00]/30">{t.phaTox}</td>
                <td className="border-2 border-black p-3">{t.plaTox}</td>
              </tr>
              <tr className="border-b-2 border-black">
                <td className="border-2 border-black p-3 font-bold">{t.opHand}</td>
                <td className="border-2 border-black p-3 font-bold bg-[#D4FF00]/30">{t.phaOp}</td>
                <td className="border-2 border-black p-3">{t.plaOp}</td>
              </tr>
              <tr className="border-b-2 border-black">
                <td className="border-2 border-black p-3 font-bold">{t.therm}</td>
                <td className="border-2 border-black p-3 font-bold bg-[#D4FF00]/30">{t.phaSoft}</td>
                <td className="border-2 border-black p-3">{t.plaSoft}</td>
              </tr>
              <tr>
                <td className="border-2 border-black p-3 font-bold">{t.sourceMat}</td>
                <td className="border-2 border-black p-3 font-bold bg-[#D4FF00]/30">{t.phaSource}</td>
                <td className="border-2 border-black p-3">{t.plaSource}</td>
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
      icon: <Leaf className="h-6 w-6" />,
      content: (
        <div className="space-y-4">
          <div className="bg-primary-50 border-l-4 border-primary-500 p-5 mb-8 rounded-r-lg">
            <p className="text-primary-900 font-medium text-lg"><strong>{t.quickAnswer.split(':')[0]}:</strong> {t.quickAnswer.split(':')[1]}</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-10">
            <img src={heroImageUrl} alt="Acrylic Canisters Display" className="rounded-2xl w-full h-72 object-cover shadow-md border border-neutral-100" />
            <img src={contentImageUrl} alt="Airtight Lid Detail" className="rounded-2xl w-full h-72 object-cover shadow-md border border-neutral-100" />
          </div>
          
          <p className="text-neutral-700 text-lg leading-relaxed">{t.introP1}</p>
          <p className="text-neutral-700 text-lg leading-relaxed">{t.introP2}</p>
        </div>
      )
    },
    {
      id: "expert-insight",
      title: t.expertTitle,
      icon: <Award className="h-6 w-6" />,
      content: (
        <div className="space-y-8">
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-neutral-100 flex flex-col md:flex-row gap-8 items-start">
            <div className="flex-shrink-0 w-24 h-24 bg-neutral-100 rounded-full overflow-hidden border-4 border-white shadow-md">
              <img src="/imgs/ryan-wong-avatar.png" alt="Ryan Wong" className="w-full h-full object-cover" onError={(e) => (e.currentTarget.style.display = 'none')} />
            </div>
            <div>
              <h4 className="font-bold text-2xl text-neutral-900 mb-2">{t.expertSub}</h4>
              <div className="flex flex-wrap items-center gap-2 mb-6">
                <span className="text-xs font-bold uppercase tracking-wider text-primary-700 bg-primary-50 px-3 py-1.5 rounded-md">14+ Years Packaging Engineering</span>
                <span className="text-xs font-bold uppercase tracking-wider text-green-700 bg-green-50 px-3 py-1.5 rounded-md">GRS Auditing Specialist</span>
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
      icon: <Shield className="h-6 w-6" />,
      content: (
        <div className="overflow-hidden rounded-2xl border border-neutral-200 mt-8 shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[600px]">
              <thead>
                <tr className="bg-neutral-50 text-neutral-800 border-b border-neutral-200">
                  <th className="p-5 font-semibold w-1/3 uppercase tracking-wider text-xs">{t.matrixParam}</th>
                  <th className="p-5 font-bold text-primary-800 bg-primary-50 w-1/3 uppercase tracking-wider text-xs border-x border-primary-100">Reusable Canister</th>
                  <th className="p-5 font-semibold w-1/3 uppercase tracking-wider text-xs">Single-Use Pouch</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                <tr className="hover:bg-neutral-50 border-b border-neutral-200">
                  <td className="p-5 font-medium text-neutral-900">{t.degEnv}</td>
                  <td className="p-5 bg-primary-50/50 text-green-700 font-medium border-x border-primary-100">{t.phaDeg}</td>
                  <td className="p-5 text-neutral-600">{t.plaDeg}</td>
                </tr>
                <tr className="bg-neutral-50/50 hover:bg-neutral-50 border-b border-neutral-200">
                  <td className="p-5 font-medium text-neutral-900">{t.tox}</td>
                  <td className="p-5 bg-primary-50/50 text-green-700 font-medium border-x border-primary-100">{t.phaTox}</td>
                  <td className="p-5 text-neutral-600">{t.plaTox}</td>
                </tr>
                <tr className="hover:bg-neutral-50 border-b border-neutral-200">
                  <td className="p-5 font-medium text-neutral-900">{t.opHand}</td>
                  <td className="p-5 bg-primary-50/50 text-green-700 font-medium border-x border-primary-100">{t.phaOp}</td>
                  <td className="p-5 text-neutral-600">{t.plaOp}</td>
                </tr>
                <tr className="bg-neutral-50/50 hover:bg-neutral-50 border-b border-neutral-200">
                  <td className="p-5 font-medium text-neutral-900">{t.therm}</td>
                  <td className="p-5 bg-primary-50/50 text-neutral-800 font-medium border-x border-primary-100">{t.phaSoft}</td>
                  <td className="p-5 text-neutral-600">{t.plaSoft}</td>
                </tr>
                <tr className="hover:bg-neutral-50">
                  <td className="p-5 font-medium text-neutral-900">{t.sourceMat}</td>
                  <td className="p-5 bg-primary-50/50 text-neutral-800 font-medium border-x border-primary-100">{t.phaSource}</td>
                  <td className="p-5 text-neutral-600">{t.plaSource}</td>
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
        heroImage={heroImageUrl}
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
