import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Droplets, Shield, Zap, ArrowRight, CheckCircle, Award, Wind, Thermometer, Box, Layers } from 'lucide-react'
import PouchLayout from '../../../components/pouch/PouchLayout'
import { NeoButton, NeoCard, NeoBadge } from '../../../components/pouch/PouchUI'
import { getBaseUrl } from '../../../utils/domain'

const PouchCompostableHumidityControlPage: React.FC = () => {
  const baseUrl = getBaseUrl()

  const MOISTURE_TECH = [
    { label: 'MVTR Rating', value: '< 1.5', unit: 'g/m²/day', desc: 'Moisture Vapor Transmission Rate precision.' },
    { label: 'Oxygen Lock', value: '< 1.0', unit: 'cc/m²/day', desc: 'Prevents aromatic oxidation.' },
    { label: 'Closure Tech', value: 'Hermetic', desc: 'Airtight resealable zippers for longevity.' },
    { label: 'Eco Path', value: 'TUV Home', desc: '100% soil-safe decomposition.' }
  ]

  return (
    <PouchLayout>
      <Helmet>
        <title>Compostable Humidity Control Packaging | Pouch.eco</title>
        <meta name="description" content="Integrated humidity control in compostable packaging. Protect moisture-sensitive products with sustainable barriers. Ideal for tea, supplements, and snacks." />
        <link rel="canonical" href={`${baseUrl}/topics/compostable-humidity-control`} />
        <meta name="keywords" content="compostable humidity control, moisture barrier bags, sustainable tea packaging, compostable barrier film, Pouch.eco" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative pt-12 pb-24 border-b-4 border-black bg-[radial-gradient(#0891b2_1px,transparent_1px)] [background-size:24px_24px] bg-cyan-50">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <NeoBadge color="cyan">MOISTURE_LOCK_V4.0</NeoBadge>
          <h1 className="mt-8 font-black text-6xl md:text-9xl leading-none uppercase italic">Dry.<br/>Safe.<br/><span className="text-cyan-700 drop-shadow-[4px_4px_0px_rgba(0,0,0,1)]">Green.</span></h1>
          <p className="mt-8 text-xl md:text-2xl font-bold font-['JetBrains_Mono'] text-gray-800 max-w-3xl mx-auto bg-white border-4 border-black p-6 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
            High-performance humidity control integrated into 100% compostable packaging. Protect your most sensitive botanicals and powders with industrial-strength moisture barriers.
          </p>
          <div className="mt-12 flex flex-wrap justify-center gap-6">
            <NeoButton variant="primary" to="/sample">Request Barrier Samples</NeoButton>
            <NeoButton variant="secondary" to="/quote">Get Moisture Audit</NeoButton>
          </div>
        </div>
      </section>

      {/* Logic Section */}
      <section className="py-24 bg-white border-b-4 border-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="absolute inset-0 bg-yellow-400 translate-x-4 translate-y-4 border-4 border-black" />
              <img 
                src="/imgs/seo-photos/a_achievepack_barrier_range_comparison_2896222.webp" 
                alt="Moisture Barrier Performance" 
                className="relative z-10 border-4 border-black w-full shadow-2xl"
              />
            </div>
            <div>
              <NeoBadge color="magenta">BARRIER_STORY</NeoBadge>
              <h2 className="font-black text-5xl md:text-7xl mt-6 uppercase leading-tight italic">Beyond<br/>Plastic.</h2>
              <p className="mt-8 text-xl text-gray-600 font-['JetBrains_Mono'] leading-relaxed">
                Traditional humidity control relies on thick aluminum foil or high-density polymers. Our plant-based barrier technology uses advanced AlOx and EVOH-alternative coatings to achieve the same shelf-life benchmarks without the environmental cost.
              </p>
              <div className="mt-8 grid grid-cols-2 gap-4">
                {MOISTURE_TECH.map((t, i) => (
                  <div key={i} className="bg-white border-4 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                    <h4 className="font-black uppercase text-xs mb-1 text-cyan-700">{t.label}</h4>
                    <p className="text-xl font-black">{t.value} <span className="text-[10px] opacity-60 font-normal">{t.unit}</span></p>
                    <p className="text-[10px] font-bold opacity-60">{t.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Closure Systems Section */}
      <section className="py-24 bg-[#F0F0F0] border-b-4 border-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <NeoBadge color="blue">CLOSURE_INTEGRITY</NeoBadge>
              <h2 className="font-black text-5xl md:text-7xl uppercase mt-6">Seal the<br/>Deal.</h2>
              <p className="mt-8 text-xl font-['JetBrains_Mono'] opacity-80 leading-relaxed">
                A barrier is only as strong as its weakest point. Our compostable humidity control bags feature industry-leading "Click-Press" zippers and ultrasonic side-seals to guarantee a hermetic environment for 18+ months.
              </p>
              <NeoButton variant="secondary" className="mt-8" to="/products">Browse Closure Options</NeoButton>
            </div>
            <div className="relative order-1 lg:order-2">
              <div className="absolute inset-0 bg-cyan-400 translate-x-4 translate-y-4 border-4 border-black" />
              <img 
                src="/imgs/seo-photos/a_closure_systems_infographic_4275938.webp" 
                alt="Closure Systems Infographic" 
                className="relative z-10 border-4 border-black w-full shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-black text-white border-b-4 border-black">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-12">
          <NeoBadge color="cyan">LOCK_IN_FRESHNESS</NeoBadge>
          <h2 className="font-black text-6xl md:text-9xl uppercase leading-none italic text-cyan-400">Dry.<br/>Forever.<br/>Done.</h2>
          <p className="font-['JetBrains_Mono'] font-bold text-xl text-white opacity-80 max-w-2xl mx-auto">
            Ready to protect your botanical products with the world's most advanced compostable humidity control? Request a barrier audit today.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
            <NeoButton variant="primary" to="/sample" className="!bg-cyan-600 !text-white">Order Barrier Kit</NeoButton>
            <NeoButton variant="secondary" className="!border-white !text-white" href="https://calendly.com/30-min-free-packaging-consultancy">
              Consultancy Call
            </NeoButton>
          </div>
        </div>
      </section>
    </PouchLayout>
  )
}

export default PouchCompostableHumidityControlPage
