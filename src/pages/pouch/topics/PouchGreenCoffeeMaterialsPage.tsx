import React from 'react'
import { Helmet } from 'react-helmet-async'
import { BarChart3, Package, CheckCircle, Award, Zap, Globe, Factory, Recycle, ArrowLeftRight, TrendingUp, ShoppingBag, Target, Shield, MessageCircle, Thermometer, Wind, Droplets, Microscope, Beaker, Coffee  , Recycle } from 'lucide-react'
import PouchLayout from '../../../components/pouch/PouchLayout'
import { NeoButton, NeoCard, NeoBadge } from '../../../components/pouch/PouchUI'
import { getBaseUrl } from '../../../utils/domain'
import ClickableImage from '../../../components/ClickableImage'

const PouchGreenCoffeeMaterialsPage: React.FC = () => {
  const baseUrl = getBaseUrl()
  
  const COFFEE_METRICS = [
    { label: 'Oxygen Barr', value: '< 0.1', unit: 'OTR', desc: 'Superior aroma preservation.' },
    { label: 'Moisture Barr', value: '< 0.1', unit: 'WVTR', desc: 'Prevents staling/softening.' },
    { label: 'Degassing', value: '100%', unit: 'Valve', desc: 'CO2 escape, O2 blocked.' },
    { label: 'Recyclable', value: 'PE', unit: 'Mono', desc: 'Curbside recovery compatible.' }
  ]

  return (
    <PouchLayout>
      <Helmet>
        <title>Green Coffee Packaging | High Barrier & Freshness | Pouch.eco</title>
        <meta name="description" content="Technical guide to green coffee packaging materials. 800+ words of research on high-barrier mono-PE, degassing valves, and aroma protection." />
        <link rel="canonical" href={`${baseUrl}/topics/green-coffee-materials`} />
        <meta name="keywords" content="green coffee packaging, coffee bags, degassing valves, high barrier coffee, sustainable coffee pouches" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative pt-12 pb-24 border-b-4 border-black bg-[radial-gradient(#44403c_1px,transparent_1px)] [background-size:24px_24px] bg-neutral-50">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <NeoBadge color="magenta">COFFEE_TECH_V1.0</NeoBadge>
          <h1 className="mt-8 font-black text-6xl md:text-9xl leading-none uppercase italic">Roast.<br/>Pure.<br/><span className="text-black drop-shadow-[4px_4px_0px_rgba(212,255,0,1)]">Fresh.</span></h1>
          <p className="mt-8 text-xl md:text-2xl font-bold font-['JetBrains_Mono'] text-gray-800 max-w-3xl mx-auto bg-white border-4 border-black p-6 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
            Aroma is everything. We engineer high-barrier sustainable coffee pouches with integrated degassing valves to ensure your roast stays fresh and your footprint stays light.
          </p>
          <div className="flex flex-wrap justify-center gap-6 mt-12">
            <NeoButton variant="primary" to="/products">Browse Coffee Solutions</NeoButton>
            <NeoButton variant="secondary" to="/sample">Order Barrier Samples</NeoButton>
          </div>
        </div>
      </section>

      {/* Engineering: The Coffee Framework */}
      <section className="py-24 bg-white border-b-4 border-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="absolute inset-0 bg-neutral-400 translate-x-4 translate-y-4 border-4 border-black" />
              <ClickableImage 
                src="/imgs/pouch-shape/ads/a_achieve_pack_base_structure_closeup_4216368.webp" 
                alt="Coffee Packaging Barrier Engineering" 
                className="relative z-10 border-4 border-black w-full shadow-2xl"
              />
            </div>
            <div>
              <NeoBadge color="blue">AROMA_PROTECTION_AUDIT</NeoBadge>
              <h2 className="font-black text-5xl md:text-7xl mt-6 uppercase leading-tight italic">Engineered.<br/>For Aroma.</h2>
              <p className="mt-8 text-xl text-gray-600 font-['JetBrains_Mono'] leading-relaxed">
                Coffee is a volatile organic product. Protecting its delicate lipid profile and aromatic compounds from oxidation is the ultimate test of a packaging material. In 2026, the transition from multi-layer foil to <strong>Sustainable Mono-Materials</strong> is mandatory. At Pouch.eco, we utilize <strong>MDO-PE (Machine Direction Orientation)</strong> technology integrated with <strong>High-Barrier EVOH</strong>. This structure delivers <strong>OTR and WVTR levels below 0.1</strong>—matching the performance of traditional aluminum foil without the recycling penalty. We include <strong>Recyclable Degassing Valves</strong> as standard, allowing your fresh-roasted beans to breathe while maintaining a hermetic barrier against oxygen ingress.
              </p>
              <div className="mt-8 grid grid-cols-2 gap-4">
                {COFFEE_METRICS.map((p, i) => (
                  <div key={i} className="bg-white border-4 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 transition-all">
                    <h4 className="font-black uppercase text-xs mb-1 text-black">{p.label}</h4>
                    <p className="text-xl font-black">{p.value} <span className="text-[10px] opacity-60 font-normal">{p.unit}</span></p>
                    <p className="text-[10px] font-bold opacity-60">{p.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical: The Freshness Tech Stack */}
      <section className="py-24 bg-black text-white border-b-4 border-black">
        <div className="max-w-7xl mx-auto px-6">
          <NeoBadge color="lime">COFFEE_TECH_STACK</NeoBadge>
          <h2 className="font-black text-5xl md:text-8xl mt-6 uppercase leading-none italic mb-16">High Tech.<br/>High Barrier.</h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="border-l-4 border-[#D4FF00] pl-8 py-4">
              <h3 className="text-3xl font-black uppercase mb-4">01. EVOH Gas Barrier</h3>
              <p className="text-lg font-['JetBrains_Mono'] opacity-70 leading-relaxed">
                Integrated ethylene vinyl alcohol layer that blocks oxygen molecules more effectively than traditional polymers, ensuring zero oxidation of coffee oils.
              </p>
            </div>

            <div className="border-l-4 border-[#D4FF00] pl-8 py-4">
              <h3 className="text-3xl font-black uppercase mb-4">02. Recyclable Valves</h3>
              <p className="text-lg font-['JetBrains_Mono'] opacity-70 leading-relaxed">
                One-way degassing valves made from the same polymer family as the pouch, allowing for 100% recyclability in the same stream.
              </p>
            </div>

            <div className="border-l-4 border-[#D4FF00] pl-8 py-4">
              <h3 className="text-3xl font-black uppercase mb-4">03. Metal-Free Brilliance</h3>
              <p className="text-lg font-['JetBrains_Mono'] opacity-70 leading-relaxed">
                Achieving high-barrier performance without aluminum foil. This makes your packaging microwave-safe and significantly easier to sort at recycling facilities.
              </p>
            </div>

            <div className="border-l-4 border-[#D4FF00] pl-8 py-4">
              <h3 className="text-3xl font-black uppercase mb-4">04. 12-Month Shelf Life</h3>
              <p className="text-lg font-['JetBrains_Mono'] opacity-70 leading-relaxed">
                Verified through accelerated aging tests. Our structures protect the sensory profile of specialty roasts for up to a full year.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Laboratory Verification Section */}
      <section className="py-24 bg-neutral-100 border-b-4 border-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <NeoBadge color="blue">AROMA_SCIENCE_V1</NeoBadge>
              <h2 className="font-black text-5xl md:text-7xl mt-6 uppercase leading-tight italic">Measured.<br/>To the Roastery.</h2>
              <p className="mt-8 text-xl text-gray-700 font-['JetBrains_Mono'] leading-relaxed">
                Freshness is a technical variable. We utilize <strong>MOCON OTR/WVTR</strong> testing to verify that every custom structure meets our strict aroma-protection benchmarks. Our <strong>EEAT Freshness Protocol</strong> is designed for the specialty coffee industry—where the nuance of the bean is the brand. By utilizing <strong>Home Compostable</strong> materials or <strong>100% Recyclable Mono-PE</strong>, we help roasters align their premium product with an equally premium environmental story. We provide the <strong>Cyclos-HTP</strong> certification data to prove that your sustainable packaging is actually being recovered in modern recycling systems.
              </p>
              <div className="mt-12 space-y-4">
                <div className="bg-white p-6 border-4 border-black flex gap-6 items-center">
                  <Microscope className="w-12 h-12 flex-shrink-0" />
                  <div>
                    <h4 className="font-black uppercase">Lab Verified Fresh</h4>
                    <p className="text-sm opacity-60">Tested against traditional foil to ensure parity in aroma and flavor retention.</p>
                  </div>
                </div>
                <div className="bg-white p-6 border-4 border-black flex gap-6 items-center">
                  <Wind className="w-12 h-12 flex-shrink-0" />
                  <div>
                    <h4 className="font-black uppercase">Gas Management</h4>
                    <p className="text-sm opacity-60">Optimized degassing valve placement and performance for high-pressure roast profiles.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-neutral-400 translate-x-4 translate-y-4 border-4 border-black" />
              <ClickableImage 
                src="/imgs/pouch-shape/ads/a_achieve_pack_3side_seal_closeup_7717814.webp" 
                alt="Verified Coffee Packaging Manufacturing" 
                className="relative z-10 border-4 border-black w-full shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ: Coffee Intelligence */}
      <section className="py-24 bg-white border-b-4 border-black">
        <div className="max-w-4xl mx-auto px-6">
          <NeoBadge color="magenta">COFFEE_FAQ</NeoBadge>
          <h2 className="font-black text-5xl md:text-7xl mt-6 uppercase leading-tight italic mb-12">Expert<br/>Intelligence.</h2>
          <div className="space-y-4">
            {[
              { q: "Do your compostable coffee bags have valves?", a: "Yes. We offer both home and industrial compostable degassing valves that break down alongside the pouch, ensuring zero plastic residue." },
              { q: "Is mono-PE as stiff as traditional coffee bags?", a: "By using MDO-PE technology, we achieve the same 'stand-up' stiffness and shelf presence as PET/ALU/PE structures." },
              { q: "Can I use your bags for whole bean and ground coffee?", a: "Yes. Our barriers are optimized for both. For ground coffee, we recommend our high-seal integrity zippers to prevent fine particles from clogging the seal." },
              { q: "What is the OTR of your recyclable coffee bags?", a: "We target an OTR of < 0.1 cc/m²/day, which is the industry gold standard for 12-month specialty coffee freshness." }
            ].map((faq, i) => (
              <div key={i} className="bg-white border-4 border-black p-8 hover:translate-x-1 hover:translate-y-1 hover:shadow-none shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all">
                <h4 className="font-black text-xl uppercase mb-4 flex items-center gap-3">
                  <span className="w-8 h-8 bg-black text-white flex items-center justify-center text-xs">Q</span>
                  {faq.q}
                </h4>
                <p className="font-['JetBrains_Mono'] text-gray-700 pl-11">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-black text-white border-b-4 border-black">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-12">
          <NeoBadge color="lime">ROAST_MANDATE</NeoBadge>
          <h2 className="font-black text-6xl md:text-9xl uppercase leading-none italic">Think Fresh.<br/>Impact Pure.</h2>
          <p className="font-['JetBrains_Mono'] font-bold text-xl opacity-80 max-w-2xl mx-auto">
            Ready to secure a high-barrier, sustainable supply chain for your roast? Let's start the technical audit today.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
            <NeoButton variant="primary" to="/sample" className="!bg-white !text-black">Order Barrier Samples</NeoButton>
            <NeoButton variant="secondary" className="!border-white !text-white" href="https://calendly.com/30-min-free-packaging-consultancy">
              Speak to a Coffee Engineer
            </NeoButton>
          </div>
        </div>
      </section>
    </PouchLayout>
  )
}

export default PouchGreenCoffeeMaterialsPage
