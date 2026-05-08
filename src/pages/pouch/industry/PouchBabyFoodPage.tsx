import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { Package, Leaf, Zap, CheckCircle, ArrowRight, Shield, Award, Heart, Baby, FileCheck, Thermometer, Droplets } from 'lucide-react'
import PouchLayout from '../../../components/pouch/PouchLayout'
import { NeoButton, NeoCard, NeoBadge } from '../../../components/pouch/PouchUI'
import ClickableImage from '../../../components/ClickableImage'

export default function PouchBabyFoodPage() {
  const floatAnim = {
    y: [0, -10, 0],
    transition: { duration: 2, repeat: Infinity, ease: "easeInOut" }
  }

  const title = "Baby Food Pouches - Safe & Eco Packaging | POUCH.ECO"
  const description = "Certified food-safe pouches for baby food and purees. BPA-free, spout options, and compostable materials. Low MOQ 500 units for growing baby food brands."

  const SAFETY_METRICS = [
    { label: 'BPA Migration', value: '0.00%', desc: 'Certified zero-migration polymers.' },
    { label: 'Phthalate Free', value: '100%', desc: 'Safe for direct infant food contact.' },
    { label: 'Heavy Metals', value: 'Non-Detect', desc: 'Verified by ASTM F963 standards.' },
    { label: 'Heat Stable', value: '95°C', desc: 'Safe for hot-fill puree processes.' }
  ]

  return (
    <PouchLayout>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href="https://pouch.eco/industry/baby-food" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative pt-12 pb-24 border-b-4 border-black bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:20px_20px] bg-pink-50">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 z-10">
              <div className="inline-block bg-[#FFD700] border-4 border-black px-4 py-2 transform -rotate-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <span className="font-['JetBrains_Mono'] font-bold text-sm text-black">INDUSTRY_CODE: BABY_04</span>
              </div>
              
              <h1 className="font-black text-5xl md:text-8xl leading-[0.9] tracking-tighter uppercase">
                Pure.<br/>
                Safe.<br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF00FF] to-[#00FFFF] drop-shadow-[4px_4px_0px_rgba(0,0,0,1)] text-pink-600">Healthy.</span>
              </h1>

              <p className="font-['JetBrains_Mono'] font-bold text-lg md:text-xl max-w-md bg-white border-2 border-black p-4 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] text-black">
                &gt; BPA-Free & Food Safe.<br/>
                &gt; Anti-Choke Cap Tech.<br/>
                &gt; Spouted & Stand-up options.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <NeoButton href="https://calendly.com/30-min-free-packaging-consultancy">Quote Now</NeoButton>
                <NeoButton variant="secondary" to="/sample">Request Safety Kit</NeoButton>
              </div>
            </div>

            <div className="relative">
              <NeoCard className="bg-[#FF00FF] relative z-10 rotate-2 !p-0 overflow-hidden group border-4 border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
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
      <section className="py-24 bg-white border-b-4 border-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="absolute inset-0 bg-[#00FFFF] translate-x-4 translate-y-4 border-4 border-black" />
              <img 
                src="/imgs/demo-site/baby/achieve_baby_realistic_hero.png" 
                alt="Safe Baby Food Packaging" 
                className="relative z-10 border-4 border-black w-full"
              />
            </div>
            <div>
              <NeoBadge color="cyan">CERTIFIED_CLEAN</NeoBadge>
              <h2 className="font-black text-5xl md:text-7xl mt-6 uppercase leading-tight italic text-pink-600">Trust is<br/>Everything.</h2>
              <p className="mt-8 text-xl text-gray-600 font-['JetBrains_Mono'] leading-relaxed">
                Baby food brands face the world's strictest packaging scrutiny. Our materials undergo rigorous independent lab testing to guarantee zero leaching of BPA, phthalates, or microplastics.
              </p>
              <div className="mt-8 grid grid-cols-2 gap-4">
                {SAFETY_METRICS.map((m, i) => (
                  <div key={i} className="bg-white border-4 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                    <h4 className="font-black uppercase text-xs mb-1 text-pink-600">{m.label}</h4>
                    <p className="text-xl font-black">{m.value}</p>
                    <p className="text-[10px] font-bold opacity-60">{m.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Visual Product Gallery Section */}
      <section className="py-24 bg-pink-50 border-b-4 border-black">
        <div className="max-w-7xl mx-auto px-6">
          <NeoBadge color="magenta">VISUAL_SHOWCASE</NeoBadge>
          <h2 className="font-black text-5xl md:text-7xl mt-6 uppercase leading-tight italic mb-12">Formats<br/>& Styles</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <ClickableImage 
              src="/imgs/topics/baby_food_bags_1778212399332.png" 
              alt="Compostable baby food bags" 
              className="w-full h-48 object-cover rounded-none border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
              caption="Spout Pouches"
            />
            <ClickableImage 
              src="/imgs/store/pouch shape/stand-up.webp" 
              alt="Baby snack stand up pouch" 
              className="w-full h-48 object-cover rounded-none border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
              caption="Snack Pouches"
            />
            <ClickableImage 
              src="/imgs/store/pouch shape/flat-bottom.webp" 
              alt="Baby food box pouch" 
              className="w-full h-48 object-cover rounded-none border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
              caption="Formula Bags"
            />
            <ClickableImage 
              src="/imgs/topics/dtc_packaging_1778212333445.png" 
              alt="DTC baby food delivery" 
              className="w-full h-48 object-cover rounded-none border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
              caption="DTC Packaging"
            />
          </div>
        </div>
      </section>

      {/* Compliance Matrix */}
      <section className="py-24 bg-[#F0F0F0] border-b-4 border-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <NeoBadge color="blue">GLOBAL_SAFETY_STANDARDS</NeoBadge>
            <h2 className="font-black text-5xl md:text-7xl uppercase mt-4 italic">No Compromise.</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <NeoCard>
              <FileCheck className="w-12 h-12 mb-6 text-pink-600" />
              <h4 className="font-black text-2xl uppercase mb-4">FDA 21 CFR</h4>
              <p className="text-sm font-['JetBrains_Mono'] text-gray-600">Full compliance with US Food & Drug Administration regulations for direct food contact in infants and toddlers.</p>
            </NeoCard>
            <NeoCard color="bg-white shadow-[10px_10px_0px_0px_rgba(255,0,128,1)]">
              <Shield className="w-12 h-12 mb-6 text-blue-600" />
              <h4 className="font-black text-2xl uppercase mb-4">EU 10/2011</h4>
              <p className="text-sm font-['JetBrains_Mono'] text-gray-600">European safety verification for overall and specific migration limits, ensuring maximum purity for delicate systems.</p>
            </NeoCard>
            <NeoCard>
              <Award className="w-12 h-12 mb-6 text-green-600" />
              <h4 className="font-black text-2xl uppercase mb-4">TUV OK Home</h4>
              <p className="text-sm font-['JetBrains_Mono'] text-gray-600">Certified to break down in backyard compost bins, allowing parents to dispose of waste responsibly at home.</p>
            </NeoCard>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-white border-b-4 border-black">
        <div className="max-w-4xl mx-auto px-6">
          <NeoBadge color="blue">KNOWLEDGE_BASE</NeoBadge>
          <h2 className="font-black text-5xl md:text-7xl mt-6 uppercase leading-tight italic mb-12">Frequently Asked<br/>Questions</h2>
          <div className="space-y-6">
            <NeoCard color="bg-gray-50">
              <h4 className="font-black text-xl mb-2">Are your pouches safe for infant food?</h4>
              <p className="font-['JetBrains_Mono'] text-gray-600">Yes, 100%. Our materials undergo rigorous testing to guarantee zero migration of harmful chemicals, ensuring total safety for infant food contact.</p>
            </NeoCard>
            <NeoCard color="bg-gray-50">
              <h4 className="font-black text-xl mb-2">Are the spouts and caps also compostable?</h4>
              <p className="font-['JetBrains_Mono'] text-gray-600">We offer both standard food-grade spouts and innovative bio-polymer spouts that are fully compostable within 180 days.</p>
            </NeoCard>
            <NeoCard color="bg-gray-50">
              <h4 className="font-black text-xl mb-2">Can these pouches be used for hot-filling?</h4>
              <p className="font-['JetBrains_Mono'] text-gray-600">Yes, our high-barrier structures are heat stable up to 95°C, making them safe for standard hot-fill puree processes.</p>
            </NeoCard>
            <NeoCard color="bg-gray-50">
              <h4 className="font-black text-xl mb-2">What is the MOQ for custom printed baby food pouches?</h4>
              <p className="font-['JetBrains_Mono'] text-gray-600">We support startup organic brands with low MOQs starting at just 500 units for digitally printed, custom-branded bags.</p>
            </NeoCard>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-pink-600 text-white border-t-4 border-black">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-8">
          <NeoBadge color="lime">SOIL_FRIENDLY</NeoBadge>
          <h2 className="font-black text-5xl md:text-8xl uppercase leading-none italic">Protect Their<br/>Future.</h2>
          <p className="font-['JetBrains_Mono'] font-bold text-xl opacity-80 max-w-2xl mx-auto">
            Empowering next-gen baby food startups with low MOQ, high-safety packaging.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <NeoButton variant="primary" to="/sample" className="!bg-white !text-pink-600">Get Safety Samples</NeoButton>
            <NeoButton variant="secondary" className="!border-white !text-white" href="https://calendly.com/30-min-free-packaging-consultancy">Consult Safety Expert</NeoButton>
          </div>
        </div>
      </section>
    </PouchLayout>
  )
}
