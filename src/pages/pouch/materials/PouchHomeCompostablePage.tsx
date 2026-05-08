import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Leaf, Shield, Zap, CheckCircle, Award, BarChart3, Thermometer, Clock, MessageCircle } from 'lucide-react'
import PouchLayout from '../../../components/pouch/PouchLayout'
import { NeoButton, NeoCard, NeoBadge } from '../../../components/pouch/PouchUI'
import { getBaseUrl } from '../../../utils/domain'

const PouchHomeCompostablePage: React.FC = () => {
  const baseUrl = getBaseUrl()
  
  const DECOMPOSITION_STAGES = [
    { day: 'Day 0', status: 'Intact', desc: 'Pouch enters home compost bin (20-30°C).' },
    { day: 'Day 45', status: 'Fragmentation', desc: 'Structural integrity begins to fail. Microbes colonize surface.' },
    { day: 'Day 120', status: 'Bio-Assimilation', desc: 'Visible pieces vanish. Material converted to CO2, water, & biomass.' },
    { day: 'Day 180', status: 'Soil Nutrients', desc: 'Fully assimilated. No microplastics or toxic residues remain.' }
  ]

  return (
    <PouchLayout>
      <Helmet>
        <title>Home Compostable Packaging | TUV OK Home Certified | Pouch.eco</title>
        <meta name="description" content="Certified home compostable pouches. Breaks down in your backyard compost bin within 180 days. TUV OK Home certified, food-safe, and high-barrier." />
        <link rel="canonical" href={`${baseUrl}/materials/home-compostable`} />
        <meta name="keywords" content="home compostable, backyard compost, TUV OK Home, sustainable pouches, biodegradable bags" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative pt-12 pb-24 border-b-4 border-black bg-[radial-gradient(#ff0080_1px,transparent_1px)] [background-size:24px_24px] bg-pink-50">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <NeoBadge color="magenta">HOME_COMPOST_READY_V2.0</NeoBadge>
          <h1 className="mt-8 font-black text-6xl md:text-9xl leading-none uppercase text-black">Back.<br/>Yard.<br/>Soil.</h1>
          <p className="mt-8 text-xl md:text-2xl font-bold font-['JetBrains_Mono'] text-gray-800 max-w-3xl mx-auto bg-white border-4 border-black p-6 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
            TUV OK Home Certified. Breaks down in 180 days in ambient backyard conditions. No industrial heat, no chemical catalysts—just biology.
          </p>
          <div className="mt-12 flex flex-wrap justify-center gap-6">
            <NeoButton variant="primary" to="/sample">Order Home Samples</NeoButton>
            <NeoButton variant="secondary" to="/products">Shop Home Compostable</NeoButton>
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-24 bg-white border-b-4 border-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="absolute inset-0 bg-pink-400 translate-x-4 translate-y-4 border-4 border-black" />
              <img 
                src="/imgs/4-infograhic/home-compost.webp" 
                alt="Home Compostable Process" 
                className="relative z-10 border-4 border-black w-full"
              />
            </div>
            <div>
              <NeoBadge color="blue">LOW_TEMPERATURE_BREAKDOWN</NeoBadge>
              <h2 className="font-black text-5xl md:text-7xl uppercase mt-6 leading-tight italic">Beyond<br/>Industrial.</h2>
              <p className="mt-8 text-xl text-gray-600 font-['JetBrains_Mono'] leading-relaxed">
                Standard "compostable" plastics require 60°C+ industrial facilities. Our Home Compostable range is engineered for the 20-30°C temperature profile of a residential compost bin.
              </p>
              <div className="mt-8 bg-pink-100 border-4 border-black p-6">
                <h4 className="font-black uppercase mb-4 text-pink-600 italic">The Barrier Breakthrough</h4>
                <p className="text-sm font-bold text-gray-800 leading-relaxed">
                  We've successfully layered home-compostable cellulose with bio-polymers to achieve high moisture barriers previously only possible in industrial-only or fossil-based films.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Breakdown Timeline */}
      <section className="py-24 bg-black text-white border-b-4 border-black">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="font-black text-5xl md:text-7xl uppercase mb-16 text-pink-400">Backyard Lifecycle</h2>
          <div className="grid md:grid-cols-4 gap-4">
            {DECOMPOSITION_STAGES.map((stage, i) => (
              <div key={i} className="border-4 border-white p-8 hover:bg-pink-600 transition-colors group">
                <div className="text-4xl font-black mb-2 font-['JetBrains_Mono']">{stage.day}</div>
                <h4 className="font-black uppercase text-xl mb-4 group-hover:text-black">{stage.status}</h4>
                <p className="text-xs font-['JetBrains_Mono'] opacity-70 group-hover:opacity-100 group-hover:text-black font-bold">{stage.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certification Trust */}
      <section className="py-24 bg-[#F0F0F0] border-b-4 border-black">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8">
          <NeoCard>
            <div className="text-4xl mb-6">🇦🇹</div>
            <h4 className="font-black text-xl mb-4 uppercase text-pink-600">TUV OK Home</h4>
            <p className="text-sm font-['JetBrains_Mono'] text-gray-600">The gold standard. Guarantees complete biodegradation in backyard compost within 6 months, including zippers and valves.</p>
          </NeoCard>
          <NeoCard color="bg-white shadow-[10px_10px_0px_0px_rgba(255,0,128,1)]">
            <div className="text-4xl mb-6">🇦🇺</div>
            <h4 className="font-black text-xl mb-4 uppercase text-pink-600">ABA AS 5810</h4>
            <p className="text-sm font-['JetBrains_Mono'] text-gray-600">Australian standard compliance for home compostability, ensuring non-toxicity to worms and soil biology.</p>
          </NeoCard>
          <NeoCard>
            <div className="text-4xl mb-6">🇪🇺</div>
            <h4 className="font-black text-xl mb-4 uppercase text-pink-600">EN 13432</h4>
            <p className="text-sm font-['JetBrains_Mono'] text-gray-600">While industrial-focused, our home materials exceed all chemical and safety requirements of the EN 13432 directive.</p>
          </NeoCard>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-pink-600 text-white border-b-4 border-black">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-10">
          <NeoBadge color="lime">SOIL_FRIENDLY</NeoBadge>
          <h2 className="font-black text-6xl md:text-9xl uppercase leading-none">Soil.<br/>Not Waste.</h2>
          <p className="font-['JetBrains_Mono'] font-bold text-xl opacity-80 max-w-2xl mx-auto">
            Ready to give your customers the ultimate eco-experience? Transition to Home Compostable pouches and lead the backyard revolution.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
            <NeoButton variant="primary" to="/sample" className="!bg-white !text-pink-600">Get Home Kit</NeoButton>
            <NeoButton variant="secondary" className="!border-white !text-white" href="https://calendly.com/30-min-free-packaging-consultancy">
              Backyard Strategy Call
            </NeoButton>
          </div>
        </div>
      </section>
    </PouchLayout>
  )
}

export default PouchHomeCompostablePage
