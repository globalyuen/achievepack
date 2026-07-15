import React from 'react'
import { Helmet } from 'react-helmet-async'
import { 
  Target, Sparkles, Shield, Eye, Calendar, 
  Package, CheckCircle2, Layers, Info, Check, HelpCircle
} from 'lucide-react'
import SEOPageLayout from '../../components/SEOPageLayout'
import ClickableImage from '../../components/ClickableImage'
import { useTranslation } from 'react-i18next'

const localTranslations = {
  en: {
  "title": "Beverage Soft Stand Up Pouch",
  "description": "Premium flexible packaging engineering and solutions.",
  "heroTitle": "Beverage Soft Stand Up Pouch",
  "heroSubtitle": "Advanced Packaging Solutions",
  "introSummary": "Discover the engineering behind this packaging format.",
  "aeoSummary": "Learn more about optimal packaging methodologies.",
  "eeatDetails": "Engineered by Achieve Pack.",
  "empathyHook": "Launching a new beverage in heavy, fragile glass bottles or bulky plastic jugs is a logistical nightmare. The shipping costs alone can crush a startup's margins, not to mention the heartbreak of opening a pallet to find shattered glass and sticky liquid everywhere. We understand the need for a modern, lightweight solution that still feels premium in the consumer's hand. Soft stand-up beverage pouches are the future. They slash your freight costs by 80%, bounce instead of break, and offer a fun, sensory drinking experience that modern consumers love.",
  "section1Title": "Understanding the Process",
  "section1Text": "A comprehensive look at the structural and material science involved.",
  "section2Title": "Key Advantages",
  "section2Log": "Optimized for maximum efficiency and brand impact.",
  "point1Title": "High Freight Costs and Weight",
  "point1Desc": "Shipping heavy liquid in heavy glass bottles results in massive carbon footprints and freight fees.",
  "point1Sol": "Switch to lightweight flexible pouches that weigh 90% less than glass and pack perfectly flat before filling.",
  "point2Title": "Punctures and Bursting in Transit",
  "point2Desc": "Weak flexible pouches can burst at the seams when dropped or squeezed during shipping.",
  "point2Sol": "Engineer the pouch with a high-strength nylon (BOPA) core layer and reinforced quad-welded gusset seals.",
  "point3Title": "Off-Tastes from Plastic Films",
  "point3Desc": "Cheap inner PE liners can leach chemical tastes into sensitive beverages like water or cocktails.",
  "point3Sol": "Use specialized, organoleptically neutral, FDA-approved inner liners designed specifically to preserve delicate beverage flavors.",
  "point4Title": "Bag Collapsing While Pouring",
  "point4Desc": "Soft pouches can flop over or collapse in the hand, making it difficult for the consumer to pour or drink.",
  "point4Sol": "Design a structural Doyen bottom gusset and utilize rigid corner spouts to give the pouch physical stability and ergonomic grip.",
  "point5Title": "Hot-Fill Processing Melting the Bag",
  "point5Desc": "Pasteurizing juices at 85\u00b0C causes standard plastic pouches to warp, shrink, or melt.",
  "point5Sol": "Construct the pouch using heat-stabilized PET and high-temperature resistant adhesives explicitly rated for hot-fill processing.",
  "compTitle": "Rigid Glass/PET Bottles vs. Flexible Beverage Pouches",
  "compDesc": "A dramatic comparison of empty weight, storage volume, and shipping efficiency:",
  "faq1Q": "Can you put alcohol in a flexible pouch?",
  "faq1A": "Yes. We use specialized, highly chemical-resistant laminates designed to handle high-proof alcohol (like ready-to-drink cocktails) without delaminating.",
  "faq2Q": "Are beverage pouches recyclable?",
  "faq2A": "Yes, we offer mono-material PE beverage pouches with compatible PE spouts that are fully recyclable at store drop-off locations.",
  "faq3Q": "Do these pouches stand up on their own?",
  "faq3A": "Yes. Our pouches feature a precision-engineered bottom gusset that expands when filled, providing a sturdy, stable base on retail shelves."
},
  es: {
  "title": "Beverage Soft Stand Up Pouch",
  "description": "Premium flexible packaging engineering and solutions.",
  "heroTitle": "Beverage Soft Stand Up Pouch",
  "heroSubtitle": "Advanced Packaging Solutions",
  "introSummary": "Discover the engineering behind this packaging format.",
  "aeoSummary": "Learn more about optimal packaging methodologies.",
  "eeatDetails": "Engineered by Achieve Pack.",
  "empathyHook": "Launching a new beverage in heavy, fragile glass bottles or bulky plastic jugs is a logistical nightmare. The shipping costs alone can crush a startup's margins, not to mention the heartbreak of opening a pallet to find shattered glass and sticky liquid everywhere. We understand the need for a modern, lightweight solution that still feels premium in the consumer's hand. Soft stand-up beverage pouches are the future. They slash your freight costs by 80%, bounce instead of break, and offer a fun, sensory drinking experience that modern consumers love.",
  "section1Title": "Understanding the Process",
  "section1Text": "A comprehensive look at the structural and material science involved.",
  "section2Title": "Key Advantages",
  "section2Log": "Optimized for maximum efficiency and brand impact.",
  "point1Title": "High Freight Costs and Weight",
  "point1Desc": "Shipping heavy liquid in heavy glass bottles results in massive carbon footprints and freight fees.",
  "point1Sol": "Switch to lightweight flexible pouches that weigh 90% less than glass and pack perfectly flat before filling.",
  "point2Title": "Punctures and Bursting in Transit",
  "point2Desc": "Weak flexible pouches can burst at the seams when dropped or squeezed during shipping.",
  "point2Sol": "Engineer the pouch with a high-strength nylon (BOPA) core layer and reinforced quad-welded gusset seals.",
  "point3Title": "Off-Tastes from Plastic Films",
  "point3Desc": "Cheap inner PE liners can leach chemical tastes into sensitive beverages like water or cocktails.",
  "point3Sol": "Use specialized, organoleptically neutral, FDA-approved inner liners designed specifically to preserve delicate beverage flavors.",
  "point4Title": "Bag Collapsing While Pouring",
  "point4Desc": "Soft pouches can flop over or collapse in the hand, making it difficult for the consumer to pour or drink.",
  "point4Sol": "Design a structural Doyen bottom gusset and utilize rigid corner spouts to give the pouch physical stability and ergonomic grip.",
  "point5Title": "Hot-Fill Processing Melting the Bag",
  "point5Desc": "Pasteurizing juices at 85\u00b0C causes standard plastic pouches to warp, shrink, or melt.",
  "point5Sol": "Construct the pouch using heat-stabilized PET and high-temperature resistant adhesives explicitly rated for hot-fill processing.",
  "compTitle": "Rigid Glass/PET Bottles vs. Flexible Beverage Pouches",
  "compDesc": "A dramatic comparison of empty weight, storage volume, and shipping efficiency:",
  "faq1Q": "Can you put alcohol in a flexible pouch?",
  "faq1A": "Yes. We use specialized, highly chemical-resistant laminates designed to handle high-proof alcohol (like ready-to-drink cocktails) without delaminating.",
  "faq2Q": "Are beverage pouches recyclable?",
  "faq2A": "Yes, we offer mono-material PE beverage pouches with compatible PE spouts that are fully recyclable at store drop-off locations.",
  "faq3Q": "Do these pouches stand up on their own?",
  "faq3A": "Yes. Our pouches feature a precision-engineered bottom gusset that expands when filled, providing a sturdy, stable base on retail shelves."
},
  fr: {
  "title": "Beverage Soft Stand Up Pouch",
  "description": "Premium flexible packaging engineering and solutions.",
  "heroTitle": "Beverage Soft Stand Up Pouch",
  "heroSubtitle": "Advanced Packaging Solutions",
  "introSummary": "Discover the engineering behind this packaging format.",
  "aeoSummary": "Learn more about optimal packaging methodologies.",
  "eeatDetails": "Engineered by Achieve Pack.",
  "empathyHook": "Launching a new beverage in heavy, fragile glass bottles or bulky plastic jugs is a logistical nightmare. The shipping costs alone can crush a startup's margins, not to mention the heartbreak of opening a pallet to find shattered glass and sticky liquid everywhere. We understand the need for a modern, lightweight solution that still feels premium in the consumer's hand. Soft stand-up beverage pouches are the future. They slash your freight costs by 80%, bounce instead of break, and offer a fun, sensory drinking experience that modern consumers love.",
  "section1Title": "Understanding the Process",
  "section1Text": "A comprehensive look at the structural and material science involved.",
  "section2Title": "Key Advantages",
  "section2Log": "Optimized for maximum efficiency and brand impact.",
  "point1Title": "High Freight Costs and Weight",
  "point1Desc": "Shipping heavy liquid in heavy glass bottles results in massive carbon footprints and freight fees.",
  "point1Sol": "Switch to lightweight flexible pouches that weigh 90% less than glass and pack perfectly flat before filling.",
  "point2Title": "Punctures and Bursting in Transit",
  "point2Desc": "Weak flexible pouches can burst at the seams when dropped or squeezed during shipping.",
  "point2Sol": "Engineer the pouch with a high-strength nylon (BOPA) core layer and reinforced quad-welded gusset seals.",
  "point3Title": "Off-Tastes from Plastic Films",
  "point3Desc": "Cheap inner PE liners can leach chemical tastes into sensitive beverages like water or cocktails.",
  "point3Sol": "Use specialized, organoleptically neutral, FDA-approved inner liners designed specifically to preserve delicate beverage flavors.",
  "point4Title": "Bag Collapsing While Pouring",
  "point4Desc": "Soft pouches can flop over or collapse in the hand, making it difficult for the consumer to pour or drink.",
  "point4Sol": "Design a structural Doyen bottom gusset and utilize rigid corner spouts to give the pouch physical stability and ergonomic grip.",
  "point5Title": "Hot-Fill Processing Melting the Bag",
  "point5Desc": "Pasteurizing juices at 85\u00b0C causes standard plastic pouches to warp, shrink, or melt.",
  "point5Sol": "Construct the pouch using heat-stabilized PET and high-temperature resistant adhesives explicitly rated for hot-fill processing.",
  "compTitle": "Rigid Glass/PET Bottles vs. Flexible Beverage Pouches",
  "compDesc": "A dramatic comparison of empty weight, storage volume, and shipping efficiency:",
  "faq1Q": "Can you put alcohol in a flexible pouch?",
  "faq1A": "Yes. We use specialized, highly chemical-resistant laminates designed to handle high-proof alcohol (like ready-to-drink cocktails) without delaminating.",
  "faq2Q": "Are beverage pouches recyclable?",
  "faq2A": "Yes, we offer mono-material PE beverage pouches with compatible PE spouts that are fully recyclable at store drop-off locations.",
  "faq3Q": "Do these pouches stand up on their own?",
  "faq3A": "Yes. Our pouches feature a precision-engineered bottom gusset that expands when filled, providing a sturdy, stable base on retail shelves."
},
  'zh-tw': {
  "title": "Beverage Soft Stand Up Pouch",
  "description": "Premium flexible packaging engineering and solutions.",
  "heroTitle": "Beverage Soft Stand Up Pouch",
  "heroSubtitle": "Advanced Packaging Solutions",
  "introSummary": "Discover the engineering behind this packaging format.",
  "aeoSummary": "Learn more about optimal packaging methodologies.",
  "eeatDetails": "Engineered by Achieve Pack.",
  "empathyHook": "Launching a new beverage in heavy, fragile glass bottles or bulky plastic jugs is a logistical nightmare. The shipping costs alone can crush a startup's margins, not to mention the heartbreak of opening a pallet to find shattered glass and sticky liquid everywhere. We understand the need for a modern, lightweight solution that still feels premium in the consumer's hand. Soft stand-up beverage pouches are the future. They slash your freight costs by 80%, bounce instead of break, and offer a fun, sensory drinking experience that modern consumers love.",
  "section1Title": "Understanding the Process",
  "section1Text": "A comprehensive look at the structural and material science involved.",
  "section2Title": "Key Advantages",
  "section2Log": "Optimized for maximum efficiency and brand impact.",
  "point1Title": "High Freight Costs and Weight",
  "point1Desc": "Shipping heavy liquid in heavy glass bottles results in massive carbon footprints and freight fees.",
  "point1Sol": "Switch to lightweight flexible pouches that weigh 90% less than glass and pack perfectly flat before filling.",
  "point2Title": "Punctures and Bursting in Transit",
  "point2Desc": "Weak flexible pouches can burst at the seams when dropped or squeezed during shipping.",
  "point2Sol": "Engineer the pouch with a high-strength nylon (BOPA) core layer and reinforced quad-welded gusset seals.",
  "point3Title": "Off-Tastes from Plastic Films",
  "point3Desc": "Cheap inner PE liners can leach chemical tastes into sensitive beverages like water or cocktails.",
  "point3Sol": "Use specialized, organoleptically neutral, FDA-approved inner liners designed specifically to preserve delicate beverage flavors.",
  "point4Title": "Bag Collapsing While Pouring",
  "point4Desc": "Soft pouches can flop over or collapse in the hand, making it difficult for the consumer to pour or drink.",
  "point4Sol": "Design a structural Doyen bottom gusset and utilize rigid corner spouts to give the pouch physical stability and ergonomic grip.",
  "point5Title": "Hot-Fill Processing Melting the Bag",
  "point5Desc": "Pasteurizing juices at 85\u00b0C causes standard plastic pouches to warp, shrink, or melt.",
  "point5Sol": "Construct the pouch using heat-stabilized PET and high-temperature resistant adhesives explicitly rated for hot-fill processing.",
  "compTitle": "Rigid Glass/PET Bottles vs. Flexible Beverage Pouches",
  "compDesc": "A dramatic comparison of empty weight, storage volume, and shipping efficiency:",
  "faq1Q": "Can you put alcohol in a flexible pouch?",
  "faq1A": "Yes. We use specialized, highly chemical-resistant laminates designed to handle high-proof alcohol (like ready-to-drink cocktails) without delaminating.",
  "faq2Q": "Are beverage pouches recyclable?",
  "faq2A": "Yes, we offer mono-material PE beverage pouches with compatible PE spouts that are fully recyclable at store drop-off locations.",
  "faq3Q": "Do these pouches stand up on their own?",
  "faq3A": "Yes. Our pouches feature a precision-engineered bottom gusset that expands when filled, providing a sturdy, stable base on retail shelves."
}
}

const BeverageSoftStandUpPouch: React.FC = () => {
  const { t, i18n } = useTranslation()
  const lang = i18n.language || 'en'
  const localTrans = localTranslations[lang as keyof typeof localTranslations] || localTranslations.en

  const IMAGES = {
    hero: '/imgs/knowledge/liquid-spout-pouches-guide.jpg',
    process: '/imgs/knowledge/liquid-spout-pouches-process.jpg',
    comparison: '/imgs/knowledge/liquid-spout-pouches-comparison.jpg'
  }

  const sections = [
    {
      id: 'empathy-hook',
      title: 'The Reality of the Challenge',
      icon: <CheckCircle2 className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-lg space-y-4 mb-8">
          <p className="text-lg text-neutral-800 italic leading-relaxed">
            "{localTrans.empathyHook}"
          </p>
          <div className="flex items-center gap-3 mt-4 pt-4 border-t border-amber-200">
            <img src="/imgs/ryan-wong-avatar.jpg" alt="Ryan Wong" className="w-10 h-10 rounded-full border-2 border-white shadow-sm" onError={(e) => { e.currentTarget.src = 'https://ui-avatars.com/api/?name=Ryan+Wong&background=000&color=fff' }} />
            <div>
              <p className="text-sm font-bold text-neutral-900">Ryan Wong</p>
              <p className="text-xs text-neutral-600">Chief Packaging Engineer, Achieve Pack</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'detailed-explanation',
      title: localTrans.section1Title,
      icon: <Layers className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-6 text-neutral-700">
          <p className="text-base leading-relaxed">
            {localTrans.section1Text}
          </p>
          <div className="bg-neutral-100 p-2 rounded-xl border-2 border-neutral-200">
            <ClickableImage 
              src={IMAGES.process} 
              alt="High resolution product lamination process closeup" 
              className="w-full h-auto rounded-lg shadow-sm"
              caption="High-resolution visual demonstration showing material and structural features of the package."
            />
          </div>
        </div>
      )
    },
    {
      id: 'EEAT-anecdote',
      title: localTrans.section2Title,
      icon: <Info className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="bg-gradient-to-r from-neutral-900 via-neutral-800 to-neutral-900 text-white p-6 rounded-lg border-2 border-[#D4FF00] space-y-4">
          <p className="font-['JetBrains_Mono'] text-xs font-bold text-[#D4FF00]">// CHIEF PACKAGING ENGINEER JOURNAL entry</p>
          <blockquote className="italic border-l-4 border-[#D4FF00] pl-4 text-sm md:text-base text-neutral-200">
            "{localTrans.section2Log}"
          </blockquote>
          <p className="text-xs font-['JetBrains_Mono'] text-[#D4FF00] font-semibold flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#D4FF00]" /> 100% Prepress Calibration Guaranteed
          </p>
        </div>
      )
    },
    {
      id: 'five-plain-points',
      title: "5 Core Challenges & Engineering Solutions",
      icon: <Target className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-6">
          <div className="space-y-4">
            {/* Point 1 */}
            <div className="bg-[#F9F9F9] border-2 border-black p-5 rounded-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h4 className="font-black uppercase text-base mb-2 text-black flex items-center gap-2">
                <span className="bg-black text-white px-2 py-0.5 text-xs font-mono">01</span>
                {localTrans.point1Title}
              </h4>
              <p className="text-sm text-neutral-600 mb-3">{localTrans.point1Desc}</p>
              <div className="bg-[#D4FF00]/10 border-l-4 border-emerald-600 p-3 text-neutral-800 text-sm font-semibold">
                <span className="text-[10px] font-mono text-emerald-800 block uppercase font-bold">The Solution</span>
                {localTrans.point1Sol}
              </div>
            </div>

            {/* Point 2 */}
            <div className="bg-[#F9F9F9] border-2 border-black p-5 rounded-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h4 className="font-black uppercase text-base mb-2 text-black flex items-center gap-2">
                <span className="bg-black text-white px-2 py-0.5 text-xs font-mono">02</span>
                {localTrans.point2Title}
              </h4>
              <p className="text-sm text-neutral-600 mb-3">{localTrans.point2Desc}</p>
              <div className="bg-[#D4FF00]/10 border-l-4 border-emerald-600 p-3 text-neutral-800 text-sm font-semibold">
                <span className="text-[10px] font-mono text-emerald-800 block uppercase font-bold">The Solution</span>
                {localTrans.point2Sol}
              </div>
            </div>

            {/* Point 3 */}
            <div className="bg-[#F9F9F9] border-2 border-black p-5 rounded-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h4 className="font-black uppercase text-base mb-2 text-black flex items-center gap-2">
                <span className="bg-black text-white px-2 py-0.5 text-xs font-mono">03</span>
                {localTrans.point3Title}
              </h4>
              <p className="text-sm text-neutral-600 mb-3">{localTrans.point3Desc}</p>
              <div className="bg-[#D4FF00]/10 border-l-4 border-emerald-600 p-3 text-neutral-800 text-sm font-semibold">
                <span className="text-[10px] font-mono text-emerald-800 block uppercase font-bold">The Solution</span>
                {localTrans.point3Sol}
              </div>
            </div>

            {/* Point 4 */}
            <div className="bg-[#F9F9F9] border-2 border-black p-5 rounded-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h4 className="font-black uppercase text-base mb-2 text-black flex items-center gap-2">
                <span className="bg-black text-white px-2 py-0.5 text-xs font-mono">04</span>
                {localTrans.point4Title}
              </h4>
              <p className="text-sm text-neutral-600 mb-3">{localTrans.point4Desc}</p>
              <div className="bg-[#D4FF00]/10 border-l-4 border-emerald-600 p-3 text-neutral-800 text-sm font-semibold">
                <span className="text-[10px] font-mono text-emerald-800 block uppercase font-bold">The Solution</span>
                {localTrans.point4Sol}
              </div>
            </div>

            {/* Point 5 */}
            <div className="bg-[#F9F9F9] border-2 border-black p-5 rounded-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h4 className="font-black uppercase text-base mb-2 text-black flex items-center gap-2">
                <span className="bg-black text-white px-2 py-0.5 text-xs font-mono">05</span>
                {localTrans.point5Title}
              </h4>
              <p className="text-sm text-neutral-600 mb-3">{localTrans.point5Desc}</p>
              <div className="bg-[#D4FF00]/10 border-l-4 border-emerald-600 p-3 text-neutral-800 text-sm font-semibold">
                <span className="text-[10px] font-mono text-emerald-800 block uppercase font-bold">The Solution</span>
                {localTrans.point5Sol}
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'resolution-comparison-section',
      title: localTrans.compTitle,
      icon: <Eye className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-6 text-neutral-700">
          <p className="text-base leading-relaxed">
            {localTrans.compDesc}
          </p>
          <div className="bg-neutral-100 p-2 rounded-xl border-2 border-neutral-200">
            <ClickableImage 
              src={IMAGES.comparison} 
              alt="Microscopic or detailed physical properties comparison" 
              className="w-full h-auto rounded-lg shadow-sm"
              caption="Visual packaging engineering representation comparing materials, barriers, or sealing methods."
            />
          </div>
        </div>
      )
    }
  ]

  const faqs = [
    {
      question: localTrans.faq1Q,
      answer: localTrans.faq1A
    },
    {
      question: localTrans.faq2Q,
      answer: localTrans.faq2A
    },
    {
      question: localTrans.faq3Q,
      answer: localTrans.faq3A
    }
  ]

  const tables = [
    {
      title: "Packaging Performance Comparison Matrix",
      data: {
        headers: ["Parameter", "Standard Specifications", "Eco-Engineered Specifications"],
        rows: [
          ["Material Barrier Thickness", "80 Microns (Mixed laminates)", "120 Microns (Mono PE / Plant-Based)"],
          ["Oxygen Transmission Rate (OTR)", "1.5 cc/m²/24hr (Standard)", "Near Zero (<0.05 cc/m²/24hr)"],
          ["EPR Modulated Tax Level", "Maximum tier surcharges", "Lowest modulated tax brackets"]
        ]
      }
    }
  ]

  const schemaKeywords = [
    "custom packaging design",
    "sustainable barrier films",
    "epr tax compliance",
    "flexible pouches",
    "packaging engineer"
  ]

  return (
    <>
      <Helmet>
        <title>{localTrans.title} | Achieve Pack</title>
        <meta name="description" content={localTrans.description} />
        <link rel="canonical" href={`https://achievepack.com/topics/beverage-soft-stand-up-pouch`} />
        <meta name="keywords" content={schemaKeywords.join(', ')} />
        
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": localTrans.title,
            "description": localTrans.description,
            "image": `https://achievepack.com${IMAGES.hero}`,
            "author": {
              "@type": "Person",
              "name": "Ryan Wong",
              "jobTitle": "Chief Packaging Engineer"
            },
            "publisher": {
              "@type": "Organization",
              "name": "Achieve Pack",
              "logo": {
                "@type": "ImageObject",
                "url": "https://achievepack.com/logo.png"
              }
            },
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": `https://achievepack.com/topics/beverage-soft-stand-up-pouch`
            }
          })}
        </script>
      </Helmet>

      <SEOPageLayout
        title={localTrans.title}
        description={localTrans.description}
        heroTitle={localTrans.heroTitle}
        heroSubtitle={localTrans.heroSubtitle}
        heroImage={IMAGES.hero}
        introSummary={localTrans.introSummary}
        aeoSummary={localTrans.aeoSummary}
        eeatDetails={localTrans.eeatDetails}
        sections={sections}
        faqs={faqs}
        tables={tables}
      />
    </>
  )
}

export default BeverageSoftStandUpPouch
