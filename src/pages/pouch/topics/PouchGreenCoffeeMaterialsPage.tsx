import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Leaf, Package, CheckCircle, Award, Calendar, MessageCircle, Target, Shield, Zap, Globe, Factory, BarChart3, ArrowLeftRight, TrendingUp, ShoppingBag, Sparkles, ArrowRight, Bean } from 'lucide-react'
import PouchLayout from '../../components/pouch/PouchLayout'
import { NeoButton, NeoCard, NeoBadge } from '../../components/pouch/PouchUI'
import { getBaseUrl } from '../../utils/domain'

const PouchGreenCoffeeMaterialsPage: React.FC = () => {
  const baseUrl = getBaseUrl()

  return (
    <PouchLayout>
      <Helmet>
        <title>Sustainable Coffee Packaging | Compostable Coffee Bags | Pouch.eco</title>
        <meta name="description" content="Certified sustainable materials for the coffee industry. Compostable, recyclable, and bio-based coffee bags with degassing valves. High barrier protection for fresh aroma." />
        <link rel="canonical" href={`${baseUrl}/topics/green-coffee-materials`} />
        <meta name="keywords" content="sustainable coffee packaging, compostable coffee bags, green coffee materials, recyclable coffee pouches, Pouch.eco" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative pt-12 pb-24 border-b-4 border-black bg-[radial-gradient(#451a03_1px,transparent_1px)] [background-size:24px_24px]">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <NeoBadge color="lime">COFFEE_PURITY_LEVEL_99</NeoBadge>
          <h1 className="mt-8 font-black text-6xl md:text-9xl leading-none uppercase">
            Fresh.<br/>
            Green.<br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4FF00] to-[#00FFFF] drop-shadow-[4px_4px_0px_rgba(0,0,0,1)]">Roast.</span>
          </h1>
          <p className="mt-8 text-xl md:text-2xl font-bold font-['JetBrains_Mono'] text-gray-800 max-w-3xl mx-auto bg-white border-2 border-black p-4 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
            High-barrier sustainable coffee bags. Integrated degassing valves. Certified compostable & recyclable.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-12">
            <NeoButton variant="primary" to="/industry/coffee-tea">Coffee Industry Guide</NeoButton>
            <NeoButton variant="secondary" to="/sample">Request Freshness Samples</NeoButton>
          </div>
        </div>
      </section>

      {/* High Barrier Section */}
      <section className="py-24 bg-white border-b-4 border-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <NeoBadge color="magenta">BARRIER_MAX</NeoBadge>
              <h2 className="font-black text-5xl mt-6 uppercase leading-tight">Freshness is<br/>Non-Negotiable.</h2>
              <p className="mt-6 text-xl text-gray-600 font-['JetBrains_Mono']">
                Coffee is sensitive. Our multi-layer sustainable films block oxygen, moisture, and UV light while allowing CO2 to escape through our eco-friendly valves.
              </p>
              <div className="mt-12 space-y-4">
                {[
                  { icon: Zap, title: 'Degassing Valves', desc: 'Allow CO2 to escape without letting oxygen in.' },
                  { icon: Shield, title: 'EVOH-Free Barriers', desc: 'Fully recyclable or compostable barrier layers.' },
                  { icon: Award, title: 'Aroma Retention', desc: 'Locks in oils and volatiles for peak flavor.' },
                ].map((s, i) => (
                  <div key={i} className="flex items-start gap-4 p-4 border-2 border-black shadow-[4px_4px_0px_0px_rgba(212,255,0,1)]">
                    <s.icon className="w-8 h-8 text-black" />
                    <div>
                      <h4 className="font-black text-lg uppercase">{s.title}</h4>
                      <p className="text-sm opacity-70 font-['JetBrains_Mono']">{s.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-[#451a03] translate-x-4 translate-y-4 border-4 border-black" />
              <img 
                src="/imgs/seo-photos/a_bean_bole_coffee_roastery_8131919.webp" 
                alt="Sustainable Coffee Packaging" 
                className="relative z-10 border-4 border-black w-full grayscale"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Coffee Stats */}
      <section className="py-24 bg-black text-[#D4FF00] border-b-4 border-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-6xl font-black mb-2">72%</p>
              <p className="font-bold uppercase text-xs text-white">Roasters prioritizing eco-materials</p>
            </div>
            <div>
              <p className="text-6xl font-black mb-2">90D</p>
              <p className="font-bold uppercase text-xs text-white">Composting time (TUV Home)</p>
            </div>
            <div>
              <p className="text-6xl font-black mb-2">0%</p>
              <p className="font-bold uppercase text-xs text-white">Flavor compromise guarantee</p>
            </div>
            <div>
              <p className="text-6xl font-black mb-2">500</p>
              <p className="font-bold uppercase text-xs text-white">Minimum unit order</p>
            </div>
          </div>
        </div>
      </section>

      {/* AIEO FAQ */}
      <section className="py-24 bg-[#F0F0F0] border-b-4 border-black">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-black text-5xl text-center mb-16 uppercase">Roaster FAQ</h2>
          <div className="space-y-4">
            {[
              { q: "Can compostable coffee bags have valves?", a: "Yes. We offer fully compostable degassing valves that can be pre-applied to our bags. Both the valve and the bag will break down together in home or industrial composting." },
              { q: "Do these bags preserve aroma as well as plastic?", a: "Our sustainable films use high-barrier plant-based layers (like cellulose and PLA) that offer oxygen transmission rates (OTR) comparable to traditional foil laminates." },
              { q: "Can I use these bags for whole beans and ground coffee?", a: "Yes. Our barriers are designed to handle both. Ground coffee has more surface area and is more sensitive to oxidation, which is why we use our highest-spec barrier for all coffee orders." },
              { q: "Are they suitable for automatic filling machines?", a: "Yes. Our bags are designed with the correct coefficient of friction (COF) to run smoothly on standard VFFS and pre-made pouch filling equipment." }
            ].map((faq, idx) => (
              <NeoCard key={idx} color="bg-white">
                <h4 className="font-black text-xl mb-4 flex items-center gap-2">
                  <span className="bg-[#D4FF00] text-black px-2 py-0.5 text-xs">ROAST_INTEL</span>
                  {faq.q}
                </h4>
                <p className="text-gray-600 font-['JetBrains_Mono'] text-sm border-l-4 border-black pl-4 mt-4">{faq.a}</p>
              </NeoCard>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-black text-[#D4FF00]">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-8">
          <h2 className="font-black text-5xl md:text-8xl uppercase text-white leading-none">Upgrade Your<br/>Roast.</h2>
          <p className="font-['JetBrains_Mono'] font-bold text-xl text-white opacity-80">
            Switch to the world's most sustainable coffee packaging.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <NeoButton variant="primary" to="/sample">Order Coffee Samples</NeoButton>
            <NeoButton variant="secondary" className="!text-black" href="https://calendly.com/30-min-free-packaging-consultancy">
              Free Consultation <ArrowRight className="inline ml-2" />
            </NeoButton>
          </div>
        </div>
      </section>
    </PouchLayout>
  )
}

export default PouchGreenCoffeeMaterialsPage
