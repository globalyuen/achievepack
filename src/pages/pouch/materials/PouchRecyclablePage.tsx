import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { Recycle, Zap, CheckCircle, ArrowRight, Shield, Award, Droplets } from 'lucide-react'
import PouchLayout from '../../../components/pouch/PouchLayout'
import { NeoButton, NeoCard, NeoBadge } from '../../../components/pouch/PouchUI'

export default function PouchRecyclablePage() {
  const floatAnim = {
    y: [0, -10, 0],
    transition: { duration: 2, repeat: Infinity, ease: "easeInOut" as const }
  }

  const title = "Recyclable Packaging - Circular Economy Solutions | POUCH.ECO"
  const description = "Mono-material recyclable pouches for startups. PE/PE and PP/PP structures. Low MOQ 500 units. Certified recyclable and shelf-stable packaging."

  return (
    <PouchLayout>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href="https://pouch.eco/materials/recyclable" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative pt-12 pb-24 border-b-4 border-black bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:20px_20px]">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 z-10">
              <div className="inline-block bg-[#00FFFF] text-black border-4 border-black px-4 py-2 transform -rotate-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <span className="font-['JetBrains_Mono'] font-bold text-sm">MATERIAL_CLASS: RECYCLE_02</span>
              </div>
              
              <h1 className="font-black text-5xl md:text-7xl leading-[0.9] tracking-tighter uppercase">
                Close.<br/>
                The.<br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00FFFF] to-[#FF00FF] drop-shadow-[4px_4px_0px_rgba(0,0,0,1)]">Loop.</span>
              </h1>

              <p className="font-['JetBrains_Mono'] font-bold text-lg md:text-xl max-w-md bg-white border-2 border-black p-4 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] text-black">
                &gt; Mono-material protocol.<br/>
                &gt; Kerbside recyclable.<br/>
                &gt; High performance barrier.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <NeoButton href="https://calendly.com/30-min-free-packaging-consultancy">Explore Mono</NeoButton>
                <NeoButton variant="secondary">Download Specs</NeoButton>
              </div>
            </div>

            <div className="relative">
              <NeoCard className="bg-[#00FFFF] relative z-10 rotate-2 !p-0 overflow-hidden group border-4 border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
                <div className="aspect-square relative overflow-hidden">
                  <img 
                    src="/imgs/pouch/materials/pouch_recycle_hero.png" 
                    alt="Recyclable Pouch" 
                    className="w-full h-full object-cover group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500"
                  />
                  <motion.div animate={floatAnim} className="absolute top-4 right-4 bg-white border-2 border-black px-2 py-1 font-['JetBrains_Mono'] text-xs font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] z-20">
                    MONO_PE_CERTIFIED
                  </motion.div>
                </div>
              </NeoCard>
              <div className="absolute top-10 -right-10 w-full h-full border-4 border-black bg-[#FF00FF] -z-0 rotate-6" />
            </div>
          </div>
        </div>
      </section>

      {/* Science Section */}
      <section className="py-24 px-4 md:px-6 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          <NeoCard color="bg-white">
            <h3 className="font-black text-3xl mb-4 uppercase">Mono-PE</h3>
            <p className="font-['JetBrains_Mono'] text-sm leading-relaxed mb-6">
              100% Polyethylene structure. Easily recycled in existing PE streams. High clarity and good moisture barrier.
            </p>
            <NeoBadge color="bg-[#00FFFF]">KERBSIDE_READY</NeoBadge>
          </NeoCard>

          <NeoCard color="bg-[#D4FF00]">
            <h3 className="font-black text-3xl mb-4 uppercase">Mono-PP</h3>
            <p className="font-['JetBrains_Mono'] text-sm leading-relaxed mb-6">
              100% Polypropylene structure. Superior heat resistance and stiffness. Perfect for hot-fill or microwaveable apps.
            </p>
            <NeoBadge color="bg-[#FF00FF]">HEAT_STABLE</NeoBadge>
          </NeoCard>

          <NeoCard color="bg-[#FF00FF]" className="text-white">
            <h3 className="font-black text-3xl mb-4 uppercase text-white">EVOH Barrier</h3>
            <p className="font-['JetBrains_Mono'] text-sm leading-relaxed mb-6">
              Ultra-thin barrier layer that doesn't interfere with the recycling stream. Keeps O2 out and freshness in.
            </p>
            <NeoBadge color="bg-[#D4FF00]">TECH_ACTIVE</NeoBadge>
          </NeoCard>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-[#00FFFF] border-t-4 border-black">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-8">
          <h2 className="font-black text-5xl md:text-7xl uppercase">Ready to Pivot?</h2>
          <p className="font-['JetBrains_Mono'] font-bold text-xl">
            Switch from multi-layer mixed plastics to Mono-Material today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <NeoButton href="https://calendly.com/30-min-free-packaging-consultancy">Consult Engineering</NeoButton>
            <NeoButton variant="dark">Price Mono-PE</NeoButton>
          </div>
        </div>
      </section>
    </PouchLayout>
  )
}
