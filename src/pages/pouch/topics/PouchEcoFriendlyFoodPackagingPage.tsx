import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Leaf, Package, CheckCircle, Award, Zap, Globe, Factory, Recycle, BarChart3, ArrowLeftRight, TrendingUp, ShoppingBag, Sparkles, Target, Shield, MessageCircle, Thermometer, Wind, Droplets } from 'lucide-react'
import PouchLayout from '../../../components/pouch/PouchLayout'
import { NeoButton, NeoCard, NeoBadge } from '../../../components/pouch/PouchUI'
import { getBaseUrl } from '../../../utils/domain'

const PouchEcoFriendlyFoodPackagingPage: React.FC = () => {
  const baseUrl = getBaseUrl()
  
  const PERFORMANCE_MATRIX = [
    { label: 'Oxygen Barrier', value: '< 1.0', unit: 'cc/m²/day', desc: 'Prevents spoilage and rancidity.' },
    { label: 'Moisture Barrier', value: '< 1.5', unit: 'g/m²/day', desc: 'Maintains product crispness.' },
    { label: 'Heat Resistance', value: '110°C', unit: 'Max Temp', desc: 'Safe for hot-fill and sterilization.' },
    { label: 'Seal Strength', value: '> 15', unit: 'N/15mm', desc: 'Heavy-duty structural integrity.' }
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
      <section className="relative pt-12 pb-24 border-b-4 border-black bg-[radial-gradient(#166534_1px,transparent_1px)] [background-size:24px_24px] bg-green-50">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <NeoBadge color="green">FOOD_SYSTEM_V4.0</NeoBadge>
          <h1 className="mt-8 font-black text-6xl md:text-9xl leading-none uppercase italic">Fresh.<br/>Safe.<br/><span className="text-green-700 drop-shadow-[4px_4px_0px_rgba(0,0,0,1)]">Soil.</span></h1>
          <p className="mt-8 text-xl md:text-2xl font-bold font-['JetBrains_Mono'] text-gray-800 max-w-3xl mx-auto bg-white border-4 border-black p-6 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
            Certified food-safe packaging that doesn't cost the earth. Choose from compostable, recyclable, and bio-based materials designed for industrial shelf-life performance.
          </p>
          <div className="flex flex-wrap justify-center gap-6 mt-12">
            <NeoButton variant="primary" to="/products">Shop Food Catalog</NeoButton>
            <NeoButton variant="secondary" to="/sample">Request Eco Samples</NeoButton>
          </div>
        </div>
      </section>

      {/* Logic Section */}
      <section className="py-24 bg-white border-b-4 border-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="absolute inset-0 bg-green-400 translate-x-4 translate-y-4 border-4 border-black" />
              <img 
                src="/imgs/seo-photos/a_achievepack_barrier_range_comparison_2896222.webp" 
                alt="Eco Food Packaging Performance" 
                className="relative z-10 border-4 border-black w-full shadow-2xl"
              />
            </div>
            <div>
              <NeoBadge color="magenta">SCIENCE_OF_STAYING_FRESH</NeoBadge>
              <h2 className="font-black text-5xl md:text-7xl mt-6 uppercase leading-tight italic">Performance<br/>Matters.</h2>
              <p className="mt-8 text-xl text-gray-600 font-['JetBrains_Mono'] leading-relaxed">
                Sustainability is worthless if your product spoils. We've engineered high-barrier eco-films that match traditional plastics for oxygen and moisture protection.
              </p>
              <div className="mt-8 grid grid-cols-2 gap-4">
                {PERFORMANCE_MATRIX.map((p, i) => (
                  <div key={i} className="bg-white border-4 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                    <h4 className="font-black uppercase text-xs mb-1 text-green-700">{p.label}</h4>
                    <p className="text-xl font-black">{p.value} <span className="text-[10px] opacity-60 font-normal">{p.unit}</span></p>
                    <p className="text-[10px] font-bold opacity-60">{p.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Grid Section */}
      <section className="py-24 bg-[#F0F0F0] border-b-4 border-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            <NeoCard>
              <img src="/imgs/seo-photos/a_food_beverage_vacation_lifestyle_2486493.webp" className="border-2 border-black w-full mb-6" alt="Food Lifestyle" />
              <h4 className="font-black text-xl uppercase mb-2">Artisan Appeal</h4>
              <p className="text-sm font-['JetBrains_Mono'] text-gray-600">Perfect for premium organic brands looking to align their ethics with their aesthetics.</p>
            </NeoCard>
            <NeoCard color="bg-white shadow-[10px_10px_0px_0px_rgba(21,128,61,1)]">
              <img src="/imgs/seo-photos/a_compostable_mixed_materials_lifestyle_kitchen_6722434.webp" className="border-2 border-black w-full mb-6" alt="Compostable Kitchen" />
              <h4 className="font-black text-xl uppercase mb-2">Consumer Trust</h4>
              <p className="text-sm font-['JetBrains_Mono'] text-gray-600">73% of food shoppers are actively seeking brands with third-party verified eco-credentials.</p>
            </NeoCard>
            <NeoCard>
              <div className="p-8 bg-black text-[#D4FF00] h-full flex flex-col justify-center text-center">
                <Shield className="w-16 h-16 mx-auto mb-6" />
                <h4 className="font-black text-3xl uppercase">Safety Audit</h4>
                <p className="text-xs font-bold mt-4 uppercase italic">FDA, EU, and BRC certified manufacturing for total food safety peace of mind.</p>
              </div>
            </NeoCard>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-green-700 text-white border-b-4 border-black">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-12">
          <NeoBadge color="lime">FOOD_SAFE_ACTION</NeoBadge>
          <h2 className="font-black text-6xl md:text-9xl uppercase leading-none italic">Go Green.<br/>Grow Fast.</h2>
          <p className="font-['JetBrains_Mono'] font-bold text-xl opacity-80 max-w-2xl mx-auto">
            Ready to transition your food brand to 100% sustainable packaging? Let's build your eco-story today.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
            <NeoButton variant="primary" to="/sample" className="!bg-white !text-green-700">Order Eco Sample Kit</NeoButton>
            <NeoButton variant="secondary" className="!border-white !text-white" href="https://calendly.com/30-min-free-packaging-consultancy">
              Free Consultation
            </NeoButton>
          </div>
        </div>
      </section>
    </PouchLayout>
  )
}

export default PouchEcoFriendlyFoodPackagingPage
