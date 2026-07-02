import DualDomainSEOHead from '../../../components/DualDomainSEOHead'
import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { Package, Leaf, Zap, CheckCircle, ArrowRight, Shield, Award, Home, HelpCircle, ChevronDown, ChevronUp, Sparkles, MessageCircle, FileText, XCircle, CheckCircle2 } from 'lucide-react'
import PouchLayout from '../../../components/pouch/PouchLayout'
import { NeoButton, NeoCard, NeoBadge } from '../../../components/pouch/PouchUI'
import { ThreePouchViewer } from '../../../components/ThreePouchViewer'

import { useTranslation } from 'react-i18next'

const localTranslations = {
  en: {
    problemsTitle: "5 Common Stand-Up Pouch Problems (And Solutions)",
    problemsSubtitle: "Don't let subpar packaging ruin your product. Here is how we engineer solutions to the most common pouch failures:",
    p1Title: "1. Weak Seals & Leaking",
    p1Prob: "Problem: Poor heat sealing causes the bottom gusset to burst under pressure, leading to leaks.",
    p1Sol: "Solution: We use high-strength thermal seal layers and rigorous burst testing to ensure structural integrity.",
    p2Title: "2. Poor Shelf Stability",
    p2Prob: "Problem: Asymmetric folding causes the pouch to tip over on retail shelves.",
    p2Sol: "Solution: Precision K-seal and Doyen bottom designs create a perfectly flat, sturdy base.",
    p3Title: "3. Barrier Failure",
    p3Prob: "Problem: Oxygen or moisture penetrates the bag, causing the product to go stale.",
    p3Sol: "Solution: Multi-layer EVOH or metalized films block O2 and moisture, extending shelf life up to 12+ months.",
    p4Title: "4. Zipper Malfunction",
    p4Prob: "Problem: Powders clog the zipper track, making it impossible to reseal.",
    p4Sol: "Solution: We integrate premium press-to-close or powder-proof slider zippers for reliable resealability.",
    p5Title: "5. Difficult to Open",
    p5Prob: "Problem: Consumers struggle to tear the pouch open, resulting in jagged edges or spills.",
    p5Sol: "Solution: Laser-scored tear notches guarantee clean, effortless, and straight opening every time."
  },
  es: {
    problemsTitle: "5 Problemas Comunes de las Bolsas Stand-Up (y Soluciones)",
    problemsSubtitle: "No deje que un envase deficiente arruine su producto. Así es como diseñamos soluciones para las fallas más comunes:",
    p1Title: "1. Sellos Débiles y Fugas",
    p1Prob: "Problema: Un mal termosellado hace que el fuelle inferior se rompa bajo presión, provocando fugas.",
    p1Sol: "Solución: Utilizamos capas de sellado térmico de alta resistencia y pruebas de explosión para garantizar la integridad.",
    p2Title: "2. Mala Estabilidad en el Estante",
    p2Prob: "Problema: El plegado asimétrico hace que la bolsa se vuelque en los estantes minoristas.",
    p2Sol: "Solución: Los diseños de fondo Doyen y sello en K de precisión crean una base perfectamente plana y resistente.",
    p3Title: "3. Falla de Barrera",
    p3Prob: "Problema: El oxígeno o la humedad penetran en la bolsa, haciendo que el producto pierda frescura.",
    p3Sol: "Solución: Las películas multicapa de EVOH o metalizadas bloquean el O2 y la humedad, extendiendo la vida útil a más de 12 meses.",
    p4Title: "4. Mal Funcionamiento del Cierre",
    p4Prob: "Problema: Los polvos obstruyen el riel del cierre (zipper), imposibilitando el resellado.",
    p4Sol: "Solución: Integramos cierres premium o deslizadores a prueba de polvo para una resellabilidad confiable.",
    p5Title: "5. Difícil de Abrir",
    p5Prob: "Problema: Los consumidores batallan para abrir la bolsa, resultando en bordes rasgados o derrames.",
    p5Sol: "Solución: Las muescas de desgarre marcadas con láser garantizan una apertura limpia, recta y sin esfuerzo siempre."
  },
  fr: {
    problemsTitle: "5 Problèmes Courants des Sachets Doypack (Et Solutions)",
    problemsSubtitle: "Ne laissez pas un emballage médiocre gâcher votre produit. Voici comment nous résolvons les défaillances les plus courantes :",
    p1Title: "1. Soudures Faibles et Fuites",
    p1Prob: "Problème : Un mauvais thermoscellage fait éclater le soufflet inférieur sous la pression, entraînant des fuites.",
    p1Sol: "Solution : Nous utilisons des couches de thermoscellage à haute résistance et des tests d'éclatement rigoureux.",
    p2Title: "2. Mauvaise Stabilité en Rayon",
    p2Prob: "Problème : Un pliage asymétrique fait basculer le sachet sur les étagères des magasins.",
    p2Sol: "Solution : Les fonds Doyen et les soudures en K de précision créent une base parfaitement plate et solide.",
    p3Title: "3. Défaillance de la Barrière",
    p3Prob: "Problème : L'oxygène ou l'humidité pénètre dans le sac, rendant le produit rassis.",
    p3Sol: "Solution : Les films multicouches EVOH ou métallisés bloquent l'O2 et l'humidité, prolongeant la durée de conservation.",
    p4Title: "4. Dysfonctionnement du Zip",
    p4Prob: "Problème : Les poudres bouchent la glissière, rendant la refermeture impossible.",
    p4Sol: "Solution : Nous intégrons des zips premium ou des curseurs anti-poudre pour une refermeture fiable.",
    p5Title: "5. Difficile à Ouvrir",
    p5Prob: "Problème : Les consommateurs ont du mal à déchirer le sachet, ce qui provoque des renversements.",
    p5Sol: "Solution : Les encoches de déchirure découpées au laser garantissent une ouverture nette, droite et sans effort."
  },
  "zh-TW": {
    problemsTitle: "5 個常見的直立袋問題 (及解決方案)",
    problemsSubtitle: "別讓劣質包裝毀了您的產品。我們針對最常見的包裝失效問題提供專業解決方案：",
    p1Title: "1. 封口不牢與漏氣",
    p1Prob: "問題：熱封不良導致底部折邊在壓力下破裂，引發漏氣漏液。",
    p1Sol: "解決方案：我們採用高強度熱封層及嚴格的爆破測試，確保結構完整。",
    p2Title: "2. 貨架穩定性差",
    p2Prob: "問題：不對稱的折疊導致袋子在零售貨架上容易傾倒。",
    p2Sol: "解決方案：精密的 K 型封口和 Doyen 底部設計創造了完美平坦、堅固的底座。",
    p3Title: "3. 阻隔失效",
    p3Prob: "問題：氧氣或水分穿透包裝袋，導致產品受潮或變質。",
    p3Sol: "解決方案：多層 EVOH 或金屬化薄膜可阻絕氧氣及水分，延長保質期達 12 個月以上。",
    p4Title: "4. 拉鍊卡粉故障",
    p4Prob: "問題：粉末堵塞拉鍊軌道，導致無法重新密封。",
    p4Sol: "解決方案：我們整合了優質的按壓式拉鍊或防粉塵滑塊，確保可靠的重複密封性。",
    p5Title: "5. 難以撕開",
    p5Prob: "問題：消費者難以撕開包裝，導致撕裂邊緣不整齊或產品溢出。",
    p5Sol: "解決方案：激光打孔易撕口保證每次都能乾淨、筆直且不費力地打開。"
  }
}

export default function PouchStandUpPouchesPage() {
  const { t, i18n } = useTranslation()
  const currentLang = i18n.language || 'en'
  const tLocal = localTranslations[currentLang as keyof typeof localTranslations] || localTranslations.en
  const [scrollPercent, setScrollPercent] = useState(0)
  const [tilt, setTilt] = useState({ x: 0, y: 0 })
  const [activeFaq, setActiveFaq] = useState<number | null>(null)
  const heroCardRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      const s = window.scrollY
      const d = document.documentElement.scrollHeight - window.innerHeight
      if (d > 0) setScrollPercent(s / d)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!heroCardRef.current) return
    const rect = heroCardRef.current.getBoundingClientRect()
    setTilt({ x: ((e.clientX - rect.left) / rect.width - 0.5) * 30, y: ((e.clientY - rect.top) / rect.height - 0.5) * -30 })
  }

  const title = t("seoPages.pages.standUpPouches.b2c.metaTitle", "Custom Stand-Up Pouches - Eco-Friendly Doypack Bags | Pouch.eco")
  const description = t("seoPages.pages.standUpPouches.b2c.metaDescription", "BRCGS certified custom stand-up pouches. Certified compostable PLA & recyclable Mono-PE bags. Low MOQ 500 units. Free design proofs. Technical gas barrier protection.")

  const p = "seoPages.pages.standUpPouches.b2c.extended"

  const translatedSpecs = [
    {
      field: t(`${p}.specs.spec1Field`),
      raw: t(`${p}.specs.spec1Raw`),
      b2b: t(`${p}.specs.spec1B2b`)
    },
    {
      field: t(`${p}.specs.spec2Field`),
      raw: t(`${p}.specs.spec2Raw`),
      b2b: t(`${p}.specs.spec2B2b`)
    },
    {
      field: t(`${p}.specs.spec3Field`),
      raw: t(`${p}.specs.spec3Raw`),
      b2b: t(`${p}.specs.spec3B2b`)
    },
    {
      field: t(`${p}.specs.spec4Field`),
      raw: t(`${p}.specs.spec4Raw`),
      b2b: t(`${p}.specs.spec4B2b`)
    }
  ]

  const faqs = [
    {
      q: t(`${p}.faqs.q1`),
      a: t(`${p}.faqs.a1`)
    },
    {
      q: t(`${p}.faqs.q2`),
      a: t(`${p}.faqs.a2`)
    },
    {
      q: t(`${p}.faqs.q3`),
      a: t(`${p}.faqs.a3`)
    },
    {
      q: t(`${p}.faqs.q4`),
      a: t(`${p}.faqs.a4`)
    },
    {
      q: t(`${p}.faqs.q5`),
      a: t(`${p}.faqs.a5`)
    },
    {
      q: t(`${p}.faqs.q6`),
      a: t(`${p}.faqs.a6`)
    }
  ]

  return (
    <PouchLayout>
      <DualDomainSEOHead
        title={title}
        description={description}
      />

      {/* Clickable Breadcrumbs */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 pt-8 font-['JetBrains_Mono'] text-xs flex flex-wrap items-center gap-2">
        <Link to="/" className="text-black hover:underline flex items-center gap-1 font-bold">
          <Home className="w-3.5 h-3.5" /> {t("seoPages.backToHome", "HOME")}
        </Link>
        <span className="text-black font-black">/</span>
        <span className="text-neutral-500 font-bold uppercase">{t("seoPages.pages.standUpPouches.seoPages.breadcrumbs.packagingShapes", "SUSTAINABLE_PACKAGING")}</span>
        <span className="text-black font-black">/</span>
        <span className="bg-[#D4FF00] text-black border border-black px-2 py-0.5 font-black uppercase shadow-[1px_1px_0px_0px_rgba(0,0,0,1)]">
          {t("seoPages.pages.standUpPouches.b2b.breadcrumbs.currentPage", "STAND_UP_POUCHES")}
        </span>
      </div>
 
      {/* Hero Section */}
      <section className="relative pt-12 pb-24 border-b-4 border-black bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:20px_20px]">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 z-10 text-left">
              <div className="inline-block bg-[#D4FF00] border-4 border-black px-4 py-2 transform -rotate-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <span className="font-['JetBrains_Mono'] font-bold text-sm">PACKAGING_TYPE: SUP_01</span>
              </div>
              
              <h1 className="font-black text-5xl md:text-7xl leading-[0.9] tracking-tighter uppercase">
                {t("seoPages.pages.standUpPouches.b2c.hero.titlePart1", "Custom Stand-Up")}<br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF00FF] to-[#00FFFF] drop-shadow-[4px_4px_0px_rgba(0,0,0,1)]">
                  {t("seoPages.pages.standUpPouches.b2c.hero.titlePart2", "Pouches.")}
                </span>
              </h1>
 
              <p className="font-['JetBrains_Mono'] font-bold text-base md:text-lg max-w-md bg-white border-2 border-black p-4 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                {t("seoPages.pages.standUpPouches.b2c.hero.desc", "Certified compostable PLA plant-stars & recyclable Mono-PE structures. Outstanding barrier preservation, durable zippers, and custom sizes.")}
              </p>
 
              <div className="flex flex-col sm:flex-row gap-4">
                <NeoButton href="/sample" variant="primary">{t(`${p}.cta.btn1`, "Free Sample Kit")}</NeoButton>
                <NeoButton href="/free-mockup" variant="secondary">{t(`${p}.cta.btn2`, "Upload Blueprint")}</NeoButton>
              </div>
            </div>
 
            {/* 3D Viewer Card */}
            <div className="relative w-full h-[500px]" ref={heroCardRef} onMouseMove={handleMouseMove}>
              <ThreePouchViewer
                modelUrl="/3d/3d-pouch/stand-up-pouch2.glb"
                tilt={tilt}
                scrollPercent={scrollPercent}
                isMobile={true}
              />
            </div>
          </div>
        </div>
      </section>
 
      {/* Why SUP Section */}
      <section className="py-24 px-4 md:px-6 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          <NeoCard color="bg-white" className="text-left">
            <Zap className="w-12 h-12 mb-4 text-[#FF00FF]" />
            <h3 className="font-black text-3xl mb-4 uppercase">{t(`${p}.whySup.card1Title`, "Shelf Presence")}</h3>
            <p className="font-['JetBrains_Mono'] text-sm leading-relaxed mb-6">
              {t(`${p}.whySup.card1Desc`, "Our precision-folded bottom gusset technology ensures your brand stands tall and stays visible. 360° of customizable surface real estate for striking graphics and compliance badges.")}
            </p>
            <NeoBadge color="bg-[#D4FF00]">{t(`${p}.whySup.card1Badge`, "RETAIL_READY")}</NeoBadge>
          </NeoCard>
 
          <NeoCard color="bg-[#D4FF00]" className="text-left">
            <Shield className="w-12 h-12 mb-4 text-black" />
            <h3 className="font-black text-3xl mb-4 uppercase">{t(`${p}.whySup.card2Title`, "Barrier Tech")}</h3>
            <p className="font-['JetBrains_Mono'] text-sm leading-relaxed mb-6">
              {t(`${p}.whySup.card2Desc`, "Industrial high-barrier coatings keep your coffee beans, ingredients, or organic snacks safe. Dynamic gas-barrier properties ensure full O2 and moisture defense for up to 12+ months.")}
            </p>
            <NeoBadge color="bg-[#00FFFF]">{t(`${p}.whySup.card2Badge`, "CERTIFIED_BARRIER")}</NeoBadge>
          </NeoCard>
 
          <NeoCard color="bg-[#00FFFF]" className="text-left">
            <Leaf className="w-12 h-12 mb-4 text-[#FF00FF]" />
            <h3 className="font-black text-3xl mb-4 uppercase">{t(`${p}.whySup.card3Title`, "Eco Matrix")}</h3>
            <p className="font-['JetBrains_Mono'] text-sm leading-relaxed mb-6">
              {t(`${p}.whySup.card3Desc`, "Fully aligned with green retail standards. Available in certified Home Compostable, Industrial Compostable, and Curbside Recyclable Mono-Material structures.")}
            </p>
            <NeoBadge color="white">{t(`${p}.whySup.card3Badge`, "100%_SUSTAINABLE")}</NeoBadge>
          </NeoCard>
        </div>
      </section>
 
      {/* Use Cases Grid */}
      <section className="py-24 bg-black text-white border-y-4 border-black">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <h2 className="font-black text-5xl md:text-7xl uppercase mb-16 text-center text-[#D4FF00]">
            {t(`${p}.useCases.title`, "Target Application Scenarios")}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: t(`${p}.useCases.case1Title`, 'Coffee & Tea'), desc: t(`${p}.useCases.case1Desc`, 'EVOH high gas-lock combined with one-way degassing valves to lock out moisture and preserve roasting freshness.') },
              { title: t(`${p}.useCases.case2Title`, 'Pet Food & Treats'), desc: t(`${p}.useCases.case2Desc`, 'Heavy-duty K-seal bottoms calibrated for heavy weights (up to 2kg) with anti-scuff, grease-proof layer structures.') },
              { title: t(`${p}.useCases.case3Title`, 'Dry Snacks & Granola'), desc: t(`${p}.useCases.case3Desc`, 'Certified BPI & OK Compost plant biopolymers matching strict retail shelf stability and structural integrity.') },
              { title: t(`${p}.useCases.case4Title`, 'Powdered Ingredients'), desc: t(`${p}.useCases.case4Desc`, 'Static-free PLA coatings and leak-proof press-to-close zippers preventing powder sifting and seam rupture.') }
            ].map((useCase) => (
              <div key={useCase.title} className="border-4 border-white p-6 bg-black hover:bg-[#D4FF00] hover:text-black transition-colors group text-left">
                <h4 className="font-black text-2xl uppercase mb-4 tracking-tighter">{useCase.title}</h4>
                <p className="font-['JetBrains_Mono'] text-xs opacity-80 group-hover:opacity-100 mb-6 leading-relaxed">
                  {useCase.desc}
                </p>
                <div className="flex justify-between items-center mt-auto">
                  <span className="font-['JetBrains_Mono'] text-[10px] font-bold underline uppercase group-hover:text-black">
                    {t(`${p}.useCases.specActive`, "Spec Sheet Active")}
                  </span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Specs Translated Matrix */}
      <section className="py-24 px-4 md:px-6 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <h2 className="font-black text-5xl md:text-7xl uppercase text-left whitespace-pre-line">
            {t(`${p}.specs.specsHeader`, "Technical Specs\n& Purchasing Value")}
          </h2>
          <div className="font-['JetBrains_Mono'] text-sm font-bold bg-[#D4FF00] border-2 border-black px-4 py-2">
            {t(`${p}.specs.specsBadge`, "SPECS_V2026_COMPLIANT")}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {translatedSpecs.map((spec, i) => (
            <NeoCard key={i} color="bg-white" className="text-left space-y-4">
              <div className="flex items-center justify-between border-b-2 border-black pb-2">
                <h4 className="font-black text-xl uppercase text-black">{spec.field}</h4>
                <NeoBadge color="cyan">{t(`${p}.specs.verified`, "Verified")}</NeoBadge>
              </div>
              <div className="font-['JetBrains_Mono'] text-sm font-bold text-[#FF00FF]">
                {t(`${p}.specs.rawLabSpec`, "[RAW LAB SPEC]: ")} {spec.raw}
              </div>
              <div className="bg-neutral-50 p-4 border-2 border-dashed border-neutral-300 font-['JetBrains_Mono'] text-xs text-neutral-600 leading-relaxed">
                <span className="font-bold text-black uppercase block mb-1">
                  {t(`${p}.specs.buyingUtility`, "🛒 Commercial Buying Utility:")}
                </span>
                {spec.b2b}
              </div>
            </NeoCard>
          ))}
        </div>
      </section>

      {/* Deep Dive SEO Content */}
      <section className="py-24 bg-white border-t-4 border-black">
        <div className="max-w-4xl mx-auto px-4 md:px-6 text-left">
          <h2 className="text-4xl md:text-5xl font-['Space_Grotesk'] font-black uppercase mb-8">
            {t(`${p}.guide.title`, "The Ultimate Guide to")} <span className="text-[#00FFFF]">{t(`${p}.guide.titleHighlight`, "Stand-Up Pouches")}</span>
          </h2>
          
          <div className="prose prose-lg max-w-none font-['JetBrains_Mono'] text-gray-700 space-y-6">
            <p>
              {t(`${p}.guide.p1`, "Stand-up pouches (SUP) have revolutionized the flexible packaging industry. Also known as Doypacks, these innovative bags feature a bottom gusset that allows them to stand upright on retail shelves, maximizing brand visibility and shelf appeal. Whether you're packaging packaging specialty coffee, organic pet treats, or premium granola, stand-up pouches offer a versatile and cost-effective solution compared to rigid containers like glass jars or metal tins.")}
            </p>
            
            {/* Visual Showcase 1: Premium Product Lifestyle Cover */}
            <div className="my-8">
              <img 
                src="/imgs/pouch-shape/achieve-pack-sup-lifestyle.png" 
                alt="Premium Achieve Pack custom printed stand-up pouches in a real-world lifestyle retail scene" 
                className="w-full h-auto max-h-[450px] object-cover border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]"
              />
              <span className="text-[10px] text-neutral-500 font-bold block mt-2 text-center uppercase tracking-wider">
                {t(`${p}.guide.fig1`, "Figure 1: Custom printed physical stand-up pouches showcasing vivid eco-friendly digital graphics")}
              </span>
            </div>

            <h3 className="text-2xl font-['Space_Grotesk'] font-black uppercase text-black mt-12 mb-4">
              {t(`${p}.guide.section1Title`, "Why Brands Prefer Stand-Up Pouches")}
            </h3>
            <p>
              {t(`${p}.guide.section1P1`, "The primary advantage of the stand-up pouch is its structural design. The bottom gusset expands when the bag is filled, creating a sturdy base. This not only allows the product to act as its own billboard on crowded retail shelves but also makes the pouch incredibly space-efficient during shipping and storage. Before filling, these pouches lie flat, taking up a fraction of the space required for rigid packaging, which significantly reduces shipping costs and carbon footprint.")}
            </p>
            <p>
              {t(`${p}.guide.section1P2`, "Additionally, stand-up pouches are highly customizable. With our digital printing technology, brands can achieve photo-quality graphics, vibrant colors, and sharp text. You can incorporate clear windows to showcase your product, resealable zippers to maintain freshness after opening, and tear notches for easy consumer access.")}
            </p>

            <h3 className="text-2xl font-['Space_Grotesk'] font-black uppercase text-black mt-12 mb-4">
              {t(`${p}.guide.section2Title`, "Sustainability: Compostable and Recyclable Options")}
            </h3>
            <p>
              {t(`${p}.guide.section2P1`, "At POUCH.ECO, we understand the critical shift towards sustainable packaging. Traditional stand-up pouches often rely on mixed-material plastics that are impossible to recycle. We've engineered our pouches to meet the highest sustainability standards without compromising on barrier properties or aesthetic appeal.")}
            </p>

            {/* Visual Showcase 2: Certified Compostable Pouch */}
            <div className="my-8">
              <img 
                src="/imgs/pouch-shape/eco-stand-up-pouch.png" 
                alt="Premium Eco-Friendly Sustainable Stand-Up Pouch made from FSC kraft paper" 
                className="w-full h-auto max-h-[450px] object-cover border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]"
              />
              <span className="text-[10px] text-neutral-500 font-bold block mt-2 text-center uppercase tracking-wider">
                {t(`${p}.guide.fig2`, "Figure 2: Natural FSC Kraft high moisture barrier stand-up pouches")}
              </span>
            </div>
            
            {/* Visual Showcase 3: Certified Compostable Multi-Layer Stacks */}
            <div className="my-8">
              <img 
                src="/imgs/pouch-hero/pouch_compost_hero.png" 
                alt="Compostable film layers stack for high-performance sustainable stand up pouches" 
                className="w-full h-auto max-h-[450px] object-cover border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]"
                onError={(e) => {
                  // Fallback if path prefix needs adjustment
                  (e.target as HTMLImageElement).src = "/imgs/pouch/materials/pouch_compost_hero.png";
                }}
              />
              <span className="text-[10px] text-neutral-500 font-bold block mt-2 text-center uppercase tracking-wider">
                {t(`${p}.guide.fig3`, "Figure 3: Multi-layer certified compostable barrier cellulose film stacks")}
              </span>
            </div>

            <p>
              {t(`${p}.guide.section2P2`, "Our product lineup includes TUV-certified home compostable pouches that break down into organic matter within 180 days in a backyard compost bin. For brands requiring different end-of-life solutions, we also offer mono-material recyclable pouches (PE/PE or PP/PP) that are fully compatible with soft plastic recycling streams. By offering these eco-friendly alternatives, we help startup brands align their packaging with their environmental values and meet the growing consumer demand for plastic-free alternatives.")}
            </p>

            <h3 className="text-2xl font-['Space_Grotesk'] font-black uppercase text-black mt-12 mb-4">
              {t(`${p}.guide.section3Title`, "Low MOQ for Startups and Emerging Brands")}
            </h3>
            <p>
              {t(`${p}.guide.section3P1`, "Historically, custom printed packaging required massive minimum order quantities (MOQs) of 10,000 to 50,000 units, creating a significant barrier to entry for small businesses. We leverage state-of-the-art digital printing to offer MOQs starting at just 500 units. This allows startups to test new products, launch seasonal flavors, and run promotional campaigns without tying up capital in excessive packaging inventory.")}
            </p>
          </div>
        </div>
      </section>

      {/* 5 Common Problems Section */}
      <section className="py-24 bg-neutral-100 border-t-4 border-black">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-['Space_Grotesk'] font-black uppercase mb-4 text-black">
              {tLocal.problemsTitle}
            </h2>
            <p className="font-['JetBrains_Mono'] text-sm text-neutral-600 max-w-2xl mx-auto">
              {tLocal.problemsSubtitle}
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 text-left">
              {[
                { title: tLocal.p1Title, prob: tLocal.p1Prob, sol: tLocal.p1Sol },
                { title: tLocal.p2Title, prob: tLocal.p2Prob, sol: tLocal.p2Sol },
                { title: tLocal.p3Title, prob: tLocal.p3Prob, sol: tLocal.p3Sol },
                { title: tLocal.p4Title, prob: tLocal.p4Prob, sol: tLocal.p4Sol },
                { title: tLocal.p5Title, prob: tLocal.p5Prob, sol: tLocal.p5Sol },
              ].map((item, i) => (
                <div key={i} className="bg-white border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                  <h3 className="font-black text-xl uppercase mb-3 text-black">{item.title}</h3>
                  <div className="flex gap-3 mb-2 items-start">
                    <XCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                    <p className="font-['JetBrains_Mono'] text-sm text-neutral-600 leading-relaxed">{item.prob}</p>
                  </div>
                  <div className="flex gap-3 items-start">
                    <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <p className="font-['JetBrains_Mono'] text-sm font-bold text-black leading-relaxed">{item.sol}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="relative">
              <img 
                src="/imgs/knowledge/stand-up-pouches-pain-points.jpg" 
                alt="Stand Up Pouches Quality Control" 
                className="w-full h-auto object-cover border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]"
              />
              <div className="absolute -bottom-6 -right-6 bg-[#D4FF00] border-4 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transform rotate-3">
                <span className="font-['JetBrains_Mono'] font-black uppercase text-lg text-black">
                  Zero Failure <br/>Engineering
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive 6-Pillar B2B FAQ Section */}
      <section className="py-24 bg-gray-50 border-t-4 border-black">
        <div className="max-w-4xl mx-auto px-4 md:px-6 text-left">
          <h2 className="text-4xl md:text-5xl font-['Space_Grotesk'] font-black uppercase mb-4 text-center">
            {t(`${p}.faqSection.title`, "Frequently Asked")} <span className="text-[#FF00FF]">{t(`${p}.faqSection.titleHighlight`, "Questions")}</span>
          </h2>
          <p className="font-['JetBrains_Mono'] text-sm text-neutral-600 text-center mb-16 max-w-xl mx-auto">
            {t(`${p}.faqSection.subtitle`, "Professional B2B buyers require detailed verification. Expand the accordions below to audit our standard commercial policy:")}
          </p>

          <div className="space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = activeFaq === idx
              return (
                <div
                  key={idx}
                  className="bg-white border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all overflow-hidden"
                >
                  <button
                    type="button"
                    onClick={() => setActiveFaq(isOpen ? null : idx)}
                    className="w-full p-6 text-left font-['Space_Grotesk'] font-black text-lg uppercase flex items-center justify-between hover:bg-neutral-50 transition"
                  >
                    <span className="flex items-center gap-3">
                      <HelpCircle className="w-5 h-5 text-[#FF00FF] flex-shrink-0" />
                      {faq.q}
                    </span>
                    {isOpen ? <ChevronUp className="w-5 h-5 text-black" /> : <ChevronDown className="w-5 h-5 text-black" />}
                  </button>
                  
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <div className="p-6 border-t-4 border-dashed border-black font-['JetBrains_Mono'] text-sm text-gray-700 bg-amber-50/20 pl-14">
                          <span className="font-bold text-[#FF00FF] block mb-2">A:</span> {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-[#00FFFF] border-t-4 border-black">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-8">
          <h2 className="font-black text-5xl md:text-7xl uppercase">
            {t(`${p}.cta.title`, "Ready to Start?")}
          </h2>
          <p className="font-['JetBrains_Mono'] font-bold text-base md:text-xl max-w-2xl mx-auto">
            {t(`${p}.cta.desc`, "Get premium custom printed stand-up pouches tailored to your exact CAD volume specifications. Low 500 unit MOQ.")}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <NeoButton href="/sample" variant="primary">
              {t(`${p}.cta.btn1`, "Request Free Sample Kit")}
            </NeoButton>
            <NeoButton href="/free-mockup" variant="secondary">
              {t(`${p}.cta.btn2`, "Upload CAD Dieline")}
            </NeoButton>
            <NeoButton href="https://calendly.com/30-min-free-packaging-consultancy" variant="dark">
              {t(`${p}.cta.btn3`, "Book Free Call")}
            </NeoButton>
          </div>
        </div>
      </section>
    </PouchLayout>
  )
}
