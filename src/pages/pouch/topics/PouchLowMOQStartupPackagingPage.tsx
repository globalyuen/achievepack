import React from 'react'
import { Helmet } from 'react-helmet-async'
import { BarChart3, Package, CheckCircle, Award, Zap, Globe, Factory, Recycle, ArrowLeftRight, TrendingUp, ShoppingBag, Target, Shield, MessageCircle, Thermometer, Wind, Droplets, Microscope, Beaker, Rocket } from 'lucide-react'
import PouchLayout from '../../../components/pouch/PouchLayout'
import { NeoButton, NeoCard, NeoBadge } from '../../../components/pouch/PouchUI'
import { getBaseUrl } from '../../../utils/domain'
import ClickableImage from '../../../components/ClickableImage'

const PouchLowMOQStartupPackagingPage: React.FC = () => {
  const baseUrl = getBaseUrl()
  
  const STARTUP_METRICS = [
    { label: 'Min Entry', value: '500', unit: 'Units', desc: 'Lowest MOQ in the industry.' },
    { label: 'Plate Fee', value: '$0', unit: 'USD', desc: 'Digital printing eliminates plates.' },
    { label: 'Launch Spd', value: '21', unit: 'Days', desc: 'From design to delivery.' },
    { label: 'Risk Red', value: '95%', unit: 'Savings', desc: 'Lower inventory liability.' }
  ]

  return (
    <PouchLayout>
      <Helmet>
        <title>Low MOQ Startup Packaging | Agile & Sustainable | Pouch.eco</title>
        <meta name="description" content="Technical guide to low MOQ startup packaging. 800+ words of research on digital printing, zero-plate sustainability, and agile market entry." />
        <link rel="canonical" href={`${baseUrl}/topics/low-moq-startup`} />
        <meta name="keywords" content="low MOQ packaging, startup pouches, digital printing, zero plate, sustainable packaging, agile manufacturing" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative pt-12 pb-24 border-b-4 border-black bg-[radial-gradient(#064e3b_1px,transparent_1px)] [background-size:24px_24px] bg-neutral-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-left">
              <NeoBadge color="magenta">STARTUP_AGILE_V1.0</NeoBadge>
              <h1 className="mt-8 font-black text-6xl md:text-8xl leading-none uppercase italic">Start.<br/>Pure.<br/><span className="text-black drop-shadow-[4px_4px_0px_rgba(212,255,0,1)]">Scale.</span></h1>
              <p className="mt-8 text-xl font-bold font-['JetBrains_Mono'] text-gray-800 bg-white border-4 border-black p-6 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
                High MOQs are the death of innovation. We provide startups with enterprise-grade sustainable packaging with low MOQs.
              </p>
              <div className="flex flex-wrap gap-6 mt-12">
                <NeoButton variant="primary" to="/products">Browse Startup Styles</NeoButton>
                <NeoButton variant="secondary" to="/sample">Order Starter Kit</NeoButton>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-neutral-400 translate-x-4 translate-y-4 border-4 border-black" />
              <ClickableImage 
                src="/imgs/illustrated/a_all_options_card_v3_3800862.webp" 
                alt="Low MOQ Startup Packaging Hero" 
                className="relative z-10 border-4 border-black w-full shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Engineering: The Startup Framework */}
      <section className="py-24 bg-white border-b-4 border-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="absolute inset-0 bg-neutral-400 translate-x-4 translate-y-4 border-4 border-black" />
              <ClickableImage 
                src="/imgs/illustrated/a_printing_types_card_v2_6243973.webp" 
                alt="Startup Packaging Agility" 
                className="relative z-10 border-4 border-black w-full shadow-2xl"
              />
            </div>
            <div>
              <NeoBadge color="blue">MARKET_ENTRY_AUDIT</NeoBadge>
              <h2 className="font-black text-5xl md:text-7xl mt-6 uppercase leading-tight italic">Engineered.<br/>To Launch.</h2>
              <p className="mt-8 text-xl text-gray-600 font-['JetBrains_Mono'] leading-relaxed">
                For a startup, cash flow is survival. Traditional packaging manufacturing forces brands into 20,000+ unit minimums and thousands of dollars in upfront plate fees. This is a massive barrier to sustainable entry. At Pouch.eco, we serve as a <strong>Technical Incubator</strong>. We utilize <strong>HP Indigo 25K Digital Technology</strong> to offer MOQs as low as 500 units with <strong>Zero Plate Fees</strong>. This allows you to launch with the exact same high-barrier, certified sustainable materials (Mono-PE, Mono-PP, or Compostable) used by global industry leaders, but at a fraction of the initial capital risk. By reducing your inventory liability, we help you stay agile, test designs, and scale sustainably as your market grows.
              </p>
              <div className="mt-8 grid grid-cols-2 gap-4">
                {STARTUP_METRICS.map((p, i) => (
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

      {/* Technical: The Agile Tech Stack */}
      <section className="py-24 bg-black text-white border-b-4 border-black">
        <div className="max-w-7xl mx-auto px-6">
          <NeoBadge color="lime">STARTUP_TECH_STACK</NeoBadge>
          <h2 className="font-black text-5xl md:text-8xl mt-6 uppercase leading-none italic mb-16">Low Risk.<br/>High Impact.</h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="border-l-4 border-[#D4FF00] pl-8 py-4">
              <h3 className="text-3xl font-black uppercase mb-4">01. Digital Precision</h3>
              <p className="text-lg font-['JetBrains_Mono'] opacity-70 leading-relaxed">
                1200 DPI resolution ensures your startup branding looks like a market leader from the very first unit. No compromise on visual quality.
              </p>
            </div>

            <div className="border-l-4 border-[#D4FF00] pl-8 py-4">
              <h3 className="text-3xl font-black uppercase mb-4">02. Variable SKU Support</h3>
              <p className="text-lg font-['JetBrains_Mono'] opacity-70 leading-relaxed">
                Print multiple flavors or designs in the same production run. Ideal for variety packs and seasonal product testing.
              </p>
            </div>

            <div className="border-l-4 border-[#D4FF00] pl-8 py-4">
              <h3 className="text-3xl font-black uppercase mb-4">03. Fast Turnaround</h3>
              <p className="text-lg font-['JetBrains_Mono'] opacity-70 leading-relaxed">
                Go from artwork approval to finished pouches in 14-21 days. Be first to market with your sustainable innovation.
              </p>
            </div>

            <div className="border-l-4 border-[#D4FF00] pl-8 py-4">
              <h3 className="text-3xl font-black uppercase mb-4">04. Seamless Scaling</h3>
              <p className="text-lg font-['JetBrains_Mono'] opacity-70 leading-relaxed">
                We handle the entire journey. Once you reach scale, we transition you to high-speed rotogravure for lower per-unit costs.
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
              <NeoBadge color="blue">STARTUP_SCIENCE_V1</NeoBadge>
              <h2 className="font-black text-5xl md:text-7xl mt-6 uppercase leading-tight italic">Verified.<br/>To the Startup.</h2>
              <p className="mt-8 text-xl text-gray-700 font-['JetBrains_Mono'] leading-relaxed">
                Agility is a technical advantage. We provide startups with <strong>Enterprise-Grade Material Certifications</strong> (TUV, GRS, BRCGS) from day one. This allows you to win shelf space at major retailers who demand verified sustainability proof. Our <strong>EEAT Startup Protocol</strong> is designed to reduce the friction of sustainable market entry. We don't just supply bags; we provide the technical data sheets (TDS) and safety certifications required for your product liability insurance and retail audits. By utilizing <strong>Low MOQ Digital Production</strong>, we help you eliminate 'Dead Inventory Waste'—one of the most overlooked environmental impacts in the packaging industry.
              </p>
              <div className="mt-12 space-y-4">
                <div className="bg-white p-6 border-4 border-black flex gap-6 items-center">
                  <Rocket className="w-12 h-12 flex-shrink-0" />
                  <div>
                    <h4 className="font-black uppercase">Rapid Prototype</h4>
                    <p className="text-sm opacity-60">Get physical, high-fidelity samples before committing to your first production run.</p>
                  </div>
                </div>
                <div className="bg-white p-6 border-4 border-black flex gap-6 items-center">
                  <TrendingUp className="w-12 h-12 flex-shrink-0" />
                  <div>
                    <h4 className="font-black uppercase">Growth Optimized</h4>
                    <p className="text-sm opacity-60">Flexible manufacturing capacity that scales as fast as your brand does.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-neutral-400 translate-x-4 translate-y-4 border-4 border-black" />
              <ClickableImage 
                src="/imgs/illustrated/a_topic_01_eco_food_pkg_var_b_3398751.webp" 
                alt="Verified Startup Packaging Manufacturing" 
                className="relative z-10 border-4 border-black w-full shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ: Startup Intelligence */}
      <section className="py-24 bg-white border-b-4 border-black">
        <div className="max-w-4xl mx-auto px-6">
          <NeoBadge color="magenta">STARTUP_FAQ</NeoBadge>
          <h2 className="font-black text-5xl md:text-7xl mt-6 uppercase leading-tight italic mb-12">Expert<br/>Intelligence.</h2>
          <div className="space-y-4">
            {[
              { q: "What is the absolute minimum order?", a: "With digital printing, we can produce as few as 500 units per SKU, allowing for extremely low-risk market testing." },
              { q: "Do you offer design support for startups?", a: "Yes. Our technical team can review your artwork to ensure it meets our print specifications and regulatory requirements." },
              { q: "Are low MOQ bags as high quality as high-volume bags?", a: "Absolutely. We use the exact same certified films and food-safe inks for our low MOQ runs as we do for our enterprise-level production." },
              { q: "How long does it take to get my first order?", a: "Typically 14-21 days from artwork approval. This is significantly faster than the 8-10 weeks required for traditional printing." }
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
          <NeoBadge color="lime">STARTUP_MANDATE</NeoBadge>
          <h2 className="font-black text-6xl md:text-9xl uppercase leading-none italic">Start Agile.<br/>Impact Pure.</h2>
          <p className="font-['JetBrains_Mono'] font-bold text-xl opacity-80 max-w-2xl mx-auto">
            Ready to secure a low-risk, enterprise-grade sustainable supply chain for your brand? Let's start the technical audit today.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
            <NeoButton variant="primary" to="/sample" className="!bg-white !text-black">Order Startup Samples</NeoButton>
            <NeoButton variant="secondary" className="!border-white !text-white" href="https://calendly.com/30-min-free-packaging-consultancy">
              Speak to a Startup Engineer
            </NeoButton>
          </div>
        </div>
      </section>
    </PouchLayout>
  )
}

export default PouchLowMOQStartupPackagingPage
