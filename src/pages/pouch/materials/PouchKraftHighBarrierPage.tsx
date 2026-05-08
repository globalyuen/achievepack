import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Shield, Zap, Package, ArrowRight, CheckCircle, Award, BarChart3, Droplets, Sun, Wind } from 'lucide-react'
import PouchLayout from '../../../components/pouch/PouchLayout'
import { NeoButton, NeoCard, NeoBadge } from '../../../components/pouch/PouchUI'
import { getBaseUrl } from '../../../utils/domain'

const PouchKraftHighBarrierPage: React.FC = () => {
  const baseUrl = getBaseUrl()
  
  const BARRIER_LEVELS = [
    { name: 'Level 1: Standard', barrier: 'VMPET', use: 'Dry Snacks, Tea', shelf: '6-9 Months' },
    { name: 'Level 2: High', barrier: 'ALU (Foil)', use: 'Coffee, Powder', shelf: '12-24 Months' },
    { name: 'Level 3: Ultra', barrier: 'EVOH-PE', use: 'Specialty Liquid', shelf: '18+ Months' }
  ]

  return (
    <PouchLayout>
      <Helmet>
        <title>Kraft High Barrier Packaging | Maximum Shelf Life | Pouch.eco</title>
        <meta name="description" content="Premium kraft paper pouches with high-barrier aluminum or EVOH protection. Ideal for coffee, nuts, and sensitive food products requiring long shelf life." />
        <link rel="canonical" href={`${baseUrl}/materials/kraft-high-barrier`} />
        <meta name="keywords" content="kraft pouches, high barrier kraft, coffee bags, foil lined kraft, aluminum barrier, Pouch.eco" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative pt-12 pb-24 border-b-4 border-black bg-[radial-gradient(#451a03_1px,transparent_1px)] [background-size:24px_24px] bg-orange-50">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <NeoBadge color="yellow">PREMIUM_BARRIER_V9.2</NeoBadge>
          <h1 className="mt-8 font-black text-6xl md:text-9xl leading-none uppercase text-black">Kraft.<br/>Max.<br/>Shield.</h1>
          <p className="mt-8 text-xl md:text-2xl font-bold font-['JetBrains_Mono'] text-gray-800 max-w-3xl mx-auto bg-white border-4 border-black p-6 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
            Artisan aesthetic meets industrial protection. Premium Japanese Kraft paper fused with high-barrier aluminum or clear EVOH for 24+ month flavor preservation.
          </p>
          <div className="mt-12 flex flex-wrap justify-center gap-6">
            <NeoButton variant="primary" to="/quotes/flat-bottom">Get Premium Quote</NeoButton>
            <NeoButton variant="secondary" to="/products">Browse Kraft Styles</NeoButton>
          </div>
        </div>
      </section>

      {/* Technical Breakdown Section */}
      <section className="py-24 bg-white border-b-4 border-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="absolute inset-0 bg-[#451a03] translate-x-4 translate-y-4 border-4 border-black" />
              <img 
                src="/imgs/barrier/ads/a_kraft_high_max_4456348.webp" 
                alt="Kraft High Barrier Structure" 
                className="relative z-10 border-4 border-black w-full shadow-2xl"
              />
            </div>
            <div>
              <NeoBadge color="blue">TRI_LAMINATE_TECH</NeoBadge>
              <h2 className="font-black text-5xl md:text-7xl uppercase mt-6 leading-tight">The 3-Layer<br/>Freshness<br/>Lock.</h2>
              <p className="mt-8 text-xl text-gray-600 font-['JetBrains_Mono'] leading-relaxed">
                Our Kraft High Barrier pouches aren't just paper. They are complex multi-layer laminates engineered to block oxygen, moisture, and UV light with 99.9% efficiency.
              </p>
              <div className="mt-8 grid grid-cols-1 gap-4">
                <div className="flex items-center gap-4 bg-[#FDE68A]/20 border-l-8 border-[#451a03] p-4">
                  <div className="bg-black text-white w-8 h-8 flex items-center justify-center font-black">1</div>
                  <span className="font-black uppercase text-sm">Outer: Premium FSC Kraft Paper (Aesthetic + Texture)</span>
                </div>
                <div className="flex items-center gap-4 bg-[#FDE68A]/20 border-l-8 border-blue-600 p-4">
                  <div className="bg-black text-white w-8 h-8 flex items-center justify-center font-black">2</div>
                  <span className="font-black uppercase text-sm">Middle: ALU Foil or EVOH (Absolute Shield)</span>
                </div>
                <div className="flex items-center gap-4 bg-[#FDE68A]/20 border-l-8 border-green-600 p-4">
                  <div className="bg-black text-white w-8 h-8 flex items-center justify-center font-black">3</div>
                  <span className="font-black uppercase text-sm">Inner: Food-Safe PE (Structural Seal)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Barrier Level Matrix */}
      <section className="py-24 bg-black text-white border-b-4 border-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-black text-5xl md:text-7xl uppercase text-[#D4FF00] italic">Barrier Matrix</h2>
            <p className="font-['JetBrains_Mono'] text-xl mt-4 opacity-70">Choose the right shield for your product's sensitivity.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {BARRIER_LEVELS.map((level, i) => (
              <div key={i} className="border-4 border-white p-8 hover:border-[#D4FF00] group transition-all">
                <h4 className="font-black text-2xl uppercase mb-2 group-hover:text-[#D4FF00]">{level.name}</h4>
                <div className="text-sm font-bold uppercase mb-6 opacity-60">Barrier: {level.barrier}</div>
                <div className="space-y-4 font-['JetBrains_Mono'] text-sm">
                  <div className="flex justify-between border-b border-white/20 pb-2">
                    <span>Application:</span>
                    <span className="font-bold">{level.use}</span>
                  </div>
                  <div className="flex justify-between border-b border-white/20 pb-2">
                    <span>Shelf Life:</span>
                    <span className="font-bold text-[#D4FF00]">{level.shelf}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Visual Component Section */}
      <section className="py-24 bg-[#F0F0F0] border-b-4 border-black">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8">
          <NeoCard>
            <Sun className="w-12 h-12 mb-6 text-orange-600" />
            <h4 className="font-black text-xl mb-4 uppercase">UV Protection</h4>
            <p className="text-sm font-['JetBrains_Mono'] text-gray-600">The opaque aluminum layer blocks 100% of light, preventing oxidation of oils and color fading in premium products.</p>
          </NeoCard>
          <NeoCard color="bg-white shadow-[10px_10px_0px_0px_rgba(69,26,3,1)]">
            <Droplets className="w-12 h-12 mb-6 text-blue-600" />
            <h4 className="font-black text-xl mb-4 uppercase">Moisture Shield</h4>
            <p className="text-sm font-['JetBrains_Mono'] text-gray-600">Maintains target moisture levels for 18+ months. Essential for maintaining the crispness of nuts and the volatility of coffee aromatics.</p>
          </NeoCard>
          <NeoCard>
            <Wind className="w-12 h-12 mb-6 text-cyan-600" />
            <h4 className="font-black text-xl mb-4 uppercase">Aroma Retention</h4>
            <p className="text-sm font-['JetBrains_Mono'] text-gray-600">Prevents scent migration. Your coffee stays smelling like coffee, and external odors cannot penetrate the barrier.</p>
          </NeoCard>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-[#451a03] text-white border-b-4 border-black">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-10">
          <NeoBadge color="yellow">LOCK_IN_FLAVOR</NeoBadge>
          <h2 className="font-black text-6xl md:text-9xl uppercase leading-none">Fresh.<br/>Forever.</h2>
          <p className="font-['JetBrains_Mono'] font-bold text-xl opacity-80 max-w-2xl mx-auto">
            Don't compromise on flavor. Give your premium brand the barrier protection it deserves with our Kraft High Barrier solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
            <NeoButton variant="primary" to="/sample" className="!bg-[#D4FF00] !text-black">Request Premium Kit</NeoButton>
            <NeoButton variant="secondary" className="!border-white !text-white" href="https://calendly.com/30-min-free-packaging-consultancy">
              Barrier Audit Call
            </NeoButton>
          </div>
        </div>
      </section>
    </PouchLayout>
  )
}

export default PouchKraftHighBarrierPage
