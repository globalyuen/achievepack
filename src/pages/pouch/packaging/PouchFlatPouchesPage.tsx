import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { Package, Leaf, Zap, CheckCircle, ArrowRight, Shield, Award } from 'lucide-react'
import PouchLayout from '../../../components/pouch/PouchLayout'
import { NeoButton, NeoCard, NeoBadge } from '../../../components/pouch/PouchUI'

export default function PouchFlatPouchesPage() {
  const floatAnim = {
    y: [0, -10, 0],
    transition: { duration: 2, repeat: Infinity, ease: "easeInOut" }
  }

  const title = "Flat Pouches - 3 Side Seal & Pillow Bags | POUCH.ECO"
  const description = "Custom printed flat pouches and 3-side seal bags. Low MOQ 500 units. Perfect for single-serve samples, face masks, and flat snacks."

  return (
    <PouchLayout>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href="https://pouch.eco/packaging/flat-pouches" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative pt-12 pb-24 border-b-4 border-black bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:20px_20px]">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 z-10">
              <div className="inline-block bg-[#FF00FF] text-white border-4 border-black px-4 py-2 transform -rotate-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <span className="font-['JetBrains_Mono'] font-bold text-sm">FLAT_TYPE: 3SS_04</span>
              </div>
              
              <h1 className="font-black text-5xl md:text-7xl leading-[0.9] tracking-tighter uppercase">
                Flat.<br/>
                Fast.<br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4FF00] to-[#00FFFF] drop-shadow-[4px_4px_0px_rgba(0,0,0,1)]">Sleek.</span>
              </h1>

              <p className="font-['JetBrains_Mono'] font-bold text-lg md:text-xl max-w-md bg-white border-2 border-black p-4 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] text-black">
                &gt; Maximum efficiency.<br/>
                &gt; Perfect for samples.<br/>
                &gt; Low profile protocol active.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <NeoButton href="https://calendly.com/30-min-free-packaging-consultancy">Quote Samples</NeoButton>
                <NeoButton variant="secondary">Material Guide</NeoButton>
              </div>
            </div>

            <div className="relative">
              <NeoCard className="bg-[#D4FF00] relative z-10 rotate-2 !p-0 overflow-hidden group">
                <div className="aspect-square bg-gradient-to-br from-[#D4FF00] to-[#FF00FF] flex items-center justify-center relative">
                  <Package className="w-64 h-64 text-black opacity-80 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300" strokeWidth={1.5} />
                  <motion.div animate={floatAnim} className="absolute top-4 right-4 bg-white border-2 border-black px-2 py-1 font-['JetBrains_Mono'] text-xs font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] z-20">
                    SPACE_SAVER_TECH
                  </motion.div>
                </div>
              </NeoCard>
              <div className="absolute top-10 -right-10 w-full h-full border-4 border-black bg-[#00FFFF] -z-0 rotate-6" />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 px-4 md:px-6 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          <NeoCard color="bg-white">
            <Zap className="w-12 h-12 mb-4 text-[#FF00FF]" />
            <h3 className="font-black text-3xl mb-4 uppercase">Sample Ready</h3>
            <p className="font-['JetBrains_Mono'] text-sm leading-relaxed mb-6">
              Low cost per unit makes flat pouches the ideal choice for marketing samples, protein single-serves, or travel sizes.
            </p>
            <NeoBadge color="bg-[#D4FF00]">MARKETING_ACTIVE</NeoBadge>
          </NeoCard>

          <NeoCard color="bg-[#00FFFF]">
            <Shield className="w-12 h-12 mb-4 text-black" />
            <h3 className="font-black text-3xl mb-4 uppercase">Barrier Armor</h3>
            <p className="font-['JetBrains_Mono'] text-sm leading-relaxed mb-6">
              Despite the slim profile, we use full-strength barrier films. Protects freshness as well as larger formats.
            </p>
            <NeoBadge color="bg-[#FF00FF]">MAX_PROTECT</NeoBadge>
          </NeoCard>

          <NeoCard color="bg-[#D4FF00]">
            <Award className="w-12 h-12 mb-4 text-[#FF00FF]" />
            <h3 className="font-black text-3xl mb-4 uppercase">Versatility</h3>
            <p className="font-['JetBrains_Mono'] text-sm leading-relaxed mb-6">
              Top-load, bottom-load, or side-load. Available with zippers, tear notches, and euro slots.
            </p>
            <NeoBadge color="bg-white">MULTI_CONFIG</NeoBadge>
          </NeoCard>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-[#FF00FF] border-t-4 border-black text-white">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-8">
          <h2 className="font-black text-5xl md:text-7xl uppercase">Small Batch. Big Impact.</h2>
          <p className="font-['JetBrains_Mono'] font-bold text-xl">
            Custom printed flat pouches with startup-friendly MOQ of 500 units.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <NeoButton href="https://calendly.com/30-min-free-packaging-consultancy">Start My Sample</NeoButton>
            <NeoButton variant="secondary" className="!text-black">Price Calculator</NeoButton>
          </div>
        </div>
      </section>
    </PouchLayout>
  )
}
