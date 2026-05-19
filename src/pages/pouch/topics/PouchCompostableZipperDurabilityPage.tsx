import React from 'react'
import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { Recycle, CheckCircle, AlertTriangle, ArrowRight, Shield, Zap, Leaf, Thermometer, Sparkles } from 'lucide-react'
import PouchLayout from '../../../components/pouch/PouchLayout'
import { NeoButton, NeoCard, NeoBadge } from '../../../components/pouch/PouchUI'

export default function PouchCompostableZipperDurabilityPage() {
  const floatAnim = {
    y: [0, -10, 0],
    transition: { duration: 2, repeat: Infinity, ease: "easeInOut" }
  }

  const title = "Why Compostable Zippers Break & How We Solved It | POUCH.ECO"
  const description = "Sick of flimsy eco-friendly closures? Discover the material science behind compostable zipper failures and how co-extruded bio-resins and ultrasonic welding prevent breakage."

  return (
    <PouchLayout>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href="https://pouch.eco/topics/compostable-zipper-durability" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative pt-12 pb-24 border-b-4 border-black bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:20px_20px]">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 z-10">
              <div className="inline-block bg-[#059669] text-white border-4 border-black px-4 py-2 transform -rotate-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <span className="font-['JetBrains_Mono'] font-bold text-sm">TECH_SPECS: HIGH_STRENGTH_BIO_ZIP</span>
              </div>
              
              <h1 className="font-black text-5xl md:text-7xl leading-[0.9] tracking-tighter uppercase">
                Zero Breaks.<br/>
                Zero <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#059669] to-[#D4FF00] drop-shadow-[4px_4px_0px_rgba(0,0,0,1)]">Microplastics.</span>
              </h1>

              <p className="font-['JetBrains_Mono'] font-bold text-lg md:text-xl max-w-md bg-white border-2 border-black p-4 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] text-black">
                &gt; Broken zippers = Stale coffee.<br/>
                &gt; Cheap glue = Delamination.<br/>
                &gt; Co-extruded ultrasonic welding is here.
              </p>
            </div>

            <div className="relative">
              <NeoCard className="bg-[#D4FF00] relative z-10 rotate-2 !p-0 overflow-hidden group border-4 border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
                <div className="aspect-square relative overflow-hidden">
                    <img 
                      src="/imgs/illustrated/compostable-zipper-detail.png" 
                      alt="Kraft compostable pouch with double lock zipper" 
                      className="w-full h-full object-cover group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500"
                    />
                  <motion.div animate={floatAnim} className="absolute top-4 right-4 bg-white border-2 border-black px-2 py-1 font-['JetBrains_Mono'] text-xs font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] z-20">
                    15N_TENSILE_WELD
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
            The Physics of <span className="text-[#059669]">True Zipper Durability</span>
          </h2>
          
          <div className="prose prose-lg max-w-none font-['JetBrains_Mono'] text-gray-700 space-y-6">
            <p>
              One of the most persistent complaints from consumers switching to green packaging is that **compostable zippers break**. They delaminate, peel away from the paper, or tear completely when opened for the first time. Why does this happen? The answer lies in thermodynamics.
            </p>

            <h3 className="text-2xl font-['Space_Grotesk'] font-black uppercase text-black mt-12 mb-4">The Danger of Narrow Heat Windows</h3>
            <p>
              Traditional plastic zippers are extremely forgiving. You can heat seal them at a wide range of temperatures. However, compostable bio-polymers like PLA and PBS have an incredibly narrow thermal sealing window (115°C - 130°C). 
            </p>
            <p>
              If a packaging line runs even slightly too hot, the bio-polymer structures weaken, making the zipper brittle and prone to failure. If it is too cool, the adhesive bond fails, leading to delamination under tension.
            </p>

            <img 
              src="/imgs/illustrated/zipper-seal-durability.png" 
              alt="Tensile strength and weld verification testing in packaging lab" 
              className="w-full h-80 object-cover border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] my-8"
            />

            <h3 className="text-2xl font-['Space_Grotesk'] font-black uppercase text-black mt-12 mb-4">Co-Extrusion and Ultrasonic Welding</h3>
            <p>
              At POUCH.ECO, we refuse to accept flimsy compromises. We co-extrude our zippers using multiple distinct bio-resin layers. The outer layer is formulated to fuse permanently to the bag lining at low temperatures, while the inner double-lock core retains maximum molecular elasticity.
            </p>
            <p>
              We then utilize **Ultrasonic Welding** instead of conduction heat. High-frequency acoustic vibrations generate friction heat only at the contact interface, fusing the parts together in milliseconds. This creates a secure, molecular bond that easily handles over 15N/cm of tensile force without micro-fracturing.
            </p>

            <h3 className="text-2xl font-['Space_Grotesk'] font-black uppercase text-black mt-12 mb-4">No Greenwashing, Full Certification</h3>
            <p>
              Because our zippers, coffee degassing valves, and lamination resins share the exact same biodegradable polymer formulation, they break down together naturally in industrial and home composting conditions. Our bags are certified **TUV Austria OK Compost Home** and comply fully with EN 13432 and ASTM D6400 standards.
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
                q: 'Why do compostable zippers feel more brittle than plastic ones?',
                a: 'Traditional packaging conduction heaters overheat the delicate molecular chain of biodegradable polymers. POUCH.ECO solves this using co-extrusion and ultrasonic welding, which creates a flexible double-lock snap profile.'
              },
              {
                q: 'What is the pull-strength rating of your resealable closures?',
                a: 'Our closures undergo rigorous scientific testing and hold a pull-strength rating exceeding 15N/cm, matching oil-based plastic performance and preventing accidental delamination.'
              },
              {
                q: 'Do I have to worry about zipper microplastics in compost?',
                a: 'No. Our entire pouch is 100% compostable. The zipper, the degassing valve, and the adhesives decompose entirely into organic matter within 180 days, leaving zero toxins behind.'
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
          <h2 className="font-black text-5xl md:text-7xl uppercase text-white">Get High-Strength Closures</h2>
          <p className="font-['JetBrains_Mono'] font-bold text-xl text-white/95">
            Durable, co-extruded zippers that satisfy customers and save the planet.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
            <NeoButton href="https://calendly.com/30-min-free-packaging-consultancy" variant="primary" className="!bg-[#D4FF00] !text-black w-full sm:w-auto text-xl py-4">
              Order Custom Samples <ArrowRight className="inline-block ml-2 w-6 h-6" />
            </NeoButton>
          </div>
        </div>
      </section>
    </PouchLayout>
  )
}
