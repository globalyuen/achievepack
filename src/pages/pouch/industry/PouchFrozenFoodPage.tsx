import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { Package, Leaf, Zap, CheckCircle, ArrowRight, Shield, Award, Snowflake } from 'lucide-react'
import PouchLayout from '../../../components/pouch/PouchLayout'
import { NeoButton, NeoCard, NeoBadge } from '../../../components/pouch/PouchUI'

export default function PouchFrozenFoodPage() {
  const floatAnim = {
    y: [0, -10, 0],
    transition: { duration: 2, repeat: Infinity, ease: "easeInOut" }
  }

  const title = "Frozen Food Packaging - High Strength & Eco | POUCH.ECO"
  const description = "Specialized frozen food pouches for startups. Puncture resistant, frost-proof, and compostable options. Low MOQ 500 units for frozen snacks and meals."

  return (
    <PouchLayout>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href="https://pouch.eco/industry/frozen-food" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative pt-12 pb-24 border-b-4 border-black bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:20px_20px]">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 z-10">
              <div className="inline-block bg-[#00FFFF] border-4 border-black px-4 py-2 transform -rotate-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <span className="font-['JetBrains_Mono'] font-bold text-sm">INDUSTRY_CODE: FROZEN_05</span>
              </div>
              
              <h1 className="font-black text-5xl md:text-7xl leading-[0.9] tracking-tighter uppercase">
                Freeze.<br/>
                Store.<br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00FFFF] to-[#D4FF00] drop-shadow-[4px_4px_0px_rgba(0,0,0,1)]">Protect.</span>
              </h1>

              <p className="font-['JetBrains_Mono'] font-bold text-lg md:text-xl max-w-md bg-white border-2 border-black p-4 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] text-black">
                &gt; Sub-zero durability.<br/>
                &gt; Puncture-proof protocol.<br/>
                &gt; Recyclable Mono-PE active.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <NeoButton href="https://calendly.com/30-min-free-packaging-consultancy">Get Quote</NeoButton>
                <NeoButton variant="secondary">Material Testing</NeoButton>
              </div>
            </div>

            <div className="relative">
              <NeoCard className="bg-[#00FFFF] relative z-10 rotate-2 !p-0 overflow-hidden group">
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

      {/* Tech Section */}
      <section className="py-24 px-4 md:px-6 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="font-black text-5xl uppercase leading-none text-black">Beyond the<br/>Frost Point</h2>
            <p className="font-['JetBrains_Mono'] text-lg text-neutral-600">
              Our frozen food pouches use high-performance PE-based films designed specifically for sub-zero temperatures. No cracking, no peeling, no barrier failure.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="border-4 border-black p-4 bg-white">
                <h4 className="font-black uppercase mb-2 text-black">Burst Test</h4>
                <p className="text-xs font-bold font-['JetBrains_Mono'] text-black">High pressure resistance</p>
              </div>
              <div className="border-4 border-black p-4 bg-[#D4FF00]">
                <h4 className="font-black uppercase mb-2 text-black">Seal Integrity</h4>
                <p className="text-xs font-bold font-['JetBrains_Mono'] text-black">Zero-leak closure</p>
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

      {/* CTA Section */}
      <section className="py-24 bg-[#00FFFF] border-t-4 border-black text-black">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-8">
          <h2 className="font-black text-5xl md:text-7xl uppercase">Cold Chain Ready</h2>
          <p className="font-['JetBrains_Mono'] font-bold text-xl">
            Specialized frozen food packaging with low MOQ 500 units.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <NeoButton href="https://calendly.com/30-min-free-packaging-consultancy">Consult Now</NeoButton>
            <NeoButton variant="dark">Price Calculator</NeoButton>
          </div>
        </div>
      </section>
    </PouchLayout>
  )
}
