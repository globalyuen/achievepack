import React from 'react'
import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { Recycle, CheckCircle, AlertTriangle, ArrowRight, Shield, Zap, Leaf, Thermometer, Sparkles } from 'lucide-react'
import PouchLayout from '../../../components/pouch/PouchLayout'
import { NeoButton, NeoCard, NeoBadge } from '../../../components/pouch/PouchUI'

export default function PouchCompostableSpoutedPouchesPage() {
  const floatAnim = {
    y: [0, -10, 0],
    transition: { duration: 2, repeat: Infinity, ease: "easeInOut" as const }
  }

  const title = "Compostable Spouted Pouches & Circular Economy Design | POUCH.ECO"
  const description = "Ditch unrecyclable plastic spout pouches. Meet POUCH.ECO's 100% compostable, high-barrier liquid spouted bags, offering a verified organic end-of-life solution."

  return (
    <PouchLayout>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href="https://pouch.eco/topics/compostable-spouted-pouches" />
        <meta name="keywords" content="compostable spouted pouches, biodegradable spouts, liquid barrier bags, circular economy packaging, baby food eco-pouches" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative pt-12 pb-24 border-b-4 border-black bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:20px_20px]">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 z-10">
              <div className="inline-block bg-[#059669] text-white border-4 border-black px-4 py-2 transform -rotate-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <span className="font-['JetBrains_Mono'] font-bold text-sm">CIRCULAR_ECONOMY_DESIGN</span>
              </div>
              
              <h1 className="font-black text-5xl md:text-7xl leading-[0.9] tracking-tighter uppercase">
                Liquid Safe.<br/>
                Fully <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#059669] to-[#D4FF00] drop-shadow-[4px_4px_0px_rgba(0,0,0,1)]">Compostable.</span>
              </h1>

              <p className="font-['JetBrains_Mono'] font-bold text-lg md:text-xl max-w-md bg-white border-2 border-black p-4 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] text-black">
                &gt; Traditional spouts are non-recyclable.<br/>
                &gt; Multilayer laminates contaminate waste.<br/>
                &gt; 100% plant-based organic circularity is here.
              </p>
            </div>

            <div className="relative">
              <NeoCard className="bg-[#D4FF00] relative z-10 rotate-2 !p-0 overflow-hidden group border-4 border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
                <div className="aspect-square relative overflow-hidden">
                    <img 
                      src="/imgs/topics/compostable-spouted-pouches.png" 
                      alt="Achieve Pack compostable spouted pouch undergoing composting test" 
                      className="w-full h-full object-cover group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500"
                    />
                  <motion.div animate={floatAnim} className="absolute top-4 right-4 bg-white border-2 border-black px-2 py-1 font-['JetBrains_Mono'] text-xs font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] z-20">
                    BPI_CERTIFIED_SPOUT
                  </motion.div>
                </div>
              </NeoCard>
              <div className="absolute top-10 -right-10 w-full h-full border-4 border-black bg-[#059669] -z-0 rotate-6" />
            </div>
          </div>
        </div>
      </section>

      {/* Deep Dive SEO Content */}
      <section className="py-24 bg-white border-b-4 border-black">
        <div className="max-w-4xl mx-auto px-4 md:px-6">
          <h2 className="text-4xl md:text-5xl font-['Space_Grotesk'] font-black uppercase mb-8">
            The Science of <span className="text-[#059669]">Circular Spouted Packaging</span>
          </h2>
          
          <div className="prose prose-lg max-w-none font-['JetBrains_Mono'] text-gray-700 space-y-6">
            <p>
              Flexible packaging like stand-up spouted pouches is highly popular for purees, drinks, and cosmetic liquids because of its low weight and low carbon footprint. However, its complex layer structures make standard recycling impossible.
            </p>

            <h3 className="text-2xl font-['Space_Grotesk'] font-black uppercase text-black mt-12 mb-4">A True End-of-Life Solution</h3>
            <p>
              At POUCH.ECO, we are focused on closing the loop. Our spouted pouches represent a thorough **Circular Economy Design**. We laminated premium bio-cellulose fibers with biodegradable barrier resins (Bio-EVOH) and high-elasticity PBS to create a 100% compostable structural frame.
            </p>
            <p>
              Even the rigid spout and cap are made from verified organic corn and plant starches. When sent to industrial composting, the complete package decays entirely without leaving microplastics or toxic residues.
            </p>

            <img 
              src="/imgs/topics/compostable-spouted-pouches-alt.png" 
              alt="High barrier compostable spouted pouch layers" 
              className="w-full h-80 object-cover border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] my-8"
            />

            <h3 className="text-2xl font-['Space_Grotesk'] font-black uppercase text-black mt-12 mb-4">Robust Liquid Integrity</h3>
            <p>
              We know that an eco-friendly pouch is useless if it leaks or spoils your product. Our spouted bags feature:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>**High Heat-Seal Strength:** Withstands pasteurization temperatures up to 105°C for baby foods and fresh purees.</li>
              <li>**MOCON-Tested Barrier:** Oxygen and water vapor transmission rates are maintained under 0.2cc/m²/day to guarantee a shelf-life of 12-18 months.</li>
              <li>**Weld-Seam Durability:** The connection between the rigid spout flange and the flexible film is structurally welded to prevent leakage under high compression.</li>
            </ul>

            <h3 className="text-2xl font-['Space_Grotesk'] font-black uppercase text-black mt-12 mb-4">No Contaminants. 100% Safe.</h3>
            <p>
              Our structures are completely free of BPA, heavy metals, and persistent PFAS "forever chemicals". They meet all BPI, EN 13432, and ASTM D6400 organic standards, offering a completely circular and food-safe choice for premium sustainable brands.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-gray-50 border-b-4 border-black">
        <div className="max-w-4xl mx-auto px-4 md:px-6">
          <h2 className="text-4xl md:text-5xl font-['Space_Grotesk'] font-black uppercase mb-12 text-center">
            TECHNICAL <span className="text-[#059669]">Q&A</span>
          </h2>

          <div className="space-y-6">
            {[
              {
                q: 'Are these spouted bags fully food-safe and hot-fillable?',
                a: 'Yes. Our inner sealing polymers consist of heat-stabilized bio-resins that withstand standard filling temperatures up to 105°C, ensuring full food safety for purees, drinks, and warm liquids.'
              },
              {
                q: 'Is the rigid plastic spout completely compostable?',
                a: 'Absolutely. We do not use greenwashed plastic spouts. Our rigid spout and cap fittings are injection-molded from verified starch-based bio-resins that break down completely alongside the pouch body.'
              },
              {
                q: 'What is the oxygen transmission barrier of the EVOH layer?',
                a: 'Our organic EVOH barrier matches traditional plastic performance, achieving an OTR of <0.2cc/m²/day, ensuring fresh shelf integrity for 12 to 18 months.'
              }
            ].map((faq, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-6 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
              >
                <h3 className="font-['Space_Grotesk'] font-black text-lg uppercase mb-3 flex items-start gap-3">
                  <span className="text-[#059669] flex-shrink-0">Q:</span>
                  {faq.q}
                </h3>
                <p className="font-['JetBrains_Mono'] text-sm text-gray-700 pl-8">
                  <span className="font-bold text-[#059669]">A:</span> {faq.a}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-[#059669] text-white border-t-4 border-black">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-10">
          <h2 className="font-black text-5xl md:text-7xl uppercase text-white">Switch to Circular Spouts</h2>
          <p className="font-['JetBrains_Mono'] font-bold text-xl text-white/95">
            Durable, leak-proof, plant-based spouted pouches that satisfy customers and protect our planet.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
            <NeoButton href="https://calendly.com/30-min-free-packaging-consultancy" variant="primary" className="!bg-[#D4FF00] !text-black w-full sm:w-auto text-xl py-4">
              Request Pouch Samples <ArrowRight className="inline-block ml-2 w-6 h-6" />
            </NeoButton>
          </div>
        </div>
      </section>
    </PouchLayout>
  )
}
