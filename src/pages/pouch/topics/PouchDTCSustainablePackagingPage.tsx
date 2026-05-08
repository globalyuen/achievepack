import React from 'react'
import { Helmet } from 'react-helmet-async'
import { ShoppingBag, Shield, Zap, ArrowRight, CheckCircle, Package, Truck, Target, ShoppingCart, TrendingUp, Factory, BarChart3, ArrowLeftRight, Globe, Sparkles, MessageCircle, DollarSign, CloudRain } from 'lucide-react'
import PouchLayout from '../../../components/pouch/PouchLayout'
import { NeoButton, NeoCard, NeoBadge } from '../../../components/pouch/PouchUI'
import { getBaseUrl } from '../../../utils/domain'

const PouchDTCSustainablePackagingPage: React.FC = () => {
  const baseUrl = getBaseUrl()
  
  const SHIPPING_STATS = [
    { label: 'Weight Reduction', value: '75%', desc: 'Compared to rigid glass/plastic jars.' },
    { label: 'Storage Space', value: '90%', desc: 'Flat pouches take minimal warehouse footprint.' },
    { label: 'Carbon Impact', value: '-60%', desc: 'Fewer trucks required for distribution.' },
    { label: 'Damage Rate', value: '< 0.1%', desc: 'Flexible material absorbs impact during transit.' }
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
      <section className="relative pt-12 pb-24 border-b-4 border-black bg-[radial-gradient(#06b6d4_1px,transparent_1px)] [background-size:24px_24px] bg-cyan-50">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <NeoBadge color="cyan">DTC_PROTOCOL_V4.2</NeoBadge>
          <h1 className="mt-8 font-black text-6xl md:text-9xl leading-none uppercase italic">Ship.<br/>Save.<br/><span className="text-white drop-shadow-[6px_6px_0px_rgba(0,0,0,1)]">Sustain.</span></h1>
          <p className="mt-8 text-xl md:text-2xl font-bold font-['JetBrains_Mono'] text-gray-800 max-w-3xl mx-auto bg-white border-4 border-black p-6 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
            Packaging built for the doorstep. Reduce shipping costs, minimize breakage, and tell a powerful sustainability story with every unboxing.
          </p>
          <div className="flex flex-wrap justify-center gap-6 mt-12">
            <NeoButton variant="primary" to="/sample">Order DTC Sample Kit</NeoButton>
            <NeoButton variant="secondary" to="/quote">Get Shipping Audit</NeoButton>
          </div>
        </div>
      </section>

      {/* Logistics Section */}
      <section className="py-24 bg-white border-b-4 border-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <NeoBadge color="blue">LOGISTICS_EFFICIENCY</NeoBadge>
              <h2 className="font-black text-5xl md:text-7xl mt-6 uppercase leading-tight italic">Ship Air<br/>No More.</h2>
              <p className="mt-8 text-xl text-gray-600 font-['JetBrains_Mono'] leading-relaxed">
                Rigid packaging forces you to ship air. Our flexible pouches conform to your product and the shipping box, maximizing dimensional weight efficiency and slashing your 3PL costs.
              </p>
              <div className="mt-8 grid grid-cols-2 gap-4">
                {SHIPPING_STATS.map((s, i) => (
                  <div key={i} className="bg-white border-4 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                    <h4 className="font-black uppercase text-xs mb-1 text-cyan-600">{s.label}</h4>
                    <p className="text-xl font-black">{s.value}</p>
                    <p className="text-[10px] font-bold opacity-60">{s.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-cyan-400 translate-x-4 translate-y-4 border-4 border-black" />
              <img 
                src="/imgs/seo-photos/a_shipping_storage_savings_infographic_8051355.webp" 
                alt="DTC Shipping Savings" 
                className="relative z-10 border-4 border-black w-full shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Unboxing Impact */}
      <section className="py-24 bg-black text-white border-b-4 border-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 relative">
              <div className="absolute inset-0 bg-white translate-x-4 translate-y-4 border-4 border-white" />
              <img 
                src="/imgs/seo-photos/a_ecommerce_lightweight_pouch_achieve_pack_8535238.webp" 
                alt="E-commerce Unboxing Moment" 
                className="relative z-10 border-4 border-white w-full"
              />
            </div>
            <div className="order-1 lg:order-2">
              <NeoBadge color="magenta">UNBOXING_VIRALITY</NeoBadge>
              <h2 className="font-black text-5xl md:text-7xl uppercase mt-6 text-[#D4FF00]">The Social<br/>Share Moment.</h2>
              <p className="mt-8 text-xl font-['JetBrains_Mono'] opacity-80 leading-relaxed">
                60% of DTC customers share their unboxing experience on social media. Our premium finishes (Matte, Soft-Touch, Spot UV) ensure your sustainable packaging is camera-ready and brand-loyal.
              </p>
              <div className="mt-8 space-y-4">
                <div className="flex items-center gap-4 bg-white/10 p-4 border-l-4 border-[#D4FF00]">
                  <Sparkles className="text-[#D4FF00] w-6 h-6" />
                  <span className="font-black uppercase text-sm">Anti-Glare Matte for Photography</span>
                </div>
                <div className="flex items-center gap-4 bg-white/10 p-4 border-l-4 border-[#D4FF00]">
                  <DollarSign className="text-[#D4FF00] w-6 h-6" />
                  <span className="font-black uppercase text-sm">Low-Cost Customization from 100 units</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-[#D4FF00] border-b-4 border-black">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-12">
          <NeoBadge color="magenta">ECO_DTC_ACTION</NeoBadge>
          <h2 className="font-black text-6xl md:text-9xl uppercase leading-none italic text-black">Scale Fast.<br/>Ship Lean.</h2>
          <p className="font-['JetBrains_Mono'] font-bold text-xl text-black opacity-80 max-w-2xl mx-auto">
            Ready to optimize your DTC shipping and sustainability story? Order our "DTC Unboxing Kit" today.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
            <NeoButton variant="dark" to="/sample">Request Unboxing Kit</NeoButton>
            <NeoButton variant="secondary" className="!bg-white" href="https://calendly.com/30-min-free-packaging-consultancy">
              DTC Audit Call
            </NeoButton>
          </div>
        </div>
      </section>
    </PouchLayout>
  )
}

export default PouchDTCSustainablePackagingPage
