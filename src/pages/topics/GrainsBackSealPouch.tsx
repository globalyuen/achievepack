import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ShieldCheck, Zap, ArrowRight, CheckCircle, Package, HelpCircle, Layers } from 'lucide-react';
import SEOPageLayout from '../../components/SEOPageLayout';
import ClickableImage from '../../components/ClickableImage';

const localTranslations: Record<string, any> = {
  en: {
    metaTitle: "Back-Seal Grain & Rice Pouches | VFFS Packaging | Achieve Pack",
    metaDesc: "Pillow-pack central back-seal bags for organic rice, quinoa, grains & pulses. High-speed VFFS automated packaging with puncture-resistant laminates.",
    heroTitle: "Grains & Bulk Rice Back-Seal Pouches",
    heroSubtitle: "High-capacity back-seal (central fin seal) pillow pouches engineered for VFFS automated packaging lines. Ultra-durable laminations handle 1kg to 10kg bulk grain drops without seam burst.",
    quickAnswerTitle: "⚡ Technical Quick Answer",
    quickAnswerText: "Back-seal pouches (central fin or lap seal bags) are formed from a single roll of barrier film on Vertical Form Fill Seal (VFFS) machinery. By forming the seam along the back center of the package, the side edges remain smooth and unsealed, providing maximum volume capacity, structural elasticity, and cost efficiency for heavy grains, rice, and pulses.",
    
    empathyTitle: "Preventing Pallet Seam Failures in Bulk Grain Logistics",
    empathyP1: "Packaging dense bulk products like rice, quinoa, and lentils presents a major engineering challenge: sharp grain edges can puncture film walls, and heavy 5lb to 10lb drops during high-speed vertical filling put extreme hydraulic shock on bottom and back seams.",
    empathyP2: "Achieve Pack's Grains Back-Seal Pouches are co-extruded with high-impact NY/PE structural layers and wide thermal sealing windows. Our back-seal designs withstand over 50kg of static pallet compression without micro-fracturing or seam splitting.",
    
    keyTakeawaysTitle: "Key Takeaways",
    kt1: "Maximum Volume Capacity: Central back seam allows full side expansion for dense grain bulk density.",
    kt2: "VFFS High-Speed Compatibility: Runs at up to 120 bags/minute on standard vertical form-fill-seal equipment.",
    kt3: "Puncture & Tear Resistant: Multi-layer Nylon (NY) co-extrusion resists sharp rice husk and grain punctures.",
    kt4: "Optional Clear Display Windows: Crystal clear anti-fog windows show natural grain color and grade quality.",

    ryanNotebookTitle: "🔬 From Ryan Wong's Engineering Notebook",
    ryanNotebookText: "\"A commercial rice brand came to us after suffering a 4% bag burst rate during container shipping across sea routes. The cause was weak lap seals giving way under thermal expansion and pallet stacking weight. We re-engineered their VFFS back-seal configuration to a 12mm folded fin seal with a high-tack linear low-density PE (LLDPE) inner sealant layer. This increased seam peel strength by 350% and reduced sea freight transit damage to zero.\"",
    ryanSignature: "— Ryan Wong, Co-Founder & Chief Packaging Engineer",

    painPointsTitle: "5 Packaging Pain Points & Engineering Solutions",
    pp1Title: "01 / Seam Splitting Under Heavy Pallet Drop",
    pp1Desc: "Heavy 2kg - 5kg grain bags bursting along back seams when dropped or stacked on pallets.",
    pp1Sol: "Solution: Engineer high-tensile 110-micron NY/LLDPE laminates with 12mm reinforced back fin seals.",
    
    pp2Title: "02 / Sharp Grain Husk Punctures",
    pp2Desc: "Rough paddy rice or sharp quinoa hulls piercing single-layer plastic bags in transit.",
    pp2Sol: "Solution: Co-extrude biaxially oriented Nylon (BON) barrier films providing 3x higher puncture resistance.",
    
    pp3Title: "03 / Insect Infestation & Moisture Spoilage",
    pp3Desc: "Ambient moisture penetrating thin bags, leading to grain mold or pest contamination.",
    pp3Sol: "Solution: Incorporate EVOH gas-barrier layers and hermetic continuous heat welding to block moisture.",
    
    pp4Title: "04 / Poor Shelf Display Stability",
    pp4Desc: "Back-seal pillow bags falling over or slumping on retail shelves.",
    pp4Sol: "Solution: Offer quad-seal or block-bottom back-seal configurations for rigid vertical shelf display.",
    
    pp5Title: "05 / Unrecyclable Multilayer Waste",
    pp5Desc: "Traditional PET/AL/PE grain sacks being landfilled after single use.",
    pp5Sol: "Solution: Supply 100% Recyclable Mono-PE back-seal film rolls compatible with store drop-off programs.",

    faqTitle: "Frequently Asked Questions",
    faq1Q: "What is the difference between a fin seal and a lap seal?",
    faq1A: "A fin seal brings the inner surfaces of the film together, welding them in a T-shape for maximum strength. A lap seal overlaps the inner surface with the outer surface, using less film but requiring special outer sealant coatings.",

    faq2Q: "Are back-seal grain pouches compatible with automated VFFS machines?",
    faq2A: "Yes! Our rollstock film and pre-made back-seal pouches are specifically engineered for seamless feeding on automated Vertical Form Fill Seal (VFFS) machinery.",

    faq3Q: "What is the maximum weight capacity for back-seal grain bags?",
    faq3A: "We engineer back-seal pouches for capacities ranging from 250g sample packs up to 10kg heavy-duty bulk agriculture bags.",

    faq4Q: "Can I add a clear window to a kraft paper grain pouch?",
    faq4A: "Absolutely! We can integrate custom die-cut clear windows on kraft paper back-seal pouches so consumers can inspect grain quality.",

    faq5Q: "What is the Minimum Order Quantity (MOQ)?",
    faq5A: "Rollstock film for automated VFFS lines starts at 200kg per custom design, while pre-made back-seal pouches start at 1,000 units with digital printing."
  }
};

export default function GrainsBackSealPouch() {
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
        <link rel="canonical" href="https://achievepack.com/topics/grains-back-seal-pouch" />
        <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
      </Helmet>

      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-neutral-950 via-neutral-900 to-amber-950 text-white py-16 px-6 sm:px-12 rounded-3xl mb-12 shadow-2xl border border-neutral-800">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-500/20 text-amber-400 border border-amber-500/30 text-xs font-semibold uppercase tracking-wider mb-6">
            <Package className="w-4 h-4" />
            <span>VFFS Bulk Grain & Rice Packaging</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-6 leading-tight">
            {t.heroTitle}
          </h1>
          <p className="text-lg sm:text-xl text-neutral-300 mb-8 leading-relaxed">
            {t.heroSubtitle}
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="https://calendly.com/30-min-free-packaging-consultancy" target="_blank" rel="noopener noreferrer" className="px-6 py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-neutral-950 font-bold transition-all flex items-center gap-2">
              <span>Book Bulk Grain Packaging Audit</span>
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
          src="/imgs/topics/grains-back-seal-pouch/hero.jpg" 
          alt="Achieve Pack Grains Back Seal Pouch" 
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
