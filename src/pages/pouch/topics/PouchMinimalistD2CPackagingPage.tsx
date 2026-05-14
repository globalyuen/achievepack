import React from 'react'
import { Helmet } from 'react-helmet-async'
import { BarChart3, Package, CheckCircle, Award, Zap, Globe, Factory, Recycle, ArrowLeftRight, TrendingUp, ShoppingBag, Target, Shield, MessageCircle, Thermometer, Wind, Droplets, Microscope, Beaker, Minus, Sparkles } from 'lucide-react'
import PouchLayout from '../../../components/pouch/PouchLayout'
import { NeoButton, NeoCard, NeoBadge } from '../../../components/pouch/PouchUI'
import { getBaseUrl } from '../../../utils/domain'
import ClickableImage from '../../../components/ClickableImage'

const PouchMinimalistD2CPackagingPage: React.FC = () => {
  const baseUrl = getBaseUrl()
  
  const MINIMAL_METRICS = [
    { label: 'Mat Weight', value: '-80%', unit: 'Reduction', desc: 'vs. Rigid/Glass jars.' },
    { label: 'DIM Weight', value: '-42%', unit: 'Savings', desc: 'Average shipping fee save.' },
    { label: 'Unboxing', value: 'Elite', unit: 'UX', desc: 'Premium matte/tactile.' },
    { label: 'Purity', value: '100%', unit: 'Mono', desc: 'Single-stream recyclable.' }
  ]

  return (
    <PouchLayout>
      <Helmet>
        <title>Minimalist D2C Packaging | Logistics & UX Tech | Pouch.eco</title>
        <meta name="description" content="Technical guide to minimalist D2C packaging. 800+ words of research on material reduction, DIM weight optimization, and luxury unboxing engineering." />
        <link rel="canonical" href={`${baseUrl}/topics/minimalist-d2c`} />
        <meta name="keywords" content="minimalist D2C packaging, D2C strategy, logistics engineering, material reduction, sustainable unboxing" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative pt-12 pb-24 border-b-4 border-black bg-[radial-gradient(#262626_1px,transparent_1px)] [background-size:24px_24px] bg-neutral-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-left">
              <NeoBadge color="magenta">MINIMAL_TECH_V1.0</NeoBadge>
              <h1 className="mt-8 font-black text-6xl md:text-8xl leading-none uppercase italic">Less.<br/>Pure.<br/><span className="text-black drop-shadow-[4px_4px_0px_rgba(212,255,0,1)]">Proven.</span></h1>
              <p className="mt-8 text-xl font-bold font-['JetBrains_Mono'] text-gray-800 bg-white border-4 border-black p-6 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
                Minimalism is a logistics superpower. We engineer lightweight flexible pouches that reduce material waste and shipping costs.
              </p>
              <div className="flex flex-wrap gap-6 mt-12">
                <NeoButton variant="primary" to="/products">Browse Minimal Styles</NeoButton>
                <NeoButton variant="secondary" to="/sample">Order Minimal Samples</NeoButton>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-neutral-400 translate-x-4 translate-y-4 border-4 border-black" />
              <ClickableImage 
                src="/imgs/illustrated/a_topic_02_dtc_pkg_var_c_7412861.webp" 
                alt="Minimalist D2C Packaging Hero" 
                className="relative z-10 border-4 border-black w-full shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Engineering: The Minimalist Framework */}
      <section className="py-24 bg-white border-b-4 border-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="absolute inset-0 bg-neutral-400 translate-x-4 translate-y-4 border-4 border-black" />
              <ClickableImage 
                src="/imgs/illustrated/a_shipping_methods_card_v1_1433994.webp" 
                alt="Minimalist D2C Packaging Material Reduction" 
                className="relative z-10 border-4 border-black w-full shadow-2xl"
              />
            </div>
            <div>
              <NeoBadge color="blue">MATERIAL_EFFICIENCY_AUDIT</NeoBadge>
              <h2 className="font-black text-5xl md:text-7xl mt-6 uppercase leading-tight italic">Engineered.<br/>For Efficiency.</h2>
              <p className="mt-8 text-xl text-gray-600 font-['JetBrains_Mono'] leading-relaxed">
                In 2026, minimalism is a <strong>technical strategy</strong>, not just an aesthetic. For Direct-to-Consumer (D2C) brands, every gram of excess packaging is a carbon and financial liability. At Pouch.eco, we perform <strong>Material Intensity Audits</strong> to identify where rigid jars, heavy boxes, and non-recyclable void-fill can be replaced by <strong>Right-Sized Flexible Pouches</strong>. By switching to high-barrier mono-materials, brands can reduce their primary packaging weight by up to 80%. This isn't just about 'less plastic'; it's about <strong>Volumetric Optimization</strong>. A lighter, denser package reduces <strong>Dimensional Weight (DIM)</strong>, slashes Scope 3 freight emissions, and delivers a tactile, luxury experience that respects the consumer's intelligence. This is brand building through reduction.
              </p>
              <div className="mt-8 grid grid-cols-2 gap-4">
                {MINIMAL_METRICS.map((p, i) => (
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

      {/* Technical: The Minimalist Tech Stack */}
      <section className="py-24 bg-black text-white border-b-4 border-black">
        <div className="max-w-7xl mx-auto px-6">
          <NeoBadge color="lime">MINIMALIST_TECH_STACK</NeoBadge>
          <h2 className="font-black text-5xl md:text-8xl mt-6 uppercase leading-none italic mb-16">High Impact.<br/>Zero Excess.</h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="border-l-4 border-[#D4FF00] pl-8 py-4">
              <h3 className="text-3xl font-black uppercase mb-4">01. Mono-Material Purity</h3>
              <p className="text-lg font-['JetBrains_Mono'] opacity-70 leading-relaxed">
                Utilizing 100% Recyclable Mono-PE and Mono-PP structures that use the minimum amount of polymer to achieve maximum shelf-life and barrier protection.
              </p>
            </div>

            <div className="border-l-4 border-[#D4FF00] pl-8 py-4">
              <h3 className="text-3xl font-black uppercase mb-4">02. Logistics Optimized</h3>
              <p className="text-lg font-['JetBrains_Mono'] opacity-70 leading-relaxed">
                Right-sized pouches designed to fit perfectly in standard carrier mailers, eliminating the need for bubble wrap, tissue paper, and secondary boxes.
              </p>
            </div>

            <div className="border-l-4 border-[#D4FF00] pl-8 py-4">
              <h3 className="text-3xl font-black uppercase mb-4">03. Premium Matte Finish</h3>
              <p className="text-lg font-['JetBrains_Mono'] opacity-70 leading-relaxed">
                A velvety, high-end hand-feel that signals quality and sustainability immediately upon touch, creating a luxury unboxing experience with less waste.
              </p>
            </div>

            <div className="border-l-4 border-[#D4FF00] pl-8 py-4">
              <h3 className="text-3xl font-black uppercase mb-4">04. Focused Digital Print</h3>
              <p className="text-lg font-['JetBrains_Mono'] opacity-70 leading-relaxed">
                1200 DPI resolution that allows your brand message to shine with minimalist clarity. Zero plate fees and zero waste in the printing process.
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
              <NeoBadge color="blue">MINIMAL_SCIENCE_V1</NeoBadge>
              <h2 className="font-black text-5xl md:text-7xl mt-6 uppercase leading-tight italic">Measured.<br/>To the Gram.</h2>
              <p className="mt-8 text-xl text-gray-700 font-['JetBrains_Mono'] leading-relaxed">
                Material reduction is a technical specification. We utilize <strong>Life Cycle Assessment (LCA)</strong> data to prove the environmental benefits of transitioning to a minimalist flexible structure. Our <strong>EEAT Minimal Protocol</strong> focuses on the 'Total Cost of Ownership'—from raw material extraction to final consumer disposal. By choosing <strong>100% Recyclable Mono-PE</strong> with focused, high-precision branding, we help D2C brands align their physical product with their digital storytelling. This is branding through material science, verified by <strong>ISO 14040/44</strong> standards.
              </p>
              <div className="mt-12 space-y-4">
                <div className="bg-white p-6 border-4 border-black flex gap-6 items-center">
                  <Minus className="w-12 h-12 flex-shrink-0" />
                  <div>
                    <h4 className="font-black uppercase">Pure Reduction</h4>
                    <p className="text-sm opacity-60">Verified reduction in total material mass and aggregate carbon footprint per unit.</p>
                  </div>
                </div>
                <div className="bg-white p-6 border-4 border-black flex gap-6 items-center">
                  <Sparkles className="w-12 h-12 flex-shrink-0" />
                  <div>
                    <h4 className="font-black uppercase">Luxury UX</h4>
                    <p className="text-sm opacity-60">Delivering a premium unboxing experience that builds lasting consumer loyalty.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-neutral-400 translate-x-4 translate-y-4 border-4 border-black" />
              <ClickableImage 
                src="/imgs/illustrated/a_pcr_card_v1_0334493.webp" 
                alt="Verified Minimalist Packaging Manufacturing" 
                className="relative z-10 border-4 border-black w-full shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ: Minimalist Intelligence */}
      <section className="py-24 bg-white border-b-4 border-black">
        <div className="max-w-4xl mx-auto px-6">
          <NeoBadge color="magenta">MINIMAL_FAQ</NeoBadge>
          <h2 className="font-black text-5xl md:text-7xl mt-6 uppercase leading-tight italic mb-12">Expert<br/>Intelligence.</h2>
          <div className="space-y-4">
            {[
              { q: "How much weight can I save by switching to pouches?", a: "Replacing a rigid jar with a flexible pouch can reduce primary packaging weight by up to 80-90%, directly lowering your shipping costs." },
              { q: "Is minimalist packaging as durable?", a: "Yes. We engineer high-tenacity, puncture-resistant films that protect products during the rough D2C logistics cycle without secondary boxes." },
              { q: "What is Dimensional Weight (DIM)?", a: "It is a shipping fee based on the volume of a package. Minimalist pouches fit more densely in mailers, significantly lowering these fees." },
              { q: "What is the MOQ for minimalist pouches?", a: "With digital printing, we offer custom branded minimalist pouches with MOQs as low as 500 units per SKU." }
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
          <NeoBadge color="lime">MINIMAL_MANDATE</NeoBadge>
          <h2 className="font-black text-6xl md:text-9xl uppercase leading-none italic">Think Less.<br/>Impact Pure.</h2>
          <p className="font-['JetBrains_Mono'] font-bold text-xl opacity-80 max-w-2xl mx-auto">
            Ready to secure a logistics-optimized, sustainable supply chain for your brand? Let's start the technical audit today.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
            <NeoButton variant="primary" to="/sample" className="!bg-white !text-black">Order Minimal Samples</NeoButton>
            <NeoButton variant="secondary" className="!border-white !text-white" href="https://calendly.com/30-min-free-packaging-consultancy">
              Speak to a Logistics Engineer
            </NeoButton>
          </div>
        </div>
      </section>
    </PouchLayout>
  )
}

export default PouchMinimalistD2CPackagingPage
