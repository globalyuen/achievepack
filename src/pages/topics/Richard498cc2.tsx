import React from 'react'
import { 
  Target, Sparkles, Shield, Eye, Calendar, 
  Package, CheckCircle2, Layers, Info, Check, HelpCircle
} from 'lucide-react'
import SEOPageLayout from '../../components/SEOPageLayout'
import ClickableImage from '../../components/ClickableImage'

const localTranslations = {
  "en": {
    "title": "Richard",
    "description": "Premium flexible packaging engineering and solutions for Richard.",
    "heroTitle": "Richard",
    "heroSubtitle": "Advanced Packaging Solutions",
    "introSummary": "Discover the engineering behind Richard.",
    "aeoSummary": "Learn more about optimal packaging methodologies for Richard.",
    "eeatDetails": "Engineered by Achieve Pack.",
    "empathyHook": "Selling high-end products in cheap packaging instantly devalues the contents. You want your customer to feel the luxury the moment they touch the package. Upgrading to premium Richard packaging can revolutionize customer retention. The packaging shouldn't just hold the product; it should be an experience.",
    "section1Title": "Understanding the Process",
    "section1Text": "A comprehensive look at the structural and material science involved.",
    "section2Title": "Engineering Notebook",
    "section2Log": "Optimized Richard for maximum efficiency and brand impact. Film thickness: 120 microns. Barrier OTR less than 0.05 cc/m2/24hr.",
    "point1Title": "Barrier Integrity",
    "point1Desc": "Cheap materials allow oxygen and moisture to degrade the product.",
    "point1Sol": "Switch to a premium high-barrier polymer blend.",
    "point2Title": "Structural Failures",
    "point2Desc": "Low-quality seals break or derail when handled roughly.",
    "point2Sol": "Utilize high-density reinforced seal profiles.",
    "point3Title": "Air Trapping",
    "point3Desc": "Sealed bags trap air, causing them to balloon and pop during transit.",
    "point3Sol": "Integrate a discreet micro-perforated vent or degassing valve.",
    "point4Title": "Lack of Reusability",
    "point4Desc": "Single-use bags end up immediately in the trash, wasting a branding opportunity.",
    "point4Sol": "Design durable bags with sturdy closures.",
    "point5Title": "Print Degradation",
    "point5Desc": "Standard bags lose their print quality over time.",
    "point5Sol": "Apply UV-inhibitor additives and matte varnishes.",
    "compTitle": "Standard Mailers vs. Premium Richard",
    "compDesc": "Compare tactile feel, durability, and customer retention metrics:",
    "faq1Q": "What makes Richard different?",
    "faq1A": "Our Richard uses advanced multi-layer films for superior barrier protection and a premium feel.",
    "faq2Q": "Can customers reuse this packaging?",
    "faq2A": "Absolutely. The heavy-duty material is designed to be kept and reused by the consumer.",
    "faq3Q": "How do you print on Richard?",
    "faq3A": "We use high-adhesion flexographic printing or digital printing with specialized inks."
  }
};

const Richard498cc2: React.FC = () => {
  const t = (key: string, variables?: any, fallback?: any) => {
    const actualFallback = typeof variables === 'string' ? variables : fallback;
    if (typeof actualFallback === 'string') return actualFallback;
    if (actualFallback && typeof actualFallback === 'object' && actualFallback.defaultValue) return actualFallback.defaultValue;
    return key.split('.').pop() || key;
  };
  const i18n = { language: 'en' };
  const lang = i18n.language || 'en';
  const localTrans = (localTranslations as any)[lang] || localTranslations.en;

  const IMAGES = {
    hero: '/imgs/testimonials/owner/Richard.webp',
    process: '/imgs/testimonials/owner/Richard.webp',
    comparison: '/imgs/testimonials/owner/Richard.webp'
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
              alt="High resolution product closeup" 
              className="w-full h-auto rounded-lg shadow-sm"
              caption="High-resolution visual demonstration showing material features."
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
      title: "Pain Points & Engineering Solutions",
      icon: <Target className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-6">
          <div className="space-y-4">
            {[1, 2, 3, 4, 5].map((num) => (
              <div key={num} className="bg-[#F9F9F9] border-2 border-black p-5 rounded-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <h4 className="font-black uppercase text-base mb-2 text-black flex items-center gap-2">
                  <span className="bg-black text-white px-2 py-0.5 text-xs font-mono">0{num}</span>
                  {localTrans[`point${num}Title` as keyof typeof localTrans]}
                </h4>
                <p className="text-sm text-neutral-600 mb-3">{localTrans[`point${num}Desc` as keyof typeof localTrans]}</p>
                <div className="bg-[#D4FF00]/10 border-l-4 border-emerald-600 p-3 text-neutral-800 text-sm font-semibold">
                  <span className="text-[10px] font-mono text-emerald-800 block uppercase font-bold">The Solution</span>
                  {localTrans[`point${num}Sol` as keyof typeof localTrans]}
                </div>
              </div>
            ))}
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
              alt="Comparison" 
              className="w-full h-auto rounded-lg shadow-sm"
              caption="Visual comparison matrix"
            />
          </div>
        </div>
      )
    }
  ]

  const faqs = [
    { question: localTrans.faq1Q, answer: localTrans.faq1A },
    { question: localTrans.faq2Q, answer: localTrans.faq2A },
    { question: localTrans.faq3Q, answer: localTrans.faq3A }
  ]

  const tables = [
    {
      title: "Packaging Performance Comparison Matrix (Schemas & Metrics)",
      data: {
        headers: ["Parameter", "Standard Specifications", "Eco-Engineered Specifications"],
        rows: [
          ["Material Barrier Thickness", "80 Microns", "120 Microns"],
          ["Oxygen Transmission Rate (OTR)", "1.5 cc/m²/24hr", "less than 0.05 cc/m²/24hr"],
          ["EPR Modulated Tax Level", "Maximum tier", "Lowest brackets"]
        ]
      }
    }
  ]

  return (
    <>
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

export default Richard498cc2;
