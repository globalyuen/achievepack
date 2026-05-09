import React from 'react'
import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { CheckCircle, ArrowRight, Printer, PenTool, Truck, PackageCheck, Zap } from 'lucide-react'
import PouchLayout from '../../../components/pouch/PouchLayout'
import { NeoButton, NeoCard } from '../../../components/pouch/PouchUI'

export default function PouchWorkflowPage() {
  const title = "Packaging Production Workflow | From Design to Delivery | POUCH.ECO"
  const description = "Understand the complete custom pouch manufacturing workflow. Learn what happens during pre-press, printing, laminating, pouch-making, and shipping."

  return (
    <PouchLayout>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href="https://pouch.eco/knowledge/workflow" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative pt-12 pb-24 border-b-4 border-black bg-yellow-400">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 z-10">
              <div className="inline-block bg-black text-white border-4 border-black px-4 py-2 transform -rotate-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <span className="font-['JetBrains_Mono'] font-bold text-sm tracking-wider">KNOWLEDGE_BASE // WORKFLOW</span>
              </div>
              
              <h1 className="font-black text-6xl md:text-8xl leading-[0.9] tracking-tighter uppercase text-black drop-shadow-[4px_4px_0px_rgba(255,255,255,1)]">
                Behind the <span className="text-white drop-shadow-[4px_4px_0px_rgba(0,0,0,1)]">Scenes.</span>
              </h1>

              <p className="font-['JetBrains_Mono'] font-bold text-lg md:text-xl max-w-md bg-white border-2 border-black p-4 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] text-black">
                From a digital PDF to a physical pouch on the retail shelf. Discover the exact 5-step manufacturing workflow we use to create world-class flexible packaging.
              </p>
            </div>

            <div className="relative">
              <NeoCard className="bg-white relative z-10 rotate-3 !p-0 overflow-hidden group border-4 border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
                <div className="aspect-square relative overflow-hidden">
                   <img 
                    src="/imgs/seo-photos/a_printing_machine_running_film_6182312.webp" 
                    alt="High speed printing machine running custom printed film roll" 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 bg-white"
                  />
                  <div className="absolute top-4 left-4 bg-[#D4FF00] border-2 border-black px-3 py-1 font-['Space_Grotesk'] font-bold text-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] text-black">
                    MANUFACTURING
                  </div>
                </div>
              </NeoCard>
              <div className="absolute top-10 -right-10 w-full h-full border-4 border-black bg-black -z-0 -rotate-6" />
            </div>
          </div>
        </div>
      </section>

      {/* Deep Dive SEO Content */}
      <section className="py-24 bg-white border-b-4 border-black">
        <div className="max-w-4xl mx-auto px-4 md:px-6">
          <h2 className="text-4xl md:text-5xl font-['Space_Grotesk'] font-black uppercase mb-12">
            The Flexible Packaging <span className="text-yellow-500">Lifecycle</span>
          </h2>
          
          <div className="space-y-12 font-['JetBrains_Mono'] text-gray-700">
            
            {/* Step 1 */}
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <div className="bg-black text-white p-4 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex-shrink-0 w-full md:w-32 flex flex-col items-center justify-center">
                 <PenTool className="w-10 h-10 mb-2 text-[#D4FF00]" />
                 <span className="font-['Space_Grotesk'] font-black text-xl">STEP 1</span>
              </div>
              <div className="space-y-3">
                 <h3 className="font-['Space_Grotesk'] font-black text-2xl uppercase text-black">Pre-Press & Proofing</h3>
                 <p>Before a single drop of ink touches the film, our pre-press engineering team dissects your Adobe Illustrator artwork. We check for correct CMYK color modes, barcode scannability, bleed margins, and text safety zones. For Rotogravure printing, this is also when the metal cylinders are meticulously laser-engraved. Finally, a digital or physical color proof is generated for your final approval.</p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <div className="bg-black text-white p-4 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex-shrink-0 w-full md:w-32 flex flex-col items-center justify-center">
                 <Printer className="w-10 h-10 mb-2 text-pink-400" />
                 <span className="font-['Space_Grotesk'] font-black text-xl">STEP 2</span>
              </div>
              <div className="space-y-3">
                 <h3 className="font-['Space_Grotesk'] font-black text-2xl uppercase text-black">Printing the Master Roll</h3>
                 <p>Your artwork is printed onto a massive master roll of the outermost film layer (typically PET or BOPP). If using our HP Indigo digital press, the file is sent directly to the machine. If using Rotogravure, the film is pulled through the engraved cylinders at high speed. This process runs in reverse—meaning the ink is actually printed on the <em>inside</em> of the outer layer so it cannot be scratched off (reverse printing).</p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <div className="bg-black text-white p-4 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex-shrink-0 w-full md:w-32 flex flex-col items-center justify-center">
                 <Layers className="w-10 h-10 mb-2 text-cyan-400" />
                 <span className="font-['Space_Grotesk'] font-black text-xl">STEP 3</span>
              </div>
              <div className="space-y-3">
                 <h3 className="font-['Space_Grotesk'] font-black text-2xl uppercase text-black">Lamination</h3>
                 <p>A flexible pouch is never just one layer of plastic. During lamination, the printed outer roll is bonded together with the inner barrier layers (like Aluminum foil or VMPET) and the food-safe inner sealant layer (like PE or CPP). We utilize advanced solventless lamination to ensure maximum bond strength without any residual chemical odor. The combined roll is then allowed to "cure" in a heated room to solidify the adhesive.</p>
              </div>
            </div>

            {/* Step 4 */}
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <div className="bg-black text-white p-4 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex-shrink-0 w-full md:w-32 flex flex-col items-center justify-center">
                 <Zap className="w-10 h-10 mb-2 text-orange-400" />
                 <span className="font-['Space_Grotesk'] font-black text-xl">STEP 4</span>
              </div>
              <div className="space-y-3">
                 <h3 className="font-['Space_Grotesk'] font-black text-2xl uppercase text-black">Pouch Making & Add-ons</h3>
                 <p>The giant, laminated master roll is fed into a pouch-making machine. This complex piece of engineering folds the flat film, inserts the bottom/side gussets, punches the hang holes, and applies the zippers or degassing valves. Finally, heavy-duty heated jaws clamp down to create the permanent 5mm-10mm perimeter seals, cutting individual pouches from the continuous roll.</p>
              </div>
            </div>

            {/* Step 5 */}
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <div className="bg-black text-white p-4 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex-shrink-0 w-full md:w-32 flex flex-col items-center justify-center">
                 <Truck className="w-10 h-10 mb-2 text-[#D4FF00]" />
                 <span className="font-['Space_Grotesk'] font-black text-xl">STEP 5</span>
              </div>
              <div className="space-y-3">
                 <h3 className="font-['Space_Grotesk'] font-black text-2xl uppercase text-black">QC, Packing & Shipping</h3>
                 <p>Before leaving our facility, random samples from the production run undergo rigorous Quality Control (QC). We test the seal strength via pressure chambers, check the zipper functionality, and verify the colors against the master proof. Once approved, the empty pouches are packed into heavy-duty corrugated cartons lined with moisture-barrier bags and shipped directly to your co-packer or roasting facility.</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-gray-50 border-b-4 border-black">
        <div className="max-w-4xl mx-auto px-4 md:px-6">
          <h2 className="text-4xl md:text-5xl font-['Space_Grotesk'] font-black uppercase mb-12 text-center">
            Workflow <span className="text-yellow-500">FAQ</span>
          </h2>

          <div className="space-y-6">
            {[
              {
                q: 'How long does this entire process take?',
                a: 'If you choose HP Indigo Digital Printing, the entire workflow from proof approval to shipping out the door takes roughly 10-15 business days. Rotogravure printing takes slightly longer (20-30 days) due to the cylinder engraving and curing processes.'
              },
              {
                q: 'What is "Curing" and why does it take time?',
                a: 'After the multiple layers of film are glued together during Lamination, the adhesive requires time to dry and bond completely. If we try to make pouches before the lamination is fully cured, the layers will peel apart (delamination). Curing typically takes 48-72 hours in a temperature-controlled room.'
              },
              {
                q: 'Can I just buy the printed roll instead of finished pouches?',
                a: 'Absolutely. This is called "Rollstock." If you own a Form-Fill-Seal (FFS) machine, we will complete Steps 1 through 3, and then ship you the laminated, printed rolls so your machine can form and fill the pouches simultaneously.'
              },
              {
                q: 'Why do my printed colors look different from my computer screen?',
                a: 'Computer monitors emit light in RGB, which makes colors look extremely vibrant. Printing uses physical CMYK inks on a material substrate. We highly recommend requesting a physical proof or referring to an official Pantone book to see exactly how your color will print in the real world.'
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
                  <span className="text-yellow-500 flex-shrink-0">Q:</span>
                  {faq.q}
                </h3>
                <p className="font-['JetBrains_Mono'] text-sm text-gray-700 pl-8">
                  <span className="font-bold text-yellow-500">A:</span> {faq.a}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-black text-white">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-10">
          <h2 className="font-black text-5xl md:text-7xl uppercase">Start the Process</h2>
          <p className="font-['JetBrains_Mono'] font-bold text-xl text-gray-300">
            Submit your dieline and let our engineers handle the rest. Get a quote to start your production workflow.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
            <NeoButton href="/quote" variant="primary" className="!bg-[#D4FF00] !text-black w-full sm:w-auto text-xl py-4">
              Get Production Quote <ArrowRight className="inline-block ml-2 w-6 h-6" />
            </NeoButton>
          </div>
        </div>
      </section>
    </PouchLayout>
  )
}
