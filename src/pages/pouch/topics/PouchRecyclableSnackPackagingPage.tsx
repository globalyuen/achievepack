import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Recycle, Package, CheckCircle, Award, Zap, Cookie, Factory, BarChart3, ArrowLeftRight, TrendingUp, ShoppingBag, Sparkles, Target, Shield, MessageCircle } from 'lucide-react'
import PouchLayout from '../../../components/pouch/PouchLayout'
import { NeoButton, NeoCard, NeoBadge } from '../../../components/pouch/PouchUI'
import { getBaseUrl } from '../../../utils/domain'

const PouchRecyclableSnackPackagingPage: React.FC = () => {
  const baseUrl = getBaseUrl()
  
  const PERFORMANCE_SPECS = [
    { title: 'Chips & Crisps', shelf: '12+ Months', desc: 'High oxygen barrier + Nitrogen flush.' },
    { title: 'Granola & Bars', shelf: '18+ Months', desc: 'Moisture barrier + Resealable zipper.' },
    { title: 'Nuts & Seeds', shelf: '24+ Months', desc: 'Dual barrier + UV protection.' },
    { title: 'Dried Fruits', shelf: '18+ Months', desc: 'Moisture protection + High clarity.' }
  ]

  return (
    <PouchLayout>
      <Helmet>
        <title>Recyclable Snack Packaging | Mono-Material Solutions | Pouch.eco</title>
        <meta name="description" content="Fully recyclable flexible packaging for snack brands. Mono-PE and Mono-PP pouches with high-barrier protection. Same shelf life, zero waste." />
        <link rel="canonical" href={`${baseUrl}/topics/recyclable-snack-packaging`} />
        <meta name="keywords" content="recyclable snack bags, mono-material pouches, sustainable chip bags, snack packaging recycling, Pouch.eco" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative pt-12 pb-24 border-b-4 border-black bg-[radial-gradient(#d4ff00_1px,transparent_1px)] [background-size:24px_24px] bg-blue-50">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <NeoBadge color="blue">RECYCLABLE_PROTOCOL_V4.1</NeoBadge>
          <h1 className="mt-8 font-black text-6xl md:text-9xl leading-none uppercase">
            Pure.<br/>Polymer.<br/>
            <span className="text-blue-600 drop-shadow-[4px_4px_0px_rgba(0,0,0,1)]">Perfect.</span>
          </h1>
          <p className="mt-8 text-xl md:text-2xl font-bold font-['JetBrains_Mono'] text-gray-800 max-w-3xl mx-auto bg-white border-4 border-black p-6 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
            Ditch multi-layer landfill bags. Our Mono-Material snack pouches offer elite barrier protection with a clear, verified recycling pathway.
          </p>
          <div className="flex flex-wrap justify-center gap-6 mt-12">
            <NeoButton variant="primary" to="/materials/pcr">Explore Mono-PE</NeoButton>
            <NeoButton variant="secondary" to="/sample">Request Snack Sample Kit</NeoButton>
          </div>
        </div>
      </section>

      {/* Problem/Solution Section */}
      <section className="py-24 bg-white border-b-4 border-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <NeoBadge color="magenta">THE_CHALLENGE</NeoBadge>
              <h2 className="font-black text-5xl uppercase mt-6 mb-8">Landfill Logic is Over.</h2>
              <p className="text-xl font-['JetBrains_Mono'] text-gray-600 leading-relaxed mb-8">
                Traditional snack bags use mixed plastics and foil that are impossible to recycle. We use single-polymer science (Mono-PE/Mono-PP) to ensure your packaging actually gets recycled.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="border-2 border-black p-4 bg-red-50">
                  <h4 className="font-black text-red-600 mb-1">LEGACY</h4>
                  <p className="text-xs font-bold">Multi-layer Mixed Plastic<br/>Landfill Only</p>
                </div>
                <div className="border-2 border-black p-4 bg-green-50">
                  <h4 className="font-black text-green-600 mb-1">POUCH.ECO</h4>
                  <p className="text-xs font-bold">Mono-Material Science<br/>100% Recyclable</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-[#D4FF00] translate-x-4 translate-y-4 border-4 border-black" />
              <img 
                src="/imgs/4-infograhic/recyclable.webp" 
                alt="Recyclable snack packaging" 
                className="relative z-10 border-4 border-black w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Performance Grid */}
      <section className="py-24 bg-black text-white border-b-4 border-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <NeoBadge color="cyan">PERFORMANCE_BENCHMARK</NeoBadge>
            <h2 className="font-black text-5xl md:text-7xl uppercase mt-4 text-[#D4FF00]">Zero Compromise.</h2>
            <p className="font-['JetBrains_Mono'] mt-4 opacity-70">Recyclable material. Industrial-strength barrier.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {PERFORMANCE_SPECS.map((spec, i) => (
              <div key={i} className="border-2 border-white p-8 hover:bg-white hover:text-black transition-all cursor-default group">
                <h3 className="font-black text-2xl mb-2">{spec.title}</h3>
                <div className="inline-block bg-[#D4FF00] text-black px-2 py-0.5 text-xs font-black mb-4 group-hover:bg-black group-hover:text-white">
                  SHELF LIFE: {spec.shelf}
                </div>
                <p className="text-sm opacity-70 font-['JetBrains_Mono']">{spec.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-24 bg-white border-b-4 border-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-1">
              <NeoBadge color="magenta">CERTIFIED_RECYCLABLE</NeoBadge>
              <h2 className="font-black text-5xl uppercase mt-4">Verified Pathway.</h2>
              <p className="mt-6 text-gray-600 font-['JetBrains_Mono']">
                We provide the documentation you need for legal and retail compliance.
              </p>
            </div>
            <div className="lg:col-span-2 grid sm:grid-cols-3 gap-4">
              <NeoCard>
                <div className="text-4xl mb-4">♻️</div>
                <h4 className="font-black mb-2 uppercase">How2Recycle</h4>
                <p className="text-xs opacity-60">Store Drop-Off label for PE films in North America.</p>
              </NeoCard>
              <NeoCard>
                <div className="text-4xl mb-4">🇪🇺</div>
                <h4 className="font-black mb-2 uppercase">RecyClass</h4>
                <p className="text-xs opacity-60">EU-wide recyclability certification protocol.</p>
              </NeoCard>
              <NeoCard>
                <div className="text-4xl mb-4">🇦🇺</div>
                <h4 className="font-black mb-2 uppercase">APCO</h4>
                <p className="text-xs opacity-60">Australian Packaging Covenant Organization compliant.</p>
              </NeoCard>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-24 bg-[#F0F0F0] border-b-4 border-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="overflow-x-auto border-4 border-black bg-white">
            <table className="w-full font-['JetBrains_Mono'] text-sm">
              <thead className="bg-black text-white">
                <tr>
                  <th className="p-6 text-left">FORMAT</th>
                  <th className="p-6 text-left">RECYCLABILITY</th>
                  <th className="p-6 text-left">BARRIER</th>
                  <th className="p-6 text-left">METHOD</th>
                </tr>
              </thead>
              <tbody className="divide-y-2 divide-black/10">
                <tr>
                  <td className="p-6 font-black uppercase">Standard Snack Bag</td>
                  <td className="p-6 text-red-600 font-black">LANDFILL ONLY</td>
                  <td className="p-6">High</td>
                  <td className="p-6">Waste Bin</td>
                </tr>
                <tr className="bg-blue-50">
                  <td className="p-6 font-black uppercase">Mono-PE Pouch</td>
                  <td className="p-6 text-green-600 font-black">100% RECYCLABLE</td>
                  <td className="p-6 font-bold">Ultra High</td>
                  <td className="p-6">Store Drop-Off</td>
                </tr>
                <tr>
                  <td className="p-6 font-black uppercase">Mono-PP Bag</td>
                  <td className="p-6 text-blue-600 font-black">FULLY RECYCLABLE</td>
                  <td className="p-6">Medium/High</td>
                  <td className="p-6">Curbside (Regional)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-white border-b-4 border-black">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-black text-5xl md:text-7xl uppercase text-center mb-16 italic">Snack FAQ</h2>
          <div className="space-y-4">
            {[
              { q: "Is it compatible with nitrogen flush?", a: "Yes. Our recyclable mono-material pouches are fully compatible with modified atmosphere packaging (MAP) to ensure your chips and snacks stay crisp." },
              { q: "Where do consumers recycle these bags?", a: "Mono-PE bags are recycled at participating retail store drop-off locations. We provide clear labeling guides to help your customers dispose of them correctly." },
              { q: "Does it work for high-fat snacks?", a: "Absolutely. Our mono-material structures are engineered for superior grease resistance, preventing oil staining and barrier breakdown." }
            ].map((faq, idx) => (
              <NeoCard key={idx}>
                <h4 className="font-black text-lg mb-2 uppercase flex items-center gap-2">
                  <span className="bg-black text-[#D4FF00] px-2 py-0.5 text-xs">Q</span>
                  {faq.q}
                </h4>
                <p className="text-gray-600 font-['JetBrains_Mono'] text-sm border-l-4 border-black pl-4 mt-4">{faq.a}</p>
              </NeoCard>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-blue-600 text-white border-b-4 border-black">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-10">
          <NeoBadge color="cyan">GET_STARTED_V2</NeoBadge>
          <h2 className="font-black text-6xl md:text-9xl uppercase leading-none">Switch.<br/>Circular.</h2>
          <p className="font-['JetBrains_Mono'] font-bold text-xl opacity-80 max-w-2xl mx-auto">
            Ready to transition your snack brand to 100% recyclable packaging? Get a quote for custom mono-material pouches.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
            <NeoButton variant="primary" to="/sample">Order Recyclable Kit</NeoButton>
            <NeoButton variant="secondary" className="!bg-white !text-black" href="https://calendly.com/30-min-free-packaging-consultancy">
              Free Consultation
            </NeoButton>
          </div>
        </div>
      </section>
    </PouchLayout>
  )
}

export default PouchRecyclableSnackPackagingPage
