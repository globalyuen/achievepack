import React from 'react'
import DualDomainSEOHead from '../../../components/DualDomainSEOHead'
import { motion } from 'framer-motion'
import { Layers, CheckCircle, ArrowRight, Package, Grid, BookOpen } from 'lucide-react'
import PouchLayout from '../../../components/pouch/PouchLayout'
import { NeoButton, NeoCard } from '../../../components/pouch/PouchUI'

export default function PouchAllOptionsPage() {
  const title = "All Packaging Options Overview | Custom Pouches | POUCH.ECO"
  const description = "Explore the complete library of custom packaging options. From materials and pouch shapes to zippers, valves, and advanced printing techniques."

  return (
    <PouchLayout>
      <DualDomainSEOHead
        title={title}
        description={description}
      />

      {/* Hero Section */}
      <section className="relative pt-12 pb-24 border-b-4 border-black bg-purple-500">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 z-10">
              <div className="inline-block bg-white text-black border-4 border-black px-4 py-2 transform rotate-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <span className="font-['JetBrains_Mono'] font-bold text-sm tracking-wider">KNOWLEDGE_BASE // OPTIONS</span>
              </div>
              
              <h1 className="font-black text-6xl md:text-8xl leading-[0.9] tracking-tighter uppercase text-white drop-shadow-[4px_4px_0px_rgba(0,0,0,1)]">
                Infinite <span className="text-black drop-shadow-[4px_4px_0px_rgba(255,255,255,1)]">Possibilities.</span>
              </h1>

              <p className="font-['JetBrains_Mono'] font-bold text-lg md:text-xl max-w-md bg-black border-2 border-white p-4 shadow-[8px_8px_0px_0px_rgba(255,255,255,1)] text-white">
                Master the anatomy of the perfect pouch. Discover every material, structure, closure, and printing finish available for your brand.
              </p>
            </div>

            <div className="relative">
              <NeoCard className="bg-white relative z-10 -rotate-3 !p-0 overflow-hidden group border-4 border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
                <div className="aspect-square relative overflow-hidden flex flex-col items-center justify-center bg-gray-100 p-8">
                  <div className="grid grid-cols-2 gap-4 w-full h-full">
                     <div className="bg-blue-200 border-4 border-black flex items-center justify-center p-4">
                        <span className="font-['Space_Grotesk'] font-black uppercase text-center">Stand-Up</span>
                     </div>
                     <div className="bg-green-200 border-4 border-black flex items-center justify-center p-4">
                        <span className="font-['Space_Grotesk'] font-black uppercase text-center">Flat Bottom</span>
                     </div>
                     <div className="bg-yellow-200 border-4 border-black flex items-center justify-center p-4">
                        <span className="font-['Space_Grotesk'] font-black uppercase text-center">Zippers</span>
                     </div>
                     <div className="bg-pink-200 border-4 border-black flex items-center justify-center p-4">
                        <span className="font-['Space_Grotesk'] font-black uppercase text-center">Valves</span>
                     </div>
                  </div>
                  <div className="absolute top-4 right-4 bg-black text-white border-2 border-white px-3 py-1 font-['JetBrains_Mono'] font-bold text-sm shadow-[4px_4px_0px_0px_rgba(255,255,255,1)]">
                    MASTER_GUIDE
                  </div>
                </div>
              </NeoCard>
              <div className="absolute top-10 -right-10 w-full h-full border-4 border-black bg-black -z-0 rotate-6" />
            </div>
          </div>
        </div>
      </section>

      {/* Deep Dive SEO Content */}
      <section className="py-24 bg-white border-b-4 border-black">
        <div className="max-w-4xl mx-auto px-4 md:px-6">
          <h2 className="text-4xl md:text-5xl font-['Space_Grotesk'] font-black uppercase mb-8">
            The Complete Anatomy of <span className="text-purple-500">Flexible Packaging</span>
          </h2>
          
          <div className="prose prose-lg max-w-none font-['JetBrains_Mono'] text-gray-700 space-y-6">
            <p>
              Building the perfect custom pouch is like assembling a high-performance vehicle. Every layer, seal, and component serves a specific structural, aesthetic, or protective purpose. Whether you are packaging premium roasted coffee, organic pet treats, or liquid cosmetics, understanding the full spectrum of packaging options empowers you to make decisions that enhance shelf-life, brand perception, and sustainability.
            </p>

            <h3 className="text-2xl font-['Space_Grotesk'] font-black uppercase text-black mt-12 mb-4">1. Pouch Formats & Structures</h3>
            <p>
              The foundation of your packaging is its physical shape. The structure determines how much volume the bag holds, how it sits on a retail shelf, and how consumers interact with it.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-black">
              <li><strong>Stand-Up Pouches (Doypack):</strong> The industry standard. Features a bottom gusset that expands to allow the bag to stand upright. Excellent billboard space and highly cost-effective.</li>
              <li><strong>Flat Bottom Bags (Box Pouches):</strong> Premium format featuring side gussets and a completely flat base. Offers five printable panels and unmatched shelf stability. Perfect for coffee and premium snacks.</li>
              <li><strong>Three-Side Seal (Flat Pouches):</strong> Lays flat. Ideal for single-serve items, sample packs, or products designed to be hung on retail pegboards.</li>
              <li><strong>Spouted Pouches:</strong> Stand-up pouches equipped with a rigid plastic spout and cap. Essential for liquids, purees, and baby food.</li>
            </ul>

            <h3 className="text-2xl font-['Space_Grotesk'] font-black uppercase text-black mt-12 mb-4">2. Material Engineering</h3>
            <p>
              Flexible packaging utilizes multi-layer laminations. The outer layer handles printing, the middle layers provide barrier protection, and the inner layer creates the heat seal.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-black">
              <li><strong>Conventional (PET/VMPET/PE):</strong> The traditional high-barrier structure. Highly durable, long shelf life, but not recyclable.</li>
              <li><strong>Recyclable (Mono-PE):</strong> Constructed entirely of Polyethylene. Offers excellent barrier properties and is 100% recyclable at store drop-off locations (How2Recycle).</li>
              <li><strong>Compostable (Kraft/Cellulose/PLA):</strong> Plant-based materials designed to break down in industrial or home compost environments (ASTM D6400 certified).</li>
              <li><strong>PCR (Post-Consumer Recycled):</strong> Incorporates up to 50% recycled plastic, reducing reliance on virgin fossil fuels.</li>
            </ul>

            <img 
              src="/imgs/function/roll/a_achievepack_zipper_technology_4352447.webp" 
              alt="Close up of zipper technologies on flexible pouches" 
              className="w-full h-80 object-cover border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] my-8"
            />

            <h3 className="text-2xl font-['Space_Grotesk'] font-black uppercase text-black mt-12 mb-4">3. Closures and Add-ons</h3>
            <p>
              Enhancing consumer convenience and product freshness relies on specific structural additions.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-black">
              <li><strong>Press-to-Close Zippers:</strong> Standard resealable zippers to lock in freshness after the initial opening. (Available in compostable and recyclable variants).</li>
              <li><strong>Child-Resistant (CR) Zippers:</strong> ASTM D3475 certified locking mechanisms essential for cannabis edibles, pharmaceuticals, or toxic household chemicals.</li>
              <li><strong>Degassing Valves:</strong> One-way valves that allow CO2 to escape (crucial for freshly roasted coffee) while blocking oxygen from entering.</li>
              <li><strong>Tear Notches & Laser Scoring:</strong> Pre-cut notches or laser-weakened lines that allow the consumer to open the sealed pouch easily without scissors.</li>
            </ul>

            <h3 className="text-2xl font-['Space_Grotesk'] font-black uppercase text-black mt-12 mb-4">4. Surface Finishes</h3>
            <p>
              The tactile and visual experience of your pouch is dictated by its finish.
            </p>
            <p>
              <strong>Matte</strong> provides a smooth, premium, non-reflective look. <strong>Gloss</strong> offers vibrant color popping and high shine. <strong>Soft-Touch</strong> (velvet) provides an ultra-premium, tactile feel. You can also utilize <strong>Spot UV</strong> to combine a matte bag with high-gloss specific elements (like your logo) for striking contrast.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-gray-50 border-b-4 border-black">
        <div className="max-w-4xl mx-auto px-4 md:px-6">
          <h2 className="text-4xl md:text-5xl font-['Space_Grotesk'] font-black uppercase mb-12 text-center">
            Options <span className="text-purple-500">FAQ</span>
          </h2>

          <div className="space-y-6">
            {[
              {
                q: 'Can I combine different options, like a compostable bag with a window and a zipper?',
                a: 'Yes! We specialize in highly engineered custom pouches. You can request a 100% compostable stand-up pouch complete with a high-clarity compostable window, a plant-based zipper, and matte printing.'
              },
              {
                q: 'What is the difference between a Stand-Up Pouch and a Flat Bottom Bag?',
                a: 'A Stand-Up Pouch has two sealed sides and a bottom gusset that folds out. A Flat Bottom Bag has a completely flat, rectangular base and side gussets, giving it a box-like shape. Flat Bottom bags are generally considered more premium and hold slightly more volume for their height.'
              },
              {
                q: 'Do I have to pay extra for tear notches?',
                a: 'No. Standard tear notches are included in the manufacturing process of almost all sealed pouches at no additional cost.'
              },
              {
                q: 'What is Spot UV finishing?',
                a: 'Spot UV is a specialized printing technique where a high-gloss varnish is applied only to specific areas of a matte pouch (like a logo or pattern). This creates a highly premium, contrasting visual and tactile effect.'
              },
              {
                q: 'Can I get a custom-shaped pouch?',
                a: 'Yes. Beyond standard rectangles, we can create custom die-cut shapes (like jars, animals, or geometric designs) to make your product truly unique on the shelf. This requires a specific die-tooling fee.'
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
                  <span className="text-purple-500 flex-shrink-0">Q:</span>
                  {faq.q}
                </h3>
                <p className="font-['JetBrains_Mono'] text-sm text-gray-700 pl-8">
                  <span className="font-bold text-purple-500">A:</span> {faq.a}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-black text-white">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-10">
          <h2 className="font-black text-5xl md:text-7xl uppercase">Build Your Pouch</h2>
          <p className="font-['JetBrains_Mono'] font-bold text-xl text-gray-300">
            Combine any material, shape, and finish. Our packaging experts will help you engineer the perfect solution.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
            <NeoButton href="https://calendly.com/30-min-free-packaging-consultancy" variant="primary" className="!bg-[#D4FF00] !text-black w-full sm:w-auto text-xl py-4">
              Consult an Expert <ArrowRight className="inline-block ml-2 w-6 h-6" />
            </NeoButton>
          </div>
        </div>
      </section>
    </PouchLayout>
  )
}
