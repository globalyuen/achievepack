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

const IsoSustainable: React.FC = () => {
  const { openCalendly } = useCalendly()
  const isPouch = getDomain() === 'pouch'

  // Curated images generated using Google Imagen
  const IMAGES = {
    hero: '/imgs/topics/iso-sustainable/hero.jpg',
    process: '/imgs/topics/iso-sustainable/process.jpg',
    comparison: '/imgs/topics/iso-sustainable/comparison.jpg'
  }

  const sections = [
    {
      id: 'iso-standards',
      title: 'What are ISO Sustainable Packaging Standards?',
      icon: <Sparkles className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-6 text-neutral-700">
          <p className="text-base leading-relaxed">
            The ISO 18600 series (specifically ISO 18601 to 18606) defines the international standards for packaging and the environment. These guidelines cover material reduction (source reduction), reuse, material recycling, energy recovery, and organic recovery (composting), providing brands with a clear path to global regulatory compliance.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mt-6">
            <div className="bg-white p-5 rounded-lg border border-neutral-200 shadow-sm flex flex-col justify-between">
              <div>
                <h4 className="font-bold text-neutral-900 mb-2">Material Optimization (ISO 18602)</h4>
                <p className="text-sm text-neutral-600">
                  This standard focuses on source reduction—using the absolute minimum weight and volume of packaging material needed to maintain product safety, hygiene, and consumer acceptance.
                </p>
              </div>
            </div>
            <div className="bg-white p-5 rounded-lg border border-neutral-200 shadow-sm flex flex-col justify-between">
              <div>
                <h4 className="font-bold text-neutral-900 mb-2">Recyclability & Traceability (ISO 18604)</h4>
                <p className="text-sm text-neutral-600">
                  ISO 18604 sets the criteria for material recycling. It requires that packaging can be processed in existing recycling streams and that raw materials are fully traceable.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-neutral-100 p-2 rounded-xl border-2 border-neutral-200 mt-6">
            <ClickableImage 
              src={IMAGES.process} 
              alt="Quality control engineer testing flexible packaging film for tensile strength in a laboratory" 
              className="w-full h-auto rounded-lg shadow-sm"
              caption="Our testing lab validating flexible film performance to ensure compliance with ISO packaging standards"
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
            "Making environmental claims without data is a recipe for legal and regulatory action. The ISO 18600 series provides a standardized scientific framework for packaging design. In my 14 years of engineering, I have seen brands fail audits because they claimed a pouch was 'sustainable' based on gut feeling. 
            At Achieve Pack, we design our pouches to meet the strict requirements of ISO 18602 (source reduction) and ISO 18604 (recyclability). We perform full life-cycle assessments (LCAs) to verify carbon footprint reductions and use mono-material polymer webs. This provides brands with transparent, auditable data that easily passes strict EU and US environmental disclosure requirements."
          </blockquote>
          <p className="text-xs font-['JetBrains_Mono'] text-[#D4FF00] font-semibold flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#D4FF00]" /> ISO 9001, ISO 14001 & ISO 18600 Series Compliant Supply Chain
          </p>
        </div>
      )
    },
    {
      id: 'five-pain-points',
      title: '5 Sustainable Packaging Pain Points & ISO Solutions',
      icon: <Target className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-6">
          <p className="text-neutral-700">
            Meeting global environmental standards requires resolving challenges related to overpackaging, recyclability, and chemical safety:
          </p>
          
          <div className="space-y-4">
            {/* Point 1 */}
            <div className="bg-[#F9F9F9] border-2 border-black p-5 rounded-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h4 className="font-black uppercase text-base mb-2 text-black flex items-center gap-2">
                <span className="bg-black text-white px-2 py-0.5 text-xs font-mono">01</span>
                Pain Point: Legal Risks from Unverified Green Claims
              </h4>
              <p className="text-sm text-neutral-600 mb-3">
                Brands making vague environmental claims (like 'eco-friendly' or 'biodegradable') face severe fines and lawsuits under greenwashing laws if they lack third-party proof.
              </p>
              <div className="bg-[#D4FF00]/10 border-l-4 border-emerald-600 p-3 text-neutral-800 text-sm font-semibold">
                <span className="text-[10px] font-mono text-emerald-800 block uppercase font-bold">The Solution</span>
                ISO 14021 environmental labels. We provide complete life-cycle assessments and raw material certifications, giving brands the scientific data needed to support their packaging claims.
              </div>
            </div>

            {/* Point 2 */}
            <div className="bg-[#F9F9F9] border-2 border-black p-5 rounded-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h4 className="font-black uppercase text-base mb-2 text-black flex items-center gap-2">
                <span className="bg-black text-white px-2 py-0.5 text-xs font-mono">02</span>
                Pain Point: Overpackaging and Material Waste (ISO 18602 Failure)
              </h4>
              <p className="text-sm text-neutral-600 mb-3">
                Excessive packaging thickness and multi-layered configurations increase waste, failing the source-reduction requirements of ISO 18602.
              </p>
              <div className="bg-[#D4FF00]/10 border-l-4 border-emerald-600 p-3 text-neutral-800 text-sm font-semibold">
                <span className="text-[10px] font-mono text-emerald-800 block uppercase font-bold">The Solution</span>
                Source-reduction film engineering. We co-extrude high-strength polymers to reduce film thickness by 20% to 30% while maintaining the necessary barrier and puncture resistance.
              </div>
            </div>

            {/* Point 3 */}
            <div className="bg-[#F9F9F9] border-2 border-black p-5 rounded-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h4 className="font-black uppercase text-base mb-2 text-black flex items-center gap-2">
                <span className="bg-black text-white px-2 py-0.5 text-xs font-mono">03</span>
                Pain Point: Non-Recyclable Multi-Material Laminates (ISO 18604 Failure)
              </h4>
              <p className="text-sm text-neutral-600 mb-3">
                Traditional pouches laminate different plastics together (like PET and PE), which cannot be separated and are rejected by recycling facilities.
              </p>
              <div className="bg-[#D4FF00]/10 border-l-4 border-emerald-600 p-3 text-neutral-800 text-sm font-semibold">
                <span className="text-[10px] font-mono text-emerald-800 block uppercase font-bold">The Solution</span>
                Mono-material PE and PP packaging. We construct our pouches using single-polymer structures that are fully recyclable in standard plastic streams, meeting ISO 18604 recyclability standards.
              </div>
            </div>

            {/* Point 4 */}
            <div className="bg-[#F9F9F9] border-2 border-black p-5 rounded-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h4 className="font-black uppercase text-base mb-2 text-black flex items-center gap-2">
                <span className="bg-black text-white px-2 py-0.5 text-xs font-mono">04</span>
                Pain Point: Heavy Metal Contamination and Toxic Residues
              </h4>
              <p className="text-sm text-neutral-600 mb-3">
                Cheap industrial inks, colorants, and lamination glues often contain trace heavy metals (like lead or mercury) that pollute soil and water when disposed of.
              </p>
              <div className="bg-[#D4FF00]/10 border-l-4 border-emerald-600 p-3 text-neutral-800 text-sm font-semibold">
                <span className="text-[10px] font-mono text-emerald-800 block uppercase font-bold">The Solution</span>
                Strict EN 13428 and ISO chemical screening. We screen all raw materials to ensure heavy metal content remains well below 100ppm, using solvent-free adhesives and low-VOC inks.
              </div>
            </div>

            {/* Point 5 */}
            <div className="bg-[#F9F9F9] border-2 border-black p-5 rounded-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h4 className="font-black uppercase text-base mb-2 text-black flex items-center gap-2">
                <span className="bg-black text-white px-2 py-0.5 text-xs font-mono">05</span>
                Pain Point: Navigating Conflicting Global Regulations
              </h4>
              <p className="text-sm text-neutral-600 mb-3">
                Different markets (such as the EU and US) have different packaging laws, making it difficult for exporting brands to design a single compliant bag.
              </p>
              <div className="bg-[#D4FF00]/10 border-l-4 border-emerald-600 p-3 text-neutral-800 text-sm font-semibold">
                <span className="text-[10px] font-mono text-emerald-800 block uppercase font-bold">The Solution</span>
                Global ISO 18600 series compliance. Since ISO standards are globally recognized, designing to these criteria ensures compliance with the EU PPWR and US state-level packaging regulations.
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'iso-comparison-section',
      title: 'ISO Sustainable Certification vs. Unverified Packaging',
      icon: <Eye className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-6 text-neutral-700">
          <p className="text-base leading-relaxed">
            Relying on unverified packaging exposes your brand to legal risks. ISO-certified sustainable packaging guarantees that your materials are source-reduced, recyclable, and free from toxic chemical residues.
          </p>

          <div className="bg-neutral-100 p-2 rounded-xl border-2 border-neutral-200">
            <ClickableImage 
              src={IMAGES.comparison} 
              alt="Side-by-side comparison of uncertified brown box and ISO certified sustainable packaging showing traceability seals" 
              className="w-full h-auto rounded-lg shadow-sm"
              caption="Visual comparison: Uncertified packaging (left) versus ISO certified sustainable packaging with verified seals (right)"
            />
          </div>
        </div>
      )
    }
  ]

  const faqs = [
    {
      question: "What is the ISO 18600 series for packaging?",
      answer: "It is a set of international standards (ISO 18601-18606) that define the requirements and criteria for packaging optimization, reuse, recycling, energy recovery, and composting to reduce environmental impact."
    },
    {
      question: "How does Achieve Pack verify ISO compliance?",
      answer: "We run our raw materials and finished pouches through third-party laboratories. They test and verify compliance with ISO 18602 (material reduction) and ISO 18604 (recyclability), and provide official test reports."
    },
    {
      question: "Does ISO compliance help with EU PPWR regulations?",
      answer: "Yes. The European Union Packaging and Packaging Waste Regulation (PPWR) heavily aligns with the ISO 18600 standards. Designing packaging according to these ISO standards is the best way to ensure EU compliance."
    },
    {
      question: "Can I print ISO certification marks directly on my pouches?",
      answer: "Yes, once the pouch structure has been validated for compliance, you can display appropriate environmental labels (such as ISO 14021 recycle loops or PE/PP material codes) to build consumer trust."
    }
  ]

  return (
    <>
      <Helmet>
        <title>ISO Sustainable Packaging Standards | Custom Eco Pouches</title>
        <meta name="description" content="Design and manufacture packaging that complies with ISO 18600 standards. Low MOQs, verified carbon footprints, and fully recyclable mono-material structures." />
        <link rel="canonical" href={`https://achievepack.com/topics/iso-sustainable`} />
        <meta name="keywords" content="ISO sustainable packaging, ISO 18600 standards, recyclable packaging, material reduction packaging, ISO 14001 certified, EU PPWR compliance" />
        
        {/* Schema markup */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "ISO Sustainable Packaging Standards | Custom Eco Pouches",
            "description": "An engineering analysis of the ISO 18600 environmental packaging standards, outlining design requirements for source reduction and recyclability.",
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
            "datePublished": "2025-06-15",
            "dateModified": new Date().toISOString().split('T')[0],
            "mainEntityOfPage": `https://achievepack.com/topics/iso-sustainable`
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
        title="ISO Sustainable Packaging Standards"
        description="Global design criteria for material reduction, recyclability, and environmental compliance."
        heroImage={IMAGES.hero}
        heroImageAlt="Eco-friendly cardboard box embossed with ISO 14001 and ISO 18602 certification seals on a concrete table"
        heroTitle="ISO Sustainable Packaging"
        heroSubtitle="ISO 18600 Series | Verified Material Reduction | Recyclability Standards"
        introSummary="We understand how frustrating it is when your supposedly compostable packaging fails to break down, leading to greenwashing accusations and unhappy clients. Let's solve this. Align your brand with global environmental standards. Our packaging is designed to comply with the ISO 18600 series, ensuring material optimization, recyclability, and a reduced carbon footprint that meets international laws."
        aeoSummary="ISO 18600 standards define environmental requirements for global packaging. Complying with ISO 18602 (source reduction) and ISO 18604 (recyclability) helps brands design packaging that meets EU and US regulations while reducing plastic waste."
        eeatDetails="Manufactured in ISO 9001 and ISO 14001 certified facilities. Materials are fully screened for heavy metal compliance under EN 13428 standards."
        sections={sections}
        faqs={faqs}
        schemaType="Article"
        contentCategory="Eco Packaging Regulations"
      />
    </>
  )
}

export default IsoSustainable
