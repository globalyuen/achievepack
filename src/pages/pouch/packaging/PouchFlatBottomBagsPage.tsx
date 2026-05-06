import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { Package, Leaf, Zap, CheckCircle, ArrowRight, Shield, Award, Box } from 'lucide-react'
import PouchLayout from '../../../components/pouch/PouchLayout'
import { NeoButton, NeoCard, NeoBadge } from '../../../components/pouch/PouchUI'

export default function PouchFlatBottomBagsPage() {
  const floatAnim = {
    y: [0, -10, 0],
    transition: { duration: 2, repeat: Infinity, ease: "easeInOut" }
  }

  const title = "Flat Bottom Bags - Premium Packaging for Startups | POUCH.ECO"
  const description = "Premium flat bottom pouches (Box Bags) with low MOQ from 500 units. Maximum stability and shelf space. Perfect for coffee beans and premium snacks."

  return (
    <PouchLayout>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href="https://pouch.eco/packaging/flat-bottom-bags" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative pt-12 pb-24 border-b-4 border-black bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:20px_20px]">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 z-10">
              <div className="inline-block bg-[#FF00FF] text-white border-4 border-black px-4 py-2 transform -rotate-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <span className="font-['JetBrains_Mono'] font-bold text-sm">PREMIUM_TYPE: BOX_BAG_02</span>
              </div>
              
              <h1 className="font-black text-5xl md:text-7xl leading-[0.9] tracking-tighter uppercase">
                Premium.<br/>
                Stable.<br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4FF00] to-[#00FFFF] drop-shadow-[4px_4px_0px_rgba(0,0,0,1)]">Superior.</span>
              </h1>

              <p className="font-['JetBrains_Mono'] font-bold text-lg md:text-xl max-w-md bg-white border-2 border-black p-4 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] text-black">
                &gt; Maximum shelf volume.<br/>
                &gt; 5-panel branding protocol.<br/>
                &gt; High stability active.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <NeoButton href="https://calendly.com/30-min-free-packaging-consultancy">Get Quote</NeoButton>
                <NeoButton variant="secondary">Compare Formats</NeoButton>
              </div>
            </div>

            <div className="relative">
              <NeoCard className="bg-[#D4FF00] relative z-10 rotate-2 !p-0 overflow-hidden group border-4 border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
                <div className="aspect-square relative overflow-hidden">
                  <img 
                    src="/imgs/pouch/packaging/pouch_fb_hero.png" 
                    alt="Flat Bottom Pouch" 
                    className="w-full h-full object-cover group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500"
                  />
                  <motion.div animate={floatAnim} className="absolute top-4 right-4 bg-white border-2 border-black px-2 py-1 font-['JetBrains_Mono'] text-xs font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] z-20">
                    BOX_BOTTOM_TECH
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
            <Award className="w-12 h-12 mb-4 text-[#00FFFF]" />
            <h3 className="font-black text-3xl mb-4 uppercase">5-Panel Branding</h3>
            <p className="font-['JetBrains_Mono'] text-sm leading-relaxed mb-6">
              Print on the front, back, bottom, and two side gussets. Unrivaled visibility in the retail ecosystem.
            </p>
            <NeoBadge color="bg-[#FF00FF]">MAX_VISIBILITY</NeoBadge>
          </NeoCard>

          <NeoCard color="bg-[#00FFFF]">
            <Box className="w-12 h-12 mb-4 text-black" />
            <h3 className="font-black text-3xl mb-4 uppercase">Flat Foundation</h3>
            <p className="font-['JetBrains_Mono'] text-sm leading-relaxed mb-6">
              Maximum stability. Won't tip over on shelves. Looks like a box, functions like a pouch.
            </p>
            <NeoBadge color="bg-[#D4FF00]">ULTRA_STABLE</NeoBadge>
          </NeoCard>

          <NeoCard color="bg-[#D4FF00]">
            <Zap className="w-12 h-12 mb-4 text-[#FF00FF]" />
            <h3 className="font-black text-3xl mb-4 uppercase">Volume Optimization</h3>
            <p className="font-['JetBrains_Mono'] text-sm leading-relaxed mb-6">
              Holds more product in less space compared to standard stand-up pouches. Reduced logistics overhead.
            </p>
            <NeoBadge color="bg-white">SPACE_EFFICIENT</NeoBadge>
          </NeoCard>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-[#FF00FF] border-t-4 border-black text-white">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-8">
          <h2 className="font-black text-5xl md:text-7xl uppercase">Upgrade Your Brand</h2>
          <p className="font-['JetBrains_Mono'] font-bold text-xl">
            Premium Box Bags for startups looking to compete with industry giants.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <NeoButton href="https://calendly.com/30-min-free-packaging-consultancy">Book Consultation</NeoButton>
            <NeoButton variant="secondary" className="!text-black">Order Samples</NeoButton>
          </div>
        </div>
      </section>
    </PouchLayout>
  )
}
