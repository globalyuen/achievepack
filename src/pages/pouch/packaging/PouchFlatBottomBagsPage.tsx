import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { Package, Leaf, Zap, CheckCircle, ArrowRight, Shield, Award, Box } from 'lucide-react'
import PouchLayout from '../../../components/pouch/PouchLayout'
import { NeoButton, NeoCard, NeoBadge } from '../../../components/pouch/PouchUI'

export default function PouchFlatBottomBagsPage() {
  const floatAnim = {
    y: [0, -10, 0],
    transition: { duration: 2, repeat: Infinity, ease: "easeInOut" }
  }

  const title = "Flat Bottom Bags - Premium Packaging for Startups | POUCH.ECO"
  const description = "Premium flat bottom pouches (Box Bags) with low MOQ from 500 units. Maximum stability and shelf space. Perfect for coffee beans and premium snacks."

  return (
    <PouchLayout>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href="https://pouch.eco/packaging/flat-bottom-bags" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative pt-12 pb-24 border-b-4 border-black bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:20px_20px]">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 z-10">
              <div className="inline-block bg-[#FF00FF] text-white border-4 border-black px-4 py-2 transform -rotate-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <span className="font-['JetBrains_Mono'] font-bold text-sm">PREMIUM_TYPE: BOX_BAG_02</span>
              </div>
              
              <h1 className="font-black text-5xl md:text-7xl leading-[0.9] tracking-tighter uppercase">
                Premium.<br/>
                Stable.<br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4FF00] to-[#00FFFF] drop-shadow-[4px_4px_0px_rgba(0,0,0,1)]">Superior.</span>
              </h1>

              <p className="font-['JetBrains_Mono'] font-bold text-lg md:text-xl max-w-md bg-white border-2 border-black p-4 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] text-black">
                &gt; Maximum shelf volume.<br/>
                &gt; 5-panel branding protocol.<br/>
                &gt; High stability active.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <NeoButton href="https://calendly.com/30-min-free-packaging-consultancy">Get Quote</NeoButton>
                <NeoButton variant="secondary">Compare Formats</NeoButton>
              </div>
            </div>

            <div className="relative">
              <NeoCard className="bg-[#D4FF00] relative z-10 rotate-2 !p-0 overflow-hidden group border-4 border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
                <div className="aspect-square relative overflow-hidden">
                  <img 
                    src="/imgs/pouch/packaging/pouch_fb_hero.png" 
                    alt="Flat Bottom Pouch" 
                    className="w-full h-full object-cover group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500"
                  />
                  <motion.div animate={floatAnim} className="absolute top-4 right-4 bg-white border-2 border-black px-2 py-1 font-['JetBrains_Mono'] text-xs font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] z-20">
                    BOX_BOTTOM_TECH
                  </motion.div>
                </div>
              </NeoCard>
              <div className="absolute top-10 -right-10 w-full h-full border-4 border-black bg-[#00FFFF] -z-0 rotate-6" />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 px-4 md:px-6 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          <NeoCard color="bg-white">
            <Award className="w-12 h-12 mb-4 text-[#00FFFF]" />
            <h3 className="font-black text-3xl mb-4 uppercase">5-Panel Branding</h3>
            <p className="font-['JetBrains_Mono'] text-sm leading-relaxed mb-6">
              Print on the front, back, bottom, and two side gussets. Unrivaled visibility in the retail ecosystem.
            </p>
            <NeoBadge color="bg-[#FF00FF]">MAX_VISIBILITY</NeoBadge>
          </NeoCard>

          <NeoCard color="bg-[#00FFFF]">
            <Box className="w-12 h-12 mb-4 text-black" />
            <h3 className="font-black text-3xl mb-4 uppercase">Flat Foundation</h3>
            <p className="font-['JetBrains_Mono'] text-sm leading-relaxed mb-6">
              Maximum stability. Won't tip over on shelves. Looks like a box, functions like a pouch.
            </p>
            <NeoBadge color="bg-[#D4FF00]">ULTRA_STABLE</NeoBadge>
          </NeoCard>

          <NeoCard color="bg-[#D4FF00]">
            <Zap className="w-12 h-12 mb-4 text-[#FF00FF]" />
            <h3 className="font-black text-3xl mb-4 uppercase">Volume Optimization</h3>
            <p className="font-['JetBrains_Mono'] text-sm leading-relaxed mb-6">
              Holds more product in less space compared to standard stand-up pouches. Reduced logistics overhead.
            </p>
            <NeoBadge color="bg-white">SPACE_EFFICIENT</NeoBadge>
          </NeoCard>
        </div>
      </section>

      {/* Deep Dive SEO Content */}
      <section className="py-24 bg-white border-t-4 border-black">
        <div className="max-w-4xl mx-auto px-4 md:px-6">
          <h2 className="text-4xl md:text-5xl font-['Space_Grotesk'] font-black uppercase mb-8">
            The Ultimate Guide to <span className="text-[#FF00FF]">Flat Bottom Bags</span>
          </h2>
          
          <div className="prose prose-lg max-w-none font-['JetBrains_Mono'] text-gray-700 space-y-6">
            <p>
              When it comes to premium packaging, flat bottom bags—also known as box pouches or block bottom bags—represent the pinnacle of design and functionality. Unlike traditional stand-up pouches that utilize a folded bottom gusset, flat bottom bags are constructed with a completely flat, rectangular base. This unique architecture allows the bag to stand perfectly upright, mimicking the stability of a rigid box while retaining the lightweight and space-saving benefits of flexible packaging.
            </p>
            
            <img 
              src="/imgs/store/pouch shape/flat-bottom.webp" 
              alt="Premium coffee packaged in a custom printed flat bottom bag" 
              className="w-full h-80 object-cover border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] my-8"
            />

            <h3 className="text-2xl font-['Space_Grotesk'] font-black uppercase text-black mt-12 mb-4">The Power of 5-Panel Branding</h3>
            <p>
              One of the most significant advantages of flat bottom bags is the available surface area for branding. With five distinct panels—front, back, bottom, and two side gussets—brands have unparalleled real estate to communicate their story, display nutritional information, and showcase high-resolution artwork. The side gussets expand to hold more volume, but they can also be printed with contrasting colors or continuation graphics that make the product pop on crowded retail shelves.
            </p>
            <p>
              The flat bottom panel itself is a hidden gem for marketing. When bags are placed on higher shelves, consumers looking up will see your logo or a clever message printed directly on the base. This 360-degree branding capability ensures that your product is visually striking from every possible angle.
            </p>

            <h3 className="text-2xl font-['Space_Grotesk'] font-black uppercase text-black mt-12 mb-4">Volume Optimization and Logistics</h3>
            <p>
              Beyond aesthetics, flat bottom bags are highly efficient. Because of their box-like structure, they can hold up to 15% more product volume than a standard stand-up pouch of the same height and width. This structural efficiency translates directly to logistics savings. More bags can fit into a single shipping carton, reducing your carbon footprint during transportation and maximizing your warehousing space. For high-volume items like specialty coffee beans, loose leaf tea, protein powders, and pet kibble, this volume optimization is a game-changer.
            </p>
            
            <img 
              src="/imgs/topics/dtc_packaging_1778212333445.png" 
              alt="Flat bottom bags stacked efficiently for DTC shipping" 
              className="w-full h-80 object-cover border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] my-8"
            />

            <h3 className="text-2xl font-['Space_Grotesk'] font-black uppercase text-black mt-12 mb-4">Sustainable Flat Bottom Solutions</h3>
            <p>
              Historically, manufacturing flat bottom bags required complex, multi-layered plastic films that were impossible to recycle. At POUCH.ECO, we have pioneered sustainable solutions for this premium format. We now offer flat bottom bags in 100% recyclable mono-material structures (PE/PE) and TUV-certified home compostable materials. 
            </p>
            <p>
              By offering low MOQs starting at 500 units combined with digital printing technology, we allow emerging brands to utilize the same premium, sustainable packaging formats as multinational corporations, without the need to order tens of thousands of units upfront.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-gray-50 border-t-4 border-black">
        <div className="max-w-4xl mx-auto px-4 md:px-6">
          <h2 className="text-4xl md:text-5xl font-['Space_Grotesk'] font-black uppercase mb-12 text-center">
            Frequently Asked <span className="text-[#00FFFF]">Questions</span>
          </h2>

          <div className="space-y-6">
            {[
              {
                q: 'What makes a flat bottom bag different from a stand-up pouch?',
                a: 'A flat bottom bag features a completely flat, sealed base and side gussets, resembling a box. A standard stand-up pouch relies on a folded bottom gusset to stand. Flat bottom bags offer more volume, greater stability, and 5 panels for printing.'
              },
              {
                q: 'Are flat bottom bags suitable for coffee packaging?',
                a: 'Yes, they are the industry standard for premium specialty coffee. We can equip our flat bottom bags with one-way degassing valves to release CO2 while preventing oxygen from entering, keeping your roasted beans fresh.'
              },
              {
                q: 'What closures are available for box pouches?',
                a: 'We offer several resealable options including standard press-to-close zippers, pocket zippers (which allow for a clean top fill without opening the zipper), and tin ties, which are particularly popular for coffee and bakery items.'
              },
              {
                q: 'Can I get compostable flat bottom bags?',
                a: 'Absolutely. We specialize in eco-friendly packaging and offer flat bottom bags constructed from TUV-certified home compostable films, ensuring your premium packaging is also environmentally responsible.'
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
                  <span className="text-[#00FFFF] flex-shrink-0">Q:</span>
                  {faq.q}
                </h3>
                <p className="font-['JetBrains_Mono'] text-sm text-gray-700 pl-8">
                  <span className="font-bold text-[#00FFFF]">A:</span> {faq.a}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-[#FF00FF] border-t-4 border-black text-white">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-8">
          <h2 className="font-black text-5xl md:text-7xl uppercase">Upgrade Your Brand</h2>
          <p className="font-['JetBrains_Mono'] font-bold text-xl">
            Premium Box Bags for startups looking to compete with industry giants.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <NeoButton href="https://calendly.com/30-min-free-packaging-consultancy">Book Consultation</NeoButton>
            <NeoButton variant="secondary" className="!text-black">Order Samples</NeoButton>
          </div>
        </div>
      </section>
    </PouchLayout>
  )
}
