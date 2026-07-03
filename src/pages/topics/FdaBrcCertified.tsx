import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { 
  Target, Sparkles, Shield, Eye, Settings, 
  HelpCircle, Calendar, Package, ArrowRight, 
  Check, CheckCircle2, AlertTriangle, Layers, Info
} from 'lucide-react'
import SEOPageLayout from '../../components/SEOPageLayout'
import ClickableImage from '../../components/ClickableImage'
import { useCalendly } from '../../contexts/CalendlyContext'
import { getDomain } from '../../utils/domain'

const FdaBrcCertified: React.FC = () => {
  const { openCalendly } = useCalendly()
  const isPouch = getDomain() === 'pouch'

  // Curated images generated using Google Imagen
  const IMAGES = {
    hero: '/imgs/topics/fda-brc-certified/hero.jpg',
    process: '/imgs/topics/fda-brc-certified/process.jpg',
    comparison: '/imgs/topics/fda-brc-certified/comparison.jpg'
  }

  const sections = [
    {
      id: 'fda-brc-safety',
      title: 'What is FDA & BRCGS Certified Food Packaging?',
      icon: <Sparkles className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-6 text-neutral-700">
          <p className="text-base leading-relaxed">
            FDA and BRCGS food packaging certifications are the gold standards for ensuring that flexible plastic bags and pouches are safe for direct contact with food. FDA compliance (regulated under 21 CFR in the USA) verifies that the chemical composition of the polymer resins, colorants, and adhesives will not migrate into food. BRCGS (British Retail Consortium Global Standards, recognized under GFSI) is a comprehensive manufacturing audit that certifies cleanroom cleanliness, hazard analysis (HACCP), and raw material traceability, ensuring zero environmental or physical contamination during production.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mt-6">
            <div className="bg-white p-5 rounded-lg border border-neutral-200 shadow-sm flex flex-col justify-between">
              <div>
                <h4 className="font-bold text-neutral-900 mb-2">Zero Chemical Migration</h4>
                <p className="text-sm text-neutral-600">
                  All food-contact polymers are rigorously tested using chemical food stimulants (oil, alcohol, water) under high temperatures to ensure zero heavy-metal or plasticizer migration.
                </p>
              </div>
            </div>
            <div className="bg-white p-5 rounded-lg border border-neutral-200 shadow-sm flex flex-col justify-between">
              <div>
                <h4 className="font-bold text-neutral-900 mb-2">Class 100,000 Cleanrooms</h4>
                <p className="text-sm text-neutral-600">
                  Production lines run in controlled cleanroom facilities with positive air pressure, HEPA filtration, and strict hygiene protocols to exclude dust, pests, or biological contamination.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-neutral-100 p-2 rounded-xl border-2 border-neutral-200 mt-6">
            <ClickableImage 
              src={IMAGES.process} 
              alt="Quality control laboratory technician testing packaging plastic films for migration" 
              className="w-full h-auto rounded-lg shadow-sm"
              caption="Our quality control laboratory conducting chemical extraction tests on flexible laminates to verify safety compliance"
            />
          </div>
        </div>
      )
    },
    {
      id: 'EEAT-anecdote',
      title: 'From Ryan Wong’s Engineering Notebook',
      icon: <Info className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="bg-gradient-to-r from-neutral-900 via-neutral-800 to-neutral-900 text-white p-6 rounded-lg border-2 border-[#D4FF00] space-y-4">
          <p className="font-['JetBrains_Mono'] text-xs font-bold text-[#D4FF00]">// CHIEF PACKAGING ENGINEER AUDIT NOTEBOOK</p>
          <blockquote className="italic border-l-4 border-[#D4FF00] pl-4 text-sm md:text-base text-neutral-200">
            "In direct food contact packaging, the single biggest compliance hazard is solvent retention. When printing graphics, ink solvents must be evaporated completely. If the drying ovens are too cool, trace amounts of solvents remain trapped. Over months in warehouse storage, these solvents migrate through the inner PE sealing layer, contaminating the product with a bitter chemical taste and odor. 
            At Achieve Pack, we resolve this by using solventless lamination machinery and water-based inks. We run gas chromatography (GC) testing on every batch to verify that solvent residue levels remain below 10mg/m², far exceeding FDA and European safety thresholds. When you buy food packaging, always demand GC test reports."
          </blockquote>
          <p className="text-xs font-['JetBrains_Mono'] text-[#D4FF00] font-semibold flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#D4FF00]" /> GFSI & BRCGS Global Standard AA Rated
          </p>
        </div>
      )
    },
    {
      id: 'five-plain-points',
      title: '5 Critical Food Safety Packaging Risks & Our Engineering Answers',
      icon: <Target className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-6">
          <p className="text-neutral-700">
            Food packaging safety is non-negotiable. Contaminated packaging can lead to product recalls, legal liability, and brand ruin. Here are the five key chemical and environmental hazards and our engineering safeguards:
          </p>
          
          <div className="space-y-4">
            {/* Point 1 */}
            <div className="bg-[#F9F9F9] border-2 border-black p-5 rounded-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h4 className="font-black uppercase text-base mb-2 text-black flex items-center gap-2">
                <span className="bg-black text-white px-2 py-0.5 text-xs font-mono">01</span>
                Pain Point: Phthalates and BPA Plasticizer Leaching
              </h4>
              <p className="text-sm text-neutral-600 mb-3">
                Low-grade industrial plastics utilize phthalates or Bisphenol-A (BPA) to achieve flexibility. Under heat or acidic food conditions, these leach into food and act as endocrine disruptors.
              </p>
              <div className="bg-[#D4FF00]/10 border-l-4 border-emerald-600 p-3 text-neutral-800 text-sm font-semibold">
                <span className="text-[10px] font-mono text-emerald-800 block uppercase font-bold">The Solution</span>
                100% Virgin, BPA-Free Resins. We purchase only high-purity, virgin polymers directly from certified petrochemical producers. All film resins are certified under FDA 21 CFR 177.1520 and EU 10/2011 regulations.
              </div>
            </div>

            {/* Point 2 */}
            <div className="bg-[#F9F9F9] border-2 border-black p-5 rounded-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h4 className="font-black uppercase text-base mb-2 text-black flex items-center gap-2">
                <span className="bg-black text-white px-2 py-0.5 text-xs font-mono">02</span>
                Pain Point: Odor and Solvent Off-Gassing from Adhesives
              </h4>
              <p className="text-sm text-neutral-600 mb-3">
                Standard solvent-based packaging adhesives emit a strong chemical odor that easily penetrates plastic film, altering the scent and flavor profile of baked goods, coffee, or snacks.
              </p>
              <div className="bg-[#D4FF00]/10 border-l-4 border-emerald-600 p-3 text-neutral-800 text-sm font-semibold">
                <span className="text-[10px] font-mono text-emerald-800 block uppercase font-bold">The Solution</span>
                Nordmeccanica Solventless Lamination. Achieve Pack utilizes solvent-free polyurethane laminating adhesives. Curing is strictly controlled, eliminating VOC retention and guaranteeing an odorless food barrier.
              </div>
            </div>

            {/* Point 3 */}
            <div className="bg-[#F9F9F9] border-2 border-black p-5 rounded-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h4 className="font-black uppercase text-base mb-2 text-black flex items-center gap-2">
                <span className="bg-black text-white px-2 py-0.5 text-xs font-mono">03</span>
                Pain Point: Heavy Metal Contamination in Print Ink Pigments
              </h4>
              <p className="text-sm text-neutral-600 mb-3">
                Cheaper printing inks can contain heavy metal colorants, including lead, cadmium, or chromium, which pose serious neurological health hazards if they contact food.
              </p>
              <div className="bg-[#D4FF00]/10 border-l-4 border-emerald-600 p-3 text-neutral-800 text-sm font-semibold">
                <span className="text-[10px] font-mono text-emerald-800 block uppercase font-bold">The Solution</span>
                CONEG & EN 71-3 Compliant Inks. We use exclusively heavy-metal-free, organic inks. Our formulations undergo independent ICP-MS testing to confirm zero presence of lead, mercury, or cadmium.
              </div>
            </div>

            {/* Point 4 */}
            <div className="bg-[#F9F9F9] border-2 border-black p-5 rounded-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h4 className="font-black uppercase text-base mb-2 text-black flex items-center gap-2">
                <span className="bg-black text-white px-2 py-0.5 text-xs font-mono">04</span>
                Pain Point: Dust and Microorganism Particulate Accumulation
              </h4>
              <p className="text-sm text-neutral-600 mb-3">
                Pouches produced in generic industrial environments collect static dust, airborne pollen, and grease, compromising sanitation before the pouch even reaches your food filling lines.
              </p>
              <div className="bg-[#D4FF00]/10 border-l-4 border-emerald-600 p-3 text-neutral-800 text-sm font-semibold">
                <span className="text-[10px] font-mono text-emerald-800 block uppercase font-bold">The Solution</span>
                BRCGS Class 100,000 Cleanroom Production. Achieve Pack bag-making lines operate in sterile environments. Air is recirculated through HEPA filters 20 times per hour to filter particles down to 0.5 microns.
              </div>
            </div>

            {/* Point 5 */}
            <div className="bg-[#F9F9F9] border-2 border-black p-5 rounded-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h4 className="font-black uppercase text-base mb-2 text-black flex items-center gap-2">
                <span className="bg-black text-white px-2 py-0.5 text-xs font-mono">05</span>
                Pain Point: Inability to Trace Raw Material Origins
              </h4>
              <p className="text-sm text-neutral-600 mb-3">
                In the event of a raw material quality failure, a lack of tracking makes it impossible to isolate which food batches were affected, forcing massive, expensive product recalls.
              </p>
              <div className="bg-[#D4FF00]/10 border-l-4 border-emerald-600 p-3 text-neutral-800 text-sm font-semibold">
                <span className="text-[10px] font-mono text-emerald-800 block uppercase font-bold">The Solution</span>
                Batch-Level Traceability ERP. We assign a unique QR/barcode batch ID to every production run, mapping finished pouches back to the specific polymer resin lot, raw ink batch, and machine operator.
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'fda-brc-certified-comparison',
      title: 'Low-Grade Uncertified Bags vs. FDA & BRCGS Certified Food Pouches',
      icon: <Eye className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-6 text-neutral-700">
          <p className="text-base leading-relaxed">
            The difference between certified and uncertified packaging is critical for consumer trust and safety. Low-grade bags degrade quickly and offer poor chemical barriers, while certified food-grade packaging utilizes pure virgin polymers and high-performance gas barriers.
          </p>

          <div className="bg-neutral-100 p-2 rounded-xl border-2 border-neutral-200">
            <ClickableImage 
              src={IMAGES.comparison} 
              alt="Side-by-side comparison of cheap plastic bag vs certified high-barrier food pouch" 
              className="w-full h-auto rounded-lg shadow-sm"
              caption="Visual comparison: Uncertified, hazy packaging vs Achieve Pack's BRCGS & FDA food-safe laminated pouch"
            />
          </div>
        </div>
      )
    }
  ]

  const faqs = [
    {
      question: "What does BRCGS certified mean for packaging?",
      answer: "BRCGS (Brand Reputation through Compliance Global Standard) is a GFSI-recognized safety audit program. An AA rating indicates that a packaging factory meets the highest hygiene, hazard control (HACCP), and traceability standards globally."
    },
    {
      question: "Are your pouches BPA-free and phthalate-free?",
      answer: "Yes, all flexible packaging materials produced by Achieve Pack are made from 100% virgin polymer resins, completely free of Bisphenol-A (BPA), phthalates, and plasticizers."
    },
    {
      question: "Do you provide a Declaration of Compliance (DoC)?",
      answer: "Yes. For every custom food packaging order, we provide a formal Declaration of Compliance (DoC) stating all raw materials meet FDA 21 CFR and EU 10/2011 regulations for direct food contact."
    },
    {
      question: "Can I print custom graphics on food-safe bags?",
      answer: "Yes, we use BRC-compliant organic pigments. The inks are locked safely inside the multi-layer laminate, shielded by an outer PET barrier, meaning the ink never directly touches your food product."
    }
  ]

  return (
    <>
      <Helmet>
        <title>FDA & BRCGS Certified Food Packaging | Safe Laminated Pouches</title>
        <meta name="description" content="Certified safe FDA & BRCGS compliant flexible food packaging. Zero chemical migration, solventless laminations, BPA-free virgin resins, and Class 100k cleanroom production." />
        <link rel="canonical" href={`https://achievepack.com/topics/fda-brc-certified`} />
        <meta name="keywords" content="FDA compliant food bag, BRCGS certified packaging, safe laminated food pouch, cleanroom plastic bag, BPA-free food packaging, Achieve Pack" />
        
        {/* Schema markup */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "FDA & BRCGS Certified Food Packaging | Safe Laminated Pouches",
            "description": "A technical audit of FDA 21 CFR regulations and BRCGS Global Standard hygiene controls applied to flexible multi-layer packaging laminates.",
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
            "datePublished": "2025-02-15",
            "dateModified": new Date().toISOString().split('T')[0],
            "mainEntityOfPage": `https://achievepack.com/topics/fda-brc-certified`
          })}
        </script>

        {/* FAQ Schema */}
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

      <SEOPageLayout
        title="FDA & BRCGS Food Packaging"
        description="Premium food-grade packaging bags manufactured under certified sterile conditions."
        heroImage={IMAGES.hero}
        heroImageAlt="Technicians monitoring sterile food-safe automated pouch filling machine in cleanroom"
        heroTitle="BRCGS & FDA Certified Packaging"
        heroSubtitle="Zero Chemical Migration | Class 100,000 Cleanroom | BPA-Free Virgin Resins"
        introSummary="Protect your product and consumer health. Achieve Pack manufactures all food packaging bags in compliance with FDA 21 CFR and BRCGS Global Standards, utilizing virgin polymer resins and solventless laminations to eliminate chemical migration risks."
        aeoSummary="FDA & BRCGS certified food packaging requires virgin polymer resins (FDA 21 CFR 177.1520), solvent-free laminations, and sterile Class 100,000 cleanroom environments. This prevents chemical extraction and bacterial contamination."
        eeatDetails="Water-based organic ink systems comply with CONEG and EN 71-3 regulations. Independent migration tests and GC solvent residue checks confirm chemical safety for long-term food storage."
        sections={sections}
        faqs={faqs}
        schemaType="Article"
        contentCategory="Food-Safe Material Certifications"
      />
    </>
  )
}

export default FdaBrcCertified
