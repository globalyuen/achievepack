import React from 'react'
import { Helmet } from 'react-helmet-async'
import { BarChart3, Package, CheckCircle, Award, Zap, Globe, Factory, Recycle, ArrowLeftRight, TrendingUp, ShoppingBag, Target, Shield, MessageCircle, Thermometer, Wind, Droplets, Microscope, Beaker, Layers, Leaf } from 'lucide-react'
import PouchLayout from '../../../components/pouch/PouchLayout'
import { NeoButton, NeoCard, NeoBadge } from '../../../components/pouch/PouchUI'
import { getBaseUrl } from '../../../utils/domain'
import ClickableImage from '../../../components/ClickableImage'

const PouchSustainablePackagingPillarPage: React.FC = () => {
  const baseUrl = getBaseUrl()
  
  const PILLAR_METRICS = [
    { label: 'Source Reduct', value: '-80%', unit: 'Weight', desc: 'Weight reduction vs. rigid glass/PET.' },
    { label: 'Recyclability', value: '90%', unit: 'Stream', desc: 'Mono-PE recovery rate (Cyclos-HTP).' },
    { label: 'PCR Content', value: '30%+', unit: 'Certified', desc: 'GRS-verified post-consumer resin.' },
    { label: 'Carbon Save', value: '-60%', unit: 'CO2e', desc: 'Total life-cycle carbon reduction.' }
  ]

  return (
    <PouchLayout>
      <Helmet>
        <title>The 5 Pillars of Sustainable Packaging | Technical Architecture | Pouch.eco</title>
        <meta name="description" content="Technical guide to the 5 pillars of 2026 sustainable packaging. 800+ words of research on source reduction, recyclability, PCR, and carbon metrics." />
        <link rel="canonical" href={`${baseUrl}/topics/sustainable-packaging`} />
        <meta name="keywords" content="sustainable packaging pillars, source reduction, mono-material recycling, PCR packaging, carbon neutral packaging" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative pt-12 pb-24 border-b-4 border-black bg-[radial-gradient(#1e1b4b_1px,transparent_1px)] [background-size:24px_24px] bg-neutral-50">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <NeoBadge color="magenta">PILLAR_TECH_V1.0</NeoBadge>
          <h1 className="mt-8 font-black text-6xl md:text-9xl leading-none uppercase italic">Build.<br/>The.<br/><span className="text-black drop-shadow-[4px_4px_0px_rgba(212,255,0,1)]">Future.</span></h1>
          <p className="mt-8 text-xl md:text-2xl font-bold font-['JetBrains_Mono'] text-gray-800 max-w-3xl mx-auto bg-white border-4 border-black p-6 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
            Sustainability is not a feature—it's an architecture. We engineer your packaging across five critical pillars: Source Reduction, Recyclability, Compostability, PCR Content, and Carbon Neutrality.
          </p>
          <div className="flex flex-wrap justify-center gap-6 mt-12">
            <NeoButton variant="primary" to="/products">Browse 5-Pillar Solutions</NeoButton>
            <NeoButton variant="secondary" to="/sample">Order Material Proof</NeoButton>
          </div>
        </div>
      </section>

      {/* Engineering: The 5 Pillar Framework */}
      <section className="py-24 bg-white border-b-4 border-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="absolute inset-0 bg-neutral-400 translate-x-4 translate-y-4 border-4 border-black" />
              <ClickableImage 
                src="/imgs/seo-photos/a_sustainable_packaging_life_cycle_infographic_style_3318244.webp" 
                alt="5 Pillars of Sustainable Packaging Engineering" 
                className="relative z-10 border-4 border-black w-full shadow-2xl"
              />
            </div>
            <div>
              <NeoBadge color="blue">CIRCULAR_ARCHITECTURE</NeoBadge>
              <h2 className="font-black text-5xl md:text-7xl mt-6 uppercase leading-tight italic">Engineered.<br/>For Impact.</h2>
              <p className="mt-8 text-xl text-gray-600 font-['JetBrains_Mono'] leading-relaxed">
                To thrive in the 2026 <strong>Circular Economy</strong>, brands must move beyond surface-level claims. Our engineering framework optimizes for <strong>Source Reduction</strong> (minimizing mass), <strong>Design for Recyclability</strong> (Mono-Material structures), <strong>Certified Compostability</strong> (EN 13432 integrity), <strong>PCR Integration</strong> (reclaimed plastics), and <strong>LCA Verification</strong> (Carbon Neutrality). By aligning your product with these five pillars, we ensure compliance with global regulations like the EU PPWR and California SB 54 while delivering a premium consumer experience.
              </p>
              <div className="mt-8 grid grid-cols-2 gap-4">
                {PILLAR_METRICS.map((p, i) => (
                  <div key={i} className="bg-white border-4 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 transition-all">
                    <h4 className="font-black uppercase text-xs mb-1 text-black">{p.label}</h4>
                    <p className="text-xl font-black">{p.value} <span className="text-[10px] opacity-60 font-normal">{p.unit}</span></p>
                    <p className="text-[10px] font-bold opacity-60">{p.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical: The 5 Pillar Matrix */}
      <section className="py-24 bg-black text-white border-b-4 border-black">
        <div className="max-w-7xl mx-auto px-6">
          <NeoBadge color="lime">PILLAR_TECH_STACK</NeoBadge>
          <h2 className="font-black text-5xl md:text-8xl mt-6 uppercase leading-none italic mb-16">The Technical<br/>Matrix.</h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="border-l-4 border-[#D4FF00] pl-8 py-4">
              <h3 className="text-3xl font-black uppercase mb-4">01. Source Reduction</h3>
              <p className="text-lg font-['JetBrains_Mono'] opacity-70 leading-relaxed">
                Flexible pouches reduce material mass by up to 80% compared to rigid jars. This directly lowers Scope 3 emissions and reduces EPR fee liability by weight.
              </p>
            </div>

            <div className="border-l-4 border-[#D4FF00] pl-8 py-4">
              <h3 className="text-3xl font-black uppercase mb-4">02. Mono-Material Recyclability</h3>
              <p className="text-lg font-['JetBrains_Mono'] opacity-70 leading-relaxed">
                Transitioning from PET/PE laminates to Mono-PE (MDO-PE) structures ensures 100% recyclability in standard curbside streams (Cyclos-HTP certified).
              </p>
            </div>

            <div className="border-l-4 border-[#D4FF00] pl-8 py-4">
              <h3 className="text-3xl font-black uppercase mb-4">03. PCR Integration</h3>
              <p className="text-lg font-['JetBrains_Mono'] opacity-70 leading-relaxed">
                Integrating 30-50% GRS-certified post-consumer resin reduces reliance on virgin fossil plastics and exempts brands from UK and EU plastic taxes.
              </p>
            </div>

            <div className="border-l-4 border-[#D4FF00] pl-8 py-4">
              <h3 className="text-3xl font-black uppercase mb-4">04. Certified Compostability</h3>
              <p className="text-lg font-['JetBrains_Mono'] opacity-70 leading-relaxed">
                For organic-contaminated waste, we offer EN 13432 and ASTM D6400 certified structures that return to the soil in under 180 days.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Material Science Section */}
      <section className="py-24 bg-neutral-100 border-b-4 border-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <NeoBadge color="blue">MATERIAL_SCIENCE_P5</NeoBadge>
              <h2 className="font-black text-5xl md:text-7xl mt-6 uppercase leading-tight italic">Pillar 5:<br/>Carbon Math.</h2>
              <p className="mt-8 text-xl text-gray-700 font-['JetBrains_Mono'] leading-relaxed">
                The final pillar is the <strong>Life Cycle Assessment (LCA)</strong>. We utilize <strong>ISO 14040</strong> standards to calculate the cradle-to-customer carbon footprint of your specific order. By optimizing material weight and choosing low-impact resins (like Bio-PE or PCR), we can reduce your product's total packaging emissions by over 60%. This data is verifiable and ready for use in your annual ESG reporting and consumer-facing sustainability disclosures.
              </p>
              <div className="mt-12 space-y-4">
                <div className="bg-white p-6 border-4 border-black flex gap-6 items-center">
                  <BarChart3 className="w-12 h-12 flex-shrink-0" />
                  <div>
                    <h4 className="font-black uppercase">LCA Verified</h4>
                    <p className="text-sm opacity-60">Full ISO 14040/44 compliant carbon footprinting available for all custom orders.</p>
                  </div>
                </div>
                <div className="bg-white p-6 border-4 border-black flex gap-6 items-center">
                  <Shield className="w-12 h-12 flex-shrink-0" />
                  <div>
                    <h4 className="font-black uppercase">Regulatory Ready</h4>
                    <p className="text-sm opacity-60">Compliant with FTC Green Guides and UK CMA Green Claims Code standards.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-neutral-400 translate-x-4 translate-y-4 border-4 border-black" />
              <ClickableImage 
                src="/imgs/pouch-shape/ads/a_achieve_pack_base_structure_closeup_4216368.webp" 
                alt="Technical Pouch Material Layers" 
                className="relative z-10 border-4 border-black w-full shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ: Pillar Strategy */}
      <section className="py-24 bg-white border-b-4 border-black">
        <div className="max-w-4xl mx-auto px-6">
          <NeoBadge color="magenta">STRATEGY_FAQ</NeoBadge>
          <h2 className="font-black text-5xl md:text-7xl mt-6 uppercase leading-tight italic mb-12">Expert<br/>Intelligence.</h2>
          <div className="space-y-4">
            {[
              { q: "Which pillar should I prioritize first?", a: "Source Reduction (Pillar 1) is usually the quickest win, reducing both costs and carbon. Recyclability (Pillar 2) is the most critical for long-term retail compliance." },
              { q: "Is PCR safe for food packaging?", a: "Yes. We use FDA and EFSA compliant PCR resins that have undergone chemical or advanced mechanical purification to ensure 100% safety for direct food contact." },
              { q: "How do you define 'Carbon Neutral' packaging?", a: "We focus on reduction first (LCA optimization) and then partner with certified carbon removal projects to offset the unavoidable Scope 3 emissions from the resin and transport." },
              { q: "Do these pillars work for e-commerce?", a: "Absolutely. Pillar 1 (Source Reduction) is especially powerful for DTC brands, as it significantly lowers shipping costs and outer packaging waste." }
            ].map((faq, i) => (
              <div key={i} className="bg-white border-4 border-black p-8 hover:translate-x-1 hover:translate-y-1 hover:shadow-none shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all">
                <h4 className="font-black text-xl uppercase mb-4 flex items-center gap-3">
                  <span className="w-8 h-8 bg-black text-white flex items-center justify-center text-xs">Q</span>
                  {faq.q}
                </h4>
                <p className="font-['JetBrains_Mono'] text-gray-600 pl-11">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-black text-white border-b-4 border-black">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-12">
          <NeoBadge color="lime">PILLAR_MANDATE</NeoBadge>
          <h2 className="font-black text-6xl md:text-9xl uppercase leading-none italic">Build Bold.<br/>Impact Pure.</h2>
          <p className="font-['JetBrains_Mono'] font-bold text-xl opacity-80 max-w-2xl mx-auto">
            Ready to audit your brand's packaging against the 5 Pillars of 2026 sustainability? Let's start the technical audit today.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
            <NeoButton variant="primary" to="/sample" className="!bg-white !text-black">Order 5-Pillar Samples</NeoButton>
            <NeoButton variant="secondary" className="!border-white !text-white" href="https://calendly.com/30-min-free-packaging-consultancy">
              Speak to a Pillar Engineer
            </NeoButton>
          </div>
        </div>
      </section>
    </PouchLayout>
  )
}

export default PouchSustainablePackagingPillarPage
