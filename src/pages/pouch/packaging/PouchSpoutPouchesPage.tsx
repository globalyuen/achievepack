import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { Package, Leaf, Zap, CheckCircle, ArrowRight, Shield, Award, Droplets } from 'lucide-react'
import PouchLayout from '../../../components/pouch/PouchLayout'
import { NeoButton, NeoCard, NeoBadge } from '../../../components/pouch/PouchUI'

export default function PouchSpoutPouchesPage() {
  const floatAnim = {
    y: [0, -10, 0],
    transition: { duration: 2, repeat: Infinity, ease: "easeInOut" }
  }

  const title = "Spout Pouches - Flexible Liquid Packaging | POUCH.ECO"
  const description = "Custom spouted pouches for liquids, sauces, and purees. Low MOQ 500 units. Lightweight, durable, and eco-friendly alternative to rigid bottles."

  return (
    <PouchLayout>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href="https://pouch.eco/packaging/spout-pouches" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative pt-12 pb-24 border-b-4 border-black bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:20px_20px]">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 z-10">
              <div className="inline-block bg-[#00FFFF] border-4 border-black px-4 py-2 transform -rotate-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <span className="font-['JetBrains_Mono'] font-bold text-sm">LIQUID_TYPE: SPOUT_03</span>
              </div>
              
              <h1 className="font-black text-5xl md:text-7xl leading-[0.9] tracking-tighter uppercase">
                Pour.<br/>
                Store.<br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00FFFF] to-[#FF00FF] drop-shadow-[4px_4px_0px_rgba(0,0,0,1)]">Flow.</span>
              </h1>

              <p className="font-['JetBrains_Mono'] font-bold text-lg md:text-xl max-w-md bg-white border-2 border-black p-4 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] text-black">
                &gt; 80% less plastic than bottles.<br/>
                &gt; Zero-leak protocol active.<br/>
                &gt; High performance barrier.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <NeoButton href="https://calendly.com/30-min-free-packaging-consultancy">Get Quote</NeoButton>
                <NeoButton variant="secondary" to="/tech-specs">Compare to Bottles</NeoButton>
              </div>
            </div>

            <div className="relative">
              <NeoCard className="bg-[#FF00FF] relative z-10 rotate-2 !p-0 overflow-hidden group">
                <div className="aspect-square bg-gradient-to-br from-[#FF00FF] to-[#00FFFF] flex items-center justify-center relative">
                  <Droplets className="w-64 h-64 text-white opacity-80 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300" strokeWidth={1.5} />
                  <motion.div animate={floatAnim} className="absolute top-4 right-4 bg-[#D4FF00] border-2 border-black px-2 py-1 font-['JetBrains_Mono'] text-xs font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] z-20 text-black">
                    LEAK_PROOF_TECH
                  </motion.div>
                </div>
              </NeoCard>
              <div className="absolute top-10 -right-10 w-full h-full border-4 border-black bg-[#D4FF00] -z-0 rotate-6" />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 px-4 md:px-6 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          <NeoCard color="bg-white">
            <Zap className="w-12 h-12 mb-4 text-[#FF00FF]" />
            <h3 className="font-black text-3xl mb-4 uppercase">Logistics ROI</h3>
            <p className="font-['JetBrains_Mono'] text-sm leading-relaxed mb-6">
              Ships flat. One truck of spout pouches equals 25 trucks of empty rigid bottles. Massive carbon reduction.
            </p>
            <NeoBadge color="bg-[#D4FF00]">CARBON_SAVER</NeoBadge>
          </NeoCard>

          <NeoCard color="bg-[#D4FF00]">
            <Shield className="w-12 h-12 mb-4 text-black" />
            <h3 className="font-black text-3xl mb-4 uppercase">Durability</h3>
            <p className="font-['JetBrains_Mono'] text-sm leading-relaxed mb-6">
              Multi-layer puncture resistance. Engineered to survive courier drops and rough handling in transit.
            </p>
            <NeoBadge color="bg-[#00FFFF]">MIL_SPEC_TOUGH</NeoBadge>
          </NeoCard>

          <NeoCard color="bg-[#00FFFF]">
            <Droplets className="w-12 h-12 mb-4 text-[#FF00FF]" />
            <h3 className="font-black text-3xl mb-4 uppercase">Dispensing</h3>
            <p className="font-['JetBrains_Mono'] text-sm leading-relaxed mb-6">
              Precision spouts from 8.5mm to 22mm. Anti-choke options for baby food and easy-pour for liquids.
            </p>
            <NeoBadge color="bg-white">CONTROLLED_FLOW</NeoBadge>
          </NeoCard>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-[#00FFFF] border-t-4 border-black">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-8">
          <h2 className="font-black text-5xl md:text-7xl uppercase">Liquid Revolution</h2>
          <p className="font-['JetBrains_Mono'] font-bold text-xl">
            Upgrade from plastic bottles to high-efficiency spout pouches.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <NeoButton href="https://calendly.com/30-min-free-packaging-consultancy">Consult Now</NeoButton>
            <NeoButton variant="dark" to="/sample">Order Prototype</NeoButton>
          </div>
        </div>
      </section>
    </PouchLayout>
  )
}
