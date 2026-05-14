import React from 'react'
import { Helmet } from 'react-helmet-async'
import { BarChart3, Package, CheckCircle, Award, Zap, Globe, Factory, Recycle, ArrowLeftRight, TrendingUp, ShoppingBag, Target, Shield, MessageCircle, Thermometer, Wind, Droplets, Microscope, Beaker, Trash2, Leaf } from 'lucide-react'
import PouchLayout from '../../../components/pouch/PouchLayout'
import { NeoButton, NeoCard, NeoBadge } from '../../../components/pouch/PouchUI'
import { getBaseUrl } from '../../../utils/domain'
import ClickableImage from '../../../components/ClickableImage'

const PouchReducePackagingWasteGuidePage: React.FC = () => {
  const baseUrl = getBaseUrl()
  
  const WASTE_METRICS = [
    { label: 'Mass Reduct', value: '80%', unit: 'vs. Rigid', desc: 'Material weight reduction.' },
    { label: 'LCA Impact', value: '-60%', unit: 'CO2e', desc: 'Cradle-to-customer carbon save.' },
    { label: 'Logistics', value: '7:1', unit: 'Density', desc: 'Empty pouch vs. box volume.' },
    { label: 'Circular', value: '90%', unit: 'Recovery', desc: 'Mono-PE recyclability rate.' }
  ]

  return (
    <PouchLayout>
      <Helmet>
        <title>Reducing Packaging Waste | Technical Strategy | Pouch.eco</title>
        <meta name="description" content="Technical guide to reducing packaging waste. 800+ words of research on source reduction, lightweighting, and circular economy engineering." />
        <link rel="canonical" href={`${baseUrl}/topics/reduce-packaging-waste`} />
        <meta name="keywords" content="reduce packaging waste, packaging source reduction, lightweighting packaging, circular economy strategy" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative pt-12 pb-24 border-b-4 border-black bg-[radial-gradient(#1e1b4b_1px,transparent_1px)] [background-size:24px_24px] bg-neutral-50">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <NeoBadge color="blue">WASTE_STRATEGY_V1.0</NeoBadge>
          <h1 className="mt-8 font-black text-6xl md:text-9xl leading-none uppercase italic">Less.<br/>Is.<br/><span className="text-black drop-shadow-[4px_4px_0px_rgba(212,255,0,1)]">Pure.</span></h1>
          <p className="mt-8 text-xl md:text-2xl font-bold font-['JetBrains_Mono'] text-gray-800 max-w-3xl mx-auto bg-white border-4 border-black p-6 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
            The most sustainable package is the one that was never made. We engineer waste reduction through technical lightweighting, mono-material purity, and logistics optimization.
          </p>
          <div className="flex flex-wrap justify-center gap-6 mt-12">
            <NeoButton variant="primary" to="/products">Browse Lightweight Solutions</NeoButton>
            <NeoButton variant="secondary" to="/sample">Request Waste Audit</NeoButton>
          </div>
        </div>
      </section>

      {/* Engineering: The Waste Reduction Framework */}
      <section className="py-24 bg-white border-b-4 border-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="absolute inset-0 bg-neutral-400 translate-x-4 translate-y-4 border-4 border-black" />
              <ClickableImage 
                src="/imgs/seo-photos/a_sustainable_packaging_life_cycle_infographic_style_3318244.webp" 
                alt="Packaging Waste Reduction Framework" 
                className="relative z-10 border-4 border-black w-full shadow-2xl"
              />
            </div>
            <div>
              <NeoBadge color="blue">SOURCE_REDUCTION_AUDIT</NeoBadge>
              <h2 className="font-black text-5xl md:text-7xl mt-6 uppercase leading-tight italic">Engineered.<br/>For Efficiency.</h2>
              <p className="mt-8 text-xl text-gray-600 font-['JetBrains_Mono'] leading-relaxed">
                Reducing packaging waste is an engineering discipline, not a marketing slogan. In the 2026 <strong>Circular Economy</strong>, brands are measured by their <strong>Resource Intensity</strong>. We utilize <strong>Source Reduction</strong> as the primary pillar of our strategy—transitioning brands from heavy, energy-intensive rigid containers (glass and PET jars) to lightweight flexible pouches. This shift alone reduces material mass by up to 80% and shipping volume by 700%. We further optimize for waste by engineering <strong>Mono-Material</strong> structures that achieve &gt; 90% recovery rates, ensuring that the material we do use stays in the loop rather than the landfill.
              </p>
              <div className="mt-8 grid grid-cols-2 gap-4">
                {WASTE_METRICS.map((p, i) => (
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

      {/* Technical: The Lightweighting Stack */}
      <section className="py-24 bg-black text-white border-b-4 border-black">
        <div className="max-w-7xl mx-auto px-6">
          <NeoBadge color="lime">WASTE_TECH_STACK</NeoBadge>
          <h2 className="font-black text-5xl md:text-8xl mt-6 uppercase leading-none italic mb-16">High Barrier.<br/>Low Mass.</h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="border-l-4 border-[#D4FF00] pl-8 py-4">
              <h3 className="text-3xl font-black uppercase mb-4">01. Technical Lightweighting</h3>
              <p className="text-lg font-['JetBrains_Mono'] opacity-70 leading-relaxed">
                Using MDO-PE and high-performance resins to reduce film thickness by 15-20% without compromising puncture resistance or barrier integrity.
              </p>
            </div>

            <div className="border-l-4 border-[#D4FF00] pl-8 py-4">
              <h3 className="text-3xl font-black uppercase mb-4">02. Volumetric Optimization</h3>
              <p className="text-lg font-['JetBrains_Mono'] opacity-70 leading-relaxed">
                Engineering pouch dimensions to match your product's actual volume. Less 'dead space' means less air shipped and less secondary packaging waste.
              </p>
            </div>

            <div className="border-l-4 border-[#D4FF00] pl-8 py-4">
              <h3 className="text-3xl font-black uppercase mb-4">03. Mono-Stream Recovery</h3>
              <p className="text-lg font-['JetBrains_Mono'] opacity-70 leading-relaxed">
                Replacing multi-material laminates with certified 100% PE or PP structures that are easily sorted and recovered by automated recycling systems.
              </p>
            </div>

            <div className="border-l-4 border-[#D4FF00] pl-8 py-4">
              <h3 className="text-3xl font-black uppercase mb-4">04. Compostable Integrity</h3>
              <p className="text-lg font-['JetBrains_Mono'] opacity-70 leading-relaxed">
                For food-contaminated packaging, our EN 13432 certified compostables ensure the package returns to the soil instead of clogging plastic streams.
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
              <NeoBadge color="blue">RESOURCE_SCIENCE_V1</NeoBadge>
              <h2 className="font-black text-5xl md:text-7xl mt-6 uppercase leading-tight italic">Measured.<br/>To the Milligram.</h2>
              <p className="mt-8 text-xl text-gray-700 font-['JetBrains_Mono'] leading-relaxed">
                Waste reduction is verified through <strong>Life Cycle Assessment (LCA)</strong>. We utilize <strong>ISO 14040</strong> protocols to calculate the total material burden and global warming potential of your packaging. By switching from a traditional rigid container to a Pouch.eco flexible solution, you can reduce your <strong>Scope 3 carbon emissions</strong> by over 60%. This isn't just about 'using less plastic'; it's about optimizing the entire material-to-energy conversion loop. We provide the technical data you need for your CSR (Corporate Social Responsibility) reporting and ESG disclosures.
              </p>
              <div className="mt-12 space-y-4">
                <div className="bg-white p-6 border-4 border-black flex gap-6 items-center">
                  <BarChart3 className="w-12 h-12 flex-shrink-0" />
                  <div>
                    <h4 className="font-black uppercase">LCA Validated</h4>
                    <p className="text-sm opacity-60">Verified reduction in material and carbon intensity per unit produced.</p>
                  </div>
                </div>
                <div className="bg-white p-6 border-4 border-black flex gap-6 items-center">
                  <TrendingUp className="w-12 h-12 flex-shrink-0" />
                  <div>
                    <h4 className="font-black uppercase">EPR Mitigation</h4>
                    <p className="text-sm opacity-60">Certified recyclability reduces your Extended Producer Responsibility fee liability.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-neutral-400 translate-x-4 translate-y-4 border-4 border-black" />
              <ClickableImage 
                src="/imgs/pouch-shape/ads/a_achieve_pack_3side_seal_closeup_7717814.webp" 
                alt="Verified Waste Reduction Manufacturing" 
                className="relative z-10 border-4 border-black w-full shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ: Waste Reduction Intelligence */}
      <section className="py-24 bg-white border-b-4 border-black">
        <div className="max-w-4xl mx-auto px-6">
          <NeoBadge color="magenta">WASTE_FAQ</NeoBadge>
          <h2 className="font-black text-5xl md:text-7xl mt-6 uppercase leading-tight italic mb-12">Expert<br/>Intelligence.</h2>
          <div className="space-y-4">
            {[
              { q: "What is 'Source Reduction' exactly?", a: "It is the practice of using less material to perform the same function. Switching from a rigid PET bottle to a flexible refill pouch is the most effective form of source reduction." },
              { q: "How does flexible packaging reduce shipping waste?", a: "Empty pouches are shipped flat. One truckload of empty pouches carries the same volume as seven truckloads of empty rigid containers, slashing transport carbon and primary packaging waste." },
              { q: "Does lightweighting make the bag weaker?", a: "No. We use advanced co-extruded films like MDO-PE which provide higher stiffness and puncture resistance at lower thicknesses, maintaining absolute product protection." },
              { q: "How do you calculate the carbon save?", a: "We perform a cradle-to-gate LCA using Ecoinvent data and our factory's specific energy usage, verified against ISO 14040/44 standards." }
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
      <section className="py-24 bg-black text-white border-b-4 border-black">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-12">
          <NeoBadge color="lime">WASTE_MANDATE</NeoBadge>
          <h2 className="font-black text-6xl md:text-9xl uppercase leading-none italic">Waste Less.<br/>Impact Pure.</h2>
          <p className="font-['JetBrains_Mono'] font-bold text-xl opacity-80 max-w-2xl mx-auto">
            Ready to secure a waste-optimized supply chain for your brand? Let's start the technical audit today.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
            <NeoButton variant="primary" to="/sample" className="!bg-white !text-black">Order Lightweight Samples</NeoButton>
            <NeoButton variant="secondary" className="!border-white !text-white" href="https://calendly.com/30-min-free-packaging-consultancy">
              Speak to a Waste Engineer
            </NeoButton>
          </div>
        </div>
      </section>
    </PouchLayout>
  )
}

export default PouchReducePackagingWasteGuidePage
