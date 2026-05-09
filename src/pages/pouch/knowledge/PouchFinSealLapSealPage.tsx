import React from 'react'
import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { CheckCircle, ArrowRight, Layers, Box, AlertCircle } from 'lucide-react'
import PouchLayout from '../../../components/pouch/PouchLayout'
import { NeoButton, NeoCard } from '../../../components/pouch/PouchUI'

export default function PouchFinSealLapSealPage() {
  const title = "Fin Seal vs. Lap Seal | Back Seal Types | POUCH.ECO"
  const description = "Understand the structural differences between Fin Seals and Lap Seals on flexible pouches. Learn which back seal method is best for your custom packaging."

  return (
    <PouchLayout>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href="https://pouch.eco/knowledge/fin-seal-lap-seal" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative pt-12 pb-24 border-b-4 border-black bg-red-400">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 z-10">
              <div className="inline-block bg-white text-black border-4 border-black px-4 py-2 transform -rotate-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <span className="font-['JetBrains_Mono'] font-bold text-sm tracking-wider">KNOWLEDGE_BASE // SEALS</span>
              </div>
              
              <h1 className="font-black text-6xl md:text-8xl leading-[0.9] tracking-tighter uppercase text-black drop-shadow-[4px_4px_0px_rgba(255,255,255,1)]">
                Seal the <span className="text-white drop-shadow-[4px_4px_0px_rgba(0,0,0,1)]">Deal.</span>
              </h1>

              <p className="font-['JetBrains_Mono'] font-bold text-lg md:text-xl max-w-md bg-black border-2 border-white p-4 shadow-[8px_8px_0px_0px_rgba(255,255,255,1)] text-white">
                Learn the critical differences between a Fin Seal and a Lap Seal. Understand how the back of your pouch is formed and why it matters for your product's safety.
              </p>
            </div>

            <div className="relative">
              <NeoCard className="bg-white relative z-10 rotate-3 !p-0 overflow-hidden group border-4 border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
                <div className="aspect-square relative overflow-hidden bg-gray-100 flex items-center justify-center p-8">
                   <div className="grid grid-rows-2 gap-6 w-full h-full">
                      <div className="border-4 border-black bg-white flex flex-col items-center justify-center p-4">
                         <div className="w-16 h-8 bg-blue-500 rounded-t-full mb-2"></div>
                         <h3 className="font-black font-['Space_Grotesk'] text-xl">FIN SEAL (Inside to Inside)</h3>
                      </div>
                      <div className="border-4 border-black bg-white flex flex-col items-center justify-center p-4">
                         <div className="w-24 h-4 bg-orange-500 mb-2 relative">
                            <div className="absolute -top-2 left-1/2 w-4 h-4 bg-blue-500 z-10"></div>
                         </div>
                         <h3 className="font-black font-['Space_Grotesk'] text-xl">LAP SEAL (Inside to Outside)</h3>
                      </div>
                   </div>
                  <div className="absolute top-4 right-4 bg-black text-white border-2 border-black px-3 py-1 font-['Space_Grotesk'] font-bold text-lg shadow-[4px_4px_0px_0px_rgba(255,255,255,1)]">
                    BACK SEAM TYPES
                  </div>
                </div>
              </NeoCard>
              <div className="absolute top-10 -right-10 w-full h-full border-4 border-black bg-[#D4FF00] -z-0 -rotate-3" />
            </div>
          </div>
        </div>
      </section>

      {/* Deep Dive SEO Content */}
      <section className="py-24 bg-white border-b-4 border-black">
        <div className="max-w-4xl mx-auto px-4 md:px-6">
          <h2 className="text-4xl md:text-5xl font-['Space_Grotesk'] font-black uppercase mb-8">
            Fin Seal vs. <span className="text-red-500">Lap Seal</span>
          </h2>
          
          <div className="prose prose-lg max-w-none font-['JetBrains_Mono'] text-gray-700 space-y-6">
            <p>
              When a flat piece of packaging film is folded over to create a pouch (like a potato chip bag or a coffee bag), the two edges of the film must be joined together running down the back of the package. This is called the "Back Seam" or "Back Seal." There are two primary methods used to create this seal: the Fin Seal and the Lap Seal. 
            </p>
            <p>
              Choosing the wrong type of seal can result in burst bags during shipping, leaked products, and rejected inventory. It all comes down to how the inner and outer layers of your film interact with heat.
            </p>

            <div className="grid md:grid-cols-2 gap-8 my-12">
               <div className="bg-blue-50 border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                  <h3 className="font-['Space_Grotesk'] font-black text-2xl uppercase text-black mb-4">The Fin Seal</h3>
                  <p className="text-sm">
                    A Fin Seal is created by bringing the two inside edges of the film together and sealing them <strong>Inside-to-Inside</strong>. Because the inner layer of the packaging is designed to melt and bond under heat, this creates an extremely strong, air-tight seal. The sealed edges stick out from the back of the bag like a shark's fin (hence the name), though they are usually folded over flat against the bag.
                  </p>
                  <ul className="text-sm space-y-2 mt-4">
                    <li><strong>Strength:</strong> Maximum strength</li>
                    <li><strong>Usage:</strong> Heavy products, gas-flushed bags, liquids</li>
                    <li><strong>Visual:</strong> Creates a thicker seam down the back</li>
                  </ul>
               </div>

               <div className="bg-orange-50 border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                  <h3 className="font-['Space_Grotesk'] font-black text-2xl uppercase text-black mb-4">The Lap Seal</h3>
                  <p className="text-sm">
                    A Lap Seal is created by overlapping the edges of the film so that the inner layer of one edge seals against the outer layer of the other edge (<strong>Inside-to-Outside</strong>). Because you are sealing the meltable inner layer against the non-meltable outer layer, this seal is inherently weaker. It requires the outer film layer to have specific heat-sealable properties.
                  </p>
                  <ul className="text-sm space-y-2 mt-4">
                    <li><strong>Strength:</strong> Weaker</li>
                    <li><strong>Usage:</strong> Light snacks (chips), candy wrappers</li>
                    <li><strong>Visual:</strong> Completely flat, uses less material</li>
                  </ul>
               </div>
            </div>

            <h3 className="text-2xl font-['Space_Grotesk'] font-black uppercase text-black mt-12 mb-4">Why is the Fin Seal the Industry Standard?</h3>
            <p>
              At POUCH.ECO, the vast majority of our Stand-Up Pouches and Flat Bottom bags utilize a <strong>Fin Seal</strong>. 
            </p>
            <p>
              The reason is simple: barrier protection and structural integrity. Most premium flexible packaging utilizes an outer layer made of PET or BOPP (which is heat resistant so it doesn't melt on the sealing jaws) and an inner layer made of PE or CPP (which melts easily to create the seal). If you try to make a Lap Seal with these materials, the PE will not bond properly to the PET, resulting in a weak seam that will burst when squeezed. A Fin Seal guarantees that the PE bonds perfectly with PE, creating an impenetrable weld.
            </p>

            <h3 className="text-2xl font-['Space_Grotesk'] font-black uppercase text-black mt-12 mb-4">When are Lap Seals Used?</h3>
            <p>
              Lap seals are primarily used in high-speed, automated Form-Fill-Seal (VFFS) machines running single-layer or specialized co-extruded films (like a bag of potato chips). The main advantage of a Lap Seal is that it uses slightly less film material (since the edges just overlap instead of pinching together), which saves money when producing tens of millions of bags. For custom, multi-layer laminated pouches, however, the Fin Seal is far superior.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-gray-50 border-b-4 border-black">
        <div className="max-w-4xl mx-auto px-4 md:px-6">
          <h2 className="text-4xl md:text-5xl font-['Space_Grotesk'] font-black uppercase mb-12 text-center">
            Sealing <span className="text-red-500">FAQ</span>
          </h2>

          <div className="space-y-6">
            {[
              {
                q: 'Do I need to choose which seal I want?',
                a: 'Usually, no. Our packaging engineers will automatically dictate a Fin Seal for almost all pre-made Stand-Up and Flat Bottom pouches to ensure maximum structural integrity and barrier performance.'
              },
              {
                q: 'Can you print graphics over a Fin Seal?',
                a: 'Because a Fin Seal creates a physical flap running down the back of the bag (which is then folded over), any graphics that cross that seam will be interrupted. It is best practice to keep important text or barcodes away from the center back seam area in your dieline.'
              },
              {
                q: 'Will a Fin Seal ruin the look of the back of my bag?',
                a: 'No. The fin is typically folded flat and tacked down to one side. It is a standard feature of almost all premium coffee and food packaging and is generally ignored by consumers.'
              },
              {
                q: 'Can a Lap Seal hold liquids?',
                a: 'Generally, no. We strongly advise against using Lap Seals for liquids, purees, or heavy powders as the seam is highly susceptible to bursting under hydraulic pressure. Always use a Fin Seal for these products.'
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
                  <span className="text-red-500 flex-shrink-0">Q:</span>
                  {faq.q}
                </h3>
                <p className="font-['JetBrains_Mono'] text-sm text-gray-700 pl-8">
                  <span className="font-bold text-red-500">A:</span> {faq.a}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-black text-white border-t-4 border-black">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-10">
          <h2 className="font-black text-5xl md:text-7xl uppercase">Trust the Seal</h2>
          <p className="font-['JetBrains_Mono'] font-bold text-xl text-gray-300">
            Don't risk burst bags and ruined product. Our heavy-duty Fin Seals guarantee your product stays fresh and safe.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
            <NeoButton href="/quote" variant="primary" className="!bg-[#D4FF00] !text-black w-full sm:w-auto text-xl py-4">
              Get Your Custom Quote <ArrowRight className="inline-block ml-2 w-6 h-6" />
            </NeoButton>
          </div>
        </div>
      </section>
    </PouchLayout>
  )
}
