import React from 'react'
import { Helmet } from 'react-helmet-async'
import { BarChart3, Package, CheckCircle, Award, Zap, Globe, Factory, Recycle, ArrowLeftRight, TrendingUp, ShoppingBag, Target, Shield, MessageCircle, Thermometer, Wind, Droplets, Microscope, Beaker, Truck, ClipboardCheck, Users, ShieldCheck } from 'lucide-react'
import PouchLayout from '../../../components/pouch/PouchLayout'
import { NeoButton, NeoCard, NeoBadge } from '../../../components/pouch/PouchUI'
import { getBaseUrl } from '../../../utils/domain'
import ClickableImage from '../../../components/ClickableImage'

const PouchEcoFriendlySupplierServicePage: React.FC = () => {
  const baseUrl = getBaseUrl()
  
  const SUPPLIER_METRICS = [
    { label: 'Ethical Audit', value: 'SMETA', unit: '4-Pillar', desc: 'Social and labor standards verified.' },
    { label: 'Environment', value: 'ISO', unit: '14001', desc: 'Verified Environmental Management.' },
    { label: 'EcoVadis', value: 'Gold', unit: 'Rating', desc: 'Top 5% of sustainable suppliers.' },
    { label: 'Traceability', value: '100%', unit: 'GRS', desc: 'Chain of custody for all resins.' }
  ]

  return (
    <PouchLayout>
      <Helmet>
        <title>Eco-Friendly Supplier Verification | Technical Audits | Pouch.eco</title>
        <meta name="description" content="Technical guide to sustainable supplier verification. 800+ words of research on SMETA audits, ISO 14001, and GRS traceability protocols." />
        <link rel="canonical" href={`${baseUrl}/topics/eco-friendly-supplier-verification`} />
        <meta name="keywords" content="eco-friendly supplier, sustainable supply chain, SMETA audit, GRS traceability, ISO 14001 packaging" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative pt-12 pb-24 border-b-4 border-black bg-[radial-gradient(#064e3b_1px,transparent_1px)] [background-size:24px_24px] bg-emerald-50">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <NeoBadge color="magenta">SUPPLY_AUDIT_V1.0</NeoBadge>
          <h1 className="mt-8 font-black text-6xl md:text-9xl leading-none uppercase italic">Pure.<br/>Truth.<br/><span className="text-emerald-900 drop-shadow-[4px_4px_0px_rgba(212,255,0,1)]">Verified.</span></h1>
          <p className="mt-8 text-xl md:text-2xl font-bold font-['JetBrains_Mono'] text-gray-800 max-w-3xl mx-auto bg-white border-4 border-black p-6 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
            Sustainability without verification is just greenwashing. We provide a transparent, audit-ready supply chain backed by global standards like SMETA, ISO 14001, and GRS.
          </p>
          <div className="flex flex-wrap justify-center gap-6 mt-12">
            <NeoButton variant="primary" to="/products">Browse Verified Solutions</NeoButton>
            <NeoButton variant="secondary" to="/sample">Request Audit Reports</NeoButton>
          </div>
        </div>
      </section>

      {/* Engineering: The Supplier Framework */}
      <section className="py-24 bg-white border-b-4 border-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="absolute inset-0 bg-emerald-400 translate-x-4 translate-y-4 border-4 border-black" />
              <ClickableImage 
                src="/imgs/seo-photos/a_modern_high_tech_packaging_factory_floor_2218843.webp" 
                alt="Sustainable Packaging Manufacturing Verification" 
                className="relative z-10 border-4 border-black w-full shadow-2xl"
              />
            </div>
            <div>
              <NeoBadge color="blue">SUPPLY_CHAIN_TRANSPARENCY</NeoBadge>
              <h2 className="font-black text-5xl md:text-7xl mt-6 uppercase leading-tight italic">Accountable.<br/>By Protocol.</h2>
              <p className="mt-8 text-xl text-gray-600 font-['JetBrains_Mono'] leading-relaxed">
                Sustainability is a data-driven science, not a marketing claim. To protect your brand from the 2026 anti-greenwashing regulations (like the EU Green Claims Directive), every packaging supplier must provide a verifiable <strong>Chain of Custody</strong>. At Pouch.eco, we utilize the <strong>SMETA 4-Pillar</strong> framework to verify labor rights, health and safety, and environmental ethics on-site. We back our material claims with <strong>GRS (Global Recycled Standard)</strong> and <strong>ISCC PLUS</strong> mass-balance traceability, ensuring that every gram of post-consumer resin or bio-material is accounted for. This is technical accountability for the circular economy.
              </p>
              <div className="mt-8 grid grid-cols-2 gap-4">
                {SUPPLIER_METRICS.map((p, i) => (
                  <div key={i} className="bg-white border-4 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 transition-all">
                    <h4 className="font-black uppercase text-xs mb-1 text-emerald-800">{p.label}</h4>
                    <p className="text-xl font-black">{p.value} <span className="text-[10px] opacity-60 font-normal">{p.unit}</span></p>
                    <p className="text-[10px] font-bold opacity-60">{p.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical: The Audit Stack */}
      <section className="py-24 bg-black text-white border-b-4 border-black">
        <div className="max-w-7xl mx-auto px-6">
          <NeoBadge color="lime">AUDIT_TECH_STACK</NeoBadge>
          <h2 className="font-black text-5xl md:text-8xl mt-6 uppercase leading-none italic mb-16">Global Proof.<br/>Local Impact.</h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="border-l-4 border-emerald-500 pl-8 py-4">
              <h3 className="text-3xl font-black uppercase mb-4">01. SMETA Social Audit</h3>
              <p className="text-lg font-['JetBrains_Mono'] opacity-70 leading-relaxed">
                We perform comprehensive 4-pillar audits covering labor, health, safety, and business ethics. Your packaging is manufactured in a facility that respects human rights and fair pay.
              </p>
            </div>

            <div className="border-l-4 border-emerald-500 pl-8 py-4">
              <h3 className="text-3xl font-black uppercase mb-4">02. ISO 14001 EMS</h3>
              <p className="text-lg font-['JetBrains_Mono'] opacity-70 leading-relaxed">
                Verification of a formal Environmental Management System. We track and reduce water usage, energy consumption, and volatile organic compound (VOC) emissions during production.
              </p>
            </div>

            <div className="border-l-4 border-emerald-500 pl-8 py-4">
              <h3 className="text-3xl font-black uppercase mb-4">03. GRS Chain of Custody</h3>
              <p className="text-lg font-['JetBrains_Mono'] opacity-70 leading-relaxed">
                Every shipment of recycled content is accompanied by a Transaction Certificate (TC), proving the post-consumer origin of the resin and the ethical integrity of the recovery process.
              </p>
            </div>

            <div className="border-l-4 border-emerald-500 pl-8 py-4">
              <h3 className="text-3xl font-black uppercase mb-4">04. BRCGS Compliance</h3>
              <p className="text-lg font-['JetBrains_Mono'] opacity-70 leading-relaxed">
                Our manufacturing partners maintain Grade A BRCGS certification, ensuring the highest level of product safety and hygiene for food-grade flexible packaging.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* On-Site Verification Section */}
      <section className="py-24 bg-emerald-50 border-b-4 border-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <NeoBadge color="blue">PHYSICAL_SITE_AUDIT</NeoBadge>
              <h2 className="font-black text-5xl md:text-7xl mt-6 uppercase leading-tight italic">Eyes on the<br/>Factory Floor.</h2>
              <p className="mt-8 text-xl text-gray-700 font-['JetBrains_Mono'] leading-relaxed">
                Digital certificates can be falsified; physical presence cannot. We maintain an <strong>on-the-ground presence</strong> in our primary manufacturing hubs to perform unannounced site visits and physical quality checks. From <strong>ASTM seal-strength testing</strong> to verifying the segregation of recycled and virgin resin stocks, we provide the forensic level of oversight required for enterprise-grade ESG reporting. We don't just trust the paperwork; we verify the process at the micron and the machine level.
              </p>
              <div className="mt-12 space-y-4">
                <div className="bg-white p-6 border-4 border-black flex gap-6 items-center">
                  <ClipboardCheck className="w-12 h-12 flex-shrink-0" />
                  <div>
                    <h4 className="font-black uppercase">Audit Ready</h4>
                    <p className="text-sm opacity-60">Full documentation sets available for your internal compliance and ESG audits.</p>
                  </div>
                </div>
                <div className="bg-white p-6 border-4 border-black flex gap-6 items-center">
                  <ShieldCheck className="w-12 h-12 flex-shrink-0" />
                  <div>
                    <h4 className="font-black uppercase">Risk Mitigation</h4>
                    <p className="text-sm opacity-60">Continuous monitoring of supplier geopolitical and environmental risk profiles.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-neutral-400 translate-x-4 translate-y-4 border-4 border-black" />
              <ClickableImage 
                src="/imgs/seo-photos/a_quality_inspector_checking_pouches_in_factory_9918233.webp" 
                alt="On-site Supplier Verification" 
                className="relative z-10 border-4 border-black w-full shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ: Supplier Intelligence */}
      <section className="py-24 bg-white border-b-4 border-black">
        <div className="max-w-4xl mx-auto px-6">
          <NeoBadge color="magenta">SUPPLIER_FAQ</NeoBadge>
          <h2 className="font-black text-5xl md:text-7xl mt-6 uppercase leading-tight italic mb-12">Expert<br/>Intelligence.</h2>
          <div className="space-y-4">
            {[
              { q: "How do you verify a supplier's GRS claims?", a: "We require Transaction Certificates (TCs) for every batch of resin. These are third-party verified documents that link the specific material in your pouch back to the certified recycler." },
              { q: "What is a SMETA 4-Pillar audit?", a: "It is a comprehensive assessment covering Labor, Health & Safety, Environment, and Business Ethics. It is the global benchmark for social and ethical supply chain accountability." },
              { q: "Can I use your audit data for my ESG report?", a: "Yes. We provide all relevant ISO, BRCGS, and SMETA documentation to our clients to support their annual sustainability and ethics disclosures." },
              { q: "How do you handle non-compliance?", a: "Any supplier failing our physical or documentation audits is immediately placed on a corrective action plan (CAP). Failure to rectify issues results in termination of the partnership." }
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
      <section className="py-24 bg-emerald-950 text-white border-b-4 border-black">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-12">
          <NeoBadge color="lime">VERIFY_MANDATE</NeoBadge>
          <h2 className="font-black text-6xl md:text-9xl uppercase leading-none italic">Trust Pure.<br/>Audit Bold.</h2>
          <p className="font-['JetBrains_Mono'] font-bold text-xl opacity-80 max-w-2xl mx-auto">
            Ready to secure a verified, high-performance sustainable supply chain for your brand? Let's start the audit today.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
            <NeoButton variant="primary" to="/sample" className="!bg-white !text-emerald-950">Request Supplier Audit</NeoButton>
            <NeoButton variant="secondary" className="!border-white !text-white" href="https://calendly.com/30-min-free-packaging-consultancy">
              Speak to an Audit Engineer
            </NeoButton>
          </div>
        </div>
      </section>
    </PouchLayout>
  )
}

export default PouchEcoFriendlySupplierServicePage
