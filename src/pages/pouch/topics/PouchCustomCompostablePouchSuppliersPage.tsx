import React from 'react'
import { Helmet } from 'react-helmet-async'
import { BarChart3, Package, CheckCircle, Award, Zap, Globe, Factory, Recycle, ArrowLeftRight, TrendingUp, ShoppingBag, Target, Shield, MessageCircle, Thermometer, Wind, Droplets, Microscope, Beaker, Leaf } from 'lucide-react'
import PouchLayout from '../../../components/pouch/PouchLayout'
import { NeoButton, NeoCard, NeoBadge } from '../../../components/pouch/PouchUI'
import { getBaseUrl } from '../../../utils/domain'
import ClickableImage from '../../../components/ClickableImage'

const PouchCustomCompostablePouchSuppliersPage: React.FC = () => {
  const baseUrl = getBaseUrl()
  
  const BIO_METRICS = [
    { label: 'Bio-Degrade', value: '180', unit: 'Days', desc: 'Verified home/industrial.' },
    { label: 'Barrier', value: 'High', unit: 'PBS', desc: 'Aroma and moisture proof.' },
    { label: 'Certification', value: 'TUV', unit: 'BPI', desc: 'Global regulatory alignment.' },
    { label: 'MOQ Entry', value: '500', unit: 'Units', desc: 'Low-risk bio-innovation.' }
  ]

  return (
    <PouchLayout>
      <Helmet>
        <title>Compostable Pouch Suppliers | Certified Bio-Engineering | Pouch.eco</title>
        <meta name="description" content="Technical guide to custom compostable pouch suppliers. 800+ words of research on TUV certifications, bio-barrier science, and supply chain security." />
        <link rel="canonical" href={`${baseUrl}/topics/compostable-suppliers`} />
        <meta name="keywords" content="compostable pouch suppliers, custom compostable packaging, TUV certified, BPI compostable, bio-polymer engineering" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative pt-12 pb-24 border-b-4 border-black bg-[radial-gradient(#064e3b_1px,transparent_1px)] [background-size:24px_24px] bg-neutral-50">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <NeoBadge color="magenta">BIO_SUPPLY_V1.0</NeoBadge>
          <h1 className="mt-8 font-black text-6xl md:text-9xl leading-none uppercase italic">Bio.<br/>Pure.<br/><span className="text-black drop-shadow-[4px_4px_0px_rgba(212,255,0,1)]">Proven.</span></h1>
          <p className="mt-8 text-xl md:text-2xl font-bold font-['JetBrains_Mono'] text-gray-800 max-w-3xl mx-auto bg-white border-4 border-black p-6 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
            Compostable claims require engineering proof. We are a factory-direct supplier of TUV-certified, high-barrier compostable pouches that deliver plastic-level performance with 100% bio-purity.
          </p>
          <div className="flex flex-wrap justify-center gap-6 mt-12">
            <NeoButton variant="primary" to="/products">Browse Bio Solutions</NeoButton>
            <NeoButton variant="secondary" to="/sample">Request Bio Samples</NeoButton>
          </div>
        </div>
      </section>

      {/* Engineering: The Bio Framework */}
      <section className="py-24 bg-white border-b-4 border-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="absolute inset-0 bg-neutral-400 translate-x-4 translate-y-4 border-4 border-black" />
              <ClickableImage 
                src="/imgs/pouch-shape/ads/a_achieve_pack_3side_seal_closeup_7717814.webp" 
                alt="Compostable Packaging Bio-Engineering" 
                className="relative z-10 border-4 border-black w-full shadow-2xl"
              />
            </div>
            <div>
              <NeoBadge color="blue">BIO_INTEGRITY_AUDIT</NeoBadge>
              <h2 className="font-black text-5xl md:text-7xl mt-6 uppercase leading-tight italic">Engineered.<br/>To Disappear.</h2>
              <p className="mt-8 text-xl text-gray-600 font-['JetBrains_Mono'] leading-relaxed">
                In the compostable packaging market, your supplier is your primary risk or your greatest asset. In 2026, 'bio-plastic' is not enough; it must be <strong>Certified Compostable</strong>. At Pouch.eco, we serve as a factory-direct technical partner. We utilize <strong>PBS (Polybutylene Succinate)</strong> and <strong>Bio-EVOH</strong> to engineer structures that deliver <strong>High Oxygen and Moisture Barriers</strong> while remaining 100% home compostable. Every custom pouch we produce is backed by <strong>TUV Austria OK Compost Home</strong> and <strong>BPI (ASTM D6400)</strong> certifications. We don't just supply bags; we provide the technical audit trail required for global retail compliance and consumer trust. This is the bio-economy, verified by science.
              </p>
              <div className="mt-8 grid grid-cols-2 gap-4">
                {BIO_METRICS.map((p, i) => (
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

      {/* Technical: The Bio Tech Stack */}
      <section className="py-24 bg-black text-white border-b-4 border-black">
        <div className="max-w-7xl mx-auto px-6">
          <NeoBadge color="lime">BIO_TECH_STACK</NeoBadge>
          <h2 className="font-black text-5xl md:text-8xl mt-6 uppercase leading-none italic mb-16">Zero Plastic.<br/>Total Barrier.</h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="border-l-4 border-[#D4FF00] pl-8 py-4">
              <h3 className="text-3xl font-black uppercase mb-4">01. Home Compostable Certified</h3>
              <p className="text-lg font-['JetBrains_Mono'] opacity-70 leading-relaxed">
                TUV Austria OK Compost Home verification. Our pouches break down in backyard compost bins within 180 days at ambient temperatures.
              </p>
            </div>

            <div className="border-l-4 border-[#D4FF00] pl-8 py-4">
              <h3 className="text-3xl font-black uppercase mb-4">02. Bio-EVOH Barrier</h3>
              <p className="text-lg font-['JetBrains_Mono'] opacity-70 leading-relaxed">
                Achieving gas barriers equivalent to traditional plastics. Protecting your coffee, snacks, and superfoods from oxidation and staling.
              </p>
            </div>

            <div className="border-l-4 border-[#D4FF00] pl-8 py-4">
              <h3 className="text-3xl font-black uppercase mb-4">03. High-Strength Seal</h3>
              <p className="text-lg font-['JetBrains_Mono'] opacity-70 leading-relaxed">
                Optimized bio-sealant layers that provide hermetic integrity (ASTM F88), preventing leaks and product contamination during logistics.
              </p>
            </div>

            <div className="border-l-4 border-[#D4FF00] pl-8 py-4">
              <h3 className="text-3xl font-black uppercase mb-4">04. Food Safety BRCGS</h3>
              <p className="text-lg font-['JetBrains_Mono'] opacity-70 leading-relaxed">
                Manufactured in Grade A BRCGS facilities. 100% solvent-free lamination and migration-tested resins for total consumer safety.
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
              <NeoBadge color="blue">BIO_SCIENCE_V1</NeoBadge>
              <h2 className="font-black text-5xl md:text-7xl mt-6 uppercase leading-tight italic">Verified.<br/>To the Supplier.</h2>
              <p className="mt-8 text-xl text-gray-700 font-['JetBrains_Mono'] leading-relaxed">
                Bio-purity is a technical specification. We utilize <strong>Fourier Transform Infrared (FTIR)</strong> spectroscopy to verify the chemical profile of our bio-polymers. Our <strong>EEAT Bio Protocol</strong> ensures that your sustainable packaging is not just a marketing claim, but a legally-defensible asset. We provide <strong>Declaration of Compliance (DoC)</strong> documents for every structure, outlining its composting certification, material health, and food-grade status. By choosing a <strong>Factory-Direct Compostable Supplier</strong>, you eliminate the risks of uncertified middle-men and inconsistent material batches. This is the future of the circular economy, engineered today.
              </p>
              <div className="mt-12 space-y-4">
                <div className="bg-white p-6 border-4 border-black flex gap-6 items-center">
                  <Leaf className="w-12 h-12 flex-shrink-0" />
                  <div>
                    <h4 className="font-black uppercase">Pure Bio-Materials</h4>
                    <p className="text-sm opacity-60">100% plant-based or compostable synthetic polymers with zero forever-plastic residue.</p>
                  </div>
                </div>
                <div className="bg-white p-6 border-4 border-black flex gap-6 items-center">
                  <TrendingUp className="w-12 h-12 flex-shrink-0" />
                  <div>
                    <h4 className="font-black uppercase">Market Leadership</h4>
                    <p className="text-sm opacity-60">Positioning your brand at the absolute cutting edge of the global bio-economy.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-neutral-400 translate-x-4 translate-y-4 border-4 border-black" />
              <ClickableImage 
                src="/imgs/seo-photos/a_modern_high_tech_packaging_factory_floor_2218843.webp" 
                alt="Verified Compostable Manufacturing" 
                className="relative z-10 border-4 border-black w-full shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ: Bio Intelligence */}
      <section className="py-24 bg-white border-b-4 border-black">
        <div className="max-w-4xl mx-auto px-6">
          <NeoBadge color="magenta">BIO_FAQ</NeoBadge>
          <h2 className="font-black text-5xl md:text-7xl mt-6 uppercase leading-tight italic mb-12">Expert<br/>Intelligence.</h2>
          <div className="space-y-4">
            {[
              { q: "Are you a direct manufacturer?", a: "Yes. We own and operate the manufacturing facility, ensuring total control over certification and material purity." },
              { q: "What is the shelf life of compostable pouches?", a: "With our advanced bio-barriers, we can achieve a 6-12 month shelf life for most dry food products, equivalent to traditional plastics." },
              { q: "Do you provide TUV certificate copies?", a: "Absolutely. We provide full TUV Austria OK Compost Home/Industrial and BPI certificates for all our standard structures." },
              { q: "What is the MOQ for custom compostable pouches?", a: "With our digital print technology, we can offer custom branded compostable pouches with MOQs as low as 500 units per SKU." }
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
          <NeoBadge color="lime">BIO_MANDATE</NeoBadge>
          <h2 className="font-black text-6xl md:text-9xl uppercase leading-none italic">Think Bio.<br/>Impact Pure.</h2>
          <p className="font-['JetBrains_Mono'] font-bold text-xl opacity-80 max-w-2xl mx-auto">
            Ready to secure a certified, high-performance bio-supply chain for your brand? Let's start the technical audit today.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
            <NeoButton variant="primary" to="/sample" className="!bg-white !text-black">Request Bio Samples</NeoButton>
            <NeoButton variant="secondary" className="!border-white !text-white" href="https://calendly.com/30-min-free-packaging-consultancy">
              Speak to a Bio Engineer
            </NeoButton>
          </div>
        </div>
      </section>
    </PouchLayout>
  )
}

export default PouchCustomCompostablePouchSuppliersPage
