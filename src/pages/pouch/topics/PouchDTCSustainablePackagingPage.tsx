import React from 'react'
import { Helmet } from 'react-helmet-async'
import { ShoppingBag, Shield, Zap, ArrowRight, CheckCircle, Package, Truck, Target, ShoppingCart, TrendingUp, Factory, BarChart3, ArrowLeftRight, Globe, Sparkles, MessageCircle } from 'lucide-react'
import PouchLayout from '../../../components/pouch/PouchLayout'
import { NeoButton, NeoCard, NeoBadge } from '../../../components/pouch/PouchUI'
import { getBaseUrl } from '../../../utils/domain'

const PouchDTCSustainablePackagingPage: React.FC = () => {
  const baseUrl = getBaseUrl()
  
  const FEATURES = [
    { icon: Target, title: 'DTC Optimization', desc: 'Sized for letterbox efficiency and shipping cost reduction.' },
    { icon: Sparkles, title: 'Unboxing Impact', desc: 'Premium matte and soft-touch finishes for social-share moments.' },
    { icon: Shield, title: 'Transit Durability', desc: 'Tested for the rigors of global e-commerce shipping networks.' },
    { icon: Zap, title: 'Rapid Launch', desc: 'Digital printing from 100 units with 10-15 day turnaround.' }
  ]

  return (
    <PouchLayout>
      <Helmet>
        <title>DTC Sustainable Packaging | E-commerce Solutions | Pouch.eco</title>
        <meta name="description" content="Premium sustainable packaging for direct-to-consumer brands. Low MOQ, fast turnaround, and e-commerce durability. Delight customers with eco-friendly unboxing." />
        <link rel="canonical" href={`${baseUrl}/topics/dtc-sustainable-packaging`} />
        <meta name="keywords" content="DTC packaging, direct to consumer, sustainable unboxing, e-commerce pouches, custom printed eco bags" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative pt-12 pb-24 border-b-4 border-black bg-[radial-gradient(#00ffff_1px,transparent_1px)] [background-size:24px_24px]">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <NeoBadge color="cyan">DTC_PROTOCOL_V3.0</NeoBadge>
          <h1 className="mt-8 font-black text-6xl md:text-9xl leading-none uppercase">
            Ship.<br/>Save.<br/>
            <span className="text-white drop-shadow-[6px_6px_0px_rgba(0,0,0,1)]">Story.</span>
          </h1>
          <p className="mt-8 text-xl md:text-2xl font-bold font-['JetBrains_Mono'] text-gray-800 max-w-3xl mx-auto bg-white border-4 border-black p-6 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
            Built for the modern e-commerce brand. Lightweight pouches that reduce carbon footprint while maximizing brand impact at the customer's doorstep.
          </p>
          <div className="flex flex-wrap justify-center gap-6 mt-12">
            <NeoButton variant="primary" to="/sample">Order DTC Sample Kit</NeoButton>
            <NeoButton variant="secondary" to="/materials/catalog">Material Selector</NeoButton>
          </div>
        </div>
      </section>

      {/* Key Advantages Grid */}
      <section className="py-24 bg-white border-b-4 border-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {FEATURES.map((f, i) => (
              <NeoCard key={i} className="hover:-translate-y-2 transition-transform">
                <f.icon className="w-12 h-12 mb-6 text-cyan-600" />
                <h3 className="font-black text-xl uppercase mb-4">{f.title}</h3>
                <p className="text-sm font-['JetBrains_Mono'] text-gray-600">{f.desc}</p>
              </NeoCard>
            ))}
          </div>
        </div>
      </section>

      {/* Unboxing Section */}
      <section className="py-24 bg-[#F0F0F0] border-b-4 border-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="absolute inset-0 bg-cyan-400 translate-x-4 translate-y-4 border-4 border-black" />
              <img 
                src="/imgs/seo-photos/a_ecommerce_lightweight_pouch_achieve_pack_8535238.webp" 
                alt="Premium DTC Unboxing" 
                className="relative z-10 border-4 border-black w-full shadow-2xl"
              />
            </div>
            <div>
              <NeoBadge color="magenta">UNBOXING_EXPERIENCE</NeoBadge>
              <h2 className="font-black text-5xl md:text-7xl uppercase mt-6 leading-tight">The First<br/>Touch Point.</h2>
              <p className="mt-8 text-xl text-gray-600 font-['JetBrains_Mono'] leading-relaxed">
                In the DTC world, your packaging IS your storefront. Our custom sustainable pouches allow you to tell an authentic story through touch, finish, and certified credentials.
              </p>
              <div className="mt-8 space-y-4">
                <div className="flex items-center gap-4 bg-white border-2 border-black p-4">
                  <CheckCircle className="text-cyan-600 w-6 h-6 flex-shrink-0" />
                  <span className="font-black uppercase text-sm">Digital Printing: 100+ units</span>
                </div>
                <div className="flex items-center gap-4 bg-white border-2 border-black p-4">
                  <CheckCircle className="text-cyan-600 w-6 h-6 flex-shrink-0" />
                  <span className="font-black uppercase text-sm">Premium Finishes: Matte, Gloss, Soft-Touch</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Market Intel Section */}
      <section className="py-24 bg-white border-b-4 border-black overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="font-black text-5xl md:text-7xl uppercase">Market Intelligence</h2>
            <p className="font-['JetBrains_Mono'] text-xl mt-4 opacity-70">Why DTC leaders are switching to Pouch.eco</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="border-4 border-black p-8 bg-cyan-400">
              <div className="text-6xl font-black mb-2">78%</div>
              <div className="font-black uppercase text-sm">Customers prefer eco-packaging</div>
            </div>
            <div className="border-4 border-black p-8 bg-black text-white">
              <div className="text-6xl font-black mb-2 text-cyan-400">60%</div>
              <div className="font-black uppercase text-sm">Reduction in shipping weight</div>
            </div>
            <div className="border-4 border-black p-8 bg-white shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
              <div className="text-6xl font-black mb-2 text-magenta-600">52%</div>
              <div className="font-black uppercase text-sm">Share unboxing on social</div>
            </div>
            <div className="border-4 border-black p-8 bg-[#D4FF00]">
              <div className="text-6xl font-black mb-2">100%</div>
              <div className="font-black uppercase text-sm">Certified Sustainable materials</div>
            </div>
          </div>
        </div>
      </section>

      {/* Material Comparison Table */}
      <section className="py-24 bg-black text-white border-b-4 border-black">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-black text-5xl md:text-7xl uppercase mb-16 text-center text-cyan-400">Material Comparison</h2>
          <div className="overflow-x-auto border-4 border-white">
            <table className="w-full font-['JetBrains_Mono'] text-sm">
              <thead className="bg-white text-black border-b-4 border-black">
                <tr>
                  <th className="p-6 text-left">MATERIAL</th>
                  <th className="p-6 text-left">ECO SCORE</th>
                  <th className="p-6 text-left">DURABILITY</th>
                  <th className="p-6 text-left">MOQ</th>
                  <th className="p-6 text-left">BEST FOR</th>
                </tr>
              </thead>
              <tbody className="divide-y-2 divide-white/20">
                <tr>
                  <td className="p-6 font-black">Kraft + PLA</td>
                  <td className="p-6 text-cyan-400">★★★★★</td>
                  <td className="p-6">High</td>
                  <td className="p-6">100 pcs</td>
                  <td className="p-6">Organic Snacks, Coffee</td>
                </tr>
                <tr className="bg-white/5">
                  <td className="p-6 font-black">Recyclable Mono-PE</td>
                  <td className="p-6 text-cyan-400">★★★★</td>
                  <td className="p-6 text-[#D4FF00]">Extreme</td>
                  <td className="p-6">100 pcs</td>
                  <td className="p-6">Supplements, Liquids</td>
                </tr>
                <tr>
                  <td className="p-6 font-black">Bio-PE Film</td>
                  <td className="p-6 text-cyan-400">★★★★</td>
                  <td className="p-6">Very High</td>
                  <td className="p-6">500 pcs</td>
                  <td className="p-6">Beauty, Wellness</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-white border-b-4 border-black">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-black text-5xl md:text-7xl uppercase text-center mb-20 italic">DTC FAQ</h2>
          <div className="space-y-6">
            <NeoCard color="bg-white">
              <h4 className="font-black text-xl mb-4 uppercase">Can I order low volumes for product testing?</h4>
              <p className="text-gray-600 font-['JetBrains_Mono'] text-sm border-l-4 border-black pl-4">Yes. Our digital printing allows for custom branded pouches from just 100 pieces per SKU, allowing DTC brands to test markets without heavy inventory risk.</p>
            </NeoCard>
            <NeoCard color="bg-white shadow-[8px_8px_0px_0px_rgba(0,255,255,1)]">
              <h4 className="font-black text-xl mb-4 uppercase">Are these pouches shipping-label ready?</h4>
              <p className="text-gray-600 font-['JetBrains_Mono'] text-sm border-l-4 border-black pl-4">Absolutely. The surface materials (Kraft, Matte PE) are compatible with standard e-commerce shipping labels and permanent markers.</p>
            </NeoCard>
            <NeoCard color="bg-white">
              <h4 className="font-black text-xl mb-4 uppercase">What about the unboxing "wow" factor?</h4>
              <p className="text-gray-600 font-['JetBrains_Mono'] text-sm border-l-4 border-black pl-4">We offer premium tactile finishes like soft-touch lamination and metallic spot-effects that make your sustainable packaging feel as premium as the product inside.</p>
            </NeoCard>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-[#D4FF00] border-b-4 border-black">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-10">
          <NeoBadge color="magenta">ACTION_REQUIRED</NeoBadge>
          <h2 className="font-black text-6xl md:text-9xl uppercase leading-none">Scale Your<br/>Impact.</h2>
          <p className="font-['JetBrains_Mono'] font-bold text-xl text-black opacity-80 max-w-2xl mx-auto">
            Ready to transition your DTC brand to 100% sustainable packaging? Let's build your unboxing story today.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
            <NeoButton variant="dark" to="/sample">Order Size Kit</NeoButton>
            <NeoButton variant="secondary" className="!bg-white" href="https://calendly.com/30-min-free-packaging-consultancy">
              Free Consultation
            </NeoButton>
          </div>
        </div>
      </section>
    </PouchLayout>
  )
}

export default PouchDTCSustainablePackagingPage
