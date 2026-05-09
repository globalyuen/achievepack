import React from 'react'
import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { CheckCircle, ArrowRight, XCircle } from 'lucide-react'
import PouchLayout from '../../../components/pouch/PouchLayout'
import { NeoButton, NeoCard } from '../../../components/pouch/PouchUI'

export default function PouchKSealStandUpPouchesPage() {
  const title = "What is a K-Seal Stand-Up Pouch? | Flexible Packaging | POUCH.ECO"
  const description = "Learn the difference between K-Seal, Doyen (U-Seal), and Plow Bottom gussets. Discover why K-Seal is the industry standard for heavier products."

  return (
    <PouchLayout>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href="https://pouch.eco/knowledge/k-seal-stand-up-pouches" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative pt-12 pb-24 border-b-4 border-black bg-[#10b981]">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 z-10">
              <div className="inline-block bg-white text-black border-4 border-black px-4 py-2 transform rotate-1 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <span className="font-['JetBrains_Mono'] font-bold text-sm tracking-wider">KNOWLEDGE_BASE // BOTTOM_GUSSETS</span>
              </div>
              
              <h1 className="font-black text-6xl md:text-8xl leading-[0.9] tracking-tighter uppercase text-black drop-shadow-[4px_4px_0px_rgba(255,255,255,1)]">
                Crack the <span className="text-white drop-shadow-[4px_4px_0px_rgba(0,0,0,1)]">K-Seal.</span>
              </h1>

              <p className="font-['JetBrains_Mono'] font-bold text-lg md:text-xl max-w-md bg-black border-2 border-white p-4 shadow-[8px_8px_0px_0px_rgba(255,255,255,1)] text-white">
                Not all stand-up pouches are created equal. Dive into the engineering behind bottom gussets and why the K-Seal is the undisputed champion for holding weight.
              </p>
            </div>

            <div className="relative">
              <NeoCard className="bg-white relative z-10 -rotate-2 !p-0 overflow-hidden group border-4 border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
                <div className="aspect-square relative overflow-hidden">
                   <img 
                    src="/imgs/pouch-shape/k-seal/a_achievepack_detail_08_flat_lay_seal_2058466.webp" 
                    alt="Close up of the K-Seal design on the bottom corner of a stand up pouch" 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 bg-white"
                  />
                  <div className="absolute top-4 right-4 bg-[#D4FF00] border-2 border-black px-3 py-1 font-['Space_Grotesk'] font-bold text-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] text-black">
                    STRUCTURAL INTEGRITY
                  </div>
                </div>
              </NeoCard>
              <div className="absolute top-10 -right-10 w-full h-full border-4 border-black bg-black -z-0 rotate-3" />
            </div>
          </div>
        </div>
      </section>

      {/* Deep Dive SEO Content */}
      <section className="py-24 bg-white border-b-4 border-black">
        <div className="max-w-4xl mx-auto px-4 md:px-6">
          <h2 className="text-4xl md:text-5xl font-['Space_Grotesk'] font-black uppercase mb-8">
            The Engineering of <span className="text-[#10b981]">Bottom Gussets</span>
          </h2>
          
          <div className="prose prose-lg max-w-none font-['JetBrains_Mono'] text-gray-700 space-y-6">
            <p>
              When a consumer looks at a Stand-Up Pouch (also known as a Doypack), they rarely think about how it actually stands up. The secret lies entirely in the engineering of the bottom gusset. The way the bottom fold is heat-sealed determines how much weight the bag can hold without tearing, and how stable it will be on a retail shelf. Among the different styles, the <strong>K-Seal</strong> is the heavy-duty standard.
            </p>

            <img 
              src="/imgs/pouch-shape/k-seal/a_kseal_gusset_grain_cereal_4708928.webp" 
              alt="High barrier pouch showing the structural stability of the gusset" 
              className="w-full h-80 object-cover border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] my-8"
            />

            <h3 className="text-2xl font-['Space_Grotesk'] font-black uppercase text-black mt-12 mb-4">What exactly is a K-Seal?</h3>
            <p>
              A K-Seal gets its name from the appearance of the seals at the bottom corners of the pouch. If you look closely at the bottom edge of the bag, you will see heat seals that angle inward, resembling the letter "K". 
            </p>
            <p>
              During manufacturing, the bottom gusset is inserted, and a diagonal seal is applied across the corners. This diagonal seal relieves stress from the very bottom corner point of the bag, distributing the weight of the product across a wider, reinforced area.
            </p>

            <div className="grid md:grid-cols-2 gap-8 my-12">
               <div className="bg-emerald-50 border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                  <h4 className="font-['Space_Grotesk'] font-black text-xl mb-2 text-black">When to use a K-Seal:</h4>
                  <ul className="text-sm space-y-2">
                    <li>✓ Heavy products (1lb, 2lb, 5lb bags)</li>
                    <li>✓ Liquids and purees</li>
                    <li>✓ Dense powders (Whey protein, sugar)</li>
                    <li>✓ Large volume items (Pet food)</li>
                  </ul>
               </div>
               <div className="bg-red-50 border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                  <h4 className="font-['Space_Grotesk'] font-black text-xl mb-2 text-black">When NOT to use a K-Seal:</h4>
                  <ul className="text-sm space-y-2">
                    <li>✗ Very light, single-serve items</li>
                    <li>✗ Bags holding less than 4oz (100g)</li>
                    <li>✗ When a fully flat bottom is required</li>
                  </ul>
               </div>
            </div>

            <h3 className="text-2xl font-['Space_Grotesk'] font-black uppercase text-black mt-12 mb-4">K-Seal vs. Doyen (Round) Bottom</h3>
            <p>
              The <strong>Doyen (or Round Bottom)</strong> is the other most common gusset style. Instead of an angled K-shape, the seal is a smooth, continuous "U" shape that curves across the bottom. 
            </p>
            <p>
              Doyen seals are fantastic for lightweight products (like 2oz snack bags or small cosmetic samples) because the curved seal acts like a spring, forcing the bottom of the bag open so it stands up even when empty. However, because the Doyen seal does not reinforce the corners, putting a heavy product (like 2lbs of coffee) inside can cause the bottom corners to "blow out" or tear under the pressure. This is why the K-Seal is mandatory for heavier weights.
            </p>

            <h3 className="text-2xl font-['Space_Grotesk'] font-black uppercase text-black mt-12 mb-4">K-Seal vs. Plow Bottom (Corner Gusset)</h3>
            <p>
              A <strong>Plow Bottom</strong> bag is essentially a continuous piece of film folded at the bottom (like a V), with no bottom seal at all. The weight of the product pushes the fold flat, allowing it to stand. Plow bottoms are rarely used for heavy items because without seals to dictate the shape, the bottom can bulge unevenly, causing the bag to tip over on the shelf.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-gray-50 border-b-4 border-black">
        <div className="max-w-4xl mx-auto px-4 md:px-6">
          <h2 className="text-4xl md:text-5xl font-['Space_Grotesk'] font-black uppercase mb-12 text-center">
            Gusset <span className="text-[#10b981]">FAQ</span>
          </h2>

          <div className="space-y-6">
            {[
              {
                q: 'Does a K-Seal cost more than a Doyen seal?',
                a: 'No. The cost of a Stand-Up Pouch is driven by the dimensions and materials, not the shape of the bottom seal. We will automatically specify a K-Seal or Doyen seal based on the dimensions and intended weight of your product.'
              },
              {
                q: 'Can a K-Seal bag stand up when it is empty?',
                a: 'Unlike a Doyen style bag which naturally springs open, a K-Seal bag tends to lay relatively flat when completely empty. It relies on the weight and volume of the product being dropped inside to push the gusset open and form a stable base.'
              },
              {
                q: 'What is the maximum weight a K-Seal bag can hold?',
                a: 'With properly engineered multi-layer laminations, a large K-Seal stand-up pouch can comfortably hold 5 to 10 pounds (e.g., large pet food bags or bulk flour). For extreme weights (20+ lbs), woven polypropylene (WPP) bags or quad-seal formats are recommended.'
              },
              {
                q: 'Are Flat Bottom bags better than K-Seal Stand-Up Pouches?',
                a: 'Flat Bottom (Box) bags offer superior shelf stability and an extra printable panel on the completely flat base. They are considered a more premium packaging format, but they are also more expensive to manufacture than standard K-Seal pouches.'
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
      <section className="py-24 bg-black text-white">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-10">
          <h2 className="font-black text-5xl md:text-7xl uppercase">Stand Out. Stand Up.</h2>
          <p className="font-['JetBrains_Mono'] font-bold text-xl text-gray-300">
            Let our packaging engineers determine the perfect gusset and structure for your heavy-duty products.
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
