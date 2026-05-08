import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { Package, Leaf, Zap, CheckCircle, ArrowRight, Shield, Award, Snowflake, Thermometer, Droplets, Target, Sparkles } from 'lucide-react'
import PouchLayout from '../../../components/pouch/PouchLayout'
import { NeoButton, NeoCard, NeoBadge } from '../../../components/pouch/PouchUI'
import ClickableImage from '../../../components/ClickableImage'

export default function PouchFrozenFoodPage() {
  const floatAnim = {
    y: [0, -10, 0],
    transition: { duration: 2, repeat: Infinity, ease: "easeInOut" }
  }

  const title = "Frozen Food Packaging - High Strength & Eco | POUCH.ECO"
  const description = "Specialized frozen food pouches for startups. Puncture resistant, frost-proof, and compostable options. Low MOQ 500 units for frozen snacks and meals."

  const PERFORMANCE_MATRIX = [
    { label: 'Cold Resistance', value: '-40°C', unit: 'Min Temp', desc: 'Maintains flexibility in extreme cold.' },
    { label: 'Seal Strength', value: '> 25', unit: 'N/15mm', desc: 'Heavy-duty structural integrity.' },
    { label: 'Puncture Resistance', value: 'High', unit: 'Grade', desc: 'Protects against sharp frozen edges.' },
    { label: 'Recyclability', value: '100%', unit: 'Mono-PE', desc: 'Fully recyclable in standard streams.' }
  ]

  return (
    <PouchLayout>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href="https://pouch.eco/industry/frozen-food" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative pt-12 pb-24 border-b-4 border-black bg-[radial-gradient(#00ffff_1px,transparent_1px)] [background-size:24px_24px] bg-cyan-50">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 z-10">
              <div className="inline-block bg-[#00FFFF] border-4 border-black px-4 py-2 transform -rotate-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <span className="font-['JetBrains_Mono'] font-bold text-sm text-black">INDUSTRY_CODE: FROZEN_05</span>
              </div>
              
              <h1 className="font-black text-5xl md:text-8xl leading-[0.9] tracking-tighter uppercase">
                Freeze.<br/>
                Store.<br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00FFFF] to-[#D4FF00] drop-shadow-[4px_4px_0px_rgba(0,0,0,1)] text-cyan-600">Protect.</span>
              </h1>

              <p className="font-['JetBrains_Mono'] font-bold text-lg md:text-xl max-w-md bg-white border-2 border-black p-4 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] text-black">
                &gt; Sub-zero durability.<br/>
                &gt; Puncture-proof protocol.<br/>
                &gt; Recyclable Mono-PE active.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <NeoButton href="https://calendly.com/30-min-free-packaging-consultancy">Get Quote</NeoButton>
                <NeoButton variant="secondary" to="/sample">Request Arctic Kit</NeoButton>
              </div>
            </div>

            <div className="relative">
              <NeoCard className="bg-[#00FFFF] relative z-10 rotate-2 !p-0 overflow-hidden group border-4 border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
                <div className="aspect-square bg-gradient-to-br from-[#00FFFF] to-[#D4FF00] flex items-center justify-center relative">
                  <Snowflake className="w-64 h-64 text-black opacity-80 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300" strokeWidth={1.5} />
                  <motion.div animate={floatAnim} className="absolute top-4 right-4 bg-white border-2 border-black px-2 py-1 font-['JetBrains_Mono'] text-xs font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] z-20 text-black">
                    ARCTIC_GRADE_V2
                  </motion.div>
                </div>
              </NeoCard>
              <div className="absolute top-10 -right-10 w-full h-full border-4 border-black bg-[#FF00FF] -z-0 rotate-6" />
            </div>
          </div>
        </div>
      </section>

      {/* Performance Section */}
      <section className="py-24 bg-white border-b-4 border-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="absolute inset-0 bg-cyan-400 translate-x-4 translate-y-4 border-4 border-black" />
              <img 
                src="/imgs/seo-photos/a_achievepack_barrier_range_comparison_2896222.webp" 
                alt="Frozen Food Packaging Performance" 
                className="relative z-10 border-4 border-black w-full shadow-2xl"
              />
            </div>
            <div>
              <NeoBadge color="cyan">SCIENCE_OF_COLD</NeoBadge>
              <h2 className="font-black text-5xl md:text-7xl mt-6 uppercase leading-tight italic">Frost<br/>Resistant.</h2>
              <p className="mt-8 text-xl text-gray-600 font-['JetBrains_Mono'] leading-relaxed">
                Frozen products demand specialized polymer structures. Our Arctic-Grade films are engineered to remain flexible at -40°C, preventing the cracking and seal failure common in standard packaging.
              </p>
              <div className="mt-8 grid grid-cols-2 gap-4">
                {PERFORMANCE_MATRIX.map((p, i) => (
                  <div key={i} className="bg-white border-4 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                    <h4 className="font-black uppercase text-xs mb-1 text-cyan-700">{p.label}</h4>
                    <p className="text-xl font-black">{p.value} <span className="text-[10px] opacity-60 font-normal">{p.unit}</span></p>
                    <p className="text-[10px] font-bold opacity-60">{p.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Visual Product Gallery Section */}
      <section className="py-24 bg-cyan-50 border-b-4 border-black">
        <div className="max-w-7xl mx-auto px-6">
          <NeoBadge color="blue">VISUAL_SHOWCASE</NeoBadge>
          <h2 className="font-black text-5xl md:text-7xl mt-6 uppercase leading-tight italic mb-12">Arctic<br/>Solutions</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <ClickableImage 
              src="/imgs/store/pouch shape/stand-up.webp" 
              alt="Frozen food stand up pouch" 
              className="w-full h-48 object-cover rounded-none border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
              caption="Stand Up Pouches"
            />
            <ClickableImage 
              src="/imgs/store/pouch shape/flat-bottom.webp" 
              alt="Flat bottom frozen food bag" 
              className="w-full h-48 object-cover rounded-none border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
              caption="Bulk Frozen Bags"
            />
            <ClickableImage 
              src="/imgs/store/pouch shape/flat-pouch.webp" 
              alt="Flat pouch for frozen items" 
              className="w-full h-48 object-cover rounded-none border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
              caption="Vacuum Pouches"
            />
            <ClickableImage 
              src="/imgs/topics/dtc_packaging_1778212333445.png" 
              alt="DTC frozen food delivery" 
              className="w-full h-48 object-cover rounded-none border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
              caption="DTC Packaging"
            />
          </div>
        </div>
      </section>

      {/* Tech Section */}
      <section className="py-24 px-4 md:px-6 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="font-black text-5xl md:text-7xl uppercase leading-none text-black">Beyond the<br/>Frost Point</h2>
            <p className="font-['JetBrains_Mono'] text-lg text-neutral-600">
              Our frozen food pouches use high-performance PE-based films designed specifically for sub-zero temperatures. No cracking, no peeling, no barrier failure.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="border-4 border-black p-4 bg-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <h4 className="font-black uppercase mb-2 text-black text-xs">Burst Test</h4>
                <p className="text-xl font-black font-['JetBrains_Mono'] text-black">PASS</p>
                <p className="text-[10px] font-bold opacity-60">High pressure resistance</p>
              </div>
              <div className="border-4 border-black p-4 bg-[#D4FF00] shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <h4 className="font-black uppercase mb-2 text-black text-xs">Seal Integrity</h4>
                <p className="text-xl font-black font-['JetBrains_Mono'] text-black">ACTIVE</p>
                <p className="text-[10px] font-bold opacity-60">Zero-leak closure</p>
              </div>
            </div>
          </div>
          <NeoCard color="bg-black" className="text-white">
            <h3 className="font-black text-3xl uppercase mb-8 text-[#D4FF00]">Frozen Protocol</h3>
            <div className="space-y-6">
              {[
                { name: 'NYLON REINFORCED', desc: 'Superior puncture resistance for sharp frozen items' },
                { name: 'MONO-PE OPTION', desc: '100% recyclable even in frozen format' },
                { name: 'FROST-PROOF MATTE', desc: 'Keeps branding visible through freezer condensation' },
                { name: 'RETORT STABLE', desc: 'Safe for boil-in-the-bag applications' }
              ].map(feature => (
                <div key={feature.name} className="flex gap-4">
                  <CheckCircle className="w-6 h-6 text-[#D4FF00] flex-shrink-0" />
                  <div>
                    <h4 className="font-black uppercase text-lg">{feature.name}</h4>
                    <p className="text-sm opacity-80 font-['JetBrains_Mono']">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </NeoCard>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-white border-b-4 border-black">
        <div className="max-w-4xl mx-auto px-6">
          <NeoBadge color="blue">KNOWLEDGE_BASE</NeoBadge>
          <h2 className="font-black text-5xl md:text-7xl mt-6 uppercase leading-tight italic mb-12">Frequently Asked<br/>Questions</h2>
          <div className="space-y-6">
            <NeoCard color="bg-gray-50">
              <h4 className="font-black text-xl mb-2">Can these pouches withstand -40°C?</h4>
              <p className="font-['JetBrains_Mono'] text-gray-600">Yes, our Arctic-Grade structures are specifically designed to remain flexible and durable in extreme freezer environments without cracking.</p>
            </NeoCard>
            <NeoCard color="bg-gray-50">
              <h4 className="font-black text-xl mb-2">Are they puncture resistant for sharp frozen items?</h4>
              <p className="font-['JetBrains_Mono'] text-gray-600">Yes, we offer nylon-reinforced (BOPA) layers that provide superior resistance to punctures from frozen proteins or sharp-edged vegetables.</p>
            </NeoCard>
            <NeoCard color="bg-gray-50">
              <h4 className="font-black text-xl mb-2">Are your frozen pouches recyclable?</h4>
              <p className="font-['JetBrains_Mono'] text-gray-600">We offer Mono-PE structures that are 100% recyclable. We also have compostable options for specific frozen snack applications.</p>
            </NeoCard>
            <NeoCard color="bg-gray-50">
              <h4 className="font-black text-xl mb-2">What is the MOQ for frozen food pouches?</h4>
              <p className="font-['JetBrains_Mono'] text-gray-600">Our MOQ starts at 500 units for digitally printed pouches, making it ideal for startup frozen meal and snack brands.</p>
            </NeoCard>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-cyan-600 text-white border-t-4 border-black">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-8">
          <NeoBadge color="lime">ARCTIC_READY</NeoBadge>
          <h2 className="font-black text-5xl md:text-8xl uppercase leading-none italic text-black">Cold Chain<br/>Built Solid.</h2>
          <p className="font-['JetBrains_Mono'] font-bold text-xl opacity-80 max-w-2xl mx-auto text-black">
            Specialized frozen food packaging with low MOQ 500 units. Tested for the deep freeze.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <NeoButton variant="primary" to="/sample" className="!bg-black !text-cyan-400">Order Arctic Sample</NeoButton>
            <NeoButton variant="secondary" className="!border-black !text-black" href="https://calendly.com/30-min-free-packaging-consultancy">Consultation</NeoButton>
          </div>
        </div>
      </section>
    </PouchLayout>
  )
}
