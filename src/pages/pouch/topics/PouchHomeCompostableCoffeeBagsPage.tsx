import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Coffee, CheckCircle, Leaf, Zap, ArrowRight, Shield } from 'lucide-react'
import PouchLayout from '../../../components/pouch/PouchLayout'
import { NeoButton, NeoCard, NeoBadge } from '../../../components/pouch/PouchUI'
import { getBaseUrl } from '../../../utils/domain'
import ClickableImage from '../../../components/ClickableImage'

const PouchHomeCompostableCoffeeBagsPage: React.FC = () => {
  const baseUrl = getBaseUrl()

  return (
    <PouchLayout>
      <Helmet>
        <title>Home Compostable Coffee Bags | Eco-Friendly Coffee Packaging | Pouch.eco</title>
        <meta name="description" content="Premium home compostable coffee bags. Certified compostable materials (TUV) with high barrier properties to keep coffee fresh. Perfect for specialty roasters." />
        <link rel="canonical" href={`${baseUrl}/topics/home-compostable-coffee-bags`} />
      </Helmet>

      {/* Hero Section */}
      <section className="relative pt-12 pb-24 border-b-4 border-black bg-[radial-gradient(#d4ff00_1px,transparent_1px)] [background-size:24px_24px] bg-amber-50">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <NeoBadge color="magenta">BREW_SUSTAINABLE_V3</NeoBadge>
          <h1 className="mt-8 font-black text-6xl md:text-9xl leading-none uppercase">Fresh.<br/>Earth.<br/><span className="text-[#D4FF00] drop-shadow-[4px_4px_0px_rgba(0,0,0,1)]">COMPOST</span></h1>
          <p className="mt-8 text-xl md:text-2xl font-bold font-['JetBrains_Mono'] text-gray-800 max-w-3xl mx-auto bg-white border-4 border-black p-6 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
            Specialty coffee deserves specialty packaging. Our home compostable bags break down in your garden, not in the warehouse.
          </p>
          <div className="mt-12 flex flex-wrap justify-center gap-6">
            <NeoButton variant="primary" to="/quote">Get Coffee Quote</NeoButton>
            <NeoButton variant="secondary" to="/sample">Request Fresh Kit</NeoButton>
          </div>
        </div>
      </section>

      {/* Product Spotlight */}
      <section className="py-24 bg-white border-b-4 border-black">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <NeoBadge color="blue">HIGH_BARRIER_TECH</NeoBadge>
            <h2 className="font-black text-5xl md:text-7xl mt-6 uppercase leading-tight italic">Zero Waste.<br/>Full Aroma.</h2>
            <p className="mt-8 text-xl text-gray-600 font-['JetBrains_Mono'] leading-relaxed">
              We've solved the oxygen barrier problem. Our compostable coffee bags feature high-performance bio-films that keep your beans at peak freshness while remaining 100% home compostable.
            </p>
            <div className="mt-8 space-y-4">
              <div className="flex items-center gap-4 bg-amber-50 border-l-8 border-amber-600 p-4">
                <Leaf className="text-amber-600 w-8 h-8 flex-shrink-0" />
                <span className="font-black uppercase text-sm">TUV OK Home Compost Certified</span>
              </div>
              <div className="flex items-center gap-4 bg-cyan-50 border-l-8 border-cyan-600 p-4">
                <Shield className="text-cyan-600 w-8 h-8 flex-shrink-0" />
                <span className="font-black uppercase text-sm">High Oxygen & Moisture Barrier</span>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-amber-400 translate-x-4 translate-y-4 border-4 border-black" />
            <ClickableImage 
              src="/imgs/topics/compostable_coffee_bags.png" 
              alt="Home Compostable Coffee Bags" 
              className="relative z-10 border-4 border-black w-full"
            />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-blue-50 border-b-4 border-black">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-black text-5xl uppercase italic mb-12">Roaster FAQs</h2>
          <div className="space-y-6">
            <NeoCard color="bg-white">
              <h4 className="font-black text-xl mb-2">How long does it take to compost?</h4>
              <p className="font-['JetBrains_Mono'] text-gray-600">In a home compost bin, these bags typically break down within 180-360 days depending on environmental conditions.</p>
            </NeoCard>
            <NeoCard color="bg-white">
              <h4 className="font-black text-xl mb-2">Do they have degas valves?</h4>
              <p className="font-['JetBrains_Mono'] text-gray-600">Yes, we offer compostable degas valves that allow CO2 to escape without letting oxygen in.</p>
            </NeoCard>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-[#D4FF00] border-b-4 border-black">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-12">
          <h2 className="font-black text-6xl md:text-9xl uppercase leading-none italic">Brew<br/>Better.</h2>
          <NeoButton variant="dark" to="/quote">Get Compostable Quote</NeoButton>
        </div>
      </section>
    </PouchLayout>
  )
}

export default PouchHomeCompostableCoffeeBagsPage
