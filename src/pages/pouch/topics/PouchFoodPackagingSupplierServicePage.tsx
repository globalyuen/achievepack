import React from 'react'
import { Helmet } from 'react-helmet-async'
import { BarChart3, Package, CheckCircle, Award, Zap, Globe, Factory, Recycle, ArrowLeftRight, TrendingUp, ShoppingBag, Target, Shield, MessageCircle, Thermometer, Wind, Droplets, Microscope, Beaker, Truck, Utensils  , Layers } from 'lucide-react'
import PouchLayout from '../../../components/pouch/PouchLayout'
import { NeoButton, NeoCard, NeoBadge } from '../../../components/pouch/PouchUI'
import { getBaseUrl } from '../../../utils/domain'
import ClickableImage from '../../../components/ClickableImage'

const PouchFoodPackagingSupplierServicePage: React.FC = () => {
  const baseUrl = getBaseUrl()
  
  const SUPPLIER_METRICS = [
    { label: 'Audit Score', value: 'Grade A', unit: 'BRCGS', desc: 'Global hygiene and safety standard.' },
    { label: 'MOQ Minimum', value: '500', unit: 'Units', desc: 'Low-threshold digital production.' },
    { label: 'Lead Time', value: '21', unit: 'Days', desc: 'Average turnaround for digital SKUs.' },
    { label: 'Compliance', value: '100%', unit: 'DoC', desc: 'Full Declaration of Compliance docs.' }
  ]

  return (
    <PouchLayout>
      <Helmet>
        <title>Food Packaging Supplier | Technical Engineering & Scale | Pouch.eco</title>
        <meta name="description" content="Technical guide to choosing a food packaging supplier. 800+ words of research on BRCGS compliance, factory-direct manufacturing, and supply chain security." />
        <link rel="canonical" href={`${baseUrl}/topics/food-packaging-supplier`} />
        <meta name="keywords" content="food packaging supplier, packaging manufacturer, BRCGS certified, factory direct pouches, circular economy supply chain" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative pt-12 pb-24 border-b-4 border-black bg-[radial-gradient(#7c2d12_1px,transparent_1px)] [background-size:24px_24px] bg-neutral-50">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <NeoBadge color="magenta">SUPPLIER_TECH_V1.0</NeoBadge>
          <h1 className="mt-8 font-black text-6xl md:text-9xl leading-none uppercase italic">Scale.<br/>Pure.<br/><span className="text-black drop-shadow-[4px_4px_0px_rgba(212,255,0,1)]">Direct.</span></h1>
          <p className="mt-8 text-xl md:text-2xl font-bold font-['JetBrains_Mono'] text-gray-800 max-w-3xl mx-auto bg-white border-4 border-black p-6 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
            A supplier is a technical partner, not a middleman. We provide direct-to-factory packaging solutions with BRCGS-certified manufacturing and 100% material traceability.
          </p>
          <div className="flex flex-wrap justify-center gap-6 mt-12">
            <NeoButton variant="primary" to="/products">Browse Factory Solutions</NeoButton>
            <NeoButton variant="secondary" to="/sample">Request Audit Data</NeoButton>
          </div>
        </div>
      </section>

      {/* Engineering: The Supplier Framework */}
      <section className="py-24 bg-white border-b-4 border-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="absolute inset-0 bg-neutral-400 translate-x-4 translate-y-4 border-4 border-black" />
              <ClickableImage 
                src="/imgs/seo-photos/a_modern_high_tech_packaging_factory_floor_2218843.webp" 
                alt="High-Tech Food Packaging Manufacturing" 
                className="relative z-10 border-4 border-black w-full shadow-2xl"
              />
            </div>
            <div>
              <NeoBadge color="blue">SUPPLY_CHAIN_AUDIT</NeoBadge>
              <h2 className="font-black text-5xl md:text-7xl mt-6 uppercase leading-tight italic">Verified.<br/>To the Source.</h2>
              <p className="mt-8 text-xl text-gray-600 font-['JetBrains_Mono'] leading-relaxed">
                In a regulated market, your supplier's certifications are your brand's shield. We operate vertically integrated manufacturing facilities that are <strong>BRCGS Global Standard for Packaging Materials (Grade A)</strong> certified. This ensures that every pouch is produced in a sterile, audited environment with 100% traceability from resin to finished bag. By working <strong>Direct-to-Factory</strong>, you eliminate middleman margins and gain direct access to our <strong>Material Science</strong> lab, allowing for rapid prototyping of high-barrier, sustainable structures (Mono-PE, PCR, and Compostable) that meet the strictest food safety standards of 2026.
              </p>
              <div className="mt-8 grid grid-cols-2 gap-4">
                {SUPPLIER_METRICS.map((p, i) => (
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

      {/* Technical: The Manufacturing Stack */}
      <section className="py-24 bg-black text-white border-b-4 border-black">
        <div className="max-w-7xl mx-auto px-6">
          <NeoBadge color="lime">FACTORY_TECH_STACK</NeoBadge>
          <h2 className="font-black text-5xl md:text-8xl mt-6 uppercase leading-none italic mb-16">Massive Scale.<br/>Nano Precision.</h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="border-l-4 border-[#D4FF00] pl-8 py-4">
              <h3 className="text-3xl font-black uppercase mb-4">01. Co-Extrusion Tech</h3>
              <p className="text-lg font-['JetBrains_Mono'] opacity-70 leading-relaxed">
                Our multi-layer extrusion lines can integrate up to 9 layers of polymers, including EVOH and PA, for extreme shelf-life preservation without bulk.
              </p>
            </div>

            <div className="border-l-4 border-[#D4FF00] pl-8 py-4">
              <h3 className="text-3xl font-black uppercase mb-4">02. HP Indigo 25K Digital</h3>
              <p className="text-lg font-['JetBrains_Mono'] opacity-70 leading-relaxed">
                Precision digital printing with 100% solvent-free inks. Ideal for low-MOQ multi-SKU food brands requiring rapid speed-to-market.
              </p>
            </div>

            <div className="border-l-4 border-[#D4FF00] pl-8 py-4">
              <h3 className="text-3xl font-black uppercase mb-4">03. Automated Converting</h3>
              <p className="text-lg font-['JetBrains_Mono'] opacity-70 leading-relaxed">
                High-speed bag-making with in-line zipper and valve insertion, ensuring zero human contact and 100% hermetic seal integrity.
              </p>
            </div>

            <div className="border-l-4 border-[#D4FF00] pl-8 py-4">
              <h3 className="text-3xl font-black uppercase mb-4">04. Global Logistics</h3>
              <p className="text-lg font-['JetBrains_Mono'] opacity-70 leading-relaxed">
                DDP (Delivered Duty Paid) shipping to major hubs worldwide. We manage the complexity of customs and duties so you receive your order at your door.
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
              <NeoBadge color="blue">QUALITY_SCIENCE_V1</NeoBadge>
              <h2 className="font-black text-5xl md:text-7xl mt-6 uppercase leading-tight italic">Measured.<br/>To the Pouch.</h2>
              <p className="mt-8 text-xl text-gray-700 font-['JetBrains_Mono'] leading-relaxed">
                Quality is a technical specification, not a promise. Every batch of our food packaging undergoes rigorous <strong>ASTM testing</strong> for seal strength, puncture resistance, and COF (Coefficient of Friction). We provide <strong>Declaration of Compliance (DoC)</strong> documents and <strong>Specific Migration Limit (SML)</strong> data to ensure your brand is 100% legally compliant in the US, EU, and beyond. As your technical supplier, we don't just deliver bags; we deliver <strong>Shelf-Life Certainty</strong> and <strong>Regulatory Security</strong> for your most critical food products.
              </p>
              <div className="mt-12 space-y-4">
                <div className="bg-white p-6 border-4 border-black flex gap-6 items-center">
                  <Microscope className="w-12 h-12 flex-shrink-0" />
                  <div>
                    <h4 className="font-black uppercase">Lab Verified</h4>
                    <p className="text-sm opacity-60">Tested for OTR, WVTR, and seal integrity on every custom production run.</p>
                  </div>
                </div>
                <div className="bg-white p-6 border-4 border-black flex gap-6 items-center">
                  <Truck className="w-12 h-12 flex-shrink-0" />
                  <div>
                    <h4 className="font-black uppercase">Traceable Supply</h4>
                    <p className="text-sm opacity-60">Full resin-to-pouch traceability for complete food safety and recall security.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-neutral-400 translate-x-4 translate-y-4 border-4 border-black" />
              <ClickableImage 
                src="/imgs/pouch-shape/ads/a_achieve_pack_structure_overview_7409393.webp" 
                alt="Verified Supplier Manufacturing" 
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
              { q: "What is your BRCGS audit score?", a: "We consistently maintain a Grade A rating, the highest standard for food-grade packaging safety and manufacturing hygiene." },
              { q: "Do you offer DDP shipping?", a: "Yes. We handle all logistics, customs, and duties to deliver your packaging directly to your warehouse with no hidden fees." },
              { q: "Can I audit your factory in person?", a: "Absolutely. We encourage on-site audits for enterprise clients and provide full transparency into our QA/QC protocols and manufacturing lines." },
              { q: "Do you provide design support?", a: "Yes. Our technical team can assist with die-line creation, file preparation, and ensuring your artwork meets legal requirements for eco-labeling." }
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
          <NeoBadge color="lime">FACTORY_MANDATE</NeoBadge>
          <h2 className="font-black text-6xl md:text-9xl uppercase leading-none italic">Build Bold.<br/>Direct Power.</h2>
          <p className="font-['JetBrains_Mono'] font-bold text-xl opacity-80 max-w-2xl mx-auto">
            Ready to secure a technical, factory-direct supply chain for your brand? Let's start the audit today.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
            <NeoButton variant="primary" to="/sample" className="!bg-white !text-black">Request Factory Audit</NeoButton>
            <NeoButton variant="secondary" className="!border-white !text-white" href="https://calendly.com/30-min-free-packaging-consultancy">
              Speak to a Supply Engineer
            </NeoButton>
          </div>
        </div>
      </section>
    </PouchLayout>
  )
}

export default PouchFoodPackagingSupplierServicePage
