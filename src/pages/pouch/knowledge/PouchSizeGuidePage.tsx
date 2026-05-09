import React from 'react'
import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { Maximize, CheckCircle, ArrowRight, Ruler, Scale } from 'lucide-react'
import PouchLayout from '../../../components/pouch/PouchLayout'
import { NeoButton, NeoCard } from '../../../components/pouch/PouchUI'

export default function PouchSizeGuidePage() {
  const title = "Pouch Size Guide | Dimensions & Volume | POUCH.ECO"
  const description = "The ultimate guide to sizing flexible packaging. Learn how to measure stand-up pouches, calculate volume for different products, and choose the perfect dimensions."

  return (
    <PouchLayout>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href="https://pouch.eco/knowledge/size-guide" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative pt-12 pb-24 border-b-4 border-black bg-cyan-400">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 z-10">
              <div className="inline-block bg-white text-black border-4 border-black px-4 py-2 transform -rotate-1 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <span className="font-['JetBrains_Mono'] font-bold text-sm tracking-wider">KNOWLEDGE_BASE // SIZING</span>
              </div>
              
              <h1 className="font-black text-6xl md:text-8xl leading-[0.9] tracking-tighter uppercase text-black drop-shadow-[4px_4px_0px_rgba(255,255,255,1)]">
                Measure <span className="text-white drop-shadow-[4px_4px_0px_rgba(0,0,0,1)]">Twice.</span>
              </h1>

              <p className="font-['JetBrains_Mono'] font-bold text-lg md:text-xl max-w-md bg-black border-2 border-white p-4 shadow-[8px_8px_0px_0px_rgba(255,255,255,1)] text-white">
                Stop guessing. Learn exactly how to measure pouch dimensions, understand gusset depth, and calculate the right volume for your specific product density.
              </p>
            </div>

            <div className="relative">
              <NeoCard className="bg-white relative z-10 rotate-2 !p-0 overflow-hidden group border-4 border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
                <div className="aspect-square relative overflow-hidden flex items-center justify-center bg-gray-100 p-8">
                  <div className="relative w-3/4 h-3/4 border-4 border-black bg-white shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] flex flex-col items-center justify-center">
                     <div className="absolute -top-6 left-1/2 -translate-x-1/2 font-['JetBrains_Mono'] font-bold flex items-center gap-2">
                        <span className="text-xs">&larr;</span> Width (W) <span className="text-xs">&rarr;</span>
                     </div>
                     <div className="absolute top-1/2 -left-20 -translate-y-1/2 -rotate-90 font-['JetBrains_Mono'] font-bold flex items-center gap-2 whitespace-nowrap">
                        <span className="text-xs">&larr;</span> Height (H) <span className="text-xs">&rarr;</span>
                     </div>
                     <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 font-['JetBrains_Mono'] font-bold flex items-center gap-2">
                        <span className="text-xs">&larr;</span> Gusset (G) <span className="text-xs">&rarr;</span>
                     </div>
                     <Ruler className="w-16 h-16 opacity-50" />
                  </div>
                  <div className="absolute top-4 right-4 bg-[#D4FF00] border-2 border-black px-3 py-1 font-['JetBrains_Mono'] font-bold text-sm shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                    DIMENSIONS
                  </div>
                </div>
              </NeoCard>
              <div className="absolute top-10 -right-10 w-full h-full border-4 border-black bg-black -z-0 -rotate-3" />
            </div>
          </div>
        </div>
      </section>

      {/* Deep Dive SEO Content */}
      <section className="py-24 bg-white border-b-4 border-black">
        <div className="max-w-4xl mx-auto px-4 md:px-6">
          <h2 className="text-4xl md:text-5xl font-['Space_Grotesk'] font-black uppercase mb-8">
            How to Size <span className="text-cyan-500">Flexible Pouches</span>
          </h2>
          
          <div className="prose prose-lg max-w-none font-['JetBrains_Mono'] text-gray-700 space-y-6">
            <p>
              Choosing the right size for your custom pouch is one of the most critical steps in the packaging process. A bag that is too small will look over-stuffed, risk zipper failure, and be difficult to fill. A bag that is too large wastes material, looks unappealing to consumers, and wastes valuable retail shelf space. Because flexible packaging expands dynamically when filled, measuring them is different from measuring rigid boxes.
            </p>

            <h3 className="text-2xl font-['Space_Grotesk'] font-black uppercase text-black mt-12 mb-4">The Standard Measurement Formula</h3>
            <p>
              In the flexible packaging industry, dimensions are universally written as: <strong>Width (W) x Height (H) + Gusset (G)</strong>.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-black">
              <li><strong>Width:</strong> Measured straight across the pouch from the outside edge of the left seal to the outside edge of the right seal.</li>
              <li><strong>Height:</strong> Measured straight down from the very top edge of the pouch to the very bottom edge.</li>
              <li><strong>Bottom Gusset:</strong> This is the depth of the pouch. Stand-up pouches utilize a "U-shape" or "K-seal" gusset that unfolds. The measurement provided is typically the *total expanded depth* across the bottom. (Sometimes written as BG).</li>
            </ul>

            <div className="bg-gray-100 p-6 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] my-8">
               <h4 className="font-['Space_Grotesk'] font-black text-xl mb-2">Example: 130mm x 200mm + 80mm</h4>
               <p className="text-sm m-0">This describes a Stand-Up Pouch that is 130mm wide, 200mm tall, and has a bottom gusset that opens up to 80mm deep.</p>
            </div>

            <h3 className="text-2xl font-['Space_Grotesk'] font-black uppercase text-black mt-12 mb-4">The Impact of Product Density</h3>
            <p>
              Why can't you just say "I need a 1lb bag"? Because 1lb of densely packed whey protein powder takes up drastically less space than 1lb of light, airy popcorn. When determining your pouch size, you must consider the <strong>bulk density</strong> of your specific product. 
            </p>
            <p>
              To determine the correct size without guesswork, we highly recommend utilizing our volume testing protocol. The easiest method is to take an existing bag that fits your product well, measure it flat, and provide those dimensions to our engineers. Alternatively, you can measure the total volume (in milliliters or cubic inches) of your product, and we will calculate the corresponding pouch dimensions required to hold it comfortably while leaving enough "headspace" to safely seal the top.
            </p>

            <h3 className="text-2xl font-['Space_Grotesk'] font-black uppercase text-black mt-12 mb-4">Internal vs. External Dimensions</h3>
            <p>
              Always remember that the dimensions provided on technical dielines are <strong>External Dimensions (OD - Outside Dimensions)</strong>. However, the usable space inside the bag (Internal Dimensions - ID) is smaller. You must subtract the width of the side seals (typically 5mm to 10mm per side), the bottom seal, and the space above the zipper (often 30mm to 40mm) to calculate the actual fillable volume.
            </p>

            <h3 className="text-2xl font-['Space_Grotesk'] font-black uppercase text-black mt-12 mb-4">Standard Coffee & Tea Sizes</h3>
            <p>
              For coffee roasters, the industry has largely standardized pouch sizes based on roasted whole bean volume. While custom sizes are always available, utilizing standard tooling dimensions can save setup costs:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-black">
              <li><strong>8 oz (250g):</strong> Typically ~ 130mm (W) x 200mm (H) + 80mm (G)</li>
              <li><strong>12 oz (340g):</strong> Typically ~ 160mm (W) x 230mm (H) + 90mm (G) - <em>The US Specialty Standard</em></li>
              <li><strong>16 oz / 1 lb (454g):</strong> Typically ~ 170mm (W) x 270mm (H) + 90mm (G)</li>
              <li><strong>2.2 lb (1kg):</strong> Typically ~ 220mm (W) x 330mm (H) + 110mm (G)</li>
            </ul>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-gray-50 border-b-4 border-black">
        <div className="max-w-4xl mx-auto px-4 md:px-6">
          <h2 className="text-4xl md:text-5xl font-['Space_Grotesk'] font-black uppercase mb-12 text-center">
            Sizing <span className="text-cyan-500">FAQ</span>
          </h2>

          <div className="space-y-6">
            {[
              {
                q: 'Do you measure in inches or millimeters?',
                a: 'Because global packaging manufacturing requires extreme precision, we almost universally use the metric system (millimeters/mm). If you provide dimensions in inches, we will convert them to the nearest millimeter for the engineering dieline.'
              },
              {
                q: 'What is "headspace" and why do I need it?',
                a: 'Headspace is the empty room left at the top of the pouch above your product. You need sufficient headspace (typically 1 to 2 inches) to allow your sealing machine jaws to clamp and heat-seal the top of the bag without crushing or melting your product.'
              },
              {
                q: 'How do I know if my product will fit?',
                a: 'The safest method is to request physical unprinted sample pouches in various sizes. You can physically fill them with your product to test the volume, check the headspace, and see exactly how the filled bag will look on a shelf.'
              },
              {
                q: 'Does a Flat Bottom bag hold more than a Stand-Up Pouch?',
                a: 'Generally, yes. Given the exact same external width and height, a Flat Bottom bag will hold slightly more volume because its side gussets allow the entire body of the bag to expand into a uniform box shape, whereas a Stand-Up pouch tapers toward the top.'
              },
              {
                q: 'Can I order a completely custom size?',
                a: 'Yes. Since our pouches are manufactured to order, you are not restricted to "stock" sizes. We can engineer a custom size (e.g., 147mm x 212mm) to fit your product perfectly.'
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
                  <span className="text-cyan-500 flex-shrink-0">Q:</span>
                  {faq.q}
                </h3>
                <p className="font-['JetBrains_Mono'] text-sm text-gray-700 pl-8">
                  <span className="font-bold text-cyan-500">A:</span> {faq.a}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-black text-white">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-10">
          <h2 className="font-black text-5xl md:text-7xl uppercase">Test the Fit</h2>
          <p className="font-['JetBrains_Mono'] font-bold text-xl text-gray-300">
            Don't guess on dimensions. Request our free sizing sample kit to test with your actual product.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
            <NeoButton href="/free-service" variant="primary" className="!bg-[#D4FF00] !text-black w-full sm:w-auto text-xl py-4">
              Request Free Samples <ArrowRight className="inline-block ml-2 w-6 h-6" />
            </NeoButton>
          </div>
        </div>
      </section>
    </PouchLayout>
  )
}
