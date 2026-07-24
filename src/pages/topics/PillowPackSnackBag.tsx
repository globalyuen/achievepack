import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ShieldCheck, Zap, ArrowRight, CheckCircle, Package, HelpCircle, Layers } from 'lucide-react';
import SEOPageLayout from '../../components/SEOPageLayout';
import ClickableImage from '../../components/ClickableImage';

const localTranslations: Record<string, any> = {
  en: {
    metaTitle: "Pillow Pack Snack Bags | Nitrogen Flush Packaging | Achieve Pack",
    metaDesc: "High-speed pillow pack snack bags for potato chips, popcorn & extruded snacks. Gas-flush nitrogen protection, high-barrier metallized films & custom digital print.",
    heroTitle: "Pillow Pack Snack Bags & Nitrogen Flush Pouches",
    heroSubtitle: "Engineered for high-volume potato chips, corn chips, and puffed snacks. Nitrogen gas-flush pillow cushioning protects fragile snacks from crushing while maintaining 100% crispiness.",
    quickAnswerTitle: "⚡ Technical Quick Answer",
    quickAnswerText: "Pillow pack snack bags (t-seal or back-seal pouches) are the industry standard for high-speed snack packaging. Combined with modified atmosphere nitrogen gas flushing (N2 flush), the trapped inert gas inflates the pouch like a cushion, preventing fragile chips from crushing during transit while displacing oxygen (OTR < 0.5 cc/m²/day) to eliminate oil rancidity.",
    
    empathyTitle: "Eliminating Chip Crushing & Stale Oil Rancidity",
    empathyP1: "Opening a snack bag only to find broken chip dust or a stale, rancid oil smell ruins the consumer brand experience. For snack producers, balancing high VFFS packaging speeds (up to 150 bags/min) with gas-tight seal integrity is a constant battle.",
    empathyP2: "Achieve Pack's Pillow Pack Snack Bags are manufactured using high-clarity Met-PET or barrier PE laminations with wide thermal sealant operating windows. Our gas-flush films maintain internal nitrogen pressure for over 12 months, ensuring unbroken, ultra-crispy snacks every time.",
    
    keyTakeawaysTitle: "Key Takeaways",
    kt1: "Nitrogen Gas-Flush Protection: Cushioning barrier eliminates chip crushing during carton transit.",
    kt2: "Zero Rancidity Oxygen Shield: High-barrier Met-PET films prevent oil oxidation and flavor degradation.",
    kt3: "High-Speed VFFS Performance: Smooth film slip factor designed for 120-150 bags per minute automated lines.",
    kt4: "Vibrant Gloss & Matte Finishes: High-definition rotogravure and digital printing for maximum shelf pop.",

    ryanNotebookTitle: "🔬 From Ryan Wong's Engineering Notebook",
    ryanNotebookText: "\"During a potato chip brand audit, we found that 8% of bags were deflating during transport to high-altitude mountain regions because the end-seal jaws didn't have enough dwell time to weld through oil residue. We reformulated the sealant layer with a specialized lower-melting-point metallocene PE resin and adjusted end-jaw pressure to 6.5 bar. This eliminated seal micro-voids, maintained full nitrogen cushion inflation up to 8,000 feet elevation, and reduced chip breakage by 95%.\"",
    ryanSignature: "— Ryan Wong, Co-Founder & Chief Packaging Engineer",

    painPointsTitle: "5 Packaging Pain Points & Engineering Solutions",
    pp1Title: "01 / Chip Crushing & Transit Damage",
    pp1Desc: "Fragile chips being crushed into small pieces inside un-cushioned flat bags.",
    pp1Sol: "Solution: Integrate nitrogen gas flush filling to inflate bag walls into a protective pneumatic cushion.",
    
    pp2Title: "02 / Stale Taste & Oil Rancidity",
    pp2Desc: "Oxygen reacting with snack oils over 30 days, causing unpleasant off-flavors.",
    pp2Sol: "Solution: Apply high-barrier Metallized PET or EVOH films that maintain internal O2 levels < 1.0%.",
    
    pp3Title: "03 / End-Seal Leaks from Oil Contamination",
    pp3Desc: "Snack oil splatters contaminating top/bottom end seals during high-speed vertical drops.",
    pp3Sol: "Solution: Formulate metallocene PE sealant layers capable of sealing cleanly through oil residue.",
    
    pp4Title: "04 / High Altitude Bag Bursting",
    pp4Desc: "Gas-flushed snack bags popping open when transported over high mountain passes.",
    pp4Sol: "Solution: Calibrate burst pressure limits to >35 kPa using biaxially oriented polypropylene (BOPP) outer webs.",
    
    pp5Title: "05 / Rigid Plastic Waste & Non-Recyclable Multilayers",
    pp5Desc: "Traditional snack bags ending up in landfills due to unseparable metalized layers.",
    pp5Sol: "Solution: Offer 100% Recyclable Mono-PE high-barrier snack film rolls for store-drop-off programs.",

    faqTitle: "Frequently Asked Questions",
    faq1Q: "How does nitrogen gas flushing protect snack foods?",
    faq1A: "Nitrogen gas displaces oxygen inside the pouch to prevent oil oxidation and stale flavors, while inflating the bag to act as a protective pneumatic cushion against physical crushing.",

    faq2Q: "Can pillow pack snack bags be run on automated VFFS machines?",
    faq2A: "Yes! Our pillow pack film rolls feature engineered slip coefficients (COF 0.20-0.25) for high-speed tracking on all standard Vertical Form Fill Seal (VFFS) equipment.",

    faq3Q: "What barrier materials are used for potato chip bags?",
    faq3A: "We typically use BOPP/Met-PET/PE or Mono-PE/EVOH structures to provide high moisture (MVTR < 0.5 g/m²/24h) and oxygen protection.",

    faq4Q: "Can I get matte and glossy finishes on the same snack bag?",
    faq4A: "Yes! We offer registered spot-matte and spot-gloss finishes, highlighting specific brand logos or chip graphics while keeping the background elegant matte.",

    faq5Q: "What is the MOQ for custom snack bags?",
    faq5A: "Digital printing starts from 1,000 bags for market testing, with rotogravure rollstock starting at 200kg per design."
  }
};

export default function PillowPackSnackBag() {
  const { i18n } = useTranslation();
  const currentLang = i18n.language ? i18n.language.toLowerCase() : 'en';
  const t = localTranslations[currentLang] || localTranslations['en'];

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      { "@type": "Question", "name": t.faq1Q, "acceptedAnswer": { "@type": "Answer", "text": t.faq1A } },
      { "@type": "Question", "name": t.faq2Q, "acceptedAnswer": { "@type": "Answer", "text": t.faq2A } },
      { "@type": "Question", "name": t.faq3Q, "acceptedAnswer": { "@type": "Answer", "text": t.faq3A } },
      { "@type": "Question", "name": t.faq4Q, "acceptedAnswer": { "@type": "Answer", "text": t.faq4A } },
      { "@type": "Question", "name": t.faq5Q, "acceptedAnswer": { "@type": "Answer", "text": t.faq5A } }
    ]
  };

  return (
    <SEOPageLayout>
      <Helmet>
        <title>{t.metaTitle}</title>
        <meta name="description" content={t.metaDesc} />
        <link rel="canonical" href="https://achievepack.com/topics/pillow-pack-snack-bag" />
        <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
      </Helmet>

      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-neutral-950 via-neutral-900 to-sky-950 text-white py-16 px-6 sm:px-12 rounded-3xl mb-12 shadow-2xl border border-neutral-800">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-sky-500/20 text-sky-400 border border-sky-500/30 text-xs font-semibold uppercase tracking-wider mb-6">
            <Package className="w-4 h-4" />
            <span>High-Speed VFFS Snack Packaging</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-6 leading-tight">
            {t.heroTitle}
          </h1>
          <p className="text-lg sm:text-xl text-neutral-300 mb-8 leading-relaxed">
            {t.heroSubtitle}
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="https://calendly.com/30-min-free-packaging-consultancy" target="_blank" rel="noopener noreferrer" className="px-6 py-3.5 rounded-xl bg-sky-500 hover:bg-sky-400 text-neutral-950 font-bold transition-all flex items-center gap-2">
              <span>Book Snack Packaging Audit</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>

      {/* Empathy Hook */}
      <div className="bg-white rounded-2xl p-8 mb-12 border border-neutral-200 shadow-sm">
        <h2 className="text-2xl font-bold text-neutral-900 mb-4">{t.empathyTitle}</h2>
        <p className="text-neutral-700 leading-relaxed mb-4">{t.empathyP1}</p>
        <p className="text-neutral-700 leading-relaxed">{t.empathyP2}</p>
      </div>

      {/* Quick Answer */}
      <div className="bg-gradient-to-r from-sky-950 to-neutral-900 text-white p-8 rounded-2xl mb-12 border border-sky-500/30">
        <h3 className="text-lg font-bold text-sky-400 mb-2 flex items-center gap-2">
          <Zap className="w-5 h-5" />
          <span>{t.quickAnswerTitle}</span>
        </h3>
        <p className="text-neutral-200 leading-relaxed">{t.quickAnswerText}</p>
      </div>

      {/* Key Takeaways */}
      <div className="bg-sky-50/60 border border-sky-200 rounded-2xl p-8 mb-12">
        <h3 className="text-xl font-bold text-sky-900 mb-4 flex items-center gap-2">
          <CheckCircle className="w-5 h-5 text-sky-600" />
          <span>{t.keyTakeawaysTitle}</span>
        </h3>
        <ul className="space-y-3 text-neutral-800">
          <li className="flex items-start gap-3"><span className="w-2 h-2 rounded-full bg-sky-500 mt-2 flex-shrink-0" /><span>{t.kt1}</span></li>
          <li className="flex items-start gap-3"><span className="w-2 h-2 rounded-full bg-sky-500 mt-2 flex-shrink-0" /><span>{t.kt2}</span></li>
          <li className="flex items-start gap-3"><span className="w-2 h-2 rounded-full bg-sky-500 mt-2 flex-shrink-0" /><span>{t.kt3}</span></li>
          <li className="flex items-start gap-3"><span className="w-2 h-2 rounded-full bg-sky-500 mt-2 flex-shrink-0" /><span>{t.kt4}</span></li>
        </ul>
      </div>

      {/* Ryan Wong Notebook */}
      <div className="bg-neutral-900 text-white p-8 rounded-2xl mb-12 border border-amber-500/30 shadow-xl">
        <h3 className="text-xl font-bold text-amber-400 mb-4">{t.ryanNotebookTitle}</h3>
        <p className="text-neutral-300 italic mb-4">{t.ryanNotebookText}</p>
        <p className="text-amber-400 font-semibold text-sm">{t.ryanSignature}</p>
      </div>

      {/* Image Showcase */}
      <div className="mb-12">
        <ClickableImage 
          src="/imgs/topics/pillow-pack-snack-bag/hero.jpg" 
          alt="Achieve Pack Pillow Pack Snack Bag" 
          className="w-full h-auto rounded-2xl shadow-lg border border-neutral-200"
        />
      </div>

      {/* 5 Pain Points */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-neutral-900 mb-8 text-center">{t.painPointsTitle}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-neutral-900 text-white p-6 rounded-2xl border border-neutral-800">
            <div className="text-xs font-mono text-sky-400 mb-2">{t.pp1Title}</div>
            <p className="text-neutral-400 text-sm mb-4">{t.pp1Desc}</p>
            <div className="bg-sky-950/60 border border-sky-500/30 p-3 rounded-xl text-sky-300 text-xs">{t.pp1Sol}</div>
          </div>
          <div className="bg-neutral-900 text-white p-6 rounded-2xl border border-neutral-800">
            <div className="text-xs font-mono text-sky-400 mb-2">{t.pp2Title}</div>
            <p className="text-neutral-400 text-sm mb-4">{t.pp2Desc}</p>
            <div className="bg-sky-950/60 border border-sky-500/30 p-3 rounded-xl text-sky-300 text-xs">{t.pp2Sol}</div>
          </div>
          <div className="bg-neutral-900 text-white p-6 rounded-2xl border border-neutral-800">
            <div className="text-xs font-mono text-sky-400 mb-2">{t.pp3Title}</div>
            <p className="text-neutral-400 text-sm mb-4">{t.pp3Desc}</p>
            <div className="bg-sky-950/60 border border-sky-500/30 p-3 rounded-xl text-sky-300 text-xs">{t.pp3Sol}</div>
          </div>
        </div>
      </div>

      {/* FAQs */}
      <div className="bg-white rounded-2xl p-8 mb-12 border border-neutral-200">
        <h2 className="text-2xl font-bold text-neutral-900 mb-6 flex items-center gap-2">
          <HelpCircle className="w-6 h-6 text-sky-600" />
          <span>{t.faqTitle}</span>
        </h2>
        <div className="space-y-4">
          <details className="group border border-neutral-200 rounded-xl p-4">
            <summary className="font-semibold text-neutral-900 cursor-pointer">{t.faq1Q}</summary>
            <p className="text-neutral-600 text-sm mt-3">{t.faq1A}</p>
          </details>
          <details className="group border border-neutral-200 rounded-xl p-4">
            <summary className="font-semibold text-neutral-900 cursor-pointer">{t.faq2Q}</summary>
            <p className="text-neutral-600 text-sm mt-3">{t.faq2A}</p>
          </details>
          <details className="group border border-neutral-200 rounded-xl p-4">
            <summary className="font-semibold text-neutral-900 cursor-pointer">{t.faq3Q}</summary>
            <p className="text-neutral-600 text-sm mt-3">{t.faq3A}</p>
          </details>
        </div>
      </div>
    </SEOPageLayout>
  );
}
