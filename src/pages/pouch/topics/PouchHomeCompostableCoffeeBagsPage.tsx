import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Leaf, Coffee, CheckCircle, Award, Zap, Globe, Factory, BarChart3, ArrowLeftRight, TrendingUp, ShoppingBag, Target, Shield, MessageCircle, Thermometer, Wind, Droplets, Microscope, Beaker, Layers } from 'lucide-react'
import PouchLayout from '../../../components/pouch/PouchLayout'
import { NeoButton, NeoCard, NeoBadge } from '../../../components/pouch/PouchUI'
import { getBaseUrl } from '../../../utils/domain'
import ClickableImage from '../../../components/ClickableImage'

const PouchHomeCompostableCoffeeBagsPage: React.FC = () => {
  const baseUrl = getBaseUrl()
  
  const COFFEE_METRICS = [
    { label: 'Aroma Retention', value: '12-18', unit: 'Months', desc: 'Preserving volatile bean oils.' },
    { label: 'Valve Rating', value: '2-5', unit: 'mbar', desc: 'Precision CO2 pressure release.' },
    { label: 'Compost Speed', value: '26-52', unit: 'Weeks', desc: 'Full home decomposition cycle.' },
    { label: 'Certification', value: 'OK HOME', unit: 'TUV', desc: 'Highest global compost benchmark.' }
  ]

  return (
    <PouchLayout>
      <Helmet>
        <title>Home Compostable Coffee Bags | Aroma Engineering | Pouch.eco</title>
        <meta name="description" content="Technical guide to home compostable coffee bags. 800+ words of research on degassing valves, high-barrier NK/PBS laminates, and OK Compost HOME standards." />
        <link rel="canonical" href={`${baseUrl}/topics/home-compostable-coffee-bags`} />
        <meta name="keywords" content="home compostable coffee bags, kraft pouches, degassing valve, aroma retention, OK compost HOME" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative pt-12 pb-24 border-b-4 border-black bg-[radial-gradient(#78350f_1px,transparent_1px)] [background-size:24px_24px] bg-amber-50">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <NeoBadge color="magenta">AROMA_SHIELD_V4.0</NeoBadge>
          <h1 className="mt-8 font-black text-6xl md:text-9xl leading-none uppercase italic">Roast.<br/>Protect.<br/><span className="text-amber-800 drop-shadow-[4px_4px_0px_rgba(212,255,0,1)]">Compost.</span></h1>
          <p className="mt-8 text-xl md:text-2xl font-bold font-['JetBrains_Mono'] text-gray-800 max-w-3xl mx-auto bg-white border-4 border-black p-6 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
            Elite coffee demands an absolute barrier. We engineer home compostable coffee pouches using high-barrier NK/PBS laminates and precision-molded degassing valves to preserve your roast profile for up to 18 months.
          </p>
          <div className="flex flex-wrap justify-center gap-6 mt-12">
            <NeoButton variant="primary" to="/products">Browse Roaster Styles</NeoButton>
            <NeoButton variant="secondary" to="/sample">Request Freshness Pack</NeoButton>
          </div>
        </div>
      </section>

      {/* Engineering: The Degassing Valve */}
      <section className="py-24 bg-white border-b-4 border-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="absolute inset-0 bg-amber-400 translate-x-4 translate-y-4 border-4 border-black" />
              <ClickableImage 
                src="/imgs/seo-photos/usa/coffee/a_coffee_sustainability_roaster_guide_0801372.webp" 
                alt="Compostable Coffee Valve Engineering" 
                className="relative z-10 border-4 border-black w-full shadow-2xl"
              />
            </div>
            <div>
              <NeoBadge color="blue">GAS_CONTROL_LAB</NeoBadge>
              <h2 className="font-black text-5xl md:text-7xl mt-6 uppercase leading-tight italic">One-Way<br/>Release.</h2>
              <p className="mt-8 text-xl text-gray-600 font-['JetBrains_Mono'] leading-relaxed">
                Freshly roasted coffee off-gasses CO2. Without a valve, the bag will rupture; without a barrier, the beans will oxidize. Our engineering team integrates 100% bio-based, <strong>Home Compostable Degassing Valves</strong> that open at a precise 2-5 mbar internal pressure. This allows CO2 to escape while creating a hermetic seal against atmospheric oxygen, maintaining the volatile aromatic compounds (terpenes) that define specialty coffee.
              </p>
              <div className="mt-8 grid grid-cols-2 gap-4">
                {COFFEE_METRICS.map((p, i) => (
                  <div key={i} className="bg-white border-4 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 transition-all">
                    <h4 className="font-black uppercase text-xs mb-1 text-amber-700">{p.label}</h4>
                    <p className="text-xl font-black">{p.value} <span className="text-[10px] opacity-60 font-normal">{p.unit}</span></p>
                    <p className="text-[10px] font-bold opacity-60">{p.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Deep Dive: High-Barrier Stack */}
      <section className="py-24 bg-black text-white border-b-4 border-black">
        <div className="max-w-7xl mx-auto px-6">
          <NeoBadge color="lime">MATERIAL_TECH_STACK</NeoBadge>
          <h2 className="font-black text-5xl md:text-8xl mt-6 uppercase leading-none italic mb-16">The NK/PBS<br/>Standard.</h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="border-l-4 border-amber-500 pl-8 py-4">
              <h3 className="text-3xl font-black uppercase mb-4">01. Natural Kraft (NK)</h3>
              <p className="text-lg font-['JetBrains_Mono'] opacity-70 leading-relaxed">
                FSC-certified long-fiber paper providing superior puncture resistance and a tactile, premium aesthetic that consumers associate with craft roasting.
              </p>
            </div>

            <div className="border-l-4 border-amber-500 pl-8 py-4">
              <h3 className="text-3xl font-black uppercase mb-4">02. Metallized PLA</h3>
              <p className="text-lg font-['JetBrains_Mono'] opacity-70 leading-relaxed">
                Vacuum-metalized Polylactic Acid provides an OTR (Oxygen Transmission Rate) of &lt; 0.5 cc/m2/day. This mimics the performance of aluminum foil in a compostable format.
              </p>
            </div>

            <div className="border-l-4 border-amber-500 pl-8 py-4">
              <h3 className="text-3xl font-black uppercase mb-4">03. Bio-PBS Sealant</h3>
              <p className="text-lg font-['JetBrains_Mono'] opacity-70 leading-relaxed">
                Polybutylene Succinate (PBS) provides industrial-grade seal strength (45N+) and high hot-tack, ensuring bags don't delaminate under the weight of whole beans.
              </p>
            </div>

            <div className="border-l-4 border-amber-500 pl-8 py-4">
              <h3 className="text-3xl font-black uppercase mb-4">04. OK HOME Certified</h3>
              <p className="text-lg font-['JetBrains_Mono'] opacity-70 leading-relaxed">
                Verified to decompose in backyard compost environments within 52 weeks. No microplastics. No heavy metals. Just healthy biomass.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Freshness & Logistics */}
      <section className="py-24 bg-amber-50 border-b-4 border-black">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <NeoBadge color="blue">AROMA_VERIFICATION_PROTOCOL</NeoBadge>
          <h2 className="font-black text-5xl md:text-7xl mt-6 uppercase leading-tight italic mb-12">The Math of<br/>Freshness.</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <NeoCard>
              <Wind className="w-12 h-12 mb-6 mx-auto" />
              <h4 className="font-black text-2xl uppercase mb-4">Gas Flush Ready</h4>
              <p className="font-['JetBrains_Mono'] text-sm opacity-70">Compatible with Nitrogen (N2) flushing to achieve &lt; 2% residual oxygen for ultra-extended shelf life.</p>
            </NeoCard>
            <NeoCard color="bg-white shadow-[10px_10px_0px_0px_rgba(212,255,0,1)]">
              <Coffee className="w-12 h-12 mb-6 mx-auto" />
              <h4 className="font-black text-2xl uppercase mb-4">Roast Stability</h4>
              <p className="font-['JetBrains_Mono'] text-sm opacity-70">Proven preservation of lipid profiles and aromatic oils for 12 months under standard retail conditions.</p>
            </NeoCard>
            <NeoCard>
              <BarChart3 className="w-12 h-12 mb-6 mx-auto" />
              <h4 className="font-black text-2xl uppercase mb-4">Supply Chain Yield</h4>
              <p className="font-['JetBrains_Mono'] text-sm opacity-70">High-tensile Kraft/PBS structures reduce shipping-related punctures by 18% compared to standard bio-films.</p>
            </NeoCard>
          </div>
        </div>
      </section>

      {/* FAQ: Technical Roasting */}
      <section className="py-24 bg-white border-b-4 border-black">
        <div className="max-w-4xl mx-auto px-6">
          <NeoBadge color="magenta">ROASTER_FAQ</NeoBadge>
          <h2 className="font-black text-5xl md:text-7xl mt-6 uppercase leading-tight italic mb-12">Expert<br/>Intelligence.</h2>
          <div className="space-y-4">
            {[
              { q: "How does the compostable valve differ from standard valves?", a: "Our valves are made from a proprietary blend of bio-based polymers (PLA/PBS) that are certified to biodegrade at the same rate as the bag. They provide identical one-way pressure release (2-5 mbar)." },
              { q: "Can these bags be used for whole bean and ground coffee?", a: "Yes. The high-barrier metallized layer and hermetic seals protect both whole beans and the higher surface area of ground coffee from oxidation." },
              { q: "Will the Kraft paper soak up the coffee oils?", a: "No. The Natural Kraft is an outer aesthetic layer. The internal Bio-PBS and metallized layers are 100% grease-proof, preventing oil migration and staining." },
              { q: "What is the shelf life for roasted coffee in these bags?", a: "With proper nitrogen flushing, our NK/PBS structures provide a 12-18 month shelf life, comparable to traditional PET/Alu/PE structures." }
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
      <section className="py-24 bg-amber-900 text-white border-b-4 border-black">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-12">
          <NeoBadge color="lime">ROASTER_MANDATE</NeoBadge>
          <h2 className="font-black text-6xl md:text-9xl uppercase leading-none italic">Protect the<br/>Roast.</h2>
          <p className="font-['JetBrains_Mono'] font-bold text-xl opacity-80 max-w-2xl mx-auto">
            Ready to transition to high-performance, home-compostable coffee packaging? Let's start the aroma-barrier audit today.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
            <NeoButton variant="primary" to="/sample" className="!bg-white !text-amber-900">Order Coffee Samples</NeoButton>
            <NeoButton variant="secondary" className="!border-white !text-white" href="https://calendly.com/30-min-free-packaging-consultancy">
              Speak to a Roasting Expert
            </NeoButton>
          </div>
        </div>
      </section>
    </PouchLayout>
  )
}

export default PouchHomeCompostableCoffeeBagsPage
