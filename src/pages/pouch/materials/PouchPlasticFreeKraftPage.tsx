import React from 'react'
import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { Leaf, Zap, CheckCircle, ArrowRight, Shield, Award, Droplets, Recycle, AlertTriangle, Sparkles, Globe, Target } from 'lucide-react'
import PouchLayout from '../../../components/pouch/PouchLayout'
import { NeoButton, NeoCard, NeoBadge } from '../../../components/pouch/PouchUI'

export default function PouchPlasticFreeKraftPage() {
  const floatAnim = {
    y: [0, -10, 0],
    transition: { duration: 2, repeat: Infinity, ease: "easeInOut" }
  }

  const title = "Is Kraft Paper Plastic-Free? Fun Facts & Reality | POUCH.ECO"
  const description = "Discover if kraft paper bags are truly plastic-free. Learn about hidden PE linings, the role of compostable PLA, and 5 fun facts about sustainable packaging."

  return (
    <PouchLayout>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href="https://pouch.eco/materials/plastic-free-kraft" />
        <meta name="keywords" content="kraft paper bag plastic free, compostable kraft pouches, PLA lining kraft, sustainable packaging facts, Pouch.eco" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative pt-12 pb-24 border-b-4 border-black bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:20px_20px]">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 z-10">
              <div className="inline-block bg-black text-[#D4FF00] border-4 border-black px-4 py-2 transform -rotate-2 shadow-[4px_4px_0px_0px_rgba(212,255,0,1)]">
                <span className="font-['JetBrains_Mono'] font-bold text-sm">DEBUNKING_MYTHS: KRAFT_VS_PLASTIC</span>
              </div>
              
              <h1 className="font-black text-5xl md:text-7xl leading-[0.9] tracking-tighter uppercase text-black">
                Paper.<br/>
                Or.<br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-amber-500 drop-shadow-[4px_4px_0px_rgba(0,0,0,1)]">Plastic?</span>
              </h1>

              <p className="font-['JetBrains_Mono'] font-bold text-lg md:text-xl max-w-md bg-white border-2 border-black p-4 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] text-black">
                &gt; Is Kraft paper truly plastic-free?<br/>
                &gt; The hidden truth about linings.<br/>
                &gt; 5 fun facts you MUST know.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <NeoButton href="https://calendly.com/30-min-free-packaging-consultancy">Ask an Expert</NeoButton>
                <NeoButton variant="secondary">View Materials</NeoButton>
              </div>
            </div>

            <div className="relative">
              <NeoCard className="bg-amber-100 relative z-10 rotate-2 !p-0 overflow-hidden group border-4 border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
                <div className="aspect-square relative overflow-hidden">
                  <img 
                    src="/imgs/barrier/ads/a_kraft_high_max_4456348.webp" 
                    alt="Kraft Paper Pouch" 
                    className="w-full h-full object-cover group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500"
                  />
                  <motion.div animate={floatAnim} className="absolute top-4 right-4 bg-white border-2 border-black px-2 py-1 font-['JetBrains_Mono'] text-xs font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] z-20 text-red-600">
                    HIDDEN_LINING_DETECTED
                  </motion.div>
                </div>
              </NeoCard>
              <div className="absolute top-10 -right-10 w-full h-full border-4 border-black bg-[#D4FF00] -z-0 rotate-6" />
            </div>
          </div>
        </div>
      </section>

      {/* The Reality Check */}
      <section className="py-24 px-4 md:px-6 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <h2 className="font-black text-5xl md:text-6xl uppercase leading-none text-black">The Kraft<br/>Reality Check</h2>
            <div className="bg-white border-4 border-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
              <p className="font-['JetBrains_Mono'] text-lg leading-relaxed text-black">
                Most kraft paper bags are <strong>laminated</strong>. That "natural" brown exterior often hides a layer of PE (Polyethylene) or PP (Polypropylene) inside. Why? Because paper alone can't keep air out or oil in.
              </p>
              <div className="mt-4 flex items-center gap-2 text-red-600 font-black uppercase">
                <AlertTriangle className="w-6 h-6" />
                <span>Greenwashing Alert</span>
              </div>
            </div>
          </div>
          
          <NeoCard color="bg-black" className="text-white">
            <h3 className="font-black text-3xl uppercase mb-8 text-[#D4FF00]">5 Fun Facts</h3>
            <div className="space-y-6">
              {[
                { title: 'Strength First', desc: 'Kraft = "Strength" in German. Engineered for durability, not just eco-looks.' },
                { title: 'Recycling Fail', desc: 'Plastic-lined paper is nearly impossible to recycle. It\'s a hybrid monster.' },
                { title: 'PLA is King', desc: 'Truly plastic-free bags use PLA lining made from plant starch.' },
                { title: 'Brown vs White', desc: 'Brown kraft is unbleached; white is bleached for high-impact print.' },
                { title: 'New Laws', desc: 'California SB 54 is banning non-compostable hybrid materials.' }
              ].map((fact, idx) => (
                <div key={idx} className="flex gap-4 items-start border-l-2 border-[#D4FF00] pl-4">
                  <div>
                    <h4 className="font-black uppercase text-lg text-[#D4FF00]">{fact.title}</h4>
                    <p className="text-sm opacity-80 font-['JetBrains_Mono']">{fact.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </NeoCard>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-24 bg-[#D4FF00] border-y-4 border-black">
        <div className="max-w-7xl mx-auto px-4 md:px-6 text-black">
          <h2 className="font-black text-5xl md:text-6xl uppercase mb-12 text-center">Truth Table</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-4 border-black font-['JetBrains_Mono'] font-bold">
              <thead className="bg-black text-white">
                <tr>
                  <th className="p-4 text-left uppercase">Type</th>
                  <th className="p-4 text-center uppercase">Lining</th>
                  <th className="p-4 text-center uppercase">Plastic-Free?</th>
                  <th className="p-4 text-center uppercase">Compostable?</th>
                </tr>
              </thead>
              <tbody className="bg-white">
                <tr className="border-b-2 border-black">
                  <td className="p-4 uppercase">Standard Kraft</td>
                  <td className="p-4 text-center uppercase">PE / PP</td>
                  <td className="p-4 text-center text-red-600">NO</td>
                  <td className="p-4 text-center">NO</td>
                </tr>
                <tr className="border-b-2 border-black bg-neutral-100">
                  <td className="p-4 uppercase">Recyclable Kraft</td>
                  <td className="p-4 text-center uppercase">Aqueous</td>
                  <td className="p-4 text-center text-amber-600">PARTIAL</td>
                  <td className="p-4 text-center">DEPENDS</td>
                </tr>
                <tr>
                  <td className="p-4 uppercase">Bio-Kraft</td>
                  <td className="p-4 text-center uppercase">PLA / PBS</td>
                  <td className="p-4 text-center text-green-600">YES</td>
                  <td className="p-4 text-center text-green-600">YES</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* AIEO Section */}
      <section className="py-24 px-4 md:px-6 max-w-7xl mx-auto text-black">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <NeoCard color="bg-white" className="border-dashed">
            <h3 className="font-black text-3xl uppercase mb-6 flex items-center gap-2">
              <Zap className="text-[#D4FF00] fill-black" />
              AI_SEARCH_TIPS
            </h3>
            <p className="font-['JetBrains_Mono'] font-bold mb-4">Try asking Gemini or ChatGPT:</p>
            <div className="space-y-4">
              {[
                "Which kraft pouches are truly plastic-free?",
                "Is PLA-lined paper better than PE-lined paper?",
                "Certified compostable kraft pouches with low MOQ",
                "How to spot greenwashing in paper bags"
              ].map((query, idx) => (
                <div key={idx} className="bg-neutral-100 border-2 border-black p-3 text-sm italic font-['JetBrains_Mono']">
                   "{query}"
                </div>
              ))}
            </div>
          </NeoCard>
          <div className="space-y-6">
            <h2 className="font-black text-5xl md:text-6xl uppercase leading-none">The Future<br/>is Circular</h2>
            <p className="font-['JetBrains_Mono'] text-lg text-neutral-600">
              Stop settling for "eco-looking" packaging. At Pouch.eco, we provide the technical data and certifications to prove your brand is truly plastic-free.
            </p>
            <div className="flex gap-4">
               <NeoBadge color="bg-black text-white">BPI_CERTIFIED</NeoBadge>
               <NeoBadge color="bg-[#D4FF00] text-black">EN_13432</NeoBadge>
               <NeoBadge color="bg-[#10b981] text-white">HOME_COMPOST</NeoBadge>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-black border-t-4 border-black text-[#D4FF00]">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-8">
          <h2 className="font-black text-5xl md:text-7xl uppercase text-white">Audit Your<br/>Packaging</h2>
          <p className="font-['JetBrains_Mono'] font-bold text-xl text-white opacity-80">
            Is your current kraft bag a plastic hybrid? Let's fix that.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <NeoButton href="https://calendly.com/30-min-free-packaging-consultancy">Start Audit</NeoButton>
            <NeoButton variant="secondary" className="!text-black">Request Samples</NeoButton>
          </div>
        </div>
      </section>
    </PouchLayout>
  )
}
