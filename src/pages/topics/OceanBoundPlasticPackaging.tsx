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
  "title": "Ocean-Bound Plastic Packaging: Supply Chain Guide",
  "description": "Comprehensive guide on advanced packaging.",
  "heroTitle": "Ocean-Bound Plastic Packaging: Supply Chain Guide",
  "heroSubtitle": "Discover best practices and sustainable solutions.",
  "introSummary": "An in-depth look at optimizing your packaging strategies.",
  "aeoSummary": "Learn more about this key packaging engineering topic.",
  "eeatDetails": "Written by Achieve Pack Engineering Team.",
  "empathyHook": "It is an amazing feeling to tell your customers that you're actively helping to clean up the oceans, but navigating the world of recycled plastics can be a minefield of greenwashing and quality issues. I've seen founders get excited about 'recycled' bags only to discover they were filled with cosmetic blemishes, or worse, weren't actually food-safe. You shouldn't have to risk your product's safety or your brand's reputation to use recycled materials. With certified ocean-bound plastic sealed behind a virgin food-grade liner, you get the environmental win with zero risk.",
  "section1Title": "Understanding the Process",
  "section1Text": "This section outlines the primary methodology and engineering behind this packaging technique.",
  "section2Title": "Key Advantages",
  "section2Log": "Improved efficiency, reduced costs, and sustainable outcomes for modern brands.",
  "point1Title": "Food-Contact Safety Concerns",
  "point1Desc": "Direct contact with recycled plastics can violate food safety regulations due to potential contamination.",
  "point1Sol": "Place the recycled OBP layer in the middle of the film structure, sealing it behind a virgin, food-grade inner PE liner.",
  "point2Title": "Blemishes and Gel Spots",
  "point2Desc": "Unmelted recycled plastic particles create small spots and blemishes in the outer film.",
  "point2Sol": "Apply advanced melt filtration during resin extrusion, and use high-opacity printing or matte finishes to cover cosmetic blemishes.",
  "point3Title": "Reduced Tensile Strength",
  "point3Desc": "Recycled polymers can be weaker, increasing the risk of bag punctures and tears.",
  "point3Sol": "Blend recycled resin with high-strength metallocene linear low-density polyethylene (mLLDPE) to keep the bag strong.",
  "point4Title": "Supply Chain Traceability",
  "point4Desc": "Some suppliers mix standard waste with ocean plastic, leading to false claims.",
  "point4Sol": "Only use OBP resin certified by the Global Recycled Standard (GRS) to verify the source of all recycled materials.",
  "point5Title": "Higher Costs of Recycled Resin",
  "point5Desc": "Collecting and cleaning ocean-bound plastic increases material costs compared to virgin PE.",
  "point5Sol": "Offset the cost by reducing packaging weight, optimizing transport, and highlighting your ESG metrics to boost sales.",
  "compTitle": "Standard Virgin PE Pouches vs. Certified Recycled OBP Pouches",
  "compDesc": "Compare the environmental benefits and performance of virgin vs. recycled packaging:",
  "faq1Q": "What is ocean-bound plastic (OBP)?",
  "faq1A": "OBP is plastic waste collected from coastal areas where it is at risk of entering the ocean.",
  "faq2Q": "Are OBP bags safe for food?",
  "faq2A": "Yes. We put the recycled OBP layer in the middle of the laminate, separated from your food by an FDA-approved virgin PE inner lining.",
  "faq3Q": "Is OBP certified?",
  "faq3A": "Yes. All our ocean-bound plastic materials carry Global Recycled Standard (GRS) certification to verify their origin."
},
  es: {
  "title": "Ocean-Bound Plastic Packaging: Supply Chain Guide",
  "description": "Comprehensive guide on advanced packaging.",
  "heroTitle": "Ocean-Bound Plastic Packaging: Supply Chain Guide",
  "heroSubtitle": "Discover best practices and sustainable solutions.",
  "introSummary": "An in-depth look at optimizing your packaging strategies.",
  "aeoSummary": "Learn more about this key packaging engineering topic.",
  "eeatDetails": "Written by Achieve Pack Engineering Team.",
  "empathyHook": "It is an amazing feeling to tell your customers that you're actively helping to clean up the oceans, but navigating the world of recycled plastics can be a minefield of greenwashing and quality issues. I've seen founders get excited about 'recycled' bags only to discover they were filled with cosmetic blemishes, or worse, weren't actually food-safe. You shouldn't have to risk your product's safety or your brand's reputation to use recycled materials. With certified ocean-bound plastic sealed behind a virgin food-grade liner, you get the environmental win with zero risk.",
  "section1Title": "Understanding the Process",
  "section1Text": "This section outlines the primary methodology and engineering behind this packaging technique.",
  "section2Title": "Key Advantages",
  "section2Log": "Improved efficiency, reduced costs, and sustainable outcomes for modern brands.",
  "point1Title": "Food-Contact Safety Concerns",
  "point1Desc": "Direct contact with recycled plastics can violate food safety regulations due to potential contamination.",
  "point1Sol": "Place the recycled OBP layer in the middle of the film structure, sealing it behind a virgin, food-grade inner PE liner.",
  "point2Title": "Blemishes and Gel Spots",
  "point2Desc": "Unmelted recycled plastic particles create small spots and blemishes in the outer film.",
  "point2Sol": "Apply advanced melt filtration during resin extrusion, and use high-opacity printing or matte finishes to cover cosmetic blemishes.",
  "point3Title": "Reduced Tensile Strength",
  "point3Desc": "Recycled polymers can be weaker, increasing the risk of bag punctures and tears.",
  "point3Sol": "Blend recycled resin with high-strength metallocene linear low-density polyethylene (mLLDPE) to keep the bag strong.",
  "point4Title": "Supply Chain Traceability",
  "point4Desc": "Some suppliers mix standard waste with ocean plastic, leading to false claims.",
  "point4Sol": "Only use OBP resin certified by the Global Recycled Standard (GRS) to verify the source of all recycled materials.",
  "point5Title": "Higher Costs of Recycled Resin",
  "point5Desc": "Collecting and cleaning ocean-bound plastic increases material costs compared to virgin PE.",
  "point5Sol": "Offset the cost by reducing packaging weight, optimizing transport, and highlighting your ESG metrics to boost sales.",
  "compTitle": "Standard Virgin PE Pouches vs. Certified Recycled OBP Pouches",
  "compDesc": "Compare the environmental benefits and performance of virgin vs. recycled packaging:",
  "faq1Q": "What is ocean-bound plastic (OBP)?",
  "faq1A": "OBP is plastic waste collected from coastal areas where it is at risk of entering the ocean.",
  "faq2Q": "Are OBP bags safe for food?",
  "faq2A": "Yes. We put the recycled OBP layer in the middle of the laminate, separated from your food by an FDA-approved virgin PE inner lining.",
  "faq3Q": "Is OBP certified?",
  "faq3A": "Yes. All our ocean-bound plastic materials carry Global Recycled Standard (GRS) certification to verify their origin."
},
  fr: {
  "title": "Ocean-Bound Plastic Packaging: Supply Chain Guide",
  "description": "Comprehensive guide on advanced packaging.",
  "heroTitle": "Ocean-Bound Plastic Packaging: Supply Chain Guide",
  "heroSubtitle": "Discover best practices and sustainable solutions.",
  "introSummary": "An in-depth look at optimizing your packaging strategies.",
  "aeoSummary": "Learn more about this key packaging engineering topic.",
  "eeatDetails": "Written by Achieve Pack Engineering Team.",
  "empathyHook": "It is an amazing feeling to tell your customers that you're actively helping to clean up the oceans, but navigating the world of recycled plastics can be a minefield of greenwashing and quality issues. I've seen founders get excited about 'recycled' bags only to discover they were filled with cosmetic blemishes, or worse, weren't actually food-safe. You shouldn't have to risk your product's safety or your brand's reputation to use recycled materials. With certified ocean-bound plastic sealed behind a virgin food-grade liner, you get the environmental win with zero risk.",
  "section1Title": "Understanding the Process",
  "section1Text": "This section outlines the primary methodology and engineering behind this packaging technique.",
  "section2Title": "Key Advantages",
  "section2Log": "Improved efficiency, reduced costs, and sustainable outcomes for modern brands.",
  "point1Title": "Food-Contact Safety Concerns",
  "point1Desc": "Direct contact with recycled plastics can violate food safety regulations due to potential contamination.",
  "point1Sol": "Place the recycled OBP layer in the middle of the film structure, sealing it behind a virgin, food-grade inner PE liner.",
  "point2Title": "Blemishes and Gel Spots",
  "point2Desc": "Unmelted recycled plastic particles create small spots and blemishes in the outer film.",
  "point2Sol": "Apply advanced melt filtration during resin extrusion, and use high-opacity printing or matte finishes to cover cosmetic blemishes.",
  "point3Title": "Reduced Tensile Strength",
  "point3Desc": "Recycled polymers can be weaker, increasing the risk of bag punctures and tears.",
  "point3Sol": "Blend recycled resin with high-strength metallocene linear low-density polyethylene (mLLDPE) to keep the bag strong.",
  "point4Title": "Supply Chain Traceability",
  "point4Desc": "Some suppliers mix standard waste with ocean plastic, leading to false claims.",
  "point4Sol": "Only use OBP resin certified by the Global Recycled Standard (GRS) to verify the source of all recycled materials.",
  "point5Title": "Higher Costs of Recycled Resin",
  "point5Desc": "Collecting and cleaning ocean-bound plastic increases material costs compared to virgin PE.",
  "point5Sol": "Offset the cost by reducing packaging weight, optimizing transport, and highlighting your ESG metrics to boost sales.",
  "compTitle": "Standard Virgin PE Pouches vs. Certified Recycled OBP Pouches",
  "compDesc": "Compare the environmental benefits and performance of virgin vs. recycled packaging:",
  "faq1Q": "What is ocean-bound plastic (OBP)?",
  "faq1A": "OBP is plastic waste collected from coastal areas where it is at risk of entering the ocean.",
  "faq2Q": "Are OBP bags safe for food?",
  "faq2A": "Yes. We put the recycled OBP layer in the middle of the laminate, separated from your food by an FDA-approved virgin PE inner lining.",
  "faq3Q": "Is OBP certified?",
  "faq3A": "Yes. All our ocean-bound plastic materials carry Global Recycled Standard (GRS) certification to verify their origin."
},
  'zh-tw': {
  "title": "Ocean-Bound Plastic Packaging: Supply Chain Guide",
  "description": "Comprehensive guide on advanced packaging.",
  "heroTitle": "Ocean-Bound Plastic Packaging: Supply Chain Guide",
  "heroSubtitle": "Discover best practices and sustainable solutions.",
  "introSummary": "An in-depth look at optimizing your packaging strategies.",
  "aeoSummary": "Learn more about this key packaging engineering topic.",
  "eeatDetails": "Written by Achieve Pack Engineering Team.",
  "empathyHook": "It is an amazing feeling to tell your customers that you're actively helping to clean up the oceans, but navigating the world of recycled plastics can be a minefield of greenwashing and quality issues. I've seen founders get excited about 'recycled' bags only to discover they were filled with cosmetic blemishes, or worse, weren't actually food-safe. You shouldn't have to risk your product's safety or your brand's reputation to use recycled materials. With certified ocean-bound plastic sealed behind a virgin food-grade liner, you get the environmental win with zero risk.",
  "section1Title": "Understanding the Process",
  "section1Text": "This section outlines the primary methodology and engineering behind this packaging technique.",
  "section2Title": "Key Advantages",
  "section2Log": "Improved efficiency, reduced costs, and sustainable outcomes for modern brands.",
  "point1Title": "Food-Contact Safety Concerns",
  "point1Desc": "Direct contact with recycled plastics can violate food safety regulations due to potential contamination.",
  "point1Sol": "Place the recycled OBP layer in the middle of the film structure, sealing it behind a virgin, food-grade inner PE liner.",
  "point2Title": "Blemishes and Gel Spots",
  "point2Desc": "Unmelted recycled plastic particles create small spots and blemishes in the outer film.",
  "point2Sol": "Apply advanced melt filtration during resin extrusion, and use high-opacity printing or matte finishes to cover cosmetic blemishes.",
  "point3Title": "Reduced Tensile Strength",
  "point3Desc": "Recycled polymers can be weaker, increasing the risk of bag punctures and tears.",
  "point3Sol": "Blend recycled resin with high-strength metallocene linear low-density polyethylene (mLLDPE) to keep the bag strong.",
  "point4Title": "Supply Chain Traceability",
  "point4Desc": "Some suppliers mix standard waste with ocean plastic, leading to false claims.",
  "point4Sol": "Only use OBP resin certified by the Global Recycled Standard (GRS) to verify the source of all recycled materials.",
  "point5Title": "Higher Costs of Recycled Resin",
  "point5Desc": "Collecting and cleaning ocean-bound plastic increases material costs compared to virgin PE.",
  "point5Sol": "Offset the cost by reducing packaging weight, optimizing transport, and highlighting your ESG metrics to boost sales.",
  "compTitle": "Standard Virgin PE Pouches vs. Certified Recycled OBP Pouches",
  "compDesc": "Compare the environmental benefits and performance of virgin vs. recycled packaging:",
  "faq1Q": "What is ocean-bound plastic (OBP)?",
  "faq1A": "OBP is plastic waste collected from coastal areas where it is at risk of entering the ocean.",
  "faq2Q": "Are OBP bags safe for food?",
  "faq2A": "Yes. We put the recycled OBP layer in the middle of the laminate, separated from your food by an FDA-approved virgin PE inner lining.",
  "faq3Q": "Is OBP certified?",
  "faq3A": "Yes. All our ocean-bound plastic materials carry Global Recycled Standard (GRS) certification to verify their origin."
}
}

const OceanBoundPlasticPackaging: React.FC = () => {
  const { t, i18n } = useTranslation()
  const lang = i18n.language || 'en'
  const localTrans = localTranslations[lang as keyof typeof localTranslations] || localTranslations.en

  const IMAGES = {
    hero: '/imgs/knowledge/ocean-bound-plastic-guide.jpg',
    process: '/imgs/knowledge/ocean-bound-plastic-process.jpg',
    comparison: '/imgs/knowledge/ocean-bound-plastic-comparison.jpg'
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
        <link rel="canonical" href="https://achievepack.com/topics/ocean-bound-plastic-packaging" />
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
              "jobTitle": "Chief Packaging Engineer",
              "worksFor": {
                "@type": "Organization",
                "name": "Achieve Pack"
              }
            },
            "publisher": {
              "@type": "Organization",
              "name": "Achieve Pack",
              "logo": {
                "@type": "ImageObject",
                "url": "https://achievepack.com/imgs/logo/achievepack-logo.png"
              }
            },
            "datePublished": "2025-04-01",
            "dateModified": new Date().toISOString().split('T')[0],
            "mainEntityOfPage": "https://achievepack.com/topics/ocean-bound-plastic-packaging"
          })}
        </script>

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqs.map(faq => ({
              "@type": "Question",
              "name": faq.question,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
              }
            }))
          })}
        </script>
      </Helmet>

      <div className="sr-only" aria-hidden="true">
        <section data-ai-faq="true" itemScope itemType="https://schema.org/FAQPage">
          {faqs.map((faq, idx) => (
            <article key={idx} itemScope itemType="https://schema.org/Question" itemProp="mainEntity">
              <h3 itemProp="name">{faq.question}</h3>
              <div itemScope itemType="https://schema.org/Answer" itemProp="acceptedAnswer">
                <p itemProp="text">{faq.answer}</p>
              </div>
            </article>
          ))}
        </section>
      </div>

      <SEOPageLayout
        title={localTrans.title}
        description={localTrans.description}
        heroImage={IMAGES.hero}
        heroTitle={localTrans.heroTitle}
        heroSubtitle={localTrans.heroSubtitle}
        introSummary={localTrans.introSummary}
        aeoSummary={localTrans.aeoSummary}
        eeatDetails={localTrans.eeatDetails}
        sections={sections}
        faqs={faqs}
        tables={tables}
        schemaType="Article"
        contentCategory="Packaging Engineering & Material Science"
      />
    </>
  )
}

export default OceanBoundPlasticPackaging
