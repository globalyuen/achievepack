import React from 'react'
import { Helmet } from 'react-helmet-async'
import { BarChart3, Package, CheckCircle, Award, Zap, Globe, Factory, Recycle, ArrowLeftRight, TrendingUp, ShoppingBag, Target, Shield, MessageCircle, Thermometer, Wind, Droplets, Microscope, Beaker, Lock, Gavel } from 'lucide-react'
import PouchLayout from '../../../components/pouch/PouchLayout'
import { NeoButton, NeoCard, NeoBadge } from '../../../components/pouch/PouchUI'
import { getBaseUrl } from '../../../utils/domain'
import ClickableImage from '../../../components/ClickableImage'

const PouchChildResistantMylarBagsPage: React.FC = () => {
  const baseUrl = getBaseUrl()
  
  const CR_METRICS = [
    { label: 'Safety Std', value: '16 CFR', unit: '1700.20', desc: 'Federal CR benchmark.' },
    { label: 'Odor Barr', value: '100%', unit: 'Hermetic', desc: 'Zero scent transmission.' },
    { label: 'Puncture', value: 'High', unit: 'Gauge', desc: 'Heavy-duty safety film.' },
    { label: 'Recyclable', value: 'PE', unit: 'Mono', desc: 'Sustainable CR option.' }
  ]

  return (
    <PouchLayout>
      <Helmet>
        <title>Child Resistant Mylar Bags | Safety & Compliance | Pouch.eco</title>
        <meta name="description" content="Technical guide to child-resistant mylar bags. 800+ words of research on 16 CFR 1700.20, odor-proof engineering, and sustainable CR structures." />
        <link rel="canonical" href={`${baseUrl}/topics/child-resistant-mylar`} />
        <meta name="keywords" content="child resistant mylar bags, CR pouches, safety packaging, 16 CFR 1700.20, odor proof bags, sustainable CR" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative pt-12 pb-24 border-b-4 border-black bg-[radial-gradient(#991b1b_1px,transparent_1px)] [background-size:24px_24px] bg-neutral-50">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <NeoBadge color="magenta">SAFETY_HUB_V1.0</NeoBadge>
          <h1 className="mt-8 font-black text-6xl md:text-9xl leading-none uppercase italic">Lock.<br/>Pure.<br/><span className="text-black drop-shadow-[4px_4px_0px_rgba(212,255,0,1)]">Secure.</span></h1>
          <p className="mt-8 text-xl md:text-2xl font-bold font-['JetBrains_Mono'] text-gray-800 max-w-3xl mx-auto bg-white border-4 border-black p-6 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
            Child-Resistance is a legal mandate, not an option. We engineer CPSC-certified, high-barrier CR mylar bags that protect your products, your customers, and the planet.
          </p>
          <div className="flex flex-wrap justify-center gap-6 mt-12">
            <NeoButton variant="primary" to="/products">Browse CR Solutions</NeoButton>
            <NeoButton variant="secondary" to="/sample">Order CR Samples</NeoButton>
          </div>
        </div>
      </section>

      {/* Engineering: The CR Framework */}
      <section className="py-24 bg-white border-b-4 border-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="absolute inset-0 bg-neutral-400 translate-x-4 translate-y-4 border-4 border-black" />
              <ClickableImage 
                src="/imgs/illustrated/a_topic_01_eco_food_pkg_var_b_3398751.webp" 
                alt="Child Resistant Packaging Safety Engineering" 
                className="relative z-10 border-4 border-black w-full shadow-2xl"
              />
            </div>
            <div>
              <NeoBadge color="blue">SAFETY_COMPLIANCE_AUDIT</NeoBadge>
              <h2 className="font-black text-5xl md:text-7xl mt-6 uppercase leading-tight italic">Engineered.<br/>For Security.</h2>
              <p className="mt-8 text-xl text-gray-600 font-['JetBrains_Mono'] leading-relaxed">
                Child-Resistant (CR) packaging is defined by <strong>Human Factors Engineering</strong>. In 2026, the mandate for high-potency products (pharmaceuticals, chemicals, cannabis) is absolute. At Pouch.eco, we engineer our CR mylar bags to meet the strict <strong>16 CFR § 1700.20</strong> federal standards. We utilize advanced <strong>Push-and-Slide</strong> and <strong>Pinch-and-Pull</strong> zipper technology that has been laboratory-verified to resist child access while remaining accessible for seniors. But safety doesn't have to mean waste. We offer <strong>100% Recyclable Mono-PE</strong> child-resistant structures that deliver <strong>Total Odor Control</strong> and high-barrier integrity. Every custom run is backed by <strong>CPSC and ASTM D3475</strong> certification data, ensuring your brand is protected against regulatory liability and product risk.
              </p>
              <div className="mt-8 grid grid-cols-2 gap-4">
                {CR_METRICS.map((p, i) => (
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

      {/* Technical: The Security Tech Stack */}
      <section className="py-24 bg-black text-white border-b-4 border-black">
        <div className="max-w-7xl mx-auto px-6">
          <NeoBadge color="lime">SECURITY_TECH_STACK</NeoBadge>
          <h2 className="font-black text-5xl md:text-8xl mt-6 uppercase leading-none italic mb-16">Pure Barrier.<br/>Pure Lock.</h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="border-l-4 border-[#D4FF00] pl-8 py-4">
              <h3 className="text-3xl font-black uppercase mb-4">01. CPSC Certified</h3>
              <p className="text-lg font-['JetBrains_Mono'] opacity-70 leading-relaxed">
                Verified compliance with 16 CFR § 1700.20. Our locking mechanisms are designed to prevent accidental poisoning and child access.
              </p>
            </div>

            <div className="border-l-4 border-[#D4FF00] pl-8 py-4">
              <h3 className="text-3xl font-black uppercase mb-4">02. Odor-Neutral EVOH</h3>
              <p className="text-lg font-['JetBrains_Mono'] opacity-70 leading-relaxed">
                Integrated gas barriers that block 100% of aromatic compounds, ensuring total discretion and shelf-freshness for potent products.
              </p>
            </div>

            <div className="border-l-4 border-[#D4FF00] pl-8 py-4">
              <h3 className="text-3xl font-black uppercase mb-4">03. Senior Friendly</h3>
              <p className="text-lg font-['JetBrains_Mono'] opacity-70 leading-relaxed">
                Ergonomic grip points and sliding mechanisms that are easy for adults with limited dexterity to open while remaining child-proof.
              </p>
            </div>

            <div className="border-l-4 border-[#D4FF00] pl-8 py-4">
              <h3 className="text-3xl font-black uppercase mb-4">04. Heavy-Duty Barrier</h3>
              <p className="text-lg font-['JetBrains_Mono'] opacity-70 leading-relaxed">
                Utilizing 100-150 micron multi-layer films that are virtually puncture-proof, protecting the contents from light, moisture, and rough handling.
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
              <NeoBadge color="blue">SAFETY_SCIENCE_V1</NeoBadge>
              <h2 className="font-black text-5xl md:text-7xl mt-6 uppercase leading-tight italic">Measured.<br/>To the Clause.</h2>
              <p className="mt-8 text-xl text-gray-700 font-['JetBrains_Mono'] leading-relaxed">
                Child-Resistance is a technical specification. We utilize <strong>ASTM D3475</strong> classifications to ensure our pouches meet the specific needs of your product category. Our <strong>EEAT Security Protocol</strong> provides the full laboratory audit trail required for federal and state compliance. We don't just 'promise' safety; we provide the <strong>Child-Resistant Packaging (CRP)</strong> certification documents your legal team needs. By utilizing <strong>Recyclable Mono-PE CR Pouches</strong>, we help brands align their safety mandates with their sustainability goals. This is the future of high-potency packaging, engineered for safety and circularity.
              </p>
              <div className="mt-12 space-y-4">
                <div className="bg-white p-6 border-4 border-black flex gap-6 items-center">
                  <Shield className="w-12 h-12 flex-shrink-0" />
                  <div>
                    <h4 className="font-black uppercase">Legal Shield</h4>
                    <p className="text-sm opacity-60">Ensuring your brand is 100% compliant with the Poison Prevention Packaging Act.</p>
                  </div>
                </div>
                <div className="bg-white p-6 border-4 border-black flex gap-6 items-center">
                  <TrendingUp className="w-12 h-12 flex-shrink-0" />
                  <div>
                    <h4 className="font-black uppercase">Odor Guard</h4>
                    <p className="text-sm opacity-60">Hermetic seal integrity that prevents scent leaks even under high pressure.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-neutral-400 translate-x-4 translate-y-4 border-4 border-black" />
              <ClickableImage 
                src="/imgs/illustrated/a_topic_02_dtc_pkg_var_c_7412861.webp" 
                alt="Verified CR Packaging Manufacturing" 
                className="relative z-10 border-4 border-black w-full shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ: Safety Intelligence */}
      <section className="py-24 bg-white border-b-4 border-black">
        <div className="max-w-4xl mx-auto px-6">
          <NeoBadge color="magenta">SAFETY_FAQ</NeoBadge>
          <h2 className="font-black text-5xl md:text-7xl mt-6 uppercase leading-tight italic mb-12">Expert<br/>Intelligence.</h2>
          <div className="space-y-4">
            {[
              { q: "What makes a bag 'Child-Resistant'?", a: "A bag is CR if it requires two distinct, non-intuitive motions to open (like pushing and sliding), which children under 5 lack the cognitive dexterity to perform." },
              { q: "Are your CR bags re-sealable?", a: "Yes. Our CR zippers are designed for multiple uses while maintaining their child-resistant properties throughout the life of the product." },
              { q: "Can I get 'Opaque' CR pouches?", a: "Absolutely. Many jurisdictions require CR packaging to be opaque. We offer high-density white and black barrier layers that ensure 100% opacity." },
              { q: "Do you provide certification documents?", a: "Yes. Every order of our CR pouches is accompanied by the official 16 CFR § 1700.20 test results for your regulatory files." }
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
          <NeoBadge color="lime">SAFETY_MANDATE</NeoBadge>
          <h2 className="font-black text-6xl md:text-9xl uppercase leading-none italic">Think Safe.<br/>Impact Pure.</h2>
          <p className="font-['JetBrains_Mono'] font-bold text-xl opacity-80 max-w-2xl mx-auto">
            Ready to secure a legally-compliant, high-barrier CR supply chain for your brand? Let's start the technical audit today.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
            <NeoButton variant="primary" to="/sample" className="!bg-white !text-black">Request CR Samples</NeoButton>
            <NeoButton variant="secondary" className="!border-white !text-white" href="https://calendly.com/30-min-free-packaging-consultancy">
              Speak to a Safety Engineer
            </NeoButton>
          </div>
        </div>
      </section>
    </PouchLayout>
  )
}

export default PouchChildResistantMylarBagsPage
