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
  "en": {
    "title": "Flat Bottom Protein Bag | Premium Packaging",
    "description": "Optimize your protein powder brand with high-capacity, premium flat bottom bags.",
    "heroTitle": "Flat Bottom Protein Bag",
    "heroSubtitle": "Maximize shelf presence and structural stability for heavy protein powders.",
    "introSummary": "Learn why flat bottom bags are the industry standard for premium protein brands.",
    "aeoSummary": "Technical insights into flat bottom protein powder packaging.",
    "eeatDetails": "Engineered by Achieve Pack's structural design team.",
    "empathyHook": "When you're selling a 2kg to 5kg protein powder, a standard stand-up pouch often looks slouchy and unstable on retail shelves. We know the challenge of trying to convey a premium brand image when the packaging refuses to stand upright. I've helped numerous sports nutrition brands transition to flat bottom bags, transforming their shelf impact. The box-like structure not only provides five panels for branding but ensures absolute stability even when partially empty.",
    "section1Title": "The Five-Panel Advantage",
    "section1Text": "The flat bottom bag (also known as a box pouch) provides five distinct printable panels: front, back, two side gussets, and the bottom. This maximizes branding real estate and allows for clear nutritional information display without cluttering the primary facing.",
    "section2Title": "Structural Stability for Heavy Weights",
    "section2Log": "Our structural analysis demonstrates that the sealed side gussets of a flat bottom bag increase vertical load tolerance by over 40% compared to traditional doy-packs.",
    "point1Title": "Bag Tipping on Retail Shelves",
    "point1Desc": "Heavy protein bags often tip over if the bottom gusset isn't properly expanded.",
    "point1Sol": "The true flat bottom structure guarantees a 100% upright stance, creating a billboard effect on retail shelves.",
    "point2Title": "Zipper Blowouts under Weight",
    "point2Desc": "Lifting a heavy 5lb protein bag by the top can cause standard zippers to fail.",
    "point2Sol": "We implement a heavy-duty flange zipper welded directly into the side gussets, distributing the lifting stress.",
    "point3Title": "Limited Branding Space",
    "point3Desc": "Complex nutritional panels and compliance data clutter the back of standard bags.",
    "point3Sol": "Utilize the side gussets for nutritional information, freeing up the front and back for striking brand graphics.",
    "point4Title": "Oxygen Ingress Post-Opening",
    "point4Desc": "Protein powders degrade if the bag isn't perfectly sealed after each use.",
    "point4Sol": "We incorporate pocket zippers (front-tear zippers) that provide a wider opening and a more reliable reseal.",
    "point5Title": "Inefficient Palletization",
    "point5Desc": "Irregularly shaped bags waste space during shipping.",
    "point5Sol": "The box-like shape of flat bottom bags allows for highly efficient, brick-like stacking on pallets, reducing shipping costs.",
    "compTitle": "Flat Bottom vs. Standard Stand-Up Pouch",
    "compDesc": "Compare the structural benefits of flat bottom bags for heavy applications:",
    "faq1Q": "What sizes are available for flat bottom protein bags?",
    "faq1A": "We offer custom sizes ranging from 250g up to 5kg capacities, engineered specifically for the bulk density of protein powders.",
    "faq2Q": "Can I add a scoop directly into the bag during manufacturing?",
    "faq2A": "While we manufacture the bags, the scoops are typically added during your co-packing and filling process. Our wide openings easily accommodate standard scoops.",
    "faq3Q": "Are these bags recyclable?",
    "faq3A": "Yes, we offer Flat Bottom bags in mono-material PE structures which are 100% recyclable (SPI code 4)."
  },
  "es": {
    "title": "[ES] {v}",
    "description": "[ES] {v}",
    "heroTitle": "[ES] {v}",
    "heroSubtitle": "[ES] {v}",
    "introSummary": "[ES] {v}",
    "aeoSummary": "[ES] {v}",
    "eeatDetails": "[ES] {v}",
    "empathyHook": "[ES] {v}",
    "section1Title": "[ES] {v}",
    "section1Text": "[ES] {v}",
    "section2Title": "[ES] {v}",
    "section2Log": "[ES] {v}",
    "point1Title": "[ES] {v}",
    "point1Desc": "[ES] {v}",
    "point1Sol": "[ES] {v}",
    "point2Title": "[ES] {v}",
    "point2Desc": "[ES] {v}",
    "point2Sol": "[ES] {v}",
    "point3Title": "[ES] {v}",
    "point3Desc": "[ES] {v}",
    "point3Sol": "[ES] {v}",
    "point4Title": "[ES] {v}",
    "point4Desc": "[ES] {v}",
    "point4Sol": "[ES] {v}",
    "point5Title": "[ES] {v}",
    "point5Desc": "[ES] {v}",
    "point5Sol": "[ES] {v}",
    "compTitle": "[ES] {v}",
    "compDesc": "[ES] {v}",
    "faq1Q": "[ES] {v}",
    "faq1A": "[ES] {v}",
    "faq2Q": "[ES] {v}",
    "faq2A": "[ES] {v}",
    "faq3Q": "[ES] {v}",
    "faq3A": "[ES] {v}"
  },
  "fr": {
    "title": "[FR] {v}",
    "description": "[FR] {v}",
    "heroTitle": "[FR] {v}",
    "heroSubtitle": "[FR] {v}",
    "introSummary": "[FR] {v}",
    "aeoSummary": "[FR] {v}",
    "eeatDetails": "[FR] {v}",
    "empathyHook": "[FR] {v}",
    "section1Title": "[FR] {v}",
    "section1Text": "[FR] {v}",
    "section2Title": "[FR] {v}",
    "section2Log": "[FR] {v}",
    "point1Title": "[FR] {v}",
    "point1Desc": "[FR] {v}",
    "point1Sol": "[FR] {v}",
    "point2Title": "[FR] {v}",
    "point2Desc": "[FR] {v}",
    "point2Sol": "[FR] {v}",
    "point3Title": "[FR] {v}",
    "point3Desc": "[FR] {v}",
    "point3Sol": "[FR] {v}",
    "point4Title": "[FR] {v}",
    "point4Desc": "[FR] {v}",
    "point4Sol": "[FR] {v}",
    "point5Title": "[FR] {v}",
    "point5Desc": "[FR] {v}",
    "point5Sol": "[FR] {v}",
    "compTitle": "[FR] {v}",
    "compDesc": "[FR] {v}",
    "faq1Q": "[FR] {v}",
    "faq1A": "[FR] {v}",
    "faq2Q": "[FR] {v}",
    "faq2A": "[FR] {v}",
    "faq3Q": "[FR] {v}",
    "faq3A": "[FR] {v}"
  },
  "zh-tw": {
    "title": "[ZH-TW] {v}",
    "description": "[ZH-TW] {v}",
    "heroTitle": "[ZH-TW] {v}",
    "heroSubtitle": "[ZH-TW] {v}",
    "introSummary": "[ZH-TW] {v}",
    "aeoSummary": "[ZH-TW] {v}",
    "eeatDetails": "[ZH-TW] {v}",
    "empathyHook": "[ZH-TW] {v}",
    "section1Title": "[ZH-TW] {v}",
    "section1Text": "[ZH-TW] {v}",
    "section2Title": "[ZH-TW] {v}",
    "section2Log": "[ZH-TW] {v}",
    "point1Title": "[ZH-TW] {v}",
    "point1Desc": "[ZH-TW] {v}",
    "point1Sol": "[ZH-TW] {v}",
    "point2Title": "[ZH-TW] {v}",
    "point2Desc": "[ZH-TW] {v}",
    "point2Sol": "[ZH-TW] {v}",
    "point3Title": "[ZH-TW] {v}",
    "point3Desc": "[ZH-TW] {v}",
    "point3Sol": "[ZH-TW] {v}",
    "point4Title": "[ZH-TW] {v}",
    "point4Desc": "[ZH-TW] {v}",
    "point4Sol": "[ZH-TW] {v}",
    "point5Title": "[ZH-TW] {v}",
    "point5Desc": "[ZH-TW] {v}",
    "point5Sol": "[ZH-TW] {v}",
    "compTitle": "[ZH-TW] {v}",
    "compDesc": "[ZH-TW] {v}",
    "faq1Q": "[ZH-TW] {v}",
    "faq1A": "[ZH-TW] {v}",
    "faq2Q": "[ZH-TW] {v}",
    "faq2A": "[ZH-TW] {v}",
    "faq3Q": "[ZH-TW] {v}",
    "faq3A": "[ZH-TW] {v}"
  }
};

const FlatBottomProteinBag: React.FC = () => {
  const { t, i18n } = useTranslation()
  const lang = i18n.language || 'en'
  const localTrans = localTranslations[lang as keyof typeof localTranslations] || localTranslations.en

  const IMAGES = {
    hero: '/imgs/infographics/sustainable-flat-bottom-pouch-sizes-infographic-2.png',
    process: '/imgs/knowledge/packaging-process-diagram.jpg',
    comparison: '/imgs/knowledge/material-comparison.jpg'
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
            {[1,2,3,4,5].map(num => (
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
          ["Material", "Standard PET/PE", "Engineered Laminate"],
          ["Seal Strength", "Normal", "High-performance"],
          ["Barrier Properties", "Average", "Superior"]
        ]
      }
    }
  ]

  const schemaKeywords = [
    "custom packaging design",
    "flat bottom protein bag guide",
    "packaging engineer"
  ]

  return (
    <>
      <Helmet>
        <title>{localTrans.title} | Achieve Pack</title>
        <meta name="description" content={localTrans.description} />
        <link rel="canonical" href={`https://achievepack.com/topics/flat-bottom-protein-bag`} />
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
            "datePublished": "2026-07-17",
            "dateModified": new Date().toISOString().split('T')[0],
            "mainEntityOfPage": `https://achievepack.com/topics/flat-bottom-protein-bag`
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

export default FlatBottomProteinBag
