import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Coffee, Shield, Zap, Globe, Factory, BarChart3, ArrowLeftRight, TrendingUp, ShoppingBag, Sparkles, Target, Wind, Droplets, Thermometer, CheckCircle, MessageCircle } from 'lucide-react'
import PouchLayout from '../../../components/pouch/PouchLayout'
import { NeoButton, NeoCard, NeoBadge } from '../../../components/pouch/PouchUI'
import { getBaseUrl } from '../../../utils/domain'
import ClickableImage from '../../../components/ClickableImage'

const PouchGreenCoffeeMaterialsPage: React.FC = () => {
  const baseUrl = getBaseUrl()
  
  const BARRIER_STATS = [
    { icon: Wind, label: 'Oxygen Barrier', value: '< 1g/m²', desc: 'EVOH and AlOx coatings replace heavy aluminum foil.' },
    { icon: Droplets, label: 'Moisture Lock', value: 'High VTR', desc: 'Superior WVTR protection for whole bean freshness.' },
    { icon: Thermometer, label: 'UV Shield', value: 'Light Lock', desc: 'Opaque structures prevent light-induced oxidation.' },
    { icon: Coffee, label: 'Aroma Retention', value: 'Seal Integrity', desc: 'Keeps delicate oils and aromatic compounds trapped.' }
  ]

  return (
    <PouchLayout>
      <Helmet>
        <title>Green Coffee Packaging Materials | Sustainable Coffee Bags | Pouch.eco</title>
        <meta name="description" content="Deep dive into green coffee packaging materials. High-barrier compostable, recyclable mono-PE, and bio-based options for specialty roasters." />
        <link rel="canonical" href={`${baseUrl}/topics/green-coffee-materials`} />
        <meta name="keywords" content="coffee packaging, green coffee materials, compostable coffee bags, recyclable coffee bags, coffee degassing valve" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative pt-12 pb-24 border-b-4 border-black bg-[radial-gradient(#8b4513_1px,transparent_1px)] [background-size:24px_24px] bg-[#fffcf5]">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <NeoBadge color="amber">COFFEE_CORE_V5.0</NeoBadge>
          <h1 className="mt-8 font-black text-6xl md:text-9xl leading-none uppercase">
            Freshness.<br/>Filtered.<br/>
            <span className="text-[#8b4513] drop-shadow-[4px_4px_0px_rgba(0,0,0,1)]">Green.</span>
          </h1>
          <p className="mt-8 text-xl md:text-2xl font-bold font-['JetBrains_Mono'] text-gray-800 max-w-3xl mx-auto bg-white border-4 border-black p-6 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
            Coffee demands elite barrier properties. Our materials offer the industry's highest WVTR and Oxygen protection in 100% compostable or recyclable formats.
          </p>
          <div className="flex flex-wrap justify-center gap-6 mt-12">
            <NeoButton variant="primary" to="/products">Shop Coffee Bags</NeoButton>
            <NeoButton variant="secondary" to="/sample">Order Barrier Samples</NeoButton>
          </div>
        </div>
      </section>

      {/* Barrier Science Grid */}
      <section className="py-24 bg-white border-b-4 border-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <NeoBadge color="magenta">BARRIER_SCIENCE</NeoBadge>
            <h2 className="font-black text-5xl uppercase mt-4">The Enemies of Freshness.</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {BARRIER_STATS.map((stat, i) => (
              <NeoCard key={i} className="hover:-translate-y-2 transition-transform">
                <stat.icon className="w-12 h-12 mb-6 text-amber-700" />
                <h3 className="font-black text-xl uppercase mb-1">{stat.label}</h3>
                <div className="text-3xl font-black text-amber-600 mb-4">{stat.value}</div>
                <p className="text-sm font-['JetBrains_Mono'] text-gray-600">{stat.desc}</p>
              </NeoCard>
            ))}
          </div>
        </div>
      </section>

      {/* Visual Product Gallery Section */}
      <section className="py-24 bg-[#fffcf5] border-b-4 border-black">
        <div className="max-w-7xl mx-auto px-6">
          <NeoBadge color="amber">ROASTER_FAVORITES</NeoBadge>
          <h2 className="font-black text-5xl md:text-7xl mt-6 uppercase leading-tight italic mb-12">Visual<br/>Showcase</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <ClickableImage 
              src="/imgs/topics/green_coffee_materials_1778212283713.png" 
              alt="Sustainable coffee bag" 
              className="w-full h-48 object-cover rounded-none border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
              caption="Compostable Bags"
            />
            <ClickableImage 
              src="/imgs/store/pouch shape/flat-bottom.webp" 
              alt="Flat bottom coffee bag" 
              className="w-full h-48 object-cover rounded-none border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
              caption="Flat Bottom"
            />
            <ClickableImage 
              src="/imgs/store/pouch shape/side -seal.webp" 
              alt="Side gusset coffee bag" 
              className="w-full h-48 object-cover rounded-none border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
              caption="Side Gusset"
            />
            <ClickableImage 
              src="/imgs/store/pouch shape/stand-up.webp" 
              alt="Stand up coffee pouch" 
              className="w-full h-48 object-cover rounded-none border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
              caption="Stand Up Pouches"
            />
          </div>
        </div>
      </section>

      {/* Coffee Specific Solutions */}
      <section className="py-24 bg-[#F0F0F0] border-b-4 border-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="absolute inset-0 bg-amber-400 translate-x-4 translate-y-4 border-4 border-black" />
              <img 
                src="/imgs/seo-photos/usa/coffee/a_specialty_coffee_packaging_hero_4333484.webp" 
                alt="Specialty Coffee Packaging" 
                className="relative z-10 border-4 border-black w-full"
              />
            </div>
            <div>
              <NeoBadge color="blue">ROASTER_RECOMMENDED</NeoBadge>
              <h2 className="font-black text-5xl md:text-7xl uppercase mt-6 leading-tight">Artisan<br/>Alignment.</h2>
              <p className="mt-8 text-xl text-gray-600 font-['JetBrains_Mono'] leading-relaxed">
                Specialty coffee roasting is an art. Don't let your packaging be an afterthought. Our materials are compatible with one-way degassing valves to ensure your roast degasses safely while maintaining peak flavor.
              </p>
              <div className="mt-8 space-y-4">
                <div className="flex items-center gap-4 bg-white border-2 border-black p-4">
                  <CheckCircle className="text-amber-700 w-6 h-6 flex-shrink-0" />
                  <span className="font-black uppercase text-sm">Degassing Valve Ready (Bio-valves available)</span>
                </div>
                <div className="flex items-center gap-4 bg-white border-2 border-black p-4">
                  <CheckCircle className="text-amber-700 w-6 h-6 flex-shrink-0" />
                  <span className="font-black uppercase text-sm">Tin-Tie & Zipper Options for Resealability</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-24 bg-black text-white border-b-4 border-black">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-black text-5xl md:text-7xl uppercase mb-16 text-center text-amber-400">Coffee Barrier Index</h2>
          <div className="overflow-x-auto border-4 border-white bg-black">
            <table className="w-full font-['JetBrains_Mono'] text-sm">
              <thead className="bg-white text-black border-b-4 border-black">
                <tr>
                  <th className="p-6 text-left">MATERIAL</th>
                  <th className="p-6 text-left">SHELF LIFE</th>
                  <th className="p-6 text-left">ECO PATH</th>
                  <th className="p-6 text-left">BEST FOR</th>
                </tr>
              </thead>
              <tbody className="divide-y-2 divide-white/20">
                <tr>
                  <td className="p-6 font-black uppercase">High-Barrier Compostable</td>
                  <td className="p-6">12-18 Months</td>
                  <td className="p-6 text-green-400">Industrial Compost</td>
                  <td className="p-6">Medium/Dark Roast</td>
                </tr>
                <tr className="bg-white/5">
                  <td className="p-6 font-black uppercase">Mono-PE Recyclable</td>
                  <td className="p-6 text-amber-400 font-bold">18-24 Months</td>
                  <td className="p-6 text-blue-400">Store Drop-Off</td>
                  <td className="p-6">Bulk/Commercial Roasts</td>
                </tr>
                <tr>
                  <td className="p-6 font-black uppercase">Kraft + PLA Liner</td>
                  <td className="p-6">6-9 Months</td>
                  <td className="p-6 text-green-400">Home/Industrial</td>
                  <td className="p-6">Artisan Artisan Roasts</td>
                </tr>
                <tr className="bg-white/5">
                  <td className="p-6 font-black uppercase">Bio-PE Sugarcane</td>
                  <td className="p-6">18-24 Months</td>
                  <td className="p-6 text-magenta-400">Recyclable (PE)</td>
                  <td className="p-6">Retail/Premium Packs</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-white border-b-4 border-black">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-black text-5xl md:text-7xl uppercase text-center mb-16 italic">Coffee FAQ</h2>
          <div className="space-y-6">
            <NeoCard>
              <h4 className="font-black text-xl mb-4 uppercase">Do you offer degassing valves?</h4>
              <p className="text-gray-600 font-['JetBrains_Mono'] text-sm border-l-4 border-black pl-4">Yes. All our coffee pouches can be fitted with one-way degassing valves. We even offer biodegradable valves for fully compostable packaging.</p>
            </NeoCard>
            <NeoCard>
              <h4 className="font-black text-xl mb-4 uppercase">Can these bags hold fresh whole beans?</h4>
              <p className="text-gray-600 font-['JetBrains_Mono'] text-sm border-l-4 border-black pl-4">Absolutely. The barrier properties are specifically designed to handle the high-aroma and oil-rich nature of whole bean coffee.</p>
            </NeoCard>
            <NeoCard>
              <h4 className="font-black text-xl mb-4 uppercase">How do they perform with ground coffee?</h4>
              <p className="text-gray-600 font-['JetBrains_Mono'] text-sm border-l-4 border-black pl-4">Ground coffee is more sensitive to oxygen. We recommend our High-Barrier Mono-PE or AlOx-coated compostable films for maximum freshness retention.</p>
            </NeoCard>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-amber-700 text-white border-b-4 border-black">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-10">
          <NeoBadge color="magenta">ROASTER_ALERT</NeoBadge>
          <h2 className="font-black text-6xl md:text-9xl uppercase leading-none">Fresh.<br/>Future.</h2>
          <p className="font-['JetBrains_Mono'] font-bold text-xl opacity-80 max-w-2xl mx-auto">
            Ready to switch your coffee brand to certified green materials? Order a sample pack with degassing valves today.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
            <NeoButton variant="primary" to="/sample">Order Coffee Samples</NeoButton>
            <NeoButton variant="secondary" className="!bg-white !text-black" href="https://calendly.com/30-min-free-packaging-consultancy">
              Roaster Consultation
            </NeoButton>
          </div>
        </div>
      </section>
    </PouchLayout>
  )
}

export default PouchGreenCoffeeMaterialsPage
