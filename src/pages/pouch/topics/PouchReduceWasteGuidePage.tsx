import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Leaf, Package, CheckCircle, Award, Zap, Globe, Factory, Recycle, BarChart3, ArrowLeftRight, TrendingUp, ShoppingBag, Target, Shield, MessageCircle, Thermometer, Wind, Droplets, Microscope, Beaker, Trash2, Layers  , Box } from 'lucide-react'
import PouchLayout from '../../../components/pouch/PouchLayout'
import { NeoButton, NeoCard, NeoBadge } from '../../../components/pouch/PouchUI'
import { getBaseUrl } from '../../../utils/domain'
import ClickableImage from '../../../components/ClickableImage'

const PouchReduceWasteGuidePage: React.FC = () => {
  const baseUrl = getBaseUrl()
  
  const WASTE_METRICS = [
    { label: 'Plastic Saved', value: '25%+', unit: 'Per Unit', desc: 'Through MDO-PE lightweighting.' },
    { label: 'CO2 Reduction', value: '32%', unit: 'LCA Verified', desc: 'Lower production and shipping energy.' },
    { label: 'Pallet Density', value: '+15%', unit: 'Yield', desc: 'More empty units per shipment.' },
    { label: 'Circular Ready', value: '100%', unit: 'Mono-PE', desc: 'Fully recyclable in standard streams.' }
  ]

  return (
    <PouchLayout>
      <Helmet>
        <title>Reduce Packaging Waste | Engineering Circularity | Pouch.eco</title>
        <meta name="description" content="Technical guide to reducing packaging waste. 800+ words of research on source reduction, material lightweighting, and circular economy engineering." />
        <link rel="canonical" href={`${baseUrl}/topics/reduce-waste-guide`} />
        <meta name="keywords" content="reduce packaging waste, source reduction, circular economy, lightweighting, mono-material recycling" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative pt-12 pb-24 border-b-4 border-black bg-[radial-gradient(#065f46_1px,transparent_1px)] [background-size:24px_24px] bg-emerald-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-left">
              <NeoBadge color="magenta">WASTE_REDUCTION_V4</NeoBadge>
              <h1 className="mt-8 font-black text-6xl md:text-8xl leading-none uppercase italic">Less.<br/>Waste.<br/><span className="text-emerald-800 drop-shadow-[4px_4px_0px_rgba(212,255,0,1)]">More.</span></h1>
              <p className="mt-8 text-xl font-bold font-['JetBrains_Mono'] text-gray-800 bg-white border-4 border-black p-6 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
                Efficiency is the ultimate form of sustainability. We engineer source reduction into every pouch structure.
              </p>
              <div className="flex flex-wrap gap-6 mt-12">
                <NeoButton variant="primary" to="/products">Browse Efficient Solutions</NeoButton>
                <NeoButton variant="secondary" to="/sample">Request a Waste Audit</NeoButton>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-emerald-400 translate-x-4 translate-y-4 border-4 border-black" />
              <ClickableImage 
                src="/imgs/illustrated/a_topic_02_dtc_pkg_var_c_7412861.webp" 
                alt="Reduce Packaging Waste Hero" 
                className="relative z-10 border-4 border-black w-full shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Engineering: Source Reduction */}
      <section className="py-24 bg-white border-b-4 border-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="absolute inset-0 bg-emerald-400 translate-x-4 translate-y-4 border-4 border-black" />
              <ClickableImage 
                src="/imgs/illustrated/a_topic_02_dtc_pkg_var_c_7412861.webp" 
                alt="Waste Reduction Engineering" 
                className="relative z-10 border-4 border-black w-full shadow-2xl"
              />
            </div>
            <div>
              <NeoBadge color="blue">SOURCE_REDUCTION_LAB</NeoBadge>
              <h2 className="font-black text-5xl md:text-7xl mt-6 uppercase leading-tight italic">Engineering<br/>Zero.</h2>
              <p className="mt-8 text-xl text-gray-600 font-['JetBrains_Mono'] leading-relaxed">
                The most sustainable packaging is the one that was never made. We utilize <strong>Machine Direction Orientation (MDO)</strong> to stretch polymer molecules, creating high-tensile films that deliver identical barrier protection with 25% less raw material weight. This <strong>lightweighting strategy</strong> directly reduces your virgin plastic tax liability in global markets while slashing your Scope 3 transport emissions.
              </p>
              <div className="mt-8 grid grid-cols-2 gap-4">
                {WASTE_METRICS.map((p, i) => (
                  <div key={i} className="bg-white border-4 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 transition-all">
                    <h4 className="font-black uppercase text-xs mb-1 text-emerald-700">{p.label}</h4>
                    <p className="text-xl font-black">{p.value} <span className="text-[10px] opacity-60 font-normal">{p.unit}</span></p>
                    <p className="text-[10px] font-bold opacity-60">{p.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical: Circular Design */}
      <section className="py-24 bg-black text-white border-b-4 border-black">
        <div className="max-w-7xl mx-auto px-6">
          <NeoBadge color="lime">CIRCULAR_TECH_STACK</NeoBadge>
          <h2 className="font-black text-5xl md:text-8xl mt-6 uppercase leading-none italic mb-16">Design for<br/>Disassembly.</h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="border-l-4 border-[#D4FF00] pl-8 py-4">
              <h3 className="text-3xl font-black uppercase mb-4">01. Mono-Material PE</h3>
              <p className="text-lg font-['JetBrains_Mono'] opacity-70 leading-relaxed">
                Eliminating complex multi-layer laminates. Our 100% Mono-PE pouches are fully recyclable in standard store drop-off streams, creating a true closed-loop lifecycle.
              </p>
            </div>

            <div className="border-l-4 border-[#D4FF00] pl-8 py-4">
              <h3 className="text-3xl font-black uppercase mb-4">02. Solvent-Free Lamination</h3>
              <p className="text-lg font-['JetBrains_Mono'] opacity-70 leading-relaxed">
                Utilizing high-purity thermal bonding instead of chemical adhesives. This ensures the resulting recycled resin is high-quality and free from toxic cross-contaminants.
              </p>
            </div>

            <div className="border-l-4 border-[#D4FF00] pl-8 py-4">
              <h3 className="text-3xl font-black uppercase mb-4">03. High-Yield Sizing</h3>
              <p className="text-lg font-['JetBrains_Mono'] opacity-70 leading-relaxed">
                Precision engineering of pouch dimensions to minimize "dead air." We reduce the aggregate volume of shipments by up to 20%, cutting transport-related waste.
              </p>
            </div>

            <div className="border-l-4 border-[#D4FF00] pl-8 py-4">
              <h3 className="text-3xl font-black uppercase mb-4">04. LCA Verified</h3>
              <p className="text-lg font-['JetBrains_Mono'] opacity-70 leading-relaxed">
                Life Cycle Assessment data for every structure. We quantify the exact landfill avoidance and carbon offset of your packaging transition.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Waste Audit Methodology */}
      <section className="py-24 bg-emerald-50 border-b-4 border-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <NeoBadge color="blue">WASTE_AUDIT_PROTOCOL</NeoBadge>
              <h2 className="font-black text-5xl md:text-7xl mt-6 uppercase leading-tight italic">Measured.<br/>Verified.</h2>
              <p className="mt-8 text-xl text-gray-700 font-['JetBrains_Mono'] leading-relaxed">
                Sustainability cannot be vague. We perform <strong>Volumetric Efficiency Audits</strong> to identify the exact percentage of material waste in your current packaging. By transitioning to engineered flexible formats, our clients see an average <strong>landfill reduction of 75%</strong> compared to rigid PET or glass alternatives. We don't just hope for a cleaner future; we engineer the data to prove it.
              </p>
              <div className="mt-12 space-y-4">
                <div className="bg-white p-6 border-4 border-black flex gap-6 items-center">
                  <Trash2 className="w-12 h-12 flex-shrink-0" />
                  <div>
                    <h4 className="font-black uppercase">Landfill Avoidance</h4>
                    <p className="text-sm opacity-60">Every 1,000 units saved prevents 4.5kg of polymer from entering the waste stream.</p>
                  </div>
                </div>
                <div className="bg-white p-6 border-4 border-black flex gap-6 items-center">
                  <BarChart3 className="w-12 h-12 flex-shrink-0" />
                  <div>
                    <h4 className="font-black uppercase">Tax Mitigation</h4>
                    <p className="text-sm opacity-60">Source reduction directly lowers liability under the UK Plastic Packaging Tax and EU EPR mandates.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-emerald-400 translate-x-4 translate-y-4 border-4 border-black" />
              <ClickableImage 
                src="/imgs/illustrated/a_topic_01_eco_food_pkg_var_c_4560298.webp" 
                alt="Source Reduction Engineering" 
                className="relative z-10 border-4 border-black w-full shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ: Technical Waste */}
      <section className="py-24 bg-[#F0F0F0] border-b-4 border-black">
        <div className="max-w-4xl mx-auto px-6">
          <NeoBadge color="magenta">WASTE_FAQ</NeoBadge>
          <h2 className="font-black text-5xl md:text-7xl mt-6 uppercase leading-tight italic mb-12">Actionable<br/>Answers.</h2>
          <div className="space-y-4">
            {[
              { q: "How does lightweighting affect the barrier properties?", a: "By using oriented films like MDO-PE, we align the polymer chains more tightly, which can actually improve the moisture barrier while using less total material." },
              { q: "Is flexible packaging better than rigid for waste reduction?", a: "Yes. Flexible pouches use up to 80% less plastic by weight than rigid bottles or jars, leading to massive source reduction at the start of the life cycle." },
              { q: "What is the biggest source of waste in D2C packaging?", a: "Dead air. Shipping large boxes half-full of air and plastic 'pillows' is a major waste of energy and material. Engineered pouches eliminate this entirely." },
              { q: "How do you verify your waste reduction claims?", a: "We provide ISO 14040/44 compliant Life Cycle Assessments (LCA) that quantify the material savings and carbon offset of your specific packaging order." }
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
      <section className="py-24 bg-emerald-900 text-white border-b-4 border-black">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-12">
          <NeoBadge color="lime">WASTE_MANDATE</NeoBadge>
          <h2 className="font-black text-6xl md:text-9xl uppercase leading-none italic">Less Plastic.<br/>Better Brand.</h2>
          <p className="font-['JetBrains_Mono'] font-bold text-xl opacity-80 max-w-2xl mx-auto">
            Ready to audit your packaging and eliminate unnecessary waste? Our engineers are ready to run the numbers.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
            <NeoButton variant="primary" to="/sample" className="!bg-white !text-emerald-900">Order Efficient Samples</NeoButton>
            <NeoButton variant="secondary" className="!border-white !text-white" href="https://calendly.com/30-min-free-packaging-consultancy">
              Audit My Packaging Waste
            </NeoButton>
          </div>
        </div>
      </section>
    </PouchLayout>
  )
}

export default PouchReduceWasteGuidePage
