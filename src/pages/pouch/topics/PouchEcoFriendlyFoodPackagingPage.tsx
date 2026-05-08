import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Leaf, Package, CheckCircle, Award, Zap, Globe, Factory, Recycle, BarChart3, ArrowLeftRight, TrendingUp, ShoppingBag, Sparkles, Target, Shield, MessageCircle } from 'lucide-react'
import PouchLayout from '../../../components/pouch/PouchLayout'
import { NeoButton, NeoCard, NeoBadge } from '../../../components/pouch/PouchUI'
import { getBaseUrl } from '../../../utils/domain'

const PouchEcoFriendlyFoodPackagingPage: React.FC = () => {
  const baseUrl = getBaseUrl()
  
  const MATERIAL_CATEGORIES = [
    { title: 'Certified Compostable', desc: 'Home & Industrial certified. Breaks down in 90-180 days.', color: 'green' },
    { title: 'Recyclable Mono-PE', desc: 'Single-material structure, fully recyclable in PE streams.', color: 'blue' },
    { title: 'Bio-Based PE', desc: 'Sugarcane-derived, carbon-negative production.', color: 'amber' },
    { title: 'PCR Content', desc: '30-100% post-consumer recycled plastic. FDA food-safe.', color: 'purple' }
  ]

  return (
    <PouchLayout>
      <Helmet>
        <title>Eco-Friendly Food Packaging | Sustainable Solutions | Pouch.eco</title>
        <meta name="description" content="Certified eco-friendly packaging for food brands. Compostable, recyclable, and bio-based pouches with food-safe certifications. FDA and EU compliant." />
        <link rel="canonical" href={`${baseUrl}/topics/eco-friendly-food-packaging`} />
        <meta name="keywords" content="eco-friendly food packaging, sustainable pouches, compostable bags, recyclable food bags" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative pt-12 pb-24 border-b-4 border-black bg-[radial-gradient(#14532d_1px,transparent_1px)] [background-size:24px_24px] bg-green-50">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <NeoBadge color="green">ECO_SYSTEM_V2.0</NeoBadge>
          <h1 className="mt-8 font-black text-6xl md:text-9xl leading-none uppercase">
            Fresh.<br/>Safe.<br/>
            <span className="text-green-700 drop-shadow-[4px_4px_0px_rgba(0,0,0,1)]">Circular.</span>
          </h1>
          <p className="mt-8 text-xl md:text-2xl font-bold font-['JetBrains_Mono'] text-gray-800 max-w-3xl mx-auto bg-white border-4 border-black p-6 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
            Elite food packaging that doesn't cost the earth. Choose from third-party certified compostable, recyclable, and bio-based materials designed for shelf-life performance.
          </p>
          <div className="flex flex-wrap justify-center gap-6 mt-12">
            <NeoButton variant="primary" to="/products">View Food Catalog</NeoButton>
            <NeoButton variant="secondary" to="/sample">Order Eco Sample Kit</NeoButton>
          </div>
        </div>
      </section>

      {/* Grid of Materials */}
      <section className="py-24 bg-white border-b-4 border-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {MATERIAL_CATEGORIES.map((cat, i) => (
              <NeoCard key={i} className="group hover:-translate-y-2 transition-transform cursor-default">
                <div className={`w-12 h-12 mb-6 border-4 border-black bg-${cat.color}-400 group-hover:rotate-12 transition-transform`} />
                <h3 className="font-black text-xl uppercase mb-4">{cat.title}</h3>
                <p className="text-sm font-['JetBrains_Mono'] text-gray-600">{cat.desc}</p>
              </NeoCard>
            ))}
          </div>
        </div>
      </section>

      {/* Visual Image Section */}
      <section className="py-24 bg-[#F0F0F0] border-b-4 border-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="absolute inset-0 bg-green-400 translate-x-4 translate-y-4 border-4 border-black" />
              <img 
                src="/imgs/seo-photos/a_compostable_packaging_pouch_achieve_pack_2674607.webp" 
                alt="Eco Food Packaging" 
                className="relative z-10 border-4 border-black w-full"
              />
            </div>
            <div>
              <NeoBadge color="magenta">FOOD_SAFE_CERTIFIED</NeoBadge>
              <h2 className="font-black text-5xl md:text-7xl uppercase mt-6 leading-tight italic">Performance<br/>Matters.</h2>
              <p className="mt-8 text-xl text-gray-600 font-['JetBrains_Mono'] leading-relaxed">
                Sustainability shouldn't mean compromised freshness. Our eco-friendly pouches are engineered with high-barrier films that match traditional plastic's shelf-life benchmarks.
              </p>
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-white border-4 border-black p-4">
                  <h4 className="font-black uppercase text-xs mb-1">COFFEE & TEA</h4>
                  <p className="text-[10px] font-bold">One-way degassing valves + high oxygen barrier.</p>
                </div>
                <div className="bg-white border-4 border-black p-4">
                  <h4 className="font-black uppercase text-xs mb-1">SNACKS & CHIPS</h4>
                  <p className="text-[10px] font-bold">Nitrogen flush compatible + grease resistance.</p>
                </div>
                <div className="bg-white border-4 border-black p-4">
                  <h4 className="font-black uppercase text-xs mb-1">PET FOOD</h4>
                  <p className="text-[10px] font-bold">Puncture resistant + heavy-duty resealable zippers.</p>
                </div>
                <div className="bg-white border-4 border-black p-4">
                  <h4 className="font-black uppercase text-xs mb-1">SUPPLEMENTS</h4>
                  <p className="text-[10px] font-bold">Moisture barrier + UV protection for stability.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Compliance Section */}
      <section className="py-24 bg-black text-white border-b-4 border-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="font-black text-5xl md:text-7xl uppercase text-green-400">Compliance & Trust</h2>
            <p className="font-['JetBrains_Mono'] text-xl mt-4 opacity-70">Third-party verified credentials for global food markets.</p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="border-4 border-white p-8 text-center hover:bg-white hover:text-black transition-colors">
              <div className="text-4xl mb-4">🌱</div>
              <h4 className="font-black uppercase">TUV OK Home</h4>
              <p className="text-[10px] mt-2 font-bold">Home Compostable Certified</p>
            </div>
            <div className="border-4 border-white p-8 text-center hover:bg-white hover:text-black transition-colors">
              <div className="text-4xl mb-4">🇪🇺</div>
              <h4 className="font-black uppercase">EN 13432</h4>
              <p className="text-[10px] mt-2 font-bold">EU Industrial Compostable</p>
            </div>
            <div className="border-4 border-white p-8 text-center hover:bg-white hover:text-black transition-colors">
              <div className="text-4xl mb-4">🇺🇸</div>
              <h4 className="font-black uppercase">ASTM D6400</h4>
              <p className="text-[10px] mt-2 font-bold">US Compostable Standard</p>
            </div>
            <div className="border-4 border-white p-8 text-center hover:bg-white hover:text-black transition-colors">
              <div className="text-4xl mb-4">♻️</div>
              <h4 className="font-black uppercase">How2Recycle</h4>
              <p className="text-[10px] mt-2 font-bold">Recyclability Verified</p>
            </div>
          </div>
        </div>
      </section>

      {/* Market Data */}
      <section className="py-24 bg-white border-b-4 border-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <NeoBadge color="blue">MARKET_INTEL</NeoBadge>
              <h2 className="font-black text-5xl uppercase mt-6 mb-8">Consumer Reality.</h2>
              <div className="space-y-6">
                <div className="flex items-end gap-4">
                  <div className="text-7xl font-black text-green-600 leading-none">73%</div>
                  <p className="font-['JetBrains_Mono'] font-bold text-sm mb-1 uppercase">Consumers willing to pay a premium for eco-packaging.</p>
                </div>
                <div className="flex items-end gap-4">
                  <div className="text-7xl font-black text-blue-600 leading-none">85%</div>
                  <p className="font-['JetBrains_Mono'] font-bold text-sm mb-1 uppercase">Retailers have set strict packaging sustainability goals.</p>
                </div>
              </div>
            </div>
            <NeoCard color="bg-[#D4FF00] shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
              <h4 className="font-black text-2xl uppercase mb-4 italic">The Retail Shift</h4>
              <p className="text-sm font-['JetBrains_Mono'] leading-loose">
                Major global retailers are now mandating "Certified Sustainable" status for all private labels and key brands. By switching to Pouch.eco certified materials, you ensure your brand is future-proofed against upcoming plastic regulations and retailer bans.
              </p>
            </NeoCard>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-[#F0F0F0] border-b-4 border-black">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-black text-5xl md:text-7xl uppercase text-center mb-20">Eco Food FAQ</h2>
          <div className="space-y-6">
            <NeoCard>
              <h4 className="font-black text-xl mb-4 uppercase">Are your materials food-safe?</h4>
              <p className="text-gray-600 font-['JetBrains_Mono'] text-sm border-l-4 border-black pl-4">Yes. All our eco-friendly materials are FDA compliant, EU food-contact approved, and manufactured in BRC-certified facilities.</p>
            </NeoCard>
            <NeoCard>
              <h4 className="font-black text-xl mb-4 uppercase">What is the MOQ for food pouches?</h4>
              <p className="text-gray-600 font-['JetBrains_Mono'] text-sm border-l-4 border-black pl-4">We offer digital printing from just 100 pieces, allowing you to test different sustainable materials before committing to larger production runs.</p>
            </NeoCard>
            <NeoCard>
              <h4 className="font-black text-xl mb-4 uppercase">How does shelf-life compare?</h4>
              <p className="text-gray-600 font-['JetBrains_Mono'] text-sm border-l-4 border-black pl-4">Most food products perform well with 12-18 month stability in our high-barrier eco materials, comparable to traditional multi-layer films.</p>
            </NeoCard>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-green-600 text-white border-b-4 border-black">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-10">
          <NeoBadge color="magenta">ACTION_REQUIRED</NeoBadge>
          <h2 className="font-black text-6xl md:text-9xl uppercase leading-none italic">Go Green.<br/>Grow Fast.</h2>
          <p className="font-['JetBrains_Mono'] font-bold text-xl opacity-80 max-w-2xl mx-auto">
            Ready to transition your food brand to 100% sustainable packaging? Let's build your eco-story today.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
            <NeoButton variant="primary" to="/sample">Get Sample Pack</NeoButton>
            <NeoButton variant="secondary" className="!bg-white !text-black" href="https://calendly.com/30-min-free-packaging-consultancy">
              Free Consultation
            </NeoButton>
          </div>
        </div>
      </section>
    </PouchLayout>
  )
}

export default PouchEcoFriendlyFoodPackagingPage
