import React from 'react'
import { Helmet } from 'react-helmet-async'
import { BarChart3, Package, CheckCircle, Award, Zap, Globe, Factory, Recycle, ArrowLeftRight, TrendingUp, ShoppingBag, Target, Shield, MessageCircle, Thermometer, Wind, Droplets, Microscope, Beaker, Heart, Baby } from 'lucide-react'
import PouchLayout from '../../../components/pouch/PouchLayout'
import { NeoButton, NeoCard, NeoBadge } from '../../../components/pouch/PouchUI'
import { getBaseUrl } from '../../../utils/domain'
import ClickableImage from '../../../components/ClickableImage'

const PouchCompostableBabyFoodBagsPage: React.FC = () => {
  const baseUrl = getBaseUrl()
  
  const BABY_METRICS = [
    { label: 'Microplastic', value: 'Zero', unit: 'PPM', desc: 'Verified 100% bio-pure.' },
    { label: 'Chemicals', value: 'BPA', unit: 'PFAS', desc: 'Resin-certified non-toxic.' },
    { label: 'Shelf Life', value: '12', unit: 'Months', desc: 'Bio-EVOH barrier parity.' },
    { label: 'Safety Cap', value: 'Anti', unit: 'Choke', desc: 'Exceeding child safety law.' }
  ]

  return (
    <PouchLayout>
      <Helmet>
        <title>Compostable Baby Food Bags | Pure Safety Hub | Pouch.eco</title>
        <meta name="description" content="Technical guide to compostable baby food packaging. 800+ words of research on zero-microplastics, non-toxic barriers, and infant safety engineering." />
        <link rel="canonical" href={`${baseUrl}/topics/compostable-baby-food`} />
        <meta name="keywords" content="compostable baby food bags, baby food pouches, non-toxic packaging, microplastic free, safe spouts, bio-polymer pouches" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative pt-12 pb-24 border-b-4 border-black bg-[radial-gradient(#be185d_1px,transparent_1px)] [background-size:24px_24px] bg-neutral-50">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <NeoBadge color="magenta">BABY_SAFETY_V1.0</NeoBadge>
          <h1 className="mt-8 font-black text-6xl md:text-9xl leading-none uppercase italic">Pure.<br/>Safe.<br/><span className="text-black drop-shadow-[4px_4px_0px_rgba(212,255,0,1)]">Future.</span></h1>
          <p className="mt-8 text-xl md:text-2xl font-bold font-['JetBrains_Mono'] text-gray-800 max-w-3xl mx-auto bg-white border-4 border-black p-6 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
            Infant health demands zero compromise. We engineer compostable baby food pouches that are free from microplastics, PFAS, and BPA—delivering absolute purity for the next generation.
          </p>
          <div className="flex flex-wrap justify-center gap-6 mt-12">
            <NeoButton variant="primary" to="/products">Browse Safety Styles</NeoButton>
            <NeoButton variant="secondary" to="/sample">Request Safety Audit</NeoButton>
          </div>
        </div>
      </section>

      {/* Engineering: The Baby Framework */}
      <section className="py-24 bg-white border-b-4 border-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="absolute inset-0 bg-neutral-400 translate-x-4 translate-y-4 border-4 border-black" />
              <ClickableImage 
                src="/imgs/illustrated/a_topic_01_eco_food_pkg_var_b_3398751.webp" 
                alt="Baby Food Packaging Safety Engineering" 
                className="relative z-10 border-4 border-black w-full shadow-2xl"
              />
            </div>
            <div>
              <NeoBadge color="blue">MATERIAL_PURITY_AUDIT</NeoBadge>
              <h2 className="font-black text-5xl md:text-7xl mt-6 uppercase leading-tight italic">Engineered.<br/>For Safety.</h2>
              <p className="mt-8 text-xl text-gray-600 font-['JetBrains_Mono'] leading-relaxed">
                Baby food is the most chemically sensitive category in the global supply chain. In 2026, parents are no longer accepting 'traditional' plastic pouches that shed microplastics or contain endocrine disruptors. At Pouch.eco, we treat baby food packaging as a <strong>Technical Medical Deliverable</strong>. We utilize <strong>100% Compostable Bio-Polymers</strong> (PBS/Bio-EVOH) that are verified to be <strong>PFAS-Free</strong> and <strong>BPA-Free</strong>. Every structure undergoes rigorous <strong>Migration Testing</strong> (EU 10/2011) to ensure zero chemical transfer to the infant's nutrition. Our spouts are made from <strong>Sugarcane-derived Bio-PE</strong>, featuring anti-choke, tamper-evident caps that exceed global child safety standards. This is the highest level of food safety, engineered for the most important consumers on Earth.
              </p>
              <div className="mt-8 grid grid-cols-2 gap-4">
                {BABY_METRICS.map((p, i) => (
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

      {/* Technical: The Safety Tech Stack */}
      <section className="py-24 bg-black text-white border-b-4 border-black">
        <div className="max-w-7xl mx-auto px-6">
          <NeoBadge color="lime">SAFETY_TECH_STACK</NeoBadge>
          <h2 className="font-black text-5xl md:text-8xl mt-6 uppercase leading-none italic mb-16">Zero Toxins.<br/>Total Pure.</h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="border-l-4 border-[#D4FF00] pl-8 py-4">
              <h3 className="text-3xl font-black uppercase mb-4">01. Zero Microplastics</h3>
              <p className="text-lg font-['JetBrains_Mono'] opacity-70 leading-relaxed">
                Utilizing high-purity bio-polymers that break down into organic matter, eliminating the risk of plastic ingestion for infants.
              </p>
            </div>

            <div className="border-l-4 border-[#D4FF00] pl-8 py-4">
              <h3 className="text-3xl font-black uppercase mb-4">02. PFAS-Free Barriers</h3>
              <p className="text-lg font-['JetBrains_Mono'] opacity-70 leading-relaxed">
                Certified grease and moisture barriers that contain zero forever-chemicals, meeting California AB 1200 standards.
              </p>
            </div>

            <div className="border-l-4 border-[#D4FF00] pl-8 py-4">
              <h3 className="text-3xl font-black uppercase mb-4">03. Bio-EVOH Aroma Protect</h3>
              <p className="text-lg font-['JetBrains_Mono'] opacity-70 leading-relaxed">
                Achieving gas barriers equivalent to aluminum foil. Protecting the vitamins and nutrients in purees for up to 12 months.
              </p>
            </div>

            <div className="border-l-4 border-[#D4FF00] pl-8 py-4">
              <h3 className="text-3xl font-black uppercase mb-4">04. Anti-Choke Fitments</h3>
              <p className="text-lg font-['JetBrains_Mono'] opacity-70 leading-relaxed">
                Ergonomic spouts and oversized, ventilated caps designed to prevent choking hazards and ensure effortless feeding.
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
              <h2 className="font-black text-5xl md:text-7xl mt-6 uppercase leading-tight italic">Measured.<br/>To the Child.</h2>
              <p className="mt-8 text-xl text-gray-700 font-['JetBrains_Mono'] leading-relaxed">
                Purity is a technical specification. We utilize <strong>GC-MS (Gas Chromatography-Mass Spectrometry)</strong> to verify that every custom structure is free from chemical migrants. Our <strong>EEAT Infant Safety Protocol</strong> ensures that your brand is protected against the rising wave of microplastic and chemical litigation. We provide <strong>Declaration of Compliance (DoC)</strong> documents that outline the full material stack and safety profile of your packaging. By choosing <strong>Certified Compostable Baby Food Pouches</strong>, you align your product with the highest level of health-conscious and planet-conscious consumerism.
              </p>
              <div className="mt-12 space-y-4">
                <div className="bg-white p-6 border-4 border-black flex gap-6 items-center">
                  <Shield className="w-12 h-12 flex-shrink-0" />
                  <div>
                    <h4 className="font-black uppercase">Toxin Shield</h4>
                    <p className="text-sm opacity-60">Verified 0ppm organic fluorine and zero endocrine disruptors.</p>
                  </div>
                </div>
                <div className="bg-white p-6 border-4 border-black flex gap-6 items-center">
                  <TrendingUp className="w-12 h-12 flex-shrink-0" />
                  <div>
                    <h4 className="font-black uppercase">Market Trust</h4>
                    <p className="text-sm opacity-60">Positioning your brand as the gold standard for infant safety and sustainability.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-neutral-400 translate-x-4 translate-y-4 border-4 border-black" />
              <ClickableImage 
                src="/imgs/illustrated/a_topic_02_dtc_pkg_var_c_7412861.webp" 
                alt="Verified Baby Food Packaging Manufacturing" 
                className="relative z-10 border-4 border-black w-full shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ: Baby Intelligence */}
      <section className="py-24 bg-white border-b-4 border-black">
        <div className="max-w-4xl mx-auto px-6">
          <NeoBadge color="magenta">BABY_FAQ</NeoBadge>
          <h2 className="font-black text-5xl md:text-7xl mt-6 uppercase leading-tight italic mb-12">Expert<br/>Intelligence.</h2>
          <div className="space-y-4">
            {[
              { q: "Are your pouches truly microplastic-free?", a: "Yes. Our compostable bio-polymers break down into organic matter, meaning they never break into microplastics during disposal or use." },
              { q: "What is your stance on PFAS?", a: "We have a 100% zero-PFAS policy. All our grease barriers are made from aqueous-based bio-polymers that are resin-certified safe." },
              { q: "Can these pouches be heated?", a: "We recommend gentle warming. Because they are metal-free, they are technically microwave-safe, but always check food temperature before feeding." },
              { q: "Do you offer anti-choke caps as standard?", a: "Yes. All our baby food spouts come with oversized, ventilated caps that meet the strictest global infant safety regulations." }
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
          <NeoBadge color="lime">BABY_MANDATE</NeoBadge>
          <h2 className="font-black text-6xl md:text-9xl uppercase leading-none italic">Think Safe.<br/>Impact Pure.</h2>
          <p className="font-['JetBrains_Mono'] font-bold text-xl opacity-80 max-w-2xl mx-auto">
            Ready to secure a non-toxic, sustainable supply chain for your baby food brand? Let's start the technical audit today.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
            <NeoButton variant="primary" to="/sample" className="!bg-white !text-black">Order Safety Samples</NeoButton>
            <NeoButton variant="secondary" className="!border-white !text-white" href="https://calendly.com/30-min-free-packaging-consultancy">
              Speak to a Safety Engineer
            </NeoButton>
          </div>
        </div>
      </section>
    </PouchLayout>
  )
}

export default PouchCompostableBabyFoodBagsPage
