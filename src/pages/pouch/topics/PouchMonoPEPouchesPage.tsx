import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Recycle, Package, CheckCircle, Award, Zap, Globe, Factory, BarChart3, ArrowLeftRight, TrendingUp, ShoppingBag, Target, Shield, MessageCircle, Thermometer, Wind, Droplets, Microscope, Beaker, Layers  , FileSearch } from 'lucide-react'
import PouchLayout from '../../../components/pouch/PouchLayout'
import { NeoButton, NeoCard, NeoBadge } from '../../../components/pouch/PouchUI'
import { getBaseUrl } from '../../../utils/domain'
import ClickableImage from '../../../components/ClickableImage'

const PouchMonoPEPouchesPage: React.FC = () => {
  const baseUrl = getBaseUrl()
  
  const MONO_METRICS = [
    { label: 'Recyclability', value: '100%', unit: 'Mono-PE', desc: 'Single polymer family structure.' },
    { label: 'Stiffness Index', value: '0.9', unit: 'Relative to PET', desc: 'MDO-PE enabled high rigidity.' },
    { label: 'Oxygen Barrier', value: '< 0.5', unit: 'OTR', desc: 'EVOH-PE high-performance gas shield.' },
    { label: 'Seal Strength', value: '45+', unit: 'N/15mm', desc: 'Industrial-grade structural integrity.' }
  ]

  return (
    <PouchLayout>
      <Helmet>
        <title>Mono-PE Recyclable Pouches | Circular Engineering | Pouch.eco</title>
        <meta name="description" content="Technical guide to Mono-PE recyclable packaging. 800+ words of research on MDO-PE stretching, EVOH-PE barrier science, and circular design standards." />
        <link rel="canonical" href={`${baseUrl}/topics/mono-pe-pouches`} />
        <meta name="keywords" content="mono-PE pouches, recyclable packaging, MDO-PE, circular economy, EVOH barrier PE" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative pt-12 pb-24 border-b-4 border-black bg-[radial-gradient(#1e3a8a_1px,transparent_1px)] [background-size:24px_24px] bg-blue-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-left">
              <NeoBadge color="blue">CIRCULAR_SYSTEM_V2</NeoBadge>
              <h1 className="mt-8 font-black text-6xl md:text-8xl leading-none uppercase italic">Pure.<br/>Recycled.<br/><span className="text-blue-800 drop-shadow-[4px_4px_0px_rgba(212,255,0,1)]">Proven.</span></h1>
              <p className="mt-8 text-xl font-bold font-['JetBrains_Mono'] text-gray-800 bg-white border-4 border-black p-6 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
                Multi-layer laminates are obsolete. We engineer high-stiffness, high-barrier 100% Mono-PE pouches.
              </p>
              <div className="flex flex-wrap gap-6 mt-12">
                <NeoButton variant="primary" to="/products">Browse Mono-PE Styles</NeoButton>
                <NeoButton variant="secondary" to="/sample">Order Material Proof</NeoButton>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-blue-400 translate-x-4 translate-y-4 border-4 border-black" />
              <ClickableImage 
                src="/imgs/topics/mono-pe-recyclable-hero.png" 
                alt="Mono-PE Pouches Hero" 
                className="relative z-10 border-4 border-black w-full shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Engineering: MDO-PE Stiffness */}
      <section className="py-24 bg-white border-b-4 border-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="absolute inset-0 bg-blue-400 translate-x-4 translate-y-4 border-4 border-black" />
              <ClickableImage 
                src="/imgs/seo-photos/a_mono_recyclable_certification_compliance_7572715.webp" 
                alt="Mono-PE Structural Engineering" 
                className="relative z-10 border-4 border-black w-full shadow-2xl"
              />
            </div>
            <div>
              <NeoBadge color="magenta">STRUCTURAL_INNOVATION</NeoBadge>
              <h2 className="font-black text-5xl md:text-7xl mt-6 uppercase leading-tight italic">Strength Through<br/>Orientation.</h2>
              <p className="mt-8 text-xl text-gray-600 font-['JetBrains_Mono'] leading-relaxed">
                The technical challenge of Mono-PE has always been its inherent softness. We solve this through <strong>Machine Direction Orientation (MDO)</strong>. By stretching the polyethylene film at the molecular level, we increase its modulus to match the stiffness and thermal resistance of conventional PET. This allows for <strong>high-speed automated filling</strong> (VFFS/HFFS) and provides the premium "snap" and stand-up stability required for retail shelf impact.
              </p>
              <div className="mt-8 grid grid-cols-2 gap-4">
                {MONO_METRICS.map((p, i) => (
                  <div key={i} className="bg-white border-4 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 transition-all">
                    <h4 className="font-black uppercase text-xs mb-1 text-blue-700">{p.label}</h4>
                    <p className="text-xl font-black">{p.value} <span className="text-[10px] opacity-60 font-normal">{p.unit}</span></p>
                    <p className="text-[10px] font-bold opacity-60">{p.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Deep Dive: Barrier Architecture */}
      <section className="py-24 bg-black text-white border-b-4 border-black">
        <div className="max-w-7xl mx-auto px-6">
          <NeoBadge color="lime">BARRIER_ENGINE_V4</NeoBadge>
          <h2 className="font-black text-5xl md:text-8xl mt-6 uppercase leading-none italic mb-16">The Science of<br/>Separation.</h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="border-l-4 border-blue-500 pl-8 py-4">
              <h3 className="text-3xl font-black uppercase mb-4">01. EVOH-PE Core</h3>
              <p className="text-lg font-['JetBrains_Mono'] opacity-70 leading-relaxed">
                A co-extruded oxygen barrier that is molecularly bonded to the PE layers. At &lt; 5% total weight, it provides elite gas protection while remaining fully compatible with PE recycling streams.
              </p>
            </div>

            <div className="border-l-4 border-blue-500 pl-8 py-4">
              <h3 className="text-3xl font-black uppercase mb-4">02. BOPE Technology</h3>
              <p className="text-lg font-['JetBrains_Mono'] opacity-70 leading-relaxed">
                Biaxially Oriented Polyethylene. By stretching the film in two directions, we achieve glass-like clarity and superior puncture resistance (150N+), outperforming traditional mixed laminates.
              </p>
            </div>

            <div className="border-l-4 border-blue-500 pl-8 py-4">
              <h3 className="text-3xl font-black uppercase mb-4">03. Thermal Sealing</h3>
              <p className="text-lg font-['JetBrains_Mono'] opacity-70 leading-relaxed">
                Our sealant layers are engineered with a broad sealing window (80-120°C). This prevents 'burn-through' and ensures hermetic integrity on high-speed production lines.
              </p>
            </div>

            <div className="border-l-4 border-blue-500 pl-8 py-4">
              <h3 className="text-3xl font-black uppercase mb-4">04. Recyclable Zippers</h3>
              <p className="text-lg font-['JetBrains_Mono'] opacity-70 leading-relaxed">
                No mixed materials. Our resealable zippers and spouts are manufactured from the same PE family as the pouch body, ensuring the entire unit is 100% circular.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Recyclability Verification */}
      <section className="py-24 bg-blue-50 border-b-4 border-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <NeoBadge color="blue">CIRCULARITY_AUDIT</NeoBadge>
              <h2 className="font-black text-5xl md:text-7xl mt-6 uppercase leading-tight italic">Verified.<br/>Not Claimed.</h2>
              <p className="mt-8 text-xl text-gray-700 font-['JetBrains_Mono'] leading-relaxed">
                Achieve Pack Mono-PE pouches are engineered to follow the <strong>CEFLEX</strong> and <strong>RecyClass</strong> design guidelines. We provide independent laboratory certifications (Cyclos-HTP) proving a <strong>recyclability score of 95%+</strong>. This technical verification is essential for reducing Extended Producer Responsibility (EPR) fees and meeting global "Plastic Tax" exemptions.
              </p>
              <div className="mt-12 space-y-4">
                <div className="bg-white p-6 border-4 border-black flex gap-6 items-center">
                  <Recycle className="w-12 h-12 flex-shrink-0" />
                  <div>
                    <h4 className="font-black uppercase">SPI Code 4 Ready</h4>
                    <p className="text-sm opacity-60">Fully compatible with standard LDPE and LLDPE recycling streams.</p>
                  </div>
                </div>
                <div className="bg-white p-6 border-4 border-black flex gap-6 items-center">
                  <TrendingUp className="w-12 h-12 flex-shrink-0" />
                  <div>
                    <h4 className="font-black uppercase">Carbon Efficiency</h4>
                    <p className="text-sm opacity-60">30% lower carbon footprint compared to multi-layer foil laminates.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-blue-400 translate-x-4 translate-y-4 border-4 border-black" />
              <ClickableImage 
                src="/imgs/topics/mono-pe-recyclable-hero.png" 
                alt="Mono-PE Manufacturing Verification" 
                className="relative z-10 border-4 border-black w-full shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ: Technical Mono-PE */}
      <section className="py-24 bg-[#F0F0F0] border-b-4 border-black">
        <div className="max-w-4xl mx-auto px-6">
          <NeoBadge color="magenta">MONO_FAQ</NeoBadge>
          <h2 className="font-black text-5xl md:text-7xl mt-6 uppercase leading-tight italic mb-12">Pure Intelligence.</h2>
          <div className="space-y-4">
            {[
              { q: "Can Mono-PE replace foil-lined bags for coffee?", a: "Yes. By utilizing high-purity EVOH-PE and AlOx coatings, we achieve oxygen transmission rates (OTR) of < 0.5 cc/m2/day, providing the barrier needed to protect roasted coffee aroma in a recyclable format." },
              { q: "Why is MDO-PE important?", a: "Machine Direction Orientation stretches the polymer chains, increasing stiffness and heat resistance. Without MDO, a mono-PE pouch would be too soft and difficult to run on automated packing lines." },
              { q: "Is EVOH really recyclable in the PE stream?", a: "Yes, provided it makes up less than 5% of the total structure weight and is co-extruded with compatible tie-layers. This is the global standard set by CEFLEX and APR." },
              { q: "What is the shelf life impact of switching to Mono-PE?", a: "Our engineered Mono-PE structures deliver 95-100% of the shelf life of conventional mixed laminates, ensuring your product stays fresh through its entire retail cycle." }
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
      <section className="py-24 bg-blue-900 text-white border-b-4 border-black">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-12">
          <NeoBadge color="lime">CIRCULAR_MANDATE</NeoBadge>
          <h2 className="font-black text-6xl md:text-9xl uppercase leading-none italic">Think Pure.<br/>Go Mono.</h2>
          <p className="font-['JetBrains_Mono'] font-bold text-xl opacity-80 max-w-2xl mx-auto">
            Ready to transition to high-performance, 100% recyclable mono-PE packaging? Let's start the structural audit today.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
            <NeoButton variant="primary" to="/sample" className="!bg-white !text-blue-900">Order Mono-PE Samples</NeoButton>
            <NeoButton variant="secondary" className="!border-white !text-white" href="https://calendly.com/30-min-free-packaging-consultancy">
              Consult a Circular Engineer
            </NeoButton>
          </div>
        </div>
      </section>
    </PouchLayout>
  )
}

export default PouchMonoPEPouchesPage
