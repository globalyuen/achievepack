import React from 'react'
import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { Ruler, Maximize2, Package, CheckCircle, ArrowRight } from 'lucide-react'
import PouchLayout from '../../../components/pouch/PouchLayout'
import { NeoButton, NeoCard } from '../../../components/pouch/PouchUI'
import SortableSizesTable, { STAND_UP_SIZES, FLAT_BOTTOM_SIZES } from '../../../components/SortableSizesTable'

export default function PouchPouchSizingPage() {
  const title = "Standard Pouch Sizes Chart | Stand-Up & Flat Bottom | POUCH.ECO"
  const description = "Comprehensive standard sizing charts for stand-up pouches and flat bottom bags. Compare dimensions in mm, volume in grams, and find the perfect tooling size."

  return (
    <PouchLayout>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href="https://pouch.eco/knowledge/pouch-sizing" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative pt-12 pb-24 border-b-4 border-black bg-[#D4FF00]">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 z-10">
              <div className="inline-block bg-black text-white border-4 border-black px-4 py-2 transform rotate-1 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <span className="font-['JetBrains_Mono'] font-bold text-sm tracking-wider">KNOWLEDGE_BASE // STANDARD_SIZES</span>
              </div>
              
              <h1 className="font-black text-6xl md:text-8xl leading-[0.9] tracking-tighter uppercase text-black drop-shadow-[4px_4px_0px_rgba(255,255,255,1)]">
                The Size <span className="text-white drop-shadow-[4px_4px_0px_rgba(0,0,0,1)]">Matrix.</span>
              </h1>

              <p className="font-['JetBrains_Mono'] font-bold text-lg md:text-xl max-w-md bg-white border-2 border-black p-4 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] text-black">
                Save time and money by utilizing our standard tooling. Browse comprehensive sizing charts for both Stand-Up Pouches and Flat Bottom Bags.
              </p>
            </div>

            <div className="relative">
              <NeoCard className="bg-white relative z-10 -rotate-2 !p-0 overflow-hidden group border-4 border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
                <div className="aspect-square relative overflow-hidden flex items-center justify-center bg-gray-100 p-8">
                   <img 
                    src="/imgs/seo-photos/a_size_reference_dimensions_7506199.webp" 
                    alt="Various pouch sizes lined up for volume comparison" 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 bg-white"
                  />
                  <div className="absolute bottom-4 left-4 bg-black text-white border-2 border-black px-3 py-1 font-['Space_Grotesk'] font-bold text-lg shadow-[4px_4px_0px_0px_rgba(255,255,255,1)]">
                    VOLUME = W × H + G
                  </div>
                </div>
              </NeoCard>
              <div className="absolute top-10 -right-10 w-full h-full border-4 border-black bg-black -z-0 rotate-3" />
            </div>
          </div>
        </div>
      </section>

      {/* Deep Dive SEO Content & Tables */}
      <section className="py-24 bg-white border-b-4 border-black">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-12">
              <div>
                 <h2 className="text-3xl md:text-4xl font-['Space_Grotesk'] font-black uppercase mb-6">
                   Stand-Up Pouch <span className="text-[#10b981]">Standard Sizes</span>
                 </h2>
                 <p className="font-['JetBrains_Mono'] text-gray-700 mb-6">
                   Stand-up pouches (Doypacks) are the most popular flexible packaging format globally. They feature a bottom gusset that expands to hold volume and stand upright. The sizes below represent our most common tooling, allowing for faster turnaround times and no custom die fees.
                 </p>
                 <div className="border-4 border-black overflow-hidden bg-white shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-4">
                   <SortableSizesTable sizes={STAND_UP_SIZES} title="Stand-Up Pouch Dimensions" />
                 </div>
              </div>

              <div>
                 <h2 className="text-3xl md:text-4xl font-['Space_Grotesk'] font-black uppercase mb-6">
                   Flat Bottom Bag <span className="text-purple-500">Standard Sizes</span>
                 </h2>
                 <p className="font-['JetBrains_Mono'] text-gray-700 mb-6">
                   Flat Bottom Bags (Box Pouches) offer five printable panels and exceptional shelf stability. Because of their square base and side gussets, they often hold slightly more volume than a stand-up pouch of identical height and width.
                 </p>
                 <div className="border-4 border-black overflow-hidden bg-white shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-4">
                   <SortableSizesTable sizes={FLAT_BOTTOM_SIZES} title="Flat Bottom Bag Dimensions" categoryColor="purple" />
                 </div>
              </div>
            </div>

            <div className="space-y-8">
               <NeoCard className="bg-[#D4FF00] border-4 border-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                 <h3 className="font-['Space_Grotesk'] font-black text-2xl uppercase mb-4">Why Use Standard Sizes?</h3>
                 <ul className="font-['JetBrains_Mono'] text-sm space-y-4 text-black">
                   <li className="flex items-start gap-2">
                     <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                     <span><strong>Zero Die Fees:</strong> We already own the tooling cutters for these sizes, saving you hundreds of dollars in setup costs.</span>
                   </li>
                   <li className="flex items-start gap-2">
                     <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                     <span><strong>Faster Production:</strong> Standard sizes move through our machine queues faster than custom calibrations.</span>
                   </li>
                   <li className="flex items-start gap-2">
                     <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                     <span><strong>Retail Consistency:</strong> These sizes fit perfectly on standard retail shelving and pegboards.</span>
                   </li>
                 </ul>
               </NeoCard>

               <div className="bg-black text-white p-6 border-4 border-black">
                 <h3 className="font-['Space_Grotesk'] font-black text-xl uppercase mb-2">Need a Custom Size?</h3>
                 <p className="font-['JetBrains_Mono'] text-sm text-gray-300 mb-4">
                   Not a problem. We can manufacture pouches to your exact millimeter specifications. A one-time custom tooling fee will apply.
                 </p>
                 <NeoButton href="/quote" variant="secondary" className="w-full justify-center !bg-white !text-black hover:!bg-gray-200">
                   Request Custom Quote
                 </NeoButton>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-gray-50 border-b-4 border-black">
        <div className="max-w-4xl mx-auto px-4 md:px-6">
          <h2 className="text-4xl md:text-5xl font-['Space_Grotesk'] font-black uppercase mb-12 text-center">
            Pouch Sizing <span className="text-[#10b981]">FAQ</span>
          </h2>

          <div className="space-y-6">
            {[
              {
                q: 'What do the measurements W x H + G mean?',
                a: 'Width (W) is measured across the pouch left to right. Height (H) is measured top to bottom. Gusset (G) is the depth. For stand-up pouches, it is the bottom gusset. For flat bottom bags, it refers to the side gussets.'
              },
              {
                q: 'Are the measurements internal or external?',
                a: 'All manufacturing dimensions provided on our site and dielines are External Dimensions (Outside Dimensions / OD). You must account for the seal margins (usually 5-10mm per side) when calculating internal volume.'
              },
              {
                q: 'How accurate is the volume/weight estimation?',
                a: 'The estimations (e.g., "Holds 250g") are based on standard roasted coffee beans. If your product is very dense (like salt) it will hold much more weight. If your product is very light (like popcorn), it will hold much less weight. Always request physical samples to test.'
              },
              {
                q: 'Can I change the size of the window on a standard pouch?',
                a: 'Yes! The clear window is printed into the design, it does not require a physical cut in the bag. Therefore, you can have any shape or size of window on any of our standard pouch sizes.'
              },
              {
                q: 'If I order a custom size, do I pay the die fee every time?',
                a: 'No. The custom die fee is a one-time charge. We keep your custom cutter on file for all your future reorders.'
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
                  <span className="text-black flex-shrink-0">Q:</span>
                  {faq.q}
                </h3>
                <p className="font-['JetBrains_Mono'] text-sm text-gray-700 pl-8">
                  <span className="font-bold text-black">A:</span> {faq.a}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-black text-white border-t-4 border-black">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-10">
          <h2 className="font-black text-5xl md:text-7xl uppercase">Find Your Fit</h2>
          <p className="font-['JetBrains_Mono'] font-bold text-xl text-gray-300">
            Let us send you a free sample pack containing our standard sizes so you can test your product volume in real life.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
            <NeoButton href="/free-service" variant="primary" className="!bg-[#D4FF00] !text-black w-full sm:w-auto text-xl py-4">
              Get Size Samples <ArrowRight className="inline-block ml-2 w-6 h-6" />
            </NeoButton>
          </div>
        </div>
      </section>
    </PouchLayout>
  )
}
