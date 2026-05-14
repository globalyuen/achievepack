import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Scale, Trash2, Zap, CheckCircle, Info, BarChart3, Globe, Settings, History, HelpCircle } from 'lucide-react'
import PouchLayout from '../../../components/pouch/PouchLayout'
import { NeoButton, NeoCard, NeoBadge } from '../../../components/pouch/PouchUI'
import { getBaseUrl } from '../../../utils/domain'
import ClickableImage from '../../../components/ClickableImage'

const PouchReducePackagingWasteGuidePage: React.FC = () => {
  const baseUrl = getBaseUrl()

  return (
    <PouchLayout>
      <Helmet>
        <title>How to Reduce Packaging Waste: Engineering Guide | Pouch.eco</title>
        <meta name="description" content="Technical guide to reducing packaging waste at the source. Learn about right-sizing, material lightweighting, and logistics optimization for high-efficiency brands." />
        <link rel="canonical" href={`${baseUrl}/topics/reduce-packaging-waste`} />
      </Helmet>

      {/* Hero Section */}
      <section className="relative pt-20 pb-32 border-b-8 border-black bg-yellow-400 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <NeoBadge color="magenta">WASTE_ZERO_V1</NeoBadge>
          <h1 className="mt-8 font-black text-6xl md:text-[8rem] leading-[0.8] uppercase tracking-tighter italic text-black drop-shadow-[8px_8px_0px_rgba(255,255,255,1)]">
            REDUCE_AT<br/>
            THE_SOURCE<br/>
            NO_WASTE_ONLY_GO
          </h1>
          <p className="mt-12 text-2xl md:text-3xl font-black font-['JetBrains_Mono'] text-black max-w-4xl bg-white border-4 border-black p-8 shadow-[16px_16px_0px_0px_rgba(0,0,0,1)]">
            The most sustainable package is the one you don't use. We engineer out the excess air, the extra weight, and the wasted material.
          </p>
          <div className="mt-16 flex flex-wrap gap-6">
            <NeoButton variant="dark" to="/quote">START_WASTE_AUDIT</NeoButton>
            <NeoButton variant="secondary" to="/materials">MATERIAL_EFFICIENCY</NeoButton>
          </div>
        </div>
      </section>

      {/* Science Section */}
      <section className="py-24 bg-white border-b-8 border-black">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <NeoBadge color="blue">THE_EFFICIENCY</NeoBadge>
            <h2 className="font-black text-5xl md:text-7xl mt-6 uppercase leading-tight italic">Right-Sizing<br/>Engineering</h2>
            <p className="mt-8 text-xl text-gray-800 font-['JetBrains_Mono'] leading-relaxed">
              Slack-fill is an environmental crime. We use 3D displacement modeling to adjust your pouch dimensions to your product density, reducing material weight by up to 20%.
            </p>
            <div className="mt-12 grid grid-cols-2 gap-6">
              <NeoCard color="bg-[#F0F0F0]" className="border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <h4 className="font-black text-lg uppercase mb-2">Lightweighting</h4>
                <p className="text-xs text-gray-600 font-['JetBrains_Mono']">Reducing gauge thickness without losing puncture resistance through high-modulus polymers.</p>
              </NeoCard>
              <NeoCard color="bg-black" className="border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] text-white">
                <h4 className="font-black text-lg uppercase mb-2 text-yellow-400">Logistics Gain</h4>
                <p className="text-xs text-gray-400 font-['JetBrains_Mono']">More units per pallet = Fewer trucks = Lower carbon footprint.</p>
              </NeoCard>
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-yellow-400 translate-x-6 translate-y-6 border-4 border-black" />
            <div className="relative z-10 border-8 border-black bg-white overflow-hidden">
              <ClickableImage 
                src="/imgs/generated/reduce_waste.png" 
                alt="Right-sized vs Oversized Packaging" 
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Deep Content */}
      <section className="py-24 bg-[#F0F0F0] border-b-8 border-black font-['JetBrains_Mono']">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-12">
              <h3 className="font-black text-4xl uppercase italic mb-8">Flexible vs. Rigid: The Real LCA</h3>
              <p className="text-gray-800 text-lg leading-relaxed">
                One of the most powerful waste reduction strategies is the transition from rigid containers to flexible pouches. A truckload of empty pouches carries the same volume of packaging as <strong>25 truckloads</strong> of empty rigid jars. This 96% reduction in inbound logistics emissions is the ultimate win for Scope 3 reporting.
              </p>
              <div className="p-12 bg-white border-8 border-black shadow-[20px_20px_0px_0px_rgba(0,0,0,1)]">
                <h4 className="font-black text-3xl uppercase mb-6 flex items-center gap-3">
                  <BarChart3 className="text-yellow-500" /> Source Reduction Audit
                </h4>
                <p className="text-lg leading-relaxed mb-6">
                  Build your E-E-A-T by analyzing your packaging-to-product weight ratio. At Pouch.eco, we recommend a "Reduction First" approach. Before you recycle or compost, you must <strong>eliminate</strong>.
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-[#F0F0F0] p-6 border-2 border-black">
                    <h5 className="font-black uppercase mb-2">60-80% Less Plastic</h5>
                    <p className="text-xs">Compared to a rigid bottle of the same volume.</p>
                  </div>
                  <div className="bg-[#F0F0F0] p-6 border-2 border-black">
                    <h5 className="font-black uppercase mb-2">Zero Slack-Fill</h5>
                    <p className="text-xs">Engineered dimensions that respect the product density.</p>
                  </div>
                </div>
              </div>
              <h3 className="font-black text-4xl uppercase italic mb-8">The Refill Revolution</h3>
              <p className="text-gray-800 text-lg leading-relaxed">
                We are pioneering the use of lightweight flexible pouches as refills for permanent glass or rigid plastic dispensers. This system allows brands to maintain a premium retail presence while slashing the single-use waste associated with daily consumer goods. Our <strong>Expert Efficiency Team</strong> helps you design the closure and pour-spout systems to ensure a mess-free user experience.
              </p>
            </div>
            <aside className="space-y-8">
              <NeoCard color="bg-black" className="text-white border-4 border-black shadow-[12px_12px_0px_0px_rgba(255,255,0,1)]">
                <h4 className="font-black text-2xl uppercase mb-6 flex items-center gap-2"><Trash2 className="text-yellow-400" /> WASTE_STATS</h4>
                <p className="text-sm">90% of packaging waste happens before the consumer even sees the product. We focus on industrial-scale efficiency.</p>
                <NeoButton variant="primary" className="mt-8 !bg-yellow-400 !text-black w-full" to="/quote">CALCULATE_SAVINGS</NeoButton>
              </NeoCard>
              <div className="bg-white p-8 border-4 border-black">
                <h4 className="font-black text-xl uppercase mb-4 flex items-center gap-2"><Settings /> EFFICIENCY_LOG</h4>
                <div className="space-y-3 text-xs uppercase font-black">
                  <div className="p-2 bg-[#F0F0F0] border-2 border-black">Gauge Reduction (-20%)</div>
                  <div className="p-2 bg-[#F0F0F0] border-2 border-black">Gusset Optimization</div>
                  <div className="p-2 bg-[#F0F0F0] border-2 border-black">Pallet Count Max (+15%)</div>
                  <div className="p-2 bg-[#F0F0F0] border-2 border-black">Refill System Ready</div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 bg-black text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-black text-6xl md:text-[10rem] uppercase leading-none mb-12 italic">
            LESS_IS_MORE<br/>
            <span className="text-yellow-400">PURE_IMPACT</span>
          </h2>
          <NeoButton variant="primary" className="!bg-yellow-400 !text-black !text-2xl px-12 py-6 border-4 border-white" to="/quote">
            GET_EFFICIENCY_AUDIT
          </NeoButton>
        </div>
      </section>
    </PouchLayout>
  )
}

export default PouchReducePackagingWasteGuidePage
