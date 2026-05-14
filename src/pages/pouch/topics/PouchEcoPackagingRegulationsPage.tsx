import React from 'react'
import { Helmet } from 'react-helmet-async'
import { BarChart3, Package, CheckCircle, Award, Zap, Globe, Factory, Recycle, ArrowLeftRight, TrendingUp, ShoppingBag, Target, Shield, MessageCircle, Thermometer, Wind, Droplets, Microscope, Beaker, Scale, Gavel, FileText } from 'lucide-react'
import PouchLayout from '../../../components/pouch/PouchLayout'
import { NeoButton, NeoCard, NeoBadge } from '../../../components/pouch/PouchUI'
import { getBaseUrl } from '../../../utils/domain'
import ClickableImage from '../../../components/ClickableImage'

const PouchEcoPackagingRegulationsPage: React.FC = () => {
  const baseUrl = getBaseUrl()
  
  const REG_METRICS = [
    { label: 'PPWR Grade', value: 'Grade A', unit: 'EU', desc: 'Maximum recyclability rating.' },
    { label: 'Source Red', value: '-25%', unit: 'SB 54', desc: 'California reduction mandate.' },
    { label: 'Recycled Cont', value: '30%', unit: 'UK Tax', desc: 'Tax exemption threshold.' },
    { label: 'Claims Verif', value: 'ISO', unit: '14040', desc: 'Verifiable LCA impact data.' }
  ]

  return (
    <PouchLayout>
      <Helmet>
        <title>Eco-Packaging Regulations | Global Compliance Hub | Pouch.eco</title>
        <meta name="description" content="Technical guide to global eco-packaging regulations. 800+ words of research on EU PPWR, California SB 54, and FTC Green Guides compliance." />
        <link rel="canonical" href={`${baseUrl}/topics/eco-packaging-regulations`} />
        <meta name="keywords" content="eco-packaging regulations, EU PPWR, SB 54, packaging compliance, circular economy law" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative pt-12 pb-24 border-b-4 border-black bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:24px_24px] bg-neutral-50">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <NeoBadge color="magenta">REG_HUB_V1.0</NeoBadge>
          <h1 className="mt-8 font-black text-6xl md:text-9xl leading-none uppercase italic">Law.<br/>Pure.<br/><span className="text-black drop-shadow-[4px_4px_0px_rgba(212,255,0,1)]">Proven.</span></h1>
          <p className="mt-8 text-xl md:text-2xl font-bold font-['JetBrains_Mono'] text-gray-800 max-w-3xl mx-auto bg-white border-4 border-black p-6 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
            Voluntary sustainability is dead. In 2026, packaging is a legal deliverable. We engineer structures that meet the strict mandates of EU PPWR, California SB 54, and the FTC.
          </p>
          <div className="flex flex-wrap justify-center gap-6 mt-12">
            <NeoButton variant="primary" to="/products">Browse Compliant Styles</NeoButton>
            <NeoButton variant="secondary" to="/sample">Request Legal Evidence</NeoButton>
          </div>
        </div>
      </section>

      {/* Engineering: The Regulatory Framework */}
      <section className="py-24 bg-white border-b-4 border-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="absolute inset-0 bg-neutral-400 translate-x-4 translate-y-4 border-4 border-black" />
              <ClickableImage 
                src="/imgs/seo-photos/a_modern_high_tech_packaging_factory_floor_2218843.webp" 
                alt="Regulatory Compliance Testing" 
                className="relative z-10 border-4 border-black w-full shadow-2xl"
              />
            </div>
            <div>
              <NeoBadge color="blue">LEGAL_AUDIT_REPORT</NeoBadge>
              <h2 className="font-black text-5xl md:text-7xl mt-6 uppercase leading-tight italic">Compliant.<br/>By Design.</h2>
              <p className="mt-8 text-xl text-gray-600 font-['JetBrains_Mono'] leading-relaxed">
                Packaging regulation has shifted from 'encouragement' to 'enforcement'. In 2026, the <strong>EU Packaging and Packaging Waste Regulation (PPWR)</strong> and <strong>California SB 54</strong> have created a global standard for <strong>Producer Responsibility</strong>. Brands are now legally required to prove the recyclability and recycled content of their packaging. At Pouch.eco, we engineer our <strong>Mono-PE</strong> and <strong>Mono-PP</strong> pouches to achieve 'Grade A' recyclability performance, ensuring they qualify for the lowest EPR fees and the highest consumer trust. We back every claim with <strong>ISO 14040/44 Life Cycle Assessments</strong> and <strong>Cyclos-HTP</strong> laboratory certifications.
              </p>
              <div className="mt-8 grid grid-cols-2 gap-4">
                {REG_METRICS.map((p, i) => (
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

      {/* Technical: The Regulatory Tech Stack */}
      <section className="py-24 bg-black text-white border-b-4 border-black">
        <div className="max-w-7xl mx-auto px-6">
          <NeoBadge color="lime">REG_TECH_STACK</NeoBadge>
          <h2 className="font-black text-5xl md:text-8xl mt-6 uppercase leading-none italic mb-16">Global Law.<br/>Nano Proof.</h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="border-l-4 border-[#D4FF00] pl-8 py-4">
              <h3 className="text-3xl font-black uppercase mb-4">01. EU PPWR Readiness</h3>
              <p className="text-lg font-['JetBrains_Mono'] opacity-70 leading-relaxed">
                Mandatory 'Design for Recycling' adherence. Our mono-materials are optimized for NIR sortability and material recovery as per the latest 2030 EU mandates.
              </p>
            </div>

            <div className="border-l-4 border-[#D4FF00] pl-8 py-4">
              <h3 className="text-3xl font-black uppercase mb-4">02. California SB 54</h3>
              <p className="text-lg font-['JetBrains_Mono'] opacity-70 leading-relaxed">
                Exceeding the 25% source reduction and recyclability mandates required for all single-use packaging sold in the California market by 2032.
              </p>
            </div>

            <div className="border-l-4 border-[#D4FF00] pl-8 py-4">
              <h3 className="text-3xl font-black uppercase mb-4">03. UK Plastic Tax</h3>
              <p className="text-lg font-['JetBrains_Mono'] opacity-70 leading-relaxed">
                Integrating a minimum of 30% GRS-certified PCR content to ensure your pouches are exempt from the UK Plastic Packaging Tax (£217/tonne).
              </p>
            </div>

            <div className="border-l-4 border-[#D4FF00] pl-8 py-4">
              <h3 className="text-3xl font-black uppercase mb-4">04. Anti-Greenwashing</h3>
              <p className="text-lg font-['JetBrains_Mono'] opacity-70 leading-relaxed">
                Full compliance with FTC Green Guides and UK CMA codes. All environmental claims are specific, prominent, and backed by laboratory data.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Laboratory Verification Section */}
      <section className="py-24 bg-neutral-100 border-b-4 border-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <NeoBadge color="blue">LEGAL_SCIENCE_V1</NeoBadge>
              <h2 className="font-black text-5xl md:text-7xl mt-6 uppercase leading-tight italic">Verified.<br/>To the Clause.</h2>
              <p className="mt-8 text-xl text-gray-700 font-['JetBrains_Mono'] leading-relaxed">
                Compliance is a technical specification. We provide <strong>Declaration of Compliance (DoC)</strong> documents that outline the full material stack and chemical safety profile of your packaging. This includes <strong>PFAS-free verification</strong> (California AB 1200) and <strong>Bisphenol-free</strong> certifications. We don't just 'promise' safety; we provide the laboratory proof required for your legal department and global regulators. As your technical partner, we manage the regulatory complexity so you can focus on your brand.
              </p>
              <div className="mt-12 space-y-4">
                <div className="bg-white p-6 border-4 border-black flex gap-6 items-center">
                  <FileText className="w-12 h-12 flex-shrink-0" />
                  <div>
                    <h4 className="font-black uppercase">Audit-Proof Docs</h4>
                    <p className="text-sm opacity-60">Complete technical data sheets (TDS) and safety data sheets (SDS) for every structure.</p>
                  </div>
                </div>
                <div className="bg-white p-6 border-4 border-black flex gap-6 items-center">
                  <Shield className="w-12 h-12 flex-shrink-0" />
                  <div>
                    <h4 className="font-black uppercase">Risk Shield</h4>
                    <p className="text-sm opacity-60">Insurance-backed verification of material compliance with global food safety standards.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-neutral-400 translate-x-4 translate-y-4 border-4 border-black" />
              <ClickableImage 
                src="/imgs/pouch-shape/ads/a_achieve_pack_structure_overview_7409393.webp" 
                alt="Regulatory Technical Overview" 
                className="relative z-10 border-4 border-black w-full shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ: Regulatory Intelligence */}
      <section className="py-24 bg-white border-b-4 border-black">
        <div className="max-w-4xl mx-auto px-6">
          <NeoBadge color="magenta">REG_FAQ</NeoBadge>
          <h2 className="font-black text-5xl md:text-7xl mt-6 uppercase leading-tight italic mb-12">Expert<br/>Intelligence.</h2>
          <div className="space-y-4">
            {[
              { q: "Is 'Store Drop-Off' labeling still legal?", a: "Regulations are tightening. Under CA SB 343, you can only use the 'chasing arrows' if you prove the material is actually recovered in most local jurisdictions. We provide the data to back this." },
              { q: "What is EPR Fee Modulation?", a: "It is a 'polluter pays' system where non-recyclable materials pay higher fees. Our mono-materials qualify for the lowest fee tiers in EU and US markets." },
              { q: "How do you handle PFAS-free compliance?", a: "We utilize aqueous-based grease barriers and certified PFAS-free additives. We provide independent lab reports confirming 0ppm organic fluorine." },
              { q: "Do you provide LCA data for carbon reporting?", a: "Yes. Every custom structure can be provided with an ISO 14040 compliant LCA to support your Scope 3 carbon disclosure requirements." }
            ].map((faq, i) => (
              <div key={i} className="bg-white border-4 border-black p-8 hover:translate-x-1 hover:translate-y-1 hover:shadow-none shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all">
                <h4 className="font-black text-xl uppercase mb-4 flex items-center gap-3">
                  <span className="w-8 h-8 bg-black text-white flex items-center justify-center text-xs">Q</span>
                  {faq.q}
                </h4>
                <p className="font-['JetBrains_Mono'] text-gray-700 pl-11">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-black text-white border-b-4 border-black">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-12">
          <NeoBadge color="lime">LEGAL_MANDATE</NeoBadge>
          <h2 className="font-black text-6xl md:text-9xl uppercase leading-none italic">Think Legal.<br/>Impact Pure.</h2>
          <p className="font-['JetBrains_Mono'] font-bold text-xl opacity-80 max-w-2xl mx-auto">
            Ready to secure a legally-defensible, audit-proof supply chain for your brand? Let's start the technical audit today.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
            <NeoButton variant="primary" to="/sample" className="!bg-white !text-black">Request Compliance Review</NeoButton>
            <NeoButton variant="secondary" className="!border-white !text-white" href="https://calendly.com/30-min-free-packaging-consultancy">
              Speak to a Compliance Engineer
            </NeoButton>
          </div>
        </div>
      </section>
    </PouchLayout>
  )
}

export default PouchEcoPackagingRegulationsPage
