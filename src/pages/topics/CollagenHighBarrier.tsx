import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ShieldCheck, Zap, ArrowRight, CheckCircle, Package, HelpCircle, Layers, Sparkles } from 'lucide-react';
import SEOPageLayout from '../../components/SEOPageLayout';
import ClickableImage from '../../components/ClickableImage';

const localTranslations: Record<string, any> = {
  en: {
    metaTitle: "High-Barrier Collagen Powder Packaging | Achieve Pack",
    metaDesc: "Ultra-high barrier flexible packaging for collagen peptides & nutraceutical powders. Protection against moisture clumping & oxygen oxidation.",
    heroTitle: "High-Barrier Collagen & Peptide Packaging",
    heroSubtitle: "Engineered for hygroscopic nutraceutical powders. Ultra-low WVTR (<0.05 g/m²/24h) and EVOH oxygen barriers lock in peptide potency and prevent clumping.",
    quickAnswerTitle: "⚡ Technical Quick Answer",
    quickAnswerText: "Collagen powders and peptide supplements are highly hygroscopic, absorbing ambient moisture and oxidizing rapidly if exposed to air. Achieve Pack utilizes multi-layer EVOH co-extruded or metalized PET laminations to deliver ultra-low WVTR (<0.05 g/m²/24h) and OTR (<0.1 cc/m²/day), ensuring 100% free-flowing powder purity and 24-month shelf stability.",
    
    empathyTitle: "Protecting Your Premium Formulation",
    empathyP1: "Formulating a high-quality collagen supplement requires months of R&D and costly active ingredients. But all that value is lost if ambient moisture causes powder clumping, or if oxygen exposure degrades active collagen peptides before reaching the consumer.",
    empathyP2: "Achieve Pack engineers custom high-barrier stand-up pouches and sachets with hermetic press-to-close zippers and anti-static inner liners to guarantee pristine powder flow and maximum shelf stability.",
    
    keyTakeawaysTitle: "Key Takeaways",
    kt1: "Ultra-Low Moisture Transmission (WVTR < 0.05 g/m²/24h): Prevents powder hardening, caking, and moisture degradation.",
    kt2: "Zero-Oxygen EVOH Barrier (OTR < 0.1 cc/m²/day): Protects active peptide bonds and amino acid efficacy from oxidation.",
    kt3: "Anti-Static Inner Liner: Prevents fine collagen powder from sticking to bag walls or interfering with zipper seals.",
    kt4: "Luxury Finishes & Copper Foil Stamping: Premium matte soft-touch textures and metallic accents for high-end retail positioning.",

    ryanNotebookTitle: "🔬 From Ryan Wong's Engineering Notebook",
    ryanNotebookText: "\"When testing packaging for a marine collagen peptide client, we noticed fine powder particles clinging to the zipper tracks during high-speed filling, causing a 2% micro-channel leak rate. We introduced a customized anti-static PE inner seal layer and specified a powder-resistant press-to-close zipper profile. This eliminated powder static cling, ensured 100% hermetic zipper reclosing, and extended the product's guaranteed shelf life from 12 to 24 months.\"",
    ryanSignature: "— Ryan Wong, Co-Founder & Chief Packaging Engineer",

    painPointsTitle: "5 Packaging Pain Points & Engineering Solutions",
    pp1Title: "01 / Powder Clumping & Moisture Hardening",
    pp1Desc: "Hygroscopic collagen absorbing water vapor through low-grade plastic film layers.",
    pp1Sol: "Solution: Utilize high-barrier Aluminum-foil or EVOH co-extruded films maintaining WVTR < 0.05 g/m²/24h.",
    
    pp2Title: "02 / Static Cling in Zipper Tracks",
    pp2Desc: "Fine peptide dust sticking to zipper channels during filling, preventing airtight re-sealing.",
    pp2Sol: "Solution: Formulate anti-static inner PE sealant layers and integrate dust-clearing zipper profiles.",
    
    pp3Title: "03 / Peptide Oxidation & Color Degradation",
    pp3Desc: "Oxygen exposure turning white collagen powder yellowish and altering taste profiles over time.",
    pp3Sol: "Solution: Apply high-density EVOH or Metalized PET barriers to achieve OTR < 0.1 cc/m²/day.",
    
    pp4Title: "04 / Seal Burst During Bulk Shipping",
    pp4Desc: "Heavy 1kg or 2lb powder bags bursting at bottom gusset seams under pallet stacking.",
    pp4Sol: "Solution: Engineer high-tensile NY (Nylon) structural layers with 8mm ultrasonic seal reinforcement.",
    
    pp5Title: "05 / Eco-Friendly Compliance Pressures",
    pp5Desc: "Nutraceutical brands needing sustainable alternatives to unrecyclable foil bags.",
    pp5Sol: "Solution: Offer 100% Recyclable Mono-PE barrier bags with EVOH coatings for store-drop-off recycling.",

    faqTitle: "Frequently Asked Questions",
    faq1Q: "Why is high-barrier packaging essential for collagen powder?",
    faq1A: "Collagen peptides are highly hygroscopic, meaning they readily absorb moisture from air. High-barrier films with low WVTR (<0.05 g/m²/24h) prevent clumping, caking, and microbial growth.",

    faq2Q: "Can I get recyclable high-barrier pouches for collagen powder?",
    faq2A: "Yes! Achieve Pack offers Mono-PE recyclable pouches co-extruded with EVOH, delivering high oxygen and moisture protection while remaining 100% recyclable.",

    faq3Q: "What sizes are available for collagen packaging?",
    faq3A: "We manufacture custom pouches from single-serve 10g sachets up to 1kg (2.2lb) bulk tub-replacement stand-up pouches.",

    faq4Q: "How does the anti-static liner help packaging efficiency?",
    faq4A: "Anti-static liners prevent fine powder from clinging to the bag walls or zipper track, ensuring clean automated filling and reliable airtight reclosing for consumers.",

    faq5Q: "What is the Minimum Order Quantity (MOQ)?",
    faq5A: "Our digital printing workflow allows short runs starting at 1,000 bags for market testing, scaling to 10,000+ units for rotogravure production."
  }
};

export default function CollagenHighBarrier() {
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
        <link rel="canonical" href="https://achievepack.com/topics/collagen-high-barrier" />
        <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
      </Helmet>

      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-neutral-950 via-neutral-900 to-amber-950 text-white py-16 px-6 sm:px-12 rounded-3xl mb-12 shadow-2xl border border-neutral-800">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-500/20 text-amber-400 border border-amber-500/30 text-xs font-semibold uppercase tracking-wider mb-6">
            <Sparkles className="w-4 h-4" />
            <span>Nutraceutical High-Barrier Packaging</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-6 leading-tight">
            {t.heroTitle}
          </h1>
          <p className="text-lg sm:text-xl text-neutral-300 mb-8 leading-relaxed">
            {t.heroSubtitle}
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="https://calendly.com/30-min-free-packaging-consultancy" target="_blank" rel="noopener noreferrer" className="px-6 py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-neutral-950 font-bold transition-all flex items-center gap-2">
              <span>Schedule Powder Barrier Audit</span>
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
      <div className="bg-gradient-to-r from-amber-950 to-neutral-900 text-white p-8 rounded-2xl mb-12 border border-amber-500/30">
        <h3 className="text-lg font-bold text-amber-400 mb-2 flex items-center gap-2">
          <Zap className="w-5 h-5" />
          <span>{t.quickAnswerTitle}</span>
        </h3>
        <p className="text-neutral-200 leading-relaxed">{t.quickAnswerText}</p>
      </div>

      {/* Key Takeaways */}
      <div className="bg-amber-50/60 border border-amber-200 rounded-2xl p-8 mb-12">
        <h3 className="text-xl font-bold text-amber-900 mb-4 flex items-center gap-2">
          <CheckCircle className="w-5 h-5 text-amber-600" />
          <span>{t.keyTakeawaysTitle}</span>
        </h3>
        <ul className="space-y-3 text-neutral-800">
          <li className="flex items-start gap-3"><span className="w-2 h-2 rounded-full bg-amber-500 mt-2 flex-shrink-0" /><span>{t.kt1}</span></li>
          <li className="flex items-start gap-3"><span className="w-2 h-2 rounded-full bg-amber-500 mt-2 flex-shrink-0" /><span>{t.kt2}</span></li>
          <li className="flex items-start gap-3"><span className="w-2 h-2 rounded-full bg-amber-500 mt-2 flex-shrink-0" /><span>{t.kt3}</span></li>
          <li className="flex items-start gap-3"><span className="w-2 h-2 rounded-full bg-amber-500 mt-2 flex-shrink-0" /><span>{t.kt4}</span></li>
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
          src="/imgs/topics/collagen-high-barrier/hero.jpg" 
          alt="Achieve Pack High Barrier Collagen Powder Pouch" 
          className="w-full h-auto rounded-2xl shadow-lg border border-neutral-200"
        />
      </div>

      {/* 5 Pain Points */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-neutral-900 mb-8 text-center">{t.painPointsTitle}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-neutral-900 text-white p-6 rounded-2xl border border-neutral-800">
            <div className="text-xs font-mono text-amber-400 mb-2">{t.pp1Title}</div>
            <p className="text-neutral-400 text-sm mb-4">{t.pp1Desc}</p>
            <div className="bg-amber-950/60 border border-amber-500/30 p-3 rounded-xl text-amber-300 text-xs">{t.pp1Sol}</div>
          </div>
          <div className="bg-neutral-900 text-white p-6 rounded-2xl border border-neutral-800">
            <div className="text-xs font-mono text-amber-400 mb-2">{t.pp2Title}</div>
            <p className="text-neutral-400 text-sm mb-4">{t.pp2Desc}</p>
            <div className="bg-amber-950/60 border border-amber-500/30 p-3 rounded-xl text-amber-300 text-xs">{t.pp2Sol}</div>
          </div>
          <div className="bg-neutral-900 text-white p-6 rounded-2xl border border-neutral-800">
            <div className="text-xs font-mono text-amber-400 mb-2">{t.pp3Title}</div>
            <p className="text-neutral-400 text-sm mb-4">{t.pp3Desc}</p>
            <div className="bg-amber-950/60 border border-amber-500/30 p-3 rounded-xl text-amber-300 text-xs">{t.pp3Sol}</div>
          </div>
        </div>
      </div>

      {/* FAQs */}
      <div className="bg-white rounded-2xl p-8 mb-12 border border-neutral-200">
        <h2 className="text-2xl font-bold text-neutral-900 mb-6 flex items-center gap-2">
          <HelpCircle className="w-6 h-6 text-amber-600" />
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
