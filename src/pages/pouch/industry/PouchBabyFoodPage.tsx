import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { Package, Leaf, Zap, CheckCircle, ArrowRight, Shield, Award, Heart } from 'lucide-react'
import PouchLayout from '../../../components/pouch/PouchLayout'
import { NeoButton, NeoCard, NeoBadge } from '../../../components/pouch/PouchUI'

export default function PouchBabyFoodPage() {
  const floatAnim = {
    y: [0, -10, 0],
    transition: { duration: 2, repeat: Infinity, ease: "easeInOut" }
  }

  const title = "Baby Food Pouches - Safe & Eco Packaging | POUCH.ECO"
  const description = "Certified food-safe pouches for baby food and purees. BPA-free, spout options, and compostable materials. Low MOQ 500 units for growing baby food brands."

  return (
    <PouchLayout>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href="https://pouch.eco/industry/baby-food" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative pt-12 pb-24 border-b-4 border-black bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:20px_20px]">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 z-10">
              <div className="inline-block bg-[#FFD700] border-4 border-black px-4 py-2 transform -rotate-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <span className="font-['JetBrains_Mono'] font-bold text-sm text-black">INDUSTRY_CODE: BABY_04</span>
              </div>
              
              <h1 className="font-black text-5xl md:text-7xl leading-[0.9] tracking-tighter uppercase">
                Pure.<br/>
                Safe.<br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF00FF] to-[#00FFFF] drop-shadow-[4px_4px_0px_rgba(0,0,0,1)]">Healthy.</span>
              </h1>

              <p className="font-['JetBrains_Mono'] font-bold text-lg md:text-xl max-w-md bg-white border-2 border-black p-4 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] text-black">
                &gt; BPA-Free & Food Safe.<br/>
                &gt; Anti-Choke Cap Tech.<br/>
                &gt; Spouted & Stand-up options.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <NeoButton href="https://calendly.com/30-min-free-packaging-consultancy">Quote Now</NeoButton>
                <NeoButton variant="secondary">Safety Specs</NeoButton>
              </div>
            </div>

            <div className="relative">
              <NeoCard className="bg-[#FF00FF] relative z-10 rotate-2 !p-0 overflow-hidden group">
                <div className="aspect-square bg-gradient-to-br from-[#FF00FF] to-[#00FFFF] flex items-center justify-center relative">
                  <Heart className="w-64 h-64 text-white opacity-80 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300" strokeWidth={1.5} />
                  <motion.div animate={floatAnim} className="absolute top-4 right-4 bg-[#D4FF00] border-2 border-black px-2 py-1 font-['JetBrains_Mono'] text-xs font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] z-20 text-black">
                    FOOD_GRADE_CERT
                  </motion.div>
                </div>
              </NeoCard>
              <div className="absolute top-10 -right-10 w-full h-full border-4 border-black bg-[#D4FF00] -z-0 rotate-6" />
            </div>
          </div>
        </div>
      </section>

      {/* Safety Section */}
      <section className="py-24 px-4 md:px-6 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <NeoCard color="bg-white">
            <Shield className="w-12 h-12 mb-4 text-[#FF00FF]" />
            <h3 className="font-black text-3xl mb-4 uppercase">Uncompromising Safety</h3>
            <p className="font-['JetBrains_Mono'] text-lg leading-relaxed mb-6">
              Our baby food pouches are manufactured in ISO-certified clean rooms. 100% free from BPA, phthalates, and lead. 
            </p>
            <div className="space-y-2 font-['JetBrains_Mono'] font-bold text-sm">
              <div className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-[#D4FF00]" /> FDA Approved Materials</div>
              <div className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-[#D4FF00]" /> High Temperature Retort Ready</div>
              <div className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-[#D4FF00]" /> Migration Tested</div>
            </div>
          </NeoCard>
          <div className="space-y-6">
            <h2 className="font-black text-5xl uppercase leading-none">Designed for<br/>Tiny Hands</h2>
            <p className="font-['JetBrains_Mono'] text-lg text-neutral-600">
              Easy-squeeze technology and rounded corners ensure a safe and mess-free experience for babies and parents alike.
            </p>
            <NeoButton variant="dark">Learn More</NeoButton>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-[#FF00FF] border-t-4 border-black text-white">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-8">
          <h2 className="font-black text-5xl md:text-7xl uppercase">Safe. Sustainable. Small.</h2>
          <p className="font-['JetBrains_Mono'] font-bold text-xl">
            Empowering next-gen baby food startups with low MOQ, high-safety packaging.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <NeoButton href="https://calendly.com/30-min-free-packaging-consultancy">Consult Safety Expert</NeoButton>
            <NeoButton variant="secondary" className="!text-black">Order Prototype</NeoButton>
          </div>
        </div>
      </section>
    </PouchLayout>
  )
}
