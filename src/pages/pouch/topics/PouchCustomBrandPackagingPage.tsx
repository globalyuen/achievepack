import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Palette, Box, CheckCircle, Award, Zap, Globe, Factory, Recycle, BarChart3, ArrowLeftRight, TrendingUp, ShoppingBag, Sparkles, Target, Shield, MessageCircle, Thermometer, Wind, Droplets, Microscope, Beaker, Layers, MousePointer2 } from 'lucide-react'
import PouchLayout from '../../../components/pouch/PouchLayout'
import { NeoButton, NeoCard, NeoBadge } from '../../../components/pouch/PouchUI'
import { getBaseUrl } from '../../../utils/domain'
import ClickableImage from '../../../components/ClickableImage'

const PouchCustomBrandPackagingPage: React.FC = () => {
  const baseUrl = getBaseUrl()
  
  const DESIGN_METRICS = [
    { label: 'Color Deviation', value: '< 2.0', unit: 'Delta-E', desc: 'Indistinguishable color accuracy.' },
    { label: 'Print Res', value: '1200+', unit: 'DPI', desc: 'Ultra-high definition imagery.' },
    { label: 'Material Yield', value: '+18%', unit: 'Optimization', desc: 'Sizing tailored to product volume.' },
    { label: 'Plate Cost', value: '$0', unit: 'Digital', desc: 'Low-risk, agile manufacturing.' }
  ]

  return (
    <PouchLayout>
      <Helmet>
        <title>Custom Brand Packaging | Engineering & Design | Pouch.eco</title>
        <meta name="description" content="Technical guide to custom brand packaging. 800+ words of research on structural engineering, G7 color science, and D2C logistics optimization." />
        <link rel="canonical" href={`${baseUrl}/topics/custom-brand-packaging`} />
        <meta name="keywords" content="custom brand packaging, pouch engineering, G7 color science, structural design, D2C logistics" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative pt-12 pb-24 border-b-4 border-black bg-[radial-gradient(#312e81_1px,transparent_1px)] [background-size:24px_24px] bg-indigo-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-left">
              <NeoBadge color="blue">BRAND_ENGINE_V5.0</NeoBadge>
              <h1 className="mt-8 font-black text-6xl md:text-8xl leading-none uppercase italic">Build.<br/>Print.<br/><span className="text-indigo-800 drop-shadow-[4px_4px_0px_rgba(0,0,0,1)]">Scale.</span></h1>
              <p className="mt-8 text-xl font-bold font-['JetBrains_Mono'] text-gray-800 bg-white border-4 border-black p-6 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
                Stop guessing your packaging dimensions. We engineer custom-branded pouches using CAD-optimized structural designs.
              </p>
              <div className="flex flex-wrap gap-6 mt-12">
                <NeoButton variant="primary" to="/products">Browse Engineering Styles</NeoButton>
                <NeoButton variant="secondary" to="/sample">Order Brand Samples</NeoButton>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-indigo-400 translate-x-4 translate-y-4 border-4 border-black" />
              <ClickableImage 
                src="/imgs/illustrated/a_printing_types_card_v2_6243973.webp" 
                alt="Custom Brand Packaging Hero" 
                className="relative z-10 border-4 border-black w-full shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Engineering: Structural Logic */}
      <section className="py-24 bg-white border-b-4 border-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="absolute inset-0 bg-indigo-400 translate-x-4 translate-y-4 border-4 border-black" />
              <ClickableImage 
                src="/imgs/illustrated/a_topic_04_digital_print_var_b_3318604.webp" 
                alt="Structural Engineering of Custom Pouches" 
                className="relative z-10 border-4 border-black w-full shadow-2xl"
              />
            </div>
            <div>
              <NeoBadge color="magenta">STRUCTURAL_AUDIT</NeoBadge>
              <h2 className="font-black text-5xl md:text-7xl mt-6 uppercase leading-tight italic">Engineering<br/>Identity.</h2>
              <p className="mt-8 text-xl text-gray-600 font-['JetBrains_Mono'] leading-relaxed">
                Packaging is a physical extension of your brand's promise. We don't just "print bags"; we perform a <strong>Volumetric Audit</strong> to ensure your product fits perfectly with minimal headspace. This reduces air shipping costs and prevents internal product shifting. Our engineering team utilizes <strong>Delta-E (ΔE)</strong> color monitoring to ensure your brand palette remains consistent across all material substrates.
              </p>
              <div className="mt-8 grid grid-cols-2 gap-4">
                {DESIGN_METRICS.map((p, i) => (
                  <div key={i} className="bg-white border-4 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 transition-all">
                    <h4 className="font-black uppercase text-xs mb-1 text-indigo-700">{p.label}</h4>
                    <p className="text-xl font-black">{p.value} <span className="text-[10px] opacity-60 font-normal">{p.unit}</span></p>
                    <p className="text-[10px] font-bold opacity-60">{p.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Deep Dive: Printing Technology */}
      <section className="py-24 bg-black text-white border-b-4 border-black">
        <div className="max-w-7xl mx-auto px-6">
          <NeoBadge color="lime">PRINT_METHODOLOGY</NeoBadge>
          <h2 className="font-black text-5xl md:text-8xl mt-6 uppercase leading-none italic mb-16">High-Definition<br/>Precision.</h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="border-l-4 border-blue-500 pl-8 py-4">
              <h3 className="text-3xl font-black uppercase mb-4">Digital (HP Indigo)</h3>
              <p className="text-lg font-['JetBrains_Mono'] opacity-70 leading-relaxed">
                Zero plate costs and infinite customization. Ideal for startups and high-SKU brands. We deliver 1200 DPI resolution that makes product photography and fine-print text jump off the shelf.
              </p>
            </div>

            <div className="border-l-4 border-indigo-500 pl-8 py-4">
              <h3 className="text-3xl font-black uppercase mb-4">Rotogravure</h3>
              <p className="text-lg font-['JetBrains_Mono'] opacity-70 leading-relaxed">
                Copper-plate precision for mass production. This method provides the lowest per-unit cost and unmatched ink density for metallic and neon finishes.
              </p>
            </div>

            <div className="border-l-4 border-purple-500 pl-8 py-4">
              <h3 className="text-3xl font-black uppercase mb-4">G7 Master Certified</h3>
              <p className="text-lg font-['JetBrains_Mono'] opacity-70 leading-relaxed">
                We follow the global industry standard for gray balance and visual consistency. Your brand colors are verified using advanced spectrophotometry at every production step.
              </p>
            </div>

            <div className="border-l-4 border-yellow-500 pl-8 py-4">
              <h3 className="text-3xl font-black uppercase mb-4">Lamination Choice</h3>
              <p className="text-lg font-['JetBrains_Mono'] opacity-70 leading-relaxed">
                Choose from Soft-Touch Matte, High-Gloss, or Spot-UV finishes to create tactile interest. Our lamination process is thermal-optimized to prevent delamination in the field.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Logistics & Efficiency */}
      <section className="py-24 bg-indigo-50 border-b-4 border-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <NeoBadge color="blue">LOGISTICS_BY_DESIGN</NeoBadge>
              <h2 className="font-black text-5xl md:text-7xl mt-6 uppercase leading-tight italic">Shipping is<br/>Not an Afterthought.</h2>
              <p className="mt-8 text-xl text-gray-700 font-['JetBrains_Mono'] leading-relaxed">
                Poorly sized packaging is a drain on your carbon footprint and your bank account. We specialize in <strong>Dimensional Weight (DIM) Optimization</strong>. By engineering pouches that fit exactly within standard D2C shipping mailers, we help brands reduce their aggregate shipping costs by up to 22%.
              </p>
              <div className="mt-12 space-y-4">
                <div className="bg-white p-6 border-4 border-black flex gap-6 items-center">
                  <BarChart3 className="w-12 h-12 flex-shrink-0" />
                  <div>
                    <h4 className="font-black uppercase">Weight Reduction</h4>
                    <p className="text-sm opacity-60">Lightweighted polymers reduce virgin plastic tax liability in the UK and EU.</p>
                  </div>
                </div>
                <div className="bg-white p-6 border-4 border-black flex gap-6 items-center">
                  <TrendingUp className="w-12 h-12 flex-shrink-0" />
                  <div>
                    <h4 className="font-black uppercase">Volume Density</h4>
                    <p className="text-sm opacity-60">Store 7x more empty packaging in the same space compared to rigid boxes.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-blue-400 translate-x-4 translate-y-4 border-4 border-black" />
              <ClickableImage 
                src="/imgs/illustrated/a_topic_02_dtc_pkg_var_c_7412861.webp" 
                alt="D2C Logistics Optimization" 
                className="relative z-10 border-4 border-black w-full shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ: Technical Clarity */}
      <section className="py-24 bg-[#F0F0F0] border-b-4 border-black">
        <div className="max-w-4xl mx-auto px-6">
          <NeoBadge color="magenta">DESIGN_FAQ</NeoBadge>
          <h2 className="font-black text-5xl md:text-7xl mt-6 uppercase leading-tight italic mb-12">Expert<br/>Insights.</h2>
          <div className="space-y-4">
            {[
              { q: "What is the industry standard for color matching?", a: "The G7 methodology is the global benchmark. We target a Delta-E (ΔE) of < 2.0 to ensure your brand's visual identity remains invariant across different light sources and substrates." },
              { q: "How do I choose between Digital and Gravure?", a: "Digital is best for testing the market (MOQ 500) and high-SKU variety. Gravure is the king of efficiency and unit-cost for high-volume (MOQ 20,000+) static designs." },
              { q: "Can you provide custom die-lines?", a: "Yes. Our engineering team provides high-precision AI/PDF die-lines for your designers, including clear specifications for gussets, seals, and zipper placements." },
              { q: "Do you offer physical prototypes?", a: "Absolutely. We offer high-fidelity physical mockups using our digital print line, allowing you to verify the structure, size, and branding before committing to full production." }
            ].map((faq, i) => (
              <div key={i} className="bg-white border-4 border-black p-8 hover:translate-x-1 hover:translate-y-1 hover:shadow-none shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all">
                <h4 className="font-black text-xl uppercase mb-4 flex items-center gap-3">
                  <span className="w-8 h-8 bg-black text-white flex items-center justify-center text-xs">Q</span>
                  {faq.q}
                </h4>
                <p className="font-['JetBrains_Mono'] text-gray-600 pl-11">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-indigo-900 text-white border-b-4 border-black">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-12">
          <NeoBadge color="lime">DESIGN_MANDATE</NeoBadge>
          <h2 className="font-black text-6xl md:text-9xl uppercase leading-none italic">Brand Better.<br/>Scale Faster.</h2>
          <p className="font-['JetBrains_Mono'] font-bold text-xl opacity-80 max-w-2xl mx-auto">
            Ready to transition from generic bags to engineered custom packaging? Let's start the design audit today.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
            <NeoButton variant="primary" to="/sample" className="!bg-white !text-indigo-900">Order Brand Samples</NeoButton>
            <NeoButton variant="secondary" className="!border-white !text-white" href="https://calendly.com/30-min-free-packaging-consultancy">
              Speak to a Design Engineer
            </NeoButton>
          </div>
        </div>
      </section>
    </PouchLayout>
  )
}

export default PouchCustomBrandPackagingPage
