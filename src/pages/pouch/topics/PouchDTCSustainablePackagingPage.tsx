import React from 'react'
import { Helmet } from 'react-helmet-async'
import { BarChart3, Package, CheckCircle, Award, Zap, Globe, Factory, Recycle, ArrowLeftRight, TrendingUp, ShoppingBag, Target, Shield, MessageCircle, Thermometer, Wind, Droplets, Microscope, Beaker, Truck, Sparkles } from 'lucide-react'
import PouchLayout from '../../../components/pouch/PouchLayout'
import { NeoButton, NeoCard, NeoBadge } from '../../../components/pouch/PouchUI'
import { getBaseUrl } from '../../../utils/domain'
import ClickableImage from '../../../components/ClickableImage'

const PouchDTCSustainablePackagingPage: React.FC = () => {
  const baseUrl = getBaseUrl()
  
  const DTC_METRICS = [
    { label: 'DIM Weight', value: '-82%', unit: 'Reduction', desc: 'vs. Glass/Rigid shipping.' },
    { label: 'Freight Sav', value: '$0.40', unit: 'per Unit', desc: 'Average shipping cost save.' },
    { label: 'Unboxing', value: '10/10', unit: 'Score', desc: 'Premium matte/tactile finish.' },
    { label: 'MOQ Entry', value: '500', unit: 'Units', desc: 'Low-risk digital production.' }
  ]

  return (
    <PouchLayout>
      <Helmet>
        <title>DTC Sustainable Packaging | Logistics & UX Tech | Pouch.eco</title>
        <meta name="description" content="Technical guide to DTC sustainable packaging. 800+ words of research on DIM weight optimization, premium unboxing, and logistics engineering." />
        <link rel="canonical" href={`${baseUrl}/topics/dtc-sustainable-packaging`} />
        <meta name="keywords" content="DTC sustainable packaging, D2C packaging, logistics engineering, unboxing experience, flexible pouches" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative pt-12 pb-24 border-b-4 border-black bg-[radial-gradient(#1e3a8a_1px,transparent_1px)] [background-size:24px_24px] bg-neutral-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-left">
              <NeoBadge color="magenta">DTC_STRATEGY_V1.0</NeoBadge>
              <h1 className="mt-8 font-black text-6xl md:text-8xl leading-none uppercase italic">Ship.<br/>Pure.<br/><span className="text-black drop-shadow-[4px_4px_0px_rgba(212,255,0,1)]">Profit.</span></h1>
              <p className="mt-8 text-xl font-bold font-['JetBrains_Mono'] text-gray-800 bg-white border-4 border-black p-6 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
                DTC packaging is a balance of logistics and loyalty. We engineer lightweight flexible pouches that slash shipping costs.
              </p>
              <div className="flex flex-wrap gap-6 mt-12">
                <NeoButton variant="primary" to="/products">Browse DTC Solutions</NeoButton>
                <NeoButton variant="secondary" to="/sample">Request Logistics Audit</NeoButton>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-neutral-400 translate-x-4 translate-y-4 border-4 border-black" />
              <ClickableImage 
                src="/imgs/illustrated/a_topic_02_dtc_pkg_var_c_7412861.webp" 
                alt="DTC Sustainable Packaging Hero" 
                className="relative z-10 border-4 border-black w-full shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Engineering: The DTC Framework */}
      <section className="py-24 bg-white border-b-4 border-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="absolute inset-0 bg-neutral-400 translate-x-4 translate-y-4 border-4 border-black" />
              <ClickableImage 
                src="/imgs/illustrated/a_shipping_methods_card_v1_1433994.webp" 
                alt="DTC Packaging Logistics Optimization" 
                className="relative z-10 border-4 border-black w-full shadow-2xl"
              />
            </div>
            <div>
              <NeoBadge color="blue">LOGISTICS_BY_DESIGN</NeoBadge>
              <h2 className="font-black text-5xl md:text-7xl mt-6 uppercase leading-tight italic">Engineered.<br/>To Deliver.</h2>
              <p className="mt-8 text-xl text-gray-600 font-['JetBrains_Mono'] leading-relaxed">
                In the direct-to-consumer (DTC) world, your packaging is your primary physical brand touchpoint. But it's also your biggest logistics liability. In 2026, shipping air is a carbon and financial crime. At Pouch.eco, we perform a <strong>Dimensional Weight (DIM) Audit</strong> on your current packaging structure. By switching from rigid jars or boxes to lightweight flexible pouches, you can reduce primary packaging weight by up to 82%. This isn't just about 'using less plastic'; it's about <strong>Volumetric Optimization</strong>. A lighter, denser package means more units per pallet, lower fuel surcharges, and a significant reduction in your brand's <strong>Scope 3 carbon footprint</strong>.
              </p>
              <div className="mt-8 grid grid-cols-2 gap-4">
                {DTC_METRICS.map((p, i) => (
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

      {/* Technical: The Unboxing Tech Stack */}
      <section className="py-24 bg-black text-white border-b-4 border-black">
        <div className="max-w-7xl mx-auto px-6">
          <NeoBadge color="lime">UNBOXING_TECH_STACK</NeoBadge>
          <h2 className="font-black text-5xl md:text-8xl mt-6 uppercase leading-none italic mb-16">High Tech.<br/>High Tactile.</h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="border-l-4 border-[#D4FF00] pl-8 py-4">
              <h3 className="text-3xl font-black uppercase mb-4">01. Premium Soft-Touch</h3>
              <p className="text-lg font-['JetBrains_Mono'] opacity-70 leading-relaxed">
                We utilize specialized coatings to create a velvety, premium hand-feel that signals luxury and quality to the consumer immediately upon contact.
              </p>
            </div>

            <div className="border-l-4 border-[#D4FF00] pl-8 py-4">
              <h3 className="text-3xl font-black uppercase mb-4">02. Digital Color Purity</h3>
              <p className="text-lg font-['JetBrains_Mono'] opacity-70 leading-relaxed">
                Our HP Indigo 25K lines deliver G7-certified color accuracy (ΔE &lt; 2.0), ensuring your brand's identity is consistent across every single unit.
              </p>
            </div>

            <div className="border-l-4 border-[#D4FF00] pl-8 py-4">
              <h3 className="text-3xl font-black uppercase mb-4">03. Right-Sized Engineering</h3>
              <p className="text-lg font-['JetBrains_Mono'] opacity-70 leading-relaxed">
                Custom-dimensioned pouches designed to fit perfectly into standard shipping mailers, eliminating the need for excessive void-fill and bubble wrap.
              </p>
            </div>

            <div className="border-l-4 border-[#D4FF00] pl-8 py-4">
              <h3 className="text-3xl font-black uppercase mb-4">04. 100% Recyclability</h3>
              <p className="text-lg font-['JetBrains_Mono'] opacity-70 leading-relaxed">
                Verified mono-material structures that allow your customers to dispose of their packaging responsibly via curbside or store drop-off programs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Material Science Section */}
      <section className="py-24 bg-neutral-100 border-b-4 border-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <NeoBadge color="blue">DTC_UX_SCIENCE_V1</NeoBadge>
              <h2 className="font-black text-5xl md:text-7xl mt-6 uppercase leading-tight italic">Tactile.<br/>To the Customer.</h2>
              <p className="mt-8 text-xl text-gray-700 font-['JetBrains_Mono'] leading-relaxed">
                In a digital-first world, your packaging is your only physical connection to your audience. We use <strong>Delta-E spectrophotometry</strong> and <strong>Coefficient of Friction (CoF)</strong> testing to ensure that the unboxing experience is not just visually stunning, but physically premium. Our <strong>EEAT Design Protocol</strong> focuses on the 'Zero Moment of Truth'—when the customer first touches your product. By utilizing <strong>100% Recyclable Mono-PE</strong> structures with premium matte finishes, we help DTC brands align their physical product with their sustainability promises. This is brand building through material science.
              </p>
              <div className="mt-12 space-y-4">
                <div className="bg-white p-6 border-4 border-black flex gap-6 items-center">
                  <Sparkles className="w-12 h-12 flex-shrink-0" />
                  <div>
                    <h4 className="font-black uppercase">Luxury Finish</h4>
                    <p className="text-sm opacity-60">Matte, Gloss, and Soft-Touch options optimized for D2C unboxing.</p>
                  </div>
                </div>
                <div className="bg-white p-6 border-4 border-black flex gap-6 items-center">
                  <TrendingUp className="w-12 h-12 flex-shrink-0" />
                  <div>
                    <h4 className="font-black uppercase">Logistics Verified</h4>
                    <p className="text-sm opacity-60">Verified reduction in DIM weight and shipping fuel consumption.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-neutral-400 translate-x-4 translate-y-4 border-4 border-black" />
              <ClickableImage 
                src="/imgs/illustrated/a_topic_01_eco_food_pkg_var_b_3398751.webp" 
                alt="Verified DTC Packaging Manufacturing" 
                className="relative z-10 border-4 border-black w-full shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ: DTC Intelligence */}
      <section className="py-24 bg-white border-b-4 border-black">
        <div className="max-w-4xl mx-auto px-6">
          <NeoBadge color="magenta">DTC_FAQ</NeoBadge>
          <h2 className="font-black text-5xl md:text-7xl mt-6 uppercase leading-tight italic mb-12">Expert<br/>Intelligence.</h2>
          <div className="space-y-4">
            {[
              { q: "How much weight can a flexible pouch save?", a: "Replacing a glass jar with a flexible pouch can reduce primary packaging weight by up to 90%, directly lowering your per-unit shipping costs." },
              { q: "Can pouches withstand the rough DTC shipping cycle?", a: "Yes. We engineer our pouches with high-tenacity co-extruded films like NY/PE or MDO-PE to ensure they are puncture-resistant and leak-proof during transit." },
              { q: "What is your MOQ for new DTC brands?", a: "With our digital print lines, we offer custom-branded pouches with MOQs as low as 500 units per SKU, allowing for rapid market testing." },
              { q: "Do you offer 'Right-Sized' engineering?", a: "Absolutely. We can custom-size your pouches to fit perfectly inside standard carrier mailers, eliminating the need for extra void-fill and reducing DIM weight." }
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
          <NeoBadge color="lime">DTC_MANDATE</NeoBadge>
          <h2 className="font-black text-6xl md:text-9xl uppercase leading-none italic">Ship Lighter.<br/>Impact Pure.</h2>
          <p className="font-['JetBrains_Mono'] font-bold text-xl opacity-80 max-w-2xl mx-auto">
            Ready to secure a logistics-optimized, sustainable supply chain for your brand? Let's start the technical audit today.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
            <NeoButton variant="primary" to="/sample" className="!bg-white !text-black">Order DTC Samples</NeoButton>
            <NeoButton variant="secondary" className="!border-white !text-white" href="https://calendly.com/30-min-free-packaging-consultancy">
              Speak to a Logistics Engineer
            </NeoButton>
          </div>
        </div>
      </section>
    </PouchLayout>
  )
}

export default PouchDTCSustainablePackagingPage
