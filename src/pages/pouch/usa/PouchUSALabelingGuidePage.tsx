import React from 'react'
import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { CheckCircle, ArrowRight, BookOpen, AlertCircle, FileText } from 'lucide-react'
import PouchLayout from '../../../components/pouch/PouchLayout'
import { NeoButton, NeoCard } from '../../../components/pouch/PouchUI'

export default function PouchUSALabelingGuidePage() {
  const title = "USA Packaging Labeling Guide | FDA & FTC Compliance | POUCH.ECO"
  const description = "Ensure your custom packaging meets US labeling requirements. A comprehensive guide covering FDA Nutrition Facts, UPC barcodes, Prop 65, and FTC environmental claims."

  return (
    <PouchLayout>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href="https://pouch.eco/usa/labeling-guide" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative pt-12 pb-24 border-b-4 border-black bg-blue-500">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 z-10">
              <div className="inline-block bg-white text-black border-4 border-black px-4 py-2 transform rotate-1 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <span className="font-['JetBrains_Mono'] font-bold text-sm tracking-wider">USA_MARKET_HUB // LABELING</span>
              </div>
              
              <h1 className="font-black text-6xl md:text-8xl leading-[0.9] tracking-tighter uppercase text-white drop-shadow-[4px_4px_0px_rgba(0,0,0,1)]">
                Print It.<br/>
                <span className="text-[#D4FF00] drop-shadow-[4px_4px_0px_rgba(0,0,0,1)]">Perfect It.</span>
              </h1>

              <p className="font-['JetBrains_Mono'] font-bold text-lg md:text-xl max-w-md bg-black border-2 border-white p-4 shadow-[8px_8px_0px_0px_rgba(255,255,255,1)] text-white">
                Don't let a labeling violation pull your product off the shelf. Master the essential FDA, FTC, and state-level compliance requirements for flexible packaging in the USA.
              </p>
            </div>

            <div className="relative">
              <NeoCard className="bg-white relative z-10 -rotate-2 !p-0 overflow-hidden group border-4 border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
                <div className="aspect-square relative overflow-hidden flex items-center justify-center bg-gray-100 p-8">
                  <div className="border-4 border-black p-4 bg-white w-full h-full flex flex-col justify-between">
                     <div className="border-b-4 border-black pb-2 mb-2">
                        <h3 className="font-black text-3xl">Nutrition Facts</h3>
                        <p className="font-['JetBrains_Mono'] text-sm">8 servings per container</p>
                     </div>
                     <div className="space-y-2 flex-grow">
                        <div className="flex justify-between border-b-2 border-gray-300 pb-1">
                           <span className="font-bold">Calories</span><span className="font-black text-xl">120</span>
                        </div>
                        <div className="w-full h-24 bg-gray-200 mt-4 flex items-center justify-center">
                           <span className="font-['JetBrains_Mono']">UPC BARCODE AREA</span>
                        </div>
                     </div>
                  </div>
                  <div className="absolute top-4 right-4 bg-[#D4FF00] border-2 border-black px-3 py-1 font-['JetBrains_Mono'] font-bold text-sm shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                    FDA_COMPLIANT
                  </div>
                </div>
              </NeoCard>
              <div className="absolute top-10 -right-10 w-full h-full border-4 border-black bg-[#D4FF00] -z-0 rotate-3" />
            </div>
          </div>
        </div>
      </section>

      {/* Deep Dive SEO Content */}
      <section className="py-24 bg-white border-b-4 border-black">
        <div className="max-w-4xl mx-auto px-4 md:px-6">
          <h2 className="text-4xl md:text-5xl font-['Space_Grotesk'] font-black uppercase mb-8">
            Essential <span className="text-blue-500">US Labeling Requirements</span>
          </h2>
          
          <div className="prose prose-lg max-w-none font-['JetBrains_Mono'] text-gray-700 space-y-6">
            <p>
              Designing custom printed pouches is exciting, but for brands selling in the United States, artwork isn't just about aesthetics—it's a strict legal matter. The Food and Drug Administration (FDA), the Federal Trade Commission (FTC), and state-level bodies enforce rigorous regulations on what must (and must not) be printed on your packaging. A single missing element can result in expensive product recalls, retailer rejections, and legal liability. At POUCH.ECO, our pre-press team reviews your dielines to help ensure the technical printing aspects of your compliance are flawless.
            </p>

            <h3 className="text-2xl font-['Space_Grotesk'] font-black uppercase text-black mt-12 mb-4">FDA Nutrition Facts & Principal Display Panel</h3>
            <p>
              If you are packaging food, beverages, or supplements, the FDA mandates specific information be present. The front of your pouch (the Principal Display Panel or PDP) must clearly state the <strong>Statement of Identity</strong> (what the product is) and the <strong>Net Quantity of Contents</strong> (in both US and metric measurements, placed in the bottom 30% of the panel).
            </p>
            <p>
              On the back or side panel (the Information Panel), you must include the standard <strong>Nutrition Facts label</strong>, a comprehensive <strong>Ingredients List</strong> (ordered by predominance by weight), declaring any major food allergens (like nuts, dairy, or soy), and the <strong>Name and Address</strong> of the manufacturer, packer, or distributor.
            </p>

            <h3 className="text-2xl font-['Space_Grotesk'] font-black uppercase text-black mt-12 mb-4">FTC Environmental "Green" Guides</h3>
            <p>
              "Greenwashing" is heavily policed in the US. The FTC's Green Guides dictate how you can market the sustainability of your packaging. If you print "Recyclable" on your pouch, it must be recyclable in a substantial majority (at least 60%) of communities where the item is sold. If it's a Mono-PE pouch requiring store drop-off, you must clearly print instructions (such as the How2Recycle logo). If your bag is compostable, you must specify whether it is suitable for home or industrial facilities. Utilizing certified materials from POUCH.ECO allows you to confidently and legally print these claims.
            </p>

            <h3 className="text-2xl font-['Space_Grotesk'] font-black uppercase text-black mt-12 mb-4">California Proposition 65</h3>
            <p>
              If your product is sold in California, you must be aware of Prop 65. If your product or packaging contains chemicals known to the State of California to cause cancer or reproductive toxicity, a specific warning label must be printed on the pouch. Because POUCH.ECO uses premium, FDA-compliant inks, adhesives, and raw materials, our packaging materials inherently avoid introducing Prop 65 chemicals, making your compliance journey significantly easier.
            </p>

            <h3 className="text-2xl font-['Space_Grotesk'] font-black uppercase text-black mt-12 mb-4">UPC Barcodes</h3>
            <p>
              If you intend to sell your pouches in major US retailers (like Whole Foods, Walmart, or Target), you need a scannable GS1-issued UPC barcode. Our HP Indigo digital printers provide exceptional resolution (up to 1200 dpi), ensuring your barcodes print crisply in deep black over a white background for perfect scanning every time.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-gray-50 border-b-4 border-black">
        <div className="max-w-4xl mx-auto px-4 md:px-6">
          <h2 className="text-4xl md:text-5xl font-['Space_Grotesk'] font-black uppercase mb-12 text-center">
            Labeling <span className="text-blue-500">FAQ</span>
          </h2>

          <div className="space-y-6">
            {[
              {
                q: 'Where does the Net Weight have to go on my bag?',
                a: 'According to the FDA, the Net Quantity of Contents (Net Weight) must be placed within the bottom 30 percent of the Principal Display Panel (the front of the pouch) in a clear, bold font.'
              },
              {
                q: 'Do you check my artwork for FDA compliance?',
                a: 'While our pre-press team ensures your artwork prints flawlessly (checking resolution, bleed, and barcode scannability), the legal responsibility for the actual content, nutritional claims, and compliance rests with the brand owner. We recommend consulting a US labeling expert for final approval.'
              },
              {
                q: 'What color should my barcode be?',
                a: 'For reliable scanning in US retail stores, barcodes should always be printed in 100% black ink on a solid white background. Do not use colored backgrounds or colored bars.'
              },
              {
                q: 'Can I print the How2Recycle logo on my POUCH.ECO bags?',
                a: 'If you order our recyclable Mono-PE pouches, they meet the technical requirements for Store Drop-Off recycling in the US. However, you must officially register and license the How2Recycle logo directly through their organization to print it on your bags.'
              },
              {
                q: 'Do I need a "Made in USA" label?',
                a: 'If your final product is assembled/manufactured in the US from imported packaging, you typically do not need to label the packaging origin, but you must accurately label the origin of the food product per CBP and FTC rules.'
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
                  <span className="text-blue-500 flex-shrink-0">Q:</span>
                  {faq.q}
                </h3>
                <p className="font-['JetBrains_Mono'] text-sm text-gray-700 pl-8">
                  <span className="font-bold text-blue-500">A:</span> {faq.a}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-[#D4FF00] text-black border-t-4 border-black">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-10">
          <h2 className="font-black text-5xl md:text-7xl uppercase">Print With Confidence</h2>
          <p className="font-['JetBrains_Mono'] font-bold text-xl text-black">
            Our high-resolution HP Indigo presses ensure your barcodes scan and your FDA text is crystal clear.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
            <NeoButton href="https://calendly.com/30-min-free-packaging-consultancy" variant="primary" className="!bg-black !text-white w-full sm:w-auto text-xl py-4">
              Discuss Your Project <ArrowRight className="inline-block ml-2 w-6 h-6" />
            </NeoButton>
          </div>
        </div>
      </section>
    </PouchLayout>
  )
}
