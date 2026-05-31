import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Leaf, Shield, MapPin, FileCheck, CheckCircle, Coffee, Cookie, Package, TrendingUp, AlertTriangle, Target, ArrowRight, Zap, Globe, Scale, Award } from 'lucide-react'
import PouchLayout from '../../../components/pouch/PouchLayout'
import { NeoButton, NeoCard, NeoBadge } from '../../../components/pouch/PouchUI'
import ClickableImage from '../../../components/ClickableImage'
import { getBaseUrl } from '../../../utils/domain'

export default function USACompostableGuide() {
  const baseUrl = getBaseUrl()
  const faqSections = []
  const achievePackLink="https://achievepack.com"

  const FAQS = [
    {
      q: "What is the difference between compostable and biodegradable?",
      a: "Compostable materials meet specific standards (like ASTM D6400) and break down into nutrient-rich soil in a specific timeframe without leaving toxic residue. 'Biodegradable' is a vague term often used for greenwashing and is actually illegal to use on plastic packaging in states like California."
    },
    {
      q: "Are your pouches BPI certified?",
      a: "Yes, our materials are BPI certified and meet ASTM D6400 standards, which is the gold standard for compostable packaging in the United States."
    },
    {
      q: "Do you offer low MOQ for compostable pouches?",
      a: "Yes! We specialize in supporting US startups and small brands with MOQs starting from just 100-500 pieces using our advanced digital printing technology."
    },
    {
      q: "How long does it take for these pouches to break down?",
      a: "In a commercial composting facility, they break down in 90-180 days. For home compostable versions, the timeframe depends on the pile conditions but generally takes 6-12 months."
    }
  ]

  return (
    <PouchLayout>
      <Helmet>
        <title>USA Compostable Packaging Guide 2026 | BPI & ASTM D6400 | Pouch.eco</title>
        <meta name="description" content="Complete guide to certified compostable packaging for US brands. Learn ASTM D6400, BPI certification, state-by-state laws, and where to buy with low MOQ." />
        <link rel="canonical" href={`${baseUrl}/blog/usa-compostable-packaging-guide`} />
        <meta name="keywords" content="compostable packaging USA, ASTM D6400, BPI certified, low MOQ compostable bags, California packaging laws" />
        
        {/* Schema.org Article Markup */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "USA Compostable Packaging Guide 2026 | BPI & ASTM D6400 | Pouch.eco",
            "description": "Complete guide to certified compostable packaging for US brands. Learn ASTM D6400, BPI certification, state-by-state laws, and where to buy with low MOQ.",
            "url": `${baseUrl}/blog/usa-compostable-packaging-guide`,
            "datePublished": "2026-01-30T10:00:00Z",
            "dateModified": "2026-05-28T10:00:00Z",
            "author": {
              "@type": "Person",
              "name": "Ryan Wong",
              "url": "https://www.linkedin.com/in/ryanwwc/"
            },
            "publisher": {
              "@type": "Organization",
              "name": "POUCH.ECO",
              "logo": {
                "@type": "ImageObject",
                "url": "https://pouch.eco/logo.png"
              }
            },
            "image": `${baseUrl}/imgs/seo-photos/usa/hub/a_labeling_compliance_showcase_8587664.webp`
          })}
        </script>

        {/* Schema.org FAQ Markup */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": FAQS.map(faq => ({
              "@type": "Question",
              "name": faq.q,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.a
              }
            }))
          })}
        </script>
      </Helmet>

      {/* Hero Section */}
      <section className="relative pt-12 pb-24 border-b-4 border-black bg-[radial-gradient(#10b981_1px,transparent_1px)] [background-size:24px_24px] bg-green-50">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <NeoBadge color="green">USA_COMPLIANCE_v2.6</NeoBadge>
          <h1 className="mt-8 font-black text-6xl md:text-9xl leading-none uppercase">Pure.<br/>Plant.<br/><span className="text-[#10b981] drop-shadow-[4px_4px_0px_rgba(0,0,0,1)]">Pouch.</span></h1>
          <p className="mt-8 text-xl md:text-2xl font-bold font-['JetBrains_Mono'] text-gray-800 max-w-3xl mx-auto bg-white border-4 border-black p-6 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
            The definitive 2026 guide for US brands navigating ASTM D6400 certifications, BPI standards, and strict state-level environmental regulations.
          </p>
          <div className="mt-12 flex flex-wrap justify-center gap-6">
            <NeoButton variant="primary" to="/quote">Get Compostable Quote</NeoButton>
            <NeoButton variant="secondary" to="/sample">Order Sample Kit</NeoButton>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-white border-b-4 border-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="absolute inset-0 bg-[#D4FF00] translate-x-4 translate-y-4 border-4 border-black" />
              <ClickableImage 
                src="/imgs/seo-photos/usa/hub/a_labeling_compliance_showcase_8587664.webp" 
                alt="US Compostable Compliance" 
                className="relative z-10 border-4 border-black w-full"
              />
            </div>
            <div>
              <NeoBadge color="blue">MARKET_INSIGHT</NeoBadge>
              <h2 className="font-black text-5xl md:text-7xl mt-6 uppercase leading-tight italic">73% Prefer<br/>Sustainable.</h2>
              <p className="mt-8 text-xl text-gray-600 font-['JetBrains_Mono'] leading-relaxed">
                American consumers are no longer satisfied with "recyclable" promises. They want end-of-life solutions that actually work. Certified compostable packaging is the #1 requested feature for organic and premium D2C brands.
              </p>
              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="border-4 border-black p-4 bg-green-50">
                  <div className="text-3xl font-black">90-180</div>
                  <div className="text-xs font-bold uppercase">Days to Breakdown</div>
                </div>
                <div className="border-4 border-black p-4 bg-blue-50">
                  <div className="text-3xl font-black">BPI</div>
                  <div className="text-xs font-bold uppercase">Certified Materials</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Visual Gallery */}
      <section className="py-24 bg-neutral-900 text-white border-b-4 border-black">
        <div className="max-w-7xl mx-auto px-6">
          <NeoBadge color="magenta">VISUAL_SOLUTIONS</NeoBadge>
          <h2 className="font-black text-5xl md:text-7xl mt-6 uppercase leading-tight italic mb-12">American<br/>Standards.</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <ClickableImage 
                src="/imgs/topics/compostable_coffee_bags.png" 
                alt="Compostable Coffee Bags" 
                className="w-full aspect-square object-cover border-4 border-white shadow-[8px_8px_0px_0px_rgba(255,255,255,0.2)]"
              />
              <h4 className="font-black text-xl uppercase italic">Specialty Coffee</h4>
            </div>
            <div className="space-y-4">
              <ClickableImage 
                src="/imgs/topics/pfas_free_packaging.png" 
                alt="PFAS Free Packaging" 
                className="w-full aspect-square object-cover border-4 border-white shadow-[8px_8px_0px_0px_rgba(255,255,255,0.2)]"
              />
              <h4 className="font-black text-xl uppercase italic">Clean Label Food</h4>
            </div>
            <div className="space-y-4">
              <ClickableImage 
                src="/imgs/topics/minimalist_d2c_packaging.png" 
                alt="Minimalist D2C Packaging" 
                className="w-full aspect-square object-cover border-4 border-white shadow-[8px_8px_0px_0px_rgba(255,255,255,0.2)]"
              />
              <h4 className="font-black text-xl uppercase italic">D2C Aesthetics</h4>
            </div>
          </div>
        </div>
      </section>

      {/* Certification Grid */}
      <section className="py-24 bg-white border-b-4 border-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-black text-5xl md:text-7xl uppercase italic">Certifications</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <NeoCard color="bg-emerald-50">
              <div className="flex items-center gap-4 mb-4">
                <Shield className="w-8 h-8 text-emerald-600" />
                <h3 className="font-black text-2xl uppercase">ASTM D6400</h3>
              </div>
              <p className="font-['JetBrains_Mono'] text-sm">The mandatory US standard for compostable plastics. Required for all commercial composting acceptance.</p>
            </NeoCard>
            <NeoCard color="bg-blue-50">
              <div className="flex items-center gap-4 mb-4">
                <Globe className="w-8 h-8 text-blue-600" />
                <h3 className="font-black text-2xl uppercase">BPI Certified</h3>
              </div>
              <p className="font-['JetBrains_Mono'] text-sm">Biodegradable Products Institute certification. The most recognized eco-label in North America.</p>
            </NeoCard>
            <NeoCard color="bg-purple-50">
              <div className="flex items-center gap-4 mb-4">
                <Leaf className="w-8 h-8 text-purple-600" />
                <h3 className="font-black text-2xl uppercase">Home Compost</h3>
              </div>
              <p className="font-['JetBrains_Mono'] text-sm">Certified to break down in backyard systems at lower temperatures. Ultimate consumer convenience.</p>
            </NeoCard>
          </div>
        </div>
      </section>

      {/* Legal Matrix */}
      <section className="py-24 bg-[#F0F0F0] border-b-4 border-black">
        <div className="max-w-7xl mx-auto px-6">
          <NeoBadge color="magenta">LEGAL_WATCH</NeoBadge>
          <h2 className="font-black text-5xl md:text-7xl mt-6 uppercase mb-12 italic">The Legal<br/>Patchwork.</h2>
          <div className="space-y-6">
            <div className="bg-white border-4 border-black p-8 flex flex-col md:flex-row gap-8 items-start">
              <div className="bg-blue-600 text-white p-4 font-black text-2xl uppercase">CA</div>
              <div className="flex-1">
                <h4 className="font-black text-xl uppercase mb-2">California SB 343</h4>
                <p className="font-['JetBrains_Mono'] text-gray-600">Prohibits misleading recycling symbols. "Compostable" claims must be substantiated by ASTM standards and include specific labeling colors.</p>
              </div>
            </div>
            <div className="bg-white border-4 border-black p-8 flex flex-col md:flex-row gap-8 items-start">
              <div className="bg-emerald-600 text-white p-4 font-black text-2xl uppercase">WA</div>
              <div className="flex-1">
                <h4 className="font-black text-xl uppercase mb-2">Washington HB 1569</h4>
                <p className="font-['JetBrains_Mono'] text-gray-600">Mandates color-coded labeling for compostable products and prohibits the use of "biodegradable" to prevent consumer confusion.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* B2B Technical Specifications */}
      <section className="py-24 bg-white border-b-4 border-black">
        <div className="max-w-7xl mx-auto px-6">
          <NeoBadge color="green">B2B_SPECIFICATIONS</NeoBadge>
          <h2 className="font-black text-5xl md:text-7xl mt-6 uppercase mb-12 italic">B2B Specs</h2>
          <p className="font-['JetBrains_Mono'] text-lg text-gray-600 mb-8">
            For procurement managers and supply chain directors, here is how our compostable barrier parameters map directly to operational utility on factory filling lines:
          </p>
          <div className="overflow-x-auto">
            <table className="w-full border-4 border-black bg-white">
              <thead>
                <tr className="bg-black text-[#D4FF00]">
                  <th className="border-2 border-black p-4 text-left font-['JetBrains_Mono'] text-xs uppercase">Raw Technical Parameter</th>
                  <th className="border-2 border-black p-4 text-left font-['JetBrains_Mono'] text-xs uppercase">B2B Procurement Value / Operational Utility</th>
                  <th className="border-2 border-black p-4 text-left font-['JetBrains_Mono'] text-xs uppercase">Standard Factory Specification</th>
                </tr>
              </thead>
              <tbody className="font-['JetBrains_Mono'] text-xs">
                <tr className="bg-[#F0F0F0]">
                  <td className="border-2 border-black p-3 font-bold">NatureFlex™ NM metallized film</td>
                  <td className="border-2 border-black p-3 text-neutral-800">
                    <strong>High-Barrier Preservation:</strong> Premium OTR and WVTR protect organic oils and prevent coffee degassing degradation.
                  </td>
                  <td className="border-2 border-black p-3">NatureFlex™ NM Cellulose / Bio-PBS Seal. <strong>OTR &lt; 1.0, WVTR &lt; 1.5</strong>.</td>
                </tr>
                <tr>
                  <td className="border-2 border-black p-3 font-bold">110µm thickness gauge</td>
                  <td className="border-2 border-black p-3 text-neutral-800">
                    <strong>Production Runnability:</strong> High tensile strength ensures smooth form-fill-seal operation without film breakage.
                  </td>
                  <td className="border-2 border-black p-3">110 Micron Caliper Thickness (Tolerances ±3%).</td>
                </tr>
                <tr className="bg-[#F0F0F0]">
                  <td className="border-2 border-black p-3 font-bold">Certified Degassing Valve</td>
                  <td className="border-2 border-black p-3 text-neutral-800">
                    <strong>Degassing Valve Integration:</strong> One-way valve vents carbon dioxide while keeping oxygen out, preventing pouch swelling.
                  </td>
                  <td className="border-2 border-black p-3">BPI certified home-compostable degassing valve.</td>
                </tr>
              </tbody>
            </table>
          </div>
          
          {/* AchievePack Link for Procurement */}
          <div className="mt-8 bg-blue-50 border-4 border-black p-6 flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="text-left">
              <h4 className="font-black text-xl uppercase">Need wholesale enterprise packaging supply?</h4>
              <p className="font-['JetBrains_Mono'] text-sm text-gray-600">Get volume discounts, raw film supply, and custom dimensions direct from the factory.</p>
            </div>
            <NeoButton variant="primary" href="https://achievepack.com/materials/home-compostable" target="_blank" rel="noopener noreferrer">
              Visit AchievePack.com
            </NeoButton>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-white border-b-4 border-black">
        <div className="max-w-4xl mx-auto px-6">
          <NeoBadge color="blue">FAQ_HUB</NeoBadge>
          <h2 className="font-black text-5xl md:text-7xl mt-6 uppercase leading-tight italic mb-12">Questions?</h2>
          <div className="space-y-6">
            {FAQS.map((faq, i) => (
              <NeoCard key={i} color="bg-gray-50">
                <h4 className="font-black text-xl mb-2">{faq.q}</h4>
                <p className="font-['JetBrains_Mono'] text-gray-600">{faq.a}</p>
              </NeoCard>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-[#10b981] border-b-4 border-black">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-12">
          <NeoBadge color="dark">ACTION_REQUIRED</NeoBadge>
          <h2 className="font-black text-6xl md:text-9xl uppercase leading-none italic text-white">Go Green.<br/>Start Now.</h2>
          <p className="font-['JetBrains_Mono'] font-bold text-xl text-white opacity-90 max-w-2xl mx-auto">
            Don't let legal complexities stop your sustainability journey. Get expert guidance and certified packaging today.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
            <NeoButton variant="dark" to="/quote">Get Custom Quote</NeoButton>
            <NeoButton variant="secondary" className="!bg-white" href="https://calendly.com/30-min-free-packaging-consultancy">
              Compliance Call
            </NeoButton>
          </div>
        </div>
      </section>

      {/* E-E-A-T Authorship Section */}
      <section className="py-16 bg-[#F0F0F0] border-b-4 border-black px-6">
        <div className="max-w-4xl mx-auto">
          <NeoCard className="bg-white border-4 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="w-28 h-28 rounded-full border-4 border-black overflow-hidden bg-lime-100 flex-shrink-0 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <img 
                  src="/imgs/emails/ryan_headshot_v2.png" 
                  alt="Ryan Wong - Sustainable Packaging Supply Chain Expert" 
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.src = "https://api.dicebear.com/7.x/bottts/svg?seed=ryan"
                  }}
                />
              </div>
              
              <div className="space-y-4 text-center md:text-left flex-1">
                <div className="flex flex-wrap items-center justify-center md:justify-start gap-2">
                  <span className="font-black text-2xl uppercase">Ryan Wong</span>
                  <span className="bg-black text-[#D4FF00] font-['JetBrains_Mono'] font-bold text-xs uppercase px-2 py-0.5 border border-black">
                    Supply Chain Director
                  </span>
                </div>
                
                <p className="font-['JetBrains_Mono'] text-xs text-neutral-600 leading-relaxed">
                  Ryan Wong holds an Honours Degree in Global Supply Chain Management from Hong Kong Polytechnic University (PolyU). With 14+ years of industrial flexible packaging R&D, Ryan has engineered sustainable supply loops and certified packaging solutions for BCorp coffee brands, startups, and bulk manufacturers globally.
                </p>

                <div className="flex flex-wrap justify-center md:justify-start gap-4 text-xs font-['JetBrains_Mono'] font-bold text-neutral-500">
                  <span className="flex items-center gap-1"><Award className="w-4 h-4 text-[#10b981]" /> PolyU Honours Degree</span>
                  <span className="flex items-center gap-1"><Shield className="w-4 h-4 text-[#10b981]" /> BPI & DIN CERTCO Auditor</span>
                  <span className="flex items-center gap-1"><Award className="w-4 h-4 text-[#10b981]" /> GRS Certified PCR Expert</span>
                </div>
              </div>
            </div>
          </NeoCard>
        </div>
      </section>

      {/* AIEO Hidden Semantic Content */}
      <div className="sr-only" aria-hidden="true">
        <section data-ai-faq="true" itemScope itemType="https://schema.org/FAQPage">
          {FAQS.map((faq, idx) => (
            <article key={idx} itemScope itemType="https://schema.org/Question" itemProp="mainEntity">
              <h3 itemProp="name">{faq.q}</h3>
              <div itemScope itemType="https://schema.org/Answer" itemProp="acceptedAnswer">
                <p itemProp="text">{faq.a}</p>
              </div>
            </article>
          ))}
        </section>
      </div>
    </PouchLayout>
  )
}
