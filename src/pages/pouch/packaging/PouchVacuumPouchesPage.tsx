import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { Package, Leaf, Zap, CheckCircle, ArrowRight, Shield, Award, Wind } from 'lucide-react'
import PouchLayout from '../../../components/pouch/PouchLayout'
import { NeoButton, NeoCard, NeoBadge } from '../../../components/pouch/PouchUI'

export default function PouchVacuumPouchesPage() {
  const floatAnim = {
    y: [0, -10, 0],
    transition: { duration: 2, repeat: Infinity, ease: "easeInOut" as const }
  }

  const title = "Vacuum Pouches - Industrial Freshness Control | POUCH.ECO"
  const description = "Commercial vacuum seal pouches for meat, cheese, and long-life foods. Low MOQ 500 units. High-strength barrier protection for extended shelf life."

  return (
    <PouchLayout>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href="https://pouch.eco/packaging/vacuum-pouches" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative pt-12 pb-24 border-b-4 border-black bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:20px_20px]">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 z-10">
              <div className="inline-block bg-[#00FFFF] border-4 border-black px-4 py-2 transform -rotate-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <span className="font-['JetBrains_Mono'] font-bold text-sm">TECH_TYPE: VAC_06</span>
              </div>
              
              <h1 className="font-black text-5xl md:text-7xl leading-[0.9] tracking-tighter uppercase">
                Vacuum.<br/>
                Seal.<br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4FF00] to-[#00FFFF] drop-shadow-[4px_4px_0px_rgba(0,0,0,1)]">Preserve.</span>
              </h1>

              <p className="font-['JetBrains_Mono'] font-bold text-lg md:text-xl max-w-md bg-white border-2 border-black p-4 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] text-black">
                &gt; Extend shelf life by 300%.<br/>
                &gt; Puncture-resistant protocol.<br/>
                &gt; Industrial strength active.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <NeoButton href="https://calendly.com/30-min-free-packaging-consultancy">Quote Now</NeoButton>
                <NeoButton variant="secondary">Shelf-Life Data</NeoButton>
              </div>
            </div>

            <div className="relative">
              <NeoCard className="bg-[#D4FF00] relative z-10 rotate-2 !p-0 overflow-hidden group">
                <div className="aspect-square bg-gradient-to-br from-[#D4FF00] to-[#00FFFF] flex items-center justify-center relative">
                  <Wind className="w-64 h-64 text-black opacity-80 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300" strokeWidth={1.5} />
                  <motion.div animate={floatAnim} className="absolute top-4 right-4 bg-white border-2 border-black px-2 py-1 font-['JetBrains_Mono'] text-xs font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] z-20 text-black">
                    ZERO_O2_TECH
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
            <h3 className="font-black text-3xl mb-4 uppercase text-black">Puncture Resist</h3>
            <p className="font-['JetBrains_Mono'] text-sm leading-relaxed mb-6 text-black">
              Multi-layer Nylon/PE structures designed to handle sharp bones, dried goods, and industrial handling without losing vacuum integrity.
            </p>
            <NeoBadge color="bg-[#00FFFF]">TOUGH_PROTOCOL</NeoBadge>
          </NeoCard>

          <NeoCard color="bg-[#D4FF00]">
            <h3 className="font-black text-3xl mb-4 uppercase text-black">O2 Barrier</h3>
            <p className="font-['JetBrains_Mono'] text-sm leading-relaxed mb-6 text-black">
              Ultra-low oxygen transmission rates (OTR). Prevents oxidation and aerobic bacterial growth, keeping food fresh for weeks or months.
            </p>
            <NeoBadge color="bg-[#FF00FF]">MAX_FRESH</NeoBadge>
          </NeoCard>

          <NeoCard color="bg-[#FF00FF]" className="text-white">
            <h3 className="font-black text-3xl uppercase text-white mb-4">Sous-Vide Ready</h3>
            <p className="font-['JetBrains_Mono'] text-sm leading-relaxed mb-6 text-white">
              Temperature stable for professional cooking applications. Safe for boiling, steaming, and long-term freezer storage.
            </p>
            <NeoBadge color="bg-[#D4FF00]">PRO_CHEF_GRADE</NeoBadge>
          </NeoCard>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-[#00FFFF] border-t-4 border-black">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-8">
          <h2 className="font-black text-5xl md:text-7xl uppercase">Vacuum Power</h2>
          <p className="font-['JetBrains_Mono'] font-bold text-xl">
            Industrial grade vacuum pouches with low MOQ for growing food brands.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <NeoButton href="https://calendly.com/30-min-free-packaging-consultancy">Order Prototype</NeoButton>
            <NeoButton variant="dark">Price Samples</NeoButton>
          </div>
        </div>
      </section>
    </PouchLayout>
  )
}
