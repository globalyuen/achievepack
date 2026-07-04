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

const PlaRice: React.FC = () => {
  const { openCalendly } = useCalendly()
  const isPouch = getDomain() === 'pouch'

  const IMAGES = {
    hero: '/imgs/topics/pla-rice/hero.jpg',
    process: '/imgs/topics/pla-rice/process.jpg',
    comparison: '/imgs/topics/pla-rice/comparison.jpg'
  }

  const sections = [
    {
      id: 'pla-rice-technology',
      title: 'What is Biodegradable PLA Rice Packaging?',
      icon: <Sparkles className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-6 text-neutral-700">
          <p className="text-base leading-relaxed">
            Polylactic Acid (PLA) rice packaging represents a major technological shift in sustainable agricultural bags. Derived from fermented plant starch (typically corn or sugarcane), PLA is a 100% bio-based polymer designed to completely replace petroleum-based polyethylene (PE) and polyester (PET) films. When engineered correctly, PLA flexible pouches offer identical structural integrity, transparency, and seal strength as standard plastic, while remaining fully compostable.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mt-6">
            <div className="bg-white p-5 rounded-lg border border-neutral-200 shadow-sm flex flex-col justify-between">
              <div>
                <h4 className="font-bold text-neutral-900 mb-2">Reduced Carbon Footprint</h4>
                <p className="text-sm text-neutral-600">
                  PLA production generates up to 68% fewer greenhouse gas emissions compared to traditional fossil-fuel-based plastics, helping agricultural brands meet stringent carbon reduction targets.
                </p>
              </div>
            </div>
            <div className="bg-white p-5 rounded-lg border border-neutral-200 shadow-sm flex flex-col justify-between">
              <div>
                <h4 className="font-bold text-neutral-900 mb-2">High Optical Clarity</h4>
                <p className="text-sm text-neutral-600">
                  Our advanced co-extrusion technology yields high-clarity viewing windows, letting consumers inspect the grain shape, color, and quality of the premium rice varieties inside.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-neutral-100 p-2 rounded-xl border-2 border-neutral-200 mt-6">
            <ClickableImage 
              src={IMAGES.process} 
              alt="Automated heat sealing jaws sealing biodegradable PLA rice pouches on an industrial assembly line" 
              className="w-full h-auto rounded-lg shadow-sm"
              caption="State-of-the-art thermal sealing jaws precisely configured for PLA's narrow sealing temperature window"
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
            "Rice is a challenging product to pack in biodegradable materials. First, grains have sharp edges that easily puncture thin films. Second, heavy bags (ranging from 1kg to 5kg) experience immense drop-impact stress during distribution. Standard PLA on its own is too brittle to handle this load. 
            To solve this, we blend PLA with ductile biodegradable polymers (like PBAT) to increase tensile elasticity. Furthermore, because PLA melts at a lower point than PET, thermal sealing jaws must be calibrated precisely. We run co-extruded sealant layers that activate at exactly 115°C, sealing in a tight 0.5-second dwell time to prevent thermal distortion. This secures a robust 1.8mm hermetic seal that handles high-drop tests easily."
          </blockquote>
          <p className="text-xs font-['JetBrains_Mono'] text-[#D4FF00] font-semibold flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#D4FF00]" /> BPI & DIN CERTCO Industrial Compostability Verified
          </p>
        </div>
      )
    },
    {
      id: 'five-plain-points',
      title: '5 Common Rice Packaging Pain Points & Our Engineering Solutions',
      icon: <Target className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-6">
          <p className="text-neutral-700">
            Sustainable agricultural packaging must withstand physical stress while preserving moisture and oxygen barriers. Below are the five key engineering challenges in eco-friendly rice packaging, and how we solve them:
          </p>
          
          <div className="space-y-4">
            {/* Point 1 */}
            <div className="bg-[#F9F9F9] border-2 border-black p-5 rounded-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h4 className="font-black uppercase text-base mb-2 text-black flex items-center gap-2">
                <span className="bg-black text-white px-2 py-0.5 text-xs font-mono">01</span>
                Pain Point: Puncture & Tear Under Sharp Grain Abrasion
              </h4>
              <p className="text-sm text-neutral-600 mb-3">
                Rice grains, especially long-grain varieties like Basmati or Jasmine, feature sharp tips that pierce standard biodegradable films during transit, causing structural failures and product spillage.
              </p>
              <div className="bg-[#D4FF00]/10 border-l-4 border-emerald-600 p-3 text-neutral-800 text-sm font-semibold">
                <span className="text-[10px] font-mono text-emerald-800 block uppercase font-bold">The Solution</span>
                Multi-layer co-extrusion blending biaxially oriented PLA (BOPLA) with high-toughness biodegradable elastomers. This structural composition distributes localized stress and raises tear resistance by 40%.
              </div>
            </div>

            {/* Point 2 */}
            <div className="bg-[#F9F9F9] border-2 border-black p-5 rounded-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h4 className="font-black uppercase text-base mb-2 text-black flex items-center gap-2">
                <span className="bg-black text-white px-2 py-0.5 text-xs font-mono">02</span>
                Pain Point: Bottom-Gusset Failure Under Heavy Weights
              </h4>
              <p className="text-sm text-neutral-600 mb-3">
                Rice is dense and heavy. Drop impacts during shipping cause standard bottom seals or gussets on biodegradable bags to rupture under the sudden, downward hydraulic pressure.
              </p>
              <div className="bg-[#D4FF00]/10 border-l-4 border-emerald-600 p-3 text-neutral-800 text-sm font-semibold">
                <span className="text-[10px] font-mono text-emerald-800 block uppercase font-bold">The Solution</span>
                Reinforced 1.8mm wide-seal tech with integrated round-corner welds. By distributing stress along a wider surface area and eliminating angular focal points, we pass standard 1.5-meter drop tests on concrete.
              </div>
            </div>

            {/* Point 3 */}
            <div className="bg-[#F9F9F9] border-2 border-black p-5 rounded-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h4 className="font-black uppercase text-base mb-2 text-black flex items-center gap-2">
                <span className="bg-black text-white px-2 py-0.5 text-xs font-mono">03</span>
                Pain Point: Melting and Burn-Through During Heat Sealing
              </h4>
              <p className="text-sm text-neutral-600 mb-3">
                PLA has a relatively low melting point compared to traditional plastics. Normal packaging line heat-sealers easily burn through PLA, ruining the film and causing line downtime.
              </p>
              <div className="bg-[#D4FF00]/10 border-l-4 border-emerald-600 p-3 text-neutral-800 text-sm font-semibold">
                <span className="text-[10px] font-mono text-emerald-800 block uppercase font-bold">The Solution</span>
                A co-extruded dual-layer film structure. The outer layer consists of highly heat-resistant PLA, while the inner sealant layer consists of a lower-melting-point compostable copolymer. This allows thermal sealing at 115°C without compromising structural integrity.
              </div>
            </div>

            {/* Point 4 */}
            <div className="bg-[#F9F9F9] border-2 border-black p-5 rounded-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h4 className="font-black uppercase text-base mb-2 text-black flex items-center gap-2">
                <span className="bg-black text-white px-2 py-0.5 text-xs font-mono">04</span>
                Pain Point: High Moisture Permeability Leading to Grain Staling
              </h4>
              <p className="text-sm text-neutral-600 mb-3">
                Rice is highly hygroscopic. Traditional single-layer PLA films permit moisture vapor transmission, causing the rice to absorb dampness, clump together, lose freshness, or grow mold.
              </p>
              <div className="bg-[#D4FF00]/10 border-l-4 border-emerald-600 p-3 text-neutral-800 text-sm font-semibold">
                <span className="text-[10px] font-mono text-emerald-800 block uppercase font-bold">The Solution</span>
                High-barrier metallized bio-laminates. By incorporating an eco-friendly high-barrier layer, we reduce the Water Vapor Transmission Rate (WVTR) to &lt; 0.5g/m²/24h, keeping the rice dry and free-flowing.
              </div>
            </div>

            {/* Point 5 */}
            <div className="bg-[#F9F9F9] border-2 border-black p-5 rounded-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h4 className="font-black uppercase text-base mb-2 text-black flex items-center gap-2">
                <span className="bg-black text-white px-2 py-0.5 text-xs font-mono">05</span>
                Pain Point: Loss of Eco-Credentials with Standard Ink Printing
              </h4>
              <p className="text-sm text-neutral-600 mb-3">
                Printing high-graphics brand designs on biodegradable bags using solvent-based metallic or heavy-metal inks can contaminate the compostable substrate, invalidating eco-certifications.
              </p>
              <div className="bg-[#D4FF00]/10 border-l-4 border-emerald-600 p-3 text-neutral-800 text-sm font-semibold">
                <span className="text-[10px] font-mono text-emerald-800 block uppercase font-bold">The Solution</span>
                Non-toxic water-based and soy-based compostable inks. Our printing processes are strictly certified to BPI standards, ensuring that the fully printed pouch decomposes completely without leaving toxic residues in the soil.
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'pla-vs-traditional-comparison',
      title: 'PLA vs. Traditional Petroleum-Based Plastic',
      icon: <Eye className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-6 text-neutral-700">
          <p className="text-base leading-relaxed">
            While petroleum-derived plastic bags persist in landfills for centuries, our plant-based PLA pouches disintegrate completely into organic humus under compost conditions, closing the loop on agricultural packaging.
          </p>

          <div className="bg-neutral-100 p-2 rounded-xl border-2 border-neutral-200">
            <ClickableImage 
              src={IMAGES.comparison} 
              alt="Comparison diagram outlining environmental footprint and end-of-life options of traditional PE vs PLA rice pouches" 
              className="w-full h-auto rounded-lg shadow-sm"
              caption="Lifecycle comparison: Standard plastic rice packaging versus plant-based biodegradable PLA packaging"
            />
          </div>
        </div>
      )
    }
  ]

  const faqs = [
    {
      question: "Is PLA rice packaging strong enough for 5kg or 10kg bags?",
      answer: "Yes, our packaging is specially engineered for weights up to 5kg. We blend brittle PLA with high-impact biodegradable elastomers (like PBAT) to increase drop-rupture resistance and tensile load capacity."
    },
    {
      question: "How long does it take for a PLA rice bag to compost?",
      answer: "In an industrial composting facility, it will decompose within 90 days. Under home composting conditions, the timeframe varies between 180 to 360 days depending on temperature, humidity, and microbial activity."
    },
    {
      question: "Does PLA packaging protect rice from insects and weevils?",
      answer: "Yes. By incorporating multi-layer high-barrier films, our PLA pouches lock out oxygen and external humidity, creating an airtight seal that naturally suppresses weevil development and maintains dry freshness."
    },
    {
      question: "Are the inks and labels used also compostable?",
      answer: "Absolutely. We print using soy- and water-based compostable inks that comply with BPI and DIN CERTCO certifications, guaranteeing that the entire packaging unit degrades cleanly."
    }
  ]

  return (
    <>
      <Helmet>
        <title>Biodegradable PLA Rice Packaging Bags | Custom Compostable Rice Pouches</title>
        <meta name="description" content="Secure plant-based, fully biodegradable PLA rice packaging. Industrial compostable stand-up pouches with high load-bearing seals, clear window design, and low MOQs." />
        <link rel="canonical" href={`https://achievepack.com/topics/pla-rice`} />
        <meta name="keywords" content="PLA rice packaging, biodegradable rice bags, compostable grain pouch, plant-based agricultural bag, eco-friendly rice packaging, BPI certified compostable bags" />
        
        {/* Schema markup */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "Biodegradable PLA Rice Packaging Bags | Custom Compostable Rice Pouches",
            "description": "An in-depth guide to engineering high-strength, plant-based PLA packaging bags optimized for heavy agricultural loads like rice and grain distribution.",
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
            "datePublished": "2025-03-10",
            "dateModified": new Date().toISOString().split('T')[0],
            "mainEntityOfPage": `https://achievepack.com/topics/pla-rice`
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
        title="Biodegradable PLA Rice Packaging"
        description="Premium, plant-based compostable pouches engineered for heavy grain packaging."
        heroImage={IMAGES.hero}
        heroImageAlt="Premium custom organic rice stand-up pouch made from biodegradable PLA"
        heroTitle="Sustainable PLA Rice Packaging"
        heroSubtitle="100% Bio-Based | High Tear-Strength | Industrial Compostable"
        introSummary="Transition your grain packaging to a circular lifecycle. Our Polylactic Acid (PLA) rice packaging bags are crafted from renewable plant starches. They provide the high tensile strength, structural durability, and visual clarity needed for retail shelves, while ensuring zero plastic waste."
        aeoSummary="PLA rice packaging utilizes cornstarch or sugarcane-derived polymers to form durable flexible stand-up bags. They offer equivalent performance to traditional plastics with superior carbon savings and full end-of-life biodegradability."
        eeatDetails="Eco-friendly BPI and DIN CERTCO certified materials. Heavy-duty co-extruded compositions formulated to resist abrasive rice grains and pass standard drop test protocols."
        sections={sections}
        faqs={faqs}
        schemaType="Article"
        contentCategory="Sustainable Food Packaging"
      />
    </>
  )
}

export default PlaRice
