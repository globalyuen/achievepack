import React from 'react'
import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { Recycle, CheckCircle, AlertTriangle, ArrowRight, Shield, Zap, Leaf } from 'lucide-react'
import PouchLayout from '../../../components/pouch/PouchLayout'
import { NeoButton, NeoCard, NeoBadge } from '../../../components/pouch/PouchUI'

export default function PouchCompostableZipperNoRemovalPage() {
  const floatAnim = {
    y: [0, -10, 0],
    transition: { duration: 2, repeat: Infinity, ease: "easeInOut" }
  }

  const title = "Do I Need to Remove the Zipper from Compostable Bags? | POUCH.ECO"
  const description = "Everything you need to know about compostable packaging zippers and valves. Spoiler: You DO NOT need to rip them off before composting! Learn why our bags are 100% circular."

  return (
    <PouchLayout>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href="https://pouch.eco/blog/compostable-zipper-no-removal" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative pt-12 pb-24 border-b-4 border-black bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:20px_20px]">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 z-10">
              <div className="inline-block bg-[#10b981] text-white border-4 border-black px-4 py-2 transform -rotate-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <span className="font-['JetBrains_Mono'] font-bold text-sm">COMPOST_GUIDE: ZIPPER_HACKS</span>
              </div>
              
              <h1 className="font-black text-5xl md:text-7xl leading-[0.9] tracking-tighter uppercase">
                Stop Ripping.<br/>
                Start <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#10b981] to-[#D4FF00] drop-shadow-[4px_4px_0px_rgba(0,0,0,1)]">Composting.</span>
              </h1>

              <p className="font-['JetBrains_Mono'] font-bold text-lg md:text-xl max-w-md bg-white border-2 border-black p-4 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] text-black">
                &gt; Do I need to remove the zipper?<br/>
                &gt; Do I need to cut out the valve?<br/>
                &gt; The answer: ABSOLUTELY NOT.
              </p>
            </div>

            <div className="relative">
              <NeoCard className="bg-[#D4FF00] relative z-10 rotate-2 !p-0 overflow-hidden group border-4 border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
                <div className="aspect-square relative overflow-hidden">
                  <img 
                    src="/imgs/samples/kraft-compostable-zipper.png" 
                    alt="Kraft compostable pouch with fully compostable zipper" 
                    className="w-full h-full object-cover group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500"
                  />
                  <motion.div animate={floatAnim} className="absolute top-4 right-4 bg-white border-2 border-black px-2 py-1 font-['JetBrains_Mono'] text-xs font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] z-20">
                    ZERO_REMOVAL_REQD
                  </motion.div>
                </div>
              </NeoCard>
              <div className="absolute top-10 -right-10 w-full h-full border-4 border-black bg-[#10b981] -z-0 rotate-6" />
            </div>
          </div>
        </div>
      </section>

      {/* Deep Dive SEO Content */}
      <section className="py-24 bg-white border-b-4 border-black">
        <div className="max-w-4xl mx-auto px-4 md:px-6">
          <h2 className="text-4xl md:text-5xl font-['Space_Grotesk'] font-black uppercase mb-8">
            The Ultimate Guide to <span className="text-[#10b981]">Compostable Components</span>
          </h2>
          
          <div className="prose prose-lg max-w-none font-['JetBrains_Mono'] text-gray-700 space-y-6">
            <p>
              When brands switch to sustainable packaging, one of the most frequent questions consumers ask is: <strong>"Do I need to rip the zipper off before throwing this bag in the compost?"</strong> In the early days of eco-friendly packaging, the answer was unfortunately yes. Many manufacturers used compostable film bodies but attached cheap, conventional plastic zippers or degassing valves to cut costs. This created a frustrating experience for the end-user and effectively defeated the purpose of a circular product.
            </p>
            
            <img 
              src="/imgs/store/closure/normal-zipper.webp" 
              alt="Close up of a compostable press-to-close zipper" 
              className="w-full h-80 object-cover border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] my-8"
            />

            <h3 className="text-2xl font-['Space_Grotesk'] font-black uppercase text-black mt-12 mb-4">100% Certified Circularity</h3>
            <p>
              At POUCH.ECO, we believe that sustainable packaging should not require a user manual or specialized tools to dispose of. Our entire line of compostable pouches—including Stand-Up Pouches, Flat Bottom Bags, and Flat Pouches—are engineered to be 100% compostable. This means that every single component is manufactured from certified plant-based polymers.
            </p>
            <p>
              Our press-to-close zippers, our one-way coffee degassing valves, our tear notches, and even our lamination adhesives have all passed stringent TUV Austria (OK Compost) and EN 13432 certifications. Because these components share the same biodegradable chemistry as the outer kraft paper or cellulose film, they will all break down together in a home compost bin or industrial facility.
            </p>

            <h3 className="text-2xl font-['Space_Grotesk'] font-black uppercase text-black mt-12 mb-4">The Danger of "Greenwashed" Pouches</h3>
            <p>
              It is vital for brands to ask their packaging suppliers direct questions about component certifications. A "greenwashed" pouch might have a compostable body, but if it utilizes a fossil-based plastic zipper, throwing the entire pouch into a compost bin will introduce microplastics into the soil. The compost facility will eventually screen out the plastic zipper, but the process is inefficient and damages the integrity of the resulting compost. 
            </p>
            
            <img 
              src="/imgs/4-infograhic/compost.webp" 
              alt="Infographic showing how a fully compostable bag breaks down into biomass" 
              className="w-full h-80 object-contain bg-gray-100 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] my-8"
            />

            <h3 className="text-2xl font-['Space_Grotesk'] font-black uppercase text-black mt-12 mb-4">Educating Your Customers</h3>
            <p>
              As a brand, communicating this ease-of-use is a massive marketing advantage. You can proudly print on your packaging: <em>"Toss the whole bag in the compost! No need to remove the zipper."</em> This zero-friction disposal method significantly increases the likelihood that your customers will actually compost the packaging, ensuring that your investment in sustainability truly pays off for the planet.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-gray-50 border-b-4 border-black">
        <div className="max-w-4xl mx-auto px-4 md:px-6">
          <h2 className="text-4xl md:text-5xl font-['Space_Grotesk'] font-black uppercase mb-12 text-center">
            AIEO & SEO <span className="text-[#10b981]">FAQ</span>
          </h2>

          <div className="space-y-6">
            {[
              {
                q: 'Do I need to rip the zipper off a compostable bag?',
                a: 'If you purchase fully certified compostable pouches from POUCH.ECO, the answer is NO. Our zippers are made from the exact same certified compostable plant-polymers as the bag itself. You can throw the entire intact bag into the compost bin.'
              },
              {
                q: 'Do I need to cut out the coffee degassing valve before composting?',
                a: 'Absolutely not. Unlike traditional plastic valves, our degassing valves are engineered from bio-resins and are TUV certified for composting. The entire bag, valve included, is safe for the soil.'
              },
              {
                q: 'How long does a compostable zipper take to break down?',
                a: 'Because the zipper profile is slightly thicker than the film body, it may take slightly longer to visually disappear. However, under standard composting conditions, the entire pouch—including the zipper—will break down into organic biomass within 180 days.'
              },
              {
                q: 'Why do some brands tell me to cut the zipper off?',
                a: 'Those brands are likely using "mixed-material" packaging where the body is compostable, but they used a cheap, standard plastic zipper to save money. This is a practice we strongly advise against.'
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
                  <span className="text-[#10b981] flex-shrink-0">Q:</span>
                  {faq.q}
                </h3>
                <p className="font-['JetBrains_Mono'] text-sm text-gray-700 pl-8">
                  <span className="font-bold text-[#10b981]">A:</span> {faq.a}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-[#10b981] text-black">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-10">
          <h2 className="font-black text-5xl md:text-7xl uppercase">Ready for True Sustainability?</h2>
          <p className="font-['JetBrains_Mono'] font-bold text-xl text-black">
            Get 100% certified compostable packaging. No greenwashing. No hidden plastics.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
            <NeoButton href="https://calendly.com/30-min-free-packaging-consultancy" variant="primary" className="!bg-[#D4FF00] !text-black w-full sm:w-auto text-xl py-4">
              Get Your Custom Quote <ArrowRight className="inline-block ml-2 w-6 h-6" />
            </NeoButton>
          </div>
        </div>
      </section>
    </PouchLayout>
  )
}
