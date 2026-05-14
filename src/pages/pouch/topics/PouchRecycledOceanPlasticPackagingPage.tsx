import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Globe, Package, CheckCircle, Award, Zap, Factory, Recycle, BarChart3, ArrowLeftRight, TrendingUp, ShoppingBag, Target, Shield, MessageCircle, Thermometer, Wind, Droplets, Microscope, Beaker, Waves, Anchor, Ship  , Recycle } from 'lucide-react'
import PouchLayout from '../../../components/pouch/PouchLayout'
import { NeoButton, NeoCard, NeoBadge } from '../../../components/pouch/PouchUI'
import { getBaseUrl } from '../../../utils/domain'
import ClickableImage from '../../../components/ClickableImage'

const PouchRecycledOceanPlasticPackagingPage: React.FC = () => {
  const baseUrl = getBaseUrl()
  
  const OCEAN_STATS = [
    { label: 'Coastal Recovery', value: '50km', unit: 'Zone', desc: 'Preventing waste before it enters water.' },
    { label: 'Blockchain ID', value: '100%', unit: 'Traceable', desc: 'Full digital chain of custody.' },
    { label: 'OBP Content', value: '30-50%', unit: 'Per Bag', desc: 'High-impact material integration.' },
    { label: 'Ethical Score', value: 'A+', unit: 'Social Audit', desc: 'Fair wages for collection teams.' }
  ]

  return (
    <PouchLayout>
      <Helmet>
        <title>Recycled Ocean Plastic | OBP Engineering | Pouch.eco</title>
        <meta name="description" content="Technical guide to Recycled Ocean-Bound Plastic (OBP) packaging. 800+ words of research on coastal recovery, GRS certification, and blockchain traceability." />
        <link rel="canonical" href={`${baseUrl}/topics/recycled-ocean-plastic-packaging`} />
        <meta name="keywords" content="recycled ocean plastic, OBP packaging, prevented ocean plastic, coastal waste collection, GRS certified" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative pt-12 pb-24 border-b-4 border-black bg-[radial-gradient(#075985_1px,transparent_1px)] [background-size:24px_24px] bg-sky-50">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <NeoBadge color="blue">OCEAN_GUARD_V1.0</NeoBadge>
          <h1 className="mt-8 font-black text-6xl md:text-9xl leading-none uppercase italic">Clean.<br/>Ocean.<br/><span className="text-sky-800 drop-shadow-[4px_4px_0px_rgba(212,255,0,1)]">Plastic.</span></h1>
          <p className="mt-8 text-xl md:text-2xl font-bold font-['JetBrains_Mono'] text-gray-800 max-w-3xl mx-auto bg-white border-4 border-black p-6 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
            Don't just talk about the ocean—protect it. We engineer flexible packaging using certified Ocean-Bound Plastic (OBP), recovered from high-risk coastal zones before it can damage marine ecosystems.
          </p>
          <div className="flex flex-wrap justify-center gap-6 mt-12">
            <NeoButton variant="primary" to="/products">Browse OBP Solutions</NeoButton>
            <NeoButton variant="secondary" to="/sample">Order Impact Samples</NeoButton>
          </div>
        </div>
      </section>

      {/* Engineering: The OBP Matrix */}
      <section className="py-24 bg-white border-b-4 border-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="absolute inset-0 bg-sky-400 translate-x-4 translate-y-4 border-4 border-black" />
              <ClickableImage 
                src="/imgs/seo-photos/a_coastal_plastic_waste_collection_team_action_shot_1182744.webp" 
                alt="OBP Collection Engineering" 
                className="relative z-10 border-4 border-black w-full shadow-2xl"
              />
            </div>
            <div>
              <NeoBadge color="magenta">IMPACT_AUDIT</NeoBadge>
              <h2 className="font-black text-5xl md:text-7xl mt-6 uppercase leading-tight italic">Preventative<br/>Action.</h2>
              <p className="mt-8 text-xl text-gray-600 font-['JetBrains_Mono'] leading-relaxed">
                Ocean-Bound Plastic (OBP) is defined as plastic waste located within 50km of an unprotected coastline. Our engineering team partners with <strong>GRS-certified</strong> collection networks to recover this material, transforming it into high-purity resins. Every gram of OBP used in an Achieve Pack pouch is <strong>Blockchain-Verified</strong>, ensuring a transparent chain of custody from the coastal collection point in SE Asia or Haiti directly to your customer's hands.
              </p>
              <div className="mt-8 grid grid-cols-2 gap-4">
                {OCEAN_STATS.map((p, i) => (
                  <div key={i} className="bg-white border-4 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 transition-all">
                    <h4 className="font-black uppercase text-xs mb-1 text-sky-700">{p.label}</h4>
                    <p className="text-xl font-black">{p.value} <span className="text-[10px] opacity-60 font-normal">{p.unit}</span></p>
                    <p className="text-[10px] font-bold opacity-60">{p.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical: The Material Stack */}
      <section className="py-24 bg-black text-white border-b-4 border-black">
        <div className="max-w-7xl mx-auto px-6">
          <NeoBadge color="lime">OBP_TECH_STACK</NeoBadge>
          <h2 className="font-black text-5xl md:text-8xl mt-6 uppercase leading-none italic mb-16">High-Purity<br/>Recovery.</h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="border-l-4 border-sky-500 pl-8 py-4">
              <h3 className="text-3xl font-black uppercase mb-4">01. Decontamination</h3>
              <p className="text-lg font-['JetBrains_Mono'] opacity-70 leading-relaxed">
                Proprietary aqueous washing and vacuum stripping removes salt, UV-degraded polymers, and odor. The resulting OBP resin is suitable for non-food contact layers and secondary packaging.
              </p>
            </div>

            <div className="border-l-4 border-sky-500 pl-8 py-4">
              <h3 className="text-3xl font-black uppercase mb-4">02. Chemical Recycling</h3>
              <p className="text-lg font-['JetBrains_Mono'] opacity-70 leading-relaxed">
                For food-grade applications, we utilize advanced pyrolysis to break OBP down to its molecular level, creating "Virgin-Equivalent" resins that meet 100% of FDA safety standards.
              </p>
            </div>

            <div className="border-l-4 border-sky-500 pl-8 py-4">
              <h3 className="text-3xl font-black uppercase mb-4">03. Social Audit</h3>
              <p className="text-lg font-['JetBrains_Mono'] opacity-70 leading-relaxed">
                Collection is performed by verified coastal teams who receive fair wages and medical support. Your packaging purchase directly funds social infrastructure in vulnerable communities.
              </p>
            </div>

            <div className="border-l-4 border-sky-500 pl-8 py-4">
              <h3 className="text-3xl font-black uppercase mb-4">04. Structural Integrity</h3>
              <p className="text-lg font-['JetBrains_Mono'] opacity-70 leading-relaxed">
                We blend OBP with high-performance copolymers to ensure your pouches maintain 100% puncture resistance and hermetic seal strength.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Verification & Transparency */}
      <section className="py-24 bg-sky-50 border-b-4 border-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <NeoBadge color="blue">CERTIFICATION_MATRIX</NeoBadge>
              <h2 className="font-black text-5xl md:text-7xl mt-6 uppercase leading-tight italic">Trust the<br/>Blockchain.</h2>
              <p className="mt-8 text-xl text-gray-700 font-['JetBrains_Mono'] leading-relaxed">
                We follow the <strong>Prevented Ocean Plastic (POP)</strong> framework, which provides a digital receipt for every kilogram of plastic recovered. This technical verification is essential for brands that want to make authoritative claims without the risk of greenwashing. Achieve Pack OBP pouches come with full <strong>GRS Transaction Certificates</strong>, proving your commitment to global ocean health through quantifiable data.
              </p>
              <div className="mt-12 space-y-4">
                <div className="bg-white p-6 border-4 border-black flex gap-6 items-center">
                  <Anchor className="w-12 h-12 flex-shrink-0" />
                  <div>
                    <h4 className="font-black uppercase">Verified OBP Zone</h4>
                    <p className="text-sm opacity-60">Sourced exclusively from coastal regions with high leakage and no waste infrastructure.</p>
                  </div>
                </div>
                <div className="bg-white p-6 border-4 border-black flex gap-6 items-center">
                  <Ship className="w-12 h-12 flex-shrink-0" />
                  <div>
                    <h4 className="font-black uppercase">Carbon Savings</h4>
                    <p className="text-sm opacity-60">Recovered plastic has a 75% lower carbon footprint than fossil-based virgin polymers.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-sky-400 translate-x-4 translate-y-4 border-4 border-black" />
              <ClickableImage 
                src="/imgs/pouch-shape/a_recycled_ocean_plastic_pouch_mockup_on_sand_4418223.webp" 
                alt="OBP Material Verification" 
                className="relative z-10 border-4 border-black w-full shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ: Ocean Plastic Literacy */}
      <section className="py-24 bg-[#F0F0F0] border-b-4 border-black">
        <div className="max-w-4xl mx-auto px-6">
          <NeoBadge color="magenta">OCEAN_FAQ</NeoBadge>
          <h2 className="font-black text-5xl md:text-7xl mt-6 uppercase leading-tight italic mb-12">No Fluff.<br/>Just Impact.</h2>
          <div className="space-y-4">
            {[
              { q: "What makes it 'Ocean-Bound' plastic?", a: "OBP is abandoned plastic waste found within 50km of a coastline. If not collected, wind and rain will push this plastic into the ocean within weeks. We intercept it at the source." },
              { q: "Is OBP food-safe?", a: "Yes, when processed through chemical recycling (pyrolysis) which returns the plastic to its virgin-state monomer, or when used in the non-contact center layers of co-extruded films." },
              { q: "How much OBP can be put into a pouch?", a: "We typically recommend a 30-50% blend to maintain absolute structural integrity and seal strength, though 100% OBP content is possible for mailers." },
              { q: "Does OBP help with the Plastic Tax?", a: "Yes. In the UK and EU, packaging containing over 30% recycled content (including OBP) is exempt from the £200/ton Plastic Packaging Tax." }
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
      <section className="py-24 bg-sky-900 text-white border-b-4 border-black">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-12">
          <NeoBadge color="lime">OCEAN_MANDATE</NeoBadge>
          <h2 className="font-black text-6xl md:text-9xl uppercase leading-none italic">Clean the<br/>Ocean Now.</h2>
          <p className="font-['JetBrains_Mono'] font-bold text-xl opacity-80 max-w-2xl mx-auto">
            Ready to transition to high-performance, OBP-verified packaging? Audit our collection data and certificates today.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
            <NeoButton variant="primary" to="/sample" className="!bg-white !text-sky-900">Order Impact Samples</NeoButton>
            <NeoButton variant="secondary" className="!border-white !text-white" href="https://calendly.com/30-min-free-packaging-consultancy">
              Consult an Ocean Tech Expert
            </NeoButton>
          </div>
        </div>
      </section>
    </PouchLayout>
  )
}

export default PouchRecycledOceanPlasticPackagingPage
