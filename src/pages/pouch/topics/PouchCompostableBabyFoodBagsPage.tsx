import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Baby, Package, CheckCircle, Award, Calendar, MessageCircle, Target, Shield, Heart, AlertTriangle, FileCheck, Factory, BarChart3, ArrowLeftRight, TrendingUp, ShoppingBag, Sparkles, ArrowRight, Zap, Droplets, Thermometer } from 'lucide-react'
import PouchLayout from '../../../components/pouch/PouchLayout'
import { NeoButton, NeoCard, NeoBadge } from '../../../components/pouch/PouchUI'
import { getBaseUrl } from '../../../utils/domain'

const PouchCompostableBabyFoodBagsPage: React.FC = () => {
  const baseUrl = getBaseUrl()

  const SAFETY_METRICS = [
    { label: 'BPA Migration', value: '0.00%', desc: 'Certified zero-migration polymers.' },
    { label: 'Phthalate Free', value: '100%', desc: 'Safe for direct infant food contact.' },
    { label: 'Heavy Metals', value: 'Non-Detect', desc: 'Verified by ASTM F963 standards.' },
    { label: 'Heat Stable', value: '95°C', desc: 'Safe for hot-fill puree processes.' }
  ]

  return (
    <PouchLayout>
      <Helmet>
        <title>Compostable Baby Food Pouches | Certified Food-Safe | Pouch.eco</title>
        <meta name="description" content="TUV certified compostable baby food pouches. FDA compliant, BPA-free, and phthalate-free. Spout pouches and stand-up formats for organic brands. Low 500 unit MOQ." />
        <link rel="canonical" href={`${baseUrl}/topics/compostable-baby-food-bags`} />
        <meta name="keywords" content="compostable baby food pouches, certified baby food packaging, organic baby food bags, BPA-free baby pouches, Pouch.eco" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative pt-12 pb-24 border-b-4 border-black bg-[radial-gradient(#ff0080_1px,transparent_1px)] [background-size:24px_24px] bg-pink-50">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <NeoBadge color="magenta">INFANT_SAFETY_V4.1</NeoBadge>
          <h1 className="mt-8 font-black text-6xl md:text-9xl leading-none uppercase">
            Pure.<br/>Safe.<br/>
            <span className="text-[#FF0080] drop-shadow-[4px_4px_0px_rgba(0,0,0,1)]">Soil.</span>
          </h1>
          <p className="mt-8 text-xl md:text-2xl font-bold font-['JetBrains_Mono'] text-gray-800 max-w-3xl mx-auto bg-white border-4 border-black p-6 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
            TUV Certified Compostable baby food packaging. Engineered with zero chemical migration tech for the most sensitive organic brands.
          </p>
          <div className="flex flex-wrap justify-center gap-6 mt-12">
            <NeoButton variant="primary" to="/industry/baby-food">View Tech Guide</NeoButton>
            <NeoButton variant="secondary" to="/sample">Request Safety Kit</NeoButton>
          </div>
        </div>
      </section>

      {/* Safety Section */}
      <section className="py-24 bg-white border-b-4 border-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="absolute inset-0 bg-[#00FFFF] translate-x-4 translate-y-4 border-4 border-black" />
              <img 
                src="/imgs/demo-site/baby/achieve_baby_realistic_hero.png" 
                alt="Safe Baby Food Packaging" 
                className="relative z-10 border-4 border-black w-full"
              />
            </div>
            <div>
              <NeoBadge color="cyan">CERTIFIED_CLEAN</NeoBadge>
              <h2 className="font-black text-5xl md:text-7xl mt-6 uppercase leading-tight italic text-pink-600">Trust is<br/>Everything.</h2>
              <p className="mt-8 text-xl text-gray-600 font-['JetBrains_Mono'] leading-relaxed">
                Baby food brands face the world's strictest packaging scrutiny. Our materials undergo rigorous independent lab testing to guarantee zero leaching of BPA, phthalates, or microplastics.
              </p>
              <div className="mt-8 grid grid-cols-2 gap-4">
                {SAFETY_METRICS.map((m, i) => (
                  <div key={i} className="bg-white border-4 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                    <h4 className="font-black uppercase text-xs mb-1 text-pink-600">{m.label}</h4>
                    <p className="text-xl font-black">{m.value}</p>
                    <p className="text-[10px] font-bold opacity-60">{m.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Showcase */}
      <section className="py-24 bg-black text-white border-b-4 border-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <NeoBadge color="magenta">SPOUT_INNOVATION</NeoBadge>
              <h2 className="font-black text-5xl md:text-7xl uppercase mt-6 text-[#D4FF00]">Squeeze.<br/>Compost.</h2>
              <p className="mt-8 text-xl font-['JetBrains_Mono'] opacity-80 leading-relaxed">
                We've developed the world's first fully compostable spout assembly. The pouch, the spout, and the child-safe cap all return to soil in 180 days.
              </p>
              <div className="mt-8 space-y-4">
                <div className="flex items-center gap-4 bg-white/10 p-4 border-l-4 border-[#D4FF00]">
                  <CheckCircle className="text-[#D4FF00] w-6 h-6" />
                  <span className="font-black uppercase text-sm">Choke-Hazard Safe Cap Designs</span>
                </div>
                <div className="flex items-center gap-4 bg-white/10 p-4 border-l-4 border-[#D4FF00]">
                  <CheckCircle className="text-[#D4FF00] w-6 h-6" />
                  <span className="font-black uppercase text-sm">Anti-Leak Valve Integration</span>
                </div>
              </div>
            </div>
            <div className="relative order-1 lg:order-2">
              <div className="absolute inset-0 bg-pink-600 translate-x-4 translate-y-4 border-4 border-white" />
              <img 
                src="/imgs/demo-site/baby/achieve_baby_pea_realistic.png" 
                alt="Compostable Spout Pouch" 
                className="relative z-10 border-4 border-white w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Compliance Matrix */}
      <section className="py-24 bg-[#F0F0F0] border-b-4 border-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <NeoBadge color="blue">GLOBAL_SAFETY_STANDARDS</NeoBadge>
            <h2 className="font-black text-5xl md:text-7xl uppercase mt-4 italic">No Compromise.</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <NeoCard>
              <FileCheck className="w-12 h-12 mb-6 text-pink-600" />
              <h4 className="font-black text-2xl uppercase mb-4">FDA 21 CFR</h4>
              <p className="text-sm font-['JetBrains_Mono'] text-gray-600">Full compliance with US Food & Drug Administration regulations for direct food contact in infants and toddlers.</p>
            </NeoCard>
            <NeoCard color="bg-white shadow-[10px_10px_0px_0px_rgba(255,0,128,1)]">
              <Shield className="w-12 h-12 mb-6 text-blue-600" />
              <h4 className="font-black text-2xl uppercase mb-4">EU 10/2011</h4>
              <p className="text-sm font-['JetBrains_Mono'] text-gray-600">European safety verification for overall and specific migration limits, ensuring maximum purity for delicate systems.</p>
            </NeoCard>
            <NeoCard>
              <Award className="w-12 h-12 mb-6 text-green-600" />
              <h4 className="font-black text-2xl uppercase mb-4">TUV OK Home</h4>
              <p className="text-sm font-['JetBrains_Mono'] text-gray-600">Certified to break down in backyard compost bins, allowing parents to dispose of waste responsibly at home.</p>
            </NeoCard>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-pink-600 text-white border-b-4 border-black">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-10">
          <NeoBadge color="lime">SOIL_FRIENDLY</NeoBadge>
          <h2 className="font-black text-6xl md:text-9xl uppercase leading-none">Protect Their<br/>Future.</h2>
          <p className="font-['JetBrains_Mono'] font-bold text-xl opacity-80 max-w-2xl mx-auto">
            Switch to the world's cleanest certified compostable baby food packaging today.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
            <NeoButton variant="primary" to="/sample" className="!bg-white !text-pink-600">Get Safety Samples</NeoButton>
            <NeoButton variant="secondary" className="!border-white !text-white" href="https://calendly.com/30-min-free-packaging-consultancy">
              Consultancy Call
            </NeoButton>
          </div>
        </div>
      </section>
    </PouchLayout>
  )
}

export default PouchCompostableBabyFoodBagsPage
