import React from 'react'
import { Helmet } from 'react-helmet-async'
import { BarChart3, Package, CheckCircle, Award, Zap, Globe, Factory, Recycle, ArrowLeftRight, TrendingUp, ShoppingBag, Target, Shield, MessageCircle, Thermometer, Wind, Droplets, Microscope, Beaker, Trash2, FileSearch  , Recycle } from 'lucide-react'
import PouchLayout from '../../../components/pouch/PouchLayout'
import { NeoButton, NeoCard, NeoBadge } from '../../../components/pouch/PouchUI'
import { getBaseUrl } from '../../../utils/domain'
import ClickableImage from '../../../components/ClickableImage'

const PouchRealWorldSustainabilityPage: React.FC = () => {
  const baseUrl = getBaseUrl()
  
  const IMPACT_METRICS = [
    { label: 'Carbon Proof', value: 'ISO', unit: '14040', desc: 'Cradle-to-grave impact verified.' },
    { label: 'Landfill Avoid', value: '75%', unit: 'By Weight', desc: 'Relative to rigid PET/Glass.' },
    { label: 'EPR Mitigation', value: '-20%', unit: 'Fees', desc: 'Optimized for global plastic taxes.' },
    { label: 'Compliance', value: 'GREEN', unit: 'Audit', desc: 'FTC and UK CMA standards ready.' }
  ]

  return (
    <PouchLayout>
      <Helmet>
        <title>Real-World Sustainability | LCA Engineering | Pouch.eco</title>
        <meta name="description" content="Technical guide to real-world packaging sustainability. 800+ words of research on ISO 14040 LCA, carbon footprinting, and global regulatory compliance." />
        <link rel="canonical" href={`${baseUrl}/topics/real-world-sustainability`} />
        <meta name="keywords" content="real-world sustainability, LCA, carbon footprint, packaging compliance, ISO 14040" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative pt-12 pb-24 border-b-4 border-black bg-[radial-gradient(#171717_1px,transparent_1px)] [background-size:24px_24px] bg-neutral-50">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <NeoBadge color="magenta">IMPACT_ENGINE_V1.0</NeoBadge>
          <h1 className="mt-8 font-black text-6xl md:text-9xl leading-none uppercase italic">Data.<br/>Not.<br/><span className="text-black drop-shadow-[4px_4px_0px_rgba(212,255,0,1)]">Hype.</span></h1>
          <p className="mt-8 text-xl md:text-2xl font-bold font-['JetBrains_Mono'] text-gray-800 max-w-3xl mx-auto bg-white border-4 border-black p-6 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
            Sustainability is an engineering deliverable. We provide the ISO 14040 Life Cycle Assessment (LCA) data and third-party certifications required to back your brand's claims with absolute technical authority.
          </p>
          <div className="flex flex-wrap justify-center gap-6 mt-12">
            <NeoButton variant="primary" to="/products">Browse Verified Solutions</NeoButton>
            <NeoButton variant="secondary" to="/sample">Order Evidence Kit</NeoButton>
          </div>
        </div>
      </section>

      {/* Engineering: The LCA Framework */}
      <section className="py-24 bg-white border-b-4 border-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="absolute inset-0 bg-neutral-400 translate-x-4 translate-y-4 border-4 border-black" />
              <ClickableImage 
                src="/imgs/seo-photos/a_sustainable_packaging_life_cycle_infographic_style_3318244.webp" 
                alt="LCA Engineering Framework" 
                className="relative z-10 border-4 border-black w-full shadow-2xl"
              />
            </div>
            <div>
              <NeoBadge color="blue">LIFE_CYCLE_AUDIT</NeoBadge>
              <h2 className="font-black text-5xl md:text-7xl mt-6 uppercase leading-tight italic">Cradle to<br/>Consumer.</h2>
              <p className="mt-8 text-xl text-gray-600 font-['JetBrains_Mono'] leading-relaxed">
                Sustainability is a measurement, not a state of being. We utilize the <strong>ISO 14040/44</strong> Life Cycle Assessment framework to quantify the total environmental impact of your packaging assets. We measure <strong>Scope 3 emissions</strong>, water consumption, and land-use impact for every material structure in our catalog. By transitioning from rigid containers to <strong>source-reduced flexible pouches</strong>, our clients achieve an average 75% reduction in landfill waste by weight—data we verify through third-party material audits.
              </p>
              <div className="mt-8 grid grid-cols-2 gap-4">
                {IMPACT_METRICS.map((p, i) => (
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

      {/* Technical: Regulatory Compliance */}
      <section className="py-24 bg-black text-white border-b-4 border-black">
        <div className="max-w-7xl mx-auto px-6">
          <NeoBadge color="lime">REGULATORY_TECH_STACK</NeoBadge>
          <h2 className="font-black text-5xl md:text-8xl mt-6 uppercase leading-none italic mb-16">Future-Proof<br/>Your Claims.</h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="border-l-4 border-[#D4FF00] pl-8 py-4">
              <h3 className="text-3xl font-black uppercase mb-4">01. FTC Green Guides</h3>
              <p className="text-lg font-['JetBrains_Mono'] opacity-70 leading-relaxed">
                Absolute compliance with US consumer protection standards. We provide the reliable evidence required to make unqualified environmental claims on your product's primary container.
              </p>
            </div>

            <div className="border-l-4 border-[#D4FF00] pl-8 py-4">
              <h3 className="text-3xl font-black uppercase mb-4">02. CMA Guidelines</h3>
              <p className="text-lg font-['JetBrains_Mono'] opacity-70 leading-relaxed">
                Ready for the UK's Green Claims Code. We ensure every sustainability benefit is clear, accurate, and substantiated by quantifiable laboratory and logistics data.
              </p>
            </div>

            <div className="border-l-4 border-[#D4FF00] pl-8 py-4">
              <h3 className="text-3xl font-black uppercase mb-4">03. EPR Optimization</h3>
              <p className="text-lg font-['JetBrains_Mono'] opacity-70 leading-relaxed">
                Extended Producer Responsibility is a financial reality. We engineer pouches to minimize your annual fee liability by maximizing recyclability scores and minimizing material mass.
              </p>
            </div>

            <div className="border-l-4 border-[#D4FF00] pl-8 py-4">
              <h3 className="text-3xl font-black uppercase mb-4">04. EPD Documentation</h3>
              <p className="text-lg font-['JetBrains_Mono'] opacity-70 leading-relaxed">
                Environmental Product Declarations. We offer standardized technical documents summarizing the environmental performance of your specific packaging order for ESG reporting.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Supply Chain Verification */}
      <section className="py-24 bg-neutral-100 border-b-4 border-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <NeoBadge color="blue">SUPPLY_CHAIN_VERIFICATION</NeoBadge>
              <h2 className="font-black text-5xl md:text-7xl mt-6 uppercase leading-tight italic">Verified.<br/>In the Field.</h2>
              <p className="mt-8 text-xl text-gray-700 font-['JetBrains_Mono'] leading-relaxed">
                Sustainability is only as strong as the ethics of the manufacturing plant. We perform <strong>4-Pillar SMETA audits</strong> on all primary suppliers to verify labor rights, health and safety, and environmental performance. By integrating <strong>ISO 14001</strong> environmental management systems, we ensure that the energy used to create your "eco-friendly" bag is being measured and reduced annually. We don't just sell bags; we manage a verified, sustainable ecosystem.
              </p>
              <div className="mt-12 space-y-4">
                <div className="bg-white p-6 border-4 border-black flex gap-6 items-center">
                  <FileSearch className="w-12 h-12 flex-shrink-0" />
                  <div>
                    <h4 className="font-black uppercase">Technical Traceability</h4>
                    <p className="text-sm opacity-60">GRS and ISCC PLUS certified chain of custody for all recycled and bio-circular resins.</p>
                  </div>
                </div>
                <div className="bg-white p-6 border-4 border-black flex gap-6 items-center">
                  <TrendingUp className="w-12 h-12 flex-shrink-0" />
                  <div>
                    <h4 className="font-black uppercase">Carbon Disclosure</h4>
                    <p className="text-sm opacity-60">Quantified kg CO2e data per SKU to support your brand's net-zero roadmap.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-neutral-400 translate-x-4 translate-y-4 border-4 border-black" />
              <ClickableImage 
                src="/imgs/seo-photos/a_modern_high_tech_packaging_factory_floor_2218843.webp" 
                alt="Verified Sustainability Manufacturing" 
                className="relative z-10 border-4 border-black w-full shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ: Technical Sustainability */}
      <section className="py-24 bg-white border-b-4 border-black">
        <div className="max-w-4xl mx-auto px-6">
          <NeoBadge color="magenta">IMPACT_FAQ</NeoBadge>
          <h2 className="font-black text-5xl md:text-7xl mt-6 uppercase leading-tight italic mb-12">Hard Answers.<br/>No Fluff.</h2>
          <div className="space-y-4">
            {[
              { q: "What is an ISO 14040 Life Cycle Assessment?", a: "It is the global scientific standard for measuring environmental impact. It tracks every stage from raw material extraction to transport, manufacturing, and final disposal." },
              { q: "How do you define 'Real-World' sustainability?", a: "It is the intersection of material science and local waste infrastructure. We focus on solutions that actually work in today's recycling and composting systems, not just in a lab." },
              { q: "Can your data protect me from greenwashing lawsuits?", a: "Yes. By following FTC and CMA guidelines and using third-party lab evidence, you build a 'bulletproof' case for any sustainability claim you make." },
              { q: "How much carbon can I save by switching to flexible pouches?", a: "On average, transitioning from glass or rigid PET to flexible pouches reduces total life-cycle carbon emissions by 60-80% due to material and transport efficiency." }
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
          <NeoBadge color="lime">IMPACT_MANDATE</NeoBadge>
          <h2 className="font-black text-6xl md:text-9xl uppercase leading-none italic">Evidence Based.<br/>Planet Approved.</h2>
          <p className="font-['JetBrains_Mono'] font-bold text-xl opacity-80 max-w-2xl mx-auto">
            Ready to secure the technical evidence your brand needs? Let's start with a Life Cycle Assessment of your packaging.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
            <NeoButton variant="primary" to="/sample" className="!bg-white !text-black">Order Evidence Samples</NeoButton>
            <NeoButton variant="secondary" className="!border-white !text-white" href="https://calendly.com/30-min-free-packaging-consultancy">
              Speak to an LCA Engineer
            </NeoButton>
          </div>
        </div>
      </section>
    </PouchLayout>
  )
}

export default PouchRealWorldSustainabilityPage
